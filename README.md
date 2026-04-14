HPGK Quiz Hub & Agriculture Prep

A comprehensive, bilingual (English & Hindi), and highly interactive web application designed to help aspirants prepare for Himachal Pradesh Competitive Exams (HPAS, HPPSC, Allied Services, Naib Tehsildar) and Agriculture Exams (ICAR JRF, IBPS AFO, NABARD).

🚀 Features

Bilingual Interface: All questions and study notes are available simultaneously in English and Hindi to break language barriers.

Interactive Quiz Engine: - Instant visual feedback (Green/Red) upon selecting an answer.

Active Recall methodology to enhance memory retention.

Mistake review and Bookmark filtering.

Privacy First (No Login Required): All quiz progress, bookmarks, and statistics are saved locally on the user's device using localStorage.

Backup & Restore: Users can export their progress as a .json file and restore it across different devices.

Premium UI/UX: - Mobile-first, fully responsive design.

Modern Glassmorphism aesthetics.

High contrast WCAG AA compliant color palettes.

Built-in Dark / Light Mode toggle.

Rich Study Material: - Comprehensive notes on HP Budget, Govt Schemes, and District Profiles.

1000+ Rapid Revision One-Liners (Split into optimized pages for lightning-fast loading).

📁 Project Structure

The project is built using pure HTML5, CSS3, and Vanilla JavaScript with no heavy frontend frameworks, ensuring maximum speed and SEO friendliness.

/
├── index.html                  # Main Homepage
├── css/
│   └── style.css               # Global Stylesheet (Variables, Dark Mode, Utility Classes)
├── js/
│   ├── main.js                 # Global Quiz Engine Logic
│   └── layout.js               # Dynamic Header/Footer rendering
├── himachal-pradesh-gk/        # HP GK Quiz Modules
│   ├── history/
│   ├── geography/
│   ├── polity/
│   ├── economy/
│   ├── art-culture/
│   ├── district/
│   ├── rivers/
│   ├── tourism/
│   ├── environment/
│   └── famous-people/
├── agriculture-quiz/           # Specialized Agriculture Module
│   └── index.html
├── study-notes/                # Premium Notes Section
│   ├── index.html              # Study Notes Hub
│   ├── govt-schemes/
│   ├── hp-budget/
│   ├── hp-gk-one-liners-500-part-1/
│   ├── hp-gk-one-liners-250-part-2/
│   └── hp-gk-one-liners-250-part-3/
└── legal/                      # Legal & Meta Pages
    ├── about.html
    ├── privacy.html
    └── terms.html


🛠️ Technology Stack

Frontend: HTML5, CSS3 (CSS Variables, Flexbox, Grid)

Logic & State: Vanilla JavaScript (ES6+), Web Storage API (localStorage)

Icons: FontAwesome 6

Typography: Google Fonts (Inter for English, Noto Sans Devanagari for Hindi)

SEO: Semantic HTML, JSON-LD Structured Data, Open Graph Tags, Custom Meta Descriptions.

⚙️ Installation & Deployment

Since this is a fully static client-side application, no complex build steps or backend servers are required.

Clone the repository:

git clone [https://github.com/your-username/hpgk-quiz-hub.git](https://github.com/your-username/hpgk-quiz-hub.git)


Run locally:
Simply open the index.html file in any modern web browser, or use an extension like VS Code Live Server for a better development experience.

Deployment:
Host the directory on any static file hosting service such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

🎯 Quiz Engine Usage

The core quiz logic is maintained in js/main.js. Each specific category folder contains an index.html page and multiple .js files containing the question arrays.

To add new questions:

Navigate to the specific topic folder (e.g., himachal-pradesh-gk/history/).

Open or create a data file (e.g., history-part-1.js).

Append objects to the quizData array:

quizData.push({
    id: "hist-001",
    qEn: "Question in English?",
    qHi: "प्रश्न हिंदी में?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0, // Index of the correct option (0-based)
    explEn: "Explanation in English.",
    explHi: "हिंदी में स्पष्टीकरण।"
});


🤝 Contributing

Contributions are welcome! If you find any factual errors in the GK questions, layout bugs, or have feature requests, please open an issue or submit a pull request.

📄 License

This project and its original content are developed and maintained by ToolBlaster.

Educational content provided is for exam preparation purposes.

Empowering Aspirants with Knowledge - HPGK Quiz Hub
