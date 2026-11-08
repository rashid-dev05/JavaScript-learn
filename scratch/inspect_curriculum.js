const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('data_sections_1_5.js', 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const sections = sandbox.SECTIONS_1_5;
console.log('Total sections in data_sections_1_5.js:', sections.length);
sections.forEach(sec => {
  console.log(`\nSection ${sec.id}: ${sec.title}`);
  sec.topics.forEach(t => {
    const exCount = t.exercises ? t.exercises.length : 0;
    const bugCount = t.bugFixes ? t.bugFixes.length : (t.bugFix ? 1 : 0);
    console.log(`  ${t.id}: ${t.title} [${exCount} ex, ${bugCount} bug]`);
    if (t.exercises) {
      t.exercises.forEach(e => {
        console.log(`    Ex: ${e.id} -> ${JSON.stringify(e.expectedOutput)}`);
      });
    }
    if (t.bugFixes) {
      t.bugFixes.forEach(b => {
        console.log(`    BugFix: ${b.id} -> ${JSON.stringify(b.expectedOutput || b.correctOutput)}`);
      });
    } else if (t.bugFix) {
      console.log(`    BugFix: ${t.bugFix.id} -> ${JSON.stringify(t.bugFix.expectedOutput || t.bugFix.correctOutput)}`);
    }
  });
});
