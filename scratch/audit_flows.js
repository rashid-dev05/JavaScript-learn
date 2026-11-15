const fs = require('fs');
const vm = require('vm');

console.log('=== Checking Data Integrity & Calculations ===');

// Check Curriculum task count calculation
const s1_5 = fs.readFileSync('data_sections_1_5.js', 'utf8');
const s6_9 = fs.readFileSync('data_sections_6_9.js', 'utf8');
const s10_13 = fs.readFileSync('data_sections_10_13.js', 'utf8');
const s14 = fs.readFileSync('data_section_14.js', 'utf8');
const s15 = fs.readFileSync('data_section_15.js', 'utf8');
const s16 = fs.readFileSync('data_section_16.js', 'utf8');
const s17 = fs.readFileSync('data_section_17.js', 'utf8');
const s18 = fs.readFileSync('data_section_18.js', 'utf8');
const s19 = fs.readFileSync('data_section_19.js', 'utf8');
const s20 = fs.readFileSync('data_section_20.js', 'utf8');
const s21 = fs.readFileSync('data_section_21.js', 'utf8');

const ctx = { window: {}, console: console };
vm.createContext(ctx);
[s1_5, s6_9, s10_13, s14, s15, s16, s17, s18, s19, s20, s21].forEach(code => vm.runInContext(code, ctx));

const curriculum = [
  ...ctx.SECTIONS_1_5,
  ...ctx.SECTIONS_6_9,
  ...ctx.SECTIONS_10_13,
  ...ctx.SECTIONS_14,
  ...ctx.SECTIONS_15,
  ...ctx.SECTIONS_16,
  ...ctx.SECTIONS_17,
  ...ctx.SECTIONS_18,
  ...ctx.SECTIONS_19,
  ...ctx.SECTIONS_20,
  ...ctx.SECTIONS_21
];

console.log('Total sections in curriculum:', curriculum.length);

let totalTopics = 0;
let totalExercises = 0;
let totalBugFixes = 0;

curriculum.forEach((sec, idx) => {
  if (!sec.id || !sec.title || !Array.isArray(sec.topics)) {
    console.error(`Section ${idx+1} invalid structure!`);
    return;
  }
  totalTopics += sec.topics.length;
  sec.topics.forEach(t => {
    if (Array.isArray(t.exercises)) totalExercises += t.exercises.length;
    if (Array.isArray(t.bugFixes)) totalBugFixes += t.bugFixes.length;
    else if (t.bugFix) totalBugFixes += 1;
  });
});

console.log(`Curriculum Stats: ${curriculum.length} sections, ${totalTopics} topics, ${totalExercises} exercises, ${totalBugFixes} bug fixes.`);
console.log(`Total Curriculum Tasks: ${totalExercises + totalBugFixes}`);
