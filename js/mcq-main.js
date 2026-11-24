/**
 * --------------------------------------------------------------------------
 * HPGK MCQ PRACTICE ENGINE (The Teacher)
 * --------------------------------------------------------------------------
 * Purely renders questions, handles UI logic, and communicates with Guard.
 * UPDATED: Free + Login Required model (Logged-in users get full MCQ pool).
 * FIXED: Accurate cloud sync baseline count & clean Weak-Spot filter reset.
 * FIXED: Auto-healing for Quick 10 button & instant refresh on auth change.
 * --------------------------------------------------------------------------
 */

(function() {
    // Helper to dynamically resolve user-scoped storage key
    function getStorageKey() {
        const baseCategory = (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category)
            ? `hpgk_${window.QUIZ_CONFIG.category}_v1`
            : 'hpgk_general_v1';

        if (window.HPGK_Guard && typeof window.HPGK_Guard.getUserKey === 'function') {
            return window.HPGK_Guard.getUserKey(baseCategory);
        }
        return baseCategory;
    }

    function isUserAuthenticated() {
        const user = window.HPGK_User;
        return Boolean(user && (user.isLoggedIn === true || user.uid));
    }

    let currentList = [];
    let currentIndex = 0;
    let historyState = { lastIndex: 0, answers: {}, bookmarks: [] };

    let currentFontSizePx = 12;
    let currentSearchTerm = '';
    let isBookmarkFilterActive = false;
    let isMistakesFilterActive = false;
    let isShuffleActive = false;
    let isQuickModeActive = false;
    let isWeakSpotModeActive = false;
    let quickSessionScore = 0;
    const QUICK_LIMIT = 10;

    const cardArea = document.getElementById('cardArea');
    const quizContent = document.getElementById('quizContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const searchInput = document.getElementById('searchInput');
    const searchContainer = document.getElementById('searchContainer');
    const jumpTrigger = document.getElementById('jumpTrigger');
    const quizWidgetWrapper = document.querySelector('.quiz-widget-wrapper');

    let bookmarkFilterBtn, mistakeFilterBtn, shuffleBtn, quickModeBtn;

    // Track last cloud sync to optimize Firebase Write Costs
    let lastSyncedCount = -1;

    function getValidProgressStats() {
        let validDoneCount = 0;
        let validCorrectCount = 0;
        if (window.quizData && Array.isArray(window.quizData)) {
            window.quizData.forEach(q => {
                const ans = historyState.answers[q.id];
                if (ans !== undefined && ans !== null) {
                    validDoneCount++;
                    if (ans === q.answer) validCorrectCount++;
                }
            });
        }
        return { validDoneCount, validCorrectCount };
    }

    window.HPGK_Engine_Refresh = function() {
        loadFromStorage();
        const { validDoneCount } = getValidProgressStats();
        lastSyncedCount = validDoneCount;
        applyFilters(false);
        updateStats();
        protectQuick10Button();
    };

    // Listen to Firebase Auth state changes to re-evaluate progress for active user
    window.addEventListener('hpgk_auth_changed', () => {
        migrateGuestProgressIfNeeded();
        loadFromStorage();

        const { validDoneCount } = getValidProgressStats();
        lastSyncedCount = validDoneCount;

        // Auto-resume to the last solved/attempted question index for this user
        if (window.quizData && historyState.lastIndex && historyState.lastIndex < window.quizData.length) {
            currentIndex = historyState.lastIndex;
        }

        applyFilters(false);
        updateStats();
        protectQuick10Button();
    });

    /**
     * Migrates guest progress to the logged-in user profile if user has no prior history
     */
    function migrateGuestProgressIfNeeded() {
        const user = window.HPGK_User;
        if (!user || !user.isLoggedIn || !user.uid) return;

        const baseCategory = (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category)
            ? `hpgk_${window.QUIZ_CONFIG.category}_v1`
            : 'hpgk_general_v1';

        const userKey = `hpgk_usr_${user.uid}_${baseCategory}`;
        const guestKey = `hpgk_guest_${baseCategory}`;

        const userHistoryRaw = localStorage.getItem(userKey);
        const guestHistoryRaw = localStorage.getItem(guestKey);

        if (!userHistoryRaw && guestHistoryRaw) {
            try {
                const guestData = JSON.parse(guestHistoryRaw);
                if (guestData && guestData.answers && Object.keys(guestData.answers).length > 0) {
                    localStorage.setItem(userKey, guestHistoryRaw);
                    localStorage.removeItem(guestKey);
                }
            } catch (e) {
                console.warn("Could not migrate guest progress:", e);
            }
        }
    }

    // Smart Cloud Sync (Batched Updates - Every 10 Answers)
    function triggerCloudSync(forceSync = false) {
        if (!window.HPGK_SaveScore || !isUserAuthenticated()) return;

        const { validDoneCount, validCorrectCount } = getValidProgressStats();
        if (validDoneCount === 0) return;

        if (lastSyncedCount === -1) {
            lastSyncedCount = validDoneCount;
        }

        if (forceSync || (validDoneCount - lastSyncedCount >= 10)) {
            const rawCategory = window.QUIZ_NAME || (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category) || 'General Practice';
            window.HPGK_SaveScore(rawCategory, validCorrectCount, validDoneCount);
            lastSyncedCount = validDoneCount;
        }
    }

    // Force sync if the user is leaving the page
    window.addEventListener('beforeunload', () => {
        triggerCloudSync(true);
    });

    // Auto-Heal the "Quick 10" button from core.js Lock Logic
    function protectQuick10Button() {
        document.querySelectorAll('.quick-start-ribbon').forEach(btn => {
            if (btn.getAttribute('onclick') === 'toggleQuickMode(true)') {
                btn.setAttribute('onclick', "toggleQuickMode('start')");
            }
            if (btn.innerHTML.includes('fa-lock') || btn.classList.contains('btn-pro')) {
                btn.innerHTML = '<i class="fa-solid fa-bolt"></i> Start Quick 10 Quiz';
                btn.classList.remove('btn-pro');
            }
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        if (jumpTrigger) jumpTrigger.style.display = 'none';
        bookmarkFilterBtn = document.getElementById('bookmarkFilterBtn');
        mistakeFilterBtn = document.getElementById('mistakeFilterBtn');
        shuffleBtn = document.getElementById('shuffleBtn');
        quickModeBtn = document.getElementById('quickModeBtn');

        protectQuick10Button();
        setTimeout(() => { initQuizNow(); }, 100);
    });

    window.exportProgress = function() {
        const dataStr = JSON.stringify(historyState);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const catName = window.QUIZ_CONFIG ? window.QUIZ_CONFIG.category : 'backup';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', `hpgk_${catName}_backup.json`);
        linkElement.click();
    };

    window.importProgress = function(input) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const contents = JSON.parse(e.target.result);
                if (contents && contents.answers) {
                    historyState = contents;
                    if (!historyState.bookmarks) historyState.bookmarks = [];
                    saveToStorage();
                    currentIndex = (historyState.lastIndex && historyState.lastIndex < currentList.length) ? historyState.lastIndex : 0;
                    applyFilters();
                    updateStats();
                    triggerCloudSync(true);

                    if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                        window.HPGK_Layout.showToast('Progress restored successfully!');
                    }
                } else {
                    if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                        window.HPGK_Layout.showToast('Invalid backup file format.');
                    }
                }
            } catch (err) {
                if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                    window.HPGK_Layout.showToast('Error reading file.');
                }
            }
        };
        reader.readAsText(file);
        input.value = '';
    };

    window.toggleHelpModal = function() {
        const modal = document.getElementById('quizHelpModal');
        if (modal) {
            modal.classList.toggle('show');
        }
    };

    window.adjustFont = function(dir) {
        currentFontSizePx += dir;
        if (currentFontSizePx > 15) currentFontSizePx = 15;
        if (currentFontSizePx < 12) currentFontSizePx = 12;
        loadQuestion(currentIndex);
    };

    function getFontSize() { return `${currentFontSizePx}px`; }

    function updateStats() {
        if (!document.getElementById('statDone')) return;
        const total = window.quizData.length;
        const { validDoneCount, validCorrectCount } = getValidProgressStats();
        const leftCount = total - validDoneCount;
        const wrongCount = validDoneCount - validCorrectCount;
        const accuracy = validDoneCount > 0 ? Math.round((validCorrectCount / validDoneCount) * 100) : 0;

        document.getElementById('statDone').innerText = validDoneCount;
        document.getElementById('statLeft').innerText = leftCount;
        document.getElementById('statCorrect').innerText = validCorrectCount;
        document.getElementById('statWrong').innerText = wrongCount;
        document.getElementById('statAccuracy').innerText = accuracy + '%';
    }

    function highlightText(text, term) {
        if (!term || term.length < 2) return text;
        const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeTerm})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    window.toggleExpl = function(qId) {
        const tooltip = document.getElementById(`expl-${qId}`);
        if (tooltip) { tooltip.classList.toggle('show'); }
    };

    function loadQuestion(index) {
        if (!quizContent || !cardArea) return;
        quizContent.scrollTop = 0;

        if (isQuickModeActive && index >= currentList.length) {
            cardArea.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-trophy" style="color:var(--accent); font-size:2.5rem; margin-bottom:10px;"></i>
                    <p style="font-size:1rem; font-weight:700; margin:0;">Quick Session Complete!</p>
                    <div class="summary-score">${quickSessionScore} / ${currentList.length}</div>
                    <button class="summary-btn" onclick="continueQuickMode()">Next 10 <i class="fa-solid fa-arrow-right"></i></button>
                    <br><br>
                    <button style="background:transparent; color:var(--text-sec); font-size:0.75rem; border:none; cursor:pointer;" onclick="toggleQuickMode('stop')">Exit Quick Mode</button>
                </div>
            `;
            updateControls();
            return;
        }

        if (!currentList || currentList.length === 0) {
            cardArea.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-file-circle-question" style="font-size:2.5rem; color:var(--border-color); margin-bottom:10px;"></i>
                    <p>No questions found.</p>
                    ${currentSearchTerm ? '<button class="nav-btn" onclick="clearSearch()" style="margin-top: 10px; margin-inline:auto;">Clear Search</button>' : ''}
                    ${(isQuickModeActive || isMistakesFilterActive || isBookmarkFilterActive || isWeakSpotModeActive) ? '<button class="nav-btn" onclick="clearAllFilters()" style="margin-top: 10px; margin-inline:auto;">Clear Filters</button>' : ''}
                </div>`;
            updateControls();
            return;
        }

        const q = currentList[index];

        // Access Guard Check: Guests limited to loginLimit; logged-in users get full free MCQs
        if (window.HPGK_Guard) {
            const totalAnswered = Object.keys(historyState.answers || {}).length;
            const loginLimit = (window.PAGE_ACCESS && window.PAGE_ACCESS.loginLimit !== undefined)
                ? Number(window.PAGE_ACCESS.loginLimit)
                : 30;

            const originalIndex = window.quizData.findIndex(item => item.id == q.id);
            let access = window.HPGK_Guard.checkAccess(originalIndex !== -1 ? originalIndex : index);

            if (!isUserAuthenticated() && totalAnswered >= loginLimit && historyState.answers[q.id] === undefined) {
                access = { status: 'blocked_login', limit: loginLimit };
            }

            if (access.status !== 'allowed') {
                window.HPGK_Guard.showBlocker(cardArea, access);
                updateControls(true);
                return;
            }
        }

        const savedAnswer = historyState.answers[q.id];
        const isAnswered = (savedAnswer !== undefined && typeof savedAnswer === 'number');
        const isBookmarked = historyState.bookmarks.some(bId => bId == q.id);
        const fontSize = getFontSize();

        const qEnText = highlightText(q.questionEn, currentSearchTerm);
        const qHiText = highlightText(q.questionHi, currentSearchTerm);

        const optionsHtml = q.options.map((opt, i) => {
            let statusClass = '', iconHtml = '';
            if (isAnswered) {
                if (i === q.answer) {
                    statusClass = 'correct';
                    iconHtml = '<span class="status-icon"><i class="fa-solid fa-check"></i></span>';
                } else if (i === savedAnswer) {
                    statusClass = 'wrong';
                    iconHtml = '<span class="status-icon"><i class="fa-solid fa-xmark"></i></span>';
                }
            }
            return `
                <div class="option-btn ${statusClass} ${isAnswered ? 'disabled' : ''}"
                     style="font-size: ${fontSize};" onclick="handleAnswer(this, '${q.id}', ${i})">
                    <span>${highlightText(opt, currentSearchTerm)}</span>
                    ${iconHtml}
                </div>`;
        }).join('');

        let feedbackHtml = '';
        if (isAnswered) {
            const isCorrect = savedAnswer === q.answer;
            const text = isCorrect ? 'Correct!' : `Correct: ${q.options[q.answer]}`;
            const bgClass = isCorrect ? 'correct-feed' : 'wrong-feed';

            let explToggleBtn = '';
            if (q.explanation) {
                explToggleBtn = `
                <div class="expl-wrapper">
                    <button class="expl-btn" onclick="toggleExpl('${q.id}')" title="View Explanation">
                        <i class="fa-solid fa-lightbulb"></i>
                    </button>
                    <div id="expl-${q.id}" class="explanation-tooltip" style="font-size: ${fontSize};">
                        <strong>Explanation</strong>
                        ${q.explanation.replace(/\n/g, '<br>')}
                    </div>
                </div>`;
            }

            feedbackHtml = `
            <div class="feedback-row">
                <div class="feedback-msg ${bgClass}" style="font-size: ${fontSize};">${text}</div>
                ${explToggleBtn}
            </div>`;
        }

        const listClass = isAnswered ? 'options-list answered' : 'options-list';
        const statusDisplay = isAnswered ? (savedAnswer === q.answer ? '<i class="fa-solid fa-check"></i> Solved' : '<i class="fa-solid fa-xmark"></i> Review') : 'Pending';
        const bookmarkIconClass = isBookmarked ? 'fa-solid fa-bookmark active' : 'fa-regular fa-bookmark';

        const weakSpotTag = isWeakSpotModeActive
            ? `<span style="font-size:0.6rem; font-weight:800; background:rgba(239,68,68,0.15); color:var(--danger); padding:2px 6px; border-radius:4px; margin-left:6px;"><i class="fa-solid fa-bolt"></i> WEAK-SPOT BOOSTER</span>`
            : '';

        cardArea.innerHTML = `
            <div class="q-meta">
                <span class="q-id">Q. ${q.id} ${weakSpotTag}</span>
                <span class="q-actions">
                    <span class="q-status">${statusDisplay}</span>
                    <i class="fa-solid fa-share-nodes share-icon" onclick="shareQuestion('${q.id}')" title="Share"></i>
                    <i class="${bookmarkIconClass} bookmark-icon" onclick="toggleBookmark('${q.id}')" title="Bookmark"></i>
                </span>
            </div>
            <div class="q-text-en" style="font-size:${fontSize}">${qEnText}</div>
            <div class="q-text-hi" style="font-size:${fontSize}">${qHiText}</div>
            <div class="${listClass}">
                ${optionsHtml}
            </div>
            ${feedbackHtml}
        `;

        if (!currentSearchTerm && !isBookmarkFilterActive && !isMistakesFilterActive && !isShuffleActive && !isQuickModeActive && !isWeakSpotModeActive) {
            historyState.lastIndex = currentIndex;
            saveToStorage();
        }
        updateControls();
    }

    window.clearAllFilters = function() {
        isBookmarkFilterActive = false;
        isMistakesFilterActive = false;
        isShuffleActive = false;
        isQuickModeActive = false;
        isWeakSpotModeActive = false;
        if (bookmarkFilterBtn) bookmarkFilterBtn.classList.remove('active');
        if (mistakeFilterBtn) mistakeFilterBtn.classList.remove('active');
        if (shuffleBtn) shuffleBtn.classList.remove('active');
        if (quickModeBtn) quickModeBtn.classList.remove('active');
        sessionStorage.removeItem('hpgk_weak_spots');

        if (window.location.search.includes('mode=weakspot')) {
            const cleanUrl = new URL(window.location.href);
            cleanUrl.searchParams.delete('mode');
            window.history.replaceState({}, '', cleanUrl.toString());
        }
        applyFilters(true);
    };

    window.toggleBookmark = function(qId) {
        const normalizedId = isNaN(Number(qId)) ? String(qId) : Number(qId);
        const idx = historyState.bookmarks.findIndex(bId => bId == normalizedId);
        if (idx > -1) {
            historyState.bookmarks.splice(idx, 1);
        } else {
            historyState.bookmarks.push(normalizedId);
        }
        saveToStorage();
        loadQuestion(currentIndex);
        if (isBookmarkFilterActive) applyFilters(false);
    };

    window.toggleBookmarkFilter = function() {
        isBookmarkFilterActive = !isBookmarkFilterActive;
        if (bookmarkFilterBtn) {
            bookmarkFilterBtn.classList.toggle('active', isBookmarkFilterActive);
            bookmarkFilterBtn.innerHTML = isBookmarkFilterActive ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>';
        }
        disableOtherFilters('bookmark');
        applyFilters(true);
    };

    window.toggleMistakeFilter = function() {
        isMistakesFilterActive = !isMistakesFilterActive;
        if (mistakeFilterBtn) mistakeFilterBtn.classList.toggle('active', isMistakesFilterActive);
        disableOtherFilters('mistake');
        applyFilters(true);
    };

    window.toggleShuffle = function() {
        isShuffleActive = !isShuffleActive;
        if (shuffleBtn) shuffleBtn.classList.toggle('active', isShuffleActive);
        applyFilters(true);
    };

    window.toggleQuickMode = function(forceOn = null) {
        if (forceOn === 'start' || forceOn === true) isQuickModeActive = true;
        else if (forceOn === 'stop' || forceOn === false) isQuickModeActive = false;
        else isQuickModeActive = !isQuickModeActive;

        if (quickModeBtn) quickModeBtn.classList.toggle('active', isQuickModeActive);
        quickSessionScore = 0;
        disableOtherFilters('quick');
        if (isQuickModeActive && quizWidgetWrapper) {
            quizWidgetWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        applyFilters(true);
    };

    window.continueQuickMode = function() {
        quickSessionScore = 0;
        applyFilters(true);
    };

    function disableOtherFilters(active) {
        if (active !== 'bookmark') {
            isBookmarkFilterActive = false;
            if (bookmarkFilterBtn) {
                bookmarkFilterBtn.classList.remove('active');
                bookmarkFilterBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
            }
        }
        if (active !== 'mistake') {
            isMistakesFilterActive = false;
            if (mistakeFilterBtn) mistakeFilterBtn.classList.remove('active');
        }
        if (active !== 'quick') {
            isQuickModeActive = false;
            if (quickModeBtn) quickModeBtn.classList.remove('active');
        }
    }

    function applyFilters(resetIndex = false) {
        if (!window.quizData) return;
        let filtered = [...window.quizData];

        // 0. WEAK-SPOT BOOSTER FILTER (Only when explicitly launched via ?mode=weakspot)
        const urlParams = new URLSearchParams(window.location.search);
        const savedWeakSpotsRaw = sessionStorage.getItem('hpgk_weak_spots');
        if (urlParams.get('mode') === 'weakspot') {
            isWeakSpotModeActive = true;
            let weakCategories = [];
            try { weakCategories = JSON.parse(savedWeakSpotsRaw) || []; } catch (e) {}

            if (weakCategories.length > 0) {
                const categoryFiltered = filtered.filter(q => {
                    const cat = (q.category || (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category) || '').toLowerCase();
                    return weakCategories.some(wc => cat.includes(wc.toLowerCase()));
                });
                if (categoryFiltered.length > 0) filtered = categoryFiltered;
            }

            for (let i = filtered.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
            }
            filtered = filtered.slice(0, QUICK_LIMIT);
        } else {
            isWeakSpotModeActive = false;
            if (savedWeakSpotsRaw) {
                sessionStorage.removeItem('hpgk_weak_spots');
            }
        }

        // 1. POOL RESTRICTOR: Guests restricted to loginLimit; logged-in users get FULL MCQ pool
        const isLoggedIn = isUserAuthenticated();
        const loginLimit = (window.PAGE_ACCESS && window.PAGE_ACCESS.loginLimit !== undefined)
            ? Number(window.PAGE_ACCESS.loginLimit)
            : 30;

        if ((isShuffleActive || isQuickModeActive) && !isWeakSpotModeActive && !isLoggedIn) {
            filtered = filtered.slice(0, loginLimit);
        }

        // 2. Fisher-Yates Shuffle Logic
        if (isShuffleActive && !isWeakSpotModeActive) {
            for (let i = filtered.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
            }
        } else if (!isWeakSpotModeActive) {
            filtered.sort((a, b) => a.id - b.id);
        }

        // 3. BOOKMARK & MISTAKE FILTERS
        if (isBookmarkFilterActive) {
            filtered = filtered.filter(q => historyState.bookmarks.some(bId => bId == q.id));
        } else if (isMistakesFilterActive) {
            filtered = filtered.filter(q => historyState.answers[q.id] !== undefined && historyState.answers[q.id] !== q.answer);
        }

        // 4. SEARCH FILTER
        if (currentSearchTerm) {
            filtered = filtered.filter(q => {
                const en = q.questionEn ? q.questionEn.toLowerCase() : '';
                const hi = q.questionHi ? q.questionHi.toLowerCase() : '';
                const opts = q.options ? q.options.join(' ').toLowerCase() : '';
                const id = q.id ? q.id.toString() : '';
                return en.includes(currentSearchTerm) || hi.includes(currentSearchTerm) || opts.includes(currentSearchTerm) || id.includes(currentSearchTerm);
            });
        }

        // 5. QUICK MODE EXTRACTOR
        if (isQuickModeActive && !isWeakSpotModeActive) {
            filtered = filtered.filter(q => historyState.answers[q.id] === undefined);
            if (!isShuffleActive) {
                for (let i = filtered.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
                }
            }
            filtered = filtered.slice(0, QUICK_LIMIT);
        }

        currentList = filtered;
        if (resetIndex) {
            currentIndex = 0;
        } else if (currentIndex >= currentList.length) {
            currentIndex = Math.max(0, currentList.length - 1);
            if (currentIndex < 0) currentIndex = 0;
        }
        loadQuestion(currentIndex);
    }

    window.handleAnswer = function(btn, qId, choiceIndex) {
        if (!currentList || !currentList[currentIndex]) return;
        const q = currentList[currentIndex];
        if (historyState.answers[qId] !== undefined) return;
        if ((isQuickModeActive || isWeakSpotModeActive) && q.answer === choiceIndex) {
            quickSessionScore++;
        }

        historyState.answers[qId] = choiceIndex;

        saveToStorage();
        updateStats();
        loadQuestion(currentIndex);
        triggerCloudSync();
    };

    window.shareQuestion = async function(qId) {
        const q = window.quizData.find(item => item.id == qId);
        if (!q) return;
        const link = `${window.location.origin}${window.location.pathname}?id=${qId}`;
        const msg = `Can you solve this HPGK question?\n\nQ: ${q.questionEn}\n\nAttempt here: ${link}`;
        if (navigator.share) {
            try { await navigator.share({ title: 'HPGK Challenge', text: msg, url: link }); } catch (err) {}
        } else {
            try {
                await navigator.clipboard.writeText(msg);
                if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                    window.HPGK_Layout.showToast('Link copied to clipboard!');
                }
            } catch (err) {
                if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
                    window.HPGK_Layout.showToast('Could not copy link.');
                }
            }
        }
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentQ = currentList[currentIndex];
            const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
            if (!isAnswered && !isQuickModeActive && !isWeakSpotModeActive) {
                if (cardArea) {
                    cardArea.classList.remove('apply-shake');
                    void cardArea.offsetWidth;
                    cardArea.classList.add('apply-shake');
                }
                return;
            }
            if ((isQuickModeActive || isWeakSpotModeActive) && currentIndex === currentList.length - 1 && isAnswered) {
                currentIndex++;
                loadQuestion(currentIndex);
            } else if (currentIndex < currentList.length - 1) {
                currentIndex++;
                loadQuestion(currentIndex);
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                loadQuestion(currentIndex);
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        const isSearchFocused = searchInput && document.activeElement === searchInput;
        if (!isSearchFocused) {
            if (e.key === 'ArrowRight') {
                const currentQ = currentList[currentIndex];
                const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
                if (nextBtn && !nextBtn.disabled && (isAnswered || isQuickModeActive || isWeakSpotModeActive)) {
                    nextBtn.click();
                } else if (cardArea && !isAnswered) {
                    cardArea.classList.remove('apply-shake');
                    void cardArea.offsetWidth;
                    cardArea.classList.add('apply-shake');
                }
            }
            if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.disabled) {
                prevBtn.click();
            }
        }
    });

    function updateControls(isLocked = false) {
        if (!prevBtn || !nextBtn || !progressText) return;

        if (isLocked) {
            prevBtn.disabled = false;
            nextBtn.disabled = true;
            progressText.innerText = "Login Required";
            if (progressFill) {
                progressFill.style.width = "100%";
                progressFill.style.backgroundColor = "var(--accent)";
            }
            return;
        } else if (progressFill) {
            progressFill.style.backgroundColor = "var(--primary)";
        }

        const isDone = (isQuickModeActive || isWeakSpotModeActive) && currentIndex >= currentList.length;
        prevBtn.disabled = currentIndex === 0 || isDone;
        const currentQ = currentList[currentIndex];
        const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
        nextBtn.disabled = (currentIndex === currentList.length - 1 && !isQuickModeActive && !isWeakSpotModeActive) || isDone || !isAnswered;
        progressText.innerText = isDone ? "Done" : `${currentIndex + 1} / ${currentList.length}`;

        if (progressFill) {
            progressFill.style.width = isDone ? "100%" : `${((currentIndex + 1) / currentList.length) * 100}%`;
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            if (searchContainer) {
                searchContainer.classList.toggle('active', currentSearchTerm.length > 0);
            }
            applyFilters(true);
        });
    }

    window.clearSearch = function() {
        if (searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
        }
    };

    function saveToStorage() {
        localStorage.setItem(getStorageKey(), JSON.stringify(historyState));
    }

    function loadFromStorage() {
        const saved = localStorage.getItem(getStorageKey());
        if (saved) {
            try {
                historyState = JSON.parse(saved);
                if (!historyState.answers) historyState.answers = {};
                if (!historyState.bookmarks) historyState.bookmarks = [];
            } catch (e) {
                historyState = { lastIndex: 0, answers: {}, bookmarks: [] };
            }
        } else {
            historyState = { lastIndex: 0, answers: {}, bookmarks: [] };
        }
    }

    window.resetProgress = function() {
        localStorage.removeItem(getStorageKey());
        if (window.HPGK_Layout && typeof window.HPGK_Layout.showToast === 'function') {
            window.HPGK_Layout.showToast('Quiz history reset for this section.');
        }
        setTimeout(() => { location.reload(); }, 600);
    };

    function initQuizNow() {
        migrateGuestProgressIfNeeded();
        loadFromStorage();
        if (window.quizData && window.quizData.length > 0) {
            window.quizData.sort((a, b) => a.id - b.id);
            currentList = [...window.quizData];

            const { validDoneCount } = getValidProgressStats();
            lastSyncedCount = validDoneCount;

            const urlParams = new URLSearchParams(window.location.search);
            const sharedId = urlParams.get('id');
            if (sharedId) {
                const target = currentList.findIndex(q => q.id == sharedId);
                if (target !== -1) { currentIndex = target; }
            } else {
                currentIndex = (historyState.lastIndex && historyState.lastIndex < currentList.length) ? historyState.lastIndex : 0;
            }

            applyFilters(false);
            updateStats();
        } else if (cardArea) {
            cardArea.innerHTML = `<div class="empty-state"><p>No Data Loaded</p></div>`;
        }
    }
})();
