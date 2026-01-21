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
    
    // Using a slightly lighter background for the footer to separate it visually
    // Adding specific text colors for better readability
    footerEl.innerHTML = `
        <footer class="site-footer" style="background: var(--card-bg); border-top: 1px solid var(--border-color); padding: 30px 20px 20px; margin-top: auto; box-shadow: 0 -2px 10px rgba(0,0,0,0.02);">
            <div class="footer-grid" style="display: grid; grid-template-columns: 35fr 65fr; gap: 40px; max-width: 1000px; margin: 0 auto 20px auto;">
                
                <!-- Column 1: Brand & About (35%) -->
                <div class="footer-col" style="display: flex; flex-direction: column; align-items: flex-start;">
                    <div class="footer-brand" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                        <div style="background: linear-gradient(135deg, var(--primary-light) 0%, var(--card-bg) 100%); padding: 10px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid var(--border-color);">
                            <i class="fa-solid fa-mountain-sun" style="color: var(--primary); font-size: 1.4rem;"></i>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-weight: 800; color: var(--text-main); font-size: 1.2rem; letter-spacing: -0.5px; line-height: 1.1;">HPGK Quiz</span>
                            <span style="font-size: 0.7rem; color: var(--text-sec); font-weight: 500;">Himachal General Knowledge</span>
                        </div>
                    </div>
                    <p style="font-size: 12px; color: var(--text-sec); line-height: 1.6; margin-bottom: 15px; max-width: 90%;">
                        Your dedicated companion for Himachal Pradesh competitive exams. Master HP GK with our comprehensive quizzes and notes.
                    </p>
                </div>

                <!-- Column 2: Quick Links (65%) -->
                <div class="footer-col">
                    <h3 style="color: var(--text-main); font-size: 0.9rem; font-weight: 700; margin-bottom: 10px; position: relative; padding-left: 10px; border-left: 3px solid var(--primary);">Quick Links</h3>
                    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px 10px;">
                        <li><a href="${rootPath}/history/" class="footer-link">History</a></li>
                        <li><a href="${rootPath}/geography/" class="footer-link">Geography</a></li>
                        <li><a href="${rootPath}/district/" class="footer-link">Districts</a></li>
                        <li><a href="${rootPath}/polity/" class="footer-link">Polity</a></li>
                        <li><a href="${rootPath}/economy/" class="footer-link">Economy</a></li>
                        <li><a href="${rootPath}/study-notes/" class="footer-link">Study Notes</a></li>
                        <li><a href="${rootPath}/famous-people/" class="footer-link">Famous People</a></li>
                        <li><a href="${rootPath}/environment/" class="footer-link">Environment</a></li>
                        <li><a href="${rootPath}/tourism/" class="footer-link">Tourism</a></li>
                        <li><a href="${rootPath}/art-culture/" class="footer-link">Art & Culture</a></li>
                        <li><a href="${rootPath}/rivers/" class="footer-link">Rivers</a></li>
                        <li><a href="${rootPath}/index.html" class="footer-link">Home</a></li>
                    </ul>
                </div>
            </div>
            
            <!-- Thin Divider -->
            <div style="max-width: 1000px; margin: 15px auto 10px; opacity: 0.4; height: 1px; background-color: var(--border-color);"></div>
            
            <!-- Bottom Bar: Centered Copyright & Legal -->
            <div style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center;">
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; align-items: center;">
                    <span style="font-size: 10px; color: var(--text-sec); opacity: 0.8;">
                        &copy; ${currentYear} hpgk.toolblaster.com. All rights reserved.
                    </span>
                    <span class="legal-separator" style="color: var(--border-color); font-size: 9px; display: none;">|</span>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <a href="${rootPath}/legal/about.html" class="footer-bottom-link">About Us</a>
                        <a href="${rootPath}/legal/privacy.html" class="footer-bottom-link">Privacy Policy</a>
                        <a href="${rootPath}/legal/terms.html" class="footer-bottom-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
        <style>
            .footer-link {
                text-decoration: none; 
                color: var(--text-sec); 
                font-size: 11px; 
                transition: opacity 0.2s ease;
                display: inline-flex;
                align-items: center;
                white-space: nowrap;
            }
            /* Removing hover color change as requested, keeping opacity shift for subtle feedback */
            .footer-link:hover {
                opacity: 0.8;
            }
            .footer-bottom-link {
                text-decoration: none;
                color: var(--text-sec);
                font-size: 10px;
                opacity: 0.8;
                transition: opacity 0.2s ease;
            }
            .footer-bottom-link:hover {
                opacity: 1;
            }
            /* Subtle hover effect for columns */
            .footer-col:hover .footer-brand i {
                transform: scale(1.1);
                transition: transform 0.3s ease;
            }
            
            @media (min-width: 769px) {
                /* Show separator on desktop */
                .legal-separator { display: inline-block !important; }
            }

            @media (max-width: 768px) {
                .footer-grid {
                    grid-template-columns: 1fr !important; /* Stack columns on mobile */
                    gap: 20px !important;
                }
                .footer-col {
                    align-items: center !important; /* Center content on mobile */
                    text-align: center;
                }
                .footer-col p {
                    max-width: 100% !important;
                    text-align: center;
                }
                /* Adjust quick links grid for mobile */
                .footer-col ul {
                    grid-template-columns: repeat(3, 1fr) !important; /* 3 cols on mobile for density */
                    width: 100%;
                    gap: 6px 4px !important;
                }
                .footer-link {
                    justify-content: center;
                }
            }
        </style>
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

// Share function removed as per request

// Auto-run theme init on load (in case header renders late)
document.addEventListener('DOMContentLoaded', initThemeState);
