/**
 * --------------------------------------------------------------------------
 * HPGK ACCESS GUARD (The Paywall Bouncer)
 * --------------------------------------------------------------------------
 * Manages access control, anonymous guest limits, and paywall rendering.
 * Strictly verifies pass expiration timestamps via core.js HPGK_IsPassValid.
 * --------------------------------------------------------------------------
 */

(function() {
    window.HPGK_Guard = {
        // Master passes that grant complete platform access
        MASTER_KEYS: ['mega_combo_pass', 'vip_lifetime_pass', 'mock_master_pass'],

        /**
         * Evaluates current user access rights against page limits and active passes
         * @param {number} currentIndex Zero-based question index currently requested
         * @returns {Object} Access status object with status code and limits
         */
        checkAccess: function(currentIndex) {
            // Retrieve page specific configuration or set fallback guest limits
            const fallbackLimit = (window.PAGE_FREE_LIMIT !== undefined) ? window.PAGE_FREE_LIMIT : 30;
            const config = window.PAGE_ACCESS || {
                loginLimit: fallbackLimit,
                proLimit: 100,
                requiredPass: 'mcq_pro_pass'
            };

            // Read global user session from core.js
            const user = window.HPGK_User || { isLoggedIn: false, passes: {} };

            // Helper to strictly validate timestamp expiration
            const checkPass = window.HPGK_IsPassValid || (p => !!p);

            // 1. VIP & MASTER PASS VALIDATION
            if (user.isLoggedIn && user.passes) {
                // Check if user holds any valid, non-expired master pass
                const hasMasterKey = this.MASTER_KEYS.some(key => checkPass(user.passes[key]));
                if (hasMasterKey) return { status: 'allowed' };
                
                // Check if user holds the specific pass required for this topic module
                if (config.requiredPass && checkPass(user.passes[config.requiredPass])) {
                    return { status: 'allowed' };
                }
            }

            // 2. PRO LIMIT (PAYWALL) - User crossed the free logged-in question threshold
            if (currentIndex >= config.proLimit) {
                if (!user.isLoggedIn) {
                    return { status: 'blocked_pro_login', limit: config.proLimit };
                }
                return { status: 'blocked_pro_paywall', passId: config.requiredPass || 'mcq_pro_pass' };
            }

            // 3. ANONYMOUS GUEST LIMIT - User crossed free guest limit without logging in
            if (currentIndex >= config.loginLimit && !user.isLoggedIn) {
                return { status: 'blocked_login', limit: config.loginLimit };
            }

            return { status: 'allowed' };
        },

        /**
         * Injects a high-converting paywall overlay into the quiz card container
         * @param {HTMLElement} containerElement DOM container element where blocker renders
         * @param {Object} accessState Access status object returned from checkAccess
         */
        showBlocker: function(containerElement, accessState) {
            if (!containerElement) return;

            // UI Card Configuration Variables
            let title = "Content Locked";
            let desc = "";
            let iconClass = "fa-lock";
            let btnHtml = "";
            let borderColor = "var(--primary)";

            // -----------------------------------------------------------
            // STATE 1: GUEST LIMIT REACHED (Prompt Google Authentication)
            // -----------------------------------------------------------
            if (accessState.status === 'blocked_login') {
                title = "Free Guest Limit Reached";
                desc = `Awesome progress! 🎉 You've reached the free guest question limit.<br><br><strong>Login securely</strong> to unlock more questions, save your progress, track rankings, and access detailed study notes!`;
                iconClass = "fa-solid fa-user-shield";
                borderColor = "var(--primary)";
                btnHtml = `
                    <button class="login-btn" style="margin: 0 auto; padding: 12px 28px; font-size: 0.95rem; font-weight: 800; border-radius: 25px; border: none; background: var(--primary); color: #fff; cursor: pointer; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25); display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <i class="fa-brands fa-google"></i>
                        <span>Login with Google</span>
                    </button>
                `;
            } 
            // -----------------------------------------------------------
            // STATE 2: PRO LIMIT REACHED (Unauthenticated Visitor)
            // -----------------------------------------------------------
            else if (accessState.status === 'blocked_pro_login') {
                title = "Premium Content Locked";
                desc = `You've completed ${accessState.limit} free questions! Further advanced practice questions are reserved for our Premium members.<br><br><strong>Login now</strong> to check your pass status or choose a practice plan.`;
                iconClass = "fa-solid fa-crown";
                borderColor = "var(--accent)";
                btnHtml = `
                    <button class="login-btn" style="margin: 0 auto; padding: 12px 28px; font-size: 0.95rem; font-weight: 800; border-radius: 25px; border: none; background: var(--accent); color: #fff; cursor: pointer; box-shadow: 0 4px 15px rgba(234, 88, 12, 0.25); display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <i class="fa-brands fa-google"></i>
                        <span>Login with Google</span>
                    </button>
                `;
            }
            // -----------------------------------------------------------
            // STATE 3: PRO LIMIT REACHED (Logged In User Needs Pass Upgrade)
            // -----------------------------------------------------------
            else if (accessState.status === 'blocked_pro_paywall') {
                title = "Unlock MCQ Pro Pass";
                desc = `Upgrade to the <strong>MCQ Pro Pass</strong> to unlock 3,800+ premium topic-wise questions, detailed explanations, and complete score history.<br><br>Join top state exam rankers today!`;
                iconClass = "fa-solid fa-bolt";
                borderColor = "var(--accent)";
                btnHtml = `
                    <div style="font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 15px; letter-spacing: -1px;">₹39<span style="font-size:0.85rem; color:var(--text-sec); font-weight:700;">/month</span></div>
                    <button class="login-btn" style="margin: 0 auto; padding: 12px 30px; font-size: 0.95rem; font-weight: 800; border-radius: 25px; border: none; background: linear-gradient(135deg, #f59e0b, #ea580c); color: #fff; cursor: pointer; box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3); display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;" onclick="window.location.href='../user/upgrade.html'" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <i class="fa-solid fa-rocket"></i> <span>Get MCQ Pro Pass</span>
                    </button>
                    <div style="margin-top: 16px; font-size: 0.72rem; color: var(--text-sec); font-weight: 600; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                        <i class="fa-solid fa-shield-halved" style="color: #22c55e;"></i> SECURE CHECKOUT VIA RAZORPAY
                    </div>
                `;
            }

            // Render styled paywall block into container
            containerElement.innerHTML = `
                <div class="empty-state glass-panel" style="border: 1px solid var(--card-border); border-top: 4px solid ${borderColor}; padding: 40px 20px; border-radius: var(--radius-lg); box-sizing: border-box; width: 100%; text-align: center; box-shadow: var(--glass-shadow); animation: fadeUp 0.4s ease-out;">
                    <div style="width: 65px; height: 65px; margin: 0 auto 15px auto; background: ${borderColor}15; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);">
                        <i class="${iconClass}" style="font-size: 1.8rem; color: ${borderColor};"></i>
                    </div>
                    <h2 style="font-size: 1.35rem; margin-bottom: 12px; color: var(--text-main); font-weight: 800; letter-spacing: -0.3px;">${title}</h2>
                    <p style="color: var(--text-sec); margin-bottom: 24px; font-size: 0.85rem; line-height: 1.5; max-width: 420px; margin-inline: auto; font-weight: 500;">
                        ${desc}
                    </p>
                    ${btnHtml}
                </div>
            `;
            
            // Inject CSS keyframe animation dynamically if not present
            if (!document.getElementById('guard-anim')) {
                const style = document.createElement('style');
                style.id = 'guard-anim';
                style.innerHTML = `@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
                document.head.appendChild(style);
            }
        }
    };
})();
