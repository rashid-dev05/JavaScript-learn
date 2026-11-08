// Section 16 Builder: Brauzer Yaddaşı və Web API-lər
// Two-Tier Pedagogical Architecture: Zone 1 (Foundational) + Zone 2 (🔬 Dərinləşmə və Mühəndislik)

const section16 = {
  "id": "section-16",
  "title": "Bölmə 16: Brauzer Yaddaşı və Web API-lər",
  "icon": "💾",
  "topics": [
    {
      "id": "topic-16-1",
      "title": "Müştəri Tərəfli Yaddaş (localStorage və sessionStorage)",
      "theory": `<h3>💾 Müştəri Tərəfli Saxlama (Client-Side Storage) Nədir?</h3>
<p>Veb səhifəni hər dəfə yenilədikdə (F5) və ya brauzeri bağlayıb açdıqda, JavaScript-dəki bütün dəyişənlər yaddaşdan silinir. İstifadəçinin qaranlıq rejim seçimini (Dark Mode), səbətindəki məhsulları və ya autentifikasiya statusunu səhifə yeniləndikdən sonra da qoruyub saxlamaq üçün brauzerin daxili yaddaş API-lərindən istifadə olunur.</p>

<h3>1. localStorage və sessionStorage Fərqi:</h3>
<ul>
  <li><strong><code>localStorage</code> (Daimi Yaddaş):</strong> Məlumat brauzer bağlandıqdan və kompüter söndürüldükdən sonra belə yaddaşda qalır. Yalnız istifadəçi brauzer keşini təmizlədikdə və ya proqramçı kodla sildikdə silinir. Həcm limiti: domen üzrə ~5-10 MB.</li>
  <li><strong><code>sessionStorage</code> (Sessiya Yaddaşı):</strong> Məlumat yalnız cari brauzer tabı (pəncərəsi) açıq olduğu müddətcə saxlanılır. Tab bağlanan kimi bütün məlumat dərhal silinir. Hər bir tabın öz müstəqil sessiya yaddaşı olur.</li>
</ul>

<h3>2. Əsas Əməliyyatlar (API Metodları):</h3>
<ul>
  <li><strong>Məlumat yazmaq:</strong> <code>localStorage.setItem("açar", "dəyər")</code></li>
  <li><strong>Məlumat oxumaq:</strong> <code>localStorage.getItem("açar")</code> (açar tapılmazsa <code>null</code> qaytarır)</li>
  <li><strong>Tək qeydi silmək:</strong> <code>localStorage.removeItem("açar")</code></li>
  <li><strong>Bütün yaddaşı təmizləmək:</strong> <code>localStorage.clear()</code></li>
</ul>

<h3>3. Obyektlərin Saxlanması (JSON Serializasiyası):</h3>
<p><code>localStorage</code> yalnız <strong>sətir (string)</strong> qəbul edir. Mürəkkəb obyektləri saxlayarkən mütləq <code>JSON.stringify()</code>, oxuyarkən isə <code>JSON.parse()</code> istifadə edilməlidir:</p>

<pre><code>const istifadeci = { ad: "Murad", bal: 95 };
localStorage.setItem("user", JSON.stringify(istifadeci));

const oxunan = JSON.parse(localStorage.getItem("user"));
console.log(oxunan.ad); // "Murad"</code></pre>

<div class="tip-box">
  <strong>🗄️ Real Həyat Bənzətməsi: Qovluq Şkafı vs İş Masası</strong>
  <p><strong><code>localStorage</code></strong> ofisdəki polad sənəd şkafıdır: axşam işıqları söndürüb evə getsəniz belə, sənədlər qovluqda etibarlı şəkildə qalır. <strong><code>sessionStorage</code></strong> isə iş masasının üstüdür: gün ərzində üzərində çalışdığınız qeydlər iş günü bitdikdə təmizlənir.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Köhnəlmə Müddətli Keş (TTL), Kvota Nəzarəti (QuotaExceededError) və Reaktiv İzləyici</h4>
<p>Böyük istehsalat layihələrində <code>localStorage</code>-in birbaşa istifadəsi yerinə, köhnəlmə vaxtı (TTL) və həcm limiti nəzarəti olan örtük sinifləri (wrapper) tətbiq edilir:</p>

<pre><code>// 1. Vaxt Müddətli Keş (Time-To-Live / TTL Storage)
function yaddasaYazTTL(acar, deyer, omurSaniye = 3600) {
  const paket = {
    deyer: deyer,
    bitmeVaxti: Date.now() + (omurSaniye * 1000)
  };
  try {
    localStorage.setItem(acar, JSON.stringify(paket));
  } catch (err) {
    // 2. Yaddaş Limitinin Aşılması (QuotaExceededError) İdarəetməsi:
    if (err.name === "QuotaExceededError") {
      console.warn("Brauzer yaddaşı dolub! Köhnə keşlər təmizlənir...");
      localStorage.clear();
      localStorage.setItem(acar, JSON.stringify(paket));
    }
  }
}

function yaddasdanOxuTTL(acar) {
  const xam = localStorage.getItem(acar);
  if (!xam) return null;
  const paket = JSON.parse(xam);

  if (Date.now() > paket.bitmeVaxti) {
    localStorage.removeItem(acar); // Vaxtı bitib, yaddaşdan silirik!
    return null;
  }
  return paket.deyer;
}

// 3. Tablararası Sinxronizasiya (Storage Event)
// İstifadəçi başqa tabda dili və ya qaranlıq rejimi dəyişdikdə cari tab bunu eşidir:
window.addEventListener("storage", (e) => {
  if (e.key === "tema") {
    console.log("Digər tabda tema dəyişdi:", e.newValue);
  }
});</code></pre>`,
      "codeExamples": [
        {
          "title": "localStorage ilə Sadə Məlumat Saxlanması və Oxunması",
          "code": "// Məlumatı saxlayırıq\nlocalStorage.setItem(\"dil\", \"az\");\nlocalStorage.setItem(\"tema\", \"qaranliq\");\n\n// Məlumatı oxuyuruq\nconst cariDil = localStorage.getItem(\"dil\");\nconst cariTema = localStorage.getItem(\"tema\");\n\nconsole.log(\"Seçilmiş dil:\", cariDil);\nconsole.log(\"Seçilmiş tema:\", cariTema);",
          "output": "Seçilmiş dil: az\nSeçilmiş tema: qaranliq"
        },
        {
          "title": "Obyektlərin JSON ilə localStorage-da Saxlanması",
          "code": "const profil = {\n  id: 101,\n  ad: \"Aygün\",\n  rol: \"Tələbə\",\n  xallar: [95, 88, 100]\n};\n\n// JSON.stringify ilə obyekt mətnə çevrilir\nlocalStorage.setItem(\"aktiv_istifadeci\", JSON.stringify(profil));\n\n// JSON.parse ilə mətn yenidən obyektə çevrilir\nconst saxlanilanProfil = JSON.parse(localStorage.getItem(\"aktiv_istifadeci\"));\n\nconsole.log(\"İstifadəçi adı:\", saxlanilanProfil.ad);\nconsole.log(\"Ortalama bal:\", saxlanilanProfil.xallar[0]);",
          "output": "İstifadəçi adı: Aygün\nOrtalama bal: 95"
        }
      ],
      "exercises": [
        {
          "id": "ex-16-1-1",
          "title": "İstifadəçi Tənzimləmələrinin Yaddaşda Saxlanması",
          "instruction": "İstifadəçinin seçdiyi interfeys mövzusunu (\"tema\": \"qaranliq\") brauzerin daimi yaddaşına yazın, dərhal ordan geri oxuyaraq \"Aktiv tema: qaranliq\" formatında konsolda nümayiş etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Aktiv tema: qaranliq",
          "hint": "Daimi məlumat saxlamaq üçün localStorage.setItem(açar, dəyər), oxumaq üçün isə localStorage.getItem(açar) metodları tətbiq olunur.",
          "solutionCode": "localStorage.setItem(\"tema\", \"qaranliq\");\nconst tema = localStorage.getItem(\"tema\");\nconsole.log(`Aktiv tema: ${tema}`);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-16-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Obyekti JSON.stringify Olmadan Yaddaşa Yazma Xətası",
          "instruction": "Aşağıdakı kodda proqramçı obyekti <code>JSON.stringify</code> etmədən birbaşa <code>localStorage.setItem</code> ilə saxladığı üçün <code>localStorage.getItem</code> geriyə <code>\"[object Object]\"</code> mətni qaytarır və xassə oxunmur. <code>JSON.stringify</code> və <code>JSON.parse</code> əlavə edərək xətanı düzəldin.",
          "description": "Aşağıdakı kodda proqramçı obyekti <code>JSON.stringify</code> etmədən birbaşa <code>localStorage.setItem</code> ilə saxladığı üçün <code>localStorage.getItem</code> geriyə <code>\"[object Object]\"</code> mətni qaytarır və xassə oxunmur. <code>JSON.stringify</code> və <code>JSON.parse</code> əlavə edərək xətanı düzəldin.",
          "buggyCode": "const user = { ad: \"Murad\", yash: 25 };\n\n// XƏTA: Obyekt birbaşa stringe çevriləndə \"[object Object]\" olur!\nlocalStorage.setItem(\"user_data\", user);\n\nconst oxunan = localStorage.getItem(\"user_data\");\nconsole.log(\"İstifadəçi:\", oxunan.ad);",
          "correctCode": "const user = { ad: \"Murad\", yash: 25 };\n\nlocalStorage.setItem(\"user_data\", JSON.stringify(user));\n\nconst oxunan = JSON.parse(localStorage.getItem(\"user_data\"));\nconsole.log(\"İstifadəçi:\", oxunan.ad);",
          "correctOutput": "İstifadəçi: Murad",
          "expectedOutput": "İstifadəçi: Murad",
          "explanation": "localStorage yalnız sətir (string) tipli məlumat saxlaya bilir. Obyektləri saxlayarkən mütləq JSON.stringify() ilə JSON mətninə çevirmək, oxuyarkən isə JSON.parse() ilə yenidən obyektə çevirmək lazımdır.",
          "hint": "Mürəkkəb obyektləri localStorage-də saxlayarkən JSON.stringify, oxuyarkən JSON.parse tətbiq edin."
        }
      ],
      "bugFix": {
        "id": "bug-16-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Obyekti JSON.stringify Olmadan Yaddaşa Yazma Xətası",
        "instruction": "Aşağıdakı kodda proqramçı obyekti <code>JSON.stringify</code> etmədən birbaşa <code>localStorage.setItem</code> ilə saxladığı üçün <code>localStorage.getItem</code> geriyə <code>\"[object Object]\"</code> mətni qaytarır və xassə oxunmur. <code>JSON.stringify</code> və <code>JSON.parse</code> əlavə edərək xətanı düzəldin.",
        "description": "Aşağıdakı kodda proqramçı obyekti <code>JSON.stringify</code> etmədən birbaşa <code>localStorage.setItem</code> ilə saxladığı üçün <code>localStorage.getItem</code> geriyə <code>\"[object Object]\"</code> mətni qaytarır və xassə oxunmur. <code>JSON.stringify</code> və <code>JSON.parse</code> əlavə edərək xətanı düzəldin.",
        "buggyCode": "const user = { ad: \"Murad\", yash: 25 };\n\n// XƏTA: Obyekt birbaşa stringe çevriləndə \"[object Object]\" olur!\nlocalStorage.setItem(\"user_data\", user);\n\nconst oxunan = localStorage.getItem(\"user_data\");\nconsole.log(\"İstifadəçi:\", oxunan.ad);",
        "correctCode": "const user = { ad: \"Murad\", yash: 25 };\n\nlocalStorage.setItem(\"user_data\", JSON.stringify(user));\n\nconst oxunan = JSON.parse(localStorage.getItem(\"user_data\"));\nconsole.log(\"İstifadəçi:\", oxunan.ad);",
        "correctOutput": "İstifadəçi: Murad",
        "expectedOutput": "İstifadəçi: Murad",
        "explanation": "localStorage yalnız sətir (string) tipli məlumat saxlaya bilir. Obyektləri saxlayarkən mütləq JSON.stringify() ilə JSON mətninə çevirmək, oxuyarkən isə JSON.parse() ilə yenidən obyektə çevirmək lazımdır.",
        "hint": "Mürəkkəb obyektləri localStorage-də saxlayarkən JSON.stringify, oxuyarkən JSON.parse tətbiq edin."
      }
    },
    {
      "id": "topic-16-2",
      "title": "Taymerlər və Animasiya Dövrələri (Timers & requestAnimationFrame)",
      "theory": `<h3>⏱️ Asinxron Vaxt İdarəetməsi</h3>
<p>JavaScript təktərəfli (single-threaded) icra mühitinə malikdir. Müəyyən əməliyyatların gecikmə ilə icra olunması və ya müntəzəm fasilələrlə təkrarlanması brauzerin Web API taymer mexanizmləri vasitəsilə həyata keçirilir.</p>

<h3>1. setTimeout və setInterval</h3>
<ul>
  <li><strong><code>setTimeout(callback, delayMs)</code>:</strong> Təyin olunmuş millisaniyə (ms) gecikmədən sonra funksiyanı <strong>yalnız 1 dəfə</strong> çağırır.</li>
  <li><strong><code>setInterval(callback, intervalMs)</code>:</strong> Dayandırılana qədər hər <code>intervalMs</code> müddətindən bir funksiyanı <strong>dövri olaraq təkrarlayır</strong>.</li>
</ul>

<h3>2. Yaddaş Sızmasının (Memory Leak) Qarşısının Alınması: clearInterval</h3>
<p>Həm <code>setTimeout</code>, həm də <code>setInterval</code> yaradıldıqda unikal bir rəqəmsal <code>id</code> qaytarır:</p>

<pre><code>const taymerId = setInterval(() => { ... }, 1000);
clearInterval(taymerId); // Taymeri dərhal dayandırır</code></pre>

<div class="warning-box">
  <strong>⚠️ Kritik Qayda:</strong><br>
  Əgər istifadəçi səhifədən çıxdıqda və ya tələb olunan şərt ödəndikdə <code>clearInterval</code> çağırılmazsa, funksiya arxa planda sonsuza qədər icra olunmağa davam edir və brauzerin yaddaşını (RAM) tükədir.
</div>

<div class="tip-box">
  <strong>🎼 Real Həyat Bənzətməsi: Zəngli Saat vs Orkestr Dirijoru</strong>
  <p><strong><code>setInterval</code></strong> otaqda kimsə yatıb-yatmadığından asılı olmayaraq hər 5 dəqiqədən bir çalan zəngli saat kimidir. <strong><code>requestAnimationFrame</code></strong> isə konsert dirijorudur: yalnız tamaşaçılar səhnəyə baxdıqda musiqiçilərə işarə verərək mükəmməl ahəngdar vizual kadrlar yaradır.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: requestAnimationFrame (rAF) vs setInterval və Hamar Sayğac Animasiyası</h4>
<p>Animasiyalar və hərəkətli vizuallar üçün <code>setInterval</code> istifadə etmək kadr itkisinə (stutter/jank) səbəb olur, çünki o, monitorun yenilənmə tezliyi (60Hz / 120Hz) ilə sinxronlaşmır:</p>

<pre><code>// requestAnimationFrame (rAF) ilə 60 FPS hamar sayğac animasiyası:
function hamarSaygac(hedefSay, muddetMs) {
  const baslangicVaxti = performance.now();
  const element = document.querySelector("#saygac");

  function kadr(cariVaxt) {
    const kecenVaxt = cariVaxt - baslangicVaxti;
    const irelileyis = Math.min(kecenVaxt / muddetMs, 1); // 0-dan 1-ə qədər
    const cariSay = Math.floor(irelileyis * hedefSay);

    element.textContent = cariSay;

    if (irelileyis < 1) {
      requestAnimationFrame(kadr); // Növbəti kadrı monitorun yenilənmə anına bağlayırıq
    }
  }

  requestAnimationFrame(kadr);
}

// rAF Ən Böyük Üstünlüyü:
// İstifadəçi başqa brauzer tabına keçdikdə rAF avtomatik PAUSE edir,
// CPU və batareya resursunu qoruyur!</code></pre>`,
      "codeExamples": [
        {
          "title": "setInterval ilə Sayğac və clearInterval ilə Dayandırılma",
          "code": "let say = 0;\n\nconst saygacId = setInterval(() => {\n  say++;\n  console.log(\"Sayğac addımı:\", say);\n  \n  if (say === 2) {\n    clearInterval(saygacId);\n    console.log(\"Sayğac tamamlandı!\");\n  }\n}, 10);",
          "output": "Sayğac addımı: 1\nSayğac addımı: 2\nSayğac tamamlandı!"
        },
        {
          "title": "requestAnimationFrame ilə Tək Kadr Animasiyası",
          "code": "let kadrSayi = 0;\n\nfunction animasyaAddimi(vaxtDamgasi) {\n  kadrSayi++;\n  console.log(\"Kadr icra olundu, say:\", kadrSayi);\n}\n\n// Brauzerin növbəti yenilənmə anında çağırılır\nrequestAnimationFrame(animasyaAddimi);",
          "output": "Kadr icra olundu, say: 1"
        }
      ],
      "exercises": [
        {
          "id": "ex-16-2-1",
          "title": "Dövri Sayğacın Avtomatik Dayandırılması",
          "instruction": "Hər addımda say dəyərini 1 vahid artıran dövri taymer qurun. Sayğac 3 qiymətinə çatdıqda intervalı dərhal ləğv edin və son statusu konsol ekranında əks etdirin.",
          "starterCode": "let say = 0;\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "Sayğac dayandı: 3",
          "hint": "Dövri taymer üçün setInterval istifadə edin. Şərt ödəndikdə (say === 3) clearInterval(taymerId) çağıraraq taymeri dayandırın və konsola `Sayğac dayandı: ${say}` yazın.",
          "solutionCode": "let say = 0;\nconst taymerId = setInterval(() => {\n  say++;\n  if (say === 3) {\n    clearInterval(taymerId);\n    console.log(`Sayğac dayandı: ${say}`);\n  }\n}, 10);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-16-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "clearInterval-a Taymer ID-sinin Ötürülməməsi",
          "instruction": "Aşağıdakı kodda proqramçı <code>clearInterval()</code> çağırarkən <code>setInterval</code>-in qaytardığı <code>id</code> dəyişənini arqument kimi ötürməyi unudub, nəticədə taymer dayandırılmır. Düzgün <code>clearInterval(taymerId)</code> sintaksisini tətbiq edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı kodda proqramçı <code>clearInterval()</code> çağırarkən <code>setInterval</code>-in qaytardığı <code>id</code> dəyişənini arqument kimi ötürməyi unudub, nəticədə taymer dayandırılmır. Düzgün <code>clearInterval(taymerId)</code> sintaksisini tətbiq edərək xətanı aradan qaldırın.",
          "buggyCode": "let say = 0;\nconst taymerId = setInterval(() => {\n  say++;\n  if (say === 2) {\n    // XƏTA: clearInterval arqumentsiz çağırılıb!\n    clearInterval();\n    console.log(\"Dayandırıldı:\", say);\n  }\n}, 10);",
          "correctCode": "let say = 0;\nconst taymerId = setInterval(() => {\n  say++;\n  if (say === 2) {\n    clearInterval(taymerId);\n    console.log(\"Dayandırıldı:\", say);\n  }\n}, 10);",
          "correctOutput": "Dayandırıldı: 2",
          "expectedOutput": "Dayandırıldı: 2",
          "explanation": "clearInterval metodu mütləq dayandırılacaq taymerin unikal identifikasiya nömrəsini (id) arqument kimi qəbul etməlidir: clearInterval(taymerId). Arqumentsiz çağırıldıqda heç bir taymer dayandırılmır.",
          "hint": "setInterval tərəfindən qaytarılan identifikatordan istifadə edərək clearInterval() çağırın."
        }
      ],
      "bugFix": {
        "id": "bug-16-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "clearInterval-a Taymer ID-sinin Ötürülməməsi",
        "instruction": "Aşağıdakı kodda proqramçı <code>clearInterval()</code> çağırarkən <code>setInterval</code>-in qaytardığı <code>id</code> dəyişənini arqument kimi ötürməyi unudub, nəticədə taymer dayandırılmır. Düzgün <code>clearInterval(taymerId)</code> sintaksisini tətbiq edərək xətanı aradan qaldırın.",
        "description": "Aşağıdakı kodda proqramçı <code>clearInterval()</code> çağırarkən <code>setInterval</code>-in qaytardığı <code>id</code> dəyişənini arqument kimi ötürməyi unudub, nəticədə taymer dayandırılmır. Düzgün <code>clearInterval(taymerId)</code> sintaksisini tətbiq edərək xətanı aradan qaldırın.",
        "buggyCode": "let say = 0;\nconst taymerId = setInterval(() => {\n  say++;\n  if (say === 2) {\n    // XƏTA: clearInterval arqumentsiz çağırılıb!\n    clearInterval();\n    console.log(\"Dayandırıldı:\", say);\n  }\n}, 10);",
        "correctCode": "let say = 0;\nconst taymerId = setInterval(() => {\n  say++;\n  if (say === 2) {\n    clearInterval(taymerId);\n    console.log(\"Dayandırıldı:\", say);\n  }\n}, 10);",
        "correctOutput": "Dayandırıldı: 2",
        "expectedOutput": "Dayandırıldı: 2",
        "explanation": "clearInterval metodu mütləq dayandırılacaq taymerin unikal identifikasiya nömrəsini (id) arqument kimi qəbul etməlidir: clearInterval(taymerId). Arqumentsiz çağırıldıqda heç bir taymer dayandırılmır.",
        "hint": "setInterval tərəfindən qaytarılan identifikatordan istifadə edərək clearInterval() çağırın."
      }
    },
    {
      "id": "topic-16-3",
      "title": "Müasir Brauzer API-ləri (Clipboard və Geolocation)",
      "theory": `<h3>🌐 Müasir Veb API-lər (Web Platform Capabilities)</h3>
<p>Müasir veb brauzerlər sadəcə sənəd oxuyucusu deyil, zəngin əməliyyat sistemi imkanlarına malik güclü mühərriklərdir. Təhlükəsizlik və məxfilik səbəbilə bu imkanlar asinxron (Promise-əsaslı) işləyir.</p>

<h3>1. Mübadilə Buferi: Asynchronous Clipboard API</h3>
<p>İstifadəçinin mətnləri kopyalaması və ya yapışdırması üçün müasir standart Promise-əsaslı Clipboard API-dir:</p>
<ul>
  <li><strong>Mətni buferə yazmaq (Kopyalamaq):</strong><br>
  <code>await navigator.clipboard.writeText(\"Kopyalanacaq mətn\");</code></li>
  <li><strong>Buferdəki mətni oxumaq (Yapışdırmaq):</strong><br>
  <code>const metn = await navigator.clipboard.readText();</code></li>
</ul>

<h3>2. Coğrafi Mövqe: Geolocation API</h3>
<p>Cihazın cari coğrafi koordinatlarını (en dairəsi - latitude, uzunluq dairəsi - longitude) əldə etmək üçün istifadə olunur:</p>

<pre><code>navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("En dairəsi:", position.coords.latitude);
    console.log("Uzunluq dairəsi:", position.coords.longitude);
  },
  (error) => {
    console.error("Məkan xətası:", error.message);
  }
);</code></pre>

<div class="tip-box">
  <strong>🎫 Real Həyat Bənzətməsi: Qonaq Kartı və Şəxsiyyət Vəsiqəsi</strong>
  <p>Binaya daxil olan qonağın cibinə icazəsiz əl atıb sənədlərini götürə bilməzsiniz. Əvvəlcə nəzakətlə icazə istəyirsiniz (<strong><code>navigator.permissions</code></strong>). İstifadəçi razılıq verdikdə (<strong><code>granted</code></strong>) ona müvafiq xidmət təqdim olunur.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Web Workers (Paralel Çoxaxınlılıq) və LRU Cache Məntiqi</h4>
<p>Ağır riyazi hesablamalar və ya böyük həcmli məlumatların emalı zamanı istifadəçi interfeysinin (UI thread) donmaması üçün <strong>Web Workers</strong> arxitekturası tətbiq edilir:</p>

<pre><code>// 1. Web Workers ilə Paralel İcra:
// worker.js:
// self.onmessage = (e) => {
//   const netice = agirHesablama(e.data);
//   self.postMessage(netice);
// };

// main.js:
// const worker = new Worker("worker.js");
// worker.postMessage({ say: 10000000 });
// worker.onmessage = (e) => console.log("Worker nəticəsi:", e.data);

// 2. Yaddaşda LRU (Least Recently Used) Keş Mexanizmi:
class LRUKes {
  constructor(tutum = 3) {
    this.tutum = tutum;
    this.xəritə = new Map();
  }

  al(acar) {
    if (!this.xəritə.has(acar)) return null;
    const deyer = this.xəritə.get(acar);
    // Ən son istifadə olunan kimi sonuna keçiririk:
    this.xəritə.delete(acar);
    this.xəritə.set(acar, deyer);
    return deyer;
  }

  yaz(acar, deyer) {
    if (this.xəritə.has(acar)) this.xəritə.delete(acar);
    else if (this.xəritə.size >= this.tutum) {
      // Ən köhnə (birinci) elementi yaddaşdan silirik:
      const enKöhne = this.xəritə.keys().next().value;
      this.xəritə.delete(enKöhne);
    }
    this.xəritə.set(acar, deyer);
  }
}

const kes = new LRUKes(2);
kes.yaz("a", 1);
kes.yaz("b", 2);
kes.yaz("c", 3); // "a" silindi!
console.log(kes.al("a")); // null</code></pre>`,
      "codeExamples": [
        {
          "title": "Clipboard API ilə Mətnin Kopyalanması və Oxunması",
          "code": "async function buferTest() {\n  await navigator.clipboard.writeText(\"Salam, JSÖyrən!\");\n  const oxunanMetn = await navigator.clipboard.readText();\n  console.log(\"Buferdən oxundu:\", oxunanMetn);\n}\n\nawait buferTest();",
          "output": "Buferdən oxundu: Salam, JSÖyrən!"
        },
        {
          "title": "Geolocation API ilə Cari Koordinatların Alınması",
          "code": "navigator.geolocation.getCurrentPosition((pos) => {\n  const en = pos.coords.latitude;\n  const uzunluq = pos.coords.longitude;\n  console.log(`Məkan koordinatları: ${en}, ${uzunluq}`);\n});",
          "output": "Məkan koordinatları: 40.4093, 49.8671"
        }
      ],
      "exercises": [
        {
          "id": "ex-16-3-1",
          "title": "Mübadilə Buferinə Mətnin Yazılması və Oxunması",
          "instruction": "Müasir Clipboard API vasitəsilə \"JSÖyrən Platforması 2026\" mətnini asinxron şəkildə mübadilə buferinə yazın, ardınca oxuyaraq \"Buferdəki mətn: [mətn]\" formatında konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Buferdəki mətn: JSÖyrən Platforması 2026",
          "hint": "Mübadilə buferinə yazmaq üçün await navigator.clipboard.writeText(...), oxumaq üçün isə await navigator.clipboard.readText() metodlarından istifadə olunur.",
          "solutionCode": "await navigator.clipboard.writeText(\"JSÖyrən Platforması 2026\");\nconst metn = await navigator.clipboard.readText();\nconsole.log(`Buferdəki mətn: ${metn}`);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-16-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Asinxron writeText Əməliyyatında await Unudulması",
          "instruction": "Mətn buferə kopyalandıqdan sonra konsola oxunmalıdır, lakin asinxronluğun düzgün gözlənilməməsi səbəbindən ardıcıllıq pozulur. Asinxron icra axınını bərpa edərək hədəf mətni əldə edin.",
          "description": "Mətn buferə kopyalandıqdan sonra konsola oxunmalıdır, lakin asinxronluğun düzgün gözlənilməməsi səbəbindən ardıcıllıq pozulur. Asinxron icra axınını bərpa edərək hədəf mətni əldə edin.",
          "buggyCode": "async function kopyala() {\n  // XƏTA: writeText asinxrondur, await yazılmalıdır!\n  navigator.clipboard.writeText(\"Kodlaşdırma Gələcəkdir\");\n  const netice = await navigator.clipboard.readText();\n  console.log(\"Kopyalandı:\", netice);\n}\n\nawait kopyala();",
          "correctCode": "async function kopyala() {\n  await navigator.clipboard.writeText(\"Kodlaşdırma Gələcəkdir\");\n  const netice = await navigator.clipboard.readText();\n  console.log(\"Kopyalandı:\", netice);\n}\n\nawait kopyala();",
          "correctOutput": "Kopyalandı: Kodlaşdırma Gələcəkdir",
          "expectedOutput": "Kopyalandı: Kodlaşdırma Gələcəkdir",
          "explanation": "navigator.clipboard.writeText metodu asinxron işləyir və Promise qaytarır. await istifadə edilmədikdə mətn buferə tam yazılmadan növbəti sətir icra olunur.",
          "hint": "navigator.clipboard.writeText Promise qaytarır və await ilə gözlənilməlidir."
        }
      ],
      "bugFix": {
        "id": "bug-16-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Asinxron writeText Əməliyyatında await Unudulması",
        "instruction": "Mətn buferə kopyalandıqdan sonra konsola oxunmalıdır, lakin asinxronluğun düzgün gözlənilməməsi səbəbindən ardıcıllıq pozulur. Asinxron icra axınını bərpa edərək hədəf mətni əldə edin.",
        "description": "Mətn buferə kopyalandıqdan sonra konsola oxunmalıdır, lakin asinxronluğun düzgün gözlənilməməsi səbəbindən ardıcıllıq pozulur. Asinxron icra axınını bərpa edərək hədəf mətni əldə edin.",
        "buggyCode": "async function kopyala() {\n  // XƏTA: writeText asinxrondur, await yazılmalıdır!\n  navigator.clipboard.writeText(\"Kodlaşdırma Gələcəkdir\");\n  const netice = await navigator.clipboard.readText();\n  console.log(\"Kopyalandı:\", netice);\n}\n\nawait kopyala();",
        "correctCode": "async function kopyala() {\n  await navigator.clipboard.writeText(\"Kodlaşdırma Gələcəkdir\");\n  const netice = await navigator.clipboard.readText();\n  console.log(\"Kopyalandı:\", netice);\n}\n\nawait kopyala();",
        "correctOutput": "Kopyalandı: Kodlaşdırma Gələcəkdir",
        "expectedOutput": "Kopyalandı: Kodlaşdırma Gələcəkdir",
        "explanation": "navigator.clipboard.writeText metodu asinxron işləyir və Promise qaytarır. await istifadə edilmədikdə mətn buferə tam yazılmadan növbəti sətir icra olunur.",
        "hint": "navigator.clipboard.writeText Promise qaytarır və await ilə gözlənilməlidir."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section16 };
}
console.log('Section 16 built successfully');
