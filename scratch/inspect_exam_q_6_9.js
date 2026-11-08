const fs = require('fs');
const vm = require('vm');

const examCode = fs.readFileSync('data_exam_questions.js', 'utf8');
const win = {};
vm.createContext(win);
vm.runInContext(examCode, win);

const questions = win.EXAM_QUESTIONS_DATA || [];
const s6_9 = questions.filter(q => q.bolmeId >= 6 && q.bolmeId <= 9);
console.log('Sections 6-9 exam questions count:', s6_9.length);

s6_9.forEach(q => {
  console.log('[Bölmə ' + q.bolmeId + '] ' + q.id + ' (' + q.cetinlik + '): ' + q.basliq);
});
