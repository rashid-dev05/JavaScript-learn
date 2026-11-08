const fs = require('fs');

const section6 = {
  "id": "section-6",
  "title": "Bölmə 6: Massivlər (Arrays) və Əsas Metodlar",
  "icon": "📚",
  "topics": [
    {
      "id": "topic-6-1",
      "title": "Massiv Nədir və İndeksləmə",
      "theory": `<h3>📚 Massiv (Array) Nədir?</h3>
<p><strong>Massiv (Array)</strong> — bir neçə məlumatı tək bir dəyişən daxilində nizamlı şəkildə saxlamağa imkan verən xüsusi məlumat strukturudur. Kvadrat mötərizələr <code>[ ]</code> ilə yaradılır və elementlər vergüllə ayrılır:</p>
<pre><code>const meyveler = ["Alma", "Banan", "Gilas"];</code></pre>

<div class="tip-box">
  <strong>💡 Qarderob Rəfi Analogiyası:</strong> Massivi nömrələnmiş rəfləri olan böyük bir qarderob kimi düşünün. Hər rəfdə bir əşya saxlanılır və hər rəfin özünəməxsus nömrəsi (indeksi) var.
</div>

<h4>İndeksləmə Qaydası (Sıfırdan Başlayır!):</h4>
<p>Massivdə sayma həmişə <strong>0-dan başlayır</strong>:</p>
<ul>
  <li><code>meyveler[0]</code> \(\rightarrow\) <code>"Alma"</code> (0-cı indeks, birinci element)</li>
  <li><code>meyveler[1]</code> \(\rightarrow\) <code>"Banan"</code> (1-ci indeks, ikinci element)</li>
  <li><code>meyveler[2]</code> \(\rightarrow\) <code>"Gilas"</code> (2-ci indeks, üçüncü element)</li>
</ul>

<p><strong>Massivin Uzunluğu (<code>.length</code>) və Sonuncu Element:</strong><br>
Massivdə neçə element olduğunu öyrənmək üçün <code>.length</code> xassəsindən istifadə edilir. Sonuncu elementi tapmaq üçün klassik <code>arr[arr.length - 1]</code> və ya müasir <code>arr.at(-1)</code> yazılır.</p>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Çoxölçülü Massivlər və Matrislər (2D Arrays / Matrices)</h4>
<p>Massivin daxilində digər massivləri yerləşdirməklə <strong>çoxölçülü massivlər (matrislər)</strong> formalaşdırılır. Şahmat lövhəsi, koordinat toru və piksel cədvəlləri məhz bu arxitektura ilə qurulur:</p>

<pre><code>const matris = [
  [10, 20, 30], // Sətir 0
  [40, 50, 60], // Sətir 1
  [70, 80, 90]  // Sətir 2
];

// Matris elementinə giriş: matris[sətirİndeksi][sütunİndeksi]
console.log(matris[1][2]); // 60 (1-ci sətir, 2-ci sütun)</code></pre>

<div class="warning-box">
  <strong>⚠️ Sərhəd Aşımı Xətası (Out of Bounds):</strong> Əgər mövcud olmayan sətrin sütununu oxumağa cəhd etsəniz (məs: <code>matris[5][0]</code>), <code>matris[5]</code> <code>undefined</code> qaytaracaq və <code>undefined[0]</code> dərhal <code>TypeError: Cannot read properties of undefined</code> qəzası törədəcəkdir!
</div>`,
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
      "theory": `<h3>📥 Massivdə Əlavə və Silmə Əməliyyatları</h3>
<p>Massivin başlanğıcına və ya sonuna yeni elementlər əlavə etmək və mövcud elementləri çıxarmaq üçün 4 təməl metoddan istifadə edilir:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Metod</th>
        <th>Hərəkət</th>
        <th>Yerləşmə Mövqeyi</th>
        <th>Performans (Zaman Mürəkkəbliyi)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>push(el)</code></td><td>Yeni element əlavə edir</td><td>Massivin <strong>sonuna</strong></td><td>\(O(1)\) — Çox sürətli</td></tr>
      <tr><td><code>pop()</code></td><td>Elementi silir və qaytarır</td><td>Massivin <strong>sonundan</strong></td><td>\(O(1)\) — Çox sürətli</td></tr>
      <tr><td><code>unshift(el)</code></td><td>Yeni element əlavə edir</td><td>Massivin <strong>əvvəlinə</strong></td><td>\(O(N)\) — Bütün indekslər sürüşür</td></tr>
      <tr><td><code>shift()</code></td><td>Elementi silir və qaytarır</td><td>Massivin <strong>əvvəlindən</strong></td><td>\(O(N)\) — Bütün indekslər sürüşür</td></tr>
    </tbody>
  </table>
</div>

<div class="tip-box">
  <strong>💡 Qatar Vaqonları Analogiyası:</strong> Qatara arxadan yeni vaqon qoşmaq (<code>push</code>) və ya arxadakı vaqonu açmaq (<code>pop</code>) heç bir digər vaqonun yerini dəyişmir. Lakin qatarın ən önünə yeni vaqon salmaq (<code>unshift</code>) arxadakı bütün vaqonları geriyə doğru sürüşdürməyi tələb edir!
</div>

<div class="warning-box">
  <strong>⚠️ Python append() Tələsi:</strong> Python-dan fərqli olaraq JavaScript massivlərində <code>append()</code> metodu yoxdur! Sonluğa əlavə etmək üçün həmişə <code>push()</code> yazılmalıdır.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Yığın (Stack - LIFO) və Növbə (Queue - FIFO) Modelləri</h4>
<p>Klassik məlumat strukturlarını massiv metodları vasitəsilə asanlıqla reallaşdırmaq mümkündür:</p>
<ol>
  <li><strong>Yığın (Stack — LIFO: Last In, First Out):</strong> Son daxil olan ilk çıxır (məsələn, üst-üstə yığılmış boşqablar). Brauzerin \"Geri\" düyməsi və funksiya çağırış qalağı (Call Stack) belə işləyir:
    <pre><code>const yigin = [];
yigin.push("Səhifə 1");
yigin.push("Səhifə 2");
const sonSehife = yigin.pop(); // "Səhifə 2" çıxdı</code></pre>
  </li>
  <li><strong>Növbə (Queue — FIFO: First In, First Out):</strong> İlk daxil olan ilk çıxır (məsələn, kassa qarşısındakı canlı növbə):
    <pre><code>const novbe = [];
novbe.push("Müştəri A"); // Növbəyə daxil olur
novbe.push("Müştəri B");
const xidmetEdilen = novbe.shift(); // "Müştəri A" ilk xidmət alır</code></pre>
  </li>
</ol>`,
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
      "theory": `<h3>✂️ slice() və splice() Metodları</h3>
<p>Massivdən müəyyən hissəni kəsmək və ya daxilinə müdaxilə etmək üçün iki fərqli metod mövcuddur:</p>

<ul>
  <li><strong><code>slice(start, end)</code> (Dəyişməz / Immutable):</strong> Orijinal massivə toxunmur. Göstərilən aralıqdan yeni alt-massiv nüsxələyib qaytarır (<code>end</code> indeksi daxil edilmir).</li>
  <li><strong><code>splice(start, silinənSay, ...yeniElementlər)</code> (Dəyişdirən / Mutable):</strong> Orijinal massivi birbaşa yerində dəyişir. İstənilən indeksdən elementləri silir və ya yenilərini daxil edir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Tort Dilimi Analogiyası:</strong> <code>slice</code> sözü ingiliscə \"dilimləmək\" deməkdir — tortdan bir dilim kəsib boşqaba qoyursunuz, böyük tort bütöv qalır. <code>splice</code> isə cərrahi müdaxilədir — massivin gövdəsinə daxil olub elementləri çıxarır və ya içinə yeni element calayır!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Massivin Yerində Fırladılması (Array Rotation) və Dəyişməzlik (Immutability)</h4>
<p>Massivin elementlərini \(k\) addım sağa fırlatmaq (rotation) üçün massiv metodlarının birgə tətbiqi:</p>

<pre><code>function massiviFirlat(arr, k) {
  const addim = k % arr.length;
  // Sondan k sayda elementi kəsib əvvələ calayırıq:
  const quyruq = arr.splice(-addim);
  arr.unshift(...quyruq);
  return arr;
}
console.log(massiviFirlat([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]</code></pre>

<div class="warning-box">
  <strong>⚠️ Reaktiv Frontend Standartı:</strong> React və Redux kimi müasir framework-lərdə vəziyyətin (state) birbaşa dəyişdirilməsi qadağandır. Buna görə də komponentlərdə <code>splice()</code> yerinə həmişə toxunulmaz <code>slice()</code> və ya spread <code>[...arr]</code> seçilməlidir!
</div>`,
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
      "theory": `<h3>🔎 Massivdə Axtarış və Birləşdirmə</h3>
<p>Massiv daxilində axtarış aparmaq və ya elementləri mətnə çevirmək üçün ən çox istifadə olunan metodlar:</p>

<ul>
  <li><strong><code>includes(element)</code>:</strong> Elementin massivdə mövcudluğunu yoxlayır və <code>true</code> və ya <code>false</code> qaytarır.</li>
  <li><strong><code>indexOf(element)</code>:</strong> Axtarılan elementin birinci rast gəlinən indeksini tapır. Əgər element <strong>tapılmazsa -1</strong> qaytarır.</li>
  <li><strong><code>join(ayırıcı)</code>:</strong> Massivin bütün elementlərini verilmiş ayırıcı simvolla yapışdıraraq tək bir mətnə (String) çevirir.</li>
  <li><strong><code>reverse()</code>:</strong> Massivi yerində tərsinə çevirir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Qeydiyyat Siyahısı Analogiyası:</strong> Tədbirə gələn qonağın siyahıda olub-olmadığını tez bilmək üçün <code>includes("Murad")</code> çağırırıq. Əgər qonağın neçənci sırada oturduğunu bilmək lazımdırsa, <code>indexOf("Murad")</code> kömək edir!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Çoxluqların Kəsişməsi (Intersection) və Unikal Elementlər</h4>
<p>İki massiv arasında ortaq elementlərin tapılması (Intersection) və təkrar elementlərin təmizlənməsi alqoritmi:</p>

<pre><code>// 1. İki massivin kəsişməsi (Intersection):
function kesismeTap(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(kesismeTap([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// 2. Təkrarların təmizlənməsi (Deduplication):
function unikalEt(arr) {
  const unikal = [];
  for (const item of arr) {
    if (!unikal.includes(item)) {
      unikal.push(item);
    }
  }
  return unikal;
}
console.log(unikalEt([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]</code></pre>`,
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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section6 };
}
console.log('Section 6 built successfully');
