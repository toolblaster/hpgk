// Wrapping ENTIRE logic inside an IIFE (Immediately Invoked Function Expression)
// This strictly isolates the quiz logic from the global environment.
(function() {
    const STORAGE_KEY = 'agri_vantage_history_v1';
    
    let currentList = [];
    let currentIndex = 0;
    let historyState = { lastIndex: 0, answers: {}, bookmarks: [] };
    
    let fontLevel = -1; 
    let currentSearchTerm = '';
    let isBookmarkFilterActive = false;
    let isMistakesFilterActive = false;
    let isShuffleActive = false;
    let isQuickModeActive = false;
    let quickSessionScore = 0;
    const QUICK_LIMIT = 10;

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

    window.exportProgress = function() {
        const dataStr = JSON.stringify(historyState);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = 'agriquiz_backup.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
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
                    
                    if(historyState.lastIndex && historyState.lastIndex < currentList.length) {
                        currentIndex = historyState.lastIndex;
                    } else {
                        currentIndex = 0;
                    }
                    
                    applyFilters(); 
                    updateStats();
                    alert('Progress restored successfully!');
                } else {
                    alert('Invalid backup file. Please ensure it is a valid AgriQuiz JSON file.');
                }
            } catch(err) {
                alert('Error reading file. Please try again.');
            }
        };
        reader.readAsText(file);
        input.value = '';
    }

    window.adjustFont = function(dir) {
        fontLevel += dir;
        if(fontLevel > 3) fontLevel = 3;
        if(fontLevel < -3) fontLevel = -3;
        loadQuestion(currentIndex);
    }

    function getFontSize() {
        const isMobile = window.innerWidth <= 600;
        const baseSize = isMobile ? 0.65 : 0.75; 
        const step = 0.1; 
        const offset = fontLevel + 1; 
        return `${baseSize + (offset * step)}rem`;
    }

    function updateStats() {
        const total = window.quizData.length;
        const completedIds = Object.keys(historyState.answers);
        const completedCount = completedIds.length;
        const leftCount = total - completedCount;
        
        let correctCount = 0;
        completedIds.forEach(id => {
            const q = window.quizData.find(item => item.id == id);
            if (q && q.answer === historyState.answers[id]) {
                correctCount++;
            }
        });
        
        const wrongCount = completedCount - correctCount;
        const accuracy = completedCount > 0 ? Math.round((correctCount / completedCount) * 100) : 0;

        document.getElementById('statDone').innerText = completedCount;
        document.getElementById('statLeft').innerText = leftCount;
        document.getElementById('statCorrect').innerText = correctCount;
        document.getElementById('statWrong').innerText = wrongCount;
        document.getElementById('statAccuracy').innerText = accuracy + '%';
    }

    function highlightText(text, term) {
        if (!term || term.length < 2) return text;
        const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeTerm})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    function loadQuestion(index) {
        quizContent.scrollTop = 0;

        if (isQuickModeActive && index >= currentList.length) {
            cardArea.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-trophy" style="color:var(--accent)"></i>
                    <p style="font-size:1rem; font-weight:700;">Session Complete!</p>
                    <div class="summary-score">${quickSessionScore} / ${currentList.length}</div>
                    <p style="margin-bottom:15px; color:var(--text-sec)">Questions mastered in this quick session.</p>
                    <button class="summary-btn" onclick="continueQuickMode()">Start Next 10 <i class="fa-solid fa-arrow-right"></i></button>
                    <br><br>
                    <button style="background:transparent; color:var(--text-sec); font-size:0.75rem;" onclick="toggleQuickMode(false)">Exit Quick Mode</button>
                </div>
            `;
            updateControls(); 
            return;
        }

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
                    <i class="fa-solid fa-file-circle-question"></i>
                    <p>${message}</p>
                    ${subMsg ? `<p>${subMsg}</p>` : ''}
                    ${currentSearchTerm ? '<button onclick="clearSearch()">Clear Search</button>' : ''}
                    ${isQuickModeActive ? '<br><button onclick="toggleQuickMode(false)">Exit Quick Mode</button>' : ''}
                </div>`;
            updateControls();
            return;
        }

        const q = currentList[index];
        const savedAnswer = historyState.answers[q.id];
        const isAnswered = (savedAnswer !== undefined && savedAnswer !== null && typeof savedAnswer === 'number');
        const isBookmarked = historyState.bookmarks.includes(q.id);
        
        const fontSize = getFontSize();
        const qEnText = highlightText(q.questionEn, currentSearchTerm);
        const qHiText = highlightText(q.questionHi, currentSearchTerm);

        const optionsHtml = q.options.map((opt, i) => {
            let statusClass = '';
            let iconHtml = '';
            
            const optText = highlightText(opt, currentSearchTerm);
            
            if (isAnswered) {
                if (i === q.answer) { 
                    statusClass = 'correct'; 
                    iconHtml = '<span class="status-icon"><i class="fa-solid fa-check"></i></span>'; 
                } 
                else if (i === savedAnswer) { 
                    statusClass = 'wrong'; 
                    iconHtml = '<span class="status-icon"><i class="fa-solid fa-xmark"></i></span>'; 
                }
            }
            
            return `
            <div class="option-btn ${statusClass} ${isAnswered ? 'disabled' : ''}" 
                 style="font-size: ${fontSize};"
                 onclick="handleAnswer(this, '${q.id}', ${i})">
                <span>${optText}</span>
                ${iconHtml}
            </div>`;
        }).join('');

        let feedbackHtml = '';
        if (isAnswered) {
            const isCorrect = savedAnswer === q.answer;
            const bg = isCorrect ? 'var(--correct-bg)' : 'var(--wrong-bg)';
            const color = isCorrect ? 'var(--correct-text)' : 'var(--wrong-text)';
            const text = isCorrect ? 'Correct Answer!' : `Correct: ${q.options[q.answer]}`;
            feedbackHtml = `<div class="feedback-msg" style="display:block; background:${bg}; color:${color}">${text}</div>`;
        }

        const listClass = isAnswered ? 'options-list answered' : 'options-list';
        const statusDisplay = isAnswered 
            ? (savedAnswer === q.answer 
                ? '<i class="fa-solid fa-check"></i> Solved' 
                : '<i class="fa-solid fa-xmark"></i> Review') 
            : 'Pending';

        const bookmarkIconClass = isBookmarked ? 'fa-solid fa-bookmark active' : 'fa-regular fa-bookmark';

        cardArea.innerHTML = `
            <div class="q-meta">
                <span>Q. ${q.id}</span>
                <span class="q-actions">
                    <span style="color:var(--primary)">${statusDisplay}</span>
                    <i class="fa-solid fa-share-from-square share-icon" onclick="shareQuestion('${q.id}')" title="Share Question"></i>
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

        if (searchInput.value === '' && !isBookmarkFilterActive && !isMistakesFilterActive && !isShuffleActive && !isQuickModeActive) { 
            historyState.lastIndex = currentIndex;
            saveToStorage();
        }

        updateControls();
    }

    window.toggleBookmark = function(qId) {
        qId = parseInt(qId);
        const idx = historyState.bookmarks.indexOf(qId);
        if (idx > -1) historyState.bookmarks.splice(idx, 1);
        else historyState.bookmarks.push(qId);
        saveToStorage();
        loadQuestion(currentIndex); 
        if (isBookmarkFilterActive) applyFilters(false);
    };

    window.toggleBookmarkFilter = function() {
        isBookmarkFilterActive = !isBookmarkFilterActive;
        if (isBookmarkFilterActive) {
            disableOtherFilters('bookmark');
            document.getElementById('bookmarkFilterBtn').classList.add('active');
            document.getElementById('bookmarkFilterBtn').innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        } else {
            document.getElementById('bookmarkFilterBtn').classList.remove('active');
            document.getElementById('bookmarkFilterBtn').innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        }
        applyFilters(true);
    };

    window.toggleMistakeFilter = function() {
        isMistakesFilterActive = !isMistakesFilterActive;
        if (isMistakesFilterActive) {
            disableOtherFilters('mistake');
            document.getElementById('mistakeFilterBtn').classList.add('active');
        } else {
            document.getElementById('mistakeFilterBtn').classList.remove('active');
        }
        applyFilters(true);
    }

    window.toggleShuffle = function() {
        isShuffleActive = !isShuffleActive;
        if (isShuffleActive) {
            document.getElementById('shuffleBtn').classList.add('active');
        } else {
            document.getElementById('shuffleBtn').classList.remove('active');
        }
        applyFilters(true);
    }

    window.toggleQuickMode = function(forceOn = null) {
        if (forceOn !== null) isQuickModeActive = forceOn;
        else isQuickModeActive = !isQuickModeActive;

        if (isQuickModeActive) {
            quizWidgetWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            disableOtherFilters('quick');
            document.getElementById('quickModeBtn').classList.add('active');
            quickSessionScore = 0;
        } else {
            document.getElementById('quickModeBtn').classList.remove('active');
        }
        applyFilters(true);
    };

    window.continueQuickMode = function() {
        quickSessionScore = 0;
        applyFilters(true);
    }

    function disableOtherFilters(active) {
        if (active !== 'bookmark') {
            isBookmarkFilterActive = false;
            document.getElementById('bookmarkFilterBtn').classList.remove('active');
            document.getElementById('bookmarkFilterBtn').innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        }
        if (active !== 'mistake') {
            isMistakesFilterActive = false;
            document.getElementById('mistakeFilterBtn').classList.remove('active');
        }
        if (active !== 'quick') {
            isQuickModeActive = false;
            document.getElementById('quickModeBtn').classList.remove('active');
        }
    }

    function applyFilters(resetIndex = false) {
        const term = currentSearchTerm;
        let filtered = [...window.quizData];

        if (isShuffleActive) {
            for (let i = filtered.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
            }
        } else {
            filtered.sort((a, b) => a.id - b.id);
        }

        if (isBookmarkFilterActive) {
            filtered = filtered.filter(q => historyState.bookmarks.includes(q.id));
        } else if (isMistakesFilterActive) {
            filtered = filtered.filter(q => {
                const userAns = historyState.answers[q.id];
                return userAns !== undefined && userAns !== q.answer;
            });
        }

        if (term && term !== '') {
             filtered = filtered.filter(q => {
                const qEn = q.questionEn ? q.questionEn.toLowerCase() : '';
                const qHi = q.questionHi ? q.questionHi.toLowerCase() : ''; 
                const qId = q.id ? q.id.toString() : '';
                const optionsStr = q.options ? q.options.join(' ').toLowerCase() : '';
                return qEn.includes(term) || qHi.includes(term) || qId.includes(term) || optionsStr.includes(term);
            });
        }

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
                if (currentIndex < 0) currentIndex = 0; 
            }
        }
        
        loadQuestion(currentIndex);
    }

    window.shareQuestion = async function(qId) {
        const q = window.quizData.find(item => item.id == qId);
        if(!q) return;
        
        const baseUrl = window.location.origin + window.location.pathname;
        const deepLink = `${baseUrl}?id=${qId}`;
        const shareText = `Can you solve this AgriQuiz question? 🤔\n\nQ: ${q.questionEn}\n\n👉 Attempt here: ${deepLink}`;
        
        if (navigator.share) {
            try { await navigator.share({ title: 'AgriQuiz Challenge', text: shareText, url: deepLink }); } catch (err) { }
        } else {
            try {
                await navigator.clipboard.writeText(shareText);
                alert('Challenge link copied to clipboard!');
            } catch (err) {
                alert('Could not copy link.');
            }
        }
    };

    window.handleAnswer = function(btn, qId, choiceIndex) {
        if (!currentList || !currentList[currentIndex]) return;
        const q = currentList[currentIndex];
        if (isQuickModeActive && historyState.answers[qId] === undefined) {
            if (choiceIndex === q.answer) quickSessionScore++;
        }
        historyState.answers[qId] = choiceIndex;
        saveToStorage();
        updateStats(); 
        loadQuestion(currentIndex);
    };

    nextBtn.addEventListener('click', () => {
        if (isQuickModeActive && currentIndex === currentList.length - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        } else if (currentIndex < currentList.length - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion(currentIndex);
        }
    });

    jumpTrigger.addEventListener('click', () => {
        if (isQuickModeActive) return; 
        const max = currentList.length;
        if (max === 0) return;
        let msg = `Enter Card Number (1 - ${max}) to jump:`;
        if (isShuffleActive) msg += `\n(Note: In Shuffle mode, this jumps to the position in the random list, not Question ID)`;
        const p = prompt(msg, currentIndex + 1);
        if (p) {
            const num = parseInt(p);
            if (!isNaN(num) && num >= 1 && num <= max) {
                currentIndex = num - 1;
                loadQuestion(currentIndex);
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (document.activeElement !== searchInput) {
            if (e.key === 'ArrowRight' && !nextBtn.disabled) nextBtn.click();
            if (e.key === 'ArrowLeft' && !prevBtn.disabled) prevBtn.click();
        }
    });

    function updateControls() {
        if (isQuickModeActive && currentIndex >= currentList.length) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            progressText.innerText = "Done";
            progressFill.style.width = "100%";
            return;
        }

        if (!currentList || currentList.length === 0) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            progressText.innerText = `0 / 0`;
            progressFill.style.width = `0%`;
            return;
        }

        const currentQ = currentList[currentIndex];
        const isAnswered = historyState.answers[currentQ.id] !== undefined;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = (currentIndex === currentList.length - 1 && !isQuickModeActive) || (!isAnswered); 

        let label = `${currentIndex + 1} / ${currentList.length}`;
        let prefix = [];
        
        if (isQuickModeActive) prefix.push("Quick 10");
        else if (isShuffleActive) prefix.push("Random");
        
        if (isMistakesFilterActive) prefix.push("Mistakes");
        else if (isBookmarkFilterActive) prefix.push("Saved");
        else if (currentSearchTerm) prefix.push("Found");
        
        if (prefix.length > 0) label = `${prefix.join(' + ')}: ${label}`;

        progressText.innerText = label;
        const pct = ((currentIndex + 1) / currentList.length) * 100;
        progressFill.style.width = `${pct}%`;
    }

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        currentSearchTerm = term;
        if (term.length > 0) searchContainer.classList.add('active');
        else searchContainer.classList.remove('active');
        applyFilters(true);
    });

    window.clearSearch = function() {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input')); 
        searchInput.focus();
    };

    function saveToStorage() { localStorage.setItem(STORAGE_KEY, JSON.stringify(historyState)); }
    
    function loadFromStorage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) { 
            try { 
                historyState = JSON.parse(saved); 
                if (!historyState.answers) historyState.answers = {}; 
                if (!historyState.bookmarks) historyState.bookmarks = []; 
            } catch (e) {} 
        }
    }
    
    window.resetProgress = function() {
        if(confirm("Clear history?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); }
    };

    function initQuizNow() {
        updateLocalThemeIcon(document.documentElement.getAttribute('data-theme'));

        if (window.quizData && window.quizData.length > 0) {
            window.quizData.sort((a, b) => a.id - b.id);
            
            loadFromStorage();
            currentList = [...window.quizData];
            
            const urlParams = new URLSearchParams(window.location.search);
            const sharedId = urlParams.get('id');
            
            if (sharedId) {
                const qId = parseInt(sharedId);
                const targetIndex = currentList.findIndex(q => q.id === qId);
                
                if (targetIndex !== -1) {
                    currentIndex = targetIndex;
                    setTimeout(() => {
                        if(quizWidgetWrapper) quizWidgetWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 500);
                }
            } else {
                if (historyState.lastIndex && historyState.lastIndex < currentList.length) {
                    currentIndex = historyState.lastIndex;
                }
            }
            
            loadQuestion(currentIndex);
            updateStats(); 
        } else {
            cardArea.innerHTML = `<div style="text-align:center; color:#EF4444; padding:20px; font-size:0.85rem;">
                <strong>Data Missing</strong><br>
                Please make sure <code>part1.js</code> is correctly loaded.
            </div>`;
        }
    }

    initQuizNow();

})(); // END OF ISOLATED SCOPE