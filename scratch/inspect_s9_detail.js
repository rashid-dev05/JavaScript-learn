const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('./data_sections_6_9.js', 'utf8');
const sandbox = {};
vm.runInNewContext(code, sandbox);
const s9 = sandbox.SECTIONS_6_9.find(s => s.id === 'section-9');
console.log('Section 9 topics:');
s9.topics.forEach(t => {
    console.log(`Topic ID: ${t.id}, Title: ${t.title}`);
    console.log(`Exercises:`, (t.exercises || []).map(e => ({ id: e.id, title: e.title, expected: e.expectedOutput })));
    const bugs = t.bugFixes || (t.bugFix ? [t.bugFix] : []);
    console.log(`BugFixes:`, bugs.map(b => ({ id: b.id, title: b.title, expected: b.expectedOutput || b.correctOutput })));
});
