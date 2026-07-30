/**
 * --------------------------------------------------------------------------
 * HPGK QUIZ PLATFORM - SECURE WEBHOOK SERVER (GCP Cloud Functions Gen 2)
 * Production Hardened: Timing-Safe Verification, Idempotency & Timestamp Validations
 * --------------------------------------------------------------------------
 */

const functions = require('@google-cloud/functions-framework');
const admin = require('firebase-admin');
const crypto = require('crypto');

// Initialize Firebase Admin (Only once)
if (admin.apps.length === 0) {
    admin.initializeApp();
}
const db = admin.firestore();

// Razorpay Secret - Match with Razorpay Dashboard Webhook settings
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "hpgk_super_secret_key_123";

// REGISTER GOOGLE CLOUD FUNCTION ENTRYPOINT
functions.http('razorpayWebhook', async (req, res) => {
    try {
        // Only accept POST requests
        if (req.method !== 'POST') {
            return res.status(405).send('Method Not Allowed');
        }

        const signature = req.headers['x-razorpay-signature'];
        
        if (!signature) {
            console.error("[!] Missing Razorpay Signature Header.");
            return res.status(400).send('Missing Signature');
        }

        if (!req.rawBody) {
            console.error("[!] req.rawBody is missing. Signature verification cannot proceed.");
            return res.status(400).send('Missing Raw Body Buffer');
        }

        // 1. TIMING-SAFE DIGITAL SIGNATURE VERIFICATION
        const expectedSignature = crypto
            .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
            .update(req.rawBody)
            .digest('hex');

        const signatureBuffer = Buffer.from(signature, 'utf8');
        const expectedBuffer = Buffer.from(expectedSignature, 'utf8');

        if (signatureBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) {
            console.error("[!] Security Failed: Digital Signature Verification Mismatch!");
            return res.status(400).send('Signature Verification Mismatch');
        }

        console.log("[+] Security Passed: Razorpay Webhook Digitally Verified.");

        const event = req.body.event;
        console.log(`[i] Event Received: ${event}`);

        // Handle successful payment events securely
        if (event === 'payment.captured' || event === 'payment.authorized') {
            const payment = req.body.payload.payment.entity;
            const uid = payment.notes ? payment.notes.uid : null;
            const planId = payment.notes ? payment.notes.planId : null;
            const paymentId = payment.id;

            if (!uid || !planId) {
                console.warn("[!] Payment ignored: Missing Notes (uid or planId).");
                return res.status(200).send('Missing critical metadata, ignored.');
            }

            // 2. IDEMPOTENCY CHECK: Prevent duplicate processing on Razorpay retries
            const paymentLogRef = db.collection('artifacts').doc('hpgk-quiz').collection('processed_payments').doc(paymentId);
            const paymentLogSnap = await paymentLogRef.get();

            if (paymentLogSnap.exists) {
                console.log(`[i] Idempotency Notice: Payment ID '${paymentId}' already processed. Skipping duplicate execution.`);
                return res.status(200).send('Payment already processed');
            }

            // 3. STAGE-2 VALIDATION: Strict Backend Price Check
            let expectedPrice = 0;
            let planName = '';

            if (planId === 'mcq_pro_pass') {
                expectedPrice = 39; // ₹39 per month
                planName = 'MCQ Pro Pass (VIP)';
            } else if (planId === 'mock_master_pass') {
                expectedPrice = 89; // ₹89 per month
                planName = 'Mock Master Pass (All Inclusive)';
            } else {
                console.warn(`[!] Plan ID '${planId}' is unknown.`);
                return res.status(400).send('Unknown plan ID');
            }

            const paidAmount = payment.amount / 100; // Convert Paise to Rupees

            if (paidAmount !== expectedPrice) {
                console.error(`[!] Security Warning: Expected ₹${expectedPrice} for plan '${planId}' but user paid ₹${paidAmount}. Access denied!`);
                return res.status(400).send('Price Validation Mismatch');
            }

            console.log(`[+] Payment Validated: ₹${paidAmount} received for '${planId}' from User '${uid}'`);

            // 4. SECURE PASS ALLOCATION
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 30); // 30-Day Pass

            const passData = {
                name: planName,
                purchaseDate: new Date().toLocaleDateString('en-IN'),
                expiryDate: expiryDate.toLocaleDateString('en-IN'),
                expiryTimestamp: expiryDate.getTime(), // Precise epoch timestamp for HPGK_IsPassValid
                timestamp: Date.now(),
                paymentId: paymentId,
                mode: "Razorpay_Webhook_Verified"
            };

            const userRef = db.collection('artifacts').doc('hpgk-quiz').collection('users').doc(uid);
            
            // Atomic Batch Write: Grants pass & records payment idempotency log in one operation
            const batch = db.batch();
            
            batch.set(userRef, {
                passes: {
                    [planId]: passData
                }
            }, { merge: true });

            batch.set(paymentLogRef, {
                uid: uid,
                planId: planId,
                amount: paidAmount,
                processedAt: Date.now()
            });

            await batch.commit();

            console.log(`[SUCCESS] Pass '${planId}' assigned to User '${uid}' and Payment Logged!`);
        }

        res.status(200).send('Webhook Processed Successfully');
    } catch (error) {
        console.error("[CRITICAL ERROR] Webhook Processing Crashed:", error);
        res.status(500).send('Internal Server Error');
    }
});
