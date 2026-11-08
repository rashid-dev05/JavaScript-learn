/**
 * JSÖyrən - Yol Xəritəsi (Learning Roadmap) Engine
 * 5 Mərhələli (5-Stage) Proqressiv Mühəndislik Arxitekturası
 * 21 Bölmə üzrə Tam Full-Stack Kurikulumu
 */

// 5 Mərhələli Kurikulum Arxitekturası
const ROADMAP_STAGES = [
    {
        stage: 1,
        num: "01",
        title: "Proqramlaşdırmanın Təməlləri",
        theme: "JavaScript Sintaksisi və Alqoritmik Məntiq",
        desc: "JavaScript dilinin sintaksisi, məlumat tipləri, riyazi və məntiqi operatorlar, şərt budaqları və təməl dövrlər.",
        range: "Bölmə 01 – 05",
        accent: "#10B981",
        accentRgb: "16, 185, 129",
        secIndices: [0, 1, 2, 3, 4]
    },
    {
        stage: 2,
        num: "02",
        title: "Dərinləşmə və Məlumat Strukturları",
        theme: "Funksiyalar, Obyektlər və Müasir ES6+",
        desc: "Massiv kolleksiyaları, funksiyalar, obyektlər, JSON, string metodları, xəta idarəetməsi, ES6 OOP və asinxronluq.",
        range: "Bölmə 06 – 13",
        accent: "#3B82F6",
        accentRgb: "59, 130, 246",
        secIndices: [5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        stage: 3,
        num: "03",
        title: "DOM, Hadisələr və Web API-lər",
        theme: "İnteraktiv Brauzer Mühiti və Şəbəkə",
        desc: "DOM ağacı, hadisə dinləyiciləri, forma validasiyası, brauzer yaddaşı (localStorage) və Fetch şəbəkə sorğuları.",
        range: "Bölmə 14 – 17",
        accent: "#F59E0B",
        accentRgb: "245, 158, 11",
        secIndices: [13, 14, 15, 16]
    },
    {
        stage: 4,
        num: "04",
        title: "Server Tərəfli JavaScript",
        theme: "Node.js Runtime və Server İnfrastrukturu",
        desc: "V8/Libuv icra mühiti, daxili fs/path modulları, npm ekosistemi, HTTP protokolu və Express.js arxitekturası.",
        range: "Bölmə 18 – 19",
        accent: "#8B5CF6",
        accentRgb: "139, 92, 246",
        secIndices: [17, 18]
    },
    {
        stage: 5,
        num: "05",
        title: "Full-Stack İnteqrasiya və Təhlükəsizlik",
        theme: "İstehsalata Hazır Arxitektura və Verilənlər Bazası",
        desc: "RESTful API konvensiyaları, tam CRUD əməliyyatları, mərkəzi xəta middleware-i, SQL/NoSQL əlaqəsi və CORS təhlükəsizliyi.",
        range: "Bölmə 20 – 21",
        accent: "#F43F5E",
        accentRgb: "244, 63, 94",
        secIndices: [19, 20]
    }
];

// 21 Bölmə üzrə Ətraflı Yol Xəritəsi Metadata Məlumatı
const ROADMAP_METADATA = [
    // --- MƏRHƏLƏ 1: Proqramlaşdırmanın Təməlləri (Bölmə 1 – 5) ---
    {
        secIndex: 0,
        stage: 1,
        num: "01",
        badge: "Təməl",
        difficulty: "Təməl",
        diffClass: "temel",
        title: "JS-ə Giriş və console.log()",
        desc: "Brauzer konsoluna çıxış, formatlaşdırma və JavaScript sintaksis əsasları.",
        tags: ["console.log() & console.error()", "Bir və çoxsətirli şərhlər", "Veb konsolunun iş prinsipi"]
    },
    {
        secIndex: 1,
        stage: 1,
        num: "02",
        badge: "Tiplər",
        difficulty: "Təməl",
        diffClass: "temel",
        title: "Dəyişənlər və Primitiv Tiplər",
        desc: "let, const, var fərqləri və JavaScript-in 7 primitiv məlumat tipi.",
        tags: ["let, const və köhnə var sahəsi", "NaN, Infinity & IEEE 754 Qaydaları", "null və undefined fərqi"]
    },
    {
        secIndex: 2,
        stage: 1,
        num: "03",
        badge: "Operatorlar",
        difficulty: "Təməl",
        diffClass: "temel",
        title: "Operatorlar və Riyazi Əməliyyatlar",
        desc: "Arifmetik hesablamalar, ciddi bərabərlik (===) və məntiqi operatorlar.",
        tags: ["Ciddi müqayisə (=== vs ==)", "Məntiqi operatorlar (&&, ||, !)", "Avtomatik tip çevrilməsi (Coercion)"]
    },
    {
        secIndex: 3,
        stage: 1,
        num: "04",
        badge: "Şərtlər",
        difficulty: "Təməl",
        diffClass: "temel",
        title: "Şərt Operatorları (if/else, switch, ternary)",
        desc: "Qərarların qəbulu, if-else budaqlanması, ternary operator və switch-case.",
        tags: ["if, else if, else budaqları", "Qısa şərt (ternary: ?:)", "switch-case və break ifadəsi"]
    },
    {
        secIndex: 4,
        stage: 1,
        num: "05",
        badge: "Dövrlər",
        difficulty: "Təməl",
        diffClass: "temel",
        title: "Dövrələr (for, while, do...while)",
        desc: "Təkrarlanan əməliyyatların idarə edilməsi, for, while və müasir iterasiyalar.",
        tags: ["Klassik for və while dövrləri", "for...of və for...in fərqləri", "break və continue idarəetməsi"]
    },

    // --- MƏRHƏLƏ 2: Dərinləşmə və Məlumat Strukturları (Bölmə 6 – 13) ---
    {
        secIndex: 5,
        stage: 2,
        num: "06",
        badge: "Massivlər",
        difficulty: "Orta",
        diffClass: "orta",
        title: "Massivlər (Arrays) və Əsas Metodlar",
        desc: "Sıralı kolleksiyalar, indeksləmə, push, pop, shift, unshift və slice/splice metodları.",
        tags: ["Massiv indeksi və .length", "push(), pop(), shift(), unshift()", "slice() və splice() manipulyasiyası"]
    },
    {
        secIndex: 6,
        stage: 2,
        num: "07",
        badge: "Funksiyalar",
        difficulty: "Orta",
        diffClass: "orta",
        title: "Funksiyalar və Arrow Funksiyaları",
        desc: "Təkrar istifadə edilən kod blokları, ox funksiyaları, parametrlər və return.",
        tags: ["Function Declaration vs Expression", "Müasir Ox Funksiyaları (() => {})", "Parametrlər, Arguments və Return"]
    },
    {
        secIndex: 7,
        stage: 2,
        num: "08",
        badge: "Obyektlər",
        difficulty: "Orta",
        diffClass: "orta",
        title: "Obyektlər, JSON və Destructuring",
        desc: "Açar-dəyər cütləri, this konteksti, JSON serializasiyası və Spread/Rest operatoru.",
        tags: ["Obyekt xassələri və metodlar", "JSON.stringify() & JSON.parse()", "Destructuring və Spread/Rest (...)"]
    },
    {
        secIndex: 8,
        stage: 2,
        num: "09",
        badge: "Mətnlər",
        difficulty: "Orta",
        diffClass: "orta",
        title: "String Metodları və Şablon Sətirlər",
        desc: "Mətn manipulyasiyası, axtarış, sətir dəyişdirilməsi və Template Literals.",
        tags: ["Şablon sətirlər (`${dəyişən}`)", "includes(), startsWith(), endsWith()", "replace(), toUpperCase(), trim()"]
    },
    {
        secIndex: 9,
        stage: 2,
        num: "10",
        badge: "Xətalar",
        difficulty: "Orta",
        diffClass: "orta",
        title: "Xətaların İdarə Edilməsi (try...catch, throw)",
        desc: "Proqram çökmələrinin qarşısının alınması, try, catch, finally və xüsusi Error-lar.",
        tags: ["try, catch, finally blokları", "throw new Error() ilə xəta atmaq", "TypeError və ReferenceError sazlanması"]
    },
    {
        secIndex: 10,
        stage: 2,
        num: "11",
        badge: "Funksional",
        difficulty: "Orta",
        diffClass: "orta",
        title: "Massivlərin İterasiya Metodları (map, filter, reduce)",
        desc: "İmmutable verilənlər axını, funksional massiv transformasiyaları və axtarış.",
        tags: [".map() ilə elementləri dəyişmək", ".filter() ilə süzgəcdən keçirmək", ".reduce() ilə toplama və aqreqasiya"]
    },
    {
        secIndex: 11,
        stage: 2,
        num: "12",
        badge: "OOP",
        difficulty: "Orta",
        diffClass: "orta",
        title: "ES6 OOP (Class, Constructor, İrsiyyət) və Modullar",
        desc: "Obyektyönümlü proqramlaşdırma, siniflər, extends, super və ES modulları.",
        tags: ["class və constructor sintaksisi", "extends və super() ilə irsiyyət", "import və export modulları"]
    },
    {
        secIndex: 12,
        stage: 2,
        num: "13",
        badge: "Asinxron",
        difficulty: "Orta",
        diffClass: "orta",
        title: "Asinxron JS: Callbacks, Promises və async/await",
        desc: "Brauzer Event Loop, Microtask Queue, Promises zənciri və müasir async/await.",
        tags: ["Event Loop & Microtask Queue", "Promise (.then, .catch, .finally)", "async/await sinxron-görünüşlü axın"]
    },

    // --- MƏRHƏLƏ 3: DOM, Hadisələr və Web API-lər (Bölmə 14 – 17) ---
    {
        secIndex: 13,
        stage: 3,
        num: "14",
        badge: "DOM Əsasları",
        difficulty: "Qabaqcıl",
        diffClass: "qabaqcil",
        title: "DOM Əsasları və Elementlərin Seçilməsi",
        desc: "HTML DOM ağacı, müasir seçicilər, məzmun dəyişdirilməsi və dinamik CSS sinifləri.",
        tags: ["document.querySelector & getElementById", "textContent vs innerHTML və atributlar", "classList (.add, .remove, .toggle)"]
    },
    {
        secIndex: 14,
        stage: 3,
        num: "15",
        badge: "Hadisələr",
        difficulty: "Qabaqcıl",
        diffClass: "qabaqcil",
        title: "DOM Hadisələri və Formalar (addEventListener, Delegation)",
        desc: "İstifadəçi interaksiyası, preventDefault(), forma validasiyası və Event Delegation.",
        tags: ["addEventListener & Event obyekti", "e.preventDefault() & forma idarəsi", "Event Bubbling & Event Delegation"]
    },
    {
        secIndex: 15,
        stage: 3,
        num: "16",
        badge: "Web APIs",
        difficulty: "Qabaqcıl",
        diffClass: "qabaqcil",
        title: "Brauzer Yaddaşı (localStorage) və Web API-lər",
        desc: "Klient tərəfli daimi yaddaş, JSON saxlama, dəqiq taymerlər və müasir Web API-lər.",
        tags: ["localStorage & sessionStorage (JSON)", "setInterval & requestAnimationFrame", "Clipboard & Geolocation API"]
    },
    {
        secIndex: 16,
        stage: 3,
        num: "17",
        badge: "Fetch & REST",
        difficulty: "Qabaqcıl",
        diffClass: "qabaqcil",
        title: "Şəbəkə Sorğuları (Fetch API, AJAX və REST)",
        desc: "HTTP metodları (GET, POST, PUT, DELETE), async/await ilə JSON axını və UI vəziyyətləri.",
        tags: ["fetch(url, options) & HTTP metodları", "await response.json() & DOM render", "Loading, Error & response.ok yoxlaması"]
    },

    // --- MƏRHƏLƏ 4: Server Tərəfli JavaScript (Bölmə 18 – 19) ---
    {
        secIndex: 17,
        stage: 4,
        num: "18",
        badge: "Node.js",
        difficulty: "Peşəkar",
        diffClass: "pesekar",
        title: "Node.js Əsasları, fs/path Modulları və npm",
        desc: "Server mühiti, process/global obyektləri, fayl sistemi və npm paket idarəetməsi.",
        tags: ["process & global (Node vs Brauzer)", "fs.promises & path.join()", "CommonJS (require) & package.json"]
    },
    {
        secIndex: 18,
        stage: 4,
        num: "19",
        badge: "Express.js",
        difficulty: "Peşəkar",
        diffClass: "pesekar",
        title: "HTTP Protokolu və Express.js ilə Server Qurulması",
        desc: "HTTP sorğu/cavab dövrü, status kodları, Express routing və Middleware konveyeri.",
        tags: ["HTTP Metodları & Status Kodları", "Express Routing & Parametrlər", "Middleware Konveyeri, next() & Auth"]
    },

    // --- MƏRHƏLƏ 5: Full-Stack İnteqrasiya və Təhlükəsizlik (Bölmə 20 – 21) ---
    {
        secIndex: 19,
        stage: 5,
        num: "20",
        badge: "REST & CRUD",
        difficulty: "Usta",
        diffClass: "usta",
        title: "RESTful API Arxitekturası və Tam CRUD Əməliyyatları",
        desc: "Standart REST konvensiyaları, tam CRUD xidməti və mərkəzləşdirilmiş xəta idarəetməsi.",
        tags: ["RESTful Dizayn (GET, POST, PUT, DELETE)", "Tam CRUD Dövrü & 404 Yoxlamaları", "4-Arqumentli Mərkəzi Xəta Handler"]
    },
    {
        secIndex: 20,
        stage: 5,
        num: "21",
        badge: "Baza & Təhlükəsizlik",
        difficulty: "Usta",
        diffClass: "usta",
        title: "Verilənlər Bazası (SQL/NoSQL) və Təhlükəsizlik Əsasları (CORS, .env)",
        desc: "SQL vs NoSQL modelləri, parametrləşdirilmiş sorğular, .env və CORS təhlükəsizliyi.",
        tags: ["SQL vs NoSQL & Relyasion Baza Modelləri", "pg Pool ($1 sorğuları) & .env Mühit Dəyişənləri", "CORS Middleware & Preflight Sorğuları"]
    }
];

/**
 * Qlobal kurikulum məlumatlarını etibarlı şəkildə əldə edir (fallback mexanizmi)
 * @returns {Array}
 */
function getGlobalCurriculumFallback() {
    if (typeof CURRICULUM !== 'undefined' && Array.isArray(CURRICULUM) && CURRICULUM.length > 0) {
        return CURRICULUM;
    }
    if (typeof window !== 'undefined') {
        if (window.curriculumData && Array.isArray(window.curriculumData.sections) && window.curriculumData.sections.length > 0) {
            return window.curriculumData.sections;
        }
        if (window.CURRICULUM && Array.isArray(window.CURRICULUM) && window.CURRICULUM.length > 0) {
            return window.CURRICULUM;
        }
        const assembled = [];
        if (typeof SECTIONS_1_5 !== 'undefined') assembled.push(...SECTIONS_1_5);
        if (typeof SECTIONS_6_9 !== 'undefined') assembled.push(...SECTIONS_6_9);
        if (typeof SECTIONS_10_13 !== 'undefined') assembled.push(...SECTIONS_10_13);
        if (typeof SECTIONS_14 !== 'undefined') assembled.push(...SECTIONS_14);
        if (typeof SECTIONS_15 !== 'undefined') assembled.push(...SECTIONS_15);
        if (typeof SECTIONS_16 !== 'undefined') assembled.push(...SECTIONS_16);
        if (typeof SECTIONS_17 !== 'undefined') assembled.push(...SECTIONS_17);
        if (typeof SECTIONS_18 !== 'undefined') assembled.push(...SECTIONS_18);
        if (typeof SECTIONS_19 !== 'undefined') assembled.push(...SECTIONS_19);
        if (typeof SECTIONS_20 !== 'undefined') assembled.push(...SECTIONS_20);
        if (typeof SECTIONS_21 !== 'undefined') assembled.push(...SECTIONS_21);
        if (assembled.length > 0) return assembled;
    }
    return [];
}

/**
 * 21 bölmə üzrə bütün mövcud real tapşırıq və xəta sazlama ID-lərinin siyahısını toplayır.
 * Yetim, köhnəlmiş və ya kənar panel identifikatorlarını aradan qaldırmaq üçün yeganə etibarlı filtrdir.
 * @param {Array} [curriculum]
 * @returns {Set<string>}
 */
function getAllCurriculumTaskIds(curriculum) {
    const cur = (Array.isArray(curriculum) && curriculum.length > 0) ? curriculum : getGlobalCurriculumFallback();
    const validIds = new Set();
    if (!Array.isArray(cur)) return validIds;

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
    return validIds;
}

/**
 * Kurikulumdakı bütün aktiv bölmələr üzrə interaktiv tapşırıqların dəqiq dinamik məxrəcini hesablayır.
 * @param {Array} [curriculum]
 * @returns {number}
 */
function calculateTotalCurriculumTasks(curriculum) {
    const cur = (Array.isArray(curriculum) && curriculum.length > 0) ? curriculum : getGlobalCurriculumFallback();
    if (!Array.isArray(cur) || cur.length === 0) return 0;

    return cur.reduce((total, section) => {
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
}

/**
 * Yalnız təsdiqlənmiş kurikulum tapşırıq ID-lərinə uyğun gələn tamamlanmış tapşırıq sayını hesablayır.
 * Fantom və ya panel tapşırıqlarını kurikulum sayğacına daxil etmir.
 * @param {Object} [curState]
 * @param {Array} [curriculum]
 * @returns {number}
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

/**
 * Bölmə üzrə irəliləyiş və tapşırıq sayğaclarını hesablayır
 */
function getSectionCardData(meta, state, curriculum) {
    const secNum = meta.secIndex + 1;
    const sec = curriculum && curriculum[meta.secIndex];
    const subtopicsCount = sec && Array.isArray(sec.topics) ? sec.topics.length : (meta.subtopicsCount || 0);

    let totalExercisesInSec = 0;
    let solvedExercisesInSec = 0;
    let completedTopicsCount = 0;

    if (sec && Array.isArray(sec.topics)) {
        sec.topics.forEach(t => {
            if (state && state.completedTopics && state.completedTopics.has(t.id)) {
                completedTopicsCount++;
            }
            if (Array.isArray(t.exercises)) {
                totalExercisesInSec += t.exercises.length;
                t.exercises.forEach(ex => {
                    if (state && state.completedExercises && state.completedExercises.has(ex.id)) {
                        solvedExercisesInSec++;
                    }
                });
            } else if (t.exercise && t.exercise.id) {
                totalExercisesInSec += 1;
                if (state && state.completedExercises && state.completedExercises.has(t.exercise.id)) {
                    solvedExercisesInSec++;
                }
            }
            if (Array.isArray(t.bugFixes)) {
                totalExercisesInSec += t.bugFixes.length;
                t.bugFixes.forEach(bf => {
                    if (state && state.completedBugFixes && state.completedBugFixes.has(bf.id)) {
                        solvedExercisesInSec++;
                    }
                });
            } else if (t.bugFix && t.bugFix.id) {
                totalExercisesInSec += 1;
                if (state && state.completedBugFixes && state.completedBugFixes.has(t.bugFix.id)) {
                    solvedExercisesInSec++;
                }
            }
        });
    }

    // Yalnız cari kurikulum bölməsinin real tapşırıqları (Panel tapşırıqları kurikulum kartlarına daxil edilmir)
    const totalChallenges = totalExercisesInSec;
    const solvedTotal = solvedExercisesInSec;

    // Status və Tamamlanma faizi
    const isAllTopicsCompleted = subtopicsCount > 0 && completedTopicsCount >= subtopicsCount;
    const isAllTasksSolved = totalChallenges > 0 && solvedTotal >= totalChallenges;
    const isCompleted = isAllTopicsCompleted || isAllTasksSolved;

    let statusKey = 'not-started';
    let statusText = 'Başlanmayıb';
    let pct = 0;

    if (isCompleted) {
        statusKey = 'completed';
        statusText = 'Tamamlandı ✓';
        pct = 100;
    } else if (completedTopicsCount > 0 || solvedTotal > 0) {
        statusKey = 'in-progress';
        statusText = 'Davam edir';
        pct = totalChallenges > 0 ? Math.min(95, Math.max(5, Math.round((solvedTotal / totalChallenges) * 100))) : 10;
    }

    return {
        secNum,
        subtopicsCount,
        exercisesCount: totalChallenges,
        solvedCount: solvedTotal,
        completedTopicsCount,
        statusKey,
        statusText,
        pct,
        isCompleted
    };
}

/**
 * 5 Mərhələli İnteraktiv Yol Xəritəsini Rəngarəng Maye-Şüşə (Liquid Glass) blokları ilə render edir
 */
function renderRoadmap(options = {}) {
    const container = document.getElementById('roadmap-phases-container');
    if (!container) return 0;
    container.innerHTML = '';

    const curState = options.state || (typeof state !== 'undefined' ? state : {
        completedTopics: new Set(),
        completedExercises: new Set(),
        completedBugFixes: new Set(),
        completedPanelTasks: new Set(),
        completedPanelErrors: new Set()
    });

    const curriculum = options.curriculum || (typeof CURRICULUM !== 'undefined' ? CURRICULUM : []);
    const onNavigate = options.navigateToTopic || (typeof navigateToTopic === 'function' ? navigateToTopic : null);
    const onToast = options.showToast || (typeof showToast === 'function' ? showToast : null);

    let grandTotalSolved = 0;
    let completedSectionsCount = 0;
    const stageCompletionStates = [];

    // Hər bir Mərhələni (Stage) render et
    ROADMAP_STAGES.forEach((stg, stgIdx) => {
        let stageSolvedSecs = 0;
        let stageTotalSecs = stg.secIndices.length;

        // Stage Block Wrapper
        const stageBlock = document.createElement('div');
        stageBlock.className = 'roadmap-stage-block';
        stageBlock.dataset.stage = stg.stage;
        stageBlock.style.setProperty('--stage-accent', stg.accent);
        stageBlock.style.setProperty('--stage-accent-rgb', stg.accentRgb);

        // Stage daxilindəki kartların məlumatlarını topla
        const stageCardsData = stg.secIndices.map(secIdx => {
            const meta = ROADMAP_METADATA[secIdx];
            const data = getSectionCardData(meta, curState, curriculum);
            if (data.isCompleted) {
                stageSolvedSecs++;
                completedSectionsCount++;
            }
            grandTotalSolved += data.solvedCount;
            return { meta, data };
        });

        const isStageFullyCompleted = stageSolvedSecs === stageTotalSecs && stageTotalSecs > 0;
        const isStageInProgress = stageSolvedSecs > 0 && !isStageFullyCompleted;
        const stagePct = stageTotalSecs > 0 ? Math.round((stageSolvedSecs / stageTotalSecs) * 100) : 0;
        stageCompletionStates.push(isStageFullyCompleted);

        // Stage Header Card
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

        // Section Cards Grid
        const cardsGrid = document.createElement('div');
        cardsGrid.className = 'phase-cards-grid roadmap-stage-cards-grid';
        cardsGrid.id = `phase-cards-${stg.stage}`;

        stageCardsData.forEach(({ meta, data }) => {
            const card = document.createElement('div');
            card.className = `roadmap-card stage-card-${stg.stage}`;
            card.dataset.sectionIndex = meta.secIndex;
            card.dataset.stage = stg.stage;

            card.innerHTML = `
                <div class="card-watermark">${meta.num}</div>
                <div class="card-top">
                    <span class="card-pill">Bölmə ${meta.num}</span>
                    <div class="card-badges-wrap">
                        <span class="card-difficulty-pill diff-${meta.diffClass}">${meta.difficulty}</span>
                        <span class="card-status-badge status-${data.statusKey}">${data.statusText}</span>
                    </div>
                </div>
                <h3 class="card-title">${meta.title}</h3>
                <p class="card-desc">${meta.desc}</p>
                
                <div class="card-meta-counts">
                    <span class="meta-item"><span class="meta-icon">📖</span> ${data.subtopicsCount} mövzu</span>
                    <span class="meta-divider">•</span>
                    <span class="meta-item"><span class="meta-icon">⚡</span> ${data.exercisesCount} tapşırıq</span>
                </div>

                <ul class="card-tags">
                    ${meta.tags.map(t => `<li>${t}</li>`).join('')}
                </ul>

                <div class="card-progress-footer">
                    <div class="card-progress-bar">
                        <div class="card-progress-fill" style="width: ${data.pct}%;"></div>
                    </div>
                    <span class="card-progress-label">${data.isCompleted ? 'Tamamlandı ✓' : `${data.solvedCount}/${data.exercisesCount} həll edilib`}</span>
                </div>
            `;

            card.addEventListener('click', () => {
                if (curriculum && curriculum[meta.secIndex]) {
                    const sec = curriculum[meta.secIndex];
                    const firstUncompleted = sec.topics.find(t => !curState.completedTopics.has(t.id));
                    const targetTopic = firstUncompleted || sec.topics[0];
                    if (targetTopic && onNavigate) {
                        onNavigate(targetTopic.id);
                        if (onToast) onToast(`"${sec.title}" dərslərinə keçdiniz! 🚀`, 'info');
                    }
                }
            });

            cardsGrid.appendChild(card);
        });

        stageBlock.appendChild(cardsGrid);
        container.appendChild(stageBlock);

        // Mərhələlər arası İşıqlı Şaquli Əlaqələndirici (Vertical Stage Connector)
        if (stgIdx < ROADMAP_STAGES.length - 1) {
            const nextStage = ROADMAP_STAGES[stgIdx + 1];
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

    // Tək etibarlı mənbədən (Single-Source-of-Truth) dinamik hesablamalar
    const totalCurriculumTasks = calculateTotalCurriculumTasks(curriculum);
    const validCompletedTasks = getValidCompletedTaskCount(curState, curriculum);
    const totalSectionsCount = (Array.isArray(curriculum) && curriculum.length > 0) ? curriculum.length : 21;

    // Ümumi irəliləyiş faizi: Həm tamamlanan bölmələri, həm də həll edilən tapşırıqları əks etdirir
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

    return {
        grandTotalSolved: validCompletedTasks,
        completedSectionsCount,
        totalSectionsCount,
        totalCurriculumTasks,
        overallPct
    };
}

// Qlobal mühitə eksport et
if (typeof window !== 'undefined') {
    window.ROADMAP_STAGES = ROADMAP_STAGES;
    window.ROADMAP_METADATA = ROADMAP_METADATA;
    window.getSectionCardData = getSectionCardData;
    window.renderRoadmap = renderRoadmap;
    window.getAllCurriculumTaskIds = getAllCurriculumTaskIds;
    window.calculateTotalCurriculumTasks = calculateTotalCurriculumTasks;
    window.getValidCompletedTaskCount = getValidCompletedTaskCount;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ROADMAP_STAGES,
        ROADMAP_METADATA,
        getSectionCardData,
        renderRoadmap,
        getAllCurriculumTaskIds,
        calculateTotalCurriculumTasks,
        getValidCompletedTaskCount
    };
}
