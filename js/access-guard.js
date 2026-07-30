/**
 * --------------------------------------------------------------------------
 * HPGK ACCESS GUARD (The Paywall Bouncer)
 * --------------------------------------------------------------------------
 * Manages access control, anonymous guest limits, and paywall rendering.
 * Strictly verifies pass expiration timestamps via core.js HPGK_IsPassValid.
 * Triggers 5-Minute Exit-Intent Bonus Countdown upon hitting guest limits.
 * --------------------------------------------------------------------------
 */

(function() {
    const GUEST_QUESTION_LIMIT = 30;
    const FREE_USER_QUESTION_LIMIT = 100;
    const BONUS_QUESTIONS_REWARD = 10;
    const COUNTDOWN_DURATION_SECONDS = 300; // 5 Minutes (05:00)

    /**
     * Retrieves the 5-minute exit-intent timer state from localStorage
     * @returns {Object} { remainingSeconds, isExpired, isActive }
     */
    function getCountdownState() {
        const timerStart = localStorage.getItem('hpgk_bonus_timer_start');
        
        if (!timerStart) {
            return { remainingSeconds: COUNTDOWN_DURATION_SECONDS, isExpired: false, isActive: false };
        }

        const elapsedSeconds = Math.floor((Date.now() - parseInt(timerStart, 10)) / 1000);
        const remainingSeconds = Math.max(0, COUNTDOWN_DURATION_SECONDS - elapsedSeconds);
        const isExpired = remainingSeconds <= 0;

        return {
            remainingSeconds,
            isExpired,
            isActive: !isExpired
        };
    }

    /**
     * Starts or retrieves the exit-intent bonus timer timestamp
     */
    function startBonusTimer() {
        let timerStart = localStorage.getItem('hpgk_bonus_timer_start');
        if (!timerStart) {
            timerStart = Date.now().toString();
            localStorage.setItem('hpgk_bonus_timer_start', timerStart);
        }
        return parseInt(timerStart, 10);
    }

    /**
     * Claims +10 bonus questions when a user logs in while countdown is active or recorded
     */
    function claimBonusOnLogin() {
        const timerState = getCountdownState();
        const hasTimerStarted = !!localStorage.getItem('hpgk_bonus_timer_start');
        const isAlreadyClaimed = localStorage.getItem('hpgk_bonus_questions_claimed') === 'true';

        if (hasTimerStarted && !isAlreadyClaimed && !timerState.isExpired) {
            localStorage.setItem('hpgk_bonus_questions_claimed', 'true');
            console.log("[AccessGuard] 🎉 Bonus +10 Questions awarded successfully!");
            
            if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                window.HPGK_Layout.showToast("🎉 Bonus Unlocked! +10 Extra Free Questions added to your quota.");
            }
        }
    }

    /**
     * Calculates the effective maximum question limit allowed for current user
     * @returns {number} Allowed question quota
     */
    function getUserQuotaLimit() {
        const user = window.HPGK_User || { isLoggedIn: false, passes: {} };
        const checkPass = window.HPGK_IsPassValid || (p => !!p);

        // Active pass holders get unlimited access
        if (user.isLoggedIn && user.passes) {
            const hasPass = Object.keys(user.passes).some(k => checkPass(user.passes[k]));
            if (hasPass) return Infinity;
        }

        // Logged-in free user
        if (user.isLoggedIn || (user.uid)) {
            const bonusClaimed = localStorage.getItem('hpgk_bonus_questions_claimed') === 'true' || 
                                 (user.bonusClaimed === true);
            return bonusClaimed ? (FREE_USER_QUESTION_LIMIT + BONUS_QUESTIONS_REWARD) : FREE_USER_QUESTION_LIMIT;
        }

        // Anonymous Guest limit
        return GUEST_QUESTION_LIMIT;
    }

    window.HPGK_Guard = {
        // Master passes that grant complete platform access
        MASTER_KEYS: ['mega_combo_pass', 'vip_lifetime_pass', 'mock_master_pass'],

        // Expose countdown state helpers
        getCountdownState: getCountdownState,
        startBonusTimer: startBonusTimer,
        claimBonusOnLogin: claimBonusOnLogin,
        getUserQuotaLimit: getUserQuotaLimit,

        /**
         * Returns a unique, user-scoped localStorage key to isolate progress between users
         * @param {string} baseKey - Base identifier (e.g. 'history_gk')
         * @returns {string} User-scoped storage key
         */
        getUserKey: function(baseKey) {
            const user = window.HPGK_User;
            if (user && user.isLoggedIn && user.uid) {
                return `hpgk_usr_${user.uid}_${baseKey}`;
            }
            return `hpgk_guest_${baseKey}`;
        },

        /**
         * Simple boolean check for whether an index can be accessed
         */
        canAccessQuestion: function(currentIndex) {
            const access = this.checkAccess(currentIndex);
            return access.status === 'allowed';
        },

        /**
         * Evaluates current user access rights against page limits and active passes
         * @param {number} currentIndex Zero-based question index currently requested
         * @returns {Object} Access status object with status code and limits
         */
        checkAccess: function(currentIndex) {
            const fallbackLimit = (window.PAGE_FREE_LIMIT !== undefined) ? window.PAGE_FREE_LIMIT : GUEST_QUESTION_LIMIT;
            const config = window.PAGE_ACCESS || {
                loginLimit: fallbackLimit,
                proLimit: getUserQuotaLimit() === Infinity ? Infinity : (
                    (localStorage.getItem('hpgk_bonus_questions_claimed') === 'true') ? 
                    (FREE_USER_QUESTION_LIMIT + BONUS_QUESTIONS_REWARD) : FREE_USER_QUESTION_LIMIT
                ),
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
                // Start bonus timer when guest hits limit
                startBonusTimer();
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

            let title = "Content Locked";
            let subtitle = "";
            let desc = "";
            let iconClass = "fa-lock";
            let btnHtml = "";
            let borderColor = "var(--primary)";
            let badgeText = "PREMIUM ACCESS";

            // -----------------------------------------------------------
            // STATE 1: GUEST LIMIT REACHED (Prompt Google Authentication + Bonus)
            // -----------------------------------------------------------
            if (accessState.status === 'blocked_login') {
                // Auto-trigger modal only ONCE per session (will respect user dismissal)
                if (window.HPGK_Layout && typeof window.HPGK_Layout.showBonusCountdownModal === 'function') {
                    window.HPGK_Layout.showBonusCountdownModal(false);
                }

                const timerState = getCountdownState();

                if (timerState.isExpired) {
                    title = "Free Guest Limit Reached";
                    subtitle = "Sign In For 100 Free MCQs";
                    desc = `You've completed <strong>${accessState.limit} Free Guest Questions</strong>. Log in now to access 100 free practice questions, save progress across 6,500+ MCQs, and track your leaderboard rank!`;
                    iconClass = "fa-solid fa-user-shield";
                    borderColor = "#2563eb";
                    badgeText = "FREE GUEST LIMIT";

                    btnHtml = `
                        <button class="paywall-btn paywall-btn-primary" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())">
                            <i class="fa-brands fa-google"></i>
                            <span>Sign In with Google</span>
                        </button>
                    `;
                } else {
                    title = "Free Guest Limit Reached!";
                    subtitle = "Claim Your +10 Bonus Questions Now";
                    desc = `You've completed <strong>${accessState.limit} Free Guest Questions</strong>. Log in now to claim your bonus questions, save progress across 6,500+ MCQs, and access the leaderboard!`;
                    iconClass = "fa-solid fa-hourglass-half";
                    borderColor = "#eab308";
                    badgeText = "LIMITED TIME OFFER";

                    btnHtml = `
                        <button class="paywall-btn paywall-btn-gold" onclick="window.HPGK_Layout && window.HPGK_Layout.showBonusCountdownModal ? window.HPGK_Layout.showBonusCountdownModal(true) : (window.openLoginModal ? window.openLoginModal() : window.loginWithGoogle())">
                            <i class="fa-solid fa-gift"></i>
                            <span>Claim +10 Bonus & Login</span>
                        </button>
                    `;
                }
            } 
            // -----------------------------------------------------------
            // STATE 2: PRO LIMIT REACHED (Unauthenticated Visitor)
            // -----------------------------------------------------------
            else if (accessState.status === 'blocked_pro_login') {
                title = "Unlock 6,500+ Premium MCQs";
                subtitle = "Sign In To Access Full Topic Practice";
                desc = `You've completed all free sample questions! Sign in to check your active membership status or choose a practice plan.`;
                iconClass = "fa-solid fa-crown";
                borderColor = "#ea580c";
                badgeText = "FREE LIMIT REACHED";

                btnHtml = `
                    <button class="paywall-btn paywall-btn-primary" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())">
                        <i class="fa-brands fa-google"></i>
                        <span>Sign In with Google</span>
                    </button>
                `;
            }
            // -----------------------------------------------------------
            // STATE 3: PRO LIMIT REACHED (Logged In User Needs Pass Upgrade)
            // -----------------------------------------------------------
            else if (accessState.status === 'blocked_pro_paywall') {
                if (window.HPGK_Layout && typeof window.HPGK_Layout.showUpgradeModal === 'function') {
                    window.HPGK_Layout.showUpgradeModal(accessState.limit || 100);
                }

                title = "Upgrade to MCQ Pro Pass";
                subtitle = "Unlimited Practice for HP Govt Exams";
                desc = `You've completed all 100 free practice questions. Upgrade to the MCQ Pro Pass to unlock complete topic-wise access and detailed solutions.`;
                iconClass = "fa-solid fa-bolt";
                borderColor = "#2563eb";
                badgeText = "PRO PASS REQUIRED";

                btnHtml = `
                    <div class="paywall-price-tag">
                        <span class="currency">₹</span>39<span class="period">/month</span>
                    </div>

                    <ul class="paywall-features-list">
                        <li><i class="fa-solid fa-circle-check"></i> Unlimited 6,500+ Topic-wise MCQs</li>
                        <li><i class="fa-solid fa-circle-check"></i> Detailed Explanations for Every Answer</li>
                        <li><i class="fa-solid fa-circle-check"></i> Score Tracking & Analytics Dashboard</li>
                    </ul>

                    <button class="paywall-btn paywall-btn-pro" onclick="window.location.href='../user/upgrade.html'">
                        <i class="fa-solid fa-rocket"></i>
                        <span>Get MCQ Pro Pass — ₹39/mo</span>
                    </button>

                    <div class="paywall-trust-badge">
                        <i class="fa-solid fa-shield-halved"></i> 100% SECURE CHECKOUT VIA RAZORPAY
                    </div>
                `;
            }

            containerElement.innerHTML = `
                <div class="paywall-card glass-panel" style="border-top-color: ${borderColor};">
                    <div class="paywall-badge" style="background: ${borderColor}1a; color: ${borderColor}; border-color: ${borderColor}40;">
                        ${badgeText}
                    </div>

                    <div class="paywall-icon-wrap" style="background: ${borderColor}15; color: ${borderColor};">
                        <i class="${iconClass}"></i>
                    </div>

                    <h2 class="paywall-title">${title}</h2>
                    <div class="paywall-subtitle">${subtitle}</div>
                    
                    <p class="paywall-desc">${desc}</p>
                    
                    ${btnHtml}
                </div>
            `;
            
            // Inject upgraded paywall CSS dynamically if not present
            if (!document.getElementById('guard-paywall-css')) {
                const style = document.createElement('style');
                style.id = 'guard-paywall-css';
                style.innerHTML = `
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(12px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes pulseGlow {
                        0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.2); }
                        50% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
                    }

                    .paywall-card {
                        position: relative;
                        background: var(--card-bg, rgba(255, 255, 255, 0.95));
                        border: 1px solid var(--card-border, #e2e8f0);
                        border-top: 4px solid var(--primary);
                        padding: 22px 18px 18px 18px;
                        border-radius: var(--radius-lg, 14px);
                        box-sizing: border-box;
                        width: 100%;
                        text-align: center;
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
                        animation: fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        margin: 10px 0;
                        overflow: hidden;
                    }
                    [data-theme="dark"] .paywall-card {
                        background: rgba(30, 41, 59, 0.92);
                        border-color: rgba(255, 255, 255, 0.1);
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                    }

                    .paywall-badge {
                        display: inline-block;
                        font-size: 0.65rem;
                        font-weight: 800;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                        padding: 3px 10px;
                        border-radius: 20px;
                        border: 1px solid transparent;
                        margin-bottom: 10px;
                    }

                    .paywall-icon-wrap {
                        width: 50px;
                        height: 50px;
                        margin: 0 auto 10px auto;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.35rem;
                        box-shadow: inset 0 2px 6px rgba(0,0,0,0.06);
                        animation: pulseGlow 3s infinite;
                    }

                    .paywall-title {
                        font-size: 1.15rem;
                        font-weight: 800;
                        margin: 0 0 3px 0;
                        color: var(--text-main, #0f172a);
                        letter-spacing: -0.3px;
                    }
                    [data-theme="dark"] .paywall-title { color: #f8fafc; }

                    .paywall-subtitle {
                        font-size: 0.8rem;
                        font-weight: 700;
                        color: var(--primary, #2563eb);
                        margin-bottom: 10px;
                    }

                    .paywall-desc {
                        color: var(--text-sec, #64748b);
                        margin: 0 auto 14px auto;
                        font-size: 0.8rem;
                        line-height: 1.45;
                        max-width: 400px;
                        font-weight: 500;
                    }
                    [data-theme="dark"] .paywall-desc { color: #94a3b8; }

                    .paywall-price-tag {
                        font-size: 1.7rem;
                        font-weight: 900;
                        color: var(--text-main, #0f172a);
                        margin-bottom: 10px;
                        letter-spacing: -0.5px;
                    }
                    [data-theme="dark"] .paywall-price-tag { color: #f8fafc; }
                    .paywall-price-tag .currency { font-size: 1.1rem; font-weight: 700; margin-right: 2px; }
                    .paywall-price-tag .period { font-size: 0.78rem; color: var(--text-sec, #64748b); font-weight: 700; }

                    .paywall-features-list {
                        list-style: none;
                        padding: 0;
                        margin: 0 auto 14px auto;
                        max-width: 320px;
                        text-align: left;
                        display: flex;
                        flex-direction: column;
                        gap: 6px;
                    }
                    .paywall-features-list li {
                        font-size: 0.78rem;
                        font-weight: 600;
                        color: var(--text-main, #334155);
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                    [data-theme="dark"] .paywall-features-list li { color: #cbd5e1; }
                    .paywall-features-list li i {
                        color: #22c55e;
                        font-size: 0.82rem;
                    }

                    .paywall-btn {
                        width: 100%;
                        max-width: 250px;
                        margin: 0 auto;
                        padding: 9px 18px;
                        font-size: 0.85rem;
                        font-weight: 800;
                        border-radius: 24px;
                        border: none;
                        cursor: pointer;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 7px;
                        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        font-family: inherit;
                    }
                    .paywall-btn:hover {
                        transform: translateY(-2px);
                    }

                    .paywall-btn-gold {
                        background: linear-gradient(135deg, #eab308, #ca8a04);
                        color: #0f172a;
                        box-shadow: 0 3px 12px rgba(234, 179, 8, 0.3);
                    }
                    .paywall-btn-gold:hover {
                        box-shadow: 0 5px 16px rgba(234, 179, 8, 0.4);
                    }

                    .paywall-btn-primary {
                        background: var(--primary, #2563eb);
                        color: #ffffff;
                        box-shadow: 0 3px 12px rgba(37, 99, 235, 0.25);
                    }
                    .paywall-btn-primary:hover {
                        box-shadow: 0 5px 16px rgba(37, 99, 235, 0.35);
                    }

                    .paywall-btn-pro {
                        background: linear-gradient(135deg, #2563eb, #1d4ed8);
                        color: #ffffff;
                        box-shadow: 0 3px 14px rgba(37, 99, 235, 0.3);
                    }
                    .paywall-btn-pro:hover {
                        box-shadow: 0 5px 18px rgba(37, 99, 235, 0.4);
                    }

                    .paywall-trust-badge {
                        margin-top: 10px;
                        font-size: 0.68rem;
                        color: var(--text-sec, #64748b);
                        font-weight: 700;
                        letter-spacing: 0.4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                    }
                    .paywall-trust-badge i { color: #22c55e; }
                `;
                document.head.appendChild(style);
            }
        }
    };

    // Automatically evaluate bonus claim when logged in user arrives
    document.addEventListener('DOMContentLoaded', () => {
        if (window.HPGK_User && window.HPGK_User.uid) {
            claimBonusOnLogin();
        }
    });
})();
