/**
 * JSÖyrən - Müasir Asinxron Yaddaş Mühərriki (Storage Engine)
 * Arxitektura: IndexedDB Əsaslı + localStorage İkili Yazma (Dual-Write) + Avtomatik Miqrasiya
 * Versiya: 1.0.0 (ES2026)
 */

(function (global) {
    'use strict';

    const DB_NAME = 'jsoyren_db';
    const DB_VERSION = 1;
    const STORE_KEYVAL = 'keyval';
    const STORE_EXAM_HISTORY = 'exam_history';
    const MIGRATION_FLAG_KEY = 'jsoyren_idb_migrated';
    const THEME_KEY = 'jsoyren_theme';

    // In-Memory sürətli keş (Instant Synchronous Read & Cache)
    const memCache = new Map();
    let dbInstance = null;
    let isInitialized = false;
    let idbSupported = false;

    // IndexedDB dəstəyinin təhlükəsiz yoxlanışı (Privacy Mode / Sandboxed iFrame uyğunluğu)
    function checkIndexedDBSupport() {
        try {
            if (typeof window === 'undefined') return false;
            if (!('indexedDB' in window) || window.indexedDB === null) return false;
            return true;
        } catch (e) {
            console.warn('[StorageEngine] IndexedDB dəstəyi aşkar edilmədi və ya bloklanıb:', e);
            return false;
        }
    }

    /**
     * IndexedDB Verilənlər Bazasını Açır və Sxemləri Qeydiyyatdan Keçirir
     */
    function openDatabase() {
        return new Promise((resolve, reject) => {
            if (!idbSupported) {
                return resolve(null);
            }

            try {
                const request = window.indexedDB.open(DB_NAME, DB_VERSION);

                request.onupgradeneeded = function (event) {
                    const db = event.target.result;

                    // 1. Ümumi açar-dəyər deposu (Key-Value Store)
                    if (!db.objectStoreNames.contains(STORE_KEYVAL)) {
                        db.createObjectStore(STORE_KEYVAL, { keyPath: 'key' });
                    }

                    // 2. İmtahan Tarixçəsi deposu (Sürətli axtarış və limitsiz arxiv üçün)
                    if (!db.objectStoreNames.contains(STORE_EXAM_HISTORY)) {
                        const examStore = db.createObjectStore(STORE_EXAM_HISTORY, { keyPath: 'id' });
                        examStore.createIndex('timestamp', 'timestamp', { unique: false });
                        examStore.createIndex('score', 'score', { unique: false });
                        examStore.createIndex('passed', 'passed', { unique: false });
                    }
                };

                request.onsuccess = function (event) {
                    dbInstance = event.target.result;

                    // Brauzer bazanı kənardan bağlayarsa (məsələn, versiya dəyişəndə)
                    dbInstance.onversionchange = function () {
                        dbInstance.close();
                        dbInstance = null;
                        console.warn('[StorageEngine] IndexedDB bazası bağlandı (versionchange).');
                    };

                    resolve(dbInstance);
                };

                request.onerror = function (event) {
                    console.warn('[StorageEngine] IndexedDB açılarkən xəta baş verdi:', event.target.error);
                    resolve(null); // Çökməməsi üçün fallback rejimə keçir
                };

                request.onblocked = function () {
                    console.warn('[StorageEngine] IndexedDB açılışı bloklandı (digər pəncərə açıqdır).');
                    resolve(null);
                };
            } catch (err) {
                console.warn('[StorageEngine] IndexedDB inisializasiya istisnası:', err);
                resolve(null);
            }
        });
    }

    /**
     * localStorage-dən IndexedDB-yə Şəffaf və İtkisiz Miqrasiya
     */
    async function migrateFromLocalStorage(db) {
        if (!db) return;
        try {
            if (typeof localStorage === 'undefined') return;
            const alreadyMigrated = localStorage.getItem(MIGRATION_FLAG_KEY);
            if (alreadyMigrated === 'true') {
                return; // Əvvəlcədən miqrasiya olunub
            }

            console.log('[StorageEngine] localStorage məlumatlarının IndexedDB-yə ilkin miqrasiyası başladılır...');

            // Köçürüləcək məlum açarlar
            const keysToMigrate = [
                'jsoyren_progress',
                'jsoyren_ecosystem_progress',
                'jsoyren_exam_history',
                'jsoyren_hourglass_history',
                'jsoyren_practice_progress',
                'jsoyren_streak_data',
                'jsoyren_streak',
                'jsoyren_last_active_date',
                'jsoyren_theme'
            ];

            // Bütün mövcud jsoyren_* açarlarını da əlavə edirik
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && (k.startsWith('jsoyren_') || k.startsWith('pyoyren_')) && !keysToMigrate.includes(k)) {
                    keysToMigrate.push(k);
                }
            }

            const tx = db.transaction([STORE_KEYVAL, STORE_EXAM_HISTORY], 'readwrite');
            const keyvalStore = tx.objectStore(STORE_KEYVAL);
            const examStore = tx.objectStore(STORE_EXAM_HISTORY);

            for (const key of keysToMigrate) {
                try {
                    const raw = localStorage.getItem(key);
                    if (raw !== null) {
                        let parsedVal;
                        try {
                            parsedVal = JSON.parse(raw);
                        } catch {
                            parsedVal = raw;
                        }

                        // Keşə yaz
                        memCache.set(key, parsedVal);

                        // KeyVal deposuna yaz
                        keyvalStore.put({
                            key: key,
                            value: parsedVal,
                            updatedAt: Date.now()
                        });

                        // Əgər imtahan tarixçəsidirsə, həm də fərdi imtahan obyektləri kimi exam_history deposuna doldur
                        if (key === 'jsoyren_exam_history' && Array.isArray(parsedVal)) {
                            parsedVal.forEach((item, index) => {
                                if (item && typeof item === 'object') {
                                    const examId = item.id || `exam-migrated-${Date.now()}-${index}`;
                                    examStore.put({
                                        ...item,
                                        id: examId,
                                        timestamp: item.timestamp || (item.date ? new Date(item.date).getTime() : Date.now())
                                    });
                                }
                            });
                        }
                    }
                } catch (e) {
                    console.warn(`[StorageEngine] "${key}" açarı miqrasiya edilərkən xəta:`, e);
                }
            }

            await new Promise((res) => {
                tx.oncomplete = res;
                tx.onerror = res; // xəta olsa belə davam et
            });

            localStorage.setItem(MIGRATION_FLAG_KEY, 'true');
            console.log('[StorageEngine] Miqrasiya uğurla tamamlandı.');
        } catch (err) {
            console.warn('[StorageEngine] Miqrasiya prosesində xəta:', err);
        }
    }

    /**
     * Bütün mövcud məlumatları in-memory keşə yükləyir (sürətli ilk render üçün)
     */
    async function primeMemoryCache(db) {
        if (!db) return;
        return new Promise((resolve) => {
            try {
                const tx = db.transaction([STORE_KEYVAL], 'readonly');
                const store = tx.objectStore(STORE_KEYVAL);
                const req = store.openCursor();

                req.onsuccess = function (e) {
                    const cursor = e.target.result;
                    if (cursor) {
                        memCache.set(cursor.value.key, cursor.value.value);
                        cursor.continue();
                    } else {
                        resolve();
                    }
                };

                req.onerror = function () {
                    resolve();
                };
            } catch {
                resolve();
            }
        });
    }

    // ============================================
    // AÇIQ İCTİMAİ METODLAR (PUBLIC API)
    // ============================================

    const StorageEngine = {
        /**
         * Mühərriki başladır, IndexedDB-ni açır və miqrasiyanı icra edir
         */
        async init() {
            if (isInitialized) return this;
            idbSupported = checkIndexedDBSupport();

            if (idbSupported) {
                const db = await openDatabase();
                if (db) {
                    await migrateFromLocalStorage(db);
                    await primeMemoryCache(db);
                }
            }

            isInitialized = true;
            return this;
        },

        /**
         * Asinxron olaraq açar üzrə dəyəri oxuyur (IndexedDB -> MemoryCache -> localStorage)
         */
        async getItem(key, defaultValue = null) {
            // 1. Öncə operativ yaddaş keşinə baxırıq
            if (memCache.has(key)) {
                return memCache.get(key);
            }

            // 2. IndexedDB aktivdirsə ordan oxuyuruq
            if (dbInstance) {
                try {
                    const val = await new Promise((resolve, reject) => {
                        const tx = dbInstance.transaction([STORE_KEYVAL], 'readonly');
                        const store = tx.objectStore(STORE_KEYVAL);
                        const req = store.get(key);
                        req.onsuccess = () => resolve(req.result ? req.result.value : undefined);
                        req.onerror = () => reject(req.error);
                    });

                    if (val !== undefined) {
                        memCache.set(key, val);
                        return val;
                    }
                } catch (e) {
                    console.warn(`[StorageEngine] IDB get xətası (${key}):`, e);
                }
            }

            // 3. Fallback: localStorage
            try {
                if (typeof localStorage !== 'undefined') {
                    const raw = localStorage.getItem(key);
                    if (raw !== null) {
                        try {
                            const parsed = JSON.parse(raw);
                            memCache.set(key, parsed);
                            return parsed;
                        } catch {
                            memCache.set(key, raw);
                            return raw;
                        }
                    }
                }
            } catch (e) {
                console.warn(`[StorageEngine] localStorage get xətası (${key}):`, e);
            }

            return defaultValue;
        },

        /**
         * Sinxron oxu metodu (Gözləmə tələb etməyən ilkin renderlər üçün)
         */
        getItemSync(key, defaultValue = null) {
            if (memCache.has(key)) {
                return memCache.get(key);
            }
            try {
                if (typeof localStorage !== 'undefined') {
                    const raw = localStorage.getItem(key);
                    if (raw !== null) {
                        try {
                            const parsed = JSON.parse(raw);
                            memCache.set(key, parsed);
                            return parsed;
                        } catch {
                            memCache.set(key, raw);
                            return raw;
                        }
                    }
                }
            } catch (e) {}
            return defaultValue;
        },

        /**
         * Dəyəri İkili-Yazma (Dual-Write) prinsipi ilə saxlayır:
         * 1) Memory cache dərhal yenilənir
         * 2) localStorage sinxron yazılır (fallback kimi)
         * 3) IndexedDB asinxron yazılır (limitsiz kvota, dayanıqlı arxiv)
         */
        async setItem(key, value) {
            memCache.set(key, value);

            // 1. localStorage güzgüləməsi (Dual-write)
            try {
                if (typeof localStorage !== 'undefined') {
                    const serialized = typeof value === 'string' ? value : JSON.stringify(value);
                    localStorage.setItem(key, serialized);
                }
            } catch (e) {
                // QuotaExceededError olsa belə IndexedDB yazışı davam edir!
                console.warn(`[StorageEngine] localStorage yazma xətası (${key}) - IDB davam edir:`, e.name);
            }

            // 2. IndexedDB asinxron yazılışı
            if (dbInstance) {
                try {
                    return await new Promise((resolve) => {
                        const tx = dbInstance.transaction([STORE_KEYVAL], 'readwrite');
                        const store = tx.objectStore(STORE_KEYVAL);
                        const req = store.put({
                            key: key,
                            value: value,
                            updatedAt: Date.now()
                        });
                        req.onsuccess = () => resolve(true);
                        req.onerror = () => {
                            console.warn(`[StorageEngine] IDB set xətası (${key}):`, req.error);
                            resolve(false);
                        };
                    });
                } catch (err) {
                    console.warn(`[StorageEngine] IDB set istisnası (${key}):`, err);
                    return false;
                }
            }

            return true;
        },

        /**
         * Açarı həm IDB, həm də localStorage-dən silir
         */
        async removeItem(key) {
            memCache.delete(key);

            try {
                if (typeof localStorage !== 'undefined') {
                    localStorage.removeItem(key);
                }
            } catch (e) {}

            if (dbInstance) {
                try {
                    return await new Promise((resolve) => {
                        const tx = dbInstance.transaction([STORE_KEYVAL], 'readwrite');
                        const store = tx.objectStore(STORE_KEYVAL);
                        const req = store.delete(key);
                        req.onsuccess = () => resolve(true);
                        req.onerror = () => resolve(false);
                    });
                } catch {
                    return false;
                }
            }

            return true;
        },

        /**
         * İmtahan cəhdini strukturlaşdırılmış şəkildə saxlayır (50 limiti olmadan limitsiz arxiv)
         */
        async saveExamAttempt(attempt) {
            if (!attempt || typeof attempt !== 'object') return false;

            const examId = attempt.id || `exam-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
            const record = {
                ...attempt,
                id: examId,
                timestamp: attempt.timestamp || Date.now()
            };

            // 1. IndexedDB exam_history deposuna yaz
            if (dbInstance) {
                try {
                    await new Promise((resolve) => {
                        const tx = dbInstance.transaction([STORE_EXAM_HISTORY], 'readwrite');
                        const store = tx.objectStore(STORE_EXAM_HISTORY);
                        const req = store.put(record);
                        req.onsuccess = () => resolve(true);
                        req.onerror = () => resolve(false);
                    });
                } catch (e) {
                    console.warn('[StorageEngine] saveExamAttempt IDB xətası:', e);
                }
            }

            // 2. Geriye uyğunluq üçün ümumi jsoyren_exam_history siyahısını yenilə
            const currentHistory = await this.getItem('jsoyren_exam_history', []);
            const historyList = Array.isArray(currentHistory) ? currentHistory : [];
            historyList.unshift(record);

            // localStorage üçün ilk 50-ni saxlayırıq (5MB kvota aşılmasın deyə)
            const prunedForLocal = historyList.slice(0, 50);
            await this.setItem('jsoyren_exam_history', prunedForLocal);

            return true;
        },

        /**
         * Bütün imtahan cəhdlərini IndexedDB-dən (ən yeni birinci) gətirir
         */
        async getExamAttempts(limit = 100) {
            if (dbInstance) {
                try {
                    return await new Promise((resolve) => {
                        const tx = dbInstance.transaction([STORE_EXAM_HISTORY], 'readonly');
                        const store = tx.objectStore(STORE_EXAM_HISTORY);
                        const index = store.index('timestamp');
                        const req = index.openCursor(null, 'prev'); // ən yeni birinci
                        const results = [];

                        req.onsuccess = function (e) {
                            const cursor = e.target.result;
                            if (cursor && results.length < limit) {
                                results.push(cursor.value);
                                cursor.continue();
                            } else {
                                resolve(results);
                            }
                        };

                        req.onerror = function () {
                            resolve([]);
                        };
                    });
                } catch (e) {
                    console.warn('[StorageEngine] getExamAttempts xətası:', e);
                }
            }

            // Fallback: keyval / localStorage
            const fallback = await this.getItem('jsoyren_exam_history', []);
            return Array.isArray(fallback) ? fallback : [];
        },

        /**
         * İmtahan tarixçəsini təmizləyir
         */
        async clearExamHistory() {
            if (dbInstance) {
                try {
                    await new Promise((resolve) => {
                        const tx = dbInstance.transaction([STORE_EXAM_HISTORY], 'readwrite');
                        const store = tx.objectStore(STORE_EXAM_HISTORY);
                        const req = store.clear();
                        req.onsuccess = () => resolve(true);
                        req.onerror = () => resolve(false);
                    });
                } catch (e) {
                    console.warn('[StorageEngine] clearExamHistory xətası:', e);
                }
            }
            await this.removeItem('jsoyren_exam_history');
            return true;
        },

        /**
         * Bütün tələbə irəliləyişini sıfırlayır (Tema seçimi toxunulmaz qalır)
         */
        async clearAllProgress(preserveTheme = true) {
            const savedTheme = preserveTheme ? this.getItemSync(THEME_KEY, 'dark') : null;
            memCache.clear();

            // 1. IndexedDB depolarını təmizlə
            if (dbInstance) {
                try {
                    await new Promise((resolve) => {
                        const tx = dbInstance.transaction([STORE_KEYVAL, STORE_EXAM_HISTORY], 'readwrite');
                        tx.objectStore(STORE_KEYVAL).clear();
                        tx.objectStore(STORE_EXAM_HISTORY).clear();
                        tx.oncomplete = () => resolve(true);
                        tx.onerror = () => resolve(false);
                    });
                } catch (e) {
                    console.warn('[StorageEngine] clearAllProgress IDB xətası:', e);
                }
            }

            // 2. localStorage açarlarını sil
            try {
                if (typeof localStorage !== 'undefined') {
                    const toRemove = [];
                    for (let i = 0; i < localStorage.length; i++) {
                        const k = localStorage.key(i);
                        if (k && (k.startsWith('jsoyren_') || k.startsWith('pyoyren_')) && k !== THEME_KEY) {
                            toRemove.push(k);
                        }
                    }
                    toRemove.forEach(k => localStorage.removeItem(k));
                }
            } catch (e) {}

            // Temanı bərpa et
            if (preserveTheme && savedTheme) {
                await this.setItem(THEME_KEY, savedTheme);
            }

            return true;
        },

        /**
         * Bütün tələbə məlumatlarını ehtiyat nüsxə (JSON export) kimi çıxarır
         */
        async exportBackup() {
            const backup = {
                version: 'ES2026-v1.0',
                exportedAt: new Date().toISOString(),
                data: {}
            };

            const keys = [
                'jsoyren_progress',
                'jsoyren_ecosystem_progress',
                'jsoyren_hourglass_history',
                'jsoyren_practice_progress',
                'jsoyren_streak_data',
                'jsoyren_streak',
                'jsoyren_last_active_date',
                THEME_KEY
            ];

            for (const key of keys) {
                backup.data[key] = await this.getItem(key);
            }

            backup.data['exam_history'] = await this.getExamAttempts(500);
            return JSON.stringify(backup, null, 2);
        },

        /**
         * Ehtiyat nüsxəni (JSON backup) bərpa edir
         */
        async importBackup(jsonStringOrObj) {
            try {
                const parsed = typeof jsonStringOrObj === 'string' ? JSON.parse(jsonStringOrObj) : jsonStringOrObj;
                if (!parsed || !parsed.data) {
                    throw new Error('Yanlış nüsxə formatı: "data" sahəsi tapılmadı.');
                }

                for (const [key, val] of Object.entries(parsed.data)) {
                    if (key === 'exam_history' && Array.isArray(val)) {
                        for (const item of val) {
                            await this.saveExamAttempt(item);
                        }
                    } else if (val !== undefined && val !== null) {
                        await this.setItem(key, val);
                    }
                }

                return { success: true, message: 'Məlumatlar uğurla bərpa olundu.' };
            } catch (err) {
                console.error('[StorageEngine] importBackup xətası:', err);
                return { success: false, error: err.message };
            }
        },

        /**
         * Brauzer yaddaş kvotası statistikasını qaytarır
         */
        async getStorageStats() {
            let stats = {
                engine: idbSupported && dbInstance ? 'IndexedDB + localStorage Mirror' : 'localStorage (Standart)',
                usageBytes: 0,
                quotaBytes: 0,
                percentUsed: 0,
                isPersistent: false
            };

            try {
                if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.estimate) {
                    const estimate = await navigator.storage.estimate();
                    stats.usageBytes = estimate.usage || 0;
                    stats.quotaBytes = estimate.quota || 0;
                    stats.percentUsed = estimate.quota ? ((estimate.usage / estimate.quota) * 100).toFixed(2) : 0;
                }
                if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persisted) {
                    stats.isPersistent = await navigator.storage.persisted();
                }
            } catch (e) {}

            return stats;
        },

        /**
         * Mühərrikin hazır olub-olmadığını bildirir
         */
        isReady() {
            return isInitialized;
        },

        /**
         * IndexedDB-nin aktiv olduğunu bildirir
         */
        hasIndexedDB() {
            return Boolean(idbSupported && dbInstance);
        }
    };

    // Qlobal mühitə eksport
    if (typeof window !== 'undefined') {
        window.StorageEngine = StorageEngine;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = StorageEngine;
    }

})(typeof globalThis !== 'undefined' ? globalThis : this);
