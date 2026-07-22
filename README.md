🏔️ HPGK Quiz Platform — Master Technical Documentation & Architecture Guide

Welcome to the comprehensive technical documentation for the HPGK Quiz Platform (hpgk.toolblaster.com). This document is designed as a single source of truth for both AI models and human developers to instantly understand the system architecture, component dependencies, database schema, security models, freemium access guards, payment webhooks, and deployment workflows.

📌 1. Project Overview & Core Features

The HPGK Quiz Platform is a high-performance, lightweight EdTech web app tailored for Himachal Pradesh state competitive examinations (HPAS, HPPSC, Allied Services, HP Patwari, Police Constable, HRTC Conductor, etc.).

Key Platform Features:

Bilingual Engine: Simultaneous rendering of questions, options, and explanations in both English (Inter) and Hindi (Noto Sans Devanagari).

TCS/NTA Exam Simulator: Strict full-length mock test environment featuring multi-section switching, customizable section timers, negative marking penalties (-0.25), question palette state tracking, and re-attempt workflows.

Glassmorphism Real-Time Broadcast Engine: A non-intrusive modal alert popup with backdrop-filter: blur(8px), 2.5-second UX entry delay, session-based dismissal flags, optional CTA links, and page-scope targeting driven by Firebase Firestore onSnapshot listeners.

Zero-CLS Responsive Layout: Pure Vanilla JS layout manager (js/layout.js) injecting headers, footers, hamburger drawers, theme toggles, and Google Auth modals dynamically across all subdirectories.

Cost-Optimized Cloud Sync: Local question state saved instantly in LocalStorage, with batched network writes to Firestore every 15 questions or on page unload to minimize database reads/writes by over 90%.

