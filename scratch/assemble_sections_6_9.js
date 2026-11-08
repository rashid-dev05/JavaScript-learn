const fs = require('fs');

const { section6 } = require('./build_section_6.js');
const { section7 } = require('./build_section_7.js');
const { section8 } = require('./build_section_8.js');
const { section9 } = require('./build_section_9.js');

const sections = [section6, section7, section8, section9];

sections.forEach(s => {
  s.topics.forEach(t => {
    if (t.bugFixes && t.bugFixes.length > 0 && !t.bugFix) {
      t.bugFix = t.bugFixes[0];
    }
    if (t.bugFix && (!t.bugFixes || t.bugFixes.length === 0)) {
      t.bugFixes = [t.bugFix];
    }
  });
});

console.log('Total sections to assemble:', sections.length);
sections.forEach(s => {
  console.log(`- ${s.id} (${s.title}): ${s.topics.length} topics`);
});

const content = `var SECTIONS_6_9 = ${JSON.stringify(sections, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SECTIONS_6_9 };\n}\n`;

fs.writeFileSync('data_sections_6_9.js', content, 'utf8');
console.log('Successfully written data_sections_6_9.js!');
