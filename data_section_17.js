var SECTIONS_17 = [
  {
    "id": "section-17",
    "title": "Bölmə 17: Şəbəkə Sorğuları (Fetch API & AJAX)",
    "icon": "📡",
    "topics": [
      {
        "id": "topic-17-1",
        "title": "Fetch API Əsasları və HTTP Metodları (GET, POST, PUT, DELETE)",
        "theory": "<h3>📡 Fetch API və Server Əlaqəsi Nədir?</h3>\n<p>Müasir veb tətbiqlər statik səhifələr deyil. İstifadəçi səhifəni yenidən yükləmədən (reload etmədən) serverdən ən son məlumatları oxuyur, yeni qeydlər göndərir və ya məlumatı yeniləyir. Brauzerdə bu asinxron şəbəkə rabitəsini təmin edən müasir standart <strong><code>fetch()</code> API</strong>-dir.</p>\n\n<h3>1. fetch() Sintaksisi və Konfiqurasiya Obyekti:</h3>\n<pre><code>const response = await fetch(url, options);</code></pre>\n\n<ul>\n  <li><code>fetch()</code> həmişə <strong>Promise</strong> qaytarır.</li>\n  <li><strong>options konfiqurasiya obyekti:</strong>\n    <ul>\n      <li><code>method</code>: HTTP sorğu növü (<code>\"GET\"</code>, <code>\"POST\"</code>, <code>\"PUT\"</code>, <code>\"DELETE\"</code>).</li>\n      <li><code>headers</code>: Göndərilən məlumatın tipini bildirən başlıqlar (məsələn: <code>{ \"Content-Type\": \"application/json\" }</code>).</li>\n      <li><code>body</code>: Serverə göndərilən mətnləşdirilmiş məlumat (<code>JSON.stringify(data)</code>).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. 4 Əsas REST HTTP Metodu:</h3>\n<ul>\n  <li><strong><code>GET</code> (Məlumatı Almaq):</strong> Serverdən məlumatı oxumaq üçün istifadə olunur (defolt metoddur, body hissəsi olmur).</li>\n  <li><strong><code>POST</code> (Yeni Resurs Yaratmaq):</strong> Serverə yeni məlumat göndərmək üçün (yeni qeydiyyat, sifariş və s.).</li>\n  <li><strong><code>PUT</code> / <code>PATCH</code> (Yeniləmək):</strong> Serverdəki mövcud qeydi dəyişmək üçün.</li>\n  <li><strong><code>DELETE</code> (Silmək):</strong> Serverdəki qeydi ləğv etmək üçün.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>🍽️ Real Həyat Bənzətməsi: Restorandakı Ofisiant</strong>\n  <p><strong><code>fetch()</code></strong> müştəri (brauzer) ilə mətbəx (server) arasında işləyən ofisiant kimidir:\n    <br>• <strong>GET:</strong> Menyuya baxmaq istəmək.\n    <br>• <strong>POST:</strong> Yeni sifariş qəbzini ofisianta təqdim etmək.\n    <br>• <strong>PUT:</strong> Yeməyin tərkibindəki sousu dəyişməyi xahiş etmək.\n    <br>• <strong>DELETE:</strong> Masadakı boş boşqabı götürməyi xahiş etmək.\n  </p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: 201 Created vs 204 No Content və URLSearchParams</h4>\n<p>İstehsalat REST API-ləri ilə inteqrasiya zamanı status kodlarının incəlikləri və axtarış parametrlərinin təhlükəsiz kodlaşdırılması:</p>\n\n<pre><code>// 1. Status Kodlarının İncelikləri:\n// 201 Created: Yeni resurs uğurla yaradıldıqda qaytarılır (içində JSON olur).\n// 204 No Content: Uğurlu əməliyyatdır (adətən DELETE və ya PUT cavabında), LAKİN gövdəsində məlumat olmur!\n// DİQQƏT: 204 cavabında await res.json() çağırmaq SyntaxError verir!\nif (response.status === 204) {\n  console.log(\"Uğurla silindi, cavab gövdəsi boşdur.\");\n}\n\n// 2. URLSearchParams ilə Təhlükəsiz Axtarış Parametrləri (Query Strings):\n// String birləşdirməsi ('?q=' + encodeURIComponent(...)) kövrəkdir. Müasir üsul:\nconst axtarisParametrleri = new URLSearchParams({\n  axtar: \"javascript mühəndisliyi\",\n  sehife: 1,\n  limit: 20,\n  sirala: \"yeni\"\n});\n\nconst tamUrl = `https://api.jsoyren.az/vakansiyalar?${axtarisParametrleri.toString()}`;\nconsole.log(tamUrl);\n// \"https://api.jsoyren.az/vakansiyalar?axtar=javascript+m%C3%BCh%C9%99ndisliyi&sehife=1&limit=20&sirala=yeni\"</code></pre>",
        "codeExamples": [
          {
            "title": "fetch() ilə Sadə GET Sorğusu",
            "code": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\n\nconsole.log(\"Cavab statusu:\", response.status);\nconsole.log(\"Sorğu uğurludur?\", response.ok);\n\nconst melumatlar = await response.json();\nconsole.log(\"Gələn istifadəçi sayı:\", melumatlar.length);",
            "output": "Cavab statusu: 200\nSorğu uğurludur? true\nGələn istifadəçi sayı: 2"
          },
          {
            "title": "POST Metodu ilə Yeni Məlumat Göndərilməsi",
            "code": "const yeniIstifadeci = {\n  ad: \"Kamran Həsənov\",\n  ixtisas: \"Node.js Mühəndis\"\n};\n\nconst response = await fetch(\"https://api.jsoyren.az/istifadeciler\", {\n  method: \"POST\",\n  headers: {\n    \"Content-Type\": \"application/json\"\n  },\n  body: JSON.stringify(yeniIstifadeci)\n});\n\nconst netice = await response.json();\nconsole.log(\"Status:\", response.status);\nconsole.log(\"Yarandı:\", netice.ad);",
            "output": "Status: 201\nYarandı: Kamran Həsənov"
          }
        ],
        "exercises": [
          {
            "id": "ex-17-1-1",
            "title": "Yeni Resursun Şəbəkəyə Göndərilməsi (POST Sorğusu)",
            "instruction": "Yeni istifadəçi profilini ({ ad: \"Leyla Məmmədova\", ixtisas: \"Frontend\" }) serverə POST sorğusu ilə göndərin və serverdən qayıdan təsdiq məlumatını konsol ekranında əks etdirin.",
            "starterCode": "const yeniIstifadeci = { ad: \"Leyla Məmmədova\", ixtisas: \"Frontend\" };\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "Yaradıldı: Leyla Məmmədova (Status: 201)",
            "hint": "POST sorğusu göndərmək üçün fetch-in ikinci arqumentində method: \"POST\", headers: { \"Content-Type\": \"application/json\" } və body: JSON.stringify(...) qeyd olunmalıdır.",
            "solutionCode": "const yeniIstifadeci = { ad: \"Leyla Məmmədova\", ixtisas: \"Frontend\" };\nconst response = await fetch(\"https://api.jsoyren.az/istifadeciler\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify(yeniIstifadeci)\n});\nconst data = await response.json();\nconsole.log(`Yaradıldı: ${data.ad} (Status: ${response.status})`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-17-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "POST Sorğusunda JSON.stringify Unudulması Xətası",
            "instruction": "Aşağıdakı kodda proqramçı POST sorğusunun gövdəsinə (body) obyekti birbaşa ötürüb (<code>body: melumat</code>), nəticədə məlumat düzgün string formatına salınmayıb. <code>JSON.stringify(melumat)</code> əlavə edərək xətanı aradan qaldırın.",
            "description": "Aşağıdakı kodda proqramçı POST sorğusunun gövdəsinə (body) obyekti birbaşa ötürüb (<code>body: melumat</code>), nəticədə məlumat düzgün string formatına salınmayıb. <code>JSON.stringify(melumat)</code> əlavə edərək xətanı aradan qaldırın.",
            "buggyCode": "const melumat = { ad: \"Tural\", ixtisas: \"DevOps\" };\n\n// XƏTA: body birbaşa obyekt ola bilməz, JSON.stringify edilməlidir!\nconst response = await fetch(\"https://api.jsoyren.az/istifadeciler\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: melumat\n});\n\nconst data = await response.json();\nconsole.log(\"Nəticə:\", data.status);",
            "correctCode": "const melumat = { ad: \"Tural\", ixtisas: \"DevOps\" };\n\nconst response = await fetch(\"https://api.jsoyren.az/istifadeciler\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify(melumat)\n});\n\nconst data = await response.json();\nconsole.log(\"Nəticə:\", data.status);",
            "correctOutput": "Nəticə: Yaradıldı",
            "expectedOutput": "Nəticə: Yaradıldı",
            "explanation": "HTTP sorğusunun gövdəsi (body) şəbəkə üzərindən mətn (string) şəklində ötürülməlidir. JavaScript obyektini göndərərkən mütləq JSON.stringify(obyekt) metodundan istifadə edilməlidir.",
            "hint": "fetch POST sorğusunda məlumat body sahəsinə string kimi JSON.stringify ilə ötürülür."
          }
        ],
        "bugFix": {
          "id": "bug-17-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "POST Sorğusunda JSON.stringify Unudulması Xətası",
          "instruction": "Aşağıdakı kodda proqramçı POST sorğusunun gövdəsinə (body) obyekti birbaşa ötürüb (<code>body: melumat</code>), nəticədə məlumat düzgün string formatına salınmayıb. <code>JSON.stringify(melumat)</code> əlavə edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı kodda proqramçı POST sorğusunun gövdəsinə (body) obyekti birbaşa ötürüb (<code>body: melumat</code>), nəticədə məlumat düzgün string formatına salınmayıb. <code>JSON.stringify(melumat)</code> əlavə edərək xətanı aradan qaldırın.",
          "buggyCode": "const melumat = { ad: \"Tural\", ixtisas: \"DevOps\" };\n\n// XƏTA: body birbaşa obyekt ola bilməz, JSON.stringify edilməlidir!\nconst response = await fetch(\"https://api.jsoyren.az/istifadeciler\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: melumat\n});\n\nconst data = await response.json();\nconsole.log(\"Nəticə:\", data.status);",
          "correctCode": "const melumat = { ad: \"Tural\", ixtisas: \"DevOps\" };\n\nconst response = await fetch(\"https://api.jsoyren.az/istifadeciler\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify(melumat)\n});\n\nconst data = await response.json();\nconsole.log(\"Nəticə:\", data.status);",
          "correctOutput": "Nəticə: Yaradıldı",
          "expectedOutput": "Nəticə: Yaradıldı",
          "explanation": "HTTP sorğusunun gövdəsi (body) şəbəkə üzərindən mətn (string) şəklində ötürülməlidir. JavaScript obyektini göndərərkən mütləq JSON.stringify(obyekt) metodundan istifadə edilməlidir.",
          "hint": "fetch POST sorğusunda məlumat body sahəsinə string kimi JSON.stringify ilə ötürülür."
        }
      },
      {
        "id": "topic-17-2",
        "title": "Async/Await ilə API Məlumatlarının Emalı və DOM-a Dinamik Render",
        "theory": "<h3>🔄 Server Məlumatlarının UI-a Transformasiyası</h3>\n<p>Serverdən gələn məlumatlar adətən JSON massivləri (Array of Objects) şəklində olur. Bu məlumatları istifadəçiyə vizual təqdim etmək üçün JavaScript ilə dinamik HTML strukturları qurulur və DOM-a yerləşdirilir.</p>\n\n<h3>1. response.json() ilə Məlumatın Oxunması:</h3>\n<p><code>fetch()</code> cavab qaytardıqda, həmin cavab ilkin olaraq xam axındır (raw stream). Məlumatı tam oxumaq üçün <code>await response.json()</code> çağırılır və Promise nəticəsində hazır JavaScript obyekti və ya massivi əldə edilir.</p>\n\n<h3>2. Dinamik HTML Kartlarının Yaradılması və DOM-a Yerləşdirmə:</h3>\n<p>Gələn massiv <code>.map()</code> ilə dövr edilərək Template Literals (<code>`${...}`</code>) vasitəsilə kart strukturları qurulur və konteynerin <code>innerHTML</code> xassəsinə mənimsədilir:</p>\n\n<pre><code>const response = await fetch(\"https://api.jsoyren.az/mehsullar\");\nconst mehsullar = await response.json();\n\nconst html = mehsullar.map(m => `\n  &lt;div class=\"kart\" id=\"mehsul-${m.id}\"&gt;\n    &lt;h4&gt;${m.ad}&lt;/h4&gt;\n    &lt;p&gt;Qiymət: ${m.qiymet} AZN&lt;/p&gt;\n  &lt;/div&gt;\n`).join(\"\");\n\ndocument.querySelector(\"#kataloq\").innerHTML = html;</code></pre>\n\n<div class=\"tip-box\">\n  <strong>📦 Real Həyat Bənzətməsi: Kuryer Bağlaması və Vitrin Rəfləri</strong>\n  <p><strong><code>await response.json()</code></strong> kuryerin gətirdiyi qapalı bağlamanı açıb içindəki məhsulları çıxarmaqdır. Həmin məhsulları bir-bir səliqəli şəkildə mağazanın vitrin rəflərinə düzmək isə <strong><code>DOM Render</code></strong> əməliyyatıdır.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Axınların İki Dəfə Oxunması Tələsi (body stream already read) və Səhifələmə (Pagination Pipeline)</h4>\n<p>Fetch axınları (Streams) və çoxsəhifəli API-lərin toplu emalı zamanı qarşıya çıxan mühəndislik həlləri:</p>\n\n<pre><code>// 1. \"body stream already read\" Tələsi:\n// Response axını yalnız BİR DƏFƏ oxuna bilər!\nconst res = await fetch(\"https://api.jsoyren.az/istifadeciler\");\n\n// XƏTA:\n// const json = await res.json();\n// const text = await res.text(); // TypeError: Failed to execute 'text' on 'Response': body stream already read\n\n// Həll: Əgər cavabı həm xam mətn, həm də JSON kimi oxumaq lazımdırsa, əvvəlcə klonlayırıq:\nconst resKlon = res.clone();\nconst json = await res.json();\nconst text = await resKlon.text(); // Uğurludur!\n\n// 2. Səhifələmə Boru Xətti (Pagination Pipeline):\nasync function butunSehifeleriTopla(umumiSehifeSayi = 3) {\n  const butunTelebeler = [];\n\n  for (let s = 1; s <= umumiSehifeSayi; s++) {\n    const r = await fetch(`https://api.jsoyren.az/telebeler?sehife=${s}`);\n    if (!r.ok) break;\n    const sehifeData = await r.json();\n    butunTelebeler.push(...sehifeData);\n  }\n\n  return butunTelebeler;\n}</code></pre>",
        "codeExamples": [
          {
            "title": "API-dən Məlumat Oxunması və Konsolda Siyahılanması",
            "code": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\nconst telebeler = await response.json();\n\ntelebeler.forEach((t, i) => {\n  console.log(`${i + 1}. ${t.ad} - ${t.ixtisas}`);\n});",
            "output": "1. Nigar Əliyeva - Frontend Mühəndis\n2. Elmir Qasımov - Backend Mühəndis"
          },
          {
            "title": "HTML Kartlarının Dinamik Qurulması və DOM-a Yazılması",
            "code": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\nconst telebeler = await response.json();\n\nconst html = telebeler.map(t => `<article class=\"kart\">${t.ad}</article>`).join(\"\");\nconst konteyner = document.querySelector(\"#siyahi-qutusu\");\nkonteyner.innerHTML = html;\n\nconsole.log(\"Konteyner HTML yeniləndi: true\");\nconsole.log(\"Konteyner daxili:\", konteyner.innerHTML);",
            "output": "Konteyner HTML yeniləndi: true\nKonteyner daxili: <article class=\"kart\">Nigar Əliyeva</article><article class=\"kart\">Elmir Qasımov</article>"
          }
        ],
        "exercises": [
          {
            "id": "ex-17-2-1",
            "title": "Server Məlumatlarının Vizual Kartlara Render Edilməsi",
            "instruction": "Serverdən gələn tələbə məlumatlarını asinxron sorğu ilə əldə edin, siyahıdakı elementlərdən HTML kartlar yaradaraq səhifədəki #telebe-siyahisi konteynerinə daxil edin və render edilən kartların sayını konsola çıxarın.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Render edildi: 2 kart",
            "hint": "Gələn massivi oxumaq üçün await response.json(), elementləri HTML-ə çevirmək üçün map() və innerHTML mənimsətməsindən istifadə edin.",
            "solutionCode": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\nconst telebeler = await response.json();\nconst konteyner = document.querySelector(\"#telebe-siyahisi\");\nkonteyner.innerHTML = telebeler.map(t => `<div class=\"kart\"><h4>${t.ad}</h4></div>`).join(\"\");\nconsole.log(`Render edildi: ${telebeler.length} kart`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-17-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "response.json()-da await Unudulması Xətası",
            "instruction": "Aşağıdakı kodda proqramçı <code>response.json()</code> çağırışının qarşısında <code>await</code> yazmağı unudub, nəticədə massiv deyil <code>Promise</code> obyekti qayıdıb və xəta verib. <code>await response.json()</code> edərək xətanı aradan qaldırın.",
            "description": "Aşağıdakı kodda proqramçı <code>response.json()</code> çağırışının qarşısında <code>await</code> yazmağı unudub, nəticədə massiv deyil <code>Promise</code> obyekti qayıdıb və xəta verib. <code>await response.json()</code> edərək xətanı aradan qaldırın.",
            "buggyCode": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\n// XƏTA: response.json() asinxrondur, await yazılmalıdır!\nconst telebeler = response.json();\n\nconsole.log(\"Telebeler bir massivdirmi?\", Array.isArray(telebeler));",
            "correctCode": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\nconst telebeler = await response.json();\n\nconsole.log(\"Telebeler bir massivdirmi?\", Array.isArray(telebeler));",
            "correctOutput": "Telebeler bir massivdirmi? true",
            "expectedOutput": "Telebeler bir massivdirmi? true",
            "explanation": "response.json() metodu asinxrondur və Promise qaytarır. await istifadə edilmədikdə massivin özü deyil, tamamlanmamış Promise obyekti əldə edilir.",
            "hint": "fetch cavabının gövdəsini oxumaq üçün asinxron res.json() metodunu await ilə çağırın."
          }
        ],
        "bugFix": {
          "id": "bug-17-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "response.json()-da await Unudulması Xətası",
          "instruction": "Aşağıdakı kodda proqramçı <code>response.json()</code> çağırışının qarşısında <code>await</code> yazmağı unudub, nəticədə massiv deyil <code>Promise</code> obyekti qayıdıb və xəta verib. <code>await response.json()</code> edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı kodda proqramçı <code>response.json()</code> çağırışının qarşısında <code>await</code> yazmağı unudub, nəticədə massiv deyil <code>Promise</code> obyekti qayıdıb və xəta verib. <code>await response.json()</code> edərək xətanı aradan qaldırın.",
          "buggyCode": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\n// XƏTA: response.json() asinxrondur, await yazılmalıdır!\nconst telebeler = response.json();\n\nconsole.log(\"Telebeler bir massivdirmi?\", Array.isArray(telebeler));",
          "correctCode": "const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\nconst telebeler = await response.json();\n\nconsole.log(\"Telebeler bir massivdirmi?\", Array.isArray(telebeler));",
          "correctOutput": "Telebeler bir massivdirmi? true",
          "expectedOutput": "Telebeler bir massivdirmi? true",
          "explanation": "response.json() metodu asinxrondur və Promise qaytarır. await istifadə edilmədikdə massivin özü deyil, tamamlanmamış Promise obyekti əldə edilir.",
          "hint": "fetch cavabının gövdəsini oxumaq üçün asinxron res.json() metodunu await ilə çağırın."
        }
      },
      {
        "id": "topic-17-3",
        "title": "Şəbəkə Vəziyyətləri: Yüklənmə (Loading) və Xətaların Ələ Keçirilməsi",
        "theory": "<h3>⏳ Real Həyatda Şəbəkə Vəziyyətləri (3-State UI Lifecycle)</h3>\n<p>İnternet bağlantısı qeyri-sabit ola bilər: mobil rabitə zəifləyə bilər, server gecikə bilər və ya axtarılan resurs mövcud olmaya bilər. Professional veb tətbiqlər 3 əsas vəziyyəti mütləq idarə edir:</p>\n<ol>\n  <li><strong>Yüklənmə Vəziyyəti (Loading):</strong> Sorğu başlayan andan cavab gələnə qədər ekranda \"Yüklənir...\" indikatoru (spinner və ya skelet) göstərilir.</li>\n  <li><strong>Uğurlu Vəziyyət (Success):</strong> Məlumat uğurla gəldikdə yüklənmə gizlədilir və məzmun ekrana çıxarılır.</li>\n  <li><strong>Xəta Vəziyyəti (Error):</strong> Şəbəkə qəzası və ya HTTP xətası baş verdikdə istifadəçiyə aydın xəbərdarlıq və \"Yenidən yoxla\" düyməsi təqdim edilir.</li>\n</ol>\n\n<h3>1. Fetch-in Ən Kritik Tələsi (The Fetch Gotcha!):</h3>\n<div class=\"warning-box\">\n  <strong>⚠️ Çox Vacib Qayda:</strong><br>\n  <code>fetch()</code> metodu HTTP <code>404 Not Found</code> və ya <code>500 Server Error</code> olduqda <strong>PROMISE-İ REJECT ETMİR (avtomatik catch-ə düşmür)!</strong><br>\n  <code>fetch()</code> yalnız şəbəkə tam kəsildikdə (offline rejimdə) <code>catch</code>-ə düşür. Buna görə hər bir sorğuda mütləq <strong><code>response.ok</code></strong> yoxlanmalı və xəta varsa süni olaraq <code>throw new Error()</code> ilə fırladılmalıdır:\n</div>\n\n<pre><code>if (!response.ok) {\n  throw new Error(`Server xətası: ${response.status}`);\n}</code></pre>\n\n<div class=\"tip-box\">\n  <strong>🚚 Real Həyat Bənzətməsi: Bağlama İzləmə Sistemi</strong>\n  <p>Onlayn sifariş verəndə ekranda \"Yolda / Çatdırılır\" yazısını görürsünüz (<strong><code>Loading</code></strong>). Kuryer bağlamanı təhvil verdikdə məhsuldan istifadə edirsiniz (<strong><code>Success</code></strong>). Əgər maşın yolda xarab olarsa, sizə bildiriş gəlir və \"Təkrar çatdırılma istə\" seçimi verilir (<strong><code>Error & Retry</code></strong>).</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: AbortController ilə Sorğunun Ləğvi və Eksponensial Təkrar Cəhd (Exponential Backoff)</h4>\n<p>Dinamik axtarış inputlarında (Autocomplete) hər hərf yazıldıqda köhnə sorğunun ləğv edilməsi və qeyri-sabit şəbəkədə təkrar cəhd mühəndisliyi:</p>\n\n<pre><code>// 1. AbortController ilə Köhnəlmiş Sorğunun Ləğvi:\nlet cariKontroller = null;\n\nasync function canliAxtaris(sorguMetni) {\n  // Əvvəlki davam edən sorğu varsa, onu dərhal ləğv edirik:\n  if (cariKontroller) cariKontroller.abort();\n  cariKontroller = new AbortController();\n\n  try {\n    const res = await fetch(`https://api.jsoyren.az/axtar?q=${sorguMetni}`, {\n      signal: cariKontroller.signal\n    });\n    const neticeler = await res.json();\n    console.log(\"Axtarış nəticəsi:\", neticeler);\n  } catch (err) {\n    if (err.name === \"AbortError\") {\n      console.log(\"Köhnə axtarış ləğv edildi, yeni sorğuya yer verildi.\");\n    } else {\n      console.error(\"Şəbəkə xətası:\", err.message);\n    }\n  }\n}\n\n// 2. Eksponensial Gözləmə ilə Təkrar Cəhd (Exponential Backoff):\nasync function dozumluFetch(url, maksimumCehd = 3, gecikme = 1000) {\n  for (let c = 0; c < maksimumCehd; c++) {\n    try {\n      const res = await fetch(url);\n      if (res.ok) return await res.json();\n      throw new Error(`HTTP ${res.status}`);\n    } catch (err) {\n      if (c === maksimumCehd - 1) throw err;\n      const gozleme = gecikme * Math.pow(2, c); // 1s, 2s, 4s...\n      console.warn(`Cəhd ${c + 1} uğursuz oldu. ${gozleme}ms sonra təkrar yoxlanılır...`);\n      await new Promise(r => setTimeout(r, gozleme));\n    }\n  }\n}</code></pre>",
        "codeExamples": [
          {
            "title": "response.ok ilə 404 Xətasının Tutulması",
            "code": "try {\n  const response = await fetch(\"https://api.jsoyren.az/tapilmadi-404\");\n  \n  if (!response.ok) {\n    throw new Error(`Resurs tapılmadı (HTTP ${response.status})`);\n  }\n  \n  const data = await response.json();\n  console.log(\"Məlumat:\", data);\n} catch (err) {\n  console.log(\"Xəta tutuldu:\", err.message);\n}",
            "output": "Xəta tutuldu: Resurs tapılmadı (HTTP 404)"
          },
          {
            "title": "Loading və Error Vəziyyətlərinin İdarə Olunması",
            "code": "let yuklenir = true;\nconsole.log(\"Status: Yüklənir...\");\n\ntry {\n  const response = await fetch(\"https://api.jsoyren.az/istifadeciler\");\n  if (!response.ok) throw new Error(\"Server xətası\");\n  const data = await response.json();\n  console.log(\"Status: Uğurla alındı (\" + data.length + \" qeyd)\");\n} catch (err) {\n  console.log(\"Status: Xəta baş verdi\");\n} finally {\n  yuklenir = false;\n  console.log(\"Status: Yüklənmə dayandı (yuklenir=\" + yuklenir + \")\");\n}",
            "output": "Status: Yüklənir...\nStatus: Uğurla alındı (2 qeyd)\nStatus: Yüklənmə dayandı (yuklenir=false)"
          }
        ],
        "exercises": [
          {
            "id": "ex-17-3-1",
            "title": "Şəbəkə Xətalarının Diaqnostikası və Bildiriş",
            "instruction": "Mövcud olmayan ünvana göndərilən sorğu zamanı HTTP status kodunu yoxlayın, server xətası baş verdikdə istisnanı təhlükəsiz tutaraq konsola \"Xəbərdarlıq: Xəta kodu: 404\" mesajını yazdırın.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Xəbərdarlıq: Xəta kodu: 404",
            "hint": "Sorğunun uğurluluğunu if (!response.ok) ilə yoxlayın və throw new Error(`Xəta kodu: ${response.status}`) fırladaraq catch blokunda konsola çıxarın.",
            "solutionCode": "try {\n  const response = await fetch(\"https://api.jsoyren.az/tapilmadi-404\");\n  if (!response.ok) {\n    throw new Error(`Xəta kodu: ${response.status}`);\n  }\n} catch (err) {\n  console.log(`Xəbərdarlıq: ${err.message}`);\n}"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-17-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Fetch 404 Xətasında response.ok Yoxlamasının Olmaması",
            "instruction": "Aşağıdakı kodda proqramçı 404 cavabı gəldikdə <code>response.ok</code> yoxlamasını aparmadığı üçün xəta <code>catch</code> blokuna ötürülməyib və səhv nəticə çap olunub. <code>if (!response.ok) throw new Error(`Xəta: ${response.status}`)</code> şərtini əlavə edərək xətanı düzəldin.",
            "description": "Aşağıdakı kodda proqramçı 404 cavabı gəldikdə <code>response.ok</code> yoxlamasını aparmadığı üçün xəta <code>catch</code> blokuna ötürülməyib və səhv nəticə çap olunub. <code>if (!response.ok) throw new Error(`Xəta: ${response.status}`)</code> şərtini əlavə edərək xətanı düzəldin.",
            "buggyCode": "try {\n  const response = await fetch(\"https://api.jsoyren.az/tapilmadi-404\");\n  // XƏTA: response.ok yoxlanılmayıb! fetch 404-də avtomatik catch-ə getmir!\n  console.log(\"Xəta yoxdur, status:\", response.status);\n} catch (err) {\n  console.log(\"Xəta tutuldu:\", err.message);\n}",
            "correctCode": "try {\n  const response = await fetch(\"https://api.jsoyren.az/tapilmadi-404\");\n  if (!response.ok) {\n    throw new Error(`Xəta: ${response.status}`);\n  }\n  console.log(\"Xəta yoxdur, status:\", response.status);\n} catch (err) {\n  console.log(\"Xəta tutuldu:\", err.message);\n}",
            "correctOutput": "Xəta tutuldu: Xəta: 404",
            "expectedOutput": "Xəta tutuldu: Xəta: 404",
            "explanation": "fetch() metodu yalnız şəbəkə tam qopduqda catch blokuna düşür. HTTP 404 və 500 statuslu cavablar uğurlu Promise kimi qayıdır. Buna görə if (!response.ok) throw new Error(...) yoxlaması mütləq aparılmalıdır.",
            "hint": "HTTP 404 statusu şəbəkə xətası sayılmır; xətanı fırlatmaq üçün if (!res.ok) yoxlanışı aparın."
          }
        ],
        "bugFix": {
          "id": "bug-17-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Fetch 404 Xətasında response.ok Yoxlamasının Olmaması",
          "instruction": "Aşağıdakı kodda proqramçı 404 cavabı gəldikdə <code>response.ok</code> yoxlamasını aparmadığı üçün xəta <code>catch</code> blokuna ötürülməyib və səhv nəticə çap olunub. <code>if (!response.ok) throw new Error(`Xəta: ${response.status}`)</code> şərtini əlavə edərək xətanı düzəldin.",
          "description": "Aşağıdakı kodda proqramçı 404 cavabı gəldikdə <code>response.ok</code> yoxlamasını aparmadığı üçün xəta <code>catch</code> blokuna ötürülməyib və səhv nəticə çap olunub. <code>if (!response.ok) throw new Error(`Xəta: ${response.status}`)</code> şərtini əlavə edərək xətanı düzəldin.",
          "buggyCode": "try {\n  const response = await fetch(\"https://api.jsoyren.az/tapilmadi-404\");\n  // XƏTA: response.ok yoxlanılmayıb! fetch 404-də avtomatik catch-ə getmir!\n  console.log(\"Xəta yoxdur, status:\", response.status);\n} catch (err) {\n  console.log(\"Xəta tutuldu:\", err.message);\n}",
          "correctCode": "try {\n  const response = await fetch(\"https://api.jsoyren.az/tapilmadi-404\");\n  if (!response.ok) {\n    throw new Error(`Xəta: ${response.status}`);\n  }\n  console.log(\"Xəta yoxdur, status:\", response.status);\n} catch (err) {\n  console.log(\"Xəta tutuldu:\", err.message);\n}",
          "correctOutput": "Xəta tutuldu: Xəta: 404",
          "expectedOutput": "Xəta tutuldu: Xəta: 404",
          "explanation": "fetch() metodu yalnız şəbəkə tam qopduqda catch blokuna düşür. HTTP 404 və 500 statuslu cavablar uğurlu Promise kimi qayıdır. Buna görə if (!response.ok) throw new Error(...) yoxlaması mütləq aparılmalıdır.",
          "hint": "HTTP 404 statusu şəbəkə xətası sayılmır; xətanı fırlatmaq üçün if (!res.ok) yoxlanışı aparın."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_17 };
}
