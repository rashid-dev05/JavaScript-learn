// Section 9 Builder: String Metodları və Template Literals
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section9 = {
  "id": "section-9",
  "title": "Bölmə 9: String Metodları və Template Literals (`${}`)",
  "icon": "📝",
  "topics": [
    {
      "id": "topic-9-1",
      "title": "Template Literals (Şablon Sətirlər: `${}`)",
      "theory": `<h3>📝 Şablon Sətirlər (Template Literals: <code>\` \`</code>)</h3>
<p>Ənənəvi JavaScript-də sətirləri dəyişənlərlə birləşdirmək üçün <code>+</code> operatorundan istifadə olunurdu (<strong>String Concatenation</strong>). Bu üsul uzun və mürəkkəb cümlələrdə kodun oxunmasını xeyli çətinləşdirir və dırnaq səhvlərinə yol açırdı:</p>

<pre><code>// Köhnə üsul (Concatenation):
const ad = "Orxan";
const xal = 95;
console.log("Salam, " + ad + ". Sizin imtahan nəticəniz: " + xal + " baldır.");</code></pre>

<p>Müasir JavaScript (ES6) ilə birlikdə bu problemi aradan qaldıran <strong>Template Literals (Şablon Sətirlər)</strong> təqdim olundu. Adi dırnaqlar (<code>""</code> və ya <code>''</code>) əvəzinə <strong>Backtick (<code>\` \`</code>)</strong> simvolları istifadə olunur və dəyişənlər birbaşa <code>\${dəyişən}</code> konstruksiyası ilə mətnin daxilinə yerləşdirilir (<strong>String Interpolation</strong>):</p>

<pre><code>// Müasir və səliqəli üsul (Template Literal):
const ad = "Orxan";
const xal = 95;
console.log(\`Salam, \${ad}. Sizin imtahan nəticəniz: \${xal} baldır.\`);</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Rəsmi Arayış Blankı</strong>
  <p>Təsəvvür edin ki, bank və ya universitetdə adınız, təvəllüdünüz və balansınız üçün xüsusi xanaları olan rəsmi arayış blankı var. Hər dəfə bütün arayışı əllə sıfırdan yazmaq əvəzinə, sabit mətn qalır və yalnız <code>\${ad}</code> və <code>\${balans}</code> xanaları müvafiq şəxsin məlumatları ilə dinamik şəkildə doldurulur.</p>
</div>

<div class="tip-box">
  <strong>✨ Template Literals-in Əsas Üstünlükləri:</strong>
  <ul>
    <li><strong>Dinamik İfadə İcrası:</strong> <code>\${ }</code> daxilində təkcə dəyişən adları deyil, istənilən riyazi hesablama və ya funksiya çağırışı icra edilə bilər: <code>\`Cəm: \${5 + 10}\`</code> -> <code>"Cəm: 15"</code>.</li>
    <li><strong>Şərti İfadələr (Ternary):</strong> Şablon daxilində ternary operatoru birbaşa işlətmək olar: <code>\`Status: \${aktiv ? "Aktiv" : "Deaktiv"}\`</code>.</li>
    <li><strong>Çoxsətirli Mətnlər (Multi-line Strings):</strong> Əvvəllər yeni sətrə keçmək üçün <code>\\n</code> yazmaq lazım gəlirdisə, backtick daxilində klaviaturada Enter düyməsini sıxmaq kifayətdir.</li>
  </ul>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Sadə Şablon Mühərriki (Mini Template Engine) və Tagged Templates</h4>
<p>Frontend kitabxanalarında (məsələn, Mustache, Handlebars və ya Vue/React render mexanizmləri) mətn şablonlarındakı yer tutucular (placeholder) dinamik verilənlər obyekti ilə əvəzlənir. Şablon sətirlərin məntiqini dərindən anlamaq üçün sadə şablon mühərriki qura bilərik:</p>

<pre><code>// Dinamik mətn yer tutucularını ({{açar}}) verilənlərlə dolduran mühərrik
function renderSablon(sablon, data) {
  return sablon.replace(/\\{\\{(\\w+)\\}\\}/g, (_, acar) => {
    return acar in data ? data[acar] : "";
  });
}

const sablon = "Hörmətli {{ad}}, sizin sifarişiniz (№ {{sifarisId}}) {{status}} vəziyyətindədir.";
const melumat = { ad: "Rauf", sifarisId: "A-9812", status: "çatdırıldı" };

console.log(renderSablon(sablon, melumat));
// "Hörmətli Rauf, sizin sifarişiniz (№ A-9812) çatdırıldı vəziyyətindədir."</code></pre>

<div class="warning-box">
  <strong>⚠️ Tagged Template Literals (Qeydli Şablonlar):</strong>
  <p>Şablon sətirin qarşısına funksiya adı qoyduqda (məsələn, <code>tag\`Mətn \${ad}\`</code>), funksiya xam sətir hissələrini və interpolyasiya edilən dəyərləri parametr kimi qəbul edir. Bu texnika <code>styled-components</code> kitabxanasında və verilənlər bazası SQL sorğularında SQL Injection hücumlarının qarşısını almaq üçün təhlükəsiz escaping mexanizmi kimi istifadə olunur.</p>
</div>`,
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
      "theory": `<h3>🔤 Mətn Üzərində Əsas Əməliyyatlar və Dəyişməzlik</h3>
<p>JavaScript-də sətirlər (Strings) <strong>primitiv verilən tipidir və dəyişməzdir (immutable)</strong>. Bu o deməkdir ki, heç bir string metodu mövcud mətni birbaşa yerində dəyişmir; bütün metodlar emal olunmuş <strong>yeni bir mətn sətiri</strong> qaytarır:</p>

<pre><code>let dil = "javascript";
dil.toUpperCase(); // Yeni mətn qaytarır, amma "dil" dəyişmir!
console.log(dil); // Hələ də "javascript"
dil = dil.toUpperCase(); // Yenidən mənimsətmək lazımdır
console.log(dil); // "JAVASCRIPT"</code></pre>

<p>Gündəlik proqramlaşdırmada ən çox ehtiyac duyulan əsas string metodları:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Metod</th>
        <th>Təyinatı</th>
        <th>Nümunə</th>
        <th>Nəticə</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>toUpperCase()</code></td>
        <td>Bütün simvolları böyük hərfə çevirir</td>
        <td><code>"kod".toUpperCase()</code></td>
        <td><code>"KOD"</code></td>
      </tr>
      <tr>
        <td><code>toLowerCase()</code></td>
        <td>Bütün simvolları kiçik hərfə çevirir</td>
        <td><code>"BAKI".toLowerCase()</code></td>
        <td><code>"bakı"</code></td>
      </tr>
      <tr>
        <td><code>trim()</code></td>
        <td>Başlanğıc və sondakı boşluqları təmizləyir</td>
        <td><code>"  admin  ".trim()</code></td>
        <td><code>"admin"</code></td>
      </tr>
      <tr>
        <td><code>includes(altSöz)</code></td>
        <td>Alt-mətnin mövcudluğunu yoxlayır (boolean)</td>
        <td><code>"JS Əla".includes("Əla")</code></td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <td><code>startsWith(prefiks)</code></td>
        <td>Mətnin verilən simvollarla başlamasını yoxlayır</td>
        <td><code>"+99450".startsWith("+994")</code></td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <td><code>endsWith(suffiks)</code></td>
        <td>Mətnin verilən simvollarla bitməsini yoxlayır</td>
        <td><code>"fayl.pdf".endsWith(".pdf")</code></td>
        <td><code>true</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: İstifadəçi Giriş Formunun Standartlaşdırılması</strong>
  <p>İstifadəçi qeydiyyat və ya giriş formunda emailini <code>"   Elvin@Gmail.com  "</code> kimi boşluqlarla və böyük hərflərlə yaza bilər. Verilənlər bazasında müqayisə aparmazdan əvvəl <code>.trim().toLowerCase()</code> zəncirvari çağırışı tətbiq edilərək daxil edilən məlumat <code>"elvin@gmail.com"</code> standart şəklinə salınır.</p>
</div>

<div class="warning-box">
  <strong>⚠️ Böyük-Kiçik Hərf Həssaslığı (Case Sensitivity):</strong>
  <p><code>includes()</code>, <code>startsWith()</code> və <code>endsWith()</code> metodları hərflərin böyük və ya kiçik olmasına həssasdır. <code>"Salam".includes("salam")</code> nəticəsi <code>false</code> olacaqdır. Həssaslığı aradan qaldırmaq üçün hər iki tərəf əvvəlcə <code>toLowerCase()</code> edilir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Mətn Doldurma və Maskalanması (padStart & padEnd)</h4>
<p>Bank, maliyyə və təhlükəsizlik sistemlərində həssas məlumatların (kart nömrələri, şəxsiyyət vəsiqələri) maskalanması və ya rəqəmlərin sabit uzunluğa çatdırılması üçün <code>padStart()</code> və <code>padEnd()</code> metodları tətbiq olunur:</p>

<pre><code>// 1. Bank kartı nömrəsinin son 4 rəqəmi xaric maskalanması
function kartiMaskala(kartNomresi) {
  const temiz = String(kartNomresi).replace(/\\s+/g, "");
  const son4 = temiz.slice(-4);
  return son4.padStart(temiz.length, "*");
}

console.log(kartiMaskala("4169 7388 9912 3456")); 
// "************3456"

// 2. Rəqəmsal Saat Formatı (2-digit padding)
function saatFormatla(deqiqe, saniye) {
  const m = String(deqiqe).padStart(2, "0");
  const s = String(saniye).padStart(2, "0");
  return \`\${m}:\${s}\`;
}

console.log(saatFormatla(5, 7)); // "05:07"</code></pre>`,
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
      "theory": `<h3>✂️ Mətni Hissələrə Ayırmaq və Dəyişdirmək</h3>
<p>Mətnləri parçalamaq, istənilən fraqmenti kəsib götürmək və fraqmentləri dəyişdirmək üçün 3 ən güclü alət tətbiq olunur:</p>

<ul>
  <li><strong><code>split(ayırıcı)</code>:</strong> Mətni göstərilən ayırıcı simvola görə hissələrə parçalayır və nəticəni <strong>yeni bir massiv (Array)</strong> kimi qaytarır:
    <pre><code>"alma,armud,nar".split(",") // ["alma", "armud", "nar"]
"JavaScript".split("")       // Hər simvolu ayrı element edir: ["J", "a", "v", ...]
"Söz bir iki".split(" ")     // Boşluğa görə sözləri ayırır</code></pre>
  </li>
  <li><strong><code>slice(başlanğıc, son)</code>:</strong> Mətnin təyin olunmuş indekslər arasındakı hissəsini kəsir (sonuncu indeks daxil deyil). Mənfi indeks verildikdə sayma mətinin sonundan aparılır:
    <pre><code>"JavaScript".slice(0, 4);  // "Java"
"Frontend".slice(-3);       // "end" (son 3 simvol)</code></pre>
  </li>
  <li><strong><code>replace(hədəf, yeniDəyər)</code>:</strong> Mətndə rast gəlinən <em>ilk</em> uyğunluğu yeni mətnlə əvəzləyir. Bütün uyğunluqları əvəzləmək üçün <code>replaceAll()</code> və ya qlobal Requlyar İfadə (<code>/hədəf/g</code>) istifadə olunur:
    <pre><code>"Salam Python".replace("Python", "JS"); // "Salam JS"
"alma alma alma".replaceAll("alma", "nar"); // "nar nar nar"</code></pre>
  </li>
</ul>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: CSV Fayllarının və Cümlələrin Emalı</strong>
  <p>İnternet mağazasından ixrac edilən məhsul siyahısı çox vaxt <code>"Alma,Armud,Heyva"</code> kimi bir sətirdə gəlir. <code>split(",")</code> metodu bu sətiri konveyer xəttindəki ayrılmış yeşiklər (massiv elementləri) kimi çeşidləyir və hər bir məhsul üzərində fərdi əməliyyat aparmağa imkan verir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: URL Slug Generatoru və XSS Mətn Sanitarizasiyası</h4>
<p>Real veb layihələrində mətn manipulyasiyası iki kritik mühəndislik ssenarisində geniş istifadə olunur:</p>

<pre><code>// 1. SEO Dostu URL Slug Generatoru
function slugYarat(basliq) {
  return basliq
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, "") // Xüsusi durğu işarələrini təmizləyir
    .replace(/\\s+/g, "-");    // Ardıcıl boşluqları tək tire (-) ilə əvəzləyir
}

console.log(slugYarat("JavaScript ilə Tam Kurs 2026!")); 
// "javascript-il-tam-kurs-2026"

// 2. XSS (Cross-Site Scripting) Təhlükəsizliyi üçün HTML Escape
function htmlEscape(metn) {
  const tehlukeli = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return metn.replace(/[&<>"']/g, match => tehlukeli[match]);
}

console.log(htmlEscape("&lt;script&gt;alert('xss');&lt;/script&gt;"));
// "&amp;lt;script&amp;gt;alert(&#39;xss&#39;);&amp;lt;/script&amp;gt;"</code></pre>

<div class="warning-box">
  <strong>🛡️ Mühəndislik Qaydası:</strong>
  <p>İstifadəçidən daxil olan istənilən mətn birbaşa brauzerin DOM strukturuna (məsələn, <code>innerHTML</code> ilə) yazılmamalıdır. Mətn mütləq ya təhlükəsiz şəkildə sanitarizasiya edilməli, ya da birbaşa <code>textContent</code> xassəsi ilə təhlükəsiz mətn kimi yerləşdirilməlidir.</p>
</div>`,
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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section9 };
}
console.log('Section 9 built successfully');
