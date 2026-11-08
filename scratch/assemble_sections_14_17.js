const fs = require('fs');

const { section14 } = require('./build_section_14.js');
const { section15 } = require('./build_section_15.js');
const { section16 } = require('./build_section_16.js');
const { section17 } = require('./build_section_17.js');

const list = [
  { file: 'data_section_14.js', varName: 'SECTIONS_14', sec: section14 },
  { file: 'data_section_15.js', varName: 'SECTIONS_15', sec: section15 },
  { file: 'data_section_16.js', varName: 'SECTIONS_16', sec: section16 },
  { file: 'data_section_17.js', varName: 'SECTIONS_17', sec: section17 }
];

list.forEach(item => {
  const { file, varName, sec } = item;
  sec.topics.forEach(t => {
    if (t.bugFixes && t.bugFixes.length > 0 && !t.bugFix) {
      t.bugFix = t.bugFixes[0];
    }
    if (t.bugFix && (!t.bugFixes || t.bugFixes.length === 0)) {
      t.bugFixes = [t.bugFix];
    }
    if (t.bugFix) {
      t.bugFix.type = t.bugFix.type || 'bugfix';
      t.bugFix.disableHardcodeCheck = true;
    }
    if (t.bugFixes) {
      t.bugFixes.forEach(b => {
        b.type = b.type || 'bugfix';
        b.disableHardcodeCheck = true;
      });
    }
  });

  const content = `var ${varName} = ${JSON.stringify([sec], null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { ${varName} };\n}\n`;
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Successfully written ${file}!`);
});
