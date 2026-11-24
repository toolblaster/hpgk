/**
 * --------------------------------------------------------------------------
 * HPGK ACCESS GUARD (MCQ Free + Login Required | Mock Rules Preserved)
 * --------------------------------------------------------------------------
 * Manages guest preview limits, login prompts for guests, and full free
 * MCQ access for authenticated users, while preserving pass validation helpers.
 * --------------------------------------------------------------------------
 */

(function() {
    const GUEST_QUESTION_LIMIT = 30;
    const BONUS_QUESTIONS_REWARD = 10;
    const COUNTDOWN_DURATION_SECONDS = 300; // 5 Minutes (05:00)

    function isAuthenticatedUser(user) {
        return Boolean(user && (user.isLoggedIn === true || user.uid));
    }

    /**
     * Retrieves the 5-minute exit-intent timer state from localStorage
     * @returns {Object} { remainingSeconds, isExpired, isActive }
     */
    function getCountdownState() {
        const timerStart = localStorage.getItem('hpgk_bonus_timer_start');

        if (!timerStart) {
            return { remainingSeconds: COUNTDOWN_DURATION_SECONDS, isExpired: false, isActive: false };
        }

        const startMs = parseInt(timerStart, 10);
        if (Number.isNaN(startMs)) {
            return { remainingSeconds: COUNTDOWN_DURATION_SECONDS, isExpired: false, isActive: false };
        }

        const elapsedSeconds = Math.floor((Date.now() - startMs) / 1000);
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
     * Claims +10 bonus questions when a user logs in while countdown is active
     */
    function claimBonusOnLogin() {
        const timerState = getCountdownState();
        const hasTimerStarted = Boolean(localStorage.getItem('hpgk_bonus_timer_start'));
        const isAlreadyClaimed = localStorage.getItem('hpgk_bonus_questions_claimed') === 'true';

        if (hasTimerStarted && !isAlreadyClaimed && !timerState.isExpired) {
            localStorage.setItem('hpgk_bonus_questions_claimed', 'true');
            if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                window.HPGK_Layout.showToast("Bonus Unlocked! +10 Extra Free Questions added to your quota.");
            }
        }
    }

    /**
     * Calculates the effective maximum question limit allowed for current user.
     * Logged-in users have unlimited free MCQ access; guests are limited to GUEST_QUESTION_LIMIT.
     * @returns {number}
     */
    function getUserQuotaLimit() {
        const user = window.HPGK_User || { isLoggedIn: false, passes: {} };
        if (isAuthenticatedUser(user)) {
            return Infinity;
        }
        return GUEST_QUESTION_LIMIT;
    }

    window.HPGK_Guard = {
        MASTER_KEYS: ['mega_combo_pass', 'vip_lifetime_pass', 'mock_master_pass'],
        BONUS_QUESTIONS_REWARD: BONUS_QUESTIONS_REWARD,

        getCountdownState: getCountdownState,
        startBonusTimer: startBonusTimer,
        claimBonusOnLogin: claimBonusOnLogin,
        getUserQuotaLimit: getUserQuotaLimit,

        /**
         * Returns a unique, user-scoped localStorage key to isolate progress between users
         * @param {string} baseKey
         * @returns {string}
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
         * Evaluates MCQ access rights:
         * - Logged-in users: always allowed (free MCQs, no Pro paywall)
         * - Guest users: allowed up to loginLimit, then prompted to log in
         * @param {number} currentIndex Zero-based question index
         * @returns {Object}
         */
        checkAccess: function(currentIndex) {
            const fallbackLimit = (window.PAGE_FREE_LIMIT !== undefined)
                ? Number(window.PAGE_FREE_LIMIT)
                : GUEST_QUESTION_LIMIT;
            const config = window.PAGE_ACCESS || {};
            const loginLimit = (config.loginLimit !== undefined)
                ? Number(config.loginLimit)
                : fallbackLimit;

            const user = window.HPGK_User || { isLoggedIn: false, passes: {} };

            // Logged-in users get full free MCQ access
            if (isAuthenticatedUser(user)) {
                return { status: 'allowed' };
            }

            // Anonymous guest limit -> prompt login
            if (currentIndex >= loginLimit) {
                startBonusTimer();
                return { status: 'blocked_login', limit: loginLimit };
            }

            return { status: 'allowed' };
        },

        /**
         * Injects a login prompt card into the quiz container when a guest hits the limit
         * @param {HTMLElement} containerElement
         * @param {Object} accessState
         */
        showBlocker: function(containerElement, accessState) {
            if (!containerElement) return;

            if (window.HPGK_Layout && typeof window.HPGK_Layout.showBonusCountdownModal === 'function') {
                window.HPGK_Layout.showBonusCountdownModal(false);
            }

            const timerState = getCountdownState();
            const limitVal = accessState && accessState.limit ? accessState.limit : GUEST_QUESTION_LIMIT;

            let title = "Free Guest Limit Reached";
            let subtitle = "Sign In For Free Unlimited MCQs";
            let desc = `You've completed <strong>${limitVal} Free Guest Questions</strong>. Log in with Google to unlock all MCQs for free, save your progress, and track your rank.`;
            let iconClass = "fa-solid fa-user-shield";
            let borderColor = "#2563eb";
            let badgeText = "LOGIN REQUIRED FOR MORE";
            let btnClass = "paywall-btn-primary";
            let btnHtml = `
                <button type="button" class="paywall-btn ${btnClass}" onclick="window.openLoginModal ? window.openLoginModal() : (window.loginWithGoogle && window.loginWithGoogle())">
                    <i class="fa-brands fa-google"></i>
                    <span>Sign In with Google (Free)</span>
                </button>
            `;

            if (!timerState.isExpired) {
                title = "Free Guest Limit Reached!";
                subtitle = "Log In Now & Unlock All MCQs Free";
                desc = `You've completed <strong>${limitVal} Free Guest Questions</strong>. Sign in now to continue practicing MCQs for free and save your progress.`;
                iconClass = "fa-solid fa-hourglass-half";
                borderColor = "#eab308";
                badgeText = "FREE WITH LOGIN";
                btnClass = "paywall-btn-gold";
                btnHtml = `
                    <button type="button" class="paywall-btn ${btnClass}" onclick="window.HPGK_Layout && window.HPGK_Layout.showBonusCountdownModal ? window.HPGK_Layout.showBonusCountdownModal(true) : (window.openLoginModal ? window.openLoginModal() : window.loginWithGoogle())">
                        <i class="fa-brands fa-google"></i>
                        <span>Sign In to Continue Free</span>
                    </button>
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

            if (!document.getElementById('guard-paywall-css')) {
                const style = document.createElement('style');
                style.id = 'guard-paywall-css';
                style.textContent = `
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
                        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.06);
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

                    .paywall-btn {
                        width: 100%;
                        max-width: 260px;
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

                    .paywall-btn-primary {
                        background: var(--primary, #2563eb);
                        color: #ffffff;
                        box-shadow: 0 3px 12px rgba(37, 99, 235, 0.25);
                    }
                `;
                document.head.appendChild(style);
            }
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        if (window.HPGK_User && window.HPGK_User.uid) {
            claimBonusOnLogin();
        }
    });
})();
