const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('data_sections_1_5.js', 'utf8');
const win = {};
vm.createContext(win);
vm.runInContext(code, win);

let okCount = 0;
const total = 19;
win.SECTIONS_1_5.forEach(sec => {
  sec.topics.forEach(t => {
    const hasSep = t.theory.includes('<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">');
    const hasDeepDive = t.theory.includes('<h4>🔬 Dərinləşmə:');
    const hasTipBox = t.theory.includes('class="tip-box"');
    console.log(t.id + ' -> Separator: ' + hasSep + ', DeepDive: ' + hasDeepDive + ', TipBox: ' + hasTipBox);
    if (hasSep && hasDeepDive && hasTipBox) okCount++;
  });
});

console.log('Total verified topics matching 2-Tier Architecture:', okCount, 'out of', total);
