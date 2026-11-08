const fs = require('fs');

const section7 = {
  "id": "section-7",
  "title": "Bölmə 7: Funksiyalar (Declarations, Arrow Functions, Default Parametrlər)",
  "icon": "⚡",
  "topics": [
    {
      "id": "topic-7-1",
      "title": "Funksiya Nədir və Function Declaration",
      "theory": `<h3>⚡ Funksiya Nədir?</h3>
<p><strong>Funksiya</strong> — müəyyən bir tapşırığı yerinə yetirən və proqramın istənilən yerindən təkrar-təkrar çağırıla bilən müstəqil kod blokudur. Proqramlaşdırmanın qızıl qaydası olan <strong>DRY (Don't Repeat Yourself - Özünü Təkrarlama)</strong> prinsipinə xidmət edir.</p>

<div class="tip-box">
  <strong>💡 Şirəçəkən Maşın Analogiyası:</strong> Funksiyanı mətbəxdəki şirəçəkən maşına bənzədə bilərsiniz. Parametr kimi ona meyvə (arqument) veririk, daxildə onu sıxır və nəticə olaraq bizə <code>return</code> ilə təzə şirə qaytarır!
</div>

<h4>Klassik Funksiya Sintaksisi (Function Declaration):</h4>
<pre><code>function topla(a, b) {
  return a + b; // Hesablanmış dəyəri geri qaytarır
}

let netice = topla(10, 20); // Funksiyanın çağırılması
console.log(netice); // 30</code></pre>

<ul>
  <li><strong>Parametr:</strong> Funksiya elan edilərkən mötərizə içində qəbul ediləcək dəyişənlərdir (məs: <code>a</code> və <code>b</code>).</li>
  <li><strong>Arqument:</strong> Funksiyanı çağırarkən ona ötürdüyümüz real qiymətlərdir (məs: <code>10</code> və <code>20</code>).</li>
  <li><strong>return:</strong> Funksiyanın icrasını dərhal dayandırır və hesablanmış nəticəni kənara ötürür.</li>
  <li><strong>Hoisting (Qaldırılma):</strong> <code>function</code> açar sözü ilə elan edilən funksiyalar yuxarı qaldırıldığı üçün onları təyin olunduqları sətirdən əvvəl də çağırmaq mümkündür.</li>
</ul>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Rekursiya və Baza Çıxış Şərtləri (Recursion & Base Condition)</h4>
<p><strong>Rekursiya (Recursion)</strong> — funksiyanın öz-özünü birbaşa və ya dolayısı ilə çağırması prosesidir. Ağacvari strukturlar, qovluq iyerarxiyaları və riyazi silsilələr üçün ən güclü alətdir.</p>

<div class="warning-box">
  <strong>⚠️ Baza Şərtinin (Base Condition) Həyati Vacibliyi:</strong><br>
  Hər bir rekursiv funksiyanın daxilində çağırışı dayandıran <strong>baza şərti</strong> mütləq olmalıdır! Əks halda funksiya sonsuz zəncir yaradacaq və Call Stack daşaraq <code>RangeError: Maximum call stack size exceeded</code> qəzası baş verəcəkdir.
</div>

<p><strong>Rekursiv Faktorial Hesablayıcı Nümunəsi (\(n!\)):</strong></p>
<pre><code>function faktorial(n) {
  // 1. Baza çıxış şərti:
  if (n <= 1) return 1;

  // 2. Rekursiv addım:
  return n * faktorial(n - 1);
}

console.log(faktorial(5)); // 5 * 4 * 3 * 2 * 1 = 120</code></pre>`,
      "codeExamples": [
        {
          "title": "Toplama Funksiyası",
          "code": "function topla(a, b) {\n  return a + b;\n}\n\nlet cem = topla(15, 25);\nconsole.log(\"Cəm:\", cem);",
          "output": "Cəm: 40"
        },
        {
          "title": "Rekursiv Geri Sayım",
          "code": "function geriSayim(n) {\n  if (n === 0) {\n    console.log(\"Start!\");\n    return;\n  }\n  console.log(n);\n  geriSayim(n - 1);\n}\ngeriSayim(3);",
          "output": "3\n2\n1\nStart!"
        }
      ],
      "exercises": [
        {
          "id": "ex-7-1-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Kvadrat Hesablayan Funksiyanın Tərtibi",
          "instruction": "Qəbul etdiyi ədədi parametr kimi dəyərləndirib onun riyazi kvadratını geri qaytaran <code>kvadrat</code> funksiyasını tərtib edin və 5 arqumenti üçün nəticəni (25) konsola çıxarın.",
          "starterCode": "function kvadrat(eded) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(kvadrat(5));\n",
          "expectedOutput": "25",
          "hint": "Funksiyadan nəticəni kənara ötürmək üçün return açar sözündən istifadə edin (məsələn, return eded * eded).",
          "solutionCode": "function kvadrat(eded) {\n  return eded * eded;\n}\n\nconsole.log(kvadrat(5));"
        },
        {
          "id": "ex-7-1-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Fərdiləşdirilmiş Salamlama Generatoru",
          "instruction": "Daxil edilən ad məlumatını qəbul edərək \"Salam, [ad]\" formatında fərdiləşdirilmiş salamlama mətni qaytaran <code>salamla</code> funksiyası hazırlayın və \"Əli\" üçün nəticəni ekrana verin.",
          "starterCode": "function salamla(ad) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(salamla(\"Əli\"));\n",
          "expectedOutput": "Salam, Əli",
          "hint": "Mətnləri birləşdirmək üçün toplama (+) operatorundan və ya şablon sətirlərdən istifadə edərək mətni return edin.",
          "solutionCode": "function salamla(ad) {\n  return \"Salam, \" + ad;\n}\n\nconsole.log(salamla(\"Əli\"));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-7-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Python def Açar Sözü Xətası",
          "instruction": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
          "description": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
          "buggyCode": "def vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
          "correctCode": "function vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
          "correctOutput": "20",
          "expectedOutput": "20",
          "explanation": "JavaScript-də funksiyalar 'def' ilə deyil, 'function' açar sözü ilə elan edilir.",
          "hint": "def sözünü function ilə əvəzləyin."
        }
      ],
      "bugFix": {
        "id": "bug-7-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Python def Açar Sözü Xətası",
        "instruction": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
        "description": "Aşağıdakı kodda funksiya elanı üçün Python-un def sözü yazılıb. Onu JavaScript-in function açar sözü ilə düzəldin.",
        "buggyCode": "def vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
        "correctCode": "function vur(x, y) {\n  return x * y;\n}\nconsole.log(vur(4, 5));",
        "correctOutput": "20",
        "expectedOutput": "20",
        "explanation": "JavaScript-də funksiyalar 'def' ilə deyil, 'function' açar sözü ilə elan edilir.",
        "hint": "def sözünü function ilə əvəzləyin."
      }
    },
    {
      "id": "topic-7-2",
      "title": "Standart (Default) Parametrlər və Rest Operatoru (...)",
      "theory": `<h3>⚙️ Standart (Default) Parametrlər</h3>
<p>Funksiyanı çağırarkən hər hansı parametr ötürülmədikdə onun <code>undefined</code> olub hesabı pozmaması üçün əvvəlcədən <strong>defolt dəyər</strong> təyin edirik:</p>
<pre><code>function salamla(ad = "Qonaq") {
  return "Xoş gəldiniz, " + ad;
}
console.log(salamla());        // "Xoş gəldiniz, Qonaq"
console.log(salamla("Murad")); // "Xoş gəldiniz, Murad"</code></pre>

<div class="tip-box">
  <strong>💡 Restoran Menyu Analogiyası:</strong> Süfrəyə çörək və su standart olaraq daxildir (default parametr). Müştəri xüsusi başqa sifariş verdikdə isə standart seçim həmin sifarişlə əvəz olunur.
</div>

<h4>Rest Operatoru (<code>...parametrlər</code>):</h4>
<p>Əgər funksiyaya neçə ədəd arqument ötürüləcəyini əvvəlcədən bilmiriksə, <strong>Rest operatoru (<code>...</code>)</strong> bütün artıq arqumentləri tək bir massivə yığır:</p>
<pre><code>function topla(...ededler) {
  return ededler.reduce((c, n) => c + n, 0);
}
console.log(topla(2, 4, 6)); // 12</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Yüksək Dərəcəli Funksiyalar (Higher-Order Functions) və Karrinqləmə (Currying)</h4>
<p>JavaScript-də funksiyalar <strong>Birinci Dərəcəli Vətəndaşlardır (First-Class Citizens)</strong>: onlar dəyişənə mənimsədilə, başqa funksiyaya parametr kimi ötürülə və ya funksiyadan geri qaytarıla bilər.</p>

<p><strong>1. Karrinqləmə (Currying):</strong> Çoxarqumentli funksiyanı hər dəfə yalnız tək arqument qəbul edən zəncirvari təkfunksiyalı silsiləyə çevirmək texnikasıdır:</p>
<pre><code>// Adi forma:
const vur = (a, b) => a * b;

// Karrinqlənmiş forma:
const curriedVur = a => b => a * b;
const ikiyeVuran = curriedVur(2); // Partial Application (Qismən tətbiq)

console.log(ikiyeVuran(5)); // 10
console.log(curriedVur(3)(4)); // 12</code></pre>

<div class="warning-box">
  <strong>⚠️ Rest Parametri Həmişə Sonda Olmalıdır:</strong> <code>function test(a, ...qalanlar)</code> tamamilə qanunidir. Lakin <code>function test(...qalanlar, a)</code> yazdıqda mühərrik dərhal <code>SyntaxError: Rest parameter must be last formal parameter</code> xətası verəcəkdir!
</div>`,
      "codeExamples": [
        {
          "title": "Default Parametr Nümunəsi",
          "code": "function endirimliQiymet(qiymet, faiz = 10) {\n  return qiymet - (qiymet * faiz / 100);\n}\n\nconsole.log(endirimliQiymet(100));     // 90 (standart 10% çıxıldı)\nconsole.log(endirimliQiymet(100, 20)); // 80 (20% çıxıldı)",
          "output": "90\n80"
        },
        {
          "title": "Karrinqləmə ilə Prefiks Əlavəsi",
          "code": "const prefiksYaradan = prefiks => metn => `${prefiks}: ${metn}`;\nconst xetaLoqqeri = prefiksYaradan(\"[XƏTA]\");\n\nconsole.log(xetaLoqqeri(\"Verilənlər bazası tapılmadı!\"));",
          "output": "[XƏTA]: Verilənlər bazası tapılmadı!"
        }
      ],
      "exercises": [
        {
          "id": "ex-7-2-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Defolt Valyuta Parametri ilə Qiymətləndirmə",
          "instruction": "Məbləği və seçimli valyutanı birləşdirən <code>qiymetYaz</code> funksiyası qurun. İkinci parametr ötürülmədikdə defolt olaraq \"AZN\" tətbiq olunmalı və 50 məbləği üçün \"50 AZN\" nəticəsi qaytarılmalıdır.",
          "starterCode": "function qiymetYaz(mebleg, valyuta = \"AZN\") {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(qiymetYaz(50));\n",
          "expectedOutput": "50 AZN",
          "hint": "ES6 standartında funksiya parametrlərinə elan zamanı bərabərliklə ilkin standart dəyər (valyuta = \"AZN\") mənimsədilir.",
          "solutionCode": "function qiymetYaz(mebleg, valyuta = \"AZN\") {\n  return mebleg + \" \" + valyuta;\n}\n\nconsole.log(qiymetYaz(50));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-7-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Arqument Olmadıqda undefined Alınması",
          "instruction": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
          "description": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
          "buggyCode": "function salam(ad) {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
          "correctCode": "function salam(ad = \"Dost\") {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
          "correctOutput": "Salam, Dost",
          "expectedOutput": "Salam, Dost",
          "explanation": "Parametr ötürülmədikdə standart qiymət almaq üçün parametrə bərabərliklə default dəyər verilir: function salam(ad = 'Dost').",
          "hint": "ad = \"Dost\" yazın."
        }
      ],
      "bugFix": {
        "id": "bug-7-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Arqument Olmadıqda undefined Alınması",
        "instruction": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
        "description": "Aşağıdakı funksiyaya arqument ötürülmədikdə \"Salam, undefined\" çıxır. Funksiyanın ad parametrinə standart olaraq \"Dost\" dəyəri təyin edin ki, nəticə \"Salam, Dost\" olsun.",
        "buggyCode": "function salam(ad) {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
        "correctCode": "function salam(ad = \"Dost\") {\n  return \"Salam, \" + ad;\n}\nconsole.log(salam());",
        "correctOutput": "Salam, Dost",
        "expectedOutput": "Salam, Dost",
        "explanation": "Parametr ötürülmədikdə standart qiymət almaq üçün parametrə bərabərliklə default dəyər verilir: function salam(ad = 'Dost').",
        "hint": "ad = \"Dost\" yazın."
      }
    },
    {
      "id": "topic-7-3",
      "title": "Ox Funksiyaları (Arrow Functions - ES6)",
      "theory": `<h3>🏹 Ox Funksiyaları (Arrow Functions)</h3>
<p>ES6 ilə gələn <strong>Arrow Function (<code>=&gt;</code>)</strong> sintaksisi funksiyaları daha yığcam və oxunaqlı yazmaq üçün standartdır:</p>

<div class="tip-box">
  <strong>💡 Qısayol Oxu Analogiyası:</strong> Köhnə verbose <code>function() { return x; }</code> qatar yoludursa, ox funksiyası <code>x =&gt; x</code> hədəfə birbaşa yönələn tezyeriyən qısayoldur!
</div>

<h4>Sintaksis Qaydaları:</h4>
<ul>
  <li><strong>İmplisit Qayıdış (Implicit Return):</strong> Tək sətirlik ifadələrdə fiqurlu mötərizə <code>{ }</code> və <code>return</code> yazılmır, nəticə avtomatik qaytarılır: <code>const ikiqat = x =&gt; x * 2;</code></li>
  <li><strong>Tək Parametr:</strong> Yalnız bir parametr olduqda yumru mötərizələr də buraxıla bilər: <code>x =&gt; x * 3</code></li>
  <li><strong>Parametrsiz:</strong> Boş mötərizə qoyulur: <code>() =&gt; "Salam"</code></li>
</ul>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Funksiya Kompozisiyası və İcra Borusu (pipe Pipeline)</h4>
<p><strong>1. Leksik <code>this</code> Bağlanması:</strong><br>
Arrow funksiyalarının özünün <code>this</code> konteksti yoxdur! Onlar <code>this</code>-i əhatə olunduqları xarici leksik mühitdən götürür. Buna görə obyekt metodu daxilində callback yazarkən <code>this</code> itmir.</p>

<p><strong>2. İcra Boru Kəməri (Pipe Pipeline):</strong><br>
Tək arqumentli saf funksiyaları ardıcıl zəncirvari icra borusuna düzmək nümunəsi:</p>
<pre><code>const pipe = (...fnList) => initialValue => 
  fnList.reduce((acc, fn) => fn(acc), initialValue);

const ikiyeVur = x => x * 2;
const besGel = x => x + 5;
const kvadrat = x => x * x;

// Hesablama borusu: (3 * 2) = 6 -> (6 + 5) = 11 -> (11 * 11) = 121
const boruHesabla = pipe(ikiyeVur, besGel, kvadrat);
console.log(boruHesabla(3)); // 121</code></pre>`,
      "codeExamples": [
        {
          "title": "Arrow Function Nümunələri",
          "code": "const kvadrat = x => x * x;\nconst salamDe = () => \"Salam Dünya!\";\n\nconsole.log(kvadrat(6));\nconsole.log(salamDe());",
          "output": "36\nSalam Dünya!"
        },
        {
          "title": "İcra Borusu (Pipe) Nümunəsi",
          "code": "const kicilt = s => s.toLowerCase();\nconst bosluqSil = s => s.trim();\nconst nidaQoy = s => `${s}!`;\n\nconst cevirici = str => nidaQoy(bosluqSil(kicilt(str)));\nconsole.log(cevirici(\"  SALAM  \"));",
          "output": "salam!"
        }
      ],
      "exercises": [
        {
          "id": "ex-7-3-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Üçqat Artıran Ox Funksiyası (Arrow Function)",
          "instruction": "Ötürülən ədədi 3 dəfə artıran yığcam <code>ucqat</code> ox funksiyasını tərtib edin və 10 arqumenti ilə hesablanan nəticəni (30) konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n\nconsole.log(ucqat(10));\n",
          "expectedOutput": "30",
          "hint": "Tək sətirlik arrow funksiyalarında fiqurlu mötərizə və return yazılmadıqda ifadə avtomatik geri qaytarılır: const ucqat = n => n * 3;",
          "solutionCode": "const ucqat = n => n * 3;\nconsole.log(ucqat(10));"
        },
        {
          "id": "ex-7-3-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Hasil Hesablayan Kompakt Funksiya",
          "instruction": "İki ədədi parametr kimi qəbul edib onların hasilini hesablayan <code>vur</code> ox funksiyasını yazın və 7 ilə 8 ədədlərinin hasilini (56) konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n\nconsole.log(vur(7, 8));\n",
          "expectedOutput": "56",
          "hint": "Çoxparametrli ox funksiyalarında parametrlər mötərizədə yazılır: const vur = (a, b) => a * b;",
          "solutionCode": "const vur = (a, b) => a * b;\nconsole.log(vur(7, 8));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-7-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Ox Funksiyasında Qayıdış Qiyməti Xətası",
          "instruction": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
          "description": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
          "buggyCode": "const topla = (a, b) => {\n  a + b;\n};\nconsole.log(topla(5, 5));",
          "correctCode": "const topla = (a, b) => {\n  return a + b;\n};\nconsole.log(topla(5, 5));",
          "correctOutput": "10",
          "expectedOutput": "10",
          "explanation": "Arrow funksiyasında əgər fiqurlu mötərizə { } istifadə edilirsə, dəyəri geri qaytarmaq üçün mütləq 'return' yazılmalıdır.",
          "hint": "Fiqurlu mötərizə içində return a + b yazın."
        }
      ],
      "bugFix": {
        "id": "bug-7-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Ox Funksiyasında Qayıdış Qiyməti Xətası",
        "instruction": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
        "description": "Aşağıdakı ox funksiyası iki ədədin cəmini hesablamalıdır, lakin icra zamanı nəticə əvəzinə undefined qayıdır. Funksiyanın gövdəsini araşdırın və cəmin düzgün qaytarılmasını təmin edin.",
        "buggyCode": "const topla = (a, b) => {\n  a + b;\n};\nconsole.log(topla(5, 5));",
        "correctCode": "const topla = (a, b) => {\n  return a + b;\n};\nconsole.log(topla(5, 5));",
        "correctOutput": "10",
        "expectedOutput": "10",
        "explanation": "Arrow funksiyasında əgər fiqurlu mötərizə { } istifadə edilirsə, dəyəri geri qaytarmaq üçün mütləq 'return' yazılmalıdır.",
        "hint": "Fiqurlu mötərizə içində return a + b yazın."
      }
    },
    {
      "id": "topic-7-4",
      "title": "Funksiya Görünüş Sahəsi (Scope: Global vs Local)",
      "theory": `<h3>🌐 Dəyişənlərin Görünüş Sahəsi (Scope)</h3>
<p>Dəyişənlərin proqramın hansı hissələrindən əlçatan olduğunu təyin edən qanunlara <strong>Scope (Görünüş Sahəsi)</strong> deyilir:</p>

<ul>
  <li><strong>Global Scope (Qlobal Sahə):</strong> Funksiyalardan kənarda elan edilir. Bütün proqram boyu istənilən yerdən oxuna bilər.</li>
  <li><strong>Local / Block Scope (Lokal Sahə):</strong> Funksiya və ya <code>{ }</code> blokunun daxilində yaradılır. Yalnız həmin blok daxilində görünür, kənardan toxunulduqda <code>ReferenceError</code> baş verir.</li>
</ul>

<div class="tip-box">
  <strong>💡 Şüşəli İclas Otağı Analogiyası:</strong> İclas otağının daxilində oturanlar çöldəki qlobal məlumatları rahatlıqla görə bilirlər. Lakin çöldəki kənar şəxslər otaq daxilindəki məxfi sənədləri (lokal dəyişənləri) görə bilməzlər!
</div>

<p><strong>Dəyişənin Kölgələnməsi (Variable Shadowing):</strong> Əgər lokal dəyişənin adı qlobal dəyişənlə eyni olarsa, funksiya daxilində lokal ad qlobalı kölgələyir (shadowing).</p>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Qapanmalar (Closures) və Nəticə Keşləmə (Memoization)</h4>
<p><strong>1. Qapanma (Closure) Nədir?</strong><br>
Funksiya özündən xaricdə yerləşən dəyişənləri yadda saxlayaraq xarici funksiya icrasını bitirdikdən sonra belə həmin dəyişənlərə çıxış əldə edə bilirsə, buna <strong>Closure</strong> deyilir. Bu mexanizm inkapsulyasiya və gizli (private) dəyişənlər yaratmaq üçün tətbiq olunur:</p>

<pre><code>function saygacYarat() {
  let say = 0; // Şəxsi gizli dəyişən
  return function() {
    say++;
    return say;
  };
}

const saygac = saygacYarat();
console.log(saygac()); // 1
console.log(saygac()); // 2</code></pre>

<p><strong>2. Nəticə Keşləmə (Memoization):</strong><br>
Ağır hesablamaları təkrarlamamaq üçün əvvəlki arqumentlərin nəticələrini obyektdə (keşdə) saxlayan closure naxışı:</p>
<pre><code>function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n]; // Keşdən qaytar
    const netice = fn(n);
    cache[n] = netice;
    return netice;
  };
}</code></pre>`,
      "codeExamples": [
        {
          "title": "Lokal və Qlobal Dəyişən",
          "code": "let qlobalAd = \"Cavid\";\n\nfunction test() {\n  let lokalMesaj = \"Bu gizlidir\";\n  console.log(qlobalAd);    // Qlobal əlçatandır\n  console.log(lokalMesaj);  // Lokal funksiya içində əlçatandır\n}\n\ntest();\n// console.log(lokalMesaj); // Kənarda XƏTA verərdi!",
          "output": "Cavid\nBu gizlidir"
        },
        {
          "title": "Closure ilə Məlumat Qorunması",
          "code": "function gizliKassa(ilkinBalans) {\n  let balans = ilkinBalans;\n  return {\n    artir(mebleg) { balans += mebleg; return balans; },\n    bax() { return balans; }\n  };\n}\nconst kassa = gizliKassa(100);\nconsole.log(\"Balans:\", kassa.artir(50));",
          "output": "Balans: 150"
        }
      ],
      "exercises": [
        {
          "id": "ex-7-4-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Lokal Dəyişən və Görünmə Sahəsi (Scope)",
          "instruction": "Daxilində 50 qiymətinə malik lokal dəyişən təyin edərək onun ikiqat hasilini hesablayıb konsola 100 nəticəsini çıxaran <code>hesabla</code> funksiyasını tərtib edin və icra edin.",
          "starterCode": "function hesabla() {\n  // Kodunuzu buraya yazın\n}\nhesabla();\n",
          "expectedOutput": "100",
          "hint": "Funksiya daxilində elan edilən const və ya let dəyişənləri yalnız həmin blok daxilində əlçatan olur. Daxildə const eded = 50; təyin edib console.log(eded * 2) yaza bilərsiniz.",
          "solutionCode": "function hesabla() {\n  const eded = 50;\n  console.log(eded * 2);\n}\nhesabla();"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-7-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Lokal Dəyişənə Kənardan Müraciət",
          "instruction": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
          "description": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
          "buggyCode": "function giris() {\n  let parol = \"12345\";\n}\ngiris();\nconsole.log(parol);",
          "correctCode": "function giris() {\n  let parol = \"12345\";\n  console.log(parol);\n}\ngiris();",
          "correctOutput": "12345",
          "expectedOutput": "12345",
          "explanation": "Lokal dəyişənlərə yalnız təyin olunduqları funksiya və ya blok daxilindən müraciət etmək mümkündür.",
          "hint": "console.log(parol) əmrini giris funksiyasının içinə salın."
        }
      ],
      "bugFix": {
        "id": "bug-7-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Lokal Dəyişənə Kənardan Müraciət",
        "instruction": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
        "description": "Aşağıdakı kodda funksiyanın içindəki parol dəyişəni kənardan çağırıldığı üçün ReferenceError verir. Konsol əmrini funksiyanın daxilinə köçürün.",
        "buggyCode": "function giris() {\n  let parol = \"12345\";\n}\ngiris();\nconsole.log(parol);",
        "correctCode": "function giris() {\n  let parol = \"12345\";\n  console.log(parol);\n}\ngiris();",
        "correctOutput": "12345",
        "expectedOutput": "12345",
        "explanation": "Lokal dəyişənlərə yalnız təyin olunduqları funksiya və ya blok daxilindən müraciət etmək mümkündür.",
        "hint": "console.log(parol) əmrini giris funksiyasının içinə salın."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section7 };
}
console.log('Section 7 built successfully');
