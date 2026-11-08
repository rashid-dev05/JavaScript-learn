const fs = require('fs');
const path = require('path');
const eslintPath = path.join(process.env.LOCALAPPDATA, 'npm-cache', '_npx', '515228b7c8d004a2', 'node_modules', 'eslint');
const { ESLint } = require(eslintPath);

// Extract helper functions from app.js and our new formatters
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

const workerScript = `
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

async function checkWorkerNoUndef() {
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [
            {
                languageOptions: {
                    ecmaVersion: 'latest',
                    sourceType: 'script',
                    globals: {
                        self: 'readonly',
                        setTimeout: 'readonly',
                        clearTimeout: 'readonly',
                        setInterval: 'readonly',
                        clearInterval: 'readonly',
                        queueMicrotask: 'readonly',
                        performance: 'readonly',
                        console: 'readonly',
                        Event: 'readonly',
                        CustomEvent: 'readonly',
                        btoa: 'readonly',
                        atob: 'readonly',
                        Buffer: 'readonly'
                    }
                },
                rules: {
                    'no-undef': 'error'
                }
            }
        ]
    });

    const results = await eslint.lintText(workerScript);
    const undefErrors = [];
    results.forEach(r => {
        r.messages.forEach(m => {
            if (m.ruleId === 'no-undef') {
                undefErrors.push(`Line ${m.line}:${m.column} - ${m.message}`);
            }
        });
    });

    console.log(`Worker source undef errors: ${undefErrors.length}`);
    undefErrors.forEach(e => console.log('  ' + e));
    if (undefErrors.length > 0) process.exit(1);
}

checkWorkerNoUndef().catch(console.error);
