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

    // 🔥 NEW: CENTRALIZED UI UNLOCKER
    window.HPGK_AutoUnlockPremiumUI = function() {
        if (!window.HPGK_User || !window.HPGK_User.passes) return;

        const hasMockMaster = window.HPGK_User.passes['mock_master_pass'] || 
                              window.HPGK_User.passes['vip_lifetime_pass'] || 
                              window.HPGK_User.passes['mega_combo_pass'];

        if (hasMockMaster) {
            document.querySelectorAll('button[onclick*="true)"]').forEach(btn => {
                btn.innerHTML = 'Attempt Free <i class="fa-solid fa-arrow-right"></i>';
                btn.classList.remove('btn-pro');
                btn.classList.add('btn-free');
                // 🔥 BUG FIX: Removed the onclick parameter replacement logic. 
                // We keep 'true)' intact so the Locker function can find them again upon logout!
            });
            
            document.querySelectorAll('.pro-badge').forEach(badge => {
                badge.className = 'tc-badge-common free-badge unlocked';
                badge.innerHTML = '<i class="fa-solid fa-unlock"></i> UNLOCKED';
            });

            document.querySelectorAll('.tc-icon i.fa-lock').forEach(icon => {
                icon.className = 'fa-solid fa-unlock';
                if(icon.parentElement) icon.parentElement.style.color = 'var(--success)';
            });
        }
    };

    // 🔥 NEW: CENTRALIZED UI LOCKER (Fixes the Logout Bug)
    window.HPGK_LockPremiumUI = function() {
        // Find all buttons that have premium action (onclick containing 'true)')
        document.querySelectorAll('button[onclick*="true)"]').forEach(btn => {
            btn.innerHTML = 'Unlock <i class="fa-solid fa-lock"></i>';
            btn.classList.remove('btn-free');
            btn.classList.add('btn-pro');
        });
        
        // Revert unlocked badges back to PRO
        document.querySelectorAll('.unlocked').forEach(badge => {
            badge.className = 'tc-badge-common pro-badge';
            badge.innerHTML = '<i class="fa-solid fa-crown" style="font-size:0.5rem; margin-right:2px;"></i> PRO';
        });

        // Revert green unlock icons back to black locks
        document.querySelectorAll('.tc-icon i.fa-unlock').forEach(icon => {
            icon.className = 'fa-solid fa-lock';
            if(icon.parentElement) icon.parentElement.style.color = 'var(--text-main)';
        });
    };

    // 2. FIREBASE INITIALIZATION & AUTH LISTENER
    async function initCore() {
        try {
            const { getApp, getApps, initializeApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
            const { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
            const { getFirestore, doc, getDoc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");
            
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
            const db = getFirestore(app);
            
            // Make login function globally accessible for local landing pages
            window.loginWithGoogle = async function() {
                const provider = new GoogleAuthProvider();
                return signInWithPopup(auth, provider);
            };
            
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    window.HPGK_User.isLoggedIn = true;
                    window.HPGK_User.uid = user.uid;
                    window.HPGK_User.displayName = user.displayName;
                    window.HPGK_User.photoURL = user.photoURL;

                    // 🔥 FIX 1: Securely Fetch Passes from Cloud
                    try {
                        const userDoc = await getDoc(doc(db, 'artifacts', 'hpgk-quiz', 'users', user.uid));
                        if (userDoc.exists() && userDoc.data().passes) {
                            window.HPGK_User.passes = userDoc.data().passes;
                        }
                    } catch (e) {
                        console.error("Error fetching passes:", e);
                    }

                    // 🔥 THE MISSING LINK: Dynamically Lock/Unlock UI based on fetched passes
                    if (window.HPGK_User.passes && (window.HPGK_User.passes['mock_master_pass'] || window.HPGK_User.passes['vip_lifetime_pass'] || window.HPGK_User.passes['mega_combo_pass'])) {
                        if (typeof window.HPGK_AutoUnlockPremiumUI === 'function') window.HPGK_AutoUnlockPremiumUI();
                    } else {
                        if (typeof window.HPGK_LockPremiumUI === 'function') window.HPGK_LockPremiumUI();
                    }

                    // Tell Engine to refresh and unlock UI
                    if (typeof window.HPGK_Engine_Refresh === 'function') {
                        window.HPGK_Engine_Refresh();
                    }

                } else {
                    window.HPGK_User.isLoggedIn = false;
                    window.HPGK_User.uid = null;
                    window.HPGK_User.passes = {};
                    
                    // 🔥 LOCK UI INSTANTLY ON LOGOUT
                    if (typeof window.HPGK_LockPremiumUI === 'function') window.HPGK_LockPremiumUI();
                }
            });

            // 🔥 SMART SYNC LOGIC: Saves strictly to Private Folder only.
            // The Public XP Leaderboard sync is now handled smoothly by dashboard.html
            window.HPGK_SaveScore = async function(category, correctCount, totalCount) {
                if (!window.HPGK_User.isLoggedIn || !window.HPGK_User.uid) return;
                try {
                    // Create a clean document ID from the topic category
                    const safeCatId = category.toLowerCase().replace(/[^a-z0-9]/g, '-');
                    const scoreRef = doc(db, 'artifacts', 'hpgk-quiz', 'users', window.HPGK_User.uid, 'scores', 'topic_' + safeCatId);
                    
                    await setDoc(scoreRef, {
                        category: category,
                        correct: correctCount,
                        total: totalCount,
                        timestamp: Date.now()
                    }, { merge: true });
                    
                } catch (e) {
                    console.error("Cloud sync failed:", e);
                }
            };

        } catch (e) {
            console.error("Core initialization error:", e);
        }
    }

    // 3. GLOBAL UI SECURITY (THE SPEED BUMPS)
    function enforceGlobalSecurity() {
        // Block Right-Click (Context Menu)
        document.addEventListener('contextmenu', function(e) { e.preventDefault(); });

        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C and Copy/Cut/Paste/Select All
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); }
            // ctrlKey for Windows/Linux, metaKey for Mac (Command key)
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'u' || e.key === 'U' || e.keyCode === 85) e.preventDefault(); // View Source
                if (e.key === 's' || e.key === 'S' || e.keyCode === 83) e.preventDefault(); // Save Page
                if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) e.preventDefault(); // Copy
                if (e.key === 'x' || e.key === 'X' || e.keyCode === 88) e.preventDefault(); // Cut
                if (e.key === 'v' || e.key === 'V' || e.keyCode === 86) e.preventDefault(); // Paste
                if (e.key === 'a' || e.key === 'A' || e.keyCode === 65) e.preventDefault(); // Select All
                if (e.shiftKey) {
                    if (e.key === 'i' || e.key === 'I' || e.keyCode === 73) e.preventDefault(); // Inspect
                    if (e.key === 'j' || e.key === 'J' || e.keyCode === 74) e.preventDefault(); // Console
                    if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) e.preventDefault(); // Inspect Element
                }
            }
        });
        
        // Extra Protection: Block Dragging, Copy, Cut, Paste, and Text Selection via Mouse/Touch
        document.addEventListener('dragstart', function(e) { e.preventDefault(); });
        document.addEventListener('copy', function(e) { e.preventDefault(); });
        document.addEventListener('cut', function(e) { e.preventDefault(); });
        document.addEventListener('paste', function(e) { e.preventDefault(); });
        document.addEventListener('selectstart', function(e) { e.preventDefault(); });

        // Inject Global CSS to disable text selection permanently, but allow inputs/textareas for typing
        const noSelectStyle = document.createElement('style');
        noSelectStyle.innerHTML = `
            * {
                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -khtml-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
            input, textarea, select {
                -webkit-user-select: auto !important;
                -khtml-user-select: auto !important;
                -moz-user-select: auto !important;
                -ms-user-select: auto !important;
                user-select: auto !important;
            }
        `;
        document.head.appendChild(noSelectStyle);
    }

    // 4. UNIVERSAL DECOY INJECTOR (THE HONEYPOT)
    function injectDecoyTokens() {
        const decoyKey = '&_secToken=';
        
        function getFakeHash() {
            return 'tx_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(16) + '_v9';
        }

        document.querySelectorAll('a[href*="mock-engine/index.html"]').forEach(a => {
            if (!a.href.includes(decoyKey)) {
                a.href = a.href + decoyKey + getFakeHash();
            }
        });

        document.querySelectorAll('[onclick*="mock-engine/index.html"]').forEach(el => {
            let onclickStr = el.getAttribute('onclick');
            if (onclickStr && !onclickStr.includes(decoyKey)) {
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
