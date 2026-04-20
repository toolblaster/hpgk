🏔️ HPGK MCQ & Mock Test Platform (v2.0 - 2026)

Welcome to the official documentation of the HPGK (Himachal Pradesh General Knowledge) web application. This platform is a high-performance, SEO-optimized, and centralized freemium system designed for HPPSC aspirants.

🏗️ 1. Architecture Overview (The "Three Pillars" Model)

The system is built on a Decoupled Centralized Architecture. The logic is separated from the content to ensure that a single update can affect thousands of pages instantly.

Pillar A: The ID Card (PAGE_ACCESS)

Every HTML content page contains a window.PAGE_ACCESS object. This is the local configuration that tells the system how to treat that specific page.

Location: Inside the <script> tag at the bottom of individual HTML files.

Controls: loginLimit (Free questions count), proLimit (Paywall trigger), and category.

Pillar B: The Bouncer (access-guard.js)

This is the Central Security Hub. It reads the "ID Card" from the HTML and checks it against the user's identity.

Function: Handles Paywall UI injection, Login detection, and Subscription verification.

Logic: Communicates with Firebase to check if the user has a valid active_plans ticket.

Pillar C: The Engines (main.js & mock-engine.js)

These are the Content Renderers.

main.js: Handles standard MCQ practice with instant feedback and explanations.

mock-engine.js (Future): Handles time-bound exams with negative marking and result analysis.

📂 2. File & Directory Structure

root/
├── index.html                 # Main Homepage
├── js/
│   ├── layout.js              # Global UI (Header/Footer/Login Modals)
│   ├── main.js                # Practice MCQ Engine (The "Teacher")
│   ├── access-guard.js        # Central Security Guard (The "Bouncer")
│   ├── style.css              # Global Design System (Glassmorphism UI)
│   └── favicon/               # Brand assets & PWA manifest
├── himachal-pradesh-gk/       # Content Directory
│   ├── rivers/
│   │   ├── index.html         # River Topic Landing Page (Configured with ID Card)
│   │   └── river-part-1.js    # Raw Data (Question objects)
│   ├── history/
│   ├── geography/
│   └── ... (other topics)
└── artifacts/                 # Internal System Settings (Firebase Config & Security Rules)


🔐 3. Authentication & Monetization Logic (Freemium)

The platform follows a strict Login-then-Pay funnel:

Anonymous Stage: User can view up to loginLimit (e.g., 30) questions for free.

Login Stage: At question 31, the access-guard.js triggers the Login Card.

Pro Stage: After login, the user can view up to proLimit (e.g., 100 or 9999).

Paywall Stage: If proLimit is reached, the system triggers the Premium Pass (₹29) requirement.

VIP Access: Any user with the mega_combo_pass tag in Firebase Firestore (/users/{uid}/profile/billing) bypasses all limits automatically.

🚀 4. Developer Onboarding (How to add a new page)

To add a new MCQ topic, follow these 3 steps:

Create Directory: Add a folder in himachal-pradesh-gk/.

Prepare Data: Create JS files containing the window.quizData array.

Setup HTML: Copy the template and update the PAGE_ACCESS block:

window.PAGE_ACCESS = {
    category: 'new_topic',
    loginLimit: 30,
    proLimit: 9999,
    requiredPass: 'mcq_pass'
};


🛠️ 5. Tech Stack

Frontend: Pure HTML5, CSS3 (Custom Glassmorphism), Vanilla JS (ES6+).

Backend: Firebase Auth (Google), Firebase Firestore (NoSQL).

Icons: FontAwesome 6.4.0.

SEO: Meta-tag density control, JSON-LD Schema, WCAG AA Compliance.

📈 6. Future Roadmap

Mock Test Engine: Implementation of mock-engine.js with JSON-fetch logic.

PDF Monetization: Integration of "Pay-per-PDF" logic via Access Guard.

Dynamic Data: Shifting from JS-data files to a unified JSON API fetch system.

Last Updated: April 2026