Secure Cloud Storage Vault: Full-length mock test JSON question banks isolated inside private Firebase Cloud Storage buckets (gs://hpgk-quiz.firebasestorage.app/premium_mocks/) with access gated by Firebase Auth.

Dynamic Mock State & Re-attempt Engine: Automatically queries user scores from Firestore, injects green score badges (Score: X/Y), routes to summary mode using cached data (zero DB reads), and provides secure re-attempt wiping.

Super Admin Control Room (user/admin.html): Multi-tab management console with 5-minute inactivity security locks, real-time revenue analytics, 1-click custom pass grants, leaderboard moderation, CSV data exports, and audit trails.

Automated Webhook Payments: Razorpay integration backed by a Google Cloud Run (Node.js 22) webhook microservice that verifies digital signatures and auto-provisions premium passes in Firestore.

🛠️ 2. Tech Stack & Infrastructure

Layer

Technology / Service

Description

Frontend UI

HTML5, CSS3, Vanilla ES6 JavaScript

Zero-framework bloat (no React/Vue/jQuery) for sub-second page loads.

Icons & Fonts

FontAwesome 6.4, Google Fonts

Inter (English) & Noto Sans Devanagari (Hindi).

Database

Firebase Firestore (NoSQL)

Real-time live snapshot syncing for announcements, leaderboards, and passes.

Authentication

Firebase Auth (Google OAuth 2.0)

Multi-page session persistence across domain subfolder routes.

Protected Storage

Firebase Cloud Storage

Encrypted storage bucket (gs://hpgk-quiz.firebasestorage.app) for exam banks.

Backend Webhook

Google Cloud Run (Node.js 22)

Serverless microservice running firebase-admin SDK for Razorpay webhooks.

Hosting & CDN

Custom Domain HTTPS (hpgk.toolblaster.com)

Edge-cached static delivery.

📁 3. Directory Structure & Key Files

/
├── index.html                           # Main Platform Landing Page
├── README.md                            # Technical Documentation (This File)
├── js/
│   ├── layout.js                        # Global Layout, Auth, Mobile Menu & Glassmorphism Broadcast Popup Engine
│   ├── mock-engine.js                   # TCS/NTA Exam Simulator & Solution Renderer
│   ├── core.js                          # Session, Auth State & UI Security/Copy Protection Guard
│   ├── access-guard.js                  # Paywall Quota & Freemium Access Controller
│   └── mcq-main.js                      # Topic-Wise MCQ Practice Engine (Quick 10, Bookmarks, Error Filter)
├── user/
│   ├── admin.html                       # Super Admin Control Center & Audit Hub
│   ├── dashboard.html                   # Student Analytics & Score Vault
│   ├── upgrade.html                     # Pricing, Plans & Razorpay Checkout
│   ├── leaderboard.html                 # Global XP Ranks
│   └── legal/                           # Platform Legal Documents
│       ├── about.html                   # Platform Overview & Vision
│       ├── privacy.html                 # Privacy Policy
│       └── terms.html                   # Terms & Conditions
├── himachal-pradesh-gk/                 # Topic-wise MCQ Study Series Subfolders (History, Geography, Polity, etc.)
├── hp-exam-full-mock-test/              # Full-Length Mock Exam Landing Hubs (Patwari, Police, HRTC, HPAS, etc.)
├── agriculture-quiz/                    # Specialized Agriculture Practice Series
└── study-notes/                         # HP GK Revision Notes


⚙️ 4. Core System Subsystem Architectures

A. UI Security & Session Guard (js/core.js)

Manages global user state (window.HPGK_User) and handles Google Auth state changes.

Syncs active user passes securely from Firestore upon authentication.

Enforces UI Protection: Blocks right-click context menus, F12 developer tools, text highlighting/selection, and key shortcuts (Ctrl+C, Ctrl+U).

Inject decoy security parameters into navigation links to prevent URL tampering.

B. Paywall & Access Quota Controller (js/access-guard.js)

Evaluates guest question quotas against window.PAGE_ACCESS.

Triggers high-converting SaaS login modals when anonymous limits are reached.

Restricts premium MCQ modules and full mock exams to users holding valid passes (mcq_pro_pass, mock_master_pass, vip_lifetime_pass).

C. TCS/NTA Exam Simulator (js/mock-engine.js)

Secure Storage Download: Resolves authenticated Firebase Storage download URLs for target test JSON files (premium_mocks/{exam}/{testId}.json).

Smart Extension Resolution: Automatically normalizes .json extensions in test parameters.

Exam Mechanics: Tracks state across multiple sections (answered, not-answered, review, review_answered, not-visited), applies negative penalties, and executes countdown timers.

Summary & Solution Review Mode: Ingests cached response arrays from LocalStorage when routed with ?mode=summary, rendering detailed explanations without triggering redundant Firebase Storage fetches.

D. Topic Practice Engine (js/mcq-main.js)

Manages topic-wise practice modules with bookmarking, error review filtering, question shuffling, and Quick 10 quiz modes.

Implements smart batched cloud writes to Firestore to conserve database quotas.

E. Dynamic Layout & Glassmorphism Broadcast Engine (js/layout.js)

Handles site-wide global components without code duplication across HTML files:

Header & Footer Injector: renderHeader() and renderFooter() build consistent navigation bars. Legal links point directly to ${SiteConfig.root}/user/legal/.

Mobile Drawer Navigation: Slide-out hamburger menu with dark/light mode toggle, user account shortcuts, and Admin Control Room link.

Glassmorphism Modal Broadcast Popup:

Listens in real time via Firestore onSnapshot to /artifacts/hpgk-quiz/public/data/site_config/announcement.

Evaluates targetScope (home_dash, core_pages, home, dashboard, mcq, mocks, notes, leaderboard).

Waits 2.5 seconds before displaying for optimal UX.

Checks sessionStorage.getItem('hpgk_announcement_dismissed_time') against data.updatedAt to ensure dismissed alerts aren't spammed during the same session.

Dynamically renders optional CTA buttons (falls back to upgrade.html if button text is provided but link is left blank).

🔐 5. Freemium Logic & Page Configuration

Every topic practice page configures its own access quotas using an inline configuration block (window.PAGE_ACCESS) placed before loading scripts:

window.PAGE_ACCESS = {
    category: 'rivers',          // Category identifier for Firestore Sync & Leaderboard
    loginLimit: 30,              // Free question limit for anonymous guests
    proLimit: 9999,              // Free question limit for logged-in users (9999 = unlimited)
    requiredPass: 'mcq_pro_pass' // Pass ID required when proLimit is reached
};


🔄 6. Dynamic Mock State & Re-attempt Engine

Our Mock Test Collection hubs feature a race-condition-free state manager that integrates smoothly with mock-engine.js:

Auto-Detect Attempts: Queries the user's scores subcollection in Firestore to identify completed tests within that exam category.

Score Badges: Dynamically injects a green Score: X/Y badge onto the corresponding test card.

Summary Mode Routing: Replaces the "Attempt/Unlock" button with "Summary". Clicking routes to mock-engine/index.html?mode=summary, rendering solution panels using cached LocalStorage data (zero DB reads).

Secure Re-attempt: A dedicated Restart (🔄) button triggers a confirmation dialog. Upon confirmation, it purges the specific Firestore score document, clears local cache, and resets the test card state to allow a fresh attempt.

💳 7. Payment Integration & Cloud Run Webhook Flow

[Student Clicks Buy on upgrade.html]
                  │
                  ▼
   [Razorpay Checkout Modal Opens]
(Passes UID & PlanID inside notes object)
                  │
                  ▼
      [Payment Captured on Razorpay]
                  │
                  ▼
 [Razorpay POSTs Webhook Payload to Cloud Run]
                  │
                  ▼
[Google Cloud Run Microservice Verifies Signature]
                  │
                  ▼
 [Firebase Admin SDK writes Pass to Firestore Vault]
                  │
                  ▼
 [Frontend Real-Time Listener Unlocks Premium Content]


Frontend Razorpay Options Example:

var options = {
    "key": "rzp_live_YOUR_KEY_HERE", 
    "amount": price * 100,
    "currency": "INR",
    "name": "HPGK Quiz Platform",
    "description": "Mock Master Pass Subscription",
    "handler": function (response) {
        // HPGK_verifyAndRedirect listens to Firestore for real-time pass unlock
    },
    "notes": {
        "uid": window.HPGK_User.uid,
        "planId": "mock_master_pass"
    }
};


Google Cloud Run Webhook Handler Code (Node.js 22):

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

const RAZORPAY_WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET_KEY";

exports.razorpayWebhook = functions.https.onRequest(async (req, res) => {
    try {
        const signature = req.headers['x-razorpay-signature'];
        const expectedSignature = crypto
            .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
            .update(JSON.stringify(req.body))
            .digest('hex');

        if (expectedSignature !== signature) {
            return res.status(400).send('Invalid signature');
        }

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
        res.status(500).send('Internal Server Error');
    }
});


🗄️ 8. Firebase Firestore Database Schema

Database documents are stored under the /artifacts/hpgk-quiz/ namespace:

artifacts/
└── hpgk-quiz/
    ├── public/
    │   └── data/
    │       ├── leaderboard/
    │       │   └── {uid}                # User rank profile (name, photo, email, mockXP, mcqXP, lastUpdated)
    │       └── site_config/
    │           └── announcement         # Live broadcast config (enabled, message, ctaText, link, scope, style, updatedAt)
    ├── users/
    │   └── {uid}/                       # Private user document (adminNote, passes object)
    │       ├── adminNote                # Private customer support memo
    │       ├── passes/                  # Active passes object
    │       │   └── {planId}             # (name, purchaseDate, expiryDate, paymentId, mode, isComplimentary)
    │       └── scores/
    │           └── {scoreDocId}         # Test attempt record (testId, category, score, total, accuracy, timeTaken, timestamp)
    └── admin_logs/
        └── {logId}                      # Security audit trail (adminEmail, actionType, targetUid, details, timestamp)


Storage Bucket Path:

Private Mock Test Banks: gs://hpgk-quiz.firebasestorage.app/premium_mocks/{exam_category}/{test_id}.json

👑 9. Super Admin Control Room (user/admin.html)

Restricted strictly to authorized administrator email addresses (amanrana7350@gmail.com). Includes:

Command Center: Financial metrics (Mock Master vs. MCQ Pro vs. Complimentary Grants) and gross revenue calculations.

Glassmorphism Broadcast Control: Visual preview card, message templates, target scope selector, color themes, and 1-click push to Firestore.

Advanced Pass Control: 1-click custom pass grants (durations from 1 Hour to Lifetime) and optional "Complimentary/₹0 Revenue" flags.

User Matrix: Searchable student directory with XP rankings, active pass badges, quick extension buttons (+7d, +30d), and direct WhatsApp support deep links.

Payment Desk: Ledger of Razorpay webhooks, manual grants, and CSV spreadsheet exports.

Marketing Center: Raw user CSV exports and email extraction tools for outreach campaigns.

Leaderboard Moderation: Anti-cheat tool to delete cheated score documents from the public leaderboard.

Security Audit Trail: Log recording all administrative actions in Firestore.

5-Minute Security Lock: Automatic overlay lock after 300 seconds of inactivity.

🚀 10. Developer Onboarding: Adding a New Premium Mock Test

To add a new full-length mock test to the platform:

Prepare your exam question bank JSON file following the standard section schema.

Upload the file to Firebase Cloud Storage under gs://hpgk-quiz.firebasestorage.app/premium_mocks/{exam_category}/{test_id}.json.

Add the corresponding test button card inside the exam hub HTML page (hp-exam-full-mock-test/index.html).

The engine automatically handles authenticated Storage download URL resolution, paywall enforcement, timer countdown, score processing, and solution rendering.

Maintained by ToolBlaster Dev Team.
