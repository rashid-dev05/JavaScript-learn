// Section 10 Builder: Xəta İdarəetmə (try...catch, throw new Error, finally)
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section10 = {
  "id": "section-10",
  "title": "Bölmə 10: Xəta İdarəetmə (try...catch, throw new Error)",
  "icon": "🛡️",
  "topics": [
    {
      "id": "topic-10-1",
      "title": "try...catch Strukturu və Xətaların Tutulması",
      "theory": `<h3>🛡️ Təhlükəsizlik Kəməri: try...catch</h3>
<p>Real veb layihələrində proqramçıdan asılı olmayan xarici amillər səbəbindən gözlənilməz xətalar (runtime errors) yarana bilər: istifadəçi formatı pozulmuş fayl yükləyə bilər, serverdən gələn JSON zədələnə bilər və ya internet bağlantısı kəsilə bilər. Əgər bu xətaları nəzarətə almasaq, JavaScript mühərriki skriptin icrasını dərhal dayandırar və bütün veb tətbiq <strong>tamamilə çökər</strong>.</p>

<p>Bu cür fəsadların qarşısını almaq üçün <strong>try...catch</strong> blokundan istifadə olunur:</p>

<pre><code>try {
  // Riskli kod sahəsi: burada istisna (exception) baş verə bilər
  const netice = riskliEmeliyyat();
  console.log("Uğurla tamamlandı:", netice);
} catch (xeta) {
  // Yalnız try daxilində xəta yarandıqda bu blok işə düşür
  console.log("Xəta baş verdi:", xeta.name, "-", xeta.message);
}</code></pre>

<ul>
  <li><strong><code>try</code> bloku:</strong> Mühərrik əvvəlcə bu blokdakı kodları icra etməyə çalışır.</li>
  <li><strong><code>catch (err)</code> bloku:</strong> Əgər <code>try</code> daxilində hər hansı bir xəta yaranarsa, proqram dayanmır; icra dərhal <code>catch</code> blokuna yönəldilir və xəta obyekti parametr kimi qəbul edilir:
    <ul>
      <li><code>err.name</code>: Xətanın tipi və ya adı (məsələn, <code>ReferenceError</code>, <code>TypeError</code>).</li>
      <li><code>err.message</code>: Xətanın mahiyyətini izah edən mətn mesajı.</li>
    </ul>
  </li>
</ul>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Avtomobilin Təhlükəsizlik Kəməri və Hava Yastığı</strong>
  <p>Təsəvvür edin ki, avtomobildə hərəkət edirsiniz. Qəfil qarşınıza maneə çıxdıqda və qəza baş verdikdə hava yastığı açılır və zərbəni neytrallaşdırır. <code>try...catch</code> də eynilə kodunuz üçün təhlükəsizlik kəməridir: kod daxilində qəza baş versə belə, istifadəçinin ekranı ağarmır, sistem idarəolunan rejimdə fəaliyyətini davam etdirir.</p>
</div>

<div class="warning-box">
  <strong>⚠️ Python Fərqi:</strong><br>
  Python-dakı <code>try...except</code> bloku JavaScript-də <strong><code>try...catch</code></strong> adlanır. JavaScript-də 'except' açar sözü mövcud deyil!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Xəta Tiplərinin Diferensiasiyası (instanceof) və Təhlükəsiz JSON Analizi</h4>
<p>İstehsalat sistemlərində bütün xətaları eyni cür qarşılamaq düzgün deyil. JavaScript-in standart xəta sinifləri (<code>TypeError</code>, <code>ReferenceError</code>, <code>SyntaxError</code>, <code>RangeError</code>) mövcuddur. <code>instanceof</code> operatoru vasitəsilə baş vermiş xətanın növünü dəqiq müəyyənləşdirib ona uyğun qərar qəbul edə bilərik:</p>

<pre><code>// Zədələnmiş JSON mətnini təhlükəsiz analiz edən mühəndislik nümunəsi
function tehlukesizJSONAnaliz(jsonMetn) {
  try {
    const data = JSON.parse(jsonMetn);
    return { ugur: true, data };
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.warn("Format xətası: Mətn etibarlı JSON deyil!", err.message);
    } else if (err instanceof TypeError) {
      console.warn("Tip xətası: Giriş arqumenti sətir olmalıdır!");
    } else {
      console.error("Gözlənilməz sistem xətası:", err);
    }
    return { ugur: false, data: null };
  }
}

console.log(tehlukesizJSONAnaliz('{"qiymet": 100}')); // { ugur: true, data: { qiymet: 100 } }
console.log(tehlukesizJSONAnaliz("{ zədələnmiş json }")); // { ugur: false, data: null }</code></pre>`,
      "codeExamples": [
        {
          "title": "try...catch ilə Xətanı Tutmaq",
          "code": "try {\n  // Təyin edilməmiş dəyişəni çağıraq (ReferenceError)\n  let netice = namelumDeyisen + 5;\n} catch (err) {\n  console.log(\"Xəta tutuldu:\", err.name);\n}\nconsole.log(\"Proqram sağ-salamat davam edir!\");",
          "output": "Xəta tutuldu: ReferenceError\nProqram sağ-salamat davam edir!"
        }
      ],
      "exercises": [
        {
          "id": "ex-10-1-1",
          "title": "İstisnanın Təhlükəsiz Tutulması və Bərpası",
          "instruction": "Təyin olunmamış funksiya çağırışı zamanı proqramın qəzaya uğramasının qarşısını alın və xəta baş verdikdə konsola \"Xəta aradan qaldırıldı\" bildirişini təhlükəsiz ötürün.",
          "starterCode": "try {\n  qeyriMovcud();\n} catch (err) {\n  // Kodunuzu buraya yazın\n}\n",
          "expectedOutput": "Xəta aradan qaldırıldı",
          "hint": "Gözlənilməz xətaları tutmaq və proqramın dayanmasının qarşısını almaq üçün try...catch mexanizmindən istifadə edin.",
          "solutionCode": "try {\n  qeyriMovcud();\n} catch (err) {\n  console.log(\"Xəta aradan qaldırıldı\");\n}"
        },
        {
          "id": "ex-10-1-2",
          "title": "Xəta Obyektindən Mesajın Oxunması",
          "instruction": "Sistemdə yaranmış istisna obyektini tutaraq onun daxilindəki \"Sistem məşğuldur\" mətn təsvirini konsol ekranında əks etdirin.",
          "starterCode": "try {\n  throw new Error(\"Sistem məşğuldur\");\n} catch (err) {\n  // Kodunuzu buraya yazın\n}\n",
          "expectedOutput": "Sistem məşğuldur",
          "hint": "Tutulan xəta obyektinin izahını oxumaq üçün err.message xassəsindən istifadə olunur.",
          "solutionCode": "try {\n  throw new Error(\"Sistem məşğuldur\");\n} catch (err) {\n  console.log(err.message);\n}"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-10-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Xəta İdarəetmə Bloku Sintaksis Xətası",
          "instruction": "Proqramçı baş verə biləcək xətanı təhlükəsiz şəkildə yaxalamaq istəyir, lakin yad sintaksis səbəbindən skript işə düşmür. Xəta idarəetmə blokunu standart JavaScript qaydalarına uyğunlaşdırın.",
          "description": "Proqramçı baş verə biləcək xətanı təhlükəsiz şəkildə yaxalamaq istəyir, lakin yad sintaksis səbəbindən skript işə düşmür. Xəta idarəetmə blokunu standart JavaScript qaydalarına uyğunlaşdırın.",
          "buggyCode": "try {\n  let a = b;\n} except (err) {\n  console.log(\"Xəta\");\n}",
          "correctCode": "try {\n  let a = b;\n} catch (err) {\n  console.log(\"Xəta\");\n}",
          "correctOutput": "Xəta",
          "expectedOutput": "Xəta",
          "explanation": "JavaScript-də xətaları tutmaq üçün 'except' deyil, 'catch' açar sözündən istifadə olunur."
        }
      ],
      "bugFix": {
        "id": "bug-10-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Xəta İdarəetmə Bloku Sintaksis Xətası",
        "instruction": "Proqramçı baş verə biləcək xətanı təhlükəsiz şəkildə yaxalamaq istəyir, lakin yad sintaksis səbəbindən skript işə düşmür. Xəta idarəetmə blokunu standart JavaScript qaydalarına uyğunlaşdırın.",
        "description": "Proqramçı baş verə biləcək xətanı təhlükəsiz şəkildə yaxalamaq istəyir, lakin yad sintaksis səbəbindən skript işə düşmür. Xəta idarəetmə blokunu standart JavaScript qaydalarına uyğunlaşdırın.",
        "buggyCode": "try {\n  let a = b;\n} except (err) {\n  console.log(\"Xəta\");\n}",
        "correctCode": "try {\n  let a = b;\n} catch (err) {\n  console.log(\"Xəta\");\n}",
        "correctOutput": "Xəta",
        "expectedOutput": "Xəta",
        "explanation": "JavaScript-də xətaları tutmaq üçün 'except' deyil, 'catch' açar sözündən istifadə olunur."
      }
    },
    {
      "id": "topic-10-2",
      "title": "Xüsusi Xəta Yaratmaq: throw və new Error()",
      "theory": `<h3>⚠️ Xüsusi Xəta Yaratmaq (throw new Error)</h3>
<p>Bəzən daxil edilən verilənlər JavaScript sintaksisi baxımından texniki xəta yaratmasa da, <strong>biznes məntiqinə ziddir</strong> (məsələn: istifadəçinin yaşı mənfi daxil edilib, balansda kifayət qədər vəsait yoxdur və ya məxrəc sıfırdır). Belə hallarda mühərrik avtomatik xəta vermir; biz proqramçı olaraq qəsdən istisna yaradıb <strong>atırıq (throw)</strong>:</p>

<pre><code>function yasYoxla(yas) {
  if (yas < 0) {
    throw new Error("Yaş mənfi ola bilməz!");
  }
  return \`Təsdiqləndi: \${yas} yaş\`;
}

try {
  console.log(yasYoxla(-5));
} catch (err) {
  console.log("Tutuldu:", err.message); // "Tutuldu: Yaş mənfi ola bilməz!"
}</code></pre>

<ul>
  <li><strong><code>throw</code>:</strong> İstisnanı fırladır, cari funksiyanın icrasını dərhal dayandırır və idarəetməni ən yaxın <code>catch</code> blokuna ötürür.</li>
  <li><strong><code>new Error(\"mesaj\")</code>:</strong> JavaScript-in daxili standart xəta obyektini yaradır.</li>
</ul>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Bankomatın Nağdlaşdırma Siqnalı</strong>
  <p>Bankomat kartı qəbul edir və siz balansınızda 50 AZN olduğu halda 200 AZN çıxarmaq istəyirsiniz. Bankomat pul çıxarmaq əvəzinə dərhal xəbərdarlıq siqnalı verib ekranda \"Kifayət qədər vəsait yoxdur!\" xətasını göstərir və əməliyyatı dayandırır. <code>throw new Error()</code> məhz bu siqnal düyməsidir.</p>
</div>

<div class="warning-box">
  <strong>⚠️ Python Fərqi:</strong><br>
  Python-dakı <code>raise ValueError("...")</code> əvəzinə JavaScript-də <strong><code>throw new Error("...")</code></strong> yazılır.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Fərdi Xəta Sinifləri (Custom Error Classes) və Error.cause</h4>
<p>Böyük arxitekturalarda xətanın növünü, HTTP status kodunu və əlavə meta-məlumatları saxlamaq üçün <code>Error</code> sinfindən irs alan fərdi xəta sinifləri (Custom Error Classes) yaradılır. Həmçinin ES2022 standartı ilə gələn <code>cause</code> xassəsi əsas xətanı ilkin səbəbə bağlamağa imkan verir (Error Chaining):</p>

<pre><code>// Biznes məntiqi üçün fərdi Doğrulama Xətası sinfi
class DogrulamaXetasi extends Error {
  constructor(mesaj, sahe, statusKodu = 400) {
    super(mesaj);
    this.name = "DogrulamaXetasi";
    this.sahe = sahe;
    this.statusKodu = statusKodu;
  }
}

// Xətaların zəncirvari bağlanması (Error Chaining with cause - ES2022)
function istifadeciQeydiyyat(data) {
  try {
    if (!data.email.includes("@")) {
      throw new DogrulamaXetasi("Email formatı yanlışdır", "email");
    }
  } catch (ilkinXeta) {
    // İlkin xətanı daha yüksək səviyyəli sistem xətasına zəncirləyirik:
    throw new Error("Qeydiyyat prosesi uğursuz oldu", { cause: ilkinXeta });
  }
}

try {
  istifadeciQeydiyyat({ email: "istifadeci.az" });
} catch (err) {
  console.log("Əsas xəta:", err.message); // "Qeydiyyat prosesi uğursuz oldu"
  console.log("İlkin səbəb:", err.cause.name, "-", err.cause.message); // "DogrulamaXetasi - Email formatı yanlışdır"
}</code></pre>`,
      "codeExamples": [
        {
          "title": "throw ilə Doğrulama",
          "code": "function pulKocur(mebleg) {\n  if (mebleg <= 0) {\n    throw new Error(\"Məbləğ müsbət olmalıdır\");\n  }\n  return \"Köçürüldü: \" + mebleg + \" AZN\";\n}\n\ntry {\n  console.log(pulKocur(-50));\n} catch (e) {\n  console.log(e.message);\n}",
          "output": "Məbləğ müsbət olmalıdır"
        }
      ],
      "exercises": [
        {
          "id": "ex-10-2-1",
          "title": "Qeyri-Mümkün Əməliyyat üçün Xəta Generasiyası",
          "instruction": "İki ədədi bölən <code>bol</code> funksiyası tərtib edin. Məxrəc 0 olduqda qəsdən \"Sıfıra bölmək olmaz!\" xətası fırladın və funksiyanı 10 ilə 0 üçün sınaqdan keçirib xəta mesajını ekranda əks etdirin.",
          "starterCode": "function bol(a, b) {\n  // Kodunuzu buraya yazın\n  return a / b;\n}\n\ntry {\n  bol(10, 0);\n} catch (e) {\n  console.log(e.message);\n}\n",
          "expectedOutput": "Sıfıra bölmək olmaz!",
          "hint": "Xüsusi xəta vəziyyətlərini qeydə almaq üçün if (b === 0) throw new Error(...) strukturundan istifadə edin.",
          "solutionCode": "function bol(a, b) {\n  if (b === 0) throw new Error(\"Sıfıra bölmək olmaz!\");\n  return a / b;\n}\n\ntry {\n  bol(10, 0);\n} catch (e) {\n  console.log(e.message);\n}"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-10-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Fərdi Xəta Fırlatma Sintaksis Xətası",
          "instruction": "Yaş mənfi olduqda sistem xüsusi xəta fırlatmalıdır, lakin istifadə olunan açar söz JavaScript tərəfindən tanınmır. Xəta generasiyasını JavaScript qaydalarına uyğunlaşdırın.",
          "description": "Yaş mənfi olduqda sistem xüsusi xəta fırlatmalıdır, lakin istifadə olunan açar söz JavaScript tərəfindən tanınmır. Xəta generasiyasını JavaScript qaydalarına uyğunlaşdırın.",
          "buggyCode": "function test() {\n  raise Error(\"Yanlış dəyər\");\n}\ntry {\n  test();\n} catch(err) {\n  console.log(err.message);\n}",
          "correctCode": "function test() {\n  throw new Error(\"Yanlış dəyər\");\n}\ntry {\n  test();\n} catch(err) {\n  console.log(err.message);\n}",
          "correctOutput": "Yanlış dəyər",
          "expectedOutput": "Yanlış dəyər",
          "explanation": "JavaScript-də xəta yaratmaq üçün 'raise' deyil, 'throw new Error()' sintaksisindən istifadə edilir."
        }
      ],
      "bugFix": {
        "id": "bug-10-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Fərdi Xəta Fırlatma Sintaksis Xətası",
        "instruction": "Yaş mənfi olduqda sistem xüsusi xəta fırlatmalıdır, lakin istifadə olunan açar söz JavaScript tərəfindən tanınmır. Xəta generasiyasını JavaScript qaydalarına uyğunlaşdırın.",
        "description": "Yaş mənfi olduqda sistem xüsusi xəta fırlatmalıdır, lakin istifadə olunan açar söz JavaScript tərəfindən tanınmır. Xəta generasiyasını JavaScript qaydalarına uyğunlaşdırın.",
        "buggyCode": "function test() {\n  raise Error(\"Yanlış dəyər\");\n}\ntry {\n  test();\n} catch(err) {\n  console.log(err.message);\n}",
        "correctCode": "function test() {\n  throw new Error(\"Yanlış dəyər\");\n}\ntry {\n  test();\n} catch(err) {\n  console.log(err.message);\n}",
        "correctOutput": "Yanlış dəyər",
        "expectedOutput": "Yanlış dəyər",
        "explanation": "JavaScript-də xəta yaratmaq üçün 'raise' deyil, 'throw new Error()' sintaksisindən istifadə edilir."
      }
    },
    {
      "id": "topic-10-3",
      "title": "finally Bloku",
      "theory": `<h3>🏁 Hər Halda İcra Olunan: finally</h3>
<p><code>try...catch</code> strukturunun sonuna <strong>finally</strong> bloku əlavə edilə bilər. Bu blokun əsas xüsusiyyəti odur ki, <code>try</code> daxilindəki əməliyyat uğurla bitsə də, xəta baş verib <code>catch</code>-ə düşsə də, hətta blok daxilində <code>return</code> çağırılsada, <strong>MÜTLƏQ VƏ HƏR BİR HALDA</strong> ən sonda icra olunur:</p>

<pre><code>try {
  // 1. Resurs açılır və ya yüklənmə başladılır
  yuklenmeGostericisi(true);
  servereBaglan();
} catch (err) {
  // 2. Xəta baş verərsə qeydə alınır
  console.log("Xəta baş verdi:", err.message);
} finally {
  // 3. Uğurlu və ya xətalı olmasından asılı olmayaraq HƏR HALDA işləyir
  yuklenmeGostericisi(false); // Yüklənmə spinner-ini mütləq söndürürük
}</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Otaqdan Çıxarkən İşığı Söndürmək</strong>
  <p>Təsəvvür edin ki, otaqda işinizi bitirdiniz və çıxırsınız. İşiniz uğurlu oldu, yoxsa yarımçıq qaldı — fərq etməz, otaqdan çıxarkən elektrik enerjisinə qənaət üçün işığı mütləq söndürməlisiniz. <code>finally</code> bloku da proqramlaşdırmada açıq qalmış faylları, bazaya qoşulmaları və yüklənmə animasiyalarını bağlayan məsuliyyətli təmizləyicidir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Xətanın Yenidən Atılması (Rethrowing Pattern) və Resilient Retry Məntiqi</h4>
<p>Təcrübəli mühəndislikdə ən böyük səhvlərdən biri bütün xətaları səssizcə <code>catch</code>-də udmaqdır (Error Swallowing). Əgər tutulan xəta cari funksiyanın həll edə biləcəyi növ deyilsə, o, mütləq <strong>yenidən atılmalıdır (rethrow)</strong>:</p>

<pre><code>// Xətanın yenidən atılması (Rethrowing Pattern)
function faylOxu(faylYolu) {
  let faylResursu = null;
  try {
    faylResursu = fayliAc(faylYolu);
    return faylResursu.oxu();
  } catch (err) {
    if (err.code === "ENOENT") {
      // Fayl tapılmadıqda təhlükəsiz default qaytarırıq
      console.warn("Fayl tapılmadı, standart konfiqurasiya yüklənir.");
      return {};
    }
    // Gözlənilməz və ya kritik sistem xətasıdırsa, yuxarı səviyyəyə yenidən atırıq!
    throw err;
  } finally {
    // Xəta yuxarı atılsa belə, resurs mütləq bağlanır!
    if (faylResursu) faylResursu.bagla();
  }
}</code></pre>`,
      "codeExamples": [
        {
          "title": "finally Blokunun İcrası",
          "code": "try {\n  console.log(\"1. Əməliyyat uğurludur\");\n} catch (err) {\n  console.log(\"Xəta baş verdi\");\n} finally {\n  console.log(\"2. Təmizlik işləri tamamlandı\");\n}",
          "output": "1. Əməliyyat uğurludur\n2. Təmizlik işləri tamamlandı"
        }
      ],
      "exercises": [
        {
          "id": "ex-10-3-1",
          "title": "Zəmanətli Yekunlaşdırma Əməliyyatı",
          "instruction": "Əməliyyatın uğurlu və ya xətalı olmasından asılı olmayaraq, başlanğıcda \"Başladı\", sonunda isə mütləq icra olunan zəmanətli blokda \"Yekunlaşdı\" mesajını konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Başladı\nYekunlaşdı",
          "hint": "Hər bir halda icra olunması zəmanətlənən kodları yerləşdirmək üçün try...finally strukturundan istifadə olunur.",
          "solutionCode": "try {\n  console.log(\"Başladı\");\n} finally {\n  console.log(\"Yekunlaşdı\");\n}"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-10-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "finally Blokunun Quraşdırılma Xətası",
          "instruction": "Resursların bağlanması üçün nəzərdə tutulan təmizləmə bloku sintaksis xətası verir və icra olunmur. Blokun strukturunu bərpa edərək hər vəziyyətdə işləməsini təmin edin.",
          "description": "Resursların bağlanması üçün nəzərdə tutulan təmizləmə bloku sintaksis xətası verir və icra olunmur. Blokun strukturunu bərpa edərək hər vəziyyətdə işləməsini təmin edin.",
          "buggyCode": "try {\n  console.log(\"İşləyir\");\n} finally\n  console.log(\"Bitdi\");",
          "correctCode": "try {\n  console.log(\"İşləyir\");\n} finally {\n  console.log(\"Bitdi\");\n}",
          "correctOutput": "İşləyir\nBitdi",
          "expectedOutput": "İşləyir\nBitdi",
          "explanation": "try, catch və finally blokları mütləq fiqurlu mötərizələrlə { } əhatə olunmalıdır."
        }
      ],
      "bugFix": {
        "id": "bug-10-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "finally Blokunun Quraşdırılma Xətası",
        "instruction": "Resursların bağlanması üçün nəzərdə tutulan təmizləmə bloku sintaksis xətası verir və icra olunmur. Blokun strukturunu bərpa edərək hər vəziyyətdə işləməsini təmin edin.",
        "description": "Resursların bağlanması üçün nəzərdə tutulan təmizləmə bloku sintaksis xətası verir və icra olunmur. Blokun strukturunu bərpa edərək hər vəziyyətdə işləməsini təmin edin.",
        "buggyCode": "try {\n  console.log(\"İşləyir\");\n} finally\n  console.log(\"Bitdi\");",
        "correctCode": "try {\n  console.log(\"İşləyir\");\n} finally {\n  console.log(\"Bitdi\");\n}",
        "correctOutput": "İşləyir\nBitdi",
        "expectedOutput": "İşləyir\nBitdi",
        "explanation": "try, catch və finally blokları mütləq fiqurlu mötərizələrlə { } əhatə olunmalıdır."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section10 };
}
console.log('Section 10 built successfully');
