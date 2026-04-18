// Wrapping ENTIRE logic inside an IIFE (Immediately Invoked Function Expression)
// This strictly isolates the quiz logic from the global environment.
(function() {
    const STORAGE_KEY = 'agri_vantage_history_v1';
    
    // 🔥 SMART FREE LIMIT CONFIGURATION (Freemium Model)
    // Defaults to 50, but can be overridden in HTML via: window.PAGE_FREE_LIMIT = 20;
    const freeLimit = (window.PAGE_FREE_LIMIT !== undefined) ? window.PAGE_FREE_LIMIT : 50;
    
    let currentList = [];
    let currentIndex = 0;
    let historyState = { lastIndex: 0, answers: {}, bookmarks: [] };
    
    // Default font size strictly set to 12px as requested
    let currentFontSizePx = 12; 
    
    let currentSearchTerm = '';
    let isBookmarkFilterActive = false;
    let isMistakesFilterActive = false;
    let isShuffleActive = false;
    let isQuickModeActive = false;
    let quickSessionScore = 0;
    const QUICK_LIMIT = 10;

    // 🔥 FIREBASE VARIABLES
    let isUserLoggedIn = false;
    let currentUserUid = null;
    let db = null;

    // DOM Elements
    const cardArea = document.getElementById('cardArea');
    const quizContent = document.getElementById('quizContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const searchInput = document.getElementById('searchInput');
    const searchContainer = document.getElementById('searchContainer');
    const jumpTrigger = document.getElementById('jumpTrigger');
    const bookmarkFilterBtn = document.getElementById('bookmarkFilterBtn');
    const mistakeFilterBtn = document.getElementById('mistakeFilterBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const quickModeBtn = document.getElementById('quickModeBtn');
    const quizWidgetWrapper = document.getElementById('quizWidgetWrapper');

    // ------------------------------------------------------------------
    // 🔥 FIREBASE INITIALIZATION & SCORE SYNC
    // ------------------------------------------------------------------
    async function initQuizFirebase() {
        try {
            const { initializeApp, getApps, getApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
            const { getAuth, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
            const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");

            const firebaseConfig = {
                apiKey: "AIzaSyDfz5Y4oVQHl-crnATIv5dMWsw7edSKddQ",
                authDomain: "hpgk-quiz.firebaseapp.com",
                projectId: "hpgk-quiz",
                storageBucket: "hpgk-quiz.firebasestorage.app",
                messagingSenderId: "273909571419",
                appId: "1:273909571419:web:20d5e06d8b582f4d2dc47e"
            };

            // Safely initialize Firebase
            const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
            const auth = getAuth(app);
            db = getFirestore(app);

            onAuthStateChanged(auth, (user) => {
                isUserLoggedIn = !!user;
                currentUserUid = user ? user.uid : null;
                
                if (isUserLoggedIn) {
                    loadQuestion(currentIndex); // Refresh UI to remove paywall if active
                    syncScoreToFirebase(); // Sync any local offline progress immediately
                }
            });
        } catch (e) {
            console.error("Firebase Quiz Engine Init Failed:", e);
        }
    }

    async function syncScoreToFirebase() {
        if (!isUserLoggedIn || !currentUserUid || !db) return;

        let validDoneCount = 0;
        let validCorrectCount = 0;

        if (window.quizData) {
            window.quizData.forEach(q => {
                if (historyState.answers[q.id] !== undefined && historyState.answers[q.id] !== null) {
                    validDoneCount++;
                    if (historyState.answers[q.id] === q.answer) {
                        validCorrectCount++;
                    }
                }
            });
        }

        if (validDoneCount === 0) return;

        try {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");

            // Explicitly set category name for Agriculture Dashboard
            const rawCategory = 'Agriculture Quiz';
            const docId = 'agriculture-quiz';

            const docRef = doc(db, 'artifacts', 'hpgk-quiz', 'users', currentUserUid, 'scores', docId);

            await setDoc(docRef, {
                category: rawCategory,
                score: validCorrectCount,
                total: validDoneCount,
                timestamp: Date.now()
            }, { merge: true });

        } catch (e) {
            console.error("Error syncing score:", e);
        }
    }

    // Cross-Communication Theme Logic with layout.js
    window.handleLocalThemeToggle = function() {
        if (typeof window.toggleTheme === 'function') {
            window.toggleTheme(); // Use global toggle if available
        } else {
            // Fallback if layout.js fails
            const html = document.documentElement;
            const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        }
        updateLocalThemeIcon(document.documentElement.getAttribute('data-theme'));
    };

    function updateLocalThemeIcon(theme) {
        const btn = document.getElementById('widgetThemeBtn');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }
        // Force update global header theme button if it exists
        const globalBtn = document.getElementById('themeBtn');
        if (globalBtn) {
            globalBtn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }
    }

    // Export Progress
    window.exportProgress = function() {
        const dataStr = JSON.stringify(historyState);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'agriquiz_backup.json');
        linkElement.click();
    }

    // Import Progress
    window.importProgress = function(input) {
        const file = input.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const contents = JSON.parse(e.target.result);
                if (contents && contents.answers) {
                    historyState = contents;
                    if(!historyState.bookmarks) {
                        historyState.bookmarks = [];
                    }
                    saveToStorage();
                    
                    if (historyState.lastIndex && historyState.lastIndex < currentList.length) {
                        currentIndex = historyState.lastIndex;
                    } else {
                        currentIndex = 0;
                    }
                    
                    applyFilters(); 
                    updateStats();
                    syncScoreToFirebase(); // 🔥 Sync restored progress to DB
                    alert('Progress restored successfully!');
                } else {
                    alert('Invalid backup file. Please ensure it is a valid AgriQuiz JSON file.');
                }
            } catch(err) { 
                alert('Error reading file. Please try again.'); 
            }
        };
        reader.readAsText(file);
        input.value = ''; // Reset input
    }

    // Font Adjustments (Strictly clamped between 12px and 15px)
    window.adjustFont = function(dir) {
        currentFontSizePx += dir;
        if (currentFontSizePx > 15) currentFontSizePx = 15;
        if (currentFontSizePx < 12) currentFontSizePx = 12;
        loadQuestion(currentIndex);
    }

    function getFontSize() {
        return `${currentFontSizePx}px`;
    }

    // Explanation Tooltip Toggle (Synced with main.js)
    window.toggleExpl = function(qId) {
        const tooltip = document.getElementById(`expl-${qId}`);
        if (tooltip) {
            tooltip.classList.toggle('show');
        }
    };

    // Update Statistics
    function updateStats() {
        const total = window.quizData.length;
        const completedIds = Object.keys(historyState.answers);
        let correctCount = 0;
        
        completedIds.forEach(id => {
            const q = window.quizData.find(item => item.id == id);
            if (q && q.answer === historyState.answers[id]) {
                correctCount++;
            }
        });
        
        const completedCount = completedIds.length;
        const accuracy = completedCount > 0 ? Math.round((correctCount / completedCount) * 100) : 0;
        
        document.getElementById('statDone').innerText = completedCount;
        document.getElementById('statLeft').innerText = total - completedCount;
        document.getElementById('statCorrect').innerText = correctCount;
        document.getElementById('statWrong').innerText = completedCount - correctCount;
        document.getElementById('statAccuracy').innerText = accuracy + '%';
    }

    // Highlight search terms
    function highlightText(text, term) {
        if (!term || term.length < 2) return text;
        const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeTerm})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    // Load specific question
    function loadQuestion(index) {
        if (!quizContent || !cardArea) return;
        quizContent.scrollTop = 0;

        // 🔥 FREEMIUM PAYWALL LOGIC
        if (index >= freeLimit && !isUserLoggedIn) {
            cardArea.innerHTML = `
                <div class="empty-state glass-panel" style="border: 2px solid var(--accent); padding: 35px 20px; box-sizing: border-box; width: 100%;">
                    <i class="fa-solid fa-lock" style="font-size: 3.5rem; color: var(--accent); margin-bottom: 20px;"></i>
                    <h2 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--text-main); font-weight: 800;">Premium Content Locked</h2>
                    <p style="color: var(--text-body); margin-bottom: 25px; font-size: 0.95rem; line-height: 1.6;">
                        Awesome progress! 🎉 You've reached the free limit of <strong>${freeLimit} questions</strong>.<br><br>
                        Login for <strong>FREE</strong> to unlock hundreds of premium Agriculture MCQs and track your accuracy on your personalized Dashboard.
                    </p>
                    <button class="login-btn" style="margin: 0 auto; padding: 12px 30px; font-size: 1.05rem;" onclick="if(window.loginWithGoogle) window.loginWithGoogle()">
                        <i class="fa-brands fa-google"></i> Login to Unlock
                    </button>
                </div>
            `;
            updateControls(true); // Tell controls to lock the next button
            return;
        }

        // Quick Mode Completion State
        if (isQuickModeActive && index >= currentList.length) {
            cardArea.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-trophy" style="color:var(--accent); font-size:2.5rem; margin-bottom:10px;"></i>
                    <p style="font-size:1rem; font-weight:700; margin:0;">Quick Session Complete!</p>
                    <div class="summary-score">${quickSessionScore} / ${currentList.length}</div>
                    <button class="summary-btn" onclick="continueQuickMode()">Next 10 <i class="fa-solid fa-arrow-right"></i></button>
                    <br><br>
                    <button style="background:transparent; color:var(--text-sec); font-size:0.75rem; border:none; cursor:pointer;" onclick="toggleQuickMode(false)">Exit Quick Mode</button>
                </div>
            `;
            updateControls(); 
            return;
        }

        // Empty States Handling
        if (!currentList || currentList.length === 0) {
            let message = '';
            let subMsg = '';
            
            if (isQuickModeActive) {
                message = `All caught up!`;
                subMsg = `You have answered all available questions. Try reviewing your mistakes.`;
            } else if (isMistakesFilterActive) {
                message = `Great job! No mistakes found.`;
                subMsg = `<span style="font-size:0.75em; color:var(--text-sec)">Any questions you answer incorrectly will appear here for review.</span>`;
            } else if (isBookmarkFilterActive) {
                message = `No bookmarks found.`;
                subMsg = `<span style="font-size:0.75em; color:var(--text-sec)">Tap the <i class="fa-regular fa-bookmark"></i> icon on any question to save it here.</span>`;
            } else {
                message = `No matches found for "<strong>${currentSearchTerm}</strong>"`;
            }

            cardArea.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-file-circle-question" style="font-size:2.5rem; color:var(--border-color); margin-bottom:10px;"></i>
                    <p>${message}</p>
                    ${subMsg ? `<p>${subMsg}</p>` : ''}
                    ${currentSearchTerm ? '<button class="nav-btn" onclick="clearSearch()" style="margin-top: 10px; margin-inline:auto;">Clear Search</button>' : ''}
                    ${isQuickModeActive ? '<br><button class="nav-btn" onclick="toggleQuickMode(false)" style="margin-top: 10px; margin-inline:auto;">Exit Quick Mode</button>' : ''}
                </div>`;
            updateControls();
            return;
        }

        // Prepare Data for current question
        const q = currentList[index];
        const savedAnswer = historyState.answers[q.id];
        const isAnswered = (savedAnswer !== undefined && typeof savedAnswer === 'number');
        const isBookmarked = historyState.bookmarks.includes(q.id);
        const fontSize = getFontSize();
        
        const qEnText = highlightText(q.questionEn, currentSearchTerm);
        const qHiText = highlightText(q.questionHi, currentSearchTerm);

        // Generate Options HTML
        const optionsHtml = q.options.map((opt, i) => {
            let statusClass = ''; 
            let iconHtml = '';
            
            if (isAnswered) {
                if (i === q.answer) { 
                    statusClass = 'correct'; 
                    iconHtml = '<span class="status-icon"><i class="fa-solid fa-check"></i></span>'; 
                } else if (i === savedAnswer) { 
                    statusClass = 'wrong'; 
                    iconHtml = '<span class="status-icon"><i class="fa-solid fa-xmark"></i></span>'; 
                }
            }
            
            const optText = highlightText(opt, currentSearchTerm);
            return `
                <div class="option-btn ${statusClass} ${isAnswered ? 'disabled' : ''}" 
                     style="font-size: ${fontSize};" 
                     onclick="handleAnswer(this, '${q.id}', ${i})">
                    <span>${optText}</span>
                    ${iconHtml}
                </div>
            `;
        }).join('');

        // Dynamic Feedback & Tooltip HTML
        let feedbackHtml = '';
        if (isAnswered) {
            const isCorrect = savedAnswer === q.answer;
            const text = isCorrect ? 'Correct!' : `Correct: ${q.options[q.answer]}`;
            const bgClass = isCorrect ? 'correct-feed' : 'wrong-feed';
            
            // Explanation Tooltip Logic
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

        // Status & Bookmark classes
        const listClass = isAnswered ? 'options-list answered' : 'options-list';
        const statusDisplay = isAnswered 
            ? (savedAnswer === q.answer ? '<i class="fa-solid fa-check"></i> Solved' : '<i class="fa-solid fa-xmark"></i> Review') 
            : 'Pending';
        const bookmarkIconClass = isBookmarked ? 'fa-solid fa-bookmark active' : 'fa-regular fa-bookmark';

        // Main HTML Assignment
        cardArea.innerHTML = `
            <div class="q-meta">
                <span class="q-id">Q. ${q.id}</span>
                <span class="q-actions">
                    <span class="q-status">${statusDisplay}</span>
                    <i class="fa-solid fa-share-nodes share-icon" onclick="shareQuestion('${q.id}')" title="Share Question"></i>
                    <i class="${bookmarkIconClass} bookmark-icon" onclick="toggleBookmark('${q.id}')" title="Bookmark Question"></i>
                </span>
            </div>
            <div class="q-text-en" style="font-size:${fontSize}">${qEnText}</div>
            <div class="q-text-hi" style="font-size:${fontSize}">${qHiText}</div>
            <div class="${listClass}" id="opts-${q.id}">
                ${optionsHtml}
            </div>
            ${feedbackHtml}
        `;

        // Save last index if not actively filtering/searching
        if (!currentSearchTerm && !isBookmarkFilterActive && !isMistakesFilterActive && !isShuffleActive && !isQuickModeActive) { 
            historyState.lastIndex = currentIndex; 
            saveToStorage(); 
        }
        
        updateControls();
    }

    // Toggle logic functions
    window.clearAllFilters = function() {
        isBookmarkFilterActive = false; 
        isMistakesFilterActive = false; 
        isShuffleActive = false; 
        isQuickModeActive = false;
        if(bookmarkFilterBtn) {
            bookmarkFilterBtn.classList.remove('active');
            bookmarkFilterBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        }
        if(mistakeFilterBtn) mistakeFilterBtn.classList.remove('active');
        if(shuffleBtn) shuffleBtn.classList.remove('active');
        if(quickModeBtn) quickModeBtn.classList.remove('active');
        applyFilters(true);
    };

    window.toggleBookmark = function(qId) {
        qId = parseInt(qId); 
        const idx = historyState.bookmarks.indexOf(qId);
        if (idx > -1) {
            historyState.bookmarks.splice(idx, 1); 
        } else {
            historyState.bookmarks.push(qId);
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
        if(mistakeFilterBtn) mistakeFilterBtn.classList.toggle('active', isMistakesFilterActive); 
        disableOtherFilters('mistake');
        applyFilters(true); 
    };

    window.toggleShuffle = function() { 
        isShuffleActive = !isShuffleActive; 
        if(shuffleBtn) shuffleBtn.classList.toggle('active', isShuffleActive); 
        applyFilters(true); 
    };

    window.toggleQuickMode = function(forceOn = null) { 
        isQuickModeActive = forceOn !== null ? forceOn : !isQuickModeActive; 
        if(quickModeBtn) quickModeBtn.classList.toggle('active', isQuickModeActive); 
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

    // Disable mutually exclusive filters
    function disableOtherFilters(active) {
        if (active !== 'bookmark') {
            isBookmarkFilterActive = false;
            if(bookmarkFilterBtn) {
                bookmarkFilterBtn.classList.remove('active');
                bookmarkFilterBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
            }
        }
        if (active !== 'mistake') {
            isMistakesFilterActive = false;
            if(mistakeFilterBtn) mistakeFilterBtn.classList.remove('active');
        }
        if (active !== 'quick') {
            isQuickModeActive = false;
            if(quickModeBtn) quickModeBtn.classList.remove('active');
        }
    }

    // Apply all active filters
    function applyFilters(resetIndex = false) {
        if (!window.quizData) return;
        let filtered = [...window.quizData];
        
        // Shuffle
        if (isShuffleActive) { 
            for (let i = filtered.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [filtered[i], filtered[j]] = [filtered[j], filtered[i]]; 
            } 
        } else {
            filtered.sort((a, b) => a.id - b.id);
        }
        
        // Pre-filters
        if (isBookmarkFilterActive) {
            filtered = filtered.filter(q => historyState.bookmarks.includes(q.id));
        } else if (isMistakesFilterActive) {
            filtered = filtered.filter(q => historyState.answers[q.id] !== undefined && historyState.answers[q.id] !== q.answer);
        }
        
        // Search
        if (currentSearchTerm) {
            filtered = filtered.filter(q => {
                const en = q.questionEn ? q.questionEn.toLowerCase() : '';
                const hi = q.questionHi ? q.questionHi.toLowerCase() : '';
                const opts = q.options ? q.options.join(' ').toLowerCase() : '';
                const id = q.id ? q.id.toString() : '';
                return en.includes(currentSearchTerm) || hi.includes(currentSearchTerm) || opts.includes(currentSearchTerm) || id.includes(currentSearchTerm);
            });
        }
        
        // Quick Mode limit
        if (isQuickModeActive) { 
            filtered = filtered.filter(q => historyState.answers[q.id] === undefined); 
            filtered = filtered.slice(0, QUICK_LIMIT); 
        }
        
        currentList = filtered; 
        
        if (resetIndex) {
            currentIndex = 0; 
        } else {
            if (currentIndex >= currentList.length) {
                currentIndex = Math.max(0, currentList.length - 1);
                if(currentIndex < 0) currentIndex = 0;
            }
        }
        loadQuestion(currentIndex);
    }

    // Share functionality
    window.shareQuestion = async function(qId) {
        const q = window.quizData.find(item => item.id == qId);
        if (!q) return;

        const link = `${window.location.origin}${window.location.pathname}?id=${qId}`;
        const msg = `Can you solve this Agriculture question? 🤔\n\nQ: ${q.questionEn}\n\n👉 Attempt here: ${link}`;
        
        if (navigator.share) {
            try { 
                await navigator.share({ title: 'AgriQuiz Challenge', text: msg, url: link }); 
            } catch (err) {
                // Ignore DOMException if user cancels
            }
        } else { 
            try { 
                await navigator.clipboard.writeText(msg); 
                alert('Question link copied to clipboard!'); 
            } catch (err) {
                alert('Could not copy link.');
            } 
        }
    };

    // User interaction handling
    window.handleAnswer = function(btn, qId, choiceIndex) {
        if (historyState.answers[qId] !== undefined) return; // Prevent double answering
        
        if (isQuickModeActive) {
            const currentQ = window.quizData.find(q => q.id == qId);
            if (currentQ && currentQ.answer === choiceIndex) {
                quickSessionScore++;
            }
        }
        
        historyState.answers[qId] = choiceIndex; 
        saveToStorage(); 
        updateStats(); 
        loadQuestion(currentIndex);
        syncScoreToFirebase(); // 🔥 Trigger save to Database instantly
    };

    // Event Listeners for Navigation
    if (nextBtn) {
        nextBtn.addEventListener('click', () => { 
            const currentQ = currentList[currentIndex];
            const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
            if (!isAnswered && !isQuickModeActive) {
                if(cardArea) { 
                    cardArea.classList.remove('apply-shake'); 
                    void cardArea.offsetWidth; 
                    cardArea.classList.add('apply-shake'); 
                }
                return; 
            }
            if (isQuickModeActive && currentIndex === currentList.length - 1 && isAnswered) { 
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

    if (jumpTrigger) {
        jumpTrigger.addEventListener('click', () => { 
            if (isQuickModeActive) return; 
            if (currentList.length === 0) return;
            
            const p = prompt(`Enter Question Number (1 - ${currentList.length}):`); 
            if (p) { 
                const n = parseInt(p); 
                if (!isNaN(n) && n > 0 && n <= currentList.length) { 
                    currentIndex = n - 1; 
                    loadQuestion(currentIndex); 
                } 
            } 
        });
    }

    document.addEventListener('keydown', (e) => {
        const isSearchFocused = searchInput && document.activeElement === searchInput;
        if (!isSearchFocused) {
            if (e.key === 'ArrowRight') {
                const currentQ = currentList[currentIndex];
                const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
                if (nextBtn && !nextBtn.disabled && (isAnswered || isQuickModeActive)) { 
                    nextBtn.click(); 
                } else if (cardArea && !isAnswered) { 
                    cardArea.classList.remove('apply-shake'); 
                    void cardArea.offsetWidth; 
                    cardArea.classList.add('apply-shake'); 
                }
            }
            if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.disabled) prevBtn.click();
        }
    });

    // Update bottom controls
    function updateControls(isLocked = false) {
        if (!prevBtn || !nextBtn || !progressText || !progressFill) return;

        // 🔥 Handle Paywall Lock state
        if (isLocked) {
            prevBtn.disabled = false; // Allow going back to review previous questions
            nextBtn.disabled = true;  // Block going forward
            progressText.innerText = "Locked";
            progressFill.style.width = "100%";
            progressFill.style.backgroundColor = "var(--accent)"; // Turn bar orange to show lock
            return;
        } else {
            progressFill.style.backgroundColor = "var(--primary)";
        }

        const isDone = isQuickModeActive && currentIndex >= currentList.length;
        
        prevBtn.disabled = currentIndex === 0 || isDone;
        
        // Disable next button if at the end, OR if the current question is not answered yet
        const currentQ = currentList[currentIndex];
        const isCurrentAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
        nextBtn.disabled = (currentIndex === currentList.length - 1 && !isQuickModeActive) || isDone || !isCurrentAnswered;
        
        progressText.innerText = isDone ? "Done" : `${currentIndex + 1} / ${currentList.length}`;
        progressFill.style.width = isDone ? "100%" : `${((currentIndex + 1) / currentList.length) * 100}%`;
    }

    // Search events
    if (searchInput) {
        searchInput.addEventListener('input', (e) => { 
            currentSearchTerm = e.target.value.toLowerCase().trim(); 
            if (searchContainer) {
                searchContainer.classList.toggle('active', currentSearchTerm.length > 0); 
            }
            applyFilters(true); 
        });
    }

    window.clearSearch = () => { 
        if (searchInput) {
            searchInput.value = ''; 
            searchInput.dispatchEvent(new Event('input')); 
            searchInput.focus(); 
        }
    };

    // Storage interactions
    function saveToStorage() { 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(historyState)); 
    }
    
    function loadFromStorage() { 
        const saved = localStorage.getItem(STORAGE_KEY); 
        if (saved) { 
            try { 
                historyState = JSON.parse(saved); 
                if (!historyState.answers) historyState.answers = {}; 
                if (!historyState.bookmarks) historyState.bookmarks = []; 
            } catch (e) {
                console.error("Error parsing storage", e);
            } 
        } 
    }
    
    window.resetProgress = function() { 
        if(confirm("Are you sure you want to completely clear your history? This action cannot be undone.")) { 
            localStorage.removeItem(STORAGE_KEY); 
            location.reload(); 
        } 
    };

    // Initialization
    function initQuizNow() {
        loadFromStorage();
        
        if (window.quizData && window.quizData.length > 0) {
            // Sort to ensure sequential order initially
            window.quizData.sort((a, b) => a.id - b.id);
            currentList = [...window.quizData];
            
            // Check for Deep Link (e.g. ?id=15)
            const urlParams = new URLSearchParams(window.location.search);
            const sharedId = urlParams.get('id');
            
            if (sharedId) {
                const target = currentList.findIndex(q => q.id == sharedId);
                if (target !== -1) {
                    currentIndex = target;
                }
            } else {
                // Resume from last index
                currentIndex = historyState.lastIndex || 0;
            }
            
            loadQuestion(currentIndex); 
            updateStats();
        } else {
            if (cardArea) {
                cardArea.innerHTML = `
                    <div style="text-align:center; color:#EF4444; padding:20px; font-size:0.85rem;">
                        <strong>Data Missing</strong><br>
                        Please ensure the <code>part.js</code> files are correctly loaded.
                    </div>`;
            }
        }
    }
    
    // Start Firebase magic and the app
    initQuizFirebase();
    setTimeout(() => { initQuizNow(); }, 100);
})();
