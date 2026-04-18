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
                <div id="auth-ui-container" style="display: flex; align-items: center; gap: 10px;">
                    <div style="font-size: 0.7rem; color: var(--text-sec);"><i class="fa-solid fa-spinner fa-spin"></i></div>
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
            /* Auth UI Styles */
            .login-btn {
                background: var(--text-main);
                color: var(--card-bg);
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
                transform: translateY(-2px);
                box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            }
            .user-avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 2px solid var(--primary);
                object-fit: cover;
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
            .logout-icon-btn {
                color: var(--text-sec);
                background: transparent;
                border: none;
                font-size: 1rem;
                cursor: pointer;
                transition: color 0.2s;
            }
            .logout-icon-btn:hover {
                color: #ef4444;
            }

            @media (max-width: 600px) {
                .brand-name { font-size: 0.9rem !important; line-height: 1.1; }
                .brand-sub { font-size: 0.65rem !important; display: block; }
                .brand-icon { font-size: 1.1rem !important; margin-right: 6px !important; }
                .header-content { padding: 10px 12px !important; }
                .login-btn { padding: 5px 10px; font-size: 0.75rem; }
                .dashboard-btn { padding: 5px 10px; font-size: 0.7rem; }
                .user-avatar { width: 28px; height: 28px; }
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
// 🔥 FIREBASE GOOGLE AUTHENTICATION INTEGRATION (Dynamic Import Method)
// =========================================================================

let auth, provider;

async function initFirebase() {
    try {
        // Dynamically import Firebase v10 modules (Compatible with modern browsers)
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
        const { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");

        // Your specific Firebase Config
        const firebaseConfig = {
            apiKey: "AIzaSyDfz5Y4oVQHl-crnATIv5dMWsw7edSKddQ",
            authDomain: "hpgk-quiz.firebaseapp.com",
            projectId: "hpgk-quiz",
            storageBucket: "hpgk-quiz.firebasestorage.app",
            messagingSenderId: "273909571419",
            appId: "1:273909571419:web:20d5e06d8b582f4d2dc47e",
            measurementId: "G-LFXVQ2JNTY"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
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
                updateAuthUI(null); // Reset UI on failure
                
                // Display the EXACT error message to the user so we know why it failed
                alert("Login Failed: " + error.message + "\n\n(Note: Check 'Support Email' & 'Authorized Domains' in Firebase Settings)");
            }
        };

        // Global Logout Function
        window.logoutUser = async () => {
            try {
                await signOut(auth);
                // If user is on dashboard and logs out, redirect to home
                if(window.location.pathname.includes('dashboard')) {
                    window.location.href = currentRootPath === '.' ? './index.html' : currentRootPath + '/index.html';
                }
            } catch (error) {
                console.error("Logout Error:", error);
            }
        };

    } catch (error) {
        console.error("Firebase Initialization Failed:", error);
        // Fallback UI if script fails to load
        const authContainer = document.getElementById('auth-ui-container');
        if(authContainer) authContainer.innerHTML = '';
    }
}

// Function to dynamically update the Header UI based on User State
function updateAuthUI(user) {
    const authContainer = document.getElementById('auth-ui-container');
    if (!authContainer) return;

    if (user) {
        // User is LOGGED IN -> Show Dashboard Button & Avatar
        const dashLink = currentRootPath === '.' ? './dashboard.html' : currentRootPath + '/dashboard.html';
        
        authContainer.innerHTML = `
            <a href="${dashLink}" class="dashboard-btn" title="My Dashboard">
                <i class="fa-solid fa-chart-pie"></i> <span class="hide-mobile">Dash</span>
            </a>
            <img src="${user.photoURL}" alt="Profile" class="user-avatar" title="${user.displayName}">
            <button class="logout-icon-btn" onclick="logoutUser()" title="Logout">
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
            <style>@media (max-width: 600px) { .hide-mobile { display: none; } }</style>
        `;
    } else {
        // User is NOT LOGGED IN -> Show Login Button
        authContainer.innerHTML = `
            <button class="login-btn" onclick="loginWithGoogle()">
                <i class="fa-brands fa-google"></i> Login
            </button>
        `;
    }
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThemeState();
    initBackToTop();
    initFirebase(); // Start Firebase magic!
});
