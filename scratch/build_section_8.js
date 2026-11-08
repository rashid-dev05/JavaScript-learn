const fs = require('fs');

const section8 = {
  "id": "section-8",
  "title": "Bölmə 8: Obyektlər, JSON & Destructuring (dot/bracket, JSON, Spread/Rest)",
  "icon": "💎",
  "topics": [
    {
      "id": "topic-8-1",
      "title": "Obyekt Nədir? Açar-Dəyər (Key-Value) Strukturu",
      "theory": `<h3>💎 Obyekt (Object) Nədir?</h3>
<p>Massivlər nömrələnmiş siyahılar üçündürsə, <strong>Obyektlər</strong> real həyatdakı mürəkkəb varlıqları (istifadəçi, avtomobil, məhsul) bütün xüsusiyyətləri ilə təsvir etmək üçün ən əsas strukturdur. Obyektlər <strong>açar: dəyər (key: value)</strong> cütlüklərindən ibarət olur və fiqurlu mötərizə <code>{ }</code> ilə yaradılır:</p>

<pre><code>const istifadeci = {
  ad: "Fərid",
  yas: 24,
  seher: "Bakı",
  proqramcidir: true
};</code></pre>

<div class="tip-box">
  <strong>💡 Şəxsiyyət Vəsiqəsi Analogiyası:</strong> Obyekt bir şəxsiyyət vəsiqəsidir: üzərindəki sahə adları (Ad, Soyad, Doğum ili) — <strong>açarlar (keys)</strong>, həmin xanalara yazılmış məlumatlar isə — <strong>dəyərlərdir (values)</strong>!
</div>

<h4>Xassələrə Müraciət Etməyin 2 Yolu:</h4>
<ul>
  <li><strong>Nöqtə Notasiyası (Dot Notation):</strong> Ən çox işlənən standart və rahat üsul:<br>
  <code>console.log(istifadeci.ad); // "Fərid"</code></li>
  <li><strong>Kvadrat Mötərizə Notasiyası (Bracket Notation):</strong> Açar adı dəyişəndə saxlandıqda və ya xüsusi simvol daşıdıqda mütləqdir:<br>
  <code>console.log(istifadeci["seher"]); // "Bakı"</code></li>
</ul>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Dinamik Hesablanan Açarlar (Computed Property Names)</h4>
<p>ES6 ilə birlikdə obyekt elan edilərkən kvadrat mötərizə daxilində dinamik ifadələr və ya dəyişənlər birbaşa açar kimi təyin edilə bilər (<strong>Computed Property Names</strong>):</p>

<pre><code>const parametr = "qiymet";
const endirimFaizi = 20;

const mehsul = {
  ad: "Noutbuk",
  [parametr]: 1500, // Dinamik açar: mehsul.qiymet = 1500
  ["endirimli_" + parametr]: 1500 * (1 - endirimFaizi / 100)
};

console.log(mehsul.qiymet);            // 1500
console.log(mehsul.endirimli_qiymet);  // 1200</code></pre>`,
      "codeExamples": [
        {
          "title": "Obyekt Xassələrini Oxumaq və Yeniləmək",
          "code": "const masin = {\n  marka: \"Mercedes\",\n  il: 2022\n};\n\n// Xassəni dəyişmək və yeni xassə əlavə etmək\nmasin.reng = \"Qara\";\nmasin.il = 2023;\n\nconsole.log(masin.marka, masin.reng, masin.il);",
          "output": "Mercedes Qara 2023"
        },
        {
          "title": "Dinamik Açar Hesablanması",
          "code": "const prefiks = \"status_\";\nconst rol = \"admin\";\nconst huquqlar = {\n  [prefiks + rol]: \"Tam Giriş\"\n};\nconsole.log(huquqlar.status_admin);",
          "output": "Tam Giriş"
        }
      ],
      "exercises": [
        {
          "id": "ex-8-1-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Tələbə Profil Obyektinin Yaradılması",
          "instruction": "Adı \"Nurlan\", imtahan xalı isə 92 olan <code>telebe</code> obyekti təyin edin. Yalnız tələbənin adını nöqtə notasiyası ilə konsol ekranında əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Nurlan",
          "hint": "Obyekt yaratmaq üçün fiqurlu mötərizədən ({ ad: \"Nurlan\", xal: 92 }) və sahəni oxumaq üçün telebe.ad sintaksisindən istifadə olunur.",
          "solutionCode": "const telebe = { ad: \"Nurlan\", xal: 92 };\nconsole.log(telebe.ad);"
        },
        {
          "id": "ex-8-1-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Dinamik Xassə Adı ilə Qiymətin Oxunması",
          "instruction": "Məhsul obyektindən açar adı ayrıca <code>acar</code> dəyişənində saxlanılan sahənin qiymətini (1500) dinamik şəkildə oxuyaraq konsola çıxarın.",
          "starterCode": "const mehsul = { ad: \"Noutbuk\", qiymet: 1500 };\nconst acar = \"qiymet\";\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "1500",
          "hint": "Xassə adı dəyişəndə olduqda kvadrat mötərizə (mehsul[acar]) sintaksisi tətbiq edilir.",
          "solutionCode": "const mehsul = { ad: \"Noutbuk\", qiymet: 1500 };\nconst acar = \"qiymet\";\nconsole.log(mehsul[acar]);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-8-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mövcud Olmayan Xassə Xətası",
          "instruction": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
          "description": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
          "buggyCode": "const user = { ad: \"Kamran\" };\nconsole.log(user.soyad);",
          "correctCode": "const user = { ad: \"Kamran\", soyad: \"Həsənov\" };\nconsole.log(user.soyad);",
          "correctOutput": "Həsənov",
          "expectedOutput": "Həsənov",
          "explanation": "Obyektdə mövcud olmayan xassə çağırıldıqda undefined qaytarılır. Həmin xassə obyektə əlavə edilməlidir.",
          "hint": "user obyektinə soyad: \"Həsənov\" əlavə edin."
        }
      ],
      "bugFix": {
        "id": "bug-8-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Mövcud Olmayan Xassə Xətası",
        "instruction": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
        "description": "Konsola tələbənin tam soyadı ('Həsənov') çıxarılmalıdır, lakin obyekt strukturu ilə çağırış arasında uyğunsuzluq səbəbindən undefined çap olunur. Obyekti araşdıraraq tələb olunan məlumatın düzgün çıxarılmasını təmin edin.",
        "buggyCode": "const user = { ad: \"Kamran\" };\nconsole.log(user.soyad);",
        "correctCode": "const user = { ad: \"Kamran\", soyad: \"Həsənov\" };\nconsole.log(user.soyad);",
        "correctOutput": "Həsənov",
        "expectedOutput": "Həsənov",
        "explanation": "Obyektdə mövcud olmayan xassə çağırıldıqda undefined qaytarılır. Həmin xassə obyektə əlavə edilməlidir.",
        "hint": "user obyektinə soyad: \"Həsənov\" əlavə edin."
      }
    },
    {
      "id": "topic-8-2",
      "title": "Obyekt Metodları və this Açar Sözü",
      "theory": `<h3>🏃 Obyekt Metodları Nədir?</h3>
<p>Əgər obyektin bir xassəsi funksiyadırsa, ona <strong>metod</strong> deyilir. Metodlar obyektin davranışlarını və həyata keçirə biləcəyi əməliyyatları təmsil edir:</p>

<div class="tip-box">
  <strong>💡 Smartfon Analogiyası:</strong> Telefonun rəngi və modeli onun <strong>xassələridir</strong> (properties). Telefonun zəng çalması, şəkil çəkməsi və kilidi açması isə onun <strong>metodlarıdır</strong>!
</div>

<h4><code>this</code> Açar Sözü:</h4>
<p>Metod daxilində obyektin öz digər xassələrinə müraciət etmək üçün <strong><code>this</code></strong> (\"mənim bu xassəm\") istifadə olunur:</p>

<pre><code>const insan = {
  ad: "Aygün",
  salamVer() {
    return "Salam, mənim adım " + this.ad + "-dır";
  }
};
console.log(insan.salamVer()); // "Salam, mənim adım Aygün-dür"</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Getter və Setter Metodları (get / set)</h4>
<p>Obyekt sahələrinə birbaşa deyil, nəzarətli və təhlükəsiz şəkildə oxuma və yazma imkanı yaratmaq üçün <strong>Accessors (<code>get</code> və <code>set</code>)</strong> tətbiq olunur:</p>

<pre><code>const bankHesabi = {
  sahib: "Orxan",
  _balans: 100, // Daxili konvensiya

  // Getter: Məlumatı oxuyarkən hesablama aparır
  get balansGoster() {
    return \`\${this._balans} AZN\`;
  },

  // Setter: Məlumatı yazarkən təhlükəsizlik və yoxlama aparır
  set yeniBalans(mebleg) {
    if (mebleg < 0) {
      console.log("Xəta: Balans mənfi ola bilməz!");
      return;
    }
    this._balans = mebleg;
  }
};

bankHesabi.yeniBalans = 250; // Setter işə düşür (funksiya kimi çağırılmır!)
console.log(bankHesabi.balansGoster); // "250 AZN"</code></pre>`,
      "codeExamples": [
        {
          "title": "Obyekt Metodu və this İstifadəsi",
          "code": "const hesab = {\n  sahib: \"Vüsal\",\n  balans: 100,\n  balansiGoster() {\n    return this.sahib + \": \" + this.balans + \" AZN\";\n  }\n};\n\nconsole.log(hesab.balansiGoster());",
          "output": "Vüsal: 100 AZN"
        },
        {
          "title": "Getter ilə Hesablanmış Sahə",
          "code": "const istifadeci = {\n  ad: \"Murad\",\n  soyad: \"Əliyev\",\n  get tamAd() {\n    return `${this.ad} ${this.soyad}`;\n  }\n};\nconsole.log(istifadeci.tamAd);",
          "output": "Murad Əliyev"
        }
      ],
      "exercises": [
        {
          "id": "ex-8-2-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Obyekt Metodunun Təyini və Kontekst İstifadəsi",
          "instruction": "Modeli \"Tesla\" olan və icra edildikdə \"Tesla hərəkət edir\" cümləsini konsola çıxaran <code>sur</code> metoduna malik <code>avto</code> obyekti tərtib edin və metodu icra edin.",
          "starterCode": "const avto = {\n  model: \"Tesla\",\n  // Kodunuzu buraya yazın\n};\navto.sur();\n",
          "expectedOutput": "Tesla hərəkət edir",
          "hint": "Obyekt daxilində metod yazarkən obyektin öz xassəsinə this.model vasitəsilə müraciət edilir: console.log(this.model + \" hərəkət edir\");",
          "solutionCode": "const avto = {\n  model: \"Tesla\",\n  sur() {\n    console.log(this.model + \" hərəkət edir\");\n  }\n};\navto.sur();"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-8-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "this Açar Sözünün Unudulması",
          "instruction": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
          "description": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
          "buggyCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + ad;\n  }\n};\nconsole.log(user.tani());",
          "correctCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + this.ad;\n  }\n};\nconsole.log(user.tani());",
          "correctOutput": "Mən Tural",
          "expectedOutput": "Mən Tural",
          "explanation": "Obyekt metodunun daxilində həmin obyektin xassəsinə müraciət edərkən mütləq 'this.' prefiksi yazılmalıdır.",
          "hint": "ad əvəzinə this.ad yazın."
        }
      ],
      "bugFix": {
        "id": "bug-8-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "this Açar Sözünün Unudulması",
        "instruction": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
        "description": "Aşağıdakı metod daxilində ad birbaşa yazıldığı üçün ReferenceError baş verir. Onu this.ad olaraq düzəldin.",
        "buggyCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + ad;\n  }\n};\nconsole.log(user.tani());",
        "correctCode": "const user = {\n  ad: \"Tural\",\n  tani() {\n    return \"Mən \" + this.ad;\n  }\n};\nconsole.log(user.tani());",
        "correctOutput": "Mən Tural",
        "expectedOutput": "Mən Tural",
        "explanation": "Obyekt metodunun daxilində həmin obyektin xassəsinə müraciət edərkən mütləq 'this.' prefiksi yazılmalıdır.",
        "hint": "ad əvəzinə this.ad yazın."
      }
    },
    {
      "id": "topic-8-3",
      "title": "Daxili Metodlar: Object.keys(), Object.values(), Object.entries()",
      "theory": `<h3>🛠️ Obyektləri İterasiya Edən Qlobal Metodlar</h3>
<p>Obyektlərin daxilindəki məlumatları massivlər kimi analiz etmək üçün qlobal <code>Object</code> konstruktorunun metodları istifadə olunur:</p>

<ul>
  <li><strong><code>Object.keys(obyekt)</code>:</strong> Obyektin bütün açar adlarını (keys) sətirlər massivi kimi qaytarır:<br>
  <code>Object.keys({ ad: "Əli", bal: 90 }) \(\rightarrow\) ["ad", "bal"]</code></li>
  <li><strong><code>Object.values(obyekt)</code>:</strong> Obyektin bütün dəyərlərini (values) massiv kimi qaytarır:<br>
  <code>Object.values({ ad: "Əli", bal: 90 }) \(\rightarrow\) ["Əli", 90]</code></li>
  <li><strong><code>Object.entries(obyekt)</code>:</strong> Obyektin həm açar, həm dəyər cütlüklərini ikiölçülü massiv kimi qaytarır:<br>
  <code>Object.entries({ ad: "Əli" }) \(\rightarrow\) [ ["ad", "Əli"] ]</code></li>
</ul>

<div class="tip-box">
  <strong>💡 Sayım Müfəttişi Analogiyası:</strong> <code>Object.keys</code> anbardakı bütün etiketlərin siyahısını çıxarır; <code>Object.values</code> rəflərdəki bütün real malların qiymətlərini toplayır; <code>Object.entries</code> isə hər ikisini cütlük halında inventar cədvəlinə düzür.
</div>

<div class="warning-box">
  <strong>⚠️ Python dict.keys() Tələsi:</strong> Python-da <code>dict.keys()</code> obyektin öz üzərindən çağırılır. Lakin JavaScript-də obyekt parametr kimi ötürülür: <code>Object.keys(obyekt)</code>.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Obyektlərin Dondurulması (Object.freeze vs Object.seal) və Object.fromEntries()</h4>
<p><strong>1. Dəyişməzlik (Immutability): <code>freeze</code> vs <code>seal</code>:</strong></p>
<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Metod</th>
        <th>Yeni Sahə Əlavəsi</th>
        <th>Sahənin Silinməsi</th>
        <th>Mövcud Sahənin Dəyişdirilməsi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><code>Object.freeze(obj)</code></strong></td>
        <td>Qadağandır ❌</td>
        <td>Qadağandır ❌</td>
        <td>Qadağandır ❌ (Tam donduruldu)</td>
      </tr>
      <tr>
        <td><strong><code>Object.seal(obj)</code></strong></td>
        <td>Qadağandır ❌</td>
        <td>Qadağandır ❌</td>
        <td><strong>İcazə verilir ✔️</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>2. Əks Çevrilmə: <code>Object.fromEntries()</code>:</strong><br>
Açar-dəyər cütlüklərindən ibarət massivi yenidən canlı obyektə çevirən güclü metod (ES2019):</p>
<pre><code>const cutlukler = [["ad", "Samir"], ["rol", "dizayner"]];
const user = Object.fromEntries(cutlukler);
console.log(user); // { ad: "Samir", rol: "dizayner" }</code></pre>`,
      "codeExamples": [
        {
          "title": "Object.keys() və Object.values()",
          "code": "const qiymetler = { alma: 2, banan: 4, portağal: 3 };\n\nconsole.log(Object.keys(qiymetler));\nconsole.log(Object.values(qiymetler));",
          "output": "[\n  \"alma\",\n  \"banan\",\n  \"portağal\"\n]\n[\n  2,\n  4,\n  3\n]"
        },
        {
          "title": "Object.freeze() Təhlükəsizliyi",
          "code": "const konfiq = Object.freeze({ api: \"https://api.az\", versiya: 1 });\nkonfiq.versiya = 2; // Dəyişməyəcək!\nconsole.log(konfiq.versiya);",
          "output": "1"
        }
      ],
      "exercises": [
        {
          "id": "ex-8-3-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Obyekt Xassələrinin Ümumi Sayı",
          "instruction": "Verilmiş istifadəçi profilində cəmi neçə sahənin (xassənin) mövcud olduğunu təyin edərək sayını (3) konsol pəncərəsində əks etdirin.",
          "starterCode": "const profil = { ad: \"Elmir\", yas: 26, seher: \"Sumqayıt\" };\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "3",
          "hint": "Obyektin bütün açarlarını massiv kimi əldə etmək üçün Object.keys(profil), sayını tapmaq üçün isə .length xassəsindən istifadə olunur.",
          "solutionCode": "const profil = { ad: \"Elmir\", yas: 26, seher: \"Sumqayıt\" };\nconsole.log(Object.keys(profil).length);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-8-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Python Style keys() Çağırışı",
          "instruction": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
          "description": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
          "buggyCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(kitab.keys());",
          "correctCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(Object.keys(kitab));",
          "correctOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
          "expectedOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
          "explanation": "JavaScript-də açarları almaq üçün kitab.keys() deyil, qlobal Object.keys(kitab) metodundan istifadə edilir.",
          "hint": "Object.keys(kitab) yazın."
        }
      ],
      "bugFix": {
        "id": "bug-8-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Python Style keys() Çağırışı",
        "instruction": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
        "description": "Aşağıdakı kodda kitab.keys() yazıldığı üçün TypeError baş verir. Onu Object.keys(kitab) ilə düzəldin.",
        "buggyCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(kitab.keys());",
        "correctCode": "const kitab = { ad: \"JS Əsasları\", sehife: 250 };\nconsole.log(Object.keys(kitab));",
        "correctOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
        "expectedOutput": "[\n  \"ad\",\n  \"sehife\"\n]",
        "explanation": "JavaScript-də açarları almaq üçün kitab.keys() deyil, qlobal Object.keys(kitab) metodundan istifadə edilir.",
        "hint": "Object.keys(kitab) yazın."
      }
    },
    {
      "id": "topic-8-4",
      "title": "JSON ilə İş: JSON.stringify() və JSON.parse()",
      "theory": `<h3>📦 JSON Nədir və Niyə Lazımdır?</h3>
<p><strong>JSON (JavaScript Object Notation)</strong> — veb dünyasında brauzer ilə server arasında məlumat mübadiləsi aparmaq üçün universal, yüngül və mətn əsaslı məlumat formatıdır.</p>

<div class="tip-box">
  <strong>📦 Poçt Bağlaması Analogiyası:</strong> Mürəkkəb velosipedi poçtla göndərmək üçün onu söküb qutuya yastı şəkildə yığırıq (<strong>Serializasiya \(\rightarrow\) <code>JSON.stringify</code></strong>). Alan tərəf isə qutunu açıb velosipedi yenidən sürülə bilən vəziyyətə gətirir (<strong>Deserializasiya \(\rightarrow\) <code>JSON.parse</code></strong>).
</div>

<h4>İki Əsas Metod:</h4>
<ul>
  <li><code>JSON.stringify(obyekt)</code>: JavaScript obyektini internetlə ötürülə bilən <strong>JSON mətninə (string)</strong> çevirir.</li>
  <li><code>JSON.parse(metn)</code>: Gələn JSON mətnini yenidən canlı <strong>JavaScript obyektinə</strong> çevirir.</li>
</ul>

<div class="warning-box">
  <strong>⚠️ Dırnaq Qaydası:</strong> JSON formatında bütün açar adları mütləq <strong>cüt dırnaq <code>" "</code></strong> daxilində olmalıdır (tək dırnaq sintaktik xətadır). Həmçinin <code>undefined</code> və funksiyalar JSON-a çevrilərkən itirilir!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Dərin Klonlama (Deep Clone) vs Dayaz Klonlama</h4>
<p>Klassik spread <code>{ ...obj }</code> yalnız birqat (dayaz) surət çıxarır; daxili iç-içə obyektlər isə köhnə yaddaş ünvanına bağlı qalır. Daxili bütün budaqları müstəqil nüsxələmək üçün ən məşhur üsul:</p>

<pre><code>const orijinal = { ad: "A", parametr: { xal: 100 } };

// Dərin klonlama (Deep Clone):
const derinKopya = JSON.parse(JSON.stringify(orijinal));

derinKopya.parametr.xal = 200;
console.log(orijinal.parametr.xal); // 100 (Toxunulmaz qaldı!)</code></pre>

<div class="warning-box">
  <strong>⚠️ Dövri İstinad (Circular Reference) Tələsi:</strong> Əgər obyekt öz-özünə istinad edirsə (<code>obj.a = obj</code>), <code>JSON.stringify()</code> icra zamanı <code>TypeError: Converting circular structure to JSON</code> xətası verəcəkdir!
</div>`,
      "codeExamples": [
        {
          "title": "Serializasiya və Formatlaşdırma (JSON.stringify)",
          "code": "const mehsul = {\n  id: 101,\n  ad: \"Mexaniki Klaviatura\",\n  qiymet: 140,\n  stokdaVar: true,\n  tegler: [\"rgb\", \"gaming\", \"usb-c\"]\n};\n\n// 1. Standart kompakt JSON sətiri\nconst kompaktJSON = JSON.stringify(mehsul);\nconsole.log(\"Kompakt:\", kompaktJSON);\n\n// 2. İki boşluqla formatlanmış oxunaqlı JSON\nconst oxunaqliJSON = JSON.stringify(mehsul, null, 2);\nconsole.log(\"Formatlı:\\n\" + oxunaqliJSON);",
          "output": "Kompakt: {\"id\":101,\"ad\":\"Mexaniki Klaviatura\",\"qiymet\":140,\"stokdaVar\":true,\"tegler\":[\"rgb\",\"gaming\",\"usb-c\"]}\nFormatlı:\n{\n  \"id\": 101,\n  \"ad\": \"Mexaniki Klaviatura\",\n  \"qiymet\": 140,\n  \"stokdaVar\": true,\n  \"tegler\": [\n    \"rgb\",\n    \"gaming\",\n    \"usb-c\"\n  ]\n}"
        },
        {
          "title": "Gələn JSON Mətnini Təhlükəsiz Parse Etmək (JSON.parse)",
          "code": "function melumatiEmalEt(jsonMetn) {\n  try {\n    const data = JSON.parse(jsonMetn);\n    return `İstifadəçi: ${data.ad}, Bal: ${data.bal}`;\n  } catch (xeta) {\n    return \"Xətalı JSON formatı: \" + xeta.name;\n  }\n}\n\n// Uğurlu JSON\nconsole.log(melumatiEmalEt('{\"ad\": \"Leyla\", \"bal\": 98}'));\n\n// Qüsurlu JSON (tək dırnaq səhvi)\nconsole.log(melumatiEmalEt(\"{'ad': 'Leyla'}\"));",
          "output": "İstifadəçi: Leyla, Bal: 98\nXətalı JSON formatı: SyntaxError"
        }
      ],
      "exercises": [
        {
          "id": "ex-8-4-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "İstifadəçi Profilinin JSON-a Çevrilməsi və Oxunması",
          "instruction": "İstifadəçi obyektini JSON sətir formatına çevirən <code>istifadeciMelumatiniHazirla</code> və JSON sətirdən \"ad (rol)\" formatında məlumatı bərpa edən <code>istifadeciniOxu</code> funksiyalarını tərtib edin.",
          "starterCode": "function istifadeciMelumatiniHazirla(user) {\n  // Kodunuzu buraya yazın\n}\n\nfunction istifadeciniOxu(jsonStr) {\n  // Kodunuzu buraya yazın\n}\n\nconst user = { ad: \"Murad\", rol: \"Frontend Mühəndisi\" };\nconst jsonMetn = istifadeciMelumatiniHazirla(user);\nconsole.log(\"JSON Sətir:\", jsonMetn);\nconsole.log(\"Oxunmuş:\", istifadeciniOxu(jsonMetn));\n",
          "expectedOutput": "JSON Sətir: {\"ad\":\"Murad\",\"rol\":\"Frontend Mühəndisi\"}\nOxunmuş: Murad (Frontend Mühəndisi)",
          "hint": "Obyekti sətirə çevirmək üçün JSON.stringify(user), sətirdən obyekti bərpa etmək üçün isə JSON.parse(jsonStr) metodlarından istifadə olunur.",
          "solutionCode": "function istifadeciMelumatiniHazirla(user) {\n  return JSON.stringify(user);\n}\n\nfunction istifadeciniOxu(jsonStr) {\n  const u = JSON.parse(jsonStr);\n  return `${u.ad} (${u.rol})`;\n}\n\nconst user = { ad: \"Murad\", rol: \"Frontend Mühəndisi\" };\nconst jsonMetn = istifadeciMelumatiniHazirla(user);\nconsole.log(\"JSON Sətir:\", jsonMetn);\nconsole.log(\"Oxunmuş:\", istifadeciniOxu(jsonMetn));"
        },
        {
          "id": "ex-8-4-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Təhlükəsiz JSON Analizi və Xəta İdarəetməsi",
          "instruction": "Gələn JSON sətirlərini analiz edən <code>tehlukesizParse</code> funksiyası hazırlayın. Məlumat düzgün olduqda obyektin statusunu, zədəli olduqda isə \"Xətalı məlumat\" mesajını geri qaytarın.",
          "starterCode": "function tehlukesizParse(jsonStr) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(tehlukesizParse('{\"status\": \"Aktiv\"}'));\nconsole.log(tehlukesizParse('Yanlış format'));\n",
          "expectedOutput": "Aktiv\nXətalı məlumat",
          "hint": "Zədəli JSON mətnləri zamanı tətbiqin qəzaya uğramaması üçün JSON.parse() əməliyyatını try...catch bloku daxilində aparın.",
          "solutionCode": "function tehlukesizParse(jsonStr) {\n  try {\n    const data = JSON.parse(jsonStr);\n    return data.status;\n  } catch (err) {\n    return \"Xətalı məlumat\";\n  }\n}\n\nconsole.log(tehlukesizParse('{\"status\": \"Aktiv\"}'));\nconsole.log(tehlukesizParse('Yanlış format'));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-8-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Xam JSON Mətnindən Obyekt Kimi Xassə Oxumaq Xətası",
          "instruction": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
          "description": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
          "buggyCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconsole.log(\"Qiymət:\", serverCavabi.qiymet);",
          "correctCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconst data = JSON.parse(serverCavabi);\nconsole.log(\"Qiymət:\", data.qiymet);",
          "correctOutput": "Qiymət: 450",
          "expectedOutput": "Qiymət: 450",
          "explanation": "JSON serverdən adi mətn (string) formatında gəlir. String üzərində '.qiymet' kimi obyekt xassəsi mövcud deyil və 'undefined' qaytarır. Xassələrə müraciət etmək üçün mətni əvvəlcə 'JSON.parse()' vasitəsilə JavaScript obyektinə çevirmək lazımdır.",
          "hint": "const data = JSON.parse(serverCavabi); edin."
        }
      ],
      "bugFix": {
        "id": "bug-8-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Xam JSON Mətnindən Obyekt Kimi Xassə Oxumaq Xətası",
        "instruction": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
        "description": "Aşağıdakı proqramçı serverdən gələn serverCavabi adlı xam JSON sətirini əvvəlcə JSON.parse() ilə obyektə çevirmədən birbaşa serverCavabi.qiymet oxumağa çalışıb və undefined alıb. Kodu JSON.parse() ilə düzəldin ki, qiymət (450) düzgün çıxsın.",
        "buggyCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconsole.log(\"Qiymət:\", serverCavabi.qiymet);",
        "correctCode": "const serverCavabi = '{\"mehsul\": \"Monitor\", \"qiymet\": 450}';\nconst data = JSON.parse(serverCavabi);\nconsole.log(\"Qiymət:\", data.qiymet);",
        "correctOutput": "Qiymət: 450",
        "expectedOutput": "Qiymət: 450",
        "explanation": "JSON serverdən adi mətn (string) formatında gəlir. String üzərində '.qiymet' kimi obyekt xassəsi mövcud deyil və 'undefined' qaytarır. Xassələrə müraciət etmək üçün mətni əvvəlcə 'JSON.parse()' vasitəsilə JavaScript obyektinə çevirmək lazımdır.",
        "hint": "const data = JSON.parse(serverCavabi); edin."
      }
    },
    {
      "id": "topic-8-5",
      "title": "Struktur Dağıtımı və Yayma: Destructuring & Spread/Rest",
      "theory": `<h3>🧳 Struktur Dağıtımı (Destructuring) Nədir?</h3>
<p><strong>Destructuring</strong> — obyekt və ya massivlərin daxilindəki sahələri tək bir sətirdə sürətlə çıxararaq fərdi dəyişənlərə paylamağa imkan verən müasir ES6 sintaksisdir:</p>

<div class="tip-box">
  <strong>💡 Səyahət Çantası Analogiyası:</strong> Çantanı bütöv yerə boşaltmaq əvəzinə, axtardığınız açarı və pasportu dərhal çəkib çıxarırsınız: <code>const { acar, pasport } = canta;</code>
</div>

<h4>Obyekt və Massiv Parçalanması:</h4>
<pre><code>// Obyekt Destructuring (Açar adına görə):
const user = { ad: "Murad", yas: 25 };
const { ad, yas, rol = "istifadeci" } = user; // rol üçün default dəyər

// Açar adını dəyişmək (Aliasing):
const { ad: istifadeciAdi } = user;

// Massiv Destructuring (Mövqeyə görə):
const [ilk, ikinci] = [10, 20, 30];</code></pre>

<h4>Spread Operatoru (<code>...</code> — Yaymaq):</h4>
<p>Massiv və ya obyektin daxilindəki elementləri yeni struktura yaymaq üçün istifadə edilir:</p>
<pre><code>const esasProfil = { ad: "Leyla" };
const tamProfil = { ...esasProfil, aktivdir: true };</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Dərin İç-İçə Destrukturizasiya və Reaktiv Vəziyyət İdarəsi (Mini State Store)</h4>
<p><strong>1. Dərin İç-içə Çıxarma (Nested Destructuring):</strong><br>
Mürəkkəb API cavablarından dərində gizlənmiş sahələri birbaşa çıxarmaq:</p>
<pre><code>const apiCavabi = {
  data: {
    user: {
      profile: { email: "user@code.az" }
    }
  }
};

const { data: { user: { profile: { email } } } } = apiCavabi;
console.log(email); // "user@code.az"</code></pre>

<p><strong>2. Reaktiv Vəziyyət İdarəetməsi (Mini State Store):</strong><br>
Redux naxışında vəziyyəti dəyişməz (immutable) saxlamaq üçün spread operatoru ilə köhnə vəziyyəti kopyalayıb yalnız hədəf sahəni yeniləyirik:</p>
<pre><code>let state = { count: 0, theme: "dark" };
// Vəziyyətin təhlükəsiz yenilənməsi:
state = { ...state, count: state.count + 1 };</code></pre>`,
      "codeExamples": [
        {
          "title": "Obyekt Destructuring və Dəyər Mübadiləsi (Swap)",
          "code": "const telebe = {\n  ad: \"Leyla\",\n  yas: 21,\n  ballar: { riyaziyyat: 95, fizika: 88 }\n};\n\nconst { ad: telebeAdi, ixtisas = \"Kompüter Elmləri\", ballar: { riyaziyyat } } = telebe;\nconsole.log(`${telebeAdi} - ${ixtisas}, Riyaziyyat: ${riyaziyyat}`);\n\n// Dəyişənlərin yerini dəyişmək (Swap)\nlet x = \"Bakı\", y = \"Gəncə\";\n[x, y] = [y, x];\nconsole.log(`x: ${x}, y: ${y}`);",
          "output": "Leyla - Kompüter Elmləri, Riyaziyyat: 95\nx: Gəncə, y: Bakı"
        },
        {
          "title": "Spread ilə Birləşdirmə və Rest Parametrləri",
          "code": "const ilkinXallar = [10, 20];\nconst butunXallar = [5, ...ilkinXallar, 30];\nconsole.log(\"Xallar:\", butunXallar.join(\", \"));\n\nfunction qalibiMuəyyənEt(birinci, ikinci, ...istirakcilar) {\n  console.log(`1-ci: ${birinci}, 2-ci: ${ikinci}`);\n  console.log(`Digər iştirakçılar: ${istirakcilar.join(\", \")}`);\n}\nqalibiMuəyyənEt(\"Əli\", \"Vəli\", \"Samir\", \"Rəşad\");",
          "output": "Xallar: 5, 10, 20, 30\n1-ci: Əli, 2-ci: Vəli\nDigər iştirakçılar: Samir, Rəşad"
        }
      ],
      "exercises": [
        {
          "id": "ex-8-5-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Profil Məlumatlarının Birləşdirilməsi və Çıxarılması",
          "instruction": "Köhnə profil ilə yeni məlumatları tam birləşdirən və ad, email, status sahələrini ayıraraq formatlaşdırılmış string qaytaran <code>profilYenile</code> funksiyasını tərtib edin.",
          "starterCode": "function profilYenile(kohneProfil, yeniMelumatlar) {\n  // Kodunuzu buraya yazın\n}\n\nconst esasProfil = { ad: \"Orxan\", email: \"orxan@code.az\" };\nconst elave = { seher: \"Bakı\" };\n\nconsole.log(profilYenile(esasProfil, elave));\nconsole.log(profilYenile(esasProfil, { status: \"deaktiv\" }));\n",
          "expectedOutput": "Orxan <orxan@code.az> - Status: aktiv\nOrxan <orxan@code.az> - Status: deaktiv",
          "hint": "Obyektləri birləşdirmək üçün spread ({ ...a, ...b }), sahələri rahat çıxarmaq üçün isə destructuring ({ ad, email, status = \"aktiv\" }) tətbiq edin.",
          "solutionCode": "function profilYenile(kohneProfil, yeniMelumatlar) {\n  const yenilenmis = { ...kohneProfil, ...yeniMelumatlar };\n  const { ad, email, status = \"aktiv\" } = yenilenmis;\n  return `${ad} <${email}> - Status: ${status}`;\n}\n\nconst esasProfil = { ad: \"Orxan\", email: \"orxan@code.az\" };\nconst elave = { seher: \"Bakı\" };\n\nconsole.log(profilYenile(esasProfil, elave));\nconsole.log(profilYenile(esasProfil, { status: \"deaktiv\" }));"
        },
        {
          "id": "ex-8-5-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Massiv Parçalanması və Qalıq Cəmin Tapılması",
          "instruction": "Massivdəki birinci ədədi ayrıca, yerdə qalan bütün elementləri isə qrup şəklində toplayaraq nəticəni formatlanmış cümlə kimi qaytaran <code>analizEt</code> funksiyasını tərtib edin.",
          "starterCode": "function analizEt(ededler) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(analizEt([10, 20, 30, 40, 50]));\n",
          "expectedOutput": "İlk: 10, Qalan cəm: 140",
          "hint": "İlk elementi və qalanları ayırmaq üçün [birinci, ...qalanlar] destructuring-indən, qalanların cəmi üçün isə reduce metodundan istifadə edin.",
          "solutionCode": "function analizEt(ededler) {\n  const [birinci, ...qalanlar] = ededler;\n  const cem = qalanlar.reduce((toplam, n) => toplam + n, 0);\n  return `İlk: ${birinci}, Qalan cəm: ${cem}`;\n}\n\nconsole.log(analizEt([10, 20, 30, 40, 50]));"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-8-5-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Rest Parametrinin Sonda Yazılmaması Xətası",
          "instruction": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
          "description": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
          "buggyCode": "function komandaYarat(...qalanlar, lider) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\"));",
          "correctCode": "function komandaYarat(lider, ...qalanlar) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\", \"Fərid\"));",
          "correctOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
          "expectedOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
          "explanation": "JavaScript-də Rest parametri (...) mütləq parametr siyahısının ən sonunda olmalıdır. Çünki o, yerdə qalan bütün arqumentləri toplayır.",
          "hint": "function komandaYarat(lider, ...qalanlar) şəklində yazın."
        }
      ],
      "bugFix": {
        "id": "bug-8-5-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Rest Parametrinin Sonda Yazılmaması Xətası",
        "instruction": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
        "description": "Aşağıdakı funksiyada ...qalanlar rest parametri digər parametrdən əvvəl yazıldığı üçün sintaksis xətası verir. Rest parametrini siyahının ən sonuna keçirərək funksiyanı və çağırışı düzəldin.",
        "buggyCode": "function komandaYarat(...qalanlar, lider) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\"));",
        "correctCode": "function komandaYarat(lider, ...qalanlar) {\n  return \"Lider: \" + lider + \", Üzvlər: \" + qalanlar.join(\", \");\n}\n\nconsole.log(komandaYarat(\"Murad\", \"Aysel\", \"Fərid\"));",
        "correctOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
        "expectedOutput": "Lider: Murad, Üzvlər: Aysel, Fərid",
        "explanation": "JavaScript-də Rest parametri (...) mütləq parametr siyahısının ən sonunda olmalıdır. Çünki o, yerdə qalan bütün arqumentləri toplayır.",
        "hint": "function komandaYarat(lider, ...qalanlar) şəklində yazın."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section8 };
}
console.log('Section 8 built successfully');
