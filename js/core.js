/**
 * --------------------------------------------------------------------------
 * HPGK CORE SYSTEM (The Global Brain)
 * --------------------------------------------------------------------------
 * Handles Firebase connection, User Profile, Global Utilities, and Cloud Sync.
 */

(function() {
    window.HPGK_User = {
        isLoggedIn: false,
        uid: null,
        db: null,
        passes: [] // Will store user's premium passes/combos in future
    };

    async function initCoreFirebase() {
        try {
            const { initializeApp, getApps, getApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
            const { getAuth, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
            const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");

            const firebaseConfig = {
                apiKey: "AIzaSyDfz5Y4oVQHl-crnATIv5dMWsw7edSKddQ",
                authDomain: "hpgk-quiz.firebaseapp.com",
                projectId: "hpgk-quiz",
                storageBucket: "hpgk-quiz.firebasestorage.app",
                messagingSenderId: "273909571419",
                appId: "1:273909571419:web:20d5e06d8b582f4d2dc47e"
            };

            const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
            const auth = getAuth(app);
            window.HPGK_User.db = getFirestore(app);

            onAuthStateChanged(auth, async (user) => {
                window.HPGK_User.isLoggedIn = !!user;
                window.HPGK_User.uid = user ? user.uid : null;
                window.HPGK_User.passes = []; // Ready for future combo upgrades
                
                // If a Quiz Engine is currently active on the page, tell it to refresh
                if (window.HPGK_Engine_Refresh) {
                    window.HPGK_Engine_Refresh();
                }
            });
        } catch (e) {
            console.error("Core Firebase Init Failed:", e);
        }
    }

    // Extracted directly from original syncScoreToFirebase
    window.HPGK_SaveScore = async function(rawCategory, validCorrectCount, validDoneCount) {
        if (!window.HPGK_User.isLoggedIn || !window.HPGK_User.uid || !window.HPGK_User.db) return;
        if (validDoneCount === 0) return;

        try {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");
            const docId = rawCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const docRef = doc(window.HPGK_User.db, 'artifacts', 'hpgk-quiz', 'users', window.HPGK_User.uid, 'scores', docId);

            await setDoc(docRef, {
                category: rawCategory,
                score: validCorrectCount,
                total: validDoneCount,
                timestamp: Date.now() 
            }, { merge: true });
        } catch (e) {
            console.error("Error syncing score:", e);
        }
    };

    // Centralized Help Modal (From original code)
    window.toggleHelpModal = function() {
        const modal = document.getElementById('quizHelpModal');
        if (modal) {
            if (modal.classList.contains('show')) {
                modal.classList.remove('show');
                setTimeout(() => modal.style.display = 'none', 200);
            } else {
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('show'), 10);
            }
        }
    };

    // Backup & Restore Global Proxies
    window.exportProgress = function() { if(window.HPGK_ExportLocalData) window.HPGK_ExportLocalData(); };
    window.importProgress = function(input) { if(window.HPGK_ImportLocalData) window.HPGK_ImportLocalData(input); };

    window.addEventListener('DOMContentLoaded', () => { initCoreFirebase(); });
})();