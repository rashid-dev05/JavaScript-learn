var SECTIONS_10_13 = [
  {
    "id": "section-10",
    "title": "Bölmə 10: Xəta İdarəetmə (try...catch, throw new Error)",
    "icon": "🛡️",
    "topics": [
      {
        "id": "topic-10-1",
        "title": "try...catch Strukturu və Xətaların Tutulması",
        "theory": "<h3>🛡️ Təhlükəsizlik Kəməri: try...catch</h3>\n<p>Real veb layihələrində proqramçıdan asılı olmayan xarici amillər səbəbindən gözlənilməz xətalar (runtime errors) yarana bilər: istifadəçi formatı pozulmuş fayl yükləyə bilər, serverdən gələn JSON zədələnə bilər və ya internet bağlantısı kəsilə bilər. Əgər bu xətaları nəzarətə almasaq, JavaScript mühərriki skriptin icrasını dərhal dayandırar və bütün veb tətbiq <strong>tamamilə çökər</strong>.</p>\n\n<p>Bu cür fəsadların qarşısını almaq üçün <strong>try...catch</strong> blokundan istifadə olunur:</p>\n\n<pre><code>try {\n  // Riskli kod sahəsi: burada istisna (exception) baş verə bilər\n  const netice = riskliEmeliyyat();\n  console.log(\"Uğurla tamamlandı:\", netice);\n} catch (xeta) {\n  // Yalnız try daxilində xəta yarandıqda bu blok işə düşür\n  console.log(\"Xəta baş verdi:\", xeta.name, \"-\", xeta.message);\n}</code></pre>\n\n<ul>\n  <li><strong><code>try</code> bloku:</strong> Mühərrik əvvəlcə bu blokdakı kodları icra etməyə çalışır.</li>\n  <li><strong><code>catch (err)</code> bloku:</strong> Əgər <code>try</code> daxilində hər hansı bir xəta yaranarsa, proqram dayanmır; icra dərhal <code>catch</code> blokuna yönəldilir və xəta obyekti parametr kimi qəbul edilir:\n    <ul>\n      <li><code>err.name</code>: Xətanın tipi və ya adı (məsələn, <code>ReferenceError</code>, <code>TypeError</code>).</li>\n      <li><code>err.message</code>: Xətanın mahiyyətini izah edən mətn mesajı.</li>\n    </ul>\n  </li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Avtomobilin Təhlükəsizlik Kəməri və Hava Yastığı</strong>\n  <p>Təsəvvür edin ki, avtomobildə hərəkət edirsiniz. Qəfil qarşınıza maneə çıxdıqda və qəza baş verdikdə hava yastığı açılır və zərbəni neytrallaşdırır. <code>try...catch</code> də eynilə kodunuz üçün təhlükəsizlik kəməridir: kod daxilində qəza baş versə belə, istifadəçinin ekranı ağarmır, sistem idarəolunan rejimdə fəaliyyətini davam etdirir.</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Python Fərqi:</strong><br>\n  Python-dakı <code>try...except</code> bloku JavaScript-də <strong><code>try...catch</code></strong> adlanır. JavaScript-də 'except' açar sözü mövcud deyil!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Xəta Tiplərinin Diferensiasiyası (instanceof) və Təhlükəsiz JSON Analizi</h4>\n<p>İstehsalat sistemlərində bütün xətaları eyni cür qarşılamaq düzgün deyil. JavaScript-in standart xəta sinifləri (<code>TypeError</code>, <code>ReferenceError</code>, <code>SyntaxError</code>, <code>RangeError</code>) mövcuddur. <code>instanceof</code> operatoru vasitəsilə baş vermiş xətanın növünü dəqiq müəyyənləşdirib ona uyğun qərar qəbul edə bilərik:</p>\n\n<pre><code>// Zədələnmiş JSON mətnini təhlükəsiz analiz edən mühəndislik nümunəsi\nfunction tehlukesizJSONAnaliz(jsonMetn) {\n  try {\n    const data = JSON.parse(jsonMetn);\n    return { ugur: true, data };\n  } catch (err) {\n    if (err instanceof SyntaxError) {\n      console.warn(\"Format xətası: Mətn etibarlı JSON deyil!\", err.message);\n    } else if (err instanceof TypeError) {\n      console.warn(\"Tip xətası: Giriş arqumenti sətir olmalıdır!\");\n    } else {\n      console.error(\"Gözlənilməz sistem xətası:\", err);\n    }\n    return { ugur: false, data: null };\n  }\n}\n\nconsole.log(tehlukesizJSONAnaliz('{\"qiymet\": 100}')); // { ugur: true, data: { qiymet: 100 } }\nconsole.log(tehlukesizJSONAnaliz(\"{ zədələnmiş json }\")); // { ugur: false, data: null }</code></pre>",
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
        "theory": "<h3>⚠️ Xüsusi Xəta Yaratmaq (throw new Error)</h3>\n<p>Bəzən daxil edilən verilənlər JavaScript sintaksisi baxımından texniki xəta yaratmasa da, <strong>biznes məntiqinə ziddir</strong> (məsələn: istifadəçinin yaşı mənfi daxil edilib, balansda kifayət qədər vəsait yoxdur və ya məxrəc sıfırdır). Belə hallarda mühərrik avtomatik xəta vermir; biz proqramçı olaraq qəsdən istisna yaradıb <strong>atırıq (throw)</strong>:</p>\n\n<pre><code>function yasYoxla(yas) {\n  if (yas < 0) {\n    throw new Error(\"Yaş mənfi ola bilməz!\");\n  }\n  return `Təsdiqləndi: ${yas} yaş`;\n}\n\ntry {\n  console.log(yasYoxla(-5));\n} catch (err) {\n  console.log(\"Tutuldu:\", err.message); // \"Tutuldu: Yaş mənfi ola bilməz!\"\n}</code></pre>\n\n<ul>\n  <li><strong><code>throw</code>:</strong> İstisnanı fırladır, cari funksiyanın icrasını dərhal dayandırır və idarəetməni ən yaxın <code>catch</code> blokuna ötürür.</li>\n  <li><strong><code>new Error(\"mesaj\")</code>:</strong> JavaScript-in daxili standart xəta obyektini yaradır.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Bankomatın Nağdlaşdırma Siqnalı</strong>\n  <p>Bankomat kartı qəbul edir və siz balansınızda 50 AZN olduğu halda 200 AZN çıxarmaq istəyirsiniz. Bankomat pul çıxarmaq əvəzinə dərhal xəbərdarlıq siqnalı verib ekranda \"Kifayət qədər vəsait yoxdur!\" xətasını göstərir və əməliyyatı dayandırır. <code>throw new Error()</code> məhz bu siqnal düyməsidir.</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Python Fərqi:</strong><br>\n  Python-dakı <code>raise ValueError(\"...\")</code> əvəzinə JavaScript-də <strong><code>throw new Error(\"...\")</code></strong> yazılır.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Fərdi Xəta Sinifləri (Custom Error Classes) və Error.cause</h4>\n<p>Böyük arxitekturalarda xətanın növünü, HTTP status kodunu və əlavə meta-məlumatları saxlamaq üçün <code>Error</code> sinfindən irs alan fərdi xəta sinifləri (Custom Error Classes) yaradılır. Həmçinin ES2022 standartı ilə gələn <code>cause</code> xassəsi əsas xətanı ilkin səbəbə bağlamağa imkan verir (Error Chaining):</p>\n\n<pre><code>// Biznes məntiqi üçün fərdi Doğrulama Xətası sinfi\nclass DogrulamaXetasi extends Error {\n  constructor(mesaj, sahe, statusKodu = 400) {\n    super(mesaj);\n    this.name = \"DogrulamaXetasi\";\n    this.sahe = sahe;\n    this.statusKodu = statusKodu;\n  }\n}\n\n// Xətaların zəncirvari bağlanması (Error Chaining with cause - ES2022)\nfunction istifadeciQeydiyyat(data) {\n  try {\n    if (!data.email.includes(\"@\")) {\n      throw new DogrulamaXetasi(\"Email formatı yanlışdır\", \"email\");\n    }\n  } catch (ilkinXeta) {\n    // İlkin xətanı daha yüksək səviyyəli sistem xətasına zəncirləyirik:\n    throw new Error(\"Qeydiyyat prosesi uğursuz oldu\", { cause: ilkinXeta });\n  }\n}\n\ntry {\n  istifadeciQeydiyyat({ email: \"istifadeci.az\" });\n} catch (err) {\n  console.log(\"Əsas xəta:\", err.message); // \"Qeydiyyat prosesi uğursuz oldu\"\n  console.log(\"İlkin səbəb:\", err.cause.name, \"-\", err.cause.message); // \"DogrulamaXetasi - Email formatı yanlışdır\"\n}</code></pre>",
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
        "theory": "<h3>🏁 Hər Halda İcra Olunan: finally</h3>\n<p><code>try...catch</code> strukturunun sonuna <strong>finally</strong> bloku əlavə edilə bilər. Bu blokun əsas xüsusiyyəti odur ki, <code>try</code> daxilindəki əməliyyat uğurla bitsə də, xəta baş verib <code>catch</code>-ə düşsə də, hətta blok daxilində <code>return</code> çağırılsada, <strong>MÜTLƏQ VƏ HƏR BİR HALDA</strong> ən sonda icra olunur:</p>\n\n<pre><code>try {\n  // 1. Resurs açılır və ya yüklənmə başladılır\n  yuklenmeGostericisi(true);\n  servereBaglan();\n} catch (err) {\n  // 2. Xəta baş verərsə qeydə alınır\n  console.log(\"Xəta baş verdi:\", err.message);\n} finally {\n  // 3. Uğurlu və ya xətalı olmasından asılı olmayaraq HƏR HALDA işləyir\n  yuklenmeGostericisi(false); // Yüklənmə spinner-ini mütləq söndürürük\n}</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Otaqdan Çıxarkən İşığı Söndürmək</strong>\n  <p>Təsəvvür edin ki, otaqda işinizi bitirdiniz və çıxırsınız. İşiniz uğurlu oldu, yoxsa yarımçıq qaldı — fərq etməz, otaqdan çıxarkən elektrik enerjisinə qənaət üçün işığı mütləq söndürməlisiniz. <code>finally</code> bloku da proqramlaşdırmada açıq qalmış faylları, bazaya qoşulmaları və yüklənmə animasiyalarını bağlayan məsuliyyətli təmizləyicidir.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Xətanın Yenidən Atılması (Rethrowing Pattern) və Resilient Retry Məntiqi</h4>\n<p>Təcrübəli mühəndislikdə ən böyük səhvlərdən biri bütün xətaları səssizcə <code>catch</code>-də udmaqdır (Error Swallowing). Əgər tutulan xəta cari funksiyanın həll edə biləcəyi növ deyilsə, o, mütləq <strong>yenidən atılmalıdır (rethrow)</strong>:</p>\n\n<pre><code>// Xətanın yenidən atılması (Rethrowing Pattern)\nfunction faylOxu(faylYolu) {\n  let faylResursu = null;\n  try {\n    faylResursu = fayliAc(faylYolu);\n    return faylResursu.oxu();\n  } catch (err) {\n    if (err.code === \"ENOENT\") {\n      // Fayl tapılmadıqda təhlükəsiz default qaytarırıq\n      console.warn(\"Fayl tapılmadı, standart konfiqurasiya yüklənir.\");\n      return {};\n    }\n    // Gözlənilməz və ya kritik sistem xətasıdırsa, yuxarı səviyyəyə yenidən atırıq!\n    throw err;\n  } finally {\n    // Xəta yuxarı atılsa belə, resurs mütləq bağlanır!\n    if (faylResursu) faylResursu.bagla();\n  }\n}</code></pre>",
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
  },
  {
    "id": "section-11",
    "title": "Bölmə 11: Müasir Massiv Əməliyyatları (map, filter, reduce, find)",
    "icon": "⚡",
    "topics": [
      {
        "id": "topic-11-1",
        "title": "map() Metodu ilə Transformasiya",
        "theory": "<h3>🗺️ map() Metodu ilə Transformasiya</h3>\n<p><strong>map()</strong> — funksional proqramlaşdırmanın ən vacib metodlarından biridir. O, mövcud massivin hər bir elementini verilmiş əks etdirmə (mapping) funksiyasından keçirərək <strong>eyni uzunluqlu tamamilə yeni bir massiv</strong> qaytarır. Orijinal massiv isə toxunulmaz (immutable) qalır:</p>\n\n<pre><code>const ededler = [1, 2, 3];\nconst ikiqat = ededler.map(x => x * 2);\n\nconsole.log(ededler); // [1, 2, 3] (dəyişməz qaldı)\nconsole.log(ikiqat);  // [2, 4, 6] (yeni massiv)</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Valyutadəyişmə Konveyeri</strong>\n  <p>Təsəvvür edin ki, konveyer lenti ilə 10 ədəd 100 dollarlıq əskinas hərəkət edir. Hər bir əskinas avtomatlaşdırılmış skanerdən keçir və cari məzənnəyə vurularaq 170 manatlıq əskinas şəklində yeni qutuya yığılır. Orijinal pullar necə idisə elə qalır, yeni qutuda isə eyni sayda dəyişdirilmiş manatlar yaranır. <code>map()</code> məhz bu konveyer çeviricisidir.</p>\n</div>\n\n<div class=\"tip-box\">\n  <strong>🌟 Klassik for Dövrü ilə Müqayisə:</strong><br>\n  Klassik dövrlərdə əvvəlcə boş massiv yaradıb <code>for</code> ilə gəzərək hər dəfə <code>push()</code> etmək lazım gəlirdi. <code>map()</code> isə bunu tək bir sətirdə deklarativ, aydın və yan təsirlərdən (side effects) uzaq şəkildə həyata keçirir.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Fərdi Polifil Yaradılması (Custom Polyfill) və Metod Zəncirləməsi</h4>\n<p>Metodun daxili mühərrik məntiqini anlamaq üçün <code>Array.prototype</code> üzərində öz şəxsi <code>ozMap</code> polifilimizi yaradaq. <code>this</code> cari massivə istinad edir, callback isə 3 arqument qəbul edir: <code>(element, indeks, massiv)</code>:</p>\n\n<pre><code>// 1. Array.prototype üçün fərdi map polifili\nArray.prototype.ozMap = function(callback) {\n  if (typeof callback !== \"function\") {\n    throw new TypeError(\"Callback funksiya olmalıdır!\");\n  }\n  const netice = [];\n  for (let i = 0; i < this.length; i++) {\n    // Seyrək (sparse) massivlərdə boş xanaları ötürmək üçün:\n    if (i in this) {\n      netice.push(callback(this[i], i, this));\n    }\n  }\n  return netice;\n};\n\n// 2. Metod Zəncirləməsi (Method Chaining)\nconst qiymetler = [10, 20, 30];\nconst formatlanmis = qiymetler\n  .ozMap(q => q * 1.18)          // 18% ƏDV əlavə et\n  .ozMap(q => `${q.toFixed(2)} AZN`); // Valyuta mətni formatına sal\n\nconsole.log(formatlanmis);\n// [\"11.80 AZN\", \"23.60 AZN\", \"35.40 AZN\"]</code></pre>",
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
        "theory": "<h3>🎯 filter() Metodu Nədir?</h3>\n<p><strong>filter()</strong> — massivin elementlərini məntiqi süzgəcdən (predikat yoxlamasından) keçirərək yalnız verilmiş şərti ödəyən (yəni <code>true</code> və ya <em>truthy</em> qaytaran) elementlərdən ibarət yeni bir alt-massiv qaytarır:</p>\n\n<pre><code>const ballar = [45, 80, 92, 35, 74];\nconst kecenler = ballar.filter(bal => bal >= 50);\n\nconsole.log(kecenler); // [80, 92, 74]</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Hava Limanının Təhlükəsizlik Rentgeni</strong>\n  <p>Hava limanında sərnişinlərin çantaları konveyerlə rentgen aparatından keçir. Təhlükəsizlik qaydalarına uyğun gələn (<code>true</code>) çantalar maneəsiz təyyarəyə buraxılır, qadağan olunmuş əşyalar olan çantalar isə kənarda saxlanılır. <code>filter()</code> metodu məhz şərti ödəyən məlumatları seçib ayıran dəqiq süzgəcdir.</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ filter() Qızıl Qaydası:</strong><br>\n  Callback funksiyası Boolean qiymət qaytarmalıdır. Əgər şərt <code>true</code> olarsa, cari element yeni massivə daxil edilir. <code>false</code> olarsa kənarda qalır. Nəticə massivinin uzunluğu ilkin massivin uzunluğundan kiçik və ya bərabər olur.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Çoxmeyarlı Dinamik Filtrasiya və Məlumat Zənginləşdirilməsi</h4>\n<p>E-ticarət (e-commerce) platformalarında istifadəçilər məhsulları bir neçə parametrə görə (kateqoriya, qiymət aralığı, anbarda mövcudluq) eyni vaxtda süzgəcdən keçirirlər. Çoxmeyarlı filtrləmə mühərrikini aşağıdakı kimi qurmaq olar:</p>\n\n<pre><code>const mehsullar = [\n  { id: 1, ad: \"Laptop Pro\", kateqoriya: \"elektronika\", qiymet: 2400, stokda: true },\n  { id: 2, ad: \"Klaviatura\", kateqoriya: \"aksesuar\", qiymet: 120, stokda: false },\n  { id: 3, ad: \"Monitor 4K\", kateqoriya: \"elektronika\", qiymet: 950, stokda: true },\n  { id: 4, ad: \"Maus\", kateqoriya: \"aksesuar\", qiymet: 45, stokda: true }\n];\n\n// Dinamik filtr obyekti (istifadəçi seçimləri)\nconst secimler = {\n  kateqoriya: \"elektronika\",\n  maksQiymet: 2500,\n  yalnizStokda: true\n};\n\nconst netice = mehsullar.filter(m => {\n  const kateqoriyaUygun = !secimler.kateqoriya || m.kateqoriya === secimler.kateqoriya;\n  const qiymetUygun = !secimler.maksQiymet || m.qiymet <= secimler.maksQiymet;\n  const stokUygun = !secimler.yalnizStokda || m.stokda;\n  return kateqoriyaUygun && qiymetUygun && stokUygun;\n});\n\nconsole.log(netice.map(m => `${m.ad}: ${m.qiymet} AZN`));\n// [\"Laptop Pro: 2400 AZN\", \"Monitor 4K: 950 AZN\"]</code></pre>",
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
        "theory": "<h3>🧮 reduce() Metodu Nədir?</h3>\n<p><strong>reduce()</strong> — bütöv bir massivin elementlərini addım-addım tək bir yekun dəyərə (cəm, hasil, ən böyük ədəd, lüğət və s.) çevirən (aqreqasiya edən) ən güclü funksional metoddur:</p>\n\n<pre><code>const ededler = [10, 20, 30];\nconst cem = ededler.reduce((akkumulyator, cari) => akkumulyator + cari, 0);\n\nconsole.log(cem); // 60</code></pre>\n\n<ul>\n  <li><strong>Akkumulyator (Toplayıcı / acc):</strong> Əvvəlki addımlardan qalan və toplanan yekun qiymətdir.</li>\n  <li><strong>Cari (Current / curr):</strong> Massivdən hazırda emal olunan növbəti elementdir.</li>\n  <li><strong>İlkin Dəyər (Initial Value):</strong> Callback-dən sonra ikinci arqument kimi ötürülən başlanğıc dəyərdir (məsələn, cəmləmədə <code>0</code>, vurmada <code>1</code>, obyekt qruplaşdırmasında <code>{}</code>).</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Supermarket Kassasının Skaneri</strong>\n  <p>Alver səbətinizdə müxtəlif qiymətlərdə 10 məhsul var. Kassir hər bir məhsulu tək-tək skanerdən keçirir. Kassanın ekranındakı ümumi borc məbləği (akkumulyator) hər yeni məhsulun qiyməti (cari dəyər) ilə artır. Ən sonda sizə bütöv səbətin tək bir yekun kassa çeki təqdim olunur. <code>reduce()</code> məhz bu kassa skaneridir.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Mürəkkəb Qruplaşdırma (groupBy Analoqu), Tezlik Xəritəsi və pipe Kompozisiyası</h4>\n<p><code>reduce()</code> təkcə ədədləri toplamaq üçün deyil, məlumat strukturlarını kökündən dəyişdirmək üçün istifadə olunur:</p>\n\n<pre><code>// 1. Kateqoriyaya görə qruplaşdırma (Object Group By)\nconst telebeler = [\n  { ad: \"Nigar\", seher: \"Bakı\" },\n  { ad: \"Rəşad\", seher: \"Gəncə\" },\n  { ad: \"Murad\", seher: \"Bakı\" }\n];\n\nconst qruplar = telebeler.reduce((acc, t) => {\n  acc[t.seher] = acc[t.seher] || [];\n  acc[t.seher].push(t.ad);\n  return acc;\n}, {});\n\nconsole.log(qruplar);\n// { \"Bakı\": [\"Nigar\", \"Murad\"], \"Gəncə\": [\"Rəşad\"] }\n\n// 2. Tezlik Xəritəsi (Frequency Map)\nconst herfler = [\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"];\nconst tezlik = herfler.reduce((acc, h) => {\n  acc[h] = (acc[h] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(tezlik); // { a: 3, b: 2, c: 1 }\n\n// 3. Funksional Boru (pipe Pipeline)\nconst pipe = (...funksiyalar) => x => funksiyalar.reduce((v, f) => f(v), x);\nconst artir = n => n + 1;\nconst ikiyeVur = n => n * 2;\nconst kvadrataYukselt = n => n * n;\n\nconst emeliyyat = pipe(artir, ikiyeVur, kvadrataYukselt);\nconsole.log(emeliyyat(2)); // ((2 + 1) * 2)^2 = 36</code></pre>",
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
        "theory": "<h3>🔍 Digər Faydalı Massiv Metodları</h3>\n<p>Müasir JavaScript-də <code>for</code> dövrlərini əvəz edən və kənarlaşma/axtarış məntiqini sadələşdirən 3 əsas metod:</p>\n\n<ul>\n  <li><strong><code>find(fn)</code>:</strong> Şərti ödəyən <strong>ən birinci elementi</strong> tapıb qaytarır (filter kimi massiv deyil, elementin birbaşa özünü qaytarır; tapmazsa <code>undefined</code> olur). Şərt ödənən kimi axtarışı dayandırır (short-circuiting):<br>\n  <code>[10, 25, 30].find(x => x > 20) // 25</code></li>\n  <li><strong><code>some(fn)</code>:</strong> Massivdə <strong>ən azı bircə element</strong> şərti ödəyirsə <code>true</code>, heç biri ödəmirsə <code>false</code> qaytarır:<br>\n  <code>[-1, 5, -3].some(x => x > 0) // true (çünki 5 müsbətdir)</code></li>\n  <li><strong><code>every(fn)</code>:</strong> Yalnız və yalnız <strong>bütün elementlər</strong> şərti ödədikdə <code>true</code> qaytarır; bircə dənə şərtə uyğun olmayan tapılarsa dərhal <code>false</code> olur:<br>\n  <code>[2, 4, 6].every(x => x % 2 === 0) // true</code></li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Sərnişin və Bilet Nəzarəti</strong>\n  <p>Təsəvvür edin ki, təyyarəyə minik qapısındasınız:\n    <br>• <code>find()</code>: Təhlükəsizlik xidmətinin axtardığı konkret şəxsi sərnişin siyahısından ilk gördüyü an tutmasıdır.\n    <br>• <code>some()</code>: Sərnişinlər arasında təcili tibbi yardıma ehtiyacı olan ən azı bir həkimin olub-olmadığını yoxlamaqdır.\n    <br>• <code>every()</code>: Təyyarənin havaya qalxması üçün BÜTÜN sərnişinlərin təhlükəsizlik kəmərini bağlamasını tələb etməkdir.\n  </p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Düzgün Sıralama (sort), flatMap() və Dərin Düzləşdirmə (Recursive Flatten)</h4>\n<p>Massivlərin sıralanması və iç-içə strukturların düzləşdirilməsində mühəndislərin tez-tez qarşılaşdığı tələlər və müasir həllər:</p>\n\n<pre><code>// 1. sort() Tələsi (ASCII / UTF-16 əlifba sırası):\nconst ededler = [10, 5, 20, 100];\nededler.sort(); // [10, 100, 20, 5] -- Səhvdir! Mətn kimi sıralayır!\nededler.sort((a, b) => a - b); // [5, 10, 20, 100] -- Düzgün riyazi sıralama!\n\n// Sətirlər üçün regional əlifba sıralaması (Azərbaycan hərfləri):\nconst seherler = [\"Gəncə\", \"Bakı\", \"Şəki\", \"Ağdam\"];\nseherler.sort((a, b) => a.localeCompare(b, \"az\"));\nconsole.log(seherler); // [\"Ağdam\", \"Bakı\", \"Gəncə\", \"Şəki\"]\n\n// 2. flatMap() ilə Xəritələmə və Düzləşdirmə bir addımda\nconst cumleler = [\"Salam dünya\", \"JavaScript öyrənirəm\"];\nconst sozler = cumleler.flatMap(c => c.split(\" \"));\nconsole.log(sozler); // [\"Salam\", \"dünya\", \"JavaScript\", \"öyrənirəm\"]\n\n// 3. Sonsuz Dərinlikli Rekursiv Düzləşdirmə (Deep Flatten)\nfunction derinDuzlesdir(arr) {\n  return arr.reduce((acc, cur) => {\n    return acc.concat(Array.isArray(cur) ? derinDuzlesdir(cur) : cur);\n  }, []);\n}\nconsole.log(derinDuzlesdir([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]</code></pre>",
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
  },
  {
    "id": "section-12",
    "title": "Bölmə 12: ES6 OOP & Modullar (class, extends, import, export)",
    "icon": "🏛️",
    "topics": [
      {
        "id": "topic-12-1",
        "title": "class Sintaksisi və constructor Metodu",
        "theory": "<h3>🏛️ Obyekt Yönümlü Proqramlaşdırma (OOP)</h3>\n<p><strong>Klas (Class)</strong> — eyni növ obyektləri sistemli şəkildə istehsal etmək üçün istifadə olunan bir <strong>arxitektura qəlibi və ya layihə çertyojudur</strong>. Məsələn, bir <code>Avtomobil</code> klası tərtib edib ondan minlərlə müxtəlif rəngdə və modeldə maşın obyekti yarada bilərik.</p>\n\n<h3>ES6 class Sintaksisi:</h3>\n<pre><code>class Masin {\n  // Konstruktor: obyekt \"new\" ilə yarananda ilk işə düşən xüsusi metoddur\n  constructor(marka, reng) {\n    this.marka = marka; // this cari yaradılan obyektə istinad edir\n    this.reng = reng;\n  }\n\n  // Klasın ümumi metodları (bütün nümunələr üçün ortaqdır)\n  melumat() {\n    return `${this.reng} ${this.marka}`;\n  }\n}\n\n// Klasdan yeni obyekt nüsxəsi (instance) yaradırıq:\nconst masin1 = new Masin(\"BMW\", \"Qara\");\nconsole.log(masin1.melumat()); // \"Qara BMW\"</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Memarlıq Çertyoju və Binalar</strong>\n  <p>Memar yaşayış kompleksi üçün bir dəfə əsaslı mənzil çertyoju (Class) hazırlayır. Tikinti şirkəti həmin tək bir çertyoj əsasında yüzlərlə eyni otaq planına malik, lakin fərqli mərtəbə və mebellərlə təchiz olunmuş real mənzillər (Obyektlər / Instances) inşa edir. <code>new Masin()</code> əmri həmin çertyoj əsasında yeni bir mənzil tikmək kimidir.</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ new Açar Sözü:</strong><br>\n  Klas konstruktorunu adi funksiya kimi birbaşa çağırmaq olmaz (<code>Masin()</code>). Mütləq qarşısında <strong><code>new</code></strong> açar sözü yazılmalıdır: <code>new Masin(...)</code>.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Həqiqi Şəxsi Sahələr (#private fields) və Getter/Setter (get/set)</h4>\n<p>Müasir JavaScript (ES2022) mühərrikləri sinif daxilində xarici müdaxilədən tam qorunan <strong>Həqiqi Şəxsi Sahələr (#private fields)</strong> təqdim edir. Bu sahələrə sinifdən kənarda birbaşa müraciət etmək sintaksis xətası verir. Məlumatı təhlükəsiz idarə etmək üçün isə <code>get</code> və <code>set</code> metodları tətbiq olunur:</p>\n\n<pre><code>class BankHesabi {\n  // Həqiqi Şəxsi Sahələr (# ilə başlayır)\n  #balans = 0;\n  #hesabNomresi;\n\n  constructor(sahib, ilkinDepozit, hesabNo) {\n    this.sahib = sahib; // Açıq (public) sahə\n    this.#balans = ilkinDepozit;\n    this.#hesabNomresi = hesabNo;\n  }\n\n  // Getter: Şəxsi balansı təhlükəsiz oxuyur\n  get balans() {\n    return `${this.#balans} AZN`;\n  }\n\n  // Setter: Balansı yalnız yoxlamadan keçdikdən sonra artırır\n  set depozit(mebleg) {\n    if (mebleg <= 0) {\n      throw new Error(\"Depozit məbləği müsbət olmalıdır!\");\n    }\n    this.#balans += mebleg;\n  }\n}\n\nconst hesab = new BankHesabi(\"Aysel\", 500, \"AZ12984\");\nconsole.log(hesab.balans); // \"500 AZN\" (Getter işə düşdü)\nhesab.depozit = 200;       // (Setter işə düşdü)\nconsole.log(hesab.balans); // \"700 AZN\"\n\n// console.log(hesab.#balans); \n// SyntaxError: Private field '#balans' must be declared in an enclosing class</code></pre>",
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
        "theory": "<h3>🧬 İrsiyyət (Inheritance) Nədir?</h3>\n<p><strong>İrsiyyət (Inheritance)</strong> — mövcud olan bir əsas (valideyn / superclass) sinfin xassə və metodlarını yeni bir törəmə (övlad / subclass) sinfə ötürmək mexanizmidir. Bu, kod təkrarını (DRY) aradan qaldırır və iyerarxik məntiq qurur.</p>\n\n<h3><code>extends</code> və <code>super()</code> Mexanizmi:</h3>\n<ul>\n  <li><strong><code>extends</code>:</strong> Valideyn sinifdən irs almaq üçün istifadə olunur:<br>\n  <code>class Isci extends Insan { ... }</code></li>\n  <li><strong><code>super()</code>:</strong> Valideyn sinfin konstruktorunu işə salır. <strong>Törəmə sinif daxilində <code>this</code> açar sözünə toxunmazdan əvvəl mütləq <code>super()</code> çağırılmalıdır!</strong></li>\n</ul>\n\n<pre><code>class Heyvan {\n  constructor(ad) {\n    this.ad = ad;\n  }\n  sesCixar() {\n    return `${this.ad} səs çıxarır`;\n  }\n}\n\nclass It extends Heyvan {\n  constructor(ad, cins) {\n    super(ad); // Valideynin ad parametrini ötürürük\n    this.cins = cins;\n  }\n}\n\nconst it1 = new It(\"Toplan\", \"Qurdbasar\");\nconsole.log(it1.sesCixar()); // \"Toplan səs çıxarır\"\nconsole.log(it1.cins);       // \"Qurdbasar\"</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Nəqliyyat Vasitələri İyerarxiyası</strong>\n  <p>Təsəvvür edin ki, ümumi <code>Neqliyyat</code> sinfiniz var (mühərriki var, sürəti var, hərəkət edir). <code>Avtomobil</code> və <code>Qayıq</code> sinifləri bu ümumi xüsusiyyətləri təkrar yazmadan <code>extends</code> ilə irs alır. Lakin Avtomobil əlavə olaraq təkər sayına, Qayıq isə lövbər funksiyasına sahib olur.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Polimorfizm və Kompozisiya (Composition over Inheritance)</h4>\n<p>Böyük sistemlərdə dərin irsiyyət zəncirləri (3-4 səviyyədən çox) kodu kövrək və idarəolunmaz edir (məşhur <em>\"Gorilla/Banana problemi\"</em>: siz sadəcə banan istəyirdiniz, amma arxasında bananı tutan qorilla və bütöv cəngəllik gəldi). Mühəndislikdə <strong>Kompozisiya İrsiyyətdən Üstündür (Composition over Inheritance)</strong> prinsipi tətbiq olunur:</p>\n\n<pre><code>// 1. Polimorfizm (Metodun əzilməsi / Method Overriding)\nclass Sekil {\n  sahe() { return 0; }\n}\n\nclass Kvadrat extends Sekil {\n  constructor(teref) { super(); this.teref = teref; }\n  // Valideynin sahe metodunu fərdi qaydada əzirik:\n  sahe() { return this.teref * this.teref; }\n}\n\n// 2. Kompozisiya (Micro-behavior Mixins ilə funksionallıq yığımı)\nconst ucur = state => ({\n  uc: () => `${state.ad} səmada uçur`\n});\n\nconst uzur = state => ({\n  uz: () => `${state.ad} suda üzür`\n});\n\n// Ördək həm uça, həm də üzə bilir:\nfunction OrdekYarat(ad) {\n  const ordek = { ad };\n  return Object.assign(ordek, ucur(ordek), uzur(ordek));\n}\n\nconst ordek = OrdekYarat(\"Yaşılbaş\");\nconsole.log(ordek.uc()); // \"Yaşılbaş səmada uçur\"\nconsole.log(ordek.uz()); // \"Yaşılbaş suda üzür\"</code></pre>",
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
        "theory": "<h3>⚡ Statik Metodlar (static) Nədir?</h3>\n<p><strong>Statik metodlar (static methods)</strong> — klasdan yaranan fərdi obyektlərə (nümunələrə) deyil, <strong>birbaşa sinfin (qəlibin) özünə aid olan</strong> köməkçi funksiyalardır. Onları çağırmaq üçün <code>new</code> ilə obyekt yaratmağa qətiyyən ehtiyac yoxdur:</p>\n\n<pre><code>class Riyaziyyat {\n  static topla(a, b) {\n    return a + b;\n  }\n}\n\n// Birbaşa sinfin adı ilə çağırırıq:\nconsole.log(Riyaziyyat.topla(10, 20)); // 30</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Ümumi Alət Masası</strong>\n  <p>JavaScript-in daxili <code>Math.max(5, 10)</code>, <code>Number.isNaN(val)</code> və ya <code>Object.keys(obj)</code> metodları məhz statik metodlardır. Hər dəfə maksimum ədədi tapmaq üçün <code>new Math()</code> deyib yaddaşda yeni obyekt yaratmırıq; alət birbaşa sinif səviyyəsində qlobal istifadəyə hazırdır.</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Vacib Qayda:</strong><br>\n  Statik metodlar fərdi nümunələrin daxili xassələrinə (<code>this.ad</code> kimi) birbaşa çata bilməz. Çünki onlar nüsxə yaradılmadan çağırılır. Nüsxə üzərindən çağırıldıqda isə (məsələn, <code>obj.topla()</code>) <code>TypeError</code> baş verir.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Dizayn Şablonları: Singleton, Static Factory Method və new.target</h4>\n<p>Statik metodlar və <code>new.target</code> xüsusiyyəti arxitekturada əvəzolunmaz dizayn şablonlarının tətbiqinə imkan verir:</p>\n\n<pre><code>// 1. Singleton Şablonu (Yalnız tək bir verilənlər bazası bağlantısı saxlamaq)\nclass VerilenlerBazasi {\n  static #instansiya = null;\n\n  constructor() {\n    if (VerilenlerBazasi.#instansiya) {\n      return VerilenlerBazasi.#instansiya;\n    }\n    this.baglantiVaxti = Date.now();\n    VerilenlerBazasi.#instansiya = this;\n  }\n\n  static getInstansiya() {\n    if (!VerilenlerBazasi.#instansiya) {\n      VerilenlerBazasi.#instansiya = new VerilenlerBazasi();\n    }\n    return VerilenlerBazasi.#instansiya;\n  }\n}\n\nconst db1 = VerilenlerBazasi.getInstansiya();\nconst db2 = VerilenlerBazasi.getInstansiya();\nconsole.log(db1 === db2); // true (eyni fiziki nüsxə!)\n\n// 2. Abstrakt Sinif Simulyasiyası (new.target ilə)\nclass AbstraktFiqur {\n  constructor() {\n    if (new.target === AbstraktFiqur) {\n      throw new Error(\"Abstrakt sinifdən birbaşa obyekt yaratmaq qadağandır!\");\n    }\n  }\n}\n\n// new AbstraktFiqur(); // Error fırladır!\nclass Daire extends AbstraktFiqur {}\nconst d = new Daire(); // Uğurludur!</code></pre>",
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
        "theory": "<h3>📦 Modul Arxitekturası: Qlobal Xaosdan Təmiz Koda</h3>\n<p>Köhnə JavaScript dövründə bütün skriptlər tək bir qlobal mühitdə (<code>window</code>) icra olunurdu. HTML-də ard-arda qoşulan <code>&lt;script&gt;</code> teqlərində bir fayldakı dəyişən digər fayldakı dəyişənlə toqquşaraq onu əzirdi (Global Scope Pollution). Bu, layihə böyüdükcə idarəolunmaz xaos və xətalar yaradırdı.</p>\n\n<p><strong>ES6 (ECMAScript 2015)</strong> standartı ilə JavaScript-ə rəsmi <strong>ES Modulları (ESM)</strong> gətirildi. Bu gün React, Vue, Next.js, Vite və Node.js daxil olmaqla bütün müasir ekosistem məhz bu təməl üzərində qurulub.</p>\n\n<div class=\"tip-box\">\n  <strong>🧰 Real Həyat Bənzətməsi: Alət Qutusu və Emalatxana</strong>\n  <p>Hər bir JavaScript faylı müstəqil, qapalı bir emalatxanadır. Emalatxananın daxili detalları gizlidir (private). Digər otaqların istifadəsi üçün yalnız <code>export</code> etdiyimiz xüsusi alətlər açıq elan olunur. Digər fayllar isə bu alətləri <code>import</code> açar sözü ilə qəbul edir.</p>\n</div>\n\n<h3>1. Adlandırılmış İxracat və İdxal (Named Exports & Imports):</h3>\n<pre><code>// riyaziyyat.js\nexport const PI = 3.14159;\nexport function topla(a, b) { return a + b; }\n\n// app.js\nimport { topla, PI } from './riyaziyyat.js';\nconsole.log(topla(10, 5)); // 15</code></pre>\n\n<h3>2. Standart İxracat (Default Export & Import):</h3>\n<p>Hər modulda yalnız <strong>bircə ədəd</strong> default dəyər ola bilər və idxal edərkən fiqurlu mötərizə <strong>yazılmır</strong>:</p>\n<pre><code>// Istifadeci.js\nexport default class Istifadeci { constructor(ad) { this.ad = ad; } }\n\n// main.js\nimport Istifadeci from './Istifadeci.js'; // { } yoxdur!</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Rol Əsaslı İcazə Sistemi (RBAC Engine) və Symbol.iterator</h4>\n<p>Modul dizaynı təhlükəsizlik memarlığında (RBAC - Role-Based Access Control) və fərdi iterasiya edilə bilən kolleksiyalarda mühüm rol oynayır:</p>\n\n<pre><code>// 1. Rol Əsaslı İcazə Sistemi (RBAC Engine)\nexport const ROLLAR = {\n  ADMIN: \"admin\",\n  REDAKTOR: \"editor\",\n  OXUCU: \"viewer\"\n};\n\nexport class IcazeMeneceri {\n  #userRol;\n  constructor(userRol) { this.#userRol = userRol; }\n\n  icazeVarmi(emeliyyat) {\n    if (this.#userRol === ROLLAR.ADMIN) return true;\n    if (this.#userRol === ROLLAR.REDAKTOR && emeliyyat !== \"istifadeci_sil\") return true;\n    return emeliyyat === \"oxu\";\n  }\n}\n\n// 2. Fərdi İterasiya Olunan Sinif (Symbol.iterator ilə for...of dəstəyi)\nexport class KomandaKolleksiyasi {\n  constructor() { this.uzvler = []; }\n  elaveEt(uzv) { this.uzvler.push(uzv); }\n\n  [Symbol.iterator]() {\n    let index = 0;\n    const uzvler = this.uzvler;\n    return {\n      next() {\n        return index < uzvler.length\n          ? { value: uzvler[index++], done: false }\n          : { done: true };\n      }\n    };\n  }\n}\n\nconst komanda = new KomandaKolleksiyasi();\nkomanda.elaveEt(\"Aysel\");\nkomanda.elaveEt(\"Murad\");\n\nfor (const uzv of komanda) {\n  console.log(\"Üzv:\", uzv); // \"Aysel\", \"Murad\"\n}</code></pre>",
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
  },
  {
    "id": "section-13",
    "title": "Bölmə 13: Asinxron JavaScript (Callbacks, Promises, async/await)",
    "icon": "⏳",
    "topics": [
      {
        "id": "topic-13-1",
        "title": "Sinxron vs Asinxron və Callbacks",
        "theory": "<h3>⏳ Sinxron vs Asinxron Proqramlaşdırma</h3>\n<p>JavaScript tək axınlı (single-threaded) proqramlaşdırma dilidir. Bu o deməkdir ki, brauzer eyni anda yalnız tək bir əmri icra edə bilər. Standart olaraq kodlar yuxarıdan aşağıya sətirbəsətir <strong>sinxron</strong> işləyir. Əgər hər hansı bir əməliyyat vaxt apararsa (məsələn: serverdən məlumatın gəlməsi 5 saniyə çəkərsə), bütün səhifə donardı və istifadəçi heç bir düyməni basa bilməzdi (UI Blocking).</p>\n\n<p>Bunun qarşısını almaq üçün <strong>Asinxron proqramlaşdırma</strong> istifadə olunur: vaxt aparan iş arxa plana ötürülür və bitdikdə xəbər verməsi üçün ona bir <strong>Callback funksiyası</strong> təhvil verilir:</p>\n\n<pre><code>console.log(\"1. Başladı\");\n\n// 100ms sonra icra olunacaq asinxron callback:\nsetTimeout(() => {\n  console.log(\"2. Gecikmə ilə işlədi\");\n}, 100);\n\nconsole.log(\"3. Bitdi\");</code></pre>\n\n<p>Konsol çıxış ardıcıllığı: <code>1. Başladı</code> -> <code>3. Bitdi</code> -> <code>2. Gecikmə ilə işlədi</code> olacaqdır.</p>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Fast-Food Restoranının Sifariş Nömrəsi</strong>\n  <p>Restoranda kassirə yaxınlaşıb kofe sifariş edirsiniz. Kassir dərhal sizə kofeni vermir; sizə sifariş nömrəsi (callback vədi) verir və növbəti müştəriyə xidmət etməyə davam edir (bloklanmayan asinxronluq). Kofe hazır olanda nömrəniz çağırılır və siz içkinizi təhvil alırsınız.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Event Loop Dərinlikləri: Call Stack, Web APIs, Microtask vs Macrotask Queue</h4>\n<p>JavaScript mühərriki asinxron tapşırıqları idarə etmək üçün <strong>Hadisə Dövriyyəsi (Event Loop)</strong> mexanizmindən istifadə edir. Bütün növbələr eyni dərəcəli deyil; <strong>Microtask</strong> növbəsi hər zaman <strong>Macrotask</strong> növbəsindən əvvəl tam boşaldılır:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Növbə Növü</th>\n        <th>Mənbə</th>\n        <th>Prioritet Səviyyəsi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Call Stack</strong></td>\n        <td>Bütün cari sinxron kodlar</td>\n        <td>🥇 Ən yüksək (dərhal icra)</td>\n      </tr>\n      <tr>\n        <td><strong>Microtask Queue</strong></td>\n        <td><code>Promise.then()</code>, <code>catch()</code>, <code>queueMicrotask()</code></td>\n        <td>🥈 Çox yüksək (Call Stack boşalan kimi)</td>\n      </tr>\n      <tr>\n        <td><strong>Macrotask Queue</strong></td>\n        <td><code>setTimeout</code>, <code>setInterval</code>, DOM hadisələri</td>\n        <td>🥉 Normal (Microtask-lar tam bitdikdən sonra)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<pre><code>// İcra ardıcıllığı tapmacası:\nconsole.log(\"1. Sinxron\");\n\nsetTimeout(() => {\n  console.log(\"2. Macrotask (setTimeout)\");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log(\"3. Microtask (Promise.then)\");\n});\n\nconsole.log(\"4. Sinxron\");\n\n// Dəqiq konsol çıxışı:\n// 1. Sinxron\n// 4. Sinxron\n// 3. Microtask (Promise.then)\n// 2. Macrotask (setTimeout)</code></pre>",
        "codeExamples": [
          {
            "title": "setTimeout ilə Asinxron Gecikmə",
            "code": "console.log(\"Sifariş verildi\");\nsetTimeout(() => {\n  console.log(\"Sifariş hazırdır!\");\n}, 50);\nconsole.log(\"Müştəri gözləyir...\");",
            "output": "Sifariş verildi\nMüştəri gözləyir...\nSifariş hazırdır!"
          }
        ],
        "exercises": [
          {
            "id": "ex-13-1-1",
            "title": "Hadisə Dövriyyəsi və Gecikməli İcra",
            "instruction": "Konsol çıxışına əvvəlcə \"A\", sonra qısa asinxron gecikmə ilə \"B\", ən sonda isə sinxron olaraq \"C\" göndərərək mühərrikin ardıcıllığı A, C, B şəklində çıxarmasını təmin edin.",
            "starterCode": "console.log(\"A\");\nsetTimeout(() => {\n  // Kodunuzu buraya yazın\n}, 10);\nconsole.log(\"C\");\n",
            "expectedOutput": "A\nC\nB",
            "hint": "setTimeout təxirə salınmış callback funksiyasını Event Loop vasitəsilə növbəyə qoyur və sinxron kodlar bitdikdən sonra icra edir.",
            "solutionCode": "console.log(\"A\");\nsetTimeout(() => {\n  console.log(\"B\");\n}, 10);\nconsole.log(\"C\");"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-13-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Taymer Parametrinin Ötürülmə Xətası",
            "instruction": "Konsola mesaj 50ms gecikmə ilə çıxmalıdır, lakin təyin olunan əmr gecikmə gözləmədən dərhal icra olunur. Gecikmə taymerinin parametr ötürülmə sintaksisini düzəldin.",
            "description": "Konsola mesaj 50ms gecikmə ilə çıxmalıdır, lakin təyin olunan əmr gecikmə gözləmədən dərhal icra olunur. Gecikmə taymerinin parametr ötürülmə sintaksisini düzəldin.",
            "buggyCode": "setTimeout(console.log(\"İşlədi\"), 10);",
            "correctCode": "setTimeout(() => console.log(\"İşlədi\"), 10);",
            "correctOutput": "İşlədi",
            "expectedOutput": "İşlədi",
            "explanation": "setTimeout-a funksiyanın icra nəticəsi deyil, gecikmədən sonra çağırılacaq funksiyanın özü (callback) ötürülməlidir."
          }
        ],
        "bugFix": {
          "id": "bug-13-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Taymer Parametrinin Ötürülmə Xətası",
          "instruction": "Konsola mesaj 50ms gecikmə ilə çıxmalıdır, lakin təyin olunan əmr gecikmə gözləmədən dərhal icra olunur. Gecikmə taymerinin parametr ötürülmə sintaksisini düzəldin.",
          "description": "Konsola mesaj 50ms gecikmə ilə çıxmalıdır, lakin təyin olunan əmr gecikmə gözləmədən dərhal icra olunur. Gecikmə taymerinin parametr ötürülmə sintaksisini düzəldin.",
          "buggyCode": "setTimeout(console.log(\"İşlədi\"), 10);",
          "correctCode": "setTimeout(() => console.log(\"İşlədi\"), 10);",
          "correctOutput": "İşlədi",
          "expectedOutput": "İşlədi",
          "explanation": "setTimeout-a funksiyanın icra nəticəsi deyil, gecikmədən sonra çağırılacaq funksiyanın özü (callback) ötürülməlidir."
        }
      },
      {
        "id": "topic-13-2",
        "title": "Promise (Vəd) Obyekti: resolve, reject, .then()",
        "theory": "<h3>🤝 Promise (Vəd) Nədir?</h3>\n<p>Köhnə üsullarda iç-içə yazılan callback funksiyaları idarəolunmaz xaos və oxunmazlıq (<em>\"Callback Hell\" / Piramida effekti</em>) yaradırdı. ES6 (2015) standartında bu problemi kökündən həll etmək üçün rəsmi <strong>Promise (Vəd)</strong> obyekti təqdim olundu.</p>\n\n<p><strong>Promise</strong> — gələcəkdə uğurla tamamlanacaq və ya uğursuzluqla nəticələnəcək bir asinxron əməliyyatın cari vəziyyətini təmsil edir. Promise həyat dövrü ərzində <strong>3 vəziyyətdə</strong> ola bilər:</p>\n<ul>\n  <li><strong>Pending (Gözləmədə):</strong> İlkin vəziyyətdir; əməliyyat hələ icra olunur.</li>\n  <li><strong>Fulfilled (Həll olundu / Uğurlu):</strong> <code>resolve(qiymət)</code> çağırılıb və nəticə hazırdır.</li>\n  <li><strong>Rejected (İmtina edildi / Xəta):</strong> <code>reject(xəta)</code> çağırılıb və əməliyyat uğursuz oldu.</li>\n</ul>\n\n<pre><code>const soz = new Promise((resolve, reject) => {\n  const ugurludur = true;\n  if (ugurludur) {\n    resolve(\"Məlumat uğurla gəldi!\");\n  } else {\n    reject(\"Şəbəkə xətası baş verdi!\");\n  }\n});\n\nsoz\n  .then(cavab => console.log(\"Nəticə:\", cavab))\n  .catch(xeta => console.error(\"Xəta:\", xeta));</code></pre>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Onlayn Mağazadan Bağlama Sifarişi</strong>\n  <p>İnternetdən telefon sifariş edirsiniz. Şirkət sizə izləmə kodu verir (Promise obyekti). Bağlama yolda olanda vəziyyət \"Pending\"dir. Kuryer qapını döyüb bağlamanı təhvil verəndə Promise \"Fulfilled\" (<code>.then()</code>) olur. Kuryer ünvanı tapmadıqda və ya məhsul anbarda tükəndikdə isə sifariş ləğv edilir (\"Rejected\" / <code>.catch()</code>).</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Kombinatorlar (Promise.all, Promise.race, Promise.allSettled, Promise.any)</h4>\n<p>Real arxitekturalarda bir neçə asinxron sorğunu paralel şəkildə idarə etmək üçün 4 əsas Promise kombinatorundan istifadə olunur:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Metod</th>\n        <th>İşləmə Qaydası</th>\n        <th>İstifadə Ssenarisi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>Promise.all()</code></td>\n        <td>Bütün vədlər uğurlu olmalıdır. Bircə dənə xəta olarsa, dərhal rədd edilir (fail-fast).</td>\n        <td>Səhifənin açılması üçün istifadəçi profili, menyu və xəbərlərin hamısının eyni vaxtda mütləq tələb olunması.</td>\n      </tr>\n      <tr>\n        <td><code>Promise.allSettled()</code></td>\n        <td>Heç vaxt rədd edilmir; bütün vədlər bitənə qədər gözləyir və hər birinin nəticəsini (status: fulfilled/rejected) qaytarır.</td>\n        <td>Toplu email göndərişi və ya audit hesabatı (bəziləri xəta versə belə, qalanların yekun statusunu görmək).</td>\n      </tr>\n      <tr>\n        <td><code>Promise.race()</code></td>\n        <td>Vədlərdən hansı biri ən tez nəticələnsə (uğur və ya xəta fərq etməz), onun nəticəsini qaytarır.</td>\n        <td>Şəbəkə sorğusuna taymer (timeout) qoymaq.</td>\n      </tr>\n      <tr>\n        <td><code>Promise.any()</code></td>\n        <td>Vədlərdən ən tez uğurla (fulfilled) tamamlanan birincini qaytarır; yalnız hamısı xəta verdikdə AggregateError qaytarır.</td>\n        <td>Eyni fayl üçün 3 fərqli güzgü (mirror/CDN) serverindən ən sürətlisini seçmək.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<pre><code>// Promise.allSettled nümunəsi:\nconst p1 = Promise.resolve(\"Profil yükləndi\");\nconst p2 = Promise.reject(\"Şəkil tapılmadı\");\n\nPromise.allSettled([p1, p2]).then(netice => {\n  console.log(netice);\n  // [\n  //   { status: \"fulfilled\", value: \"Profil yükləndi\" },\n  //   { status: \"rejected\", reason: \"Şəkil tapılmadı\" }\n  // ]\n});</code></pre>",
        "codeExamples": [
          {
            "title": "Promise Nümunəsi",
            "code": "const soz = new Promise((resolve) => {\n  resolve(\"Uğurla tamamlandı!\");\n});\n\nsoz.then(netice => {\n  console.log(netice);\n});",
            "output": "Uğurla tamamlandı!"
          }
        ],
        "exercises": [
          {
            "id": "ex-13-2-1",
            "title": "Vədin (Promise) Nəticəsinin Əldə Olunması",
            "instruction": "Uğurla tamamlanan asinxron vədin nəticəsini qəbul edərək konsol pəncərəsində \"Hazırdır\" mesajının əks olunmasını təmin edin.",
            "starterCode": "const v = Promise.resolve(\"Hazırdır\");\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Hazırdır",
            "hint": "Promise obyektinin nəticəsini dinləmək və emal etmək üçün .then(netice => { ... }) zəncirindən istifadə olunur.",
            "solutionCode": "const v = Promise.resolve(\"Hazırdır\");\nv.then(netice => {\n  console.log(netice);\n});"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-13-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": ".then() İstifadəsinin Unudulması",
            "instruction": "Aşağıdakı proqramçı Promise obyektinin nəticəsini .then() ilə gözləmədən birbaşa çap etməyə çalışıb və '[object Promise]' alıb. Kodu .then() ilə düzəldin.",
            "description": "Aşağıdakı proqramçı Promise obyektinin nəticəsini .then() ilə gözləmədən birbaşa çap etməyə çalışıb və '[object Promise]' alıb. Kodu .then() ilə düzəldin.",
            "buggyCode": "const v = Promise.resolve(\"Salam\");\nconsole.log(v);",
            "correctCode": "const v = Promise.resolve(\"Salam\");\nv.then(netice => console.log(netice));",
            "correctOutput": "Salam",
            "expectedOutput": "Salam",
            "explanation": "Promise-in daxilindəki həll olunmuş dəyəri əldə etmək üçün mütləq .then() metodundan istifadə edilməlidir."
          }
        ],
        "bugFix": {
          "id": "bug-13-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": ".then() İstifadəsinin Unudulması",
          "instruction": "Aşağıdakı proqramçı Promise obyektinin nəticəsini .then() ilə gözləmədən birbaşa çap etməyə çalışıb və '[object Promise]' alıb. Kodu .then() ilə düzəldin.",
          "description": "Aşağıdakı proqramçı Promise obyektinin nəticəsini .then() ilə gözləmədən birbaşa çap etməyə çalışıb və '[object Promise]' alıb. Kodu .then() ilə düzəldin.",
          "buggyCode": "const v = Promise.resolve(\"Salam\");\nconsole.log(v);",
          "correctCode": "const v = Promise.resolve(\"Salam\");\nv.then(netice => console.log(netice));",
          "correctOutput": "Salam",
          "expectedOutput": "Salam",
          "explanation": "Promise-in daxilindəki həll olunmuş dəyəri əldə etmək üçün mütləq .then() metodundan istifadə edilməlidir."
        }
      },
      {
        "id": "topic-13-3",
        "title": "Müasir Asinxron Sintaksis: async və await",
        "theory": "<h3>🚀 Müasir Asinxron Kod: async və await</h3>\n<p>ES2017 (ES8) versiyasında təqdim olunan <strong>async/await</strong> — asinxron kodları sanki adi sinxron kod kimi sətirbəsətir, aydın və oxunaqlı yazmağa imkan verən inqilabi sintaktik örtükdür (syntactic sugar):</p>\n\n<pre><code>async function istifadeciMelumatiniAl() {\n  try {\n    const cavab = await servereSorguGonder();\n    console.log(\"Məlumat alındı:\", cavab);\n  } catch (err) {\n    console.error(\"Xəta baş verdi:\", err.message);\n  }\n}</code></pre>\n\n<h3>Qızıl Qaydalar:</h3>\n<ul>\n  <li><strong><code>async</code>:</strong> Funksiya elanının qarşısına yazılır və həmin funksiyanın avtomatik olaraq <strong>Promise qaytarmasını</strong> təmin edir.</li>\n  <li><strong><code>await</code>:</strong> Yalnız <code>async</code> funksiyanın <strong>daxilində</strong> işlədilə bilər! O, Promise tamamlanana qədər kodun icrasını həmin sətirdə dayandırır və həll olunmuş qiyməti birbaşa dəyişənə mənimsədir.</li>\n  <li>Xətaların idarə edilməsi üçün mürəkkəb <code>.catch()</code> zəncirləri əvəzinə hamıya tanış olan standart <strong><code>try...catch</code></strong> bloku tətbiq olunur.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>💡 Real Həyat Bənzətməsi: Avtomatlaşdırılmış Sürətli Lift</strong>\n  <p>10-cu mərtəbəyə qalxmaq üçün lift düyməsini basırsınız (<code>await liftGozle()</code>). Siz pilləkənlərlə yorucu şəkildə qaçmırsınız; lift gələnə qədər səbirlə gözləyirsiniz, qapı açılan kimi daxil olub birbaşa mənzilinizə çatırsınız.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: İstehsalat Asinxron Alətləri: Timeout Wrapper, Promisify və Ardıcıl vs Paralel İcra</h4>\n<p>İstehsalat mühitində <code>async/await</code> tətbiq edilərkən ən vacib iki mühəndislik nüansı:</p>\n\n<pre><code>// 1. Asinxron Əməliyyata Vaxt Limiti (Timeout Wrapper) qoymaq\nfunction vaxtLimitliSorgu(promise, limitMs = 3000) {\n  const timeout = new Promise((_, reject) => {\n    setTimeout(() => reject(new Error(\"Sorğu vaxtı bitdi (Timeout)! \" + limitMs + \"ms\")), limitMs);\n  });\n  return Promise.race([promise, timeout]);\n}\n\n// 2. Ardıcıl (Sequential) və Paralel (Concurrent) İcra Fərqi:\nconst idler = [101, 102, 103];\n\n// A) ARDICIL (Biri bitmədən digəri başlamır - Ümumi vaxt: 3 saniyə)\nasync function ardicilYukle() {\n  for (const id of idler) {\n    const user = await tekUserYukle(id); // Hər biri 1 saniyə gözləyir\n    console.log(user);\n  }\n}\n\n// B) PARALEL (Hamısı eyni anda başlayır - Ümumi vaxt: cəmi 1 saniyə!)\nasync function paralelYukle() {\n  const vecler = idler.map(id => tekUserYukle(id));\n  const butunUserler = await Promise.all(vecler);\n  console.log(butunUserler);\n}</code></pre>",
        "codeExamples": [
          {
            "title": "async/await Nümunəsi",
            "code": "async function test() {\n  const soz = Promise.resolve(\"Məlumat gəldi\");\n  const netice = await soz; // Nəticəni gözləyirik\n  console.log(netice);\n}\n\ntest();",
            "output": "Məlumat gəldi"
          }
        ],
        "exercises": [
          {
            "id": "ex-13-3-1",
            "title": "Asinxron Gözləmə (async/await) ilə İnteqrasiya",
            "instruction": "Asinxron əməliyyatın tamamlanmasını sinxron tərzdə gözləyərək əldə olunan dəyəri konsola çıxaran <code>basla</code> funksiyası tərtib edin və icra edin.",
            "starterCode": "async function basla() {\n  // Kodunuzu buraya yazın\n}\nbasla();\n",
            "expectedOutput": "Uğurlu icra",
            "hint": "async funksiya daxilində Promise nəticəsini gözləmək üçün await açar sözündən istifadə edin və nəticəni dəyişəndə saxlayaraq çıxışa verin.",
            "solutionCode": "async function basla() {\n  const cavab = await Promise.resolve(\"Uğurlu icra\");\n  console.log(cavab);\n}\nbasla();"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-13-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Qeyri-async Funksiyada await Xətası",
            "instruction": "Aşağıdakı funksiyanın qarşısında <code>async</code> yazılmadığı üçün daxildəki <code>await</code> sintaksis xətası verir. Funksiyanı <code>async</code> edin.",
            "description": "Aşağıdakı funksiyanın qarşısında <code>async</code> yazılmadığı üçün daxildəki <code>await</code> sintaksis xətası verir. Funksiyanı <code>async</code> edin.",
            "buggyCode": "function yukle() {\n  const data = await Promise.resolve(\"Yükləndi\");\n  console.log(data);\n}\nyukle();",
            "correctCode": "async function yukle() {\n  const data = await Promise.resolve(\"Yükləndi\");\n  console.log(data);\n}\nyukle();",
            "correctOutput": "Yükləndi",
            "expectedOutput": "Yükləndi",
            "explanation": "await açar sözü yalnız async elan edilmiş funksiyaların daxilində istifadə edilə bilər."
          }
        ],
        "bugFix": {
          "id": "bug-13-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Qeyri-async Funksiyada await Xətası",
          "instruction": "Aşağıdakı funksiyanın qarşısında <code>async</code> yazılmadığı üçün daxildəki <code>await</code> sintaksis xətası verir. Funksiyanı <code>async</code> edin.",
          "description": "Aşağıdakı funksiyanın qarşısında <code>async</code> yazılmadığı üçün daxildəki <code>await</code> sintaksis xətası verir. Funksiyanı <code>async</code> edin.",
          "buggyCode": "function yukle() {\n  const data = await Promise.resolve(\"Yükləndi\");\n  console.log(data);\n}\nyukle();",
          "correctCode": "async function yukle() {\n  const data = await Promise.resolve(\"Yükləndi\");\n  console.log(data);\n}\nyukle();",
          "correctOutput": "Yükləndi",
          "expectedOutput": "Yükləndi",
          "explanation": "await açar sözü yalnız async elan edilmiş funksiyaların daxilində istifadə edilə bilər."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_10_13 };
}
