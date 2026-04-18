/**
 * Layout Manager for HPGK
 * Handles global Header, Footer, Theme logic, Back to Top, and Google Auth.
 */

const SiteConfig = {
    root: 'https://hpgk.toolblaster.com'
};

// Global variable to store rootPath for auth UI
let currentRootPath = '.';

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

    // Ensure clean URL by stripping index.html from any passed link
    let cleanLink = link.replace(/\/index\.html$/, '/').replace(/^index\.html$/, './');
    if (cleanLink === '#') cleanLink = 'https://hpgk.toolblaster.com';

    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    headerEl.style.position = 'relative'; 
    headerEl.style.width = '100%';
    headerEl.style.zIndex = '1000';
    document.body.style.paddingTop = '0px';

    const homeUrl = rootPath === '.' ? './' : '../';

    headerEl.innerHTML = `
        <div class="header-content" style="position: relative; display: flex; align-items: center; justify-content: space-between;">
            <a href="${cleanLink}" class="brand">
                <i class="${iconClass} brand-icon" ${isQuizPage ? 'style="font-size:1.2rem;"' : ''}></i>
                <div class="brand-name">
                    ${title}
                    <span class="brand-sub">${subtitle}</span>
                </div>
            </a>
            
            <div class="header-actions" style="display: flex; align-items: center; gap: 12px;">
                <!-- Auth Container (Login / Profile UI will load here) -->
                <div id="auth-ui-container" style="display: flex; align-items: center;">
                    <div style="font-size: 0.8rem; color: var(--text-sec);"><i class="fa-solid fa-spinner fa-spin"></i></div>
                </div>

                <!-- Theme Button -->
                <button class="theme-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle Theme">
                    <i class="fa-solid fa-moon"></i>
                </button>

                <!-- Home Button -->
                <a href="${homeUrl}" class="home-btn" title="Go Home">
                    <i class="fa-solid fa-house"></i>
                </a>
            </div>
        </div>
        <style>
            /* Grouped Auth UI Styles (Premium EdTech Look) */
            .auth-group-wrapper {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 4px 6px 4px 4px;
                border: 1px solid var(--card-border, #cbd5e1);
                border-radius: 30px;
                background: rgba(255, 255, 255, 0.5);
                box-shadow: 0 2px 6px rgba(0,0,0,0.04);
                transition: all 0.2s ease;
            }
            [data-theme="dark"] .auth-group-wrapper {
                border-color: #334155;
                background: rgba(0, 0, 0, 0.2);
            }

            /* Punchy Red Google Login Button */
            .login-btn {
                background: #dc2626; /* WCAG AA Compliant High-Contrast Red */
                color: #ffffff;
                border: none;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 700;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                transition: all 0.2s ease;
                font-family: 'Inter', sans-serif;
            }
            .login-btn:hover {
                background: #b91c1c; /* Darker red on hover */
                transform: translateY(-2px);
                box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3); /* Red tinted shadow */
            }

            /* Dark Mode Fix for Login Button */
            [data-theme="dark"] .login-btn {
                background: #ef4444; /* Brighter red for visibility in dark mode */
                color: #ffffff;
            }
            [data-theme="dark"] .login-btn:hover {
                background: #dc2626;
                box-shadow: 0 4px 10px rgba(239, 68, 68, 0.4);
            }
            
            .dashboard-btn {
                background: var(--primary-light);
                color: var(--primary);
                border: none;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 700;
                cursor: pointer;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: all 0.2s;
                font-family: 'Inter', sans-serif;
            }
            .dashboard-btn:hover {
                background: var(--primary);
                color: white;
            }
            
            /* Dark Mode Fix for Dashboard Button */
            [data-theme="dark"] .dashboard-btn {
                background: rgba(255, 255, 255, 0.1);
                color: var(--text-main);
            }
            [data-theme="dark"] .dashboard-btn:hover {
                background: var(--primary);
                color: white;
            }

            .user-avatar {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                border: 2px solid var(--primary);
                object-fit: cover;
                background: #fff;
            }

            /* Specially designed clear Logout Button */
            .logout-icon-btn {
                color: #ef4444; 
                background: rgba(239, 68, 68, 0.1);
                border: none;
                width: 28px; height: 28px;
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.2s;
            }
            .logout-icon-btn:hover {
                background: #ef4444;
                color: white;
            }

            .text-mobile { display: none; } /* Default hide mobile specific text */

            @media (max-width: 600px) {
                .brand-name { font-size: 0.9rem !important; line-height: 1.1; }
                .brand-sub { font-size: 0.65rem !important; display: block; }
                .brand-icon { font-size: 1.1rem !important; margin-right: 6px !important; }
                .header-content { padding: 10px 12px !important; }
                
                /* Adjusted padding and font sizes for mobile with text included */
                .login-btn { padding: 6px 12px; font-size: 0.8rem; }
                /* Increased icon size and matching padding so it aligns perfectly with the login button */
                .dashboard-btn { padding: 6px 12px; font-size: 1.1rem; } 
                
                .text-desktop { display: none; } /* Hide full text on mobile */
                
                .auth-group-wrapper { gap: 6px; padding: 3px 5px 3px 3px; }
                .user-avatar, .logout-icon-btn { width: 26px; height: 26px; }
            }
        </style>
    `;

    initThemeState();
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
// ðŸ”¥ FIREBASE GOOGLE AUTHENTICATION INTEGRATION (Dynamic Import Method)
// =========================================================================

