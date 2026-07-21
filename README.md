🏔️ HPGK Quiz Platform - Complete Technical Documentation

Welcome to the official documentation for the HPGK Quiz Platform (hpgk.toolblaster.com). This platform provides high-quality, bilingual mock tests, topic-wise practice MCQs, and study materials for Himachal Pradesh competitive exams (HPAS, HPPSC, Allied Services, Patwari, Police Constable, HRTC Conductor, etc.).

🌟 1. Project Overview & Key Features

Bilingual Engine: Questions, options, and detailed explanations are rendered in both English and Hindi simultaneously.

Strict Exam Simulation: TCS/NTA-style interface featuring custom timers, negative marking (-0.25), question palette navigation, section switching, and real-time marking badges.

Secure Cloud Storage Vault: Premium full-length mock test JSON files are isolated inside Firebase Cloud Storage (gs://hpgk-quiz.firebasestorage.app/premium_mocks/) rather than public directories, protected by secure rules and CORS configuration.

Cost-Optimized Cloud Sync: Local progress is stored instantly in LocalStorage and batched to Firebase Firestore every 15 questions or on page unload, cutting database write costs by over 90%.

Dynamic Mock State: Automatically detects completed tests, displays green score badges (Score: X/Y), and seamlessly swaps UI buttons to Summary and Re-attempt modes without unnecessary DB reads.

Automated Payments & Webhooks: Integrated with Razorpay and Google Cloud Run webhooks for real-time pass allocation upon payment capture.

Super Admin Control Room: Multi-tab admin dashboard (user/admin.html) to manage live users, grant/revoke passes, track transactions, and extract student emails.

🛠️ 2. Tech Stack & Infrastructure

Frontend: Pure HTML5, CSS3 (Custom Glassmorphism CSS variables), Vanilla JavaScript (ES6+ ES Modules). Zero framework bloat (no React/Vue/jQuery).

Database: Firebase Firestore (NoSQL Document Store).

Authentication: Firebase Auth (Google OAuth 2.0).

Secure Storage: Firebase Cloud Storage (gs://hpgk-quiz.firebasestorage.app) for encrypted/protected JSON exam banks with CORS configuration.

Backend Webhook: Google Cloud Run (Node.js 22 runtime with firebase-admin SDK).

Typography & Styling: 'Inter' for English, 'Noto Sans Devanagari' for Hindi, with custom dark/light theme persistence.

🏗️ 3. Core Architecture: The System Engines

A. js/core.js (Session & UI Security Guard)

Manages global user state (window.HPGK_User) and handles Google Auth state changes.

Syncs user passes securely from Firestore on login.

Enforces UI copy protection: Blocks right-click, F12, inspect element, text selection, and copying.

Injects decoy security tokens into navigation links to neutralize URL tampering.

B. js/access-guard.js (Paywall Enforcement)

Evaluates user quotas against window.PAGE_ACCESS.

Displays high-converting login prompts when guest limits are reached.

Locks MCQ modules and mock exams behind active passes (mcq_pro_pass, mock_master_pass, etc.).

C. js/mock-engine.js (Exam Simulator Engine)

Dynamically fetches authenticated download URLs (getDownloadURL) from Firebase Cloud Storage.

Smart Extension Resolution: Automatically appends or cleans .json extensions so URL routes function seamlessly regardless of formatting.

Manages full test timing, multi-section tracking, score calculations with negative penalties, and detailed solution generation.

D. js/mcq-main.js (Topic Practice Engine)

Controls topic-wise practice modules with bookmarking, error review filtering, question shuffling, and Quick 10 quiz modes.

Implements smart batched cloud writes to Firestore to conserve database quotas.

E. js/layout.js (Dynamic Layout Injector)

Renders zero-CLS headers, navigation drawers, login modals, and footers across all site subdirectories.

🔐 4. Freemium Logic & Page Configuration

Every topic practice page controls its own destiny using a simple configuration block placed at the bottom of its HTML file.

The "ID Card" (window.PAGE_ACCESS):

window.PAGE_ACCESS = {
    category: 'rivers',         // Syncs with Firebase for Leaderboard
    loginLimit: 30,             // Questions free for anonymous guests
    proLimit: 9999,             // Questions free for logged-in users (9999 = no paywall)
    requiredPass: 'mcq_pro_pass'// Pass required if proLimit is reached
};


🔄 6. Dynamic Mock State & Re-attempt Engine

Our Mock Test Collection pages (Patwari, Police, HRTC) feature a seamless, race-condition-free state manager that integrates smoothly with mock-engine.js:

Auto-Detect Attempts: Automatically queries the user's scores collection in Firestore to find completed tests within that specific exam category.

Score Badges: Dynamically injects a green Score: X/Y badge onto the specific test card if the user has previously attempted it.

Summary Mode Routing: Swaps the "Attempt/Unlock" button for a "Summary" button. Clicking this routes the user to mock-engine/index.html?mode=summary, which bypasses the timer/questions and renders the detailed result panel using cached LocalStorage data (saving massive Firebase Read costs).

Secure Re-attempt: A dedicated Restart (🔄) button triggers a confirmation warning. If accepted, it deletes the specific Firestore score document, clears the local cache, and grants a fresh slate for the user to retry the test from zero.

💳 7. Razorpay & Google Cloud Webhook (Automated Payments)

The payment system is 100% automated. It prevents frontend "Inspect Element" hacking by relying entirely on a Google Cloud Run backend server to grant premium passes.

The Payment Flow:

Frontend Request: User clicks "Buy" on upgrade.html or dashboard.html.

Razorpay Popup: Razorpay opens. The notes object securely passes the user's uid and planId to Razorpay servers.

Webhook Trigger: Upon successful payment, Razorpay sends a hidden POST request to our Google Cloud Webhook.

Backend Verification: The Webhook verifies the digital signature (x-razorpay-signature) using the secret key.

Database Update: The Webhook uses the Firebase Admin SDK to bypass client security rules and instantly writes the pass into the user's private Firestore vault.

var options = {
    "key": "rzp_test_YOUR_KEY_HERE", 
    "amount": price * 100,
    "currency": "INR",
    "name": "HPGK Quiz Platform",
    "handler": function (response) {
        // HPGK_verifyAndRedirect listens to Firestore for real-time unlock.
    },
    "notes": {
        "uid": window.HPGK_User.uid,
        "planId": "mock_master_pass"
    }
};


☁️ 8. Backend Webhook Setup (Google Cloud Run)

The backend is hosted on Google Cloud Run (Node.js 22). It requires firebase-admin to update Firestore securely.

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

const RAZORPAY_WEBHOOK_SECRET = "hpgk_super_secret_key_123";

exports.razorpayWebhook = functions.https.onRequest(async (req, res) => {
    try {
        const signature = req.headers['x-razorpay-signature'];
        const expectedSignature = crypto
            .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
            .update(JSON.stringify(req.body))
            .digest('hex');

        if (expectedSignature !== signature) return res.status(400).send('Invalid signature');

        const event = req.body.event;
        if (event === 'payment.captured' || event === 'payment.authorized') {
            const payment = req.body.payload.payment.entity;
            const uid = payment.notes ? payment.notes.uid : null;
            const planId = payment.notes ? payment.notes.planId : null;

            if (uid && planId) {
                const expiry = new Date();
                expiry.setDate(expiry.getDate() + 30); 

                const passData = {
                    name: planId === 'mock_master_pass' ? 'Mock Master Pass (All Inclusive)' : 'MCQ Pro Pass (VIP)',
                    purchaseDate: new Date().toLocaleDateString('en-IN'),
                    expiryDate: expiry.toLocaleDateString('en-IN'),
                    timestamp: Date.now(),
                    paymentId: payment.id,
                    mode: "Razorpay_Webhook_Verified"
                };

                const userRef = db.collection('artifacts').doc('hpgk-quiz').collection('users').doc(uid);
                await userRef.set({ passes: { [planId]: passData } }, { merge: true });
            }
        }
        res.status(200).send('Processed');
    } catch (error) {
        res.status(500).send('Internal Error');
    }
});


🔥 10. Firebase Configuration & Database Paths

All Firebase initialisations are handled securely inside js/core.js.

Public Data (Leaderboard): /artifacts/hpgk-quiz/public/data/leaderboard/{uid}

Private User Data (Passes Vault): /artifacts/hpgk-quiz/users/{uid}

User Scores/History: /artifacts/hpgk-quiz/users/{uid}/scores/{testId}

Secure Mock Storage: gs://hpgk-quiz.firebasestorage.app/premium_mocks/{exam}/{testFile}.json

🚀 11. Developer Guide: How to Add a New Mock Test

To add a new full-length mock test:

Upload your JSON file to Firebase Storage ➔ premium_mocks/{exam-folder}/.

Add your test button/card in the corresponding exam HTML collection page. The engine handles the rest automatically.

Maintained by ToolBlaster Dev Team.
