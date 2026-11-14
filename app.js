/* ============================================
   JSÖyrən - Main Application Logic
   ============================================ */

(function () {
    'use strict';

    // ---- State ----
    const STORAGE_KEY = 'jsoyren_progress';
    const THEME_KEY = 'jsoyren_theme';
    const EXAM_HISTORY_KEY = 'jsoyren_exam_history';
    const TOTAL_SECTIONS = 21;

    // ---- Təhlükəsiz Brauzer Yaddaşı (Storage) Qoruyucusu ----
    const safeStorage = {
        getItem(key) {
            try {
                if (typeof localStorage !== 'undefined') {
                    return localStorage.getItem(key);
                }
            } catch (e) {
                console.warn('[Storage] ' + key + ' oxunarkən xəta:', e);
            }
            return null;
        },
        setItem(key, value) {
            try {
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem(key, value);
                    return true;
                }
            } catch (e) {
                console.warn('[Storage] ' + key + ' yazılarkən xəta (kvota və ya qadağa):', e);
            }
            return false;
        },
        removeItem(key) {
            try {
                if (typeof localStorage !== 'undefined') {
                    localStorage.removeItem(key);
                    return true;
                }
            } catch (e) {}
            return false;
        }
    };

    // Dinamik Kurikulum Keşləməsi (O(1) axtarış və yeniləmə)
    let _cachedCurriculumTaskIds = null;
    let _cachedTotalCurriculumTasks = null;
    function invalidateCurriculumCache() {
        _cachedCurriculumTaskIds = null;
        _cachedTotalCurriculumTasks = null;
    }

    // Vahid Etibarlı Mənbə (Single Source of Truth) dinamik sayğacları
    function getTotalCurriculumTasks() {
        if (!CURRICULUM || CURRICULUM.length === 0) {
            if (typeof window !== 'undefined' && Array.isArray(window.CURRICULUM) && window.CURRICULUM.length > 0) {
                CURRICULUM = window.CURRICULUM;
            } else {
                buildCurriculum();
            }
        }
        return calculateTotalCurriculumTasks(CURRICULUM);
    }

    function getTotalPanelTasks() {
        const data = (typeof TASKS_PANEL_DATA !== 'undefined' && Array.isArray(TASKS_PANEL_DATA)) 
            ? TASKS_PANEL_DATA 
            : ((typeof window !== 'undefined' && Array.isArray(window.TASKS_PANEL_DATA)) ? window.TASKS_PANEL_DATA : null);
        if (data) {
            return data.reduce((acc, s) => acc + (s.tasks ? s.tasks.length : 0), 0);
        }
        return 0;
    }

    function getTotalPanelBugs() {
        const data = (typeof ERRORS_PANEL_DATA !== 'undefined' && Array.isArray(ERRORS_PANEL_DATA)) 
            ? ERRORS_PANEL_DATA 
            : ((typeof window !== 'undefined' && Array.isArray(window.ERRORS_PANEL_DATA)) ? window.ERRORS_PANEL_DATA : null);
        if (data) {
            return data.reduce((acc, s) => acc + (s.bugs ? s.bugs.length : (s.errors ? s.errors.length : 0)), 0);
        }
        return 0;
    }

    function getTotalEcosystemTopics() {
        const data = (typeof ECOSYSTEM_LESSONS_DATA !== 'undefined' && Array.isArray(ECOSYSTEM_LESSONS_DATA))
            ? ECOSYSTEM_LESSONS_DATA
            : ((typeof window !== 'undefined' && Array.isArray(window.ECOSYSTEM_LESSONS_DATA)) ? window.ECOSYSTEM_LESSONS_DATA : null);
        if (data) {
            return data.length;
        }
        return 0;
    }

    function getTotalPlatformChallenges() {
        return getTotalCurriculumTasks() +
               getTotalPanelTasks() +
               getTotalPanelBugs() +
               getTotalEcosystemTopics();
    }

    function getTotalPlatformSolved() {
        const validCurriculum = getValidCompletedTaskCount(state, CURRICULUM);
        const panelTasks = state.completedPanelTasks ? state.completedPanelTasks.size : 0;
        const panelErrors = state.completedPanelErrors ? state.completedPanelErrors.size : 0;
        const ecosystem = state.completedEcosystemTopics ? state.completedEcosystemTopics.size : 0;
        return validCurriculum + panelTasks + panelErrors + ecosystem;
    }

    let state = {
        currentView: 'welcome', // 'welcome', 'topic', 'sandbox', 'tasks-panel', 'errors-panel', 'exam'
        currentTopicId: null,
        currentTab: 'theory',
        user: {
            name: "Tələbə",
            streakDays: 1,
            lastActiveDate: ""
        },
        completedTopics: new Set(),
        completedExercises: new Set(),
        completedBugFixes: new Set(),
        completedPanelTasks: new Set(),
        completedPanelErrors: new Set(),
        passedExamQuestions: new Set(),
        unlockedAchievements: new Set(),
        completedEcosystemTopics: new Set(),
        completedHourglassChallenges: new Set(),
        userDrafts: {}, // { [id]: string }
        tasksPanelRendered: false,
        errorsPanelRendered: false,
        jsEngineReady: true,
        editors: {},
        sandboxEditor: null,
        panelEditors: {},
        tasksFilter: { section: 'all', diff: 'all', search: '' },
        errorsFilter: { section: 'all', diff: 'all', search: '' }
    };

    let examState = {
        inProgress: false,
        selectedMode: 'all',
        selectedQuestionCount: 10,
        selectedTimeLimitMinutes: 20,
        questions: [],
        currentIndex: 0,
        userAnswers: {},
        validatedQuestions: new Set(),
        testOutputs: {},
        revealedHints: {},
        surrenderedQuestions: new Set(),
        timerInterval: null,
        totalSeconds: 1200,
        remainingSeconds: 1200,
        editorInstance: null
    };

    let hourglassState = {
        inProgress: false,
        currentChallengeId: 'hg-1',
        selectedMinutes: 10,
        totalSeconds: 600,
        remainingSeconds: 600,
        elapsedSeconds: 0,
        timerInterval: null,
        isPaused: true,
        revealedHints: 0,
        userDrafts: {},
        editorInstance: null,
        lastEvalResult: null
    };

    let saveProgressTimeout = null;
    function debouncedSaveProgress() {
        if (saveProgressTimeout) clearTimeout(saveProgressTimeout);
        saveProgressTimeout = setTimeout(saveProgress, 400);
    }

    function debounce(fn, delayMs = 250) {
        let timer = null;
        return function(...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, args);
            }, delayMs);
        };
    }

    function cleanStr(s) {
        return (s || '').replace(/\r\n/g, '\n').trim();
    }

    function compareOutputs(uRaw, eRaw) {
        const u = cleanStr(uRaw);
        const e = cleanStr(eRaw);
        if (u === e) return true;
        if (u.replace(/\s+/g, ' ') === e.replace(/\s+/g, ' ')) return true;
        try {
            const normU = JSON.stringify(JSON.parse(u));
            const sanitizeE = e.replace(/'/g, '"').replace(/([{,]\s*)([a-zA-Z0-9_$]+)\s*:/g, '$1"$2":');
            const normE = JSON.stringify(JSON.parse(sanitizeE));
            if (normU === normE) return true;
        } catch(err) {}
        return false;
    }

    // ---- Curriculum ----
    let CURRICULUM = [];

    function buildCurriculum() {
        invalidateCurriculumCache();
        if (typeof window !== 'undefined' && Array.isArray(window.CURRICULUM) && window.CURRICULUM.length > 0 && CURRICULUM.length === 0) {
            CURRICULUM = window.CURRICULUM;
            return;
        }
        CURRICULUM = [];
        if (typeof SECTIONS_1_5 !== 'undefined') CURRICULUM.push(...SECTIONS_1_5);
        if (typeof SECTIONS_6_9 !== 'undefined') CURRICULUM.push(...SECTIONS_6_9);
        if (typeof SECTIONS_10_13 !== 'undefined') CURRICULUM.push(...SECTIONS_10_13);
        if (typeof SECTIONS_14 !== 'undefined') CURRICULUM.push(...SECTIONS_14);
        if (typeof SECTIONS_15 !== 'undefined') CURRICULUM.push(...SECTIONS_15);
        if (typeof SECTIONS_16 !== 'undefined') CURRICULUM.push(...SECTIONS_16);
        if (typeof SECTIONS_17 !== 'undefined') CURRICULUM.push(...SECTIONS_17);
        if (typeof SECTIONS_18 !== 'undefined') CURRICULUM.push(...SECTIONS_18);
        if (typeof SECTIONS_19 !== 'undefined') CURRICULUM.push(...SECTIONS_19);
        if (typeof SECTIONS_20 !== 'undefined') CURRICULUM.push(...SECTIONS_20);
        if (typeof SECTIONS_21 !== 'undefined') CURRICULUM.push(...SECTIONS_21);

        // Vahid etibarlı mənbə (Single-Source-of-Truth) qlobal qeydiyyatı
        if (typeof window !== 'undefined') {
            window.CURRICULUM = CURRICULUM;
            window.curriculumData = { sections: CURRICULUM };
        }
    }

    /**
     * Kurikulumdakı bütün mövcud tapşırıq və xəta sazlama ID-lərinin toplusunu qaytarır.
     */
    function getAllCurriculumTaskIds(curriculum) {
        if (!curriculum && _cachedCurriculumTaskIds) return _cachedCurriculumTaskIds;
        const cur = (Array.isArray(curriculum) && curriculum.length > 0)
            ? curriculum
            : (Array.isArray(CURRICULUM) && CURRICULUM.length > 0 ? CURRICULUM : []);
        const validIds = new Set();
        cur.forEach(section => {
            if (!section || !Array.isArray(section.topics)) return;
            section.topics.forEach(topic => {
                if (!topic) return;
                if (Array.isArray(topic.exercises)) {
                    topic.exercises.forEach(ex => {
                        if (ex && ex.id) validIds.add(ex.id);
                    });
                } else if (topic.exercise && topic.exercise.id) {
                    validIds.add(topic.exercise.id);
                }
                if (Array.isArray(topic.bugFixes)) {
                    topic.bugFixes.forEach(bf => {
                        if (bf && bf.id) validIds.add(bf.id);
                    });
                } else if (topic.bugFix && topic.bugFix.id) {
                    validIds.add(topic.bugFix.id);
                }
            });
        });
        if (!curriculum && cur === CURRICULUM) _cachedCurriculumTaskIds = validIds;
        return validIds;
    }

    /**
     * Bütün 21 kurikulum bölməsi üzrə tapşırıqların dəqiq sayını dinamik hesablayır.
     */
    function calculateTotalCurriculumTasks(curriculum) {
        if (!curriculum && _cachedTotalCurriculumTasks !== null) return _cachedTotalCurriculumTasks;
        const cur = (Array.isArray(curriculum) && curriculum.length > 0)
            ? curriculum
            : (Array.isArray(CURRICULUM) && CURRICULUM.length > 0 ? CURRICULUM : []);
        if (!Array.isArray(cur) || cur.length === 0) return 0;

        const totalTaskCount = cur.reduce((total, section) => {
            if (!section || !Array.isArray(section.topics)) return total;
            const sectionTasks = section.topics.reduce((topicTotal, topic) => {
                if (!topic) return topicTotal;
                const exCount = Array.isArray(topic.exercises)
                    ? topic.exercises.length
                    : (topic.exercise && topic.exercise.id ? 1 : 0);
                const bfCount = Array.isArray(topic.bugFixes)
                    ? topic.bugFixes.length
                    : (topic.bugFix && topic.bugFix.id ? 1 : 0);
                return topicTotal + exCount + bfCount;
            }, 0);
            return total + sectionTasks;
        }, 0);
        if (!curriculum && cur === CURRICULUM) _cachedTotalCurriculumTasks = totalTaskCount;
        return totalTaskCount;
    }

    /**
     * Yalnız təsdiqlənmiş kurikulum tapşırıq ID-lərinə uyğun gələn tamamlanmış tapşırıq sayını hesablayır.
     */
    function getValidCompletedTaskCount(curState, curriculum) {
        const validIds = getAllCurriculumTaskIds(curriculum);
        if (!curState || validIds.size === 0) return 0;

        let count = 0;
        const countMatches = (collection) => {
            if (!collection) return;
            if (typeof collection.forEach === 'function') {
                collection.forEach(id => {
                    if (validIds.has(id)) count++;
                });
            } else if (Array.isArray(collection)) {
                collection.forEach(id => {
                    if (validIds.has(id)) count++;
                });
            }
        };

        countMatches(curState.completedExercises);
        countMatches(curState.completedBugFixes);

        return count;
    }

    // Helper funksiyaları qlobal mühitə bağla
    if (typeof window !== 'undefined') {
        window.getAllCurriculumTaskIds = getAllCurriculumTaskIds;
        window.calculateTotalCurriculumTasks = calculateTotalCurriculumTasks;
        window.getValidCompletedTaskCount = getValidCompletedTaskCount;
        window.getTotalCurriculumTasks = getTotalCurriculumTasks;
        window.getTotalPanelTasks = getTotalPanelTasks;
        window.getTotalPanelBugs = getTotalPanelBugs;
        window.getTotalEcosystemTopics = getTotalEcosystemTopics;
        window.getTotalPlatformChallenges = getTotalPlatformChallenges;
        window.getTotalPlatformSolved = getTotalPlatformSolved;
        window.TOTAL_PLATFORM_CHALLENGES = getTotalPlatformChallenges;
    }

    function getAllTopics() {
        const topics = [];
        CURRICULUM.forEach(section => {
            section.topics.forEach(topic => {
                topics.push({ ...topic, sectionTitle: section.title, sectionId: section.id });
            });
        });
        return topics;
    }

    function getTopicById(id) {
        for (const section of CURRICULUM) {
            for (const topic of section.topics) {
                if (topic.id === id) return { topic, section };
            }
        }
        return null;
    }

    function getTopicIndex(id) {
        const all = getAllTopics();
        return all.findIndex(t => t.id === id);
    }

    // ---- Date & Persistence Helpers ----
    function getTodayDateString() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // ---- Gamified Achievements Registry (Anti-Cheat & Progress) ----
    function getSectionCompletedCount(s, secNum) {
        if (!s) return 0;
        const regex = new RegExp(`^(ex|bug|tp|ep)-${secNum}-`);
        let count = 0;
        const checkSet = (set) => {
            if (!set) return;
            set.forEach(id => {
                if (regex.test(id) || id.includes(`-${secNum}-`)) count++;
            });
        };
        checkSet(s.completedExercises);
        checkSet(s.completedBugFixes);
        checkSet(s.completedPanelTasks);
        checkSet(s.completedPanelErrors);
        return count;
    }

    const ACHIEVEMENTS_CONFIG = [
        // --- Xəta Paneli və Sazlama Nailiyyətləri ---
        {
            id: 'first_bug_fixed',
            icon: '🐛',
            title: 'İlk Xəta Ovçusu',
            desc: 'İlk xətalı JavaScript kodunu uğurla tədqiq edib sazladın.',
            category: 'debugger',
            target: 1,
            getCurrent: (s) => ((s.completedPanelErrors ? s.completedPanelErrors.size : 0) + (s.completedBugFixes ? s.completedBugFixes.size : 0))
        },
        {
            id: 'bug_hunter_10',
            icon: '🛡️',
            title: 'Xəta Dedektivi',
            desc: 'Xəta panelində və ya sınaqlarda ən azı 10 xətanı tamamilə aradan qaldırdın.',
            category: 'debugger',
            target: 10,
            getCurrent: (s) => ((s.completedPanelErrors ? s.completedPanelErrors.size : 0) + (s.completedBugFixes ? s.completedBugFixes.size : 0))
        },
        {
            id: 'dom_debugger',
            icon: '🌐',
            title: 'DOM Detektivi',
            desc: 'DOM, Hadisələr, Storage və Fetch üzrə 10 xətanı sazladın (Bölmə 14-17).',
            category: 'debugger',
            target: 10,
            getCurrent: (s) => {
                let count = 0;
                const check = id => {
                    if (/^(ep|bug)-(14|15|16|17)-/.test(id) || id.includes('-14-') || id.includes('-15-') || id.includes('-16-') || id.includes('-17-')) count++;
                };
                if (s.completedPanelErrors) s.completedPanelErrors.forEach(check);
                if (s.completedBugFixes) s.completedBugFixes.forEach(check);
                return count;
            }
        },
        {
            id: 'backend_debugger',
            icon: '🟢',
            title: 'Backend Müfəttişi',
            desc: 'Node.js, Express, REST API və Bazalar üzrə 10 xətanı sazladın (Bölmə 18-21).',
            category: 'debugger',
            target: 10,
            getCurrent: (s) => {
                let count = 0;
                const check = id => {
                    if (/^(ep|bug)-(18|19|20|21)-/.test(id) || id.includes('-18-') || id.includes('-19-') || id.includes('-20-') || id.includes('-21-')) count++;
                };
                if (s.completedPanelErrors) s.completedPanelErrors.forEach(check);
                if (s.completedBugFixes) s.completedBugFixes.forEach(check);
                return count;
            }
        },
        {
            id: 'master_debugger',
            icon: '👑',
            title: 'Master Debugger',
            desc: 'Xəta Panelində 50-dən çox mürəkkəb real layihə problemini həll etdin.',
            category: 'debugger',
            target: 50,
            getCurrent: (s) => (s.completedPanelErrors ? s.completedPanelErrors.size : 0)
        },
        {
            id: 'bug_nemesis_210',
            icon: '⚡',
            title: 'Xətaların Qənimi (210/210)',
            desc: 'Xəta Panelinin bütün 21 bölməsindəki 210 sınağın hamısını darmadağın etdin!',
            category: 'debugger',
            target: 210,
            getCurrent: (s) => (s.completedPanelErrors ? s.completedPanelErrors.size : 0)
        },

        // --- Tədris və Mərhələ Nailiyyətləri ---
        {
            id: 'b-start',
            icon: '🚀',
            title: 'İlk Salam',
            desc: 'İlk JavaScript tapşırığını və ya kodunu uğurla icra etdin.',
            category: 'curriculum',
            target: 1,
            getCurrent: (s) => getTotalPlatformSolved() > 0 ? 1 : 0
        },
        {
            id: 'b-vars',
            icon: '📦',
            title: 'Dəyişən Ustası',
            desc: 'let, const və 7 primitiv məlumat tipini mənimsədin (Bölmə 2).',
            category: 'curriculum',
            target: 5,
            getCurrent: (s) => getSectionCompletedCount(s, 2)
        },
        {
            id: 'b-loops',
            icon: '🔄',
            title: 'Dövr Ustası',
            desc: 'Dövrlər (for, while, for..of) üzrə praktiki sınaqları tamamladın (Bölmə 5).',
            category: 'curriculum',
            target: 5,
            getCurrent: (s) => getSectionCompletedCount(s, 5)
        },
        {
            id: 'b-func',
            icon: '🧩',
            title: 'Funksiya Sehrbazı',
            desc: 'Arrow funksiyaları və parametr idarəetməsini mənimsədin (Bölmə 7).',
            category: 'curriculum',
            target: 5,
            getCurrent: (s) => getSectionCompletedCount(s, 7)
        },
        {
            id: 'b-obj',
            icon: '🗂️',
            title: 'Obyekt Memarı',
            desc: 'Obyektlər, metodlar və destrukturizasiyanı tamamladın (Bölmə 8).',
            category: 'curriculum',
            target: 5,
            getCurrent: (s) => getSectionCompletedCount(s, 8)
        },
        {
            id: 'b-array-methods',
            icon: '⚡',
            title: 'Funksional Dahi',
            desc: 'map(), filter() və reduce() metodları ilə massivləri idarə etdin (Bölmə 11).',
            category: 'curriculum',
            target: 5,
            getCurrent: (s) => getSectionCompletedCount(s, 11)
        },
        {
            id: 'b-async',
            icon: '⏳',
            title: 'Asinxron Qəhrəman',
            desc: 'Promises və async/await asinxronluğunu fəth etdin (Bölmə 13).',
            category: 'curriculum',
            target: 5,
            getCurrent: (s) => getSectionCompletedCount(s, 13)
        },
        {
            id: 'b-dom',
            icon: '🌐',
            title: 'DOM Sehri',
            desc: 'DOM ağacı, element seçiciləri və dinamik stilləri mənimsədin (Bölmə 14).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 14)
        },
        {
            id: 'b-events',
            icon: '⚡',
            title: 'İnteraktiv Usta',
            desc: 'Hadisə dinləyiciləri, formalar və Event Delegation-ı mənimsədin (Bölmə 15).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 15)
        },
        {
            id: 'b-storage',
            icon: '💾',
            title: 'Yaddaş Memarı',
            desc: 'Brauzer yaddaşı (localStorage) və Web API-ləri tətbiq etdin (Bölmə 16).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 16)
        },
        {
            id: 'b-fetch',
            icon: '📡',
            title: 'Şəbəkə Ustası',
            desc: 'Fetch API, HTTP metodları və şəbəkə vəziyyətlərini tam mənimsədin (Bölmə 17).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 17)
        },
        {
            id: 'b-node',
            icon: '🟢',
            title: 'Node Memarı',
            desc: 'Node.js icra mühiti, fs/path modulları və CommonJS-i mənimsədin (Bölmə 18).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 18)
        },
        {
            id: 'b-express',
            icon: '🚀',
            title: 'Express Mühəndisi',
            desc: 'HTTP protokolu, Express.js serverləri, routing və Middleware konveyerini mənimsədin (Bölmə 19).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 19)
        },
        {
            id: 'b-rest',
            icon: '🗄️',
            title: 'REST API Memarı',
            desc: 'RESTful API dizaynı, tam CRUD əməliyyatları və xəta idarəetməsini mənimsədin (Bölmə 20).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 20)
        },
        {
            id: 'b-db',
            icon: '🔐',
            title: 'Baza və Təhlükəsizlik Ustası',
            desc: 'Verilənlər bazası (SQL/NoSQL), parametrləşdirilmiş sorğular, .env və CORS siyasətini mənimsədin (Bölmə 21).',
            category: 'curriculum',
            target: 3,
            getCurrent: (s) => getSectionCompletedCount(s, 21)
        },
        {
            id: 'b-grad',
            icon: '🎓',
            title: 'Bootcamp Məzunu',
            desc: 'Platformada ən azı 100 tapşırıq və sınağı uğurla tamamladın.',
            category: 'milestone',
            target: 100,
            getCurrent: (s) => getTotalPlatformSolved()
        }
    ];

    if (typeof window !== 'undefined') {
        window.ACHIEVEMENTS_CONFIG = ACHIEVEMENTS_CONFIG;
    }

    function checkAndUnlockAchievements(showNotification = true) {
        if (!state.unlockedAchievements) {
            state.unlockedAchievements = new Set();
        }
        const newlyUnlocked = [];
        ACHIEVEMENTS_CONFIG.forEach(ach => {
            const current = ach.getCurrent(state);
            if (current >= ach.target) {
                if (!state.unlockedAchievements.has(ach.id)) {
                    state.unlockedAchievements.add(ach.id);
                    newlyUnlocked.push(ach);
                    if (showNotification) {
                        showToast(`🏆 Yeni Nailiyyət Qazanıldı: "${ach.title}"!`, 'success');
                    }
                }
            }
        });
        return newlyUnlocked;
    }

    // ---- Centralized Bidirectional State Synchronization Engine ----
    function syncPlatformProgress(options = {}) {
        // 1. Maintain active streak
        updateDailyStreak();

        // 2. Check and unlock gamified achievements
        const notify = options.notifyAchievements !== false;
        checkAndUnlockAchievements(notify);

        // 3. Save progress under standardized unified storage schema
        saveProgress();

        // 4. Update UI counters and progress bars
        updateProgressBar();
        renderHeroStats();
        if (typeof updateTasksPanelStats === 'function') updateTasksPanelStats();
        if (typeof updateErrorsPanelStats === 'function') updateErrorsPanelStats();
        if (typeof updateEcosystemProgressUI === 'function') updateEcosystemProgressUI();

        // 5. If progress view or roadmap is open, re-render
        if (state.currentView === 'progress' && typeof renderProgressView === 'function') {
            renderProgressView();
        }
        if (state.currentView === 'learn' && typeof renderRoadmap === 'function') {
            renderRoadmap();
        }
    }

    // ---- Persistence ----
    let lastQuotaWarningTime = 0;

    function saveProgress() {
        // Persist actual user learning progress, completed exercises, scores, and code inputs
        // Note: Navigation routes and active views are deliberately not persisted to ensure Welcome Dashboard on reload
        const streakData = getStreakData();
        const userName = (state.user && state.user.name) ? state.user.name : "Tələbə";
        const streakDays = (streakData && typeof streakData.streak === 'number') ? streakData.streak : 1;
        const lastActiveDate = (streakData && streakData.lastActiveDate) ? streakData.lastActiveDate : getTodayDateString();

        if (!state.user) {
            state.user = { name: userName, streakDays, lastActiveDate };
        } else {
            state.user.name = userName;
            state.user.streakDays = streakDays;
            state.user.lastActiveDate = lastActiveDate;
        }

        const data = {
            // Standardized unified state architecture under 'jsoyren_progress'
            user: {
                name: state.user.name,
                streakDays: state.user.streakDays,
                lastActiveDate: state.user.lastActiveDate
            },
            completedExercises: [...state.completedExercises],
            completedLessonBugs: [...state.completedBugFixes],
            completedPanelBugs: [...state.completedPanelErrors],
            passedExamQuestions: [...(state.passedExamQuestions || [])],
            unlockedAchievements: [...(state.unlockedAchievements || [])],

            // Backward compatibility properties for legacy consumers
            completedTopics: [...state.completedTopics],
            completedBugFixes: [...state.completedBugFixes],
            completedPanelTasks: [...state.completedPanelTasks],
            completedPanelErrors: [...state.completedPanelErrors],
            completedEcosystemTopics: [...(state.completedEcosystemTopics || [])],
            completedHourglassChallenges: [...(state.completedHourglassChallenges || [])],
            userDrafts: state.userDrafts
        };
        try {
            if (typeof StorageEngine !== 'undefined') {
                StorageEngine.setItem(STORAGE_KEY, data);
                StorageEngine.setItem('jsoyren_ecosystem_progress', [...(state.completedEcosystemTopics || [])]);
            } else {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                localStorage.setItem('jsoyren_ecosystem_progress', JSON.stringify([...(state.completedEcosystemTopics || [])]));
            }
        } catch (e) {
            console.warn('Could not save progress:', e);
            const isQuota = e && (
                e.name === 'QuotaExceededError' ||
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
                e.code === 22 ||
                e.code === 1014
            );
            if (isQuota) {
                const now = Date.now();
                if (now - lastQuotaWarningTime > 30000) {
                    lastQuotaWarningTime = now;
                    showToast('Brauzer yaddaşı dolub! İrəliləyiş IndexedDB-də qorunur.', 'warning');
                }
            }
        }
    }

    function loadProgress() {
        try {
            let data = null;
            if (typeof StorageEngine !== 'undefined') {
                const stored = StorageEngine.getItemSync(STORAGE_KEY);
                if (stored) {
                    data = (typeof stored === 'string') ? JSON.parse(stored) : stored;
                }
            }
            if (!data) {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    try {
                        data = JSON.parse(raw);
                    } catch (e) {
                        data = null;
                    }
                }
            }
            const ecoData = (typeof ECOSYSTEM_LESSONS_DATA !== 'undefined' && Array.isArray(ECOSYSTEM_LESSONS_DATA))
                ? ECOSYSTEM_LESSONS_DATA
                : ((typeof window !== 'undefined' && Array.isArray(window.ECOSYSTEM_LESSONS_DATA)) ? window.ECOSYSTEM_LESSONS_DATA : null);
            let validEcoIds = null;
            if (ecoData) {
                validEcoIds = new Set(ecoData.map(item => item && item.id).filter(Boolean));
            }

            if (data) {
                const validCurriculumIds = getAllCurriculumTaskIds(CURRICULUM);

                // 1. User metadata - derive streak info from streak data (single source of truth)
                const streakData = getStreakData();
                state.user = {
                    name: (data.user && typeof data.user.name === 'string' && data.user.name) ? data.user.name : "Tələbə",
                    streakDays: (streakData && typeof streakData.streak === 'number') ? streakData.streak : 1,
                    lastActiveDate: (streakData && streakData.lastActiveDate) ? streakData.lastActiveDate : getTodayDateString()
                };

                // 2. Completed Topics
                if (data.completedTopics && Array.isArray(data.completedTopics)) {
                    state.completedTopics = new Set(data.completedTopics.filter(id => typeof id === 'string' && !id.startsWith('topic-22-')));
                }

                // 3. Completed Exercises
                if (data.completedExercises && Array.isArray(data.completedExercises)) {
                    state.completedExercises = new Set(data.completedExercises.filter(id => typeof id === 'string' && !id.startsWith('ex-22-') && (validCurriculumIds.size === 0 || validCurriculumIds.has(id))));
                }

                // 4. Completed Lesson Bugs (accepts both completedLessonBugs and completedBugFixes)
                const rawLessonBugs = Array.isArray(data.completedLessonBugs) ? data.completedLessonBugs : (Array.isArray(data.completedBugFixes) ? data.completedBugFixes : null);
                if (rawLessonBugs) {
                    state.completedBugFixes = new Set(rawLessonBugs.filter(id => typeof id === 'string' && !id.startsWith('bug-22-') && (validCurriculumIds.size === 0 || validCurriculumIds.has(id))));
                }

                // 5. Completed Panel Tasks
                const tasksData = (typeof TASKS_PANEL_DATA !== 'undefined' && Array.isArray(TASKS_PANEL_DATA)) 
                    ? TASKS_PANEL_DATA 
                    : ((typeof window !== 'undefined' && Array.isArray(window.TASKS_PANEL_DATA)) ? window.TASKS_PANEL_DATA : null);
                let validTaskIds = null;
                if (tasksData) {
                    validTaskIds = new Set();
                    tasksData.forEach(s => {
                        if (s && s.tasks && Array.isArray(s.tasks)) {
                            s.tasks.forEach(t => { if (t && t.id) validTaskIds.add(t.id); });
                        }
                    });
                }
                if (data.completedPanelTasks && Array.isArray(data.completedPanelTasks)) {
                    state.completedPanelTasks = new Set(data.completedPanelTasks.filter(id => typeof id === 'string' && !id.startsWith('tp-22-') && (!validTaskIds || validTaskIds.has(id))));
                }

                // 6. Completed Panel Bugs (accepts both completedPanelBugs and completedPanelErrors)
                const errorsData = (typeof ERRORS_PANEL_DATA !== 'undefined' && Array.isArray(ERRORS_PANEL_DATA)) 
                    ? ERRORS_PANEL_DATA 
                    : ((typeof window !== 'undefined' && Array.isArray(window.ERRORS_PANEL_DATA)) ? window.ERRORS_PANEL_DATA : null);
                let validBugIds = null;
                if (errorsData) {
                    validBugIds = new Set();
                    errorsData.forEach(s => {
                        const bugs = s ? (s.bugs || s.errors) : null;
                        if (bugs && Array.isArray(bugs)) {
                            bugs.forEach(b => { if (b && b.id) validBugIds.add(b.id); });
                        }
                    });
                }
                const rawPanelBugs = Array.isArray(data.completedPanelBugs) ? data.completedPanelBugs : (Array.isArray(data.completedPanelErrors) ? data.completedPanelErrors : null);
                if (rawPanelBugs) {
                    state.completedPanelErrors = new Set(rawPanelBugs.filter(id => typeof id === 'string' && !id.startsWith('ep-22-') && (!validBugIds || validBugIds.has(id))));
                }

                // 7. Passed Exam Questions
                if (data.passedExamQuestions && Array.isArray(data.passedExamQuestions)) {
                    state.passedExamQuestions = new Set(data.passedExamQuestions.filter(id => typeof id === 'string'));
                } else {
                    state.passedExamQuestions = new Set();
                }

                // 8. Unlocked Achievements
                if (data.unlockedAchievements && Array.isArray(data.unlockedAchievements)) {
                    state.unlockedAchievements = new Set(data.unlockedAchievements.filter(id => typeof id === 'string'));
                } else {
                    state.unlockedAchievements = new Set();
                }

                // 9. Ecosystem Topics
                if (data.completedEcosystemTopics && Array.isArray(data.completedEcosystemTopics)) {
                    state.completedEcosystemTopics = new Set(data.completedEcosystemTopics.filter(id => typeof id === 'string' && (!validEcoIds || validEcoIds.has(id))));
                }

                // 9b. Hourglass Challenges
                if (data.completedHourglassChallenges && Array.isArray(data.completedHourglassChallenges)) {
                    state.completedHourglassChallenges = new Set(data.completedHourglassChallenges.filter(id => typeof id === 'string'));
                }

                // 10. User Drafts
                if (data.userDrafts && typeof data.userDrafts === 'object') {
                    state.userDrafts = data.userDrafts;
                    Object.keys(state.userDrafts).forEach(k => {
                        if (k.startsWith('tp-15-') || k.startsWith('ep-15-')) {
                            delete state.userDrafts[k];
                        }
                        if (k.startsWith('bf-')) {
                            const draft = state.userDrafts[k];
                            if (!draft || draft.trim() === '' || draft.trim() === '// Kodunuzu buraya yazın') {
                                delete state.userDrafts[k];
                            }
                        }
                    });
                }
            } else {
                const streakData = getStreakData();
                state.user = {
                    name: "Tələbə",
                    streakDays: (streakData && typeof streakData.streak === 'number') ? streakData.streak : 1,
                    lastActiveDate: (streakData && streakData.lastActiveDate) ? streakData.lastActiveDate : getTodayDateString()
                };
            }

            try {
                const storedEco = (typeof StorageEngine !== 'undefined') ? StorageEngine.getItemSync('jsoyren_ecosystem_progress') : null;
                const ecoRaw = storedEco || localStorage.getItem('jsoyren_ecosystem_progress');
                if (ecoRaw) {
                    const parsed = (typeof ecoRaw === 'string') ? JSON.parse(ecoRaw) : ecoRaw;
                    if (Array.isArray(parsed)) {
                        parsed.forEach(id => {
                            if (typeof id === 'string' && (!validEcoIds || validEcoIds.has(id))) {
                                state.completedEcosystemTopics.add(id);
                            }
                        });
                    }
                }
            } catch (e) {}

            // Populate passedExamQuestions from exam history if not populated yet
            if (!state.passedExamQuestions || state.passedExamQuestions.size === 0) {
                if (!state.passedExamQuestions) state.passedExamQuestions = new Set();
                try {
                    const storedHist = (typeof StorageEngine !== 'undefined') ? StorageEngine.getItemSync(EXAM_HISTORY_KEY) : null;
                    const histRaw = storedHist || localStorage.getItem(EXAM_HISTORY_KEY);
                    if (histRaw) {
                        const history = (typeof histRaw === 'string') ? JSON.parse(histRaw) : histRaw;
                        if (Array.isArray(history)) {
                            history.forEach(item => {
                                if (item.reviews && Array.isArray(item.reviews)) {
                                    item.reviews.forEach(r => {
                                        if (r.isCorrect && r.id) {
                                            state.passedExamQuestions.add(r.id);
                                        }
                                    });
                                }
                            });
                        }
                    }
                } catch (e) {}
            }

            // Sync user streak info with streak storage
            if (state.user && state.user.streakDays) {
                try {
                    const currentStreakRaw = localStorage.getItem('jsoyren_streak_data');
                    if (!currentStreakRaw) {
                        localStorage.setItem('jsoyren_streak', String(state.user.streakDays));
                        localStorage.setItem('jsoyren_last_active_date', state.user.lastActiveDate);
                        localStorage.setItem('jsoyren_streak_data', JSON.stringify({
                            streak: state.user.streakDays,
                            lastActiveDate: state.user.lastActiveDate,
                            bestStreak: state.user.streakDays,
                            tier: getStreakTier(state.user.streakDays).tier
                        }));
                    }
                } catch (e) {}
            }

            // Evaluate achievements based on loaded progress
            checkAndUnlockAchievements(false);

            // Always ensure the active view state defaults to the Welcome Dashboard and no topic is expanded on reload
            state.currentView = 'welcome';
            state.currentTopicId = null;
        } catch (e) {
            console.warn('Could not load progress:', e);
        }
    }

    function resetAllProgress() {
        const confirmed = (typeof window !== 'undefined' && typeof window.confirm === 'function')
            ? window.confirm("Bütün tədris irəliləməniz, həll edilmiş tapşırıqlar, imtahan nəticələri və ardıcıl gün seriyanız tamamilə silinəcək. Əminsiniz?")
            : (typeof confirm === 'function' ? confirm("Bütün tədris irəliləməniz, həll edilmiş tapşırıqlar, imtahan nəticələri və ardıcıl gün seriyanız tamamilə silinəcək. Əminsiniz?") : true);
        if (!confirmed) return;

        // 1. Terminate active exam timers and state
        if (examState.timerInterval) {
            clearInterval(examState.timerInterval);
            examState.timerInterval = null;
        }
        examState.inProgress = false;
        examState.selectedMode = 'all';
        examState.validatedQuestions = new Set();
        examState.userAnswers = {};
        examState.testOutputs = {};
        examState.revealedHints = {};
        examState.surrenderedQuestions = new Set();
        examState.questions = [];
        examState.currentIndex = 0;
        examState.currentExamQuestions = [];
        examState.currentQuestionIndex = 0;

        // 2. Clear all in-memory completion sets and tracking
        state.completedTopics.clear();
        state.completedExercises.clear();
        state.completedBugFixes.clear();
        state.completedPanelTasks.clear();
        state.completedPanelErrors.clear();
        if (state.passedExamQuestions) {
            state.passedExamQuestions.clear();
        }
        if (state.unlockedAchievements) {
            state.unlockedAchievements.clear();
        }
        if (state.completedEcosystemTopics) {
            state.completedEcosystemTopics.clear();
        }
        if (state.completedHourglassChallenges) {
            state.completedHourglassChallenges.clear();
        }
        stopHourglassTimer();
        hourglassState.inProgress = false;
        hourglassState.userDrafts = {};
        hourglassState.lastEvalResult = null;
        hourglassState.elapsedSeconds = 0;
        hourglassState.revealedHints = 0;
        state.userDrafts = {};
        state.tasksPanelRendered = false;
        state.errorsPanelRendered = false;
        state.panelEditors = {};
        state.currentTopicId = null;
        state.currentView = 'welcome';

        // 3. Wipe all storage keys (while preserving theme preference)
        if (typeof StorageEngine !== 'undefined') {
            try {
                StorageEngine.clearAllProgress(true);
            } catch (e) {}
        }
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.startsWith('jsoyren_') || key.startsWith('pyoyren_')) && key !== THEME_KEY) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(k => safeStorage.removeItem(k));
        } catch (e) {}

        // 4. Reset streak to Day 1 / Tier 1
        const todayStr = getTodayDateString();
        state.user = {
            name: "Tələbə",
            streakDays: 1,
            lastActiveDate: todayStr
        };
        const resetStreakData = {
            streak: 1,
            lastActiveDate: todayStr,
            bestStreak: 1,
            tier: 1
        };
        try {
            localStorage.setItem('jsoyren_streak_data', JSON.stringify(resetStreakData));
            localStorage.setItem('jsoyren_streak', '1');
            localStorage.setItem('jsoyren_last_active_date', todayStr);
        } catch (e) {}

        if (typeof updateStreakFlame === 'function') {
            updateStreakFlame(1);
        }

        // 5. Reset progress counters in DOM
        const totalPlatformChallenges = getTotalPlatformChallenges();
        const totalCurriculumTasks = getTotalCurriculumTasks();
        const totalPanelTasks = getTotalPanelTasks();
        const totalPanelErrors = getTotalPanelBugs();

        const progressText = document.getElementById('progress-text');
        if (progressText) progressText.textContent = '0% tamamlanıb';
        const progressFraction = document.getElementById('progress-fraction');
        if (progressFraction) progressFraction.textContent = `0/${totalPlatformChallenges}`;
        const progressBarFill = document.getElementById('progress-bar-fill');
        if (progressBarFill) progressBarFill.style.width = '0%';

        const heroSolved = document.getElementById('hero-solved-count');
        if (heroSolved) heroSolved.textContent = '0';
        const heroTasks = document.getElementById('hero-tasks-count');
        if (heroTasks) heroTasks.textContent = `${totalCurriculumTasks}`;

        const roadmapPct = document.getElementById('roadmap-pct');
        if (roadmapPct) roadmapPct.textContent = '0%';
        const roadmapFraction = document.getElementById('roadmap-fraction');
        if (roadmapFraction) roadmapFraction.textContent = `0/21 bölmə (0/${totalCurriculumTasks} tapşırıq)`;
        const circleFill = document.getElementById('roadmap-circle-fill');
        if (circleFill) circleFill.style.strokeDashoffset = 2 * Math.PI * 42;

        const solvedDisplayEl = document.getElementById('progress-solved-display');
        if (solvedDisplayEl) solvedDisplayEl.textContent = `0 / ${totalPlatformChallenges}`;
        const bugsDisplayEl = document.getElementById('progress-bugs-display');
        if (bugsDisplayEl) bugsDisplayEl.textContent = `0 / ${totalPanelErrors}`;
        const tasksStatsEl = document.getElementById('tasks-panel-stats');
        if (tasksStatsEl) tasksStatsEl.textContent = `0/${totalPanelTasks} Tamamlandı`;
        const errorsStatsEl = document.getElementById('errors-panel-stats');
        if (errorsStatsEl) errorsStatsEl.textContent = `0/${totalPanelErrors} Həll edildi`;

        // 6. Remove completed and active classes from UI elements
        document.querySelectorAll('.topic-card.completed, .roadmap-step-pill.completed, .roadmap-card.completed, .nav-topic.completed, .eco-node-btn.completed')
            .forEach(el => el.classList.remove('completed'));
        document.querySelectorAll('.nav-topic.active')
            .forEach(el => el.classList.remove('active'));

        // 7. Clear code editors if open
        if (state.editors) {
            Object.keys(state.editors).forEach(k => {
                const cm = state.editors[k];
                if (cm && cm.setValue) {
                    if (k.startsWith('bf-')) {
                        const bfId = k.replace(/^bf-/, '');
                        let foundBug = null;
                        const allTopics = getAllTopics();
                        for (const t of allTopics) {
                            const bugs = (t.bugFixes && Array.isArray(t.bugFixes) && t.bugFixes.length > 0)
                                ? t.bugFixes
                                : (t.bugFix ? [t.bugFix] : []);
                            const match = bugs.find(b => (b.id || `${t.id}-bug-0`) === bfId);
                            if (match) {
                                foundBug = match;
                                break;
                            }
                        }
                        cm.setValue(foundBug && foundBug.buggyCode ? foundBug.buggyCode : '');
                    } else {
                        cm.setValue('// Kodunuzu buraya yazın\n');
                    }
                }
            });
            // Re-clear drafts to ensure change events from resetting above do not linger
            state.userDrafts = {};
            try {
                localStorage.removeItem('jsoyren_drafts');
            } catch (e) {}
        }

        // 8. Re-render navigation, ecosystem & views
        renderNav();
        updateProgressBar();
        renderHeroStats();
        if (typeof updateTasksPanelStats === 'function') {
            updateTasksPanelStats();
        }
        if (typeof updateErrorsPanelStats === 'function') {
            updateErrorsPanelStats();
        }
        if (typeof updateEcosystemProgressUI === 'function') {
            updateEcosystemProgressUI();
        }
        if (typeof renderProgressView === 'function') {
            renderProgressView();
        }

        // 9. Switch back to home/welcome cleanly
        showView('learn');

        // 10. Show confirmation feedback toast in Azerbaijani
        showToast("Bütün irəliləmə uğurla sıfırlandı!", "info");
    }

    const resetProgress = resetAllProgress;

    // ---- Theme ----
    function initTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved) {
                document.documentElement.setAttribute('data-theme', saved);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        } catch (e) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    // ---- Navigation Rendering ----
    function renderNav() {
        // Çoxsəviyyəli konteyner axtarışı (Desktop, Mobile və Dinamik DOM üçün)
        let nav = document.getElementById('sidebar-nav') ||
                  document.querySelector('.sidebar-nav') ||
                  document.querySelector('#sidebar nav') ||
                  document.getElementById('mobile-sidebar-nav');

        // Özünübərpa edən fallback: Əgər #sidebar mövcuddursa, amma nav yoxdursa, dinamik yaradılır
        if (!nav) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                nav = document.createElement('nav');
                nav.className = 'sidebar-nav';
                nav.id = 'sidebar-nav';
                sidebar.appendChild(nav);
            }
        }

        // Qoruyucu DOM yoxlaması: nav konteyneri tapılmadıqda heç bir xəta törətmədən təhlükəsiz çıxış
        if (!nav) {
            console.warn('[renderNav] Navigasiya konteyneri (#sidebar-nav) tapılmadı. İcra təhlükəsiz dayandırıldı.');
            return;
        }

        // Təhlükəsiz təmizləmə
        nav.innerHTML = '';

        if (!Array.isArray(CURRICULUM) || CURRICULUM.length === 0) {
            return;
        }

        const completedSet = (state && state.completedTopics instanceof Set) 
            ? state.completedTopics 
            : new Set();

        CURRICULUM.forEach(section => {
            if (!section || !Array.isArray(section.topics)) return;

            const sectionEl = document.createElement('div');
            sectionEl.className = 'nav-section';
            sectionEl.dataset.sectionId = section.id || '';

            // Aktiv mövzu yoxlaması
            const hasActive = section.topics.some(t => t && t.id === state.currentTopicId);
            if (hasActive) sectionEl.classList.add('expanded');

            // Bölmə üzrə irəliləyiş
            const completedInSection = section.topics.filter(t => t && completedSet.has(t.id)).length;
            const totalInSection = section.topics.length;

            const header = document.createElement('div');
            header.className = 'nav-section-header';
            header.innerHTML = `
                <span class="nav-section-icon">${section.icon || '📌'}</span>
                <span class="nav-section-title">${section.title || ''}</span>
                <span class="nav-section-progress">${completedInSection}/${totalInSection}</span>
                <span class="nav-section-arrow">▶</span>
            `;
            header.addEventListener('click', () => {
                cancelSidebarCollapseTimer();
                sectionEl.classList.toggle('expanded');
            });

            const topicsList = document.createElement('div');
            topicsList.className = 'nav-topics';

            section.topics.forEach(topic => {
                if (!topic) return;

                const topicEl = document.createElement('div');
                topicEl.className = 'nav-topic';
                if (topic.id === state.currentTopicId) topicEl.classList.add('active');
                if (completedSet.has(topic.id)) topicEl.classList.add('completed');

                const statusIcon = completedSet.has(topic.id) ? '✓' : '';
                topicEl.innerHTML = `
                    <span class="nav-topic-status">${statusIcon}</span>
                    <span class="nav-topic-title">${topic.title || ''}</span>
                `;
                topicEl.addEventListener('click', () => {
                    cancelSidebarCollapseTimer();
                    navigateToTopic(topic.id);
                    closeMobileSidebar();
                });
                topicsList.appendChild(topicEl);
            });

            sectionEl.appendChild(header);
            sectionEl.appendChild(topicsList);
            nav.appendChild(sectionEl);
        });
    }

    // ---- Auto-collapse Sidebar Sections on Inactivity (Mouse Leave) ----
    let sidebarCollapseTimer = null;

    function cancelSidebarCollapseTimer() {
        if (sidebarCollapseTimer) {
            clearTimeout(sidebarCollapseTimer);
            sidebarCollapseTimer = null;
        }
    }

    function collapseAllNavSections() {
        cancelSidebarCollapseTimer();
        const expandedSections = document.querySelectorAll('#sidebar .nav-section.expanded');
        expandedSections.forEach(sectionEl => {
            sectionEl.classList.remove('expanded');
        });
    }

    function initSidebarAutoCollapse() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;

        // Mouse Leave Detection (4-Second Timer)
        sidebar.addEventListener('mouseleave', () => {
            cancelSidebarCollapseTimer();
            const expandedSections = sidebar.querySelectorAll('.nav-section.expanded');
            if (expandedSections.length > 0) {
                sidebarCollapseTimer = setTimeout(() => {
                    collapseAllNavSections();
                }, 4000);
            }
        });

        // Timer Reset on Re-entry
        sidebar.addEventListener('mouseenter', () => {
            cancelSidebarCollapseTimer();
        });

        // Clicks inside sidebar cancel timer
        sidebar.addEventListener('click', () => {
            cancelSidebarCollapseTimer();
        });
    }

    function updateProgressBar() {
        const totalTasks = getTotalPlatformChallenges();
        const totalSolved = getTotalPlatformSolved();
        const percentage = totalTasks > 0 ? Math.max(0, Math.min(100, Math.round((totalSolved / totalTasks) * 100))) : 0;

        const textEl = document.getElementById('progress-text');
        if (textEl) textEl.textContent = `${percentage}% tamamlanıb`;

        const fractionEl = document.getElementById('progress-fraction');
        if (fractionEl) fractionEl.textContent = `${totalSolved}/${totalTasks}`;

        const fillEl = document.getElementById('progress-bar-fill');
        if (fillEl) fillEl.style.width = `${percentage}%`;
    }

    // ---- Global Navigation & Overlay Cleanup ----
    function closeAllOverlaysAndDrawers() {
        // 1. Mobile Navigation Drawer & Backdrop
        const mobileDrawer = document.getElementById('mobile-nav-drawer');
        const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (mobileDrawerOverlay) {
            mobileDrawerOverlay.classList.remove('open');
            mobileDrawerOverlay.style.display = 'none';
        }

        // 2. Mobile Curriculum Sidebar & Backdrop
        closeMobileSidebar();

        // 3. Reset Hamburger / Menu toggles
        const toggles = document.querySelectorAll('.mobile-menu-toggle, #mobile-menu-toggle, #menu-toggle');
        toggles.forEach(t => t.classList.remove('active'));

        // 4. Force-close any open HTML5 <dialog> elements
        document.querySelectorAll('dialog[open]').forEach(dialog => {
            try {
                dialog.close();
            } catch (e) {
                dialog.removeAttribute('open');
            }
        });
        const qbModal = document.getElementById('question-bank-modal') || document.getElementById('exam-bank-modal');
        if (qbModal) {
            try { if (qbModal.open) qbModal.close(); } catch (e) { qbModal.removeAttribute('open'); }
            qbModal.classList.add('hidden');
            qbModal.classList.remove('active');
        }

        // 5. Force-remove active/open state from any lingering overlays, backdrops, and modal cards
        document.querySelectorAll('.sidebar-overlay.active, .mobile-drawer-overlay.open, .modal.active, .modal.show, .overlay.active, .overlay.open, .exam-modal.active, .question-bank-modal.active, .exam-bank-modal.active').forEach(el => {
            el.classList.remove('active', 'open', 'show');
        });

        // 6. Clean up any stale lock classes and inline overflow on <body> and <html>
        document.body.classList.remove('modal-open', 'overflow-hidden', 'menu-open', 'drawer-open');
        document.documentElement.classList.remove('modal-open', 'overflow-hidden', 'menu-open', 'drawer-open');
        document.body.style.removeProperty('overflow');
        document.documentElement.style.removeProperty('overflow');

        // 7. Hide mobile floating JavaScript keyboard bar
        hideMobileKeyboardBar();
        activeCodeMirror = null;
    }

    // ---- View Management ----
    function showView(view) {
        closeAllOverlaysAndDrawers();
        if (view === 'welcome') view = 'learn';
        if (view === 'sandbox') view = 'playground';
        state.currentView = view;

        // Əgər istifadəçi İmtahan/Qum Saatı səhifəsindən digər tablara keçərsə, taymeri avtomatik fasiləyə qoy
        if (view !== 'exam' && typeof hourglassState !== 'undefined' && hourglassState.timerInterval && !hourglassState.isPaused) {
            pauseHourglassTimer();
        }

        // Set body class for layout styling
        document.body.className = 'blueprint-canvas view-' + view;

        // View visibility toggling
        const learnView = document.getElementById('welcome-screen');
        if (learnView) learnView.classList.toggle('hidden', view !== 'learn');

        const topicView = document.getElementById('topic-view');
        if (topicView) topicView.classList.toggle('hidden', view !== 'topic');

        const sandboxView = document.getElementById('sandbox-view');
        if (sandboxView) sandboxView.classList.toggle('hidden', view !== 'playground');

        const diagramView = document.getElementById('diagram-view');
        if (diagramView) diagramView.classList.toggle('hidden', view !== 'diagram');

        const progressView = document.getElementById('progress-view');
        if (progressView) progressView.classList.toggle('hidden', view !== 'progress');

        const tasksView = document.getElementById('tasks-panel-view');
        if (tasksView) tasksView.classList.toggle('hidden', view !== 'tasks-panel');

        const errorsView = document.getElementById('errors-panel-view');
        if (errorsView) errorsView.classList.toggle('hidden', view !== 'errors-panel');

        const examView = document.getElementById('exam-view');
        if (examView) examView.classList.toggle('hidden', view !== 'exam');

        // Update Top Navbar Active Tabs (Strictly 5 tabs: Öyrən, İmtahan, Playground, Sxem, İrəliləyiş)
        const navBtnLearn = document.getElementById('nav-btn-learn');
        if (navBtnLearn) navBtnLearn.classList.toggle('active', view === 'learn' || view === 'topic');

        const navBtnExam = document.getElementById('nav-btn-exam');
        if (navBtnExam) navBtnExam.classList.toggle('active', view === 'exam');

        const navBtnPlayground = document.getElementById('nav-btn-playground');
        if (navBtnPlayground) navBtnPlayground.classList.toggle('active', view === 'playground');

        const navBtnErrors = document.getElementById('nav-errors-panel-btn') || document.getElementById('nav-btn-errors');
        if (navBtnErrors) navBtnErrors.classList.toggle('active', view === 'errors-panel');

        const navBtnDiagram = document.getElementById('nav-btn-diagram');
        if (navBtnDiagram) navBtnDiagram.classList.toggle('active', view === 'diagram');

        const navBtnProgress = document.getElementById('nav-btn-progress');
        if (navBtnProgress) navBtnProgress.classList.toggle('active', view === 'progress');

        // Update mobile drawer active items
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            const itemView = item.dataset.view;
            item.classList.toggle('active', (itemView === view) || (itemView === 'learn' && view === 'topic'));
        });

        // If not in topic view, un-highlight all sidebar topics
        if (view !== 'topic') {
            document.querySelectorAll('.nav-topic.active').forEach(el => el.classList.remove('active'));
        }

        // View-specific initializations
        if (view === 'learn') {
            renderHeroStats();
            renderRoadmap();
        } else if (view === 'playground') {
            initSandboxEditor();
            initSandboxPresets();
        } else if (view === 'diagram') {
            initDiagramMindmap();
            updateEcosystemProgressUI();
            if (ecosystemEditor && currentEcosystemTopicId) {
                setTimeout(() => ecosystemEditor.refresh(), 50);
            }
        } else if (view === 'progress') {
            renderProgressView();
        } else if (view === 'tasks-panel') {
            if (!state.tasksPanelRendered) {
                renderTasksPanel();
            } else {
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        Object.values(state.panelEditors).forEach(editor => {
                            if (editor && editor.refresh) editor.refresh();
                        });
                    }, 50);
                });
            }
        } else if (view === 'errors-panel') {
            if (!state.errorsPanelRendered) {
                renderErrorsPanel();
            } else {
                observeExpandedSections();
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        Object.values(state.panelEditors).forEach(editor => {
                            if (editor && editor.refresh) editor.refresh();
                        });
                    }, 50);
                });
            }
        } else if (view === 'exam') {
            const lobbyEl = document.getElementById('exam-lobby');
            const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');
            const hourglassEl = document.getElementById('hourglass-workspace');

            if (hourglassState && hourglassState.inProgress) {
                if (lobbyEl) lobbyEl.classList.add('hidden');
                if (workspaceEl) workspaceEl.classList.add('hidden');
                if (hourglassEl) hourglassEl.classList.remove('hidden');
                if (hourglassState.editorInstance) {
                    requestAnimationFrame(() => {
                        setTimeout(() => hourglassState.editorInstance && hourglassState.editorInstance.refresh(), 50);
                    });
                }
            } else if (!examState.inProgress) {
                if (lobbyEl) lobbyEl.classList.remove('hidden');
                if (workspaceEl) workspaceEl.classList.add('hidden');
                if (hourglassEl) hourglassEl.classList.add('hidden');
                renderExamHistory();
            } else {
                if (lobbyEl) lobbyEl.classList.add('hidden');
                if (hourglassEl) hourglassEl.classList.add('hidden');
                if (workspaceEl) workspaceEl.classList.remove('hidden');
                if (examState.editorInstance) {
                    requestAnimationFrame(() => {
                        setTimeout(() => examState.editorInstance && examState.editorInstance.refresh(), 50);
                    });
                }
            }
        }

        const mainContent = document.getElementById('main-content');
        if (mainContent) mainContent.scrollTop = 0;
        if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);

        resetSnakeTracking();
        saveProgress();
    }

    function navigateToHome() {
        state.currentTopicId = null;
        showView('welcome');
        renderNav();
        updateProgressBar();
        closeMobileSidebar();
        saveProgress();
    }

    // ---- Legacy Mascot Stubs (Clean No-Ops) ----
    function resetSnakeTracking() {}
    function initSnakeTracking() {}

    function navigateToTopic(topicId) {
        state.currentTopicId = topicId;
        state.currentTab = 'theory';
        showView('topic');
        renderTopicView();
        renderNav();
        
        // Scroll to top safely
        const mainContentEl = document.getElementById('main-content');
        if (mainContentEl) mainContentEl.scrollTop = 0;
        if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
    }

    // ---- Topic Rendering ----
    function renderTopicView() {
        const result = getTopicById(state.currentTopicId);
        if (!result) return;

        const { topic, section } = result;
        const allTopics = getAllTopics();
        const currentIndex = getTopicIndex(topic.id);

        // Breadcrumb with defensive null checks
        const secNameEl = document.getElementById('topic-section-name');
        if (secNameEl) secNameEl.textContent = section.title;
        const topicNameEl = document.getElementById('topic-name');
        if (topicNameEl) topicNameEl.textContent = topic.title;

        // Nav buttons with defensive null checks
        const prevBtn = document.getElementById('prev-topic-btn');
        const nextBtn = document.getElementById('next-topic-btn');
        if (prevBtn) prevBtn.disabled = currentIndex <= 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= allTopics.length - 1;

        // Tab reset
        setActiveTab('theory');

        // Reset topic-level editors to prevent memory leaks from previous topics
        state.editors = {};

        // Render theory
        renderTheory(topic);

        // Render exercises
        renderExercises(topic);

        // Render bug fixes
        renderBugFixes(topic);
    }

    function renderTheory(topic) {
        const container = document.getElementById('theory-content');
        container.innerHTML = topic.theory || '<p>Nəzəriyyə hazırlanır...</p>';

        // Render code examples
        const examplesContainer = document.getElementById('code-examples');
        examplesContainer.innerHTML = '';

        if (topic.codeExamples && topic.codeExamples.length > 0) {
            topic.codeExamples.forEach((example, idx) => {
                const exEl = document.createElement('div');
                exEl.className = 'code-example';
                exEl.innerHTML = `
                    <div class="code-example-header">
                        <span class="code-example-title">${example.title || `Nümunə ${idx + 1}`}</span>
                        <button class="code-example-run" data-example-idx="${idx}">▶ İcra et</button>
                    </div>
                    <div class="code-example-code">${escapeHtml(example.code)}</div>
                    ${example.output ? `<div class="code-example-output">${escapeHtml(example.output)}</div>` : ''}
                `;
                
                const runBtn = exEl.querySelector('.code-example-run');
                runBtn.addEventListener('click', async () => {
                    const outputEl = exEl.querySelector('.code-example-output');
                    if (!outputEl) {
                        const newOutput = document.createElement('div');
                        newOutput.className = 'code-example-output';
                        exEl.appendChild(newOutput);
                    }
                    const out = exEl.querySelector('.code-example-output');
                    out.textContent = 'İcra olunur...';
                    runBtn.disabled = true;

                    try {
                        const result = await runJavaScript(example.code);
                        out.textContent = '';
                        out.insertAdjacentHTML('beforeend', 
                            result && result.error 
                                ? `<span style="color: var(--error);">${escapeHtml(result.error)}</span>` 
                                : escapeHtml((result && result.output) || '(Nəticə yoxdur)')
                        );
                    } catch (fatalErr) {
                        out.textContent = '';
                        out.insertAdjacentHTML('beforeend', `<span style="color: var(--error);">${escapeHtml(fatalErr.message || String(fatalErr))}</span>`);
                    } finally {
                        runBtn.disabled = false;
                    }
                });
                
                examplesContainer.appendChild(exEl);
            });
        }
    }

    function renderExercises(topic) {
        const container = document.getElementById('exercises-container');
        if (container) container.innerHTML = '';

        if (!topic.exercises || topic.exercises.length === 0) {
            container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:2rem;">Bu mövzu üçün tapşırıqlar hazırlanır...</p>';
            return;
        }

        topic.exercises.forEach((exercise, idx) => {
            const exId = exercise.id || `${topic.id}-ex-${idx}`;
            const isCompleted = state.completedExercises.has(exId);
            
            const card = document.createElement('div');
            card.className = `exercise-card${isCompleted ? ' completed' : ''}`;
            card.dataset.exerciseId = exId;

            card.innerHTML = `
                <div class="exercise-header">
                    <span class="exercise-title">
                        <span class="exercise-status">${isCompleted ? '✅' : '📝'}</span>
                        ${exercise.title || `Tapşırıq ${idx + 1}`}
                    </span>
                </div>
                <div class="exercise-instruction">${exercise.instruction}</div>
                <div class="exercise-editor-container">
                    <div class="exercise-editor" id="exercise-editor-${exId}"></div>
                </div>
                <div class="exercise-actions">
                    <button class="exercise-hint-btn" data-exercise-id="${exId}">💡 İpucu</button>
                    <div>
                        <button class="exercise-submit-btn" data-exercise-id="${exId}">▶ Yoxla</button>
                    </div>
                </div>
                <div class="hint-text" id="hint-${exId}">${exercise.hint || ''}</div>
                <div class="exercise-result" id="result-${exId}"></div>
            `;

            container.appendChild(card);

            // Initialize CodeMirror editor
            requestAnimationFrame(() => {
                const editorEl = document.getElementById(`exercise-editor-${exId}`);
                if (editorEl) {
                    editorEl.innerHTML = '';
                    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                    const initValue = state.userDrafts[exId] !== undefined
                        ? state.userDrafts[exId]
                        : (exercise.starterCode || '// JavaScript kodunuzu buraya yazın\n');

                    const cm = CodeMirror(editorEl, {
                        value: initValue,
                        mode: 'javascript',
                        theme: isDark ? 'dracula' : 'default',
                        lineNumbers: true,
                        matchBrackets: true,
                        autoCloseBrackets: true,
                        indentUnit: 2,
                        tabSize: 2,
                        indentWithTabs: false,
                        lineWrapping: true,
                        viewportMargin: Infinity,
                        extraKeys: {
                            'Ctrl-Enter': () => submitExercise(exId, exercise, cm),
                            'Tab': (cm) => cm.replaceSelection('  ', 'end'),
                        }
                    });
                    cm.on('change', () => {
                        state.userDrafts[exId] = cm.getValue();
                        debouncedSaveProgress();
                    });
                    state.editors[exId] = cm;
                    registerCodeMirrorForMobileToolbar(cm);
                    setTimeout(() => cm.refresh(), 50);
                }
            });

            // Hint button
            card.querySelector('.exercise-hint-btn').addEventListener('click', () => {
                const hintEl = document.getElementById(`hint-${exId}`);
                hintEl.classList.toggle('show');
            });

            // Submit button
            card.querySelector('.exercise-submit-btn').addEventListener('click', () => {
                const cm = state.editors[exId];
                if (cm) submitExercise(exId, exercise, cm);
            });
        });
    }

    function renderBugFixes(topic) {
        const container = document.getElementById('bugfix-container');
        if (container) container.innerHTML = '';

        const bugFixList = (topic.bugFixes && Array.isArray(topic.bugFixes) && topic.bugFixes.length > 0)
            ? topic.bugFixes
            : (topic.bugFix ? [topic.bugFix] : []);

        if (bugFixList.length === 0) {
            container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:2rem;">Bu mövzu üçün xəta düzəltmə testləri hazırlanır...</p>';
            return;
        }

        bugFixList.forEach((bugfix, idx) => {
            const bfId = bugfix.id || `${topic.id}-bug-${idx}`;
            const isCompleted = state.completedBugFixes.has(bfId);
            
            const card = document.createElement('div');
            card.className = `bugfix-card${isCompleted ? ' completed' : ''}`;
            card.dataset.bugfixId = bfId;

            const cardTitle = bugfix.title || `Xətanı tap ${idx + 1}`;
            const cardInstruction = bugfix.instruction || bugfix.description || '';

            card.innerHTML = `
                <div class="bugfix-header">
                    <span class="bugfix-title">
                        🐛 ${escapeHtml(cardTitle)}
                    </span>
                    <span>${isCompleted ? '✅' : ''}</span>
                </div>
                <div class="bugfix-instruction">${cardInstruction}</div>
                <div class="bugfix-editor-container">
                    <div class="bugfix-editor" id="bugfix-editor-${bfId}"></div>
                </div>
                <div class="bugfix-actions">
                    <button class="exercise-hint-btn" data-bugfix-id="${bfId}">💡 İpucu</button>
                    <div style="display:flex; gap:0.5rem; align-items:center;">
                        <button class="exercise-reset-btn" data-bugfix-id="${bfId}" title="İlkin xətalı koda qaytar">🔄 Sıfırla</button>
                        <button class="exercise-submit-btn" data-bugfix-id="${bfId}">▶ Yoxla</button>
                    </div>
                </div>
                <div class="bugfix-result" id="bugfix-result-${bfId}"></div>
            `;

            container.appendChild(card);

            // Initialize CodeMirror editor
            requestAnimationFrame(() => {
                const editorEl = document.getElementById(`bugfix-editor-${bfId}`);
                if (editorEl) {
                    editorEl.innerHTML = '';
                    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                    const userDraft = state.userDrafts[`bf-${bfId}`];
                    const isCorruptedDraft = !userDraft ||
                        userDraft.trim() === '' ||
                        userDraft.trim() === '// Kodunuzu buraya yazın' ||
                        userDraft.trim() === '// Kodunuzu buraya yazın\n';

                    const initValue = (!isCorruptedDraft && userDraft !== undefined)
                        ? userDraft
                        : (bugfix.buggyCode || '');

                    if (isCorruptedDraft && userDraft !== undefined) {
                        delete state.userDrafts[`bf-${bfId}`];
                    }

                    const cm = CodeMirror(editorEl, {
                        value: initValue,
                        mode: 'javascript',
                        theme: isDark ? 'dracula' : 'default',
                        lineNumbers: true,
                        matchBrackets: true,
                        autoCloseBrackets: true,
                        indentUnit: 2,
                        tabSize: 2,
                        indentWithTabs: false,
                        lineWrapping: true,
                        viewportMargin: Infinity,
                        extraKeys: {
                            'Ctrl-Enter': () => submitBugFix(bfId, bugfix, cm),
                            'Tab': (cm) => cm.replaceSelection('  ', 'end'),
                        }
                    });
                    cm.on('change', () => {
                        state.userDrafts[`bf-${bfId}`] = cm.getValue();
                        debouncedSaveProgress();
                    });
                    state.editors[`bf-${bfId}`] = cm;
                    registerCodeMirrorForMobileToolbar(cm);
                    setTimeout(() => cm.refresh(), 50);
                }
            });

            // Hint button
            card.querySelector('.exercise-hint-btn').addEventListener('click', () => {
                const resultEl = document.getElementById(`bugfix-result-${bfId}`);
                const hintText = (bugfix.hints && bugfix.hints.join(' | ')) || bugfix.hint || bugfix.explanation || 'Kodu diqqətlə nəzərdən keçirin və sintaksisi yoxlayın.';
                resultEl.innerHTML = `<div class="bugfix-explanation">💡 <strong>İpucu:</strong> ${escapeHtml(hintText)}</div>`;
                resultEl.classList.toggle('show');
            });

            // Reset button
            const resetBtn = card.querySelector('.exercise-reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    const cm = state.editors[`bf-${bfId}`];
                    if (cm) {
                        cm.setValue(bugfix.buggyCode || '');
                        delete state.userDrafts[`bf-${bfId}`];
                        debouncedSaveProgress();
                        cm.focus();
                        showToast('Kod ilkin vəziyyətinə qaytarıldı (xətalı kod yükləndi).', 'info');
                    }
                });
            }

            // Submit button
            card.querySelector('.exercise-submit-btn').addEventListener('click', () => {
                const cm = state.editors[`bf-${bfId}`];
                if (cm) submitBugFix(bfId, bugfix, cm);
            });
        });
    }

    // ---- Code Validation Helpers ----
    function stripComments(code) {
        if (!code || typeof code !== 'string') return '';
        return code.replace(/("([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`)|(\/\/[^\n\r]*|\/\*[\s\S]*?\*\/)/g, (match, str) => {
            return str ? str : '';
        });
    }

    function isLiteralValue(str) {
        const s = (str || '').trim();
        if (/^"([^"\\]|\\.)*"$/.test(s) || /^'([^'\\]|\\.)*'$/.test(s) || /^`([^`\\$]|\\.)*`$/.test(s)) {
            return true;
        }
        if (/^-?\d+(\.\d+)?$/.test(s) || /^(true|false|null|undefined)$/.test(s)) {
            return true;
        }
        return false;
    }

    /**
     * Extracts all console output calls (log, warn, error, info) from a code string.
     */
    function extractConsoleLogCalls(code) {
        if (!code || typeof code !== 'string') return [];
        const stripped = stripComments(code);
        const matches = stripped.match(/console\s*\.\s*(?:log|info|warn|error)\s*\([\s\S]*?\)/g);
        return matches || [];
    }

    /**
     * Removes console.log(...) statements from user code that were already
     * present in the starterCode or buggyCode boilerplate, ensuring static analysis
     * evaluates only the user's new diff/contributions.
     */
    function filterBoilerplateLogs(userCode, starterCode) {
        if (!starterCode || typeof starterCode !== 'string' || !userCode) return userCode;
        const starterLogs = extractConsoleLogCalls(starterCode);
        if (starterLogs.length === 0) return userCode;

        let filtered = userCode;
        for (const sLog of starterLogs) {
            const inner = sLog.replace(/^console\s*\.\s*(?:log|info|warn|error)\s*\(/, '').replace(/\)$/, '').trim();
            const escapedInner = inner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s*');
            const rx = new RegExp(`console\\s*\\.\\s*(?:log|info|warn|error)\\s*\\(\\s*${escapedInner}\\s*\\)\\s*;?`, 'g');
            filtered = filtered.replace(rx, '');
        }
        return filtered;
    }

    /**
     * Determines whether an exercise genuinely requires an algorithmic solution,
     * calculation, or variable manipulation, or if it is a pure syntax, comment,
     * introductory printing, or bug-fix task where hardcode checks must not run.
     */
    function isAlgorithmicTask(options = {}, starterCode = '', isBugFix = false) {
        // 1. Explicit opt-outs
        if (options.disableHardcodeCheck === true || options.allowHardcode === true) {
            return false;
        }

        // 2. Question type check
        const qType = (options.type || '').toLowerCase();
        if (qType && qType !== 'algorithm') {
            // 'syntax', 'bugfix', 'theory', 'comment' are non-algorithmic
            return false;
        }

        // 3. Bug-fixing challenges are repairing existing code, not writing algorithms from scratch
        if (isBugFix || (options.id && (options.id.startsWith('bug-') || options.id.startsWith('bf-')))) {
            return false;
        }

        // 4. Section 1 is introductory JS & console.log teaching syntax and printing
        const id = options.id || '';
        if (id.startsWith('ex-1-') || id.startsWith('tp-1-') || id.startsWith('bug-1-') || id.startsWith('exam-sec1-') || id.startsWith('sec-1')) {
            return false;
        }

        // 5. Solution code inspection: if solution is provided and is just a simple console.log literal
        const sol = options.solutionCode || '';
        if (sol && typeof sol === 'string') {
            const strippedSol = stripComments(sol).trim();
            const hasLogicKeywords = /\b(var|let|const|function|class|return|if|else|switch|case|for|while|do|try|catch|new|throw|import|export|await|async|yield)\b/.test(strippedSol);
            const hasOperators = /(=>|[=+\-*\/%&|^<>!?:].*=|[+\-*\/%]{1,2})/.test(strippedSol);

            if (!hasLogicKeywords && !hasOperators) {
                const solWithoutLogs = strippedSol.replace(/console\s*\.\s*(?:log|info|warn|error)\s*\([\s\S]*?\);?/g, '').trim();
                if (solWithoutLogs.length === 0) {
                    // The official solution is itself just console.log(literal)! Not an algorithmic task.
                    return false;
                }
            }
        }

        // 6. If instruction explicitly indicates a comment or syntax repair task
        const instr = (options.instruction || options.serif || '').toLowerCase();
        if (instr.includes('şərh') || instr.includes('sintaksis') || instr.includes('komment') || instr.includes('comment')) {
            if (!options.mustContain || options.mustContain.length === 0) {
                return false;
            }
        }

        return true;
    }

    function isAntiHardcodeViolation(cleanCode) {
        if (!cleanCode || typeof cleanCode !== 'string') return false;
        const clean = cleanCode.trim();
        if (clean.length === 0) return false;

        if (/\b(var|let|const|function|class|return|if|else|switch|case|for|while|do|try|catch|new|throw|import|export|await|async|yield)\b/.test(clean)) {
            return false;
        }
        if (/=>|[=+\-*\/%&|^<>!?:].*=/.test(clean)) {
            return false;
        }

        const withoutLogs = clean.replace(/console\s*\.\s*(?:log|info|warn|error)\s*\([\s\S]*?\);?/g, '').trim();
        if (withoutLogs.length > 0) {
            return false;
        }

        const matches = clean.match(/console\s*\.\s*(?:log|info|warn|error)\s*\(([\s\S]*?)\)/g);
        if (!matches || matches.length === 0) return false;

        // Təhlükəsiz arqument analizatoru (ReDoS mühafizəli O(N) leksik skaner)
        function splitArgsSafely(str) {
            const args = [];
            let current = '';
            let inSingle = false;
            let inDouble = false;
            let inTemplate = false;
            let escaped = false;
            let depth = 0;

            for (let i = 0; i < str.length; i++) {
                const ch = str[i];
                if (escaped) {
                    current += ch;
                    escaped = false;
                    continue;
                }
                if (ch === '\\') {
                    current += ch;
                    escaped = true;
                    continue;
                }
                if (ch === "'" && !inDouble && !inTemplate) {
                    inSingle = !inSingle;
                } else if (ch === '"' && !inSingle && !inTemplate) {
                    inDouble = !inDouble;
                } else if (ch === '`' && !inSingle && !inDouble) {
                    inTemplate = !inTemplate;
                } else if (!inSingle && !inDouble && !inTemplate) {
                    if (ch === '(' || ch === '[' || ch === '{') depth++;
                    else if (ch === ')' || ch === ']' || ch === '}') depth = Math.max(0, depth - 1);
                    else if (ch === ',' && depth === 0) {
                        args.push(current.trim());
                        current = '';
                        continue;
                    }
                }
                current += ch;
            }
            if (current.trim().length > 0) args.push(current.trim());
            return args;
        }

        for (const m of matches) {
            const inner = m.replace(/^console\s*\.\s*(?:log|info|warn|error)\s*\(/, '').replace(/\)$/, '').trim();
            if (isLiteralValue(inner)) {
                continue;
            }
            const args = splitArgsSafely(inner);
            const allLiteral = args.every(a => isLiteralValue(a));
            if (!allLiteral) {
                return false;
            }
        }
        return true;
    }

    function validateCodeSubmission(code, starterCode, isBugFix = false, options = {}) {
        if (!code || typeof code !== 'string' || code.trim().length === 0) {
            return {
                valid: false,
                reason: 'empty',
                message: 'Zəhmət olmasa, əvvəlcə həll kodunuzu yazın! Kod sahəsi boşdur.'
            };
        }

        const strippedCode = stripComments(code).trim();
        if (strippedCode.length === 0) {
            const hasJsComments = /\/\/[^\n\r]*|\/\*[\s\S]*?\*\//.test(code);
            const isCommentExercise = isBugFix || 
                (options.type === 'comment' || options.type === 'syntax') ||
                (options.instruction && (options.instruction.includes('şərh') || options.instruction.includes('comment'))) ||
                (options.solutionCode && stripComments(options.solutionCode).trim().length === 0);

            if (!hasJsComments || !isCommentExercise) {
                return {
                    valid: false,
                    reason: 'only_comments',
                    message: 'Zəhmət olmasa, əvvəlcə həll kodunuzu yazın! Kod sahəsi yalnız şərhlərdən ibarətdir.'
                };
            }
        }

        if (!isBugFix) {
            const cleanUser = code.replace(/\r\n/g, '\n').trim();
            const cleanStarter = (starterCode || '').replace(/\r\n/g, '\n').trim();
            if (cleanStarter.length > 0 && cleanUser === cleanStarter) {
                if (!cleanStarter.includes('console.log(') && !cleanStarter.includes('return ') && !cleanStarter.includes('const ') && !cleanStarter.includes('let ')) {
                    return {
                        valid: false,
                        reason: 'unchanged',
                        message: 'Zəhmət olmasa, tapşırığın həllini daxil edin! Başlanğıc koda hələ heç bir həll əlavə edilməyib.'
                    };
                }
            }
        }

        const isAlgo = isAlgorithmicTask(options, starterCode, isBugFix);
        if (isAlgo) {
            const userAddedCode = filterBoilerplateLogs(strippedCode, starterCode);
            const cleanUserAdded = stripComments(userAddedCode).trim();

            if (cleanUserAdded.length > 0 && isAntiHardcodeViolation(cleanUserAdded)) {
                return {
                    valid: false,
                    reason: 'hardcode_violation',
                    message: 'Zəhmət olmasa nəticəni birbaşa console.log içində hazır mətn kimi yazmayın! Tələb olunan alqoritmi və məntiqi qurun.'
                };
            }
        }

        const CORE_CONSTRUCTS = [
            { key: 'pool.query', pattern: /pool\.query/ },
            { key: 'addEventListener', pattern: /\baddEventListener\b/ },
            { key: 'localStorage', pattern: /\blocalStorage\b/ },
            { key: 'sessionStorage', pattern: /\bsessionStorage\b/ },
            { key: 'fetch', pattern: /\bfetch\b/ },
            { key: 'await', pattern: /\bawait\b/ },
            { key: 'reduce', pattern: /\breduce\b/ },
            { key: 'filter', pattern: /\bfilter\b/ },
            { key: 'map', pattern: /\bmap\b/ },
            { key: 'class', pattern: /\bclass\b/ },
            { key: 'extends', pattern: /\bextends\b/ },
            { key: 'try', pattern: /\btry\b/ },
            { key: 'catch', pattern: /\bcatch\b/ },
            { key: 'switch', pattern: /\bswitch\b/ },
            { key: 'for', pattern: /\bfor\b/ },
            { key: 'while', pattern: /\bwhile\b/ }
        ];

        let requiredConstructs = [];
        if (options.mustContain && Array.isArray(options.mustContain) && options.mustContain.length > 0) {
            requiredConstructs = options.mustContain;
        } else if (isAlgo) {
            const sol = options.solutionCode || '';
            for (const c of CORE_CONSTRUCTS) {
                if (c.pattern.test(sol)) {
                    requiredConstructs.push(c.key);
                }
            }
        }

        if (requiredConstructs.length > 0) {
            for (const req of requiredConstructs) {
                let matched = false;
                if (req === 'pool.query') {
                    matched = /pool\.query/.test(strippedCode);
                } else if (req === 'for') {
                    matched = /\bfor\s*(\(|await)/.test(strippedCode);
                } else {
                    const rx = new RegExp('\\b' + req.replace('.', '\\.') + '\\b');
                    matched = rx.test(strippedCode);
                }
                if (!matched) {
                    return {
                        valid: false,
                        reason: 'missing_construct',
                        message: `Tapşırığın şərtinə əsasən kodunuzda '${req}' istifadə edilməlidir.`
                    };
                }
            }
        }

        return { valid: true };
    }

    // ---- Exercise Submission ----
    async function submitExercise(exId, exercise, cm) {
        const code = cm ? cm.getValue() : '';
        let resultEl = document.getElementById(`result-${exId}`);
        let card = resultEl ? resultEl.closest('.exercise-card') : document.querySelector(`.exercise-card[data-exercise-id="${exId}"]`);
        if (card && !resultEl) {
            resultEl = card.querySelector('.exercise-result');
        }
        if (!resultEl || !card) return;

        const submitBtn = card.querySelector('.exercise-submit-btn') || card.querySelector(`button[data-id="${exId}"]`);

        // Validation check
        const val = validateCodeSubmission(code, exercise.starterCode, false, {
            id: exId,
            instruction: exercise.instruction,
            solutionCode: exercise.solutionCode,
            mustContain: exercise.mustContain,
            disableHardcodeCheck: exercise.disableHardcodeCheck,
            allowHardcode: exercise.allowHardcode,
            type: exercise.type
        });
        if (!val.valid) {
            resultEl.className = 'exercise-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            const statusEl = card.querySelector('.exercise-status');
            if (statusEl) statusEl.textContent = '';
            state.completedExercises.delete(exId);
            saveProgress();
            checkTopicCompletion();

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">⚠️</span>
                    <span class="result-message" style="color:var(--warning);">${val.message}</span>
                </div>
                <div class="result-details">Tapşırığı yerinə yetirmək üçün tələb olunan JavaScript kodunu daxil edin və "Yoxla" düyməsinə basın.</div>
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
            showToast(val.message, 'warning');
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('btn-loading');
        }

        resultEl.innerHTML = `<div class="running-indicator"><div class="running-dots"><span></span><span></span><span></span></div> İcra olunur...</div>`;
        resultEl.className = 'exercise-result show';

        try {
            const result = await runJavaScript(code);

            if (!result || typeof result !== 'object') {
                throw new Error('İcra mühitindən cavab alına bilmədi.');
            }

            if (result.error) {
                // Error occurred
                resultEl.className = 'exercise-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                const statusEl = card.querySelector('.exercise-status');
                if (statusEl) statusEl.textContent = '';
                state.completedExercises.delete(exId);
                checkTopicCompletion();
                syncPlatformProgress({ notifyAchievements: false });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Xəta baş verdi! Kod icra olunmadı.</span>
                    </div>
                    <div class="result-details">
                        <strong>Xətanın səbəbi:</strong> ${explainError(result.error)}
                    </div>
                    <div class="result-output"><span class="output-error">${escapeHtml(result.error)}</span></div>
                    ${exercise.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(exercise.hint)}</div>` : ''}
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
                return;
            }

            const userOutput = cleanStr(result.output);
            const expectedOutput = cleanStr(exercise.expectedOutput);

            if ((userOutput === expectedOutput || compareOutputs(userOutput, expectedOutput)) && (expectedOutput === '' ? true : userOutput.length > 0)) {
                // Success
                resultEl.className = 'exercise-result show success';
                card.classList.add('completed');
                card.classList.remove('error');
                const statusEl = card.querySelector('.exercise-status');
                if (statusEl) statusEl.textContent = '✅';
                state.completedExercises.add(exId);
                checkTopicCompletion();
                syncPlatformProgress({ notifyAchievements: true });
                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">✅</span>
                        <span class="result-message" style="color:var(--success);">Əla! Tapşırıq uğurla həll edildi!</span>
                    </div>
                    <div class="result-details"><strong>Çıxış nəticəsi:</strong></div>
                    <div class="result-output">${escapeHtml(userOutput)}</div>
                `;
                showToast('Tapşırıq uğurla tamamlandı! 🎉', 'success');
                miniConfetti(card);
            } else {
                // Wrong output
                resultEl.className = 'exercise-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                const statusEl = card.querySelector('.exercise-status');
                if (statusEl) statusEl.textContent = '';
                state.completedExercises.delete(exId);
                checkTopicCompletion();
                syncPlatformProgress({ notifyAchievements: false });
                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Xəta! Nəticə yanlışdır. Yenidən cəhd edin.</span>
                    </div>
                    <div class="result-details"><strong>Sizin nəticə:</strong></div>
                    <div class="result-output">${escapeHtml(userOutput || '(Boş nəticə - heç nə çap olunmadı)')}</div>
                    <div class="result-details"><strong>Gözlənilən nəticə:</strong></div>
                    <div class="result-expected">${escapeHtml(expectedOutput)}</div>
                    ${exercise.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(exercise.hint)}</div>` : ''}
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
            }
        } catch (execErr) {
            console.error('submitExercise error:', execErr);
            resultEl.className = 'exercise-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            const statusEl = card.querySelector('.exercise-status');
            if (statusEl) statusEl.textContent = '';
            state.completedExercises.delete(exId);
            checkTopicCompletion();
            syncPlatformProgress({ notifyAchievements: false });

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">❌</span>
                    <span class="result-message" style="color:var(--error);">İcra xətası baş verdi!</span>
                </div>
                <div class="result-details">
                    <strong>Xətanın səbəbi:</strong> ${explainError(execErr.message || String(execErr))}
                </div>
                <div class="result-output"><span class="output-error">${escapeHtml(execErr.message || String(execErr))}</span></div>
                ${exercise.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(exercise.hint)}</div>` : ''}
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-loading');
            }
            if (resultEl && resultEl.innerHTML.includes('running-indicator')) {
                resultEl.className = 'exercise-result show error';
                resultEl.innerHTML = `<div><span class="result-icon">⚠️</span><span class="result-message" style="color:var(--error);">İcra vaxtı bitdi və ya cavab alına bilmədi.</span></div>`;
            }
        }
    }

    async function submitBugFix(bfId, bugfix, cm) {
        const code = cm ? cm.getValue() : '';
        let resultEl = document.getElementById(`bugfix-result-${bfId}`);
        let card = resultEl ? resultEl.closest('.bugfix-card') : document.querySelector(`.bugfix-card[data-bugfix-id="${bfId}"]`);
        if (card && !resultEl) {
            resultEl = card.querySelector('.bugfix-result') || card.querySelector('.panel-card-result');
        }
        if (!resultEl || !card) return;

        const submitBtn = card.querySelector('.exercise-submit-btn') || card.querySelector(`button[data-bugfix-id="${bfId}"]`);

        // Validation check
        const val = validateCodeSubmission(code, bugfix.buggyCode, true, {
            id: bfId,
            instruction: bugfix.instruction,
            solutionCode: bugfix.correctCode,
            mustContain: bugfix.mustContain,
            disableHardcodeCheck: bugfix.disableHardcodeCheck !== undefined ? bugfix.disableHardcodeCheck : true,
            allowHardcode: bugfix.allowHardcode,
            type: bugfix.type || 'bugfix'
        });
        if (!val.valid) {
            resultEl.className = 'bugfix-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            state.completedBugFixes.delete(bfId);
            checkTopicCompletion();
            syncPlatformProgress({ notifyAchievements: false });

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">⚠️</span>
                    <span class="result-message" style="color:var(--warning);">${val.message}</span>
                </div>
                <div class="result-details">Xətalı kodu təhlil edib düzəliş edin və "Yoxla" düyməsinə basın.</div>
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
            showToast(val.message, 'warning');
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('btn-loading');
        }

        resultEl.innerHTML = `<div class="running-indicator"><div class="running-dots"><span></span><span></span><span></span></div> İcra olunur...</div>`;
        resultEl.className = 'bugfix-result show';

        try {
            const result = await runJavaScript(code);

            if (!result || typeof result !== 'object') {
                throw new Error('İcra mühitindən cavab alına bilmədi.');
            }

            if (result.error) {
                resultEl.className = 'bugfix-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                state.completedBugFixes.delete(bfId);
                checkTopicCompletion();
                syncPlatformProgress({ notifyAchievements: false });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Hələ də xəta qalmaqdadır!</span>
                    </div>
                    <div class="result-details">
                        <strong>Xətanın səbəbi:</strong> ${explainError(result.error)}
                    </div>
                    <div class="result-output"><span class="output-error">${escapeHtml(result.error)}</span></div>
                    <div class="bugfix-explanation">${escapeHtml(bugfix.explanation || '')}</div>
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
                return;
            }

            const userOutput = cleanStr(result.output);
            const targetOutput = bugfix.correctOutput !== undefined ? bugfix.correctOutput : bugfix.expectedOutput;
            const expectedOutput = cleanStr(targetOutput);

            if ((userOutput === expectedOutput || compareOutputs(userOutput, expectedOutput)) && (expectedOutput === '' ? true : userOutput.length > 0)) {
                resultEl.className = 'bugfix-result show success';
                card.classList.add('completed');
                card.classList.remove('error');
                state.completedBugFixes.add(bfId);
                checkTopicCompletion();
                syncPlatformProgress({ notifyAchievements: true });
                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">✅</span>
                        <span class="result-message" style="color:var(--success);">Təbriklər! Xətanı tamamilə aradan qaldırdınız!</span>
                    </div>
                    <div class="result-output">${escapeHtml(userOutput)}</div>
                    <div class="bugfix-explanation"><strong>İzah:</strong> ${escapeHtml(bugfix.explanation || '')}</div>
                `;
                showToast('Xəta uğurla düzəldildi! 🐛✅', 'success');
                miniConfetti(card);
            } else {
                resultEl.className = 'bugfix-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                state.completedBugFixes.delete(bfId);
                checkTopicCompletion();
                syncPlatformProgress({ notifyAchievements: false });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Xəta! Nəticə yanlışdır. Yenidən cəhd edin.</span>
                    </div>
                    <div class="result-details"><strong>Sizin çıxış:</strong></div>
                    <div class="result-output">${escapeHtml(userOutput || '(Boş)')}</div>
                    <div class="result-details"><strong>Gözlənilən çıxış:</strong></div>
                    <div class="result-expected">${escapeHtml(expectedOutput)}</div>
                    ${bugfix.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(bugfix.hint)}</div>` : ''}
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
            }
        } catch (execErr) {
            console.error('submitBugFix error:', execErr);
            resultEl.className = 'bugfix-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            state.completedBugFixes.delete(bfId);
            checkTopicCompletion();
            syncPlatformProgress({ notifyAchievements: false });

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">❌</span>
                    <span class="result-message" style="color:var(--error);">İcra xətası baş verdi!</span>
                </div>
                <div class="result-details">
                    <strong>Xətanın səbəbi:</strong> ${explainError(execErr.message || String(execErr))}
                </div>
                <div class="result-output"><span class="output-error">${escapeHtml(execErr.message || String(execErr))}</span></div>
                <div class="bugfix-explanation">${escapeHtml(bugfix.explanation || '')}</div>
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-loading');
            }
            if (resultEl && resultEl.innerHTML.includes('running-indicator')) {
                resultEl.className = 'bugfix-result show error';
                resultEl.innerHTML = `<div><span class="result-icon">⚠️</span><span class="result-message" style="color:var(--error);">İcra vaxtı bitdi və ya cavab alına bilmədi.</span></div>`;
            }
        }
    }

    function checkTopicCompletion() {
        if (!state.currentTopicId) return;
        const result = getTopicById(state.currentTopicId);
        if (!result) return;
        
        const { topic } = result;
        const exercises = topic.exercises || [];
        const bugFixes = topic.bugFixes || [];
        
        const allExDone = exercises.every(ex => {
            const id = ex.id || `${topic.id}-ex-${exercises.indexOf(ex)}`;
            return state.completedExercises.has(id);
        });
        
        const allBfDone = bugFixes.length === 0 || bugFixes.every(bf => {
            const id = bf.id || `${topic.id}-bug-${bugFixes.indexOf(bf)}`;
            return state.completedBugFixes.has(id);
        });

        if (allExDone && allBfDone && exercises.length > 0) {
            state.completedTopics.add(state.currentTopicId);
            saveProgress();
            renderNav();
            updateProgressBar();
        }
    }

    // ---- Error Explanation ----
    function explainError(errorText) {
        if (!errorText || typeof errorText !== 'string') {
            return 'Kodunuzda xəta aşkar edildi. Yazılışı yenidən yoxlayın.';
        }
        const explanations = {
            'SyntaxError': 'Sintaksis xətası — Kodunuzda JavaScript yazılış qaydası pozulub. Mötərizələri (), fiqurlu mötərizələri {}, nöqtə-vergülləri və ya dırnaq işarələrini yoxlayın.',
            'ReferenceError': 'İstinad xətası — Təyin edilməmiş (undefined) bir dəyişənə və ya funksiyaya müraciət edirsiniz. Dəyişənin let və ya const ilə elan edildiyini və adının düzgün yazıldığını yoxlayın.',
            'TypeError': 'Tip xətası — Uyğun olmayan tip üzərində əməliyyat aparmağa çalışırsınız (məsələn, undefined/null üzərində metod çağırmaq və ya funksiya olmayan dəyəri çağırmaq).',
            'RangeError': 'Diapazon xətası — Ədəd və ya parametr icazə verilən həddi aşıb (məsələn, massivin uzunluğu mənfi ola bilməz və ya rekursiya dərinliyi aşıb).',
            'URIError': 'URI xətası — encodeURI və ya decodeURI funksiyalarına yanlış parametr ötürülüb.',
            'vaxt limiti': 'Vaxt limiti xətası — Kodunuzda sonsuz dövr (infinite loop, məsələn while(true)) və ya həddindən artıq uzun əməliyyat var.',
            'sonsuz dövr': 'Sonsuz dövr xətası — Kodunuz bitmir və brauzeri dondurmaması üçün dayandırıldı. Dövrlərinizin çıxış şərtini yoxlayın.',
            'timeout': 'Vaxt limiti xətası — İcra vaxt limiti aşdı.'
        };

        for (const [key, explanation] of Object.entries(explanations)) {
            if (errorText.toLowerCase().includes(key.toLowerCase())) {
                return explanation;
            }
        }
        return 'Kodunuzda bir xəta var. Xəta mesajını diqqətlə oxuyun və kodunuzu yenidən yoxlayın.';
    }

    // ---- JavaScript Execution Engine ----
    async function initJavaScriptEngine() {
        const loadingHint = document.getElementById('loading-hint');
        const loadingBarFill = document.getElementById('loading-bar-fill');

        try {
            if (loadingBarFill) loadingBarFill.style.width = '35%';
            if (loadingHint) loadingHint.textContent = 'JavaScript (ES6+) mühiti aktivləşdirilir...';
            await new Promise(r => setTimeout(r, 100));

            if (loadingBarFill) loadingBarFill.style.width = '75%';
            if (loadingHint) loadingHint.textContent = 'Kurikulum və test modulları hazırlanır...';
            await new Promise(r => setTimeout(r, 100));

            if (loadingBarFill) loadingBarFill.style.width = '100%';
            if (loadingHint) loadingHint.textContent = 'Hazırdır! ⚡';
            state.jsEngineReady = true;
            await new Promise(r => setTimeout(r, 150));
        } catch (e) {
            console.error('JavaScript Engine init error:', e);
            state.jsEngineReady = true;
        }
    }

    function preprocessModuleCode(rawCode) {
        if (!rawCode || typeof rawCode !== 'string') return '';

        function blankOut(str) {
            return str.replace(/[^\r\n]/g, ' ');
        }

        const len = rawCode.length;
        let i = 0;
        let result = '';

        while (i < len) {
            const ch = rawCode[i];
            const next = i + 1 < len ? rawCode[i + 1] : '';

            // 1. Single-line comment: keep intact
            if (ch === '/' && next === '/') {
                let start = i;
                i += 2;
                while (i < len && rawCode[i] !== '\n' && rawCode[i] !== '\r') {
                    i++;
                }
                result += rawCode.slice(start, i);
                continue;
            }

            // 2. Multi-line comment: keep intact
            if (ch === '/' && next === '*') {
                let start = i;
                i += 2;
                while (i < len && !(rawCode[i] === '*' && rawCode[i + 1] === '/')) {
                    i++;
                }
                if (i < len) i += 2;
                result += rawCode.slice(start, i);
                continue;
            }

            // 3. String literal (' or "): keep intact
            if (ch === "'" || ch === '"') {
                const quote = ch;
                let start = i;
                i++;
                while (i < len && rawCode[i] !== quote) {
                    if (rawCode[i] === '\\') i++;
                    i++;
                }
                if (i < len) i++;
                result += rawCode.slice(start, i);
                continue;
            }

            // 4. Template literal (`): handle expressions (${...})
            if (ch === '`') {
                let start = i;
                i++;
                while (i < len) {
                    if (rawCode[i] === '\\') {
                        i += 2;
                        continue;
                    }
                    if (rawCode[i] === '`') {
                        i++;
                        break;
                    }
                    if (rawCode[i] === '$' && rawCode[i + 1] === '{') {
                        result += rawCode.slice(start, i + 2);
                        i += 2;
                        let braceDepth = 1;
                        let exprStart = i;
                        while (i < len && braceDepth > 0) {
                            const c = rawCode[i];
                            const n = i + 1 < len ? rawCode[i + 1] : '';
                            if (c === '/' && n === '/') {
                                while (i < len && rawCode[i] !== '\n' && rawCode[i] !== '\r') i++;
                                continue;
                            }
                            if (c === '/' && n === '*') {
                                i += 2;
                                while (i < len && !(rawCode[i] === '*' && rawCode[i + 1] === '/')) i++;
                                if (i < len) i += 2;
                                continue;
                            }
                            if (c === "'" || c === '"') {
                                const q = c; i++;
                                while (i < len && rawCode[i] !== q) {
                                    if (rawCode[i] === '\\') i++;
                                    i++;
                                }
                                if (i < len) i++;
                                continue;
                            }
                            if (c === '`') {
                                i++;
                                while (i < len && rawCode[i] !== '`') {
                                    if (rawCode[i] === '\\') i++;
                                    i++;
                                }
                                if (i < len) i++;
                                continue;
                            }
                            if (c === '{') braceDepth++;
                            else if (c === '}') {
                                braceDepth--;
                                if (braceDepth === 0) break;
                            }
                            i++;
                        }
                        const exprCode = rawCode.slice(exprStart, i);
                        result += preprocessModuleCode(exprCode);
                        if (i < len && rawCode[i] === '}') {
                            result += '}';
                            i++;
                        }
                        start = i;
                        continue;
                    }
                    i++;
                }
                result += rawCode.slice(start, i);
                continue;
            }

            // 5. Code statements outside strings/comments
            const remaining = rawCode.slice(i);

            // A. Multi-line or single-line import:
            const importMatch = remaining.match(/^import\s+([\s\S]*?from\s*['"][^'"]+['"]|['"][^'"]+['"]);?/);
            if (importMatch) {
                result += blankOut(importMatch[0]);
                i += importMatch[0].length;
                continue;
            }

            // B. require statement:
            const reqMatch = remaining.match(/^(?:const|let|var)\s+(?:\{[\s\S]*?\}|[a-zA-Z0-9_$]+)\s*=\s*require\s*\([^)]*\);?/);
            if (reqMatch) {
                result += blankOut(reqMatch[0]);
                i += reqMatch[0].length;
                continue;
            }

            // C. export default async function / export default function / export default class (with name)
            const expDefNamedMatch = remaining.match(/^export\s+default\s+(async\s+function|function|class)\s+([a-zA-Z0-9_$]+)\b/);
            if (expDefNamedMatch) {
                result += blankOut('export default ') + expDefNamedMatch[1] + ' ' + expDefNamedMatch[2];
                i += expDefNamedMatch[0].length;
                continue;
            }

            // D. export default <anonymous function/class or expression>
            const expDefExprMatch = remaining.match(/^export\s+default\s+/);
            if (expDefExprMatch) {
                result += 'const __default__ = ';
                i += expDefExprMatch[0].length;
                continue;
            }

            // E. export async function / export function / export class / export const / export let / export var
            const expDeclMatch = remaining.match(/^export\s+(async\s+function|function|class|const|let|var)\b/);
            if (expDeclMatch) {
                result += blankOut('export ') + expDeclMatch[1];
                i += expDeclMatch[0].length;
                continue;
            }

            // F. export { a, b }; (multi-line or single-line)
            const expNamedMatch = remaining.match(/^export\s*\{[\s\S]*?\};?/);
            if (expNamedMatch) {
                result += blankOut(expNamedMatch[0]);
                i += expNamedMatch[0].length;
                continue;
            }

            // Regular character
            result += ch;
            i++;
        }

        return result;
    }

    class MockEvent {
        constructor(type, init = {}) {
            this.type = type;
            this.bubbles = init.bubbles !== undefined ? !!init.bubbles : true;
            this.cancelable = init.cancelable !== undefined ? !!init.cancelable : true;
            this.defaultPrevented = false;
            this.target = null;
            this.currentTarget = null;
            this._stopped = false;
        }
        preventDefault() {
            if (this.cancelable) this.defaultPrevented = true;
        }
        stopPropagation() {
            this._stopped = true;
        }
    }

    class MockCustomEvent extends MockEvent {
        constructor(type, init = {}) {
            super(type, init);
            this.detail = init.detail !== undefined ? init.detail : null;
        }
    }

    class MockDOMElement {
        constructor(tag = 'div', id = '', classes = []) {
            this.tagName = (tag || 'DIV').toUpperCase();
            this.id = id || '';
            this._classes = new Set((Array.isArray(classes) ? classes.join(' ') : String(classes || '')).split(' ').filter(Boolean));
            this._textContent = '';
            this._innerHTML = '';
            this.style = {};
            this._attrs = {};
            this.dataset = {};
            this.children = [];
            this.parentElement = null;
            this.parentNode = null;
            this.value = '';
            this.checked = false;
            this._listeners = {};
            this.classList = {
                add: (...cls) => { cls.forEach(c => this._classes.add(c)); },
                remove: (...cls) => { cls.forEach(c => this._classes.delete(c)); },
                toggle: (c) => { const has = this._classes.has(c); if (has) this._classes.delete(c); else this._classes.add(c); return !has; },
                contains: (c) => this._classes.has(c)
            };
        }
        get className() {
            return Array.from(this._classes).join(' ');
        }
        set className(val) {
            this._classes = new Set(String(val || '').split(' ').filter(Boolean));
        }
        get textContent() {
            if (this.children.length > 0) {
                return this.children.map(c => c.textContent).join('');
            }
            return this._textContent || '';
        }
        set textContent(val) {
            this._textContent = String(val);
            this.children = [];
        }
        get innerHTML() {
            if (this.children.length > 0) {
                return this.children.map(c => `<${c.tagName.toLowerCase()}>${c.innerHTML || c.textContent}</${c.tagName.toLowerCase()}>`).join('');
            }
            return this._innerHTML || '';
        }
        set innerHTML(val) {
            this._innerHTML = String(val);
            this.children = [];
            const tagRegex = /<([a-zA-Z0-9]+)([^>]*)>(.*?)<\/\1>|<([a-zA-Z0-9]+)([^>]*)\/?>/gs;
            let match;
            while ((match = tagRegex.exec(val)) !== null) {
                const tag = match[1] || match[4];
                const attrs = match[2] || match[5] || '';
                const inner = match[3] || '';
                const child = new MockDOMElement(tag);
                const classMatch = attrs.match(/class=['"]([^'"]+)['"]/);
                if (classMatch) child.className = classMatch[1];
                const idMatch = attrs.match(/id=['"]([^'"]+)['"]/);
                if (idMatch) child.id = idMatch[1];
                if (inner) {
                    if (/<[a-zA-Z0-9]+[^>]*>/.test(inner)) {
                        child.innerHTML = inner;
                    } else {
                        child.textContent = inner;
                    }
                }
                this.appendChild(child);
            }
        }
        get previousElementSibling() {
            if (!this.parentElement) return null;
            const idx = this.parentElement.children.indexOf(this);
            return idx > 0 ? this.parentElement.children[idx - 1] : null;
        }
        get nextElementSibling() {
            if (!this.parentElement) return null;
            const idx = this.parentElement.children.indexOf(this);
            return idx !== -1 && idx < this.parentElement.children.length - 1 ? this.parentElement.children[idx + 1] : null;
        }
        getAttribute(name) { return this._attrs[name] !== undefined ? this._attrs[name] : null; }
        setAttribute(name, val) { 
            this._attrs[name] = String(val); 
            if (name === 'id') this.id = String(val); 
            if (name === 'class') { 
                this.className = String(val); 
            }
            if (name === 'value') this.value = String(val);
        }
        hasAttribute(name) { return name in this._attrs; }
        removeAttribute(name) { delete this._attrs[name]; }
        remove() {
            if (this.parentElement) {
                this.parentElement.removeChild(this);
            }
        }
        removeChild(child) {
            const idx = this.children.indexOf(child);
            if (idx !== -1) {
                this.children.splice(idx, 1);
                child.parentElement = null;
                child.parentNode = null;
            }
            return child;
        }
        appendChild(child) {
            if (child) {
                if (child.tagName === 'FRAGMENT') {
                    const kids = [...child.children];
                    child.children = [];
                    kids.forEach(k => this.appendChild(k));
                    return child;
                }
                child.parentElement = this;
                child.parentNode = this;
                this.children.push(child);
            }
            return child;
        }
        cloneNode(deep = false) {
            const clone = new MockDOMElement(this.tagName, this.id, [...this._classes]);
            clone._textContent = this._textContent;
            clone.value = this.value;
            clone._attrs = { ...this._attrs };
            clone.dataset = { ...this.dataset };
            if (deep) {
                this.children.forEach(c => clone.appendChild(c.cloneNode(true)));
            }
            return clone;
        }
        contains(node) {
            let curr = node;
            while (curr) {
                if (curr === this) return true;
                curr = curr.parentElement || curr.parentNode;
            }
            return false;
        }
        querySelectorAll(selector) {
            const results = [];
            const traverse = (el) => {
                if (el !== this && el.matches && el.matches(selector)) {
                    results.push(el);
                }
                (el.children || []).forEach(traverse);
            };
            traverse(this);
            return results;
        }
        querySelector(selector) {
            return this.querySelectorAll(selector)[0] || null;
        }
        addEventListener(type, callback, options = {}) {
            if (!type || typeof callback !== 'function') return;
            this._listeners[type] = this._listeners[type] || [];
            const once = typeof options === 'object' && options !== null ? !!options.once : false;
            const capture = typeof options === 'boolean' ? options : (options && options.capture ? true : false);
            this._listeners[type].push({ fn: callback, once, capture });
        }
        removeEventListener(type, callback) {
            if (!this._listeners[type]) return;
            this._listeners[type] = this._listeners[type].filter(item => (item.fn || item) !== callback);
        }
        dispatchEvent(event) {
            if (!event) return true;
            try { if (!event.target) event.target = this; } catch (e) {
                try { Object.defineProperty(event, 'target', { value: this, configurable: true, writable: true }); } catch(_) {}
            }

            const path = [];
            let p = this;
            while (p) {
                path.unshift(p);
                p = p.parentElement || p.parentNode;
            }

            // Capture phase
            for (let i = 0; i < path.length - 1; i++) {
                const node = path[i];
                if (event._stopped) break;
                try { event.currentTarget = node; } catch(e) {}
                const handlers = node._listeners[event.type] ? [...node._listeners[event.type]] : [];
                for (const item of handlers) {
                    if (item.capture) {
                        const h = item.fn || item;
                        h.call(node, event);
                        if (item.once) node.removeEventListener(event.type, h);
                        if (event._stopped) break;
                    }
                }
            }

            // Target and Bubbling phase
            let curr = this;
            while (curr && !event._stopped) {
                try { event.currentTarget = curr; } catch(e) {}
                const handlers = curr._listeners[event.type] ? [...curr._listeners[event.type]] : [];
                for (const item of handlers) {
                    if (!item.capture || curr === this) {
                        const h = item.fn || item;
                        h.call(curr, event);
                        if (item.once) curr.removeEventListener(event.type, h);
                        if (event._stopped) break;
                    }
                }
                if (!event.bubbles || event._stopped) break;
                curr = curr.parentElement || curr.parentNode;
            }
            return !event.defaultPrevented;
        }
        click() {
            const evt = new MockEvent('click', { bubbles: true, cancelable: true });
            return this.dispatchEvent(evt);
        }
        matches(selector) {
            if (!selector) return false;
            const s = selector.trim();
            if (s.startsWith('#')) return this.id === s.slice(1);
            if (s.startsWith('.')) return this.classList.contains(s.slice(1));
            return this.tagName.toLowerCase() === s.toLowerCase();
        }
        closest(selector) {
            let el = this;
            while (el) {
                if (el.matches && el.matches(selector)) return el;
                el = el.parentElement || el.parentNode;
            }
            return null;
        }
    }

    function createMockDocument() {
        const cache = new Map();
        function getOrCreate(key, createFn) {
            if (!cache.has(key)) {
                cache.set(key, createFn());
            }
            return cache.get(key);
        }

        const siyahi = new MockDOMElement('ul', 'mehsul-siyahisi');
        const silBtn = new MockDOMElement('button', 'mehsul-42', ['sil-btn']);
        silBtn.textContent = 'Sil';
        siyahi.appendChild(silBtn);
        cache.set('sel:#mehsul-siyahisi', siyahi);
        cache.set('sel:#mehsul-42', silBtn);
        cache.set('sel:.sil-btn', silBtn);

        const body = new MockDOMElement('body');
        body.appendChild(siyahi);

        return {
            title: 'JSÖyrən DOM Simulyatoru',
            body: body,
            getElementById: (id) => body.querySelector('#' + id) || getOrCreate('id:' + id, () => new MockDOMElement('div', id)),
            querySelector: (sel) => body.querySelector(sel) || getOrCreate('sel:' + sel, () => {
                const idMatch = (sel || '').match(/^#([\w-]+)/);
                const classMatch = (sel || '').match(/^\.([\w-]+)/);
                const tagMatch = (sel || '').match(/^([a-zA-Z0-9]+)/);
                const tag = tagMatch ? tagMatch[1] : 'div';
                return new MockDOMElement(tag, idMatch ? idMatch[1] : '', classMatch ? [classMatch[1]] : []);
            }),
            querySelectorAll: (sel) => {
                const inBody = body.querySelectorAll(sel);
                if (inBody && inBody.length > 0) return inBody;
                return [
                    getOrCreate('sel:' + sel + ':0', () => new MockDOMElement('li', 'item-1', ['meny-bendi', 'kurs-kart'])),
                    getOrCreate('sel:' + sel + ':1', () => new MockDOMElement('li', 'item-2', ['meny-bendi', 'kurs-kart']))
                ];
            },
            createElement: (tag) => new MockDOMElement(tag),
            createDocumentFragment: () => new MockDOMElement('fragment')
        };
    }

    class MockStorage {
        constructor() {
            this._data = new Map();
        }
        setItem(key, value) {
            this._data.set(String(key), String(value));
        }
        getItem(key) {
            return this._data.has(String(key)) ? this._data.get(String(key)) : null;
        }
        removeItem(key) {
            this._data.delete(String(key));
        }
        clear() {
            this._data.clear();
        }
        get length() {
            return this._data.size;
        }
        key(index) {
            return Array.from(this._data.keys())[index] || null;
        }
    }

    function createMockNavigator() {
        let clipText = '';
        return {
            clipboard: {
                writeText: async (text) => {
                    clipText = String(text);
                    return Promise.resolve();
                },
                readText: async () => {
                    return Promise.resolve(clipText);
                }
            },
            geolocation: {
                getCurrentPosition: (success, error, options) => {
                    if (typeof success === 'function') {
                        success({
                            coords: {
                                latitude: 40.4093,
                                longitude: 49.8671,
                                accuracy: 10
                            },
                            timestamp: Date.now()
                        });
                    }
                }
            }
        };
    }

    function mockRequestAnimationFrame(cb) {
        return setTimeout(() => cb(Date.now()), 10);
    }
    function mockCancelAnimationFrame(id) {
        clearTimeout(id);
    }

    function createMockFetch() {
        return async function mockFetch(url, options = {}) {
            if (options.signal && options.signal.aborted) {
                const err = new Error('The operation was aborted');
                err.name = 'AbortError';
                throw err;
            }

            const u = String(url || '');
            const method = (options.method || 'GET').toUpperCase();

            if (method === 'PUT' || method === 'PATCH') {
                let parsed = {};
                try { parsed = JSON.parse(options.body || '{}'); } catch(e){}
                return {
                    ok: true,
                    status: 200,
                    statusText: 'OK',
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ id: 1, ...parsed }),
                    text: async () => JSON.stringify({ id: 1, ...parsed })
                };
            }

            if (u.includes('404') || u.includes('tapilmadi') || u.includes('tapilmayan') || u.includes('xeta')) {
                return {
                    ok: false,
                    status: 404,
                    statusText: 'Not Found',
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ xeta: 'Resurs tapılmadı', kod: 404 }),
                    text: async () => '404 Not Found'
                };
            }

            if (u.includes('kurs')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ ad: 'JSÖyrən', status: 'Aktiv', muellif: 'JSÖyrən Komandası' }),
                    text: async () => JSON.stringify({ ad: 'JSÖyrən', status: 'Aktiv', muellif: 'JSÖyrən Komandası' })
                };
            }

            if (u.includes('xeber')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ xeber: 'Texnologiya Yenilikləri', id: 1, kateqoriya: 'İT' }),
                    text: async () => JSON.stringify({ xeber: 'Texnologiya Yenilikləri', id: 1, kateqoriya: 'İT' })
                };
            }

            if (u.includes('/api/auth/refresh')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ yeniToken: 'token-v2' })
                };
            }

            if (u.includes('/api/postlar')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => [{ id: 1, basliq: 'JS Dərsi', muellifId: 10 }]
                };
            }

            if (u.includes('/api/muellifler')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ id: 10, ad: 'Emin' })
                };
            }

            if (u.includes('sehife')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => [{ id: 1, ad: 'Məhsul 1' }, { id: 2, ad: 'Məhsul 2' }]
                };
            }

            if (u.includes('/api/istifadeciler/1')) {
                return {
                    ok: true,
                    status: 200,
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ id: 1, ad: 'Murad', email: 'murad@test.az' })
                };
            }

            if (method === 'POST') {
                let bodyData = {};
                if (options.body) {
                    try {
                        bodyData = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
                    } catch(e) {
                        bodyData = { raw: options.body };
                    }
                }
                const newId = u.includes('qeydiyyat') ? 42 : 101;
                return {
                    ok: true,
                    status: 201,
                    statusText: 'Created',
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ id: newId, ...bodyData, status: 'Yaradıldı' }),
                    text: async () => JSON.stringify({ id: newId, ...bodyData })
                };
            }

            if (method === 'DELETE') {
                return {
                    ok: true,
                    status: 200,
                    statusText: 'OK',
                    headers: new Map([['content-type', 'application/json']]),
                    json: async () => ({ ugurlu: true, mesaj: 'Uğurla silindi' }),
                    text: async () => JSON.stringify({ ugurlu: true })
                };
            }

            const defaultUsers = [
                { id: 1, ad: "Nigar Əliyeva", ixtisas: "Frontend Mühəndis" },
                { id: 2, ad: "Elmir Qasımov", ixtisas: "Backend Mühəndis" }
            ];

            return {
                ok: true,
                status: 200,
                statusText: 'OK',
                headers: new Map([['content-type', 'application/json']]),
                json: async () => defaultUsers,
                text: async () => JSON.stringify(defaultUsers)
            };
        };
    }

    function createMockNodeEnv(targetConsole = (typeof console !== 'undefined' ? console : { log: () => {} })) {
        class MockEventEmitter {
            constructor() { this._events = {}; }
            on(ev, fn) { (this._events[ev] = this._events[ev] || []).push(fn); return this; }
            addListener(ev, fn) { return this.on(ev, fn); }
            once(ev, fn) {
                const wrap = (...args) => { this.off(ev, wrap); fn(...args); };
                wrap.original = fn;
                return this.on(ev, wrap);
            }
            emit(ev, ...args) {
                const list = (this._events[ev] || []).slice();
                list.forEach(fn => fn(...args));
                return list.length > 0;
            }
            off(ev, fn) {
                if (!this._events[ev]) return this;
                this._events[ev] = this._events[ev].filter(f => f !== fn && f.original !== fn);
                return this;
            }
            removeAllListeners(ev) {
                if (ev) delete this._events[ev];
                else this._events = {};
                return this;
            }
            removeListener(ev, fn) { return this.off(ev, fn); }
            listenerCount(ev) { return (this._events[ev] || []).length; }
            listeners(ev) { return this._events[ev] || []; }
        }

        const mockBcrypt = {
            hash: async (p, salt) => `$2b$10$hash_${String(p || '').slice(0, 10)}_${Date.now()}`,
            hashSync: (p, salt) => `$2b$10$hash_${String(p || '').slice(0, 10)}_${Date.now()}`,
            compare: async (plain, hash) => {
                if (!plain || !hash) return false;
                return String(hash).includes(`$hash_${String(plain).slice(0, 10)}`) || String(hash).includes(String(plain));
            },
            compareSync: (plain, hash) => {
                if (!plain || !hash) return false;
                return String(hash).includes(`$hash_${String(plain).slice(0, 10)}`) || String(hash).includes(String(plain));
            }
        };

        const mockJwt = {
            sign: (payload, secret, options = {}) => {
                const expPart = options.expiresIn ? '.expires.' + options.expiresIn : '';
                const h = 'eyJhbGciOiJIUzI1NiJ9';
                let bodyStr = '';
                try {
                    const jsonStr = JSON.stringify(payload);
                    bodyStr = typeof btoa !== 'undefined' ? btoa(unescape(encodeURIComponent(jsonStr))) : (typeof Buffer !== 'undefined' ? Buffer.from(jsonStr).toString('base64') : 'eyJ1c2VySWQiOjF9');
                } catch(e) {
                    bodyStr = 'eyJ1c2VySWQiOjF9';
                }
                return `${h}.${bodyStr}${expPart}.mockSignature`;
            },
            verify: (token, secret) => {
                try {
                    const parts = String(token || '').split('.');
                    if (parts.length < 2) throw new Error("Token malformed");
                    let payload = {};
                    try {
                        let decoded = '';
                        if (typeof atob !== 'undefined') {
                            decoded = decodeURIComponent(escape(atob(parts[1])));
                        } else if (typeof Buffer !== 'undefined') {
                            decoded = Buffer.from(parts[1], 'base64').toString('utf8');
                        }
                        payload = JSON.parse(decoded);
                    } catch(e) {
                        payload = { userId: 1 };
                    }
                    if (payload && (payload.userId === 1 || payload.id === 1) && !payload.ad) {
                        payload.ad = "Kamran";
                    }
                    return payload;
                } catch(e) {
                    throw new Error("Token malformed");
                }
            },
            decode: (token) => {
                try {
                    const parts = String(token || '').split('.');
                    if (parts.length < 2) return null;
                    let decoded = '';
                    if (typeof atob !== 'undefined') {
                        decoded = decodeURIComponent(escape(atob(parts[1])));
                    } else if (typeof Buffer !== 'undefined') {
                        decoded = Buffer.from(parts[1], 'base64').toString('utf8');
                    }
                    return JSON.parse(decoded);
                } catch(e) { return null; }
            }
        };

        const mockProcess = {
            env: {
                NODE_ENV: 'production',
                PORT: '5000',
                HOST: 'localhost',
                DB_HOST: 'localhost',
                DB_NAME: 'jsoyren_db',
                DB_PORT: '5432',
                DB_USER: 'postgres'
            },
            cwd: () => '/home/jsoyren/project',
            platform: 'linux',
            version: 'v20.11.0',
            argv: ['/usr/bin/node', '/home/jsoyren/project/app.js', '--mode=exam', '--port=5000'],
            nextTick: (fn, ...args) => {
                Promise.resolve().then(() => {
                    try {
                        if (typeof fn === 'function') fn(...args);
                    } catch (err) {
                        targetConsole.error(err);
                    }
                });
            },
            exit: (code = 0) => {
                throw new Error(`[Proses dayandırıldı] process.exit(${code})`);
            }
        };

        const mockPath = {
            join: (...parts) => {
                const joined = parts.filter(Boolean).map(p => String(p).replace(/^[\\\/]+|[\\\/]+$/g, '')).filter(Boolean).join('/');
                return parts[0] && String(parts[0]).startsWith('/') ? '/' + joined : joined;
            },
            basename: (p, ext) => {
                const parts = String(p || '').split(/[\\\/]/);
                let base = parts[parts.length - 1] || '';
                if (ext && base.endsWith(ext)) base = base.slice(0, -ext.length);
                return base;
            },
            extname: (p) => {
                const base = String(p || '').split(/[\\\/]/).pop() || '';
                const idx = base.lastIndexOf('.');
                return idx > 0 ? base.slice(idx) : '';
            },
            resolve: (...parts) => {
                const segments = [];
                for (const p of parts.filter(Boolean)) {
                    const sub = String(p).split(/[\\\/]/);
                    for (const seg of sub) {
                        if (!seg || seg === '.') continue;
                        if (seg === '..') {
                            if (segments.length > 0) segments.pop();
                        } else {
                            segments.push(seg);
                        }
                    }
                }
                return '/' + segments.join('/');
            }
        };

        const mockOs = {
            platform: () => 'linux',
            arch: () => 'x64',
            cpus: () => [
                { model: 'Virtual CPU @ 2.50GHz', speed: 2500 },
                { model: 'Virtual CPU @ 2.50GHz', speed: 2500 },
                { model: 'Virtual CPU @ 2.50GHz', speed: 2500 },
                { model: 'Virtual CPU @ 2.50GHz', speed: 2500 }
            ],
            totalmem: () => 17179869184,
            freemem: () => 8589934592,
            homedir: () => '/home/jsoyren'
        };

        const _vfs = {
            '/home/jsoyren/project/config.json': JSON.stringify({ port: 3000, host: 'localhost', name: 'JSÖyrən API' }, null, 2),
            'config.json': JSON.stringify({ port: 3000, host: 'localhost', name: 'JSÖyrən API' }, null, 2),
            '/app/package.json': JSON.stringify({ name: 'jsoyren-backend', version: '1.0.0', dependencies: { express: '^4.19.2' }, port: 3000, host: 'localhost', server: 'JSÖyrən API', status: 'Aktiv' }, null, 2),
            'package.json': JSON.stringify({ name: 'jsoyren-backend', version: '1.0.0', dependencies: { express: '^4.19.2' }, port: 3000, host: 'localhost', server: 'JSÖyrən API', status: 'Aktiv' }, null, 2),
            'server.json': JSON.stringify({ server: 'JSÖyrən API', port: 3000, host: 'localhost' }, null, 2),
            '/home/jsoyren/project/data.txt': 'Salam, Node.js!',
            'data.txt': 'Salam, Node.js!'
        };

        const mockFs = {
            promises: {
                readdir: async (dir = '.') => {
                    return ['index.js', 'package.json', 'data.txt', 'config.json'];
                },
                readFile: async (file, encoding) => {
                    const f = String(file || '').trim();
                    const content = _vfs[f] || _vfs['/home/jsoyren/project/' + f.replace(/^\/+/, '')] || _vfs[f.split('/').pop()];
                    if (content === undefined) {
                        throw new Error(`ENOENT: no such file or directory, open '${file}'`);
                    }
                    if (encoding && (encoding === 'utf-8' || encoding === 'utf8')) {
                        return String(content);
                    }
                    return {
                        type: 'Buffer',
                        data: Array.from(content).map(c => c.charCodeAt(0)),
                        toString: () => content,
                        length: content.length
                    };
                },
                writeFile: async (file, data) => {
                    const f = String(file || '').trim();
                    _vfs[f] = String(data);
                    return undefined;
                },
                appendFile: async (file, data) => {
                    const f = String(file || '').trim();
                    _vfs[f] = (_vfs[f] || '') + String(data);
                    return undefined;
                }
            },
            readFile: (file, options, callback) => {
                const cb = typeof options === 'function' ? options : callback;
                if (typeof cb === 'function') {
                    const encoding = typeof options === 'string' ? options : (options && options.encoding);
                    const runAsync = (typeof queueMicrotask === 'function') ? queueMicrotask : (fn => setTimeout(fn, 0));
                    runAsync(() => {
                        try {
                            const content = mockFs.readFileSync(file, encoding);
                            cb(null, content);
                        } catch(err) {
                            cb(err);
                        }
                    });
                } else {
                    return mockFs.promises.readFile(file, options);
                }
            },
            writeFile: (file, data, options, callback) => {
                const cb = typeof options === 'function' ? options : callback;
                if (typeof cb === 'function') {
                    try {
                        mockFs.writeFileSync(file, data);
                        cb(null);
                    } catch(err) {
                        cb(err);
                    }
                } else {
                    return mockFs.promises.writeFile(file, data);
                }
            },
            readdir: (dir, options, callback) => {
                const cb = typeof options === 'function' ? options : callback;
                if (typeof cb === 'function') {
                    try {
                        const files = ['index.js', 'package.json', 'data.txt', 'config.json'];
                        cb(null, files);
                    } catch(err) {
                        cb(err);
                    }
                } else {
                    return mockFs.promises.readdir(dir);
                }
            },
            readFileSync: (file, encoding) => {
                const f = String(file || '').trim();
                const content = _vfs[f] || _vfs['/home/jsoyren/project/' + f.replace(/^\/+/, '')] || _vfs[f.split('/').pop()];
                if (content === undefined) {
                    throw new Error(`ENOENT: no such file or directory, open '${file}'`);
                }
                if (encoding && (encoding === 'utf-8' || encoding === 'utf8')) {
                    return String(content);
                }
                return { type: 'Buffer', toString: () => content };
            },
            writeFileSync: (file, data) => {
                const f = String(file || '').trim();
                _vfs[f] = String(data);
            }
        };

        class MockHttpServer extends MockEventEmitter {
            constructor(requestListener) {
                super();
                this.requestListener = requestListener;
                this.port = null;
                if (typeof requestListener === 'function') {
                    this.on('request', requestListener);
                }
            }
            listen(port, callback) {
                this.port = port;
                if (typeof callback === 'function') {
                    callback();
                } else {
                    targetConsole.log(`Server ${port} portunda işə düşdü!`);
                }
                return this;
            }
            simulateRequest(url = '/', method = 'GET', options = {}) {
                let reqUrl = url;
                let reqMethod = method;
                if (typeof url === 'object' && url !== null) {
                    reqUrl = url.url || '/';
                    reqMethod = url.method || 'GET';
                    options = url;
                }
                const req = Object.assign(new MockEventEmitter(), {
                    url: reqUrl,
                    method: reqMethod,
                    headers: options.headers || {}
                });
                let ended = false;
                let buffer = '';
                const res = Object.assign(new MockEventEmitter(), {
                    statusCode: 200,
                    headersSent: false,
                    setHeader: (name, value) => {},
                    getHeader: (name) => null,
                    writeHead: (statusCode, headers) => {
                        res.statusCode = statusCode;
                        res.headersSent = true;
                    },
                    write: (chunk) => {
                        buffer += (chunk !== undefined && chunk !== null) ? String(chunk) : '';
                    },
                    end: (data = '') => {
                        ended = true;
                        res.headersSent = true;
                        if (data !== undefined && data !== null && data !== '') {
                            buffer += (typeof data === 'object' ? JSON.stringify(data) : String(data));
                        }
                        if (buffer !== '') {
                            targetConsole.log(buffer);
                        }
                        res.emit('finish');
                    }
                });

                let listener = this.requestListener;
                if (typeof listener !== 'function' && typeof this.listenerCount === 'function' && this.listenerCount('request') > 0) {
                    listener = (q, s) => this.emit('request', q, s);
                }

                if (typeof listener === 'function') {
                    try {
                        listener(req, res);
                    } catch (listenerErr) {
                        targetConsole.error(listenerErr.message || String(listenerErr));
                    }
                }

                return { ended, statusCode: res.statusCode, buffer };
            }
        }

        const mockHttp = {
            createServer: (requestListener) => new MockHttpServer(requestListener)
        };

        class AppError extends Error {
            constructor(message, statusCode) {
                super(message);
                this.statusCode = statusCode;
                this.isOperational = true;
            }
        }

        const mockDirname = '/home/jsoyren/project';
        const mockFilename = '/home/jsoyren/project/index.js';
        const mockGlobal = {
            process: mockProcess,
            path: mockPath,
            os: mockOs,
            fs: mockFs,
            http: mockHttp,
            AppError: AppError,
            EventEmitter: MockEventEmitter,
            bcrypt: mockBcrypt,
            jwt: mockJwt,
            __dirname: mockDirname,
            __filename: mockFilename,
            isNode: true
        };
        const mockRequire = (mod) => {
            if (mod === 'fs') return mockFs;
            if (mod === 'fs/promises') return mockFs.promises;
            if (mod === 'path') return mockPath;
            if (mod === 'os') return mockOs;
            if (mod === 'process') return mockProcess;
            if (mod === 'http') return mockHttp;
            if (mod === 'events') return { EventEmitter: MockEventEmitter, default: MockEventEmitter };
            if (mod === 'bcrypt' || mod === 'bcryptjs') return mockBcrypt;
            if (mod === 'jsonwebtoken') return mockJwt;
            if (mod.includes('AppError')) return AppError;
            if (mod === 'v8') return {
                getHeapStatistics: () => ({
                    total_heap_size: 67108864,
                    used_heap_size: 38797312,
                    heap_size_limit: 4294967296
                })
            };
            return {};
        };

        mockGlobal.global = mockGlobal;
        mockGlobal.globalThis = mockGlobal;
        mockGlobal.require = mockRequire;

        return {
            mockProcess,
            mockPath,
            mockOs,
            mockFs,
            mockDirname,
            mockFilename,
            mockGlobal,
            mockRequire,
            EventEmitter: MockEventEmitter,
            bcrypt: mockBcrypt,
            jwt: mockJwt,
            http: mockHttp,
            AppError: AppError
        };
    }

    function createMockExpress(customConsole) {
        const logger = customConsole || console;

        class MockDatabasePool {
            constructor(config = {}) {
                this.config = config;
                this._clients = 0;
                this._users = [
                    { id: 1, ad: "Kamran", email: "kamran@misal.az", rol: "admin" },
                    { id: 2, ad: "Nigar", email: "nigar@misal.az", rol: "istifadeci" },
                    { id: 3, ad: "Elmir", email: "elmir@misal.az", rol: "istifadeci" }
                ];
                this._products = [
                    { id: 101, ad: "Noutbuk", qiymet: 1500 },
                    { id: 102, ad: "Monitor", qiymet: 400 }
                ];
            }

            async query(sql, params = []) {
                const cleanSql = String(sql || '').trim();

                // SQL Injection detection
                if (cleanSql.includes("' OR '1'='1") || cleanSql.includes("' OR 1=1")) {
                    return {
                        rows: [...this._users],
                        rowCount: this._users.length,
                        warning: "[Təhlükəsizlik Xəbərdarlığı] SQL Injection hücumu aşkarlandı!"
                    };
                }

                // Parameterized SELECT users by id: SELECT * FROM users WHERE id = $1
                if (/SELECT\s+\*\s+FROM\s+(?:users|istifadeciler)\s+WHERE\s+id\s*=\s*\$1/i.test(cleanSql)) {
                    const id = Number(params[0]);
                    const found = this._users.filter(u => u.id === id);
                    return { rows: found, rowCount: found.length };
                }

                // Parameterized SELECT users by email: SELECT * FROM users WHERE email = $1
                if (/SELECT\s+\*\s+FROM\s+(?:users|istifadeciler)\s+WHERE\s+email\s*=\s*\$1/i.test(cleanSql)) {
                    const email = String(params[0] || '').toLowerCase();
                    const found = this._users.filter(u => u.email.toLowerCase() === email);
                    return { rows: found, rowCount: found.length };
                }

                // Generic SELECT * FROM users / istifadeciler
                if (/SELECT\s+\*\s+FROM\s+(?:users|istifadeciler)/i.test(cleanSql)) {
                    const list = this._users.slice(0, 2);
                    return { rows: [...list], rowCount: list.length };
                }

                return { rows: [], rowCount: 0 };
            }

            async connect() {
                this._clients++;
                return {
                    query: async (text, params) => this.query(text, params),
                    release: () => {
                        if (this._clients > 0) this._clients--;
                    }
                };
            }
        }

        class MockExpressApp {
            constructor() {
                this.stack = [];
            }

            use(...args) {
                let pathPrefix = '/';
                let fns = args;
                if (typeof args[0] === 'string') {
                    pathPrefix = args[0];
                    fns = args.slice(1);
                }
                fns.forEach(fn => {
                    if (typeof fn === 'function') {
                        this.stack.push({
                            type: 'middleware',
                            pathPrefix,
                            fn,
                            isErrorHandler: fn.length === 4,
                            isJsonParser: fn.isJsonParser === true,
                            isCors: fn.isCors === true
                        });
                    }
                });
                return this;
            }

            _addRoute(method, path, ...handlers) {
                const flattened = handlers.flat();
                const paramNames = [];
                const regexPath = path.replace(/:([a-zA-Z0-9_]+)/g, (_, name) => {
                    paramNames.push(name);
                    return '([^/]+)';
                });
                const regex = new RegExp(`^${regexPath}$`);
                flattened.forEach(handler => {
                    if (typeof handler === 'function') {
                        this.stack.push({
                            type: 'route',
                            method: method.toUpperCase(),
                            path,
                            regex,
                            paramNames,
                            handler,
                            isErrorHandler: false
                        });
                    }
                });
                return this;
            }

            get(path, ...handlers) { return this._addRoute('GET', path, ...handlers); }
            post(path, ...handlers) { return this._addRoute('POST', path, ...handlers); }
            put(path, ...handlers) { return this._addRoute('PUT', path, ...handlers); }
            delete(path, ...handlers) { return this._addRoute('DELETE', path, ...handlers); }
            patch(path, ...handlers) { return this._addRoute('PATCH', path, ...handlers); }

            listen(port, callback) {
                if (typeof callback === 'function') {
                    callback();
                } else {
                    logger.log(`[Express] Server ${port} portunda dinləyir...`);
                }
                return this;
            }

            simulateRequest(method, url, options = {}) {
                const [pathOnly, rawQuery] = String(url || '/').split('?');
                const query = {};
                if (rawQuery) {
                    rawQuery.split('&').forEach(pair => {
                        const [k, v] = pair.split('=');
                        if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || '');
                    });
                }

                let bodyData = undefined;
                if (options.body !== undefined) {
                    const hasJsonParser = this.stack.some(l => l.isJsonParser);
                    if (hasJsonParser) {
                        if (typeof options.body === 'string') {
                            try { bodyData = JSON.parse(options.body); } catch(e) { bodyData = options.body; }
                        } else {
                            bodyData = options.body;
                        }
                    } else {
                        bodyData = undefined;
                    }
                }

                const originHeader = options.headers ? (options.headers.origin || options.headers.Origin) : null;

                const req = {
                    method: String(method || 'GET').toUpperCase(),
                    url: url,
                    path: pathOnly,
                    query: query,
                    params: {},
                    headers: Object.assign({}, options.headers || {}),
                    body: bodyData
                };

                let statusCode = 200;
                let headersSent = false;
                let responseBody = null;

                const res = {
                    corsAllowed: false,
                    corsBlocked: false,
                    allowedOrigin: null,
                    get statusCode() { return statusCode; },
                    set statusCode(code) { statusCode = code; },
                    status: function(code) {
                        statusCode = code;
                        return res;
                    },
                    json: function(data) {
                        if (headersSent) return res;
                        headersSent = true;
                        responseBody = data;

                        if (originHeader) {
                            if (res.corsBlocked) {
                                logger.log(`[CORS Xətası] '${originHeader}' mənşəyindən (Origin) gələn sorğu bloklandı: İcazə verilməyən mənşə!`);
                                return res;
                            }
                            if (!res.corsAllowed) {
                                logger.log(`[CORS Xətası] '${originHeader}' mənşəyindən (Origin) gələn sorğu bloklandı: Access-Control-Allow-Origin başlığı təyin edilməyib!`);
                                return res;
                            }
                            logger.log(`[HTTP ${statusCode} | CORS: ${res.allowedOrigin}]`, JSON.stringify(data));
                            return res;
                        }

                        logger.log(`[HTTP ${statusCode}]`, JSON.stringify(data));
                        return res;
                    },
                    send: function(data) {
                        if (headersSent) return res;
                        headersSent = true;
                        responseBody = data;

                        if (originHeader) {
                            if (res.corsBlocked) {
                                logger.log(`[CORS Xətası] '${originHeader}' mənşəyindən (Origin) gələn sorğu bloklandı: İcazə verilməyən mənşə!`);
                                return res;
                            }
                            if (!res.corsAllowed) {
                                logger.log(`[CORS Xətası] '${originHeader}' mənşəyindən (Origin) gələn sorğu bloklandı: Access-Control-Allow-Origin başlığı təyin edilməyib!`);
                                return res;
                            }
                            logger.log(`[HTTP ${statusCode} | CORS: ${res.allowedOrigin}]`, typeof data === 'object' ? JSON.stringify(data) : String(data));
                            return res;
                        }

                        if (statusCode === 204 || data === undefined) {
                            logger.log(`[HTTP ${statusCode}]`);
                        } else {
                            logger.log(`[HTTP ${statusCode}]`, typeof data === 'object' ? JSON.stringify(data) : String(data));
                        }
                        return res;
                    }
                };

                let idx = 0;
                let currentErr = null;
                let nextCalled = false;

                const next = (err) => {
                    if (headersSent) return;
                    if (err) currentErr = err;
                    nextCalled = true;

                    while (idx < this.stack.length) {
                        const layer = this.stack[idx++];
                        if (currentErr) {
                            if (layer.isErrorHandler) {
                                nextCalled = false;
                                try {
                                    layer.fn(currentErr, req, res, next);
                                } catch(e) {
                                    next(e);
                                }
                                return;
                            }
                        } else {
                            if (layer.type === 'middleware' && !layer.isErrorHandler) {
                                if (pathOnly.startsWith(layer.pathPrefix)) {
                                    nextCalled = false;
                                    try {
                                        layer.fn(req, res, next);
                                    } catch(e) {
                                        next(e);
                                    }
                                    return;
                                }
                            } else if (layer.type === 'route') {
                                if (layer.method === req.method) {
                                    const match = pathOnly.match(layer.regex);
                                    if (match) {
                                        layer.paramNames.forEach((name, i) => {
                                            req.params[name] = match[i + 1];
                                        });
                                        nextCalled = false;
                                        try {
                                            layer.handler(req, res, next);
                                        } catch(e) {
                                            next(e);
                                        }
                                        return;
                                    }
                                }
                            }
                        }
                    }

                    if (!headersSent) {
                        if (currentErr) {
                            res.status(currentErr.status || 500).json({
                                ugur: false,
                                xeta: currentErr.message || "Daxili server xətası baş verdi"
                            });
                        } else {
                            res.status(404).json({ xeta: "Marşrut tapılmadı", yol: pathOnly });
                        }
                    }
                };

                next();

                if (!headersSent && !nextCalled && !currentErr && this.stack.length > 0) {
                    logger.log("[Xəta: Sorğu dondu] Middleware zəncirində next() çağırılmadı!");
                }

                return { status: statusCode, body: responseBody };
            }
        }

        const expressFn = function() {
            return new MockExpressApp();
        };

        expressFn.json = function() {
            const parser = (req, res, next) => next();
            parser.isJsonParser = true;
            return parser;
        };

        function cors(options = {}) {
            const middleware = function(req, res, next) {
                const reqOrigin = req.headers['origin'] || req.headers['Origin'];
                const allowedOrigin = options.origin || '*';

                let isAllowed = false;
                if (allowedOrigin === '*') {
                    isAllowed = true;
                } else if (typeof allowedOrigin === 'string' && reqOrigin === allowedOrigin) {
                    isAllowed = true;
                } else if (Array.isArray(allowedOrigin) && allowedOrigin.includes(reqOrigin)) {
                    isAllowed = true;
                }

                if (reqOrigin) {
                    if (isAllowed) {
                        res.corsAllowed = true;
                        res.allowedOrigin = reqOrigin;
                    } else {
                        res.corsBlocked = true;
                    }
                }

                if (req.method === 'OPTIONS') {
                    if (isAllowed) return res.status(204).send('');
                    return res.status(403).json({ xeta: "CORS siyasəti tərəfindən bloklandı" });
                }

                next();
            };
            middleware.isCors = true;
            return middleware;
        }

        const pool = new MockDatabasePool();
        const pg = { Pool: MockDatabasePool };

        return { MockExpressApp, express: expressFn, cors, pool, pg, MockDatabasePool };
    }

function formatConsoleArg(arg, depth = 0, seen = new WeakSet()) {
        if (arg === undefined) return 'undefined';
        if (arg === null) return 'null';

        const type = typeof arg;

        if (type === 'boolean') return String(arg);
        if (type === 'number') {
            if (Object.is(arg, -0)) return '-0';
            if (Number.isNaN(arg)) return 'NaN';
            if (arg === Infinity) return 'Infinity';
            if (arg === -Infinity) return '-Infinity';
            return String(arg);
        }
        if (type === 'bigint') return arg.toString() + 'n';
        if (type === 'symbol') return arg.toString();
        if (type === 'string') {
            return depth === 0 ? arg : JSON.stringify(arg);
        }
        if (type === 'function') {
            if (depth === 0) return arg.toString();
            const fnName = arg.name || 'anonymous';
            return `[Function: ${fnName}]`;
        }

        if (type === 'object') {
            if (arg instanceof Error) {
                return arg.stack ? arg.stack : `${arg.name || 'Error'}: ${arg.message || ''}`;
            }

            if (typeof Map !== 'undefined' && arg instanceof Map) {
                if (seen.has(arg)) return '[Dairəvi Obyekt]';
                seen.add(arg);
                if (depth >= 4) return '[Map]';
                const entries = [];
                for (const [k, v] of arg.entries()) {
                    entries.push(`${formatConsoleArg(k, depth + 1, seen)} => ${formatConsoleArg(v, depth + 1, seen)}`);
                }
                return `Map(${arg.size}) { ${entries.join(', ')} }`;
            }

            if (typeof Set !== 'undefined' && arg instanceof Set) {
                if (seen.has(arg)) return '[Dairəvi Obyekt]';
                seen.add(arg);
                if (depth >= 4) return '[Set]';
                const values = [];
                for (const v of arg.values()) {
                    values.push(formatConsoleArg(v, depth + 1, seen));
                }
                return `Set(${arg.size}) { ${values.join(', ')} }`;
            }

            if (typeof Date !== 'undefined' && arg instanceof Date) {
                return isNaN(arg.getTime()) ? 'Invalid Date' : arg.toISOString();
            }

            if (typeof RegExp !== 'undefined' && arg instanceof RegExp) {
                return arg.toString();
            }

            if (Array.isArray(arg)) {
                if (seen.has(arg)) return '[Dairəvi Obyekt]';
                seen.add(arg);
                if (depth >= 4) return '[Array]';
                if (arg.length === 0) return '[]';
                const indent = '  '.repeat(depth);
                const childIndent = '  '.repeat(depth + 1);
                const maxItems = 100;
                const limit = Math.min(arg.length, maxItems);
                const items = [];
                for (let i = 0; i < limit; i++) {
                    items.push(childIndent + (i in arg ? formatConsoleArg(arg[i], depth + 1, seen) : '<empty>'));
                }
                if (arg.length > maxItems) {
                    items.push(childIndent + `... və daha ${arg.length - maxItems} element`);
                }
                return '[\n' + items.join(',\n') + '\n' + indent + ']';
            }

            if (seen.has(arg)) return '[Dairəvi Obyekt]';
            seen.add(arg);
            if (depth >= 4) return '[Object]';
            const keys = Object.keys(arg);
            if (keys.length === 0) return '{}';
            const indent = '  '.repeat(depth);
            const childIndent = '  '.repeat(depth + 1);
            const maxKeys = 100;
            const limit = Math.min(keys.length, maxKeys);
            const props = [];
            for (let i = 0; i < limit; i++) {
                const k = keys[i];
                const valStr = formatConsoleArg(arg[k], depth + 1, seen);
                props.push(childIndent + JSON.stringify(k) + ': ' + valStr);
            }
            if (keys.length > maxKeys) {
                props.push(childIndent + `... və daha ${keys.length - maxKeys} xassə`);
            }
            return '{\n' + props.join(',\n') + '\n' + indent + '}';
        }

        return String(arg);
    }

    function createSandboxConsole(logs) {
        let groupIndent = '';
        const groupStack = [];
        const countMap = Object.create(null);
        const timeMap = Object.create(null);

        function emit(text) {
            if (groupIndent.length > 0) {
                const indented = String(text).split('\n').map(line => groupIndent + line).join('\n');
                logs.push(indented);
            } else {
                logs.push(String(text));
            }
        }

        function formatLine(args) {
            return args.map(a => formatConsoleArg(a)).join(' ');
        }

        function renderTable(data, properties) {
            if (data === null || data === undefined || (typeof data !== 'object' && typeof data !== 'function')) {
                emit(formatConsoleArg(data));
                return;
            }

            try {
                const isArray = Array.isArray(data);
                const rowKeys = isArray ? data.map((_, i) => String(i)) : Object.keys(data);
                if (rowKeys.length === 0) {
                    emit(formatConsoleArg(data));
                    return;
                }

                let colKeysSet = new Set();
                for (let i = 0; i < rowKeys.length; i++) {
                    const rKey = rowKeys[i];
                    const row = data[rKey];
                    if (row !== null && typeof row === 'object') {
                        const keys = Object.keys(row);
                        for (let j = 0; j < keys.length; j++) {
                            colKeysSet.add(keys[j]);
                        }
                    } else {
                        colKeysSet.add('Values');
                    }
                }

                let colKeys = Array.from(colKeysSet);
                if (Array.isArray(properties) && properties.length > 0) {
                    colKeys = properties.map(String).filter(p => colKeysSet.has(p));
                }

                const headerCol = '(index)';
                const headers = [headerCol, ...colKeys];
                const rows = [];

                for (let i = 0; i < rowKeys.length; i++) {
                    const rKey = rowKeys[i];
                    const row = data[rKey];
                    const rowData = [rKey];
                    for (let j = 0; j < colKeys.length; j++) {
                        const col = colKeys[j];
                        if (row !== null && typeof row === 'object') {
                            rowData.push(col in row ? formatConsoleArg(row[col], 1) : '');
                        } else if (col === 'Values') {
                            rowData.push(formatConsoleArg(row, 1));
                        } else {
                            rowData.push('');
                        }
                    }
                    rows.push(rowData);
                }

                const colWidths = headers.map((h, colIdx) => {
                    let maxW = h.length;
                    for (let i = 0; i < rows.length; i++) {
                        const cellLen = String(rows[i][colIdx] || '').length;
                        if (cellLen > maxW) maxW = cellLen;
                    }
                    return Math.max(maxW, 3);
                });

                function pad(str, len) {
                    str = String(str || '');
                    return str + ' '.repeat(Math.max(0, len - str.length));
                }

                const headerLine = headers.map((h, i) => pad(h, colWidths[i])).join(' | ');
                const sepLine = colWidths.map(w => '-'.repeat(w)).join('-+-');
                const rowLines = rows.map(r => r.map((c, i) => pad(c, colWidths[i])).join(' | '));

                emit([headerLine, sepLine, ...rowLines].join('\n'));
            } catch (e) {
                emit(formatConsoleArg(data));
            }
        }

        return {
            log: function(...args) {
                emit(formatLine(args));
            },
            info: function(...args) {
                emit(formatLine(args));
            },
            warn: function(...args) {
                emit(formatLine(args));
            },
            error: function(...args) {
                emit(formatLine(args));
            },
            debug: function(...args) {
                emit(formatLine(args));
            },
            dir: function(item) {
                emit(formatConsoleArg(item));
            },
            table: function(data, properties) {
                renderTable(data, properties);
            },
            group: function(...args) {
                if (args.length > 0) emit(formatLine(args));
                groupStack.push(groupIndent);
                groupIndent += '  ';
            },
            groupCollapsed: function(...args) {
                if (args.length > 0) emit(formatLine(args));
                groupStack.push(groupIndent);
                groupIndent += '  ';
            },
            groupEnd: function() {
                if (groupStack.length > 0) {
                    groupIndent = groupStack.pop();
                } else {
                    groupIndent = '';
                }
            },
            assert: function(condition, ...args) {
                if (!condition) {
                    if (args.length > 0) {
                        emit('Assertion failed: ' + formatLine(args));
                    } else {
                        emit('Assertion failed');
                    }
                }
            },
            count: function(label = 'default') {
                const key = label === undefined ? 'default' : String(label);
                countMap[key] = (countMap[key] || 0) + 1;
                emit(`${key}: ${countMap[key]}`);
            },
            countReset: function(label = 'default') {
                const key = label === undefined ? 'default' : String(label);
                countMap[key] = 0;
            },
            time: function(label = 'default') {
                const key = label === undefined ? 'default' : String(label);
                timeMap[key] = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
            },
            timeLog: function(label = 'default', ...args) {
                const key = label === undefined ? 'default' : String(label);
                if (timeMap[key] !== undefined) {
                    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
                    const diff = (now - timeMap[key]).toFixed(3);
                    emit(`${key}: ${diff}ms` + (args.length > 0 ? ' ' + formatLine(args) : ''));
                }
            },
            timeEnd: function(label = 'default') {
                const key = label === undefined ? 'default' : String(label);
                if (timeMap[key] !== undefined) {
                    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
                    const diff = (now - timeMap[key]).toFixed(3);
                    emit(`${key}: ${diff}ms`);
                    delete timeMap[key];
                } else {
                    emit(`${key}: 0.000ms`);
                }
            },
            trace: function(...args) {
                const header = 'Trace:' + (args.length > 0 ? ' ' + formatLine(args) : '');
                emit(header + '\n    at eval (<anonymous>)');
            },
            clear: function() {}
        };
    }

    // Fallback birbaşa ana axında (main thread) icra olunduğu üçün sonsuz dövrlər (məsələn, while(true))
    // brauzer tabını dondura bilər. Buna görə aşkar sonsuz dövrlər öncədən statik olaraq yoxlanılır.
    function hasObviousInfiniteLoop(code) {
        if (!code || typeof code !== 'string') return false;
        const stripped = code
            .replace(/\/\*[\s\S]*?\*\//g, ' ')
            .replace(/\/\/[^\r\n]*/g, ' ')
            .replace(/(['"`])(?:\\.|(?!\1)[^\\])*\1/g, '""');
        return (
            /\bwhile\s*\(\s*(true|1|!0)\s*\)/i.test(stripped) ||
            /\bfor\s*\(\s*[^;]*;\s*;\s*[^)]*\)/.test(stripped) ||
            /\bfor\s*\(\s*[^;]*;\s*(true|1|!0)\s*;/i.test(stripped) ||
            /\bdo\s*\{[\s\S]*\}\s*while\s*\(\s*(true|1|!0)\s*\)/i.test(stripped)
        );
    }

    function createWorkerScript() {
        return `
${preprocessModuleCode.toString()}
${MockEvent.toString()}
${MockCustomEvent.toString()}
${MockDOMElement.toString()}
${MockStorage.toString()}
${createMockNavigator.toString()}
${mockRequestAnimationFrame.toString()}
${mockCancelAnimationFrame.toString()}
${createMockFetch.toString()}
${createMockDocument.toString()}
${createMockNodeEnv.toString()}
${createMockExpress.toString()}
${formatConsoleArg.toString()}
${createSandboxConsole.toString()}

// Worker daxilində şəbəkə və xarici skript inyeksiyasının bloklanması
if (typeof self !== 'undefined') {
    self.importScripts = function() {
        throw new Error('[Təhlükəsizlik Sandbox]: Worker mühitində importScripts istifadəsinə icazə verilmir!');
    };
    self.XMLHttpRequest = undefined;
    self.WebSocket = undefined;
}

let __uncaughtError = null;

function __handleUncaught(err) {
    if (!__uncaughtError) {
        if (err && err.reason) {
            const r = err.reason;
            __uncaughtError = (r && r.name && r.message) ? (r.name + ': ' + r.message) : String(r);
        } else if (err && err.message) {
            __uncaughtError = (err.name ? err.name + ': ' : '') + err.message;
        } else {
            __uncaughtError = String(err);
        }
    }
}

if (typeof self !== 'undefined') {
    if (typeof self.addEventListener === 'function') {
        self.addEventListener('unhandledrejection', function(event) {
            __handleUncaught(event.reason || event);
            if (typeof event.preventDefault === 'function') event.preventDefault();
        });
    }
    self.onerror = function(message, source, lineno, colno, error) {
        __handleUncaught(error || message);
        return true;
    };
}

self.onmessage = async function(e) {
    const code = preprocessModuleCode(e.data.code);
    const logs = [];
    __uncaughtError = null;

    const mockConsole = createSandboxConsole(logs);

    const realSetTimeout = typeof setTimeout !== 'undefined' ? setTimeout.bind(null) : null;
    const realClearTimeout = typeof clearTimeout !== 'undefined' ? clearTimeout.bind(null) : null;
    const realSetInterval = typeof setInterval !== 'undefined' ? setInterval.bind(null) : null;
    const realClearInterval = typeof clearInterval !== 'undefined' ? clearInterval.bind(null) : null;
    const realQueueMicrotask = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(null) : (cb => realSetTimeout(cb, 0));

    const activeTimers = new Set();
    const activeIntervals = new Set();
    let pendingMicrotasks = 0;

    function wrappedSetTimeout(callback, delay, ...args) {
        const d = Math.max(0, Number(delay) || 0);
        let id;
        const wrappedCb = (...cbArgs) => {
            activeTimers.delete(id);
            try {
                if (typeof callback === 'function') {
                    callback(...cbArgs);
                } else if (typeof callback === 'string') {
                    (new Function(callback))();
                }
            } catch (err) {
                __handleUncaught(err);
            }
        };
        id = realSetTimeout(wrappedCb, d, ...args);
        activeTimers.add(id);
        return id;
    }

    function wrappedClearTimeout(id) {
        activeTimers.delete(id);
        realClearTimeout(id);
    }

    function wrappedSetInterval(callback, delay, ...args) {
        const d = Math.max(0, Number(delay) || 0);
        let id;
        const wrappedCb = (...cbArgs) => {
            try {
                if (typeof callback === 'function') {
                    callback(...cbArgs);
                } else if (typeof callback === 'string') {
                    (new Function(callback))();
                }
            } catch (err) {
                __handleUncaught(err);
            }
        };
        id = realSetInterval(wrappedCb, d, ...args);
        activeIntervals.add(id);
        return id;
    }

    function wrappedClearInterval(id) {
        activeIntervals.delete(id);
        realClearInterval(id);
    }

    function wrappedQueueMicrotask(callback) {
        pendingMicrotasks++;
        realQueueMicrotask(() => {
            try {
                if (typeof callback === 'function') {
                    callback();
                }
            } catch (err) {
                __handleUncaught(err);
            } finally {
                pendingMicrotasks--;
            }
        });
    }

    let syncError = null;

    try {
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const mockDoc = createMockDocument();
        const mockLocalStorage = new MockStorage();
        const mockSessionStorage = new MockStorage();
        const mockNav = createMockNavigator();
        const mockFetch = createMockFetch();
        const { mockProcess, mockPath, mockOs, mockFs, mockDirname, mockFilename, mockGlobal, mockRequire, EventEmitter, bcrypt, jwt, http, AppError } = createMockNodeEnv(mockConsole);
        const { express, cors, pool, pg } = createMockExpress(mockConsole);
        mockGlobal.express = express;
        mockGlobal.cors = cors;
        mockGlobal.pool = pool;
        mockGlobal.pg = pg;
        mockGlobal.require = mockRequire;
        mockGlobal.EventEmitter = EventEmitter;
        mockGlobal.bcrypt = bcrypt;
        mockGlobal.jwt = jwt;
        mockGlobal.http = http;
        mockGlobal.AppError = AppError;
        const mockModule = { exports: {} };
        const mockExports = mockModule.exports;
        mockGlobal.module = mockModule;
        mockGlobal.exports = mockExports;
        const mockWin = {
            document: mockDoc,
            localStorage: mockLocalStorage,
            sessionStorage: mockSessionStorage,
            navigator: mockNav,
            requestAnimationFrame: mockRequestAnimationFrame,
            cancelAnimationFrame: mockCancelAnimationFrame,
            Event: MockEvent,
            CustomEvent: MockCustomEvent,
            fetch: mockFetch,
            express: express,
            cors: cors,
            pool: pool,
            pg: pg,
            require: mockRequire,
            EventEmitter: EventEmitter,
            bcrypt: bcrypt,
            jwt: jwt,
            http: http,
            AppError: AppError,
            module: mockModule,
            exports: mockExports,
            setTimeout: wrappedSetTimeout,
            clearTimeout: wrappedClearTimeout,
            setInterval: wrappedSetInterval,
            clearInterval: wrappedClearInterval,
            queueMicrotask: wrappedQueueMicrotask
        };
        const fn = new AsyncFunction(
            'console', 'document', 'window', 'globalThis', 'self', 'top', 'parent', 'frames',
            'Event', 'CustomEvent',
            'localStorage', 'sessionStorage', 'navigator',
            'requestAnimationFrame', 'cancelAnimationFrame', 'fetch',
            'process', 'path', 'os', 'fs', '__dirname', '__filename', 'global', 'express',
            'cors', 'pool', 'pg', 'require', 'EventEmitter', 'bcrypt', 'jwt', 'http', 'AppError',
            'module', 'exports',
            'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'queueMicrotask',
            'XMLHttpRequest', 'WebSocket',
            '"use strict";\n' + code
        );
        await fn(
            mockConsole, mockDoc, mockWin, mockWin, mockWin, mockWin, mockWin, mockWin,
            MockEvent, MockCustomEvent,
            mockLocalStorage, mockSessionStorage, mockNav,
            mockRequestAnimationFrame, mockCancelAnimationFrame, mockFetch,
            mockProcess, mockPath, mockOs, mockFs, mockDirname, mockFilename, mockGlobal, express,
            cors, pool, pg, mockRequire, EventEmitter, bcrypt, jwt, http, AppError,
            mockModule, mockExports,
            wrappedSetTimeout, wrappedClearTimeout, wrappedSetInterval, wrappedClearInterval, wrappedQueueMicrotask,
            undefined, undefined
        );
    } catch(err) {
        if (err && err.name && err.message) {
            syncError = err.name + ': ' + err.message;
        } else {
            syncError = String(err);
        }
    }

    const timeoutMs = (e.data && e.data.timeoutMs) || 2400;
    const deadline = Date.now() + timeoutMs;

    if (!syncError) {
        await new Promise(r => realSetTimeout(r, 0));
        while ((activeTimers.size > 0 || activeIntervals.size > 0 || pendingMicrotasks > 0) && Date.now() < deadline && !__uncaughtError) {
            await new Promise(r => realSetTimeout(r, 10));
        }
    }

    for (const id of activeIntervals) realClearInterval(id);
    for (const id of activeTimers) realClearTimeout(id);

    const finalError = syncError || __uncaughtError || null;

    self.postMessage({
        success: !finalError,
        output: logs.join('\\n'),
        error: finalError
    });
};
`;
    }

    async function runJavaScriptDirect(code, timeoutMs = 2500) {
        // Fallback birbaşa ana axında (main thread) icra olunduğu üçün sonsuz dövrlər (məsələn, while(true))
        // brauzer tabını dondura bilər. Buna görə aşkar sonsuz dövrlər öncədən statik olaraq yoxlanılır.
        if (hasObviousInfiniteLoop(code)) {
            return {
                output: '',
                error: 'İcra vaxt limiti (2.5s) aşdı! Kodunuzda sonsuz dövr (məsələn, while(true)) və ya asılı qalmış asinxron əməliyyat aşkar edildi.'
            };
        }

        const logs = [];
        let uncaughtError = null;
        const mockConsole = createSandboxConsole(logs);

        let timerId = null;
        const timeoutPromise = new Promise((_, reject) => {
            timerId = setTimeout(() => {
                reject(new Error('İcra vaxt limiti (2.5s) aşdı! Kodunuzda sonsuz dövr (məsələn, while(true)) və ya asılı qalmış asinxron əməliyyat aşkar edildi.'));
            }, timeoutMs);
        });

        const activeTimers = new Set();
        const activeIntervals = new Set();
        let pendingMicrotasks = 0;

        function wrappedSetTimeout(callback, delay, ...args) {
            const d = Math.max(0, Number(delay) || 0);
            let id;
            const wrappedCb = (...cbArgs) => {
                activeTimers.delete(id);
                try {
                    if (typeof callback === 'function') callback(...cbArgs);
                    else if (typeof callback === 'string') (new Function(callback))();
                } catch (err) {
                    if (!uncaughtError) {
                        uncaughtError = (err && err.name && err.message) ? (err.name + ': ' + err.message) : String(err);
                    }
                }
            };
            id = setTimeout(wrappedCb, d, ...args);
            activeTimers.add(id);
            return id;
        }

        function wrappedClearTimeout(id) {
            activeTimers.delete(id);
            clearTimeout(id);
        }

        function wrappedSetInterval(callback, delay, ...args) {
            const d = Math.max(0, Number(delay) || 0);
            let id;
            const wrappedCb = (...cbArgs) => {
                try {
                    if (typeof callback === 'function') callback(...cbArgs);
                    else if (typeof callback === 'string') (new Function(callback))();
                } catch (err) {
                    if (!uncaughtError) {
                        uncaughtError = (err && err.name && err.message) ? (err.name + ': ' + err.message) : String(err);
                    }
                }
            };
            id = setInterval(wrappedCb, d, ...args);
            activeIntervals.add(id);
            return id;
        }

        function wrappedClearInterval(id) {
            activeIntervals.delete(id);
            clearInterval(id);
        }

        function wrappedQueueMicrotask(callback) {
            pendingMicrotasks++;
            const runMicrotask = (typeof window !== 'undefined' && typeof window.queueMicrotask === 'function')
                ? window.queueMicrotask.bind(window)
                : ((typeof global !== 'undefined' && typeof global.queueMicrotask === 'function') ? global.queueMicrotask.bind(global) : (cb => setTimeout(cb, 0)));
            runMicrotask(() => {
                try {
                    if (typeof callback === 'function') callback();
                } catch (err) {
                    if (!uncaughtError) {
                        uncaughtError = (err && err.name && err.message) ? (err.name + ': ' + err.message) : String(err);
                    }
                } finally {
                    pendingMicrotasks--;
                }
            });
        }

        try {
            const executionPromise = (async () => {
                const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
                const mockDoc = createMockDocument();
                const mockLocalStorage = new MockStorage();
                const mockSessionStorage = new MockStorage();
                const mockNav = createMockNavigator();
                const mockFetch = createMockFetch();
                const { mockProcess, mockPath, mockOs, mockFs, mockDirname, mockFilename, mockGlobal, mockRequire, EventEmitter, bcrypt, jwt, http, AppError } = createMockNodeEnv(mockConsole);
                const { express, cors, pool, pg } = createMockExpress(mockConsole);
                mockGlobal.express = express;
                mockGlobal.cors = cors;
                mockGlobal.pool = pool;
                mockGlobal.pg = pg;
                mockGlobal.require = mockRequire;
                mockGlobal.EventEmitter = EventEmitter;
                mockGlobal.bcrypt = bcrypt;
                mockGlobal.jwt = jwt;
                mockGlobal.http = http;
                mockGlobal.AppError = AppError;
                const mockModule = { exports: {} };
                const mockExports = mockModule.exports;
                mockGlobal.module = mockModule;
                mockGlobal.exports = mockExports;
                const mockWin = {
                    document: mockDoc,
                    localStorage: mockLocalStorage,
                    sessionStorage: mockSessionStorage,
                    navigator: mockNav,
                    requestAnimationFrame: mockRequestAnimationFrame,
                    cancelAnimationFrame: mockCancelAnimationFrame,
                    Event: typeof Event !== 'undefined' ? Event : MockEvent,
                    CustomEvent: typeof CustomEvent !== 'undefined' ? CustomEvent : MockCustomEvent,
                    fetch: mockFetch,
                    express: express,
                    cors: cors,
                    pool: pool,
                    pg: pg,
                    require: mockRequire,
                    EventEmitter: EventEmitter,
                    bcrypt: bcrypt,
                    jwt: jwt,
                    http: http,
                    AppError: AppError,
                    module: mockModule,
                    exports: mockExports,
                    setTimeout: wrappedSetTimeout,
                    clearTimeout: wrappedClearTimeout,
                    setInterval: wrappedSetInterval,
                    clearInterval: wrappedClearInterval,
                    queueMicrotask: wrappedQueueMicrotask
                };
                // Sandbox Təhlükəsizlik Zirehi: globalThis, self, top, parent, frames qlobal obyektlərini kölgələmək
                const fn = new AsyncFunction(
                    'console', 'document', 'window', 'globalThis', 'self', 'top', 'parent', 'frames',
                    'Event', 'CustomEvent',
                    'localStorage', 'sessionStorage', 'navigator',
                    'requestAnimationFrame', 'cancelAnimationFrame', 'fetch',
                    'process', 'path', 'os', 'fs', '__dirname', '__filename', 'global', 'express',
                    'cors', 'pool', 'pg', 'require', 'EventEmitter', 'bcrypt', 'jwt', 'http', 'AppError',
                    'module', 'exports',
                    'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'queueMicrotask',
                    'XMLHttpRequest', 'WebSocket',
                    '"use strict";\n' + preprocessModuleCode(code)
                );
                await fn(
                    mockConsole, mockDoc, mockWin, mockWin, mockWin, mockWin, mockWin, mockWin,
                    typeof Event !== 'undefined' ? Event : MockEvent,
                    typeof CustomEvent !== 'undefined' ? CustomEvent : MockCustomEvent,
                    mockLocalStorage, mockSessionStorage, mockNav,
                    mockRequestAnimationFrame, mockCancelAnimationFrame, mockFetch,
                    mockProcess, mockPath, mockOs, mockFs, mockDirname, mockFilename, mockGlobal, express,
                    cors, pool, pg, mockRequire, EventEmitter, bcrypt, jwt, http, AppError,
                    mockModule, mockExports,
                    wrappedSetTimeout, wrappedClearTimeout, wrappedSetInterval, wrappedClearInterval, wrappedQueueMicrotask,
                    undefined, undefined
                );

                const deadline = Date.now() + Math.max(100, timeoutMs - 100);
                await new Promise(r => setTimeout(r, 0));
                while ((activeTimers.size > 0 || activeIntervals.size > 0 || pendingMicrotasks > 0) && Date.now() < deadline && !uncaughtError) {
                    await new Promise(r => setTimeout(r, 10));
                }

                for (const id of activeIntervals) clearInterval(id);
                for (const id of activeTimers) clearTimeout(id);
            })();

            await Promise.race([executionPromise, timeoutPromise]);

            return {
                output: logs.join('\n'),
                error: uncaughtError || null
            };
        } catch (err) {
            return {
                output: logs.join('\n'),
                error: err && err.name ? `${err.name}: ${err.message}` : String(err)
            };
        } finally {
            if (timerId) clearTimeout(timerId);
            for (const id of activeIntervals) clearInterval(id);
            for (const id of activeTimers) clearTimeout(id);
        }
    }

    function runJavaScript(code, timeoutMs = 2500) {
        return new Promise((resolve) => {
            let worker = null;
            let timer = null;
            let blobUrl = null;
            let settled = false;

            const cleanup = () => {
                if (safetyTimer) clearTimeout(safetyTimer);
                if (timer) clearTimeout(timer);
                if (worker) {
                    try { worker.terminate(); } catch(e) {}
                    worker = null;
                }
                if (blobUrl) {
                    try { URL.revokeObjectURL(blobUrl); } catch(e) {}
                    blobUrl = null;
                }
            };

            const safeResolve = (val) => {
                if (settled) return;
                settled = true;
                if (safetyTimer) clearTimeout(safetyTimer);
                cleanup();
                resolve(val || { output: '', error: null });
            };

            const safetyTimer = setTimeout(() => {
                safeResolve({
                    output: '',
                    error: 'İcra vaxt limiti (2.5s) aşdı! Kodunuzda sonsuz dövr (məsələn, while(true)) və ya asılı qalmış asinxron əməliyyat aşkar edildi.'
                });
            }, timeoutMs + 100);

            try {
                if (typeof Worker === 'undefined' || typeof Blob === 'undefined' || typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function') {
                    if (safetyTimer) clearTimeout(safetyTimer);
                    runJavaScriptDirect(code, timeoutMs)
                        .then(safeResolve)
                        .catch(err => safeResolve({ output: '', error: String(err) }));
                    return;
                }

                const blob = new Blob([createWorkerScript()], { type: 'application/javascript' });
                blobUrl = URL.createObjectURL(blob);
                worker = new Worker(blobUrl);

                timer = setTimeout(() => {
                    safeResolve({
                        output: '',
                        error: 'İcra vaxt limiti (2.5s) aşdı! Kodunuzda sonsuz dövr (məsələn, while(true)) və ya asılı qalmış asinxron əməliyyat aşkar edildi.'
                    });
                }, timeoutMs);

                worker.onmessage = function(e) {
                    if (safetyTimer) clearTimeout(safetyTimer);
                    safeResolve({
                        output: (e.data && e.data.output) || '',
                        error: (e.data && e.data.error) || null
                    });
                };

                worker.onerror = function(errEvent) {
                    if (safetyTimer) clearTimeout(safetyTimer);
                    const msg = (errEvent && errEvent.message) ? errEvent.message : 'JavaScript sintaksis və ya icra xətası baş verdi.';
                    safeResolve({
                        output: '',
                        error: msg.replace(/^Uncaught\s+/, '')
                    });
                };

                worker.postMessage({ code, timeoutMs });

            } catch (workerInitErr) {
                // Fallback for environments where Web Workers on Blob URLs might be restricted (e.g. local file:// protocol)
                if (safetyTimer) clearTimeout(safetyTimer);
                runJavaScriptDirect(code, timeoutMs)
                    .then(safeResolve)
                    .catch(err => safeResolve({ output: '', error: String(err) }));
            }
        });
    }

    // ---- Sandbox ----
    function initSandboxEditor() {
        if (state.sandboxEditor) {
            state.sandboxEditor.refresh();
            return;
        }

        const editorEl = document.getElementById('sandbox-editor');
        if (!editorEl) return;

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        state.sandboxEditor = CodeMirror(editorEl, {
            value: '// JavaScript (ES6+) kodunuzu buraya yazın\n// Ctrl+Enter ilə icra edin\n\nconsole.log("Salam, JavaScript!");\n',
            mode: 'javascript',
            theme: isDark ? 'dracula' : 'default',
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            indentUnit: 2,
            tabSize: 2,
            indentWithTabs: false,
            lineWrapping: true,
            viewportMargin: Infinity,
            extraKeys: {
                'Ctrl-Enter': () => runPlayground(),
                'Cmd-Enter': () => runPlayground(),
                'Tab': (cm) => cm.replaceSelection('  ', 'end'),
            }
        });
        registerCodeMirrorForMobileToolbar(state.sandboxEditor);
    }

    async function runPlayground() {
        const runBtn = document.getElementById('sandbox-run');
        if (runBtn) {
            runBtn.disabled = true;
            runBtn.classList.add('pulse');
        }

        const output = document.getElementById('sandbox-output');
        if (!state.sandboxEditor) {
            if (runBtn) runBtn.disabled = false;
            return;
        }
        const code = state.sandboxEditor.getValue();

        output.innerHTML = '<span class="running-indicator"><span class="running-dots"><span></span><span></span><span></span></span> İcra olunur...</span>';

        try {
            const result = await runJavaScript(code);
            if (result && result.error) {
                output.innerHTML = `<span class="output-error">${escapeHtml(result.error)}</span>`;
            } else {
                output.textContent = (result && result.output) || '(Nəticə yoxdur)';
            }
        } catch (fatalErr) {
            output.innerHTML = `<span class="output-error">${escapeHtml(fatalErr.message || String(fatalErr))}</span>`;
        } finally {
            if (runBtn) {
                runBtn.disabled = false;
                runBtn.classList.remove('pulse');
            }
            if (output && output.innerHTML.includes('running-indicator')) {
                output.innerHTML = `<span class="output-error">İcra vaxtı bitdi və ya cavab alına bilmədi.</span>`;
            }
        }
    }
    const runSandbox = runPlayground;

    // ---- Tab Management ----
    function setActiveTab(tabName) {
        state.currentTab = tabName;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tabName}-panel`);
        });

        // Refresh and guarantee proper code injection when switching tabs
        if (tabName === 'bugfix') {
            requestAnimationFrame(() => {
                if (state.currentTopicId) {
                    const result = getTopicById(state.currentTopicId);
                    if (result && result.topic) {
                        const topic = result.topic;
                        const bugList = (topic.bugFixes && Array.isArray(topic.bugFixes) && topic.bugFixes.length > 0)
                            ? topic.bugFixes
                            : (topic.bugFix ? [topic.bugFix] : []);

                        bugList.forEach((bugfix, idx) => {
                            const bfId = bugfix.id || `${topic.id}-bug-${idx}`;
                            const cm = state.editors[`bf-${bfId}`];
                            if (cm) {
                                const currentVal = cm.getValue();
                                const isCorrupted = !currentVal || 
                                    currentVal.trim() === '' || 
                                    currentVal.trim() === '// Kodunuzu buraya yazın' ||
                                    currentVal.trim() === '// Kodunuzu buraya yazın\n';
                                if (isCorrupted && bugfix.buggyCode) {
                                    cm.setValue(bugfix.buggyCode);
                                    delete state.userDrafts[`bf-${bfId}`];
                                }
                                cm.refresh();
                            }
                        });
                    }
                }
                Object.values(state.editors).forEach(editor => {
                    if (editor && editor.refresh) editor.refresh();
                });
            });
        } else if (tabName === 'exercises') {
            requestAnimationFrame(() => {
                Object.values(state.editors).forEach(editor => {
                    if (editor && editor.refresh) editor.refresh();
                });
            });
        }
    }

    // ---- Difficulty Badge Helper ----
    function getDiffBadgeHtml(diff) {
        const slugMap = {
            'Asan': 'asan',
            'Orta-asan': 'orta-asan',
            'Orta-çətin': 'orta-cetin',
            'Çətin': 'cetin'
        };
        const icons = {
            'Asan': '🟢',
            'Orta-asan': '🔵',
            'Orta-çətin': '🟡',
            'Çətin': '🔴'
        };
        const slug = slugMap[diff] || 'asan';
        const icon = icons[diff] || '📌';
        return `<span class="diff-badge diff-${slug}">${icon} ${diff}</span>`;
    }

    // ---- Panel Filter Dropdowns Init ----
    let panelFiltersInitialized = false;
    function initPanelFilters() {
        if (panelFiltersInitialized) return;
        panelFiltersInitialized = true;

        if (typeof TASKS_PANEL_DATA !== 'undefined') {
            const taskSelect = document.getElementById('tasks-section-filter');
            if (taskSelect && taskSelect.options.length <= 1) {
                TASKS_PANEL_DATA.forEach(sec => {
                    const opt = document.createElement('option');
                    opt.value = sec.sectionId;
                    opt.textContent = `${sec.icon} ${sec.sectionTitle}`;
                    taskSelect.appendChild(opt);
                });
            }
            if (state.tasksFilter.section !== 'all' && !TASKS_PANEL_DATA.some(s => s.sectionId === state.tasksFilter.section)) {
                state.tasksFilter.section = 'all';
                if (taskSelect) taskSelect.value = 'all';
            }
        }

        if (typeof ERRORS_PANEL_DATA !== 'undefined') {
            const errSelect = document.getElementById('errors-section-filter');
            if (errSelect && errSelect.options.length <= 1) {
                ERRORS_PANEL_DATA.forEach(sec => {
                    const opt = document.createElement('option');
                    opt.value = sec.sectionId;
                    opt.textContent = `${sec.icon} ${sec.sectionTitle}`;
                    errSelect.appendChild(opt);
                });
            }
            if (state.errorsFilter.section !== 'all' && !ERRORS_PANEL_DATA.some(s => s.sectionId === state.errorsFilter.section)) {
                state.errorsFilter.section = 'all';
                if (errSelect) errSelect.value = 'all';
            }
        }
    }

    // ---- Render Tasks Panel ----
    function renderTasksPanel() {
        initPanelFilters();
        const container = document.getElementById('tasks-items-container');
        if (!container || typeof TASKS_PANEL_DATA === 'undefined') return;

        // Clean up previously registered panel editors for tasks
        TASKS_PANEL_DATA.forEach(s => s.tasks.forEach(t => {
            delete state.panelEditors[t.id];
        }));

        let totalTasksCount = 0;
        const validTaskIds = new Set();
        TASKS_PANEL_DATA.forEach(s => {
            totalTasksCount += s.tasks.length;
            s.tasks.forEach(t => validTaskIds.add(t.id));
        });
        const completedTasksCount = [...state.completedPanelTasks].filter(id => validTaskIds.has(id)).length;
        const statsEl = document.getElementById('tasks-panel-stats');
        if (statsEl) {
            statsEl.textContent = `${completedTasksCount}/${totalTasksCount} Tamamlandı`;
        }

        container.innerHTML = '';
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        const filterSec = state.tasksFilter.section;
        const filterDiff = state.tasksFilter.diff;
        const searchQ = (state.tasksFilter.search || '').toLowerCase().trim();

        TASKS_PANEL_DATA.forEach(section => {
            if (filterSec !== 'all' && section.sectionId !== filterSec) return;

            const matchingTasks = section.tasks.filter(t => {
                if (filterDiff !== 'all' && t.difficulty !== filterDiff) return false;
                if (searchQ) {
                    const matchTitle = (t.title || '').toLowerCase().includes(searchQ);
                    const matchInst = (t.instruction || '').toLowerCase().includes(searchQ);
                    return matchTitle || matchInst;
                }
                return true;
            });

            if (matchingTasks.length === 0) return;

            const group = document.createElement('div');
            group.className = 'panel-section-group';

            const header = document.createElement('div');
            header.className = 'panel-section-header';
            header.innerHTML = `
                <span>${section.icon} ${section.sectionTitle}</span>
                <span class="section-count">${matchingTasks.length} tapşırıq</span>
            `;

            const itemsWrap = document.createElement('div');
            itemsWrap.className = 'panel-section-items';

            matchingTasks.forEach(task => {
                const isCompleted = state.completedPanelTasks.has(task.id);
                const card = document.createElement('div');
                card.className = `panel-card${isCompleted ? ' completed' : ''}`;
                card.id = `card-${task.id}`;

                card.innerHTML = `
                    <div class="panel-card-header">
                        <div class="panel-card-title">
                            <span class="task-status-icon">${isCompleted ? '✅' : '📝'}</span>
                            <span>${task.title}</span>
                        </div>
                        <div class="panel-card-meta">
                            ${getDiffBadgeHtml(task.difficulty)}
                        </div>
                    </div>
                    <div class="panel-card-instruction">${task.instruction}</div>
                    <div class="panel-card-editor-box">
                        <div id="editor-${task.id}" class="panel-code-editor"></div>
                    </div>
                    <div class="panel-card-actions">
                        <button class="exercise-hint-btn" data-id="${task.id}">💡 İpucu</button>
                        <button class="exercise-submit-btn" data-id="${task.id}">▶ Yoxla</button>
                    </div>
                    <div class="hint-text" id="hint-${task.id}">${task.hint || ''}</div>
                    <div class="panel-card-result" id="result-${task.id}"></div>
                `;

                itemsWrap.appendChild(card);

                // CodeMirror init
                requestAnimationFrame(() => {
                    const editorEl = document.getElementById(`editor-${task.id}`);
                    if (editorEl) {
                        editorEl.innerHTML = '';
                        const initialValue = state.userDrafts[task.id] !== undefined
                            ? state.userDrafts[task.id]
                            : (task.starterCode || '// JavaScript kodunuzu buraya yazın\n');

                        const cm = CodeMirror(editorEl, {
                            value: initialValue,
                            mode: 'javascript',
                            theme: isDark ? 'dracula' : 'default',
                            lineNumbers: true,
                            matchBrackets: true,
                            autoCloseBrackets: true,
                            indentUnit: 2,
                            tabSize: 2,
                            indentWithTabs: false,
                            lineWrapping: true,
                            viewportMargin: Infinity,
                            extraKeys: {
                                'Ctrl-Enter': () => submitPanelTask(task.id, task, cm),
                                'Tab': (cm) => cm.replaceSelection('  ', 'end')
                            }
                        });

                        cm.on('change', () => {
                            state.userDrafts[task.id] = cm.getValue();
                            debouncedSaveProgress();
                        });

                        state.panelEditors[task.id] = cm;
                        registerCodeMirrorForMobileToolbar(cm);
                        setTimeout(() => cm.refresh(), 50);
                    }
                });

                // Hint button
                card.querySelector('.exercise-hint-btn').addEventListener('click', () => {
                    const hintEl = document.getElementById(`hint-${task.id}`);
                    hintEl.classList.toggle('show');
                });

                // Submit button
                card.querySelector('.exercise-submit-btn').addEventListener('click', () => {
                    const cm = state.panelEditors[task.id];
                    if (cm) submitPanelTask(task.id, task, cm);
                });
            });

            group.appendChild(header);
            group.appendChild(itemsWrap);
            container.appendChild(group);
        });

        if (container.children.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:3rem; color:var(--text-secondary);">Axtarışa uyğun tapşırıq tapılmadı.</div>';
        }

        state.tasksPanelRendered = true;
    }

    // ---- Errors Panel Observer & Lazy CodeMirror Mounting ----
    let errorEditorObserver = null;
    let errorBugsMap = null;

    function getErrorBugById(bugId) {
        if (!errorBugsMap && typeof ERRORS_PANEL_DATA !== 'undefined') {
            errorBugsMap = new Map();
            ERRORS_PANEL_DATA.forEach(sec => {
                sec.bugs.forEach(b => errorBugsMap.set(b.id, b));
            });
        }
        return errorBugsMap ? errorBugsMap.get(bugId) : null;
    }

    function initErrorEditorObserver() {
        if (errorEditorObserver) {
            errorEditorObserver.disconnect();
            errorEditorObserver = null;
        }
        if (typeof IntersectionObserver === 'undefined') return;

        errorEditorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const placeholder = entry.target;
                    const bugId = placeholder.dataset.bugId;
                    if (bugId) {
                        errorEditorObserver.unobserve(placeholder);
                        const bug = getErrorBugById(bugId);
                        if (bug) {
                            mountLazyEditor(bugId, bug);
                        }
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '150px 0px',
            threshold: 0.01
        });
    }

    function observeSectionPlaceholders(group) {
        if (!errorEditorObserver || !group) return;
        const placeholders = group.querySelectorAll('.panel-code-placeholder');
        placeholders.forEach(ph => {
            const bugId = ph.dataset.bugId;
            if (bugId && !state.panelEditors[bugId]) {
                errorEditorObserver.observe(ph);
            }
        });
    }

    function observeExpandedSections() {
        const container = document.getElementById('errors-items-container');
        if (!container) return;
        const expandedGroups = container.querySelectorAll('.panel-section-group:not(.collapsed)');
        expandedGroups.forEach(group => {
            if (group.style.display !== 'none') {
                observeSectionPlaceholders(group);
            }
        });
    }

    function mountLazyEditor(bugId, bug) {
        if (state.panelEditors[bugId]) {
            return state.panelEditors[bugId];
        }
        const editorEl = document.getElementById(`editor-${bugId}`);
        if (!editorEl) return null;

        const placeholder = editorEl.querySelector('.panel-code-placeholder');
        if (placeholder && errorEditorObserver) {
            errorEditorObserver.unobserve(placeholder);
        }

        editorEl.innerHTML = '';
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const initialValue = state.userDrafts[bugId] !== undefined
            ? state.userDrafts[bugId]
            : (bug.buggyCode || '');

        const cm = CodeMirror(editorEl, {
            value: initialValue,
            mode: 'javascript',
            theme: isDark ? 'dracula' : 'default',
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            indentUnit: 2,
            tabSize: 2,
            indentWithTabs: false,
            lineWrapping: true,
            viewportMargin: Infinity,
            extraKeys: {
                'Ctrl-Enter': () => submitPanelError(bugId, bug, cm),
                'Cmd-Enter': () => submitPanelError(bugId, bug, cm),
                'Tab': (cmInstance) => cmInstance.replaceSelection('  ', 'end')
            }
        });

        cm.on('change', () => {
            state.userDrafts[bugId] = cm.getValue();
            debouncedSaveProgress();
        });

        state.panelEditors[bugId] = cm;
        registerCodeMirrorForMobileToolbar(cm);
        requestAnimationFrame(() => {
            cm.refresh();
        });
        return cm;
    }

    // ---- Render Errors Panel ----
    function renderErrorsPanel() {
        initPanelFilters();
        const container = document.getElementById('errors-items-container');
        if (!container || typeof ERRORS_PANEL_DATA === 'undefined') return;

        // Clean up previously registered panel editors for bugs
        ERRORS_PANEL_DATA.forEach(s => s.bugs.forEach(b => {
            delete state.panelEditors[b.id];
        }));

        initErrorEditorObserver();
        updateErrorsPanelStats();

        const fragment = document.createDocumentFragment();
        let isFirstSection = true;

        ERRORS_PANEL_DATA.forEach(section => {
            const group = document.createElement('div');
            group.className = 'panel-section-group' + (isFirstSection ? '' : ' collapsed');
            group.dataset.sectionId = section.sectionId;

            const header = document.createElement('div');
            header.className = 'panel-section-header';
            header.dataset.section = section.sectionId;
            header.innerHTML = `
                <div class="header-left">
                    <span class="accordion-chevron">▼</span>
                    <span>${section.icon} ${section.sectionTitle}</span>
                </div>
                <span class="section-count">${section.bugs.length} xəta sınağı</span>
            `;

            // Accordion toggle on header click
            header.addEventListener('click', () => {
                const isNowCollapsed = group.classList.toggle('collapsed');
                if (!isNowCollapsed) {
                    observeSectionPlaceholders(group);
                }
            });

            const itemsWrap = document.createElement('div');
            itemsWrap.className = 'panel-section-items';

            section.bugs.forEach(bug => {
                const isCompleted = state.completedPanelErrors.has(bug.id);
                const draftCode = state.userDrafts[bug.id] !== undefined
                    ? state.userDrafts[bug.id]
                    : (bug.buggyCode || '');

                const card = document.createElement('div');
                card.className = `panel-card${isCompleted ? ' completed' : ''}`;
                card.id = `card-${bug.id}`;
                card.dataset.bugId = bug.id;
                card.dataset.difficulty = bug.difficulty;

                card.innerHTML = `
                    <div class="panel-card-header">
                        <div class="panel-card-title">
                            <span class="task-status-icon">${isCompleted ? '✅' : '🐛'}</span>
                            <span>${escapeHtml(bug.title)}</span>
                        </div>
                        <div class="panel-card-meta">
                            ${getDiffBadgeHtml(bug.difficulty)}
                        </div>
                    </div>
                    <div class="panel-card-instruction">${bug.instruction}</div>
                    <div class="panel-card-editor-box">
                        <div id="editor-${bug.id}" class="panel-code-editor" data-bug-id="${bug.id}">
                            <div class="panel-code-placeholder" data-bug-id="${bug.id}" title="Redaktoru aktivləşdirmək üçün klikləyin">
                                <div class="placeholder-top-bar">
                                    <span class="placeholder-tag">JavaScript ES2026</span>
                                    <span class="placeholder-badge">⚡ Redaktoru yüklə</span>
                                </div>
                                <pre class="placeholder-code"><code>${escapeHtml(draftCode)}</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="panel-card-actions">
                        <button class="exercise-hint-btn" data-id="${bug.id}">💡 İpucu</button>
                        <button class="exercise-submit-btn" data-id="${bug.id}">▶ Yoxla</button>
                    </div>
                    <div class="panel-card-result" id="result-${bug.id}"></div>
                `;

                // Placeholder click -> instantly mount & focus
                const placeholder = card.querySelector('.panel-code-placeholder');
                if (placeholder) {
                    placeholder.addEventListener('click', () => {
                        const cm = mountLazyEditor(bug.id, bug);
                        if (cm) cm.focus();
                    });
                }

                // Hint button
                card.querySelector('.exercise-hint-btn').addEventListener('click', () => {
                    const resultEl = document.getElementById(`result-${bug.id}`);
                    if (!resultEl) return;
                    const hintText = bug.hint || bug.explanation || 'Kodu diqqətlə nəzərdən keçirin və sintaksisi yoxlayın.';
                    resultEl.innerHTML = `<div class="bugfix-explanation">💡 <strong>İpucu:</strong> ${escapeHtml(hintText)}</div>`;
                    resultEl.classList.toggle('show');
                });

                // Submit button
                card.querySelector('.exercise-submit-btn').addEventListener('click', () => {
                    let cm = state.panelEditors[bug.id];
                    if (!cm) {
                        cm = mountLazyEditor(bug.id, bug);
                    }
                    if (cm) submitPanelError(bug.id, bug, cm);
                });

                itemsWrap.appendChild(card);
            });

            group.appendChild(header);
            group.appendChild(itemsWrap);
            fragment.appendChild(group);

            if (isFirstSection) {
                isFirstSection = false;
            }
        });

        container.replaceChildren(fragment);
        state.errorsPanelRendered = true;

        // Apply active filters
        applyErrorsFilter();

        // Observe placeholders in visible sections
        requestAnimationFrame(() => {
            observeExpandedSections();
        });
    }

    // ---- In-Memory Fast Errors Filtering ----
    function applyErrorsFilter() {
        const container = document.getElementById('errors-items-container');
        if (!container) return;

        if (!state.errorsPanelRendered) {
            renderErrorsPanel();
            return;
        }

        const filterSec = state.errorsFilter.section;
        const filterDiff = state.errorsFilter.diff;
        const searchQ = (state.errorsFilter.search || '').toLowerCase().trim();

        const groups = container.querySelectorAll('.panel-section-group');
        let totalVisibleCount = 0;

        groups.forEach(group => {
            const secId = group.dataset.sectionId;
            if (filterSec !== 'all' && secId !== filterSec) {
                group.style.display = 'none';
                return;
            }

            let sectionMatchCount = 0;
            const cards = group.querySelectorAll('.panel-card');

            cards.forEach(card => {
                const bugId = card.dataset.bugId;
                const bug = getErrorBugById(bugId);
                if (!bug) return;

                let matches = true;
                if (filterDiff !== 'all' && bug.difficulty !== filterDiff) {
                    matches = false;
                }
                if (matches && searchQ) {
                    const matchTitle = (bug.title || '').toLowerCase().includes(searchQ);
                    const matchInst = (bug.instruction || '').toLowerCase().includes(searchQ);
                    if (!matchTitle && !matchInst) {
                        matches = false;
                    }
                }

                if (matches) {
                    card.style.display = '';
                    sectionMatchCount++;
                    totalVisibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (sectionMatchCount === 0) {
                group.style.display = 'none';
            } else {
                group.style.display = '';
                const countBadge = group.querySelector('.section-count');
                if (countBadge) {
                    countBadge.textContent = `${sectionMatchCount} xəta sınağı`;
                }
                // When actively searching, automatically expand matching sections
                if (searchQ) {
                    group.classList.remove('collapsed');
                }
                if (!group.classList.contains('collapsed')) {
                    observeSectionPlaceholders(group);
                }
            }
        });

        // Toggle Empty State message
        let emptyEl = container.querySelector('.panel-empty-state');
        if (totalVisibleCount === 0) {
            if (!emptyEl) {
                emptyEl = document.createElement('div');
                emptyEl.className = 'panel-empty-state';
                emptyEl.textContent = 'Axtarışa uyğun xəta sınağı tapılmadı.';
                container.appendChild(emptyEl);
            }
            emptyEl.style.display = 'block';
        } else if (emptyEl) {
            emptyEl.style.display = 'none';
        }
    }

    const debouncedApplyErrorsFilter = debounce(applyErrorsFilter, 250);

    function updateTasksPanelStats() {
        const statsEl = document.getElementById('tasks-panel-stats');
        if (statsEl && typeof TASKS_PANEL_DATA !== 'undefined') {
            let total = 0;
            const validIds = new Set();
            TASKS_PANEL_DATA.forEach(s => {
                total += s.tasks.length;
                s.tasks.forEach(t => validIds.add(t.id));
            });
            const completedCount = [...state.completedPanelTasks].filter(id => validIds.has(id)).length;
            statsEl.textContent = `${completedCount}/${total} Tamamlandı`;
        }
    }

    function updateErrorsPanelStats() {
        const statsEl = document.getElementById('errors-panel-stats');
        if (statsEl && typeof ERRORS_PANEL_DATA !== 'undefined') {
            let total = 0;
            const validIds = new Set();
            ERRORS_PANEL_DATA.forEach(s => {
                total += s.bugs.length;
                s.bugs.forEach(b => validIds.add(b.id));
            });
            const completedCount = [...state.completedPanelErrors].filter(id => validIds.has(id)).length;
            statsEl.textContent = `${completedCount}/${total} Həll edildi`;
        }
    }

    // ---- Panel Task Submission ----
    async function submitPanelTask(taskId, task, cm) {
        const code = cm ? cm.getValue() : '';
        let card = document.getElementById(`card-${taskId}`) || document.querySelector(`.panel-card[data-task-id="${taskId}"]`);
        let resultEl = document.getElementById(`result-${taskId}`) || (card ? card.querySelector('.panel-card-result') : null);
        if (!card && resultEl) {
            card = resultEl.closest('.panel-card');
        }
        if (!resultEl || !card) return;

        const submitBtn = card.querySelector('.exercise-submit-btn') || card.querySelector(`button[data-id="${taskId}"]`);

        // Validation check
        const val = validateCodeSubmission(code, task.starterCode, false, {
            id: taskId,
            instruction: task.instruction,
            solutionCode: task.solutionCode || task.hint,
            mustContain: task.mustContain,
            disableHardcodeCheck: task.disableHardcodeCheck,
            allowHardcode: task.allowHardcode,
            type: task.type
        });
        if (!val.valid) {
            resultEl.className = 'panel-card-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            const iconEl = card.querySelector('.task-status-icon');
            if (iconEl) iconEl.textContent = '📝';
            state.completedPanelTasks.delete(taskId);
            saveProgress();
            updateTasksPanelStats();

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">⚠️</span>
                    <span class="result-message" style="color:var(--warning);">${val.message}</span>
                </div>
                <div class="result-details">Tapşırığı yerinə yetirmək üçün tələb olunan JavaScript kodunu redaktora daxil edin və yenidən "Yoxla" düyməsinə basın.</div>
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
            showToast(val.message, 'warning');
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('btn-loading');
        }

        resultEl.innerHTML = `<div class="running-indicator"><div class="running-dots"><span></span><span></span><span></span></div> İcra olunur...</div>`;
        resultEl.className = 'panel-card-result show';

        try {
            const result = await runJavaScript(code);

            if (!result || typeof result !== 'object') {
                throw new Error('İcra mühitindən cavab alına bilmədi.');
            }

            if (result.error) {
                resultEl.className = 'panel-card-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                const iconEl = card.querySelector('.task-status-icon');
                if (iconEl) iconEl.textContent = '📝';
                state.completedPanelTasks.delete(taskId);
                syncPlatformProgress({ notifyAchievements: false });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Xəta baş verdi! Kod icra olunmadı.</span>
                    </div>
                    <div class="result-details">
                        <strong>Xətanın səbəbi:</strong> ${explainError(result.error)}
                    </div>
                    <div class="result-output"><span class="output-error">${escapeHtml(result.error)}</span></div>
                    ${task.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(task.hint)}</div>` : ''}
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
                return;
            }

            const userOutput = cleanStr(result.output);
            const expectedOutput = cleanStr(task.expectedOutput);

            if ((userOutput === expectedOutput || compareOutputs(userOutput, expectedOutput)) && (expectedOutput === '' ? true : userOutput.length > 0)) {
                resultEl.className = 'panel-card-result show success';
                card.classList.add('completed');
                card.classList.remove('error');
                const iconEl = card.querySelector('.task-status-icon');
                if (iconEl) iconEl.textContent = '✅';
                state.completedPanelTasks.add(taskId);
                syncPlatformProgress({ notifyAchievements: true });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">✅</span>
                        <span class="result-message" style="color:var(--success);">Əla! Tapşırıq uğurla həll edildi!</span>
                    </div>
                    <div class="result-details"><strong>Çıxış nəticəsi:</strong></div>
                    <div class="result-output">${escapeHtml(userOutput)}</div>
                `;
                showToast('Tapşırıq uğurla tamamlandı! 🎉', 'success');
                miniConfetti(card);
            } else {
                resultEl.className = 'panel-card-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                const iconEl = card.querySelector('.task-status-icon');
                if (iconEl) iconEl.textContent = '📝';
                state.completedPanelTasks.delete(taskId);
                syncPlatformProgress({ notifyAchievements: false });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Xəta! Nəticə yanlışdır. Yenidən cəhd edin.</span>
                    </div>
                    <div class="result-details"><strong>Sizin nəticə:</strong></div>
                    <div class="result-output">${escapeHtml(userOutput || '(Boş nəticə - heç nə çap olunmadı)')}</div>
                    <div class="result-details"><strong>Gözlənilən nəticə:</strong></div>
                    <div class="result-expected">${escapeHtml(expectedOutput)}</div>
                    ${task.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(task.hint)}</div>` : ''}
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
            }
        } catch (execErr) {
            console.error('submitPanelTask error:', execErr);
            resultEl.className = 'panel-card-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            const iconEl = card.querySelector('.task-status-icon');
            if (iconEl) iconEl.textContent = '📝';
            state.completedPanelTasks.delete(taskId);
            syncPlatformProgress({ notifyAchievements: false });

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">❌</span>
                    <span class="result-message" style="color:var(--error);">İcra xətası baş verdi!</span>
                </div>
                <div class="result-details">
                    <strong>Xətanın səbəbi:</strong> ${explainError(execErr.message || String(execErr))}
                </div>
                <div class="result-output"><span class="output-error">${escapeHtml(execErr.message || String(execErr))}</span></div>
                ${task.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(task.hint)}</div>` : ''}
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-loading');
            }
            if (resultEl && resultEl.innerHTML.includes('running-indicator')) {
                resultEl.className = 'panel-card-result show error';
                resultEl.innerHTML = `<div><span class="result-icon">⚠️</span><span class="result-message" style="color:var(--error);">İcra vaxtı bitdi və ya cavab alına bilmədi.</span></div>`;
            }
        }
    }

    // ---- Panel Error Submission ----
    async function submitPanelError(bugId, bug, cm) {
        const code = cm ? cm.getValue() : '';
        let card = document.getElementById(`card-${bugId}`) || document.querySelector(`.panel-card[data-bug-id="${bugId}"]`);
        let resultEl = document.getElementById(`result-${bugId}`) || (card ? card.querySelector('.panel-card-result') : null);
        if (!card && resultEl) {
            card = resultEl.closest('.panel-card');
        }
        if (!resultEl || !card) return;

        const submitBtn = card.querySelector('.exercise-submit-btn') || card.querySelector(`button[data-id="${bugId}"]`);

        // Validation check
        const val = validateCodeSubmission(code, bug.buggyCode, true, {
            id: bugId,
            instruction: bug.instruction,
            solutionCode: bug.correctCode,
            mustContain: bug.mustContain,
            disableHardcodeCheck: bug.disableHardcodeCheck !== undefined ? bug.disableHardcodeCheck : true,
            allowHardcode: bug.allowHardcode,
            type: bug.type || 'bugfix'
        });
        if (!val.valid) {
            resultEl.className = 'panel-card-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            const iconEl = card.querySelector('.task-status-icon');
            if (iconEl) iconEl.textContent = '🐛';
            state.completedPanelErrors.delete(bugId);
            syncPlatformProgress({ notifyAchievements: false });

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">⚠️</span>
                    <span class="result-message" style="color:var(--warning);">${val.message}</span>
                </div>
                <div class="result-details">Xətalı kodu təhlil edib düzəliş edin və "Yoxla" düyməsinə basın.</div>
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
            showToast(val.message, 'warning');
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('btn-loading');
        }

        resultEl.innerHTML = `<div class="running-indicator"><div class="running-dots"><span></span><span></span><span></span></div> İcra olunur...</div>`;
        resultEl.className = 'panel-card-result show';

        try {
            const result = await runJavaScript(code);

            if (!result || typeof result !== 'object') {
                throw new Error('İcra mühitindən cavab alına bilmədi.');
            }

            if (result.error) {
                resultEl.className = 'panel-card-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                const iconEl = card.querySelector('.task-status-icon');
                if (iconEl) iconEl.textContent = '🐛';
                state.completedPanelErrors.delete(bugId);
                syncPlatformProgress({ notifyAchievements: false });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Hələ də xəta qalmaqdadır!</span>
                    </div>
                    <div class="result-details">
                        <strong>Xətanın səbəbi:</strong> ${explainError(result.error)}
                    </div>
                    <div class="result-output"><span class="output-error">${escapeHtml(result.error)}</span></div>
                    <div class="bugfix-explanation">💡 <strong>İpucu:</strong> ${escapeHtml(bug.hint || bug.explanation || '')}</div>
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
                return;
            }

            const userOutput = cleanStr(result.output);
            const targetOutput = bug.correctOutput !== undefined ? bug.correctOutput : bug.expectedOutput;
            const expectedOutput = cleanStr(targetOutput);

            if ((userOutput === expectedOutput || compareOutputs(userOutput, expectedOutput)) && (expectedOutput === '' ? true : userOutput.length > 0)) {
                resultEl.className = 'panel-card-result show success';
                card.classList.add('completed');
                card.classList.remove('error');
                const iconEl = card.querySelector('.task-status-icon');
                if (iconEl) iconEl.textContent = '✅';
                state.completedPanelErrors.add(bugId);
                syncPlatformProgress({ notifyAchievements: true });

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">✅</span>
                        <span class="result-message" style="color:var(--success);">Təbriklər! Xətanı tamamilə aradan qaldırdınız!</span>
                    </div>
                    <div class="result-output">${escapeHtml(userOutput)}</div>
                    <div class="bugfix-explanation"><strong>İzah:</strong> ${escapeHtml(bug.explanation || '')}</div>
                `;
                showToast('Xəta uğurla düzəldildi! 🐛✅', 'success');
                miniConfetti(card);
            } else {
                resultEl.className = 'panel-card-result show error';
                card.classList.remove('completed');
                card.classList.add('error');
                const iconEl = card.querySelector('.task-status-icon');
                if (iconEl) iconEl.textContent = '🐛';
                state.completedPanelErrors.delete(bugId);
                syncPlatformProgress({ notifyAchievements: false });
                saveProgress();
                updateErrorsPanelStats();

                resultEl.innerHTML = `
                    <div>
                        <span class="result-icon">❌</span>
                        <span class="result-message" style="color:var(--error);">Xəta! Nəticə yanlışdır. Yenidən cəhd edin.</span>
                    </div>
                    <div class="result-details"><strong>Sizin çıxış:</strong></div>
                    <div class="result-output">${escapeHtml(userOutput || '(Boş)')}</div>
                    <div class="result-details"><strong>Gözlənilən çıxış:</strong></div>
                    <div class="result-expected">${escapeHtml(expectedOutput)}</div>
                    ${bug.hint ? `<div class="result-details"><strong>💡 İpucu:</strong> ${escapeHtml(bug.hint)}</div>` : ''}
                `;
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
            }
        } catch (execErr) {
            console.error('submitPanelError error:', execErr);
            resultEl.className = 'panel-card-result show error';
            card.classList.remove('completed');
            card.classList.add('error');
            const iconEl = card.querySelector('.task-status-icon');
            if (iconEl) iconEl.textContent = '🐛';
            state.completedPanelErrors.delete(bugId);
            syncPlatformProgress({ notifyAchievements: false });

            resultEl.innerHTML = `
                <div>
                    <span class="result-icon">❌</span>
                    <span class="result-message" style="color:var(--error);">İcra xətası baş verdi!</span>
                </div>
                <div class="result-details">
                    <strong>Xətanın səbəbi:</strong> ${explainError(execErr.message || String(execErr))}
                </div>
                <div class="result-output"><span class="output-error">${escapeHtml(execErr.message || String(execErr))}</span></div>
                <div class="bugfix-explanation">💡 <strong>İpucu:</strong> ${escapeHtml(bug.hint || bug.explanation || '')}</div>
            `;
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-loading');
            }
            if (resultEl && resultEl.innerHTML.includes('running-indicator')) {
                resultEl.className = 'panel-card-result show error';
                resultEl.innerHTML = `<div><span class="result-icon">⚠️</span><span class="result-message" style="color:var(--error);">İcra vaxtı bitdi və ya cavab alına bilmədi.</span></div>`;
            }
        }
    }

    // ---- Mobile Sidebar ----
    function toggleMobileSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const toggle = document.getElementById('mobile-menu-toggle') || document.getElementById('menu-toggle');
        
        if (sidebar) sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
        if (toggle) toggle.classList.toggle('active');
    }

    function closeMobileSidebar() {
        cancelSidebarCollapseTimer();
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const toggle = document.getElementById('mobile-menu-toggle') || document.getElementById('menu-toggle');
        
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) {
            overlay.classList.remove('active');
            overlay.style.display = 'none';
        }
        if (toggle) toggle.classList.remove('active');
    }

    // ---- Utility ----
    function escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function showToast(message, type = 'info', options = {}) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const iconSpan = document.createElement('span');
        iconSpan.className = 'toast-icon';
        iconSpan.textContent = icons[type] || 'ℹ️';

        const textSpan = document.createElement('span');
        textSpan.className = 'toast-text';
        if (options && options.html) {
            textSpan.innerHTML = message;
        } else {
            textSpan.textContent = message;
        }

        toast.appendChild(iconSpan);
        toast.appendChild(textSpan);
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function miniConfetti(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#3fb950', '#1f6feb', '#f0883e', '#a371f7', '#f85149'];
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'confetti-particle';
            particle.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100 + 'px';
            particle.style.top = rect.top + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }

    // ============================================
    // EXAM MODE MODULE (İmtahan Rejimi)
    // ============================================

    function getDiffBadgeClass(diff) {
        if (!diff) return 'diff-asan';
        const d = String(diff).toUpperCase().trim();
        if (d === 'ASAN') return 'diff-asan';
        if (d === 'ORTA' || d === 'ORTA-ASAN') return 'diff-orta-asan';
        if (d === 'ÇƏTİN' || d === 'CETIN' || d === 'ORTA-ÇƏTİN' || d === 'ORTA-CETIN') return 'diff-orta-cetin';
        if (d === 'EKSPERT') return 'diff-cetin';

        const map = {
            'Asan': 'diff-asan',
            'Orta-asan': 'diff-orta-asan',
            'Orta-çətin': 'diff-orta-cetin',
            'Çətin': 'diff-cetin'
        };
        return map[diff] || 'diff-asan';
    }

    function getExamQuestionsPool() {
        const pool = [];

        // 1. Curated 21-Section Exam Bank (EXAM_QUESTIONS_DATA)
        if (typeof EXAM_QUESTIONS_DATA !== 'undefined' && Array.isArray(EXAM_QUESTIONS_DATA) && EXAM_QUESTIONS_DATA.length > 0) {
            const selectedMode = examState.selectedMode || 'all';
            let filtered = EXAM_QUESTIONS_DATA;

            if (selectedMode.startsWith('stage-')) {
                const stageNum = parseInt(selectedMode.replace('stage-', ''), 10);
                if (!isNaN(stageNum)) {
                    filtered = EXAM_QUESTIONS_DATA.filter(q => q.merheleId === stageNum);
                }
            }

            const stageNames = {
                1: 'Mərhələ 1: Təməllər',
                2: 'Mərhələ 2: Dərinləşmə',
                3: 'Mərhələ 3: Asinxron & Veb',
                4: 'Mərhələ 4: Node.js & Server',
                5: 'Mərhələ 5: REST API & DB'
            };

            filtered.forEach(q => {
                pool.push({
                    id: q.id,
                    bolmeId: q.bolmeId,
                    merheleId: q.merheleId,
                    title: q.basliq || q.title,
                    sectionTitle: `Bölmə ${q.bolmeId} • ${stageNames[q.merheleId] || 'Kurikulum'}`,
                    difficulty: q.cetinlik || q.difficulty || 'ORTA',
                    instruction: q.serif || q.instruction,
                    starterCode: q.starterCode || '// JavaScript kodunuzu buraya yazın\n',
                    expectedOutput: q.gozlenilenCixis !== undefined ? q.gozlenilenCixis : q.expectedOutput,
                    hints: (Array.isArray(q.ipuclari) && q.ipuclari.length > 0) ? q.ipuclari : (q.hints || []),
                    solution: q.solutionCode || q.solution,
                    explanation: q.teslimIzahi || q.explanation,
                    basliq: q.basliq,
                    serif: q.serif,
                    gozlenilenCixis: q.gozlenilenCixis,
                    solutionCode: q.solutionCode,
                    ipuclari: q.ipuclari,
                    teslimIzahi: q.teslimIzahi,
                    cetinlik: q.cetinlik
                });
            });

            if (pool.length > 0) {
                return pool;
            }
        }

        // 2. Fallback: Gather all panel tasks (across legacy panels)
        if (typeof TASKS_PANEL_DATA !== 'undefined' && Array.isArray(TASKS_PANEL_DATA)) {
            TASKS_PANEL_DATA.forEach(sec => {
                if (sec.tasks && Array.isArray(sec.tasks)) {
                    sec.tasks.forEach(t => {
                        if (t.expectedOutput !== undefined) {
                            pool.push({
                                id: t.id,
                                title: t.title,
                                difficulty: t.difficulty || 'Orta-asan',
                                sectionTitle: sec.sectionTitle || 'Praktiki Tapşırıq',
                                instruction: t.instruction,
                                starterCode: t.starterCode || '// JavaScript kodunuzu buraya yazın\n',
                                expectedOutput: t.expectedOutput,
                                hint: t.hint,
                                hints: t.hints,
                                solution: t.solution,
                                explanation: t.explanation
                            });
                        }
                    });
                }
            });
        }

        // 3. Fallback: Pool curriculum topic exercises
        const allTopics = getAllTopics();
        allTopics.forEach(topic => {
            if (topic.exercises && Array.isArray(topic.exercises)) {
                topic.exercises.forEach(ex => {
                    if (ex.expectedOutput !== undefined) {
                        pool.push({
                            id: ex.id,
                            title: ex.title,
                            difficulty: 'Orta-asan',
                            sectionTitle: topic.sectionTitle || topic.title,
                            instruction: ex.instruction,
                            starterCode: ex.starterCode || '// JavaScript kodunuzu buraya yazın\n',
                            expectedOutput: ex.expectedOutput,
                            hint: ex.hint,
                            hints: ex.hints,
                            solution: ex.solution,
                            explanation: ex.explanation
                        });
                    }
                });
            }
        });

        return pool;
    }

    function getQuestionProgressiveHints(q) {
        if (!q) return [];
        if (Array.isArray(q.ipuclari) && q.ipuclari.length > 0) {
            return q.ipuclari;
        }
        if (Array.isArray(q.hints) && q.hints.length > 0) {
            return q.hints;
        }

        const d = (q.difficulty || q.cetinlik || 'Orta-asan').toLowerCase();
        const maxHints = (d === 'asan') ? 1 : (d === 'çətin' || d === 'ekspert' ? 3 : 2);
        
        const hints = [];
        const text = ((q.instruction || q.serif || '') + ' ' + (q.title || q.basliq || '') + ' ' + (q.hint || '')).toLowerCase();

        // 1. Concept-specific First Hint (Subtle, gentle, no code spoilers)
        if (text.includes('destruct') || text.includes('parçala') || text.includes('spread')) {
            hints.push('Konseptual istiqamət: Massiv və ya obyektləri parçalamaq üçün Destructuring və ya Spread (...) sintaksisindən istifadə edin.');
        } else if (text.includes('async') || text.includes('await') || text.includes('promise') || text.includes('fetch')) {
            hints.push('Asinxron mexanizm: Asinxron sorğular və vədlərlə işləyərkən async/await açar sözlərindən və ya Promise zəncirindən istifadə edin.');
        } else if (text.includes('storage') || text.includes('localstorage') || text.includes('sessionstorage')) {
            hints.push('Brauzer yaddaşı: Məlumatları saxlamaq üçün localStorage.setItem(), oxumaq üçün getItem() və JSON.parse() istifadə edin.');
        } else if (text.includes('class') || text.includes('sinif') || text.includes('obyekt')) {
            hints.push('Obyekt yönümlü struktur: Sinif təyin etmək üçün class açar sözündən, xassələri inisializasiya etmək üçün constructor-dan istifadə edin.');
        } else if (text.includes('try') || text.includes('catch') || text.includes('xəta') || text.includes('istisna')) {
            hints.push('İstisna idarəetməsi: Xəta baş verə biləcək əməliyyatı try blokuna, baş vermiş xətanı isə catch (err) hissəsinə yerləşdirin.');
        } else if (text.includes('express') || text.includes('server') || text.includes('req') || text.includes('res')) {
            hints.push('Server arxitekturası: Marşrutlaşdırma və cavab qaytarmaq üçün req (sorğu) və res (cavab) obyektlərindən istifadə edin.');
        } else if (text.includes('funksiya') || text.includes('function') || text.includes('qaytar') || text.includes('return')) {
            hints.push('Funksiya strukturu: function adı(parametrlər) { ... } sintaksisi və ya arrow function (() => { ... }) ilə funksiya təyin edin və nəticəni return edin.');
        } else if (text.includes('obyekt') || text.includes('object') || text.includes('açar') || text.includes('prop')) {
            hints.push('Obyekt strukturu: Məlumatları { açar: dəyər } formasında saxlamaq üçün fiqurlu mötərizədən və nöqtə (obyekt.açar) notasiyasından istifadə edin.');
        } else if (text.includes('massiv') || text.includes('array') || text.includes('push') || text.includes('filter') || text.includes('map')) {
            hints.push('Massiv əməliyyatı: Massivin kvadrat mötərizələr [ ] ilə yaradıldığını və müvafiq metodlardan (map, filter, reduce) faydalanın.');
        } else if (text.includes('for ') || text.includes('dövr') || text.includes('while') || text.includes('dövrü')) {
            hints.push('Dövr strukturu: Təkrarı təmin etmək üçün for (let i = 0; i < n; i++) və ya for...of dövründən istifadə edin.');
        } else if (text.includes('if ') || text.includes('şərt') || text.includes('müsbət') || text.includes('mənfi') || text.includes('cüt') || text.includes('tək')) {
            hints.push('Şərt operatoru: Müqayisə aparmaq üçün if (şərt) { ... } else { ... } strukturunu qurun və dəqiq bərabərlik üçün === istifadə edin.');
        } else if (text.includes('template') || text.includes('literal') || text.includes('sətir')) {
            hints.push('Mətn formatlama: Dəyişənləri mətndə birləşdirmək üçün template literal (`${dəyişən}`) sintaksisindən istifadə edin.');
        } else {
            hints.push('Sintaksis xatırlatması: Tələb olunan çıxışı əldə etmək üçün console.log() funksiyasından və düzgün məlumat tipindən istifadə edin.');
        }

        // 2. Hint 2 (for Medium & Hard): Syntax / method guidance without giving away solution
        if (maxHints >= 2) {
            if (text.includes('template') || text.includes('literal')) {
                hints.push('Açar sintaksis: Backtick (``) işarələri daxilində ${ifade} yazaraq dinamik dəyərləri daxil edin.');
            } else if (text.includes('massiv') || text.includes('array')) {
                hints.push('Metod qaydası: Massiv üzərində əməliyyat apararkən array metodlarının (map, filter, reduce, push) xüsusiyyətlərini nəzərə alın.');
            } else if (text.includes('length') || text.includes('uzunluq')) {
                hints.push('Xassə ipucu: Sayı və ya uzunluğu tapmaq üçün .length xassəsindən istifadə edin (məs: arr.length).');
            } else if (text.includes('function') || text.includes('funksiya')) {
                hints.push('Qaytarma və çıxış: Funksiyadan dəyəri return ilə qaytarın və ya tapşırığın şərtinə uyğun olaraq birbaşa console.log() ilə çap edin.');
            } else if (text.includes('try') || text.includes('catch')) {
                hints.push('Xəta bloku: try { ... } catch (err) { console.log(err.message); } strukturunu tətbiq edin.');
            } else {
                hints.push('Sintaktik dəqiqlik: Dəyişən adlarına (camelCase), böyük-kiçik hərflərə və çıxışın gözlənilən formata tam uyğunluğuna diqqət edin.');
            }
        }

        // 3. Hint 3 (for Hard): Algorithmic refinement / edge case check
        if (maxHints >= 3) {
            if (text.includes('map') || text.includes('filter') || text.includes('reduce')) {
                hints.push('Şablon: arr.map(x => ...), arr.filter(x => şərt) və ya arr.reduce((top, x) => ..., 0) metodlarını tətbiq edin.');
            } else if (text.includes('async') || text.includes('await') || text.includes('promise')) {
                hints.push('Şablon: async function test() { const cavab = await promise; console.log(cavab); }');
            } else if (text.includes('class') || text.includes('oop')) {
                hints.push('Şablon: class Nümunə { constructor(ad) { this.ad = ad; } } strukturundan istifadə edin.');
            } else {
                hints.push('Yekun yoxlama: Kodun icrası nəticəsində alınan konsol çıxışının "Gözlənilən Konsol Çıxışı" qutusundakı simvollar və sətir sonları ilə 100% eyni olduğunu yoxlayın.');
            }
        }

        return hints.slice(0, maxHints);
    }

    function getQuestionReferenceSolution(q) {
        if (!q) return { code: '// Həll kodu tapılmadı', explanation: '' };
        if (q.solutionCode || q.solution) {
            return {
                code: (q.solutionCode || q.solution).trim(),
                explanation: q.teslimIzahi || q.explanation || 'Bu tapşırığın rəsmi JavaScript həll kodu və analitik izahı.'
            };
        }

        const starterClean = (q.starterCode || '')
            .replace(/\/\/.*$/gm, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .trim();

        let code = '';
        let hint = (q.hint || '').trim();

        if (hint.startsWith('console.log(') || hint.startsWith('function ') || hint.startsWith('for ') || hint.startsWith('while ') || hint.startsWith('const ') || hint.startsWith('let ') || hint.startsWith('class ') || hint.includes('\n')) {
            code = starterClean ? (starterClean + '\n' + hint) : hint;
        } else if (hint.startsWith('if ')) {
            const exp = q.expectedOutput ? q.expectedOutput.trim() : '';
            code = (starterClean ? starterClean + '\n' : '') + hint + ' {\n  console.log(' + JSON.stringify(exp) + ');\n}';
        } else if (hint.startsWith('Math.') || hint.startsWith('parseInt(') || hint.startsWith('parseFloat(') || hint.startsWith('String(') || hint.startsWith('Number(') || hint.startsWith('typeof ') || hint.startsWith('Array.') || hint.startsWith('Object.')) {
            code = (starterClean ? starterClean + '\n' : '') + 'console.log(' + hint + ');';
        } else if (hint.includes(' = ') && !hint.includes('edin')) {
            const varName = hint.split('=')[0].replace(/(const|let|var)\s+/, '').trim();
            code = hint + (hint.endsWith(';') ? '' : ';') + '\nconsole.log(' + varName + ');';
        } else if (hint && !hint.includes(' ') && !hint.includes('edin') && !hint.includes('istifadə') && !hint.includes('yazın') && !hint.includes('verin')) {
            code = (starterClean ? starterClean + '\n' : '') + 'console.log(' + hint + ');';
        } else {
            if (q.expectedOutput !== undefined) {
                const lines = q.expectedOutput.split('\n');
                if (lines.length === 1) {
                    const isNum = !isNaN(Number(q.expectedOutput)) && q.expectedOutput.trim() !== '';
                    const expr = isNum ? q.expectedOutput : JSON.stringify(q.expectedOutput);
                    code = starterClean ? (starterClean + '\nconsole.log(' + expr + ');') : ('console.log(' + expr + ');');
                } else {
                    const prints = lines.map(l => 'console.log(' + JSON.stringify(l) + ');').join('\n');
                    code = starterClean ? (starterClean + '\n' + prints) : prints;
                }
            }
        }

        let explanation = 'Bu tapşırıqda tələb olunan nəticəni əldə etmək üçün JavaScript sintaksis qaydalarına uyğun olaraq dəqiq konsol çıxışı təmin edilir.';
        if (hint && (hint.includes('edin') || hint.includes('istifadə') || hint.includes('verin') || hint.includes('ilə'))) {
            explanation = hint;
        } else if (q.instruction) {
            explanation = q.instruction.replace(/<[^>]+>/g, '');
        }

        return { code: code.trim(), explanation };
    }

    function loadExamHistory() {
        try {
            if (typeof StorageEngine !== 'undefined') {
                const stored = StorageEngine.getItemSync(EXAM_HISTORY_KEY);
                if (stored) {
                    return Array.isArray(stored) ? stored : (typeof stored === 'string' ? JSON.parse(stored) : []);
                }
            }
            const raw = localStorage.getItem(EXAM_HISTORY_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.warn('Could not load exam history:', e);
            return [];
        }
    }

    function saveExamHistoryItem(item) {
        try {
            if (typeof StorageEngine !== 'undefined') {
                StorageEngine.saveExamAttempt(item);
            }
            const list = loadExamHistory();
            list.unshift(item); // Newest first
            if (list.length > 50) list.pop(); // Keep up to 50 attempts for localStorage mirror
            localStorage.setItem(EXAM_HISTORY_KEY, JSON.stringify(list));
        } catch (e) {
            console.warn('Could not save exam history item:', e);
        }
    }

    function renderExamHistory() {
        const listEl = document.getElementById('exam-history-list');
        const countBadge = document.getElementById('exam-history-count');
        const clearBtn = document.getElementById('exam-clear-history-btn');
        if (!listEl) return;

        const history = loadExamHistory();
        if (countBadge) countBadge.textContent = `${history.length} cəhd`;
        if (clearBtn) clearBtn.classList.toggle('hidden', history.length === 0);

        if (history.length === 0) {
            listEl.innerHTML = `
                <div class="exam-history-empty">
                    <span class="empty-icon">📊</span>
                    <p><strong>Hələlik heç bir imtahan verilməyib</strong></p>
                    <p style="font-size:0.85rem;">Biliklərinizi sınaqdan keçirmək üçün soldakı parametrləri seçib imtahana başlayın.</p>
                </div>
            `;
            return;
        }

        listEl.innerHTML = '';
        history.forEach((attempt, idx) => {
            const item = document.createElement('div');
            item.className = 'exam-history-item';
            item.innerHTML = `
                <div class="history-meta">
                    <span class="history-date">📅 ${escapeHtml(attempt.dateStr)}</span>
                    <span class="history-detail">${attempt.totalQuestions} sual — ⏱️ ${escapeHtml(attempt.timeSpentStr)}</span>
                </div>
                <div class="history-score-col">
                    <span class="history-score-badge ${attempt.passed ? 'passed' : 'failed'}">
                        ${attempt.correctCount}/${attempt.totalQuestions} (%${attempt.percentage})
                    </span>
                    <button type="button" class="history-view-btn" data-history-idx="${idx}">
                        Bax 👁️
                    </button>
                </div>
            `;

            const viewBtn = item.querySelector('.history-view-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', () => {
                    showExamResultModal(attempt);
                });
            }

            listEl.appendChild(item);
        });
    }

    function initExamLobby() {
        // Exam mode selector (Full Exam vs Stage Sprints)
        document.querySelectorAll('#exam-mode-selector .exam-pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#exam-mode-selector .exam-pill-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                examState.selectedMode = btn.dataset.mode || 'all';
            });
        });

        // Question count pill buttons
        document.querySelectorAll('#exam-q-selector .exam-pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#exam-q-selector .exam-pill-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                examState.selectedQuestionCount = parseInt(btn.dataset.count, 10) || 10;
            });
        });

        // Time limit pill buttons (support both data-minutes and data-time)
        document.querySelectorAll('#exam-time-selector .exam-pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#exam-time-selector .exam-pill-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                examState.selectedTimeLimitMinutes = parseInt(btn.dataset.minutes || btn.dataset.time, 10) || 20;
            });
        });

        // Start exam button
        const startBtn = document.getElementById('exam-start-btn');
        if (startBtn) {
            startBtn.onclick = startExam;
        }

        // Initialize Hourglass Challenge Mode
        initHourglassMode();

        // Clear history button
        const clearBtn = document.getElementById('exam-clear-history-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', async () => {
                if (confirm('Bütün keçmiş imtahan nəticələriniz silinəcək. Əminsiniz?')) {
                    if (typeof StorageEngine !== 'undefined') {
                        await StorageEngine.clearExamHistory();
                    }
                    localStorage.removeItem(EXAM_HISTORY_KEY);
                    renderExamHistory();
                    showToast('İmtahan tarixçəsi təmizləndi', 'info');
                }
            });
        }
    }

    function hasValidUserCode(userCode, starterCode, question = {}) {
        if (!userCode || typeof userCode !== 'string') return false;
        return validateCodeSubmission(userCode, starterCode, false, {
            id: question.id,
            instruction: question.instruction || question.serif,
            solutionCode: question.solutionCode,
            mustContain: question.mustContain,
            disableHardcodeCheck: question.disableHardcodeCheck,
            allowHardcode: question.allowHardcode,
            type: question.type
        }).valid;
    }

    function initExamEditor() {
        const editorEl = document.getElementById('exam-editor');
        if (!editorEl) return;

        if (examState.editorInstance) {
            requestAnimationFrame(() => {
                setTimeout(() => examState.editorInstance && examState.editorInstance.refresh(), 50);
            });
            return;
        }

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        examState.editorInstance = CodeMirror(editorEl, {
            value: '',
            mode: 'javascript',
            theme: isDark ? 'dracula' : 'default',
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            indentUnit: 2,
            tabSize: 2,
            indentWithTabs: false,
            lineWrapping: true,
            viewportMargin: Infinity,
            extraKeys: {
                'Ctrl-Enter': () => testExamCurrentCode(),
                'Tab': (cm) => cm.replaceSelection('  ', 'end')
            }
        });
        registerCodeMirrorForMobileToolbar(examState.editorInstance);

        requestAnimationFrame(() => {
            setTimeout(() => examState.editorInstance && examState.editorInstance.refresh(), 50);
        });

        examState.editorInstance.on('change', () => {
            if (!examState.inProgress || examState.questions.length === 0) return;
            if (examState.surrenderedQuestions && examState.surrenderedQuestions.has(examState.currentIndex)) return;
            const code = examState.editorInstance.getValue();
            examState.userAnswers[examState.currentIndex] = code;
            const q = examState.questions[examState.currentIndex];
            if (q && !hasValidUserCode(code, q.starterCode)) {
                examState.validatedQuestions.delete(examState.currentIndex);
            }
            updateStepperPillState(examState.currentIndex);
        });
    }

    function updateStepperPillState(index) {
        const pill = document.querySelector(`.stepper-btn[data-idx="${index}"]`);
        if (!pill) return;
        const q = examState.questions[index];
        if (!q) return;
        const code = examState.userAnswers[index] || '';
        const isSurrendered = examState.surrenderedQuestions && examState.surrenderedQuestions.has(index);
        // Only mark answered if actively validated/tested AND contains non-boilerplate user code AND not surrendered
        const isAnswered = !isSurrendered && examState.validatedQuestions.has(index) && hasValidUserCode(code, q.starterCode);
        pill.classList.toggle('answered', isAnswered);
        pill.classList.toggle('surrendered', isSurrendered);
    }

    function renderExamStepper() {
        const stepper = document.getElementById('exam-stepper') || document.getElementById('exam-bubbles-nav');
        if (!stepper) return;
        stepper.innerHTML = '';

        examState.questions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `stepper-btn ${idx === examState.currentIndex ? 'active' : ''}`;
            btn.dataset.idx = idx;
            btn.textContent = idx + 1;
            btn.title = `Sual ${idx + 1}: ${q.title}`;
            btn.addEventListener('click', () => {
                renderExamQuestion(idx, examState.currentIndex);
            });
            stepper.appendChild(btn);
            updateStepperPillState(idx);
        });
    }

    function updateExamTimerDisplay() {
        const timerDisplay = document.getElementById('exam-timer-display');
        const timerBox = document.getElementById('exam-timer-box') || document.querySelector('.exam-timer-wrapper');
        if (!timerDisplay) return;

        const mins = Math.floor(Math.max(0, examState.remainingSeconds) / 60);
        const secs = Math.max(0, examState.remainingSeconds) % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        if (timerBox) {
            timerBox.classList.toggle('warning', examState.remainingSeconds <= 300 && examState.remainingSeconds > 60);
            timerBox.classList.toggle('danger', examState.remainingSeconds <= 60);
        }
    }

    function startExam() {
        const pool = getExamQuestionsPool();
        if (!pool || pool.length === 0) {
            showToast('İmtahan tapşırıqları tapılmadı! Lütfən səhifəni yeniləyin.', 'warning');
            return;
        }

        const lobbyEl = document.getElementById('exam-lobby');
        const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');

        if (!workspaceEl) {
            showToast('İmtahan iş sahəsi DOM-da tapılmadı!', 'error');
            return;
        }

        try {
            // Shuffle with Fisher-Yates
            const shuffled = [...pool];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            const count = Math.min(examState.selectedQuestionCount, shuffled.length);
            examState.questions = shuffled.slice(0, count);
            examState.currentIndex = 0;
            examState.userAnswers = {};
            examState.validatedQuestions = new Set();
            examState.testOutputs = {};
            examState.revealedHints = {};
            examState.surrenderedQuestions = new Set();
            examState.totalSeconds = examState.selectedTimeLimitMinutes * 60;
            examState.remainingSeconds = examState.totalSeconds;
            examState.inProgress = true;
            examState.isPracticeMode = false;

            const statusTag = document.querySelector('.exam-status-tag');
            if (statusTag) {
                statusTag.innerHTML = '<span class="pulse-dot"></span> CANLI İMTAHAN';
            }

            // Switch to Workspace view safely
            if (lobbyEl) lobbyEl.classList.add('hidden');
            workspaceEl.classList.remove('hidden');

            initExamEditor();
            renderExamStepper();
            renderExamQuestion(0, -1);
            updateExamTimerDisplay();

            if (examState.timerInterval) clearInterval(examState.timerInterval);
            examState.timerInterval = setInterval(() => {
                examState.remainingSeconds--;
                updateExamTimerDisplay();
                if (examState.remainingSeconds <= 0) {
                    clearInterval(examState.timerInterval);
                    examState.timerInterval = null;
                    showToast('Vaxt bitdi! İmtahan avtomatik təhvil verildi ⏱️', 'warning');
                    finishExam(true);
                }
            }, 1000);

            showToast('İmtahan başladı! Uğurlar! 🚀', 'success');
        } catch (err) {
            console.error("Exam start error:", err);
            examState.inProgress = false;
            if (examState.timerInterval) {
                clearInterval(examState.timerInterval);
                examState.timerInterval = null;
            }
            if (lobbyEl) lobbyEl.classList.remove('hidden');
            if (workspaceEl) workspaceEl.classList.add('hidden');
            showToast('İmtahan başladılarkən xəta baş verdi: ' + (err.message || err), 'error');
        }
    }

    // ============================================
    // PRACTICE MODE STATE & SECTION NAVIGATION (FƏRDİ MƏŞQ)
    // ============================================
    const PRACTICE_STORAGE_KEY = 'jsoyren_practice_progress';

    function getPracticeStorage() {
        try {
            if (typeof StorageEngine !== 'undefined') {
                const stored = StorageEngine.getItemSync(PRACTICE_STORAGE_KEY);
                if (stored) return (typeof stored === 'string') ? JSON.parse(stored) : stored;
            }
            const raw = localStorage.getItem(PRACTICE_STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.warn('Practice progress oxunarkən xəta:', e);
            return {};
        }
    }

    function getPracticeQuestionProgress(qid) {
        if (!qid) return null;
        const store = getPracticeStorage();
        return store[qid] || null;
    }

    function savePracticeQuestionProgress(qid, code, isValidated, testOutput) {
        if (!qid) return;
        try {
            const store = getPracticeStorage();
            const existing = store[qid] || {};
            store[qid] = {
                code: code !== undefined ? code : (existing.code || ''),
                validated: isValidated !== undefined ? !!isValidated : !!existing.validated,
                testOutput: testOutput !== undefined ? testOutput : (existing.testOutput || null),
                timestamp: Date.now()
            };
            if (typeof StorageEngine !== 'undefined') {
                StorageEngine.setItem(PRACTICE_STORAGE_KEY, store);
            } else {
                localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(store));
            }
        } catch (e) {
            console.warn('Practice progress saxlanarkən xəta:', e);
        }
    }

    function navigateToNextSectionPractice() {
        if (!examState.inProgress || !examState.isPracticeMode) return;
        const currentQ = examState.questions && examState.questions[examState.currentIndex || 0];
        if (!currentQ) return;

        const currentBolmeId = (currentQ.bolmeId) ? parseInt(currentQ.bolmeId, 10) : 1;

        // Auto-save current question before moving
        if (examState.editorInstance && currentQ.id) {
            const currentCode = examState.editorInstance.getValue();
            const isValidated = examState.validatedQuestions ? examState.validatedQuestions.has(examState.currentIndex) : false;
            const currentTestOutput = examState.testOutputs ? examState.testOutputs[examState.currentIndex] : null;
            savePracticeQuestionProgress(currentQ.id, currentCode, isValidated, currentTestOutput);
        }

        if (currentBolmeId >= 21) {
            showToast('Təbriklər! Siz artıq sonuncu kurikulum bölməsindəsiniz (Bölmə 21) 🎓', 'info');
            return;
        }

        const nextBolmeId = currentBolmeId + 1;
        const pool = (typeof EXAM_QUESTIONS_DATA !== 'undefined' && Array.isArray(EXAM_QUESTIONS_DATA)) 
            ? EXAM_QUESTIONS_DATA 
            : getExamQuestionsPool();

        const nextQuestions = pool.filter(q => parseInt(q.bolmeId, 10) === nextBolmeId);
        if (!nextQuestions || nextQuestions.length === 0) {
            showToast(`Bölmə ${nextBolmeId} üzrə sual tapılmadı!`, 'warning');
            return;
        }

        const nextQ = nextQuestions[0];
        startSingleQuestionPractice(nextQ);
        showToast(`Bölmə ${nextBolmeId}-ə keçid edildi: "${nextQ.basliq || nextQ.title}" 🚀`, 'success');
    }

    function navigateToPrevSectionPractice() {
        if (!examState.inProgress || !examState.isPracticeMode) return;
        const currentQ = examState.questions && examState.questions[examState.currentIndex || 0];
        if (!currentQ) return;

        const currentBolmeId = (currentQ.bolmeId) ? parseInt(currentQ.bolmeId, 10) : 1;

        if (currentBolmeId <= 1) {
            showToast('Siz artıq ilk kurikulum bölməsindəsiniz (Bölmə 1).', 'info');
            return;
        }

        // Auto-save current question before moving
        if (examState.editorInstance && currentQ.id) {
            const currentCode = examState.editorInstance.getValue();
            const isValidated = examState.validatedQuestions ? examState.validatedQuestions.has(examState.currentIndex) : false;
            const currentTestOutput = examState.testOutputs ? examState.testOutputs[examState.currentIndex] : null;
            savePracticeQuestionProgress(currentQ.id, currentCode, isValidated, currentTestOutput);
        }

        const prevBolmeId = currentBolmeId - 1;
        const pool = (typeof EXAM_QUESTIONS_DATA !== 'undefined' && Array.isArray(EXAM_QUESTIONS_DATA)) 
            ? EXAM_QUESTIONS_DATA 
            : getExamQuestionsPool();

        const prevQuestions = pool.filter(q => parseInt(q.bolmeId, 10) === prevBolmeId);
        if (!prevQuestions || prevQuestions.length === 0) {
            showToast(`Bölmə ${prevBolmeId} üzrə sual tapılmadı!`, 'warning');
            return;
        }

        const prevQ = prevQuestions[0];
        startSingleQuestionPractice(prevQ);
        showToast(`Bölmə ${prevBolmeId}-ə qayıdıldı: "${prevQ.basliq || prevQ.title}" ↩️`, 'info');
    }

    function startSingleQuestionPractice(targetQuestion) {
        if (!targetQuestion) return;

        // Auto-save any currently active practice question before switching
        if (examState.isPracticeMode && examState.inProgress && examState.questions && examState.questions.length > 0) {
            const activeQ = examState.questions[0];
            if (activeQ && activeQ.id && examState.editorInstance) {
                savePracticeQuestionProgress(
                    activeQ.id,
                    examState.editorInstance.getValue(),
                    examState.validatedQuestions ? examState.validatedQuestions.has(0) : false,
                    examState.testOutputs ? examState.testOutputs[0] : null
                );
            }
        }

        let q = null;
        if (typeof targetQuestion === 'string') {
            const pool = (typeof EXAM_QUESTIONS_DATA !== 'undefined' && Array.isArray(EXAM_QUESTIONS_DATA))
                ? EXAM_QUESTIONS_DATA
                : getExamQuestionsPool();
            q = pool.find(item => item.id === targetQuestion);
        } else {
            q = targetQuestion;
        }

        if (!q) {
            showToast('Tapşırıq tapılmadı!', 'error');
            return;
        }

        const stageNames = {
            1: 'Mərhələ 1: Təməllər',
            2: 'Mərhələ 2: Dərinləşmə',
            3: 'Mərhələ 3: Asinxron & Veb',
            4: 'Mərhələ 4: Node.js & Server',
            5: 'Mərhələ 5: REST API & DB'
        };

        const resolvedBolmeId = q.bolmeId || (function() {
            const m = (q.id || '').match(/exam-sec(\d+)-/);
            return m ? parseInt(m[1], 10) : 1;
        })();

        const resolvedMerheleId = q.merheleId || (function() {
            if (resolvedBolmeId <= 5) return 1;
            if (resolvedBolmeId <= 10) return 2;
            if (resolvedBolmeId <= 14) return 3;
            if (resolvedBolmeId <= 17) return 4;
            return 5;
        })();

        const formattedQ = {
            id: q.id,
            bolmeId: resolvedBolmeId,
            merheleId: resolvedMerheleId,
            title: q.basliq || q.title,
            sectionTitle: q.sectionTitle || `Bölmə ${resolvedBolmeId} • ${stageNames[resolvedMerheleId] || 'Kurikulum'}`,
            difficulty: q.cetinlik || q.difficulty || 'ORTA',
            instruction: q.serif || q.instruction,
            starterCode: q.starterCode || '// JavaScript kodunuzu buraya yazın\n',
            expectedOutput: q.gozlenilenCixis !== undefined ? q.gozlenilenCixis : q.expectedOutput,
            hints: (Array.isArray(q.ipuclari) && q.ipuclari.length > 0) ? q.ipuclari : (q.hints || []),
            solution: q.solutionCode || q.solution,
            explanation: q.teslimIzahi || q.explanation,
            basliq: q.basliq || q.title,
            serif: q.serif || q.instruction,
            gozlenilenCixis: q.gozlenilenCixis !== undefined ? q.gozlenilenCixis : q.expectedOutput,
            solutionCode: q.solutionCode || q.solution,
            ipuclari: q.ipuclari || q.hints || [],
            teslimIzahi: q.teslimIzahi || q.explanation,
            cetinlik: q.cetinlik || q.difficulty || 'ORTA'
        };

        const lobbyEl = document.getElementById('exam-lobby');
        const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');

        if (!workspaceEl) {
            showToast('İmtahan iş sahəsi DOM-da tapılmadı!', 'error');
            return;
        }

        showView('exam');

        if (examState.timerInterval) {
            clearInterval(examState.timerInterval);
            examState.timerInterval = null;
        }

        examState.isPracticeMode = true;
        examState.questions = [formattedQ];
        examState.currentIndex = 0;
        examState.userAnswers = {};
        examState.validatedQuestions = new Set();
        examState.testOutputs = {};
        examState.revealedHints = {};
        examState.surrenderedQuestions = new Set();
        examState.inProgress = true;

        // Restore saved progress from localStorage if available
        const savedProgress = getPracticeQuestionProgress(formattedQ.id);
        if (savedProgress) {
            if (savedProgress.code) {
                examState.userAnswers[0] = savedProgress.code;
            }
            if (savedProgress.validated) {
                examState.validatedQuestions.add(0);
            }
            if (savedProgress.testOutput) {
                examState.testOutputs[0] = savedProgress.testOutput;
            }
        }

        if (lobbyEl) lobbyEl.classList.add('hidden');
        workspaceEl.classList.remove('hidden');

        // Update timer box display for practice mode
        const timerDisplay = document.getElementById('exam-timer-display');
        const timerBox = document.getElementById('exam-timer-box') || document.querySelector('.exam-timer-wrapper');
        if (timerDisplay) {
            timerDisplay.textContent = '🎯 Məşq';
        }
        if (timerBox) {
            timerBox.classList.remove('warning', 'danger');
        }

        // Update status tag
        const statusTag = document.querySelector('.exam-status-tag');
        if (statusTag) {
            statusTag.innerHTML = '<span class="pulse-dot"></span> FƏRDİ MƏŞQ';
        }

        initExamEditor();
        renderExamStepper();
        renderExamQuestion(0, -1);

        showToast(`"${formattedQ.title}" üzrə fərdi məşq başladı! 🎯`, 'success');
    }

    if (typeof window !== 'undefined') {
        window.startSingleQuestionPractice = startSingleQuestionPractice;
        window.navigateToNextSectionPractice = navigateToNextSectionPractice;
        window.navigateToPrevSectionPractice = navigateToPrevSectionPractice;
        window.savePracticeQuestionProgress = savePracticeQuestionProgress;
        window.getPracticeQuestionProgress = getPracticeQuestionProgress;
        window.validateCodeSubmission = validateCodeSubmission;
        window.isAntiHardcodeViolation = isAntiHardcodeViolation;
        window.isAlgorithmicTask = isAlgorithmicTask;
        window.filterBoilerplateLogs = filterBoilerplateLogs;
    }

    function renderExamQuestion(index, prevIndex) {
        if (!examState.questions || index < 0 || index >= examState.questions.length) return;

        // Save previous question code only if navigating from a valid question
        const fromIdx = (prevIndex !== undefined && prevIndex !== null) 
            ? prevIndex 
            : (examState.currentIndex !== index ? examState.currentIndex : -1);

        if (examState.editorInstance && fromIdx >= 0 && fromIdx < examState.questions.length) {
            const prevCode = examState.editorInstance.getValue();
            examState.userAnswers[fromIdx] = prevCode;
            updateStepperPillState(fromIdx);

            const prevQ = examState.questions[fromIdx];
            if (examState.isPracticeMode && prevQ && prevQ.id) {
                savePracticeQuestionProgress(
                    prevQ.id,
                    prevCode,
                    examState.validatedQuestions ? examState.validatedQuestions.has(fromIdx) : false,
                    examState.testOutputs ? examState.testOutputs[fromIdx] : null
                );
            }
        }

        examState.currentIndex = index;
        const q = examState.questions[index];
        if (!q) return;

        // Left Panel Header & Details (Null-safe lookups)
        const secTag = document.getElementById('exam-task-section') || document.getElementById('exam-q-section');
        if (secTag) secTag.textContent = q.sectionTitle || 'JavaScript Tapşırığı';

        const diffBadge = document.getElementById('exam-task-diff') || document.getElementById('exam-q-difficulty');
        if (diffBadge) {
            diffBadge.textContent = q.difficulty || 'Orta-asan';
            diffBadge.className = `exam-task-diff diff-badge ${getDiffBadgeClass(q.difficulty)}`;
        }

        const titleEl = document.getElementById('exam-task-title') || document.getElementById('exam-q-title');
        if (titleEl) titleEl.textContent = `Sual ${index + 1}: ${q.title}`;

        const instrEl = document.getElementById('exam-task-instruction') || document.getElementById('exam-q-instruction');
        if (instrEl) instrEl.innerHTML = q.instruction || '';

        const expBox = document.getElementById('exam-expected-box');
        if (expBox) expBox.textContent = q.expectedOutput !== undefined ? q.expectedOutput : '';

        // Progressive Hints rendering
        const allHints = getQuestionProgressiveHints(q);
        const revealedCount = (examState.revealedHints && examState.revealedHints[index]) || 0;
        const hintsBadge = document.getElementById('exam-hints-badge');
        if (hintsBadge) {
            hintsBadge.textContent = `${revealedCount} / ${allHints.length} açılıb`;
        }

        const hintsListEl = document.getElementById('exam-revealed-hints-list');
        if (hintsListEl) {
            hintsListEl.innerHTML = '';
            for (let i = 0; i < revealedCount; i++) {
                const item = document.createElement('div');
                item.className = 'exam-hint-item';
                item.innerHTML = `<span class="exam-hint-num">İpucu ${i + 1}:</span> ${escapeHtml(allHints[i])}`;
                hintsListEl.appendChild(item);
            }
        }

        const revealHintBtn = document.getElementById('exam-reveal-hint-btn');
        if (revealHintBtn) {
            if (revealedCount === 0) {
                revealHintBtn.innerHTML = `💡 İpucu göstər (1/${allHints.length})`;
                revealHintBtn.disabled = false;
                revealHintBtn.className = 'exam-hint-step-btn';
            } else if (revealedCount < allHints.length) {
                revealHintBtn.innerHTML = `💡 Növbəti ipucunu aç (${revealedCount + 1}/${allHints.length})`;
                revealHintBtn.disabled = false;
                revealHintBtn.className = 'exam-hint-step-btn';
            } else {
                revealHintBtn.innerHTML = 'Bütün ipucları açıldı ✅';
                revealHintBtn.disabled = true;
                revealHintBtn.className = 'exam-hint-step-btn completed';
            }
        }

        // Surrender & Official Solution rendering
        const isSurrendered = examState.surrenderedQuestions && examState.surrenderedQuestions.has(index);
        const surrenderBtn = document.getElementById('exam-surrender-btn');
        const solutionBox = document.getElementById('exam-solution-box') || document.getElementById('surrender-solution-box');
        const testCodeBtn = document.getElementById('exam-test-code-btn');
        const resetCodeBtn = document.getElementById('exam-reset-code-btn');

        if (isSurrendered) {
            if (surrenderBtn) surrenderBtn.classList.add('hidden');
            if (solutionBox) {
                solutionBox.classList.remove('hidden');
                const sol = getQuestionReferenceSolution(q);
                const solCodeEl = document.getElementById('exam-solution-code') || document.getElementById('surrender-solution-code');
                const solExpEl = document.getElementById('exam-solution-explanation') || document.getElementById('surrender-solution-explanation');
                if (solCodeEl) solCodeEl.textContent = sol.code;
                if (solExpEl) solExpEl.textContent = sol.explanation;
            }
            if (examState.editorInstance) {
                examState.editorInstance.setOption('readOnly', true);
            }
            if (testCodeBtn) {
                testCodeBtn.disabled = true;
                testCodeBtn.title = 'Təslim olunduğu üçün deaktivdir';
            }
            if (resetCodeBtn) {
                resetCodeBtn.disabled = true;
            }
        } else {
            if (surrenderBtn) surrenderBtn.classList.remove('hidden');
            if (solutionBox) solutionBox.classList.add('hidden');
            if (examState.editorInstance) {
                examState.editorInstance.setOption('readOnly', false);
            }
            if (testCodeBtn) {
                testCodeBtn.disabled = false;
                testCodeBtn.title = 'Kodu sınaqdan keçir (çıxışı göstər)';
            }
            if (resetCodeBtn) {
                resetCodeBtn.disabled = false;
            }
        }

        // Right Panel Editor: Load user code if exists, otherwise question starterCode
        const userCode = examState.userAnswers[index] !== undefined 
            ? examState.userAnswers[index] 
            : (q.starterCode || '// JavaScript kodunuzu buraya yazın\n');

        if (examState.editorInstance) {
            examState.editorInstance.setValue(userCode);
            requestAnimationFrame(() => {
                setTimeout(() => examState.editorInstance && examState.editorInstance.refresh(), 50);
            });
        }

        // Test output console
        const outputText = document.getElementById('exam-test-output-text');
        const outputStatus = document.getElementById('exam-output-status');
        const prevTest = examState.testOutputs[index];
        if (outputText && outputStatus) {
            if (prevTest) {
                outputText.textContent = prevTest.output || '(Nəticə yoxdur)';
                outputText.className = `exam-test-output-text ${prevTest.isSuccess ? 'success' : 'error'}`;
                outputStatus.textContent = prevTest.statusText;
            } else {
                outputText.textContent = isSurrendered 
                    ? 'Bu sual üzrə təslim olunduğu üçün sınaq icrası kilidlənib.'
                    : 'Kodu sınaqdan keçirmək üçün "▶ Kodu Sınaqdan Keçir" düyməsinə basın...';
                outputText.className = 'exam-test-output-text';
                outputStatus.textContent = isSurrendered ? 'Təslim olundu' : 'İcra gözlənilir';
            }
        }

        // Stepper updates
        document.querySelectorAll('.stepper-btn').forEach(btn => {
            const btnIdx = parseInt(btn.dataset.idx, 10);
            btn.classList.toggle('active', btnIdx === index);
            updateStepperPillState(btnIdx);
        });

        // Bottom Navigation & Progress Counter
        const prevBtn = document.getElementById('exam-prev-btn');
        const nextBtn = document.getElementById('exam-next-btn');
        const nextSecBtn = document.getElementById('exam-next-section-btn');
        const headerNextSecBtn = document.getElementById('exam-header-next-section-btn');
        const counter = document.getElementById('exam-progress-counter');
        const qIndicator = document.getElementById('exam-question-indicator');

        if (examState.isPracticeMode) {
            const curBolme = (q && q.bolmeId) ? parseInt(q.bolmeId, 10) : 1;
            const isFinalSection = curBolme >= 21;

            if (prevBtn) {
                prevBtn.disabled = curBolme <= 1;
                prevBtn.innerHTML = '← Əvvəlki Bölmə';
                prevBtn.title = curBolme <= 1 ? 'İlk kurikulum bölməsindəsiniz' : `Bölmə ${curBolme - 1}-ə qayıt`;
            }

            if (counter) counter.textContent = `Fərdi Məşq • Bölmə ${curBolme} / 21`;
            if (qIndicator) qIndicator.textContent = `Fərdi Məşq Rejimi (Bölmə ${curBolme})`;

            if (nextBtn) {
                nextBtn.innerHTML = '<span>🔙</span> Lobiyə Qayıt';
                nextBtn.className = 'exam-nav-step-btn practice-exit-step';
                nextBtn.title = 'Fərdi məşqdən çıxıb lobiyə qayıt';
            }

            if (nextSecBtn) {
                nextSecBtn.classList.remove('hidden');
                if (!isFinalSection) {
                    nextSecBtn.disabled = false;
                    nextSecBtn.classList.remove('completed-final');
                    nextSecBtn.innerHTML = `<span class="btn-text">Növbəti Bölmə (${curBolme + 1})</span> <span class="nav-arrow">→</span>`;
                    nextSecBtn.title = `Bölmə ${curBolme + 1}-in tapşırıqlarına keç`;
                } else {
                    nextSecBtn.disabled = true;
                    nextSecBtn.classList.add('completed-final');
                    nextSecBtn.innerHTML = `<span class="btn-text">Sonuncu Bölmə</span> <span class="nav-arrow">✅</span>`;
                    nextSecBtn.title = 'Bütün 21 kurikulum bölməsi tamamlandı';
                }
            }

            if (headerNextSecBtn) {
                headerNextSecBtn.classList.remove('hidden');
                if (!isFinalSection) {
                    headerNextSecBtn.disabled = false;
                    headerNextSecBtn.classList.remove('completed-final');
                    headerNextSecBtn.innerHTML = `<span class="btn-text">Növbəti Bölmə</span> <span class="nav-arrow">→</span>`;
                    headerNextSecBtn.title = `Bölmə ${curBolme + 1}-ə keçid`;
                } else {
                    headerNextSecBtn.disabled = true;
                    headerNextSecBtn.classList.add('completed-final');
                    headerNextSecBtn.innerHTML = `<span class="btn-text">Sonuncu Bölmə</span> <span class="nav-arrow">✅</span>`;
                    headerNextSecBtn.title = 'Bütün 21 kurikulum bölməsi tamamlandı';
                }
            }
        } else {
            if (nextSecBtn) nextSecBtn.classList.add('hidden');
            if (headerNextSecBtn) headerNextSecBtn.classList.add('hidden');

            if (prevBtn) {
                prevBtn.disabled = index === 0;
                prevBtn.innerHTML = '← Əvvəlki Sual';
                prevBtn.title = '';
            }
            if (counter) counter.textContent = `Sual ${index + 1} / ${examState.questions.length}`;
            if (qIndicator) qIndicator.textContent = `Sual ${index + 1} / ${examState.questions.length}`;

            if (nextBtn) {
                if (index === examState.questions.length - 1) {
                    nextBtn.innerHTML = '<span>🏁</span> İmtahanı Bitir';
                    nextBtn.className = 'exam-nav-step-btn primary finish-step';
                    nextBtn.title = 'İmtahanı tamamla və nəticəni hesabla';
                } else {
                    nextBtn.innerHTML = 'Növbəti Sual →';
                    nextBtn.className = 'exam-nav-step-btn primary';
                    nextBtn.title = 'Növbəti suala keç';
                }
            }
        }
    }

    async function testExamCurrentCode() {
        if (!examState.inProgress || !examState.editorInstance) return;
        if (examState.surrenderedQuestions && examState.surrenderedQuestions.has(examState.currentIndex)) {
            showToast('Bu sual üzrə artıq təslim olunub və bal qazanıla bilməz', 'warning');
            return;
        }
        const code = examState.editorInstance.getValue();
        const q = examState.questions[examState.currentIndex];
        const outputText = document.getElementById('exam-test-output-text');
        const outputStatus = document.getElementById('exam-output-status');

        const val = validateCodeSubmission(code, q.starterCode, false, {
            id: q.id,
            serif: q.serif,
            instruction: q.instruction || q.serif,
            solutionCode: q.solutionCode,
            mustContain: q.mustContain,
            disableHardcodeCheck: q.disableHardcodeCheck,
            allowHardcode: q.allowHardcode,
            type: q.type
        });
        if (!val.valid) {
            outputText.textContent = val.message;
            outputText.className = 'exam-test-output-text error';
            outputStatus.textContent = 'Kod tələblərə cavab vermir';
            examState.validatedQuestions.delete(examState.currentIndex);
            updateStepperPillState(examState.currentIndex);
            showToast(val.message, 'warning');
            return;
        }

        const testBtn = document.getElementById('exam-test-code-btn');
        if (testBtn) testBtn.disabled = true;

        examState.userAnswers[examState.currentIndex] = code;
        outputText.textContent = 'İcra olunur...';
        outputText.className = 'exam-test-output-text';
        outputStatus.textContent = 'Test edilir...';

        try {
            const result = await runJavaScript(code);
            const userOut = cleanStr(result.output);
            const expectedOut = cleanStr(q.expectedOutput);

            let isSuccess = false;
            let statusText = '';
            let displayText = '';

            if (result.error) {
                isSuccess = false;
                statusText = 'Xəta baş verdi';
                displayText = `İcra zamanı xəta:\n${result.error}`;
            } else if ((userOut === expectedOut || compareOutputs(userOut, expectedOut)) && (expectedOut === '' ? true : userOut.length > 0)) {
                isSuccess = true;
                statusText = '✅ Düzgün nəticə!';
                displayText = `Çıxış:\n${userOut || '(Boş çıxış)'}\n\n[Əla! Nəticə gözlənilən çıxışla tam uyğundur]`;
            } else {
                isSuccess = false;
                statusText = '⚠️ Nəticə fərqlidir';
                displayText = `Sizin çıxış:\n${userOut || '(Boş çıxış)'}\n\nGözlənilən çıxış:\n${expectedOut}`;
            }

            outputText.textContent = displayText;
            outputText.className = `exam-test-output-text ${isSuccess ? 'success' : 'error'}`;
            outputStatus.textContent = statusText;

            examState.testOutputs[examState.currentIndex] = {
                output: displayText,
                isSuccess,
                statusText
            };

            // Mark as actively tested and validated
            examState.validatedQuestions.add(examState.currentIndex);
            updateStepperPillState(examState.currentIndex);

            // Auto-save test result to practice progress if in practice mode
            if (examState.isPracticeMode && q && q.id) {
                savePracticeQuestionProgress(q.id, code, isSuccess, examState.testOutputs[examState.currentIndex]);
            }
        } catch (execErr) {
            outputText.textContent = `İcra zamanı xəta:\n${execErr.message || String(execErr)}`;
            outputText.className = 'exam-test-output-text error';
            outputStatus.textContent = 'Xəta baş verdi';
        } finally {
            if (testBtn && !(examState.surrenderedQuestions && examState.surrenderedQuestions.has(examState.currentIndex))) {
                testBtn.disabled = false;
            }
            if (outputText && outputText.textContent === 'İcra olunur...') {
                outputText.textContent = 'İcra zamanı vaxt limiti bitdi və ya cavab alına bilmədi.';
                outputText.className = 'exam-test-output-text error';
                if (outputStatus) outputStatus.textContent = 'Xəta baş verdi';
            }
        }
    }

    function promptFinishExam() {
        if (!examState.inProgress) return;
        
        if (examState.isPracticeMode) {
            // Auto-save current practice question before exiting
            const curQ = examState.questions && examState.questions[0];
            if (curQ && curQ.id && examState.editorInstance) {
                savePracticeQuestionProgress(
                    curQ.id,
                    examState.editorInstance.getValue(),
                    examState.validatedQuestions ? examState.validatedQuestions.has(0) : false,
                    examState.testOutputs ? examState.testOutputs[0] : null
                );
            }

            examState.inProgress = false;
            examState.isPracticeMode = false;
            const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');
            const lobbyEl = document.getElementById('exam-lobby');
            if (workspaceEl) workspaceEl.classList.add('hidden');
            if (lobbyEl) lobbyEl.classList.remove('hidden');
            const statusTag = document.querySelector('.exam-status-tag');
            if (statusTag) {
                statusTag.innerHTML = '<span class="pulse-dot"></span> CANLI İMTAHAN';
            }
            showToast('Fərdi məşq rejimi başa çatdı.', 'info');
            return;
        }

        // Save current code to userAnswers only if valid and not surrendered
        if (examState.editorInstance && (!examState.surrenderedQuestions || !examState.surrenderedQuestions.has(examState.currentIndex))) {
            const currentCode = examState.editorInstance.getValue();
            const currentQ = examState.questions[examState.currentIndex];
            if (currentQ && hasValidUserCode(currentCode, currentQ.starterCode)) {
                examState.userAnswers[examState.currentIndex] = currentCode;
            }
        }

        let answeredCount = 0;
        let surrenderedCount = 0;
        examState.questions.forEach((q, idx) => {
            if (examState.surrenderedQuestions && examState.surrenderedQuestions.has(idx)) {
                surrenderedCount++;
            } else {
                const code = examState.userAnswers[idx] || '';
                if (examState.validatedQuestions.has(idx) && hasValidUserCode(code, q.starterCode)) {
                    answeredCount++;
                }
            }
        });

        const unansweredCount = examState.questions.length - answeredCount - surrenderedCount;
        const confirmBody = document.getElementById('exam-confirm-body');
        if (confirmBody) {
            confirmBody.innerHTML = `
                <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.95rem;">
                    <p>İmtahanı vaxtından əvvəl tamamlamaq və bütün cavablarınızı yekun yoxlamaya təhvil vermək istədiyinizə əminsiniz?</p>
                    <div style="background:var(--bg-secondary); border:1px solid var(--border-secondary); border-radius:var(--radius-md); padding:0.85rem 1rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
                            <span>Ümumi sual sayı:</span>
                            <strong>${examState.questions.length}</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; color:var(--success);">
                            <span>Cavablandırılan:</span>
                            <strong>${answeredCount}</strong>
                        </div>
                        ${surrenderedCount > 0 ? `
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; color:#F87171;">
                            <span>Təslim olunan (0 bal):</span>
                            <strong>${surrenderedCount}</strong>
                        </div>` : ''}
                        <div style="display:flex; justify-content:space-between; color:${unansweredCount > 0 ? 'var(--warning)' : 'var(--text-secondary)'};">
                            <span>Cavabsız qalan:</span>
                            <strong>${unansweredCount}</strong>
                        </div>
                    </div>
                    ${unansweredCount > 0 ? `<p style="font-size:0.82rem; color:var(--warning);">⚠️ Diqqət: Cavablandırılmamış suallar səhv olaraq hesablanacaq.</p>` : ''}
                </div>
            `;
        }

        const modal = document.getElementById('exam-confirm-modal');
        if (modal) {
            if (modal.showModal) modal.showModal();
            else modal.classList.remove('hidden');
        }
    }

    async function finishExam(isAutoTimeout = false) {
        const confirmModal = document.getElementById('exam-confirm-modal');
        if (confirmModal) {
            if (confirmModal.close) confirmModal.close();
            else confirmModal.classList.add('hidden');
        }

        if (examState.timerInterval) {
            clearInterval(examState.timerInterval);
            examState.timerInterval = null;
        }

        // Only save current editor content if user actually wrote valid code and not surrendered
        if (examState.editorInstance && (!examState.surrenderedQuestions || !examState.surrenderedQuestions.has(examState.currentIndex))) {
            const currentCode = examState.editorInstance.getValue();
            const currentQ = examState.questions[examState.currentIndex];
            if (currentQ && hasValidUserCode(currentCode, currentQ.starterCode)) {
                examState.userAnswers[examState.currentIndex] = currentCode;
            }
        }

        showToast('Cavablarınız yoxlanılır və qiymətləndirilir...', 'info');

        const reviews = [];
        let correctCount = 0;

        for (let i = 0; i < examState.questions.length; i++) {
            const q = examState.questions[i];
            const userCode = examState.userAnswers[i] || '';
            const expectedOut = cleanStr(q.expectedOutput);
            const isSurrendered = examState.surrenderedQuestions && examState.surrenderedQuestions.has(i);

            let isCorrect = false;
            let userOutput = '';
            let errorMsg = null;

            try {
                if (isSurrendered) {
                    isCorrect = false;
                    errorMsg = 'Təslim olundu (Rəsmi həll göstərildi - 0 bal)';
                } else {
                    const val = validateCodeSubmission(userCode, q.starterCode, false, {
                        id: q.id,
                        serif: q.serif,
                        instruction: q.instruction || q.serif,
                        solutionCode: q.solutionCode,
                        mustContain: q.mustContain,
                        disableHardcodeCheck: q.disableHardcodeCheck,
                        allowHardcode: q.allowHardcode,
                        type: q.type
                    });
                    if (!val.valid) {
                        isCorrect = false;
                        errorMsg = val.message;
                    } else {
                        const runRes = await runJavaScript(userCode);
                        if (runRes.error) {
                            isCorrect = false;
                            errorMsg = runRes.error;
                        } else {
                            userOutput = cleanStr(runRes.output);
                            isCorrect = (userOutput === expectedOut || compareOutputs(userOutput, expectedOut)) && (expectedOut === '' ? true : userOutput.length > 0);
                            if (!isCorrect) {
                                errorMsg = 'Nəticə gözlənilən çıxışla uyğun gəlmir';
                            }
                        }
                    }
                }
            } catch (gradingErr) {
                isCorrect = false;
                errorMsg = 'Qiymətləndirmə zamanı xəta baş verdi: ' + (gradingErr && gradingErr.message ? gradingErr.message : String(gradingErr));
            }

            if (isCorrect) {
                correctCount++;
                if (q && q.id) {
                    if (!state.passedExamQuestions) state.passedExamQuestions = new Set();
                    state.passedExamQuestions.add(q.id);
                }
            }

            reviews.push({
                id: q ? q.id : null,
                questionNumber: i + 1,
                title: q.title,
                sectionTitle: q.sectionTitle,
                difficulty: q.difficulty,
                instruction: q.instruction,
                userCode: userCode || '(Kod yazılmayıb)',
                expectedOutput: expectedOut,
                userOutput: userOutput,
                isCorrect: isCorrect,
                isSurrendered: isSurrendered,
                error: errorMsg
            });
        }

        const totalQuestions = examState.questions.length;
        const percentage = totalQuestions > 0 ? Math.max(0, Math.min(100, Math.round((correctCount / totalQuestions) * 100))) : 0;
        const timeSpentSeconds = Math.max(0, examState.totalSeconds - examState.remainingSeconds);
        const timeSpentMins = Math.floor(timeSpentSeconds / 60);
        const timeSpentSecs = timeSpentSeconds % 60;
        const timeSpentStr = `${timeSpentMins} dəq ${timeSpentSecs} san`;

        let gradeTitle = '';
        if (percentage >= 85) {
            gradeTitle = 'Əla Nəticə!';
        } else if (percentage >= 70) {
            gradeTitle = 'Müvəffəqiyyətlə Keçdiniz!';
        } else if (percentage >= 50) {
            gradeTitle = 'Kafi Nəticə';
        } else {
            gradeTitle = 'Qeyri-kafi (Məşq Edin)';
        }

        const attempt = {
            id: 'exam_' + Date.now(),
            dateStr: new Date().toLocaleDateString('az-AZ', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' }),
            totalQuestions,
            correctCount,
            percentage,
            timeSpentStr,
            gradeTitle,
            passed: percentage >= 60,
            reviews
        };

        saveExamHistoryItem(attempt);
        syncPlatformProgress({ notifyAchievements: true });

        examState.inProgress = false;
        const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');
        const lobbyEl = document.getElementById('exam-lobby');
        if (workspaceEl) workspaceEl.classList.add('hidden');
        if (lobbyEl) lobbyEl.classList.remove('hidden');

        renderExamHistory();

        // Show result modal
        showExamResultModal(attempt);

        if (percentage >= 70) {
            showToast(`Təbriklər! İmtahan nəticəniz: ${correctCount}/${totalQuestions} (%${percentage}) 🎉`, 'success');
            const resultBadge = document.getElementById('exam-result-badge');
            if (resultBadge) miniConfetti(resultBadge);
        } else {
            showToast(`İmtahan yekunlaşdı: ${correctCount}/${totalQuestions} (%${percentage})`, 'info');
        }
    }

    function showExamResultModal(attempt) {
        const modal = document.getElementById('exam-result-modal');
        if (!modal) return;

        const badgeEl = document.getElementById('exam-result-badge');
        if (badgeEl) badgeEl.textContent = attempt.percentage >= 70 ? '🏆' : (attempt.percentage >= 50 ? '👍' : '📚');
        
        const titleEl = document.getElementById('exam-result-title');
        if (titleEl) titleEl.textContent = attempt.gradeTitle;

        const subtitleEl = document.getElementById('exam-result-subtitle');
        if (subtitleEl) subtitleEl.textContent = `Tarix: ${attempt.dateStr} — Sərf edilən vaxt: ${attempt.timeSpentStr}`;

        const body = document.getElementById('exam-result-body');
        const passedClass = attempt.passed ? 'passed' : 'failed';

        let reviewHtml = '';
        if (attempt.reviews && Array.isArray(attempt.reviews)) {
            attempt.reviews.forEach((r, idx) => {
                const itemClass = r.isCorrect ? 'correct' : (r.isSurrendered ? 'wrong surrendered' : 'wrong');
                const icon = r.isCorrect ? '✅' : (r.isSurrendered ? '🏳️' : '❌');
                const badgeClass = r.isCorrect ? 'correct' : (r.isSurrendered ? 'surrendered' : 'wrong');
                const badgeText = r.isCorrect ? 'Düzgün (+1)' : (r.isSurrendered ? 'Təslim olundu (0)' : 'Səhv (0)');

                reviewHtml += `
                    <div class="exam-review-item ${itemClass}">
                        <div class="exam-review-header" onclick="this.nextElementSibling.classList.toggle('hidden')">
                            <div class="review-header-left">
                                <span class="review-icon">${icon}</span>
                                <span class="review-title">Sual ${r.questionNumber}: ${escapeHtml(r.title)}</span>
                            </div>
                            <span class="review-status-badge ${badgeClass}">
                                ${badgeText}
                            </span>
                        </div>
                        <div class="exam-review-body hidden">
                            <div style="font-weight:600; color:var(--text-secondary); font-size:0.8rem;">${escapeHtml(r.sectionTitle || '')}</div>
                            <div><strong>Sual tələbi:</strong> ${r.instruction || ''}</div>
                            <div><strong>Sizin kodunuz:</strong></div>
                            <pre class="review-code-block">${escapeHtml(r.userCode)}</pre>
                            ${r.error ? `<div><strong style="color:var(--error);">Xəta / Status:</strong> <span style="color:var(--error);">${escapeHtml(r.error)}</span></div>` : ''}
                            <div><strong>Sizin çıxış:</strong></div>
                            <pre class="review-code-block">${escapeHtml(r.userOutput || '(Boş çıxış)')}</pre>
                            <div><strong>Gözlənilən çıxış:</strong></div>
                            <pre class="review-code-block" style="border-color:var(--success);">${escapeHtml(r.expectedOutput)}</pre>
                        </div>
                    </div>
                `;
            });
        }

        body.innerHTML = `
            <div class="exam-score-hero">
                <div class="score-info">
                    <h4>${attempt.gradeTitle}</h4>
                    <p>Ümumi ${attempt.totalQuestions} sualdan ${attempt.correctCount} sualı uğurla tamamladınız.</p>
                </div>
                <div class="score-circle ${passedClass}">
                    ${attempt.percentage}%
                    <span>${attempt.correctCount}/${attempt.totalQuestions}</span>
                </div>
            </div>

            <div class="exam-stats-grid">
                <div class="exam-stat-box">
                    <div class="exam-stat-val">${attempt.totalQuestions}</div>
                    <div class="exam-stat-lbl">Ümumi Sual</div>
                </div>
                <div class="exam-stat-box" style="border-color:rgba(34,197,94,0.3);">
                    <div class="exam-stat-val" style="color:var(--success);">${attempt.correctCount}</div>
                    <div class="exam-stat-lbl">Düzgün</div>
                </div>
                <div class="exam-stat-box" style="border-color:rgba(239,68,68,0.3);">
                    <div class="exam-stat-val" style="color:var(--error);">${attempt.totalQuestions - attempt.correctCount}</div>
                    <div class="exam-stat-lbl">Səhv / Boş</div>
                </div>
                <div class="exam-stat-box">
                    <div class="exam-stat-val" style="font-size:1.05rem;">${attempt.timeSpentStr}</div>
                    <div class="exam-stat-lbl">Sərf Olunan Vaxt</div>
                </div>
            </div>

            <div style="font-weight:700; font-size:0.95rem; margin-top:0.5rem; display:flex; justify-content:space-between; align-items:center;">
                <span>Sualların Təhlili və Baxış:</span>
                <span style="font-size:0.78rem; color:var(--text-tertiary); font-weight:normal;">Detalları açmaq üçün üzərinə basın</span>
            </div>
            <div class="exam-review-list">
                ${reviewHtml}
            </div>
        `;

        if (modal.showModal) modal.showModal();
        else modal.classList.remove('hidden');
    }

    // =========================================================================
    // QUM SAATI (HOURGLASS TIME-ATTACK CHALLENGE) CONTROLLER
    // =========================================================================

    function getDiffClass(diff) {
        if (!diff) return 'diff-asan';
        const d = String(diff).toUpperCase().trim();
        if (d === 'ASAN') return 'diff-asan';
        if (d === 'ORTA' || d === 'ORTA-ASAN') return 'diff-orta-asan';
        if (d === 'ÇƏTİN' || d === 'CETIN' || d === 'ORTA-ÇƏTİN' || d === 'ORTA-CETIN') return 'diff-orta-cetin';
        if (d === 'EKSPERT' || d === 'MÜRƏKKƏB' || d === 'MUREKKEB') return 'diff-cetin';
        return 'diff-asan';
    }

    function evaluateHourglassResult(challenge, isCorrect, elapsedSeconds, targetSeconds) {
        const timeRatio = targetSeconds > 0 ? (elapsedSeconds / targetSeconds) : 1;
        let rank = 'C';
        let rankTitle = 'C-Rank (⏳ Vaxt Aşımı)';
        let rankBadge = '⏳';
        let bonusPercent = 0;
        let accuracy = isCorrect ? 100 : 0;
        let rankDesc = '';

        if (isCorrect) {
            if (timeRatio <= 0.50) {
                rank = 'S';
                rankTitle = 'S-Rank (⚡ Super Sürət)';
                rankBadge = '⚡';
                bonusPercent = 50;
                rankDesc = 'Möhtəşəm arxitektura və analitik çeviklik! Tapşırığı hədəf vaxtın 50%-dən az müddətdə səhvsiz tamamladınız (+50% Bonus XP).';
            } else if (timeRatio <= 0.80) {
                rank = 'A';
                rankTitle = 'A-Rank (🚀 Optimal Mühəndis)';
                rankBadge = '🚀';
                bonusPercent = 25;
                rankDesc = 'Optimal mühəndis performansı! Tapşırığı hədəf vaxtın 80%-i daxilində tam dəqiqliklə həll etdiniz (+25% Bonus XP).';
            } else if (timeRatio <= 1.00) {
                rank = 'B';
                rankTitle = 'B-Rank (⏱️ Vaxtında Çatdı)';
                rankBadge = '⏱️';
                bonusPercent = 0;
                rankDesc = 'Uğurlu həll! Tapşırığı təyin olunmuş vaxt limiti çərçivəsində dəqiq tamamladınız.';
            } else {
                rank = 'C';
                rankTitle = 'C-Rank (⏳ Vaxt Aşımı)';
                rankBadge = '⏳';
                bonusPercent = -50;
                rankDesc = 'Kod düzgün icra edildi, lakin təyin olunmuş hədəf vaxt limiti aşıldı (50% XP təyin edildi).';
            }
        } else {
            rank = 'C';
            rankTitle = 'C-Rank (❌ Xətalı Çıxış)';
            rankBadge = '❌';
            bonusPercent = 0;
            rankDesc = 'Konsol çıxışı gözlənilən nəticə ilə uyğun gəlmir və ya icra xətası baş verdi. Kodu yoxlayıb yenidən cəhd edin!';
        }

        const baseXP = (challenge && challenge.baseXP) || 200;
        let earnedXP = 0;
        if (isCorrect) {
            if (bonusPercent > 0) {
                earnedXP = baseXP + Math.round((baseXP * bonusPercent) / 100);
            } else if (bonusPercent < 0) {
                earnedXP = Math.round(baseXP * 0.5);
            } else {
                earnedXP = baseXP;
            }
        }

        return {
            rank,
            rankTitle,
            rankBadge,
            accuracy,
            timeRatio: Math.min(Math.round(timeRatio * 100), 999),
            elapsedSeconds,
            targetSeconds,
            baseXP,
            bonusPercent,
            earnedXP,
            rankDesc,
            isCorrect
        };
    }

    function getHourglassChallenges() {
        if (typeof HOURGLASS_CHALLENGES !== 'undefined' && Array.isArray(HOURGLASS_CHALLENGES) && HOURGLASS_CHALLENGES.length > 0) {
            return HOURGLASS_CHALLENGES;
        }
        if (typeof window !== 'undefined' && Array.isArray(window.HOURGLASS_CHALLENGES) && window.HOURGLASS_CHALLENGES.length > 0) {
            return window.HOURGLASS_CHALLENGES;
        }
        return [];
    }

    function resetHourglassTerminalToIdle() {
        const outputText = document.querySelector('#hourglass-output-text') || 
                           document.querySelector('#hg-output-text') || 
                           document.querySelector('.hourglass-output-text');
        const outputStatus = document.querySelector('#hourglass-output-status') || 
                             document.querySelector('#hg-output-status') || 
                             document.querySelector('.hourglass-output-status');
        const drawer = document.querySelector('#hourglass-output-drawer') || 
                       document.querySelector('.hourglass-output-drawer');

        if (outputText) {
            outputText.textContent = 'Kodu yoxlamaq üçün "▶ Kodu Sınaqdan Keçir" düyməsinə basın...';
            outputText.className = 'hourglass-output-text';
        }
        if (outputStatus) {
            outputStatus.textContent = 'İcra gözlənilir';
            outputStatus.className = 'hourglass-output-status';
        }
        if (drawer) {
            drawer.classList.remove('error', 'success');
        }
    }

    function initHourglassEditor() {
        const editorEl = document.getElementById('hourglass-editor') || document.querySelector('.hourglass-editor-container .code-editor');
        if (!editorEl) return;

        if (hourglassState.editorInstance) {
            window.hourglassEditor = hourglassState.editorInstance;
        registerCodeMirrorForMobileToolbar(hourglassState.editorInstance);
            requestAnimationFrame(() => {
                setTimeout(() => hourglassState.editorInstance && hourglassState.editorInstance.refresh(), 50);
            });
            return;
        }

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        hourglassState.editorInstance = CodeMirror(editorEl, {
            value: '',
            mode: 'javascript',
            theme: isDark ? 'dracula' : 'default',
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            indentUnit: 2,
            tabSize: 2,
            indentWithTabs: false,
            lineWrapping: true,
            viewportMargin: Infinity,
            extraKeys: {
                'Ctrl-Enter': () => testHourglassCode(),
                'Tab': (cm) => cm.replaceSelection('  ', 'end')
            }
        });

        window.hourglassEditor = hourglassState.editorInstance;
        registerCodeMirrorForMobileToolbar(hourglassState.editorInstance);

        hourglassState.editorInstance.on('change', () => {
            if (!hourglassState.inProgress) return;
            const code = hourglassState.editorInstance.getValue();
            if (code && code.trim()) {
                hourglassState.userDrafts[hourglassState.currentChallengeId] = code;
            }
        });

        requestAnimationFrame(() => {
            setTimeout(() => hourglassState.editorInstance && hourglassState.editorInstance.refresh(), 50);
        });
    }

    function renderHourglassChallengeTabs() {
        const navEl = document.getElementById('hourglass-challenges-nav');
        if (!navEl) return;

        const challenges = getHourglassChallenges();
        navEl.innerHTML = '';

        challenges.forEach((ch, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `hg-nav-pill ${ch.id === hourglassState.currentChallengeId ? 'active' : ''} ${state.completedHourglassChallenges && state.completedHourglassChallenges.has(ch.id) ? 'completed' : ''}`;
            btn.textContent = `${idx + 1}. ${ch.title}`;
            btn.title = `${ch.stages} (${ch.difficulty})`;
            btn.addEventListener('click', () => {
                switchHourglassChallenge(ch.id);
            });
            navEl.appendChild(btn);
        });
    }

    function renderHourglassHints(ch) {
        const badgeEl = document.querySelector('#hourglass-hints-count') || 
                        document.querySelector('#hg-hints-badge') || 
                        document.querySelector('.hg-hints-badge');
        const listEl = document.querySelector('#hourglass-hints-list') || 
                       document.querySelector('#hg-hints-list') || 
                       document.querySelector('.hg-hints-list');
        const btnEl = document.querySelector('#hourglass-hint-btn') || 
                      document.querySelector('#hg-reveal-hint-btn') || 
                      document.querySelector('.hg-hint-btn');
        if (!listEl || !btnEl) return;

        const hints = (ch && ch.hints) || [];
        const total = hints.length;
        const revealed = hourglassState.revealedHints || 0;

        if (badgeEl) badgeEl.textContent = `${revealed} / ${total} açılıb`;

        listEl.innerHTML = '';
        for (let i = 0; i < revealed; i++) {
            const item = document.createElement('div');
            item.className = 'hg-hint-item';
            item.innerHTML = `<strong>İpucu ${i + 1}:</strong> ${escapeHtml(hints[i])}`;
            listEl.appendChild(item);
        }

        if (revealed >= total) {
            btnEl.disabled = true;
            btnEl.textContent = '💡 Bütün ipucları açıldı';
        } else {
            btnEl.disabled = false;
            btnEl.textContent = `💡 İpucu göstər (${revealed + 1}/${total})`;
        }
    }

    function renderHourglassWorkspace(challenge) {
        if (!challenge) {
            const challenges = getHourglassChallenges();
            challenge = challenges.find(c => c.id === hourglassState.currentChallengeId) || challenges[0];
            if (!challenge) return;
        }

        // 1. Mərhələ, Çətinlik və XP pill-ləri
        const stagePill = document.querySelector('.hourglass-stage-pill') || 
                          document.querySelector('#hourglass-stages-badge') || 
                          document.querySelector('#hg-challenge-stages') ||
                          document.querySelector('.hg-badge-stage');
        if (stagePill) {
            stagePill.textContent = challenge.stages || 'Mərhələ 1, 2 və 3 (Dövrlər + Obyektlər + String + Formatlama)';
        }

        const diffBadge = document.querySelector('.hourglass-diff-badge') || 
                          document.querySelector('#hourglass-diff-badge') || 
                          document.querySelector('#hg-challenge-diff') ||
                          document.querySelector('.hg-badge-diff');
        if (diffBadge) {
            diffBadge.textContent = challenge.difficulty || 'MÜRƏKKƏB';
            diffBadge.className = `hourglass-diff-badge hg-badge-diff ${getDiffClass(challenge.difficulty)}`;
        }

        const xpEl = document.querySelector('.hourglass-xp-badge') || 
                     document.querySelector('#hourglass-xp-badge') || 
                     document.querySelector('#hg-challenge-xp') ||
                     document.querySelector('.hg-badge-xp');
        if (xpEl) {
            xpEl.textContent = `⚡ +${challenge.baseXP || 200} XP`;
        }

        // 2. Başlıq (Statik "Tapşırıq Başlığı" əvəzinə həqiqi ad)
        const titleEl = document.querySelector('.hourglass-task-title') || 
                        document.querySelector('#hourglass-title') || 
                        document.querySelector('#hg-challenge-title') ||
                        document.querySelector('.hourglass-scenario-title');
        if (titleEl) {
            titleEl.textContent = challenge.title || 'İnteqrasiya Tapşırığı';
        }

        // 3. Real Sistem Ssenarisi
        const scenarioEl = document.querySelector('#hourglass-scenario-text') || 
                           document.querySelector('.hourglass-scenario-content') || 
                           document.querySelector('#hg-challenge-scenario') ||
                           document.querySelector('.hg-scenario-desc');
        if (scenarioEl) {
            scenarioEl.textContent = challenge.scenario || 'Real layihə ssenarisi üzrə məlumatların emalı və arxitektur boru kəmərinin qurulması.';
        }

        // 4. Mərhələli Həll Tələbləri (HTML formatlı ardıcıl addımlar)
        const instrBox = document.querySelector('#hourglass-instructions-box') || 
                         document.querySelector('.hourglass-instructions-content') || 
                         document.querySelector('#hg-challenge-instruction') ||
                         document.querySelector('.hg-instruction-box');
        if (instrBox) {
            instrBox.innerHTML = challenge.instruction || `
                <ol style="margin: 0; padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.35rem;">
                    <li>Gələn məlumat kolleksiyasını düzgün tiplərə çevirin.</li>
                    <li>Biznes qaydalarına uyğun riyazi hesablama və endirimləri tətbiq edin.</li>
                    <li>Nəticəni tələb olunan şablon formatında konsola çıxarın.</li>
                </ol>
            `;
        }

        // 5. Gözlənilən Konsol Çıxışı Qutusu
        const expectedBox = document.querySelector('#hourglass-expected-box') || 
                            document.querySelector('.hourglass-expected-output') || 
                            document.querySelector('#hg-challenge-expected') ||
                            document.querySelector('.hg-expected-box');
        if (expectedBox) {
            expectedBox.textContent = challenge.expectedOutput !== undefined ? challenge.expectedOutput : '';
        }

        // 6. CodeMirror Redaktoruna Başlanğıc Kodunun (starterCode) Yüklənməsi
        const editor = window.hourglassEditor || hourglassState.editorInstance;
        const starter = (hourglassState.userDrafts && hourglassState.userDrafts[challenge.id] && hourglassState.userDrafts[challenge.id].trim())
            ? hourglassState.userDrafts[challenge.id]
            : (challenge.starterCode || '// Kodunuzu buraya yazın\n');
        if (editor) {
            editor.setValue(starter);
            setTimeout(() => editor.refresh && editor.refresh(), 60);
        }

        // 7. İpuclarının Tənzimlənməsi
        renderHourglassHints(challenge);

        // 8. Terminalın İlkin Vəziyyətinin Sıfırlanması (XƏTANIN ARADAN QALDIRILMASI)
        resetHourglassTerminalToIdle();

        // 9. Vaxt düymələri və taymer göstəriciləri
        updateHourglassTimeButtons();
        updateHourglassTimerDisplay();
    }

    const loadHourglassChallengeUI = renderHourglassWorkspace;

    function switchHourglassChallenge(challengeId) {
        const editor = window.hourglassEditor || hourglassState.editorInstance;
        if (editor && hourglassState.currentChallengeId) {
            const code = editor.getValue();
            if (code && code.trim()) {
                hourglassState.userDrafts[hourglassState.currentChallengeId] = code;
            }
        }

        hourglassState.currentChallengeId = challengeId;
        const challenges = getHourglassChallenges();
        const ch = challenges.find(c => c.id === challengeId) || challenges[0];
        if (!ch) return;

        hourglassState.selectedMinutes = ch.defaultMinutes || 10;
        hourglassState.totalSeconds = hourglassState.selectedMinutes * 60;
        hourglassState.remainingSeconds = hourglassState.totalSeconds;
        hourglassState.elapsedSeconds = 0;
        hourglassState.revealedHints = 0;
        hourglassState.isPaused = true;

        renderHourglassWorkspace(ch);
        renderHourglassChallengeTabs();
        stopHourglassTimer();
        updateHourglassTimerDisplay();
        updateHourglassTimerToggleBtn(false);
    }

    function updateHourglassTimerToggleBtn(isRunning) {
        const btn = document.getElementById('hourglass-timer-toggle-btn');
        if (!btn) return;
        const iconEl = btn.querySelector('.toggle-icon');
        const textEl = btn.querySelector('.toggle-text');

        if (isRunning) {
            btn.classList.remove('is-paused');
            btn.classList.add('is-running');
            if (iconEl) iconEl.textContent = '⏸';
            if (textEl) textEl.textContent = 'Dayandır';
            btn.setAttribute('title', 'Taymeri dayandır');
        } else {
            btn.classList.remove('is-running');
            btn.classList.add('is-paused');
            if (iconEl) iconEl.textContent = '▶';
            if (textEl) textEl.textContent = 'Başlat';
            btn.setAttribute('title', 'Taymeri başlat');
        }
    }

    function updateHourglassTimeButtons() {
        const isRunning = hourglassState.inProgress && hourglassState.timerInterval !== null && !hourglassState.isPaused;
        updateHourglassTimerToggleBtn(isRunning);

        const mins = hourglassState.selectedMinutes;
        const selectorEl = document.getElementById('hourglass-time-selector');
        if (selectorEl) {
            selectorEl.classList.toggle('timer-running', isRunning);
        }

        const pillBtns = document.querySelectorAll('#hourglass-time-selector .time-pill-btn, #hourglass-time-selector .hg-time-btn');
        pillBtns.forEach(btn => {
            const btnMins = parseInt(btn.dataset.min || btn.dataset.mins, 10);
            const isSelected = btnMins === mins;
            btn.classList.toggle('active', isSelected);
            if (isRunning) {
                btn.disabled = true;
                btn.classList.add('locked');
            } else {
                btn.disabled = false;
                btn.classList.remove('locked');
            }
        });

        const customDisplay = document.querySelector('#time-stepper-display') || 
                              document.querySelector('#hg-custom-mins-display') || 
                              document.querySelector('.stepper-val') || 
                              document.querySelector('.hg-step-val');
        if (customDisplay) {
            customDisplay.textContent = `${mins} d`;
        }

        const minusBtn = document.querySelector('#time-step-minus') || document.querySelector('#hg-time-minus');
        const plusBtn = document.querySelector('#time-step-plus') || document.querySelector('#hg-time-plus');
        if (minusBtn) {
            minusBtn.disabled = isRunning;
            minusBtn.classList.toggle('locked', isRunning);
        }
        if (plusBtn) {
            plusBtn.disabled = isRunning;
            plusBtn.classList.toggle('locked', isRunning);
        }
    }

    function updateHourglassTimerDisplay() {
        const digitsEl = document.getElementById('hourglass-timer-display') || document.getElementById('hourglass-timer-digits');
        if (!digitsEl) return;

        const rem = hourglassState.remainingSeconds;
        const absSec = Math.abs(rem);
        const mm = String(Math.floor(absSec / 60)).padStart(2, '0');
        const ss = String(absSec % 60).padStart(2, '0');

        if (rem >= 0) {
            digitsEl.textContent = `${mm}:${ss}`;
            digitsEl.classList.remove('overtime');
        } else {
            digitsEl.textContent = `+${mm}:${ss}`;
            digitsEl.classList.add('overtime');
        }

        updateHourglassSandVisual();
    }

    function updateHourglassSandVisual() {
        const topSand = document.getElementById('hg-sand-top');
        const botSand = document.getElementById('hg-sand-bottom');
        const stream = document.getElementById('hg-sand-stream');
        if (!topSand || !botSand || !stream) return;

        const total = hourglassState.totalSeconds || 600;
        const rem = Math.max(0, hourglassState.remainingSeconds);
        const ratio = Math.max(0, Math.min(1, rem / total));

        const topH = (52 * ratio).toFixed(1);
        const topY = (18 + 52 * (1 - ratio)).toFixed(1);
        topSand.setAttribute('height', topH);
        topSand.setAttribute('y', topY);

        const botH = (52 * (1 - ratio)).toFixed(1);
        const botY = (122 - 52 * (1 - ratio)).toFixed(1);
        botSand.setAttribute('height', botH);
        botSand.setAttribute('y', botY);

        if (ratio <= 0) {
            stream.style.opacity = '0';
            stream.style.animationPlayState = 'paused';
        } else if (hourglassState.isPaused) {
            stream.style.opacity = '0.35';
            stream.style.animationPlayState = 'paused';
        } else {
            stream.style.opacity = '1';
            stream.style.animationPlayState = 'running';
        }
    }

    function toggleHourglassTimer() {
        if (hourglassState.timerInterval !== null && !hourglassState.isPaused) {
            pauseHourglassTimer();
        } else {
            startHourglassTimer();
        }
    }

    function pauseHourglassTimer() {
        if (hourglassState.timerInterval) {
            clearInterval(hourglassState.timerInterval);
            hourglassState.timerInterval = null;
        }
        hourglassState.isPaused = true;
        updateHourglassTimerToggleBtn(false);
        updateHourglassSandVisual();
    }

    function startHourglassTimer() {
        if (hourglassState.timerInterval) {
            clearInterval(hourglassState.timerInterval);
            hourglassState.timerInterval = null;
        }
        hourglassState.isPaused = false;
        hourglassState.inProgress = true;
        updateHourglassTimerToggleBtn(true);
        updateHourglassSandVisual();

        const selectorEl = document.getElementById('hourglass-time-selector');
        if (selectorEl) selectorEl.classList.add('timer-running');

        hourglassState.timerInterval = setInterval(() => {
            hourglassState.remainingSeconds--;
            hourglassState.elapsedSeconds++;
            updateHourglassTimerDisplay();
        }, 1000);
    }

    function stopHourglassTimer() {
        if (hourglassState.timerInterval) {
            clearInterval(hourglassState.timerInterval);
            hourglassState.timerInterval = null;
        }
        hourglassState.isPaused = true;
        updateHourglassTimerToggleBtn(false);
        updateHourglassSandVisual();

        const selectorEl = document.getElementById('hourglass-time-selector');
        if (selectorEl) selectorEl.classList.remove('timer-running');
    }

    function openHourglassWorkspace(challengeId = null) {
        const lobbyEl = document.getElementById('exam-lobby');
        const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');
        const hourglassEl = document.getElementById('hourglass-workspace');

        if (lobbyEl) lobbyEl.classList.add('hidden');
        if (workspaceEl) workspaceEl.classList.add('hidden');
        if (hourglassEl) hourglassEl.classList.remove('hidden');

        hourglassState.inProgress = true;
        initHourglassEditor();

        const challenges = getHourglassChallenges();
        const targetId = challengeId || hourglassState.currentChallengeId || (challenges[0] && challenges[0].id) || 'hg-1';
        switchHourglassChallenge(targetId);

        showToast('⏳ Qum Saatı rejiminə daxil oldunuz. Uğurlar!', 'info');
    }

    function closeHourglassWorkspace() {
        stopHourglassTimer();
        hourglassState.inProgress = false;

        const lobbyEl = document.getElementById('exam-lobby');
        const workspaceEl = document.getElementById('exam-workspace') || document.getElementById('exam-active-session');
        const hourglassEl = document.getElementById('hourglass-workspace');

        if (hourglassEl) hourglassEl.classList.add('hidden');
        if (workspaceEl) workspaceEl.classList.add('hidden');
        if (lobbyEl) lobbyEl.classList.remove('hidden');

        renderExamHistory();
    }

    async function testHourglassCode() {
        const editor = window.hourglassEditor || hourglassState.editorInstance;
        if (!editor) return false;

        const challenges = getHourglassChallenges();
        const ch = challenges.find(c => c.id === hourglassState.currentChallengeId);
        if (!ch) return false;

        const code = editor.getValue();
        const outputText = document.querySelector('#hourglass-output-text') || 
                           document.querySelector('#hg-output-text') || 
                           document.querySelector('.hourglass-output-text');
        const outputStatus = document.querySelector('#hourglass-output-status') || 
                             document.querySelector('#hg-output-status') || 
                             document.querySelector('.hourglass-output-status');

        if (outputStatus) {
            outputStatus.textContent = 'İcra olunur...';
            outputStatus.className = 'hourglass-output-status';
        }

        try {
            const result = await runJavaScript(code, 3000);
            const userOutput = cleanStr(result.output);
            const expectedOutput = cleanStr(ch.expectedOutput);

            let isCorrect = false;
            if (result.error) {
                if (outputStatus) {
                    outputStatus.textContent = 'İcra Xətası';
                    outputStatus.className = 'hourglass-output-status error';
                }
                if (outputText) {
                    outputText.textContent = `[XƏTA]: ${result.error}\n\nİzah: ${explainError(result.error)}`;
                }
            } else {
                isCorrect = (userOutput === expectedOutput || compareOutputs(userOutput, expectedOutput)) && (expectedOutput === '' ? true : userOutput.length > 0);
                if (isCorrect) {
                    if (outputStatus) {
                        outputStatus.textContent = 'Uğurlu (100% Uyğun)';
                        outputStatus.className = 'hourglass-output-status success';
                    }
                    if (outputText) {
                        outputText.textContent = `✓ Çıxış tamamilə düzgündür!\n\n${userOutput}`;
                    }
                } else {
                    if (outputStatus) {
                        outputStatus.textContent = 'Çıxış Fərqlidir';
                        outputStatus.className = 'hourglass-output-status error';
                    }
                    if (outputText) {
                        outputText.textContent = `Sizin çıxış:\n${userOutput || '(Boş çıxış)'}\n\nGözlənilən çıxış:\n${expectedOutput}`;
                    }
                }
            }
            return isCorrect;
        } catch (e) {
            if (outputStatus) {
                outputStatus.textContent = 'İcra Xətası';
                outputStatus.className = 'hourglass-output-status error';
            }
            if (outputText) {
                outputText.textContent = `[XƏTA]: ${e.message || String(e)}`;
            }
            return false;
        }
    }

    async function submitHourglassChallenge() {
        const editor = window.hourglassEditor || hourglassState.editorInstance;
        if (!editor) return;

        const challenges = getHourglassChallenges();
        const ch = challenges.find(c => c.id === hourglassState.currentChallengeId);
        if (!ch) return;

        stopHourglassTimer();

        const isCorrect = await testHourglassCode();
        const evalResult = evaluateHourglassResult(ch, isCorrect, hourglassState.elapsedSeconds, hourglassState.totalSeconds);
        hourglassState.lastEvalResult = evalResult;

        if (isCorrect) {
            if (!state.completedHourglassChallenges) {
                state.completedHourglassChallenges = new Set();
            }
            state.completedHourglassChallenges.add(ch.id);
            saveProgress();

            try {
                let history = [];
                if (typeof StorageEngine !== 'undefined') {
                    const stored = StorageEngine.getItemSync('jsoyren_hourglass_history');
                    if (stored) history = (typeof stored === 'string') ? JSON.parse(stored) : (Array.isArray(stored) ? stored : []);
                }
                if (history.length === 0) {
                    const historyRaw = localStorage.getItem('jsoyren_hourglass_history') || '[]';
                    history = JSON.parse(historyRaw);
                }
                history.unshift({
                    id: ch.id,
                    title: ch.title,
                    rank: evalResult.rank,
                    rankTitle: evalResult.rankTitle,
                    accuracy: evalResult.accuracy,
                    timeSpent: evalResult.elapsedSeconds,
                    targetTime: evalResult.targetSeconds,
                    earnedXP: evalResult.earnedXP,
                    date: new Date().toISOString()
                });
                const pruned = history.slice(0, 50);
                if (typeof StorageEngine !== 'undefined') {
                    StorageEngine.setItem('jsoyren_hourglass_history', pruned);
                } else {
                    localStorage.setItem('jsoyren_hourglass_history', JSON.stringify(pruned));
                }
            } catch (e) {}

            renderHourglassChallengeTabs();
            showToast(`🏆 ${evalResult.rankTitle} qazandınız! (+${evalResult.earnedXP} XP)`, 'success');
        }

        showHourglassResultModal(evalResult, ch);
    }

    function showHourglassResultModal(evalResult, ch) {
        const modal = document.getElementById('hourglass-result-modal');
        if (!modal) return;

        const rankBadge = document.getElementById('hg-result-rank-badge');
        if (rankBadge) {
            rankBadge.textContent = evalResult.rankBadge;
            rankBadge.className = `hourglass-rank-badge-glow rank-${evalResult.rank.toLowerCase()}`;
        }

        const titleEl = document.getElementById('hg-result-title');
        if (titleEl) {
            titleEl.textContent = evalResult.isCorrect ? 'Sınaq Tamamlandı!' : 'Sınaq Nəticəsi';
        }

        const subtitleEl = document.getElementById('hg-result-subtitle');
        if (subtitleEl) subtitleEl.textContent = ch.title;

        const rankTitleEl = document.getElementById('hg-result-rank-title');
        if (rankTitleEl) rankTitleEl.textContent = `${evalResult.rank}-Rank`;

        const rankSubEl = document.getElementById('hg-result-rank-sub');
        if (rankSubEl) rankSubEl.textContent = evalResult.rankTitle;

        const accEl = document.getElementById('hg-result-accuracy');
        if (accEl) accEl.textContent = `${evalResult.accuracy}%`;

        const timeSpentEl = document.getElementById('hg-result-time-spent');
        if (timeSpentEl) {
            const mm = String(Math.floor(evalResult.elapsedSeconds / 60)).padStart(2, '0');
            const ss = String(evalResult.elapsedSeconds % 60).padStart(2, '0');
            timeSpentEl.textContent = `${mm}:${ss}`;
        }

        const timeRatioEl = document.getElementById('hg-result-time-ratio');
        if (timeRatioEl) {
            timeRatioEl.textContent = `Hədəf vaxtın ${evalResult.timeRatio}%-i`;
        }

        const earnedXpEl = document.getElementById('hg-result-earned-xp');
        if (earnedXpEl) {
            earnedXpEl.textContent = `+${evalResult.earnedXP} XP`;
        }

        const xpDetailEl = document.getElementById('hg-result-xp-detail');
        if (xpDetailEl) {
            if (evalResult.bonusPercent > 0) {
                const bonus = Math.round((evalResult.baseXP * evalResult.bonusPercent) / 100);
                xpDetailEl.textContent = `${evalResult.baseXP} XP + ${bonus} Bonus (%${evalResult.bonusPercent})`;
            } else if (evalResult.bonusPercent < 0) {
                xpDetailEl.textContent = `${evalResult.baseXP} XP (Vaxt aşımı -50%)`;
            } else {
                xpDetailEl.textContent = `${evalResult.baseXP} Baza XP`;
            }
        }

        const feedbackEl = document.getElementById('hg-result-feedback');
        if (feedbackEl) {
            feedbackEl.innerHTML = `<strong>Rəy və Təhlil:</strong> ${escapeHtml(evalResult.rankDesc)}`;
        }

        if (modal.showModal) modal.showModal();
        else modal.classList.remove('hidden');
    }

    let hourglassListenersInitialized = false;

    function initHourglassMode() {
        if (hourglassListenersInitialized) return;
        hourglassListenersInitialized = true;

        const hgBtn = document.getElementById('exam-hourglass-btn');
        if (hgBtn) {
            hgBtn.onclick = () => openHourglassWorkspace();
        }

        const backBtn = document.getElementById('hourglass-back-btn');
        if (backBtn) {
            backBtn.onclick = () => closeHourglassWorkspace();
        }

        const toggleBtn = document.getElementById('hourglass-timer-toggle-btn');
        if (toggleBtn) {
            toggleBtn.onclick = () => toggleHourglassTimer();
        }

        document.querySelectorAll('#hourglass-time-selector .time-pill-btn, #hourglass-time-selector .hg-time-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (hourglassState.inProgress && hourglassState.timerInterval !== null && !hourglassState.isPaused) {
                    showToast('Taymer artıq aktivdir. Vaxtı dəyişmək üçün tapşırığı dayandırın və ya sıfırlayın.', 'warning');
                    return;
                }
                const mins = parseInt(btn.dataset.min || btn.dataset.mins, 10);
                if (mins && mins > 0) {
                    hourglassState.selectedMinutes = mins;
                    hourglassState.totalSeconds = mins * 60;
                    hourglassState.remainingSeconds = hourglassState.totalSeconds;
                    hourglassState.elapsedSeconds = 0;
                    updateHourglassTimeButtons();
                    updateHourglassTimerDisplay();
                }
            });
        });

        const minusBtn = document.querySelector('#time-step-minus') || document.getElementById('hg-time-minus');
        if (minusBtn) {
            minusBtn.addEventListener('click', () => {
                if (hourglassState.inProgress && hourglassState.timerInterval !== null && !hourglassState.isPaused) {
                    showToast('Taymer artıq aktivdir. Vaxtı dəyişmək üçün tapşırığı dayandırın və ya sıfırlayın.', 'warning');
                    return;
                }
                if (hourglassState.selectedMinutes > 1) {
                    hourglassState.selectedMinutes--;
                    hourglassState.totalSeconds = hourglassState.selectedMinutes * 60;
                    hourglassState.remainingSeconds = hourglassState.totalSeconds;
                    hourglassState.elapsedSeconds = 0;
                    updateHourglassTimeButtons();
                    updateHourglassTimerDisplay();
                }
            });
        }

        const plusBtn = document.querySelector('#time-step-plus') || document.getElementById('hg-time-plus');
        if (plusBtn) {
            plusBtn.addEventListener('click', () => {
                if (hourglassState.inProgress && hourglassState.timerInterval !== null && !hourglassState.isPaused) {
                    showToast('Taymer artıq aktivdir. Vaxtı dəyişmək üçün tapşırığı dayandırın və ya sıfırlayın.', 'warning');
                    return;
                }
                if (hourglassState.selectedMinutes < 60) {
                    hourglassState.selectedMinutes++;
                    hourglassState.totalSeconds = hourglassState.selectedMinutes * 60;
                    hourglassState.remainingSeconds = hourglassState.totalSeconds;
                    hourglassState.elapsedSeconds = 0;
                    updateHourglassTimeButtons();
                    updateHourglassTimerDisplay();
                }
            });
        }

        const hintBtn = document.querySelector('#hourglass-hint-btn') || document.getElementById('hg-reveal-hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => {
                const challenges = getHourglassChallenges();
                const ch = challenges.find(c => c.id === hourglassState.currentChallengeId);
                if (ch && ch.hints && (hourglassState.revealedHints || 0) < ch.hints.length) {
                    hourglassState.revealedHints = (hourglassState.revealedHints || 0) + 1;
                    renderHourglassHints(ch);
                }
            });
        }

        const resetBtn = document.querySelector('#hg-reset-code-btn') || document.querySelector('.hourglass-reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                const challenges = getHourglassChallenges();
                const ch = challenges.find(c => c.id === hourglassState.currentChallengeId);
                const editor = window.hourglassEditor || hourglassState.editorInstance;
                if (ch && editor) {
                    const starter = ch.starterCode || '// Kodunuzu buraya yazın\n';
                    editor.setValue(starter);
                    if (hourglassState.userDrafts) {
                        delete hourglassState.userDrafts[ch.id];
                    }
                    stopHourglassTimer();
                    hourglassState.totalSeconds = hourglassState.selectedMinutes * 60;
                    hourglassState.remainingSeconds = hourglassState.totalSeconds;
                    hourglassState.elapsedSeconds = 0;
                    hourglassState.isPaused = true;
                    updateHourglassTimerDisplay();
                    updateHourglassTimerToggleBtn(false);
                    resetHourglassTerminalToIdle();
                    showToast('Tapşırıq və taymer sıfırlandı', 'info');
                }
            });
        }

        const testBtn = document.querySelector('#hg-test-code-btn') || document.querySelector('.hourglass-test-btn');
        if (testBtn) {
            testBtn.addEventListener('click', () => testHourglassCode());
        }

        const submitBtn = document.querySelector('#hg-submit-btn') || document.querySelector('.hourglass-submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => submitHourglassChallenge());
        }

        const retryBtn = document.getElementById('hg-result-retry-btn');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                const modal = document.getElementById('hourglass-result-modal');
                if (modal && modal.close) modal.close();
                else if (modal) modal.classList.add('hidden');
                switchHourglassChallenge(hourglassState.currentChallengeId);
            });
        }

        const nextBtn = document.getElementById('hg-result-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const modal = document.getElementById('hourglass-result-modal');
                if (modal && modal.close) modal.close();
                else if (modal) modal.classList.add('hidden');
                const challenges = getHourglassChallenges();
                const curIdx = challenges.findIndex(c => c.id === hourglassState.currentChallengeId);
                const nextIdx = (curIdx + 1) % challenges.length;
                switchHourglassChallenge(challenges[nextIdx].id);
            });
        }

        const modalCloseBtn = document.getElementById('hg-result-close-btn');
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                const modal = document.getElementById('hourglass-result-modal');
                if (modal && modal.close) modal.close();
                else if (modal) modal.classList.add('hidden');
                closeHourglassWorkspace();
            });
        }
    }

    // ---- Event Listeners ----
    
    // ---- Bootcamp Roadmap & Ecosystem Architecture Module ----
    function getFormattedAzDate() {
        const months = [
            "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
            "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
        ];
        const d = new Date();
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    // ========================================================
    // DYNAMIC STREAK FLAME & TIERS MANAGER (ARDICIL GÜN)
    // ========================================================
    const STREAK_TIERS = {
        1: {
            tier: 1,
            className: 'flame-tier-1',
            activeClass: 'flame-tier-1-active',
            name: 'Közərmə',
            color: '#F97316',
            minDays: 1,
            maxDays: 3,
            nextMilestone: 4,
            desc: 'İstiqanlı başlanğıc! Kodlaşdırma vərdişiniz közərir.'
        },
        2: {
            tier: 2,
            className: 'flame-tier-2',
            activeClass: 'flame-tier-2-active',
            name: 'Alov Qığılcımı',
            color: '#EF4444',
            minDays: 4,
            maxDays: 7,
            nextMilestone: 8,
            desc: 'Fırtınalı qığılcım! Ardıcıl öyrənmə enerjiniz alovlanır.'
        },
        3: {
            tier: 3,
            className: 'flame-tier-3',
            activeClass: 'flame-tier-3-active',
            name: 'Bənövşəyi Qüvvə',
            color: '#A855F7',
            minDays: 8,
            maxDays: 14,
            nextMilestone: 15,
            desc: 'Dərin fokus və bənövşəyi şüa! Bir həftəlik səddi qırdınız.'
        },
        4: {
            tier: 4,
            className: 'flame-tier-4',
            activeClass: 'flame-tier-4-active',
            name: 'Plazma Alqoritmi',
            color: '#06B6D4',
            minDays: 15,
            maxDays: 29,
            nextMilestone: 30,
            desc: 'Yüksək gərginlikli plazma! İki həftədən çox fasiləsiz praktika.'
        },
        5: {
            tier: 5,
            className: 'flame-tier-5',
            activeClass: 'flame-tier-5-active',
            name: 'Əfsanəvi Supernova',
            color: '#FBBF24',
            minDays: 30,
            maxDays: Infinity,
            nextMilestone: null,
            desc: 'Maksimum zirvə! 30+ gün ardıcıl əfsanəvi proqramçı intizamı.'
        }
    };

    function getStreakTier(days) {
        const count = Math.max(1, parseInt(days || 1, 10));
        if (count >= 30) return STREAK_TIERS[5];
        if (count >= 15) return STREAK_TIERS[4];
        if (count >= 8) return STREAK_TIERS[3];
        if (count >= 4) return STREAK_TIERS[2];
        return STREAK_TIERS[1];
    }

    function getStreakData() {
        let parsed = null;
        try {
            if (typeof StorageEngine !== 'undefined') {
                const stored = StorageEngine.getItemSync('jsoyren_streak_data');
                if (stored) parsed = (typeof stored === 'string') ? JSON.parse(stored) : stored;
            }
            if (!parsed) {
                const raw = localStorage.getItem('jsoyren_streak_data');
                if (raw) parsed = JSON.parse(raw);
            }
        } catch (e) {
            parsed = null;
        }

        const legacyStreak = parseInt(
            ((typeof StorageEngine !== 'undefined') ? StorageEngine.getItemSync('jsoyren_streak') : null) ||
            localStorage.getItem('jsoyren_streak') || '1',
            10
        );
        const legacyDate = ((typeof StorageEngine !== 'undefined') ? StorageEngine.getItemSync('jsoyren_last_active_date') : null) ||
            localStorage.getItem('jsoyren_last_active_date');

        const streak = parsed && typeof parsed.streak === 'number' ? parsed.streak : (legacyStreak || 1);
        const lastActiveDate = parsed && parsed.lastActiveDate ? parsed.lastActiveDate : legacyDate;

        return {
            streak,
            lastActiveDate,
            bestStreak: parsed && typeof parsed.bestStreak === 'number' ? parsed.bestStreak : Math.max(streak, legacyStreak || 1),
            tier: parsed && typeof parsed.tier === 'number' ? parsed.tier : getStreakTier(streak).tier
        };
    }

    function updateStreakFlame(consecutiveDays, options = {}) {
        const streak = Math.max(1, parseInt(consecutiveDays || 1, 10));
        const tier = getStreakTier(streak);

        // Update day count text in stats bar
        const daysCountEl = document.getElementById('streak-days-count');
        if (daysCountEl) {
            daysCountEl.textContent = streak;
            daysCountEl.style.color = tier.color;
        }

        // Backward compatibility for legacy hero element
        const heroCountEl = document.getElementById('hero-streak-count');
        if (heroCountEl) {
            heroCountEl.textContent = `${streak} gün 🔥`;
        }

        // Keep heatmap stat in sync
        const heatmapStreakEl = document.getElementById('heatmap-current-streak');
        if (heatmapStreakEl) {
            heatmapStreakEl.textContent = `${streak} gün 🔥`;
        }

        // Update flame container
        const flameEl = document.getElementById('streak-flame');
        if (flameEl) {
            // Remove stale tier classes
            flameEl.classList.remove('flame-tier-1', 'flame-tier-2', 'flame-tier-3', 'flame-tier-4', 'flame-tier-5');
            flameEl.classList.add(tier.className);

            const wrapEl = flameEl.closest('.stat-streak-wrap') || flameEl.parentElement;
            if (wrapEl) {
                wrapEl.classList.remove('flame-tier-1-active', 'flame-tier-2-active', 'flame-tier-3-active', 'flame-tier-4-active', 'flame-tier-5-active');
                wrapEl.classList.add(tier.activeClass);
            }

            // Construct tooltips in Azerbaijani
            const nextTarget = tier.nextMilestone ? `${tier.nextMilestone} gün` : 'Zirvə';
            const titleTooltip = `🔥 ${streak} Günlük Seriya: ${tier.name} (Növbəti pillə: ${nextTarget})`;
            const miniTooltip = `🔥 ${streak} Gün: ${tier.name} (Növbəti: ${nextTarget})`;

            flameEl.setAttribute('title', titleTooltip);
            flameEl.setAttribute('data-tooltip', miniTooltip);
            flameEl.setAttribute('aria-label', titleTooltip);

            // Ensure inner markup with embers for particle effects
            if (!flameEl.querySelector('.flame-core')) {
                flameEl.innerHTML = `
                    <span class="flame-core">🔥</span>
                    <span class="flame-particles" aria-hidden="true">
                        <span class="ember ember-1"></span>
                        <span class="ember ember-2"></span>
                        <span class="ember ember-3"></span>
                    </span>
                `;
            }

            // Interactive celebration on click
            if (!flameEl.dataset.bound) {
                flameEl.dataset.bound = 'true';
                flameEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (typeof miniConfetti === 'function') {
                        miniConfetti(flameEl);
                    }
                    showToast(`🔥 ${streak} Günlük Seriya: ${tier.name}! ${tier.desc}`, 'info');
                });
            }

            // Milestone celebratory trigger
            if ((options.tierUpgraded || options.streakIncreased) && typeof miniConfetti === 'function') {
                miniConfetti(flameEl);
                if (options.tierUpgraded) {
                    showToast(`Təbriklər! 🔥 Alov pilləniz yüksəldi: "${tier.name}" (${streak} gün)!`, 'success');
                }
            }
        }
    }

    function updateDailyStreak() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        const data = getStreakData();
        let { streak = 1, lastActiveDate, bestStreak = 1, tier: prevTier = 1 } = data;
        let streakIncreased = false;

        if (!lastActiveDate || typeof lastActiveDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(lastActiveDate)) {
            streak = 1;
            lastActiveDate = todayStr;
            bestStreak = 1;
        } else if (lastActiveDate !== todayStr) {
            const [ly, lm, ld] = lastActiveDate.split('-').map(Number);
            const lastTime = Date.UTC(ly, lm - 1, ld);
            const currTime = Date.UTC(year, Number(month) - 1, Number(day));
            const diffDays = Math.round((currTime - lastTime) / (1000 * 60 * 60 * 24));

            if (isNaN(diffDays) || diffDays < 0 || diffDays > 1) {
                streak = 1;
            } else if (diffDays === 1) {
                streak++;
                streakIncreased = true;
            }
            lastActiveDate = todayStr;
        }

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        const currentTierObj = getStreakTier(streak);
        const newTier = currentTierObj.tier;
        const tierUpgraded = newTier > prevTier;

        const updatedData = {
            streak,
            lastActiveDate,
            bestStreak,
            tier: newTier
        };

        try {
            if (typeof StorageEngine !== 'undefined') {
                StorageEngine.setItem('jsoyren_streak_data', updatedData);
                StorageEngine.setItem('jsoyren_streak', streak.toString());
                StorageEngine.setItem('jsoyren_last_active_date', lastActiveDate);
            } else {
                localStorage.setItem('jsoyren_streak_data', JSON.stringify(updatedData));
                localStorage.setItem('jsoyren_streak', streak.toString());
                localStorage.setItem('jsoyren_last_active_date', lastActiveDate);
            }
        } catch (e) {}

        if (state.user) {
            state.user.streakDays = streak;
            state.user.lastActiveDate = lastActiveDate;
        }

        updateStreakFlame(streak, { streakIncreased, tierUpgraded });

        return streak;
    }

    const activeRoadmapMeta = (typeof window !== 'undefined' && window.ROADMAP_METADATA) 
        ? window.ROADMAP_METADATA 
        : (typeof global !== 'undefined' && global.ROADMAP_METADATA ? global.ROADMAP_METADATA : []);

    function renderRoadmap() {
        if (typeof window !== 'undefined' && typeof window.renderRoadmap === 'function') {
            return window.renderRoadmap({
                state,
                curriculum: CURRICULUM,
                navigateToTopic,
                showToast
            });
        }

        // 5-Stage Local Engine Fallback
        const container = document.getElementById('roadmap-phases-container');
        if (!container) return 0;
        container.innerHTML = '';

        const stages = (typeof window !== 'undefined' && window.ROADMAP_STAGES) ? window.ROADMAP_STAGES : [
            { stage: 1, num: "01", title: "Proqramlaşdırmanın Təməlləri", theme: "JavaScript Sintaksisi və Alqoritmik Məntiq", desc: "JavaScript dilinin sintaksisi, məlumat tipləri, riyazi və məntiqi operatorlar, şərt budaqları və təməl dövrlər.", range: "Bölmə 01 – 05", accent: "#10B981", accentRgb: "16, 185, 129", secIndices: [0, 1, 2, 3, 4] },
            { stage: 2, num: "02", title: "Dərinləşmə və Məlumat Strukturları", theme: "Funksiyalar, Obyektlər və Müasir ES6+", desc: "Massiv kolleksiyaları, funksiyalar, obyektlər, JSON, string metodları, xəta idarəetməsi, ES6 OOP və asinxronluq.", range: "Bölmə 06 – 13", accent: "#3B82F6", accentRgb: "59, 130, 246", secIndices: [5, 6, 7, 8, 9, 10, 11, 12] },
            { stage: 3, num: "03", title: "DOM, Hadisələr və Web API-lər", theme: "İnteraktiv Brauzer Mühiti və Şəbəkə", desc: "DOM ağacı, hadisə dinləyiciləri, forma validasiyası, brauzer yaddaşı (localStorage) və Fetch şəbəkə sorğuları.", range: "Bölmə 14 – 17", accent: "#F59E0B", accentRgb: "245, 158, 11", secIndices: [13, 14, 15, 16] },
            { stage: 4, num: "04", title: "Server Tərəfli JavaScript", theme: "Node.js Runtime və Server İnfrastrukturu", desc: "V8/Libuv icra mühiti, daxili fs/path modulları, npm ekosistemi, HTTP protokolu və Express.js arxitekturası.", range: "Bölmə 18 – 19", accent: "#8B5CF6", accentRgb: "139, 92, 246", secIndices: [17, 18] },
            { stage: 5, num: "05", title: "Full-Stack İnteqrasiya və Təhlükəsizlik", theme: "İstehsalata Hazır Arxitektura və Verilənlər Bazası", desc: "RESTful API konvensiyaları, tam CRUD əməliyyatları, mərkəzi xəta middleware-i, SQL/NoSQL əlaqəsi və CORS təhlükəsizliyi.", range: "Bölmə 20 – 21", accent: "#F43F5E", accentRgb: "244, 63, 94", secIndices: [19, 20] }
        ];

        let completedSectionsCount = 0;

        stages.forEach((stg, stgIdx) => {
            let stageSolvedSecs = 0;
            const stageTotalSecs = stg.secIndices.length;

            const stageBlock = document.createElement('div');
            stageBlock.className = 'roadmap-stage-block';
            stageBlock.dataset.stage = stg.stage;
            stageBlock.style.setProperty('--stage-accent', stg.accent);
            stageBlock.style.setProperty('--stage-accent-rgb', stg.accentRgb);

            const cardsGrid = document.createElement('div');
            cardsGrid.className = 'phase-cards-grid roadmap-stage-cards-grid';
            cardsGrid.id = `phase-cards-${stg.stage}`;

            stg.secIndices.forEach(secIdx => {
                const meta = activeRoadmapMeta[secIdx] || { num: String(secIdx + 1).padStart(2, '0'), title: `Bölmə ${secIdx + 1}`, desc: '', tags: [], diffClass: 'orta', difficulty: 'Orta', secIndex: secIdx };
                const sec = CURRICULUM[secIdx];
                const subtopicsCount = sec && sec.topics ? sec.topics.length : 0;
                
                let completedTopicsCount = 0;
                let solvedInSec = 0;
                let totalChallenges = 0;

                if (sec && Array.isArray(sec.topics)) {
                    sec.topics.forEach(t => {
                        if (state.completedTopics && state.completedTopics.has(t.id)) completedTopicsCount++;
                        if (Array.isArray(t.exercises)) {
                            totalChallenges += t.exercises.length;
                            t.exercises.forEach(ex => { if (state.completedExercises && state.completedExercises.has(ex.id)) solvedInSec++; });
                        } else if (t.exercise && t.exercise.id) {
                            totalChallenges += 1;
                            if (state.completedExercises && state.completedExercises.has(t.exercise.id)) solvedInSec++;
                        }
                        if (Array.isArray(t.bugFixes)) {
                            totalChallenges += t.bugFixes.length;
                            t.bugFixes.forEach(bf => { if (state.completedBugFixes && state.completedBugFixes.has(bf.id)) solvedInSec++; });
                        } else if (t.bugFix && t.bugFix.id) {
                            totalChallenges += 1;
                            if (state.completedBugFixes && state.completedBugFixes.has(t.bugFix.id)) solvedInSec++;
                        }
                    });
                }

                const isCompleted = (subtopicsCount > 0 && completedTopicsCount >= subtopicsCount) || (totalChallenges > 0 && solvedInSec >= totalChallenges);
                if (isCompleted) {
                    stageSolvedSecs++;
                    completedSectionsCount++;
                }

                const statusKey = isCompleted ? 'completed' : (completedTopicsCount > 0 || solvedInSec > 0 ? 'in-progress' : 'not-started');
                const statusText = isCompleted ? 'Tamamlandı ✓' : (completedTopicsCount > 0 || solvedInSec > 0 ? 'Davam edir' : 'Başlanmayıb');
                const pct = isCompleted ? 100 : (totalChallenges > 0 ? Math.max(5, Math.min(95, Math.round((solvedInSec / totalChallenges) * 100))) : 0);

                const card = document.createElement('div');
                card.className = `roadmap-card stage-card-${stg.stage}`;
                card.dataset.sectionIndex = secIdx;
                card.dataset.stage = stg.stage;

                card.innerHTML = `
                    <div class="card-watermark">${meta.num}</div>
                    <div class="card-top">
                        <span class="card-pill">Bölmə ${meta.num}</span>
                        <div class="card-badges-wrap">
                            <span class="card-difficulty-pill diff-${meta.diffClass || 'orta'}">${meta.difficulty || 'Orta'}</span>
                            <span class="card-status-badge status-${statusKey}">${statusText}</span>
                        </div>
                    </div>
                    <h3 class="card-title">${meta.title}</h3>
                    <p class="card-desc">${meta.desc}</p>
                    
                    <div class="card-meta-counts">
                        <span class="meta-item"><span class="meta-icon">📖</span> ${subtopicsCount} mövzu</span>
                        <span class="meta-divider">•</span>
                        <span class="meta-item"><span class="meta-icon">⚡</span> ${totalChallenges} tapşırıq</span>
                    </div>

                    <ul class="card-tags">
                        ${(meta.tags || []).map(t => `<li>${t}</li>`).join('')}
                    </ul>

                    <div class="card-progress-footer">
                        <div class="card-progress-bar">
                            <div class="card-progress-fill" style="width: ${pct}%;"></div>
                        </div>
                        <span class="card-progress-label">${isCompleted ? 'Tamamlandı ✓' : `${solvedInSec}/${totalChallenges} həll edilib`}</span>
                    </div>
                `;

                card.addEventListener('click', () => {
                    if (CURRICULUM && CURRICULUM[secIdx]) {
                        const targetSec = CURRICULUM[secIdx];
                        const firstUncompleted = targetSec.topics.find(t => !state.completedTopics.has(t.id));
                        const targetTopic = firstUncompleted || targetSec.topics[0];
                        if (targetTopic) {
                            navigateToTopic(targetTopic.id);
                            showToast(`"${targetSec.title}" dərslərinə keçdiniz! 🚀`, 'info');
                        }
                    }
                });

                cardsGrid.appendChild(card);
            });

            const isStageFullyCompleted = stageSolvedSecs === stageTotalSecs && stageTotalSecs > 0;
            const isStageInProgress = stageSolvedSecs > 0 && !isStageFullyCompleted;
            const stagePct = stageTotalSecs > 0 ? Math.round((stageSolvedSecs / stageTotalSecs) * 100) : 0;

            const stageHeaderEl = document.createElement('div');
            stageHeaderEl.className = 'roadmap-stage-header-card';
            stageHeaderEl.innerHTML = `
                <div class="stage-header-left">
                    <div class="stage-badge-wrap">
                        <span class="stage-num-pill">MƏRHƏLƏ ${stg.num}</span>
                        <span class="stage-range-tag">${stg.range}</span>
                    </div>
                    <h3 class="stage-main-title">${stg.title}</h3>
                    <p class="stage-theme-subtitle"><span class="theme-icon">✦</span> ${stg.theme}</p>
                    <p class="stage-desc-text">${stg.desc}</p>
                </div>
                <div class="stage-header-right">
                    <div class="stage-status-badge ${isStageFullyCompleted ? 'completed' : (isStageInProgress ? 'in-progress' : 'pending')}">
                        <span class="stage-status-dot"></span>
                        <span class="stage-status-text">${stageSolvedSecs}/${stageTotalSecs} tamamlandı · ${stagePct}%</span>
                    </div>
                    <div class="stage-mini-progress">
                        <div class="stage-mini-bar">
                            <div class="stage-mini-fill" style="width: ${stagePct}%;"></div>
                        </div>
                    </div>
                </div>
            `;

            stageBlock.appendChild(stageHeaderEl);
            stageBlock.appendChild(cardsGrid);
            container.appendChild(stageBlock);

            if (stgIdx < stages.length - 1) {
                const nextStage = stages[stgIdx + 1];
                const connector = document.createElement('div');
                connector.className = `roadmap-stage-connector ${isStageFullyCompleted ? 'connector-completed' : 'connector-pending'}`;
                connector.dataset.connectorFrom = stg.stage;
                connector.dataset.connectorTo = nextStage.stage;
                connector.style.setProperty('--from-accent', stg.accent);
                connector.style.setProperty('--to-accent', nextStage.accent);

                connector.innerHTML = `
                    <div class="connector-glow-line"></div>
                    <div class="connector-milestone-node">
                        <span class="node-ring"></span>
                        <span class="node-icon">${isStageFullyCompleted ? '✓' : '⚡'}</span>
                        <span class="node-label">${isStageFullyCompleted ? `Mərhələ ${stg.stage} Fəth Edildi` : `Mərhələ ${nextStage.stage} Hədəfi: ${nextStage.title}`}</span>
                    </div>
                    <div class="connector-glow-line"></div>
                `;
                container.appendChild(connector);
            }
        });

        const totalCurriculumTasks = calculateTotalCurriculumTasks(CURRICULUM);
        const validCompletedTasks = getValidCompletedTaskCount(state, CURRICULUM);
        const totalSectionsCount = (Array.isArray(CURRICULUM) && CURRICULUM.length > 0) ? CURRICULUM.length : TOTAL_SECTIONS;

        const sectionPct = totalSectionsCount > 0 ? Math.round((completedSectionsCount / totalSectionsCount) * 100) : 0;
        const taskPct = totalCurriculumTasks > 0 ? Math.round((validCompletedTasks / totalCurriculumTasks) * 100) : 0;
        const overallPct = Math.min(100, Math.max(sectionPct, taskPct));

        const roadmapPctEl = document.getElementById('roadmap-pct');
        if (roadmapPctEl) roadmapPctEl.textContent = `${overallPct}%`;

        const roadmapFractionEl = document.getElementById('roadmap-fraction');
        if (roadmapFractionEl) {
            roadmapFractionEl.textContent = `${completedSectionsCount}/${totalSectionsCount} bölmə (${validCompletedTasks}/${totalCurriculumTasks} tapşırıq)`;
        }

        const circleFill = document.getElementById('roadmap-circle-fill');
        if (circleFill) {
            const circumference = 2 * Math.PI * 42;
            const offset = circumference - (circumference * overallPct / 100);
            circleFill.style.strokeDashoffset = offset;
        }

        return validCompletedTasks;
    }

    function renderHeroStats() {
        const allTopics = getAllTopics();
        const firstUncompleted = allTopics.find(t => !state.completedTopics.has(t.id)) || allTopics[0];
        
        const labelEl = document.getElementById('hero-current-topic-label');
        if (labelEl && firstUncompleted) {
            labelEl.textContent = firstUncompleted.title;
        }

        const totalCurriculumTasks = calculateTotalCurriculumTasks(CURRICULUM);
        const validCurriculumSolved = getValidCompletedTaskCount(state, CURRICULUM);

        const sectionsCountEl = document.getElementById('hero-sections-count');
        if (sectionsCountEl) sectionsCountEl.textContent = `${CURRICULUM.length || TOTAL_SECTIONS}`;

        const tasksCountEl = document.getElementById('hero-tasks-count');
        if (tasksCountEl) tasksCountEl.textContent = `${totalCurriculumTasks}`;

        const solvedCountEl = document.getElementById('hero-solved-count');
        if (solvedCountEl) solvedCountEl.textContent = `${validCurriculumSolved}`;

        const streak = updateDailyStreak();
        updateStreakFlame(streak);
        const streakEl = document.getElementById('streak-days-count');
        if (streakEl) streakEl.textContent = `${streak}`;
        const heroStreakLegacyEl = document.getElementById('hero-streak-count');
        if (heroStreakLegacyEl) heroStreakLegacyEl.textContent = `${streak} gün 🔥`;
    }

    function initHeroTerminal() {
        const card = document.getElementById('hero-terminal-card');
        const runBtn = document.getElementById('terminal-run-btn');
        const codeEl = document.getElementById('terminal-code-content');
        const outputEl = document.getElementById('terminal-output-content');
        const timeEl = document.getElementById('terminal-exec-time');
        const titleEl = document.getElementById('terminal-file-title');

        if (!card || !runBtn || !codeEl || !outputEl) return;
        if (card.dataset.initialized === 'true') return;
        card.dataset.initialized = 'true';

        if (titleEl) titleEl.textContent = 'roadmap.js - node';

        const TOKENS = [
            { text: "// JavaScript ES2026 Live Terminal\n", cls: "cm-comment" },
            { text: "const", cls: "cm-keyword" },
            { text: " student = {\n  name: ", cls: "" },
            { text: '"Tələbə"', cls: "cm-string" },
            { text: ",\n  track: ", cls: "" },
            { text: '"Full-Stack JS Bootcamp"', cls: "cm-string" },
            { text: ",\n  level: ", cls: "" },
            { text: "1", cls: "cm-number" },
            { text: "\n};\n\n", cls: "" },
            { text: "const", cls: "cm-keyword" },
            { text: " skills = [", cls: "" },
            { text: '"ES6+"', cls: "cm-string" },
            { text: ", ", cls: "" },
            { text: '"Async/Await"', cls: "cm-string" },
            { text: ", ", cls: "" },
            { text: '"DOM"', cls: "cm-string" },
            { text: ", ", cls: "" },
            { text: '"Node.js"', cls: "cm-string" },
            { text: "];\n\n", cls: "" },
            { text: "console.log(", cls: "" },
            { text: "`🚀 ", cls: "cm-string" },
            { text: "${student.name}", cls: "cm-def" },
            { text: " üçün yol xəritəsi hazır`", cls: "cm-string" },
            { text: ");\n", cls: "" },
            { text: "console.log(", cls: "" },
            { text: "`Bacarıqlar: ", cls: "cm-string" },
            { text: "${skills.join(\" • \")}", cls: "cm-def" },
            { text: "`", cls: "cm-string" },
            { text: ");\n", cls: "" },
            { text: "console.log(", cls: "" },
            { text: "`Status: Brauzer V8 mühiti aktivdir`", cls: "cm-string" },
            { text: ");", cls: "" }
        ];

        const charStream = [];
        for (const token of TOKENS) {
            for (const ch of token.text) {
                charStream.push({ ch, cls: token.cls });
            }
        }

        const rawCode = TOKENS.map(t => t.text).join('');

        const outputLines = [
            "> 🚀 Tələbə üçün yol xəritəsi hazır",
            "> Bacarıqlar: ES6+ • Async/Await • DOM • Node.js",
            "> Status: Brauzer V8 mühiti aktivdir"
        ];

        let loopTimeout = null;
        let charIndex = 0;
        let currentSpan = null;
        let isExecuting = false;

        function clearActiveTimers() {
            if (loopTimeout) {
                clearTimeout(loopTimeout);
                loopTimeout = null;
            }
        }

        function appendCharacter(item) {
            if (item.cls) {
                if (!currentSpan || currentSpan.dataset.cls !== item.cls) {
                    currentSpan = document.createElement('span');
                    currentSpan.className = item.cls;
                    currentSpan.dataset.cls = item.cls;
                    codeEl.appendChild(currentSpan);
                }
                currentSpan.textContent += item.ch;
            } else {
                if (!currentSpan || currentSpan.dataset.cls !== '') {
                    currentSpan = document.createElement('span');
                    currentSpan.dataset.cls = '';
                    codeEl.appendChild(currentSpan);
                }
                currentSpan.textContent += item.ch;
            }
        }

        function typeNextChar() {
            if (isExecuting) return;

            if (charIndex < charStream.length) {
                const item = charStream[charIndex++];
                appendCharacter(item);

                // Typing cadence:
                // Newlines take ~110ms for realistic carriage return feel
                // Normal chars take ~18ms, with occasional brief pause on punctuation
                let delay = item.ch === '\n' ? 110 : 18;
                if (item.ch === ';' || item.ch === '{' || item.ch === '}') {
                    delay += 35;
                }

                loopTimeout = setTimeout(typeNextChar, delay);
            } else {
                // Code typing completed! Render output & pause 3000ms
                finishTypingAndShowOutput();
            }
        }

        function finishTypingAndShowOutput() {
            // Pulse button
            runBtn.classList.add('pulse');
            setTimeout(() => runBtn.classList.remove('pulse'), 1200);

            // Realistic execution time
            if (timeEl) timeEl.textContent = '8.45ms';

            // Staggered output reveal
            outputEl.innerHTML = '';
            outputLines.forEach((lineText, idx) => {
                const span = document.createElement('span');
                span.className = 'output-line';
                span.style.animationDelay = `${idx * 80}ms`;
                span.textContent = lineText;
                outputEl.appendChild(span);
            });

            // Pause for exactly 3 seconds (3000ms), and loop infinitely
            loopTimeout = setTimeout(() => {
                restartLoop();
            }, 3000);
        }

        function restartLoop() {
            clearActiveTimers();
            charIndex = 0;
            currentSpan = null;

            codeEl.innerHTML = '';
            outputEl.innerHTML = '';
            if (timeEl) timeEl.textContent = '...';
            runBtn.classList.remove('pulse');

            // Begin next loop
            typeNextChar();
        }

        // Live execution on "► İcra et" button
        runBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (isExecuting) return;
            isExecuting = true;
            clearActiveTimers();

            runBtn.classList.remove('pulse');
            runBtn.disabled = true;
            runBtn.textContent = '⏳ İcra...';

            // Instantly fill full code if still typing
            codeEl.innerHTML = '';
            currentSpan = null;
            for (const item of charStream) {
                appendCharacter(item);
            }
            charIndex = charStream.length;

            const t0 = performance.now();
            try {
                const result = await runJavaScript(rawCode);
                const elapsed = (performance.now() - t0).toFixed(2);
                if (timeEl) timeEl.textContent = `${elapsed}ms`;

                outputEl.innerHTML = '';
                if (result && !result.error && result.output) {
                    const lines = result.output.trim().split('\n');
                    lines.forEach((l, idx) => {
                        const span = document.createElement('span');
                        span.className = 'output-line';
                        span.style.animationDelay = `${idx * 60}ms`;
                        span.textContent = '> ' + l;
                        outputEl.appendChild(span);
                    });
                } else if (result && result.error) {
                    outputEl.textContent = `> Xəta: ${result.error}`;
                } else {
                    outputLines.forEach((l, idx) => {
                        const span = document.createElement('span');
                        span.className = 'output-line';
                        span.style.animationDelay = `${idx * 60}ms`;
                        span.textContent = l;
                        outputEl.appendChild(span);
                    });
                }
            } catch (err) {
                if (outputEl) outputEl.textContent = `> Sistem xətası: ${err.message}`;
            } finally {
                isExecuting = false;
                runBtn.disabled = false;
                runBtn.textContent = '▶ İcra et';
                runBtn.classList.add('pulse');
                setTimeout(() => runBtn.classList.remove('pulse'), 1200);

                // Pause for 3000ms after manual execution and continue infinite loop
                loopTimeout = setTimeout(() => {
                    restartLoop();
                }, 3000);
            }
        });

        // Start initial typewriter loop
        restartLoop();
    }

    function initSandboxPresets() {
        const presets = {
            dom: [
                '// 🌐 DOM Manipulyasiyası Nümunəsi',
                'console.log("DOM elementlərinin dinamik idarə edilməsi:");',
                '',
                'class MockDOM {',
                '    constructor() { this.body = []; }',
                '    createElement(tag, options = {}) {',
                '        return {',
                '            tag,',
                '            text: options.text || "",',
                '            styles: options.styles || {},',
                '            render() {',
                '                const styleStr = Object.entries(this.styles)',
                '                    .map(([k, v]) => `${k}: ${v}`)',
                '                    .join("; ");',
                '                const styleAttr = styleStr ? ` style="${styleStr}"` : "";',
                '                return `<${this.tag}${styleAttr}>${this.text}</${this.tag}>`;',
                '            }',
                '        };',
                '    }',
                '}',
                '',
                'const dom = new MockDOM();',
                'const basliq = dom.createElement("h1", {',
                '    text: "Salam, Dünya!",',
                '    styles: { color: "#38bdf8", "font-weight": "bold" }',
                '});',
                '',
                'const duyme = dom.createElement("button", {',
                '    text: "Daxil ol",',
                '    styles: { background: "#10b981", color: "#ffffff", padding: "8px 16px" }',
                '});',
                '',
                'console.log("Yaradılan Başlıq:", basliq.render());',
                'console.log("Yaradılan Düymə:", duyme.render());'
            ].join('\n'),

            async: [
                '// ⏳ Asinxron JavaScript: Promises və Async/Await',
                'async function fetchCourseData(studentId) {',
                '  console.log("📡 Tələbə #" + studentId + " üçün serverdən məlumat yüklənir...");',
                '  const data = await new Promise(resolve => {',
                '    setTimeout(() => {',
                '      resolve({',
                '        id: studentId,',
                '        ad: "Rəşid",',
                '        kurs: "Müasir JavaScript (ES2026)",',
                '        irəliləyiş: "85%",',
                '        status: "Fəal"',
                '      });',
                '    }, 300);',
                '  });',
                '  return data;',
                '}',
                '',
                'async function startApplication() {',
                '  console.log("Proqram başladıldı...");',
                '  const student = await fetchCourseData(101);',
                '  console.log("✅ Cavab alındı!");',
                '  console.log("Məlumat:", JSON.stringify(student, null, 2));',
                '}',
                '',
                'startApplication();'
            ].join('\n'),

            array: [
                '// 📊 Müasir Massiv Metodları: map, filter və reduce',
                'const books = [',
                '  { id: 1, title: "JavaScript: The Good Parts", price: 40, rating: 4.8 },',
                '  { id: 2, title: "Eloquent JavaScript", price: 55, rating: 4.9 },',
                '  { id: 3, title: "You Do Not Know JS", price: 65, rating: 5.0 },',
                '  { id: 4, title: "CSS Mastery", price: 30, rating: 4.3 }',
                '];',
                '',
                'console.log("Toplam kitab sayı:", books.length);',
                '',
                '// 1. Reytinqi 4.8 və daha yüksək olan kitabları süzgəcdən keçirək (filter)',
                'const topRated = books.filter(b => b.rating >= 4.8);',
                'console.log("Top reytinqli kitablar:", topRated.map(b => b.title));',
                '',
                '// 2. Bütün kitabların 10% endirimlə qiymətlərini hesablayaq (map)',
                'const discounted = topRated.map(b => ({',
                '  title: b.title,',
                '  originalPrice: b.price,',
                '  salePrice: Math.round(b.price * 0.9)',
                '}));',
                'console.log("Endirimli qiymətlər:", discounted);',
                '',
                '// 3. Ümumi endirimli dəyəri hesablayaq (reduce)',
                'const totalPrice = discounted.reduce((sum, b) => sum + b.salePrice, 0);',
                'console.log("Cəmi endirimli qiymət:", totalPrice, "AZN");'
            ].join('\n'),

            class: [
                '// 🏛️ ES6+ OOP: Siniflər, İrsiyyət (Inheritance) və Metodlar',
                'class Developer {',
                '  constructor(name, mainSkill) {',
                '    this.name = name;',
                '    this.mainSkill = mainSkill;',
                '    this.experienceYears = 1;',
                '  }',
                '  code() {',
                '    return this.name + " " + this.mainSkill + " ilə kod yazır...";',
                '  }',
                '}',
                '',
                'class SeniorEngineer extends Developer {',
                '  constructor(name, mainSkill, architectureStyle) {',
                '    super(name, mainSkill);',
                '    this.architectureStyle = architectureStyle;',
                '    this.experienceYears = 5;',
                '  }',
                '  code() {',
                '    return super.code() + " Əlavə olaraq " + this.architectureStyle + " arxitekturasını qurur.";',
                '  }',
                '  reviewCode(juniorName) {',
                '    return "👨‍🏫 " + this.name + ", " + juniorName + " adlı gənc tərtibatçının kodunu yoxlayır və təsdiqləyir.";',
                '  }',
                '}',
                '',
                'const lead = new SeniorEngineer("Kamran", "Full-Stack JS", "Microservices və Clean Architecture");',
                'console.log(lead.code());',
                'console.log(lead.reviewCode("Aysel"));'
            ].join('\n')
        };

        const bindPreset = (btnId, key) => {
            const btn = document.getElementById(btnId);
            if (btn && !btn.dataset.bound) {
                btn.dataset.bound = 'true';
                btn.addEventListener('click', () => {
                    if (state.sandboxEditor) {
                        state.sandboxEditor.setValue(presets[key]);
                        showToast('"' + key.toUpperCase() + '" şablonu yükləndi! 🚀', 'info');
                    }
                });
            }
        };

        bindPreset('preset-dom', 'dom');
        bindPreset('preset-async', 'async');
        bindPreset('preset-array', 'array');
        bindPreset('preset-class', 'class');
    }


    // ============================================
    // Interactive Ecosystem Workspace Logic
    // ============================================
    let ecosystemEditor = null;
    let currentEcosystemTopicId = null;

    function saveEcosystemProgress() {
        try {
            if (state.completedEcosystemTopics) {
                safeStorage.setItem('jsoyren_ecosystem_progress', JSON.stringify([...state.completedEcosystemTopics]));
            }
        } catch (e) {
            console.warn('Could not save ecosystem progress:', e);
        }
    }

    function getEcosystemMockPreamble() {
        return `
// --- JSÖyrən Simulyasiya Edilmiş Node.js və Web API Mühiti ---
const v8 = typeof v8 !== 'undefined' ? v8 : (typeof require === 'function' ? require('v8') : {
    getHeapStatistics: () => ({
        total_heap_size: 67108864,
        used_heap_size: 38797312,
        heap_size_limit: 4294967296
    })
});

const Bun = typeof Bun !== 'undefined' ? Bun : {
    serve: (options) => {
        console.log("🚀 Bun server " + options.port + " portunda dinləyir...");
        return { stop: () => {} };
    }
};
`;
    }

    function updateEcosystemProgressUI() {
        const countEl = document.getElementById('eco-progress-count');
        const fillEl = document.getElementById('eco-progress-fill');
        let completedCount = 0;

        document.querySelectorAll('.eco-node-btn').forEach(btn => {
            const nodeKey = btn.dataset.node;
            const isDone = state.completedEcosystemTopics && (
                state.completedEcosystemTopics.has(nodeKey) ||
                state.completedEcosystemTopics.has('eco-' + nodeKey)
            );

            btn.classList.toggle('completed', !!isDone);
            const statusIcon = btn.querySelector('.node-status-icon');
            if (statusIcon) {
                statusIcon.textContent = isDone ? '✓' : '●';
            }
            if (isDone) completedCount++;
        });

        if (countEl) countEl.textContent = `${completedCount} / 16 Tamamlandı`;
        if (fillEl) fillEl.style.width = `${(completedCount / 16) * 100}%`;
    }

    function openEcosystemLesson(topicId) {
        if (!window.ECOSYSTEM_LESSONS_DATA || !Array.isArray(window.ECOSYSTEM_LESSONS_DATA)) return;
        
        const cleanId = (topicId || '').replace(/^eco-/, '');
        const topic = window.ECOSYSTEM_LESSONS_DATA.find(t => t.id === cleanId || t.id === topicId || t.id === 'eco-' + cleanId);
        if (!topic) return;

        currentEcosystemTopicId = topic.id;

        // Switch container view
        const catalog = document.getElementById('diagram-catalog');
        const wsView = document.getElementById('ecosystem-workspace-view');
        if (catalog) catalog.classList.add('hidden');
        if (wsView) wsView.classList.remove('hidden');

        // Populate breadcrumbs & headers
        const crumbCat = document.getElementById('eco-crumb-cat');
        const crumbTitle = document.getElementById('eco-crumb-title');
        const catPill = document.getElementById('eco-lesson-cat-pill');
        const lessonTitle = document.getElementById('eco-lesson-title');
        const lessonDesc = document.getElementById('eco-lesson-desc');
        const theoryContent = document.getElementById('eco-theory-content');
        const taskInstruction = document.getElementById('eco-task-instruction');
        const taskHint = document.getElementById('eco-task-hint');

        if (crumbCat) crumbCat.textContent = topic.category;
        if (crumbTitle) crumbTitle.textContent = topic.title;
        if (catPill) catPill.textContent = `${topic.categoryIcon || '📘'} ${topic.category}`;
        if (lessonTitle) lessonTitle.textContent = topic.title;
        if (lessonDesc) lessonDesc.textContent = topic.description;
        if (theoryContent) theoryContent.innerHTML = topic.theory;
        if (taskInstruction) taskInstruction.textContent = topic.interactivePractice.taskInstruction;
        if (taskHint) taskHint.textContent = topic.interactivePractice.hint;

        // Update completion status badge
        const isDone = state.completedEcosystemTopics && (
            state.completedEcosystemTopics.has(topic.id) ||
            state.completedEcosystemTopics.has('eco-' + topic.id)
        );
        const statusBadge = document.getElementById('eco-status-badge');
        if (statusBadge) {
            statusBadge.textContent = isDone ? '✓ Tamamlandı' : '● Öyrənilir';
            statusBadge.className = 'eco-status-badge' + (isDone ? ' completed' : '');
        }

        // Navigation Prev/Next buttons
        const currentIndex = window.ECOSYSTEM_LESSONS_DATA.findIndex(t => t.id === topic.id);
        const prevBtn = document.getElementById('eco-prev-btn');
        const nextBtn = document.getElementById('eco-next-btn');
        if (prevBtn) {
            prevBtn.disabled = currentIndex <= 0;
            prevBtn.onclick = () => {
                if (currentIndex > 0) openEcosystemLesson(window.ECOSYSTEM_LESSONS_DATA[currentIndex - 1].id);
            };
        }
        if (nextBtn) {
            nextBtn.disabled = currentIndex >= window.ECOSYSTEM_LESSONS_DATA.length - 1;
            nextBtn.onclick = () => {
                if (currentIndex < window.ECOSYSTEM_LESSONS_DATA.length - 1) openEcosystemLesson(window.ECOSYSTEM_LESSONS_DATA[currentIndex + 1].id);
            };
        }

        // Reset console drawer
        const outText = document.getElementById('eco-output-text');
        const execTime = document.getElementById('eco-exec-time');
        const resultStatus = document.getElementById('eco-task-result-status');
        if (outText) outText.textContent = '// Nəticəni görmək üçün "İcra et" düyməsinə klikləyin...';
        if (execTime) execTime.textContent = '';
        if (resultStatus) {
            resultStatus.style.display = 'none';
            resultStatus.innerHTML = '';
        }

        // Initialize or update CodeMirror editor
        const textarea = document.getElementById('eco-code-editor');
        if (!ecosystemEditor && textarea && window.CodeMirror) {
            ecosystemEditor = CodeMirror.fromTextArea(textarea, {
                mode: 'javascript',
                theme: 'default',
                lineNumbers: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                indentUnit: 2,
                tabSize: 2,
                lineWrapping: true
            });
            registerCodeMirrorForMobileToolbar(ecosystemEditor);
        }
        if (ecosystemEditor) {
            ecosystemEditor.setValue(topic.interactivePractice.starterCode);
            setTimeout(() => ecosystemEditor.refresh(), 60);
        }

        // Scroll to top of lesson workspace
        if (wsView) {
            wsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function closeEcosystemLesson() {
        const catalog = document.getElementById('diagram-catalog');
        const wsView = document.getElementById('ecosystem-workspace-view');
        if (wsView) wsView.classList.add('hidden');
        if (catalog) catalog.classList.remove('hidden');

        updateEcosystemProgressUI();

        if (catalog) {
            catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function initDiagramMindmap() {
        // Bind Back button
        const backBtn = document.getElementById('eco-back-btn');
        if (backBtn && !backBtn.dataset.bound) {
            backBtn.dataset.bound = 'true';
            backBtn.addEventListener('click', closeEcosystemLesson);
        }

        // Bind Reset Code button
        const resetBtn = document.getElementById('eco-reset-code-btn');
        if (resetBtn && !resetBtn.dataset.bound) {
            resetBtn.dataset.bound = 'true';
            resetBtn.addEventListener('click', () => {
                if (!currentEcosystemTopicId || !ecosystemEditor || !window.ECOSYSTEM_LESSONS_DATA) return;
                const topic = window.ECOSYSTEM_LESSONS_DATA.find(t => t.id === currentEcosystemTopicId);
                if (topic && topic.interactivePractice) {
                    ecosystemEditor.setValue(topic.interactivePractice.starterCode);
                    if (typeof showToast === 'function') {
                        showToast('↺ Kod ilkin vəziyyətə qaytarıldı');
                    }
                }
            });
        }

        // Bind Run Code button
        const runBtn = document.getElementById('eco-run-btn');
        if (runBtn && !runBtn.dataset.bound) {
            runBtn.dataset.bound = 'true';
            runBtn.addEventListener('click', async () => {
                if (!currentEcosystemTopicId || !ecosystemEditor || !window.ECOSYSTEM_LESSONS_DATA) return;
                const topic = window.ECOSYSTEM_LESSONS_DATA.find(t => t.id === currentEcosystemTopicId);
                if (!topic) return;

                const outText = document.getElementById('eco-output-text');
                const execTime = document.getElementById('eco-exec-time');
                const resultStatus = document.getElementById('eco-task-result-status');

                runBtn.disabled = true;
                runBtn.innerHTML = '⏳ İcra...';

                const userCode = ecosystemEditor.getValue();
                const mockPreamble = getEcosystemMockPreamble();
                const fullCode = mockPreamble + '\n' + userCode;

                const t0 = performance.now();
                try {
                    const result = await runJavaScript(fullCode);
                    const elapsed = (performance.now() - t0).toFixed(2);
                    if (execTime) execTime.textContent = `${elapsed}ms`;

                    if (result.error) {
                        if (outText) outText.textContent = `> Xəta: ${result.error}`;
                        if (resultStatus) {
                            resultStatus.style.display = 'block';
                            resultStatus.className = 'eco-task-result-status error';
                            resultStatus.innerHTML = `⚠️ Xəta baş verdi: ${escapeHtml(result.error)}`;
                        }
                    } else {
                        const output = result.output || '(Nəticə yoxdur)';
                        if (outText) outText.textContent = output;

                        // Output validation
                        const clean = s => (s || '').replace(/\r\n/g, '\n').trim();
                        const cleanUserOut = clean(output);
                        const cleanExpected = clean(topic.interactivePractice.expectedOutput);
                        const isMatch = cleanUserOut === cleanExpected || cleanUserOut.includes(cleanExpected);

                        if (resultStatus) {
                            resultStatus.style.display = 'block';
                            if (isMatch) {
                                resultStatus.className = 'eco-task-result-status success';
                                resultStatus.innerHTML = `🎉 Əla! Tapşırıq uğurla tamamlandı. +50 XP qazandınız!`;

                                state.completedEcosystemTopics.add(topic.id);
                                saveEcosystemProgress();
                                updateEcosystemProgressUI();

                                const statusBadge = document.getElementById('eco-status-badge');
                                if (statusBadge) {
                                    statusBadge.textContent = '✓ Tamamlandı';
                                    statusBadge.className = 'eco-status-badge completed';
                                }

                                if (typeof showToast === 'function') {
                                    showToast(`🏆 Mövzu tamamlandı: ${topic.title} (+50 XP)`);
                                }
                            } else {
                                resultStatus.className = 'eco-task-result-status error';
                                resultStatus.innerHTML = `⚠️ Çıxış fərqlidir.<br><strong>Gözlənilən:</strong> <code>${escapeHtml(cleanExpected)}</code><br><strong>Sizin çıxış:</strong> <code>${escapeHtml(cleanUserOut)}</code>`;
                            }
                        }
                    }
                } catch (err) {
                    if (outText) outText.textContent = `> Sistem xətası: ${err.message}`;
                } finally {
                    runBtn.disabled = false;
                    runBtn.innerHTML = '<span class="run-icon">▶</span> İcra et';
                }
            });
        }

        // Bind all 16 node buttons
        document.querySelectorAll('.eco-node-btn').forEach(btn => {
            if (!btn.dataset.bound) {
                btn.dataset.bound = 'true';
                btn.addEventListener('click', () => {
                    const nodeKey = btn.dataset.node;
                    openEcosystemLesson(nodeKey);
                });
            }
        });

        // Bind Core JS central hub
        const coreHub = document.getElementById('node-core-js');
        if (coreHub && !coreHub.dataset.bound) {
            coreHub.dataset.bound = 'true';
            coreHub.addEventListener('click', () => {
                openEcosystemLesson('ts-types');
            });
        }

        // Update progress UI initially
        updateEcosystemProgressUI();
    }

    function renderErrorsProgressSection() {
        const container = document.getElementById('errors-progress-section');
        if (!container) return;

        const totalBugs = (typeof ERRORS_PANEL_DATA !== 'undefined' && Array.isArray(ERRORS_PANEL_DATA))
            ? ERRORS_PANEL_DATA.reduce((acc, s) => acc + (s.bugs ? s.bugs.length : 0), 0)
            : getTotalPanelBugs();
        const solvedBugs = state.completedPanelErrors ? state.completedPanelErrors.size : 0;
        const percentage = totalBugs > 0 ? Math.max(0, Math.min(100, Math.round((solvedBugs / totalBugs) * 100))) : 0;
        const totalBugXp = solvedBugs * 50;

        let debuggerRank = "Xəta Çırağı 🔍";
        if (solvedBugs >= 200) debuggerRank = "Master Debugger Əfsanəsi 👑";
        else if (solvedBugs >= 100) debuggerRank = "Senior Debugger 🚀";
        else if (solvedBugs >= 50) debuggerRank = "Təcrübəli Sazlayıcı ⚡";
        else if (solvedBugs >= 10) debuggerRank = "Xəta Ovçusu 🛡️";

        // 5 Kurikulum Mərhələsi
        const stages = [
            { id: 1, title: "Mərhələ 1: Təməl Sintaksis və Məntiq", range: "Bölmə 01 - 05", icon: "🟢", secRange: [1, 5] },
            { id: 2, title: "Mərhələ 2: Dərinləşmə və Məlumat Strukturları", range: "Bölmə 06 - 09", icon: "🔵", secRange: [6, 9] },
            { id: 3, title: "Mərhələ 3: Müasir ES6+ və Asinxronluq", range: "Bölmə 10 - 13", icon: "🟣", secRange: [10, 13] },
            { id: 4, title: "Mərhələ 4: Brauzer DOM, Hadisələr və Şəbəkə", range: "Bölmə 14 - 17", icon: "🌐", secRange: [14, 17] },
            { id: 5, title: "Mərhələ 5: Node.js, Express, REST API və Bazalar", range: "Bölmə 18 - 21", icon: "🔴", secRange: [18, 21] }
        ];

        let stagesHtml = '';
        stages.forEach(st => {
            let stageTotal = 0;
            let stageSolved = 0;
            if (typeof ERRORS_PANEL_DATA !== 'undefined' && Array.isArray(ERRORS_PANEL_DATA)) {
                ERRORS_PANEL_DATA.forEach(sec => {
                    const secNumMatch = sec.sectionId.match(/\d+/);
                    const secNum = secNumMatch ? parseInt(secNumMatch[0], 10) : 0;
                    if (secNum >= st.secRange[0] && secNum <= st.secRange[1]) {
                        const bugsList = (sec && (sec.bugs || sec.errors)) || [];
                        stageTotal += bugsList.length;
                        bugsList.forEach(b => {
                            if (b && state.completedPanelErrors && state.completedPanelErrors.has(b.id)) stageSolved++;
                        });
                    }
                });
            }
            if (stageTotal === 0) stageTotal = (st.secRange[1] - st.secRange[0] + 1) * 10;
            const stagePct = stageTotal > 0 ? Math.max(0, Math.min(100, Math.round((stageSolved / stageTotal) * 100))) : 0;
            const isCompleted = stageSolved >= stageTotal && stageTotal > 0;

            stagesHtml += `
                <div class="errors-stage-card ${isCompleted ? 'completed' : ''}">
                    <div class="stage-card-top">
                        <span class="stage-icon">${st.icon}</span>
                        <div class="stage-info">
                            <h4 class="stage-title">${st.title}</h4>
                            <span class="stage-range">${st.range} · ${stageTotal} Xəta Sınağı</span>
                        </div>
                        <span class="stage-status-pill ${isCompleted ? 'done' : ''}">${isCompleted ? '✓ Tamamlandı' : `%${stagePct}`}</span>
                    </div>
                    <div class="stage-progress-wrap">
                        <div class="stage-progress-bar">
                            <div class="stage-progress-fill" style="width: ${stagePct}%;"></div>
                        </div>
                        <div class="stage-progress-labels">
                            <span class="stage-fraction">${stageSolved} / ${stageTotal} sazlanıb</span>
                            <span class="stage-percentage">%${stagePct}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="section-title-wrap">
                <span class="section-tag">SAZLAMA İRƏLİLƏYİŞİ</span>
                <h3>🐛 Xəta Paneli Statistikası (21 Bölmə · ${totalBugs} Sınaq)</h3>
                <p>Hər bir xəta real layihə problemlərini simulyasiya edir. Kodu araşdırın, simptomu analiz edin və düzgün arxitekturanı bərpa edin.</p>
            </div>

            <div class="errors-overview-card">
                <div class="errors-overview-stats">
                    <div class="errors-metric-box">
                        <span class="metric-icon">🐛</span>
                        <div>
                            <div class="metric-value">${solvedBugs} / ${totalBugs}</div>
                            <div class="metric-label">Həll Edilmiş Xəta</div>
                        </div>
                    </div>
                    <div class="errors-metric-box">
                        <span class="metric-icon">⚡</span>
                        <div>
                            <div class="metric-value">${totalBugXp} XP</div>
                            <div class="metric-label">Sazlama Təcrübəsi</div>
                        </div>
                    </div>
                    <div class="errors-metric-box">
                        <span class="metric-icon">🛡️</span>
                        <div>
                            <div class="metric-value">${debuggerRank}</div>
                            <div class="metric-label">Sazlayıcı Rütbəsi</div>
                        </div>
                    </div>
                </div>

                <div class="errors-global-progress">
                    <div class="global-bar-header">
                        <span>Ümumi Sazlama Müvəffəqiyyəti</span>
                        <strong class="global-pct-label">%${percentage} tamamlanıb</strong>
                    </div>
                    <div class="errors-main-bar">
                        <div class="errors-main-fill" style="width: ${percentage}%;"></div>
                    </div>
                </div>

                <div class="errors-stages-grid">
                    ${stagesHtml}
                </div>

                <div class="errors-card-actions">
                    <button type="button" class="errors-panel-jump-btn" id="progress-jump-to-errors-btn">
                        🐛 Xəta Panelinə Keç və Sazla
                    </button>
                </div>
            </div>
        `;

        const jumpBtn = document.getElementById('progress-jump-to-errors-btn');
        if (jumpBtn) {
            jumpBtn.onclick = () => {
                showView('errors-panel');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }
    }

    function renderProgressView() {
        // Calculate solved count (Single-Source-of-Truth across platform)
        const totalPlatformChallenges = getTotalPlatformChallenges();
        const totalSolved = getTotalPlatformSolved();
        const totalPanelErrors = getTotalPanelBugs();

        // Calculate XP
        const validCurriculumIds = getAllCurriculumTaskIds(CURRICULUM);
        const validLessonBugs = [...(state.completedBugFixes || [])].filter(id => validCurriculumIds.has(id)).length;
        const validExercises = [...(state.completedExercises || [])].filter(id => validCurriculumIds.has(id)).length;

        let totalXP = (validExercises * 25) +
                      (validLessonBugs * 30) +
                      ((state.completedPanelTasks ? state.completedPanelTasks.size : 0) * 40) +
                      ((state.completedPanelErrors ? state.completedPanelErrors.size : 0) * 50) +
                      (((state.passedExamQuestions ? state.passedExamQuestions.size : 0)) * 35) +
                      (((state.completedEcosystemTopics ? state.completedEcosystemTopics.size : 0)) * 50);

        // Hourglass Challenges XP
        let hourglassXP = 0;
        try {
            const hgHistoryRaw = safeStorage.getItem('jsoyren_hourglass_history');
            if (hgHistoryRaw) {
                const hgHistory = JSON.parse(hgHistoryRaw);
                if (Array.isArray(hgHistory)) {
                    hgHistory.forEach(h => {
                        if (h.earnedXP) hourglassXP += h.earnedXP;
                    });
                }
            }
        } catch (e) {}
        if (hourglassXP === 0 && state.completedHourglassChallenges) {
            hourglassXP = state.completedHourglassChallenges.size * 200;
        }
        totalXP += hourglassXP;

        try {
            const historyRaw = safeStorage.getItem(EXAM_HISTORY_KEY);
            if (historyRaw) {
                const history = JSON.parse(historyRaw);
                if (Array.isArray(history)) {
                    history.forEach(h => {
                        if (h.score) totalXP += (h.score * 10);
                        if (h.percentage && h.percentage >= 80) {
                            if (!state.unlockedAchievements) state.unlockedAchievements = new Set();
                            state.unlockedAchievements.add('exam_champion');
                        }
                    });
                }
            }
        } catch (e) {}

        // Rank determination (Level 1 to Level 6)
        let rankTitle = "Level 1: JavaScript Çırağı 🐣";
        if (totalXP >= 10000 || totalSolved >= 400) {
            rankTitle = "Level 6: JavaScript Əfsanəsi 👑";
        } else if (totalXP >= 5000 || totalSolved >= 250) {
            rankTitle = "Level 5: Master JS Arxitektor ⚡";
        } else if (totalXP >= 2500 || totalSolved >= 150) {
            rankTitle = "Level 4: Senior JS Mühəndis 🛠️";
        } else if (totalXP >= 1200 || totalSolved >= 75) {
            rankTitle = "Level 3: Full-Stack Tələbə 🚀";
        } else if (totalXP >= 400 || totalSolved >= 25) {
            rankTitle = "Level 2: Junior JS Kodçu 💻";
        }

        const rankPillEl = document.getElementById('user-rank-pill');
        if (rankPillEl) rankPillEl.textContent = rankTitle;

        const totalXpEl = document.getElementById('total-xp-display');
        if (totalXpEl) totalXpEl.textContent = `${totalXP} XP`;

        const solvedDisplayEl = document.getElementById('progress-solved-display');
        if (solvedDisplayEl) solvedDisplayEl.textContent = `${totalSolved} / ${totalPlatformChallenges}`;

        const bugsDisplayEl = document.getElementById('progress-bugs-display');
        if (bugsDisplayEl) bugsDisplayEl.textContent = `${state.completedPanelErrors ? state.completedPanelErrors.size : 0} / ${totalPanelErrors}`;

        // Render Dedicated Error Panel Section
        renderErrorsProgressSection();

        // Render Gamified Badges Grid
        const badgesGrid = document.getElementById('badges-grid');
        if (badgesGrid) {
            badgesGrid.innerHTML = '';
            ACHIEVEMENTS_CONFIG.forEach(badge => {
                const current = badge.getCurrent(state);
                const isUnlocked = current >= badge.target || (state.unlockedAchievements && state.unlockedAchievements.has(badge.id));
                const pct = badge.target > 0 ? Math.min(100, Math.round((current / badge.target) * 100)) : 0;

                const card = document.createElement('div');
                card.className = `badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
                card.innerHTML = `
                    <div class="badge-icon-box">${badge.icon}</div>
                    <div class="badge-content">
                        <div class="badge-top">
                            <span class="badge-title">${badge.title}</span>
                            <span class="badge-status-pill">${isUnlocked ? '✓ Qazanıldı' : '🔒 Kilidli'}</span>
                        </div>
                        <p class="badge-desc">${badge.desc}</p>
                        <div class="badge-progress-wrap">
                            <div class="badge-mini-bar">
                                <div class="badge-mini-fill" style="width: ${pct}%;"></div>
                            </div>
                            <span class="badge-progress-txt">${Math.min(current, badge.target)}/${badge.target}</span>
                        </div>
                    </div>
                `;
                badgesGrid.appendChild(card);
            });
        }

        // Streak Heatmap Grid
        const heatmapGrid = document.getElementById('heatmap-grid');
        if (heatmapGrid) {
            heatmapGrid.innerHTML = '';
            const streak = updateDailyStreak();
            
            const currentStreakEl = document.getElementById('heatmap-current-streak');
            if (currentStreakEl) currentStreakEl.textContent = `${streak} gün 🔥`;

            // Generate 98 cells (14 weeks x 7 days)
            for (let i = 0; i < 98; i++) {
                const cell = document.createElement('div');
                let lvl = 0;
                // Highlight recent days based on streak and activity
                if (i >= 98 - streak) {
                    lvl = Math.min(4, Math.max(1, (totalSolved % 4) + 1));
                } else if (i % 5 === 0 && totalSolved > 10) {
                    lvl = 1;
                } else if (i % 9 === 0 && totalSolved > 30) {
                    lvl = 2;
                }
                cell.className = `heatmap-cell lvl-${lvl}`;
                cell.title = `Gün #${i + 1}`;
                heatmapGrid.appendChild(cell);
            }
        }

        // Certificate Details
        const certDateEl = document.getElementById('cert-date');
        if (certDateEl) certDateEl.textContent = getFormattedAzDate();

        const certUserEl = document.getElementById('cert-user-name');
        if (certUserEl) {
            certUserEl.textContent = (state.user && state.user.name) ? state.user.name : "Tələbə";
            certUserEl.title = "Adınızı dəyişmək üçün klikləyin";
            certUserEl.style.cursor = "pointer";
            certUserEl.onclick = () => {
                const newName = prompt("Sertifikatda qeyd olunacaq ad və soyadınızı daxil edin:", state.user ? state.user.name : "Tələbə");
                if (newName && newName.trim()) {
                    if (!state.user) state.user = { name: "Tələbə", streakDays: 1, lastActiveDate: getTodayDateString() };
                    state.user.name = newName.trim();
                    certUserEl.textContent = state.user.name;
                    saveProgress();
                    showToast(`Tələbə adı yeniləndi: ${state.user.name}`, 'info');
                }
            };
        }

        const certStatusEl = document.getElementById('cert-status-badge');
        if (certStatusEl) {
            certStatusEl.textContent = totalSolved >= 150 ? "✓ Məzun Oldu" : "Davam Edir";
        }
    }


    function setupEventListeners() {
        // Top Navbar Navigation Buttons (Strictly 5 tabs)
        const navBtnLearn = document.getElementById('nav-btn-learn');
        if (navBtnLearn) navBtnLearn.addEventListener('click', () => showView('learn'));

        const navBtnExam = document.getElementById('nav-btn-exam');
        if (navBtnExam) navBtnExam.addEventListener('click', () => showView('exam'));

        const navBtnPlayground = document.getElementById('nav-btn-playground');
        if (navBtnPlayground) navBtnPlayground.addEventListener('click', () => showView('playground'));

        const navBtnErrors = document.getElementById('nav-errors-panel-btn') || document.getElementById('nav-btn-errors');
        if (navBtnErrors) navBtnErrors.addEventListener('click', () => showView('errors-panel'));

        const navBtnDiagram = document.getElementById('nav-btn-diagram');
        if (navBtnDiagram) navBtnDiagram.addEventListener('click', () => showView('diagram'));

        const navBtnProgress = document.getElementById('nav-btn-progress');
        if (navBtnProgress) navBtnProgress.addEventListener('click', () => showView('progress'));

        // Brand Badge to Learn
        const brandBadge = document.getElementById('brand-badge');
        if (brandBadge) brandBadge.addEventListener('click', () => showView('learn'));

        // Hero CTA Buttons
        const heroResumeBtn = document.getElementById('hero-resume-btn');
        if (heroResumeBtn) {
            heroResumeBtn.addEventListener('click', () => {
                const allTopics = getAllTopics();
                const target = allTopics.find(t => !state.completedTopics.has(t.id)) || allTopics[0];
                if (target) navigateToTopic(target.id);
            });
        }

        const heroPlaygroundBtn = document.getElementById('hero-playground-btn');
        if (heroPlaygroundBtn) {
            heroPlaygroundBtn.addEventListener('click', () => showView('playground'));
        }

        // Back to Roadmap Button in Topic View
        const backToRoadmapBtn = document.getElementById('back-to-roadmap-btn');
        if (backToRoadmapBtn) {
            backToRoadmapBtn.addEventListener('click', () => showView('learn'));
        }

        // Mobile Drawer Toggle & Links
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileDrawer = document.getElementById('mobile-nav-drawer');
        const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
        const mobileDrawerClose = document.getElementById('mobile-drawer-close');

        const openMobileDrawer = (e) => {
            if (e && e.stopPropagation) e.stopPropagation();
            closeMobileSidebar();
            if (mobileDrawer) mobileDrawer.classList.add('open');
            if (mobileDrawerOverlay) {
                mobileDrawerOverlay.style.display = 'block';
                mobileDrawerOverlay.classList.add('open');
            }
            if (mobileMenuToggle) mobileMenuToggle.classList.add('active');
        };

        const closeMobileDrawer = (e) => {
            if (e && e.stopPropagation) e.stopPropagation();
            closeAllOverlaysAndDrawers();
        };

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', (e) => {
                if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                    closeMobileDrawer(e);
                } else {
                    openMobileDrawer(e);
                }
            });
        }
        if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
        if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const view = item.dataset.view;
                closeAllOverlaysAndDrawers();
                if (view) showView(view);
            });
        });

        const mobileTasksBtn = document.getElementById('mobile-tasks-btn');
        if (mobileTasksBtn) {
            mobileTasksBtn.addEventListener('click', () => {
                closeAllOverlaysAndDrawers();
                showView('tasks-panel');
            });
        }

        const mobileErrorsBtn = document.getElementById('mobile-errors-btn');
        if (mobileErrorsBtn) {
            mobileErrorsBtn.addEventListener('click', () => {
                closeAllOverlaysAndDrawers();
                showView('errors-panel');
            });
        }

        const mobileResetBtn = document.getElementById('mobile-reset-btn');
        if (mobileResetBtn) {
            mobileResetBtn.addEventListener('click', () => {
                closeAllOverlaysAndDrawers();
                resetProgress();
            });
        }

        // Initialize Live Terminal in Hero
        initHeroTerminal();

        // Mobile sidebar (only for dedicated sidebar-toggle button, avoiding collision with mobile-menu-toggle)
        const sidebarToggle = document.getElementById('sidebar-toggle');
        if (sidebarToggle) sidebarToggle.addEventListener('click', toggleMobileSidebar);
        const sidebarOverlay = document.getElementById('sidebar-overlay');
        if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

        // Home Navigation via Logos
        const sidebarLogo = document.getElementById('sidebar-logo');
        if (sidebarLogo) {
            sidebarLogo.addEventListener('click', navigateToHome);
            sidebarLogo.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateToHome();
                }
            });
        }

        const mobileLogo = document.getElementById('mobile-logo');
        if (mobileLogo) {
            mobileLogo.addEventListener('click', navigateToHome);
            mobileLogo.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateToHome();
                }
            });
        }

        // Welcome start button
        const welcomeStartBtn = document.getElementById('welcome-start-btn');
        if (welcomeStartBtn) {
            welcomeStartBtn.addEventListener('click', () => {
                const allTopics = getAllTopics();
                if (allTopics.length > 0) {
                    const firstUncompleted = allTopics.find(t => !state.completedTopics.has(t.id));
                    navigateToTopic(firstUncompleted ? firstUncompleted.id : allTopics[0].id);
                }
            });
        }

        // Initialize Exam Lobby
        initExamLobby();

        // Active Exam Workspace actions
        const examFinishBtn = document.getElementById('exam-finish-btn');
        if (examFinishBtn) {
            examFinishBtn.addEventListener('click', promptFinishExam);
        }

        const examTestCodeBtn = document.getElementById('exam-test-code-btn');
        if (examTestCodeBtn) {
            examTestCodeBtn.addEventListener('click', testExamCurrentCode);
        }

        const examResetCodeBtn = document.getElementById('exam-reset-code-btn');
        if (examResetCodeBtn) {
            examResetCodeBtn.addEventListener('click', () => {
                if (examState.surrenderedQuestions && examState.surrenderedQuestions.has(examState.currentIndex)) {
                    return;
                }
                const q = examState.questions[examState.currentIndex];
                if (q && examState.editorInstance) {
                    const starter = q.starterCode || '// JavaScript kodunuzu buraya yazın\n';
                    examState.editorInstance.setValue(starter);
                    examState.userAnswers[examState.currentIndex] = starter;
                    examState.validatedQuestions.delete(examState.currentIndex);
                    delete examState.testOutputs[examState.currentIndex];
                    updateStepperPillState(examState.currentIndex);

                    const outputText = document.getElementById('exam-test-output-text');
                    const outputStatus = document.getElementById('exam-output-status');
                    if (outputText) {
                        outputText.textContent = 'Kodu sınaqdan keçirmək üçün "▶ Kodu Sınaqdan Keçir" düyməsinə basın...';
                        outputText.className = 'exam-test-output-text';
                    }
                    if (outputStatus) outputStatus.textContent = 'İcra gözlənilir';

                    showToast('Kod ilkin vəziyyətinə qaytarıldı', 'info');
                }
            });
        }

        // Progressive hint reveal button
        const revealHintBtn = document.getElementById('exam-reveal-hint-btn');
        if (revealHintBtn) {
            revealHintBtn.addEventListener('click', () => {
                const curIdx = examState.currentIndex;
                const q = examState.questions[curIdx];
                if (!q) return;
                const allHints = getQuestionProgressiveHints(q);
                const currentRevealed = (examState.revealedHints && examState.revealedHints[curIdx]) || 0;
                if (currentRevealed < allHints.length) {
                    if (!examState.revealedHints) examState.revealedHints = {};
                    examState.revealedHints[curIdx] = currentRevealed + 1;
                    renderExamQuestion(curIdx, curIdx);
                }
            });
        }

        // Surrender button and modal actions
        const surrenderBtn = document.getElementById('exam-surrender-btn');
        if (surrenderBtn) {
            surrenderBtn.addEventListener('click', () => {
                if (examState.surrenderedQuestions && examState.surrenderedQuestions.has(examState.currentIndex)) return;
                const modal = document.getElementById('exam-surrender-modal');
                if (modal) {
                    if (modal.showModal) modal.showModal();
                    else modal.classList.remove('hidden');
                }
            });
        }

        const surrenderCancelBtn = document.getElementById('exam-surrender-cancel-btn');
        if (surrenderCancelBtn) {
            surrenderCancelBtn.addEventListener('click', () => {
                const modal = document.getElementById('exam-surrender-modal');
                if (modal) {
                    if (modal.close) modal.close();
                    else modal.classList.add('hidden');
                }
            });
        }

        const surrenderConfirmBtn = document.getElementById('exam-surrender-confirm-btn');
        if (surrenderConfirmBtn) {
            surrenderConfirmBtn.addEventListener('click', () => {
                const modal = document.getElementById('exam-surrender-modal');
                if (modal) {
                    if (modal.close) modal.close();
                    else modal.classList.add('hidden');
                }

                const curIdx = examState.currentIndex;
                if (!examState.surrenderedQuestions) examState.surrenderedQuestions = new Set();
                examState.surrenderedQuestions.add(curIdx);
                examState.validatedQuestions.delete(curIdx);
                
                renderExamQuestion(curIdx, curIdx);
                updateStepperPillState(curIdx);
                showToast('Bu sual üzrə təslim olundu. Düzgün həll göstərildi (0 bal) 🏳️', 'info');
            });
        }

        const examPrevBtn = document.getElementById('exam-prev-btn');
        if (examPrevBtn) {
            examPrevBtn.addEventListener('click', () => {
                if (examState.isPracticeMode) {
                    navigateToPrevSectionPractice();
                } else {
                    if (examState.currentIndex > 0) {
                        renderExamQuestion(examState.currentIndex - 1, examState.currentIndex);
                    }
                }
            });
        }

        const examNextBtn = document.getElementById('exam-next-btn');
        if (examNextBtn) {
            examNextBtn.addEventListener('click', () => {
                if (examState.isPracticeMode) {
                    promptFinishExam();
                } else {
                    if (examState.currentIndex < examState.questions.length - 1) {
                        renderExamQuestion(examState.currentIndex + 1, examState.currentIndex);
                    } else {
                        promptFinishExam();
                    }
                }
            });
        }

        const examNextSecBtn = document.getElementById('exam-next-section-btn');
        if (examNextSecBtn) {
            examNextSecBtn.addEventListener('click', () => {
                navigateToNextSectionPractice();
            });
        }

        const examHeaderNextSecBtn = document.getElementById('exam-header-next-section-btn');
        if (examHeaderNextSecBtn) {
            examHeaderNextSecBtn.addEventListener('click', () => {
                navigateToNextSectionPractice();
            });
        }

        // Exam Modals actions
        const confirmCancelBtn = document.getElementById('exam-confirm-cancel-btn');
        if (confirmCancelBtn) {
            confirmCancelBtn.addEventListener('click', () => {
                const modal = document.getElementById('exam-confirm-modal');
                if (modal) {
                    if (modal.close) modal.close();
                    else modal.classList.add('hidden');
                }
            });
        }

        const confirmSubmitBtn = document.getElementById('exam-confirm-submit-btn');
        if (confirmSubmitBtn) {
            confirmSubmitBtn.addEventListener('click', () => {
                finishExam(false);
            });
        }

        const resultCloseBtn = document.getElementById('exam-result-close-btn');
        if (resultCloseBtn) {
            resultCloseBtn.addEventListener('click', () => {
                const modal = document.getElementById('exam-result-modal');
                if (modal) {
                    if (modal.close) modal.close();
                    else modal.classList.add('hidden');
                }
                showView('exam');
            });
        }

        const resultNewBtn = document.getElementById('exam-result-new-btn');
        if (resultNewBtn) {
            resultNewBtn.addEventListener('click', () => {
                const modal = document.getElementById('exam-result-modal');
                if (modal) {
                    if (modal.close) modal.close();
                    else modal.classList.add('hidden');
                }
                showView('exam');
                startExam();
            });
        }

        // Tasks Panel filters
        const tasksSecFilter = document.getElementById('tasks-section-filter');
        if (tasksSecFilter) {
            tasksSecFilter.addEventListener('change', (e) => {
                state.tasksFilter.section = e.target.value;
                renderTasksPanel();
            });
        }
        const tasksDiffFilter = document.getElementById('tasks-diff-filter');
        if (tasksDiffFilter) {
            tasksDiffFilter.addEventListener('change', (e) => {
                state.tasksFilter.diff = e.target.value;
                renderTasksPanel();
            });
        }
        const tasksSearchInput = document.getElementById('tasks-search-input');
        if (tasksSearchInput) {
            tasksSearchInput.addEventListener('input', (e) => {
                state.tasksFilter.search = e.target.value;
                renderTasksPanel();
            });
        }

        // Errors Panel filters
        const errorsSecFilter = document.getElementById('errors-section-filter');
        if (errorsSecFilter) {
            errorsSecFilter.addEventListener('change', (e) => {
                state.errorsFilter.section = e.target.value;
                applyErrorsFilter();
            });
        }
        const errorsDiffFilter = document.getElementById('errors-diff-filter');
        if (errorsDiffFilter) {
            errorsDiffFilter.addEventListener('change', (e) => {
                state.errorsFilter.diff = e.target.value;
                applyErrorsFilter();
            });
        }
        const errorsSearchInput = document.getElementById('errors-search-input');
        if (errorsSearchInput) {
            errorsSearchInput.addEventListener('input', (e) => {
                state.errorsFilter.search = e.target.value;
                debouncedApplyErrorsFilter();
            });
        }

        // Header Reset Progress button
        const headerResetBtn = document.getElementById('header-reset-progress-btn');
        if (headerResetBtn) {
            headerResetBtn.addEventListener('click', (e) => {
                if (e && e.currentTarget && typeof e.currentTarget.blur === 'function') {
                    e.currentTarget.blur();
                }
                resetAllProgress();
            });
        }

        // Tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
        });

        // Topic navigation
        const prevTopicBtn = document.getElementById('prev-topic-btn');
        if (prevTopicBtn) {
            prevTopicBtn.addEventListener('click', () => {
                const allTopics = getAllTopics();
                const idx = getTopicIndex(state.currentTopicId);
                if (idx > 0) navigateToTopic(allTopics[idx - 1].id);
            });
        }

        const nextTopicBtn = document.getElementById('next-topic-btn');
        if (nextTopicBtn) {
            nextTopicBtn.addEventListener('click', () => {
                const allTopics = getAllTopics();
                const idx = getTopicIndex(state.currentTopicId);
                if (idx < allTopics.length - 1) navigateToTopic(allTopics[idx + 1].id);
            });
        }

        // Mark theory complete
        const markTheoryBtn = document.getElementById('mark-theory-complete');
        if (markTheoryBtn) {
            markTheoryBtn.addEventListener('click', () => {
                setActiveTab('exercises');
                showToast('Tapşırıqlara keçdiniz! 📝', 'info');
            });
        }

        // Sandbox run
        const sandboxRunBtn = document.getElementById('sandbox-run');
        if (sandboxRunBtn) {
            sandboxRunBtn.addEventListener('click', runSandbox);
        }

        // Sandbox clear
        const sandboxClearBtn = document.getElementById('sandbox-clear');
        if (sandboxClearBtn) {
            sandboxClearBtn.addEventListener('click', () => {
                if (state.sandboxEditor) {
                    state.sandboxEditor.setValue('// JavaScript kodunuzu buraya yazın\n\n');
                }
            });
        }

        // Sandbox clear output
        const sandboxClearOutBtn = document.getElementById('sandbox-clear-output');
        if (sandboxClearOutBtn) {
            sandboxClearOutBtn.addEventListener('click', () => {
                const outEl = document.getElementById('sandbox-output');
                if (outEl) outEl.textContent = 'Kodunuzu yazın və "İcra et" düyməsinə basın...';
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Escape to close mobile sidebar
            if (e.key === 'Escape') closeMobileSidebar();

            // Ctrl+Enter or Cmd+Enter to execute code in Playground
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                if (state.currentView === 'playground' || state.currentView === 'sandbox') {
                    e.preventDefault();
                    runPlayground();
                }
            }
        });

        // Initialize Interactive Cursor Tracking for Welcome Snake
        initSnakeTracking();

        // Initialize Auto-collapse for Sidebar Sections
        initSidebarAutoCollapse();
    }

    // =========================================================================
    // MOBILE FLOATING JS SYMBOL ACCESSORY BAR
    // (Fokuslanmış CodeMirror redaktoru üçün virtual klaviatura üzərində panel)
    // =========================================================================
    let activeCodeMirror = null;
    let mobileToolbarBlurTimeout = null;
    const registeredCodeMirrors = new WeakSet();

    function updateMobileKeyboardBarPosition() {
        const bar = document.getElementById('mobile-js-keyboard-bar');
        if (!bar || bar.style.display === 'none' || window.innerWidth > 768) return;

        const vv = window.visualViewport;
        if (vv) {
            const barHeight = bar.offsetHeight || 48;
            // Dock flush directly above virtual keyboard using visualViewport
            const topPos = Math.round(vv.offsetTop + vv.height - barHeight);
            bar.style.top = `${Math.max(0, topPos)}px`;
            bar.style.bottom = 'auto';
        } else {
            bar.style.top = 'auto';
            bar.style.bottom = '0px';
        }
    }

    function showMobileKeyboardBar() {
        if (window.innerWidth > 768) return;
        const bar = document.getElementById('mobile-js-keyboard-bar');
        if (!bar) return;
        bar.style.display = 'flex';
        updateMobileKeyboardBarPosition();
    }

    function hideMobileKeyboardBar() {
        const bar = document.getElementById('mobile-js-keyboard-bar');
        if (!bar) return;
        bar.style.display = 'none';
    }

    function handleCodeMirrorFocus(cm) {
        if (mobileToolbarBlurTimeout) {
            clearTimeout(mobileToolbarBlurTimeout);
            mobileToolbarBlurTimeout = null;
        }
        activeCodeMirror = cm;
        showMobileKeyboardBar();
    }

    function handleCodeMirrorBlur(cm) {
        if (activeCodeMirror === cm) {
            mobileToolbarBlurTimeout = setTimeout(() => {
                if (activeCodeMirror === cm) {
                    activeCodeMirror = null;
                    hideMobileKeyboardBar();
                }
            }, 180);
        }
    }

    function registerCodeMirrorForMobileToolbar(cm) {
        if (!cm || typeof cm.on !== 'function' || registeredCodeMirrors.has(cm)) return;
        registeredCodeMirrors.add(cm);

        cm.on('focus', () => handleCodeMirrorFocus(cm));
        cm.on('blur', () => handleCodeMirrorBlur(cm));
    }

    function initMobileKeyboardBar() {
        const bar = document.getElementById('mobile-js-keyboard-bar');
        if (!bar) return;

        // 1. Hook CodeMirror init mechanism if available globally
        if (typeof CodeMirror !== 'undefined' && typeof CodeMirror.defineInitHook === 'function') {
            CodeMirror.defineInitHook((cm) => {
                registerCodeMirrorForMobileToolbar(cm);
            });
        }

        // 2. Global focus listener via event delegation to catch any CodeMirror instance
        document.addEventListener('focusin', (e) => {
            const cmEl = e.target && e.target.closest && e.target.closest('.CodeMirror');
            if (cmEl && cmEl.CodeMirror) {
                registerCodeMirrorForMobileToolbar(cmEl.CodeMirror);
                handleCodeMirrorFocus(cmEl.CodeMirror);
            }
        }, true);

        // 3. Track visualViewport resize and scroll on touch/mobile devices
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', updateMobileKeyboardBarPosition);
            window.visualViewport.addEventListener('scroll', updateMobileKeyboardBarPosition);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hideMobileKeyboardBar();
            } else if (activeCodeMirror) {
                showMobileKeyboardBar();
            }
        });

        window.addEventListener('scroll', updateMobileKeyboardBarPosition, { passive: true });

        // 4. Non-blurring symbol button interactions
        const symbolBtns = bar.querySelectorAll('.mobile-js-btn');
        let lastInsertTime = 0;

        function insertSymbol(symbol) {
            if (!activeCodeMirror) return;
            const now = Date.now();
            if (now - lastInsertTime < 120) return;
            lastInsertTime = now;

            try {
                activeCodeMirror.replaceSelection(symbol, 'end');
                activeCodeMirror.focus();
                if (navigator.vibrate) {
                    try { navigator.vibrate(12); } catch (_) {}
                }
            } catch (err) {
                console.warn('[MobileToolbar] Simvol daxil edilərkən xəta:', err);
            }
        }

        symbolBtns.forEach(btn => {
            const symbol = btn.getAttribute('data-symbol');
            if (!symbol) return;

            let touchHandled = false;

            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                touchHandled = true;
                if (mobileToolbarBlurTimeout) {
                    clearTimeout(mobileToolbarBlurTimeout);
                    mobileToolbarBlurTimeout = null;
                }
                insertSymbol(symbol);
            }, { passive: false });

            btn.addEventListener('mousedown', (e) => {
                e.preventDefault();
                if (touchHandled) {
                    touchHandled = false;
                    return;
                }
                if (mobileToolbarBlurTimeout) {
                    clearTimeout(mobileToolbarBlurTimeout);
                    mobileToolbarBlurTimeout = null;
                }
                insertSymbol(symbol);
            });
        });

        // 5. Register any already existing CodeMirror instances in memory
        if (state.sandboxEditor) registerCodeMirrorForMobileToolbar(state.sandboxEditor);
        if (typeof examState !== 'undefined' && examState.editorInstance) registerCodeMirrorForMobileToolbar(examState.editorInstance);
        if (typeof hourglassState !== 'undefined' && hourglassState.editorInstance) registerCodeMirrorForMobileToolbar(hourglassState.editorInstance);
        if (typeof window !== 'undefined' && window.hourglassEditor) registerCodeMirrorForMobileToolbar(window.hourglassEditor);
        if (typeof ecosystemEditor !== 'undefined' && ecosystemEditor) registerCodeMirrorForMobileToolbar(ecosystemEditor);
        if (state.panelEditors) {
            Object.values(state.panelEditors).forEach(registerCodeMirrorForMobileToolbar);
        }
    }

    // ---- Initialization ----
    async function init() {
        // Initialize Modern Asynchronous Storage Engine (IndexedDB + Migration)
        if (typeof StorageEngine !== 'undefined') {
            try {
                await StorageEngine.init();
            } catch (err) {
                console.warn('[App] StorageEngine inisializasiya xətası:', err);
            }
        }

        // Build curriculum from loaded data files
        try {
            buildCurriculum();
        } catch (err) {
            console.error('[App] buildCurriculum xətası:', err);
        }

        // Load saved progress
        try {
            loadProgress();
        } catch (err) {
            console.error('[App] loadProgress xətası:', err);
        }

        // Persist standardized unified state schema initially
        try {
            saveProgress();
        } catch (err) {
            console.warn('[App] saveProgress xətası:', err);
        }

        // Init theme
        try {
            initTheme();
        } catch (err) {
            console.warn('[App] initTheme xətası:', err);
        }

        // Render navigation
        try {
            renderNav();
        } catch (err) {
            console.error('[App] renderNav xətası:', err);
        }

        try {
            updateProgressBar();
        } catch (err) {
            console.warn('[App] updateProgressBar xətası:', err);
        }

        // Setup event listeners
        try {
            setupEventListeners();
        } catch (err) {
            console.error('[App] setupEventListeners xətası:', err);
        }

        // Initialize Mobile JS Keyboard Toolbar
        try {
            initMobileKeyboardBar();
        } catch (err) {
            console.warn('[App] initMobileKeyboardBar xətası:', err);
        }

        // Load JavaScript execution environment
        try {
            await initJavaScriptEngine();
        } catch (err) {
            console.warn('[App] initJavaScriptEngine xətası:', err);
        }

        // Hide loading screen, show app
        const loadingScreen = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                if (loadingScreen && loadingScreen.parentNode) {
                    loadingScreen.remove();
                }
            }, 500);
        }

        if (app) {
            app.classList.remove('hidden');
        }

        // Default View Initialization: Always land on Welcome Dashboard on initial load and refresh
        state.currentTopicId = null;
        if (typeof window !== 'undefined' && window.location && window.location.hash) {
            try {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            } catch (e) {}
        }
        showView('welcome');
    }

    if (typeof window !== 'undefined') {
        window.appState = state;
        window.state = state;
        window.syncPlatformProgress = syncPlatformProgress;
        window.saveProgress = saveProgress;
        window.loadProgress = loadProgress;
        window.resetAllProgress = resetAllProgress;
        window.updateProgressBar = updateProgressBar;
        window.renderHeroStats = renderHeroStats;
        window.renderProgressView = renderProgressView;
        window.openHourglassWorkspace = openHourglassWorkspace;
        window.closeHourglassWorkspace = closeHourglassWorkspace;
        window.hourglassState = hourglassState;
        window.getHourglassChallenges = getHourglassChallenges;
        window.renderHourglassWorkspace = renderHourglassWorkspace;
        window.resetHourglassTerminalToIdle = resetHourglassTerminalToIdle;
    }

    // Start the app
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
