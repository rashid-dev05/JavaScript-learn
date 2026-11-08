const fs = require('fs');
const vm = require('vm');

console.log('Loading app.js sandbox for UI flow testing...');
const appCode = fs.readFileSync('app.js', 'utf8');

// Build an environment to test app.js runner
const mockElements = {};
function getOrCreateElem(id) {
    if (!mockElements[id]) {
        mockElements[id] = {
            id,
            innerHTML: '',
            textContent: '',
            className: '',
            disabled: false,
            dataset: {},
            classList: {
                classes: new Set(),
                add(c) { this.classes.add(c); },
                remove(c) { this.classes.delete(c); },
                toggle(c) { this.classes.has(c) ? this.classes.delete(c) : this.classes.add(c); },
                contains(c) { return this.classes.has(c); }
            },
            closest(sel) {
                return getOrCreateElem(id + '-card');
            },
            querySelector(sel) {
                return getOrCreateElem(id + '-sub');
            }
        };
    }
    return mockElements[id];
}

const mockDoc = {
    getElementById(id) { return getOrCreateElem(id); },
    querySelector(sel) { return getOrCreateElem('query-' + sel); },
    querySelectorAll() { return []; },
    createElement(tag) { return getOrCreateElem('dyn-' + tag + '-' + Math.random()); },
    documentElement: { getAttribute: () => 'dark' },
    body: { appendChild: () => {} }
};

