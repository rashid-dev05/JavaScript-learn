// Section 14 Builder: DOM Əsasları və Elementlərin Seçilməsi
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section14 = {
  "id": "section-14",
  "title": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
  "icon": "🌐",
  "topics": [
    {
      "id": "topic-14-1",
      "title": "DOM Nədir və Elementlərin Seçilməsi",
      "theory": `<h3>🌐 DOM (Document Object Model) Nədir?</h3>
<p>Veb səhifə brauzerə yükləndikdə, brauzer HTML sənədini oxuyur və onu yaddaşda iyerarxik <strong>ağac strukturuna (DOM Tree)</strong> çevirir. Bu ağacda hər bir HTML teqi (<code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>) canlı bir JavaScript obyektinə (<strong>Node / Element</strong>) çevrilir.</p>

<p>JavaScript məhz <strong><code>document</code></strong> qlobal obyekti vasitəsilə bu ağaca daxil olur və səhifədəki istənilən elementi dinamik şəkildə idarə edir.</p>

<div class="tip-box">
  <strong>🏢 Real Həyat Bənzətməsi: Mənzil Ünvan Kitabçası</strong>
  <p>DOM çoxmərtəbəli bir binanın ünvan reyestri kimidir. Binadakı hər bir mənzilin öz unikal nömrəsi (<strong>ID</strong>) və ya aid olduğu mərtəbə növü (<strong>Class</strong>) var. JavaScript dəqiq ünvan seçicilərindən istifadə edərək istədiyi mənzilin qapısının zəngini çalır və içindəki əşyaları dəyişir.</p>
</div>

<h3>Elementləri Seçməyin Müasir Metodları:</h3>

<ul>
  <li><strong><code>document.getElementById(\"id\")</code>:</strong> Səhifədəki unikal ID-yə malik tək bir elementi qaytarır (element tapılmazsa <code>null</code> olur):
    <pre><code>const basliq = document.getElementById("esas-basliq");</code></pre>
  </li>
  <li><strong><code>document.querySelector(\"selector\")</code>:</strong> İstənilən CSS seçicisinə (<code>#id</code>, <code>.sinif</code>, <code>div > p</code>) uyğun gələn <strong>ən birinci elementi</strong> qaytarır:
    <pre><code>const duyme = document.querySelector(".tesdiq-btn");
const ilkParaqraf = document.querySelector("article p");</code></pre>
  </li>
  <li><strong><code>document.querySelectorAll(\"selector\")</code>:</strong> Şərtə uyğun gələn bütün elementləri <strong>NodeList</strong> kolleksiyası şəklində qaytarır. <code>forEach()</code> ilə asanlıqla dövr edilə bilər:
    <pre><code>const kartlar = document.querySelectorAll(".xeber-karti");
kartlar.forEach(kart => {
  console.log(kart.textContent);
});</code></pre>
  </li>
</ul>

<div class="warning-box">
  <strong>⚠️ Qızıl Qayda:</strong><br>
  • <code>querySelector</code> -> <strong>Tək Element</strong> qaytarır (birbaşa <code>element.textContent</code> yazmaq olar).<br>
  • <code>querySelectorAll</code> -> <strong>Kolleksiya (NodeList)</strong> qaytarır. Birbaşa <code>kolleksiya.textContent</code> yazmaq OLMAZ! Əvvəlcə indekslə (<code>[0]</code>) və ya <code>forEach</code> ilə elementə çatmalısınız.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: NodeList vs HTMLCollection vs Əsl Massivlər (Array.from)</h4>
<p>DOM elementləri toplusu ilə işləyərkən proqramçıların ən çox çaşdığı məqam kolleksiya tipləridir. <code>querySelectorAll</code> tərəfindən qaytarılan <strong>NodeList</strong> və köhnə metodların (məsələn, <code>getElementsByClassName</code>) qaytardığı <strong>HTMLCollection</strong> əsl JavaScript Massivi (Array) deyil:</p>

<pre><code>const duymeler = document.querySelectorAll(".btn");

// XƏTA: NodeList-in map() və ya filter() metodları yoxdur!
// duymeler.map(b => b.id); // TypeError: duymeler.map is not a function

// 1. Təhlükəsiz Massivə Çevirmə (Array.from və ya Spread):
const duymeMassivi = Array.from(duymeler);
// və ya: const duymeMassivi = [...duymeler];

const aktivDuymeler = duymeMassivi.filter(btn => btn.classList.contains("aktiv"));
console.log("Aktiv düymə sayı:", aktivDuymeler.length);</code></pre>

<div class="warning-box">
  <strong>⚡ Canlı (Live) vs Statik (Static) Kolleksiyalar:</strong><br>
  • <code>getElementsByTagName / ClassName</code> -> <strong>Canlıdır (Live):</strong> DOM-da yeni element yaranan kimi kolleksiya avtomatik böyüyür.<br>
  • <code>querySelectorAll</code> -> <strong>Statikdir (Snapshot):</strong> Seçim anında mövcud olan elementlərin anlıq fotosudur; sonradan DOM-a element əlavə edilsə belə dəyişmir.
</div>`,
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
      "theory": `<h3>📝 Məzmunun Dəyişdirilməsi: textContent vs innerHTML</h3>
<p>Seçdiyimiz HTML elementinin daxilindəki məlumatı iki əsas yolla dəyişə bilərik:</p>

<ul>
  <li><strong><code>textContent</code> (Təhlükəsiz Sadə Mətn):</strong> Elementin içindəki məzmunu xam mətn kimi qəbul edir. Hətta içində <code>&lt;b&gt;</code> və ya <code>&lt;script&gt;</code> yazsanız belə, onu HTML kimi icra etmir, adi simvol kimi göstərir. <strong>XSS (Cross-Site Scripting) hücumlarından qorunmaq üçün ən təhlükəsiz üsuldur!</strong></li>
  <li><strong><code>innerHTML</code> (HTML Təhlili və Qurulması):</strong> Daxil edilən mətni HTML teqləri kimi təhlil edir və formatlı interfeys elementi kimi qurur (məsələn: <code>&lt;span class='aktiv'&gt;YENİ&lt;/span&gt;</code>).</li>
</ul>

<div class="tip-box">
  <strong>🖼️ Real Həyat Bənzətməsi: Elan Lövhəsi vs Elektron Tabloo</strong>
  <p>Divardakı elan lövhəsinin üzərindəki yazını qələmlə dəyişmək <strong><code>textContent</code></strong>-dir: nə yazsanız olduğu kimi görünür. Lövhəni söküb yerinə işıqlı, düyməli elektron tabloo quraşdırmaq isə <strong><code>innerHTML</code></strong>-dir: strukturun özü yenidən formalaşır.</p>
</div>

<h3>HTML Atributlarının İdarə Edilməsi (Attributes API):</h3>
<p>HTML teqlərinin <code>src</code>, <code>href</code>, <code>alt</code>, <code>disabled</code> və digər atributlarını idarə etmək üçün 4 əsas metod mövcuddur:</p>

<pre><code>const link = document.querySelector("a");

// 1. Atributu təyin etmək və ya dəyişmək:
link.setAttribute("href", "https://jsoyren.az");
link.setAttribute("target", "_blank");

// 2. Atributun dəyərini oxumaq:
console.log(link.getAttribute("href")); // "https://jsoyren.az"

// 3. Atributun mövcudluğunu yoxlamaq (true/false):
if (link.hasAttribute("target")) {
  console.log("Link yeni tabda açılacaq");
}

// 4. Atributu silmək:
link.removeAttribute("target");</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: HTML5 dataset API və Dərin Klonlama (cloneNode(true))</h4>
<p>Müasir veb mühəndisliyində elementlər üzərində biznes məlumatlarını saxlamaq və şablon elementləri çoxaltmaq üçün iki kritik API tətbiq olunur:</p>

<pre><code>// 1. HTML5 Custom Data Attributes (dataset API)
// HTML: &lt;div id=\"kart\" data-user-id=\"101\" data-rol-adi=\"admin\"&gt;&lt;/div&gt;
const kart = document.querySelector("#kart");

// Kebab-case avtomatik camelCase-ə çevrilir:
console.log(kart.dataset.userId); // "101"
console.log(kart.dataset.rolAdi); // "admin"

// Dinamik yeni data-* atributu əlavə etmək:
kart.dataset.qeydiyyatTarixi = "2026-05-15"; // data-qeydiyyat-tarixi yaradır

// 2. Dərin Klonlama (cloneNode: Shallow vs Deep)
// cloneNode(false) -> Yalnız elementin özünü və atributlarını kopyalayır (övladlar kopyalanmır)
// cloneNode(true)  -> Elementi BÜTÜN iç-içə uşaq elementləri və mətnləri ilə kopyalayır (Deep Clone)

const sablonKart = document.querySelector(".mehsul-karti");
const yeniKlon = sablonKart.cloneNode(true);
yeniKlon.id = "kart-yeni";
yeniKlon.querySelector("h4").textContent = "Yeni Məhsul";

// QEYD: cloneNode() dinamik addEventListener dinləyicilərini KOPYALAMIR!</code></pre>`,
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
      "theory": `<h3>🎨 Dinamik Stillər: CSS necə dəyişdirilir?</h3>
<p>Veb səhifələri interaktiv edən ən mühüm mexanizm istifadəçi qarşılıqlı əlaqəsi zamanı elementin rənginin, ölçüsünün və ya görünmə vəziyyətinin dinamik dəyişməsidir. Bunun üçün 2 əsas üsul var:</p>

<h3>1. Birbaşa Sətirdaxili Stillər (<code>element.style</code>)</h3>
<p>HTML elementinin birbaşa <code>style=\"...\"</code> atributuna müdaxilə edir. CSS-dəki tireli xassə adları JavaScript-də <strong>camelCase</strong> formatına çevrilir:</p>
<ul>
  <li><code>background-color</code> -> <code>element.style.backgroundColor = \"royalblue\";</code></li>
  <li><code>font-size</code> -> <code>element.style.fontSize = \"20px\";</code></li>
  <li><code>display</code> -> <code>element.style.display = \"none\";</code></li>
</ul>

<h3>2. Müasir Sənaye Standartı: <code>classList</code> API</h3>
<p>Birbaşa sətirdaxili stil yazmaq böyük layihələrdə dizaynı səpələnmiş və idarəolunmaz edir. Peşəkar yanaşma bütün dizaynı CSS faylında siniflər (classes) şəklində yazmaq, JavaScript ilə isə sadəcə həmin sinifləri idarə etməkdir:</p>

<pre><code>const kart = document.querySelector(".kart");

// 1. Sinif əlavə etmək:
kart.classList.add("aktiv");

// 2. Sinfi silmək:
kart.classList.remove("gizli");

// 3. Yandırıb-söndürmək (varsa silir, yoxdursa əlavə edir!):
kart.classList.toggle("gece-rejimi");

// 4. Sinfin mövcudluğunu yoxlamaq (true/false):
if (kart.classList.contains("aktiv")) {
  console.log("Kart hazırda aktivdir");
}</code></pre>

<div class="tip-box">
  <strong>🚦 Real Həyat Bənzətməsi: Svetofor İşıqları</strong>
  <p>Svetoforun işığını dəyişmək üçün lampanı hər saniyə rəngsaz fırçası ilə yenidən rəngləmək (<code>element.style</code>) son dərəcə səmərəsizdir. Bunun əvəzinə, əvvəlcədən hazırlanmış qırmızı və ya yaşıl rejimi düymə ilə yandırıb-söndürmək (<strong><code>classList.toggle</code></strong>) ən sürətli və təmiz yoldur.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: DocumentFragment ilə Yüksək Məhsuldarlıqlı Render və closest() / matches()</h4>
<p>DOM ağacında hər dəfə yeni element əlavə edildikdə brauzer <strong>Reflow (Geometrik yenidənhesablama)</strong> və <strong>Repaint (Piksellərin yenidən çəkilməsi)</strong> prosesi aparır. Dövrdə 1000 elementi tək-tək DOM-a qoşmaq tətbiqi donmağa məruz qoyur:</p>

<pre><code>// 1. DocumentFragment ilə Toplu (Batch) Render:
// Yaddaşda virtual konteyner yaradırıq (DOM-a hələ toxunmuruq):
const fraqment = document.createDocumentFragment();

for (let i = 1; i <= 50; i++) {
  const bend = document.createElement("li");
  bend.textContent = \`Məhsul №\${i}\`;
  fraqment.appendChild(bend); // Virtual fraqmentə yığılır (0 Reflow!)
}

// Bütün 50 elementi tək bir əməliyyatla DOM-a ötürürük (Yalnız 1 Reflow!):
document.querySelector("#siyahi").appendChild(fraqment);

// 2. Elementlərin Axtarışı: closest() və matches()
const duyme = document.querySelector(".sil-btn");

// matches: Elementin CSS seçiciyə uyğun olub-olmadığını yoxlayır
console.log(duyme.matches(".sil-btn")); // true

// closest: DOM ağacında yuxarıya doğru gedərək şərtə uyğun ən yaxın valideyni tapır
const anaKart = duyme.closest(".kart-konteyner");
console.log("Ana kart tapıldı:", anaKart !== null);</code></pre>`,
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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section14 };
}
console.log('Section 14 built successfully');
