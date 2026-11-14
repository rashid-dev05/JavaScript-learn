/**
 * JSÖyrən - İmtahan Mərkəzi Sual Bankı (Question Bank) Modulu
 * Bütün 21 Kurikulum Bölməsi üzrə Sualların Təşkili, Filtrlənməsi və Fərdi Məşq Sistemi
 * 100% Azərbaycan Dilində, Liquid-Glass UX və Performant DocumentFragment Renderi
 */

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.QuestionBank = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    // 21 Kurikulum Bölməsinin Rəsmi Adları
    const SECTION_TITLES = {
        1: "JS-ə Giriş və console.log()",
        2: "Dəyişənlər və Primitiv Tiplər",
        3: "Operatorlar və Riyazi Əməliyyatlar",
        4: "Şərt Operatorları (if/else, switch, ternary)",
        5: "Dövrlər (for, while, do...while)",
        6: "Massivlər (Arrays) və Əsas Metodlar",
        7: "Funksiyalar və Arrow Funksiyaları",
        8: "Obyektlər, JSON və Destructuring",
        9: "String Metodları və Şablon Sətirlər",
        10: "Xətaların İdarə Edilməsi (try...catch, throw)",
        11: "Massivlərin İterasiya Metodları (map, filter, reduce)",
        12: "ES6 OOP (Class, Constructor, İrsiyyət) və Modullar",
        13: "Asinxron JS: Callbacks, Promises və async/await",
        14: "DOM Əsasları və Elementlərin Seçilməsi",
        15: "DOM Hadisələri və Formalar (addEventListener, Delegation)",
        16: "Brauzer Yaddaşı (localStorage) və Web API-lər",
        17: "Şəbəkə Sorğuları (Fetch API, AJAX və REST)",
        18: "Node.js Əsasları, fs/path Modulları və npm",
        19: "HTTP Protokolu və Express.js ilə Server Qurulması",
        20: "RESTful API Arxitekturası və Tam CRUD Əməliyyatları",
        21: "Verilənlər Bazası (Database) Əlaqəsi və Təhlükəsizlik"
    };

    let debounceTimer = null;

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function stripHtml(html) {
        if (!html) return '';
        return String(html)
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getDiffClass(diff) {
        if (!diff) return 'diff-asan';
        const d = String(diff).toUpperCase().trim();
        if (d === 'ASAN') return 'diff-asan';
        if (d === 'ORTA' || d === 'ORTA-ASAN') return 'diff-orta-asan';
        if (d === 'ÇƏTİN' || d === 'CETIN' || d === 'ORTA-ÇƏTİN' || d === 'ORTA-CETIN') return 'diff-orta-cetin';
        if (d === 'EKSPERT') return 'diff-cetin';
        return 'diff-asan';
    }

    function getQuestionsData() {
        if (typeof EXAM_QUESTIONS_DATA !== 'undefined' && Array.isArray(EXAM_QUESTIONS_DATA)) {
            return EXAM_QUESTIONS_DATA;
        }
        if (typeof window !== 'undefined' && window.EXAM_QUESTIONS_DATA && Array.isArray(window.EXAM_QUESTIONS_DATA)) {
            return window.EXAM_QUESTIONS_DATA;
        }
        return [];
    }

    function populateSectionFilterDropdown() {
        const selectEl = document.getElementById('qb-section-filter');
        if (!selectEl) return;

        // Yalnız "Bütün Bölmələr" mövcuddursa, 21 bölməni dinamik əlavə et
        if (selectEl.options.length <= 1) {
            for (let i = 1; i <= 21; i++) {
                const opt = document.createElement('option');
                opt.value = String(i);
                opt.textContent = `Bölmə ${i}: ${SECTION_TITLES[i] || 'Mövzu'}`;
                selectEl.appendChild(opt);
            }
        }
    }

    function renderQuestionBank(filterSection = 'all', filterDifficulty = 'all', searchQuery = '') {
        const container = document.getElementById('qb-questions-list');
        const countBadge = document.getElementById('qb-count-indicator');
        const clearBtn = document.getElementById('qb-search-clear');
        if (!container) return;

        const allQuestions = getQuestionsData();
        const cleanQuery = (searchQuery || '').toLowerCase().trim();

        if (clearBtn) {
            clearBtn.classList.toggle('hidden', !cleanQuery);
        }

        // Sualların filtrlənməsi
        const filtered = allQuestions.filter(q => {
            // Bölmə filtri
            if (filterSection !== 'all') {
                const secNum = parseInt(filterSection, 10);
                if (q.bolmeId !== secNum) return false;
            }

            // Çətinlik filtri
            if (filterDifficulty !== 'all') {
                const qDiff = (q.cetinlik || q.difficulty || '').toUpperCase().trim();
                const filterDiff = filterDifficulty.toUpperCase().trim();
                if (qDiff !== filterDiff) return false;
            }

            // Açar söz / Mətn axtarışı
            if (cleanQuery) {
                const titleStr = (q.basliq || q.title || '').toLowerCase();
                const descStr = stripHtml(q.serif || q.instruction || '').toLowerCase();
                const idStr = (q.id || '').toLowerCase();
                const secTitle = (SECTION_TITLES[q.bolmeId] || '').toLowerCase();
                const secNumStr = `bölmə ${q.bolmeId}`;

                const matches = titleStr.includes(cleanQuery) ||
                                descStr.includes(cleanQuery) ||
                                idStr.includes(cleanQuery) ||
                                secTitle.includes(cleanQuery) ||
                                secNumStr.includes(cleanQuery);
                if (!matches) return false;
            }

            return true;
        });

        // Say indikatorunun yenilənməsi
        if (countBadge) {
            countBadge.innerHTML = `Mövcud Suallar: <strong>${filtered.length} sual</strong>`;
        }

        // Əgər nəticə yoxdursa: Boş vəziyyət (Empty State)
        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="qb-empty-state">
                    <span class="qb-empty-icon">🔎</span>
                    <h4>Axtarışınıza uyğun sual tapılmadı</h4>
                    <p>Daxil etdiyiniz parametrlərə uyğun heç bir imtahan tapşırığı mövcud deyil. Axtarış sözünü dəyişin və ya filterləri sıfırlayın.</p>
                    <button type="button" class="qb-reset-filters-btn" id="qb-reset-filters-btn">Bütün Filterləri Sıfırla</button>
                </div>
            `;
            const resetBtn = document.getElementById('qb-reset-filters-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', resetQuestionBankFilters);
            }
            return;
        }

        // Sualları bölmələr üzrə qruplaşdırma
        const grouped = {};
        filtered.forEach(q => {
            const secId = q.bolmeId || 1;
            if (!grouped[secId]) grouped[secId] = [];
            grouped[secId].push(q);
        });

        // Performant DOM Batching üçün DocumentFragment
        const fragment = document.createDocumentFragment();

        const sortedSecKeys = Object.keys(grouped).map(Number).sort((a, b) => a - b);

        sortedSecKeys.forEach(secId => {
            const secQuestions = grouped[secId];
            const secTitle = SECTION_TITLES[secId] || `Bölmə ${secId}`;

            const groupEl = document.createElement('div');
            groupEl.className = 'qb-section-group';

            // Qrup başlığı
            const headerEl = document.createElement('div');
            headerEl.className = 'qb-section-header';
            headerEl.innerHTML = `
                <div class="qb-section-title-wrap">
                    <span class="qb-section-badge">Bölmə ${secId}</span>
                    <h4 class="qb-section-title">${escapeHtml(secTitle)}</h4>
                </div>
                <span class="qb-section-count-badge">${secQuestions.length} Sual</span>
            `;
            groupEl.appendChild(headerEl);

            // Suallar qridi
            const gridEl = document.createElement('div');
            gridEl.className = 'qb-cards-grid';

            secQuestions.forEach(q => {
                const cardEl = document.createElement('div');
                cardEl.className = 'qb-card';
                cardEl.dataset.qid = q.id;

                const rawPreview = stripHtml(q.serif || q.instruction || '');
                const previewText = rawPreview.length > 140 ? (rawPreview.slice(0, 137) + '...') : rawPreview;
                const diffLabel = (q.cetinlik || q.difficulty || 'ORTA').toUpperCase();
                const diffCls = getDiffClass(diffLabel);
                const titleText = q.basliq || q.title || `İmtahan Tapşırığı ${q.id}`;

                cardEl.innerHTML = `
                    <div class="qb-card-top">
                        <div class="qb-card-qnum-title">
                            <span class="qb-card-tag">${escapeHtml(q.id.toUpperCase())}</span>
                            <h5 class="qb-card-title">${escapeHtml(titleText)}</h5>
                        </div>
                        <span class="diff-badge ${diffCls}">${escapeHtml(diffLabel)}</span>
                    </div>
                    <p class="qb-card-preview">${escapeHtml(previewText)}</p>
                    <div class="qb-card-footer">
                        <button type="button" class="qb-practice-btn" data-qid="${escapeHtml(q.id)}">
                            <span>Bu Sualı Məşq Et</span> →
                        </button>
                    </div>
                `;

                gridEl.appendChild(cardEl);
            });

            groupEl.appendChild(gridEl);
            fragment.appendChild(groupEl);
        });

        // DOM-a tək əməliyyatla yerləşdirmə
        container.innerHTML = '';
        container.appendChild(fragment);
    }

    function resetQuestionBankFilters() {
        const searchInput = document.getElementById('qb-search-input');
        const secFilter = document.getElementById('qb-section-filter');
        const diffFilter = document.getElementById('qb-diff-filter');

        if (searchInput) searchInput.value = '';
        if (secFilter) secFilter.value = 'all';
        if (diffFilter) diffFilter.value = 'all';

        renderQuestionBank('all', 'all', '');
    }

    function openQuestionBankModal() {
        const modal = document.getElementById('question-bank-modal') || document.getElementById('exam-bank-modal');
        if (!modal) return;

        populateSectionFilterDropdown();

        const searchInput = document.getElementById('qb-search-input');
        const secFilter = document.getElementById('qb-section-filter');
        const diffFilter = document.getElementById('qb-diff-filter');

        const curQuery = searchInput ? searchInput.value : '';
        const curSec = secFilter ? secFilter.value : 'all';
        const curDiff = diffFilter ? diffFilter.value : 'all';

        renderQuestionBank(curSec, curDiff, curQuery);

        if (modal.showModal) {
            try {
                if (!modal.open) modal.showModal();
            } catch (e) {
                modal.setAttribute('open', '');
            }
        } else {
            modal.setAttribute('open', '');
        }
        modal.classList.remove('hidden');
        modal.classList.add('active');

        // Modala fokuslanma
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 80);
        }
    }

    function closeQuestionBankModal() {
        const modal = document.getElementById('question-bank-modal') || document.getElementById('exam-bank-modal');
        if (!modal) return;

        if (modal.close) {
            try {
                if (modal.open) modal.close();
            } catch (e) {
                modal.removeAttribute('open');
            }
        }
        modal.removeAttribute('open');
        modal.classList.add('hidden');
        modal.classList.remove('active');
    }

    function launchQuestionPractice(qid) {
        if (!qid) return;

        const allQuestions = getQuestionsData();
        const targetQ = allQuestions.find(q => q.id === qid);
        if (!targetQ) return;

        closeQuestionBankModal();

        // app.js daxilindəki fərdi məşq rejimini aktivləşdir
        if (typeof window !== 'undefined' && typeof window.startSingleQuestionPractice === 'function') {
            window.startSingleQuestionPractice(targetQ);
        } else {
            console.warn('[QuestionBank] window.startSingleQuestionPractice tapılmadı');
        }
    }

    function initQuestionBank() {
        const triggerBtn = document.getElementById('exam-question-bank-btn');
        const closeBtn = document.getElementById('question-bank-close-btn');
        const modal = document.getElementById('question-bank-modal');
        const searchInput = document.getElementById('qb-search-input');
        const clearSearchBtn = document.getElementById('qb-search-clear');
        const secFilter = document.getElementById('qb-section-filter');
        const diffFilter = document.getElementById('qb-diff-filter');
        const questionsList = document.getElementById('qb-questions-list');

        // Modal açma düyməsi
        if (triggerBtn) {
            triggerBtn.addEventListener('click', openQuestionBankModal);
        }

        // Modal bağlama düyməsi
        if (closeBtn) {
            closeBtn.addEventListener('click', closeQuestionBankModal);
        }

        // Backdrop klik və ESC dəstəyi
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeQuestionBankModal();
                }
            });

            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeQuestionBankModal();
                }
            });

            modal.addEventListener('cancel', () => {
                modal.removeAttribute('open');
                modal.classList.add('hidden');
                modal.classList.remove('active');
            });
        }

        // Canlı Axtarış (Debounced)
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                if (debounceTimer) clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    const sec = secFilter ? secFilter.value : 'all';
                    const diff = diffFilter ? diffFilter.value : 'all';
                    renderQuestionBank(sec, diff, searchInput.value);
                }, 150);
            });
        }

        // Axtarışı təmizlə düyməsi
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                const sec = secFilter ? secFilter.value : 'all';
                const diff = diffFilter ? diffFilter.value : 'all';
                renderQuestionBank(sec, diff, '');
                if (searchInput) searchInput.focus();
            });
        }

        // Bölmə filteri
        if (secFilter) {
            secFilter.addEventListener('change', () => {
                const query = searchInput ? searchInput.value : '';
                const diff = diffFilter ? diffFilter.value : 'all';
                renderQuestionBank(secFilter.value, diff, query);
            });
        }

        // Çətinlik filteri
        if (diffFilter) {
            diffFilter.addEventListener('change', () => {
                const query = searchInput ? searchInput.value : '';
                const sec = secFilter ? secFilter.value : 'all';
                renderQuestionBank(sec, diffFilter.value, query);
            });
        }

        // Kart üzərində "Bu Sualı Məşq Et" düyməsi (Delegated Event)
        if (questionsList) {
            questionsList.addEventListener('click', (e) => {
                const practiceBtn = e.target.closest('.qb-practice-btn');
                if (practiceBtn) {
                    const qid = practiceBtn.dataset.qid;
                    launchQuestionPractice(qid);
                }
            });
        }
    }

    // Brauzer mühitində DOM hazır olduqda avtomatik inisializasiya
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initQuestionBank);
        } else {
            initQuestionBank();
        }
    }

    return {
        SECTION_TITLES,
        getDiffClass,
        renderQuestionBank,
        openQuestionBankModal,
        closeQuestionBankModal,
        launchQuestionPractice,
        initQuestionBank
    };
}));
