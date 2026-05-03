🏔️ HPGK Quiz Platform - Complete Documentation

Welcome to the complete documentation for the HPGK Quiz Platform. This platform is designed to provide high-quality, bilingual mock tests and study materials for Himachal Pradesh competitive exams (HPAS, HPPSC, Allied Services, Patwari, etc.).

🌟 1. Project Overview & Features

Bilingual Engine: Questions, options, and explanations are rendered in both English and Hindi seamlessly.

Strict Exam Simulation: Features 0.25 negative marking, real-time timer, and an immersive exam-like UI.

Cost-Optimized Cloud Sync: Progress is saved locally (LocalStorage) immediately and securely synced to Firebase Firestore using Smart Batched Writes to minimize costs.

Dynamic Mock State: Auto-detects attempted tests, injects score badges, and dynamically swaps UI buttons for "Summary" and "Re-attempt" modes without redundant database reads.

Automated Payments: Fully integrated with Razorpay and Google Cloud Webhooks for instant, secure pass unlocking.

Super Admin Panel: A secure, multi-tab control room to monitor live users, revenue, track transactions, and manage premium access.

🛠️ 2. Tech Stack & Design System

Frontend Technologies: Pure HTML5, CSS3 (Custom Glassmorphism Variables), Vanilla JavaScript (ES6+).

Backend Services: Firebase Authentication (Google OAuth), Firebase Firestore (NoSQL Document Database), Google Cloud Run (Node.js Webhook).

Design Philosophy:

Mobile-First: Fully responsive grid layouts optimized for touch interactions across all devices.

Glassmorphism: Premium frosted-glass effects utilizing CSS backdrop-filter.

