update //file: core.js

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

    // 🔥CENTRALIZED PASS EXPIRATION VALIDATOR
    window.HPGK_IsPassValid = function(passData) {
        if (!passData) return false;
        
        // 1. Permanent / Lifetime check
        if (passData.expiryDate === 'Lifetime' || passData.expiryTimestamp === 9999) return true;
        
        // 2. Direct millisecond comparison (if expiryTimestamp exists)
        if (passData.expiryTimestamp && passData.expiryTimestamp !== 9999) {
            return Date.now() < Number(passData.expiryTimestamp);
        }

        // 3. String parsing fallback for legacy records
        if (passData.expiryDate) {
            const parsed = Date.parse(passData.expiryDate);
            if (!isNaN(parsed)) {
                return Date.now() < parsed;
            }
            // Custom Indian string format parser: "DD/MM/YYYY, HH:MM am/pm"
            try {
                const parts = passData.expiryDate.split(/[\s,]+/);
                if (parts.length >= 2) {
                    const dateParts = parts[0].split('/');
                    if (dateParts.length === 3) {
                        const day = parseInt(dateParts[0], 10);
                        const month = parseInt(dateParts[1], 10) - 1;
                        const year = parseInt(dateParts[2], 10);
                        
                        let hours = 0, minutes = 0;
                        if (parts[1]) {
                            const timeParts = parts[1].split(':');
                            hours = parseInt(timeParts[0], 10) || 0;
                            minutes = parseInt(timeParts[1], 10) || 0;
                            if (parts[2] && parts[2].toLowerCase() === 'pm' && hours < 12) hours += 12;
                            if (parts[2] && parts[2].toLowerCase() === 'am' && hours === 12) hours = 0;
                        }
                        const expTime = new Date(year, month, day, hours, minutes).getTime();
                        if (!isNaN(expTime)) {
                            return Date.now() < expTime;
                        }
                    }
                }
            } catch(e) {}
        }

        // 4. Default purchase timestamp fallback (30 days)
        if (passData.timestamp) {
            const default30Days = 30 * 24 * 60 * 60 * 1000;
            return Date.now() < (Number(passData.timestamp) + default30Days);
        }

        return false;
    };

    window.HPGK_HasActivePass = function(passId) {
        if (!window.HPGK_User || !window.HPGK_User.passes) return false;
        const p = window.HPGK_User.passes[passId];
        return window.HPGK_IsPassValid(p);
    };

    window.HPGK_HasMockMaster = function() {
        if (!window.HPGK_User || !window.HPGK_User.passes) return false;
        return window.HPGK_HasActivePass('mock_master_pass') ||
               window.HPGK_HasActivePass('vip_lifetime_pass') ||
               window.HPGK_HasActivePass('mega_combo_pass');
    };

    // ðŸ”¥ CENTRALIZED UI UNLOCKER
    window.HPGK_AutoUnlockPremiumUI = function() {
        if (!window.HPGK_User || !window.HPGK_User.passes) return;

        const hasMockMaster = window.HPGK_HasMockMaster();

        if (hasMockMaster) {
            document.querySelectorAll('button[onclick*="true)"]').forEach(btn => {
                btn.innerHTML = 'Attempt Free <i class="fa-solid fa-arrow-right"></i>';
                btn.classList.remove('btn-pro');
                btn.classList.add('btn-free');
            });
            
            document.querySelectorAll('.pro-badge').forEach(badge => {
                badge.className = 'tc-badge-common free-badge unlocked';
                badge.innerHTML = '<i class="fa-solid fa-unlock"></i> UNLOCKED';
            });

            document.querySelectorAll('.tc-icon i.fa-lock').forEach(icon => {
                icon.className = 'fa-solid fa-unlock';
                if(icon.parentElement) icon.parentElement.style.color = 'var(--success)';
            });
        } else {
            // Lock UI if expired
            if (typeof window.HPGK_LockPremiumUI === 'function') window.HPGK_LockPremiumUI();
        }
    };

    // ðŸ”¥ CENTRALIZED UI LOCKER
    window.HPGK_LockPremiumUI = function() {
        document.querySelectorAll('button[onclick*="true)"]').forEach(btn => {
            btn.innerHTML = 'Unlock <i class="fa-solid fa-lock"></i>';
            btn.classList.remove('btn-free');
            btn.classList.add('btn-pro');
        });
        
        document.querySelectorAll('.unlocked').forEach(badge => {
            badge.className = 'tc-badge-common pro-badge';
            badge.innerHTML = '<i class="fa-solid fa-crown" style="font-size:0.5rem; margin-right:2px;"></i> PRO';
        });

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

            let app;
            if (getApps().length === 0) {
                app = initializeApp(firebaseConfig);
            } else {
                app = getApp();
            }
            
            const auth = getAuth(app);
            const db = getFirestore(app);
            
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

                    try {
                        const userDoc = await getDoc(doc(db, 'artifacts', 'hpgk-quiz', 'users', user.uid));
                        if (userDoc.exists() && userDoc.data().passes) {
                            window.HPGK_User.passes = userDoc.data().passes;
                        }
                    } catch (e) {
                        console.error("Error fetching passes:", e);
                    }

                    // Dynamically Lock/Unlock UI based on valid unexpired passes
                    if (window.HPGK_HasMockMaster() || window.HPGK_HasActivePass('mcq_pro_pass')) {
                        if (typeof window.HPGK_AutoUnlockPremiumUI === 'function') window.HPGK_AutoUnlockPremiumUI();
                    } else {
                        if (typeof window.HPGK_LockPremiumUI === 'function') window.HPGK_LockPremiumUI();
                    }

                    if (typeof window.HPGK_Engine_Refresh === 'function') {
                        window.HPGK_Engine_Refresh();
                    }

                } else {
                    window.HPGK_User.isLoggedIn = false;
                    window.HPGK_User.uid = null;
                    window.HPGK_User.passes = {};
                    
                    if (typeof window.HPGK_LockPremiumUI === 'function') window.HPGK_LockPremiumUI();
                }
            });

            window.HPGK_SaveScore = async function(category, correctCount, totalCount) {
                if (!window.HPGK_User.isLoggedIn || !window.HPGK_User.uid) return;
                try {
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

    // 3. GLOBAL UI SECURITY
    function enforceGlobalSecurity() {
        document.addEventListener('contextmenu', function(e) { e.preventDefault(); });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); }
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'u' || e.key === 'U' || e.keyCode === 85) e.preventDefault();
                if (e.key === 's' || e.key === 'S' || e.keyCode === 83) e.preventDefault();
                if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) e.preventDefault();
                if (e.key === 'x' || e.key === 'X' || e.keyCode === 88) e.preventDefault();
                if (e.key === 'v' || e.key === 'V' || e.keyCode === 86) e.preventDefault();
                if (e.key === 'a' || e.key === 'A' || e.keyCode === 65) e.preventDefault();
                if (e.shiftKey) {
                    if (e.key === 'i' || e.key === 'I' || e.keyCode === 73) e.preventDefault();
                    if (e.key === 'j' || e.key === 'J' || e.keyCode === 74) e.preventDefault();
                    if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) e.preventDefault();
                }
            }
        });
        
        document.addEventListener('dragstart', function(e) { e.preventDefault(); });
        document.addEventListener('copy', function(e) { e.preventDefault(); });
        document.addEventListener('cut', function(e) { e.preventDefault(); });
        document.addEventListener('paste', function(e) { e.preventDefault(); });
        document.addEventListener('selectstart', function(e) { e.preventDefault(); });

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

    // 4. UNIVERSAL DECOY INJECTOR
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
