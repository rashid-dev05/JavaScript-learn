const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('data_sections_6_9.js', 'utf8');
const win = {};
vm.createContext(win);
vm.runInContext(code, win);

const sections = win.SECTIONS_6_9;
console.log('Sections count in data_sections_6_9.js:', sections.length);
sections.forEach(sec => {
  console.log(`\nSection ${sec.id}: ${sec.title}`);
  sec.topics.forEach(t => {
    const exCount = t.exercises ? t.exercises.length : 0;
    const bugCount = t.bugFixes ? t.bugFixes.length : (t.bugFix ? 1 : 0);
    console.log(`  ${t.id} (${t.title}): ${exCount} exercises, ${bugCount} bugFixes`);
    if (t.exercises) {
      t.exercises.forEach(e => {
        console.log(`    Ex: ${e.id} [${e.title}] -> ${JSON.stringify(e.expectedOutput)}`);
      });
    }
    if (t.bugFixes) {
      t.bugFixes.forEach(b => {
        console.log(`    BugFix: ${b.id} [${b.title}] -> ${JSON.stringify(b.expectedOutput || b.correctOutput)}`);
      });
    } else if (t.bugFix) {
      console.log(`    BugFix: ${t.bugFix.id} [${t.bugFix.title}] -> ${JSON.stringify(t.bugFix.expectedOutput || t.bugFix.correctOutput)}`);
    }
  });
});
