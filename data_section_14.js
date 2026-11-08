var SECTIONS_14 = [
  {
    "id": "section-14",
    "title": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
    "icon": "🌐",
    "topics": [
      {
        "id": "topic-14-1",
        "title": "DOM Nədir və Elementlərin Seçilməsi",
        "theory": "<h3>🌐 DOM (Document Object Model) Nədir?</h3>\n<p>Veb səhifə brauzerə yükləndikdə, brauzer HTML sənədini oxuyur və onu yaddaşda iyerarxik <strong>ağac strukturuna (DOM Tree)</strong> çevirir. Bu ağacda hər bir HTML teqi (<code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>) canlı bir JavaScript obyektinə (<strong>Node / Element</strong>) çevrilir.</p>\n\n<p>JavaScript məhz <strong><code>document</code></strong> qlobal obyekti vasitəsilə bu ağaca daxil olur və səhifədəki istənilən elementi dinamik şəkildə idarə edir.</p>\n\n<div class=\"tip-box\">\n  <strong>🏢 Real Həyat Bənzətməsi: Mənzil Ünvan Kitabçası</strong>\n  <p>DOM çoxmərtəbəli bir binanın ünvan reyestri kimidir. Binadakı hər bir mənzilin öz unikal nömrəsi (<strong>ID</strong>) və ya aid olduğu mərtəbə növü (<strong>Class</strong>) var. JavaScript dəqiq ünvan seçicilərindən istifadə edərək istədiyi mənzilin qapısının zəngini çalır və içindəki əşyaları dəyişir.</p>\n</div>\n\n<h3>Elementləri Seçməyin Müasir Metodları:</h3>\n\n<ul>\n  <li><strong><code>document.getElementById(\"id\")</code>:</strong> Səhifədəki unikal ID-yə malik tək bir elementi qaytarır (element tapılmazsa <code>null</code> olur):\n    <pre><code>const basliq = document.getElementById(\"esas-basliq\");</code></pre>\n  </li>\n  <li><strong><code>document.querySelector(\"selector\")</code>:</strong> İstənilən CSS seçicisinə (<code>#id</code>, <code>.sinif</code>, <code>div > p</code>) uyğun gələn <strong>ən birinci elementi</strong> qaytarır:\n    <pre><code>const duyme = document.querySelector(\".tesdiq-btn\");\nconst ilkParaqraf = document.querySelector(\"article p\");</code></pre>\n  </li>\n  <li><strong><code>document.querySelectorAll(\"selector\")</code>:</strong> Şərtə uyğun gələn bütün elementləri <strong>NodeList</strong> kolleksiyası şəklində qaytarır. <code>forEach()</code> ilə asanlıqla dövr edilə bilər:\n    <pre><code>const kartlar = document.querySelectorAll(\".xeber-karti\");\nkartlar.forEach(kart => {\n  console.log(kart.textContent);\n});</code></pre>\n  </li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Qızıl Qayda:</strong><br>\n  • <code>querySelector</code> -> <strong>Tək Element</strong> qaytarır (birbaşa <code>element.textContent</code> yazmaq olar).<br>\n  • <code>querySelectorAll</code> -> <strong>Kolleksiya (NodeList)</strong> qaytarır. Birbaşa <code>kolleksiya.textContent</code> yazmaq OLMAZ! Əvvəlcə indekslə (<code>[0]</code>) və ya <code>forEach</code> ilə elementə çatmalısınız.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: NodeList vs HTMLCollection vs Əsl Massivlər (Array.from)</h4>\n<p>DOM elementləri toplusu ilə işləyərkən proqramçıların ən çox çaşdığı məqam kolleksiya tipləridir. <code>querySelectorAll</code> tərəfindən qaytarılan <strong>NodeList</strong> və köhnə metodların (məsələn, <code>getElementsByClassName</code>) qaytardığı <strong>HTMLCollection</strong> əsl JavaScript Massivi (Array) deyil:</p>\n\n<pre><code>const duymeler = document.querySelectorAll(\".btn\");\n\n// XƏTA: NodeList-in map() və ya filter() metodları yoxdur!\n// duymeler.map(b => b.id); // TypeError: duymeler.map is not a function\n\n// 1. Təhlükəsiz Massivə Çevirmə (Array.from və ya Spread):\nconst duymeMassivi = Array.from(duymeler);\n// və ya: const duymeMassivi = [...duymeler];\n\nconst aktivDuymeler = duymeMassivi.filter(btn => btn.classList.contains(\"aktiv\"));\nconsole.log(\"Aktiv düymə sayı:\", aktivDuymeler.length);</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚡ Canlı (Live) vs Statik (Static) Kolleksiyalar:</strong><br>\n  • <code>getElementsByTagName / ClassName</code> -> <strong>Canlıdır (Live):</strong> DOM-da yeni element yaranan kimi kolleksiya avtomatik böyüyür.<br>\n  • <code>querySelectorAll</code> -> <strong>Statikdir (Snapshot):</strong> Seçim anında mövcud olan elementlərin anlıq fotosudur; sonradan DOM-a element əlavə edilsə belə dəyişmir.\n</div>",
        "codeExamples": [
          {
            "title": "querySelector ilə Element Seçimi və Oxunması",
            "code": "// DOM elementi simulyasiyası\nconst basliq = document.querySelector(\"#esas-basliq\");\nbasliq.textContent = \"JavaScript DOM ilə Səhifə Canlanır!\";\n\nconsole.log(\"Elementin Mətni:\", basliq.textContent);\nconsole.log(\"Teq Adı:\", basliq.tagName);",
            "output": "Elementin Mətni: JavaScript DOM ilə Səhifə Canlanır!\nTeq Adı: DIV"
          },
          {
            "title": "querySelectorAll ilə Kolleksiyanı Dövr Etmək",
            "code": "const elementler = document.querySelectorAll(\".meny-bendi\");\n\nconsole.log(\"Seçilmiş element sayı:\", elementler.length);\nelementler.forEach((el, index) => {\n  el.textContent = `${index + 1}-ci bölmə`;\n  console.log(`Bənd: ${el.textContent}`);\n});",
            "output": "Seçilmiş element sayı: 2\nBənd: 1-ci bölmə\nBənd: 2-ci bölmə"
          }
        ],
        "exercises": [
          {
            "id": "ex-14-1-1",
            "title": "Sənəd Başlığının Seçilməsi və Mətninin Yenilənməsi",
            "instruction": "Səhifədəki əsas başlığı (#esas-basliq) seçərək onun məzmununu \"Salam, Veb Dünyası!\" ilə əvəzləyin və yenilənmiş mətni təsdiq üçün konsola çıxarın.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Salam, Veb Dünyası!",
            "hint": "Elementi seçmək üçün document.querySelector(\"#esas-basliq\"), mətnini dəyişmək üçün isə element.textContent istifadə olunur.",
            "solutionCode": "const basliq = document.querySelector(\"#esas-basliq\");\nbasliq.textContent = \"Salam, Veb Dünyası!\";\nconsole.log(basliq.textContent);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-14-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Kolleksiya Üzərində Birbaşa textContent Xətası",
            "instruction": "Aşağıdakı proqramçı <code>querySelectorAll</code> ilə elementlər siyahısı seçib və birbaşa kolleksiya üzərində <code>kartlar.textContent</code> çağırdığı üçün <code>undefined</code> alıb. Kolleksiyadan birinci elementi <code>[0]</code> indeksi ilə götürərək kodu düzəldin.",
            "description": "Aşağıdakı proqramçı <code>querySelectorAll</code> ilə elementlər siyahısı seçib və birbaşa kolleksiya üzərində <code>kartlar.textContent</code> çağırdığı üçün <code>undefined</code> alıb. Kolleksiyadan birinci elementi <code>[0]</code> indeksi ilə götürərək kodu düzəldin.",
            "buggyCode": "const kartlar = document.querySelectorAll(\".item\");\nkartlar[0].textContent = \"Birinci Kart\";\nconsole.log(kartlar.textContent);",
            "correctCode": "const kartlar = document.querySelectorAll(\".item\");\nkartlar[0].textContent = \"Birinci Kart\";\nconsole.log(kartlar[0].textContent);",
            "correctOutput": "Birinci Kart",
            "expectedOutput": "Birinci Kart",
            "explanation": "querySelectorAll() metodu tək element deyil, NodeList kolleksiyası qaytarır. Kolleksiyanın özünün textContent xassəsi olmur, elementə indekslə (kartlar[0]) müraciət edilməlidir.",
            "hint": "querySelectorAll çoxsaylı elementlərdən ibarət NodeList qaytarır. Tək elementi seçmək üçün querySelector seçin."
          }
        ],
        "bugFix": {
          "id": "bug-14-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Kolleksiya Üzərində Birbaşa textContent Xətası",
          "instruction": "Aşağıdakı proqramçı <code>querySelectorAll</code> ilə elementlər siyahısı seçib və birbaşa kolleksiya üzərində <code>kartlar.textContent</code> çağırdığı üçün <code>undefined</code> alıb. Kolleksiyadan birinci elementi <code>[0]</code> indeksi ilə götürərək kodu düzəldin.",
          "description": "Aşağıdakı proqramçı <code>querySelectorAll</code> ilə elementlər siyahısı seçib və birbaşa kolleksiya üzərində <code>kartlar.textContent</code> çağırdığı üçün <code>undefined</code> alıb. Kolleksiyadan birinci elementi <code>[0]</code> indeksi ilə götürərək kodu düzəldin.",
          "buggyCode": "const kartlar = document.querySelectorAll(\".item\");\nkartlar[0].textContent = \"Birinci Kart\";\nconsole.log(kartlar.textContent);",
          "correctCode": "const kartlar = document.querySelectorAll(\".item\");\nkartlar[0].textContent = \"Birinci Kart\";\nconsole.log(kartlar[0].textContent);",
          "correctOutput": "Birinci Kart",
          "expectedOutput": "Birinci Kart",
          "explanation": "querySelectorAll() metodu tək element deyil, NodeList kolleksiyası qaytarır. Kolleksiyanın özünün textContent xassəsi olmur, elementə indekslə (kartlar[0]) müraciət edilməlidir.",
          "hint": "querySelectorAll çoxsaylı elementlərdən ibarət NodeList qaytarır. Tək elementi seçmək üçün querySelector seçin."
        }
      },
      {
        "id": "topic-14-2",
        "title": "Məzmunun və Atributların İdarə Edilməsi",
        "theory": "<h3>📝 Məzmunun Dəyişdirilməsi: textContent vs innerHTML</h3>\n<p>Seçdiyimiz HTML elementinin daxilindəki məlumatı iki əsas yolla dəyişə bilərik:</p>\n\n<ul>\n  <li><strong><code>textContent</code> (Təhlükəsiz Sadə Mətn):</strong> Elementin içindəki məzmunu xam mətn kimi qəbul edir. Hətta içində <code>&lt;b&gt;</code> və ya <code>&lt;script&gt;</code> yazsanız belə, onu HTML kimi icra etmir, adi simvol kimi göstərir. <strong>XSS (Cross-Site Scripting) hücumlarından qorunmaq üçün ən təhlükəsiz üsuldur!</strong></li>\n  <li><strong><code>innerHTML</code> (HTML Təhlili və Qurulması):</strong> Daxil edilən mətni HTML teqləri kimi təhlil edir və formatlı interfeys elementi kimi qurur (məsələn: <code>&lt;span class='aktiv'&gt;YENİ&lt;/span&gt;</code>).</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>🖼️ Real Həyat Bənzətməsi: Elan Lövhəsi vs Elektron Tabloo</strong>\n  <p>Divardakı elan lövhəsinin üzərindəki yazını qələmlə dəyişmək <strong><code>textContent</code></strong>-dir: nə yazsanız olduğu kimi görünür. Lövhəni söküb yerinə işıqlı, düyməli elektron tabloo quraşdırmaq isə <strong><code>innerHTML</code></strong>-dir: strukturun özü yenidən formalaşır.</p>\n</div>\n\n<h3>HTML Atributlarının İdarə Edilməsi (Attributes API):</h3>\n<p>HTML teqlərinin <code>src</code>, <code>href</code>, <code>alt</code>, <code>disabled</code> və digər atributlarını idarə etmək üçün 4 əsas metod mövcuddur:</p>\n\n<pre><code>const link = document.querySelector(\"a\");\n\n// 1. Atributu təyin etmək və ya dəyişmək:\nlink.setAttribute(\"href\", \"https://jsoyren.az\");\nlink.setAttribute(\"target\", \"_blank\");\n\n// 2. Atributun dəyərini oxumaq:\nconsole.log(link.getAttribute(\"href\")); // \"https://jsoyren.az\"\n\n// 3. Atributun mövcudluğunu yoxlamaq (true/false):\nif (link.hasAttribute(\"target\")) {\n  console.log(\"Link yeni tabda açılacaq\");\n}\n\n// 4. Atributu silmək:\nlink.removeAttribute(\"target\");</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: HTML5 dataset API və Dərin Klonlama (cloneNode(true))</h4>\n<p>Müasir veb mühəndisliyində elementlər üzərində biznes məlumatlarını saxlamaq və şablon elementləri çoxaltmaq üçün iki kritik API tətbiq olunur:</p>\n\n<pre><code>// 1. HTML5 Custom Data Attributes (dataset API)\n// HTML: &lt;div id=\"kart\" data-user-id=\"101\" data-rol-adi=\"admin\"&gt;&lt;/div&gt;\nconst kart = document.querySelector(\"#kart\");\n\n// Kebab-case avtomatik camelCase-ə çevrilir:\nconsole.log(kart.dataset.userId); // \"101\"\nconsole.log(kart.dataset.rolAdi); // \"admin\"\n\n// Dinamik yeni data-* atributu əlavə etmək:\nkart.dataset.qeydiyyatTarixi = \"2026-05-15\"; // data-qeydiyyat-tarixi yaradır\n\n// 2. Dərin Klonlama (cloneNode: Shallow vs Deep)\n// cloneNode(false) -> Yalnız elementin özünü və atributlarını kopyalayır (övladlar kopyalanmır)\n// cloneNode(true)  -> Elementi BÜTÜN iç-içə uşaq elementləri və mətnləri ilə kopyalayır (Deep Clone)\n\nconst sablonKart = document.querySelector(\".mehsul-karti\");\nconst yeniKlon = sablonKart.cloneNode(true);\nyeniKlon.id = \"kart-yeni\";\nyeniKlon.querySelector(\"h4\").textContent = \"Yeni Məhsul\";\n\n// QEYD: cloneNode() dinamik addEventListener dinləyicilərini KOPYALAMIR!</code></pre>",
        "codeExamples": [
          {
            "title": "textContent və Atributların Təyini",
            "code": "const kart = document.querySelector(\"#profil-karti\");\nkart.textContent = \"İstifadəçi: Aygün Məmmədova\";\n\nkart.setAttribute(\"data-rol\", \"moderator\");\nkart.setAttribute(\"data-status\", \"aktiv\");\n\nconsole.log(\"Məzmun:\", kart.textContent);\nconsole.log(\"Rol:\", kart.getAttribute(\"data-rol\"));\nconsole.log(\"Status mövcuddur?\", kart.hasAttribute(\"data-status\"));",
            "output": "Məzmun: İstifadəçi: Aygün Məmmədova\nRol: moderator\nStatus mövcuddur? true"
          },
          {
            "title": "Link və Şəkil Atributlarının Dinamik Dəyişdirilməsi",
            "code": "const sekil = document.querySelector(\"#esas-sekil\");\nsekil.setAttribute(\"src\", \"assets/banner.webp\");\nsekil.setAttribute(\"alt\", \"Platforma Başlığı\");\n\nconsole.log(\"Mənbə:\", sekil.getAttribute(\"src\"));\nconsole.log(\"Təsvir:\", sekil.getAttribute(\"alt\"));",
            "output": "Mənbə: assets/banner.webp\nTəsvir: Platforma Başlığı"
          }
        ],
        "exercises": [
          {
            "id": "ex-14-2-1",
            "title": "Şəkil Elementinə Atributların Təyini",
            "instruction": "Avatar elementini (#avatar) seçərək mənbə (src) ünvanını \"avatar.png\", alternativ mətnini (alt) isə \"Profil Şəkli\" olaraq qeyd edin və \"src - alt\" formatında konsolda əks etdirin.",
            "starterCode": "const sekil = document.querySelector(\"#avatar\");\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "avatar.png - Profil Şəkli",
            "hint": "Element atributlarını təyin etmək üçün setAttribute(\"atribut\", \"dəyər\"), oxumaq üçün isə getAttribute() metodlarından istifadə edilir.",
            "solutionCode": "const sekil = document.querySelector(\"#avatar\");\nsekil.setAttribute(\"src\", \"avatar.png\");\nsekil.setAttribute(\"alt\", \"Profil Şəkli\");\nconsole.log(`${sekil.getAttribute(\"src\")} - ${sekil.getAttribute(\"alt\")}`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-14-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "setAttribute Əvəzinə Yanlış Mənimsətmə",
            "instruction": "DOM elementinin 'src' atributuna 'logo.png' dəyəri təyin edilməlidir, lakin metodun yanlış istifadəsi səbəbindən atribut yazılmır və 'null' qayıdır. Elementin atribut təyinetmə mexanizmini düzəldin.",
            "description": "DOM elementinin 'src' atributuna 'logo.png' dəyəri təyin edilməlidir, lakin metodun yanlış istifadəsi səbəbindən atribut yazılmır və 'null' qayıdır. Elementin atribut təyinetmə mexanizmini düzəldin.",
            "buggyCode": "const sekil = document.querySelector(\"#logo\");\n// XƏTA: setAttribute funksiyadır, bərabərliklə təyin edilmir!\nsekil.setAttribute = \"logo.png\";\nconsole.log(sekil.getAttribute(\"src\"));",
            "correctCode": "const sekil = document.querySelector(\"#logo\");\nsekil.setAttribute(\"src\", \"logo.png\");\nconsole.log(sekil.getAttribute(\"src\"));",
            "correctOutput": "logo.png",
            "expectedOutput": "logo.png",
            "explanation": "setAttribute bir metoddur və iki arqument qəbul edir: element.setAttribute('atributAdi', 'deyer'). Ona bərabərliklə qiymət mənimsədilmir.",
            "hint": "setAttribute metoddur, funksiya kimi çağırılmalıdır: element.setAttribute(ad, dəyər)."
          }
        ],
        "bugFix": {
          "id": "bug-14-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "setAttribute Əvəzinə Yanlış Mənimsətmə",
          "instruction": "DOM elementinin 'src' atributuna 'logo.png' dəyəri təyin edilməlidir, lakin metodun yanlış istifadəsi səbəbindən atribut yazılmır və 'null' qayıdır. Elementin atribut təyinetmə mexanizmini düzəldin.",
          "description": "DOM elementinin 'src' atributuna 'logo.png' dəyəri təyin edilməlidir, lakin metodun yanlış istifadəsi səbəbindən atribut yazılmır və 'null' qayıdır. Elementin atribut təyinetmə mexanizmini düzəldin.",
          "buggyCode": "const sekil = document.querySelector(\"#logo\");\n// XƏTA: setAttribute funksiyadır, bərabərliklə təyin edilmir!\nsekil.setAttribute = \"logo.png\";\nconsole.log(sekil.getAttribute(\"src\"));",
          "correctCode": "const sekil = document.querySelector(\"#logo\");\nsekil.setAttribute(\"src\", \"logo.png\");\nconsole.log(sekil.getAttribute(\"src\"));",
          "correctOutput": "logo.png",
          "expectedOutput": "logo.png",
          "explanation": "setAttribute bir metoddur və iki arqument qəbul edir: element.setAttribute('atributAdi', 'deyer'). Ona bərabərliklə qiymət mənimsədilmir.",
          "hint": "setAttribute metoddur, funksiya kimi çağırılmalıdır: element.setAttribute(ad, dəyər)."
        }
      },
      {
        "id": "topic-14-3",
        "title": "Dinamik Stillər və CSS Sinifləri (classList & style)",
        "theory": "<h3>🎨 Dinamik Stillər: CSS necə dəyişdirilir?</h3>\n<p>Veb səhifələri interaktiv edən ən mühüm mexanizm istifadəçi qarşılıqlı əlaqəsi zamanı elementin rənginin, ölçüsünün və ya görünmə vəziyyətinin dinamik dəyişməsidir. Bunun üçün 2 əsas üsul var:</p>\n\n<h3>1. Birbaşa Sətirdaxili Stillər (<code>element.style</code>)</h3>\n<p>HTML elementinin birbaşa <code>style=\"...\"</code> atributuna müdaxilə edir. CSS-dəki tireli xassə adları JavaScript-də <strong>camelCase</strong> formatına çevrilir:</p>\n<ul>\n  <li><code>background-color</code> -> <code>element.style.backgroundColor = \"royalblue\";</code></li>\n  <li><code>font-size</code> -> <code>element.style.fontSize = \"20px\";</code></li>\n  <li><code>display</code> -> <code>element.style.display = \"none\";</code></li>\n</ul>\n\n<h3>2. Müasir Sənaye Standartı: <code>classList</code> API</h3>\n<p>Birbaşa sətirdaxili stil yazmaq böyük layihələrdə dizaynı səpələnmiş və idarəolunmaz edir. Peşəkar yanaşma bütün dizaynı CSS faylında siniflər (classes) şəklində yazmaq, JavaScript ilə isə sadəcə həmin sinifləri idarə etməkdir:</p>\n\n<pre><code>const kart = document.querySelector(\".kart\");\n\n// 1. Sinif əlavə etmək:\nkart.classList.add(\"aktiv\");\n\n// 2. Sinfi silmək:\nkart.classList.remove(\"gizli\");\n\n// 3. Yandırıb-söndürmək (varsa silir, yoxdursa əlavə edir!):\nkart.classList.toggle(\"gece-rejimi\");\n\n// 4. Sinfin mövcudluğunu yoxlamaq (true/false):\nif (kart.classList.contains(\"aktiv\")) {\n  console.log(\"Kart hazırda aktivdir\");\n}</code></pre>\n\n<div class=\"tip-box\">\n  <strong>🚦 Real Həyat Bənzətməsi: Svetofor İşıqları</strong>\n  <p>Svetoforun işığını dəyişmək üçün lampanı hər saniyə rəngsaz fırçası ilə yenidən rəngləmək (<code>element.style</code>) son dərəcə səmərəsizdir. Bunun əvəzinə, əvvəlcədən hazırlanmış qırmızı və ya yaşıl rejimi düymə ilə yandırıb-söndürmək (<strong><code>classList.toggle</code></strong>) ən sürətli və təmiz yoldur.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: DocumentFragment ilə Yüksək Məhsuldarlıqlı Render və closest() / matches()</h4>\n<p>DOM ağacında hər dəfə yeni element əlavə edildikdə brauzer <strong>Reflow (Geometrik yenidənhesablama)</strong> və <strong>Repaint (Piksellərin yenidən çəkilməsi)</strong> prosesi aparır. Dövrdə 1000 elementi tək-tək DOM-a qoşmaq tətbiqi donmağa məruz qoyur:</p>\n\n<pre><code>// 1. DocumentFragment ilə Toplu (Batch) Render:\n// Yaddaşda virtual konteyner yaradırıq (DOM-a hələ toxunmuruq):\nconst fraqment = document.createDocumentFragment();\n\nfor (let i = 1; i <= 50; i++) {\n  const bend = document.createElement(\"li\");\n  bend.textContent = `Məhsul №${i}`;\n  fraqment.appendChild(bend); // Virtual fraqmentə yığılır (0 Reflow!)\n}\n\n// Bütün 50 elementi tək bir əməliyyatla DOM-a ötürürük (Yalnız 1 Reflow!):\ndocument.querySelector(\"#siyahi\").appendChild(fraqment);\n\n// 2. Elementlərin Axtarışı: closest() və matches()\nconst duyme = document.querySelector(\".sil-btn\");\n\n// matches: Elementin CSS seçiciyə uyğun olub-olmadığını yoxlayır\nconsole.log(duyme.matches(\".sil-btn\")); // true\n\n// closest: DOM ağacında yuxarıya doğru gedərək şərtə uyğun ən yaxın valideyni tapır\nconst anaKart = duyme.closest(\".kart-konteyner\");\nconsole.log(\"Ana kart tapıldı:\", anaKart !== null);</code></pre>",
        "codeExamples": [
          {
            "title": "element.style ilə Birbaşa Tərtibat",
            "code": "const qutu = document.querySelector(\"#rengli-qutu\");\nqutu.style.backgroundColor = \"#0284C7\";\nqutu.style.fontSize = \"18px\";\n\nconsole.log(\"Arxa fon:\", qutu.style.backgroundColor);\nconsole.log(\"Şrift ölçüsü:\", qutu.style.fontSize);",
            "output": "Arxa fon: #0284C7\nŞrift ölçüsü: 18px"
          },
          {
            "title": "classList ilə Siniflərin İdarə Edilməsi",
            "code": "const modal = document.querySelector(\"#xeberdarliq-modal\");\n\nmodal.classList.add(\"goster\");\nconsole.log(\"Göstər sinfi var?\", modal.classList.contains(\"goster\"));\n\nmodal.classList.toggle(\"qaranliq\");\nconsole.log(\"Bütün siniflər:\", modal.className);",
            "output": "Göstər sinfi var? true\nBütün siniflər: goster qaranliq"
          }
        ],
        "exercises": [
          {
            "id": "ex-14-3-1",
            "title": "Dinamik Sinif İdarəetməsi və Status Yoxlanışı",
            "instruction": "Təsdiq düyməsinə (#tesdiq-btn) vizual \"aktiv\" sinfini əlavə edin və düymənin həmin sinfə malik olduğunu yoxlayaraq \"Düymə aktivdir: true\" nəticəsini konsola verin.",
            "starterCode": "const btn = document.querySelector(\"#tesdiq-btn\");\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Düymə aktivdir: true",
            "hint": "Elementin sinifləri ilə işləmək üçün classList.add(\"aktiv\") və mövcudluq yoxlaması üçün classList.contains(\"aktiv\") metodları tətbiq olunur.",
            "solutionCode": "const btn = document.querySelector(\"#tesdiq-btn\");\nbtn.classList.add(\"aktiv\");\nconsole.log(`Düymə aktivdir: ${btn.classList.contains(\"aktiv\")}`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-14-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "CSS Stilində Tire İstifadəsi Xətası",
            "instruction": "Aşağıdakı kodda CSS xassəsi JavaScript-də tire ilə <code>background-color</code> yazıldığı üçün xəta verir. JavaScript-də tire çıxma əməliyyatıdır. Onu camelCase ilə <code>backgroundColor</code> olaraq düzəldin.",
            "description": "Aşağıdakı kodda CSS xassəsi JavaScript-də tire ilə <code>background-color</code> yazıldığı üçün xəta verir. JavaScript-də tire çıxma əməliyyatıdır. Onu camelCase ilə <code>backgroundColor</code> olaraq düzəldin.",
            "buggyCode": "const qutu = document.querySelector(\"#qutu\");\n// XƏTA: background-color deyil, backgroundColor yazılmalıdır\nqutu.style.background-color = \"crimson\";\nconsole.log(qutu.style.backgroundColor);",
            "correctCode": "const qutu = document.querySelector(\"#qutu\");\nqutu.style.backgroundColor = \"crimson\";\nconsole.log(qutu.style.backgroundColor);",
            "correctOutput": "crimson",
            "expectedOutput": "crimson",
            "explanation": "JavaScript-də element.style üzərindən stillər təyin edilərkən tire (-) işarəsi istifadə edilə bilməz, çünki bu riyazi çıxma hesab olunur. Bütün CSS xassələri camelCase (məsələn, backgroundColor, fontSize) yazılmalıdır.",
            "hint": "JavaScript style obyektində CSS tireli xassələri camelCase formatında yazılır (backgroundColor)."
          }
        ],
        "bugFix": {
          "id": "bug-14-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "CSS Stilində Tire İstifadəsi Xətası",
          "instruction": "Aşağıdakı kodda CSS xassəsi JavaScript-də tire ilə <code>background-color</code> yazıldığı üçün xəta verir. JavaScript-də tire çıxma əməliyyatıdır. Onu camelCase ilə <code>backgroundColor</code> olaraq düzəldin.",
          "description": "Aşağıdakı kodda CSS xassəsi JavaScript-də tire ilə <code>background-color</code> yazıldığı üçün xəta verir. JavaScript-də tire çıxma əməliyyatıdır. Onu camelCase ilə <code>backgroundColor</code> olaraq düzəldin.",
          "buggyCode": "const qutu = document.querySelector(\"#qutu\");\n// XƏTA: background-color deyil, backgroundColor yazılmalıdır\nqutu.style.background-color = \"crimson\";\nconsole.log(qutu.style.backgroundColor);",
          "correctCode": "const qutu = document.querySelector(\"#qutu\");\nqutu.style.backgroundColor = \"crimson\";\nconsole.log(qutu.style.backgroundColor);",
          "correctOutput": "crimson",
          "expectedOutput": "crimson",
          "explanation": "JavaScript-də element.style üzərindən stillər təyin edilərkən tire (-) işarəsi istifadə edilə bilməz, çünki bu riyazi çıxma hesab olunur. Bütün CSS xassələri camelCase (məsələn, backgroundColor, fontSize) yazılmalıdır.",
          "hint": "JavaScript style obyektində CSS tireli xassələri camelCase formatında yazılır (backgroundColor)."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_14 };
}
