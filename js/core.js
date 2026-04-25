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

                    // Tell Engine to refresh and unlock UI
                    if (typeof window.HPGK_Engine_Refresh === 'function') {
                        window.HPGK_Engine_Refresh();
                    }

                } else {
                    window.HPGK_User.isLoggedIn = false;
                    window.HPGK_User.uid = null;
                    window.HPGK_User.passes = {};
                }
            });

            // 🔥 FIX 2: Missing Firebase Score Upload Logic (Fixes the Dashboard)
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
                    
                    // console.log("Score successfully synced to Dashboard!");
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
