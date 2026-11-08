const fs = require('fs');

const { section10 } = require('./build_section_10.js');
const { section11 } = require('./build_section_11.js');
const { section12 } = require('./build_section_12.js');
const { section13 } = require('./build_section_13.js');

const sections = [section10, section11, section12, section13];

sections.forEach(s => {
  s.topics.forEach(t => {
    if (t.bugFixes && t.bugFixes.length > 0 && !t.bugFix) {
      t.bugFix = t.bugFixes[0];
    }
    if (t.bugFix && (!t.bugFixes || t.bugFixes.length === 0)) {
      t.bugFixes = [t.bugFix];
    }
    // Ensure flags
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
});

console.log('Total sections to assemble:', sections.length);
sections.forEach(s => {
  console.log(`- ${s.id} (${s.title}): ${s.topics.length} topics`);
});

const content = `var SECTIONS_10_13 = ${JSON.stringify(sections, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SECTIONS_10_13 };\n}\n`;

fs.writeFileSync('data_sections_10_13.js', content, 'utf8');
console.log('Successfully written data_sections_10_13.js!');
