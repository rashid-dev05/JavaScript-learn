// Section 12 Builder: ES6 OOP & Modullar (class, extends, static, import/export)
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section12 = {
  "id": "section-12",
  "title": "Bölmə 12: ES6 OOP & Modullar (class, extends, import, export)",
  "icon": "🏛️",
  "topics": [
    {
      "id": "topic-12-1",
      "title": "class Sintaksisi və constructor Metodu",
      "theory": `<h3>🏛️ Obyekt Yönümlü Proqramlaşdırma (OOP)</h3>
<p><strong>Klas (Class)</strong> — eyni növ obyektləri sistemli şəkildə istehsal etmək üçün istifadə olunan bir <strong>arxitektura qəlibi və ya layihə çertyojudur</strong>. Məsələn, bir <code>Avtomobil</code> klası tərtib edib ondan minlərlə müxtəlif rəngdə və modeldə maşın obyekti yarada bilərik.</p>

<h3>ES6 class Sintaksisi:</h3>
<pre><code>class Masin {
  // Konstruktor: obyekt "new" ilə yarananda ilk işə düşən xüsusi metoddur
  constructor(marka, reng) {
    this.marka = marka; // this cari yaradılan obyektə istinad edir
    this.reng = reng;
  }

  // Klasın ümumi metodları (bütün nümunələr üçün ortaqdır)
  melumat() {
    return \`\${this.reng} \${this.marka}\`;
  }
}

// Klasdan yeni obyekt nüsxəsi (instance) yaradırıq:
const masin1 = new Masin("BMW", "Qara");
console.log(masin1.melumat()); // "Qara BMW"</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Memarlıq Çertyoju və Binalar</strong>
  <p>Memar yaşayış kompleksi üçün bir dəfə əsaslı mənzil çertyoju (Class) hazırlayır. Tikinti şirkəti həmin tək bir çertyoj əsasında yüzlərlə eyni otaq planına malik, lakin fərqli mərtəbə və mebellərlə təchiz olunmuş real mənzillər (Obyektlər / Instances) inşa edir. <code>new Masin()</code> əmri həmin çertyoj əsasında yeni bir mənzil tikmək kimidir.</p>
</div>

<div class="warning-box">
  <strong>⚠️ new Açar Sözü:</strong><br>
  Klas konstruktorunu adi funksiya kimi birbaşa çağırmaq olmaz (<code>Masin()</code>). Mütləq qarşısında <strong><code>new</code></strong> açar sözü yazılmalıdır: <code>new Masin(...)</code>.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Həqiqi Şəxsi Sahələr (#private fields) və Getter/Setter (get/set)</h4>
<p>Müasir JavaScript (ES2022) mühərrikləri sinif daxilində xarici müdaxilədən tam qorunan <strong>Həqiqi Şəxsi Sahələr (#private fields)</strong> təqdim edir. Bu sahələrə sinifdən kənarda birbaşa müraciət etmək sintaksis xətası verir. Məlumatı təhlükəsiz idarə etmək üçün isə <code>get</code> və <code>set</code> metodları tətbiq olunur:</p>

<pre><code>class BankHesabi {
  // Həqiqi Şəxsi Sahələr (# ilə başlayır)
  #balans = 0;
  #hesabNomresi;

  constructor(sahib, ilkinDepozit, hesabNo) {
    this.sahib = sahib; // Açıq (public) sahə
    this.#balans = ilkinDepozit;
    this.#hesabNomresi = hesabNo;
  }

  // Getter: Şəxsi balansı təhlükəsiz oxuyur
  get balans() {
    return \`\${this.#balans} AZN\`;
  }

  // Setter: Balansı yalnız yoxlamadan keçdikdən sonra artırır
  set depozit(mebleg) {
    if (mebleg <= 0) {
      throw new Error("Depozit məbləği müsbət olmalıdır!");
    }
    this.#balans += mebleg;
  }
}

const hesab = new BankHesabi("Aysel", 500, "AZ12984");
console.log(hesab.balans); // "500 AZN" (Getter işə düşdü)
hesab.depozit = 200;       // (Setter işə düşdü)
console.log(hesab.balans); // "700 AZN"

// console.log(hesab.#balans); 
// SyntaxError: Private field '#balans' must be declared in an enclosing class</code></pre>`,
      "codeExamples": [
        {
          "title": "Sadə Klas Nümunəsi",
          "code": "class Telebe {\n  constructor(ad, bal) {\n    this.ad = ad;\n    this.bal = bal;\n  }\n  kecibmi() {\n    return this.bal >= 50;\n  }\n}\n\nconst t1 = new Telebe(\"Aysel\", 85);\nconsole.log(t1.ad, t1.kecibmi());",
          "output": "Aysel true"
        }
      ],
      "exercises": [
        {
          "id": "ex-12-1-1",
          "title": "İstifadəçi Sinfinin və Metodunun Təyini",
          "instruction": "Ad və yaş qəbul edən konstruktora, eləcə də \"ad - yas\" formatında məlumat qaytaran <code>tanit</code> metoduna malik <code>User</code> sinfi yaradın və \"Murad\", 20 üçün nəticəni konsola verin.",
          "starterCode": "class User {\n  // Kodunuzu buraya yazın\n}\n\nconst u = new User(\"Murad\", 20);\nconsole.log(u.tanit());\n",
          "expectedOutput": "Murad - 20",
          "hint": "Müasir siniflərdə xassələr constructor daxilində this üzərindən mənimsədilir, metodlar isə sinif gövdəsində elan olunur.",
          "solutionCode": "class User {\n  constructor(ad, yas) {\n    this.ad = ad;\n    this.yas = yas;\n  }\n  tanit() {\n    return `${this.ad} - ${this.yas}`;\n  }\n}\nconst u = new User(\"Murad\", 20);\nconsole.log(u.tanit());"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-12-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Klas Konstruktorunun Çağırış Xətası",
          "instruction": "Klas əsasında yeni obyekt nüsxəsi yaradılmalıdır, lakin 'TypeError: Class constructor cannot be invoked without...' baş verir. Klasın konstruktorunu düzgün başladaraq obyekti formalaşdırın.",
          "description": "Klas əsasında yeni obyekt nüsxəsi yaradılmalıdır, lakin 'TypeError: Class constructor cannot be invoked without...' baş verir. Klasın konstruktorunu düzgün başladaraq obyekti formalaşdırın.",
          "buggyCode": "class Qutu {\n  constructor(olcu) {\n    this.olcu = olcu;\n  }\n}\nconst q = Qutu(10);\nconsole.log(q.olcu);",
          "correctCode": "class Qutu {\n  constructor(olcu) {\n    this.olcu = olcu;\n  }\n}\nconst q = new Qutu(10);\nconsole.log(q.olcu);",
          "correctOutput": "10",
          "expectedOutput": "10",
          "explanation": "JavaScript klaslarından yeni obyekt yaratmaq üçün mütləq 'new' açar sözü yazılmalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-12-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Klas Konstruktorunun Çağırış Xətası",
        "instruction": "Klas əsasında yeni obyekt nüsxəsi yaradılmalıdır, lakin 'TypeError: Class constructor cannot be invoked without...' baş verir. Klasın konstruktorunu düzgün başladaraq obyekti formalaşdırın.",
        "description": "Klas əsasında yeni obyekt nüsxəsi yaradılmalıdır, lakin 'TypeError: Class constructor cannot be invoked without...' baş verir. Klasın konstruktorunu düzgün başladaraq obyekti formalaşdırın.",
        "buggyCode": "class Qutu {\n  constructor(olcu) {\n    this.olcu = olcu;\n  }\n}\nconst q = Qutu(10);\nconsole.log(q.olcu);",
        "correctCode": "class Qutu {\n  constructor(olcu) {\n    this.olcu = olcu;\n  }\n}\nconst q = new Qutu(10);\nconsole.log(q.olcu);",
        "correctOutput": "10",
        "expectedOutput": "10",
        "explanation": "JavaScript klaslarından yeni obyekt yaratmaq üçün mütləq 'new' açar sözü yazılmalıdır."
      }
    },
    {
      "id": "topic-12-2",
      "title": "İrsiyyət (Inheritance): extends və super()",
      "theory": `<h3>🧬 İrsiyyət (Inheritance) Nədir?</h3>
<p><strong>İrsiyyət (Inheritance)</strong> — mövcud olan bir əsas (valideyn / superclass) sinfin xassə və metodlarını yeni bir törəmə (övlad / subclass) sinfə ötürmək mexanizmidir. Bu, kod təkrarını (DRY) aradan qaldırır və iyerarxik məntiq qurur.</p>

<h3><code>extends</code> və <code>super()</code> Mexanizmi:</h3>
<ul>
  <li><strong><code>extends</code>:</strong> Valideyn sinifdən irs almaq üçün istifadə olunur:<br>
  <code>class Isci extends Insan { ... }</code></li>
  <li><strong><code>super()</code>:</strong> Valideyn sinfin konstruktorunu işə salır. <strong>Törəmə sinif daxilində <code>this</code> açar sözünə toxunmazdan əvvəl mütləq <code>super()</code> çağırılmalıdır!</strong></li>
</ul>

<pre><code>class Heyvan {
  constructor(ad) {
    this.ad = ad;
  }
  sesCixar() {
    return \`\${this.ad} səs çıxarır\`;
  }
}

class It extends Heyvan {
  constructor(ad, cins) {
    super(ad); // Valideynin ad parametrini ötürürük
    this.cins = cins;
  }
}

const it1 = new It("Toplan", "Qurdbasar");
console.log(it1.sesCixar()); // "Toplan səs çıxarır"
console.log(it1.cins);       // "Qurdbasar"</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Nəqliyyat Vasitələri İyerarxiyası</strong>
  <p>Təsəvvür edin ki, ümumi <code>Neqliyyat</code> sinfiniz var (mühərriki var, sürəti var, hərəkət edir). <code>Avtomobil</code> və <code>Qayıq</code> sinifləri bu ümumi xüsusiyyətləri təkrar yazmadan <code>extends</code> ilə irs alır. Lakin Avtomobil əlavə olaraq təkər sayına, Qayıq isə lövbər funksiyasına sahib olur.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Polimorfizm və Kompozisiya (Composition over Inheritance)</h4>
<p>Böyük sistemlərdə dərin irsiyyət zəncirləri (3-4 səviyyədən çox) kodu kövrək və idarəolunmaz edir (məşhur <em>\"Gorilla/Banana problemi\"</em>: siz sadəcə banan istəyirdiniz, amma arxasında bananı tutan qorilla və bütöv cəngəllik gəldi). Mühəndislikdə <strong>Kompozisiya İrsiyyətdən Üstündür (Composition over Inheritance)</strong> prinsipi tətbiq olunur:</p>

<pre><code>// 1. Polimorfizm (Metodun əzilməsi / Method Overriding)
class Sekil {
  sahe() { return 0; }
}

class Kvadrat extends Sekil {
  constructor(teref) { super(); this.teref = teref; }
  // Valideynin sahe metodunu fərdi qaydada əzirik:
  sahe() { return this.teref * this.teref; }
}

// 2. Kompozisiya (Micro-behavior Mixins ilə funksionallıq yığımı)
const ucur = state => ({
  uc: () => \`\${state.ad} səmada uçur\`
});

const uzur = state => ({
  uz: () => \`\${state.ad} suda üzür\`
});

// Ördək həm uça, həm də üzə bilir:
function OrdekYarat(ad) {
  const ordek = { ad };
  return Object.assign(ordek, ucur(ordek), uzur(ordek));
}

const ordek = OrdekYarat("Yaşılbaş");
console.log(ordek.uc()); // "Yaşılbaş səmada uçur"
console.log(ordek.uz()); // "Yaşılbaş suda üzür"</code></pre>`,
      "codeExamples": [
        {
          "title": "extends və super() Nümunəsi",
          "code": "class Heyvan {\n  constructor(ad) {\n    this.ad = ad;\n  }\n  sesCixar() {\n    return `${this.ad} səs çıxarır`;\n  }\n}\n\nclass It extends Heyvan {\n  constructor(ad, cins) {\n    super(ad); // Valideynin ad parametrini ötürürük\n    this.cins = cins;\n  }\n}\n\nconst it1 = new It(\"Toplan\", \"Qurdbasar\");\nconsole.log(it1.sesCixar());\nconsole.log(it1.cins);",
          "output": "Toplan səs çıxarır\nQurdbasar"
        }
      ],
      "exercises": [
        {
          "id": "ex-12-2-1",
          "title": "Sinif İrsi və Valideyn Konstruktor Çağırışı",
          "instruction": "Mövcud <code>Isci</code> sinfindən törəyən, əlavə olaraq şöbə məlumatını qəbul edən <code>Menecer</code> sinfi tərtib edin və \"Leyla\", \"IT\" üçün şöbə adını konsolda əks etdirin.",
          "starterCode": "class Isci {\n  constructor(ad) {\n    this.ad = ad;\n  }\n}\n\n// Menecer sinfini tərtib edin\n\nconst m = new Menecer(\"Leyla\", \"IT\");\nconsole.log(m.sobe);\n",
          "expectedOutput": "IT",
          "hint": "Törəmə siniflərdə extends istifadə olunur və alt sinfin konstruktorunda ilk növbədə super(ad) çağırılmalıdır.",
          "solutionCode": "class Isci {\n  constructor(ad) {\n    this.ad = ad;\n  }\n}\n\nclass Menecer extends Isci {\n  constructor(ad, sobe) {\n    super(ad);\n    this.sobe = sobe;\n  }\n}\n\nconst m = new Menecer(\"Leyla\", \"IT\");\nconsole.log(m.sobe);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-12-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Valideyn Konstruktor Əlaqəsi Xətası",
          "instruction": "Törəmə klasda valideyn klasın xassələri başladılmalıdır, lakin obyekt yaradılarkən 'ReferenceError' baş verir. Valideyn konstruktor əlaqəsini təmin edərək xətanı aradan qaldırın.",
          "description": "Törəmə klasda valideyn klasın xassələri başladılmalıdır, lakin obyekt yaradılarkən 'ReferenceError' baş verir. Valideyn konstruktor əlaqəsini təmin edərək xətanı aradan qaldırın.",
          "buggyCode": "class Valideyn {\n  constructor(ad) { this.ad = ad; }\n}\nclass Ovlad extends Valideyn {\n  constructor(ad, yas) {\n    this.yas = yas;\n  }\n}\nconst o = new Ovlad(\"Əli\", 10);\nconsole.log(o.yas);",
          "correctCode": "class Valideyn {\n  constructor(ad) { this.ad = ad; }\n}\nclass Ovlad extends Valideyn {\n  constructor(ad, yas) {\n    super(ad);\n    this.yas = yas;\n  }\n}\nconst o = new Ovlad(\"Əli\", 10);\nconsole.log(o.yas);",
          "correctOutput": "10",
          "expectedOutput": "10",
          "explanation": "extends ilə törəyən klaslarda this istifadə etməzdən əvvəl mütləq valideynin konstruktoru olan super() çağırılmalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-12-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Valideyn Konstruktor Əlaqəsi Xətası",
        "instruction": "Törəmə klasda valideyn klasın xassələri başladılmalıdır, lakin obyekt yaradılarkən 'ReferenceError' baş verir. Valideyn konstruktor əlaqəsini təmin edərək xətanı aradan qaldırın.",
        "description": "Törəmə klasda valideyn klasın xassələri başladılmalıdır, lakin obyekt yaradılarkən 'ReferenceError' baş verir. Valideyn konstruktor əlaqəsini təmin edərək xətanı aradan qaldırın.",
        "buggyCode": "class Valideyn {\n  constructor(ad) { this.ad = ad; }\n}\nclass Ovlad extends Valideyn {\n  constructor(ad, yas) {\n    this.yas = yas;\n  }\n}\nconst o = new Ovlad(\"Əli\", 10);\nconsole.log(o.yas);",
        "correctCode": "class Valideyn {\n  constructor(ad) { this.ad = ad; }\n}\nclass Ovlad extends Valideyn {\n  constructor(ad, yas) {\n    super(ad);\n    this.yas = yas;\n  }\n}\nconst o = new Ovlad(\"Əli\", 10);\nconsole.log(o.yas);",
        "correctOutput": "10",
        "expectedOutput": "10",
        "explanation": "extends ilə törəyən klaslarda this istifadə etməzdən əvvəl mütləq valideynin konstruktoru olan super() çağırılmalıdır."
      }
    },
    {
      "id": "topic-12-3",
      "title": "Statik Metodlar (static)",
      "theory": `<h3>⚡ Statik Metodlar (static) Nədir?</h3>
<p><strong>Statik metodlar (static methods)</strong> — klasdan yaranan fərdi obyektlərə (nümunələrə) deyil, <strong>birbaşa sinfin (qəlibin) özünə aid olan</strong> köməkçi funksiyalardır. Onları çağırmaq üçün <code>new</code> ilə obyekt yaratmağa qətiyyən ehtiyac yoxdur:</p>

<pre><code>class Riyaziyyat {
  static topla(a, b) {
    return a + b;
  }
}

// Birbaşa sinfin adı ilə çağırırıq:
console.log(Riyaziyyat.topla(10, 20)); // 30</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Ümumi Alət Masası</strong>
  <p>JavaScript-in daxili <code>Math.max(5, 10)</code>, <code>Number.isNaN(val)</code> və ya <code>Object.keys(obj)</code> metodları məhz statik metodlardır. Hər dəfə maksimum ədədi tapmaq üçün <code>new Math()</code> deyib yaddaşda yeni obyekt yaratmırıq; alət birbaşa sinif səviyyəsində qlobal istifadəyə hazırdır.</p>
</div>

<div class="warning-box">
  <strong>⚠️ Vacib Qayda:</strong><br>
  Statik metodlar fərdi nümunələrin daxili xassələrinə (<code>this.ad</code> kimi) birbaşa çata bilməz. Çünki onlar nüsxə yaradılmadan çağırılır. Nüsxə üzərindən çağırıldıqda isə (məsələn, <code>obj.topla()</code>) <code>TypeError</code> baş verir.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Dizayn Şablonları: Singleton, Static Factory Method və new.target</h4>
<p>Statik metodlar və <code>new.target</code> xüsusiyyəti arxitekturada əvəzolunmaz dizayn şablonlarının tətbiqinə imkan verir:</p>

<pre><code>// 1. Singleton Şablonu (Yalnız tək bir verilənlər bazası bağlantısı saxlamaq)
class VerilenlerBazasi {
  static #instansiya = null;

  constructor() {
    if (VerilenlerBazasi.#instansiya) {
      return VerilenlerBazasi.#instansiya;
    }
    this.baglantiVaxti = Date.now();
    VerilenlerBazasi.#instansiya = this;
  }

  static getInstansiya() {
    if (!VerilenlerBazasi.#instansiya) {
      VerilenlerBazasi.#instansiya = new VerilenlerBazasi();
    }
    return VerilenlerBazasi.#instansiya;
  }
}

const db1 = VerilenlerBazasi.getInstansiya();
const db2 = VerilenlerBazasi.getInstansiya();
console.log(db1 === db2); // true (eyni fiziki nüsxə!)

// 2. Abstrakt Sinif Simulyasiyası (new.target ilə)
class AbstraktFiqur {
  constructor() {
    if (new.target === AbstraktFiqur) {
      throw new Error("Abstrakt sinifdən birbaşa obyekt yaratmaq qadağandır!");
    }
  }
}

// new AbstraktFiqur(); // Error fırladır!
class Daire extends AbstraktFiqur {}
const d = new Daire(); // Uğurludur!</code></pre>`,
      "codeExamples": [
        {
          "title": "Statik Metod Nümunəsi",
          "code": "class Komekci {\n  static salamDe(ad) {\n    return `Salam, ${ad}!`;\n  }\n}\n\nconsole.log(Komekci.salamDe(\"Samir\"));",
          "output": "Salam, Samir!"
        }
      ],
      "exercises": [
        {
          "id": "ex-12-3-1",
          "title": "Statik Köməkçi Metodun Təyini",
          "instruction": "Nüsxə yaratmağa ehtiyac olmadan birbaşa sinif üzərindən çağırılan və ədədin kvadratını qaytaran statik metoda malik <code>Hesab</code> sinfi tərtib edin və 6 arqumenti üçün nəticəni (36) konsola çıxarın.",
          "starterCode": "class Hesab {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(Hesab.kvadrat(6));\n",
          "expectedOutput": "36",
          "hint": "Birbaşa sinif adından çağırılan metodlar static açar sözü ilə təyin edilir: static kvadrat(n) { return n * n; }",
          "solutionCode": "class Hesab {\n  static kvadrat(n) {\n    return n * n;\n  }\n}\nconsole.log(Hesab.kvadrat(6));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-12-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Statik Metodu Obyektdən Çağırmaq Səhvi",
          "instruction": "Aşağıdakı kodda statik metod obyekt nüsxəsi üzərindən çağırıldığı üçün <code>TypeError</code> verir. Onu birbaşa klas adı ilə çağırın.",
          "description": "Aşağıdakı kodda statik metod obyekt nüsxəsi üzərindən çağırıldığı üçün <code>TypeError</code> verir. Onu birbaşa klas adı ilə çağırın.",
          "buggyCode": "class Test {\n  static salam() { return \"Salam\"; }\n}\nconst t = new Test();\nconsole.log(t.salam());",
          "correctCode": "class Test {\n  static salam() { return \"Salam\"; }\n}\nconsole.log(Test.salam());",
          "correctOutput": "Salam",
          "expectedOutput": "Salam",
          "explanation": "Statik metodlar obyekt nümunəsinə (instance) deyil, birbaşa klasın adına bağlıdır və Klas.metod() kimi çağırılmalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-12-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Statik Metodu Obyektdən Çağırmaq Səhvi",
        "instruction": "Aşağıdakı kodda statik metod obyekt nüsxəsi üzərindən çağırıldığı üçün <code>TypeError</code> verir. Onu birbaşa klas adı ilə çağırın.",
        "description": "Aşağıdakı kodda statik metod obyekt nüsxəsi üzərindən çağırıldığı üçün <code>TypeError</code> verir. Onu birbaşa klas adı ilə çağırın.",
        "buggyCode": "class Test {\n  static salam() { return \"Salam\"; }\n}\nconst t = new Test();\nconsole.log(t.salam());",
        "correctCode": "class Test {\n  static salam() { return \"Salam\"; }\n}\nconsole.log(Test.salam());",
        "correctOutput": "Salam",
        "expectedOutput": "Salam",
        "explanation": "Statik metodlar obyekt nümunəsinə (instance) deyil, birbaşa klasın adına bağlıdır və Klas.metod() kimi çağırılmalıdır."
      }
    },
    {
      "id": "topic-12-4",
      "title": "ES Modulları - import və export Sintaksisi",
      "theory": `<h3>📦 Modul Arxitekturası: Qlobal Xaosdan Təmiz Koda</h3>
<p>Köhnə JavaScript dövründə bütün skriptlər tək bir qlobal mühitdə (<code>window</code>) icra olunurdu. HTML-də ard-arda qoşulan <code>&lt;script&gt;</code> teqlərində bir fayldakı dəyişən digər fayldakı dəyişənlə toqquşaraq onu əzirdi (Global Scope Pollution). Bu, layihə böyüdükcə idarəolunmaz xaos və xətalar yaradırdı.</p>

<p><strong>ES6 (ECMAScript 2015)</strong> standartı ilə JavaScript-ə rəsmi <strong>ES Modulları (ESM)</strong> gətirildi. Bu gün React, Vue, Next.js, Vite və Node.js daxil olmaqla bütün müasir ekosistem məhz bu təməl üzərində qurulub.</p>

<div class="tip-box">
  <strong>🧰 Real Həyat Bənzətməsi: Alət Qutusu və Emalatxana</strong>
  <p>Hər bir JavaScript faylı müstəqil, qapalı bir emalatxanadır. Emalatxananın daxili detalları gizlidir (private). Digər otaqların istifadəsi üçün yalnız <code>export</code> etdiyimiz xüsusi alətlər açıq elan olunur. Digər fayllar isə bu alətləri <code>import</code> açar sözü ilə qəbul edir.</p>
</div>

<h3>1. Adlandırılmış İxracat və İdxal (Named Exports & Imports):</h3>
<pre><code>// riyaziyyat.js
export const PI = 3.14159;
export function topla(a, b) { return a + b; }

// app.js
import { topla, PI } from './riyaziyyat.js';
console.log(topla(10, 5)); // 15</code></pre>

<h3>2. Standart İxracat (Default Export & Import):</h3>
<p>Hər modulda yalnız <strong>bircə ədəd</strong> default dəyər ola bilər və idxal edərkən fiqurlu mötərizə <strong>yazılmır</strong>:</p>
<pre><code>// Istifadeci.js
export default class Istifadeci { constructor(ad) { this.ad = ad; } }

// main.js
import Istifadeci from './Istifadeci.js'; // { } yoxdur!</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Rol Əsaslı İcazə Sistemi (RBAC Engine) və Symbol.iterator</h4>
<p>Modul dizaynı təhlükəsizlik memarlığında (RBAC - Role-Based Access Control) və fərdi iterasiya edilə bilən kolleksiyalarda mühüm rol oynayır:</p>

<pre><code>// 1. Rol Əsaslı İcazə Sistemi (RBAC Engine)
export const ROLLAR = {
  ADMIN: "admin",
  REDAKTOR: "editor",
  OXUCU: "viewer"
};

export class IcazeMeneceri {
  #userRol;
  constructor(userRol) { this.#userRol = userRol; }

  icazeVarmi(emeliyyat) {
    if (this.#userRol === ROLLAR.ADMIN) return true;
    if (this.#userRol === ROLLAR.REDAKTOR && emeliyyat !== "istifadeci_sil") return true;
    return emeliyyat === "oxu";
  }
}

// 2. Fərdi İterasiya Olunan Sinif (Symbol.iterator ilə for...of dəstəyi)
export class KomandaKolleksiyasi {
  constructor() { this.uzvler = []; }
  elaveEt(uzv) { this.uzvler.push(uzv); }

  [Symbol.iterator]() {
    let index = 0;
    const uzvler = this.uzvler;
    return {
      next() {
        return index < uzvler.length
          ? { value: uzvler[index++], done: false }
          : { done: true };
      }
    };
  }
}

const komanda = new KomandaKolleksiyasi();
komanda.elaveEt("Aysel");
komanda.elaveEt("Murad");

for (const uzv of komanda) {
  console.log("Üzv:", uzv); // "Aysel", "Murad"
}</code></pre>`,
      "codeExamples": [
        {
          "title": "Named Exports və Adlandırma (as) Sintaksisi",
          "code": "// 'hesab.js' modul məntiqinin simulyasiyası\nexport const VALYUTA = \"AZN\";\n\nexport function meblegFormatla(qiymet) {\n  return `${qiymet.toFixed(2)} ${VALYUTA}`;\n}\n\nexport function endirimHesabla(qiymet, faiz) {\n  return qiymet - (qiymet * faiz) / 100;\n}\n\n// Digər faylda: import { meblegFormatla, endirimHesabla as endirim } from './hesab.js';\nconst ilkinQiymet = 120;\nconst endirimli = endirimHesabla(ilkinQiymet, 25);\n\nconsole.log(\"Yekun:\", meblegFormatla(endirimli));",
          "output": "Yekun: 90.00 AZN"
        },
        {
          "title": "Default Export və Klas İxracı",
          "code": "// 'avtomobil.js' modulu: default klas və named xassələr\nexport const MASIN_VERGI = 0.18;\n\nexport default class Avtomobil {\n  constructor(model, qiymet) {\n    this.model = model;\n    this.qiymet = qiymet;\n  }\n  yekunQiymet() {\n    return this.qiymet + (this.qiymet * MASIN_VERGI);\n  }\n}\n\n// İstifadə nümunəsi\nconst masin = new Avtomobil(\"Tesla Model 3\", 50000);\nconsole.log(masin.model);\nconsole.log(\"Vergili Qiymət:\", masin.yekunQiymet());",
          "output": "Tesla Model 3\nVergili Qiymət: 59000"
        }
      ],
      "exercises": [
        {
          "id": "ex-12-4-1",
          "title": "Maliyyə Modulu: Adlı və Defolt İxracat",
          "instruction": "Müasir modul prinsiplərinə uyğun olaraq valyuta sabitini, toplama funksiyasını və 18% ƏDV hesablayan defolt funksiyanı ixracata hazırlayın və konsol yoxlamasını təmin edin.",
          "starterCode": "// 1. VALYUTA sabitini və topla funksiyasını ixrac edin\n\n\n// 2. edvHesabla funksiyasını defolt olaraq ixrac edin\n\n\nconsole.log(\"Cəm:\", topla(15, 25), VALYUTA);\nconsole.log(\"ƏDV daxil:\", edvHesabla(100), VALYUTA);\n",
          "expectedOutput": "Cəm: 40 AZN\nƏDV daxil: 118 AZN",
          "hint": "Adlı ixrac üçün export const / export function, əsas funksiya üçün isə export default function sintaksisindən istifadə edin.",
          "solutionCode": "export const VALYUTA = \"AZN\";\n\nexport function topla(a, b) {\n  return a + b;\n}\n\nexport default function edvHesabla(mebleg) {\n  return mebleg * 1.18;\n}\n\nconsole.log(\"Cəm:\", topla(15, 25), VALYUTA);\nconsole.log(\"ƏDV daxil:\", edvHesabla(100), VALYUTA);"
        },
        {
          "id": "ex-12-4-2",
          "title": "Həndəsə Modulu: Dairə Sahəsinin Hesablanması",
          "instruction": "Dairənin sahəsini hesablamaq üçün PI sabitini və müvafiq sahə funksiyasını modula ixrac edin; 5 radiuslu dairənin sahəsini (78.5) konsol ekranına çıxarın.",
          "starterCode": "export const PI = 3.14;\n\nexport function daireSahesi(radius) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(\"Dairənin sahəsi:\", daireSahesi(5));\n",
          "expectedOutput": "Dairənin sahəsi: 78.5",
          "hint": "Dairənin sahə düsturu: PI * radius * radius. Nəticəni funksiyadan return edin.",
          "solutionCode": "export const PI = 3.14;\n\nexport function daireSahesi(radius) {\n  return PI * radius * radius;\n}\n\nconsole.log(\"Dairənin sahəsi:\", daireSahesi(5));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-12-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "İxrac Edilməmiş (Private) Dəyişənin Çağırılması",
          "instruction": "Aşağıdakı modula aid kodda xaricə <code>export</code> edilməmiş daxili (private) <code>gizliAcar</code> dəyişəni çağırıldığı üçün xəta yaranır. Yalnız xaricə açıq ixrac olunmuş <code>ACIQ_TOKEN</code> dəyişənini konsola çıxararaq kodu düzəldin.",
          "description": "Aşağıdakı modula aid kodda xaricə <code>export</code> edilməmiş daxili (private) <code>gizliAcar</code> dəyişəni çağırıldığı üçün xəta yaranır. Yalnız xaricə açıq ixrac olunmuş <code>ACIQ_TOKEN</code> dəyişənini konsola çıxararaq kodu düzəldin.",
          "buggyCode": "const gizliAcar = \"SECRET_KEY_999\";\nexport const ACIQ_TOKEN = \"TOKEN_XYZ_2026\";\n\nconsole.log(\"Token:\", gizliAcar);",
          "correctCode": "const gizliAcar = \"SECRET_KEY_999\";\nexport const ACIQ_TOKEN = \"TOKEN_XYZ_2026\";\n\nconsole.log(\"Token:\", ACIQ_TOKEN);",
          "correctOutput": "Token: TOKEN_XYZ_2026",
          "expectedOutput": "Token: TOKEN_XYZ_2026",
          "explanation": "Modullarda 'export' edilməyən dəyişənlər modulun daxilində gizli (private) qalır və xarici mühitdən əlçatmaz olur. Yalnız 'export' açar sözü ilə ictimai elan edilmiş dəyişənlər istifadə oluna bilər."
        }
      ],
      "bugFix": {
        "id": "bug-12-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "İxrac Edilməmiş (Private) Dəyişənin Çağırılması",
        "instruction": "Aşağıdakı modula aid kodda xaricə <code>export</code> edilməmiş daxili (private) <code>gizliAcar</code> dəyişəni çağırıldığı üçün xəta yaranır. Yalnız xaricə açıq ixrac olunmuş <code>ACIQ_TOKEN</code> dəyişənini konsola çıxararaq kodu düzəldin.",
        "description": "Aşağıdakı modula aid kodda xaricə <code>export</code> edilməmiş daxili (private) <code>gizliAcar</code> dəyişəni çağırıldığı üçün xəta yaranır. Yalnız xaricə açıq ixrac olunmuş <code>ACIQ_TOKEN</code> dəyişənini konsola çıxararaq kodu düzəldin.",
        "buggyCode": "const gizliAcar = \"SECRET_KEY_999\";\nexport const ACIQ_TOKEN = \"TOKEN_XYZ_2026\";\n\nconsole.log(\"Token:\", gizliAcar);",
        "correctCode": "const gizliAcar = \"SECRET_KEY_999\";\nexport const ACIQ_TOKEN = \"TOKEN_XYZ_2026\";\n\nconsole.log(\"Token:\", ACIQ_TOKEN);",
        "correctOutput": "Token: TOKEN_XYZ_2026",
        "expectedOutput": "Token: TOKEN_XYZ_2026",
        "explanation": "Modullarda 'export' edilməyən dəyişənlər modulun daxilində gizli (private) qalır və xarici mühitdən əlçatmaz olur. Yalnız 'export' açar sözü ilə ictimai elan edilmiş dəyişənlər istifadə oluna bilər."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section12 };
}
console.log('Section 12 built successfully');
