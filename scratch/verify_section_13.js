const fs = require('fs');
const { section13 } = require('./build_section_13.js');

const app = fs.readFileSync('app.js', 'utf8');
const startIdx = app.indexOf('function preprocessModuleCode');
const endIdx = app.indexOf('function runJavaScript(');
const mockBlock = app.slice(startIdx, endIdx);

const factory = new Function(`
${mockBlock}
return { runJavaScriptDirect, preprocessModuleCode };
`);
const runner = factory();

const cleanStr = (s) => (s || '').replace(/\r\n/g, '\n').trim();

function compareOutputs(userOutput, expectedOutput) {
    const u = cleanStr(userOutput);
    const e = cleanStr(expectedOutput);
    if (u === e) return true;
    if (u.replace(/\s+/g, ' ') === e.replace(/\s+/g, ' ')) return true;
    try {
        const normU = JSON.stringify(JSON.parse(u));
        const normE = JSON.stringify(JSON.parse(e));
        if (normU === normE) return true;
    } catch (e) {}
    return false;
}

async function verifySection13() {
    let passed = 0;
    let failed = 0;

    for (const topic of section13.topics) {
        console.log(`\nTesting Topic: ${topic.id} - ${topic.title}`);
        
        // Exercises
        for (const ex of (topic.exercises || [])) {
            const preprocessed = runner.preprocessModuleCode(ex.solutionCode);
            const res = await runner.runJavaScriptDirect(preprocessed);
            const ok = compareOutputs(res.output, ex.expectedOutput);
            if (ok) {
                console.log(`  [EX PASS] ${ex.id} (${ex.title})`);
                passed++;
            } else {
                console.error(`  [EX FAIL] ${ex.id} (${ex.title})`);
                console.error(`     Expected:\n${ex.expectedOutput}`);
                console.error(`     Got:\n${res.output}`);
                if (res.error) console.error(`     Error: ${res.error}`);
                failed++;
            }
        }

        // BugFixes
        const bugFixList = topic.bugFixes || (topic.bugFix ? [topic.bugFix] : []);
        for (const bug of bugFixList) {
            const preprocessed = runner.preprocessModuleCode(bug.correctCode);
            const res = await runner.runJavaScriptDirect(preprocessed);
            const expected = bug.expectedOutput || bug.correctOutput;
            const ok = compareOutputs(res.output, expected);
            if (ok) {
                console.log(`  [BUG PASS] ${bug.id} (${bug.title})`);
                passed++;
            } else {
                console.error(`  [BUG FAIL] ${bug.id} (${bug.title})`);
                console.error(`     Expected:\n${expected}`);
                console.error(`     Got:\n${res.output}`);
                if (res.error) console.error(`     Error: ${res.error}`);
                failed++;
            }
        }
    }

    console.log(`\nSection 13 Summary: ${passed} Passed, ${failed} Failed`);
    if (failed > 0) process.exit(1);
}

verifySection13();
