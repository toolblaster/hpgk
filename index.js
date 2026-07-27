/**
 * --------------------------------------------------------------------------
 * HPGK QUIZ PLATFORM - SECURE WEBHOOK SERVER (GCP Cloud Functions Gen 2)
 * Strictly verifies signatures, checks idempotency, & automates pass allocation
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

// Razorpay Secret - Webhook setting se match hona chahiye
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "hpgk_super_secret_key_123";

// 🔥 REGISTER GOOGLE CLOUD FUNCTION ENTRYPOINT
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

        // GCP Cloud Functions preserves raw body buffer in req.rawBody
        if (!req.rawBody) {
            console.error("[!] req.rawBody is missing. Signature verification cannot proceed.");
            return res.status(400).send('Missing Raw Body Buffer');
        }

        // 1. Digital Signature Verification utilizing the RAW BODY BUFFER
        const expectedSignature = crypto
            .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
            .update(req.rawBody)
            .digest('hex');

        if (expectedSignature !== signature) {
            console.error("[!] Security Failed: Digital Signature Verification Mismatch!");
            return res.status(400).send('Signature Verification Mismatch');
        }

        console.log("[+] Security Passed: Razorpay Webhook Digitally Verified.");

        const event = req.body.event;
        console.log(`[i] Event Received: ${event}`);

        // Handle ONLY final successful captured payment events (Prevents double triggering)
        if (event === 'payment.captured') {
            const payment = req.body.payload.payment.entity;
            const uid = payment.notes ? payment.notes.uid : null;
            const planId = payment.notes ? payment.notes.planId : null;

            if (!uid || !planId) {
                console.warn("[!] Payment ignored: Missing Notes (uid or planId).");
                return res.status(200).send('Missing critical metadata, ignored.');
            }

            // 2. STAGE-2 VALIDATION: Strict price verification on the backend
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

            // Razorpay amount passes in Paise (e.g. ₹89 = 8900 paise)
            const paidAmount = payment.amount / 100; 

            if (paidAmount !== expectedPrice) {
                console.error(`[!] Security Warning: Expected ₹${expectedPrice} for plan '${planId}' but user paid ₹${paidAmount}. Access denied!`);
                return res.status(400).send('Price Validation Mismatch');
            }

            console.log(`[+] Payment Validated: ₹${paidAmount} received for '${planId}' from User '${uid}'`);

            // 3. IDEMPOTENCY CHECK: Check if this payment was already processed
            const userRef = db.collection('artifacts').doc('hpgk-quiz').collection('users').doc(uid);
            const userDoc = await userRef.get();

            if (userDoc.exists) {
                const existingPasses = userDoc.data().passes || {};
                const currentPass = existingPasses[planId];
                if (currentPass && currentPass.paymentId === payment.id) {
                    console.log(`[i] Idempotency Hit: Payment ID '${payment.id}' was already processed. Skipping rewrite.`);
                    return res.status(200).send('Payment already processed');
                }
            }

            // 4. SECURE PASS ALLOCATION WITH EXACT TIMESTAMPS
            const now = new Date();
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 30); // Valid for 30 Days (720 Hours)

            const passData = {
                name: planName,
                purchaseDate: now.toLocaleDateString('en-IN'),
                expiryDate: expiryDate.toLocaleDateString('en-IN'),
                timestamp: now.getTime(),
                expiryTimestamp: expiryDate.getTime(),          // Milliseconds timestamp for core.js
                expiryDateTimestamp: expiryDate.getTime(),      // Milliseconds timestamp for Storage Rules
                paymentId: payment.id,
                mode: "Razorpay_Webhook_Verified"
            };

            // Atomically write pass into private passes vault
            await userRef.set({
                passes: {
                    [planId]: passData
                }
            }, { merge: true });

            console.log(`[SUCCESS] Pass '${planId}' (Expires: ${passData.expiryDate}) instantly assigned to User '${uid}'!`);
        }

        res.status(200).send('Webhook Processed Successfully');
    } catch (error) {
        console.error("[CRITICAL ERROR] Webhook Processing Crashed:", error);
        res.status(500).send('Internal Server Error');
    }
});
