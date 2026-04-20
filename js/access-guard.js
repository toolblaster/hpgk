/**
 * --------------------------------------------------------------------------
 * ACCESS GUARD (Central Paywall & Subscription Manager)
 * --------------------------------------------------------------------------
 * Yeh file website ke har us page par paywall lagati hai jahan <head> mein 
 * window.PAGE_ACCESS define kiya gaya ho. Yeh Firebase auth aur user ki 
 * active subscriptions (tickets) check karti hai.
 */

(function() {
    // Global Guard Object
    window.HPGK_Guard = {
        isUserLoggedIn: false,
        currentUserUid: null,
        userPasses: [], // Firebase se aayega (e.g., ['mcq_pass', 'patwari_mock_pass'])
        isInitialized: false,

        /**
         * 1. Firebase Observer (Guard ki Aankh)
         * Yeh lagatar check karta hai ki user logged in hai ya nahi.
         */
        initAuthCheck: async function() {
            if (this.isInitialized) return;
            try {
                const { getAuth, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
                const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");
                const auth = getAuth();
                const db = getFirestore();

                onAuthStateChanged(auth, async (user) => {
                    this.isUserLoggedIn = !!user;
                    this.currentUserUid = user ? user.uid : null;
                    
                    if (user) {
                        // Agar logged in hai, toh Guard uski jeb (Firebase) se uske Passes (Tickets) nikalega
                        try {
                            const userRef = doc(db, 'artifacts', 'hpgk-quiz', 'users', user.uid, 'profile', 'billing');
                            const userDoc = await getDoc(userRef);
                            if (userDoc.exists() && userDoc.data().active_plans) {
                                this.userPasses = userDoc.data().active_plans;
                            } else {
                                this.userPasses = []; // Free user
                            }
                        } catch (e) {
                            console.error("Guard Error reading passes:", e);
                        }
                    } else {
                        this.userPasses = [];
                    }
                    
                    // Auth state badalne par (jaise login hone par) Paywall hata kar MCQ dikhao
                    if (window.HPGK_Engine_Refresh) {
                        window.HPGK_Engine_Refresh();
                    }
                });
                this.isInitialized = true;
            } catch (e) {
                console.error("Guard Auth Check Failed:", e);
            }
        },

        /**
         * 2. The Decision Maker (Faisla karne wala)
         * main.js is function se puchta hai: "Bhai, user Question 51 pe hai, aage jaane doon?"
         */
        checkAccess: function(currentIndex) {
            // Agar page ke <head> mein PAGE_ACCESS ka ID card nahi hai, toh page bilkul FREE hai (Guard sota rahega).
            if (!window.PAGE_ACCESS) return { status: 'allowed' };

            const config = window.PAGE_ACCESS;
            const loginLimit = config.loginLimit !== undefined ? config.loginLimit : 50;
            const proLimit = config.proLimit !== undefined ? config.proLimit : 9999;
            const requiredPass = config.requiredPass || 'mega_combo_pass';

            // 1. VIP Check (The Mega Combo Pass) - Agar VIP pass hai toh sab kuch humesha free
            if (this.userPasses.includes('mega_combo_pass')) {
                return { status: 'allowed' };
            }

            // 2. Specific Pass Check (Jaise 'patwari_mock_pass' ya 'mcq_pass')
            if (this.userPasses.includes(requiredPass)) {
                return { status: 'allowed' };
            }

            // 3. Pro Limit Check (Paywall) - Agar limit cross ki aur pass nahi hai
            if (currentIndex >= proLimit) {
                return { status: 'blocked_pro', reason: 'PRO Pass Required', limit: proLimit };
            }

            // 4. Login Limit Check (Free Login) - Agar limit cross ki aur login nahi hai
            if (currentIndex >= loginLimit && !this.isUserLoggedIn) {
                return { status: 'blocked_login', reason: 'Login Required', limit: loginLimit };
            }

            // Agar sab kuch theek hai toh aage badho
            return { status: 'allowed' };
        },

        /**
         * 3. The Bouncer (Rasta rok kar card dikhana)
         * Agar access nahi mila, toh yeh function HTML mein Paywall inject kar dega.
         */
        showPaywall: function(containerElement, accessResult) {
            if (!containerElement) return;

            let title, desc, iconClass, btnAction, btnText, btnColor;

            if (accessResult.status === 'blocked_login') {
                // Free Login Card (Jaise abhi hai)
                title = "Free Content Limit Reached";
                desc = `Awesome progress! 🎉 You've reached the free limit of <strong>${accessResult.limit} questions</strong>.<br><br>Login for <strong>FREE</strong> to unlock more questions and track your accuracy.`;
                iconClass = "fa-solid fa-lock";
                btnAction = "window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())";
                btnText = "Login with Google to Continue";
                btnColor = "var(--primary)";
            } 
            else if (accessResult.status === 'blocked_pro') {
                // The Premium ₹29 Paywall
                title = "Unlock Premium Experience";
                desc = `You've viewed ${accessResult.limit} free questions! Upgrade to the <strong>HPGK Premium Pass</strong> to unlock all remaining questions, mock tests, and PDF study notes.<br><br>Join 10,000+ top scorers today.`;
                iconClass = "fa-solid fa-crown";
                btnAction = "alert('Payment Gateway (Razorpay) will open here. Price: ₹29/Month.')"; // TODO: Link Razorpay function
                btnText = "Get Premium Pass (₹29/mo)";
                btnColor = "var(--accent)"; // Orange
            }

            containerElement.innerHTML = `
                <div class="empty-state glass-panel" style="border: 1px solid var(--card-border); border-top: 4px solid ${btnColor}; padding: 35px 20px; border-radius: var(--radius-lg); box-sizing: border-box; width: 100%; text-align: center; box-shadow: var(--glass-shadow); animation: fadeUp 0.3s ease-out;">
                    <div style="width: 55px; height: 55px; margin: 0 auto 15px auto; background: rgba(37, 99, 235, 0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);">
                        <i class="${iconClass}" style="font-size: 1.6rem; color: ${btnColor};"></i>
                    </div>
                    <h2 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--text-main); font-weight: 800; letter-spacing: -0.3px;">${title}</h2>
                    <p style="color: var(--text-sec); margin-bottom: 25px; font-size: 0.9rem; line-height: 1.6; max-width: 340px; margin-inline: auto;">
                        ${desc}
                    </p>
                    <button class="login-btn" style="margin: 0 auto; padding: 12px 25px; font-size: 0.95rem; font-weight: 700; border-radius: 30px; border: none; background: ${btnColor}; color: #fff; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); transition: transform 0.2s, box-shadow 0.2s;" onclick="${btnAction}" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.15)'">
                        ${btnText} <i class="fa-solid fa-arrow-right" style="margin-left: 5px; font-size: 0.8em;"></i>
                    </button>
                    ${accessResult.status === 'blocked_pro' ? `<div style="margin-top: 15px; font-size: 0.75rem; color: var(--text-sec);"><i class="fa-solid fa-shield-halved"></i> Secure 256-bit Razorpay Checkout</div>` : ''}
                </div>
            `;
        }
    };

    // Guard ki aankh turant khol do taaki wo login check karna shuru kar de
    window.addEventListener('DOMContentLoaded', () => {
        window.HPGK_Guard.initAuthCheck();
    });

})();
