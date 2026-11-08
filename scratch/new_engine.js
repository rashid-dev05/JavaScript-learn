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
                const items = [];
                for (let i = 0; i < arg.length; i++) {
                    items.push(childIndent + (i in arg ? formatConsoleArg(arg[i], depth + 1, seen) : '<empty>'));
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
            const props = [];
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                const valStr = formatConsoleArg(arg[k], depth + 1, seen);
                props.push(childIndent + JSON.stringify(k) + ': ' + valStr);
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
            'console', 'document', 'window', 'Event', 'CustomEvent',
            'localStorage', 'sessionStorage', 'navigator',
            'requestAnimationFrame', 'cancelAnimationFrame', 'fetch',
            'process', 'path', 'os', 'fs', '__dirname', '__filename', 'global', 'express',
            'cors', 'pool', 'pg', 'require', 'EventEmitter', 'bcrypt', 'jwt', 'http', 'AppError',
            'module', 'exports',
            'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'queueMicrotask',
            code
        );
        await fn(
            mockConsole, mockDoc, mockWin, MockEvent, MockCustomEvent,
            mockLocalStorage, mockSessionStorage, mockNav,
            mockRequestAnimationFrame, mockCancelAnimationFrame, mockFetch,
            mockProcess, mockPath, mockOs, mockFs, mockDirname, mockFilename, mockGlobal, express,
            cors, pool, pg, mockRequire, EventEmitter, bcrypt, jwt, http, AppError,
            mockModule, mockExports,
            wrappedSetTimeout, wrappedClearTimeout, wrappedSetInterval, wrappedClearInterval, wrappedQueueMicrotask
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
            const runMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : (cb => setTimeout(cb, 0));
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
                const fn = new AsyncFunction(
                    'console', 'document', 'window', 'Event', 'CustomEvent',
                    'localStorage', 'sessionStorage', 'navigator',
                    'requestAnimationFrame', 'cancelAnimationFrame', 'fetch',
                    'process', 'path', 'os', 'fs', '__dirname', '__filename', 'global', 'express',
                    'cors', 'pool', 'pg', 'require', 'EventEmitter', 'bcrypt', 'jwt', 'http', 'AppError',
                    'module', 'exports',
                    'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'queueMicrotask',
                    preprocessModuleCode(code)
                );
                await fn(
                    mockConsole, mockDoc, mockWin,
                    typeof Event !== 'undefined' ? Event : MockEvent,
                    typeof CustomEvent !== 'undefined' ? CustomEvent : MockCustomEvent,
                    mockLocalStorage, mockSessionStorage, mockNav,
                    mockRequestAnimationFrame, mockCancelAnimationFrame, mockFetch,
                    mockProcess, mockPath, mockOs, mockFs, mockDirname, mockFilename, mockGlobal, express,
                    cors, pool, pg, mockRequire, EventEmitter, bcrypt, jwt, http, AppError,
                    mockModule, mockExports,
                    wrappedSetTimeout, wrappedClearTimeout, wrappedSetInterval, wrappedClearInterval, wrappedQueueMicrotask
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
