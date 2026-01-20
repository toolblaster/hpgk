// Dynamic Storage Key based on Page Config or URL
const STORAGE_ID = (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category) 
    ? `hpgk_${window.QUIZ_CONFIG.category}_v1` 
    : 'hpgk_general_v1';

let currentList = [];
let currentIndex = 0;
let historyState = { lastIndex: 0, answers: {} };
let fontLevel = -1; 
let currentSearchTerm = '';

// Elements - These might be null on non-quiz pages
const cardArea = document.getElementById('cardArea');
const quizContent = document.getElementById('quizContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const searchInput = document.getElementById('searchInput');
const searchContainer = document.getElementById('searchContainer');
const themeBtn = document.getElementById('themeBtn');
const jumpTrigger = document.getElementById('jumpTrigger');

window.onload = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateThemeIcon(currentTheme);

    // GUARD: If no quiz card area exists, stop here to prevent errors
    if (!cardArea) return;

    // HIDE JUMP TRIGGER COMPLETELY
    if (jumpTrigger) {
        jumpTrigger.style.display = 'none';
    }

    setTimeout(() => {
        if (window.quizData && window.quizData.length > 0) {
            // Sort by ID
            window.quizData.sort((a, b) => a.id - b.id);
            
            loadFromStorage();
            currentList = [...window.quizData];
            
            if (historyState.lastIndex && historyState.lastIndex < currentList.length) {
                currentIndex = historyState.lastIndex;
            }
            loadQuestion(currentIndex);
            updateStats();
        } else {
            cardArea.innerHTML = `<div style="text-align:center; color:#EF4444; padding:20px; font-size:0.9rem;">
                <strong>No Data Loaded</strong><br>
                Ensure data.js is linked correctly.
            </div>`;
        }
    }, 100);
};

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    if (!themeBtn) return; // Guard for missing theme button
    if(theme === 'dark') {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Export / Import Logic
window.exportProgress = function() {
    const dataStr = JSON.stringify(historyState);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const catName = window.QUIZ_CONFIG ? window.QUIZ_CONFIG.category : 'backup';
    const exportFileDefaultName = `hpgk_${catName}.json`;
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
                saveToStorage();
                if(historyState.lastIndex && historyState.lastIndex < currentList.length) {
                    currentIndex = historyState.lastIndex;
                } else {
                    currentIndex = 0;
                }
                loadQuestion(currentIndex);
                updateStats();
                alert('Progress restored successfully!');
            } else {
                alert('Invalid file format.');
            }
        } catch(err) {
            alert('Error reading file.');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

function adjustFont(dir) {
    fontLevel += dir;
    if(fontLevel > 3) fontLevel = 3;
    if(fontLevel < -1) fontLevel = -1;
    loadQuestion(currentIndex);
}

function getFontSize() {
    // -1 = 12px (0.75rem), 0 = 14px (0.875rem), 1 = 16px (1rem), etc.
    const baseSize = 0.875; // 14px
    const step = 0.125; // 2px step
    const size = baseSize + (fontLevel * step);
    // Ensure min 12px (0.75rem)
    return size < 0.75 ? '0.75rem' : `${size}rem`;
}

function updateStats() {
    // GUARD: Check if stat elements exist
    if (!document.getElementById('statDone')) return;

    const total = window.quizData.length;
    const answers = historyState.answers;
    
    let validDoneCount = 0;
    let validCorrectCount = 0;

    // FIXED CALCULATION: Iterate through ACTUAL quiz data to match with answers.
    // This prevents stale IDs in localStorage from messing up the "Left" count.
    window.quizData.forEach(q => {
        // Check if this specific question ID has a recorded answer
        if (answers[q.id] !== undefined && answers[q.id] !== null) {
            validDoneCount++;
            if (answers[q.id] === q.answer) {
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
    
    // Update Total MCQ Stat if element exists
    const statTotalEl = document.getElementById('statTotal');
    if (statTotalEl) {
        statTotalEl.innerText = total;
    }
}

function highlightText(text, term) {
    if (!term || term.length < 2) return text;
    const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeTerm})`, 'gi');
    return text.replace(regex, '<mark class="highlight">$1</mark>');
}

function loadQuestion(index) {
    // GUARD: Ensure UI elements exist
    if (!quizContent || !cardArea) return;

    quizContent.scrollTop = 0;

    if (currentList.length === 0) {
        cardArea.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-file-circle-question"></i>
                <p>No matches found for "<strong>${currentSearchTerm}</strong>"</p>
                <button onclick="clearSearch()">Clear Search</button>
            </div>`;
        updateControls();
        return;
    }

    const q = currentList[index];
    const savedAnswer = historyState.answers[q.id];
    const isAnswered = (savedAnswer !== undefined && savedAnswer !== null && typeof savedAnswer === 'number');
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
    let explanationHtml = '';

    if (isAnswered) {
        const isCorrect = savedAnswer === q.answer;
        const bg = isCorrect ? 'var(--correct-bg)' : 'var(--wrong-bg)';
        const color = isCorrect ? 'var(--correct-text)' : 'var(--wrong-text)';
        const text = isCorrect ? 'Correct Answer!' : `Correct: ${q.options[q.answer]}`;
        feedbackHtml = `<div class="feedback-msg" style="display:block; background:${bg}; color:${color}">${text}</div>`;
        
        // Add Explanation if available
        if (q.explanation) {
            explanationHtml = `
            <div class="explanation-box" style="font-size:${fontSize}">
                <strong><i class="fa-solid fa-lightbulb"></i> Explanation:</strong><br>
                ${q.explanation.replace(/\n/g, '<br>')}
            </div>`;
        }
    }

    const listClass = isAnswered ? 'options-list answered' : 'options-list';
    const statusDisplay = isAnswered 
        ? (savedAnswer === q.answer ? '<i class="fa-solid fa-check"></i> Solved' : '<i class="fa-solid fa-xmark"></i> Review') 
        : 'Pending';

    cardArea.innerHTML = `
        <div class="q-meta">
            <span>Q. ${q.id}</span>
            <span style="color:var(--primary)">${statusDisplay}</span>
        </div>
        <div class="q-text-en" style="font-size:${fontSize}">${qEnText}</div>
        <div class="q-text-hi" style="font-size:${fontSize}">${qHiText}</div>
        <div class="${listClass}" id="opts-${q.id}">
            ${optionsHtml}
        </div>
        ${feedbackHtml}
        ${explanationHtml}
    `;

    if (searchInput && searchInput.value === '') { 
        historyState.lastIndex = currentIndex;
        saveToStorage();
    }
    updateControls();
}

window.handleAnswer = function(btn, qId, choiceIndex) {
    if (!currentList || !currentList[currentIndex]) return;
    const q = currentList[currentIndex];
    
    // Prevent re-answering
    if (historyState.answers[qId] !== undefined) return;

    historyState.answers[qId] = choiceIndex;
    saveToStorage();
    updateStats(); 
    loadQuestion(currentIndex);
};

// Event Listeners with Null Checks
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        // Enforce logic: STOP if current question is NOT answered
        const currentQ = currentList[currentIndex];
        // Ensure robust check against history
        const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;

        if (!isAnswered) {
            // Visual Shake Feedback via CSS class
            if(cardArea) {
                // Reset animation if needed to re-trigger
                cardArea.classList.remove('apply-shake');
                // Trigger reflow to restart animation
                void cardArea.offsetWidth;
                cardArea.classList.add('apply-shake');
            }
            return; // STRICT BLOCK
        }

        // Secondary check on disabled prop
        if (nextBtn.disabled) return;

        if (currentIndex < currentList.length - 1) {
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
    // Safety check for searchInput presence
    const isSearchFocused = searchInput && document.activeElement === searchInput;
    
    if (!isSearchFocused) {
        if (e.key === 'ArrowRight') {
            // Check logic before clicking
            const currentQ = currentList[currentIndex];
            const isAnswered = currentQ && historyState.answers[currentQ.id] !== undefined;
            if (nextBtn && !nextBtn.disabled && isAnswered) {
                nextBtn.click();
            } else {
                 // Trigger Shake if user tries keyboard nav without answering
                 if(cardArea && !isAnswered) {
                    cardArea.classList.remove('apply-shake');
                    void cardArea.offsetWidth;
                    cardArea.classList.add('apply-shake');
                }
            }
        }
        if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.disabled) prevBtn.click();
    }
});

