const fs = require('fs');
const vm = require('vm');

console.log('=== Deep Project Runtime Simulation Audit ===');

// 1. Check all 21 Curriculum Sections
const expectedSections = [
  'data_sections_1_5.js',
  'data_sections_6_9.js',
  'data_sections_10_13.js',
  'data_section_14.js',
  'data_section_15.js',
  'data_section_16.js',
  'data_section_17.js',
  'data_section_18.js',
  'data_section_19.js',
  'data_section_20.js',
  'data_section_21.js'
];

let allCurriculum = [];
expectedSections.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error('MISSING FILE:', f);
  } else {
    const code = fs.readFileSync(f, 'utf8');
    const ctx = { window: {}, console: console };
    try {
      vm.createContext(ctx);
      vm.runInContext(code, ctx);
      const keys = Object.keys(ctx).filter(k => k.startsWith('SECTION'));
      console.log(`${f} loaded successfully, found sections: ${keys.join(', ')}`);
    } catch(err) {
      console.error(`ERROR loading ${f}:`, err.message);
    }
  }
});

// 2. Check Data Panel & Exam Questions
try {
  const qCode = fs.readFileSync('data_exam_questions.js', 'utf8');
  const qCtx = { window: {} };
  vm.createContext(qCtx);
  vm.runInContext(qCode, qCtx);
  const qCount = (qCtx.EXAM_QUESTIONS_DATA || (qCtx.window && qCtx.window.EXAM_QUESTIONS_DATA) || []).length;
  console.log(`data_exam_questions.js loaded: ${qCount} exam questions.`);
} catch (e) {
  console.error('Error in data_exam_questions.js:', e.message);
}

// 3. Check Hourglass Challenges
try {
  const hgCode = fs.readFileSync('data_hourglass_challenges.js', 'utf8');
  const hgCtx = { window: {} };
  vm.createContext(hgCtx);
  vm.runInContext(hgCode, hgCtx);
  const hgCount = (hgCtx.HOURGLASS_CHALLENGES || (hgCtx.window && hgCtx.window.HOURGLASS_CHALLENGES) || []).length;
  console.log(`data_hourglass_challenges.js loaded: ${hgCount} hourglass challenges.`);
} catch (e) {
  console.error('Error in data_hourglass_challenges.js:', e.message);
}

// 4. Check Roadmap JS
try {
  const rmCode = fs.readFileSync('roadmap.js', 'utf8');
  const rmCtx = { window: {}, document: {}, console: console };
  vm.createContext(rmCtx);
  vm.runInContext(rmCode, rmCtx);
  console.log('roadmap.js evaluated successfully.');
} catch (e) {
  console.error('Error in roadmap.js:', e.message);
}

// 5. Check Exam JS
try {
  const exCode = fs.readFileSync('exam.js', 'utf8');
  const exCtx = { window: {}, document: {}, console: console };
  vm.createContext(exCtx);
  vm.runInContext(exCode, exCtx);
  console.log('exam.js evaluated successfully.');
} catch (e) {
  console.error('Error in exam.js:', e.message);
}

// 6. Check StorageEngine JS
try {
  const seCode = fs.readFileSync('storage_engine.js', 'utf8');
  const seCtx = { window: {}, document: {}, console: console };
  vm.createContext(seCtx);
  vm.runInContext(seCode, seCtx);
  console.log('storage_engine.js evaluated successfully.');
} catch (e) {
  console.error('Error in storage_engine.js:', e.message);
}

// 7. Check Simulator JS
try {
  const simCode = fs.readFileSync('simulator.js', 'utf8');
  const simCtx = { window: {}, document: {}, console: console };
  vm.createContext(simCtx);
  vm.runInContext(simCode, simCtx);
  console.log('simulator.js evaluated successfully.');
} catch (e) {
  console.error('Error in simulator.js:', e.message);
}
