const fs = require('fs');
const vm = require('vm');
const path = require('path');

// 1. Evaluate app.js in a mock browser environment to get real createWorkerScript and runJavaScriptDirect
const appCode = fs.readFileSync('app.js', 'utf8');

// Create mock browser globals for IIFE
const mockWindow = {
    location: { search: '', hash: '' },
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    sessionStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    document: {
        readyState: 'loading',
        addEventListener: () => {},
        removeEventListener: () => {},
        documentElement: { setAttribute: () => {}, getAttribute: () => null },
        getElementById: () => null,
        querySelectorAll: () => [],
        querySelector: () => null,
        createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, style: {}, classList: { add: () => {}, remove: () => {} } }),
        body: { appendChild: () => {}, style: {}, classList: { add: () => {}, remove: () => {} } }
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    queueMicrotask: typeof queueMicrotask !== 'undefined' ? queueMicrotask : (cb => setTimeout(cb, 0)),
    performance: typeof performance !== 'undefined' ? performance : { now: () => Date.now() }
};
mockWindow.window = mockWindow;

const context = vm.createContext({
    ...mockWindow,
    global: mockWindow,
    globalThis: mockWindow,
    console,
    Date,
    Math,
    String,
    Number,
    Boolean,
    Array,
    Object,
    Map,
    Set,
    WeakMap,
    WeakSet,
    Promise,
    Error,
    TypeError,
    RangeError,
    SyntaxError,
    ReferenceError,
    RegExp,
    JSON,
    SECTIONS_1_5: [],
    SECTIONS_6_9: [],
    SECTIONS_10_13: [],
    SECTIONS_14: [],
    SECTIONS_15: [],
    SECTIONS_16: [],
    SECTIONS_17: [],
    SECTIONS_18: [],
    SECTIONS_19: [],
    SECTIONS_20: [],
    SECTIONS_21: [],
    TASKS_PANEL_DATA: [],
    ERRORS_PANEL_DATA: [],
    ECOSYSTEM_LESSONS_DATA: [],
    EXAM_QUESTIONS_DATA: []
});

const injectedAppCode = appCode.replace(/\n\s*\}\)\(\);?\s*$/, '\n    window.__internal = { createWorkerScript, runJavaScriptDirect, hasObviousInfiniteLoop };\n})();');

vm.runInContext(injectedAppCode, context);

// Extract createWorkerScript and runJavaScriptDirect from window.__internal
const createWorkerScript = context.window.__internal.createWorkerScript;
const runJavaScriptDirect = context.window.__internal.runJavaScriptDirect;
const hasObviousInfiniteLoop = context.window.__internal.hasObviousInfiniteLoop;

if (typeof createWorkerScript !== 'function') throw new Error('createWorkerScript not found in app.js');
if (typeof runJavaScriptDirect !== 'function') throw new Error('runJavaScriptDirect not found in app.js');
if (typeof hasObviousInfiniteLoop !== 'function') throw new Error('hasObviousInfiniteLoop not found in app.js');

const workerScript = createWorkerScript();

async function runInWorkerVM(userCode, timeoutMs = 2400) {
    return new Promise((resolve) => {
        const eventListeners = {};
        const sandboxSelf = {
            postMessage: (data) => resolve(data),
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
            queueMicrotask: typeof queueMicrotask !== 'undefined' ? queueMicrotask : (cb => setTimeout(cb, 0)),
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
            performance: typeof performance !== 'undefined' ? performance : { now: () => Date.now() },
            btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
            atob: (s) => Buffer.from(s, 'base64').toString('binary')
        };
        sandboxSelf.self = sandboxSelf;

        const ctx = vm.createContext(sandboxSelf);
        vm.runInContext(workerScript, ctx);

        const unhandledHandler = (reason, promise) => {
            if (eventListeners['unhandledrejection']) {
                eventListeners['unhandledrejection'].forEach(h => h({ type: 'unhandledrejection', reason, promise, preventDefault: () => {} }));
            }
        };
        process.on('unhandledRejection', unhandledHandler);

        sandboxSelf.onmessage({ data: { code: userCode, timeoutMs } });
    });
}

