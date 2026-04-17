/**
 * Layout Manager for HPGK
 * Handles global Header, Footer, Theme logic, and Back to Top functionality.
 */

const SiteConfig = {
    root: 'https://hpgk.toolblaster.com'
};

/**
 * Renders the Global Header
 * @param {Object} options Configuration for the header
 */
function renderHeader(options = {}) {
    const { 
        title = 'HPGK Quiz', 
        subtitle = 'by toolblaster.com', 
        iconClass = 'fa-solid fa-mountain-sun', 
        link = 'https://hpgk.toolblaster.com', 
        isQuizPage = false, // Ignored for header controls now, handled by main.js in widget
        rootPath = '.' 
    } = options;

    // Ensure clean URL by stripping index.html from any passed link
    let cleanLink = link.replace(/\/index\.html$/, '/').replace(/^index\.html$/, './');
    if (cleanLink === '#') cleanLink = 'https://hpgk.toolblaster.com';

    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    // Standard Header Behavior
    headerEl.style.position = 'relative'; 
    headerEl.style.width = '100%';
    headerEl.style.zIndex = '1000';
    document.body.style.paddingTop = '0px';

    // Only Theme Button in Header now. Other actions moved to Quiz Widget via main.js
    let actionButtons = `
        <button class="theme-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle Theme">
            <i class="fa-solid fa-moon"></i>
        </button>
    `;

    const homeUrl = rootPath === '.' ? './' : '../';

    headerEl.innerHTML = `
        <div class="header-content" style="position: relative;">
            <a href="${cleanLink}" class="brand">
                <i class="${iconClass} brand-icon" ${isQuizPage ? 'style="font-size:1.2rem;"' : ''}></i>
                <div class="brand-name">
                    ${title}
                    <span class="brand-sub">${subtitle}</span>
                </div>
            </a>
            
            <div class="header-actions">
                <!-- Home Button Moved Here -->
                <a href="${homeUrl}" class="home-btn" title="Go Home">
                    <i class="fa-solid fa-house"></i>
                </a>

                ${actionButtons}
            </div>
        </div>
        <style>
            @media (max-width: 480px) {
                .brand-name { font-size: 0.9rem !important; line-height: 1.1; }
                .brand-sub { font-size: 0.65rem !important; display: block; }
                .brand-icon { font-size: 1.1rem !important; margin-right: 6px !important; }
                .header-content { padding: 10px 12px !important; }
            }
        </style>
    `;

    initThemeState();
}

/**
 * Renders the Global Footer
 * Completely rebuilt for compactness and alignment using CSS classes.
 * @param {string} rootPath - Path prefix (e.g., "." or "..") for links
 */
function renderFooter(rootPath = '.') {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    if (footerEl.parentNode !== document.body) {
        document.body.appendChild(footerEl);
    }
    
    // CSS-based alignment
    footerEl.style.marginTop = 'auto'; 
    document.body.style.paddingBottom = '0px';

    const currentYear = new Date().getFullYear();
    
    footerEl.innerHTML = `
        <footer class="site-footer-compact">
            <div class="footer-container">
                <!-- Top Row: Brand & Links -->
                <div class="footer-top-row">
                    <!-- Brand (Compact) -->
                    <a href="${rootPath}/index.html" class="footer-brand-box">
                        <i class="fa-solid fa-mountain-sun footer-brand-icon"></i>
                        <div style="display:flex; flex-direction:column;">
                            <span class="footer-brand-text">HPGK Quiz</span>
                            <span class="footer-brand-sub">toolblaster.com</span>
                        </div>
                    </a>

                    <!-- Nav Grid (Horizontal & Wrapped) -->
                    <nav class="footer-nav">
                        <a href="${rootPath}/himachal-pradesh-gk/history/" class="footer-link">History</a>
                        <a href="${rootPath}/himachal-pradesh-gk/geography/" class="footer-link">Geography</a>
                        <a href="${rootPath}/himachal-pradesh-gk/district/" class="footer-link">Districts</a>
                        <a href="${rootPath}/himachal-pradesh-gk/polity/" class="footer-link">Polity</a>
                        <a href="${rootPath}/himachal-pradesh-gk/economy/" class="footer-link">Economy</a>
                        <a href="${rootPath}/himachal-pradesh-gk/famous-people/" class="footer-link">Famous People</a>
                        <a href="${rootPath}/himachal-pradesh-gk/environment/" class="footer-link">Environment</a>
                        <a href="${rootPath}/himachal-pradesh-gk/tourism/" class="footer-link">Tourism</a>
                        <a href="${rootPath}/himachal-pradesh-gk/art-culture/" class="footer-link">Art & Culture</a>
                        <a href="${rootPath}/himachal-pradesh-gk/rivers/" class="footer-link">Rivers</a>
                    </nav>
                </div>

                <!-- Divider -->
                <div class="footer-divider"></div>

                <!-- Bottom Row: Copyright & Legal -->
                <div class="footer-bottom-row">
                    <span>&copy; ${currentYear} hpgk.toolblaster.com</span>
                    <div class="footer-legal-links">
                        <a href="${rootPath}/legal/about.html" class="footer-legal-link">About</a>
                        <a href="${rootPath}/legal/privacy.html" class="footer-legal-link">Privacy</a>
                        <a href="${rootPath}/legal/terms.html" class="footer-legal-link">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

// --- Shared Logic (Theme & Back to Top) ---

function initThemeState() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;
    
    if(theme === 'dark') {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

/**
 * Injects a smooth "Back to Top" button on all pages automatically.
 */
function initBackToTop() {
    // Prevent duplicate injection
    if (document.getElementById('backToTopBtn')) return;

    // 1. Inject CSS for the button
    const style = document.createElement('style');
    style.innerHTML = `
        #backToTopBtn {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 42px;
            height: 42px;
            background-color: var(--primary);
            color: #ffffff;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 9999;
        }
        #backToTopBtn:hover {
            background-color: var(--primary-hover);
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3);
        }
        #backToTopBtn.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        @media (max-width: 600px) {
            #backToTopBtn {
                bottom: 15px;
                right: 15px;
                width: 38px;
                height: 38px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject the Button element
    const btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.title = 'Back to Top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);

    // 3. Scroll Event Listener to show/hide
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    // 4. Click Event Listener for smooth scrolling to top
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThemeState();
    initBackToTop();
});
