// Wrapping ENTIRE logic inside an IIFE to isolate the quiz logic from the global environment.
(function() {
    // Dynamic Storage Key based on Page Config
    const STORAGE_KEY = (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category) 
        ? `hpgk_${window.QUIZ_CONFIG.category}_v1` 
        : 'hpgk_general_v1';
    
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

    // 🔥 FIREBASE VARIABLES (Sirf Score Save Karne Ke Liye, Login Guard check karega)
    let db = null;
    let currentUserUid = null;

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
    const quizWidgetWrapper = document.querySelector('.quiz-widget-wrapper');

    let bookmarkFilterBtn, mistakeFilterBtn, shuffleBtn, quickModeBtn;

    // ------------------------------------------------------------------
    // 🔥 GUARD COMMUNICATION LINK (Yeh Guard se baat karega)
    // ------------------------------------------------------------------
    window.HPGK_Engine_Refresh = function() {
        // Jab bhi user login karta hai ya pass kharidata hai, Guard is function ko bulayega
        // taaki current question dobara load ho aur paywall hat jaye.
        loadQuestion(currentIndex);
    };

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

            // Sirf UUID store karenge score sync ke liye. Login/Paywall logic Guard handle kar raha hai.
            onAuthStateChanged(auth, (user) => {
                currentUserUid = user ? user.uid : null;
                if (currentUserUid) {
                    syncScoreToFirebase(); // Sync local score immediately upon auth
                }
            });
        } catch (e) {
            console.error("Firebase Quiz Engine Init Failed:", e);
        }
    }

    async function syncScoreToFirebase() {
        // Score saving logic... (Same as before, checking Guard for auth state)
        if (!window.HPGK_Guard || !window.HPGK_Guard.isUserLoggedIn || !currentUserUid || !db) return;

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
            const rawCategory = window.QUIZ_NAME || (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category) || 'General Practice';
            const docId = rawCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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

    window.addEventListener('DOMContentLoaded', () => {
        if (jumpTrigger) jumpTrigger.style.display = 'none'; 
        bookmarkFilterBtn = document.getElementById('bookmarkFilterBtn');
        mistakeFilterBtn = document.getElementById('mistakeFilterBtn');
        shuffleBtn = document.getElementById('shuffleBtn');
        quickModeBtn = document.getElementById('quickModeBtn');

        initQuizFirebase();
        setTimeout(() => { initQuizNow(); }, 100);
    });

    // ... (Help Modal, Backup, Font Adjustments, Stats, Highlight remain unchanged)
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

    window.exportProgress = function() {
        const dataStr = JSON.stringify(historyState);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const catName = window.QUIZ_CONFIG ? window.QUIZ_CONFIG.category : 'backup';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', `hpgk_${catName}_backup.json`);
        linkElement.click();
    }

    window.importProgress = function(input) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const contents = JSON.parse(e.target.result);
                if (contents && contents.answers) {
                    historyState = contents;
                    if(!historyState.bookmarks) historyState.bookmarks = [];
                    saveToStorage();
                    currentIndex = (historyState.lastIndex && historyState.lastIndex < currentList.length) ? historyState.lastIndex : 0;
                    applyFilters(); 
                    updateStats();
                    syncScoreToFirebase();
                    alert('Progress restored successfully!');
                } else {
                    alert('Invalid backup file format.');
                }
            } catch(err) { alert('Error reading file.'); }
        };
        reader.readAsText(file);
        input.value = '';
    }

    window.adjustFont = function(dir) {
        currentFontSizePx += dir;
        if (currentFontSizePx > 15) currentFontSizePx = 15;
        if (currentFontSizePx < 12) currentFontSizePx = 12;
        loadQuestion(currentIndex);
    }

    function getFontSize() { return `${currentFontSizePx}px`; }

    function updateStats() {
        if (!document.getElementById('statDone')) return;
        const total = window.quizData.length;
        let validDoneCount = 0;
        let validCorrectCount = 0;

        window.quizData.forEach(q => {
            if (historyState.answers[q.id] !== undefined && historyState.answers[q.id] !== null) {
                validDoneCount++;
                if (historyState.answers[q.id] === q.answer) {
                    validCorrectCount++;
                }
            }
        });
        
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

    // ------------------------------------------------------------------
    // 🔥 CORE RENDER (GUARD INTEGRATED)
    // ------------------------------------------------------------------
    function loadQuestion(index) {
        if (!quizContent || !cardArea) return;
        quizContent.scrollTop = 0;

        // 🔥 STEP 1: GUARD CHECK (Bouncer se pucho)
        if (window.HPGK_Guard) {
            const access = window.HPGK_Guard.checkAccess(index);
            
            if (access.status !== 'allowed') {
                // Agar Guard ne roka, toh Paywall dikhao aur wapas jao
                window.HPGK_Guard.showPaywall(cardArea, access);
                updateControls(true); // Disable Next Button
                return;
            }
        }

        // 🔥 STEP 2: Normal Quiz Render (Agar Guard ne allowed bola)
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
            updateControls(); return;
        }

        if (!currentList || currentList.length === 0) {
            cardArea.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-file-circle-question" style="font-size:2.5rem; color:var(--border-color); margin-bottom:10px;"></i>
                    <p>No questions found.</p>
                    ${currentSearchTerm ? '<button class="nav-btn" onclick="clearSearch()" style="margin-top: 10px; margin-inline:auto;">Clear Search</button>' : ''}
                    ${(isQuickModeActive || isMistakesFilterActive || isBookmarkFilterActive) ? '<button class="nav-btn" onclick="clearAllFilters()" style="margin-top: 10px; margin-inline:auto;">Clear Filters</button>' : ''}
                </div>`;
            updateControls(); return;
        }

        const q = currentList[index];
        const savedAnswer = historyState.answers[q.id];
        const isAnswered = (savedAnswer !== undefined && typeof savedAnswer === 'number');
        const isBookmarked = historyState.bookmarks.includes(q.id);
        const fontSize = getFontSize();
        
        const qEnText = highlightText(q.questionEn, currentSearchTerm);
        const qHiText = highlightText(q.questionHi, currentSearchTerm);

        const optionsHtml = q.options.map((opt, i) => {
            let statusClass = '', iconHtml = '';
            if (isAnswered) {
                if (i === q.answer) { statusClass = 'correct'; iconHtml = '<span class="status-icon"><i class="fa-solid fa-check"></i></span>'; } 
                else if (i === savedAnswer) { statusClass = 'wrong'; iconHtml = '<span class="status-icon"><i class="fa-solid fa-xmark"></i></span>'; }
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

        cardArea.innerHTML = `
            <div class="q-meta">
                <span class="q-id">Q. ${q.id}</span>
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

        if (!currentSearchTerm && !isBookmarkFilterActive && !isMistakesFilterActive && !isShuffleActive && !isQuickModeActive) { 
            historyState.lastIndex = currentIndex; saveToStorage(); 
        }
        updateControls();
    }

    // ... (All other Handlers, Buttons, Keydowns remain unchanged and intact)
    window.clearAllFilters = function() {
        isBookmarkFilterActive = false; isMistakesFilterActive = false; isShuffleActive = false; isQuickModeActive = false;
        if(bookmarkFilterBtn) bookmarkFilterBtn.classList.remove('active');
        if(mistakeFilterBtn) mistakeFilterBtn.classList.remove('active');
        if(shuffleBtn) shuffleBtn.classList.remove('active');
        if(quickModeBtn) quickModeBtn.classList.remove('active');
        applyFilters(true);
    };

    window.toggleBookmark = function(qId) {
        qId = parseInt(qId); 
        const idx = historyState.bookmarks.indexOf(qId);
        if (idx > -1) { historyState.bookmarks.splice(idx, 1); } else { historyState.bookmarks.push(qId); }
        saveToStorage(); loadQuestion(currentIndex); 
        if (isBookmarkFilterActive) applyFilters(false);
    };

    window.toggleBookmarkFilter = function() {
        isBookmarkFilterActive = !isBookmarkFilterActive;
        if (bookmarkFilterBtn) {
            bookmarkFilterBtn.classList.toggle('active', isBookmarkFilterActive);
            bookmarkFilterBtn.innerHTML = isBookmarkFilterActive ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>';
        }
        disableOtherFilters('bookmark'); applyFilters(true);
    };

    window.toggleMistakeFilter = function() { 
        isMistakesFilterActive = !isMistakesFilterActive; 
        if(mistakeFilterBtn) mistakeFilterBtn.classList.toggle('active', isMistakesFilterActive); 
        disableOtherFilters('mistake'); applyFilters(true); 
    };

    window.toggleShuffle = function() { 
        isShuffleActive = !isShuffleActive; 
        if(shuffleBtn) shuffleBtn.classList.toggle('active', isShuffleActive); 
        applyFilters(true); 
    };

    window.toggleQuickMode = function(forceOn = null) { 
        isQuickModeActive = forceOn !== null ? forceOn : !isQuickModeActive; 
        if(quickModeBtn) quickModeBtn.classList.toggle('active', isQuickModeActive); 
        quickSessionScore = 0; disableOtherFilters('quick');
        if (isQuickModeActive && quizWidgetWrapper) { quizWidgetWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        applyFilters(true); 
    };

    window.continueQuickMode = function() { quickSessionScore = 0; applyFilters(true); };

    function disableOtherFilters(active) {
        if (active !== 'bookmark') { isBookmarkFilterActive = false; if(bookmarkFilterBtn) { bookmarkFilterBtn.classList.remove('active'); bookmarkFilterBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>'; } }
        if (active !== 'mistake') { isMistakesFilterActive = false; if(mistakeFilterBtn) mistakeFilterBtn.classList.remove('active'); }
        if (active !== 'quick') { isQuickModeActive = false; if(quickModeBtn) quickModeBtn.classList.remove('active'); }
    }

    function applyFilters(resetIndex = false) {
        if (!window.quizData) return;
        let filtered = [...window.quizData];
        
        if (isShuffleActive) { 
            for (let i = filtered.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [filtered[i], filtered[j]] = [filtered[j], filtered[i]]; 
            } 
        } else { filtered.sort((a, b) => a.id - b.id); }
        
        if (isBookmarkFilterActive) { filtered = filtered.filter(q => historyState.bookmarks.includes(q.id)); } 
        else if (isMistakesFilterActive) { filtered = filtered.filter(q => historyState.answers[q.id] !== undefined && historyState.answers[q.id] !== q.answer); }
        
        if (currentSearchTerm) {
            filtered = filtered.filter(q => {
                const en = q.questionEn ? q.questionEn.toLowerCase() : ''; const hi = q.questionHi ? q.questionHi.toLowerCase() : '';
                const opts = q.options ? q.options.join(' ').toLowerCase() : ''; const id = q.id ? q.id.toString() : '';
                return en.includes(currentSearchTerm) || hi.includes(currentSearchTerm) || opts.includes(currentSearchTerm) || id.includes(currentSearchTerm);
            });
        }
        
        if (isQuickModeActive) { filtered = filtered.filter(q => historyState.answers[q.id] === undefined); filtered = filtered.slice(0, QUICK_LIMIT); }
        
        currentList = filtered; 
        if (resetIndex) { currentIndex = 0; } else {
            if (currentIndex >= currentList.length) { currentIndex = Math.max(0, currentList.length - 1); if(currentIndex < 0) currentIndex = 0; }
        }
        loadQuestion(currentIndex);
    }

    window.handleAnswer = function(btn, qId, choiceIndex) {
        if (!currentList || !currentList[currentIndex]) return;
        const q = currentList[currentIndex];
        if (historyState.answers[qId] !== undefined) return;
        if (isQuickModeActive && q.answer === choiceIndex) { quickSessionScore++; }
        
        historyState.answers[qId] = choiceIndex;
        saveToStorage(); 
        updateStats(); 
        loadQuestion(currentIndex);
        syncScoreToFirebase(); 
    };

    window.shareQuestion = async function(qId) {
        const q = window.quizData.find(item => item.id == qId);
        if (!q) return;
        const link = `${window.location.origin}${window.location.pathname}?id=${qId}`;
        const msg = `Can you solve this HPGK question? 🤔\n\nQ: ${q.questionEn}\n\n👉 Attempt here: ${link}`;
        if (navigator.share) { try { await navigator.share({ title: 'HPGK Challenge', text: msg, url: link }); } catch (err) {} } 
        else { try { await navigator.clipboard.writeText(msg); alert('Link copied!'); } catch (err) { alert('Could not copy link.'); } }
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentQ = currentList[currentIndex];
            const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
            if (!isAnswered && !isQuickModeActive) {
                if(cardArea) { cardArea.classList.remove('apply-shake'); void cardArea.offsetWidth; cardArea.classList.add('apply-shake'); }
                return; 
            }
            if (isQuickModeActive && currentIndex === currentList.length - 1 && isAnswered) { currentIndex++; loadQuestion(currentIndex); } 
            else if (currentIndex < currentList.length - 1) { currentIndex++; loadQuestion(currentIndex); }
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; loadQuestion(currentIndex); } });

    document.addEventListener('keydown', (e) => {
        const isSearchFocused = searchInput && document.activeElement === searchInput;
        if (!isSearchFocused) {
            if (e.key === 'ArrowRight') {
                const currentQ = currentList[currentIndex];
                const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
                if (nextBtn && !nextBtn.disabled && (isAnswered || isQuickModeActive)) { nextBtn.click(); } 
                else if (cardArea && !isAnswered) { cardArea.classList.remove('apply-shake'); void cardArea.offsetWidth; cardArea.classList.add('apply-shake'); }
            }
            if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.disabled) prevBtn.click();
        }
    });

    function updateControls(isLocked = false) {
        if (!prevBtn || !nextBtn || !progressText) return; 
        
        if (isLocked) {
            prevBtn.disabled = false; 
            nextBtn.disabled = true;  
            progressText.innerText = "Locked";
            if (progressFill) {
                progressFill.style.width = "100%";
                progressFill.style.backgroundColor = "var(--accent)"; 
            }
            return;
        } else {
            if (progressFill) progressFill.style.backgroundColor = "var(--primary)";
        }

        const isDone = isQuickModeActive && currentIndex >= currentList.length;
        prevBtn.disabled = currentIndex === 0 || isDone;
        const currentQ = currentList[currentIndex];
        const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
        nextBtn.disabled = (currentIndex === currentList.length - 1 && !isQuickModeActive) || isDone || !isAnswered;
        progressText.innerText = isDone ? "Done" : `${currentIndex + 1} / ${currentList.length}`;
        
        if (progressFill) {
            progressFill.style.width = isDone ? "100%" : `${((currentIndex + 1) / currentList.length) * 100}%`;
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            if (searchContainer) { searchContainer.classList.toggle('active', currentSearchTerm.length > 0); }
            applyFilters(true);
        });
    }

    window.clearSearch = function() {
        if (searchInput) { searchInput.value = ''; searchInput.dispatchEvent(new Event('input')); searchInput.focus(); }
    };

    function saveToStorage() { localStorage.setItem(STORAGE_KEY, JSON.stringify(historyState)); }
    function loadFromStorage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) { try { historyState = JSON.parse(saved); if (!historyState.answers) historyState.answers = {}; if (!historyState.bookmarks) historyState.bookmarks = []; } catch (e) {} }
    }
    window.resetProgress = function() { if(confirm("Clear history for this section?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } };

    function initQuizNow() {
        loadFromStorage();
        if (window.quizData && window.quizData.length > 0) {
            window.quizData.sort((a, b) => a.id - b.id);
            currentList = [...window.quizData];
            const urlParams = new URLSearchParams(window.location.search);
            const sharedId = urlParams.get('id');
            if (sharedId) { const target = currentList.findIndex(q => q.id == sharedId); if (target !== -1) { currentIndex = target; } } 
            else { currentIndex = historyState.lastIndex || 0; }
            loadQuestion(currentIndex); updateStats();
        } else {
            if (cardArea) cardArea.innerHTML = `<div class="empty-state"><p>No Data Loaded</p></div>`;
        }
    }
})();
