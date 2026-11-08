const fs = require('fs');

const { section1 } = require('./build_section_1.js');
const { section2 } = require('./build_section_2.js');
const { section3 } = require('./build_section_3.js');
const { section4 } = require('./build_section_4.js');
const { section5 } = require('./build_section_5.js');

const sections = [section1, section2, section3, section4, section5];

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

const content = `var SECTIONS_1_5 = ${JSON.stringify(sections, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SECTIONS_1_5 };\n}\n`;

fs.writeFileSync('data_sections_1_5.js', content, 'utf8');
console.log('Successfully wrote data_sections_1_5.js, size:', content.length, 'bytes');
