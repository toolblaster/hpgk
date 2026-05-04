/**
 * Layout Manager for HPGK
 * Handles global Header, Footer, Theme logic, Back to Top, Google Auth, and Mobile Menu.
 * 🔥 UPDATED: Zero CLS (Cumulative Layout Shift) with Premium Skeleton Loading UI
 */

const SiteConfig = {
    root: 'https://hpgk.toolblaster.com'
};

// Global variable to store rootPath for auth UI
let currentRootPath = '.';

// =========================================================================
// 🔥 PREMIUM MOBILE HAMBURGER MENU (Slide-out Navigation)
// =========================================================================
function initMobileMenu() {
    if (document.getElementById('mobileSideMenu')) return;

    const menuHTML = `
        <div id="mobileMenuOverlay" class="mobile-menu-overlay" onclick="toggleMobileMenu()"></div>
        <nav id="mobileSideMenu" class="mobile-side-menu">
            <div class="side-menu-header">
                <a href="${SiteConfig.root}/" class="brand" style="text-decoration:none; display:flex; align-items:center;">
                    <i class="fa-solid fa-mountain-sun brand-icon" style="color:var(--primary); font-size:1.4rem; margin-right:10px;"></i>
                    <div class="brand-name" style="color:var(--text-main); font-weight:800; font-size:1.15rem; line-height:1.1; letter-spacing:-0.5px;">
                        HPGK Quiz<br><span style="font-size:0.65rem; color:var(--text-sec); font-weight:600; letter-spacing:0;">by toolblaster.com</span>
                    </div>
                </a>
                <div style="display:flex; align-items:center; gap:16px;">
                    <!-- Theme Toggle shifted left with increased gap -->
                    <button class="theme-icon-btn" id="mobileThemeBtn" onclick="toggleTheme()" title="Toggle Theme" aria-label="Toggle Theme">
                        <i class="fa-solid fa-moon"></i>
                    </button>
                    <button class="close-menu-btn" onclick="toggleMobileMenu()" aria-label="Close Menu">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
            
            <div class="side-menu-content">
                <div class="menu-section">
                    <div class="menu-label">Main Menu</div>
                    <a href="${SiteConfig.root}/" class="menu-link">
                        <div class="menu-icon icon-primary"><i class="fa-solid fa-house"></i></div>
                        <span>Home</span>
                    </a>
                    <a href="${SiteConfig.root}/himachal-pradesh-gk/" class="menu-link">
                        <div class="menu-icon"><i class="fa-solid fa-layer-group"></i></div>
                        <span>HP GK Series</span>
                    </a>
                    <a href="${SiteConfig.root}/study-notes/" class="menu-link">
                        <div class="menu-icon"><i class="fa-solid fa-book-open"></i></div>
                        <span>Study Notes</span>
                    </a>
                    <a href="${SiteConfig.root}/agriculture-quiz/" class="menu-link">
                        <div class="menu-icon icon-green"><i class="fa-solid fa-seedling"></i></div>
                        <span>Agriculture Quiz</span>
                    </a>
                </div>

                <div class="menu-section">
                    <div class="menu-label">My Account</div>
                    <a href="${SiteConfig.root}/user/dashboard.html" class="menu-link">
                        <div class="menu-icon icon-purple"><i class="fa-solid fa-circle-user"></i></div>
                        <span>My Dashboard</span>
                    </a>
                </div>
            </div>
            
            <div class="side-menu-footer">
                &copy; ${new Date().getFullYear()} ToolBlaster EdTech.
            </div>
        </nav>
    `;

    const menuCSS = `
        <style>
            /* Overlay Background */
            .mobile-menu-overlay {
                position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
                z-index: 1000001; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
            }
            .mobile-menu-overlay.show { opacity: 1; pointer-events: auto; }

            /* Side Menu Panel */
            .mobile-side-menu {
                position: fixed; top: 0; right: 0; bottom: 0;
                width: 320px; max-width: 85vw;
                background: var(--card-bg, #ffffff);
                backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
                box-shadow: -10px 0 40px rgba(0,0,0,0.15);
                z-index: 1000002;
                transform: translateX(100%);
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);
                display: flex; flex-direction: column;
                border-left: 1px solid var(--card-border);
            }
            [data-theme="dark"] .mobile-side-menu { background: rgba(30, 41, 59, 0.95); box-shadow: -10px 0 40px rgba(0,0,0,0.6); }
            
            .mobile-side-menu.open { transform: translateX(0); }

            /* Header inside menu */
            .side-menu-header {
                padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;
                border-bottom: 1px solid var(--card-border); background: rgba(37, 99, 235, 0.02);
            }
            .close-menu-btn, .theme-icon-btn {
                background: var(--input-bg); border: 1px solid var(--card-border);
                width: 34px; height: 34px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                color: var(--text-sec); cursor: pointer; transition: all 0.2s; font-size: 1.1rem;
                text-decoration: none; padding: 0; /* Clear padding */
            }
            .close-menu-btn:hover { background: #ef4444; color: white; border-color: #ef4444; transform: rotate(90deg); }
            .theme-icon-btn:hover { background: var(--primary); color: white; border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 4px 10px rgba(37,99,235,0.2); }

            /* Content & Links */
            .side-menu-content { padding: 15px 20px; overflow-y: auto; flex: 1; }
            .menu-section { margin-bottom: 20px; }
            .menu-label {
                font-size: 0.7rem; font-weight: 800; color: var(--text-sec);
                text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
                padding-left: 5px; opacity: 0.8;
            }
            
            /* 🔥 FIXED: More compact padding and smaller gap for the menu link */
            .menu-link {
                display: flex; align-items: center; gap: 8px;
                padding: 6px 10px; border-radius: 8px; 
                color: var(--text-main); text-decoration: none;
                font-size: 0.85rem; font-weight: 700; 
                transition: all 0.2s ease; margin-bottom: 2px;
                border: 1px solid transparent;
            }
            .menu-link:hover {
                background: var(--primary-light); color: var(--primary);
                border-color: rgba(37, 99, 235, 0.1); transform: translateX(4px);
            }
            [data-theme="dark"] .menu-link:hover { border-color: rgba(96, 165, 250, 0.1); }
            
            /* Custom Icon Colors */
            .icon-primary { color: var(--primary); }
            .icon-green { color: #10b981; }
            .icon-purple { color: #8b5cf6; }

            /* 🔥 FIXED: Slightly smaller icon to match the compact padding */
            .menu-icon {
                width: 26px; height: 26px; border-radius: 6px; 
                background: var(--input-bg); 
                display: flex; align-items: center; justify-content: center;
                font-size: 0.8rem; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            
            /* Forces background and pure white text unconditionally */
            .menu-link:hover .menu-icon {
                background: var(--primary) !important; 
                color: #ffffff !important;
                box-shadow: 0 4px 10px rgba(37,99,235,0.25);
            }

            .side-menu-footer {
                padding: 15px 25px; border-top: 1px solid var(--card-border);
                font-size: 0.7rem; color: var(--text-sec); text-align: center; font-weight: 600;
            }
        </style>
    `;

    document.body.insertAdjacentHTML('beforeend', menuHTML + menuCSS);
    
    // Initial sync of the mobile theme icon
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const mobileBtn = document.getElementById('mobileThemeBtn');
    if (mobileBtn) {
        mobileBtn.innerHTML = currentTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

// Mobile Menu Toggle Logic
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileSideMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    if (menu && overlay) {
        menu.classList.toggle('open');
        overlay.classList.toggle('show');
        
        // Lock background scrolling when menu is open
        if (menu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
};

// =========================================================================
// 🔥 PREMIUM SAAS LOGIN MODAL (Injects the popup into any page)
// =========================================================================
function initLoginModal() {
    if (document.getElementById('saasLoginModal')) return;

    const termsUrl = `${SiteConfig.root}/legal/terms.html`;
    const privacyUrl = `${SiteConfig.root}/legal/privacy.html`;

    const modalHTML = `
        <div id="saasLoginModal" class="login-modal-overlay" onclick="if(event.target === this) closeLoginModal()">
            <div class="login-modal-content">
                <button class="close-modal-btn" onclick="closeLoginModal()" aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                
                <div class="login-modal-header">
                    <div class="modal-logo">
                        <i class="fa-solid fa-mountain-sun"></i>
                    </div>
                    <h2>Unlock Premium Access</h2>
                    <p class="login-modal-desc">
                        Log in securely to save your progress across <strong>3000+ MCQs</strong>, unlock premium mock tests, and access your personalized smart dashboard.
                    </p>
                </div>
                
                <button class="modal-google-btn" id="modalGoogleBtn" onclick="startGoogleLogin()">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo">
                    <span>Continue with Google</span>
                </button>
                
                <div class="login-terms">
                    By continuing, you agree to our <a href="${termsUrl}">Terms</a> & <a href="${privacyUrl}">Privacy Policy</a>.
                </div>
            </div>
        </div>
    `;

    const modalCSS = `
        <style>
            .login-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
                z-index: 1000000; display: none; align-items: center; justify-content: center; padding: 15px;
                opacity: 0; transition: opacity 0.3s ease;
            }
            .login-modal-overlay.show { display: flex; opacity: 1; }
            
            .login-modal-content {
                background: #ffffff !important; 
                width: 95%; max-width: 330px; margin: auto;
                border: 1px solid #e2e8f0 !important;
                border-radius: 16px; padding: 25px 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important; 
                transform: translateY(20px) scale(0.95); 
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                position: relative; box-sizing: border-box; text-align: center;
            }
            [data-theme="dark"] .login-modal-content { 
                background: #1e293b !important; border-color: #334155 !important; box-shadow: 0 20px 40px rgba(0,0,0,0.5) !important; 
            }
            
            .login-modal-overlay.show .login-modal-content { transform: translateY(0) scale(1); }
            
            .close-modal-btn {
                position: absolute; top: 10px; right: 10px;
                background: transparent; border: none; font-size: 1.1rem; cursor: pointer; 
                color: #64748b !important; transition: color 0.2s; width: 28px; height: 28px;
                display: flex; align-items: center; justify-content: center; border-radius: 50%;
            }
            .close-modal-btn:hover { color: #ef4444 !important; background: rgba(239, 68, 68, 0.1); }
            
            .login-modal-header { margin-bottom: 20px; }
            .modal-logo {
                width: 45px; height: 45px; margin: 0 auto 12px auto;
                background: rgba(37, 99, 235, 0.1);
                color: #2563eb; border-radius: 50%;
                display: flex; align-items: center; justify-content: center; font-size: 1.3rem;
            }
            [data-theme="dark"] .modal-logo { color: #60a5fa; background: rgba(96, 165, 250, 0.15); }
            
            .login-modal-header h2 { 
                font-size: 1.1rem; font-weight: 800; margin: 0 0 8px 0; 
                color: #0f172a !important; letter-spacing: -0.3px; 
            }
            
            .login-modal-desc { 
                font-size: 0.85rem; color: #475569 !important; margin: 0; line-height: 1.5; 
            }
            .login-modal-desc strong { color: #0f172a !important; font-weight: 700; }
            
            [data-theme="dark"] .login-modal-header h2 { color: #f8fafc !important; }
            [data-theme="dark"] .login-modal-desc { color: #cbd5e1 !important; }
            [data-theme="dark"] .login-modal-desc strong { color: #f8fafc !important; }
            
            .modal-google-btn {
                background: #ffffff !important; color: #334155 !important; border: 1px solid #cbd5e1 !important; 
                padding: 10px 15px; border-radius: 30px; font-family: 'Inter', sans-serif;
                font-size: 0.9rem; font-weight: 700; cursor: pointer; 
                display: flex; align-items: center; justify-content: center; gap: 8px;
                width: 100%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important; transition: all 0.2s ease;
            }
            .modal-google-btn img { width: 1.15em; height: 1.15em; display: inline-block; }
            .modal-google-btn:hover { 
                transform: translateY(-1px); box-shadow: 0 4px 10px rgba(37, 99, 235, 0.1) !important; border-color: #94a3b8 !important; 
            }
            
            [data-theme="dark"] .modal-google-btn { 
                background: #1e293b !important; color: #f8fafc !important; border-color: #475569 !important; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important; 
            }
            [data-theme="dark"] .modal-google-btn:hover { border-color: #64748b !important; background: #334155 !important; }
            
            .login-terms { 
                margin-top: 15px; font-size: 0.65rem; color: #64748b !important; 
                white-space: nowrap; 
            }
            .login-terms a { color: #2563eb !important; text-decoration: none; font-weight: 600; }
            .login-terms a:hover { text-decoration: underline; }
            [data-theme="dark"] .login-terms { color: #94a3b8 !important; }
            [data-theme="dark"] .login-terms a { color: #60a5fa !important; }

            @media (max-width: 360px) {
                .login-modal-content { padding: 20px 15px; }
                .login-terms { font-size: 0.55rem; white-space: normal; line-height: 1.2; }
                .login-modal-desc { font-size: 0.75rem; }
            }
        </style>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML + modalCSS);
}

window.openLoginModal = function() {
    const modal = document.getElementById('saasLoginModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }
};

window.closeLoginModal = function() {
    const modal = document.getElementById('saasLoginModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
};

window.startGoogleLogin = function() {
    if(window.loginWithGoogle) window.loginWithGoogle();
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
        isQuizPage = false, 
        rootPath = '.' 
    } = options;

    currentRootPath = rootPath; // Store globally for auth UI

    let cleanLink = link.replace(/\/index\.html$/, '/').replace(/^index\.html$/, './');
    if (cleanLink === '#') cleanLink = 'https://hpgk.toolblaster.com';

    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    headerEl.style.position = 'relative'; 
    headerEl.style.width = '100%';
    headerEl.style.zIndex = '1000';
    document.body.style.paddingTop = '0px';

    const homeUrl = rootPath === '.' ? './' : '../';

    // 🔥 ZERO CLS (Cumulative Layout Shift) SKELETON INJECTED HERE
    headerEl.innerHTML = `
        <div class="header-content" style="position: relative; display: flex; align-items: center; justify-content: space-between;">
            
            <a href="${cleanLink}" class="brand">
                <i class="${iconClass} brand-icon" ${isQuizPage ? 'style="font-size:1.2rem;"' : ''}></i>
                <div class="brand-name">
                    ${title}
                    <span class="brand-sub">${subtitle}</span>
                </div>
            </a>
            
            <!-- Right Group: Auth / Dashboard Container + Hamburger -->
            <div class="header-actions" style="display: flex; align-items: center; gap: 8px;">
                <div id="auth-ui-container">
                    <!-- Skeleton Loader: Prevents CLS before Firebase resolves -->
                    <div class="auth-group-wrapper" style="pointer-events: none;">
                        <div class="skeleton-shimmer skeleton-dash-btn" style="width: 110px; height: 28px; border-radius: 14px;"></div>
                        <div class="skeleton-shimmer skeleton-login-btn" style="width: 75px; height: 28px; border-radius: 14px;"></div>
                    </div>
                </div>
                
                <!-- Premium Hamburger Menu Button -->
                <button class="hamburger-btn" onclick="toggleMobileMenu()" aria-label="Open Menu">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
            
        </div>
        <style>
            /* 🔥 ZERO CLS FIX: Fixed container size to prevent Hamburger shift */
            #auth-ui-container {
                min-width: 215px; 
                min-height: 40px;
                display: flex; 
                justify-content: flex-end; 
                align-items: center;
            }

            .skeleton-shimmer {
                background: linear-gradient(90deg, rgba(203, 213, 225, 0.4) 25%, rgba(241, 245, 249, 0.7) 50%, rgba(203, 213, 225, 0.4) 75%);
                background-size: 200% 100%;
                animation: authShimmer 1.5s infinite linear;
            }
            [data-theme="dark"] .skeleton-shimmer {
                background: linear-gradient(90deg, rgba(51, 65, 85, 0.5) 25%, rgba(71, 85, 105, 0.8) 50%, rgba(51, 65, 85, 0.5) 75%);
            }
            @keyframes authShimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }

            /* Grouped Auth UI Styles (Premium EdTech Look) */
            .auth-group-wrapper {
                display: flex; align-items: center; gap: 8px;
                padding: 4px 6px 4px 4px; border: 1px solid var(--card-border, #cbd5e1);
                border-radius: 30px; background: rgba(255, 255, 255, 0.5);
                box-shadow: 0 2px 6px rgba(0,0,0,0.04); transition: all 0.2s ease;
            }
            [data-theme="dark"] .auth-group-wrapper { border-color: #334155; background: rgba(0, 0, 0, 0.2); }

            /* Hamburger Button Styling */
            .hamburger-btn {
                background: var(--input-bg); 
                border: 1px solid var(--card-border);
                color: var(--text-main);
                width: 38px; height: 38px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 1.1rem; cursor: pointer; transition: all 0.2s ease;
                box-shadow: 0 2px 6px rgba(0,0,0,0.04); margin-left: 4px;
            }
            [data-theme="dark"] .hamburger-btn { border-color: #334155; background: rgba(0, 0, 0, 0.2); }
            .hamburger-btn:hover { background: var(--primary); color: white; border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2); }

            /* Punchy Red Google Login Button */
            .login-btn {
                background: #dc2626; color: #ffffff; border: none; padding: 6px 14px;
                border-radius: 20px; font-size: 0.8rem; font-weight: 700; cursor: pointer;
                display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; font-family: 'Inter', sans-serif;
            }
            .login-btn:hover { background: #b91c1c; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3); }
            [data-theme="dark"] .login-btn { background: #ef4444; color: #ffffff; }
            [data-theme="dark"] .login-btn:hover { background: #dc2626; box-shadow: 0 4px 10px rgba(239, 68, 68, 0.4); }
            
            .dashboard-btn {
                background: var(--primary-light); color: var(--primary); border: none; padding: 6px 12px;
                border-radius: 20px; font-size: 0.75rem; font-weight: 700; cursor: pointer;
                text-decoration: none; display: flex; align-items: center; gap: 5px; transition: all 0.2s; font-family: 'Inter', sans-serif;
            }
            .dashboard-btn:hover { background: var(--primary); color: white; }
            [data-theme="dark"] .dashboard-btn { background: rgba(255, 255, 255, 0.1); color: var(--text-main); }
            [data-theme="dark"] .dashboard-btn:hover { background: var(--primary); color: white; }

            .user-avatar { width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--primary); object-fit: cover; background: #fff; }

            .logout-icon-btn {
                color: #ef4444; background: rgba(239, 68, 68, 0.1); border: none;
                width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                font-size: 0.8rem; cursor: pointer; transition: all 0.2s;
            }
            .logout-icon-btn:hover { background: #ef4444; color: white; }

            .text-mobile { display: none; }

            @media (max-width: 600px) {
                #auth-ui-container { min-width: 125px; min-height: 34px; }
                .skeleton-dash-btn { width: 34px !important; }
                .skeleton-login-btn { width: 65px !important; }

                .brand-name { font-size: 0.9rem !important; line-height: 1.1; }
                .brand-sub { font-size: 0.65rem !important; display: block; }
                .brand-icon { font-size: 1.1rem !important; margin-right: 6px !important; }
                .header-content { padding: 10px 12px !important; }
                
                .login-btn { padding: 6px 12px; font-size: 0.8rem; }
                .dashboard-btn { padding: 6px 12px; font-size: 1.1rem; } 
                .text-desktop { display: none; } 
                
                .auth-group-wrapper { gap: 6px; padding: 3px 5px 3px 3px; }
                .user-avatar, .logout-icon-btn { width: 26px; height: 26px; }
                
                .hamburger-btn { width: 34px; height: 34px; font-size: 1rem; }
            }
        </style>
    `;
}

/**
 * Renders the Global Footer
 */
function renderFooter(rootPath = '.') {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    if (footerEl.parentNode !== document.body) {
        document.body.appendChild(footerEl);
    }
    
    footerEl.style.marginTop = 'auto'; 
    document.body.style.paddingBottom = '0px';

    const currentYear = new Date().getFullYear();
    
    footerEl.innerHTML = `
        <footer class="site-footer-compact">
            <div class="footer-container">
                <div class="footer-top-row">
                    <a href="${rootPath}/index.html" class="footer-brand-box">
                        <i class="fa-solid fa-mountain-sun footer-brand-icon"></i>
                        <div style="display:flex; flex-direction:column;">
                            <span class="footer-brand-text">HPGK Quiz</span>
                            <span class="footer-brand-sub">toolblaster.com</span>
                        </div>
                    </a>

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

                <div class="footer-divider"></div>

                <div class="footer-bottom-row">
                    <span>&copy; ${currentYear} hpgk.toolblaster.com</span>
                    <div class="footer-legal-links">
                        <a href="${SiteConfig.root}/legal/about.html" class="footer-legal-link">About</a>
                        <a href="${SiteConfig.root}/legal/privacy.html" class="footer-legal-link">Privacy</a>
                        <a href="${SiteConfig.root}/legal/terms.html" class="footer-legal-link">Terms</a>
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
    const mobileBtn = document.getElementById('mobileThemeBtn');
    const iconHtml = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    
    if (btn) btn.innerHTML = iconHtml;
    if (mobileBtn) mobileBtn.innerHTML = iconHtml;
}

function initBackToTop() {
    if (document.getElementById('backToTopBtn')) return;
    const style = document.createElement('style');
    style.innerHTML = `
        #backToTopBtn {
            position: fixed; bottom: 25px; right: 25px; width: 42px; height: 42px;
            background-color: var(--primary); color: #ffffff; border: none; border-radius: 50%;
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            font-size: 1.1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.15); opacity: 0; visibility: hidden;
            transform: translateY(20px); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 9999;
        }
        #backToTopBtn:hover { background-color: var(--primary-hover); transform: translateY(-3px); box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3); }
        #backToTopBtn.show { opacity: 1; visibility: visible; transform: translateY(0); }
        @media (max-width: 600px) { #backToTopBtn { bottom: 15px; right: 15px; width: 38px; height: 38px; font-size: 1rem; } }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.title = 'Back to Top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) btn.classList.add('show');
        else btn.classList.remove('show');
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =========================================================================
// 🔥 FIREBASE GOOGLE AUTHENTICATION INTEGRATION
// =========================================================================

let auth, provider;

async function initFirebase() {
    try {
        // 🔥 REMOVED updateAuthUI(null) here to let the Skeleton persist until Firebase decides

        const { initializeApp, getApps, getApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
        const { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");

        const firebaseConfig = {
            apiKey: "AIzaSyDfz5Y4oVQHl-crnATIv5dMWsw7edSKddQ",
            authDomain: "hpgk-quiz.firebaseapp.com",
            projectId: "hpgk-quiz",
            storageBucket: "hpgk-quiz.firebasestorage.app",
            messagingSenderId: "273909571419",
            appId: "1:273909571419:web:20d5e06d8b582f4d2dc47e",
            measurementId: "G-LFXVQ2JNTY"
        };

        const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
        auth = getAuth(app);
        provider = new GoogleAuthProvider();

        onAuthStateChanged(auth, (user) => {
            updateAuthUI(user);
        });

        window.loginWithGoogle = async () => {
            const modalBtn = document.getElementById('modalGoogleBtn');
            
            const resetBtnState = () => {
                if (modalBtn) {
                    modalBtn.innerHTML = '<img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo"><span>Continue with Google</span>';
                    modalBtn.style.opacity = '1';
                    modalBtn.style.pointerEvents = 'auto';
                }
            };

            const handleFocusReturn = () => {
                setTimeout(() => {
                    if (!auth.currentUser) { resetBtnState(); }
                    window.removeEventListener('focus', handleFocusReturn);
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                }, 800); 
            };

            const handleVisibilityChange = () => {
                if (document.visibilityState === 'visible') { handleFocusReturn(); }
            };

            window.addEventListener('focus', handleFocusReturn);
            document.addEventListener('visibilitychange', handleVisibilityChange);

            try {
                if (modalBtn) {
                    modalBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="font-size: 1.15em;"></i><span>Connecting...</span>';
                    modalBtn.style.opacity = '0.8';
                    modalBtn.style.pointerEvents = 'none';
                }
                
                await signInWithPopup(auth, provider);
                
                window.removeEventListener('focus', handleFocusReturn);
                document.removeEventListener('visibilitychange', handleVisibilityChange);
                closeLoginModal();
                
            } catch (error) {
                console.error("Login Error Details:", error);
                
                updateAuthUI(null); 
                resetBtnState();
                window.removeEventListener('focus', handleFocusReturn);
                document.removeEventListener('visibilitychange', handleVisibilityChange);
                
                if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
                    return; 
                }

                alert("Login failed. Please check your internet connection and try again.");
            }
        };

        window.logoutUser = async () => {
            try { await signOut(auth); } catch (error) { console.error("Logout Error:", error); }
        };

    } catch (error) {
        console.error("Firebase Initialization Failed in Layout:", error);
        updateAuthUI(null); // Fallback to Login button if network fails
    }
}

function updateAuthUI(user) {
    const authContainer = document.getElementById('auth-ui-container');
    if (!authContainer) return;

    const dashLink = currentRootPath === '.' ? './user/dashboard.html' : currentRootPath + '/user/dashboard.html';

    if (user) {
        const userPhoto = user.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName || 'S') + '&background=2563eb&color=fff';
        
        authContainer.innerHTML = `
            <div class="auth-group-wrapper">
                <a href="${dashLink}" class="dashboard-btn" title="My Dashboard">
                    <i class="fa-solid fa-circle-user"></i> 
                    <span class="text-desktop">My Dashboard</span>
                </a>
                <img src="${userPhoto}" alt="Profile" class="user-avatar" title="${user.displayName || 'Student'}">
                <button class="logout-icon-btn" onclick="logoutUser()" title="Logout">
                    <i class="fa-solid fa-power-off"></i>
                </button>
            </div>
        `;
    } else {
        authContainer.innerHTML = `
            <div class="auth-group-wrapper">
                <a href="${dashLink}" class="dashboard-btn" title="My Dashboard">
                    <i class="fa-solid fa-circle-user"></i> 
                    <span class="text-desktop">My Dashboard</span>
                </a>
                <button class="login-btn" onclick="openLoginModal()" title="Login Securely">
                    <i class="fa-brands fa-google"></i> 
                    <span>Login</span>
                </button>
            </div>
        `;
    }
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
    initLoginModal(); 
    initMobileMenu(); 
    initThemeState(); 
    initFirebase(); 
});
