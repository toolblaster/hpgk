// Dynamic Storage Key based on Page Config or URL
// If a global config 'QUIZ_CONFIG' exists, use its key, otherwise fallback
const STORAGE_ID = (window.QUIZ_CONFIG && window.QUIZ_CONFIG.category) 
    ? `hpgk_${window.QUIZ_CONFIG.category}_v1` 
    : 'hpgk_general_v1';

let currentList = [];
let currentIndex = 0;
let historyState = { lastIndex: 0, answers: {} };
let fontLevel = -1; 
let currentSearchTerm = '';

// Elements
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
    const baseSize = 0.9; 
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
    if (isAnswered) {
        const isCorrect = savedAnswer === q.answer;
        const bg = isCorrect ? 'var(--correct-bg)' : 'var(--wrong-bg)';
        const color = isCorrect ? 'var(--correct-text)' : 'var(--wrong-text)';
        const text = isCorrect ? 'Correct Answer!' : `Correct: ${q.options[q.answer]}`;
        feedbackHtml = `<div class="feedback-msg" style="display:block; background:${bg}; color:${color}">${text}</div>`;
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
    `;

    if (searchInput.value === '') { 
        historyState.lastIndex = currentIndex;
        saveToStorage();
    }
    updateControls();
}

window.handleAnswer = function(btn, qId, choiceIndex) {
    if (!currentList || !currentList[currentIndex]) return;
    const q = currentList[currentIndex];
    historyState.answers[qId] = choiceIndex;
    saveToStorage();
    updateStats(); 
    loadQuestion(currentIndex);
};

nextBtn.addEventListener('click', () => {
    if (currentIndex < currentList.length - 1) {
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
    const max = currentList.length;
    const p = prompt(`Enter Question Number (1 - ${max}) to jump:`, currentIndex + 1);
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
    nextBtn.disabled = (currentIndex === currentList.length - 1) || !isAnswered;
    progressText.innerText = `${currentIndex + 1} / ${currentList.length}`;
    const pct = ((currentIndex + 1) / currentList.length) * 100;
    progressFill.style.width = `${pct}%`;
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    currentSearchTerm = term;
    
    if (term.length > 0) searchContainer.classList.add('active');
    else searchContainer.classList.remove('active');
    
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

window.clearSearch = function() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input')); 
    searchInput.focus();
};

window.shareApp = async function() {
    const canonical = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
    const btn = document.querySelector('.footer-share-btn');
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