const fs = require('fs');

const section4 = {
  "id": "section-4",
  "title": "Bölmə 4: Şərt İfadələri (if-else, ternary, switch-case)",
  "icon": "🔀",
  "topics": [
    {
      "id": "topic-4-1",
      "title": "if, else if və else Strukturu və Qoruyucu Şərtlər (Guard Clauses)",
      "theory": `<h3>🔀 Şərt İfadələri və Budaqlanan Qərarlar</h3>
<p>Proqramın icra axını müəyyən şərtlərin doğru (<code>true</code>) və ya yalan (<code>false</code>) olmasından asılı olaraq müxtəlif yollara ayrıla bilər. Bunun üçün ən təməl mexanizm <strong><code>if</code>, <code>else if</code> və <code>else</code></strong> bloklarıdır:</p>

<div class="tip-box">
  <strong>💡 Dəmir Yolu Keçidi Analogiyası:</strong> Qatara yol verərkən relslərin oxu necə dəyişirsə, <code>if</code> şərtləri də kodun axınını eləcə fərqli relslərə (bloklara) yönləndirir!
</div>

<h4>Budaqlanma Strukturunun Pillələri:</h4>
<ul>
  <li><code>if (şərt)</code>: Şərt doğru olduqda birinci blok icra olunur.</li>
  <li><code>else if (başqaŞərt)</code>: Əvvəlki şərt yalan olduqda növbəti variantı yoxlayır.</li>
  <li><code>else</code>: Heç bir şərt ödənmədikdə işə düşən son ehtiyat qapısıdır.</li>
</ul>

<pre><code>const bal = 75;
if (bal >= 90) {
  console.log("Əla");
} else if (bal >= 70) {
  console.log("Yaxşı");
} else {
  console.log("Kafi");
}</code></pre>

<div class="warning-box">
  <strong>⚠️ Sintaksis Qaydası:</strong> JavaScript-də Python-dakı kimi <code>elif</code> yoxdur! Hər iki söz mütləq aralı yazılmalıdır: <code>else if</code>.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Qoruyucu Şərtlər (Guard Clauses) və Dərin İç-İçəlikdən Xilas</h4>
<p>İç-içə yazılmış saysız-hesabsız <code>if</code> blokları kodu sağa doğru sürükləyir və \"Piramida Antipatterni\" yaradır. Müasir mühəndislikdə bu problem <strong>Guard Clauses (Qoruyucu Şərtlər)</strong> ilə həll edilir:</p>

<pre><code>// ❌ ANTİPATTERN (Çətin oxunan iç-içə if şərtləri):
function xidmetGoster(user) {
  if (user) {
    if (user.aktivdir) {
      if (user.balans > 0) {
        console.log("Xidmət aktivdir!");
      }
    }
  }
}

//  TÖVSİYƏ EDİLƏN MÜHƏNDİSLİK YANAŞMASI (Guard Clauses):
function xidmetGoster(user) {
  if (!user) return; // Səhv halı dərhal xaric et
  if (!user.aktivdir) return;
  if (user.balans <= 0) return;

  // Əsas biznes məntiqi ən aşağıda təmiz qalır:
  console.log("Xidmət aktivdir!");
}</code></pre>`,
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
      "theory": `<h3>❓ Üçlü (Ternary) Şərt Operatoru Nədir?</h3>
<p>Üçlü şərt operatoru (<code>? :</code>) sadə <code>if...else</code> blokunun tək sətirlik, yığcam və dəyər qaytaran formasıdır:</p>
<pre><code>şərt ? doğruOlduqdaDəyər : yalanOlduqdaDəyər;</code></pre>

<div class="tip-box">
  <strong>💡 Qəpik Atma Analogiyası:</strong> Qəpik havaya atılır: xəritə düşsə (true) — <strong>"Uddun"</strong>, rəqəm düşsə (false) — <strong>"Uduzdun"</strong>!
</div>

<p><strong>Niyə çox sevilir?</strong> Çünki o bir ifadədir (expression) və birbaşa <code>const</code> sabitinə mənimsədilə bilər:</p>
<pre><code>const status = yas >= 18 ? "Yetkin" : "Yeniyetmə";</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Zəncirvari Ternary və Oxunaqlıq Hədləri</h4>
<p>Bir neçə şərti zəncirvari bağlamaq mümkündür:</p>
<pre><code>const bal = 75;
const qiymet = bal >= 90 ? "A"
             : bal >= 75 ? "B"
             : bal >= 60 ? "C"
             : "F";</code></pre>

<div class="warning-box">
  <strong>⚠️ Oxunaqlıq Sərhədi:</strong> Əgər zəncir 2 səviyyədən artıq dərinləşirsə, ternary operatoru kodun oxunmasını xeyli çətinləşdirir. Bu hallarda standart <code>if...else if</code> və ya <code>switch</code> seçilməlidir!
</div>`,
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
      "theory": `<h3>🔘 Çoxvariantlı Seçim: <code>switch...case</code></h3>
<p>Bir dəyişənin dəyərini bir neçə dəqiq sabit qiymətlə müqayisə etmək üçün <strong><code>switch</code></strong> strukturundan istifadə olunur:</p>

<div class="tip-box">
  <strong>💡 Qəhvə Aparatı Analogiyası:</strong> Düymə 1 \(\rightarrow\) Espresso, Düymə 2 \(\rightarrow\) Qara qəhvə, Düymə 3 \(\rightarrow\) Çay! Hər bir düymə ayrıca bir <code>case</code> kimidir.
</div>

<pre><code>const reng = "yasil";
switch (reng) {
  case "qirmizi":
    console.log("Dayan");
    break;
  case "yasil":
    console.log("Keç");
    break;
  default:
    console.log("Naməlum işıq");
    break;
}</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Şüurlu Fall-Through (Qruplaşdırma) və Daxili Ciddi Bərabərlik (===)</h4>
<p><strong>1. Daxildə Ciddi Bərabərlik (<code>===</code>):</strong><br>
<code>switch</code> daxilindəki <code>case</code> yoxlamaları arxa fonda həmişə <strong>ciddi bərabərliklə</strong> işləyir. Yəni <code>"1"</code> (string) dəyəri <code>case 1:</code> (number) ilə qətiyyən uyğun gəlməyəcəkdir!</p>

<p><strong>2. Şüurlu Fall-Through (Aşağı Axın) Mexanizmi:</strong><br>
Əgər <code>case</code> blokunun sonuna <code>break</code> qoyulmazsa, mühərrik sonrakı case-ləri şərtinə baxmadan icra edəcəkdir. Bu xüsusiyyətdən bir neçə variantı eyni qrupda birləşdirmək üçün şüurlu istifadə edilir:</p>

<pre><code>const gun = 6;
switch (gun) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Həftə içi");
    break;
  case 6:
  case 7:
    console.log("Həftə sonu 🎉");
    break;
  default:
    console.log("Yalnış gün nömrəsi");
}</code></pre>`,
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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section4 };
}
console.log('Section 4 built successfully');
