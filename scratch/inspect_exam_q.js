const fs = require('fs');
const vm = require('vm');

const examCode = fs.readFileSync('data_exam_questions.js', 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(examCode, sandbox);

const questions = sandbox.EXAM_QUESTIONS_DATA || [];
const s1_5 = questions.filter(q => q.bolmeId >= 1 && q.bolmeId <= 5);
console.log('Sections 1-5 exam questions count:', s1_5.length);

s1_5.forEach(q => {
  console.log('[Bölmə ' + q.bolmeId + '] ' + q.id + ' (' + q.cetinlik + '): ' + q.basliq);
});
