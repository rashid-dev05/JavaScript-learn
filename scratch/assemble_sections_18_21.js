const fs = require('fs');

function serializeSection(varName, sectionData) {
  return `var ${varName} = ${JSON.stringify(sectionData, null, 2)};

// İkiistiqamətli sinxronizasiya (Two-way sync)
if (typeof ${varName} !== 'undefined' && ${varName}[0] && ${varName}[0].topics) {
  ${varName}[0].topics.forEach(t => {
    if (t.exercises && t.exercises.length > 0) t.exercise = t.exercises[0];
    if (t.bugFixes && t.bugFixes.length > 0) {
      t.bugFix = t.bugFixes[0];
      t.bugFix.type = "bugfix";
      t.bugFix.disableHardcodeCheck = true;
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ${varName} };
}
`;
}

// 1. Section 18
const { SECTIONS_18 } = require('./build_section_18.js');
fs.writeFileSync('data_section_18.js', serializeSection('SECTIONS_18', SECTIONS_18), 'utf8');
console.log('Written data_section_18.js');

// 2. Section 19
const { SECTIONS_19 } = require('./build_section_19.js');
fs.writeFileSync('data_section_19.js', serializeSection('SECTIONS_19', SECTIONS_19), 'utf8');
console.log('Written data_section_19.js');

// 3. Section 20
const { SECTIONS_20 } = require('./build_section_20.js');
fs.writeFileSync('data_section_20.js', serializeSection('SECTIONS_20', SECTIONS_20), 'utf8');
console.log('Written data_section_20.js');

// 4. Section 21
const { SECTIONS_21 } = require('./build_section_21.js');
fs.writeFileSync('data_section_21.js', serializeSection('SECTIONS_21', SECTIONS_21), 'utf8');
console.log('Written data_section_21.js');

console.log('All 4 files written successfully.');
