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

    headerEl.innerHTML = `
        <div class="header-content">
            <a href="${cleanLink}" class="brand">
                <i class="${iconClass} brand-icon" ${isQuizPage ? 'style="font-size:1.2rem;"' : ''}></i>
                <div class="brand-name">
                    ${title}
                    <span class="brand-sub">${subtitle}</span>
                </div>
            </a>
            <div class="header-actions">
                ${actionButtons}
            </div>
        </div>
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

    // Clean links in footer (removing index.html if present in rootPath logic, though here they are specific pages)
    // For general links, ensure no index.html is appended manually in other calls.
    
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
