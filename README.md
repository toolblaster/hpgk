🏔️ HPGK MCQ & Mock Test Platform (v2.0 - 2026)

Welcome to the official documentation of the HPGK (Himachal Pradesh General Knowledge) web application. This platform is a high-performance, SEO-optimized, and centralized freemium system designed specifically for HPAS, HPPSC, and Allied Services aspirants.

Designed with a strict Mobile-First approach and ensuring WCAG AA Compliance for maximum accessibility, this platform delivers a seamless, app-like experience directly in the browser.

🏗️ Core Architecture: The "Holy Trinity" Model

The system has been meticulously decoupled into three independent core files to maximize speed, security, and maintainability.

1. The Global Brain (js/core.js)

This is the foundational script loaded on every page.

Role: Handles Firebase initialization, Google Authentication, and Firestore Database connections.

Key Features: Manages the global window.HPGK_User object (storing UID and active passes) and handles cloud synchronization (HPGK_SaveScore).

2. The Bouncer (js/access-guard.js)

The centralized security and monetization manager.

Role: Reads the local HTML page configuration (window.PAGE_ACCESS) and decides whether the user can view the next question.

Key Features: Injects a dynamic, high-converting premium UI (Paywall) if the user hits a limit. It operates in 3 distinct states:

Guest Limit Reached: Prompts for a Free Google Login.

Pro Limit Reached (Not Logged In): Prompts to login to view premium plans.

Pro Limit Reached (Logged In): Displays the Razorpay checkout button for the Premium Pass.

3. The Teacher (js/main.js)

The pure, lightweight MCQ rendering engine.

Role: Strictly handles the display of questions, options, explanations, and local statistics.

Key Features: Manages Quick 10 mode, Shuffle, Bookmarks, and Mistakes Review. It constantly communicates with the "Bouncer" before rendering any new question.

📂 Directory & File Structure

root/
├── index.html                 # Main Homepage & Subject Navigation
├── dashboard.html             # User's Personalized Performance Dashboard
├── README.md                  # Project Documentation
├── js/
│   ├── core.js                # [1] The Brain (Auth & Firebase)
│   ├── access-guard.js        # [2] The Bouncer (Paywalls & Limits)
│   ├── main.js                # [3] The Teacher (MCQ Engine)
│   ├── layout.js              # Global UI (Header, Footer, Mobile Menu, Modals)
│   ├── style.css              # Global Design System (Glassmorphism, High-Contrast)
│   └── favicon/               # Brand assets & PWA manifest files
├── himachal-pradesh-gk/       # Core Content Directory
│   ├── rivers/
│   │   ├── index.html         # Topic Landing Page (Contains PAGE_ACCESS ID Card)
│   │   └── river-part-1.js    # Raw Data Array
│   ├── history/
│   ├── geography/
│   └── ... (other topics)
└── user/
    └── upgrade.html           # Premium Subscription & Mock Test Bundles Page


🔐 Freemium Logic & Page Configuration

Every topic page controls its own destiny using a simple configuration block placed at the bottom of its HTML file.

The "ID Card" (PAGE_ACCESS)

window.PAGE_ACCESS = {
    category: 'hpgk_rivers',
    loginLimit: 30,          // Questions free for anonymous guests
    proLimit: 9999,          // Questions free for logged-in users (9999 = no paywall)
    requiredPass: 'mcq_pass' // Pass ID required if proLimit is triggered
};


To lock a premium Mock Test after 10 questions, simply set proLimit: 10 and requiredPass: 'patwari_mock_pass'.

🚀 Developer Guide: How to Add a New Topic

Adding new content to the platform takes less than 2 minutes:

Create Directory: Create a new folder (e.g., himachal-pradesh-gk/new-topic/).

Add Data Files: Create part-1.js containing your window.quizData array.

Setup HTML: Copy an existing index.html template.

Update the ID Card: Modify window.PAGE_ACCESS and window.QUIZ_CONFIG to reflect the new category.

Link Scripts: Ensure the Holy Trinity is linked in the exact order: core.js ➔ access-guard.js ➔ Data Files ➔ main.js.

🛠️ Tech Stack & Design System

Frontend Technologies: Pure HTML5, CSS3 (Custom Glassmorphism Variables), Vanilla JavaScript (ES6+).

Backend Services: Firebase Authentication (Google OAuth), Firebase Firestore (NoSQL Document Database).

Design Philosophy:

Mobile-First: Fully responsive grid layouts optimized for touch interactions.

Glassmorphism: Premium frosted-glass effects utilizing CSS backdrop-filter.

Accessibility: WCAG AA compliant contrast ratios (--primary: #2563eb against white/dark backgrounds).

Typography: 'Inter' for English, 'Noto Sans Devanagari' for Hindi.

📈 Future Roadmap

Payment Gateway Integration: Connecting upgrade.html and access-guard.js with Razorpay/Stripe for automated ticket unlocking.

Advanced Mock Engine: Creating a specialized mock-engine.js for time-bound, negative-marking tests.

JSON API Migration: Upgrading static .js data files to dynamic .json fetch requests to further improve load times.

Last Updated: April 2026 | Built by toolblaster.com
