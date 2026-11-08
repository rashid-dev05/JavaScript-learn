// Section 11 Builder: Müasir Massiv Əməliyyatları (map, filter, reduce, find)
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section11 = {
  "id": "section-11",
  "title": "Bölmə 11: Müasir Massiv Əməliyyatları (map, filter, reduce, find)",
  "icon": "⚡",
  "topics": [
    {
      "id": "topic-11-1",
      "title": "map() Metodu ilə Transformasiya",
      "theory": `<h3>🗺️ map() Metodu ilə Transformasiya</h3>
<p><strong>map()</strong> — funksional proqramlaşdırmanın ən vacib metodlarından biridir. O, mövcud massivin hər bir elementini verilmiş əks etdirmə (mapping) funksiyasından keçirərək <strong>eyni uzunluqlu tamamilə yeni bir massiv</strong> qaytarır. Orijinal massiv isə toxunulmaz (immutable) qalır:</p>

<pre><code>const ededler = [1, 2, 3];
const ikiqat = ededler.map(x => x * 2);

console.log(ededler); // [1, 2, 3] (dəyişməz qaldı)
console.log(ikiqat);  // [2, 4, 6] (yeni massiv)</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Valyutadəyişmə Konveyeri</strong>
  <p>Təsəvvür edin ki, konveyer lenti ilə 10 ədəd 100 dollarlıq əskinas hərəkət edir. Hər bir əskinas avtomatlaşdırılmış skanerdən keçir və cari məzənnəyə vurularaq 170 manatlıq əskinas şəklində yeni qutuya yığılır. Orijinal pullar necə idisə elə qalır, yeni qutuda isə eyni sayda dəyişdirilmiş manatlar yaranır. <code>map()</code> məhz bu konveyer çeviricisidir.</p>
</div>

<div class="tip-box">
  <strong>🌟 Klassik for Dövrü ilə Müqayisə:</strong><br>
  Klassik dövrlərdə əvvəlcə boş massiv yaradıb <code>for</code> ilə gəzərək hər dəfə <code>push()</code> etmək lazım gəlirdi. <code>map()</code> isə bunu tək bir sətirdə deklarativ, aydın və yan təsirlərdən (side effects) uzaq şəkildə həyata keçirir.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Fərdi Polifil Yaradılması (Custom Polyfill) və Metod Zəncirləməsi</h4>
<p>Metodun daxili mühərrik məntiqini anlamaq üçün <code>Array.prototype</code> üzərində öz şəxsi <code>ozMap</code> polifilimizi yaradaq. <code>this</code> cari massivə istinad edir, callback isə 3 arqument qəbul edir: <code>(element, indeks, massiv)</code>:</p>

<pre><code>// 1. Array.prototype üçün fərdi map polifili
Array.prototype.ozMap = function(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback funksiya olmalıdır!");
  }
  const netice = [];
  for (let i = 0; i < this.length; i++) {
    // Seyrək (sparse) massivlərdə boş xanaları ötürmək üçün:
    if (i in this) {
      netice.push(callback(this[i], i, this));
    }
  }
  return netice;
};

// 2. Metod Zəncirləməsi (Method Chaining)
const qiymetler = [10, 20, 30];
const formatlanmis = qiymetler
  .ozMap(q => q * 1.18)          // 18% ƏDV əlavə et
  .ozMap(q => \`\${q.toFixed(2)} AZN\`); // Valyuta mətni formatına sal

console.log(formatlanmis);
// ["11.80 AZN", "23.60 AZN", "35.40 AZN"]</code></pre>`,
      "codeExamples": [
        {
          "title": "map() Nümunəsi",
          "code": "const adlar = [\"leyla\", \"murad\", \"aygül\"];\nconst boyukAdlar = adlar.map(ad => ad.toUpperCase());\nconsole.log(boyukAdlar);",
          "output": "[\n  \"LEYLA\",\n  \"MURAD\",\n  \"AYGÜL\"\n]"
        }
      ],
      "exercises": [
        {
          "id": "ex-11-1-1",
          "title": "Kolleksiyanın Riyazi Transformasiyası",
          "instruction": "Verilmiş ədədlər massivindəki hər bir qiymətin riyazi kvadratından ibarət yeni massiv formalaşdıraraq konsola çıxarın.",
          "starterCode": "const ededler = [2, 3, 4];\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[\n  4,\n  9,\n  16\n]",
          "hint": "Hər bir elementi dəyişdirərək eyni ölçülü yeni massiv almaq üçün map() metodundan istifadə edin.",
          "solutionCode": "const ededler = [2, 3, 4];\nconst netice = ededler.map(x => x * x);\nconsole.log(netice);"
        },
        {
          "id": "ex-11-1-2",
          "title": "Bütün Qiymətlərə Əlavənin Tətbiqi",
          "instruction": "Qiymətlər siyahısındakı hər bir elementi 5 vahid artıraraq əldə olunan yeni qiymətlər siyahısını konsol ekranında əks etdirin.",
          "starterCode": "const qiymetler = [10, 20, 30];\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[\n  15,\n  25,\n  35\n]",
          "hint": "Bütün elementləri ardıcıl artırmaq üçün qiymetler.map(x => x + 5) əməliyyatını tətbiq edin.",
          "solutionCode": "const qiymetler = [10, 20, 30];\nconsole.log(qiymetler.map(x => x + 5));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-11-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Massiv Çevrilməsində Qayıdış Qiyməti Xətası",
          "instruction": "Massivin elementlərinin ikiqat qiyməti hesablanmalıdır, lakin nəticədə elementlər 'undefined' olaraq qayıdır. Çevirmə funksiyasının daxili məntiqini araşdırıb hədəf massivi əldə edin.",
          "description": "Massivin elementlərinin ikiqat qiyməti hesablanmalıdır, lakin nəticədə elementlər 'undefined' olaraq qayıdır. Çevirmə funksiyasının daxili məntiqini araşdırıb hədəf massivi əldə edin.",
          "buggyCode": "const reqemler = [1, 2];\nconst netice = reqemler.map(x => {\n  x * 10;\n});\nconsole.log(netice);",
          "correctCode": "const reqemler = [1, 2];\nconst netice = reqemler.map(x => {\n  return x * 10;\n});\nconsole.log(netice);",
          "correctOutput": "[\n  10,\n  20\n]",
          "expectedOutput": "[\n  10,\n  20\n]",
          "explanation": "map() metoduna ötürülən funksiyada fiqurlu mötərizə açılırsa, yeni dəyəri qaytarmaq üçün mütləq return yazılmalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-11-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Massiv Çevrilməsində Qayıdış Qiyməti Xətası",
        "instruction": "Massivin elementlərinin ikiqat qiyməti hesablanmalıdır, lakin nəticədə elementlər 'undefined' olaraq qayıdır. Çevirmə funksiyasının daxili məntiqini araşdırıb hədəf massivi əldə edin.",
        "description": "Massivin elementlərinin ikiqat qiyməti hesablanmalıdır, lakin nəticədə elementlər 'undefined' olaraq qayıdır. Çevirmə funksiyasının daxili məntiqini araşdırıb hədəf massivi əldə edin.",
        "buggyCode": "const reqemler = [1, 2];\nconst netice = reqemler.map(x => {\n  x * 10;\n});\nconsole.log(netice);",
        "correctCode": "const reqemler = [1, 2];\nconst netice = reqemler.map(x => {\n  return x * 10;\n});\nconsole.log(netice);",
        "correctOutput": "[\n  10,\n  20\n]",
        "expectedOutput": "[\n  10,\n  20\n]",
        "explanation": "map() metoduna ötürülən funksiyada fiqurlu mötərizə açılırsa, yeni dəyəri qaytarmaq üçün mütləq return yazılmalıdır."
      }
    },
    {
      "id": "topic-11-2",
      "title": "filter() Metodu ilə Filtrləmə",
      "theory": `<h3>🎯 filter() Metodu Nədir?</h3>
<p><strong>filter()</strong> — massivin elementlərini məntiqi süzgəcdən (predikat yoxlamasından) keçirərək yalnız verilmiş şərti ödəyən (yəni <code>true</code> və ya <em>truthy</em> qaytaran) elementlərdən ibarət yeni bir alt-massiv qaytarır:</p>

<pre><code>const ballar = [45, 80, 92, 35, 74];
const kecenler = ballar.filter(bal => bal >= 50);

console.log(kecenler); // [80, 92, 74]</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Hava Limanının Təhlükəsizlik Rentgeni</strong>
  <p>Hava limanında sərnişinlərin çantaları konveyerlə rentgen aparatından keçir. Təhlükəsizlik qaydalarına uyğun gələn (<code>true</code>) çantalar maneəsiz təyyarəyə buraxılır, qadağan olunmuş əşyalar olan çantalar isə kənarda saxlanılır. <code>filter()</code> metodu məhz şərti ödəyən məlumatları seçib ayıran dəqiq süzgəcdir.</p>
</div>

<div class="warning-box">
  <strong>⚠️ filter() Qızıl Qaydası:</strong><br>
  Callback funksiyası Boolean qiymət qaytarmalıdır. Əgər şərt <code>true</code> olarsa, cari element yeni massivə daxil edilir. <code>false</code> olarsa kənarda qalır. Nəticə massivinin uzunluğu ilkin massivin uzunluğundan kiçik və ya bərabər olur.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Çoxmeyarlı Dinamik Filtrasiya və Məlumat Zənginləşdirilməsi</h4>
<p>E-ticarət (e-commerce) platformalarında istifadəçilər məhsulları bir neçə parametrə görə (kateqoriya, qiymət aralığı, anbarda mövcudluq) eyni vaxtda süzgəcdən keçirirlər. Çoxmeyarlı filtrləmə mühərrikini aşağıdakı kimi qurmaq olar:</p>

<pre><code>const mehsullar = [
  { id: 1, ad: "Laptop Pro", kateqoriya: "elektronika", qiymet: 2400, stokda: true },
  { id: 2, ad: "Klaviatura", kateqoriya: "aksesuar", qiymet: 120, stokda: false },
  { id: 3, ad: "Monitor 4K", kateqoriya: "elektronika", qiymet: 950, stokda: true },
  { id: 4, ad: "Maus", kateqoriya: "aksesuar", qiymet: 45, stokda: true }
];

// Dinamik filtr obyekti (istifadəçi seçimləri)
const secimler = {
  kateqoriya: "elektronika",
  maksQiymet: 2500,
  yalnizStokda: true
};

const netice = mehsullar.filter(m => {
  const kateqoriyaUygun = !secimler.kateqoriya || m.kateqoriya === secimler.kateqoriya;
  const qiymetUygun = !secimler.maksQiymet || m.qiymet <= secimler.maksQiymet;
  const stokUygun = !secimler.yalnizStokda || m.stokda;
  return kateqoriyaUygun && qiymetUygun && stokUygun;
});

console.log(netice.map(m => \`\${m.ad}: \${m.qiymet} AZN\`));
// ["Laptop Pro: 2400 AZN", "Monitor 4K: 950 AZN"]</code></pre>`,
      "codeExamples": [
        {
          "title": "filter() ilə Cüt Ədədləri Seçmək",
          "code": "const ededler = [1, 2, 3, 4, 5, 6];\nconst cutler = ededler.filter(n => n % 2 === 0);\nconsole.log(cutler);",
          "output": "[\n  2,\n  4,\n  6\n]"
        }
      ],
      "exercises": [
        {
          "id": "ex-11-2-1",
          "title": "Müsbət Ədədlərin Seçilməsi",
          "instruction": "Qarışıq ədədlər toplusundan yalnız sıfırdan böyük olan müsbət kəmiyyətləri süzgəcdən keçirərək yeni massiv şəklində konsola ötürün.",
          "starterCode": "const ededler = [-5, 10, -2, 8, 0];\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[\n  10,\n  8\n]",
          "hint": "Müəyyən şərtə cavab verən elementləri seçib ayırmaq üçün filter() metodundan istifadə olunur.",
          "solutionCode": "const ededler = [-5, 10, -2, 8, 0];\nconst musbetler = ededler.filter(x => x > 0);\nconsole.log(musbetler);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-11-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "filter Əvəzinə map İstifadəsi Səhvi",
          "instruction": "Aşağıdakı proqramçı tək ədədləri seçmək istəyərkən səhvən <code>map</code> yazıb və nəticədə <code>[true, false, true]</code> alıb. <code>filter</code> ilə düzəldin ki, tək ədədlərin özü (<code>[1, 3]</code>) çıxsın.",
          "description": "Aşağıdakı proqramçı tək ədədləri seçmək istəyərkən səhvən <code>map</code> yazıb və nəticədə <code>[true, false, true]</code> alıb. <code>filter</code> ilə düzəldin ki, tək ədədlərin özü (<code>[1, 3]</code>) çıxsın.",
          "buggyCode": "const saylar = [1, 2, 3];\nconst tekler = saylar.map(x => x % 2 !== 0);\nconsole.log(tekler);",
          "correctCode": "const saylar = [1, 2, 3];\nconst tekler = saylar.filter(x => x % 2 !== 0);\nconsole.log(tekler);",
          "correctOutput": "[\n  1,\n  3\n]",
          "expectedOutput": "[\n  1,\n  3\n]",
          "explanation": "Şərtə görə elementləri seçmək üçün map deyil, filter metodundan istifadə edilməlidir."
        }
      ],
      "bugFix": {
        "id": "bug-11-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "filter Əvəzinə map İstifadəsi Səhvi",
        "instruction": "Aşağıdakı proqramçı tək ədədləri seçmək istəyərkən səhvən <code>map</code> yazıb və nəticədə <code>[true, false, true]</code> alıb. <code>filter</code> ilə düzəldin ki, tək ədədlərin özü (<code>[1, 3]</code>) çıxsın.",
        "description": "Aşağıdakı proqramçı tək ədədləri seçmək istəyərkən səhvən <code>map</code> yazıb və nəticədə <code>[true, false, true]</code> alıb. <code>filter</code> ilə düzəldin ki, tək ədədlərin özü (<code>[1, 3]</code>) çıxsın.",
        "buggyCode": "const saylar = [1, 2, 3];\nconst tekler = saylar.map(x => x % 2 !== 0);\nconsole.log(tekler);",
        "correctCode": "const saylar = [1, 2, 3];\nconst tekler = saylar.filter(x => x % 2 !== 0);\nconsole.log(tekler);",
        "correctOutput": "[\n  1,\n  3\n]",
        "expectedOutput": "[\n  1,\n  3\n]",
        "explanation": "Şərtə görə elementləri seçmək üçün map deyil, filter metodundan istifadə edilməlidir."
      }
    },
    {
      "id": "topic-11-3",
      "title": "reduce() Metodu ilə Yekun Dəyər Hesablama",
      "theory": `<h3>🧮 reduce() Metodu Nədir?</h3>
<p><strong>reduce()</strong> — bütöv bir massivin elementlərini addım-addım tək bir yekun dəyərə (cəm, hasil, ən böyük ədəd, lüğət və s.) çevirən (aqreqasiya edən) ən güclü funksional metoddur:</p>

<pre><code>const ededler = [10, 20, 30];
const cem = ededler.reduce((akkumulyator, cari) => akkumulyator + cari, 0);

console.log(cem); // 60</code></pre>

<ul>
  <li><strong>Akkumulyator (Toplayıcı / acc):</strong> Əvvəlki addımlardan qalan və toplanan yekun qiymətdir.</li>
  <li><strong>Cari (Current / curr):</strong> Massivdən hazırda emal olunan növbəti elementdir.</li>
  <li><strong>İlkin Dəyər (Initial Value):</strong> Callback-dən sonra ikinci arqument kimi ötürülən başlanğıc dəyərdir (məsələn, cəmləmədə <code>0</code>, vurmada <code>1</code>, obyekt qruplaşdırmasında <code>{}</code>).</li>
</ul>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Supermarket Kassasının Skaneri</strong>
  <p>Alver səbətinizdə müxtəlif qiymətlərdə 10 məhsul var. Kassir hər bir məhsulu tək-tək skanerdən keçirir. Kassanın ekranındakı ümumi borc məbləği (akkumulyator) hər yeni məhsulun qiyməti (cari dəyər) ilə artır. Ən sonda sizə bütöv səbətin tək bir yekun kassa çeki təqdim olunur. <code>reduce()</code> məhz bu kassa skaneridir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Mürəkkəb Qruplaşdırma (groupBy Analoqu), Tezlik Xəritəsi və pipe Kompozisiyası</h4>
<p><code>reduce()</code> təkcə ədədləri toplamaq üçün deyil, məlumat strukturlarını kökündən dəyişdirmək üçün istifadə olunur:</p>

<pre><code>// 1. Kateqoriyaya görə qruplaşdırma (Object Group By)
const telebeler = [
  { ad: "Nigar", seher: "Bakı" },
  { ad: "Rəşad", seher: "Gəncə" },
  { ad: "Murad", seher: "Bakı" }
];

const qruplar = telebeler.reduce((acc, t) => {
  acc[t.seher] = acc[t.seher] || [];
  acc[t.seher].push(t.ad);
  return acc;
}, {});

console.log(qruplar);
// { "Bakı": ["Nigar", "Murad"], "Gəncə": ["Rəşad"] }

// 2. Tezlik Xəritəsi (Frequency Map)
const herfler = ["a", "b", "a", "c", "b", "a"];
const tezlik = herfler.reduce((acc, h) => {
  acc[h] = (acc[h] || 0) + 1;
  return acc;
}, {});
console.log(tezlik); // { a: 3, b: 2, c: 1 }

// 3. Funksional Boru (pipe Pipeline)
const pipe = (...funksiyalar) => x => funksiyalar.reduce((v, f) => f(v), x);
const artir = n => n + 1;
const ikiyeVur = n => n * 2;
const kvadrataYukselt = n => n * n;

const emeliyyat = pipe(artir, ikiyeVur, kvadrataYukselt);
console.log(emeliyyat(2)); // ((2 + 1) * 2)^2 = 36</code></pre>`,
      "codeExamples": [
        {
          "title": "reduce() ilə Cəmin Hesablanması",
          "code": "const xallar = [5, 10, 15];\nconst yekun = xallar.reduce((toplam, xal) => toplam + xal, 0);\nconsole.log(\"Yekun Xal:\", yekun);",
          "output": "Yekun Xal: 30"
        }
      ],
      "exercises": [
        {
          "id": "ex-11-3-1",
          "title": "Kolleksiya Üzrə Ümumi Cəmin Toplanması",
          "instruction": "Siyahıdakı bütün məhsul qiymətlərini tək bir ümumi yekun məbləğə (400) qədər toplayaraq nəticəni konsolda əks etdirin.",
          "starterCode": "const qiymetler = [100, 250, 50];\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "400",
          "hint": "Bütün massiv elementlərini tək bir yekun dəyərə yığmaq (aqreqasiya etmək) üçün reduce() metodundan istifadə olunur.",
          "solutionCode": "const qiymetler = [100, 250, 50];\nconst cem = qiymetler.reduce((acc, curr) => acc + curr, 0);\nconsole.log(cem);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-11-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Hasil Hesablarkən İlkin Dəyər Səhvi",
          "instruction": "Ədədlər massivinin hasili (24) hesablanmalıdır, lakin hesablama alqoritmindəki qüsur səbəbindən yekun nəticə hər zaman '0' çıxır. Akkumulyatorun başlanğıc dəyərini və vurma məntiqini tənzimləyin.",
          "description": "Ədədlər massivinin hasili (24) hesablanmalıdır, lakin hesablama alqoritmindəki qüsur səbəbindən yekun nəticə hər zaman '0' çıxır. Akkumulyatorun başlanğıc dəyərini və vurma məntiqini tənzimləyin.",
          "buggyCode": "const reqemler = [2, 3, 4];\nconst hasil = reqemler.reduce((acc, x) => acc * x, 0);\nconsole.log(hasil);",
          "correctCode": "const reqemler = [2, 3, 4];\nconst hasil = reqemler.reduce((acc, x) => acc * x, 1);\nconsole.log(hasil);",
          "correctOutput": "24",
          "expectedOutput": "24",
          "explanation": "Vurma (hasil) əməliyyatında ilkin dəyər 0 deyil, 1 olmalıdır, əks halda hər şey sıfıra vurularaq sıfır alınır."
        }
      ],
      "bugFix": {
        "id": "bug-11-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Hasil Hesablarkən İlkin Dəyər Səhvi",
        "instruction": "Ədədlər massivinin hasili (24) hesablanmalıdır, lakin hesablama alqoritmindəki qüsur səbəbindən yekun nəticə hər zaman '0' çıxır. Akkumulyatorun başlanğıc dəyərini və vurma məntiqini tənzimləyin.",
        "description": "Ədədlər massivinin hasili (24) hesablanmalıdır, lakin hesablama alqoritmindəki qüsur səbəbindən yekun nəticə hər zaman '0' çıxır. Akkumulyatorun başlanğıc dəyərini və vurma məntiqini tənzimləyin.",
        "buggyCode": "const reqemler = [2, 3, 4];\nconst hasil = reqemler.reduce((acc, x) => acc * x, 0);\nconsole.log(hasil);",
        "correctCode": "const reqemler = [2, 3, 4];\nconst hasil = reqemler.reduce((acc, x) => acc * x, 1);\nconsole.log(hasil);",
        "correctOutput": "24",
        "expectedOutput": "24",
        "explanation": "Vurma (hasil) əməliyyatında ilkin dəyər 0 deyil, 1 olmalıdır, əks halda hər şey sıfıra vurularaq sıfır alınır."
      }
    },
    {
      "id": "topic-11-4",
      "title": "find(), some() və every() Metodları",
      "theory": `<h3>🔍 Digər Faydalı Massiv Metodları</h3>
<p>Müasir JavaScript-də <code>for</code> dövrlərini əvəz edən və kənarlaşma/axtarış məntiqini sadələşdirən 3 əsas metod:</p>

<ul>
  <li><strong><code>find(fn)</code>:</strong> Şərti ödəyən <strong>ən birinci elementi</strong> tapıb qaytarır (filter kimi massiv deyil, elementin birbaşa özünü qaytarır; tapmazsa <code>undefined</code> olur). Şərt ödənən kimi axtarışı dayandırır (short-circuiting):<br>
  <code>[10, 25, 30].find(x => x > 20) // 25</code></li>
  <li><strong><code>some(fn)</code>:</strong> Massivdə <strong>ən azı bircə element</strong> şərti ödəyirsə <code>true</code>, heç biri ödəmirsə <code>false</code> qaytarır:<br>
  <code>[-1, 5, -3].some(x => x > 0) // true (çünki 5 müsbətdir)</code></li>
  <li><strong><code>every(fn)</code>:</strong> Yalnız və yalnız <strong>bütün elementlər</strong> şərti ödədikdə <code>true</code> qaytarır; bircə dənə şərtə uyğun olmayan tapılarsa dərhal <code>false</code> olur:<br>
  <code>[2, 4, 6].every(x => x % 2 === 0) // true</code></li>
</ul>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Sərnişin və Bilet Nəzarəti</strong>
  <p>Təsəvvür edin ki, təyyarəyə minik qapısındasınız:
    <br>• <code>find()</code>: Təhlükəsizlik xidmətinin axtardığı konkret şəxsi sərnişin siyahısından ilk gördüyü an tutmasıdır.
    <br>• <code>some()</code>: Sərnişinlər arasında təcili tibbi yardıma ehtiyacı olan ən azı bir həkimin olub-olmadığını yoxlamaqdır.
    <br>• <code>every()</code>: Təyyarənin havaya qalxması üçün BÜTÜN sərnişinlərin təhlükəsizlik kəmərini bağlamasını tələb etməkdir.
  </p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Düzgün Sıralama (sort), flatMap() və Dərin Düzləşdirmə (Recursive Flatten)</h4>
<p>Massivlərin sıralanması və iç-içə strukturların düzləşdirilməsində mühəndislərin tez-tez qarşılaşdığı tələlər və müasir həllər:</p>

<pre><code>// 1. sort() Tələsi (ASCII / UTF-16 əlifba sırası):
const ededler = [10, 5, 20, 100];
ededler.sort(); // [10, 100, 20, 5] -- Səhvdir! Mətn kimi sıralayır!
ededler.sort((a, b) => a - b); // [5, 10, 20, 100] -- Düzgün riyazi sıralama!

// Sətirlər üçün regional əlifba sıralaması (Azərbaycan hərfləri):
const seherler = ["Gəncə", "Bakı", "Şəki", "Ağdam"];
seherler.sort((a, b) => a.localeCompare(b, "az"));
console.log(seherler); // ["Ağdam", "Bakı", "Gəncə", "Şəki"]

// 2. flatMap() ilə Xəritələmə və Düzləşdirmə bir addımda
const cumleler = ["Salam dünya", "JavaScript öyrənirəm"];
const sozler = cumleler.flatMap(c => c.split(" "));
console.log(sozler); // ["Salam", "dünya", "JavaScript", "öyrənirəm"]

// 3. Sonsuz Dərinlikli Rekursiv Düzləşdirmə (Deep Flatten)
function derinDuzlesdir(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? derinDuzlesdir(cur) : cur);
  }, []);
}
console.log(derinDuzlesdir([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]</code></pre>`,
      "codeExamples": [
        {
          "title": "find() və every() Nümunəsi",
          "code": "const telebeler = [\n  { ad: \"Aysel\", bal: 95 },\n  { ad: \"Tural\", bal: 80 }\n];\n\nconst tapilan = telebeler.find(t => t.bal > 90);\nconsole.log(tapilan.ad);\n\nconst hamisiKecdiler = telebeler.every(t => t.bal >= 50);\nconsole.log(\"Hamısı keçdi:\", hamisiKecdiler);",
          "output": "Aysel\nHamısı keçdi: true"
        }
      ],
      "exercises": [
        {
          "id": "ex-11-4-1",
          "title": "Kriteriyaya Uyğun İlk Elementin Tapılması",
          "instruction": "Ədədlər ardıcıllığında 10-dan böyük olan ən birinci ədədi müəyyən edərək konsol pəncərəsində əks etdirin.",
          "starterCode": "const ededler = [5, 12, 8, 130];\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "12",
          "hint": "Şərtə uyğun gələn ilk tək elementi tapmaq üçün find() metodundan istifadə edin.",
          "solutionCode": "const ededler = [5, 12, 8, 130];\nconsole.log(ededler.find(x => x > 10));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-11-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Tək Obyekt Axtarışında Metod Seçimi Xətası",
          "instruction": "Massivdən ID-si 2 olan istifadəçi obyekti tək bir element kimi əldə edilməlidir, lakin funksiya bütöv bir massiv qaytarır. Tək elementi birbaşa əldə edən düzgün massiv metodunu tətbiq edin.",
          "description": "Massivdən ID-si 2 olan istifadəçi obyekti tək bir element kimi əldə edilməlidir, lakin funksiya bütöv bir massiv qaytarır. Tək elementi birbaşa əldə edən düzgün massiv metodunu tətbiq edin.",
          "buggyCode": "const users = [{id: 1, ad: \"Əli\"}, {id: 2, ad: \"Vəli\"}];\nconst tapildi = users.filter(u => u.id === 2);\nconsole.log(tapildi.ad);",
          "correctCode": "const users = [{id: 1, ad: \"Əli\"}, {id: 2, ad: \"Vəli\"}];\nconst tapildi = users.find(u => u.id === 2);\nconsole.log(tapildi.ad);",
          "correctOutput": "Vəli",
          "expectedOutput": "Vəli",
          "explanation": "filter() həmişə massiv qaytarır. Tək bir elementi tapmaq üçün find() metodundan istifadə edilməlidir."
        }
      ],
      "bugFix": {
        "id": "bug-11-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Tək Obyekt Axtarışında Metod Seçimi Xətası",
        "instruction": "Massivdən ID-si 2 olan istifadəçi obyekti tək bir element kimi əldə edilməlidir, lakin funksiya bütöv bir massiv qaytarır. Tək elementi birbaşa əldə edən düzgün massiv metodunu tətbiq edin.",
        "description": "Massivdən ID-si 2 olan istifadəçi obyekti tək bir element kimi əldə edilməlidir, lakin funksiya bütöv bir massiv qaytarır. Tək elementi birbaşa əldə edən düzgün massiv metodunu tətbiq edin.",
        "buggyCode": "const users = [{id: 1, ad: \"Əli\"}, {id: 2, ad: \"Vəli\"}];\nconst tapildi = users.filter(u => u.id === 2);\nconsole.log(tapildi.ad);",
        "correctCode": "const users = [{id: 1, ad: \"Əli\"}, {id: 2, ad: \"Vəli\"}];\nconst tapildi = users.find(u => u.id === 2);\nconsole.log(tapildi.ad);",
        "correctOutput": "Vəli",
        "expectedOutput": "Vəli",
        "explanation": "filter() həmişə massiv qaytarır. Tək bir elementi tapmaq üçün find() metodundan istifadə edilməlidir."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section11 };
}
console.log('Section 11 built successfully');
