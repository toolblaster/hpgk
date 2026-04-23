/**
 * --------------------------------------------------------------------------
 * HPGK MOCK TEST ENGINE - PRODUCTION LEVEL (FREEMIUM GATEKEEPER)
 * Includes Secure Paywall Routing, Score Calculation & Firebase DB Sync
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

    function init() {
        // Fetch DOM elements
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
        state.exam = urlParams.get('exam');     
        state.testId = urlParams.get('testId');   

        if (!state.exam || !state.testId) {
            triggerFatalError("Invalid Test Link", "Please start the test properly from your Exam Dashboard.", "../user/dashboard.html", "Go to Dashboard");
            return;
        }

        // ====================================================================
        // PRODUCTION GATEKEEPER: SECURE AUTH & PASS VERIFICATION
        // ====================================================================
        waitForAuth().then((isLoggedIn) => {
            const user = window.HPGK_User;
            
            // RULE 1: Must be logged in (even for free tests to track history)
            if (!isLoggedIn || !user) {
                 triggerFatalError("Login Required", "You must be logged in to attempt any mock test securely. Please log in from the Dashboard.", "../user/dashboard.html", "Login / Dashboard");
                 return;
            }

            // Populate User UI
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

            // RULE 2: Freemium Paywall Logic
            // Test ID ending with '-1' is considered the Free Demo Mock. All others are Premium.
            const isFreeTest = state.testId.endsWith('-1'); 
            
            // Check if user object has passes and if 'mock_master_pass' exists in it
            const hasPremiumPass = user.passes && user.passes['mock_master_pass'];
            
            if (!isFreeTest && !hasPremiumPass) {
                // User is trying to access a premium test without a pass
                triggerFatalError(
                    "Premium Content Locked <i class='fa-solid fa-crown' style='color:#f59e0b;'></i>", 
                    "This is a Premium Full-Length Mock Test. You need the 'Mock Master Pass' to unlock this content.", 
                    "../user/upgrade.html", 
                    "Upgrade to PRO <i class='fa-solid fa-bolt'></i>",
                    "var(--accent)" // Premium button color
                );
                return;
            }

            // All Security Checks Passed! Proceed to fetch data.
            fetchTestData();
        });

        // Tooltip close listener
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

                if (++attempts > 40) { // Wait up to 4 seconds
                    clearInterval(check);
                    resolve(window.HPGK_User ? window.HPGK_User.isLoggedIn : false);
                }
            }, 100);
        });
    }

    function triggerFatalError(title, desc, btnLink, btnText, btnColor = "var(--primary)") {
        // Create a beautiful, un-closable premium blocker UI
        DOM.blocker.innerHTML = `
            <div style="background:var(--card-bg); padding:30px 25px; border-radius:16px; box-shadow:var(--glass-shadow); border:1px solid var(--border-color); max-width:400px; text-align:center; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
                <i class="fa-solid fa-shield-halved" style="font-size: 3.5rem; color: var(--text-sec); margin-bottom: 20px; opacity:0.8;"></i>
                <h2 style="margin:0 0 10px 0; font-size: 1.4rem; font-weight: 900; color: var(--text-main); line-height:1.3;">${title}</h2>
                <p style="font-size:0.85rem; color:var(--text-sec); margin: 0 auto 25px auto; line-height:1.5; font-weight:500;">${desc}</p>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <button onclick="window.location.href='${btnLink}'" style="padding: 12px 20px; background:${btnColor}; color:white; border:none; border-radius:30px; font-weight:800; cursor:pointer; width:100%; transition:0.2s; box-shadow:0 4px 15px rgba(0,0,0,0.15); font-family:'Inter', sans-serif;">${btnText}</button>
                    <button onclick="window.history.back()" style="padding: 12px 20px; background:var(--input-bg); color:var(--text-main); border:1px solid var(--border-color); border-radius:30px; font-weight:700; cursor:pointer; width:100%; transition:0.2s; font-family:'Inter', sans-serif;">Go Back</button>
                </div>
            </div>
        `;
        DOM.blocker.style.backgroundColor = "rgba(0,0,0,0.75)"; // Darken the background securely
        DOM.blocker.style.backdropFilter = "blur(8px)";
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

            // Everything is ready. Remove blocker and show instructions.
            DOM.blocker.style.display = 'none';
            DOM.instPanel.style.display = 'flex'; 

            DOM.instAgree.addEventListener('change', (e) => {
                DOM.btnStart.disabled = !e.target.checked;
                DOM.btnStart.style.opacity = e.target.checked ? '1' : '0.5';
                DOM.btnStart.style.cursor = e.target.checked ? 'pointer' : 'not-allowed';
            });

        } catch (error) {
            triggerFatalError("Test Data Missing", "Could not load test data. Please try again later or contact support.", "../user/dashboard.html", "Go to Dashboard");
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
            DOM.panelArrow.classList.replace('fa-chevron-right', 'fa-chevron-left');
        } else {
            DOM.rightPanel.classList.remove('collapsed');
            DOM.panelArrow.classList.replace('fa-chevron-left', 'fa-chevron-right');
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
                <label class="option-label">
                    <input type="radio" name="exam_q" value="${i}" ${isChecked} onchange="engine.selectOption(${i})">
                    <span>${opt}</span>
                </label>
            `;
        }).join('');

        const questionText = state.language === 'hi' && q.questionHi ? q.questionHi : q.questionEn;
        const fontClass = state.language === 'hi' ? "font-family: 'Noto Sans Devanagari', sans-serif;" : "";

        DOM.qContent.innerHTML = `
            <div id="ui-q-text-container" style="margin-bottom: 20px; font-weight: 600; line-height: 1.6; ${fontClass}">${questionText}</div>
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

    async function finalSubmit() {
        clearInterval(state.timerInterval);

        DOM.summaryPanel.style.display = 'none';
        
        // Show calculating overlay briefly
        DOM.secTitle.innerText = "Calculating Score...";
        DOM.secDesc.innerText = "Saving result securely to the cloud. Please don't refresh.";
        DOM.blocker.style.display = 'flex';
        
        // 1. SMART SCORE CALCULATION
        let correct = 0, wrong = 0, unattempted = 0;
        let penaltyTextStr = DOM.penaltyText ? DOM.penaltyText.innerText : "0.25";
        let penaltyAmount = parseFloat(penaltyTextStr) || 0.25;

        state.questions.forEach((q, i) => {
            let ans = state.responses[i].selected;
            if (ans === null) {
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

        // 2. FIREBASE SYNC (PRODUCTION)
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

        // 3. RENDER ADVANCED ANALYTICS SCREEN
        // Note: Removed the trial "alert" box here. Directly loading UI.
        DOM.blocker.style.display = 'none';
        
        DOM.resScoreVal.innerText = finalScore + ' / ' + totalQs;
        DOM.resAccVal.innerText = accuracy + '%';
        DOM.resTimeVal.innerText = timeTakenStr;
        DOM.resCorrVal.innerText = correct;
        DOM.resWrongVal.innerText = wrong;
        DOM.resSkipVal.innerText = unattempted;

        let detailsHtml = '';
        state.questions.forEach((q, i) => {
            let ans = state.responses[i].selected;
            let statusClass = '';
            let statusBadge = '';
            
            if (ans === null) {
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
                        <div style="flex:1;">${opt}</div>
                    </div>
                `;
            }).join('');

            detailsHtml += `
                <div class="res-q-card ${statusClass}">
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

        DOM.resDetailedList.innerHTML = detailsHtml;
        DOM.resultPanel.style.display = 'flex';
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
