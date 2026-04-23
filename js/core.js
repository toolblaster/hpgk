/**
 * --------------------------------------------------------------------------
 * HPGK CORE SYSTEM & GLOBAL SECURITY (PRODUCTION)
 * Handles Global User Session, Universal UI Protection & Decoy Routing
 * --------------------------------------------------------------------------
 */

(function() {
    // 1. GLOBAL USER OBJECT
    window.HPGK_User = {
        isLoggedIn: false,
        uid: null,
        displayName: null,
        photoURL: null,
        passes: {} 
    };

    // 2. FIREBASE INITIALIZATION & AUTH LISTENER
    async function initCore() {
        try {
            const { getApp, getApps, initializeApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
            const { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
            
            const firebaseConfig = {
                apiKey: "AIzaSyDfz5Y4oVQHl-crnATIv5dMWsw7edSKddQ",
                authDomain: "hpgk-quiz.firebaseapp.com",
                projectId: "hpgk-quiz",
                storageBucket: "hpgk-quiz.firebasestorage.app",
                messagingSenderId: "273909571419",
                appId: "1:273909571419:web:20d5e06d8b582f4d2dc47e"
            };

            // Initialize Firebase globally if it hasn't been initialized yet
            let app;
            if (getApps().length === 0) {
                app = initializeApp(firebaseConfig);
            } else {
                app = getApp();
            }
            
            const auth = getAuth(app);
            
            // Make login function globally accessible for local landing pages
            window.loginWithGoogle = async function() {
                const provider = new GoogleAuthProvider();
                return signInWithPopup(auth, provider);
            };
            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    window.HPGK_User.isLoggedIn = true;
                    window.HPGK_User.uid = user.uid;
                    window.HPGK_User.displayName = user.displayName;
                    window.HPGK_User.photoURL = user.photoURL;
                } else {
                    window.HPGK_User.isLoggedIn = false;
                    window.HPGK_User.uid = null;
                }
            });
        } catch (e) {
            console.error("Core initialization error:", e);
        }
    }

    // 3. GLOBAL UI SECURITY (THE SPEED BUMPS)
    function enforceGlobalSecurity() {
        // Block Right-Click (Context Menu)
        document.addEventListener('contextmenu', function(e) { e.preventDefault(); });

        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); }
            if (e.ctrlKey) {
                if (e.key === 'u' || e.key === 'U' || e.keyCode === 85) e.preventDefault();
                if (e.key === 's' || e.key === 'S' || e.keyCode === 83) e.preventDefault();
                if (e.shiftKey) {
                    if (e.key === 'i' || e.key === 'I' || e.keyCode === 73) e.preventDefault();
                    if (e.key === 'j' || e.key === 'J' || e.keyCode === 74) e.preventDefault();
                    if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) e.preventDefault();
                }
            }
        });
        
        // Extra Protection: Block Dragging
        document.addEventListener('dragstart', function(e) { e.preventDefault(); });
    }

    // 4. UNIVERSAL DECOY INJECTOR (THE HONEYPOT)
    // Confuses hackers by automatically appending fake security tokens to all mock links
    function injectDecoyTokens() {
        const decoyKey = '&_secToken=';
        
        function getFakeHash() {
            // Generates a complex looking fake hash like: tx_8f9x2m4172a8b9_v9
            return 'tx_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(16) + '_v9';
        }

        // Inject into all <a> tags pointing to mock-engine
        document.querySelectorAll('a[href*="mock-engine/index.html"]').forEach(a => {
            if (!a.href.includes(decoyKey)) {
                a.href = a.href + decoyKey + getFakeHash();
            }
        });

        // Inject into all elements (buttons) with onclick pointing to mock-engine
        document.querySelectorAll('[onclick*="mock-engine/index.html"]').forEach(el => {
            let onclickStr = el.getAttribute('onclick');
            if (onclickStr && !onclickStr.includes(decoyKey)) {
                // Find the URL part and append the fake hash seamlessly
                let newOnclick = onclickStr.replace(
                    /(mock-engine\/index\.html\?[^'"]+)/, 
                    '$1' + decoyKey + getFakeHash()
                );
                el.setAttribute('onclick', newOnclick);
            }
        });
    }

    // Run when the document is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            enforceGlobalSecurity();
            injectDecoyTokens();
            initCore();
        });
    } else {
        enforceGlobalSecurity();
        injectDecoyTokens();
        initCore();
    }
})();
