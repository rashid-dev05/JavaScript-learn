const fs = require('fs');

const section1 = {
  "id": "section-1",
  "title": "Bölmə 1: JS-ə Giriş & console.log()",
  "icon": "🚀",
  "topics": [
    {
      "id": "topic-1-1",
      "title": "JavaScript nədir və Veb Dünyası (Brauzer Mühərrikləri və Skript Yüklənməsi)",
      "theory": `<h3>🌐 JavaScript Nədir?</h3>
<p><strong>JavaScript (JS)</strong> müasir vebin ən populyar və dinamik proqramlaşdırma dilidir. Əgər veb səhifəni canlı bir varlığa bənzətsək:</p>
<ul>
  <li><strong>HTML (Karkas / Sümük):</strong> Səhifənin strukturunu, başlıqları, mətnləri və düymələri yaradır.</li>
  <li><strong>CSS (Geyim / Dizayn):</strong> Rəngləri, şriftləri, animasiyaları və vizual görünüşü təmin edir.</li>
  <li><strong>JavaScript (Beyin / Hərəkət):</strong> Düyməyə klikləndikdə menyunun açılması, serverdən canlı məlumatların çəkilməsi, formaların yoxlanılması və interaktiv xüsusiyyətləri idarə edir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Həyati Analogiya:</strong> Bir avtomobili təsəvvür edin. Avtomobilin dəmirdən şassisi və gövdəsi — <strong>HTML</strong>, onun parlaq boyası, salon örtüyü və forması — <strong>CSS</strong>, mühərriki, elektrik sistemi və idarəetmə sükanı isə — <strong>JavaScript</strong>-dir!
</div>

<p>JavaScript birbaşa veb brauzerin (Chrome, Safari, Firefox, Edge) daxilində yerli olaraq (natively) işləyir. Yəni ilk kodunuzu yazmaq üçün heç bir əlavə proqram və ya kompilyator quraşdırmağa ehtiyac yoxdur!</p>

<pre><code>// İlk sadə JavaScript əmri:
console.log("Salam, JavaScript!");</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Skriptlərin Yüklənməsi (defer vs async) və V8 Mühərriki</h4>
<p>JavaScript kodunu HTML səhifəsinə bağlamaq üçün <code>&lt;script&gt;</code> teqindən istifadə olunur. Skriptlər iki cür daxil edilə bilər:</p>
<ol>
  <li><strong>Daxili (Inline):</strong> HTML faylının içərisində <code>&lt;script&gt; ...kod... &lt;/script&gt;</code> blokunda.</li>
  <li><strong>Xarici (External):</strong> Ayrı <code>.js</code> faylı yaradaraq <code>&lt;script src="app.js"&gt;&lt;/script&gt;</code> ilə qoşmaq (təmiz kod standartı).</li>
</ol>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Yükləmə Rejimi</th>
        <th>DOM Pars Olunması (HTML Oxunması)</th>
        <th>İcra Növbəsi</th>
        <th>Ən Yaxşı İstifadə Ssenarisi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Klassik <code>&lt;script&gt;</code></strong></td>
        <td>HTML oxunması dayanır (Parser Blocking), skript yüklənib dərhal icra edilir.</td>
        <td>HTML-də qarşılaşma sırası ilə.</td>
        <td>Tövsiyə edilmir (səhifənin açılışını ləngidir).</td>
      </tr>
      <tr>
        <td><strong><code>&lt;script async&gt;</code></strong></td>
        <td>HTML arxa fonda oxunmağa davam edir; skript internetdən gələn kimi <strong>dərhal</strong> icra olunur.</td>
        <td>Qarışıq (hansı skript tez yüklənsə, birinci o işləyir).</td>
        <td>Müstəqil analitika, sayğaclar və reklam skriptləri (məs: Google Analytics).</td>
      </tr>
      <tr>
        <td><strong><code>&lt;script defer&gt;</code></strong></td>
        <td>HTML paralel oxunur; skript yalnız <strong>bütün HTML tam oxunub qurtardıqdan sonra</strong> icra olunur.</td>
        <td>HTML-də yazılma ardıcıllığı dəqiq qorunur.</td>
        <td><strong>Standart seçim:</strong> DOM elementləri ilə işləyən bütün əsas proqram kodları.</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Brauzer Mühərriki və Call Stack:</strong> Brauzerin daxilində JavaScript kodunu maşın dilinə çevirən güclü mühərriklər (Chrome-da <em>V8</em>, Firefox-da <em>SpiderMonkey</em>) çalışır. Mühərrik kodu <strong>Call Stack (Çağırış Qalağı)</strong> adlı yaddaş strukturunda biryivli (single-threaded) qaydada ardıcıl icra edir.</p>`,
      "codeExamples": [
        {
          "title": "İlk JavaScript Kodumuz",
          "code": "console.log(\"Salam, JavaScript!\");",
          "output": "Salam, JavaScript!"
        },
        {
          "title": "HTML-də Müasir Skript Qoşulması",
          "code": "<!-- Tövsiyə olunan defer ilə təhlükəsiz yükləmə -->\n<script defer src=\"main.js\"></script>",
          "output": "HTML tam oxunduqdan sonra problemsiz icra olunur"
        }
      ],
      "exercises": [
        {
          "id": "ex-1-1-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Konsola İlk Mesajın Çıxarılması",
          "instruction": "JavaScript mühərrikinə ilk təlimatınızı verin: konsol ekranına dəqiq olaraq <code>Salam, JavaScript!</code> mətni çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Salam, JavaScript!",
          "hint": "console.log() funksiyasından istifadə edin və mətni dırnaq daxilində yazın.",
          "solutionCode": "console.log(\"Salam, JavaScript!\");"
        },
        {
          "id": "ex-1-1-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Hədəf Mesajının Konsolda Əks Olunması",
          "instruction": "Öyrənmə məqsədinizi elan edin: konsola <code>Mən JavaScript öyrənirəm!</code> mesajını çap edin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Mən JavaScript öyrənirəm!",
          "hint": "Mətni dəqiq köçürün və console.log(\"...\") daxilində ötürün.",
          "solutionCode": "console.log(\"Mən JavaScript öyrənirəm!\");"
        },
        {
          "id": "ex-1-1-3",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Ardıcıl İki Mərhələli Çıxış",
          "instruction": "İki ayrı <code>console.log()</code> çağırışından istifadə edərək birinci sətirdə <code>Addım 1</code>, ikinci sətirdə isə <code>Addım 2</code> yazdırın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Addım 1\nAddım 2",
          "hint": "Hər bir sətir üçün ayrıca console.log() əmrini alt-alta yazın.",
          "solutionCode": "console.log(\"Addım 1\");\nconsole.log(\"Addım 2\");"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "İlk Konsol Əmrində Sintaktik Xətanın Sazlanması",
          "instruction": "Tələbə konsola 'Uğurlar!' çıxarmaq istəyir, lakin dırnaq işarələrinin uyğunsuzluğu səbəbindən 'SyntaxError: Invalid or unexpected token' xətası baş verir. Kodu tədqiq edin, dırnaqları düzəldərək xətanı aradan qaldırın və konsola Uğurlar! çıxmasını təmin edin.",
          "description": "Tələbə konsola 'Uğurlar!' çıxarmaq istəyir, lakin dırnaq işarələrinin uyğunsuzluğu səbəbindən 'SyntaxError: Invalid or unexpected token' xətası baş verir. Kodu tədqiq edin, dırnaqları düzəldərək xətanı aradan qaldırın və konsola Uğurlar! çıxmasını təmin edin.",
          "buggyCode": "console.log(\"Uğurlar!);",
          "correctCode": "console.log(\"Uğurlar!\");",
          "correctOutput": "Uğurlar!",
          "expectedOutput": "Uğurlar!",
          "explanation": "Açılan cüt dırnaq mütləq bağlanmalıdır (\"...\" və ya '...').",
          "hint": "Uğurlar! mətninin sonunda bağlanış cüt dırnağı qoyun."
        }
      ],
      "bugFix": {
        "id": "bug-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "İlk Konsol Əmrində Sintaktik Xətanın Sazlanması",
        "instruction": "Tələbə konsola 'Uğurlar!' çıxarmaq istəyir, lakin dırnaq işarələrinin uyğunsuzluğu səbəbindən 'SyntaxError: Invalid or unexpected token' xətası baş verir. Kodu tədqiq edin, dırnaqları düzəldərək xətanı aradan qaldırın və konsola Uğurlar! çıxmasını təmin edin.",
        "description": "Tələbə konsola 'Uğurlar!' çıxarmaq istəyir, lakin dırnaq işarələrinin uyğunsuzluğu səbəbindən 'SyntaxError: Invalid or unexpected token' xətası baş verir. Kodu tədqiq edin, dırnaqları düzəldərək xətanı aradan qaldırın və konsola Uğurlar! çıxmasını təmin edin.",
        "buggyCode": "console.log(\"Uğurlar!);",
        "correctCode": "console.log(\"Uğurlar!\");",
        "correctOutput": "Uğurlar!",
        "expectedOutput": "Uğurlar!",
        "explanation": "Açılan cüt dırnaq mütləq bağlanmalıdır (\"...\" və ya '...').",
        "hint": "Uğurlar! mətninin sonunda bağlanış cüt dırnağı qoyun."
      }
    },
    {
      "id": "topic-1-2",
      "title": "console.log(), Çıxış Növləri (warn, error, table, time) və Şərhlər",
      "theory": `<h3>🖥️ Məlumatın Konsola Çıxarılması</h3>
<p>Proqramlaşdırma öyrənərkən ən yaxın dostumuz <strong><code>console.log()</code></strong> funksiyasıdır. O, kodumuzun arxa planda nə etdiyini brauzerin tərtibatçı panelində (F12 \(\rightarrow\) Console) və ya terminalda görməyə imkan verir.</p>

<h4>1. Çoxsaylı Dəyərlərin Eyni Anda Çapı:</h4>
<p>Vergüllə ayırmaqla bir neçə dəyəri eyni sətirdə rahatlıqla çap edə bilərsiniz. JavaScript avtomatik olaraq onların arasına boşluq qoyur:</p>
<pre><code>console.log("Yaş:", 25, "Status:", "Aktiv");
// Çıxış: Yaş: 25 Status: Aktiv</code></pre>

<h4>2. Kodda Şərhlər (Comments):</h4>
<p>Şərhlər proqramçı üçün qeydlərdir. JavaScript mühərriki onları tamamilə iqnor edir və icra etmir:</p>
<pre><code>// Bu birsətirli şərhdir

/*
   Bu isə
   çoxsətirli
   şərh blokudur
*/</code></pre>

<div class="tip-box">
  <strong>💡 Niyə şərh yazırıq?</strong> 6 ay sonra yazdığınız koda baxdıqda nə düşündüyünüzü xatırlamaq və ya komanda yoldaşlarınıza mürəkkəb alqoritmin məqsədini izah etmək üçün!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Peşəkar Loqqinq (warn, error, table) və Performansın Ölçülməsi (time)</h4>
<p>İstehsalat (production) səviyyəli böyük layihələrdə yalnız <code>console.log()</code> kifayət etmir. Konsol obyekti müxtəlif vəziyyətlər üçün xüsusi çıxış metodları təqdim edir:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Metod</th>
        <th>Təsvir və Vizual Rejim</th>
        <th>Nümunə Sintaksis</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>console.warn()</code></td>
        <td>Sarı fonlu <strong>xəbərdarlıq</strong> mesajı çıxarır (məsələn, köhnəlmiş API istifadəsi).</td>
        <td><code>console.warn("Diqqət: Bu metod tezliklə ləğv ediləcək!");</code></td>
      </tr>
      <tr>
        <td><code>console.error()</code></td>
        <td>Qırmızı fonlu <strong>təhlükəli xəta</strong> mesajı çıxarır və xətanın baş verdiyi sətirlər zəncirini (stack trace) göstərir.</td>
        <td><code>console.error("Serverlə əlaqə kəsildi!");</code></td>
      </tr>
      <tr>
        <td><code>console.table()</code></td>
        <td>Mürəkkəb massiv və ya obyektləri gözəl və səliqəli <strong>interaktiv cədvəl</strong> kimi formatlayır.</td>
        <td><code>console.table([{ ad: "Aysel", bal: 95 }, { ad: "Murad", bal: 88 }]);</code></td>
      </tr>
      <tr>
        <td><code>console.time()</code> / <code>timeEnd()</code></td>
        <td>Müəyyən kod blokunun icrasının neçə millisaniyə çəkdiyini <strong>dəqiq ölçür</strong> (performans testi).</td>
        <td><code>console.time("Test"); ...əməliyyat... console.timeEnd("Test");</code></td>
      </tr>
    </tbody>
  </table>
</div>`,
      "codeExamples": [
        {
          "title": "Vergüllə Çoxsaylı Çıxış",
          "code": "const ad = \"Leyla\";\nconst xal = 98;\nconsole.log(\"Tələbə:\", ad, \"Topladığı bal:\", xal);",
          "output": "Tələbə: Leyla Topladığı bal: 98"
        },
        {
          "title": "console.table və console.time Nümunəsi",
          "code": "console.table([\n  { id: 1, ad: \"iPhone 15\", qiymet: 2100 },\n  { id: 2, ad: \"MacBook Air\", qiymet: 2600 }\n]);\n\nconsole.time(\"Dövr vaxtı\");\nfor (let i = 0; i < 100000; i++) {}\nconsole.timeEnd(\"Dövr vaxtı\");",
          "output": "Formatlanmış interaktiv cədvəl və millisekund vaxt çıxışı"
        }
      ],
      "exercises": [
        {
          "id": "ex-1-2-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Mətn və Ədədin Birlikdə Çıxarılması",
          "instruction": "Bir <code>console.log()</code> çağırışında vergüllə ayırmaqla birinci arqument kimi <code>\"Yaş:\"</code>, ikinci arqument kimi isə <code>25</code> ədədini ötürərək konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Yaş: 25",
          "hint": "console.log(\"Yaş:\", 25) yazaraq vergüldən istifadə edin.",
          "solutionCode": "console.log(\"Yaş:\", 25);"
        },
        {
          "id": "ex-1-2-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Şərh Sətri Əlavə Edilmiş Kod İcrası",
          "instruction": "Yuxarı sətirdə <code>// Bu ədəd çıxışıdır</code> şərhini yazın, dərhal növbəti sətirdə isə konsola <code>100</code> ədədini çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "100",
          "hint": "Birinci sətirdə iki qat maili xətt (//) ilə şərh qoyun, alt sətirdə console.log(100) əmrini verin.",
          "solutionCode": "// Bu ədəd çıxışıdır\nconsole.log(100);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-1-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Konsol Çıxışında Dırnaq Qüsurunun Sazlanması",
          "instruction": "Proqramçı konsola 'Düzəldi!' sözünü çıxarmaq istəyir, lakin mətndə dırnaq növü qarışdırıldığı üçün ('...\") sintaktik xəta yaranır. Kodu tədqiq edin, dırnaq cütünü eyniləşdirərək xətanı aradan qaldırın və konsola Düzəldi! çıxarın.",
          "description": "Proqramçı konsola 'Düzəldi!' sözünü çıxarmaq istəyir, lakin mətndə dırnaq növü qarışdırıldığı üçün ('...\") sintaktik xəta yaranır. Kodu tədqiq edin, dırnaq cütünü eyniləşdirərək xətanı aradan qaldırın və konsola Düzəldi! çıxarın.",
          "buggyCode": "console.log('Düzəldi!\");",
          "correctCode": "console.log(\"Düzəldi!\");",
          "correctOutput": "Düzəldi!",
          "expectedOutput": "Düzəldi!",
          "explanation": "Mətn hansı dırnaqla açılıbsa, mütləq həmin dırnaq növü ilə də bağlanmalıdır.",
          "hint": "Açılış və bağlanış dırnaqlarını eyni növ edin (hər ikisi tək və ya cüt)."
        }
      ],
      "bugFix": {
        "id": "bug-1-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Konsol Çıxışında Dırnaq Qüsurunun Sazlanması",
        "instruction": "Proqramçı konsola 'Düzəldi!' sözünü çıxarmaq istəyir, lakin mətndə dırnaq növü qarışdırıldığı üçün ('...\") sintaktik xəta yaranır. Kodu tədqiq edin, dırnaq cütünü eyniləşdirərək xətanı aradan qaldırın və konsola Düzəldi! çıxarın.",
        "description": "Proqramçı konsola 'Düzəldi!' sözünü çıxarmaq istəyir, lakin mətndə dırnaq növü qarışdırıldığı üçün ('...\") sintaktik xəta yaranır. Kodu tədqiq edin, dırnaq cütünü eyniləşdirərək xətanı aradan qaldırın və konsola Düzəldi! çıxarın.",
        "buggyCode": "console.log('Düzəldi!\");",
        "correctCode": "console.log(\"Düzəldi!\");",
        "correctOutput": "Düzəldi!",
        "expectedOutput": "Düzəldi!",
        "explanation": "Mətn hansı dırnaqla açılıbsa, mütləq həmin dırnaq növü ilə də bağlanmalıdır.",
        "hint": "Açılış və bağlanış dırnaqlarını eyni növ edin (hər ikisi tək və ya cüt)."
      }
    },
    {
      "id": "topic-1-3",
      "title": "Böyük-Kiçik Hərf Həssaslığı (Case Sensitivity), Qorunan Sözlər və İdentifikator Qaydaları",
      "theory": `<h3>🔤 Registr Həssaslığı (Case Sensitivity) Nədir?</h3>
<p>JavaScript <strong>Case-Sensitive</strong> (böyük və kiçik hərflərə qarşı son dərəcə həssas) bir dildir. Bu o deməkdir ki, eyni söz böyük və ya kiçik hərflə yazıldıqda kompüter üçün tamamilə fərqli anlayışlara çevrilir:</p>
<ul>
  <li><code>console.log()</code> — <strong>Düzgündür</strong> (JavaScript-in tanıdığı standart əmr).</li>
  <li><code>Console.log()</code> — <strong>XƏTA!</strong> (<code>ReferenceError: Console is not defined</code>).</li>
  <li><code>console.LOG()</code> — <strong>XƏTA!</strong> (<code>TypeError: console.LOG is not a function</code>).</li>
  <li><code>ad</code>, <code>Ad</code> və <code>AD</code> üç müxtəlif, bir-birindən asılı olmayan dəyişəndir!</li>
</ul>

<h4>Adlandırma Qaydaları (İdentifikatorlar):</h4>
<p>Dəyişən və ya funksiya adı təyin edərkən aşağıdakı təməl qaydalara mütləq riayət olunmalıdır:</p>
<ol>
  <li><strong>İcazəli simvollar:</strong> Yalnız latın hərfləri (a-z, A-Z), rəqəmlər (0-9), dollar işarəsi (<code>$</code>) və alt xətt (<code>_</code>).</li>
  <li><strong>İlk simvol qaydası:</strong> <strong>İlk simvol qətiyyən rəqəm ola bilməz!</strong> (Məsələn, <code>user1</code> olar, lakin <code>1user</code> sintaksis xətasıdır).</li>
  <li><strong>Boşluq və defis qadağandır:</strong> Dəyişən adında boşluq və ya tire (<code>-</code>) işlətmək olmaz (məsələn, <code>user-name</code> mühərrik tərəfindən riyazi çıxma əməliyyatı kimi qəbul edilir).</li>
</ol>

<div class="tip-box">
  <strong>💡 Qızıl Standart: camelCase:</strong> JavaScript dünyasında çoxsözlü adlar üçün <em>camelCase</em> üsulu standartdır: ilk söz kiçik hərflə başlayır, sonrakı hər bir sözün ilk hərfi böyük yazılır (məs: <code>istifadeciAdi</code>, <code>balansMiqdari</code>, <code>telebeninQiymeti</code>).
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Rezerv Edilmiş Açar Sözlər və İdentifikator Standartları</h4>
<p>JavaScript dilinin daxili arxitekturasını və sintaksisini formalaşdıran xüsusi sözlər mövcuddur. Bu sözlər proqramçı tərəfindən dəyişən, sabit, funksiya və ya parametr adı kimi <strong>istifadə oluna bilməz</strong> (Reserved Keywords):</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Kateqoriya</th>
        <th>Qadağan Edilmiş Açar Sözlər (Dəyişən adı ola bilməz)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Elanlar & Konstruksiyalar</strong></td>
        <td><code>let</code>, <code>const</code>, <code>var</code>, <code>function</code>, <code>class</code>, <code>return</code>, <code>new</code></td>
      </tr>
      <tr>
        <td><strong>Şərtlər & Dövrlər</strong></td>
        <td><code>if</code>, <code>else</code>, <code>switch</code>, <code>case</code>, <code>default</code>, <code>for</code>, <code>while</code>, <code>do</code>, <code>break</code>, <code>continue</code></td>
      </tr>
      <tr>
        <td><strong>Tiplər & Operatorlar</strong></td>
        <td><code>typeof</code>, <code>instanceof</code>, <code>void</code>, <code>delete</code>, <code>true</code>, <code>false</code>, <code>null</code></td>
      </tr>
      <tr>
        <td><strong>Gələcək Üçün Qorunanlar</strong></td>
        <td><code>implements</code>, <code>interface</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, <code>yield</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="warning-box">
  <strong>⚠️ Xəta Nümunəsi:</strong> Əgər siz <code>let return = 50;</code> və ya <code>const class = "A";</code> yazmağa cəhd etsəniz, brauzer mühərriki dərhal <code>SyntaxError: Unexpected token 'return'</code> xətası verərək proqramın icrasını dayandıracaqdır!
</div>`,
      "codeExamples": [
        {
          "title": "Böyük-Kiçik Hərf Həssaslığı Nümunəsi",
          "code": "const seher = \"Bakı\";\nconst Seher = \"Gəncə\";\nconsole.log(seher); // Bakı\nconsole.log(Seher); // Gəncə",
          "output": "Bakı\nGəncə"
        },
        {
          "title": "Düzgün vs Yanlış Adlandırma",
          "code": "//  DÜZGÜNDÜR:\nlet istifadeciBalansi = 150;\nlet _id = \"A12\";\nlet $qiymet = 25;\n\n// ❌ YANLIŞDIR (Xəta verəcək):\n// let 1nomre = 5;\n// let istifadeci-adi = \"Murad\";",
          "output": "Düzgün identifikatorlar xətasız qəbul edilir"
        }
      ],
      "exercises": [
        {
          "id": "ex-1-3-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Böyük-Kiçik Hərf Dəqiqliyi",
          "instruction": "JavaScript-in hərf həssaslığına tam riayət edərək konsola dəqiq şəkildə <code>JavaScript dəqiqdir</code> cümləsini çap edin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "JavaScript dəqiqdir",
          "hint": "Bütün hərflərin böyük və ya kiçik yazılışına diqqət yetirin və standart console.log() əmrini işlədin.",
          "solutionCode": "console.log(\"JavaScript dəqiqdir\");"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-1-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Konsol Əmrində Böyük Hərf Xətasının Düzəldilməsi",
          "instruction": "Proqramçı konsola 'Salam Dünya' çıxarmaq istəyir, lakin 'Console.log' yazdığı üçün mühərrik 'ReferenceError: Console is not defined' xətası verir. Kodu araşdırın, JavaScript-in registr həssaslığı qaydasına uyğun olaraq əmri düzəldin və konsola Salam Dünya çıxarın.",
          "description": "Proqramçı konsola 'Salam Dünya' çıxarmaq istəyir, lakin 'Console.log' yazdığı üçün mühərrik 'ReferenceError: Console is not defined' xətası verir. Kodu araşdırın, JavaScript-in registr həssaslığı qaydasına uyğun olaraq əmri düzəldin və konsola Salam Dünya çıxarın.",
          "buggyCode": "Console.log(\"Salam Dünya\");",
          "correctCode": "console.log(\"Salam Dünya\");",
          "correctOutput": "Salam Dünya",
          "expectedOutput": "Salam Dünya",
          "explanation": "JavaScript registrə həssas dildir. Qlobal çıxış obyektinin adı böyük 'Console' deyil, tamamilə kiçik hərflərlə 'console' yazılmalıdır.",
          "hint": "Console sözünü kiçik hərflərlə console şəklində yazın."
        }
      ],
      "bugFix": {
        "id": "bug-1-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Konsol Əmrində Böyük Hərf Xətasının Düzəldilməsi",
        "instruction": "Proqramçı konsola 'Salam Dünya' çıxarmaq istəyir, lakin 'Console.log' yazdığı üçün mühərrik 'ReferenceError: Console is not defined' xətası verir. Kodu araşdırın, JavaScript-in registr həssaslığı qaydasına uyğun olaraq əmri düzəldin və konsola Salam Dünya çıxarın.",
        "description": "Proqramçı konsola 'Salam Dünya' çıxarmaq istəyir, lakin 'Console.log' yazdığı üçün mühərrik 'ReferenceError: Console is not defined' xətası verir. Kodu araşdırın, JavaScript-in registr həssaslığı qaydasına uyğun olaraq əmri düzəldin və konsola Salam Dünya çıxarın.",
        "buggyCode": "Console.log(\"Salam Dünya\");",
        "correctCode": "console.log(\"Salam Dünya\");",
        "correctOutput": "Salam Dünya",
        "expectedOutput": "Salam Dünya",
        "explanation": "JavaScript registrə həssas dildir. Qlobal çıxış obyektinin adı böyük 'Console' deyil, tamamilə kiçik hərflərlə 'console' yazılmalıdır.",
        "hint": "Console sözünü kiçik hərflərlə console şəklində yazın."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section1 };
}
console.log('Section 1 built successfully');
