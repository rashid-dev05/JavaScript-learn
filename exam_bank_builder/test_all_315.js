// exam_bank_builder/test_all_315.js
const { runTestCode } = require('./mock_env');
const questions = require('../data_exam_questions.js');

async function testAll() {
  console.log(`\n========================================`);
  console.log(`🧪 Bütün 315 Sualın Həll Testi`);
  console.log(`========================================\n`);

  let passed = 0;
  let failed = 0;
  const failedList = [];

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    try {
      const output = await runTestCode(q.solutionCode, { bolmeId: q.bolmeId });
      const normActual = output.trim().replace(/\r\n/g, '\n');
      const normExpected = q.gozlenilenCixis.trim().replace(/\r\n/g, '\n');

      if (normActual === normExpected) {
        passed++;
      } else {
        failed++;
        failedList.push({
          id: q.id,
          basliq: q.basliq,
          expected: normExpected,
          actual: normActual
        });
        console.error(`❌ UĞURSUZ: ${q.id} - ${q.basliq}`);
        console.error(`   Gözlənilən: ${JSON.stringify(normExpected)}`);
        console.error(`   Alınan:     ${JSON.stringify(normActual)}`);
      }
    } catch (err) {
      failed++;
      failedList.push({
        id: q.id,
        basliq: q.basliq,
        error: err.message
      });
      console.error(`💥 XƏTA: ${q.id} - ${q.basliq}:`, err.message);
    }
  }

  console.log(`\n----------------------------------------`);
  console.log(`YEKUN TEST NƏTİCƏSİ:`);
  console.log(`✅ UĞURLU:  ${passed} / ${questions.length}`);
  console.log(`❌ UĞURSUZ: ${failed} / ${questions.length}`);
  console.log(`----------------------------------------\n`);

  if (failed > 0) process.exit(1);
}

testAll();
