const fs = require('fs');
const vm = require('vm');

console.log('Loading app.js sandbox...');
const appCode = fs.readFileSync('app.js', 'utf8');

// Build an environment to test app.js runner
const mockDom = {
    elements: {},
    getElementById(id) {
        if (!this.elements[id]) {
            this.elements[id] = {
                id,
                innerHTML: '',
                textContent: '',
                className: '',
                classList: {
                    add: () => {},
                    remove: () => {},
                    toggle: () => {},
                    contains: () => false
                },
                closest: (sel) => {
                    return this.elements[id + '-card'] || {
                        classList: { add: () => {}, remove: () => {} },
                        querySelector: () => ({ disabled: false, classList: { add: () => {}, remove: () => {} } })
                    };
                },
                querySelector: () => ({ disabled: false, classList: { add: () => {}, remove: () => {} } })
            };
        }
        return this.elements[id];
    },
    querySelector: () => null
};

// Test 1: Test runJavaScriptDirect timeout
async function testDirectTimeout() {
    console.log('\n--- TEST 1: runJavaScriptDirect with hanging Promise ---');
    // Extract runJavaScriptDirect and its dependencies from app.js
    const start = appCode.indexOf('function preprocessModuleCode');
    const end = appCode.indexOf('function initSandboxEditor');
    const runnerCode = appCode.slice(start, end);

    const context = {
        console, Date, Math, String, Number, Boolean, Array, Object, RegExp, Promise, Set, Map, WeakSet, WeakMap,
        setTimeout, clearTimeout,
        document: mockDom,
        state: { userDrafts: {}, completedBugFixes: new Set(), completedPanelErrors: new Set() },
        localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }
    };
    vm.createContext(context);
    vm.runInContext(runnerCode, context);

    const hangingCode = `
        console.log("Başladı...");
        await new Promise(() => {}); // Never resolves
        console.log("Bitdi");
    `;

    const t0 = Date.now();
    console.log('Executing hanging code with 1000ms timeout...');
    const res = await context.runJavaScriptDirect(hangingCode, 1000);
    const elapsed = Date.now() - t0;
    console.log(`Finished in ${elapsed}ms`);
    console.log('Result output:', res.output);
    console.log('Result error:', res.error);

    if (res.error && res.error.includes('İcra vaxt limiti') && elapsed >= 950 && elapsed <= 1300) {
        console.log('✅ TEST 1 PASSED: Hanging promise terminated safely within timeout!');
    } else {
        console.error('❌ TEST 1 FAILED:', res);
        process.exit(1);
    }
}

// Test 2: Test MockHttpServer simulateRequest when res.end() is not called
async function testHttpServerResEnd() {
    console.log('\n--- TEST 2: MockHttpServer simulateRequest without res.end() ---');
    const start = appCode.indexOf('function preprocessModuleCode');
    const end = appCode.indexOf('function initSandboxEditor');
    const runnerCode = appCode.slice(start, end);

    const context = {
        console, Date, Math, String, Number, Boolean, Array, Object, RegExp, Promise, Set, Map, WeakSet, WeakMap,
        setTimeout, clearTimeout,
        document: mockDom,
        state: { userDrafts: {}, completedBugFixes: new Set(), completedPanelErrors: new Set() },
        localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }
    };
    vm.createContext(context);
    vm.runInContext(runnerCode, context);

    const buggyServerCode = `
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            // intentionally omitted res.end()
        });
        const sim = server.simulateRequest("/");
        console.log("sim.ended:", sim.ended);
        console.log("Status:", sim.ended ? "Tamamlandı" : "Asılı qaldı");
    `;

    const res = await context.runJavaScriptDirect(buggyServerCode, 1000);
    console.log('Output from buggy server:', res.output);
    if (res.output.includes('sim.ended: false') && res.output.includes('Status: Asılı qaldı')) {
        console.log('✅ TEST 2 PASSED: MockHttpServer safely reported ended: false without hanging!');
    } else {
        console.error('❌ TEST 2 FAILED:', res);
        process.exit(1);
    }

    const fixedServerCode = `
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.end("Cavab göndərildi");
        });
        const sim = server.simulateRequest("/");
        console.log("sim.ended:", sim.ended);
        console.log("Status:", sim.ended ? "Tamamlandı" : "Asılı qaldı");
    `;

    const resFixed = await context.runJavaScriptDirect(fixedServerCode, 1000);
    console.log('Output from fixed server:', resFixed.output);
    if (resFixed.output.includes('sim.ended: true') && resFixed.output.includes('Status: Tamamlandı') && resFixed.output.includes('Cavab göndərildi')) {
        console.log('✅ TEST 2 (Fixed) PASSED: MockHttpServer successfully responded with res.end()!');
    } else {
        console.error('❌ TEST 2 (Fixed) FAILED:', resFixed);
        process.exit(1);
    }
}

// Test 3: CommonJS module.exports support
async function testModuleExports() {
    console.log('\n--- TEST 3: CommonJS module.exports support in direct & worker ---');
    const start = appCode.indexOf('function preprocessModuleCode');
    const end = appCode.indexOf('function initSandboxEditor');
    const runnerCode = appCode.slice(start, end);

    const context = {
        console, Date, Math, String, Number, Boolean, Array, Object, RegExp, Promise, Set, Map, WeakSet, WeakMap,
        setTimeout, clearTimeout,
        document: mockDom,
        state: { userDrafts: {}, completedBugFixes: new Set(), completedPanelErrors: new Set() },
        localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }
    };
    vm.createContext(context);
    vm.runInContext(runnerCode, context);

    const cjsCode = `
        module.exports = { topla: (a, b) => a + b };
        console.log("CJS:", module.exports.topla(5, 7));
    `;

    const res = await context.runJavaScriptDirect(cjsCode, 1000);
    console.log('Output from CJS code:', res.output);
    if (res.output.includes('CJS: 12')) {
        console.log('✅ TEST 3 PASSED: CommonJS module.exports functions correctly!');
    } else {
        console.error('❌ TEST 3 FAILED:', res);
        process.exit(1);
    }
}

async function runAll() {
    try {
        await testDirectTimeout();
        await testHttpServerResEnd();
        await testModuleExports();
        console.log('\n🌟 ALL RUNNER RESILIENCE TESTS PASSED 100%!');
    } catch (e) {
        console.error('Error during test execution:', e);
        process.exit(1);
    }
}

runAll();
