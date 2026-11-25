🏔️ HPGK Quiz Platform — Master Technical Documentation & Architecture Guide

Welcome to the comprehensive technical documentation for the HPGK Quiz Platform (hpgk.toolblaster.com). This document serves as the single source of truth for both AI models and human developers to understand the system architecture, centralized rendering engines, database schema, security models, freemium access guards, payment webhooks, and deployment workflows.

📌 1. Project Overview & Core Features

The HPGK Quiz Platform is a high-performance, zero-framework EdTech web application tailored for Himachal Pradesh state competitive examinations (HPAS, HPPSC, Allied Services, HP Patwari, Police Constable, HRTC Conductor, etc.).

Key Platform Features:

Bilingual Engine: Simultaneous rendering of questions, options, and detailed explanations in both English (Inter) and Hindi (Noto Sans Devanagari).

Centralized Zero-Flicker Page Engines:

js/topic-page-engine.js synchronously injects shared styles, quiz toolbars, stats dashboards, mobile "Jump to MCQ Quiz" CTAs, help modals, and header/footer layouts in <head> to eliminate Flash of Unstyled Content (FOUC).

js/mock-series-engine.js renders all exam mock series hubs (Patwari, Police Constable, HRTC Conductor) from a single central registry (SERIES_REGISTRY) with real-time pass sync shimmer states.

Free-With-Login MCQ Model: Guests receive 30 free preview questions per topic (loginLimit: 30), while authenticated Google users unlock all 6,500+ topic-wise MCQs 100% free (freeWithLogin: true).

TCS/NTA Exam Simulator (js/mock-engine.js): Full-length mock test environment featuring multi-section switching, countdown timers, negative marking penalties (-0.25), question palette state tracking, and cached solution review (?mode=summary).

Cost-Optimized Cloud Sync: Local question progress is saved immediately in localStorage (with automatic guest-to-user migration on sign-in) and synced to Firestore in batches every 10 answers or on page unload.

