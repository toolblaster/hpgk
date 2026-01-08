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
 * @param {string} options.title - Main title (e.g., "HPGK Quiz" or "Rivers of HP")
 * @param {string} options.subtitle - Subtitle (e.g., "by toolblaster.com" or "Category")
 * @param {string} options.iconClass - FontAwesome class (e.g., "fa-mountain-sun")
 * @param {string} options.link - Where the logo clicks to (e.g., "#" or "../index.html")
 * @param {boolean} options.isQuizPage - If true, shows Import/Export/Reset controls
 * @param {string} options.rootPath - Path prefix (e.g., "." or "..") to find assets
 */
function renderHeader(options = {}) {
    const { 
        title = 'HPGK Quiz', 
        subtitle = 'by toolblaster.com', 
        iconClass = 'fa-solid fa-mountain-sun', 
        // Default to absolute root URL for clean navigation
        link = 'https://hpgk.toolblaster.com', 
        isQuizPage = false,
        rootPath = '.' 
    } = options;

    // Ensure clean URL by stripping index.html from any passed link
    // This fixes cases where '../index.html' is passed, converting it to '../' (clean root)
    // Also ensures we don't have trailing '#' if link was default
    let cleanLink = link.replace(/\/index\.html$/, '/').replace(/^index\.html$/, './');
    if (cleanLink === '#') cleanLink = 'https://hpgk.toolblaster.com';

    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    // Standard Header Behavior
    // The header sits at the top of the document and scrolls away when the user scrolls down.
    headerEl.style.position = 'relative'; 
    headerEl.style.width = '100%';
    headerEl.style.zIndex = '1000';

    // Remove body padding as header is in the document flow
    document.body.style.paddingTop = '0px';

    // Define Controls based on page type
    let actionButtons = '';
    
    if (isQuizPage) {
        // Quiz Page Controls (Export, Import, Theme, Reset)
        actionButtons = `
            <button class="theme-btn" onclick="exportProgress()" title="Backup Progress">
                <i class="fa-solid fa-download"></i>
            </button>
            <label for="importFile" class="theme-btn" title="Restore Progress" style="margin:0; display:flex; align-items:center;">
                <i class="fa-solid fa-upload"></i>
            </label>
            <input type="file" id="importFile" style="display: none;" accept=".json" onchange="importProgress(this)">
            
            <button class="theme-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle Theme">
                <i class="fa-solid fa-moon"></i>
            </button>
            
            <button class="reset-btn" onclick="resetProgress()">Reset</button>
        `;
    } else {
        // Simple Directory Controls (Just Theme)
        actionButtons = `
            <button class="theme-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle Theme">
                <i class="fa-solid fa-moon"></i>
            </button>
        `;
    }

    // Determine the Home Link URL (root of the site)
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
            
            <!-- Compact Home Link Centered -->
            <a href="${homeUrl}" class="home-link-compact" title="Go Home">
                <i class="fa-solid fa-house"></i><span class="home-lbl">Home</span>
            </a>

            <div class="header-actions">
                ${actionButtons}
            </div>
        </div>
        <style>
            /* Dynamic Styles for LayoutJS elements */
            .home-link-compact {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                gap: 5px;
                color: var(--text-sec);
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 500;
                padding: 4px 10px;
                border-radius: 20px;
                background: var(--input-bg);
                border: 1px solid var(--border-color);
                z-index: 10;
                white-space: nowrap;
            }
            .home-lbl {
                display: inline-block;
            }

            @media (max-width: 480px) {
                /* Make brand title more compact */
                .brand-name {
                    font-size: 0.9rem !important; /* Reduce main title size */
                    line-height: 1.1;
                }
                .brand-sub {
                    font-size: 0.65rem !important; /* Reduce subtitle size */
                    display: block; /* Ensure it stacks or hides if needed */
                }
                .brand-icon {
                    font-size: 1.1rem !important; /* Reduce icon size */
                    margin-right: 6px !important;
                }
                
                /* Adjust spacing of container */
                .header-content {
                    padding: 10px 12px !important; /* Slightly tighter padding */
                }

                /* Mobile Home Link: Right Slide-out Style */
                .home-lbl {
                    display: none; /* Hide label for compact look */
                }
                .home-link-compact {
                    position: fixed;
                    left: auto;
                    right: 0;
                    top: 100px; /* Positioned below header */
                    transform: none;
                    background: var(--primary); /* High visibility */
                    color: white !important;
                    border: none;
                    border-radius: 20px 0 0 20px; /* Left-rounded tab shape */
                    padding: 8px 10px 8px 14px;
                    box-shadow: -2px 2px 8px rgba(0,0,0,0.2);
                    z-index: 9999;
                    gap: 0;
                }
                .home-link-compact i {
                    font-size: 1rem;
                    color: white;
                }
            }
        </style>
    `;

    // Initialize Theme State immediately after render
    initThemeState();
}

/**
 * Renders the Global Footer
 * @param {string} rootPath - Path prefix (e.g., "." or "..") for links
 */
function renderFooter(rootPath = '.') {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    // Standard Footer Logic:
    // Move the footer container to be a direct child of document.body
    if (footerEl.parentNode !== document.body) {
        document.body.appendChild(footerEl);
    }
    
    // Ensure footer sits at the bottom using flexbox margin-top: auto
    footerEl.style.position = 'relative';
    footerEl.style.width = '100%';
    footerEl.style.marginTop = 'auto'; 
    footerEl.style.marginBottom = '0';
    
    // Remove padding from body since footer is in flow
    document.body.style.paddingBottom = '0px';

    const currentYear = new Date().getFullYear();
    
    footerEl.innerHTML = `
        <div class="site-footer">
            <div class="footer-inner">
                <span>&copy; ${currentYear} HPGK Quiz by <a href="https://toolblaster.com" style="color: var(--primary-dark); text-decoration: none; font-weight: 600;">toolblaster.com</a>.</span>
                
                <span class="footer-links">
                    <a href="${rootPath}/legal/about.html" style="color: var(--text-sec); text-decoration: none; font-size: 0.8rem; margin: 0 5px;">About</a> |
                    <a href="${rootPath}/legal/privacy.html" style="color: var(--text-sec); text-decoration: none; font-size: 0.8rem; margin: 0 5px;">Privacy</a> |
                    <a href="${rootPath}/legal/terms.html" style="color: var(--text-sec); text-decoration: none; font-size: 0.8rem; margin: 0 5px;">Terms</a>
                </span>

                <button onclick="shareApp()" class="footer-share-btn" title="Share this page">
                    <i class="fa-solid fa-share-nodes"></i> <span class="share-text">Share</span>
                </button>
            </div>
        </div>
    `;
}

// --- Shared Logic (Theme & Share) ---

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

window.shareApp = async function() {
    const canonical = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
    const btn = document.querySelector('.footer-share-btn');
    if (!btn) return;
    
    const originalHtml = btn.innerHTML;

    if (navigator.share) {
        try { await navigator.share({ url: canonical }); } catch (err) {}
    } else {
        try {
            await navigator.clipboard.writeText(canonical);
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => { btn.innerHTML = originalHtml; }, 2000);
        } catch (err) { alert('Could not copy URL'); }
    }
};

// Auto-run theme init on load (in case header renders late)
document.addEventListener('DOMContentLoaded', initThemeState);
