/**
 * --------------------------------------------------------------------------
 * HPGK CORE SYSTEM & GLOBAL SECURITY (PRODUCTION)
 * Handles Global User Session & Universal UI Protection
 * --------------------------------------------------------------------------
 */

(function() {
    // 1. GLOBAL USER OBJECT
    window.HPGK_User = {
        isLoggedIn: false,
        uid: null,
        displayName: null,
        photoURL: null,
        passes: {} // Example: { 'mock_master_pass': true }
    };

    // 2. FIREBASE INITIALIZATION & AUTH LISTENER
    async function initCore() {
        try {
            const { getApp, getApps, initializeApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
            const { getAuth, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
            
            // Note: Firebase config should be defined globally in your HTML headers if not done already.
            // Assuming Firebase is initialized elsewhere or we use the default app.
            if (getApps().length > 0) {
                const app = getApp();
                const auth = getAuth(app);
                
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        window.HPGK_User.isLoggedIn = true;
                        window.HPGK_User.uid = user.uid;
                        window.HPGK_User.displayName = user.displayName;
                        window.HPGK_User.photoURL = user.photoURL;
                        
                        // TODO: In production, fetch user passes from Firestore here
                        // For now, simulating a premium pass if needed for testing, 
                        // or leave empty so mock-engine enforces the lock.
                    } else {
                        window.HPGK_User.isLoggedIn = false;
                        window.HPGK_User.uid = null;
                        window.HPGK_User.displayName = null;
                        window.HPGK_User.photoURL = null;
                        window.HPGK_User.passes = {};
                    }
                });
            }
        } catch (e) {
            console.error("Core initialization error:", e);
        }
    }

    // 3. GLOBAL UI SECURITY (THE SPEED BUMPS)
    function enforceGlobalSecurity() {
        
        // Block Right-Click (Context Menu)
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
        document.addEventListener('keydown', function(e) {
            
            // F12 key
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
            }
            
            if (e.ctrlKey) {
                // Ctrl+U (View Source)
                if (e.key === 'u' || e.key === 'U' || e.keyCode === 85) {
                    e.preventDefault();
                }
                // Ctrl+S (Save Page)
                if (e.key === 's' || e.key === 'S' || e.keyCode === 83) {
                    e.preventDefault();
                }
                
                if (e.shiftKey) {
                    // Ctrl+Shift+I (Inspect)
                    if (e.key === 'i' || e.key === 'I' || e.keyCode === 73) {
                        e.preventDefault();
                    }
                    // Ctrl+Shift+J (Console)
                    if (e.key === 'j' || e.key === 'J' || e.keyCode === 74) {
                        e.preventDefault();
                    }
                    // Ctrl+Shift+C (Element Inspector)
                    if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) {
                        e.preventDefault();
                    }
                }
            }
        });
        
        // Extra Protection: Block Dragging of elements (like images or text)
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    }

    // Run when the document is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            enforceGlobalSecurity();
            initCore();
        });
    } else {
        enforceGlobalSecurity();
        initCore();
    }
})();
