const fs = require('fs');
const vm = require('vm');

const appCode = fs.readFileSync('app.js', 'utf8');

function extractFn(name) {
    const regex = new RegExp(`function ${name}\\s*\\([\\s\\S]*?\\n    \\}`);
    const match = appCode.match(regex);
    if (!match) throw new Error(`Could not find function ${name}`);
    return match[0];
}

function extractClass(name) {
    const regex = new RegExp(`class ${name}\\b[\\s\\S]*?\\n    \\}`);
    const match = appCode.match(regex);
    if (!match) throw new Error(`Could not find class ${name}`);
    return match[0];
}

const preprocessModuleCode = extractFn('preprocessModuleCode');
const MockEvent = extractClass('MockEvent');
const MockCustomEvent = extractClass('MockCustomEvent');
const MockDOMElement = extractClass('MockDOMElement');
const MockStorage = extractClass('MockStorage');
const createMockNavigator = extractFn('createMockNavigator');
const mockRequestAnimationFrame = extractFn('mockRequestAnimationFrame');
const mockCancelAnimationFrame = extractFn('mockCancelAnimationFrame');
const createMockFetch = extractFn('createMockFetch');
const createMockDocument = extractFn('createMockDocument');
const createMockNodeEnv = extractFn('createMockNodeEnv');
const createMockExpress = extractFn('createMockExpress');

const fmtCode = fs.readFileSync('scratch/test_formatter.js', 'utf8');
const formatConsoleArgStr = fmtCode.slice(0, fmtCode.indexOf('// Test cases')).trim();
const conCode = fs.readFileSync('scratch/test_sandbox_console.js', 'utf8').trim();

function buildWorkerScript() {
    return `
${preprocessModuleCode}
${MockEvent}
${MockCustomEvent}
${MockDOMElement}
${MockStorage}
${createMockNavigator}
${mockRequestAnimationFrame}
${mockCancelAnimationFrame}
${createMockFetch}
${createMockDocument}
${createMockNodeEnv}
${createMockExpress}
${formatConsoleArgStr}
${conCode}

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

// Now let's execute this in VM and test every single case!
async function runInVM(userCode, timeoutMs = 2400) {
    return new Promise((resolve) => {
        const workerScript = buildWorkerScript();
        let messageHandler = null;

        const eventListeners = {};
        const sandboxSelf = {
            postMessage: (data) => {
                resolve(data);
            },
        };
        sandboxSelf.self = sandboxSelf;
        Object.assign(sandboxSelf, {
            addEventListener: (type, handler) => {
                eventListeners[type] = eventListeners[type] || [];
                eventListeners[type].push(handler);
            },
            removeEventListener: (type, handler) => {
                if (eventListeners[type]) {
                    eventListeners[type] = eventListeners[type].filter(h => h !== handler);
                }
            },
            dispatchEvent: (event) => {
                if (eventListeners[event.type]) {
                    eventListeners[event.type].forEach(h => h(event));
                }
            },
            setTimeout,
            clearTimeout,
            setInterval,
            clearInterval,
            queueMicrotask,
            structuredClone: typeof structuredClone !== 'undefined' ? structuredClone : (x => JSON.parse(JSON.stringify(x))),
            Date,
            Math,
            String,
            Number,
            Boolean,
            Array,
            Object,
            Map,
            Set,
            WeakSet,
            WeakMap,
            Promise,
            Error,
            TypeError,
            RangeError,
            SyntaxError,
            ReferenceError,
            RegExp,
            JSON,
            performance
        });

        const ctx = vm.createContext(sandboxSelf);
        vm.runInContext(workerScript, ctx);

        // Forward unhandled rejections if they occur inside the VM context
        // In Node, we can listen to process unhandledRejection during the test
        const unhandledHandler = (reason, promise) => {
            if (eventListeners['unhandledrejection']) {
                eventListeners['unhandledrejection'].forEach(h => h({ type: 'unhandledrejection', reason, promise, preventDefault: () => {} }));
            }
        };
        process.on('unhandledRejection', unhandledHandler);

        sandboxSelf.onmessage({ data: { code: userCode, timeoutMs } });
    });
}

async function runAllTests() {
    console.log('Running VM test suite...');

    // Case 1: console.error("e"); console.log("ok") -> output contains "ok", error is null
    const c1 = await runInVM('console.error("e"); console.log("ok");');
    console.log('Case 1 (console.error):', c1);
    if (c1.error !== null || !c1.output.includes('ok')) throw new Error('Case 1 failed');

    // Case 2: Missing console methods -> no TypeError
    const c2 = await runInVM(`
        console.table([{a:1}]);
        console.group("g");
        console.log(1);
        console.groupEnd();
        console.dir({a:1});
        console.debug("d");
        console.assert(false, "m");
        console.time("t");
        console.timeEnd("t");
        console.count();
    `);
    console.log('Case 2 (console methods): error =', c2.error, 'success =', c2.success);
    if (c2.error !== null) throw new Error('Case 2 failed: ' + c2.error);

    // Case 3: Inspect-style formatter (Map, Set, Error, [NaN, Infinity, -0], {a:undefined})
    const c3 = await runInVM('console.log(new Map([[1,2]]), new Set([1]), new Error("e"), [NaN, Infinity, -0], {a:undefined});');
    console.log('Case 3 (formatter output):\n', c3.output);
    if (!c3.output.includes('Map(1)') || !c3.output.includes('Set(1)') || !c3.output.includes('NaN') || !c3.output.includes('-0') || !c3.output.includes('undefined')) {
        throw new Error('Case 3 failed');
    }

    // Case 4: {a:1,b:[1,2]}, "z" -> same layout
    const c4 = await runInVM('console.log({a:1,b:[1,2]}, "z");');
    console.log('Case 4 (layout):\n', c4.output);
    if (!c4.output.includes('{\n  "a": 1,\n  "b": [\n    1,\n    2\n  ]\n} z')) {
        throw new Error('Case 4 failed');
    }

    // Case 5: setTimeout 500ms
    const c5 = await runInVM('setTimeout(()=>console.log("late"), 500); console.log("first");');
    console.log('Case 5 (async 500ms):\n', c5.output);
    if (c5.output !== 'first\nlate') throw new Error('Case 5 failed');

    // Case 6: throw new TypeError("boom")
    const c6 = await runInVM('throw new TypeError("boom");');
    console.log('Case 6 (TypeError):\n', c6.error);
    if (!c6.error || !c6.error.includes('TypeError: boom')) throw new Error('Case 6 failed');

    // Case 7: Syntax error
    const c7 = await runInVM('function (broken {');
    console.log('Case 7 (SyntaxError):\n', c7.error);
    if (!c7.error || !c7.error.includes('SyntaxError')) throw new Error('Case 7 failed');

    // Case 8: Promise.reject(new Error("x"))
    const c8 = await runInVM('Promise.reject(new Error("x"));');
    console.log('Case 8 (Unhandled Rejection): error =', c8.error);
    if (!c8.error || !c8.error.includes('x')) throw new Error('Case 8 failed');

    // Case 9: async function f(){ throw new Error("y"); } f();
    const c9 = await runInVM('async function f(){ throw new Error("y"); } f();');
    console.log('Case 9 (Async Throw): error =', c9.error);
    if (!c9.error || !c9.error.includes('y')) throw new Error('Case 9 failed');

    console.log('\nALL VM TEST CASES PASSED SUCCESSFULLY! 🎉');
    process.exit(0);
}

runAllTests().catch(err => {
    console.error('Test run error:', err);
    process.exit(1);
});
