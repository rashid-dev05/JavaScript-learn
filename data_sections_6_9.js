var SECTIONS_6_9 = [
  {
    "id": "section-6",
    "title": "Bölmə 6: Massivlər (Arrays) və Əsas Metodlar",
    "icon": "📚",
    "topics": [
      {
        "id": "topic-6-1",
        "title": "Massiv Nədir və İndeksləmə",
        "theory": "<h3>📚 Massiv (Array) Nədir?</h3>\n<p><strong>Massiv (Array)</strong> — bir neçə məlumatı tək bir dəyişən daxilində nizamlı şəkildə saxlamağa imkan verən xüsusi məlumat strukturudur. Kvadrat mötərizələr <code>[ ]</code> ilə yaradılır və elementlər vergüllə ayrılır:</p>\n<pre><code>const meyveler = [\"Alma\", \"Banan\", \"Gilas\"];</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Qarderob Rəfi Analogiyası:</strong> Massivi nömrələnmiş rəfləri olan böyük bir qarderob kimi düşünün. Hər rəfdə bir əşya saxlanılır və hər rəfin özünəməxsus nömrəsi (indeksi) var.\n</div>\n\n<h4>İndeksləmə Qaydası (Sıfırdan Başlayır!):</h4>\n<p>Massivdə sayma həmişə <strong>0-dan başlayır</strong>:</p>\n<ul>\n  <li><code>meyveler[0]</code> (\rightarrow) <code>\"Alma\"</code> (0-cı indeks, birinci element)</li>\n  <li><code>meyveler[1]</code> (\rightarrow) <code>\"Banan\"</code> (1-ci indeks, ikinci element)</li>\n  <li><code>meyveler[2]</code> (\rightarrow) <code>\"Gilas\"</code> (2-ci indeks, üçüncü element)</li>\n</ul>\n\n<p><strong>Massivin Uzunluğu (<code>.length</code>) və Sonuncu Element:</strong><br>\nMassivdə neçə element olduğunu öyrənmək üçün <code>.length</code> xassəsindən istifadə edilir. Sonuncu elementi tapmaq üçün klassik <code>arr[arr.length - 1]</code> və ya müasir <code>arr.at(-1)</code> yazılır.</p>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Çoxölçülü Massivlər və Matrislər (2D Arrays / Matrices)</h4>\n<p>Massivin daxilində digər massivləri yerləşdirməklə <strong>çoxölçülü massivlər (matrislər)</strong> formalaşdırılır. Şahmat lövhəsi, koordinat toru və piksel cədvəlləri məhz bu arxitektura ilə qurulur:</p>\n\n<pre><code>const matris = [\n  [10, 20, 30], // Sətir 0\n  [40, 50, 60], // Sətir 1\n  [70, 80, 90]  // Sətir 2\n];\n\n// Matris elementinə giriş: matris[sətirİndeksi][sütunİndeksi]\nconsole.log(matris[1][2]); // 60 (1-ci sətir, 2-ci sütun)</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Sərhəd Aşımı Xətası (Out of Bounds):</strong> Əgər mövcud olmayan sətrin sütununu oxumağa cəhd etsəniz (məs: <code>matris[5][0]</code>), <code>matris[5]</code> <code>undefined</code> qaytaracaq və <code>undefined[0]</code> dərhal <code>TypeError: Cannot read properties of undefined</code> qəzası törədəcəkdir!\n</div>",
        "codeExamples": [
          {
            "title": "Massiv və İndekslər",
            "code": "const diller = [\"JavaScript\", \"TypeScript\", \"HTML\"];\nconsole.log(diller[0]);\nconsole.log(\"Element sayı:\", diller.length);\nconsole.log(\"Sonuncu element:\", diller[diller.length - 1]);",
            "output": "JavaScript\nElement sayı: 3\nSonuncu element: HTML"
          },
          {
            "title": "İkiölçülü Matris Koordinatları",
            "code": "const koordinatlar = [\n  [\"A1\", \"B1\"],\n  [\"A2\", \"B2\"]\n];\nconsole.log(\"Sol aşağı künc:\", koordinatlar[1][0]);",
            "output": "Sol aşağı künc: A2"
          }
        ],
        "exercises": [
          {
            "id": "ex-6-1-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Massivin İlkin Elementinə Giriş",
            "instruction": "Verilmiş <code>seherler</code> siyahısının başlanğıcında (ilk indeksində) qərarlaşan şəhər adını təyin edərək konsola çıxarın.",
            "starterCode": "const seherler = [\"Bakı\", \"Gəncə\", \"Sumqayıt\"];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Bakı",
            "hint": "Massivlərdə indekslənmə 0-dan başlayır; ilk elementi əldə etmək üçün massivAdi[0] sintaksisindən istifadə olunur.",
            "solutionCode": "const seherler = [\"Bakı\", \"Gəncə\", \"Sumqayıt\"];\nconsole.log(seherler[0]);"
          },
          {
            "id": "ex-6-1-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Siyahı Elementinin Yenilənməsi",
            "instruction": "Rənglər massivində ikinci sırada dayanan rəngi \"Sarı\" ilə əvəzləyin və dəyişiklikdən sonra yenilənmiş tam massivi konsol ekranında əks etdirin.",
            "starterCode": "let rengler = [\"Qırmızı\", \"Yaşıl\", \"Mavi\"];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[\n  \"Qırmızı\",\n  \"Sarı\",\n  \"Mavi\"\n]",
            "hint": "Massivin müəyyən indeksindəki dəyəri dəyişmək üçün massiv[indeks] = yeniDeyer mənimsətməsi icra olunur.",
            "solutionCode": "let rengler = [\"Qırmızı\", \"Yaşıl\", \"Mavi\"];\nrengler[1] = \"Sarı\";\nconsole.log(rengler);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-6-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Son Element İndeksi Səhvi",
            "instruction": "Aşağıdakı kodda sonuncu elementi tapmaq üçün arr.length yazılıb və bu undefined verir (çünki indekslər 0-dan başlayır). Kodu arr.length - 1 ilə düzəldin ki, 30 çap olunsun.",
            "description": "Aşağıdakı kodda sonuncu elementi tapmaq üçün arr.length yazılıb və bu undefined verir (çünki indekslər 0-dan başlayır). Kodu arr.length - 1 ilə düzəldin ki, 30 çap olunsun.",
            "buggyCode": "const reqemler = [10, 20, 30];\nconsole.log(reqemler[reqemler.length]);",
            "correctCode": "const reqemler = [10, 20, 30];\nconsole.log(reqemler[reqemler.length - 1]);",
            "correctOutput": "30",
            "expectedOutput": "30",
            "explanation": "Massivdə sonuncu elementin indeksi uzunluqdan 1 vahid kiçikdir (arr[arr.length - 1]).",
            "hint": "reqemler.length - 1 indeksini istifadə edin."
          }
        ],
        "bugFix": {
          "id": "bug-6-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Son Element İndeksi Səhvi",
          "instruction": "Aşağıdakı kodda sonuncu elementi tapmaq üçün arr.length yazılıb və bu undefined verir (çünki indekslər 0-dan başlayır). Kodu arr.length - 1 ilə düzəldin ki, 30 çap olunsun.",
          "description": "Aşağıdakı kodda sonuncu elementi tapmaq üçün arr.length yazılıb və bu undefined verir (çünki indekslər 0-dan başlayır). Kodu arr.length - 1 ilə düzəldin ki, 30 çap olunsun.",
          "buggyCode": "const reqemler = [10, 20, 30];\nconsole.log(reqemler[reqemler.length]);",
          "correctCode": "const reqemler = [10, 20, 30];\nconsole.log(reqemler[reqemler.length - 1]);",
          "correctOutput": "30",
          "expectedOutput": "30",
          "explanation": "Massivdə sonuncu elementin indeksi uzunluqdan 1 vahid kiçikdir (arr[arr.length - 1]).",
          "hint": "reqemler.length - 1 indeksini istifadə edin."
        }
      },
      {
        "id": "topic-6-2",
        "title": "Element Əlavə və Silmə: push(), pop(), shift(), unshift()",
        "theory": "<h3>📥 Massivdə Əlavə və Silmə Əməliyyatları</h3>\n<p>Massivin başlanğıcına və ya sonuna yeni elementlər əlavə etmək və mövcud elementləri çıxarmaq üçün 4 təməl metoddan istifadə edilir:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Metod</th>\n        <th>Hərəkət</th>\n        <th>Yerləşmə Mövqeyi</th>\n        <th>Performans (Zaman Mürəkkəbliyi)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td><code>push(el)</code></td><td>Yeni element əlavə edir</td><td>Massivin <strong>sonuna</strong></td><td>(O(1)) — Çox sürətli</td></tr>\n      <tr><td><code>pop()</code></td><td>Elementi silir və qaytarır</td><td>Massivin <strong>sonundan</strong></td><td>(O(1)) — Çox sürətli</td></tr>\n      <tr><td><code>unshift(el)</code></td><td>Yeni element əlavə edir</td><td>Massivin <strong>əvvəlinə</strong></td><td>(O(N)) — Bütün indekslər sürüşür</td></tr>\n      <tr><td><code>shift()</code></td><td>Elementi silir və qaytarır</td><td>Massivin <strong>əvvəlindən</strong></td><td>(O(N)) — Bütün indekslər sürüşür</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"tip-box\">\n  <strong>💡 Qatar Vaqonları Analogiyası:</strong> Qatara arxadan yeni vaqon qoşmaq (<code>push</code>) və ya arxadakı vaqonu açmaq (<code>pop</code>) heç bir digər vaqonun yerini dəyişmir. Lakin qatarın ən önünə yeni vaqon salmaq (<code>unshift</code>) arxadakı bütün vaqonları geriyə doğru sürüşdürməyi tələb edir!\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Python append() Tələsi:</strong> Python-dan fərqli olaraq JavaScript massivlərində <code>append()</code> metodu yoxdur! Sonluğa əlavə etmək üçün həmişə <code>push()</code> yazılmalıdır.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Yığın (Stack - LIFO) və Növbə (Queue - FIFO) Modelləri</h4>\n<p>Klassik məlumat strukturlarını massiv metodları vasitəsilə asanlıqla reallaşdırmaq mümkündür:</p>\n<ol>\n  <li><strong>Yığın (Stack — LIFO: Last In, First Out):</strong> Son daxil olan ilk çıxır (məsələn, üst-üstə yığılmış boşqablar). Brauzerin \"Geri\" düyməsi və funksiya çağırış qalağı (Call Stack) belə işləyir:\n    <pre><code>const yigin = [];\nyigin.push(\"Səhifə 1\");\nyigin.push(\"Səhifə 2\");\nconst sonSehife = yigin.pop(); // \"Səhifə 2\" çıxdı</code></pre>\n  </li>\n  <li><strong>Növbə (Queue — FIFO: First In, First Out):</strong> İlk daxil olan ilk çıxır (məsələn, kassa qarşısındakı canlı növbə):\n    <pre><code>const novbe = [];\nnovbe.push(\"Müştəri A\"); // Növbəyə daxil olur\nnovbe.push(\"Müştəri B\");\nconst xidmetEdilen = novbe.shift(); // \"Müştəri A\" ilk xidmət alır</code></pre>\n  </li>\n</ol>",
        "codeExamples": [
          {
            "title": "push() və pop() Nümunəsi",
            "code": "const ededler = [1, 2];\nededler.push(3); // [1, 2, 3]\nconsole.log(ededler);\n\nconst silinen = ededler.pop(); // 3 silinir\nconsole.log(\"Silindi:\", silinen);\nconsole.log(\"Qaldı:\", ededler);",
            "output": "[\n  1,\n  2,\n  3\n]\nSilindi: 3\nQaldı: [\n  1,\n  2\n]"
          },
          {
            "title": "Növbə (Queue) Simulyasiyası",
            "code": "const printerNovbesi = [];\nprinterNovbesi.push(\"Sənəd_1.pdf\");\nprinterNovbesi.push(\"Sənəd_2.pdf\");\nconsole.log(\"Çapa getdi:\", printerNovbesi.shift());",
            "output": "Çapa getdi: Sənəd_1.pdf"
          }
        ],
        "exercises": [
          {
            "id": "ex-6-2-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Siyahının Sonuna Yeni Element Əlavəsi",
            "instruction": "Mövcud adlar siyahısının sonuna yeni \"Nigar\" adını daxil edin və genişlənmiş massivi konsola çıxarın.",
            "starterCode": "const adlar = [\"Leyla\", \"Murad\"];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[\n  \"Leyla\",\n  \"Murad\",\n  \"Nigar\"\n]",
            "hint": "Massivin sonuna bir və ya bir neçə element əlavə etmək üçün standart push() metodundan istifadə edilir.",
            "solutionCode": "const adlar = [\"Leyla\", \"Murad\"];\nadlar.push(\"Nigar\");\nconsole.log(adlar);"
          },
          {
            "id": "ex-6-2-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Sonuncu Elementin Xaric Edilməsi",
            "instruction": "Xallar kolleksiyasından ən sondakı sonuncu göstəricini çıxarın və yerdə qalan yekun massivi konsol pəncərəsində nümayiş etdirin.",
            "starterCode": "const xallar = [10, 20, 99];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[\n  10,\n  20\n]",
            "hint": "Massivin sonuncu elementini silmək və massivi qısaltmaq üçün pop() metodundan istifadə olunur.",
            "solutionCode": "const xallar = [10, 20, 99];\nxallar.pop();\nconsole.log(xallar);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-6-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "append() Əvəzinə push() İstifadəsi",
            "instruction": "Aşağıdakı kodda Python vərdişi ilə append() çağırıldığı üçün TypeError baş verir. Onu JavaScript-in push() metodu ilə əvəzləyin.",
            "description": "Aşağıdakı kodda Python vərdişi ilə append() çağırıldığı üçün TypeError baş verir. Onu JavaScript-in push() metodu ilə əvəzləyin.",
            "buggyCode": "const siyahı = [1, 2];\nsiyahı.append(3);\nconsole.log(siyahı);",
            "correctCode": "const siyahı = [1, 2];\nsiyahı.push(3);\nconsole.log(siyahı);",
            "correctOutput": "[\n  1,\n  2,\n  3\n]",
            "expectedOutput": "[\n  1,\n  2,\n  3\n]",
            "explanation": "JavaScript massivlərində append() metodu yoxdur, element əlavə etmək üçün push() istifadə olunmalıdır.",
            "hint": "append əvəzinə push yazın."
          }
        ],
        "bugFix": {
          "id": "bug-6-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "append() Əvəzinə push() İstifadəsi",
          "instruction": "Aşağıdakı kodda Python vərdişi ilə append() çağırıldığı üçün TypeError baş verir. Onu JavaScript-in push() metodu ilə əvəzləyin.",
          "description": "Aşağıdakı kodda Python vərdişi ilə append() çağırıldığı üçün TypeError baş verir. Onu JavaScript-in push() metodu ilə əvəzləyin.",
          "buggyCode": "const siyahı = [1, 2];\nsiyahı.append(3);\nconsole.log(siyahı);",
          "correctCode": "const siyahı = [1, 2];\nsiyahı.push(3);\nconsole.log(siyahı);",
          "correctOutput": "[\n  1,\n  2,\n  3\n]",
          "expectedOutput": "[\n  1,\n  2,\n  3\n]",
          "explanation": "JavaScript massivlərində append() metodu yoxdur, element əlavə etmək üçün push() istifadə olunmalıdır.",
          "hint": "append əvəzinə push yazın."
        }
      },
      {
        "id": "topic-6-3",
        "title": "Massivin Hissəsini Kəsmək: slice() və splice()",
        "theory": "<h3>✂️ slice() və splice() Metodları</h3>\n<p>Massivdən müəyyən hissəni kəsmək və ya daxilinə müdaxilə etmək üçün iki fərqli metod mövcuddur:</p>\n\n<ul>\n  <li><strong><code>slice(start, end)</code> (Dəyişməz / Immutable):</strong> Orijinal massivə toxunmur. Göstərilən aralıqdan yeni alt-massiv nüsxələyib qaytarır (<code>end</code> indeksi daxil edilmir).</li>\n  <li><strong><code>splice(start, silinənSay, ...yeniElementlər)</code> (Dəyişdirən / Mutable):</strong> Orijinal massivi birbaşa yerində dəyişir. İstənilən indeksdən elementləri silir və ya yenilərini daxil edir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Tort Dilimi Analogiyası:</strong> <code>slice</code> sözü ingiliscə \"dilimləmək\" deməkdir — tortdan bir dilim kəsib boşqaba qoyursunuz, böyük tort bütöv qalır. <code>splice</code> isə cərrahi müdaxilədir — massivin gövdəsinə daxil olub elementləri çıxarır və ya içinə yeni element calayır!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Massivin Yerində Fırladılması (Array Rotation) və Dəyişməzlik (Immutability)</h4>\n<p>Massivin elementlərini (k) addım sağa fırlatmaq (rotation) üçün massiv metodlarının birgə tətbiqi:</p>\n\n<pre><code>function massiviFirlat(arr, k) {\n  const addim = k % arr.length;\n  // Sondan k sayda elementi kəsib əvvələ calayırıq:\n  const quyruq = arr.splice(-addim);\n  arr.unshift(...quyruq);\n  return arr;\n}\nconsole.log(massiviFirlat([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Reaktiv Frontend Standartı:</strong> React və Redux kimi müasir framework-lərdə vəziyyətin (state) birbaşa dəyişdirilməsi qadağandır. Buna görə də komponentlərdə <code>splice()</code> yerinə həmişə toxunulmaz <code>slice()</code> və ya spread <code>[...arr]</code> seçilməlidir!\n</div>",
        "codeExamples": [
          {
            "title": "slice() Nümunəsi",
            "code": "const herfler = [\"A\", \"B\", \"C\", \"D\"];\nconst hisse = herfler.slice(1, 3);\n\nconsole.log(\"Kəsilən:\", hisse);\nconsole.log(\"Orijinal toxunulmaz qaldı:\", herfler);",
            "output": "Kəsilən: [\n  \"B\",\n  \"C\"\n]\nOrijinal toxunulmaz qaldı: [\n  \"A\",\n  \"B\",\n  \"C\",\n  \"D\"\n]"
          },
          {
            "title": "splice() ilə Element Dəyişimi",
            "code": "const aylar = [\"Yanvar\", \"Aprel\"];\naylar.splice(1, 0, \"Fevral\", \"Mart\"); // 1-ci indeksə əlavə edir\nconsole.log(aylar);",
            "output": "[\n  \"Yanvar\",\n  \"Fevral\",\n  \"Mart\",\n  \"Aprel\"\n]"
          }
        ],
        "exercises": [
          {
            "id": "ex-6-3-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Alt Massivin Kəsilib Ayrılması",
            "instruction": "Təqvim aylarını əks etdirən siyahıdan ilk iki ayı yeni massiv şəklində kəsib ayıraraq konsol ekranına göndərin.",
            "starterCode": "const aylar = [\"Yanvar\", \"Fevral\", \"Mart\", \"Aprel\"];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[\n  \"Yanvar\",\n  \"Fevral\"\n]",
            "hint": "Orijinal massivi dəyişmədən müəyyən aralıqdakı elementləri nüsxələmək üçün slice(baslangic, son) metodundan istifadə edin.",
            "solutionCode": "const aylar = [\"Yanvar\", \"Fevral\", \"Mart\", \"Aprel\"];\nconsole.log(aylar.slice(0, 2));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-6-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "slice() Orijinalı Dəyişmir",
            "instruction": "Aşağıdakı proqramçı reqemler.slice(0, 2) çağırdıqdan sonra orijinal reqemler massivinin qısaldığını zənn edir. Kodu elə düzəldin ki, kəsilmiş hissə konsola çıxsın.",
            "description": "Aşağıdakı proqramçı reqemler.slice(0, 2) çağırdıqdan sonra orijinal reqemler massivinin qısaldığını zənn edir. Kodu elə düzəldin ki, kəsilmiş hissə konsola çıxsın.",
            "buggyCode": "const reqemler = [1, 2, 3, 4];\nreqemler.slice(0, 2);\nconsole.log(reqemler);",
            "correctCode": "const reqemler = [1, 2, 3, 4];\nconst netice = reqemler.slice(0, 2);\nconsole.log(netice);",
            "correctOutput": "[\n  1,\n  2\n]",
            "expectedOutput": "[\n  1,\n  2\n]",
            "explanation": "slice() metodu orijinal massivi dəyişmir, kəsilmiş yeni massivi qaytarır. Onu dəyişənə mənimsətmək və ya birbaşa çap etmək lazımdır.",
            "hint": "slice nəticəsini yeni dəyişənə mənimsədib çap edin."
          }
        ],
        "bugFix": {
          "id": "bug-6-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "slice() Orijinalı Dəyişmir",
          "instruction": "Aşağıdakı proqramçı reqemler.slice(0, 2) çağırdıqdan sonra orijinal reqemler massivinin qısaldığını zənn edir. Kodu elə düzəldin ki, kəsilmiş hissə konsola çıxsın.",
          "description": "Aşağıdakı proqramçı reqemler.slice(0, 2) çağırdıqdan sonra orijinal reqemler massivinin qısaldığını zənn edir. Kodu elə düzəldin ki, kəsilmiş hissə konsola çıxsın.",
          "buggyCode": "const reqemler = [1, 2, 3, 4];\nreqemler.slice(0, 2);\nconsole.log(reqemler);",
          "correctCode": "const reqemler = [1, 2, 3, 4];\nconst netice = reqemler.slice(0, 2);\nconsole.log(netice);",
          "correctOutput": "[\n  1,\n  2\n]",
          "expectedOutput": "[\n  1,\n  2\n]",
          "explanation": "slice() metodu orijinal massivi dəyişmir, kəsilmiş yeni massivi qaytarır. Onu dəyişənə mənimsətmək və ya birbaşa çap etmək lazımdır.",
          "hint": "slice nəticəsini yeni dəyişənə mənimsədib çap edin."
        }
      },
      {
        "id": "topic-6-4",
        "title": "Axtarış və Çevirmə: includes(), indexOf(), join()",
        "theory": "<h3>🔎 Massivdə Axtarış və Birləşdirmə</h3>\n<p>Massiv daxilində axtarış aparmaq və ya elementləri mətnə çevirmək üçün ən çox istifadə olunan metodlar:</p>\n\n<ul>\n  <li><strong><code>includes(element)</code>:</strong> Elementin massivdə mövcudluğunu yoxlayır və <code>true</code> və ya <code>false</code> qaytarır.</li>\n  <li><strong><code>indexOf(element)</code>:</strong> Axtarılan elementin birinci rast gəlinən indeksini tapır. Əgər element <strong>tapılmazsa -1</strong> qaytarır.</li>\n  <li><strong><code>join(ayırıcı)</code>:</strong> Massivin bütün elementlərini verilmiş ayırıcı simvolla yapışdıraraq tək bir mətnə (String) çevirir.</li>\n  <li><strong><code>reverse()</code>:</strong> Massivi yerində tərsinə çevirir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Qeydiyyat Siyahısı Analogiyası:</strong> Tədbirə gələn qonağın siyahıda olub-olmadığını tez bilmək üçün <code>includes(\"Murad\")</code> çağırırıq. Əgər qonağın neçənci sırada oturduğunu bilmək lazımdırsa, <code>indexOf(\"Murad\")</code> kömək edir!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Çoxluqların Kəsişməsi (Intersection) və Unikal Elementlər</h4>\n<p>İki massiv arasında ortaq elementlərin tapılması (Intersection) və təkrar elementlərin təmizlənməsi alqoritmi:</p>\n\n<pre><code>// 1. İki massivin kəsişməsi (Intersection):\nfunction kesismeTap(arr1, arr2) {\n  return arr1.filter(item => arr2.includes(item));\n}\nconsole.log(kesismeTap([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]\n\n// 2. Təkrarların təmizlənməsi (Deduplication):\nfunction unikalEt(arr) {\n  const unikal = [];\n  for (const item of arr) {\n    if (!unikal.includes(item)) {\n      unikal.push(item);\n    }\n  }\n  return unikal;\n}\nconsole.log(unikalEt([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]</code></pre>",
        "codeExamples": [
          {
            "title": "includes() və join() Nümunəsi",
            "code": "const diller = [\"HTML\", \"CSS\", \"JS\"];\nconsole.log(diller.includes(\"JS\")); // true\nconsole.log(diller.includes(\"Java\")); // false\nconsole.log(diller.join(\" -> \"));",
            "output": "true\nfalse\nHTML -> CSS -> JS"
          },
          {
            "title": "indexOf() ilə Mövcudluq Yoxlanışı",
            "code": "const meyveler = [\"Alma\", \"Armud\"];\nconsole.log(\"İndeks:\", meyveler.indexOf(\"Armud\")); // 1\nconsole.log(\"Yoxdur:\", meyveler.indexOf(\"Gilas\")); // -1",
            "output": "İndeks: 1\nYoxdur: -1"
          }
        ],
        "exercises": [
          {
            "id": "ex-6-4-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Elementin Mövcudluğunun Təyini",
            "instruction": "Meyvələr siyahısında \"Gilas\" elementinin mövcud olub-olmadığını yoxlayın və əldə olunan məntiqi nəticəni (false) konsolda əks etdirin.",
            "starterCode": "const meyveler = [\"Alma\", \"Armud\"];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "false",
            "hint": "Massivdə axtarılan elementin olub-olmadığını yoxlamaq üçün boolean qaytaran includes() metodundan istifadə edilir.",
            "solutionCode": "const meyveler = [\"Alma\", \"Armud\"];\nconsole.log(meyveler.includes(\"Gilas\"));"
          },
          {
            "id": "ex-6-4-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Siyahı Elementlərinin Mətnə Birləşdirilməsi",
            "instruction": "Ayrı-ayrı sözlərdən ibarət olan massivi aralarında bir simvolluq boşluq qoyaraq bütöv bir cümlə mətni şəklində konsola çıxarın.",
            "starterCode": "const sozler = [\"JavaScript\", \"çox\", \"maraqlıdır\"];\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "JavaScript çox maraqlıdır",
            "hint": "Massiv elementlərini müəyyən ayırıcı ilə birləşdirib sətir halına gətirmək üçün join() metodundan istifadə olunur.",
            "solutionCode": "const sozler = [\"JavaScript\", \"çox\", \"maraqlıdır\"];\nconsole.log(sozler.join(\" \"));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-6-4-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Python in Operatoru Xətası",
            "instruction": "Aşağıdakı kodda massivdə axtarış üçün Python sintaksisi (in) yazılıb. Onu JavaScript-in includes() metodu ilə düzəldin.",
            "description": "Aşağıdakı kodda massivdə axtarış üçün Python sintaksisi (in) yazılıb. Onu JavaScript-in includes() metodu ilə düzəldin.",
            "buggyCode": "const seherler = [\"Bakı\", \"Gəncə\"];\nconsole.log(\"Bakı\" in seherler);",
            "correctCode": "const seherler = [\"Bakı\", \"Gəncə\"];\nconsole.log(seherler.includes(\"Bakı\"));",
            "correctOutput": "true",
            "expectedOutput": "true",
            "explanation": "JavaScript-də massivdə dəyərin olub-olmadığını yoxlamaq üçün includes() metodundan istifadə olunmalıdır ('in' açar sözü indeksləri yoxlayır).",
            "hint": "seherler.includes(\"Bakı\") yazın."
          }
        ],
        "bugFix": {
          "id": "bug-6-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Python in Operatoru Xətası",
          "instruction": "Aşağıdakı kodda massivdə axtarış üçün Python sintaksisi (in) yazılıb. Onu JavaScript-in includes() metodu ilə düzəldin.",
          "description": "Aşağıdakı kodda massivdə axtarış üçün Python sintaksisi (in) yazılıb. Onu JavaScript-in includes() metodu ilə düzəldin.",
          "buggyCode": "const seherler = [\"Bakı\", \"Gəncə\"];\nconsole.log(\"Bakı\" in seherler);",
          "correctCode": "const seherler = [\"Bakı\", \"Gəncə\"];\nconsole.log(seherler.includes(\"Bakı\"));",
          "correctOutput": "true",
          "expectedOutput": "true",
          "explanation": "JavaScript-də massivdə dəyərin olub-olmadığını yoxlamaq üçün includes() metodundan istifadə olunmalıdır ('in' açar sözü indeksləri yoxlayır).",
          "hint": "seherler.includes(\"Bakı\") yazın."
        }
      }
    ]
  },
  {
    "id": "section-7",
    "title": "Bölmə 7: Funksiyalar (Declarations, Arrow Functions, Default Parametrlər)",
    "icon": "⚡",
    "topics": [
      {
        "id": "topic-7-1",
        "title": "Funksiya Nədir və Function Declaration",
        "theory": "<h3>⚡ Funksiya Nədir?</h3>\n<p><strong>Funksiya</strong> — müəyyən bir tapşırığı yerinə yetirən və proqramın istənilən yerindən təkrar-təkrar çağırıla bilən müstəqil kod blokudur. Proqramlaşdırmanın qızıl qaydası olan <strong>DRY (Don't Repeat Yourself - Özünü Təkrarlama)</strong> prinsipinə xidmət edir.</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Şirəçəkən Maşın Analogiyası:</strong> Funksiyanı mətbəxdəki şirəçəkən maşına bənzədə bilərsiniz. Parametr kimi ona meyvə (arqument) veririk, daxildə onu sıxır və nəticə olaraq bizə <code>return</code> ilə təzə şirə qaytarır!\n</div>\n\n<h4>Klassik Funksiya Sintaksisi (Function Declaration):</h4>\n<pre><code>function topla(a, b) {\n  return a + b; // Hesablanmış dəyəri geri qaytarır\n}\n\nlet netice = topla(10, 20); // Funksiyanın çağırılması\nconsole.log(netice); // 30</code></pre>\n\n<ul>\n  <li><strong>Parametr:</strong> Funksiya elan edilərkən mötərizə içində qəbul ediləcək dəyişənlərdir (məs: <code>a</code> və <code>b</code>).</li>\n  <li><strong>Arqument:</strong> Funksiyanı çağırarkən ona ötürdüyümüz real qiymətlərdir (məs: <code>10</code> və <code>20</code>).</li>\n  <li><strong>return:</strong> Funksiyanın icrasını dərhal dayandırır və hesablanmış nəticəni kənara ötürür.</li>\n  <li><strong>Hoisting (Qaldırılma):</strong> <code>function</code> açar sözü ilə elan edilən funksiyalar yuxarı qaldırıldığı üçün onları təyin olunduqları sətirdən əvvəl də çağırmaq mümkündür.</li>\n</ul>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Rekursiya və Baza Çıxış Şərtləri (Recursion & Base Condition)</h4>\n<p><strong>Rekursiya (Recursion)</strong> — funksiyanın öz-özünü birbaşa və ya dolayısı ilə çağırması prosesidir. Ağacvari strukturlar, qovluq iyerarxiyaları və riyazi silsilələr üçün ən güclü alətdir.</p>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Baza Şərtinin (Base Condition) Həyati Vacibliyi:</strong><br>\n  Hər bir rekursiv funksiyanın daxilində çağırışı dayandıran <strong>baza şərti</strong> mütləq olmalıdır! Əks halda funksiya sonsuz zəncir yaradacaq və Call Stack daşaraq <code>RangeError: Maximum call stack size exceeded</code> qəzası baş verəcəkdir.\n</div>\n\n<p><strong>Rekursiv Faktorial Hesablayıcı Nümunəsi ((n!)):</strong></p>\n<pre><code>function faktorial(n) {\n  // 1. Baza çıxış şərti:\n  if (n <= 1) return 1;\n\n  // 2. Rekursiv addım:\n  return n * faktorial(n - 1);\n}\n\nconsole.log(faktorial(5)); // 5 * 4 * 3 * 2 * 1 = 120</code></pre>",
        "codeExamples": [
          {
            "title": "Toplama Funksiyası",
            "code": "function topla(a, b) {\n  return a + b;\n}\n\nlet cem = topla(15, 25);\nconsole.log(\"Cəm:\", cem);",
            "output": "Cəm: 40"
          },
          {
            "title": "Rekursiv Geri Sayım",
            "code": "function geriSayim(n) {\n  if (n === 0) {\n    console.log(\"Start!\");\n    return;\n  }\n  console.log(n);\n  geriSayim(n - 1);\n}\ngeriSayim(3);",
            "output": "3\n2\n1\nStart!"
          }
        ],
        "exercises": [
          {
            "id": "ex-7-1-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Kvadrat Hesablayan Funksiyanın Tərtibi",
            "instruction": "Qəbul etdiyi ədədi parametr kimi dəyərləndirib onun riyazi kvadratını geri qaytaran <code>kvadrat</code> funksiyasını tərtib edin və 5 arqumenti üçün nəticəni (25) konsola çıxarın.",
            "starterCode": "function kvadrat(eded) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(kvadrat(5));\n",
            "expectedOutput": "25",
            "hint": "Funksiyadan nəticəni kənara ötürmək üçün return açar sözündən istifadə edin (məsələn, return eded * eded).",
            "solutionCode": "function kvadrat(eded) {\n  return eded * eded;\n}\n\nconsole.log(kvadrat(5));"
          },
          {
            "id": "ex-7-1-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Fərdiləşdirilmiş Salamlama Generatoru",
            "instruction": "Daxil edilən ad məlumatını qəbul edərək \"Salam, [ad]\" formatında fərdiləşdirilmiş salamlama mətni qaytaran <code>salamla</code> funksiyası hazırlayın və \"Əli\" üçün nəticəni ekrana verin.",
            "starterCode": "function salamla(ad) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(salamla(\"Əli\"));\n",
            "expectedOutput": "Salam, Əli",
            "hint": "Mətnləri birləşdirmək üçün toplama (+) operatorundan və ya şablon sətirlərdən istifadə edərək mətni return edin.",
            "solutionCode": "function salamla(ad) {\n  return \"Salam, \" + ad;\n}\n\nconsole.log(salamla(\"Əli\"));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-7-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Python def Açar Sözü Xətası",
            "instruction": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
            "description": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
            "buggyCode": "def vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
            "correctCode": "function vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
            "correctOutput": "20",
            "expectedOutput": "20",
            "explanation": "JavaScript-də funksiyalar 'def' ilə deyil, 'function' açar sözü ilə elan edilir.",
            "hint": "def sözünü function ilə əvəzləyin."
          }
        ],
        "bugFix": {
          "id": "bug-7-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Python def Açar Sözü Xətası",
          "instruction": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
          "description": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
          "buggyCode": "def vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
          "correctCode": "function vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
          "correctOutput": "20",
          "expectedOutput": "20",
          "explanation": "JavaScript-də funksiyalar 'def' ilə deyil, 'function' açar sözü ilə elan edilir.",
          "hint": "def sözünü function ilə əvəzləyin."
        }
      },
      {
        "id": "topic-7-2",
        "title": "Standart (Default) Parametrlər və Rest Operatoru (...)",
        "theory": "<h3>⚙️ Standart (Default) Parametrlər</h3>\n<p>Funksiyanı çağırarkən hər hansı parametr ötürülmədikdə onun <code>undefined</code> olub hesabı pozmaması üçün əvvəlcədən <strong>defolt dəyər</strong> təyin edirik:</p>\n<pre><code>function salamla(ad = \"Qonaq\") {\n  return \"Xoş gəldiniz, \" + ad;\n}\nconsole.log(salamla());        // \"Xoş gəldiniz, Qonaq\"\nconsole.log(salamla(\"Murad\")); // \"Xoş gəldiniz, Murad\"</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Restoran Menyu Analogiyası:</strong> Süfrəyə çörək və su standart olaraq daxildir (default parametr). Müştəri xüsusi başqa sifariş verdikdə isə standart seçim həmin sifarişlə əvəz olunur.\n</div>\n\n<h4>Rest Operatoru (<code>...parametrlər</code>):</h4>\n<p>Əgər funksiyaya neçə ədəd arqument ötürüləcəyini əvvəlcədən bilmiriksə, <strong>Rest operatoru (<code>...</code>)</strong> bütün artıq arqumentləri tək bir massivə yığır:</p>\n<pre><code>function topla(...ededler) {\n  return ededler.reduce((c, n) => c + n, 0);\n}\nconsole.log(topla(2, 4, 6)); // 12</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Yüksək Dərəcəli Funksiyalar (Higher-Order Functions) və Karrinqləmə (Currying)</h4>\n<p>JavaScript-də funksiyalar <strong>Birinci Dərəcəli Vətəndaşlardır (First-Class Citizens)</strong>: onlar dəyişənə mənimsədilə, başqa funksiyaya parametr kimi ötürülə və ya funksiyadan geri qaytarıla bilər.</p>\n\n<p><strong>1. Karrinqləmə (Currying):</strong> Çoxarqumentli funksiyanı hər dəfə yalnız tək arqument qəbul edən zəncirvari təkfunksiyalı silsiləyə çevirmək texnikasıdır:</p>\n<pre><code>// Adi forma:\nconst vur = (a, b) => a * b;\n\n// Karrinqlənmiş forma:\nconst curriedVur = a => b => a * b;\nconst ikiyeVuran = curriedVur(2); // Partial Application (Qismən tətbiq)\n\nconsole.log(ikiyeVuran(5)); // 10\nconsole.log(curriedVur(3)(4)); // 12</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Rest Parametri Həmişə Sonda Olmalıdır:</strong> <code>function test(a, ...qalanlar)</code> tamamilə qanunidir. Lakin <code>function test(...qalanlar, a)</code> yazdıqda mühərrik dərhal <code>SyntaxError: Rest parameter must be last formal parameter</code> xətası verəcəkdir!\n</div>",
        "codeExamples": [
          {
            "title": "Default Parametr Nümunəsi",
            "code": "function endirimliQiymet(qiymet, faiz = 10) {\n  return qiymet - (qiymet * faiz / 100);\n}\n\nconsole.log(endirimliQiymet(100));     // 90 (standart 10% çıxıldı)\nconsole.log(endirimliQiymet(100, 20)); // 80 (20% çıxıldı)",
            "output": "90\n80"
          },
          {
            "title": "Karrinqləmə ilə Prefiks Əlavəsi",
            "code": "const prefiksYaradan = prefiks => metn => `${prefiks}: ${metn}`;\nconst xetaLoqqeri = prefiksYaradan(\"[XƏTA]\");\n\nconsole.log(xetaLoqqeri(\"Verilənlər bazası tapılmadı!\"));",
            "output": "[XƏTA]: Verilənlər bazası tapılmadı!"
          }
        ],
        "exercises": [
          {
            "id": "ex-7-2-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Defolt Valyuta Parametri ilə Qiymətləndirmə",
            "instruction": "Məbləği və seçimli valyutanı birləşdirən <code>qiymetYaz</code> funksiyası qurun. İkinci parametr ötürülmədikdə defolt olaraq \"AZN\" tətbiq olunmalı və 50 məbləği üçün \"50 AZN\" nəticəsi qaytarılmalıdır.",
            "starterCode": "function qiymetYaz(mebleg, valyuta = \"AZN\") {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(qiymetYaz(50));\n",
            "expectedOutput": "50 AZN",
            "hint": "ES6 standartında funksiya parametrlərinə elan zamanı bərabərliklə ilkin standart dəyər (valyuta = \"AZN\") mənimsədilir.",
            "solutionCode": "function qiymetYaz(mebleg, valyuta = \"AZN\") {\n  return mebleg + \" \" + valyuta;\n}\n\nconsole.log(qiymetYaz(50));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-7-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Arqument Olmadıqda undefined Alınması",
            "instruction": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
            "description": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
            "buggyCode": "function salam(ad) {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
            "correctCode": "function salam(ad = \"Dost\") {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
            "correctOutput": "Salam, Dost",
            "expectedOutput": "Salam, Dost",
            "explanation": "Parametr ötürülmədikdə standart qiymət almaq üçün parametrə bərabərliklə default dəyər verilir: function salam(ad = 'Dost').",
            "hint": "ad = \"Dost\" yazın."
          }
        ],
        "bugFix": {
          "id": "bug-7-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Arqument Olmadıqda undefined Alınması",
          "instruction": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
          "description": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
          "buggyCode": "function salam(ad) {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
          "correctCode": "function salam(ad = \"Dost\") {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
          "correctOutput": "Salam, Dost",
          "expectedOutput": "Salam, Dost",
          "explanation": "Parametr ötürülmədikdə standart qiymət almaq üçün parametrə bərabərliklə default dəyər verilir: function salam(ad = 'Dost').",
          "hint": "ad = \"Dost\" yazın."
        }
      },
      {
        "id": "topic-7-3",
        "title": "Ox Funksiyaları (Arrow Functions - ES6)",
        "theory": "<h3>🏹 Ox Funksiyaları (Arrow Functions)</h3>\n<p>ES6 ilə gələn <strong>Arrow Function (<code>=&gt;</code>)</strong> sintaksisi funksiyaları daha yığcam və oxunaqlı yazmaq üçün standartdır:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Qısayol Oxu Analogiyası:</strong> Köhnə verbose <code>function() { return x; }</code> qatar yoludursa, ox funksiyası <code>x =&gt; x</code> hədəfə birbaşa yönələn tezyeriyən qısayoldur!\n</div>\n\n<h4>Sintaksis Qaydaları:</h4>\n<ul>\n  <li><strong>İmplisit Qayıdış (Implicit Return):</strong> Tək sətirlik ifadələrdə fiqurlu mötərizə <code>{ }</code> və <code>return</code> yazılmır, nəticə avtomatik qaytarılır: <code>const ikiqat = x =&gt; x * 2;</code></li>\n  <li><strong>Tək Parametr:</strong> Yalnız bir parametr olduqda yumru mötərizələr də buraxıla bilər: <code>x =&gt; x * 3</code></li>\n  <li><strong>Parametrsiz:</strong> Boş mötərizə qoyulur: <code>() =&gt; \"Salam\"</code></li>\n</ul>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Funksiya Kompozisiyası və İcra Borusu (pipe Pipeline)</h4>\n<p><strong>1. Leksik <code>this</code> Bağlanması:</strong><br>\nArrow funksiyalarının özünün <code>this</code> konteksti yoxdur! Onlar <code>this</code>-i əhatə olunduqları xarici leksik mühitdən götürür. Buna görə obyekt metodu daxilində callback yazarkən <code>this</code> itmir.</p>\n\n<p><strong>2. İcra Boru Kəməri (Pipe Pipeline):</strong><br>\nTək arqumentli saf funksiyaları ardıcıl zəncirvari icra borusuna düzmək nümunəsi:</p>\n<pre><code>const pipe = (...fnList) => initialValue => \n  fnList.reduce((acc, fn) => fn(acc), initialValue);\n\nconst ikiyeVur = x => x * 2;\nconst besGel = x => x + 5;\nconst kvadrat = x => x * x;\n\n// Hesablama borusu: (3 * 2) = 6 -> (6 + 5) = 11 -> (11 * 11) = 121\nconst boruHesabla = pipe(ikiyeVur, besGel, kvadrat);\nconsole.log(boruHesabla(3)); // 121</code></pre>",
        "codeExamples": [
          {
            "title": "Arrow Function Nümunələri",
            "code": "const kvadrat = x => x * x;\nconst salamDe = () => \"Salam Dünya!\";\n\nconsole.log(kvadrat(6));\nconsole.log(salamDe());",
            "output": "36\nSalam Dünya!"
          },
          {
            "title": "İcra Borusu (Pipe) Nümunəsi",
            "code": "const kicilt = s => s.toLowerCase();\nconst bosluqSil = s => s.trim();\nconst nidaQoy = s => `${s}!`;\n\nconst cevirici = str => nidaQoy(bosluqSil(kicilt(str)));\nconsole.log(cevirici(\"  SALAM  \"));",
            "output": "salam!"
          }
        ],
        "exercises": [
          {
            "id": "ex-7-3-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Üçqat Artıran Ox Funksiyası (Arrow Function)",
            "instruction": "Ötürülən ədədi 3 dəfə artıran yığcam <code>ucqat</code> ox funksiyasını tərtib edin və 10 arqumenti ilə hesablanan nəticəni (30) konsola çıxarın.",
            "starterCode": "// Kodunuzu buraya yazın\n\nconsole.log(ucqat(10));\n",
            "expectedOutput": "30",
            "hint": "Tək sətirlik arrow funksiyalarında fiqurlu mötərizə və return yazılmadıqda ifadə avtomatik geri qaytarılır: const ucqat = n => n * 3;",
            "solutionCode": "const ucqat = n => n * 3;\nconsole.log(ucqat(10));"
          },
          {
            "id": "ex-7-3-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Hasil Hesablayan Kompakt Funksiya",
            "instruction": "İki ədədi parametr kimi qəbul edib onların hasilini hesablayan <code>vur</code> ox funksiyasını yazın və 7 ilə 8 ədədlərinin hasilini (56) konsolda əks etdirin.",
            "starterCode": "// Kodunuzu buraya yazın\n\nconsole.log(vur(7, 8));\n",
            "expectedOutput": "56",
            "hint": "Çoxparametrli ox funksiyalarında parametrlər mötərizədə yazılır: const vur = (a, b) => a * b;",
            "solutionCode": "const vur = (a, b) => a * b;\nconsole.log(vur(7, 8));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-7-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Ox Funksiyasında Qayıdış Qiyməti Xətası",
            "instruction": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
            "description": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
            "buggyCode": "const topla = (a, b) => {\n  a + b;\n};\nconsole.log(topla(5, 5));",
            "correctCode": "const topla = (a, b) => {\n  return a + b;\n};\nconsole.log(topla(5, 5));",
            "correctOutput": "10",
            "expectedOutput": "10",
            "explanation": "Arrow funksiyasında əgər fiqurlu mötərizə { } istifadə edilirsə, dəyəri geri qaytarmaq üçün mütləq 'return' yazılmalıdır.",
            "hint": "Fiqurlu mötərizə içində return a + b yazın."
          }
        ],
        "bugFix": {
          "id": "bug-7-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Ox Funksiyasında Qayıdış Qiyməti Xətası",
          "instruction": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
          "description": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
          "buggyCode": "const topla = (a, b) => {\n  a + b;\n};\nconsole.log(topla(5, 5));",
          "correctCode": "const topla = (a, b) => {\n  return a + b;\n};\nconsole.log(topla(5, 5));",
          "correctOutput": "10",
          "expectedOutput": "10",
          "explanation": "Arrow funksiyasında əgər fiqurlu mötərizə { } istifadə edilirsə, dəyəri geri qaytarmaq üçün mütləq 'return' yazılmalıdır.",
          "hint": "Fiqurlu mötərizə içində return a + b yazın."
        }
      },
      {
        "id": "topic-7-4",
        "title": "Funksiya Görünüş Sahəsi (Scope: Global vs Local)",
        "theory": "<h3>🌐 Dəyişənlərin Görünüş Sahəsi (Scope)</h3>\n<p>Dəyişənlərin proqramın hansı hissələrindən əlçatan olduğunu təyin edən qanunlara <strong>Scope (Görünüş Sahəsi)</strong> deyilir:</p>\n\n<ul>\n  <li><strong>Global Scope (Qlobal Sahə):</strong> Funksiyalardan kənarda elan edilir. Bütün proqram boyu istənilən yerdən oxuna bilər.</li>\n  <li><strong>Local / Block Scope (Lokal Sahə):</strong> Funksiya və ya <code>{ }</code> blokunun daxilində yaradılır. Yalnız həmin blok daxilində görünür, kənardan toxunulduqda <code>ReferenceError</code> baş verir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Şüşəli İclas Otağı Analogiyası:</strong> İclas otağının daxilində oturanlar çöldəki qlobal məlumatları rahatlıqla görə bilirlər. Lakin çöldəki kənar şəxslər otaq daxilindəki məxfi sənədləri (lokal dəyişənləri) görə bilməzlər!\n</div>\n\n<p><strong>Dəyişənin Kölgələnməsi (Variable Shadowing):</strong> Əgər lokal dəyişənin adı qlobal dəyişənlə eyni olarsa, funksiya daxilində lokal ad qlobalı kölgələyir (shadowing).</p>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Qapanmalar (Closures) və Nəticə Keşləmə (Memoization)</h4>\n<p><strong>1. Qapanma (Closure) Nədir?</strong><br>\nFunksiya özündən xaricdə yerləşən dəyişənləri yadda saxlayaraq xarici funksiya icrasını bitirdikdən sonra belə həmin dəyişənlərə çıxış əldə edə bilirsə, buna <strong>Closure</strong> deyilir. Bu mexanizm inkapsulyasiya və gizli (private) dəyişənlər yaratmaq üçün tətbiq olunur:</p>\n\n<pre><code>function saygacYarat() {\n  let say = 0; // Şəxsi gizli dəyişən\n  return function() {\n    say++;\n    return say;\n  };\n}\n\nconst saygac = saygacYarat();\nconsole.log(saygac()); // 1\nconsole.log(saygac()); // 2</code></pre>\n\n<p><strong>2. Nəticə Keşləmə (Memoization):</strong><br>\nAğır hesablamaları təkrarlamamaq üçün əvvəlki arqumentlərin nəticələrini obyektdə (keşdə) saxlayan closure naxışı:</p>\n<pre><code>function memoize(fn) {\n  const cache = {};\n  return function(n) {\n    if (n in cache) return cache[n]; // Keşdən qaytar\n    const netice = fn(n);\n    cache[n] = netice;\n    return netice;\n  };\n}</code></pre>",
        "codeExamples": [
          {
            "title": "Lokal və Qlobal Dəyişən",
            "code": "let qlobalAd = \"Cavid\";\n\nfunction test() {\n  let lokalMesaj = \"Bu gizlidir\";\n  console.log(qlobalAd);    // Qlobal əlçatandır\n  console.log(lokalMesaj);  // Lokal funksiya içində əlçatandır\n}\n\ntest();\n// console.log(lokalMesaj); // Kənarda XƏTA verərdi!",
            "output": "Cavid\nBu gizlidir"
          },
          {
            "title": "Closure ilə Məlumat Qorunması",
            "code": "function gizliKassa(ilkinBalans) {\n  let balans = ilkinBalans;\n  return {\n    artir(mebleg) { balans += mebleg; return balans; },\n    bax() { return balans; }\n  };\n}\nconst kassa = gizliKassa(100);\nconsole.log(\"Balans:\", kassa.artir(50));",
            "output": "Balans: 150"
          }
        ],
        "exercises": [
          {
            "id": "ex-7-4-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Lokal Dəyişən və Görünmə Sahəsi (Scope)",
            "instruction": "Daxilində 50 qiymətinə malik lokal dəyişən təyin edərək onun ikiqat hasilini hesablayıb konsola 100 nəticəsini çıxaran <code>hesabla</code> funksiyasını tərtib edin və icra edin.",
            "starterCode": "function hesabla() {\n  // Kodunuzu buraya yazın\n}\nhesabla();\n",
            "expectedOutput": "100",
            "hint": "Funksiya daxilində elan edilən const və ya let dəyişənləri yalnız həmin blok daxilində əlçatan olur. Daxildə const eded = 50; təyin edib console.log(eded * 2) yaza bilərsiniz.",
            "solutionCode": "function hesabla() {\n  const eded = 50;\n  console.log(eded * 2);\n}\nhesabla();"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-7-4-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Lokal Dəyişənə Kənardan Müraciət",
            "instruction": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
            "description": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
            "buggyCode": "function giris() {\n  let parol = \"12345\";\n}\ngiris();\nconsole.log(parol);",
            "correctCode": "function giris() {\n  let parol = \"12345\";\n  console.log(parol);\n}\ngiris();",
            "correctOutput": "12345",
            "expectedOutput": "12345",
            "explanation": "Lokal dəyişənlərə yalnız təyin olunduqları funksiya və ya blok daxilindən müraciət etmək mümkündür.",
            "hint": "console.log(parol) əmrini giris funksiyasının içinə salın."
          }
        ],
        "bugFix": {
          "id": "bug-7-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Lokal Dəyişənə Kənardan Müraciət",
          "instruction": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
          "description": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
          "buggyCode": "function giris() {\n  let parol = \"12345\";\n}\ngiris();\nconsole.log(parol);",
          "correctCode": "function giris() {\n  let parol = \"12345\";\n  console.log(parol);\n}\ngiris();",
          "correctOutput": "12345",
          "expectedOutput": "12345",
          "explanation": "Lokal dəyişənlərə yalnız təyin olunduqları funksiya və ya blok daxilindən müraciət etmək mümkündür.",
          "hint": "console.log(parol) əmrini giris funksiyasının içinə salın."
        }
      }
    ]
  },
  {
    "id": "section-8",
    "title": "Bölmə 8: Obyektlər, JSON & Destructuring (dot/bracket, JSON, Spread/Rest)",
    "icon": "💎",
    "topics": [
      {
        "id": "topic-8-1",
        "title": "Obyekt Nədir? Açar-Dəyər (Key-Value) Strukturu",
        "theory": "<h3>💎 Obyekt (Object) Nədir?</h3>\n<p>Massivlər nömrələnmiş siyahılar üçündürsə, <strong>Obyektlər</strong> real həyatdakı mürəkkəb varlıqları (istifadəçi, avtomobil, məhsul) bütün xüsusiyyətləri ilə təsvir etmək üçün ən əsas strukturdur. Obyektlər <strong>açar: dəyər (key: value)</strong> cütlüklərindən ibarət olur və fiqurlu mötərizə <code>{ }</code> ilə yaradılır:</p>\n\n<pre><code>const istifadeci = {\n  ad: \"Fərid\",\n  yas: 24,\n  seher: \"Bakı\",\n  proqramcidir: true\n};</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Şəxsiyyət Vəsiqəsi Analogiyası:</strong> Obyekt bir şəxsiyyət vəsiqəsidir: üzərindəki sahə adları (Ad, Soyad, Doğum ili) — <strong>açarlar (keys)</strong>, həmin xanalara yazılmış məlumatlar isə — <strong>dəyərlərdir (values)</strong>!\n</div>\n\n<h4>Xassələrə Müraciət Etməyin 2 Yolu:</h4>\n<ul>\n  <li><strong>Nöqtə Notasiyası (Dot Notation):</strong> Ən çox işlənən standart və rahat üsul:<br>\n  <code>console.log(istifadeci.ad); // \"Fərid\"</code></li>\n  <li><strong>Kvadrat Mötərizə Notasiyası (Bracket Notation):</strong> Açar adı dəyişəndə saxlandıqda və ya xüsusi simvol daşıdıqda mütləqdir:<br>\n  <code>console.log(istifadeci[\"seher\"]); // \"Bakı\"</code></li>\n</ul>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Dinamik Hesablanan Açarlar (Computed Property Names)</h4>\n<p>ES6 ilə birlikdə obyekt elan edilərkən kvadrat mötərizə daxilində dinamik ifadələr və ya dəyişənlər birbaşa açar kimi təyin edilə bilər (<strong>Computed Property Names</strong>):</p>\n\n<pre><code>const parametr = \"qiymet\";\nconst endirimFaizi = 20;\n\nconst mehsul = {\n  ad: \"Noutbuk\",\n  [parametr]: 1500, // Dinamik açar: mehsul.qiymet = 1500\n  [\"endirimli_\" + parametr]: 1500 * (1 - endirimFaizi / 100)\n};\n\nconsole.log(mehsul.qiymet);            // 1500\nconsole.log(mehsul.endirimli_qiymet);  // 1200</code></pre>",
        "codeExamples": [
          {
            "title": "Obyekt Xassələrini Oxumaq və Yeniləmək",
            "code": "const masin = {\n  marka: \"Mercedes\",\n  il: 2022\n};\n\n// Xassəni dəyişmək və yeni xassə əlavə etmək\nmasin.reng = \"Qara\";\nmasin.il = 2023;\n\nconsole.log(masin.marka, masin.reng, masin.il);",
            "output": "Mercedes Qara 2023"
          },
          {
            "title": "Dinamik Açar Hesablanması",
            "code": "const prefiks = \"status_\";\nconst rol = \"admin\";\nconst huquqlar = {\n  [prefiks + rol]: \"Tam Giriş\"\n};\nconsole.log(huquqlar.status_admin);",
            "output": "Tam Giriş"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-1-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Tələbə Profil Obyektinin Yaradılması",
            "instruction": "Adı \"Nurlan\", imtahan xalı isə 92 olan <code>telebe</code> obyekti təyin edin. Yalnız tələbənin adını nöqtə notasiyası ilə konsol ekranında əks etdirin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Nurlan",
            "hint": "Obyekt yaratmaq üçün fiqurlu mötərizədən ({ ad: \"Nurlan\", xal: 92 }) və sahəni oxumaq üçün telebe.ad sintaksisindən istifadə olunur.",
            "solutionCode": "const telebe = { ad: \"Nurlan\", xal: 92 };\nconsole.log(telebe.ad);"
          },
          {
            "id": "ex-8-1-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Dinamik Xassə Adı ilə Qiymətin Oxunması",
            "instruction": "Məhsul obyektindən açar adı ayrıca <code>acar</code> dəyişənində saxlanılan sahənin qiymətini (1500) dinamik şəkildə oxuyaraq konsola çıxarın.",
            "starterCode": "const mehsul = { ad: \"Noutbuk\", qiymet: 1500 };\nconst acar = \"qiymet\";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "1500",
            "hint": "Xassə adı dəyişəndə olduqda kvadrat mötərizə (mehsul[acar]) sintaksisi tətbiq edilir.",
            "solutionCode": "const mehsul = { ad: \"Noutbuk\", qiymet: 1500 };\nconst acar = \"qiymet\";\nconsole.log(mehsul[acar]);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-8-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Mövcud Olmayan Xassə Xətası",
            "instruction": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
            "description": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
            "buggyCode": "const user = { ad: \"Kamran\" };\nconsole.log(user.soyad);",
            "correctCode": "const user = { ad: \"Kamran\", soyad: \"Həsənov\" };\nconsole.log(user.soyad);",
            "correctOutput": "Həsənov",
            "expectedOutput": "Həsənov",
            "explanation": "Obyektdə mövcud olmayan xassə çağırıldıqda undefined qaytarılır. Həmin xassə obyektə əlavə edilməlidir.",
            "hint": "user obyektinə soyad: \"Həsənov\" əlavə edin."
          }
        ],
        "bugFix": {
          "id": "bug-8-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mövcud Olmayan Xassə Xətası",
          "instruction": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
          "description": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
          "buggyCode": "const user = { ad: \"Kamran\" };\nconsole.log(user.soyad);",
          "correctCode": "const user = { ad: \"Kamran\", soyad: \"Həsənov\" };\nconsole.log(user.soyad);",
          "correctOutput": "Həsənov",
          "expectedOutput": "Həsənov",
          "explanation": "Obyektdə mövcud olmayan xassə çağırıldıqda undefined qaytarılır. Həmin xassə obyektə əlavə edilməlidir.",
          "hint": "user obyektinə soyad: \"Həsənov\" əlavə edin."
        }
      },
      {
        "id": "topic-8-2",
        "title": "Obyekt Metodları və this Açar Sözü",
        "theory": "<h3>🏃 Obyekt Metodları Nədir?</h3>\n<p>Əgər obyektin bir xassəsi funksiyadırsa, ona <strong>metod</strong> deyilir. Metodlar obyektin davranışlarını və həyata keçirə biləcəyi əməliyyatları təmsil edir:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Smartfon Analogiyası:</strong> Telefonun rəngi və modeli onun <strong>xassələridir</strong> (properties). Telefonun zəng çalması, şəkil çəkməsi və kilidi açması isə onun <strong>metodlarıdır</strong>!\n</div>\n\n<h4><code>this</code> Açar Sözü:</h4>\n<p>Metod daxilində obyektin öz digər xassələrinə müraciət etmək üçün <strong><code>this</code></strong> (\"mənim bu xassəm\") istifadə olunur:</p>\n\n<pre><code>const insan = {\n  ad: \"Aygün\",\n  salamVer() {\n    return \"Salam, mənim adım \" + this.ad + \"-dır\";\n  }\n};\nconsole.log(insan.salamVer()); // \"Salam, mənim adım Aygün-dür\"</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Getter və Setter Metodları (get / set)</h4>\n<p>Obyekt sahələrinə birbaşa deyil, nəzarətli və təhlükəsiz şəkildə oxuma və yazma imkanı yaratmaq üçün <strong>Accessors (<code>get</code> və <code>set</code>)</strong> tətbiq olunur:</p>\n\n<pre><code>const bankHesabi = {\n  sahib: \"Orxan\",\n  _balans: 100, // Daxili konvensiya\n\n  // Getter: Məlumatı oxuyarkən hesablama aparır\n  get balansGoster() {\n    return `${this._balans} AZN`;\n  },\n\n  // Setter: Məlumatı yazarkən təhlükəsizlik və yoxlama aparır\n  set yeniBalans(mebleg) {\n    if (mebleg < 0) {\n      console.log(\"Xəta: Balans mənfi ola bilməz!\");\n      return;\n    }\n    this._balans = mebleg;\n  }\n};\n\nbankHesabi.yeniBalans = 250; // Setter işə düşür (funksiya kimi çağırılmır!)\nconsole.log(bankHesabi.balansGoster); // \"250 AZN\"</code></pre>",
        "codeExamples": [
          {
            "title": "Obyekt Metodu və this İstifadəsi",
            "code": "const hesab = {\n  sahib: \"Vüsal\",\n  balans: 100,\n  balansiGoster() {\n    return this.sahib + \": \" + this.balans + \" AZN\";\n  }\n};\n\nconsole.log(hesab.balansiGoster());",
            "output": "Vüsal: 100 AZN"
          },
          {
            "title": "Getter ilə Hesablanmış Sahə",
            "code": "const istifadeci = {\n  ad: \"Murad\",\n  soyad: \"Əliyev\",\n  get tamAd() {\n    return `${this.ad} ${this.soyad}`;\n  }\n};\nconsole.log(istifadeci.tamAd);",
            "output": "Murad Əliyev"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-2-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Obyekt Metodunun Təyini və Kontekst İstifadəsi",
            "instruction": "Modeli \"Tesla\" olan və icra edildikdə \"Tesla hərəkət edir\" cümləsini konsola çıxaran <code>sur</code> metoduna malik <code>avto</code> obyekti tərtib edin və metodu icra edin.",
            "starterCode": "const avto = {\n  model: \"Tesla\",\n  // Kodunuzu buraya yazın\n};\navto.sur();\n",
            "expectedOutput": "Tesla hərəkət edir",
            "hint": "Obyekt daxilində metod yazarkən obyektin öz xassəsinə this.model vasitəsilə müraciət edilir: console.log(this.model + \" hərəkət edir\");",
            "solutionCode": "const avto = {\n  model: \"Tesla\",\n  sur() {\n    console.log(this.model + \" hərəkət edir\");\n  }\n};\navto.sur();"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-8-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "this Açar Sözünün Unudulması",
            "instruction": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
            "description": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
            "buggyCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + ad;\n  }\n};\nconsole.log(user.tani());",
            "correctCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + this.ad;\n  }\n};\nconsole.log(user.tani());",
            "correctOutput": "Mən Tural",
            "expectedOutput": "Mən Tural",
            "explanation": "Obyekt metodunun daxilində həmin obyektin xassəsinə müraciət edərkən mütləq 'this.' prefiksi yazılmalıdır.",
            "hint": "ad əvəzinə this.ad yazın."
          }
        ],
        "bugFix": {
          "id": "bug-8-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "this Açar Sözünün Unudulması",
          "instruction": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
          "description": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
          "buggyCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + ad;\n  }\n};\nconsole.log(user.tani());",
          "correctCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + this.ad;\n  }\n};\nconsole.log(user.tani());",
          "correctOutput": "Mən Tural",
          "expectedOutput": "Mən Tural",
          "explanation": "Obyekt metodunun daxilində həmin obyektin xassəsinə müraciət edərkən mütləq 'this.' prefiksi yazılmalıdır.",
          "hint": "ad əvəzinə this.ad yazın."
        }
      },
      {
        "id": "topic-8-3",
        "title": "Daxili Metodlar: Object.keys(), Object.values(), Object.entries()",
        "theory": "<h3>🛠️ Obyektləri İterasiya Edən Qlobal Metodlar</h3>\n<p>Obyektlərin daxilindəki məlumatları massivlər kimi analiz etmək üçün qlobal <code>Object</code> konstruktorunun metodları istifadə olunur:</p>\n\n<ul>\n  <li><strong><code>Object.keys(obyekt)</code>:</strong> Obyektin bütün açar adlarını (keys) sətirlər massivi kimi qaytarır:<br>\n  <code>Object.keys({ ad: \"Əli\", bal: 90 }) (\rightarrow) [\"ad\", \"bal\"]</code></li>\n  <li><strong><code>Object.values(obyekt)</code>:</strong> Obyektin bütün dəyərlərini (values) massiv kimi qaytarır:<br>\n  <code>Object.values({ ad: \"Əli\", bal: 90 }) (\rightarrow) [\"Əli\", 90]</code></li>\n  <li><strong><code>Object.entries(obyekt)</code>:</strong> Obyektin həm açar, həm dəyər cütlüklərini ikiölçülü massiv kimi qaytarır:<br>\n  <code>Object.entries({ ad: \"Əli\" }) (\rightarrow) [ [\"ad\", \"Əli\"] ]</code></li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Sayım Müfəttişi Analogiyası:</strong> <code>Object.keys</code> anbardakı bütün etiketlərin siyahısını çıxarır; <code>Object.values</code> rəflərdəki bütün real malların qiymətlərini toplayır; <code>Object.entries</code> isə hər ikisini cütlük halında inventar cədvəlinə düzür.\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Python dict.keys() Tələsi:</strong> Python-da <code>dict.keys()</code> obyektin öz üzərindən çağırılır. Lakin JavaScript-də obyekt parametr kimi ötürülür: <code>Object.keys(obyekt)</code>.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Obyektlərin Dondurulması (Object.freeze vs Object.seal) və Object.fromEntries()</h4>\n<p><strong>1. Dəyişməzlik (Immutability): <code>freeze</code> vs <code>seal</code>:</strong></p>\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Metod</th>\n        <th>Yeni Sahə Əlavəsi</th>\n        <th>Sahənin Silinməsi</th>\n        <th>Mövcud Sahənin Dəyişdirilməsi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong><code>Object.freeze(obj)</code></strong></td>\n        <td>Qadağandır ❌</td>\n        <td>Qadağandır ❌</td>\n        <td>Qadağandır ❌ (Tam donduruldu)</td>\n      </tr>\n      <tr>\n        <td><strong><code>Object.seal(obj)</code></strong></td>\n        <td>Qadağandır ❌</td>\n        <td>Qadağandır ❌</td>\n        <td><strong>İcazə verilir ✔️</strong></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>2. Əks Çevrilmə: <code>Object.fromEntries()</code>:</strong><br>\nAçar-dəyər cütlüklərindən ibarət massivi yenidən canlı obyektə çevirən güclü metod (ES2019):</p>\n<pre><code>const cutlukler = [[\"ad\", \"Samir\"], [\"rol\", \"dizayner\"]];\nconst user = Object.fromEntries(cutlukler);\nconsole.log(user); // { ad: \"Samir\", rol: \"dizayner\" }</code></pre>",
        "codeExamples": [
          {
            "title": "Object.keys() və Object.values()",
            "code": "const qiymetler = { alma: 2, banan: 4, portağal: 3 };\n\nconsole.log(Object.keys(qiymetler));\nconsole.log(Object.values(qiymetler));",
            "output": "[\n  \"alma\",\n  \"banan\",\n  \"portağal\"\n]\n[\n  2,\n  4,\n  3\n]"
          },
          {
            "title": "Object.freeze() Təhlükəsizliyi",
            "code": "const konfiq = Object.freeze({ api: \"https://api.az\", versiya: 1 });\nkonfiq.versiya = 2; // Dəyişməyəcək!\nconsole.log(konfiq.versiya);",
            "output": "1"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-3-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Obyekt Xassələrinin Ümumi Sayı",
            "instruction": "Verilmiş istifadəçi profilində cəmi neçə sahənin (xassənin) mövcud olduğunu təyin edərək sayını (3) konsol pəncərəsində əks etdirin.",
            "starterCode": "const profil = { ad: \"Elmir\", yas: 26, seher: \"Sumqayıt\" };\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "3",
            "hint": "Obyektin bütün açarlarını massiv kimi əldə etmək üçün Object.keys(profil), sayını tapmaq üçün isə .length xassəsindən istifadə olunur.",
            "solutionCode": "const profil = { ad: \"Elmir\", yas: 26, seher: \"Sumqayıt\" };\nconsole.log(Object.keys(profil).length);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-8-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Python Style keys() Çağırışı",
            "instruction": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
            "description": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
            "buggyCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(kitab.keys());",
            "correctCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(Object.keys(kitab));",
            "correctOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
            "expectedOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
            "explanation": "JavaScript-də açarları almaq üçün kitab.keys() deyil, qlobal Object.keys(kitab) metodundan istifadə edilir.",
            "hint": "Object.keys(kitab) yazın."
          }
        ],
        "bugFix": {
          "id": "bug-8-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Python Style keys() Çağırışı",
          "instruction": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
          "description": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
          "buggyCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(kitab.keys());",
          "correctCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(Object.keys(kitab));",
          "correctOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
          "expectedOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
          "explanation": "JavaScript-də açarları almaq üçün kitab.keys() deyil, qlobal Object.keys(kitab) metodundan istifadə edilir.",
          "hint": "Object.keys(kitab) yazın."
        }
      },
      {
        "id": "topic-8-4",
        "title": "JSON ilə İş: JSON.stringify() və JSON.parse()",
        "theory": "<h3>📦 JSON Nədir və Niyə Lazımdır?</h3>\n<p><strong>JSON (JavaScript Object Notation)</strong> — veb dünyasında brauzer ilə server arasında məlumat mübadiləsi aparmaq üçün universal, yüngül və mətn əsaslı məlumat formatıdır.</p>\n\n<div class=\"tip-box\">\n  <strong>📦 Poçt Bağlaması Analogiyası:</strong> Mürəkkəb velosipedi poçtla göndərmək üçün onu söküb qutuya yastı şəkildə yığırıq (<strong>Serializasiya (\rightarrow) <code>JSON.stringify</code></strong>). Alan tərəf isə qutunu açıb velosipedi yenidən sürülə bilən vəziyyətə gətirir (<strong>Deserializasiya (\rightarrow) <code>JSON.parse</code></strong>).\n</div>\n\n<h4>İki Əsas Metod:</h4>\n<ul>\n  <li><code>JSON.stringify(obyekt)</code>: JavaScript obyektini internetlə ötürülə bilən <strong>JSON mətninə (string)</strong> çevirir.</li>\n  <li><code>JSON.parse(metn)</code>: Gələn JSON mətnini yenidən canlı <strong>JavaScript obyektinə</strong> çevirir.</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Dırnaq Qaydası:</strong> JSON formatında bütün açar adları mütləq <strong>cüt dırnaq <code>\" \"</code></strong> daxilində olmalıdır (tək dırnaq sintaktik xətadır). Həmçinin <code>undefined</code> və funksiyalar JSON-a çevrilərkən itirilir!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Dərin Klonlama (Deep Clone) vs Dayaz Klonlama</h4>\n<p>Klassik spread <code>{ ...obj }</code> yalnız birqat (dayaz) surət çıxarır; daxili iç-içə obyektlər isə köhnə yaddaş ünvanına bağlı qalır. Daxili bütün budaqları müstəqil nüsxələmək üçün ən məşhur üsul:</p>\n\n<pre><code>const orijinal = { ad: \"A\", parametr: { xal: 100 } };\n\n// Dərin klonlama (Deep Clone):\nconst derinKopya = JSON.parse(JSON.stringify(orijinal));\n\nderinKopya.parametr.xal = 200;\nconsole.log(orijinal.parametr.xal); // 100 (Toxunulmaz qaldı!)</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Dövri İstinad (Circular Reference) Tələsi:</strong> Əgər obyekt öz-özünə istinad edirsə (<code>obj.a = obj</code>), <code>JSON.stringify()</code> icra zamanı <code>TypeError: Converting circular structure to JSON</code> xətası verəcəkdir!\n</div>",
        "codeExamples": [
          {
            "title": "Serializasiya və Formatlaşdırma (JSON.stringify)",
            "code": "const mehsul = {\n  id: 101,\n  ad: \"Mexaniki Klaviatura\",\n  qiymet: 140,\n  stokdaVar: true,\n  tegler: [\"rgb\", \"gaming\", \"usb-c\"]\n};\n\n// 1. Standart kompakt JSON sətiri\nconst kompaktJSON = JSON.stringify(mehsul);\nconsole.log(\"Kompakt:\", kompaktJSON);\n\n// 2. İki boşluqla formatlanmış oxunaqlı JSON\nconst oxunaqliJSON = JSON.stringify(mehsul, null, 2);\nconsole.log(\"Formatlı:\\n\" + oxunaqliJSON);",
            "output": "Kompakt: {\"id\":101,\"ad\":\"Mexaniki Klaviatura\",\"qiymet\":140,\"stokdaVar\":true,\"tegler\":[\"rgb\",\"gaming\",\"usb-c\"]}\nFormatlı:\n{\n  \"id\": 101,\n  \"ad\": \"Mexaniki Klaviatura\",\n  \"qiymet\": 140,\n  \"stokdaVar\": true,\n  \"tegler\": [\n    \"rgb\",\n    \"gaming\",\n    \"usb-c\"\n  ]\n}"
          },
          {
            "title": "Gələn JSON Mətnini Təhlükəsiz Parse Etmək (JSON.parse)",
            "code": "function melumatiEmalEt(jsonMetn) {\n  try {\n    const data = JSON.parse(jsonMetn);\n    return `İstifadəçi: ${data.ad}, Bal: ${data.bal}`;\n  } catch (xeta) {\n    return \"Xətalı JSON formatı: \" + xeta.name;\n  }\n}\n\n// Uğurlu JSON\nconsole.log(melumatiEmalEt('{\"ad\": \"Leyla\", \"bal\": 98}'));\n\n// Qüsurlu JSON (tək dırnaq səhvi)\nconsole.log(melumatiEmalEt(\"{'ad': 'Leyla'}\"));",
            "output": "İstifadəçi: Leyla, Bal: 98\nXətalı JSON formatı: SyntaxError"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-4-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "İstifadəçi Profilinin JSON-a Çevrilməsi və Oxunması",
            "instruction": "İstifadəçi obyektini JSON sətir formatına çevirən <code>istifadeciMelumatiniHazirla</code> və JSON sətirdən \"ad (rol)\" formatında məlumatı bərpa edən <code>istifadeciniOxu</code> funksiyalarını tərtib edin.",
            "starterCode": "function istifadeciMelumatiniHazirla(user) {\n  // Kodunuzu buraya yazın\n}\n\nfunction istifadeciniOxu(jsonStr) {\n  // Kodunuzu buraya yazın\n}\n\nconst user = { ad: \"Murad\", rol: \"Frontend Mühəndisi\" };\nconst jsonMetn = istifadeciMelumatiniHazirla(user);\nconsole.log(\"JSON Sətir:\", jsonMetn);\nconsole.log(\"Oxunmuş:\", istifadeciniOxu(jsonMetn));\n",
            "expectedOutput": "JSON Sətir: {\"ad\":\"Murad\",\"rol\":\"Frontend Mühəndisi\"}\nOxunmuş: Murad (Frontend Mühəndisi)",
            "hint": "Obyekti sətirə çevirmək üçün JSON.stringify(user), sətirdən obyekti bərpa etmək üçün isə JSON.parse(jsonStr) metodlarından istifadə olunur.",
            "solutionCode": "function istifadeciMelumatiniHazirla(user) {\n  return JSON.stringify(user);\n}\n\nfunction istifadeciniOxu(jsonStr) {\n  const u = JSON.parse(jsonStr);\n  return `${u.ad} (${u.rol})`;\n}\n\nconst user = { ad: \"Murad\", rol: \"Frontend Mühəndisi\" };\nconst jsonMetn = istifadeciMelumatiniHazirla(user);\nconsole.log(\"JSON Sətir:\", jsonMetn);\nconsole.log(\"Oxunmuş:\", istifadeciniOxu(jsonMetn));"
          },
          {
            "id": "ex-8-4-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Təhlükəsiz JSON Analizi və Xəta İdarəetməsi",
            "instruction": "Gələn JSON sətirlərini analiz edən <code>tehlukesizParse</code> funksiyası hazırlayın. Məlumat düzgün olduqda obyektin statusunu, zədəli olduqda isə \"Xətalı məlumat\" mesajını geri qaytarın.",
            "starterCode": "function tehlukesizParse(jsonStr) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(tehlukesizParse('{\"status\": \"Aktiv\"}'));\nconsole.log(tehlukesizParse('Yanlış format'));\n",
            "expectedOutput": "Aktiv\nXətalı məlumat",
            "hint": "Zədəli JSON mətnləri zamanı tətbiqin qəzaya uğramaması üçün JSON.parse() əməliyyatını try...catch bloku daxilində aparın.",
            "solutionCode": "function tehlukesizParse(jsonStr) {\n  try {\n    const data = JSON.parse(jsonStr);\n    return data.status;\n  } catch (err) {\n    return \"Xətalı məlumat\";\n  }\n}\n\nconsole.log(tehlukesizParse('{\"status\": \"Aktiv\"}'));\nconsole.log(tehlukesizParse('Yanlış format'));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-8-4-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Xam JSON Mətnindən Obyekt Kimi Xassə Oxumaq Xətası",
            "instruction": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
            "description": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
            "buggyCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconsole.log(\"Qiymət:\", serverCavabi.qiymet);",
            "correctCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconst data = JSON.parse(serverCavabi);\nconsole.log(\"Qiymət:\", data.qiymet);",
            "correctOutput": "Qiymət: 450",
            "expectedOutput": "Qiymət: 450",
            "explanation": "JSON serverdən adi mətn (string) formatında gəlir. String üzərində '.qiymet' kimi obyekt xassəsi mövcud deyil və 'undefined' qaytarır. Xassələrə müraciət etmək üçün mətni əvvəlcə 'JSON.parse()' vasitəsilə JavaScript obyektinə çevirmək lazımdır.",
            "hint": "const data = JSON.parse(serverCavabi); edin."
          }
        ],
        "bugFix": {
          "id": "bug-8-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Xam JSON Mətnindən Obyekt Kimi Xassə Oxumaq Xətası",
          "instruction": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
          "description": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
          "buggyCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconsole.log(\"Qiymət:\", serverCavabi.qiymet);",
          "correctCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconst data = JSON.parse(serverCavabi);\nconsole.log(\"Qiymət:\", data.qiymet);",
          "correctOutput": "Qiymət: 450",
          "expectedOutput": "Qiymət: 450",
          "explanation": "JSON serverdən adi mətn (string) formatında gəlir. String üzərində '.qiymet' kimi obyekt xassəsi mövcud deyil və 'undefined' qaytarır. Xassələrə müraciət etmək üçün mətni əvvəlcə 'JSON.parse()' vasitəsilə JavaScript obyektinə çevirmək lazımdır.",
          "hint": "const data = JSON.parse(serverCavabi); edin."
        }
      },
      {
        "id": "topic-8-5",
        "title": "Struktur Dağıtımı və Yayma: Destructuring & Spread/Rest",
        "theory": "<h3>🧳 Struktur Dağıtımı (Destructuring) Nədir?</h3>\n<p><strong>Destructuring</strong> — obyekt və ya massivlərin daxilindəki sahələri tək bir sətirdə sürətlə çıxararaq fərdi dəyişənlərə paylamağa imkan verən müasir ES6 sintaksisdir:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Səyahət Çantası Analogiyası:</strong> Çantanı bütöv yerə boşaltmaq əvəzinə, axtardığınız açarı və pasportu dərhal çəkib çıxarırsınız: <code>const { acar, pasport } = canta;</code>\n</div>\n\n<h4>Obyekt və Massiv Parçalanması:</h4>\n<pre><code>// Obyekt Destructuring (Açar adına görə):\nconst user = { ad: \"Murad\", yas: 25 };\nconst { ad, yas, rol = \"istifadeci\" } = user; // rol üçün default dəyər\n\n// Açar adını dəyişmək (Aliasing):\nconst { ad: istifadeciAdi } = user;\n\n// Massiv Destructuring (Mövqeyə görə):\nconst [ilk, ikinci] = [10, 20, 30];</code></pre>\n\n<h4>Spread Operatoru (<code>...</code> — Yaymaq):</h4>\n<p>Massiv və ya obyektin daxilindəki elementləri yeni struktura yaymaq üçün istifadə edilir:</p>\n<pre><code>const esasProfil = { ad: \"Leyla\" };\nconst tamProfil = { ...esasProfil, aktivdir: true };</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Dərin İç-İçə Destrukturizasiya və Reaktiv Vəziyyət İdarəsi (Mini State Store)</h4>\n<p><strong>1. Dərin İç-içə Çıxarma (Nested Destructuring):</strong><br>\nMürəkkəb API cavablarından dərində gizlənmiş sahələri birbaşa çıxarmaq:</p>\n<pre><code>const apiCavabi = {\n  data: {\n    user: {\n      profile: { email: \"user@code.az\" }\n    }\n  }\n};\n\nconst { data: { user: { profile: { email } } } } = apiCavabi;\nconsole.log(email); // \"user@code.az\"</code></pre>\n\n<p><strong>2. Reaktiv Vəziyyət İdarəetməsi (Mini State Store):</strong><br>\nRedux naxışında vəziyyəti dəyişməz (immutable) saxlamaq üçün spread operatoru ilə köhnə vəziyyəti kopyalayıb yalnız hədəf sahəni yeniləyirik:</p>\n<pre><code>let state = { count: 0, theme: \"dark\" };\n// Vəziyyətin təhlükəsiz yenilənməsi:\nstate = { ...state, count: state.count + 1 };</code></pre>",
        "codeExamples": [
          {
            "title": "Obyekt Destructuring və Dəyər Mübadiləsi (Swap)",
            "code": "const telebe = {\n  ad: \"Leyla\",\n  yas: 21,\n  ballar: { riyaziyyat: 95, fizika: 88 }\n};\n\nconst { ad: telebeAdi, ixtisas = \"Kompüter Elmləri\", ballar: { riyaziyyat } } = telebe;\nconsole.log(`${telebeAdi} - ${ixtisas}, Riyaziyyat: ${riyaziyyat}`);\n\n// Dəyişənlərin yerini dəyişmək (Swap)\nlet x = \"Bakı\", y = \"Gəncə\";\n[x, y] = [y, x];\nconsole.log(`x: ${x}, y: ${y}`);",
            "output": "Leyla - Kompüter Elmləri, Riyaziyyat: 95\nx: Gəncə, y: Bakı"
          },
          {
            "title": "Spread ilə Birləşdirmə və Rest Parametrləri",
            "code": "const ilkinXallar = [10, 20];\nconst butunXallar = [5, ...ilkinXallar, 30];\nconsole.log(\"Xallar:\", butunXallar.join(\", \"));\n\nfunction qalibiMuəyyənEt(birinci, ikinci, ...istirakcilar) {\n  console.log(`1-ci: ${birinci}, 2-ci: ${ikinci}`);\n  console.log(`Digər iştirakçılar: ${istirakcilar.join(\", \")}`);\n}\nqalibiMuəyyənEt(\"Əli\", \"Vəli\", \"Samir\", \"Rəşad\");",
            "output": "Xallar: 5, 10, 20, 30\n1-ci: Əli, 2-ci: Vəli\nDigər iştirakçılar: Samir, Rəşad"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-5-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Profil Məlumatlarının Birləşdirilməsi və Çıxarılması",
            "instruction": "Köhnə profil ilə yeni məlumatları tam birləşdirən və ad, email, status sahələrini ayıraraq formatlaşdırılmış string qaytaran <code>profilYenile</code> funksiyasını tərtib edin.",
            "starterCode": "function profilYenile(kohneProfil, yeniMelumatlar) {\n  // Kodunuzu buraya yazın\n}\n\nconst esasProfil = { ad: \"Orxan\", email: \"orxan@code.az\" };\nconst elave = { seher: \"Bakı\" };\n\nconsole.log(profilYenile(esasProfil, elave));\nconsole.log(profilYenile(esasProfil, { status: \"deaktiv\" }));\n",
            "expectedOutput": "Orxan <orxan@code.az> - Status: aktiv\nOrxan <orxan@code.az> - Status: deaktiv",
            "hint": "Obyektləri birləşdirmək üçün spread ({ ...a, ...b }), sahələri rahat çıxarmaq üçün isə destructuring ({ ad, email, status = \"aktiv\" }) tətbiq edin.",
            "solutionCode": "function profilYenile(kohneProfil, yeniMelumatlar) {\n  const yenilenmis = { ...kohneProfil, ...yeniMelumatlar };\n  const { ad, email, status = \"aktiv\" } = yenilenmis;\n  return `${ad} <${email}> - Status: ${status}`;\n}\n\nconst esasProfil = { ad: \"Orxan\", email: \"orxan@code.az\" };\nconst elave = { seher: \"Bakı\" };\n\nconsole.log(profilYenile(esasProfil, elave));\nconsole.log(profilYenile(esasProfil, { status: \"deaktiv\" }));"
          },
          {
            "id": "ex-8-5-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Massiv Parçalanması və Qalıq Cəmin Tapılması",
            "instruction": "Massivdəki birinci ədədi ayrıca, yerdə qalan bütün elementləri isə qrup şəklində toplayaraq nəticəni formatlanmış cümlə kimi qaytaran <code>analizEt</code> funksiyasını tərtib edin.",
            "starterCode": "function analizEt(ededler) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(analizEt([10, 20, 30, 40, 50]));\n",
            "expectedOutput": "İlk: 10, Qalan cəm: 140",
            "hint": "İlk elementi və qalanları ayırmaq üçün [birinci, ...qalanlar] destructuring-indən, qalanların cəmi üçün isə reduce metodundan istifadə edin.",
            "solutionCode": "function analizEt(ededler) {\n  const [birinci, ...qalanlar] = ededler;\n  const cem = qalanlar.reduce((toplam, n) => toplam + n, 0);\n  return `İlk: ${birinci}, Qalan cəm: ${cem}`;\n}\n\nconsole.log(analizEt([10, 20, 30, 40, 50]));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-8-5-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Rest Parametrinin Sonda Yazılmaması Xətası",
            "instruction": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
            "description": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
            "buggyCode": "function komandaYarat(...qalanlar, lider) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\"));",
            "correctCode": "function komandaYarat(lider, ...qalanlar) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\", \"Fərid\"));",
            "correctOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
            "expectedOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
            "explanation": "JavaScript-də Rest parametri (...) mütləq parametr siyahısının ən sonunda olmalıdır. Çünki o, yerdə qalan bütün arqumentləri toplayır.",
            "hint": "function komandaYarat(lider, ...qalanlar) şəklində yazın."
          }
        ],
        "bugFix": {
          "id": "bug-8-5-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Rest Parametrinin Sonda Yazılmaması Xətası",
          "instruction": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
          "description": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
          "buggyCode": "function komandaYarat(...qalanlar, lider) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\"));",
          "correctCode": "function komandaYarat(lider, ...qalanlar) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\", \"Fərid\"));",
          "correctOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
          "expectedOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
          "explanation": "JavaScript-də Rest parametri (...) mütləq parametr siyahısının ən sonunda olmalıdır. Çünki o, yerdə qalan bütün arqumentləri toplayır.",
          "hint": "function komandaYarat(lider, ...qalanlar) şəklində yazın."
        }
      }
    ]
  },
  {
    "id": "section-9",
    "title": "Bölmə 9: String Metodları və Template Literals (`${}`)",
    "icon": "📝",
    "topics": [
      {
        "id": "topic-9-1",
        "title": "Template Literals (Şablon Sətirlər: `${}`)",
        "theory": "<h3>📝 Şablon Sətirlər (Template Literals: <code>` `</code>)</h3>\n<p>Ənənəvi JavaScript-də sətirləri dəyişənlərlə birləşdirmək üçün <code>+</code> operatorundan istifadə olunurdu (<strong>String Concatenation</strong>). Bu üsul uzun və mürəkkəb cümlələrdə kodun oxunmasını xeyli çətinləşdirir və dırnaq səhvlərinə yol açırdı:</p>\n\n<pre><code>// Köhnə üsul (Concatenation):\nconst ad = \"Orxan\";\nconst xal = 95;\nconsole.log(\"Salam, \" + ad + \". Sizin imtahan nəticəniz: \" + xal + \" baldır.\");</code></pre>\n\n<p>Müasir JavaScript (ES6) ilə birlikdə bu problemi aradan qaldıran <strong>Template Literals (Şablon Sətirlər)</strong> təqdim olundu. Adi dırnaqlar (<code>\"\"</code> və ya <code>''</code>) əvəzinə <strong>Backtick (<code>` `</code>)</strong> simvolları istifadə olunur və dəyişənlər birbaşa <code>${dəyişən}</code> konstruksiyası ilə mətnin daxilinə yerləşdirilir (<strong>String Interpolation</strong>):</p>\n\n<pre><code>// Müasir və səliqəli üsul (Template Literal):\nconst ad = \"Orxan\";\nconst xal = 95;\nconsole.log(`Salam, ${ad}. Sizin imtahan nəticəniz: ${xal} baldır.`);</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Rəsmi Arayış Blankı</strong>\n  <p>Təsəvvür edin ki, bank və ya universitetdə adınız, təvəllüdünüz və balansınız üçün xüsusi xanaları olan rəsmi arayış blankı var. Hər dəfə bütün arayışı əllə sıfırdan yazmaq əvəzinə, sabit mətn qalır və yalnız <code>${ad}</code> və <code>${balans}</code> xanaları müvafiq şəxsin məlumatları ilə dinamik şəkildə doldurulur.</p>\n</div>\n\n<div class=\"tip-box\">\n  <strong>✨ Template Literals-in Əsas Üstünlükləri:</strong>\n  <ul>\n    <li><strong>Dinamik İfadə İcrası:</strong> <code>${ }</code> daxilində təkcə dəyişən adları deyil, istənilən riyazi hesablama və ya funksiya çağırışı icra edilə bilər: <code>`Cəm: ${5 + 10}`</code> -> <code>\"Cəm: 15\"</code>.</li>\n    <li><strong>Şərti İfadələr (Ternary):</strong> Şablon daxilində ternary operatoru birbaşa işlətmək olar: <code>`Status: ${aktiv ? \"Aktiv\" : \"Deaktiv\"}`</code>.</li>\n    <li><strong>Çoxsətirli Mətnlər (Multi-line Strings):</strong> Əvvəllər yeni sətrə keçmək üçün <code>\\n</code> yazmaq lazım gəlirdisə, backtick daxilində klaviaturada Enter düyməsini sıxmaq kifayətdir.</li>\n  </ul>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Sadə Şablon Mühərriki (Mini Template Engine) və Tagged Templates</h4>\n<p>Frontend kitabxanalarında (məsələn, Mustache, Handlebars və ya Vue/React render mexanizmləri) mətn şablonlarındakı yer tutucular (placeholder) dinamik verilənlər obyekti ilə əvəzlənir. Şablon sətirlərin məntiqini dərindən anlamaq üçün sadə şablon mühərriki qura bilərik:</p>\n\n<pre><code>// Dinamik mətn yer tutucularını ({{açar}}) verilənlərlə dolduran mühərrik\nfunction renderSablon(sablon, data) {\n  return sablon.replace(/\\{\\{(\\w+)\\}\\}/g, (_, acar) => {\n    return acar in data ? data[acar] : \"\";\n  });\n}\n\nconst sablon = \"Hörmətli {{ad}}, sizin sifarişiniz (№ {{sifarisId}}) {{status}} vəziyyətindədir.\";\nconst melumat = { ad: \"Rauf\", sifarisId: \"A-9812\", status: \"çatdırıldı\" };\n\nconsole.log(renderSablon(sablon, melumat));\n// \"Hörmətli Rauf, sizin sifarişiniz (№ A-9812) çatdırıldı vəziyyətindədir.\"</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tagged Template Literals (Qeydli Şablonlar):</strong>\n  <p>Şablon sətirin qarşısına funksiya adı qoyduqda (məsələn, <code>tag`Mətn ${ad}`</code>), funksiya xam sətir hissələrini və interpolyasiya edilən dəyərləri parametr kimi qəbul edir. Bu texnika <code>styled-components</code> kitabxanasında və verilənlər bazası SQL sorğularında SQL Injection hücumlarının qarşısını almaq üçün təhlükəsiz escaping mexanizmi kimi istifadə olunur.</p>\n</div>",
        "codeExamples": [
          {
            "title": "Template Literals Nümunəsi",
            "code": "const mehsul = \"Telefon\";\nconst qiymet = 800;\nconst edv = 0.18;\n\nconsole.log(`Məhsul: ${mehsul}, Yekun: ${qiymet + (qiymet * edv)} AZN`);",
            "output": "Məhsul: Telefon, Yekun: 944 AZN"
          }
        ],
        "exercises": [
          {
            "id": "ex-9-1-1",
            "title": "Dinamik Mətn Şablonunun Qurulması",
            "instruction": "İstifadəçi adını dinamik şablon daxilinə yerləşdirərək konsola dəqiq olaraq <code>Xoş gəldin, Sabir!</code> mətnini çıxarın.",
            "starterCode": "const istifadeci = \"Sabir\";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Xoş gəldin, Sabir!",
            "hint": "Dəyişənləri mətn daxilində birləşdirmək üçün backtick (`) və ${dəyişən} sintaksisindən istifadə edin.",
            "solutionCode": "const istifadeci = \"Sabir\";\nconsole.log(`Xoş gəldin, ${istifadeci}!`);"
          },
          {
            "id": "ex-9-1-2",
            "title": "Şablon Daxilində Hesablama Nəticəsi",
            "instruction": "İki ədədin riyazi cəmini şablon ifadəsi daxilində birbaşa hesablayaraq konsol ekranında <code>Cəm: 40</code> formatında əks etdirin.",
            "starterCode": "const a = 15;\nconst b = 25;\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Cəm: 40",
            "hint": "Template literal daxilində ${a + b} yazdıqda JavaScript ifadəni qiymətləndirib nəticəni mətnə daxil edir.",
            "solutionCode": "const a = 15;\nconst b = 25;\nconsole.log(`Cəm: ${a + b}`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-9-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Sətir İnterpolasiyası Xətası",
            "instruction": "Dinamik salamlaşma mesajı 'Salam, Rauf!' olmalıdır, lakin sətir interpolasiyası baş vermir və şablon dəyişəni adi hərfi mətn kimi çıxır. Sətir sintaksisini araşdıraraq dəyişənin qiymətini mətnə daxil edin.",
            "description": "Dinamik salamlaşma mesajı 'Salam, Rauf!' olmalıdır, lakin sətir interpolasiyası baş vermir və şablon dəyişəni adi hərfi mətn kimi çıxır. Sətir sintaksisini araşdıraraq dəyişənin qiymətini mətnə daxil edin.",
            "buggyCode": "let ad = \"Rauf\";\nconsole.log(\"Salam, ${ad}!\");",
            "correctCode": "let ad = \"Rauf\";\nconsole.log(`Salam, ${ad}!`);",
            "correctOutput": "Salam, Rauf!",
            "expectedOutput": "Salam, Rauf!",
            "explanation": "${} interpolyasiyasının işləməsi üçün mətn mütləq backtick (`` ` ``) daxilində yazılmalıdır."
          }
        ],
        "bugFix": {
          "id": "bug-9-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Sətir İnterpolasiyası Xətası",
          "instruction": "Dinamik salamlaşma mesajı 'Salam, Rauf!' olmalıdır, lakin sətir interpolasiyası baş vermir və şablon dəyişəni adi hərfi mətn kimi çıxır. Sətir sintaksisini araşdıraraq dəyişənin qiymətini mətnə daxil edin.",
          "description": "Dinamik salamlaşma mesajı 'Salam, Rauf!' olmalıdır, lakin sətir interpolasiyası baş vermir və şablon dəyişəni adi hərfi mətn kimi çıxır. Sətir sintaksisini araşdıraraq dəyişənin qiymətini mətnə daxil edin.",
          "buggyCode": "let ad = \"Rauf\";\nconsole.log(\"Salam, ${ad}!\");",
          "correctCode": "let ad = \"Rauf\";\nconsole.log(`Salam, ${ad}!`);",
          "correctOutput": "Salam, Rauf!",
          "expectedOutput": "Salam, Rauf!",
          "explanation": "${} interpolyasiyasının işləməsi üçün mətn mütləq backtick (`` ` ``) daxilində yazılmalıdır."
        }
      },
      {
        "id": "topic-9-2",
        "title": "Əsas String Metodları: toUpperCase, toLowerCase, trim, includes",
        "theory": "<h3>🔤 Mətn Üzərində Əsas Əməliyyatlar və Dəyişməzlik</h3>\n<p>JavaScript-də sətirlər (Strings) <strong>primitiv verilən tipidir və dəyişməzdir (immutable)</strong>. Bu o deməkdir ki, heç bir string metodu mövcud mətni birbaşa yerində dəyişmir; bütün metodlar emal olunmuş <strong>yeni bir mətn sətiri</strong> qaytarır:</p>\n\n<pre><code>let dil = \"javascript\";\ndil.toUpperCase(); // Yeni mətn qaytarır, amma \"dil\" dəyişmir!\nconsole.log(dil); // Hələ də \"javascript\"\ndil = dil.toUpperCase(); // Yenidən mənimsətmək lazımdır\nconsole.log(dil); // \"JAVASCRIPT\"</code></pre>\n\n<p>Gündəlik proqramlaşdırmada ən çox ehtiyac duyulan əsas string metodları:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Metod</th>\n        <th>Təyinatı</th>\n        <th>Nümunə</th>\n        <th>Nəticə</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>toUpperCase()</code></td>\n        <td>Bütün simvolları böyük hərfə çevirir</td>\n        <td><code>\"kod\".toUpperCase()</code></td>\n        <td><code>\"KOD\"</code></td>\n      </tr>\n      <tr>\n        <td><code>toLowerCase()</code></td>\n        <td>Bütün simvolları kiçik hərfə çevirir</td>\n        <td><code>\"BAKI\".toLowerCase()</code></td>\n        <td><code>\"bakı\"</code></td>\n      </tr>\n      <tr>\n        <td><code>trim()</code></td>\n        <td>Başlanğıc və sondakı boşluqları təmizləyir</td>\n        <td><code>\"  admin  \".trim()</code></td>\n        <td><code>\"admin\"</code></td>\n      </tr>\n      <tr>\n        <td><code>includes(altSöz)</code></td>\n        <td>Alt-mətnin mövcudluğunu yoxlayır (boolean)</td>\n        <td><code>\"JS Əla\".includes(\"Əla\")</code></td>\n        <td><code>true</code></td>\n      </tr>\n      <tr>\n        <td><code>startsWith(prefiks)</code></td>\n        <td>Mətnin verilən simvollarla başlamasını yoxlayır</td>\n        <td><code>\"+99450\".startsWith(\"+994\")</code></td>\n        <td><code>true</code></td>\n      </tr>\n      <tr>\n        <td><code>endsWith(suffiks)</code></td>\n        <td>Mətnin verilən simvollarla bitməsini yoxlayır</td>\n        <td><code>\"fayl.pdf\".endsWith(\".pdf\")</code></td>\n        <td><code>true</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: İstifadəçi Giriş Formunun Standartlaşdırılması</strong>\n  <p>İstifadəçi qeydiyyat və ya giriş formunda emailini <code>\"   Elvin@Gmail.com  \"</code> kimi boşluqlarla və böyük hərflərlə yaza bilər. Verilənlər bazasında müqayisə aparmazdan əvvəl <code>.trim().toLowerCase()</code> zəncirvari çağırışı tətbiq edilərək daxil edilən məlumat <code>\"elvin@gmail.com\"</code> standart şəklinə salınır.</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Böyük-Kiçik Hərf Həssaslığı (Case Sensitivity):</strong>\n  <p><code>includes()</code>, <code>startsWith()</code> və <code>endsWith()</code> metodları hərflərin böyük və ya kiçik olmasına həssasdır. <code>\"Salam\".includes(\"salam\")</code> nəticəsi <code>false</code> olacaqdır. Həssaslığı aradan qaldırmaq üçün hər iki tərəf əvvəlcə <code>toLowerCase()</code> edilir.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Mətn Doldurma və Maskalanması (padStart & padEnd)</h4>\n<p>Bank, maliyyə və təhlükəsizlik sistemlərində həssas məlumatların (kart nömrələri, şəxsiyyət vəsiqələri) maskalanması və ya rəqəmlərin sabit uzunluğa çatdırılması üçün <code>padStart()</code> və <code>padEnd()</code> metodları tətbiq olunur:</p>\n\n<pre><code>// 1. Bank kartı nömrəsinin son 4 rəqəmi xaric maskalanması\nfunction kartiMaskala(kartNomresi) {\n  const temiz = String(kartNomresi).replace(/\\s+/g, \"\");\n  const son4 = temiz.slice(-4);\n  return son4.padStart(temiz.length, \"*\");\n}\n\nconsole.log(kartiMaskala(\"4169 7388 9912 3456\")); \n// \"************3456\"\n\n// 2. Rəqəmsal Saat Formatı (2-digit padding)\nfunction saatFormatla(deqiqe, saniye) {\n  const m = String(deqiqe).padStart(2, \"0\");\n  const s = String(saniye).padStart(2, \"0\");\n  return `${m}:${s}`;\n}\n\nconsole.log(saatFormatla(5, 7)); // \"05:07\"</code></pre>",
        "codeExamples": [
          {
            "title": "String Metodlarının Zəncirvari Tətbiqi",
            "code": "const daxilOlan = \"   ELVIN@GMAIL.COM   \";\nconst temizlenmis = daxilOlan.trim().toLowerCase();\n\nconsole.log(temizlenmis);\nconsole.log(temizlenmis.includes(\"@\"));",
            "output": "elvin@gmail.com\ntrue"
          }
        ],
        "exercises": [
          {
            "id": "ex-9-2-1",
            "title": "Böyük Hərf Registrinə Transformasiya",
            "instruction": "Kiçik hərflərlə yazılmış proqramlaşdırma dili adını tamamilə böyük hərflərə çevirərək konsol ekranına ötürün.",
            "starterCode": "const proqram = \"javascript\";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "JAVASCRIPT",
            "hint": "Mətnin bütün simvollarını böyük hərfə çevirmək üçün toUpperCase() metodundan istifadə olunur.",
            "solutionCode": "const proqram = \"javascript\";\nconsole.log(proqram.toUpperCase());"
          },
          {
            "id": "ex-9-2-2",
            "title": "Kənar Boşluqların Təmizlənməsi",
            "instruction": "İstifadəçi tərəfindən daxil edilən və ətrafında artıq boşluqlar olan mətn sətirini səliqəyə salaraq təmizlənmiş formanı konsola çıxarın.",
            "starterCode": "const ad = \"  Nərgiz  \";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Nərgiz",
            "hint": "Mətnin başlanğıcındakı və sonundakı lazımsız boşluqları silmək üçün trim() metodundan istifadə edin.",
            "solutionCode": "const ad = \"  Nərgiz  \";\nconsole.log(ad.trim());"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-9-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Sətir Metodunun Çağırış Xətası",
            "instruction": "Mətn böyük hərflərlə 'HELLO' olaraq konsola çıxarılmalıdır, lakin metod düzgün çağırılmadığı üçün konsola funksiyanın öz tərifi çıxır. Kodu araşdıraraq metodun icrasını təmin edin.",
            "description": "Mətn böyük hərflərlə 'HELLO' olaraq konsola çıxarılmalıdır, lakin metod düzgün çağırılmadığı üçün konsola funksiyanın öz tərifi çıxır. Kodu araşdıraraq metodun icrasını təmin edin.",
            "buggyCode": "let str = \"hello\";\nconsole.log(str.toUpperCase);",
            "correctCode": "let str = \"hello\";\nconsole.log(str.toUpperCase());",
            "correctOutput": "HELLO",
            "expectedOutput": "HELLO",
            "explanation": "Metodlar funksiya olduğu üçün onları icra etmək məqsədilə mütləq mötərizələrlə çağırılmalıdır: str.toUpperCase()."
          }
        ],
        "bugFix": {
          "id": "bug-9-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Sətir Metodunun Çağırış Xətası",
          "instruction": "Mətn böyük hərflərlə 'HELLO' olaraq konsola çıxarılmalıdır, lakin metod düzgün çağırılmadığı üçün konsola funksiyanın öz tərifi çıxır. Kodu araşdıraraq metodun icrasını təmin edin.",
          "description": "Mətn böyük hərflərlə 'HELLO' olaraq konsola çıxarılmalıdır, lakin metod düzgün çağırılmadığı üçün konsola funksiyanın öz tərifi çıxır. Kodu araşdıraraq metodun icrasını təmin edin.",
          "buggyCode": "let str = \"hello\";\nconsole.log(str.toUpperCase);",
          "correctCode": "let str = \"hello\";\nconsole.log(str.toUpperCase());",
          "correctOutput": "HELLO",
          "expectedOutput": "HELLO",
          "explanation": "Metodlar funksiya olduğu üçün onları icra etmək məqsədilə mütləq mötərizələrlə çağırılmalıdır: str.toUpperCase()."
        }
      },
      {
        "id": "topic-9-3",
        "title": "Mətnin Bölünməsi və Əvəzlənməsi: split(), replace(), slice()",
        "theory": "<h3>✂️ Mətni Hissələrə Ayırmaq və Dəyişdirmək</h3>\n<p>Mətnləri parçalamaq, istənilən fraqmenti kəsib götürmək və fraqmentləri dəyişdirmək üçün 3 ən güclü alət tətbiq olunur:</p>\n\n<ul>\n  <li><strong><code>split(ayırıcı)</code>:</strong> Mətni göstərilən ayırıcı simvola görə hissələrə parçalayır və nəticəni <strong>yeni bir massiv (Array)</strong> kimi qaytarır:\n    <pre><code>\"alma,armud,nar\".split(\",\") // [\"alma\", \"armud\", \"nar\"]\n\"JavaScript\".split(\"\")       // Hər simvolu ayrı element edir: [\"J\", \"a\", \"v\", ...]\n\"Söz bir iki\".split(\" \")     // Boşluğa görə sözləri ayırır</code></pre>\n  </li>\n  <li><strong><code>slice(başlanğıc, son)</code>:</strong> Mətnin təyin olunmuş indekslər arasındakı hissəsini kəsir (sonuncu indeks daxil deyil). Mənfi indeks verildikdə sayma mətinin sonundan aparılır:\n    <pre><code>\"JavaScript\".slice(0, 4);  // \"Java\"\n\"Frontend\".slice(-3);       // \"end\" (son 3 simvol)</code></pre>\n  </li>\n  <li><strong><code>replace(hədəf, yeniDəyər)</code>:</strong> Mətndə rast gəlinən <em>ilk</em> uyğunluğu yeni mətnlə əvəzləyir. Bütün uyğunluqları əvəzləmək üçün <code>replaceAll()</code> və ya qlobal Requlyar İfadə (<code>/hədəf/g</code>) istifadə olunur:\n    <pre><code>\"Salam Python\".replace(\"Python\", \"JS\"); // \"Salam JS\"\n\"alma alma alma\".replaceAll(\"alma\", \"nar\"); // \"nar nar nar\"</code></pre>\n  </li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: CSV Fayllarının və Cümlələrin Emalı</strong>\n  <p>İnternet mağazasından ixrac edilən məhsul siyahısı çox vaxt <code>\"Alma,Armud,Heyva\"</code> kimi bir sətirdə gəlir. <code>split(\",\")</code> metodu bu sətiri konveyer xəttindəki ayrılmış yeşiklər (massiv elementləri) kimi çeşidləyir və hər bir məhsul üzərində fərdi əməliyyat aparmağa imkan verir.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: URL Slug Generatoru və XSS Mətn Sanitarizasiyası</h4>\n<p>Real veb layihələrində mətn manipulyasiyası iki kritik mühəndislik ssenarisində geniş istifadə olunur:</p>\n\n<pre><code>// 1. SEO Dostu URL Slug Generatoru\nfunction slugYarat(basliq) {\n  return basliq\n    .toLowerCase()\n    .trim()\n    .replace(/[^\\w\\s-]/g, \"\") // Xüsusi durğu işarələrini təmizləyir\n    .replace(/\\s+/g, \"-\");    // Ardıcıl boşluqları tək tire (-) ilə əvəzləyir\n}\n\nconsole.log(slugYarat(\"JavaScript ilə Tam Kurs 2026!\")); \n// \"javascript-il-tam-kurs-2026\"\n\n// 2. XSS (Cross-Site Scripting) Təhlükəsizliyi üçün HTML Escape\nfunction htmlEscape(metn) {\n  const tehlukeli = {\n    \"&\": \"&amp;\",\n    \"<\": \"&lt;\",\n    \">\": \"&gt;\",\n    '\"': \"&quot;\",\n    \"'\": \"&#39;\"\n  };\n  return metn.replace(/[&<>\"']/g, match => tehlukeli[match]);\n}\n\nconsole.log(htmlEscape(\"&lt;script&gt;alert('xss');&lt;/script&gt;\"));\n// \"&amp;lt;script&amp;gt;alert(&#39;xss&#39;);&amp;lt;/script&amp;gt;\"</code></pre>\n\n<div class=\"warning-box\">\n  <strong>🛡️ Mühəndislik Qaydası:</strong>\n  <p>İstifadəçidən daxil olan istənilən mətn birbaşa brauzerin DOM strukturuna (məsələn, <code>innerHTML</code> ilə) yazılmamalıdır. Mətn mütləq ya təhlükəsiz şəkildə sanitarizasiya edilməli, ya da birbaşa <code>textContent</code> xassəsi ilə təhlükəsiz mətn kimi yerləşdirilməlidir.</p>\n</div>",
        "codeExamples": [
          {
            "title": "split və replace Nümunəsi",
            "code": "const metn = \"alma armud heyva\";\nconst massiv = metn.split(\" \");\nconsole.log(massiv);\n\nconst yenilendi = \"Mən Python sevirəm\".replace(\"Python\", \"JavaScript\");\nconsole.log(yenilendi);",
            "output": "[\n  \"alma\",\n  \"armud\",\n  \"heyva\"\n]\nMən JavaScript sevirəm"
          }
        ],
        "exercises": [
          {
            "id": "ex-9-3-1",
            "title": "Cümlənin Komponentlərə Ayrılması",
            "instruction": "Boşluqlarla ayrılmış texnologiyalar mətnini ayrı-ayrı elementlərdən ibarət massiv şəklinə salaraq konsolda əks etdirin.",
            "starterCode": "const cumle = \"HTML CSS JavaScript\";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[\n  \"HTML\",\n  \"CSS\",\n  \"JavaScript\"\n]",
            "hint": "Mətni müəyyən ayırıcı simvola görə bölərək massiv əldə etmək üçün split(ayirici) metodundan istifadə olunur.",
            "solutionCode": "const cumle = \"HTML CSS JavaScript\";\nconsole.log(cumle.split(\" \"));"
          },
          {
            "id": "ex-9-3-2",
            "title": "Hədəf Sözün Əvəzlənməsi",
            "instruction": "Mətn sətirindəki \"Python\" sözünü \"JavaScript\" sözü ilə əvəzləyərək yenilənmiş salam mesajını konsola çıxarın.",
            "starterCode": "const mesaj = \"Salam, Python!\";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Salam, JavaScript!",
            "hint": "Mətndəki sözü başqa bir sözlə dəyişmək üçün replace(kohnesi, yenisi) metodundan istifadə edilir.",
            "solutionCode": "const mesaj = \"Salam, Python!\";\nconsole.log(mesaj.replace(\"Python\", \"JavaScript\"));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-9-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "split() Ayırıcı Parametr Xətası",
            "instruction": "Aşağıdakı kodda vergüllə ayrılmış mətni bölmək üçün <code>split()</code>-ə parametr verilməyib və tək elementli massiv yaranıb. <code>split(\",\")</code> yazaraq 3 elementli massiv əldə edin.",
            "description": "Aşağıdakı kodda vergüllə ayrılmış mətni bölmək üçün <code>split()</code>-ə parametr verilməyib və tək elementli massiv yaranıb. <code>split(\",\")</code> yazaraq 3 elementli massiv əldə edin.",
            "buggyCode": "const meyveler = \"alma,armud,nar\";\nconsole.log(meyveler.split());",
            "correctCode": "const meyveler = \"alma,armud,nar\";\nconsole.log(meyveler.split(\",\"));",
            "correctOutput": "[\n  \"alma\",\n  \"armud\",\n  \"nar\"\n]",
            "expectedOutput": "[\n  \"alma\",\n  \"armud\",\n  \"nar\"\n]",
            "explanation": "split() metodu ilə mətni düzgün parçalamaq üçün mütləq ayırıcı simvol (məsələn, vergül ',') ötürülməlidir."
          }
        ],
        "bugFix": {
          "id": "bug-9-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "split() Ayırıcı Parametr Xətası",
          "instruction": "Aşağıdakı kodda vergüllə ayrılmış mətni bölmək üçün <code>split()</code>-ə parametr verilməyib və tək elementli massiv yaranıb. <code>split(\",\")</code> yazaraq 3 elementli massiv əldə edin.",
          "description": "Aşağıdakı kodda vergüllə ayrılmış mətni bölmək üçün <code>split()</code>-ə parametr verilməyib və tək elementli massiv yaranıb. <code>split(\",\")</code> yazaraq 3 elementli massiv əldə edin.",
          "buggyCode": "const meyveler = \"alma,armud,nar\";\nconsole.log(meyveler.split());",
          "correctCode": "const meyveler = \"alma,armud,nar\";\nconsole.log(meyveler.split(\",\"));",
          "correctOutput": "[\n  \"alma\",\n  \"armud\",\n  \"nar\"\n]",
          "expectedOutput": "[\n  \"alma\",\n  \"armud\",\n  \"nar\"\n]",
          "explanation": "split() metodu ilə mətni düzgün parçalamaq üçün mütləq ayırıcı simvol (məsələn, vergül ',') ötürülməlidir."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_6_9 };
}
