/**
 * --------------------------------------------------------------------------
 * HPGK ACCESS GUARD (The Bouncer)
 * --------------------------------------------------------------------------
 * Handles content locking based on Page configuration and User limits.
 */

(function() {
    window.HPGK_Guard = {
        MASTER_KEYS: ['mega_combo_pass', 'vip_lifetime_pass'],

        checkAccess: function(currentIndex) {
            // Read Page Config or use fallback from original code (50 limits)
            const fallbackLimit = (window.PAGE_FREE_LIMIT !== undefined) ? window.PAGE_FREE_LIMIT : 50;
            const config = window.PAGE_ACCESS || {
                loginLimit: fallbackLimit,
                proLimit: 9999,
                requiredPass: null
            };

            const user = window.HPGK_User || { isLoggedIn: false, passes: [] };

            // VIP Check
            if (user.isLoggedIn && user.passes) {
                const hasMasterKey = this.MASTER_KEYS.some(key => user.passes.includes(key));
                if (hasMasterKey) return { status: 'allowed' };
                if (config.requiredPass && user.passes.includes(config.requiredPass)) return { status: 'allowed' };
            }

            // Paywall Limit
            if (currentIndex >= config.proLimit) {
                if (!user.isLoggedIn) return { status: 'login_required', limit: config.proLimit };
                return { status: 'paywall', passId: config.requiredPass || 'premium_pass' };
            }

            // Free Limit Check (Original logic)
            if (currentIndex >= config.loginLimit && !user.isLoggedIn) {
                return { status: 'login_required', limit: config.loginLimit };
            }

            return { status: 'allowed' };
        },

        showBlocker: function(containerElement, accessState) {
            if (!containerElement) return;

            // This is the EXACT HTML from your original loadQuestion paywall logic.
            containerElement.innerHTML = `
                <div class="empty-state glass-panel" style="border: 1px solid var(--card-border); border-top: 4px solid var(--accent); padding: 30px 20px; border-radius: var(--radius-lg); box-sizing: border-box; width: 100%; text-align: center; box-shadow: var(--glass-shadow);">
                    <div style="width: 50px; height: 50px; margin: 0 auto 12px auto; background: rgba(234, 88, 12, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-lock" style="font-size: 1.4rem; color: var(--accent);"></i>
                    </div>
                    <h2 style="font-size: 1.25rem; margin-bottom: 8px; color: var(--text-main); font-weight: 800; letter-spacing: -0.3px;">Premium Content Locked</h2>
                    <p style="color: var(--text-sec); margin-bottom: 22px; font-size: 0.85rem; line-height: 1.5; max-width: 320px; margin-inline: auto;">
                        Awesome progress! 🎉 You've reached the free limit of <strong>${accessState.limit} questions</strong>.<br><br>
                        Login for <strong>FREE</strong> to unlock all remaining questions and track your accuracy on your personalized Dashboard.
                    </p>
                    <!-- Button calls the new Premium SaaS Modal from layout.js - ALIGNMENT FIXED -->
                    <button class="login-btn" style="margin: 0 auto; padding: 10px 22px; font-size: 0.85rem; border-radius: 25px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2); display: inline-flex; align-items: center; justify-content: center; gap: 8px;" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())">
                        <i class="fa-brands fa-google" style="display: inline-block !important; font-size: 1.15em; line-height: 1; position: relative; top: 1px; width: auto !important; height: auto !important;"></i>
                        <span style="display: inline-block !important; line-height: 1; position: relative; top: 0px; font-weight: 700;">Login to Unlock</span>
                    </button>
                </div>
            `;
        }
    };
})();
