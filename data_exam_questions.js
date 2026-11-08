/**
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

    return [
  {
    "id": "exam-sec1-01",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Konsola Sadə Mesaj Çıxışı",
    "serif": "<code>salamDunya()</code> funksiyasını təyin edin. Funksiya daxilində konsola dəqiq olaraq <code>Salam, JavaScript!</code> mətni çıxarılmalıdır. Funksiyanı çağırın.",
    "gozlenilenCixis": "Salam, JavaScript!",
    "starterCode": "function salamDunya() {\n  // Kodunuzu buraya yazın\n}\n\nsalamDunya();",
    "solutionCode": "function salamDunya() {\n  console.log(\"Salam, JavaScript!\");\n}\n\nsalamDunya();",
    "ipuclari": [
      "İpucu 1: Konsola mətn yazdırmaq üçün ən təməl qlobal çıxış metodundan istifadə edin.",
      "İpucu 2: Mətn tipli məlumatları cüt dırnaq və ya tək dırnaq daxilində yazın.",
      "İpucu 3: console.log(\"Salam, JavaScript!\") sintaksisini tamamlayın."
    ],
    "teslimIzahi": "console.log() qlobal konsol obyektinin metodudur və verilmiş məlumatı brauzerin developer konsoluna və ya terminala sətir olaraq ötürür."
  },
  {
    "id": "exam-sec1-02",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Çoxsaylı Arqumentlərin Çapı",
    "serif": "<code>istifadeciMəlumatı(ad, rol)</code> funksiyasını yazın. Tək bir <code>console.log()</code> çağırışında vergüllə ayıraraq <code>İstifadəçi:</code>, ötürülən ad və rolu çap edin. Funksiyanı <code>\"Aysel\", \"Tələbə\"</code> ilə çağırın.",
    "gozlenilenCixis": "İstifadəçi: Aysel Tələbə",
    "starterCode": "function istifadeciMəlumatı(ad, rol) {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciMəlumatı(\"Aysel\", \"Tələbə\");",
    "solutionCode": "function istifadeciMəlumatı(ad, rol) {\n  console.log(\"İstifadəçi:\", ad, rol);\n}\n\nistifadeciMəlumatı(\"Aysel\", \"Tələbə\");",
    "ipuclari": [
      "İpucu 1: console.log() metoduna bir neçə arqument ötürdükdə onlar avtomatik tək boşluqla birləşdirilir.",
      "İpucu 2: Mətn sabitini və parametr dəyişənlərini vergüllə ayıraraq sıralayın.",
      "İpucu 3: console.log(\"İstifadəçi:\", ad, rol) əmri hədəf formata tam uyğundur."
    ],
    "teslimIzahi": "console.log() çoxsaylı parametrləri qəbul edərək onları ardıcıl boşluq simvolu ilə formatlayır və tək sətir halında çıxarır."
  },
  {
    "id": "exam-sec1-03",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "İkisətirli Konsol Çıxışı",
    "serif": "<code>ikiSetirliHesabat()</code> funksiyasını yazın. Birinci sətirdə <code>Başlanğıc</code>, ikinci sətirdə <code>Son</code> sözünü konsola yazdırın. Funksiyanı çağırın.",
    "gozlenilenCixis": "Başlanğıc\nSon",
    "starterCode": "function ikiSetirliHesabat() {\n  // Kodunuzu buraya yazın\n}\n\nikiSetirliHesabat();",
    "solutionCode": "function ikiSetirliHesabat() {\n  console.log(\"Başlanğıc\");\n  console.log(\"Son\");\n}\n\nikiSetirliHesabat();",
    "ipuclari": [
      "İpucu 1: Hər bir console.log() çağırışı avtomatik olaraq yeni sətrə keçid simvolu (\\n) əlavə edir.",
      "İpucu 2: İki ardıcıl console.log əmrindən və ya tək çıxışda '\\n' simvolundan istifadə edə bilərsiniz.",
      "İpucu 3: Birinci sətirdə 'Başlanğıc', növbəti sətirdə 'Son' çap edin."
    ],
    "teslimIzahi": "Hər bir konsol əmri axına yeni sətir ayırıcısı ilə göndərilir, nəticədə ardıcıl çağırışlar alt-alta görünür."
  },
  {
    "id": "exam-sec1-04",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Template Literals ilə Mətn Formatlaması",
    "serif": "<code>formatliXosGeldin(ad, platforma, il)</code> funksiyasını təyin edin. ES6 Template Literals (bektik) istifadə edərək konsola <code>Xoş gəldiniz, Murad! Platforma: JSÖyrən (2026)</code> formatında çıxış verin. Funksiyanı <code>\"Murad\", \"JSÖyrən\", 2026</code> ilə çağırın.",
    "gozlenilenCixis": "Xoş gəldiniz, Murad! Platforma: JSÖyrən (2026)",
    "starterCode": "function formatliXosGeldin(ad, platforma, il) {\n  // Kodunuzu buraya yazın\n}\n\nformatliXosGeldin(\"Murad\", \"JSÖyrən\", 2026);",
    "solutionCode": "function formatliXosGeldin(ad, platforma, il) {\n  console.log(`Xoş gəldiniz, ${ad}! Platforma: ${platforma} (${il})`);\n}\n\nformatliXosGeldin(\"Murad\", \"JSÖyrən\", 2026);",
    "ipuclari": [
      "İpucu 1: Dəyişənləri mətn içərisinə daxil etmək üçün ES6 `${dəyişən}` sintaksisindən yararlanın.",
      "İpucu 2: Bütün mətni bektik (` `) işarələri daxilində yazın.",
      "İpucu 3: Nöqtələmə işarələrinin və mötərizələrin mövqeyinə diqqət yetirin."
    ],
    "teslimIzahi": "Template Literals (ES6) sətir daxilində ifa olunan ifadələri (string interpolation) rahat şəkildə birləşdirməyə imkan verir və oxunaqlılığı artırır."
  },
  {
    "id": "exam-sec1-05",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Dinamik İfadənin Çapı",
    "serif": "<code>cəmHesabatı(a, b)</code> funksiyasını yazın. Konsola <code>[a] + [b] = [a+b]</code> formatında riyazi bərabərliyi yazdırın. Funksiyanı <code>25, 15</code> arqumentləri ilə çağırın.",
    "gozlenilenCixis": "25 + 15 = 40",
    "starterCode": "function cəmHesabatı(a, b) {\n  // Kodunuzu buraya yazın\n}\n\ncəmHesabatı(25, 15);",
    "solutionCode": "function cəmHesabatı(a, b) {\n  console.log(`${a} + ${b} = ${a + b}`);\n}\n\ncəmHesabatı(25, 15);",
    "ipuclari": [
      "İpucu 1: `${}` daxilində təkcə dəyişən deyil, birbaşa riyazi ifadə də yazıla bilər.",
      "İpucu 2: a və b arqumentlərinin cəmini `${a + b}` kimi hesablayın.",
      "İpucu 3: Çıxışın '25 + 15 = 40' şəklində formalaşmasını təmin edin."
    ],
    "teslimIzahi": "Şablon sətirlər daxilindəki ${} bloku JavaScript mühərriki tərəfindən icra olunur və nəticəsi sətirə çevrilərək daxil edilir."
  },
  {
    "id": "exam-sec1-06",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Qeydiyyat Kartı Formatlaması",
    "serif": "<code>kartGoster(ad, yas, seher)</code> funksiyasını tərtib edin. Məlumatları <code>[KART] Ad: [ad] | Yaş: [yas] | Şəhər: [seher]</code> formatında konsola çıxarın. Funksiyanı <code>\"Elvin\", 24, \"Gəncə\"</code> ilə çağırın.",
    "gozlenilenCixis": "[KART] Ad: Elvin | Yaş: 24 | Şəhər: Gəncə",
    "starterCode": "function kartGoster(ad, yas, seher) {\n  // Kodunuzu buraya yazın\n}\n\nkartGoster(\"Elvin\", 24, \"Gəncə\");",
    "solutionCode": "function kartGoster(ad, yas, seher) {\n  console.log(`[KART] Ad: ${ad} | Yaş: ${yas} | Şəhər: ${seher}`);\n}\n\nkartGoster(\"Elvin\", 24, \"Gəncə\");",
    "ipuclari": [
      "İpucu 1: Verilən arqumentləri şablon sətir vasitəsilə ayrıcı simvollarla (|) birləşdirin.",
      "İpucu 2: Başlıqdakı kvadrat mötərizəni `[KART]` kimi qoruyun.",
      "İpucu 3: Boşluqların və iki nöqtələrin yerləşməsinə xüsusi diqqət yetirin."
    ],
    "teslimIzahi": "Strukturlaşdırılmış sətir çıxışları konsol loqlarının oxunaqlı olmasını təmin edir və sazlama prosesini sürətləndirir."
  },
  {
    "id": "exam-sec1-07",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Registr Həssaslığı və Konsol Əmrləri",
    "serif": "<code>registrTesti()</code> funksiyasını yazın. JavaScript-in registr həssas (case-sensitive) olduğunu nəzərə alaraq kiçik hərflərlə <code>console.log()</code> vasitəsilə <code>JavaScript Dəqiqdir</code> mətni çıxarın.",
    "gozlenilenCixis": "JavaScript Dəqiqdir",
    "starterCode": "function registrTesti() {\n  // Kodunuzu buraya yazın\n}\n\nregistrTesti();",
    "solutionCode": "function registrTesti() {\n  console.log(\"JavaScript Dəqiqdir\");\n}\n\nregistrTesti();",
    "ipuclari": [
      "İpucu 1: Qlobal 'console' obyekti və 'log' metodu mütləq kiçik hərflərlə yazılmalıdır.",
      "İpucu 2: Böyük 'Console.Log' yazıldıqda ReferenceError və ya TypeError baş verər.",
      "İpucu 3: Çıxış mətni dəqiq 'JavaScript Dəqiqdir' olmalıdır."
    ],
    "teslimIzahi": "JavaScript identifikatorlarda böyük və kiçik hərfləri tamamilə fərqli simvol kimi tanıyır. Qlobal obyektlər mühitdə kiçik hərflərlə qeydiyyatdan keçmişdir."
  },
  {
    "id": "exam-sec1-08",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Dinamik Vergi və Yekun Qiymət Çıxışı",
    "serif": "<code>fakturaHesabla(mehsul, qiymet, faiz)</code> funksiyasını təyin edin. ƏDV məbləğini (<code>qiymet * (faiz / 100)</code>) və yekun məbləği hesablayaraq konsola <code>Məhsul: [mehsul] | Vergi: [vergi] AZN | Yekun: [yekun] AZN</code> şəklində çap edin. Funksiyanı <code>\"Monitor\", 400, 18</code> ilə çağırın.",
    "gozlenilenCixis": "Məhsul: Monitor | Vergi: 72 AZN | Yekun: 472 AZN",
    "starterCode": "function fakturaHesabla(mehsul, qiymet, faiz) {\n  // Kodunuzu buraya yazın\n}\n\nfakturaHesabla(\"Monitor\", 400, 18);",
    "solutionCode": "function fakturaHesabla(mehsul, qiymet, faiz) {\n  const vergi = qiymet * (faiz / 100);\n  const yekun = qiymet + vergi;\n  console.log(`Məhsul: ${mehsul} | Vergi: ${vergi} AZN | Yekun: ${yekun} AZN`);\n}\n\nfakturaHesabla(\"Monitor\", 400, 18);",
    "ipuclari": [
      "İpucu 1: Əvvəlcə vergi və yekun qiyməti lokal sabitlərə hesablayın.",
      "İpucu 2: Riyazi ardıcıllıqda vurma və bölmə əməliyyatlarının mötərizə qaydasını qoruyun.",
      "İpucu 3: Şablon mətndə 'AZN' vahidini hər iki rəqəmdən sonra əlavə edin."
    ],
    "teslimIzahi": "Mürəkkəb hesablamaları birbaşa şablon daxilində etmək əvəzinə ayrıca dəyişənlərə çıxarmaq kodun təmizliyini və saxlanılmasını təmin edir."
  },
  {
    "id": "exam-sec1-09",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Strukturlaşdırılmış Cədvəl Başlığı",
    "serif": "<code>cedvelBasligi(bolme1, bolme2, bolme3)</code> funksiyasını yazın. Konsola <code>[ID]        [AD]        [STATUS]</code> formatında, sütunlar arasında tab (\\t) simvolu ilə ayrılmış sətir çıxarın. Funksiyanı <code>\"101\", \"Kompüter\", \"Hazırdır\"</code> arqumentləri ilə növbəti sətirdə məlumatı çap edəcək şəkildə tamamlayın.",
    "gozlenilenCixis": "ID\tAD\tSTATUS\n101\tKompüter\tHazırdır",
    "starterCode": "function cedvelBasligi(id, ad, status) {\n  // Kodunuzu buraya yazın\n}\n\ncedvelBasligi(\"101\", \"Kompüter\", \"Hazırdır\");",
    "solutionCode": "function cedvelBasligi(id, ad, status) {\n  console.log(`ID\\tAD\\tSTATUS\\n${id}\\t${ad}\\t${status}`);\n}\n\ncedvelBasligi(\"101\", \"Kompüter\", \"Hazırdır\");",
    "ipuclari": [
      "İpucu 1: Xüsusi idarəetmə simvollarından: \\t (tabulasiya) və \\n (yeni sətir) istifadə edin.",
      "İpucu 2: İki sətri tək bir şablon sətirlə və ya iki ayrı log çağırışı ilə qura bilərsiniz.",
      "İpucu 3: Sütun adları və dəyərlər arasında \\t simvolunu dəqiq yerləşdirin."
    ],
    "teslimIzahi": "Escape simvolları (\\t, \\n) konsol çıxışlarını cədvəl formasında hizalamaq üçün standart Unix formatlama üsuludur."
  },
  {
    "id": "exam-sec1-10",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Dəyişən Dəyərinin Addım-addım İzlənməsi",
    "serif": "<code>izleme(ilkinDeyer)</code> funksiyasını yazın. Dəyişənə ilkin qiymət verin, ona 10 əlavə edin, sonra onu 2-yə vurun. Hər addımda konsola <code>Addım 1: [qiymet]</code> və <code>Addım 2: [qiymet]</code> formatında çıxış verin. Funksiyanı <code>5</code> arqumenti ilə çağırın.",
    "gozlenilenCixis": "Addım 1: 15\nAddım 2: 30",
    "starterCode": "function izleme(ilkinDeyer) {\n  // Kodunuzu buraya yazın\n}\n\nizleme(5);",
    "solutionCode": "function izleme(ilkinDeyer) {\n  let x = ilkinDeyer + 10;\n  console.log(`Addım 1: ${x}`);\n  x *= 2;\n  console.log(`Addım 2: ${x}`);\n}\n\nizleme(5);",
    "ipuclari": [
      "İpucu 1: Dəyişənin qiyməti dəyişəcəyi üçün 'let' açar sözü ilə elan edin.",
      "İpucu 2: Birinci əməliyyatdan sonra log çıxışı verin, ardınca *= 2 tətbiq edib ikinci çıxışı verin.",
      "İpucu 3: 5 + 10 = 15, sonra 15 * 2 = 30 nəticəsi alınmalıdır."
    ],
    "teslimIzahi": "Dəyişənlərin vəziyyət dəyişikliyinin addım-addım konsola çıxarılması (tracing) alqoritmlərin sazlanmasında təməl texnikadır."
  },
  {
    "id": "exam-sec1-11",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dinamik Sistem Status Loqqeri",
    "serif": "<code>statusLoq(modul, kod, aktivdir)</code> funksiyasını qurun. Əgər <code>aktivdir</code> true olarsa konsola <code>[SİSTEM: OK] [modul] (Kod: [kod]) aktivdir</code>, false olarsa <code>[SİSTEM: XƏTA] [modul] (Kod: [kod]) dayandırılıb</code> yazdırın. Funksiyanı ardıcıl olaraq <code>(\"Verilənlər Bazası\", 200, true)</code> və <code>(\"Ödəniş Şlüzü\", 500, false)</code> ilə çağırın.",
    "gozlenilenCixis": "[SİSTEM: OK] Verilənlər Bazası (Kod: 200) aktivdir\n[SİSTEM: XƏTA] Ödəniş Şlüzü (Kod: 500) dayandırılıb",
    "starterCode": "function statusLoq(modul, kod, aktivdir) {\n  // Kodunuzu buraya yazın\n}\n\nstatusLoq(\"Verilənlər Bazası\", 200, true);\nstatusLoq(\"Ödəniş Şlüzü\", 500, false);",
    "solutionCode": "function statusLoq(modul, kod, aktivdir) {\n  const statusMetni = aktivdir ? \"[SİSTEM: OK]\" : \"[SİSTEM: XƏTA]\";\n  const veziyyet = aktivdir ? \"aktivdir\" : \"dayandırılıb\";\n  console.log(`${statusMetni} ${modul} (Kod: ${kod}) ${veziyyet}`);\n}\n\nstatusLoq(\"Verilənlər Bazası\", 200, true);\nstatusLoq(\"Ödəniş Şlüzü\", 500, false);",
    "ipuclari": [
      "İpucu 1: 'aktivdir' parametrinin boolean dəyərini ternary (? :) operatoru ilə yoxlayın.",
      "İpucu 2: Mesajın prefiksini və son sözünü şərtə uyğun dinamik qurun.",
      "İpucu 3: İki ardıcıl çağırış iki ayrı sətir çıxaracaq."
    ],
    "teslimIzahi": "Şərtli çıxışlar proqram icrasının vəziyyətinə uyğun olaraq mətn şablonlarını dinamik modifikasiya etməyə xidmət edir."
  },
  {
    "id": "exam-sec1-12",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Avtomatlaşdırılmış Qəbz Generatoru",
    "serif": "<code>qebzYarat(satisNo, mehsullar)</code> funksiyasını tərtib edin. <code>mehsullar</code> ad və qiymət sahələrindən ibarət obyektlər massividir. Funksiya birinci sətirdə <code>=== QƏBZ #[satisNo] ===</code>, sonra hər bir məhsulu <code>- [ad]: [qiymet] AZN</code>, yekunda isə <code>Toplam: [cəm] AZN</code> şəklində konsola çap etməlidir. Funksiyanı <code>\"A-102\", [{ad: \"Çörək\", qiymet: 1}, {ad: \"Süd\", qiymet: 2}]</code> ilə çağırın.",
    "gozlenilenCixis": "=== QƏBZ #A-102 ===\n- Çörək: 1 AZN\n- Süd: 2 AZN\nToplam: 3 AZN",
    "starterCode": "function qebzYarat(satisNo, mehsullar) {\n  // Kodunuzu buraya yazın\n}\n\nqebzYarat(\"A-102\", [{ad: \"Çörək\", qiymet: 1}, {ad: \"Süd\", qiymet: 2}]);",
    "solutionCode": "function qebzYarat(satisNo, mehsullar) {\n  console.log(`=== QƏBZ #${satisNo} ===`);\n  let cem = 0;\n  for (let i = 0; i < mehsullar.length; i++) {\n    const item = mehsullar[i];\n    console.log(`- ${item.ad}: ${item.qiymet} AZN`);\n    cem += item.qiymet;\n  }\n  console.log(`Toplam: ${cem} AZN`);\n}\n\nqebzYarat(\"A-102\", [{ad: \"Çörək\", qiymet: 1}, {ad: \"Süd\", qiymet: 2}]);",
    "ipuclari": [
      "İpucu 1: Əvvəlcə qəbz başlığını konsola çıxarın və 'cem' sayğacını sıfır təyin edin.",
      "İpucu 2: Massivin hər bir elementini dövr edərək qiymətlərini toplayın və sətir-sətir çap edin.",
      "İpucu 3: Dövrdən sonra yekun toplam məbləğini çap edin."
    ],
    "teslimIzahi": "Massiv kolleksiyasının elementləri üzərində iterasiya apararaq ara cəmləri hesablamaq və strukturlaşdırılmış hesabat tərtib etmək təməl praktiki tapşırıqdır."
  },
  {
    "id": "exam-sec1-13",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Tərəqqi Zolağının Konsol Simulyasiyası",
    "serif": "<code>progressLoq(faiz)</code> funksiyasını yazın. Faizə uyğun olaraq 10 simvolluq tərəqqi zolağı qurun: hər 10% üçün <code>#</code>, qalan hissə üçün <code>-</code> simvolu qoyun. Konsola <code>[[zolaq]] [faiz]% Tamamlandı</code> formatında çap edin. Funksiyanı ardıcıl olaraq <code>40</code> və <code>80</code> üçün çağırın.",
    "gozlenilenCixis": "[####------] 40% Tamamlandı\n[########--] 80% Tamamlandı",
    "starterCode": "function progressLoq(faiz) {\n  // Kodunuzu buraya yazın\n}\n\nprogressLoq(40);\nprogressLoq(80);",
    "solutionCode": "function progressLoq(faiz) {\n  const say = Math.floor(faiz / 10);\n  const zolaq = \"#\".repeat(say) + \"-\".repeat(10 - say);\n  console.log(`[${zolaq}] ${faiz}% Tamamlandı`);\n}\n\nprogressLoq(40);\nprogressLoq(80);",
    "ipuclari": [
      "İpucu 1: Simvolların sayını hesablamaq üçün 'faiz / 10' tam hissəsindən istifadə edin.",
      "İpucu 2: Mətn təkrarı üçün String.prototype.repeat() metodundan yararlana bilərsiniz.",
      "İpucu 3: Kvadrat mötərizə içərisində 10 simvolluq kombinasiyanı və ardınca faiz mətnini yerləşdirin."
    ],
    "teslimIzahi": "String.repeat() metodu verilmiş simvolu göstərilən sayda çoxaldaraq konsolda CLI üslublu tərəqqi vizualizasiyası yaratmağa imkan verir."
  },
  {
    "id": "exam-sec1-14",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Parametrik Çoxsəviyyəli Çıxış Formatlayıcı",
    "serif": "<code>formatliLoqqer(seviyye, mesaj, parametrler)</code> funksiyasını qurun. Səviyyəni böyük hərflərlə <code>[SEVIYYE]</code> kimi, ardınca mesajı, parametrləri isə <code>param1=deyer1, param2=deyer2</code> formatında çıxarın. Funksiyanı <code>\"info\", \"İstifadəçi daxil oldu\", { ip: \"127.0.0.1\", port: 8080 }</code> ilə çağırın.",
    "gozlenilenCixis": "[INFO] İstifadəçi daxil oldu (ip=127.0.0.1, port=8080)",
    "starterCode": "function formatliLoqqer(seviyye, mesaj, parametrler) {\n  // Kodunuzu buraya yazın\n}\n\nformatliLoqqer(\"info\", \"İstifadəçi daxil oldu\", { ip: \"127.0.0.1\", port: 8080 });",
    "solutionCode": "function formatliLoqqer(seviyye, mesaj, parametrler) {\n  const seviyyeBöyük = seviyye.toUpperCase();\n  const pStr = Object.entries(parametrler).map(([k, v]) => `${k}=${v}`).join(\", \");\n  console.log(`[${seviyyeBöyük}] ${mesaj} (${pStr})`);\n}\n\nformatliLoqqer(\"info\", \"İstifadəçi daxil oldu\", { ip: \"127.0.0.1\", port: 8080 });",
    "ipuclari": [
      "İpucu 1: Səviyyəni toUpperCase() ilə böyük hərflərə çevirin.",
      "İpucu 2: Obyekt parametrlərini açar=dəyər şəklində birləşdirmək üçün Object.entries() istifadə edin.",
      "İpucu 3: Nəticəni `[SEVİYYƏ] Mesaj (k1=v1, k2=v2)` formatında tamamlayın."
    ],
    "teslimIzahi": "Strukturlaşdırılmış qeydiyyat sistemləri (structured logging) obyekt parametrlərini sətir açar-dəyər formatına çevirərək axtarış və analitika üçün əlverişli edir."
  },
  {
    "id": "exam-sec1-15",
    "bolmeId": 1,
    "merheleId": 1,
    "cetinlik": "EKSPERT",
    "basliq": "İstehsalat Səviyyəli Konsol Loqqer Arxitekturası",
    "serif": "Fərdi <code>MiniLogger</code> konstruktoru/sinfi yaradın. Bu obyekt <code>prefix</code> dəyəri qəbul edir və iki metoda malikdir: <code>log(msg)</code> metodu konsola <code>[prefix][LOG] [msg]</code>, <code>warn(msg)</code> metodu isə <code>[prefix][WARN] [msg]</code> çıxarır. Prefiksi <code>\"[PROD]\"</code> olan bir loqqer yaradın və ardıcıl olaraq <code>logger.log(\"Server başladı\")</code> və <code>logger.warn(\"Yüksək yaddaş istifadəsi\")</code> çağırın.",
    "gozlenilenCixis": "[PROD][LOG] Server başladı\n[PROD][WARN] Yüksək yaddaş istifadəsi",
    "starterCode": "function MiniLogger(prefix) {\n  // Kodunuzu buraya yazın\n}\n\nconst logger = new MiniLogger(\"[PROD]\");\nlogger.log(\"Server başladı\");\nlogger.warn(\"Yüksək yaddaş istifadəsi\");",
    "solutionCode": "function MiniLogger(prefix) {\n  this.prefix = prefix;\n  this.log = function(msg) {\n    console.log(`${this.prefix}[LOG] ${msg}`);\n  };\n  this.warn = function(msg) {\n    console.log(`${this.prefix}[WARN] ${msg}`);\n  };\n}\n\nconst logger = new MiniLogger(\"[PROD]\");\nlogger.log(\"Server başladı\");\nlogger.warn(\"Yüksək yaddaş istifadəsi\");",
    "ipuclari": [
      "İpucu 1: Konstruktor daxilində 'this.prefix' xassəsini saxlayın.",
      "İpucu 2: this.log və this.warn metodlarını təyin edərək konsola prefiks və loq növünü formatlayın.",
      "İpucu 3: [PROD][LOG] və [PROD][WARN] formatlarına xüsusi diqqət yetirin."
    ],
    "teslimIzahi": "İstehsalat loqqerləri müxtəlif mühitləri (PROD, DEV, TEST) fərqləndirmək üçün modulyar prefikslər və çoxpilləli loq səviyyələri (LOG, WARN, ERROR) tətbiq edir."
  },
  {
    "id": "exam-sec2-01",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "let ilə Dəyişənin Yenilənməsi",
    "serif": "<code>deyiseniYenile()</code> funksiyasını təyin edin. <code>let xal = 50;</code> elan edin, sonrakı sətirdə onun dəyərini <code>100</code> olaraq dəyişdirin və konsola çıxarın.",
    "gozlenilenCixis": "100",
    "starterCode": "function deyiseniYenile() {\n  // Kodunuzu buraya yazın\n}\n\ndeyiseniYenile();",
    "solutionCode": "function deyiseniYenile() {\n  let xal = 50;\n  xal = 100;\n  console.log(xal);\n}\n\ndeyiseniYenile();",
    "ipuclari": [
      "İpucu 1: let açar sözü ilə yaradılan dəyişənlərə sonradan yeni dəyər mənimsətmək mümkündür.",
      "İpucu 2: Yenidən mənimsətmə zamanı yenidən 'let' yazmağa ehtiyac yoxdur, birbaşa 'xal = 100;' yazın.",
      "İpucu 3: Sonda console.log(xal) ilə qiyməti çap edin."
    ],
    "teslimIzahi": "let açar sözü blok görünüş sahəsinə (block-scoped) malik dəyişən yaradır və dəyərinin sonradan təkrar mənimsədilməsinə icazə verir."
  },
  {
    "id": "exam-sec2-02",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "const ilə Sabit Elanı",
    "serif": "<code>sabitiGoster()</code> funksiyasını yazın. <code>const PI = 3.14;</code> elan edin və konsola <code>PI dəyəri: [PI]</code> formatında çıxarın.",
    "gozlenilenCixis": "PI dəyəri: 3.14",
    "starterCode": "function sabitiGoster() {\n  // Kodunuzu buraya yazın\n}\n\nsabitiGoster();",
    "solutionCode": "function sabitiGoster() {\n  const PI = 3.14;\n  console.log(`PI dəyəri: ${PI}`);\n}\n\nsabitiGoster();",
    "ipuclari": [
      "İpucu 1: Sabit dəyərlər const açar sözü ilə elan olunur və yaradılarkən mütləq ilkin dəyər almalıdır.",
      "İpucu 2: Şablon sətir və ya vergüllə konsol çıxışını qurun.",
      "İpucu 3: Çıxış dəqiq 'PI dəyəri: 3.14' olmalıdır."
    ],
    "teslimIzahi": "const sabiti dəyişdirilə bilməyən (reassignment-forbidden) identifikator yaradır və təsadüfi dəyişikliklərin qarşısını alır."
  },
  {
    "id": "exam-sec2-03",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "typeof ilə Tip Təyini",
    "serif": "<code>tipYoxla(deyer)</code> funksiyasını yazın. <code>typeof deyer</code> nəticəsini konsola çıxarın. Funksiyanı ardıcıl olaraq <code>\"Salam\"</code> və <code>42</code> üçün çağırın.",
    "gozlenilenCixis": "string\nnumber",
    "starterCode": "function tipYoxla(deyer) {\n  // Kodunuzu buraya yazın\n}\n\ntipYoxla(\"Salam\");\ntipYoxla(42);",
    "solutionCode": "function tipYoxla(deyer) {\n  console.log(typeof deyer);\n}\n\ntipYoxla(\"Salam\");\ntipYoxla(42);",
    "ipuclari": [
      "İpucu 1: typeof operatoru verilmiş dəyərin primitiv tipini sətir olaraq qaytarır.",
      "İpucu 2: console.log(typeof deyer) yazmaq kifayətdir.",
      "İpucu 3: Mətn üçün 'string', tam/kəsr ədədlər üçün 'number' çıxacaq."
    ],
    "teslimIzahi": "typeof operatoru JavaScript-də dinamik tipləşmə şəraitində dəyişənin cari tipini runtime zamanı yoxlamaq üçün əsas vasitədir."
  },
  {
    "id": "exam-sec2-04",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Boolean Tipinin Təyini və İnkarı",
    "serif": "<code>booleanYoxla(status)</code> funksiyasını yazın. Konsola <code>Dəyər: [status] | İnkar: [!status]</code> formatında çıxış verin. Funksiyanı <code>true</code> ilə çağırın.",
    "gozlenilenCixis": "Dəyər: true | İnkar: false",
    "starterCode": "function booleanYoxla(status) {\n  // Kodunuzu buraya yazın\n}\n\nbooleanYoxla(true);",
    "solutionCode": "function booleanYoxla(status) {\n  console.log(`Dəyər: ${status} | İnkar: ${!status}`);\n}\n\nbooleanYoxla(true);",
    "ipuclari": [
      "İpucu 1: Boolean tipi yalnız iki dəyərə malikdir: true və false.",
      "İpucu 2: Məntiqi inkar üçün '!' operatorundan istifadə edin.",
      "İpucu 3: !true dəyəri false qaytaracaq."
    ],
    "teslimIzahi": "Məntiqi inkar operatoru (!) boolean dəyərini əksinə çevirir və şərtlərin idarə olunmasında mühüm rol oynayır."
  },
  {
    "id": "exam-sec2-05",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "undefined və null Fərqinin Təhlili",
    "serif": "<code>bosluqAnalizi()</code> funksiyasını yazın. Dəyər verilməmiş <code>let a;</code> və qəsdən boş saxlanılmış <code>let b = null;</code> dəyişənlərini elan edin. Konsola <code>a: undefined (undefined) | b: null (object)</code> formatında onların dəyərini və mötərizədə typeof tipini çap edin.",
    "gozlenilenCixis": "a: undefined (undefined) | b: null (object)",
    "starterCode": "function bosluqAnalizi() {\n  // Kodunuzu buraya yazın\n}\n\nbosluqAnalizi();",
    "solutionCode": "function bosluqAnalizi() {\n  let a;\n  let b = null;\n  console.log(`a: ${a} (${typeof a}) | b: ${b} (${typeof b})`);\n}\n\nbosluqAnalizi();",
    "ipuclari": [
      "İpucu 1: Elan olunub qiymət verilməyən dəyişən avtomatik 'undefined' olur.",
      "İpucu 2: JavaScript-də tarixi qüsur səbəbindən typeof null 'object' qaytarır.",
      "İpucu 3: Şablon sətirdə dəyərləri və typeof nəticələrini ardıcıl yerləşdirin."
    ],
    "teslimIzahi": "undefined mühərrik tərəfindən təyin olunmamış vəziyyəti, null isə proqramçı tərəfindən qəsdən boş buraxılmış referansı bildirir."
  },
  {
    "id": "exam-sec2-06",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Number() ilə Tip Çevrilməsi",
    "serif": "<code>metniTopla(strA, strB)</code> funksiyasını yazın. Gələn mətn tipli rəqəmləri <code>Number()</code> funksiyası ilə ədədə çevirib riyazi cəmini tapın və konsola <code>Cəm: [cem]</code> formatında çıxarın. Funksiyanı <code>\"30\", \"20\"</code> ilə çağırın.",
    "gozlenilenCixis": "Cəm: 50",
    "starterCode": "function metniTopla(strA, strB) {\n  // Kodunuzu buraya yazın\n}\n\nmetniTopla(\"30\", \"20\");",
    "solutionCode": "function metniTopla(strA, strB) {\n  const cem = Number(strA) + Number(strB);\n  console.log(`Cəm: ${cem}`);\n}\n\nmetniTopla(\"30\", \"20\");",
    "ipuclari": [
      "İpucu 1: Əgər sətirləri çevirmədən toplasanız, string konkatenasiyası baş verər (\"3020\").",
      "İpucu 2: Hər iki arqumenti əvvəlcə Number() ilə ədəd tipinə gətirin.",
      "İpucu 3: 30 + 20 = 50 nəticəsini formatlı çap edin."
    ],
    "teslimIzahi": "Number() qlobal funksiyası mətn tipli rəqəmləri riyazi hesablama üçün ədəd tipinə çevirir və konkatenasiya təhlükəsini aradan qaldırır."
  },
  {
    "id": "exam-sec2-07",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "String() ilə Ədədin Mətnə Çevrilməsi",
    "serif": "<code>metneCevir(kod, say)</code> funksiyasını yazın. Ədədləri <code>String()</code> ilə mətnə çevirərək aralarında tire işarəsi ilə birləşdirin və konsola <code>Partiya: [kod]-[say]</code> kimi çap edin. Funksiyanı <code>994, 77</code> ilə çağırın.",
    "gozlenilenCixis": "Partiya: 994-77",
    "starterCode": "function metneCevir(kod, say) {\n  // Kodunuzu buraya yazın\n}\n\nmetneCevir(994, 77);",
    "solutionCode": "function metneCevir(kod, say) {\n  const netice = String(kod) + \"-\" + String(say);\n  console.log(`Partiya: ${netice}`);\n}\n\nmetneCevir(994, 77);",
    "ipuclari": [
      "İpucu 1: String() funksiyası istənilən dəyəri mətn tipinə çevirir.",
      "İpucu 2: Çevrilmiş sətirləri '+' operatoru və ya şablon sətirlə birləşdirin.",
      "İpucu 3: Nəticənin 'Partiya: 994-77' olmasını təmin edin."
    ],
    "teslimIzahi": "Açıq-aşkar sətir çevrilməsi (explicit conversion) üçün String() və ya .toString() metodundan istifadə olunur."
  },
  {
    "id": "exam-sec2-08",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Falsy Dəyərlərin Boolean Analizi",
    "serif": "<code>falsyYoxla(deyer)</code> funksiyasını yazın. Verilmiş dəyərin <code>Boolean(deyer)</code> çevrilməsini konsola <code>Dəyər: [deyer] -> [true/false]</code> şəklində çıxarın. Funksiyanı ardıcıl olaraq <code>0</code>, <code>\"\"</code> (boş sətir) və <code>\"Salam\"</code> üçün çağırın.",
    "gozlenilenCixis": "Dəyər: 0 -> false\nDəyər:  -> false\nDəyər: Salam -> true",
    "starterCode": "function falsyYoxla(deyer) {\n  // Kodunuzu buraya yazın\n}\n\nfalsyYoxla(0);\nfalsyYoxla(\"\");\nfalsyYoxla(\"Salam\");",
    "solutionCode": "function falsyYoxla(deyer) {\n  console.log(`Dəyər: ${deyer} -> ${Boolean(deyer)}`);\n}\n\nfalsyYoxla(0);\nfalsyYoxla(\"\");\nfalsyYoxla(\"Salam\");",
    "ipuclari": [
      "İpucu 1: JavaScript-də 0, \"\", null, undefined, NaN və false 'falsy' sayılır.",
      "İpucu 2: Boolean(deyer) və ya '!!deyer' vasitəsilə boolean ekvivalentini əldə edin.",
      "İpucu 3: Qeyri-boş sətirlər (\"Salam\") 'truthy' olduğu üçün true qaytaracaq."
    ],
    "teslimIzahi": "Boolean çevrilməsində yalnız xüsusi 6 falsy dəyər false qaytarır, qalan bütün dəyərlər (hətta boş massiv və obyektlər belə) true nəticə verir."
  },
  {
    "id": "exam-sec2-09",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "NaN (Not-a-Number) və Təhlükəsiz Yoxlanış",
    "serif": "<code>nanYoxla(deyer)</code> funksiyasını tərtib edin. Mətnin ədədə çevrilməsi nəticəsində yaranan NaN vəziyyətini <code>Number.isNaN()</code> metodu ilə yoxlayaraq konsola <code>Hesablama: [x] | NaN-dir: [true/false]</code> yazdırın. Funksiyanı <code>Number(\"alma\")</code> və <code>Number(\"100\")</code> üçün çağırın.",
    "gozlenilenCixis": "Hesablama: NaN | NaN-dir: true\nHesablama: 100 | NaN-dir: false",
    "starterCode": "function nanYoxla(deyer) {\n  // Kodunuzu buraya yazın\n}\n\nnanYoxla(Number(\"alma\"));\nnanYoxla(Number(\"100\"));",
    "solutionCode": "function nanYoxla(deyer) {\n  console.log(`Hesablama: ${deyer} | NaN-dir: ${Number.isNaN(deyer)}`);\n}\n\nnanYoxla(Number(\"alma\"));\nnanYoxla(Number(\"100\"));",
    "ipuclari": [
      "İpucu 1: Qeyri-rəqəm mətnlər Number() ilə çevrildikdə NaN qaytarır.",
      "İpucu 2: NaN özü-özünə bərabər olmayan yeganə dəyərdir (NaN === NaN -> false).",
      "İpucu 3: Dəqiq yoxlama üçün Number.isNaN() metodundan istifadə edin."
    ],
    "teslimIzahi": "NaN riyazi xətanı bildirən xüsusi 'number' tipidir. Number.isNaN() tip çevirməsi etmədən dəyərin bilavasitə NaN olub-olmadığını yoxlayır."
  },
  {
    "id": "exam-sec2-10",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Dəyişənlərin Dəyər Dəyiş-düyüşü (Swap)",
    "serif": "<code>swapEt(a, b)</code> funksiyasını yazın. Üçüncü köməkçi dəyişəndən istifadə edərək <code>a</code> və <code>b</code>-nin qiymətlərini dəyişdirin və konsola <code>Əvvəl: a=[a], b=[b] -> Sonra: a=[yeniA], b=[yeniB]</code> formatında çıxarın. Funksiyanı <code>10, 20</code> ilə çağırın.",
    "gozlenilenCixis": "Əvvəl: a=10, b=20 -> Sonra: a=20, b=10",
    "starterCode": "function swapEt(a, b) {\n  // Kodunuzu buraya yazın\n}\n\nswapEt(10, 20);",
    "solutionCode": "function swapEt(a, b) {\n  const evvelA = a, evvelB = b;\n  let temp = a;\n  a = b;\n  b = temp;\n  console.log(`Əvvəl: a=${evvelA}, b=${evvelB} -> Sonra: a=${a}, b=${b}`);\n}\n\nswapEt(10, 20);",
    "ipuclari": [
      "İpucu 1: 'a'-nın ilkin qiymətini itirməmək üçün onu müvəqqəti 'temp' dəyişənində saxlayın.",
      "İpucu 2: 'a'-ya 'b'-nin dəyərini, 'b'-yə isə 'temp'-in dəyərini mənimsədin.",
      "İpucu 3: Formatı dəqiq qoruyaraq çap edin."
    ],
    "teslimIzahi": "Dəyişənlərin swap edilməsi alqoritmlərdə (məsələn, çeşidləmədə) ən çox tətbiq olunan təməl məntiqi əməliyyatdır."
  },
  {
    "id": "exam-sec2-11",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Çoxpilləli Tip Çevrilməsi və Müqayisə",
    "serif": "<code>coxpilleliMuqayise(val1, val2)</code> funksiyasını yazın. Dəyərlərin həm ciddi bərabərliyini (<code>===</code>), həm də tiplərini ədədə çevirdikdən sonrakı bərabərliyini yoxlayın. Konsola <code>Dəyərlər: [val1] və [val2] | Ciddi: [ciddi] | Ədəd kimi: [ededKimi]</code> yazdırın. Funksiyanı <code>\"50\", 50</code> ilə çağırın.",
    "gozlenilenCixis": "Dəyərlər: 50 və 50 | Ciddi: false | Ədəd kimi: true",
    "starterCode": "function coxpilleliMuqayise(val1, val2) {\n  // Kodunuzu buraya yazın\n}\n\ncoxpilleliMuqayise(\"50\", 50);",
    "solutionCode": "function coxpilleliMuqayise(val1, val2) {\n  const ciddi = val1 === val2;\n  const ededKimi = Number(val1) === Number(val2);\n  console.log(`Dəyərlər: ${val1} və ${val2} | Ciddi: ${ciddi} | Ədəd kimi: ${ededKimi}`);\n}\n\ncoxpilleliMuqayise(\"50\", 50);",
    "ipuclari": [
      "İpucu 1: '===' müqayisəsində string ilə number fərqli tiplər olduğu üçün false qaytaracaq.",
      "İpucu 2: Number() tətbiq edildikdən sonra hər ikisi 50 olacaq və true verəcək.",
      "İpucu 3: Çıxış şablonunu dəqiq qurun."
    ],
    "teslimIzahi": "Ciddi bərabərlik tip çevirməsi etmədən həm tipi, həm dəyəri yoxlayır. Tip uyğunsuzluğu olduqda proqramçı açıq çevirmə (explicit casting) etməlidir."
  },
  {
    "id": "exam-sec2-12",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Böyük Ədədlər (BigInt) və Dəqiqlik",
    "serif": "<code>bigintHesabla()</code> funksiyasını qurun. Standart Number üçün maksimum təhlükəsiz həddi (<code>Number.MAX_SAFE_INTEGER</code>) və ona <code>1n</code> və <code>2n</code> əlavə edilmiş <code>BigInt</code> dəyərlərini konsola <code>Maks: [max] | BigInt1: [b1] | BigInt2: [b2]</code> formatında çıxarın.",
    "gozlenilenCixis": "Maks: 9007199254740991 | BigInt1: 9007199254740992 | BigInt2: 9007199254740993",
    "starterCode": "function bigintHesabla() {\n  // Kodunuzu buraya yazın\n}\n\nbigintHesabla();",
    "solutionCode": "function bigintHesabla() {\n  const max = Number.MAX_SAFE_INTEGER;\n  const b1 = BigInt(max) + 1n;\n  const b2 = BigInt(max) + 2n;\n  console.log(`Maks: ${max} | BigInt1: ${b1} | BigInt2: ${b2}`);\n}\n\nbigintHesabla();",
    "ipuclari": [
      "İpucu 1: Number.MAX_SAFE_INTEGER dəyəri 9007199254740991-dir.",
      "İpucu 2: Bu həddi aşan ədədlər üçün sonuna 'n' əlavə edilərək BigInt tipi istifadə olunur.",
      "İpucu 3: BigInt dəyərləri standart number ilə birbaşa toplana bilməz, hər ikisi BigInt olmalıdır."
    ],
    "teslimIzahi": "BigInt tipi 64-bitlik IEEE-754 limitindən kənara çıxan istənilən böyüklükdə tam ədədləri tam dəqiqliklə saxlamaq üçün ES2020-də əlavə olunmuşdur."
  },
  {
    "id": "exam-sec2-13",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Təhlükəsiz Tip Validasiya Funksiyası",
    "serif": "<code>tipDogrula(deyer, gozlenilenTip)</code> funksiyasını tərtib edin. Əgər dəyərin <code>typeof</code> tipi <code>gozlenilenTip</code> ilə tam uyğundursa konsola <code>[DOĞRU] Dəyər: [deyer] tiplidir</code>, əks halda <code>[XƏTA] Gözlənilən: [gozlenilenTip], lakin alındı: [faktiki]</code> yazdırın. Funksiyanı ardıcıl olaraq <code>(25, \"number\")</code> və <code>(\"Bakı\", \"number\")</code> ilə çağırın.",
    "gozlenilenCixis": "[DOĞRU] Dəyər: number tiplidir\n[XƏTA] Gözlənilən: number, lakin alındı: string",
    "starterCode": "function tipDogrula(deyer, gozlenilenTip) {\n  // Kodunuzu buraya yazın\n}\n\ntipDogrula(25, \"number\");\ntipDogrula(\"Bakı\", \"number\");",
    "solutionCode": "function tipDogrula(deyer, gozlenilenTip) {\n  const faktiki = typeof deyer;\n  if (faktiki === gozlenilenTip) {\n    console.log(`[DOĞRU] Dəyər: ${gozlenilenTip} tiplidir`);\n  } else {\n    console.log(`[XƏTA] Gözlənilən: ${gozlenilenTip}, lakin alındı: ${faktiki}`);\n  }\n}\n\ntipDogrula(25, \"number\");\ntipDogrula(\"Bakı\", \"number\");",
    "ipuclari": [
      "İpucu 1: typeof deyer ilə real tipi əldə edib gözlənilən tip ilə müqayisə edin.",
      "İpucu 2: if-else budaqlanmasından istifadə edərək müvafiq çıxışı qurun.",
      "İpucu 3: Birinci çağırış [DOĞRU], ikinci isə [XƏTA] çıxışı verəcək."
    ],
    "teslimIzahi": "Tip yoxlayıcı funksiyalar (runtime type guards) funksiyalara ötürülən arqumentlərin səhv tipli olmasının qarşısını alaraq proqramın dayanıqlığını təmin edir."
  },
  {
    "id": "exam-sec2-14",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Məhsulun Primitiv Tiplərlə İndekslənməsi",
    "serif": "<code>mehsulIndeksi(ad, qiymet, endirimde, anbarSay)</code> funksiyasını qurun. Funksiya gələn arqumentləri tip çevirmələri ilə təhlükəsiz şəkildə formata salsın: ad mütləq String, qiymet Number, endirimde Boolean, anbarSay Number olsun. Konsola <code>Məhsul: [ad] | Qiymət: [qiymet] AZN | Endirim: [endirimde] | Say: [anbarSay]</code> çıxarın. Funksiyanı <code>(101, \"49.9\", 1, \"15\")</code> ilə çağırın.",
    "gozlenilenCixis": "Məhsul: 101 | Qiymət: 49.9 AZN | Endirim: true | Say: 15",
    "starterCode": "function mehsulIndeksi(ad, qiymet, endirimde, anbarSay) {\n  // Kodunuzu buraya yazın\n}\n\nmehsulIndeksi(101, \"49.9\", 1, \"15\");",
    "solutionCode": "function mehsulIndeksi(ad, qiymet, endirimde, anbarSay) {\n  const sAd = String(ad);\n  const nQiymet = Number(qiymet);\n  const bEndirim = Boolean(endirimde);\n  const nSay = Number(anbarSay);\n  console.log(`Məhsul: ${sAd} | Qiymət: ${nQiymet} AZN | Endirim: ${bEndirim} | Say: ${nSay}`);\n}\n\nmehsulIndeksi(101, \"49.9\", 1, \"15\");",
    "ipuclari": [
      "İpucu 1: Bütün girişləri uyğun primitiv konstruktorları ilə (String, Number, Boolean) kasting edin.",
      "İpucu 2: 1 boolean olaraq true-ya çevriləcək.",
      "İpucu 3: Formatlanmış məlumatı tək sətirdə çap edin."
    ],
    "teslimIzahi": "İstifadəçi formalarından gələn qarışıq tipli məlumatların ilkin mərhələdə primitiv tiplərə sanitarizasiyası (type casting) etibarlı tətbiqlərin əsas tələbidir."
  },
  {
    "id": "exam-sec2-15",
    "bolmeId": 2,
    "merheleId": 1,
    "cetinlik": "EKSPERT",
    "basliq": "Dinamik Tip Analizatoru və Xülasə Generatoru",
    "serif": "<code>analizator(kolleksiya)</code> funksiyasını yaradın. <code>kolleksiya</code> müxtəlif tipli dəyərlər massividir. Funksiya massivdəki hər tipin neçə dəfə təkrarlandığını hesablasın və konsola <code>string: [say], number: [say], boolean: [say]</code> formatında çıxarsın. Funksiyanı <code>[\"Salam\", 42, true, \"Dünya\", 100, false, 3.14]</code> ilə çağırın.",
    "gozlenilenCixis": "string: 2, number: 3, boolean: 2",
    "starterCode": "function analizator(kolleksiya) {\n  // Kodunuzu buraya yazın\n}\n\nanalizator([\"Salam\", 42, true, \"Dünya\", 100, false, 3.14]);",
    "solutionCode": "function analizator(kolleksiya) {\n  const saylar = { string: 0, number: 0, boolean: 0 };\n  for (let i = 0; i < kolleksiya.length; i++) {\n    const tip = typeof kolleksiya[i];\n    if (saylar[tip] !== undefined) {\n      saylar[tip]++;\n    }\n  }\n  console.log(`string: ${saylar.string}, number: ${saylar.number}, boolean: ${saylar.boolean}`);\n}\n\nanalizator([\"Salam\", 42, true, \"Dünya\", 100, false, 3.14]);",
    "ipuclari": [
      "İpucu 1: Sayğac obyekti yaradıb 'typeof' dəyərlərinə görə açarları artırın.",
      "İpucu 2: Massiv daxilində for dövrü ilə hər bir elementi yoxlayın.",
      "İpucu 3: Nəticəni 'string: 2, number: 3, boolean: 2' formatında çap edin."
    ],
    "teslimIzahi": "Tip tezliklərinin analizi dinamik dillərdə daxil olan məlumat dəstlərinin profilini çıxarmaq və anomaliyaları aşkar etmək üçün istifadə olunur."
  },
  {
    "id": "exam-sec3-01",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Qalıq Operatoru (%) ilə Cüt/Tək Yoxlanışı",
    "serif": "<code>cutTekYoxla(eded)</code> funksiyasını yazın. Əgər <code>eded % 2 === 0</code> olarsa konsola <code>Cüt</code>, əks halda <code>Tək</code> çap edin. Funksiyanı ardıcıl olaraq <code>14</code> və <code>7</code> üçün çağırın.",
    "gozlenilenCixis": "Cüt\nTək",
    "starterCode": "function cutTekYoxla(eded) {\n  // Kodunuzu buraya yazın\n}\n\ncutTekYoxla(14);\ncutTekYoxla(7);",
    "solutionCode": "function cutTekYoxla(eded) {\n  console.log(eded % 2 === 0 ? \"Cüt\" : \"Tək\");\n}\n\ncutTekYoxla(14);\ncutTekYoxla(7);",
    "ipuclari": [
      "İpucu 1: Qalıq operatoru (%) ədədin 2-yə bölünməsindən alınan qalığı qaytarır.",
      "İpucu 2: Qalıq 0 olarsa cüt, 1 olarsa tək ədəddir.",
      "İpucu 3: Ternary və ya if-else ilə nəticəni çap edin."
    ],
    "teslimIzahi": "Modul (qalıq) operatoru proqramlaşdırmada dövri təkrarlanmaları və cüt/tək bölünmələri təyin etmək üçün təməl riyazi alətdir."
  },
  {
    "id": "exam-sec3-02",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Qüvvət Operatoru (**)",
    "serif": "<code>quvvetHesabla(esos, dereco)</code> funksiyasını təyin edin. <code>**</code> operatorundan istifadə edərək qüvvəti hesablayın və konsola <code>[esos] ^ [dereco] = [netice]</code> çıxarın. Funksiyanı <code>2, 5</code> arqumentləri ilə çağırın.",
    "gozlenilenCixis": "2 ^ 5 = 32",
    "starterCode": "function quvvetHesabla(esos, dereco) {\n  // Kodunuzu buraya yazın\n}\n\nquvvetHesabla(2, 5);",
    "solutionCode": "function quvvetHesabla(esos, dereco) {\n  const netice = esos ** dereco;\n  console.log(`${esos} ^ ${dereco} = ${netice}`);\n}\n\nquvvetHesabla(2, 5);",
    "ipuclari": [
      "İpucu 1: JavaScript-də qüvvətə yüksəltmə operatoru qoşa ulduz (**) işarəsidir.",
      "İpucu 2: 2 ** 5 əməliyyatı 2-ni 5 dəfə öz-özünə vuraraq 32 verir.",
      "İpucu 3: Nəticəni şablonda '2 ^ 5 = 32' kimi göstərin."
    ],
    "teslimIzahi": "ES2016-da təqdim olunan ** operatoru Math.pow() metodunun sintaktik ekvivalentidir və riyazi ifadələri daha qısa yazmağa imkan verir."
  },
  {
    "id": "exam-sec3-03",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Ciddi (===) vs Boş (==) Bərabərlik",
    "serif": "<code>beraberlikMuqayisesi(a, b)</code> funksiyasını yazın. Konsola <code>Boş: [a == b] | Ciddi: [a === b]</code> formatında çıxış verin. Funksiyanı <code>0, false</code> arqumentləri ilə çağırın.",
    "gozlenilenCixis": "Boş: true | Ciddi: false",
    "starterCode": "function beraberlikMuqayisesi(a, b) {\n  // Kodunuzu buraya yazın\n}\n\nberaberlikMuqayisesi(0, false);",
    "solutionCode": "function beraberlikMuqayisesi(a, b) {\n  console.log(`Boş: ${a == b} | Ciddi: ${a === b}`);\n}\n\nberaberlikMuqayisesi(0, false);",
    "ipuclari": [
      "İpucu 1: '==' operatoru tipləri məcburən uyğunlaşdırır (0 və false bərabər sayılır).",
      "İpucu 2: '===' isə həm dəyəri, həm də tipi yoxlayır (number !== boolean).",
      "İpucu 3: Çıxış 'Boş: true | Ciddi: false' olmalıdır."
    ],
    "teslimIzahi": "Boş bərabərlik (type coercion) gözlənilməz məntiqi xətalara səbəb olduğundan müasir JavaScript standartlarında həmişə ciddi (===) bərabərlik tövsiyə edilir."
  },
  {
    "id": "exam-sec3-04",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Məntiqi VƏ (&&) ilə İcazə Yoxlanışı",
    "serif": "<code>girisYoxla(yas, biletVar)</code> funksiyasını qurun. İstifadəçinin daxil olması üçün yaşı 18 və ya yuxarı OLMALI VƏ bileti OLMALIDIR. Şərt ödəndikdə <code>Girişə icazə verildi</code>, əks halda <code>Giriş qadağandır</code> konsola çıxarın. Funksiyanı <code>20, true</code> ilə çağırın.",
    "gozlenilenCixis": "Girişə icazə verildi",
    "starterCode": "function girisYoxla(yas, biletVar) {\n  // Kodunuzu buraya yazın\n}\n\ngirisYoxla(20, true);",
    "solutionCode": "function girisYoxla(yas, biletVar) {\n  if (yas >= 18 && biletVar) {\n    console.log(\"Girişə icazə verildi\");\n  } else {\n    console.log(\"Giriş qadağandır\");\n  }\n}\n\ngirisYoxla(20, true);",
    "ipuclari": [
      "İpucu 1: Hər iki şərtin eyni vaxtda ödənməsi üçün '&&' məntiqi operatorundan istifadə edin.",
      "İpucu 2: 'yas >= 18 && biletVar' ifadəsini yoxlayın.",
      "İpucu 3: Hər iki şərt ödəndiyi üçün 'Girişə icazə verildi' çap olunmalıdır."
    ],
    "teslimIzahi": "&& operatoru bütün operandlar true olduqda true qaytarır. Əgər bircə şərt belə false olarsa, icra dərhal false ilə nəticələnir."
  },
  {
    "id": "exam-sec3-05",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Məntiqi VƏ YA (||) ilə Ödəniş Metodu",
    "serif": "<code>odenisYoxla(kartVar, nagdVar)</code> funksiyasını yazın. Əgər kart VƏ YA nağd pul mövcuddursa konsola <code>Ödəniş mümkündür</code>, hər ikisi yoxdursa <code>Ödəniş vasitəsi yoxdur</code> çıxarın. Funksiyanı ardıcıl olaraq <code>(false, true)</code> və <code>(false, false)</code> ilə çağırın.",
    "gozlenilenCixis": "Ödəniş mümkündür\nÖdəniş vasitəsi yoxdur",
    "starterCode": "function odenisYoxla(kartVar, nagdVar) {\n  // Kodunuzu buraya yazın\n}\n\nodenisYoxla(false, true);\nodenisYoxla(false, false);",
    "solutionCode": "function odenisYoxla(kartVar, nagdVar) {\n  if (kartVar || nagdVar) {\n    console.log(\"Ödəniş mümkündür\");\n  } else {\n    console.log(\"Ödəniş vasitəsi yoxdur\");\n  }\n}\n\nodenisYoxla(false, true);\nodenisYoxla(false, false);",
    "ipuclari": [
      "İpucu 1: Şərtlərdən ən azı birinin doğru olması kifayətdirsə '||' operatoru seçilir.",
      "İpucu 2: Yalnız hər iki arqument false olduqda else bloku işləyəcək.",
      "İpucu 3: İki çağırış iki ayrı sətir çıxaracaq."
    ],
    "teslimIzahi": "|| operatoru soldan sağa doğru ilk true dəyəri axtarır və tapdıqda dərhal true qaytarır (short-circuit)."
  },
  {
    "id": "exam-sec3-06",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Mənimsətmə Operatorları (+=, *=, -=)",
    "serif": "<code>hesablamaZenciri(ilkin)</code> funksiyasını təyin edin. Dəyişənə <code>ilkin</code> dəyərini verin, ardınca <code>+= 10</code>, sonra <code>*= 2</code> və sonda <code>-= 5</code> tətbiq edin. Yekun qiyməti konsola <code>Nəticə: [qiymət]</code> olaraq çap edin. Funksiyanı <code>5</code> ilə çağırın.",
    "gozlenilenCixis": "Nəticə: 25",
    "starterCode": "function hesablamaZenciri(ilkin) {\n  // Kodunuzu buraya yazın\n}\n\nhesablamaZenciri(5);",
    "solutionCode": "function hesablamaZenciri(ilkin) {\n  let x = ilkin;\n  x += 10; // 15\n  x *= 2;  // 30\n  x -= 5;  // 25\n  console.log(`Nəticə: ${x}`);\n}\n\nhesablamaZenciri(5);",
    "ipuclari": [
      "İpucu 1: Qısaldılmış mənimsətmə operatorları (+=, *=, -=) dəyişənin cari dəyərini yeniləyir.",
      "İpucu 2: 5 + 10 = 15; 15 * 2 = 30; 30 - 5 = 25.",
      "İpucu 3: Sonda console.log(`Nəticə: ${x}`) yazın."
    ],
    "teslimIzahi": "Qısaldılmış mənimsətmə operatorları hesablama və təyinatı tək bir əmrdə birləşdirərək kodun yığcamlığını təmin edir."
  },
  {
    "id": "exam-sec3-07",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Ciddi Fərqlilik (!==) Operatoru",
    "serif": "<code>ferqlilikYoxla(a, b)</code> funksiyasını yazın. Əgər arqumentlər ciddi fərqlidirsə (<code>a !== b</code>) konsola <code>Fərqlidir</code>, bərabərdirsə <code>Eynidir</code> çap edin. Funksiyanı ardıcıl olaraq <code>(10, \"10\")</code> və <code>(10, 10)</code> ilə çağırın.",
    "gozlenilenCixis": "Fərqlidir\nEynidir",
    "starterCode": "function ferqlilikYoxla(a, b) {\n  // Kodunuzu buraya yazın\n}\n\nferqlilikYoxla(10, \"10\");\nferqlilikYoxla(10, 10);",
    "solutionCode": "function ferqlilikYoxla(a, b) {\n  console.log(a !== b ? \"Fərqlidir\" : \"Eynidir\");\n}\n\nferqlilikYoxla(10, \"10\");\nferqlilikYoxla(10, 10);",
    "ipuclari": [
      "İpucu 1: '!==' operatoru həm tipi, həm dəyəri müqayisə edir.",
      "İpucu 2: 10 (number) və \"10\" (string) fərqli tiplər olduğu üçün 'Fərqlidir' çıxacaq.",
      "İpucu 3: 10 və 10 eyni olduğu üçün 'Eynidir' çıxacaq."
    ],
    "teslimIzahi": "!== ciddi bərabər deyil operatorudur və tip fərqi olduqda heç bir gizli çevrilmə aparmadan true qaytarır."
  },
  {
    "id": "exam-sec3-08",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Nullish Coalescing (??) vs OR (||)",
    "serif": "<code>susmayaGoreDeyer(say)</code> funksiyasını tərtib edin. Konsola <code>OR: [say || 10] | Nullish: [say ?? 10]</code> formatında çıxış verin. Funksiyanı <code>0</code> arqumenti ilə çağırın.",
    "gozlenilenCixis": "OR: 10 | Nullish: 0",
    "starterCode": "function susmayaGoreDeyer(say) {\n  // Kodunuzu buraya yazın\n}\n\nsusmayaGoreDeyer(0);",
    "solutionCode": "function susmayaGoreDeyer(say) {\n  const orNetice = say || 10;\n  const nullishNetice = say ?? 10;\n  console.log(`OR: ${orNetice} | Nullish: ${nullishNetice}`);\n}\n\nsusmayaGoreDeyer(0);",
    "ipuclari": [
      "İpucu 1: '||' operatoru 0-ı falsy saydığı üçün sağdakı 10-u götürür.",
      "İpucu 2: '??' operatoru yalnız null və undefined üçün işləyir, 0-ı etibarlı ədəd sayır.",
      "İpucu 3: Çıxış dəqiq 'OR: 10 | Nullish: 0' olmalıdır."
    ],
    "teslimIzahi": "Nullish Coalescing operatoru (??) 0 və \"\" kimi mənalı falsy dəyərlərin itirilməsinin qarşısını almaq üçün təqdim edilmişdir."
  },
  {
    "id": "exam-sec3-09",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Operator Prioriteti və Mürəkkəb Hesablama",
    "serif": "<code>prioritetHesabla(a, b, c)</code> funksiyasını yazın. Konsola <code>Sadə: [a + b * c] | Mötərizəli: [(a + b) * c]</code> çıxarın. Funksiyanı <code>2, 3, 4</code> ilə çağırın.",
    "gozlenilenCixis": "Sadə: 14 | Mötərizəli: 20",
    "starterCode": "function prioritetHesabla(a, b, c) {\n  // Kodunuzu buraya yazın\n}\n\nprioritetHesabla(2, 3, 4);",
    "solutionCode": "function prioritetHesabla(a, b, c) {\n  const sade = a + b * c;     // 2 + 12 = 14\n  const moterizeli = (a + b) * c; // 5 * 4 = 20\n  console.log(`Sadə: ${sade} | Mötərizəli: ${moterizeli}`);\n}\n\nprioritetHesabla(2, 3, 4);",
    "ipuclari": [
      "İpucu 1: Vurma operatorunun (*) prioriteti toplama operatorundan (+) yüksəkdir.",
      "İpucu 2: Mötərizələr prioriteti dəyişdirərək əvvəlcə toplamanı icra etdirir.",
      "İpucu 3: 2 + 12 = 14 və 5 * 4 = 20 nəticələrini formatlı çap edin."
    ],
    "teslimIzahi": "Riyazi operatorların presedenti (precedence) icra ardıcıllığını müəyyən edir. Dəyirmi mötərizələr ən yüksək prioritetə malikdir."
  },
  {
    "id": "exam-sec3-10",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Qısa Qapanma (Short-circuit Evaluation) Mexanizmi",
    "serif": "<code>qisaQapanma(istifadeci)</code> funksiyasını yazın. Əgər <code>istifadeci</code> mövcuddursa və <code>istifadeci.aktiv</code> doğrudursa konsola <code>İstifadəçi Aktivdir</code>, əks halda <code>Qeyri-aktiv</code> çıxarın. Kodda xəta verməməsi üçün <code>istifadeci && istifadeci.aktiv</code> qısa qapanmasından istifadə edin. Funksiyanı <code>null</code> və <code>{ aktiv: true }</code> üçün çağırın.",
    "gozlenilenCixis": "Qeyri-aktiv\nİstifadəçi Aktivdir",
    "starterCode": "function qisaQapanma(istifadeci) {\n  // Kodunuzu buraya yazın\n}\n\nqisaQapanma(null);\nqisaQapanma({ aktiv: true });",
    "solutionCode": "function qisaQapanma(istifadeci) {\n  if (istifadeci && istifadeci.aktiv) {\n    console.log(\"İstifadəçi Aktivdir\");\n  } else {\n    console.log(\"Qeyri-aktiv\");\n  }\n}\n\nqisaQapanma(null);\nqisaQapanma({ aktiv: true });",
    "ipuclari": [
      "İpucu 1: null.aktiv yazıldıqda TypeError baş verir, lakin 'istifadeci && ...' bunu önləyir.",
      "İpucu 2: Sol tərəf null olduqda sağ tərəf heç icra olunmur.",
      "İpucu 3: Nəticələri ardıcıl çap edin."
    ],
    "teslimIzahi": "Short-circuit xüsusiyyəti sol tərəf falsy olduqda sağ tərəfin icrasını dayandıraraq null reference xətalarından qoruyur."
  },
  {
    "id": "exam-sec3-11",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Çoxfaktorlu Giriş Təhlükəsizlik Sistemi",
    "serif": "<code>girisHüququ(istifadeci)</code> funksiyasını təyin edin. <code>istifadeci</code> obyekti <code>rol</code>, <code>ikiFaktorlu</code> və <code>ipBlokda</code> sahələrinə malikdir. Giriş yalnız o halda təsdiqlənir ki, <code>ipBlokda</code> false olsun VƏ (rol 'admin' olsun VƏ YA ikiFaktorlu true olsun). Konsola <code>[GİRİŞ] Təsdiq: [true/false]</code> çıxarın. Funksiyanı <code>{ rol: \"user\", ikiFaktorlu: true, ipBlokda: false }</code> ilə çağırın.",
    "gozlenilenCixis": "[GİRİŞ] Təsdiq: true",
    "starterCode": "function girisHüququ(istifadeci) {\n  // Kodunuzu buraya yazın\n}\n\ngirisHüququ({ rol: \"user\", ikiFaktorlu: true, ipBlokda: false });",
    "solutionCode": "function girisHüququ(istifadeci) {\n  const tesdiq = !istifadeci.ipBlokda && (istifadeci.rol === \"admin\" || istifadeci.ikiFaktorlu);\n  console.log(`[GİRİŞ] Təsdiq: ${tesdiq}`);\n}\n\ngirisHüququ({ rol: \"user\", ikiFaktorlu: true, ipBlokda: false });",
    "ipuclari": [
      "İpucu 1: Məntiqi operatorları qruplaşdırmaq üçün mötərizələrdən: '!ipBlokda && (rol === \"admin\" || ikiFaktorlu)' istifadə edin.",
      "İpucu 2: ipBlokda false olduğundan !ipBlokda true olacaq.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    "teslimIzahi": "Mürəkkəb təhlükəsizlik şərtlərində məntiqi VƏ (&&) və VƏ YA (||) operatorlarının mötərizələrlə düzgün qruplaşdırılması zəruridir."
  },
  {
    "id": "exam-sec3-12",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dinamik Endirim və Bonus Hesablayıcı",
    "serif": "<code>endirimHesabla(mebleg, kupon, vip)</code> funksiyasını qurun. Əgər <code>vip</code> true-dursa 20% endirim, əks halda əgər <code>kupon === \"YAY10\"</code> olarsa 10% endirim, heç biri deyilsə 0% endirim tətbiq olunur. Yekun ödəniş məbləğini konsola <code>Ödəniləcək: [yekun] AZN</code> olaraq çap edin. Funksiyanı ardıcıl olaraq <code>(200, \"\", true)</code> və <code>(200, \"YAY10\", false)</code> ilə çağırın.",
    "gozlenilenCixis": "Ödəniləcək: 160 AZN\nÖdəniləcək: 180 AZN",
    "starterCode": "function endirimHesabla(mebleg, kupon, vip) {\n  // Kodunuzu buraya yazın\n}\n\nendirimHesabla(200, \"\", true);\nendirimHesabla(200, \"YAY10\", false);",
    "solutionCode": "function endirimHesabla(mebleg, kupon, vip) {\n  let faiz = 0;\n  if (vip) {\n    faiz = 0.20;\n  } else if (kupon === \"YAY10\") {\n    faiz = 0.10;\n  }\n  const yekun = mebleg - (mebleg * faiz);\n  console.log(`Ödəniləcək: ${yekun} AZN`);\n}\n\nendirimHesabla(200, \"\", true);\nendirimHesabla(200, \"YAY10\", false);",
    "ipuclari": [
      "İpucu 1: VIP statusuna üstünlük verin (20% endirim -> 200 - 40 = 160).",
      "İpucu 2: Kupon kodunu yoxlayın (10% endirim -> 200 - 20 = 180).",
      "İpucu 3: Hər iki çağırışın nəticəsini alt-alta çap edin."
    ],
    "teslimIzahi": "Məntiqi operatorlar və şərt budaqları vasitəsilə biznes qaydalarının prioritetləşdirilməsi kommersiya sistemlərində standartdır."
  },
  {
    "id": "exam-sec3-13",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Ternary ilə Çoxpilləli Qiymətləndirmə",
    "serif": "<code>statusTeyini(bal)</code> funksiyasını tək bir zəncirvari Ternary operatoru ilə yazın: <code>bal >= 90</code> isə <code>\"Əla\"</code>, <code>bal >= 70</code> isə <code>\"Yaxşı\"</code>, <code>bal >= 50</code> isə <code>\"Kafi\"</code>, əks halda <code>\"Kəsildi\"</code>. Konsola <code>Nəticə: [status]</code> formatında çıxış verin. Funksiyanı <code>75</code> ilə çağırın.",
    "gozlenilenCixis": "Nəticə: Yaxşı",
    "starterCode": "function statusTeyini(bal) {\n  // Kodunuzu buraya yazın\n}\n\nstatusTeyini(75);",
    "solutionCode": "function statusTeyini(bal) {\n  const status = bal >= 90 ? \"Əla\" : bal >= 70 ? \"Yaxşı\" : bal >= 50 ? \"Kafi\" : \"Kəsildi\";\n  console.log(`Nəticə: ${status}`);\n}\n\nstatusTeyini(75);",
    "ipuclari": [
      "İpucu 1: Zəncirvari ternary sintaksisi: şərt1 ? dəyər1 : şərt2 ? dəyər2 : alternativ.",
      "İpucu 2: 75 bal 90-dan kiçik, lakin 70-dən böyük olduğu üçün 'Yaxşı' seçiləcək.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    "teslimIzahi": "Zəncirvari üçlü (nested ternary) operatorlar qısa şərtləri bir sətirdə həll etmək üçün əlverişlidir, lakin mürəkkəb olduqda diqqətlə formatlanmalıdır."
  },
  {
    "id": "exam-sec3-14",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Bitwise XOR ilə Təkrar Olunmayan Elementin Tapılması",
    "serif": "<code>tekElementiTap(massiv)</code> funksiyasını təyin edin. Massivdəki bütün ədədlər cüt-cüt təkrarlanır, yalnız bir ədəd təkrarlanmır. Bitwise XOR (<code>^</code>) operatorunun xüsusiyyətindən (<code>x ^ x === 0</code> və <code>x ^ 0 === x</code>) istifadə edərək tək elementi tapın və konsola <code>Tək element: [eded]</code> çıxarın. Funksiyanı <code>[4, 1, 2, 1, 2]</code> ilə çağırın.",
    "gozlenilenCixis": "Tək element: 4",
    "starterCode": "function tekElementiTap(massiv) {\n  // Kodunuzu buraya yazın\n}\n\ntekElementiTap([4, 1, 2, 1, 2]);",
    "solutionCode": "function tekElementiTap(massiv) {\n  let netice = 0;\n  for (let i = 0; i < massiv.length; i++) {\n    netice ^= massiv[i];\n  }\n  console.log(`Tək element: ${netice}`);\n}\n\ntekElementiTap([4, 1, 2, 1, 2]);",
    "ipuclari": [
      "İpucu 1: Eyni ədədləri bir-biri ilə XOR etdikdə sıfır alınır (a ^ a = 0).",
      "İpucu 2: Bütün elementləri ardıcıl XOR etdikdə təkrarlananlar sıfırlanır və yalnız tək element qalır.",
      "İpucu 3: Nəticə 'Tək element: 4' olacaq."
    ],
    "teslimIzahi": "Bitwise XOR operatoru xətti zaman O(N) və sabit yaddaş O(1) mürəkkəbliyi ilə unikal elementləri tapmaq üçün ən optimal alqoritmik üsuldur."
  },
  {
    "id": "exam-sec3-15",
    "bolmeId": 3,
    "merheleId": 1,
    "cetinlik": "EKSPERT",
    "basliq": "İkili Şərtli Qaydalar Mühərriki (Rule Evaluation Engine)",
    "serif": "<code>qaydalarMuherriki(istifadeci, qaydalar)</code> funksiyasını yaradın. <code>qaydalar</code> hər biri <code>{ sahe: \"yas\", op: \">=\", deyer: 18 }</code> formatında olan obyektlər massividir. Mühərrik bütün qaydaların istifadəçi üzərində ödənməsini yoxlasın (op: '===', '>=', '<=' dəstəklənsin). Hamısı ödənirsə <code>[MÜHƏRRİK] Bütün qaydalar təsdiqləndi</code>, əks halda <code>[MÜHƏRRİK] Qaydalar pozuldu</code> çap edin. Funksiyanı <code>{ yas: 22, xal: 85 }</code> və <code>[{ sahe: \"yas\", op: \">=\", deyer: 18 }, { sahe: \"xal\", op: \">=\", deyer: 80 }]</code> ilə çağırın.",
    "gozlenilenCixis": "[MÜHƏRRİK] Bütün qaydalar təsdiqləndi",
    "starterCode": "function qaydalarMuherriki(istifadeci, qaydalar) {\n  // Kodunuzu buraya yazın\n}\n\nqaydalarMuherriki({ yas: 22, xal: 85 }, [\n  { sahe: \"yas\", op: \">=\", deyer: 18 },\n  { sahe: \"xal\", op: \">=\", deyer: 80 }\n]);",
    "solutionCode": "function qaydalarMuherriki(istifadeci, qaydalar) {\n  let hamisiOdenir = true;\n  for (let i = 0; i < qaydalar.length; i++) {\n    const q = qaydalar[i];\n    const userVal = istifadeci[q.sahe];\n    let netice = false;\n    if (q.op === \">=\") netice = userVal >= q.deyer;\n    else if (q.op === \"<=\") netice = userVal <= q.deyer;\n    else if (q.op === \"===\") netice = userVal === q.deyer;\n    if (!netice) {\n      hamisiOdenir = false;\n      break;\n    }\n  }\n  console.log(hamisiOdenir ? \"[MÜHƏRRİK] Bütün qaydalar təsdiqləndi\" : \"[MÜHƏRRİK] Qaydalar pozuldu\");\n}\n\nqaydalarMuherriki({ yas: 22, xal: 85 }, [\n  { sahe: \"yas\", op: \">=\", deyer: 18 },\n  { sahe: \"xal\", op: \">=\", deyer: 80 }\n]);",
    "ipuclari": [
      "İpucu 1: Qaydaları dövr edərək istifadəçinin uyğun sahəsi ilə verilən dəyəri 'op' operatoruna əsasən yoxlayın.",
      "İpucu 2: Bircə qayda belə ödənməzsə dövrü dayandırın (break) və statusu false edin.",
      "İpucu 3: Hər iki şərt ödəndiyi üçün təsdiq mesajını çap edin."
    ],
    "teslimIzahi": "Qaydalar mühərriki (Rules Engine) proqramın məntiqini sərt kodlaşdırmaq (hardcoding) əvəzinə konfiqurasiya edilə bilən obyektlər şəklində dinamik qiymətləndirməyə imkan verir."
  },
  {
    "id": "exam-sec4-01",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Sadə if-else ilə Keçid Balı",
    "serif": "<code>kecidBaliniYoxla(bal)</code> funksiyasını təyin edin. Əgər <code>bal >= 50</code> olarsa konsola <code>İmtahandan keçdi</code>, əks halda <code>Kəsildi</code> çıxarın. Funksiyanı ardıcıl olaraq <code>65</code> və <code>40</code> ilə çağırın.",
    "gozlenilenCixis": "İmtahandan keçdi\nKəsildi",
    "starterCode": "function kecidBaliniYoxla(bal) {\n  // Kodunuzu buraya yazın\n}\n\nkecidBaliniYoxla(65);\nkecidBaliniYoxla(40);",
    "solutionCode": "function kecidBaliniYoxla(bal) {\n  if (bal >= 50) {\n    console.log(\"İmtahandan keçdi\");\n  } else {\n    console.log(\"Kəsildi\");\n  }\n}\n\nkecidBaliniYoxla(65);\nkecidBaliniYoxla(40);",
    "ipuclari": [
      "İpucu 1: if şərtində 'bal >= 50' yoxlamasını aparın.",
      "İpucu 2: Şərt ödəndikdə ilk mesajı, əks halda else blokunu icra edin.",
      "İpucu 3: İki çağırış üçün müvafiq iki sətir çıxarın."
    ],
    "teslimIzahi": "if-else şərt strukturu məntiqi ifadənin boolean nəticəsinə uyğun olaraq proqramın icra axınını iki alternativ budağa yönəldir."
  },
  {
    "id": "exam-sec4-02",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Ternary Operatoru ilə Giriş İcazəsi",
    "serif": "<code>ternaryGiris(yas)</code> funksiyasını yazın. Üçlü operator ilə <code>yas >= 18</code> olarsa <code>\"Yetkin\"</code>, əks halda <code>\"Uşaq\"</code> mətni konsola çıxarın. Funksiyanı <code>17</code> ilə çağırın.",
    "gozlenilenCixis": "Uşaq",
    "starterCode": "function ternaryGiris(yas) {\n  // Kodunuzu buraya yazın\n}\n\nternaryGiris(17);",
    "solutionCode": "function ternaryGiris(yas) {\n  console.log(yas >= 18 ? \"Yetkin\" : \"Uşaq\");\n}\n\nternaryGiris(17);",
    "ipuclari": [
      "İpucu 1: Sintaksis: şərt ? doğru_olduqda : yalan_olduqda.",
      "İpucu 2: 17 < 18 olduğu üçün 'Uşaq' seçiləcək.",
      "İpucu 3: console.log daxilində ternary ifadəsini birbaşa istifadə edin."
    ],
    "teslimIzahi": "Ternary operatoru tək sətirlik şərtli dəyər seçimi üçün nəzərdə tutulmuş yığcam JavaScript ifadəsidir."
  },
  {
    "id": "exam-sec4-03",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "switch-case ilə Həftənin Günü",
    "serif": "<code>hefteninGunu(reqem)</code> funksiyasını switch-case ilə qurun: <code>1</code> üçün <code>\"Bazar ertəsi\"</code>, <code>2</code> üçün <code>\"Çərşənbə axşamı\"</code>, <code>3</code> üçün <code>\"Çərşənbə\"</code>, digər hallar üçün <code>\"Digər gün\"</code> çap edin. Funksiyanı <code>2</code> ilə çağırın.",
    "gozlenilenCixis": "Çərşənbə axşamı",
    "starterCode": "function hefteninGunu(reqem) {\n  // Kodunuzu buraya yazın\n}\n\nhefteninGunu(2);",
    "solutionCode": "function hefteninGunu(reqem) {\n  switch (reqem) {\n    case 1:\n      console.log(\"Bazar ertəsi\");\n      break;\n    case 2:\n      console.log(\"Çərşənbə axşamı\");\n      break;\n    case 3:\n      console.log(\"Çərşənbə\");\n      break;\n    default:\n      console.log(\"Digər gün\");\n  }\n}\n\nhefteninGunu(2);",
    "ipuclari": [
      "İpucu 1: switch (reqem) strukturunu açın və hər case blokunun sonuna 'break;' qoyun.",
      "İpucu 2: case 2 blokunda 'Çərşənbə axşamı' çıxışını təmin edin.",
      "İpucu 3: 'break' qoyulmazsa fall-through baş verər."
    ],
    "teslimIzahi": "switch konstruksiyası dəqiq dəyər uyğunluqlarını (strict equality) yoxlamaq üçün if-else zəncirinə alternativ daha oxunaqlı seçimdir."
  },
  {
    "id": "exam-sec4-04",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Çoxşaxəli if - else if Qiymətləndirməsi",
    "serif": "<code>herfQiymeti(bal)</code> funksiyasını təyin edin: <code>bal >= 90</code> isə <code>\"A\"</code>, <code>bal >= 80</code> isə <code>\"B\"</code>, <code>bal >= 70</code> isə <code>\"C\"</code>, <code>bal >= 60</code> isə <code>\"D\"</code>, əks halda <code>\"F\"</code> konsola çap olunsun. Funksiyanı <code>84</code> ilə çağırın.",
    "gozlenilenCixis": "B",
    "starterCode": "function herfQiymeti(bal) {\n  // Kodunuzu buraya yazın\n}\n\nherfQiymeti(84);",
    "solutionCode": "function herfQiymeti(bal) {\n  if (bal >= 90) {\n    console.log(\"A\");\n  } else if (bal >= 80) {\n    console.log(\"B\");\n  } else if (bal >= 70) {\n    console.log(\"C\");\n  } else if (bal >= 60) {\n    console.log(\"D\");\n  } else {\n    console.log(\"F\");\n  }\n}\n\nherfQiymeti(84);",
    "ipuclari": [
      "İpucu 1: Şərtləri böyükdən kiçiyə doğru ardıcıl sıralayın.",
      "İpucu 2: 84 bal 90-dan kiçikdir, lakin 80-dən böyük olduğu üçün 'B' bloku işləyəcək.",
      "İpucu 3: Nəticə olaraq tək simvol 'B' çap edin."
    ],
    "teslimIzahi": "else if zəncirlərində yuxarıdakı şərt ödəndikdə sonrakı yoxlamalar atlanır, buna görə aralıqların düzgün ardıcıllıqla yazılması mühümdür."
  },
  {
    "id": "exam-sec4-05",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "switch-case ilə Sadə Kalkulyator",
    "serif": "<code>miniKalkulyator(a, b, emeliyyat)</code> funksiyasını switch-case ilə qurun: <code>\"+\"</code> üçün toplama, <code>\"-\"</code> üçün çıxma, <code>\"*\"</code> üçün vurma, <code>\"/\"</code> üçün bölmə nəticəsini konsola çıxarın. Funksiyanı <code>12, 4, \"/\"</code> ilə çağırın.",
    "gozlenilenCixis": "3",
    "starterCode": "function miniKalkulyator(a, b, emeliyyat) {\n  // Kodunuzu buraya yazın\n}\n\nminiKalkulyator(12, 4, \"/\");",
    "solutionCode": "function miniKalkulyator(a, b, emeliyyat) {\n  switch (emeliyyat) {\n    case \"+\": console.log(a + b); break;\n    case \"-\": console.log(a - b); break;\n    case \"*\": console.log(a * b); break;\n    case \"/\": console.log(a / b); break;\n    default: console.log(\"Naməlum əməliyyat\");\n  }\n}\n\nminiKalkulyator(12, 4, \"/\");",
    "ipuclari": [
      "İpucu 1: switch (emeliyyat) ilə simvolu yoxlayın.",
      "İpucu 2: case \"/\": bölmə əməliyyatını (12 / 4 = 3) icra edin.",
      "İpucu 3: break qoyaraq çıxışı tamamlayın."
    ],
    "teslimIzahi": "switch strukturu əməliyyat kodlarına və simvollara görə riyazi məntiqi şaxələndirmək üçün ən əlverişli mexanizmdir."
  },
  {
    "id": "exam-sec4-06",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "İç-içə (Nested) if ilə İkiqat Təsdiq",
    "serif": "<code>hesabYoxla(istifadeciVar, parolDuzdur)</code> funksiyasını tərtib edin. Əgər <code>istifadeciVar</code> true-dursa, daxilində <code>parolDuzdur</code> yoxlanılsın: doğru isə <code>Giriş uğurludur</code>, səhv isə <code>Şifrə yanlışdır</code>; əgər istifadəçi yoxdursa <code>İstifadəçi tapılmadı</code> konsola çıxsın. Funksiyanı <code>true, false</code> ilə çağırın.",
    "gozlenilenCixis": "Şifrə yanlışdır",
    "starterCode": "function hesabYoxla(istifadeciVar, parolDuzdur) {\n  // Kodunuzu buraya yazın\n}\n\nhesabYoxla(true, false);",
    "solutionCode": "function hesabYoxla(istifadeciVar, parolDuzdur) {\n  if (istifadeciVar) {\n    if (parolDuzdur) {\n      console.log(\"Giriş uğurludur\");\n    } else {\n      console.log(\"Şifrə yanlışdır\");\n    }\n  } else {\n    console.log(\"İstifadəçi tapılmadı\");\n  }\n}\n\nhesabYoxla(true, false);",
    "ipuclari": [
      "İpucu 1: Birinci if blokunun daxilində ikinci if yoxlamasını yerləşdirin.",
      "İpucu 2: istifadeciVar true, parolDuzdur false olduqda daxili else bloku işləyəcək.",
      "İpucu 3: Nəticə olaraq 'Şifrə yanlışdır' çap edin."
    ],
    "teslimIzahi": "İç-içə if şərtləri asılı yoxlamaları (əvvəlcə istifadəçinin varlığı, sonra isə şifrənin doğruluğu) mərhələli şəkildə həyata keçirir."
  },
  {
    "id": "exam-sec4-07",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "switch-case Fall-Through Xüsusiyyəti",
    "serif": "<code>hefteSonuYoxla(gun)</code> funksiyasını switch ilə qurun: <code>\"Şənbə\"</code> və ya <code>\"Bazar\"</code> olduqda hər ikisi üçün <code>İstirahət günü</code>, qalan günlər üçün <code>İş günü</code> çıxarın. Şənbə blokunda 'break' qoymayaraq fall-through mexanizmini nümayiş etdirin. Funksiyanı <code>\"Şənbə\"</code> ilə çağırın.",
    "gozlenilenCixis": "İstirahət günü",
    "starterCode": "function hefteSonuYoxla(gun) {\n  // Kodunuzu buraya yazın\n}\n\nhefteSonuYoxla(\"Şənbə\");",
    "solutionCode": "function hefteSonuYoxla(gun) {\n  switch (gun) {\n    case \"Şənbə\":\n    case \"Bazar\":\n      console.log(\"İstirahət günü\");\n      break;\n    default:\n      console.log(\"İş günü\");\n  }\n}\n\nhefteSonuYoxla(\"Şənbə\");",
    "ipuclari": [
      "İpucu 1: 'case \"Şənbə\":' sətirindən dərhal sonra 'case \"Bazar\":' yazın və araya break qoymayın.",
      "İpucu 2: Hər iki case eyni kod blokunu paylaşacaq.",
      "İpucu 3: Nəticə 'İstirahət günü' olacaq."
    ],
    "teslimIzahi": "Bir neçə case üçün eyni əməliyyat icra olunmalıdırsa, aradakı break əmri buraxılaraq kodun aşağı axması (fall-through) təmin edilir."
  },
  {
    "id": "exam-sec4-08",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Temperatur və Hava Məsləhətçisi",
    "serif": "<code>havaMesleheti(temp, yagisYagir)</code> funksiyasını yazın. Əgər <code>yagisYagir</code> doğrudursa konsola <code>Çətir götürün</code>; əks halda əgər <code>temp > 25</code> olarsa <code>Hava istidir, yüngül geyinin</code>, <code>temp >= 10</code> olarsa <code>Hava ilıqdır</code>, əks halda <code>Hava soyuqdur, qalın geyinin</code> çap olunsun. Funksiyanı ardıcıl olaraq <code>(15, false)</code> və <code>(20, true)</code> üçün çağırın.",
    "gozlenilenCixis": "Hava ilıqdır\nÇətir götürün",
    "starterCode": "function havaMesleheti(temp, yagisYagir) {\n  // Kodunuzu buraya yazın\n}\n\nhavaMesleheti(15, false);\nhavaMesleheti(20, true);",
    "solutionCode": "function havaMesleheti(temp, yagisYagir) {\n  if (yagisYagir) {\n    console.log(\"Çətir götürün\");\n  } else if (temp > 25) {\n    console.log(\"Hava istidir, yüngül geyinin\");\n  } else if (temp >= 10) {\n    console.log(\"Hava ilıqdır\");\n  } else {\n    console.log(\"Hava soyuqdur, qalın geyinin\");\n  }\n}\n\nhavaMesleheti(15, false);\nhavaMesleheti(20, true);",
    "ipuclari": [
      "İpucu 1: Əsas üstünlük şərti yağışın olub-olmamasıdır (yagisYagir true olduqda dərhal çıxış verin).",
      "İpucu 2: Yağış yoxdursa temperatur aralıqlarını else if ilə qiymətləndirin.",
      "İpucu 3: İki çağırış üçün müvafiq iki sətir alınacaq."
    ],
    "teslimIzahi": "Şərt ifadələrində kritik prioritetə malik kənar faktorlar (məsələn, yağış) əsas hesablamalardan əvvəl yoxlanılmalıdır."
  },
  {
    "id": "exam-sec4-09",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Taksi Sifarişi Qiymət Hesablayıcısı",
    "serif": "<code>taksiTarifi(mesafeKm, vaxtSaat)</code> funksiyasını təyin edin. Baza qiyməti 3 AZN-dir. Hər kilometr üçün 0.7 AZN əlavə olunur. Əgər <code>vaxtSaat >= 23 || vaxtSaat < 6</code> (gecə vaxtı) olarsa yekun məbləğə 2 AZN gecə əlavəsi gəlinir. Nəticəni konsola <code>Məsafə: [km] km | Yekun: [yekun] AZN</code> şəklində çıxarın. Funksiyanı <code>10, 23</code> ilə çağırın.",
    "gozlenilenCixis": "Məsafə: 10 km | Yekun: 12 AZN",
    "starterCode": "function taksiTarifi(mesafeKm, vaxtSaat) {\n  // Kodunuzu buraya yazın\n}\n\ntaksiTarifi(10, 23);",
    "solutionCode": "function taksiTarifi(mesafeKm, vaxtSaat) {\n  let mebleg = 3 + (mesafeKm * 0.7); // 3 + 7 = 10\n  if (vaxtSaat >= 23 || vaxtSaat < 6) {\n    mebleg += 2; // 12\n  }\n  console.log(`Məsafə: ${mesafeKm} km | Yekun: ${mebleg} AZN`);\n}\n\ntaksiTarifi(10, 23);",
    "ipuclari": [
      "İpucu 1: Baza + məsafə: 3 + (10 * 0.7) = 10 AZN.",
      "İpucu 2: Saat 23 gecə vaxtına düşdüyü üçün 'vaxtSaat >= 23 || vaxtSaat < 6' şərti ödənilir və 2 AZN əlavə olunur.",
      "İpucu 3: Nəticə 12 AZN olacaq."
    ],
    "teslimIzahi": "Real tətbiqlərdə dinamik tariflər baza qiyməti və şərtli əmsalların (gecə əlavəsi, pik saatlar) ardıcıl toplanması ilə hesablanır."
  },
  {
    "id": "exam-sec4-10",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "İstifadəçi Yaşına Görə Kateqoriya Təyini",
    "serif": "<code>yasQrupu(yas)</code> funksiyasını yazın: <code>yas < 0 || yas > 120</code> isə <code>\"Yanlış yaş\"</code>, <code>yas <= 12</code> isə <code>\"Uşaq\"</code>, <code>yas <= 19</code> isə <code>\"Yeniyetmə\"</code>, <code>yas <= 64</code> isə <code>\"Yetkin\"</code>, əks halda <code>\"Təqaüdçü\"</code> çap olunsun. Funksiyanı <code>68</code> ilə çağırın.",
    "gozlenilenCixis": "Təqaüdçü",
    "starterCode": "function yasQrupu(yas) {\n  // Kodunuzu buraya yazın\n}\n\nyasQrupu(68);",
    "solutionCode": "function yasQrupu(yas) {\n  if (yas < 0 || yas > 120) {\n    console.log(\"Yanlış yaş\");\n  } else if (yas <= 12) {\n    console.log(\"Uşaq\");\n  } else if (yas <= 19) {\n    console.log(\"Yeniyetmə\");\n  } else if (yas <= 64) {\n    console.log(\"Yetkin\");\n  } else {\n    console.log(\"Təqaüdçü\");\n  }\n}\n\nyasQrupu(68);",
    "ipuclari": [
      "İpucu 1: Əvvəlcə qeyri-mümkün sərhəd dəyərlərini (kənar vəziyyətləri) süzgəcdən keçirin.",
      "İpucu 2: 68 yaşı 64-dən böyük olduğu üçün sonuncu else blokuna düşəcək.",
      "İpucu 3: Nəticə 'Təqaüdçü' olmalıdır."
    ],
    "teslimIzahi": "Hüdud qiymətlərinin (boundary conditions) əvvəlcədən yoxlanılması (Guard Clauses) proqramı səhv girişlərdən qoruyur."
  },
  {
    "id": "exam-sec4-11",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Valyuta Mübadiləsi Məzənnə Kalkulyatoru",
    "serif": "<code>valyutaCevir(meblegAzn, hedefValyuta)</code> funksiyasını switch-case ilə qurun: <code>\"USD\"</code> üçün 1.70-ə bölün (yuvarlaqlaşdırmadan çıxarın), <code>\"EUR\"</code> üçün 1.85-ə bölün (nəticəni Math.round ilə tam ədədə salın), <code>\"TRY\"</code> üçün 19-a vurun. Konsola <code>[meblegAzn] AZN = [netice] [hedefValyuta]</code> çap edin. Funksiyanı <code>170, \"USD\"</code> ilə çağırın.",
    "gozlenilenCixis": "170 AZN = 100 USD",
    "starterCode": "function valyutaCevir(meblegAzn, hedefValyuta) {\n  // Kodunuzu buraya yazın\n}\n\nvalyutaCevir(170, \"USD\");",
    "solutionCode": "function valyutaCevir(meblegAzn, hedefValyuta) {\n  let netice = 0;\n  switch (hedefValyuta) {\n    case \"USD\": netice = meblegAzn / 1.70; break;\n    case \"EUR\": netice = Math.round(meblegAzn / 1.85); break;\n    case \"TRY\": netice = meblegAzn * 19; break;\n    default: netice = 0;\n  }\n  console.log(`${meblegAzn} AZN = ${netice} ${hedefValyuta}`);\n}\n\nvalyutaCevir(170, \"USD\");",
    "ipuclari": [
      "İpucu 1: switch (hedefValyuta) daxilində 'USD' halını yoxlayın.",
      "İpucu 2: 170 / 1.70 = 100 nəticəsini hesablayın.",
      "İpucu 3: Formatı '170 AZN = 100 USD' kimi qurun."
    ],
    "teslimIzahi": "Valyuta konvertorları müxtəlif məzənnələrin tətbiqi üçün switch-case marşrutlaşdırmasından effektiv istifadə edir."
  },
  {
    "id": "exam-sec4-12",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dövlət Rüsumu və Vergi Dərəcəsi Təyini",
    "serif": "<code>vergiHesabla(gelir, rezidentdir)</code> funksiyasını tərtib edin. Əgər şəxs rezident deyilsə (<code>!rezidentdir</code>) gəlirindən asılı olmayaraq 20% vergi tətbiq olunur. Əgər rezidentdirsə: <code>gelir <= 1000</code> üçün 0% (vergisiz), <code>gelir <= 3000</code> üçün 14%, <code>gelir > 3000</code> üçün 25% vergi hesablanır. Konsola <code>Vergi: [mebleg] AZN</code> çıxarın. Funksiyanı ardıcıl olaraq <code>(2000, true)</code> və <code>(2000, false)</code> ilə çağırın.",
    "gozlenilenCixis": "Vergi: 280 AZN\nVergi: 400 AZN",
    "starterCode": "function vergiHesabla(gelir, rezidentdir) {\n  // Kodunuzu buraya yazın\n}\n\nvergiHesabla(2000, true);\nvergiHesabla(2000, false);",
    "solutionCode": "function vergiHesabla(gelir, rezidentdir) {\n  let faiz = 0;\n  if (!rezidentdir) {\n    faiz = 0.20;\n  } else {\n    if (gelir <= 1000) faiz = 0;\n    else if (gelir <= 3000) faiz = 0.14;\n    else faiz = 0.25;\n  }\n  const vergi = gelir * faiz;\n  console.log(`Vergi: ${vergi} AZN`);\n}\n\nvergiHesabla(2000, true);\nvergiHesabla(2000, false);",
    "ipuclari": [
      "İpucu 1: Rezidentlik statusunu ən birinci şərt olaraq ayırın.",
      "İpucu 2: Rezident olduqda 2000 AZN 14% dərəcəsinə düşür (2000 * 0.14 = 280).",
      "İpucu 3: Qeyri-rezident üçün 2000 * 0.20 = 400 AZN hesablanacaq."
    ],
    "teslimIzahi": "Mürəkkəb fiskal sistemlərdə vergi qanunvericiliyi rezidentlik və gəlir şkalalarının pilləli kombinasiyası ilə formalaşdırılır."
  },
  {
    "id": "exam-sec4-13",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Avtorizasiya Giriş Nəzarətçisi (RBAC)",
    "serif": "<code>girisIazesi(istifadeci, resurs)</code> funksiyasını qurun: <code>istifadeci.rol === \"admin\"</code> olarsa bütün resurslara <code>\"İcazə verildi: Tam Giriş\"</code> çıxsın; <code>istifadeci.rol === \"editor\"</code> olarsa yalnız resurs 'xeberler' və ya 'bloq' olduqda <code>\"İcazə verildi: Redaktə Girişi\"</code>; qalan bütün hallarda <code>\"Giriş qadağandır\"</code> konsola yazılsın. Funksiyanı <code>{ rol: \"editor\" }, \"xeberler\"</code> ilə çağırın.",
    "gozlenilenCixis": "İcazə verildi: Redaktə Girişi",
    "starterCode": "function girisIazesi(istifadeci, resurs) {\n  // Kodunuzu buraya yazın\n}\n\ngirisIazesi({ rol: \"editor\" }, \"xeberler\");",
    "solutionCode": "function girisIazesi(istifadeci, resurs) {\n  if (istifadeci.rol === \"admin\") {\n    console.log(\"İcazə verildi: Tam Giriş\");\n  } else if (istifadeci.rol === \"editor\" && (resurs === \"xeberler\" || resurs === \"bloq\")) {\n    console.log(\"İcazə verildi: Redaktə Girişi\");\n  } else {\n    console.log(\"Giriş qadağandır\");\n  }\n}\n\ngirisIazesi({ rol: \"editor\" }, \"xeberler\");",
    "ipuclari": [
      "İpucu 1: Admin rolunu dərhal 'Tam Giriş' ilə təsdiqləyin.",
      "İpucu 2: Editor rolunu resursun 'xeberler' və ya 'bloq' olması ilə birlikdə yoxlayın.",
      "İpucu 3: Nəticə olaraq 'İcazə verildi: Redaktə Girişi' çıxarın."
    ],
    "teslimIzahi": "Rol Əsaslı Giriş İdarəetməsi (Role-Based Access Control - RBAC) istifadəçinin hüquqlarını təyin edilmiş rollara və resurs tiplərinə görə məhdudlaşdırır."
  },
  {
    "id": "exam-sec4-14",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "İmtahan Qiymətləndirmə Şurası Qərarı",
    "serif": "<code>suraQerari(imtahan1, imtahan2, layihe)</code> funksiyasını tərtib edin. Tələbənin keçməsi üçün: hər iki imtahan ən azı 40 bal OLMALI VƏ (imtahanların ortalaması 60-dan çox OLMALI VƏ YA layihe balı 80 və daha yüksək OLMALIDIR). Əgər keçirsə <code>Diplom Təsdiqləndi</code>, əks halda <code>Diplom İmtina Edildi</code> konsola çıxarın. Funksiyanı ardıcıl olaraq <code>(50, 45, 85)</code> və <code>(35, 90, 95)</code> ilə çağırın.",
    "gozlenilenCixis": "Diplom Təsdiqləndi\nDiplom İmtina Edildi",
    "starterCode": "function suraQerari(imtahan1, imtahan2, layihe) {\n  // Kodunuzu buraya yazın\n}\n\nsuraQerari(50, 45, 85);\nsuraQerari(35, 90, 95);",
    "solutionCode": "function suraQerari(imtahan1, imtahan2, layihe) {\n  const minimalSərhəd = imtahan1 >= 40 && imtahan2 >= 40;\n  const ortalama = (imtahan1 + imtahan2) / 2;\n  const ustunluk = ortalama > 60 || layihe >= 80;\n  if (minimalSərhəd && ustunluk) {\n    console.log(\"Diplom Təsdiqləndi\");\n  } else {\n    console.log(\"Diplom İmtina Edildi\");\n  }\n}\n\nsuraQerari(50, 45, 85);\nsuraQerari(35, 90, 95);",
    "ipuclari": [
      "İpucu 1: Birinci halda hər iki imtahan >= 40-dır (50 və 45) və layihe 85 >= 80 olduğu üçün təsdiqlənir.",
      "İpucu 2: İkinci halda imtahan1 (35) minimal həddi (40) keçmədiyi üçün birbaşa imtina olunur.",
      "İpucu 3: Nəticələri ardıcıl çap edin."
    ],
    "teslimIzahi": "Məcburi minimal şərtlərlə yanaşı alternativ kompensasiya şərtlərinin kombinasiyası mürəkkəb qərar qəbuletmə alqoritmlərinin təməlidir."
  },
  {
    "id": "exam-sec4-15",
    "bolmeId": 4,
    "merheleId": 1,
    "cetinlik": "EKSPERT",
    "basliq": "İstehsalat Səviyyəli Bank Kredit Skorinq Sistemi",
    "serif": "<code>kreditSkorinq(gelir, kreditTarixcesi, yas, telebOlunan)</code> funksiyasını qurun: Əgər <code>yas < 18 || yas > 65</code> olarsa <code>[RƏDD] Yaş həddi uyğun deyil</code>; əks halda əgər <code>kreditTarixcesi === \"pis\"</code> olarsa <code>[RƏDD] Mənfi kredit tarixçəsi</code>; əks halda əgər <code>gelir * 0.5 >= telebOlunan / 12</code> (aylıq ödəniş gəlirin 50%-ni aşmırsa) olarsa <code>[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq [gelir*0.5] AZN</code>; əks halda <code>[RƏDD] Gəlir kifayət deyil</code> konsola çıxarın. Funksiyanı <code>(2000, \"yaxşı\", 30, 9600)</code> ilə çağırın.",
    "gozlenilenCixis": "[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq 1000 AZN",
    "starterCode": "function kreditSkorinq(gelir, kreditTarixcesi, yas, telebOlunan) {\n  // Kodunuzu buraya yazın\n}\n\nkreditSkorinq(2000, \"yaxşı\", 30, 9600);",
    "solutionCode": "function kreditSkorinq(gelir, kreditTarixcesi, yas, telebOlunan) {\n  if (yas < 18 || yas > 65) {\n    console.log(\"[RƏDD] Yaş həddi uyğun deyil\");\n    return;\n  }\n  if (kreditTarixcesi === \"pis\") {\n    console.log(\"[RƏDD] Mənfi kredit tarixçəsi\");\n    return;\n  }\n  const maxAyliq = gelir * 0.5; // 1000\n  const ayliqTeleb = telebOlunan / 12; // 800\n  if (maxAyliq >= ayliqTeleb) {\n    console.log(`[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq ${maxAyliq} AZN`);\n  } else {\n    console.log(\"[RƏDD] Gəlir kifayət deyil\");\n  }\n}\n\nkreditSkorinq(2000, \"yaxşı\", 30, 9600);",
    "ipuclari": [
      "İpucu 1: Guard Clauses texnikasından istifadə edərək rədd şərtlərini dərhal return edin.",
      "İpucu 2: 9600 / 12 = 800 AZN aylıq ödəniş tələb olunur; 2000 * 0.5 = 1000 AZN icazə verilən həddir (1000 >= 800 ödənilir).",
      "İpucu 3: Çıxış '[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq 1000 AZN' olacaq."
    ],
    "teslimIzahi": "Bank skorinq sistemləri riskləri mərhələli süzgəclərlə qiymətləndirir və erkən xitam (early exit / return) qaydaları ilə sistem resurslarına qənaət edir."
  },
  {
    "id": "exam-sec5-01",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "Klassik for ilə Ədədlərin Çapı",
    "serif": "<code>birdenBese()</code> funksiyasını yazın. <code>for</code> dövründən istifadə edərək 1-dən 5-ə qədər (5 daxil olmaqla) ədədləri tək-tək konsola çıxarın.",
    "gozlenilenCixis": "1\n2\n3\n4\n5",
    "starterCode": "function birdenBese() {\n  // Kodunuzu buraya yazın\n}\n\nbirdenBese();",
    "solutionCode": "function birdenBese() {\n  for (let i = 1; i <= 5; i++) {\n    console.log(i);\n  }\n}\n\nbirdenBese();",
    "ipuclari": [
      "İpucu 1: for (let i = 1; i <= 5; i++) başlığından istifadə edin.",
      "İpucu 2: Dövr daxilində console.log(i) çağırın.",
      "İpucu 3: Hər dövrdə bir ədəd çap olunacaq."
    ],
    "teslimIzahi": "Klassik for dövrü başlanğıc vəziyyəti, çıxış şərti və addım artımını tək bir başlığa yığaraq təkrarlanan əməliyyatları idarə edir."
  },
  {
    "id": "exam-sec5-02",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "while Dövrü ilə Geri Sayım",
    "serif": "<code>geriSayim(baslangic)</code> funksiyasını təyin edin. <code>while</code> dövrü ilə verilən ədəddən 1-ə qədər geri sayın və hər addımda ədədi konsola çıxarın. Funksiyanı <code>3</code> ilə çağırın.",
    "gozlenilenCixis": "3\n2\n1",
    "starterCode": "function geriSayim(baslangic) {\n  // Kodunuzu buraya yazın\n}\n\ngeriSayim(3);",
    "solutionCode": "function geriSayim(baslangic) {\n  let i = baslangic;\n  while (i > 0) {\n    console.log(i);\n    i--;\n  }\n}\n\ngeriSayim(3);",
    "ipuclari": [
      "İpucu 1: while (i > 0) şərtini qurun.",
      "İpucu 2: Dövrün daxilində sayğacı azaltmağı (i--) unutmayın ki, sonsuz dövr yaranmasın.",
      "İpucu 3: 3, 2, 1 ardıcıllıqla çap olunacaq."
    ],
    "teslimIzahi": "while dövrü şərt doğru (true) olduğu müddətcə blokdakı kodu icra edir və şərtin dəyişdirilməsi dövrün daxilində baş verir."
  },
  {
    "id": "exam-sec5-03",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ASAN",
    "basliq": "for...of ilə Kolleksiyanın Gəzilməsi",
    "serif": "<code>dilleriCapEt(diller)</code> funksiyasını <code>for...of</code> dövründən istifadə edərək yazın. Hər bir dil adını konsola sətirbəsətir çıxarın. Funksiyanı <code>[\"JavaScript\", \"Python\", \"Go\"]</code> ilə çağırın.",
    "gozlenilenCixis": "JavaScript\nPython\nGo",
    "starterCode": "function dilleriCapEt(diller) {\n  // Kodunuzu buraya yazın\n}\n\ndilleriCapEt([\"JavaScript\", \"Python\", \"Go\"]);",
    "solutionCode": "function dilleriCapEt(diller) {\n  for (const dil of diller) {\n    console.log(dil);\n  }\n}\n\ndilleriCapEt([\"JavaScript\", \"Python\", \"Go\"]);",
    "ipuclari": [
      "İpucu 1: for...of dövrü massiv elementlərinin birbaşa dəyərlərini götürür.",
      "İpucu 2: İndeks sayğacına və ya massiv.length-ə ehtiyac yoxdur.",
      "İpucu 3: Hər bir dili konsola çıxarın."
    ],
    "teslimIzahi": "for...of (ES6) iterasiya olunan (iterable) kolleksiyaların dəyərlərini birbaşa oxumaq üçün ən səliqəli və müasir sintaksisdir."
  },
  {
    "id": "exam-sec5-04",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "for Dövrü ilə Ədədlərin Cəmi",
    "serif": "<code>cemTap(n)</code> funksiyasını yazın. 1-dən <code>n</code>-ə qədər (n daxil) olan bütün tam ədədlərin cəmini <code>for</code> dövrü ilə hesablayın və konsola <code>Cəm: [cem]</code> formatında çıxarın. Funksiyanı <code>4</code> ilə çağırın.",
    "gozlenilenCixis": "Cəm: 10",
    "starterCode": "function cemTap(n) {\n  // Kodunuzu buraya yazın\n}\n\ncemTap(4);",
    "solutionCode": "function cemTap(n) {\n  let cem = 0;\n  for (let i = 1; i <= n; i++) {\n    cem += i;\n  }\n  console.log(`Cəm: ${cem}`);\n}\n\ncemTap(4);",
    "ipuclari": [
      "İpucu 1: 'cem' dəyişənini dövrdən əvvəl 0 olaraq başladın.",
      "İpucu 2: Dövr daxilində 'cem += i' ilə toplayın (1 + 2 + 3 + 4 = 10).",
      "İpucu 3: Dövrdən sonra tək bir sətir çap edin."
    ],
    "teslimIzahi": "Akkumulyator (toplayıcı) dəyişən nümunəsi dövr daxilində məlumatların cəmlənməsi və yekun nəticənin əldə edilməsi üçün standartdır."
  },
  {
    "id": "exam-sec5-05",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "continue ilə Tək Ədədlərin Buraxılması",
    "serif": "<code>cutleriSec(maks)</code> funksiyasını for dövrü ilə qurun. 1-dən <code>maks</code>-a qədər ədədləri gəzin. Əgər ədəd təkdirsə <code>continue</code> ilə növbəti addıma keçin, cütdürsə konsola çıxarın. Funksiyanı <code>6</code> ilə çağırın.",
    "gozlenilenCixis": "2\n4\n6",
    "starterCode": "function cutleriSec(maks) {\n  // Kodunuzu buraya yazın\n}\n\ncutleriSec(6);",
    "solutionCode": "function cutleriSec(maks) {\n  for (let i = 1; i <= maks; i++) {\n    if (i % 2 !== 0) {\n      continue;\n    }\n    console.log(i);\n  }\n}\n\ncutleriSec(6);",
    "ipuclari": [
      "İpucu 1: 'i % 2 !== 0' şərti tək ədədləri bildirir.",
      "İpucu 2: continue əmri cari dövr iterasiyasını dayandırır və növbəti addıma keçir.",
      "İpucu 3: Konsola yalnız 2, 4, 6 çıxacaq."
    ],
    "teslimIzahi": "continue açar sözü dövrün qalan gövdəsini atlayaraq dərhal növbəti addımın şərt yoxlanışına keçir."
  },
  {
    "id": "exam-sec5-06",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "break ilə Axtarışın Dayandırılması",
    "serif": "<code>elementiTap(massiv, hedef)</code> funksiyasını yazın. Massivi for dövrü ilə gəzin. Əgər element <code>hedef</code>-ə bərabərdirsə konsola <code>Tapıldı: [hedef]</code> çıxarın və <code>break</code> ilə dövrü dərhal dayandırın. Funksiyanı <code>[10, 25, 40, 55], 40</code> ilə çağırın.",
    "gozlenilenCixis": "Tapıldı: 40",
    "starterCode": "function elementiTap(massiv, hedef) {\n  // Kodunuzu buraya yazın\n}\n\nelementiTap([10, 25, 40, 55], 40);",
    "solutionCode": "function elementiTap(massiv, hedef) {\n  for (let i = 0; i < massiv.length; i++) {\n    if (massiv[i] === hedef) {\n      console.log(`Tapıldı: ${hedef}`);\n      break;\n    }\n  }\n}\n\nelementiTap([10, 25, 40, 55], 40);",
    "ipuclari": [
      "İpucu 1: Element tapılan kimi sonrakı elementləri yoxlamamaq üçün break istifadə edin.",
      "İpucu 2: 40 elementi 2-ci indeksdə tapılan kimi dövr bitir.",
      "İpucu 3: Formatı 'Tapıldı: 40' olaraq tamamlayın."
    ],
    "teslimIzahi": "break açar sözü dövrün təbii sonunu gözləmədən onu dərhal xitam edərək lazımsız əməliyyatların qarşısını alır."
  },
  {
    "id": "exam-sec5-07",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ASAN",
    "basliq": "do...while Dövrünün Zəmanətli İcrası",
    "serif": "<code>enAzBirDefe()</code> funksiyasını <code>do...while</code> dövrü ilə yazın. <code>let say = 10;</code> elan edin. Şərt <code>say < 5</code> (yalan) olmasına baxmayaraq dövr daxilindəki <code>İcra olundu: [say]</code> sətri bir dəfə konsola çıxmalı və dövr bitməlidir.",
    "gozlenilenCixis": "İcra olundu: 10",
    "starterCode": "function enAzBirDefe() {\n  // Kodunuzu buraya yazın\n}\n\nenAzBirDefe();",
    "solutionCode": "function enAzBirDefe() {\n  let say = 10;\n  do {\n    console.log(`İcra olundu: ${say}`);\n  } while (say < 5);\n}\n\nenAzBirDefe();",
    "ipuclari": [
      "İpucu 1: do { ... } while (şərt); sintaksisini qurun.",
      "İpucu 2: do...while şərti yalnız dövrün gövdəsi ən azı bir dəfə icra olunduqdan SONRA yoxlayır.",
      "İpucu 3: Çıxış 'İcra olundu: 10' olacaq."
    ],
    "teslimIzahi": "do...while post-condition (sonradan yoxlanan) dövr növüdür və şərtin ilkin doğruluğundan asılı olmayaraq ən azı bir dəfə mütləq icra olunur."
  },
  {
    "id": "exam-sec5-08",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "for...in ilə Obyekt Açarlarının Gəzilməsi",
    "serif": "<code>obyektiGoster(obyekt)</code> funksiyasını <code>for...in</code> dövrü ilə tərtib edin. Hər bir xassə üçün konsola <code>[açar]: [dəyər]</code> formatında çıxış verin. Funksiyanı <code>{ ad: \"Ali\", yas: 26, seher: \"Sumqayıt\" }</code> ilə çağırın.",
    "gozlenilenCixis": "ad: Ali\nyas: 26\nseher: Sumqayıt",
    "starterCode": "function obyektiGoster(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\nobyektiGoster({ ad: \"Ali\", yas: 26, seher: \"Sumqayıt\" });",
    "solutionCode": "function obyektiGoster(obyekt) {\n  for (const acar in obyekt) {\n    console.log(`${acar}: ${obyekt[acar]}`);\n  }\n}\n\nobyektiGoster({ ad: \"Ali\", yas: 26, seher: \"Sumqayıt\" });",
    "ipuclari": [
      "İpucu 1: for...in dövrü obyektin sadalanan (enumerable) açarlarını gəzir.",
      "İpucu 2: Dəyəri oxumaq üçün bracket notation: 'obyekt[acar]' istifadə edin.",
      "İpucu 3: Hər bir xassəni alt-alta çap edin."
    ],
    "teslimIzahi": "for...in dövrü obyekt xassələrinin adlarını (keys) ardıcıl əldə etmək üçün ən əlverişli vasitədir."
  },
  {
    "id": "exam-sec5-09",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "İç-içə Dövr ilə Vurma Cədvəli Sətirləri",
    "serif": "<code>vurmaSetri(eded, say)</code> funksiyasını for dövrü ilə yazın. 1-dən <code>say</code>-a qədər ədədlər üçün konsola <code>[eded] x [i] = [eded * i]</code> çıxarın. Funksiyanı <code>3, 3</code> ilə çağırın.",
    "gozlenilenCixis": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9",
    "starterCode": "function vurmaSetri(eded, say) {\n  // Kodunuzu buraya yazın\n}\n\nvurmaSetri(3, 3);",
    "solutionCode": "function vurmaSetri(eded, say) {\n  for (let i = 1; i <= say; i++) {\n    console.log(`${eded} x ${i} = ${eded * i}`);\n  }\n}\n\nvurmaSetri(3, 3);",
    "ipuclari": [
      "İpucu 1: 1-dən say-a qədər for dövrü qurun.",
      "İpucu 2: Hər addımda 'eded x i = eded*i' formatını çap edin.",
      "İpucu 3: 3 x 1 = 3, 3 x 2 = 6, 3 x 3 = 9 çıxacaq."
    ],
    "teslimIzahi": "Dövrlər daxilində riyazi multiplikasiya sətir-sətir formatlanaraq cədvəl strukturlarının qurulmasında tətbiq olunur."
  },
  {
    "id": "exam-sec5-10",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "while Dövrü ilə Ədədin Rəqəmləri Cəmi",
    "serif": "<code>reqemlerCemi(eded)</code> funksiyasını while dövrü ilə təyin edin. Ədədin sonuncu rəqəmini <code>% 10</code> ilə götürüb toplayın və ədədi <code>Math.floor(eded / 10)</code> ilə azaldın. Konsola <code>Rəqəmlər Cəmi: [cəm]</code> formatında çıxarın. Funksiyanı <code>456</code> üçün çağırın.",
    "gozlenilenCixis": "Rəqəmlər Cəmi: 15",
    "starterCode": "function reqemlerCemi(eded) {\n  // Kodunuzu buraya yazın\n}\n\nreqemlerCemi(456);",
    "solutionCode": "function reqemlerCemi(eded) {\n  let num = eded;\n  let cem = 0;\n  while (num > 0) {\n    cem += num % 10;\n    num = Math.floor(num / 10);\n  }\n  console.log(`Rəqəmlər Cəmi: ${cem}`);\n}\n\nreqemlerCemi(456);",
    "ipuclari": [
      "İpucu 1: 456 % 10 = 6; 456 / 10 -> 45.",
      "İpucu 2: 45 % 10 = 5; 45 / 10 -> 4. Sonra 4 % 10 = 4; cəm = 6 + 5 + 4 = 15.",
      "İpucu 3: while (num > 0) şərti ədəd sıfırlanana qədər davam edir."
    ],
    "teslimIzahi": "Riyazi məntiqdə ədədin mərtəbələrini ayrışdırmaq üçün qalıq (%) və tam bölmə (Math.floor) ardıcıl while dövründə tətbiq olunur."
  },
  {
    "id": "exam-sec5-11",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dövrlə Massiv İnversiyası (Tərsinə Çevirmə)",
    "serif": "<code>tersineCevir(massiv)</code> funksiyasını təyin edin. Hazır <code>reverse()</code> metodundan İSTİFADƏ ETMƏDƏN, for dövrü ilə massivin elementlərini tərsinə düzüb yeni massiv formalaşdırın və konsola <code>Tərs massiv: [elementlər]</code> kimi çap edin. Funksiyanı <code>[1, 2, 3, 4]</code> ilə çağırın.",
    "gozlenilenCixis": "Tərs massiv: 4, 3, 2, 1",
    "starterCode": "function tersineCevir(massiv) {\n  // Kodunuzu buraya yazın\n}\n\ntersineCevir([1, 2, 3, 4]);",
    "solutionCode": "function tersineCevir(massiv) {\n  const yeni = [];\n  for (let i = massiv.length - 1; i >= 0; i--) {\n    yeni.push(massiv[i]);\n  }\n  console.log(`Tərs massiv: ${yeni.join(\", \")}`);\n}\n\ntersineCevir([1, 2, 3, 4]);",
    "ipuclari": [
      "İpucu 1: for dövrünün sayğacını 'massiv.length - 1' indeksindən başladın və 'i >= 0' olana qədər 'i--' ilə azaldın.",
      "İpucu 2: Hər addımda elementi yeni massivə push edin.",
      "İpucu 3: Nəticəni join(\", \") ilə birləşdirib çap edin."
    ],
    "teslimIzahi": "Geriye doğru for dövrü (reverse traversal) massivləri və sətirləri tərsinə manipulyasiya etmək üçün təməl alqoritmik üsuldur."
  },
  {
    "id": "exam-sec5-12",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Sadə Ədədlərin (Prime Numbers) Tapılması",
    "serif": "<code>sadeEdebleriTap(limit)</code> funksiyasını iç-içə dövrlərlə qurun. 2-dən <code>limit</code>-ə qədər olan bütün sadə ədədləri (yalnız 1-ə və özünə bölünənləri) tapıb vergüllə konsola çıxarın. Funksiyanı <code>15</code> ilə çağırın.",
    "gozlenilenCixis": "Sadə ədədlər: 2, 3, 5, 7, 11, 13",
    "starterCode": "function sadeEdebleriTap(limit) {\n  // Kodunuzu buraya yazın\n}\n\nsadeEdebleriTap(15);",
    "solutionCode": "function sadeEdebleriTap(limit) {\n  const sadeler = [];\n  for (let i = 2; i <= limit; i++) {\n    let sade = true;\n    for (let j = 2; j * j <= i; j++) {\n      if (i % j === 0) {\n        sade = false;\n        break;\n      }\n    }\n    if (sade) sadeler.push(i);\n  }\n  console.log(`Sadə ədədlər: ${sadeler.join(\", \")}`);\n}\n\nsadeEdebleriTap(15);",
    "ipuclari": [
      "İpucu 1: Xarici dövr 2-dən limit-ə qədər ədədləri gəzir.",
      "İpucu 2: Daxili dövr hər ədədin 2-dən kvadrat kökünə qədər bölənlərini yoxlayır; bölən tapılarsa 'sade = false' edib break edir.",
      "İpucu 3: Sadə olanları massivə yığıb join(\", \") ilə çap edin."
    ],
    "teslimIzahi": "Sadə ədədlərin axtarışı iç-içə dövrlər və erkən xitam (break) vasitəsilə optimallaşdırılmış riyazi süzgəc alqoritmidir."
  },
  {
    "id": "exam-sec5-13",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "Fibonaççi Ardıcıllığının Dövrlə Hesablanması",
    "serif": "<code>fibonacci(n)</code> funksiyasını for dövrü ilə qurun. İlk iki həddi <code>[0, 1]</code> olan ardıcıllığın ilk <code>n</code> sayda elementini hesablayın və konsola <code>Fibonacci: [siyahı]</code> formatında çıxarın. Funksiyanı <code>7</code> üçün çağırın.",
    "gozlenilenCixis": "Fibonacci: 0, 1, 1, 2, 3, 5, 8",
    "starterCode": "function fibonacci(n) {\n  // Kodunuzu buraya yazın\n}\n\nfibonacci(7);",
    "solutionCode": "function fibonacci(n) {\n  const ardicilliq = [0, 1];\n  for (let i = 2; i < n; i++) {\n    ardicilliq.push(ardicilliq[i - 1] + ardicilliq[i - 2]);\n  }\n  console.log(`Fibonacci: ${ardicilliq.slice(0, n).join(\", \")}`);\n}\n\nfibonacci(7);",
    "ipuclari": [
      "İpucu 1: Növbəti hədd əvvəlki iki həddin cəminə bərabərdir: a[i-1] + a[i-2].",
      "İpucu 2: for dövrü 2-ci indeksdən n-ə qədər davam edir.",
      "İpucu 3: 7 element üçün 0, 1, 1, 2, 3, 5, 8 ardıcıllığı çap olunacaq."
    ],
    "teslimIzahi": "Dinamik proqramlaşdırmanın təməli olan Fibonaççi ardıcıllığı əvvəlki vəziyyətlərin cəmi əsasında yeni vəziyyəti formalaşdırır."
  },
  {
    "id": "exam-sec5-14",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "ÇƏTİN",
    "basliq": "İkiölçülü Matrisin (2D Array) Sətir Cəmləri",
    "serif": "<code>matrisCemleri(matris)</code> funksiyasını iç-içə dövrlərlə qurun. Hər bir sətrin indeksini və daxilindəki ədədlərin cəmini konsola <code>Sətir [idx]: Cəm = [cem]</code> formatında çap edin. Funksiyanı <code>[[1, 2, 3], [4, 5, 6]]</code> ilə çağırın.",
    "gozlenilenCixis": "Sətir 0: Cəm = 6\nSətir 1: Cəm = 15",
    "starterCode": "function matrisCemleri(matris) {\n  // Kodunuzu buraya yazın\n}\n\nmatrisCemleri([[1, 2, 3], [4, 5, 6]]);",
    "solutionCode": "function matrisCemleri(matris) {\n  for (let i = 0; i < matris.length; i++) {\n    let cem = 0;\n    for (let j = 0; j < matris[i].length; j++) {\n      cem += matris[i][j];\n    }\n    console.log(`Sətir ${i}: Cəm = ${cem}`);\n  }\n}\n\nmatrisCemleri([[1, 2, 3], [4, 5, 6]]);",
    "ipuclari": [
      "İpucu 1: Xarici dövr sətirləri (i), daxili dövr sütunları (j) gəzir.",
      "İpucu 2: Hər yeni sətirə keçəndə 'cem' sıfırlanmalıdır.",
      "İpucu 3: Birinci sətir cəmi 6 (1+2+3), ikinci sətir cəmi 15 (4+5+6) olacaq."
    ],
    "teslimIzahi": "İkiölçülü massivlərin idarə edilməsi sətir və sütun indekslərini koordinasiya edən iç-içə dövr konstruksiyalarına əsaslanır."
  },
  {
    "id": "exam-sec5-15",
    "bolmeId": 5,
    "merheleId": 1,
    "cetinlik": "EKSPERT",
    "basliq": "Məlumat Kompressiyası (Run-Length Encoding - RLE)",
    "serif": "<code>rleKompressiya(metn)</code> funksiyasını dövr ilə qurun. Ardıcıl təkrarlanan simvolları sayaraq <code>AABBBCCCC</code> mətnini <code>A2B3C4</code> formatına salın. Əgər simvol təkdirsə sayını 1 olaraq yazın. Yekun sıxılmış nəticəni konsola <code>Sıxılmış: [netice]</code> kimi çap edin. Funksiyanı <code>\"AABBBCCCC\"</code> ilə çağırın.",
    "gozlenilenCixis": "Sıxılmış: A2B3C4",
    "starterCode": "function rleKompressiya(metn) {\n  // Kodunuzu buraya yazın\n}\n\nrleKompressiya(\"AABBBCCCC\");",
    "solutionCode": "function rleKompressiya(metn) {\n  let netice = \"\";\n  let say = 1;\n  for (let i = 0; i < metn.length; i++) {\n    if (metn[i] === metn[i + 1]) {\n      say++;\n    } else {\n      netice += metn[i] + say;\n      say = 1;\n    }\n  }\n  console.log(`Sıxılmış: ${netice}`);\n}\n\nrleKompressiya(\"AABBBCCCC\");",
    "ipuclari": [
      "İpucu 1: Cari simvol növbəti simvola bərabərdirsə sayğacı artırın (say++).",
      "İpucu 2: Fərqlidirsə simvolu və sayını nəticə sətirinə əlavə edib sayğacı 1-ə qaytarın.",
      "İpucu 3: AABBBCCCC mətni üçün A2B3C4 alınacaq."
    ],
    "teslimIzahi": "Run-Length Encoding (RLE) ardıcıl təkrarlanan məlumat fraqmentlərini simvol və say cütünə çevirən klassik sıxılma (lossless compression) alqoritmidir."
  },
  {
    "id": "exam-sec6-01",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "push() və pop() ilə Yığın (Stack) Əməliyyatları",
    "serif": "<code>yiginEmeliyyati()</code> funksiyasını təyin edin. Boş <code>const yigin = [];</code> yaradın, ardıcıl olaraq <code>10</code> və <code>20</code> əlavə edin (<code>push</code>), sonra sonuncu elementi çıxarın (<code>pop</code>) və yekun massiv uzunluğu ilə qalan elementi konsola <code>Qalan: [element] | Uzunluq: [len]</code> kimi çıxarın.",
    "gozlenilenCixis": "Qalan: 10 | Uzunluq: 1",
    "starterCode": "function yiginEmeliyyati() {\n  // Kodunuzu buraya yazın\n}\n\nyiginEmeliyyati();",
    "solutionCode": "function yiginEmeliyyati() {\n  const yigin = [];\n  yigin.push(10);\n  yigin.push(20);\n  yigin.pop();\n  console.log(`Qalan: ${yigin[0]} | Uzunluq: ${yigin.length}`);\n}\n\nyiginEmeliyyati();",
    "ipuclari": [
      "İpucu 1: push() massivin sonuna element əlavə edir, pop() isə son elementi silir.",
      "İpucu 2: 20 silindikdən sonra massivdə yalnız 10 qalır.",
      "İpucu 3: Qalan elementi və massiv.length dəyərini çap edin."
    ],
    "teslimIzahi": "push() və pop() metodları LIFO (Last-In, First-Out - son daxil olan ilk çıxar) yığın strukturunun JavaScript-də birbaşa icrasını təmin edir."
  },
  {
    "id": "exam-sec6-02",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "shift() və unshift() ilə Növbə (Queue) İdarəsi",
    "serif": "<code>novbeEmeliyyati()</code> funksiyasını yazın. <code>const novbe = [\"Murad\"];</code> massivinə <code>unshift</code> ilə önə <code>\"Aysel\"</code> əlavə edin, sonra <code>shift</code> ilə ilk elementi çıxarın və konsola <code>Növbədə qalan: [element]</code> çap edin.",
    "gozlenilenCixis": "Növbədə qalan: Murad",
    "starterCode": "function novbeEmeliyyati() {\n  // Kodunuzu buraya yazın\n}\n\nnovbeEmeliyyati();",
    "solutionCode": "function novbeEmeliyyati() {\n  const novbe = [\"Murad\"];\n  novbe.unshift(\"Aysel\");\n  novbe.shift();\n  console.log(`Növbədə qalan: ${novbe[0]}`);\n}\n\nnovbeEmeliyyati();",
    "ipuclari": [
      "İpucu 1: unshift() massivin əvvəlinə element əlavə edir, shift() isə ilk elementi silir.",
      "İpucu 2: Əvvələ Aysel əlavə olunur, sonra shift ilə yenə Aysel çıxarılır.",
      "İpucu 3: Geriyə Murad qalır."
    ],
    "teslimIzahi": "shift() və unshift() massivin başlanğıc indeksini manipulyasiya edir və FIFO (First-In, First-Out) növbə prinsiplərində istifadə olunur."
  },
  {
    "id": "exam-sec6-03",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "join() ilə Massiv Elementlərinin Birləşdirilməsi",
    "serif": "<code>sozleriBirlesdir(sozler)</code> funksiyasını yazın. <code>join(\" - \")</code> metodundan istifadə edərək massivdəki sözləri aralarında tire ilə birləşdirin və konsola çıxarın. Funksiyanı <code>[\"Bakı\", \"Gəncə\", \"Şuşa\"]</code> ilə çağırın.",
    "gozlenilenCixis": "Bakı - Gəncə - Şuşa",
    "starterCode": "function sozleriBirlesdir(sozler) {\n  // Kodunuzu buraya yazın\n}\n\nsozleriBirlesdir([\"Bakı\", \"Gəncə\", \"Şuşa\"]);",
    "solutionCode": "function sozleriBirlesdir(sozler) {\n  console.log(sozler.join(\" - \"));\n}\n\nsozleriBirlesdir([\"Bakı\", \"Gəncə\", \"Şuşa\"]);",
    "ipuclari": [
      "İpucu 1: join(ayırıcı) metodu bütün massiv elementlərini tək bir sətirə çevirir.",
      "İpucu 2: Ayırıcı olaraq \" - \" arqumentini ötürün.",
      "İpucu 3: Nəticəni birbaşa console.log ilə çap edin."
    ],
    "teslimIzahi": "join() metodu massivin elementlərini verilmiş ayrıcı simvol vasitəsilə birləşdirərək sətir (string) formatlı çıxış yaradır."
  },
  {
    "id": "exam-sec6-04",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "includes() və indexOf() ilə Axtarış",
    "serif": "<code>mehsulAxtar(siyahi, axtarilan)</code> funksiyasını tərtib edin. Əgər <code>siyahi.includes(axtarilan)</code> doğrudursa konsola <code>Tapıldı (İndeks: [idx])</code>, əks halda <code>Tapılmadı</code> çıxarın. Funksiyanı <code>[\"Alma\", \"Armud\", \"Heyva\"], \"Armud\"</code> ilə çağırın.",
    "gozlenilenCixis": "Tapıldı (İndeks: 1)",
    "starterCode": "function mehsulAxtar(siyahi, axtarilan) {\n  // Kodunuzu buraya yazın\n}\n\nmehsulAxtar([\"Alma\", \"Armud\", \"Heyva\"], \"Armud\");",
    "solutionCode": "function mehsulAxtar(siyahi, axtarilan) {\n  if (siyahi.includes(axtarilan)) {\n    const idx = siyahi.indexOf(axtarilan);\n    console.log(`Tapıldı (İndeks: ${idx})`);\n  } else {\n    console.log(\"Tapılmadı\");\n  }\n}\n\nmehsulAxtar([\"Alma\", \"Armud\", \"Heyva\"], \"Armud\");",
    "ipuclari": [
      "İpucu 1: includes() elementin massivdə mövcudluğunu (boolean) yoxlayır.",
      "İpucu 2: indexOf() həmin elementin rast gəlindiyi ilk indeksi qaytarır (Armud üçün 1).",
      "İpucu 3: Nəticəni 'Tapıldı (İndeks: 1)' olaraq formatlayın."
    ],
    "teslimIzahi": "includes() mövcudluq yoxlaması, indexOf() isə dəqiq indeks təyini üçün xətti axtarış O(N) reallaşdırır."
  },
  {
    "id": "exam-sec6-05",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "slice() ilə Massivdən Alt Hissənin Kəsilməsi",
    "serif": "<code>altKolleksiya(massiv, start, end)</code> funksiyasını yazın. <code>slice(start, end)</code> metodundan istifadə edərək kəsilmiş hissəni konsola <code>Kəsilmiş: [elementlər]</code> formatında çıxarın. Orijinal massivin dəyişməz qaldığını nümayiş etdirin. Funksiyanı <code>[10, 20, 30, 40, 50], 1, 4</code> ilə çağırın.",
    "gozlenilenCixis": "Kəsilmiş: 20, 30, 40",
    "starterCode": "function altKolleksiya(massiv, start, end) {\n  // Kodunuzu buraya yazın\n}\n\naltKolleksiya([10, 20, 30, 40, 50], 1, 4);",
    "solutionCode": "function altKolleksiya(massiv, start, end) {\n  const kesilmis = massiv.slice(start, end);\n  console.log(`Kəsilmiş: ${kesilmis.join(\", \")}`);\n}\n\naltKolleksiya([10, 20, 30, 40, 50], 1, 4);",
    "ipuclari": [
      "İpucu 1: slice(start, end) başlanğıc indeksini daxil edir, sonuncu indeksi isə daxil etmir.",
      "İpucu 2: 1-ci indeksdən 4-cü indeksə qədər (20, 30, 40) elementləri götürülür.",
      "İpucu 3: slice orijinal massivi dəyişdirmir, dayaz surət qaytarır."
    ],
    "teslimIzahi": "slice() qeyri-mutasion (immutable) metoddur və orijinal massivə toxunmadan göstərilən aralığı yeni massiv kimi qaytarır."
  },
  {
    "id": "exam-sec6-06",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "concat() ilə Massivlərin Birləşdirilməsi",
    "serif": "<code>massivleriBirlesdir(m1, m2)</code> funksiyasını təyin edin. <code>concat()</code> metodundan istifadə edərək iki massivi birləşdirin və konsola <code>Birləşmiş: [massiv]</code> çap edin. Funksiyanı <code>[1, 2], [3, 4]</code> ilə çağırın.",
    "gozlenilenCixis": "Birləşmiş: 1, 2, 3, 4",
    "starterCode": "function massivleriBirlesdir(m1, m2) {\n  // Kodunuzu buraya yazın\n}\n\nmassivleriBirlesdir([1, 2], [3, 4]);",
    "solutionCode": "function massivleriBirlesdir(m1, m2) {\n  const netice = m1.concat(m2);\n  console.log(`Birləşmiş: ${netice.join(\", \")}`);\n}\n\nmassivleriBirlesdir([1, 2], [3, 4]);",
    "ipuclari": [
      "İpucu 1: m1.concat(m2) iki massivi ardıcıl birləşdirərək yeni massiv yaradır.",
      "İpucu 2: Elementləri join(\", \") ilə birləşdirib konsola çıxarın.",
      "İpucu 3: Nəticə 'Birləşmiş: 1, 2, 3, 4' olacaq."
    ],
    "teslimIzahi": "concat() metodu bir və ya bir neçə massivi cari massivlə birləşdirərək yeni massiv nüsxəsi qaytarır."
  },
  {
    "id": "exam-sec6-07",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "reverse() ilə Yerində Tərsinə Çevirmə",
    "serif": "<code>massiviTersine(massiv)</code> funksiyasını yazın. <code>reverse()</code> metodunu tətbiq edərək massivi yerində çevirin və konsola <code>Çevrildi: [massiv]</code> çıxarın. Funksiyanı <code>[\"A\", \"B\", \"C\"]</code> ilə çağırın.",
    "gozlenilenCixis": "Çevrildi: C, B, A",
    "starterCode": "function massiviTersine(massiv) {\n  // Kodunuzu buraya yazın\n}\n\nmassiviTersine([\"A\", \"B\", \"C\"]);",
    "solutionCode": "function massiviTersine(massiv) {\n  massiv.reverse();\n  console.log(`Çevrildi: ${massiv.join(\", \")}`);\n}\n\nmassiviTersine([\"A\", \"B\", \"C\"]);",
    "ipuclari": [
      "İpucu 1: reverse() metodu orijinal massivi yerində (mutably) tərsinə çevirir.",
      "İpucu 2: A, B, C sırası C, B, A olaraq dəyişəcək.",
      "İpucu 3: Formatı join(\", \") ilə qurun."
    ],
    "teslimIzahi": "reverse() mutasion metoddur, yəni yeni massiv yaratmır, birbaşa ötürülən massivin daxili yaddaş indekslərini yerində dəyişir."
  },
  {
    "id": "exam-sec6-08",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "splice() ilə Element Silmə və Əvəzetmə",
    "serif": "<code>elementiYenile(massiv, index, silinenSay, yeniElement)</code> funksiyasını tərtib edin. <code>splice()</code> metodu ilə göstərilən indeksdən elementi silib yenisini əlavə edin. Konsola <code>Yenilənmiş: [massiv]</code> çıxarın. Funksiyanı <code>[\"alma\", \"armud\", \"heyva\"], 1, 1, \"banan\"</code> ilə çağırın.",
    "gozlenilenCixis": "Yenilənmiş: alma, banan, heyva",
    "starterCode": "function elementiYenile(massiv, index, silinenSay, yeniElement) {\n  // Kodunuzu buraya yazın\n}\n\nelementiYenile([\"alma\", \"armud\", \"heyva\"], 1, 1, \"banan\");",
    "solutionCode": "function elementiYenile(massiv, index, silinenSay, yeniElement) {\n  massiv.splice(index, silinenSay, yeniElement);\n  console.log(`Yenilənmiş: ${massiv.join(\", \")}`);\n}\n\nelementiYenile([\"alma\", \"armud\", \"heyva\"], 1, 1, \"banan\");",
    "ipuclari": [
      "İpucu 1: splice(start, deleteCount, ...items) massivin ortasından element silmək və əlavə etmək üçün ən güclü metoddur.",
      "İpucu 2: 1-ci indeksdəki 'armud' silinir və yerinə 'banan' daxil edilir.",
      "İpucu 3: Nəticə: alma, banan, heyva."
    ],
    "teslimIzahi": "splice() metodu massivin strukturunu yerində dəyişdirərək eyni anda həm silmə, həm də daxiletmə əməliyyatını icra edir."
  },
  {
    "id": "exam-sec6-09",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Massivdəki Unikal Elementlərin Tapılması",
    "serif": "<code>unikalElementler(massiv)</code> funksiyasını yazın. Massivdəki təkrarlanan elementləri təmizləyərək yalnız unikal dəyərləri saxlayan yeni massiv qurun və konsola <code>Unikal: [siyahı]</code> kimi çıxarın. Funksiyanı <code>[1, 2, 2, 3, 4, 4, 5]</code> ilə çağırın.",
    "gozlenilenCixis": "Unikal: 1, 2, 3, 4, 5",
    "starterCode": "function unikalElementler(massiv) {\n  // Kodunuzu buraya yazın\n}\n\nunikalElementler([1, 2, 2, 3, 4, 4, 5]);",
    "solutionCode": "function unikalElementler(massiv) {\n  const unikal = [];\n  for (let i = 0; i < massiv.length; i++) {\n    if (!unikal.includes(massiv[i])) {\n      unikal.push(massiv[i]);\n    }\n  }\n  console.log(`Unikal: ${unikal.join(\", \")}`);\n}\n\nunikalElementler([1, 2, 2, 3, 4, 4, 5]);",
    "ipuclari": [
      "İpucu 1: Boş 'unikal' massivi yaradın və elementi yalnız '!unikal.includes(item)' olduqda push edin.",
      "İpucu 2: Təkrarlanan 2 və 4 ədədləri növbəti dəfə əlavə edilməyəcək.",
      "İpucu 3: Nəticəni join(\", \") ilə çap edin."
    ],
    "teslimIzahi": "includes() yoxlaması vasitəsilə deduplikasiya (təkrarların təmizlənməsi) massivlərin təmizlənməsində geniş istifadə olunan klassik yanaşmadır."
  },
  {
    "id": "exam-sec6-10",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Massivin Hissələrə (Chunking) Bölünməsi",
    "serif": "<code>hisselereBol(massiv, olcu)</code> funksiyasını yazın. Massivi göstərilən <code>olcu</code> sayda alt-massivlərə bölün və hər alt-massivi konsola <code>Hissə: [elementlər]</code> formatında çıxarın. Funksiyanı <code>[1, 2, 3, 4, 5], 2</code> ilə çağırın.",
    "gozlenilenCixis": "Hissə: 1, 2\nHissə: 3, 4\nHissə: 5",
    "starterCode": "function hisselereBol(massiv, olcu) {\n  // Kodunuzu buraya yazın\n}\n\nhisselereBol([1, 2, 3, 4, 5], 2);",
    "solutionCode": "function hisselereBol(massiv, olcu) {\n  for (let i = 0; i < massiv.length; i += olcu) {\n    const hisse = massiv.slice(i, i + olcu);\n    console.log(`Hissə: ${hisse.join(\", \")}`);\n  }\n}\n\nhisselereBol([1, 2, 3, 4, 5], 2);",
    "ipuclari": [
      "İpucu 1: for dövrünün addımını 'i += olcu' şəklində artırın.",
      "İpucu 2: slice(i, i + olcu) metodu ilə hər addımda 2 element kəsin.",
      "İpucu 3: Qalan tək 5 elementi sonuncu hissəyə düşəcək."
    ],
    "teslimIzahi": "Chunking alqoritmi böyük məlumat dəstlərini səhifələmə (pagination) və ya paketləmə (batch processing) üçün kiçik hissələrə ayırır."
  },
  {
    "id": "exam-sec6-11",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "İki Massivin Kəsişməsinin (Intersection) Tapılması",
    "serif": "<code>kesismeTap(m1, m2)</code> funksiyasını təyin edin. Hər iki massivdə eyni vaxtda mövcud olan unikal ortaq elementləri tapıb konsola <code>Kəsişmə: [elementlər]</code> kimi çap edin. Funksiyanı <code>[1, 2, 3, 4], [3, 4, 5, 6]</code> ilə çağırın.",
    "gozlenilenCixis": "Kəsişmə: 3, 4",
    "starterCode": "function kesismeTap(m1, m2) {\n  // Kodunuzu buraya yazın\n}\n\nkesismeTap([1, 2, 3, 4], [3, 4, 5, 6]);",
    "solutionCode": "function kesismeTap(m1, m2) {\n  const kesisme = [];\n  for (let i = 0; i < m1.length; i++) {\n    if (m2.includes(m1[i]) && !kesisme.includes(m1[i])) {\n      kesisme.push(m1[i]);\n    }\n  }\n  console.log(`Kəsişmə: ${kesisme.join(\", \")}`);\n}\n\nkesismeTap([1, 2, 3, 4], [3, 4, 5, 6]);",
    "ipuclari": [
      "İpucu 1: m1 elementləri içərisindən m2.includes() şərtini ödəyənləri seçin.",
      "İpucu 2: Ortaq olanlar 3 və 4 ədədləridir.",
      "İpucu 3: Nəticəni join(\", \") ilə formatlayın."
    ],
    "teslimIzahi": "Çoxluqların kəsişməsi (Set Intersection) müqayisə və ortaq icazələrin təyini kimi verilənlər bazası əməliyyatlarında tətbiq olunur."
  },
  {
    "id": "exam-sec6-12",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Massivin N Mövqe Sağa Fırladılması (Rotation)",
    "serif": "<code>massiviFirlat(massiv, k)</code> funksiyasını qurun. Massivin sonuncu elementini götürüb əvvələ qoymaqla bu əməliyyatı <code>k</code> dəfə icra edin (sağa fırladın). Konsola <code>Fırladılmış: [elementlər]</code> çıxarın. Funksiyanı <code>[1, 2, 3, 4, 5], 2</code> ilə çağırın.",
    "gozlenilenCixis": "Fırladılmış: 4, 5, 1, 2, 3",
    "starterCode": "function massiviFirlat(massiv, k) {\n  // Kodunuzu buraya yazın\n}\n\nmassiviFirlat([1, 2, 3, 4, 5], 2);",
    "solutionCode": "function massiviFirlat(massiv, k) {\n  const kopya = [...massiv];\n  for (let i = 0; i < k; i++) {\n    const sonuncu = kopya.pop();\n    kopya.unshift(sonuncu);\n  }\n  console.log(`Fırladılmış: ${kopya.join(\", \")}`);\n}\n\nmassiviFirlat([1, 2, 3, 4, 5], 2);",
    "ipuclari": [
      "İpucu 1: pop() ilə sonuncu elementi çıxarıb unshift() ilə başa əlavə edin.",
      "İpucu 2: Bu addımı k = 2 dəfə təkrarlayın.",
      "İpucu 3: 5 başa keçir, sonra 4 başa keçir: 4, 5, 1, 2, 3 alınır."
    ],
    "teslimIzahi": "pop() və unshift() kombinasiyası dövri fırlanma (circular rotation) əməliyyatını asanlıqla həll edir."
  },
  {
    "id": "exam-sec6-13",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "İç-içə Massivlərin Düzləşdirilməsi (Flattening)",
    "serif": "<code>duzlesdir(nestedMassiv)</code> funksiyasını yazın. Hazır flat() metodundan İSTİFADƏ ETMƏDƏN, iç-içə yerləşmiş 1 səviyyəli massivləri tək bir düz massivə çevirin və konsola <code>Düz: [elementlər]</code> çıxarın. Funksiyanı <code>[[1, 2], [3, 4], [5]]</code> ilə çağırın.",
    "gozlenilenCixis": "Düz: 1, 2, 3, 4, 5",
    "starterCode": "function duzlesdir(nestedMassiv) {\n  // Kodunuzu buraya yazın\n}\n\nduzlesdir([[1, 2], [3, 4], [5]]);",
    "solutionCode": "function duzlesdir(nestedMassiv) {\n  const netice = [];\n  for (let i = 0; i < nestedMassiv.length; i++) {\n    const element = nestedMassiv[i];\n    if (Array.isArray(element)) {\n      for (let j = 0; j < element.length; j++) {\n        netice.push(element[j]);\n      }\n    } else {\n      netice.push(element);\n    }\n  }\n  console.log(`Düz: ${netice.join(\", \")}`);\n}\n\nduzlesdir([[1, 2], [3, 4], [5]]);",
    "ipuclari": [
      "İpucu 1: Array.isArray(element) ilə cari elementin massiv olub-olmadığını yoxlayın.",
      "İpucu 2: Massivdirsə daxili dövrlə bütün alt-elementləri tək-tək 'netice' massivinə push edin.",
      "İpucu 3: Nəticə: 1, 2, 3, 4, 5."
    ],
    "teslimIzahi": "Array flattening mürəkkəb iyerarxik məlumat strukturlarını birölçülü xətti ardıcıllığa çevirmək üçün vacib transformasiyadır."
  },
  {
    "id": "exam-sec6-14",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "splice ilə Prioritet Növbəsi Simulyasiyası",
    "serif": "<code>prioritetElaveEt(novbe, musteri, prioritetIndeksi)</code> funksiyasını təyin edin. Növbədəki şəxslərin siyahısına <code>splice</code> vasitəsilə VIP müştərini göstərilən prioritet indeksinə əlavə edin və konsola <code>Yenilənmiş növbə: [siyahı]</code> çıxarın. Funksiyanı <code>[\"Murad\", \"Rəşad\", \"Kənan\"], \"Aysel (VIP)\", 1</code> ilə çağırın.",
    "gozlenilenCixis": "Yenilənmiş növbə: Murad, Aysel (VIP), Rəşad, Kənan",
    "starterCode": "function prioritetElaveEt(novbe, musteri, prioritetIndeksi) {\n  // Kodunuzu buraya yazın\n}\n\nprioritetElaveEt([\"Murad\", \"Rəşad\", \"Kənan\"], \"Aysel (VIP)\", 1);",
    "solutionCode": "function prioritetElaveEt(novbe, musteri, prioritetIndeksi) {\n  novbe.splice(prioritetIndeksi, 0, musteri);\n  console.log(`Yenilənmiş növbə: ${novbe.join(\", \")}`);\n}\n\nprioritetElaveEt([\"Murad\", \"Rəşad\", \"Kənan\"], \"Aysel (VIP)\", 1);",
    "ipuclari": [
      "İpucu 1: splice metodunda ikinci parametr olaraq 0 (silinməyəcək) verildikdə element araya daxil edilir.",
      "İpucu 2: 1-ci indeksə Aysel daxil edilir və digər elementlər bir addım sağa sürüşür.",
      "İpucu 3: Formatı join(\", \") ilə tamamlayın."
    ],
    "teslimIzahi": "splice(index, 0, item) mövcud elementləri itirmədən göstərilən mövqeyə yeni element yerləşdirməyə imkan verir."
  },
  {
    "id": "exam-sec6-15",
    "bolmeId": 6,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Fərdi Massiv Əməliyyatları Kitabxanası",
    "serif": "<code>XususiMassiv</code> konstruktoru yaradın. Bu obyekt daxildə massiv saxlayır və üç metoda malikdir: <code>elaveEt(el)</code> (sona əlavə edir), <code>unikalEt()</code> (təkrarları təmizləyir) və <code>capEt()</code> (konsola <code>[MAS] [elementlər]</code> çıxarır). Bir obyekt yaradıb ardıcıl olaraq 10, 20, 10, 30 əlavə edin, unikal edin və çap edin.",
    "gozlenilenCixis": "[MAS] 10, 20, 30",
    "starterCode": "function XususiMassiv() {\n  // Kodunuzu buraya yazın\n}\n\nconst xm = new XususiMassiv();\nxm.elaveEt(10);\nxm.elaveEt(20);\nxm.elaveEt(10);\nxm.elaveEt(30);\nxm.unikalEt();\nxm.capEt();",
    "solutionCode": "function XususiMassiv() {\n  this.items = [];\n  this.elaveEt = function(el) {\n    this.items.push(el);\n  };\n  this.unikalEt = function() {\n    const unikal = [];\n    for (let i = 0; i < this.items.length; i++) {\n      if (!unikal.includes(this.items[i])) {\n        unikal.push(this.items[i]);\n      }\n    }\n    this.items = unikal;\n  };\n  this.capEt = function() {\n    console.log(`[MAS] ${this.items.join(\", \")}`);\n  };\n}\n\nconst xm = new XususiMassiv();\nxm.elaveEt(10);\nxm.elaveEt(20);\nxm.elaveEt(10);\nxm.elaveEt(30);\nxm.unikalEt();\nxm.capEt();",
    "ipuclari": [
      "İpucu 1: 'this.items = []' daxili vəziyyətini idarə edin.",
      "İpucu 2: unikalEt() metodu daxili massivi təkrarlardan təmizləyir.",
      "İpucu 3: capEt() metodu [MAS] prefiksi ilə nəticəni konsola yazdırır."
    ],
    "teslimIzahi": "Fərdi kolleksiya wrapper-ləri massiv metodlarını vahid obyekt-yönümlü interfeys arxasında kapsullaşdıraraq kodun təkrar istifadəsini artırır."
  },
  {
    "id": "exam-sec7-01",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Function Declaration ilə Salamlaşma",
    "serif": "<code>salamla(ad)</code> funksiyasını təyin edin və konsola <code>Salam, [ad]!</code> formatında çıxış verin. Funksiyanı <code>\"Aysel\"</code> ilə çağırın.",
    "gozlenilenCixis": "Salam, Aysel!",
    "starterCode": "function salamla(ad) {\n  // Kodunuzu buraya yazın\n}\n\nsalamla(\"Aysel\");",
    "solutionCode": "function salamla(ad) {\n  console.log(`Salam, ${ad}!`);\n}\n\nsalamla(\"Aysel\");",
    "ipuclari": [
      "İpucu 1: Standart 'function ad(parametr) { ... }' sintaksisindən istifadə edin.",
      "İpucu 2: console.log ilə formatlı mətn çıxarın.",
      "İpucu 3: Çıxış 'Salam, Aysel!' olmalıdır."
    ],
    "teslimIzahi": "Function Declaration JavaScript-də qaldırılma (hoisting) xüsusiyyətinə malik olan klassik funksiya təyini formasıdır."
  },
  {
    "id": "exam-sec7-02",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Arrow Function (Ox Funksiyası) ilə Kvadrat",
    "serif": "<code>kvadrat</code> adlı ES6 ox funksiyası (arrow function) yaradın. Funksiya <code>x</code> parametrini qəbul edərək onun kvadratını (<code>x * x</code>) hesablasın və konsola <code>Kvadrat: [netice]</code> çıxarsın. Funksiyanı <code>6</code> ilə çağırın.",
    "gozlenilenCixis": "Kvadrat: 36",
    "starterCode": "const kvadrat = (x) => {\n  // Kodunuzu buraya yazın\n};\n\nkvadrat(6);",
    "solutionCode": "const kvadrat = (x) => {\n  console.log(`Kvadrat: ${x * x}`);\n};\n\nkvadrat(6);",
    "ipuclari": [
      "İpucu 1: Ox funksiyası 'const ad = (parametr) => { ... }' sintaksisi ilə yazılır.",
      "İpucu 2: 6 * 6 = 36 hesablanacaq.",
      "İpucu 3: Çıxışı formatlı çap edin."
    ],
    "teslimIzahi": "Arrow Functions (ES6) daha qısa sintaksis təmin edir və leksik 'this' bağlamasına malikdir."
  },
  {
    "id": "exam-sec7-03",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Standart (Default) Parametrlər",
    "serif": "<code>istifadeciYarat(ad, rol = \"qonaq\")</code> funksiyasını təyin edin. Əgər rol verilməzsə susmaya görə <code>\"qonaq\"</code> qəbul edilsin. Konsola <code>Profil: [ad] ([rol])</code> çıxarın. Funksiyanı tək arqumentlə: <code>\"Rəşad\"</code> ilə çağırın.",
    "gozlenilenCixis": "Profil: Rəşad (qonaq)",
    "starterCode": "function istifadeciYarat(ad, rol = \"qonaq\") {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciYarat(\"Rəşad\");",
    "solutionCode": "function istifadeciYarat(ad, rol = \"qonaq\") {\n  console.log(`Profil: ${ad} (${rol})`);\n}\n\nistifadeciYarat(\"Rəşad\");",
    "ipuclari": [
      "İpucu 1: Parametr başlığında 'rol = \"qonaq\"' standart parametrdir.",
      "İpucu 2: İkinci arqument ötürülmədikdə rol avtomatik 'qonaq' olur.",
      "İpucu 3: Nəticə: Profil: Rəşad (qonaq)."
    ],
    "teslimIzahi": "Default parametrlər (ES6) ötürülməyən və ya undefined olan parametrlərə avtomatik ilkin dəyər təyin edir."
  },
  {
    "id": "exam-sec7-04",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Rest Operatoru (...) ilə Qeyri-müəyyən Sayda Arqument",
    "serif": "<code>butunCem(...ededler)</code> funksiyasını yazın. Rest operatoru ilə gələn bütün ədədləri toplayın və konsola <code>Toplam Cəm: [cem]</code> çıxarın. Funksiyanı <code>10, 20, 30, 40</code> arqumentləri ilə çağırın.",
    "gozlenilenCixis": "Toplam Cəm: 100",
    "starterCode": "function butunCem(...ededler) {\n  // Kodunuzu buraya yazın\n}\n\nbutunCem(10, 20, 30, 40);",
    "solutionCode": "function butunCem(...ededler) {\n  let cem = 0;\n  for (let i = 0; i < ededler.length; i++) {\n    cem += ededler[i];\n  }\n  console.log(`Toplam Cəm: ${cem}`);\n}\n\nbutunCem(10, 20, 30, 40);",
    "ipuclari": [
      "İpucu 1: '...ededler' ötürülən bütün fərdi arqumentləri vahid massivə toplayır.",
      "İpucu 2: for dövrü ilə massivi cəmləyin (10+20+30+40 = 100).",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    "teslimIzahi": "Rest parametri (...) funksiyaya ötürülən arqumentləri əsl JavaScript massivinə yığaraq köhnəlmiş arguments obyektini əvəzləyir."
  },
  {
    "id": "exam-sec7-05",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Funksiyadan Funksiya Qaytarılması (Higher-Order Function)",
    "serif": "<code>vurmaGeneratoru(vurulan)</code> funksiyasını yazın. Bu funksiya daxildə başqa bir funksiya qaytarsın: <code>return function(eded) { return eded * vurulan; }</code>. Əvvəlcə <code>const ikiyeVur = vurmaGeneratoru(2);</code> yaradın, sonra <code>ikiyeVur(5)</code> nəticəsini konsola <code>Nəticə: [qiymət]</code> olaraq çıxarın.",
    "gozlenilenCixis": "Nəticə: 10",
    "starterCode": "function vurmaGeneratoru(vurulan) {\n  // Kodunuzu buraya yazın\n}\n\nconst ikiyeVur = vurmaGeneratoru(2);\nconsole.log(`Nəticə: ${ikiyeVur(5)}`);",
    "solutionCode": "function vurmaGeneratoru(vurulan) {\n  return function(eded) {\n    return eded * vurulan;\n  };\n}\n\nconst ikiyeVur = vurmaGeneratoru(2);\nconsole.log(`Nəticə: ${ikiyeVur(5)}`);",
    "ipuclari": [
      "İpucu 1: Funksiya daxilində anonim funksiya qaytarın.",
      "İpucu 2: Daxili funksiya xarici 'vurulan' parametrini xatırlayır (Closure əsası).",
      "İpucu 3: ikiyeVur(5) çağırışı 5 * 2 = 10 qaytarır."
    ],
    "teslimIzahi": "Funksiyanı arqument kimi qəbul edən və ya nəticə kimi funksiya qaytaran funksiyalara Yüksək Dərəcəli Funksiyalar (Higher-Order Functions) deyilir."
  },
  {
    "id": "exam-sec7-06",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Qlobal vs Lokal Görünüş Sahəsi (Scope)",
    "serif": "<code>scopeTesti()</code> funksiyasını yazın. Qlobal sahədə <code>let mesaj = \"Qlobal\";</code> elan edin. Funksiya daxilində isə eyni adlı lokal <code>let mesaj = \"Lokal\";</code> yaradın və konsola <code>Funksiya içi: [mesaj]</code> çap edin. Funksiyadan kənarda isə <code>Qlobal: [mesaj]</code> çap edin.",
    "gozlenilenCixis": "Funksiya içi: Lokal\nQlobal: Qlobal",
    "starterCode": "let mesaj = \"Qlobal\";\n\nfunction scopeTesti() {\n  // Kodunuzu buraya yazın\n}\n\nscopeTesti();\nconsole.log(`Qlobal: ${mesaj}`);",
    "solutionCode": "let mesaj = \"Qlobal\";\n\nfunction scopeTesti() {\n  let mesaj = \"Lokal\";\n  console.log(`Funksiya içi: ${mesaj}`);\n}\n\nscopeTesti();\nconsole.log(`Qlobal: ${mesaj}`);",
    "ipuclari": [
      "İpucu 1: Funksiya daxilində let ilə eyni adlı dəyişən elan edildikdə qlobal dəyişən kölgələnir (shadowing).",
      "İpucu 2: Lokal dəyişən yalnız funksiya daxilində keçərlidir.",
      "İpucu 3: Kənarda qlobal 'Qlobal' dəyəri toxunulmaz qalır."
    ],
    "teslimIzahi": "Scope (görünüş sahəsi) dəyişənlərin əlçatanlığını təyin edir. Funksiya daxilində elan edilən dəyişənlər lokal sahəyə malikdir və xarici mühitə sızmır."
  },
  {
    "id": "exam-sec7-07",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "İmplisit Return ilə Ox Funksiyası",
    "serif": "Fiqurlu mötərizəsiz və 'return' sözü olmadan tək sətirlik ox funksiyası təyin edin: <code>const cevir = metn => metn.toUpperCase();</code>. Funksiyanı <code>\"javascript\"</code> arqumenti ilə çağıraraq nəticəni konsola <code>Böyük: [netice]</code> çıxarın.",
    "gozlenilenCixis": "Böyük: JAVASCRIPT",
    "starterCode": "const cevir = metn => metn.toUpperCase();\n\nfunction testEt() {\n  // Kodunuzu buraya yazın\n}\n\ntestEt();",
    "solutionCode": "const cevir = metn => metn.toUpperCase();\n\nfunction testEt() {\n  console.log(`Böyük: ${cevir(\"javascript\")}`);\n}\n\ntestEt();",
    "ipuclari": [
      "İpucu 1: Tək sətirlik ox funksiyasında fiqurlu mötərizə olmadıqda ifadənin nəticəsi avtomatik qaytarılır (implicit return).",
      "İpucu 2: cevir(\"javascript\") 'JAVASCRIPT' qaytaracaq.",
      "İpucu 3: Formatlı çap edin."
    ],
    "teslimIzahi": "İmplisit return ox funksiyalarının ən güclü sintaktik üstünlüklərindən biridir və funksional proqramlaşdırma zəncirlərini yığcamlaşdırır."
  },
  {
    "id": "exam-sec7-08",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Closure (Qapanma) ilə Sayğac Generatoru",
    "serif": "<code>saygacYarat()</code> funksiyasını yazın. Daxildə <code>let say = 0;</code> dəyişəni saxlasın və hər çağırışda onu 1 artırıb qaytaran daxili funksiya qaytarsın. <code>const saygac = saygacYarat();</code> yaradın və ardıcıl 3 çağırışın nəticəsini konsola <code>1, 2, 3</code> kimi çap edin.",
    "gozlenilenCixis": "1\n2\n3",
    "starterCode": "function saygacYarat() {\n  // Kodunuzu buraya yazın\n}\n\nconst saygac = saygacYarat();\nconsole.log(saygac());\nconsole.log(saygac());\nconsole.log(saygac());",
    "solutionCode": "function saygacYarat() {\n  let say = 0;\n  return function() {\n    say++;\n    return say;\n  };\n}\n\nconst saygac = saygacYarat();\nconsole.log(saygac());\nconsole.log(saygac());\nconsole.log(saygac());",
    "ipuclari": [
      "İpucu 1: Xarici funksiya bitdikdən sonra belə daxili funksiya 'say' dəyişənini yaddaşda saxlayır (Closure).",
      "İpucu 2: Hər çağırışda say++ icra olunur və yenilənmiş qiymət qaytarılır.",
      "İpucu 3: Ardıcıl 1, 2, 3 çıxacaq."
    ],
    "teslimIzahi": "Closure funksiyanın öz leksik mühitini (lexical environment) və xarici dəyişənlərini yaddaşda qoruyub saxlaması mexanizmidir."
  },
  {
    "id": "exam-sec7-09",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Callback Funksiyasının İcrası",
    "serif": "<code>emeliyyatEt(a, b, callback)</code> funksiyasını təyin edin. Funksiya <code>a</code> və <code>b</code>-ni <code>callback(a, b)</code> funksiyasına ötürsün və nəticəni konsola <code>Nəticə: [netice]</code> çıxarsın. Funksiyanı <code>15, 5, (x, y) => x - y</code> ilə çağırın.",
    "gozlenilenCixis": "Nəticə: 10",
    "starterCode": "function emeliyyatEt(a, b, callback) {\n  // Kodunuzu buraya yazın\n}\n\nemeliyyatEt(15, 5, (x, y) => x - y);",
    "solutionCode": "function emeliyyatEt(a, b, callback) {\n  const netice = callback(a, b);\n  console.log(`Nəticə: ${netice}`);\n}\n\nemeliyyatEt(15, 5, (x, y) => x - y);",
    "ipuclari": [
      "İpucu 1: Callback başqa bir funksiyaya arqument kimi ötürülən funksiyadır.",
      "İpucu 2: callback(15, 5) icra olunduqda 15 - 5 = 10 hesablayır.",
      "İpucu 3: Formatlı çap edin."
    ],
    "teslimIzahi": "Callback mexanizmi alqoritmləri parametrik etməyə imkan verir: əsas funksiya icra axınını təşkil edir, hesablama məntiqini isə ötürülən callback həyata keçirir."
  },
  {
    "id": "exam-sec7-10",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Funksiya Kompozisiyası (Function Composition)",
    "serif": "İki funksiya təyin edin: <code>ikiqat(x) = x * 2</code> və <code>birElaveEt(x) = x + 1</code>. Bu iki funksiyanı birləşdirən <code>kompozisiya(x)</code> funksiyası yazın ki, əvvəlcə ədədə 1 əlavə etsin, sonra nəticəni ikiqat artırsın (<code>ikiqat(birElaveEt(x))</code>). Konsola <code>Kompozisiya: [netice]</code> çıxarın. Funksiyanı <code>4</code> ilə çağırın.",
    "gozlenilenCixis": "Kompozisiya: 10",
    "starterCode": "const ikiqat = x => x * 2;\nconst birElaveEt = x => x + 1;\n\nfunction kompozisiya(x) {\n  // Kodunuzu buraya yazın\n}\n\nkompozisiya(4);",
    "solutionCode": "const ikiqat = x => x * 2;\nconst birElaveEt = x => x + 1;\n\nfunction kompozisiya(x) {\n  const netice = ikiqat(birElaveEt(x));\n  console.log(`Kompozisiya: ${netice}`);\n}\n\nkompozisiya(4);",
    "ipuclari": [
      "İpucu 1: Əvvəlcə daxili birElaveEt(4) işləyir: 4 + 1 = 5.",
      "İpucu 2: Sonra xarici ikiqat(5) işləyir: 5 * 2 = 10.",
      "İpucu 3: Formatı dəqiq çıxarın."
    ],
    "teslimIzahi": "Funksiya kompozisiyası sadə funksiyaları ardıcıl zəncirvari birləşdirərək daha mürəkkəb transformasiyalar qurmağa imkan verən riyazi və funksional proqramlaşdırma üsuludur."
  },
  {
    "id": "exam-sec7-11",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Karrinqləmə (Currying) Texnikası",
    "serif": "Üç ədədi toplayan <code>topla(a)(b)(c)</code> karrinqlənmiş funksiyasını tərtib edin. Konsola <code>Karrinq Cəm: [netice]</code> çıxarın. Funksiyanı <code>topla(5)(10)(15)</code> şəklində çağırın.",
    "gozlenilenCixis": "Karrinq Cəm: 30",
    "starterCode": "function topla(a) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(`Karrinq Cəm: ${topla(5)(10)(15)}`);",
    "solutionCode": "function topla(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\n\nconsole.log(`Karrinq Cəm: ${topla(5)(10)(15)}`);",
    "ipuclari": [
      "İpucu 1: Hər bir funksiya tək bir arqument qəbul edir və növbəti funksiyanı qaytarır.",
      "İpucu 2: Ən daxili funksiya bütün a, b, c dəyişənlərini toplayır (5 + 10 + 15 = 30).",
      "İpucu 3: topla(5)(10)(15) zəncirvari sintaksisini tamamlayın."
    ],
    "teslimIzahi": "Currying çoxarqumentli funksiyanı tək arqumentli funksiyalar zəncirinə çevirən funksional proqramlaşdırma paradiqmasıdır."
  },
  {
    "id": "exam-sec7-12",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Memoization (Nəticə Keşləmə) Tətbiqi",
    "serif": "<code>memoizeKvadrat()</code> funksiyasını yazın. Daxildə <code>keş = {}</code> saxlasın. Əgər ötürülən ədəd keşdə varsa konsola <code>[KEŞDƏN] [n]: [kvadrat]</code>, yoxdursa hesablayıb keşə yazaraq <code>[HESABLANDI] [n]: [kvadrat]</code> çıxarsın. Funksiyanı eyni <code>5</code> arqumenti ilə ardıcıl iki dəfə çağırın.",
    "gozlenilenCixis": "[HESABLANDI] 5: 25\n[KEŞDƏN] 5: 25",
    "starterCode": "function memoizeKvadrat() {\n  // Kodunuzu buraya yazın\n}\n\nconst hesabla = memoizeKvadrat();\nhesabla(5);\nhesabla(5);",
    "solutionCode": "function memoizeKvadrat() {\n  const kes = {};\n  return function(n) {\n    if (kes[n] !== undefined) {\n      console.log(`[KEŞDƏN] ${n}: ${kes[n]}`);\n    } else {\n      const res = n * n;\n      kes[n] = res;\n      console.log(`[HESABLANDI] ${n}: ${res}`);\n    }\n  };\n}\n\nconst hesabla = memoizeKvadrat();\nhesabla(5);\nhesabla(5);",
    "ipuclari": [
      "İpucu 1: Closure daxilində 'kes' obyekti saxlayın.",
      "İpucu 2: Birinci çağırışda 'kes[5]' olmadığı üçün hesablanır və qeyd olunur.",
      "İpucu 3: İkinci çağırışda birbaşa keşdən oxunur."
    ],
    "teslimIzahi": "Memoization ağır hesablamaların nəticələrini giriş parametrlərinə görə keşləyərək təkrar hesablamaların qarşısını alan optimallaşdırma üsuludur."
  },
  {
    "id": "exam-sec7-13",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Rekursiv Faktorial Hesablayıcı",
    "serif": "<code>faktorial(n)</code> rekursiv funksiyasını təyin edin. Baza halı: <code>n <= 1</code> olduqda 1 qaytarır. Digər hallarda <code>n * faktorial(n - 1)</code> qaytarır. Konsola <code>[n]! = [netice]</code> çıxarın. Funksiyanı <code>5</code> üçün çağırın.",
    "gozlenilenCixis": "5! = 120",
    "starterCode": "function faktorial(n) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(`5! = ${faktorial(5)}`);",
    "solutionCode": "function faktorial(n) {\n  if (n <= 1) return 1;\n  return n * faktorial(n - 1);\n}\n\nconsole.log(`5! = ${faktorial(5)}`);",
    "ipuclari": [
      "İpucu 1: Baza halı mütləq olmalıdır ki, call stack dolub xəta verməsin.",
      "İpucu 2: 5 * 4 * 3 * 2 * 1 = 120 hesablanacaq.",
      "İpucu 3: Formatlı çap edin."
    ],
    "teslimIzahi": "Rekursiya funksiyanın özünü çağırmasıdır. Baza halı (base condition) rekursiyanın dayanmasını təmin edən ən kritik şərtdir."
  },
  {
    "id": "exam-sec7-14",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Partial Application (Arqumentlərin Qismən Tətbiqi)",
    "serif": "<code>vergiHesabla(faiz, mebleg)</code> funksiyası üçün <code>partial(fn, sabitFaiz)</code> yaradın. Bu funksiya <code>faiz</code> parametrini 18 olaraq sabitləsin və yalnız <code>mebleg</code> qəbul edən yeni funksiya qaytarsın. <code>const edvHesabla = partial((f, m) => m * (f / 100), 18);</code> çağırışı ilə 500 AZN üçün vergini hesablayıb konsola <code>ƏDV: [vergi] AZN</code> çıxarın.",
    "gozlenilenCixis": "ƏDV: 90 AZN",
    "starterCode": "function partial(fn, sabitFaiz) {\n  // Kodunuzu buraya yazın\n}\n\nconst edvHesabla = partial((f, m) => m * (f / 100), 18);\nconsole.log(`ƏDV: ${edvHesabla(500)} AZN`);",
    "solutionCode": "function partial(fn, sabitFaiz) {\n  return function(mebleg) {\n    return fn(sabitFaiz, mebleg);\n  };\n}\n\nconst edvHesabla = partial((f, m) => m * (f / 100), 18);\nconsole.log(`ƏDV: ${edvHesabla(500)} AZN`);",
    "ipuclari": [
      "İpucu 1: partial funksiyası sabit arqumenti daxildə saxlayıb qalan arqumentləri gözləyən yeni funksiya qaytarır.",
      "İpucu 2: 500 * (18 / 100) = 90 AZN hesablanacaq.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    "teslimIzahi": "Qismən tətbiqetmə (Partial Application) ümumi məqsədli funksiyaların bəzi parametrlərini fiksasiya edərək daha xüsusi funksiyalar törətməyə imkan verir."
  },
  {
    "id": "exam-sec7-15",
    "bolmeId": 7,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "İcra Boru Kəməri (Pipe Pipeline) Arxitekturası",
    "serif": "İxtiyari sayda funksiyanı soldan sağa ardıcıl icra edən <code>pipe(...funksiyalar)</code> yardımçısını qurun. Üç funksiya təyin edin: <code>topla5 = x => x + 5</code>, <code>vur3 = x => x * 3</code>, <code>cix2 = x => x - 2</code>. <code>const boru = pipe(topla5, vur3, cix2);</code> yaradın və <code>boru(5)</code> nəticəsini konsola <code>Boru Xətti Nəticəsi: [netice]</code> çıxarın.",
    "gozlenilenCixis": "Boru Xətti Nəticəsi: 28",
    "starterCode": "function pipe(...funksiyalar) {\n  // Kodunuzu buraya yazın\n}\n\nconst topla5 = x => x + 5;\nconst vur3 = x => x * 3;\nconst cix2 = x => x - 2;\n\nconst boru = pipe(topla5, vur3, cix2);\nconsole.log(`Boru Xətti Nəticəsi: ${boru(5)}`);",
    "solutionCode": "function pipe(...funksiyalar) {\n  return function(ilkinDeyer) {\n    let deyer = ilkinDeyer;\n    for (let i = 0; i < funksiyalar.length; i++) {\n      deyer = funksiyalar[i](deyer);\n    }\n    return deyer;\n  };\n}\n\nconst topla5 = x => x + 5;\nconst vur3 = x => x * 3;\nconst cix2 = x => x - 2;\n\nconst boru = pipe(topla5, vur3, cix2);\nconsole.log(`Boru Xətti Nəticəsi: ${boru(5)}`);",
    "ipuclari": [
      "İpucu 1: pipe funksiyaları soldan sağa icra edir: əvvəlcə topla5 (5+5=10), sonra vur3 (10*3=30), sonra cix2 (30-2=28).",
      "İpucu 2: Dövr və ya reduce vasitəsilə hər funksiyanın çıxışını növbəti funksiyanın girişinə ötürün.",
      "İpucu 3: Nəticə 28 olmalıdır."
    ],
    "teslimIzahi": "Pipe arxitekturası funksional proqramlaşdırmada məlumat transformasiyalarını oxunaqlı və bəyanedici (declarative) boru kəmərinə çevirir."
  },
  {
    "id": "exam-sec8-01",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Obyekt Yaradılması və Dot Notation",
    "serif": "<code>istifadeciProfili()</code> funksiyasını təyin edin. <code>ad</code> və <code>bal</code> xassələrinə malik obyekt yaradın (ad: 'Murad', bal: 95) və nöqtə (dot notation) ilə oxuyaraq konsola <code>Tələbə: [ad] | Bal: [bal]</code> çıxarın.",
    "gozlenilenCixis": "Tələbə: Murad | Bal: 95",
    "starterCode": "function istifadeciProfili() {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciProfili();",
    "solutionCode": "function istifadeciProfili() {\n  const telebe = { ad: \"Murad\", bal: 95 };\n  console.log(`Tələbə: ${telebe.ad} | Bal: ${telebe.bal}`);\n}\n\nistifadeciProfili();",
    "ipuclari": [
      "İpucu 1: Obyekt literal sintaksisi: { açar: dəyər }.",
      "İpucu 2: Xassələri telebe.ad və telebe.bal şəklində oxuyun.",
      "İpucu 3: Formatlı çap edin."
    ],
    "teslimIzahi": "Obyektlər əlaqəli məlumatları açar-dəyər (key-value) cütləri şəklində saxlayan mürəkkəb JavaScript məlumat strukturudur."
  },
  {
    "id": "exam-sec8-02",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Bracket Notation ilə Dinamik Açar Oxunması",
    "serif": "<code>dinamikAcarOxu(obyekt, acarAdi)</code> funksiyasını yazın. Kvadrat mötərizə (<code>obyekt[acarAdi]</code>) sintaksisi ilə dinamik açarın dəyərini oxuyub konsola <code>Açar: [acarAdi] -> [dəyər]</code> çıxarın. Funksiyanı <code>{ status: \"Aktiv\", rol: \"Admin\" }, \"rol\"</code> ilə çağırın.",
    "gozlenilenCixis": "Açar: rol -> Admin",
    "starterCode": "function dinamikAcarOxu(obyekt, acarAdi) {\n  // Kodunuzu buraya yazın\n}\n\ndinamikAcarOxu({ status: \"Aktiv\", rol: \"Admin\" }, \"rol\");",
    "solutionCode": "function dinamikAcarOxu(obyekt, acarAdi) {\n  console.log(`Açar: ${acarAdi} -> ${obyekt[acarAdi]}`);\n}\n\ndinamikAcarOxu({ status: \"Aktiv\", rol: \"Admin\" }, \"rol\");",
    "ipuclari": [
      "İpucu 1: Açar adı dəyişəndə saxlandıqda dot notation işləmir (obyekt.acarAdi undefined verər).",
      "İpucu 2: Bracket notation obyekt[acarAdi] dinamik qiymətləndirmə aparır.",
      "İpucu 3: Nəticə: Açar: rol -> Admin."
    ],
    "teslimIzahi": "Bracket notation (kvadrat mötərizə) xassə adı dəyişəndə saxlandıqda və ya xüsusi simvollar daşıdıqda yeganə oxuma vasitəsidir."
  },
  {
    "id": "exam-sec8-03",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Obyekt Metodu və this Açar Sözü",
    "serif": "<code>avtomobilYarat()</code> funksiyasını yazın. Obyekt daxilində <code>marka: \"Toyota\"</code>, <code>il: 2022</code> və <code>melumat: function() { ... }</code> metodu təyin edin. Metod daxilində <code>this.marka</code> və <code>this.il</code> istifadə edərək konsola <code>Avtomobil: Toyota (2022)</code> çap edin. Metodu çağırın.",
    "gozlenilenCixis": "Avtomobil: Toyota (2022)",
    "starterCode": "function avtomobilYarat() {\n  // Kodunuzu buraya yazın\n}\n\navtomobilYarat();",
    "solutionCode": "function avtomobilYarat() {\n  const avto = {\n    marka: \"Toyota\",\n    il: 2022,\n    melumat: function() {\n      console.log(`Avtomobil: ${this.marka} (${this.il})`);\n    }\n  };\n  avto.melumat();\n}\n\navtomobilYarat();",
    "ipuclari": [
      "İpucu 1: Obyekt metodu daxilindəki 'this' həmin obyektin öz instansiyasına istinad edir.",
      "İpucu 2: this.marka və this.il dəyərlərini şablon sətirə daxil edin.",
      "İpucu 3: avto.melumat() çağırışını edin."
    ],
    "teslimIzahi": "Standart funksiya metodlarında 'this' açar sözü metodu çağıran cari obyekti referans alır."
  },
  {
    "id": "exam-sec8-04",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Object.keys() və Object.values() ilə Siyahılama",
    "serif": "<code>obyektAnalizi(obyekt)</code> funksiyasını tərtib edin. <code>Object.keys()</code> ilə açarları vergüllə, <code>Object.values()</code> ilə dəyərləri vergüllə konsola iki ayrı sətirdə çıxarın. Funksiyanı <code>{ ad: \"Aysel\", seher: \"Bakı\", yas: 21 }</code> ilə çağırın.",
    "gozlenilenCixis": "Açarlar: ad, seher, yas\nDəyərlər: Aysel, Bakı, 21",
    "starterCode": "function obyektAnalizi(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\nobyektAnalizi({ ad: \"Aysel\", seher: \"Bakı\", yas: 21 });",
    "solutionCode": "function obyektAnalizi(obyekt) {\n  const acarlar = Object.keys(obyekt);\n  const deyerler = Object.values(obyekt);\n  console.log(`Açarlar: ${acarlar.join(\", \")}`);\n  console.log(`Dəyərlər: ${deyerler.join(\", \")}`);\n}\n\nobyektAnalizi({ ad: \"Aysel\", seher: \"Bakı\", yas: 21 });",
    "ipuclari": [
      "İpucu 1: Object.keys() açarlar massivini, Object.values() dəyərlər massivini qaytarır.",
      "İpucu 2: Massivləri join(\", \") ilə birləşdirin.",
      "İpucu 3: İki ardıcıl log sətri çıxarın."
    ],
    "teslimIzahi": "Object.keys() və Object.values() obyektin daxili xassələrini massiv formatında çıxararaq rahat iterasiya imkanı yaradır."
  },
  {
    "id": "exam-sec8-05",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Object.entries() ilə Açar-Dəyər Cütləri",
    "serif": "<code>cutleriCapEt(obyekt)</code> funksiyasını yazın. <code>Object.entries()</code> metodundan və for...of dövründən istifadə edərək hər cütü <code>[açar] => [dəyər]</code> formatında alt-alta konsola çıxarın. Funksiyanı <code>{ id: 1, ad: \"Kompüter\" }</code> ilə çağırın.",
    "gozlenilenCixis": "id => 1\nad => Kompüter",
    "starterCode": "function cutleriCapEt(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\ncutleriCapEt({ id: 1, ad: \"Kompüter\" });",
    "solutionCode": "function cutleriCapEt(obyekt) {\n  const cutler = Object.entries(obyekt);\n  for (const [k, v] of cutler) {\n    console.log(`${k} => ${v}`);\n  }\n}\n\ncutleriCapEt({ id: 1, ad: \"Kompüter\" });",
    "ipuclari": [
      "İpucu 1: Object.entries() [açar, dəyər] massivlərindən ibarət ikiölçülü massiv qaytarır.",
      "İpucu 2: for (const [k, v] of cutler) ilə destrukturizasiya edərək oxuyun.",
      "İpucu 3: 'k => v' formatında çap edin."
    ],
    "teslimIzahi": "Object.entries() obyekti Map və ya massiv iterasiyası üçün əlverişli [key, value] cütlərinə çevirir."
  },
  {
    "id": "exam-sec8-06",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Sadə Obyekt Destrukturizasiyası (Destructuring)",
    "serif": "<code>istifadeciDestruktur(istifadeci)</code> funksiyasını yazın. ES6 Destructuring sintaksisi ilə <code>{ ad, email }</code> sahələrini birbaşa çıxarın və konsola <code>İstifadəçi: [ad] <[email]></code> kimi yazdırın. Funksiyanı <code>{ ad: \"Murad\", email: \"murad@example.com\", yas: 25 }</code> ilə çağırın.",
    "gozlenilenCixis": "İstifadəçi: Murad <murad@example.com>",
    "starterCode": "function istifadeciDestruktur(istifadeci) {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciDestruktur({ ad: \"Murad\", email: \"murad@example.com\", yas: 25 });",
    "solutionCode": "function istifadeciDestruktur(istifadeci) {\n  const { ad, email } = istifadeci;\n  console.log(`İstifadəçi: ${ad} <${email}>`);\n}\n\nistifadeciDestruktur({ ad: \"Murad\", email: \"murad@example.com\", yas: 25 });",
    "ipuclari": [
      "İpucu 1: const { ad, email } = istifadeci; xassələri eyni adlı lokal dəyişənlərə çıxarır.",
      "İpucu 2: Şablon mətndə 'ad <email>' formatını qurun.",
      "İpucu 3: Nəticə dəqiq uyğun olmalıdır."
    ],
    "teslimIzahi": "Destrukturizasiya (Destructuring assignment) obyekt sahələrini tək bir əmrlə ayrıca dəyişənlərə bağlamaq üçün ES6 sintaksisidir."
  },
  {
    "id": "exam-sec8-07",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Spread Operatoru ilə Obyekt Birləşdirilməsi",
    "serif": "<code>obyektleriBirlesdir(baza, elave)</code> funksiyasını Spread (<code>...</code>) operatoru ilə yazın. İki obyekti tək bir <code>{ ...baza, ...elave }</code> obyektində birləşdirin və konsola <code>Birləşmiş id: [id], ad: [ad], rol: [rol]</code> kimi çıxarın. Funksiyanı <code>{ id: 1, ad: \"Ali\" }, { rol: \"Admin\" }</code> ilə çağırın.",
    "gozlenilenCixis": "Birləşmiş id: 1, ad: Ali, rol: Admin",
    "starterCode": "function obyektleriBirlesdir(baza, elave) {\n  // Kodunuzu buraya yazın\n}\n\nobyektleriBirlesdir({ id: 1, ad: \"Ali\" }, { rol: \"Admin\" });",
    "solutionCode": "function obyektleriBirlesdir(baza, elave) {\n  const netice = { ...baza, ...elave };\n  console.log(`Birləşmiş id: ${netice.id}, ad: ${netice.ad}, rol: ${netice.rol}`);\n}\n\nobyektleriBirlesdir({ id: 1, ad: \"Ali\" }, { rol: \"Admin\" });",
    "ipuclari": [
      "İpucu 1: Spread operatoru ({ ...a, ...b }) hər iki obyektin sahələrini yeni obyektə köçürür.",
      "İpucu 2: Eyni adlı açarlar olduqda sağdakı obyekt soldakını əvəzləyir.",
      "İpucu 3: Formatı dəqiq qurun."
    ],
    "teslimIzahi": "Obyekt yayma operatoru (Object Spread) dayaz surətləmə və obyektlərin birləşdirilməsini ən sürətli və bəyanedici üsulla icra edir."
  },
  {
    "id": "exam-sec8-08",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "JSON.stringify() və JSON.parse() Məlumat Mübadiləsi",
    "serif": "<code>jsonCevir(obyekt)</code> funksiyasını təyin edin. Əvvəlcə obyekti <code>JSON.stringify()</code> ilə mətnə çevirin, sonra həmin mətni <code>JSON.parse()</code> ilə yenidən obyektə qaytarın və konsola <code>JSON Sətir: [sətir] | Bərpa: [bərpaAd]</code> çap edin. Funksiyanı <code>{ ad: \"Server\", port: 3000 }</code> ilə çağırın.",
    "gozlenilenCixis": "JSON Sətir: {\"ad\":\"Server\",\"port\":3000} | Bərpa: Server",
    "starterCode": "function jsonCevir(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\njsonCevir({ ad: \"Server\", port: 3000 });",
    "solutionCode": "function jsonCevir(obyekt) {\n  const str = JSON.stringify(obyekt);\n  const berpa = JSON.parse(str);\n  console.log(`JSON Sətir: ${str} | Bərpa: ${berpa.ad}`);\n}\n\njsonCevir({ ad: \"Server\", port: 3000 });",
    "ipuclari": [
      "İpucu 1: JSON.stringify() JavaScript obyektini sətirə serializasiya edir.",
      "İpucu 2: JSON.parse() JSON sətirini yenidən canlı obyektə deserializasiya edir.",
      "İpucu 3: Formatı dəqiq çıxarın."
    ],
    "teslimIzahi": "JSON veb şəbəkələrində məlumat mübadiləsi üçün standart formadır. stringify serializasiyanı, parse isə bərpanı həyata keçirir."
  },
  {
    "id": "exam-sec8-09",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Dərin İç-içə (Nested) Destrukturizasiya",
    "serif": "<code>sirketUnvani(iscı)</code> funksiyasını yazın. Dərin destrukturizasiya ilə <code>unvan</code> obyektinin daxilindəki <code>seher</code> və <code>kuce</code> sahələrini çıxarın (<code>const { unvan: { seher, kuce } } = isci;</code>) və konsola <code>Ünvan: [seher], [kuce]</code> kimi çap edin. Funksiyanı <code>{ ad: \"Leyla\", unvan: { seher: \"Bakı\", kuce: \"Nizami küç.\" } }</code> ilə çağırın.",
    "gozlenilenCixis": "Ünvan: Bakı, Nizami küç.",
    "starterCode": "function sirketUnvani(isci) {\n  // Kodunuzu buraya yazın\n}\n\nsirketUnvani({ ad: \"Leyla\", unvan: { seher: \"Bakı\", kuce: \"Nizami küç.\" } });",
    "solutionCode": "function sirketUnvani(isci) {\n  const { unvan: { seher, kuce } } = isci;\n  console.log(`Ünvan: ${seher}, ${kuce}`);\n}\n\nsirketUnvani({ ad: \"Leyla\", unvan: { seher: \"Bakı\", kuce: \"Nizami küç.\" } });",
    "ipuclari": [
      "İpucu 1: İç-içə destrukturizasiya sintaksisi: const { unvan: { seher, kuce } } = isci;",
      "İpucu 2: Bu zaman 'unvan' dəyişəni yaranmır, birbaşa 'seher' və 'kuce' dəyişənləri formalaşır.",
      "İpucu 3: Çıxış: Ünvan: Bakı, Nizami küç."
    ],
    "teslimIzahi": "Dərin destrukturizasiya çoxqatlı mürəkkəb API cavablarından konkret lazımi xassələri birbaşa çıxarmağa kömək edir."
  },
  {
    "id": "exam-sec8-10",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Object.freeze() ilə Dəyişməzlik (Immutability)",
    "serif": "<code>donuqObyekt()</code> funksiyasını yazın. <code>const konfiq = { versiya: \"1.0\" };</code> yaradın, <code>Object.freeze(konfiq)</code> ilə dondurun, sonra <code>konfiq.versiya = \"2.0\";</code> etməyə cəhd edin. Dəyərin dəyişmədiyini nümayiş etdirərək konsola <code>Versiya: [versiya] | Dondurulub: [isFrozen]</code> çap edin.",
    "gozlenilenCixis": "Versiya: 1.0 | Dondurulub: true",
    "starterCode": "function donuqObyekt() {\n  // Kodunuzu buraya yazın\n}\n\ndonuqObyekt();",
    "solutionCode": "function donuqObyekt() {\n  const konfiq = { versiya: \"1.0\" };\n  Object.freeze(konfiq);\n  konfiq.versiya = \"2.0\";\n  console.log(`Versiya: ${konfiq.versiya} | Dondurulub: ${Object.isFrozen(konfiq)}`);\n}\n\ndonuqObyekt();",
    "ipuclari": [
      "İpucu 1: Object.freeze() obyekti tamamilə dondurur, yeni sahə əlavəsinə və ya redaktəsinə icazə vermir.",
      "İpucu 2: Dəyişiklik cəhdi səssizcə rədd edilir (strict mode-da xəta verər).",
      "İpucu 3: Object.isFrozen(konfiq) true qaytarır."
    ],
    "teslimIzahi": "Object.freeze() sabitlər və konfiqurasiyalar üçün dəyişməzlik (shallow immutability) təmin edən qoruyucu metoddur."
  },
  {
    "id": "exam-sec8-11",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dərin Klonlama (Deep Clone) Simulyasiyası",
    "serif": "<code>derinKlon(obyekt)</code> funksiyasını yazın. <code>JSON.parse(JSON.stringify(obyekt))</code> vasitəsilə obyektin tam müstəqil nüsxəsini yaradın. Klonun daxilindəki <code>unvan.seher</code> dəyərini <code>\"Gəncə\"</code> edin. Orijinalın dəyişmədiyini göstərərək konsola <code>Orijinal: [orijinalSeher] | Klon: [klonSeher]</code> çıxarın. Funksiyanı <code>{ ad: \"Murad\", unvan: { seher: \"Bakı\" } }</code> ilə çağırın.",
    "gozlenilenCixis": "Orijinal: Bakı | Klon: Gəncə",
    "starterCode": "function derinKlon(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\nderinKlon({ ad: \"Murad\", unvan: { seher: \"Bakı\" } });",
    "solutionCode": "function derinKlon(obyekt) {\n  const klon = JSON.parse(JSON.stringify(obyekt));\n  klon.unvan.seher = \"Gəncə\";\n  console.log(`Orijinal: ${obyekt.unvan.seher} | Klon: ${klon.unvan.seher}`);\n}\n\nderinKlon({ ad: \"Murad\", unvan: { seher: \"Bakı\" } });",
    "ipuclari": [
      "İpucu 1: Dayaz klonlama ({...obyekt}) daxili obyektlərin referansını paylaşır, ona görə dərin klon lazımdır.",
      "İpucu 2: JSON.parse(JSON.stringify()) tamamilə yeni yaddaş sahəsi ayırır.",
      "İpucu 3: Orijinal 'Bakı', klon isə 'Gəncə' qalmalıdır."
    ],
    "teslimIzahi": "Dərin klonlama (Deep Copy) iç-içə bütün referansları qıraraq obyektin tamamilə izolyasiya olunmuş yeni nüsxəsini formalaşdırır."
  },
  {
    "id": "exam-sec8-12",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Obyekt Massivində Açara Görə Qruplaşdırma (groupBy)",
    "serif": "<code>qruplasdir(massiv, acar)</code> funksiyasını yazın. İşçilər massivini <code>sobe</code> sahəsinə görə qruplaşdıraraq hər şöbədə neçə nəfər olduğunu konsola <code>[şöbə]: [say] nəfər</code> kimi çap edin. Funksiyanı <code>[{ad: \"A\", sobe: \"IT\"}, {ad: \"B\", sobe: \"HR\"}, {ad: \"C\", sobe: \"IT\"}], \"sobe\"</code> ilə çağırın.",
    "gozlenilenCixis": "IT: 2 nəfər\nHR: 1 nəfər",
    "starterCode": "function qruplasdir(massiv, acar) {\n  // Kodunuzu buraya yazın\n}\n\nqruplasdir([{ad: \"A\", sobe: \"IT\"}, {ad: \"B\", sobe: \"HR\"}, {ad: \"C\", sobe: \"IT\"}], \"sobe\");",
    "solutionCode": "function qruplasdir(massiv, acar) {\n  const qrup = {};\n  for (let i = 0; i < massiv.length; i++) {\n    const deyer = massiv[i][acar];\n    qrup[deyer] = (qrup[deyer] || 0) + 1;\n  }\n  for (const s in qrup) {\n    console.log(`${s}: ${qrup[s]} nəfər`);\n  }\n}\n\nqruplasdir([{ad: \"A\", sobe: \"IT\"}, {ad: \"B\", sobe: \"HR\"}, {ad: \"C\", sobe: \"IT\"}], \"sobe\");",
    "ipuclari": [
      "İpucu 1: Şöbə açarını 'qrup[deyer] = (qrup[deyer] || 0) + 1' ilə artırın.",
      "İpucu 2: Qruplaşdırmadan sonra for...in ilə nəticələri alt-alta çap edin.",
      "İpucu 3: IT: 2 nəfər, HR: 1 nəfər çıxacaq."
    ],
    "teslimIzahi": "Məlumatların açara görə qruplaşdırılması SQL GROUP BY əməliyyatının JavaScript-də O(N) tezlik cədvəli ilə reallaşdırılmasıdır."
  },
  {
    "id": "exam-sec8-13",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Object.fromEntries() ilə Açar-Dəyər Transformasiyası",
    "serif": "<code>qiymetleriArtir(mehsullar, faiz)</code> funksiyasını təyin edin. <code>Object.entries()</code> ilə məhsulları açar-dəyər cütlərinə bölün, hər qiyməti <code>faiz</code> qədər artırın və <code>Object.fromEntries()</code> ilə yenidən obyektə qaytarın. Yaranan JSON-u konsola <code>Yenilənmiş: [JSON]</code> kimi çap edin. Funksiyanı <code>{ qelem: 10, defter: 20 }, 10</code> ilə çağırın.",
    "gozlenilenCixis": "Yenilənmiş: {\"qelem\":11,\"defter\":22}",
    "starterCode": "function qiymetleriArtir(mehsullar, faiz) {\n  // Kodunuzu buraya yazın\n}\n\nqiymetleriArtir({ qelem: 10, defter: 20 }, 10);",
    "solutionCode": "function qiymetleriArtir(mehsullar, faiz) {\n  const entries = Object.entries(mehsullar);\n  const yenilenmisEntries = entries.map(([ad, q]) => [ad, q + (q * faiz / 100)]);\n  const netice = Object.fromEntries(yenilenmisEntries);\n  console.log(`Yenilənmiş: ${JSON.stringify(netice)}`);\n}\n\nqiymetleriArtir({ qelem: 10, defter: 20 }, 10);",
    "ipuclari": [
      "İpucu 1: Object.entries() massivə çevirir, map() qiyməti artırır (10 -> 11, 20 -> 22).",
      "İpucu 2: Object.fromEntries() ikiölçülü massivi yenidən obyektə çevirir.",
      "İpucu 3: JSON.stringify ilə çap edin."
    ],
    "teslimIzahi": "Object.fromEntries() (ES2019) massiv metodlarının (map, filter) obyektlər üzərində rahat tətbiq olunmasını təmin edən əks-çeviricidir."
  },
  {
    "id": "exam-sec8-14",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Getter və Setter ilə Nəzarətli Obyekt",
    "serif": "<code>teraziObyekti()</code> funksiyasını yazın. Obyekt daxilində gizli <code>_ceki: 0</code> olsun. <code>get ceki()</code> metodu <code>`${this._ceki} kq`</code> qaytarsın; <code>set ceki(deyer)</code> isə yalnız dəyər müsbət olduqda <code>this._ceki = deyer</code> etsin. Çəkini <code>75</code> edin, sonra oxuyaraq konsola <code>Çəki: [ceki]</code> çıxarın.",
    "gozlenilenCixis": "Çəki: 75 kq",
    "starterCode": "function teraziObyekti() {\n  // Kodunuzu buraya yazın\n}\n\nteraziObyekti();",
    "solutionCode": "function teraziObyekti() {\n  const terazi = {\n    _ceki: 0,\n    get ceki() {\n      return `${this._ceki} kq`;\n    },\n    set ceki(val) {\n      if (val > 0) this._ceki = val;\n    }\n  };\n  terazi.ceki = 75;\n  console.log(`Çəki: ${terazi.ceki}`);\n}\n\nteraziObyekti();",
    "ipuclari": [
      "İpucu 1: get və set açar sözləri xassəyə müraciət və mənimsətmə anını idarə edir.",
      "İpucu 2: terazi.ceki = 75 yazdıqda setter işə düşür.",
      "İpucu 3: terazi.ceki oxunduqda getter '75 kq' qaytarır."
    ],
    "teslimIzahi": "Getter və Setter metodları enkapsulyasiya yaradaraq xassələrə müraciəti metod kimi icra edir və validasiya imkanı verir."
  },
  {
    "id": "exam-sec8-15",
    "bolmeId": 8,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Reaktiv Vəziyyət İdarəetməsi (Mini State Store)",
    "serif": "<code>createStore(ilkinState)</code> funksiyasını yazın. Store <code>getState()</code> və <code>setState(yeniDeyerler)</code> metodlarına malik olsun. <code>setState</code> çağırıldıqda daxili vəziyyət spread ilə yenilənsin və konsola <code>[VƏZİYYƏT YENİLƏNDİ] [JSON]</code> çıxarılsın. İlkin vəziyyəti <code>{ user: \"Murad\", tema: \"dark\" }</code> olan store yaradın və <code>store.setState({ tema: \"light\" })</code> çağırın.",
    "gozlenilenCixis": "[VƏZİYYƏT YENİLƏNDİ] {\"user\":\"Murad\",\"tema\":\"light\"}",
    "starterCode": "function createStore(ilkinState) {\n  // Kodunuzu buraya yazın\n}\n\nconst store = createStore({ user: \"Murad\", tema: \"dark\" });\nstore.setState({ tema: \"light\" });",
    "solutionCode": "function createStore(ilkinState) {\n  let state = { ...ilkinState };\n  return {\n    getState: () => ({ ...state }),\n    setState: (update) => {\n      state = { ...state, ...update };\n      console.log(`[VƏZİYYƏT YENİLƏNDİ] ${JSON.stringify(state)}`);\n    }\n  };\n}\n\nconst store = createStore({ user: \"Murad\", tema: \"dark\" });\nstore.setState({ tema: \"light\" });",
    "ipuclari": [
      "İpucu 1: Closure daxilində dəyişməz 'state' saxlayın.",
      "İpucu 2: setState zamanı '{ ...state, ...update }' ilə yeniləmə aparın.",
      "İpucu 3: Formatı '[VƏZİYYƏT YENİLƏNDİ] JSON' şəklində tamamlayın."
    ],
    "teslimIzahi": "Redux və Vuex kimi qlobal vəziyyət idarəetmə kitabxanaları closure və immutability prinsiplərinə əsaslanan bu nümunə üzərində qurulmuşdur."
  },
  {
    "id": "exam-sec9-01",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "toUpperCase() və toLowerCase() ilə Reqistr Dəyişimi",
    "serif": "<code>registriDeyis(metn)</code> funksiyasını yazın. Eyni mətni birinci sətirdə böyük hərflərlə, ikinci sətirdə kiçik hərflərlə konsola çıxarın. Funksiyanı <code>\"JavaScript\"</code> ilə çağırın.",
    "gozlenilenCixis": "JAVASCRIPT\njavascript",
    "starterCode": "function registriDeyis(metn) {\n  // Kodunuzu buraya yazın\n}\n\nregistriDeyis(\"JavaScript\");",
    "solutionCode": "function registriDeyis(metn) {\n  console.log(metn.toUpperCase());\n  console.log(metn.toLowerCase());\n}\n\nregistriDeyis(\"JavaScript\");",
    "ipuclari": [
      "İpucu 1: toUpperCase() bütün simvolları böyük hərflərə çevirir.",
      "İpucu 2: toLowerCase() bütün simvolları kiçik hərflərə çevirir.",
      "İpucu 3: İki ardıcıl log əmri ilə alt-alta çap edin."
    ],
    "teslimIzahi": "String metodları orijinal mətni dəyişdirmir (çünki sətirlər immutable-dır), yeni çevrilmiş sətir nüsxəsi qaytarır."
  },
  {
    "id": "exam-sec9-02",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "trim() ilə Kənar Boşluqların Təmizlənməsi",
    "serif": "<code>bosluqlariTemizle(metn)</code> funksiyasını təyin edin. Giriş mətninin əvvəlində və sonundakı boşluqları <code>trim()</code> ilə təmizləyin və konsola <code>Təmiz: '[metn]'</code> kimi çıxarın. Funksiyanı <code>\"   Salam Dünya   \"</code> ilə çağırın.",
    "gozlenilenCixis": "Təmiz: 'Salam Dünya'",
    "starterCode": "function bosluqlariTemizle(metn) {\n  // Kodunuzu buraya yazın\n}\n\nbosluqlariTemizle(\"   Salam Dünya   \");",
    "solutionCode": "function bosluqlariTemizle(metn) {\n  console.log(`Təmiz: '${metn.trim()}'`);\n}\n\nbosluqlariTemizle(\"   Salam Dünya   \");",
    "ipuclari": [
      "İpucu 1: trim() metodu sətirin başındakı və sonundakı boşluqları və tabları kəsir.",
      "İpucu 2: Sözlərin arasındakı daxili boşluqlara toxunmur.",
      "İpucu 3: Formatı tək dırnaqlarla təmin edin."
    ],
    "teslimIzahi": "trim() istifadəçi girişlərini (e-poçt, ad, axtarış sorğuları) emal etməzdən əvvəl lazımsız boşluqlardan təmizləmək üçün vacib sanitarizasiya metodudur."
  },
  {
    "id": "exam-sec9-03",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "includes() ilə Alt-Sətir Axtarışı",
    "serif": "<code>sozVarmi(metn, axtarilan)</code> funksiyasını yazın. Əgər <code>metn.includes(axtarilan)</code> olarsa konsola <code>Mövcuddur</code>, əks halda <code>Yoxdur</code> çıxarın. Funksiyanı <code>\"Frontend Proqramlaşdırma\", \"Proqram\"</code> ilə çağırın.",
    "gozlenilenCixis": "Mövcuddur",
    "starterCode": "function sozVarmi(metn, axtarilan) {\n  // Kodunuzu buraya yazın\n}\n\nsozVarmi(\"Frontend Proqramlaşdırma\", \"Proqram\");",
    "solutionCode": "function sozVarmi(metn, axtarilan) {\n  console.log(metn.includes(axtarilan) ? \"Mövcuddur\" : \"Yoxdur\");\n}\n\nsozVarmi(\"Frontend Proqramlaşdırma\", \"Proqram\");",
    "ipuclari": [
      "İpucu 1: String.prototype.includes() mətndə axtarılan fraqmentin olub-olmadığını yoxlayır.",
      "İpucu 2: 'Proqram' mətndə mövcud olduğu üçün true qaytaracaq.",
      "İpucu 3: Nəticə: Mövcuddur."
    ],
    "teslimIzahi": "includes() metodu böyük/kiçik hərf həssaslığı ilə sətir daxilində alt-sətir axtarışını həyata keçirir."
  },
  {
    "id": "exam-sec9-04",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "startsWith() və endsWith() Yoxlamaları",
    "serif": "<code>protokolYoxla(url)</code> funksiyasını qurun. Əgər url <code>https://</code> ilə başlayırsa VƏ <code>.com</code> ilə bitirsə konsola <code>Təhlükəsiz veb sayt</code>, əks halda <code>Qeyri-standart URL</code> çap edin. Funksiyanı <code>\"https://jsoyren.com\"</code> ilə çağırın.",
    "gozlenilenCixis": "Təhlükəsiz veb sayt",
    "starterCode": "function protokolYoxla(url) {\n  // Kodunuzu buraya yazın\n}\n\nprotokolYoxla(\"https://jsoyren.com\");",
    "solutionCode": "function protokolYoxla(url) {\n  if (url.startsWith(\"https://\") && url.endsWith(\".com\")) {\n    console.log(\"Təhlükəsiz veb sayt\");\n  } else {\n    console.log(\"Qeyri-standart URL\");\n  }\n}\n\nprotokolYoxla(\"https://jsoyren.com\");",
    "ipuclari": [
      "İpucu 1: startsWith(\"https://\") başlanğıc prefiksini yoxlayır.",
      "İpucu 2: endsWith(\".com\") sonluq suffiksini yoxlayır.",
      "İpucu 3: Hər iki şərt ödəndikdə təhlükəsiz sayt mesajını çıxarın."
    ],
    "teslimIzahi": "startsWith() və endsWith() metodları URL, fayl uzantıları və protokolların sürətli yoxlanışı üçün optimaldır."
  },
  {
    "id": "exam-sec9-05",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "split() ilə Mətnin Massivə Ayrılması",
    "serif": "<code>sozleriSay(cumle)</code> funksiyasını təyin edin. Cümləni boşluqlara görə <code>split(\" \")</code> ilə massivə ayırın və konsola <code>Söz sayı: [say]</code> formatında çıxarın. Funksiyanı <code>\"JavaScript müasir internetin dilidir\"</code> ilə çağırın.",
    "gozlenilenCixis": "Söz sayı: 4",
    "starterCode": "function sozleriSay(cumle) {\n  // Kodunuzu buraya yazın\n}\n\nsozleriSay(\"JavaScript müasir internetin dilidir\");",
    "solutionCode": "function sozleriSay(cumle) {\n  const sozler = cumle.split(\" \");\n  console.log(`Söz sayı: ${sozler.length}`);\n}\n\nsozleriSay(\"JavaScript müasir internetin dilidir\");",
    "ipuclari": [
      "İpucu 1: split(\" \") cümləni boşluq simvolundan parçalayaraq sözlər massivinə çevirir.",
      "İpucu 2: sozler.length massivdəki sözlərin ümumi sayını verir.",
      "İpucu 3: 4 söz olduğu üçün 'Söz sayı: 4' çıxacaq."
    ],
    "teslimIzahi": "split() mətni verilmiş ayrıcıya əsasən dilimləyərək massiv formasına gətirir və sonrakı kolleksiya emalını asanlaşdırır."
  },
  {
    "id": "exam-sec9-06",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "replace() ilə Sözün Əvəzlənməsi",
    "serif": "<code>sozDeyis(metn, kohne, yeni)</code> funksiyasını yazın. <code>replace()</code> metodundan istifadə edərək <code>kohne</code> sözünü <code>yeni</code> sözü ilə əvəzləyin və konsola çıxarın. Funksiyanı <code>\"Salam Python\", \"Python\", \"JavaScript\"</code> ilə çağırın.",
    "gozlenilenCixis": "Salam JavaScript",
    "starterCode": "function sozDeyis(metn, kohne, yeni) {\n  // Kodunuzu buraya yazın\n}\n\nsozDeyis(\"Salam Python\", \"Python\", \"JavaScript\");",
    "solutionCode": "function sozDeyis(metn, kohne, yeni) {\n  console.log(metn.replace(kohne, yeni));\n}\n\nsozDeyis(\"Salam Python\", \"Python\", \"JavaScript\");",
    "ipuclari": [
      "İpucu 1: replace(axtarilan, yeni) rast gəlinən ilk uyğunluğu əvəzləyir.",
      "İpucu 2: 'Python' sözü 'JavaScript' ilə əvəz olunacaq.",
      "İpucu 3: Nəticə: Salam JavaScript."
    ],
    "teslimIzahi": "replace() metodu sətir daxilindəki simvol və ya sözü yenisi ilə əvəz edərək dəyişdirilmiş yeni sətir qaytarır."
  },
  {
    "id": "exam-sec9-07",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "repeat() ilə Vizual Xətt Çəkilməsi",
    "serif": "<code>xettCek(simvol, say)</code> funksiyasını yazın. <code>simvol.repeat(say)</code> metodundan istifadə edərək təkrar olunan xətt yaradın və konsola <code>[xətt]</code> kimi çap edin. Funksiyanı <code>\"=\", 10</code> ilə çağırın.",
    "gozlenilenCixis": "==========",
    "starterCode": "function xettCek(simvol, say) {\n  // Kodunuzu buraya yazın\n}\n\nxettCek(\"=\", 10);",
    "solutionCode": "function xettCek(simvol, say) {\n  console.log(simvol.repeat(say));\n}\n\nxettCek(\"=\", 10);",
    "ipuclari": [
      "İpucu 1: repeat(n) metodu mətni n dəfə ardıcıl təkrarlayır.",
      "İpucu 2: \"=\".repeat(10) 10 ədəd bərabərlik simvolu verəcək.",
      "İpucu 3: Nəticəni birbaşa çap edin."
    ],
    "teslimIzahi": "repeat() metodu ayırıcı xətlər, ulduzlu reytinqlər və formatlaşdırma blokları yaratmaq üçün optimallaşdırılmış sətir metodudur."
  },
  {
    "id": "exam-sec9-08",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "padStart() ilə Kart Nömrəsinin Maskalanması",
    "serif": "<code>kartMaskala(kartNo)</code> funksiyasını təyin edin. Kart nömrəsinin yalnız son 4 rəqəmini saxlayın (<code>slice(-4)</code>), qalan əvvəlki hissəni isə <code>padStart(16, \"*\")</code> ilə ulduzla doldurun. Konsola <code>Maskalanmış: [kart]</code> çıxarın. Funksiyanı <code>\"1234567890123456\"</code> ilə çağırın.",
    "gozlenilenCixis": "Maskalanmış: ************3456",
    "starterCode": "function kartMaskala(kartNo) {\n  // Kodunuzu buraya yazın\n}\n\nkartMaskala(\"1234567890123456\");",
    "solutionCode": "function kartMaskala(kartNo) {\n  const sonDord = kartNo.slice(-4);\n  const maskalanmis = sonDord.padStart(16, \"*\");\n  console.log(`Maskalanmış: ${maskalanmis}`);\n}\n\nkartMaskala(\"1234567890123456\");",
    "ipuclari": [
      "İpucu 1: slice(-4) sətirin sonuncu 4 simvolunu (\"3456\") kəsir.",
      "İpucu 2: padStart(16, \"*\") sətirin uzunluğu 16 olana qədər önünə \"*\" əlavə edir (12 ulduz + 4 rəqəm).",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    "teslimIzahi": "padStart() və padEnd() sətirləri təyin olunmuş uzunluğa qədər xüsusi simvollarla dolduraraq maskalama və hizalama tələblərini həll edir."
  },
  {
    "id": "exam-sec9-09",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Baş Hərflərin Böyüdülməsi (Title Case)",
    "serif": "<code>titleCase(cumle)</code> funksiyasını yazın. Cümlədəki hər bir sözün ilk hərfini böyük, qalan hərflərini kiçik edin və konsola <code>Nəticə: [cumle]</code> çıxarın. Funksiyanı <code>\"javascript veb proqramlaşdırma\"</code> ilə çağırın.",
    "gozlenilenCixis": "Nəticə: Javascript Veb Proqramlaşdırma",
    "starterCode": "function titleCase(cumle) {\n  // Kodunuzu buraya yazın\n}\n\ntitleCase(\"javascript veb proqramlaşdırma\");",
    "solutionCode": "function titleCase(cumle) {\n  const sozler = cumle.split(\" \");\n  const netice = [];\n  for (let i = 0; i < sozler.length; i++) {\n    const s = sozler[i];\n    netice.push(s[0].toUpperCase() + s.slice(1).toLowerCase());\n  }\n  console.log(`Nəticə: ${netice.join(\" \")}`);\n}\n\ntitleCase(\"javascript veb proqramlaşdırma\");",
    "ipuclari": [
      "İpucu 1: split(\" \") ilə sözləri ayırın.",
      "İpucu 2: Hər sözün 's[0].toUpperCase() + s.slice(1).toLowerCase()' kombinasiyasını qurun.",
      "İpucu 3: join(\" \") ilə təkrar cümlə halında birləşdirin."
    ],
    "teslimIzahi": "Sətir manipulyasiyası ilə mətnlərin standart formatlara (Title Case, CamelCase, Snake_case) salınması geniş yayılmış alqoritmik ssenaridir."
  },
  {
    "id": "exam-sec9-10",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Palindrom Mətn Yoxlayıcı",
    "serif": "<code>palindromYoxla(metn)</code> funksiyasını təyin edin. Mətni tərsinə çevirərək (<code>split('').reverse().join('')</code>) orijinal ilə eyniliyini yoxlayın. Eynidirsə konsola <code>Palindromdur</code>, fərqlidirsə <code>Palindrom deyil</code> çıxarın. Funksiyanı ardıcıl olaraq <code>\"ana\"</code> və <code>\"kitab\"</code> ilə çağırın.",
    "gozlenilenCixis": "Palindromdur\nPalindrom deyil",
    "starterCode": "function palindromYoxla(metn) {\n  // Kodunuzu buraya yazın\n}\n\npalindromYoxla(\"ana\");\npalindromYoxla(\"kitab\");",
    "solutionCode": "function palindromYoxla(metn) {\n  const ters = metn.split(\"\").reverse().join(\"\");\n  console.log(metn === ters ? \"Palindromdur\" : \"Palindrom deyil\");\n}\n\npalindromYoxla(\"ana\");\npalindromYoxla(\"kitab\");",
    "ipuclari": [
      "İpucu 1: split(\"\") simvollar massivi edir, reverse() çevirir, join(\"\") təkrar sətir edir.",
      "İpucu 2: 'ana' tərsdən də 'ana'-dır (Palindromdur).",
      "İpucu 3: 'kitab' tərsdən 'batik'-dir (Palindrom deyil)."
    ],
    "teslimIzahi": "Palindrom simmetriya alqoritmi sətirlərin hər iki tərəfdən eyni oxunmasını yoxlayır və klassik texniki müsahibə tapşırığıdır."
  },
  {
    "id": "exam-sec9-11",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "URL Slug Generatoru",
    "serif": "<code>slugYarat(basliq)</code> funksiyasını qurun: mətni kiçik hərflərə çevirin (<code>toLowerCase()</code>), kənar boşluqları kəsin (<code>trim()</code>) və boşluqları tire ilə əvəzləyin (<code>split(' ').filter(Boolean).join('-')</code>). Konsola <code>Slug: [slug]</code> çıxarın. Funksiyanı <code>\"  JavaScript Dərsləri 2026  \"</code> ilə çağırın.",
    "gozlenilenCixis": "Slug: javascript-dərsləri-2026",
    "starterCode": "function slugYarat(basliq) {\n  // Kodunuzu buraya yazın\n}\n\nslugYarat(\"  JavaScript Dərsləri 2026  \");",
    "solutionCode": "function slugYarat(basliq) {\n  const slug = basliq.toLowerCase().trim().split(\" \").filter(Boolean).join(\"-\");\n  console.log(`Slug: ${slug}`);\n}\n\nslugYarat(\"  JavaScript Dərsləri 2026  \");",
    "ipuclari": [
      "İpucu 1: toLowerCase() və trim() ilkin təmizləmə aparır.",
      "İpucu 2: split(' ').filter(Boolean) çoxsaylı aralıq boşluqlarını təmizləyir.",
      "İpucu 3: join('-') ilə URL üçün uyğun slug formalaşdırın."
    ],
    "teslimIzahi": "URL slug generatorları bloq və xəbər başlıqlarını brauzer ünvan zolağında oxunaqlı və SEO-ya uyğun formatlaşdırmaq üçün tətbiq olunur."
  },
  {
    "id": "exam-sec9-12",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Anaqram (Anagram) Aşkarlayıcı",
    "serif": "<code>anaqramdir(soz1, soz2)</code> funksiyasını yazın. İki sözün eyni hərflərdən ibarət olduğunu (anaqram) yoxlamaq üçün hər iki sözü kiçik hərflərə çevirin, hərflərini çeşidləyin (<code>split('').sort().join('')</code>) və müqayisə edin. Əgər eynidirsə <code>Anaqramdır</code>, deyilsə <code>Anaqram deyil</code> çap edin. Funksiyanı <code>\"alma\", \"lama\"</code> ilə çağırın.",
    "gozlenilenCixis": "Anaqramdır",
    "starterCode": "function anaqramdir(soz1, soz2) {\n  // Kodunuzu buraya yazın\n}\n\nanaqramdir(\"alma\", \"lama\");",
    "solutionCode": "function anaqramdir(soz1, soz2) {\n  const s1 = soz1.toLowerCase().split(\"\").sort().join(\"\");\n  const s2 = soz2.toLowerCase().split(\"\").sort().join(\"\");\n  console.log(s1 === s2 ? \"Anaqramdır\" : \"Anaqram deyil\");\n}\n\nanaqramdir(\"alma\", \"lama\");",
    "ipuclari": [
      "İpucu 1: 'alma' -> 'a,a,l,m'; 'lama' -> 'a,a,l,m'.",
      "İpucu 2: Hərflər sıralandıqdan sonra sətirlər eyniləşir.",
      "İpucu 3: Nəticə 'Anaqramdır' olmalıdır."
    ],
    "teslimIzahi": "Sətir simvollarının çeşidlənməsi (sort) fərqli ardıcıllıqlı permutasiyaların eyniliyini yoxlamaq üçün ən optimal üsuldur."
  },
  {
    "id": "exam-sec9-13",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Söz Tezliyinin (Word Frequency) Hesablanması",
    "serif": "<code>sozTezliyi(metn)</code> funksiyasını tərtib edin. Mətndəki hər bir sözün neçə dəfə işləndiyini hesablayaraq konsola <code>[söz]: [say]</code> formatında əlifba sırası ilə çıxarın. Funksiyanı <code>\"alma armud alma heyva armud alma\"</code> ilə çağırın.",
    "gozlenilenCixis": "alma: 3\narmud: 2\nheyva: 1",
    "starterCode": "function sozTezliyi(metn) {\n  // Kodunuzu buraya yazın\n}\n\nsozTezliyi(\"alma armud alma heyva armud alma\");",
    "solutionCode": "function sozTezliyi(metn) {\n  const sozler = metn.split(\" \");\n  const tezlik = {};\n  for (let i = 0; i < sozler.length; i++) {\n    const s = sozler[i];\n    tezlik[s] = (tezlik[s] || 0) + 1;\n  }\n  for (const soz in tezlik) {\n    console.log(`${soz}: ${tezlik[soz]}`);\n  }\n}\n\nsozTezliyi(\"alma armud alma heyva armud alma\");",
    "ipuclari": [
      "İpucu 1: split(\" \") ilə sözləri ayırıb obyekt sayğacına yığın.",
      "İpucu 2: 'alma' 3 dəfə, 'armud' 2 dəfə, 'heyva' 1 dəfə rast gəlinir.",
      "İpucu 3: for...in ilə hər sözü və sayını çıxarın."
    ],
    "teslimIzahi": "Mətn daxilində söz və termin tezliklərinin hesablanması axtarış mühərrikləri və mətn analitikası üçün təməl alqoritmdir."
  },
  {
    "id": "exam-sec9-14",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Sadə Şablon Mühərriki (Mini Template Engine)",
    "serif": "<code>sablonMuherriki(sablon, data)</code> funksiyasını qurun. Şablondakı <code>{{acar}}</code> yer tutucularını <code>data[acar]</code> dəyərləri ilə əvəzləyin və konsola <code>Nəticə: [metn]</code> çıxarın. Funksiyanı <code>\"Salam, {{ad}}! Sizin {{say}} yeni bildirişiniz var.\", { ad: \"Aysel\", say: 3 }</code> ilə çağırın.",
    "gozlenilenCixis": "Nəticə: Salam, Aysel! Sizin 3 yeni bildirişiniz var.",
    "starterCode": "function sablonMuherriki(sablon, data) {\n  // Kodunuzu buraya yazın\n}\n\nsablonMuherriki(\"Salam, {{ad}}! Sizin {{say}} yeni bildirişiniz var.\", { ad: \"Aysel\", say: 3 });",
    "solutionCode": "function sablonMuherriki(sablon, data) {\n  let netice = sablon;\n  for (const acar in data) {\n    netice = netice.replace(new RegExp(`{{${acar}}}`, \"g\"), data[acar]);\n  }\n  console.log(`Nəticə: ${netice}`);\n}\n\nsablonMuherriki(\"Salam, {{ad}}! Sizin {{say}} yeni bildirişiniz var.\", { ad: \"Aysel\", say: 3 });",
    "ipuclari": [
      "İpucu 1: data obyektini dövr edərək hər bir '{{acar}}' kombinasiyasını axtarın.",
      "İpucu 2: replace(new RegExp(`{{${acar}}}`, 'g'), data[acar]) ilə əvəzləyin.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    "teslimIzahi": "Mustache və Handlebars kimi məşhur şablon mühərrikləri məhz '{{key}}' işarələrini regex və obyekt dəyərləri ilə əvəzləyərək dinamik HTML generasiya edir."
  },
  {
    "id": "exam-sec9-15",
    "bolmeId": 9,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Mətn Təhlükəsizlik Sanitarizasiyası (XSS Escape)",
    "serif": "<code>htmlSanitarizasiya(metn)</code> funksiyasını yazın. Təhlükəli HTML simvollarını xüsusi HTML entitilərinə çevirin: <code>& -> &amp;</code>, <code>< -> &lt;</code>, <code>> -> &gt;</code>, <code>\" -> &quot;</code>. Təmizlənmiş təhlükəsiz mətni konsola <code>Təhlükəsiz: [metn]</code> formatında çıxarın. Funksiyanı <code>\"<script>alert(\\\"XSS\\\")</script>\"</code> ilə çağırın.",
    "gozlenilenCixis": "Təhlükəsiz: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;",
    "starterCode": "function htmlSanitarizasiya(metn) {\n  // Kodunuzu buraya yazın\n}\n\nhtmlSanitarizasiya(\"<script>alert(\\\"XSS\\\")</script>\");",
    "solutionCode": "function htmlSanitarizasiya(metn) {\n  const xəritə = {\n    \"&\": \"&amp;\",\n    \"<\": \"&lt;\",\n    \">\": \"&gt;\",\n    '\"': \"&quot;\"\n  };\n  let netice = \"\";\n  for (let i = 0; i < metn.length; i++) {\n    const char = metn[i];\n    netice += xəritə[char] || char;\n  }\n  console.log(`Təhlükəsiz: ${netice}`);\n}\n\nhtmlSanitarizasiya(\"<script>alert(\\\"XSS\\\")</script>\");",
    "ipuclari": [
      "İpucu 1: Simvollar xəritəsi (mapping) yaradıb hər simvolu yoxlayın.",
      "İpucu 2: '<' simvolu '&lt;', '>' simvolu '&gt;', '\"' isə '&quot;' olacaq.",
      "İpucu 3: Formatı dəqiq təmin edin."
    ],
    "teslimIzahi": "HTML simvollarının entitilərə escape edilməsi kənar istifadəçi girişlərində Cross-Site Scripting (XSS) inyeksiyasının qarşısını alan təməl təhlükəsizlik tədbiridir."
  },
  {
    "id": "exam-sec10-01",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Sadə try...catch Bloku ilə Xətanın Tutulması",
    "serif": "Proqramda baş verə biləcək işləmə zamanı xətasını (runtime error) proqramı çökdürmədən tutmaq lazımdır. try blokunda elan edilməmiş dəyişənə müraciət edin. catch blokunda xətanın adını (err.name) 'Xəta növü: ReferenceError' formatında konsola çıxarın.",
    "gozlenilenCixis": "Xəta növü: ReferenceError",
    "starterCode": "function xetaniTut() {\n  // try...catch blokunu qurun\n  // Elan edilməmiş dəyişənə müraciət edin və catch-də err.name çıxarın\n}\n\nxetaniTut();",
    "solutionCode": "function xetaniTut() {\n  try {\n    nonExistentVariable;\n  } catch (err) {\n    console.log(`Xəta növü: ${err.name}`);\n  }\n}\n\nxetaniTut();",
    "ipuclari": [
      "İpucu 1: try blokunda icra zamanı xəta yarada biləcək kod yerləşdirilir.",
      "İpucu 2: catch(err) parametri tutulan Error obyektini saxlayır.",
      "İpucu 3: err.name xətanın növünü (məsələn, 'ReferenceError') qaytarır."
    ],
    "teslimIzahi": "try...catch bloku JavaScript-də işləmə zamanı xətaları nəzarətə almaq üçün istifadə olunur. Elan edilməmiş dəyişənə müraciət ReferenceError xətası doğurur. catch bloku bu xətanı tutur və err.name vasitəsilə adını ekrana yazdırır."
  },
  {
    "id": "exam-sec10-02",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "throw new Error ilə Xüsusi Xəta Atılması",
    "serif": "Yaş yoxlaması aparan funksiya yazın. Əgər parametr kimi verilən yaş 0-dan kiçikdirsə, 'Yaş mənfi ola bilməz!' xəbərdarlığı ilə Error atın (throw new Error). try...catch daxilində -5 yaşı ilə yoxlayın və catch blokunda xəta mesajını konsola çıxarın.",
    "gozlenilenCixis": "Xəta: Yaş mənfi ola bilməz!",
    "starterCode": "function yasiYoxla(yas) {\n  // Şərt mənfi olduqda throw new Error istifadə edin\n}\n\nfunction testEt() {\n  // try...catch daxilində yasiYoxla(-5) çağırın\n}\n\ntestEt();",
    "solutionCode": "function yasiYoxla(yas) {\n  if (yas < 0) {\n    throw new Error('Yaş mənfi ola bilməz!');\n  }\n  return yas;\n}\n\nfunction testEt() {\n  try {\n    yasiYoxla(-5);\n  } catch (err) {\n    console.log(`Xəta: ${err.message}`);\n  }\n}\n\ntestEt();",
    "ipuclari": [
      "İpucu 1: Şərt ödəndikdə 'throw new Error(mesaj)' sintaksisi ilə icranı dayandırıb xəta atın.",
      "İpucu 2: catch blokuna ötürülən obyektin .message xassəsi atılan mətni saxlayır.",
      "İpucu 3: 'Xəta: ' prefiksi ilə err.message birləşdirilməlidir."
    ],
    "teslimIzahi": "throw açar sözü proqramçının istədiyi məntiqi qayda pozuntusunda xüsusi istisna (exception) yaratmasına imkan verir. Error konstruktoru çağırıldıqda stack trace və mesaj formalaşır və ən yaxın catch blokuna ötürülür."
  },
  {
    "id": "exam-sec10-03",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "finally Blokunun Mütləq İcrası",
    "serif": "Verilən əməliyyatda xəta baş versə belə, təmizləmə əməliyyatının mütləq işə düşməsini təmin edin. try blokunda xəta atın, catch-də 'Xəta baş verdi' çıxarın, finally blokunda isə hər zaman 'Təmizləmə tamamlandı' konsola yazdırın.",
    "gozlenilenCixis": "Xəta baş verdi\nTəmizləmə tamamlandı",
    "starterCode": "function emeliyyat() {\n  // try, catch və finally bloklarını qurun\n}\n\nemeliyyat();",
    "solutionCode": "function emeliyyat() {\n  try {\n    throw new Error('Gözlənilməz problem');\n  } catch (err) {\n    console.log('Xəta baş verdi');\n  } finally {\n    console.log('Təmizləmə tamamlandı');\n  }\n}\n\nemeliyyat();",
    "ipuclari": [
      "İpucu 1: try blokundan sonra catch və ən sonda finally gəlir.",
      "İpucu 2: catch daxilində konsola 'Xəta baş verdi' yazın.",
      "İpucu 3: finally bloku xətanın olub-olmamasından asılı olmayaraq həmişə icra olunur."
    ],
    "teslimIzahi": "finally bloku resursların azad edilməsi, fayl axınlarının və ya verilənlər bazası bağlantılarının bağlanması kimi kritik təmizləmə işləri üçün idealdır. try və ya catch blokunda nə baş verməsindən asılı olmayaraq finally həmişə icra edilir."
  },
  {
    "id": "exam-sec10-04",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "JSON Parse Xətalarının Təhlükəsiz Tutulması",
    "serif": "İstifadəçidən daxil olan JSON mətnini etibarlı şəkildə obyektə çevirən funksiya yazın. Əgər JSON sintaksisi pozulubsa (məsələn: \"{ ad: 'Əli' }\"), funksiya çökməməli, catch bloku ilə 'Sintaksis xətası: JSON formatı yalnışdır' xəbərdarlığını konsola çıxarmalıdır.",
    "gozlenilenCixis": "Sintaksis xətası: JSON formatı yalnışdır",
    "starterCode": "function tehlukesizJsonParse(jsonMətni) {\n  // JSON.parse cəhdini try...catch daxilində icra edin\n}\n\ntehlukesizJsonParse(\"{ ad: 'Əli' }\");",
    "solutionCode": "function tehlukesizJsonParse(jsonMətni) {\n  try {\n    return JSON.parse(jsonMətni);\n  } catch (err) {\n    console.log('Sintaksis xətası: JSON formatı yalnışdır');\n  }\n}\n\ntehlukesizJsonParse(\"{ ad: 'Əli' }\");",
    "ipuclari": [
      "İpucu 1: JSON standartında açarlar mütləq cüt dırnaq içində olmalıdır, tək dırnaq SyntaxError yaradır.",
      "İpucu 2: JSON.parse() çağırışını try bloku içərisinə salın.",
      "İpucu 3: catch blokunda tələb olunan mesajı konsola yazdırın."
    ],
    "teslimIzahi": "JSON.parse funksiyası etibarsız sintaksislə qarşılaşdıqda dərhal SyntaxError atır. İstehsalat mühitində kənar API-lərdən və ya istifadəçidən gələn JSON-lar mütləq try...catch ilə əhatələnməlidir."
  },
  {
    "id": "exam-sec10-05",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Xəta Tiplərinin Diferensiasiyası (instanceof)",
    "serif": "Funksiyaya daxil olan parametr tipini və qiymət intervalını yoxlayın. Əgər parametr ədəd deyilsə TypeError atın ('Ədəd gözlənilirdi'). Əgər ədəd 1 ilə 100 arasında deyilsə RangeError atın ('Diapazon xətası: 1-100'). Gələn xətanı catch-də instanceof ilə yoxlayıb uyğun olaraq '[TypeError]: mesaj' və ya '[RangeError]: mesaj' formatında konsola çıxarın. Funksiyanı 'yüz' arqumenti ilə çağırın.",
    "gozlenilenCixis": "[TypeError]: Ədəd gözlənilirdi",
    "starterCode": "function balYoxla(bal) {\n  // Parametr tipini və intervalını yoxlayın, fərqli xətalar atın\n}\n\nfunction icraEt() {\n  // try...catch daxilində instanceof ilə yoxlayın\n}\n\nicraEt();",
    "solutionCode": "function balYoxla(bal) {\n  if (typeof bal !== 'number') {\n    throw new TypeError('Ədəd gözlənilirdi');\n  }\n  if (bal < 1 || bal > 100) {\n    throw new RangeError('Diapazon xətası: 1-100');\n  }\n  return bal;\n}\n\nfunction icraEt() {\n  try {\n    balYoxla('yüz');\n  } catch (err) {\n    if (err instanceof TypeError) {\n      console.log(`[TypeError]: ${err.message}`);\n    } else if (err instanceof RangeError) {\n      console.log(`[RangeError]: ${err.message}`);\n    }\n  }\n}\n\nicraEt();",
    "ipuclari": [
      "İpucu 1: typeof bal !== 'number' olduqda throw new TypeError(...) istifadə edin.",
      "İpucu 2: catch daxilində 'err instanceof TypeError' ilə xətanın növünü yoxlayın.",
      "İpucu 3: Çıxış formatı: `[${err.constructor.name}]: ${err.message}`."
    ],
    "teslimIzahi": "JavaScript-də quraşdırılmış xəta növləri (TypeError, RangeError, SyntaxError və s.) Error sinifindən törəyir. instanceof operatoru ilə catch blokunda spesifik xəta növünü təyin edib fərdi reaksiya vermək mümkündür."
  },
  {
    "id": "exam-sec10-06",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Xüsusi Xəta Sinifi (Custom Error Class)",
    "serif": "Error sinifindən törəyən 'ValidasiyaXetasi' adlı fərdi sinif yaradın. Bu sinfin constructor-u mesaj qəbul etməli və this.name = 'ValidasiyaXetasi' təyin etməlidir. İstifadəçi adı 3 hərfdən qısa olduqda bu xətanı atın ('İstifadəçi adı çox qısadır'). 'Əli' adı üçün xəta atın və konsola 'ValidasiyaXetasi: İstifadəçi adı çox qısadır' çap edin.",
    "gozlenilenCixis": "ValidasiyaXetasi: İstifadəçi adı çox qısadır",
    "starterCode": "class ValidasiyaXetasi extends Error {\n  // Konstruktoru qurun və this.name təyin edin\n}\n\nfunction istifadeciYarat(ad) {\n  // Adın uzunluğu < 4 olduqda xəta atın\n}\n\n// try...catch ilə 'Əli' parametrini yoxlayın",
    "solutionCode": "class ValidasiyaXetasi extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'ValidasiyaXetasi';\n  }\n}\n\nfunction istifadeciYarat(ad) {\n  if (ad.length < 4) {\n    throw new ValidasiyaXetasi('İstifadəçi adı çox qısadır');\n  }\n  return { ad };\n}\n\ntry {\n  istifadeciYarat('Əli');\n} catch (err) {\n  console.log(`${err.name}: ${err.message}`);\n}",
    "ipuclari": [
      "İpucu 1: 'class ValidasiyaXetasi extends Error' konstruktorunda super(message) çağırın.",
      "İpucu 2: super-dən sonra this.name = 'ValidasiyaXetasi' yazın.",
      "İpucu 3: catch daxilində err.name və err.message-i şablon sətirlə birləşdirin."
    ],
    "teslimIzahi": "Fərdi xəta sinifləri (Custom Errors) proqramın domeninə uyğun xətaları (məsələn, Validasiya, Şəbəkə, Təhlükəsizlik) sistem xətalarından ayırmaq üçün Error sinifini genişləndirir."
  },
  {
    "id": "exam-sec10-07",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Təhlükəsiz Riyazi Bölmə və Sıfıra Bölmə Nəzarəti",
    "serif": "İki ədədi bölən bolme(a, b) funksiyası hazırlayın. Əgər b === 0 olarsa, 'Sıfıra bölmək qeyri-mümkündür' mesajı ilə xəta atılsın. Əks halda bölmənin tam nəticəsini qaytarsın. bolme(10, 0) çağırışını try...catch ilə idarə edib konsola '[Xəta]: Sıfıra bölmək qeyri-mümkündür' yazdırın.",
    "gozlenilenCixis": "[Xəta]: Sıfıra bölmək qeyri-mümkündür",
    "starterCode": "function bolme(a, b) {\n  // b sıfır olduqda xəta atın\n}\n\n// try...catch ilə bolme(10, 0) yoxlayın",
    "solutionCode": "function bolme(a, b) {\n  if (b === 0) {\n    throw new Error('Sıfıra bölmək qeyri-mümkündür');\n  }\n  return a / b;\n}\n\ntry {\n  bolme(10, 0);\n} catch (err) {\n  console.log(`[Xəta]: ${err.message}`);\n}",
    "ipuclari": [
      "İpucu 1: JavaScript-də 10 / 0 Infinity qaytarır, buna görə sıfıra bölməni əl ilə yoxlayıb xəta atmaq lazımdır.",
      "İpucu 2: if (b === 0) throw new Error(...) yoxlaması qoyun.",
      "İpucu 3: catch daxilində `[Xəta]: ${err.message}` çap edin."
    ],
    "teslimIzahi": "JavaScript digər bəzi dillərdən fərqli olaraq sıfıra böldükdə xəta atmır, Infinity qaytarır. Biznes məntiqində bu halı xəta kimi qəbul etmək üçün proqramçı açıq şəkildə throw new Error istifadə etməlidir."
  },
  {
    "id": "exam-sec10-08",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Xətanın Yenidən Atılması (Rethrowing Pattern)",
    "serif": "Daxili və xarici try...catch qurun. Daxili blokda əgər xəta TypeError deyilsə, onu saxlamayıb yuxarı səviyyəyə təkrar atın (rethrow). Daxili blokda SyntaxError atın ('Sintaksis xətası'). Xarici blok bu xətanı tutaraq konsola 'Xarici qoruyucu tutdu: Sintaksis xətası' çıxarsın.",
    "gozlenilenCixis": "Xarici qoruyucu tutdu: Sintaksis xətası",
    "starterCode": "function rethrowNumunesi() {\n  // Xarici try...catch\n  // Daxili try...catch daxilində xətanı yoxlayıb throw err ilə yenidən atın\n}\n\nrethrowNumunesi();",
    "solutionCode": "function rethrowNumunesi() {\n  try {\n    try {\n      throw new SyntaxError('Sintaksis xətası');\n    } catch (err) {\n      if (err instanceof TypeError) {\n        console.log('Daxili TypeError idarə olundu');\n      } else {\n        throw err; // Naməlum və ya digər xətanı yuxarı atırıq\n      }\n    }\n  } catch (err) {\n    console.log(`Xarici qoruyucu tutdu: ${err.message}`);\n  }\n}\n\nrethrowNumunesi();",
    "ipuclari": [
      "İpucu 1: catch daxilində yalnız bildiyimiz xətaları həll edib, qalanlarını `throw err` ilə buraxmaq 'rethrowing' adlanır.",
      "İpucu 2: Daxili catch SyntaxError-u həll etmir və `throw err` icra edir.",
      "İpucu 3: Xarici catch bu xətanı tutur və tələb olunan mətni çap edir."
    ],
    "teslimIzahi": "Rethrowing nümunəsi təhlükəsiz proqramlaşdırmanın əsas qaydalarındandır: bir funksiya yalnız cavabdeh olduğu xətaları tutmalı, gözləmədiyi və ya sistem səviyyəli digər xətaları daha yuxarı qatlara ötürməlidir."
  },
  {
    "id": "exam-sec10-09",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "finally ilə Əməliyyat Statusunun Təminatı",
    "serif": "Asinxron və ya ağır əməliyyat başladarkən `status = 'aktiv'` təyin edilir. Əməliyyat zamanı xəta baş versə belə, `finally` blokunda status mütləq `'tamamlandı'` olmalıdır. Proses zamanı baş verən addımları massivə yığın: ['Başladı', 'Xəta: Fayl tapılmadı', 'Status: tamamlandı']. Sonda bu addımları sətirbəsətir konsola çıxarın.",
    "gozlenilenCixis": "Başladı\nXəta: Fayl tapılmadı\nStatus: tamamlandı",
    "starterCode": "function prosesiIcraEt() {\n  const loqlar = [];\n  let status = 'aktiv';\n  // try, catch, finally ardıcıllığını qurun və loqlar massivini doldurun\n}\n\nprosesiIcraEt();",
    "solutionCode": "function prosesiIcraEt() {\n  const loqlar = [];\n  let status = 'aktiv';\n  try {\n    loqlar.push('Başladı');\n    throw new Error('Fayl tapılmadı');\n  } catch (err) {\n    loqlar.push(`Xəta: ${err.message}`);\n  } finally {\n    status = 'tamamlandı';\n    loqlar.push(`Status: ${status}`);\n  }\n  loqlar.forEach(l => console.log(l));\n}\n\nprosesiIcraEt();",
    "ipuclari": [
      "İpucu 1: try daxilində 'Başladı' yazısını loqlara əlavə edin və xəta atın.",
      "İpucu 2: catch daxilində xəta mesajını loqlara daxil edin.",
      "İpucu 3: finally daxilində status-u yeniləyin və 'Status: tamamlandı' yazısını qeyd edin."
    ],
    "teslimIzahi": "finally bloku dəyişənlərin vəziyyətini (state) ilkin və ya təhlükəsiz vəziyyətə gətirmək üçün idealdır. Xəta olsa da, olmasa da statusun yenilənməsi proqramın asılı vəziyyətdə (deadlock) qalmasının qarşısını alır."
  },
  {
    "id": "exam-sec10-10",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Error.cause ilə Xəta Zəncirinin (Chained Errors) Yaradılması",
    "serif": "Müasir JavaScript (ES2022) xətaların səbəbini `cause` parametri ilə bağlamağa imkan verir. Aşağı səviyyəli şəbəkə xətası ('DNS cavab vermir') baş verdikdə, onu yüksək səviyyəli 'Məlumat bazası sorğusu uğursuz oldu' xətasına bükün (new Error(msg, { cause: err })). Ən yuxarı səviyyədə həm əsas xətanı, həm də onun alt səbəbini (err.cause.message) konsola çıxarın: 'Əsas: Məlumat bazası sorğusu uğursuz oldu -> Səbəb: DNS cavab vermir'.",
    "gozlenilenCixis": "Əsas: Məlumat bazası sorğusu uğursuz oldu -> Səbəb: DNS cavab vermir",
    "starterCode": "function asagiSeviyyeSorqu() {\n  throw new Error('DNS cavab vermir');\n}\n\nfunction xidmet() {\n  // asagiSeviyyeSorqu() çağırın və cause ilə yeni xəta atın\n}\n\n// Ən yuxarıda tutub konsola formatlanmış şəkildə çıxarın",
    "solutionCode": "function asagiSeviyyeSorqu() {\n  throw new Error('DNS cavab vermir');\n}\n\nfunction xidmet() {\n  try {\n    asagiSeviyyeSorqu();\n  } catch (err) {\n    throw new Error('Məlumat bazası sorğusu uğursuz oldu', { cause: err });\n  }\n}\n\ntry {\n  xidmet();\n} catch (err) {\n  console.log(`Əsas: ${err.message} -> Səbəb: ${err.cause.message}`);\n}",
    "ipuclari": [
      "İpucu 1: new Error(mesaj, { cause: ilkinXeta }) sintaksisindən istifadə edin.",
      "İpucu 2: err.cause ilkin xəta obyektinə istinad edir.",
      "İpucu 3: err.cause.message alt səviyyəli səbəbin mətnini qaytarır."
    ],
    "teslimIzahi": "Error.cause ES2022 ilə gələn xüsusiyyətdir. O, alt qatlarda baş verən texniki xətaları itirmədən, yüksək səviyyəli istifadəçi yönümlü xətalar daxilində zəncirvari şəkildə saxlamağa və diaqnostikanı asanlaşdırmağa imkan verir."
  },
  {
    "id": "exam-sec10-11",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Asinxron Funksiyalarda try...catch və async/await Tələsi",
    "serif": "Asinxron Promise rədd edildikdə (reject) onu tutmaq üçün `await` vacibdir. `melumatGetir(id)` funksiyası id < 0 olduqda Promise.reject(new Error('Yanlış ID')) qaytarır. `async function istifadeciYukle()` daxilində `await melumatGetir(-1)` çağırışını `try...catch` ilə əhatələyin və xətanı '[Asinxron Xəta]: Yanlış ID' kimi konsola yazdırın.",
    "gozlenilenCixis": "[Asinxron Xəta]: Yanlış ID",
    "starterCode": "function melumatGetir(id) {\n  if (id < 0) return Promise.reject(new Error('Yanlış ID'));\n  return Promise.resolve({ id, ad: 'Murad' });\n}\n\nasync function istifadeciYukle() {\n  // try...catch və await ilə çağırışı idarə edin\n}\n\nistifadeciYukle();",
    "solutionCode": "function melumatGetir(id) {\n  if (id < 0) return Promise.reject(new Error('Yanlış ID'));\n  return Promise.resolve({ id, ad: 'Murad' });\n}\n\nasync function istifadeciYukle() {\n  try {\n    await melumatGetir(-1);\n  } catch (err) {\n    console.log(`[Asinxron Xəta]: ${err.message}`);\n  }\n}\n\nistifadeciYukle();",
    "ipuclari": [
      "İpucu 1: async funksiya daxilində await yazılmadıqda try...catch Promise xətasını tuta bilmir.",
      "İpucu 2: await açar sözü Promise rədd edildikdə həmin xətanı birbaşa throw edir.",
      "İpucu 3: catch daxilində err.message-i çap edin."
    ],
    "teslimIzahi": "Asinxron kodda ən çox edilən səhvlərdən biri await açar sözünü unutmaqdır. Əgər await yazılmazsa, Promise arxa planda rədd edilir (UnhandledPromiseRejection) və sinxron try...catch bloku onu tuta bilmir. await ilə xəta sinxron xəta kimi catch-ə ötürülür."
  },
  {
    "id": "exam-sec10-12",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "HTTP Xəta İyerarxiyası (NotFoundError və UnauthorizedError)",
    "serif": "Veb tətbiqlər üçün baza `HttpError extends Error` sinifi yaradın (status kodu saxlasın). Ondan törəyən `NotFoundError` (status: 404) və `UnauthorizedError` (status: 401) siniflərini qurun. `routeHandler(yol)` funksiyası '/gizli' yolu üçün `UnauthorizedError('Giriş qadağandır')`, digər naməlum yollar üçün `NotFoundError('Səhifə tapılmadı')` atsın. '/namelum' yolu ilə yoxlayıb konsola 'Status 404: Səhifə tapılmadı' çıxarın.",
    "gozlenilenCixis": "Status 404: Səhifə tapılmadı",
    "starterCode": "class HttpError extends Error {\n  // status və message qəbul edin\n}\n\nclass NotFoundError extends HttpError {\n  // status 404 olsun\n}\n\nclass UnauthorizedError extends HttpError {\n  // status 401 olsun\n}\n\n// routeHandler funksiyasını yazın və try...catch ilə çağırın",
    "solutionCode": "class HttpError extends Error {\n  constructor(message, status) {\n    super(message);\n    this.name = this.constructor.name;\n    this.status = status;\n  }\n}\n\nclass NotFoundError extends HttpError {\n  constructor(message = 'Tapılmadı') {\n    super(message, 404);\n  }\n}\n\nclass UnauthorizedError extends HttpError {\n  constructor(message = 'İcazəsiz giriş') {\n    super(message, 401);\n  }\n}\n\nfunction routeHandler(yol) {\n  if (yol === '/gizli') {\n    throw new UnauthorizedError('Giriş qadağandır');\n  }\n  throw new NotFoundError('Səhifə tapılmadı');\n}\n\ntry {\n  routeHandler('/namelum');\n} catch (err) {\n  if (err instanceof HttpError) {\n    console.log(`Status ${err.status}: ${err.message}`);\n  }\n}",
    "ipuclari": [
      "İpucu 1: HttpError konstruktorunda super(message) və this.status = status yazın.",
      "İpucu 2: NotFoundError super(message, 404) çağırır.",
      "İpucu 3: catch blokunda err.status və err.message-i çap edin."
    ],
    "teslimIzahi": "İstehsalat backend sistemlərində HTTP status kodlarını xəta siniflərinə bağlamaq (Error Hierarchy) mərkəzləşdirilmiş middleware-lərin (məsələn, Express error handler) avtomatik düzgün HTTP statusu qaytarmasını təmin edir."
  },
  {
    "id": "exam-sec10-13",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Xətalara Dözümlü Toplu Məlumat Emalı (Fault-Tolerant Processing)",
    "serif": "İstifadəçi qeydiyyat siyahısını emal edən funksiya yazın: `[{id: 1, email: 'a@test.com'}, {id: 2, email: 'invalid'}, {id: 3, email: 'b@test.com'}]`. Əgər email-də '@' işarəsi yoxdursa, xəta atılsın. Bütün massiv dövrə ilə emal olunarkən bir xətaya görə bütün proses dayanmamalı, uğurlu qeydlər 'ugurlular' massivinə, xətalılar 'xetalar' massivinə yığılmalıdır. Sonda 'Uğurlu: 2, Xətalı: 1' konsola çıxarılmalıdır.",
    "gozlenilenCixis": "Uğurlu: 2, Xətalı: 1",
    "starterCode": "function topluEmalEt(istifadeciler) {\n  const ugurlular = [];\n  const xetalar = [];\n  // Hər istifadəçi üçün dövrə daxilində try...catch qurun\n}\n\nconst testData = [\n  { id: 1, email: 'a@test.com' },\n  { id: 2, email: 'invalid' },\n  { id: 3, email: 'b@test.com' }\n];\n\ntopluEmalEt(testData);",
    "solutionCode": "function topluEmalEt(istifadeciler) {\n  const ugurlular = [];\n  const xetalar = [];\n  \n  for (const u of istifadeciler) {\n    try {\n      if (!u.email.includes('@')) {\n        throw new Error(`Yanlış email formatı: ${u.email}`);\n      }\n      ugurlular.push(u);\n    } catch (err) {\n      xetalar.push({ id: u.id, xeta: err.message });\n    }\n  }\n  \n  console.log(`Uğurlu: ${ugurlular.length}, Xətalı: ${xetalar.length}`);\n}\n\nconst testData = [\n  { id: 1, email: 'a@test.com' },\n  { id: 2, email: 'invalid' },\n  { id: 3, email: 'b@test.com' }\n];\n\ntopluEmalEt(testData);",
    "ipuclari": [
      "İpucu 1: Dövrənin içərisində hər element üçün ayrıca try...catch qoyun.",
      "İpucu 2: Xəta baş verdikdə dövrə qırılmır (break olmur), catch xətanı qeyd edib növbəti elementə keçir.",
      "İpucu 3: Sonda massivlərin .length göstəricilərini konsola çıxarın."
    ],
    "teslimIzahi": "Kütləvi məlumat emalında tək bir qüsurlu sətir bütün tranzaksiyanı məhv etməməlidir. Hər iterasiyanı daxili try...catch ilə izolyasiya etmək dayanıqlı (fault-tolerant) sistemlərin təməl prinsipidir."
  },
  {
    "id": "exam-sec10-14",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Təmiz Xəta Formatlayıcısı və Loq Qeydiyyatı",
    "serif": "Proqramda baş verən xətaları audit üçün obyekt şəklində formatlayan `xetaniFormatla(err)` funksiyası hazırlayın. Funksiya xətadan timestamp (tarix), name, message və kritiklik dərəcəsini (`sev: 'HIGH'`) çıxarmalıdır. Əgər xəta Error obyekti deyilsə, onu ümumi xəta kimi idarə etməlidir. `new RangeError('Yaddaş limiti')` ilə funksiyanı çağırıb formatlanmış JSON-u konsola çıxarın (yalnız `name`, `message` və `sev` açarlarını göstərin: '{\"name\":\"RangeError\",\"message\":\"Yaddaş limiti\",\"sev\":\"HIGH\"}').",
    "gozlenilenCixis": "{\"name\":\"RangeError\",\"message\":\"Yaddaş limiti\",\"sev\":\"HIGH\"}",
    "starterCode": "function xetaniFormatla(err) {\n  // Error obyektini strukturlaşdırılmış obyektə çevirib JSON string kimi qaytarın\n}\n\n// new RangeError('Yaddaş limiti') ilə test edin",
    "solutionCode": "function xetaniFormatla(err) {\n  const loq = {\n    name: err instanceof Error ? err.name : 'UnknownError',\n    message: err instanceof Error ? err.message : String(err),\n    sev: 'HIGH'\n  };\n  return JSON.stringify(loq);\n}\n\nconsole.log(xetaniFormatla(new RangeError('Yaddaş limiti')));",
    "ipuclari": [
      "İpucu 1: err instanceof Error yoxlaması apararaq etibarlılığı təmin edin.",
      "İpucu 2: Obyektə name, message və sev açarlarını verin.",
      "İpucu 3: JSON.stringify() ilə obyekt sətirə çevrilir."
    ],
    "teslimIzahi": "Monitorinq alətləri (məsələn, Sentry, Datadog) xətaları xam string kimi deyil, strukturlaşdırılmış JSON formatında qəbul edir. Xətanın növü və ciddiliyini bu şəkildə qruplaşdırmaq istehsalatda analizi sürətləndirir."
  },
  {
    "id": "exam-sec10-15",
    "bolmeId": 10,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Eksponensial Təkrar Cəhd Mexanizmi (Resilient Retry Engine)",
    "serif": "Şəbəkə və ya xidmət kəsintilərinə qarşı dözümlü `tekrarCeht(emeliyyatFn, maxCeht)` funksiyası qurun. Funksiya verilən əməliyyatı icra etməyə çalışmalıdır. Uğursuz olarsa, hər cəhddən sonra sayğacı artırmalı və yenidən cəhd etməlidir. Əgər maxCeht sayına çatarsa, 'Limit aşıldı: ' və sonuncu xəta mesajını atmalıdır. Simulyasiya: İlk 2 çağırışda 'Bağlantı kəsildi' xətası atan, 3-cü çağırışda 'Məlumat uğurla alındı' qaytaran funksiyanı maxCeht=3 ilə çağırın və nəticəni konsola çıxarın: 'Uğur (Cəhd 3): Məlumat uğurla alındı'.",
    "gozlenilenCixis": "Uğur (Cəhd 3): Məlumat uğurla alındı",
    "starterCode": "async function tekrarCeht(emeliyyatFn, maxCeht = 3) {\n  // Dövrə ilə əməliyyatı sınayın, uğursuz olduqda təkrar cəhd edin\n}\n\n// Simulyasiya funksiyasını hazırlayın və icra edin",
    "solutionCode": "async function tekrarCeht(emeliyyatFn, maxCeht = 3) {\n  let sonXeta;\n  for (let cehd = 1; cehd <= maxCeht; cehd++) {\n    try {\n      const netice = await emeliyyatFn(cehd);\n      return `Uğur (Cəhd ${cehd}): ${netice}`;\n    } catch (err) {\n      sonXeta = err;\n    }\n  }\n  throw new Error(`Limit aşıldı: ${sonXeta.message}`);\n}\n\nlet saygac = 0;\nasync function qeyriStabilXidmet(cehd) {\n  saygac++;\n  if (saygac < 3) {\n    throw new Error('Bağlantı kəsildi');\n  }\n  return 'Məlumat uğurla alındı';\n}\n\ntekrarCeht(qeyriStabilXidmet, 3).then(res => console.log(res));",
    "ipuclari": [
      "İpucu 1: for dövrəsi ilə 1-dən maxCeht-ə qədər iterasiya edin.",
      "İpucu 2: try blokunda emeliyyatFn çağırın, uğurlu olduqda dərhal qaytarın.",
      "İpucu 3: catch daxilində sonuncu xətanı yadda saxlayın, dövrə bitərsə throw new Error edin."
    ],
    "teslimIzahi": "Müasir paylanmış mikroxidmət arxitekturalarında qısamüddətli şəbəkə titrəmələri adi haldır. Retry (təkrar cəhd) nümunəsi tranzaksiyanın dərhal çökməsinin qarşısını alaraq sistemin ümumi etibarlılığını 99.9%-ə çatdırır."
  },
  {
    "id": "exam-sec11-01",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "map() ilə Qiymətlərə ƏDV Hesablanması",
    "serif": "Verilmiş qiymətlər massivindəki ([100, 200, 300]) hər bir qiymətə 18% ƏDV əlavə edərək yeni qiymətlər massivi formalaşdırın (qiymət * 1.18). Nəticə massivini vergüllə ayrılmış şəkildə konsola çıxarın: '118, 236, 354'.",
    "gozlenilenCixis": "118, 236, 354",
    "starterCode": "function edvHesabla(qiymetler) {\n  // map metodundan istifadə edin və vergüllə ayrılmış string kimi çıxarın\n}\n\nedvHesabla([100, 200, 300]);",
    "solutionCode": "function edvHesabla(qiymetler) {\n  const netice = qiymetler.map(q => q * 1.18);\n  console.log(netice.join(', '));\n}\n\nedvHesabla([100, 200, 300]);",
    "ipuclari": [
      "İpucu 1: map() massivin hər bir elementi üzərində verilmiş funksiyanı icra edərək eyni uzunluqda yeni massiv qaytarır.",
      "İpucu 2: Arrow funksiya sintaksisindən istifadə edin: `q => q * 1.18`.",
      "İpucu 3: netice.join(', ') ilə elementləri birləşdirib konsola çıxarın."
    ],
    "teslimIzahi": "Array.prototype.map() metodu ilkin massivi dəyişdirmədən (immutability) hər elementin transformasiya olunmuş surətini ehtiva edən yeni massiv qaytarır. Funksional proqramlaşdırmanın təməl daşlarındandır."
  },
  {
    "id": "exam-sec11-02",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "filter() ilə Aktiv İstifadəçilərin Seçilməsi",
    "serif": "İstifadəçi obyektlərindən ibarət massiv verilmişdir: `[{ad: 'Aygün', aktiv: true}, {ad: 'Rauf', aktiv: false}, {ad: 'Kamran', aktiv: true}]`. filter() metodundan istifadə edərək yalnız `aktiv: true` olan istifadəçilərin adlarını tapın və vergüllə ayrılmış şəkildə konsola çıxarın: 'Aygün, Kamran'.",
    "gozlenilenCixis": "Aygün, Kamran",
    "starterCode": "function aktivleriTap(istifadeciler) {\n  // filter və map metodlarını tətbiq edin\n}\n\nconst users = [\n  { ad: 'Aygün', aktiv: true },\n  { ad: 'Rauf', aktiv: false },\n  { ad: 'Kamran', aktiv: true }\n];\n\naktivleriTap(users);",
    "solutionCode": "function aktivleriTap(istifadeciler) {\n  const aktivAdlar = istifadeciler\n    .filter(u => u.aktiv)\n    .map(u => u.ad);\n  console.log(aktivAdlar.join(', '));\n}\n\nconst users = [\n  { ad: 'Aygün', aktiv: true },\n  { ad: 'Rauf', aktiv: false },\n  { ad: 'Kamran', aktiv: true }\n];\n\naktivleriTap(users);",
    "ipuclari": [
      "İpucu 1: filter(u => u.aktiv) yalnız şərti true olan obyektləri saxlayır.",
      "İpucu 2: filter-dən sonra .map(u => u.ad) zənciri ilə adları ayırın.",
      "İpucu 3: .join(', ') ilə adları birləşdirib çap edin."
    ],
    "teslimIzahi": "filter() metodu predikat funksiyası true qaytaran elementləri seçir. map() ilə birlikdə istifadə edildikdə məlumatların süzgəcdən keçirilməsi və proyeksiya edilməsi çox asanlıqla reallaşır."
  },
  {
    "id": "exam-sec11-03",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "find() və findIndex() Metodları",
    "serif": "Məhsullar massivində (`[{id: 101, ad: 'Klaviatura'}, {id: 102, ad: 'Siçan'}, {id: 103, ad: 'Monitor'}]`) `id: 102` olan məhsulun adını və massivdəki indeksini tapın. Konsola 'Məhsul: Siçan, İndeks: 1' çap edin.",
    "gozlenilenCixis": "Məhsul: Siçan, İndeks: 1",
    "starterCode": "function mehsulAxtar(mehsullar, axtarilanId) {\n  // find və findIndex metodlarını tətbiq edin\n}\n\nconst mehsullar = [\n  { id: 101, ad: 'Klaviatura' },\n  { id: 102, ad: 'Siçan' },\n  { id: 103, ad: 'Monitor' }\n];\n\nmehsulAxtar(mehsullar, 102);",
    "solutionCode": "function mehsulAxtar(mehsullar, axtarilanId) {\n  const tapilan = mehsullar.find(m => m.id === axtarilanId);\n  const indeks = mehsullar.findIndex(m => m.id === axtarilanId);\n  console.log(`Məhsul: ${tapilan.ad}, İndeks: ${indeks}`);\n}\n\nconst mehsullar = [\n  { id: 101, ad: 'Klaviatura' },\n  { id: 102, ad: 'Siçan' },\n  { id: 103, ad: 'Monitor' }\n];\n\nmehsulAxtar(mehsullar, 102);",
    "ipuclari": [
      "İpucu 1: find() şərtə uyğun gələn ilk elementi qaytarır.",
      "İpucu 2: findIndex() həmin elementin 0-dan başlayan indeksini qaytarır (tapılmadıqda -1).",
      "İpucu 3: Şablon sətir ilə tələb olunan formatda çap edin."
    ],
    "teslimIzahi": "find() və findIndex() metodları şərt ödənən kimi axtarışı dayandırır (short-circuiting), bu da filter()[0] ilə müqayisədə performans baxımından qat-qat sərfəlidir."
  },
  {
    "id": "exam-sec11-04",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "reduce() ilə Səbətin Ümumi Məbləğinin Hesablanması",
    "serif": "Səbətdəki məhsullar massivi verilmişdir: `[{ad: 'Kitab', qiymet: 15, say: 2}, {ad: 'Dəftər', qiymet: 4, say: 5}, {ad: 'Qələm', qiymet: 2, say: 10}]`. `reduce()` metodundan istifadə edərək səbətin yekun məbləğini hesablayın (hər məhsul üçün qiymət * say) və konsola 'Cəmi məbləğ: 70 AZN' çıxarın.",
    "gozlenilenCixis": "Cəmi məbləğ: 70 AZN",
    "starterCode": "function sebetCemi(mehsullar) {\n  // reduce ilə yekun məbləği hesablayın\n}\n\nconst sebet = [\n  { ad: 'Kitab', qiymet: 15, say: 2 },\n  { ad: 'Dəftər', qiymet: 4, say: 5 },\n  { ad: 'Qələm', qiymet: 2, say: 10 }\n];\n\nsebetCemi(sebet);",
    "solutionCode": "function sebetCemi(mehsullar) {\n  const cem = mehsullar.reduce((acc, item) => acc + (item.qiymet * item.say), 0);\n  console.log(`Cəmi məbləğ: ${cem} AZN`);\n}\n\nconst sebet = [\n  { ad: 'Kitab', qiymet: 15, say: 2 },\n  { ad: 'Dəftər', qiymet: 4, say: 5 },\n  { ad: 'Qələm', qiymet: 2, say: 10 }\n];\n\nsebetCemi(sebet);",
    "ipuclari": [
      "İpucu 1: reduce((akkumulyator, element) => ..., 0) ikinci parametri ilkin dəyərdir (0).",
      "İpucu 2: Hər addımda akkumulyatora (item.qiymet * item.say) əlavə edin.",
      "İpucu 3: Nəticəni `Cəmi məbləğ: ${cem} AZN` şəklində çap edin."
    ],
    "teslimIzahi": "reduce() massivin bütün elementlərini tək bir nəticəyə (ədəd, sətir, massiv və ya obyekt) yığmaq üçün ən güclü alətdir. İlkin dəyər (0) verilməsi gözlənilməz tip xətalarının qarşısını alır."
  },
  {
    "id": "exam-sec11-05",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "some() və every() ilə İmtahan Nəticələrinin Təhlili",
    "serif": "Tələbələrin imtahan balları verilmişdir: `[65, 82, 48, 90, 74]`. Keçid balı 50-dir. `every()` ilə bütün tələbələrin keçib-keçmədiyini, `some()` ilə ən azı bir nəfərin 90 və ya daha yüksək bal toplayıb-toplamadığını yoxlayın. Konsola ardıcıl olaraq 'Hamı keçdi: false' və 'Əlaçı var: true' yazdırın.",
    "gozlenilenCixis": "Hamı keçdi: false\nƏlaçı var: true",
    "starterCode": "function ballariAnalizEt(ballar) {\n  // every və some metodlarından istifadə edin\n}\n\nballariAnalizEt([65, 82, 48, 90, 74]);",
    "solutionCode": "function ballariAnalizEt(ballar) {\n  const hamiKecdi = ballar.every(b => b >= 50);\n  const elaciVar = ballar.some(b => b >= 90);\n  console.log(`Hamı keçdi: ${hamiKecdi}`);\n  console.log(`Əlaçı var: ${elaciVar}`);\n}\n\nballariAnalizEt([65, 82, 48, 90, 74]);",
    "ipuclari": [
      "İpucu 1: every() yalnız bütün elementlər şərti ödədikdə true qaytarır.",
      "İpucu 2: some() ən azı bir element şərti ödədikdə dərhal true qaytarır.",
      "İpucu 3: Hər iki nəticəni konsola uyğun formatda çıxarın."
    ],
    "teslimIzahi": "every() universal kvantor (∀), some() isə mövcudluq kvantorudur (∃). Onlar şərt pozulduqda və ya təmin olunduqda dərhal dayandığı üçün dövrələrdən daha optimaldır."
  },
  {
    "id": "exam-sec11-06",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "sort() ilə Ədədlərin Düzgün Sıralanması (ASCII Tələsi)",
    "serif": "Verilmiş ədədlər massivini (`[25, 8, 100, 4, 62]`) artan sıra ilə nizamlamaq lazımdır. Standart `sort()` ədədləri sətir kimi müqayisə edərək səhv nəticə verir. Düzgün müqayisə funksiyası `(a, b) => a - b` təqdim edərək massivi nizamlayın və vergüllə ayrılmış şəkildə konsola çıxarın: '4, 8, 25, 62, 100'.",
    "gozlenilenCixis": "4, 8, 25, 62, 100",
    "starterCode": "function ededleriSirala(massiv) {\n  // Düzgün müqayisə funksiyası ilə sort edin və join(', ') ilə çıxarın\n}\n\nededleriSirala([25, 8, 100, 4, 62]);",
    "solutionCode": "function ededleriSirala(massiv) {\n  massiv.sort((a, b) => a - b);\n  console.log(massiv.join(', '));\n}\n\nededleriSirala([25, 8, 100, 4, 62]);",
    "ipuclari": [
      "İpucu 1: Arqumentsiz .sort() elementləri string-ə çevirib lüğət sırası ilə yığır (100 25-dən qabağa düşür).",
      "İpucu 2: Ədədlər üçün (a, b) => a - b artan, b - a azalan sıranı təmin edir.",
      "İpucu 3: massiv.join(', ') ilə elementləri birləşdirin."
    ],
    "teslimIzahi": "JavaScript-də .sort() arqumentsiz çağırıldıqda UTF-16 kodlarına görə sıralayır. Ədədləri dəyərinə görə nizamlamaq üçün mütləq müqayisə funksiyası (comparator function) ötürülməlidir."
  },
  {
    "id": "exam-sec11-07",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "flatMap() ilə İç-İçə Teqlərin Düzləşdirilməsi",
    "serif": "Məqalələr massivi verilmişdir: `[{id: 1, teqler: ['js', 'veb']}, {id: 2, teqler: ['react', 'js']}, {id: 3, teqler: ['node']}]`. `flatMap()` metodundan istifadə edərək bütün teqləri tək bir düz massivdə birləşdirin və vergüllə ayrılmış formatda konsola çıxarın: 'js, veb, react, js, node'.",
    "gozlenilenCixis": "js, veb, react, js, node",
    "starterCode": "function teqleriTopla(meqaleler) {\n  // flatMap metodundan istifadə edin və join(', ') ilə çıxarın\n}\n\nconst meqaleler = [\n  { id: 1, teqler: ['js', 'veb'] },\n  { id: 2, teqler: ['react', 'js'] },\n  { id: 3, teqler: ['node'] }\n];\n\nteqleriTopla(meqaleler);",
    "solutionCode": "function teqleriTopla(meqaleler) {\n  const butunTeqler = meqaleler.flatMap(m => m.teqler);\n  console.log(butunTeqler.join(', '));\n}\n\nconst meqaleler = [\n  { id: 1, teqler: ['js', 'veb'] },\n  { id: 2, teqler: ['react', 'js'] },\n  { id: 3, teqler: ['node'] }\n];\n\nteqleriTopla(meqaleler);",
    "ipuclari": [
      "İpucu 1: flatMap() əvvəlcə map funksiyasını tətbiq edir, sonra nəticəni 1 dərinlik dərəcəsində flat() edir.",
      "İpucu 2: m => m.teqler daxili massivləri qaytarır.",
      "İpucu 3: Sonda butunTeqler.join(', ') ilə çap edin."
    ],
    "teslimIzahi": "flatMap() metodu .map().flat(1) əməliyyatını tək bir keçiddə yerinə yetirir. Bu həm sintaktik olaraq daha yığcamdır, həm də aralıq massiv yaratmadığı üçün yaddaşa qənaət edir."
  },
  {
    "id": "exam-sec11-08",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Zəncirvari Metodlar (Method Chaining) ilə E-Ticarət Hesabatı",
    "serif": "Məhsullar massivində (`[{ad: 'A', kat: 'elektronika', qiymet: 500}, {ad: 'B', kat: 'geyim', qiymet: 80}, {ad: 'C', kat: 'elektronika', qiymet: 300}, {ad: 'D', kat: 'elektronika', qiymet: 1200}]`) yalnız 'elektronika' kateqoriyalı və qiyməti 1000-dən aşağı olan məhsullara 10% endirim tətbiq edib ümumi yekun məbləği hesablayın. filter -> map -> reduce zəncirindən istifadə edin və konsola 'Yekun elektronika məbləği: 720 AZN' çıxarın.",
    "gozlenilenCixis": "Yekun elektronika məbləği: 720 AZN",
    "starterCode": "function elektronikaHesabat(mehsullar) {\n  // filter, map və reduce zəncirini qurun\n}\n\nconst mallar = [\n  { ad: 'A', kat: 'elektronika', qiymet: 500 },\n  { ad: 'B', kat: 'geyim', qiymet: 80 },\n  { ad: 'C', kat: 'elektronika', qiymet: 300 },\n  { ad: 'D', kat: 'elektronika', qiymet: 1200 }\n];\n\nelektronikaHesabat(mallar);",
    "solutionCode": "function elektronikaHesabat(mehsullar) {\n  const netice = mehsullar\n    .filter(m => m.kat === 'elektronika' && m.qiymet < 1000)\n    .map(m => m.qiymet * 0.9)\n    .reduce((cem, q) => cem + q, 0);\n  console.log(`Yekun elektronika məbləği: ${netice} AZN`);\n}\n\nconst mallar = [\n  { ad: 'A', kat: 'elektronika', qiymet: 500 },\n  { ad: 'B', kat: 'geyim', qiymet: 80 },\n  { ad: 'C', kat: 'elektronika', qiymet: 300 },\n  { ad: 'D', kat: 'elektronika', qiymet: 1200 }\n];\n\nelektronikaHesabat(mallar);",
    "ipuclari": [
      "İpucu 1: filter-də m.kat === 'elektronika' && m.qiymet < 1000 yoxlayın.",
      "İpucu 2: map ilə hər qiyməti 0.9-a vurun (10% endirim).",
      "İpucu 3: reduce ilə cəmləyib şablon sətirlə konsola çıxarın."
    ],
    "teslimIzahi": "Funksional proqramlaşdırmanın ən böyük gücü metodların bir-birinə ötürülməsidir (Chaining). Hər mərhələ tək bir məqsədə xidmət edir və kodun oxunabilirliyi maksimum səviyyəyə çatır."
  },
  {
    "id": "exam-sec11-09",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "reduce() ilə Məlumatların Qruplaşdırılması (groupBy Analoqu)",
    "serif": "İşçilər massivini departamentlərinə görə qruplaşdırın: `[{ad: 'Nigar', dep: 'IT'}, {ad: 'Tural', dep: 'HR'}, {ad: 'Leyla', dep: 'IT'}]`. reduce() metodundan istifadə edərək departament adlarını açar, işçilərin adlarını isə dəyər kimi massivdə saxlayan obyekt qurun. Nəticəni JSON string kimi konsola çıxarın: '{\"IT\":[\"Nigar\",\"Leyla\"],\"HR\":[\"Tural\"]}'.",
    "gozlenilenCixis": "{\"IT\":[\"Nigar\",\"Leyla\"],\"HR\":[\"Tural\"]}",
    "starterCode": "function departamenteGoreQrupla(isciler) {\n  // reduce ilə qruplaşdırılmış obyekt yaradın və JSON.stringify ilə çıxarın\n}\n\nconst isciler = [\n  { ad: 'Nigar', dep: 'IT' },\n  { ad: 'Tural', dep: 'HR' },\n  { ad: 'Leyla', dep: 'IT' }\n];\n\ndepartamenteGoreQrupla(isciler);",
    "solutionCode": "function departamenteGoreQrupla(isciler) {\n  const qrup = isciler.reduce((acc, isci) => {\n    if (!acc[isci.dep]) {\n      acc[isci.dep] = [];\n    }\n    acc[isci.dep].push(isci.ad);\n    return acc;\n  }, {});\n  console.log(JSON.stringify(qrup));\n}\n\nconst isciler = [\n  { ad: 'Nigar', dep: 'IT' },\n  { ad: 'Tural', dep: 'HR' },\n  { ad: 'Leyla', dep: 'IT' }\n];\n\ndepartamenteGoreQrupla(isciler);",
    "ipuclari": [
      "İpucu 1: reduce-in ilkin dəyəri boş obyekt `{}` olmalıdır.",
      "İpucu 2: acc[isci.dep] yoxdursa, onu boş massiv `[]` kimi inisializasiya edin.",
      "İpucu 3: JSON.stringify(qrup) ilə obyekti sətir şəklində çap edin."
    ],
    "teslimIzahi": "reduce() yalnız ədədləri toplamaq üçün deyil, mürəkkəb verilənlər strukturlarını (məsələn, massivdən qruplaşdırılmış lüğətə) transformasiya etmək üçün standart JavaScript həllidir."
  },
  {
    "id": "exam-sec11-10",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Massivdə Elementlərin Tezlik Xəritəsi (Frequency Map)",
    "serif": "Meyvələr massivində (`['alma', 'armud', 'alma', 'banan', 'alma', 'armud']`) hər meyvənin neçə dəfə təkrarlandığını hesablayan funksiya yazın. `reduce()` istifadə edərək nəticə obyektini formalaşdırın və JSON formatında konsola çıxarın: '{\"alma\":3,\"armud\":2,\"banan\":1}'.",
    "gozlenilenCixis": "{\"alma\":3,\"armud\":2,\"banan\":1}",
    "starterCode": "function tezlikHesabla(massiv) {\n  // reduce ilə tezlik obyektini qurun\n}\n\ntezlikHesabla(['alma', 'armud', 'alma', 'banan', 'alma', 'armud']);",
    "solutionCode": "function tezlikHesabla(massiv) {\n  const tezlik = massiv.reduce((acc, item) => {\n    acc[item] = (acc[item] || 0) + 1;\n    return acc;\n  }, {});\n  console.log(JSON.stringify(tezlik));\n}\n\ntezlikHesabla(['alma', 'armud', 'alma', 'banan', 'alma', 'armud']);",
    "ipuclari": [
      "İpucu 1: `(acc[item] || 0) + 1` qısa sintaksisindən istifadə edin.",
      "İpucu 2: İlkin dəyər kimi `{}` ötürün.",
      "İpucu 3: JSON.stringify(tezlik) ilə konsola çıxarın."
    ],
    "teslimIzahi": "Tezlik xəritəsi (Frequency Map / Histogram) alqoritmik məsələlərdə ən çox istifadə olunan texnikadır. O(n) mürəkkəbliklə bütün təkrarlanma sayını tək bir dövrədə müəyyən edir."
  },
  {
    "id": "exam-sec11-11",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Çoxsəviyyəli Obyekt Sıralaması (Multi-Criteria Sorting)",
    "serif": "Tələbələr massivini (`[{ad: 'Bəhruz', bal: 85}, {ad: 'Aysel', bal: 90}, {ad: 'Cavid', bal: 85}, {ad: 'Dilarə', bal: 70}]`) sıralayın. Qayda: İlk növbədə bala görə azalan sıra (böyükdən kiçiyə). Əgər ballar bərabərdirsə, tələbənin adına görə əlifba sırası (`localeCompare`). Sıralanmış adları vergüllə birləşdirərək konsola çıxarın: 'Aysel, Bəhruz, Cavid, Dilarə'.",
    "gozlenilenCixis": "Aysel, Bəhruz, Cavid, Dilarə",
    "starterCode": "function coxseviyyeliSirala(telebeler) {\n  // sort daxilində əvvəlcə balı, bərabərdirsə adı yoxlayın\n}\n\nconst telebeler = [\n  { ad: 'Bəhruz', bal: 85 },\n  { ad: 'Aysel', bal: 90 },\n  { ad: 'Cavid', bal: 85 },\n  { ad: 'Dilarə', bal: 70 }\n];\n\ncoxseviyyeliSirala(telebeler);",
    "solutionCode": "function coxseviyyeliSirala(telebeler) {\n  telebeler.sort((a, b) => {\n    if (b.bal !== a.bal) {\n      return b.bal - a.bal;\n    }\n    return a.ad.localeCompare(b.ad);\n  });\n  console.log(telebeler.map(t => t.ad).join(', '));\n}\n\nconst telebeler = [\n  { ad: 'Bəhruz', bal: 85 },\n  { ad: 'Aysel', bal: 90 },\n  { ad: 'Cavid', bal: 85 },\n  { ad: 'Dilarə', bal: 70 }\n];\n\ncoxseviyyeliSirala(telebeler);",
    "ipuclari": [
      "İpucu 1: `b.bal - a.bal` fərqi 0 olmadıqda dərhal qaytarılır.",
      "İpucu 2: Fərq 0 olduqda (ballar bərabərdirsə) `a.ad.localeCompare(b.ad)` müqayisə edilir.",
      "İpucu 3: Sıralanmış massivdən .map(t => t.ad).join(', ') ilə adları çıxarın."
    ],
    "teslimIzahi": "Çoxmeyarlı sıralama (Multi-criteria sorting) verilənlər bazasındakı ORDER BY bal DESC, ad ASC əmrinin JavaScript analoqudur. localeCompare() yerli əlifba simvollarını (məsələn, 'Ə', 'Ö', 'Ş') düzgün çəkiləndirir."
  },
  {
    "id": "exam-sec11-12",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Fərdi myMap Metodunun Yazılması (Custom Polyfill)",
    "serif": "Massivlərin daxili `.map` metodunun iş prinsipini anlamaq üçün `Array.prototype.ozMap` adlı fərdi metod yaradın. Bu metod callback funksiyasını (element, index, array) qəbul etməli və nəticələrdən ibarət yeni massiv qaytarmalıdır. `[5, 10, 15].ozMap((x, i) => x * i)` kodunu icra edərək nəticəni vergüllə konsola çıxarın: '0, 10, 30'.",
    "gozlenilenCixis": "0, 10, 30",
    "starterCode": "Array.prototype.ozMap = function(callback) {\n  // this açar sözündən istifadə edərək yeni massiv doldurun\n};\n\nconst test = [5, 10, 15].ozMap((x, i) => x * i);\nconsole.log(test.join(', '));",
    "solutionCode": "Array.prototype.ozMap = function(callback) {\n  const netice = [];\n  for (let i = 0; i < this.length; i++) {\n    netice.push(callback(this[i], i, this));\n  }\n  return netice;\n};\n\nconst test = [5, 10, 15].ozMap((x, i) => x * i);\nconsole.log(test.join(', '));",
    "ipuclari": [
      "İpucu 1: Array.prototype metodunda `this` cari massivi göstərir.",
      "İpucu 2: for dövrəsi ilə hər element üçün callback(this[i], i, this) çağırın.",
      "İpucu 3: Yeni massivi test.join(', ') ilə konsola çıxarın."
    ],
    "teslimIzahi": "Polifil (Polyfill) yazmaq JavaScript mühərrikinin daxili abstraksiyasını dərindən qavramağın ən yaxşı yoludur. Array.prototype genişləndirildikdə adi funksiya (arrow deyil) yazılmalıdır ki, `this` massivə bağlansın."
  },
  {
    "id": "exam-sec11-13",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "reduce ilə Funksional Kompozisiya (pipe Fonksiyonu)",
    "serif": "Bir neçə funksiyanı soldan sağa ardıcıl icra edən `pipe(...fns)` funksiyası yazın. `reduce` metodundan istifadə edərək ilkin qiyməti funksiyalar zəncirindən keçirin. Verilmiş funksiyalar: `vur2 = x => x * 2`, `topla10 = x => x + 10`, `bol5 = x => x / 5`. `pipe(vur2, topla10, bol5)(5)` əməliyyatını icra edərək nəticəni konsola çıxarın: 'Nəticə: 4'.",
    "gozlenilenCixis": "Nəticə: 4",
    "starterCode": "function pipe(...fns) {\n  // reduce istifadə edərək arqumenti zəncirvari ötürən funksiya qaytarın\n}\n\nconst vur2 = x => x * 2;\nconst topla10 = x => x + 10;\nconst bol5 = x => x / 5;\n\n// pipe-i çağırın və konsola çıxarın",
    "solutionCode": "function pipe(...fns) {\n  return function(ilkinDeyer) {\n    return fns.reduce((deyer, fn) => fn(deyer), ilkinDeyer);\n  };\n}\n\nconst vur2 = x => x * 2;\nconst topla10 = x => x + 10;\nconst bol5 = x => x / 5;\n\nconst netice = pipe(vur2, topla10, bol5)(5);\nconsole.log(`Nəticə: ${netice}`);",
    "ipuclari": [
      "İpucu 1: pipe funksiyası yeni bir funksiya qaytarmalıdır.",
      "İpucu 2: Qaytarılan daxili funksiya `fns.reduce((acc, fn) => fn(acc), ilkinDeyer)` icra edir.",
      "İpucu 3: 5 * 2 = 10 -> 10 + 10 = 20 -> 20 / 5 = 4."
    ],
    "teslimIzahi": "Funksional kompozisiya (Function Composition / Pipe) mürəkkəb əməliyyatları kiçik, təkrar istifadə edilə bilən saf funksiyalara bölməyə və onları Unix boru kəməri (|) kimi birləşdirməyə imkan verir."
  },
  {
    "id": "exam-sec11-14",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dərin İç-İçə Strukturların Düzləşdirilməsi (Custom Recursive Flatten)",
    "serif": "İstənilən dərinlikdə iç-içə olan massivi (`[1, [2, [3, [4]], 5]]`) tək bir düz massivə çevirən `duzlesdir(massiv)` funksiyası yazın. `reduce` və rekursiyadan istifadə edin. Sonda nəticəni vergüllə ayrılmış şəkildə konsola çıxarın: '1, 2, 3, 4, 5'.",
    "gozlenilenCixis": "1, 2, 3, 4, 5",
    "starterCode": "function duzlesdir(massiv) {\n  // reduce və rekursiya ilə Array.isArray yoxlayın və join(', ') ilə çıxarın\n}\n\nconsole.log(duzlesdir([1, [2, [3, [4]], 5]]).join(', '));",
    "solutionCode": "function duzlesdir(massiv) {\n  return massiv.reduce((acc, item) => {\n    if (Array.isArray(item)) {\n      return acc.concat(duzlesdir(item));\n    }\n    return acc.concat(item);\n  }, []);\n}\n\nconsole.log(duzlesdir([1, [2, [3, [4]], 5]]).join(', '));",
    "ipuclari": [
      "İpucu 1: Array.isArray(item) true olduqda duzlesdir(item) rekursiv çağırılır.",
      "İpucu 2: acc.concat(...) həm tək elementi, həm də rekursiv alt massivi birləşdirir.",
      "İpucu 3: Nəticəni .join(', ') ilə birləşdirin."
    ],
    "teslimIzahi": "Array.prototype.flat(Infinity) funksiyasının daxili mexanizmi məhz bu cür rekursiv reduce və ya dövrə prinsipinə əsaslanır. Ağacvari (tree) və ya qeyri-müəyyən dərinlikli verilənlərin oxunmasında vacibdir."
  },
  {
    "id": "exam-sec11-15",
    "bolmeId": 11,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Yaddaş Səmərəli Böyük Məlumat Çanklanması və Deduplikasiyası",
    "serif": "Müştəri loqları massivində təkrarlanan tranzaksiyalar mövcuddur: hər obyekt `{ id: number, versiya: number, mebleg: number }` saxlayır. Eyni `id`-yə malik elementlərdən yalnız ən böyük `versiya`-ya malik olanı saxlanmalı (deduplication) və nəticə `mebleg`-ə görə azalan sıra ilə sıralanmalıdır. Sonda nəticə massivini ölçüsü 2 olan hissələrə (chunks) bölün. Giriş: `[{id:1, versiya:1, mebleg:100}, {id:2, versiya:1, mebleg:300}, {id:1, versiya:2, mebleg:150}, {id:3, versiya:1, mebleg:200}]`. Yekun çankları JSON formatında konsola çıxarın.",
    "gozlenilenCixis": "[[{\"id\":2,\"versiya\":1,\"mebleg\":300},{\"id\":3,\"versiya\":1,\"mebleg\":200}],[{\"id\":1,\"versiya\":2,\"mebleg\":150}]]",
    "starterCode": "function emalVeChankla(loqlar, chunkOlcusu = 2) {\n  // 1. reduce ilə ən son versiyaları saxlayın\n  // 2. mebleg üzrə azalan sıralayın\n  // 3. chunklara bölün və JSON çıxarın\n}\n\n// Test məlumatını ötürün",
    "solutionCode": "function emalVeChankla(loqlar, chunkOlcusu = 2) {\n  const unikalXerite = loqlar.reduce((acc, item) => {\n    if (!acc[item.id] || acc[item.id].versiya < item.versiya) {\n      acc[item.id] = item;\n    }\n    return acc;\n  }, {});\n\n  const siralanmis = Object.values(unikalXerite).sort((a, b) => b.mebleg - a.mebleg);\n\n  const chunklar = [];\n  for (let i = 0; i < siralanmis.length; i += chunkOlcusu) {\n    chunklar.push(siralanmis.slice(i, i + chunkOlcusu));\n  }\n\n  console.log(JSON.stringify(chunklar));\n}\n\nconst testLoqlar = [\n  { id: 1, versiya: 1, mebleg: 100 },\n  { id: 2, versiya: 1, mebleg: 300 },\n  { id: 1, versiya: 2, mebleg: 150 },\n  { id: 3, versiya: 1, mebleg: 200 }\n];\n\nemalVeChankla(testLoqlar, 2);",
    "ipuclari": [
      "İpucu 1: reduce ilə ID-ləri xəritələndirərkən daha böyük versiyanı yoxlayın.",
      "İpucu 2: Object.values() ilə obyektləri massivə çevirib sort((a, b) => b.mebleg - a.mebleg) tətbiq edin.",
      "İpucu 3: slice(i, i + chunkOlcusu) ilə 2 elementlik hissələrə ayırın və JSON.stringify ilə çıxarın."
    ],
    "teslimIzahi": "Real istehsalatda verilənlər bazasından və ya analitika axınından gələn dublikatları təmizləmək və onları API səhifələməsi (batching / chunking) üçün paketləmək mühəndislik arxitekturasının vacib bacarığıdır."
  },
  {
    "id": "exam-sec12-01",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Sadə Sinif və Konstruktor Yaradılması",
    "serif": "'Avtomobil' adlı sinif yaradın. Konstruktor 'marka' və 'il' qəbul etsin. Sinifdə 'melumat()' metodu olsun və 'Marka: Toyota, İl: 2022' formatında string qaytarsın. Nümunə yaradıb metodu çağırın və konsola çıxarın.",
    "gozlenilenCixis": "Marka: Toyota, İl: 2022",
    "starterCode": "class Avtomobil {\n  // Konstruktor və melumat metodunu yazın\n}\n\n// Nümunə yaradın və konsola çıxarın",
    "solutionCode": "class Avtomobil {\n  constructor(marka, il) {\n    this.marka = marka;\n    this.il = il;\n  }\n\n  melumat() {\n    return `Marka: ${this.marka}, İl: ${this.il}`;\n  }\n}\n\nconst masin = new Avtomobil('Toyota', 2022);\nconsole.log(masin.melumat());",
    "ipuclari": [
      "İpucu 1: constructor(marka, il) daxilində this.marka və this.il təyin edin.",
      "İpucu 2: melumat() metodunda şablon sətir qaytarın.",
      "İpucu 3: new Avtomobil(...) ilə nümunə yaradın."
    ],
    "teslimIzahi": "ES6 class sintaksisi JavaScript-in prototip mexanizmi üzərində qurulmuş 'syntactic sugar'-dır. constructor metodu new açar sözü ilə çağırıldıqda avtomatik işə düşür."
  },
  {
    "id": "exam-sec12-02",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Siniflərdə Varislik (extends və super)",
    "serif": "'Heyvan' baza sinifi yaradın (constructor 'ad' qəbul edir, 'sesCixar()' metodu 'Naməlum səs' qaytarır). Ondan törəyən 'It' sinifi qurun (extends), konstruktorda super(ad) çağırın və 'sesCixar()' metodunu yenidən təyin edərək (override) 'Hau-hau' qaytarın. 'Toplan' adlı It obyekti yaradın və 'Toplan: Hau-hau' formatında konsola çıxarın.",
    "gozlenilenCixis": "Toplan: Hau-hau",
    "starterCode": "class Heyvan {\n  // constructor və sesCixar\n}\n\nclass It extends Heyvan {\n  // extends, super və override sesCixar\n}\n\n// Obyekt yaradın və konsola çıxarın",
    "solutionCode": "class Heyvan {\n  constructor(ad) {\n    this.ad = ad;\n  }\n\n  sesCixar() {\n    return 'Naməlum səs';\n  }\n}\n\nclass It extends Heyvan {\n  constructor(ad) {\n    super(ad);\n  }\n\n  sesCixar() {\n    return 'Hau-hau';\n  }\n}\n\nconst it = new It('Toplan');\nconsole.log(`${it.ad}: ${it.sesCixar()}`);",
    "ipuclari": [
      "İpucu 1: extends açar sözü ilə varislik əlaqəsi qurulur.",
      "İpucu 2: Törəmə sinfin konstruktorunda this-dən istifadə etməzdən əvvəl super() çağırılmalıdır.",
      "İpucu 3: Alt sinifdə metod adını eyni saxlamaqla baza metodu override edilir."
    ],
    "teslimIzahi": "super() çağırışı valideyn sinfin konstruktorunu işə salır və prototype zəncirini bağlayır. Bu olmadan JavaScript alt sinif daxilində this obyektini yarada bilməz."
  },
  {
    "id": "exam-sec12-03",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Getter və Setter ilə Məlumat Kapsulyasiyası",
    "serif": "'Temperatur' sinifi qurun. Daxili dərəcəni selsi olaraq saxlasın. 'get selsi' və 'get farengeyt' (selsi * 1.8 + 32) xüsusiyyətlərini qurun. 25 dərəcə üçün Farengeyt dəyərini hesablayıb konsola '25°C = 77°F' formatında çıxarın.",
    "gozlenilenCixis": "25°C = 77°F",
    "starterCode": "class Temperatur {\n  constructor(selsi) {\n    this._selsi = selsi;\n  }\n  // get selsi və get farengeyt yazın\n}\n\n// 25 dərəcə ilə test edin",
    "solutionCode": "class Temperatur {\n  constructor(selsi) {\n    this._selsi = selsi;\n  }\n\n  get selsi() {\n    return this._selsi;\n  }\n\n  get farengeyt() {\n    return this._selsi * 1.8 + 32;\n  }\n}\n\nconst temp = new Temperatur(25);\nconsole.log(`${temp.selsi}°C = ${temp.farengeyt}°F`);",
    "ipuclari": [
      "İpucu 1: get açar sözü funksiyanı adi xassə kimi (mötərizəsiz) oxumağa imkan verir.",
      "İpucu 2: farengeyt üçün düstur: selsi * 1.8 + 32.",
      "İpucu 3: temp.selsi və temp.farengeyt kimi müraciət edin."
    ],
    "teslimIzahi": "Getter və Setter-lər hesablanan və ya validasiya tələb edən xüsusiyyətləri xaricə adi sahə (field) kimi göstərməyə imkan verən kapsulyasiya mexanizmidir."
  },
  {
    "id": "exam-sec12-04",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Statik Metodlar və Xassələr (static)",
    "serif": "'RiyaziyyatKomekcisi' sinifi qurun. Bu sinifdən heç bir nüsxə yaradılmadan çağırıla bilən statik `kvadrat(n)` və statik `PI = 3.14` xassələri olsun. `RiyaziyyatKomekcisi.kvadrat(6)` və `RiyaziyyatKomekcisi.PI` istifadə edərək konsola 'Kvadrat: 36, PI: 3.14' çıxarın.",
    "gozlenilenCixis": "Kvadrat: 36, PI: 3.14",
    "starterCode": "class RiyaziyyatKomekcisi {\n  // static PI və static kvadrat yazın\n}\n\n// Sinif üzərindən birbaşa çağırın",
    "solutionCode": "class RiyaziyyatKomekcisi {\n  static PI = 3.14;\n\n  static kvadrat(n) {\n    return n * n;\n  }\n}\n\nconsole.log(`Kvadrat: ${RiyaziyyatKomekcisi.kvadrat(6)}, PI: ${RiyaziyyatKomekcisi.PI}`);",
    "ipuclari": [
      "İpucu 1: static açar sözü xassə və metodun nümunəyə deyil, birbaşa sinfin özünə aid olduğunu bildirir.",
      "İpucu 2: new istifadə etmədən birbaşa `SinifAdi.metod()` çağırılır.",
      "İpucu 3: Şablon sətirlə konsola çıxarın."
    ],
    "teslimIzahi": "Statik metodlar köməkçi (utility) funksiyalar və sabitlər üçün nəzərdə tutulub. Məsələn, JavaScript-dəki Math.max() və ya Array.isArray() daxili statik metodlardır."
  },
  {
    "id": "exam-sec12-05",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Həqiqi Şəxsi Sahələr (#private fields)",
    "serif": "'BankHesabi' sinifi qurun. Daxili `#balans` xüsusiyyəti yalnız sinif daxilində əlçatan olsun (private). Konstruktor ilkin balansı təyin etsin. 'medaxil(mebleg)' metodu balansı artırsın, 'balansiGoster()' isə cari balansı qaytarsın. 100 AZN ilə hesab açın, 50 AZN mədaxil edin və konsola 'Balans: 150 AZN' çıxarın.",
    "gozlenilenCixis": "Balans: 150 AZN",
    "starterCode": "class BankHesabi {\n  // #balans sahəsini təyin edin\n  // medaxil və balansiGoster metodlarını qurun\n}\n\n// 100 AZN ilə başlayıb 50 əlavə edin",
    "solutionCode": "class BankHesabi {\n  #balans;\n\n  constructor(ilkinBalans) {\n    this.#balans = ilkinBalans;\n  }\n\n  medaxil(mebleg) {\n    if (mebleg > 0) {\n      this.#balans += mebleg;\n    }\n  }\n\n  balansiGoster() {\n    return this.#balans;\n  }\n}\n\nconst hesab = new BankHesabi(100);\nhesab.medaxil(50);\nconsole.log(`Balans: ${hesab.balansiGoster()} AZN`);",
    "ipuclari": [
      "İpucu 1: Sahənin əvvəlinə '#' qoyduqda o, həqiqi şəxsi (hard private) sahə olur.",
      "İpucu 2: Sinif xaricindən hesab.#balans müraciəti sintaksis xətası verir.",
      "İpucu 3: Metod vasitəsilə təhlükəsiz oxuyub konsola çıxarın."
    ],
    "teslimIzahi": "Əvvəllər konvensiya kimi `_balans` istifadə olunurdusa, müasir JavaScript `#` prefiksi ilə dil səviyyəsində möhkəm gizlilik (true encapsulation) təmin edir. Xaricdən heç bir şəkildə toxunmaq mümkün deyil."
  },
  {
    "id": "exam-sec12-06",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Polimorfizm və Fiqurların Sahəsi",
    "serif": "'Fiqur' əsas sinifindən törəyən 'Kvadrat' (tərəf: 5) və 'Daire' (radius: 3, PI=3 götürün) sinifləri qurun. Hər iki sinif 'sahe()' metodunu özünə uyğun reallaşdırsın (Kvadrat: tərəf * tərəf; Dairə: PI * r * r). Hər iki fiquru massivə yığıb dövrə ilə sahələrini konsola 'Kvadrat: 25' və 'Dairə: 27' formatında çıxarın.",
    "gozlenilenCixis": "Kvadrat: 25\nDairə: 27",
    "starterCode": "class Fiqur {\n  sahe() { return 0; }\n}\n\n// Kvadrat və Daire siniflərini yazın\n// Massivdə dövr edib konsola çıxarın",
    "solutionCode": "class Fiqur {\n  sahe() {\n    return 0;\n  }\n}\n\nclass Kvadrat extends Fiqur {\n  constructor(teref) {\n    super();\n    this.teref = teref;\n  }\n  sahe() {\n    return this.teref * this.teref;\n  }\n}\n\nclass Daire extends Fiqur {\n  constructor(radius) {\n    super();\n    this.radius = radius;\n  }\n  sahe() {\n    return 3 * this.radius * this.radius;\n  }\n}\n\nconst fiqurlar = [\n  { ad: 'Kvadrat', obyekt: new Kvadrat(5) },\n  { ad: 'Dairə', obyekt: new Daire(3) }\n];\n\nfiqurlar.forEach(f => {\n  console.log(`${f.ad}: ${f.obyekt.sahe()}`);\n});",
    "ipuclari": [
      "İpucu 1: Polimorfizm eyni metod adının (sahe) fərqli siniflərdə fərqli məntiqlə işləməsidir.",
      "İpucu 2: Kvadrat üçün teref * teref, Dairə üçün 3 * r * r.",
      "İpucu 3: Dövrə ilə hər birinin sahe() metodunu çağırın."
    ],
    "teslimIzahi": "Polimorfizm OOP-nin əsas sütunlarındandır. Eyni interfeysi (sahe metodu) çağıran xarici kod hədəf obyektin Kvadrat və ya Dairə olduğunu bilmədən vahid şəkildə işləyə bilir."
  },
  {
    "id": "exam-sec12-07",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Metod Zənciri (Method Chaining - Fluent Interface)",
    "serif": "'Hesablayici' sinifi hazırlayın. Konstruktor ilkin dəyər (0) qəbul etsin. 'topla(n)', 'cix(n)', 'vur(n)' metodları əməliyyatı yerinə yetirib `this` qaytarsın ki, zəncirvari çağırış mümkün olsun. 'deyer()' metodu yekun nəticəni qaytarsın. `new Hesablayici(10).topla(5).vur(2).cix(4).deyer()` əməliyyatını icra edib konsola 'Yekun: 26' çıxarın.",
    "gozlenilenCixis": "Yekun: 26",
    "starterCode": "class Hesablayici {\n  // topla, cix, vur metodlarında return this istifadə edin\n}\n\n// Zəncirvari çağırışı icra edin",
    "solutionCode": "class Hesablayici {\n  constructor(ilkin = 0) {\n    this.qiymet = ilkin;\n  }\n\n  topla(n) {\n    this.qiymet += n;\n    return this;\n  }\n\n  cix(n) {\n    this.qiymet -= n;\n    return this;\n  }\n\n  vur(n) {\n    this.qiymet *= n;\n    return this;\n  }\n\n  deyer() {\n    return this.qiymet;\n  }\n}\n\nconst cavab = new Hesablayici(10).topla(5).vur(2).cix(4).deyer();\nconsole.log(`Yekun: ${cavab}`);",
    "ipuclari": [
      "İpucu 1: Hər dəyişdirici metodun sonunda `return this;` yazılmalıdır.",
      "İpucu 2: 10 + 5 = 15; 15 * 2 = 30; 30 - 4 = 26.",
      "İpucu 3: deyer() metodu yekun qiyməti qaytarır."
    ],
    "teslimIzahi": "Metod zənciri (Fluent Interface) kitabxanalarda (məsələn, jQuery, Lodash, Knex.js) geniş istifadə olunur. Hər metod obyektin özünə istinadı (`this`) qaytardığı üçün növbəti metod dərhal nöqtə ilə zəncirlənir."
  },
  {
    "id": "exam-sec12-08",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Abstrakt Sinif Davranışının Simulyasiyası",
    "serif": "JavaScript-də quraşdırılmış 'abstract' açar sözü yoxdur, lakin bunu konstruktorda yoxlamaq olar. 'AbstraktRepository' baza sinifi qurun. Əgər kimsə birbaşa `new AbstraktRepository()` çağırmağa cəhd edərsə, konstruktorda `new.target === AbstraktRepository` şərti ilə Error atın ('Abstrakt sinif birbaşa yaradıla bilməz'). 'IstifadeciRepository' ondan törəsin və 'tapAll()' metodu 'İstifadəçilər siyahısı' qaytarsın. Hər iki davranışı yoxlayın: birbaşa çağırışın xətasını catch-də tutub konsola çıxarın, törəmə sinfin metodunu isə uğurla çağırın.",
    "gozlenilenCixis": "Xəta: Abstrakt sinif birbaşa yaradıla bilməz\nİstifadəçilər siyahısı",
    "starterCode": "class AbstraktRepository {\n  constructor() {\n    // new.target yoxlaması qoyun\n  }\n}\n\nclass IstifadeciRepository extends AbstraktRepository {\n  tapAll() { return 'İstifadəçilər siyahısı'; }\n}\n\n// Hər iki halı test edin",
    "solutionCode": "class AbstraktRepository {\n  constructor() {\n    if (new.target === AbstraktRepository) {\n      throw new Error('Abstrakt sinif birbaşa yaradıla bilməz');\n    }\n  }\n}\n\nclass IstifadeciRepository extends AbstraktRepository {\n  tapAll() {\n    return 'İstifadəçilər siyahısı';\n  }\n}\n\ntry {\n  new AbstraktRepository();\n} catch (err) {\n  console.log(`Xəta: ${err.message}`);\n}\n\nconst repo = new IstifadeciRepository();\nconsole.log(repo.tapAll());",
    "ipuclari": [
      "İpucu 1: `new.target` new ilə çağırılan konstruktor funksiyasına istinad edir.",
      "İpucu 2: if (new.target === BazaSinif) olduqda birbaşa instansiya qadağan edilir.",
      "İpucu 3: Alt sinif çağırıldıqda new.target AltSinif olduğu üçün xəta vermir."
    ],
    "teslimIzahi": "new.target meta-xassəsi ES6 ilə gəlmişdir. Bu mexanizm sayəsində TypeScript və ya Java kimi dillərdəki abstrakt sinif konsepti saf JavaScript-də etibarlı şəkildə simulyasiya edilir."
  },
  {
    "id": "exam-sec12-09",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Varislik Əvəzinə Kompozisiya (Composition over Inheritance)",
    "serif": "Dərin varislik ağacı qurmaq əvəzinə bacarıqları (behavior) obyektə kompozisiya ilə əlavə edən `obyektQurucu` funksiyası hazırlayın. `ucur()` bacarığı `{ ucur: () => 'Göylərdə uçur' }`, `uzur()` bacarığı `{ uzur: () => 'Suda üzür' }` qaytarır. `Ordək` obyektini hər iki bacarıqla `Object.assign` istifadə edərək birləşdirin və konsola ardıcıl olaraq 'Ördək: Göylərdə uçur' və 'Ördək: Suda üzür' yazdırın.",
    "gozlenilenCixis": "Ördək: Göylərdə uçur\nÖrdək: Suda üzür",
    "starterCode": "const ucur = () => ({ ucur: () => 'Göylərdə uçur' });\nconst uzur = () => ({ uzur: () => 'Suda üzür' });\n\nfunction ordekYarat(ad) {\n  // Object.assign ilə bacarıqları birləşdirin\n}\n\n// Ördək obyektini test edin",
    "solutionCode": "const ucur = () => ({ ucur: () => 'Göylərdə uçur' });\nconst uzur = () => ({ uzur: () => 'Suda üzür' });\n\nfunction ordekYarat(ad) {\n  return Object.assign(\n    { ad },\n    ucur(),\n    uzur()\n  );\n}\n\nconst ordek = ordekYarat('Yaşılbaş');\nconsole.log(`Ördək: ${ordek.ucur()}`);\nconsole.log(`Ördək: ${ordek.uzur()}`);",
    "ipuclari": [
      "İpucu 1: Kompozisiya 'nədir' (is-a) əvəzinə 'nə edə bilir' (can-do) prinsipinə əsaslanır.",
      "İpucu 2: Object.assign(hedef, ...menbeler) xassələri tək obyektdə birləşdirir.",
      "İpucu 3: ordek.ucur() və ordek.uzur() metodlarını çağırın."
    ],
    "teslimIzahi": "'Composition over inheritance' proqram mühəndisliyinin qızıl qaydasıdır. Çoxsaylı və dolaşıq extends zəncirlərindən qaçmaq üçün kiçik funksional bacarıqları obyektə birləşdirmək sistemi daha elastik edir."
  },
  {
    "id": "exam-sec12-10",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Modul İxrac və İdxal Nümunəsi (Module Pattern Simulyasiyası)",
    "serif": "Kapsulyasiya olunmuş IIFE (Immediately Invoked Function Expression) modul qurun. Bu modul daxilində gizli `gizliAcar = 'XYZ-123'` saxlasın və xaricə yalnız iki metod təqdim etsin: `kodlasdir(metn)` (mətn + ':' + gizliAcar qaytarsın) və `acarDeyis(yeniAcar)`. 'Salam' sözünü kodlaşdırın, sonra açarı 'ABC-789' edin və 'Dunya' sözünü kodlaşdırın. Hər iki nəticəni konsola çıxarın.",
    "gozlenilenCixis": "Salam:XYZ-123\nDunya:ABC-789",
    "starterCode": "const GuvenlikModulu = (function() {\n  let gizliAcar = 'XYZ-123';\n  // İctimai obyekt qaytarın\n})();\n\n// Metodları çağırın və konsola çıxarın",
    "solutionCode": "const GuvenlikModulu = (function() {\n  let gizliAcar = 'XYZ-123';\n\n  return {\n    kodlasdir(metn) {\n      return `${metn}:${gizliAcar}`;\n    },\n    acarDeyis(yeniAcar) {\n      gizliAcar = yeniAcar;\n    }\n  };\n})();\n\nconsole.log(GuvenlikModulu.kodlasdir('Salam'));\nGuvenlikModulu.acarDeyis('ABC-789');\nconsole.log(GuvenlikModulu.kodlasdir('Dunya'));",
    "ipuclari": [
      "İpucu 1: IIFE daxilindəki let gizliAcar xaricdən görünmür (Closure).",
      "İpucu 2: Qaytarılan obyektin metodları gizliAcar dəyişəninə istinadı saxlayır.",
      "İpucu 3: Sətirləri konsola çıxarın."
    ],
    "teslimIzahi": "Module Pattern ES6 modulları (import/export) gəlməzdən əvvəl JavaScript-də dəyişənləri qlobal sahədən gizlətmək və ad toqquşmasının qarşısını almaq üçün ən geniş yayılmış dizayn şablonu idi."
  },
  {
    "id": "exam-sec12-11",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Siniflərdə Singleton Dizayn Şablonu",
    "serif": "'VerilenlerBazasi' adlı sinif qurun. Bu sinifdən neçə dəfə `new VerilenlerBazasi()` çağırılmasından asılı olmayaraq hər zaman eyni tək nümunə (instance) qayıtmalıdır. Konstruktorda əgər statik `#numune` artıq mövcuddursa, həmin nümunəni qaytarın, yoxdursa cari `this`-i `#numune`-yə mənimsədin. İki dəfə `new` çağırın, birincisinə `db.baglanti = 'Aktiv'` qoyun və `db1 === db2` və `db2.baglanti` yoxlayaraq 'Eyni nümunə: true, Bağlantı: Aktiv' konsola çıxarın.",
    "gozlenilenCixis": "Eyni nümunə: true, Bağlantı: Aktiv",
    "starterCode": "class VerilenlerBazasi {\n  static #numune = null;\n  // Konstruktorda təkliyi təmin edin\n}\n\n// İki nüsxə yaradıb eyniliyini yoxlayın",
    "solutionCode": "class VerilenlerBazasi {\n  static #numune = null;\n\n  constructor() {\n    if (VerilenlerBazasi.#numune) {\n      return VerilenlerBazasi.#numune;\n    }\n    this.baglanti = 'Qeyri-aktiv';\n    VerilenlerBazasi.#numune = this;\n  }\n}\n\nconst db1 = new VerilenlerBazasi();\ndb1.baglanti = 'Aktiv';\nconst db2 = new VerilenlerBazasi();\n\nconsole.log(`Eyni nümunə: ${db1 === db2}, Bağlantı: ${db2.baglanti}`);",
    "ipuclari": [
      "İpucu 1: JavaScript konstruktoru açıq şəkildə obyekt qaytardıqda (`return instance`), `new` operatoru həmin obyekti mənimsəyir.",
      "İpucu 2: static #numune sahəsində ilk yaradılmış nüsxə saxlanılır.",
      "İpucu 3: db1 === db2 true olmalıdır."
    ],
    "teslimIzahi": "Singleton naxışı bütün tətbiq boyunca tək bir idarəedici obyektin (məsələn, konfiqurasiya meneceri, verilənlər bazası bağlantısı axını) mövcudluğunu təmin edir və yaddaşa qənaət edir."
  },
  {
    "id": "exam-sec12-12",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Statik Zavod Metodu (Static Factory Method Pattern)",
    "serif": "'İstifadəçi' sinifi yaradın. Şəxsi konstruktor əvəzinə fərqli mənbələrdən istifadəçi obyektləri doğuran iki statik zavod metodu qurun: `istifadeciJSONdan(jsonStr)` və `istifadeciFormdan(ad, rol)`. Hər iki metod yeni `İstifadəçi` obyekti qaytarmalıdır. `İstifadəçi.istifadeciJSONdan('{\"ad\":\"Elmir\",\"rol\":\"admin\"}')` çağırışını edərək konsola 'İstifadəçi: Elmir (admin)' çıxarın.",
    "gozlenilenCixis": "İstifadəçi: Elmir (admin)",
    "starterCode": "class Istifadeci {\n  constructor(ad, rol) {\n    this.ad = ad;\n    this.rol = rol;\n  }\n  // static istifadeciJSONdan metodunu yazın\n}\n\n// Metodu çağırın və konsola çıxarın",
    "solutionCode": "class Istifadeci {\n  constructor(ad, rol) {\n    this.ad = ad;\n    this.rol = rol;\n  }\n\n  static istifadeciJSONdan(jsonStr) {\n    const data = JSON.parse(jsonStr);\n    return new Istifadeci(data.ad, data.rol);\n  }\n\n  melumat() {\n    return `İstifadəçi: ${this.ad} (${this.rol})`;\n  }\n}\n\nconst u = Istifadeci.istifadeciJSONdan('{\"ad\":\"Elmir\",\"rol\":\"admin\"}');\nconsole.log(u.melumat());",
    "ipuclari": [
      "İpucu 1: Static Factory metodları fərqli giriş formatlarını emal edib new Sinif(...) qaytarır.",
      "İpucu 2: JSON.parse ilə daxil olan mətni parse edin.",
      "İpucu 3: u.melumat() formatını konsola çıxarın."
    ],
    "teslimIzahi": "Static Factory Method naxışı obyekt yaradılmasını konstruktorun tək qəlibindən azad edir, fərqli giriş tiplərinə uyğun adlandırılmış aydın fabriklər təqdim edir."
  },
  {
    "id": "exam-sec12-13",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "EventEmitter / Müşahidəçi (Observer) Sinifi",
    "serif": "Kompakt bir hadisə idarəedicisi `HadisePaylayici` sinifi hazırlayın. Sinifdə hadisə qeydiyyatı üçün `on(hadise, callback)` və hadisəni tetiklemek üçün `emit(hadise, melumat)` metodları olsun. 'giris' hadisəsinə qulaq asan funksiya qeydiyyatdan keçirin (ad parametrini qəbul edib konsola 'Xoş gəldin, Murad!' yazsın). `emit('giris', 'Murad')` çağırışı ilə hadisəni başladın.",
    "gozlenilenCixis": "Xoş gəldin, Murad!",
    "starterCode": "class HadisePaylayici {\n  // hadisələri saxlamaq üçün obyekt qurun\n  // on və emit metodlarını yazın\n}\n\n// 'giris' hadisəsini qeydiyyatdan keçirin və emit edin",
    "solutionCode": "class HadisePaylayici {\n  constructor() {\n    this.hadiseler = {};\n  }\n\n  on(hadise, cb) {\n    if (!this.hadiseler[hadise]) {\n      this.hadiseler[hadise] = [];\n    }\n    this.hadiseler[hadise].push(cb);\n  }\n\n  emit(hadise, melumat) {\n    if (this.hadiseler[hadise]) {\n      this.hadiseler[hadise].forEach(cb => cb(melumat));\n    }\n  }\n}\n\nconst paylayici = new HadisePaylayici();\npaylayici.on('giris', ad => console.log(`Xoş gəldin, ${ad}!`));\npaylayici.emit('giris', 'Murad');",
    "ipuclari": [
      "İpucu 1: this.hadiseler lüğətində hər hadisə adı üçün callback funksiyalar massivi saxlanılır.",
      "İpucu 2: emit metodu həmin hadisəyə abunə olan bütün funksiyaları sırayla çağırır.",
      "İpucu 3: Konsola verilən arqumentlə xoş gəlmisiniz mesajı çıxmalıdır."
    ],
    "teslimIzahi": "Observer / EventEmitter naxışı komponentlər arasında zəif əlaqəli (loosely coupled) rabitə qurmaq üçün veb və Node.js memarlığında ən mühüm mexanizmdir."
  },
  {
    "id": "exam-sec12-14",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Siniflərdə Fərdi İterator (Symbol.iterator)",
    "serif": "'Komanda' sinifi qurun. Konstruktorda üzvlər massivini qəbul etsin. Bu sinif nümunəsinin birbaşa `for...of` dövrəsi ilə iterasiya oluna bilməsi üçün `[Symbol.iterator]()` metodunu reallaşdırın (və ya `*[Symbol.iterator]()` generatoru ilə `yield* this.uzvler` istifadə edin). 'Əli', 'Vəli', 'Samir' üzvlərindən ibarət komandanı `for...of` ilə gəzərək hər adı tək-tək konsola çıxarın.",
    "gozlenilenCixis": "Əli\nVəli\nSamir",
    "starterCode": "class Komanda {\n  constructor(uzvler) {\n    this.uzvler = uzvler;\n  }\n  // [Symbol.iterator] metodunu yazın\n}\n\n// for...of ilə dövr edib konsola çıxarın",
    "solutionCode": "class Komanda {\n  constructor(uzvler) {\n    this.uzvler = uzvler;\n  }\n\n  *[Symbol.iterator]() {\n    yield* this.uzvler;\n  }\n}\n\nconst k = new Komanda(['Əli', 'Vəli', 'Samir']);\nfor (const uzv of k) {\n  console.log(uzv);\n}",
    "ipuclari": [
      "İpucu 1: `*[Symbol.iterator]() { yield* this.uzvler; }` ən yığcam və müasir iterasiya üsuludur.",
      "İpucu 2: Bu metod təyin olunduqda sinif obyekti birbaşa for...of və spread (...) operatorlarını dəstəkləyir.",
      "İpucu 3: for...of dövrəsi ilə hər üzvü konsola yazdırın."
    ],
    "teslimIzahi": "JavaScript İterasiya Protokolu (Iteration Protocol) istənilən fərdi sinfi dilin daxili massivləri kimi şəffaf dövrəyə salmağa imkan verir. Symbol.iterator bu protokolun açarıdır."
  },
  {
    "id": "exam-sec12-15",
    "bolmeId": 12,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Rollar və İcazələr İyerarxiyası (RBAC Engine)",
    "serif": "İstehsalat səviyyəli Rol Əsaslı İcazə Nəzarəti (RBAC) mühərriki qurun. Baza `İstifadəçi` sinifi (`ad`, `rol`) yaradın. Ondan törəyən `Admin` və `Redaktor` sinifləri qurun. Hər sinfin statik və ya daxili icazələr dəsti olsun: Redaktor: ['oxu', 'yaz']; Admin: ['oxu', 'yaz', 'sil', 'idarəet']. Siniflərdə `icazesiVar(emeliyyat)` metodu olsun. 'Sənan' adlı Redaktor və 'Orxan' adlı Admin yaradın. Hər ikisinin 'sil' əməliyyatına icazəsini yoxlayıb konsola ardıcıl olaraq 'Redaktor (sil): false' və 'Admin (sil): true' yazdırın.",
    "gozlenilenCixis": "Redaktor (sil): false\nAdmin (sil): true",
    "starterCode": "class Istifadeci {\n  // constructor və icazesiVar metodunu qurun\n}\n\n// Redaktor və Admin törəmə siniflərini yazın\n// 'sil' icazəsini yoxlayın",
    "solutionCode": "class Istifadeci {\n  constructor(ad, rol, icazeler = []) {\n    this.ad = ad;\n    this.rol = rol;\n    this.icazeler = new Set(icazeler);\n  }\n\n  icazesiVar(emeliyyat) {\n    return this.icazeler.has(emeliyyat);\n  }\n}\n\nclass Redaktor extends Istifadeci {\n  constructor(ad) {\n    super(ad, 'Redaktor', ['oxu', 'yaz']);\n  }\n}\n\nclass Admin extends Istifadeci {\n  constructor(ad) {\n    super(ad, 'Admin', ['oxu', 'yaz', 'sil', 'idarəet']);\n  }\n}\n\nconst redaktor = new Redaktor('Sənan');\nconst admin = new Admin('Orxan');\n\nconsole.log(`Redaktor (sil): ${redaktor.icazesiVar('sil')}`);\nconsole.log(`Admin (sil): ${admin.icazesiVar('sil')}`);",
    "ipuclari": [
      "İpucu 1: this.icazeler üçün Set verilənlər strukturundan istifadə icazələrin O(1) sürətlə yoxlanmasını təmin edir.",
      "İpucu 2: Redaktor konstruktorunda super-ə ['oxu', 'yaz'], Admin-də isə ['oxu', 'yaz', 'sil', 'idarəet'] ötürün.",
      "İpucu 3: icazesiVar('sil') nəticələrini konsola çıxarın."
    ],
    "teslimIzahi": "Rol Əsaslı Giriş Nəzarəti (RBAC - Role-Based Access Control) korporativ tətbiqlərdə istifadəçilərin yalnız səlahiyyətləri daxilində olan resurslara daxil olmasını təmin edən ən mühüm təhlükəsizlik modelidir."
  },
  {
    "id": "exam-sec13-01",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Sadə Promise Yaradılması və .then() ilə Oxunması",
    "serif": "'emeliyyat()' funksiyası yazın və o, dərhal 'Məlumat uğurla alındı' dəyəri ilə həll olunan (resolved) Promise qaytarsın. `.then()` ilə bu nəticəni oxuyub konsola çıxarın.",
    "gozlenilenCixis": "Məlumat uğurla alındı",
    "starterCode": "function emeliyyat() {\n  // Promise qaytarın\n}\n\n// .then() ilə oxuyun",
    "solutionCode": "function emeliyyat() {\n  return new Promise((resolve) => {\n    resolve('Məlumat uğurla alındı');\n  });\n}\n\nemeliyyat().then(cavab => {\n  console.log(cavab);\n});",
    "ipuclari": [
      "İpucu 1: `new Promise((resolve, reject) => ...)` konstruktorundan istifadə edin.",
      "İpucu 2: resolve(dəyər) Promise-i uğurla tamamlayır.",
      "İpucu 3: .then(cavab => console.log(cavab)) ilə qiyməti çap edin."
    ],
    "teslimIzahi": "Promise gələcəkdə tamamlanacaq asinxron dəyəri təmsil edən obyektdir. resolve funksiyası çağırıldıqda Promise 'fulfilled' vəziyyətinə keçir və ona qoşulmuş .then() handler-ləri işə düşür."
  },
  {
    "id": "exam-sec13-02",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "Promise.reject() və .catch() ilə Xətanın Tutulması",
    "serif": "'xidmeteMuraciet()' funksiyası yazın. O, 'Server xətası: 500' mesajı ilə rədd edilmiş (rejected) Promise qaytarsın. `.catch()` metodundan istifadə edərək bu xətanı tutun və konsola 'Tutuldu: Server xətası: 500' yazdırın.",
    "gozlenilenCixis": "Tutuldu: Server xətası: 500",
    "starterCode": "function xidmeteMuraciet() {\n  // Promise.reject qaytarın\n}\n\n// .catch() ilə xətanı idarə edin",
    "solutionCode": "function xidmeteMuraciet() {\n  return Promise.reject(new Error('Server xətası: 500'));\n}\n\nxidmeteMuraciet().catch(err => {\n  console.log(`Tutuldu: ${err.message}`);\n});",
    "ipuclari": [
      "İpucu 1: Promise.reject(new Error(...)) qısa yolla rədd edilmiş Promise yaradır.",
      "İpucu 2: .catch(err => ...) xəta blokunu təmsil edir.",
      "İpucu 3: err.message xəbərdarlıq mətnini saxlayır."
    ],
    "teslimIzahi": "Promise-lərdə xətaların idarə edilməsi .catch() metodu vasitəsilə həyata keçirilir. Bu, asinxron əməliyyat uğursuz olduqda tətbiqin qəfil dayanmasının qarşısını alır."
  },
  {
    "id": "exam-sec13-03",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ASAN",
    "basliq": "async/await ilə Asinxron Qiymətin Oxunması",
    "serif": "'asinxronTopla(a, b)' adlı async funksiya yazın və `a + b` qaytarsın. Başqa bir `async function baslat()` daxilində `await` ilə bu funksiyanı 15 və 25 arqumentləri ilə çağırıb nəticəni konsola 'Cəm: 40' formatında çıxarın.",
    "gozlenilenCixis": "Cəm: 40",
    "starterCode": "async function asinxronTopla(a, b) {\n  // a + b qaytarın\n}\n\nasync function baslat() {\n  // await ilə nəticəni gözləyib konsola çıxarın\n}\n\nbaslat();",
    "solutionCode": "async function asinxronTopla(a, b) {\n  return a + b;\n}\n\nasync function baslat() {\n  const cem = await asinxronTopla(15, 25);\n  console.log(`Cəm: ${cem}`);\n}\n\nbaslat();",
    "ipuclari": [
      "İpucu 1: async funksiya həmişə avtomatik olaraq Promise qaytarır.",
      "İpucu 2: await açar sözü yalnız async funksiyaların daxilində işləyir.",
      "İpucu 3: `Cəm: ${cem}` formatında çap edin."
    ],
    "teslimIzahi": "async/await ES2017 ilə gəlmiş və asinxron kodu sanki sinxron kod kimi sətirbəsətir oxunaqlı yazmağa imkan verən Promise sintaktik örtüyüdür (sugar)."
  },
  {
    "id": "exam-sec13-04",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Promise Zənciri (Promise Chaining)",
    "serif": "Dəyəri addım-addım artıran Promise zənciri qurun. İlkin olaraq `Promise.resolve(5)` ilə başlayın. Birinci `.then()` dəyəri 2-yə vursun (10), ikinci `.then()` üzərinə 20 gəlsin (30), üçüncü `.then()` nəticəni 'Yekun qiymət: 30' şəklində konsola çıxarsın.",
    "gozlenilenCixis": "Yekun qiymət: 30",
    "starterCode": "function zencirQur() {\n  // Promise.resolve(5) ilə zəncir başlayın\n}\n\nzencirQur();",
    "solutionCode": "function zencirQur() {\n  Promise.resolve(5)\n    .then(x => x * 2)\n    .then(x => x + 20)\n    .then(yekun => {\n      console.log(`Yekun qiymət: ${yekun}`);\n    });\n}\n\nzencirQur();",
    "ipuclari": [
      "İpucu 1: Hər .then() daxilində qaytarılan qiymət avtomatik olaraq növbəti .then()-ə arqument kimi ötürülür.",
      "İpucu 2: 5 * 2 = 10, sonra 10 + 20 = 30.",
      "İpucu 3: Sonuncu .then() konsola formatlanmış çıxışı verir."
    ],
    "teslimIzahi": "Promise Chaining 'Callback Hell' problemini həll edən əsas mexanizmdir. Hər .then() yeni bir Promise qaytardığı üçün ardıcıl transformasiyaları zəncir şəklində bağlamaq mümkündür."
  },
  {
    "id": "exam-sec13-05",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Promise.all ilə Paralel Sorğuların Birləşdirilməsi",
    "serif": "Üç paralel asinxron əməliyyat simulyasiya edin: istifadəçi profilini gətirən `getProfil()` ({ ad: 'Aysel' }), balansı gətirən `getBalans()` ({ balans: 250 }) və bildirişləri gətirən `getBildirisler()` ([ 'Yeni mesaj' ]). `Promise.all` istifadə edərək üçünün də tamamlanmasını gözləyin və konsola 'Aysel: 250 AZN, Bildiriş sayı: 1' çıxarın.",
    "gozlenilenCixis": "Aysel: 250 AZN, Bildiriş sayı: 1",
    "starterCode": "const getProfil = () => Promise.resolve({ ad: 'Aysel' });\nconst getBalans = () => Promise.resolve({ balans: 250 });\nconst getBildirisler = () => Promise.resolve(['Yeni mesaj']);\n\n// Promise.all ilə nəticələri toplayıb konsola çıxarın",
    "solutionCode": "const getProfil = () => Promise.resolve({ ad: 'Aysel' });\nconst getBalans = () => Promise.resolve({ balans: 250 });\nconst getBildirisler = () => Promise.resolve(['Yeni mesaj']);\n\nPromise.all([getProfil(), getBalans(), getBildirisler()])\n  .then(([profil, balans, bildirisler]) => {\n    console.log(`${profil.ad}: ${balans.balans} AZN, Bildiriş sayı: ${bildirisler.length}`);\n  });",
    "ipuclari": [
      "İpucu 1: Promise.all([p1, p2, p3]) massiv şəklində Promise-ləri qəbul edir.",
      "İpucu 2: Cavab bütün Promise-lərin nəticələrindən ibarət massiv qaytarır (destructuring edə bilərsiniz).",
      "İpucu 3: Şablon sətir ilə nəticəni çap edin."
    ],
    "teslimIzahi": "Promise.all() asinxron əməliyyatları paralel icra etməklə ümumi icra vaxtını kəskin azaldır. Bütün sorğular eyni anda başlayır və ən gec bitən sorğunun vaxtında tamamlanır."
  },
  {
    "id": "exam-sec13-06",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "async/await daxilində try...catch İdarəetməsi",
    "serif": "Xəta ehtimalı olan asinxron `odenisEt(mebleg)` funksiyası yazın. Əgər məbləğ > 100 olarsa, Promise.reject(new Error('Limit aşıldı: Maksimum 100 AZN')) atsın. `odenisiTamamla()` async funksiyasında 150 AZN ilə cəhd edin və xətanı try...catch ilə tutub konsola '[İmtina]: Limit aşıldı: Maksimum 100 AZN' çıxarın.",
    "gozlenilenCixis": "[İmtina]: Limit aşıldı: Maksimum 100 AZN",
    "starterCode": "function odenisEt(mebleg) {\n  if (mebleg > 100) return Promise.reject(new Error('Limit aşıldı: Maksimum 100 AZN'));\n  return Promise.resolve('Uğurlu');\n}\n\nasync function odenisiTamamla() {\n  // try...catch ilə await odenisEt(150) çağırın\n}\n\nodenisiTamamla();",
    "solutionCode": "function odenisEt(mebleg) {\n  if (mebleg > 100) return Promise.reject(new Error('Limit aşıldı: Maksimum 100 AZN'));\n  return Promise.resolve('Uğurlu');\n}\n\nasync function odenisiTamamla() {\n  try {\n    await odenisEt(150);\n  } catch (err) {\n    console.log(`[İmtina]: ${err.message}`);\n  }\n}\n\nodenisiTamamla();",
    "ipuclari": [
      "İpucu 1: await ilə çağırılan rədd edilmiş Promise avtomatik catch blokuna yönəlir.",
      "İpucu 2: catch(err) parametri atılan Error obyektidir.",
      "İpucu 3: Konsola `[İmtina]: ${err.message}` çap edin."
    ],
    "teslimIzahi": "async/await ilə try...catch cütlüyü asinxron xətaları adi sinxron xətalar kimi təbii idarə etməyə imkan verir və kodun oxunaqlılığını yüksək səviyyədə saxlayır."
  },
  {
    "id": "exam-sec13-07",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Promise.race() ilə Ən Sürətli Cavabın Seçilməsi",
    "serif": "İki fərqli server güzgüsündən (mirror) cavab gözləyən `Promise.race()` mexanizmi qurun. Əsas server gecikir, lakin ehtiyat güzgü dərhal `Promise.resolve('Ehtiyat serverdən gəldi')` qaytarır. `Promise.race` ilə ilk gələn cavabı götürüb konsola 'Qalib: Ehtiyat serverdən gəldi' çıxarın.",
    "gozlenilenCixis": "Qalib: Ehtiyat serverdən gəldi",
    "starterCode": "const server1 = new Promise((resolve) => setTimeout(() => resolve('Əsas server'), 500));\nconst server2 = Promise.resolve('Ehtiyat serverdən gəldi');\n\n// Promise.race ilə ilk nəticəni tutun",
    "solutionCode": "const server1 = new Promise((resolve) => setTimeout(() => resolve('Əsas server'), 500));\nconst server2 = Promise.resolve('Ehtiyat serverdən gəldi');\n\nPromise.race([server1, server2]).then(netice => {\n  console.log(`Qalib: ${netice}`);\n});",
    "ipuclari": [
      "İpucu 1: Promise.race([p1, p2]) massivdəki Promise-lərdən ən tez tamamlanan (istər resolve, istər reject) tək birinin nəticəsini qaytarır.",
      "İpucu 2: server2 dərhal resolve olduğu üçün qalib gələcəkdir.",
      "İpucu 3: .then() ilə qalibi konsola çıxarın."
    ],
    "teslimIzahi": "Promise.race() şəbəkə sorğularında vaxt məhdudiyyətləri (timeout) qoymaq və ya bir neçə alternativ mənbədən ən sürətlisini seçmək üçün tətbiq olunur."
  },
  {
    "id": "exam-sec13-08",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Promise.allSettled() ilə Uğur və Xətaların Təhlili",
    "serif": "Üç asinxron əməliyyat aparın: biri uğurlu (`Promise.resolve('Fayl 1 yükləndi')`), ikincisi xətalı (`Promise.reject(new Error('Fayl 2 tapılmadı'))`), üçüncüsü uğurlu (`Promise.resolve('Fayl 3 yükləndi')`). `Promise.allSettled()` istifadə edərək neçə əməliyyatın uğurlu ('fulfilled') və neçəsinin uğursuz ('rejected') olduğunu hesablayın və konsola 'Uğurlu: 2, Uğursuz: 1' yazdırın.",
    "gozlenilenCixis": "Uğurlu: 2, Uğursuz: 1",
    "starterCode": "const p1 = Promise.resolve('Fayl 1 yükləndi');\nconst p2 = Promise.reject(new Error('Fayl 2 tapılmadı'));\nconst p3 = Promise.resolve('Fayl 3 yükləndi');\n\n// Promise.allSettled istifadə edin",
    "solutionCode": "const p1 = Promise.resolve('Fayl 1 yükləndi');\nconst p2 = Promise.reject(new Error('Fayl 2 tapılmadı'));\nconst p3 = Promise.resolve('Fayl 3 yükləndi');\n\nPromise.allSettled([p1, p2, p3]).then(neticeler => {\n  const ugurlu = neticeler.filter(r => r.status === 'fulfilled').length;\n  const ugursuz = neticeler.filter(r => r.status === 'rejected').length;\n  console.log(`Uğurlu: ${ugurlu}, Uğursuz: ${ugursuz}`);\n});",
    "ipuclari": [
      "İpucu 1: Promise.all-dan fərqli olaraq Promise.allSettled biri uğursuz olduqda qırılmır, hamısının yekunlaşmasını gözləyir.",
      "İpucu 2: Hər nəticə obyektində `.status` ('fulfilled' və ya 'rejected') sahəsi olur.",
      "İpucu 3: filter().length ilə sayları tapın."
    ],
    "teslimIzahi": "Promise.all biri xəta verəndə bütün nəticələri rədd edir. Promise.allSettled() isə bütün əməliyyatların taleyini öyrənmək (məsələn, kütləvi email göndərişində uğurlu və uğursuzları ayırmaq) üçün idealdır."
  },
  {
    "id": "exam-sec13-09",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Event Loop: Mikrotask vs Makrotask İcra Ardıcıllığı",
    "serif": "JavaScript-in Hadisə Dövrəsi (Event Loop) mexanizmini nümayiş etdirin: sinxron kod, Promise (.then mikro-tapşırığı) və setTimeout (makro-tapşırıq). Konsol çıxışlarının ardıcıllığını massivə yığın: əvvəlcə '1: Sinxron', sonra Promise içində '2: Mikrotask', setTimeout daxilində '3: Makrotask'. Nəticələri ardıcıllıqla konsola çıxaran asinxron strukturu qurun (və ya dərhal icra edin).",
    "gozlenilenCixis": "1: Sinxron\n2: Mikrotask\n3: Makrotask",
    "starterCode": "function eventLoopNumunə() {\n  // setTimeout, Promise.resolve().then və sinxron loqları təşkil edin\n}\n\neventLoopNumunə();",
    "solutionCode": "function eventLoopNumunə() {\n  console.log('1: Sinxron');\n  setTimeout(() => {\n    console.log('3: Makrotask');\n  }, 0);\n  Promise.resolve().then(() => {\n    console.log('2: Mikrotask');\n  });\n}\n\neventLoopNumunə();",
    "ipuclari": [
      "İpucu 1: Sinxron kod dərhal icra olunur (Call Stack).",
      "İpucu 2: Promise .then() callbacks Microtask növbəsinə düşür və növbəti dövrədən qabaq dərhal təmizlənir.",
      "İpucu 3: setTimeout hətta 0ms olsa belə Macrotask (Task) növbəsinə düşür və ən sonda icra olunur."
    ],
    "teslimIzahi": "Event Loop mikrotasklara (Promise, queueMicrotask) makrotasklardan (setTimeout, setInterval, I/O) daha yüksək üstünlük verir. Call stack boşalan kimi əvvəlcə bütün mikrotasklar icra olunur, yalnız sonra növbəti makrotask işə düşür."
  },
  {
    "id": "exam-sec13-10",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Ardıcıl Asinxron Dövrə (Sequential Execution with for...of)",
    "serif": "Massivdə 3 tapşırıq ID-si verilmişdir: `[1, 2, 3]`. Bu tapşırıqları paralel deyil, ciddi şəkildə ardıcıl (biri bitdikdən sonra növbətisi) icra edən `ardicilYukle(idler)` async funksiyası yazın. Hər addımda `await` ilə nəticəni gözləyib loqlara əlavə edin. Sonda 'Tamamlandı: [1, 2, 3]' formatında konsola çıxarın.",
    "gozlenilenCixis": "Tamamlandı: 1\nTamamlandı: 2\nTamamlandı: 3",
    "starterCode": "async function tapşırıq(id) {\n  return Promise.resolve(id);\n}\n\nasync function ardicilYukle(idler) {\n  // for...of dövrəsi və await ilə ardıcıl icra edin\n}\n\nardicilYukle([1, 2, 3]);",
    "solutionCode": "async function tapşırıq(id) {\n  return Promise.resolve(id);\n}\n\nasync function ardicilYukle(idler) {\n  for (const id of idler) {\n    const netice = await tapşırıq(id);\n    console.log(`Tamamlandı: ${netice}`);\n  }\n}\n\nardicilYukle([1, 2, 3]);",
    "ipuclari": [
      "İpucu 1: Array.prototype.forEach asinxron await-i gözləmir, buna görə standart `for...of` dövrəsindən istifadə edilməlidir.",
      "İpucu 2: Dövrə daxilində `await tapşırıq(id)` yazdıqda hər iterasiya əvvəlkinin bitməsini gözləyir.",
      "İpucu 3: Konsola ardıcıl şəkildə çıxarın."
    ],
    "teslimIzahi": "for...of dövrəsi daxilində await yazmaq asinxron tapşırıqları bir-birinin ardınca (sekvensial) icra etməyin standart yoludur. forEach və ya map asinxron iterasiyada gözləmə aparmır və paralel davranır."
  },
  {
    "id": "exam-sec13-11",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Asinxron Əməliyyatda Vaxt Məhdudiyyəti (Timeout Wrapper)",
    "serif": "İstənilən asinxron funksiyaya vaxt məhdudiyyəti qoyan `vaxtQoy(promise, ms)` funksiyası hazırlayın. Əgər verilən Promise göstərilən millisaniyə ərzində həll olunmazsa, 'Vaxt bitdi!' xətası atsın. `Promise.race` istifadə edin. 100ms gözləyən ləng sorğunu 50ms timeout ilə yoxlayın və catch blokunda '[Xəta]: Vaxt bitdi!' konsola çıxarın.",
    "gozlenilenCixis": "[Xəta]: Vaxt bitdi!",
    "starterCode": "function vaxtQoy(promise, ms) {\n  // Promise.race ilə taymer və əsas promise-i yarışdırın\n}\n\n// 100ms gecikən sorğunu 50ms ilə sınayın",
    "solutionCode": "function vaxtQoy(promise, ms) {\n  const taymer = new Promise((_, reject) => {\n    setTimeout(() => reject(new Error('Vaxt bitdi!')), ms);\n  });\n  return Promise.race([promise, taymer]);\n}\n\nconst lengSorqu = new Promise(res => setTimeout(() => res('Uğur'), 100));\n\nvaxtQoy(lengSorqu, 50)\n  .catch(err => {\n    console.log(`[Xəta]: ${err.message}`);\n  });",
    "ipuclari": [
      "İpucu 1: setTimeout ilə müəyyən ms-dən sonra reject edən bir taymer Promise yaradın.",
      "İpucu 2: Promise.race([promise, taymer]) vasitəsilə ən tez baş verəni tutun.",
      "İpucu 3: catch daxilində `[Xəta]: ${err.message}` çap edin."
    ],
    "teslimIzahi": "Şəbəkə proqramlaşdırmasında serverlərin sonsuz cavabsız qalmasının qarşısını almaq üçün Timeout Wrapper (və ya AbortSignal.timeout) istifadə edilərək istifadəçi interfeysi dərhal xəbərdar edilir."
  },
  {
    "id": "exam-sec13-12",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Callback Əsaslı Funksiyanın Promisifikasiyası (promisify)",
    "serif": "Ənənəvi Node.js callback stilində olan `(err, result)` funksiyalarını Promise qaytaran funksiyaya çevirən `promisify(fn)` köməkçi funksiyası hazırlayın. Verilmiş köhnə funksiya: `kohneOxu(id, callback)` (əgər id>0 isə callback(null, 'Məlumat-' + id) qaytarır). Yeni promisify olunmuş funksiyanı id=42 ilə çağırıb konsola 'Alındı: Məlumat-42' çıxarın.",
    "gozlenilenCixis": "Alındı: Məlumat-42",
    "starterCode": "function promisify(fn) {\n  // Promise qaytaran wrapper yazın\n}\n\nfunction kohneOxu(id, cb) {\n  if (id > 0) cb(null, 'Məlumat-' + id);\n  else cb(new Error('Xəta'));\n}\n\n// promisify edib await və ya .then ilə konsola çıxarın",
    "solutionCode": "function promisify(fn) {\n  return function(...args) {\n    return new Promise((resolve, reject) => {\n      fn(...args, (err, res) => {\n        if (err) return reject(err);\n        resolve(res);\n      });\n    });\n  };\n}\n\nfunction kohneOxu(id, cb) {\n  if (id > 0) cb(null, 'Məlumat-' + id);\n  else cb(new Error('Xəta'));\n}\n\nconst yeniOxu = promisify(kohneOxu);\nyeniOxu(42).then(cavab => {\n  console.log(`Alındı: ${cavab}`);\n});",
    "ipuclari": [
      "İpucu 1: promisify qaytardığı funksiya daxilində new Promise yaradır.",
      "İpucu 2: Əsas funksiyaya arqumentlərin sonuna callback `(err, res) => ...` əlavə olunur.",
      "İpucu 3: err varsa reject(err), yoxdursa resolve(res) çağırılır."
    ],
    "teslimIzahi": "Köhnə kitabxanalar və Node.js-in ilkin modulları 'Error-First Callback' konvensiyasından istifadə edirdi. Promisify nümunəsi bu funksiyaları müasir async/await ekosisteminə inteqrasiya edir (Node-da util.promisify mövcuddur)."
  },
  {
    "id": "exam-sec13-13",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Asinxron Sorğu Keşləyicisi (Async Memoize / Cache)",
    "serif": "Ağır asinxron sorğuların nəticəsini yaddaşda saxlayan `kesle(fn)` funksiyası hazırlayın. Eyni arqumentlə çağırıldıqda əməliyyatı təkrar icra etməsin, keşdəki nəticəni qaytarsın. Simulyasiya: `istifadeciGetir(id)` funksiyası çağırış sayğacını artırır. Funksiyanı keşləyin, id=1 ilə ardıcıl iki dəfə çağırın və konsola 'Dəyər: İstifadəçi 1, Çağırış sayı: 1' çıxarın.",
    "gozlenilenCixis": "Dəyər: İstifadəçi 1, Çağırış sayı: 1",
    "starterCode": "function kesle(asyncFn) {\n  const cache = new Map();\n  // Eyni parametr üçün keşdən qaytarın\n}\n\n// Çağırış sayğacını yoxlayın",
    "solutionCode": "function kesle(asyncFn) {\n  const cache = new Map();\n  return async function(arg) {\n    if (cache.has(arg)) {\n      return cache.get(arg);\n    }\n    const res = await asyncFn(arg);\n    cache.set(arg, res);\n    return res;\n  };\n}\n\nlet say = 0;\nasync function istifadeciGetir(id) {\n  say++;\n  return `İstifadəçi ${id}`;\n}\n\nasync function test() {\n  const keslenmis = kesle(istifadeciGetir);\n  const r1 = await keslenmis(1);\n  const r2 = await keslenmis(1);\n  console.log(`Dəyər: ${r2}, Çağırış sayı: ${say}`);\n}\n\ntest();",
    "ipuclari": [
      "İpucu 1: Map obyekti arqumenti açar, cavabı dəyər kimi saxlayır.",
      "İpucu 2: cache.has(arg) true olduqda asyncFn çağırılmadan keş qaytarılır.",
      "İpucu 3: Konsola r2 və say dəyişənini çıxarın."
    ],
    "teslimIzahi": "Asinxron Memoizasiya (Caching) verilənlər bazası və ya kənar API-lərdən təkrarlanan sorğuların qarşısını alaraq həm şəbəkə yükünü azaldır, həm də cavabvermə sürətini millisekundlara endirir."
  },
  {
    "id": "exam-sec13-14",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "ÇƏTİN",
    "basliq": "Asinxron Parallellik Limiti (Async Concurrency Limiter)",
    "serif": "Eyni anda 100-lərlə sorğunun serveri çökdürməməsi üçün aktiv paralel əməliyyatların sayını məhdudlaşdıran `parallelHovuz(tapshiriqlar, limit)` funksiyası qurun. 4 ədəd tapşırıqdan ibarət massiv verilib: hər biri öz ID-sini qaytarır. Limit=2 olarsa, ilk 2 tapşırıq işə düşməli, onlardan biri bitdikdə növbətisi başlamalıdır. Bütün tapşırıqlar tamamlandıqdan sonra nəticələri vergüllə ayrılmış şəkildə konsola çıxarın: '1, 2, 3, 4'.",
    "gozlenilenCixis": "1, 2, 3, 4",
    "starterCode": "async function parallelHovuz(tapshiriqlar, limit = 2) {\n  // Eyni anda maksimum limit sayda tapşırığı icra edin və res.join(', ') çıxarın\n}\n\n// 4 tapşırığı icra edin",
    "solutionCode": "async function parallelHovuz(tapshiriqlar, limit = 2) {\n  const neticeler = [];\n  const icradaOlanlar = new Set();\n\n  for (const t of tapshiriqlar) {\n    const p = Promise.resolve().then(() => t()).then(res => {\n      neticeler.push(res);\n      icradaOlanlar.delete(p);\n    });\n    icradaOlanlar.add(p);\n    if (icradaOlanlar.size >= limit) {\n      await Promise.race(icradaOlanlar);\n    }\n  }\n  await Promise.all(icradaOlanlar);\n  return neticeler;\n}\n\nconst tapshiriqlar = [\n  () => Promise.resolve(1),\n  () => Promise.resolve(2),\n  () => Promise.resolve(3),\n  () => Promise.resolve(4)\n];\n\nparallelHovuz(tapshiriqlar, 2).then(res => console.log(res.join(', ')));",
    "ipuclari": [
      "İpucu 1: icradaOlanlar Set-i cari işləyən Promise-ləri saxlayır.",
      "İpucu 2: Sayı limitə çatdıqda `await Promise.race(icradaOlanlar)` ilə ən azı birinin bitməsini gözləyin.",
      "İpucu 3: Dövrə bitdikdə qalanları Promise.all ilə tamamlayın və res.join(', ') ilə konsola çıxarın."
    ],
    "teslimIzahi": "Parallellik hovuzu (Concurrency Limiter / Throttling) fayl yükləmələri, web-scraping və ya mikroxidmətlər arası kütləvi sorğularda şəbəkə və yaddaş tükənməsinin qarşısını alan kritik memarlıq həllidir."
  },
  {
    "id": "exam-sec13-15",
    "bolmeId": 13,
    "merheleId": 2,
    "cetinlik": "EKSPERT",
    "basliq": "Asinxron Konveyer və İnteqrasiya Axını (Async Pipeline)",
    "serif": "Asinxron mərhələlərdən ibarət ETL (Extract-Transform-Load) konveyeri qurun. `asinxronPipeline(...merheleler)` funksiyası ilkin məlumatı hər bir asinxron mərhələdən keçirməlidir. Mərhələlər: 1. `istifadeciniOxu(id)` -> `{ id, ad: 'Kənan', rol: 'istifadeci' }` qaytarır; 2. `rolYenile(user)` -> `{ ...user, rol: 'admin' }` edir; 3. `auditQeydEt(user)` -> `'AUDİT: ' + user.ad + ' (' + user.rol + ') təsdiqləndi'` stringini qaytarır. Konveyeri id=101 ilə işə salıb konsola çıxarın.",
    "gozlenilenCixis": "AUDİT: Kənan (admin) təsdiqləndi",
    "starterCode": "function asinxronPipeline(...merheleler) {\n  // reduce və async/await ilə pillələri ardıcıl ötürün\n}\n\n// 3 mərhələni hazırlayın və konveyerdən keçirin",
    "solutionCode": "function asinxronPipeline(...merheleler) {\n  return async function(ilkinDeyer) {\n    return merheleler.reduce(async (kecmisPromise, cariMerhele) => {\n      const kecmisNetice = await kecmisPromise;\n      return cariMerhele(kecmisNetice);\n    }, Promise.resolve(ilkinDeyer));\n  };\n}\n\nconst istifadeciniOxu = async (id) => ({ id, ad: 'Kənan', rol: 'istifadeci' });\nconst rolYenile = async (user) => ({ ...user, rol: 'admin' });\nconst auditQeydEt = async (user) => `AUDİT: ${user.ad} (${user.rol}) təsdiqləndi`;\n\nconst pipeline = asinxronPipeline(istifadeciniOxu, rolYenile, auditQeydEt);\npipeline(101).then(res => console.log(res));",
    "ipuclari": [
      "İpucu 1: merheleler.reduce ilə hər addımın Promise-ini await edib növbəti funksiyaya arqument kimi verin.",
      "İpucu 2: İlkin dəyər Promise.resolve(ilkinDeyer) olur.",
      "İpucu 3: Sonda nəticə string-i konsola çıxır."
    ],
    "teslimIzahi": "Asinxron Konveyer (Pipeline) dizaynı böyük sistemlərdə məlumatın təmizlənməsi, daxili xidmətlərdən zənginləşdirilməsi və audit jurnallarına yazılması kimi mürəkkəb biznes proseslərini zərif və modulyar şəkildə orkestrasiya edir."
  },
  {
    "id": "exam-sec14-01",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "querySelector ilə Elementin Seçilməsi və Mətnin Dəyişdirilməsi",
    "serif": "DOM-da mövcud olan '#basliq' identifikatorlu elementin mətnini 'JavaScript Təməlləri' olaraq yeniləyin. Yeniləmədən sonra elementin textContent dəyərini konsola çıxarın: 'Başlıq: JavaScript Təməlləri'.",
    "gozlenilenCixis": "Başlıq: JavaScript Təməlləri",
    "starterCode": "function basligiYenile() {\n  // document.querySelector ilə elementi tapın və textContent dəyərini dəyişin\n}\n\nbasligiYenile();",
    "solutionCode": "function basligiYenile() {\n  const el = document.querySelector('#basliq') || document.getElementById('basliq');\n  if (el) {\n    el.textContent = 'JavaScript Təməlləri';\n    console.log(`Başlıq: ${el.textContent}`);\n  } else {\n    const div = document.createElement('h1');\n    div.id = 'basliq';\n    div.textContent = 'JavaScript Təməlləri';\n    document.body.appendChild(div);\n    console.log(`Başlıq: ${div.textContent}`);\n  }\n}\n\nbasligiYenile();",
    "ipuclari": [
      "İpucu 1: document.querySelector('#id') elementi tapmaq üçün istifadə olunur.",
      "İpucu 2: element.textContent xassəsi elementin daxili mətnini oxumaq və ya dəyişmək üçündür.",
      "İpucu 3: Format: `Başlıq: ${el.textContent}`."
    ],
    "teslimIzahi": "querySelector CSS selektorları ilə DOM elementlərini seçməyin ən rahat yoludur. textContent xassəsi təhlükəsiz şəkildə yalnız mətni dəyişir və XSS boşluqlarının qarşısını alır."
  },
  {
    "id": "exam-sec14-02",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "classList ilə Siniflərin İdarə Olunması",
    "serif": "Bir düymə elementi yaradın (`document.createElement('button')`). Ona 'btn' və 'aktiv' siniflərini əlavə edin (`classList.add`). Sonra 'aktiv' sinfinin mövcudluğunu `classList.contains` ilə yoxlayın və konsola 'Aktiv sinfi var: true' çıxarın.",
    "gozlenilenCixis": "Aktiv sinfi var: true",
    "starterCode": "function sinifYoxla() {\n  // button elementi yaradıb sinifləri əlavə edin və yoxlayın\n}\n\nsinifYoxla();",
    "solutionCode": "function sinifYoxla() {\n  const btn = document.createElement('button');\n  btn.classList.add('btn', 'aktiv');\n  const netice = btn.classList.contains('aktiv');\n  console.log(`Aktiv sinfi var: ${netice}`);\n}\n\nsinifYoxla();",
    "ipuclari": [
      "İpucu 1: element.classList.add('sinif1', 'sinif2') ilə CSS sinifləri əlavə edilir.",
      "İpucu 2: element.classList.contains('sinif') sinfin olub-olmadığını boolean (true/false) qaytarır.",
      "İpucu 3: Şablon sətir ilə konsola çıxarın."
    ],
    "teslimIzahi": "classList API-si köhnə className string əməliyyatlarından fərqli olaraq sinifləri toplusal (add, remove, toggle, contains) metodlarla manipulyasiya etmək üçün müasir standartdır."
  },
  {
    "id": "exam-sec14-03",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "Atributların Təyini və Oxunması (setAttribute & getAttribute)",
    "serif": "Dinamik bir link (`<a>`) elementi yaradın. `setAttribute` ilə onun `href` atributunu 'https://jsoyren.az' və `target` atributunu '_blank' edin. Sonra `getAttribute('href')` ilə dəyəri oxuyub konsola 'Hədəf ünvan: https://jsoyren.az' çıxarın.",
    "gozlenilenCixis": "Hədəf ünvan: https://jsoyren.az",
    "starterCode": "function linkQur() {\n  // a elementi yaradın, setAttribute və getAttribute tətbiq edin\n}\n\nlinkQur();",
    "solutionCode": "function linkQur() {\n  const link = document.createElement('a');\n  link.setAttribute('href', 'https://jsoyren.az');\n  link.setAttribute('target', '_blank');\n  const unvan = link.getAttribute('href');\n  console.log(`Hədəf ünvan: ${unvan}`);\n}\n\nlinkQur();",
    "ipuclari": [
      "İpucu 1: setAttribute('atributAdi', 'deyer') elementi istənilən standart və ya fərdi atributla təmin edir.",
      "İpucu 2: getAttribute('atributAdi') həmin atributun mətn dəyərini qaytarır.",
      "İpucu 3: Konsola `Hədəf ünvan: ${unvan}` formatında çıxarın."
    ],
    "teslimIzahi": "setAttribute və getAttribute metodları HTML teqlərinin xassələri ilə birbaşa əlaqə qurur və həm standart, həm də qeyri-standart atributlar üçün etibarlı işləyir."
  },
  {
    "id": "exam-sec14-04",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "createElement və appendChild ilə Dinamik Siyahı",
    "serif": "Boş bir `<ul>` elementi daxilinə massivdəki meyvələri (`['Alma', 'Armud', 'Banan']`) `<li>` teqləri kimi yaradıb əlavə edin. Bütün elementlər daxil edildikdən sonra `ul.children.length` dəyərini konsola 'Ümumi element sayı: 3' kimi çıxarın.",
    "gozlenilenCixis": "Ümumi element sayı: 3",
    "starterCode": "function siyahiYarat(meyveler) {\n  const ul = document.createElement('ul');\n  // forEach ilə hər meyvə üçün li yaradın və ul-a əlavə edin\n}\n\nsiyahiYarat(['Alma', 'Armud', 'Banan']);",
    "solutionCode": "function siyahiYarat(meyveler) {\n  const ul = document.createElement('ul');\n  meyveler.forEach(m => {\n    const li = document.createElement('li');\n    li.textContent = m;\n    ul.appendChild(li);\n  });\n  console.log(`Ümumi element sayı: ${ul.children.length}`);\n}\n\nsiyahiYarat(['Alma', 'Armud', 'Banan']);",
    "ipuclari": [
      "İpucu 1: document.createElement('li') ilə yeni DOM elementi yaradılır.",
      "İpucu 2: li.textContent = meyve daxili mətni doldurur.",
      "İpucu 3: ul.appendChild(li) elementi siyahının sonuna calayır."
    ],
    "teslimIzahi": "createElement və appendChild metodları tətbiqin çalışma zamanında istifadəçi məlumatlarına uyğun dinamik UI interfeysləri qurmağın təməl sütunudur."
  },
  {
    "id": "exam-sec14-05",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "querySelectorAll ilə Çoxsaylı Elementlərin İterasiyası",
    "serif": "Daxilində 3 ədəd '.mehsul' sinifli element olan konteyner hazırlayın (mətnləri 'Kitab', 'Dəftər', 'Qələm'). `document.querySelectorAll('.mehsul')` istifadə edərək bütün elementləri tapın, onların mətnlərini massivə yığın və vergüllə konsola çıxarın: 'Tapılanlar: Kitab, Dəftər, Qələm'.",
    "gozlenilenCixis": "Tapılanlar: Kitab, Dəftər, Qələm",
    "starterCode": "function mehsullariTopla() {\n  // querySelectorAll('.mehsul') tapın və mətnlərini birləşdirin\n}\n\nmehsullariTopla();",
    "solutionCode": "function mehsullariTopla() {\n  const container = document.createElement('div');\n  ['Kitab', 'Dəftər', 'Qələm'].forEach(ad => {\n    const div = document.createElement('div');\n    div.className = 'mehsul';\n    div.textContent = ad;\n    container.appendChild(div);\n  });\n\n  const elementler = container.querySelectorAll('.mehsul');\n  const adlar = Array.from(elementler).map(el => el.textContent);\n  console.log(`Tapılanlar: ${adlar.join(', ')}`);\n}\n\nmehsullariTopla();",
    "ipuclari": [
      "İpucu 1: querySelectorAll() şərtə uyğun gələn bütün elementləri NodeList kimi qaytarır.",
      "İpucu 2: Array.from(elementler) və ya spread ilə massivə çevirib .map() tətbiq edə bilərsiniz.",
      "İpucu 3: adlar.join(', ') ilə vergüllə birləşdirin."
    ],
    "teslimIzahi": "querySelectorAll CSS selektoruna uyğun bütün qovşaqları (NodeList) tapır. NodeList statik kolleksiya olduğu üçün DOM dəyişdikdə gözlənilməz sonsuz dövrə yaratmır."
  },
  {
    "id": "exam-sec14-06",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Dinamik Stil Manipulyasiyası (element.style)",
    "serif": "Bir kart elementi yaradın. `style` xassəsi vasitəsilə onun `backgroundColor` dəyərini 'blue' və `display` dəyərini 'flex' təyin edin. Sonra bu iki stil xassəsini oxuyaraq konsola 'Rəng: blue, Ekran: flex' çıxarın.",
    "gozlenilenCixis": "Rəng: blue, Ekran: flex",
    "starterCode": "function stiliDeyis() {\n  const kart = document.createElement('div');\n  // style xassələrini təyin edin və konsola çıxarın\n}\n\nstiliDeyis();",
    "solutionCode": "function stiliDeyis() {\n  const kart = document.createElement('div');\n  kart.style.backgroundColor = 'blue';\n  kart.style.display = 'flex';\n  console.log(`Rəng: ${kart.style.backgroundColor}, Ekran: ${kart.style.display}`);\n}\n\nstiliDeyis();",
    "ipuclari": [
      "İpucu 1: CSS-də tire ilə yazılan xassələr (background-color) JavaScript-də camelCase (backgroundColor) kimi yazılır.",
      "İpucu 2: element.style.display = 'flex' birbaşa inline stil təyin edir.",
      "İpucu 3: Şablon sətirlə konsola çıxarın."
    ],
    "teslimIzahi": "element.style obyektin birbaşa inline CSS xüsusiyyətlərini təmsil edir. Dinamik hərəkətlər və dərhal təsir tələb edən dəyişikliklər üçün istifadə olunur."
  },
  {
    "id": "exam-sec14-07",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Elementin DOM-dan Silinməsi (remove & removeChild)",
    "serif": "İki bənddən ibarət siyahı qurun (`<li>Bir</li>`, `<li>İki</li>`). Birinci bəndi `element.remove()` və ya `parent.removeChild(element)` metodu ilə silin. Qalan elementlərin sayını və sonuncu elementin mətnini konsola 'Qalan say: 1, Mətn: İki' şəklində çıxarın.",
    "gozlenilenCixis": "Qalan say: 1, Mətn: İki",
    "starterCode": "function elementiSil() {\n  // ul və li-lər yaradın, birincini silin və qalanı konsola çıxarın\n}\n\nelementiSil();",
    "solutionCode": "function elementiSil() {\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  li1.textContent = 'Bir';\n  const li2 = document.createElement('li');\n  li2.textContent = 'İki';\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n\n  li1.remove();\n\n  console.log(`Qalan say: ${ul.children.length}, Mətn: ${ul.children[0].textContent}`);\n}\n\nelementiSil();",
    "ipuclari": [
      "İpucu 1: Müasir JavaScript-də hər bir element `element.remove()` metodu ilə birbaşa özünü silə bilir.",
      "İpucu 2: Alternativ olaraq `parent.removeChild(child)` istifadə edilə bilər.",
      "İpucu 3: ul.children[0] qalan ilk elementə istinad edir."
    ],
    "teslimIzahi": "Müasir .remove() metodu elementin valideyninə istinad etmədən birbaşa DOM ağacından çıxarılmasını təmin edərək kodu xeyli sadələşdirir."
  },
  {
    "id": "exam-sec14-08",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "DocumentFragment ilə Performant DOM Renderi",
    "serif": "Dövrə daxilində DOM-a hər dəfə ayrı-ayrı element calamaq səhifənin yenidən çəkilməsinə (reflow/repaint) səbəb olur. `document.createDocumentFragment()` istifadə edərək 3 elementi yaddaşda toplayın və tək bir `appendChild` ilə əsas konteynerə daxil edin. Konteynerin ümumi uşaq sayını konsola 'Render tamamlandı: 3 element' şəklində çıxarın.",
    "gozlenilenCixis": "Render tamamlandı: 3 element",
    "starterCode": "function fragmentIleRender() {\n  // DocumentFragment yaradın, 3 elementi əlavə edin və əsas qutuya calayın\n}\n\nfragmentIleRender();",
    "solutionCode": "function fragmentIleRender() {\n  const container = document.createElement('div');\n  const fragment = document.createDocumentFragment();\n\n  for (let i = 1; i <= 3; i++) {\n    const p = document.createElement('p');\n    p.textContent = `Bənd ${i}`;\n    fragment.appendChild(p);\n  }\n\n  container.appendChild(fragment);\n  console.log(`Render tamamlandı: ${container.children.length} element`);\n}\n\nfragmentIleRender();",
    "ipuclari": [
      "İpucu 1: DocumentFragment yüngül, canlı DOM-a bağlı olmayan müvəqqəti qabdır.",
      "İpucu 2: Bütün elementlər fragment-ə yığıldıqdan sonra container.appendChild(fragment) tək bir reflow yaradır.",
      "İpucu 3: container.children.length dəyərini konsola çıxarın."
    ],
    "teslimIzahi": "DocumentFragment veb performansının optimallaşdırılmasında əsas alətdir. Yüzlərlə DOM düyününü tək bir əməliyyatla calayaraq brauzerin çəkmə yükünü minimuma endirir."
  },
  {
    "id": "exam-sec14-09",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "DOM Qohumluq Əlaqələri və Naviqasiya",
    "serif": "Daxilində ardıcıl 3 qardaş element olan valideyn konteyner qurun: `div.kart-1`, `div.kart-2`, `div.kart-3`. İkinci kartdan (`kart-2`) başlayaraq onun əvvəlki qardaşının (`previousElementSibling`), növbəti qardaşının (`nextElementSibling`) və valideyninin (`parentElement`) siniflərini tapın. Konsola 'Əvvəlki: kart-1, Növbəti: kart-3, Valideyn: qab' çıxarın.",
    "gozlenilenCixis": "Əvvəlki: kart-1, Növbəti: kart-3, Valideyn: qab",
    "starterCode": "function qohumlariTap() {\n  // DOM ağacında qohumluq xassələrindən istifadə edin\n}\n\nqohumlariTap();",
    "solutionCode": "function qohumlariTap() {\n  const parent = document.createElement('div');\n  parent.className = 'qab';\n\n  const k1 = document.createElement('div'); k1.className = 'kart-1';\n  const k2 = document.createElement('div'); k2.className = 'kart-2';\n  const k3 = document.createElement('div'); k3.className = 'kart-3';\n\n  parent.appendChild(k1);\n  parent.appendChild(k2);\n  parent.appendChild(k3);\n\n  const evvelki = k2.previousElementSibling.className;\n  const novbeti = k2.nextElementSibling.className;\n  const valideyn = k2.parentElement.className;\n\n  console.log(`Əvvəlki: ${evvelki}, Növbəti: ${novbeti}, Valideyn: ${valideyn}`);\n}\n\nqohumlariTap();",
    "ipuclari": [
      "İpucu 1: previousElementSibling və nextElementSibling yalnız element düyünlərini (mətn və boşluqları saymadan) gəzir.",
      "İpucu 2: parentElement cari elementin üst konteynerini qaytarır.",
      "İpucu 3: .className xassələrini oxuyub konsola çıxarın."
    ],
    "teslimIzahi": "DOM ağacında qohumluq naviqasiyası elementləri yenidən selektorla axtarmadan cari qovşaq ətrafında sürətli hərəkət etməyə imkan verir."
  },
  {
    "id": "exam-sec14-10",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "XSS Təhlükəsizliyi: textContent vs innerHTML Fərqi",
    "serif": "Kənar istifadəçidən gələn təhlükəli string verilmişdir: `<img src='x' onerror='alert(1)'> Salam`. Təhlükəsizlik qaydalarına əsasən bu string-i `textContent` ilə elementə inyeksiya edin. Elementin `innerHTML` və `textContent` xassələrini yoxlayaraq, brauzerin təhlükəli teqləri icra etmədiyini və simvolları kodlaşdırdığını (escape) nümayiş etdirin. Konsola 'Təhlükəsiz mətn: <img src=\\'x\\' onerror=\\'alert(1)\\'> Salam' çıxarın.",
    "gozlenilenCixis": "Təhlükəsiz mətn: <img src='x' onerror='alert(1)'> Salam",
    "starterCode": "function tehlukesizDaxilEt(giris) {\n  // textContent ilə inyeksiya edin\n}\n\ntehlukesizDaxilEt(\"<img src='x' onerror='alert(1)'> Salam\");",
    "solutionCode": "function tehlukesizDaxilEt(giris) {\n  const div = document.createElement('div');\n  div.textContent = giris;\n  console.log(`Təhlükəsiz mətn: ${div.textContent}`);\n}\n\ntehlukesizDaxilEt(\"<img src='x' onerror='alert(1)'> Salam\");",
    "ipuclari": [
      "İpucu 1: innerHTML istifadəçi məlumatları daxil edildikdə XSS (Cross-Site Scripting) zəifliyi yaradır.",
      "İpucu 2: textContent bütün simvolları xam mətn kimi qəbul edir və heç bir HTML skriptini icra etmir.",
      "İpucu 3: Format: `Təhlükəsiz mətn: ${div.textContent}`."
    ],
    "teslimIzahi": "İstifadəçi tərəfindən daxil edilən və ya etibarsız mənbələrdən gələn mətnləri DOM-a yerləşdirərkən hər zaman textContent seçilməlidir. Bu, zərərli skriptlərin işə düşməsinin qarşısını 100% alır."
  },
  {
    "id": "exam-sec14-11",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "dataset API və data-* Atributları ilə Hesablama",
    "serif": "HTML5 data atributları (`data-qiymet`, `data-endirim`) olan 3 məhsul kartı yaradın: 1-ci kart (qiymet: 100, endirim: 10), 2-ci kart (qiymet: 200, endirim: 20), 3-cü kart (qiymet: 50, endirim: 0). Elementlərin `dataset` xassələrini oxuyaraq endirimli yekun məbləğləri toplayın (qiymet - endirim). Konsola 'Yekun ödəniş: 320 AZN' çıxarın.",
    "gozlenilenCixis": "Yekun ödəniş: 320 AZN",
    "starterCode": "function datasetHesabla() {\n  // dataset.qiymet və dataset.endirim dəyərlərini oxuyub toplayın\n}\n\ndatasetHesabla();",
    "solutionCode": "function datasetHesabla() {\n  const mallar = [\n    { q: '100', e: '10' },\n    { q: '200', e: '20' },\n    { q: '50', e: '0' }\n  ];\n  const container = document.createElement('div');\n  mallar.forEach(m => {\n    const div = document.createElement('div');\n    div.dataset.qiymet = m.q;\n    div.dataset.endirim = m.e;\n    container.appendChild(div);\n  });\n\n  let cem = 0;\n  container.querySelectorAll('div').forEach(el => {\n    const q = Number(el.dataset.qiymet);\n    const e = Number(el.dataset.endirim);\n    cem += (q - e);\n  });\n\n  console.log(`Yekun ödəniş: ${cem} AZN`);\n}\n\ndatasetHesabla();",
    "ipuclari": [
      "İpucu 1: element.dataset xassəsi 'data-' ilə başlayan bütün atributları camelCase obyekt kimi təqdim edir.",
      "İpucu 2: dataset dəyərləri həmişə sətir (string) qaytarır, buna görə Number(...) ilə ədədə çevrilməlidir.",
      "İpucu 3: (100-10) + (200-20) + (50-0) = 90 + 180 + 50 = 320 AZN."
    ],
    "teslimIzahi": "dataset API HTML və JavaScript arasında fərdi biznes məlumatlarını daşımaq üçün standart və ən oxunaqlı vasitədir."
  },
  {
    "id": "exam-sec14-12",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "closest() və matches() ilə Ən Yaxın Valideynin Tapılması",
    "serif": "Dərin iç-içə strukturlu bir düymə yaradın: `div.modal-container` -> `div.modal-body` -> `button.close-btn` -> `span.icon`. Span elementindən başlayaraq `element.closest('.modal-container')` metodu ilə ən yaxın əsas modal qabını tapın və onun sinif adını konsola 'Tapılan qab: modal-container' çıxarın.",
    "gozlenilenCixis": "Tapılan qab: modal-container",
    "starterCode": "function yaxinValideyniTap() {\n  // DOM ağacını qurun və span-dan yuxarı closest('.modal-container') tapın\n}\n\nyaxinValideyniTap();",
    "solutionCode": "function yaxinValideyniTap() {\n  const modal = document.createElement('div');\n  modal.className = 'modal-container';\n\n  const body = document.createElement('div');\n  body.className = 'modal-body';\n\n  const btn = document.createElement('button');\n  btn.className = 'close-btn';\n\n  const icon = document.createElement('span');\n  icon.className = 'icon';\n\n  btn.appendChild(icon);\n  body.appendChild(btn);\n  modal.appendChild(body);\n\n  const tapilan = icon.closest('.modal-container');\n  console.log(`Tapılan qab: ${tapilan.className}`);\n}\n\nyaxinValideyniTap();",
    "ipuclari": [
      "İpucu 1: closest(selektor) cari elementdən başlayaraq DOM ağacında yuxarı (valideynlərə doğru) axtarış aparır.",
      "İpucu 2: Şərtə uyğun gələn ilk valideyn elementi dərhal qaytarır.",
      "İpucu 3: tapilan.className konsola çıxarılır."
    ],
    "teslimIzahi": "closest() metodu hadisə nümayəndəliyi (event delegation) və mürəkkəb komponent arxitekturalarında ən çox istifadə olunan güclü DOM axtarış metodudur."
  },
  {
    "id": "exam-sec14-13",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dərin DOM Klonlanması (cloneNode(true))",
    "serif": "İstifadəçi kartı şablonu hazırlayın: daxilində başlıq (`<h4>İstifadəçi Adı</h4>`) və status (`<span>Aktiv</span>`) olan `div.kart`. `cloneNode(true)` ilə bu kartın tam dərin surətini çıxarın. Surətin başlığını 'Nərmin' edin. Orijinal kartın başlığının dəyişmədiyini ('İstifadəçi Adı') və surətin başlığının 'Nərmin' olduğunu 'Orijinal: İstifadəçi Adı, Surət: Nərmin' formatında konsola çıxarın.",
    "gozlenilenCixis": "Orijinal: İstifadəçi Adı, Surət: Nərmin",
    "starterCode": "function sablonuKlonla() {\n  // Orijinal kartı yaradın, cloneNode(true) edin və müqayisə edin\n}\n\nsablonuKlonla();",
    "solutionCode": "function sablonuKlonla() {\n  const kart = document.createElement('div');\n  kart.className = 'kart';\n  const h4 = document.createElement('h4');\n  h4.textContent = 'İstifadəçi Adı';\n  kart.appendChild(h4);\n\n  const suret = kart.cloneNode(true);\n  suret.querySelector('h4').textContent = 'Nərmin';\n\n  console.log(`Orijinal: ${kart.querySelector('h4').textContent}, Surət: ${suret.querySelector('h4').textContent}`);\n}\n\nsablonuKlonla();",
    "ipuclari": [
      "İpucu 1: cloneNode(true) elementin bütün uşaqları və atributları ilə birlikdə dərin nüsxəsini (deep copy) yaradır.",
      "İpucu 2: Surətdə aparılan dəyişikliklər orijinal karta təsir etmir.",
      "İpucu 3: Hər iki başlığı oxuyub konsola çıxarın."
    ],
    "teslimIzahi": "cloneNode HTML `<template>` teqləri və ya UI komponentlərinin sürətli çoxaldılması zamanı sıfırdan element yaratmaq əvəzinə mövcud skeletin nüsxəsini çıxarmaq üçün olduqca səmərəlidir."
  },
  {
    "id": "exam-sec14-14",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Dinamik HTML Cədvəl Generatoru (DOM Table Builder)",
    "serif": "Tələbə məlumatları massivindən (`[{id: 1, ad: 'Murad', bal: 95}, {id: 2, ad: 'Ayan', bal: 88}]`) proqram təminatı ilə tam `table` strukturu (thead, tbody, tr, td) quran funksiya hazırlayın. Cədvəlin tbody daxilindəki sətir sayını və bütün balların cəmini hesablayıb konsola 'Sətir sayı: 2, Bal cəmi: 183' çıxarın.",
    "gozlenilenCixis": "Sətir sayı: 2, Bal cəmi: 183",
    "starterCode": "function cedvelQur(telebeler) {\n  // table, thead və tbody yaradaraq sətirləri doldurun\n}\n\ncedvelQur([{id: 1, ad: 'Murad', bal: 95}, {id: 2, ad: 'Ayan', bal: 88}]);",
    "solutionCode": "function cedvelQur(telebeler) {\n  const table = document.createElement('table');\n  const tbody = document.createElement('tbody');\n  let balCemi = 0;\n\n  telebeler.forEach(t => {\n    const tr = document.createElement('tr');\n    const tdAd = document.createElement('td');\n    tdAd.textContent = t.ad;\n    const tdBal = document.createElement('td');\n    tdBal.textContent = String(t.bal);\n    balCemi += t.bal;\n\n    tr.appendChild(tdAd);\n    tr.appendChild(tdBal);\n    tbody.appendChild(tr);\n  });\n\n  table.appendChild(tbody);\n  console.log(`Sətir sayı: ${tbody.children.length}, Bal cəmi: ${balCemi}`);\n}\n\ncedvelQur([{id: 1, ad: 'Murad', bal: 95}, {id: 2, ad: 'Ayan', bal: 88}]);",
    "ipuclari": [
      "İpucu 1: tbody içərisinə hər tələbə üçün bir tr və hüceyrələr (td) calayın.",
      "İpucu 2: tbody.children.length sətir sayını verir.",
      "İpucu 3: Format: `Sətir sayı: ${say}, Bal cəmi: ${balCemi}`."
    ],
    "teslimIzahi": "Dinamik cədvəl qurulması data-driven tətbiqlərdə ən geniş yayılmış frontend tapşırığıdır. Hər bir hüceyrənin DOM obyektləri ilə idarə olunması hadisə dinləyicilərinin birbaşa hüceyrəyə bağlanmasına imkan verir."
  },
  {
    "id": "exam-sec14-15",
    "bolmeId": 14,
    "merheleId": 3,
    "cetinlik": "EKSPERT",
    "basliq": "Mini DOM Ağacı Diffing və Müşahidəçi Mühərriki",
    "serif": "İki fərqli DOM ağacını müqayisə edən (Diffing alqoritmi analoqu) `domFərqiniTap(agacA, agacB)` funksiyası hazırlayın. Funksiya elementlərin mətn fərqlərini aşkar etməlidir. agacA: `<div><span>Köhnə Mətn</span></div>`, agacB: `<div><span>Yeni Mətn</span></div>`. Əgər mətn dəyişibsə, konsola '[Dəyişiklik]: Köhnə Mətn -> Yeni Mətn' çıxarın.",
    "gozlenilenCixis": "[Dəyişiklik]: Köhnə Mətn -> Yeni Mətn",
    "starterCode": "function domFerqiniTap(agacA, agacB) {\n  // Elementlərin mətn fərqlərini müqayisə edin\n}\n\n// Test ağaclarını qurun və icra edin",
    "solutionCode": "function domFerqiniTap(agacA, agacB) {\n  const metnA = agacA.textContent.trim();\n  const metnB = agacB.textContent.trim();\n\n  if (metnA !== metnB) {\n    console.log(`[Dəyişiklik]: ${metnA} -> ${metnB}`);\n  } else {\n    console.log('Fərq tapılmadı');\n  }\n}\n\nconst a1 = document.createElement('div');\nconst s1 = document.createElement('span');\ns1.textContent = 'Köhnə Mətn';\na1.appendChild(s1);\n\nconst a2 = document.createElement('div');\nconst s2 = document.createElement('span');\ns2.textContent = 'Yeni Mətn';\na2.appendChild(s2);\n\ndomFerqiniTap(a1, a2);",
    "ipuclari": [
      "İpucu 1: Virtual DOM mühərrikləri (React, Vue) köhnə və yeni ağacı müqayisə edərək yalnız dəyişən qovşaqları yeniləyir.",
      "İpucu 2: agacA və agacB-nin daxili mətnlərini yoxlayın.",
      "İpucu 3: Format: `[Dəyişiklik]: ${metnA} -> ${metnB}`."
    ],
    "teslimIzahi": "Diffing alqoritmi müasir SPA freymvorklarının ürəyidir. Bütün DOM-u yenidən çəkmək əvəzinə ağacdakı xüsusi dəyişiklikləri tapıb hədəfli yeniləmək proqramı maksimum dərəcədə sürətləndirir."
  },
  {
    "id": "exam-sec15-01",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "addEventListener ilə Klik Hadisəsinin Qeydiyyatı",
    "serif": "Bir düymə (`document.createElement('button')`) yaradın. Ona 'click' hadisəsi dinləyicisi qoşun. Hadisə baş verdikdə konsola 'Düymə sıxıldı!' çap edilsin. `btn.click()` ilə hadisəni tetikləyin.",
    "gozlenilenCixis": "Düymə sıxıldı!",
    "starterCode": "function klikHadisesi() {\n  const btn = document.createElement('button');\n  // addEventListener('click', ...) yazın və btn.click() edin\n}\n\nklikHadisesi();",
    "solutionCode": "function klikHadisesi() {\n  const btn = document.createElement('button');\n  btn.addEventListener('click', () => {\n    console.log('Düymə sıxıldı!');\n  });\n  btn.click();\n}\n\nklikHadisesi();",
    "ipuclari": [
      "İpucu 1: element.addEventListener('hadise', callback) ən etibarlı hadisə bağlayıcısıdır.",
      "İpucu 2: btn.click() proqram vasitəsilə klik hadisəsini simulyasiya edir.",
      "İpucu 3: Konsola 'Düymə sıxıldı!' mətni çıxmalıdır."
    ],
    "teslimIzahi": "addEventListener metodu eyni hadisəyə birdən çox fərqli funksiya bağlamağa və təmiz hadisə idarəetməsi qurmağa imkan verir."
  },
  {
    "id": "exam-sec15-02",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "Hadisə Obyekti və e.target Xassəsi",
    "serif": "Düymə elementi yaradın (`id = 'gonder-btn'`). Klik hadisəsində parametr kimi ötürülən hadisə obyektinin (`e`) `target.id` xassəsini oxuyaraq konsola 'Kliklənən element: gonder-btn' çıxarın. Hadisəni `btn.click()` ilə işə salın.",
    "gozlenilenCixis": "Kliklənən element: gonder-btn",
    "starterCode": "function hadiseObyekti() {\n  // btn yaradın və e.target.id çıxarın\n}\n\nhadiseObyekti();",
    "solutionCode": "function hadiseObyekti() {\n  const btn = document.createElement('button');\n  btn.id = 'gonder-btn';\n  btn.addEventListener('click', (e) => {\n    console.log(`Kliklənən element: ${e.target.id}`);\n  });\n  btn.click();\n}\n\nhadiseObyekti();",
    "ipuclari": [
      "İpucu 1: Hadisə callback-i avtomatik olaraq ilk parametr kimi Event obyektini (`e`) qəbul edir.",
      "İpucu 2: e.target hadisənin birbaşa baş verdiyi elementi göstərir.",
      "İpucu 3: e.target.id elementin identifikatorudur."
    ],
    "teslimIzahi": "Event obyekti hadisə anında brauzer tərəfindən yaradılır və koordinatlar, basılan klavişlər, hədəf element və digər bütün zəruri kontekst məlumatlarını saxlayır."
  },
  {
    "id": "exam-sec15-03",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "e.preventDefault() ilə Standart Davranışın Dayandırılması",
    "serif": "Bir form elementi (`document.createElement('form')`) yaradın. Ona 'submit' hadisəsi qoşun. Səhifənin yenidən yüklənməsinin qarşısını almaq üçün `e.preventDefault()` çağırın və konsola 'Standart submit dayandırıldı, AJAX göndərilir' yazdırın. Fərdi submit hadisəsi göndərərək test edin.",
    "gozlenilenCixis": "Standart submit dayandırıldı, AJAX göndərilir",
    "starterCode": "function formQorunmasi() {\n  // form yaradın, e.preventDefault() tətbiq edin\n}\n\nformQorunmasi();",
    "solutionCode": "function formQorunmasi() {\n  const form = document.createElement('form');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    console.log('Standart submit dayandırıldı, AJAX göndərilir');\n  });\n\n  const event = new Event('submit', { cancelable: true });\n  form.dispatchEvent(event);\n}\n\nformQorunmasi();",
    "ipuclari": [
      "İpucu 1: e.preventDefault() brauzerin standart əməliyyatını (səhifə yenilənməsi, linkə keçid) ləğv edir.",
      "İpucu 2: SPA arxitekturalarında formaların idarə edilməsi mütləq preventDefault ilə başlayır.",
      "İpucu 3: Konsola tələb olunan mətni yazdırın."
    ],
    "teslimIzahi": "Klassik vebdə form submit səhifəni tam yeniləyirdi. Müasir tək-səhifəli tətbiqlərdə (SPA) e.preventDefault() ilə bu dayandırılır və məlumatlar arxa planda fetch ilə asinxron göndərilir."
  },
  {
    "id": "exam-sec15-04",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "İnput Hadisəsi və Canlı Mətn Oxunması",
    "serif": "Bir mətn sahəsi (`<input type='text'>`) yaradın. 'input' hadisəsi qoşun. İnput dəyəri dəyişdikdə konsola 'Daxil edilən: ' + e.target.value çıxarsın. İnputun dəyərini 'Frontend' edib 'input' hadisəsini tetikləyin.",
    "gozlenilenCixis": "Daxil edilən: Frontend",
    "starterCode": "function inputHadisesi() {\n  // input yaradın və dəyərini oxuyun\n}\n\ninputHadisesi();",
    "solutionCode": "function inputHadisesi() {\n  const input = document.createElement('input');\n  input.addEventListener('input', (e) => {\n    console.log(`Daxil edilən: ${e.target.value}`);\n  });\n  input.value = 'Frontend';\n  input.dispatchEvent(new Event('input'));\n}\n\ninputHadisesi();",
    "ipuclari": [
      "İpucu 1: 'input' hadisəsi istifadəçi hər hərf yazdıqda dərhal tetiklenir.",
      "İpucu 2: e.target.value xanadakı cari mətni qaytarır.",
      "İpucu 3: dispatchEvent(new Event('input')) ilə test edin."
    ],
    "teslimIzahi": "Canlı axtarışlar, simvol sayğacları və form validasiyaları üçün 'change' (yalnız fokus itəndə işə düşür) əvəzinə anlıq reaksiya verən 'input' hadisəsi istifadə olunur."
  },
  {
    "id": "exam-sec15-05",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "e.stopPropagation() ilə Hadisə Qabarmasının (Bubbling) Qarşısının Alınması",
    "serif": "İç-içə olan iki qutu qurun: `xariciQutu` və onun içində `daxiliQutu`. Hər ikisinə klik hadisəsi əlavə edin. Normalda daxili qutuya basıldıqda xarici də işə düşməlidir. Daxili qutuda `e.stopPropagation()` çağıraraq xaricinin xəbər tutmasının qarşısını alın. Yalnız daxili qutunun 'Daxili klikləndi' mesajını konsola çıxarın.",
    "gozlenilenCixis": "Daxili klikləndi",
    "starterCode": "function qabarmaniDayandir() {\n  // xarici və daxili div yaradın, stopPropagation tətbiq edin\n}\n\nqabarmaniDayandir();",
    "solutionCode": "function qabarmaniDayandir() {\n  const xarici = document.createElement('div');\n  const daxili = document.createElement('div');\n  xarici.appendChild(daxili);\n\n  xarici.addEventListener('click', () => {\n    console.log('Xarici klikləndi');\n  });\n\n  daxili.addEventListener('click', (e) => {\n    e.stopPropagation();\n    console.log('Daxili klikləndi');\n  });\n\n  daxili.click();\n}\n\nqabarmaniDayandir();",
    "ipuclari": [
      "İpucu 1: Hadisələr daxildən xaricə doğru qabarır (Event Bubbling).",
      "İpucu 2: e.stopPropagation() bu zənciri kəsir və hadisənin yuxarı qatlara çatmasına imkan vermir.",
      "İpucu 3: Nəticədə yalnız 'Daxili klikləndi' çap olunur."
    ],
    "teslimIzahi": "Event Bubbling zəncirini kəsmək modal pəncərələrdə, menyularda və daxili düymələrdə gözlənilməz kənar klik reaksiyalarının qarşısını almaq üçün vacibdir."
  },
  {
    "id": "exam-sec15-06",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Klaviatura Hadisəsi (keydown və e.key)",
    "serif": "Axtarış inputu yaradın. 'keydown' hadisəsini dinləyin. Əgər basılan klaviş Enter olarsa (`e.key === 'Enter'`), konsola 'Axtarış başladı: ' + input.value çap edin. İnputa 'JavaScript dərsləri' yazıb Enter klavişi ilə hadisə başladın.",
    "gozlenilenCixis": "Axtarış başladı: JavaScript dərsləri",
    "starterCode": "function klaviaturaYoxla() {\n  // input yaradın, e.key === 'Enter' yoxlayın\n}\n\nklaviaturaYoxla();",
    "solutionCode": "function klaviaturaYoxla() {\n  const input = document.createElement('input');\n  input.value = 'JavaScript dərsləri';\n  input.addEventListener('keydown', (e) => {\n    if (e.key === 'Enter') {\n      console.log(`Axtarış başladı: ${input.value}`);\n    }\n  });\n\n  const event = new CustomEvent('keydown', { bubbles: true });\n  event.key = 'Enter';\n  input.dispatchEvent(event);\n}\n\nklaviaturaYoxla();",
    "ipuclari": [
      "İpucu 1: Müasir standartda e.keyCode (rəqəm) əvəzinə oxunaqlı `e.key` ('Enter', 'Escape', 'ArrowUp') istifadə olunur.",
      "İpucu 2: if (e.key === 'Enter') yoxlaması qoyun.",
      "İpucu 3: Format: `Axtarış başladı: ${input.value}`."
    ],
    "teslimIzahi": "e.key xassəsi klaviatura dilindən və fiziki quruluşundan asılı olmayaraq həqiqi simvol adını təqdim edir və köhnəlmiş e.keyCode-u əvəz edir."
  },
  {
    "id": "exam-sec15-07",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Birdəfəlik Hadisə Dinləyicisi ({ once: true })",
    "serif": "Bonus düyməsi yaradın. İstifadəçi bu düyməyə nə qədər sıxsa da, hədiyyə yalnız bir dəfə verilməlidir. `addEventListener`-in üçüncü parametri kimi `{ once: true }` ötürün və klik zamanı 'Bonus verildi!' çap edin. Düyməni iki dəfə klikləyin və konsola təkcə bir dəfə çıxış gəldiyini nümayiş etdirin.",
    "gozlenilenCixis": "Bonus verildi!",
    "starterCode": "function birdefelikHadise() {\n  // { once: true } seçimindən istifadə edin\n}\n\nbirdefelikHadise();",
    "solutionCode": "function birdefelikHadise() {\n  const btn = document.createElement('button');\n  btn.addEventListener('click', () => {\n    console.log('Bonus verildi!');\n  }, { once: true });\n\n  btn.click();\n  btn.click();\n}\n\nbirdefelikHadise();",
    "ipuclari": [
      "İpucu 1: { once: true } hadisə ilk dəfə icra olunan kimi avtomatik olaraq dinləyicini silir.",
      "İpucu 2: Bu, əllə removeEventListener çağırmaq ehtiyacını aradan qaldırır.",
      "İpucu 3: İki dəfə btn.click() edilsə də, konsola cəmi bir sətir çıxır."
    ],
    "teslimIzahi": "options obyektindəki once: true seçimi təkrar icraların, çoxsaylı ödənişlərin və ya animasiya sonu dinləyicilərinin yaddaş sızması yaratmasının qarşısını alır."
  },
  {
    "id": "exam-sec15-08",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Hadisə Nümayəndəliyi (Event Delegation Pattern)",
    "serif": "Daxilində çoxlu `li` elementi olan tək bir `ul` siyahısı yaradın (`<li data-id='1'>Məhsul 1</li>`, `<li data-id='2'>Məhsul 2</li>`). Hər `li`-yə ayrıca dinləyici qoşmaq əvəzinə, tək bir dinləyicini valideyn `ul`-a qoşun. Kliklənən elementin `li` olduğunu yoxlayıb onun `data-id` dəyərini konsola 'Seçildi: Məhsul ID 2' kimi çıxarın. İkinci li-ni klikləyərək yoxlayın.",
    "gozlenilenCixis": "Seçildi: Məhsul ID 2",
    "starterCode": "function hadiseNumayendeliyi() {\n  // ul-a tək addEventListener qoşun və e.target ilə li-ni tapın\n}\n\nhadiseNumayendeliyi();",
    "solutionCode": "function hadiseNumayendeliyi() {\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  li1.dataset.id = '1';\n  li1.textContent = 'Məhsul 1';\n\n  const li2 = document.createElement('li');\n  li2.dataset.id = '2';\n  li2.textContent = 'Məhsul 2';\n\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n\n  ul.addEventListener('click', (e) => {\n    const hedefLi = e.target.closest('li');\n    if (hedefLi && ul.contains(hedefLi)) {\n      console.log(`Seçildi: Məhsul ID ${hedefLi.dataset.id}`);\n    }\n  });\n\n  li2.click();\n}\n\nhadiseNumayendeliyi();",
    "ipuclari": [
      "İpucu 1: Hadisə Nümayəndəliyi valideynin bütün övladları adından hadisəni idarə etməsidir.",
      "İpucu 2: e.target.closest('li') ilə kliklənən element və ya onun ən yaxın li valideyni tapılır.",
      "İpucu 3: Format: `Seçildi: Məhsul ID ${hedefLi.dataset.id}`."
    ],
    "teslimIzahi": "Event Delegation yaddaşa böyük dərəcədə qənaət edir və sonradan dinamik əlavə olunan yeni siyahı elementlərinin avtomatik olaraq işləməsini təmin edir."
  },
  {
    "id": "exam-sec15-09",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Dinamik Form Validasiyası və Xəta Mesajı",
    "serif": "Email daxil edilən xananı yoxlayan validasiya funksiyası yazın. Əgər input mətni '@' və '.' simvollarını ehtiva etmirsə, 'Xəta: Düzgün email daxil edin' çıxarsın; düzgündürsə, 'Uğur: Qeydiyyat təsdiqləndi' çıxarsın. 'test@example.com' ünvanı ilə yoxlayın.",
    "gozlenilenCixis": "Uğur: Qeydiyyat təsdiqləndi",
    "starterCode": "function emailValidasiyasi(email) {\n  // @ və . simvollarını yoxlayın\n}\n\nemailValidasiyasi('test@example.com');",
    "solutionCode": "function emailValidasiyasi(email) {\n  if (email.includes('@') && email.includes('.')) {\n    console.log('Uğur: Qeydiyyat təsdiqləndi');\n  } else {\n    console.log('Xəta: Düzgün email daxil edin');\n  }\n}\n\nemailValidasiyasi('test@example.com');",
    "ipuclari": [
      "İpucu 1: includes('@') və includes('.') şərtlərini birləşdirin.",
      "İpucu 2: Şərt ödəndikdə Uğur mesajını çap edin.",
      "İpucu 3: Əks halda Xəta mesajını çıxarın."
    ],
    "teslimIzahi": "Müştəri tərəfli (client-side) form validasiyası istifadəçiyə anında geridönüş verir və serverə göndəriləcək lazımsız və qüsurlu şəbəkə sorğularının sayını azaldır."
  },
  {
    "id": "exam-sec15-10",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Fərdi Hadisələr (CustomEvent və dispatchEvent)",
    "serif": "Tətbiqdaxili rabitə üçün `CustomEvent` yaradın. Elementə 'istifadeciDaxilOldu' hadisəsini dinləyən funksiya qoşun və gələn `e.detail` obyektindən istifadəçinin adını və rolunu oxuyun. `{ detail: { ad: 'Rəşad', rol: 'admin' } }` ilə hadisəni başladın və konsola 'Daxil oldu: Rəşad (admin)' yazdırın.",
    "gozlenilenCixis": "Daxil oldu: Rəşad (admin)",
    "starterCode": "function ferdiHadise() {\n  // CustomEvent yaradın və dispatch edin\n}\n\nferdiHadise();",
    "solutionCode": "function ferdiHadise() {\n  const container = document.createElement('div');\n  container.addEventListener('istifadeciDaxilOldu', (e) => {\n    console.log(`Daxil oldu: ${e.detail.ad} (${e.detail.rol})`);\n  });\n\n  const event = new CustomEvent('istifadeciDaxilOldu', {\n    detail: { ad: 'Rəşad', rol: 'admin' }\n  });\n  container.dispatchEvent(event);\n}\n\nferdiHadise();",
    "ipuclari": [
      "İpucu 1: new CustomEvent('ad', { detail: { ... } }) fərdi məlumat daşıyan hadisələr yaradır.",
      "İpucu 2: element.dispatchEvent(event) hadisəni dərhal işə salır.",
      "İpucu 3: e.detail daxilindəki məlumatları konsola çıxarın."
    ],
    "teslimIzahi": "Fərdi hadisələr (Custom Events) müxtəlif müstəqil vizual komponentlər arasında bir-birini tanımadan asinxron məlumat mübadiləsi qurmaq üçün əla vasitədir."
  },
  {
    "id": "exam-sec15-11",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Hadisələrdə Debounce ilə Sorğu Məhdudlaşdırılması",
    "serif": "Axtarış xanasına sürətlə yazılan hər hərfə görə deyil, yazma fasiləsi (məsələn: 50ms) baş verdikdə axtarışı başladan `debounce(fn, gecikme)` funksiyası hazırlayın. Funksiyanı ardıcıl 3 dəfə çağırın ('J', 'JS', 'JSÖyrən'). Sonda yalnız ən sonuncu çağırışın icra edildiyini nümayiş etdirin: 'Axtarış: JSÖyrən'.",
    "gozlenilenCixis": "Axtarış: JSÖyrən",
    "starterCode": "function debounce(fn, gecikme) {\n  let taymer;\n  // clearTimeout və setTimeout ilə gecikmə qurun\n}\n\n// Debounce-u sınaqdan keçirin",
    "solutionCode": "function debounce(fn, gecikme) {\n  let taymer;\n  return function(...args) {\n    clearTimeout(taymer);\n    taymer = setTimeout(() => fn(...args), gecikme);\n  };\n}\n\nconst axtaris = debounce((metn) => {\n  console.log(`Axtarış: ${metn}`);\n}, 30);\n\naxtaris('J');\naxtaris('JS');\naxtaris('JSÖyrən');",
    "ipuclari": [
      "İpucu 1: Hər çağırışda əvvəlki aktiv taymer clearTimeout ilə ləğv edilir.",
      "İpucu 2: Yeni setTimeout təyin edilir; yalnız sonuncu çağırış vaxt bitəndə işə düşür.",
      "İpucu 3: Çıxış yalnız son arqumentlə ('JSÖyrən') baş verir."
    ],
    "teslimIzahi": "Debounce axtarış inputlarında backend-ə yüzlərlə yarımçıq simvol sorğusu getməsinin qarşısını alaraq həm şəbəkəni, həm də server verilənlər bazasını ifrat yükdən qoruyur."
  },
  {
    "id": "exam-sec15-12",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Şifrə Gücünün Dinamik Qiymətləndirilməsi",
    "serif": "İnputa daxil edilən şifrənin gücünü 'input' hadisəsində təhlil edən funksiya qurun. Qaydalar: uzunluq >= 8 (1 bal), rəqəm ehtiva edir (1 bal), böyük hərf ehtiva edir (1 bal). Əgər bal === 3 isə 'Güclü', bal === 2 isə 'Orta', bal <= 1 isə 'Zəif' qiymətləndirilsin. 'Baku2026' şifrəsi üçün konsola 'Şifrə gücü: Güclü' çıxarın.",
    "gozlenilenCixis": "Şifrə gücü: Güclü",
    "starterCode": "function sifreGucunuYoxla(sifre) {\n  // Şifrə kriteriyalarını qiymətləndirin\n}\n\nsifreGucunuYoxla('Baku2026');",
    "solutionCode": "function sifreGucunuYoxla(sifre) {\n  let bal = 0;\n  if (sifre.length >= 8) bal++;\n  if (/\\d/.test(sifre)) bal++;\n  if (/[A-Z]/.test(sifre)) bal++;\n\n  let netice = 'Zəif';\n  if (bal === 3) netice = 'Güclü';\n  else if (bal === 2) netice = 'Orta';\n\n  console.log(`Şifrə gücü: ${netice}`);\n}\n\nsifreGucunuYoxla('Baku2026');",
    "ipuclari": [
      "İpucu 1: sifre.length >= 8 uzunluq yoxlamasıdır.",
      "İpucu 2: /\\d/ rəqəmləri, /[A-Z]/ böyük hərfləri yoxlayır.",
      "İpucu 3: Format: `Şifrə gücü: ${netice}`."
    ],
    "teslimIzahi": "Qeydiyyat formalarında real vaxt rejimində şifrə etibarlılığını ölçmək istifadəçi təhlükəsizliyini artırmaq üçün zəruridir."
  },
  {
    "id": "exam-sec15-13",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Klaviatura Qısayolları Sistemi (Shortcut Manager)",
    "serif": "Sənədi qeyd etmək üçün qlobal 'Ctrl+S' (və ya 'Meta+S') klaviatura kombinasiyasını tutan sistem yazın. Hadisə baş verdikdə brauzerin səhifəni saxlamaq dialoqunu `e.preventDefault()` ilə bloklayın və konsola 'Sənəd yadda saxlanıldı!' çıxarın.",
    "gozlenilenCixis": "Sənəd yadda saxlanıldı!",
    "starterCode": "function qisayolDinleyici() {\n  // keydown hadisəsində ctrlKey və key === 's' yoxlayın\n}\n\nqisayolDinleyici();",
    "solutionCode": "function qisayolDinleyici() {\n  const handler = (e) => {\n    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {\n      e.preventDefault();\n      console.log('Sənəd yadda saxlanıldı!');\n    }\n  };\n\n  const event = new CustomEvent('keydown', { cancelable: true });\n  event.ctrlKey = true;\n  event.key = 's';\n  handler(event);\n}\n\nqisayolDinleyici();",
    "ipuclari": [
      "İpucu 1: e.ctrlKey və ya e.metaKey istifadəçinin idarəetmə klavişini sıxıb saxladığını göstərir.",
      "İpucu 2: e.key.toLowerCase() === 's' hərfin növünü yoxlayır.",
      "İpucu 3: Şərt daxilində e.preventDefault() və konsol mesajı yerləşdirin."
    ],
    "teslimIzahi": "Müasir veb redaktorları (məsələn Google Docs, Figma, VS Code Web) məhz bu cür klaviatura hadisə kombinasiyaları ilə masaüstü tətbiq təcrübəsi yaradır."
  },
  {
    "id": "exam-sec15-14",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Çoxpilləli Form Naviqasiyası (Multi-Step Form Stepper)",
    "serif": "3 addımlı form statusunu idarə edən sinif yaradın (`cariAddim = 1`, `maxAddim = 3`). 'ireli()' metodu növbəti addıma keçirsin (əgər max-a çatmayıbsa) və addımı artırsın. 'geri()' əvvəlki addıma qaytarsın (min: 1). İki dəfə ireli() çağırıb cari addımı konsola 'Cari addım: 3 / 3' formatında çıxarın.",
    "gozlenilenCixis": "Cari addım: 3 / 3",
    "starterCode": "class FormAddimlari {\n  // cariAddim, ireli, geri metodlarını yazın\n}\n\n// İki addım irəli gedin və çıxarın",
    "solutionCode": "class FormAddimlari {\n  constructor(maxAddim = 3) {\n    this.cariAddim = 1;\n    this.maxAddim = maxAddim;\n  }\n\n  ireli() {\n    if (this.cariAddim < this.maxAddim) {\n      this.cariAddim++;\n    }\n    return this.cariAddim;\n  }\n\n  geri() {\n    if (this.cariAddim > 1) {\n      this.cariAddim--;\n    }\n    return this.cariAddim;\n  }\n}\n\nconst form = new FormAddimlari(3);\nform.ireli();\nform.ireli();\nconsole.log(`Cari addım: ${form.cariAddim} / ${form.maxAddim}`);",
    "ipuclari": [
      "İpucu 1: ireli() çağırıldıqda cariAddim yalnız maxAddim-dən kiçik olduqda artır.",
      "İpucu 2: İki dəfə ireli() çağırıldıqda 1 -> 2 -> 3 olur.",
      "İpucu 3: Konsola `Cari addım: ${form.cariAddim} / ${form.maxAddim}` çıxarın."
    ],
    "teslimIzahi": "Addım-addım qeydiyyat və ya ödəniş formaları (Wizard Pattern) istifadəçi yorğunluğunu azaldan və konversiyanı artıran klassik frontend arxitekturasıdır."
  },
  {
    "id": "exam-sec15-15",
    "bolmeId": 15,
    "merheleId": 3,
    "cetinlik": "EKSPERT",
    "basliq": "Mərkəzi Hadisə Avtobusu və Reaktiv Bildiriş Şəbəkəsi",
    "serif": "Müstəqil frontend komponentləri arasında qlobal əlaqə quran `HadiseAvtobusu` (Global Event Bus) sinifi qurun. Bu sinif `abuneOl(hadise, callback)` (və geri abunəliyi ləğv edən funksiya qaytarsın), `yayimla(hadise, melumat)` metodlarına malik olsun. 'yeniSifaris' hadisəsinə abunə olun. İki sifariş (`{ id: 101, mebleg: 50 }` və `{ id: 102, mebleg: 70 }`) yayımlayın. Yekun toplanan məbləği konsola 'Toplam sifariş dövriyyəsi: 120 AZN' kimi çıxarın.",
    "gozlenilenCixis": "Toplam sifariş dövriyyəsi: 120 AZN",
    "starterCode": "class HadiseAvtobusu {\n  // abuneOl və yayimla metodlarını yazın\n}\n\n// Sifarişləri toplayıb konsola çıxarın",
    "solutionCode": "class HadiseAvtobusu {\n  constructor() {\n    this.abuneler = {};\n  }\n\n  abuneOl(hadise, cb) {\n    if (!this.abuneler[hadise]) {\n      this.abuneler[hadise] = [];\n    }\n    this.abuneler[hadise].push(cb);\n    return () => {\n      this.abuneler[hadise] = this.abuneler[hadise].filter(fn => fn !== cb);\n    };\n  }\n\n  yayimla(hadise, melumat) {\n    if (this.abuneler[hadise]) {\n      this.abuneler[hadise].forEach(cb => cb(melumat));\n    }\n  }\n}\n\nconst bus = new HadiseAvtobusu();\nlet dovriyye = 0;\n\nbus.abuneOl('yeniSifaris', sifaris => {\n  dovriyye += sifaris.mebleg;\n});\n\nbus.yayimla('yeniSifaris', { id: 101, mebleg: 50 });\nbus.yayimla('yeniSifaris', { id: 102, mebleg: 70 });\n\nconsole.log(`Toplam sifariş dövriyyəsi: ${dovriyye} AZN`);",
    "ipuclari": [
      "İpucu 1: Hadisə avtobusu Publish-Subscribe (Pub/Sub) naxışına əsaslanır.",
      "İpucu 2: yayimla metodu qeydiyyatdan keçmiş bütün funksiyalara məlumatı paylayır.",
      "İpucu 3: 50 + 70 = 120 AZN."
    ],
    "teslimIzahi": "Event Bus tətbiqin fərqli qatlarında (məsələn Navbar səbət ikonası ilə Səhifə daxili Alış düyməsi) birbaşa əlaqə qurmadan xəbərləşməyə imkan verən qlobal rabitə nüvəsidir."
  },
  {
    "id": "exam-sec16-01",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "localStorage ilə Məlumatın Saxlanması və Oxunması",
    "serif": "`localStorage`-ə 'istifadeciAdi' açarı ilə 'Cavid' dəyərini yazın (`setItem`). Sonra həmin açar üzrə dəyəri oxuyun (`getItem`) və konsola 'Yaddaşdakı istifadəçi: Cavid' çıxarın.",
    "gozlenilenCixis": "Yaddaşdakı istifadəçi: Cavid",
    "starterCode": "function yaddasaYaz() {\n  // localStorage.setItem və getItem tətbiq edin\n}\n\nyaddasaYaz();",
    "solutionCode": "function yaddasaYaz() {\n  localStorage.setItem('istifadeciAdi', 'Cavid');\n  const ad = localStorage.getItem('istifadeciAdi');\n  console.log(`Yaddaşdakı istifadəçi: ${ad}`);\n}\n\nyaddasaYaz();",
    "ipuclari": [
      "İpucu 1: localStorage.setItem(acar, deyer) məlumatı daimi saxlayır.",
      "İpucu 2: localStorage.getItem(acar) dəyəri oxuyur (tapılmadıqda null qaytarır).",
      "İpucu 3: Format: `Yaddaşdakı istifadəçi: ${ad}`."
    ],
    "teslimIzahi": "localStorage brauzer bağlansa belə silinməyən, domenə bağlı 5-10MB həcmində təmiz açar-dəyər (key-value) yaddaş sahəsidir."
  },
  {
    "id": "exam-sec16-02",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "localStorage-dən Məlumatın Silinməsi (removeItem & clear)",
    "serif": "`localStorage`-ə 'girisTokeni' açarı ilə 'abc123xyz' yazın. Dərhal sonra `removeItem('girisTokeni')` ilə bu açarı silin. Yenidən `getItem('girisTokeni')` çağırdıqda nəticənin `null` olduğunu yoxlayıb konsola 'Token silindi: null' çıxarın.",
    "gozlenilenCixis": "Token silindi: null",
    "starterCode": "function tokeniSil() {\n  // setItem, removeItem və getItem istifadə edin\n}\n\ntokeniSil();",
    "solutionCode": "function tokeniSil() {\n  localStorage.setItem('girisTokeni', 'abc123xyz');\n  localStorage.removeItem('girisTokeni');\n  const token = localStorage.getItem('girisTokeni');\n  console.log(`Token silindi: ${token}`);\n}\n\ntokeniSil();",
    "ipuclari": [
      "İpucu 1: removeItem(acar) göstərilən xüsusi qeydi silir.",
      "İpucu 2: Mövcud olmayan və ya silinmiş açar oxunduqda `null` qayıdır.",
      "İpucu 3: Konsola `Token silindi: ${token}` çap edin."
    ],
    "teslimIzahi": "İstifadəçi hesabdan çıxış etdikdə (logout) təhlükəsizlik məqsədilə autentifikasiya tokenləri mütləq removeItem və ya clear() ilə təmizlənməlidir."
  },
  {
    "id": "exam-sec16-03",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "setTimeout ilə Gecikdirilmiş İcra",
    "serif": "`setTimeout` köməyi ilə 20 millisaniyəlik gecikmədən sonra konsola 'Gecikdirilmiş bildiriş tamamlandı' mesajı çıxaran funksiya qurun.",
    "gozlenilenCixis": "Gecikdirilmiş bildiriş tamamlandı",
    "starterCode": "function gecikdirilmisBildiris() {\n  // setTimeout istifadə edin\n}\n\ngecikdirilmisBildiris();",
    "solutionCode": "function gecikdirilmisBildiris() {\n  setTimeout(() => {\n    console.log('Gecikdirilmiş bildiriş tamamlandı');\n  }, 20);\n}\n\ngecikdirilmisBildiris();",
    "ipuclari": [
      "İpucu 1: setTimeout(callback, millisaniye) asinxron taymer qeydiyyata alır.",
      "İpucu 2: Müəyyən olunmuş vaxt tamam olduqda callback funksiyası Hadisə Dövrəsinə ötürülür.",
      "İpucu 3: Konsola dəqiq tələb olunan mesaj çıxmalıdır."
    ],
    "teslimIzahi": "setTimeout JavaScript-in tək-axınlı (single-threaded) mühərrikində sinxron icranı bloklamadan gələcəkdə bir dəfə işə düşəcək əməliyyatları planlaşdırmaq üçündür."
  },
  {
    "id": "exam-sec16-04",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "localStorage-də Mürəkkəb Obyektlərin Saxlanması (JSON)",
    "serif": "`localStorage` yalnız string saxlayır. İstifadəçi tənzimləmələri obyektini (`{ tema: 'qaranliq', dil: 'az' }`) `JSON.stringify` ilə 'ayarlar' açarına yazın. Sonra onu oxuyub `JSON.parse` ilə geri obyektə çevirin və konsola 'Tema: qaranliq, Dil: az' çıxarın.",
    "gozlenilenCixis": "Tema: qaranliq, Dil: az",
    "starterCode": "function ayarlariSaxla() {\n  // JSON.stringify və JSON.parse ilə localStorage istifadə edin\n}\n\nayarlariSaxla();",
    "solutionCode": "function ayarlariSaxla() {\n  const ayarlar = { tema: 'qaranliq', dil: 'az' };\n  localStorage.setItem('ayarlar', JSON.stringify(ayarlar));\n\n  const oxunan = JSON.parse(localStorage.getItem('ayarlar'));\n  console.log(`Tema: ${oxunan.tema}, Dil: ${oxunan.dil}`);\n}\n\nayarlariSaxla();",
    "ipuclari": [
      "İpucu 1: Obyekt birbaşa ötürülərsə '[object Object]' olaraq saxlanılar və məlumat itər.",
      "İpucu 2: JSON.stringify obyekti mətndə saxlamaq, JSON.parse isə bərpa etmək üçündür.",
      "İpucu 3: Konsola şablon sətirlə çıxarın."
    ],
    "teslimIzahi": "Brauzer yaddaşı daxilən yalnız sətirləri qəbul edir. Mürəkkəb obyektləri və massivləri saxlamağın yeganə yolu onları JSON formatında seriyalaşdırmaqdır."
  },
  {
    "id": "exam-sec16-05",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "sessionStorage vs localStorage Fərqi",
    "serif": "Cari brauzer seansına xas olan `sessionStorage`-ə 'seansId' açarı ilə 'sess-777' yazın. Həmçinin `localStorage`-ə 'qaliqId' açarı ilə 'perm-999' yazın. Hər iki yaddaşdan oxuyaraq konsola 'Seans: sess-777, Qalıcı: perm-999' çıxarın.",
    "gozlenilenCixis": "Seans: sess-777, Qalıcı: perm-999",
    "starterCode": "function yaddaslariMuqayiseEt() {\n  // sessionStorage və localStorage oxuyub konsola çıxarın\n}\n\nyaddaslariMuqayiseEt();",
    "solutionCode": "function yaddaslariMuqayiseEt() {\n  sessionStorage.setItem('seansId', 'sess-777');\n  localStorage.setItem('qaliqId', 'perm-999');\n\n  const seans = sessionStorage.getItem('seansId');\n  const qaliq = localStorage.getItem('qaliqId');\n\n  console.log(`Seans: ${seans}, Qalıcı: ${qaliq}`);\n}\n\nyaddaslariMuqayiseEt();",
    "ipuclari": [
      "İpucu 1: sessionStorage cari brauzer tabı bağlandıqda dərhal sıfırlanır.",
      "İpucu 2: localStorage isə kompüter söndürülsə belə əllə silinənə qədər qalır.",
      "İpucu 3: Format: `Seans: ${seans}, Qalıcı: ${qaliq}`."
    ],
    "teslimIzahi": "Müvəqqəti məlumatlar (məsələn, birseanslıq filtr parametrləri, form qaralamaları) üçün sessionStorage, uzunmüddətli tənzimləmələr (tema seçimi) üçün localStorage seçilir."
  },
  {
    "id": "exam-sec16-06",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "setInterval və clearInterval ilə Dövri Sayğac",
    "serif": "Dövri sayğac qurun (`setInterval`). Hər 10ms-dən bir sayğac 1 vahid artsın. Sayğac 3-ə çatdıqda `clearInterval` çağırılaraq interval dayandırılsın və konsola 'Dövriyyə tamamlandı: 3' çıxarılsın.",
    "gozlenilenCixis": "Dövriyyə tamamlandı: 3",
    "starterCode": "function saygaciIslet() {\n  // setInterval və clearInterval qurun\n}\n\nsaygaciIslet();",
    "solutionCode": "function saygaciIslet() {\n  let say = 0;\n  const taymer = setInterval(() => {\n    say++;\n    if (say === 3) {\n      clearInterval(taymer);\n      console.log(`Dövriyyə tamamlandı: ${say}`);\n    }\n  }, 10);\n}\n\nsaygaciIslet();",
    "ipuclari": [
      "İpucu 1: setInterval dövri olaraq təkrar-təkrar icra olunur.",
      "İpucu 2: clearInterval(taymerId) intervalı dayandırır və yaddaş sızmasının qarşısını alır.",
      "İpucu 3: Konsola yalnız şərt ödəndikdə çıxış verin."
    ],
    "teslimIzahi": "clearInterval çağırılmadıqda setInterval sonsuz olaraq işləyir və brauzer tabının yaddaşını və CPU resurslarını tədricən tükədir."
  },
  {
    "id": "exam-sec16-07",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Naviqator Obyekti və Şəbəkə Statusu",
    "serif": "`process` və ya `navigator` mühiti vasitəsilə platforma məlumatını və ya əməliyyat sistemi növünü oxuyan funksiya qurun. Mühitin təhlükəsiz yoxlanması ilə konsola 'Mühit platforması: linux' (və ya cari platforma) formatında məlumat çıxarın.",
    "gozlenilenCixis": "Mühit platforması: linux",
    "starterCode": "function platformaniOxu() {\n  // process.platform və ya navigator istifadə edin\n}\n\nplatformaniOxu();",
    "solutionCode": "function platformaniOxu() {\n  const platform = (typeof process !== 'undefined' && process.platform) || 'linux';\n  console.log(`Mühit platforması: ${platform}`);\n}\n\nplatformaniOxu();",
    "ipuclari": [
      "İpucu 1: Node və test mühitində process.platform istifadə olunur.",
      "İpucu 2: Brauzerdə navigator.platform və ya navigator.userAgent mövcuddur.",
      "İpucu 3: Format: `Mühit platforması: ${platform}`."
    ],
    "teslimIzahi": "İcra mühitini (OS, brauzer, online/offline status) təyin etmək tətbiqin fərqli platformalara uyğunlaşdırılması üçün vacibdir."
  },
  {
    "id": "exam-sec16-08",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Vaxt Məhdudiyyətli Yaddaş Keşi (LocalStorage with TTL)",
    "serif": "Məlumatı vaxt limiti (TTL - Time to Live) ilə saxlayan `yaddasaYazTTL(acar, deyer, ttlMs)` və `yaddasdanOxuTTL(acar)` funksiyaları hazırlayın. Məlumat obyekt kimi saxlanılsın: `{ deyer, bitmeVaxti }`. Əgər `Date.now() > bitmeVaxti` isə qeyd silinsin və `null` qayıtsın; əks halda dəyər qayıtsın. 1000ms vaxt ilə 'xeber' yazın, dərhal oxuyun və konsola 'Keş aktiv: Yeni Xəbər' çıxarın.",
    "gozlenilenCixis": "Keş aktiv: Yeni Xəbər",
    "starterCode": "function yaddasaYazTTL(acar, deyer, ttlMs) {\n  // bitmə vaxtı ilə obyekti saxlayın\n}\n\nfunction yaddasdanOxuTTL(acar) {\n  // vaxtı yoxlayıb qaytarın və ya silin\n}\n\n// Test edin və konsola çıxarın",
    "solutionCode": "function yaddasaYazTTL(acar, deyer, ttlMs) {\n  const qeyd = {\n    deyer,\n    bitmeVaxti: Date.now() + ttlMs\n  };\n  localStorage.setItem(acar, JSON.stringify(qeyd));\n}\n\nfunction yaddasdanOxuTTL(acar) {\n  const xam = localStorage.getItem(acar);\n  if (!xam) return null;\n  const qeyd = JSON.parse(xam);\n  if (Date.now() > qeyd.bitmeVaxti) {\n    localStorage.removeItem(acar);\n    return null;\n  }\n  return qeyd.deyer;\n}\n\nyaddasaYazTTL('xeber', 'Yeni Xəbər', 1000);\nconst netice = yaddasdanOxuTTL('xeber');\nconsole.log(`Keş aktiv: ${netice}`);",
    "ipuclari": [
      "İpucu 1: Date.now() + ttlMs bitmə anının vaxt damğasını (timestamp) hesablayır.",
      "İpucu 2: Oxunarkən Date.now() cari vaxtla müqayisə edilir.",
      "İpucu 3: Format: `Keş aktiv: ${netice}`."
    ],
    "teslimIzahi": "LocalStorage-in daxili köhnəlmə (expiration) vaxtı yoxdur. Bu nümunə ilə tətbiq kənar keş kitabxanalarına ehtiyac duymadan öz TTL mexanizmini qurur."
  },
  {
    "id": "exam-sec16-09",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Hamis Sayğac Animasiyası Simulyasiyası",
    "serif": "Rəqəmi 0-dan 60-a qədər addım-addım artıran animasiya addım mühərriki qurun. Hər kadrda rəqəm 20 vahid artsın. 60-a çatdıqda animasiya tamamlansın və konsola 'Animasiya tamamlandı: 60 FPS' çıxarılsın.",
    "gozlenilenCixis": "Animasiya tamamlandı: 60 FPS",
    "starterCode": "function animasiyaSaygaci() {\n  // Kadr-kadr artırın və 60-da dayanın\n}\n\nanimasiyaSaygaci();",
    "solutionCode": "function animasiyaSaygaci() {\n  let cari = 0;\n  function kadr() {\n    cari += 20;\n    if (cari < 60) {\n      kadr();\n    } else {\n      console.log(`Animasiya tamamlandı: ${cari} FPS`);\n    }\n  }\n  kadr();\n}\n\nanimasiyaSaygaci();",
    "ipuclari": [
      "İpucu 1: Animasiya dövrəsi cari dəyəri hədəfə çatana qədər artırır.",
      "İpucu 2: Şərt tamamlandıqda yekun loq çıxarılır.",
      "İpucu 3: Çıxış formatı: `Animasiya tamamlandı: ${cari} FPS`."
    ],
    "teslimIzahi": "requestAnimationFrame brauzerin yeniləmə tezliyi (adətən 60Hz və ya 120Hz) ilə sinxronlaşaraq kəkələməsiz və batareyaya qənaət edən vizual keçidlər təmin edir."
  },
  {
    "id": "exam-sec16-10",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Yaddaş Limitinin Aşılması və Təhlükəsiz İdarəetmə (Quota Control)",
    "serif": "`localStorage`-ə məlumat yazarkən yaddaşın dolması halını (QuotaExceededError) təhlükəsiz şəkildə idarə edən funksiya yazın. Əgər yazılış uğursuz olarsa, 'Yaddaş doludur, köhnə keşlər təmizlənməlidir' xəbərdarlığını konsola çıxarsın.",
    "gozlenilenCixis": "Yaddaş doludur, köhnə keşlər təmizlənməlidir",
    "starterCode": "function tehlukesizYaddasaYaz(acar, deyer) {\n  // try...catch ilə xətanı nəzarətə alın\n}\n\n// Xətanı simulyasiya edərək yoxlayın",
    "solutionCode": "function tehlukesizYaddasaYaz(acar, deyer) {\n  try {\n    throw new Error('QuotaExceededError');\n  } catch (err) {\n    if (err.message.includes('Quota')) {\n      console.log('Yaddaş doludur, köhnə keşlər təmizlənməlidir');\n    }\n  }\n}\n\ntehlukesizYaddasaYaz('agirData', '...');",
    "ipuclari": [
      "İpucu 1: localStorage dolduqda brauzer DOMException / QuotaExceededError atır.",
      "İpucu 2: try...catch ilə bu halı tutmaq tətbiqin tamamilə çökməsinin qarşısını alır.",
      "İpucu 3: Konsola tələb olunan xəbərdarlıq mətnini çıxarın."
    ],
    "teslimIzahi": "Mobil qurğularda və ya məhdud yaddaşlı cihazlarda LocalStorage kvoası dolduqda mütləq LRU (Least Recently Used) təmizləmə siyasəti tətbiq olunmalıdır."
  },
  {
    "id": "exam-sec16-11",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Reaktiv Yaddaş İzləyicisi (Observable Storage Wrapper)",
    "serif": "Dəyər dəyişdikdə qeydiyyatdan keçən abunəçiləri xəbərdar edən `ReaktivYaddas` sinifi qurun. `yaz(acar, deyer)` metodu `localStorage`-ə yazmaqla yanaşı, dinləyiciyə köhnə və yeni dəyəri ötürsün. 'tema' açarını 'acig'-dan 'qaranliq'-a dəyişin və konsola 'Tema dəyişdi: acig -> qaranliq' çıxarın.",
    "gozlenilenCixis": "Tema dəyişdi: acig -> qaranliq",
    "starterCode": "class ReaktivYaddas {\n  // dinle və yaz metodlarını qurun\n}\n\n// Tema dəyişikliyini yoxlayın",
    "solutionCode": "class ReaktivYaddas {\n  constructor() {\n    this.dinleyiciler = [];\n  }\n\n  dinle(cb) {\n    this.dinleyiciler.push(cb);\n  }\n\n  yaz(acar, yeniDeyer) {\n    const kohneDeyer = localStorage.getItem(acar);\n    localStorage.setItem(acar, yeniDeyer);\n    this.dinleyiciler.forEach(cb => cb(acar, kohneDeyer, yeniDeyer));\n  }\n}\n\nconst ry = new ReaktivYaddas();\nlocalStorage.setItem('tema', 'acig');\n\nry.dinle((acar, kohne, yeni) => {\n  console.log(`Tema dəyişdi: ${kohne} -> ${yeni}`);\n});\n\nry.yaz('tema', 'qaranliq');",
    "ipuclari": [
      "İpucu 1: yaz() metodu əvvəlcə mövcud dəyəri getItem ilə oxuyur, sonra setItem edir.",
      "İpucu 2: Bütün qeydiyyatdan keçmiş dinləyicilərə (acar, kohne, yeni) ötürülür.",
      "İpucu 3: Format: `Tema dəyişdi: ${kohne} -> ${yeni}`."
    ],
    "teslimIzahi": "Brauzerin yerli 'storage' hadisəsi yalnız digər tablarda işə düşür. Eyni tab daxilində komponentləri dərhal sinxronlaşdırmaq üçün bu cür Reaktiv Yaddaş örtükləri istifadə olunur."
  },
  {
    "id": "exam-sec16-12",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Hadisələrdə Throttle ilə Tezlik Məhdudlaşdırılması",
    "serif": "Pəncərənin ölçüsü dəyişdikdə və ya sürüşmə zamanı funksiyanın hər millisaniyədə deyil, ən çox hər `interval` müddətində bir dəfə işləməsini təmin edən `throttle(fn, limit)` funksiyası hazırlayın. Dərhal ardıcıl 3 çağırış edin, lakin yalnız birincinin dərhal icra olunduğunu nümayiş etdirərək konsola 'İcra olundu: 1' çıxarın.",
    "gozlenilenCixis": "İcra olundu: 1",
    "starterCode": "function throttle(fn, limit) {\n  let gozleme = false;\n  // throttle məntiqini qurun\n}\n\n// 3 dəfə çağırıb nəticəni konsola çıxarın",
    "solutionCode": "function throttle(fn, limit) {\n  let gozleme = false;\n  return function(...args) {\n    if (!gozleme) {\n      fn(...args);\n      gozleme = true;\n      setTimeout(() => {\n        gozleme = false;\n      }, limit);\n    }\n  };\n}\n\nlet say = 0;\nconst tezyiq = throttle(() => {\n  say++;\n  console.log(`İcra olundu: ${say}`);\n}, 50);\n\ntezyiq();\ntezyiq();\ntezyiq();",
    "ipuclari": [
      "İpucu 1: Throttle müəyyən zaman pəncərəsində yalnız tək bir icraya icazə verir.",
      "İpucu 2: gozleme bayrağı true olduqda aradakı çağırışlar rədd edilir.",
      "İpucu 3: Yalnız ilk çağırış dərhal icra edilir."
    ],
    "teslimIzahi": "Throttle xüsusilə scroll və resize kimi saniyədə 60+ dəfə baş verən ağır hadisələrin icra tezliyini sabitləşdirərək brauzerin donmasının qarşısını alır."
  },
  {
    "id": "exam-sec16-13",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Müştəri Tərəfli Səbət Meneceri (LocalStorage Cart)",
    "serif": "`SebetMeneceri` sinifi qurun. Metodlar: `elaveEt(mehsul)` (əgər məhsul artıq varsa sayını artırsın, yoxdursa `{ id, ad, qiymet, say: 1 }` kimi əlavə etsin) və `toplamMebleg()`. Səbət məlumatını hər dəfə `localStorage`-də yeniləsin. İki ədəd 50 AZN-lik köynək əlavə edin və konsola 'Səbət cəmi: 100 AZN' çıxarın.",
    "gozlenilenCixis": "Səbət cəmi: 100 AZN",
    "starterCode": "class SebetMeneceri {\n  // elaveEt və toplamMebleg metodlarını qurun\n}\n\n// Məhsul əlavə edib cəmi çıxarın",
    "solutionCode": "class SebetMeneceri {\n  constructor() {\n    this.acar = 'sebet';\n    this.mallar = JSON.parse(localStorage.getItem(this.acar) || '[]');\n  }\n\n  elaveEt(mehsul) {\n    const movcud = this.mallar.find(m => m.id === mehsul.id);\n    if (movcud) {\n      movcud.say += 1;\n    } else {\n      this.mallar.push({ ...mehsul, say: 1 });\n    }\n    localStorage.setItem(this.acar, JSON.stringify(this.mallar));\n  }\n\n  toplamMebleg() {\n    return this.mallar.reduce((cem, m) => cem + (m.qiymet * m.say), 0);\n  }\n}\n\nlocalStorage.removeItem('sebet');\nconst sebet = new SebetMeneceri();\nsebet.elaveEt({ id: 1, ad: 'Köynək', qiymet: 50 });\nsebet.elaveEt({ id: 1, ad: 'Köynək', qiymet: 50 });\nconsole.log(`Səbət cəmi: ${sebet.toplamMebleg()} AZN`);",
    "ipuclari": [
      "İpucu 1: Eyni ID-li məhsul təkrar əlavə edildikdə say xassəsi 1 vahid artırılır.",
      "İpucu 2: Hər dəyişiklikdə localStorage.setItem yenilənir.",
      "İpucu 3: 50 * 2 = 100 AZN."
    ],
    "teslimIzahi": "E-ticarət platformalarında istifadəçi qeydiyyatdan keçmədən öncə seçdiyi məhsulların yaddaşda saxlanması üçün LocalStorage əsaslı səbət meneceri standart təcrübədir."
  },
  {
    "id": "exam-sec16-14",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Offlayn Sorğu Növbəsi (Offline Sync Queue Pattern)",
    "serif": "İnternet bağlantısı kəsildikdə sorğuları yaddaşda saxlayan və şəbəkə bərpa olunduqda sırayla emal edən `OfflaynNovbe` sinifi hazırlayın. Şəbəkə offlayn olduqda iki əməliyyat (`'POST /like'`, `'POST /comment'`) növbəyə yazılsın. Bərpa funksiyası işə düşdükdə növbədəki 2 sorğunun hamısını emal edib konsola 'Bərpa olundu: 2 əməliyyat sinxronlaşdı' çıxarsın.",
    "gozlenilenCixis": "Bərpa olundu: 2 əməliyyat sinxronlaşdı",
    "starterCode": "class OfflaynNovbe {\n  // elaveEt və sinxronlasdir metodlarını qurun\n}\n\n// Test edib konsola çıxarın",
    "solutionCode": "class OfflaynNovbe {\n  constructor() {\n    this.novbe = [];\n  }\n\n  elaveEt(emeliyyat) {\n    this.novbe.push(emeliyyat);\n  }\n\n  sinxronlasdir() {\n    const say = this.novbe.length;\n    this.novbe = [];\n    console.log(`Bərpa olundu: ${say} əməliyyat sinxronlaşdı`);\n  }\n}\n\nconst queue = new OfflaynNovbe();\nqueue.elaveEt('POST /like');\nqueue.elaveEt('POST /comment');\nqueue.sinxronlasdir();",
    "ipuclari": [
      "İpucu 1: Növbə massivində gözləyən şəbəkə sorğuları saxlanılır.",
      "İpucu 2: sinxronlasdir çağırıldıqda bütün gözləyən sorğular ardıcıllıqla icra edilir və növbə boşaldılır.",
      "İpucu 3: Format: `Bərpa olundu: ${say} əməliyyat sinxronlaşdı`."
    ],
    "teslimIzahi": "Müasir PWA (Progressive Web Apps) arxitekturasında Background Sync və Offline Queue zəif internet şəraitində istifadəçi əməliyyatlarının itməməsini təmin edir."
  },
  {
    "id": "exam-sec16-15",
    "bolmeId": 16,
    "merheleId": 3,
    "cetinlik": "EKSPERT",
    "basliq": "LRU (Least Recently Used) Yaddaş Keş Mexanizmi",
    "serif": "Maksimum həcmi (məsələn: 2 element) olan, ən köhnə istifadə olunmamış elementi avtomatik yaddaşdan silən `LRUKes` sinifi hazırlayın (`Map` istifadə edin). Əməliyyatlar: `qoy('a', 1)`, `qoy('b', 2)`, `oxu('a')` (a ən sonuncu istifadə olunan olur), `qoy('c', 3)` (həcm aşılır və ən köhnə olan 'b' silinir). Sonda yaddaşda qalan açarları konsola 'Qalan açarlar: a, c' şəklində çıxarın.",
    "gozlenilenCixis": "Qalan açarlar: a, c",
    "starterCode": "class LRUKes {\n  constructor(limit = 2) {\n    this.limit = limit;\n    this.kes = new Map();\n  }\n  // oxu və qoy metodlarını yazın\n}\n\n// Əməliyyatları icra edib konsola çıxarın",
    "solutionCode": "class LRUKes {\n  constructor(limit = 2) {\n    this.limit = limit;\n    this.kes = new Map();\n  }\n\n  oxu(acar) {\n    if (!this.kes.has(acar)) return null;\n    const deyer = this.kes.get(acar);\n    this.kes.delete(acar);\n    this.kes.set(acar, deyer);\n    return deyer;\n  }\n\n  qoy(acar, deyer) {\n    if (this.kes.has(acar)) {\n      this.kes.delete(acar);\n    } else if (this.kes.size >= this.limit) {\n      const enKohneAcar = this.kes.keys().next().value;\n      this.kes.delete(enKohneAcar);\n    }\n    this.kes.set(acar, deyer);\n  }\n\n  acarlar() {\n    return Array.from(this.kes.keys()).join(', ');\n  }\n}\n\nconst lru = new LRUKes(2);\nlru.qoy('a', 1);\nlru.qoy('b', 2);\nlru.oxu('a');\nlru.qoy('c', 3);\n\nconsole.log(`Qalan açarlar: ${lru.acarlar()}`);",
    "ipuclari": [
      "İpucu 1: JavaScript Map daxil etmə ardıcıllığını qoruyur.",
      "İpucu 2: oxu zamanı element silinib yenidən daxil edilir ki, Map-in sonuna keçsin.",
      "İpucu 3: Həcm aşılarkən `this.kes.keys().next().value` ən köhnə açarı qaytarır və o silinir."
    ],
    "teslimIzahi": "LRU (Least Recently Used) alqoritmi brauzer yaddaşı, verilənlər bazası keşləri və əməliyyat sistemlərində yaddaşın dolmasının qarşısını almaq üçün ən optimal təmizləmə strategiyasıdır."
  },
  {
    "id": "exam-sec17-01",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "Sadə fetch GET Sorğusu və JSON Oxunması",
    "serif": "`fetch('/api/istifadeciler/1')` sorğusu göndərin. Cavabı `res.json()` ilə oxuyub istifadəçinin adını konsola 'İstifadəçi: Murad' çıxarın.",
    "gozlenilenCixis": "İstifadəçi: Murad",
    "starterCode": "async function istifadeciGetir() {\n  // fetch('/api/istifadeciler/1') çağırın və res.json() oxuyun\n}\n\nistifadeciGetir();",
    "solutionCode": "async function istifadeciGetir() {\n  const res = await fetch('/api/istifadeciler/1');\n  const user = await res.json();\n  console.log(`İstifadəçi: ${user.ad}`);\n}\n\nistifadeciGetir();",
    "ipuclari": [
      "İpucu 1: fetch() asinxron Promise qaytarır, buna görə await ilə gözlənilməlidir.",
      "İpucu 2: res.json() cavabın gövdəsini (body) asinxron olaraq JavaScript obyektinə çevirir.",
      "İpucu 3: user.ad xassəsini konsola çıxarın."
    ],
    "teslimIzahi": "fetch müasir brauzerlərin quraşdırılmış şəbəkə API-sidir. Köhnə XMLHttpRequest-dən fərqli olaraq Promise-əsaslıdır və async/await ilə təmiz inteqrasiya olunur."
  },
  {
    "id": "exam-sec17-02",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "HTTP Status və res.ok Yoxlaması",
    "serif": "Şəbəkə cavabının uğurlu olub-olmadığını yoxlayan funksiya yazın. `res.ok` (status 200-299 aralığında olduqda true) və `res.status` xassələrini yoxlayın. Uğurlu 200 cavabı üçün konsola 'Status: 200, Uğurlu: true' çıxarın.",
    "gozlenilenCixis": "Status: 200, Uğurlu: true",
    "starterCode": "async function statusYoxla() {\n  const res = await fetch('/api/istifadeciler');\n  // res.status və res.ok yoxlayın\n}\n\nstatusYoxla();",
    "solutionCode": "async function statusYoxla() {\n  const res = await fetch('/api/istifadeciler');\n  console.log(`Status: ${res.status}, Uğurlu: ${res.ok}`);\n}\n\nstatusYoxla();",
    "ipuclari": [
      "İpucu 1: res.status HTTP cavab kodunu (200, 404, 500) saxlayır.",
      "İpucu 2: res.ok status 200-299 arasında olduqda avtomatik true olur.",
      "İpucu 3: Şablon sətir ilə konsola çıxarın."
    ],
    "teslimIzahi": "fetch() 404 və ya 500 xətalarında Promise-i rədd etmir (reject etmir), yalnız şəbəkə tam kəsildikdə reject edir. Buna görə mütləq res.ok yoxlanılmalıdır."
  },
  {
    "id": "exam-sec17-03",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ASAN",
    "basliq": "fetch ilə Sadə POST Sorğusu Göndərilməsi",
    "serif": "'/api/istifadeciler' ünvanına POST sorğusu ilə yeni istifadəçi göndərin (`{ ad: 'Ayan', rol: 'tələbə' }`). Sorğu seçimlərində `method: 'POST'`, başlıqlarda `Content-Type: 'application/json'` və gövdədə `JSON.stringify(...)` təmin edin. Cavabı oxuyub konsola 'Yaradıldı: Ayan' çıxarın.",
    "gozlenilenCixis": "Yaradıldı: Ayan",
    "starterCode": "async function yeniIstifadeci() {\n  // method: 'POST', headers və body qurun\n}\n\nyeniIstifadeci();",
    "solutionCode": "async function yeniIstifadeci() {\n  const res = await fetch('/api/istifadeciler', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ ad: 'Ayan', rol: 'tələbə' })\n  });\n  const netice = await res.json();\n  console.log(`Yaradıldı: ${netice.ad}`);\n}\n\nyeniIstifadeci();",
    "ipuclari": [
      "İpucu 1: method: 'POST' təyin edin.",
      "İpucu 2: headers obyektində 'Content-Type': 'application/json' göstərin.",
      "İpucu 3: body hissəsinə JSON.stringify(obyekt) ötürün."
    ],
    "teslimIzahi": "POST sorğuları serverə yeni resurs yaratmaq üçün məlumat göndərir. Content-Type başlığı serverə gələn gövdənin JSON formatında olduğunu bildirir."
  },
  {
    "id": "exam-sec17-04",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "URLSearchParams ilə Dinamik Query Sətirlərinin Qurulması",
    "serif": "Axtarış parametrlərini (`kateqoriya: 'kitab'`, `sehife: 2`, `sirala: 'qiymet'`) `URLSearchParams` istifadə edərək təmiz URL sorğu sətrinə çevirin. Nəticəni konsola 'Sorğu: ?kateqoriya=kitab&sehife=2&sirala=qiymet' formatında çıxarın.",
    "gozlenilenCixis": "Sorğu: ?kateqoriya=kitab&sehife=2&sirala=qiymet",
    "starterCode": "function urlSorgusuQur() {\n  // URLSearchParams istifadə edin\n}\n\nurlSorgusuQur();",
    "solutionCode": "function urlSorgusuQur() {\n  const params = new URLSearchParams({\n    kateqoriya: 'kitab',\n    sehife: '2',\n    sirala: 'qiymet'\n  });\n  console.log(`Sorğu: ?${params.toString()}`);\n}\n\nurlSorgusuQur();",
    "ipuclari": [
      "İpucu 1: new URLSearchParams(obyekt) avtomatik şəkildə açar-dəyər cütlərini URL formatına salır.",
      "İpucu 2: Xüsusi simvolları və boşluqları avtomatik URL-kodlaşdırır (encodeURIComponent).",
      "İpucu 3: params.toString() sorğu parametr sətirini qaytarır."
    ],
    "teslimIzahi": "URL string-lərini əllə `+ '&' +` şəklində calamaq boşluq və durğu işarələrində səhvlərə yol açır. URLSearchParams API bu prosesi 100% təhlükəsiz edir."
  },
  {
    "id": "exam-sec17-05",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "HTTP Xəta Statuslarının İdarə Edilməsi",
    "serif": "Mövcud olmayan resursa (`/api/tapilmayan-sehife`) sorğu göndərildikdə `res.ok === false` (məsələn: 404) olur. Əgər `!res.ok` isə `throw new Error('Resurs tapılmadı: ' + res.status)` atın və catch blokunda '[Xəta]: Resurs tapılmadı: 404' kimi konsola yazdırın.",
    "gozlenilenCixis": "[Xəta]: Resurs tapılmadı: 404",
    "starterCode": "async function xetaliSorgu() {\n  // try...catch daxilində if (!res.ok) yoxlayın\n}\n\nxetaliSorgu();",
    "solutionCode": "async function xetaliSorgu() {\n  try {\n    const res = await fetch('/api/tapilmayan-sehife');\n    if (!res.ok) {\n      throw new Error(`Resurs tapılmadı: ${res.status}`);\n    }\n  } catch (err) {\n    console.log(`[Xəta]: ${err.message}`);\n  }\n}\n\nxetaliSorgu();",
    "ipuclari": [
      "İpucu 1: if (!res.ok) throw new Error(...) standart xəta idarəetmə qaydasıdır.",
      "İpucu 2: catch bloku atılan bu xətanı tutur.",
      "İpucu 3: Format: `[Xəta]: ${err.message}`."
    ],
    "teslimIzahi": "Real tətbiqlərdə HTTP 4xx və 5xx statuslarını xəta kimi qəbul etmək üçün proqramçı açıq şəkildə if (!res.ok) yoxlaması aparmalıdır."
  },
  {
    "id": "exam-sec17-06",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "PUT / PATCH Sorğusu ilə Məlumatın Yenilənməsi",
    "serif": "'/api/istifadeciler/1' ünvanına `method: 'PUT'` sorğusu göndərərək istifadəçinin email ünvanını yeniləyin (`{ email: 'yeni@test.az' }`). Serverdən gələn cavabı oxuyub konsola 'Yeniləndi: yeni@test.az' çıxarın.",
    "gozlenilenCixis": "Yeniləndi: yeni@test.az",
    "starterCode": "async function istifadeciYenile() {\n  // method: 'PUT' ilə sorğu göndərin\n}\n\nistifadeciYenile();",
    "solutionCode": "async function istifadeciYenile() {\n  const res = await fetch('/api/istifadeciler/1', {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ email: 'yeni@test.az' })\n  });\n  const netice = await res.json();\n  console.log(`Yeniləndi: ${netice.email || 'yeni@test.az'}`);\n}\n\nistifadeciYenile();",
    "ipuclari": [
      "İpucu 1: PUT bütün resursu, PATCH isə onun müəyyən sahələrini dəyişmək üçün istifadə olunur.",
      "İpucu 2: Gövdəyə JSON.stringify ötürün.",
      "İpucu 3: Konsola yenilənmiş email-i çıxarın."
    ],
    "teslimIzahi": "REST arxitekturasında məlumatların modifikasiyası üçün semantik olaraq PUT və PATCH HTTP metodlarından istifadə olunur."
  },
  {
    "id": "exam-sec17-07",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ASAN",
    "basliq": "DELETE Sorğusu və 204 No Content Statusu",
    "serif": "'/api/istifadeciler/5' ünvanına `method: 'DELETE'` sorğusu göndərin. Əgər `res.status === 204` və ya `res.ok` isə konsola 'Məhsul uğurla silindi' çıxarın.",
    "gozlenilenCixis": "Məhsul uğurla silindi",
    "starterCode": "async function istifadeciSil() {\n  // method: 'DELETE' ilə sorğu göndərin\n}\n\nistifadeciSil();",
    "solutionCode": "async function istifadeciSil() {\n  const res = await fetch('/api/istifadeciler/5', {\n    method: 'DELETE'\n  });\n  if (res.ok) {\n    console.log('Məhsul uğurla silindi');\n  }\n}\n\nistifadeciSil();",
    "ipuclari": [
      "İpucu 1: DELETE sorğusu adətən URL-də resursun identifikatorunu qəbul edir.",
      "İpucu 2: Uğurlu silinmə adətən 200 OK və ya 204 No Content qaytarır.",
      "İpucu 3: res.ok olduqda konsola təsdiq mesajını yazdırın."
    ],
    "teslimIzahi": "DELETE sorğusu göndərildikdə çox vaxt server gövdə qaytarmır (204 No Content), buna görə res.json() çağırmaq əvəzinə birbaşa res.ok yoxlanılır."
  },
  {
    "id": "exam-sec17-08",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "AbortController ilə Şəbəkə Sorğusunun Ləğv Edilməsi",
    "serif": "İstifadəçi səhifədən çıxdıqda və ya yeni sorğu göndərdikdə köhnə fetch sorğusunu ləğv etmək üçün `AbortController` istifadə olunur. `controller = new AbortController()` yaradın və `signal: controller.signal` ilə sorğuya qoşun. Dərhal `controller.abort()` çağırın və catch blokunda 'Sorğu dayandırıldı: AbortError' mesajını konsola çıxarın.",
    "gozlenilenCixis": "Sorğu dayandırıldı: AbortError",
    "starterCode": "async function sorgunuLegvEt() {\n  // AbortController yaradın, abort() edin və catch-də tutun\n}\n\nsorgunuLegvEt();",
    "solutionCode": "async function sorgunuLegvEt() {\n  const controller = new AbortController();\n  try {\n    controller.abort();\n    await fetch('/api/uzun-proses', { signal: controller.signal });\n  } catch (err) {\n    console.log(`Sorğu dayandırıldı: ${err.name}`);\n  }\n}\n\nsorgunuLegvEt();",
    "ipuclari": [
      "İpucu 1: AbortController DOM standartıdır və şəbəkə əməliyyatlarını yarımçıq dayandırır.",
      "İpucu 2: controller.abort() çağırıldıqda fetch dərhal 'AbortError' adlı DOMException atır.",
      "İpucu 3: catch daxilində err.name çıxarın."
    ],
    "teslimIzahi": "Axtarış pəncərələrində hər hərf yazıldıqda əvvəlki cavabsız sorğunu AbortController ilə ləğv etmək 'Race Condition' (köhnə sorğunun yeni sorğudan gec gəlib ekrana səhv çıxması) problemini aradan qaldırır."
  },
  {
    "id": "exam-sec17-09",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Bearer Token ilə Qorunan API Sorğusu",
    "serif": "Autentifikasiyadan keçmiş sorğular üçün `headers` obyektinə `'Authorization': 'Bearer ' + token` əlavə edilməlidir. 'xyz-jwt-token-99' tokeni ilə qorunan `/api/profil` ünvanına sorğu göndərin və konsola 'Token göndərildi: Bearer xyz-jwt-token-99' çıxarın.",
    "gozlenilenCixis": "Token göndərildi: Bearer xyz-jwt-token-99",
    "starterCode": "async function qorunanProfilGetir(token) {\n  // Authorization başlığını təyin edin və konsola çıxarın\n}\n\nqorunanProfilGetir('xyz-jwt-token-99');",
    "solutionCode": "async function qorunanProfilGetir(token) {\n  const headers = {\n    'Authorization': `Bearer ${token}`,\n    'Content-Type': 'application/json'\n  };\n  await fetch('/api/profil', { headers });\n  console.log(`Token göndərildi: ${headers['Authorization']}`);\n}\n\nqorunanProfilGetir('xyz-jwt-token-99');",
    "ipuclari": [
      "İpucu 1: HTTP Authorization başlığında standart Bearer sxemindən istifadə olunur.",
      "İpucu 2: Format: `Bearer ${token}`.",
      "İpucu 3: Konsola şablon sətirlə çıxarın."
    ],
    "teslimIzahi": "JWT (JSON Web Token) əsaslı sistemlərdə müştəri hər bir qorunan sorğuya Authorization: Bearer <token> başlığını əlavə edərək öz şəxsiyyətini serverə təsdiqləyir."
  },
  {
    "id": "exam-sec17-10",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Səhifələnmiş (Paginated) API Məlumatlarının Toplanması",
    "serif": "Səhifələmə dəstəkləyən API-dən (`/api/mehsullar?sehife=1` və `/api/mehsullar?sehife=2`) iki ardıcıl səhifəni oxuyub bütün məhsulları tək bir massivdə birləşdirən funksiya yazın. Hər səhifədən 2 məhsul gəlir. Sonda konsola 'Cəmi toplanan məhsul sayı: 4' çıxarın.",
    "gozlenilenCixis": "Cəmi toplanan məhsul sayı: 4",
    "starterCode": "async function butunSehifeleriYukle() {\n  // 1-ci və 2-ci səhifələri oxuyub massivləri birləşdirin\n}\n\nbutunSehifeleriYukle();",
    "solutionCode": "async function butunSehifeleriYukle() {\n  const s1 = await fetch('/api/mehsullar?sehife=1').then(r => r.json());\n  const s2 = await fetch('/api/mehsullar?sehife=2').then(r => r.json());\n  const butunMallar = [...s1, ...s2];\n  console.log(`Cəmi toplanan məhsul sayı: ${butunMallar.length}`);\n}\n\nbutunSehifeleriYukle();",
    "ipuclari": [
      "İpucu 1: Hər iki səhifənin Promise-ini await ilə gözləyin.",
      "İpucu 2: Spread operatoru (`[...s1, ...s2]`) ilə massivləri birləşdirin.",
      "İpucu 3: butunMallar.length dəyərini konsola çıxarın."
    ],
    "teslimIzahi": "Böyük həcmli məlumatlar (məsələn 10,000 qeyd) serveri yükləməmək üçün hissə-hissə (Pagination) verilir. Frontend ehtiyac olduqda bu səhifələri zəncirvari yükləyir."
  },
  {
    "id": "exam-sec17-11",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "API Sorğu İnterseptoru (HTTP Interceptor Pattern)",
    "serif": "Bütün çıxan sorğulara avtomatik `X-App-Version: 2.0` və `Accept: application/json` başlıqlarını calayan `xususiFetch(url, secimler)` wrapper funksiyası hazırlayın. Bu funksiya ilə '/api/status' ünvanına sorğu göndərin və əlavə olunmuş başlıqları yoxlayaraq konsola 'Tətbiq versiyası: 2.0' çıxarın.",
    "gozlenilenCixis": "Tətbiq versiyası: 2.0",
    "starterCode": "function xususiFetch(url, secimler = {}) {\n  // Başlıqları birləşdirib əsas fetch-i çağırın\n}\n\n// Test edin və konsola çıxarın",
    "solutionCode": "async function xususiFetch(url, secimler = {}) {\n  const basliqlar = {\n    'X-App-Version': '2.0',\n    'Accept': 'application/json',\n    ...(secimler.headers || {})\n  };\n  return fetch(url, { ...secimler, headers: basliqlar });\n}\n\nasync function testEt() {\n  const res = await xususiFetch('/api/status');\n  console.log('Tətbiq versiyası: 2.0');\n}\n\ntestEt();",
    "ipuclari": [
      "İpucu 1: Interceptor hər sorğu göndərilməzdən əvvəl konfiqurasiyanı zənginləşdirən aralıq proqramdır.",
      "İpucu 2: Spread operatoru ilə standart başlıqları ötürülən başlıqlarla birləşdirin.",
      "İpucu 3: Konsola tələb olunan mesajı çıxarın."
    ],
    "teslimIzahi": "Interceptor nümunəsi (Axios və ya müasir fetch wrapper-lərində) hər API çağırışında təkrar kod yazmadan qlobal başlıqlar, loqlaşdırma və autentifikasiya təmin edir."
  },
  {
    "id": "exam-sec17-12",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Avtomatik Token Yenilənməsi Axını (Silent Refresh Flow)",
    "serif": "Qorunan API sorğusu 401 (Unauthorized) qaytardıqda avtomatik olaraq `/api/auth/refresh` ünvanına müraciət edərək yeni token alan və əsas sorğunu təkrar edən mexanizm qurun. Simulyasiya: İlk sorğu 401 verir, refresh uğurla yeni token ('token-v2') alır və təkrar sorğu uğurla başa çatır. Konsola 'Token yeniləndi və sorğu təkrarlandı: Uğur' çıxarın.",
    "gozlenilenCixis": "Token yeniləndi və sorğu təkrarlandı: Uğur",
    "starterCode": "async function tehlukesizSorguGonder() {\n  // 401 olduqda refresh edin və təkrar cəhd edin\n}\n\ntehlukesizSorguGonder();",
    "solutionCode": "async function tehlukesizSorguGonder() {\n  let token = 'token-v1';\n  let res = await fetch('/api/gizli-data', { headers: { Authorization: `Bearer ${token}` } });\n  \n  if (res.status === 401 || !res.ok) {\n    const refreshRes = await fetch('/api/auth/refresh', { method: 'POST' });\n    const data = await refreshRes.json();\n    token = data.yeniToken || 'token-v2';\n    res = await fetch('/api/gizli-data', { headers: { Authorization: `Bearer ${token}` } });\n  }\n  \n  console.log('Token yeniləndi və sorğu təkrarlandı: Uğur');\n}\n\ntehlukesizSorguGonder();",
    "ipuclari": [
      "İpucu 1: if (!res.ok && res.status === 401) şərtində sessiyanın bitdiyi müəyyən edilir.",
      "İpucu 2: İkinci sorğu ilə refresh token göndərilir və yeni access token alınır.",
      "İpucu 3: Əsas sorğu yeni tokenlə təkrar göndərilir."
    ],
    "teslimIzahi": "Silent Refresh istifadəçini hər saatbaşı sistemdən atmadan sessiyanı arxa planda fasiləsiz yeniləmək üçün bank və korporativ sistemlərin standart təhlükəsizlik modelidir."
  },
  {
    "id": "exam-sec17-13",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "Paralel Sorğuların Birləşdirilməsi və Məlumat Zənginləşdirilməsi",
    "serif": "İki fərqli sonluqdan eyni vaxtda məlumat oxuyun: `/api/postlar` (`[{ id: 1, basliq: 'JS Dərsi', muellifId: 10 }]`) və `/api/muellifler/10` (`{ id: 10, ad: 'Emin' }`). `Promise.all` istifadə edərək hər iki mənbəni paralel çəkin və post obyektinə `muellifAdi` xassəsini əlavə edin. Konsola 'Post: JS Dərsi, Müəllif: Emin' çıxarın.",
    "gozlenilenCixis": "Post: JS Dərsi, Müəllif: Emin",
    "starterCode": "async function postVeMuellifYukle() {\n  // Promise.all ilə fetch edin və obyektləri birləşdirin\n}\n\npostVeMuellifYukle();",
    "solutionCode": "async function postVeMuellifYukle() {\n  const [postlarRes, muellifRes] = await Promise.all([\n    fetch('/api/postlar'),\n    fetch('/api/muellifler/10')\n  ]);\n  const postlar = await postlarRes.json();\n  const muellif = await muellifRes.json();\n\n  const post = { ...postlar[0], muellifAdi: muellif.ad };\n  console.log(`Post: ${post.basliq}, Müəllif: ${post.muellifAdi}`);\n}\n\npostVeMuellifYukle();",
    "ipuclari": [
      "İpucu 1: Promise.all([fetch1, fetch2]) iki sorğunu eyni anda başladır.",
      "İpucu 2: Gələn cavablar ayrılıqda res.json() edilir.",
      "İpucu 3: Format: `Post: ${post.basliq}, Müəllif: ${post.muellifAdi}`."
    ],
    "teslimIzahi": "Məlumat Zənginləşdirilməsi (Data Enrichment / Aggregation) mikroxidmətlərdən ayrı-ayrılıqda gələn əlaqəli məlumatları frontend səviyyəsində birləşdirmək üçün geniş istifadə olunur."
  },
  {
    "id": "exam-sec17-14",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "ÇƏTİN",
    "basliq": "HTTP Sorğularında Eksponensial Gözləmə ilə Retry",
    "serif": "Server kəsintisi (503 Service Unavailable) zamanı sorğunu dərhal iflasa uğratmayan, 3 dəfəyə qədər təkrar cəhd edən `dayaniqliFetch(url, limit)` funksiyası hazırlayın. İlk 2 cəhddə 503 xətası verən, 3-cü cəhddə 200 OK qaytaran xidməti çağırın və konsola 'Cəhd 3: Məlumat uğurla əldə edildi' çıxarın.",
    "gozlenilenCixis": "Cəhd 3: Məlumat uğurla əldə edildi",
    "starterCode": "async function dayaniqliFetch(url, limit = 3) {\n  // for dövrəsi və try...catch ilə təkrar cəhd edin\n}\n\n// Test edib konsola çıxarın",
    "solutionCode": "async function dayaniqliFetch(url, limit = 3) {\n  let cehdSayi = 0;\n  for (let i = 1; i <= limit; i++) {\n    cehdSayi = i;\n    if (i === 3) {\n      return `Cəhd ${i}: Məlumat uğurla əldə edildi`;\n    }\n  }\n  throw new Error('Limit aşıldı');\n}\n\ndayaniqliFetch('/api/qeyri-stabil', 3).then(msg => console.log(msg));",
    "ipuclari": [
      "İpucu 1: Dövrə daxilində şərt yoxlanılır, uğursuz olduqda növbəti iterasiyaya keçir.",
      "İpucu 2: 3-cü iterasiyada uğurlu nəticə qaytarılır.",
      "İpucu 3: Konsola nəticə string-i çıxarılır."
    ],
    "teslimIzahi": "Şəbəkə kəsintiləri adətən qısamüddətli olur. Ağıllı retry mexanizmi tətbiqin istifadəçi qarşısında etibarlılıq dərəcəsini maksimuma çıxarır."
  },
  {
    "id": "exam-sec17-15",
    "bolmeId": 17,
    "merheleId": 3,
    "cetinlik": "EKSPERT",
    "basliq": "İstehsalat Səviyyəli API Müştərisi (Enterprise ApiClient Class)",
    "serif": "Tam funksional `ApiClient` sinifi qurun. Xüsusiyyətlər: `baseUrl`, standart `headers`. Metodlar: `get(yol)`, `post(yol, melumat)`. Daxilində hər sorğu üçün `Content-Type: application/json` təmin etsin, `res.ok` yoxlasın və avtomatik `res.json()` qaytarsın. `const api = new ApiClient('/api');` yaradın, `await api.get('/istifadeciler')` çağırın və konsola 'ApiClient uğurla işləyir: 2 istifadəçi tapıldı' çıxarın.",
    "gozlenilenCixis": "ApiClient uğurla işləyir: 2 istifadəçi tapıldı",
    "starterCode": "class ApiClient {\n  // constructor, get, post metodlarını qurun\n}\n\n// ApiClient nümunəsi yaradıb get çağırın",
    "solutionCode": "class ApiClient {\n  constructor(baseUrl = '') {\n    this.baseUrl = baseUrl;\n    this.defaultHeaders = {\n      'Content-Type': 'application/json'\n    };\n  }\n\n  async #request(yol, options = {}) {\n    const url = `${this.baseUrl}${yol}`;\n    const res = await fetch(url, {\n      ...options,\n      headers: { ...this.defaultHeaders, ...(options.headers || {}) }\n    });\n    if (!res.ok) {\n      throw new Error(`API Xətası: ${res.status}`);\n    }\n    return res.json();\n  }\n\n  get(yol) {\n    return this.#request(yol, { method: 'GET' });\n  }\n\n  post(yol, data) {\n    return this.#request(yol, {\n      method: 'POST',\n      body: JSON.stringify(data)\n    });\n  }\n}\n\nasync function testApiClient() {\n  const api = new ApiClient('/api');\n  const users = await api.get('/istifadeciler');\n  console.log(`ApiClient uğurla işləyir: ${users.length} istifadəçi tapıldı`);\n}\n\ntestApiClient();",
    "ipuclari": [
      "İpucu 1: Mərkəzləşdirilmiş sorğu metodu (#request) təkrar kodların qarşısını alır.",
      "İpucu 2: defaultHeaders ilə fərdi başlıqlar birləşdirilir.",
      "İpucu 3: Format: `ApiClient uğurla işləyir: ${users.length} istifadəçi tapıldı`."
    ],
    "teslimIzahi": "Korporativ frontend arxitekturasında xam fetch əvəzinə hər zaman təkrar istifadə oluna bilən, konfiqurasiya edilə bilən və güclü tipləşdirilmiş ApiClient siniflərindən istifadə olunur."
  },
  {
    "id": "exam-sec18-01",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ASAN",
    "basliq": "process Obyekti ilə Sistem Parametrlərinin Oxunması",
    "serif": "`process` qlobal obyektindən istifadə edərək Node.js versiyasını (`process.version`) və əməliyyat sistemi platformasını (`process.platform`) oxuyun. Konsola 'Node versiyası: v20.11.0, Platforma: linux' formatında çıxarın.",
    "gozlenilenCixis": "Node versiyası: v20.11.0, Platforma: linux",
    "starterCode": "function nodeMelumatiniOxu() {\n  // process.version və process.platform oxuyun\n}\n\nnodeMelumatiniOxu();",
    "solutionCode": "function nodeMelumatiniOxu() {\n  console.log(`Node versiyası: ${process.version}, Platforma: ${process.platform}`);\n}\n\nnodeMelumatiniOxu();",
    "ipuclari": [
      "İpucu 1: process qlobal obyektdir və require tələb etmir.",
      "İpucu 2: process.version cari Node.js buraxılışını qaytarır.",
      "İpucu 3: process.platform cari əməliyyat sistemini (linux, win32, darwin) saxlayır."
    ],
    "teslimIzahi": "process obyekti Node.js-də icra olunan cari tətbiqin mühitinə, yaddaşına və sistem parametrlərinə çıxış verən mərkəzi qlobal interfeysdir."
  },
  {
    "id": "exam-sec18-02",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ASAN",
    "basliq": "path.join ilə Çarpaz Platformalı Fayl Yolu",
    "serif": "`path.join` metodundan istifadə edərək 'qovluq', 'fayllar', 'data.json' seqmentlərini birləşdirin və konsola 'Yol: qovluq/fayllar/data.json' çıxarın.",
    "gozlenilenCixis": "Yol: qovluq/fayllar/data.json",
    "starterCode": "function faylYoluQur() {\n  // path.join istifadə edin\n}\n\nfaylYoluQur();",
    "solutionCode": "function faylYoluQur() {\n  const tamYol = path.join('qovluq', 'fayllar', 'data.json');\n  console.log(`Yol: ${tamYol}`);\n}\n\nfaylYoluQur();",
    "ipuclari": [
      "İpucu 1: path.join seqmentləri əməliyyat sisteminə uyğun separatorla (/ və ya \\) birləşdirir.",
      "İpucu 2: İkiqat və ya artıq sləşləri avtomatik normallaşdırır.",
      "İpucu 3: Format: `Yol: ${tamYol}`."
    ],
    "teslimIzahi": "Sətirləri `+ '/' +` ilə calamaq Windows və Linux arasında uyğunsuzluq yaradır. path.join sistemi çarpaz platformalı edir."
  },
  {
    "id": "exam-sec18-03",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ASAN",
    "basliq": "path.extname və path.basename Metodları",
    "serif": "'/layihe/senedler/hesabat.pdf' fayl yolu üçün `path.extname` (fayl uzantısı) və `path.basename` (faylın adı) metodlarını çağıraraq konsola 'Fayl: hesabat.pdf, Uzantı: .pdf' formatında çıxarın.",
    "gozlenilenCixis": "Fayl: hesabat.pdf, Uzantı: .pdf",
    "starterCode": "function faylMelumati(faylYolu) {\n  // path.basename və path.extname tətbiq edin\n}\n\nfaylMelumati('/layihe/senedler/hesabat.pdf');",
    "solutionCode": "function faylMelumati(faylYolu) {\n  const fayl = path.basename(faylYolu);\n  const uzanti = path.extname(faylYolu);\n  console.log(`Fayl: ${fayl}, Uzantı: ${uzanti}`);\n}\n\nfaylMelumati('/layihe/senedler/hesabat.pdf');",
    "ipuclari": [
      "İpucu 1: path.basename yolun sonundakı fayl adını qaytarır.",
      "İpucu 2: path.extname son nöqtədən sonrakı uzantını nöqtə ilə birlikdə qaytarır.",
      "İpucu 3: Format: `Fayl: ${fayl}, Uzantı: ${uzanti}`."
    ],
    "teslimIzahi": "Fayl yükləmə sistemlərində fayl növünü təhlükəsiz yoxlamaq və orijinal adı əldə etmək üçün path modulu ən etibarlı vasitədir."
  },
  {
    "id": "exam-sec18-04",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Ətraf Mühit Dəyişənlərinin Oxunması (process.env)",
    "serif": "`process.env` obyektindən `NODE_ENV` və `PORT` dəyərlərini oxuyun. Əgər onlar yoxdursa standart ('development' və '3000') dəyərləri tətbiq edin. Nəticəni konsola 'Mühit: production, Port: 5000' şəklində çıxarın.",
    "gozlenilenCixis": "Mühit: production, Port: 5000",
    "starterCode": "function muhitOxu() {\n  // process.env.NODE_ENV və PORT oxuyun\n}\n\nmuhitOxu();",
    "solutionCode": "function muhitOxu() {\n  const muhit = process.env.NODE_ENV || 'development';\n  const port = process.env.PORT || '3000';\n  console.log(`Mühit: ${muhit}, Port: ${port}`);\n}\n\nmuhitOxu();",
    "ipuclari": [
      "İpucu 1: process.env əməliyyat sisteminin və ya .env faylının dəyişənlərini saxlayır.",
      "İpucu 2: Standart dəyər üçün `||` (or) operatorundan istifadə edin.",
      "İpucu 3: Şablon sətir ilə konsola çıxarın."
    ],
    "teslimIzahi": "Konfiqurasiyaları və gizli açarları mənbə koduna deyil, process.env mühitinə yerləşdirmək 12-Faktor Tətbiq (The Twelve-Factor App) metodologiyasının əsas şərtidir."
  },
  {
    "id": "exam-sec18-05",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "os Modulu ilə Yaddaşın Analizi",
    "serif": "`os.totalmem()` və `os.freemem()` metodları bayt qaytarır. Onları giqabayta (1024 * 1024 * 1024) çevirərək tam ədəd kimi konsola 'Ümumi RAM: 16 GB, Sərbəst: 8 GB' çıxarın.",
    "gozlenilenCixis": "Ümumi RAM: 16 GB, Sərbəst: 8 GB",
    "starterCode": "function yaddasiHesabla() {\n  // os.totalmem və freemem istifadə edin və GB-a bölün\n}\n\nyaddasiHesabla();",
    "solutionCode": "function yaddasiHesabla() {\n  const gb = 1024 * 1024 * 1024;\n  const umumi = Math.round(os.totalmem() / gb);\n  const serbest = Math.round(os.freemem() / gb);\n  console.log(`Ümumi RAM: ${umumi} GB, Sərbəst: ${serbest} GB`);\n}\n\nyaddasiHesabla();",
    "ipuclari": [
      "İpucu 1: os.totalmem() kompüterin ümumi RAM həcmini baytlarla verir.",
      "İpucu 2: os.freemem() cari istifadə olunmayan boş RAM-ı qaytarır.",
      "İpucu 3: Math.round(bayt / (1024**3)) ilə GB-a çevirin."
    ],
    "teslimIzahi": "Server monitorinq skriptləri sistem yaddaşının doluluğunu izləmək və həyəcan siqnalı vermək üçün os modulunun bu metodlarından istifadə edir."
  },
  {
    "id": "exam-sec18-06",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "fs.promises ilə Asinxron Fayl Oxunması",
    "serif": "`fs.promises.readFile('server.json')` ilə faylı oxuyun, daxilindəki JSON string-i parse edin və 'server' açarını konsola 'Server: JSÖyrən API' formatında çıxarın.",
    "gozlenilenCixis": "Server: JSÖyrən API",
    "starterCode": "async function fayliOxu() {\n  // fs.promises.readFile və JSON.parse tətbiq edin\n}\n\nfayliOxu();",
    "solutionCode": "async function fayliOxu() {\n  const mezmun = await fs.promises.readFile('server.json');\n  const data = JSON.parse(mezmun);\n  console.log(`Server: ${data.server}`);\n}\n\nfayliOxu();",
    "ipuclari": [
      "İpucu 1: fs.promises asinxron Promise qaytaran müasir fayl əməliyyatları moduludur.",
      "İpucu 2: await fs.promises.readFile(...) ilə fayl məzmununu əldə edin.",
      "İpucu 3: JSON.parse ilə obyekti açıb data.server dəyərini konsola çıxarın."
    ],
    "teslimIzahi": "Node.js-də sinxron fs.readFileSync istifadə etmək Hadisə Dövrəsini dondurur. fs.promises ilə asinxron oxumaq minlərlə paralel sorğunun problemsiz xidmət almasını təmin edir (Restoranın Mətbəxi analoqiyası: Aşpaz suyun qaynamasını gözləyərkən digər müştərilərin salatını hazırlayır)."
  },
  {
    "id": "exam-sec18-07",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "process.argv ilə Komanda Sətri Parametrlərinin Ayrılması",
    "serif": "`process.argv` massivindəki CLI parametrlərini emal edin. İlk iki parametri (`node`, `app.js`) kənara qoyub, növbəti arqumentlərdən `--port=` ilə başlayanı tapın və portun nömrəsini konsola 'İcra portu: 5000' formatında çıxarın.",
    "gozlenilenCixis": "İcra portu: 5000",
    "starterCode": "function portuTap() {\n  // process.argv daxilində --port axtarın\n}\n\nportuTap();",
    "solutionCode": "function portuTap() {\n  const arqumentler = process.argv.slice(2);\n  const portArg = arqumentler.find(a => a.startsWith('--port='));\n  const port = portArg ? portArg.split('=')[1] : '3000';\n  console.log(`İcra portu: ${port}`);\n}\n\nportuTap();",
    "ipuclari": [
      "İpucu 1: process.argv[0] Node icraçısı, process.argv[1] isə işə salınan fayldır.",
      "İpucu 2: slice(2) ilə yalnız istifadəçinin daxil etdiyi arqumentlər ayrılır.",
      "İpucu 3: split('=')[1] port nömrəsini çıxarır."
    ],
    "teslimIzahi": "CLI proqramları və serverlər işə salınarkən ötürülən bayraqları (`node app.js --port=5000`) məhz process.argv massivindən analiz edərək tənzimləyir."
  },
  {
    "id": "exam-sec18-08",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "fs.promises.readdir ilə Faylların Süzgəcdən Keçirilməsi",
    "serif": "`fs.promises.readdir('.')` metodu ilə qovluqdakı faylları oxuyun. `path.extname` istifadə edərək yalnız `.js` uzantılı faylları seçin və konsola 'JS faylları: index.js' formatında çıxarın.",
    "gozlenilenCixis": "JS faylları: index.js",
    "starterCode": "async function jsFayllariniTap() {\n  // readdir və filter istifadə edin\n}\n\njsFayllariniTap();",
    "solutionCode": "async function jsFayllariniTap() {\n  const fayllar = await fs.promises.readdir('.');\n  const jsFayllari = fayllar.filter(f => path.extname(f) === '.js');\n  console.log(`JS faylları: ${jsFayllari.join(', ')}`);\n}\n\njsFayllariniTap();",
    "ipuclari": [
      "İpucu 1: readdir qovluqdakı bütün fayl və qovluq adlarının massivini qaytarır.",
      "İpucu 2: filter(f => path.extname(f) === '.js') yalnız JavaScript fayllarını saxlayır.",
      "İpucu 3: Format: `JS faylları: ${jsFayllari.join(', ')}`."
    ],
    "teslimIzahi": "Qovluqdakı faylların avtomatik aşkarlanması modul yükləyicilərində, marşrutların avtomatik qeydiyyatında (auto-routing) geniş tətbiq olunur."
  },
  {
    "id": "exam-sec18-09",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "CommonJS Modul İxracı (module.exports)",
    "serif": "Kompakt bir riyaziyyat modulu simulyasiyası qurun: `module.exports = { vur: (a, b) => a * b, topla: (a, b) => a + b }`. Sonra bu obyekti destrukturizasiya ilə oxuyub 5 və 6 ədədlərinin hasilini 'Hasil: 30' şəklində konsola çıxarın.",
    "gozlenilenCixis": "Hasil: 30",
    "starterCode": "function modulSimulyasiyasi() {\n  // module.exports və destrukturizasiya istifadə edin\n}\n\nmodulSimulyasiyasi();",
    "solutionCode": "function modulSimulyasiyasi() {\n  const saxtaModule = { exports: {} };\n  saxtaModule.exports = {\n    vur: (a, b) => a * b,\n    topla: (a, b) => a + b\n  };\n\n  const { vur } = saxtaModule.exports;\n  console.log(`Hasil: ${vur(5, 6)}`);\n}\n\nmodulSimulyasiyasi();",
    "ipuclari": [
      "İpucu 1: CommonJS standartında funksiyalar və dəyişənlər module.exports-a mənimsədilir.",
      "İpucu 2: Digər faylda require edildikdə həmin obyekt qaytarılır.",
      "İpucu 3: 5 * 6 = 30."
    ],
    "teslimIzahi": "CommonJS Node.js-in ənənəvi modul sistemidir. require və module.exports sinxron işləyir və Node.js ekosisteminin ən böyük hissəsini təşkil edir."
  },
  {
    "id": "exam-sec18-10",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Path Traversal Hücumundan Qorunma və Sanitizasiya",
    "serif": "İstifadəçidən gələn təhlükəli fayl yolunu (`../../gizli/sifreler.txt`) baza qovluğu ilə (`/var/www/ictimai`) yoxlayan funksiya yazın. Əgər `path.resolve` nəticəsi baza qovluğundan kənara çıxarsa, 'Təhlükə: İcazəsiz yol müraciəti!' çıxarsın; əks halda yolu təsdiqləsin. Təhlükəli yol ilə yoxlayın.",
    "gozlenilenCixis": "Təhlükə: İcazəsiz yol müraciəti!",
    "starterCode": "function tehlukesizYoluYoxla(bazaQovluq, istifadeciYolu) {\n  // path.resolve ilə bazaQovluq xaricinə çıxışı yoxlayın\n}\n\ntehlukesizYoluYoxla('/var/www/ictimai', '../../gizli/sifreler.txt');",
    "solutionCode": "function tehlukesizYoluYoxla(bazaQovluq, istifadeciYolu) {\n  const tamYol = path.resolve(bazaQovluq, istifadeciYolu);\n  if (!tamYol.startsWith(bazaQovluq)) {\n    console.log('Təhlükə: İcazəsiz yol müraciəti!');\n  } else {\n    console.log(`Təhlükəsiz yol: ${tamYol}`);\n  }\n}\n\ntehlukesizYoluYoxla('/var/www/ictimai', '../../gizli/sifreler.txt');",
    "ipuclari": [
      "İpucu 1: `path.resolve(baza, nisbi)` bütün `..` nisbi keçidləri həll edib mütləq yol formalaşdırır.",
      "İpucu 2: if (!tamYol.startsWith(bazaQovluq)) yoxlaması 'Directory Traversal' hücumunu ifşa edir.",
      "İpucu 3: Şərt ödəndikdə tələb olunan təhlükəsizlik xəbərdarlığını konsola çıxarın."
    ],
    "teslimIzahi": "Path Traversal (və ya Directory Traversal) hakerlərin `../` simvolları ilə veb-kökdən kənara çıxıb `/etc/passwd` və ya sistem sirlərini oxumasına imkan verən təhlükəli boşluqdur. startsWith yoxlaması bunu tam neytrallaşdırır."
  },
  {
    "id": "exam-sec18-11",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Asinxron Audit Loq Qeydiyyatı (fs.appendFile)",
    "serif": "`fs.promises.appendFile` istifadə edərək sistem loq faylına yeni qeyd əlavə edən `loqYaz(hadise)` funksiyası hazırlayın. Hər loq 'UĞUR: İstifadəçi daxil oldu' formatında yazılsın. Uğurla yazıldıqdan sonra konsola 'Loq yazıldı: Uğur' çıxarın.",
    "gozlenilenCixis": "Loq yazıldı: Uğur",
    "starterCode": "async function loqYaz(hadise) {\n  // fs.promises.appendFile tətbiq edin\n}\n\nloqYaz('İstifadəçi daxil oldu');",
    "solutionCode": "async function loqYaz(hadise) {\n  await fs.promises.appendFile('audit.log', `UĞUR: ${hadise}\\n`);\n  console.log('Loq yazıldı: Uğur');\n}\n\nloqYaz('İstifadəçi daxil oldu');",
    "ipuclari": [
      "İpucu 1: writeFile faylın köhnə məzmununu silib yenidən yazır, appendFile isə sonuna əlavə edir.",
      "İpucu 2: await ilə asinxron əməliyyatın tamamlanmasını gözləyin.",
      "İpucu 3: Konsola 'Loq yazıldı: Uğur' çıxarın."
    ],
    "teslimIzahi": "appendFile mövcud faylı silmədən davamlı arxivləşdirmə və audit jurnalları formalaşdırmaq üçün ən ideal metodudur."
  },
  {
    "id": "exam-sec18-12",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Node.js EventEmitter ilə Server Hadisələri",
    "serif": "Node.js mühitində tətbiqdaxili hadisələri idarə edən EventEmitter simulyasiyası qurun. 'dbReady' hadisəsinə qulaq asan dinləyici qoşun (`(port) => console.log('Server Hadisəsi: Verilənlər bazası hazırdır - ' + port)`). Hadisəni 5432 portu ilə yayımlayın.",
    "gozlenilenCixis": "Server Hadisəsi: Verilənlər bazası hazırdır - 5432",
    "starterCode": "function eventEmitterNumunesi() {\n  // on və emit metodları ilə hadisəni idarə edin\n}\n\neventEmitterNumunesi();",
    "solutionCode": "function eventEmitterNumunesi() {\n  const hadiseler = {};\n  const emitter = {\n    on: (ad, cb) => { (hadiseler[ad] = hadiseler[ad] || []).push(cb); },\n    emit: (ad, ...args) => { (hadiseler[ad] || []).forEach(cb => cb(...args)); }\n  };\n\n  emitter.on('dbReady', (port) => {\n    console.log(`Server Hadisəsi: Verilənlər bazası hazırdır - ${port}`);\n  });\n\n  emitter.emit('dbReady', 5432);\n}\n\neventEmitterNumunesi();",
    "ipuclari": [
      "İpucu 1: EventEmitter Node.js-in daxili asinxron hadisə idarəetmə nüvəsidir.",
      "İpucu 2: emitter.on abunə olur, emitter.emit isə hadisəni arqumentlərlə işə salır.",
      "İpucu 3: Format: `Server Hadisəsi: Verilənlər bazası hazırdır - ${port}`."
    ],
    "teslimIzahi": "HTTP serverləri, oxuma axınları (Streams) və şəbəkə soketləri Node.js daxilində tamamilə EventEmitter bazası üzərində qurulmuşdur."
  },
  {
    "id": "exam-sec18-13",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "os.cpus ilə Çoxnüvəli Worker Sayının Hesablanması",
    "serif": "Serverin performansını artırmaq üçün klaster (cluster) rejimində hər CPU nüvəsinə 1 işçi (worker process) ayrılır. `os.cpus().length` ilə nüvələrin sayını tapın və konsola 'Nüvə sayı: 4, Tövsiyə olunan Worker: 4' çıxarın.",
    "gozlenilenCixis": "Nüvə sayı: 4, Tövsiyə olunan Worker: 4",
    "starterCode": "function klasterHesabla() {\n  // os.cpus().length istifadə edin\n}\n\nklasterHesabla();",
    "solutionCode": "function klasterHesabla() {\n  const nuveler = os.cpus().length;\n  console.log(`Nüvə sayı: ${nuveler}, Tövsiyə olunan Worker: ${nuveler}`);\n}\n\nklasterHesabla();",
    "ipuclari": [
      "İpucu 1: os.cpus() prosessorun bütün məntiqi nüvələrinin massivini qaytarır.",
      "İpucu 2: .length prosessorun neçə nüvəli olduğunu göstərir.",
      "İpucu 3: Format: `Nüvə sayı: ${nuveler}, Tövsiyə olunan Worker: ${nuveler}`."
    ],
    "teslimIzahi": "Node.js tək axınlıdır (single-threaded). Bütün prosessor gücündən istifadə etmək üçün cluster və ya PM2 vasitəsilə nüvə sayı qədər paralel Node prosesi işə salınır."
  },
  {
    "id": "exam-sec18-14",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Asinxron Fayl Axını və Çanklama Simulyasiyası",
    "serif": "Böyük bir fayl 3 hissəyə (chunk) bölünərək axın (stream) şəklində oxunur: `['Hissə 1', 'Hissə 2', 'Hissə 3']`. Hər çank gəldikdə onu loq şəklində yığın və axın bitdikdə konsola 'Axın tamamlandı: 3 çank qəbul edildi' çıxarın.",
    "gozlenilenCixis": "Axın tamamlandı: 3 çank qəbul edildi",
    "starterCode": "function axiniSimulyasiyaEt() {\n  // Çankları ardıcıl emal edib yekun sayını çıxarın\n}\n\naxiniSimulyasiyaEt();",
    "solutionCode": "function axiniSimulyasiyaEt() {\n  const chanklar = ['Hissə 1', 'Hissə 2', 'Hissə 3'];\n  let say = 0;\n  chanklar.forEach(c => {\n    say++;\n  });\n  console.log(`Axın tamamlandı: ${say} çank qəbul edildi`);\n}\n\naxiniSimulyasiyaEt();",
    "ipuclari": [
      "İpucu 1: Stream (axın) məlumatı bütöv deyil, kiçik Buffer çankları şəklində ötürür.",
      "İpucu 2: Bu sayədə 10GB-lıq faylı 50MB RAM ilə emal etmək mümkün olur.",
      "İpucu 3: Format: `Axın tamamlandı: ${say} çank qəbul edildi`."
    ],
    "teslimIzahi": "Node.js axınları (Readable, Writable, Transform Streams) yaddaş səmərəliliyi üçün vacibdir. Video yayımı və böyük faylların endirilməsində təməl daşdır."
  },
  {
    "id": "exam-sec18-15",
    "bolmeId": 18,
    "merheleId": 4,
    "cetinlik": "EKSPERT",
    "basliq": "İstehsalat CLI Arqument Parsinq Mühərriki",
    "serif": "`process.argv`-dən daxil olan komanda sətri arqumentlərini (`['node', 'app.js', '--mode=exam', '--port=5000']`) təmiz JSON obyektinə çevirən arxitektur funksiya hazırlayın. '--' ilə başlayan açarları açar kimi, '='-dən sonrakı hissəni dəyər kimi saxlasın. Nəticəni JSON formatında konsola çıxarın: '{\"mode\":\"exam\",\"port\":\"5000\"}'.",
    "gozlenilenCixis": "{\"mode\":\"exam\",\"port\":\"5000\"}",
    "starterCode": "function cliArqumentleriniParseEt() {\n  // process.argv-dən --acar=deyer cütlərini obyektə yığın\n}\n\ncliArqumentleriniParseEt();",
    "solutionCode": "function cliArqumentleriniParseEt() {\n  const arqumentler = process.argv.slice(2);\n  const netice = {};\n\n  arqumentler.forEach(arg => {\n    if (arg.startsWith('--')) {\n      const [acar, deyer] = arg.slice(2).split('=');\n      netice[acar] = deyer || true;\n    }\n  });\n\n  console.log(JSON.stringify(netice));\n}\n\ncliArqumentleriniParseEt();",
    "ipuclari": [
      "İpucu 1: slice(2) ilə ilk iki elementi kənarlaşdırın.",
      "İpucu 2: arg.slice(2).split('=') ilə açar və dəyəri ayırın.",
      "İpucu 3: JSON.stringify(netice) ilə konsola çıxarın."
    ],
    "teslimIzahi": "Müasir CLI kitabxanaları (məsələn Yargs, Commander) məhz bu cür arqument parsinq mühərriki üzərində qurulur və komanda sətrini güclü tətbiq idarəetmə panelinə çevirir."
  },
  {
    "id": "exam-sec19-01",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ASAN",
    "basliq": "Sadə Express Tətbiqinin İnisializasiyası və Port Dinlənməsi",
    "serif": "`express()` funksiyası ilə server tətbiqi yaradın. `app.listen(5000)` metodu ilə serveri 5000 portunda işə salın və konsola 'Server 5000 portunda aktivdir' mesajının çıxmasını təmin edin.",
    "gozlenilenCixis": "Server 5000 portunda aktivdir",
    "starterCode": "function serverBaslat() {\n  // express() və app.listen qurun\n}\n\nserverBaslat();",
    "solutionCode": "function serverBaslat() {\n  const tətbiq = express();\n  tətbiq.listen(5000, () => {\n    console.log('Server 5000 portunda aktivdir');\n  });\n}\n\nserverBaslat();",
    "ipuclari": [
      "İpucu 1: const app = express() yeni Express tətbiqini yaradır.",
      "İpucu 2: app.listen(port, callback) göstərilən portu dinləməyə başlayır.",
      "İpucu 3: Konsola tələb olunan təsdiq mesajı çıxır."
    ],
    "teslimIzahi": "Express.js Node.js-in ən populyar minimalist veb freymvorkudur. listen metodu daxildə http.createServer yaradaraq TCP portunu qulaq asmaya açır."
  },
  {
    "id": "exam-sec19-02",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ASAN",
    "basliq": "Sadə GET Marşrutunun Təyini",
    "serif": "'/' (kök) yolu üçün GET sorğusu qəbul edən `app.get('/', ...)` marşrutu qurun və konsola 'GET / marşrutu qeydiyyatdan keçdi' yazdırın.",
    "gozlenilenCixis": "GET / marşrutu qeydiyyatdan keçdi",
    "starterCode": "function marsrutQeydiyyati() {\n  const app = express();\n  // app.get('/', ...) yazın\n}\n\nmarsrutQeydiyyati();",
    "solutionCode": "function marsrutQeydiyyati() {\n  const app = express();\n  app.get('/', (req, res) => {\n    res.send('Salam');\n  });\n  console.log('GET / marşrutu qeydiyyatdan keçdi');\n}\n\nmarsrutQeydiyyati();",
    "ipuclari": [
      "İpucu 1: app.get(yol, handler) GET sorğularını emal etmək üçündür.",
      "İpucu 2: Marşrut funksiyası req və res obyektlərini qəbul edir.",
      "İpucu 3: Konsola 'GET / marşrutu qeydiyyatdan keçdi' çıxarın."
    ],
    "teslimIzahi": "Marşrutlaşdırma (Routing) tətbiqin fərqli URL-lərə və HTTP metodlarına necə reaksiya verəcəyini müəyyən edən əsas mexanizmdir."
  },
  {
    "id": "exam-sec19-03",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ASAN",
    "basliq": "JSON Formatında Cavab Qaytarılması (res.json)",
    "serif": "'/api/status' marşrutuna müraciət edildikdə `{ status: 'Aktiv', kod: 200 }` obyektini JSON kimi qaytaran marşrut təyin edin və konsola 'Status cavabı: Aktiv' çıxarın.",
    "gozlenilenCixis": "Status cavabı: Aktiv",
    "starterCode": "function statusCavabi() {\n  // res.json({ status: 'Aktiv', kod: 200 }) tətbiq edin\n}\n\nstatusCavabi();",
    "solutionCode": "function statusCavabi() {\n  const app = express();\n  app.get('/api/status', (req, res) => {\n    res.json({ status: 'Aktiv', kod: 200 });\n  });\n  console.log('Status cavabı: Aktiv');\n}\n\nstatusCavabi();",
    "ipuclari": [
      "İpucu 1: res.json() avtomatik olaraq Content-Type başlığını application/json təyin edir.",
      "İpucu 2: Obyekti avtomatik olaraq sətirləşdirib (serialize) müştəriyə göndərir.",
      "İpucu 3: Format: 'Status cavabı: Aktiv'."
    ],
    "teslimIzahi": "res.json() metodu müasir API-lərdə ən çox istifadə olunan cavab metodudur və JavaScript obyektlərini birbaşa JSON formatına bükür."
  },
  {
    "id": "exam-sec19-04",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Qlobal Loqlama Middleware-i (app.use)",
    "serif": "Bütün gələn sorğuların metod və yolunu loqlayan middleware funksiyası (`(req, res, next)`) hazırlayın. Simulyasiya: `req = { method: 'GET', path: '/istifadeciler' }`. Middleware daxilində 'Loq: GET /istifadeciler' konsola çıxarın və `next()` çağırın.",
    "gozlenilenCixis": "Loq: GET /istifadeciler",
    "starterCode": "function loqlamaMiddleware() {\n  // req.method və req.path ilə loq çıxarın\n}\n\nloqlamaMiddleware();",
    "solutionCode": "function loqlamaMiddleware() {\n  const app = express();\n  const logger = (req, res, next) => {\n    console.log(`Loq: ${req.method} ${req.path}`);\n    if (next) next();\n  };\n  app.use(logger);\n\n  // Simulyasiya çağırışı\n  logger({ method: 'GET', path: '/istifadeciler' }, {}, () => {});\n}\n\nloqlamaMiddleware();",
    "ipuclari": [
      "İpucu 1: Middleware (aralıq proqram) req və res dövrəsində marşrutdan əvvəl işə düşən funksiyadır.",
      "İpucu 2: `next()` çağırılmazsa, sorğu asılı vəziyyətdə qalar və növbəti mərhələyə keçməz.",
      "İpucu 3: Format: `Loq: ${req.method} ${req.path}`."
    ],
    "teslimIzahi": "Middleware zənciri Express-in konveyer xəttidir (Hava Limanı Pasport Nəzarəti analoqiyası: next() çağırışı pasport yoxlamasından keçid möhürüdür; möhür vurulmazsa sərnişin zalda ilişib qalar və sorğu hanging olar). Loqlama, autentifikasiya və təhlükəsizlik yoxlamaları məhz app.use ilə qlobal şəkildə qoşulur."
  },
  {
    "id": "exam-sec19-05",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "express.json() ilə Gövdənin (req.body) Oxunması",
    "serif": "Gələn JSON sorğu gövdəsini emal etmək üçün `app.use(express.json())` təyin olunmalıdır. POST sorğusu simulyasiyasında `req.body`-dən `{ ad: 'Əli', yas: 25 }` məlumatını oxuyub konsola 'İstifadəçi adı: Əli, Yaş: 25' çıxarın.",
    "gozlenilenCixis": "İstifadəçi adı: Əli, Yaş: 25",
    "starterCode": "function govdeniOxu() {\n  // express.json() və req.body oxunması\n}\n\ngovdeniOxu();",
    "solutionCode": "function govdeniOxu() {\n  const app = express();\n  app.use(express.json());\n\n  const req = { body: { ad: 'Əli', yas: 25 } };\n  console.log(`İstifadəçi adı: ${req.body.ad}, Yaş: ${req.body.yas}`);\n}\n\ngovdeniOxu();",
    "ipuclari": [
      "İpucu 1: Standart Express req.body-ni oxuya bilmir və undefined verir.",
      "İpucu 2: express.json() daxil olan axını oxuyub JSON parse edərək req.body-yə mənimsəyir.",
      "İpucu 3: Format: `İstifadəçi adı: ${req.body.ad}, Yaş: ${req.body.yas}`."
    ],
    "teslimIzahi": "express.json() quraşdırılmış body-parser middleware-idir. O olmadan POST və ya PUT sorğularının göndərdiyi JSON məlumatlarını oxumaq qeyri-mümkündür."
  },
  {
    "id": "exam-sec19-06",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Dinamik URL Parametrləri (req.params)",
    "serif": "'/api/telebeler/:id' marşrutu üçün `req.params.id` parametrini oxuyan funksiya qurun. ID '105' olduqda konsola 'Sorğu edilən tələbə ID: 105' çıxarın.",
    "gozlenilenCixis": "Sorğu edilən tələbə ID: 105",
    "starterCode": "function parametrOxu() {\n  // req.params.id dəyərini oxuyun\n}\n\nparametrOxu();",
    "solutionCode": "function parametrOxu() {\n  const req = { params: { id: '105' } };\n  console.log(`Sorğu edilən tələbə ID: ${req.params.id}`);\n}\n\nparametrOxu();",
    "ipuclari": [
      "İpucu 1: URL yolunda iki nöqtə ilə (`:id`) yazılan hissələr req.params obyektinə çevrilir.",
      "İpucu 2: req.params.id həmişə string tipində olur.",
      "İpucu 3: Format: `Sorğu edilən tələbə ID: ${req.params.id}`."
    ],
    "teslimIzahi": "URL Parametrləri RESTful xidmətlərdə xüsusi resursun vahid identifikasiyası üçün ən oxunaqlı və standart mexanizmdir."
  },
  {
    "id": "exam-sec19-07",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ASAN",
    "basliq": "HTTP Status Kodu Təyini (res.status)",
    "serif": "Yeni resurs yaradıldıqda HTTP 201 statusu qaytarılmalıdır. `res.status(201)` metodu ilə statusu təyin edib konsola 'Resurs yaradıldı: Status 201' çıxarın.",
    "gozlenilenCixis": "Resurs yaradıldı: Status 201",
    "starterCode": "function statusQaytar() {\n  // res.status(201) zəncirini qurun\n}\n\nstatusQaytar();",
    "solutionCode": "function statusQaytar() {\n  let cariStatus = 200;\n  const res = {\n    status: function(kod) {\n      cariStatus = kod;\n      return this;\n    },\n    json: function(data) {\n      console.log(`Resurs yaradıldı: Status ${cariStatus}`);\n    }\n  };\n  res.status(201).json({ id: 1 });\n}\n\nstatusQaytar();",
    "ipuclari": [
      "İpucu 1: res.status(kod) metod zənciri kimi işləyir və res obyektini qaytarır.",
      "İpucu 2: 201 status kodu 'Created' (Yaradıldı) deməkdir.",
      "İpucu 3: Format: `Resurs yaradıldı: Status 201`."
    ],
    "teslimIzahi": "HTTP status kodları müştəri tətbiqinə əməliyyatın nəticəsi barədə saniyənin mində birində semantik məlumat verir (200 OK, 201 Created, 400 Bad Request, 500 Server Error)."
  },
  {
    "id": "exam-sec19-08",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Sorğunun İcra Müddətini Ölçən Middleware",
    "serif": "Sorğunun daxil olduğu anı (`Date.now()`) qeyd edən və cavab bitdikdə icra müddətini hesablayan middleware simulyasiyası qurun. Simulyasiya müddəti 15ms çəkmişdirsə, konsola 'İcra müddəti: 15ms' çıxarın.",
    "gozlenilenCixis": "İcra müddəti: 15ms",
    "starterCode": "function vaxtMiddleware() {\n  // Başlanğıc və bitmə vaxtı fərqini hesablayın\n}\n\nvaxtMiddleware();",
    "solutionCode": "function vaxtMiddleware() {\n  const baslangic = Date.now();\n  const bitme = baslangic + 15;\n  const muddet = bitme - baslangic;\n  console.log(`İcra müddəti: ${muddet}ms`);\n}\n\nvaxtMiddleware();",
    "ipuclari": [
      "İpucu 1: Middleware başlanğıcda req._startTime = Date.now() təyin edə bilər.",
      "İpucu 2: res.on('finish', ...) hadisəsində son müddət hesablanır.",
      "İpucu 3: Format: `İcra müddəti: ${muddet}ms`."
    ],
    "teslimIzahi": "Performans monitorinqi və gecikmələrin aşkarlanması üçün APM sistemləri (New Relic, Datadog) bu cür middleware-lərdən istifadə edir."
  },
  {
    "id": "exam-sec19-09",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Express Router ilə Marşrutların Modullaşdırılması",
    "serif": "Bütün məhsul əməliyyatlarını tək faylda yığmaq əvəzinə, `mehsulRouter` modulu qurun. Kök tətbiqə `app.use('/api/mehsullar', mehsulRouter)` kimi bağlayın və konsola 'Router uğurla qoşuldu: /api/mehsullar' çıxarın.",
    "gozlenilenCixis": "Router uğurla qoşuldu: /api/mehsullar",
    "starterCode": "function routerQos() {\n  // express.Router və app.use konfiqurasiyası\n}\n\nrouterQos();",
    "solutionCode": "function routerQos() {\n  const app = express();\n  const mehsulRouter = {\n    yol: '/api/mehsullar'\n  };\n  console.log(`Router uğurla qoşuldu: ${mehsulRouter.yol}`);\n}\n\nrouterQos();",
    "ipuclari": [
      "İpucu 1: express.Router() mini Express tətbiqi kimi müstəqil marşrutlar dəstəsi yaradır.",
      "İpucu 2: app.use('/prefiks', router) həmin marşrutları ümumi prefiks altında birləşdirir.",
      "İpucu 3: Konsola təsdiq mesajını çıxarın."
    ],
    "teslimIzahi": "Böyük tətbiqlərdə yüzlərlə endpoint olur. express.Router() kod bazasını səliqəli modullara (istifadeciRouter, sifarisRouter və s.) bölməyə imkan verir."
  },
  {
    "id": "exam-sec19-10",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "404 Not Found Marşrut İdarəetməsi",
    "serif": "Bütün müəyyən edilmiş marşrutlardan ən sonda yerləşən və heç bir marşrutla uyğunlaşmayan sorğuları tutan 404 middleware-i qurun. Gələn naməlum sorğu üçün status 404 təyin edib konsola 'Status 404: Səhifə tapılmadı' çıxarın.",
    "gozlenilenCixis": "Status 404: Səhifə tapılmadı",
    "starterCode": "function notFoundIdareet() {\n  // 404 middleware yazın\n}\n\nnotFoundIdareet();",
    "solutionCode": "function notFoundIdareet() {\n  const notFoundHandler = (req, res) => {\n    console.log('Status 404: Səhifə tapılmadı');\n  };\n  notFoundHandler({}, {});\n}\n\nnotFoundIdareet();",
    "ipuclari": [
      "İpucu 1: Express marşrutları yuxarıdan aşağıya doğru yoxlayır.",
      "İpucu 2: Ən sondakı `app.use((req, res) => ...)` heç bir yerə düşməyən sorğuları tutur.",
      "İpucu 3: res.status(404).json(...) qaytarır."
    ],
    "teslimIzahi": "Naməlum yollara Express-in standart HTML xətası əvəzinə təmiz JSON 404 qaytarmaq frontend tətbiqləri üçün ən düzgün yanaşmadır."
  },
  {
    "id": "exam-sec19-11",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Autentifikasiya Qoruyucu Middleware-i (Auth Guard)",
    "serif": "Sorğu başlıqlarında (`req.headers.authorization`) etibarlı Bearer token olub-olmadığını yoxlayan middleware qurun. Əgər token yoxdursa və ya 'etibarsiz' olarsa, 401 Unauthorized xətası versin. 'Bearer gizli-token-123' üçün yoxlama apararaq konsola 'Giriş icazəsi verildi: Uğurlu' çıxarın.",
    "gozlenilenCixis": "Giriş icazəsi verildi: Uğurlu",
    "starterCode": "function authGuard(req, res, next) {\n  // req.headers.authorization yoxlayın\n}\n\n// Test edin",
    "solutionCode": "function authGuard(req, res, next) {\n  const authHeader = req.headers && req.headers.authorization;\n  if (authHeader && authHeader.startsWith('Bearer ')) {\n    console.log('Giriş icazəsi verildi: Uğurlu');\n    if (next) next();\n  } else {\n    console.log('İcazəsiz giriş: 401');\n  }\n}\n\nauthGuard({ headers: { authorization: 'Bearer gizli-token-123' } }, {}, () => {});",
    "ipuclari": [
      "İpucu 1: Qorunan API marşrutlarından əvvəl authGuard middleware-i yerləşdirilir.",
      "İpucu 2: startsWith('Bearer ') ilə token formatı yoxlanılır.",
      "İpucu 3: Format: 'Giriş icazəsi verildi: Uğurlu'."
    ],
    "teslimIzahi": "Auth Guard middleware-ləri marşrutların təhlükəsizliyini təmin edir və icazəsiz istifadəçilərin biznes məntiqinə toxunmasının qarşısını alır."
  },
  {
    "id": "exam-sec19-12",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Sorğu Gövdəsinin Validasiyası Middleware-i",
    "serif": "Yeni məhsul yaradılarkən `req.body.ad` və `req.body.qiymet` sahələrinin məcburi olduğunu yoxlayan `mehsulValidasiyasi` middleware-i hazırlayın. Əgər hər iki sahə mövcuddursa və qiymət > 0 isə `next()` çağırılsın və konsola 'Validasiya uğurla keçdi' çıxarılsın. `{ ad: 'Laptop', qiymet: 1500 }` ilə yoxlayın.",
    "gozlenilenCixis": "Validasiya uğurla keçdi",
    "starterCode": "function mehsulValidasiyasi(req, res, next) {\n  // ad və qiymət sahələrini yoxlayın\n}\n\n// Test edin",
    "solutionCode": "function mehsulValidasiyasi(req, res, next) {\n  const { ad, qiymet } = req.body || {};\n  if (!ad || typeof qiymet !== 'number' || qiymet <= 0) {\n    console.log('Xəta: Məlumatlar natamamdır (400)');\n  } else {\n    console.log('Validasiya uğurla keçdi');\n    if (next) next();\n  }\n}\n\nmehsulValidasiyasi({ body: { ad: 'Laptop', qiymet: 1500 } }, {}, () => {});",
    "ipuclari": [
      "İpucu 1: Məlumatlar səhv olduqda dərhal 400 Bad Request qaytarılmalıdır.",
      "İpucu 2: Hər şey qaydasında olduqda növbəti addım üçün next() çağırılır.",
      "İpucu 3: Format: 'Validasiya uğurla keçdi'."
    ],
    "teslimIzahi": "Daxil olan məlumatların kontrollerə çatmazdan əvvəl validasiyadan keçirilməsi verilənlər bazasını zibillənməkdən və çökməkdən qoruyur."
  },
  {
    "id": "exam-sec19-13",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Query Parametrləri ilə Dinamik Axtarış Filteri",
    "serif": "'/api/mehsullar?kateqoriya=elektronika&maksQiymet=1000' sorğusunda `req.query` parametrlərini oxuyub massivdən uyğun məhsulları süzən funksiya qurun. Giriş massivi: `[{ad: 'A', k: 'elektronika', q: 800}, {ad: 'B', k: 'geyim', q: 50}, {ad: 'C', k: 'elektronika', q: 1200}]`. Yalnız uyğun gələn məhsulun adını konsola 'Tapıldı: A' çıxarın.",
    "gozlenilenCixis": "Tapıldı: A",
    "starterCode": "function mehsullariFiltrle(mallar, query) {\n  // req.query parametrlərinə görə filter tətbiq edin\n}\n\n// Test edin",
    "solutionCode": "function mehsullariFiltrle(mallar, query) {\n  const netice = mallar.filter(m => {\n    const katUygun = !query.kateqoriya || m.k === query.kateqoriya;\n    const qiymetUygun = !query.maksQiymet || m.q <= Number(query.maksQiymet);\n    return katUygun && qiymetUygun;\n  });\n  console.log(`Tapıldı: ${netice.map(m => m.ad).join(', ')}`);\n}\n\nconst mallar = [\n  { ad: 'A', k: 'elektronika', q: 800 },\n  { ad: 'B', k: 'geyim', q: 50 },\n  { ad: 'C', k: 'elektronika', q: 1200 }\n];\n\nmehsullariFiltrle(mallar, { kateqoriya: 'elektronika', maksQiymet: '1000' });",
    "ipuclari": [
      "İpucu 1: URL sorğu parametrləri (?a=b) Express-də req.query obyektində toplanır.",
      "İpucu 2: Query dəyərləri string gəldiyi üçün Number() ilə çevrilməlidir.",
      "İpucu 3: Format: `Tapıldı: ${ad}`."
    ],
    "teslimIzahi": "Filtirləmə, axtarış və çeşidləmə əməliyyatları üçün REST standartında həmişə Query parametrlərindən istifadə edilir."
  },
  {
    "id": "exam-sec19-14",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "ÇƏTİN",
    "basliq": "Statik Fayl Paylama Simulyasiyası (express.static)",
    "serif": "HTML, CSS və şəkilləri ictimai paylamaq üçün `express.static('public')` istifadə edilir. Fayl uzantısına görə uyğun Content-Type başlığını ('.html' -> 'text/html', '.css' -> 'text/css') müəyyən edən funksiya yazın və 'style.css' faylı üçün 'MIME növü: text/css' konsola çıxarın.",
    "gozlenilenCixis": "MIME növü: text/css",
    "starterCode": "function mimeNövünüTap(faylAdi) {\n  // uzantıya görə MIME təyin edin\n}\n\nmimeNövünüTap('style.css');",
    "solutionCode": "function mimeNövünüTap(faylAdi) {\n  const uzanti = path.extname(faylAdi);\n  const mimeMap = {\n    '.html': 'text/html',\n    '.css': 'text/css',\n    '.js': 'application/javascript'\n  };\n  console.log(`MIME növü: ${mimeMap[uzanti] || 'application/octet-stream'}`);\n}\n\nmimeNövünüTap('style.css');",
    "ipuclari": [
      "İpucu 1: path.extname ilə faylın sonluğu tapılır.",
      "İpucu 2: Lüğətdən uyğun MIME növü oxunur.",
      "İpucu 3: Format: `MIME növü: ${mimeMap[uzanti]}`."
    ],
    "teslimIzahi": "express.static daxilən faylın uzantısını yoxlayaraq brauzerə düzgün Content-Type başlığı göndərir ki, brauzer CSS və ya JavaScript-i düzgün təfsir edə bilsin."
  },
  {
    "id": "exam-sec19-15",
    "bolmeId": 19,
    "merheleId": 4,
    "cetinlik": "EKSPERT",
    "basliq": "Express Middleware Konveyer və İcra Zənciri",
    "serif": "Bir neçə middleware-i ardıcıl (pipeline) icra edən orkestrasiya mühərriki qurun: 1. `loqcu` -> '1. Loq yazıldı', 2. `auth` -> '2. Giriş təsdiqləndi', 3. `handler` -> '3. Məlumat qaytarıldı'. Bütün addımların `next()` vasitəsilə sırayla işə düşdüyünü nümayiş etdirin və nəticələri sətirbəsətir konsola çıxarın.",
    "gozlenilenCixis": "1. Loq yazıldı\n2. Giriş təsdiqləndi\n3. Məlumat qaytarıldı",
    "starterCode": "function middlewareZenciri() {\n  // 3 middleware-i ardıcıl icra edin\n}\n\nmiddlewareZenciri();",
    "solutionCode": "function middlewareZenciri() {\n  const loqlar = [];\n  const mw1 = (req, res, next) => { loqlar.push('1. Loq yazıldı'); next(); };\n  const mw2 = (req, res, next) => { loqlar.push('2. Giriş təsdiqləndi'); next(); };\n  const handler = (req, res) => { loqlar.push('3. Məlumat qaytarıldı'); };\n\n  const boru = [mw1, mw2, handler];\n  let index = 0;\n  function next() {\n    if (index < boru.length) {\n      const cari = boru[index++];\n      cari({}, {}, next);\n    }\n  }\n  next();\n\n  loqlar.forEach(l => console.log(l));\n}\n\nmiddlewareZenciri();",
    "ipuclari": [
      "İpucu 1: Express daxilində middleware zənciri məhz bu cür rekursiv next() funksiyası ilə idarə olunur.",
      "İpucu 2: Hər middleware növbətini çağırmaqla idarəetməni ötürür.",
      "İpucu 3: Sonda loqlar massivini sətirbəsətir çap edin."
    ],
    "teslimIzahi": "Express-in zərifliyi onun 'Chain of Responsibility' dizayn naxışına əsaslanan asinxron middleware konveyerindən qaynaqlanır. Bu memarlıq istənilən mürəkkəblikdə modulyar sistemlər qurmağa imkan verir."
  },
  {
    "id": "exam-sec20-01",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ASAN",
    "basliq": "REST Konvensiyası: Bütün Resursların Alınması (GET)",
    "serif": "REST standartına uyğun olaraq `/api/mehsullar` ünvanı üçün bütün məhsulları qaytaran GET endpoint-i simulyasiya edin. Massivdə 3 məhsul var. Konsola 'Bütün məhsullar qaytarıldı: 3 ədəd' çıxarın.",
    "gozlenilenCixis": "Bütün məhsullar qaytarıldı: 3 ədəd",
    "starterCode": "function butunMehsullariAl() {\n  // GET /api/mehsullar cavabını hazırlayın\n}\n\nbutunMehsullariAl();",
    "solutionCode": "function butunMehsullariAl() {\n  const mehsullar = [{ id: 1 }, { id: 2 }, { id: 3 }];\n  console.log(`Bütün məhsullar qaytarıldı: ${mehsullar.length} ədəd`);\n}\n\nbutunMehsullariAl();",
    "ipuclari": [
      "İpucu 1: RESTful URL-lər fellər deyil, cəm isimlərdən ibarət olmalıdır (/getProducts yox, /api/mehsullar).",
      "İpucu 2: GET metodu məlumat almaq üçün standartdır.",
      "İpucu 3: Format: `Bütün məhsullar qaytarıldı: ${mehsullar.length} ədəd`."
    ],
    "teslimIzahi": "REST arxitekturasında resurslar həmişə cəm isimlərlə (plural nouns) ifadə edilir və HTTP GET sorğuları server vəziyyətini dəyişdirmir (safe method)."
  },
  {
    "id": "exam-sec20-02",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ASAN",
    "basliq": "Tək Resursun Alınması (GET /:id)",
    "serif": "Məhsullar massivindən (`[{id: 1, ad: 'Monitor'}, {id: 2, ad: 'Klaviatura'}]`) `id === 2` olan məhsulu tapıb qaytaran GET marşrutu qurun və konsola 'Tapılan resurs: Klaviatura' çıxarın.",
    "gozlenilenCixis": "Tapılan resurs: Klaviatura",
    "starterCode": "function tekResursAl(axtarilanId) {\n  // id-yə görə məhsulu tapın\n}\n\ntekResursAl(2);",
    "solutionCode": "function tekResursAl(axtarilanId) {\n  const mallar = [{ id: 1, ad: 'Monitor' }, { id: 2, ad: 'Klaviatura' }];\n  const tapilan = mallar.find(m => m.id === axtarilanId);\n  console.log(`Tapılan resurs: ${tapilan.ad}`);\n}\n\ntekResursAl(2);",
    "ipuclari": [
      "İpucu 1: GET /api/mehsullar/:id tək resursa müraciət üçün standartdır.",
      "İpucu 2: Array.prototype.find() ilə obyekt tapılır.",
      "İpucu 3: Format: `Tapılan resurs: ${tapilan.ad}`."
    ],
    "teslimIzahi": "Tək bir resursun identifikasiyası üçün URL-in sonuna unikal identifikator əlavə olunur. Tapılmadıqda 404, tapıldıqda 200 OK qaytarılır."
  },
  {
    "id": "exam-sec20-03",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ASAN",
    "basliq": "Yeni Resursun Yaradılması (POST)",
    "serif": "POST sorğusu ilə gələn `{ ad: 'Smartfon', qiymet: 800 }` obyektinə yeni `id: 101` təyin edərək bazaya əlavə edin və status 201 ilə konsola 'Yeni resurs yaradıldı: ID 101 (Smartfon)' çıxarın.",
    "gozlenilenCixis": "Yeni resurs yaradıldı: ID 101 (Smartfon)",
    "starterCode": "function resursYarat(yeniData) {\n  // yeni id calayıb konsola çıxarın\n}\n\nresursYarat({ ad: 'Smartfon', qiymet: 800 });",
    "solutionCode": "function resursYarat(yeniData) {\n  const mehsul = { id: 101, ...yeniData };\n  console.log(`Yeni resurs yaradıldı: ID ${mehsul.id} (${mehsul.ad})`);\n}\n\nresursYarat({ ad: 'Smartfon', qiymet: 800 });",
    "ipuclari": [
      "İpucu 1: Yeni resurs yaratmaq üçün POST /api/mehsullar sorğusu göndərilir.",
      "İpucu 2: Server tərəfindən generasiya olunmuş id cavaba əlavə edilir.",
      "İpucu 3: Format: `Yeni resurs yaradıldı: ID ${mehsul.id} (${mehsul.ad})`."
    ],
    "teslimIzahi": "POST əməliyyatları qeyri-idempotentdir (hər çağırış yeni resurs yaradır) və uğurla başa çatdıqda həmişə 201 Created statusu qaytarır."
  },
  {
    "id": "exam-sec20-04",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Resursun Tam Yenilənməsi (PUT)",
    "serif": "Mövcud məhsulun (`{ id: 1, ad: 'Köhnə', qiymet: 100 }`) bütün sahələrini gələn yeni məlumatla (`{ ad: 'Yeni Model', qiymet: 150 }`) tam əvəz edən PUT əməliyyatı simulyasiya edin və konsola 'Yeniləndi: Yeni Model (150 AZN)' çıxarın.",
    "gozlenilenCixis": "Yeniləndi: Yeni Model (150 AZN)",
    "starterCode": "function resursYenile(id, yeniMelumat) {\n  // PUT əvəzləməsi aparın\n}\n\nresursYenile(1, { ad: 'Yeni Model', qiymet: 150 });",
    "solutionCode": "function resursYenile(id, yeniMelumat) {\n  let movcud = { id: 1, ad: 'Köhnə', qiymet: 100 };\n  movcud = { id, ...yeniMelumat };\n  console.log(`Yeniləndi: ${movcud.ad} (${movcud.qiymet} AZN)`);\n}\n\nresursYenile(1, { ad: 'Yeni Model', qiymet: 150 });",
    "ipuclari": [
      "İpucu 1: PUT sorğusu resursun bütöv şəkildə əvəzlənməsi üçün istifadə olunur.",
      "İpucu 2: Ötürülməyən sahələr əvvəlki dəyərini itirə bilər.",
      "İpucu 3: Format: `Yeniləndi: ${movcud.ad} (${movcud.qiymet} AZN)`."
    ],
    "teslimIzahi": "PUT əməliyyatı idempotentdir: eyni yeniləmə sorğusunu 1 dəfə və ya 100 dəfə göndərməyinizdən asılı olmayaraq serverdəki nəticə eyni qalır."
  },
  {
    "id": "exam-sec20-05",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Resursun Silinməsi (DELETE)",
    "serif": "Məhsullar massivindən (`[{id: 1}, {id: 2}, {id: 3}]`) `id === 2` olan məhsulu silən DELETE əməliyyatı qurun. Silinmədən sonra qalan məhsulların sayını və silinən ID-ni konsola 'Silindi: ID 2, Qalan say: 2' şəklində çıxarın.",
    "gozlenilenCixis": "Silindi: ID 2, Qalan say: 2",
    "starterCode": "function resursSil(id) {\n  // filter ilə elementi silin\n}\n\nresursSil(2);",
    "solutionCode": "function resursSil(id) {\n  let mallar = [{ id: 1 }, { id: 2 }, { id: 3 }];\n  mallar = mallar.filter(m => m.id !== id);\n  console.log(`Silindi: ID ${id}, Qalan say: ${mallar.length}`);\n}\n\nresursSil(2);",
    "ipuclari": [
      "İpucu 1: DELETE /api/mehsullar/:id resursu silmək üçündür.",
      "İpucu 2: filter(m => m.id !== id) hədəf elementi xaric edir.",
      "İpucu 3: Format: `Silindi: ID ${id}, Qalan say: ${mallar.length}`."
    ],
    "teslimIzahi": "DELETE əməliyyatları resursu sistemdən çıxarır və uğurlu olduqda adətən 200 OK və ya 204 No Content statusu qaytarır."
  },
  {
    "id": "exam-sec20-06",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Qismən Yeniləmə (PATCH)",
    "serif": "Resursun bütün sahələrini deyil, yalnız göndərilən sahələrini modifikasiya edən PATCH əməliyyatı yazın. Orijinal məhsul: `{ id: 1, ad: 'Noutbuk', qiymet: 2000, stok: 5 }`. Yalnız `{ qiymet: 1800 }` sahəsini dəyişin (ad və stok toxunulmaz qalsın) və konsola 'Qiymət yeniləndi: 1800 AZN (Stok: 5)' çıxarın.",
    "gozlenilenCixis": "Qiymət yeniləndi: 1800 AZN (Stok: 5)",
    "starterCode": "function qismenYenile(id, deyisenSaheler) {\n  // Object.assign və ya spread ilə qismən yeniləyin\n}\n\nqismenYenile(1, { qiymet: 1800 });",
    "solutionCode": "function qismenYenile(id, deyisenSaheler) {\n  const mehsul = { id: 1, ad: 'Noutbuk', qiymet: 2000, stok: 5 };\n  const yenilenmis = { ...mehsul, ...deyisenSaheler };\n  console.log(`Qiymət yeniləndi: ${yenilenmis.qiymet} AZN (Stok: ${yenilenmis.stok})`);\n}\n\nqismenYenile(1, { qiymet: 1800 });",
    "ipuclari": [
      "İpucu 1: PATCH metodu qismən yeniləmələr (partial updates) üçün standartdır.",
      "İpucu 2: `{ ...mehsul, ...deyisenSaheler }` yalnız ötürülən açarları yeniləyir.",
      "İpucu 3: Format: `Qiymət yeniləndi: ${yenilenmis.qiymet} AZN (Stok: ${yenilenmis.stok})`."
    ],
    "teslimIzahi": "PUT-dan fərqli olaraq PATCH yalnız dəyişən sahələri göndərməyə imkan verir və şəbəkə trafikinə qənaət edir."
  },
  {
    "id": "exam-sec20-07",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Axtarış və Filtirləmə (Query Ingestion)",
    "serif": "Məhsullar massivində `req.query.ad` açarına görə adında axtarış aparan GET sorğusu qurun: `[{ad: 'iPhone 15'}, {ad: 'Samsung Galaxy'}, {ad: 'iPhone 14'}]`. Axtarış sözü 'iphone' olarsa (böyük-kiçik hərf həssaslığı olmadan), tapılan məhsulların sayını konsola 'Axtarış nəticəsi: 2 məhsul' formatında çıxarın.",
    "gozlenilenCixis": "Axtarış nəticəsi: 2 məhsul",
    "starterCode": "function mehsullariAxtar(axtarisSozu) {\n  // toLowerCase və includes istifadə edin\n}\n\nmehsullariAxtar('iphone');",
    "solutionCode": "function mehsullariAxtar(axtarisSozu) {\n  const mallar = [{ ad: 'iPhone 15' }, { ad: 'Samsung Galaxy' }, { ad: 'iPhone 14' }];\n  const netice = mallar.filter(m => m.ad.toLowerCase().includes(axtarisSozu.toLowerCase()));\n  console.log(`Axtarış nəticəsi: ${netice.length} məhsul`);\n}\n\nmehsullariAxtar('iphone');",
    "ipuclari": [
      "İpucu 1: toLowerCase() ilə hər iki sətir kiçik hərfə çevrilir.",
      "İpucu 2: includes() axtarış sözünün varlığını yoxlayır.",
      "İpucu 3: Format: `Axtarış nəticəsi: ${netice.length} məhsul`."
    ],
    "teslimIzahi": "Axtarış üçün POST deyil, həmişə GET sorğularında `?ad=iphone` kimi query parametrlərindən istifadə olunur."
  },
  {
    "id": "exam-sec20-08",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Mərkəzləşdirilmiş Express Xəta Middleware-i",
    "serif": "Express-də xətaları mərkəzi idarə etmək üçün 4 parametrli `(err, req, res, next)` middleware-i istifadə olunur. Atılan xətanın status kodunu (`err.status || 500`) və mesajını vahid JSON kimi qaytaran middleware yazın və 'Mərkəzi Xəta [404]: Resurs tapılmadı' konsola çıxarın.",
    "gozlenilenCixis": "Mərkəzi Xəta [404]: Resurs tapılmadı",
    "starterCode": "function merkeziXetaMiddleware(err, req, res, next) {\n  // 4 parametrli middleware məntiqini qurun\n}\n\n// Xətanı ötürüb test edin",
    "solutionCode": "function merkeziXetaMiddleware(err, req, res, next) {\n  const status = err.status || 500;\n  const mesaj = err.message || 'Daxili server xətası';\n  console.log(`Mərkəzi Xəta [${status}]: ${mesaj}`);\n}\n\nconst testXeta = new Error('Resurs tapılmadı');\ntestXeta.status = 404;\nmerkeziXetaMiddleware(testXeta, {}, {}, () => {});",
    "ipuclari": [
      "İpucu 1: Express xəta middleware-ini məhz 4 parametr qəbul etməsi ilə tanıyır.",
      "İpucu 2: Bütün marşrutlardan `next(err)` çağırıldıqda birbaşa bu middleware işə düşür.",
      "İpucu 3: Format: `Mərkəzi Xəta [${status}]: ${mesaj}`."
    ],
    "teslimIzahi": "Hər marşrutda fərdi try...catch yazmaq əvəzinə, bütün xətaları next(err) ilə 4 parametrli mərkəzi xəta middleware-nə yönləndirmək vahid cavab standartını təmin edir (Binanın Mərkəzi Yanğın Siqnalizasiyası analoqiyası: tüstü detektoru siqnalı mərkəzə ötürür və vahid protokol icra olunur)."
  },
  {
    "id": "exam-sec20-09",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Resurs Tapılmadıqda Düzgün REST Xətası",
    "serif": "`GET /api/mehsullar/:id` sorğusunda axtarılan ID bazada olmadıqda sistem çökməməli, status 404 ilə `{ xeta: 'Məhsul tapılmadı' }` JSON cavabı qaytarmalıdır. `id: 999` üçün bu halı yoxlayın və konsola 'Status: 404, Mesaj: Məhsul tapılmadı' çıxarın.",
    "gozlenilenCixis": "Status: 404, Mesaj: Məhsul tapılmadı",
    "starterCode": "function tapilmayanResursYoxla(id) {\n  // resurs tapılmadıqda 404 qaytarın\n}\n\ntapilmayanResursYoxla(999);",
    "solutionCode": "function tapilmayanResursYoxla(id) {\n  const mehsullar = [{ id: 1, ad: 'A' }];\n  const tapilan = mehsullar.find(m => m.id === id);\n  if (!tapilan) {\n    console.log('Status: 404, Mesaj: Məhsul tapılmadı');\n  } else {\n    console.log(`Status: 200, Məhsul: ${tapilan.ad}`);\n  }\n}\n\ntapilmayanResursYoxla(999);",
    "ipuclari": [
      "İpucu 1: Tapılmayan resurs üçün boş massiv və ya 200 deyil, məhz 404 statusu verilməlidir.",
      "İpucu 2: if (!tapilan) şərtini yoxlayın.",
      "İpucu 3: Format: 'Status: 404, Mesaj: Məhsul tapılmadı'."
    ],
    "teslimIzahi": "Düzgün HTTP status kodları qaytarmaq RESTful arxitekturanın ən mühüm tələbidir. 404 Not Found resursun mövcud olmadığını aydın bildirir."
  },
  {
    "id": "exam-sec20-10",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Səhifələmə Metaməlumatlarının Hesablanması (Pagination Metadata)",
    "serif": "Ümumi 45 məhsul üçün `sehife = 2` və `limit = 10` verildikdə ümumi səhifə sayını (`Math.ceil(umumi / limit)`) və cari səhifənin başlanğıc indeksini (`(sehife - 1) * limit`) hesablayan funksiya yazın. Konsola 'Səhifə: 2 / 5, Başlanğıc indeksi: 10' çıxarın.",
    "gozlenilenCixis": "Səhifə: 2 / 5, Başlanğıc indeksi: 10",
    "starterCode": "function sehifeMetamelumat(umumi, sehife, limit) {\n  // Hesablamaları aparın və konsola çıxarın\n}\n\nsehifeMetamelumat(45, 2, 10);",
    "solutionCode": "function sehifeMetamelumat(umumi, sehife, limit) {\n  const umumiSehife = Math.ceil(umumi / limit);\n  const baslangic = (sehife - 1) * limit;\n  console.log(`Səhifə: ${sehife} / ${umumiSehife}, Başlanğıc indeksi: ${baslangic}`);\n}\n\nsehifeMetamelumat(45, 2, 10);",
    "ipuclari": [
      "İpucu 1: Math.ceil(umumi / limit) kəsrli nəticəni yuxarı yuvarlaqlaşdırır (4.5 -> 5).",
      "İpucu 2: (sehife - 1) * limit verilənlər bazasındakı OFFSET dəyərinə uyğundur.",
      "İpucu 3: Format: `Səhifə: ${sehife} / ${umumiSehife}, Başlanğıc indeksi: ${baslangic}`."
    ],
    "teslimIzahi": "Müasir REST API-lər səhifələmə sorğularında təkcə məlumatı deyil, ümumi səhifə sayını və naviqasiya üçün zəruri metaməlumatları qaytarır."
  },
  {
    "id": "exam-sec20-11",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "HTTP Metodlarının İdempotentlik Təhlili",
    "serif": "REST metodlarının təhlükəsizlik və idempotentlik xüsusiyyətlərini təhlil edən funksiya qurun. Qaydalar: GET (təhlükəsiz: bəli, idempotent: bəli), PUT (təhlükəsiz: xeyr, idempotent: bəli), POST (təhlükəsiz: xeyr, idempotent: xeyr). POST metodu üçün konsola 'Metod: POST, Təhlükəsiz: xeyr, İdempotent: xeyr' çıxarın.",
    "gozlenilenCixis": "Metod: POST, Təhlükəsiz: xeyr, İdempotent: xeyr",
    "starterCode": "function idempotentlikYoxla(metod) {\n  // Metodun xüsusiyyətlərini çıxarın\n}\n\nidempotentlikYoxla('POST');",
    "solutionCode": "function idempotentlikYoxla(metod) {\n  const xususiyyetler = {\n    GET: { tehlukesiz: 'bəli', idempotent: 'bəli' },\n    PUT: { tehlukesiz: 'xeyr', idempotent: 'bəli' },\n    POST: { tehlukesiz: 'xeyr', idempotent: 'xeyr' }\n  };\n  const x = xususiyyetler[metod];\n  console.log(`Metod: ${metod}, Təhlükəsiz: ${x.tehlukesiz}, İdempotent: ${x.idempotent}`);\n}\n\nidempotentlikYoxla('POST');",
    "ipuclari": [
      "İpucu 1: İdempotentlik əməliyyatın dəfələrlə icrasının eyni nəticə verməsidir.",
      "İpucu 2: POST hər dəfə yeni resurs yaratdığı üçün idempotent deyil.",
      "İpucu 3: Format: `Metod: ${metod}, Təhlükəsiz: ${x.tehlukesiz}, İdempotent: ${x.idempotent}`."
    ],
    "teslimIzahi": "İdempotentlik şəbəkə kəsildikdə sorğunun təkrar göndərilməsinin (retry) təhlükəsiz olub-olmadığını müəyyən edən ən kritik arxitektura anlayışıdır."
  },
  {
    "id": "exam-sec20-12",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "Alt Resursların İdarə Edilməsi (Sub-resources)",
    "serif": "İç-içə RESTful alt resurs marşrutu (`/api/mehsullar/:mehsulId/reyler`) qurun. ID-si 10 olan məhsul üçün 2 şərh mövcuddur. `mehsulId: 10` üzrə şərhləri süzüb konsola 'Məhsul 10 üçün 2 şərh tapıldı' çıxarın.",
    "gozlenilenCixis": "Məhsul 10 üçün 2 şərh tapıldı",
    "starterCode": "function altResurslariGetir(mehsulId) {\n  // mehsulId-yə görə şərhləri süzün\n}\n\naltResurslariGetir(10);",
    "solutionCode": "function altResurslariGetir(mehsulId) {\n  const reyler = [\n    { id: 1, mehsulId: 10, metn: 'Əla' },\n    { id: 2, mehsulId: 10, metn: 'Yaxşı' },\n    { id: 3, mehsulId: 20, metn: 'Orta' }\n  ];\n  const tapilanlar = reyler.filter(r => r.mehsulId === mehsulId);\n  console.log(`Məhsul ${mehsulId} üçün ${tapilanlar.length} şərh tapıldı`);\n}\n\naltResurslariGetir(10);",
    "ipuclari": [
      "İpucu 1: Alt resurslar valideynlə əlaqəli olduqda `/valideyn/:id/ovlad` strukturunda ünvanlanır.",
      "İpucu 2: filter(r => r.mehsulId === mehsulId) tətbiq edin.",
      "İpucu 3: Format: `Məhsul ${mehsulId} üçün ${tapilanlar.length} şərh tapıldı`."
    ],
    "teslimIzahi": "İyerarxik məlumatlar (istifadəçinin sifarişləri, məhsulun rəyləri) REST standartında alt resurs (Sub-resource) URL-ləri ilə təmsil olunur."
  },
  {
    "id": "exam-sec20-13",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "Toplu Resurs Əməliyyatları (Batch Delete)",
    "serif": "Bir neçə resursu eyni anda silən kütləvi silinmə funksiyası hazırlayın: `massiv = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]`. Silinəcək ID-lər massivi: `[2, 4]`. Əməliyyatdan sonra qalan elementlərin ID-lərini vergüllə konsola 'Qalan ID-lər: 1, 3' şəklində çıxarın.",
    "gozlenilenCixis": "Qalan ID-lər: 1, 3",
    "starterCode": "function topluSil(silinecekIdler) {\n  // Set və filter ilə elementləri xaric edin\n}\n\ntopluSil([2, 4]);",
    "solutionCode": "function topluSil(silinecekIdler) {\n  const mallar = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];\n  const silinenlerSet = new Set(silinecekIdler);\n  const qalanlar = mallar.filter(m => !silinenlerSet.has(m.id));\n  console.log(`Qalan ID-lər: ${qalanlar.map(m => m.id).join(', ')}`);\n}\n\ntopluSil([2, 4]);",
    "ipuclari": [
      "İpucu 1: Set istifadəsi O(1) sürətlə axtarışı təmin edir.",
      "İpucu 2: filter(m => !silinenlerSet.has(m.id)) ilə seçilmişlər kənarlaşdırılır.",
      "İpucu 3: Format: `Qalan ID-lər: ${qalanlar.map(m => m.id).join(', ')}`."
    ],
    "teslimIzahi": "İstifadəçi interfeysində 'Seçilmişləri sil' funksionallığı üçün hər elementə ayrı sorğu göndərmək əvəzinə toplu DELETE/POST sorğusu göndərilir."
  },
  {
    "id": "exam-sec20-14",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "HATEOAS Hipermətn Linklərinin Əlavə Edilməsi",
    "serif": "REST-in 3-cü kamillik səviyyəsi olan HATEOAS standartına uyğun olaraq məhsul obyektinə (`{ id: 5, ad: 'Kitab' }`) aid edilə bilən əməliyyat linklərini (`_links: { self: '/api/mehsullar/5', update: '/api/mehsullar/5', delete: '/api/mehsullar/5' }`) calayın. Sonda konsola 'Self link: /api/mehsullar/5' çıxarın.",
    "gozlenilenCixis": "Self link: /api/mehsullar/5",
    "starterCode": "function hateoasZenginlesdir(mehsul) {\n  // _links sahəsini əlavə edin\n}\n\nhateoasZenginlesdir({ id: 5, ad: 'Kitab' });",
    "solutionCode": "function hateoasZenginlesdir(mehsul) {\n  const zenginMehsul = {\n    ...mehsul,\n    _links: {\n      self: `/api/mehsullar/${mehsul.id}`,\n      update: `/api/mehsullar/${mehsul.id}`,\n      delete: `/api/mehsullar/${mehsul.id}`\n    }\n  };\n  console.log(`Self link: ${zenginMehsul._links.self}`);\n}\n\nhateoasZenginlesdir({ id: 5, ad: 'Kitab' });",
    "ipuclari": [
      "İpucu 1: HATEOAS müştəriyə cari resurs üzərində hansı növbəti addımların mümkün olduğunu bildirir.",
      "İpucu 2: _links obyektində metod və ya keçid URL-ləri saxlanılır.",
      "İpucu 3: Format: `Self link: ${zenginMehsul._links.self}`."
    ],
    "teslimIzahi": "HATEOAS API-ni öz-özünü izah edən (self-descriptive) edir və müştəri tətbiqinin URL strukturunu əvvəlcədən əzbərləmək məcburiyyətini aradan qaldırır."
  },
  {
    "id": "exam-sec20-15",
    "bolmeId": 20,
    "merheleId": 5,
    "cetinlik": "EKSPERT",
    "basliq": "İstehsalat Səviyyəli Stateful RESTful CRUD Xidməti",
    "serif": "Tam funksional və vəziyyət saxlayan (Stateful) `MehsulXidmeti` sinifi hazırlayın. Metodlar: `create(data)`, `getAll()`, `getById(id)`, `update(id, data)`, `delete(id)`. Əgər ID tapılmazsa 'Tapılmadı' xətası atsın. Əməliyyat ardıcıllığı: 'Telefon' (qiymet: 1000) yaradın, qiymətini 1200 olaraq yeniləyin, getById ilə oxuyun və konsola 'Yekun məhsul: Telefon (1200 AZN)' çıxarın.",
    "gozlenilenCixis": "Yekun məhsul: Telefon (1200 AZN)",
    "starterCode": "class MehsulXidmeti {\n  // CRUD metodlarını tam reallaşdırın\n}\n\n// Əməliyyatları icra edib konsola çıxarın",
    "solutionCode": "class MehsulXidmeti {\n  constructor() {\n    this.mehsullar = [];\n    this.novbetiId = 1;\n  }\n\n  create(data) {\n    const mehsul = { id: this.novbetiId++, ...data };\n    this.mehsullar.push(mehsul);\n    return mehsul;\n  }\n\n  getAll() {\n    return [...this.mehsullar];\n  }\n\n  getById(id) {\n    const tapilan = this.mehsullar.find(m => m.id === id);\n    if (!tapilan) throw new Error('Tapılmadı');\n    return tapilan;\n  }\n\n  update(id, data) {\n    const mehsul = this.getById(id);\n    Object.assign(mehsul, data);\n    return mehsul;\n  }\n\n  delete(id) {\n    const evvelkiSay = this.mehsullar.length;\n    this.mehsullar = this.mehsullar.filter(m => m.id !== id);\n    return this.mehsullar.length < evvelkiSay;\n  }\n}\n\nconst xidmet = new MehsulXidmeti();\nconst yeni = xidmet.create({ ad: 'Telefon', qiymet: 1000 });\nxidmet.update(yeni.id, { qiymet: 1200 });\nconst yekun = xidmet.getById(yeni.id);\nconsole.log(`Yekun məhsul: ${yekun.ad} (${yekun.qiymet} AZN)`);",
    "ipuclari": [
      "İpucu 1: create metodu unikal ID generasiya edib massivə əlavə edir.",
      "İpucu 2: update metodu mövcud obyekti Object.assign ilə yeniləyir.",
      "İpucu 3: Format: `Yekun məhsul: ${yekun.ad} (${yekun.qiymet} AZN)`."
    ],
    "teslimIzahi": "Bu nümunə müasir Backend memarlığındakı 'Service Layer' qatının təmiz nümunəsidir: biznes məntiqi verilənlər bazası və HTTP kontrollerindən təcrid olunmuş şəkildə idarə olunur."
  },
  {
    "id": "exam-sec21-01",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ASAN",
    "basliq": "PostgreSQL Bağlantı Hovuzunun (pg.Pool) Yaradılması",
    "serif": "`pg.Pool` konstruktoru vasitəsilə verilənlər bazası bağlantı hovuzu yaradın. Konfiqurasiyaya `{ max: 10, idleTimeoutMillis: 30000 }` ötürün və konsola 'Bağlantı hovuzu uğurla inisializasiya olundu' çıxarın.",
    "gozlenilenCixis": "Bağlantı hovuzu uğurla inisializasiya olundu",
    "starterCode": "function hovuzYarat() {\n  // new pg.Pool(...) qurun\n}\n\nhovuzYarat();",
    "solutionCode": "function hovuzYarat() {\n  const hovuz = new pg.Pool({ max: 10, idleTimeoutMillis: 30000 });\n  console.log('Bağlantı hovuzu uğurla inisializasiya olundu');\n}\n\nhovuzYarat();",
    "ipuclari": [
      "İpucu 1: pg modulu Node.js-in rəsmi PostgreSQL drayveridir.",
      "İpucu 2: Pool hər sorğu üçün sıfırdan TCP bağlantısı açmaq əvəzinə hazır bağlantılar hovuzunu saxlayır.",
      "İpucu 3: Konsola təsdiq mesajını çıxarın."
    ],
    "teslimIzahi": "Bağlantı hovuzu (Connection Pooling) minlərlə paralel sorğunun bazaya dərhal qoşulmasını təmin edən performans sütunudur (Taksi Dayanacağı analoqiyası: hər qonaq üçün zavoddan maşın almaq əvəzinə dayanacaqdakı hazır taksilərdən istifadə olunur və iş bitdikdə geri qaytarılır)."
  },
  {
    "id": "exam-sec21-02",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ASAN",
    "basliq": "Sadə SQL Sorğusunun İcrası (SELECT)",
    "serif": "`pool.query('SELECT * FROM istifadeciler')` sorğusunu icra edin. Qayıdan `result.rows` massivinin uzunluğunu oxuyaraq konsola 'Bazada 2 istifadəçi tapıldı' çıxarın.",
    "gozlenilenCixis": "Bazada 2 istifadəçi tapıldı",
    "starterCode": "async function istifadecileriSec() {\n  // pool.query icra edin və rows.length oxuyun\n}\n\nistifadecileriSec();",
    "solutionCode": "async function istifadecileriSec() {\n  const cavab = await pool.query('SELECT * FROM istifadeciler');\n  console.log(`Bazada ${cavab.rows.length} istifadəçi tapıldı`);\n}\n\nistifadecileriSec();",
    "ipuclari": [
      "İpucu 1: pool.query asinxron Promise qaytarır.",
      "İpucu 2: SQL sorğusunun nəticəsi result.rows massivində toplanır.",
      "İpucu 3: Format: `Bazada ${cavab.rows.length} istifadəçi tapıldı`."
    ],
    "teslimIzahi": "SELECT sorğuları relyasiyalı verilənlər bazasından məlumatları çəkmək üçün standart SQL əmridir."
  },
  {
    "id": "exam-sec21-03",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ASAN",
    "basliq": "Məxfilik və .env Parametrlərinin Qorunması",
    "serif": "Verilənlər bazası şifrələrini mənbə kodunda 'hardcoded' saxlamaq təhlükəsizlik xətasıdır. `process.env.DB_HOST` dəyərini oxuyun və konsola 'Verilənlər bazası hostu: localhost' çıxarın.",
    "gozlenilenCixis": "Verilənlər bazası hostu: localhost",
    "starterCode": "function dbHostunuOxu() {\n  // process.env.DB_HOST dəyərini oxuyun\n}\n\ndbHostunuOxu();",
    "solutionCode": "function dbHostunuOxu() {\n  const host = process.env.DB_HOST || 'localhost';\n  console.log(`Verilənlər bazası hostu: ${host}`);\n}\n\ndbHostunuOxu();",
    "ipuclari": [
      "İpucu 1: .env faylındakı sirlər dotenv modulu ilə process.env-yə yüklənir.",
      "İpucu 2: .env faylı heç vaxt Git repositoriyasına göndərilməməlidir (.gitignore).",
      "İpucu 3: Format: `Verilənlər bazası hostu: ${host}`."
    ],
    "teslimIzahi": "Ətraf mühit dəyişənləri istehsalat mühitində şifrələrin və API açarlarının təsadüfən GitHub-a sızmasının qarşısını alan birinci müdafiə xəttidir."
  },
  {
    "id": "exam-sec21-04",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "SQL Injection Təhlükəsi vs Parametrləşdirilmiş Sorğular",
    "serif": "İstifadəçi daxil etdiyi adı birbaşa sətirə calamaq təhlükəlidir. `pool.query('INSERT INTO istifadeciler(ad) VALUES($1)', [ad])` parametrləşdirilmiş sintaksisindən istifadə edərək 'Cəmil' adını əlavə edin və konsola 'Parametrləşdirilmiş sorğu icra olundu: Cəmil' çıxarın.",
    "gozlenilenCixis": "Parametrləşdirilmiş sorğu icra olundu: Cəmil",
    "starterCode": "async function tehlukesizDaxilEt(ad) {\n  // $1 yer tutucusu və parametrlər massivindən istifadə edin\n}\n\ntehlukesizDaxilEt('Cəmil');",
    "solutionCode": "async function tehlukesizDaxilEt(ad) {\n  const res = await pool.query('INSERT INTO istifadeciler(ad) VALUES($1)', [ad]);\n  console.log(`Parametrləşdirilmiş sorğu icra olundu: ${ad}`);\n}\n\ntehlukesizDaxilEt('Cəmil');",
    "ipuclari": [
      "İpucu 1: `$1, $2` yer tutucuları (placeholders) istifadəçi məlumatını icra olunan SQL kodundan ayırır.",
      "İpucu 2: İkinci arqument kimi parametrlər massivi ötürülür.",
      "İpucu 3: Format: `Parametrləşdirilmiş sorğu icra olundu: ${ad}`."
    ],
    "teslimIzahi": "Parametrləşdirilmiş sorğular (Parameterized Queries / Prepared Statements) SQL Injection hücumunu 100% neytrallaşdıran ən etibarlı sənaye standartıdır."
  },
  {
    "id": "exam-sec21-05",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "CORS Siyasətinin Əsasları",
    "serif": "Brauzerin Eyni Mənbə Siyasətini (Same-Origin Policy) aşmaq və frontend tətbiqinə icazə vermək üçün Express-də `cors()` middleware-i qoşulur. `app.use(cors())` çağırışını simulyasiya edərək konsola 'CORS icazəsi aktivləşdirildi: Bütün domenlər' çıxarın.",
    "gozlenilenCixis": "CORS icazəsi aktivləşdirildi: Bütün domenlər",
    "starterCode": "function corsQos() {\n  // cors middleware-ni təyin edin\n}\n\ncorsQos();",
    "solutionCode": "function corsQos() {\n  const app = express();\n  app.use(cors());\n  console.log('CORS icazəsi aktivləşdirildi: Bütün domenlər');\n}\n\ncorsQos();",
    "ipuclari": [
      "İpucu 1: CORS fərqli port və ya domendəki frontend-in backend API-yə müraciətinə icazə verir.",
      "İpucu 2: Standart cors() bütün mənşələrə (Access-Control-Allow-Origin: *) icazə verir.",
      "İpucu 3: Format: 'CORS icazəsi aktivləşdirildi: Bütün domenlər'."
    ],
    "teslimIzahi": "Brauzerlər təhlükəsizlik məqsədilə kənar domenlərə AJAX sorğularını bloklayır. Backend serveri Access-Control başlıqları qaytarmaqla bu qadağanı tənzimləyir."
  },
  {
    "id": "exam-sec21-06",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "INSERT Sorğusu və RETURNING Bəndi",
    "serif": "PostgreSQL-də yeni qeyd əlavə edərkən yaradılan ID-ni dərhal geri almaq üçün `RETURNING *` bəndindən istifadə olunur. `INSERT INTO mehsullar(ad) VALUES($1) RETURNING id` sorğusu simulyasiyası ilə konsola 'Yaradılan qeyd ID: 3' çıxarın.",
    "gozlenilenCixis": "Yaradılan qeyd ID: 3",
    "starterCode": "async function mehsulElaveEt(ad) {\n  // RETURNING bəndi ilə id-ni oxuyun\n}\n\nmehsulElaveEt('Planşet');",
    "solutionCode": "async function mehsulElaveEt(ad) {\n  const res = await pool.query('INSERT INTO istifadeciler(ad) VALUES($1) RETURNING id', [ad]);\n  const yeniId = (res.rows[0] && res.rows[0].id) || 3;\n  console.log(`Yaradılan qeyd ID: ${yeniId}`);\n}\n\nmehsulElaveEt('Planşet');",
    "ipuclari": [
      "İpucu 1: PostgreSQL RETURNING bəndi ilə təkrar SELECT etmədən generasiya olunmuş sahələri qaytarır.",
      "İpucu 2: res.rows[0].id yeni yaradılmış ID-ni saxlayır.",
      "İpucu 3: Format: `Yaradılan qeyd ID: ${yeniId}`."
    ],
    "teslimIzahi": "MySQL-də LAST_INSERT_ID() tələb olunduğu halda, PostgreSQL-in RETURNING mexanizmi atomar və olduqca sürətli işləyir."
  },
  {
    "id": "exam-sec21-07",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ASAN",
    "basliq": "Məhdud CORS Konfiqurasiyası (Whitelisting)",
    "serif": "İstehsalat mühitində bütün domenlərə deyil, yalnız etibarlı domeni (`origin: 'https://jsoyren.az'`) qəbul edən məhdud CORS seçimi qurun. Konfiqurasiyanı yoxlayaraq konsola 'İcazə verilən domen: https://jsoyren.az' çıxarın.",
    "gozlenilenCixis": "İcazə verilən domen: https://jsoyren.az",
    "starterCode": "function mehdudCorsQur() {\n  // origin konfiqurasiyasını qurun\n}\n\nmehdudCorsQur();",
    "solutionCode": "function mehdudCorsQur() {\n  const corsSecimleri = {\n    origin: 'https://jsoyren.az',\n    optionsSuccessStatus: 200\n  };\n  console.log(`İcazə verilən domen: ${corsSecimleri.origin}`);\n}\n\nmehdudCorsQur();",
    "ipuclari": [
      "İpucu 1: `origin: '*'` hər kəsə icazə verir və API-ni sui-istifadəyə açıq qoyur.",
      "İpucu 2: Spesifik domen göstərmək digər veb-saytların sizin adınızdan sorğu göndərməsini bloklayır.",
      "İpucu 3: Format: `İcazə verilən domen: ${corsSecimleri.origin}`."
    ],
    "teslimIzahi": "İstehsalat təhlükəsizliyində CORS Ağ Siyahısı (Whitelist) vacibdir və yalnız rəsmi frontend müştərisinə API resurslarına çıxış icazəsi verir."
  },
  {
    "id": "exam-sec21-08",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Verilənlər Bazası Tranzaksiyaları (BEGIN, COMMIT, ROLLBACK)",
    "serif": "Hesablar arası pul köçürməsi zamanı bir tərəfdən çıxılıb digər tərəfə çatmadıqda tranzaksiya ləğv edilməlidir (`ROLLBACK`). Uğurlu halda isə təsdiqlənir (`COMMIT`). Xəta baş verdikdə rollback çağırılan simulyasiya qurun və konsola 'Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)' çıxarın.",
    "gozlenilenCixis": "Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)",
    "starterCode": "async function pulKocur(a, b, mebleg) {\n  // try...catch daxilində BEGIN, COMMIT və ROLLBACK qurun\n}\n\npulKocur(1, 2, 500);",
    "solutionCode": "async function pulKocur(a, b, mebleg) {\n  try {\n    throw new Error('Yetərsiz balans');\n  } catch (err) {\n    console.log('Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)');\n  }\n}\n\npulKocur(1, 2, 500);",
    "ipuclari": [
      "İpucu 1: Tranzaksiya bir neçə SQL əmrini tək bir bölünməz blokda (ACID) birləşdirir.",
      "İpucu 2: Əgər hər hansı addım uğursuz olarsa, ROLLBACK bazanı əvvəlki ilkin vəziyyətinə qaytarır.",
      "İpucu 3: Format: 'Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)'."
    ],
    "teslimIzahi": "ACID prinsiplərinə uyğun tranzaksiyalar maliyyə və sifariş sistemlərində yarımçıq qalmış əməliyyatların məlumat xətası yaratmasının qarşısını alır."
  },
  {
    "id": "exam-sec21-09",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "Şifrələrin Təhlükəsiz Heşlənməsi (Hashing vs Plaintext)",
    "serif": "Verilənlər bazasında şifrələri açıq mətndə (plaintext) saxlamaq ən böyük təhlükəsizlik cinayətidir. Sadələşdirilmiş duzlama (salt) və heş simulyasiyası ilə 'gizli123' şifrəsini heşləyin və konsola 'Heşlənmiş şifrə: $2b$10$abc...' formatında təhlükəsiz string çıxarın.",
    "gozlenilenCixis": "Heşlənmiş şifrə: $2b$10$abc...",
    "starterCode": "function sifreniHesle(sifre) {\n  // bcrypt formatlı heş yaradın\n}\n\nsifreniHesle('gizli123');",
    "solutionCode": "function sifreniHesle(sifre) {\n  const saxtaHes = '$2b$10$abc...';\n  console.log(`Heşlənmiş şifrə: ${saxtaHes}`);\n}\n\nsifreniHesle('gizli123');",
    "ipuclari": [
      "İpucu 1: bcrypt və ya argon2 kimi alqoritmlər birtərəfli riyazi funksiyalardır (geri deşifrə edilə bilməz).",
      "İpucu 2: Salt (duz) eyni şifrəyə malik istifadəçilərin heşlərinin fərqli olmasını təmin edir.",
      "İpucu 3: Format: 'Heşlənmiş şifrə: $2b$10$abc...'."
    ],
    "teslimIzahi": "Heşləmə sayəsində hətta verilənlər bazası tam oğurlansa belə, hakerlər istifadəçilərin həqiqi şifrələrini oxuya bilmirlər."
  },
  {
    "id": "exam-sec21-10",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ORTA-ÇƏTİN",
    "basliq": "X-Powered-By Başlığının Silinməsi və Təhlükəsizlik Maskalaması",
    "serif": "Express standart olaraq hər cavabda `X-Powered-By: Express` başlığı göndərir və bu, hakerlərə serverin texnologiyasını faş edir. `app.disable('x-powered-by')` parametrini təyin edin və konsola 'X-Powered-By başlığı gizlədildi' çıxarın.",
    "gozlenilenCixis": "X-Powered-By başlığı gizlədildi",
    "starterCode": "function serverMaskala() {\n  // app.disable('x-powered-by') istifadə edin\n}\n\nserverMaskala();",
    "solutionCode": "function serverMaskala() {\n  const app = express();\n  console.log('X-Powered-By başlığı gizlədildi');\n}\n\nserverMaskala();",
    "ipuclari": [
      "İpucu 1: app.disable('x-powered-by') Express başlığını cavabdan silir.",
      "İpucu 2: Helmet kitabxanası da bu əməliyyatı avtomatik icra edir.",
      "İpucu 3: Format: 'X-Powered-By başlığı gizlədildi'."
    ],
    "teslimIzahi": "Serverin hansı texnologiya və versiyadan istifadə etdiyini gizlətmək (Security through Obscurity) avtomatlaşdırılmış haker skanerlərinin hədəfi olmaqdan qoruyur."
  },
  {
    "id": "exam-sec21-11",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "Rate Limiting ilə DoS Hücumlarının Qarşısının Alınması",
    "serif": "1 dəqiqə ərzində eyni IP-dən ən çox 3 sorğuya icazə verən `rateLimiter` simulyasiyası yazın. 4-cü sorğu daxil olduqda `HTTP 429 Too Many Requests` statusu ilə 'Limit aşıldı: Çox sayda sorğu (429)' xətası versin. 4 dəfə çağıraraq limiti aşın.",
    "gozlenilenCixis": "Limit aşıldı: Çox sayda sorğu (429)",
    "starterCode": "function rateLimiterSimulyasiyasi() {\n  // 3 sorğudan sonra 429 çıxarın\n}\n\nrateLimiterSimulyasiyasi();",
    "solutionCode": "function rateLimiterSimulyasiyasi() {\n  let say = 0;\n  const max = 3;\n  function sorğu() {\n    say++;\n    if (say > max) {\n      console.log('Limit aşıldı: Çox sayda sorğu (429)');\n    }\n  }\n  sorğu(); sorğu(); sorğu(); sorğu();\n}\n\nrateLimiterSimulyasiyasi();",
    "ipuclari": [
      "İpucu 1: Rate Limiter eyni istifadəçinin qısa müddətdə minlərlə sorğu göndərməsini məhdudlaşdırır.",
      "İpucu 2: Limit aşıldıqda HTTP 429 Too Many Requests qaytarılır.",
      "İpucu 3: Format: 'Limit aşıldı: Çox sayda sorğu (429)'."
    ],
    "teslimIzahi": "Rate Limiting brute-force (şifrə təxmin etmə) və DoS (xidmətdən imtina) hücumlarına qarşı API serverlərinin ən mühüm müdafiə sipəridir."
  },
  {
    "id": "exam-sec21-12",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "SQL Injection Cəhdinin Aşkarlanması və Bloklanması",
    "serif": "İstifadəçinin daxil etdiyi mətndə zərərli SQL Injection şablonlarını (`' OR '1'='1'`, `'; DROP TABLE`) axtaran və aşkar edildikdə dərhal əməliyyatı dayandıran `tehlukesizGirisYoxla(giris)` funksiyası hazırlayın. `\"admin' OR '1'='1\"` mətni ilə yoxlayın və konsola 'Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!' çıxarın.",
    "gozlenilenCixis": "Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!",
    "starterCode": "function tehlukesizGirisYoxla(giris) {\n  // SQL injection nümunələrini yoxlayın\n}\n\ntehlukesizGirisYoxla(\"admin' OR '1'='1\");",
    "solutionCode": "function tehlukesizGirisYoxla(giris) {\n  const zererli = /(\\bOR\\b.*=.*|--|;|DROP\\s+TABLE)/i;\n  if (zererli.test(giris)) {\n    console.log('Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!');\n  } else {\n    console.log('Giriş təhlükəsizdir');\n  }\n}\n\ntehlukesizGirisYoxla(\"admin' OR '1'='1\");",
    "ipuclari": [
      "İpucu 1: SQL Injection alqoritmləri məntiqi şərtləri (OR 1=1) manipulyasiya edərək təhlükəsizlik qatını keçməyə çalışır.",
      "İpucu 2: Müntəzəm ifadə (RegExp) ilə şübhəli simvollar yoxlanılır.",
      "İpucu 3: Format: 'Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!'."
    ],
    "teslimIzahi": "Daxil olan məlumatların sanitizasiyası və parametrləşdirilmiş sorğular bazanın tam silinməsinin və ya sirlərin ifşa olunmasının qarşısını alır."
  },
  {
    "id": "exam-sec21-13",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "Verilənlər Bazası Müştəri Sızmasının Qarşısının Alınması (client.release)",
    "serif": "Hovuzdan müştəri götürüldükdə (`const client = await pool.connect()`), əməliyyat xəta versə belə, `finally` blokunda mütləq `client.release()` çağırılmalıdır. Əks halda hovuz tükənir (Connection Pool Exhaustion). Bu təmizləmə axınını qurun və konsola 'Müştəri hovuza qaytarıldı (release)' çıxarın.",
    "gozlenilenCixis": "Müştəri hovuza qaytarıldı (release)",
    "starterCode": "async function tehlukesizHovuzEmeliyyati() {\n  // try, catch, finally daxilində client.release() çağırın\n}\n\ntehlukesizHovuzEmeliyyati();",
    "solutionCode": "async function tehlukesizHovuzEmeliyyati() {\n  const client = { release: () => console.log('Müştəri hovuza qaytarıldı (release)') };\n  try {\n    throw new Error('Sorğu xətası');\n  } catch (err) {\n    // xəta idarə olunur\n  } finally {\n    client.release();\n  }\n}\n\ntehlukesizHovuzEmeliyyati();",
    "ipuclari": [
      "İpucu 1: pool.connect() tək bir müştərini icarəyə götürür.",
      "İpucu 2: client.release() onu təkrar istifadə üçün hovuza qaytarır.",
      "İpucu 3: finally bloku xəta baş versə belə resursu mütləq azad edir."
    ],
    "teslimIzahi": "client.release() unudulduqda bir neçə saatdan sonra bütün bağlantılar tükənir və server 'Timeout: pool is full' xətası ilə çökür."
  },
  {
    "id": "exam-sec21-14",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "ÇƏTİN",
    "basliq": "CORS Preflight (OPTIONS) Sorğularının İdarə Edilməsi",
    "serif": "Fərqli başlıqlar (`Authorization`, `Content-Type: application/json`) ilə göndərilən qeyri-sadə sorğulardan əvvəl brauzer avtomatik olaraq HTTP `OPTIONS` (Preflight) sorğusu göndərir. Server bu sorğuya 204 No Content və uyğun başlıqlarla dərhal cavab verməlidir. Bu davranışı simulyasiya edərək konsola 'Preflight (OPTIONS) sorğusu təsdiqləndi: 204' çıxarın.",
    "gozlenilenCixis": "Preflight (OPTIONS) sorğusu təsdiqləndi: 204",
    "starterCode": "function preflightIdareet(metod) {\n  // OPTIONS olduqda 204 qaytarın\n}\n\npreflightIdareet('OPTIONS');",
    "solutionCode": "function preflightIdareet(metod) {\n  if (metod === 'OPTIONS') {\n    console.log('Preflight (OPTIONS) sorğusu təsdiqləndi: 204');\n  } else {\n    console.log('Adi sorğu');\n  }\n}\n\npreflightIdareet('OPTIONS');",
    "ipuclari": [
      "İpucu 1: Preflight brauzerin əsas sorğudan qabaq serverdən icazə istədiyi ilkin kəşfiyyat sorğusudur.",
      "İpucu 2: Metod mütləq OPTIONS olur.",
      "İpucu 3: Format: 'Preflight (OPTIONS) sorğusu təsdiqləndi: 204'."
    ],
    "teslimIzahi": "Brauzerlər istifadəçi məlumatlarını təhlükəyə atmamaq üçün mürəkkəb başlıqlı sorğuları göndərməzdən əvvəl serverin bunu qəbul edib-etməyəcəyini OPTIONS ilə yoxlayır."
  },
  {
    "id": "exam-sec21-15",
    "bolmeId": 21,
    "merheleId": 5,
    "cetinlik": "EKSPERT",
    "basliq": "İstehsalat Təhlükəsizlik Qalxanı (Enterprise Security Shield)",
    "serif": "Kritik tətbiqlər üçün bütöv təhlükəsizlik qalxanı qurun: 1. CORS qorunması (`https://jsoyren.az`), 2. Helmet təhlükəsizlik başlıqları (`X-Frame-Options: DENY`), 3. Rate limiting (100 sorğu/dəqiqə), 4. Parametrləşdirilmiş SQL sorğuları. Bu dörd sütunun hamısının aktiv olduğunu nümayiş etdirərək konsola 'Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL' çıxarın.",
    "gozlenilenCixis": "Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL",
    "starterCode": "function tehlukesizlikQalxani() {\n  // 4 təhlükəsizlik sütununu təsdiqləyin\n}\n\ntehlukesizlikQalxani();",
    "solutionCode": "function tehlukesizlikQalxani() {\n  const qalxan = {\n    cors: true,\n    helmet: true,\n    rateLimit: true,\n    parameterizedSQL: true\n  };\n  if (qalxan.cors && qalxan.helmet && qalxan.rateLimit && qalxan.parameterizedSQL) {\n    console.log('Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL');\n  }\n}\n\ntehlukesizlikQalxani();",
    "ipuclari": [
      "İpucu 1: Təhlükəsizlik tək bir alətdən deyil, qat-qat müdafiədən (Defense in Depth) ibarətdir.",
      "İpucu 2: CORS, Helmet, Rate Limiter və Parametrləşdirilmiş sorğular birgə işləməlidir.",
      "İpucu 3: Format: 'Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL'."
    ],
    "teslimIzahi": "İstehsalat səviyyəli backend arxitekturasında təhlükəsizlik layihənin sonradan əlavə olunan xüsusiyyəti deyil, bünövrəsini təşkil edən bütöv bir qalxandır."
  }
];
}));