async function testUIFlowResilience() {
    console.log('\n--- TEST 4: UI Error & Loading State Resilience ---');
    // Extract continuous block from explainError up to toggleMobileSidebar
    const start = appCode.indexOf('function stripComments');
    const end = appCode.indexOf('function toggleMobileSidebar');
    const fullTestScript = appCode.slice(start, end) + `
        this.submitBugFix = submitBugFix;
        this.submitPanelError = submitPanelError;
        this.submitExercise = submitExercise;
        this.submitPanelTask = submitPanelTask;
    `;

    const context = {
        console, Date, Math, String, Number, Boolean, Array, Object, RegExp, Promise, Set, Map, WeakSet, WeakMap,
        setTimeout, clearTimeout,
        document: mockDoc,
        escapeHtml: (s) => String(s || ''),
        compareOutputs: (u, e) => u === e,
        showToast: () => {},
        miniConfetti: () => {},
        checkTopicCompletion: () => {},
        syncPlatformProgress: () => {},
        saveProgress: () => {},
        updateErrorsPanelStats: () => {},
        updateTasksPanelStats: () => {},
        state: {
            userDrafts: {},
            completedBugFixes: new Set(),
            completedPanelErrors: new Set(),
            completedExercises: new Set(),
            completedPanelTasks: new Set()
        },
        debounce: (fn) => fn,
        localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }
    };
    vm.createContext(context);
    vm.runInContext(fullTestScript, context);

    // 4A: submitBugFix with hanging code
    console.log('Testing submitBugFix with hanging promise...');
    const bfId = 'test-bf-1';
    const cardEl = getOrCreateElem(`bugfix-result-${bfId}-card`);
    const resultEl = getOrCreateElem(`bugfix-result-${bfId}`);
    const submitBtn = getOrCreateElem(`bugfix-result-${bfId}-card-sub`);
    cardEl.querySelector = (sel) => submitBtn;

    const mockBugFix = {
        id: bfId,
        buggyCode: 'console.log("Buggy");',
        correctCode: 'console.log("Fixed");',
        expectedOutput: 'Fixed',
        explanation: 'Test explanation',
        type: 'bugfix'
    };

    const mockCm = {
        getValue: () => 'await new Promise(() => {});' // Hanging code
    };

    const p = context.submitBugFix(bfId, mockBugFix, mockCm);
    // At start, resultEl should contain 'İcra olunur...'
    if (!resultEl.innerHTML.includes('İcra olunur...')) {
        console.error('❌ Failed: Expected running indicator at start, got:', resultEl.innerHTML);
        process.exit(1);
    }
    if (submitBtn.disabled !== true) {
        console.error('❌ Failed: Expected submitBtn to be disabled during execution');
        process.exit(1);
    }

    await p;

    // After completion, resultEl MUST NOT have 'İcra olunur...'
    console.log('Final resultEl content in submitBugFix:', resultEl.innerHTML);
    if (resultEl.innerHTML.includes('İcra olunur...')) {
        console.error('❌ FAILED: submitBugFix is permanently stuck on "İcra olunur..."!');
        process.exit(1);
    }
    if (submitBtn.disabled !== false) {
        console.error('❌ FAILED: submitBtn was not re-enabled!');
        process.exit(1);
    }
    if (!resultEl.innerHTML.includes('İcra vaxt limiti')) {
        console.error('❌ FAILED: Expected timeout error in resultEl');
        process.exit(1);
    }
    console.log('✅ 4A PASSED: submitBugFix safely aborted timeout and re-enabled button!');

    // 4B: submitPanelError with hanging code
    console.log('\nTesting submitPanelError with hanging promise...');
    const bugId = 'test-bug-1';
    const cardBug = getOrCreateElem(`card-${bugId}`);
    const resultBug = getOrCreateElem(`result-${bugId}`);
    const submitBtnBug = getOrCreateElem(`card-${bugId}-sub`);
    cardBug.querySelector = (sel) => submitBtnBug;
    resultBug.closest = () => cardBug;

    const mockBug = {
        id: bugId,
        buggyCode: 'console.log("BugStart");',
        correctCode: 'console.log("BugFixed");',
        expectedOutput: 'BugFixed',
        explanation: 'Bug explanation',
        type: 'bugfix'
    };

    const pBug = context.submitPanelError(bugId, mockBug, mockCm);
    if (!resultBug.innerHTML.includes('İcra olunur...')) {
        console.error('❌ Failed: Expected running indicator at start of submitPanelError');
        process.exit(1);
    }
    if (submitBtnBug.disabled !== true) {
        console.error('❌ Failed: Expected submitBtnBug to be disabled during execution');
        process.exit(1);
    }

    await pBug;

    if (resultBug.innerHTML.includes('İcra olunur...')) {
        console.error('❌ FAILED: submitPanelError is permanently stuck on "İcra olunur..."!');
        process.exit(1);
    }
    if (submitBtnBug.disabled !== false) {
        console.error('❌ FAILED: submitBtnBug was not re-enabled!');
        process.exit(1);
    }
    if (!resultBug.innerHTML.includes('İcra vaxt limiti')) {
        console.error('❌ FAILED: Expected timeout error in resultBug');
        process.exit(1);
    }
    console.log('✅ 4B PASSED: submitPanelError safely aborted timeout and re-enabled button!');

    // 4C: submitExercise with hanging code
    console.log('\nTesting submitExercise with hanging promise...');
    const exId = 'test-ex-1';
    const cardEX = getOrCreateElem(`card-${exId}`);
    const resultEX = getOrCreateElem(`result-${exId}`);
    const submitBtnEX = getOrCreateElem(`card-${exId}-sub`);
    cardEX.querySelector = (sel) => submitBtnEX;
    resultEX.closest = () => cardEX;

    const mockExercise = {
        id: exId,
        starterCode: 'console.log("Start");',
        solutionCode: 'console.log("Done");',
        expectedOutput: 'Done',
        hint: 'Exercise hint',
        type: 'standard'
    };

    const pEX = context.submitExercise(exId, mockExercise, mockCm);
    if (!resultEX.innerHTML.includes('İcra olunur...')) {
        console.error('❌ Failed: Expected running indicator at start of submitExercise');
        process.exit(1);
    }
    if (submitBtnEX.disabled !== true) {
        console.error('❌ Failed: Expected submitBtnEX to be disabled during execution');
        process.exit(1);
    }

    await pEX;

    if (resultEX.innerHTML.includes('İcra olunur...')) {
        console.error('❌ FAILED: submitExercise is permanently stuck on "İcra olunur..."!');
        process.exit(1);
    }
    if (submitBtnEX.disabled !== false) {
        console.error('❌ FAILED: submitBtnEX was not re-enabled!');
        process.exit(1);
    }
    if (!resultEX.innerHTML.includes('İcra vaxt limiti')) {
        console.error('❌ FAILED: Expected timeout error in resultEX');
        process.exit(1);
    }
    console.log('✅ 4C PASSED: submitExercise safely aborted timeout and re-enabled button!');

    // 4D: submitPanelTask with hanging code
    console.log('\nTesting submitPanelTask with hanging promise...');
    const taskId = 'test-task-1';
    const cardTask = getOrCreateElem(`card-${taskId}`);
    const resultTask = getOrCreateElem(`result-${taskId}`);
    const submitBtnTask = getOrCreateElem(`card-${taskId}-sub`);
    cardTask.querySelector = (sel) => submitBtnTask;
    resultTask.closest = () => cardTask;

    const mockTask = {
        id: taskId,
        starterCode: 'console.log("TaskStart");',
        solutionCode: 'console.log("TaskDone");',
        expectedOutput: 'TaskDone',
        hint: 'Task hint',
        type: 'standard'
    };

    const pTask = context.submitPanelTask(taskId, mockTask, mockCm);
    if (!resultTask.innerHTML.includes('İcra olunur...')) {
        console.error('❌ Failed: Expected running indicator at start of submitPanelTask');
        process.exit(1);
    }
    if (submitBtnTask.disabled !== true) {
        console.error('❌ Failed: Expected submitBtnTask to be disabled during execution');
        process.exit(1);
    }

    await pTask;

    if (resultTask.innerHTML.includes('İcra olunur...')) {
        console.error('❌ FAILED: submitPanelTask is permanently stuck on "İcra olunur..."!');
        process.exit(1);
    }
    if (submitBtnTask.disabled !== false) {
        console.error('❌ FAILED: submitBtnTask was not re-enabled!');
        process.exit(1);
    }
    if (!resultTask.innerHTML.includes('İcra vaxt limiti')) {
        console.error('❌ FAILED: Expected timeout error in resultTask');
        process.exit(1);
    }
    console.log('✅ 4D PASSED: submitPanelTask safely aborted timeout and re-enabled button!');
}

async function main() {
    await testUIFlowResilience();
    console.log('\n🎉 ALL UI FLOW RESILIENCE TESTS PASSED 100%!');
}

main();
