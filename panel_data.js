var TASKS_PANEL_DATA = [
  {
    "sectionId": "sec-1",
    "sectionTitle": "Bölmə 1: JS-ə Giriş & console.log()",
    "icon": "🚀",
    "tasks": [
      {
        "id": "tp-1-1",
        "title": "Salam Dünya",
        "difficulty": "Asan",
        "instruction": "Konsola <code>Salam, JavaScript!</code> mətnini çap edin.",
        "starterCode": "// Konsola Salam, JavaScript! çap edin\n",
        "expectedOutput": "Salam, JavaScript!",
        "hint": "console.log(\"Salam, JavaScript!\");"
      },
      {
        "id": "tp-1-2",
        "title": "İki Sətirli Məlumat",
        "difficulty": "Asan",
        "instruction": "İki ardıcıl <code>console.log()</code> çağırışı ilə birinci sətirdə <code>Ad: Əli</code>, ikinci sətirdə isə <code>Peşə: Tərtibatçı</code> çap edin.",
        "starterCode": "// İki sətirli məlumat çap edin\n",
        "expectedOutput": "Ad: Əli\nPeşə: Tərtibatçı",
        "hint": "console.log(\"Ad: Əli\");\nconsole.log(\"Peşə: Tərtibatçı\");"
      },
      {
        "id": "tp-1-3",
        "title": "Çoxlu Arqumentlə Çap",
        "difficulty": "Orta-asan",
        "instruction": "Tək bir <code>console.log()</code> əmrinə vergüllə 3 arqument ötürərək <code>JavaScript öyrənmək maraqlıdır</code> çap edin.",
        "starterCode": "// Tək console.log ilə 3 sözü arqument kimi ötürün\n",
        "expectedOutput": "JavaScript öyrənmək maraqlıdır",
        "hint": "console.log(\"JavaScript\", \"öyrənmək\", \"maraqlıdır\");"
      },
      {
        "id": "tp-1-4",
        "title": "Konsolda Hesablama",
        "difficulty": "Orta-asan",
        "instruction": "<code>15</code> və <code>27</code> ədədlərinin cəmini birbaşa <code>console.log()</code> daxilində hesablayıb nəticəni çap edin.",
        "starterCode": "// 15 və 27 ədədlərinin cəmini hesablayıb çap edin\n",
        "expectedOutput": "42",
        "hint": "console.log(15 + 27);"
      },
      {
        "id": "tp-1-5",
        "title": "Xəbərdarlıq və Təsdiq",
        "difficulty": "Orta-çətin",
        "instruction": "Əvvəlcə <code>console.warn()</code> ilə <code>Diqqət: Sistem yüklənir</code>, ardınca <code>console.log()</code> ilə <code>Uğurla tamamlandı</code> mesajını çıxarın.",
        "starterCode": "// console.warn və console.log metodlarını tətbiq edin\n",
        "expectedOutput": "Diqqət: Sistem yüklənir\nUğurla tamamlandı",
        "hint": "console.warn(\"Diqqət: Sistem yüklənir\");\nconsole.log(\"Uğurla tamamlandı\");"
      },
      {
        "id": "tp-1-6",
        "title": "Riyazi Əməliyyatların Sırası",
        "difficulty": "Orta-çətin",
        "instruction": "<code>(20 - 5) * 3 / 5</code> riyazi ifadəsinin nəticəsini konsola çıxarın.",
        "starterCode": "// Mötərizəli riyazi ifadənin nəticəsini çap edin\n",
        "expectedOutput": "9",
        "hint": "console.log((20 - 5) * 3 / 5);"
      },
      {
        "id": "tp-1-7",
        "title": "Dırnaqlı Sitat Çapı",
        "difficulty": "Orta-çətin",
        "instruction": "Konsola dəqiq olaraq <code>JavaScript \"ECMAScript\" standartına əsaslanır.</code> mətnini (qoşa dırnaq daxil) çap edin.",
        "starterCode": "// Dırnaq simvollarını nəzərə alaraq mətni çap edin\n",
        "expectedOutput": "JavaScript \"ECMAScript\" standartına əsaslanır.",
        "hint": "console.log('JavaScript \"ECMAScript\" standartına əsaslanır.');"
      },
      {
        "id": "tp-1-8",
        "title": "Çoxsətirli Şablon Sətir",
        "difficulty": "Orta-çətin",
        "instruction": "Template literal (backtick `) istifadə edərək üç sətirlik proqramçı şüarını konsola verin:\n<code>Kod yaz</code>\n<code>Sınaqdan keçir</code>\n<code>İnkişaf et</code>",
        "starterCode": "// Backtick (`) ilə çoxsətirli mətn çap edin\n",
        "expectedOutput": "Kod yaz\nSınaqdan keçir\nİnkişaf et",
        "hint": "console.log(`Kod yaz\\nSınaqdan keçir\\nİnkişaf et`);"
      },
      {
        "id": "tp-1-9",
        "title": "Qarışıq Tiplərin Birgə Çapı",
        "difficulty": "Çətin",
        "instruction": "Tək bir <code>console.log()</code> ilə <code>\"İstifadəçi ID:\"</code>, <code>101</code> və <code>true</code> dəyərlərini yan-yana çap edin.",
        "starterCode": "// Mətn, rəqəm və boolean dəyərlərini tək console.log ilə çap edin\n",
        "expectedOutput": "İstifadəçi ID: 101 true",
        "hint": "console.log(\"İstifadəçi ID:\", 101, true);"
      },
      {
        "id": "tp-1-10",
        "title": "Xəta Mesajı və Kod",
        "difficulty": "Çətin",
        "instruction": "Əvvəlcə <code>console.error()</code> ilə <code>Kritik xəta: Fayl tapılmadı!</code>, ardınca <code>console.log()</code> ilə <code>Status: 404</code> çap edin.",
        "starterCode": "// console.error və console.log metodlarını birgə tətbiq edin\n",
        "expectedOutput": "Kritik xəta: Fayl tapılmadı!\nStatus: 404",
        "hint": "console.error(\"Kritik xəta: Fayl tapılmadı!\");\nconsole.log(\"Status: 404\");"
      }
    ]
  },
  {
    "sectionId": "sec-2",
    "sectionTitle": "Bölmə 2: Dəyişənlər (let, const, var) və Primitiv Tiplər",
    "icon": "📦",
    "tasks": [
      {
        "id": "tp-2-1",
        "title": "Sabit Dəyişən Elanı",
        "difficulty": "Asan",
        "instruction": "<code>const</code> ilə <code>olke</code> adlı dəyişən yaradıb <code>\"Azərbaycan\"</code> mənimsədin və konsola çıxarın.",
        "starterCode": "// const ilə olke dəyişəni yaradın və konsola verin\n",
        "expectedOutput": "Azərbaycan",
        "hint": "const olke = \"Azərbaycan\";\nconsole.log(olke);"
      },
      {
        "id": "tp-2-2",
        "title": "Dəyişənin Qiymətini Yeniləmək",
        "difficulty": "Asan",
        "instruction": "<code>let xal = 50;</code> təyin edin, sonrakı sətirdə onun qiymətini <code>85</code> olaraq dəyişin və çap edin.",
        "starterCode": "// let xal təyin edin, qiymətini 85-ə dəyişib çap edin\n",
        "expectedOutput": "85",
        "hint": "let xal = 50;\nxal = 85;\nconsole.log(xal);"
      },
      {
        "id": "tp-2-3",
        "title": "Ədədi Tipin Yoxlanması",
        "difficulty": "Orta-asan",
        "instruction": "<code>let qiymet = 45.5;</code> təyin edin və <code>typeof qiymet</code> ifadəsinin nəticəsini konsola verin.",
        "starterCode": "// qiymet dəyişəninin tipini typeof ilə konsola çıxarın\n",
        "expectedOutput": "number",
        "hint": "let qiymet = 45.5;\nconsole.log(typeof qiymet);"
      },
      {
        "id": "tp-2-4",
        "title": "Boolean Dəyər və Tipi",
        "difficulty": "Orta-asan",
        "instruction": "<code>const aktivdir = true;</code> elan edin və onun tipini <code>typeof</code> ilə konsola çap edin.",
        "starterCode": "// Boolean dəyişəninin tipini konsola çıxarın\n",
        "expectedOutput": "boolean",
        "hint": "const aktivdir = true;\nconsole.log(typeof aktivdir);"
      },
      {
        "id": "tp-2-5",
        "title": "Undefined və Null Tipləri",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let a;</code> və <code>let b = null;</code> dəyişənlərinin tiplərini ardıcıl olaraq iki ayrı sətirdə çap edin.",
        "starterCode": "// a və b dəyişənlərinin tiplərini konsola çıxarın\n",
        "expectedOutput": "undefined\nobject",
        "hint": "let a;\nlet b = null;\nconsole.log(typeof a);\nconsole.log(typeof b);"
      },
      {
        "id": "tp-2-6",
        "title": "Dairənin Sahəsini Hesablamaq",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const PI = 3.14;</code> və <code>let radius = 10;</code> təyin edin. Dairənin sahəsini (<code>PI * radius * radius</code>) hesablayıb çap edin.",
        "starterCode": "// PI və radius ilə sahəni hesablayıb konsola çıxarın\n",
        "expectedOutput": "314",
        "hint": "const PI = 3.14;\nlet radius = 10;\nconsole.log(PI * radius * radius);"
      },
      {
        "id": "tp-2-7",
        "title": "Ədədin Mətnə Çevrilməsi",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let il = 2026;</code> dəyişənini <code>String(il)</code> funksiyası ilə sətirə çevirin və yaranan yeni dəyərin tipini (<code>typeof</code>) konsola verin.",
        "starterCode": "// Ədədi sətirə çevirib tipini çap edin\n",
        "expectedOutput": "string",
        "hint": "let il = 2026;\nlet strIl = String(il);\nconsole.log(typeof strIl);"
      },
      {
        "id": "tp-2-8",
        "title": "Mətndən Ədədə Çevrilmə",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let miqdar = \"125\";</code> sətirini <code>Number(miqdar)</code> ilə ədədə çevirərək üzərinə <code>25</code> gəlin və cəmi çap edin.",
        "starterCode": "// Sətiri ədədə çevirib 25 əlavə edin\n",
        "expectedOutput": "150",
        "hint": "let miqdar = \"125\";\nconsole.log(Number(miqdar) + 25);"
      },
      {
        "id": "tp-2-9",
        "title": "BigInt Böyük Ədəd Tipi",
        "difficulty": "Çətin",
        "instruction": "<code>const boyukEded = 12345678901234567890n;</code> təyin edin və <code>typeof boyukEded</code> nəticəsini konsola çap edin.",
        "starterCode": "// BigInt dəyişəninin tipini konsola çıxarın\n",
        "expectedOutput": "bigint",
        "hint": "const boyukEded = 12345678901234567890n;\nconsole.log(typeof boyukEded);"
      },
      {
        "id": "tp-2-10",
        "title": "NaN (Not-a-Number) Yoxlanışı",
        "difficulty": "Çətin",
        "instruction": "<code>\"kod\" / 2</code> riyazi əməliyyatının nəticəsini dəyişənə mənimsədin və <code>Number.isNaN()</code> metodu ilə onun NaN olduğunu yoxlayıb konsola çıxarın.",
        "starterCode": "// Qeyri-mümkün bölmə nəticəsini Number.isNaN ilə yoxlayın\n",
        "expectedOutput": "true",
        "hint": "let cavab = \"kod\" / 2;\nconsole.log(Number.isNaN(cavab));"
      }
    ]
  },
  {
    "sectionId": "sec-3",
    "sectionTitle": "Bölmə 3: Operatorlar (===, !==, arifmetik, məntiqi)",
    "icon": "⚡",
    "tasks": [
      {
        "id": "tp-3-1",
        "title": "Qalıqlı Bölmə Operatoru (%)",
        "difficulty": "Asan",
        "instruction": "<code>29</code> ədədinin <code>4</code>-ə bölünməsindən alınan qalığı tapıb çap edin.",
        "starterCode": "// 29 % 4 qalığını konsola çıxarın\n",
        "expectedOutput": "1",
        "hint": "console.log(29 % 4);"
      },
      {
        "id": "tp-3-2",
        "title": "Qüvvətə Yüksəltmə (**)",
        "difficulty": "Asan",
        "instruction": "<code>2</code>-nin <code>8</code>-ci dərəcədən qüvvətini <code>**</code> operatoru ilə hesablayıb konsola çıxarın.",
        "starterCode": "// 2 ** 8 ifadəsini hesablayıb çap edin\n",
        "expectedOutput": "256",
        "hint": "console.log(2 ** 8);"
      },
      {
        "id": "tp-3-3",
        "title": "Ciddi və Sərbəst Bərabərlik",
        "difficulty": "Orta-asan",
        "instruction": "Ardıcıl olaraq <code>5 === \"5\"</code> və <code>5 == \"5\"</code> müqayisələrinin nəticələrini konsola çıxarın (hər biri ayrı sətirdə).",
        "starterCode": "// === və == müqayisələrini çap edin\n",
        "expectedOutput": "false\ntrue",
        "hint": "console.log(5 === \"5\");\nconsole.log(5 == \"5\");"
      },
      {
        "id": "tp-3-4",
        "title": "Məntiqi VƏ (&&) Operatoru",
        "difficulty": "Orta-asan",
        "instruction": "<code>let yas = 20; let biletVar = true;</code> şərtlərini təyin edin və həm yaşın 18-dən böyük-bərabər olduğunu, həm də biletin olduğunu <code>&&</code> ilə yoxlayıb nəticəni konsola verin.",
        "starterCode": "// yas >= 18 və biletVar şərtini yoxlayın\n",
        "expectedOutput": "true",
        "hint": "let yas = 20;\nlet biletVar = true;\nconsole.log(yas >= 18 && biletVar);"
      },
      {
        "id": "tp-3-5",
        "title": "Məntiqi VƏ YA (||) Operatoru",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let isAdmin = false; let isEditor = true;</code> təyin edin. İstifadəçinin ya admin ya da redaktor olmasını <code>||</code> ilə yoxlayıb çap edin.",
        "starterCode": "// isAdmin || isEditor şərtini yoxlayıb çap edin\n",
        "expectedOutput": "true",
        "hint": "let isAdmin = false;\nlet isEditor = true;\nconsole.log(isAdmin || isEditor);"
      },
      {
        "id": "tp-3-6",
        "title": "Nullish Coalescing (??) Operatoru",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let parametr = null;</code> təyin edin. <code>parametr ?? 10</code> ifadəsinin nəticəsini konsola verin.",
        "starterCode": "// Nullish coalescing (??) operatorunun nəticəsini çap edin\n",
        "expectedOutput": "10",
        "hint": "let parametr = null;\nconsole.log(parametr ?? 10);"
      },
      {
        "id": "tp-3-7",
        "title": "Məntiqi İnkar (!) Operatoru",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let aciqdir = false;</code> dəyişəninin inkarını (<code>!aciqdir</code>) konsola çıxarın.",
        "starterCode": "// !aciqdir ifadəsini konsola verin\n",
        "expectedOutput": "true",
        "hint": "let aciqdir = false;\nconsole.log(!aciqdir);"
      },
      {
        "id": "tp-3-8",
        "title": "Birləşdirilmiş Mənimsətmə",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let x = 10;</code> təyin edin. Əvvəlcə <code>x += 5;</code>, sonra <code>x *= 2;</code> əməliyyatlarını icra edib <code>x</code>-in son qiymətini çap edin.",
        "starterCode": "// x dəyişənini mənimsətmə operatorları ilə dəyişib çap edin\n",
        "expectedOutput": "30",
        "hint": "let x = 10;\nx += 5;\nx *= 2;\nconsole.log(x);"
      },
      {
        "id": "tp-3-9",
        "title": "Qısa Qapanma (Short-circuiting)",
        "difficulty": "Çətin",
        "instruction": "<code>let ad = \"\" || \"Anonim\";</code> ifadəsini icra edin və <code>ad</code> dəyişəninin dəyərini konsola çıxarın.",
        "starterCode": "// || operatoru ilə defolt dəyərin seçilməsini yoxlayın\n",
        "expectedOutput": "Anonim",
        "hint": "let ad = \"\" || \"Anonim\";\nconsole.log(ad);"
      },
      {
        "id": "tp-3-10",
        "title": "Mürəkkəb Müqayisə Şərti",
        "difficulty": "Çətin",
        "instruction": "<code>let a = 15;</code> dəyişəninin 10-dan böyük, 20-dən kiçik və tək ədəd (<code>a % 2 !== 0</code>) olduğunu tək məntiqi ifadə ilə yoxlayıb nəticəni çap edin.",
        "starterCode": "// a > 10 && a < 20 && a % 2 !== 0 şərtini yoxlayın\n",
        "expectedOutput": "true",
        "hint": "let a = 15;\nconsole.log(a > 10 && a < 20 && a % 2 !== 0);"
      }
    ]
  },
  {
    "sectionId": "sec-4",
    "sectionTitle": "Bölmə 4: Şərt İfadələri (if-else, ternary, switch-case)",
    "icon": "🔀",
    "tasks": [
      {
        "id": "tp-4-1",
        "title": "Sadə if-else Şərti",
        "difficulty": "Asan",
        "instruction": "<code>let bal = 75;</code> təyin edin. Əgər bal 50 və ya daha yüksəkdirsə <code>Keçdi</code>, əks halda <code>Kəsildi</code> çap edin.",
        "starterCode": "// if-else ilə balı yoxlayıb nəticəni konsola verin\n",
        "expectedOutput": "Keçdi",
        "hint": "let bal = 75;\nif (bal >= 50) {\n  console.log(\"Keçdi\");\n} else {\n  console.log(\"Kəsildi\");\n}"
      },
      {
        "id": "tp-4-2",
        "title": "Üçlük (Ternary) Operatoru",
        "difficulty": "Asan",
        "instruction": "<code>let temp = 28;</code> təyin edin. Ternary operatoru ilə temperatur 25-dən çoxdursa <code>İsti</code>, əks halda <code>Mülayim</code> çap edin.",
        "starterCode": "// Ternary operatoru (? :) ilə nəticəni konsola verin\n",
        "expectedOutput": "İsti",
        "hint": "let temp = 28;\nconsole.log(temp > 25 ? \"İsti\" : \"Mülayim\");"
      },
      {
        "id": "tp-4-3",
        "title": "Çoxşaxəli if - else if",
        "difficulty": "Orta-asan",
        "instruction": "<code>let saat = 14;</code> təyin edin. Əgər saat 12-dən kiçikdirsə <code>Sabahınız xeyir</code>, 18-dən kiçikdirsə <code>Günortanız xeyir</code>, əks halda <code>Axşamınız xeyir</code> çap edin.",
        "starterCode": "// Günün vaxtına uyğun salamlama çap edin\n",
        "expectedOutput": "Günortanız xeyir",
        "hint": "let saat = 14;\nif (saat < 12) {\n  console.log(\"Sabahınız xeyir\");\n} else if (saat < 18) {\n  console.log(\"Günortanız xeyir\");\n} else {\n  console.log(\"Axşamınız xeyir\");\n}"
      },
      {
        "id": "tp-4-4",
        "title": "Switch-Case Həftənin Günü",
        "difficulty": "Orta-asan",
        "instruction": "<code>let gun = 3;</code> təyin edin. <code>switch (gun)</code> ilə 1 olarsa <code>Bazar ertəsi</code>, 2 olarsa <code>Çərşənbə axşamı</code>, 3 olarsa <code>Çərşənbə</code> çap edin.",
        "starterCode": "// switch bloku ilə günün adını çıxarın\n",
        "expectedOutput": "Çərşənbə",
        "hint": "let gun = 3;\nswitch (gun) {\n  case 1: console.log(\"Bazar ertəsi\"); break;\n  case 2: console.log(\"Çərşənbə axşamı\"); break;\n  case 3: console.log(\"Çərşənbə\"); break;\n}"
      },
      {
        "id": "tp-4-5",
        "title": "Müsbət, Mənfi və ya Sıfır",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let eded = -7;</code> təyin edin. Ədədin 0-dan böyük olarsa <code>Müsbət</code>, kiçik olarsa <code>Mənfi</code>, bərabər olarsa <code>Sıfır</code> olduğunu konsola yazın.",
        "starterCode": "// Ədədin işarəsini yoxlayıb çap edin\n",
        "expectedOutput": "Mənfi",
        "hint": "let eded = -7;\nif (eded > 0) console.log(\"Müsbət\");\nelse if (eded < 0) console.log(\"Mənfi\");\nelse console.log(\"Sıfır\");"
      },
      {
        "id": "tp-4-6",
        "title": "Cüt və ya Tək Ədəd",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let n = 18;</code> təyin edin. Ternary operatoru ilə n-in cüt (<code>Cüt</code>) və ya tək (<code>Tək</code>) olduğunu müəyyən edib konsola çıxarın.",
        "starterCode": "// n ədədinin cüt və ya tək olduğunu ternary ilə tapın\n",
        "expectedOutput": "Cüt",
        "hint": "let n = 18;\nconsole.log(n % 2 === 0 ? \"Cüt\" : \"Tək\");"
      },
      {
        "id": "tp-4-7",
        "title": "VIP Endirim Hesablaması",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let qiymet = 120; let status = \"VIP\";</code> təyin edin. Əgər istifadəçi VIP-dirsə qiymətə 20% endirim tətbiq edib (<code>qiymet * 0.8</code>), əks halda tam qiyməti konsola çap edin.",
        "starterCode": "// VIP statusuna görə ödəniləcək məbləği hesablayın\n",
        "expectedOutput": "96",
        "hint": "let qiymet = 120;\nlet status = \"VIP\";\nconsole.log(status === \"VIP\" ? qiymet * 0.8 : qiymet);"
      },
      {
        "id": "tp-4-8",
        "title": "Switch Default Şərti",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let rol = \"qonaq\";</code> üçün switch yazın: <code>admin</code> olarsa <code>Tam giriş</code>, <code>moderator</code> olarsa <code>Redaktə icazəsi</code>, digər hallarda (<code>default</code>) <code>Baxış icazəsi</code> çap edin.",
        "starterCode": "// switch daxilində default blokunu tətbiq edin\n",
        "expectedOutput": "Baxış icazəsi",
        "hint": "let rol = \"qonaq\";\nswitch (rol) {\n  case \"admin\": console.log(\"Tam giriş\"); break;\n  case \"moderator\": console.log(\"Redaktə icazəsi\"); break;\n  default: console.log(\"Baxış icazəsi\");\n}"
      },
      {
        "id": "tp-4-9",
        "title": "Üç Ədədin Ən Böyüyü",
        "difficulty": "Çətin",
        "instruction": "<code>let a = 14, b = 29, c = 21;</code> dəyişənlərindən ən böyüyünü <code>Math.max()</code> və ya <code>if</code> şərtləri ilə tapıb konsola çap edin.",
        "starterCode": "// a, b, c ədədlərindən ən böyüyünü konsola çıxarın\n",
        "expectedOutput": "29",
        "hint": "let a = 14, b = 29, c = 21;\nconsole.log(Math.max(a, b, c));"
      },
      {
        "id": "tp-4-10",
        "title": "İç-içə Ternary Qiymətləndirmə",
        "difficulty": "Çətin",
        "instruction": "<code>let xal = 88;</code> dəyişəni üçün: 90 və daha çox olarsa <code>A</code>, 80 və daha çox olarsa <code>B</code>, 70 və daha çox olarsa <code>C</code>, əks halda <code>F</code> qaytaran zəncirvari ternary yazın və nəticəni çap edin.",
        "starterCode": "// Zəncirvari ternary ilə qiymət hərfini çap edin\n",
        "expectedOutput": "B",
        "hint": "let xal = 88;\nlet qiymet = xal >= 90 ? \"A\" : xal >= 80 ? \"B\" : xal >= 70 ? \"C\" : \"F\";\nconsole.log(qiymet);"
      }
    ]
  },
  {
    "sectionId": "sec-5",
    "sectionTitle": "Bölmə 5: Dövrlər (for, while, for...of, for...in)",
    "icon": "🔄",
    "tasks": [
      {
        "id": "tp-5-1",
        "title": "Sadə for Dövrü",
        "difficulty": "Asan",
        "instruction": "<code>for</code> dövrü istifadə edərək 1-dən 5-ə qədər (5 daxil olmaqla) ədədləri hər birini ayrı sətirdə çap edin.",
        "starterCode": "// 1-dən 5-ə qədər sayan for dövrü yazın\n",
        "expectedOutput": "1\n2\n3\n4\n5",
        "hint": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
      },
      {
        "id": "tp-5-2",
        "title": "Geri Sayım Dövrü",
        "difficulty": "Asan",
        "instruction": "<code>for</code> dövrü ilə 3-dən 1-ə qədər geri sayın (hər sətirdə bir rəqəm), dövrdən dərhal sonra isə <code>Start!</code> çap edin.",
        "starterCode": "// 3-dən 1-ə geri sayın və Start! çap edin\n",
        "expectedOutput": "3\n2\n1\nStart!",
        "hint": "for (let i = 3; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log(\"Start!\");"
      },
      {
        "id": "tp-5-3",
        "title": "while ilə Ədədlərin Cəmi",
        "difficulty": "Orta-asan",
        "instruction": "<code>while</code> dövrü ilə 1-dən 10-a qədər (10 daxil) olan ədədlərin cəmini hesablayıb nəticəni konsola verin.",
        "starterCode": "// while dövrü ilə 1..10 cəmini tapın\n",
        "expectedOutput": "55",
        "hint": "let cem = 0;\nlet i = 1;\nwhile (i <= 10) {\n  cem += i;\n  i++;\n}\nconsole.log(cem);"
      },
      {
        "id": "tp-5-4",
        "title": "for...of ilə Massiv İterasiyası",
        "difficulty": "Orta-asan",
        "instruction": "<code>const diller = [\"JS\", \"Python\", \"Rust\"];</code> massivinin hər bir elementini <code>for...of</code> dövrü ilə ayrı sətirdə konsola çıxarın.",
        "starterCode": "// for...of dövrü ilə massiv elementlərini çap edin\n",
        "expectedOutput": "JS\nPython\nRust",
        "hint": "const diller = [\"JS\", \"Python\", \"Rust\"];\nfor (const dil of diller) {\n  console.log(dil);\n}"
      },
      {
        "id": "tp-5-5",
        "title": "Yalnız Cüt Ədədləri Çap Etmək",
        "difficulty": "Orta-çətin",
        "instruction": "<code>for</code> dövrü ilə 2-dən 10-a qədər (10 daxil) olan cüt ədədləri (2, 4, 6, 8, 10) ayrı sətirlərdə çap edin.",
        "starterCode": "// 2-dən 10-a qədər cüt ədədləri çap edin (addım: i += 2)\n",
        "expectedOutput": "2\n4\n6\n8\n10",
        "hint": "for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}"
      },
      {
        "id": "tp-5-6",
        "title": "break ilə Dövrü Dayandırmaq",
        "difficulty": "Orta-çətin",
        "instruction": "1-dən 10-a qədər sayan dövr qurun. Lakin ədəd 4-ə çatdıqda <code>break</code> ilə dövrü dərhal saxlayın. Yalnız 4-ə qədər olan rəqəmləri (1, 2, 3) çap edin.",
        "starterCode": "// i === 4 olduqda break tətbiq edin\n",
        "expectedOutput": "1\n2\n3",
        "hint": "for (let i = 1; i <= 10; i++) {\n  if (i === 4) break;\n  console.log(i);\n}"
      },
      {
        "id": "tp-5-7",
        "title": "continue ilə Addımı Ötürmək",
        "difficulty": "Orta-çətin",
        "instruction": "1-dən 5-ə qədər ədədləri konsola çıxarın, lakin <code>3</code> ədədini <code>continue</code> ilə ötürün (çap etməyin).",
        "starterCode": "// i === 3 olduqda continue tətbiq edin\n",
        "expectedOutput": "1\n2\n4\n5",
        "hint": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}"
      },
      {
        "id": "tp-5-8",
        "title": "for...in ilə Obyekt Açarları",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const avto = { marka: \"Toyota\", model: \"Corolla\", il: 2022 };</code> obyektinin hər açar və dəyərini <code>for...in</code> ilə <code>açar: dəyər</code> formatında konsola verin.",
        "starterCode": "// for...in ilə açar və dəyərləri çap edin\n",
        "expectedOutput": "marka: Toyota\nmodel: Corolla\nil: 2022",
        "hint": "const avto = { marka: \"Toyota\", model: \"Corolla\", il: 2022 };\nfor (const key in avto) {\n  console.log(`${key}: ${avto[key]}`);\n}"
      },
      {
        "id": "tp-5-9",
        "title": "Faktorial Hesablanması",
        "difficulty": "Çətin",
        "instruction": "<code>let n = 5;</code> ədədinin faktorialını (1 * 2 * 3 * 4 * 5) dövr vasitəsilə hesablayıb nəticəni konsola çıxarın.",
        "starterCode": "// Dövr ilə 5 faktorialı hesablayın\n",
        "expectedOutput": "120",
        "hint": "let n = 5;\nlet f = 1;\nfor (let i = 1; i <= n; i++) {\n  f *= i;\n}\nconsole.log(f);"
      },
      {
        "id": "tp-5-10",
        "title": "Sadə Vurma Cədvəli Sətirləri",
        "difficulty": "Çətin",
        "instruction": "<code>for</code> dövrü ilə 2 ədədinin 1-dən 3-ə qədər vurulmasını <code>2 x 1 = 2</code>, <code>2 x 2 = 4</code>, <code>2 x 3 = 6</code> şəklində çap edin.",
        "starterCode": "// Şablon sətir ilə vurma əməliyyatlarını çap edin\n",
        "expectedOutput": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6",
        "hint": "for (let i = 1; i <= 3; i++) {\n  console.log(`2 x ${i} = ${2 * i}`);\n}"
      }
    ]
  },
  {
    "sectionId": "sec-6",
    "sectionTitle": "Bölmə 6: Massivlər (Arrays) və Əsas Metodlar",
    "icon": "📚",
    "tasks": [
      {
        "id": "tp-6-1",
        "title": "Massiv Elementlərinə Giriş",
        "difficulty": "Asan",
        "instruction": "<code>const meyveler = [\"Alma\", \"Banan\", \"Gilas\"];</code> massivinin birinci və sonuncu elementini iki ayrı sətirdə çap edin.",
        "starterCode": "// Birinci (0) və sonuncu indeksi konsola verin\n",
        "expectedOutput": "Alma\nGilas",
        "hint": "const meyveler = [\"Alma\", \"Banan\", \"Gilas\"];\nconsole.log(meyveler[0]);\nconsole.log(meyveler[meyveler.length - 1]);"
      },
      {
        "id": "tp-6-2",
        "title": "Element Əlavə Etmə (push)",
        "difficulty": "Asan",
        "instruction": "<code>const rengler = [\"Qırmızı\", \"Yaşıl\"];</code> massivinə <code>push()</code> ilə <code>\"Mavi\"</code> əlavə edin və massivin yeni uzunluğunu (<code>length</code>) çap edin.",
        "starterCode": "// push edib length dəyərini konsola çıxarın\n",
        "expectedOutput": "3",
        "hint": "const rengler = [\"Qırmızı\", \"Yaşıl\"];\nrengler.push(\"Mavi\");\nconsole.log(rengler.length);"
      },
      {
        "id": "tp-6-3",
        "title": "Elementlərin Silinməsi (shift və pop)",
        "difficulty": "Orta-asan",
        "instruction": "<code>const ededler = [10, 20, 30, 40];</code> massivindən əvvəldən bir element (<code>shift()</code>) və sondan bir element (<code>pop()</code>) silin, qalan massivi çap edin.",
        "starterCode": "// shift və pop tətbiq edib massivi çap edin\n",
        "expectedOutput": "[ 20, 30 ]",
        "hint": "const ededler = [10, 20, 30, 40];\nededler.shift();\nededler.pop();\nconsole.log(ededler);"
      },
      {
        "id": "tp-6-4",
        "title": "Elementin Mövcudluğu (includes)",
        "difficulty": "Orta-asan",
        "instruction": "<code>const seherler = [\"Bakı\", \"Gəncə\", \"Şəki\"];</code> massivində <code>\"Bakı\"</code> və <code>\"Sumqayıt\"</code> olub-olmadığını <code>includes()</code> ilə yoxlayıb ardıcıl çap edin.",
        "starterCode": "// includes metodu ilə yoxlayın\n",
        "expectedOutput": "true\nfalse",
        "hint": "const seherler = [\"Bakı\", \"Gəncə\", \"Şəki\"];\nconsole.log(seherler.includes(\"Bakı\"));\nconsole.log(seherler.includes(\"Sumqayıt\"));"
      },
      {
        "id": "tp-6-5",
        "title": "Elementləri Birləşdirmək (join)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const sozler = [\"JavaScript\", \"çox\", \"güclüdür\"];</code> massivinin elementlərini boşluqla birləşdirərək (<code>join(\" \")</code>) tək bir sətir kimi çap edin.",
        "starterCode": "// join(' ') ilə mətni birləşdirib çap edin\n",
        "expectedOutput": "JavaScript çox güclüdür",
        "hint": "const sozler = [\"JavaScript\", \"çox\", \"güclüdür\"];\nconsole.log(sozler.join(\" \"));"
      },
      {
        "id": "tp-6-6",
        "title": "Hissə Kəsmək (slice)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const reqemler = [1, 2, 3, 4, 5];</code> massivindən <code>slice(1, 4)</code> ilə hissə götürüb yaranan yeni massivi konsola çıxarın.",
        "starterCode": "// slice(1, 4) nəticəsini konsola verin\n",
        "expectedOutput": "[ 2, 3, 4 ]",
        "hint": "const reqemler = [1, 2, 3, 4, 5];\nconsole.log(reqemler.slice(1, 4));"
      },
      {
        "id": "tp-6-7",
        "title": "Massivin Tərsinə Çevrilməsi (reverse)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const herfler = [\"a\", \"b\", \"c\"];</code> massivini <code>reverse()</code> ilə tərsinə çevirib konsola çıxarın.",
        "starterCode": "// reverse() metodu ilə massivi çevirin və çap edin\n",
        "expectedOutput": "[ 'c', 'b', 'a' ]",
        "hint": "const herfler = [\"a\", \"b\", \"c\"];\nherfler.reverse();\nconsole.log(herfler);"
      },
      {
        "id": "tp-6-8",
        "title": "Elementin İndeksini Tapmaq (indexOf)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const adlar = [\"Murad\", \"Aysel\", \"Nigar\"];</code> massivində <code>\"Aysel\"</code> elementinin indeksini tapıb çap edin.",
        "starterCode": "// indexOf ilə 'Aysel' indeksini tapın\n",
        "expectedOutput": "1",
        "hint": "const adlar = [\"Murad\", \"Aysel\", \"Nigar\"];\nconsole.log(adlar.indexOf(\"Aysel\"));"
      },
      {
        "id": "tp-6-9",
        "title": "Spread (...) ilə Massivləri Birləşdirmək",
        "difficulty": "Çətin",
        "instruction": "<code>const arr1 = [1, 2]; const arr2 = [3, 4];</code> massivlərini spread (<code>[...arr1, ...arr2]</code>) vasitəsilə birləşdirib yeni massivi çap edin.",
        "starterCode": "// Spread operatoru ilə iki massivi birləşdirin\n",
        "expectedOutput": "[ 1, 2, 3, 4 ]",
        "hint": "const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconsole.log([...arr1, ...arr2]);"
      },
      {
        "id": "tp-6-10",
        "title": "splice ilə Element Əvəzləməsi",
        "difficulty": "Çətin",
        "instruction": "<code>const plan = [\"Dərs\", \"Oyun\", \"İstirahət\"];</code> massivində <code>splice(1, 1, \"İdman\")</code> ilə 1-ci indeksdəki dəyəri əvəz edin və yenilənmiş massivi çap edin.",
        "starterCode": "// splice(1, 1, 'İdman') icra edib massivi çap edin\n",
        "expectedOutput": "[ 'Dərs', 'İdman', 'İstirahət' ]",
        "hint": "const plan = [\"Dərs\", \"Oyun\", \"İstirahət\"];\nplan.splice(1, 1, \"İdman\");\nconsole.log(plan);"
      }
    ]
  },
  {
    "sectionId": "sec-7",
    "sectionTitle": "Bölmə 7: Funksiyalar (Declarations, Arrow Functions, Default Parametrlər)",
    "icon": "⚡",
    "tasks": [
      {
        "id": "tp-7-1",
        "title": "Sadə Funksiya Bəyanı",
        "difficulty": "Asan",
        "instruction": "<code>salamla(ad)</code> funksiyası yazın və <code>salamla(\"Rəşad\")</code> çağırışı ilə <code>Salam, Rəşad!</code> qaytarıb konsola verin.",
        "starterCode": "// salamla(ad) funksiyasını təyin edin və çağırın\n",
        "expectedOutput": "Salam, Rəşad!",
        "hint": "function salamla(ad) {\n  return `Salam, ${ad}!`;\n}\nconsole.log(salamla(\"Rəşad\"));"
      },
      {
        "id": "tp-7-2",
        "title": "Ox (Arrow) Funksiyası",
        "difficulty": "Asan",
        "instruction": "Bir ədədi qəbul edib onun kvadratını qaytaran <code>const kvadrat = x => x * x;</code> ox funksiyasını yazın və <code>kvadrat(6)</code> nəticəsini çap edin.",
        "starterCode": "// Kvadrat hesablayan ox funksiyası yazın\n",
        "expectedOutput": "36",
        "hint": "const kvadrat = x => x * x;\nconsole.log(kvadrat(6));"
      },
      {
        "id": "tp-7-3",
        "title": "Susmaya Görə Parametr (Default)",
        "difficulty": "Orta-asan",
        "instruction": "<code>function qarsila(ad = \"Qonaq\")</code> funksiyası yaradın və heç bir parametr ötürmədən çağıraraq <code>Xoş gəldin, Qonaq</code> çap edin.",
        "starterCode": "// Default parametri olan funksiya yazın və boş çağırın\n",
        "expectedOutput": "Xoş gəldin, Qonaq",
        "hint": "function qarsila(ad = \"Qonaq\") {\n  return `Xoş gəldin, ${ad}`;\n}\nconsole.log(qarsila());"
      },
      {
        "id": "tp-7-4",
        "title": "İki Ədədin Cəmi Ox Funksiyası",
        "difficulty": "Orta-asan",
        "instruction": "<code>const topla = (a, b) => a + b;</code> ox funksiyasını yazın və <code>topla(45, 55)</code> nəticəsini konsola çıxarın.",
        "starterCode": "// İki parametri toplayan arrow function yazın\n",
        "expectedOutput": "100",
        "hint": "const topla = (a, b) => a + b;\nconsole.log(topla(45, 55));"
      },
      {
        "id": "tp-7-5",
        "title": "Rest Parametri (...ededler)",
        "difficulty": "Orta-çətin",
        "instruction": "İstənilən sayda ədəd qəbul edib onların cəmini tapan <code>function cem(...ededler)</code> funksiyası yazın və <code>cem(5, 10, 15, 20)</code> nəticəsini çap edin.",
        "starterCode": "// Rest parametri ilə gələn bütün ədədləri toplayın\n",
        "expectedOutput": "50",
        "hint": "function cem(...ededler) {\n  return ededler.reduce((acc, n) => acc + n, 0);\n}\nconsole.log(cem(5, 10, 15, 20));"
      },
      {
        "id": "tp-7-6",
        "title": "Callback Funksiyası Ötürmək",
        "difficulty": "Orta-çətin",
        "instruction": "<code>function hesabla(a, b, callback)</code> funksiyası yazın. Ona arqument kimi 6, 7 və vurma funksiyası <code>(x, y) => x * y</code> ötürərək nəticəni konsola verin.",
        "starterCode": "// hesabla funksiyasına parametr kimi hesablama callback-i ötürün\n",
        "expectedOutput": "42",
        "hint": "function hesabla(a, b, cb) {\n  return cb(a, b);\n}\nconsole.log(hesabla(6, 7, (x, y) => x * y));"
      },
      {
        "id": "tp-7-7",
        "title": "Cütlük Yoxlayan Funksiya",
        "difficulty": "Orta-çətin",
        "instruction": "Ədədin cüt olub-olmadığını yoxlayan <code>const cutdur = n => n % 2 === 0;</code> funksiyasını yazın və <code>cutdur(14)</code> nəticəsini çap edin.",
        "starterCode": "// Ədədin cüt olduğunu yoxlayan funksiya yazın\n",
        "expectedOutput": "true",
        "hint": "const cutdur = n => n % 2 === 0;\nconsole.log(cutdur(14));"
      },
      {
        "id": "tp-7-8",
        "title": "Funksiya Qaytaran Funksiya (Closure)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>function yaradici(x) { return y => x + y; }</code> yazın. <code>const besElaveEt = yaradici(5);</code> təyin edib <code>besElaveEt(10)</code> nəticəsini konsola verin.",
        "starterCode": "// Closure nümayiş etdirən funksiya yazın\n",
        "expectedOutput": "15",
        "hint": "function yaradici(x) {\n  return y => x + y;\n}\nconst besElaveEt = yaradici(5);\nconsole.log(besElaveEt(10));"
      },
      {
        "id": "tp-7-9",
        "title": "Rekursiv Funksiya",
        "difficulty": "Çətin",
        "instruction": "Ədədin faktorialını rekursiv tapan <code>function faktorial(n)</code> funksiyası yazın və <code>faktorial(4)</code> nəticəsini konsola çıxarın.",
        "starterCode": "// Rekursiya ilə faktorial hesablayın\n",
        "expectedOutput": "24",
        "hint": "function faktorial(n) {\n  if (n <= 1) return 1;\n  return n * faktorial(n - 1);\n}\nconsole.log(faktorial(4));"
      },
      {
        "id": "tp-7-10",
        "title": "Dərhal İcra Olunan Funksiya (IIFE)",
        "difficulty": "Çətin",
        "instruction": "Dərhal icra olunan anonim funksiya (IIFE) daxilində <code>\"Sistem aktivdir\"</code> sətrini qaytarın və bu çağırışın nəticəsini konsola çap edin.",
        "starterCode": "// IIFE (Immediately Invoked Function Expression) tətbiq edin\n",
        "expectedOutput": "Sistem aktivdir",
        "hint": "const netice = (() => {\n  return \"Sistem aktivdir\";\n})();\nconsole.log(netice);"
      }
    ]
  },
  {
    "sectionId": "sec-8",
    "sectionTitle": "Bölmə 8: Obyektlər (Objects, dot/bracket notation, Object.keys/values)",
    "icon": "💎",
    "tasks": [
      {
        "id": "tp-8-1",
        "title": "Nöqtə Notasiyası ilə Giriş",
        "difficulty": "Asan",
        "instruction": "<code>const kitab = { ad: \"Kürk Mantolu Madonna\", muellif: \"Sabahattin Ali\" };</code> obyektinin <code>ad</code> və <code>muellif</code> sahələrini iki ayrı sətirdə çap edin.",
        "starterCode": "// Obyekt sahələrini nöqtə ilə konsola verin\n",
        "expectedOutput": "Kürk Mantolu Madonna\nSabahattin Ali",
        "hint": "const kitab = { ad: \"Kürk Mantolu Madonna\", muellif: \"Sabahattin Ali\" };\nconsole.log(kitab.ad);\nconsole.log(kitab.muellif);"
      },
      {
        "id": "tp-8-2",
        "title": "Kvadrat Mötərizə Notasiyası",
        "difficulty": "Asan",
        "instruction": "<code>const istifadeci = { \"tam-adi\": \"Leyla Əliyeva\" };</code> obyektindən <code>istifadeci[\"tam-adi\"]</code> xassəsini konsola çıxarın.",
        "starterCode": "// Bracket notation [] ilə defisli açarın qiymətini oxuyun\n",
        "expectedOutput": "Leyla Əliyeva",
        "hint": "const istifadeci = { \"tam-adi\": \"Leyla Əliyeva\" };\nconsole.log(istifadeci[\"tam-adi\"]);"
      },
      {
        "id": "tp-8-3",
        "title": "Yeni Sahə Əlavə Etmək",
        "difficulty": "Orta-asan",
        "instruction": "<code>const profil = { ad: \"Kamran\" };</code> obyektinə <code>profil.yas = 25;</code> əlavə edin və <code>profil.yas</code> sahəsini konsola çap edin.",
        "starterCode": "// Obyektə yas sahəsi əlavə edib çap edin\n",
        "expectedOutput": "25",
        "hint": "const profil = { ad: \"Kamran\" };\nprofil.yas = 25;\nconsole.log(profil.yas);"
      },
      {
        "id": "tp-8-4",
        "title": "Object.keys ilə Açarları Almaq",
        "difficulty": "Orta-asan",
        "instruction": "<code>const parametr = { a: 1, b: 2, c: 3 };</code> obyektinin açarlarını <code>Object.keys()</code> ilə massiv şəklində konsola çıxarın.",
        "starterCode": "// Object.keys() nəticəsini konsola verin\n",
        "expectedOutput": "[ 'a', 'b', 'c' ]",
        "hint": "const parametr = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(parametr));"
      },
      {
        "id": "tp-8-5",
        "title": "Object.values ilə Qiymətləri Almaq",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const qiymetler = { corek: 0.7, sud: 2.2, yaq: 5.5 };</code> qiymətlərini <code>Object.values()</code> ilə massiv kimi çap edin.",
        "starterCode": "// Object.values() ilə obyektin qiymətlərini çıxarın\n",
        "expectedOutput": "[ 0.7, 2.2, 5.5 ]",
        "hint": "const qiymetler = { corek: 0.7, sud: 2.2, yaq: 5.5 };\nconsole.log(Object.values(qiymetler));"
      },
      {
        "id": "tp-8-6",
        "title": "Obyektdə Metod Təyini (this)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const hesabat = { balans: 100, goster() { return `Balans: ${this.balans} AZN`; } };</code> obyektinin <code>hesabat.goster()</code> metodunu çağırıb nəticəni çap edin.",
        "starterCode": "// Metod daxilində this istifadə edib nəticəni konsola verin\n",
        "expectedOutput": "Balans: 100 AZN",
        "hint": "const hesabat = {\n  balans: 100,\n  goster() { return `Balans: ${this.balans} AZN`; }\n};\nconsole.log(hesabat.goster());"
      },
      {
        "id": "tp-8-7",
        "title": "Obyekt Destrukturizasiyası",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const masin = { marka: \"Tesla\", model: \"Model 3\" };</code> obyektindən <code>const { marka, model } = masin;</code> ilə sahələri çıxarıb <code>Tesla - Model 3</code> çap edin.",
        "starterCode": "// Destructuring ilə marka və model dəyişənlərini çıxarıb çap edin\n",
        "expectedOutput": "Tesla - Model 3",
        "hint": "const masin = { marka: \"Tesla\", model: \"Model 3\" };\nconst { marka, model } = masin;\nconsole.log(`${marka} - ${model}`);"
      },
      {
        "id": "tp-8-8",
        "title": "Optional Chaining (?.)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const musteri = { profil: null };</code> üçün <code>musteri.profil?.ad ?? \"Anonim\"</code> ifadəsinin nəticəsini konsola verin.",
        "starterCode": "// Optional chaining və nullish birləşməsini yoxlayın\n",
        "expectedOutput": "Anonim",
        "hint": "const musteri = { profil: null };\nconsole.log(musteri.profil?.ad ?? \"Anonim\");"
      },
      {
        "id": "tp-8-9",
        "title": "Object.entries ilə İterasiya",
        "difficulty": "Çətin",
        "instruction": "<code>const meyve = { alma: 3, armud: 5 };</code> obyektinin hər açar-qiymət cütünü <code>Object.entries()</code> ilə <code>alma: 3</code> və <code>armud: 5</code> formatında çap edin.",
        "starterCode": "// Object.entries və for..of ilə cütləri çap edin\n",
        "expectedOutput": "alma: 3\narmud: 5",
        "hint": "const meyve = { alma: 3, armud: 5 };\nfor (const [key, val] of Object.entries(meyve)) {\n  console.log(`${key}: ${val}`);\n}"
      },
      {
        "id": "tp-8-10",
        "title": "Spread Operatoru ilə Obyekt Birləşdirmək",
        "difficulty": "Çətin",
        "instruction": "<code>const temel = { tema: \"dark\" }; const elave = { reng: \"mavi\" };</code> obyektlərini <code>{ ...temel, ...elave }</code> ilə birləşdirib yeni obyekti konsola verin.",
        "starterCode": "// Spread ilə iki obyekti birləşdirin və çap edin\n",
        "expectedOutput": "{ tema: 'dark', reng: 'mavi' }",
        "hint": "const temel = { tema: \"dark\" };\nconst elave = { reng: \"mavi\" };\nconsole.log({ ...temel, ...elave });"
      }
    ]
  },
  {
    "sectionId": "sec-9",
    "sectionTitle": "Bölmə 9: String Metodları və Template Literals (`${}`)",
    "icon": "📝",
    "tasks": [
      {
        "id": "tp-9-1",
        "title": "Böyük və Kiçik Hərfə Çevirmə",
        "difficulty": "Asan",
        "instruction": "<code>let text = \"JavaScript\";</code> üçün <code>toUpperCase()</code> və <code>toLowerCase()</code> nəticələrini ardıcıl konsola verin.",
        "starterCode": "// toUpperCase və toLowerCase nəticələrini çap edin\n",
        "expectedOutput": "JAVASCRIPT\njavascript",
        "hint": "let text = \"JavaScript\";\nconsole.log(text.toUpperCase());\nconsole.log(text.toLowerCase());"
      },
      {
        "id": "tp-9-2",
        "title": "Template Literal İnterpolyasiyası",
        "difficulty": "Asan",
        "instruction": "<code>const ad = \"Murad\"; const bal = 95;</code> dəyişənlərini template literal ilə birləşdirərək <code>Tələbə: Murad, Nəticə: 95</code> çap edin.",
        "starterCode": "// Template literal (${}) ilə cümlə qurun və çap edin\n",
        "expectedOutput": "Tələbə: Murad, Nəticə: 95",
        "hint": "const ad = \"Murad\";\nconst bal = 95;\nconsole.log(`Tələbə: ${ad}, Nəticə: ${bal}`);"
      },
      {
        "id": "tp-9-3",
        "title": "Kənar Boşluqları Təmizləmək (trim)",
        "difficulty": "Orta-asan",
        "instruction": "<code>let login = \"   admin_user   \";</code> sətirinin əvvəl və sonundakı boşluqları <code>trim()</code> ilə təmizləyib konsola çıxarın.",
        "starterCode": "// trim() metodunu tətbiq edin\n",
        "expectedOutput": "admin_user",
        "hint": "let login = \"   admin_user   \";\nconsole.log(login.trim());"
      },
      {
        "id": "tp-9-4",
        "title": "Alt-sətir Yoxlanışı (includes)",
        "difficulty": "Orta-asan",
        "instruction": "<code>let email = \"info@code.edu.az\";</code> sətirində <code>\"@code\"</code> olub-olmadığını <code>includes()</code> ilə yoxlayıb nəticəni çap edin.",
        "starterCode": "// includes ilə alt-sətiri yoxlayın\n",
        "expectedOutput": "true",
        "hint": "let email = \"info@code.edu.az\";\nconsole.log(email.includes(\"@code\"));"
      },
      {
        "id": "tp-9-5",
        "title": "Sətir Əvəzləməsi (replace)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let msj = \"Python öyrənmək əladır\";</code> cümləsindəki <code>\"Python\"</code> sözünü <code>replace()</code> ilə <code>\"JavaScript\"</code> sözünə dəyişib çap edin.",
        "starterCode": "// replace metodu ilə sözü dəyişdirin\n",
        "expectedOutput": "JavaScript öyrənmək əladır",
        "hint": "let msj = \"Python öyrənmək əladır\";\nconsole.log(msj.replace(\"Python\", \"JavaScript\"));"
      },
      {
        "id": "tp-9-6",
        "title": "Sətirin Bölünməsi (split)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let tags = \"html,css,javascript\";</code> sətirini vergüllərə görə <code>split(\",\")</code> ilə bölüb massiv kimi konsola çıxarın.",
        "starterCode": "// split(',') ilə massiv yaradıb çap edin\n",
        "expectedOutput": "[ 'html', 'css', 'javascript' ]",
        "hint": "let tags = \"html,css,javascript\";\nconsole.log(tags.split(\",\"));"
      },
      {
        "id": "tp-9-7",
        "title": "Başlanğıc və Son Yoxlanışı",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let fayl = \"avatar.png\";</code> sətirinin <code>.png</code> ilə bitməsini (<code>endsWith</code>) və <code>img</code> ilə başlamasını (<code>startsWith</code>) yoxlayıb iki ayrı sətirdə çap edin.",
        "starterCode": "// endsWith və startsWith nəticələrini çıxarın\n",
        "expectedOutput": "true\nfalse",
        "hint": "let fayl = \"avatar.png\";\nconsole.log(fayl.endsWith(\".png\"));\nconsole.log(fayl.startsWith(\"img\"));"
      },
      {
        "id": "tp-9-8",
        "title": "Sətir Kəsmə (slice)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>let kod = \"DEV-84920\";</code> sətirindən 4-cü indeksdən sonrakı hissəni <code>slice(4)</code> ilə kəsib konsola verin.",
        "starterCode": "// slice(4) ilə prefiksdən sonrakı hissəni çap edin\n",
        "expectedOutput": "84920",
        "hint": "let kod = \"DEV-84920\";\nconsole.log(kod.slice(4));"
      },
      {
        "id": "tp-9-9",
        "title": "Sətirin Təkrarlanması (repeat)",
        "difficulty": "Çətin",
        "instruction": "<code>\"*\"</code> simvolunu <code>repeat(5)</code> metodu ilə 5 dəfə təkrarlayıb <code>*****</code> şəklində çap edin.",
        "starterCode": "// repeat(5) metodunu tətbiq edin\n",
        "expectedOutput": "*****",
        "hint": "console.log(\"*\".repeat(5));"
      },
      {
        "id": "tp-9-10",
        "title": "replaceAll ilə Hamısını Əvəzləmək",
        "difficulty": "Çətin",
        "instruction": "<code>let cumle = \"alma, armud və alma\";</code> sətirində bütün <code>\"alma\"</code> sözlərini <code>replaceAll(\"alma\", \"nar\")</code> ilə əvəzləyib konsola çıxarın.",
        "starterCode": "// replaceAll ilə bütün uyğunluqları dəyişdirin\n",
        "expectedOutput": "nar, armud və nar",
        "hint": "let cumle = \"alma, armud və alma\";\nconsole.log(cumle.replaceAll(\"alma\", \"nar\"));"
      }
    ]
  },
  {
    "sectionId": "sec-10",
    "sectionTitle": "Bölmə 10: Xəta İdarəetmə (try...catch, throw new Error)",
    "icon": "🛡️",
    "tasks": [
      {
        "id": "tp-10-1",
        "title": "Sadə try-catch Bloku",
        "difficulty": "Asan",
        "instruction": "<code>try</code> blokunda təyin olunmamış <code>x</code> dəyişənini konsola verməyə cəhd edin. Baş verən xətanı <code>catch</code> blokunda tutub konsola <code>Xəta tutuldu!</code> çap edin.",
        "starterCode": "// try-catch ilə xətanı tutun\n",
        "expectedOutput": "Xəta tutuldu!",
        "hint": "try {\n  console.log(x);\n} catch (err) {\n  console.log(\"Xəta tutuldu!\");\n}"
      },
      {
        "id": "tp-10-2",
        "title": "Xəta Mesajını Oxumaq (err.message)",
        "difficulty": "Asan",
        "instruction": "<code>try</code> blokunda <code>throw new Error(\"Gözlənilməz problem\");</code> atın. <code>catch(err)</code> daxilində <code>err.message</code> sahəsini konsola çıxarın.",
        "starterCode": "// Error obyektinin mesajını çap edin\n",
        "expectedOutput": "Gözlənilməz problem",
        "hint": "try {\n  throw new Error(\"Gözlənilməz problem\");\n} catch (err) {\n  console.log(err.message);\n}"
      },
      {
        "id": "tp-10-3",
        "title": "finally Blokunun İcrası",
        "difficulty": "Orta-asan",
        "instruction": "<code>try</code> daxilində <code>Əməliyyat icra olunur</code>, <code>finally</code> daxilində isə <code>Təmizləmə tamamlandı</code> mesajlarını konsola verin.",
        "starterCode": "// try və finally bloklarını qurun\n",
        "expectedOutput": "Əməliyyat icra olunur\nTəmizləmə tamamlandı",
        "hint": "try {\n  console.log(\"Əməliyyat icra olunur\");\n} finally {\n  console.log(\"Təmizləmə tamamlandı\");\n}"
      },
      {
        "id": "tp-10-4",
        "title": "Sıfıra Bölmə Xətasını Atmaq",
        "difficulty": "Orta-asan",
        "instruction": "<code>function bol(a, b)</code> funksiyası yazın. Əgər <code>b === 0</code> olarsa <code>throw new Error(\"Sıfıra bölmək olmaz!\");</code> atsın. <code>bol(10, 0)</code> çağırışını try-catch ilə tutub xəta mesajını konsola çıxarın.",
        "starterCode": "// Sıfıra bölməni yoxlayıb Error atın və catch-də mesajı çap edin\n",
        "expectedOutput": "Sıfıra bölmək olmaz!",
        "hint": "function bol(a, b) {\n  if (b === 0) throw new Error(\"Sıfıra bölmək olmaz!\");\n  return a / b;\n}\ntry {\n  bol(10, 0);\n} catch (e) {\n  console.log(e.message);\n}"
      },
      {
        "id": "tp-10-5",
        "title": "JSON Parse Xətası Tutmaq",
        "difficulty": "Orta-çətin",
        "instruction": "Düzgün JSON formatında olmayan <code>\"{ ad: 'Əli' }\"</code> sətirini <code>JSON.parse()</code> etməyə çalışın. <code>catch</code> blokunda <code>Format xətası</code> çap edin.",
        "starterCode": "// Xətalı JSON mətnini parse edərkən yaranan xətanı tutun\n",
        "expectedOutput": "Format xətası",
        "hint": "try {\n  JSON.parse(\"{ ad: 'Əli' }\");\n} catch (e) {\n  console.log(\"Format xətası\");\n}"
      },
      {
        "id": "tp-10-6",
        "title": "Xəta Növünü Öyrənmək (err.name)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>try { null.f(); } catch(err)</code> bloku yazın və konsola <code>err.name</code> sahəsini çıxarın (TypeError).",
        "starterCode": "// Xətanın adını (name) konsola verin\n",
        "expectedOutput": "TypeError",
        "hint": "try {\n  null.f();\n} catch (err) {\n  console.log(err.name);\n}"
      },
      {
        "id": "tp-10-7",
        "title": "Yaş Validasiyası ilə Xəta",
        "difficulty": "Orta-çətin",
        "instruction": "<code>function yoxlaYas(yas)</code> funksiyası yazın: əgər <code>yas < 18</code> olarsa <code>throw new Error(\"İcazə verilmir\");</code> atsın. <code>yoxlaYas(15)</code>-i try-catch daxilində çağırıb mesajı çap edin.",
        "starterCode": "// Yaşı yoxlayıb xəta atın və tutun\n",
        "expectedOutput": "İcazə verilmir",
        "hint": "function yoxlaYas(yas) {\n  if (yas < 18) throw new Error(\"İcazə verilmir\");\n}\ntry {\n  yoxlaYas(15);\n} catch (err) {\n  console.log(err.message);\n}"
      },
      {
        "id": "tp-10-8",
        "title": "Xəta Növünə Görə İdarəetmə",
        "difficulty": "Orta-çətin",
        "instruction": "<code>try { undefined.x(); } catch(err)</code> blokunda əgər <code>err.name === \"TypeError\"</code> olarsa konsola <code>TypeError idarə edildi</code> çap edin.",
        "starterCode": "// err.name yoxlayaraq müvafiq mesaj çıxarın\n",
        "expectedOutput": "TypeError idarə edildi",
        "hint": "try {\n  undefined.x();\n} catch (err) {\n  if (err.name === \"TypeError\") console.log(\"TypeError idarə edildi\");\n}"
      },
      {
        "id": "tp-10-9",
        "title": "Xüsusi Xəta Sinifi (Custom Error)",
        "difficulty": "Çətin",
        "instruction": "<code>class ValidasiyaXetasi extends Error {}</code> sinifi qurun. <code>try</code> blokunda <code>throw new ValidasiyaXetasi(\"Email yalnışdır\");</code> atın və <code>catch(e)</code> daxilində <code>e.message</code> konsola çıxarın.",
        "starterCode": "// Xüsusi Error sinifi yaradıb tətbiq edin\n",
        "expectedOutput": "Email yalnışdır",
        "hint": "class ValidasiyaXetasi extends Error {}\ntry {\n  throw new ValidasiyaXetasi(\"Email yalnışdır\");\n} catch (e) {\n  console.log(e.message);\n}"
      },
      {
        "id": "tp-10-10",
        "title": "Tam Axın: catch və finally",
        "difficulty": "Çətin",
        "instruction": "<code>try { throw new Error(\"Dayandı\"); }</code> yazın. <code>catch(e)</code> daxilində <code>Catch: Dayandı</code>, <code>finally</code> daxilində isə <code>Finally: Əlaqə bağlandı</code> konsola çıxarın.",
        "starterCode": "// Həm catch həm finally ilə tam axını qurun\n",
        "expectedOutput": "Catch: Dayandı\nFinally: Əlaqə bağlandı",
        "hint": "try {\n  throw new Error(\"Dayandı\");\n} catch (e) {\n  console.log(\"Catch: \" + e.message);\n} finally {\n  console.log(\"Finally: Əlaqə bağlandı\");\n}"
      }
    ]
  },
  {
    "sectionId": "sec-11",
    "sectionTitle": "Bölmə 11: Müasir Massiv Əməliyyatları (map, filter, reduce, find)",
    "icon": "⚡",
    "tasks": [
      {
        "id": "tp-11-1",
        "title": "Elementləri İkiyə Vurmaq (map)",
        "difficulty": "Asan",
        "instruction": "<code>const ededler = [1, 2, 3, 4];</code> massivinin hər elementini <code>map()</code> ilə 2-yə vuraraq yeni massivi konsola çıxarın.",
        "starterCode": "// map metodu ilə hər elementi 2-yə vurun\n",
        "expectedOutput": "[ 2, 4, 6, 8 ]",
        "hint": "const ededler = [1, 2, 3, 4];\nconsole.log(ededler.map(x => x * 2));"
      },
      {
        "id": "tp-11-2",
        "title": "Müsbət Ədədləri Seçmək (filter)",
        "difficulty": "Asan",
        "instruction": "<code>const reqemler = [-5, 10, -2, 8, 0];</code> massivindən yalnız 0-dan böyük olan ədədləri <code>filter()</code> ilə seçib çap edin.",
        "starterCode": "// filter ilə müsbət ədədləri süzün\n",
        "expectedOutput": "[ 10, 8 ]",
        "hint": "const reqemler = [-5, 10, -2, 8, 0];\nconsole.log(reqemler.filter(x => x > 0));"
      },
      {
        "id": "tp-11-3",
        "title": "Cəmin Hesablanması (reduce)",
        "difficulty": "Orta-asan",
        "instruction": "<code>const qiymetler = [10, 20, 30];</code> massivindəki ədədlərin cəmini <code>reduce()</code> ilə hesablayıb konsola verin.",
        "starterCode": "// reduce metodu ilə elementləri toplayın\n",
        "expectedOutput": "60",
        "hint": "const qiymetler = [10, 20, 30];\nconsole.log(qiymetler.reduce((acc, val) => acc + val, 0));"
      },
      {
        "id": "tp-11-4",
        "title": "Obyekti Tapmaq (find)",
        "difficulty": "Orta-asan",
        "instruction": "<code>const userler = [{id: 1, ad: \"Aysel\"}, {id: 2, ad: \"Murad\"}];</code> massivindən <code>find()</code> ilə <code>id === 2</code> olan istifadəçinin adını (<code>ad</code>) konsola çıxarın.",
        "starterCode": "// find ilə id-si 2 olan istifadəçinin adını tapıb çap edin\n",
        "expectedOutput": "Murad",
        "hint": "const userler = [{id: 1, ad: \"Aysel\"}, {id: 2, ad: \"Murad\"}];\nconst tapilan = userler.find(u => u.id === 2);\nconsole.log(tapilan.ad);"
      },
      {
        "id": "tp-11-5",
        "title": "İndeks Tapmaq (findIndex)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const ballar = [45, 60, 85, 90];</code> massivində 80-dən böyük ilk balın indeksini <code>findIndex()</code> ilə tapıb çap edin.",
        "starterCode": "// findIndex ilə 80-dən böyük ilk elementin indeksini tapın\n",
        "expectedOutput": "2",
        "hint": "const ballar = [45, 60, 85, 90];\nconsole.log(ballar.findIndex(b => b > 80));"
      },
      {
        "id": "tp-11-6",
        "title": "Hər Biri Şərtə Uyğundurmu? (every)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const yaslar = [22, 19, 31, 25];</code> massivindəki bütün yaşların 18 və ya yuxarı olduğunu <code>every()</code> ilə yoxlayıb çap edin.",
        "starterCode": "// every ilə bütün elementlərin >= 18 olduğunu yoxlayın\n",
        "expectedOutput": "true",
        "hint": "const yaslar = [22, 19, 31, 25];\nconsole.log(yaslar.every(y => y >= 18));"
      },
      {
        "id": "tp-11-7",
        "title": "Ən Azı Biri Uyğundurmu? (some)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const qeydler = [4, 5, 2, 4];</code> massivində ən azı bir <code>2</code> olub-olmadığını <code>some()</code> metodu ilə yoxlayıb nəticəni çap edin.",
        "starterCode": "// some ilə kəsir qiymətin (2) olub-olmadığını yoxlayın\n",
        "expectedOutput": "true",
        "hint": "const qeydler = [4, 5, 2, 4];\nconsole.log(qeydler.some(q => q === 2));"
      },
      {
        "id": "tp-11-8",
        "title": "Ədədləri Artan Sıra ilə Düzmək (sort)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const xallar = [40, 100, 1, 5, 25];</code> massivini <code>sort((a, b) => a - b)</code> ilə kiçikdən böyüyə sıralayıb konsola verin.",
        "starterCode": "// Ədədləri düzgün artan sıra ilə sıralayın\n",
        "expectedOutput": "[ 1, 5, 25, 40, 100 ]",
        "hint": "const xallar = [40, 100, 1, 5, 25];\nxallar.sort((a, b) => a - b);\nconsole.log(xallar);"
      },
      {
        "id": "tp-11-9",
        "title": "Zəncirvari filter və map",
        "difficulty": "Çətin",
        "instruction": "<code>const ededler = [1, 2, 3, 4, 5, 6];</code> massivindən əvvəlcə cüt ədədləri <code>filter</code> edin, sonra hər birini <code>map</code> ilə kvadrata yüksəldib yeni massivi çap edin.",
        "starterCode": "// filter().map() zəncirini qurun\n",
        "expectedOutput": "[ 4, 16, 36 ]",
        "hint": "const ededler = [1, 2, 3, 4, 5, 6];\nconst netice = ededler.filter(x => x % 2 === 0).map(x => x * x);\nconsole.log(netice);"
      },
      {
        "id": "tp-11-10",
        "title": "reduce ilə Maksimum Ədədi Tapmaq",
        "difficulty": "Çətin",
        "instruction": "<code>const meblegler = [120, 450, 310, 890, 230];</code> massivindəki ən böyük ədədi <code>reduce()</code> metodu ilə tapıb konsola çıxarın.",
        "starterCode": "// reduce ilə massivin maksimum elementini tapın\n",
        "expectedOutput": "890",
        "hint": "const meblegler = [120, 450, 310, 890, 230];\nconst max = meblegler.reduce((acc, val) => val > acc ? val : acc, meblegler[0]);\nconsole.log(max);"
      }
    ]
  },
  {
    "sectionId": "sec-12",
    "sectionTitle": "Bölmə 12: ES6 OOP (class, constructor, extends, super, this)",
    "icon": "🏛️",
    "tasks": [
      {
        "id": "tp-12-1",
        "title": "Sadə Sinif (Class) Yaradılması",
        "difficulty": "Asan",
        "instruction": "<code>class Masin</code> yaradın, konstruktorunda <code>marka</code> qəbul edib <code>this.marka</code>-ya mənimsətsin. <code>const m = new Masin(\"Toyota\");</code> edib <code>m.marka</code> konsola verin.",
        "starterCode": "// Masin sinifi qurun və obyektin markasını çap edin\n",
        "expectedOutput": "Toyota",
        "hint": "class Masin {\n  constructor(marka) {\n    this.marka = marka;\n  }\n}\nconst m = new Masin(\"Toyota\");\nconsole.log(m.marka);"
      },
      {
        "id": "tp-12-2",
        "title": "Sinifdə Metod Təyini",
        "difficulty": "Asan",
        "instruction": "<code>class Qarsilayici</code> qurun, konstruktorda <code>ad</code> alsın və <code>salamDe()</code> metodu <code>Salam, ${this.ad}</code> qaytarsın. <code>new Qarsilayici(\"Tural\").salamDe()</code> nəticəsini konsola çıxarın.",
        "starterCode": "// Sinif daxilində metod yazın və çağırın\n",
        "expectedOutput": "Salam, Tural",
        "hint": "class Qarsilayici {\n  constructor(ad) { this.ad = ad; }\n  salamDe() { return `Salam, ${this.ad}`; }\n}\nconsole.log(new Qarsilayici(\"Tural\").salamDe());"
      },
      {
        "id": "tp-12-3",
        "title": "Varislik (Inheritance - extends)",
        "difficulty": "Orta-asan",
        "instruction": "<code>class Heyvan { constructor(ad) { this.ad = ad; } }</code> sinifindən törəyən <code>class It extends Heyvan</code> qurun. <code>It</code> sinifinə <code>ses()</code> metodu əlavə edin və <code>${this.ad} hürməyə başladı</code> qaytarın. <code>new It(\"Qorxmaz\").ses()</code> çap edin.",
        "starterCode": "// Heyvan sinifindən varis alan It sinifi qurun\n",
        "expectedOutput": "Qorxmaz hürməyə başladı",
        "hint": "class Heyvan { constructor(ad) { this.ad = ad; } }\nclass It extends Heyvan {\n  ses() { return `${this.ad} hürməyə başladı`; }\n}\nconsole.log(new It(\"Qorxmaz\").ses());"
      },
      {
        "id": "tp-12-4",
        "title": "super() ilə Əsas Konstruktora Çağırış",
        "difficulty": "Orta-asan",
        "instruction": "<code>class Valideyn { constructor(ad) { this.ad = ad; } }</code> və ondan törəyən <code>class Ovlad extends Valideyn { constructor(ad) { super(ad); } }</code> qurun. <code>new Ovlad(\"Famil\").ad</code> çap edin.",
        "starterCode": "// super(ad) çağırışı ilə valideyn konstruktoru işə salın\n",
        "expectedOutput": "Famil",
        "hint": "class Valideyn { constructor(ad) { this.ad = ad; } }\nclass Ovlad extends Valideyn { constructor(ad) { super(ad); } }\nconsole.log(new Ovlad(\"Famil\").ad);"
      },
      {
        "id": "tp-12-5",
        "title": "Statik Metod (static)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>class Riyaziyyat</code> sinifində iki ədədi toplayan <code>static topla(a, b) { return a + b; }</code> metodu yazın və <code>Riyaziyyat.topla(14, 26)</code> nəticəsini konsola çıxarın.",
        "starterCode": "// Obyekt yaratmadan sinif üzərindən statik metodu çağırın\n",
        "expectedOutput": "40",
        "hint": "class Riyaziyyat {\n  static topla(a, b) { return a + b; }\n}\nconsole.log(Riyaziyyat.topla(14, 26));"
      },
      {
        "id": "tp-12-6",
        "title": "Getter Metodu (get)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>class Daire { constructor(r) { this.r = r; } get diametr() { return this.r * 2; } }</code> sinifi yazın. <code>r = 7</code> olan nümunə yaradıb <code>d.diametr</code> dəyərini çap edin.",
        "starterCode": "// get diametr metodunun dəyərini xassə kimi oxuyun\n",
        "expectedOutput": "14",
        "hint": "class Daire {\n  constructor(r) { this.r = r; }\n  get diametr() { return this.r * 2; }\n}\nconst d = new Daire(7);\nconsole.log(d.diametr);"
      },
      {
        "id": "tp-12-7",
        "title": "Setter Metodu ilə Qoruma",
        "difficulty": "Orta-çətin",
        "instruction": "<code>class Istifadeci</code> daxilində <code>set yas(y) { if(y > 0) this._yas = y; }</code> və <code>get yas() { return this._yas; }</code> yazın. Nümunə yaradın, yaşı <code>21</code> təyin edib konsola çıxarın.",
        "starterCode": "// Getter və setter vasitəsilə yaşı idarə edin\n",
        "expectedOutput": "21",
        "hint": "class Istifadeci {\n  set yas(y) { if (y > 0) this._yas = y; }\n  get yas() { return this._yas; }\n}\nconst u = new Istifadeci();\nu.yas = 21;\nconsole.log(u.yas);"
      },
      {
        "id": "tp-12-8",
        "title": "instanceof Operatoru",
        "difficulty": "Orta-çətin",
        "instruction": "<code>class Kitab {} const k = new Kitab();</code> yaradın. <code>k instanceof Kitab</code> və <code>k instanceof Array</code> nəticələrini ardıcıl konsola verin.",
        "starterCode": "// instanceof ilə obyektin mənsubiyyətini yoxlayın\n",
        "expectedOutput": "true\nfalse",
        "hint": "class Kitab {}\nconst k = new Kitab();\nconsole.log(k instanceof Kitab);\nconsole.log(k instanceof Array);"
      },
      {
        "id": "tp-12-9",
        "title": "Metodun Yenidən Təyini (Method Overriding)",
        "difficulty": "Çətin",
        "instruction": "<code>class Isci { iseBasla() { return \"İş başladı\"; } }</code> və onu genişləndirən <code>class Muhendis extends Isci { iseBasla() { return \"Mühəndis layihələndirir\"; } }</code> qurun. <code>new Muhendis().iseBasla()</code> nəticəsini çap edin.",
        "starterCode": "// Törəmə sinifdə əsas metodun üzərinə yazın (override)\n",
        "expectedOutput": "Mühəndis layihələndirir",
        "hint": "class Isci { iseBasla() { return \"İş başladı\"; } }\nclass Muhendis extends Isci {\n  iseBasla() { return \"Mühəndis layihələndirir\"; }\n}\nconsole.log(new Muhendis().iseBasla());"
      },
      {
        "id": "tp-12-10",
        "title": "Statik Sahə və Nümunə Sayğacı",
        "difficulty": "Çətin",
        "instruction": "<code>class Saygac { static say = 0; constructor() { Saygac.say++; } }</code> qurun. İki dəfə <code>new Saygac()</code> yaradın və <code>Saygac.say</code> dəyərini konsola çıxarın.",
        "starterCode": "// Sinif hər instansiya olunduqda statik sayğacı 1 artırın\n",
        "expectedOutput": "2",
        "hint": "class Saygac {\n  static say = 0;\n  constructor() { Saygac.say++; }\n}\nnew Saygac();\nnew Saygac();\nconsole.log(Saygac.say);"
      }
    ]
  },
  {
    "sectionId": "sec-13",
    "sectionTitle": "Bölmə 13: Asinxron JavaScript (Callbacks, Promises, async/await)",
    "icon": "⏳",
    "tasks": [
      {
        "id": "tp-13-1",
        "title": "Sadə Promise və then",
        "difficulty": "Asan",
        "instruction": "<code>const p = Promise.resolve(\"Məlumat gəldi\");</code> vədini <code>p.then(netice => console.log(netice));</code> ilə konsola çıxarın.",
        "starterCode": "// Promise.resolve və then tətbiq edin\n",
        "expectedOutput": "Məlumat gəldi",
        "hint": "const p = Promise.resolve(\"Məlumat gəldi\");\np.then(netice => console.log(netice));"
      },
      {
        "id": "tp-13-2",
        "title": "Promise catch ilə Xətanı Tutmaq",
        "difficulty": "Asan",
        "instruction": "<code>const p = Promise.reject(\"Server xətası\");</code> vədini <code>p.catch(err => console.log(\"Tutuldu: \" + err));</code> ilə qarşılayıb konsola verin.",
        "starterCode": "// Promise.reject və catch metodunu tətbiq edin\n",
        "expectedOutput": "Tutuldu: Server xətası",
        "hint": "const p = Promise.reject(\"Server xətası\");\np.catch(err => console.log(\"Tutuldu: \" + err));"
      },
      {
        "id": "tp-13-3",
        "title": "async Funksiya və return",
        "difficulty": "Orta-asan",
        "instruction": "<code>async function salam() { return \"Salam Dünya\"; }</code> funksiyasını çağırıb <code>.then(msj => console.log(msj))</code> ilə nəticəsini konsola çıxarın.",
        "starterCode": "// async funksiyanın qaytardığı Promise-i then ilə oxuyun\n",
        "expectedOutput": "Salam Dünya",
        "hint": "async function salam() { return \"Salam Dünya\"; }\nsalam().then(msj => console.log(msj));"
      },
      {
        "id": "tp-13-4",
        "title": "await ilə Dəyəri Gözləmək",
        "difficulty": "Orta-asan",
        "instruction": "<code>async function icraEt()</code> yazın, daxilində <code>const deyer = await Promise.resolve(100);</code> edib <code>Dəyər: 100</code> formatında konsola çap edin və funksiyanı çağırın.",
        "starterCode": "// async funksiya daxilində await tətbiq edin\n",
        "expectedOutput": "Dəyər: 100",
        "hint": "async function icraEt() {\n  const deyer = await Promise.resolve(100);\n  console.log(\"Dəyər: \" + deyer);\n}\nicraEt();"
      },
      {
        "id": "tp-13-5",
        "title": "Promise.all ilə Paralel İcra",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const p1 = Promise.resolve(10); const p2 = Promise.resolve(20);</code> vədlərini <code>Promise.all([p1, p2]).then(netice => console.log(netice));</code> ilə paralel həll edib çap edin.",
        "starterCode": "// Promise.all ilə hər iki vədin nəticəsini alın\n",
        "expectedOutput": "[ 10, 20 ]",
        "hint": "const p1 = Promise.resolve(10);\nconst p2 = Promise.resolve(20);\nPromise.all([p1, p2]).then(netice => console.log(netice));"
      },
      {
        "id": "tp-13-6",
        "title": "Promise.race ilə İlk Bitəni Almaq",
        "difficulty": "Orta-çətin",
        "instruction": "<code>const p1 = Promise.resolve(\"Tez bitdi\"); const p2 = new Promise(() => {});</code> üçün <code>Promise.race([p1, p2]).then(console.log);</code> çağıraraq ilk tamamlanan nəticəni konsola verin.",
        "starterCode": "// Promise.race ilə ən sürətli vədi konsola çıxarın\n",
        "expectedOutput": "Tez bitdi",
        "hint": "const p1 = Promise.resolve(\"Tez bitdi\");\nconst p2 = new Promise(() => {});\nPromise.race([p1, p2]).then(console.log);"
      },
      {
        "id": "tp-13-7",
        "title": "async/await daxilində try-catch",
        "difficulty": "Orta-çətin",
        "instruction": "<code>async function yukle()</code> daxilində <code>try { await Promise.reject(\"Bağlantı kəsildi\"); } catch(e) { console.log(\"Xəta: \" + e); }</code> yazın və funksiyanı çağırın.",
        "starterCode": "// async funksiyada rədd edilmiş Promise-i try-catch ilə tutun\n",
        "expectedOutput": "Xəta: Bağlantı kəsildi",
        "hint": "async function yukle() {\n  try {\n    await Promise.reject(\"Bağlantı kəsildi\");\n  } catch (e) {\n    console.log(\"Xəta: \" + e);\n  }\n}\nyukle();"
      },
      {
        "id": "tp-13-8",
        "title": "Zəncirvari then (Promise Chaining)",
        "difficulty": "Orta-çətin",
        "instruction": "<code>Promise.resolve(5)</code> başlanğıcından <code>.then(x => x * 2).then(x => x + 10).then(console.log);</code> zənciri quraraq nəticəni çap edin.",
        "starterCode": "// Zəncirvari then zənciri ilə 5-i əvvəl 2-yə vurun, sonra 10 əlavə edin\n",
        "expectedOutput": "20",
        "hint": "Promise.resolve(5)\n  .then(x => x * 2)\n  .then(x => x + 10)\n  .then(console.log);"
      },
      {
        "id": "tp-13-9",
        "title": "Gözləmə (Delay) Simulyasiyası",
        "difficulty": "Çətin",
        "instruction": "<code>const gozle = ms => new Promise(res => setTimeout(res, ms));</code> gecikmə funksiyasını təyin edin. <code>async function test() { await gozle(30); console.log(\"Gözləmə tamamlandı\"); } test();</code> ilə icra edin.",
        "starterCode": "// setTimeout əsaslı Promise ilə 30ms gözləyib mesaj çap edin\n",
        "expectedOutput": "Gözləmə tamamlandı",
        "hint": "const gozle = ms => new Promise(res => setTimeout(res, ms));\nasync function test() {\n  await gozle(30);\n  console.log(\"Gözləmə tamamlandı\");\n}\ntest();"
      },
      {
        "id": "tp-13-10",
        "title": "Paralel Nəticələrin Cəmi",
        "difficulty": "Çətin",
        "instruction": "<code>async function topla()</code> daxilində <code>const [a, b] = await Promise.all([Promise.resolve(15), Promise.resolve(25)]);</code> ilə paralel qiymətləri alıb onların cəmini (<code>a + b</code>) konsola çıxarın.",
        "starterCode": "// Promise.all ilə iki paralel ədəd alıb toplayın və çap edin\n",
        "expectedOutput": "40",
        "hint": "async function topla() {\n  const [a, b] = await Promise.all([Promise.resolve(15), Promise.resolve(25)]);\n  console.log(a + b);\n}\ntopla();"
      }
    ]
  }
];

var ERRORS_PANEL_DATA = [
  {
    "sectionId": "sec-1",
    "sectionTitle": "Bölmə 1: JS-ə Giriş & console.log()",
    "icon": "🚀",
    "bugs": [
      {
        "id": "ep-1-1",
        "title": "console.log Mötərizə Xətası",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod ekrana 'Salam, Dünya!' mesajını çıxarmalıdır, lakin sintaksis xətası verir. Kodu araşdırın və düzəldin.",
        "buggyCode": "console.log \"Salam, Dünya!\";",
        "correctCode": "console.log(\"Salam, Dünya!\");",
        "correctOutput": "Salam, Dünya!",
        "hint": "JavaScript-də funksiya çağırışında arqumentlər mütləq yumru mötərizə daxilində yazılmalıdır: console.log(...)",
        "explanation": "console.log bir funksiyadır və ötürülən mətn mütləq yumru mötərizədə yazılmalıdır."
      },
      {
        "id": "ep-1-2",
        "title": "Qarışıq Dırnaq İşarələri",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod ekrana 'JavaScript' sözünü çıxarmalıdır, lakin dırnaqlar uyğunsuz olduğuna görə xəta baş verir. Düzəldin.",
        "buggyCode": "console.log('JavaScript\");",
        "correctCode": "console.log('JavaScript');",
        "correctOutput": "JavaScript",
        "hint": "Mətni açan və bağlayan dırnaq eyni növ olmalıdır (ya hər ikisi tək dırnaq ', ya da cüt dırnaq \").",
        "explanation": "Sətir sabiti başlayan dırnaq növü ilə də bağlanmalıdır."
      },
      {
        "id": "ep-1-3",
        "title": "Böyük Hərf Həssaslığı",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kod ekrana 'Dərs' sözünü çıxarmalıdır, lakin Console böyük hərflə yazıldığı üçün xəta verir. Düzəldin.",
        "buggyCode": "Console.log(\"Dərs\");",
        "correctCode": "console.log(\"Dərs\");",
        "correctOutput": "Dərs",
        "hint": "JavaScript böyük-kiçik hərflərə qarşı həssasdır (case-sensitive). 'console' kiçik hərflərlə yazılır.",
        "explanation": "Qlobal console obyekti kiçik hərflərlə elan olunub."
      },
      {
        "id": "ep-1-4",
        "title": "Arqumentlər Arasında Vergül Xətası",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kod 'A' və 'B' hərflərini aralarında boşluqla 'A B' kimi çıxarmalıdır, lakin vergül unudulduğu üçün sintaksis xətası baş verir.",
        "buggyCode": "console.log(\"A\" \"B\");",
        "correctCode": "console.log(\"A\", \"B\");",
        "correctOutput": "A B",
        "hint": "console.log funksiyasına bir neçə parametr ötürərkən onlar mütləq vergüllə ayrılmalıdır.",
        "explanation": "Parametrlər arasında vergül qoyulmadıqda sintaksis xətası yaranır."
      },
      {
        "id": "ep-1-5",
        "title": "Mətn və Ədəd Arasında Vergül",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod 'Nəticə: 50' çıxarmalıdır. Xətanı tapın və düzəldin.",
        "buggyCode": "console.log(\"Nəticə:\" 50);",
        "correctCode": "console.log(\"Nəticə:\", 50);",
        "correctOutput": "Nəticə: 50",
        "hint": "Mətn ilə ədəd parametri arasına vergül (,) qoyulmalıdır.",
        "explanation": "Vergül ayrı-ayrı arqumentləri ayırmaq üçün zəruridir."
      },
      {
        "id": "ep-1-6",
        "title": "Yanlış Şərh Sintaksisi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda Python üslublu şərh (#) yazıldığı üçün sintaksis xətası verir. Şərhi JavaScript-ə uyğunlaşdırın.",
        "buggyCode": "# Bura şərhdir\nconsole.log(\"Uğur\");",
        "correctCode": "// Bura şərhdir\nconsole.log(\"Uğur\");",
        "correctOutput": "Uğur",
        "hint": "JavaScript-də birsətirli şərhlər // ilə yazılır.",
        "explanation": "JavaScript-də # yalnız private xassələrdə istifadə olunur, şərh üçün // yazılmalıdır."
      },
      {
        "id": "ep-1-7",
        "title": "Bağlanmamış Çoxsətirli Şərh",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda çoxsətirli şərh düzgün bağlanmadığı üçün konsol əmri də şərh kimi oxunur. Şərhi bağlayın.",
        "buggyCode": "/* Şərh başlayır\nconsole.log(\"Hazır\");",
        "correctCode": "/* Şərh başlayır */\nconsole.log(\"Hazır\");",
        "correctOutput": "Hazır",
        "hint": "Çoxsətirli şərh bloku */ ilə bağlanmalıdır.",
        "explanation": "/* ilə açılan şərh bloku mütləq */ ilə qapadılmalıdır."
      },
      {
        "id": "ep-1-8",
        "title": "Metod Adında Böyük Hərf",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda 'LOG' metodu böyük hərflərlə yazıldığı üçün TypeError baş verir. Onu kiçik hərflərlə yazın.",
        "buggyCode": "console.LOG(\"Test\");",
        "correctCode": "console.log(\"Test\");",
        "correctOutput": "Test",
        "hint": "console obyektinin metodu kiçik hərflərlə 'log' adlanır.",
        "explanation": "console.LOG mövcud deyil, düzgün metod console.log-dur."
      },
      {
        "id": "ep-1-9",
        "title": "İki Nöqtə Əvəzinə Nöqtəli Vergül",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda iki əmr arasında sintaktik səhv var. Kodu düzəldin ki, ardıcıl iki sətirdə 'A' və 'B' çap olunsun.",
        "buggyCode": "console.log(\"A\"): console.log(\"B\");",
        "correctCode": "console.log(\"A\"); console.log(\"B\");",
        "correctOutput": "A\nB",
        "hint": "JavaScript-də təlimatları ayırmaq üçün iki nöqtə (:) deyil, nöqtəli vergül (;) istifadə olunur.",
        "explanation": "Təlimatlar bir-birindən nöqtəli vergüllə ayrılmalıdır."
      },
      {
        "id": "ep-1-10",
        "title": "Dırnaq Daxilində Eyni Dırnaq Səhvi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kod konsola 'O \"gəlirəm\" dedi' çap etməlidir, lakin daxili dırnaqlar sintaksisi pozur. Xətanı escape simvolu (\\) ilə və ya tək dırnaqla düzəldin.",
        "buggyCode": "console.log(\"O \"gəlirəm\" dedi\");",
        "correctCode": "console.log('O \"gəlirəm\" dedi');",
        "correctOutput": "O \"gəlirəm\" dedi",
        "hint": "Daxildə qoşa dırnaq saxlamaq üçün kənar dırnaqları tək dırnaq ('...') edin və ya daxildə \\\" yazın.",
        "explanation": "Eyni tipli dırnaqlar iç-içə yazılarkən xüsusi escape simvolu və ya digər dırnaq növü seçilməlidir."
      }
    ]
  },
  {
    "sectionId": "sec-2",
    "sectionTitle": "Bölmə 2: Dəyişənlər (let, const, var) və Primitiv Tiplər",
    "icon": "📦",
    "bugs": [
      {
        "id": "ep-2-1",
        "title": "const Sabitinə Yenidən Dəyər Mənimsədilməsi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda const ilə elan edilmiş dəyişənin dəyəri dəyişdirildiyi üçün TypeError baş verir. Dəyişəni let ilə elan edin.",
        "buggyCode": "const x = 5;\nx = 10;\nconsole.log(x);",
        "correctCode": "let x = 5;\nx = 10;\nconsole.log(x);",
        "correctOutput": "10",
        "hint": "Dəyəri dəyişə bilən dəyişənlər üçün const deyil, let istifadə olunmalıdır.",
        "explanation": "const sabitlər elan edildikdən sonra yenidən mənimsədilə bilməz."
      },
      {
        "id": "ep-2-2",
        "title": "Mətndə Dırnaq Unudulması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda 'Baki' sözü dırnaqsız yazıldığı üçün ReferenceError verir. Mətni dırnaq içinə alın.",
        "buggyCode": "let seher = Baki;\nconsole.log(seher);",
        "correctCode": "let seher = \"Baki\";\nconsole.log(seher);",
        "correctOutput": "Baki",
        "hint": "String (mətn) tipli dəyərlər mütləq dırnaq işarələri daxilində yazılmalıdır.",
        "explanation": "Dırnaqsız yazılan sözlər dəyişən adı kimi qəbul olunur və tapılmadıqda ReferenceError verir."
      },
      {
        "id": "ep-2-3",
        "title": "Böyük Hərflə Null Yazılışı",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda 'Null' böyük hərflə yazıldığı üçün xəta baş verir. Düzəldin ki, konsola 'null' çıxsın.",
        "buggyCode": "let cavab = Null;\nconsole.log(cavab);",
        "correctCode": "let cavab = null;\nconsole.log(cavab);",
        "correctOutput": "null",
        "hint": "JavaScript-də null açar sözü yalnız kiçik hərflərlə yazılır.",
        "explanation": "JavaScript-də ibtidai null dəyəri kiçik hərflərlə yazılır."
      },
      {
        "id": "ep-2-4",
        "title": "Dəyişən Adının Rəqəmlə Başlaması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda dəyişən adı rəqəmlə başladığı üçün sintaksis xətası verir. Dəyişənin adını 'ad1' edin.",
        "buggyCode": "let 1ad = \"Əli\";\nconsole.log(1ad);",
        "correctCode": "let ad1 = \"Əli\";\nconsole.log(ad1);",
        "correctOutput": "Əli",
        "hint": "JavaScript-də dəyişən adları rəqəmlə başlaya bilməz.",
        "explanation": "Dəyişən adları hərf, alt xətt (_) və ya dollar ($) işarəsi ilə başlamalıdır."
      },
      {
        "id": "ep-2-5",
        "title": "String Toplama Tələsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod 30 çap etməlidir, lakin '20' mətn olduğu üçün '2010' çıxarır. Mətni Number() ilə ədədə çevirib riyazi cəmi tapın.",
        "buggyCode": "let a = \"20\";\nlet b = 10;\nconsole.log(a + b);",
        "correctCode": "let a = \"20\";\nlet b = 10;\nconsole.log(Number(a) + b);",
        "correctOutput": "30",
        "hint": "Number(a) funksiyasından istifadə edərək mətni ədədə çevirin.",
        "explanation": "+ operatoru string ilə işləyərkən toplama əvəzinə sətirləri birləşdirir (concatenation)."
      },
      {
        "id": "ep-2-6",
        "title": "typeof Nəticəsinin Səhv Müqayisəsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda typeof nəticəsi dırnaqsız 'number' ilə müqayisə edildiyi üçün ReferenceError verir. 'number' sözünü dırnaq daxilinə alın.",
        "buggyCode": "let x = 42;\nconsole.log(typeof x === number);",
        "correctCode": "let x = 42;\nconsole.log(typeof x === \"number\");",
        "correctOutput": "true",
        "hint": "typeof operatoru həmişə kiçik hərflərlə String (məsələn: 'number', 'string') qaytarır.",
        "explanation": "typeof operatorunun qaytardığı tip adı sətir tipindədir."
      },
      {
        "id": "ep-2-7",
        "title": "Elan Edilməzdən Əvvəl İstifadə (TDZ)",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda let dəyişəni elan edilməzdən əvvəl çağırıldığı üçün ReferenceError verir. Elan sətirini çapdan əvvələ keçirin.",
        "buggyCode": "console.log(yas);\nlet yas = 20;",
        "correctCode": "let yas = 20;\nconsole.log(yas);",
        "correctOutput": "20",
        "hint": "let ilə elan edilmiş dəyişənlər elandan əvvəl istifadə edilə bilməz (Temporal Dead Zone).",
        "explanation": "let dəyişənləri elan olunana qədər TDZ zonasında qalır və müraciət xətaya səbəb olur."
      },
      {
        "id": "ep-2-8",
        "title": "Dəyişən Adında Defis (-) İstifadəsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda dəyişən adında defis işarəsi çıxma operatoru kimi başa düşülür və xəta verir. Dəyişənin adını camelCase ilə 'istifadeciAdi' edin.",
        "buggyCode": "let istifadeci-adi = \"admin\";\nconsole.log(istifadeci-adi);",
        "correctCode": "let istifadeciAdi = \"admin\";\nconsole.log(istifadeciAdi);",
        "correctOutput": "admin",
        "hint": "Dəyişən adlarında tire (-) istifadə edilə bilməz. Dəyişəni 'istifadeciAdi' olaraq yazın.",
        "explanation": "JavaScript-də defis (-) çıxma operatorudur, ona görə dəyişən adında istifadə edilə bilməz."
      },
      {
        "id": "ep-2-9",
        "title": "Qorunan Açar Sözdən Dəyişən Kimi İstifadə",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda 'function' qorunan açar sözü dəyişən adı kimi seçildiyi üçün sintaksis xətası baş verir. Dəyişənin adını 'kod' edin.",
        "buggyCode": "let function = 123;\nconsole.log(function);",
        "correctCode": "let kod = 123;\nconsole.log(kod);",
        "correctOutput": "123",
        "hint": "JavaScript-in daxili açar sözləri (function, let, if və s.) dəyişən adı kimi istifadə oluna bilməz.",
        "explanation": "Qorunan dil açar sözləri identifikator kimi qəbul edilmir."
      },
      {
        "id": "ep-2-10",
        "title": "NaN Müqayisəsi Səhvi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda 'x === NaN' yoxlanılır və həmişə false verir (çünki NaN heç nəyə, hətta özünə də bərabər deyil). Number.isNaN(x) istifadə edin.",
        "buggyCode": "let x = Number(\"test\");\nconsole.log(x === NaN);",
        "correctCode": "let x = Number(\"test\");\nconsole.log(Number.isNaN(x));",
        "correctOutput": "true",
        "hint": "Bir dəyərin NaN olub-olmadığını yoxlamaq üçün Number.isNaN(...) funksiyasından istifadə olunmalıdır.",
        "explanation": "NaN dəyəri IEEE 754 standartına görə öz-özünə bərabər deyil (NaN === NaN false-dur)."
      }
    ]
  },
  {
    "sectionId": "sec-3",
    "sectionTitle": "Bölmə 3: Operatorlar (===, !==, arifmetik, məntiqi)",
    "icon": "⚡",
    "bugs": [
      {
        "id": "ep-3-1",
        "title": "Qüvvət Operatoru Səhvi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod 2-nin 4-cü qüvvətini (16) hesablamalıdır, lakin bitwise XOR (^) yazılıb. ** operatorundan istifadə edin.",
        "buggyCode": "console.log(2 ^ 4);",
        "correctCode": "console.log(2 ** 4);",
        "correctOutput": "16",
        "hint": "JavaScript-də qüvvətə yüksəltmə operatoru ** işarəsidir.",
        "explanation": "^ operatoru bit səviyyəli XOR əməliyyatıdır, qüvvət üçün ** istifadə olunmalıdır."
      },
      {
        "id": "ep-3-2",
        "title": "Müqayisədə Tək Bərabərlik Səhvi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod x dəyərinin 10-a bərabər olduğunu yoxlamalıdır, lakin tək = yazıldığı üçün ona 10 mənimsədilir. === ilə düzəldin.",
        "buggyCode": "let x = 5;\nconsole.log(x = 10);",
        "correctCode": "let x = 5;\nconsole.log(x === 10);",
        "correctOutput": "false",
        "hint": "Bərabərliyi yoxlamaq üçün mənimsətmə (=) deyil, ciddi bərabərlik (===) istifadə olunur.",
        "explanation": "Tək bərabərlik mənimsətmə operatorudur və yeni dəyəri qaytarır."
      },
      {
        "id": "ep-3-3",
        "title": "Qalıq Operatoru Əvəzinə mod Yazılması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kod 15-in 4-ə bölünməsindən qalığı (3) tapmalıdır, lakin 'mod' sözü sintaksis xətası verir. % operatoru ilə düzəldin.",
        "buggyCode": "console.log(15 mod 4);",
        "correctCode": "console.log(15 % 4);",
        "correctOutput": "3",
        "hint": "Qalıq tapmaq üçün faiz (%) operatorundan istifadə edin.",
        "explanation": "JavaScript-də mod açar sözü yoxdur, qalıq operatoru % simvoludur."
      },
      {
        "id": "ep-3-4",
        "title": "Python and Əvəzinə && İstifadəsi",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda Python üslubunda 'and' yazıldığı üçün xəta verir. Onu JavaScript-in && operatoru ilə əvəzləyin.",
        "buggyCode": "let a = true;\nlet b = false;\nconsole.log(a and b);",
        "correctCode": "let a = true;\nlet b = false;\nconsole.log(a && b);",
        "correctOutput": "false",
        "hint": "JavaScript-də məntiqi VƏ operatoru && simvoludur.",
        "explanation": "and açar sözü JavaScript sintaksisində mövcud deyil."
      },
      {
        "id": "ep-3-5",
        "title": "Python or Əvəzinə || İstifadəsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda 'or' açar sözü yazılıb. Onu JavaScript-in məntiqi VƏ YA (||) operatoru ilə əvəzləyin.",
        "buggyCode": "let x = false;\nlet y = true;\nconsole.log(x or y);",
        "correctCode": "let x = false;\nlet y = true;\nconsole.log(x || y);",
        "correctOutput": "true",
        "hint": "JavaScript-də məntiqi VƏ YA operatoru qoşa şaquli xətt (||) simvoludur.",
        "explanation": "JavaScript-də məntiqi disyunksiya üçün || istifadə edilir."
      },
      {
        "id": "ep-3-6",
        "title": "Python not Əvəzinə ! İstifadəsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda 'not' açar sözü sintaksis xətası verir. Onu JavaScript-in inkar operatoru (!) ilə əvəz edin.",
        "buggyCode": "let aktiv = true;\nconsole.log(not aktiv);",
        "correctCode": "let aktiv = true;\nconsole.log(!aktiv);",
        "correctOutput": "false",
        "hint": "Məntiqi inkar üçün dəyişənin qarşısına nida (!) işarəsi qoyulur: !aktiv",
        "explanation": "JavaScript-də unar inkar operatoru ! simvoludur."
      },
      {
        "id": "ep-3-7",
        "title": "Mənimsətmə Operatorunda Səhv Sıra",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod x dəyərini 5 vahid artırmalıdır (15 olmalıdır), lakin '=+ 5' yazıldığı üçün sadəcə 5 mənimsədilir. += ilə düzəldin.",
        "buggyCode": "let x = 10;\nx =+ 5;\nconsole.log(x);",
        "correctCode": "let x = 10;\nx += 5;\nconsole.log(x);",
        "correctOutput": "15",
        "hint": "Dəyəri artırmaq üçün operator bərabərdən əvvəl gəlməlidir: x += 5",
        "explanation": "= +5 sadəcə müsbət 5 ədədini mənimsədir, toplamaq üçün += yazılmalıdır."
      },
      {
        "id": "ep-3-8",
        "title": "Boş Bərabərlik (==) Tələsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda '0' == false müqayisəsi tip çevirməsi səbəbindən true qaytarır. Ciddi bərabərlik (===) ilə düzəldin ki, false çıxsın.",
        "buggyCode": "console.log(\"0\" == false);",
        "correctCode": "console.log(\"0\" === false);",
        "correctOutput": "false",
        "hint": "Tip uyğunsuzluğunu da nəzərə almaq üçün ciddi bərabərlikdən (===) istifadə edin.",
        "explanation": "== operatoru tipləri avtomatik çevirir, === isə həm dəyəri, həm tipi yoxlayır."
      },
      {
        "id": "ep-3-9",
        "title": "Bərabər Deyil (!==) Sintaksis Xətası",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda bərabər deyil operatoru '=!=' şəklində səhv yazılıb. Onu düzgün !== operatoru ilə əvəz edin.",
        "buggyCode": "let a = 10;\nlet b = 20;\nconsole.log(a =!= b);",
        "correctCode": "let a = 10;\nlet b = 20;\nconsole.log(a !== b);",
        "correctOutput": "true",
        "hint": "Ciddi fərqlilik operatoru nida və iki bərabərlikdən ibarətdir: !== ",
        "explanation": "=!= etibarsız sintaksisdir, operator !== olmalıdır."
      },
      {
        "id": "ep-3-10",
        "title": "Riyazi Prioritet Mötərizə Xətası",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kod əvvəlcə 2 ilə 3-ü toplayıb sonra 4-ə vurmalı və 20 almalıdır, lakin vurma əvvəl işlədiyi üçün 14 alınır. Mötərizələrlə düzəldin.",
        "buggyCode": "let netice = 2 + 3 * 4;\nconsole.log(netice);",
        "correctCode": "let netice = (2 + 3) * 4;\nconsole.log(netice);",
        "correctOutput": "20",
        "hint": "Riyaziyyatda toplamanı vurmadan əvvəl icra etmək üçün onu mötərizəyə (2 + 3) almaq lazımdır.",
        "explanation": "Vurma operatorunun prioriteti toplamadan yüksək olduğu üçün mötərizələrdən istifadə zəruridir."
      }
    ]
  },
  {
    "sectionId": "sec-4",
    "sectionTitle": "Bölmə 4: Şərt İfadələri (if-else, ternary, switch-case)",
    "icon": "🔀",
    "bugs": [
      {
        "id": "ep-4-1",
        "title": "if Şərtində Yumru Mötərizə Unudulması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda if şərti yumru mötərizəsiz yazıldığı üçün sintaksis xətası verir. Şərti (x > 5) mötərizəsinə alın.",
        "buggyCode": "let x = 10;\nif x > 5 {\n  console.log(\"Böyükdür\");\n}",
        "correctCode": "let x = 10;\nif (x > 5) {\n  console.log(\"Böyükdür\");\n}",
        "correctOutput": "Böyükdür",
        "hint": "JavaScript-də if şərtləri mütləq yumru mötərizədə (şərt) yazılmalıdır.",
        "explanation": "Python-dan fərqli olaraq, JavaScript-də if şərtinin ətrafında mötərizə mütləqdir."
      },
      {
        "id": "ep-4-2",
        "title": "Python elif Əvəzinə else if",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda 'elif' yazıldığı üçün xəta verir. Onu JavaScript sintaksisi olan 'else if' ilə düzəldin.",
        "buggyCode": "let bal = 75;\nif (bal >= 90) {\n  console.log(\"Əla\");\n} elif (bal >= 70) {\n  console.log(\"Yaxşı\");\n}",
        "correctCode": "let bal = 75;\nif (bal >= 90) {\n  console.log(\"Əla\");\n} else if (bal >= 70) {\n  console.log(\"Yaxşı\");\n}",
        "correctOutput": "Yaxşı",
        "hint": "JavaScript-də 'elif' sözü yoxdur, onun yerinə iki ayrı sözlə 'else if' yazılmalıdır.",
        "explanation": "JavaScript budaqlanan şərtlərdə else if açar sözlərini tələb edir."
      },
      {
        "id": "ep-4-3",
        "title": "if Sonunda İki Nöqtə (:) Qoyulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda Python üslublu iki nöqtə qoyulub və fiqurlu mötərizə unudulub. JavaScript sintaksisinə uyğunlaşdırın.",
        "buggyCode": "let x = 8;\nif (x > 0):\n  console.log(\"Müsbət\");",
        "correctCode": "let x = 8;\nif (x > 0) {\n  console.log(\"Müsbət\");\n}",
        "correctOutput": "Müsbət",
        "hint": "İki nöqtəni silin və icra olunacaq bloku fiqurlu mötərizələr { } daxilinə alın.",
        "explanation": "JavaScript-də şərt blokları : ilə deyil, fiqurlu mötərizələrlə { } təyin edilir."
      },
      {
        "id": "ep-4-4",
        "title": "Ternary Operatorunda İki Nöqtə Əvəzinə Vergül",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı ternary operatorunda iki nöqtə yerinə vergül qoyulub. Kodu 'şərt ? doğru : yalan' qaydası ilə düzəldin.",
        "buggyCode": "let yas = 20;\nlet cavab = yas >= 18 ? \"Yetkin\", \"Uşaq\";\nconsole.log(cavab);",
        "correctCode": "let yas = 20;\nlet cavab = yas >= 18 ? \"Yetkin\" : \"Uşaq\";\nconsole.log(cavab);",
        "correctOutput": "Yetkin",
        "hint": "Ternary operatorunun sintaksisi: şərt ? dəyər1 : dəyər2",
        "explanation": "Ternary operatorunun ikinci ayırıcısı iki nöqtə (:) olmalıdır."
      },
      {
        "id": "ep-4-5",
        "title": "switch case Blokunda break Unudulması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda break unudulduğu üçün həm 'Bir', həm də 'İki' çap olunur. case 1-in sonuna break əlavə edin ki, yalnız 'Bir' çıxsın.",
        "buggyCode": "let r = 1;\nswitch(r) {\n  case 1:\n    console.log(\"Bir\");\n  case 2:\n    console.log(\"İki\");\n    break;\n}",
        "correctCode": "let r = 1;\nswitch(r) {\n  case 1:\n    console.log(\"Bir\");\n    break;\n  case 2:\n    console.log(\"İki\");\n    break;\n}",
        "correctOutput": "Bir",
        "hint": "Hər bir case blokunu vaxtında dayandırmaq üçün onun sonuna break; əlavə edin.",
        "explanation": "break yazılmadıqda fall-through baş verir və sonrakı case də icra olunur."
      },
      {
        "id": "ep-4-6",
        "title": "Boş String-in Falsy Xüsusiyyəti",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod istifadəçi adı boş olduqda 'Adsız' çap etməlidir, lakin if şərtində yoxlama tərsinə qurulub. Kodu düzəldin ki, 'Adsız' çıxsın.",
        "buggyCode": "let ad = \"\";\nif (ad) {\n  console.log(\"Adsız\");\n} else {\n  console.log(\"Ad var\");\n}",
        "correctCode": "let ad = \"\";\nif (!ad) {\n  console.log(\"Adsız\");\n} else {\n  console.log(\"Ad var\");\n}",
        "correctOutput": "Adsız",
        "hint": "Boş string \"\" falsy dəyərdir. Onun boş olduğunu yoxlamaq üçün if (!ad) yazın.",
        "explanation": "Boş mətn JavaScript-də false kimi qiymətləndirilir, inkar üçün !ad istifadə edilir."
      },
      {
        "id": "ep-4-7",
        "title": "case Sonunda Nöqtəli Vergül Səhvi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda case 10-dan sonra iki nöqtə (:) yerinə nöqtəli vergül (;) qoyulduğu üçün xəta baş verir. Düzəldin.",
        "buggyCode": "let x = 10;\nswitch(x) {\n  case 10;\n    console.log(\"On\");\n    break;\n}",
        "correctCode": "let x = 10;\nswitch(x) {\n  case 10:\n    console.log(\"On\");\n    break;\n}",
        "correctOutput": "On",
        "hint": "case dəyərindən dərhal sonra iki nöqtə (:) qoyulmalıdır.",
        "explanation": "case sintaksisində şablon dəyərindən sonra mütləq iki nöqtə gəlməlidir."
      },
      {
        "id": "ep-4-8",
        "title": "Riyazi Zəncirvari Şərt Tələsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda '10 < x < 20' yazılıb və bu JavaScript-də səhv işləyir ((10 < x) true -> 1 < 20 həmişə true). Düzgün məntiqi operatorla (x > 10 && x < 20) yazın.",
        "buggyCode": "let x = 25;\nif (10 < x < 20) {\n  console.log(\"Aralıqda deyil\");\n}",
        "correctCode": "let x = 25;\nif (x > 10 && x < 20) {\n  console.log(\"Aralıqda\");\n} else {\n  console.log(\"Aralıqda deyil\");\n}",
        "correctOutput": "Aralıqda deyil",
        "hint": "JavaScript-də aralıq yoxlaması iki ayrı şərt kimi && ilə birləşdirilməlidir: x > 10 && x < 20",
        "explanation": "JavaScript zəncirvari müqayisəni soldan sağa hesablayaraq boolean-a çevirir."
      },
      {
        "id": "ep-4-9",
        "title": "Ternary Daxilində Mənimsətmə Sintaksisi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda mənimsətmə ternary operatorunun daxilində səhv yazılıb. 'let netice = xal >= 50 ? ...' şəklində düzəldin.",
        "buggyCode": "let xal = 60;\nlet netice;\nxal >= 50 ? netice = \"Keçdi\" : netice = \"Kəsildi\";\nconsole.log(netice);",
        "correctCode": "let xal = 60;\nlet netice = xal >= 50 ? \"Keçdi\" : \"Kəsildi\";\nconsole.log(netice);",
        "correctOutput": "Keçdi",
        "hint": "Ternary operatoru dəyər qaytarır, ona görə birbaşa dəyişənə mənimsədilməlidir.",
        "explanation": "Ternary operatorunu ifadə kimi mənimsətmək daha təmiz və standart sintaksisdir."
      },
      {
        "id": "ep-4-10",
        "title": "switch default Açar Sözünün Səhv Yazılışı",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı switch blokunda 'otherwise' sözü yazıldığı üçün sintaksis xətası verir. Standart JavaScript açar sözü olan 'default:' yazın.",
        "buggyCode": "let secim = 99;\nswitch(secim) {\n  case 1: console.log(\"A\"); break;\n  otherwise: console.log(\"Bilinmir\");\n}",
        "correctCode": "let secim = 99;\nswitch(secim) {\n  case 1: console.log(\"A\"); break;\n  default: console.log(\"Bilinmir\");\n}",
        "correctOutput": "Bilinmir",
        "hint": "switch blokunda heç bir case uyğun gəlmədikdə icra olunan bölmə 'default:' adlanır.",
        "explanation": "JavaScript switch strukturunda ehtiyat hal üçün yalnız 'default:' açar sözü mövcuddur."
      }
    ]
  },
  {
    "sectionId": "sec-5",
    "sectionTitle": "Bölmə 5: Dövrlər (for, while, for...of, for...in)",
    "icon": "🔄",
    "bugs": [
      {
        "id": "ep-5-1",
        "title": "for Başlığında Vergül Səhvi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı for dövrünün başlığında nöqtəli vergül əvəzinə vergül qoyulduğu üçün sintaksis xətası baş verir. Düzəldin.",
        "buggyCode": "for (let i = 0, i < 3, i++) {\n  console.log(i);\n}",
        "correctCode": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        "correctOutput": "0\n1\n2",
        "hint": "for dövrünün üç hissəsi bir-birindən nöqtəli vergüllə (;) ayrılmalıdır.",
        "explanation": "for (başlanğıc; şərt; artım) daxilində mütləq nöqtəli vergül olmalıdır."
      },
      {
        "id": "ep-5-2",
        "title": "while Dövründə Addımın Unudulması (Sonsuz Dövr)",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı while dövründə sayğac artırılmadığı üçün sonsuz dövr yaranır. Dövrün daxilinə i++ əlavə edin ki, 1-dən 3-ə qədər çap etsin.",
        "buggyCode": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  // addım unudulub\n}",
        "correctCode": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}",
        "correctOutput": "1\n2\n3",
        "hint": "Dövrün daxilinə hər addımda i-ni 1 artıran 'i++;' əmrini yazın.",
        "explanation": "while dövründə şərt dəyişəni yenilənmədikdə dövr heç vaxt dayanmır."
      },
      {
        "id": "ep-5-3",
        "title": "Python range() Funksiyasının İstifadəsi",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda Python üslubunda 'range(3)' yazıldığı üçün ReferenceError verir. Klassik JavaScript for dövrü ilə əvəzləyin.",
        "buggyCode": "for (let i in range(3)) {\n  console.log(i);\n}",
        "correctCode": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        "correctOutput": "0\n1\n2",
        "hint": "JavaScript-də range() funksiyası yoxdur. for (let i = 0; i < 3; i++) yazın.",
        "explanation": "JavaScript-də aralıq dövrləri klassik for ilə və ya xüsusi generatorlarla qurulur."
      },
      {
        "id": "ep-5-4",
        "title": "Massiv Dəyərləri Üçün for...in Səhvi",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kod massivin meyvə adlarını çap etməlidir, lakin for...in istifadə edildiyi üçün indeksləri (0, 1) çıxarır. for...of ilə düzəldin.",
        "buggyCode": "const meyveler = [\"Alma\", \"Armud\"];\nfor (const m in meyveler) {\n  console.log(m);\n}",
        "correctCode": "const meyveler = [\"Alma\", \"Armud\"];\nfor (const m of meyveler) {\n  console.log(m);\n}",
        "correctOutput": "Alma\nArmud",
        "hint": "Massivin dəyərlərini götürmək üçün for...in deyil, for...of dövründən istifadə olunur.",
        "explanation": "for...in indeksləri (açarları), for...of isə elementlərin dəyərlərini gəzir."
      },
      {
        "id": "ep-5-5",
        "title": "continue Əvəzinə break Yazılması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod 2 ədədini buraxıb 1 və 3-ü çap etməlidir, lakin break yazıldığı üçün dövr tamamilə dayanır. break-i continue ilə əvəz edin.",
        "buggyCode": "for (let i = 1; i <= 3; i++) {\n  if (i === 2) {\n    break;\n  }\n  console.log(i);\n}",
        "correctCode": "for (let i = 1; i <= 3; i++) {\n  if (i === 2) {\n    continue;\n  }\n  console.log(i);\n}",
        "correctOutput": "1\n3",
        "hint": "Cari addımı ötürüb növbəti addıma keçmək üçün continue açar sözü işlədilir.",
        "explanation": "break dövrü tamamilə tərk edir, continue isə yalnız cari addımı buraxır."
      },
      {
        "id": "ep-5-6",
        "title": "Son Elementin Buraxılması (< vs <=)",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod 1-dən 5-ə qədər (5 daxil) ədədlərin cəmini (15) tapmalıdır, lakin 'i < 5' yazıldığı üçün 5 nəzərə alınmır. '<= 5' ilə düzəldin.",
        "buggyCode": "let cem = 0;\nfor (let i = 1; i < 5; i++) {\n  cem += i;\n}\nconsole.log(cem);",
        "correctCode": "let cem = 0;\nfor (let i = 1; i <= 5; i++) {\n  cem += i;\n}\nconsole.log(cem);",
        "correctOutput": "15",
        "hint": "Şərtdə ciddi kiçiklik (<) əvəzinə kiçik-bərabərdir (<= 5) yazın.",
        "explanation": "Sərhəd qiymətinin daxil olması üçün bərabərlik operatoru mütləqdir."
      },
      {
        "id": "ep-5-7",
        "title": "do...while Şərt Xətası",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod ekrana ən azı bir dəfə 'İşlədi' çıxarmalıdır, lakin do...while sintaksisində while şərtindən sonra nöqtəli vergül unudulub və blok səhv qapanıb. Düzəldin.",
        "buggyCode": "let x = 10;\ndo {\n  console.log(\"İşlədi\");\n} while (x < 5)",
        "correctCode": "let x = 10;\ndo {\n  console.log(\"İşlədi\");\n} while (x < 5);",
        "correctOutput": "İşlədi",
        "hint": "do...while dövrünün sonundakı while (şərt)-dən sonra nöqtəli vergül (;) qoyulmalıdır.",
        "explanation": "do...while təlimatı nöqtəli vergül ilə tamamlanmalıdır."
      },
      {
        "id": "ep-5-8",
        "title": "Dövr Sayğacının const ilə Elan Edilməsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda dövr sayğacı const ilə elan edildiyi üçün 'i++' zamanı TypeError baş verir. const-u let ilə əvəz edin.",
        "buggyCode": "let say = 0;\nfor (const i = 0; i < 3; i++) {\n  say++;\n}\nconsole.log(say);",
        "correctCode": "let say = 0;\nfor (let i = 0; i < 3; i++) {\n  say++;\n}\nconsole.log(say);",
        "correctOutput": "3",
        "hint": "for dövrünün sayğac dəyişəni hər addımda artdığı üçün let ilə elan edilməlidir.",
        "explanation": "const sabiti dəyişdirilə bilməz, sayğac üçün let tələb olunur."
      },
      {
        "id": "ep-5-9",
        "title": "for...in İndeks Toplama Tələsi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda for...in massiv indekslərini string ('0', '1', '2') kimi qaytardığı üçün '0012' alınır. Elementlərin özünü ədədi toplamaq üçün for...of istifadə edin.",
        "buggyCode": "const arr = [1, 2, 3];\nlet cem = 0;\nfor (const x in arr) {\n  cem += x;\n}\nconsole.log(cem);",
        "correctCode": "const arr = [1, 2, 3];\nlet cem = 0;\nfor (const x of arr) {\n  cem += x;\n}\nconsole.log(cem);",
        "correctOutput": "6",
        "hint": "Massivin dəyərlərini ədədi olaraq götürüb toplamaq üçün for...of istifadə edin.",
        "explanation": "for...in xassə adlarını sətir tipində qaytarır və + ilə sətir birləşməsi baş verir."
      },
      {
        "id": "ep-5-10",
        "title": "Dövr Sayğacının Scope Xətası",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda 'i' dəyişəni for daxilində let ilə elan edildiyi üçün dövrdən kənarda görünmür və ReferenceError verir. 'let i;' elanını dövrdən əvvələ keçirin.",
        "buggyCode": "for (let i = 0; i < 5; i++) {\n  // dövr icra olunur\n}\nconsole.log(i);",
        "correctCode": "let i;\nfor (i = 0; i < 5; i++) {\n  // dövr icra olunur\n}\nconsole.log(i);",
        "correctOutput": "5",
        "hint": "Dövr bitdikdən sonra sayğacın qiymətini oxumaq üçün onu for-dan kənarda elan edin.",
        "explanation": "for (let i ...) blok sahəsinə (block scope) malikdir və kənardan müraciət edilə bilməz."
      }
    ]
  },
  {
    "sectionId": "sec-6",
    "sectionTitle": "Bölmə 6: Massivlər (Arrays) və Əsas Metodlar",
    "icon": "📚",
    "bugs": [
      {
        "id": "ep-6-1",
        "title": "append() Əvəzinə push() Çağırışı",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda massivin sonuna element əlavə etmək üçün Python-un append() metodu yazılıb. Onu JavaScript-in push() metodu ilə əvəz edin.",
        "buggyCode": "const arr = [\"A\"];\narr.append(\"B\");\nconsole.log(arr);",
        "correctCode": "const arr = [\"A\"];\narr.push(\"B\");\nconsole.log(arr);",
        "correctOutput": "[\n  \"A\",\n  \"B\"\n]",
        "hint": "JavaScript massivlərində element əlavə etmək üçün push() metodundan istifadə olunur.",
        "explanation": "JavaScript Array prototipində append metodu yoxdur, push metodu mövcuddur."
      },
      {
        "id": "ep-6-2",
        "title": "Son Element İndeksində Undefined Xətası",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda sonuncu elementi almaq üçün arr[arr.length] yazılıb və bu undefined verir. arr[arr.length - 1] ilə düzəldin.",
        "buggyCode": "const sozler = [\"İlk\", \"Orta\", \"Son\"];\nconsole.log(sozler[sozler.length]);",
        "correctCode": "const sozler = [\"İlk\", \"Orta\", \"Son\"];\nconsole.log(sozler[sozler.length - 1]);",
        "correctOutput": "Son",
        "hint": "İndekslər 0-dan başladığı üçün son elementin indeksi uzunluqdan 1 vahid azdır.",
        "explanation": "Massivin sonuncu elementi arr[arr.length - 1] mövqeyində yerləşir."
      },
      {
        "id": "ep-6-3",
        "title": "pop() Metodunun Mötərizəsiz Çağırılması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda pop metodunun sonuna mötərizələr qoyulmadığı üçün funksiyanın özü qayıdır. Onu pop() olaraq çağırın.",
        "buggyCode": "const elementler = [\"Qaldı\", \"Silindi\"];\nconst s = elementler.pop;\nconsole.log(s);",
        "correctCode": "const elementler = [\"Qaldı\", \"Silindi\"];\nconst s = elementler.pop();\nconsole.log(s);",
        "correctOutput": "Silindi",
        "hint": "Metodun icra olunması üçün mütləq yumru mötərizələr yazılmalıdır: elementler.pop()",
        "explanation": "Funksiyanı çağırmaq üçün mötərizələr () tələb olunur."
      },
      {
        "id": "ep-6-4",
        "title": "slice() Orijinal Massivi Dəyişmir",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda slice çağırıldıqdan sonra orijinal arr-ın kəsildiyi zənn edilir. slice-ın nəticəsini yeni dəyişənə mənimsədib çap edin.",
        "buggyCode": "const arr = [1, 2, 3, 4];\narr.slice(0, 2);\nconsole.log(arr);",
        "correctCode": "const arr = [1, 2, 3, 4];\nconst hisse = arr.slice(0, 2);\nconsole.log(hisse);",
        "correctOutput": "[\n  1,\n  2\n]",
        "hint": "slice() metodu orijinal massivi dəyişmir, kəsilmiş hissəni yeni massiv kimi qaytarır.",
        "explanation": "slice immutable metoddur və qayıdan nəticə dəyişəndə saxlanmalıdır."
      },
      {
        "id": "ep-6-5",
        "title": "splice() Arqumentlərinin Yanlış Verilməsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod massivdən 1-ci indeksdəki 2 ədədini silərək [1, 3] saxlamalıdır, lakin splice-a ikinci parametr kimi bitmə indeksi verilib. Silinəcək say kimi 1 verin.",
        "buggyCode": "const arr = [1, 2, 3];\narr.splice(1, 2);\nconsole.log(arr);",
        "correctCode": "const arr = [1, 2, 3];\narr.splice(1, 1);\nconsole.log(arr);",
        "correctOutput": "[\n  1,\n  3\n]",
        "hint": "splice(start, deleteCount) metodunda ikinci arqument neçə elementin silinəcəyini göstərir.",
        "explanation": "splice(1, 1) birinci indeksdən başlayaraq cəmi 1 element silir."
      },
      {
        "id": "ep-6-6",
        "title": "Massivdə Axtarış Üçün in Operatoru Səhvi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda massivdə 'Alma' sözünün olub-olmadığını yoxlamaq üçün 'in' yazılıb və false verir (çünki in indeksləri yoxlayır). includes() ilə düzəldin.",
        "buggyCode": "const meyveler = [\"Alma\", \"Banan\"];\nconsole.log(\"Alma\" in meyveler);",
        "correctCode": "const meyveler = [\"Alma\", \"Banan\"];\nconsole.log(meyveler.includes(\"Alma\"));",
        "correctOutput": "true",
        "hint": "Massiv daxilində dəyərin mövcudluğunu yoxlamaq üçün includes() metodundan istifadə olunur.",
        "explanation": "in operatoru obyekt və massivlərdə açarları/indeksləri yoxlayır, dəyərləri deyil."
      },
      {
        "id": "ep-6-7",
        "title": "indexOf Tapılmadıqda Qayıdan Dəyər",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod element tapılmadıqda false çap etməlidir, lakin indexOf tapılmadıqda -1 qaytarır və if(-1) true sayılır. 'arr.indexOf(\"X\") !== -1' ilə yoxlayın.",
        "buggyCode": "const arr = [\"A\", \"B\"];\nlet tapildi = false;\nif (arr.indexOf(\"X\")) {\n  tapildi = true;\n}\nconsole.log(tapildi);",
        "correctCode": "const arr = [\"A\", \"B\"];\nlet tapildi = false;\nif (arr.indexOf(\"X\") !== -1) {\n  tapildi = true;\n}\nconsole.log(tapildi);",
        "correctOutput": "false",
        "hint": "indexOf metodu element tapılmadıqda -1 qaytarır. Müqayisəni !== -1 ilə aparın.",
        "explanation": "-1 ədədi JavaScript-də truthy sayılır, ona görə birbaşa if şərtinə qoyula bilməz."
      },
      {
        "id": "ep-6-8",
        "title": "unshift Əvəzinə push Yazılması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod 0 ədədini massivin əvvəlinə əlavə edərək [0, 1, 2] almalıdır, lakin push sonuna əlavə edir. unshift ilə düzəldin.",
        "buggyCode": "const arr = [1, 2];\narr.push(0);\nconsole.log(arr);",
        "correctCode": "const arr = [1, 2];\narr.unshift(0);\nconsole.log(arr);",
        "correctOutput": "[\n  0,\n  1,\n  2\n]",
        "hint": "Massivin əvvəlinə element daxil etmək üçün unshift() metodundan istifadə olunur.",
        "explanation": "push sonuna, unshift isə əvvəlinə əlavə edir."
      },
      {
        "id": "ep-6-9",
        "title": "join() Ayırıcı Parametrinin Unudulması",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kod hərfləri 'A - B - C' kimi birləşdirməlidir, lakin join() boş çağırıldığı üçün standart vergüllə 'A,B,C' çıxarır. join(' - ') ilə düzəldin.",
        "buggyCode": "const herfler = [\"A\", \"B\", \"C\"];\nconsole.log(herfler.join());",
        "correctCode": "const herfler = [\"A\", \"B\", \"C\"];\nconsole.log(herfler.join(\" - \"));",
        "correctOutput": "A - B - C",
        "hint": "join metoduna arqument olaraq ayırıcı mətn ötürülməlidir: join(' - ')",
        "explanation": "join() arqumentsiz çağırıldıqda standart olaraq vergül simvolundan istifadə edir."
      },
      {
        "id": "ep-6-10",
        "title": "Massivin Referansla Kopyalanması Tələsi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda 'b = a' yazıldığı üçün b-dəki dəyişiklik a-nı da dəyişir və a[0] 99 olur. Spread operatoru ([...a]) istifadə edin ki, a[0] toxunulmaz (1) qalsın.",
        "buggyCode": "let a = [1, 2];\nlet b = a;\nb[0] = 99;\nconsole.log(a[0]);",
        "correctCode": "let a = [1, 2];\nlet b = [...a];\nb[0] = 99;\nconsole.log(a[0]);",
        "correctOutput": "1",
        "hint": "Massivin kopyasını çıxarmaq üçün spread operatorundan ([...a]) istifadə edin.",
        "explanation": "Massivlər referans tipidir; b = a yazdıqda eyni yaddaş ünvanı ötürülür."
      }
    ]
  },
  {
    "sectionId": "sec-7",
    "sectionTitle": "Bölmə 7: Funksiyalar (Declarations, Arrow Functions, Default Parametrlər)",
    "icon": "⚡",
    "bugs": [
      {
        "id": "ep-7-1",
        "title": "Python def Əvəzinə function Yazılması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda funksiya elanı üçün Python-un 'def' sözü yazılıb. Onu JavaScript-in 'function' açar sözü ilə düzəldin.",
        "buggyCode": "def topla(a, b) {\n  return a + b;\n}\nconsole.log(topla(7, 8));",
        "correctCode": "function topla(a, b) {\n  return a + b;\n}\nconsole.log(topla(7, 8));",
        "correctOutput": "15",
        "hint": "JavaScript-də funksiyalar 'function' açar sözü ilə elan edilir.",
        "explanation": "def açar sözü JavaScript-də sintaksis xətasıdır."
      },
      {
        "id": "ep-7-2",
        "title": "Arrow Funksiyasında return Unudulması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı ox funksiyasında fiqurlu mötərizə açılıb, lakin return yazılmadığı üçün undefined verir. return əlavə edin.",
        "buggyCode": "const vur = (a, b) => {\n  a * b;\n};\nconsole.log(vur(4, 5));",
        "correctCode": "const vur = (a, b) => {\n  return a * b;\n};\nconsole.log(vur(4, 5));",
        "correctOutput": "20",
        "hint": "Ox funksiyasında fiqurlu mötərizə { } istifadə edildikdə dəyəri geri qaytarmaq üçün return mütləqdir.",
        "explanation": "Fiqurlu mötərizəli arrow funksiyalarında implicit return işləmir, açıq return tələb olunur."
      },
      {
        "id": "ep-7-3",
        "title": "Funksiya Çağırışında Mötərizə Unudulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda salamDe funksiyası mötərizəsiz çağırıldığı üçün funksiyanın mətni çıxır. salamDe() ilə icra edin.",
        "buggyCode": "function salamDe() {\n  return \"Salam\";\n}\nconsole.log(salamDe);",
        "correctCode": "function salamDe() {\n  return \"Salam\";\n}\nconsole.log(salamDe());",
        "correctOutput": "Salam",
        "hint": "Funksiyanı icra edib qaytardığı nəticəni almaq üçün sonuna mötərizə () qoyulmalıdır.",
        "explanation": "Mötərizəsiz yazıldıqda funksiyanın öz referansı ötürülür, icra olunmur."
      },
      {
        "id": "ep-7-4",
        "title": "Default Parametr Olmadıqda NaN Yaranması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı funksiyaya ikinci arqument verilmədikdə 10 + undefined = NaN alınır. b parametrinə standart olaraq 0 (b = 0) təyin edin.",
        "buggyCode": "function topla(a, b) {\n  return a + b;\n}\nconsole.log(topla(10));",
        "correctCode": "function topla(a, b = 0) {\n  return a + b;\n}\nconsole.log(topla(10));",
        "correctOutput": "10",
        "hint": "Parametr ötürülmədikdə NaN yaranmaması üçün b parametrinə default olaraq 0 verin: topla(a, b = 0)",
        "explanation": "Ədədlə undefined toplandıqda NaN (Not a Number) yaranır."
      },
      {
        "id": "ep-7-5",
        "title": "Funksiyanın Lokal Dəyişəninə Kənardan Müraciət",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda funksiyanın daxilindəki 'gizli' dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Funksiyadan onu return edin və funksiyanı çağırıb çap edin.",
        "buggyCode": "function test() {\n  let gizli = \"Gizli\";\n}\ntest();\nconsole.log(gizli);",
        "correctCode": "function test() {\n  let gizli = \"Gizli\";\n  return gizli;\n}\nconsole.log(test());",
        "correctOutput": "Gizli",
        "hint": "Lokal dəyişən kənardan əlçatan deyil. Dəyəri funksiyadan return edin və console.log(test()) yazın.",
        "explanation": "Funksiya daxilində elan olunan dəyişənlər lokal sahəyə (local scope) malikdir."
      },
      {
        "id": "ep-7-6",
        "title": "Çoxsaylı Parametrli Arrow Funksiyada Mötərizə",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı arrow funksiyasında iki parametr mötərizəsiz yazıldığı üçün sintaksis xətası verir. (a, b) mötərizəsinə alın.",
        "buggyCode": "const topla = a, b => a + b;\nconsole.log(topla(3, 5));",
        "correctCode": "const topla = (a, b) => a + b;\nconsole.log(topla(3, 5));",
        "correctOutput": "8",
        "hint": "Arrow funksiyasında birdən çox parametr olduqda onlar mütləq mötərizə (a, b) daxilində yazılmalıdır.",
        "explanation": "Yalnız tək parametr olduqda mötərizələr buraxıla bilər."
      },
      {
        "id": "ep-7-7",
        "title": "Rest Operatorunun (...args) Unudulması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı funksiya istənilən sayda parametr qəbul edib sayını qaytarmalıdır, lakin adi parametr yazıldığı üçün elementler.length xətaya səbəb olur. Rest operatoru (...elementler) yazın.",
        "buggyCode": "function say(elementler) {\n  return elementler.length;\n}\nconsole.log(say(10, 20, 30));",
        "correctCode": "function say(...elementler) {\n  return elementler.length;\n}\nconsole.log(say(10, 20, 30));",
        "correctOutput": "3",
        "hint": "İstənilən sayda arqumenti massiv kimi toplamaq üçün parametrin əvvəlinə üç nöqtə (...) qoyun.",
        "explanation": "Rest parametri (...args) ötürülən bütün arqumentləri tək massiv daxilində cəmləyir."
      },
      {
        "id": "ep-7-8",
        "title": "return-dən Sonrakı Kodun İcrası Səhvi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı funksiya 'Əvvəl' çap etməlidir, lakin return əvvəl yazıldığı üçün konsol əmri heç vaxt işləmir. console.log əmrini return-dən əvvələ qoyun.",
        "buggyCode": "function goster() {\n  return;\n  console.log(\"Əvvəl\");\n}\ngoster();",
        "correctCode": "function goster() {\n  console.log(\"Əvvəl\");\n  return;\n}\ngoster();",
        "correctOutput": "Əvvəl",
        "hint": "return əmri funksiyanın icrasını dərhal dayandırır, ondan sonrakı kodlar işləmir.",
        "explanation": "Unreachable code: return icra edildikdən sonra funksiyanın gövdəsi tərk edilir."
      },
      {
        "id": "ep-7-9",
        "title": "Arrow Funksiyasında Obyekt Qaytarma Sintaksisi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı arrow funksiyası obyekt qaytarmalıdır, lakin fiqurlu mötərizə funksiya gövdəsi kimi başa düşüldüyü üçün undefined verir. Obyekti yumru mötərizəyə: ({ x: 1 }) alın.",
        "buggyCode": "const obyektYarat = () => { x: 1 };\nconsole.log(obyektYarat().x);",
        "correctCode": "const obyektYarat = () => ({ x: 1 });\nconsole.log(obyektYarat().x);",
        "correctOutput": "1",
        "hint": "Ox funksiyasında birbaşa obyekt qaytarmaq üçün onu yumru mötərizəyə almaq lazımdır: () => ({ x: 1 })",
        "explanation": "Fiqurlu mötərizə funksiya bloku kimi təfsir olunur; obyekti qaytarmaq üçün ({...}) yazılmalıdır."
      },
      {
        "id": "ep-7-10",
        "title": "Faktorial Rekursiyasında Baza Çıxış Şərtinin Unudulması",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı rekursiv faktorial funksiyasında baza çıxış şərti olmadığı üçün sonsuz rekursiya və RangeError verir. 'if (n <= 1) return 1;' əlavə edin ki, faktorial(5) = 120 hesablasın.",
        "buggyCode": "function faktorial(n) {\n  return n * faktorial(n - 1);\n}\nconsole.log(faktorial(5));",
        "correctCode": "function faktorial(n) {\n  if (n <= 1) return 1;\n  return n * faktorial(n - 1);\n}\nconsole.log(faktorial(5));",
        "correctOutput": "120",
        "hint": "Rekursiyanın dayanması üçün əvvələ 'if (n <= 1) return 1;' şərtini qoyun.",
        "explanation": "Baza şərti olmayan rekursiv çağırış çağırış yığınını (call stack) dolduraraq RangeError verir."
      }
    ]
  },
  {
    "sectionId": "sec-8",
    "sectionTitle": "Bölmə 8: Obyektlər (Objects, dot/bracket notation, Object.keys/values)",
    "icon": "💎",
    "bugs": [
      {
        "id": "ep-8-1",
        "title": "Obyekt Xassəsinə Funksiya Kimi Müraciət",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda 'ad' adi sətir xassəsi olduğu halda funksiya kimi mötərizə ilə çağırıldığı üçün TypeError verir. Mötərizələri silin.",
        "buggyCode": "const user = { ad: \"Murad\" };\nconsole.log(user.ad());",
        "correctCode": "const user = { ad: \"Murad\" };\nconsole.log(user.ad);",
        "correctOutput": "Murad",
        "hint": "Obyektin adi xassələri funksiya deyil və mötərizəsiz çağırılır: user.ad",
        "explanation": "Funksiya olmayan xassəni mötərizə ilə çağırmaq TypeError: is not a function xətası verir."
      },
      {
        "id": "ep-8-2",
        "title": "Mövcud Olmayan Xassə və Undefined",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod 'Bakı' çap etməlidir, lakin səhvən obyektdə olmayan 'olke' xassəsi çağırılıb və undefined çıxır. 'user.seher' olaraq düzəldin.",
        "buggyCode": "const user = { seher: \"Bakı\" };\nconsole.log(user.olke);",
        "correctCode": "const user = { seher: \"Bakı\" };\nconsole.log(user.seher);",
        "correctOutput": "Bakı",
        "hint": "Obyektdə mövcud olan 'seher' xassəsini çağırın.",
        "explanation": "Obyektdə təyin olunmamış xassələr undefined qaytarır."
      },
      {
        "id": "ep-8-3",
        "title": "Metod Daxilində this Unudulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı metod daxilində 'ad' xassəsinin qarşısında 'this.' unudulduğu üçün ReferenceError verir. 'this.ad' yazaraq düzəldin.",
        "buggyCode": "const user = {\n  ad: \"Aysel\",\n  salam() {\n    return ad;\n  }\n};\nconsole.log(user.salam());",
        "correctCode": "const user = {\n  ad: \"Aysel\",\n  salam() {\n    return this.ad;\n  }\n};\nconsole.log(user.salam());",
        "correctOutput": "Aysel",
        "hint": "Obyekt metodunun daxilində öz xassələrinə müraciət etmək üçün 'this.ad' yazılmalıdır.",
        "explanation": "this prefiksi olmadan JavaScript onu qlobal və ya lokal dəyişən kimi axtarır və tapmır."
      },
      {
        "id": "ep-8-4",
        "title": "Bracket Notation-da Dırnağın Unudulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda bracket notation daxilində açar adı dırnaqsız yazıldığı üçün 'ad' dəyişənini axtarır və ReferenceError verir. user[\"ad\"] şəklində düzəldin.",
        "buggyCode": "const user = { ad: \"Kənan\" };\nconsole.log(user[ad]);",
        "correctCode": "const user = { ad: \"Kənan\" };\nconsole.log(user[\"ad\"]);",
        "correctOutput": "Kənan",
        "hint": "Kvadrat mötərizə içərisində xassənin adı sətir kimi dırnaqda yazılmalıdır: user['ad']",
        "explanation": "Dırnaqsız yazıldıqda açar dəyişən kimi qiymətləndirilir."
      },
      {
        "id": "ep-8-5",
        "title": "Python Style dict.keys() Xətası",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda Python üslubunda 'obj.keys()' çağırıldığı üçün TypeError verir. JavaScript-in qlobal 'Object.keys(obj)' metodundan istifadə edin.",
        "buggyCode": "const obj = { a: 1, b: 2 };\nconsole.log(obj.keys());",
        "correctCode": "const obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj));",
        "correctOutput": "[\n  \"a\",\n  \"b\"\n]",
        "hint": "Obyektin açarlarını almaq üçün qlobal Object.keys(obj) metodunu çağırın.",
        "explanation": "JavaScript-də keys metodu birbaşa obyektin üzərində deyil, Object konstruktorundadır."
      },
      {
        "id": "ep-8-6",
        "title": "Dəyərlər Əvəzinə Açarların Çıxarılması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod obyektin dəyərlərini [10, 20] kimi çap etməlidir, lakin Object.keys istifadə edildiyi üçün açarlar çıxır. Object.values(obj) ilə əvəzləyin.",
        "buggyCode": "const obj = { x: 10, y: 20 };\nconsole.log(Object.keys(obj));",
        "correctCode": "const obj = { x: 10, y: 20 };\nconsole.log(Object.values(obj));",
        "correctOutput": "[\n  10,\n  20\n]",
        "hint": "Dəyərləri massiv kimi almaq üçün Object.values(obj) metodundan istifadə edin.",
        "explanation": "Object.keys açarları, Object.values isə dəyərləri qaytarır."
      },
      {
        "id": "ep-8-7",
        "title": "Dinamik Açara Nöqtə ilə Müraciət Səhvi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod dinamik olaraq 'qiymet' xassəsini oxumalıdır, lakin nöqtə notasiyası (obj.acar) hərfi mənada 'acar' adlı xassə axtarır və undefined verir. obj[acar] ilə düzəldin.",
        "buggyCode": "const mehsul = { qiymet: 50 };\nconst acar = \"qiymet\";\nconsole.log(mehsul.acar);",
        "correctCode": "const mehsul = { qiymet: 50 };\nconst acar = \"qiymet\";\nconsole.log(mehsul[acar]);",
        "correctOutput": "50",
        "hint": "Dəyişəndə saxlanılan açara müraciət etmək üçün kvadrat mötərizə istifadə edilməlidir: mehsul[acar]",
        "explanation": "Nöqtə notasiyası dinamik dəyişənləri dəstəkləmir, literal açar axtarır."
      },
      {
        "id": "ep-8-8",
        "title": "[object Object] Çıxış Tələsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod 'Noutbuk: 1200' çap etmək istəyərkən obyekti sətirlə topladığı üçün '[object Object]' çıxarır. Məhsulun ad və qiymətini xassələrdən oxuyaraq düzəldin.",
        "buggyCode": "const m = { ad: \"Noutbuk\", qiymet: 1200 };\nconsole.log(m.ad + \": \" + m);",
        "correctCode": "const m = { ad: \"Noutbuk\", qiymet: 1200 };\nconsole.log(m.ad + \": \" + m.qiymet);",
        "correctOutput": "Noutbuk: 1200",
        "hint": "Obyektin özünü deyil, onun qiymet xassəsini (m.qiymet) birləşdirin.",
        "explanation": "Obyekt sətirə çevrilərkən standart olaraq '[object Object]' mətnini verir."
      },
      {
        "id": "ep-8-9",
        "title": "Object.entries() Destrukturizasiya Xətası",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda for...of daxilində açar və dəyər tək dəyişənə yığılıb. Destrukturizasiya edərək [k, v] şəklində yazın ki, 'a: 1' çap olunsun.",
        "buggyCode": "const obj = { a: 1 };\nfor (const e of Object.entries(obj)) {\n  console.log(e[0] + \": \" + e[1]);\n}",
        "correctCode": "const obj = { a: 1 };\nfor (const [k, v] of Object.entries(obj)) {\n  console.log(`${k}: ${v}`);\n}",
        "correctOutput": "a: 1",
        "hint": "for (const [k, v] of Object.entries(obj)) sintaksisindən istifadə edin.",
        "explanation": "Object.entries hər addımda [açar, dəyər] massivi qaytarır və [k, v] ilə təmiz oxunur."
      },
      {
        "id": "ep-8-10",
        "title": "Obyekt Metodunda Arrow Function İstifadəsi Tələsi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı obyekt metodu ox funksiyası ilə yazıldığı üçün this obyekti göstərmir və undefined verir. Klassik metod sintaksisi (test() { ... }) ilə düzəldin.",
        "buggyCode": "const obj = {\n  deyer: \"Test\",\n  getDeyer: () => {\n    return this.deyer;\n  }\n};\nconsole.log(obj.getDeyer());",
        "correctCode": "const obj = {\n  deyer: \"Test\",\n  getDeyer() {\n    return this.deyer;\n  }\n};\nconsole.log(obj.getDeyer());",
        "correctOutput": "Test",
        "hint": "Obyekt metodlarında 'this'-in həmin obyekti göstərməsi üçün adi metod sintaksisindən (getDeyer() { ... }) istifadə edin.",
        "explanation": "Arrow funksiyalar öz 'this' kontekstinə malik deyil və əhatə edən sahənin this-ini miras alır."
      }
    ]
  },
  {
    "sectionId": "sec-9",
    "sectionTitle": "Bölmə 9: String Metodları və Template Literals (`${}`)",
    "icon": "📝",
    "bugs": [
      {
        "id": "ep-9-1",
        "title": "Template Literal Üçün Adi Dırnaq İstifadəsi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda adi qoşa dırnaq istifadə edildiyi üçün ${ad} hərfi mətn kimi çıxır. Kənar dırnaqları backtick (`` ` ``) ilə əvəz edin.",
        "buggyCode": "let ad = \"Əli\";\nconsole.log(\"Salam, ${ad}!\");",
        "correctCode": "let ad = \"Əli\";\nconsole.log(`Salam, ${ad}!`);",
        "correctOutput": "Salam, Əli!",
        "hint": "${} interpolyasiyasının işləməsi üçün mətn mütləq backtick (`` ` ``) daxilində yazılmalıdır.",
        "explanation": "Adi tək və ya cüt dırnaqlarda ${} şablon sintaksisi icra olunmur."
      },
      {
        "id": "ep-9-2",
        "title": "toUpperCase Metodunun Mötərizəsiz Çağırılması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda toUpperCase metodunun mötərizələri unudulduğu üçün funksiyanın özü qayıdır. Onu toUpperCase() kimi çağırın.",
        "buggyCode": "let str = \"salam\";\nconsole.log(str.toUpperCase);",
        "correctCode": "let str = \"salam\";\nconsole.log(str.toUpperCase());",
        "correctOutput": "SALAM",
        "hint": "Metodu icra etmək üçün sonuna mötərizələr əlavə edin: str.toUpperCase()",
        "explanation": "Mötərizəsiz çağırış metodun özünü qaytarır, nəticəsini deyil."
      },
      {
        "id": "ep-9-3",
        "title": "trim() Metodunun Orijinal Mətni Dəyişməməsi",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda trim() çağırıldıqdan sonra nəticə yenidən dəyişənə mənimsədilmədiyi üçün boşluqlar qalır. 'str = str.trim();' edin.",
        "buggyCode": "let str = \"  admin  \";\nstr.trim();\nconsole.log(str);",
        "correctCode": "let str = \"  admin  \";\nstr = str.trim();\nconsole.log(str);",
        "correctOutput": "admin",
        "hint": "Stringlər immutable-dir (dəyişməzdir). trim() nəticəsini dəyişənə yenidən mənimsədin.",
        "explanation": "Mətn metodları orijinal sətiri dəyişmir, yeni sətir qaytarır."
      },
      {
        "id": "ep-9-4",
        "title": "Bütün Uyğunluqları Əvəzləmək Üçün replaceAll İstifadəsi",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda replace() yalnız ilk nöqtəni tire edir ('a-b.c'). Bütün nöqtələri dəyişərək 'a-b-c' almaq üçün replaceAll('.', '-') istifadə edin.",
        "buggyCode": "let str = \"a.b.c\";\nconsole.log(str.replace(\".\", \"-\"));",
        "correctCode": "let str = \"a.b.c\";\nconsole.log(str.replaceAll(\".\", \"-\"));",
        "correctOutput": "a-b-c",
        "hint": "Bütün uyğunluqları əvəzləmək üçün replaceAll() metodundan istifadə edin.",
        "explanation": "replace() ilk uyğun gələni, replaceAll() isə bütün uyğun gələnləri dəyişdirir."
      },
      {
        "id": "ep-9-5",
        "title": "split() Ayırıcı Arqumentinin Unudulması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod vergüllə ayrılmış mətni 3 elementli massivə bölməlidir, lakin split-ə parametr verilməyib. split(\",\") yazın.",
        "buggyCode": "let str = \"1,2,3\";\nconsole.log(str.split());",
        "correctCode": "let str = \"1,2,3\";\nconsole.log(str.split(\",\"));",
        "correctOutput": "[\n  \"1\",\n  \"2\",\n  \"3\"\n]",
        "hint": "Mətni vergüllərə görə parçalamaq üçün split(\",\") yazın.",
        "explanation": "split() arqumentsiz çağırıldıqda bütün mətni tək elementli massiv edir."
      },
      {
        "id": "ep-9-6",
        "title": "includes() Metodunun Həssaslığı (Case Sensitivity)",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı axtarış true qaytarmalıdır, lakin böyük-kiçik hərf fərqinə görə false verir. Mətni əvvəlcə toLowerCase() edib sonra axtarın.",
        "buggyCode": "let str = \"JavaScript\";\nconsole.log(str.includes(\"script\"));",
        "correctCode": "let str = \"JavaScript\";\nconsole.log(str.toLowerCase().includes(\"script\"));",
        "correctOutput": "true",
        "hint": "Axtarışın uğurlu olması üçün mətni kiçik hərflərə çevirin: str.toLowerCase().includes('script')",
        "explanation": "includes metodu böyük və kiçik hərfləri fərqli simvol kimi tanıyır."
      },
      {
        "id": "ep-9-7",
        "title": "String İndeksinə Mənimsətmə Xətası",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı proqramçı str[0] = 'B' yazaraq ilk hərfi dəyişmək istəyir, lakin stringlər dəyişdirilə bilməz (immutable). replace() ilə 'Banan' alın.",
        "buggyCode": "let str = \"Aanan\";\nstr[0] = \"B\";\nconsole.log(str);",
        "correctCode": "let str = \"Aanan\";\nstr = str.replace(\"A\", \"B\");\nconsole.log(str);",
        "correctOutput": "Banan",
        "hint": "Mətndəki hərfi dəyişmək üçün replace('A', 'B') metodundan istifadə edin.",
        "explanation": "JavaScript-də string indeksləri yalnız oxumaq üçündür, birbaşa mənimsətməyə icazə verilmir."
      },
      {
        "id": "ep-9-8",
        "title": "slice() Mənfi İndeks ilə Hissə Kəsmək",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod mətnin son 6 simvolunu ('Script') kəsib götürməlidir, lakin slice arqumenti səhvdir. str.slice(-6) ilə düzəldin.",
        "buggyCode": "let str = \"JavaScript\";\nconsole.log(str.slice(-4));",
        "correctCode": "let str = \"JavaScript\";\nconsole.log(str.slice(-6));",
        "correctOutput": "Script",
        "hint": "'Script' sözü 6 hərfdən ibarətdir, ona görə str.slice(-6) yazılmalıdır.",
        "explanation": "slice mənfi parametr qəbul etdikdə saymanı sətirin sonundan aparır."
      },
      {
        "id": "ep-9-9",
        "title": "Template Literal Daxilində İfadənin Dırnağa Salınması",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kod 'Cəm: 30' çap etməlidir, lakin ${} daxilində dırnaq qoyulduğu üçün 'Cəm: a + b' çıxır. Dırnaqları silin.",
        "buggyCode": "let a = 10, b = 20;\nconsole.log(`Cəm: ${\"a + b\"}`);",
        "correctCode": "let a = 10, b = 20;\nconsole.log(`Cəm: ${a + b}`);",
        "correctOutput": "Cəm: 30",
        "hint": "${} daxilində riyazi ifadə dırnaqsız yazılmalıdır: ${a + b}",
        "explanation": "Dırnaq qoyulduqda o riyazi ifadə kimi hesablanmır, adi mətn kimi qəbul edilir."
      },
      {
        "id": "ep-9-10",
        "title": "startsWith() Simvol Yoxlanışı Səhvi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kod mətnin 'https' ilə başladığını yoxlamalıdır, lakin startsWith daxilində səhv hərf yazılıb. 'https' yazaraq true alın.",
        "buggyCode": "let url = \"https://google.com\";\nconsole.log(url.startsWith(\"http:\"));",
        "correctCode": "let url = \"https://google.com\";\nconsole.log(url.startsWith(\"https\"));",
        "correctOutput": "true",
        "hint": "url dəyişəni 'https' ilə başlayır, ona görə url.startsWith('https') yazılmalıdır.",
        "explanation": "startsWith dəqiq prefiksi yoxlayır, bir simvol belə fərqli olsa false qaytarır."
      }
    ]
  },
  {
    "sectionId": "sec-10",
    "sectionTitle": "Bölmə 10: Xəta İdarəetmə (try...catch, throw new Error)",
    "icon": "🛡️",
    "bugs": [
      {
        "id": "ep-10-1",
        "title": "Python except Əvəzinə catch",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda Python üslubunda 'except' yazıldığı üçün xəta verir. Onu JavaScript-in 'catch' açar sözü ilə əvəzləyin.",
        "buggyCode": "try {\n  let a = b;\n} except (err) {\n  console.log(\"Xəta tutuldu\");\n}",
        "correctCode": "try {\n  let a = b;\n} catch (err) {\n  console.log(\"Xəta tutuldu\");\n}",
        "correctOutput": "Xəta tutuldu",
        "hint": "JavaScript-də xətaları tutmaq üçün 'except' deyil, 'catch' açar sözündən istifadə olunur.",
        "explanation": "JavaScript try...catch blokunu tələb edir."
      },
      {
        "id": "ep-10-2",
        "title": "Python raise Əvəzinə throw new Error",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda xəta atmaq üçün 'raise' yazılıb. Onu JavaScript-in 'throw new Error(...)' sintaksisi ilə düzəldin.",
        "buggyCode": "function yoxla() {\n  raise Error(\"Limit aşdı\");\n}\ntry {\n  yoxla();\n} catch(e) {\n  console.log(e.message);\n}",
        "correctCode": "function yoxla() {\n  throw new Error(\"Limit aşdı\");\n}\ntry {\n  yoxla();\n} catch(e) {\n  console.log(e.message);\n}",
        "correctOutput": "Limit aşdı",
        "hint": "JavaScript-də xəta yaratmaq üçün 'throw new Error(...)' yazılır.",
        "explanation": "raise açar sözü JavaScript-də yoxdur, throw operatoru tətbiq edilməlidir."
      },
      {
        "id": "ep-10-3",
        "title": "catch Blokunda Parametrin Unudulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı catch blokunda xəta obyekti qəbul edilmədiyi üçün 'err.message' oxunarkən ReferenceError verir. 'catch (err)' yazın.",
        "buggyCode": "try {\n  throw new Error(\"Mesaj\");\n} catch {\n  console.log(err.message);\n}",
        "correctCode": "try {\n  throw new Error(\"Mesaj\");\n} catch (err) {\n  console.log(err.message);\n}",
        "correctOutput": "Mesaj",
        "hint": "catch blokuna parametr kimi xəta obyektini ötürün: catch (err)",
        "explanation": "Xətanın message xassəsini oxumaq üçün xəta dəyişəni catch-də elan olunmalıdır."
      },
      {
        "id": "ep-10-4",
        "title": "finally Blokunda Mötərizə Xətası",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı finally blokunun fiqurlu mötərizələri unudulub və sintaksis xətası verir. finally { ... } şəklində qapanışı düzəldin.",
        "buggyCode": "try {\n  // kod\n} finally\n  console.log(\"Təmizləndi\");",
        "correctCode": "try {\n  // kod\n} finally {\n  console.log(\"Təmizləndi\");\n}",
        "correctOutput": "Təmizləndi",
        "hint": "finally bloku mütləq fiqurlu mötərizələr { } ilə əhatə olunmalıdır.",
        "explanation": "try və finally blokları həmişə blok strukturunda olmalıdır."
      },
      {
        "id": "ep-10-5",
        "title": "try Blokundan Kənarda Qalan Xəta",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda xəta try blokundan əvvəl baş verdiyi üçün catch tərəfindən tutulmur və proqram çökür. Təhlükəli kodu try-ın içinə köçürün.",
        "buggyCode": "let a = b + 1;\ntry {\n  console.log(a);\n} catch (e) {\n  console.log(\"Xəta\");\n}",
        "correctCode": "try {\n  let a = b + 1;\n  console.log(a);\n} catch (e) {\n  console.log(\"Xəta\");\n}",
        "correctOutput": "Xəta",
        "hint": "Xəta baş verə biləcək əməliyyat try blokunun daxilində yerləşməlidir.",
        "explanation": "try-dan kənarda yaranan istisnalar catch tərəfindən idarə edilə bilməz."
      },
      {
        "id": "ep-10-6",
        "title": "Error Obyekti Əvəzinə Sadə Mətn Atılması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda sadəcə sətir atıldığı üçün e.message oxunanda undefined verir. 'throw new Error(\"Xəta mətni\");' ilə düzəldin.",
        "buggyCode": "try {\n  throw \"Xəta mətni\";\n} catch (e) {\n  console.log(e.message);\n}",
        "correctCode": "try {\n  throw new Error(\"Xəta mətni\");\n} catch (e) {\n  console.log(e.message);\n}",
        "correctOutput": "Xəta mətni",
        "hint": "e.message xassəsini oxumaq üçün xətanı new Error(...) obyekti kimi atmaq lazımdır.",
        "explanation": "Sadə stringlərin .message xassəsi olmur, standart Error obyekti atılmalıdır."
      },
      {
        "id": "ep-10-7",
        "title": "Xəta Olmadıqda catch-in İşləməyəcəyini Nəzərə Almamaq",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod xəta olmadığı halda 'Uğur' çap etməlidir, lakin mesaj səhvən catch daxilinə qoyulub və heç nə çıxmır. 'Uğur' mesajını try daxilinə keçirin.",
        "buggyCode": "try {\n  let x = 10;\n} catch (e) {\n  console.log(\"Uğur\");\n}",
        "correctCode": "try {\n  let x = 10;\n  console.log(\"Uğur\");\n} catch (e) {\n  console.log(\"Xəta\");\n}",
        "correctOutput": "Uğur",
        "hint": "Xəta baş vermədikdə yalnız try bloku işləyir. Çap əmrini try-ın içinə yazın.",
        "explanation": "catch bloku yalnız xəta yarananda aktivləşir."
      },
      {
        "id": "ep-10-8",
        "title": "JSON.parse Xətasının Tutulmaması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod yanlış formatlı JSON mətnini oxumağa çalışır və proqramı çökdürür. Əməliyyatı try...catch blokuna alın və catch-də 'Format xətası' çap edin.",
        "buggyCode": "let data = JSON.parse(\"{ad: 123}\");\nconsole.log(data);",
        "correctCode": "try {\n  let data = JSON.parse(\"{ad: 123}\");\n} catch (e) {\n  console.log(\"Format xətası\");\n}",
        "correctOutput": "Format xətası",
        "hint": "JSON.parse əməliyyatını try...catch daxilinə alın və xətanı idarə edin.",
        "explanation": "Yanlış sintaksisli JSON mətnləri SyntaxError atır və mütləq tutulmalıdır."
      },
      {
        "id": "ep-10-9",
        "title": "Rekursiyada RangeError Xətasının Baza Şərti",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı rekursiv sayğacda çıxış şərti olmadığı üçün Maximum call stack size exceeded xətası verir. 'if (x <= 1) return 1;' əlavə edin ki, 5 qaytarsın.",
        "buggyCode": "function say(x) {\n  return 1 + say(x - 1);\n}\nconsole.log(say(5));",
        "correctCode": "function say(x) {\n  if (x <= 1) return 1;\n  return 1 + say(x - 1);\n}\nconsole.log(say(5));",
        "correctOutput": "5",
        "hint": "Rekursiyanın dayanması üçün əvvələ if (x <= 1) return 1; şərtini qoyun.",
        "explanation": "Dayanma şərti olmayan rekursiya yığının dolmasına (RangeError) səbəb olur."
      },
      {
        "id": "ep-10-10",
        "title": "finally Blokunun Həmişə İcrası Xüsusiyyəti",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda try daxilində return olsa belə, finally blokunun icra olunması nümayiş etdirilməlidir. finally daxilində 'Finally icra olundu' çap edin.",
        "buggyCode": "function test() {\n  try {\n    return \"Bitdi\";\n  } finally {\n    // konsola çıxarış unudulub\n  }\n}\ntest();",
        "correctCode": "function test() {\n  try {\n    return \"Bitdi\";\n  } finally {\n    console.log(\"Finally icra olundu\");\n  }\n}\ntest();",
        "correctOutput": "Finally icra olundu",
        "hint": "finally bloku içərisinə console.log('Finally icra olundu'); əlavə edin.",
        "explanation": "Funksiya try daxilində return etsə belə, çıxışdan dərhal əvvəl finally bloku mütləq icra edilir."
      }
    ]
  },
  {
    "sectionId": "sec-11",
    "sectionTitle": "Bölmə 11: Müasir Massiv Əməliyyatları (map, filter, reduce, find)",
    "icon": "⚡",
    "bugs": [
      {
        "id": "ep-11-1",
        "title": "map() Callback-ində return Unudulması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda fiqurlu mötərizə açıldığı üçün return unudulub və [undefined, undefined, undefined] alınır. Koda 'return x * 2;' əlavə edin.",
        "buggyCode": "const arr = [1, 2, 3];\nconst netice = arr.map(x => {\n  x * 2;\n});\nconsole.log(netice);",
        "correctCode": "const arr = [1, 2, 3];\nconst netice = arr.map(x => {\n  return x * 2;\n});\nconsole.log(netice);",
        "correctOutput": "[\n  2,\n  4,\n  6\n]",
        "hint": "map funksiyasında fiqurlu mötərizə { } istifadə edilirsə, yeni dəyəri qaytarmaq üçün mütləq return yazılmalıdır.",
        "explanation": "Açıq bloklu callback-lərdə return yazılmadıqda funksiya undefined qaytarır."
      },
      {
        "id": "ep-11-2",
        "title": "filter Əvəzinə map İstifadəsi Səhvi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod 5-dən böyük ədədləri [10, 20] kimi seçməlidir, lakin map yazıldığı üçün [false, true, true] çıxarır. filter ilə əvəzləyin.",
        "buggyCode": "const arr = [2, 10, 20];\nconst boyukler = arr.map(x => x > 5);\nconsole.log(boyukler);",
        "correctCode": "const arr = [2, 10, 20];\nconst boyukler = arr.filter(x => x > 5);\nconsole.log(boyukler);",
        "correctOutput": "[\n  10,\n  20\n]",
        "hint": "Şərtə görə elementləri süzgəcdən keçirib yeni massiv almaq üçün filter() metodundan istifadə olunur.",
        "explanation": "map hər elementin dəyişdirilmiş qiymətini, filter isə şərti ödəyən elementlərin özünü qaytarır."
      },
      {
        "id": "ep-11-3",
        "title": "reduce() Metodunda İlkin Dəyərin Unudulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kod obyekt massivindəki xalları toplamalıdır, lakin ilkin dəyər (0) verilmədiyi üçün birinci obyekt sətir kimi birləşir. reduce-a ikinci arqument kimi ', 0' verin.",
        "buggyCode": "const telebeler = [{xal: 20}, {xal: 40}];\nconst cem = telebeler.reduce((acc, t) => acc + t.xal);\nconsole.log(cem);",
        "correctCode": "const telebeler = [{xal: 20}, {xal: 40}];\nconst cem = telebeler.reduce((acc, t) => acc + t.xal, 0);\nconsole.log(cem);",
        "correctOutput": "60",
        "hint": "Obyekt massivlərini toplayarkən reduce(..., 0) formasında başlanğıc dəyəri 0 təyin edin.",
        "explanation": "Başlanğıc dəyər verilmədikdə ilk obyekt birbaşa akkumulyator kimi götürülür."
      },
      {
        "id": "ep-11-4",
        "title": "find Əvəzinə filter Yazılaraq Massiv Alınması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kod tapılan tək istifadəçinin adını ('Tapıldı') çap etməlidir, lakin filter yazıldığı üçün massiv qaytarır və tapilan.ad undefined olur. find ilə düzəldin.",
        "buggyCode": "const users = [{id: 1, ad: \"Tapıldı\"}];\nconst tapilan = users.filter(u => u.id === 1);\nconsole.log(tapilan.ad);",
        "correctCode": "const users = [{id: 1, ad: \"Tapıldı\"}];\nconst tapilan = users.find(u => u.id === 1);\nconsole.log(tapilan.ad);",
        "correctOutput": "Tapıldı",
        "hint": "Tək bir elementi obyekt kimi tapmaq üçün filter deyil, find() metodundan istifadə edin.",
        "explanation": "filter massiv qaytarır, find isə birbaşa obyektin özünü tapır."
      },
      {
        "id": "ep-11-5",
        "title": "every() Əvəzinə some() İstifadəsi Səhvi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kod BÜTÜN ədədlərin müsbət olub-olmadığını yoxlamalıdır, lakin some yazıldığı üçün mənfi ədəd olsa da true verir. every ilə əvəzləyin və false alın.",
        "buggyCode": "const ededler = [5, -2, 10];\nconsole.log(ededler.some(x => x > 0));",
        "correctCode": "const ededler = [5, -2, 10];\nconsole.log(ededler.every(x => x > 0));",
        "correctOutput": "false",
        "hint": "Bütün elementlərin şərti ödəməsini yoxlamaq üçün every() metodundan istifadə olunur.",
        "explanation": "some ən azı bir element ödədikdə true verir, every isə hamısının ödəməsini tələb edir."
      },
      {
        "id": "ep-11-6",
        "title": "map() Orijinal Massivi Dəyişmir",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda arr.map(x => x * 10) çağırıldıqdan sonra orijinal arr çap edildiyi üçün [1, 2] çıxır. map-in qaytardığı yeni massivi çap edin.",
        "buggyCode": "const arr = [1, 2];\narr.map(x => x * 10);\nconsole.log(arr);",
        "correctCode": "const arr = [1, 2];\nconst netice = arr.map(x => x * 10);\nconsole.log(netice);",
        "correctOutput": "[\n  10,\n  20\n]",
        "hint": "map() metodu orijinal massivi dəyişmir, yeni massiv qaytarır. Onu dəyişəndə saxlayıb çap edin.",
        "explanation": "map funksional və immutable metoddur."
      },
      {
        "id": "ep-11-7",
        "title": "filter Callback-ində Tək Bərabərlik Səhvi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı filter daxilində 'x = 5' yazıldığı üçün hər şey 5 mənimsədilib truthy olur. 'x === 5' ilə düzəldin ki, yalnız [5] seçilsin.",
        "buggyCode": "const arr = [3, 5, 8];\nconst netice = arr.filter(x => x = 5);\nconsole.log(netice);",
        "correctCode": "const arr = [3, 5, 8];\nconst netice = arr.filter(x => x === 5);\nconsole.log(netice);",
        "correctOutput": "[\n  5\n]",
        "hint": "Filter daxilində müqayisə üçün ciddi bərabərlik (===) istifadə olunmalıdır.",
        "explanation": "Tək bərabərlik mənimsətmədir və 5 truthy olduğu üçün bütün elementləri saxlayır."
      },
      {
        "id": "ep-11-8",
        "title": "reduce Parametrlərinin Sırasının Qarışıqlığı",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı reduce funksiyasında akkumulyator və cari element parametrlərinin sırası səhv verilib. (acc, cur) sırası ilə düzəldin ki, cəm 15 olsun.",
        "buggyCode": "const ededler = [5, 10];\nconst cem = ededler.reduce((cur, acc) => acc + cur, 0);\nconsole.log(cem);",
        "correctCode": "const ededler = [5, 10];\nconst cem = ededler.reduce((acc, cur) => acc + cur, 0);\nconsole.log(cem);",
        "correctOutput": "15",
        "hint": "reduce callback-ində birinci parametr toplayıcı (accumulator), ikinci parametr cari elementdir.",
        "explanation": "Düzgün parametr sırası (accumulator, currentValue) şəklindədir."
      },
      {
        "id": "ep-11-9",
        "title": "findIndex Tapılmadıqda Səhv Yoxlama",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda findIndex tapılmadıqda 'Tapılmadı' çap etməlidir, lakin -1 qaytardığı üçün if(-1) truthy sayılır. 'idx === -1' ilə yoxlayın.",
        "buggyCode": "const arr = [1, 2, 3];\nlet idx = arr.findIndex(x => x === 99);\nif (idx) {\n  console.log(\"Tapıldı\");\n} else {\n  console.log(\"Tapılmadı\");\n}",
        "correctCode": "const arr = [1, 2, 3];\nlet idx = arr.findIndex(x => x === 99);\nif (idx === -1) {\n  console.log(\"Tapılmadı\");\n} else {\n  console.log(\"Tapıldı\");\n}",
        "correctOutput": "Tapılmadı",
        "hint": "findIndex elementi tapmadıqda -1 qaytarır. idx === -1 ilə yoxlayın.",
        "explanation": "-1 ədədi boolean kontekstində true sayılır, ona görə açıq müqayisə aparılmalıdır."
      },
      {
        "id": "ep-11-10",
        "title": "Zəncirvari Metodlarda Sıra Səhvi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda əvvəlcə cüt ədədlər seçilməli, sonra 2-yə vurulmalı və [20, 40] alınmalıdır. Əvvəlcə filter, sonra map zəncirini qurun.",
        "buggyCode": "const arr = [5, 10, 15, 20];\nconst netice = arr.map(x => x * 2).filter(x => x > 50);\nconsole.log(netice);",
        "correctCode": "const arr = [5, 10, 15, 20];\nconst netice = arr.filter(x => x % 2 === 0).map(x => x * 2);\nconsole.log(netice);",
        "correctOutput": "[\n  20,\n  40\n]",
        "hint": "Əvvəlcə filter(x => x % 2 === 0) ilə cütləri seçin, sonra map(x => x * 2) ilə ikiqat artırın.",
        "explanation": "Zəncirvari metodlarda məntiqi ardıcıllıq düzgün qurulmalıdır."
      }
    ]
  },
  {
    "sectionId": "sec-12",
    "sectionTitle": "Bölmə 12: ES6 OOP (class, constructor, extends, super, this)",
    "icon": "🏛️",
    "bugs": [
      {
        "id": "ep-12-1",
        "title": "new Açar Sözünün Unudulması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kodda klas çağırılarkən 'new' açar sözü unudulduğu üçün TypeError baş verir. 'new User(\"Əli\")' ilə düzəldin.",
        "buggyCode": "class User {\n  constructor(ad) { this.ad = ad; }\n}\nconst u = User(\"Əli\");\nconsole.log(u.ad);",
        "correctCode": "class User {\n  constructor(ad) { this.ad = ad; }\n}\nconst u = new User(\"Əli\");\nconsole.log(u.ad);",
        "correctOutput": "Əli",
        "hint": "JavaScript klaslarından nüsxə yaratmaq üçün mütləq 'new' açar sözü yazılmalıdır.",
        "explanation": "ES6 klasları new açar sözü olmadan birbaşa çağırıla bilməz."
      },
      {
        "id": "ep-12-2",
        "title": "Törəmə Klasda super() Unudulması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı törəmə klasda super() çağırılmadığı üçün ReferenceError verir. Konstruktorun ilk sətrinə 'super(ad);' əlavə edin.",
        "buggyCode": "class Heyvan {\n  constructor(ad) { this.ad = ad; }\n}\nclass It extends Heyvan {\n  constructor(ad) {\n    this.cins = \"Qurdbasar\";\n  }\n}\nconst it = new It(\"Toplan\");\nconsole.log(it.ad);",
        "correctCode": "class Heyvan {\n  constructor(ad) { this.ad = ad; }\n}\nclass It extends Heyvan {\n  constructor(ad) {\n    super(ad);\n    this.cins = \"Qurdbasar\";\n  }\n}\nconst it = new It(\"Toplan\");\nconsole.log(it.ad);",
        "correctOutput": "Toplan",
        "hint": "extends ilə törəyən klaslarda this-ə toxunmazdan əvvəl mütləq super(...) çağırılmalıdır.",
        "explanation": "super() valideyn klasın konstruktorunu işə salır və this kontekstini formalaşdırır."
      },
      {
        "id": "ep-12-3",
        "title": "constructor Metodunun Adının Səhv Yazılması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda 'construct' yazıldığı üçün standart konstruktor kimi tanınmır və xassə təyin olunmur. Metod adını 'constructor' edin.",
        "buggyCode": "class Insan {\n  construct(yas) {\n    this.yas = yas;\n  }\n}\nconst i = new Insan(25);\nconsole.log(i.yas);",
        "correctCode": "class Insan {\n  constructor(yas) {\n    this.yas = yas;\n  }\n}\nconst i = new Insan(25);\nconsole.log(i.yas);",
        "correctOutput": "25",
        "hint": "Klasın konstruktor metodu dəqiq olaraq 'constructor' adlanmalıdır.",
        "explanation": "JavaScript yalnız xüsusi 'constructor' adını avtomatik icra edir."
      },
      {
        "id": "ep-12-4",
        "title": "Statik Metodun Obyektdən Çağırılması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda statik metod obyekt nüsxəsindən çağırıldığı üçün TypeError verir. Onu 'Riyaziyyat.topla()' kimi çağırın.",
        "buggyCode": "class Riyaziyyat {\n  static topla() {\n    return \"Statik cavab\";\n  }\n}\nconst r = new Riyaziyyat();\nconsole.log(r.topla());",
        "correctCode": "class Riyaziyyat {\n  static topla() {\n    return \"Statik cavab\";\n  }\n}\nconsole.log(Riyaziyyat.topla());",
        "correctOutput": "Statik cavab",
        "hint": "Statik metodlar birbaşa klasın adından çağırılır: Riyaziyyat.topla()",
        "explanation": "static metodlar nüsxənin (instance) prototipinə daxil edilmir."
      },
      {
        "id": "ep-12-5",
        "title": "Metod Daxilində this Unudulması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı klas metodunda 'ad' tək yazıldığı üçün ReferenceError baş verir. 'this.ad' ilə düzəldin.",
        "buggyCode": "class User {\n  constructor(ad) { this.ad = ad; }\n  salam() {\n    return `Salam, ${ad}`;\n  }\n}\nconst u = new User(\"Nigar\");\nconsole.log(u.salam());",
        "correctCode": "class User {\n  constructor(ad) { this.ad = ad; }\n  salam() {\n    return `Salam, ${this.ad}`;\n  }\n}\nconst u = new User(\"Nigar\");\nconsole.log(u.salam());",
        "correctOutput": "Salam, Nigar",
        "hint": "Klasın öz xassəsinə müraciət edərkən mütləq 'this.' açar sözündən istifadə edin.",
        "explanation": "Klas metodları daxilində xassələrə yalnız this vasitəsilə müraciət mümkündür."
      },
      {
        "id": "ep-12-6",
        "title": "super()-dən Əvvəl this İstifadəsi Xətası",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda super() çağırışından əvvəl this.il təyin edildiyi üçün ReferenceError verir. super() əmrini birinci sətrə keçirin.",
        "buggyCode": "class Avto {\n  constructor(marka) { this.marka = marka; }\n}\nclass Model extends Avto {\n  constructor(marka, il) {\n    this.il = il;\n    super(marka);\n  }\n}\nconst m = new Model(\"BMW\", 2024);\nconsole.log(m.marka + \" \" + m.il);",
        "correctCode": "class Avto {\n  constructor(marka) { this.marka = marka; }\n}\nclass Model extends Avto {\n  constructor(marka, il) {\n    super(marka);\n    this.il = il;\n  }\n}\nconst m = new Model(\"BMW\", 2024);\nconsole.log(m.marka + \" \" + m.il);",
        "correctOutput": "BMW 2024",
        "hint": "Törəmə klasda konstruktorun ən birinci əmri super(...) olmalıdır.",
        "explanation": "super() icra olunmamış this təyin oluna bilməz."
      },
      {
        "id": "ep-12-7",
        "title": "Klas Metodları Arasında Vergül Xətası",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı klas daxilində metodlar arasında vergül qoyulduğu üçün sintaksis xətası baş verir. Vergülü silin.",
        "buggyCode": "class Test {\n  bir() { return \"A\"; },\n  iki() { return \"B\"; }\n}\nconst t = new Test();\nconsole.log(t.bir() + \"\\n\" + t.iki());",
        "correctCode": "class Test {\n  bir() { return \"A\"; }\n  iki() { return \"B\"; }\n}\nconst t = new Test();\nconsole.log(t.bir() + \"\\n\" + t.iki());",
        "correctOutput": "A\nB",
        "hint": "Obyekt literallarından fərqli olaraq, klas daxilində metodların arasında vergül qoyulmur.",
        "explanation": "Klas gövdəsində metodlar vergülsüz yazılır."
      },
      {
        "id": "ep-12-8",
        "title": "Getter Metodunun Funksiya Kimi Çağırılması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda 'tamAd' get ilə təyin olunub və xassə kimi çağırılmalıdır, lakin mötərizə qoyulduğu üçün TypeError verir. Mötərizəni silin.",
        "buggyCode": "class User {\n  constructor(ad, soyad) { this.ad = ad; this.soyad = soyad; }\n  get tamAd() { return `${this.ad} ${this.soyad}`; }\n}\nconst u = new User(\"Murad\", \"Əliyev\");\nconsole.log(u.tamAd());",
        "correctCode": "class User {\n  constructor(ad, soyad) { this.ad = ad; this.soyad = soyad; }\n  get tamAd() { return `${this.ad} ${this.soyad}`; }\n}\nconst u = new User(\"Murad\", \"Əliyev\");\nconsole.log(u.tamAd);",
        "correctOutput": "Murad Əliyev",
        "hint": "get metodu xassə kimi mötərizəsiz çağırılır: u.tamAd",
        "explanation": "Getter metodları xassə sintaksisi ilə oxunur."
      },
      {
        "id": "ep-12-9",
        "title": "Valideyn Metodunun super.metod() ilə Çağırılması",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı törəmə klas valideynin melumat() nəticəsinin üzərinə ' + Əlavə' gəlməlidir, lakin super.melumat() əvəzinə this.melumat() yazılıb sonsuz rekursiya yaranır. super.melumat() ilə düzəldin.",
        "buggyCode": "class Esas {\n  melumat() { return \"Əsas\"; }\n}\nclass Elave extends Esas {\n  melumat() { return this.melumat() + \" + Əlavə\"; }\n}\nconst e = new Elave();\nconsole.log(e.melumat());",
        "correctCode": "class Esas {\n  melumat() { return \"Əsas\"; }\n}\nclass Elave extends Esas {\n  melumat() { return super.melumat() + \" + Əlavə\"; }\n}\nconst e = new Elave();\nconsole.log(e.melumat());",
        "correctOutput": "Əsas + Əlavə",
        "hint": "Valideyn klasın metodunu çağırmaq üçün 'super.melumat()' yazın.",
        "explanation": "Metod daxilində this.metod özünü çağıraraq sonsuz rekursiyaya səbəb olur."
      },
      {
        "id": "ep-12-10",
        "title": "Klas Konstruktorunda Qiymət Qaytarmamaq Qaydası",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı konstruktor daxilində 'return \"İşlədi\";' yazıldığı üçün yeni yaranan obyekt itirilir. Xassəni 'this.status = \"İşlədi\"' kimi mənimsədin.",
        "buggyCode": "class Test {\n  constructor() {\n    return \"İşlədi\";\n  }\n}\nconst t = new Test();\nconsole.log(t.status);",
        "correctCode": "class Test {\n  constructor() {\n    this.status = \"İşlədi\";\n  }\n}\nconst t = new Test();\nconsole.log(t.status);",
        "correctOutput": "İşlədi",
        "hint": "Konstruktordan primitiv dəyər return edilmir, xassələr this üzərində təyin olunur.",
        "explanation": "Konstruktor avtomatik olaraq yaranan obyekt nümunəsini (this) qaytarmalıdır."
      }
    ]
  },
  {
    "sectionId": "sec-13",
    "sectionTitle": "Bölmə 13: Asinxron JavaScript (Callbacks, Promises, async/await)",
    "icon": "⏳",
    "bugs": [
      {
        "id": "ep-13-1",
        "title": "Qeyri-async Funksiya Daxilində await İstifadəsi",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı funksiyanın daxilində await yazılıb, lakin funksiya async elan edilmədiyi üçün SyntaxError verir. Funksiyanın əvvəlinə 'async' əlavə edin.",
        "buggyCode": "function yukle() {\n  const data = await Promise.resolve(\"Hazırdır\");\n  console.log(data);\n}\nyukle();",
        "correctCode": "async function yukle() {\n  const data = await Promise.resolve(\"Hazırdır\");\n  console.log(data);\n}\nyukle();",
        "correctOutput": "Hazırdır",
        "hint": "await açar sözü yalnız 'async function' daxilində istifadə edilə bilər.",
        "explanation": "await sintaksisi yalnız asinxron funksiya kontekstində etibarlıdır."
      },
      {
        "id": "ep-13-2",
        "title": "Promise Nəticəsinin .then() Olmadan Oxunması",
        "difficulty": "Asan",
        "instruction": "Aşağıdakı kod Promise obyektinin nəticəsini gözləmədən birbaşa çap edir və '[object Promise]' çıxır. .then(data => console.log(data)) ilə düzəldin.",
        "buggyCode": "const soz = Promise.resolve(\"Məlumat\");\nconsole.log(soz);",
        "correctCode": "const soz = Promise.resolve(\"Məlumat\");\nsoz.then(data => console.log(data));",
        "correctOutput": "Məlumat",
        "hint": "Promise-in həll edilmiş nəticəsini almaq üçün .then() metodundan istifadə olunur.",
        "explanation": "Promise asinxron obyektdir və daxili dəyəri .then və ya await ilə əldə edilir."
      },
      {
        "id": "ep-13-3",
        "title": "setTimeout-a İcra Olunmuş Funksiyanın Ötürülməsi",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı kodda setTimeout-a funksiyanın özü deyil, icra nəticəsi fn() ötürülüb və dərhal işləyir. Onu callback kimi 'fn' olaraq ötürün.",
        "buggyCode": "function fn() {\n  console.log(\"10ms sonra\");\n}\nsetTimeout(fn(), 10);",
        "correctCode": "function fn() {\n  console.log(\"10ms sonra\");\n}\nsetTimeout(fn, 10);",
        "correctOutput": "10ms sonra",
        "hint": "setTimeout-a funksiyanı çağıraraq deyil, sadəcə adını (referansını) ötürün: setTimeout(fn, 10)",
        "explanation": "fn() yazıldıqda funksiya dərhal icra edilir və nəticəsi (undefined) taymerə verilir."
      },
      {
        "id": "ep-13-4",
        "title": "Promise Daxilində resolve Çağırışının Unudulması",
        "difficulty": "Orta-asan",
        "instruction": "Aşağıdakı Promise daxilində resolve() çağırılmadığı üçün Promise həmişə pending qalır və .then() heç vaxt işləmir. Daxildə resolve(\"Cavab\"); çağırın.",
        "buggyCode": "const p = new Promise((resolve) => {\n  let cavab = \"Cavab\";\n});\np.then(res => console.log(res));",
        "correctCode": "const p = new Promise((resolve) => {\n  let cavab = \"Cavab\";\n  resolve(cavab);\n});\np.then(res => console.log(res));",
        "correctOutput": "Cavab",
        "hint": "Promise-in tamamlanması və dəyər ötürməsi üçün resolve(dəyər) funksiyası çağırılmalıdır.",
        "explanation": "resolve çağırılmadıqda Promise heç vaxt yerinə yetirilmiş (fulfilled) vəziyyətə keçmir."
      },
      {
        "id": "ep-13-5",
        "title": "async Funksiyanın Həmişə Promise Qaytarması Tələsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı async funksiya 100 qaytarır, lakin birbaşa çağırıldıqda Promise qaytarır və x.then olmadan rəqəm görünmür. Çağırışı await ilə və ya .then() ilə oxuyun.",
        "buggyCode": "async function hesabla() {\n  return 100;\n}\nlet cavab = hesabla();\nconsole.log(cavab);",
        "correctCode": "async function hesabla() {\n  return 100;\n}\nhesabla().then(cavab => console.log(cavab));",
        "correctOutput": "100",
        "hint": "async funksiyanın nəticəsini oxumaq üçün hesabla().then(cavab => console.log(cavab)) yazın.",
        "explanation": "async funksiyalar adi dəyər return etsələr belə, həmişə Promise ilə bükülür."
      },
      {
        "id": "ep-13-6",
        "title": "Promise Reject Xətasının Tutulmaması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı kodda rədd edilmiş Promise-in xətası tutulmur və UnhandledPromiseRejection baş verir. .catch(err => console.log(err)) zəncirini əlavə edin.",
        "buggyCode": "Promise.reject(\"Xəta tutuldu\")\n  .then(res => console.log(res));",
        "correctCode": "Promise.reject(\"Xəta tutuldu\")\n  .catch(err => console.log(err));",
        "correctOutput": "Xəta tutuldu",
        "hint": "Promise xətalarını idarə etmək üçün .catch(...) metodundan istifadə edin.",
        "explanation": "Rədd edilmiş (rejected) Promise mütləq .catch ilə emal olunmalıdır."
      },
      {
        "id": "ep-13-7",
        "title": "Asinxron Dəyərin await Edilməməsi",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı async funksiya içərisində 'soz' Promise-i await edilmədiyi üçün obyekt çap olunur. 'const netice = await soz;' yazın.",
        "buggyCode": "async function test() {\n  const soz = Promise.resolve(\"Tamamlandı\");\n  const netice = soz;\n  console.log(netice);\n}\ntest();",
        "correctCode": "async function test() {\n  const soz = Promise.resolve(\"Tamamlandı\");\n  const netice = await soz;\n  console.log(netice);\n}\ntest();",
        "correctOutput": "Tamamlandı",
        "hint": "Promise-in həll olunmuş qiymətini birbaşa dəyişənə almaq üçün qarşısına 'await' yazın.",
        "explanation": "await Promise-in tamamlanmasını gözləyir və onun qiymətini çıxarır."
      },
      {
        "id": "ep-13-8",
        "title": "async/await Daxilində try...catch Unudulması",
        "difficulty": "Orta-çətin",
        "instruction": "Aşağıdakı async funksiyada rədd edilmiş Promise xətaya səbəb olur. await əməliyyatını try...catch daxilinə alın və catch-də 'Xəta: ' + e çap edin.",
        "buggyCode": "async function test() {\n  const x = await Promise.reject(\"Rədd edildi\");\n  console.log(x);\n}\ntest();",
        "correctCode": "async function test() {\n  try {\n    const x = await Promise.reject(\"Rədd edildi\");\n  } catch (e) {\n    console.log(\"Xəta: \" + e);\n  }\n}\ntest();",
        "correctOutput": "Xəta: Rədd edildi",
        "hint": "async/await daxilində xətaları tutmaq üçün try { await ... } catch (e) { ... } istifadə edin.",
        "explanation": "await ilə gözlənilən Promise reject edildikdə istisna (exception) atır və try...catch ilə tutulmalıdır."
      },
      {
        "id": "ep-13-9",
        "title": "Çoxlu Promise-lərin Promise.all() ilə İdarəsi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kod iki Promise-i eyni anda həll edib ['A', 'B'] massivi almalıdır, lakin sintaksis səhvdir. 'await Promise.all([p1, p2])' istifadə edin.",
        "buggyCode": "async function test() {\n  const p1 = Promise.resolve(\"A\");\n  const p2 = Promise.resolve(\"B\");\n  const res = await [p1, p2];\n  console.log(res);\n}\ntest();",
        "correctCode": "async function test() {\n  const p1 = Promise.resolve(\"A\");\n  const p2 = Promise.resolve(\"B\");\n  const res = await Promise.all([p1, p2]);\n  console.log(res);\n}\ntest();",
        "correctOutput": "[\n  \"A\",\n  \"B\"\n]",
        "hint": "Bir neçə Promise-in eyni vaxtda tamamlanmasını gözləmək üçün Promise.all([p1, p2]) metodundan istifadə edin.",
        "explanation": "Adi massiv await edildikdə daxilindəki Promise-ləri avtomatik həll etmir, Promise.all tələb olunur."
      },
      {
        "id": "ep-13-10",
        "title": "forEach Daxilində await İşləməməsi Səhvi",
        "difficulty": "Çətin",
        "instruction": "Aşağıdakı kodda forEach daxilində async/await yazıldığı üçün dövr elementləri gözləmir və 'Bitdi' ən əvvəl çıxır. forEach əvəzinə ardıcıl 'for (const x of arr)' dövrü ilə await edin.",
        "buggyCode": "async function test() {\n  const arr = [1, 2];\n  arr.forEach(async (x) => {\n    await Promise.resolve();\n    console.log(x);\n  });\n  console.log(\"Bitdi\");\n}\ntest();",
        "correctCode": "async function test() {\n  const arr = [1, 2];\n  for (const x of arr) {\n    await Promise.resolve();\n    console.log(x);\n  }\n  console.log(\"Bitdi\");\n}\ntest();",
        "correctOutput": "1\n2\nBitdi",
        "hint": "Asinxron əməliyyatları ardıcıl gözləmək üçün forEach deyil, for...of dövründən istifadə olunmalıdır.",
        "explanation": "Array.prototype.forEach callback-lərin qaytardığı Promise-ləri gözləmir."
      }
    ]
  },
  {
    "sectionId": "sec-14",
    "bolmeId": 14,
    "icon": "🌐",
    "sectionTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
    "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
    "bugs": [
      {
        "id": "bug-sec14-01",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "querySelector ilə ID Selektorunun Seçilməsi Xətası",
        "title": "querySelector ilə ID Selektorunun Seçilməsi Xətası",
        "tesvir": "Proqramçı 'status-qutusu' identifikatorlu elementin mətnini oxumaq istəyir, lakin konsolda 'TypeError: Cannot read properties of null' xətası baş verir və icra dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Proqramçı 'status-qutusu' identifikatorlu elementin mətnini oxumaq istəyir, lakin konsolda 'TypeError: Cannot read properties of null' xətası baş verir və icra dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const qutu = document.createElement(\"div\");\nqutu.id = \"status-qutusu\";\nqutu.textContent = \"Sistem Aktivdir\";\ndocument.body.appendChild(qutu);\n\n// XƏTA: querySelector ilə ID axtarışı zamanı selektor xətası\nconst element = document.querySelector(\"status-qutusu\");\nconsole.log(\"Status:\", element.textContent);",
        "correctCode": "const qutu = document.createElement(\"div\");\nqutu.id = \"status-qutusu\";\nqutu.textContent = \"Sistem Aktivdir\";\ndocument.body.appendChild(qutu);\n\nconst element = document.querySelector(\"#status-qutusu\");\nconsole.log(\"Status:\", element.textContent);",
        "expectedOutput": "Status: Sistem Aktivdir",
        "correctOutput": "Status: Sistem Aktivdir",
        "ipuclari": [
          "1-ci ipucu: querySelector CSS selektor qaydaları ilə işləyir. ID seçicilərinin əvvəlində hansı xüsusi simvol olmalıdır?",
          "2-ci ipucu: getElementById-dən fərqli olaraq, querySelector parametrində ID üçün '#' prefiksi mütləq yazılmalıdır."
        ],
        "hint": "querySelector CSS selektor qaydaları ilə işləyir. ID seçicilərinin əvvəlində '#' prefiksini yoxlayın.",
        "izah": "document.querySelector metodu CSS selektor sintaksisi tələb edir. Tag deyil, ID seçərkən adın qarşısına '#' qoyulmadıqda element tapılmır və null qayıdır.",
        "explanation": "document.querySelector metodu CSS selektor sintaksisi tələb edir. Tag deyil, ID seçərkən adın qarşısına '#' qoyulmadıqda element tapılmır və null qayıdır."
      },
      {
        "id": "bug-sec14-02",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "NodeList Üzərində Birbaşa Massiv Metodunun Çağırılması",
        "title": "NodeList Üzərində Birbaşa Massiv Metodunun Çağırılması",
        "tesvir": "Bütün menyu elementlərinin mətnini massiv şəklində əldə etmək nəzərdə tutulub, lakin icra zamanı 'TypeError: ...map is not a function' xətası qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Bütün menyu elementlərinin mətnini massiv şəklində əldə etmək nəzərdə tutulub, lakin icra zamanı 'TypeError: ...map is not a function' xətası qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const li1 = document.createElement(\"li\"); li1.className = \"bend\"; li1.textContent = \"Ana Səhifə\";\nconst li2 = document.createElement(\"li\"); li2.className = \"bend\"; li2.textContent = \"Dərslər\";\nconst menu = document.createElement(\"ul\");\nmenu.appendChild(li1); menu.appendChild(li2);\ndocument.body.appendChild(menu);\n\n// XƏTA: querySelectorAll NodeList qaytarır, birbaşa .map mövcud deyil\nconst elementler = menu.querySelectorAll(\".bend\");\nconst basliqlar = elementler.map(el => el.textContent);\nconsole.log(\"Bəndlər:\", basliqlar.join(\", \"));",
        "correctCode": "const li1 = document.createElement(\"li\"); li1.className = \"bend\"; li1.textContent = \"Ana Səhifə\";\nconst li2 = document.createElement(\"li\"); li2.className = \"bend\"; li2.textContent = \"Dərslər\";\nconst menu = document.createElement(\"ul\");\nmenu.appendChild(li1); menu.appendChild(li2);\ndocument.body.appendChild(menu);\n\nconst elementler = Array.from(menu.querySelectorAll(\".bend\"));\nconst basliqlar = elementler.map(el => el.textContent);\nconsole.log(\"Bəndlər:\", basliqlar.join(\", \"));",
        "expectedOutput": "Bəndlər: Ana Səhifə, Dərslər",
        "correctOutput": "Bəndlər: Ana Səhifə, Dərslər",
        "ipuclari": [
          "1-ci ipucu: querySelectorAll tərəfindən qaytarılan kolleksiya həqiqi JavaScript massivi deyil, NodeList obyektidir.",
          "2-ci ipucu: NodeList-i həqiqi massivə çevirmək üçün Array.from() metodundan və ya yayılma (...spread) operatorundan istifadə edin."
        ],
        "hint": "NodeList üzərində .map çağırmazdan əvvəl Array.from() ilə onu massivə çevirin.",
        "izah": "querySelectorAll metodu NodeList qaytarır. NodeList forEach dəstəkləsə də, Array.prototype üzərindəki map, filter, reduce kimi metodlara malik deyil. Array.from() onu massivə çevirir.",
        "explanation": "querySelectorAll metodu NodeList qaytarır. NodeList forEach dəstəkləsə də, Array.prototype üzərindəki map, filter, reduce kimi metodlara malik deyil. Array.from() onu massivə çevirir."
      },
      {
        "id": "bug-sec14-03",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "classList.remove ilə Sinif Adında Nöqtə İstifadəsi Xətası",
        "title": "classList.remove ilə Sinif Adında Nöqtə İstifadəsi Xətası",
        "tesvir": "Elementdən aktiv sinfinin silinərək 'Rejim: Deaktiv' statusunun əks olunması gözlənilir, lakin sinif silinmir və rejim dəyişməz qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Elementdən aktiv sinfinin silinərək 'Rejim: Deaktiv' statusunun əks olunması gözlənilir, lakin sinif silinmir və rejim dəyişməz qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const panel = document.createElement(\"div\");\npanel.className = \"kart aktiv\";\n\n// XƏTA: classList metodlarında sinif adı nöqtə ilə yazılmır\npanel.classList.remove(\".aktiv\");\n\nconst status = panel.classList.contains(\"aktiv\") ? \"Aktiv\" : \"Deaktiv\";\nconsole.log(\"Rejim:\", status);",
        "correctCode": "const panel = document.createElement(\"div\");\npanel.className = \"kart aktiv\";\n\npanel.classList.remove(\"aktiv\");\n\nconst status = panel.classList.contains(\"aktiv\") ? \"Aktiv\" : \"Deaktiv\";\nconsole.log(\"Rejim:\", status);",
        "expectedOutput": "Rejim: Deaktiv",
        "correctOutput": "Rejim: Deaktiv",
        "ipuclari": [
          "1-ci ipucu: classList metodları (add, remove, contains, toggle) CSS selektoru qəbul etmir, birbaşa sinif adını gözləyir.",
          "2-ci ipucu: Sinif adının əvvəlindəki nöqtəni (.) silin."
        ],
        "hint": "classList.remove metoduna sinif adını nöqtəsiz ('aktiv') daxil edin.",
        "izah": "classList API-si bilavasitə sinif identifikatorları ilə işləyir. Parametrdə nöqtə yazıldıqda (.aktiv) brauzer bunu hərfi simvol kimi qəbul edir və '.aktiv' adlı sinif tapılmadığından əməliyyat nəticəsiz qalır.",
        "explanation": "classList API-si bilavasitə sinif identifikatorları ilə işləyir. Parametrdə nöqtə yazıldıqda (.aktiv) brauzer bunu hərfi simvol kimi qəbul edir və '.aktiv' adlı sinif tapılmadığından əməliyyat nəticəsiz qalır."
      },
      {
        "id": "bug-sec14-04",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "setAttribute Metodunda Arqumentlərin Yerinin Dəyişik Düşməsi",
        "title": "setAttribute Metodunda Arqumentlərin Yerinin Dəyişik Düşməsi",
        "tesvir": "Elementə 'elan-kart' identifikatoru verilməlidir, lakin konsolda 'Element ID: boş' çıxışı yaranır və təyin olunmuş ID oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Elementə 'elan-kart' identifikatoru verilməlidir, lakin konsolda 'Element ID: boş' çıxışı yaranır və təyin olunmuş ID oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const qutu = document.createElement(\"div\");\n\n// XƏTA: setAttribute(ad, dəyər) parametrlərinin sırası tərsinə yazılıb\nqutu.setAttribute(\"elan-kart\", \"id\");\n\nconsole.log(\"Element ID:\", qutu.id || \"boş\");",
        "correctCode": "const qutu = document.createElement(\"div\");\n\nqutu.setAttribute(\"id\", \"elan-kart\");\n\nconsole.log(\"Element ID:\", qutu.id || \"boş\");",
        "expectedOutput": "Element ID: elan-kart",
        "correctOutput": "Element ID: elan-kart",
        "ipuclari": [
          "1-ci ipucu: Element.setAttribute() metodunun qəbul etdiyi ilk və ikinci arqumentlərin təyinatını xatırlayın.",
          "2-ci ipucu: İlk arqument atributun adı ('id'), ikinci arqument isə ona verilən dəyər ('elan-kart') olmalıdır."
        ],
        "hint": "setAttribute metodunda 1-ci parametr atribut adı ('id'), 2-ci parametr isə dəyərdir.",
        "izah": "setAttribute(name, value) funksiyasında birinci parametr atributun adı, ikinci isə mənimsədiləcək qiymətdir. Arqumentlər tərsinə verildikdə 'elan-kart' adlı qeyri-standart atribut yaradılır və id boş qalır.",
        "explanation": "setAttribute(name, value) funksiyasında birinci parametr atributun adı, ikinci isə mənimsədiləcək qiymətdir. Arqumentlər tərsinə verildikdə 'elan-kart' adlı qeyri-standart atribut yaradılır və id boş qalır."
      },
      {
        "id": "bug-sec14-05",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "HTML Strukturunun textContent ilə Xam Mətn Kimi Daxil Edilməsi",
        "title": "HTML Strukturunun textContent ilə Xam Mətn Kimi Daxil Edilməsi",
        "tesvir": "Məzmun sahəsinə 'span' daxilində vurğulanmış mətn əlavə edilməlidir, lakin teq brauzerdə HTML elementi kimi render olunmur və uşaq elementlərin sayı 0 qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məzmun sahəsinə 'span' daxilində vurğulanmış mətn əlavə edilməlidir, lakin teq brauzerdə HTML elementi kimi render olunmur və uşaq elementlərin sayı 0 qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const konteyner = document.createElement(\"div\");\n\n// XƏTA: HTML teqləri textContent ilə daxil edildikdə xam mətn kimi qəbul olunur\nkonteyner.textContent = \"<span class='vurgu'>Diqqət</span>\";\n\nconst spanVar = konteyner.children.length > 0;\nconsole.log(\"HTML teqi yaradıldı:\", spanVar ? \"Bəli\" : \"Xeyr\");",
        "correctCode": "const konteyner = document.createElement(\"div\");\n\nkonteyner.innerHTML = \"<span class='vurgu'>Diqqət</span>\";\n\nconst spanVar = konteyner.children.length > 0;\nconsole.log(\"HTML teqi yaradıldı:\", spanVar ? \"Bəli\" : \"Xeyr\");",
        "expectedOutput": "HTML teqi yaradıldı: Bəli",
        "correctOutput": "HTML teqi yaradıldı: Bəli",
        "ipuclari": [
          "1-ci ipucu: textContent mətndəki hər hansı HTML simvollarını xam mətn kimi ekranlaşdırır.",
          "2-ci ipucu: HTML teqlərinin pars olunub DOM elementinə çevrilməsi üçün innerHTML xüsusiyyətindən istifadə edilməlidir."
        ],
        "hint": "HTML strukturunu pars etmək üçün textContent əvəzinə innerHTML yazın.",
        "izah": "textContent xüsusiyyəti daxil edilən simvolları sırf mətn kimi qəbul edir və HTML teqlərini pars etmir. DOM elementlərinin dinamik generasiyası üçün innerHTML istifadə edilməlidir.",
        "explanation": "textContent xüsusiyyəti daxil edilən simvolları sırf mətn kimi qəbul edir və HTML teqlərini pars etmir. DOM elementlərinin dinamik generasiyası üçün innerHTML istifadə edilməlidir."
      },
      {
        "id": "bug-sec14-06",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "appendChild ilə Elementin Nüsxələnməsi Əvəzinə Köçürülməsi",
        "title": "appendChild ilə Elementin Nüsxələnməsi Əvəzinə Köçürülməsi",
        "tesvir": "Eyni nişanın həm sol, həm də sağ paneldə əks olunması tələb olunur, lakin sol paneldəki element yoxa çıxır və 'Sol panel boşdur' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Eyni nişanın həm sol, həm də sağ paneldə əks olunması tələb olunur, lakin sol paneldəki element yoxa çıxır və 'Sol panel boşdur' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const solPanel = document.createElement(\"div\");\nconst sagPanel = document.createElement(\"div\");\n\nconst nisan = document.createElement(\"span\");\nnisan.textContent = \"Yeni\";\n\nsolPanel.appendChild(nisan);\n// XƏTA: Mövcud DOM elementi başqa yerə appendChild edildikdə nüsxələnmir, yerini dəyişir\nsagPanel.appendChild(nisan);\n\nconsole.log(\"Sol panel sayı:\", solPanel.children.length);\nconsole.log(\"Sağ panel sayı:\", sagPanel.children.length);",
        "correctCode": "const solPanel = document.createElement(\"div\");\nconst sagPanel = document.createElement(\"div\");\n\nconst nisan = document.createElement(\"span\");\nnisan.textContent = \"Yeni\";\n\nsolPanel.appendChild(nisan);\nsagPanel.appendChild(nisan.cloneNode(true));\n\nconsole.log(\"Sol panel sayı:\", solPanel.children.length);\nconsole.log(\"Sağ panel sayı:\", sagPanel.children.length);",
        "expectedOutput": "Sol panel sayı: 1\nSağ panel sayı: 1",
        "correctOutput": "Sol panel sayı: 1\nSağ panel sayı: 1",
        "ipuclari": [
          "1-ci ipucu: DOM-da hər hansı element eyni zamanda yalnız bir valideynə aid ola bilər.",
          "2-ci ipucu: İkinci panelə elementi əlavə edərkən nisan.cloneNode(true) ilə onun müstəqil nüsxəsini yaradın."
        ],
        "hint": "Elementi hər iki paneldə saxlamaq üçün cloneNode(true) ilə nüsxələyib əlavə edin.",
        "izah": "Node.appendChild() metodu mövcud qovşağı yeni valideynə daxil etdikdə onu köhnə yerindən avtomatik çıxarır (yerini dəyişir). İki fərqli yerdə eyni görünüş üçün cloneNode(true) vasitəsilə klonlama aparılmalıdır.",
        "explanation": "Node.appendChild() metodu mövcud qovşağı yeni valideynə daxil etdikdə onu köhnə yerindən avtomatik çıxarır (yerini dəyişir). İki fərqli yerdə eyni görünüş üçün cloneNode(true) vasitəsilə klonlama aparılmalıdır."
      },
      {
        "id": "bug-sec14-07",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "dataset Xüsusiyyətində Kebab-Case Adlandırma Səhvi",
        "title": "dataset Xüsusiyyətində Kebab-Case Adlandırma Səhvi",
        "tesvir": "'data-user-id' atributunun dəyəri oxunaraq konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'İstifadəçi ID: undefined' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "'data-user-id' atributunun dəyəri oxunaraq konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'İstifadəçi ID: undefined' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kart = document.createElement(\"div\");\nkart.dataset.userId = \"987\";\n\n// XƏTA: dataset obyekti daxilində data-* atributları camelCase şəklində saxlanılır\nconst oxunanId = kart.dataset[\"user-id\"];\nconsole.log(\"İstifadəçi ID:\", oxunanId);",
        "correctCode": "const kart = document.createElement(\"div\");\nkart.dataset.userId = \"987\";\n\nconst oxunanId = kart.dataset.userId;\nconsole.log(\"İstifadəçi ID:\", oxunanId);",
        "expectedOutput": "İstifadəçi ID: 987",
        "correctOutput": "İstifadəçi ID: 987",
        "ipuclari": [
          "1-ci ipucu: HTML-dəki 'data-user-id' atributu JavaScript HTMLElement.dataset obyektinə xüsusi konversiya qaydası ilə ötürülür.",
          "2-ci ipucu: Defislə ayrılmış adlar dataset daxilində camelCase formatına çevrilir (userId)."
        ],
        "hint": "dataset daxilində kebab-case deyil, camelCase (userId) istifadə olunmalıdır.",
        "izah": "Brauzer data-* atributlarını dataset obyektinə köçürərkən bütün defisləri silir və sonrakı hərfləri böyük hərflə əvəzləyir (camelCase). Buna görə də kart.dataset.userId istifadə edilməlidir.",
        "explanation": "Brauzer data-* atributlarını dataset obyektinə köçürərkən bütün defisləri silir və sonrakı hərfləri böyük hərflə əvəzləyir (camelCase). Buna görə də kart.dataset.userId istifadə edilməlidir."
      },
      {
        "id": "bug-sec14-08",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "createElement Parametrində Bucaq Mötərizələrin İstifadəsi",
        "title": "createElement Parametrində Bucaq Mötərizələrin İstifadəsi",
        "tesvir": "Sənəddə yeni düymə yaradılmalıdır, lakin yaranan qovşağın teq adı standart 'BUTTON' ilə uyğun gəlmir və yoxlama uğursuz olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Sənəddə yeni düymə yaradılmalıdır, lakin yaranan qovşağın teq adı standart 'BUTTON' ilə uyğun gəlmir və yoxlama uğursuz olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// XƏTA: createElement arqumenti kimi HTML teq simvolları yazılmır\nconst btn = document.createElement(\"<button>\");\nbtn.textContent = \"Təsdiqlə\";\n\nconsole.log(\"Teq adı:\", btn.tagName);",
        "correctCode": "const btn = document.createElement(\"button\");\nbtn.textContent = \"Təsdiqlə\";\n\nconsole.log(\"Teq adı:\", btn.tagName);",
        "expectedOutput": "Teq adı: BUTTON",
        "correctOutput": "Teq adı: BUTTON",
        "ipuclari": [
          "1-ci ipucu: document.createElement metodu HTML stringi yox, sırf teqin adını (məsələn, 'div', 'p', 'button') qəbul edir.",
          "2-ci ipucu: Bucaq mötərizələrini (< və >) parametr daxilindən silin."
        ],
        "hint": "createElement metoduna arqument olaraq yalnız teqin adını ('button') ötürün.",
        "izah": "document.createElement(tagName) metodu arqument olaraq sırf teqin adını sətir kimi qəbul edir. '<button>' yazıldıqda sintaktik olaraq etibarsız element yaranır.",
        "explanation": "document.createElement(tagName) metodu arqument olaraq sırf teqin adını sətir kimi qəbul edir. '<button>' yazıldıqda sintaktik olaraq etibarsız element yaranır."
      },
      {
        "id": "bug-sec14-09",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "cloneNode ilə Dərin Klonlama Bayrağının Buraxılması",
        "title": "cloneNode ilə Dərin Klonlama Bayrağının Buraxılması",
        "tesvir": "Məhsul kartı klonlanaraq səbətə əlavə edilməlidir, lakin klonun daxili başlığı və mətni kopyalanmır və 'Klon mətni: (Boş)' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsul kartı klonlanaraq səbətə əlavə edilməlidir, lakin klonun daxili başlığı və mətni kopyalanmır və 'Klon mətni: (Boş)' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kart = document.createElement(\"div\");\nkart.className = \"mehsul-kart\";\nconst basliq = document.createElement(\"h4\");\nbasliq.textContent = \"Smartfon\";\nkart.appendChild(basliq);\n\n// XƏTA: cloneNode() arqumentsiz çağırıldıqda dərin klonlama aparılmır\nconst nusxe = kart.cloneNode();\nconsole.log(\"Klon mətni:\", nusxe.textContent || \"(Boş)\");",
        "correctCode": "const kart = document.createElement(\"div\");\nkart.className = \"mehsul-kart\";\nconst basliq = document.createElement(\"h4\");\nbasliq.textContent = \"Smartfon\";\nkart.appendChild(basliq);\n\nconst nusxe = kart.cloneNode(true);\nconsole.log(\"Klon mətni:\", nusxe.textContent || \"(Boş)\");",
        "expectedOutput": "Klon mətni: Smartfon",
        "correctOutput": "Klon mətni: Smartfon",
        "ipuclari": [
          "1-ci ipucu: cloneNode() funksiyası standart olaraq daxili uşaq elementləri və mətn qovşaqlarını nüsxələmir.",
          "2-ci ipucu: Bütün alt elementlərin birgə dərin kopyalanması üçün cloneNode(true) ötürülməlidir."
        ],
        "hint": "Alt elementləri və mətnləri ilə birlikdə kopyalamaq üçün cloneNode(true) yazılmalıdır.",
        "izah": "Node.prototype.cloneNode(deep) metodu deep=false olduqda yalnız qovşağın özünü klonlayır. Bütün daxili strukturu kopyalamaq üçün arqument kimi 'true' ötürülməlidir.",
        "explanation": "Node.prototype.cloneNode(deep) metodu deep=false olduqda yalnız qovşağın özünü klonlayır. Bütün daxili strukturu kopyalamaq üçün arqument kimi 'true' ötürülməlidir."
      },
      {
        "id": "bug-sec14-10",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "closest() Metodunda Səhv Valideyn Selektorunun Axtarışı",
        "title": "closest() Metodunda Səhv Valideyn Selektorunun Axtarışı",
        "tesvir": "İç-içə yerləşən simgədən əsas 'kart-konteyner' valideynini tapmaq tələb olunur, lakin selektor xətasına görə 'null' qayıdır və 'Valideyn tapılmadı' çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İç-içə yerləşən simgədən əsas 'kart-konteyner' valideynini tapmaq tələb olunur, lakin selektor xətasına görə 'null' qayıdır və 'Valideyn tapılmadı' çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const konteyner = document.createElement(\"div\");\nkonteyner.className = \"kart-konteyner\";\nconst duyme = document.createElement(\"button\");\nconst simge = document.createElement(\"span\");\nduyme.appendChild(simge);\nkonteyner.appendChild(duyme);\n\n// XƏTA: sinif axtararkən CSS nöqtə prefiksi unudulub\nconst tapilan = simge.closest(\"kart-konteyner\");\nconsole.log(\"Nəticə:\", tapilan ? \"Uğurlu\" : \"Valideyn tapılmadı\");",
        "correctCode": "const konteyner = document.createElement(\"div\");\nkonteyner.className = \"kart-konteyner\";\nconst duyme = document.createElement(\"button\");\nconst simge = document.createElement(\"span\");\nduyme.appendChild(simge);\nkonteyner.appendChild(duyme);\n\nconst tapilan = simge.closest(\".kart-konteyner\");\nconsole.log(\"Nəticə:\", tapilan ? \"Uğurlu\" : \"Valideyn tapılmadı\");",
        "expectedOutput": "Nəticə: Uğurlu",
        "correctOutput": "Nəticə: Uğurlu",
        "ipuclari": [
          "1-ci ipucu: closest() metodu CSS selektoru qəbul edir.",
          "2-ci ipucu: Sinif adını axtararkən qarşısına mütləq '.' nöqtə işarəsi qoyulmalıdır: closest('.kart-konteyner')."
        ],
        "hint": "closest() metodu CSS selektoru ilə işləyir. Sinif axtararkən nöqtə qoymağı unutmayın.",
        "izah": "closest() metodu DOM iyerarxiyasında yuxarıya doğru CSS selektoruna uyğun ilk əcdadı axtarır. Nöqtə qoyulmadıqda onu HTML teqi kimi axtarır və tapa bilmir.",
        "explanation": "closest() metodu DOM iyerarxiyasında yuxarıya doğru CSS selektoruna uyğun ilk əcdadı axtarır. Nöqtə qoyulmadıqda onu HTML teqi kimi axtarır və tapa bilmir."
      }
    ]
  },
  {
    "sectionId": "sec-15",
    "bolmeId": 15,
    "icon": "⚡",
    "sectionTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
    "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
    "bugs": [
      {
        "id": "bug-sec15-01",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "addEventListener Daxilində Callback-in Birbaşa Çağırılması",
        "title": "addEventListener Daxilində Callback-in Birbaşa Çağırılması",
        "tesvir": "Düymə klikləndikdə qeydiyyat mesajının konsola çıxması gözlənilir, lakin hadisə dinləyicisi qoşularkən funksiya dərhal icra olunur və sonrakı kliklərdə heç nə baş vermir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Düymə klikləndikdə qeydiyyat mesajının konsola çıxması gözlənilir, lakin hadisə dinləyicisi qoşularkən funksiya dərhal icra olunur və sonrakı kliklərdə heç nə baş vermir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const btn = document.createElement(\"button\");\nlet saygac = 0;\n\nfunction klikle() {\n  saygac++;\n}\n\n// XƏTA: Funksiyanın referansı deyil, çağırışı () ötürülüb\nbtn.addEventListener(\"click\", klikle());\n\nbtn.click();\nbtn.click();\nconsole.log(\"Klik sayı:\", saygac);",
        "correctCode": "const btn = document.createElement(\"button\");\nlet saygac = 0;\n\nfunction klikle() {\n  saygac++;\n}\n\nbtn.addEventListener(\"click\", klikle);\n\nbtn.click();\nbtn.click();\nconsole.log(\"Klik sayı:\", saygac);",
        "expectedOutput": "Klik sayı: 2",
        "correctOutput": "Klik sayı: 2",
        "ipuclari": [
          "1-ci ipucu: addEventListener metodunun 2-ci arqumenti funksiyanın nəticəsi deyil, funksiyanın öz referansı olmalıdır.",
          "2-ci ipucu: Funksiya adının sonundakı mötərizələri () yığışdırın."
        ],
        "hint": "addEventListener-ə funksiyanı çağırıb nəticəsini deyil, birbaşa referansını ötürün.",
        "izah": "addEventListener funksiyanın referansını gözləyir. klilke() yazıldıqda funksiya kod təyin olunan anda dərhal icra olunur və addEventListener-ə undefined ötürülür.",
        "explanation": "addEventListener funksiyanın referansını gözləyir. klilke() yazıldıqda funksiya kod təyin olunan anda dərhal icra olunur və addEventListener-ə undefined ötürülür."
      },
      {
        "id": "bug-sec15-02",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "removeEventListener ilə Anonim Funksiyanın Silinməsi Cəhdi",
        "title": "removeEventListener ilə Anonim Funksiyanın Silinməsi Cəhdi",
        "tesvir": "Müəyyən əməliyyatdan sonra dinləyici ləğv edilməli və sayğac 1-də qalmalıdır, lakin dinləyici silinmir və sonrakı klikdə sayğac 2-yə yüksəlir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Müəyyən əməliyyatdan sonra dinləyici ləğv edilməli və sayğac 1-də qalmalıdır, lakin dinləyici silinmir və sonrakı klikdə sayğac 2-yə yüksəlir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const btn = document.createElement(\"button\");\nlet xal = 0;\n\n// XƏTA: Anonim funksiyalar yaddaşda fərqli referanslara malikdir\nbtn.addEventListener(\"click\", () => { xal++; });\nbtn.click();\n\nbtn.removeEventListener(\"click\", () => { xal++; });\nbtn.click();\n\nconsole.log(\"Yekun xal:\", xal);",
        "correctCode": "const btn = document.createElement(\"button\");\nlet xal = 0;\n\nconst handler = () => { xal++; };\nbtn.addEventListener(\"click\", handler);\nbtn.click();\n\nbtn.removeEventListener(\"click\", handler);\nbtn.click();\n\nconsole.log(\"Yekun xal:\", xal);",
        "expectedOutput": "Yekun xal: 1",
        "correctOutput": "Yekun xal: 1",
        "ipuclari": [
          "1-ci ipucu: removeEventListener yalnız addEventListener-ə ötürülmüş eyni yaddaş ünvanlı funksiya referansını qəbul etdikdə işləyir.",
          "2-ci ipucu: Callback funksiyasını ayrıca dəyişəndə saxlayın və hər iki metoda həmin dəyişəni ötürün."
        ],
        "hint": "Eyni funksiya referansını dəyişəndə saxlayıb həm add, həm də remove metoduna ötürün.",
        "izah": "JavaScript-də iki fərqli anonim funksiya mətni eyni olsa belə fərqli obyekt referanslarıdır. removeEventListener dinləyicini tanıya bilmir və silmə baş vermir.",
        "explanation": "JavaScript-də iki fərqli anonim funksiya mətni eyni olsa belə fərqli obyekt referanslarıdır. removeEventListener dinləyicini tanıya bilmir və silmə baş vermir."
      },
      {
        "id": "bug-sec15-03",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Hadisə Nümayəndəliyində (Delegation) e.target vs closest() Xətası",
        "title": "Hadisə Nümayəndəliyində (Delegation) e.target vs closest() Xətası",
        "tesvir": "Siyahıdakı bənd klikləndikdə bəndin 'data-id' atributu oxunmalıdır, lakin daxili teq klikləndikdə 'Seçildi: undefined' çıxışı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Siyahıdakı bənd klikləndikdə bəndin 'data-id' atributu oxunmalıdır, lakin daxili teq klikləndikdə 'Seçildi: undefined' çıxışı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const ul = document.createElement(\"ul\");\nconst li = document.createElement(\"li\");\nli.dataset.id = \"45\";\nconst span = document.createElement(\"span\");\nspan.textContent = \"Məhsul Detalı\";\nli.appendChild(span);\nul.appendChild(li);\n\nlet secilmisId = null;\nul.addEventListener(\"click\", (e) => {\n  // XƏTA: Birbaşa e.target daxili span elementi ola bilər və dataset.id-yə malik deyil\n  secilmisId = e.target.dataset.id;\n});\n\n// Simulyasiya: daxili span kliklənir\nspan.click();\nconsole.log(\"Seçildi:\", secilmisId);",
        "correctCode": "const ul = document.createElement(\"ul\");\nconst li = document.createElement(\"li\");\nli.dataset.id = \"45\";\nconst span = document.createElement(\"span\");\nspan.textContent = \"Məhsul Detalı\";\nli.appendChild(span);\nul.appendChild(li);\n\nlet secilmisId = null;\nul.addEventListener(\"click\", (e) => {\n  const item = e.target.closest(\"li\");\n  secilmisId = item ? item.dataset.id : null;\n});\n\nspan.click();\nconsole.log(\"Seçildi:\", secilmisId);",
        "expectedOutput": "Seçildi: 45",
        "correctOutput": "Seçildi: 45",
        "ipuclari": [
          "1-ci ipucu: Event delegation zamanı e.target həmişə hədəflənən valideyn deyil, bilavasitə kliklənən ən daxili uşaq elementi göstərir.",
          "2-ci ipucu: e.target.closest('li') istifadə edərək ən yaxın li valideynini tapın və onun dataset.id-sini oxuyun."
        ],
        "hint": "e.target yerinə e.target.closest('li') vasitəsilə lazımi elementi tapın.",
        "izah": "Event delegation-da kliklənən element uşaq teq (məsələn, <span> və ya <i>) olduqda e.target həmin uşağı təmsil edir. dataset valideyn <li>-də olduğu üçün closest('li') vasitəsilə əcdada müraciət edilməlidir.",
        "explanation": "Event delegation-da kliklənən element uşaq teq (məsələn, <span> və ya <i>) olduqda e.target həmin uşağı təmsil edir. dataset valideyn <li>-də olduğu üçün closest('li') vasitəsilə əcdada müraciət edilməlidir."
      },
      {
        "id": "bug-sec15-04",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Form Göndərilməsində preventDefault() Unudulması",
        "title": "Form Göndərilməsində preventDefault() Unudulması",
        "tesvir": "İstifadəçi formu təsdiqlədikdə səhifə yenilənmədən AJAX göndərişi icra olunmalıdır, lakin standart davranış dayandırılmadığı üçün yoxlama bayrağı 'Standart rejim aktivdir' xətası verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi formu təsdiqlədikdə səhifə yenilənmədən AJAX göndərişi icra olunmalıdır, lakin standart davranış dayandırılmadığı üçün yoxlama bayrağı 'Standart rejim aktivdir' xətası verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const form = document.createElement(\"form\");\nlet emalStatusu = \"Gözləyir\";\n\nform.addEventListener(\"submit\", (e) => {\n  // XƏTA: Standart brauzer göndərmə davranışı dayandırılmayıb\n  emalStatusu = e.defaultPrevented ? \"Qorundu və emal olundu\" : \"Standart rejim aktivdir\";\n});\n\nconst submitEvt = new Event(\"submit\", { cancelable: true });\nform.dispatchEvent(submitEvt);\n\nconsole.log(\"Status:\", emalStatusu);",
        "correctCode": "const form = document.createElement(\"form\");\nlet emalStatusu = \"Gözləyir\";\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  emalStatusu = e.defaultPrevented ? \"Qorundu və emal olundu\" : \"Standart rejim aktivdir\";\n});\n\nconst submitEvt = new Event(\"submit\", { cancelable: true });\nform.dispatchEvent(submitEvt);\n\nconsole.log(\"Status:\", emalStatusu);",
        "expectedOutput": "Status: Qorundu və emal olundu",
        "correctOutput": "Status: Qorundu və emal olundu",
        "ipuclari": [
          "1-ci ipucu: Brauzerin form submit və ya link klikləmə kimi standart hərəkətlərini ləğv etmək üçün xüsusi hadisə metodu mövcuddur.",
          "2-ci ipucu: Hadisə obyektində e.preventDefault() çağırışı edin."
        ],
        "hint": "Hadisə obyekti üzərində e.preventDefault() metodunu çağırın.",
        "izah": "HTML formlarının standart davranışı səhifəni yeniləmək və ya yeni səhifəyə keçməkdir. Tək səhifəli tətbiqlərdə (SPA) e.preventDefault() çağırılaraq bu davranış dayandırılmalıdır.",
        "explanation": "HTML formlarının standart davranışı səhifəni yeniləmək və ya yeni səhifəyə keçməkdir. Tək səhifəli tətbiqlərdə (SPA) e.preventDefault() çağırılaraq bu davranış dayandırılmalıdır."
      },
      {
        "id": "bug-sec15-05",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "stopPropagation Çatışmazlığı Səbəbilə Valideynin İcra Olunması",
        "title": "stopPropagation Çatışmazlığı Səbəbilə Valideynin İcra Olunması",
        "tesvir": "Kart daxilindəki 'Sil' düyməsi klikləndikdə yalnız silinmə baş verməlidir, lakin hadisə köpüklənməsi nəticəsində əsas kartın da klik hadisəsi işə düşür və artıq məlumat çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Kart daxilindəki 'Sil' düyməsi klikləndikdə yalnız silinmə baş verməlidir, lakin hadisə köpüklənməsi nəticəsində əsas kartın da klik hadisəsi işə düşür və artıq məlumat çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kart = document.createElement(\"div\");\nconst silBtn = document.createElement(\"button\");\nkart.appendChild(silBtn);\n\nconst jurnallar = [];\n\nkart.addEventListener(\"click\", () => {\n  jurnallar.push(\"Kart açıldı\");\n});\n\nsilBtn.addEventListener(\"click\", (e) => {\n  // XƏTA: Hadisənin yuxarı valideynə yayılmasının qarşısı alınmayıb\n  jurnallar.push(\"Məhsul silindi\");\n});\n\nsilBtn.click();\nconsole.log(\"Hadisələr:\", jurnallar.join(\" -> \"));",
        "correctCode": "const kart = document.createElement(\"div\");\nconst silBtn = document.createElement(\"button\");\nkart.appendChild(silBtn);\n\nconst jurnallar = [];\n\nkart.addEventListener(\"click\", () => {\n  jurnallar.push(\"Kart açıldı\");\n});\n\nsilBtn.addEventListener(\"click\", (e) => {\n  e.stopPropagation();\n  jurnallar.push(\"Məhsul silindi\");\n});\n\nsilBtn.click();\nconsole.log(\"Hadisələr:\", jurnallar.join(\" -> \"));",
        "expectedOutput": "Hadisələr: Məhsul silindi",
        "correctOutput": "Hadisələr: Məhsul silindi",
        "ipuclari": [
          "1-ci ipucu: Hadisələr uşaq elementdən yuxarıya doğru köpüklənir (bubbling).",
          "2-ci ipucu: Hadisənin valideynlərə ötürülməsini dayandırmaq üçün e.stopPropagation() metodundan istifadə edin."
        ],
        "hint": "Hadisə köpüklənməsini dayandırmaq üçün e.stopPropagation() metodunu çağırın.",
        "izah": "DOM hadisələri standart olaraq daxili qovşaqdan valideyn qovşaqlara doğru yayılır (Event Bubbling). Daxili düymə daxilində e.stopPropagation() çağırıldıqda yayılma dərhal dayandırılır.",
        "explanation": "DOM hadisələri standart olaraq daxili qovşaqdan valideyn qovşaqlara doğru yayılır (Event Bubbling). Daxili düymə daxilində e.stopPropagation() çağırıldıqda yayılma dərhal dayandırılır."
      },
      {
        "id": "bug-sec15-06",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Ox Funksiyasında this Kontekstinin İtirilməsi",
        "title": "Ox Funksiyasında this Kontekstinin İtirilməsi",
        "tesvir": "Hadisə baş verdikdə cari elementin sinfi dəyişdirilməlidir, lakin 'TypeError: Cannot read properties of undefined' xətası atılır və əməliyyat baş tutmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hadisə baş verdikdə cari elementin sinfi dəyişdirilməlidir, lakin 'TypeError: Cannot read properties of undefined' xətası atılır və əməliyyat baş tutmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const btn = document.createElement(\"button\");\nbtn.id = \"giris-duymesi\";\n\nbtn.addEventListener(\"click\", (e) => {\n  // XƏTA: Ox funksiyası öz this-inə malik deyil, leksik mühiti götürür\n  // Elementə müraciət üçün e.currentTarget istifadə edilməlidir\n  const id = this ? this.id : e.target.id;\n  console.log(\"Aktiv element:\", id);\n});\n\nbtn.click();",
        "correctCode": "const btn = document.createElement(\"button\");\nbtn.id = \"giris-duymesi\";\n\nbtn.addEventListener(\"click\", function(e) {\n  const id = this.id;\n  console.log(\"Aktiv element:\", id);\n});\n\nbtn.click();",
        "expectedOutput": "Aktiv element: giris-duymesi",
        "correctOutput": "Aktiv element: giris-duymesi",
        "ipuclari": [
          "1-ci ipucu: Ox funksiyaları (arrow functions) hadisəni dinləyən elementə this bağlamır.",
          "2-ci ipucu: Ənənəvi 'function' sintaksisindən istifadə edin və ya e.currentTarget-ə müraciət edin."
        ],
        "hint": "this kontekstinin elementə bağlanması üçün standart 'function(e)' sintaksisindən istifadə edin.",
        "izah": "Ox funksiyaları leksik kontekstə malikdir və DOM hadisə dinləyicisi tərəfindən 'this' elementi mənimsədilmir. Standart function deklarasiyası isə 'this'-i cari hadisə elementinə bağlayır.",
        "explanation": "Ox funksiyaları leksik kontekstə malikdir və DOM hadisə dinləyicisi tərəfindən 'this' elementi mənimsədilmir. Standart function deklarasiyası isə 'this'-i cari hadisə elementinə bağlayır."
      },
      {
        "id": "bug-sec15-07",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Təkrarlanan Dinləyici Qoşulması və once Seçiminin İstifadə Edilməməsi",
        "title": "Təkrarlanan Dinləyici Qoşulması və once Seçiminin İstifadə Edilməməsi",
        "tesvir": "Ödəniş təsdiqi zamanı əməliyyatın yalnız bir dəfə icra olunması tələb olunur, lakin düymə hər klikləndikdə funksiya təkrar qoşulur və 'Ödəniş sayı: 2' çıxaraq təkrarlanan tranzaksiyaya səbəb olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Ödəniş təsdiqi zamanı əməliyyatın yalnız bir dəfə icra olunması tələb olunur, lakin düymə hər klikləndikdə funksiya təkrar qoşulur və 'Ödəniş sayı: 2' çıxaraq təkrarlanan tranzaksiyaya səbəb olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const odenisBtn = document.createElement(\"button\");\nlet tranzaksiyaSayi = 0;\n\nfunction odenisEt() {\n  tranzaksiyaSayi++;\n}\n\n// XƏTA: Hadisənin yalnız bir dəfə icra olunması üçün opsiya təyin edilməyib\nodenisBtn.addEventListener(\"click\", odenisEt);\n\nodenisBtn.click();\nodenisBtn.click();\n\nconsole.log(\"Ödəniş sayı:\", tranzaksiyaSayi);",
        "correctCode": "const odenisBtn = document.createElement(\"button\");\nlet tranzaksiyaSayi = 0;\n\nfunction odenisEt() {\n  tranzaksiyaSayi++;\n}\n\nodenisBtn.addEventListener(\"click\", odenisEt, { once: true });\n\nodenisBtn.click();\nodenisBtn.click();\n\nconsole.log(\"Ödəniş sayı:\", tranzaksiyaSayi);",
        "expectedOutput": "Ödəniş sayı: 1",
        "correctOutput": "Ödəniş sayı: 1",
        "ipuclari": [
          "1-ci ipucu: addEventListener metodunun 3-cü parametri konfiqurasiya obyekti qəbul edə bilir.",
          "2-ci ipucu: Hadisənin yalnız bir dəfə işləyib avtomatik silinməsi üçün { once: true } seçimini təyin edin."
        ],
        "hint": "addEventListener-in 3-cü arqumentinə { once: true } parametrini ötürün.",
        "izah": "addEventListener metodunun 3-cü arqumentinə { once: true } ötürüldükdə hadisə ilk icradan sonra avtomatik olaraq DOM elementindən təmizlənir və təkrar təsdiqlərin qarşısını alır.",
        "explanation": "addEventListener metodunun 3-cü arqumentinə { once: true } ötürüldükdə hadisə ilk icradan sonra avtomatik olaraq DOM elementindən təmizlənir və təkrar təsdiqlərin qarşısını alır."
      },
      {
        "id": "bug-sec15-08",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "CustomEvent Məlumatının Səhv Sahədən Oxunması",
        "title": "CustomEvent Məlumatının Səhv Sahədən Oxunması",
        "tesvir": "Xüsusi 'balans-artimi' hadisəsi vasitəsilə məbləğ oxunmalı və ekrana çıxarılmalıdır, lakin konsolda 'Məbləğ: undefined AZN' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Xüsusi 'balans-artimi' hadisəsi vasitəsilə məbləğ oxunmalı və ekrana çıxarılmalıdır, lakin konsolda 'Məbləğ: undefined AZN' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const panel = document.createElement(\"div\");\n\npanel.addEventListener(\"balans-artimi\", (e) => {\n  // XƏTA: CustomEvent daxilində məlumat data sahəsində deyil, detail sahəsində yerləşir\n  const mebleg = e.data ? e.data.mebleg : undefined;\n  console.log(\"Məbləğ:\", mebleg, \"AZN\");\n});\n\nconst hadise = new CustomEvent(\"balans-artimi\", {\n  detail: { mebleg: 150 }\n});\npanel.dispatchEvent(hadise);",
        "correctCode": "const panel = document.createElement(\"div\");\n\npanel.addEventListener(\"balans-artimi\", (e) => {\n  const mebleg = e.detail ? e.detail.mebleg : undefined;\n  console.log(\"Məbləğ:\", mebleg, \"AZN\");\n});\n\nconst hadise = new CustomEvent(\"balans-artimi\", {\n  detail: { mebleg: 150 }\n});\npanel.dispatchEvent(hadise);",
        "expectedOutput": "Məbləğ: 150 AZN",
        "correctOutput": "Məbləğ: 150 AZN",
        "ipuclari": [
          "1-ci ipucu: Brauzerin CustomEvent obyekti ötürülən yükü (payload) xüsusi standart adlı sahədə saxlayır.",
          "2-ci ipucu: e.data deyil, e.detail sahəsindən istifadə edin."
        ],
        "hint": "CustomEvent-in göndərdiyi parametrə e.detail vasitəsilə daxil olun.",
        "izah": "DOM CustomEvent standartına görə, hadisə konstruktoruna ötürülən bütün fərdi məlumatlar 'detail' xassəsində saxlanılır. e.data adətən WebSockets və ya Web Workers-də istifadə olunur.",
        "explanation": "DOM CustomEvent standartına görə, hadisə konstruktoruna ötürülən bütün fərdi məlumatlar 'detail' xassəsində saxlanılır. e.data adətən WebSockets və ya Web Workers-də istifadə olunur."
      },
      {
        "id": "bug-sec15-09",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Qapanma (Closure) İtirildiyi Üçün Debounce Mexanizminin İşləməməsi",
        "title": "Qapanma (Closure) İtirildiyi Üçün Debounce Mexanizminin İşləməməsi",
        "tesvir": "Hərflər daxil edildikcə axtarış gecikməli işə düşməli və yalnız 1 yekun sorğu göndərilməlidir, lakin hər girişdə taymer sıfırlanmır və sorğu 3 dəfə icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hərflər daxil edildikcə axtarış gecikməli işə düşməli və yalnız 1 yekun sorğu göndərilməlidir, lakin hər girişdə taymer sıfırlanmır və sorğu 3 dəfə icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let sorquSayi = 0;\n\n// XƏTA: timer dəyişəni funksiyanın daxilindədir və hər çağırışda yenidən yaranır\nfunction gecikdirilmisAxtar(metn) {\n  let timer;\n  clearTimeout(timer);\n  timer = setTimeout(() => {\n    sorquSayi++;\n  }, 50);\n}\n\ngecikdirilmisAxtar(\"j\");\ngecikdirilmisAxtar(\"js\");\ngecikdirilmisAxtar(\"jsoyren\");\n\nawait new Promise(r => setTimeout(r, 100));\nconsole.log(\"Göndərilən sorğu sayı:\", sorquSayi);",
        "correctCode": "let sorquSayi = 0;\n\nlet timer;\nfunction gecikdirilmisAxtar(metn) {\n  clearTimeout(timer);\n  timer = setTimeout(() => {\n    sorquSayi++;\n  }, 50);\n}\n\ngecikdirilmisAxtar(\"j\");\ngecikdirilmisAxtar(\"js\");\ngecikdirilmisAxtar(\"jsoyren\");\n\nawait new Promise(r => setTimeout(r, 100));\nconsole.log(\"Göndərilən sorğu sayı:\", sorquSayi);",
        "expectedOutput": "Göndərilən sorğu sayı: 1",
        "correctOutput": "Göndərilən sorğu sayı: 1",
        "ipuclari": [
          "1-ci ipucu: Funksiya daxilində elan edilən lokal dəyişənlər funksiya bitdikdə itir və növbəti çağırışda əvvəlki dəyəri xatırlamır.",
          "2-ci ipucu: Taymer identifikatorunu (timer) xarici qapanma mühitində (funksiyadan kənarda) saxlayın ki, clearTimeout əvvəlki taymeri ləğv edə bilsin."
        ],
        "hint": "timer dəyişənini funksiyadan kənara çıxararaq qapanma (closure) yaradın.",
        "izah": "Debounce mexanizminin işləməsi üçün taymer identifikatoru çağırışlar arasında qorunmalıdır. Dəyişən daxildə elan edildikdə clearTimeout həmişə undefined təmizləyir və hər kəlmə üçün yeni taymer işə düşür.",
        "explanation": "Debounce mexanizminin işləməsi üçün taymer identifikatoru çağırışlar arasında qorunmalıdır. Dəyişən daxildə elan edildikdə clearTimeout həmişə undefined təmizləyir və hər kəlmə üçün yeni taymer işə düşür."
      },
      {
        "id": "bug-sec15-10",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Hadisə İzləmə Fazasında (Capturing Phase) Bayrağın Buraxılması",
        "title": "Hadisə İzləmə Fazasında (Capturing Phase) Bayrağın Buraxılması",
        "tesvir": "Təhlükəsizlik auditində hadisənin daxili elementlərə çatmamışdan əvvəl valideyn səviyyəsində tutulması (capturing) tələb olunur, lakin növbəlilik tərsinə işləyir və 'Uşaq -> Valideyn' ardıcıllığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Təhlükəsizlik auditində hadisənin daxili elementlərə çatmamışdan əvvəl valideyn səviyyəsində tutulması (capturing) tələb olunur, lakin növbəlilik tərsinə işləyir və 'Uşaq -> Valideyn' ardıcıllığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const panel = document.createElement(\"div\");\nconst btn = document.createElement(\"button\");\npanel.appendChild(btn);\n\nconst sira = [];\n\n// XƏTA: Standart olaraq dinləyicilər köpüklənmə (bubbling) fazasında işləyir\npanel.addEventListener(\"click\", () => {\n  sira.push(\"Valideyn Nəzarətçisi\");\n});\n\nbtn.addEventListener(\"click\", () => {\n  sira.push(\"Uşaq Əməliyyatı\");\n});\n\nbtn.click();\nconsole.log(\"İcra ardıcıllığı:\", sira.join(\" -> \"));",
        "correctCode": "const panel = document.createElement(\"div\");\nconst btn = document.createElement(\"button\");\npanel.appendChild(btn);\n\nconst sira = [];\n\npanel.addEventListener(\"click\", () => {\n  sira.push(\"Valideyn Nəzarətçisi\");\n}, true);\n\nbtn.addEventListener(\"click\", () => {\n  sira.push(\"Uşaq Əməliyyatı\");\n});\n\nbtn.click();\nconsole.log(\"İcra ardıcıllığı:\", sira.join(\" -> \"));",
        "expectedOutput": "İcra ardıcıllığı: Valideyn Nəzarətçisi -> Uşaq Əməliyyatı",
        "correctOutput": "İcra ardıcıllığı: Valideyn Nəzarətçisi -> Uşaq Əməliyyatı",
        "ipuclari": [
          "1-ci ipucu: DOM hadisələri əvvəlcə yuxarıdan aşağıya (capturing), sonra isə aşağıdan yuxarıya (bubbling) hərəkət edir.",
          "2-ci ipucu: Valideyn dinləyicisinin 3-cü arqumentinə 'true' ötürərək onu yaxalama (capture) fazasında aktivləşdirin."
        ],
        "hint": "Valideyn dinləyicisinə 3-cü arqument kimi true və ya { capture: true } ötürün.",
        "izah": "addEventListener standart olaraq bubbling fazasında işləyir. capture: true təyin edildikdə hadisə ağacın yuxarısından enərkən (yaxalama fazasında) dərhal işə düşür və uşaq elementlərdən əvvəl icra olunur.",
        "explanation": "addEventListener standart olaraq bubbling fazasında işləyir. capture: true təyin edildikdə hadisə ağacın yuxarısından enərkən (yaxalama fazasında) dərhal işə düşür və uşaq elementlərdən əvvəl icra olunur."
      }
    ]
  },
  {
    "sectionId": "sec-16",
    "bolmeId": 16,
    "icon": "💾",
    "sectionTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
    "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
    "bugs": [
      {
        "id": "bug-sec16-01",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "localStorage-da Obyektin Stringify Edilmədən Saxlanması",
        "title": "localStorage-da Obyektin Stringify Edilmədən Saxlanması",
        "tesvir": "İstifadəçi profili yaddaşda saxlanılmalı və sonra adı oxunmalıdır, lakin konsolda 'İstifadəçi adı: undefined' və ya [object Object] qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi profili yaddaşda saxlanılmalı və sonra adı oxunmalıdır, lakin konsolda 'İstifadəçi adı: undefined' və ya [object Object] qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const profil = { ad: \"Rəşad\", rol: \"tələbə\" };\n\n// XƏTA: Obyekt birbaşa ötürüldükdə avtomatik '[object Object]' sətirinə çevrilir\nlocalStorage.setItem(\"istifadeci\", profil);\n\nconst oxunan = JSON.parse(localStorage.getItem(\"istifadeci\") || \"{}\");\nconsole.log(\"İstifadəçi adı:\", oxunan.ad);",
        "correctCode": "const profil = { ad: \"Rəşad\", rol: \"tələbə\" };\n\nlocalStorage.setItem(\"istifadeci\", JSON.stringify(profil));\n\nconst oxunan = JSON.parse(localStorage.getItem(\"istifadeci\") || \"{}\");\nconsole.log(\"İstifadəçi adı:\", oxunan.ad);",
        "expectedOutput": "İstifadəçi adı: Rəşad",
        "correctOutput": "İstifadəçi adı: Rəşad",
        "ipuclari": [
          "1-ci ipucu: localStorage yalnız sətir (string) tipli məlumatları saxlayır.",
          "2-ci ipucu: Obyekti saxlamazdan əvvəl JSON.stringify() vasitəsilə JSON sətrinə çevirin."
        ],
        "hint": "localStorage-a yazarkən JSON.stringify() metodundan istifadə edin.",
        "izah": "Web Storage API yalnız sətir formatı qəbul edir. JavaScript obyekti birbaşa ötürüldükdə toString() çağırılır və '[object Object]' saxlanılır. Düzgün saxlamaq üçün JSON.stringify(), oxuyarkən isə JSON.parse() tələb olunur.",
        "explanation": "Web Storage API yalnız sətir formatı qəbul edir. JavaScript obyekti birbaşa ötürüldükdə toString() çağırılır və '[object Object]' saxlanılır. Düzgün saxlamaq üçün JSON.stringify(), oxuyarkən isə JSON.parse() tələb olunur."
      },
      {
        "id": "bug-sec16-02",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "localStorage-dan Oxunan Ədədin Sətir Kimi Birləşdirilməsi",
        "title": "localStorage-dan Oxunan Ədədin Sətir Kimi Birləşdirilməsi",
        "tesvir": "Mövcud 85 bala 15 bonus əlavə olunub yekun 100 bal hesablanmalıdır, lakin sətir birləşməsi baş verir və konsola 'Yekun bal: 8515' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Mövcud 85 bala 15 bonus əlavə olunub yekun 100 bal hesablanmalıdır, lakin sətir birləşməsi baş verir və konsola 'Yekun bal: 8515' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.setItem(\"bal\", \"85\");\n\nconst cariBal = localStorage.getItem(\"bal\");\n// XƏTA: cariBal sətir tiplidir və + operatoru ədədi deyil, sətir birləşdirməsi (concatenation) edir\nconst yeniBal = cariBal + 15;\n\nconsole.log(\"Yekun bal:\", yeniBal);",
        "correctCode": "localStorage.setItem(\"bal\", \"85\");\n\nconst cariBal = localStorage.getItem(\"bal\");\nconst yeniBal = Number(cariBal) + 15;\n\nconsole.log(\"Yekun bal:\", yeniBal);",
        "expectedOutput": "Yekun bal: 100",
        "correctOutput": "Yekun bal: 100",
        "ipuclari": [
          "1-ci ipucu: localStorage.getItem həmişə string qaytarır.",
          "2-ci ipucu: Riyazi toplama aparmaq üçün dəyəri Number() və ya parseInt() ilə ədədə çevirin."
        ],
        "hint": "Yaddaşdan oxunan qiyməti Number() ilə ədəd tipinə konvertasiya edin.",
        "izah": "localStorage-da saxlanılan bütün dəyərlər sətir tiplidir. getItem('bal') '85' sətirini qaytardığı üçün '85' + 15 ifadəsi '8515' nəticəsini verir. Number() ilə açıq tip çevrilməsi aparılmalıdır.",
        "explanation": "localStorage-da saxlanılan bütün dəyərlər sətir tiplidir. getItem('bal') '85' sətirini qaytardığı üçün '85' + 15 ifadəsi '8515' nəticəsini verir. Number() ilə açıq tip çevrilməsi aparılmalıdır."
      },
      {
        "id": "bug-sec16-03",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Mövcud Olmayan Açar Oxunarkən TypeError Baş Verməsi",
        "title": "Mövcud Olmayan Açar Oxunarkən TypeError Baş Verməsi",
        "tesvir": "Sistem konfiqurasiyası tapılmadıqda standart rejim istifadə edilməlidir, lakin 'TypeError: Cannot read properties of null' xətası baş verir və tətbiq qəzaya uğrayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Sistem konfiqurasiyası tapılmadıqda standart rejim istifadə edilməlidir, lakin 'TypeError: Cannot read properties of null' xətası baş verir və tətbiq qəzaya uğrayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.removeItem(\"ayarlar\");\n\n// XƏTA: Açar yoxdursa getItem null qaytarır, JSON.parse(null) isə null verir\nconst ayarlar = JSON.parse(localStorage.getItem(\"ayarlar\"));\nconst rejim = ayarlar.rejim;\n\nconsole.log(\"Rejim:\", rejim);",
        "correctCode": "localStorage.removeItem(\"ayarlar\");\n\nconst ayarlar = JSON.parse(localStorage.getItem(\"ayarlar\")) || { rejim: \"qaranlıq\" };\nconst rejim = ayarlar.rejim;\n\nconsole.log(\"Rejim:\", rejim);",
        "expectedOutput": "Rejim: qaranlıq",
        "correctOutput": "Rejim: qaranlıq",
        "ipuclari": [
          "1-ci ipucu: getItem tapılmayan açarlar üçün null qaytarır və JSON.parse(null) null qiymətini saxlayır.",
          "2-ci ipucu: Qəzanın qarşısını almaq üçün fallback obyekt təyin edin: JSON.parse(...) || { rejim: 'qaranlıq' }."
        ],
        "hint": "null dəyərinə qarşı ehtiyat standart (fallback) obyekt təmin edin.",
        "izah": "localStorage.getItem mövcud olmayan açar üçün null qaytarır. JSON.parse(null) sintaktik xəta verməsə də nəticəsi null olur. null üzərindən .rejim xassəsini oxumaq cəhdi TypeError yaradır.",
        "explanation": "localStorage.getItem mövcud olmayan açar üçün null qaytarır. JSON.parse(null) sintaktik xəta verməsə də nəticəsi null olur. null üzərindən .rejim xassəsini oxumaq cəhdi TypeError yaradır."
      },
      {
        "id": "bug-sec16-04",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "'false' Sətirinin Məntiqi Dəyər Kimi Yoxlanılması Yanlışlığı",
        "title": "'false' Sətirinin Məntiqi Dəyər Kimi Yoxlanılması Yanlışlığı",
        "tesvir": "İstifadəçi sessiyası deaktiv olduqda 'Sessiya statusu: Bağlı' çap olunmalıdır, lakin 'false' sətri truthy qəbul edildiyi üçün 'Açıq' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi sessiyası deaktiv olduqda 'Sessiya statusu: Bağlı' çap olunmalıdır, lakin 'false' sətri truthy qəbul edildiyi üçün 'Açıq' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.setItem(\"sessiyaAktiv\", \"false\");\n\n// XƏTA: \"false\" boş olmayan sətir olduğu üçün Boolean(\"false\") həmişə true verir\nconst deyer = localStorage.getItem(\"sessiyaAktiv\");\nconst aktivdir = Boolean(deyer);\n\nconsole.log(\"Sessiya statusu:\", aktivdir ? \"Açıq\" : \"Bağlı\");",
        "correctCode": "localStorage.setItem(\"sessiyaAktiv\", \"false\");\n\nconst deyer = localStorage.getItem(\"sessiyaAktiv\");\nconst aktivdir = deyer === \"true\";\n\nconsole.log(\"Sessiya statusu:\", aktivdir ? \"Açıq\" : \"Bağlı\");",
        "expectedOutput": "Sessiya statusu: Bağlı",
        "correctOutput": "Sessiya statusu: Bağlı",
        "ipuclari": [
          "1-ci ipucu: JavaScript-də istənilən qeyri-boş sətir (hətta 'false' və ya '0') məntiqi olaraq true (truthy) qiymətləndirilir.",
          "2-ci ipucu: Boolean() əvəzinə sətir müqayisəsi aparın: deyer === 'true'."
        ],
        "hint": "Boolean konversiyası əvəzinə deyer === 'true' bərabərliyini yoxlayın.",
        "izah": "Boolean('false') çağırışı true qaytarır, çünki JavaScript-də yalnız boş sətir '' falsy sayılır. Saxlanılan boolean bayraqlarını yoxlamaq üçün string müqayisəsi (val === 'true') və ya JSON.parse istifadə edilməlidir.",
        "explanation": "Boolean('false') çağırışı true qaytarır, çünki JavaScript-də yalnız boş sətir '' falsy sayılır. Saxlanılan boolean bayraqlarını yoxlamaq üçün string müqayisəsi (val === 'true') və ya JSON.parse istifadə edilməlidir."
      },
      {
        "id": "bug-sec16-05",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Tək Açarı Silmək Əvəzinə Bütün Yaddaşın Təmizlənməsi Səhvi",
        "title": "Tək Açarı Silmək Əvəzinə Bütün Yaddaşın Təmizlənməsi Səhvi",
        "tesvir": "Yalnız müvəqqəti token silinməli, istifadəçinin dil seçimi ('az') isə qorunmalıdır, lakin bütün yaddaş silindiyi üçün dil parametri itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Yalnız müvəqqəti token silinməli, istifadəçinin dil seçimi ('az') isə qorunmalıdır, lakin bütün yaddaş silindiyi üçün dil parametri itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.setItem(\"dil\", \"az\");\nlocalStorage.setItem(\"muveqqetiToken\", \"xyz-777\");\n\n// XƏTA: clear() bütün açarları silir, yalnız göstərilən açar silinməlidir\nlocalStorage.clear();\n\nconst tokenStatus = localStorage.getItem(\"muveqqetiToken\") ? \"Mövcuddur\" : \"Silindi\";\nconst dil = localStorage.getItem(\"dil\") || \"itirildi\";\nconsole.log(\"Token:\", tokenStatus, \"| Dil:\", dil);",
        "correctCode": "localStorage.setItem(\"dil\", \"az\");\nlocalStorage.setItem(\"muveqqetiToken\", \"xyz-777\");\n\nlocalStorage.removeItem(\"muveqqetiToken\");\n\nconst tokenStatus = localStorage.getItem(\"muveqqetiToken\") ? \"Mövcuddur\" : \"Silindi\";\nconst dil = localStorage.getItem(\"dil\") || \"itirildi\";\nconsole.log(\"Token:\", tokenStatus, \"| Dil:\", dil);",
        "expectedOutput": "Token: Silindi | Dil: az",
        "correctOutput": "Token: Silindi | Dil: az",
        "ipuclari": [
          "1-ci ipucu: localStorage.clear() domenə aid bütün açar-dəyər cütlərini məhv edir.",
          "2-ci ipucu: Yalnız konkret bir açarı silmək üçün removeItem('muveqqetiToken') metodundan istifadə edin."
        ],
        "hint": "Bütün yaddaşı silmək əvəzinə removeItem metodundan istifadə edin.",
        "izah": "localStorage.clear() funksiyası bütün lokal yaddaşı sıfırlayır. Yalnız spesifik elementi silmək üçün removeItem(key) çağırılmalıdır ki, digər tənzimləmələr itməsin.",
        "explanation": "localStorage.clear() funksiyası bütün lokal yaddaşı sıfırlayır. Yalnız spesifik elementi silmək üçün removeItem(key) çağırılmalıdır ki, digər tənzimləmələr itməsin."
      },
      {
        "id": "bug-sec16-06",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "JSON Serializasiyasında Date Obyektinin Metodlarını İtirməsi",
        "title": "JSON Serializasiyasında Date Obyektinin Metodlarını İtirməsi",
        "tesvir": "Yaddaşdan oxunan qeydin təqvim ili hesablanmalıdır, lakin 'TypeError: ...getFullYear is not a function' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Yaddaşdan oxunan qeydin təqvim ili hesablanmalıdır, lakin 'TypeError: ...getFullYear is not a function' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const qeyd = { basliq: \"İmtahan\", vaxt: new Date(\"2026-10-26\") };\nlocalStorage.setItem(\"qeyd\", JSON.stringify(qeyd));\n\nconst bərpa = JSON.parse(localStorage.getItem(\"qeyd\"));\n// XƏTA: JSON.parse tarixi Date obyekti kimi yox, ISO string kimi bərpa edir\nconst il = bərpa.vaxt.getFullYear();\n\nconsole.log(\"Təqvim ili:\", il);",
        "correctCode": "const qeyd = { basliq: \"İmtahan\", vaxt: new Date(\"2026-10-26\") };\nlocalStorage.setItem(\"qeyd\", JSON.stringify(qeyd));\n\nconst bərpa = JSON.parse(localStorage.getItem(\"qeyd\"));\nconst il = new Date(bərpa.vaxt).getFullYear();\n\nconsole.log(\"Təqvim ili:\", il);",
        "expectedOutput": "Təqvim ili: 2026",
        "correctOutput": "Təqvim ili: 2026",
        "ipuclari": [
          "1-ci ipucu: JSON formatında yerli Date tipi yoxdur; tarixlər ISO 8601 stringinə çevrilir.",
          "2-ci ipucu: Oxunan sətir üzərində Date metodlarını çağırmaq üçün onu yenidən new Date(bərpa.vaxt) konstruktoruna ötürün."
        ],
        "hint": "Tarix sətirini new Date() ilə yenidən Date obyektinə çevirin.",
        "izah": "JSON.stringify Date obyektini ISO sətir formatına ('2026-10-26T...') salır. JSON.parse bunu avtomatik Date-ə qaytarmır, string saxlayır. Sətir üzərində getFullYear çağırdıqda xəta baş verir.",
        "explanation": "JSON.stringify Date obyektini ISO sətir formatına ('2026-10-26T...') salır. JSON.parse bunu avtomatik Date-ə qaytarmır, string saxlayır. Sətir üzərində getFullYear çağırdıqda xəta baş verir."
      },
      {
        "id": "bug-sec16-07",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "URL Parametrlərinin Əllə Birləşdirilməsi və Xüsusi Simvol Xətası",
        "title": "URL Parametrlərinin Əllə Birləşdirilməsi və Xüsusi Simvol Xətası",
        "tesvir": "URL sorğu parametrləri təhlükəsiz şəkildə formalaşdırılmalıdır, lakin xüsusi simvollar ekranlaşdırılmadığı üçün sorğu sintaksisi pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "URL sorğu parametrləri təhlükəsiz şəkildə formalaşdırılmalıdır, lakin xüsusi simvollar ekranlaşdırılmadığı üçün sorğu sintaksisi pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const parametrler = { teq: \"c++ & js\", sehife: \"2\" };\n\n// XƏTA: Əllə string birləşdirməsi & və + kimi xüsusi URL simvollarını kodlaşdırmır\nconst urlParam = \"teq=\" + parametrler.teq + \"&sehife=\" + parametrler.sehife;\n\nconsole.log(\"Parametrlər:\", urlParam);",
        "correctCode": "const parametrler = { teq: \"c++ & js\", sehife: \"2\" };\n\nconst urlParam = new URLSearchParams(parametrler).toString();\n\nconsole.log(\"Parametrlər:\", urlParam);",
        "expectedOutput": "Parametrlər: teq=c%2B%2B+%26+js&sehife=2",
        "correctOutput": "Parametrlər: teq=c%2B%2B+%26+js&sehife=2",
        "ipuclari": [
          "1-ci ipucu: Veb standartlarında URL parametrlərini avtomatik kodlaşdırmaq üçün xüsusi daxili API mövcuddur.",
          "2-ci ipucu: new URLSearchParams(parametrler).toString() metodundan istifadə edin."
        ],
        "hint": "URL parametrlərini formalaşdırmaq üçün URLSearchParams API-sindən istifadə edin.",
        "izah": "URL-dəki '+' və '&' simvolları ayırıcı məna daşıyır. Onlar kodlaşdırılmadıqda backend sorğunu səhv pars edir. URLSearchParams bütün simvolları standart percent-encoding ilə avtomatik qoruyur.",
        "explanation": "URL-dəki '+' və '&' simvolları ayırıcı məna daşıyır. Onlar kodlaşdırılmadıqda backend sorğunu səhv pars edir. URLSearchParams bütün simvolları standart percent-encoding ilə avtomatik qoruyur."
      },
      {
        "id": "bug-sec16-08",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Dairəvi İstinadlı Obyektin Saxlanması Zamanı TypeError",
        "title": "Dairəvi İstinadlı Obyektin Saxlanması Zamanı TypeError",
        "tesvir": "Məlumat obyekti yaddaşa yazılmalıdır, lakin dairəvi əlaqə səbəbindən 'TypeError: Converting circular structure to JSON' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat obyekti yaddaşa yazılmalıdır, lakin dairəvi əlaqə səbəbindən 'TypeError: Converting circular structure to JSON' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kurs = { ad: \"JavaScript Əsasları\" };\nkurs.ozuneIstinad = kurs;\n\n// XƏTA: Dairəvi əlaqəli obyekt JSON.stringify zamanı sonsuz dövrə girərək istisna atır\nlocalStorage.setItem(\"kursData\", JSON.stringify(kurs));\n\nconsole.log(\"Yaddaş məzmunu:\", JSON.parse(localStorage.getItem(\"kursData\")).ad);",
        "correctCode": "const kurs = { ad: \"JavaScript Əsasları\" };\nkurs.ozuneIstinad = kurs;\n\nconst temizObyekt = { ...kurs };\ndelete temizObyekt.ozuneIstinad;\nlocalStorage.setItem(\"kursData\", JSON.stringify(temizObyekt));\n\nconsole.log(\"Yaddaş məzmunu:\", JSON.parse(localStorage.getItem(\"kursData\")).ad);",
        "expectedOutput": "Yaddaş məzmunu: JavaScript Əsasları",
        "correctOutput": "Yaddaş məzmunu: JavaScript Əsasları",
        "ipuclari": [
          "1-ci ipucu: Obyektin özünə və ya valideyninə istinad edən sahələri JSON.stringify tərəfindən serializasiya oluna bilməz.",
          "2-ci ipucu: Serializasiyadan əvvəl dairəvi xassəni silin (delete) və ya replacer funksiyasından istifadə edin."
        ],
        "hint": "Dairəvi xassəni obyektdən çıxararaq təmizlənmiş nüsxəni saxlayın.",
        "izah": "Dairəvi istinadlar (circular references) JSON formatında dəstəklənmir və JSON.stringify qəza törədir. Bu cür strukturları yaddaşda saxlamaq üçün əvvəlcə daxili əlaqələr təmizlənməlidir.",
        "explanation": "Dairəvi istinadlar (circular references) JSON formatında dəstəklənmir və JSON.stringify qəza törədir. Bu cür strukturları yaddaşda saxlamaq üçün əvvəlcə daxili əlaqələr təmizlənməlidir."
      },
      {
        "id": "bug-sec16-09",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Yaddaş İndeksləri Üzrə Dövr Zamanı Sürüşmə (Index Shift) Xətası",
        "title": "Yaddaş İndeksləri Üzrə Dövr Zamanı Sürüşmə (Index Shift) Xətası",
        "tesvir": "Müəyyən prefiksli açarlar təmizlənməlidir və sonda 'Qalan açar sayı: 0' alınmalıdır, lakin indeks sürüşməsi səbəbilə açarların bir qismi silinməmiş qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Müəyyən prefiksli açarlar təmizlənməlidir və sonda 'Qalan açar sayı: 0' alınmalıdır, lakin indeks sürüşməsi səbəbilə açarların bir qismi silinməmiş qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.clear();\nlocalStorage.setItem(\"tmp_1\", \"A\");\nlocalStorage.setItem(\"tmp_2\", \"B\");\nlocalStorage.setItem(\"tmp_3\", \"C\");\n\n// XƏTA: Dövr daxilində removeItem edildikdə length azalır və qalan indekslər sola sürüşür\nfor (let i = 0; i < localStorage.length; i++) {\n  const acar = localStorage.key(i);\n  if (acar && acar.startsWith(\"tmp_\")) {\n    localStorage.removeItem(acar);\n  }\n}\n\nconsole.log(\"Qalan açar sayı:\", localStorage.length);",
        "correctCode": "localStorage.clear();\nlocalStorage.setItem(\"tmp_1\", \"A\");\nlocalStorage.setItem(\"tmp_2\", \"B\");\nlocalStorage.setItem(\"tmp_3\", \"C\");\n\nconst acarlar = [];\nfor (let i = 0; i < localStorage.length; i++) {\n  acarlar.push(localStorage.key(i));\n}\nacarlar.forEach(acar => {\n  if (acar && acar.startsWith(\"tmp_\")) {\n    localStorage.removeItem(acar);\n  }\n});\n\nconsole.log(\"Qalan açar sayı:\", localStorage.length);",
        "expectedOutput": "Qalan açar sayı: 0",
        "correctOutput": "Qalan açar sayı: 0",
        "ipuclari": [
          "1-ci ipucu: Kolleksiya üzərində iterasiya gedərkən eyni vaxtda kolleksiyadan element silmək indekslərin sürüşməsinə səbəb olur.",
          "2-ci ipucu: Əvvəlcə bütün açarları ayrıca bir massivə toplayın, sonra həmin massiv üzrə silmə əməliyyatını aparın."
        ],
        "hint": "Silməyə başlamazdan əvvəl açarları ayrıca bir massivdə toplayın.",
        "izah": "Dövr zamanı removeItem çağırıldıqda localStorage.length anında azalır və növbəti elementlər bir pillə sola keçir. Nəticədə bəzi açarlar dövr tərəfindən ötürülür. Açarları əvvəlcədən statik massivə toplamaq problemi həll edir.",
        "explanation": "Dövr zamanı removeItem çağırıldıqda localStorage.length anında azalır və növbəti elementlər bir pillə sola keçir. Nəticədə bəzi açarlar dövr tərəfindən ötürülür. Açarları əvvəlcədən statik massivə toplamaq problemi həll edir."
      },
      {
        "id": "bug-sec16-10",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Keşin TTL (Vaxt Həddi) Yoxlanış Məntiqinin Tərsinə Olması",
        "title": "Keşin TTL (Vaxt Həddi) Yoxlanış Məntiqinin Tərsinə Olması",
        "tesvir": "Keşlənmiş məlumatın etibarlılıq müddəti bitdikdə yenilənməli və 'Məlumat: Təzə məzmun' çıxmalıdır, lakin müqayisə şərtinin səhvi səbəbilə vaxtı keçmiş köhnə keş istifadə olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Keşlənmiş məlumatın etibarlılıq müddəti bitdikdə yenilənməli və 'Məlumat: Təzə məzmun' çıxmalıdır, lakin müqayisə şərtinin səhvi səbəbilə vaxtı keçmiş köhnə keş istifadə olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// Keş yaradılıb və vaxtı 5 saniyə əvvəl bitib\nconst cariZaman = Date.now();\nconst kes = { deyer: \"Köhnə keş\", etibarliQeder: cariZaman - 5000 };\n\nlet netice = \"\";\n// XƏTA: cariZaman < etibarliQeder olmalıdır, şərt tərsinə yazılıb\nif (cariZaman > kes.etibarliQeder) {\n  netice = kes.deyer;\n} else {\n  netice = \"Təzə məzmun\";\n}\n\nconsole.log(\"Məlumat:\", netice);",
        "correctCode": "const cariZaman = Date.now();\nconst kes = { deyer: \"Köhnə keş\", etibarliQeder: cariZaman - 5000 };\n\nlet netice = \"\";\nif (cariZaman < kes.etibarliQeder) {\n  netice = kes.deyer;\n} else {\n  netice = \"Təzə məzmun\";\n}\n\nconsole.log(\"Məlumat:\", netice);",
        "expectedOutput": "Məlumat: Təzə məzmun",
        "correctOutput": "Məlumat: Təzə məzmun",
        "ipuclari": [
          "1-ci ipucu: Keşin hələ də etibarlı olması üçün cari zamanın son istifadə vaxtından kiçik olması şərtdir.",
          "2-ci ipucu: if şərtini cariZaman < kes.etibarliQeder kimi düzəldin."
        ],
        "hint": "Keş etibarlılıq şərtini düzəldin: cariZaman < kes.etibarliQeder.",
        "izah": "Keş mexanizmlərində cari vaxt son istifadə tarixindən kiçik olduqda (now < expiry) məlumat təzə sayılır. Böyük olduqda isə köhnəlmiş sayılır və yenilənməlidir. Şərt tərsinə yazıldıqda vaxtı keçmiş məlumat təqdim olunur.",
        "explanation": "Keş mexanizmlərində cari vaxt son istifadə tarixindən kiçik olduqda (now < expiry) məlumat təzə sayılır. Böyük olduqda isə köhnəlmiş sayılır və yenilənməlidir. Şərt tərsinə yazıldıqda vaxtı keçmiş məlumat təqdim olunur."
      }
    ]
  },
  {
    "sectionId": "sec-17",
    "bolmeId": 17,
    "icon": "📡",
    "sectionTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
    "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
    "bugs": [
      {
        "id": "bug-sec17-01",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "response.json() Çağırışında await Unudulması",
        "title": "response.json() Çağırışında await Unudulması",
        "tesvir": "API-dən daxil olan kurs adı konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'Kurs adı: undefined' çıxışı qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "API-dən daxil olan kurs adı konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'Kurs adı: undefined' çıxışı qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function melumatYukle() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n  // XƏTA: response.json() metodu asinxrondur və Promise qaytarır\n  const data = cavab.json();\n  console.log(\"Kurs adı:\", data.ad);\n}\n\nawait melumatYukle();",
        "correctCode": "async function melumatYukle() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n  const data = await cavab.json();\n  console.log(\"Kurs adı:\", data.ad);\n}\n\nawait melumatYukle();",
        "expectedOutput": "Kurs adı: JSÖyrən",
        "correctOutput": "Kurs adı: JSÖyrən",
        "ipuclari": [
          "1-ci ipucu: cavab.json() metodu sinxron obyekt deyil, Promise qaytarır.",
          "2-ci ipucu: Promise-in nəticəsini gözləmək üçün cavab.json() çağırışının qarşısına 'await' yazın."
        ],
        "hint": "cavab.json() qarşısına 'await' açar sözünü əlavə edin.",
        "izah": "Fetch API iki pilləli asinxron mexanizmə malikdir: birinci await HTTP başlıqlarını alır, ikinci await cavab.json() isə axını oxuyub obyekti pars edir. await yazılmadıqda dəyişən həll olunmamış Promise olur.",
        "explanation": "Fetch API iki pilləli asinxron mexanizmə malikdir: birinci await HTTP başlıqlarını alır, ikinci await cavab.json() isə axını oxuyub obyekti pars edir. await yazılmadıqda dəyişən həll olunmamış Promise olur."
      },
      {
        "id": "bug-sec17-02",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "HTTP 404 Statusunun try...catch Tərəfindən Tutulmaması",
        "title": "HTTP 404 Statusunun try...catch Tərəfindən Tutulmaması",
        "tesvir": "Mövcud olmayan resurs üçün 'Xəta tutuldu: HTTP xətası: 404' mesajı alınmalıdır, lakin catch bloku işə düşmür və səhvən uğurlu qol icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Mövcud olmayan resurs üçün 'Xəta tutuldu: HTTP xətası: 404' mesajı alınmalıdır, lakin catch bloku işə düşmür və səhvən uğurlu qol icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function melumatAl() {\n  try {\n    const cavab = await fetch(\"https://api.jsoyren.az/tapilmadi\");\n    // XƏTA: fetch() HTTP 404 və ya 500 statuslarında Promise-i rədd (reject) etmir\n    console.log(\"Uğurla alındı\");\n  } catch (xeta) {\n    console.log(\"Xəta tutuldu:\", xeta.message);\n  }\n}\n\nawait melumatAl();",
        "correctCode": "async function melumatAl() {\n  try {\n    const cavab = await fetch(\"https://api.jsoyren.az/tapilmadi\");\n    if (!cavab.ok) {\n      throw new Error(\"HTTP xətası: \" + cavab.status);\n    }\n    console.log(\"Uğurla alındı\");\n  } catch (xeta) {\n    console.log(\"Xəta tutuldu:\", xeta.message);\n  }\n}\n\nawait melumatAl();",
        "expectedOutput": "Xəta tutuldu: HTTP xətası: 404",
        "correctOutput": "Xəta tutuldu: HTTP xətası: 404",
        "ipuclari": [
          "1-ci ipucu: fetch yalnız şəbəkə kəsildikdə və ya DNS xətası olduqda reject edir; 404/500 cavablarını uğurlu Promise kimi qəbul edir.",
          "2-ci ipucu: response.ok bayrağını yoxlayın: if (!cavab.ok) throw new Error(...)."
        ],
        "hint": "if (!cavab.ok) yoxlaması apararaq xəta atın.",
        "izah": "Fetch API fəlsəfəsinə görə, serverdən cavab gəldiyi təqdirdə (hətta 404 Not Found və ya 500 Internal Server Error olsa belə) Promise uğurla həll olunur (resolve). Buna görə mütləq response.ok yoxlanılmalıdır.",
        "explanation": "Fetch API fəlsəfəsinə görə, serverdən cavab gəldiyi təqdirdə (hətta 404 Not Found və ya 500 Internal Server Error olsa belə) Promise uğurla həll olunur (resolve). Buna görə mütləq response.ok yoxlanılmalıdır."
      },
      {
        "id": "bug-sec17-03",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "POST Sorğusunda Content-Type və JSON.stringify Buraxılması",
        "title": "POST Sorğusunda Content-Type və JSON.stringify Buraxılması",
        "tesvir": "Serverə yeni istifadəçi məlumatı göndərilməli və qeydiyyat təsdiqi alınmalıdır, lakin məlumat düzgün formatda ötürülmür və server boş ad qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Serverə yeni istifadəçi məlumatı göndərilməli və qeydiyyat təsdiqi alınmalıdır, lakin məlumat düzgün formatda ötürülmür və server boş ad qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function qeydiyyatdanKec() {\n  const profil = { ad: \"Aysel\" };\n\n  // XƏTA: body stringify olunmayıb və JSON başlığı (header) təyin edilməyib\n  const cavab = await fetch(\"/api/qeydiyyat\", {\n    method: \"POST\",\n    body: profil\n  });\n\n  const netice = await cavab.json();\n  console.log(\"İstifadəçi qeydiyyatı:\", netice.ad, \"(ID: \" + netice.id + \")\");\n}\n\nawait qeydiyyatdanKec();",
        "correctCode": "async function qeydiyyatdanKec() {\n  const profil = { ad: \"Aysel\" };\n\n  const cavab = await fetch(\"/api/qeydiyyat\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify(profil)\n  });\n\n  const netice = await cavab.json();\n  console.log(\"İstifadəçi qeydiyyatı:\", netice.ad, \"(ID: \" + netice.id + \")\");\n}\n\nawait qeydiyyatdanKec();",
        "expectedOutput": "İstifadəçi qeydiyyatı: Aysel (ID: 42)",
        "correctOutput": "İstifadəçi qeydiyyatı: Aysel (ID: 42)",
        "ipuclari": [
          "1-ci ipucu: fetch body-də JavaScript obyektini avtomatik JSON-a çevirmir.",
          "2-ci ipucu: headers-ə 'Content-Type': 'application/json' əlavə edin və body-ni JSON.stringify(profil) ilə ötürün."
        ],
        "hint": "headers-də Content-Type təyin edin və body-ni JSON.stringify ilə göndərin.",
        "izah": "POST sorğusunda obyekt ötürülərkən iki mütləq tələb var: brauzerə məlumat növünü bildirmək üçün 'Content-Type: application/json' başlığı və obyektin JSON.stringify ilə sətirə çevrilməsi.",
        "explanation": "POST sorğusunda obyekt ötürülərkən iki mütləq tələb var: brauzerə məlumat növünü bildirmək üçün 'Content-Type: application/json' başlığı və obyektin JSON.stringify ilə sətirə çevrilməsi."
      },
      {
        "id": "bug-sec17-04",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Cavab Axınının (Response Stream) İki Dəfə Oxunması Cəhdi",
        "title": "Cavab Axınının (Response Stream) İki Dəfə Oxunması Cəhdi",
        "tesvir": "Həm strukturlaşmış JSON, həm də xam mətn təhlil edilməlidir, lakin 'TypeError: body stream already read' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Həm strukturlaşmış JSON, həm də xam mətn təhlil edilməlidir, lakin 'TypeError: body stream already read' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function analiziIcraEt() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n\n  // XƏTA: Response stream bir dəfə oxunduqdan sonra tükənir və təkrar oxuna bilməz\n  const data = await cavab.json();\n  const metn = await cavab.text();\n\n  console.log(\"Məlumat təhlili:\", data.ad, \"və\", metn.slice(0, 5));\n}\n\n// Qeyd: Xətanın qarşısını almaq üçün klonlama tələb olunur\ntry {\n  await analiziIcraEt();\n} catch(e) {\n  console.log(\"Stream xətası baş verdi\");\n}",
        "correctCode": "async function analiziIcraEt() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n\n  const data = await cavab.json();\n\n  console.log(\"Məlumat təhlili:\", data.ad, \"(JSON) və status\", data.status);\n}\n\nawait analiziIcraEt();",
        "expectedOutput": "Məlumat təhlili: JSÖyrən (JSON) və status Aktiv",
        "correctOutput": "Məlumat təhlili: JSÖyrən (JSON) və status Aktiv",
        "ipuclari": [
          "1-ci ipucu: Response gövdəsi oxunabilir axındır (ReadableStream) və bir dəfə istehlak edildikdən sonra boşalır.",
          "2-ci ipucu: Lazımi məlumatları birbaşa JSON obyektindən oxuyun və təkrar .text() çağırışından imtina edin."
        ],
        "hint": "Cavab gövdəsini təkrar oxumaq əvəzinə mövcud JSON obyektinin xassələrindən istifadə edin.",
        "izah": "Fetch Response obyekti axın (stream) əsaslıdır. cavab.json() çağırıldıqda daxili axın oxunur və bağlanır. İkinci dəfə .text() çağırmaq TypeError yaradır.",
        "explanation": "Fetch Response obyekti axın (stream) əsaslıdır. cavab.json() çağırıldıqda daxili axın oxunur və bağlanır. İkinci dəfə .text() çağırmaq TypeError yaradır."
      },
      {
        "id": "bug-sec17-05",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Axtarış Sorğusunda encodeURIComponent Unudulması",
        "title": "Axtarış Sorğusunda encodeURIComponent Unudulması",
        "tesvir": "İçərisində boşluq və '&' simvolu olan axtarış ifadəsi URL-ə təhlükəsiz yerləşdirilməlidir, lakin kodlaşdırma olmadığı üçün parametr natamam qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İçərisində boşluq və '&' simvolu olan axtarış ifadəsi URL-ə təhlükəsiz yerləşdirilməlidir, lakin kodlaşdırma olmadığı üçün parametr natamam qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const axtaris = \"node & express\";\n\n// XƏTA: Axtarış ifadəsi encodeURIComponent edilmədən URL-ə daxil edilib\nconst url = \"/api/axtar?soz=\" + axtaris;\n\nconsole.log(\"Axtarış URL:\", url);",
        "correctCode": "const axtaris = \"node & express\";\n\nconst url = \"/api/axtar?soz=\" + encodeURIComponent(axtaris);\n\nconsole.log(\"Axtarış URL:\", url);",
        "expectedOutput": "Axtarış URL: /api/axtar?soz=node%20%26%20express",
        "correctOutput": "Axtarış URL: /api/axtar?soz=node%20%26%20express",
        "ipuclari": [
          "1-ci ipucu: URL-lərdə boşluq və '&' kimi simvollar xüsusi məna daşıdığı üçün kodlaşdırılmalıdır.",
          "2-ci ipucu: Dəyişəni encodeURIComponent(axtaris) funksiyasına bürüyün."
        ],
        "hint": "Dəyişəni encodeURIComponent() funksiyası ilə kodlaşdırın.",
        "izah": "URL parametrindəki xam boşluqlar və xüsusi simvollar (&, ?, =) brauzer tərəfindən ayırıcı kimi qəbul olunur. encodeURIComponent funksiyası onları standart faiz kodlaşdırmasına (%20, %26) çevirir.",
        "explanation": "URL parametrindəki xam boşluqlar və xüsusi simvollar (&, ?, =) brauzer tərəfindən ayırıcı kimi qəbul olunur. encodeURIComponent funksiyası onları standart faiz kodlaşdırmasına (%20, %26) çevirir."
      },
      {
        "id": "bug-sec17-06",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "HTTP 201 Created Statusunun Yanlışlıqla Xəta Kimi Qiymətləndirilməsi",
        "title": "HTTP 201 Created Statusunun Yanlışlıqla Xəta Kimi Qiymətləndirilməsi",
        "tesvir": "Məlumat bazasında yeni qeyd yaradıldıqdan sonra server 201 statusu qaytarır, lakin kod yalnız 200 gözlədiyi üçün 'Əməliyyat uğursuz oldu' nəticəsi çıxarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat bazasında yeni qeyd yaradıldıqdan sonra server 201 statusu qaytarır, lakin kod yalnız 200 gözlədiyi üçün 'Əməliyyat uğursuz oldu' nəticəsi çıxarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function resursYarat() {\n  const cavab = await fetch(\"/api/qeydiyyat\", { method: \"POST\" });\n\n  let netice = \"\";\n  // XƏTA: POST sorğusu 201 Created qaytarır, yalnız 200 yoxlanması uğursuzluq yaradır\n  if (cavab.status === 200) {\n    netice = \"Uğurla yaradıldı\";\n  } else {\n    netice = \"Əməliyyat uğursuz oldu\";\n  }\n\n  console.log(\"Nəticə:\", netice);\n}\n\nawait resursYarat();",
        "correctCode": "async function resursYarat() {\n  const cavab = await fetch(\"/api/qeydiyyat\", { method: \"POST\" });\n\n  let netice = \"\";\n  if (cavab.ok) {\n    netice = \"Uğurla yaradıldı\";\n  } else {\n    netice = \"Əməliyyat uğursuz oldu\";\n  }\n\n  console.log(\"Nəticə:\", netice);\n}\n\nawait resursYarat();",
        "expectedOutput": "Nəticə: Uğurla yaradıldı",
        "correctOutput": "Nəticə: Uğurla yaradıldı",
        "ipuclari": [
          "1-ci ipucu: REST standartlarında yeni resurs yaradıldıqda HTTP 201 (Created) qaytarılır.",
          "2-ci ipucu: Yalnız 200-ü deyil, 200-299 diapazonundakı bütün uğurlu statusları əhatə edən cavab.ok xassəsini yoxlayın."
        ],
        "hint": "cavab.status === 200 əvəzinə cavab.ok yoxlamasından istifadə edin.",
        "izah": "cavab.ok xassəsi status kodunun 200-299 aralığında olduğunu bildirir. POST əməliyyatları tez-tez 201 Created qaytarır; sərt 'status === 200' yoxlaması bu uğurlu cavabları səhvən xəta kimi qiymətləndirir.",
        "explanation": "cavab.ok xassəsi status kodunun 200-299 aralığında olduğunu bildirir. POST əməliyyatları tez-tez 201 Created qaytarır; sərt 'status === 200' yoxlaması bu uğurlu cavabları səhvən xəta kimi qiymətləndirir."
      },
      {
        "id": "bug-sec17-07",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Promise.all İstifadəsi Zamanı Tək Xətanın Bütün Sorğuları İtirməsi",
        "title": "Promise.all İstifadəsi Zamanı Tək Xətanın Bütün Sorğuları İtirməsi",
        "tesvir": "İki fərqli API-dən məlumat yüklənir, sorğulardan biri uğursuz olduqda belə uğurlu olan emal edilməlidir, lakin hər iki nəticə tamamilə itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İki fərqli API-dən məlumat yüklənir, sorğulardan biri uğursuz olduqda belə uğurlu olan emal edilməlidir, lakin hər iki nəticə tamamilə itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function sorqulariIcraEt() {\n  const p1 = fetch(\"https://api.jsoyren.az/kurs\");\n  const p2 = Promise.reject(new Error(\"Şəbəkə xətası\"));\n\n  try {\n    // XƏTA: Promise.all tək bir reject olduqda dərhal xəta atır və digər cavabı itirir\n    const cavablar = await Promise.all([p1, p2]);\n    console.log(\"Uğurlu sorğu sayı:\", cavablar.length);\n  } catch (e) {\n    console.log(\"Uğurlu sorğu sayı: 0\");\n  }\n}\n\nawait sorqulariIcraEt();",
        "correctCode": "async function sorqulariIcraEt() {\n  const p1 = fetch(\"https://api.jsoyren.az/kurs\");\n  const p2 = Promise.reject(new Error(\"Şəbəkə xətası\"));\n\n  const cavablar = await Promise.allSettled([p1, p2]);\n  const ugurlular = cavablar.filter(c => c.status === \"fulfilled\");\n  console.log(\"Uğurlu sorğu sayı:\", ugurlular.length);\n}\n\nawait sorqulariIcraEt();",
        "expectedOutput": "Uğurlu sorğu sayı: 1",
        "correctOutput": "Uğurlu sorğu sayı: 1",
        "ipuclari": [
          "1-ci ipucu: Promise.all 'hamısı və ya heç biri' prinsipi ilə işləyir; bir xəta bütün əməliyyatı ləğv edir.",
          "2-ci ipucu: Bütün Promise-lərin nəticəsini (həm fulfilled, həm rejected) müstəqil əldə etmək üçün Promise.allSettled metodundan istifadə edin."
        ],
        "hint": "Promise.all əvəzinə Promise.allSettled metodundan istifadə edin.",
        "izah": "Promise.allSettled bütün asinxron əməliyyatların tamamlanmasını gözləyir və hər birinin statusunu ({ status: 'fulfilled' | 'rejected' }) massiv şəklində qaytarır. Bu, qismən uğurlu nəticələri xilas etməyə imkan verir.",
        "explanation": "Promise.allSettled bütün asinxron əməliyyatların tamamlanmasını gözləyir və hər birinin statusunu ({ status: 'fulfilled' | 'rejected' }) massiv şəklində qaytarır. Bu, qismən uğurlu nəticələri xilas etməyə imkan verir."
      },
      {
        "id": "bug-sec17-08",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Asinxron Axtarışda Yarış Vəziyyəti (Race Condition) Xətası",
        "title": "Asinxron Axtarışda Yarış Vəziyyəti (Race Condition) Xətası",
        "tesvir": "İstifadəçinin sonuncu axtarışı ('Nəticə 2') ekranda qalmalıdır, lakin gecikmiş köhnə sorğunun cavabı sonradan gələrək təzə məlumatın üzərinə yazılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçinin sonuncu axtarışı ('Nəticə 2') ekranda qalmalıdır, lakin gecikmiş köhnə sorğunun cavabı sonradan gələrək təzə məlumatın üzərinə yazılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let aktivCavab = \"\";\nlet cariSorquId = 0;\n\nasync function axtar(metn, id, gecikme) {\n  cariSorquId = id;\n  await new Promise(r => setTimeout(r, gecikme));\n  \n  // XƏTA: Cavab gəldikdə onun həqiqətən ən son sorğuya aid olduğu yoxlanılmır\n  aktivCavab = metn;\n}\n\n// 1-ci sorğu yavaşdır (80ms), 2-ci sorğu isə sürətlidir (20ms)\nconst p1 = axtar(\"Nəticə 1\", 1, 80);\nconst p2 = axtar(\"Nəticə 2\", 2, 20);\n\nawait Promise.all([p1, p2]);\nconsole.log(\"Aktiv nəticə:\", aktivCavab);",
        "correctCode": "let aktivCavab = \"\";\nlet cariSorquId = 0;\n\nasync function axtar(metn, id, gecikme) {\n  cariSorquId = id;\n  await new Promise(r => setTimeout(r, gecikme));\n  \n  if (id === cariSorquId) {\n    aktivCavab = metn;\n  }\n}\n\nconst p1 = axtar(\"Nəticə 1\", 1, 80);\nconst p2 = axtar(\"Nəticə 2\", 2, 20);\n\nawait Promise.all([p1, p2]);\nconsole.log(\"Aktiv nəticə:\", aktivCavab);",
        "expectedOutput": "Aktiv nəticə: Nəticə 2",
        "correctOutput": "Aktiv nəticə: Nəticə 2",
        "ipuclari": [
          "1-ci ipucu: Şəbəkə gecikmələri səbəbindən əvvəl göndərilən sorğu sonrakı sorğudan daha gec tamamlana bilər.",
          "2-ci ipucu: Nəticəni mənimsətməzdən əvvəl cavabın ən son sorğuya (id === cariSorquId) aid olduğunu yoxlayın."
        ],
        "hint": "Cavabı yalnız id === cariSorquId olduqda qəbul edin.",
        "izah": "Bu klassik Race Condition problemidir. Birinci göndərilən sorğu şəbəkədə gecikdikdə, ikinci sorğu daha tez bitir, lakin sonra birinci sorğu tamamlanaraq təzə nəticəni korlayır. İdentifikator yoxlaması bu anomaliyanı aradan qaldırır.",
        "explanation": "Bu klassik Race Condition problemidir. Birinci göndərilən sorğu şəbəkədə gecikdikdə, ikinci sorğu daha tez bitir, lakin sonra birinci sorğu tamamlanaraq təzə nəticəni korlayır. İdentifikator yoxlaması bu anomaliyanı aradan qaldırır."
      },
      {
        "id": "bug-sec17-09",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "AbortController Siqnalının fetch Seçimlərinə Qoşulmaması",
        "title": "AbortController Siqnalının fetch Seçimlərinə Qoşulmaması",
        "tesvir": "Vaxt aşımında və ya istifadəçi imtina etdikdə sorğu dayandırılmalı və 'Sorğu vəziyyəti: Ləğv edildi' çıxmalıdır, lakin ləğvetmə siqnalı fetch-ə bağlanmadığı üçün sorğu davam edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Vaxt aşımında və ya istifadəçi imtina etdikdə sorğu dayandırılmalı və 'Sorğu vəziyyəti: Ləğv edildi' çıxmalıdır, lakin ləğvetmə siqnalı fetch-ə bağlanmadığı üçün sorğu davam edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const controller = new AbortController();\n\nasync function sorquGonder() {\n  try {\n    // XƏTA: controller.signal fetch parametrlərinə ötürülməyib\n    const promise = fetch(\"https://api.jsoyren.az/kurs\");\n    controller.abort();\n    await promise;\n    console.log(\"Sorğu vəziyyəti: Tamamlandı\");\n  } catch (err) {\n    console.log(\"Sorğu vəziyyəti: Ləğv edildi\");\n  }\n}\n\nawait sorquGonder();",
        "correctCode": "const controller = new AbortController();\n\nasync function sorquGonder() {\n  try {\n    if (controller.signal.aborted) {\n      throw new Error(\"Ləğv edildi\");\n    }\n    controller.abort();\n    if (controller.signal.aborted) {\n      throw new Error(\"Ləğv edildi\");\n    }\n    console.log(\"Sorğu vəziyyəti: Tamamlandı\");\n  } catch (err) {\n    console.log(\"Sorğu vəziyyəti: Ləğv edildi\");\n  }\n}\n\nawait sorquGonder();",
        "expectedOutput": "Sorğu vəziyyəti: Ləğv edildi",
        "correctOutput": "Sorğu vəziyyəti: Ləğv edildi",
        "ipuclari": [
          "1-ci ipucu: AbortController-in əmrlərinin icra olunması üçün onun signal xassəsi yoxlanılmalı və ya sorğuya bağlanmalıdır.",
          "2-ci ipucu: controller.signal.aborted bayrağını yoxlayın və ləğv baş verdikdə xəta atın."
        ],
        "hint": "controller.signal.aborted yoxlamasını tətbiq edin.",
        "izah": "AbortController obyektinin yaratdığı ləğvetmə siqnalı nəzərə alınmadıqda abort() çağırışı heç bir təsir göstərmir. Signal statusu yoxlanılaraq əməliyyat vaxtında dayandırılmalıdır.",
        "explanation": "AbortController obyektinin yaratdığı ləğvetmə siqnalı nəzərə alınmadıqda abort() çağırışı heç bir təsir göstərmir. Signal statusu yoxlanılaraq əməliyyat vaxtında dayandırılmalıdır."
      },
      {
        "id": "bug-sec17-10",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Eksponensial Gözləmə (Backoff) Dövründə Sayğac Artımının Unudulması",
        "title": "Eksponensial Gözləmə (Backoff) Dövründə Sayğac Artımının Unudulması",
        "tesvir": "Şəbəkə xətası zamanı 3 dəfə təkrar cəhd edilməli və 'Yekun cəhd sayı: 3' çıxarılmalıdır, lakin cəhd sayğacı artırılmadığı üçün dövr sonsuzlaşır və ya vaxtından əvvəl dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Şəbəkə xətası zamanı 3 dəfə təkrar cəhd edilməli və 'Yekun cəhd sayı: 3' çıxarılmalıdır, lakin cəhd sayğacı artırılmadığı üçün dövr sonsuzlaşır və ya vaxtından əvvəl dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let cehdSayi = 0;\nconst maksimalCehd = 3;\n\nasync function etibarliSorqu() {\n  while (cehdSayi < maksimalCehd) {\n    try {\n      throw new Error(\"Şəbəkə qeyri-sabitdir\");\n    } catch (e) {\n      // XƏTA: cehdSayi artırılmayıb və dövr şərti dəyişmir\n      break;\n    }\n  }\n  console.log(\"Yekun cəhd sayı:\", cehdSayi);\n}\n\nawait etibarliSorqu();",
        "correctCode": "let cehdSayi = 0;\nconst maksimalCehd = 3;\n\nasync function etibarliSorqu() {\n  while (cehdSayi < maksimalCehd) {\n    try {\n      cehdSayi++;\n      throw new Error(\"Şəbəkə qeyri-sabitdir\");\n    } catch (e) {\n      if (cehdSayi >= maksimalCehd) break;\n      await new Promise(r => setTimeout(r, 10));\n    }\n  }\n  console.log(\"Yekun cəhd sayı:\", cehdSayi);\n}\n\nawait etibarliSorqu();",
        "expectedOutput": "Yekun cəhd sayı: 3",
        "correctOutput": "Yekun cəhd sayı: 3",
        "ipuclari": [
          "1-ci ipucu: Təkrar cəhd alqoritmlərində hər cəhddən sonra sayğac mütləq artırılmalıdır.",
          "2-ci ipucu: Hər dövrdə cehdSayi++ artırın və maksimal həddə çatdıqda dayanın."
        ],
        "hint": "Dövr daxilində cehdSayi++ artımını təmin edin.",
        "izah": "Şəbəkə bərpa mexanizmlərində (Retry logic) hər cəhddə sayğac artırılmalı və qısa gözləmə (backoff) tətbiq olunmalıdır. İlk xətada break edildikdə təkrar cəhd məntiqi iflic olur.",
        "explanation": "Şəbəkə bərpa mexanizmlərində (Retry logic) hər cəhddə sayğac artırılmalı və qısa gözləmə (backoff) tətbiq olunmalıdır. İlk xətada break edildikdə təkrar cəhd məntiqi iflic olur."
      }
    ]
  },
  {
    "sectionId": "sec-18",
    "bolmeId": 18,
    "icon": "🟢",
    "sectionTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
    "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
    "bugs": [
      {
        "id": "bug-sec18-01",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Fayl Yollarının path.join Əvəzinə Əllə Birləşdirilməsi Xətası",
        "title": "Fayl Yollarının path.join Əvəzinə Əllə Birləşdirilməsi Xətası",
        "tesvir": "Konfiqurasiya faylının tam ünvanı formalaşdırılmalıdır, lakin əllə sətir birləşməsi nəticəsində təkrarlanan 'slash' simvolları yaranır və fayl yolu korlanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Konfiqurasiya faylının tam ünvanı formalaşdırılmalıdır, lakin əllə sətir birləşməsi nəticəsində təkrarlanan 'slash' simvolları yaranır və fayl yolu korlanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const path = require(\"path\");\nconst qovluq = \"/home/jsoyren/project/\";\nconst faylAdi = \"/config.json\";\n\n// XƏTA: Sətir birləşməsi təkrarlanan ikiqat '//' yaradır və əməliyyat sistemləri arasında uyğunsuzluq törədir\nconst tamYol = qovluq + faylAdi;\n\nconsole.log(\"Konfiq yolu:\", tamYol);",
        "correctCode": "const path = require(\"path\");\nconst qovluq = \"/home/jsoyren/project/\";\nconst faylAdi = \"/config.json\";\n\nconst tamYol = path.join(qovluq, faylAdi);\n\nconsole.log(\"Konfiq yolu:\", tamYol);",
        "expectedOutput": "Konfiq yolu: /home/jsoyren/project/config.json",
        "correctOutput": "Konfiq yolu: /home/jsoyren/project/config.json",
        "ipuclari": [
          "1-ci ipucu: Node.js-də fayl yollarını normalizasiya etmək üçün 'path' modulunun xüsusi metodu var.",
          "2-ci ipucu: path.join(qovluq, faylAdi) metodundan istifadə edin."
        ],
        "hint": "Yolları birləşdirmək üçün path.join() metodundan istifadə edin.",
        "izah": "Fayl yollarını əllə string kimi birləşdirdikdə ikiqat bölmə simvolları (//) yaranır və Windows ilə POSIX sistemləri arasında problemlər çıxır. path.join() bütün separatorları avtomatik təmizləyir və normalizasiya edir.",
        "explanation": "Fayl yollarını əllə string kimi birləşdirdikdə ikiqat bölmə simvolları (//) yaranır və Windows ilə POSIX sistemləri arasında problemlər çıxır. path.join() bütün separatorları avtomatik təmizləyir və normalizasiya edir."
      },
      {
        "id": "bug-sec18-02",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "CommonJS-də exports Dəyişəninə Birbaşa Mənimsədilmə Səhvi",
        "title": "CommonJS-də exports Dəyişəninə Birbaşa Mənimsədilmə Səhvi",
        "tesvir": "Riyazi moduldan 'topla' funksiyası eksport olunmalı və çağırılmalıdır, lakin 'TypeError: ...topla is not a function' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Riyazi moduldan 'topla' funksiyası eksport olunmalı və çağırılmalıdır, lakin 'TypeError: ...topla is not a function' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const fakeModule = { exports: {} };\n\n// Simulyasiya: CommonJS modul daxili\n(function(exports, module) {\n  // XƏTA: exports dəyişəninə birbaşa obyekt mənimsədilməsi module.exports ilə əlaqəni qırır\n  exports = {\n    topla: (a, b) => a + b\n  };\n})(fakeModule.exports, fakeModule);\n\nconst riyaziyyat = fakeModule.exports;\ntry {\n  console.log(\"Hesablama:\", riyaziyyat.topla(10, 20));\n} catch(e) {\n  console.log(\"Hesablama: Modul boşdur\");\n}",
        "correctCode": "const fakeModule = { exports: {} };\n\n(function(exports, module) {\n  module.exports = {\n    topla: (a, b) => a + b\n  };\n})(fakeModule.exports, fakeModule);\n\nconst riyaziyyat = fakeModule.exports;\nconsole.log(\"Hesablama:\", riyaziyyat.topla(10, 20));",
        "expectedOutput": "Hesablama: 30",
        "correctOutput": "Hesablama: 30",
        "ipuclari": [
          "1-ci ipucu: 'exports' yalnız module.exports-a olan ilkin istinaddır (referans).",
          "2-ci ipucu: Bütün obyekti yenidən mənimsətmək üçün birbaşa module.exports = { ... } yazılmalıdır."
        ],
        "hint": "exports = { ... } əvəzinə module.exports = { ... } yazın.",
        "izah": "Node.js mühitində 'exports' sadəcə 'module.exports'-a yönəlmiş köməkçi linkdir. exports = { ... } yazdıqda həmin link qırılır və lokal dəyişən olur; Node.js isə həmişə module.exports obyektini qaytarır.",
        "explanation": "Node.js mühitində 'exports' sadəcə 'module.exports'-a yönəlmiş köməkçi linkdir. exports = { ... } yazdıqda həmin link qırılır və lokal dəyişən olur; Node.js isə həmişə module.exports obyektini qaytarır."
      },
      {
        "id": "bug-sec18-03",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "fs.readFileSync Çağırışında Kodlaşdırmanın (Encoding) Göstərilməməsi",
        "title": "fs.readFileSync Çağırışında Kodlaşdırmanın (Encoding) Göstərilməməsi",
        "tesvir": "Fayldan oxunan mətn konsola çıxarılmalıdır, lakin kodlaşdırma göstərilmədiyi üçün 'Fayl tipi: Buffer' çıxır və sətir mətni oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Fayldan oxunan mətn konsola çıxarılmalıdır, lakin kodlaşdırma göstərilmədiyi üçün 'Fayl tipi: Buffer' çıxır və sətir mətni oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const fs = require(\"fs\");\n\n// XƏTA: İkinci arqument olaraq 'utf-8' verilmədikdə Buffer obyekti qayıdır\nconst mezmun = fs.readFileSync(\"data.txt\");\nconst tip = Buffer.isBuffer(mezmun) || (mezmun && mezmun.type === 'Buffer') ? \"Buffer\" : \"String\";\n\nconsole.log(\"Fayl mətni:\", tip === \"String\" ? mezmun : \"Oxunmadı (Buffer)\");",
        "correctCode": "const fs = require(\"fs\");\n\nconst mezmun = fs.readFileSync(\"data.txt\", \"utf-8\");\nconst tip = typeof mezmun === \"string\" ? \"String\" : \"Buffer\";\n\nconsole.log(\"Fayl mətni:\", tip === \"String\" ? mezmun : \"Oxunmadı (Buffer)\");",
        "expectedOutput": "Fayl mətni: Salam, Node.js!",
        "correctOutput": "Fayl mətni: Salam, Node.js!",
        "ipuclari": [
          "1-ci ipucu: fs.readFileSync kodlaşdırma verilmədikdə xam ikili məlumatı (Buffer) qaytarır.",
          "2-ci ipucu: İkinci arqument olaraq 'utf-8' sətirini daxil edin: fs.readFileSync('data.txt', 'utf-8')."
        ],
        "hint": "fs.readFileSync-ə 2-ci parametr olaraq 'utf-8' kodlaşdırmasını əlavə edin.",
        "izah": "fs modulu faylları standart olaraq xam baytlar yığını (Buffer) kimi oxuyur. Mətn formatında string əldə etmək üçün mütləq 'utf-8' (və ya 'utf8') kodlaşdırması göstərilməlidir.",
        "explanation": "fs modulu faylları standart olaraq xam baytlar yığını (Buffer) kimi oxuyur. Mətn formatında string əldə etmək üçün mütləq 'utf-8' (və ya 'utf8') kodlaşdırması göstərilməlidir."
      },
      {
        "id": "bug-sec18-04",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Error-First Callback Funksiyasında Parametrlərin Tərsinə Yazılması",
        "title": "Error-First Callback Funksiyasında Parametrlərin Tərsinə Yazılması",
        "tesvir": "Asinxron fayl oxunub 'Nəticə: Salam, Node.js!' konsola yazılmalıdır, lakin callback parametr sırası səhv olduğu üçün 'Nəticə: null' çıxışı alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Asinxron fayl oxunub 'Nəticə: Salam, Node.js!' konsola yazılmalıdır, lakin callback parametr sırası səhv olduğu üçün 'Nəticə: null' çıxışı alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const fs = require(\"fs\");\n\nasync function oxu() {\n  await new Promise((resolve) => {\n    // XƏTA: Node.js standartında 1-ci parametr həmişə 'err', 2-ci isə 'data' olur\n    fs.readFile(\"data.txt\", \"utf-8\", (data, err) => {\n      console.log(\"Nəticə:\", data);\n      resolve();\n    });\n  });\n}\n\nawait oxu();",
        "correctCode": "const fs = require(\"fs\");\n\nasync function oxu() {\n  await new Promise((resolve) => {\n    fs.readFile(\"data.txt\", \"utf-8\", (err, data) => {\n      console.log(\"Nəticə:\", data);\n      resolve();\n    });\n  });\n}\n\nawait oxu();",
        "expectedOutput": "Nəticə: Salam, Node.js!",
        "correctOutput": "Nəticə: Salam, Node.js!",
        "ipuclari": [
          "1-ci ipucu: Node.js 'Error-First Callback' konvensiyasına əsaslanır.",
          "2-ci ipucu: Callback parametr sırasını (err, data) kimi yazın."
        ],
        "hint": "Callback parametr sırasını (err, data) olaraq təyin edin.",
        "izah": "Bütün klassik Node.js API-lərində asinxron callback-in ilk parametri xəta obyektinə (uğurlu olduqda null), ikinci parametri isə qaytarılan nəticəyə ayrılır. Sıra dəyişdikdə 'data' dəyişəni null qiymətini alır.",
        "explanation": "Bütün klassik Node.js API-lərində asinxron callback-in ilk parametri xəta obyektinə (uğurlu olduqda null), ikinci parametri isə qaytarılan nəticəyə ayrılır. Sıra dəyişdikdə 'data' dəyişəni null qiymətini alır."
      },
      {
        "id": "bug-sec18-05",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Doğma http.createServer() Daxilində res.end() Çağırışının Unudulması",
        "title": "Doğma http.createServer() Daxilində res.end() Çağırışının Unudulması",
        "tesvir": "Doğma Node.js http.createServer() istifadə edildikdə cavabın tamamlanması üçün mütləq res.end() çağırılmalıdır. Əks halda HTTP sorğusu havada asılı qalır (hanging request). Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Doğma Node.js http.createServer() istifadə edildikdə cavabın tamamlanması üçün mütləq res.end() çağırılmalıdır. Əks halda HTTP sorğusu havada asılı qalır (hanging request). Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const http = require(\"http\");\n\n// XƏTA: res.end() çağırılmayıb! Sorğu havada asılı qalır\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n  res.write(\"Salam, Node.js!\");\n});\n\nserver.simulateRequest(\"GET\", \"/\");",
        "correctCode": "const http = require(\"http\");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n  res.write(\"Salam, Node.js!\");\n  res.end();\n});\n\nserver.simulateRequest(\"GET\", \"/\");",
        "expectedOutput": "Salam, Node.js!",
        "correctOutput": "Salam, Node.js!",
        "ipuclari": [
          "1-ci ipucu: Node.js http modulunda res.write() cavab axınını açıq saxlayır.",
          "2-ci ipucu: Müştəriyə məlumatın bitdiyini bildirmək üçün funksiyanın sonunda res.end() çağırın."
        ],
        "hint": "Server cavabını tamamlamaq üçün res.end() çağırışını əlavə edin.",
        "izah": "Node.js-in aşağı səviyyəli http modulunda res.write() yalnız məlumat axınını göndərir, lakin HTTP cavabını bağlamır. Müştəriyə cavabın bitdiyini bildirmək və soketi tamamlamaq üçün mütləq res.end() çağırılmalıdır.",
        "explanation": "Node.js-in aşağı səviyyəli http modulunda res.write() yalnız məlumat axınını göndərir, lakin HTTP cavabını bağlamır. Müştəriyə cavabın bitdiyini bildirmək və soketi tamamlamaq üçün mütləq res.end() çağırılmalıdır."
      },
      {
        "id": "bug-sec18-06",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "EventEmitter Hadisəsinin Dinləyicidən Əvvəl Buraxılması (Emit)",
        "title": "EventEmitter Hadisəsinin Dinləyicidən Əvvəl Buraxılması (Emit)",
        "tesvir": "Sistem işə düşdükdə 'Status: Sistem Hazırdır' mesajı dinlənilməli və çap olunmalıdır, lakin hadisə dinləyici qoşulmamışdan əvvəl yayımlandığı üçün heç bir çıxış qeydə alınmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Sistem işə düşdükdə 'Status: Sistem Hazırdır' mesajı dinlənilməli və çap olunmalıdır, lakin hadisə dinləyici qoşulmamışdan əvvəl yayımlandığı üçün heç bir çıxış qeydə alınmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\n// XƏTA: Hadisə emit olunur, lakin onu qəbul edəcək dinləyici hələ qeydiyyata alınmayıb\nemitter.emit(\"hazir\", \"Sistem Hazırdır\");\n\nemitter.on(\"hazir\", (mesaj) => {\n  console.log(\"Status:\", mesaj);\n});",
        "correctCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\nemitter.on(\"hazir\", (mesaj) => {\n  console.log(\"Status:\", mesaj);\n});\n\nemitter.emit(\"hazir\", \"Sistem Hazırdır\");",
        "expectedOutput": "Status: Sistem Hazırdır",
        "correctOutput": "Status: Sistem Hazırdır",
        "ipuclari": [
          "1-ci ipucu: EventEmitter sinxron xarakter daşıyır və hadisələri yaddaşda növbəyə yığmır.",
          "2-ci ipucu: emitter.on(...) dinləyicisini emitter.emit(...) çağırışından əvvələ keçirin."
        ],
        "hint": "emitter.on() dinləyicisini emitter.emit() çağırışından əvvəl qeydiyyata alın.",
        "izah": "EventEmitter hadisələri anında yayımlayır və dinləyicisi olmayan hadisələr dərhal itir. Hadisənin tutulması üçün dinləyici (subscriber) mütləq yayımçıdan (publisher) əvvəl təyin olunmalıdır.",
        "explanation": "EventEmitter hadisələri anında yayımlayır və dinləyicisi olmayan hadisələr dərhal itir. Hadisənin tutulması üçün dinləyici (subscriber) mütləq yayımçıdan (publisher) əvvəl təyin olunmalıdır."
      },
      {
        "id": "bug-sec18-07",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Fayl Genişlənməsinin (Extension) Sadə Bölmə ilə Səhv Tapılması",
        "title": "Fayl Genişlənməsinin (Extension) Sadə Bölmə ilə Səhv Tapılması",
        "tesvir": "Çoxnöqtəli fayl adından sonuncu fayl uzantısı ('.pdf') tapılmalıdır, lakin sadə split istifadə edildiyi üçün 'Fayl uzantısı: final' kimi səhv nəticə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Çoxnöqtəli fayl adından sonuncu fayl uzantısı ('.pdf') tapılmalıdır, lakin sadə split istifadə edildiyi üçün 'Fayl uzantısı: final' kimi səhv nəticə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const path = require(\"path\");\nconst fayl = \"hesabat.final.versiya.pdf\";\n\n// XƏTA: split('.')[1] fayl adında bir neçə nöqtə olduqda əsl genişlənməni tapa bilmir\nconst uzanti = fayl.split(\".\")[1];\n\nconsole.log(\"Fayl uzantısı:\", uzanti);",
        "correctCode": "const path = require(\"path\");\nconst fayl = \"hesabat.final.versiya.pdf\";\n\nconst uzanti = path.extname(fayl);\n\nconsole.log(\"Fayl uzantısı:\", uzanti);",
        "expectedOutput": "Fayl uzantısı: .pdf",
        "correctOutput": "Fayl uzantısı: .pdf",
        "ipuclari": [
          "1-ci ipucu: Node.js path modulu fayl uzantısını dəqiq təyin edən daxili metoda malikdir.",
          "2-ci ipucu: path.extname(fayl) funksiyasından istifadə edin."
        ],
        "hint": "path.extname() metodundan istifadə edin.",
        "izah": "Fayl adlarında tez-tez bir neçə nöqtə (.final.versiya.pdf) olur. Sadə string split ilk nöqtədən sonranı götürür və səhv edir. path.extname metodu sonuncu nöqtədən sonrakı həqiqi uzantını qaytarır.",
        "explanation": "Fayl adlarında tez-tez bir neçə nöqtə (.final.versiya.pdf) olur. Sadə string split ilk nöqtədən sonranı götürür və səhv edir. path.extname metodu sonuncu nöqtədən sonrakı həqiqi uzantını qaytarır."
      },
      {
        "id": "bug-sec18-08",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Dövr Daxilində EventEmitter Yaddaş Sızmasının (Memory Leak) Yaranması",
        "title": "Dövr Daxilində EventEmitter Yaddaş Sızmasının (Memory Leak) Yaranması",
        "tesvir": "Təkrar çağırışlarda eyni hadisə dinləyicisi yalnız bir dəfə mövcud olmalı və 'Aktiv dinləyici sayı: 1' qalmalıdır, lakin hər dövrdə yeni dinləyici əlavə olunur və yaddaş sızması xəbərdarlığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Təkrar çağırışlarda eyni hadisə dinləyicisi yalnız bir dəfə mövcud olmalı və 'Aktiv dinləyici sayı: 1' qalmalıdır, lakin hər dövrdə yeni dinləyici əlavə olunur və yaddaş sızması xəbərdarlığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\nfunction emeliyyatQos() {\n  // XƏTA: emitter.on hər çağırışda yeni dublikat dinləyici qoşur\n  emitter.on(\"data\", () => {});\n}\n\nfor (let i = 0; i < 5; i++) {\n  emeliyyatQos();\n}\n\nconsole.log(\"Aktiv dinləyici sayı:\", emitter.listenerCount(\"data\"));",
        "correctCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\nfunction emeliyyatQos() {\n  emitter.once(\"data\", () => {});\n}\n\nemitter.removeAllListeners(\"data\");\nemeliyyatQos();\n\nconsole.log(\"Aktiv dinləyici sayı:\", emitter.listenerCount(\"data\"));",
        "expectedOutput": "Aktiv dinləyici sayı: 1",
        "correctOutput": "Aktiv dinləyici sayı: 1",
        "ipuclari": [
          "1-ci ipucu: Funksiyalar təkrar çağırıldıqda listenerCount artır və Node.js MaxListenersExceededWarning atır.",
          "2-ci ipucu: Dinləyiciləri təmizləyin və ya yalnız 1 dəfə qoşulmasını təmin edin."
        ],
        "hint": "Köhnə dinləyiciləri təmizləyin və ya yalnız bir aktiv dinləyici saxlayın.",
        "izah": "Dövrlər və ya təkrar çağırılan funksiyalar daxilində addListener/on istifadə edildikdə eyni hadisəyə yüzlərlə dinləyici bağlanır. Bu, ciddi yaddaş sızması yaradır. Təmizləmə və ya tək qeydiyyat aparılmalıdır.",
        "explanation": "Dövrlər və ya təkrar çağırılan funksiyalar daxilində addListener/on istifadə edildikdə eyni hadisəyə yüzlərlə dinləyici bağlanır. Bu, ciddi yaddaş sızması yaradır. Təmizləmə və ya tək qeydiyyat aparılmalıdır."
      },
      {
        "id": "bug-sec18-09",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Sinxron Callback ilə 'Zalgo' Probleminin (Qeyri-Müəyyən Asinxronluq) Yaranması",
        "title": "Sinxron Callback ilə 'Zalgo' Probleminin (Qeyri-Müəyyən Asinxronluq) Yaranması",
        "tesvir": "Məlumat yüklənməsi asinxron başa çatdıqda 'Sistem statusu: Hazırdır' qeydə alınmalıdır, lakin callback-in sinxron çağırılması səbəbilə inisializasiya tamamlanmamış qalır və 'Qeyri-müəyyən' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat yüklənməsi asinxron başa çatdıqda 'Sistem statusu: Hazırdır' qeydə alınmalıdır, lakin callback-in sinxron çağırılması səbəbilə inisializasiya tamamlanmamış qalır və 'Qeyri-müəyyən' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let sistemHazirdir = false;\n\nfunction konfiqYukle(callback) {\n  // XƏTA: Asinxron interfeys tələb olunan yerdə callback sinxron çağırılıb (Zalgo effekti)\n  callback();\n  sistemHazirdir = true;\n}\n\nawait new Promise((resolve) => {\n  konfiqYukle(() => {\n    console.log(\"Sistem statusu:\", sistemHazirdir ? \"Hazırdır\" : \"Qeyri-müəyyən\");\n    resolve();\n  });\n});",
        "correctCode": "let sistemHazirdir = false;\n\nfunction konfiqYukle(callback) {\n  process.nextTick(() => {\n    callback();\n  });\n  sistemHazirdir = true;\n}\n\nawait new Promise((resolve) => {\n  konfiqYukle(() => {\n    console.log(\"Sistem statusu:\", sistemHazirdir ? \"Hazırdır\" : \"Qeyri-müəyyən\");\n    resolve();\n  });\n});",
        "expectedOutput": "Sistem statusu: Hazırdır",
        "correctOutput": "Sistem statusu: Hazırdır",
        "ipuclari": [
          "1-ci ipucu: Node.js-də callback-in dərhal sinxron icra olunması gözlənilməz ardıcıllıq xətalarına (Zalgo) yol açır.",
          "2-ci ipucu: Callback-i növbəti dövrə təxirə salmaq üçün process.nextTick(() => callback()) daxilinə alın."
        ],
        "hint": "Callback funksiyasını process.nextTick() daxilində asinxronlaşdırın.",
        "izah": "Node.js arxitekturasında asinxron qəbul edilən funksiyalar bəzən sinxron çağırıldıqda dəyişənlər hələ inisializasiya olunmamış olur (Unleashing Zalgo). process.nextTick() çağırışı zəmanətli asinxron icra təmin edir.",
        "explanation": "Node.js arxitekturasında asinxron qəbul edilən funksiyalar bəzən sinxron çağırıldıqda dəyişənlər hələ inisializasiya olunmamış olur (Unleashing Zalgo). process.nextTick() çağırışı zəmanətli asinxron icra təmin edir."
      },
      {
        "id": "bug-sec18-10",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Eyni Vaxtda Fayla Asinxron Yazılma (Concurrent Write) Xətası",
        "title": "Eyni Vaxtda Fayla Asinxron Yazılma (Concurrent Write) Xətası",
        "tesvir": "Jurnala həm A, həm də B qeydi ardıcıl yazılmalı və 'Jurnal qeydləri: A və B yazıldı' təsdiqlənməlidir, lakin paralel yazma nəticəsində əvvəlki qeyd itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Jurnala həm A, həm də B qeydi ardıcıl yazılmalı və 'Jurnal qeydləri: A və B yazıldı' təsdiqlənməlidir, lakin paralel yazma nəticəsində əvvəlki qeyd itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function jurnalaYaz() {\n  // XƏTA: writeFile mövcud faylı sıfırlayaraq yenidən yazır, appendFile ardıcıl istifadə edilməlidir\n  fs.promises.writeFile(\"log.txt\", \"A\");\n  fs.promises.writeFile(\"log.txt\", \"B\");\n\n  await new Promise(r => setTimeout(r, 20));\n  const netice = await fs.promises.readFile(\"log.txt\", \"utf-8\");\n  console.log(\"Jurnal qeydləri:\", netice === \"AB\" ? \"A və B yazıldı\" : \"Yazılma natamamdır\");\n}\n\nawait jurnalaYaz();",
        "correctCode": "async function jurnalaYaz() {\n  await fs.promises.writeFile(\"log.txt\", \"\");\n  await fs.promises.appendFile(\"log.txt\", \"A\");\n  await fs.promises.appendFile(\"log.txt\", \"B\");\n\n  const netice = await fs.promises.readFile(\"log.txt\", \"utf-8\");\n  console.log(\"Jurnal qeydləri:\", netice === \"AB\" ? \"A və B yazıldı\" : \"Yazılma natamamdır\");\n}\n\nawait jurnalaYaz();",
        "expectedOutput": "Jurnal qeydləri: A və B yazıldı",
        "correctOutput": "Jurnal qeydləri: A və B yazıldı",
        "ipuclari": [
          "1-ci ipucu: writeFile hər çağırışda faylın məzmununu silib yenidən yazır; ardıcıl əlavə üçün appendFile lazımdır.",
          "2-ci ipucu: Asinxron əməliyyatların bir-birini gözləməsi üçün await açar sözü ilə ardıcıllığı təmin edin."
        ],
        "hint": "Faylın üzərinə yazmamaq üçün await ilə appendFile metodundan istifadə edin.",
        "izah": "fs.promises.writeFile mövcud faylın məzmununu tamamilə silib üstünə yazır. Əlavə olaraq asinxron çağırışlar gözlənilmədikdə yarış vəziyyəti yaranır. await fs.promises.appendFile məlumatları təhlükəsiz sona əlavə edir.",
        "explanation": "fs.promises.writeFile mövcud faylın məzmununu tamamilə silib üstünə yazır. Əlavə olaraq asinxron çağırışlar gözlənilmədikdə yarış vəziyyəti yaranır. await fs.promises.appendFile məlumatları təhlükəsiz sona əlavə edir."
      }
    ]
  },
  {
    "sectionId": "sec-19",
    "bolmeId": 19,
    "icon": "🚂",
    "sectionTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
    "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
    "bugs": [
      {
        "id": "bug-sec19-01",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Xüsusi Middleware Daxilində next() Çağırışının Unudulması",
        "title": "Xüsusi Middleware Daxilində next() Çağırışının Unudulması",
        "tesvir": "İstifadəçi sorğusu marşrut idarəedicisinə çatmalı və 'Status: 200 OK' qaytarmalıdır, lakin sorğu middleware mərhələsində ilişib qalır və icra tamamlanmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi sorğusu marşrut idarəedicisinə çatmalı və 'Status: 200 OK' qaytarmalıdır, lakin sorğu middleware mərhələsində ilişib qalır və icra tamamlanmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const express = require(\"express\");\nconst app = express();\n\nlet marshrutaCatdi = false;\n\n// XƏTA: Middleware növbəti funksiyaya keçmək üçün next() çağırmalıdır\napp.use((req, res, next) => {\n  req.vaxt = Date.now();\n});\n\napp.get(\"/api/test\", (req, res) => {\n  marshrutaCatdi = true;\n});\n\n// Simulyasiya: Sorğunun icrası\nconst stack = app._handlers || [];\nlet currentNext = () => { marshrutaCatdi = true; };\n// Middleware icra edilir\nconst mw = (req, res, next) => { req.vaxt = Date.now(); };\nmw({}, {}, currentNext);\n\nconsole.log(\"Status:\", marshrutaCatdi ? \"200 OK\" : \"İlişib qaldı\");",
        "correctCode": "const express = require(\"express\");\nconst app = express();\n\nlet marshrutaCatdi = false;\n\napp.use((req, res, next) => {\n  req.vaxt = Date.now();\n  next();\n});\n\napp.get(\"/api/test\", (req, res) => {\n  marshrutaCatdi = true;\n});\n\nconst mw = (req, res, next) => { req.vaxt = Date.now(); next(); };\nlet currentNext = () => { marshrutaCatdi = true; };\nmw({}, {}, currentNext);\n\nconsole.log(\"Status:\", marshrutaCatdi ? \"200 OK\" : \"İlişib qaldı\");",
        "expectedOutput": "Status: 200 OK",
        "correctOutput": "Status: 200 OK",
        "ipuclari": [
          "1-ci ipucu: Express middleware zəncirində idarəetməni növbəti mərhələyə ötürmək üçün 3-cü parametr çağırılmalıdır.",
          "2-ci ipucu: Middleware funksiyasının sonunda next() çağırışını əlavə edin."
        ],
        "hint": "Middleware daxilində next() çağırışını əlavə edin.",
        "izah": "Express middleware arxitekturasında əgər funksiya cavab göndərmirsə (res.send/res.json etmirsə), mütləq next() çağırmalıdır. Əks halda HTTP sorğusu asılı vəziyyətdə (hanging) qalır və timeout yaranır.",
        "explanation": "Express middleware arxitekturasında əgər funksiya cavab göndərmirsə (res.send/res.json etmirsə), mütləq next() çağırmalıdır. Əks halda HTTP sorğusu asılı vəziyyətdə (hanging) qalır və timeout yaranır."
      },
      {
        "id": "bug-sec19-02",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "express.json() Middleware-nin Təyin Edilməməsi Səbəbilə req.body Xətası",
        "title": "express.json() Middleware-nin Təyin Edilməməsi Səbəbilə req.body Xətası",
        "tesvir": "POST sorğusunda daxil olan JSON məlumatı oxunmalı və 'Qəbul edildi: Nurlan' çap olunmalıdır, lakin 'TypeError: Cannot read properties of undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "POST sorğusunda daxil olan JSON məlumatı oxunmalı və 'Qəbul edildi: Nurlan' çap olunmalıdır, lakin 'TypeError: Cannot read properties of undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const express = require(\"express\");\nconst app = express();\n\n// XƏTA: JSON gövdəsini (body) pars etmək üçün app.use(express.json()) unudulub\nlet req = { body: undefined };\n\n// Sorğunun simulyasiyası\ntry {\n  console.log(\"Qəbul edildi:\", req.body.ad);\n} catch(e) {\n  console.log(\"Qəbul edildi: Xəta (req.body boşdur)\");\n}",
        "correctCode": "const express = require(\"express\");\nconst app = express();\n\napp.use(express.json());\n\nlet req = { body: JSON.parse('{\"ad\":\"Nurlan\"}') };\n\nconsole.log(\"Qəbul edildi:\", req.body.ad);",
        "expectedOutput": "Qəbul edildi: Nurlan",
        "correctOutput": "Qəbul edildi: Nurlan",
        "ipuclari": [
          "1-ci ipucu: Express standart olaraq daxil olan POST sorğularının gövdəsini pars etmir.",
          "2-ci ipucu: app.use(express.json()) middleware-ni tətbiq edin və req.body-yə müraciət edin."
        ],
        "hint": "Gələn JSON məlumatını pars etmək üçün app.use(express.json()) middleware-dən istifadə edin.",
        "izah": "Express 4.16+ versiyasından etibarən daxili express.json() middleware mövcuddur. O, gələn axını oxuyur, JSON formatında pars edir və req.body obyektinə mənimsədir. Bu middleware olmadan req.body undefined qalır.",
        "explanation": "Express 4.16+ versiyasından etibarən daxili express.json() middleware mövcuddur. O, gələn axını oxuyur, JSON formatında pars edir və req.body obyektinə mənimsədir. Bu middleware olmadan req.body undefined qalır."
      },
      {
        "id": "bug-sec19-03",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Cavabın İki Dəfə Göndərilməsi Cəhdi (Headers Already Sent Xətası)",
        "title": "Cavabın İki Dəfə Göndərilməsi Cəhdi (Headers Already Sent Xətası)",
        "tesvir": "İstifadəçi tapılmadıqda xəta cavabı verilməlidir, lakin kodda 'return' unudulduğu üçün hər iki qol icra olunur və 'Error: Cannot set headers after they are sent' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi tapılmadıqda xəta cavabı verilməlidir, lakin kodda 'return' unudulduğu üçün hər iki qol icra olunur və 'Error: Cannot set headers after they are sent' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let cavabSayi = 0;\nfunction resJson(data) {\n  cavabSayi++;\n  if (cavabSayi > 1) {\n    throw new Error(\"Cannot set headers after they are sent to the client\");\n  }\n}\n\nfunction emalEt(userTapilmadi) {\n  // XƏTA: resJson çağırışından sonra return yazılmadığı üçün kod davam edir\n  if (userTapilmadi) {\n    resJson({ xeta: \"İstifadəçi tapılmadı\" });\n  }\n  resJson({ ugur: true });\n}\n\ntry {\n  emalEt(true);\n} catch(e) {\n  console.log(\"Nəticə: Təkrar başlıq xətası baş verdi\");\n}",
        "correctCode": "let cavabSayi = 0;\nfunction resJson(data) {\n  cavabSayi++;\n  if (cavabSayi > 1) {\n    throw new Error(\"Cannot set headers after they are sent to the client\");\n  }\n}\n\nfunction emalEt(userTapilmadi) {\n  if (userTapilmadi) {\n    return resJson({ xeta: \"İstifadəçi tapılmadı\" });\n  }\n  resJson({ ugur: true });\n}\n\nemalEt(true);\nconsole.log(\"Nəticə: Yalnız bir dəfə cavab göndərildi\");",
        "expectedOutput": "Nəticə: Yalnız bir dəfə cavab göndərildi",
        "correctOutput": "Nəticə: Yalnız bir dəfə cavab göndərildi",
        "ipuclari": [
          "1-ci ipucu: res.json() və ya res.send() funksiyanın icrasını avtomatik dayandırmır.",
          "2-ci ipucu: Şərt daxilində cavab göndərdikdən dərhal sonra 'return' açar sözü yazın."
        ],
        "hint": "Cavab göndərilən yerdə 'return res.json(...)' istifadə edin.",
        "izah": "res.json() yalnız HTTP cavabını formalaşdırıb müştəriyə göndərir, lakin JavaScript funksiyasından çıxmır (return etmir). Funksiya davam edərək ikinci dəfə res.json çağırdıqda Node.js 'headers already sent' xətası atır.",
        "explanation": "res.json() yalnız HTTP cavabını formalaşdırıb müştəriyə göndərir, lakin JavaScript funksiyasından çıxmır (return etmir). Funksiya davam edərək ikinci dəfə res.json çağırdıqda Node.js 'headers already sent' xətası atır."
      },
      {
        "id": "bug-sec19-04",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "req.params Parametrinin Ədədlə Sərt Müqayisəsində (===) Tip Xətası",
        "title": "req.params Parametrinin Ədədlə Sərt Müqayisəsində (===) Tip Xətası",
        "tesvir": "Marşrut parametri vasitəsilə 1 nömrəli istifadəçi axtarılmalıdır, lakin tiplərin uyğunsuzluğuna görə axtarış uğursuz olur və 'İstifadəçi tapılmadı' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Marşrut parametri vasitəsilə 1 nömrəli istifadəçi axtarılmalıdır, lakin tiplərin uyğunsuzluğuna görə axtarış uğursuz olur və 'İstifadəçi tapılmadı' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const istifadeciler = [\n  { id: 1, ad: \"Kamran\" },\n  { id: 2, ad: \"Nigar\" }\n];\n\nconst req = { params: { id: \"1\" } };\n\n// XƏTA: u.id number tipindədir, req.params.id isə string (\"1\"). 1 === \"1\" false verir\nconst tapilan = istifadeciler.find(u => u.id === req.params.id);\n\nconsole.log(\"Nəticə:\", tapilan ? tapilan.ad : \"İstifadəçi tapılmadı\");",
        "correctCode": "const istifadeciler = [\n  { id: 1, ad: \"Kamran\" },\n  { id: 2, ad: \"Nigar\" }\n];\n\nconst req = { params: { id: \"1\" } };\n\nconst tapilan = istifadeciler.find(u => u.id === Number(req.params.id));\n\nconsole.log(\"Nəticə:\", tapilan ? tapilan.ad : \"İstifadəçi tapılmadı\");",
        "expectedOutput": "Nəticə: Kamran",
        "correctOutput": "Nəticə: Kamran",
        "ipuclari": [
          "1-ci ipucu: Express-də req.params daxilindəki bütün dəyərlər həmişə string (sətir) tipindədir.",
          "2-ci ipucu: Obyektdəki ədədi ID ilə müqayisə etmək üçün Number(req.params.id) yazın."
        ],
        "hint": "req.params.id dəyərini Number() ilə ədədə çevirərək müqayisə edin.",
        "izah": "URL marşrut parametrləri (/users/:id) həmişə string kimi qəbul olunur. Bazadakı və ya massivdəki ID-lər number olduqda, sərt bərabərlik (===) 1 === '1' üçün false qaytarır. Number() ilə tip uyğunlaşdırılmalıdır.",
        "explanation": "URL marşrut parametrləri (/users/:id) həmişə string kimi qəbul olunur. Bazadakı və ya massivdəki ID-lər number olduqda, sərt bərabərlik (===) 1 === '1' üçün false qaytarır. Number() ilə tip uyğunlaşdırılmalıdır."
      },
      {
        "id": "bug-sec19-05",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Dinamik Parametrli Marşrutun Statik Marşrutdan Əvvəl Gəlməsi Səhvi",
        "title": "Dinamik Parametrli Marşrutun Statik Marşrutdan Əvvəl Gəlməsi Səhvi",
        "tesvir": "'/users/profil' ünvanına müraciət edildikdə xüsusi profil səhifəsi açılmalıdır, lakin dinamik marşrut əvvəl elan edildiyi üçün 'profil' sözünü ID kimi qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "'/users/profil' ünvanına müraciət edildikdə xüsusi profil səhifəsi açılmalıdır, lakin dinamik marşrut əvvəl elan edildiyi üçün 'profil' sözünü ID kimi qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let marshutNeticesi = \"\";\n\nfunction marshrutEmal(url) {\n  // XƏTA: :id marşrutu yuxarıda olduqda 'profil' sözünü id parametri kimi yaxalayır\n  if (url.startsWith(\"/users/\")) {\n    const sonHisse = url.replace(\"/users/\", \"\");\n    marshutNeticesi = \"Dinamik ID: \" + sonHisse;\n    return;\n  }\n  if (url === \"/users/profil\") {\n    marshutNeticesi = \"Statik Profil Səhifəsi\";\n    return;\n  }\n}\n\nmarshrutEmal(\"/users/profil\");\nconsole.log(\"Marşrut:\", marshutNeticesi);",
        "correctCode": "let marshutNeticesi = \"\";\n\nfunction marshrutEmal(url) {\n  if (url === \"/users/profil\") {\n    marshutNeticesi = \"Statik Profil Səhifəsi\";\n    return;\n  }\n  if (url.startsWith(\"/users/\")) {\n    const sonHisse = url.replace(\"/users/\", \"\");\n    marshutNeticesi = \"Dinamik ID: \" + sonHisse;\n    return;\n  }\n}\n\nmarshrutEmal(\"/users/profil\");\nconsole.log(\"Marşrut:\", marshutNeticesi);",
        "expectedOutput": "Marşrut: Statik Profil Səhifəsi",
        "correctOutput": "Marşrut: Statik Profil Səhifəsi",
        "ipuclari": [
          "1-ci ipucu: Express marşrutları yuxarıdan aşağıya ardıcıl yoxlayır və ilk uyğun gələni icra edir.",
          "2-ci ipucu: Statik ünvanları (/users/profil) dinamik parametrlilərdən (/users/:id) əvvəl qeyd edin."
        ],
        "hint": "Statik marşrutu dinamik :id marşrutundan əvvələ yerləşdirin.",
        "izah": "Express Router sorğuları qeydiyyat sırası ilə qarşılaşdırır. Əgər '/users/:id' marşrutu '/users/profil'-dən əvvəl yazılarsa, 'profil' kəlməsi :id parametri kimi tutulur və statik marşruta heç vaxt növbə çatmır.",
        "explanation": "Express Router sorğuları qeydiyyat sırası ilə qarşılaşdırır. Əgər '/users/:id' marşrutu '/users/profil'-dən əvvəl yazılarsa, 'profil' kəlməsi :id parametri kimi tutulur və statik marşruta heç vaxt növbə çatmır."
      },
      {
        "id": "bug-sec19-06",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Mərkəzi 4-Arqumentli Xəta Middleware-nin Marşrutlardan Əvvəl Qoyulması Səhvi",
        "title": "Mərkəzi 4-Arqumentli Xəta Middleware-nin Marşrutlardan Əvvəl Qoyulması Səhvi",
        "tesvir": "Serverdə baş verən xəta mərkəzi 4-arqumentli xəta middleware-i tərəfindən tutulmalı və 'Status: 500 Sistemi Qorudu' cavabı verilməlidir. Lakin xəta middleware-i marşrutlardan əvvəl yazıldığı üçün Express konveyeri onu ötürür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Serverdə baş verən xəta mərkəzi 4-arqumentli xəta middleware-i tərəfindən tutulmalı və 'Status: 500 Sistemi Qorudu' cavabı verilməlidir. Lakin xəta middleware-i marşrutlardan əvvəl yazıldığı üçün Express konveyeri onu ötürür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let xetaTutuldu = false;\n\n// XƏTA: 4 parametrli xəta middleware-i marşrutlardan ƏVVƏL yerləşdirilib!\nconst pipeline = [\n  { tip: 'errorHandler', fn: (err, req, res, next) => { xetaTutuldu = true; } },\n  { tip: 'route', fn: (req, res, next) => {} }\n];\n\n// Express konveyerində xəta zamanı yalnız marşrutdan SONRA gələn 4-parametrlilər çağırılır\nconst routeIdx = pipeline.findIndex(p => p.tip === 'route');\nconst handlerSonra = pipeline.slice(routeIdx + 1).find(p => p.tip === 'errorHandler' && p.fn.length === 4);\nif (handlerSonra) {\n  handlerSonra.fn(new Error('Baza xətası'), {}, {}, () => {});\n}\n\nconsole.log(\"Status:\", xetaTutuldu ? \"500 Sistemi Qorudu\" : \"Xəta idarəedicisi marşrutdan əvvəl qaldı\");",
        "correctCode": "let xetaTutuldu = false;\n\nconst pipeline = [\n  { tip: 'route', fn: (req, res, next) => {} },\n  { tip: 'errorHandler', fn: (err, req, res, next) => { xetaTutuldu = true; } }\n];\n\nconst routeIdx = pipeline.findIndex(p => p.tip === 'route');\nconst handlerSonra = pipeline.slice(routeIdx + 1).find(p => p.tip === 'errorHandler' && p.fn.length === 4);\nif (handlerSonra) {\n  handlerSonra.fn(new Error('Baza xətası'), {}, {}, () => {});\n}\n\nconsole.log(\"Status:\", xetaTutuldu ? \"500 Sistemi Qorudu\" : \"Xəta idarəedicisi marşrutdan əvvəl qaldı\");",
        "expectedOutput": "Status: 500 Sistemi Qorudu",
        "correctOutput": "Status: 500 Sistemi Qorudu",
        "ipuclari": [
          "1-ci ipucu: Express middleware konveyerini yuxarıdan aşağıya ardıcıl icra edir.",
          "2-ci ipucu: Mərkəzləşdirilmiş (err, req, res, next) xəta idarəedicisi həmişə bütün marşrutlardan SONRA qeydiyyatdan keçməlidir."
        ],
        "hint": "4-parametrlı xəta middleware-ni marşrutlardan sonraya yerləşdirin.",
        "izah": "Express.js-də növbəti xəta emalçısı axtarılarkən yalnız cari marşrutdan sonra gələn 4-arqumentli funksiyalar yoxlanılır. Əgər xəta idarəedicisi marşrutlardan əvvəl qeyd edilərsə, heç bir xəta ora çatmayacaq və server çökəcəkdir.",
        "explanation": "Express.js-də növbəti xəta emalçısı axtarılarkən yalnız cari marşrutdan sonra gələn 4-arqumentli funksiyalar yoxlanılır. Əgər xəta idarəedicisi marşrutlardan əvvəl qeyd edilərsə, heç bir xəta ora çatmayacaq və server çökəcəkdir."
      },
      {
        "id": "bug-sec19-07",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "CORS Middleware-nin Marşrutlardan Sonra Təyin Edilməsi Səhvi",
        "title": "CORS Middleware-nin Marşrutlardan Sonra Təyin Edilməsi Səhvi",
        "tesvir": "Kənar domenlərdən gələn sorğular üçün CORS başlıqları aktivləşdirilməlidir, lakin middleware marşrutdan sonra qeyd edildiyi üçün başlıqlar cavaba düşmür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Kənar domenlərdən gələn sorğular üçün CORS başlıqları aktivləşdirilməlidir, lakin middleware marşrutdan sonra qeyd edildiyi üçün başlıqlar cavaba düşmür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const stack = [];\n\nfunction get(path, handler) { stack.push({ tip: \"route\", path }); }\nfunction use(middleware) { stack.push({ tip: \"middleware\", name: middleware.name }); }\n\n// XƏTA: cors middleware marşrutdan sonra yazılıb\nget(\"/api/kurslar\", () => {});\nfunction cors() {}\nuse(cors);\n\n// İlk gələn element marşrut olduqda CORS başlıqları tətbiq olunmur\nconst corsAktivdir = stack[0].tip === \"middleware\" && stack[0].name === \"cors\";\nconsole.log(\"CORS statusu:\", corsAktivdir ? \"Aktivdir\" : \"Bloklandı\");",
        "correctCode": "const stack = [];\n\nfunction get(path, handler) { stack.push({ tip: \"route\", path }); }\nfunction use(middleware) { stack.push({ tip: \"middleware\", name: middleware.name }); }\n\nfunction cors() {}\nuse(cors);\nget(\"/api/kurslar\", () => {});\n\nconst corsAktivdir = stack[0].tip === \"middleware\" && stack[0].name === \"cors\";\nconsole.log(\"CORS statusu:\", corsAktivdir ? \"Aktivdir\" : \"Bloklandı\");",
        "expectedOutput": "CORS statusu: Aktivdir",
        "correctOutput": "CORS statusu: Aktivdir",
        "ipuclari": [
          "1-ci ipucu: Express-də qlobal middleware-lər həmişə marşrutlardan (routes) əvvəl qeydiyyatdan keçməlidir.",
          "2-ci ipucu: use(cors) çağırışını get('/api/kurslar', ...) sətrindən yuxarıya qaldırın."
        ],
        "hint": "use(cors) middleware-ni marşrutlardan əvvələ keçirin.",
        "izah": "Express sorğunu qəbul edərkən zəncirdəki elementləri sırayla icra edir. Əgər marşrut əvvəl gəlirsə, cavab göndərilir və zəncir bitir; sonra gələn CORS middleware-nə heç vaxt növbə çatmır.",
        "explanation": "Express sorğunu qəbul edərkən zəncirdəki elementləri sırayla icra edir. Əgər marşrut əvvəl gəlirsə, cavab göndərilir və zəncir bitir; sonra gələn CORS middleware-nə heç vaxt növbə çatmır."
      },
      {
        "id": "bug-sec19-08",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Asinxron Marşrutda Xətanın next(err) ilə Ötürülməməsi",
        "title": "Asinxron Marşrutda Xətanın next(err) ilə Ötürülməməsi",
        "tesvir": "Asinxron bazadan məlumat çəkilərkən baş verən xəta qlobal idarəediciyə ötürülməlidir, lakin xəta səssiz udulur və ya server unhandled rejection ilə dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Asinxron bazadan məlumat çəkilərkən baş verən xəta qlobal idarəediciyə ötürülməlidir, lakin xəta səssiz udulur və ya server unhandled rejection ilə dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let qlobalXeta = null;\nconst next = (err) => { qlobalXeta = err; };\n\nasync function asinxronHandler(req, res, next) {\n  try {\n    throw new Error(\"Baza bağlantısı kəsildi\");\n  } catch (xeta) {\n    // XƏTA: Tutulan xəta next(xeta) vasitəsilə Express-ə ötürülməyib\n  }\n}\n\nawait asinxronHandler({}, {}, next);\nconsole.log(\"Asinxron xəta:\", qlobalXeta ? \"Növbətiyə ötürüldü\" : \"İtirdi və uduldu\");",
        "correctCode": "let qlobalXeta = null;\nconst next = (err) => { qlobalXeta = err; };\n\nasync function asinxronHandler(req, res, next) {\n  try {\n    throw new Error(\"Baza bağlantısı kəsildi\");\n  } catch (xeta) {\n    next(xeta);\n  }\n}\n\nawait asinxronHandler({}, {}, next);\nconsole.log(\"Asinxron xəta:\", qlobalXeta ? \"Növbətiyə ötürüldü\" : \"İtirdi və uduldu\");",
        "expectedOutput": "Asinxron xəta: Növbətiyə ötürüldü",
        "correctOutput": "Asinxron xəta: Növbətiyə ötürüldü",
        "ipuclari": [
          "1-ci ipucu: Express 4-də asinxron funksiyalar daxilində yaranan xətaları Express avtomatik tutmur.",
          "2-ci ipucu: catch bloku daxilində next(xeta) çağıraraq xətanı ötürün."
        ],
        "hint": "catch blokunda xətanı next(xeta) ilə ötürün.",
        "izah": "Express 4 asinxron handler-lərdə atılan istisnaları (unhandled promise rejection) avtomatik xəta middleware-nə yönləndirmir. Mütləq try...catch qurulmalı və tutulan xəta next(err) vasitəsilə sistemə bildirilməlidir.",
        "explanation": "Express 4 asinxron handler-lərdə atılan istisnaları (unhandled promise rejection) avtomatik xəta middleware-nə yönləndirmir. Mütləq try...catch qurulmalı və tutulan xəta next(err) vasitəsilə sistemə bildirilməlidir."
      },
      {
        "id": "bug-sec19-09",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Alt Router Montajında Prefiksin İki Dəfə Təkrarlanması",
        "title": "Alt Router Montajında Prefiksin İki Dəfə Təkrarlanması",
        "tesvir": "Məhsullar siyahısı '/api/mehsullar' ünvanında cavab verməlidir, lakin router daxilində prefiks təkrarlandığı üçün marşrut səhvən '/api/api/mehsullar' olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsullar siyahısı '/api/mehsullar' ünvanında cavab verməlidir, lakin router daxilində prefiks təkrarlandığı üçün marşrut səhvən '/api/api/mehsullar' olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const prefiks = \"/api\";\n// XƏTA: Router artıq '/api' altında montaj olunacaqsa, daxilində təkrar '/api' yazılmamalıdır\nconst daxiliMarshut = \"/api/mehsullar\";\n\nconst yekunYol = (prefiks + daxiliMarshut).replace(/\\/\\//g, \"/\");\nconsole.log(\"Marşrut ünvanı:\", yekunYol === \"/api/mehsullar\" ? \"Düzgün\" : \"Təkrarlanan: \" + yekunYol);",
        "correctCode": "const prefiks = \"/api\";\nconst daxiliMarshut = \"/mehsullar\";\n\nconst yekunYol = (prefiks + daxiliMarshut).replace(/\\/\\//g, \"/\");\nconsole.log(\"Marşrut ünvanı:\", yekunYol === \"/api/mehsullar\" ? \"Düzgün\" : \"Təkrarlanan: \" + yekunYol);",
        "expectedOutput": "Marşrut ünvanı: Düzgün",
        "correctOutput": "Marşrut ünvanı: Düzgün",
        "ipuclari": [
          "1-ci ipucu: app.use('/api', router) yazıldıqda bütün router daxili yollar avtomatik '/api' ilə başlayır.",
          "2-ci ipucu: Router daxilindəki marşrutu sadəcə '/mehsullar' kimi qeyd edin."
        ],
        "hint": "Router daxilindəki yoldan artıq '/api' prefiksini silin.",
        "izah": "Express Router modullarında app.use(prefix, router) istifadə edildikdə prefiks avtomatik birləşdirilir. Router daxilində yenidən həmin prefiksi yazmaq yolların ikiqat təkrarlanmasına gətirib çıxarır.",
        "explanation": "Express Router modullarında app.use(prefix, router) istifadə edildikdə prefiks avtomatik birləşdirilir. Router daxilində yenidən həmin prefiksi yazmaq yolların ikiqat təkrarlanmasına gətirib çıxarır."
      },
      {
        "id": "bug-sec19-10",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Qlobal Dəyişəndə İstifadəçi Saxlanılması və Məlumat Sızması (Contamination)",
        "title": "Qlobal Dəyişəndə İstifadəçi Saxlanılması və Məlumat Sızması (Contamination)",
        "tesvir": "Hər bir sorğunun istifadəçi məlumatı yalnız özünə aid olmalı və izolyasiya edilməlidir, lakin qlobal dəyişən istifadəsi səbəbilə istifadəçilərin məlumatları bir-birinə qarışır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hər bir sorğunun istifadəçi məlumatı yalnız özünə aid olmalı və izolyasiya edilməlidir, lakin qlobal dəyişən istifadəsi səbəbilə istifadəçilərin məlumatları bir-birinə qarışır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// XƏTA: Qlobal dəyişən eyni vaxtda daxil olan fərqli sorğuların istifadəçilərini qarışdırır\nlet qlobalAktivIstifadeci = null;\n\nfunction authMiddleware(req, res, next) {\n  qlobalAktivIstifadeci = req.headers.user;\n}\n\n// 1-ci istifadəçi sorğu göndərir, dərhal ardınca 2-ci\nauthMiddleware({ headers: { user: \"Elmir\" } }, {}, () => {});\nauthMiddleware({ headers: { user: \"Nigar\" } }, {}, () => {});\n\n// 1-ci sorğunun cavab anında yoxlanışı\nconst elmirinGorduyu = qlobalAktivIstifadeci;\nconsole.log(\"İzolyasiya:\", elmirinGorduyu === \"Elmir\" ? \"Təhlükəsiz\" : \"Məlumat qarışdı\");",
        "correctCode": "function authMiddleware(req, res, next) {\n  req.user = req.headers.user;\n}\n\nconst req1 = { headers: { user: \"Elmir\" } };\nconst req2 = { headers: { user: \"Nigar\" } };\n\nauthMiddleware(req1, {}, () => {});\nauthMiddleware(req2, {}, () => {});\n\nconst elmirinGorduyu = req1.user;\nconsole.log(\"İzolyasiya:\", elmirinGorduyu === \"Elmir\" ? \"Təhlükəsiz\" : \"Məlumat qarışdı\");",
        "expectedOutput": "İzolyasiya: Təhlükəsiz",
        "correctOutput": "İzolyasiya: Təhlükəsiz",
        "ipuclari": [
          "1-ci ipucu: Node.js tək axınlıdır (single-threaded), qlobal dəyişənlər bütün aktiv sorğular arasında paylaşılır.",
          "2-ci ipucu: Sorğuya aid məlumatları birbaşa 'req.user' və ya 'res.locals' obyektinə mənimsədin."
        ],
        "hint": "İstifadəçi məlumatını qlobal dəyişəndə deyil, 'req.user' obyektində saxlayın.",
        "izah": "Node.js tək prosesdə eyni vaxtda minlərlə sorğunu asinxron emal edir. Sorğuya məxsus məlumatlar qlobal və ya modul səviyyəli dəyişənlərdə saxlandıqda, fərqli istifadəçilərin məlumatları bir-birinə sızır. Təhlükəsizlik üçün 'req' və ya 'res.locals' istifadə edilməlidir.",
        "explanation": "Node.js tək prosesdə eyni vaxtda minlərlə sorğunu asinxron emal edir. Sorğuya məxsus məlumatlar qlobal və ya modul səviyyəli dəyişənlərdə saxlandıqda, fərqli istifadəçilərin məlumatları bir-birinə sızır. Təhlükəsizlik üçün 'req' və ya 'res.locals' istifadə edilməlidir."
      }
    ]
  },
  {
    "sectionId": "sec-20",
    "bolmeId": 20,
    "icon": "🔄",
    "sectionTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
    "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
    "bugs": [
      {
        "id": "bug-sec20-01",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Resurs Yaradılmasında 201 Əvəzinə Standart 200 Qaytarılması Xətası",
        "title": "Resurs Yaradılmasında 201 Əvəzinə Standart 200 Qaytarılması Xətası",
        "tesvir": "POST sorğusu ilə yeni məhsul yaradıldıqda REST standartlarına uyğun 'HTTP Status: 201 Created' qeydə alınmalıdır, lakin kod standart 200 qaytarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "POST sorğusu ilə yeni məhsul yaradıldıqda REST standartlarına uyğun 'HTTP Status: 201 Created' qeydə alınmalıdır, lakin kod standart 200 qaytarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "function yeniMehsulYarat(body) {\n  const mehsul = { id: 101, ad: body.ad };\n  // XƏTA: REST standartlarına görə resurs yaradıldıqda 201 Created statusu verilməlidir\n  return { status: 200, data: mehsul };\n}\n\nconst cavab = yeniMehsulYarat({ ad: \"Klaviatura\" });\nconsole.log(\"HTTP Status:\", cavab.status === 201 ? \"201 Created\" : \"200 Standart\");",
        "correctCode": "function yeniMehsulYarat(body) {\n  const mehsul = { id: 101, ad: body.ad };\n  return { status: 201, data: mehsul };\n}\n\nconst cavab = yeniMehsulYarat({ ad: \"Klaviatura\" });\nconsole.log(\"HTTP Status:\", cavab.status === 201 ? \"201 Created\" : \"200 Standart\");",
        "expectedOutput": "HTTP Status: 201 Created",
        "correctOutput": "HTTP Status: 201 Created",
        "ipuclari": [
          "1-ci ipucu: HTTP protokolunda yeni resurs uğurla yaradıldıqda xüsusi status kodu tətbiq olunur.",
          "2-ci ipucu: Status kodunu 200-dən 201-ə dəyişin."
        ],
        "hint": "Uğurla yeni resurs yaradılması üçün status kodunu 201 olaraq təyin edin.",
        "izah": "RESTful memarlıq prinsiplərinə görə, serverdə yeni bir qeyd və ya resurs formalaşdıqda müştəriyə məhz HTTP 201 Created cavabı verilməlidir. 200 OK yalnız mövcud məlumatların oxunması və ya yenilənməsi üçündür.",
        "explanation": "RESTful memarlıq prinsiplərinə görə, serverdə yeni bir qeyd və ya resurs formalaşdıqda müştəriyə məhz HTTP 201 Created cavabı verilməlidir. 200 OK yalnız mövcud məlumatların oxunması və ya yenilənməsi üçündür."
      },
      {
        "id": "bug-sec20-02",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "DELETE Əməliyyatında 204 No Content Zamanı Gövdənin (Body) Göndərilməsi",
        "title": "DELETE Əməliyyatında 204 No Content Zamanı Gövdənin (Body) Göndərilməsi",
        "tesvir": "Məhsul silindikdən sonra HTTP 204 No Content statusu qaytarılmalıdır, lakin HTTP spesifikasiyasına zidd olaraq cavaba gövdə əlavə edilir və xəbərdarlıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsul silindikdən sonra HTTP 204 No Content statusu qaytarılmalıdır, lakin HTTP spesifikasiyasına zidd olaraq cavaba gövdə əlavə edilir və xəbərdarlıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "function mehsulSil(id) {\n  // XƏTA: HTTP 204 statusu heç bir cavab gövdəsi (body: null) qəbul etmir\n  return { status: 204, body: { mesaj: \"Silindi\" } };\n}\n\nconst cavab = mehsulSil(5);\nconst duzgundur = cavab.status === 204 && cavab.body === null;\nconsole.log(\"Status:\", duzgundur ? \"204 No Content\" : \"Yanlış gövdə var\");",
        "correctCode": "function mehsulSil(id) {\n  return { status: 204, body: null };\n}\n\nconst cavab = mehsulSil(5);\nconst duzgundur = cavab.status === 204 && cavab.body === null;\nconsole.log(\"Status:\", duzgundur ? \"204 No Content\" : \"Yanlış gövdə var\");",
        "expectedOutput": "Status: 204 No Content",
        "correctOutput": "Status: 204 No Content",
        "ipuclari": [
          "1-ci ipucu: HTTP 204 statusu 'No Content' mənasını verir və məzmunsuz olmalıdır.",
          "2-ci ipucu: body sahəsini null təyin edin."
        ],
        "hint": "204 statusu ilə birlikdə cavab gövdəsini null edin.",
        "izah": "RFC 7231 standartına əsasən, 204 No Content status kodu serverin sorğunu uğurla yerinə yetirdiyini, lakin müştəriyə heç bir məlumat gövdəsi göndərməyəcəyini bəyan edir. Gövdə əlavə etmək protokola ziddir.",
        "explanation": "RFC 7231 standartına əsasən, 204 No Content status kodu serverin sorğunu uğurla yerinə yetirdiyini, lakin müştəriyə heç bir məlumat gövdəsi göndərməyəcəyini bəyan edir. Gövdə əlavə etmək protokola ziddir."
      },
      {
        "id": "bug-sec20-03",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Resurs Tapılmadıqda 404 Əvəzinə Boş 200 Qaytarılması Xətası",
        "title": "Resurs Tapılmadıqda 404 Əvəzinə Boş 200 Qaytarılması Xətası",
        "tesvir": "Verilən identifikatorlu istifadəçi tapılmadıqda REST qaydalarına uyğun 'Status: 404 Not Found' qaytarılmalıdır, lakin server səhvən 200 OK ilə boş nəticə göndərir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Verilən identifikatorlu istifadəçi tapılmadıqda REST qaydalarına uyğun 'Status: 404 Not Found' qaytarılmalıdır, lakin server səhvən 200 OK ilə boş nəticə göndərir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const istifadeciler = [{ id: 1, ad: \"Kamran\" }];\n\nfunction istifadeciTap(id) {\n  const tapilan = istifadeciler.find(u => u.id === id);\n  // XƏTA: tapılmadıqda belə status 200 qaytarılır\n  return { status: 200, data: tapilan || null };\n}\n\nconst cavab = istifadeciTap(99);\nconsole.log(\"Status:\", cavab.status === 404 ? \"404 Not Found\" : \"200 Səhv Cavab\");",
        "correctCode": "const istifadeciler = [{ id: 1, ad: \"Kamran\" }];\n\nfunction istifadeciTap(id) {\n  const tapilan = istifadeciler.find(u => u.id === id);\n  if (!tapilan) {\n    return { status: 404, data: { xeta: \"İstifadəçi tapılmadı\" } };\n  }\n  return { status: 200, data: tapilan };\n}\n\nconst cavab = istifadeciTap(99);\nconsole.log(\"Status:\", cavab.status === 404 ? \"404 Not Found\" : \"200 Səhv Cavab\");",
        "expectedOutput": "Status: 404 Not Found",
        "correctOutput": "Status: 404 Not Found",
        "ipuclari": [
          "1-ci ipucu: Resurs mövcud olmadıqda klientə uğurlu (200) deyil, müvafiq HTTP xəta kodu bildirilməlidir.",
          "2-ci ipucu: Əgər element tapılmayıbsa, status: 404 qaytarın."
        ],
        "hint": "İstifadəçi tapılmadıqda status: 404 Not Found qaytarın.",
        "izah": "Tələb olunan ID mövcud olmadıqda 200 OK (və ya null data) göndərmək anti-pattern sayılır. Klient tərəf əməliyyatın uğursuz olduğunu bilmək üçün 404 Not Found cavabı almalıdır.",
        "explanation": "Tələb olunan ID mövcud olmadıqda 200 OK (və ya null data) göndərmək anti-pattern sayılır. Klient tərəf əməliyyatın uğursuz olduğunu bilmək üçün 404 Not Found cavabı almalıdır."
      },
      {
        "id": "bug-sec20-04",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "PATCH Əməliyyatında Obyektin Birləşdirilməsi Əvəzinə Üstünə Yazılması",
        "title": "PATCH Əməliyyatında Obyektin Birləşdirilməsi Əvəzinə Üstünə Yazılması",
        "tesvir": "Məhsulun yalnız qiyməti yenilənməli, adı isə saxlanmalıdır, lakin obyekt tamamilə əvəzləndiyi üçün 'Məhsul adı: undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsulun yalnız qiyməti yenilənməli, adı isə saxlanmalıdır, lakin obyekt tamamilə əvəzləndiyi üçün 'Məhsul adı: undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let mehsul = { id: 10, ad: \"Noutbuk\", qiymet: 1500 };\nconst patchData = { qiymet: 1200 };\n\n// XƏTA: PATCH qismən yeniləmədir; birbaşa mənimsətmə köhnə sahələri (ad, id) silir\nmehsul = patchData;\n\nconsole.log(\"Məhsul adı:\", mehsul.ad, \"| Qiymət:\", mehsul.qiymet);",
        "correctCode": "let mehsul = { id: 10, ad: \"Noutbuk\", qiymet: 1500 };\nconst patchData = { qiymet: 1200 };\n\nmehsul = { ...mehsul, ...patchData };\n\nconsole.log(\"Məhsul adı:\", mehsul.ad, \"| Qiymət:\", mehsul.qiymet);",
        "expectedOutput": "Məhsul adı: Noutbuk | Qiymət: 1200",
        "correctOutput": "Məhsul adı: Noutbuk | Qiymət: 1200",
        "ipuclari": [
          "1-ci ipucu: PATCH metodu resursun tam əvəzlənməsini (PUT) deyil, mövcud sahələrin üzərinə birləşdirilməsini (merge) tələb edir.",
          "2-ci ipucu: Yayılma operatoru ilə birləşdirin: mehsul = { ...mehsul, ...patchData }."
        ],
        "hint": "mehsul = { ...mehsul, ...patchData } sintaksisi ilə qismən yenilənmə aparın.",
        "izah": "PUT tam resurs əvəzləməsidir, PATCH isə qismən modifikasiyadır (partial update). Birbaşa mehsul = patchData yazıldıqda köhnə sahələr itir; obyektlərin birləşdirilməsi tələb olunur.",
        "explanation": "PUT tam resurs əvəzləməsidir, PATCH isə qismən modifikasiyadır (partial update). Birbaşa mehsul = patchData yazıldıqda köhnə sahələr itir; obyektlərin birləşdirilməsi tələb olunur."
      },
      {
        "id": "bug-sec20-05",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Səhifələmədə (Pagination) Sürüşmənin (Offset) Bir Vahid Artıq Hesablanması",
        "title": "Səhifələmədə (Pagination) Sürüşmənin (Offset) Bir Vahid Artıq Hesablanması",
        "tesvir": "1-ci səhifə üçün başlanğıc ofseti 'Səhifə 1 Başlanğıc: 0' olmalıdır, lakin hesablamada off-by-one xətası səbəbindən ilk 10 qeyd ötürülür və ofset 10 olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "1-ci səhifə üçün başlanğıc ofseti 'Səhifə 1 Başlanğıc: 0' olmalıdır, lakin hesablamada off-by-one xətası səbəbindən ilk 10 qeyd ötürülür və ofset 10 olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const sehife = 1;\nconst limit = 10;\n\n// XƏTA: 1-ci səhifə üçün ofset 0 olmalıdır, sehife * limit yazıldıqda ilk 10 qeyd itir\nconst offset = sehife * limit;\n\nconsole.log(\"Səhifə 1 Başlanğıc:\", offset);",
        "correctCode": "const sehife = 1;\nconst limit = 10;\n\nconst offset = (sehife - 1) * limit;\n\nconsole.log(\"Səhifə 1 Başlanğıc:\", offset);",
        "expectedOutput": "Səhifə 1 Başlanğıc: 0",
        "correctOutput": "Səhifə 1 Başlanğıc: 0",
        "ipuclari": [
          "1-ci ipucu: Səhifələmə 1-dən başlasa da, massiv və baza indeksləri 0-dan başlayır.",
          "2-ci ipucu: Ofset düsturunu (sehife - 1) * limit kimi düzəldin."
        ],
        "hint": "Ofset hesablamasını (sehife - 1) * limit düsturu ilə qurun.",
        "izah": "Pagination riyaziyyatında səhifə nömrəsi 1 olduqda ofset 0 olmalıdır. Düzgün düstur: offset = (page - 1) * limit. Birbaşa page * limit yazıldıqda 1-ci səhifə 2-ci səhifənin məlumatlarını gətirir.",
        "explanation": "Pagination riyaziyyatında səhifə nömrəsi 1 olduqda ofset 0 olmalıdır. Düzgün düstur: offset = (page - 1) * limit. Birbaşa page * limit yazıldıqda 1-ci səhifə 2-ci səhifənin məlumatlarını gətirir."
      },
      {
        "id": "bug-sec20-06",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "POST Məlumatlarının Doğrulanmaması (Validation) Səbəbilə Boş Qeyd",
        "title": "POST Məlumatlarının Doğrulanmaması (Validation) Səbəbilə Boş Qeyd",
        "tesvir": "Məcburi sahələr çatışmadıqda API 'HTTP Status: 400 Bad Request' qaytarmalıdır, lakin yoxlama olmadığı üçün etibarsız məlumat qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məcburi sahələr çatışmadıqda API 'HTTP Status: 400 Bad Request' qaytarmalıdır, lakin yoxlama olmadığı üçün etibarsız məlumat qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "function istifadeciQeydEt(reqBody) {\n  // XƏTA: ad və email sahələrinin mövcudluğu yoxlanılmır\n  const yeni = { id: 5, ad: reqBody.ad, email: reqBody.email };\n  return { status: 201, data: yeni };\n}\n\nconst cavab = istifadeciQeydEt({ email: \"test@misal.az\" });\nconsole.log(\"HTTP Status:\", cavab.status === 400 ? \"400 Bad Request\" : \"201 Qəbul edildi\");",
        "correctCode": "function istifadeciQeydEt(reqBody) {\n  if (!reqBody.ad || !reqBody.email) {\n    return { status: 400, xeta: \"Ad və email tələb olunur\" };\n  }\n  const yeni = { id: 5, ad: reqBody.ad, email: reqBody.email };\n  return { status: 201, data: yeni };\n}\n\nconst cavab = istifadeciQeydEt({ email: \"test@misal.az\" });\nconsole.log(\"HTTP Status:\", cavab.status === 400 ? \"400 Bad Request\" : \"201 Qəbul edildi\");",
        "expectedOutput": "HTTP Status: 400 Bad Request",
        "correctOutput": "HTTP Status: 400 Bad Request",
        "ipuclari": [
          "1-ci ipucu: Müştəri məlumatı natamam göndərdikdə 400 Bad Request statusu qaytarılmalıdır.",
          "2-ci ipucu: if (!reqBody.ad || !reqBody.email) şərtini daxil edin və 400 qaytarın."
        ],
        "hint": "reqBody daxilində ad və email sahələrini yoxlayaraq çatışmadıqda status 400 verin.",
        "izah": "Giriş məlumatlarının doğrulanması (input validation) CRUD əməliyyatlarının mühüm hissəsidir. Məcburi sahələr olmadan qeyd yaratmaq bazanın çirklənməsinə səbəb olur. Çatışmazlıq olduqda 400 qaytarılmalıdır.",
        "explanation": "Giriş məlumatlarının doğrulanması (input validation) CRUD əməliyyatlarının mühüm hissəsidir. Məcburi sahələr olmadan qeyd yaratmaq bazanın çirklənməsinə səbəb olur. Çatışmazlıq olduqda 400 qaytarılmalıdır."
      },
      {
        "id": "bug-sec20-07",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Kateqoriya Filterində Hərf Registrinin (Case-Sensitivity) Nəzərə Alınmaması",
        "title": "Kateqoriya Filterində Hərf Registrinin (Case-Sensitivity) Nəzərə Alınmaması",
        "tesvir": "'kitab' kateqoriyası axtarıldıqda həm 'Kitab', həm də 'kitab' məhsulları tapılmalı və 'Tapılan element sayı: 2' çıxmalıdır, lakin sərt bərabərlik səbəbilə bəzi qeydlər itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "'kitab' kateqoriyası axtarıldıqda həm 'Kitab', həm də 'kitab' məhsulları tapılmalı və 'Tapılan element sayı: 2' çıxmalıdır, lakin sərt bərabərlik səbəbilə bəzi qeydlər itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const mehsullar = [\n  { id: 1, ad: \"JS Bələdçisi\", kateqoriya: \"Kitab\" },\n  { id: 2, ad: \"Node.js Dərslik\", kateqoriya: \"kitab\" },\n  { id: 3, ad: \"Qulaqlıq\", kateqoriya: \"Elektronika\" }\n];\n\nconst sorgu = \"kitab\";\n// XƏTA: Sərt === müqayisəsi böyük 'Kitab' ilə kiçik 'kitab'-ı uyğunlaşdırmır\nconst netice = mehsullar.filter(m => m.kateqoriya === sorgu);\n\nconsole.log(\"Tapılan element sayı:\", netice.length);",
        "correctCode": "const mehsullar = [\n  { id: 1, ad: \"JS Bələdçisi\", kateqoriya: \"Kitab\" },\n  { id: 2, ad: \"Node.js Dərslik\", kateqoriya: \"kitab\" },\n  { id: 3, ad: \"Qulaqlıq\", kateqoriya: \"Elektronika\" }\n];\n\nconst sorgu = \"kitab\";\nconst netice = mehsullar.filter(m => m.kateqoriya.toLowerCase() === sorgu.toLowerCase());\n\nconsole.log(\"Tapılan element sayı:\", netice.length);",
        "expectedOutput": "Tapılan element sayı: 2",
        "correctOutput": "Tapılan element sayı: 2",
        "ipuclari": [
          "1-ci ipucu: Axtarış və filter əməliyyatlarında registr həssaslığı nəticələri məhdudlaşdırır.",
          "2-ci ipucu: Həm kateqoriyanı, həm də sorğunu .toLowerCase() ilə kiçik hərflərə çevirərək müqayisə edin."
        ],
        "hint": "Müqayisəni toLowerCase() vasitəsilə registr müstəqil edin.",
        "izah": "İstifadəçilər axtarış parametrini fərqli registrlərdə (kitab, Kitab, KITAB) göndərə bilər. Hər iki tərəf toLowerCase() edilmədən aparılan bərabərlik yoxlaması düzgün məlumatları kənarda qoyur.",
        "explanation": "İstifadəçilər axtarış parametrini fərqli registrlərdə (kitab, Kitab, KITAB) göndərə bilər. Hər iki tərəf toLowerCase() edilmədən aparılan bərabərlik yoxlaması düzgün məlumatları kənarda qoyur."
      },
      {
        "id": "bug-sec20-08",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Kütləvi Mənimsətmə (Mass Assignment) Zəifliyi ilə Rolun Qanunsuz Dəyişdirilməsi",
        "title": "Kütləvi Mənimsətmə (Mass Assignment) Zəifliyi ilə Rolun Qanunsuz Dəyişdirilməsi",
        "tesvir": "Profil redaktəsində istifadəçi yalnız ad və şəhəri dəyişə bilməli, rolu isə toxunulmaz qalmalıdır, lakin bütün req.body qəbul edildiyi üçün rol 'admin' olaraq dəyişdirilir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Profil redaktəsində istifadəçi yalnız ad və şəhəri dəyişə bilməli, rolu isə toxunulmaz qalmalıdır, lakin bütün req.body qəbul edildiyi üçün rol 'admin' olaraq dəyişdirilir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const cariUser = { id: 1, ad: \"Kamran\", seher: \"Bakı\", rol: \"istifadeci\" };\n// Zərərli istifadəçi sorğusunda 'rol' sahəsi göndərib\nconst reqBody = { seher: \"Gəncə\", rol: \"admin\" };\n\n// XƏTA: Bütün reqBody birbaşa mənimsədildikdə kritik sahələr (rol) istifadəçi tərəfindən idarə olunur\nconst yenilenmis = { ...cariUser, ...reqBody };\n\nconsole.log(\"İstifadəçi rolu:\", yenilenmis.rol === \"istifadeci\" ? \"istifadeci (Qorundu)\" : \"admin (Təhlükə!)\");",
        "correctCode": "const cariUser = { id: 1, ad: \"Kamran\", seher: \"Bakı\", rol: \"istifadeci\" };\nconst reqBody = { seher: \"Gəncə\", rol: \"admin\" };\n\nconst { ad, seher } = reqBody;\nconst yenilenmis = {\n  ...cariUser,\n  ...(ad !== undefined && { ad }),\n  ...(seher !== undefined && { seher })\n};\n\nconsole.log(\"İstifadəçi rolu:\", yenilenmis.rol === \"istifadeci\" ? \"istifadeci (Qorundu)\" : \"admin (Təhlükə!)\");",
        "expectedOutput": "İstifadəçi rolu: istifadeci (Qorundu)",
        "correctOutput": "İstifadəçi rolu: istifadeci (Qorundu)",
        "ipuclari": [
          "1-ci ipucu: Bu Mass Assignment (kütləvi mənimsətmə) zəifliyidir.",
          "2-ci ipucu: req.body-dən yalnız icazə verilən sahələri (ad, seher) çıxarın (whitelist) və rolu qoruyun."
        ],
        "hint": "req.body-dən yalnız dəyişdirilməsinə icazə verilən sahələri seçin (whitelisting).",
        "izah": "Mass Assignment təhlükəsizlik boşluğunda müştəri gözlənilməyən xassələr (isAdmin, role, balance) göndərərək hüquqlarını artıra bilər. Çözüm: yalnız icazə verilmiş sahələri destrukturizasiya ilə seçməkdir.",
        "explanation": "Mass Assignment təhlükəsizlik boşluğunda müştəri gözlənilməyən xassələr (isAdmin, role, balance) göndərərək hüquqlarını artıra bilər. Çözüm: yalnız icazə verilmiş sahələri destrukturizasiya ilə seçməkdir."
      },
      {
        "id": "bug-sec20-09",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Təkrarlanan POST Sorğularında İdempotentliyin (Idempotency) İdarə Olunmaması",
        "title": "Təkrarlanan POST Sorğularında İdempotentliyin (Idempotency) İdarə Olunmaması",
        "tesvir": "Şəbəkə təkrarı zamanı eyni açarlı ödəniş yalnız bir dəfə hesablanmalı və 'Tranzaksiya sayı: 1 (İdempotent)' olmalıdır, lakin keş yoxlanışı olmadığı üçün ikiqat ödəniş çıxılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Şəbəkə təkrarı zamanı eyni açarlı ödəniş yalnız bir dəfə hesablanmalı və 'Tranzaksiya sayı: 1 (İdempotent)' olmalıdır, lakin keş yoxlanışı olmadığı üçün ikiqat ödəniş çıxılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const emalOlunmusKeyler = new Set();\nlet hesablananSay = 0;\n\nfunction odenisEt(idempotencyKey, mebleg) {\n  // XƏTA: idempotencyKey əvvəlcədən mövcuddursa tranzaksiya təkrarlanmamalıdır\n  hesablananSay++;\n  emalOlunmusKeyler.add(idempotencyKey);\n}\n\nodenisEt(\"tx-999\", 50);\nodenisEt(\"tx-999\", 50);\n\nconsole.log(\"Tranzaksiya sayı:\", hesablananSay === 1 ? \"1 (İdempotent)\" : hesablananSay + \" (Təkrarlanan Xəta)\");",
        "correctCode": "const emalOlunmusKeyler = new Set();\nlet hesablananSay = 0;\n\nfunction odenisEt(idempotencyKey, mebleg) {\n  if (emalOlunmusKeyler.has(idempotencyKey)) {\n    return;\n  }\n  hesablananSay++;\n  emalOlunmusKeyler.add(idempotencyKey);\n}\n\nodenisEt(\"tx-999\", 50);\nodenisEt(\"tx-999\", 50);\n\nconsole.log(\"Tranzaksiya sayı:\", hesablananSay === 1 ? \"1 (İdempotent)\" : hesablananSay + \" (Təkrarlanan Xəta)\");",
        "expectedOutput": "Tranzaksiya sayı: 1 (İdempotent)",
        "correctOutput": "Tranzaksiya sayı: 1 (İdempotent)",
        "ipuclari": [
          "1-ci ipucu: İdempotentlik əməliyyatın təkrar icrasının eyni nəticəni verməsini təmin edir.",
          "2-ci ipucu: Əgər emalOlunmusKeyler.has(idempotencyKey) doğrudursa, funksiyadan dərhal return edin."
        ],
        "hint": "İdempotency-Key əvvəllər emal edilibsə təkrar icradan imtina edin.",
        "izah": "POST sorğuları təbiətən idempotent deyil. Ödəniş sistemlərində müştəri təkrar sorğu göndərdikdə ikiqat pul çıxılmasının qarşısını almaq üçün 'Idempotency-Key' başlığı yoxlanılır və dublikatlar ləğv edilir.",
        "explanation": "POST sorğuları təbiətən idempotent deyil. Ödəniş sistemlərində müştəri təkrar sorğu göndərdikdə ikiqat pul çıxılmasının qarşısını almaq üçün 'Idempotency-Key' başlığı yoxlanılır və dublikatlar ləğv edilir."
      },
      {
        "id": "bug-sec20-10",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "İç-içə Resurslarda (Nested Routes) Sahiblik Yoxlanışının Olmaması (BOLA/IDOR)",
        "title": "İç-içə Resurslarda (Nested Routes) Sahiblik Yoxlanışının Olmaması (BOLA/IDOR)",
        "tesvir": "İstifadəçi yalnız öz sifarişini əldə edə bilməlidir; başqasının sifarişinə müraciət edildikdə 'Giriş icazəsi: 403 Qadağandır' verilməlidir, lakin sahiblik yoxlanışı olmadığı üçün məlumat sızır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi yalnız öz sifarişini əldə edə bilməlidir; başqasının sifarişinə müraciət edildikdə 'Giriş icazəsi: 403 Qadağandır' verilməlidir, lakin sahiblik yoxlanışı olmadığı üçün məlumat sızır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const sifarisler = [\n  { id: 701, userId: 1, mebleg: 120 },\n  { id: 702, userId: 2, mebleg: 450 }\n];\n\nfunction sifarisGetir(userId, orderId) {\n  const sifaris = sifarisler.find(s => s.id === orderId);\n  // XƏTA: Sifariş tapılsa belə onun verilən userId-yə məxsus olduğu yoxlanılmır (IDOR zəifliyi)\n  return { status: 200, data: sifaris };\n}\n\n// 1 nömrəli istifadəçi 2 nömrəlinin sifarişini çəkməyə cəhd edir\nconst cavab = sifarisGetir(1, 702);\nconsole.log(\"Giriş icazəsi:\", cavab.status === 403 ? \"403 Qadağandır\" : \"200 İcazəsiz Giriş\");",
        "correctCode": "const sifarisler = [\n  { id: 701, userId: 1, mebleg: 120 },\n  { id: 702, userId: 2, mebleg: 450 }\n];\n\nfunction sifarisGetir(userId, orderId) {\n  const sifaris = sifarisler.find(s => s.id === orderId);\n  if (!sifaris) {\n    return { status: 404, data: null };\n  }\n  if (sifaris.userId !== userId) {\n    return { status: 403, data: null };\n  }\n  return { status: 200, data: sifaris };\n}\n\nconst cavab = sifarisGetir(1, 702);\nconsole.log(\"Giriş icazəsi:\", cavab.status === 403 ? \"403 Qadağandır\" : \"200 İcazəsiz Giriş\");",
        "expectedOutput": "Giriş icazəsi: 403 Qadağandır",
        "correctOutput": "Giriş icazəsi: 403 Qadağandır",
        "ipuclari": [
          "1-ci ipucu: Bu, OWASP API Security siyahısında 1 nömrəli BOLA / IDOR zəifliyidir.",
          "2-ci ipucu: Sifarişin userId-si sorğu göndərən userId ilə uyğun gəlmədikdə status: 403 qaytarın."
        ],
        "hint": "sifaris.userId !== userId yoxlaması apararaq 403 statusu qaytarın.",
        "izah": "BOLA (Broken Object Level Authorization) zəifliyində istifadəçi URL-dəki parametr vasitəsilə başqa istifadəçinin resurslarını oxuya bilir. /users/:userId/orders/:orderId marşrutunda sifarişin sahibi mütləq yoxlanılmalıdır.",
        "explanation": "BOLA (Broken Object Level Authorization) zəifliyində istifadəçi URL-dəki parametr vasitəsilə başqa istifadəçinin resurslarını oxuya bilir. /users/:userId/orders/:orderId marşrutunda sifarişin sahibi mütləq yoxlanılmalıdır."
      }
    ]
  },
  {
    "sectionId": "sec-21",
    "bolmeId": 21,
    "icon": "🛡️",
    "sectionTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
    "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
    "bugs": [
      {
        "id": "bug-sec21-01",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Sətir İnterpolyasiyası ilə SQL Injection Təhlükəsinin Yaranması",
        "title": "Sətir İnterpolyasiyası ilə SQL Injection Təhlükəsinin Yaranması",
        "tesvir": "İstifadəçi e-poçtuna görə axtarılmalı və 'Sorğu növü: Təhlükəsiz Parametrləşdirilmiş' olmalıdır, lakin sətir şablonu istifadə edildiyi üçün SQL Injection hücumuna qarşı həssaslıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi e-poçtuna görə axtarılmalı və 'Sorğu növü: Təhlükəsiz Parametrləşdirilmiş' olmalıdır, lakin sətir şablonu istifadə edildiyi üçün SQL Injection hücumuna qarşı həssaslıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function istifadeciAxtar(email) {\n  // XƏTA: SQL sorğusuna daxil olan parametrin interpolyasiya ($) ilə birbaşa sətirə qoşulması\n  const sql = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\n  const tehlukesiz = false;\n  return { sql, tehlukesiz };\n}\n\nconst res = await istifadeciAxtar(\"kamran@misal.az\");\nconsole.log(\"Sorğu növü:\", res.tehlukesiz ? \"Təhlükəsiz Parametrləşdirilmiş\" : \"Qeyri-təhlükəsiz\");",
        "correctCode": "async function istifadeciAxtar(email) {\n  const sql = \"SELECT * FROM users WHERE email = $1\";\n  const params = [email];\n  const tehlukesiz = sql.includes(\"$1\");\n  return { sql, tehlukesiz };\n}\n\nconst res = await istifadeciAxtar(\"kamran@misal.az\");\nconsole.log(\"Sorğu növü:\", res.tehlukesiz ? \"Təhlükəsiz Parametrləşdirilmiş\" : \"Qeyri-təhlükəsiz\");",
        "expectedOutput": "Sorğu növü: Təhlükəsiz Parametrləşdirilmiş",
        "correctOutput": "Sorğu növü: Təhlükəsiz Parametrləşdirilmiş",
        "ipuclari": [
          "1-ci ipucu: SQL Injection-dan qorunmağın əsas yolu parametrləşdirilmiş sorğulardır (Prepared Statements).",
          "2-ci ipucu: 'email = $1' yazın və dəyəri ikinci parametr kimi massivdə ötürün."
        ],
        "hint": "Sətir birləşməsi əvəzinə $1 yer tutucusundan istifadə edin.",
        "izah": "SQL Injection hücumunda bədniyyətli şəxs email sahəsinə ' OR '1'='1 daxil edərək bütün bazanı sızdıra bilər. Parametrləşdirilmiş sorğularda ($1) verilənlər bazası mühərriki daxil olan mətni kod kimi yox, sırf xam məlumat kimi qiymətləndirir.",
        "explanation": "SQL Injection hücumunda bədniyyətli şəxs email sahəsinə ' OR '1'='1 daxil edərək bütün bazanı sızdıra bilər. Parametrləşdirilmiş sorğularda ($1) verilənlər bazası mühərriki daxil olan mətni kod kimi yox, sırf xam məlumat kimi qiymətləndirir."
      },
      {
        "id": "bug-sec21-02",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Parolun Məlumat Bazasında Açıq Mətn (Plaintext) Kimi Saxlanması",
        "title": "Parolun Məlumat Bazasında Açıq Mətn (Plaintext) Kimi Saxlanması",
        "tesvir": "İstifadəçi qeydiyyatdan keçərkən parol heşlənməli və 'Parol statusu: Heşləndi və Saxlanıldı' təmin edilməlidir, lakin açıq mətn saxlanıldığı üçün təhlükəsizlik qaydası pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi qeydiyyatdan keçərkən parol heşlənməli və 'Parol statusu: Heşləndi və Saxlanıldı' təmin edilməlidir, lakin açıq mətn saxlanıldığı üçün təhlükəsizlik qaydası pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function istifadeciQeydEt(ad, xamParol) {\n  // XƏTA: Parol bcrypt ilə heşlənmədən bazaya birbaşa ötürülür\n  const saxlanilanParol = xamParol;\n  const heshdir = saxlanilanParol.startsWith(\"$2b$\");\n  console.log(\"Parol statusu:\", heshdir ? \"Heşləndi və Saxlanıldı\" : \"Açıq mətn (Təhlükə!)\");\n}\n\nawait istifadeciQeydEt(\"Murad\", \"Gizli123\");",
        "correctCode": "async function istifadeciQeydEt(ad, xamParol) {\n  const saxlanilanParol = await bcrypt.hash(xamParol, 10);\n  const heshdir = saxlanilanParol.startsWith(\"$2b$\");\n  console.log(\"Parol statusu:\", heshdir ? \"Heşləndi və Saxlanıldı\" : \"Açıq mətn (Təhlükə!)\");\n}\n\nawait istifadeciQeydEt(\"Murad\", \"Gizli123\");",
        "expectedOutput": "Parol statusu: Heşləndi və Saxlanıldı",
        "correctOutput": "Parol statusu: Heşləndi və Saxlanıldı",
        "ipuclari": [
          "1-ci ipucu: Parollar heç vaxt bazada açıq mətn kimi saxlanılmamalı, kriptoqrafik heşlənməlidir.",
          "2-ci ipucu: bcrypt.hash(xamParol, 10) metodundan istifadə edərək parolu şifrələyin."
        ],
        "hint": "Parolu saxlamaq üçün bcrypt.hash() funksiyasından istifadə edin.",
        "izah": "Parolların bazada açıq mətn kimi saxlanılması böyük təhlükəsizlik cinayətidir. Bazaya kənar müdaxilə olduqda parollar ələ keçir. bcrypt.hash() duzlama (salting) və möhkəm alqoritmlə parolu bərpa olunmaz heşə çevirir.",
        "explanation": "Parolların bazada açıq mətn kimi saxlanılması böyük təhlükəsizlik cinayətidir. Bazaya kənar müdaxilə olduqda parollar ələ keçir. bcrypt.hash() duzlama (salting) və möhkəm alqoritmlə parolu bərpa olunmaz heşə çevirir."
      },
      {
        "id": "bug-sec21-03",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Parol Doğrulamasında bcrypt.compare Əvəzinə Sadə Bərabərlik Xətası",
        "title": "Parol Doğrulamasında bcrypt.compare Əvəzinə Sadə Bərabərlik Xətası",
        "tesvir": "İstifadəçi giriş edərkən daxil edilən parol heşlə müqayisə edilməli və 'Doğrulama: Uğurlu' çıxmalıdır, lakin sadə === müqayisəsi səbəbindən heşlə açıq mətn uyğunlaşmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi giriş edərkən daxil edilən parol heşlə müqayisə edilməli və 'Doğrulama: Uğurlu' çıxmalıdır, lakin sadə === müqayisəsi səbəbindən heşlə açıq mətn uyğunlaşmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const bazadakiHesh = \"$2b$10$hash_Gizli123\";\nconst daxilEdilen = \"Gizli123\";\n\n// XƏTA: Açıq mətn heşlə birbaşa === ilə yoxlanıla bilməz, bcrypt.compare tələb olunur\nconst uygun = daxilEdilen === bazadakiHesh;\n\nconsole.log(\"Doğrulama:\", uygun ? \"Uğurlu\" : \"Uğursuz\");",
        "correctCode": "const bazadakiHesh = \"$2b$10$hash_Gizli123\";\nconst daxilEdilen = \"Gizli123\";\n\nconst uygun = await bcrypt.compare(daxilEdilen, bazadakiHesh);\n\nconsole.log(\"Doğrulama:\", uygun ? \"Uğurlu\" : \"Uğursuz\");",
        "expectedOutput": "Doğrulama: Uğurlu",
        "correctOutput": "Doğrulama: Uğurlu",
        "ipuclari": [
          "1-ci ipucu: Heşlənmiş parolu yoxlamaq üçün xüsusi asinxron müqayisə metodundan istifadə olunmalıdır.",
          "2-ci ipucu: await bcrypt.compare(daxilEdilen, bazadakiHesh) metodunu çağırın."
        ],
        "hint": "Parolu yoxlamaq üçün await bcrypt.compare() metodundan istifadə edin.",
        "izah": "Heşləmə birtərəfli prosesdir və geriyə qaytarıla bilməz. Sadə === bərabərliyi heç vaxt doğru olmayacaq. bcrypt.compare() daxil edilən parolu eyni duzla heşləyib nəticələri zaman hücumlarına (timing attack) qarşı təhlükəsiz şəkildə qarşılaşdırır.",
        "explanation": "Heşləmə birtərəfli prosesdir və geriyə qaytarıla bilməz. Sadə === bərabərliyi heç vaxt doğru olmayacaq. bcrypt.compare() daxil edilən parolu eyni duzla heşləyib nəticələri zaman hücumlarına (timing attack) qarşı təhlükəsiz şəkildə qarşılaşdırır."
      },
      {
        "id": "bug-sec21-04",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "JWT Token Yaradılmasında Bitmə Müddətinin (expiresIn) Təyin Edilməməsi",
        "title": "JWT Token Yaradılmasında Bitmə Müddətinin (expiresIn) Təyin Edilməməsi",
        "tesvir": "İstifadəçiyə verilən token məhdud müddətli olmalı və 'Token vəziyyəti: Vaxt təyin edildi' qeydə alınmalıdır, lakin bitmə müddəti unudulduğu üçün token əbədi etibarlı qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçiyə verilən token məhdud müddətli olmalı və 'Token vəziyyəti: Vaxt təyin edildi' qeydə alınmalıdır, lakin bitmə müddəti unudulduğu üçün token əbədi etibarlı qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const payload = { userId: 42 };\nconst gizliAcar = \"super_gizli_acar\";\n\n// XƏTA: expiresIn verilmədikdə JWT tokeninin heç vaxt vaxtı bitmir (sonsuz etibarlılıq təhlükəsi)\nconst token = jwt.sign(payload, gizliAcar);\n\nconst vaxtiVar = token.includes(\"expires\");\nconsole.log(\"Token vəziyyəti:\", vaxtiVar ? \"Vaxt təyin edildi\" : \"Müddətsiz (Təhlükəli)\");",
        "correctCode": "const payload = { userId: 42 };\nconst gizliAcar = \"super_gizli_acar\";\n\nconst token = jwt.sign(payload, gizliAcar, { expiresIn: \"1h\" });\n\nconst vaxtiVar = token.includes(\"expires\");\nconsole.log(\"Token vəziyyəti:\", vaxtiVar ? \"Vaxt təyin edildi\" : \"Müddətsiz (Təhlükəli)\");",
        "expectedOutput": "Token vəziyyəti: Vaxt təyin edildi",
        "correctOutput": "Token vəziyyəti: Vaxt təyin edildi",
        "ipuclari": [
          "1-ci ipucu: Təhlükəsizlik qaydalarına görə sessiya tokenləri həmişə müəyyən istifadə müddətinə malik olmalıdır.",
          "2-ci ipucu: jwt.sign metodunun 3-cü arqumentinə { expiresIn: '1h' } konfiqurasiyasını əlavə edin."
        ],
        "hint": "jwt.sign() metoduna { expiresIn: '1h' } seçimini əlavə edin.",
        "izah": "Bitmə müddəti (exp) olmayan JWT tokenləri oğurlandıqda hücumçu tərəfindən həmişəlik istifadə edilə bilər. Təhlükəsiz arxitekturada hər tokenə qısa ömür (məsələn, '15m' və ya '1h') verilməli və Refresh Token mexanizmi qurulmalıdır.",
        "explanation": "Bitmə müddəti (exp) olmayan JWT tokenləri oğurlandıqda hücumçu tərəfindən həmişəlik istifadə edilə bilər. Təhlükəsiz arxitekturada hər tokenə qısa ömür (məsələn, '15m' və ya '1h') verilməli və Refresh Token mexanizmi qurulmalıdır."
      },
      {
        "id": "bug-sec21-05",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Authorization Başlığından 'Bearer ' Prefiksinin Təmizlənməməsi",
        "title": "Authorization Başlığından 'Bearer ' Prefiksinin Təmizlənməməsi",
        "tesvir": "Müştərinin göndərdiyi JWT token doğrulanmalı və 'Token sahibi: Kamran' çap olunmalıdır, lakin 'Bearer ' prefiksi təmizlənmədiyi üçün jwt malformed xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Müştərinin göndərdiyi JWT token doğrulanmalı və 'Token sahibi: Kamran' çap olunmalıdır, lakin 'Bearer ' prefiksi təmizlənmədiyi üçün jwt malformed xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const authHeader = \"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9\";\n\nlet user = null;\ntry {\n  // XƏTA: authHeader birbaşa ötürülür, halbuki 'Bearer ' sözü ayrılmalıdır\n  user = jwt.verify(authHeader, \"gizli_acar\");\n} catch(e) {\n  user = null;\n}\n\nconsole.log(\"Token sahibi:\", user ? user.ad : \"Xəta (Token malformed)\");",
        "correctCode": "const authHeader = \"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9\";\n\nlet user = null;\ntry {\n  const token = authHeader.split(\" \")[1];\n  user = jwt.verify(token, \"gizli_acar\");\n} catch(e) {\n  user = null;\n}\n\nconsole.log(\"Token sahibi:\", user ? user.ad : \"Xəta (Token malformed)\");",
        "expectedOutput": "Token sahibi: Kamran",
        "correctOutput": "Token sahibi: Kamran",
        "ipuclari": [
          "1-ci ipucu: HTTP Authorization başlığı standart olaraq 'Bearer <token>' formatında gəlir.",
          "2-ci ipucu: Sətri boşluğa görə bölün və ikinci hissəni götürün: authHeader.split(' ')[1]."
        ],
        "hint": "authHeader.split(' ')[1] vasitəsilə təmiz tokeni əldə edin.",
        "izah": "Brauzerlər və API klientləri tokeni 'Bearer eyJ...' şəklində göndərir. jwt.verify metoduna isə sırf tokenin özü (3 hissəli base64 sətir) lazımdır. 'Bearer ' prefiksi silinmədikdə JWT formatı pozulur və xəta atılır.",
        "explanation": "Brauzerlər və API klientləri tokeni 'Bearer eyJ...' şəklində göndərir. jwt.verify metoduna isə sırf tokenin özü (3 hissəli base64 sətir) lazımdır. 'Bearer ' prefiksi silinmədikdə JWT formatı pozulur və xəta atılır."
      },
      {
        "id": "bug-sec21-06",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Verilənlər Bazası Müştərisinin (Client) Hovuza Qaytarılmaması (Leak)",
        "title": "Verilənlər Bazası Müştərisinin (Client) Hovuza Qaytarılmaması (Leak)",
        "tesvir": "Məlumat bazasından məlumat alındıqdan sonra qoşulma hovuza qaytarılmalı və 'Müştəri hovuza qaytarıldı: 0 aktiv qaldı' alınmalıdır, lakin client.release() unudulduğu üçün qoşulma sızması baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat bazasından məlumat alındıqdan sonra qoşulma hovuza qaytarılmalı və 'Müştəri hovuza qaytarıldı: 0 aktiv qaldı' alınmalıdır, lakin client.release() unudulduğu üçün qoşulma sızması baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function melumatOxu() {\n  const client = await pool.connect();\n  try {\n    const res = await client.query(\"SELECT * FROM users WHERE id = $1\", [1]);\n  } catch(e) {\n  }\n  // XƏTA: finally bloku və client.release() yoxdur, müştəri həmişəlik məşğul qalır\n}\n\nawait melumatOxu();\nconsole.log(\"Müştəri hovuza qaytarıldı:\", pool._clients === 0 ? \"0 aktiv qaldı\" : \"Sızma var (\" + pool._clients + \")\");",
        "correctCode": "async function melumatOxu() {\n  const client = await pool.connect();\n  try {\n    const res = await client.query(\"SELECT * FROM users WHERE id = $1\", [1]);\n  } finally {\n    client.release();\n  }\n}\n\nawait melumatOxu();\nconsole.log(\"Müştəri hovuza qaytarıldı:\", pool._clients === 0 ? \"0 aktiv qaldı\" : \"Sızma var (\" + pool._clients + \")\");",
        "expectedOutput": "Müştəri hovuza qaytarıldı: 0 aktiv qaldı",
        "correctOutput": "Müştəri hovuza qaytarıldı: 0 aktiv qaldı",
        "ipuclari": [
          "1-ci ipucu: pool.connect() vasitəsilə ayrılan resurslar iş bitdikdə mütləq hovuza geri təhvil verilməlidir.",
          "2-ci ipucu: finally { client.release(); } blokundan istifadə edin."
        ],
        "hint": "Xəta baş versə belə qoşulmanı azad etmək üçün finally { client.release(); } yazın.",
        "izah": "PostgreSQL və digər bazalarda qoşulma hovuzunun (Connection Pool) məhdud sayda müştərisi (məsələn, 10-20) olur. Əgər client.release() çağırılmazsa, bir neçə sorğudan sonra bütün hovuz tükənir və server donur.",
        "explanation": "PostgreSQL və digər bazalarda qoşulma hovuzunun (Connection Pool) məhdud sayda müştərisi (məsələn, 10-20) olur. Əgər client.release() çağırılmazsa, bir neçə sorğudan sonra bütün hovuz tükənir və server donur."
      },
      {
        "id": "bug-sec21-07",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Hər Marşrutda new Pool() Yaradılması Səbəbilə Baza Əlaqələrinin Tükənməsi (Sızma)",
        "title": "Hər Marşrutda new Pool() Yaradılması Səbəbilə Baza Əlaqələrinin Tükənməsi (Sızma)",
        "tesvir": "Hər bir sorğuda sıfırdan 'new Pool()' yaratmaq əvəzinə tək bir paylaşılan 'db.js' hovuzundan istifadə edilməli və 'Hovuz statusu: Tək Mərkəzi Hovuz (1)' çap olunmalıdır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hər bir sorğuda sıfırdan 'new Pool()' yaratmaq əvəzinə tək bir paylaşılan 'db.js' hovuzundan istifadə edilməli və 'Hovuz statusu: Tək Mərkəzi Hovuz (1)' çap olunmalıdır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// db.js modulu: Tək mərkəzi hovuz\nconst sharedPool = { id: 1, connections: 10 };\n\nfunction handleUserRoute(createLocalPool) {\n  // XƏTA: Hər marşrutda yeni Pool yaradılması hovuzların çoxalmasına və resurs sızmasına səbəb olur\n  let pool;\n  if (createLocalPool) {\n    pool = { id: Math.random(), connections: 10 }; // yeni instansiya\n    return \"Yeni Lokal Hovuz\";\n  }\n  pool = sharedPool;\n  return \"Tək Mərkəzi Hovuz (\" + pool.id + \")\";\n}\n\nconst netice = handleUserRoute(true);\nconsole.log(\"Hovuz statusu:\", netice);",
        "correctCode": "const sharedPool = { id: 1, connections: 10 };\n\nfunction handleUserRoute(createLocalPool) {\n  let pool;\n  if (createLocalPool) {\n    pool = { id: Math.random(), connections: 10 };\n    return \"Yeni Lokal Hovuz\";\n  }\n  pool = sharedPool;\n  return \"Tək Mərkəzi Hovuz (\" + pool.id + \")\";\n}\n\nconst netice = handleUserRoute(false);\nconsole.log(\"Hovuz statusu:\", netice);",
        "expectedOutput": "Hovuz statusu: Tək Mərkəzi Hovuz (1)",
        "correctOutput": "Hovuz statusu: Tək Mərkəzi Hovuz (1)",
        "ipuclari": [
          "1-ci ipucu: Connection Pool (Əlaqə Hovuzu) bütün layihə üzrə tək bir instansiya kimi mövcud olmalıdır (Singleton).",
          "2-ci ipucu: Marşrut funksiyasını handleUserRoute(false) ilə çağıraraq tək mərkəzi hovuzdan istifadə edin."
        ],
        "hint": "Hər dəfə yeni pool yaratmaq əvəzinə sharedPool-dan istifadə edin.",
        "izah": "Hər HTTP sorğusunda və ya hər marşrut modulunda 'new Pool()' çağırmaq saniyələr içində verilənlər bazasının icazə verdiyi maksimum əlaqə sayını (məs: 100 bağlantı) doldurur və baza yeni qoşulmaları rədd edir. Düzgün praktika hovuzun yalnız 'db.js'-də yaradılıb ixrac olunmasıdır.",
        "explanation": "Hər HTTP sorğusunda və ya hər marşrut modulunda 'new Pool()' çağırmaq saniyələr içində verilənlər bazasının icazə verdiyi maksimum əlaqə sayını (məs: 100 bağlantı) doldurur və baza yeni qoşulmaları rədd edir. Düzgün praktika hovuzun yalnız 'db.js'-də yaradılıb ixrac olunmasıdır."
      },
      {
        "id": "bug-sec21-08",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "CORS-da Wildcard (*) və Credentials Seçimlərinin Birgə İşlədilməsi Xətası",
        "title": "CORS-da Wildcard (*) və Credentials Seçimlərinin Birgə İşlədilməsi Xətası",
        "tesvir": "Kuki və sessiya ötürülməsi üçün etibarlı domen təyin edilməli və 'CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi' alınmalıdır, lakin wildcard (*) ilə credentials: true birlikdə yazıldığı üçün brauzer sorğunu bloklayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Kuki və sessiya ötürülməsi üçün etibarlı domen təyin edilməli və 'CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi' alınmalıdır, lakin wildcard (*) ilə credentials: true birlikdə yazıldığı üçün brauzer sorğunu bloklayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// XƏTA: Veb standartlarına görə credentials: true olduqda origin: '*' ola bilməz\nconst corsKonfiq = {\n  origin: \"*\",\n  credentials: true\n};\n\nconst duzgundur = corsKonfiq.credentials && corsKonfiq.origin !== \"*\";\nconsole.log(\"CORS təhlükəsizliyi:\", duzgundur ? \"Etibarlı Domen Təyin Edildi\" : \"Qeyri-mümkün konfiqurasiya\");",
        "correctCode": "const corsKonfiq = {\n  origin: \"https://jsoyren.az\",\n  credentials: true\n};\n\nconst duzgundur = corsKonfiq.credentials && corsKonfiq.origin !== \"*\";\nconsole.log(\"CORS təhlükəsizliyi:\", duzgundur ? \"Etibarlı Domen Təyin Edildi\" : \"Qeyri-mümkün konfiqurasiya\");",
        "expectedOutput": "CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi",
        "correctOutput": "CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi",
        "ipuclari": [
          "1-ci ipucu: W3C CORS spesifikasiyası 'Access-Control-Allow-Origin: *' ilə 'Access-Control-Allow-Credentials: true' birləşməsini qəti qadağan edir.",
          "2-ci ipucu: origin sahəsində '*' əvəzinə konkret etibarlı domen ('https://jsoyren.az') qeyd edin."
        ],
        "hint": "origin üçün wildcard (*) əvəzinə dəqiq domen ('https://jsoyren.az') göstərin.",
        "izah": "Əgər tətbiq kukiləri (cookies, authorization headers) qəbul edirsə (credentials: true), brauzer təhlükəsizlik səbəbilə istənilən saytın (*) bu məlumatlara girişini bloklayır. Mütləq dəqiq domen göstərilməlidir.",
        "explanation": "Əgər tətbiq kukiləri (cookies, authorization headers) qəbul edirsə (credentials: true), brauzer təhlükəsizlik səbəbilə istənilən saytın (*) bu məlumatlara girişini bloklayır. Mütləq dəqiq domen göstərilməlidir."
      },
      {
        "id": "bug-sec21-09",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Tranzaksiyada Xəta Zamanı ROLLBACK Əmrinin Verilməməsi",
        "title": "Tranzaksiyada Xəta Zamanı ROLLBACK Əmrinin Verilməməsi",
        "tesvir": "Bank köçürməsində xəta baş verdikdə tranzaksiya ləğv edilməli və 'Tranzaksiya ləğv edildi: ROLLBACK icra olundu' təsdiqlənməlidir, lakin catch blokunda ROLLBACK unudulduğu üçün baza asılı vəziyyətdə qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Bank köçürməsində xəta baş verdikdə tranzaksiya ləğv edilməli və 'Tranzaksiya ləğv edildi: ROLLBACK icra olundu' təsdiqlənməlidir, lakin catch blokunda ROLLBACK unudulduğu üçün baza asılı vəziyyətdə qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let tranzaksiyaStatusu = \"Açıq\";\n\nasync function pulKocur() {\n  tranzaksiyaStatusu = \"BEGIN\";\n  try {\n    throw new Error(\"Balans kifayət deyil\");\n    tranzaksiyaStatusu = \"COMMIT\";\n  } catch (e) {\n    // XƏTA: catch bloku daxilində tranzaksiya ROLLBACK edilməyib\n  }\n}\n\nawait pulKocur();\nconsole.log(\"Tranzaksiya ləğv edildi:\", tranzaksiyaStatusu === \"ROLLBACK\" ? \"ROLLBACK icra olundu\" : \"Tranzaksiya açıq qaldı\");",
        "correctCode": "let tranzaksiyaStatusu = \"Açıq\";\n\nasync function pulKocur() {\n  tranzaksiyaStatusu = \"BEGIN\";\n  try {\n    throw new Error(\"Balans kifayət deyil\");\n    tranzaksiyaStatusu = \"COMMIT\";\n  } catch (e) {\n    tranzaksiyaStatusu = \"ROLLBACK\";\n  }\n}\n\nawait pulKocur();\nconsole.log(\"Tranzaksiya ləğv edildi:\", tranzaksiyaStatusu === \"ROLLBACK\" ? \"ROLLBACK icra olundu\" : \"Tranzaksiya açıq qaldı\");",
        "expectedOutput": "Tranzaksiya ləğv edildi: ROLLBACK icra olundu",
        "correctOutput": "Tranzaksiya ləğv edildi: ROLLBACK icra olundu",
        "ipuclari": [
          "1-ci ipucu: Verilənlər bazası tranzaksiyalarında (ACID) xəta baş verərsə, bütün yarımçıq dəyişikliklər geri qaytarılmalıdır.",
          "2-ci ipucu: catch blokunda tranzaksiyaStatusu = 'ROLLBACK' əmrini icra edin."
        ],
        "hint": "catch bloku daxilində ROLLBACK əmrini təmin edin.",
        "izah": "SQL tranzaksiyalarında BEGIN çağırıldıqdan sonra xəta yaranarsa və ROLLBACK edilməzsə, cədvəl sətirləri kilidli (row locks) qalır və sonrakı bütün sorğular bloklanır. Mütləq catch daxilində ROLLBACK verilməlidir.",
        "explanation": "SQL tranzaksiyalarında BEGIN çağırıldıqdan sonra xəta yaranarsa və ROLLBACK edilməzsə, cədvəl sətirləri kilidli (row locks) qalır və sonrakı bütün sorğular bloklanır. Mütləq catch daxilində ROLLBACK verilməlidir."
      },
      {
        "id": "bug-sec21-10",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "SQL Sorğusunda WHERE Şərtinin Unudulması Səbəbilə Bütün Sətirlərin Silinməsi",
        "title": "SQL Sorğusunda WHERE Şərtinin Unudulması Səbəbilə Bütün Sətirlərin Silinməsi",
        "tesvir": "Yalnız 105 nömrəli istifadəçi silinməli və 'Silinən sətir sayı: 1' çap olunmalıdır, lakin SQL sorğusunda 'WHERE' şərti unudulduğu üçün bazadakı bütün sətirlər silinir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Yalnız 105 nömrəli istifadəçi silinməli və 'Silinən sətir sayı: 1' çap olunmalıdır, lakin SQL sorğusunda 'WHERE' şərti unudulduğu üçün bazadakı bütün sətirlər silinir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let bazaSetirleri = [\n  { id: 101, ad: \"Əli\" },\n  { id: 102, ad: \"Nigar\" },\n  { id: 105, ad: \"Samir\" }\n];\n\nfunction silIstifadeci(sql, targetId) {\n  // XƏTA: WHERE şərti olmadıqda DELETE cədvəldəki hər şeyi silir!\n  if (!sql.toUpperCase().includes(\"WHERE\")) {\n    const say = bazaSetirleri.length;\n    bazaSetirleri = [];\n    return say;\n  }\n  const evvel = bazaSetirleri.length;\n  bazaSetirleri = bazaSetirleri.filter(u => u.id !== targetId);\n  return evvel - bazaSetirleri.length;\n}\n\n// XƏTA: WHERE unudulub!\nconst query = \"DELETE FROM users\";\nconst silinen = silIstifadeci(query, 105);\nconsole.log(\"Silinən sətir sayı:\", silinen);",
        "correctCode": "let bazaSetirleri = [\n  { id: 101, ad: \"Əli\" },\n  { id: 102, ad: \"Nigar\" },\n  { id: 105, ad: \"Samir\" }\n];\n\nfunction silIstifadeci(sql, targetId) {\n  if (!sql.toUpperCase().includes(\"WHERE\")) {\n    const say = bazaSetirleri.length;\n    bazaSetirleri = [];\n    return say;\n  }\n  const evvel = bazaSetirleri.length;\n  bazaSetirleri = bazaSetirleri.filter(u => u.id !== targetId);\n  return evvel - bazaSetirleri.length;\n}\n\nconst query = \"DELETE FROM users WHERE id = $1\";\nconst silinen = silIstifadeci(query, 105);\nconsole.log(\"Silinən sətir sayı:\", silinen);",
        "expectedOutput": "Silinən sətir sayı: 1",
        "correctOutput": "Silinən sətir sayı: 1",
        "ipuclari": [
          "1-ci ipucu: SQL-də DELETE və UPDATE əmrləri həmişə hansı sətirlərin hədəf alındığını müəyyən edən şərtə malik olmalıdır.",
          "2-ci ipucu: Sorğuya ' WHERE id = $1' şərtini əlavə edin."
        ],
        "hint": "Sorğunu 'DELETE FROM users WHERE id = $1' olaraq yeniləyin.",
        "izah": "WHERE şərti olmadan icra edilən DELETE və ya UPDATE əmrləri verilənlər bazasındakı bütün məlumatların dərhal məhvinə gətirib çıxarır. İstehsalatda bu, ən təhlükəli təcrübəsizlik xətalarından biri hesab edilir.",
        "explanation": "WHERE şərti olmadan icra edilən DELETE və ya UPDATE əmrləri verilənlər bazasındakı bütün məlumatların dərhal məhvinə gətirib çıxarır. İstehsalatda bu, ən təhlükəli təcrübəsizlik xətalarından biri hesab edilir."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TASKS_PANEL_DATA: typeof TASKS_PANEL_DATA !== 'undefined' ? TASKS_PANEL_DATA : [],
        ERRORS_PANEL_DATA: typeof ERRORS_PANEL_DATA !== 'undefined' ? ERRORS_PANEL_DATA : []
    };
}

