/**
 * --------------------------------------------------------------------------
 * HPGK MOCK TEST ENGINE (TCS/NTA Style Master Logic - PHASE 7 FINAL)
 * Includes Score Calculation, Detailed Analytics & Firebase DB Sync
 * Compact UI Updates, Production Paywall Fixes, Custom Watermark & Summary Mode
 * 🔥 Subject-wise Advanced Analytics Table & Desktop Layout
 * 🚀 FIXED: Auto-Attaches functionality to "Re-Attempt" button in Results Panel
 * --------------------------------------------------------------------------
 */

const engine = (function() {
    
    let state = {
        exam: null,
        testId: null,
        questions: [],
        sections: [],
        currentIndex: 0,
        responses: {},
        timerInterval: null,
        timeLeftSeconds: 0,
        totalDurationMinutes: 120, 
        language: 'en', 
        isPanelHidden: false,
        fontSize: 14
    };

    let DOM = {};

    function injectUIWatermark() {
        const wm = document.createElement('div');
        wm.innerHTML = 'HPGK.TOOLBLASTER.COM';
        wm.style.cssText = 'position:fixed; top:50%; left:50%; transform:translate(-50%, -50%) rotate(-35deg); font-size:clamp(3rem, 6vw, 6rem); color:rgba(100, 116, 139, 0.04); z-index:0; pointer-events:none; white-space:nowrap; font-weight:900; letter-spacing:4px; font-family:Inter, sans-serif; user-select:none;';
        document.body.appendChild(wm);
    }

    function injectAdvancedResultStyles() {
        if (document.getElementById('advanced-result-styles')) return;
        const style = document.createElement('style');
        style.id = 'advanced-result-styles';
        style.innerHTML = `
            .advanced-results-container {
                display: flex;
                gap: 25px;
                align-items: flex-start;
                margin-top: 25px;
                width: 100%;
            }
            .advanced-results-left {
                flex: 1.6;
                display: flex;
                flex-direction: column;
                min-width: 0; 
            }
            .advanced-results-right {
                flex: 1;
                position: sticky;
                top: 85px; 
                min-width: 0;
            }
            .solutions-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            @media (max-width: 1024px) {
                .advanced-results-container {
                    flex-direction: column;
                }
                .advanced-results-right {
                    position: relative;
                    top: 0;
                    order: -1; 
                    width: 100%;
                    margin-bottom: 20px;
                }
                .solutions-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function init() {
        injectUIWatermark(); 

        DOM = {
            blocker: document.getElementById('security-blocker'),
            secTitle: document.getElementById('security-title'),
            secDesc: document.getElementById('security-desc'),
            title: document.getElementById('ui-exam-title'),
            timer: document.getElementById('ui-timer'),
            qNum: document.getElementById('ui-q-num'),
            qContent: document.getElementById('ui-q-content'),
            palette: document.getElementById('ui-palette-grid'),
            paletteTitle: document.getElementById('ui-palette-title'),
            sectionsBar: document.getElementById('ui-sections-bar'),
            instPanel: document.getElementById('instructions-panel'),
            summaryPanel: document.getElementById('summary-panel'),
            midTestModal: document.getElementById('mid-test-modal'),
            instAgree: document.getElementById('inst-agree-chk'),
            btnStart: document.getElementById('btn-start-exam'),
            btnLangEn: document.getElementById('lang-btn-en'),
            btnLangHi: document.getElementById('lang-btn-hi'),
            instLangSelect: document.getElementById('inst-lang-select'),
            sumAnswered: document.getElementById('sum-answered'),
            sumNotAnswered: document.getElementById('sum-not-answered'),
            sumReview: document.getElementById('sum-review'),
            sumReviewAns: document.getElementById('sum-review-ans'),
            sumNotVisited: document.getElementById('sum-not-visited'),
            rightPanel: document.getElementById('right-panel'),
            panelArrow: document.getElementById('ui-panel-arrow'),
            penaltyText: document.getElementById('inst-penalty-text'),
            sectionTooltip: document.getElementById('section-stats-tooltip'),
            legAns: document.getElementById('leg-ans'),
            legNotAns: document.getElementById('leg-not-ans'),
            legRev: document.getElementById('leg-rev'),
            legRevAns: document.getElementById('leg-rev-ans'),
            legNotVis: document.getElementById('leg-not-vis'),
            
            resultPanel: document.getElementById('result-panel'),
            resScoreVal: document.getElementById('res-score-val'),
            resAccVal: document.getElementById('res-acc-val'),
            resTimeVal: document.getElementById('res-time-val'),
            resCorrVal: document.getElementById('res-corr-val'),
            resWrongVal: document.getElementById('res-wrong-val'),
            resSkipVal: document.getElementById('res-skip-val'),
            resDetailedList: document.getElementById('res-detailed-list')
        };

        const urlParams = new URLSearchParams(window.location.search);
        const examParam = urlParams.get('exam');     
        const testParam = urlParams.get('testId');   

        if (!examParam || !testParam) {
            triggerFatalError("Invalid Test Session", "Please start the test properly from your Exam Dashboard.");
            return;
        }

        state.exam = examParam;
        state.testId = testParam;

        waitForAuth().then(async (isLoggedIn) => {
            const user = window.HPGK_User;
            
            if (!isLoggedIn || !user) {
                 triggerFatalError("Login Required", "You must be logged in to attempt any mock test (Free or Paid). Please log in securely from the Dashboard.");
                 return;
            }

            try {
                const { getApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
                const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");
                const db = getFirestore(getApp());
                const uDoc = await getDoc(doc(db, 'artifacts', 'hpgk-quiz', 'users', user.uid));
                
                if (uDoc.exists() && uDoc.data().passes) {
                    user.passes = uDoc.data().passes;
                }
            } catch(e) {
                console.error("Engine live pass sync failed:", e);
            }

            const userName = user.displayName || user.name || user.email || 'Candidate';
            const userPhoto = user.photoURL || user.picture || user.avatar || null;

            document.getElementById('ui-user-name').innerText = userName;

            const avatarImg = document.getElementById('ui-user-avatar');
            if(userPhoto) {
                avatarImg.src = userPhoto;
                avatarImg.onerror = function() {
                    this.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userName) + '&background=cbd5e1';
                };
            } else {
                avatarImg.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userName) + '&background=cbd5e1';
            }

            const isFree = testParam.endsWith('-1'); 
            
            const hasPass = user.passes && (
                user.passes['mock_master_pass'] || 
                user.passes['vip_lifetime_pass'] || 
                user.passes['mega_combo_pass']
            );
            
            if (!isFree && !hasPass) {
                DOM.blocker.style.backgroundColor = "rgba(15, 23, 42, 0.9)"; 
                DOM.blocker.style.backdropFilter = "blur(8px)";
                DOM.blocker.innerHTML = `
                    <div style="background: #ffffff; border-radius: 14px; padding: 40px 30px; max-width: 400px; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.3); margin: 20px;">
                        <div style="width: 60px; height: 60px; background: rgba(245, 158, 11, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
                            <i class="fa-solid fa-crown" style="font-size: 2rem; color: #f59e0b;"></i>
                        </div>
                        <h2 style="margin: 0 0 10px 0; font-size: 1.4rem; color: #0f172a; font-weight: 900;">Unlock Mock Master</h2>
                        <p style="font-size: 0.85rem; color: #475569; margin-bottom: 20px; line-height: 1.5;">Upgrade to the <strong>Mock Master Pass</strong> to unlock all premium full-length mock tests, Official PYQs, and detailed analytics.</p>
                        <div style="font-size: 2.2rem; font-weight: 900; color: #0f172a; margin-bottom: 20px; letter-spacing: -1px;">₹149<span style="font-size: 1rem; color: #64748b; font-weight: 600;">/mo</span></div>
                        <button onclick="window.location.href='../user/upgrade.html'" style="width: 100%; background: #10b981; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 800; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); transition: 0.2s;">
                            <i class="fa-solid fa-rocket"></i> Get Mock Master Pass
                        </button>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <button onclick="window.location.href='../user/upgrade.html'" style="background: #f1f5f9; color: #334155; border: none; padding: 10px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: 0.2s;">View All Features</button>
                            <button onclick="window.location.href='../user/dashboard.html'" style="background: transparent; color: #64748b; border: none; font-weight: 600; font-size: 0.8rem; cursor: pointer; text-decoration: underline;">Back to Dashboard</button>
                        </div>
                        <div style="margin-top: 18px; font-size: 0.7rem; color: #10b981; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px;">
                            <i class="fa-solid fa-shield-halved"></i> SECURE 256-BIT CHECKOUT
                        </div>
                    </div>
                `;
                DOM.blocker.style.display = 'flex';
                return;
            }

            fetchTestData();
        });

        document.addEventListener('click', (e) => {
            if (DOM.sectionTooltip && !DOM.sectionTooltip.contains(e.target) && !e.target.closest('.sec-info-icon')) {
                DOM.sectionTooltip.style.display = 'none';
            }
        });
    }

    function waitForAuth() {
        return new Promise(resolve => {
            let attempts = 0;
            const check = setInterval(async () => {
                if (window.HPGK_User && (window.HPGK_User.isLoggedIn === true || window.HPGK_User.uid)) {
                    clearInterval(check); resolve(true); return;
                }
                
                try {
                    const { getApps, getApp } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
                    if (getApps().length > 0) {
                        clearInterval(check); 
                        const app = getApp();
                        const { getAuth, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js");
                        const auth = getAuth(app);
                        
                        onAuthStateChanged(auth, (user) => {
                            if (user) {
                                window.HPGK_User = window.HPGK_User || {};
                                window.HPGK_User.isLoggedIn = true;
                                window.HPGK_User.uid = user.uid;
                                window.HPGK_User.displayName = user.displayName;
                                window.HPGK_User.photoURL = user.photoURL;
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        });
                        return; 
                    }
                } catch(e) {}

                if (++attempts > 50) {
                    clearInterval(check);
                    resolve(window.HPGK_User ? window.HPGK_User.isLoggedIn : false);
                }
            }, 100);
        });
    }

    function triggerFatalError(title, desc) {
        DOM.secTitle.innerText = title;
        DOM.secDesc.innerText = desc;
        DOM.blocker.innerHTML = `
            <i class="fa-solid fa-lock" style="font-size: 3rem; color: #ef4444; margin-bottom: 15px;"></i>
            <h2 style="margin:0; font-size: 1.4rem; color: var(--text-main);">${title}</h2>
            <p style="font-size:0.9rem; color:var(--text-sec); margin-top: 10px; max-width: 400px;">${desc}</p>
            <button onclick="window.location.href='../user/dashboard.html'" style="margin-top:20px; padding: 10px 20px; background:var(--primary); color:white; border:none; border-radius:4px; font-weight:700; cursor:pointer;">Go to Dashboard</button>
        `;
        DOM.blocker.style.display = 'flex';
    }

    async function fetchTestData() {
        try {
            const url = `../hp-exam-full-mock-test/${state.exam}/${state.testId}.json`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`File not found: ${url}`);
            
            const data = await response.json();
            
            if (data.negativeMarking && DOM.penaltyText) {
                DOM.penaltyText.innerText = data.negativeMarking;
            }
            
            let flatQs = [];
            state.sections = [];
            let totalMarks = 0;

            if (data.sections && data.sections.length > 0) {
                data.sections.forEach(sec => {
                    let startIdx = flatQs.length;
                    flatQs.push(...sec.questions);
                    state.sections.push({ 
                        name: sec.name, 
                        startIdx: startIdx, 
                        endIdx: flatQs.length - 1,
                        qCount: sec.questions.length
                    });
                });
                state.questions = flatQs;
            } else if (data.questions) {
                state.questions = data.questions;
                state.sections.push({ name: "General Section", startIdx: 0, endIdx: state.questions.length - 1, qCount: state.questions.length });
            } else {
                throw new Error("No questions found in JSON");
            }

            totalMarks = state.questions.length; 
            state.totalDurationMinutes = data.durationMinutes || 120; 
            state.timeLeftSeconds = state.totalDurationMinutes * 60;

            DOM.title.innerText = data.testTitle || "Mock Test";
            
            buildInstructionsTable(state.totalDurationMinutes, totalMarks, data.customInstructions);

            state.questions.forEach((q, i) => {
                state.responses[i] = { selected: null, status: 'not-visited' };
            });

            const modeParam = new URLSearchParams(window.location.search).get('mode');
            
            if (modeParam === 'summary') {
                const savedResponses = localStorage.getItem(`mock_history_${state.testId}`);
                if (savedResponses) {
                    state.responses = JSON.parse(savedResponses);
                } else {
                    state.questions.forEach((q, i) => {
                        state.responses[i] = { selected: null, status: 'not-answered' };
                    });
                }
                DOM.blocker.style.display = 'none';
                showResultPanelDirectly(); 
            } else {
                DOM.blocker.style.display = 'none';
                DOM.instPanel.style.display = 'flex'; 
            }

            DOM.instAgree.addEventListener('change', (e) => {
                DOM.btnStart.disabled = !e.target.checked;
                DOM.btnStart.style.opacity = e.target.checked ? '1' : '0.5';
                DOM.btnStart.style.cursor = e.target.checked ? 'pointer' : 'not-allowed';
            });

        } catch (error) {
            triggerFatalError("Test Data Missing", "Could not load test data. Ensure the exam category and test ID are correct.");
        }
    }

    function handleInstLanguageChange(val) {
        if(val) {
            state.language = val;
            DOM.instAgree.disabled = false; 
        } else {
            DOM.instAgree.disabled = true;
            DOM.instAgree.checked = false;
            DOM.btnStart.disabled = true;
            DOM.btnStart.style.opacity = '0.5';
        }
    }

    function buildInstructionsTable(duration, totalMarks, customInstructions) {
        document.getElementById('inst-duration').innerText = duration;
        document.getElementById('inst-time-text').innerText = duration + " minutes";
        document.getElementById('inst-total-qs').innerText = state.questions.length;
        document.getElementById('inst-qs-text').innerText = state.questions.length + " questions";
        document.getElementById('inst-max-marks').innerText = totalMarks;

        let tbodyHTML = '';
        state.sections.forEach((sec, idx) => {
            tbodyHTML += `
                <tr>
                    <td>${idx + 1}</td>
                    <td>${sec.name}</td>
                    <td>${sec.qCount}</td>
                    <td>${sec.qCount}</td>
                    ${idx === 0 ? `<td rowspan="${state.sections.length}">${duration} Mins</td>` : ''}
                </tr>
            `;
        });
        
        tbodyHTML += `
            <tr style="font-weight:bold; background:var(--input-bg);">
                <td colspan="2" style="text-align:right;">Total</td>
                <td>${state.questions.length}</td>
                <td>${totalMarks}</td>
            </tr>
        `;
        document.getElementById('inst-table-body').innerHTML = tbodyHTML;

        if (customInstructions && customInstructions.length > 0) {
            const listContainer = document.getElementById('inst-general-list');
            if (listContainer) {
                let customHtml = '';
                customInstructions.forEach(inst => customHtml += `<li style="margin-bottom:6px;">${inst}</li>`);
                listContainer.innerHTML = customHtml;
            }
        }

        document.getElementById('mid-test-inst-clone').innerHTML = ''; 
        const cloneContent = document.querySelector('.inst-content').cloneNode(true);
        document.getElementById('mid-test-inst-clone').appendChild(cloneContent);
    }

    function renderSectionsUI() {
        if(state.sections.length <= 1) {
            DOM.sectionsBar.style.display = 'none';
            return;
        }
        
        let html = '';
        state.sections.forEach((sec, idx) => {
            const isActive = (state.currentIndex >= sec.startIdx && state.currentIndex <= sec.endIdx) ? 'active' : '';
            html += `
                <button class="section-tab ${isActive}" onclick="engine.jumpTo(${sec.startIdx})">
                    ${sec.name}
                    <i class="fa-solid fa-circle-info sec-info-icon" onclick="engine.showSectionStats(event, ${idx})" title="Section Stats"></i>
                </button>
            `;
        });
        DOM.sectionsBar.innerHTML = html;
        
        const currentSec = state.sections.find(s => state.currentIndex >= s.startIdx && state.currentIndex <= s.endIdx);
        if(currentSec) DOM.paletteTitle.innerText = currentSec.name;
    }

    function showSectionStats(event, secIdx) {
        event.stopPropagation();
        const sec = state.sections[secIdx];
        
        let ans = 0, notAns = 0, rev = 0, revAns = 0, notVis = 0;
        for(let i = sec.startIdx; i <= sec.endIdx; i++) {
            const s = state.responses[i].status;
            if (s === 'answered') ans++;
            else if (s === 'not-answered') notAns++;
            else if (s === 'review') rev++;
            else if (s === 'review_answered') revAns++;
            else notVis++;
        }

        document.getElementById('tt-sec-name').innerText = sec.name;
        document.getElementById('tt-ans').innerText = ans;
        document.getElementById('tt-not-ans').innerText = notAns;
        document.getElementById('tt-rev').innerText = rev;
        document.getElementById('tt-rev-ans').innerText = revAns;
        document.getElementById('tt-not-vis').innerText = notVis;

        const rect = event.target.getBoundingClientRect();
        DOM.sectionTooltip.style.display = 'flex';
        DOM.sectionTooltip.style.top = (rect.bottom + 10) + 'px';
        
        let leftPos = rect.left;
        if(leftPos + 240 > window.innerWidth) {
            leftPos = window.innerWidth - 250;
        }
        DOM.sectionTooltip.style.left = leftPos + 'px';
    }

    function startExam() {
        DOM.instPanel.style.display = 'none';
        
        if(state.language === 'en') {
            DOM.btnLangEn.classList.add('active'); DOM.btnLangHi.classList.remove('active');
        } else {
            DOM.btnLangHi.classList.add('active'); DOM.btnLangEn.classList.remove('active');
        }

        startTimer();
        renderSectionsUI();
        renderPalette();
        goToQuestion(0);
    }

    function toggleMidTestInstructions() {
        const modal = DOM.midTestModal;
        modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    }

    function toggleRightPanel() {
        state.isPanelHidden = !state.isPanelHidden;
        if (state.isPanelHidden) {
            DOM.rightPanel.classList.add('collapsed');
            DOM.panelArrow.classList.replace('fa-chevron-left', 'fa-chevron-right');
        } else {
            DOM.rightPanel.classList.remove('collapsed');
            DOM.panelArrow.classList.replace('fa-chevron-right', 'fa-chevron-left');
        }
    }

    function startTimer() {
        state.timerInterval = setInterval(() => {
            if (state.timeLeftSeconds <= 0) {
                clearInterval(state.timerInterval);
                submitTest(true); 
                return;
            }
            state.timeLeftSeconds--;
            
            const h = Math.floor(state.timeLeftSeconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((state.timeLeftSeconds % 3600) / 60).toString().padStart(2, '0');
            const s = (state.timeLeftSeconds % 60).toString().padStart(2, '0');
            DOM.timer.innerText = `${h}:${m}:${s}`;
        }, 1000);
    }

    function changeLanguage(lang) {
        state.language = lang;
        if(lang === 'en') {
            DOM.btnLangEn.classList.add('active'); DOM.btnLangHi.classList.remove('active');
        } else {
            DOM.btnLangHi.classList.add('active'); DOM.btnLangEn.classList.remove('active');
        }
        goToQuestion(state.currentIndex); 
    }

    function goToQuestion(index) {
        if (index < 0 || index >= state.questions.length) return;
        
        if (state.responses[state.currentIndex] && state.responses[state.currentIndex].status === 'not-visited') {
            state.responses[state.currentIndex].status = 'not-answered';
        }
        
        state.currentIndex = index;
        const q = state.questions[index];
        const res = state.responses[index];

        if (res.status === 'not-visited') res.status = 'not-answered';

        DOM.qNum.innerText = `Question No. ${index + 1}`;
        
        let optionsHtml = q.options.map((opt, i) => {
            const isChecked = res.selected === i ? 'checked' : '';
            return `
                <label class="option-label" style="position:relative; z-index:2;">
                    <input type="radio" name="exam_q" value="${i}" ${isChecked} onchange="engine.selectOption(${i})">
                    <span>${opt}</span>
                </label>
            `;
        }).join('');

        const questionText = state.language === 'hi' && q.questionHi ? q.questionHi : q.questionEn;
        const fontClass = state.language === 'hi' ? "font-family: 'Noto Sans Devanagari', sans-serif;" : "";

        DOM.qContent.innerHTML = `
            <div id="ui-q-text-container" style="margin-bottom: 20px; font-weight: 600; line-height: 1.6; position:relative; z-index:2; ${fontClass}">${questionText}</div>
            <div>${optionsHtml}</div>
        `;

        adjustFontSize(0); 
        renderSectionsUI();
        renderPalette();
    }
    
    function adjustFontSize(step) {
        state.fontSize += step;
        if (state.fontSize < 14) state.fontSize = 14;
        if (state.fontSize > 16) state.fontSize = 16;
        
        const qText = document.getElementById('ui-q-text-container');
        if (qText) qText.style.fontSize = state.fontSize + 'px';
        
        const options = DOM.qContent.querySelectorAll('.option-label');
        options.forEach(opt => {
            opt.style.fontSize = (state.fontSize - 1) + 'px'; 
        });
    }

    function renderPalette() {
        let html = '';
        let ans = 0, notAns = 0, rev = 0, revAns = 0, notVis = 0;

        state.questions.forEach((_, i) => {
            const status = state.responses[i].status;
            let cssClass = '';
            
            if(status === 'answered') { cssClass = 'answered'; ans++; }
            else if(status === 'not-answered') { cssClass = 'not-answered'; notAns++; }
            else if(status === 'review') { cssClass = 'review'; rev++; }
            else if(status === 'review_answered') { cssClass = 'review-answered'; revAns++; }
            else { notVis++; }

            const isCurrent = i === state.currentIndex ? 'box-shadow: 0 0 0 2px var(--text-main);' : '';

            html += `<div class="q-bubble ${cssClass}" style="${isCurrent}" onclick="engine.jumpTo(${i})">${i + 1}</div>`;
        });

        DOM.palette.innerHTML = html;

        if(DOM.legAns) DOM.legAns.innerText = ans;
        if(DOM.legNotAns) DOM.legNotAns.innerText = notAns;
        if(DOM.legRev) DOM.legRev.innerText = rev;
        if(DOM.legRevAns) DOM.legRevAns.innerText = revAns;
        if(DOM.legNotVis) DOM.legNotVis.innerText = notVis;
    }

    function selectOption(idx) {
        state.responses[state.currentIndex].selected = idx;
    }

    function saveAndNext() {
        const res = state.responses[state.currentIndex];
        res.status = res.selected !== null ? 'answered' : 'not-answered';
        
        if (state.currentIndex < state.questions.length - 1) {
            goToQuestion(state.currentIndex + 1);
        } else {
            renderPalette(); 
        }
    }

    function previousQuestion() {
        if (state.currentIndex > 0) {
            goToQuestion(state.currentIndex - 1);
        }
    }

    function markForReview() {
        const res = state.responses[state.currentIndex];
        res.status = res.selected !== null ? 'review_answered' : 'review';
        
        if (state.currentIndex < state.questions.length - 1) {
            goToQuestion(state.currentIndex + 1);
        } else {
            renderPalette();
        }
    }

    function clearResponse() {
        const res = state.responses[state.currentIndex];
        res.selected = null;
        res.status = 'not-answered';
        goToQuestion(state.currentIndex); 
    }

    function jumpTo(idx) {
        goToQuestion(idx);
        if (window.innerWidth <= 800) {
            document.getElementById('right-panel').classList.remove('open');
        }
    }

    function submitTest(isAuto = false) {
        if (isAuto) {
            finalSubmit();
            return;
        }

        let answered = 0, notAnswered = 0, review = 0, reviewAns = 0, notVisited = 0;
        state.questions.forEach((_, i) => {
            const s = state.responses[i].status;
            if (s === 'answered') answered++;
            else if (s === 'not-answered') notAnswered++;
            else if (s === 'review') review++;
            else if (s === 'review_answered') reviewAns++;
            else if (s === 'not-visited') notVisited++;
        });

        DOM.sumAnswered.innerText = answered;
        DOM.sumNotAnswered.innerText = notAnswered;
        DOM.sumReview.innerText = review;
        DOM.sumReviewAns.innerText = reviewAns;
        DOM.sumNotVisited.innerText = notVisited;

        DOM.summaryPanel.style.display = 'flex';
        if (window.innerWidth <= 800) {
            document.getElementById('right-panel').classList.remove('open');
        }
    }

    function resumeTest() {
        DOM.summaryPanel.style.display = 'none';
    }

    function generateSubjectSummaryHtml() {
        if (!state.sections || state.sections.length <= 1) return ''; 

        let html = `
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); border: 1px solid var(--card-border); box-shadow: var(--glass-shadow); overflow: hidden;">
            <div style="padding: 15px 20px; background: var(--primary-light, rgba(37, 99, 235, 0.05)); border-bottom: 1px solid var(--card-border);">
                <h3 style="margin: 0; font-size: 1.1rem; font-weight: 800; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-chart-pie" style="color: var(--primary);"></i> Subject-wise Analytics
                </h3>
            </div>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; min-width: 350px;">
                    <thead>
                        <tr style="border-bottom: 2px solid var(--card-border);">
                            <th style="padding: 12px 15px; text-align: left; font-size: 0.75rem; font-weight: 800; color: var(--text-sec); text-transform: uppercase;">Subject</th>
                            <th style="padding: 12px 10px; text-align: center; font-size: 0.75rem; font-weight: 800; color: var(--text-sec); text-transform: uppercase;">Qs</th>
                            <th style="padding: 12px 10px; text-align: center; font-size: 0.75rem; font-weight: 800; color: var(--text-sec); text-transform: uppercase;">Att.</th>
                            <th style="padding: 12px 10px; text-align: center; font-size: 0.75rem; font-weight: 800; color: var(--success, #10b981); text-transform: uppercase;">Right</th>
                            <th style="padding: 12px 10px; text-align: center; font-size: 0.75rem; font-weight: 800; color: #ef4444; text-transform: uppercase;">Wrong</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        let gTotal = 0, gAtt = 0, gCorr = 0, gWro = 0;

        state.sections.forEach(sec => {
            let sTot = sec.qCount;
            let sAtt = 0, sCorr = 0, sWro = 0;
            
            for(let i = sec.startIdx; i <= sec.endIdx; i++) {
                let ans = state.responses[i].selected;
                if(ans !== null && ans !== undefined) {
                    sAtt++;
                    if(ans === state.questions[i].answer) sCorr++;
                    else sWro++;
                }
            }
            
            gTotal += sTot; gAtt += sAtt; gCorr += sCorr; gWro += sWro;

            html += `
                <tr style="border-bottom: 1px dashed var(--card-border);">
                    <td style="padding: 12px 15px; font-weight: 700; color: var(--text-main); font-size: 0.85rem;">${sec.name}</td>
                    <td style="padding: 12px 10px; text-align: center; font-weight: 600; color: var(--text-sec);">${sTot}</td>
                    <td style="padding: 12px 10px; text-align: center; font-weight: 700; color: var(--primary);">${sAtt}</td>
                    <td style="padding: 12px 10px; text-align: center; font-weight: 800; color: var(--success, #10b981);">${sCorr}</td>
                    <td style="padding: 12px 10px; text-align: center; font-weight: 800; color: #ef4444;">${sWro}</td>
                </tr>
            `;
        });

        html += `
                <tr style="background: var(--input-bg, rgba(0,0,0,0.02)); border-top: 2px solid var(--card-border);">
                    <td style="padding: 14px 15px; font-weight: 900; color: var(--text-main); font-size: 0.9rem;">Total</td>
                    <td style="padding: 14px 10px; text-align: center; font-weight: 800; color: var(--text-main);">${gTotal}</td>
                    <td style="padding: 14px 10px; text-align: center; font-weight: 800; color: var(--primary);">${gAtt}</td>
                    <td style="padding: 14px 10px; text-align: center; font-weight: 800; color: var(--success, #10b981);">${gCorr}</td>
                    <td style="padding: 14px 10px; text-align: center; font-weight: 800; color: #ef4444;">${gWro}</td>
                </tr>
            </tbody></table></div></div>
        `;

        return html;
    }

    function getDetailsHtml() {
        let html = '';
        state.questions.forEach((q, i) => {
            let ans = state.responses[i].selected;
            let statusClass = '';
            let statusBadge = '';
            
            if (ans === null || ans === undefined) {
                statusClass = 'skipped';
                statusBadge = '<span class="res-q-badge badge-skipped">Skipped</span>';
            } else if (ans === q.answer) {
                statusClass = 'correct';
                statusBadge = '<span class="res-q-badge badge-correct"><i class="fa-solid fa-check"></i> Correct</span>';
            } else {
                statusClass = 'wrong';
                statusBadge = '<span class="res-q-badge badge-wrong"><i class="fa-solid fa-xmark"></i> Incorrect</span>';
            }

            let optsHtml = q.options.map((opt, optIdx) => {
                let optClass = '';
                let icon = '<div style="width:16px;"></div>'; 
                
                if (optIdx === q.answer) {
                    optClass = 'is-correct';
                    icon = '<div style="width:16px;"><i class="fa-solid fa-check-circle" style="color:#16a34a;"></i></div>';
                } else if (optIdx === ans && ans !== q.answer) {
                    optClass = 'is-wrong';
                    icon = '<div style="width:16px;"><i class="fa-solid fa-times-circle" style="color:#dc2626;"></i></div>';
                }
                
                return `
                    <div class="res-opt ${optClass}">
                        ${icon}
                        <div style="flex:1; z-index:2; position:relative;">${opt}</div>
                    </div>
                `;
            }).join('');

            html += `
                <div class="res-q-card ${statusClass}" style="position:relative; z-index:2; height:100%;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                        <div style="font-weight:800; color:var(--text-sec); font-size:0.75rem; text-transform:uppercase;">Question ${i+1}</div>
                        ${statusBadge}
                    </div>
                    <div style="font-weight:600; font-size:0.9rem; color:var(--text-main); line-height:1.4;">${q.questionEn}</div>
                    <div style="font-weight:500; font-size:0.8rem; color:var(--text-sec); margin-bottom:6px; font-family:'Noto Sans Devanagari', sans-serif;">${q.questionHi || ''}</div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        ${optsHtml}
                    </div>
                </div>
            `;
        });
        return html;
    }

    // 🔥 NEW: Auto-Attaches the Re-Attempt functionality to buttons found in the UI
    function attachReattemptListeners() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            const btnText = btn.innerText.toLowerCase();
            // Looks for buttons that contain "re-attempt" or "reattempt"
            if (btnText.includes('re-attempt') || btnText.includes('reattempt')) {
                // Ensure we don't attach multiple times
                btn.onclick = null; 
                btn.onclick = function() {
                    const confirmation = confirm("Are you sure you want to re-attempt this test?\\n\\nThis will clear your current progress and start a fresh test.");
                    if (confirmation) {
                        // 1. Clear Local Browser Cache
                        localStorage.removeItem(`mock_history_${state.testId}`);
                        
                        // 2. Remove 'mode=summary' from the URL so it loads a fresh exam
                        const currentUrl = new URL(window.location.href);
                        currentUrl.searchParams.delete('mode');
                        
                        // 3. Reload Page
                        window.location.href = currentUrl.toString();
                    }
                };
            }
        });
    }

    function renderFinalResultUI(finalScore, totalQs, accuracy, timeTakenStr, correct, wrong, unattempted) {
        DOM.resScoreVal.innerText = finalScore + ' / ' + totalQs;
        DOM.resAccVal.innerText = accuracy + '%';
        DOM.resTimeVal.innerText = timeTakenStr;
        DOM.resCorrVal.innerText = correct;
        DOM.resWrongVal.innerText = wrong;
        DOM.resSkipVal.innerText = unattempted;

        injectAdvancedResultStyles();

        // Hide duplicate "Detailed Solutions" headings if they exist in the HTML template
        const headings = DOM.resultPanel.querySelectorAll('h2, h3, h4');
        headings.forEach(h => {
            if (h.innerText.toLowerCase().includes('detailed')) {
                h.style.display = 'none';
            }
        });

        const detailsHtml = getDetailsHtml();
        const summaryHtml = generateSubjectSummaryHtml();

        DOM.resDetailedList.innerHTML = `
            <div class="advanced-results-container">
                <div class="advanced-results-left">
                    <h3 style="font-size: 1.4rem; color: var(--text-main); margin: 0 0 15px 0; font-weight: 900; letter-spacing: -0.5px;">Detailed Solutions</h3>
                    <div class="solutions-grid">
                        ${detailsHtml}
                    </div>
                </div>
                ${summaryHtml ? `
                <div class="advanced-results-right">
                    ${summaryHtml}
                </div>
                ` : ''}
            </div>
        `;
        
        DOM.resultPanel.style.display = 'flex';
        
        // 🔥 Trigger the Auto-Attach logic for Re-Attempt buttons
        attachReattemptListeners();
    }

    async function finalSubmit() {
        clearInterval(state.timerInterval);

        DOM.summaryPanel.style.display = 'none';
        DOM.secTitle.innerText = "Calculating Score...";
        DOM.secDesc.innerText = "Saving result securely to the cloud. Please don't refresh.";
        DOM.blocker.style.display = 'flex';
        
        let correct = 0, wrong = 0, unattempted = 0;
        let penaltyTextStr = DOM.penaltyText ? DOM.penaltyText.innerText : "0.25";
        let penaltyAmount = parseFloat(penaltyTextStr) || 0;

        state.questions.forEach((q, i) => {
            let ans = state.responses[i].selected;
            if (ans === null || ans === undefined) {
                unattempted++;
            } else if (ans === q.answer) {
                correct++;
            } else {
                wrong++;
            }
        });

        let rawScore = correct - (wrong * penaltyAmount);
        let finalScore = Math.max(0, rawScore).toFixed(2); 
        let totalQs = state.questions.length;
        let accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
        
        let totalTimeSecs = (state.totalDurationMinutes || 120) * 60;
        let timeTakenSecs = totalTimeSecs - state.timeLeftSeconds;
        let timeMin = Math.floor(timeTakenSecs / 60);
        let timeSec = timeTakenSecs % 60;
        let timeTakenStr = `${timeMin}m ${timeSec}s`;

        localStorage.setItem(`mock_history_${state.testId}`, JSON.stringify(state.responses));

        try {
            const { getApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js");
            if (getApps().length > 0) {
                const app = getApp();
                const { getFirestore, collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js");
                const db = getFirestore(app);
                
                const user = window.HPGK_User;
                if (user && user.uid) {
                    const appId = 'hpgk-quiz'; 
                    await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'scores'), {
                        testId: state.testId,
                        category: state.exam,
                        score: parseFloat(finalScore),
                        total: totalQs,
                        correct: correct,
                        wrong: wrong,
                        accuracy: accuracy,
                        timeTaken: timeTakenSecs,
                        timestamp: Date.now()
                    });
                }
            }
        } catch(e) {
            console.error("Firebase Sync Error:", e);
        }

        DOM.blocker.style.display = 'none';
        renderFinalResultUI(finalScore, totalQs, accuracy, timeTakenStr, correct, wrong, unattempted);
    }

    function showResultPanelDirectly() {
        let correct = 0, wrong = 0, unattempted = 0;
        let penaltyTextStr = DOM.penaltyText ? DOM.penaltyText.innerText : "0.25";
        let penaltyAmount = parseFloat(penaltyTextStr) || 0;

        state.questions.forEach((q, i) => {
            let ans = state.responses[i].selected;
            if (ans === null || ans === undefined) {
                unattempted++;
            } else if (ans === q.answer) {
                correct++;
            } else {
                wrong++;
            }
        });

        let rawScore = correct - (wrong * penaltyAmount);
        let finalScore = Math.max(0, rawScore).toFixed(2); 
        let totalQs = state.questions.length;
        let accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
        
        renderFinalResultUI(finalScore, totalQs, accuracy, "Previous Attempt", correct, wrong, unattempted);
    }

    window.addEventListener('DOMContentLoaded', () => { init(); });

    return {
        startExam,
        handleInstLanguageChange,
        changeLanguage,
        adjustFontSize,
        selectOption,
        saveAndNext,
        previousQuestion,
        markForReview,
        clearResponse,
        jumpTo,
        submitTest,
        resumeTest,
        finalSubmit,
        toggleMidTestInstructions,
        toggleRightPanel,
        showSectionStats
    };

})();
