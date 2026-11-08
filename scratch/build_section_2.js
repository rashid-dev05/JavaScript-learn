const fs = require('fs');

const section2 = {
  "id": "section-2",
  "title": "Bölmə 2: Dəyişənlər (let, const, var) və Primitiv Tiplər",
  "icon": "📦",
  "topics": [
    {
      "id": "topic-2-1",
      "title": "Dəyişənlərin Elanı: let və const (ES6) vs Köhnə var",
      "theory": `<h3>📦 Dəyişənlər Nədir?</h3>
<p>Proqramlaşdırmada <strong>dəyişən (variable)</strong> kompüterin operativ yaddaşında (RAM) hər hansı bir məlumatı (ad, balans, xal və s.) saxlamaq və ona istənilən vaxt adla müraciət etmək üçün ayrılmış xüsusi saxlanc qutusudur.</p>

<div class="tip-box">
  <strong>💡 Həyati Analogiya:</strong> Dəyişənləri üzərinə etiket yapışdırılmış qutular kimi düşünün. Qutunun üzərindəki etiket — dəyişənin <strong>adı</strong>, qutunun içindəki əşya isə onun <strong>dəyəridir</strong>.
</div>

<h4>Müasir Dəyişən Elanları: <code>let</code> vs <code>const</code></h4>
<p>Müasir JavaScript-də (ES6 standartı ilə) dəyişənlər iki əsas açar sözlə yaradılır:</p>
<ul>
  <li><strong><code>let</code>:</strong> Dəyəri gələcəkdə dəyişə bilən dəyişənlər üçün istifadə olunur (məsələn: oyun xalı, sayğac, istifadəçinin dəyişən balansı).</li>
  <li><strong><code>const</code> (Sabit - Constant):</strong> Dəyəri proqram boyu heç vaxt dəyişməyən kəmiyyətlər üçün istifadə olunur (məsələn: paytaxt şəhər adı, riyazi Pi ədədi, API server ünvanı). <code>const</code>-a sonradan yeni dəyər mənimsətmək qətiyyən mümkün deyil!</li>
</ul>

<pre><code>let xal = 10;
xal = 20; // TAM DÜZGÜNDÜR (let dəyərini yeniləməyə icazə verir)

const olke = "Azərbaycan";
// olke = "Türkiyə"; // XƏTA: TypeError: Assignment to constant variable!</code></pre>

<div class="tip-box">
  <strong>💡 Qızıl Qayda:</strong> Həmişə ilk olaraq <code>const</code> yazın. Yalnız dəyərin mütləq dəyişəcəyini dəqiq bildiyiniz hallarda <code>let</code> seçin.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Köhnə 'var', Qaldırılma (Hoisting) və Temporal Dead Zone (TDZ)</h4>
<p>2015-ci ilə (ES6) qədər JavaScript-də bütün dəyişənlər köhnə <code>var</code> açar sözü ilə yaradılırdı. Müasir layihələrdə <code>var</code>-dan imtina edilməsinin səbəbləri:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Meyar</th>
        <th><code>var</code> (Köhnə və Təhlükəli)</th>
        <th><code>let</code> və <code>const</code> (Müasir Standart)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Görünmə Sahəsi (Scope)</strong></td>
        <td><strong>Funksiya Sahəsi (Function Scope):</strong> Fiqurlu mötərizələrdən (<code>if</code>, <code>for</code>) çölə sızır (leaking).</td>
        <td><strong>Blok Sahəsi (Block Scope):</strong> Yalnız elan olunduğu <code>{ ... }</code> blokunun daxilində görünür.</td>
      </tr>
      <tr>
        <td><strong>Yenidən Elan (Re-declaration)</strong></td>
        <td>Eyni adlı dəyişəni təkrar elan etməyə icazə verir (təsadüfən məlumatı əzir).</td>
        <td>Qadağandır (<code>SyntaxError: Identifier has already been declared</code>).</td>
      </tr>
      <tr>
        <td><strong>Hoisting & TDZ</strong></td>
        <td>Yuxarı qaldırılır və <code>undefined</code> ilə inisializasiya olunur.</td>
        <td>Yuxarı qaldırılır, lakin <strong>Temporal Dead Zone (TDZ)</strong> səbəbindən elan sətrindən əvvəl oxunduqda sərt <code>ReferenceError</code> verir.</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Temporal Dead Zone (TDZ - Müvəqqəti Ölü Zona):</strong> Blokun əvvəlindən <code>let</code> və ya <code>const</code> sətrinə qədər olan zonadır. TDZ daxilində dəyişənə toxunmaq qadağandır:</p>
<pre><code>// TDZ Başlayır
// console.log(mesaj); // ReferenceError: Cannot access 'mesaj' before initialization
// TDZ Bitir
let mesaj = "Müasir JavaScript";
console.log(mesaj); // "Müasir JavaScript"</code></pre>

<p><strong><code>const</code> və Obyekt/Massiv Mutasiyası:</strong> <code>const</code> dəyərin özünü deyil, yaddaşdakı ünvan istinadını (reference) qoruyur. Buna görə <code>const arr = [1, 2]; arr.push(3);</code> tam qanunidir, lakin <code>arr = [4, 5];</code> xətadır.</p>`,
      "codeExamples": [
        {
          "title": "let və const ilə Dəyişən İdarəetməsi",
          "code": "let istifadeciAdi = \"Murad\";\nconsole.log(istifadeciAdi);\n\nistifadeciAdi = \"Aysel\"; // Dəyər yeniləndi\nconsole.log(istifadeciAdi);\n\nconst dogumIli = 1998;\nconsole.log(dogumIli);",
          "output": "Murad\nAysel\n1998"
        },
        {
          "title": "Blok Görünmə Sahəsi (Block Scope)",
          "code": "let x = 10;\nif (true) {\n  let x = 20;\n  console.log(\"Blok daxili:\", x);\n}\nconsole.log(\"Blok xarici:\", x);",
          "output": "Blok daxili: 20\nBlok xarici: 10"
        }
      ],
      "exercises": [
        {
          "id": "ex-2-1-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Dinamik Balans Göstəricisinin Təyini",
          "instruction": "İstifadəçinin cari hesab qalığını saxlamaq üçün <code>balans</code> adlı dəyişən təyin edin, ona 150 ilkin dəyərini mənimsədin və bu dəyəri konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "150",
          "hint": "Dəyəri sonradan dəyişə bilən dəyişənlər üçün let təyinatından istifadə edin və dəyişənin adını çıxış funksiyasına ötürün.",
          "solutionCode": "let balans = 150;\nconsole.log(balans);"
        },
        {
          "id": "ex-2-1-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Dəyişməz Şəhər Sabitinin Təyini",
          "instruction": "Sistem konfiqurasiyasında dəyişməz paytaxt məlumatını saxlamaq üçün <code>seher</code> adlı sabit təyin edin, ona <code>\"Bakı\"</code> mətnini mənimsədin və nəticəni konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Bakı",
          "hint": "Proqram icrası boyunca dəyəri sabit qalan kəmiyyətlər üçün const açar sözündən istifadə olunur.",
          "solutionCode": "const seher = \"Bakı\";\nconsole.log(seher);"
        },
        {
          "id": "ex-2-1-3",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Tərəqqi Səviyyəsinin Yenilənməsi",
          "instruction": "İlkin olaraq 1 səviyyəsində olan istifadəçi göstəricisini növbəti mərhələyə keçirərək 2 olaraq yeniləyin və son səviyyəni konsola çıxarın.",
          "starterCode": "let seviyye = 1;\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "2",
          "hint": "Artıq elan edilmiş let dəyişəninin dəyərini yeniləmək üçün təkrar let yazılmır, birbaşa mənimsətmə operatorundan istifadə olunur.",
          "solutionCode": "let seviyye = 1;\nseviyye = 2;\nconsole.log(seviyye);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-2-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Sabitə Yenidən Dəyər Mənimsədilməsi",
          "instruction": "Proqramçı başlanğıc xalını təyin edib sonradan onu 50-yə yeniləyərək ekrana çıxarmaq istəyir, lakin icra zamanı 'TypeError: Assignment to constant variable' xətası baş verir və proqram dayanır. Kodu tədqiq edin, dəyişənin elanını və istifadəsini yoxlayaraq xətanı aradan qaldırın və konsola 50 çıxmasını təmin edin.",
          "description": "Proqramçı başlanğıc xalını təyin edib sonradan onu 50-yə yeniləyərək ekrana çıxarmaq istəyir, lakin icra zamanı 'TypeError: Assignment to constant variable' xətası baş verir və proqram dayanır. Kodu tədqiq edin, dəyişənin elanını və istifadəsini yoxlayaraq xətanı aradan qaldırın və konsola 50 çıxmasını təmin edin.",
          "buggyCode": "const xal = 0;\nxal = 50;\nconsole.log(xal);",
          "correctCode": "let xal = 0;\nxal = 50;\nconsole.log(xal);",
          "correctOutput": "50",
          "expectedOutput": "50",
          "explanation": "const sabiti yenidən mənimsədilə bilməz. Əgər dəyər dəyişəcəksə, dəyişən let ilə elan edilməlidir.",
          "hint": "const əvəzinə dəyəri yenilənə bilən let açar sözündən istifadə edin."
        }
      ],
      "bugFix": {
        "id": "bug-2-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Sabitə Yenidən Dəyər Mənimsədilməsi",
        "instruction": "Proqramçı başlanğıc xalını təyin edib sonradan onu 50-yə yeniləyərək ekrana çıxarmaq istəyir, lakin icra zamanı 'TypeError: Assignment to constant variable' xətası baş verir və proqram dayanır. Kodu tədqiq edin, dəyişənin elanını və istifadəsini yoxlayaraq xətanı aradan qaldırın və konsola 50 çıxmasını təmin edin.",
        "description": "Proqramçı başlanğıc xalını təyin edib sonradan onu 50-yə yeniləyərək ekrana çıxarmaq istəyir, lakin icra zamanı 'TypeError: Assignment to constant variable' xətası baş verir və proqram dayanır. Kodu tədqiq edin, dəyişənin elanını və istifadəsini yoxlayaraq xətanı aradan qaldırın və konsola 50 çıxmasını təmin edin.",
        "buggyCode": "const xal = 0;\nxal = 50;\nconsole.log(xal);",
        "correctCode": "let xal = 0;\nxal = 50;\nconsole.log(xal);",
        "correctOutput": "50",
        "expectedOutput": "50",
        "explanation": "const sabiti yenidən mənimsədilə bilməz. Əgər dəyər dəyişəcəksə, dəyişən let ilə elan edilməlidir.",
        "hint": "const əvəzinə dəyəri yenilənə bilən let açar sözündən istifadə edin."
      }
    },
    {
      "id": "topic-2-2",
      "title": "Primitiv Məlumat Tipləri: String, Number, Boolean, BigInt və Symbol",
      "theory": `<h3>🧬 Təməl Primitiv Məlumat Tipləri</h3>
<p>Kompüter yaddaşındakı hər bir məlumat müəyyən bir formata malikdir. Proqramlaşdırmada ən çox rast gəlinən 3 təməl tip bunlardır:</p>
<ol>
  <li><strong>String (Mətn):</strong> Dırnaq daxilində (<code>"..."</code> və ya <code>'...'</code>) yazılan bütün söz və simvollar ardıcıllığıdır (məs: <code>"Salam"</code>, <code>"Bakı"</code>, <code>"2026"</code>).</li>
  <li><strong>Number (Ədəd):</strong> Bütün tam və ya kəsr riyazi ədədlərdir (məs: <code>42</code>, <code>-15</code>, <code>99.9</code>). Ədədlər <strong>dırnaqsız</strong> yazılır!</li>
  <li><strong>Boolean (Məntiqi):</strong> Yalnız iki qiymətdən birini ala bilən ikili seçimdir: <strong><code>true</code></strong> (doğru / həqiqət) və ya <strong><code>false</code></strong> (yalan / səhv).</li>
</ol>

<div class="tip-box">
  <strong>💡 Həyati Analogiya:</strong> Mətn — kitabın səhifəsindəki yazıdır. Ədəd — mağazada məhsulun qiymətidir. Boolean isə otağın elektrik açarıdır: ya <strong>yanır (true)</strong>, ya da <strong>sönür (false)</strong>!
</div>

<pre><code>const ad = "Aytən";       // String (Mətn)
const yas = 20;            // Number (Ədəd)
const telebedir = true;    // Boolean (Məntiqi)</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Xüsusi Primitivlər (BigInt və Symbol)</h4>
<p>JavaScript-də cəmi <strong>7 primitiv tip</strong> mövcuddur: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <strong><code>bigint</code></strong> və <strong><code>symbol</code></strong>.</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Primitiv Tip</th>
        <th>Təsvir</th>
        <th>Nümunə Sintaksis</th>
        <th><code>typeof</code> Nəticəsi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><code>BigInt</code></strong> (ES2020)</td>
        <td>Standart <code>Number</code> limitini (\(2^{53} - 1 = 9007199254740991\)) aşan ixtiyari böyüklükdə olan təhlükəsiz tam ədədlər.</td>
        <td><code>9007199254740995n</code> və ya <code>BigInt("9007199254740995")</code></td>
        <td><code>"bigint"</code></td>
      </tr>
      <tr>
        <td><strong><code>Symbol</code></strong> (ES6)</td>
        <td>Tamamilə unikal (təkrarolunmaz) və gizli identifikatorlar.</td>
        <td><code>Symbol("id")</code></td>
        <td><code>"symbol"</code></td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>BigInt Qaydası (Tiplərin Qatışdırılması Qadağandır):</strong> <code>BigInt</code> ilə adi <code>Number</code> arasında birbaşa riyazi əməliyyat aparmaq olmaz (məs: <code>100n + 10</code> mühərrikdə <code>TypeError</code> törədir). Əməliyyat üçün açıq çevrilmə tələb olunur: <code>100n + BigInt(10)</code>.</p>
<p><strong>Symbol Unikallığı:</strong> Hər bir <code>Symbol()</code> çağırışı yaddaşda təkrarolunmaz unikal token yaradır. Təsvir mətni eyni olsa belə <code>Symbol("id") === Symbol("id")</code> nəticəsi həmişə <strong><code>false</code></strong>-dur. Bu, obyektlərdə ad toqquşması olmadan təhlükəsiz açarlar yaratmaq üçün əvəzsizdir.</p>`,
      "codeExamples": [
        {
          "title": "Primitiv Tiplərin Elanı və İstifadəsi",
          "code": "const ad = \"Aytən\";          // String\nconst qiymet = 85.5;        // Number\nconst teqaudAlir = true;     // Boolean\nconst tranzaksiyaId = 9007199254740995n; // BigInt\nconst token = Symbol(\"auth\"); // Symbol\n\nconsole.log(typeof ad);\nconsole.log(typeof qiymet);\nconsole.log(typeof tranzaksiyaId);",
          "output": "string\nnumber\nbigint"
        },
        {
          "title": "BigInt və Symbol Davranışı",
          "code": "const s1 = Symbol(\"acar\");\nconst s2 = Symbol(\"acar\");\nconsole.log(\"Symbol eyniliyi:\", s1 === s2);\n\nconst a = 10n;\nconst b = 20n;\nconsole.log(\"BigInt cəmi:\", a + b);",
          "output": "Symbol eyniliyi: false\nBigInt cəmi: 30n"
        }
      ],
      "exercises": [
        {
          "id": "ex-2-2-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "İstifadəçi Profil Məlumatlarının Birləşdirilməsi",
          "instruction": "İstifadəçinin adını (<code>\"Rəşad\"</code>), yaşını (<code>28</code>) və aktivlik statusunu (<code>true</code>) ayrı-ayrı dəyişənlərdə saxlayın və aralarında boşluq qoyaraq tək bir konsol sətrində əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Rəşad 28 true",
          "hint": "Dəyişənləri vergüllə console.log(ad, yas, aktiv) şəklində ötürə və ya şablon sətirindən istifadə edə bilərsiniz.",
          "solutionCode": "let ad = \"Rəşad\";\nlet yas = 28;\nlet aktiv = true;\nconsole.log(ad, yas, aktiv);"
        },
        {
          "id": "ex-2-2-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Kəsr Ədədli Məhsul Qiymətinin Təyini",
          "instruction": "Elektron mağaza vitrini üçün <code>qiymet</code> adlı dəyişən təyin edin, ona <code>99.9</code> kəsr ədədini mənimsədin və qiyməti konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "99.9",
          "hint": "JavaScript-də onluq kəsrlər nöqtə (.) simvolu ilə yazılır və Number tipinə aiddir.",
          "solutionCode": "let qiymet = 99.9;\nconsole.log(qiymet);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-2-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mətn Dəyərində Dırnaq Xətası",
          "instruction": "Dəyişənə salamlaşma mətni mənimsədilərkən dırnaq işarələri unudulub və mühərrik Salam ifadəsini dəyişən adı kimi axtardığı üçün 'ReferenceError: Salam is not defined' xətası baş verir. Kodu tədqiq edin, dırnaq qaydasına riayət edərək xətanı düzəldin və konsola Salam çıxmasını təmin edin.",
          "description": "Dəyişənə salamlaşma mətni mənimsədilərkən dırnaq işarələri unudulub və mühərrik Salam ifadəsini dəyişən adı kimi axtardığı üçün 'ReferenceError: Salam is not defined' xətası baş verir. Kodu tədqiq edin, dırnaq qaydasına riayət edərək xətanı düzəldin və konsola Salam çıxmasını təmin edin.",
          "buggyCode": "let mesaj = Salam;\nconsole.log(mesaj);",
          "correctCode": "let mesaj = \"Salam\";\nconsole.log(mesaj);",
          "correctOutput": "Salam",
          "expectedOutput": "Salam",
          "explanation": "Simvol tipli məlumatlar (String) mütləq cüt və ya tək dırnaq içərisində yazılmalıdır, əks halda mühərrik onu dəyişən adı kimi qəbul edir.",
          "hint": "Mətn dəyərini cüt dırnaq arasına alın: \"Salam\"."
        }
      ],
      "bugFix": {
        "id": "bug-2-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Mətn Dəyərində Dırnaq Xətası",
        "instruction": "Dəyişənə salamlaşma mətni mənimsədilərkən dırnaq işarələri unudulub və mühərrik Salam ifadəsini dəyişən adı kimi axtardığı üçün 'ReferenceError: Salam is not defined' xətası baş verir. Kodu tədqiq edin, dırnaq qaydasına riayət edərək xətanı düzəldin və konsola Salam çıxmasını təmin edin.",
        "description": "Dəyişənə salamlaşma mətni mənimsədilərkən dırnaq işarələri unudulub və mühərrik Salam ifadəsini dəyişən adı kimi axtardığı üçün 'ReferenceError: Salam is not defined' xətası baş verir. Kodu tədqiq edin, dırnaq qaydasına riayət edərək xətanı düzəldin və konsola Salam çıxmasını təmin edin.",
        "buggyCode": "let mesaj = Salam;\nconsole.log(mesaj);",
        "correctCode": "let mesaj = \"Salam\";\nconsole.log(mesaj);",
        "correctOutput": "Salam",
        "expectedOutput": "Salam",
        "explanation": "Simvol tipli məlumatlar (String) mütləq cüt və ya tək dırnaq içərisində yazılmalıdır, əks halda mühərrik onu dəyişən adı kimi qəbul edir.",
        "hint": "Mətn dəyərini cüt dırnaq arasına alın: \"Salam\"."
      }
    },
    {
      "id": "topic-2-3",
      "title": "undefined və null Arasındakı Fərq (Tarixi Baq və Təhlükəsiz Yoxlanış)",
      "theory": `<h3>❓ Boşluğun İki Üzü: <code>undefined</code> vs <code>null</code></h3>
<p>JavaScript digər dillərdən fərqli olaraq \"boşluq\" və ya \"dəyərsizlik\" anlayışını iki fərqli primitivlə ifadə edir:</p>
<ul>
  <li><strong><code>undefined</code> (Təyin edilməmiş):</strong> Dəyişən yaradılıb, lakin ona hələ heç bir dəyər verilməyib. Bu, mühərrikin standart başlanğıc vəziyyətidir.</li>
  <li><strong><code>null</code> (Qəsdən boş qoyulmuş):</strong> Proqramçı tərəfindən şüurlu şəkildə \"burada hazırda heç bir dəyər və ya obyekt yoxdur\" mənasında mənimsədilir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Tualet Kağızı Asılqanı Analogiyası:</strong><br>
  • Divarda kağız asılqanı hələ ümumiyyətlə quraşdırılmayıbsa — bu <strong><code>undefined</code></strong>-dir.<br>
  • Asılqan var, lakin üzərindəki kağız rulonu tamamilə qurtarıb və boş boru qalıb — bu <strong><code>null</code></strong>-dur!
</div>

<pre><code>let elanEdilmis;
console.log(elanEdilmis); // undefined (dəyər mənimsədilməyib)

let istifadeci = null;
console.log(istifadeci);   // null (qəsdən boş qoyulub)</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Tarixi Baq (typeof null === "object") və Təhlükəsiz Yoxlanış</h4>
<p>JavaScript 1995-ci ildə ilk dəfə yaradılarkən dəyərlər kompüter yaddaşında 32-bitlik vahidlərdə saxlanılırdı. Hər dəyərin tipini müəyyən etmək üçün ilk 1-3 bit <em>\"type tag\"</em> kimi ayrılmışdı:</p>
<ul>
  <li>Obyektlər üçün tip nişanı <code>000</code> idi.</li>
  <li>C dilində <code>NULL</code> göstəricisi (null pointer) bütün bitləri sıfır olan yaddaş ünvanı idi (<code>0x00...</code>).</li>
  <li>Mühərrik <code>null</code>-un bitlərinə baxdıqda ilk 3 biti <code>000</code> gördü və onu səhvən <code>"object"</code> kimi təsnif etdi!</li>
</ul>

<div class="warning-box">
  <strong>⚠️ Tarixi Qüsur:</strong> <code>typeof null === "object"</code> dilin tanınmış tarixi baqıdır və internetdəki milyonlarla saytı sındırmamaq (backwards compatibility) üçün düzəldilməmişdir.
</div>

<p><strong>Müqayisə və Təhlükəsiz Yoxlama:</strong></p>
<pre><code>console.log(null == undefined);  // true  (Boş bərabərlik: hər ikisi boşluq sayılır)
console.log(null === undefined); // false (Ciddi bərabərlik: tipləri fərqlidir!)

// Dəyərin xüsusi olaraq null olduğunu təhlükəsiz yoxlamaq üçün:
if (deyisen === null) {
  // Tam zəmanətli yoxlama
}</code></pre>`,
      "codeExamples": [
        {
          "title": "undefined və null Fərqi",
          "code": "let elanEdilmis;\nconsole.log(\"Dəyər verilməyib:\", elanEdilmis);\n\nlet istifadeci = null;\nconsole.log(\"Qəsdən boş qoyulub:\", istifadeci);\n\nconsole.log(typeof elanEdilmis);\nconsole.log(typeof istifadeci);",
          "output": "Dəyər verilməyib: undefined\nQəsdən boş qoyulub: null\nundefined\nobject"
        },
        {
          "title": "Riyazi Çevrilmə Fərqləri",
          "code": "console.log(Number(undefined)); // NaN\nconsole.log(Number(null));      // 0\nconsole.log(5 + undefined);     // NaN\nconsole.log(5 + null);          // 5",
          "output": "NaN\n0\nNaN\n5"
        }
      ],
      "exercises": [
        {
          "id": "ex-2-3-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Təyin Edilməmiş Dəyişən İlkin Vəziyyəti",
          "instruction": "Yalnız elan edilmiş, lakin heç bir dəyər mənimsədilməmiş <code>melumat</code> adlı dəyişən yaradın və onun ilkin dəyərini konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "undefined",
          "hint": "Dəyişəni let ilə yaradın, lakin bərabərlik işarəsi qoyub dəyər mənimsətməyin.",
          "solutionCode": "let melumat;\nconsole.log(melumat);"
        },
        {
          "id": "ex-2-3-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Şüurlu Şəkildə Boş Dəyərin Mənimsədilməsi",
          "instruction": "Hazırda heç bir profilin aktiv olmadığını göstərmək üçün <code>istifadeci</code> dəyişəninə proqramçı tərəfindən şüurlu boşluq bildirən dəyəri mənimsədin və konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "null",
          "hint": "Məlumatın qəsdən boş olduğunu göstərmək üçün null açar sözündən istifadə olunur.",
          "solutionCode": "let istifadeci = null;\nconsole.log(istifadeci);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-2-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mətn Kimi Yazılmış Null Xətası",
          "instruction": "Proqramçı profil məlumatını ilkin olaraq qəsdən boş təyin etmək istəyir, lakin 'null' sözünü dırnaq daxilində yazaraq onu simvol sətirinə çevirib. Kodu elə düzəldin ki, dəyişən mətn deyil, birbaşa primitiv null dəyərini alsın və konsola null çıxsın.",
          "description": "Proqramçı profil məlumatını ilkin olaraq qəsdən boş təyin etmək istəyir, lakin 'null' sözünü dırnaq daxilində yazaraq onu simvol sətirinə çevirib. Kodu elə düzəldin ki, dəyişən mətn deyil, birbaşa primitiv null dəyərini alsın və konsola null çıxsın.",
          "buggyCode": "let profil = \"null\";\nconsole.log(profil);",
          "correctCode": "let profil = null;\nconsole.log(profil);",
          "correctOutput": "null",
          "expectedOutput": "null",
          "explanation": "null xüsusi primitiv açar sözdür və dırnaqsız yazılmalıdır. Dırnaq daxilində yazıldıqda o sadəcə 4 hərfdən ibarət adi String olur.",
          "hint": "null sözünün ətrafındakı dırnaq işarələrini silin."
        }
      ],
      "bugFix": {
        "id": "bug-2-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Mətn Kimi Yazılmış Null Xətası",
        "instruction": "Proqramçı profil məlumatını ilkin olaraq qəsdən boş təyin etmək istəyir, lakin 'null' sözünü dırnaq daxilində yazaraq onu simvol sətirinə çevirib. Kodu elə düzəldin ki, dəyişən mətn deyil, birbaşa primitiv null dəyərini alsın və konsola null çıxsın.",
        "description": "Proqramçı profil məlumatını ilkin olaraq qəsdən boş təyin etmək istəyir, lakin 'null' sözünü dırnaq daxilində yazaraq onu simvol sətirinə çevirib. Kodu elə düzəldin ki, dəyişən mətn deyil, birbaşa primitiv null dəyərini alsın və konsola null çıxsın.",
        "buggyCode": "let profil = \"null\";\nconsole.log(profil);",
        "correctCode": "let profil = null;\nconsole.log(profil);",
        "correctOutput": "null",
        "expectedOutput": "null",
        "explanation": "null xüsusi primitiv açar sözdür və dırnaqsız yazılmalıdır. Dırnaq daxilində yazıldıqda o sadəcə 4 hərfdən ibarət adi String olur.",
        "hint": "null sözünün ətrafındakı dırnaq işarələrini silin."
      }
    },
    {
      "id": "topic-2-4",
      "title": "typeof Operatoru, Tip Çevrilmələri (Coercion) və Swap",
      "theory": `<h3>🔍 Dəyişənin Tipinin Təyini: <code>typeof</code></h3>
<p>Dəyişənin hansı məlumat tipinə aid olduğunu öyrənmək üçün unar <strong><code>typeof</code></strong> operatorundan istifadə olunur:</p>
<pre><code>typeof "Salam" // "string"
typeof 42      // "number"
typeof true    // "boolean"</code></pre>

<h4>Tip Çevrilmələri (Type Conversion):</h4>
<p>Məlumatı bir növdən digərinə çevirmək üçün qlobal funksiyalardan istifadə edirik:</p>
<ul>
  <li><code>Number("50")</code> \(\rightarrow\) <code>50</code> (Mətni ədədə çevirir)</li>
  <li><code>String(100)</code> \(\rightarrow\) <code>"100"</code> (Ədədi mətnə çevirir)</li>
  <li>Unar plyus <code>+"50"</code> \(\rightarrow\) <code>50</code> (Ən qısa ədədə çevirmə üsulu)</li>
</ul>

<div class="warning-box">
  <strong>⚠️ Toplama (+) Operatorunun Tələsi:</strong><br>
  Əgər <code>+</code> operatorunun tərəflərindən biri <strong>String</strong>-dirsə, JavaScript riyazi toplama deyil, sətir birləşdirməsi (konkatenasiya) aparır:<br>
  <code>"5" + 5 \(\rightarrow\) "55"</code><br><br>
  Lakin çıxma, vurma və bölmə mətni məcburi ədədə çevirir:<br>
  <code>"10" - 2 \(\rightarrow\) 8</code> &nbsp;|&nbsp; <code>"6" * "2" \(\rightarrow\) 12</code>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: 8 Falsy Dəyər, Məntiqi Çevrilmə və Dəyər Dəyiş-Düyüşü (Swap)</h4>
<p>JavaScript-də istənilən dəyər məntiqi (Boolean) kontekstə salındıqda iki kateqoriyadan birinə aid olur: <strong>Truthy</strong> (Doğru) və ya <strong>Falsy</strong> (Yalan).</p>

<p>JavaScript-də cəmi <strong>8 dənə Falsy dəyər</strong> mövcuddur:</p>
<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Falsy Dəyər</th>
        <th>Təsvir</th>
        <th><code>Boolean(x)</code> Nəticəsi</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>false</code></td><td>Məntiqi yalan</td><td><code>false</code></td></tr>
      <tr><td><code>0</code> və <code>-0</code></td><td>Sıfır və mənfi sıfır</td><td><code>false</code></td></tr>
      <tr><td><code>0n</code></td><td>BigInt sıfır</td><td><code>false</code></td></tr>
      <tr><td><code>""</code></td><td>Boş sətir (simvolsuz mətn)</td><td><code>false</code></td></tr>
      <tr><td><code>null</code></td><td>Qəsdən boşluq</td><td><code>false</code></td></tr>
      <tr><td><code>undefined</code></td><td>Təyin edilməmiş vəziyyət</td><td><code>false</code></td></tr>
      <tr><td><code>NaN</code></td><td>Qeyri-ədəd (Not-a-Number)</td><td><code>false</code></td></tr>
    </tbody>
  </table>
</div>

<div class="tip-box">
  <strong>💡 Qalan HƏR ŞEY Truthy-dir:</strong> Hətta <code>"0"</code> (boş olmayan mətn), <code>[]</code> (boş massiv) və <code>{}</code> (boş obyekt) belə <strong>true</strong> hesab olunur!
</div>

<p><strong>Dəyişənlərin Qiymətinin Dəyiş-Düyüşü (Swap):</strong></p>
<pre><code>// Müasir ES6 Destructuring Swap (Köməkçi dəyişənsiz):
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b); // 20, 10</code></pre>`,
      "codeExamples": [
        {
          "title": "Gizli və Açıq Tip Çevrilmələri",
          "code": "console.log(\"5\" + 2);   // \"52\" (String birləşməsi)\nconsole.log(\"10\" - 4);  // 6 (Riyazi çıxma)\nconsole.log(+\"100\");    // 100 (Unar plyus ilə ədəd)\nconsole.log(Boolean(\"\"));     // false (Boş sətir falsy-dir)\nconsole.log(Boolean(\"Bakı\")); // true (Dolu sətir truthy-dir)",
          "output": "52\n6\n100\nfalse\ntrue"
        },
        {
          "title": "ES6 Massiv Parçalanması ilə Dəyər Dəyiş-Düyüşü (Swap)",
          "code": "let ad1 = \"Əli\";\nlet ad2 = \"Vəli\";\n\n[ad1, ad2] = [ad2, ad1];\nconsole.log(ad1);\nconsole.log(ad2);",
          "output": "Vəli\nƏli"
        }
      ],
      "exercises": [
        {
          "id": "ex-2-4-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "İmtahan Balının Tipinin Təyini",
          "instruction": "İmtahan nəticəsini göstərən <code>xal = 85</code> dəyişəninin hansı məlumat tipinə aid olduğunu <code>typeof</code> vasitəsilə təyin edin və tipin adını konsola çıxarın.",
          "starterCode": "let xal = 85;\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "number",
          "hint": "typeof operatorunun ardınca dəyişənin adını qeyd edərək çıxış funksiyasına ötürün.",
          "solutionCode": "let xal = 85;\nconsole.log(typeof xal);"
        },
        {
          "id": "ex-2-4-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Mətn Şəklində Daxil Olmuş Ədədin Çevrilməsi",
          "instruction": "İstifadəçidən daxil olan <code>\"50\"</code> mətn tipli qiymətini açıq şəkildə ədəd (Number) tipinə çevirin və nəticəni konsolda əks etdirin.",
          "starterCode": "let daxilOlan = \"50\";\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "50",
          "hint": "Açıq tip çevrilməsi üçün Number(daxilOlan) konstruktorundan istifadə edin.",
          "solutionCode": "let daxilOlan = \"50\";\nlet eded = Number(daxilOlan);\nconsole.log(eded);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-2-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Toplama Operatorunda Gizli Mətn Birləşməsi Xətası",
          "instruction": "Proqramçı iki ədədi toplamaq istəyir, lakin birinci ədəd dırnaq daxilində sətir kimi təyin edildiyi üçün '+' operatoru riyazi toplama əvəzinə sətir birləşdirməsi (konkatenasiya) edərək konsola '55' çıxarır. Kodu elə düzəldin ki, birinci dəyişən ədəd olsun və konsola 10 çıxsın.",
          "description": "Proqramçı iki ədədi toplamaq istəyir, lakin birinci ədəd dırnaq daxilində sətir kimi təyin edildiyi üçün '+' operatoru riyazi toplama əvəzinə sətir birləşdirməsi (konkatenasiya) edərək konsola '55' çıxarır. Kodu elə düzəldin ki, birinci dəyişən ədəd olsun və konsola 10 çıxsın.",
          "buggyCode": "let a = \"5\";\nlet b = 5;\nconsole.log(a + b);",
          "correctCode": "let a = 5;\nlet b = 5;\nconsole.log(a + b);",
          "correctOutput": "10",
          "expectedOutput": "10",
          "explanation": "Əgər tərəflərdən biri String olarsa, '+' operatoru konkatenasiya aparır. Riyazi toplama üçün hər iki operand mütləq Number tipində olmalıdır.",
          "hint": "Birinci dəyişəndəki dırnaqları silərək onu adi ədədə çevirin və ya Number(a) istifadə edin."
        }
      ],
      "bugFix": {
        "id": "bug-2-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Toplama Operatorunda Gizli Mətn Birləşməsi Xətası",
        "instruction": "Proqramçı iki ədədi toplamaq istəyir, lakin birinci ədəd dırnaq daxilində sətir kimi təyin edildiyi üçün '+' operatoru riyazi toplama əvəzinə sətir birləşdirməsi (konkatenasiya) edərək konsola '55' çıxarır. Kodu elə düzəldin ki, birinci dəyişən ədəd olsun və konsola 10 çıxsın.",
        "description": "Proqramçı iki ədədi toplamaq istəyir, lakin birinci ədəd dırnaq daxilində sətir kimi təyin edildiyi üçün '+' operatoru riyazi toplama əvəzinə sətir birləşdirməsi (konkatenasiya) edərək konsola '55' çıxarır. Kodu elə düzəldin ki, birinci dəyişən ədəd olsun və konsola 10 çıxsın.",
        "buggyCode": "let a = \"5\";\nlet b = 5;\nconsole.log(a + b);",
        "correctCode": "let a = 5;\nlet b = 5;\nconsole.log(a + b);",
        "correctOutput": "10",
        "expectedOutput": "10",
        "explanation": "Əgər tərəflərdən biri String olarsa, '+' operatoru konkatenasiya aparır. Riyazi toplama üçün hər iki operand mütləq Number tipində olmalıdır.",
        "hint": "Birinci dəyişəndəki dırnaqları silərək onu adi ədədə çevirin və ya Number(a) istifadə edin."
      }
    },
    {
      "id": "topic-2-5",
      "title": "Xüsusi Ədədi Qiymətlər (NaN, Infinity), Tip Çevrilmələri və IEEE 754",
      "theory": `<h3>🔢 Qeyri-Adi Ədədi Vəziyyətlər: NaN və Infinity</h3>
<p>JavaScript-də riyazi əməliyyatlar heç vaxt proqramı çökdürmür (crash etmir). Əgər riyaziyyat qanunlarına zidd bir əməliyyat aparılarsa, mühərrik xüsusi ədədi simvollar qaytarır:</p>
<ul>
  <li><strong><code>NaN</code> (Not-a-Number - Ədəd Deyil):</strong> Mənasız və ya icazə verilməyən riyazi əməliyyatın nəticəsidir (məsələn, mətni ədədə vurmaq: <code>"salam" * 5 \(\rightarrow\) NaN</code>).</li>
  <li><strong><code>Infinity</code> və <code>-Infinity</code> (Sonsuzluq):</strong> Sıfıra bölmə və ya həddindən artıq böyük ədəd əməliyyatlarında yaranır (məs: <code>10 / 0 \(\rightarrow\) Infinity</code>, <code>-10 / 0 \(\rightarrow\) -Infinity</code>).</li>
</ul>

<div class="tip-box">
  <strong>💡 Paradoks:</strong> Təəccüblü olsa da, <code>typeof NaN === "number"</code> nəticəsini verir! Çünki texniki olaraq NaN ədəd sisteminin \"səhv nəticələnmiş ədəd\" statusudur.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: NaN Unikallığı, Number.isNaN() vs isNaN(), Object.is() və IEEE 754 Dəqiqlik Qüsuru</h4>
<p><strong>1. NaN-ın Öz-özünə Bərabər Olmaması:</strong><br>
IEEE 754 spesifikasiyasına görə NaN yer üzündə öz-özünə bərabər olmayan YEGANƏ dəyərdir:</p>
<pre><code>console.log(NaN === NaN); // false!
console.log(NaN == NaN);  // false!</code></pre>

<p><strong>2. <code>Number.isNaN()</code> vs Qlobal <code>isNaN()</code>:</strong></p>
<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Metod</th>
        <th>İşləmə Mexanizmi</th>
        <th><code>isNaN("test")</code></th>
        <th><code>isNaN(NaN)</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Qlobal <code>isNaN(x)</code></strong></td>
        <td>Dəyəri əvvəlcə məcburi <code>Number()</code> ilə ədədə çevirir (Coercion tələsi).</td>
        <td><strong><code>true</code></strong> <em>(Xəta: "test" əslində NaN deyil, mətndir!)</em></td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <td><strong><code>Number.isNaN(x)</code> (ES6)</strong></td>
        <td>Heç bir çevrilmə aparmır; yalnız tipi <code>number</code> olan və həqiqi NaN-ı yoxlayır.</td>
        <td><strong><code>false</code></strong> <em>(Düzgün)</em></td>
        <td><code>true</code></td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>3. Tam Eynilik: <code>Object.is()</code>:</strong><br>
NaN-ı başqa bir NaN ilə dəqiq bərabər tutmağın yeganə yolu <code>Object.is(NaN, NaN) === true</code> metodudur.</p>

<p><strong>4. IEEE 754 İkilik Üzən Nöqtəli Kəsr Qüsuru (0.1 + 0.2):</strong><br>
Kompüterlər kəsr ədədləri ikilik (binary) sistemdə dəqiq ifadə edə bilmir. Nəticədə <code>0.1 + 0.2 === 0.30000000000000004</code> olur! Kəsrləri təhlükəsiz müqayisə etmək üçün <code>Number.EPSILON</code> fərqi və ya <code>.toFixed(2)</code> tətbiq olunur:</p>
<pre><code>const beraberdir = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
console.log(beraberdir); // true!</code></pre>`,
      "codeExamples": [
        {
          "title": "NaN Təhlükəsiz Yoxlanışı və Object.is",
          "code": "const netice = \"alma\" * 3;\nconsole.log(netice); // NaN\nconsole.log(Number.isNaN(netice)); // true\nconsole.log(Object.is(NaN, NaN));   // true",
          "output": "NaN\ntrue\ntrue"
        },
        {
          "title": "Kəsr Ədədlər və toFixed() Dəqiqliyi",
          "code": "const cem = 0.1 + 0.2;\nconsole.log(\"Dəqiq kəsr:\", cem.toFixed(2)); // \"0.30\"\nconsole.log(\"Infinity yoxlanışı:\", Number.isFinite(10 / 0)); // false",
          "output": "Dəqiq kəsr: 0.30\nInfinity yoxlanışı: false"
        }
      ],
      "exercises": [
        {
          "id": "ex-2-5-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "NaN Unikallığı və Təhlükəsiz Müqayisə",
          "instruction": "Üç ardıcıl sətirdə çıxış verin:<br>1. <code>NaN === NaN</code> müqayisəsinin nəticəsini;<br>2. <code>Number.isNaN(NaN)</code> yoxlamasını;<br>3. <code>Object.is(NaN, NaN)</code> yoxlamasını konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "false\ntrue\ntrue",
          "hint": "Hər üç ifadəni ayrıca console.log() daxilində yazın.",
          "solutionCode": "console.log(NaN === NaN);\nconsole.log(Number.isNaN(NaN));\nconsole.log(Object.is(NaN, NaN));"
        },
        {
          "id": "ex-2-5-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "parseFloat və isFinite ilə Ədədi Filtrləmə",
          "instruction": "İki sətirdə çıxış verin:<br>1. <code>\"120.50 manat\"</code> mətnindən <code>parseFloat</code> ilə kəsr ədədi çıxarıb çap edin;<br>2. Həmin ədədin sonlu olduğunu <code>Number.isFinite()</code> ilə yoxlayıb konsola çıxarın.",
          "starterCode": "const giris = \"120.50 manat\";\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "120.5\ntrue",
          "hint": "parseFloat(giris) istifadə edin, sonra nəticəni Number.isFinite()-ə ötürün.",
          "solutionCode": "const giris = \"120.50 manat\";\nconst eded = parseFloat(giris);\nconsole.log(eded);\nconsole.log(Number.isFinite(eded));"
        },
        {
          "id": "ex-2-5-3",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "IEEE 754 Kəsr Dəqiqliyi və toFixed",
          "instruction": "İki sətirdə çıxış verin:<br>1. <code>(0.1 + 0.2)</code> ilə <code>0.3</code> arasındakı fərqin mütləq qiymətinin (<code>Math.abs</code>) <code>Number.EPSILON</code>-dan kiçik olduğunu yoxlayıb nəticəni (true) çap edin;<br>2. <code>(0.1 + 0.2).toFixed(2)</code> nəticəsini konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "true\n0.30",
          "hint": "Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON ifadəsini və .toFixed(2) metodunu tətbiq edin.",
          "solutionCode": "console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);\nconsole.log((0.1 + 0.2).toFixed(2));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-2-5-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Qlobal isNaN() Məcburi Tip Çevrilməsi Xətası",
          "instruction": "Proqramçı funksiyaya daxil olan dəyərin sırf NaN olub-olmadığını yoxlamaq istəyir. Lakin istifadəçi \"JavaScript\" mətni daxil etdikdə, qlobal isNaN() mətni məcburi ədədə çevirərək true qaytarır və yoxlama səhv işləyir. Kodu elə sazlayın ki, sırf dəyərin tipi də nəzərə alınsın, \"JavaScript\" üçün false, həqiqi NaN olduqda isə true qayıtsın.",
          "description": "Proqramçı funksiyaya daxil olan dəyərin sırf NaN olub-olmadığını yoxlamaq istəyir. Lakin istifadəçi \"JavaScript\" mətni daxil etdikdə, qlobal isNaN() mətni məcburi ədədə çevirərək true qaytarır və yoxlama səhv işləyir. Kodu elə sazlayın ki, sırf dəyərin tipi də nəzərə alınsın, \"JavaScript\" üçün false, həqiqi NaN olduqda isə true qayıtsın.",
          "buggyCode": "const parametr = \"JavaScript\";\nconst netice = isNaN(parametr);\nconsole.log(netice);",
          "correctCode": "const parametr = \"JavaScript\";\nconst netice = Number.isNaN(parametr);\nconsole.log(netice);",
          "correctOutput": "false",
          "expectedOutput": "false",
          "explanation": "Qlobal isNaN() ötürülən arqumenti əvvəlcə Number() ilə ədədə çevirir (isNaN(\"JavaScript\") -> isNaN(NaN) -> true). Lakin ES6 Number.isNaN() metodu heç bir tip çevrilməsi aparmır və dəyər ədəd tipi deyilsə, dərhal false qaytarır.",
          "hint": "Qlobal isNaN() əvəzinə ES6 standartı olan Number.isNaN() metodundan istifadə edin."
        },
        {
          "id": "bug-2-5-2",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "CSS Ölçü Vahidində Number() Tələsi və Infinity",
          "instruction": "Proqramçı düymənin enini (\"160px\") oxuyub onu 4 bərabər sütuna bölmək istəyir. Lakin Number(\"160px\") istifadə edildiyi üçün nəticə NaN olur və hesablama pozulur. Kodu elə düzəldin ki, parseInt ilə rəqəm düzgün oxunsun və hər sütunun ölçüsü (40) konsola çıxsın.",
          "description": "Proqramçı düymənin enini (\"160px\") oxuyub onu 4 bərabər sütuna bölmək istəyir. Lakin Number(\"160px\") istifadə edildiyi üçün nəticə NaN olur və hesablama pozulur. Kodu elə düzəldin ki, parseInt ilə rəqəm düzgün oxunsun və hər sütunun ölçüsü (40) konsola çıxsın.",
          "buggyCode": "const eni = \"160px\";\nconst sutunSayi = 4;\nconst umumiEn = Number(eni);\nconst sutunEni = umumiEn / sutunSayi;\nconsole.log(sutunEni);",
          "correctCode": "const eni = \"160px\";\nconst sutunSayi = 4;\nconst umumiEn = parseInt(eni, 10);\nconst sutunEni = umumiEn / sutunSayi;\nconsole.log(sutunEni);",
          "correctOutput": "40",
          "expectedOutput": "40",
          "explanation": "Number() funksiyası sətir daxilində qeyri-rəqəm simvollar (məs: 'px') gördükdə bütöv sətiri NaN-a çevirir. Halbuki parseInt(eni, 10) sətirdəki rəqəm hissəsini oxuyub 'px' hissəsini kənara qoyur və 160 qaytarır.",
          "hint": "Number() əvəzinə sətirdən ədədi çıxarmaq üçün parseInt(str, 10) funksiyasından istifadə edin."
        }
      ],
      "bugFix": {
        "id": "bug-2-5-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Qlobal isNaN() Məcburi Tip Çevrilməsi Xətası",
        "instruction": "Proqramçı funksiyaya daxil olan dəyərin sırf NaN olub-olmadığını yoxlamaq istəyir. Lakin istifadəçi \"JavaScript\" mətni daxil etdikdə, qlobal isNaN() mətni məcburi ədədə çevirərək true qaytarır və yoxlama səhv işləyir. Kodu elə sazlayın ki, sırf dəyərin tipi də nəzərə alınsın, \"JavaScript\" üçün false, həqiqi NaN olduqda isə true qayıtsın.",
        "description": "Proqramçı funksiyaya daxil olan dəyərin sırf NaN olub-olmadığını yoxlamaq istəyir. Lakin istifadəçi \"JavaScript\" mətni daxil etdikdə, qlobal isNaN() mətni məcburi ədədə çevirərək true qaytarır və yoxlama səhv işləyir. Kodu elə sazlayın ki, sırf dəyərin tipi də nəzərə alınsın, \"JavaScript\" üçün false, həqiqi NaN olduqda isə true qayıtsın.",
        "buggyCode": "const parametr = \"JavaScript\";\nconst netice = isNaN(parametr);\nconsole.log(netice);",
        "correctCode": "const parametr = \"JavaScript\";\nconst netice = Number.isNaN(parametr);\nconsole.log(netice);",
        "correctOutput": "false",
        "expectedOutput": "false",
        "explanation": "Qlobal isNaN() ötürülən arqumenti əvvəlcə Number() ilə ədədə çevirir (isNaN(\"JavaScript\") -> isNaN(NaN) -> true). Lakin ES6 Number.isNaN() metodu heç bir tip çevrilməsi aparmır və dəyər ədəd tipi deyilsə, dərhal false qaytarır.",
        "hint": "Qlobal isNaN() əvəzinə ES6 standartı olan Number.isNaN() metodundan istifadə edin."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section2 };
}
console.log('Section 2 built successfully');
