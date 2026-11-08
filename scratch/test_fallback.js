const fs = require('fs');
const vm = require('vm');

const appCode = fs.readFileSync('app.js', 'utf8');

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
    debounce: (fn) => fn,
    checkTopicCompletion: () => {},
    syncPlatformProgress: () => {},
    saveProgress: () => {},
    updateErrorsPanelStats: () => {},
    updateTasksPanelStats: () => {},
    state: {
        completedExercises: new Set(),
        completedBugFixes: new Set(),
        completedPanelTasks: new Set(),
        completedPanelErrors: new Set(),
        userDrafts: {}
    }
};

vm.createContext(context);
vm.runInContext(fullTestScript, context);

async function testTargetFallback() {
    console.log('Testing submitPanelError with expectedOutput instead of correctOutput...');
    const bugId = 'fallback-bug-1';
    const card = getOrCreateElem(`card-${bugId}`);
    const resultEl = getOrCreateElem(`result-${bugId}`);
    const submitBtn = getOrCreateElem(`card-${bugId}-sub`);
    card.querySelector = () => submitBtn;
    resultEl.closest = () => card;

    const bugWithExpectedOnly = {
        id: bugId,
        buggyCode: 'console.log("wrong");',
        correctCode: 'console.log("expected_target_output");',
        expectedOutput: 'expected_target_output', // note: no correctOutput property!
        explanation: 'Test fallback',
        type: 'bugfix'
    };

    const mockCm = {
        getValue: () => 'console.log("expected_target_output");'
    };

    await context.submitPanelError(bugId, bugWithExpectedOnly, mockCm);

    if (!resultEl.className.includes('success')) {
        console.error('❌ FAILED: submitPanelError did not succeed when using expectedOutput fallback!');
        console.error('resultEl class:', resultEl.className, 'innerHTML:', resultEl.innerHTML);
        process.exit(1);
    }
    console.log('✅ submitPanelError targetOutput fallback PASSED!');

    // Test with wrong code
    const mockCmWrong = {
        getValue: () => 'console.log("different");'
    };
    await context.submitPanelError(bugId, bugWithExpectedOnly, mockCmWrong);
    if (!resultEl.className.includes('error')) {
        console.error('❌ FAILED: submitPanelError should report error for mismatched output!');
        process.exit(1);
    }
    console.log('✅ submitPanelError mismatch output detection PASSED!');
}

testTargetFallback().then(() => {
    console.log('🎉 ALL FALLBACK TESTS PASSED 100%!');
    process.exit(0);
}).catch(err => {
    console.error('Test error:', err);
    process.exit(1);
});
