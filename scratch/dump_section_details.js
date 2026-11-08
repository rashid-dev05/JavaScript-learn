const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('data_sections_1_5.js', 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const sections = sandbox.SECTIONS_1_5;
const dumped = {};
sections.forEach(sec => {
  dumped[sec.id] = {
    title: sec.title,
    topics: sec.topics.map(t => ({
      id: t.id,
      title: t.title,
      exercises: t.exercises,
      bugFixes: t.bugFixes,
      bugFix: t.bugFix
    }))
  };
});

fs.writeFileSync('scratch/current_sections_1_5_meta.json', JSON.stringify(dumped, null, 2));
console.log('Saved scratch/current_sections_1_5_meta.json');