Accessibility: WCAG AA compliant contrast ratios (--primary: #2563eb against white/dark backgrounds).

Typography: 'Inter' for English, 'Noto Sans Devanagari' for Hindi.

🏗️ 3. Core Architecture: The "Holy Trinity" Model (+ Extensions)

Our frontend relies on a highly modular, decoupled architecture consisting of distinct scripts with specific responsibilities.

A. core.js (The Global Brain & Security Guard)

Identity: Initializes Firebase and tracks the global window.HPGK_User session state.

Cloud Sync: Securely fetches user's active passes from Firestore upon login.

Global Security: Blocks DevTools (F12, Ctrl+Shift+I), disables right-click, and prevents text selection/copying to protect premium content.

Decoy Routing: Dynamically injects fake tokens into URLs (e.g., &_secToken=tx_1234abc) to prevent users from bypassing paywalls via direct URL manipulation.

B. access-guard.js (The Bouncer)

Access Control: Evaluates the user's progress against the page's configuration (window.PAGE_ACCESS).

Paywall Enforcement: Triggers the premium paywall UI if a user crosses the free threshold (proLimit) without a valid master key (like mock_master_pass or mcq_pro_pass).

Guest Limit: Prompts anonymous users to login securely after consuming a certain number of free questions (loginLimit).

C. mcq-main.js / mock-engine.js (The Teacher & Optimizer)

Rendering Engine: Dynamically loads JSON data into the DOM (questions, options, explanations).

State Management: Tracks right/wrong answers, calculates accuracy, handles the timer, and provides detailed analytics.

🔥 Smart Batch Cloud Sync: Instead of syncing on every click (which drains Firebase quota), mcq-main.js batches database writes. It syncs to Firestore every 15 questions or when the page unloads, saving over 90% in Firebase Read/Write costs.

D. layout.js (The Builder - Extension)

UI Injector: Dynamically loads the global header and footer components across all 100+ static HTML files to ensure centralized navigation management.

🔐 4. Freemium Logic & Page Configuration

Every topic page controls its own destiny using a simple configuration block placed at the bottom of its HTML file.

The "ID Card" (PAGE_ACCESS):

window.PAGE_ACCESS = {
category: 'rivers',     // Syncs with Firebase for Leaderboard
loginLimit: 30,         // Questions free for anonymous guests
proLimit: 9999,         // Questions free for logged-in users (9999 = no paywall)
requiredPass: 'mcq_pro_pass'// Pass required if proLimit is reached
};

To lock a premium Mock Test after 10 questions, simply set proLimit: 10 and requiredPass: 'mock_master_pass'.

🎮 5. Gamification & Admin Controls

$$v2.0 & v2.5 Updates$$

Dopamine XP & Leaderboard (user/dashboard.html): Features an ultra-advanced Dual Leaderboard to boost retention.

MCQ Ninjas XP Formula: (Correct Qs × 2) × (Accuracy²)

Mock Toppers XP Formula: (Final Score × 2.5) × (Accuracy²)

🔥 Live Dashboard Sync: Utilizes Firebase onSnapshot. If an Admin grants a pass, the student's dashboard updates in real-time (under 1 second) without requiring a page refresh, completely bypassing local browser cache issues.

Super Admin Control Room (user/admin.html): A secure, cache-free command center explicitly locked to authorized Admin Emails via robust Firestore Rules. Features include:

Live User Matrix: Filter by Free, VIP, and Inactive users. Includes instant pass granting and a Red Revoke Pass button.

Live Payment Desk: Tracks both Razorpay Webhook transactions and Manual Grants (with complimentary tags).

1-Click Manual Grant: Bypass Razorpay to instantly grant passes to user UIDs, including an option to mark as Complimentary (₹0 Revenue) to keep stats accurate.

1-Click Email Extraction: Copy target user emails (excluding auth-hidden guests) for immediate marketing campaigns.

🔄 6. Dynamic Mock State & Re-attempt Engine

Our Mock Test Collection pages (Patwari, Police, HRTC) feature a seamless, race-condition-free state manager that integrates smoothly with the mock-engine.js:

Auto-Detect Attempts: Automatically queries the user's scores collection in Firestore to find completed tests within that specific exam category.
Score Badges: Dynamically injects a green Score: X/Y badge onto the specific test card if the user has previously attempted it.
Summary Mode Routing: Swaps the "Attempt/Unlock" button for a "Summary" button. Clicking this routes the user to mock-engine.js?mode=summary, which bypasses the timer/questions and renders the detailed result panel using cached LocalStorage data (saving massive Firebase Read costs).
Secure Re-attempt: A dedicated Restart (🔄) button triggers a confirmation warning. If accepted, it deletes the specific Firestore score document, clears the local cache, and grants a fresh slate for the user to retry the test from zero.

💳 7. Razorpay & Google Cloud Webhook (Automated Payments)

The payment system is 100% automated. It prevents frontend "Inspect Element" hacking by relying entirely on a Google Cloud Run backend server to grant premium passes.

The Payment Flow:

Frontend Request: User clicks "Buy" on upgrade.html or dashboard.html.
Razorpay Popup: Razorpay opens. The notes object securely passes the user's uid and planId to Razorpay servers.
Webhook Trigger: Upon successful payment, Razorpay sends a hidden POST request to our Google Cloud Webhook.
Backend Verification: The Webhook verifies the digital signature (x-razorpay-signature) using the secret key.
Database Update: The Webhook uses the Firebase Admin SDK to bypass client security rules and instantly writes the pass into the user's private Firestore vault.

Frontend Implementation snippet:

var options = {
"key": "rzp_test_YOUR_KEY_HERE", // Replace with LIVE key in production
"amount": price * 100,
"currency": "INR",
"name": "HPGK Quiz Platform",
"handler": function (response) {
// Show loading state. Webhook handles DB update in the background.
// HPGK_verifyQuickPayAndReload listens to Firestore for real-time unlock.
},
// 🔥 CRITICAL: Webhook uses this to identify who gets the pass
"notes": {
"uid": window.HPGK_User.uid,
"planId": "mock_master_pass"
}
};

☁️ 8. Backend Webhook Setup (Google Cloud Run)

The backend is hosted on Google Cloud Run (Node.js 22). It requires firebase-admin to securely update Firestore.

index.js (The Server Logic):

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

// Secret from Razorpay Dashboard
const RAZORPAY_WEBHOOK_SECRET = "hpgk_super_secret_key_123";

exports.razorpayWebhook = functions.https.onRequest(async (req, res) => {
try {
// 1. Signature Verification
const signature = req.headers['x-razorpay-signature'];
const expectedSignature = crypto
.createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
.update(JSON.stringify(req.body))
.digest('hex');

    if (expectedSignature !== signature) return res.status(400).send('Invalid signature');

    // 2. Process Event
    const event = req.body.event;
    if (event === 'payment.captured' || event === 'payment.authorized') {
        const payment = req.body.payload.payment.entity;
        const uid = payment.notes ? payment.notes.uid : null;
        const planId = payment.notes ? payment.notes.planId : null;

        if (uid && planId) {
            // Calculate Expiry (30 Days)
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

            // 3. Update Database via Admin SDK
            const userRef = db.collection('artifacts').doc('hpgk-quiz').collection('users').doc(uid);
            await userRef.set({ passes: { [planId]: passData } }, { merge: true });
        }
    }
    res.status(200).send('Processed');
} catch (error) {
    res.status(500).send('Internal Error');
}


});

⚙️ 9. Razorpay Dashboard Webhook Configuration

If you ever need to set up the webhook on a new Razorpay account:

Go to Razorpay Dashboard -> Settings -> Webhooks.
Click Add New Webhook.
Webhook URL: Paste your Google Cloud Run URL.
Secret: hpgk_super_secret_key_123 (Must exactly match the one in index.js).
Active Events: Select payment.captured.
Click Save.

🔥 10. Firebase Configuration & Database Paths

All Firebase initializations are handled securely inside js/core.js.
Database security is ensured via strict firestore.rules preventing unauthorized Read/Writes.

Firestore Database Paths:

Public Data (Leaderboard): /artifacts/hpgk-quiz/public/data/leaderboard/{uid}
Private User Data (Passes Vault): /artifacts/hpgk-quiz/users/{uid}
User Scores/History: /artifacts/hpgk-quiz/users/{uid}/scores/{testId}

📂 11. Folder Structure

/
├── index.html                   # Main Landing Page
├── js/
│   ├── core.js                  # Global User Session & Security
│   ├── layout.js                # Dynamic Header & Footer Injector
│   ├── access-guard.js          # Paywall & Access Logic
│   ├── mock-engine.js           # Full Mock Test rendering engine
│   └── mcq-main.js              # Topic-wise practice engine (Cloud Optimized)
├── css/
│   └── style.css                # Global styles and responsive design
├── user/
│   ├── dashboard.html           # Student Dashboard (Live Sync enabled)
│   ├── upgrade.html             # Pricing & Plans Page
│   └── admin.html               # Super Admin Control Room (Cache-free)
├── hp-exam-full-mock-test/      # Exam specific folders (e.g., Patwari)
│   └── hp-patwari-mock/         # Index HTML & JSON data files for mocks
└── himachal-pradesh-gk/         # Topic-wise MCQs (History, Geo, etc.)

🚀 12. Developer Guide: How to Add a New Topic

Adding new content to the platform takes less than 2 minutes:

Create Directory: Create a new folder (e.g., himachal-pradesh-gk/new-topic/).
Add Data Files: Create part-1.js containing your window.quizData array.
Setup HTML: Copy an existing index.html template.
Update the ID Card: Modify window.PAGE_ACCESS and window.QUIZ_CONFIG to reflect the new category.
Link Scripts: Ensure the Holy Trinity is linked in the exact order: core.js ➔ access-guard.js ➔ Data Files ➔ mcq-main.js.

Maintained by ToolBlaster Dev Team.
