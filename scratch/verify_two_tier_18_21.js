const fs = require('fs');
const vm = require('vm');

const files = [
  { file: 'data_section_18.js', varName: 'SECTIONS_18', count: 3 },
  { file: 'data_section_19.js', varName: 'SECTIONS_19', count: 3 },
  { file: 'data_section_20.js', varName: 'SECTIONS_20', count: 3 },
  { file: 'data_section_21.js', varName: 'SECTIONS_21', count: 3 },
];

let totalTopics = 0;
let errors = [];

files.forEach(({ file, varName, count }) => {
  const content = fs.readFileSync(file, 'utf8');
  const ctx = {};
  try {
    vm.runInNewContext(content, ctx);
  } catch (err) {
    errors.push(`Syntax/Execution error in ${file}: ${err.message}`);
    return;
  }

  const sec = ctx[varName];
  if (!sec || !sec[0] || !sec[0].topics) {
    errors.push(`Could not find ${varName} in ${file}`);
    return;
  }

  const topics = sec[0].topics;
  if (topics.length !== count) {
    errors.push(`${file} expected ${count} topics, found ${topics.length}`);
  }

  topics.forEach(t => {
    totalTopics++;
    console.log(`Checking [${t.id}] ${t.title}...`);

    // 1. Tip box
    if (!t.theory.includes('class="tip-box"')) {
      errors.push(`[${t.id}] missing class="tip-box" in theory`);
    }

    // 2. Standard Separator
    if (!t.theory.includes('<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">')) {
      errors.push(`[${t.id}] missing standard hr separator`);
    }

    // 3. Deep Dive
    if (!t.theory.includes('<h4>🔬 Dərinləşmə:')) {
      errors.push(`[${t.id}] missing <h4>🔬 Dərinləşmə:`);
    }

    // 4. Exercise & Exercises sync
    if (!t.exercise || !t.exercises || t.exercises.length === 0 || t.exercise !== t.exercises[0]) {
      errors.push(`[${t.id}] exercise / exercises sync mismatch`);
    }

    // 5. BugFix & BugFixes sync
    if (!t.bugFix || !t.bugFixes || t.bugFixes.length === 0 || t.bugFix !== t.bugFixes[0]) {
      errors.push(`[${t.id}] bugFix / bugFixes sync mismatch`);
    }

    // 6. Hardcode check disable
    if (!t.bugFix.disableHardcodeCheck || t.bugFix.type !== 'bugfix') {
      errors.push(`[${t.id}] bugFix missing disableHardcodeCheck or type="bugfix"`);
    }
  });
});

console.log(`\nChecked ${totalTopics} topics across Sections 18 to 21.`);
if (errors.length > 0) {
  console.error('Validation ERRORS:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('ALL TWO-TIER AND INTEGRITY CHECKS PASSED PERFECTLY!');
}
