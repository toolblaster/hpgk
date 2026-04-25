/**
 * --------------------------------------------------------------------------
 * HPGK ACCESS GUARD (The Bouncer - Ultimate Edition)
 * --------------------------------------------------------------------------
 * Handles content locking with dynamic, high-converting Premium UIs.
 * Relies strictly on `core.js` for Firebase data.
 */

(function() {
    window.HPGK_Guard = {
        // 🔥 MASTER KEYS: Passes that unlock absolutely EVERYTHING (Including ₹39 MCQs)
        MASTER_KEYS: ['mega_combo_pass', 'vip_lifetime_pass', 'mock_master_pass'],

        checkAccess: function(currentIndex) {
            // Read Page Config
            const fallbackLimit = (window.PAGE_FREE_LIMIT !== undefined) ? window.PAGE_FREE_LIMIT : 50;
            const config = window.PAGE_ACCESS || {
                loginLimit: fallbackLimit,
                proLimit: 9999,
                requiredPass: null
            };

            // Read Global User State from core.js
            const user = window.HPGK_User || { isLoggedIn: false, passes: {} };

            // 1. VIP & MASTER PASS CHECK
            if (user.isLoggedIn && user.passes) {
                // If user has ₹149 Mock Master Pass (or any other master key), Unlock Everything!
                const hasMasterKey = this.MASTER_KEYS.some(key => user.passes[key]);
                if (hasMasterKey) return { status: 'allowed' };
                
                // Otherwise, check if they have the specific pass required for this page
                if (config.requiredPass && user.passes[config.requiredPass]) return { status: 'allowed' };
            }

            // 2. Pro Limit (Paywall) - User crossed free Pro limit
            if (currentIndex >= config.proLimit) {
                if (!user.isLoggedIn) return { status: 'blocked_pro_login', limit: config.proLimit };
                return { status: 'blocked_pro_paywall', passId: config.requiredPass || 'mcq_pro_pass' };
            }

            // 3. Free Login Limit - User crossed anonymous limit
            if (currentIndex >= config.loginLimit && !user.isLoggedIn) {
                return { status: 'blocked_login', limit: config.loginLimit };
            }

            return { status: 'allowed' };
        },

        showBlocker: function(containerElement, accessState) {
            if (!containerElement) return;

            // UI Variables
            let title = "Content Locked";
            let desc = "";
            let iconClass = "fa-lock";
            let btnHtml = "";
            let borderColor = "var(--primary)";

            // -----------------------------------------------------------
            // STATE 1: FREE LOGIN LIMIT REACHED
            // -----------------------------------------------------------
            if (accessState.status === 'blocked_login') {
                title = "Free Content Limit Reached";
                desc = `Awesome progress! 🎉 You've reached the free guest limit.<br><br><strong>Login securely</strong> to unlock thousands of MCQs, track your rank, save your progress, and explore our premium perks!`;
                iconClass = "fa-solid fa-user-shield";
                borderColor = "var(--primary)"; // Blue accent
                btnHtml = `
                    <button class="login-btn" style="margin: 0 auto; padding: 10px 26px; font-size: 0.9rem; font-weight: 800; border-radius: 25px; border: none; background: var(--primary); color: #fff; cursor: pointer; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2); display: inline-flex; align-items: center; justify-content: center; transition: all 0.2s;" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 15px rgba(37, 99, 235, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(37, 99, 235, 0.2)'">
                        <span>Login with Google</span>
                    </button>
                `;
            } 
            // -----------------------------------------------------------
            // STATE 2: PRO LIMIT REACHED (BUT NOT LOGGED IN)
            // -----------------------------------------------------------
            else if (accessState.status === 'blocked_pro_login') {
                title = "Premium Content Locked";
                desc = `You've viewed ${accessState.limit} free questions! This advanced module is exclusively reserved for our Premium members.<br><br><strong>Login now</strong> to check out our highly affordable plans and secure your success.`;
                iconClass = "fa-solid fa-crown";
                borderColor = "var(--accent)"; // Orange accent
                btnHtml = `
                    <button class="login-btn" style="margin: 0 auto; padding: 10px 26px; font-size: 0.9rem; font-weight: 800; border-radius: 25px; border: none; background: var(--accent); color: #fff; cursor: pointer; box-shadow: 0 4px 12px rgba(234, 88, 12, 0.2); display: inline-flex; align-items: center; justify-content: center; transition: all 0.2s;" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 15px rgba(234, 88, 12, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(234, 88, 12, 0.2)'">
                        <span>Login with Google</span>
                    </button>
                `;
            }
            // -----------------------------------------------------------
            // STATE 3: PRO LIMIT REACHED (LOGGED IN) -> RAZORPAY
            // -----------------------------------------------------------
            else if (accessState.status === 'blocked_pro_paywall') {
                title = "Unlock MCQ Pro Pass";
                desc = `Upgrade to the <strong>MCQ Pro Pass</strong> to unlock 3000+ premium topic-wise questions, detailed explanations, and your complete history.<br><br>Join 10,000+ top scorers today!`;
                iconClass = "fa-solid fa-bolt";
                borderColor = "var(--accent)"; // Orange accent
                btnHtml = `
                    <div style="font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 15px; letter-spacing: -1px;">₹39<span style="font-size:0.85rem; color:var(--text-sec); font-weight:700;">/mo</span></div>
                    <button class="login-btn" style="margin: 0 auto; padding: 12px 28px; font-size: 0.95rem; font-weight: 800; border-radius: 25px; border: none; background: linear-gradient(135deg, #f59e0b, #ea580c); color: #fff; cursor: pointer; box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3); display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;" onclick="alert('Initiating Checkout for ₹39 MCQ Pro Pass...')" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 18px rgba(234, 88, 12, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(234, 88, 12, 0.3)'">
                        <i class="fa-solid fa-rocket"></i> <span>Get MCQ Pro Pass</span>
                    </button>
                    <div style="margin-top: 16px; font-size: 0.75rem; color: var(--text-sec); font-weight: 600; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: center; gap: 5px;">
                        <i class="fa-solid fa-shield-halved" style="color: #22c55e;"></i> SECURE 256-BIT RAZORPAY CHECKOUT
                    </div>
                `;
            }

            // Inject the highly polished HTML into the card Area
            containerElement.innerHTML = `
                <div class="empty-state glass-panel" style="border: 1px solid var(--card-border); border-top: 4px solid ${borderColor}; padding: 40px 20px; border-radius: var(--radius-lg); box-sizing: border-box; width: 100%; text-align: center; box-shadow: var(--glass-shadow); animation: fadeUp 0.4s ease-out;">
                    <div style="width: 65px; height: 65px; margin: 0 auto 15px auto; background: ${borderColor}15; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);">
                        <i class="${iconClass}" style="font-size: 1.8rem; color: ${borderColor};"></i>
                    </div>
                    <h2 style="font-size: 1.4rem; margin-bottom: 12px; color: var(--text-main); font-weight: 800; letter-spacing: -0.3px;">${title}</h2>
                    <p style="color: var(--text-sec); margin-bottom: 24px; font-size: 0.85rem; line-height: 1.5; max-width: 400px; margin-inline: auto;">
                        ${desc}
                    </p>
                    ${btnHtml}
                </div>
            `;
            
            // Add animation keyframes if not exists
            if (!document.getElementById('guard-anim')) {
                const style = document.createElement('style');
                style.id = 'guard-anim';
                style.innerHTML = `@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
                document.head.appendChild(style);
            }
        }
    };
})();