function updateControls() {
    // GUARD: Ensure elements exist
    if (!prevBtn || !nextBtn || !progressText || !progressFill) return;

    if (!currentList || currentList.length === 0) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        progressText.innerText = `0 / 0`;
        progressFill.style.width = `0%`;
        return;
    }

    const currentQ = currentList[currentIndex];
    const isAnswered = historyState.answers[currentQ.id] !== undefined;
    
    // Disable Previous if at start
    prevBtn.disabled = currentIndex === 0;
    
    // Disable Next if at end OR if current question NOT answered
    // This enforces the "Must Answer to Proceed" logic
    nextBtn.disabled = (currentIndex === currentList.length - 1) || !isAnswered;
    
    // Updated to show current index vs total without jump functionality
    progressText.innerText = `${currentIndex + 1} / ${currentList.length}`;
    
    // Explicitly hide jump trigger if it somehow reappears or wasn't hidden on load
    if (jumpTrigger) {
        jumpTrigger.style.display = 'none';
    }

    const pct = ((currentIndex + 1) / currentList.length) * 100;
    progressFill.style.width = `${pct}%`;
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        currentSearchTerm = term;
        
        if (searchContainer) {
            if (term.length > 0) searchContainer.classList.add('active');
            else searchContainer.classList.remove('active');
        }
        
        if (term === '') {
            currentList = [...window.quizData];
            if (historyState.lastIndex !== undefined && historyState.lastIndex < currentList.length) {
                currentIndex = historyState.lastIndex;
            } else {
                currentIndex = 0;
            }
        } else {
            currentList = window.quizData.filter(q => {
                const qEn = q.questionEn ? q.questionEn.toLowerCase() : '';
                const qHi = q.questionHi ? q.questionHi.toLowerCase() : ''; 
                const qId = q.id ? q.id.toString() : '';
                const optionsStr = q.options ? q.options.join(' ').toLowerCase() : '';
                return qEn.includes(term) || qHi.includes(term) || qId.includes(term) || optionsStr.includes(term);
            });
            currentIndex = 0;
        }
        loadQuestion(currentIndex);
    });
}

window.clearSearch = function() {
    if (searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input')); 
        searchInput.focus();
    }
};

window.shareApp = async function() {
    const canonical = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
    const btn = document.querySelector('.footer-share-btn');
    if (!btn) return; // Guard
    const originalHtml = btn.innerHTML;

    if (navigator.share) {
        try { await navigator.share({ url: canonical }); } catch (err) {}
    } else {
        try {
            await navigator.clipboard.writeText(canonical);
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => { btn.innerHTML = originalHtml; }, 2000);
        } catch (err) { alert('Could not copy URL'); }
    }
};

function saveToStorage() { localStorage.setItem(STORAGE_ID, JSON.stringify(historyState)); }
function loadFromStorage() {
    const saved = localStorage.getItem(STORAGE_ID);
    if (saved) { try { historyState = JSON.parse(saved); if (!historyState.answers) historyState.answers = {}; } catch (e) {} }
}
window.resetProgress = function() {
    if(confirm("Clear history?")) { localStorage.removeItem(STORAGE_ID); location.reload(); }
};
