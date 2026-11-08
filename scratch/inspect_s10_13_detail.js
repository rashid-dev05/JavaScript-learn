const fs = require('fs');
const sections = JSON.parse(fs.readFileSync('./scratch/s10_13_dump.json', 'utf8'));

sections.forEach(s => {
  console.log(`\n=== Section: ${s.id} - ${s.title} ===`);
  s.topics.forEach(t => {
    console.log(`\nTopic: ${t.id} - ${t.title}`);
    console.log('Exercises:');
    (t.exercises || []).forEach(e => {
      console.log(`  [${e.id}] ${e.title} -> Expected:\n${e.expectedOutput}`);
    });
    console.log('BugFixes:');
    const bugs = t.bugFixes || (t.bugFix ? [t.bugFix] : []);
    bugs.forEach(b => {
      console.log(`  [${b.id}] ${b.title} -> Expected:\n${b.expectedOutput || b.correctOutput}`);
    });
  });
});