async function verifyAll() {
    console.log('=== VERIFYING WORKER SOURCE LINTING ===');
    const eslintPath = path.join(process.env.LOCALAPPDATA, 'npm-cache', '_npx', '515228b7c8d004a2', 'node_modules', 'eslint');
    const { ESLint } = require(eslintPath);

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

    console.log(`Worker undef errors: ${undefErrors.length}`);
    if (undefErrors.length > 0) {
        undefErrors.forEach(e => console.log('  ' + e));
        throw new Error('Worker script has undefined variables!');
    }

    console.log('\n=== RUNNING VERIFICATION TEST CASES ===');

    // 1. console.error("e"); console.log("ok") -> output "ok", error null
    const t1 = await runInWorkerVM('console.error("e"); console.log("ok");');
    console.log('1. console.error + console.log: output = ' + JSON.stringify(t1.output) + ', error = ' + t1.error);
    if (t1.error) {
        console.log('Error details:', t1);
    }
    if (t1.error !== null || !t1.output.includes('ok')) throw new Error('Test 1 failed');

    // 2. Missing console methods -> no TypeError
    const t2 = await runInWorkerVM(`
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
    console.log('2. All console methods: success = ' + t2.success + ', error = ' + t2.error);
    if (t2.error !== null) throw new Error('Test 2 failed: ' + t2.error);

    // 3. Inspect-style formatter (Map, Set, Error, [NaN, Infinity, -0], {a:undefined})
    const t3 = await runInWorkerVM('console.log(new Map([[1,2]]), new Set([1]), new Error("e"), [NaN, Infinity, -0], {a:undefined});');
    console.log('3. Formatter output:\n' + t3.output);
    if (!t3.output.includes('Map(1)') || !t3.output.includes('Set(1)') || !t3.output.includes('NaN') || !t3.output.includes('-0') || !t3.output.includes('undefined')) {
        throw new Error('Test 3 failed');
    }

    // 4. {a:1,b:[1,2]}, "z" -> same layout as before
    const t4 = await runInWorkerVM('console.log({a:1,b:[1,2]}, "z");');
    console.log('4. Layout:\n' + t4.output);
    if (!t4.output.includes('{\n  "a": 1,\n  "b": [\n    1,\n    2\n  ]\n} z')) {
        throw new Error('Test 4 failed');
    }

    // 5. setTimeout 500ms
    const t5 = await runInWorkerVM('setTimeout(()=>console.log("late"), 500); console.log("first");');
    console.log('5. Async 500ms:\n' + t5.output);
    if (t5.output !== 'first\nlate') throw new Error('Test 5 failed: ' + t5.output);

    // 6. Promise.reject(new Error("x"))
    const t6 = await runInWorkerVM('Promise.reject(new Error("x"));');
    console.log('6. Unhandled rejection: error = ' + t6.error);
    if (!t6.error || !t6.error.includes('x')) throw new Error('Test 6 failed');

    // 7. async function f(){throw new Error("y")} f()
    const t7 = await runInWorkerVM('async function f(){throw new Error("y")} f();');
    console.log('7. Async throw: error = ' + t7.error);
    if (!t7.error || !t7.error.includes('y')) throw new Error('Test 7 failed');

    // 8. throw new TypeError("boom")
    const t8 = await runInWorkerVM('throw new TypeError("boom");');
    console.log('8. TypeError: error = ' + t8.error);
    if (!t8.error || !t8.error.includes('TypeError: boom')) throw new Error('Test 8 failed');

    // 9. Syntax error
    const t9 = await runInWorkerVM('function (broken {');
    console.log('9. Syntax error: error = ' + t9.error);
    if (!t9.error || !t9.error.includes('SyntaxError')) throw new Error('Test 9 failed');

    // 10. while(true){} stopped by direct pre-check
    console.log('10. Direct infinite loop pre-check:');
    const t10Direct = await runJavaScriptDirect('while(true){}');
    console.log('   Direct error = ' + t10Direct.error);
    if (!t10Direct.error || !t10Direct.error.includes('İcra vaxt limiti')) throw new Error('Test 10 Direct failed');

    console.log('\n✅ ALL VERIFICATION REQUIREMENTS COMPLETED SUCCESSFULLY! 🎉');
}

verifyAll().then(() => process.exit(0)).catch(err => {
    console.error('VERIFICATION FAILED:', err);
    process.exit(1);
});
