var SECTIONS_1_5 = [
  {
    "id": "section-1",
    "title": "Bölmə 1: JS-ə Giriş & console.log()",
    "icon": "🚀",
    "topics": [
      {
        "id": "topic-1-1",
        "title": "JavaScript nədir və Veb Dünyası (Brauzer Mühərrikləri və Skript Yüklənməsi)",
        "theory": "<h3>🌐 JavaScript Nədir?</h3>\n<p><strong>JavaScript (JS)</strong> müasir vebin ən populyar və dinamik proqramlaşdırma dilidir. Əgər veb səhifəni canlı bir varlığa bənzətsək:</p>\n<ul>\n  <li><strong>HTML (Karkas / Sümük):</strong> Səhifənin strukturunu, başlıqları, mətnləri və düymələri yaradır.</li>\n  <li><strong>CSS (Geyim / Dizayn):</strong> Rəngləri, şriftləri, animasiyaları və vizual görünüşü təmin edir.</li>\n  <li><strong>JavaScript (Beyin / Hərəkət):</strong> Düyməyə klikləndikdə menyunun açılması, serverdən canlı məlumatların çəkilməsi, formaların yoxlanılması və interaktiv xüsusiyyətləri idarə edir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Həyati Analogiya:</strong> Bir avtomobili təsəvvür edin. Avtomobilin dəmirdən şassisi və gövdəsi — <strong>HTML</strong>, onun parlaq boyası, salon örtüyü və forması — <strong>CSS</strong>, mühərriki, elektrik sistemi və idarəetmə sükanı isə — <strong>JavaScript</strong>-dir!\n</div>\n\n<p>JavaScript birbaşa veb brauzerin (Chrome, Safari, Firefox, Edge) daxilində yerli olaraq (natively) işləyir. Yəni ilk kodunuzu yazmaq üçün heç bir əlavə proqram və ya kompilyator quraşdırmağa ehtiyac yoxdur!</p>\n\n<pre><code>// İlk sadə JavaScript əmri:\nconsole.log(\"Salam, JavaScript!\");</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Skriptlərin Yüklənməsi (defer vs async) və V8 Mühərriki</h4>\n<p>JavaScript kodunu HTML səhifəsinə bağlamaq üçün <code>&lt;script&gt;</code> teqindən istifadə olunur. Skriptlər iki cür daxil edilə bilər:</p>\n<ol>\n  <li><strong>Daxili (Inline):</strong> HTML faylının içərisində <code>&lt;script&gt; ...kod... &lt;/script&gt;</code> blokunda.</li>\n  <li><strong>Xarici (External):</strong> Ayrı <code>.js</code> faylı yaradaraq <code>&lt;script src=\"app.js\"&gt;&lt;/script&gt;</code> ilə qoşmaq (təmiz kod standartı).</li>\n</ol>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Yükləmə Rejimi</th>\n        <th>DOM Pars Olunması (HTML Oxunması)</th>\n        <th>İcra Növbəsi</th>\n        <th>Ən Yaxşı İstifadə Ssenarisi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Klassik <code>&lt;script&gt;</code></strong></td>\n        <td>HTML oxunması dayanır (Parser Blocking), skript yüklənib dərhal icra edilir.</td>\n        <td>HTML-də qarşılaşma sırası ilə.</td>\n        <td>Tövsiyə edilmir (səhifənin açılışını ləngidir).</td>\n      </tr>\n      <tr>\n        <td><strong><code>&lt;script async&gt;</code></strong></td>\n        <td>HTML arxa fonda oxunmağa davam edir; skript internetdən gələn kimi <strong>dərhal</strong> icra olunur.</td>\n        <td>Qarışıq (hansı skript tez yüklənsə, birinci o işləyir).</td>\n        <td>Müstəqil analitika, sayğaclar və reklam skriptləri (məs: Google Analytics).</td>\n      </tr>\n      <tr>\n        <td><strong><code>&lt;script defer&gt;</code></strong></td>\n        <td>HTML paralel oxunur; skript yalnız <strong>bütün HTML tam oxunub qurtardıqdan sonra</strong> icra olunur.</td>\n        <td>HTML-də yazılma ardıcıllığı dəqiq qorunur.</td>\n        <td><strong>Standart seçim:</strong> DOM elementləri ilə işləyən bütün əsas proqram kodları.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>Brauzer Mühərriki və Call Stack:</strong> Brauzerin daxilində JavaScript kodunu maşın dilinə çevirən güclü mühərriklər (Chrome-da <em>V8</em>, Firefox-da <em>SpiderMonkey</em>) çalışır. Mühərrik kodu <strong>Call Stack (Çağırış Qalağı)</strong> adlı yaddaş strukturunda biryivli (single-threaded) qaydada ardıcıl icra edir.</p>",
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
        "theory": "<h3>🖥️ Məlumatın Konsola Çıxarılması</h3>\n<p>Proqramlaşdırma öyrənərkən ən yaxın dostumuz <strong><code>console.log()</code></strong> funksiyasıdır. O, kodumuzun arxa planda nə etdiyini brauzerin tərtibatçı panelində (F12 (\rightarrow) Console) və ya terminalda görməyə imkan verir.</p>\n\n<h4>1. Çoxsaylı Dəyərlərin Eyni Anda Çapı:</h4>\n<p>Vergüllə ayırmaqla bir neçə dəyəri eyni sətirdə rahatlıqla çap edə bilərsiniz. JavaScript avtomatik olaraq onların arasına boşluq qoyur:</p>\n<pre><code>console.log(\"Yaş:\", 25, \"Status:\", \"Aktiv\");\n// Çıxış: Yaş: 25 Status: Aktiv</code></pre>\n\n<h4>2. Kodda Şərhlər (Comments):</h4>\n<p>Şərhlər proqramçı üçün qeydlərdir. JavaScript mühərriki onları tamamilə iqnor edir və icra etmir:</p>\n<pre><code>// Bu birsətirli şərhdir\n\n/*\n   Bu isə\n   çoxsətirli\n   şərh blokudur\n*/</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Niyə şərh yazırıq?</strong> 6 ay sonra yazdığınız koda baxdıqda nə düşündüyünüzü xatırlamaq və ya komanda yoldaşlarınıza mürəkkəb alqoritmin məqsədini izah etmək üçün!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Peşəkar Loqqinq (warn, error, table) və Performansın Ölçülməsi (time)</h4>\n<p>İstehsalat (production) səviyyəli böyük layihələrdə yalnız <code>console.log()</code> kifayət etmir. Konsol obyekti müxtəlif vəziyyətlər üçün xüsusi çıxış metodları təqdim edir:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Metod</th>\n        <th>Təsvir və Vizual Rejim</th>\n        <th>Nümunə Sintaksis</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>console.warn()</code></td>\n        <td>Sarı fonlu <strong>xəbərdarlıq</strong> mesajı çıxarır (məsələn, köhnəlmiş API istifadəsi).</td>\n        <td><code>console.warn(\"Diqqət: Bu metod tezliklə ləğv ediləcək!\");</code></td>\n      </tr>\n      <tr>\n        <td><code>console.error()</code></td>\n        <td>Qırmızı fonlu <strong>təhlükəli xəta</strong> mesajı çıxarır və xətanın baş verdiyi sətirlər zəncirini (stack trace) göstərir.</td>\n        <td><code>console.error(\"Serverlə əlaqə kəsildi!\");</code></td>\n      </tr>\n      <tr>\n        <td><code>console.table()</code></td>\n        <td>Mürəkkəb massiv və ya obyektləri gözəl və səliqəli <strong>interaktiv cədvəl</strong> kimi formatlayır.</td>\n        <td><code>console.table([{ ad: \"Aysel\", bal: 95 }, { ad: \"Murad\", bal: 88 }]);</code></td>\n      </tr>\n      <tr>\n        <td><code>console.time()</code> / <code>timeEnd()</code></td>\n        <td>Müəyyən kod blokunun icrasının neçə millisaniyə çəkdiyini <strong>dəqiq ölçür</strong> (performans testi).</td>\n        <td><code>console.time(\"Test\"); ...əməliyyat... console.timeEnd(\"Test\");</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
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
        "theory": "<h3>🔤 Registr Həssaslığı (Case Sensitivity) Nədir?</h3>\n<p>JavaScript <strong>Case-Sensitive</strong> (böyük və kiçik hərflərə qarşı son dərəcə həssas) bir dildir. Bu o deməkdir ki, eyni söz böyük və ya kiçik hərflə yazıldıqda kompüter üçün tamamilə fərqli anlayışlara çevrilir:</p>\n<ul>\n  <li><code>console.log()</code> — <strong>Düzgündür</strong> (JavaScript-in tanıdığı standart əmr).</li>\n  <li><code>Console.log()</code> — <strong>XƏTA!</strong> (<code>ReferenceError: Console is not defined</code>).</li>\n  <li><code>console.LOG()</code> — <strong>XƏTA!</strong> (<code>TypeError: console.LOG is not a function</code>).</li>\n  <li><code>ad</code>, <code>Ad</code> və <code>AD</code> üç müxtəlif, bir-birindən asılı olmayan dəyişəndir!</li>\n</ul>\n\n<h4>Adlandırma Qaydaları (İdentifikatorlar):</h4>\n<p>Dəyişən və ya funksiya adı təyin edərkən aşağıdakı təməl qaydalara mütləq riayət olunmalıdır:</p>\n<ol>\n  <li><strong>İcazəli simvollar:</strong> Yalnız latın hərfləri (a-z, A-Z), rəqəmlər (0-9), dollar işarəsi (<code>$</code>) və alt xətt (<code>_</code>).</li>\n  <li><strong>İlk simvol qaydası:</strong> <strong>İlk simvol qətiyyən rəqəm ola bilməz!</strong> (Məsələn, <code>user1</code> olar, lakin <code>1user</code> sintaksis xətasıdır).</li>\n  <li><strong>Boşluq və defis qadağandır:</strong> Dəyişən adında boşluq və ya tire (<code>-</code>) işlətmək olmaz (məsələn, <code>user-name</code> mühərrik tərəfindən riyazi çıxma əməliyyatı kimi qəbul edilir).</li>\n</ol>\n\n<div class=\"tip-box\">\n  <strong>💡 Qızıl Standart: camelCase:</strong> JavaScript dünyasında çoxsözlü adlar üçün <em>camelCase</em> üsulu standartdır: ilk söz kiçik hərflə başlayır, sonrakı hər bir sözün ilk hərfi böyük yazılır (məs: <code>istifadeciAdi</code>, <code>balansMiqdari</code>, <code>telebeninQiymeti</code>).\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Rezerv Edilmiş Açar Sözlər və İdentifikator Standartları</h4>\n<p>JavaScript dilinin daxili arxitekturasını və sintaksisini formalaşdıran xüsusi sözlər mövcuddur. Bu sözlər proqramçı tərəfindən dəyişən, sabit, funksiya və ya parametr adı kimi <strong>istifadə oluna bilməz</strong> (Reserved Keywords):</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Kateqoriya</th>\n        <th>Qadağan Edilmiş Açar Sözlər (Dəyişən adı ola bilməz)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Elanlar & Konstruksiyalar</strong></td>\n        <td><code>let</code>, <code>const</code>, <code>var</code>, <code>function</code>, <code>class</code>, <code>return</code>, <code>new</code></td>\n      </tr>\n      <tr>\n        <td><strong>Şərtlər & Dövrlər</strong></td>\n        <td><code>if</code>, <code>else</code>, <code>switch</code>, <code>case</code>, <code>default</code>, <code>for</code>, <code>while</code>, <code>do</code>, <code>break</code>, <code>continue</code></td>\n      </tr>\n      <tr>\n        <td><strong>Tiplər & Operatorlar</strong></td>\n        <td><code>typeof</code>, <code>instanceof</code>, <code>void</code>, <code>delete</code>, <code>true</code>, <code>false</code>, <code>null</code></td>\n      </tr>\n      <tr>\n        <td><strong>Gələcək Üçün Qorunanlar</strong></td>\n        <td><code>implements</code>, <code>interface</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, <code>yield</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Xəta Nümunəsi:</strong> Əgər siz <code>let return = 50;</code> və ya <code>const class = \"A\";</code> yazmağa cəhd etsəniz, brauzer mühərriki dərhal <code>SyntaxError: Unexpected token 'return'</code> xətası verərək proqramın icrasını dayandıracaqdır!\n</div>",
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
  },
  {
    "id": "section-2",
    "title": "Bölmə 2: Dəyişənlər (let, const, var) və Primitiv Tiplər",
    "icon": "📦",
    "topics": [
      {
        "id": "topic-2-1",
        "title": "Dəyişənlərin Elanı: let və const (ES6) vs Köhnə var",
        "theory": "<h3>📦 Dəyişənlər Nədir?</h3>\n<p>Proqramlaşdırmada <strong>dəyişən (variable)</strong> kompüterin operativ yaddaşında (RAM) hər hansı bir məlumatı (ad, balans, xal və s.) saxlamaq və ona istənilən vaxt adla müraciət etmək üçün ayrılmış xüsusi saxlanc qutusudur.</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Həyati Analogiya:</strong> Dəyişənləri üzərinə etiket yapışdırılmış qutular kimi düşünün. Qutunun üzərindəki etiket — dəyişənin <strong>adı</strong>, qutunun içindəki əşya isə onun <strong>dəyəridir</strong>.\n</div>\n\n<h4>Müasir Dəyişən Elanları: <code>let</code> vs <code>const</code></h4>\n<p>Müasir JavaScript-də (ES6 standartı ilə) dəyişənlər iki əsas açar sözlə yaradılır:</p>\n<ul>\n  <li><strong><code>let</code>:</strong> Dəyəri gələcəkdə dəyişə bilən dəyişənlər üçün istifadə olunur (məsələn: oyun xalı, sayğac, istifadəçinin dəyişən balansı).</li>\n  <li><strong><code>const</code> (Sabit - Constant):</strong> Dəyəri proqram boyu heç vaxt dəyişməyən kəmiyyətlər üçün istifadə olunur (məsələn: paytaxt şəhər adı, riyazi Pi ədədi, API server ünvanı). <code>const</code>-a sonradan yeni dəyər mənimsətmək qətiyyən mümkün deyil!</li>\n</ul>\n\n<pre><code>let xal = 10;\nxal = 20; // TAM DÜZGÜNDÜR (let dəyərini yeniləməyə icazə verir)\n\nconst olke = \"Azərbaycan\";\n// olke = \"Türkiyə\"; // XƏTA: TypeError: Assignment to constant variable!</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Qızıl Qayda:</strong> Həmişə ilk olaraq <code>const</code> yazın. Yalnız dəyərin mütləq dəyişəcəyini dəqiq bildiyiniz hallarda <code>let</code> seçin.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Köhnə 'var', Qaldırılma (Hoisting) və Temporal Dead Zone (TDZ)</h4>\n<p>2015-ci ilə (ES6) qədər JavaScript-də bütün dəyişənlər köhnə <code>var</code> açar sözü ilə yaradılırdı. Müasir layihələrdə <code>var</code>-dan imtina edilməsinin səbəbləri:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Meyar</th>\n        <th><code>var</code> (Köhnə və Təhlükəli)</th>\n        <th><code>let</code> və <code>const</code> (Müasir Standart)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Görünmə Sahəsi (Scope)</strong></td>\n        <td><strong>Funksiya Sahəsi (Function Scope):</strong> Fiqurlu mötərizələrdən (<code>if</code>, <code>for</code>) çölə sızır (leaking).</td>\n        <td><strong>Blok Sahəsi (Block Scope):</strong> Yalnız elan olunduğu <code>{ ... }</code> blokunun daxilində görünür.</td>\n      </tr>\n      <tr>\n        <td><strong>Yenidən Elan (Re-declaration)</strong></td>\n        <td>Eyni adlı dəyişəni təkrar elan etməyə icazə verir (təsadüfən məlumatı əzir).</td>\n        <td>Qadağandır (<code>SyntaxError: Identifier has already been declared</code>).</td>\n      </tr>\n      <tr>\n        <td><strong>Hoisting & TDZ</strong></td>\n        <td>Yuxarı qaldırılır və <code>undefined</code> ilə inisializasiya olunur.</td>\n        <td>Yuxarı qaldırılır, lakin <strong>Temporal Dead Zone (TDZ)</strong> səbəbindən elan sətrindən əvvəl oxunduqda sərt <code>ReferenceError</code> verir.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>Temporal Dead Zone (TDZ - Müvəqqəti Ölü Zona):</strong> Blokun əvvəlindən <code>let</code> və ya <code>const</code> sətrinə qədər olan zonadır. TDZ daxilində dəyişənə toxunmaq qadağandır:</p>\n<pre><code>// TDZ Başlayır\n// console.log(mesaj); // ReferenceError: Cannot access 'mesaj' before initialization\n// TDZ Bitir\nlet mesaj = \"Müasir JavaScript\";\nconsole.log(mesaj); // \"Müasir JavaScript\"</code></pre>\n\n<p><strong><code>const</code> və Obyekt/Massiv Mutasiyası:</strong> <code>const</code> dəyərin özünü deyil, yaddaşdakı ünvan istinadını (reference) qoruyur. Buna görə <code>const arr = [1, 2]; arr.push(3);</code> tam qanunidir, lakin <code>arr = [4, 5];</code> xətadır.</p>",
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
        "theory": "<h3>🧬 Təməl Primitiv Məlumat Tipləri</h3>\n<p>Kompüter yaddaşındakı hər bir məlumat müəyyən bir formata malikdir. Proqramlaşdırmada ən çox rast gəlinən 3 təməl tip bunlardır:</p>\n<ol>\n  <li><strong>String (Mətn):</strong> Dırnaq daxilində (<code>\"...\"</code> və ya <code>'...'</code>) yazılan bütün söz və simvollar ardıcıllığıdır (məs: <code>\"Salam\"</code>, <code>\"Bakı\"</code>, <code>\"2026\"</code>).</li>\n  <li><strong>Number (Ədəd):</strong> Bütün tam və ya kəsr riyazi ədədlərdir (məs: <code>42</code>, <code>-15</code>, <code>99.9</code>). Ədədlər <strong>dırnaqsız</strong> yazılır!</li>\n  <li><strong>Boolean (Məntiqi):</strong> Yalnız iki qiymətdən birini ala bilən ikili seçimdir: <strong><code>true</code></strong> (doğru / həqiqət) və ya <strong><code>false</code></strong> (yalan / səhv).</li>\n</ol>\n\n<div class=\"tip-box\">\n  <strong>💡 Həyati Analogiya:</strong> Mətn — kitabın səhifəsindəki yazıdır. Ədəd — mağazada məhsulun qiymətidir. Boolean isə otağın elektrik açarıdır: ya <strong>yanır (true)</strong>, ya da <strong>sönür (false)</strong>!\n</div>\n\n<pre><code>const ad = \"Aytən\";       // String (Mətn)\nconst yas = 20;            // Number (Ədəd)\nconst telebedir = true;    // Boolean (Məntiqi)</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Xüsusi Primitivlər (BigInt və Symbol)</h4>\n<p>JavaScript-də cəmi <strong>7 primitiv tip</strong> mövcuddur: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <strong><code>bigint</code></strong> və <strong><code>symbol</code></strong>.</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Primitiv Tip</th>\n        <th>Təsvir</th>\n        <th>Nümunə Sintaksis</th>\n        <th><code>typeof</code> Nəticəsi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong><code>BigInt</code></strong> (ES2020)</td>\n        <td>Standart <code>Number</code> limitini ((2^{53} - 1 = 9007199254740991)) aşan ixtiyari böyüklükdə olan təhlükəsiz tam ədədlər.</td>\n        <td><code>9007199254740995n</code> və ya <code>BigInt(\"9007199254740995\")</code></td>\n        <td><code>\"bigint\"</code></td>\n      </tr>\n      <tr>\n        <td><strong><code>Symbol</code></strong> (ES6)</td>\n        <td>Tamamilə unikal (təkrarolunmaz) və gizli identifikatorlar.</td>\n        <td><code>Symbol(\"id\")</code></td>\n        <td><code>\"symbol\"</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>BigInt Qaydası (Tiplərin Qatışdırılması Qadağandır):</strong> <code>BigInt</code> ilə adi <code>Number</code> arasında birbaşa riyazi əməliyyat aparmaq olmaz (məs: <code>100n + 10</code> mühərrikdə <code>TypeError</code> törədir). Əməliyyat üçün açıq çevrilmə tələb olunur: <code>100n + BigInt(10)</code>.</p>\n<p><strong>Symbol Unikallığı:</strong> Hər bir <code>Symbol()</code> çağırışı yaddaşda təkrarolunmaz unikal token yaradır. Təsvir mətni eyni olsa belə <code>Symbol(\"id\") === Symbol(\"id\")</code> nəticəsi həmişə <strong><code>false</code></strong>-dur. Bu, obyektlərdə ad toqquşması olmadan təhlükəsiz açarlar yaratmaq üçün əvəzsizdir.</p>",
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
        "theory": "<h3>❓ Boşluğun İki Üzü: <code>undefined</code> vs <code>null</code></h3>\n<p>JavaScript digər dillərdən fərqli olaraq \"boşluq\" və ya \"dəyərsizlik\" anlayışını iki fərqli primitivlə ifadə edir:</p>\n<ul>\n  <li><strong><code>undefined</code> (Təyin edilməmiş):</strong> Dəyişən yaradılıb, lakin ona hələ heç bir dəyər verilməyib. Bu, mühərrikin standart başlanğıc vəziyyətidir.</li>\n  <li><strong><code>null</code> (Qəsdən boş qoyulmuş):</strong> Proqramçı tərəfindən şüurlu şəkildə \"burada hazırda heç bir dəyər və ya obyekt yoxdur\" mənasında mənimsədilir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Tualet Kağızı Asılqanı Analogiyası:</strong><br>\n  • Divarda kağız asılqanı hələ ümumiyyətlə quraşdırılmayıbsa — bu <strong><code>undefined</code></strong>-dir.<br>\n  • Asılqan var, lakin üzərindəki kağız rulonu tamamilə qurtarıb və boş boru qalıb — bu <strong><code>null</code></strong>-dur!\n</div>\n\n<pre><code>let elanEdilmis;\nconsole.log(elanEdilmis); // undefined (dəyər mənimsədilməyib)\n\nlet istifadeci = null;\nconsole.log(istifadeci);   // null (qəsdən boş qoyulub)</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Tarixi Baq (typeof null === \"object\") və Təhlükəsiz Yoxlanış</h4>\n<p>JavaScript 1995-ci ildə ilk dəfə yaradılarkən dəyərlər kompüter yaddaşında 32-bitlik vahidlərdə saxlanılırdı. Hər dəyərin tipini müəyyən etmək üçün ilk 1-3 bit <em>\"type tag\"</em> kimi ayrılmışdı:</p>\n<ul>\n  <li>Obyektlər üçün tip nişanı <code>000</code> idi.</li>\n  <li>C dilində <code>NULL</code> göstəricisi (null pointer) bütün bitləri sıfır olan yaddaş ünvanı idi (<code>0x00...</code>).</li>\n  <li>Mühərrik <code>null</code>-un bitlərinə baxdıqda ilk 3 biti <code>000</code> gördü və onu səhvən <code>\"object\"</code> kimi təsnif etdi!</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tarixi Qüsur:</strong> <code>typeof null === \"object\"</code> dilin tanınmış tarixi baqıdır və internetdəki milyonlarla saytı sındırmamaq (backwards compatibility) üçün düzəldilməmişdir.\n</div>\n\n<p><strong>Müqayisə və Təhlükəsiz Yoxlama:</strong></p>\n<pre><code>console.log(null == undefined);  // true  (Boş bərabərlik: hər ikisi boşluq sayılır)\nconsole.log(null === undefined); // false (Ciddi bərabərlik: tipləri fərqlidir!)\n\n// Dəyərin xüsusi olaraq null olduğunu təhlükəsiz yoxlamaq üçün:\nif (deyisen === null) {\n  // Tam zəmanətli yoxlama\n}</code></pre>",
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
        "theory": "<h3>🔍 Dəyişənin Tipinin Təyini: <code>typeof</code></h3>\n<p>Dəyişənin hansı məlumat tipinə aid olduğunu öyrənmək üçün unar <strong><code>typeof</code></strong> operatorundan istifadə olunur:</p>\n<pre><code>typeof \"Salam\" // \"string\"\ntypeof 42      // \"number\"\ntypeof true    // \"boolean\"</code></pre>\n\n<h4>Tip Çevrilmələri (Type Conversion):</h4>\n<p>Məlumatı bir növdən digərinə çevirmək üçün qlobal funksiyalardan istifadə edirik:</p>\n<ul>\n  <li><code>Number(\"50\")</code> (\rightarrow) <code>50</code> (Mətni ədədə çevirir)</li>\n  <li><code>String(100)</code> (\rightarrow) <code>\"100\"</code> (Ədədi mətnə çevirir)</li>\n  <li>Unar plyus <code>+\"50\"</code> (\rightarrow) <code>50</code> (Ən qısa ədədə çevirmə üsulu)</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Toplama (+) Operatorunun Tələsi:</strong><br>\n  Əgər <code>+</code> operatorunun tərəflərindən biri <strong>String</strong>-dirsə, JavaScript riyazi toplama deyil, sətir birləşdirməsi (konkatenasiya) aparır:<br>\n  <code>\"5\" + 5 (\rightarrow) \"55\"</code><br><br>\n  Lakin çıxma, vurma və bölmə mətni məcburi ədədə çevirir:<br>\n  <code>\"10\" - 2 (\rightarrow) 8</code> &nbsp;|&nbsp; <code>\"6\" * \"2\" (\rightarrow) 12</code>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: 8 Falsy Dəyər, Məntiqi Çevrilmə və Dəyər Dəyiş-Düyüşü (Swap)</h4>\n<p>JavaScript-də istənilən dəyər məntiqi (Boolean) kontekstə salındıqda iki kateqoriyadan birinə aid olur: <strong>Truthy</strong> (Doğru) və ya <strong>Falsy</strong> (Yalan).</p>\n\n<p>JavaScript-də cəmi <strong>8 dənə Falsy dəyər</strong> mövcuddur:</p>\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Falsy Dəyər</th>\n        <th>Təsvir</th>\n        <th><code>Boolean(x)</code> Nəticəsi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td><code>false</code></td><td>Məntiqi yalan</td><td><code>false</code></td></tr>\n      <tr><td><code>0</code> və <code>-0</code></td><td>Sıfır və mənfi sıfır</td><td><code>false</code></td></tr>\n      <tr><td><code>0n</code></td><td>BigInt sıfır</td><td><code>false</code></td></tr>\n      <tr><td><code>\"\"</code></td><td>Boş sətir (simvolsuz mətn)</td><td><code>false</code></td></tr>\n      <tr><td><code>null</code></td><td>Qəsdən boşluq</td><td><code>false</code></td></tr>\n      <tr><td><code>undefined</code></td><td>Təyin edilməmiş vəziyyət</td><td><code>false</code></td></tr>\n      <tr><td><code>NaN</code></td><td>Qeyri-ədəd (Not-a-Number)</td><td><code>false</code></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"tip-box\">\n  <strong>💡 Qalan HƏR ŞEY Truthy-dir:</strong> Hətta <code>\"0\"</code> (boş olmayan mətn), <code>[]</code> (boş massiv) və <code>{}</code> (boş obyekt) belə <strong>true</strong> hesab olunur!\n</div>\n\n<p><strong>Dəyişənlərin Qiymətinin Dəyiş-Düyüşü (Swap):</strong></p>\n<pre><code>// Müasir ES6 Destructuring Swap (Köməkçi dəyişənsiz):\nlet a = 10;\nlet b = 20;\n[a, b] = [b, a];\nconsole.log(a, b); // 20, 10</code></pre>",
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
        "theory": "<h3>🔢 Qeyri-Adi Ədədi Vəziyyətlər: NaN və Infinity</h3>\n<p>JavaScript-də riyazi əməliyyatlar heç vaxt proqramı çökdürmür (crash etmir). Əgər riyaziyyat qanunlarına zidd bir əməliyyat aparılarsa, mühərrik xüsusi ədədi simvollar qaytarır:</p>\n<ul>\n  <li><strong><code>NaN</code> (Not-a-Number - Ədəd Deyil):</strong> Mənasız və ya icazə verilməyən riyazi əməliyyatın nəticəsidir (məsələn, mətni ədədə vurmaq: <code>\"salam\" * 5 (\rightarrow) NaN</code>).</li>\n  <li><strong><code>Infinity</code> və <code>-Infinity</code> (Sonsuzluq):</strong> Sıfıra bölmə və ya həddindən artıq böyük ədəd əməliyyatlarında yaranır (məs: <code>10 / 0 (\rightarrow) Infinity</code>, <code>-10 / 0 (\rightarrow) -Infinity</code>).</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Paradoks:</strong> Təəccüblü olsa da, <code>typeof NaN === \"number\"</code> nəticəsini verir! Çünki texniki olaraq NaN ədəd sisteminin \"səhv nəticələnmiş ədəd\" statusudur.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: NaN Unikallığı, Number.isNaN() vs isNaN(), Object.is() və IEEE 754 Dəqiqlik Qüsuru</h4>\n<p><strong>1. NaN-ın Öz-özünə Bərabər Olmaması:</strong><br>\nIEEE 754 spesifikasiyasına görə NaN yer üzündə öz-özünə bərabər olmayan YEGANƏ dəyərdir:</p>\n<pre><code>console.log(NaN === NaN); // false!\nconsole.log(NaN == NaN);  // false!</code></pre>\n\n<p><strong>2. <code>Number.isNaN()</code> vs Qlobal <code>isNaN()</code>:</strong></p>\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Metod</th>\n        <th>İşləmə Mexanizmi</th>\n        <th><code>isNaN(\"test\")</code></th>\n        <th><code>isNaN(NaN)</code></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Qlobal <code>isNaN(x)</code></strong></td>\n        <td>Dəyəri əvvəlcə məcburi <code>Number()</code> ilə ədədə çevirir (Coercion tələsi).</td>\n        <td><strong><code>true</code></strong> <em>(Xəta: \"test\" əslində NaN deyil, mətndir!)</em></td>\n        <td><code>true</code></td>\n      </tr>\n      <tr>\n        <td><strong><code>Number.isNaN(x)</code> (ES6)</strong></td>\n        <td>Heç bir çevrilmə aparmır; yalnız tipi <code>number</code> olan və həqiqi NaN-ı yoxlayır.</td>\n        <td><strong><code>false</code></strong> <em>(Düzgün)</em></td>\n        <td><code>true</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>3. Tam Eynilik: <code>Object.is()</code>:</strong><br>\nNaN-ı başqa bir NaN ilə dəqiq bərabər tutmağın yeganə yolu <code>Object.is(NaN, NaN) === true</code> metodudur.</p>\n\n<p><strong>4. IEEE 754 İkilik Üzən Nöqtəli Kəsr Qüsuru (0.1 + 0.2):</strong><br>\nKompüterlər kəsr ədədləri ikilik (binary) sistemdə dəqiq ifadə edə bilmir. Nəticədə <code>0.1 + 0.2 === 0.30000000000000004</code> olur! Kəsrləri təhlükəsiz müqayisə etmək üçün <code>Number.EPSILON</code> fərqi və ya <code>.toFixed(2)</code> tətbiq olunur:</p>\n<pre><code>const beraberdir = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;\nconsole.log(beraberdir); // true!</code></pre>",
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
  },
  {
    "id": "section-3",
    "title": "Bölmə 3: Operatorlar (===, !==, arifmetik, məntiqi)",
    "icon": "⚡",
    "topics": [
      {
        "id": "topic-3-1",
        "title": "Arifmetik Operatorlar, Qalıq (%), Qüvvət (**) və Prefiks/Postfiks",
        "theory": "<h3>⚡ Riyazi Əməliyyatlar və Hesablama İntizamı</h3>\n<p>JavaScript ədədlər üzərində riyazi əməliyyatlar aparmaq üçün standart <strong>arifmetik operatorlar</strong> təqdim edir:</p>\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Operator</th>\n        <th>Riyazi Əməliyyat</th>\n        <th>Nümunə</th>\n        <th>Nəticə</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td><code>+</code></td><td>Toplama</td><td><code>10 + 5</code></td><td><code>15</code></td></tr>\n      <tr><td><code>-</code></td><td>Çıxma</td><td><code>10 - 4</code></td><td><code>6</code></td></tr>\n      <tr><td><code>*</code></td><td>Vurma</td><td><code>6 * 7</code></td><td><code>42</code></td></tr>\n      <tr><td><code>/</code></td><td>Bölmə</td><td><code>20 / 4</code></td><td><code>5</code></td></tr>\n      <tr><td><code>%</code></td><td>Qalıq (Modulus)</td><td><code>25 % 4</code></td><td><code>1</code></td></tr>\n      <tr><td><code>**</code></td><td>Qüvvətə yüksəltmə</td><td><code>2 ** 3</code></td><td><code>8</code></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"tip-box\">\n  <strong>💡 Qalıq (%) Operatoru ilə Cüt/Tək Təyini:</strong> Hər hansı bir ədədin 2-yə bölünməsindən qalan qalıq 0 olarsa (<code>eded % 2 === 0</code>), o ədəd <strong>cütdür</strong>; əks halda <strong>təkdir</strong>.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Prefiks vs Postfiks (İcra Zamanlaması Xronologiyası)</h4>\n<p>Dəyişəni 1 vahid artırmaq üçün <strong>inkrement (<code>++</code>)</strong>, 1 vahid azaltmaq üçün <strong>dekrement (<code>--</code>)</strong> tətbiq olunur. Lakin operatorun dəyişəndən əvvəl və ya sonra yazılması qiymətləndirmə ardıcıllığında fərq yaradır:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Sintaksis</th>\n        <th>Növü</th>\n        <th>İcra Xronologiyası</th>\n        <th>Nəticə</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>x++</code></td>\n        <td>Postfiks İnkrement</td>\n        <td>Əvvəlcə <strong>mövcud köhnə dəyəri verir</strong>, sonra dəyişəni 1 vahid artırır.</td>\n        <td><code>let a = 5; let b = a++;</code><br>(\rightarrow) <code>b = 5, a = 6</code></td>\n      </tr>\n      <tr>\n        <td><code>++x</code></td>\n        <td>Prefiks İnkrement</td>\n        <td>Əvvəlcə <strong>dəyişəni 1 vahid artırır</strong>, sonra yeni dəyəri dərhal qaytarır.</td>\n        <td><code>let a = 5; let b = ++a;</code><br>(\rightarrow) <code>b = 6, a = 6</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Qüvvət (**) vs Bitwise XOR (^):</strong> JavaScript-də qüvvətə yüksəltmə <code>**</code> operatorudur. Çox vaxt riyaziyyatdan gələn vərdişlə <code>2 ^ 3</code> yazılır; lakin <code>^</code> qüvvət deyil, ikilik Bitwise XOR operatorudur və <code>2 ^ 3 = 1</code> verir!\n</div>",
        "codeExamples": [
          {
            "title": "Qalıq və Qüvvət Hesablamaları",
            "code": "const bolunen = 17;\nconst bolen = 5;\nconsole.log(\"Qalıq:\", bolunen % bolen); // 2\n\nconst esas = 3;\nconst quvvet = 4;\nconsole.log(\"3 qüvvəti 4:\", esas ** quvvet); // 81",
            "output": "Qalıq: 2\n3 qüvvəti 4: 81"
          },
          {
            "title": "Prefiks və Postfiks Müqayisəsi",
            "code": "let n = 5;\nlet a = n++; // a = 5, n = 6\nlet b = ++n; // n = 7, b = 7\nconsole.log(\"a:\", a);\nconsole.log(\"b:\", b);\nconsole.log(\"Yekun n:\", n);",
            "output": "a: 5\nb: 7\nYekun n: 7"
          }
        ],
        "exercises": [
          {
            "id": "ex-3-1-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Bölmədən Alınan Qalığın Hesablanması",
            "instruction": "25 ədədinin 4 bərabər hissəyə bölünməsindən sonra yerdə qalan kəsrsiz tam qalığı hesablayaraq nəticəni konsol ekranında əks etdirin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "1",
            "hint": "Qalıq tapmaq üçün JavaScript-də faiz (%) işarəsi olan qalıq (modulus) operatorundan istifadə olunur.",
            "solutionCode": "console.log(25 % 4);"
          },
          {
            "id": "ex-3-1-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Ədədin Qüvvətinin Hesablanması",
            "instruction": "2 əsasının 5-ci dərəcədən qüvvətini riyazi olaraq hesablayın və əldə olunan nəticəni (32) konsola çıxarın.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "32",
            "hint": "Qüvvətə yüksəltmə üçün JavaScript-də ** (exponentiation) operatorundan istifadə olunur.",
            "solutionCode": "console.log(2 ** 5);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-3-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Qüvvət Əməliyyatının Sazlanması",
            "instruction": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
            "description": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
            "buggyCode": "console.log(2 ^ 3);",
            "correctCode": "console.log(2 ** 3);",
            "correctOutput": "8",
            "expectedOutput": "8",
            "explanation": "JavaScript-də qüvvətə yüksəltmə operatoru ** işarəsidir. Şapka (^) işarəsi isə qüvvət deyil, ikilik bitwise XOR operatorudur (2 ^ 3 = 1)."
          }
        ],
        "bugFix": {
          "id": "bug-3-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Qüvvət Əməliyyatının Sazlanması",
          "instruction": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
          "description": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
          "buggyCode": "console.log(2 ^ 3);",
          "correctCode": "console.log(2 ** 3);",
          "correctOutput": "8",
          "expectedOutput": "8",
          "explanation": "JavaScript-də qüvvətə yüksəltmə operatoru ** işarəsidir. Şapka (^) işarəsi isə qüvvət deyil, ikilik bitwise XOR operatorudur (2 ^ 3 = 1)."
        }
      },
      {
        "id": "topic-3-2",
        "title": "Mənimsətmə Operatorları (+=, -=, *=, /=, **=) və Zəncirvari Mənimsətmə",
        "theory": "<h3>📝 Mürəkkəb Mənimsətmə Nədir?</h3>\n<p>Dəyişənin cari dəyərini riyazi dəyişib yenidən həmin dəyişənin özünə yazmaq lazım gəldikdə <strong>qısaldılmış mənimsətmə operatorları</strong> tətbiq olunur:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Həyati Nümunə:</strong> Əgər bank balansınız 100 manatdırsa və üzərinə 50 manat gəlirsinizsə, uzun-uzadı <code>balans = balans + 50</code> yazmaq əvəzinə qısa və səliqəli şəkildə <code>balans += 50</code> yazırsınız!\n</div>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Qısa Forma</th>\n        <th>Ekvivalent Tam İfadə</th>\n        <th>İzah</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td><code>x += y</code></td><td><code>x = x + y</code></td><td>Cari qiymətin üzərinə y gəlir</td></tr>\n      <tr><td><code>x -= y</code></td><td><code>x = x - y</code></td><td>Cari qiymətdən y çıxır</td></tr>\n      <tr><td><code>x *= y</code></td><td><code>x = x * y</code></td><td>Cari qiyməti y-ə vurur</td></tr>\n      <tr><td><code>x /= y</code></td><td><code>x = x / y</code></td><td>Cari qiyməti y-ə bölür</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Zəncirvari Mənimsətmə və Sağdan-Sola İcra Qaydası</h4>\n<p>JavaScript-də mənimsətmə operatorları <strong>sağdan-sola assosiativliyə (right-to-left associativity)</strong> malikdir. Bu xüsusiyyət bir neçə dəyişənə eyni anda vahid qiymət verməyə imkan yaradır:</p>\n\n<pre><code>let a, b, c;\na = b = c = 5 + 5;\n// 1. Əvvəlcə ən sağdakı ifadə hesablanır: 5 + 5 = 10\n// 2. c = 10 mənimsədilir\n// 3. b = 10 mənimsədilir\n// 4. a = 10 mənimsədilir\nconsole.log(a, b, c); // 10 10 10</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Sıralama Qüsuru:</strong> <code>x += 10</code> düzgün mənimsətmədir. Lakin diqqətsizlikdən <code>x =+ 10</code> yazıldıqda mühərrik bunu mənimsətmə kimi deyil, sadəcə müsbət 10 ədədinin mənimsədilməsi kimi başa düşür və əvvəlki dəyəri silir!\n</div>",
        "codeExamples": [
          {
            "title": "Mürəkkəb Mənimsətmə Nümunəsi",
            "code": "let balans = 100;\nbalans += 50;  // balans = 150\nbalans *= 2;   // balans = 300\nbalans -= 100; // balans = 200\nbalans /= 4;   // balans = 50\nconsole.log(\"Yekun balans:\", balans);",
            "output": "Yekun balans: 50"
          },
          {
            "title": "Mətnin Dinamik Quraşdırılması",
            "code": "let hekaye = \"Bir vaxtlar \";\nhekaye += \"qədim bir şəhərdə \";\nhekaye += \"kod yazılırdı.\";\nconsole.log(hekaye);",
            "output": "Bir vaxtlar qədim bir şəhərdə kod yazılırdı."
          }
        ],
        "exercises": [
          {
            "id": "ex-3-2-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Hesab Balansının Artırılması",
            "instruction": "Mövcud 200 vahidlik <code>balans</code> göstəricisinin üzərinə əlavə 50 vahid məbləğ toplayaraq yeni balansı (250) konsol ekranında əks etdirin.",
            "starterCode": "let balans = 200;\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "250",
            "hint": "Dəyişənin dəyərini mövcud qiymətin üzərinə artırmaq üçün qısaldılmış += toplama mənimsətmə operatorundan istifadə edə bilərsiniz.",
            "solutionCode": "let balans = 200;\nbalans += 50;\nconsole.log(balans);"
          },
          {
            "id": "ex-3-2-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "İnkremensiya ilə Vahid Artım",
            "instruction": "İlkin göstəricisi 10 olan <code>say</code> dəyişənini bir vahid artıraraq yekun qiyməti konsolda əks etdirin.",
            "starterCode": "let say = 10;\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "11",
            "hint": "Dəyişənin dəyərini tək bir vahid artırmaq üçün unar inkrement (++) operatorundan istifadə olunur.",
            "solutionCode": "let say = 10;\nsay++;\nconsole.log(say);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-3-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Mənimsətmə Operatorunun Sazlanması",
            "instruction": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
            "description": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
            "buggyCode": "let xal = 20;\nxal =+ 10;\nconsole.log(xal);",
            "correctCode": "let xal = 20;\nxal += 10;\nconsole.log(xal);",
            "correctOutput": "30",
            "expectedOutput": "30",
            "explanation": "Toplama mənimsətmə operatoru '+=' şəklində yazılmalıdır. '=+' yazıldıqda isə mühərrik bunu '+10' ədədinin mənimsədilməsi kimi başa düşür."
          }
        ],
        "bugFix": {
          "id": "bug-3-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mənimsətmə Operatorunun Sazlanması",
          "instruction": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
          "description": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
          "buggyCode": "let xal = 20;\nxal =+ 10;\nconsole.log(xal);",
          "correctCode": "let xal = 20;\nxal += 10;\nconsole.log(xal);",
          "correctOutput": "30",
          "expectedOutput": "30",
          "explanation": "Toplama mənimsətmə operatoru '+=' şəklində yazılmalıdır. '=+' yazıldıqda isə mühərrik bunu '+10' ədədinin mənimsədilməsi kimi başa düşür."
        }
      },
      {
        "id": "topic-3-3",
        "title": "Ciddi Bərabərlik (===, !==) vs Boş Bərabərlik (==, !=) və Operator Prioriteti",
        "theory": "<h3>⚖️ Müqayisə: Ciddi (<code>===</code>) vs Boş (<code>==</code>)</h3>\n<p>İki dəyəri müqayisə edərkən ən vacib prinsip:</p>\n<ul>\n  <li><strong>Ciddi Bərabərlik (<code>===</code> və <code>!==</code>):</strong> Həm dəyəri, həm də <strong>məlumat tipini</strong> yoxlayır. Əgər tiplər fərqlidirsə, nəticə dərhal <code>false</code> olur. (Məsələn: <code>5 === \"5\" (\rightarrow) false</code>).</li>\n  <li><strong>Boş Bərabərlik (<code>==</code> və <code>!=</code>):</strong> Tiplər fərqli olduqda arxa fonda gizli və gözlənilməz çevrilmələr edir. Peşəkar kodda <strong>antipattern</strong> sayılır!</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Pasport Nəzarəti Analogiyası:</strong> Boş bərabərlik (<code>==</code>) yalnız üz şəklinə baxan səhlənkar nəzarətçidir. Ciddi bərabərlik (<code>===</code>) isə həm şəkli, həm də pasportun çipini və vətəndaşlıq bazasını yoxlayan etibarlı sərhəd sistemidir!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Boş Bərabərliyin (==) Tələləri və Operator Prioriteti Cədvəli</h4>\n<p>Boş bərabərlik zamanı <em>Abstract Equality Comparison Algorithm</em>-in yaratdığı qəribəliklər:</p>\n<div class=\"warning-box\">\n  <strong>⚠️ Təhlükəli '==' Nəticələri:</strong><br>\n  • <code>\"\" == 0 (\rightarrow) true</code> (Boş mətn 0-a çevrilir!)<br>\n  • <code>false == 0 (\rightarrow) true</code> (false ədədə çevrilərək 0 olur!)<br>\n  • <code>null == undefined (\rightarrow) true</code><br>\n  • <code>[] == false (\rightarrow) true</code>\n</div>\n\n<p><strong>Operator Prioriteti (Precedence) Pilləkəni:</strong></p>\n<ol>\n  <li><strong>Mötərizə <code>( )</code>:</strong> Ən yüksək prioritet (istənilən növbəni dəyişir).</li>\n  <li><strong>Qüvvət <code>**</code>:</strong> Sağdan-sola hesablanır (<code>2 ** 3 ** 2 = 512</code>).</li>\n  <li><strong>Vurma və Bölmə (<code>*</code>, <code>/</code>, <code>%</code>):</strong> Toplama və çıxmadan əvvəl gəlir.</li>\n  <li><strong>Toplama və Çıxma (<code>+</code>, <code>-</code>)</strong></li>\n  <li><strong>Müqayisələr (<code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>)</strong></li>\n  <li><strong>Bərabərlik (<code>===</code>, <code>!==</code>)</strong></li>\n  <li><strong>Məntiqi:</strong> <code>!</code> &gt; <code>&&</code> &gt; <code>||</code>.</li>\n</ol>",
        "codeExamples": [
          {
            "title": "Ciddi və Boş Bərabərlik Nümunələri",
            "code": "console.log(5 === \"5\"); // false (Fərqli tiplər: number vs string)\nconsole.log(5 == \"5\");  // true (Mətn ədədə çevrildi)\nconsole.log(0 === false); // false\nconsole.log(0 == false);  // true\nconsole.log(null === undefined); // false\nconsole.log(null == undefined);  // true",
            "output": "false\ntrue\nfalse\ntrue\nfalse\ntrue"
          },
          {
            "title": "Operator Prioriteti Hesablaması",
            "code": "const netice1 = 10 + 5 * 2;     // 10 + 10 = 20\nconst netice2 = (10 + 5) * 2;   // 15 * 2 = 30\nconsole.log(\"Mötərizəsiz:\", netice1);\nconsole.log(\"Mötərizəli:\", netice2);",
            "output": "Mötərizəsiz: 20\nMötərizəli: 30"
          }
        ],
        "exercises": [
          {
            "id": "ex-3-3-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Ciddi Bərabərliklə Tip Fərqinin Yoxlanılması",
            "instruction": "Ədəd tipli <code>10</code> ilə simvol tipli <code>\"10\"</code> dəyərlərinin bərabərliyini ciddi bərabərlik (<code>===</code>) operatoru ilə yoxlayaraq nəticəni konsolda əks etdirin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "false",
            "hint": "Ciddi bərabərlik operatoru tiplər eyni olmadıqda avtomatik olaraq false qiyməti qaytarır.",
            "solutionCode": "console.log(10 === \"10\");"
          },
          {
            "id": "ex-3-3-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Ciddi Fərqlilik Operatorunun Tətbiqi",
            "instruction": "İki fərqli dəyərin — <code>5</code> ədədi ilə <code>10</code> ədədinin bir-birindən fərqli olduğunu ciddi fərqlilik (<code>!==</code>) operatoru ilə yoxlayaraq nəticəni konsola çıxarın.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "true",
            "hint": "Ciddi fərqlilik operatoru (!==) dəyərlər həqiqətən bir-birinə bərabər olmadıqda true qaytarır.",
            "solutionCode": "console.log(5 !== 10);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-3-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Müqayisə Əməliyyatının Bərpası",
            "instruction": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
            "description": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
            "buggyCode": "let a = 10;\nlet b = 20;\nconsole.log(a = b);",
            "correctCode": "let a = 10;\nlet b = 20;\nconsole.log(a === b);",
            "correctOutput": "false",
            "expectedOutput": "false",
            "explanation": "Müqayisə üçün tək bərabərlik (=) istifadə edilə bilməz, ciddi müqayisə üçün === istifadə edilməlidir."
          }
        ],
        "bugFix": {
          "id": "bug-3-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Müqayisə Əməliyyatının Bərpası",
          "instruction": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
          "description": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
          "buggyCode": "let a = 10;\nlet b = 20;\nconsole.log(a = b);",
          "correctCode": "let a = 10;\nlet b = 20;\nconsole.log(a === b);",
          "correctOutput": "false",
          "expectedOutput": "false",
          "explanation": "Müqayisə üçün tək bərabərlik (=) istifadə edilə bilməz, ciddi müqayisə üçün === istifadə edilməlidir."
        }
      },
      {
        "id": "topic-3-4",
        "title": "Məntiqi Operatorlar (&&, ||, !), Short-Circuit, Nullish Coalescing (??) və Bitwise",
        "theory": "<h3>🧠 Məntiqi Şərt Operatorları</h3>\n<p>Məntiqi qərarlar vermək üçün üç əsas operator mövcuddur:</p>\n<ul>\n  <li><strong><code>&&</code> (Məntiqi VƏ - AND):</strong> Yalnız <strong>hər iki tərəf true</strong> olduqda <code>true</code> verir.</li>\n  <li><strong><code>||</code> (Məntiqi VƏ YA - OR):</strong> Tərəflərdən <strong>heç olmasa biri true</strong> olduqda <code>true</code> verir.</li>\n  <li><strong><code>!</code> (Məntiqi İNKAR - NOT):</strong> Boolean dəyəri əksinə çevirir (<code>!true (\rightarrow) false</code>).</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Mühafizə Qapısı Analogiyası:</strong><br>\n  • <strong>VƏ (&&):</strong> Təyyarəyə minmək üçün həm <strong>bilet</strong>, həm də <strong>şəxsiyyət vəsiqəsi</strong> lazımdır.<br>\n  • <strong>VƏ YA (||):</strong> Muzeyə endirimlə girmək üçün ya <strong>tələbə bileti</strong>, ya da <strong>veteran vəsiqəsi</strong> kifayətdir.\n</div>\n\n<p><strong>Qısa Qapanma (Short-Circuit Evaluation):</strong> Əgər <code>A && B</code> ifadəsində <code>A</code> yalandırsa, mühərrik <code>B</code>-yə baxmır və birbaşa <code>false</code> qaytarır. Əgər <code>A || B</code> ifadəsində <code>A</code> doğrudursa, mühərrik dərhal <code>true</code> qaytarır.</p>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Nullish Coalescing (??), 0-ın Qorunması və İkilik Bitwise (XOR) Möcüzəsi</h4>\n<p><strong>Nullish Coalescing (<code>??</code>) vs Məntiqi VƏ YA (<code>||</code>):</strong></p>\n<p>Defolt (standart) dəyər verərkən <code>||</code> operatoru təhlükəlidir: o, <code>0</code> və <code>\"\"</code> dəyərlərini də yalan (falsy) sayaraq məhv edir!</p>\n<pre><code>const xal = 0;\nconst netice1 = xal || 10; // 10! (XƏTA: 0 itdi!)\nconst netice2 = xal ?? 10; // 0 (Düzgün: ?? yalnız null və undefined üçün işə düşür)</code></pre>\n\n<p><strong>İkilik Bitwise Əsasları:</strong></p>\n<ul>\n  <li><strong>Bitwise AND (<code>& 1</code>):</strong> Ədədin son bitini yoxlayır. <code>(eded & 1) === 0</code> cüt, <code>1</code> təkdir.</li>\n  <li><strong>Bitwise XOR (<code>^</code> - İstisna VƏ YA):</strong>\n    <ul>\n      <li>Eyni iki ədədin XOR-u həmişə <strong>0</strong>-dır: <code>x ^ x === 0</code>.</li>\n      <li>0 ilə XOR ədədin <strong>özünü</strong> saxlayır: <code>x ^ 0 === x</code>.</li>\n      <li><em>Alqoritmik möcüzə:</em> Cütləşmiş ədədlər massivində (məs: <code>[4, 1, 2, 1, 2]</code>) təkrar olunmayan yeganə unikal ədədi (O(n)) zaman və (O(1)) yaddaşla tapmaq üçün bütün massiv ardıcıl XOR edilir!</li>\n    </ul>\n  </li>\n</ul>",
        "codeExamples": [
          {
            "title": "Short-Circuit və Nullish Coalescing (??)",
            "code": "const girisSayi = 0;\nconst defoltOR = girisSayi || 10; // 10 (Sıfır itdi!)\nconst defoltNullish = girisSayi ?? 10; // 0 (Qorundu)\n\nconsole.log(\"OR ilə:\", defoltOR);\nconsole.log(\"Nullish ilə:\", defoltNullish);",
            "output": "OR ilə: 10\nNullish ilə: 0"
          },
          {
            "title": "Bitwise XOR ilə Yeganə Elementin Tapılması",
            "code": "const massiv = [7, 3, 5, 3, 7];\nlet unikal = 0;\nfor (let i = 0; i < massiv.length; i++) {\n  unikal ^= massiv[i];\n}\nconsole.log(\"Cütləşməyən unikal ədəd:\", unikal);",
            "output": "Cütləşməyən unikal ədəd: 5"
          }
        ],
        "exercises": [
          {
            "id": "ex-3-4-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Məntiqi Konyunksiya Qiymətləndirilməsi",
            "instruction": "İki məntiqi vəziyyətdən birincisinin doğru (true), ikincisinin isə yalan (false) olduğu halda hər iki şərtin eyni vaxtda ödənməsi tələbini qiymətləndirərək konsol çıxışına ötürün.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "false",
            "hint": "Məntiqi VƏ (&&) operatoru yalnız hər iki tərəf doğru olduqda true, tərəflərdən biri belə yalan olduqda false qaytarır.",
            "solutionCode": "console.log(true && false);"
          },
          {
            "id": "ex-3-4-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Məntiqi İnkar Əməliyyatı",
            "instruction": "Yalan (false) məntiqi vəziyyətini əksinə çevirərək (inversiya edərək) yaranan həqiqi qiyməti konsolda əks etdirin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "true",
            "hint": "Məntiqi inkar üçün nida (!) operatorundan istifadə olunur; o, true dəyərini false-a, false dəyərini isə true-ya çevirir.",
            "solutionCode": "console.log(!false);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-3-4-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Məntiqi VƏ Operatorunun Sazlanması",
            "instruction": "Proqramçı iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
            "description": "Proqramçı iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
            "buggyCode": "let a = true;\nlet b = true;\nconsole.log(a and b);",
            "correctCode": "let a = true;\nlet b = true;\nconsole.log(a && b);",
            "correctOutput": "true",
            "expectedOutput": "true",
            "explanation": "JavaScript-də məntiqi VƏ operatoru 'and' deyil, '&&' simvoludur."
          }
        ],
        "bugFix": {
          "id": "bug-3-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Məntiqi VƏ Operatorunun Sazlanması",
          "instruction": "Proqramçı iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
          "description": "Proqramçı regex iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
          "buggyCode": "let a = true;\nlet b = true;\nconsole.log(a and b);",
          "correctCode": "let a = true;\nlet b = true;\nconsole.log(a && b);",
          "correctOutput": "true",
          "expectedOutput": "true",
          "explanation": "JavaScript-də məntiqi VƏ operatoru 'and' deyil, '&&' simvoludur."
        }
      }
    ]
  },
  {
    "id": "section-4",
    "title": "Bölmə 4: Şərt İfadələri (if-else, ternary, switch-case)",
    "icon": "🔀",
    "topics": [
      {
        "id": "topic-4-1",
        "title": "if, else if və else Strukturu və Qoruyucu Şərtlər (Guard Clauses)",
        "theory": "<h3>🔀 Şərt İfadələri və Budaqlanan Qərarlar</h3>\n<p>Proqramın icra axını müəyyən şərtlərin doğru (<code>true</code>) və ya yalan (<code>false</code>) olmasından asılı olaraq müxtəlif yollara ayrıla bilər. Bunun üçün ən təməl mexanizm <strong><code>if</code>, <code>else if</code> və <code>else</code></strong> bloklarıdır:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Dəmir Yolu Keçidi Analogiyası:</strong> Qatara yol verərkən relslərin oxu necə dəyişirsə, <code>if</code> şərtləri də kodun axınını eləcə fərqli relslərə (bloklara) yönləndirir!\n</div>\n\n<h4>Budaqlanma Strukturunun Pillələri:</h4>\n<ul>\n  <li><code>if (şərt)</code>: Şərt doğru olduqda birinci blok icra olunur.</li>\n  <li><code>else if (başqaŞərt)</code>: Əvvəlki şərt yalan olduqda növbəti variantı yoxlayır.</li>\n  <li><code>else</code>: Heç bir şərt ödənmədikdə işə düşən son ehtiyat qapısıdır.</li>\n</ul>\n\n<pre><code>const bal = 75;\nif (bal >= 90) {\n  console.log(\"Əla\");\n} else if (bal >= 70) {\n  console.log(\"Yaxşı\");\n} else {\n  console.log(\"Kafi\");\n}</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Sintaksis Qaydası:</strong> JavaScript-də Python-dakı kimi <code>elif</code> yoxdur! Hər iki söz mütləq aralı yazılmalıdır: <code>else if</code>.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Qoruyucu Şərtlər (Guard Clauses) və Dərin İç-İçəlikdən Xilas</h4>\n<p>İç-içə yazılmış saysız-hesabsız <code>if</code> blokları kodu sağa doğru sürükləyir və \"Piramida Antipatterni\" yaradır. Müasir mühəndislikdə bu problem <strong>Guard Clauses (Qoruyucu Şərtlər)</strong> ilə həll edilir:</p>\n\n<pre><code>// ❌ ANTİPATTERN (Çətin oxunan iç-içə if şərtləri):\nfunction xidmetGoster(user) {\n  if (user) {\n    if (user.aktivdir) {\n      if (user.balans > 0) {\n        console.log(\"Xidmət aktivdir!\");\n      }\n    }\n  }\n}\n\n//  TÖVSİYƏ EDİLƏN MÜHƏNDİSLİK YANAŞMASI (Guard Clauses):\nfunction xidmetGoster(user) {\n  if (!user) return; // Səhv halı dərhal xaric et\n  if (!user.aktivdir) return;\n  if (user.balans <= 0) return;\n\n  // Əsas biznes məntiqi ən aşağıda təmiz qalır:\n  console.log(\"Xidmət aktivdir!\");\n}</code></pre>",
        "codeExamples": [
          {
            "title": "Çoxşaxəli if - else if Qiymətləndirməsi",
            "code": "const bal = 82;\n\nif (bal >= 90) {\n  console.log(\"Əla (A)\");\n} else if (bal >= 80) {\n  console.log(\"Çox yaxşı (B)\");\n} else if (bal >= 70) {\n  console.log(\"Yaxşı (C)\");\n} else {\n  console.log(\"Kəsildi (F)\");\n}",
            "output": "Çox yaxşı (B)"
          },
          {
            "title": "Guard Clause (Qoruyucu Şərt) Nümunəsi",
            "code": "function qeydiyyat(yas) {\n  if (yas < 18) {\n    return \"Yaş uyğun deyil!\";\n  }\n  return \"Qeydiyyat tamamlandı!\";\n}\n\nconsole.log(qeydiyyat(16));\nconsole.log(qeydiyyat(22));",
            "output": "Yaş uyğun deyil!\nQeydiyyat tamamlandı!"
          }
        ],
        "exercises": [
          {
            "id": "ex-4-1-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Yetkinlik İcazəsinin Yoxlanması",
            "instruction": "Sistemdə qeydiyyatdan keçən istifadəçinin yaşı <code>yas</code> dəyişənində saxlanılır. Yaş həddi minimum 18 və daha yuxarı olduqda konsola <code>İcazə verildi</code> bildirişini çıxarın.",
            "starterCode": "const yas = 20;\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "İcazə verildi",
            "hint": "Şərt yoxlaması üçün if blokundan istifadə edin və şərt ödəndikdə tələb olunan mətni çıxışa verin.",
            "solutionCode": "const yas = 20;\nif (yas >= 18) {\n  console.log(\"İcazə verildi\");\n}"
          },
          {
            "id": "ex-4-1-2",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Ədədin Paritet Təyini (Cüt və ya Tək)",
            "instruction": "Verilmiş <code>eded</code> qiymətinin cüt və ya tək olduğunu riyazi olaraq müəyyənləşdirin; ədəd 2-yə qalıqsız bölünürsə konsola <code>Cüt</code>, əks halda <code>Tək</code> mesajını yazdırın.",
            "starterCode": "const eded = 7;\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Tək",
            "hint": "Ədədin 2-yə bölünməsindən qalan qalığı (eded % 2 === 0) yoxlamaq üçün if-else strukturundan istifadə edin.",
            "solutionCode": "const eded = 7;\nif (eded % 2 === 0) {\n  console.log(\"Cüt\");\n} else {\n  console.log(\"Tək\");\n}"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-4-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Budaqlanan Şərt Sintaksisinin Sazlanması",
            "instruction": "Proqramçı saat dəyərinə uyğun salamlama mesajını ('Hər vaxtınız xeyir') konsola çıxarmaq istəyir, lakin skriptdə 'SyntaxError: Unexpected token' xətası baş verir və icra dayanır. Kodu araşdırın, JavaScript-in çoxşaxəli şərt sintaksisini tənzimləyərək xətanı aradan qaldırın.",
            "description": "Proqramçı saat dəyərinə uyğun salamlama mesajını ('Hər vaxtınız xeyir') konsola çıxarmaq istəyir, lakin skriptdə 'SyntaxError: Unexpected token' xətası baş verir və icra dayanır. Kodu araşdırın, JavaScript-in çoxşaxəli şərt sintaksisini tənzimləyərək xətanı aradan qaldırın.",
            "buggyCode": "let saat = 14;\nif (saat < 12) {\n  console.log(\"Sabahınız xeyir\");\n} elif (saat < 18) {\n  console.log(\"Hər vaxtınız xeyir\");\n}",
            "correctCode": "let saat = 14;\nif (saat < 12) {\n  console.log(\"Sabahınız xeyir\");\n} else if (saat < 18) {\n  console.log(\"Hər vaxtınız xeyir\");\n}",
            "correctOutput": "Hər vaxtınız xeyir",
            "expectedOutput": "Hər vaxtınız xeyir",
            "explanation": "JavaScript-də 'elif' sözü yoxdur, onun yerinə iki ayrı sözlə 'else if' yazılmalıdır."
          }
        ],
        "bugFix": {
          "id": "bug-4-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Budaqlanan Şərt Sintaksisinin Sazlanması",
          "instruction": "Proqramçı saat dəyərinə uyğun salamlama mesajını ('Hər vaxtınız xeyir') konsola çıxarmaq istəyir, lakin skriptdə 'SyntaxError: Unexpected token' xətası baş verir və icra dayanır. Kodu araşdırın, JavaScript-in çoxşaxəli şərt sintaksisini tənzimləyərək xətanı aradan qaldırın.",
          "description": "Proqramçı saat dəyərinə uyğun salamlama mesajını ('Hər vaxtınız xeyir') konsola çıxarmaq istəyir, lakin skriptdə 'SyntaxError: Unexpected token' xətası baş verir və icra dayanır. Kodu araşdırın, JavaScript-in çoxşaxəli şərt sintaksisini tənzimləyərək xətanı aradan qaldırın.",
          "buggyCode": "let saat = 14;\nif (saat < 12) {\n  console.log(\"Sabahınız xeyir\");\n} elif (saat < 18) {\n  console.log(\"Hər vaxtınız xeyir\");\n}",
          "correctCode": "let saat = 14;\nif (saat < 12) {\n  console.log(\"Sabahınız xeyir\");\n} else if (saat < 18) {\n  console.log(\"Hər vaxtınız xeyir\");\n}",
          "correctOutput": "Hər vaxtınız xeyir",
          "expectedOutput": "Hər vaxtınız xeyir",
          "explanation": "JavaScript-də 'elif' sözü yoxdur, onun yerinə iki ayrı sözlə 'else if' yazılmalıdır."
        }
      },
      {
        "id": "topic-4-2",
        "title": "Üçlü Şərt Operatoru (Ternary Operator) və Zəncirvari Şərtlər",
        "theory": "<h3>❓ Üçlü (Ternary) Şərt Operatoru Nədir?</h3>\n<p>Üçlü şərt operatoru (<code>? :</code>) sadə <code>if...else</code> blokunun tək sətirlik, yığcam və dəyər qaytaran formasıdır:</p>\n<pre><code>şərt ? doğruOlduqdaDəyər : yalanOlduqdaDəyər;</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Qəpik Atma Analogiyası:</strong> Qəpik havaya atılır: xəritə düşsə (true) — <strong>\"Uddun\"</strong>, rəqəm düşsə (false) — <strong>\"Uduzdun\"</strong>!\n</div>\n\n<p><strong>Niyə çox sevilir?</strong> Çünki o bir ifadədir (expression) və birbaşa <code>const</code> sabitinə mənimsədilə bilər:</p>\n<pre><code>const status = yas >= 18 ? \"Yetkin\" : \"Yeniyetmə\";</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Zəncirvari Ternary və Oxunaqlıq Hədləri</h4>\n<p>Bir neçə şərti zəncirvari bağlamaq mümkündür:</p>\n<pre><code>const bal = 75;\nconst qiymet = bal >= 90 ? \"A\"\n             : bal >= 75 ? \"B\"\n             : bal >= 60 ? \"C\"\n             : \"F\";</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Oxunaqlıq Sərhədi:</strong> Əgər zəncir 2 səviyyədən artıq dərinləşirsə, ternary operatoru kodun oxunmasını xeyli çətinləşdirir. Bu hallarda standart <code>if...else if</code> və ya <code>switch</code> seçilməlidir!\n</div>",
        "codeExamples": [
          {
            "title": "Ternary Operatoru ilə Dəyişən Mənimsədilməsi",
            "code": "const balans = 250;\nconst catdirilmaPulu = balans >= 200 ? 0 : 10;\nconsole.log(\"Çatdırılma haqqı:\", catdirilmaPulu);",
            "output": "Çatdırılma haqqı: 0"
          },
          {
            "title": "Zəncirvari Qiymətləndirmə",
            "code": "const saat = 15;\nconst mesaj = saat < 12 ? \"Sabahınız xeyir\"\n            : saat < 18 ? \"Hər vaxtınız xeyir\"\n            : \"Axşamınız xeyir\";\nconsole.log(mesaj);",
            "output": "Hər vaxtınız xeyir"
          }
        ],
        "exercises": [
          {
            "id": "ex-4-2-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "Qısa Şərt Operatoru ilə Status Təyini",
            "instruction": "İstifadəçinin 18 yaş tələbinə uyğunluğunu tək sətirlik yığcam şərt ifadəsi ilə yoxlayın: yaş uyğundursa <code>Bəli</code>, uyğun deyilsə <code>Xeyr</code> cavabını konsolda əks etdirin.",
            "starterCode": "const yas = 16;\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Xeyr",
            "hint": "yas >= 18 şərtini ternary (? :) operatoruna ötürün və şərt ödənəndə Bəli, əks halda Xeyr qaytarın.",
            "solutionCode": "const yas = 16;\nconst cavab = yas >= 18 ? \"Bəli\" : \"Xeyr\";\nconsole.log(cavab);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-4-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Ternary Operatorunda İki Nöqtə Ayrıcı Xətası",
            "instruction": "Proqramçı ternary operatoru vasitəsilə istifadəçiyə 'Xoş gəldiniz' bildirişini təqdim etmək istəyir, lakin skriptdə 'SyntaxError' baş verir və kod işləmir. Kodu tədqiq edin, ternary operatorunun strukturunu bərpa edərək hədəf bildirişi konsola çıxarın.",
            "description": "Proqramçı ternary operatoru vasitəsilə istifadəçiyə 'Xoş gəldiniz' bildirişini təqdim etmək istəyir, lakin skriptdə 'SyntaxError' baş verir və kod işləmir. Kodu tədqiq edin, ternary operatorunun strukturunu bərpa edərək hədəf bildirişi konsola çıxarın.",
            "buggyCode": "let daxilOlub = true;\nlet mesaj = daxilOlub ? \"Xoş gəldiniz\", \"Zəhmət olmasa daxil olun\";\nconsole.log(mesaj);",
            "correctCode": "let daxilOlub = true;\nlet mesaj = daxilOlub ? \"Xoş gəldiniz\" : \"Zəhmət olmasa daxil olun\";\nconsole.log(mesaj);",
            "correctOutput": "Xoş gəldiniz",
            "expectedOutput": "Xoş gəldiniz",
            "explanation": "Üçlü (ternary) operatorun sintaksisi 'şərt ? ifadə1 : ifadə2' kimidir (arada iki nöqtə olmalıdır)."
          }
        ],
        "bugFix": {
          "id": "bug-4-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Ternary Operatorunda İki Nöqtə Ayrıcı Xətası",
          "instruction": "Proqramçı ternary operatoru vasitəsilə istifadəçiyə 'Xoş gəldiniz' bildirişini təqdim etmək istəyir, lakin skriptdə 'SyntaxError' baş verir və kod işləmir. Kodu tədqiq edin, ternary operatorunun strukturunu bərpa edərək hədəf bildirişi konsola çıxarın.",
          "description": "Proqramçı ternary operatoru vasitəsilə istifadəçiyə 'Xoş gəldiniz' bildirişini təqdim etmək istəyir, lakin skriptdə 'SyntaxError' baş verir və kod işləmir. Kodu tədqiq edin, ternary operatorunun strukturunu bərpa edərək hədəf bildirişi konsola çıxarın.",
          "buggyCode": "let daxilOlub = true;\nlet mesaj = daxilOlub ? \"Xoş gəldiniz\", \"Zəhmət olmasa daxil olun\";\nconsole.log(mesaj);",
          "correctCode": "let daxilOlub = true;\nlet mesaj = daxilOlub ? \"Xoş gəldiniz\" : \"Zəhmət olmasa daxil olun\";\nconsole.log(mesaj);",
          "correctOutput": "Xoş gəldiniz",
          "expectedOutput": "Xoş gəldiniz",
          "explanation": "Üçlü (ternary) operatorun sintaksisi 'şərt ? ifadə1 : ifadə2' kimidir (arada iki nöqtə olmalıdır)."
        }
      },
      {
        "id": "topic-4-3",
        "title": "switch...case İfadəsi, Ciddi Bərabərlik və Fall-Through Mexanizmi",
        "theory": "<h3>🔘 Çoxvariantlı Seçim: <code>switch...case</code></h3>\n<p>Bir dəyişənin dəyərini bir neçə dəqiq sabit qiymətlə müqayisə etmək üçün <strong><code>switch</code></strong> strukturundan istifadə olunur:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Qəhvə Aparatı Analogiyası:</strong> Düymə 1 (\rightarrow) Espresso, Düymə 2 (\rightarrow) Qara qəhvə, Düymə 3 (\rightarrow) Çay! Hər bir düymə ayrıca bir <code>case</code> kimidir.\n</div>\n\n<pre><code>const reng = \"yasil\";\nswitch (reng) {\n  case \"qirmizi\":\n    console.log(\"Dayan\");\n    break;\n  case \"yasil\":\n    console.log(\"Keç\");\n    break;\n  default:\n    console.log(\"Naməlum işıq\");\n    break;\n}</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Şüurlu Fall-Through (Qruplaşdırma) və Daxili Ciddi Bərabərlik (===)</h4>\n<p><strong>1. Daxildə Ciddi Bərabərlik (<code>===</code>):</strong><br>\n<code>switch</code> daxilindəki <code>case</code> yoxlamaları arxa fonda həmişə <strong>ciddi bərabərliklə</strong> işləyir. Yəni <code>\"1\"</code> (string) dəyəri <code>case 1:</code> (number) ilə qətiyyən uyğun gəlməyəcəkdir!</p>\n\n<p><strong>2. Şüurlu Fall-Through (Aşağı Axın) Mexanizmi:</strong><br>\nƏgər <code>case</code> blokunun sonuna <code>break</code> qoyulmazsa, mühərrik sonrakı case-ləri şərtinə baxmadan icra edəcəkdir. Bu xüsusiyyətdən bir neçə variantı eyni qrupda birləşdirmək üçün şüurlu istifadə edilir:</p>\n\n<pre><code>const gun = 6;\nswitch (gun) {\n  case 1:\n  case 2:\n  case 3:\n  case 4:\n  case 5:\n    console.log(\"Həftə içi\");\n    break;\n  case 6:\n  case 7:\n    console.log(\"Həftə sonu 🎉\");\n    break;\n  default:\n    console.log(\"Yalnış gün nömrəsi\");\n}</code></pre>",
        "codeExamples": [
          {
            "title": "switch...case ilə İşıqfor Rejimi",
            "code": "const reng = \"sari\";\n\nswitch (reng) {\n  case \"qirmizi\":\n    console.log(\"Dayan!\");\n    break;\n  case \"sari\":\n    console.log(\"Hazırlaş!\");\n    break;\n  case \"yasil\":\n    console.log(\"Hərəkət et!\");\n    break;\n  default:\n    console.log(\"Yanlış rəng!\");\n    break;\n}",
            "output": "Hazırlaş!"
          },
          {
            "title": "Fall-Through ilə Kateqoriya Qruplaşdırması",
            "code": "const ay = 7;\n\nswitch (ay) {\n  case 12:\n  case 1:\n  case 2:\n    console.log(\"Fəsil: Qış\");\n    break;\n  case 6:\n  case 7:\n  case 8:\n    console.log(\"Fəsil: Yay\");\n    break;\n  default:\n    console.log(\"Digər fəsil\");\n    break;\n}",
            "output": "Fəsil: Yay"
          }
        ],
        "exercises": [
          {
            "id": "ex-4-3-1",
            "type": "algorithm",
            "disableHardcodeCheck": false,
            "title": "İşıqfor Hərəkət Siqnalının Seçilməsi",
            "instruction": "Nəqliyyat sistemində svetoforun cari rənginə (<code>reng</code>) uyğun hərəkət qərarını seçin: qırmızı rəngdə <code>Dayan</code>, yaşıl rəngdə isə <code>Keç</code> komandasını konsola verin.",
            "starterCode": "const reng = \"qirmizi\";\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Dayan",
            "hint": "Dəqiq dəyər uyğunluqlarını çoxvariantlı yoxlamaq üçün switch-case strukturundan və break əmrlərindən istifadə edin.",
            "solutionCode": "const reng = \"qirmizi\";\nswitch (reng) {\n  case \"qirmizi\":\n    console.log(\"Dayan\");\n    break;\n  case \"yasil\":\n    console.log(\"Keç\");\n    break;\n}"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-4-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Switch İdarəetmə Axınının Sazlanması",
            "instruction": "Proqramçı switch konstruksiyası ilə həftənin 1-ci gününə uyğun olaraq yalnız 'Bazar ertəsi' mətni çap etmək istəyir, lakin icra zamanı sonrakı bloklara axın səbəbindən əlavə sətirlər də çap olunur. Kodu araşdırın, axını düzgün idarə edərək yalnız nəzərdə tutulan günün çıxmasını təmin edin.",
            "description": "Proqramçı switch konstruksiyası ilə həftənin 1-ci gününə uyğun olaraq yalnız 'Bazar ertəsi' mətni çap etmək istəyir, lakin icra zamanı sonrakı bloklara axın səbəbindən əlavə sətirlər də çap olunur. Kodu araşdırın, axını düzgün idarə edərək yalnız nəzərdə tutulan günün çıxmasını təmin edin.",
            "buggyCode": "let gun = 1;\nswitch(gun) {\n  case 1:\n    console.log(\"Bazar ertəsi\");\n  case 2:\n    console.log(\"Çərşənbə axşamı\");\n    break;\n}",
            "correctCode": "let gun = 1;\nswitch(gun) {\n  case 1:\n    console.log(\"Bazar ertəsi\");\n    break;\n  case 2:\n    console.log(\"Çərşənbə axşamı\");\n    break;\n}",
            "correctOutput": "Bazar ertəsi",
            "expectedOutput": "Bazar ertəsi",
            "explanation": "Case blokunun sonuna break qoyulmadıqda, JavaScript növbəti case-in kodunu da icra edir (fall-through)."
          }
        ],
        "bugFix": {
          "id": "bug-4-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Switch İdarəetmə Axınının Sazlanması",
          "instruction": "Proqramçı switch konstruksiyası ilə həftənin 1-ci gününə uyğun olaraq yalnız 'Bazar ertəsi' mətni çap etmək istəyir, lakin icra zamanı sonrakı bloklara axın səbəbindən əlavə sətirlər də çap olunur. Kodu araşdırın, axını düzgün idarə edərək yalnız nəzərdə tutulan günün çıxmasını təmin edin.",
          "description": "Proqramçı switch konstruksiyası ilə həftənin 1-ci gününə uyğun olaraq yalnız 'Bazar ertəsi' mətni çap etmək istəyir, lakin icra zamanı sonrakı bloklara axın səbəbindən əlavə sətirlər də çap olunur. Kodu araşdırın, axını düzgün idarə edərək yalnız nəzərdə tutulan günün çıxmasını təmin edin.",
          "buggyCode": "let gun = 1;\nswitch(gun) {\n  case 1:\n    console.log(\"Bazar ertəsi\");\n  case 2:\n    console.log(\"Çərşənbə axşamı\");\n    break;\n}",
          "correctCode": "let gun = 1;\nswitch(gun) {\n  case 1:\n    console.log(\"Bazar ertəsi\");\n    break;\n  case 2:\n    console.log(\"Çərşənbə axşamı\");\n    break;\n}",
          "correctOutput": "Bazar ertəsi",
          "expectedOutput": "Bazar ertəsi",
          "explanation": "Case blokunun sonuna break qoyulmadıqda, JavaScript növbəti case-in kodunu da icra edir (fall-through)."
        }
      }
    ]
  },
  {
    "id": "section-5",
    "title": "Bölmə 5: Dövrlər (for, while, for...of, for...in)",
    "icon": "🔄",
    "topics": [
      {
        "id": "topic-5-1",
        "title": "Klassik for Dövrü, Akkumulyator Modeli və İkiölçülü Matrislər (2D)",
        "theory": "<h3>🔄 Təkrarlanan Əməliyyatlar: Klassik <code>for</code></h3>\n<p>Eyni əməliyyatı müəyyən sayda təkrar icra etmək üçün <strong><code>for</code> dövründən</strong> istifadə olunur:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Stadion Qaçışı Analogiyası:</strong> Qaçışçı stadionu 5 dövrə qaçmalıdır. Başlanğıc: <code>1-ci dövrə</code>; Şərt: <code>dövrə &lt;= 5</code>; Hər dövrənin sonunda: <code>dövrə sayı 1 artır</code>!\n</div>\n\n<h4>for Başlığının Üç Hissəsi:</h4>\n<pre><code>for (başlanğıc; şərt; addım) {\n  // Təkrarlanacaq kod\n}</code></pre>\n<ul>\n  <li><strong>Başlanğıc:</strong> Sayğac dəyişəni elan edilir (məs: <code>let i = 1</code>).</li>\n  <li><strong>Şərt:</strong> Şərt <code>true</code> olduğu müddətcə dövr davam edir (məs: <code>i &lt;= 5</code>).</li>\n  <li><strong>Addım:</strong> Hər addımın sonunda sayğac dəyişir (məs: <code>i++</code>).</li>\n</ul>\n\n<p><strong>Akkumulyator (Toplayıcı) Modeli:</strong></p>\n<pre><code>let cem = 0; // Toplayıcı qutu\nfor (let i = 1; i &lt;= 4; i++) {\n  cem += i; // 1 + 2 + 3 + 4\n}\nconsole.log(cem); // 10</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: İç-İçə Dövrlər və İkiölçülü Matrislərin (2D Array) Koordinatları</h4>\n<p>Cədvəllər və tor strukturları <strong>ikiölçülü massivlərlə (2D Array)</strong> idarə olunur. İkiölçülü matrisi emal etmək üçün xarici dövr sətirləri (<code>i</code>), daxili dövr isə sütunları (<code>j</code>) gəzir:</p>\n\n<pre><code>const matris = [\n  [1, 2, 3],\n  [4, 5, 6]\n];\n\nfor (let i = 0; i &lt; matris.length; i++) {\n  for (let j = 0; j &lt; matris[i].length; j++) {\n    console.log(`Sətir: ${i}, Sütun: ${j} (\rightarrow) ${matris[i][j]}`);\n  }\n}</code></pre>",
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
        "theory": "<h3>⏳ Qeyri-Müəyyən İterasiyalar: <code>while</code> vs <code>do...while</code></h3>\n<p>Dövrün dəqiq neçə dəfə təkrarlanacağını əvvəlcədən bilmədikdə və proses yalnız bir şərt ödəndiyi müddətcə davam etməli olduqda <strong><code>while</code></strong> seçilir:</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Yemək Yemək Analogiyası:</strong><br>\n  • <strong><code>while (acıqmışam)</code> (Pre-test):</strong> Əvvəlcə ac olub-olmadığınızı yoxlayırsınız. Toxsunuzsa heç yeməyə başlamırsınız (0 dəfə icra).<br>\n  • <strong><code>do { dadına bax } while (bəyəndim);</code> (Post-test):</strong> Şorbanın dadına ən azı bir qaşıq mütləq baxırsınız, bəyənsəniz yeməyə davam edirsiniz (ən azı 1 dəfə zəmanətli icra)!\n</div>\n\n<pre><code>let say = 1;\nwhile (say <= 4) {\n  console.log(say);\n  say++; // Sayğacı mütləq artırmaq lazımdır!\n}</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Sonsuz Dövr Tələləri, Rəqəmlər Cəmi Alqoritmi və Dayandırılma Zəmanəti</h4>\n<p><strong>1. Sonsuz Dövr (Infinite Loop) Qorxusu:</strong><br>\nƏgər <code>while</code> blokunun daxilində şərti dəyişdirən addım (məs: <code>i++</code>) unudularsa, şərt əbədi olaraq <code>true</code> qalır və proqram donaraq çökür.</p>\n\n<p><strong>2. Tam Ədədin Rəqəmləri Cəminin Hesablanması:</strong><br>\nİxtiyari tam ədədin rəqəmlərini qoparıb cəmləmək üçün <code>while</code> alqoritmi:</p>\n<pre><code>let eded = 458;\nlet cem = 0;\n\nwhile (eded > 0) {\n  cem += eded % 10;          // Sonuncu rəqəmi əlavə et (8)\n  eded = Math.floor(eded / 10); // Son rəqəmi tam bölmə ilə sil (45)\n}\nconsole.log(\"Rəqəmlər Cəmi:\", cem); // 17</code></pre>",
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
        "theory": "<h3>🛑 Dövrün İdarəsi: <code>break</code> və <code>continue</code></h3>\n<p>Dövrün axınına müdaxilə etmək üçün iki güclü operator mövcuddur:</p>\n<ul>\n  <li><strong><code>break</code>:</strong> Dövrü <strong>tamamilə qırır və dayandırır</strong> (axtarılan hədəf tapıldıqda qalan minlərlə elementi gəzməmək üçün).</li>\n  <li><strong><code>continue</code>:</strong> Yalnız <strong>cari addımı atlayır</strong> və dərhal növbəti addıma keçir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Kitab Oxumaq Analogiyası:</strong><br>\n  • <strong><code>break</code>:</strong> Kitabda axtardığınız tərifi tapdınız, dərhal kitabı bağlayırsınız.<br>\n  • <strong><code>continue</code>:</strong> Kitabın 5-ci səhifəsi maraqsızdır, onu oxumadan atlayıb 6-cı səhifəyə keçirsiniz!\n</div>\n\n<pre><code>// continue ilə yalnız cüt ədədləri çap etmək:\nfor (let i = 1; i <= 4; i++) {\n  if (i % 2 !== 0) continue; // Tək ədədləri atla\n  console.log(i); // 2, 4\n}</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Etiketli Dövrlər (Labeled Loops) və Xarici İdarəetmə</h4>\n<p>Klassik <code>break</code> yalnız daxilində olduğu ən yaxın dövrü dayandırır. Bəs iç-içə dövrlərdə daxildən birbaşa <strong>ən xarici dövrü</strong> dayandırmaq lazım gəldikdə nə etməli?</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Etiket (Label) Mexanizmi:</strong> Xarici dövrə ad verərək (<code>xariciDovr: for (...)</code>) daxildən birbaşa <code>break xariciDovr;</code> əmri verə bilərsiniz:\n</div>\n\n<pre><code>xariciDovr: for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    if (i === 2 && j === 2) {\n      console.log(\"Hədəf tapıldı, hər iki dövr dayandırılır!\");\n      break xariciDovr; // Bütöv sistemi dərhal qırır!\n    }\n  }\n}</code></pre>",
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
        "theory": "<h3>🌟 Müasir Kolleksiya Dövrləri: <code>for...of</code> vs <code>for...in</code></h3>\n<p>Massiv və obyektləri rahat və təmiz gəzmək üçün iki fərqli dövr tətbiq olunur:</p>\n<ul>\n  <li><strong><code>for...of</code>:</strong> Massivlərin, sətirlərin və kolleksiyaların bilavasitə <strong>DƏYƏRLƏRİNİ (Values)</strong> gəzir.</li>\n  <li><strong><code>for...in</code>:</strong> Obyektlərin <strong>AÇARLARINI / XÜSUSİYYƏT ADLARINI (Keys)</strong> gəzir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Poçt Qutusu Analogiyası:</strong><br>\n  • <strong><code>for...of</code>:</strong> Bağlamanı açıb içindəki əşyaları bir-bir çıxarıb baxmaqdır.<br>\n  • <strong><code>for...in</code>:</strong> Qutunun üzərindəki yapışqanlı etiketləri (ad, ünvan, barkod açarlarını) oxumaqdır!\n</div>\n\n<pre><code>// Massivdə for...of:\nconst meyveler = [\"Alma\", \"Armud\"];\nfor (const m of meyveler) {\n  console.log(m); // \"Alma\", \"Armud\" (Dəyərlər!)\n}\n\n// Obyektdə for...in:\nconst user = { ad: \"Murad\", yas: 25 };\nfor (const acar in user) {\n  console.log(acar); // \"ad\", \"yas\" (Açarlar!)\n}</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Massivlərdə for...in Tələsi və Mühəndislik Alqoritmləri (Two-Pointer, RLE)</h4>\n<div class=\"warning-box\">\n  <strong>⚠️ Massivlərdə for...in Qadağandır:</strong><br>\n  1. <code>for...in</code> massiv elementlərinin indekslərini ədəd kimi deyil, <strong>String (\"0\", \"1\")</strong> kimi qaytarır.<br>\n  2. Massivin prototipinə sonradan əlavə edilmiş funksiyaları da dövrə salır (Prototype leak)! Massivlər üçün HƏMİŞƏ <code>for...of</code> istifadə edin.\n</div>\n\n<p><strong>Mühəndislik Alqoritmləri:</strong></p>\n\n<p><strong>1. Massivin Yerində Tərsinə Çevrilməsi (In-place Two-Pointer):</strong></p>\n<pre><code>function tersCevir(arr) {\n  let sol = 0, sag = arr.length - 1;\n  while (sol < sag) {\n    [arr[sol], arr[sag]] = [arr[sag], arr[sol]];\n    sol++;\n    sag--;\n  }\n  return arr;\n}\nconsole.log(tersCevir([1, 2, 3])); // [3, 2, 1]</code></pre>\n\n<p><strong>2. Run-Length Encoding (RLE) Məlumat Sıxılması:</strong></p>\n<pre><code>function rleSix(str) {\n  let netice = \"\", say = 1;\n  for (let i = 0; i < str.length; i++) {\n    if (str[i] === str[i + 1]) say++;\n    else { netice += str[i] + say; say = 1; }\n  }\n  return netice;\n}\nconsole.log(rleSix(\"AAABBC\")); // \"A3B2C1\"</code></pre>",
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_1_5 };
}
