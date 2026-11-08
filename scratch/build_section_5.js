const fs = require('fs');

const section5 = {
  "id": "section-5",
  "title": "Bölmə 5: Dövrlər (for, while, for...of, for...in)",
  "icon": "🔄",
  "topics": [
    {
      "id": "topic-5-1",
      "title": "Klassik for Dövrü, Akkumulyator Modeli və İkiölçülü Matrislər (2D)",
      "theory": `<h3>🔄 Təkrarlanan Əməliyyatlar: Klassik <code>for</code></h3>
<p>Eyni əməliyyatı müəyyən sayda təkrar icra etmək üçün <strong><code>for</code> dövründən</strong> istifadə olunur:</p>

<div class="tip-box">
  <strong>💡 Stadion Qaçışı Analogiyası:</strong> Qaçışçı stadionu 5 dövrə qaçmalıdır. Başlanğıc: <code>1-ci dövrə</code>; Şərt: <code>dövrə &lt;= 5</code>; Hər dövrənin sonunda: <code>dövrə sayı 1 artır</code>!
</div>

<h4>for Başlığının Üç Hissəsi:</h4>
<pre><code>for (başlanğıc; şərt; addım) {
  // Təkrarlanacaq kod
}</code></pre>
<ul>
  <li><strong>Başlanğıc:</strong> Sayğac dəyişəni elan edilir (məs: <code>let i = 1</code>).</li>
  <li><strong>Şərt:</strong> Şərt <code>true</code> olduğu müddətcə dövr davam edir (məs: <code>i &lt;= 5</code>).</li>
  <li><strong>Addım:</strong> Hər addımın sonunda sayğac dəyişir (məs: <code>i++</code>).</li>
</ul>

<p><strong>Akkumulyator (Toplayıcı) Modeli:</strong></p>
<pre><code>let cem = 0; // Toplayıcı qutu
for (let i = 1; i &lt;= 4; i++) {
  cem += i; // 1 + 2 + 3 + 4
}
console.log(cem); // 10</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: İç-İçə Dövrlər və İkiölçülü Matrislərin (2D Array) Koordinatları</h4>
<p>Cədvəllər və tor strukturları <strong>ikiölçülü massivlərlə (2D Array)</strong> idarə olunur. İkiölçülü matrisi emal etmək üçün xarici dövr sətirləri (<code>i</code>), daxili dövr isə sütunları (<code>j</code>) gəzir:</p>

<pre><code>const matris = [
  [1, 2, 3],
  [4, 5, 6]
];

for (let i = 0; i &lt; matris.length; i++) {
  for (let j = 0; j &lt; matris[i].length; j++) {
    console.log(\`Sətir: \${i}, Sütun: \${j} \(\rightarrow\) \${matris[i][j]}\`);
  }
}</code></pre>`,
      "codeExamples": [
        {
          "title": "Klassik for və Akkumulyator Nümunəsi",
          "code": "let hasil = 1;\nfor (let i = 1; i <= 5; i++) {\n  hasil *= i;\n}\nconsole.log(\"5 Faktorial (5!):\", hasil);",
          "output": "5 Faktorial (5!): 120"
        },
        {
          "title": "İkiölçülü Matrisin Cəmlənməsi",
          "code": "const tor = [\n  [10, 20],\n  [30, 40]\n];\nlet umumiCem = 0;\nfor (let i = 0; i < tor.length; i++) {\n  for (let j = 0; j < tor[i].length; j++) {\n    umumiCem += tor[i][j];\n  }\n}\nconsole.log(\"Torun cəmi:\", umumiCem);",
          "output": "Torun cəmi: 100"
        }
      ],
      "exercises": [
        {
          "id": "ex-5-1-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Ardıcıl Tam Ədədlərin Nümayişi",
          "instruction": "1-dən 5-ə qədər (5 daxil olmaqla) bütün tam ədədləri artan sıra ilə konsol pəncərəsində alt-alta əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "1\n2\n3\n4\n5",
          "hint": "Müəyyən sayda təkrarlanan əməliyyatlar üçün for dövründən istifadə edin və hər addımda cari sayğac dəyərini çıxışa ötürün.",
          "solutionCode": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
        },
        {
          "id": "ex-5-1-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Ədədi İntervalın Cəmlənməsi",
          "instruction": "1-dən 4-ə qədər olan tam ədədlərin (1 + 2 + 3 + 4) ümumi riyazi cəmini toplayaraq dövr tamamlandıqdan sonra yekun nəticəni (10) konsola çıxarın.",
          "starterCode": "let cem = 0;\n// Kodunuzu buraya yazın\n\nconsole.log(cem);\n",
          "expectedOutput": "10",
          "hint": "Dövr daxilində hər addımda cari ədədi əvvəlcədən təyin edilmiş cem dəyişəninə əlavə edin.",
          "solutionCode": "let cem = 0;\nfor (let i = 1; i <= 4; i++) {\n  cem += i;\n}\nconsole.log(cem);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-5-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "For Dövrünün Başlıq Sintaksisi",
          "instruction": "Proqramçı for dövrü ilə 0-dan 2-yə qədər ədədləri ekrana çıxarmaq istəyir, lakin mühərrik 'SyntaxError: Unexpected token' xətası ilə icranı dayandırır. Kodu tədqiq edin, for dövrünün parametr ayrıcılarını yoxlayaraq sintaksis xətasını aradan qaldırın.",
          "description": "Proqramçı for dövrü ilə 0-dan 2-yə qədər ədədləri ekrana çıxarmaq istəyir, lakin mühərrik 'SyntaxError: Unexpected token' xətası ilə icranı dayandırır. Kodu tədqiq edin, for dövrünün parametr ayrıcılarını yoxlayaraq sintaksis xətasını aradan qaldırın.",
          "buggyCode": "for (let i = 0, i < 3, i++) {\n  console.log(i);\n}",
          "correctCode": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
          "correctOutput": "0\n1\n2",
          "expectedOutput": "0\n1\n2",
          "explanation": "for dövrünün 3 hissəsi bir-birindən nöqtəli vergül (;) ilə ayrılmalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-5-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "For Dövrünün Başlıq Sintaksisi",
        "instruction": "Proqramçı for dövrü ilə 0-dan 2-yə qədər ədədləri ekrana çıxarmaq istəyir, lakin mühərrik 'SyntaxError: Unexpected token' xətası ilə icranı dayandırır. Kodu tədqiq edin, for dövrünün parametr ayrıcılarını yoxlayaraq sintaksis xətasını aradan qaldırın.",
        "description": "Proqramçı for dövrü ilə 0-dan 2-yə qədər ədədləri ekrana çıxarmaq istəyir, lakin mühərrik 'SyntaxError: Unexpected token' xətası ilə icranı dayandırır. Kodu tədqiq edin, for dövrünün parametr ayrıcılarını yoxlayaraq sintaksis xətasını aradan qaldırın.",
        "buggyCode": "for (let i = 0, i < 3, i++) {\n  console.log(i);\n}",
        "correctCode": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        "correctOutput": "0\n1\n2",
        "expectedOutput": "0\n1\n2",
        "explanation": "for dövrünün 3 hissəsi bir-birindən nöqtəli vergül (;) ilə ayrılmalıdır."
      }
    },
    {
      "id": "topic-5-2",
      "title": "while və do...while Dövrləri, Rəqəm Cəmi Alqoritmi və Sonsuz Dövr Tələsi",
      "theory": `<h3>⏳ Qeyri-Müəyyən İterasiyalar: <code>while</code> vs <code>do...while</code></h3>
<p>Dövrün dəqiq neçə dəfə təkrarlanacağını əvvəlcədən bilmədikdə və proses yalnız bir şərt ödəndiyi müddətcə davam etməli olduqda <strong><code>while</code></strong> seçilir:</p>

<div class="tip-box">
  <strong>💡 Yemək Yemək Analogiyası:</strong><br>
  • <strong><code>while (acıqmışam)</code> (Pre-test):</strong> Əvvəlcə ac olub-olmadığınızı yoxlayırsınız. Toxsunuzsa heç yeməyə başlamırsınız (0 dəfə icra).<br>
  • <strong><code>do { dadına bax } while (bəyəndim);</code> (Post-test):</strong> Şorbanın dadına ən azı bir qaşıq mütləq baxırsınız, bəyənsəniz yeməyə davam edirsiniz (ən azı 1 dəfə zəmanətli icra)!
</div>

<pre><code>let say = 1;
while (say <= 4) {
  console.log(say);
  say++; // Sayğacı mütləq artırmaq lazımdır!
}</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Sonsuz Dövr Tələləri, Rəqəmlər Cəmi Alqoritmi və Dayandırılma Zəmanəti</h4>
<p><strong>1. Sonsuz Dövr (Infinite Loop) Qorxusu:</strong><br>
Əgər <code>while</code> blokunun daxilində şərti dəyişdirən addım (məs: <code>i++</code>) unudularsa, şərt əbədi olaraq <code>true</code> qalır və proqram donaraq çökür.</p>

<p><strong>2. Tam Ədədin Rəqəmləri Cəminin Hesablanması:</strong><br>
İxtiyari tam ədədin rəqəmlərini qoparıb cəmləmək üçün <code>while</code> alqoritmi:</p>
<pre><code>let eded = 458;
let cem = 0;

while (eded > 0) {
  cem += eded % 10;          // Sonuncu rəqəmi əlavə et (8)
  eded = Math.floor(eded / 10); // Son rəqəmi tam bölmə ilə sil (45)
}
console.log("Rəqəmlər Cəmi:", cem); // 17</code></pre>`,
      "codeExamples": [
        {
          "title": "while Dövrü ilə Geri Sayım",
          "code": "let say = 5;\nwhile (say > 0) {\n  console.log(\"Qaldı:\", say);\n  say--; // Şərti false-a doğru aparan addım\n}\nconsole.log(\"Start!\");",
          "output": "Qaldı: 5\nQaldı: 4\nQaldı: 3\nQaldı: 2\nQaldı: 1\nStart!"
        },
        {
          "title": "do...while Zəmanətli Tək İcra",
          "code": "let saygac = 100;\ndo {\n  console.log(\"Şərt yalan olsa da bu sətir 1 dəfə işləyir! Dəyər:\", saygac);\n} while (saygac < 10);",
          "output": "Şərt yalan olsa da bu sətir 1 dəfə işləyir! Dəyər: 100"
        }
      ],
      "exercises": [
        {
          "id": "ex-5-2-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Eksponensial Artım Prosesi",
          "instruction": "1-dən başlayaraq hər addımda öz qiymətini ikiqat artıran (1, 2, 4, 8) və maksimum 8 həddinə qədər davam edən ədədi ardıcıllığı alt-alta konsolda əks etdirin.",
          "starterCode": "let eded = 1;\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "1\n2\n4\n8",
          "hint": "Şərt ödəndiyi müddətcə təkrarlanmanı təmin etmək üçün while dövründən istifadə edin və hər addımda ədədi 2-yə vurun.",
          "solutionCode": "let eded = 1;\nwhile (eded <= 8) {\n  console.log(eded);\n  eded *= 2;\n}"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-5-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Dövr İterasiyasının Tənzimlənməsi",
          "instruction": "Proqramçı while dövrü vasitəsilə 1-dən 3-ə qədər ədədləri konsola çıxarmaq istəyir, lakin dövr daxilindəki şərt heç vaxt dəyişmədiyindən proqram sonsuz dövr təhlükəsi ilə üzləşir. Kodu araşdırın, dövrün 3 addımdan sonra təbii dayandırılmasını təmin edərək hədəf çıxışı (1, 2, 3) əldə edin.",
          "description": "Proqramçı while dövrü vasitəsilə 1-dən 3-ə qədər ədədləri konsola çıxarmaq istəyir, lakin dövr daxilindəki şərt heç vaxt dəyişmədiyindən proqram sonsuz dövr təhlükəsi ilə üzləşir. Kodu araşdırın, dövrün 3 addımdan sonra təbii dayandırılmasını təmin edərək hədəf çıxışı (1, 2, 3) əldə edin.",
          "buggyCode": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n}",
          "correctCode": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}",
          "correctOutput": "1\n2\n3",
          "expectedOutput": "1\n2\n3",
          "explanation": "while dövründə sayğac dəyişənini artırmağı (i++) unutduqda şərt həmişə true qalır və sonsuz dövr yaranır."
        }
      ],
      "bugFix": {
        "id": "bug-5-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Dövr İterasiyasının Tənzimlənməsi",
        "instruction": "Proqramçı while dövrü vasitəsilə 1-dən 3-ə qədər ədədləri konsola çıxarmaq istəyir, lakin dövr daxilindəki şərt heç vaxt dəyişmədiyindən proqram sonsuz dövr təhlükəsi ilə üzləşir. Kodu araşdırın, dövrün 3 addımdan sonra təbii dayandırılmasını təmin edərək hədəf çıxışı (1, 2, 3) əldə edin.",
        "description": "Proqramçı while dövrü vasitəsilə 1-dən 3-ə qədər ədədləri konsola çıxarmaq istəyir, lakin dövr daxilindəki şərt heç vaxt dəyişmədiyindən proqram sonsuz dövr təhlükəsi ilə üzləşir. Kodu araşdırın, dövrün 3 addımdan sonra təbii dayandırılmasını təmin edərək hədəf çıxışı (1, 2, 3) əldə edin.",
        "buggyCode": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n}",
        "correctCode": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}",
        "correctOutput": "1\n2\n3",
        "expectedOutput": "1\n2\n3",
        "explanation": "while dövründə sayğac dəyişənini artırmağı (i++) unutduqda şərt həmişə true qalır və sonsuz dövr yaranır."
      }
    },
    {
      "id": "topic-5-3",
      "title": "Dövr İdarəetməsi: break, continue və Etiketli Dövrlər (Labeled Loops)",
      "theory": `<h3>🛑 Dövrün İdarəsi: <code>break</code> və <code>continue</code></h3>
<p>Dövrün axınına müdaxilə etmək üçün iki güclü operator mövcuddur:</p>
<ul>
  <li><strong><code>break</code>:</strong> Dövrü <strong>tamamilə qırır və dayandırır</strong> (axtarılan hədəf tapıldıqda qalan minlərlə elementi gəzməmək üçün).</li>
  <li><strong><code>continue</code>:</strong> Yalnız <strong>cari addımı atlayır</strong> və dərhal növbəti addıma keçir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Kitab Oxumaq Analogiyası:</strong><br>
  • <strong><code>break</code>:</strong> Kitabda axtardığınız tərifi tapdınız, dərhal kitabı bağlayırsınız.<br>
  • <strong><code>continue</code>:</strong> Kitabın 5-ci səhifəsi maraqsızdır, onu oxumadan atlayıb 6-cı səhifəyə keçirsiniz!
</div>

<pre><code>// continue ilə yalnız cüt ədədləri çap etmək:
for (let i = 1; i <= 4; i++) {
  if (i % 2 !== 0) continue; // Tək ədədləri atla
  console.log(i); // 2, 4
}</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Etiketli Dövrlər (Labeled Loops) və Xarici İdarəetmə</h4>
<p>Klassik <code>break</code> yalnız daxilində olduğu ən yaxın dövrü dayandırır. Bəs iç-içə dövrlərdə daxildən birbaşa <strong>ən xarici dövrü</strong> dayandırmaq lazım gəldikdə nə etməli?</p>

<div class="tip-box">
  <strong>💡 Etiket (Label) Mexanizmi:</strong> Xarici dövrə ad verərək (<code>xariciDovr: for (...)</code>) daxildən birbaşa <code>break xariciDovr;</code> əmri verə bilərsiniz:
</div>

<pre><code>xariciDovr: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Hədəf tapıldı, hər iki dövr dayandırılır!");
      break xariciDovr; // Bütöv sistemi dərhal qırır!
    }
  }
}</code></pre>`,
      "codeExamples": [
        {
          "title": "break ilə Erkən Dayandırma",
          "code": "const ededler = [5, 12, 8, 130, 44];\nlet tapilan = null;\n\nfor (const e of ededler) {\n  if (e > 100) {\n    tapilan = e;\n    break; // 130 tapıldı, 44-ü yoxlamağa ehtiyac qalmadı!\n  }\n}\nconsole.log(\"100-dən böyük ilk ədəd:\", tapilan);",
          "output": "100-dən böyük ilk ədəd: 130"
        },
        {
          "title": "Etiketli Dövr (Labeled Loop) Nümunəsi",
          "code": "anaDovr: for (let i = 1; i <= 2; i++) {\n  for (let j = 1; j <= 2; j++) {\n    if (i === 1 && j === 2) {\n      break anaDovr;\n    }\n    console.log(i + \"-\" + j);\n  }\n}",
          "output": "1-1"
        }
      ],
      "exercises": [
        {
          "id": "ex-5-3-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Hədəf Tapıldıqda Dövrün Qırılması",
          "instruction": "1-dən 5-ə qədər olan ədədləri dövr ilə çap edin, lakin sayğac 3 qiymətinə çatdıqda (3 çap olunduqdan sonra) <code>break</code> vasitəsilə dövrü vaxtından əvvəl dayandırın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "1\n2\n3",
          "hint": "Şərt daxilində (i === 3) olduqda konsola çıxışdan dərhal sonra break əmrini çağırın.",
          "solutionCode": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n  if (i === 3) {\n    break;\n  }\n}"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-5-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "İterasiya Axınının Davam Etdirilməsi",
          "instruction": "Proqramçı for dövründə 2 ədədini atlayaraq 1 və 3 ədədlərini konsola çıxarmaq istəyir, lakin dövr idarəetməsindəki yanlışlıq səbəbindən dövr vaxtından əvvəl qırılır və konsola yalnız 1 çıxır. Kodu tədqiq edin, növbəti iterasiyaya keçid məntiqini bərpa edərək 1 və 3 çıxışını əldə edin.",
          "description": "Proqramçı for dövründə 2 ədədini atlayaraq 1 və 3 ədədlərini konsola çıxarmaq istəyir, lakin dövr idarəetməsindəki yanlışlıq səbəbindən dövr vaxtından əvvəl qırılır və konsola yalnız 1 çıxır. Kodu tədqiq edin, növbəti iterasiyaya keçid məntiqini bərpa edərək 1 və 3 çıxışını əldə edin.",
          "buggyCode": "for (let i = 1; i <= 3; i++) {\n  if (i === 2) {\n    break;\n  }\n  console.log(i);\n}",
          "correctCode": "for (let i = 1; i <= 3; i++) {\n  if (i === 2) {\n    continue;\n  }\n  console.log(i);\n}",
          "correctOutput": "1\n3",
          "expectedOutput": "1\n3",
          "explanation": "Dövrü tam dayandırmaq yox, yalnız cari addımı buraxıb davam etmək üçün continue istifadə edilməlidir."
        }
      ],
      "bugFix": {
        "id": "bug-5-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "İterasiya Axınının Davam Etdirilməsi",
        "instruction": "Proqramçı for dövründə 2 ədədini atlayaraq 1 və 3 ədədlərini konsola çıxarmaq istəyir, lakin dövr idarəetməsindəki yanlışlıq səbəbindən dövr vaxtından əvvəl qırılır və konsola yalnız 1 çıxır. Kodu tədqiq edin, növbəti iterasiyaya keçid məntiqini bərpa edərək 1 və 3 çıxışını əldə edin.",
        "description": "Proqramçı for dövründə 2 ədədini atlayaraq 1 və 3 ədədlərini konsola çıxarmaq istəyir, lakin dövr idarəetməsindəki yanlışlıq səbəbindən dövr vaxtından əvvəl qırılır və konsola yalnız 1 çıxır. Kodu tədqiq edin, növbəti iterasiyaya keçid məntiqini bərpa edərək 1 və 3 çıxışını əldə edin.",
        "buggyCode": "for (let i = 1; i <= 3; i++) {\n  if (i === 2) {\n    break;\n  }\n  console.log(i);\n}",
        "correctCode": "for (let i = 1; i <= 3; i++) {\n  if (i === 2) {\n    continue;\n  }\n  console.log(i);\n}",
        "correctOutput": "1\n3",
        "expectedOutput": "1\n3",
        "explanation": "Dövrü tam dayandırmaq yox, yalnız cari addımı buraxıb davam etmək üçün continue istifadə edilməlidir."
      }
    },
    {
      "id": "topic-5-4",
      "title": "Müasir Dövrlər: for...of vs for...in və Dövri Alqoritmlər",
      "theory": `<h3>🌟 Müasir Kolleksiya Dövrləri: <code>for...of</code> vs <code>for...in</code></h3>
<p>Massiv və obyektləri rahat və təmiz gəzmək üçün iki fərqli dövr tətbiq olunur:</p>
<ul>
  <li><strong><code>for...of</code>:</strong> Massivlərin, sətirlərin və kolleksiyaların bilavasitə <strong>DƏYƏRLƏRİNİ (Values)</strong> gəzir.</li>
  <li><strong><code>for...in</code>:</strong> Obyektlərin <strong>AÇARLARINI / XÜSUSİYYƏT ADLARINI (Keys)</strong> gəzir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Poçt Qutusu Analogiyası:</strong><br>
  • <strong><code>for...of</code>:</strong> Bağlamanı açıb içindəki əşyaları bir-bir çıxarıb baxmaqdır.<br>
  • <strong><code>for...in</code>:</strong> Qutunun üzərindəki yapışqanlı etiketləri (ad, ünvan, barkod açarlarını) oxumaqdır!
</div>

<pre><code>// Massivdə for...of:
const meyveler = ["Alma", "Armud"];
for (const m of meyveler) {
  console.log(m); // "Alma", "Armud" (Dəyərlər!)
}

// Obyektdə for...in:
const user = { ad: "Murad", yas: 25 };
for (const acar in user) {
  console.log(acar); // "ad", "yas" (Açarlar!)
}</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Massivlərdə for...in Tələsi və Mühəndislik Alqoritmləri (Two-Pointer, RLE)</h4>
<div class="warning-box">
  <strong>⚠️ Massivlərdə for...in Qadağandır:</strong><br>
  1. <code>for...in</code> massiv elementlərinin indekslərini ədəd kimi deyil, <strong>String ("0", "1")</strong> kimi qaytarır.<br>
  2. Massivin prototipinə sonradan əlavə edilmiş funksiyaları da dövrə salır (Prototype leak)! Massivlər üçün HƏMİŞƏ <code>for...of</code> istifadə edin.
</div>

<p><strong>Mühəndislik Alqoritmləri:</strong></p>

<p><strong>1. Massivin Yerində Tərsinə Çevrilməsi (In-place Two-Pointer):</strong></p>
<pre><code>function tersCevir(arr) {
  let sol = 0, sag = arr.length - 1;
  while (sol < sag) {
    [arr[sol], arr[sag]] = [arr[sag], arr[sol]];
    sol++;
    sag--;
  }
  return arr;
}
console.log(tersCevir([1, 2, 3])); // [3, 2, 1]</code></pre>

<p><strong>2. Run-Length Encoding (RLE) Məlumat Sıxılması:</strong></p>
<pre><code>function rleSix(str) {
  let netice = "", say = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) say++;
    else { netice += str[i] + say; say = 1; }
  }
  return netice;
}
console.log(rleSix("AAABBC")); // "A3B2C1"</code></pre>`,
      "codeExamples": [
        {
          "title": "for...of vs for...in Praktiki Müqayisəsi",
          "code": "const seherler = [\"Bakı\", \"Şuşa\"];\nfor (const s of seherler) {\n  console.log(\"Dəyər (for...of):\", s);\n}\n\nconst telebe = { ad: \"Murad\", bal: 95 };\nfor (const acar in telebe) {\n  console.log(\"Açar (for...in):\", acar, \"->\", telebe[acar]);\n}",
          "output": "Dəyər (for...of): Bakı\nDəyər (for...of): Şuşa\nAçar (for...in): ad -> Murad\nAçar (for...in): bal -> 95"
        },
        {
          "title": "Sadə Ədəd Yoxlama Alqoritmi",
          "code": "function yoxla(n) {\n  if (n <= 1) return false;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\nconsole.log(\"13 sadədir:\", yoxla(13));\nconsole.log(\"15 sadədir:\", yoxla(15));",
          "output": "13 sadədir: true\n15 sadədir: false"
        }
      ],
      "exercises": [
        {
          "id": "ex-5-4-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Kolleksiya Elementlərinin Tək-Tək Oxunması",
          "instruction": "Verilmiş şəhərlər siyahısındakı hər bir şəhər adını ardıcıl olaraq konsol ekranında alt-alta əks etdirin.",
          "starterCode": "const seherler = [\"Bakı\", \"Gəncə\", \"Şuşa\"];\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "Bakı\nGəncə\nŞuşa",
          "hint": "Massiv və ya kolleksiyaların elementlərini rahatlıqla oxumaq üçün for...of strukturundan istifadə olunur.",
          "solutionCode": "const seherler = [\"Bakı\", \"Gəncə\", \"Şuşa\"];\nfor (const seher of seherler) {\n  console.log(seher);\n}"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-5-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Kolleksiya İterasiya Növünün Seçimi",
          "instruction": "Proqramçı massivdəki meyvə adlarını ('Alma', 'Armud') konsola çap etmək istəyir, lakin seçilən dövr növü elementlərin qiymətləri əvəzinə onların indekslərini ('0', '1') çap edir. Kodu araşdırın, massiv qiymətlərini birbaşa iterasiya edən dövr növünü tətbiq edərək hədəf çıxışı əldə edin.",
          "description": "Proqramçı massivdəki meyvə adlarını ('Alma', 'Armud') konsola çap etmək istəyir, lakin seçilən dövr növü elementlərin qiymətləri əvəzinə onların indekslərini ('0', '1') çap edir. Kodu araşdırın, massiv qiymətlərini birbaşa iterasiya edən dövr növünü tətbiq edərək hədəf çıxışı əldə edin.",
          "buggyCode": "const meyveler = [\"Alma\", \"Armud\"];\nfor (const m in meyveler) {\n  console.log(m);\n}",
          "correctCode": "const meyveler = [\"Alma\", \"Armud\"];\nfor (const m of meyveler) {\n  console.log(m);\n}",
          "correctOutput": "Alma\nArmud",
          "expectedOutput": "Alma\nArmud",
          "explanation": "Massivin dəyərlərini əldə etmək üçün for...of istifadə edilməlidir (for...in isə indeksləri qaytarır)."
        }
      ],
      "bugFix": {
        "id": "bug-5-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Kolleksiya İterasiya Növünün Seçimi",
        "instruction": "Proqramçı massivdəki meyvə adlarını ('Alma', 'Armud') konsola çap etmək istəyir, lakin seçilən dövr növü elementlərin qiymətləri əvəzinə onların indekslərini ('0', '1') çap edir. Kodu araşdırın, massiv qiymətlərini birbaşa iterasiya edən dövr növünü tətbiq edərək hədəf çıxışı əldə edin.",
        "description": "Proqramçı massivdəki meyvə adlarını ('Alma', 'Armud') konsola çap etmək istəyir, lakin seçilən dövr növü elementlərin qiymətləri əvəzinə onların indekslərini ('0', '1') çap edir. Kodu araşdırın, massiv qiymətlərini birbaşa iterasiya edən dövr növünü tətbiq edərək hədəf çıxışı əldə edin.",
        "buggyCode": "const meyveler = [\"Alma\", \"Armud\"];\nfor (const m in meyveler) {\n  console.log(m);\n}",
        "correctCode": "const meyveler = [\"Alma\", \"Armud\"];\nfor (const m of meyveler) {\n  console.log(m);\n}",
        "correctOutput": "Alma\nArmud",
        "expectedOutput": "Alma\nArmud",
        "explanation": "Massivin dəyərlərini əldə etmək üçün for...of istifadə edilməlidir (for...in isə indeksləri qaytarır)."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section5 };
}
console.log('Section 5 built successfully');
