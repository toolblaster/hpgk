/**
 * Layout Manager for HPGK
 * Handles global Header, Footer, and Theme logic.
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
                        <a href="${rootPath}/history/" class="footer-link">History</a>
                        <a href="${rootPath}/geography/" class="footer-link">Geography</a>
                        <a href="${rootPath}/district/" class="footer-link">Districts</a>
                        <a href="${rootPath}/polity/" class="footer-link">Polity</a>
                        <a href="${rootPath}/economy/" class="footer-link">Economy</a>
                        <a href="${rootPath}/famous-people/" class="footer-link">Famous People</a>
                        <a href="${rootPath}/environment/" class="footer-link">Environment</a>
                        <a href="${rootPath}/tourism/" class="footer-link">Tourism</a>
                        <a href="${rootPath}/art-culture/" class="footer-link">Art & Culture</a>
                        <a href="${rootPath}/rivers/" class="footer-link">Rivers</a>
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

// --- Shared Logic (Theme Only) ---

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

document.addEventListener('DOMContentLoaded', initThemeState);