Secure Cloud Storage Vault: Full-length mock test JSON question banks stored inside private Firebase Cloud Storage buckets (gs://hpgk-quiz.firebasestorage.app/premium_mocks/) gated by Firebase Auth.

Super Admin Control Room (user/admin.html): Multi-tab management console with a 5-minute inactivity security lock, real-time revenue analytics, custom Mock Master Pass grants, reward token verification, leaderboard anti-cheat moderation, CSV exports, and immutable audit logs.

Automated Webhook Payments: Razorpay checkout backed by a Google Cloud Run (Node.js 22) webhook microservice that verifies HMAC signatures and auto-provisions mock_master_pass in Firestore.

🛠️ 2. Tech Stack & Infrastructure

Layer

Technology / Service

Description

Frontend UI

HTML5, CSS3, Vanilla ES6 JavaScript

Zero-framework architecture for sub-second page loads and zero FOUC.

Icons & Fonts

FontAwesome 6.4, Google Fonts

Inter & Poppins (English) + Noto Sans Devanagari (Hindi).

Database

Firebase Firestore (NoSQL)

Real-time onSnapshot listeners for user passes, leaderboards, and scores.

Authentication

Firebase Auth (Google OAuth 2.0)

Persistent cross-route sessions with automatic guest progress migration.

Protected Storage

Firebase Cloud Storage

Private bucket (gs://hpgk-quiz.firebasestorage.app) for mock test JSON banks.

Backend Webhook

Google Cloud Run (Node.js 22)

Serverless webhook running firebase-admin SDK for Razorpay verification.

Hosting & CDN

Custom Domain HTTPS (hpgk.toolblaster.com)

Edge-cached static asset delivery.

📁 3. Directory Structure & Key Files

/
├── index.html                           # Main Platform Landing Page
├── README.md                            # Master Technical Documentation (This File)
├── FirestoreDatabase.rules              # Production Firestore Security & Anti-Tampering Rules
├── js/
│   ├── core.js                          # Global User Session, Pass Expiration Validator & UI Security Guard
│   ├── layout.js                        # Global Header, Footer, Mobile Drawer, Login Modal & Toast System
│   ├── style.css                        # Core Theme Tokens, Typography & Global Component Styles
│   ├── access-guard.js                  # Guest 30-Question Preview Quota & Login Gatekeeper
│   ├── mcq-main.js                      # Bilingual Topic MCQ Engine (Quick 10, Bookmarks, Mistakes, Cloud Sync)
│   ├── topic-page-engine.js             # Shared CSS, Quiz Toolbar, Stats Bar, Print Toggle & Mobile CTA Engine
│   ├── mock-series-engine.js            # Central Mock Series Registry, CSS, Shimmer Sync & Re-Attempt Engine
│   └── mock-engine.js                   # TCS/NTA Full-Length Exam Simulator & Solution Renderer
├── user/
│   ├── admin.html                       # Super Admin Control Center, Token Vault & Audit Logs
│   ├── dashboard.html                   # Student Analytics, XP Levels, Streak Rewards, Referrals & Pass Vault
│   ├── upgrade.html                     # Free MCQ vs. Mock Master Pass Store & Razorpay Checkout
│   ├── leaderboard.html                 # Global Wall of Fame (MCQ Ninjas & Mock Toppers)
│   └── legal/                           # Platform Legal Documents
│       ├── about.html                   # Platform Overview & Vision
│       ├── privacy.html                 # Privacy Policy
│       └── terms.html                     # Terms & Conditions
├── himachal-pradesh-gk/                 # Topic-Wise Study Notes & Bilingual MCQ Pages
│   ├── art-culture/index.html           # Standardized SEO + topic-page-engine.js Template
│   ├── history/index.html
│   ├── geography/index.html
│   └── ...
├── hp-exam-full-mock-test/              # Full-Length Mock Exam Hubs (35-Line HTML Shells)
│   ├── hp-patwari-mock/index.html
│   ├── hp-police-constable-mock/index.html
│   └── hp-hrtc-conductor-mock/index.html
├── agriculture-quiz/                    # Specialized Agriculture Practice Series
└── study-notes/                         # HP GK Revision Notes & One-Liners


⚙️ 4. Core System Subsystem Architectures

A. UI Security & Session Guard (js/core.js)

Initializes Firebase Auth and hydrates window.HPGK_User (isLoggedIn, uid, displayName, photoURL, passes).

Provides centralized pass expiration validation (HPGK_IsPassValid(), HPGK_HasActivePass(), HPGK_HasMockMaster()) supporting millisecond timestamps, legacy date strings, and Lifetime passes.

Dynamically locks/unlocks Mock Master UI elements (HPGK_AutoUnlockPremiumUI() / HPGK_LockPremiumUI()).

Enforces UI content protection (blocks right-click context menus, DevTools shortcuts, text selection on non-input elements, and injects decoy security tokens into mock links).

B. Guest Preview Quota & Access Controller (js/access-guard.js)

Evaluates guest question counts against window.PAGE_ACCESS.loginLimit (default 30).

Prompts guests with the non-intrusive SaaS Google Login Modal (openLoginModal()) once the 30-question preview is completed.

Grants unlimited free access across all topic-wise MCQs immediately upon Google sign-in (freeWithLogin: true).

C. Shared Topic Page Engine (js/topic-page-engine.js)

Loaded synchronously inside <head> so all layout CSS (hero-glass-section, unified SEO & FAQ containers, responsive grids) renders before first paint (zero FOUC).

Automatically renders the interactive quiz card (#topic-quiz-widget), Quick 10 ribbon, toolbar controls (Backup, Restore, Reset, Quick 10, Shuffle, Mistakes, Bookmarks, A-/A+), stats dashboard, Help Modal, and mobile-only "Jump to MCQ Quiz" button.

Automatically removes any legacy breadcrumb .hero-badge and ensures the Print / PDF button appears on topic pages by default (configurable via showPrint: false in window.TOPIC_META).

D. Topic MCQ Practice Engine (js/mcq-main.js)

Powers bilingual question rendering, instant answer verification, explanation tooltips, keyword highlighting, bookmarking, mistake review, shuffling, and Weak-Spot Booster sessions (?mode=weakspot).

Automatically migrates guest localStorage progress (hpgk_guest_*) into the authenticated user's profile (hpgk_usr_{uid}_*) upon login.

Batches Firestore score updates every 10 solved questions (and on beforeunload) to keep database write operations minimal.

E. Central Mock Series Engine (js/mock-series-engine.js)

Drives all exam hub pages (hp-patwari-mock, hp-police-constable-mock, hp-hrtc-conductor-mock) from SERIES_REGISTRY.

Injects shared CSS in <head> to prevent FOUC, renders Mock & PYP tabs, displays shimmer loading states while verifying Mock Master Pass status in Firestore, injects Score: X/Y badges on completed attempts, routes to ?mode=summary, and handles secure test resets via a custom confirmation modal.

F. Dynamic Layout & Modal Manager (js/layout.js)

Injects the global header (renderHeader()), compact footer (renderFooter()), slide-out mobile drawer, light/dark theme toggle, Back-to-Top button, Google Login Modal, and non-blocking floating toast notifications (HPGK_Layout.showToast()).

🔐 5. Access Configuration (window.TOPIC_META & window.PAGE_ACCESS)

Every topic page configures its metadata in <head> before loading js/topic-page-engine.js:

window.TOPIC_META = {
    category: 'art-culture',        // Category slug for localStorage & Firestore sync
    title: 'Art & Culture',         // Header brand title
    quizName: 'Art & Culture of HP',// Display name saved in Firestore score records
    subtitle: 'HPGK Series',        // Header subtitle
    iconClass: 'fa-solid fa-palette',
    rootPath: '../..'               // Relative path to site root
    // showPrint: false             // Optional: omit or set true to show Print / PDF button
};


topic-page-engine.js automatically populates window.PAGE_ACCESS:

window.PAGE_ACCESS = {
    category: 'art-culture',
    loginLimit: 30,                 // Free preview questions for anonymous guests
    freeWithLogin: true             // All topic MCQs unlocked free after Google sign-in
};


💳 6. Payment Integration & Cloud Run Webhook Flow

[Student Clicks Grab Mock Master Pass on upgrade.html]
                          │
                          ▼
           [Razorpay Checkout Modal Opens]
       (Passes UID & planId: "mock_master_pass")
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
 [Firebase Admin SDK writes Mock Master Pass to Firestore]
                          │
                          ▼
[Frontend onSnapshot Listener Unlocks All Mocks & PYPs]


Frontend Razorpay Checkout Configuration (user/upgrade.html):

var options = {
    "key": "rzp_live_YOUR_KEY_HERE",
    "amount": 8900, // ₹89 in paise
    "currency": "INR",
    "name": "HPGK Quiz Platform",
    "description": "Unlock Mock Master Pass (All Inclusive)",
    "handler": function (response) {
        document.getElementById('payment-processing-overlay').style.display = 'flex';
        window.HPGK_verifyAndRedirect('mock_master_pass');
    },
    "notes": {
        "uid": window.HPGK_User.uid,
        "planId": "mock_master_pass"
    }
};


Google Cloud Run Webhook Handler (Node.js 22):

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
            const planId = payment.notes ? payment.notes.planId : 'mock_master_pass';

            if (uid && planId) {
                const now = Date.now();
                const expiryMs = now + (30 * 24 * 60 * 60 * 1000);

                const passData = {
                    name: 'Mock Master Pass (All Inclusive)',
                    purchaseDate: new Date(now).toLocaleDateString('en-IN'),
                    expiryDate: new Date(expiryMs).toLocaleDateString('en-IN'),
                    expiryTimestamp: expiryMs,
                    timestamp: now,
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


🗄️ 7. Firebase Firestore & Security Rules Schema

All application documents live under the /artifacts/hpgk-quiz/ namespace and are protected by FirestoreDatabase.rules:

artifacts/
└── hpgk-quiz/
    ├── public/
    │   └── data/
    │       ├── leaderboard/
    │       │   └── {uid}                # Rank profile (name, photo, mockXP, mcqXP, weekly/monthly XP, acc)
    │       └── site_config/
    │           └── announcement         # Optional live site announcement banner config
    ├── users/
    │   └── {uid}/                       # Private student document
    │       ├── name, email, photo       # Synced profile metadata
    │       ├── adminNote                # Private support memo (Admin write-only)
    │       ├── passes/                  # Active passes map (Admin / Webhook write-only)
    │       │   └── mock_master_pass     # (name, purchaseDate, expiryDate, expiryTimestamp, paymentId, mode)
    │       ├── scores/
    │       │   └── {scoreDocId}         # Topic & Mock attempts (category, testId, score, total, timestamp)
    │       ├── mock_results/
    │       │   └── {resultId}           # Detailed full-length mock result breakdowns
    │       └── referrals/
    │           └── {referredUid}        # Verified friend referrals (+20 XP per referral)
    └── admin_logs/
        └── {logId}                      # Immutable admin action log (adminEmail, actionType, targetUid, details)


Anti-Tampering Protection (FirestoreDatabase.rules): Students can read/write their own scores, mock_results, and leaderboard records, but passes and adminNote fields are strictly blocked from client writes—writable only by the verified Razorpay webhook or the verified Admin account (amanrana7350@gmail.com).

Storage Bucket Path: gs://hpgk-quiz.firebasestorage.app/premium_mocks/{exam_category}/{test_id}.json

👑 8. Super Admin Control Room (user/admin.html)

Restricted strictly to amanrana7350@gmail.com with an automatic 5-minute inactivity lock:

Command Center: Real-time user counts, active Mock VIP subscribers, gross revenue breakdown, and custom Mock Master Pass duration grants (1 Hour to Lifetime, with optional Complimentary / ₹0 flag).

Rewards & Claims Vault: Validates student XP achievement claim tokens (CLAIM-*) and converts them into active Mock Master VIP trial passes, plus leaderboard anti-cheat purging.

User Matrix: Searchable directory with active pass badges, expiration alerts (3–7 days), +7d quick extensions, student score inspection modals, private admin notes, and direct WhatsApp links.

Payment Desk & Growth Exports: Transaction ledger with CSV exports (exportFinancialsCSV(), exportUsersCSV()) and segmented email copy tools.

Admin Audit Trail: Every manual grant, pass revocation, note update, and leaderboard purge is permanently recorded in admin_logs.

🚀 9. Developer Onboarding Workflows

A. Adding a New Topic MCQ Page

Create himachal-pradesh-gk/<topic-slug>/index.html and place the topic's question .js files (appending to window.quizData) in the same folder.

In <head>, configure window.TOPIC_META and load <script src="../../js/topic-page-engine.js"></script>.

Keep all bilingual Study Notes (<section class="seo-content-wrapper">) and FAQs (<section class="faq-section-wrapper">) in static HTML for Google SEO indexing.

Place <section class="quiz-widget-wrapper" id="topic-quiz-widget"></section> in the quiz column, and load core.js, layout.js, access-guard.js, your question .js parts, and mcq-main.js before </body>.

B. Adding a New Exam Mock Series or Test

Prepare the exam JSON question bank and upload it to Firebase Cloud Storage at gs://hpgk-quiz.firebasestorage.app/premium_mocks/{exam_slug}/{test_id}.json.

Add the exam configuration (or new mock/PYP item) inside SERIES_REGISTRY in js/mock-series-engine.js.

Create hp-exam-full-mock-test/{exam_slug}/index.html with <div id="series-app" data-series="{exam_slug}"></div> and <script src="../../js/mock-series-engine.js"></script> in <head>.

Maintained by ToolBlaster Dev Team.
