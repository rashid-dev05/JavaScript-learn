// Section 13 Builder: Asinxron JavaScript (Callbacks, Promises, async/await)
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section13 = {
  "id": "section-13",
  "title": "Bölmə 13: Asinxron JavaScript (Callbacks, Promises, async/await)",
  "icon": "⏳",
  "topics": [
    {
      "id": "topic-13-1",
      "title": "Sinxron vs Asinxron və Callbacks",
      "theory": `<h3>⏳ Sinxron vs Asinxron Proqramlaşdırma</h3>
<p>JavaScript tək axınlı (single-threaded) proqramlaşdırma dilidir. Bu o deməkdir ki, brauzer eyni anda yalnız tək bir əmri icra edə bilər. Standart olaraq kodlar yuxarıdan aşağıya sətirbəsətir <strong>sinxron</strong> işləyir. Əgər hər hansı bir əməliyyat vaxt apararsa (məsələn: serverdən məlumatın gəlməsi 5 saniyə çəkərsə), bütün səhifə donardı və istifadəçi heç bir düyməni basa bilməzdi (UI Blocking).</p>

<p>Bunun qarşısını almaq üçün <strong>Asinxron proqramlaşdırma</strong> istifadə olunur: vaxt aparan iş arxa plana ötürülür və bitdikdə xəbər verməsi üçün ona bir <strong>Callback funksiyası</strong> təhvil verilir:</p>

<pre><code>console.log("1. Başladı");

// 100ms sonra icra olunacaq asinxron callback:
setTimeout(() => {
  console.log("2. Gecikmə ilə işlədi");
}, 100);

console.log("3. Bitdi");</code></pre>

<p>Konsol çıxış ardıcıllığı: <code>1. Başladı</code> -> <code>3. Bitdi</code> -> <code>2. Gecikmə ilə işlədi</code> olacaqdır.</p>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Fast-Food Restoranının Sifariş Nömrəsi</strong>
  <p>Restoranda kassirə yaxınlaşıb kofe sifariş edirsiniz. Kassir dərhal sizə kofeni vermir; sizə sifariş nömrəsi (callback vədi) verir və növbəti müştəriyə xidmət etməyə davam edir (bloklanmayan asinxronluq). Kofe hazır olanda nömrəniz çağırılır və siz içkinizi təhvil alırsınız.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Event Loop Dərinlikləri: Call Stack, Web APIs, Microtask vs Macrotask Queue</h4>
<p>JavaScript mühərriki asinxron tapşırıqları idarə etmək üçün <strong>Hadisə Dövriyyəsi (Event Loop)</strong> mexanizmindən istifadə edir. Bütün növbələr eyni dərəcəli deyil; <strong>Microtask</strong> növbəsi hər zaman <strong>Macrotask</strong> növbəsindən əvvəl tam boşaldılır:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Növbə Növü</th>
        <th>Mənbə</th>
        <th>Prioritet Səviyyəsi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Call Stack</strong></td>
        <td>Bütün cari sinxron kodlar</td>
        <td>🥇 Ən yüksək (dərhal icra)</td>
      </tr>
      <tr>
        <td><strong>Microtask Queue</strong></td>
        <td><code>Promise.then()</code>, <code>catch()</code>, <code>queueMicrotask()</code></td>
        <td>🥈 Çox yüksək (Call Stack boşalan kimi)</td>
      </tr>
      <tr>
        <td><strong>Macrotask Queue</strong></td>
        <td><code>setTimeout</code>, <code>setInterval</code>, DOM hadisələri</td>
        <td>🥉 Normal (Microtask-lar tam bitdikdən sonra)</td>
      </tr>
    </tbody>
  </table>
</div>

<pre><code>// İcra ardıcıllığı tapmacası:
console.log("1. Sinxron");

setTimeout(() => {
  console.log("2. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise.then)");
});

console.log("4. Sinxron");

// Dəqiq konsol çıxışı:
// 1. Sinxron
// 4. Sinxron
// 3. Microtask (Promise.then)
// 2. Macrotask (setTimeout)</code></pre>`,
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
      "theory": `<h3>🤝 Promise (Vəd) Nədir?</h3>
<p>Köhnə üsullarda iç-içə yazılan callback funksiyaları idarəolunmaz xaos və oxunmazlıq (<em>\"Callback Hell\" / Piramida effekti</em>) yaradırdı. ES6 (2015) standartında bu problemi kökündən həll etmək üçün rəsmi <strong>Promise (Vəd)</strong> obyekti təqdim olundu.</p>

<p><strong>Promise</strong> — gələcəkdə uğurla tamamlanacaq və ya uğursuzluqla nəticələnəcək bir asinxron əməliyyatın cari vəziyyətini təmsil edir. Promise həyat dövrü ərzində <strong>3 vəziyyətdə</strong> ola bilər:</p>
<ul>
  <li><strong>Pending (Gözləmədə):</strong> İlkin vəziyyətdir; əməliyyat hələ icra olunur.</li>
  <li><strong>Fulfilled (Həll olundu / Uğurlu):</strong> <code>resolve(qiymət)</code> çağırılıb və nəticə hazırdır.</li>
  <li><strong>Rejected (İmtina edildi / Xəta):</strong> <code>reject(xəta)</code> çağırılıb və əməliyyat uğursuz oldu.</li>
</ul>

<pre><code>const soz = new Promise((resolve, reject) => {
  const ugurludur = true;
  if (ugurludur) {
    resolve("Məlumat uğurla gəldi!");
  } else {
    reject("Şəbəkə xətası baş verdi!");
  }
});

soz
  .then(cavab => console.log("Nəticə:", cavab))
  .catch(xeta => console.error("Xəta:", xeta));</code></pre>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Onlayn Mağazadan Bağlama Sifarişi</strong>
  <p>İnternetdən telefon sifariş edirsiniz. Şirkət sizə izləmə kodu verir (Promise obyekti). Bağlama yolda olanda vəziyyət \"Pending\"dir. Kuryer qapını döyüb bağlamanı təhvil verəndə Promise \"Fulfilled\" (<code>.then()</code>) olur. Kuryer ünvanı tapmadıqda və ya məhsul anbarda tükəndikdə isə sifariş ləğv edilir (\"Rejected\" / <code>.catch()</code>).</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Kombinatorlar (Promise.all, Promise.race, Promise.allSettled, Promise.any)</h4>
<p>Real arxitekturalarda bir neçə asinxron sorğunu paralel şəkildə idarə etmək üçün 4 əsas Promise kombinatorundan istifadə olunur:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Metod</th>
        <th>İşləmə Qaydası</th>
        <th>İstifadə Ssenarisi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Promise.all()</code></td>
        <td>Bütün vədlər uğurlu olmalıdır. Bircə dənə xəta olarsa, dərhal rədd edilir (fail-fast).</td>
        <td>Səhifənin açılması üçün istifadəçi profili, menyu və xəbərlərin hamısının eyni vaxtda mütləq tələb olunması.</td>
      </tr>
      <tr>
        <td><code>Promise.allSettled()</code></td>
        <td>Heç vaxt rədd edilmir; bütün vədlər bitənə qədər gözləyir və hər birinin nəticəsini (status: fulfilled/rejected) qaytarır.</td>
        <td>Toplu email göndərişi və ya audit hesabatı (bəziləri xəta versə belə, qalanların yekun statusunu görmək).</td>
      </tr>
      <tr>
        <td><code>Promise.race()</code></td>
        <td>Vədlərdən hansı biri ən tez nəticələnsə (uğur və ya xəta fərq etməz), onun nəticəsini qaytarır.</td>
        <td>Şəbəkə sorğusuna taymer (timeout) qoymaq.</td>
      </tr>
      <tr>
        <td><code>Promise.any()</code></td>
        <td>Vədlərdən ən tez uğurla (fulfilled) tamamlanan birincini qaytarır; yalnız hamısı xəta verdikdə AggregateError qaytarır.</td>
        <td>Eyni fayl üçün 3 fərqli güzgü (mirror/CDN) serverindən ən sürətlisini seçmək.</td>
      </tr>
    </tbody>
  </table>
</div>

<pre><code>// Promise.allSettled nümunəsi:
const p1 = Promise.resolve("Profil yükləndi");
const p2 = Promise.reject("Şəkil tapılmadı");

Promise.allSettled([p1, p2]).then(netice => {
  console.log(netice);
  // [
  //   { status: "fulfilled", value: "Profil yükləndi" },
  //   { status: "rejected", reason: "Şəkil tapılmadı" }
  // ]
});</code></pre>`,
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
      "theory": `<h3>🚀 Müasir Asinxron Kod: async və await</h3>
<p>ES2017 (ES8) versiyasında təqdim olunan <strong>async/await</strong> — asinxron kodları sanki adi sinxron kod kimi sətirbəsətir, aydın və oxunaqlı yazmağa imkan verən inqilabi sintaktik örtükdür (syntactic sugar):</p>

<pre><code>async function istifadeciMelumatiniAl() {
  try {
    const cavab = await servereSorguGonder();
    console.log("Məlumat alındı:", cavab);
  } catch (err) {
    console.error("Xəta baş verdi:", err.message);
  }
}</code></pre>

<h3>Qızıl Qaydalar:</h3>
<ul>
  <li><strong><code>async</code>:</strong> Funksiya elanının qarşısına yazılır və həmin funksiyanın avtomatik olaraq <strong>Promise qaytarmasını</strong> təmin edir.</li>
  <li><strong><code>await</code>:</strong> Yalnız <code>async</code> funksiyanın <strong>daxilində</strong> işlədilə bilər! O, Promise tamamlanana qədər kodun icrasını həmin sətirdə dayandırır və həll olunmuş qiyməti birbaşa dəyişənə mənimsədir.</li>
  <li>Xətaların idarə edilməsi üçün mürəkkəb <code>.catch()</code> zəncirləri əvəzinə hamıya tanış olan standart <strong><code>try...catch</code></strong> bloku tətbiq olunur.</li>
</ul>

<div class="tip-box">
  <strong>💡 Real Həyat Bənzətməsi: Avtomatlaşdırılmış Sürətli Lift</strong>
  <p>10-cu mərtəbəyə qalxmaq üçün lift düyməsini basırsınız (<code>await liftGozle()</code>). Siz pilləkənlərlə yorucu şəkildə qaçmırsınız; lift gələnə qədər səbirlə gözləyirsiniz, qapı açılan kimi daxil olub birbaşa mənzilinizə çatırsınız.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: İstehsalat Asinxron Alətləri: Timeout Wrapper, Promisify və Ardıcıl vs Paralel İcra</h4>
<p>İstehsalat mühitində <code>async/await</code> tətbiq edilərkən ən vacib iki mühəndislik nüansı:</p>

<pre><code>// 1. Asinxron Əməliyyata Vaxt Limiti (Timeout Wrapper) qoymaq
function vaxtLimitliSorgu(promise, limitMs = 3000) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Sorğu vaxtı bitdi (Timeout)! " + limitMs + "ms")), limitMs);
  });
  return Promise.race([promise, timeout]);
}

// 2. Ardıcıl (Sequential) və Paralel (Concurrent) İcra Fərqi:
const idler = [101, 102, 103];

// A) ARDICIL (Biri bitmədən digəri başlamır - Ümumi vaxt: 3 saniyə)
async function ardicilYukle() {
  for (const id of idler) {
    const user = await tekUserYukle(id); // Hər biri 1 saniyə gözləyir
    console.log(user);
  }
}

// B) PARALEL (Hamısı eyni anda başlayır - Ümumi vaxt: cəmi 1 saniyə!)
async function paralelYukle() {
  const vecler = idler.map(id => tekUserYukle(id));
  const butunUserler = await Promise.all(vecler);
  console.log(butunUserler);
}</code></pre>`,
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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section13 };
}
console.log('Section 13 built successfully');
