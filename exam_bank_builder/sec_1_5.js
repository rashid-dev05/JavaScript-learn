/**
 * JSÖyrən - İmtahan Mərkəzi Sual Bankı (Mərhələ 1: Bölmə 1 - 5)
 * Cəmi: 75 Sual (Hər bölmə üzrə 15 sual: 3 ASAN, 4 ORTA-ASAN, 3 ORTA-ÇƏTİN, 4 ÇƏTİN, 1 EKSPERT)
 */

const SEC_1_5_QUESTIONS = [
  // ==========================================
  // BÖLMƏ 1: JS-ə Giriş & console.log() (15 sual)
  // ==========================================
  {
    id: "exam-sec1-01",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Konsola Sadə Mesaj Çıxışı",
    serif: "<code>salamDunya()</code> funksiyasını təyin edin. Funksiya daxilində konsola dəqiq olaraq <code>Salam, JavaScript!</code> mətni çıxarılmalıdır. Funksiyanı çağırın.",
    gozlenilenCixis: "Salam, JavaScript!",
    starterCode: "function salamDunya() {\n  // Kodunuzu buraya yazın\n}\n\nsalamDunya();",
    solutionCode: "function salamDunya() {\n  console.log(\"Salam, JavaScript!\");\n}\n\nsalamDunya();",
    ipuclari: [
      "İpucu 1: Konsola mətn yazdırmaq üçün ən təməl qlobal çıxış metodundan istifadə edin.",
      "İpucu 2: Mətn tipli məlumatları cüt dırnaq və ya tək dırnaq daxilində yazın.",
      "İpucu 3: console.log(\"Salam, JavaScript!\") sintaksisini tamamlayın."
    ],
    teslimIzahi: "console.log() qlobal konsol obyektinin metodudur və verilmiş məlumatı brauzerin developer konsoluna və ya terminala sətir olaraq ötürür."
  },
  {
    id: "exam-sec1-02",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Çoxsaylı Arqumentlərin Çapı",
    serif: "<code>istifadeciMəlumatı(ad, rol)</code> funksiyasını yazın. Tək bir <code>console.log()</code> çağırışında vergüllə ayıraraq <code>İstifadəçi:</code>, ötürülən ad və rolu çap edin. Funksiyanı <code>\"Aysel\", \"Tələbə\"</code> ilə çağırın.",
    gozlenilenCixis: "İstifadəçi: Aysel Tələbə",
    starterCode: "function istifadeciMəlumatı(ad, rol) {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciMəlumatı(\"Aysel\", \"Tələbə\");",
    solutionCode: "function istifadeciMəlumatı(ad, rol) {\n  console.log(\"İstifadəçi:\", ad, rol);\n}\n\nistifadeciMəlumatı(\"Aysel\", \"Tələbə\");",
    ipuclari: [
      "İpucu 1: console.log() metoduna bir neçə arqument ötürdükdə onlar avtomatik tək boşluqla birləşdirilir.",
      "İpucu 2: Mətn sabitini və parametr dəyişənlərini vergüllə ayıraraq sıralayın.",
      "İpucu 3: console.log(\"İstifadəçi:\", ad, rol) əmri hədəf formata tam uyğundur."
    ],
    teslimIzahi: "console.log() çoxsaylı parametrləri qəbul edərək onları ardıcıl boşluq simvolu ilə formatlayır və tək sətir halında çıxarır."
  },
  {
    id: "exam-sec1-03",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "İkisətirli Konsol Çıxışı",
    serif: "<code>ikiSetirliHesabat()</code> funksiyasını yazın. Birinci sətirdə <code>Başlanğıc</code>, ikinci sətirdə <code>Son</code> sözünü konsola yazdırın. Funksiyanı çağırın.",
    gozlenilenCixis: "Başlanğıc\nSon",
    starterCode: "function ikiSetirliHesabat() {\n  // Kodunuzu buraya yazın\n}\n\nikiSetirliHesabat();",
    solutionCode: "function ikiSetirliHesabat() {\n  console.log(\"Başlanğıc\");\n  console.log(\"Son\");\n}\n\nikiSetirliHesabat();",
    ipuclari: [
      "İpucu 1: Hər bir console.log() çağırışı avtomatik olaraq yeni sətrə keçid simvolu (\\n) əlavə edir.",
      "İpucu 2: İki ardıcıl console.log əmrindən və ya tək çıxışda '\\n' simvolundan istifadə edə bilərsiniz.",
      "İpucu 3: Birinci sətirdə 'Başlanğıc', növbəti sətirdə 'Son' çap edin."
    ],
    teslimIzahi: "Hər bir konsol əmri axına yeni sətir ayırıcısı ilə göndərilir, nəticədə ardıcıl çağırışlar alt-alta görünür."
  },
  {
    id: "exam-sec1-04",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Template Literals ilə Mətn Formatlaması",
    serif: "<code>formatliXosGeldin(ad, platforma, il)</code> funksiyasını təyin edin. ES6 Template Literals (bektik) istifadə edərək konsola <code>Xoş gəldiniz, Murad! Platforma: JSÖyrən (2026)</code> formatında çıxış verin. Funksiyanı <code>\"Murad\", \"JSÖyrən\", 2026</code> ilə çağırın.",
    gozlenilenCixis: "Xoş gəldiniz, Murad! Platforma: JSÖyrən (2026)",
    starterCode: "function formatliXosGeldin(ad, platforma, il) {\n  // Kodunuzu buraya yazın\n}\n\nformatliXosGeldin(\"Murad\", \"JSÖyrən\", 2026);",
    solutionCode: "function formatliXosGeldin(ad, platforma, il) {\n  console.log(`Xoş gəldiniz, ${ad}! Platforma: ${platforma} (${il})`);\n}\n\nformatliXosGeldin(\"Murad\", \"JSÖyrən\", 2026);",
    ipuclari: [
      "İpucu 1: Dəyişənləri mətn içərisinə daxil etmək üçün ES6 `${dəyişən}` sintaksisindən yararlanın.",
      "İpucu 2: Bütün mətni bektik (` `) işarələri daxilində yazın.",
      "İpucu 3: Nöqtələmə işarələrinin və mötərizələrin mövqeyinə diqqət yetirin."
    ],
    teslimIzahi: "Template Literals (ES6) sətir daxilində ifa olunan ifadələri (string interpolation) rahat şəkildə birləşdirməyə imkan verir və oxunaqlılığı artırır."
  },
  {
    id: "exam-sec1-05",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Dinamik İfadənin Çapı",
    serif: "<code>cəmHesabatı(a, b)</code> funksiyasını yazın. Konsola <code>[a] + [b] = [a+b]</code> formatında riyazi bərabərliyi yazdırın. Funksiyanı <code>25, 15</code> arqumentləri ilə çağırın.",
    gozlenilenCixis: "25 + 15 = 40",
    starterCode: "function cəmHesabatı(a, b) {\n  // Kodunuzu buraya yazın\n}\n\ncəmHesabatı(25, 15);",
    solutionCode: "function cəmHesabatı(a, b) {\n  console.log(`${a} + ${b} = ${a + b}`);\n}\n\ncəmHesabatı(25, 15);",
    ipuclari: [
      "İpucu 1: `${}` daxilində təkcə dəyişən deyil, birbaşa riyazi ifadə də yazıla bilər.",
      "İpucu 2: a və b arqumentlərinin cəmini `${a + b}` kimi hesablayın.",
      "İpucu 3: Çıxışın '25 + 15 = 40' şəklində formalaşmasını təmin edin."
    ],
    teslimIzahi: "Şablon sətirlər daxilindəki ${} bloku JavaScript mühərriki tərəfindən icra olunur və nəticəsi sətirə çevrilərək daxil edilir."
  },
  {
    id: "exam-sec1-06",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Qeydiyyat Kartı Formatlaması",
    serif: "<code>kartGoster(ad, yas, seher)</code> funksiyasını tərtib edin. Məlumatları <code>[KART] Ad: [ad] | Yaş: [yas] | Şəhər: [seher]</code> formatında konsola çıxarın. Funksiyanı <code>\"Elvin\", 24, \"Gəncə\"</code> ilə çağırın.",
    gozlenilenCixis: "[KART] Ad: Elvin | Yaş: 24 | Şəhər: Gəncə",
    starterCode: "function kartGoster(ad, yas, seher) {\n  // Kodunuzu buraya yazın\n}\n\nkartGoster(\"Elvin\", 24, \"Gəncə\");",
    solutionCode: "function kartGoster(ad, yas, seher) {\n  console.log(`[KART] Ad: ${ad} | Yaş: ${yas} | Şəhər: ${seher}`);\n}\n\nkartGoster(\"Elvin\", 24, \"Gəncə\");",
    ipuclari: [
      "İpucu 1: Verilən arqumentləri şablon sətir vasitəsilə ayrıcı simvollarla (|) birləşdirin.",
      "İpucu 2: Başlıqdakı kvadrat mötərizəni `[KART]` kimi qoruyun.",
      "İpucu 3: Boşluqların və iki nöqtələrin yerləşməsinə xüsusi diqqət yetirin."
    ],
    teslimIzahi: "Strukturlaşdırılmış sətir çıxışları konsol loqlarının oxunaqlı olmasını təmin edir və sazlama prosesini sürətləndirir."
  },
  {
    id: "exam-sec1-07",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Registr Həssaslığı və Konsol Əmrləri",
    serif: "<code>registrTesti()</code> funksiyasını yazın. JavaScript-in registr həssas (case-sensitive) olduğunu nəzərə alaraq kiçik hərflərlə <code>console.log()</code> vasitəsilə <code>JavaScript Dəqiqdir</code> mətni çıxarın.",
    gozlenilenCixis: "JavaScript Dəqiqdir",
    starterCode: "function registrTesti() {\n  // Kodunuzu buraya yazın\n}\n\nregistrTesti();",
    solutionCode: "function registrTesti() {\n  console.log(\"JavaScript Dəqiqdir\");\n}\n\nregistrTesti();",
    ipuclari: [
      "İpucu 1: Qlobal 'console' obyekti və 'log' metodu mütləq kiçik hərflərlə yazılmalıdır.",
      "İpucu 2: Böyük 'Console.Log' yazıldıqda ReferenceError və ya TypeError baş verər.",
      "İpucu 3: Çıxış mətni dəqiq 'JavaScript Dəqiqdir' olmalıdır."
    ],
    teslimIzahi: "JavaScript identifikatorlarda böyük və kiçik hərfləri tamamilə fərqli simvol kimi tanıyır. Qlobal obyektlər mühitdə kiçik hərflərlə qeydiyyatdan keçmişdir."
  },
  {
    id: "exam-sec1-08",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Dinamik Vergi və Yekun Qiymət Çıxışı",
    serif: "<code>fakturaHesabla(mehsul, qiymet, faiz)</code> funksiyasını təyin edin. ƏDV məbləğini (<code>qiymet * (faiz / 100)</code>) və yekun məbləği hesablayaraq konsola <code>Məhsul: [mehsul] | Vergi: [vergi] AZN | Yekun: [yekun] AZN</code> şəklində çap edin. Funksiyanı <code>\"Monitor\", 400, 18</code> ilə çağırın.",
    gozlenilenCixis: "Məhsul: Monitor | Vergi: 72 AZN | Yekun: 472 AZN",
    starterCode: "function fakturaHesabla(mehsul, qiymet, faiz) {\n  // Kodunuzu buraya yazın\n}\n\nfakturaHesabla(\"Monitor\", 400, 18);",
    solutionCode: "function fakturaHesabla(mehsul, qiymet, faiz) {\n  const vergi = qiymet * (faiz / 100);\n  const yekun = qiymet + vergi;\n  console.log(`Məhsul: ${mehsul} | Vergi: ${vergi} AZN | Yekun: ${yekun} AZN`);\n}\n\nfakturaHesabla(\"Monitor\", 400, 18);",
    ipuclari: [
      "İpucu 1: Əvvəlcə vergi və yekun qiyməti lokal sabitlərə hesablayın.",
      "İpucu 2: Riyazi ardıcıllıqda vurma və bölmə əməliyyatlarının mötərizə qaydasını qoruyun.",
      "İpucu 3: Şablon mətndə 'AZN' vahidini hər iki rəqəmdən sonra əlavə edin."
    ],
    teslimIzahi: "Mürəkkəb hesablamaları birbaşa şablon daxilində etmək əvəzinə ayrıca dəyişənlərə çıxarmaq kodun təmizliyini və saxlanılmasını təmin edir."
  },
  {
    id: "exam-sec1-09",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Strukturlaşdırılmış Cədvəl Başlığı",
    serif: "<code>cedvelBasligi(bolme1, bolme2, bolme3)</code> funksiyasını yazın. Konsola <code>[ID]        [AD]        [STATUS]</code> formatında, sütunlar arasında tab (\\t) simvolu ilə ayrılmış sətir çıxarın. Funksiyanı <code>\"101\", \"Kompüter\", \"Hazırdır\"</code> arqumentləri ilə növbəti sətirdə məlumatı çap edəcək şəkildə tamamlayın.",
    gozlenilenCixis: "ID\tAD\tSTATUS\n101\tKompüter\tHazırdır",
    starterCode: "function cedvelBasligi(id, ad, status) {\n  // Kodunuzu buraya yazın\n}\n\ncedvelBasligi(\"101\", \"Kompüter\", \"Hazırdır\");",
    solutionCode: "function cedvelBasligi(id, ad, status) {\n  console.log(`ID\\tAD\\tSTATUS\\n${id}\\t${ad}\\t${status}`);\n}\n\ncedvelBasligi(\"101\", \"Kompüter\", \"Hazırdır\");",
    ipuclari: [
      "İpucu 1: Xüsusi idarəetmə simvollarından: \\t (tabulasiya) və \\n (yeni sətir) istifadə edin.",
      "İpucu 2: İki sətri tək bir şablon sətirlə və ya iki ayrı log çağırışı ilə qura bilərsiniz.",
      "İpucu 3: Sütun adları və dəyərlər arasında \\t simvolunu dəqiq yerləşdirin."
    ],
    teslimIzahi: "Escape simvolları (\\t, \\n) konsol çıxışlarını cədvəl formasında hizalamaq üçün standart Unix formatlama üsuludur."
  },
  {
    id: "exam-sec1-10",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Dəyişən Dəyərinin Addım-addım İzlənməsi",
    serif: "<code>izleme(ilkinDeyer)</code> funksiyasını yazın. Dəyişənə ilkin qiymət verin, ona 10 əlavə edin, sonra onu 2-yə vurun. Hər addımda konsola <code>Addım 1: [qiymet]</code> və <code>Addım 2: [qiymet]</code> formatında çıxış verin. Funksiyanı <code>5</code> arqumenti ilə çağırın.",
    gozlenilenCixis: "Addım 1: 15\nAddım 2: 30",
    starterCode: "function izleme(ilkinDeyer) {\n  // Kodunuzu buraya yazın\n}\n\nizleme(5);",
    solutionCode: "function izleme(ilkinDeyer) {\n  let x = ilkinDeyer + 10;\n  console.log(`Addım 1: ${x}`);\n  x *= 2;\n  console.log(`Addım 2: ${x}`);\n}\n\nizleme(5);",
    ipuclari: [
      "İpucu 1: Dəyişənin qiyməti dəyişəcəyi üçün 'let' açar sözü ilə elan edin.",
      "İpucu 2: Birinci əməliyyatdan sonra log çıxışı verin, ardınca *= 2 tətbiq edib ikinci çıxışı verin.",
      "İpucu 3: 5 + 10 = 15, sonra 15 * 2 = 30 nəticəsi alınmalıdır."
    ],
    teslimIzahi: "Dəyişənlərin vəziyyət dəyişikliyinin addım-addım konsola çıxarılması (tracing) alqoritmlərin sazlanmasında təməl texnikadır."
  },
  {
    id: "exam-sec1-11",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Dinamik Sistem Status Loqqeri",
    serif: "<code>statusLoq(modul, kod, aktivdir)</code> funksiyasını qurun. Əgər <code>aktivdir</code> true olarsa konsola <code>[SİSTEM: OK] [modul] (Kod: [kod]) aktivdir</code>, false olarsa <code>[SİSTEM: XƏTA] [modul] (Kod: [kod]) dayandırılıb</code> yazdırın. Funksiyanı ardıcıl olaraq <code>(\"Verilənlər Bazası\", 200, true)</code> və <code>(\"Ödəniş Şlüzü\", 500, false)</code> ilə çağırın.",
    gozlenilenCixis: "[SİSTEM: OK] Verilənlər Bazası (Kod: 200) aktivdir\n[SİSTEM: XƏTA] Ödəniş Şlüzü (Kod: 500) dayandırılıb",
    starterCode: "function statusLoq(modul, kod, aktivdir) {\n  // Kodunuzu buraya yazın\n}\n\nstatusLoq(\"Verilənlər Bazası\", 200, true);\nstatusLoq(\"Ödəniş Şlüzü\", 500, false);",
    solutionCode: "function statusLoq(modul, kod, aktivdir) {\n  const statusMetni = aktivdir ? \"[SİSTEM: OK]\" : \"[SİSTEM: XƏTA]\";\n  const veziyyet = aktivdir ? \"aktivdir\" : \"dayandırılıb\";\n  console.log(`${statusMetni} ${modul} (Kod: ${kod}) ${veziyyet}`);\n}\n\nstatusLoq(\"Verilənlər Bazası\", 200, true);\nstatusLoq(\"Ödəniş Şlüzü\", 500, false);",
    ipuclari: [
      "İpucu 1: 'aktivdir' parametrinin boolean dəyərini ternary (? :) operatoru ilə yoxlayın.",
      "İpucu 2: Mesajın prefiksini və son sözünü şərtə uyğun dinamik qurun.",
      "İpucu 3: İki ardıcıl çağırış iki ayrı sətir çıxaracaq."
    ],
    teslimIzahi: "Şərtli çıxışlar proqram icrasının vəziyyətinə uyğun olaraq mətn şablonlarını dinamik modifikasiya etməyə xidmət edir."
  },
  {
    id: "exam-sec1-12",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Avtomatlaşdırılmış Qəbz Generatoru",
    serif: "<code>qebzYarat(satisNo, mehsullar)</code> funksiyasını tərtib edin. <code>mehsullar</code> ad və qiymət sahələrindən ibarət obyektlər massividir. Funksiya birinci sətirdə <code>=== QƏBZ #[satisNo] ===</code>, sonra hər bir məhsulu <code>- [ad]: [qiymet] AZN</code>, yekunda isə <code>Toplam: [cəm] AZN</code> şəklində konsola çap etməlidir. Funksiyanı <code>\"A-102\", [{ad: \"Çörək\", qiymet: 1}, {ad: \"Süd\", qiymet: 2}]</code> ilə çağırın.",
    gozlenilenCixis: "=== QƏBZ #A-102 ===\n- Çörək: 1 AZN\n- Süd: 2 AZN\nToplam: 3 AZN",
    starterCode: "function qebzYarat(satisNo, mehsullar) {\n  // Kodunuzu buraya yazın\n}\n\nqebzYarat(\"A-102\", [{ad: \"Çörək\", qiymet: 1}, {ad: \"Süd\", qiymet: 2}]);",
    solutionCode: "function qebzYarat(satisNo, mehsullar) {\n  console.log(`=== QƏBZ #${satisNo} ===`);\n  let cem = 0;\n  for (let i = 0; i < mehsullar.length; i++) {\n    const item = mehsullar[i];\n    console.log(`- ${item.ad}: ${item.qiymet} AZN`);\n    cem += item.qiymet;\n  }\n  console.log(`Toplam: ${cem} AZN`);\n}\n\nqebzYarat(\"A-102\", [{ad: \"Çörək\", qiymet: 1}, {ad: \"Süd\", qiymet: 2}]);",
    ipuclari: [
      "İpucu 1: Əvvəlcə qəbz başlığını konsola çıxarın və 'cem' sayğacını sıfır təyin edin.",
      "İpucu 2: Massivin hər bir elementini dövr edərək qiymətlərini toplayın və sətir-sətir çap edin.",
      "İpucu 3: Dövrdən sonra yekun toplam məbləğini çap edin."
    ],
    teslimIzahi: "Massiv kolleksiyasının elementləri üzərində iterasiya apararaq ara cəmləri hesablamaq və strukturlaşdırılmış hesabat tərtib etmək təməl praktiki tapşırıqdır."
  },
  {
    id: "exam-sec1-13",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Tərəqqi Zolağının Konsol Simulyasiyası",
    serif: "<code>progressLoq(faiz)</code> funksiyasını yazın. Faizə uyğun olaraq 10 simvolluq tərəqqi zolağı qurun: hər 10% üçün <code>#</code>, qalan hissə üçün <code>-</code> simvolu qoyun. Konsola <code>[[zolaq]] [faiz]% Tamamlandı</code> formatında çap edin. Funksiyanı ardıcıl olaraq <code>40</code> və <code>80</code> üçün çağırın.",
    gozlenilenCixis: "[####------] 40% Tamamlandı\n[########--] 80% Tamamlandı",
    starterCode: "function progressLoq(faiz) {\n  // Kodunuzu buraya yazın\n}\n\nprogressLoq(40);\nprogressLoq(80);",
    solutionCode: "function progressLoq(faiz) {\n  const say = Math.floor(faiz / 10);\n  const zolaq = \"#\".repeat(say) + \"-\".repeat(10 - say);\n  console.log(`[${zolaq}] ${faiz}% Tamamlandı`);\n}\n\nprogressLoq(40);\nprogressLoq(80);",
    ipuclari: [
      "İpucu 1: Simvolların sayını hesablamaq üçün 'faiz / 10' tam hissəsindən istifadə edin.",
      "İpucu 2: Mətn təkrarı üçün String.prototype.repeat() metodundan yararlana bilərsiniz.",
      "İpucu 3: Kvadrat mötərizə içərisində 10 simvolluq kombinasiyanı və ardınca faiz mətnini yerləşdirin."
    ],
    teslimIzahi: "String.repeat() metodu verilmiş simvolu göstərilən sayda çoxaldaraq konsolda CLI üslublu tərəqqi vizualizasiyası yaratmağa imkan verir."
  },
  {
    id: "exam-sec1-14",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Parametrik Çoxsəviyyəli Çıxış Formatlayıcı",
    serif: "<code>formatliLoqqer(seviyye, mesaj, parametrler)</code> funksiyasını qurun. Səviyyəni böyük hərflərlə <code>[SEVIYYE]</code> kimi, ardınca mesajı, parametrləri isə <code>param1=deyer1, param2=deyer2</code> formatında çıxarın. Funksiyanı <code>\"info\", \"İstifadəçi daxil oldu\", { ip: \"127.0.0.1\", port: 8080 }</code> ilə çağırın.",
    gozlenilenCixis: "[INFO] İstifadəçi daxil oldu (ip=127.0.0.1, port=8080)",
    starterCode: "function formatliLoqqer(seviyye, mesaj, parametrler) {\n  // Kodunuzu buraya yazın\n}\n\nformatliLoqqer(\"info\", \"İstifadəçi daxil oldu\", { ip: \"127.0.0.1\", port: 8080 });",
    solutionCode: "function formatliLoqqer(seviyye, mesaj, parametrler) {\n  const seviyyeBöyük = seviyye.toUpperCase();\n  const pStr = Object.entries(parametrler).map(([k, v]) => `${k}=${v}`).join(\", \");\n  console.log(`[${seviyyeBöyük}] ${mesaj} (${pStr})`);\n}\n\nformatliLoqqer(\"info\", \"İstifadəçi daxil oldu\", { ip: \"127.0.0.1\", port: 8080 });",
    ipuclari: [
      "İpucu 1: Səviyyəni toUpperCase() ilə böyük hərflərə çevirin.",
      "İpucu 2: Obyekt parametrlərini açar=dəyər şəklində birləşdirmək üçün Object.entries() istifadə edin.",
      "İpucu 3: Nəticəni `[SEVİYYƏ] Mesaj (k1=v1, k2=v2)` formatında tamamlayın."
    ],
    teslimIzahi: "Strukturlaşdırılmış qeydiyyat sistemləri (structured logging) obyekt parametrlərini sətir açar-dəyər formatına çevirərək axtarış və analitika üçün əlverişli edir."
  },
  {
    id: "exam-sec1-15",
    bolmeId: 1,
    merheleId: 1,
    cetinlik: "EKSPERT",
    basliq: "İstehsalat Səviyyəli Konsol Loqqer Arxitekturası",
    serif: "Fərdi <code>MiniLogger</code> konstruktoru/sinfi yaradın. Bu obyekt <code>prefix</code> dəyəri qəbul edir və iki metoda malikdir: <code>log(msg)</code> metodu konsola <code>[prefix][LOG] [msg]</code>, <code>warn(msg)</code> metodu isə <code>[prefix][WARN] [msg]</code> çıxarır. Prefiksi <code>\"[PROD]\"</code> olan bir loqqer yaradın və ardıcıl olaraq <code>logger.log(\"Server başladı\")</code> və <code>logger.warn(\"Yüksək yaddaş istifadəsi\")</code> çağırın.",
    gozlenilenCixis: "[PROD][LOG] Server başladı\n[PROD][WARN] Yüksək yaddaş istifadəsi",
    starterCode: "function MiniLogger(prefix) {\n  // Kodunuzu buraya yazın\n}\n\nconst logger = new MiniLogger(\"[PROD]\");\nlogger.log(\"Server başladı\");\nlogger.warn(\"Yüksək yaddaş istifadəsi\");",
    solutionCode: "function MiniLogger(prefix) {\n  this.prefix = prefix;\n  this.log = function(msg) {\n    console.log(`${this.prefix}[LOG] ${msg}`);\n  };\n  this.warn = function(msg) {\n    console.log(`${this.prefix}[WARN] ${msg}`);\n  };\n}\n\nconst logger = new MiniLogger(\"[PROD]\");\nlogger.log(\"Server başladı\");\nlogger.warn(\"Yüksək yaddaş istifadəsi\");",
    ipuclari: [
      "İpucu 1: Konstruktor daxilində 'this.prefix' xassəsini saxlayın.",
      "İpucu 2: this.log və this.warn metodlarını təyin edərək konsola prefiks və loq növünü formatlayın.",
      "İpucu 3: [PROD][LOG] və [PROD][WARN] formatlarına xüsusi diqqət yetirin."
    ],
    teslimIzahi: "İstehsalat loqqerləri müxtəlif mühitləri (PROD, DEV, TEST) fərqləndirmək üçün modulyar prefikslər və çoxpilləli loq səviyyələri (LOG, WARN, ERROR) tətbiq edir."
  },

  // ==========================================
  // BÖLMƏ 2: Dəyişənlər və Primitiv Tiplər (15 sual)
  // ==========================================
  {
    id: "exam-sec2-01",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "let ilə Dəyişənin Yenilənməsi",
    serif: "<code>deyiseniYenile()</code> funksiyasını təyin edin. <code>let xal = 50;</code> elan edin, sonrakı sətirdə onun dəyərini <code>100</code> olaraq dəyişdirin və konsola çıxarın.",
    gozlenilenCixis: "100",
    starterCode: "function deyiseniYenile() {\n  // Kodunuzu buraya yazın\n}\n\ndeyiseniYenile();",
    solutionCode: "function deyiseniYenile() {\n  let xal = 50;\n  xal = 100;\n  console.log(xal);\n}\n\ndeyiseniYenile();",
    ipuclari: [
      "İpucu 1: let açar sözü ilə yaradılan dəyişənlərə sonradan yeni dəyər mənimsətmək mümkündür.",
      "İpucu 2: Yenidən mənimsətmə zamanı yenidən 'let' yazmağa ehtiyac yoxdur, birbaşa 'xal = 100;' yazın.",
      "İpucu 3: Sonda console.log(xal) ilə qiyməti çap edin."
    ],
    teslimIzahi: "let açar sözü blok görünüş sahəsinə (block-scoped) malik dəyişən yaradır və dəyərinin sonradan təkrar mənimsədilməsinə icazə verir."
  },
  {
    id: "exam-sec2-02",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "const ilə Sabit Elanı",
    serif: "<code>sabitiGoster()</code> funksiyasını yazın. <code>const PI = 3.14;</code> elan edin və konsola <code>PI dəyəri: [PI]</code> formatında çıxarın.",
    gozlenilenCixis: "PI dəyəri: 3.14",
    starterCode: "function sabitiGoster() {\n  // Kodunuzu buraya yazın\n}\n\nsabitiGoster();",
    solutionCode: "function sabitiGoster() {\n  const PI = 3.14;\n  console.log(`PI dəyəri: ${PI}`);\n}\n\nsabitiGoster();",
    ipuclari: [
      "İpucu 1: Sabit dəyərlər const açar sözü ilə elan olunur və yaradılarkən mütləq ilkin dəyər almalıdır.",
      "İpucu 2: Şablon sətir və ya vergüllə konsol çıxışını qurun.",
      "İpucu 3: Çıxış dəqiq 'PI dəyəri: 3.14' olmalıdır."
    ],
    teslimIzahi: "const sabiti dəyişdirilə bilməyən (reassignment-forbidden) identifikator yaradır və təsadüfi dəyişikliklərin qarşısını alır."
  },
  {
    id: "exam-sec2-03",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "typeof ilə Tip Təyini",
    serif: "<code>tipYoxla(deyer)</code> funksiyasını yazın. <code>typeof deyer</code> nəticəsini konsola çıxarın. Funksiyanı ardıcıl olaraq <code>\"Salam\"</code> və <code>42</code> üçün çağırın.",
    gozlenilenCixis: "string\nnumber",
    starterCode: "function tipYoxla(deyer) {\n  // Kodunuzu buraya yazın\n}\n\ntipYoxla(\"Salam\");\ntipYoxla(42);",
    solutionCode: "function tipYoxla(deyer) {\n  console.log(typeof deyer);\n}\n\ntipYoxla(\"Salam\");\ntipYoxla(42);",
    ipuclari: [
      "İpucu 1: typeof operatoru verilmiş dəyərin primitiv tipini sətir olaraq qaytarır.",
      "İpucu 2: console.log(typeof deyer) yazmaq kifayətdir.",
      "İpucu 3: Mətn üçün 'string', tam/kəsr ədədlər üçün 'number' çıxacaq."
    ],
    teslimIzahi: "typeof operatoru JavaScript-də dinamik tipləşmə şəraitində dəyişənin cari tipini runtime zamanı yoxlamaq üçün əsas vasitədir."
  },
  {
    id: "exam-sec2-04",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Boolean Tipinin Təyini və İnkarı",
    serif: "<code>booleanYoxla(status)</code> funksiyasını yazın. Konsola <code>Dəyər: [status] | İnkar: [!status]</code> formatında çıxış verin. Funksiyanı <code>true</code> ilə çağırın.",
    gozlenilenCixis: "Dəyər: true | İnkar: false",
    starterCode: "function booleanYoxla(status) {\n  // Kodunuzu buraya yazın\n}\n\nbooleanYoxla(true);",
    solutionCode: "function booleanYoxla(status) {\n  console.log(`Dəyər: ${status} | İnkar: ${!status}`);\n}\n\nbooleanYoxla(true);",
    ipuclari: [
      "İpucu 1: Boolean tipi yalnız iki dəyərə malikdir: true və false.",
      "İpucu 2: Məntiqi inkar üçün '!' operatorundan istifadə edin.",
      "İpucu 3: !true dəyəri false qaytaracaq."
    ],
    teslimIzahi: "Məntiqi inkar operatoru (!) boolean dəyərini əksinə çevirir və şərtlərin idarə olunmasında mühüm rol oynayır."
  },
  {
    id: "exam-sec2-05",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "undefined və null Fərqinin Təhlili",
    serif: "<code>bosluqAnalizi()</code> funksiyasını yazın. Dəyər verilməmiş <code>let a;</code> və qəsdən boş saxlanılmış <code>let b = null;</code> dəyişənlərini elan edin. Konsola <code>a: undefined (undefined) | b: null (object)</code> formatında onların dəyərini və mötərizədə typeof tipini çap edin.",
    gozlenilenCixis: "a: undefined (undefined) | b: null (object)",
    starterCode: "function bosluqAnalizi() {\n  // Kodunuzu buraya yazın\n}\n\nbosluqAnalizi();",
    solutionCode: "function bosluqAnalizi() {\n  let a;\n  let b = null;\n  console.log(`a: ${a} (${typeof a}) | b: ${b} (${typeof b})`);\n}\n\nbosluqAnalizi();",
    ipuclari: [
      "İpucu 1: Elan olunub qiymət verilməyən dəyişən avtomatik 'undefined' olur.",
      "İpucu 2: JavaScript-də tarixi qüsur səbəbindən typeof null 'object' qaytarır.",
      "İpucu 3: Şablon sətirdə dəyərləri və typeof nəticələrini ardıcıl yerləşdirin."
    ],
    teslimIzahi: "undefined mühərrik tərəfindən təyin olunmamış vəziyyəti, null isə proqramçı tərəfindən qəsdən boş buraxılmış referansı bildirir."
  },
  {
    id: "exam-sec2-06",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Number() ilə Tip Çevrilməsi",
    serif: "<code>metniTopla(strA, strB)</code> funksiyasını yazın. Gələn mətn tipli rəqəmləri <code>Number()</code> funksiyası ilə ədədə çevirib riyazi cəmini tapın və konsola <code>Cəm: [cem]</code> formatında çıxarın. Funksiyanı <code>\"30\", \"20\"</code> ilə çağırın.",
    gozlenilenCixis: "Cəm: 50",
    starterCode: "function metniTopla(strA, strB) {\n  // Kodunuzu buraya yazın\n}\n\nmetniTopla(\"30\", \"20\");",
    solutionCode: "function metniTopla(strA, strB) {\n  const cem = Number(strA) + Number(strB);\n  console.log(`Cəm: ${cem}`);\n}\n\nmetniTopla(\"30\", \"20\");",
    ipuclari: [
      "İpucu 1: Əgər sətirləri çevirmədən toplasanız, string konkatenasiyası baş verər (\"3020\").",
      "İpucu 2: Hər iki arqumenti əvvəlcə Number() ilə ədəd tipinə gətirin.",
      "İpucu 3: 30 + 20 = 50 nəticəsini formatlı çap edin."
    ],
    teslimIzahi: "Number() qlobal funksiyası mətn tipli rəqəmləri riyazi hesablama üçün ədəd tipinə çevirir və konkatenasiya təhlükəsini aradan qaldırır."
  },
  {
    id: "exam-sec2-07",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "String() ilə Ədədin Mətnə Çevrilməsi",
    serif: "<code>metneCevir(kod, say)</code> funksiyasını yazın. Ədədləri <code>String()</code> ilə mətnə çevirərək aralarında tire işarəsi ilə birləşdirin və konsola <code>Partiya: [kod]-[say]</code> kimi çap edin. Funksiyanı <code>994, 77</code> ilə çağırın.",
    gozlenilenCixis: "Partiya: 994-77",
    starterCode: "function metneCevir(kod, say) {\n  // Kodunuzu buraya yazın\n}\n\nmetneCevir(994, 77);",
    solutionCode: "function metneCevir(kod, say) {\n  const netice = String(kod) + \"-\" + String(say);\n  console.log(`Partiya: ${netice}`);\n}\n\nmetneCevir(994, 77);",
    ipuclari: [
      "İpucu 1: String() funksiyası istənilən dəyəri mətn tipinə çevirir.",
      "İpucu 2: Çevrilmiş sətirləri '+' operatoru və ya şablon sətirlə birləşdirin.",
      "İpucu 3: Nəticənin 'Partiya: 994-77' olmasını təmin edin."
    ],
    teslimIzahi: "Açıq-aşkar sətir çevrilməsi (explicit conversion) üçün String() və ya .toString() metodundan istifadə olunur."
  },
  {
    id: "exam-sec2-08",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Falsy Dəyərlərin Boolean Analizi",
    serif: "<code>falsyYoxla(deyer)</code> funksiyasını yazın. Verilmiş dəyərin <code>Boolean(deyer)</code> çevrilməsini konsola <code>Dəyər: [deyer] -> [true/false]</code> şəklində çıxarın. Funksiyanı ardıcıl olaraq <code>0</code>, <code>\"\"</code> (boş sətir) və <code>\"Salam\"</code> üçün çağırın.",
    gozlenilenCixis: "Dəyər: 0 -> false\nDəyər:  -> false\nDəyər: Salam -> true",
    starterCode: "function falsyYoxla(deyer) {\n  // Kodunuzu buraya yazın\n}\n\nfalsyYoxla(0);\nfalsyYoxla(\"\");\nfalsyYoxla(\"Salam\");",
    solutionCode: "function falsyYoxla(deyer) {\n  console.log(`Dəyər: ${deyer} -> ${Boolean(deyer)}`);\n}\n\nfalsyYoxla(0);\nfalsyYoxla(\"\");\nfalsyYoxla(\"Salam\");",
    ipuclari: [
      "İpucu 1: JavaScript-də 0, \"\", null, undefined, NaN və false 'falsy' sayılır.",
      "İpucu 2: Boolean(deyer) və ya '!!deyer' vasitəsilə boolean ekvivalentini əldə edin.",
      "İpucu 3: Qeyri-boş sətirlər (\"Salam\") 'truthy' olduğu üçün true qaytaracaq."
    ],
    teslimIzahi: "Boolean çevrilməsində yalnız xüsusi 6 falsy dəyər false qaytarır, qalan bütün dəyərlər (hətta boş massiv və obyektlər belə) true nəticə verir."
  },
  {
    id: "exam-sec2-09",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "NaN (Not-a-Number) və Təhlükəsiz Yoxlanış",
    serif: "<code>nanYoxla(deyer)</code> funksiyasını tərtib edin. Mətnin ədədə çevrilməsi nəticəsində yaranan NaN vəziyyətini <code>Number.isNaN()</code> metodu ilə yoxlayaraq konsola <code>Hesablama: [x] | NaN-dir: [true/false]</code> yazdırın. Funksiyanı <code>Number(\"alma\")</code> və <code>Number(\"100\")</code> üçün çağırın.",
    gozlenilenCixis: "Hesablama: NaN | NaN-dir: true\nHesablama: 100 | NaN-dir: false",
    starterCode: "function nanYoxla(deyer) {\n  // Kodunuzu buraya yazın\n}\n\nnanYoxla(Number(\"alma\"));\nnanYoxla(Number(\"100\"));",
    solutionCode: "function nanYoxla(deyer) {\n  console.log(`Hesablama: ${deyer} | NaN-dir: ${Number.isNaN(deyer)}`);\n}\n\nnanYoxla(Number(\"alma\"));\nnanYoxla(Number(\"100\"));",
    ipuclari: [
      "İpucu 1: Qeyri-rəqəm mətnlər Number() ilə çevrildikdə NaN qaytarır.",
      "İpucu 2: NaN özü-özünə bərabər olmayan yeganə dəyərdir (NaN === NaN -> false).",
      "İpucu 3: Dəqiq yoxlama üçün Number.isNaN() metodundan istifadə edin."
    ],
    teslimIzahi: "NaN riyazi xətanı bildirən xüsusi 'number' tipidir. Number.isNaN() tip çevirməsi etmədən dəyərin bilavasitə NaN olub-olmadığını yoxlayır."
  },
  {
    id: "exam-sec2-10",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Dəyişənlərin Dəyər Dəyiş-düyüşü (Swap)",
    serif: "<code>swapEt(a, b)</code> funksiyasını yazın. Üçüncü köməkçi dəyişəndən istifadə edərək <code>a</code> və <code>b</code>-nin qiymətlərini dəyişdirin və konsola <code>Əvvəl: a=[a], b=[b] -> Sonra: a=[yeniA], b=[yeniB]</code> formatında çıxarın. Funksiyanı <code>10, 20</code> ilə çağırın.",
    gozlenilenCixis: "Əvvəl: a=10, b=20 -> Sonra: a=20, b=10",
    starterCode: "function swapEt(a, b) {\n  // Kodunuzu buraya yazın\n}\n\nswapEt(10, 20);",
    solutionCode: "function swapEt(a, b) {\n  const evvelA = a, evvelB = b;\n  let temp = a;\n  a = b;\n  b = temp;\n  console.log(`Əvvəl: a=${evvelA}, b=${evvelB} -> Sonra: a=${a}, b=${b}`);\n}\n\nswapEt(10, 20);",
    ipuclari: [
      "İpucu 1: 'a'-nın ilkin qiymətini itirməmək üçün onu müvəqqəti 'temp' dəyişənində saxlayın.",
      "İpucu 2: 'a'-ya 'b'-nin dəyərini, 'b'-yə isə 'temp'-in dəyərini mənimsədin.",
      "İpucu 3: Formatı dəqiq qoruyaraq çap edin."
    ],
    teslimIzahi: "Dəyişənlərin swap edilməsi alqoritmlərdə (məsələn, çeşidləmədə) ən çox tətbiq olunan təməl məntiqi əməliyyatdır."
  },
  {
    id: "exam-sec2-11",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Çoxpilləli Tip Çevrilməsi və Müqayisə",
    serif: "<code>coxpilleliMuqayise(val1, val2)</code> funksiyasını yazın. Dəyərlərin həm ciddi bərabərliyini (<code>===</code>), həm də tiplərini ədədə çevirdikdən sonrakı bərabərliyini yoxlayın. Konsola <code>Dəyərlər: [val1] və [val2] | Ciddi: [ciddi] | Ədəd kimi: [ededKimi]</code> yazdırın. Funksiyanı <code>\"50\", 50</code> ilə çağırın.",
    gozlenilenCixis: "Dəyərlər: 50 və 50 | Ciddi: false | Ədəd kimi: true",
    starterCode: "function coxpilleliMuqayise(val1, val2) {\n  // Kodunuzu buraya yazın\n}\n\ncoxpilleliMuqayise(\"50\", 50);",
    solutionCode: "function coxpilleliMuqayise(val1, val2) {\n  const ciddi = val1 === val2;\n  const ededKimi = Number(val1) === Number(val2);\n  console.log(`Dəyərlər: ${val1} və ${val2} | Ciddi: ${ciddi} | Ədəd kimi: ${ededKimi}`);\n}\n\ncoxpilleliMuqayise(\"50\", 50);",
    ipuclari: [
      "İpucu 1: '===' müqayisəsində string ilə number fərqli tiplər olduğu üçün false qaytaracaq.",
      "İpucu 2: Number() tətbiq edildikdən sonra hər ikisi 50 olacaq və true verəcək.",
      "İpucu 3: Çıxış şablonunu dəqiq qurun."
    ],
    teslimIzahi: "Ciddi bərabərlik tip çevirməsi etmədən həm tipi, həm dəyəri yoxlayır. Tip uyğunsuzluğu olduqda proqramçı açıq çevirmə (explicit casting) etməlidir."
  },
  {
    id: "exam-sec2-12",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Böyük Ədədlər (BigInt) və Dəqiqlik",
    serif: "<code>bigintHesabla()</code> funksiyasını qurun. Standart Number üçün maksimum təhlükəsiz həddi (<code>Number.MAX_SAFE_INTEGER</code>) və ona <code>1n</code> və <code>2n</code> əlavə edilmiş <code>BigInt</code> dəyərlərini konsola <code>Maks: [max] | BigInt1: [b1] | BigInt2: [b2]</code> formatında çıxarın.",
    gozlenilenCixis: "Maks: 9007199254740991 | BigInt1: 9007199254740992 | BigInt2: 9007199254740993",
    starterCode: "function bigintHesabla() {\n  // Kodunuzu buraya yazın\n}\n\nbigintHesabla();",
    solutionCode: "function bigintHesabla() {\n  const max = Number.MAX_SAFE_INTEGER;\n  const b1 = BigInt(max) + 1n;\n  const b2 = BigInt(max) + 2n;\n  console.log(`Maks: ${max} | BigInt1: ${b1} | BigInt2: ${b2}`);\n}\n\nbigintHesabla();",
    ipuclari: [
      "İpucu 1: Number.MAX_SAFE_INTEGER dəyəri 9007199254740991-dir.",
      "İpucu 2: Bu həddi aşan ədədlər üçün sonuna 'n' əlavə edilərək BigInt tipi istifadə olunur.",
      "İpucu 3: BigInt dəyərləri standart number ilə birbaşa toplana bilməz, hər ikisi BigInt olmalıdır."
    ],
    teslimIzahi: "BigInt tipi 64-bitlik IEEE-754 limitindən kənara çıxan istənilən böyüklükdə tam ədədləri tam dəqiqliklə saxlamaq üçün ES2020-də əlavə olunmuşdur."
  },
  {
    id: "exam-sec2-13",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Təhlükəsiz Tip Validasiya Funksiyası",
    serif: "<code>tipDogrula(deyer, gozlenilenTip)</code> funksiyasını tərtib edin. Əgər dəyərin <code>typeof</code> tipi <code>gozlenilenTip</code> ilə tam uyğundursa konsola <code>[DOĞRU] Dəyər: [deyer] tiplidir</code>, əks halda <code>[XƏTA] Gözlənilən: [gozlenilenTip], lakin alındı: [faktiki]</code> yazdırın. Funksiyanı ardıcıl olaraq <code>(25, \"number\")</code> və <code>(\"Bakı\", \"number\")</code> ilə çağırın.",
    gozlenilenCixis: "[DOĞRU] Dəyər: number tiplidir\n[XƏTA] Gözlənilən: number, lakin alındı: string",
    starterCode: "function tipDogrula(deyer, gozlenilenTip) {\n  // Kodunuzu buraya yazın\n}\n\ntipDogrula(25, \"number\");\ntipDogrula(\"Bakı\", \"number\");",
    solutionCode: "function tipDogrula(deyer, gozlenilenTip) {\n  const faktiki = typeof deyer;\n  if (faktiki === gozlenilenTip) {\n    console.log(`[DOĞRU] Dəyər: ${gozlenilenTip} tiplidir`);\n  } else {\n    console.log(`[XƏTA] Gözlənilən: ${gozlenilenTip}, lakin alındı: ${faktiki}`);\n  }\n}\n\ntipDogrula(25, \"number\");\ntipDogrula(\"Bakı\", \"number\");",
    ipuclari: [
      "İpucu 1: typeof deyer ilə real tipi əldə edib gözlənilən tip ilə müqayisə edin.",
      "İpucu 2: if-else budaqlanmasından istifadə edərək müvafiq çıxışı qurun.",
      "İpucu 3: Birinci çağırış [DOĞRU], ikinci isə [XƏTA] çıxışı verəcək."
    ],
    teslimIzahi: "Tip yoxlayıcı funksiyalar (runtime type guards) funksiyalara ötürülən arqumentlərin səhv tipli olmasının qarşısını alaraq proqramın dayanıqlığını təmin edir."
  },
  {
    id: "exam-sec2-14",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Məhsulun Primitiv Tiplərlə İndekslənməsi",
    serif: "<code>mehsulIndeksi(ad, qiymet, endirimde, anbarSay)</code> funksiyasını qurun. Funksiya gələn arqumentləri tip çevirmələri ilə təhlükəsiz şəkildə formata salsın: ad mütləq String, qiymet Number, endirimde Boolean, anbarSay Number olsun. Konsola <code>Məhsul: [ad] | Qiymət: [qiymet] AZN | Endirim: [endirimde] | Say: [anbarSay]</code> çıxarın. Funksiyanı <code>(101, \"49.9\", 1, \"15\")</code> ilə çağırın.",
    gozlenilenCixis: "Məhsul: 101 | Qiymət: 49.9 AZN | Endirim: true | Say: 15",
    starterCode: "function mehsulIndeksi(ad, qiymet, endirimde, anbarSay) {\n  // Kodunuzu buraya yazın\n}\n\nmehsulIndeksi(101, \"49.9\", 1, \"15\");",
    solutionCode: "function mehsulIndeksi(ad, qiymet, endirimde, anbarSay) {\n  const sAd = String(ad);\n  const nQiymet = Number(qiymet);\n  const bEndirim = Boolean(endirimde);\n  const nSay = Number(anbarSay);\n  console.log(`Məhsul: ${sAd} | Qiymət: ${nQiymet} AZN | Endirim: ${bEndirim} | Say: ${nSay}`);\n}\n\nmehsulIndeksi(101, \"49.9\", 1, \"15\");",
    ipuclari: [
      "İpucu 1: Bütün girişləri uyğun primitiv konstruktorları ilə (String, Number, Boolean) kasting edin.",
      "İpucu 2: 1 boolean olaraq true-ya çevriləcək.",
      "İpucu 3: Formatlanmış məlumatı tək sətirdə çap edin."
    ],
    teslimIzahi: "İstifadəçi formalarından gələn qarışıq tipli məlumatların ilkin mərhələdə primitiv tiplərə sanitarizasiyası (type casting) etibarlı tətbiqlərin əsas tələbidir."
  },
  {
    id: "exam-sec2-15",
    bolmeId: 2,
    merheleId: 1,
    cetinlik: "EKSPERT",
    basliq: "Dinamik Tip Analizatoru və Xülasə Generatoru",
    serif: "<code>analizator(kolleksiya)</code> funksiyasını yaradın. <code>kolleksiya</code> müxtəlif tipli dəyərlər massividir. Funksiya massivdəki hər tipin neçə dəfə təkrarlandığını hesablasın və konsola <code>string: [say], number: [say], boolean: [say]</code> formatında çıxarsın. Funksiyanı <code>[\"Salam\", 42, true, \"Dünya\", 100, false, 3.14]</code> ilə çağırın.",
    gozlenilenCixis: "string: 2, number: 3, boolean: 2",
    starterCode: "function analizator(kolleksiya) {\n  // Kodunuzu buraya yazın\n}\n\nanalizator([\"Salam\", 42, true, \"Dünya\", 100, false, 3.14]);",
    solutionCode: "function analizator(kolleksiya) {\n  const saylar = { string: 0, number: 0, boolean: 0 };\n  for (let i = 0; i < kolleksiya.length; i++) {\n    const tip = typeof kolleksiya[i];\n    if (saylar[tip] !== undefined) {\n      saylar[tip]++;\n    }\n  }\n  console.log(`string: ${saylar.string}, number: ${saylar.number}, boolean: ${saylar.boolean}`);\n}\n\nanalizator([\"Salam\", 42, true, \"Dünya\", 100, false, 3.14]);",
    ipuclari: [
      "İpucu 1: Sayğac obyekti yaradıb 'typeof' dəyərlərinə görə açarları artırın.",
      "İpucu 2: Massiv daxilində for dövrü ilə hər bir elementi yoxlayın.",
      "İpucu 3: Nəticəni 'string: 2, number: 3, boolean: 2' formatında çap edin."
    ],
    teslimIzahi: "Tip tezliklərinin analizi dinamik dillərdə daxil olan məlumat dəstlərinin profilini çıxarmaq və anomaliyaları aşkar etmək üçün istifadə olunur."
  },

  // ==========================================
  // BÖLMƏ 3: Operatorlar (===, !==, arifmetik, məntiqi) (15 sual)
  // ==========================================
  {
    id: "exam-sec3-01",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Qalıq Operatoru (%) ilə Cüt/Tək Yoxlanışı",
    serif: "<code>cutTekYoxla(eded)</code> funksiyasını yazın. Əgər <code>eded % 2 === 0</code> olarsa konsola <code>Cüt</code>, əks halda <code>Tək</code> çap edin. Funksiyanı ardıcıl olaraq <code>14</code> və <code>7</code> üçün çağırın.",
    gozlenilenCixis: "Cüt\nTək",
    starterCode: "function cutTekYoxla(eded) {\n  // Kodunuzu buraya yazın\n}\n\ncutTekYoxla(14);\ncutTekYoxla(7);",
    solutionCode: "function cutTekYoxla(eded) {\n  console.log(eded % 2 === 0 ? \"Cüt\" : \"Tək\");\n}\n\ncutTekYoxla(14);\ncutTekYoxla(7);",
    ipuclari: [
      "İpucu 1: Qalıq operatoru (%) ədədin 2-yə bölünməsindən alınan qalığı qaytarır.",
      "İpucu 2: Qalıq 0 olarsa cüt, 1 olarsa tək ədəddir.",
      "İpucu 3: Ternary və ya if-else ilə nəticəni çap edin."
    ],
    teslimIzahi: "Modul (qalıq) operatoru proqramlaşdırmada dövri təkrarlanmaları və cüt/tək bölünmələri təyin etmək üçün təməl riyazi alətdir."
  },
  {
    id: "exam-sec3-02",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Qüvvət Operatoru (**)",
    serif: "<code>quvvetHesabla(esos, dereco)</code> funksiyasını təyin edin. <code>**</code> operatorundan istifadə edərək qüvvəti hesablayın və konsola <code>[esos] ^ [dereco] = [netice]</code> çıxarın. Funksiyanı <code>2, 5</code> arqumentləri ilə çağırın.",
    gozlenilenCixis: "2 ^ 5 = 32",
    starterCode: "function quvvetHesabla(esos, dereco) {\n  // Kodunuzu buraya yazın\n}\n\nquvvetHesabla(2, 5);",
    solutionCode: "function quvvetHesabla(esos, dereco) {\n  const netice = esos ** dereco;\n  console.log(`${esos} ^ ${dereco} = ${netice}`);\n}\n\nquvvetHesabla(2, 5);",
    ipuclari: [
      "İpucu 1: JavaScript-də qüvvətə yüksəltmə operatoru qoşa ulduz (**) işarəsidir.",
      "İpucu 2: 2 ** 5 əməliyyatı 2-ni 5 dəfə öz-özünə vuraraq 32 verir.",
      "İpucu 3: Nəticəni şablonda '2 ^ 5 = 32' kimi göstərin."
    ],
    teslimIzahi: "ES2016-da təqdim olunan ** operatoru Math.pow() metodunun sintaktik ekvivalentidir və riyazi ifadələri daha qısa yazmağa imkan verir."
  },
  {
    id: "exam-sec3-03",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Ciddi (===) vs Boş (==) Bərabərlik",
    serif: "<code>beraberlikMuqayisesi(a, b)</code> funksiyasını yazın. Konsola <code>Boş: [a == b] | Ciddi: [a === b]</code> formatında çıxış verin. Funksiyanı <code>0, false</code> arqumentləri ilə çağırın.",
    gozlenilenCixis: "Boş: true | Ciddi: false",
    starterCode: "function beraberlikMuqayisesi(a, b) {\n  // Kodunuzu buraya yazın\n}\n\nberaberlikMuqayisesi(0, false);",
    solutionCode: "function beraberlikMuqayisesi(a, b) {\n  console.log(`Boş: ${a == b} | Ciddi: ${a === b}`);\n}\n\nberaberlikMuqayisesi(0, false);",
    ipuclari: [
      "İpucu 1: '==' operatoru tipləri məcburən uyğunlaşdırır (0 və false bərabər sayılır).",
      "İpucu 2: '===' isə həm dəyəri, həm də tipi yoxlayır (number !== boolean).",
      "İpucu 3: Çıxış 'Boş: true | Ciddi: false' olmalıdır."
    ],
    teslimIzahi: "Boş bərabərlik (type coercion) gözlənilməz məntiqi xətalara səbəb olduğundan müasir JavaScript standartlarında həmişə ciddi (===) bərabərlik tövsiyə edilir."
  },
  {
    id: "exam-sec3-04",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Məntiqi VƏ (&&) ilə İcazə Yoxlanışı",
    serif: "<code>girisYoxla(yas, biletVar)</code> funksiyasını qurun. İstifadəçinin daxil olması üçün yaşı 18 və ya yuxarı OLMALI VƏ bileti OLMALIDIR. Şərt ödəndikdə <code>Girişə icazə verildi</code>, əks halda <code>Giriş qadağandır</code> konsola çıxarın. Funksiyanı <code>20, true</code> ilə çağırın.",
    gozlenilenCixis: "Girişə icazə verildi",
    starterCode: "function girisYoxla(yas, biletVar) {\n  // Kodunuzu buraya yazın\n}\n\ngirisYoxla(20, true);",
    solutionCode: "function girisYoxla(yas, biletVar) {\n  if (yas >= 18 && biletVar) {\n    console.log(\"Girişə icazə verildi\");\n  } else {\n    console.log(\"Giriş qadağandır\");\n  }\n}\n\ngirisYoxla(20, true);",
    ipuclari: [
      "İpucu 1: Hər iki şərtin eyni vaxtda ödənməsi üçün '&&' məntiqi operatorundan istifadə edin.",
      "İpucu 2: 'yas >= 18 && biletVar' ifadəsini yoxlayın.",
      "İpucu 3: Hər iki şərt ödəndiyi üçün 'Girişə icazə verildi' çap olunmalıdır."
    ],
    teslimIzahi: "&& operatoru bütün operandlar true olduqda true qaytarır. Əgər bircə şərt belə false olarsa, icra dərhal false ilə nəticələnir."
  },
  {
    id: "exam-sec3-05",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Məntiqi VƏ YA (||) ilə Ödəniş Metodu",
    serif: "<code>odenisYoxla(kartVar, nagdVar)</code> funksiyasını yazın. Əgər kart VƏ YA nağd pul mövcuddursa konsola <code>Ödəniş mümkündür</code>, hər ikisi yoxdursa <code>Ödəniş vasitəsi yoxdur</code> çıxarın. Funksiyanı ardıcıl olaraq <code>(false, true)</code> və <code>(false, false)</code> ilə çağırın.",
    gozlenilenCixis: "Ödəniş mümkündür\nÖdəniş vasitəsi yoxdur",
    starterCode: "function odenisYoxla(kartVar, nagdVar) {\n  // Kodunuzu buraya yazın\n}\n\nodenisYoxla(false, true);\nodenisYoxla(false, false);",
    solutionCode: "function odenisYoxla(kartVar, nagdVar) {\n  if (kartVar || nagdVar) {\n    console.log(\"Ödəniş mümkündür\");\n  } else {\n    console.log(\"Ödəniş vasitəsi yoxdur\");\n  }\n}\n\nodenisYoxla(false, true);\nodenisYoxla(false, false);",
    ipuclari: [
      "İpucu 1: Şərtlərdən ən azı birinin doğru olması kifayətdirsə '||' operatoru seçilir.",
      "İpucu 2: Yalnız hər iki arqument false olduqda else bloku işləyəcək.",
      "İpucu 3: İki çağırış iki ayrı sətir çıxaracaq."
    ],
    teslimIzahi: "|| operatoru soldan sağa doğru ilk true dəyəri axtarır və tapdıqda dərhal true qaytarır (short-circuit)."
  },
  {
    id: "exam-sec3-06",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Mənimsətmə Operatorları (+=, *=, -=)",
    serif: "<code>hesablamaZenciri(ilkin)</code> funksiyasını təyin edin. Dəyişənə <code>ilkin</code> dəyərini verin, ardınca <code>+= 10</code>, sonra <code>*= 2</code> və sonda <code>-= 5</code> tətbiq edin. Yekun qiyməti konsola <code>Nəticə: [qiymət]</code> olaraq çap edin. Funksiyanı <code>5</code> ilə çağırın.",
    gozlenilenCixis: "Nəticə: 25",
    starterCode: "function hesablamaZenciri(ilkin) {\n  // Kodunuzu buraya yazın\n}\n\nhesablamaZenciri(5);",
    solutionCode: "function hesablamaZenciri(ilkin) {\n  let x = ilkin;\n  x += 10; // 15\n  x *= 2;  // 30\n  x -= 5;  // 25\n  console.log(`Nəticə: ${x}`);\n}\n\nhesablamaZenciri(5);",
    ipuclari: [
      "İpucu 1: Qısaldılmış mənimsətmə operatorları (+=, *=, -=) dəyişənin cari dəyərini yeniləyir.",
      "İpucu 2: 5 + 10 = 15; 15 * 2 = 30; 30 - 5 = 25.",
      "İpucu 3: Sonda console.log(`Nəticə: ${x}`) yazın."
    ],
    teslimIzahi: "Qısaldılmış mənimsətmə operatorları hesablama və təyinatı tək bir əmrdə birləşdirərək kodun yığcamlığını təmin edir."
  },
  {
    id: "exam-sec3-07",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Ciddi Fərqlilik (!==) Operatoru",
    serif: "<code>ferqlilikYoxla(a, b)</code> funksiyasını yazın. Əgər arqumentlər ciddi fərqlidirsə (<code>a !== b</code>) konsola <code>Fərqlidir</code>, bərabərdirsə <code>Eynidir</code> çap edin. Funksiyanı ardıcıl olaraq <code>(10, \"10\")</code> və <code>(10, 10)</code> ilə çağırın.",
    gozlenilenCixis: "Fərqlidir\nEynidir",
    starterCode: "function ferqlilikYoxla(a, b) {\n  // Kodunuzu buraya yazın\n}\n\nferqlilikYoxla(10, \"10\");\nferqlilikYoxla(10, 10);",
    solutionCode: "function ferqlilikYoxla(a, b) {\n  console.log(a !== b ? \"Fərqlidir\" : \"Eynidir\");\n}\n\nferqlilikYoxla(10, \"10\");\nferqlilikYoxla(10, 10);",
    ipuclari: [
      "İpucu 1: '!==' operatoru həm tipi, həm dəyəri müqayisə edir.",
      "İpucu 2: 10 (number) və \"10\" (string) fərqli tiplər olduğu üçün 'Fərqlidir' çıxacaq.",
      "İpucu 3: 10 və 10 eyni olduğu üçün 'Eynidir' çıxacaq."
    ],
    teslimIzahi: "!== ciddi bərabər deyil operatorudur və tip fərqi olduqda heç bir gizli çevrilmə aparmadan true qaytarır."
  },
  {
    id: "exam-sec3-08",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Nullish Coalescing (??) vs OR (||)",
    serif: "<code>susmayaGoreDeyer(say)</code> funksiyasını tərtib edin. Konsola <code>OR: [say || 10] | Nullish: [say ?? 10]</code> formatında çıxış verin. Funksiyanı <code>0</code> arqumenti ilə çağırın.",
    gozlenilenCixis: "OR: 10 | Nullish: 0",
    starterCode: "function susmayaGoreDeyer(say) {\n  // Kodunuzu buraya yazın\n}\n\nsusmayaGoreDeyer(0);",
    solutionCode: "function susmayaGoreDeyer(say) {\n  const orNetice = say || 10;\n  const nullishNetice = say ?? 10;\n  console.log(`OR: ${orNetice} | Nullish: ${nullishNetice}`);\n}\n\nsusmayaGoreDeyer(0);",
    ipuclari: [
      "İpucu 1: '||' operatoru 0-ı falsy saydığı üçün sağdakı 10-u götürür.",
      "İpucu 2: '??' operatoru yalnız null və undefined üçün işləyir, 0-ı etibarlı ədəd sayır.",
      "İpucu 3: Çıxış dəqiq 'OR: 10 | Nullish: 0' olmalıdır."
    ],
    teslimIzahi: "Nullish Coalescing operatoru (??) 0 və \"\" kimi mənalı falsy dəyərlərin itirilməsinin qarşısını almaq üçün təqdim edilmişdir."
  },
  {
    id: "exam-sec3-09",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Operator Prioriteti və Mürəkkəb Hesablama",
    serif: "<code>prioritetHesabla(a, b, c)</code> funksiyasını yazın. Konsola <code>Sadə: [a + b * c] | Mötərizəli: [(a + b) * c]</code> çıxarın. Funksiyanı <code>2, 3, 4</code> ilə çağırın.",
    gozlenilenCixis: "Sadə: 14 | Mötərizəli: 20",
    starterCode: "function prioritetHesabla(a, b, c) {\n  // Kodunuzu buraya yazın\n}\n\nprioritetHesabla(2, 3, 4);",
    solutionCode: "function prioritetHesabla(a, b, c) {\n  const sade = a + b * c;     // 2 + 12 = 14\n  const moterizeli = (a + b) * c; // 5 * 4 = 20\n  console.log(`Sadə: ${sade} | Mötərizəli: ${moterizeli}`);\n}\n\nprioritetHesabla(2, 3, 4);",
    ipuclari: [
      "İpucu 1: Vurma operatorunun (*) prioriteti toplama operatorundan (+) yüksəkdir.",
      "İpucu 2: Mötərizələr prioriteti dəyişdirərək əvvəlcə toplamanı icra etdirir.",
      "İpucu 3: 2 + 12 = 14 və 5 * 4 = 20 nəticələrini formatlı çap edin."
    ],
    teslimIzahi: "Riyazi operatorların presedenti (precedence) icra ardıcıllığını müəyyən edir. Dəyirmi mötərizələr ən yüksək prioritetə malikdir."
  },
  {
    id: "exam-sec3-10",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Qısa Qapanma (Short-circuit Evaluation) Mexanizmi",
    serif: "<code>qisaQapanma(istifadeci)</code> funksiyasını yazın. Əgər <code>istifadeci</code> mövcuddursa və <code>istifadeci.aktiv</code> doğrudursa konsola <code>İstifadəçi Aktivdir</code>, əks halda <code>Qeyri-aktiv</code> çıxarın. Kodda xəta verməməsi üçün <code>istifadeci && istifadeci.aktiv</code> qısa qapanmasından istifadə edin. Funksiyanı <code>null</code> və <code>{ aktiv: true }</code> üçün çağırın.",
    gozlenilenCixis: "Qeyri-aktiv\nİstifadəçi Aktivdir",
    starterCode: "function qisaQapanma(istifadeci) {\n  // Kodunuzu buraya yazın\n}\n\nqisaQapanma(null);\nqisaQapanma({ aktiv: true });",
    solutionCode: "function qisaQapanma(istifadeci) {\n  if (istifadeci && istifadeci.aktiv) {\n    console.log(\"İstifadəçi Aktivdir\");\n  } else {\n    console.log(\"Qeyri-aktiv\");\n  }\n}\n\nqisaQapanma(null);\nqisaQapanma({ aktiv: true });",
    ipuclari: [
      "İpucu 1: null.aktiv yazıldıqda TypeError baş verir, lakin 'istifadeci && ...' bunu önləyir.",
      "İpucu 2: Sol tərəf null olduqda sağ tərəf heç icra olunmur.",
      "İpucu 3: Nəticələri ardıcıl çap edin."
    ],
    teslimIzahi: "Short-circuit xüsusiyyəti sol tərəf falsy olduqda sağ tərəfin icrasını dayandıraraq null reference xətalarından qoruyur."
  },
  {
    id: "exam-sec3-11",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Çoxfaktorlu Giriş Təhlükəsizlik Sistemi",
    serif: "<code>girisHüququ(istifadeci)</code> funksiyasını təyin edin. <code>istifadeci</code> obyekti <code>rol</code>, <code>ikiFaktorlu</code> və <code>ipBlokda</code> sahələrinə malikdir. Giriş yalnız o halda təsdiqlənir ki, <code>ipBlokda</code> false olsun VƏ (rol 'admin' olsun VƏ YA ikiFaktorlu true olsun). Konsola <code>[GİRİŞ] Təsdiq: [true/false]</code> çıxarın. Funksiyanı <code>{ rol: \"user\", ikiFaktorlu: true, ipBlokda: false }</code> ilə çağırın.",
    gozlenilenCixis: "[GİRİŞ] Təsdiq: true",
    starterCode: "function girisHüququ(istifadeci) {\n  // Kodunuzu buraya yazın\n}\n\ngirisHüququ({ rol: \"user\", ikiFaktorlu: true, ipBlokda: false });",
    solutionCode: "function girisHüququ(istifadeci) {\n  const tesdiq = !istifadeci.ipBlokda && (istifadeci.rol === \"admin\" || istifadeci.ikiFaktorlu);\n  console.log(`[GİRİŞ] Təsdiq: ${tesdiq}`);\n}\n\ngirisHüququ({ rol: \"user\", ikiFaktorlu: true, ipBlokda: false });",
    ipuclari: [
      "İpucu 1: Məntiqi operatorları qruplaşdırmaq üçün mötərizələrdən: '!ipBlokda && (rol === \"admin\" || ikiFaktorlu)' istifadə edin.",
      "İpucu 2: ipBlokda false olduğundan !ipBlokda true olacaq.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    teslimIzahi: "Mürəkkəb təhlükəsizlik şərtlərində məntiqi VƏ (&&) və VƏ YA (||) operatorlarının mötərizələrlə düzgün qruplaşdırılması zəruridir."
  },
  {
    id: "exam-sec3-12",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Dinamik Endirim və Bonus Hesablayıcı",
    serif: "<code>endirimHesabla(mebleg, kupon, vip)</code> funksiyasını qurun. Əgər <code>vip</code> true-dursa 20% endirim, əks halda əgər <code>kupon === \"YAY10\"</code> olarsa 10% endirim, heç biri deyilsə 0% endirim tətbiq olunur. Yekun ödəniş məbləğini konsola <code>Ödəniləcək: [yekun] AZN</code> olaraq çap edin. Funksiyanı ardıcıl olaraq <code>(200, \"\", true)</code> və <code>(200, \"YAY10\", false)</code> ilə çağırın.",
    gozlenilenCixis: "Ödəniləcək: 160 AZN\nÖdəniləcək: 180 AZN",
    starterCode: "function endirimHesabla(mebleg, kupon, vip) {\n  // Kodunuzu buraya yazın\n}\n\nendirimHesabla(200, \"\", true);\nendirimHesabla(200, \"YAY10\", false);",
    solutionCode: "function endirimHesabla(mebleg, kupon, vip) {\n  let faiz = 0;\n  if (vip) {\n    faiz = 0.20;\n  } else if (kupon === \"YAY10\") {\n    faiz = 0.10;\n  }\n  const yekun = mebleg - (mebleg * faiz);\n  console.log(`Ödəniləcək: ${yekun} AZN`);\n}\n\nendirimHesabla(200, \"\", true);\nendirimHesabla(200, \"YAY10\", false);",
    ipuclari: [
      "İpucu 1: VIP statusuna üstünlük verin (20% endirim -> 200 - 40 = 160).",
      "İpucu 2: Kupon kodunu yoxlayın (10% endirim -> 200 - 20 = 180).",
      "İpucu 3: Hər iki çağırışın nəticəsini alt-alta çap edin."
    ],
    teslimIzahi: "Məntiqi operatorlar və şərt budaqları vasitəsilə biznes qaydalarının prioritetləşdirilməsi kommersiya sistemlərində standartdır."
  },
  {
    id: "exam-sec3-13",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Ternary ilə Çoxpilləli Qiymətləndirmə",
    serif: "<code>statusTeyini(bal)</code> funksiyasını tək bir zəncirvari Ternary operatoru ilə yazın: <code>bal >= 90</code> isə <code>\"Əla\"</code>, <code>bal >= 70</code> isə <code>\"Yaxşı\"</code>, <code>bal >= 50</code> isə <code>\"Kafi\"</code>, əks halda <code>\"Kəsildi\"</code>. Konsola <code>Nəticə: [status]</code> formatında çıxış verin. Funksiyanı <code>75</code> ilə çağırın.",
    gozlenilenCixis: "Nəticə: Yaxşı",
    starterCode: "function statusTeyini(bal) {\n  // Kodunuzu buraya yazın\n}\n\nstatusTeyini(75);",
    solutionCode: "function statusTeyini(bal) {\n  const status = bal >= 90 ? \"Əla\" : bal >= 70 ? \"Yaxşı\" : bal >= 50 ? \"Kafi\" : \"Kəsildi\";\n  console.log(`Nəticə: ${status}`);\n}\n\nstatusTeyini(75);",
    ipuclari: [
      "İpucu 1: Zəncirvari ternary sintaksisi: şərt1 ? dəyər1 : şərt2 ? dəyər2 : alternativ.",
      "İpucu 2: 75 bal 90-dan kiçik, lakin 70-dən böyük olduğu üçün 'Yaxşı' seçiləcək.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    teslimIzahi: "Zəncirvari üçlü (nested ternary) operatorlar qısa şərtləri bir sətirdə həll etmək üçün əlverişlidir, lakin mürəkkəb olduqda diqqətlə formatlanmalıdır."
  },
  {
    id: "exam-sec3-14",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Bitwise XOR ilə Təkrar Olunmayan Elementin Tapılması",
    serif: "<code>tekElementiTap(massiv)</code> funksiyasını təyin edin. Massivdəki bütün ədədlər cüt-cüt təkrarlanır, yalnız bir ədəd təkrarlanmır. Bitwise XOR (<code>^</code>) operatorunun xüsusiyyətindən (<code>x ^ x === 0</code> və <code>x ^ 0 === x</code>) istifadə edərək tək elementi tapın və konsola <code>Tək element: [eded]</code> çıxarın. Funksiyanı <code>[4, 1, 2, 1, 2]</code> ilə çağırın.",
    gozlenilenCixis: "Tək element: 4",
    starterCode: "function tekElementiTap(massiv) {\n  // Kodunuzu buraya yazın\n}\n\ntekElementiTap([4, 1, 2, 1, 2]);",
    solutionCode: "function tekElementiTap(massiv) {\n  let netice = 0;\n  for (let i = 0; i < massiv.length; i++) {\n    netice ^= massiv[i];\n  }\n  console.log(`Tək element: ${netice}`);\n}\n\ntekElementiTap([4, 1, 2, 1, 2]);",
    ipuclari: [
      "İpucu 1: Eyni ədədləri bir-biri ilə XOR etdikdə sıfır alınır (a ^ a = 0).",
      "İpucu 2: Bütün elementləri ardıcıl XOR etdikdə təkrarlananlar sıfırlanır və yalnız tək element qalır.",
      "İpucu 3: Nəticə 'Tək element: 4' olacaq."
    ],
    teslimIzahi: "Bitwise XOR operatoru xətti zaman O(N) və sabit yaddaş O(1) mürəkkəbliyi ilə unikal elementləri tapmaq üçün ən optimal alqoritmik üsuldur."
  },
  {
    id: "exam-sec3-15",
    bolmeId: 3,
    merheleId: 1,
    cetinlik: "EKSPERT",
    basliq: "İkili Şərtli Qaydalar Mühərriki (Rule Evaluation Engine)",
    serif: "<code>qaydalarMuherriki(istifadeci, qaydalar)</code> funksiyasını yaradın. <code>qaydalar</code> hər biri <code>{ sahe: \"yas\", op: \">=\", deyer: 18 }</code> formatında olan obyektlər massividir. Mühərrik bütün qaydaların istifadəçi üzərində ödənməsini yoxlasın (op: '===', '>=', '<=' dəstəklənsin). Hamısı ödənirsə <code>[MÜHƏRRİK] Bütün qaydalar təsdiqləndi</code>, əks halda <code>[MÜHƏRRİK] Qaydalar pozuldu</code> çap edin. Funksiyanı <code>{ yas: 22, xal: 85 }</code> və <code>[{ sahe: \"yas\", op: \">=\", deyer: 18 }, { sahe: \"xal\", op: \">=\", deyer: 80 }]</code> ilə çağırın.",
    gozlenilenCixis: "[MÜHƏRRİK] Bütün qaydalar təsdiqləndi",
    starterCode: "function qaydalarMuherriki(istifadeci, qaydalar) {\n  // Kodunuzu buraya yazın\n}\n\nqaydalarMuherriki({ yas: 22, xal: 85 }, [\n  { sahe: \"yas\", op: \">=\", deyer: 18 },\n  { sahe: \"xal\", op: \">=\", deyer: 80 }\n]);",
    solutionCode: "function qaydalarMuherriki(istifadeci, qaydalar) {\n  let hamisiOdenir = true;\n  for (let i = 0; i < qaydalar.length; i++) {\n    const q = qaydalar[i];\n    const userVal = istifadeci[q.sahe];\n    let netice = false;\n    if (q.op === \">=\") netice = userVal >= q.deyer;\n    else if (q.op === \"<=\") netice = userVal <= q.deyer;\n    else if (q.op === \"===\") netice = userVal === q.deyer;\n    if (!netice) {\n      hamisiOdenir = false;\n      break;\n    }\n  }\n  console.log(hamisiOdenir ? \"[MÜHƏRRİK] Bütün qaydalar təsdiqləndi\" : \"[MÜHƏRRİK] Qaydalar pozuldu\");\n}\n\nqaydalarMuherriki({ yas: 22, xal: 85 }, [\n  { sahe: \"yas\", op: \">=\", deyer: 18 },\n  { sahe: \"xal\", op: \">=\", deyer: 80 }\n]);",
    ipuclari: [
      "İpucu 1: Qaydaları dövr edərək istifadəçinin uyğun sahəsi ilə verilən dəyəri 'op' operatoruna əsasən yoxlayın.",
      "İpucu 2: Bircə qayda belə ödənməzsə dövrü dayandırın (break) və statusu false edin.",
      "İpucu 3: Hər iki şərt ödəndiyi üçün təsdiq mesajını çap edin."
    ],
    teslimIzahi: "Qaydalar mühərriki (Rules Engine) proqramın məntiqini sərt kodlaşdırmaq (hardcoding) əvəzinə konfiqurasiya edilə bilən obyektlər şəklində dinamik qiymətləndirməyə imkan verir."
  },

  // ==========================================
  // BÖLMƏ 4: Şərt İfadələri (if-else, ternary, switch-case) (15 sual)
  // ==========================================
  {
    id: "exam-sec4-01",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Sadə if-else ilə Keçid Balı",
    serif: "<code>kecidBaliniYoxla(bal)</code> funksiyasını təyin edin. Əgər <code>bal >= 50</code> olarsa konsola <code>İmtahandan keçdi</code>, əks halda <code>Kəsildi</code> çıxarın. Funksiyanı ardıcıl olaraq <code>65</code> və <code>40</code> ilə çağırın.",
    gozlenilenCixis: "İmtahandan keçdi\nKəsildi",
    starterCode: "function kecidBaliniYoxla(bal) {\n  // Kodunuzu buraya yazın\n}\n\nkecidBaliniYoxla(65);\nkecidBaliniYoxla(40);",
    solutionCode: "function kecidBaliniYoxla(bal) {\n  if (bal >= 50) {\n    console.log(\"İmtahandan keçdi\");\n  } else {\n    console.log(\"Kəsildi\");\n  }\n}\n\nkecidBaliniYoxla(65);\nkecidBaliniYoxla(40);",
    ipuclari: [
      "İpucu 1: if şərtində 'bal >= 50' yoxlamasını aparın.",
      "İpucu 2: Şərt ödəndikdə ilk mesajı, əks halda else blokunu icra edin.",
      "İpucu 3: İki çağırış üçün müvafiq iki sətir çıxarın."
    ],
    teslimIzahi: "if-else şərt strukturu məntiqi ifadənin boolean nəticəsinə uyğun olaraq proqramın icra axınını iki alternativ budağa yönəldir."
  },
  {
    id: "exam-sec4-02",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Ternary Operatoru ilə Giriş İcazəsi",
    serif: "<code>ternaryGiris(yas)</code> funksiyasını yazın. Üçlü operator ilə <code>yas >= 18</code> olarsa <code>\"Yetkin\"</code>, əks halda <code>\"Uşaq\"</code> mətni konsola çıxarın. Funksiyanı <code>17</code> ilə çağırın.",
    gozlenilenCixis: "Uşaq",
    starterCode: "function ternaryGiris(yas) {\n  // Kodunuzu buraya yazın\n}\n\nternaryGiris(17);",
    solutionCode: "function ternaryGiris(yas) {\n  console.log(yas >= 18 ? \"Yetkin\" : \"Uşaq\");\n}\n\nternaryGiris(17);",
    ipuclari: [
      "İpucu 1: Sintaksis: şərt ? doğru_olduqda : yalan_olduqda.",
      "İpucu 2: 17 < 18 olduğu üçün 'Uşaq' seçiləcək.",
      "İpucu 3: console.log daxilində ternary ifadəsini birbaşa istifadə edin."
    ],
    teslimIzahi: "Ternary operatoru tək sətirlik şərtli dəyər seçimi üçün nəzərdə tutulmuş yığcam JavaScript ifadəsidir."
  },
  {
    id: "exam-sec4-03",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "switch-case ilə Həftənin Günü",
    serif: "<code>hefteninGunu(reqem)</code> funksiyasını switch-case ilə qurun: <code>1</code> üçün <code>\"Bazar ertəsi\"</code>, <code>2</code> üçün <code>\"Çərşənbə axşamı\"</code>, <code>3</code> üçün <code>\"Çərşənbə\"</code>, digər hallar üçün <code>\"Digər gün\"</code> çap edin. Funksiyanı <code>2</code> ilə çağırın.",
    gozlenilenCixis: "Çərşənbə axşamı",
    starterCode: "function hefteninGunu(reqem) {\n  // Kodunuzu buraya yazın\n}\n\nhefteninGunu(2);",
    solutionCode: "function hefteninGunu(reqem) {\n  switch (reqem) {\n    case 1:\n      console.log(\"Bazar ertəsi\");\n      break;\n    case 2:\n      console.log(\"Çərşənbə axşamı\");\n      break;\n    case 3:\n      console.log(\"Çərşənbə\");\n      break;\n    default:\n      console.log(\"Digər gün\");\n  }\n}\n\nhefteninGunu(2);",
    ipuclari: [
      "İpucu 1: switch (reqem) strukturunu açın və hər case blokunun sonuna 'break;' qoyun.",
      "İpucu 2: case 2 blokunda 'Çərşənbə axşamı' çıxışını təmin edin.",
      "İpucu 3: 'break' qoyulmazsa fall-through baş verər."
    ],
    teslimIzahi: "switch konstruksiyası dəqiq dəyər uyğunluqlarını (strict equality) yoxlamaq üçün if-else zəncirinə alternativ daha oxunaqlı seçimdir."
  },
  {
    id: "exam-sec4-04",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "Çoxşaxəli if - else if Qiymətləndirməsi",
    serif: "<code>herfQiymeti(bal)</code> funksiyasını təyin edin: <code>bal >= 90</code> isə <code>\"A\"</code>, <code>bal >= 80</code> isə <code>\"B\"</code>, <code>bal >= 70</code> isə <code>\"C\"</code>, <code>bal >= 60</code> isə <code>\"D\"</code>, əks halda <code>\"F\"</code> konsola çap olunsun. Funksiyanı <code>84</code> ilə çağırın.",
    gozlenilenCixis: "B",
    starterCode: "function herfQiymeti(bal) {\n  // Kodunuzu buraya yazın\n}\n\nherfQiymeti(84);",
    solutionCode: "function herfQiymeti(bal) {\n  if (bal >= 90) {\n    console.log(\"A\");\n  } else if (bal >= 80) {\n    console.log(\"B\");\n  } else if (bal >= 70) {\n    console.log(\"C\");\n  } else if (bal >= 60) {\n    console.log(\"D\");\n  } else {\n    console.log(\"F\");\n  }\n}\n\nherfQiymeti(84);",
    ipuclari: [
      "İpucu 1: Şərtləri böyükdən kiçiyə doğru ardıcıl sıralayın.",
      "İpucu 2: 84 bal 90-dan kiçikdir, lakin 80-dən böyük olduğu üçün 'B' bloku işləyəcək.",
      "İpucu 3: Nəticə olaraq tək simvol 'B' çap edin."
    ],
    teslimIzahi: "else if zəncirlərində yuxarıdakı şərt ödəndikdə sonrakı yoxlamalar atlanır, buna görə aralıqların düzgün ardıcıllıqla yazılması mühümdür."
  },
  {
    id: "exam-sec4-05",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "switch-case ilə Sadə Kalkulyator",
    serif: "<code>miniKalkulyator(a, b, emeliyyat)</code> funksiyasını switch-case ilə qurun: <code>\"+\"</code> üçün toplama, <code>\"-\"</code> üçün çıxma, <code>\"*\"</code> üçün vurma, <code>\"/\"</code> üçün bölmə nəticəsini konsola çıxarın. Funksiyanı <code>12, 4, \"/\"</code> ilə çağırın.",
    gozlenilenCixis: "3",
    starterCode: "function miniKalkulyator(a, b, emeliyyat) {\n  // Kodunuzu buraya yazın\n}\n\nminiKalkulyator(12, 4, \"/\");",
    solutionCode: "function miniKalkulyator(a, b, emeliyyat) {\n  switch (emeliyyat) {\n    case \"+\": console.log(a + b); break;\n    case \"-\": console.log(a - b); break;\n    case \"*\": console.log(a * b); break;\n    case \"/\": console.log(a / b); break;\n    default: console.log(\"Naməlum əməliyyat\");\n  }\n}\n\nminiKalkulyator(12, 4, \"/\");",
    ipuclari: [
      "İpucu 1: switch (emeliyyat) ilə simvolu yoxlayın.",
      "İpucu 2: case \"/\": bölmə əməliyyatını (12 / 4 = 3) icra edin.",
      "İpucu 3: break qoyaraq çıxışı tamamlayın."
    ],
    teslimIzahi: "switch strukturu əməliyyat kodlarına və simvollara görə riyazi məntiqi şaxələndirmək üçün ən əlverişli mexanizmdir."
  },
  {
    id: "exam-sec4-06",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "İç-içə (Nested) if ilə İkiqat Təsdiq",
    serif: "<code>hesabYoxla(istifadeciVar, parolDuzdur)</code> funksiyasını tərtib edin. Əgər <code>istifadeciVar</code> true-dursa, daxilində <code>parolDuzdur</code> yoxlanılsın: doğru isə <code>Giriş uğurludur</code>, səhv isə <code>Şifrə yanlışdır</code>; əgər istifadəçi yoxdursa <code>İstifadəçi tapılmadı</code> konsola çıxsın. Funksiyanı <code>true, false</code> ilə çağırın.",
    gozlenilenCixis: "Şifrə yanlışdır",
    starterCode: "function hesabYoxla(istifadeciVar, parolDuzdur) {\n  // Kodunuzu buraya yazın\n}\n\nhesabYoxla(true, false);",
    solutionCode: "function hesabYoxla(istifadeciVar, parolDuzdur) {\n  if (istifadeciVar) {\n    if (parolDuzdur) {\n      console.log(\"Giriş uğurludur\");\n    } else {\n      console.log(\"Şifrə yanlışdır\");\n    }\n  } else {\n    console.log(\"İstifadəçi tapılmadı\");\n  }\n}\n\nhesabYoxla(true, false);",
    ipuclari: [
      "İpucu 1: Birinci if blokunun daxilində ikinci if yoxlamasını yerləşdirin.",
      "İpucu 2: istifadeciVar true, parolDuzdur false olduqda daxili else bloku işləyəcək.",
      "İpucu 3: Nəticə olaraq 'Şifrə yanlışdır' çap edin."
    ],
    teslimIzahi: "İç-içə if şərtləri asılı yoxlamaları (əvvəlcə istifadəçinin varlığı, sonra isə şifrənin doğruluğu) mərhələli şəkildə həyata keçirir."
  },
  {
    id: "exam-sec4-07",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "switch-case Fall-Through Xüsusiyyəti",
    serif: "<code>hefteSonuYoxla(gun)</code> funksiyasını switch ilə qurun: <code>\"Şənbə\"</code> və ya <code>\"Bazar\"</code> olduqda hər ikisi üçün <code>İstirahət günü</code>, qalan günlər üçün <code>İş günü</code> çıxarın. Şənbə blokunda 'break' qoymayaraq fall-through mexanizmini nümayiş etdirin. Funksiyanı <code>\"Şənbə\"</code> ilə çağırın.",
    gozlenilenCixis: "İstirahət günü",
    starterCode: "function hefteSonuYoxla(gun) {\n  // Kodunuzu buraya yazın\n}\n\nhefteSonuYoxla(\"Şənbə\");",
    solutionCode: "function hefteSonuYoxla(gun) {\n  switch (gun) {\n    case \"Şənbə\":\n    case \"Bazar\":\n      console.log(\"İstirahət günü\");\n      break;\n    default:\n      console.log(\"İş günü\");\n  }\n}\n\nhefteSonuYoxla(\"Şənbə\");",
    ipuclari: [
      "İpucu 1: 'case \"Şənbə\":' sətirindən dərhal sonra 'case \"Bazar\":' yazın və araya break qoymayın.",
      "İpucu 2: Hər iki case eyni kod blokunu paylaşacaq.",
      "İpucu 3: Nəticə 'İstirahət günü' olacaq."
    ],
    teslimIzahi: "Bir neçə case üçün eyni əməliyyat icra olunmalıdırsa, aradakı break əmri buraxılaraq kodun aşağı axması (fall-through) təmin edilir."
  },
  {
    id: "exam-sec4-08",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Temperatur və Hava Məsləhətçisi",
    serif: "<code>havaMesleheti(temp, yagisYagir)</code> funksiyasını yazın. Əgər <code>yagisYagir</code> doğrudursa konsola <code>Çətir götürün</code>; əks halda əgər <code>temp > 25</code> olarsa <code>Hava istidir, yüngül geyinin</code>, <code>temp >= 10</code> olarsa <code>Hava ilıqdır</code>, əks halda <code>Hava soyuqdur, qalın geyinin</code> çap olunsun. Funksiyanı ardıcıl olaraq <code>(15, false)</code> və <code>(20, true)</code> üçün çağırın.",
    gozlenilenCixis: "Hava ilıqdır\nÇətir götürün",
    starterCode: "function havaMesleheti(temp, yagisYagir) {\n  // Kodunuzu buraya yazın\n}\n\nhavaMesleheti(15, false);\nhavaMesleheti(20, true);",
    solutionCode: "function havaMesleheti(temp, yagisYagir) {\n  if (yagisYagir) {\n    console.log(\"Çətir götürün\");\n  } else if (temp > 25) {\n    console.log(\"Hava istidir, yüngül geyinin\");\n  } else if (temp >= 10) {\n    console.log(\"Hava ilıqdır\");\n  } else {\n    console.log(\"Hava soyuqdur, qalın geyinin\");\n  }\n}\n\nhavaMesleheti(15, false);\nhavaMesleheti(20, true);",
    ipuclari: [
      "İpucu 1: Əsas üstünlük şərti yağışın olub-olmamasıdır (yagisYagir true olduqda dərhal çıxış verin).",
      "İpucu 2: Yağış yoxdursa temperatur aralıqlarını else if ilə qiymətləndirin.",
      "İpucu 3: İki çağırış üçün müvafiq iki sətir alınacaq."
    ],
    teslimIzahi: "Şərt ifadələrində kritik prioritetə malik kənar faktorlar (məsələn, yağış) əsas hesablamalardan əvvəl yoxlanılmalıdır."
  },
  {
    id: "exam-sec4-09",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Taksi Sifarişi Qiymət Hesablayıcısı",
    serif: "<code>taksiTarifi(mesafeKm, vaxtSaat)</code> funksiyasını təyin edin. Baza qiyməti 3 AZN-dir. Hər kilometr üçün 0.7 AZN əlavə olunur. Əgər <code>vaxtSaat >= 23 || vaxtSaat < 6</code> (gecə vaxtı) olarsa yekun məbləğə 2 AZN gecə əlavəsi gəlinir. Nəticəni konsola <code>Məsafə: [km] km | Yekun: [yekun] AZN</code> şəklində çıxarın. Funksiyanı <code>10, 23</code> ilə çağırın.",
    gozlenilenCixis: "Məsafə: 10 km | Yekun: 12 AZN",
    starterCode: "function taksiTarifi(mesafeKm, vaxtSaat) {\n  // Kodunuzu buraya yazın\n}\n\ntaksiTarifi(10, 23);",
    solutionCode: "function taksiTarifi(mesafeKm, vaxtSaat) {\n  let mebleg = 3 + (mesafeKm * 0.7); // 3 + 7 = 10\n  if (vaxtSaat >= 23 || vaxtSaat < 6) {\n    mebleg += 2; // 12\n  }\n  console.log(`Məsafə: ${mesafeKm} km | Yekun: ${mebleg} AZN`);\n}\n\ntaksiTarifi(10, 23);",
    ipuclari: [
      "İpucu 1: Baza + məsafə: 3 + (10 * 0.7) = 10 AZN.",
      "İpucu 2: Saat 23 gecə vaxtına düşdüyü üçün 'vaxtSaat >= 23 || vaxtSaat < 6' şərti ödənilir və 2 AZN əlavə olunur.",
      "İpucu 3: Nəticə 12 AZN olacaq."
    ],
    teslimIzahi: "Real tətbiqlərdə dinamik tariflər baza qiyməti və şərtli əmsalların (gecə əlavəsi, pik saatlar) ardıcıl toplanması ilə hesablanır."
  },
  {
    id: "exam-sec4-10",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "İstifadəçi Yaşına Görə Kateqoriya Təyini",
    serif: "<code>yasQrupu(yas)</code> funksiyasını yazın: <code>yas < 0 || yas > 120</code> isə <code>\"Yanlış yaş\"</code>, <code>yas <= 12</code> isə <code>\"Uşaq\"</code>, <code>yas <= 19</code> isə <code>\"Yeniyetmə\"</code>, <code>yas <= 64</code> isə <code>\"Yetkin\"</code>, əks halda <code>\"Təqaüdçü\"</code> çap olunsun. Funksiyanı <code>68</code> ilə çağırın.",
    gozlenilenCixis: "Təqaüdçü",
    starterCode: "function yasQrupu(yas) {\n  // Kodunuzu buraya yazın\n}\n\nyasQrupu(68);",
    solutionCode: "function yasQrupu(yas) {\n  if (yas < 0 || yas > 120) {\n    console.log(\"Yanlış yaş\");\n  } else if (yas <= 12) {\n    console.log(\"Uşaq\");\n  } else if (yas <= 19) {\n    console.log(\"Yeniyetmə\");\n  } else if (yas <= 64) {\n    console.log(\"Yetkin\");\n  } else {\n    console.log(\"Təqaüdçü\");\n  }\n}\n\nyasQrupu(68);",
    ipuclari: [
      "İpucu 1: Əvvəlcə qeyri-mümkün sərhəd dəyərlərini (kənar vəziyyətləri) süzgəcdən keçirin.",
      "İpucu 2: 68 yaşı 64-dən böyük olduğu üçün sonuncu else blokuna düşəcək.",
      "İpucu 3: Nəticə 'Təqaüdçü' olmalıdır."
    ],
    teslimIzahi: "Hüdud qiymətlərinin (boundary conditions) əvvəlcədən yoxlanılması (Guard Clauses) proqramı səhv girişlərdən qoruyur."
  },
  {
    id: "exam-sec4-11",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Valyuta Mübadiləsi Məzənnə Kalkulyatoru",
    serif: "<code>valyutaCevir(meblegAzn, hedefValyuta)</code> funksiyasını switch-case ilə qurun: <code>\"USD\"</code> üçün 1.70-ə bölün (yuvarlaqlaşdırmadan çıxarın), <code>\"EUR\"</code> üçün 1.85-ə bölün (nəticəni Math.round ilə tam ədədə salın), <code>\"TRY\"</code> üçün 19-a vurun. Konsola <code>[meblegAzn] AZN = [netice] [hedefValyuta]</code> çap edin. Funksiyanı <code>170, \"USD\"</code> ilə çağırın.",
    gozlenilenCixis: "170 AZN = 100 USD",
    starterCode: "function valyutaCevir(meblegAzn, hedefValyuta) {\n  // Kodunuzu buraya yazın\n}\n\nvalyutaCevir(170, \"USD\");",
    solutionCode: "function valyutaCevir(meblegAzn, hedefValyuta) {\n  let netice = 0;\n  switch (hedefValyuta) {\n    case \"USD\": netice = meblegAzn / 1.70; break;\n    case \"EUR\": netice = Math.round(meblegAzn / 1.85); break;\n    case \"TRY\": netice = meblegAzn * 19; break;\n    default: netice = 0;\n  }\n  console.log(`${meblegAzn} AZN = ${netice} ${hedefValyuta}`);\n}\n\nvalyutaCevir(170, \"USD\");",
    ipuclari: [
      "İpucu 1: switch (hedefValyuta) daxilində 'USD' halını yoxlayın.",
      "İpucu 2: 170 / 1.70 = 100 nəticəsini hesablayın.",
      "İpucu 3: Formatı '170 AZN = 100 USD' kimi qurun."
    ],
    teslimIzahi: "Valyuta konvertorları müxtəlif məzənnələrin tətbiqi üçün switch-case marşrutlaşdırmasından effektiv istifadə edir."
  },
  {
    id: "exam-sec4-12",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Dövlət Rüsumu və Vergi Dərəcəsi Təyini",
    serif: "<code>vergiHesabla(gelir, rezidentdir)</code> funksiyasını tərtib edin. Əgər şəxs rezident deyilsə (<code>!rezidentdir</code>) gəlirindən asılı olmayaraq 20% vergi tətbiq olunur. Əgər rezidentdirsə: <code>gelir <= 1000</code> üçün 0% (vergisiz), <code>gelir <= 3000</code> üçün 14%, <code>gelir > 3000</code> üçün 25% vergi hesablanır. Konsola <code>Vergi: [mebleg] AZN</code> çıxarın. Funksiyanı ardıcıl olaraq <code>(2000, true)</code> və <code>(2000, false)</code> ilə çağırın.",
    gozlenilenCixis: "Vergi: 280 AZN\nVergi: 400 AZN",
    starterCode: "function vergiHesabla(gelir, rezidentdir) {\n  // Kodunuzu buraya yazın\n}\n\nvergiHesabla(2000, true);\nvergiHesabla(2000, false);",
    solutionCode: "function vergiHesabla(gelir, rezidentdir) {\n  let faiz = 0;\n  if (!rezidentdir) {\n    faiz = 0.20;\n  } else {\n    if (gelir <= 1000) faiz = 0;\n    else if (gelir <= 3000) faiz = 0.14;\n    else faiz = 0.25;\n  }\n  const vergi = gelir * faiz;\n  console.log(`Vergi: ${vergi} AZN`);\n}\n\nvergiHesabla(2000, true);\nvergiHesabla(2000, false);",
    ipuclari: [
      "İpucu 1: Rezidentlik statusunu ən birinci şərt olaraq ayırın.",
      "İpucu 2: Rezident olduqda 2000 AZN 14% dərəcəsinə düşür (2000 * 0.14 = 280).",
      "İpucu 3: Qeyri-rezident üçün 2000 * 0.20 = 400 AZN hesablanacaq."
    ],
    teslimIzahi: "Mürəkkəb fiskal sistemlərdə vergi qanunvericiliyi rezidentlik və gəlir şkalalarının pilləli kombinasiyası ilə formalaşdırılır."
  },
  {
    id: "exam-sec4-13",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Avtorizasiya Giriş Nəzarətçisi (RBAC)",
    serif: "<code>girisIazesi(istifadeci, resurs)</code> funksiyasını qurun: <code>istifadeci.rol === \"admin\"</code> olarsa bütün resurslara <code>\"İcazə verildi: Tam Giriş\"</code> çıxsın; <code>istifadeci.rol === \"editor\"</code> olarsa yalnız resurs 'xeberler' və ya 'bloq' olduqda <code>\"İcazə verildi: Redaktə Girişi\"</code>; qalan bütün hallarda <code>\"Giriş qadağandır\"</code> konsola yazılsın. Funksiyanı <code>{ rol: \"editor\" }, \"xeberler\"</code> ilə çağırın.",
    gozlenilenCixis: "İcazə verildi: Redaktə Girişi",
    starterCode: "function girisIazesi(istifadeci, resurs) {\n  // Kodunuzu buraya yazın\n}\n\ngirisIazesi({ rol: \"editor\" }, \"xeberler\");",
    solutionCode: "function girisIazesi(istifadeci, resurs) {\n  if (istifadeci.rol === \"admin\") {\n    console.log(\"İcazə verildi: Tam Giriş\");\n  } else if (istifadeci.rol === \"editor\" && (resurs === \"xeberler\" || resurs === \"bloq\")) {\n    console.log(\"İcazə verildi: Redaktə Girişi\");\n  } else {\n    console.log(\"Giriş qadağandır\");\n  }\n}\n\ngirisIazesi({ rol: \"editor\" }, \"xeberler\");",
    ipuclari: [
      "İpucu 1: Admin rolunu dərhal 'Tam Giriş' ilə təsdiqləyin.",
      "İpucu 2: Editor rolunu resursun 'xeberler' və ya 'bloq' olması ilə birlikdə yoxlayın.",
      "İpucu 3: Nəticə olaraq 'İcazə verildi: Redaktə Girişi' çıxarın."
    ],
    teslimIzahi: "Rol Əsaslı Giriş İdarəetməsi (Role-Based Access Control - RBAC) istifadəçinin hüquqlarını təyin edilmiş rollara və resurs tiplərinə görə məhdudlaşdırır."
  },
  {
    id: "exam-sec4-14",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "İmtahan Qiymətləndirmə Şurası Qərarı",
    serif: "<code>suraQerari(imtahan1, imtahan2, layihe)</code> funksiyasını tərtib edin. Tələbənin keçməsi üçün: hər iki imtahan ən azı 40 bal OLMALI VƏ (imtahanların ortalaması 60-dan çox OLMALI VƏ YA layihe balı 80 və daha yüksək OLMALIDIR). Əgər keçirsə <code>Diplom Təsdiqləndi</code>, əks halda <code>Diplom İmtina Edildi</code> konsola çıxarın. Funksiyanı ardıcıl olaraq <code>(50, 45, 85)</code> və <code>(35, 90, 95)</code> ilə çağırın.",
    gozlenilenCixis: "Diplom Təsdiqləndi\nDiplom İmtina Edildi",
    starterCode: "function suraQerari(imtahan1, imtahan2, layihe) {\n  // Kodunuzu buraya yazın\n}\n\nsuraQerari(50, 45, 85);\nsuraQerari(35, 90, 95);",
    solutionCode: "function suraQerari(imtahan1, imtahan2, layihe) {\n  const minimalSərhəd = imtahan1 >= 40 && imtahan2 >= 40;\n  const ortalama = (imtahan1 + imtahan2) / 2;\n  const ustunluk = ortalama > 60 || layihe >= 80;\n  if (minimalSərhəd && ustunluk) {\n    console.log(\"Diplom Təsdiqləndi\");\n  } else {\n    console.log(\"Diplom İmtina Edildi\");\n  }\n}\n\nsuraQerari(50, 45, 85);\nsuraQerari(35, 90, 95);",
    ipuclari: [
      "İpucu 1: Birinci halda hər iki imtahan >= 40-dır (50 və 45) və layihe 85 >= 80 olduğu üçün təsdiqlənir.",
      "İpucu 2: İkinci halda imtahan1 (35) minimal həddi (40) keçmədiyi üçün birbaşa imtina olunur.",
      "İpucu 3: Nəticələri ardıcıl çap edin."
    ],
    teslimIzahi: "Məcburi minimal şərtlərlə yanaşı alternativ kompensasiya şərtlərinin kombinasiyası mürəkkəb qərar qəbuletmə alqoritmlərinin təməlidir."
  },
  {
    id: "exam-sec4-15",
    bolmeId: 4,
    merheleId: 1,
    cetinlik: "EKSPERT",
    basliq: "İstehsalat Səviyyəli Bank Kredit Skorinq Sistemi",
    serif: "<code>kreditSkorinq(gelir, kreditTarixcesi, yas, telebOlunan)</code> funksiyasını qurun: Əgər <code>yas < 18 || yas > 65</code> olarsa <code>[RƏDD] Yaş həddi uyğun deyil</code>; əks halda əgər <code>kreditTarixcesi === \"pis\"</code> olarsa <code>[RƏDD] Mənfi kredit tarixçəsi</code>; əks halda əgər <code>gelir * 0.5 >= telebOlunan / 12</code> (aylıq ödəniş gəlirin 50%-ni aşmırsa) olarsa <code>[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq [gelir*0.5] AZN</code>; əks halda <code>[RƏDD] Gəlir kifayət deyil</code> konsola çıxarın. Funksiyanı <code>(2000, \"yaxşı\", 30, 9600)</code> ilə çağırın.",
    gozlenilenCixis: "[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq 1000 AZN",
    starterCode: "function kreditSkorinq(gelir, kreditTarixcesi, yas, telebOlunan) {\n  // Kodunuzu buraya yazın\n}\n\nkreditSkorinq(2000, \"yaxşı\", 30, 9600);",
    solutionCode: "function kreditSkorinq(gelir, kreditTarixcesi, yas, telebOlunan) {\n  if (yas < 18 || yas > 65) {\n    console.log(\"[RƏDD] Yaş həddi uyğun deyil\");\n    return;\n  }\n  if (kreditTarixcesi === \"pis\") {\n    console.log(\"[RƏDD] Mənfi kredit tarixçəsi\");\n    return;\n  }\n  const maxAyliq = gelir * 0.5; // 1000\n  const ayliqTeleb = telebOlunan / 12; // 800\n  if (maxAyliq >= ayliqTeleb) {\n    console.log(`[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq ${maxAyliq} AZN`);\n  } else {\n    console.log(\"[RƏDD] Gəlir kifayət deyil\");\n  }\n}\n\nkreditSkorinq(2000, \"yaxşı\", 30, 9600);",
    ipuclari: [
      "İpucu 1: Guard Clauses texnikasından istifadə edərək rədd şərtlərini dərhal return edin.",
      "İpucu 2: 9600 / 12 = 800 AZN aylıq ödəniş tələb olunur; 2000 * 0.5 = 1000 AZN icazə verilən həddir (1000 >= 800 ödənilir).",
      "İpucu 3: Çıxış '[TƏSDİQ] Kredit təsdiqləndi: Maksimal aylıq 1000 AZN' olacaq."
    ],
    teslimIzahi: "Bank skorinq sistemləri riskləri mərhələli süzgəclərlə qiymətləndirir və erkən xitam (early exit / return) qaydaları ilə sistem resurslarına qənaət edir."
  },

  // ==========================================
  // BÖLMƏ 5: Dövrlər (for, while, for...of, for...in) (15 sual)
  // ==========================================
  {
    id: "exam-sec5-01",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "Klassik for ilə Ədədlərin Çapı",
    serif: "<code>birdenBese()</code> funksiyasını yazın. <code>for</code> dövründən istifadə edərək 1-dən 5-ə qədər (5 daxil olmaqla) ədədləri tək-tək konsola çıxarın.",
    gozlenilenCixis: "1\n2\n3\n4\n5",
    starterCode: "function birdenBese() {\n  // Kodunuzu buraya yazın\n}\n\nbirdenBese();",
    solutionCode: "function birdenBese() {\n  for (let i = 1; i <= 5; i++) {\n    console.log(i);\n  }\n}\n\nbirdenBese();",
    ipuclari: [
      "İpucu 1: for (let i = 1; i <= 5; i++) başlığından istifadə edin.",
      "İpucu 2: Dövr daxilində console.log(i) çağırın.",
      "İpucu 3: Hər dövrdə bir ədəd çap olunacaq."
    ],
    teslimIzahi: "Klassik for dövrü başlanğıc vəziyyəti, çıxış şərti və addım artımını tək bir başlığa yığaraq təkrarlanan əməliyyatları idarə edir."
  },
  {
    id: "exam-sec5-02",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "while Dövrü ilə Geri Sayım",
    serif: "<code>geriSayim(baslangic)</code> funksiyasını təyin edin. <code>while</code> dövrü ilə verilən ədəddən 1-ə qədər geri sayın və hər addımda ədədi konsola çıxarın. Funksiyanı <code>3</code> ilə çağırın.",
    gozlenilenCixis: "3\n2\n1",
    starterCode: "function geriSayim(baslangic) {\n  // Kodunuzu buraya yazın\n}\n\ngeriSayim(3);",
    solutionCode: "function geriSayim(baslangic) {\n  let i = baslangic;\n  while (i > 0) {\n    console.log(i);\n    i--;\n  }\n}\n\ngeriSayim(3);",
    ipuclari: [
      "İpucu 1: while (i > 0) şərtini qurun.",
      "İpucu 2: Dövrün daxilində sayğacı azaltmağı (i--) unutmayın ki, sonsuz dövr yaranmasın.",
      "İpucu 3: 3, 2, 1 ardıcıllıqla çap olunacaq."
    ],
    teslimIzahi: "while dövrü şərt doğru (true) olduğu müddətcə blokdakı kodu icra edir və şərtin dəyişdirilməsi dövrün daxilində baş verir."
  },
  {
    id: "exam-sec5-03",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ASAN",
    basliq: "for...of ilə Kolleksiyanın Gəzilməsi",
    serif: "<code>dilleriCapEt(diller)</code> funksiyasını <code>for...of</code> dövründən istifadə edərək yazın. Hər bir dil adını konsola sətirbəsətir çıxarın. Funksiyanı <code>[\"JavaScript\", \"Python\", \"Go\"]</code> ilə çağırın.",
    gozlenilenCixis: "JavaScript\nPython\nGo",
    starterCode: "function dilleriCapEt(diller) {\n  // Kodunuzu buraya yazın\n}\n\ndilleriCapEt([\"JavaScript\", \"Python\", \"Go\"]);",
    solutionCode: "function dilleriCapEt(diller) {\n  for (const dil of diller) {\n    console.log(dil);\n  }\n}\n\ndilleriCapEt([\"JavaScript\", \"Python\", \"Go\"]);",
    ipuclari: [
      "İpucu 1: for...of dövrü massiv elementlərinin birbaşa dəyərlərini götürür.",
      "İpucu 2: İndeks sayğacına və ya massiv.length-ə ehtiyac yoxdur.",
      "İpucu 3: Hər bir dili konsola çıxarın."
    ],
    teslimIzahi: "for...of (ES6) iterasiya olunan (iterable) kolleksiyaların dəyərlərini birbaşa oxumaq üçün ən səliqəli və müasir sintaksisdir."
  },
  {
    id: "exam-sec5-04",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "for Dövrü ilə Ədədlərin Cəmi",
    serif: "<code>cemTap(n)</code> funksiyasını yazın. 1-dən <code>n</code>-ə qədər (n daxil) olan bütün tam ədədlərin cəmini <code>for</code> dövrü ilə hesablayın və konsola <code>Cəm: [cem]</code> formatında çıxarın. Funksiyanı <code>4</code> ilə çağırın.",
    gozlenilenCixis: "Cəm: 10",
    starterCode: "function cemTap(n) {\n  // Kodunuzu buraya yazın\n}\n\ncemTap(4);",
    solutionCode: "function cemTap(n) {\n  let cem = 0;\n  for (let i = 1; i <= n; i++) {\n    cem += i;\n  }\n  console.log(`Cəm: ${cem}`);\n}\n\ncemTap(4);",
    ipuclari: [
      "İpucu 1: 'cem' dəyişənini dövrdən əvvəl 0 olaraq başladın.",
      "İpucu 2: Dövr daxilində 'cem += i' ilə toplayın (1 + 2 + 3 + 4 = 10).",
      "İpucu 3: Dövrdən sonra tək bir sətir çap edin."
    ],
    teslimIzahi: "Akkumulyator (toplayıcı) dəyişən nümunəsi dövr daxilində məlumatların cəmlənməsi və yekun nəticənin əldə edilməsi üçün standartdır."
  },
  {
    id: "exam-sec5-05",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "continue ilə Tək Ədədlərin Buraxılması",
    serif: "<code>cutleriSec(maks)</code> funksiyasını for dövrü ilə qurun. 1-dən <code>maks</code>-a qədər ədədləri gəzin. Əgər ədəd təkdirsə <code>continue</code> ilə növbəti addıma keçin, cütdürsə konsola çıxarın. Funksiyanı <code>6</code> ilə çağırın.",
    gozlenilenCixis: "2\n4\n6",
    starterCode: "function cutleriSec(maks) {\n  // Kodunuzu buraya yazın\n}\n\ncutleriSec(6);",
    solutionCode: "function cutleriSec(maks) {\n  for (let i = 1; i <= maks; i++) {\n    if (i % 2 !== 0) {\n      continue;\n    }\n    console.log(i);\n  }\n}\n\ncutleriSec(6);",
    ipuclari: [
      "İpucu 1: 'i % 2 !== 0' şərti tək ədədləri bildirir.",
      "İpucu 2: continue əmri cari dövr iterasiyasını dayandırır və növbəti addıma keçir.",
      "İpucu 3: Konsola yalnız 2, 4, 6 çıxacaq."
    ],
    teslimIzahi: "continue açar sözü dövrün qalan gövdəsini atlayaraq dərhal növbəti addımın şərt yoxlanışına keçir."
  },
  {
    id: "exam-sec5-06",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "break ilə Axtarışın Dayandırılması",
    serif: "<code>elementiTap(massiv, hedef)</code> funksiyasını yazın. Massivi for dövrü ilə gəzin. Əgər element <code>hedef</code>-ə bərabərdirsə konsola <code>Tapıldı: [hedef]</code> çıxarın və <code>break</code> ilə dövrü dərhal dayandırın. Funksiyanı <code>[10, 25, 40, 55], 40</code> ilə çağırın.",
    gozlenilenCixis: "Tapıldı: 40",
    starterCode: "function elementiTap(massiv, hedef) {\n  // Kodunuzu buraya yazın\n}\n\nelementiTap([10, 25, 40, 55], 40);",
    solutionCode: "function elementiTap(massiv, hedef) {\n  for (let i = 0; i < massiv.length; i++) {\n    if (massiv[i] === hedef) {\n      console.log(`Tapıldı: ${hedef}`);\n      break;\n    }\n  }\n}\n\nelementiTap([10, 25, 40, 55], 40);",
    ipuclari: [
      "İpucu 1: Element tapılan kimi sonrakı elementləri yoxlamamaq üçün break istifadə edin.",
      "İpucu 2: 40 elementi 2-ci indeksdə tapılan kimi dövr bitir.",
      "İpucu 3: Formatı 'Tapıldı: 40' olaraq tamamlayın."
    ],
    teslimIzahi: "break açar sözü dövrün təbii sonunu gözləmədən onu dərhal xitam edərək lazımsız əməliyyatların qarşısını alır."
  },
  {
    id: "exam-sec5-07",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ASAN",
    basliq: "do...while Dövrünün Zəmanətli İcrası",
    serif: "<code>enAzBirDefe()</code> funksiyasını <code>do...while</code> dövrü ilə yazın. <code>let say = 10;</code> elan edin. Şərt <code>say < 5</code> (yalan) olmasına baxmayaraq dövr daxilindəki <code>İcra olundu: [say]</code> sətri bir dəfə konsola çıxmalı və dövr bitməlidir.",
    gozlenilenCixis: "İcra olundu: 10",
    starterCode: "function enAzBirDefe() {\n  // Kodunuzu buraya yazın\n}\n\nenAzBirDefe();",
    solutionCode: "function enAzBirDefe() {\n  let say = 10;\n  do {\n    console.log(`İcra olundu: ${say}`);\n  } while (say < 5);\n}\n\nenAzBirDefe();",
    ipuclari: [
      "İpucu 1: do { ... } while (şərt); sintaksisini qurun.",
      "İpucu 2: do...while şərti yalnız dövrün gövdəsi ən azı bir dəfə icra olunduqdan SONRA yoxlayır.",
      "İpucu 3: Çıxış 'İcra olundu: 10' olacaq."
    ],
    teslimIzahi: "do...while post-condition (sonradan yoxlanan) dövr növüdür və şərtin ilkin doğruluğundan asılı olmayaraq ən azı bir dəfə mütləq icra olunur."
  },
  {
    id: "exam-sec5-08",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "for...in ilə Obyekt Açarlarının Gəzilməsi",
    serif: "<code>obyektiGoster(obyekt)</code> funksiyasını <code>for...in</code> dövrü ilə tərtib edin. Hər bir xassə üçün konsola <code>[açar]: [dəyər]</code> formatında çıxış verin. Funksiyanı <code>{ ad: \"Ali\", yas: 26, seher: \"Sumqayıt\" }</code> ilə çağırın.",
    gozlenilenCixis: "ad: Ali\nyas: 26\nseher: Sumqayıt",
    starterCode: "function obyektiGoster(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\nobyektiGoster({ ad: \"Ali\", yas: 26, seher: \"Sumqayıt\" });",
    solutionCode: "function obyektiGoster(obyekt) {\n  for (const acar in obyekt) {\n    console.log(`${acar}: ${obyekt[acar]}`);\n  }\n}\n\nobyektiGoster({ ad: \"Ali\", yas: 26, seher: \"Sumqayıt\" });",
    ipuclari: [
      "İpucu 1: for...in dövrü obyektin sadalanan (enumerable) açarlarını gəzir.",
      "İpucu 2: Dəyəri oxumaq üçün bracket notation: 'obyekt[acar]' istifadə edin.",
      "İpucu 3: Hər bir xassəni alt-alta çap edin."
    ],
    teslimIzahi: "for...in dövrü obyekt xassələrinin adlarını (keys) ardıcıl əldə etmək üçün ən əlverişli vasitədir."
  },
  {
    id: "exam-sec5-09",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "İç-içə Dövr ilə Vurma Cədvəli Sətirləri",
    serif: "<code>vurmaSetri(eded, say)</code> funksiyasını for dövrü ilə yazın. 1-dən <code>say</code>-a qədər ədədlər üçün konsola <code>[eded] x [i] = [eded * i]</code> çıxarın. Funksiyanı <code>3, 3</code> ilə çağırın.",
    gozlenilenCixis: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9",
    starterCode: "function vurmaSetri(eded, say) {\n  // Kodunuzu buraya yazın\n}\n\nvurmaSetri(3, 3);",
    solutionCode: "function vurmaSetri(eded, say) {\n  for (let i = 1; i <= say; i++) {\n    console.log(`${eded} x ${i} = ${eded * i}`);\n  }\n}\n\nvurmaSetri(3, 3);",
    ipuclari: [
      "İpucu 1: 1-dən say-a qədər for dövrü qurun.",
      "İpucu 2: Hər addımda 'eded x i = eded*i' formatını çap edin.",
      "İpucu 3: 3 x 1 = 3, 3 x 2 = 6, 3 x 3 = 9 çıxacaq."
    ],
    teslimIzahi: "Dövrlər daxilində riyazi multiplikasiya sətir-sətir formatlanaraq cədvəl strukturlarının qurulmasında tətbiq olunur."
  },
  {
    id: "exam-sec5-10",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "while Dövrü ilə Ədədin Rəqəmləri Cəmi",
    serif: "<code>reqemlerCemi(eded)</code> funksiyasını while dövrü ilə təyin edin. Ədədin sonuncu rəqəmini <code>% 10</code> ilə götürüb toplayın və ədədi <code>Math.floor(eded / 10)</code> ilə azaldın. Konsola <code>Rəqəmlər Cəmi: [cəm]</code> formatında çıxarın. Funksiyanı <code>456</code> üçün çağırın.",
    gozlenilenCixis: "Rəqəmlər Cəmi: 15",
    starterCode: "function reqemlerCemi(eded) {\n  // Kodunuzu buraya yazın\n}\n\nreqemlerCemi(456);",
    solutionCode: "function reqemlerCemi(eded) {\n  let num = eded;\n  let cem = 0;\n  while (num > 0) {\n    cem += num % 10;\n    num = Math.floor(num / 10);\n  }\n  console.log(`Rəqəmlər Cəmi: ${cem}`);\n}\n\nreqemlerCemi(456);",
    ipuclari: [
      "İpucu 1: 456 % 10 = 6; 456 / 10 -> 45.",
      "İpucu 2: 45 % 10 = 5; 45 / 10 -> 4. Sonra 4 % 10 = 4; cəm = 6 + 5 + 4 = 15.",
      "İpucu 3: while (num > 0) şərti ədəd sıfırlanana qədər davam edir."
    ],
    teslimIzahi: "Riyazi məntiqdə ədədin mərtəbələrini ayrışdırmaq üçün qalıq (%) və tam bölmə (Math.floor) ardıcıl while dövründə tətbiq olunur."
  },
  {
    id: "exam-sec5-11",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Dövrlə Massiv İnversiyası (Tərsinə Çevirmə)",
    serif: "<code>tersineCevir(massiv)</code> funksiyasını təyin edin. Hazır <code>reverse()</code> metodundan İSTİFADƏ ETMƏDƏN, for dövrü ilə massivin elementlərini tərsinə düzüb yeni massiv formalaşdırın və konsola <code>Tərs massiv: [elementlər]</code> kimi çap edin. Funksiyanı <code>[1, 2, 3, 4]</code> ilə çağırın.",
    gozlenilenCixis: "Tərs massiv: 4, 3, 2, 1",
    starterCode: "function tersineCevir(massiv) {\n  // Kodunuzu buraya yazın\n}\n\ntersineCevir([1, 2, 3, 4]);",
    solutionCode: "function tersineCevir(massiv) {\n  const yeni = [];\n  for (let i = massiv.length - 1; i >= 0; i--) {\n    yeni.push(massiv[i]);\n  }\n  console.log(`Tərs massiv: ${yeni.join(\", \")}`);\n}\n\ntersineCevir([1, 2, 3, 4]);",
    ipuclari: [
      "İpucu 1: for dövrünün sayğacını 'massiv.length - 1' indeksindən başladın və 'i >= 0' olana qədər 'i--' ilə azaldın.",
      "İpucu 2: Hər addımda elementi yeni massivə push edin.",
      "İpucu 3: Nəticəni join(\", \") ilə birləşdirib çap edin."
    ],
    teslimIzahi: "Geriye doğru for dövrü (reverse traversal) massivləri və sətirləri tərsinə manipulyasiya etmək üçün təməl alqoritmik üsuldur."
  },
  {
    id: "exam-sec5-12",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Sadə Ədədlərin (Prime Numbers) Tapılması",
    serif: "<code>sadeEdebleriTap(limit)</code> funksiyasını iç-içə dövrlərlə qurun. 2-dən <code>limit</code>-ə qədər olan bütün sadə ədədləri (yalnız 1-ə və özünə bölünənləri) tapıb vergüllə konsola çıxarın. Funksiyanı <code>15</code> ilə çağırın.",
    gozlenilenCixis: "Sadə ədədlər: 2, 3, 5, 7, 11, 13",
    starterCode: "function sadeEdebleriTap(limit) {\n  // Kodunuzu buraya yazın\n}\n\nsadeEdebleriTap(15);",
    solutionCode: "function sadeEdebleriTap(limit) {\n  const sadeler = [];\n  for (let i = 2; i <= limit; i++) {\n    let sade = true;\n    for (let j = 2; j * j <= i; j++) {\n      if (i % j === 0) {\n        sade = false;\n        break;\n      }\n    }\n    if (sade) sadeler.push(i);\n  }\n  console.log(`Sadə ədədlər: ${sadeler.join(\", \")}`);\n}\n\nsadeEdebleriTap(15);",
    ipuclari: [
      "İpucu 1: Xarici dövr 2-dən limit-ə qədər ədədləri gəzir.",
      "İpucu 2: Daxili dövr hər ədədin 2-dən kvadrat kökünə qədər bölənlərini yoxlayır; bölən tapılarsa 'sade = false' edib break edir.",
      "İpucu 3: Sadə olanları massivə yığıb join(\", \") ilə çap edin."
    ],
    teslimIzahi: "Sadə ədədlərin axtarışı iç-içə dövrlər və erkən xitam (break) vasitəsilə optimallaşdırılmış riyazi süzgəc alqoritmidir."
  },
  {
    id: "exam-sec5-13",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "Fibonaççi Ardıcıllığının Dövrlə Hesablanması",
    serif: "<code>fibonacci(n)</code> funksiyasını for dövrü ilə qurun. İlk iki həddi <code>[0, 1]</code> olan ardıcıllığın ilk <code>n</code> sayda elementini hesablayın və konsola <code>Fibonacci: [siyahı]</code> formatında çıxarın. Funksiyanı <code>7</code> üçün çağırın.",
    gozlenilenCixis: "Fibonacci: 0, 1, 1, 2, 3, 5, 8",
    starterCode: "function fibonacci(n) {\n  // Kodunuzu buraya yazın\n}\n\nfibonacci(7);",
    solutionCode: "function fibonacci(n) {\n  const ardicilliq = [0, 1];\n  for (let i = 2; i < n; i++) {\n    ardicilliq.push(ardicilliq[i - 1] + ardicilliq[i - 2]);\n  }\n  console.log(`Fibonacci: ${ardicilliq.slice(0, n).join(\", \")}`);\n}\n\nfibonacci(7);",
    ipuclari: [
      "İpucu 1: Növbəti hədd əvvəlki iki həddin cəminə bərabərdir: a[i-1] + a[i-2].",
      "İpucu 2: for dövrü 2-ci indeksdən n-ə qədər davam edir.",
      "İpucu 3: 7 element üçün 0, 1, 1, 2, 3, 5, 8 ardıcıllığı çap olunacaq."
    ],
    teslimIzahi: "Dinamik proqramlaşdırmanın təməli olan Fibonaççi ardıcıllığı əvvəlki vəziyyətlərin cəmi əsasında yeni vəziyyəti formalaşdırır."
  },
  {
    id: "exam-sec5-14",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "ÇƏTİN",
    basliq: "İkiölçülü Matrisin (2D Array) Sətir Cəmləri",
    serif: "<code>matrisCemleri(matris)</code> funksiyasını iç-içə dövrlərlə qurun. Hər bir sətrin indeksini və daxilindəki ədədlərin cəmini konsola <code>Sətir [idx]: Cəm = [cem]</code> formatında çap edin. Funksiyanı <code>[[1, 2, 3], [4, 5, 6]]</code> ilə çağırın.",
    gozlenilenCixis: "Sətir 0: Cəm = 6\nSətir 1: Cəm = 15",
    starterCode: "function matrisCemleri(matris) {\n  // Kodunuzu buraya yazın\n}\n\nmatrisCemleri([[1, 2, 3], [4, 5, 6]]);",
    solutionCode: "function matrisCemleri(matris) {\n  for (let i = 0; i < matris.length; i++) {\n    let cem = 0;\n    for (let j = 0; j < matris[i].length; j++) {\n      cem += matris[i][j];\n    }\n    console.log(`Sətir ${i}: Cəm = ${cem}`);\n  }\n}\n\nmatrisCemleri([[1, 2, 3], [4, 5, 6]]);",
    ipuclari: [
      "İpucu 1: Xarici dövr sətirləri (i), daxili dövr sütunları (j) gəzir.",
      "İpucu 2: Hər yeni sətirə keçəndə 'cem' sıfırlanmalıdır.",
      "İpucu 3: Birinci sətir cəmi 6 (1+2+3), ikinci sətir cəmi 15 (4+5+6) olacaq."
    ],
    teslimIzahi: "İkiölçülü massivlərin idarə edilməsi sətir və sütun indekslərini koordinasiya edən iç-içə dövr konstruksiyalarına əsaslanır."
  },
  {
    id: "exam-sec5-15",
    bolmeId: 5,
    merheleId: 1,
    cetinlik: "EKSPERT",
    basliq: "Məlumat Kompressiyası (Run-Length Encoding - RLE)",
    serif: "<code>rleKompressiya(metn)</code> funksiyasını dövr ilə qurun. Ardıcıl təkrarlanan simvolları sayaraq <code>AABBBCCCC</code> mətnini <code>A2B3C4</code> formatına salın. Əgər simvol təkdirsə sayını 1 olaraq yazın. Yekun sıxılmış nəticəni konsola <code>Sıxılmış: [netice]</code> kimi çap edin. Funksiyanı <code>\"AABBBCCCC\"</code> ilə çağırın.",
    gozlenilenCixis: "Sıxılmış: A2B3C4",
    starterCode: "function rleKompressiya(metn) {\n  // Kodunuzu buraya yazın\n}\n\nrleKompressiya(\"AABBBCCCC\");",
    solutionCode: "function rleKompressiya(metn) {\n  let netice = \"\";\n  let say = 1;\n  for (let i = 0; i < metn.length; i++) {\n    if (metn[i] === metn[i + 1]) {\n      say++;\n    } else {\n      netice += metn[i] + say;\n      say = 1;\n    }\n  }\n  console.log(`Sıxılmış: ${netice}`);\n}\n\nrleKompressiya(\"AABBBCCCC\");",
    ipuclari: [
      "İpucu 1: Cari simvol növbəti simvola bərabərdirsə sayğacı artırın (say++).",
      "İpucu 2: Fərqlidirsə simvolu və sayını nəticə sətirinə əlavə edib sayğacı 1-ə qaytarın.",
      "İpucu 3: AABBBCCCC mətni üçün A2B3C4 alınacaq."
    ],
    teslimIzahi: "Run-Length Encoding (RLE) ardıcıl təkrarlanan məlumat fraqmentlərini simvol və say cütünə çevirən klassik sıxılma (lossless compression) alqoritmidir."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SEC_1_5_QUESTIONS };
}