let auth, provider;

async function initFirebase() {
    try {
        // Dynamically import Firebase
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

        // Listen for Login/Logout state changes
        onAuthStateChanged(auth, (user) => {
            updateAuthUI(user);
        });

        // Global Login Function
        window.loginWithGoogle = async () => {
            try {
                const authContainer = document.getElementById('auth-ui-container');
                if(authContainer) authContainer.innerHTML = '<div style="font-size: 0.8rem; color: var(--primary);"><i class="fa-solid fa-spinner fa-spin"></i></div>';
                
                await signInWithPopup(auth, provider);
                
            } catch (error) {
                console.error("Login Error Full Details:", error);
                
                // Reset UI back to login button
                updateAuthUI(null); 
                
                // SILENT FAIL FOR POPUP CLOSED BY USER
                // Agar user khud popup close karta hai, toh kuch alert mat dikhao.
                if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
                    // Do nothing, just let them stay on the page peacefully
                    return; 
                }

                // Agar koi real technical error aaya ho, toh user-friendly message dikhao
                alert("Login nahi ho paaya. Kripya apna internet connection check karein ya thodi der baad try karein.");
            }
        };

        // Global Logout Function
        window.logoutUser = async () => {
            try {
                await signOut(auth);
            } catch (error) {
                console.error("Logout Error:", error);
            }
        };

    } catch (error) {
        console.error("Firebase Initialization Failed in Layout:", error);
        const authContainer = document.getElementById('auth-ui-container');
        if(authContainer) authContainer.innerHTML = '';
    }
}

// Dynamically update the Header UI with grouped border design
function updateAuthUI(user) {
    const authContainer = document.getElementById('auth-ui-container');
    if (!authContainer) return;

    const dashLink = currentRootPath === '.' ? './user/dashboard.html' : currentRootPath + '/user/dashboard.html';

    if (user) {
        // User is LOGGED IN -> Show Dash, DP, Logout in a nice pill-shaped border
        const userPhoto = user.photoURL || 'https://ui-avatars.com/api/?name=Student&background=2563eb&color=fff';
        
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
        // User is NOT LOGGED IN -> Show Dash AND Login Button together
        authContainer.innerHTML = `
            <div class="auth-group-wrapper">
                <a href="${dashLink}" class="dashboard-btn" title="My Dashboard">
                    <i class="fa-solid fa-circle-user"></i> 
                    <span class="text-desktop">My Dashboard</span>
                </a>
                <button class="login-btn" onclick="loginWithGoogle()" title="Login Securely">
                    <i class="fa-brands fa-google"></i> 
                    <span>Login</span>
                </button>
            </div>
        `;
    }
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThemeState();
    initBackToTop();
    initFirebase(); 
});
