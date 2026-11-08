// Section 15 Builder: DOM Hadisələri və İstifadəçi Qarşılıqlı Əlaqəsi
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section15 = {
  "id": "section-15",
  "title": "Bölmə 15: DOM Hadisələri və İstifadəçi Qarşılıqlı Əlaqəsi",
  "icon": "⚡",
  "topics": [
    {
      "id": "topic-15-1",
      "title": "Hadisə Dinləyiciləri və Əsas Hadisə Tipləri (addEventListener)",
      "theory": `<h3>⚡ Hadisələr (Events) və Veb İnteraktivliyi</h3>
<p>Veb səhifə sadəcə statik sənəd deyil. İstifadəçi səhifə ilə hər an qarşılıqlı əlaqədə olur: düyməyə klikləyir, mətni daxil edir, kursoru sürüşdürür və ya klaviaturada düyməni sıxır. Bütün bu hərəkətlər brauzer tərəfindən <strong>Hadisə (Event)</strong> siqnalı kimi qeydə alınır.</p>

<h3>1. Müasir Hadisə Dinləyicisi: addEventListener()</h3>
<p>HTML daxilində köhnəlmiş <code>onclick=\"...\"</code> atributu yazmaq əvəzinə, müasir JavaScript standartı <code>addEventListener()</code> metodudur:</p>

<pre><code>element.addEventListener("hadiseNovu", callbackFunksiyasi);</code></pre>

<ul>
  <li>Eyni elementə və eyni hadisə növünə bir neçə müstəqil funksiya bağlamaq olar.</li>
  <li>HTML strukturu ilə JavaScript məntiqini bir-birindən təmiz ayırır.</li>
  <li>İstənilən vaxt <code>removeEventListener()</code> ilə dinləyicini dayandırmaq mümkündür.</li>
</ul>

<h3>2. Əsas Hadisə Tipləri (Core Event Types):</h3>
<ul>
  <li><code>click</code> — İstifadəçi siçan və ya sensor ekranda elementə toxunduqda işə düşür.</li>
  <li><code>input</code> — Mətn sahəsinə (<code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>) hər bir simvol yazıldıqda və ya silindikdə dərhal icra olunur (canlı axtarış üçün əvəzedilməzdir).</li>
  <li><code>change</code> — Sahənin qiyməti dəyişdirilib təsdiqləndikdən sonra (məsələn, <code>&lt;select&gt;</code> menyuda seçim edildikdə).</li>
  <li><code>keydown</code> / <code>keyup</code> — Klaviaturada düymə basıldıqda və ya buraxıldıqda.</li>
</ul>

<div class="tip-box">
  <strong>🚪 Real Həyat Bənzətməsi: Qapı Zəngi və Hərəkət Sensoru</strong>
  <p>Ofisə qonaq gəlməsini öyrənmək üçün bütün günü fasiləsiz qapının dəstəyinə baxmırsınız. Bunun əvəzinə qapıya hərəkət sensoru və zəng quraşdırırsınız (<code>addEventListener('click', zengiCal)</code>). Sensor passiv gözləyir və yalnız kimsə daxil olduqda zəngi işə salır.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: removeEventListener Tələləri və Birdəfəlik Dinləyicilər ({ once: true })</h4>
<p>Yaddaş sızmalarının (memory leaks) qarşısını almaq və performansı optimallaşdırmaq üçün hadisə dinləyicilərinin incəlikləri:</p>

<pre><code>// 1. Adsız Arrow Funksiya Tələsi:
const btn = document.querySelector("#btn");

// XƏTA: Bu dinləyici heç vaxt silinməyəcək!
btn.addEventListener("click", () => console.log("Klik"));
btn.removeEventListener("click", () => console.log("Klik")); // İki fərqli yaddaş ünvanı!

// Düzgün üsul: Adlandırılmış funksiya referansını saxlamaq:
function klikHandler() {
  console.log("Uğurla icra olundu");
}
btn.addEventListener("click", klikHandler);
btn.removeEventListener("click", klikHandler); // Uğurla silinir!

// 2. Müasir Seçim: Birdəfəlik Dinləyicilər ({ once: true })
// İlk icradan sonra avtomatik olaraq yaddaşdan silinir:
btn.addEventListener("click", () => {
  console.log("Bu bildiriş yalnız tək bir dəfə çıxacaq!");
}, { once: true });

// 3. Mobil Scroll Optimizasiyası ({ passive: true })
// Brauzerə bildirir ki, funksiya preventDefault() çağırmayacaq, səhifə dərhal sürüşdürülə bilər:
window.addEventListener("scroll", scrollHandler, { passive: true });</code></pre>`,
      "codeExamples": [
        {
          "title": "addEventListener('click') ilə Düymə Kliklənməsi",
          "code": "const btn = document.querySelector(\"#aktivlesdir-btn\");\nlet klikSayi = 0;\n\nbtn.addEventListener(\"click\", () => {\n  klikSayi++;\n  btn.textContent = `Klikləndi (${klikSayi})`;\n  console.log(\"Düymə vəziyyəti:\", btn.textContent);\n});\n\n// Simulyasiya: istifadəçi düyməni 2 dəfə klikləyir\nbtn.click();\nbtn.click();",
          "output": "Düymə vəziyyəti: Klikləndi (1)\nDüymə vəziyyəti: Klikləndi (2)"
        },
        {
          "title": "removeEventListener ilə Dinləyicinin Ləğv Edilməsi",
          "code": "const bildirisBtn = document.querySelector(\"#bildiris-btn\");\n\nfunction birdefeGoster() {\n  console.log(\"Xoş gəlmisiniz! Bu bildiriş yalnız bir dəfə çıxacaq.\");\n  bildirisBtn.removeEventListener(\"click\", birdefeGoster);\n}\n\nbildirisBtn.addEventListener(\"click\", birdefeGoster);\n\n// Birinci klik: dinləyici işləyir və özünü ləğv edir\nbildirisBtn.click();\n// İkinci klik: dinləyici silindiyi üçün heç nə icra olunmur\nbildirisBtn.click();",
          "output": "Xoş gəlmisiniz! Bu bildiriş yalnız bir dəfə çıxacaq."
        }
      ],
      "exercises": [
        {
          "id": "ex-15-1-1",
          "title": "İstifadəçi Klik Hadisəsinin Dinlənilməsi",
          "instruction": "Artırma düyməsinə (#artir-btn) klik hadisəsi qoşun: hər klikdə sayğac 1 vahid artsın və konsolda \"Cari say: [say]\" formatında əks olunsun. Test üçün simulyasiya klikini icra edin.",
          "starterCode": "const btn = document.querySelector(\"#artir-btn\");\nlet saygac = 0;\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "Cari say: 1",
          "hint": "Hadisə dinləyicisi üçün btn.addEventListener(\"click\", () => { ... }), sınaq üçün isə btn.click() çağırışından istifadə edin.",
          "solutionCode": "const btn = document.querySelector(\"#artir-btn\");\nlet saygac = 0;\nbtn.addEventListener(\"click\", () => {\n  saygac++;\n  console.log(`Cari say: ${saygac}`);\n});\nbtn.click();"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-15-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "removeEventListener-də Adsız Arrow Funksiya Xətası",
          "instruction": "Aşağıdakı proqramçı <code>removeEventListener</code> çağırarkən adsız arrow funksiya göndərib. Nəticədə referanslar eyni olmadığı üçün dinləyici silinməyib. Funksiyanı adlandırılmış funksiya kimi təyin edib həm əlavə etmə, həm də silmə üçün istifadə edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı proqramçı <code>removeEventListener</code> çağırarkən adsız arrow funksiya göndərib. Nəticədə referanslar eyni olmadığı üçün dinləyici silinməyib. Funksiyanı adlandırılmış funksiya kimi təyin edib həm əlavə etmə, həm də silmə üçün istifadə edərək xətanı aradan qaldırın.",
          "buggyCode": "const btn = document.querySelector(\"#birdefe-btn\");\n\n// XƏTA: removeEventListener fərqli arrow funksiya referansı qəbul edir!\nbtn.addEventListener(\"click\", () => {\n  console.log(\"Təkrarolunmaz əməliyyat icra edildi.\");\n});\n\nbtn.removeEventListener(\"click\", () => {\n  console.log(\"Təkrarolunmaz əməliyyat icra edildi.\");\n});\n\nbtn.click();",
          "correctCode": "const btn = document.querySelector(\"#birdefe-btn\");\n\nfunction emeliyyat() {\n  console.log(\"Təkrarolunmaz əməliyyat icra edildi.\");\n}\n\nbtn.addEventListener(\"click\", emeliyyat);\nbtn.removeEventListener(\"click\", emeliyyat);\n\nconsole.log(\"Dinləyici uğurla silindi.\");\nbtn.click();",
          "correctOutput": "Dinləyici uğurla silindi.",
          "expectedOutput": "Dinləyici uğurla silindi.",
          "explanation": "removeEventListener yalnız o halda işləyir ki, ona ötürülən funksiya referansı addEventListener-ə ötürülən referansla tam eyni olsun. İki fərqli arrow funksiya sintaktik olaraq eyni olsa da, yaddaşda tam fərqli iki obyektdir.",
          "hint": "removeEventListener dinləyicini silmək üçün addEventListener ilə eyni funksiya referansını almalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-15-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "removeEventListener-də Adsız Arrow Funksiya Xətası",
        "instruction": "Aşağıdakı proqramçı <code>removeEventListener</code> çağırarkən adsız arrow funksiya göndərib. Nəticədə referanslar eyni olmadığı üçün dinləyici silinməyib. Funksiyanı adlandırılmış funksiya kimi təyin edib həm əlavə etmə, həm də silmə üçün istifadə edərək xətanı aradan qaldırın.",
        "description": "Aşağıdakı proqramçı <code>removeEventListener</code> çağırarkən adsız arrow funksiya göndərib. Nəticədə referanslar eyni olmadığı üçün dinləyici silinməyib. Funksiyanı adlandırılmış funksiya kimi təyin edib həm əlavə etmə, həm də silmə üçün istifadə edərək xətanı aradan qaldırın.",
        "buggyCode": "const btn = document.querySelector(\"#birdefe-btn\");\n\n// XƏTA: removeEventListener fərqli arrow funksiya referansı qəbul edir!\nbtn.addEventListener(\"click\", () => {\n  console.log(\"Təkrarolunmaz əməliyyat icra edildi.\");\n});\n\nbtn.removeEventListener(\"click\", () => {\n  console.log(\"Təkrarolunmaz əməliyyat icra edildi.\");\n});\n\nbtn.click();",
        "correctCode": "const btn = document.querySelector(\"#birdefe-btn\");\n\nfunction emeliyyat() {\n  console.log(\"Təkrarolunmaz əməliyyat icra edildi.\");\n}\n\nbtn.addEventListener(\"click\", emeliyyat);\nbtn.removeEventListener(\"click\", emeliyyat);\n\nconsole.log(\"Dinləyici uğurla silindi.\");\nbtn.click();",
        "correctOutput": "Dinləyici uğurla silindi.",
        "expectedOutput": "Dinləyici uğurla silindi.",
        "explanation": "removeEventListener yalnız o halda işləyir ki, ona ötürülən funksiya referansı addEventListener-ə ötürülən referansla tam eyni olsun. İki fərqli arrow funksiya sintaktik olaraq eyni olsa da, yaddaşda tam fərqli iki obyektdir.",
        "hint": "removeEventListener dinləyicini silmək üçün addEventListener ilə eyni funksiya referansını almalıdır."
      }
    },
    {
      "id": "topic-15-2",
      "title": "Hadisə Obyekti və Default Davranışın İdarəsi (e.target & preventDefault)",
      "theory": `<h3>📦 Hadisə Obyekti (The Event Object)</h3>
<p>Hadisə dinləyicisi işə düşdükdə, brauzer həmin hadisə haqqında zəngin məlumat toplusu yaradır və geriçağırış funksiyasına birinci arqument kimi ötürür (adətən <code>e</code> və ya <code>event</code> adlandırılır).</p>

<h3>1. e.target və e.currentTarget Fərqi:</h3>
<ul>
  <li><strong><code>e.target</code>:</strong> Hadisənin <strong>faktiki baş verdiyi</strong>, istifadəçinin bilavasitə toxunduğu ən daxildəki elementdir (məsələn: düymənin içindəki ikon və ya yazı).</li>
  <li><strong><code>e.currentTarget</code>:</strong> Hadisə dinləyicisinin <strong>bağlandığı</strong> əsas sahib elementdir (dinləyicini daşıyan konteyner).</li>
</ul>

<h3>2. Standart Brauzer Davranışının Dayandırılması: e.preventDefault()</h3>
<p>Bəzi HTML elementləri təbii olaraq standart brauzer davranışlarına malikdir:</p>
<ul>
  <li><code>&lt;form&gt;</code> göndərildikdə səhifə avtomatik yenilənir (refresh olunur).</li>
  <li><code>&lt;a&gt;</code> linkinə klikləndikdə səhifə başqa URL-ə keçid edir.</li>
</ul>
<p>Tək-səhifəli müasir tətbiqlərdə (SPA) səhifənin yenilənməsinin qarşısını almaq və formanı JavaScript ilə arxa fonda göndərmək üçün <strong><code>e.preventDefault()</code></strong> çağırılır!</p>

<div class="tip-box">
  <strong>✉️ Real Həyat Bənzətməsi: Poçtalyonu Qapıda Saxlamaq</strong>
  <p>Məktubu poçtalyona verib dərhal göndərmək əvəzinə, poçtalyonu qapıda saxlayırsınız (<strong><code>e.preventDefault()</code></strong>). Zərfi açıb yoxlayırsınız: ünvan düzdür? Şərtlər ödənilib? Yalnız məlumat tam yoxlanıldıqdan sonra göndəriş təsdiqlənir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Klaviatura İdarəetməsi (e.key vs keyCode) və Dinamik Şifrə Validasiyası</h4>
<p>Müasir veb standartlarında köhnəlmiş rəqəmsal <code>e.keyCode</code> (13, 27) tamamilə sıradan çıxarılmışdır. Əvəzində standart <strong><code>e.key</code></strong> və <strong><code>e.code</code></strong> istifadə olunur:</p>

<pre><code>// 1. Qısayol Kombinasiyalarının İdarə Edilməsi (Ctrl+S / Cmd+Enter):
window.addEventListener("keydown", (e) => {
  // Brauzerin standart "Səhifəni Saxla" dialoqunu dayandırırıq və şəxsi yaddaşa yazırıq:
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
    e.preventDefault();
    console.log("Layihə uğurla yaddaşda saxlandı (Qısayol təsdiqləndi)!");
  }

  if (e.key === "Escape") {
    console.log("Modal pəncərə bağlandı.");
  }
});

// 2. Canlı Giriş Validasiyası (Input Event):
const sifreInput = document.querySelector("#sifre");
sifreInput.addEventListener("input", (e) => {
  const deyer = e.target.value;
  const uzunluqOk = deyer.length >= 8;
  const reqemVar = /\\d/.test(deyer);

  console.log("Şifrə gücü:", uzunluqOk && reqemVar ? "Güclü" : "Zəif");
});</code></pre>`,
      "codeExamples": [
        {
          "title": "e.target və e.type Xassələrinin Oxunması",
          "code": "const kart = document.querySelector(\"#xeber-karti\");\n\nkart.addEventListener(\"click\", (e) => {\n  console.log(\"Hadisə tipi:\", e.type);\n  console.log(\"Hədəf teq:\", e.target.tagName);\n});\n\nkart.click();",
          "output": "Hadisə tipi: click\nHədəf teq: DIV"
        },
        {
          "title": "Formada e.preventDefault() və Dəyərlərin Oxunması",
          "code": "const form = document.querySelector(\"#giris-formu\");\nconst emailInput = document.querySelector(\"#email-sahesi\");\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault(); // Səhifənin yenilənməsini dayandırırıq!\n  console.log(\"Defolt dayandırıldı:\", e.defaultPrevented);\n  console.log(\"Göndərilən email:\", emailInput.value);\n});\n\n// Simulyasiya: istifadəçi email yazır və formanı göndərir\nemailInput.value = \"resad@example.com\";\nform.dispatchEvent(new Event(\"submit\"));",
          "output": "Defolt dayandırıldı: true\nGöndərilən email: resad@example.com"
        }
      ],
      "exercises": [
        {
          "id": "ex-15-2-1",
          "title": "Forma Göndərişinin Dayandırılması və Girişin Oxunması",
          "instruction": "Qeydiyyat formasının (#qeydiyyat-form) standart yenilənməsinin qarşısını alın, daxil edilmiş adı oxuyaraq \"Qeydiyyat tamamlandı: [ad]\" bildirişini konsola göndərin.",
          "starterCode": "const form = document.querySelector(\"#qeydiyyat-form\");\nconst adInput = document.querySelector(\"#istifadeci-adi\");\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "Qeydiyyat tamamlandı: Murad",
          "hint": "Formanın brauzeri yeniləməsinin qarşısını almaq üçün submit hadisəsində e.preventDefault() çağırılmalı və input sahəsinin value xassəsi oxunmalıdır.",
          "solutionCode": "const form = document.querySelector(\"#qeydiyyat-form\");\nconst adInput = document.querySelector(\"#istifadeci-adi\");\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  console.log(`Qeydiyyat tamamlandı: ${adInput.value}`);\n});\nadInput.value = \"Murad\";\nform.dispatchEvent(new Event(\"submit\"));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-15-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "preventDefault Unudulduqda Formanın Səhifəni Yeniləməsi",
          "instruction": "Aşağıdakı kodda proqramçı formanın <code>submit</code> hadisəsində <code>e.preventDefault()</code> çağırmağı unudub, nəticədə <code>e.defaultPrevented</code> dəyəri <code>false</code> qalıb. <code>e.preventDefault()</code> əlavə edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı kodda proqramçı formanın <code>submit</code> hadisəsində <code>e.preventDefault()</code> çağırmağı unudub, nəticədə <code>e.defaultPrevented</code> dəyəri <code>false</code> qalıb. <code>e.preventDefault()</code> əlavə edərək xətanı aradan qaldırın.",
          "buggyCode": "const form = document.querySelector(\"#abune-form\");\n\nform.addEventListener(\"submit\", (e) => {\n  // XƏTA: e.preventDefault() unudulub!\n  console.log(\"Defolt dayandırıldı:\", e.defaultPrevented);\n});\n\nform.dispatchEvent(new Event(\"submit\", { cancelable: true }));",
          "correctCode": "const form = document.querySelector(\"#abune-form\");\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  console.log(\"Defolt dayandırıldı:\", e.defaultPrevented);\n});\n\nform.dispatchEvent(new Event(\"submit\", { cancelable: true }));",
          "correctOutput": "Defolt dayandırıldı: true",
          "expectedOutput": "Defolt dayandırıldı: true",
          "explanation": "Forma göndərildikdə brauzer standart olaraq səhifəni yeniləyir və bütün cari JavaScript vəziyyətini sıfırlayır. e.preventDefault() çağırıldıqda brauzerə xəbər verilir ki, formanı JavaScript idarə edəcək və e.defaultPrevented dəyəri true olur.",
          "hint": "Formanın defolt göndərilməsinin qarşısını almaq üçün Event obyektinin preventDefault() metodundan istifadə edin."
        }
      ],
      "bugFix": {
        "id": "bug-15-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "preventDefault Unudulduqda Formanın Səhifəni Yeniləməsi",
        "instruction": "Aşağıdakı kodda proqramçı formanın <code>submit</code> hadisəsində <code>e.preventDefault()</code> çağırmağı unudub, nəticədə <code>e.defaultPrevented</code> dəyəri <code>false</code> qalıb. <code>e.preventDefault()</code> əlavə edərək xətanı aradan qaldırın.",
        "description": "Aşağıdakı kodda proqramçı formanın <code>submit</code> hadisəsində <code>e.preventDefault()</code> çağırmağı unudub, nəticədə <code>e.defaultPrevented</code> dəyəri <code>false</code> qalıb. <code>e.preventDefault()</code> əlavə edərək xətanı aradan qaldırın.",
        "buggyCode": "const form = document.querySelector(\"#abune-form\");\n\nform.addEventListener(\"submit\", (e) => {\n  // XƏTA: e.preventDefault() unudulub!\n  console.log(\"Defolt dayandırıldı:\", e.defaultPrevented);\n});\n\nform.dispatchEvent(new Event(\"submit\", { cancelable: true }));",
        "correctCode": "const form = document.querySelector(\"#abune-form\");\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  console.log(\"Defolt dayandırıldı:\", e.defaultPrevented);\n});\n\nform.dispatchEvent(new Event(\"submit\", { cancelable: true }));",
        "correctOutput": "Defolt dayandırıldı: true",
        "expectedOutput": "Defolt dayandırıldı: true",
        "explanation": "Forma göndərildikdə brauzer standart olaraq səhifəni yeniləyir və bütün cari JavaScript vəziyyətini sıfırlayır. e.preventDefault() çağırıldıqda brauzerə xəbər verilir ki, formanı JavaScript idarə edəcək və e.defaultPrevented dəyəri true olur.",
        "hint": "Formanın defolt göndərilməsinin qarşısını almaq üçün Event obyektinin preventDefault() metodundan istifadə edin."
      }
    },
    {
      "id": "topic-15-3",
      "title": "Hadisə Yayılması və Nümayəndəlik (Event Bubbling & Event Delegation)",
      "theory": `<h3>🫧 Hadisə Yayılması (Event Bubbling) Nədir?</h3>
<p>DOM ağacında hər hansı daxili elementdə (məsələn: <code>&lt;button&gt;</code> və ya <code>&lt;li&gt;</code>) bir hadisə baş verdikdə, hadisə yalnız həmin elementlə məhdudlaşmır.</p>

<p>Hadisə suyun dibindən çıxan qabarcıqlar kimi daxildən xaricə doğru yayılır (<strong>Bubbles up</strong>):</p>
<ol>
  <li>Əvvəlcə bilavasitə hədəf elementdə (<code>button</code>) işə düşür.</li>
  <li>Sonra onun birbaşa valideyninə (<code>li</code>) ötürülür.</li>
  <li>Daha sonra siyahıya (<code>ul</code>), <code>body</code>-yə və nəhayət <code>document</code>-ə qədər qalxır.</li>
</ol>

<h3>1. Yayılmanın Dayandırılması: e.stopPropagation()</h3>
<p>Bəzən daxili elementə klikləndikdə hadisənin yuxarıdakı valideyn konteynerlərə çatmasını istəmirik (məsələn: modal pəncərənin içindəki düyməyə kliklədikdə modalın fonu kliklənib bağlanmamalıdır). Bunun üçün <strong><code>e.stopPropagation()</code></strong> çağırılır.</p>

<h3>2. Hadisə Nümayəndəliyi (Event Delegation Pattern)</h3>
<p>Səhifənizdə dinamik 100 ədəd məhsul kartı olduqda, hər birinə tək-tək 100 ədəd dinləyici qoşmaq yaddaşı (RAM) yükləyir. Əvəzində <strong>tək bir dinləyicini valideyn konteynerə (<code>&lt;ul&gt;</code>)</strong> qoşuruq. Hadisə qabardığı üçün valideyn istənilən övladın klikini tutur və <code>e.target.matches()</code> ilə hədəf elementi dəqiqləşdirir:</p>

<div class="tip-box">
  <strong>🏢 Real Həyat Bənzətməsi: Resepsiyonist Modeli</strong>
  <p>50 mərtəbəli biznes mərkəzində hər bir ofis otağının qapısına ayrıca mühafizəçi qoymaq (hər elementə ayrı listener) böyük israfdır. Bunun əvəzinə binanın giriş qapısında tək bir resepsiyonist yerləşdirilir (<strong><code>valideyn.addEventListener</code></strong>). Binaya daxil olan hər kəsi resepsiyonist qarşılayır və vizitkasına baxaraq (<strong><code>e.target</code></strong>) onu düzgün şöbəyə yönləndirir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Hadisə Yaxalama Fazası (capture: true), CustomEvent və Debounce/Throttle</h4>
<p>Müasir memarlıqda hadisələrin 3 fazası, komponentlərarası xüsusi hadisələr və yüksək tezlikli hadisələrin məhdudlaşdırılması:</p>

<pre><code>// 1. Hadisənin 3 Fazası:
// Faz 1: Capturing (Yaxalama - window-dan hədəfə enir)
// Faz 2: Target (Bilavasitə hədəf elementdə)
// Faz 3: Bubbling (Qabarma - hədəfdən yuxarı qalxır)

// Hadisəni qabarma fazasında deyil, enmə fazasında tutmaq üçün:
konteyner.addEventListener("click", captureHandler, { capture: true });

// 2. Fərdi Hadisələr (CustomEvent API):
// Komponentlər arasında sərbəst məlumat ötürmək üçün:
const sifarisHadisesi = new CustomEvent("sifarisTamam", {
  detail: { sifarisId: "A-982", mebleg: 120 }
});

document.addEventListener("sifarisTamam", (e) => {
  console.log("Xüsusi hadisə tutuldu:", e.detail.sifarisId, e.detail.mebleg, "AZN");
});
document.dispatchEvent(sifarisHadisesi);

// 3. Yüksək Tezlikli Hadisələr üçün Debounce Mühərriki:
function debounce(fn, gecikme = 300) {
  let taymer;
  return function(...arqumentler) {
    clearTimeout(taymer);
    taymer = setTimeout(() => fn.apply(this, arqumentler), gecikme);
  };
}</code></pre>`,
      "codeExamples": [
        {
          "title": "e.stopPropagation() ilə Hadisə Qabarmasının Dayandırılması",
          "code": "const qutu = document.querySelector(\"#xarici-qutu\");\nconst daxiliBtn = document.querySelector(\"#daxili-btn\");\n\nqutu.addEventListener(\"click\", () => {\n  console.log(\"Xarici qutuya klikləndi!\");\n});\n\ndaxiliBtn.addEventListener(\"click\", (e) => {\n  e.stopPropagation(); // Valideyn qutuya qabarmasını dayandırırıq!\n  console.log(\"Yalnız daxili düymə klikləndi!\");\n});\n\n// Daxili düyməni klikləyirik\ndaxiliBtn.click();",
          "output": "Yalnız daxili düymə klikləndi!"
        },
        {
          "title": "Event Delegation ilə Bütün Menyuların İdarə Edilməsi",
          "code": "const menyu = document.querySelector(\"#esas-menyu\");\n\n// Yalnız valideyn menyuya 1 ədəd dinləyici qoşuruq!\nmenyu.addEventListener(\"click\", (e) => {\n  if (e.target.matches(\".meny-bendi\")) {\n    console.log(`Seçilmiş bölmə ID: ${e.target.id}`);\n  }\n});\n\n// Menyu bəndini simulyasiya edirik\nconst bend = document.querySelector(\"#bend-haqqimizda\");\nbend.classList.add(\"meny-bendi\");\nmenyu.appendChild(bend);\n\nbend.click();",
          "output": "Seçilmiş bölmə ID: bend-haqqimizda"
        }
      ],
      "exercises": [
        {
          "id": "ex-15-3-1",
          "title": "Hadisə Nümayəndəliyi (Event Delegation) ilə Silmə",
          "instruction": "Məhsullar siyahısında hər bir silmə düyməsinə tək-tək hadisə qoşmaq əvəzinə, valideyn element (#mehsul-siyahisi) üzərindən silmə düyməsini təsbit edin və silinən elementin identifikatorunu konsola çıxarın.",
          "starterCode": "const siyahi = document.querySelector(\"#mehsul-siyahisi\");\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "Element silindi: mehsul-42",
          "hint": "Valideyn elementə tək bir addEventListener qoşaraq daxildə if (e.target.matches(\".sil-btn\")) yoxlayın və e.target.id çıxarın. Test üçün document.querySelector(\"#mehsul-42\").click() çağırın.",
          "solutionCode": "const siyahi = document.querySelector(\"#mehsul-siyahisi\");\nsiyahi.addEventListener(\"click\", (e) => {\n  if (e.target.matches(\".sil-btn\")) {\n    console.log(`Element silindi: ${e.target.id}`);\n  }\n});\ndocument.querySelector(\"#mehsul-42\").click();"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-15-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Event Delegation-da Hədəf Elementin Şərtini Yoxlamamaq",
          "instruction": "Aşağıdakı kodda proqramçı valideyn konteynerə klik dinləyicisi qoşub, lakin <code>e.target.matches(\".aksiyon-btn\")</code> filtrini qoymadığı üçün konteynerin istənilən elementində kod icra olunub. <code>if (e.target.matches(\".aksiyon-btn\"))</code> şərtini daxil edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı kodda proqramçı valideyn konteynerə klik dinləyicisi qoşub, lakin <code>e.target.matches(\".aksiyon-btn\")</code> filtrini qoymadığı üçün konteynerin istənilən elementində kod icra olunub. <code>if (e.target.matches(\".aksiyon-btn\"))</code> şərtini daxil edərək xətanı aradan qaldırın.",
          "buggyCode": "const konteyner = document.querySelector(\"#panel\");\nconst duyme = document.querySelector(\"#tesdiq\");\nduyme.classList.add(\"aksiyon-btn\");\nkonteyner.appendChild(duyme);\n\nkonteyner.addEventListener(\"click\", (e) => {\n  // XƏTA: e.target.matches yoxlaması yoxdur!\n  console.log(\"Aksiyon icra edildi:\", e.target.id);\n});\n\nduyme.click();",
          "correctCode": "const konteyner = document.querySelector(\"#panel\");\nconst duyme = document.querySelector(\"#tesdiq\");\nduyme.classList.add(\"aksiyon-btn\");\nkonteyner.appendChild(duyme);\n\nkonteyner.addEventListener(\"click\", (e) => {\n  if (e.target.matches(\".aksiyon-btn\")) {\n    console.log(\"Aksiyon icra edildi:\", e.target.id);\n  }\n});\n\nduyme.click();",
          "correctOutput": "Aksiyon icra edildi: tesdiq",
          "expectedOutput": "Aksiyon icra edildi: tesdiq",
          "explanation": "Hadisə nümayəndəliyi zamanı valideyn konteyner daxildəki bütün elementlərdən qabaran klikləri tutur. Buna görə də daxildə mütləq e.target.matches('.sinif') və ya e.target.closest('selector') yoxlaması aparılmalıdır ki, yalnız hədəflənən düymələr emal edilsin.",
          "hint": "Xüsusi hadisə parametrləri CustomEvent-in detail xassəsində saxlanılır."
        }
      ],
      "bugFix": {
        "id": "bug-15-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Event Delegation-da Hədəf Elementin Şərtini Yoxlamamaq",
        "instruction": "Aşağıdakı kodda proqramçı valideyn konteynerə klik dinləyicisi qoşub, lakin <code>e.target.matches(\".aksiyon-btn\")</code> filtrini qoymadığı üçün konteynerin istənilən elementində kod icra olunub. <code>if (e.target.matches(\".aksiyon-btn\"))</code> şərtini daxil edərək xətanı aradan qaldırın.",
        "description": "Aşağıdakı kodda proqramçı valideyn konteynerə klik dinləyicisi qoşub, lakin <code>e.target.matches(\".aksiyon-btn\")</code> filtrini qoymadığı üçün konteynerin istənilən elementində kod icra olunub. <code>if (e.target.matches(\".aksiyon-btn\"))</code> şərtini daxil edərək xətanı aradan qaldırın.",
        "buggyCode": "const konteyner = document.querySelector(\"#panel\");\nconst duyme = document.querySelector(\"#tesdiq\");\nduyme.classList.add(\"aksiyon-btn\");\nkonteyner.appendChild(duyme);\n\nkonteyner.addEventListener(\"click\", (e) => {\n  // XƏTA: e.target.matches yoxlaması yoxdur!\n  console.log(\"Aksiyon icra edildi:\", e.target.id);\n});\n\nduyme.click();",
        "correctCode": "const konteyner = document.querySelector(\"#panel\");\nconst duyme = document.querySelector(\"#tesdiq\");\nduyme.classList.add(\"aksiyon-btn\");\nkonteyner.appendChild(duyme);\n\nkonteyner.addEventListener(\"click\", (e) => {\n  if (e.target.matches(\".aksiyon-btn\")) {\n    console.log(\"Aksiyon icra edildi:\", e.target.id);\n  }\n});\n\nduyme.click();",
        "correctOutput": "Aksiyon icra edildi: tesdiq",
        "expectedOutput": "Aksiyon icra edildi: tesdiq",
        "explanation": "Hadisə nümayəndəliyi zamanı valideyn konteyner daxildəki bütün elementlərdən qabaran klikləri tutur. Buna görə də daxildə mütləq e.target.matches('.sinif') və ya e.target.closest('selector') yoxlaması aparılmalıdır ki, yalnız hədəflənən düymələr emal edilsin.",
        "hint": "Xüsusi hadisə parametrləri CustomEvent-in detail xassəsində saxlanılır."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section15 };
}
console.log('Section 15 built successfully');
