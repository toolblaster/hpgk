HPGK Quiz Platform

1. Project Overview

HPGK Quiz (Himachal Pradesh General Knowledge) is a specialized educational web application designed for students preparing for competitive exams in Himachal Pradesh (HPAS, HPPSC, Allied Services, etc.).

It operates as a Hub-and-Spoke model:

Hub: The homepage (index.html) serves as a central directory/dashboard linking to specific study topics.

Spokes: Dedicated sub-folders (e.g., rivers/, history/) containing deep-dive content and specialized quiz engines.

The platform is built as a Static Web App (SPA-like feel) using vanilla HTML, CSS, and JavaScript, ensuring high performance, zero backend dependency, and offline capability via browser caching.

2. Directory Structure

toolblaster/hpgk/
├── index.html              # Main Hub/Landing Page (Directory of Topics)
├── favicon.svg             # Custom SVG Icon (Sun & Mountain theme)
├── js/
│   ├── style.css           # Global Styles (Locked width, variables, dark mode)
│   ├── layout.js           # Shared Layout Logic (Header, Footer injection)
│   └── main.js             # Core Quiz Engine Logic (State, rendering, scoring)
├── rivers/                 # Spoke: Rivers Category
│   ├── index.html          # Content Page + Quiz Interface
│   ├── river-part-1.js     # Data Chunk 1 (Questions 1-50)
│   └── river-part-2.js     # Data Chunk 2 (Questions 51-110+)
├── favicon/                # Standard Favicon assets (PNG, ICO, Manifest)
└── legal/                  # Legal Pages
    ├── about.html
    ├── privacy.html
    └── terms.html


3. Technical Architecture

A. The Quiz Engine (js/main.js)

Data Driven: Questions are loaded from separate JS files (river-part-1.js, etc.) into a global window.quizData array.

State Management: User progress (answers selected, last question index) is saved to localStorage.

Dynamic Storage Keys: The storage key is generated dynamically based on the page configuration (window.QUIZ_CONFIG.category), allowing separate progress tracking for "Rivers", "History", etc.

Features:

Bilingual Support (English & Hindi question text).

Instant Feedback (Correct/Wrong status).

Explanation Display (Rich text explanations).

Search/Filter functionality within the quiz.

Backup & Restore progress (JSON file).

B. Global Layout (js/layout.js)

Client-Side Injection: The Header and Footer are injected via JavaScript to maintain consistency across all pages without duplicating HTML code.

Sticky/Relative Positioning:

Header: Positioned relative (scrolls away with content) to maximize reading space.

Footer: Pushed to the bottom using Flexbox (body { min-height: 100vh; flex-direction: column; } and main { flex: 1; }).

Theme Management: Handles Light/Dark mode toggling and persistence via localStorage.

C. Design System (js/style.css)

Variables: Uses CSS Custom Properties (--primary, --bg-color, etc.) for easy theming.

Typography: Inter for English, Noto Sans Devanagari for Hindi. Base font size is 14px (0.875rem).

Layout Lock: The entire site content is constrained to a maximum width of 1100px (--site-width) to prevent layout stretching on large screens.

Compact & Dense: The UI is designed to be information-dense with reduced padding and margins (p { font-size: 12px; }), catering to serious study sessions.

Responsiveness: Mobile-first approach with specific tweaks for tablet and desktop grids.

4. Key Features

Dual Mode: Works as both a Study Guide (text content) and a Quiz App (interactive widget) on the same page.

High Contrast: Visual design prioritized for readability (WCAG AA standards), especially in Dark Mode.

No Login: 100% client-side; no user accounts required.

SEO Optimized: Rich structured data (Schema.org), semantic HTML, and extensive text content for search indexing.

5. Development Guidelines

Adding Questions: Create a new JS file (e.g., history-part-1.js) following the quizData structure and include it in the relevant HTML page before main.js.

New Categories: Duplicate the rivers/ folder structure, rename the category in window.QUIZ_CONFIG, and update the content.

Icons: Use Font Awesome 6 Free (referenced via CDN).

Images: Avoid heavy images; prefer CSS styling and Font Awesome icons for visual flair to keep load times fast.
