// exam_bank_builder/build.js
const fs = require('fs');
const path = require('path');
const { runTestCode } = require('./mock_env');

const { SEC_1_5_QUESTIONS } = require('./sec_1_5');
const { SEC_6_9_QUESTIONS } = require('./sec_6_9');
const { SEC_10_13_QUESTIONS } = require('./sec_10_13');
const { SEC_14_17_QUESTIONS } = require('./sec_14_17');
const { SEC_18_21_QUESTIONS } = require('./sec_18_21');

const ALL_QUESTIONS = [
  ...SEC_1_5_QUESTIONS,
  ...SEC_6_9_QUESTIONS,
  ...SEC_10_13_QUESTIONS,
  ...SEC_14_17_QUESTIONS,
  ...SEC_18_21_QUESTIONS
];

async function build() {
  console.log(`\n========================================`);
  console.log(`🚀 JSÖyrən Sual Bankı Generatoru (Build)`);
  console.log(`========================================\n`);

  console.log(`Ümumi toplanan sual sayı: ${ALL_QUESTIONS.length}`);
  if (ALL_QUESTIONS.length !== 315) {
    throw new Error(`XƏTA: 315 sual gözlənilirdi, lakin ${ALL_QUESTIONS.length} sual tapıldı!`);
  }

  // 1. Bölmələr və Mərhələlərin Doğrulanması
  const STAGE_MAP = {
    1: 1, 2: 1, 3: 1, 4: 1, 5: 1,
    6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2,
    14: 3, 15: 3, 16: 3, 17: 3,
    18: 4, 19: 4,
    20: 5, 21: 5
  };

  const EXPECTED_DIFFICULTIES = [
    'ASAN', 'ASAN', 'ASAN',
    'ORTA-ASAN', 'ORTA-ASAN', 'ORTA-ASAN', 'ORTA-ASAN',
    'ORTA-ÇƏTİN', 'ORTA-ÇƏTİN', 'ORTA-ÇƏTİN',
    'ÇƏTİN', 'ÇƏTİN', 'ÇƏTİN', 'ÇƏTİN',
    'EKSPERT'
  ];

  for (let b = 1; b <= 21; b++) {
    const secQuestions = ALL_QUESTIONS.filter(q => q.bolmeId === b);
    if (secQuestions.length !== 15) {
      throw new Error(`XƏTA: Bölmə ${b}-də 15 sual olmalıdır, amma ${secQuestions.length} sual var!`);
    }

    secQuestions.forEach((q, idx) => {
      const qNum = String(idx + 1).padStart(2, '0');
      const expectedId = `exam-sec${b}-${qNum}`;
      if (q.id !== expectedId) {
        throw new Error(`XƏTA: Sual ID uyğunsuzluğu! Gözlənilən: ${expectedId}, Faktiki: ${q.id}`);
      }

      const expectedStage = STAGE_MAP[b];
      if (q.merheleId !== expectedStage) {
        throw new Error(`XƏTA: ${q.id} sualında merheleId uyğunsuzluğu! Gözlənilən: ${expectedStage}, Faktiki: ${q.merheleId}`);
      }

      const expectedDiff = EXPECTED_DIFFICULTIES[idx];
      if (q.cetinlik !== expectedDiff) {
        throw new Error(`XƏTA: ${q.id} sualında çətinlik uyğunsuzluğu! Gözlənilən: ${expectedDiff}, Faktiki: ${q.cetinlik}`);
      }

      if (!Array.isArray(q.ipuclari) || q.ipuclari.length !== 3) {
        throw new Error(`XƏTA: ${q.id} sualında tam 3 ipucu olmalıdır!`);
      }

      if (!q.basliq || !q.serif || !q.gozlenilenCixis || !q.starterCode || !q.solutionCode || !q.teslimIzahi) {
        throw new Error(`XƏTA: ${q.id} sualında məcburi sahələrdən biri boşdur!`);
      }
    });
  }

  console.log(`✅ Bütün 21 Bölmə üzrə Şablon və Riyazi Paylanma 100% Doğrulandı:`);
  console.log(`   - 21 Bölmə x 15 Sual = 315 Sual`);
  console.log(`   - Hər bölmədə: 3 ASAN, 4 ORTA-ASAN, 3 ORTA-ÇƏTİN, 4 ÇƏTİN, 1 EKSPERT`);
  console.log(`   - Hər sualda: Dəqiq 3 İpucu, Aydın İzah və Anti-Cheat Starter Kodu\n`);

  // 2. data_exam_questions.js Faylının Yazılması
  const outputPath = path.resolve(__dirname, '..', 'data_exam_questions.js');

  const fileContent = `/**
 * JSÖyrən - İmtahan Mərkəzi Tam Sual Bankı (Standardized Question Repository)
 * Cəmi 21 Bölmə, 5 Mərhələ, Dəqiq 315 Standartlaşdırılmış Sual (Hər bölmədə 15 sual)
 * Riyazi Çətinlik Paylanması: 3 ASAN, 4 ORTA-ASAN, 3 ORTA-ÇƏTİN, 4 ÇƏTİN, 1 EKSPERT
 * 100% Azərbaycan Dilində, Hərtərəfli Təhsil Konteksti və Anti-Cheat Sxemi
 */

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.EXAM_QUESTIONS_DATA = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    return ${JSON.stringify(ALL_QUESTIONS, null, 2)};
}));
`;

  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log(`✅ data_exam_questions.js faylı uğurla yaradıldı: ${outputPath}`);
  console.log(`   Fayl həcmi: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB\n`);
}

build().catch(err => {
  console.error('BUILD XƏTASI:', err);
  process.exit(1);
});
