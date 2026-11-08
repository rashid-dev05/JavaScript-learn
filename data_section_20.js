var SECTIONS_20 = [
  {
    "id": "section-20",
    "title": "Bölmə 20: RESTful API Arxitekturası və CRUD Əməliyyatları",
    "icon": "🗄️",
    "topics": [
      {
        "id": "topic-20-1",
        "title": "REST API Dizayn Prinsipləri, Resurs Nomenklaturası və 204 No Content",
        "theory": "<h3>🗄️ REST API Arxitekturası Nədir?</h3>\n<p><strong>REST (Representational State Transfer)</strong> — müasir veb xidmətlər, mobil tətbiqlər və tək səhifəli tətbiqlər (SPA) üçün beynəlxalq səviyyədə qəbul edilmiş standart API dizayn arxitekturasıdır. RESTful API-lər server resurslarını aydın, strukturlaşdırılmış və proqnozlaşdırıla bilən şəkildə xarici dünyaya təqdim edir.</p>\n\n<div class=\"tip-box\">\n  <strong>📚 Real Həyat Bənzətməsi (Müasir Kitabxana Arxivi):</strong>\n  <p>Kitabxanada minlərlə kitab və sənəd necə təşkil olunursa, REST API də server məlumatlarını elə idarə edir:</p>\n  <ul>\n    <li><strong><code>req.params</code></strong> — kitabın arxasındakı unikal ştrix-kod və ya inventar nömrəsidir (birbaşa həmin tək nüsxəni tapır: <code>/api/kitablar/42</code>).</li>\n    <li><strong><code>req.query</code></strong> — oxucunun axtarış kompüterində daxil etdiyi filtrlərdir (\"yalnız 2026-cı ilin elmi fantastika kitabları\": <code>/api/kitablar?janr=IT&il=2026</code>).</li>\n    <li><strong><code>req.body</code></strong> — kitabxanaya bağışlanmış yeni kitabların qeydiyyat masasına təhvil verildiyi bağlama qutusudur (yeni resurs yaradılması).</li>\n  </ul>\n</div>\n\n<h3>RESTful Dizaynın Qızıl Qaydaları:</h3>\n<ul>\n  <li><strong>Resurs Əsaslı Ünvanlar (Resource-Oriented URLs):</strong> URL-lər fellərdən deyil, resursu təmsil edən <em>cəm isimlərdən</em> ibarət olmalıdır:<br>\n  ❌ <em>Yanlış:</em> <code>/api/getMehsul</code>, <code>/api/yeniMehsulYarat</code>, <code>/api/deleteMehsul/5</code><br>\n  ✅ <em>Doğru (RESTful):</em> <code>GET /api/mehsullar</code>, <code>POST /api/mehsullar</code>, <code>DELETE /api/mehsullar/5</code></li>\n  <li><strong>Kebab-case Konvensiyası:</strong> URL-lərdə iki və daha çox sözdən ibarət resurs adları defislə (kebab-case) yazılmalıdır: <code>/api/istifadeci-profilleri</code> (camelCase və ya snake_case tövsiyə olunmur).</li>\n  <li><strong>Vəziyyətsiz Əlaqə (Statelessness):</strong> Hər bir HTTP sorğusu server tərəfində əvvəlki sorğulardan asılı olmayan, tam və müstəqil kontekst daşımalıdır. Server sorğulararası müştəri vəziyyətini (state) sessiya yaddaşında saxlamamalıdır.</li>\n  <li><strong>Semantik HTTP Metodları:</strong> Resurs üzərindəki hərəkət HTTP feli ilə bildirilir: <code>GET</code> (oxumaq), <code>POST</code> (yaratmaq), <code>PUT</code>/<code>PATCH</code> (yeniləmək), <code>DELETE</code> (silmək).</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (204 No Content ilə Gövdə Göndərməyə Çalışmaq):</strong><br>\n  HTTP RFC standartına görə, <code>204 No Content</code> status kodu cavabda <strong>heç bir məlumat gövdəsinin (body) olmadığını</strong> qəti şəkildə bəyan edir. Əgər siz <code>res.status(204).json({ mesaj: \"Silindi\" })</code> yazsanız, standart pozulur və bir çox HTTP klientləri həmin gövdəni iqnor edir. Əgər müştəriyə təsdiq JSON-u qaytarmaq istəyirsinizsə, status <code>200 OK</code> olmalıdır. Gövdəsiz təmiz cavab üçün isə <code>res.status(204).send()</code> istifadə edin!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Alt Resurslar (Nested Sub-resources) və HATEOAS Konvensiyası</h4>\n<p>Həqiqi istehsalat sistemlərində resurslar təkbaşına deyil, bir-biri ilə iyerarxik əlaqədə mövcud olur. REST arxitekturasında əlaqəli resursların ünvanlanması və naviqasiyası üçün iki mühüm standart mövcuddur:</p>\n\n<p><strong>1. İyerarxik Alt Resurslar (Nested Endpoints):</strong> Bir resurs digər ana resursun daxilində mövcud olduqda (məsələn, istifadəçiyə aid sifarişlər və ya məqaləyə aid şərhlər):</p>\n<ul>\n  <li><code>GET /api/v1/users/:userId/orders</code> — Müəyyən bir istifadəçinin bütün sifarişləri.</li>\n  <li><code>POST /api/v1/users/:userId/orders</code> — Həmin istifadəçi üçün yeni sifariş açmaq.</li>\n  <li><code>GET /api/v1/users/:userId/orders/:orderId</code> — Konkret bir sifarişin detalları.</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ İki Səviyyə Qaydası (Max 2 Levels of Nesting):</strong><br>\n  Heç vaxt 2 səviyyədən artıq dərin URL qurmayın! Məsələn: <code>/users/1/orders/2/items/3/taxes</code> anti-pattern-dir. Resurs dərinləşdikcə onu müstəqil səviyyəyə çıxarın: <code>/api/v1/order-items/3</code>.<br>\n  <strong>Express { mergeParams: true }:</strong> Alt marşrutlaşdırıcıda ana marşrutun <code>:userId</code> parametrini oxumaq üçün mütləq <code>express.Router({ mergeParams: true })</code> konfiqurasiyası təyin olunmalıdır.\n</div>\n\n<p><strong>2. HATEOAS (Hypermedia As The Engine Of Application State - REST Səviyyə 3):</strong> Richardson yetkinlik modelinin ən yüksək səviyyəsidir. Server cavabda yalnız məlumatları deyil, həm də müştərinin həmin resurs üzərində icra edə biləcəyi sonrakı mümkün addımların keçidlərini (<code>_links</code>) təqdim edir:</p>\n\n<pre><code class=\"language-json\">{\n  \"id\": 105,\n  \"status\": \"gozlemede\",\n  \"mebleg\": 120,\n  \"_links\": {\n    \"self\": { \"href\": \"/api/v1/orders/105\", \"method\": \"GET\" },\n    \"cancel\": { \"href\": \"/api/v1/orders/105/cancel\", \"method\": \"POST\" },\n    \"payment\": { \"href\": \"/api/v1/orders/105/pay\", \"method\": \"POST\" }\n  }\n}</code></pre>\n<p>Bu konvensiya sayəsində frontend proqramçısı serverin daxili biznes qaydalarını (məs: \"ödənmiş sifarişi ləğv etmək olmaz\") əllə yoxlamaq məcburiyyətində qalmır — əgər <code>cancel</code> linki JSON-da yoxdursa, müvafiq düymə gizlədilir.</p>",
        "codeExamples": [
          {
            "title": "req.params və req.query ilə Filtrləmə",
            "code": "const app = express();\n\nconst kitablar = [\n  { id: 1, ad: \"JavaScript Əsasları\", janr: \"IT\" },\n  { id: 2, ad: \"Node.js Dərinlikləri\", janr: \"IT\" },\n  { id: 3, ad: \"Kainatın Sirri\", janr: \"Elm\" }\n];\n\napp.get('/api/kitablar', (req, res) => {\n  const janr = req.query.janr;\n  const netice = janr ? kitablar.filter(k => k.janr === janr) : kitablar;\n  res.status(200).json({ say: netice.length, data: netice });\n});\n\napp.simulateRequest('GET', '/api/kitablar?janr=IT');",
            "output": "[HTTP 200] {\"say\":2,\"data\":[{\"id\":1,\"ad\":\"JavaScript Əsasları\",\"janr\":\"IT\"},{\"id\":2,\"ad\":\"Node.js Dərinlikləri\",\"janr\":\"IT\"}]}"
          },
          {
            "title": "app.use(express.json()) və req.body ilə Məlumat Qəbulu",
            "code": "const app = express();\napp.use(express.json());\n\napp.post('/api/istifadeciler', (req, res) => {\n  const { ad, ixtisas } = req.body;\n  res.status(201).json({\n    ugur: true,\n    mesaj: `İstifadəçi '${ad}' (${ixtisas}) qeydə alındı`\n  });\n});\n\napp.simulateRequest('POST', '/api/istifadeciler', {\n  body: { ad: \"Aynur\", ixtisas: \"Frontend Mühəndis\" }\n});",
            "output": "[HTTP 201] {\"ugur\":true,\"mesaj\":\"İstifadəçi 'Aynur' (Frontend Mühəndis) qeydə alındı\"}"
          }
        ],
        "exercises": [
          {
            "id": "ex-20-1-1",
            "title": "Filtrlənə Bilən Resurs Kolleksiyası (GET Metodu)",
            "instruction": "Kitablar kolleksiyasında janr üzrə axtarış parametrini (req.query.janr) nəzərə alan və uyğun gələn kitabların ümumi sayı ilə birlikdə siyahısını JSON şəklində qaytaran REST marşrutunu tərtib edin.",
            "starterCode": "const app = express();\napp.use(express.json());\n\nconst kitablar = [\n  { id: 1, ad: \"JavaScript Dərinlikləri\", janr: \"IT\" },\n  { id: 2, ad: \"Node.js Arxitekturası\", janr: \"IT\" },\n  { id: 3, ad: \"Kainatın Sirri\", janr: \"Elm\" }\n];\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 200] {\"tapildi\":2,\"kitablar\":[{\"id\":1,\"ad\":\"JavaScript Dərinlikləri\",\"janr\":\"IT\"},{\"id\":2,\"ad\":\"Node.js Arxitekturası\",\"janr\":\"IT\"}]}",
            "hint": "Massiv filtrasiyası üçün filter() metodundan və tapılan elementlərin sayını tapildi sahəsində göndərməkdən istifadə edin.",
            "solutionCode": "const app = express();\napp.use(express.json());\n\nconst kitablar = [\n  { id: 1, ad: \"JavaScript Dərinlikləri\", janr: \"IT\" },\n  { id: 2, ad: \"Node.js Arxitekturası\", janr: \"IT\" },\n  { id: 3, ad: \"Kainatın Sirri\", janr: \"Elm\" }\n];\n\napp.get(\"/api/kitablar\", (req, res) => {\n  const janr = req.query.janr;\n  const netice = janr ? kitablar.filter(k => k.janr === janr) : kitablar;\n  res.status(200).json({ tapildi: netice.length, kitablar: netice });\n});\n\napp.simulateRequest(\"GET\", \"/api/kitablar?janr=IT\");"
          },
          {
            "id": "ex-20-1-2",
            "title": "Resursun Yenilənməsi üçün PUT Marşrutu və 200 OK Cavabı",
            "instruction": "Mövcud kurs məlumatlarını yeniləyən <code>PUT /api/kurslar/:id</code> marşrutu qurun. Kurslar siyahısı: <code>[{ id: 1, ad: \"HTML Əsasları\", qiymet: 50 }, { id: 2, ad: \"CSS Ustası\", qiymet: 70 }]</code>. <code>req.body</code>-dən gələn məlumatlarla 1 nömrəli kursu yeniləyin və yenilənmiş obyekti <code>200</code> statusu ilə qaytarın. <code>app.use(express.json())</code> istifadə edin və <code>app.simulateRequest('PUT', '/api/kurslar/1', { body: { ad: \"HTML & CSS Pro\", qiymet: 90 } })</code> ilə icra edin.",
            "starterCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet kurslar = [\n  { id: 1, ad: \"HTML Əsasları\", qiymet: 50 },\n  { id: 2, ad: \"CSS Ustası\", qiymet: 70 }\n];\n\n// PUT /api/kurslar/:id marşrutunu yazın\n\napp.simulateRequest('PUT', '/api/kurslar/1', { body: { ad: \"HTML & CSS Pro\", qiymet: 90 } });\n",
            "expectedOutput": "[HTTP 200] {\"id\":1,\"ad\":\"HTML & CSS Pro\",\"qiymet\":90}",
            "hint": "const id = parseInt(req.params.id, 10); const index = kurslar.findIndex(k => k.id === id); kurslar[index] = { ...kurslar[index], ...req.body, id }; res.status(200).json(kurslar[index]);",
            "solutionCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\nlet kurslar = [{ id: 1, ad: \"HTML Əsasları\", qiymet: 50 }, { id: 2, ad: \"CSS Ustası\", qiymet: 70 }];\napp.put('/api/kurslar/:id', (req, res) => {\n    const id = parseInt(req.params.id, 10);\n    const index = kurslar.findIndex(k => k.id === id);\n    if (index === -1) return res.status(404).json({ xeta: \"Kurs tapılmadı\" });\n    kurslar[index] = { ...kurslar[index], ...req.body, id };\n    res.status(200).json(kurslar[index]);\n});\napp.simulateRequest('PUT', '/api/kurslar/1', { body: { ad: \"HTML & CSS Pro\", qiymet: 90 } });"
          },
          {
            "id": "ex-20-1-3",
            "title": "Uğurlu Silinmədən Sonra 204 No Content Standartı",
            "instruction": "RESTful API standartına görə, resurs silindikdən sonra cavab gövdəsi göndərilmirsə <code>204 No Content</code> status kodu qaytarılmalıdır. <code>DELETE /api/bildirisler/:id</code> marşrutu qurun. Bildirişlər massivindən elementi silin və <code>res.status(204).send()</code> ilə cavab verin. <code>app.simulateRequest('DELETE', '/api/bildirisler/5')</code> ilə sorğunu yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\nlet bildirisler = [{ id: 5, mesaj: \"Yeni dərsiniz var\" }];\n\n// DELETE /api/bildirisler/:id marşrutunu yazın və 204 statusu göndərin\n\napp.simulateRequest('DELETE', '/api/bildirisler/5');\n",
            "expectedOutput": "[HTTP 204]",
            "hint": "const id = parseInt(req.params.id, 10); bildirisler = bildirisler.filter(b => b.id !== id); res.status(204).send();",
            "solutionCode": "const express = require('express');\nconst app = express();\nlet bildirisler = [{ id: 5, mesaj: \"Yeni dərsiniz var\" }];\napp.delete('/api/bildirisler/:id', (req, res) => {\n    const id = parseInt(req.params.id, 10);\n    bildirisler = bildirisler.filter(b => b.id !== id);\n    res.status(204).send();\n});\napp.simulateRequest('DELETE', '/api/bildirisler/5');"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-20-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "express.json() Middleware-nin Unudulması Səbəbilə req.body-nin Oxunmaması",
            "instruction": "Aşağıdakı Express kodunda proqramçı POST sorğusu ilə göndərilən JSON gövdəsini qəbul etmək istəyir, lakin <code>app.use(express.json())</code> middleware-ini əlavə etməyi unudub. Nəticədə <code>req.body</code> təyin edilmir və 400 xətası yaranır. Koda <code>app.use(express.json());</code> əlavə edərək xətanı aradan qaldırın.",
            "description": "Aşağıdakı Express kodunda proqramçı POST sorğusu ilə göndərilən JSON gövdəsini qəbul etmək istəyir, lakin <code>app.use(express.json())</code> middleware-ini əlavə etməyi unudub. Nəticədə <code>req.body</code> təyin edilmir və 400 xətası yaranır. Koda <code>app.use(express.json());</code> əlavə edərək xətanı aradan qaldırın.",
            "buggyCode": "const app = express();\n// XƏTA: app.use(express.json()) middleware-i unudulub!\n\napp.post('/api/istifadeciler', (req, res) => {\n  const ad = req.body ? req.body.ad : null;\n  if (!ad) {\n    res.status(400).json({ xeta: \"Ad sahəsi tələb olunur\" });\n  } else {\n    res.status(201).json({ ugur: true, istifadeci: ad });\n  }\n});\n\napp.simulateRequest('POST', '/api/istifadeciler', {\n  body: { ad: \"Kamran\" }\n});",
            "correctCode": "const app = express();\napp.use(express.json());\n\napp.post('/api/istifadeciler', (req, res) => {\n  const ad = req.body ? req.body.ad : null;\n  if (!ad) {\n    res.status(400).json({ xeta: \"Ad sahəsi tələb olunur\" });\n  } else {\n    res.status(201).json({ ugur: true, istifadeci: ad });\n  }\n});\n\napp.simulateRequest('POST', '/api/istifadeciler', {\n  body: { ad: \"Kamran\" }\n});",
            "correctOutput": "[HTTP 201] {\"ugur\":true,\"istifadeci\":\"Kamran\"}",
            "expectedOutput": "[HTTP 201] {\"ugur\":true,\"istifadeci\":\"Kamran\"}",
            "explanation": "Express.js daxil olan xam HTTP şəbəkə baytlarını avtomatik olaraq JavaScript obyektinə çevirmir. Müştərinin POST/PUT sorğusu ilə göndərdiyi JSON-u req.body-də oxumaq üçün mütləq app.use(express.json()) middleware-i qeydiyyatdan keçirilməlidir.",
            "hint": "Resurs uğurla yaradıldıqda 200 deyil, 201 Created statusu qaytarılmalıdır."
          }
        ],
        "exercise": {
          "id": "ex-20-1-1",
          "title": "Filtrlənə Bilən Resurs Kolleksiyası (GET Metodu)",
          "instruction": "Kitablar kolleksiyasında janr üzrə axtarış parametrini (req.query.janr) nəzərə alan və uyğun gələn kitabların ümumi sayı ilə birlikdə siyahısını JSON şəklində qaytaran REST marşrutunu tərtib edin.",
          "starterCode": "const app = express();\napp.use(express.json());\n\nconst kitablar = [\n  { id: 1, ad: \"JavaScript Dərinlikləri\", janr: \"IT\" },\n  { id: 2, ad: \"Node.js Arxitekturası\", janr: \"IT\" },\n  { id: 3, ad: \"Kainatın Sirri\", janr: \"Elm\" }\n];\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 200] {\"tapildi\":2,\"kitablar\":[{\"id\":1,\"ad\":\"JavaScript Dərinlikləri\",\"janr\":\"IT\"},{\"id\":2,\"ad\":\"Node.js Arxitekturası\",\"janr\":\"IT\"}]}",
          "hint": "Massiv filtrasiyası üçün filter() metodundan və tapılan elementlərin sayını tapildi sahəsində göndərməkdən istifadə edin.",
          "solutionCode": "const app = express();\napp.use(express.json());\n\nconst kitablar = [\n  { id: 1, ad: \"JavaScript Dərinlikləri\", janr: \"IT\" },\n  { id: 2, ad: \"Node.js Arxitekturası\", janr: \"IT\" },\n  { id: 3, ad: \"Kainatın Sirri\", janr: \"Elm\" }\n];\n\napp.get(\"/api/kitablar\", (req, res) => {\n  const janr = req.query.janr;\n  const netice = janr ? kitablar.filter(k => k.janr === janr) : kitablar;\n  res.status(200).json({ tapildi: netice.length, kitablar: netice });\n});\n\napp.simulateRequest(\"GET\", \"/api/kitablar?janr=IT\");"
        },
        "bugFix": {
          "id": "bug-20-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "express.json() Middleware-nin Unudulması Səbəbilə req.body-nin Oxunmaması",
          "instruction": "Aşağıdakı Express kodunda proqramçı POST sorğusu ilə göndərilən JSON gövdəsini qəbul etmək istəyir, lakin <code>app.use(express.json())</code> middleware-ini əlavə etməyi unudub. Nəticədə <code>req.body</code> təyin edilmir və 400 xətası yaranır. Koda <code>app.use(express.json());</code> əlavə edərək xətanı aradan qaldırın.",
          "description": "Aşağıdakı Express kodunda proqramçı POST sorğusu ilə göndərilən JSON gövdəsini qəbul etmək istəyir, lakin <code>app.use(express.json())</code> middleware-ini əlavə etməyi unudub. Nəticədə <code>req.body</code> təyin edilmir və 400 xətası yaranır. Koda <code>app.use(express.json());</code> əlavə edərək xətanı aradan qaldırın.",
          "buggyCode": "const app = express();\n// XƏTA: app.use(express.json()) middleware-i unudulub!\n\napp.post('/api/istifadeciler', (req, res) => {\n  const ad = req.body ? req.body.ad : null;\n  if (!ad) {\n    res.status(400).json({ xeta: \"Ad sahəsi tələb olunur\" });\n  } else {\n    res.status(201).json({ ugur: true, istifadeci: ad });\n  }\n});\n\napp.simulateRequest('POST', '/api/istifadeciler', {\n  body: { ad: \"Kamran\" }\n});",
          "correctCode": "const app = express();\napp.use(express.json());\n\napp.post('/api/istifadeciler', (req, res) => {\n  const ad = req.body ? req.body.ad : null;\n  if (!ad) {\n    res.status(400).json({ xeta: \"Ad sahəsi tələb olunur\" });\n  } else {\n    res.status(201).json({ ugur: true, istifadeci: ad });\n  }\n});\n\napp.simulateRequest('POST', '/api/istifadeciler', {\n  body: { ad: \"Kamran\" }\n});",
          "correctOutput": "[HTTP 201] {\"ugur\":true,\"istifadeci\":\"Kamran\"}",
          "expectedOutput": "[HTTP 201] {\"ugur\":true,\"istifadeci\":\"Kamran\"}",
          "explanation": "Express.js daxil olan xam HTTP şəbəkə baytlarını avtomatik olaraq JavaScript obyektinə çevirmir. Müştərinin POST/PUT sorğusu ilə göndərdiyi JSON-u req.body-də oxumaq üçün mütləq app.use(express.json()) middleware-i qeydiyyatdan keçirilməlidir.",
          "hint": "Resurs uğurla yaradıldıqda 200 deyil, 201 Created statusu qaytarılmalıdır."
        }
      },
      {
        "id": "topic-20-2",
        "title": "Tam Praktiki CRUD API İcrası və MVC Arxitekturası",
        "theory": "<h3>🔄 Tam CRUD Resurs Dövrü Nədir?</h3>\n<p><strong>CRUD</strong> — verilənlər bazası və ya resurs kolleksiyası üzərində aparılan 4 əsas əməliyyatın abbreviaturasıdır: <strong>C</strong>reate (Yaratmaq), <strong>R</strong>ead (Oxumaq), <strong>U</strong>pdate (Yeniləmək) və <strong>D</strong>elete (Silmək).</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Əməliyyat</th>\n        <th>HTTP Metodu</th>\n        <th>URL Yolu</th>\n        <th>Gözlənilən Status</th>\n        <th>Təsvir</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Create</strong></td>\n        <td><code>POST</code></td>\n        <td><code>/api/mehsullar</code></td>\n        <td class=\"result-cell\">201 Created</td>\n        <td>Yeni element yaradır və kolleksiyaya əlavə edir.</td>\n      </tr>\n      <tr>\n        <td><strong>Read (All)</strong></td>\n        <td><code>GET</code></td>\n        <td><code>/api/mehsullar</code></td>\n        <td class=\"result-cell\">200 OK</td>\n        <td>Bütün resurslar siyahısını qaytarır.</td>\n      </tr>\n      <tr>\n        <td><strong>Read (Single)</strong></td>\n        <td><code>GET</code></td>\n        <td><code>/api/mehsullar/:id</code></td>\n        <td class=\"result-cell\">200 OK / 404</td>\n        <td>ID ilə tapılan tək elementi qaytarır.</td>\n      </tr>\n      <tr>\n        <td><strong>Update</strong></td>\n        <td><code>PUT</code> / <code>PATCH</code></td>\n        <td><code>/api/mehsullar/:id</code></td>\n        <td class=\"result-cell\">200 OK / 404</td>\n        <td>Mövcud elementin xassələrini yeniləyir.</td>\n      </tr>\n      <tr>\n        <td><strong>Delete</strong></td>\n        <td><code>DELETE</code></td>\n        <td><code>/api/mehsullar/:id</code></td>\n        <td class=\"result-cell\">200 OK / 204</td>\n        <td>Elementi kolleksiyadan çıxarır.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"tip-box\">\n  <strong>🍽️ Real Həyat Bənzətməsi (Restoran Heyəti - Restaurant Staff):</strong>\n  <p><strong>Müştəri:</strong> Masada oturan qonaqdır (Frontend / Mobil tətbiq). Menyuya baxıb sifariş göndərir (<code>req</code>).</p>\n  <p><strong>Controller = Ofisiant (Waiter):</strong> Müştəridən sifarişi qəbul edir, mətbəxə ötürür və hazır yeməyi gətirir (<code>res</code>). Ofisiant heç vaxt aşpazın yerinə mətbəxdə yemək bişirmir!</p>\n  <p><strong>Model = Baş Aşpaz (Chef):</strong> Yeməyin reseptini bilir, soyuducuya (Verilənlər Bazasına) daxil olur və inqrediyentləri hazırlayır.</p>\n  <p><strong>View = Süfrə Tərtibatı:</strong> Yeməyin müştəriyə təqdim edildiyi rəsmi boşqabdır (REST API-də təmiz JSON məlumatı).</p>\n</div>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (Controller İçində Xam SQL Yazmaq - Fat Controller):</strong><br>\n  Heç vaxt Controller funksiyasının içində birbaşa <code>SELECT * FROM users WHERE ...</code> yazmayın! Controller yalnız ofisiant kimi sifarişi yönləndirməlidir. Baza ilə bütün təmaslar Model faylında funksiya kimi (məs: <code>UserModel.findById(id)</code>) təcrid olunmalıdır.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Kütləvi Mənimsətmə Zəifliyi (Mass Assignment) və BOLA/IDOR Müdafiəsi</h4>\n<p>CRUD əməliyyatları qurarkən iki ən ciddi kibertəhlükəsizlik zəifliyi tətbiqləri təhlükə altına qoyur:</p>\n\n<p><strong>1. Kütləvi Mənimsətmə Zəifliyi (Mass Assignment):</strong> Müştərinin göndərdiyi <code>req.body</code> obyektini heç bir yoxlama aparmadan birbaşa bazaya və ya obyektə mənimsətmək:</p>\n<pre><code class=\"language-javascript\">// ❌ DƏHŞƏTLİ TƏHLÜKƏ:\napp.post('/api/istifadeciler', async (req, res) => {\n  const yeniIstifadeci = await User.create(req.body); // Haker { \"rol\": \"admin\", \"balans\": 99999 } göndərə bilər!\n});\n\n// ✅ PEŞƏKAR MÜDAFİƏ (Whitelist Sahələri):\napp.post('/api/istifadeciler', async (req, res) => {\n  const { ad, email, parol } = req.body; // Yalnız icazəli sahələr süzülür\n  const yeniIstifadeci = await User.create({ ad, email, parol, rol: 'user' });\n});</code></pre>\n\n<p><strong>2. BOLA / IDOR (Broken Object Level Authorization):</strong> OWASP API Top 10 siyahısında 1 nömrəli qlobal təhlükədir. İstifadəçi öz hesabına daxil olub (tokeni var), lakin başqasına aid resursu silmək və ya dəyişmək üçün URL-dəki ID-ni dəyişir: <code>DELETE /api/orders/55</code>:</p>\n\n<div class=\"warning-box\">\n  <strong>🛡️ BOLA/IDOR Müdafiə Qalxanı:</strong><br>\n  Heç vaxt yalnız <code>WHERE id = req.params.id</code> sorğusu ilə kifayətlənməyin! Mütləq resursun cari istifadəçiyə aid olduğunu yoxlayın:\n  <pre><code class=\"language-javascript\">// ✅ MÜHƏNDİSLİK QAYDASI: Resurs sahibliyi təsdiqlənir:\nconst order = await Order.findOne({ id: req.params.id, userId: req.user.id });\nif (!order) {\n  return res.status(404).json({ xeta: \"Sifariş tapılmadı və ya sizə aid deyil\" });\n}</code></pre>\n</div>",
        "codeExamples": [
          {
            "title": "CRUD: DELETE Metodu ilə Resursun Silinməsi",
            "code": "const app = express();\nlet kurslar = [{ id: 1, ad: \"JS\" }, { id: 2, ad: \"Node\" }];\n\napp.delete('/api/kurslar/:id', (req, res) => {\n  const id = Number(req.params.id);\n  kurslar = kurslar.filter(k => k.id !== id);\n  res.status(200).json({ ugur: true, silinen: id });\n});\n\napp.simulateRequest('DELETE', '/api/kurslar/1');",
            "output": "[HTTP 200] {\"ugur\":true,\"silinen\":1}"
          },
          {
            "title": "CRUD: PUT Metodu ilə Resursun Tam Yenilənməsi",
            "code": "const app = express();\napp.use(express.json());\nlet kurs = { id: 1, ad: \"JS Əsasları\", qiymet: 50 };\n\napp.put('/api/kurslar/:id', (req, res) => {\n  kurs = { id: Number(req.params.id), ...req.body };\n  res.status(200).json({ ugur: true, kurs });\n});\n\napp.simulateRequest('PUT', '/api/kurslar/1', {\n  body: { ad: \"JS Dərinlikləri\", qiymet: 80 }\n});",
            "output": "[HTTP 200] {\"ugur\":true,\"kurs\":{\"id\":1,\"ad\":\"JS Dərinlikləri\",\"qiymet\":80}}"
          }
        ],
        "exercises": [
          {
            "id": "ex-20-2-1",
            "title": "Resursun Kolleksiyadan Xaric Edilməsi (DELETE Metodu)",
            "instruction": "Verilmiş kurslar massivindən URL parametri kimi daxil olan unikal 'id'-yə malik kursu silən, kurs tapılmadıqda 404, uğurla silindikdə isə 200 OK statusu ilə birlikdə silinən kursun 'silinenId'-sini qaytaran DELETE marşrutunu tamamlayın.",
            "starterCode": "const app = express();\nlet kurslar = [\n  { id: 101, ad: \"JavaScript Əsasları\" },\n  { id: 102, ad: \"Node.js Memarlığı\" }\n];\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 200] {\"ugur\":true,\"silinenId\":102}",
            "hint": "Elementin indeksini tapmaq üçün findIndex(), massivdən çıxarmaq üçün splice(index, 1) metodundan istifadə edin.",
            "solutionCode": "const app = express();\nlet kurslar = [\n  { id: 101, ad: \"JavaScript Əsasları\" },\n  { id: 102, ad: \"Node.js Memarlığı\" }\n];\n\napp.delete(\"/api/kurslar/:id\", (req, res) => {\n  const id = Number(req.params.id);\n  const index = kurslar.findIndex(k => k.id === id);\n  if (index === -1) {\n    return res.status(404).json({ xeta: \"Kurs tapılmadı\" });\n  }\n  kurslar.splice(index, 1);\n  res.status(200).json({ ugur: true, silinenId: id });\n});\n\napp.simulateRequest(\"DELETE\", \"/api/kurslar/102\");"
          },
          {
            "id": "ex-20-2-2",
            "title": "Model-View-Controller (MVC) Controller Qatının Qurulması",
            "instruction": "MVC arxitekturasında marşrutlar yalnız sorğunu qarşılayır, biznes məntiqi isə Controller daxilində cəmlənir. <code>telebeController</code> obyekti yaradın və onun <code>butunTelebeler(req, res)</code> metodunda <code>[{ id: 1, ad: \"Ayan\" }, { id: 2, ad: \"Murad\" }]</code> massivini <code>200</code> statusu ilə qaytarın. <code>app.get('/api/telebeler', telebeController.butunTelebeler)</code> marşrutunu təyin edin və <code>app.simulateRequest('GET', '/api/telebeler')</code> ilə çağırın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\n// telebeController obyektini və GET /api/telebeler marşrutunu yazın\n\napp.simulateRequest('GET', '/api/telebeler');\n",
            "expectedOutput": "[HTTP 200] [{\"id\":1,\"ad\":\"Ayan\"},{\"id\":2,\"ad\":\"Murad\"}]",
            "hint": "const telebeController = { butunTelebeler: (req, res) => res.status(200).json([...]) }; app.get('/api/telebeler', telebeController.butunTelebeler);",
            "solutionCode": "const express = require('express');\nconst app = express();\nconst telebeController = {\n    butunTelebeler: (req, res) => {\n        const telebeler = [{ id: 1, ad: \"Ayan\" }, { id: 2, ad: \"Murad\" }];\n        res.status(200).json(telebeler);\n    }\n};\napp.get('/api/telebeler', telebeController.butunTelebeler);\napp.simulateRequest('GET', '/api/telebeler');"
          },
          {
            "id": "ex-20-2-3",
            "title": "Qismən Yeniləmə (PATCH) və Dəyişdirilməz ID Təhlükəsizliyi",
            "instruction": "<code>PATCH /api/istifadeciler/:id</code> marşrutu yalnız göndərilən sahələri yeniləməlidir, lakin müştəri <code>id</code> parametrini dəyişməyə cəhd edərsə, <code>id</code> mütləq toxunulmaz qalmalıdır (<code>delete req.body.id</code>). <code>{ id: 10, ad: \"Kənan\", email: \"k@test.az\" }</code> obyektini qismən yeniləyin və <code>200</code> statusu ilə qaytarın. <code>app.use(express.json())</code> istifadə edin və <code>app.simulateRequest('PATCH', '/api/istifadeciler/10', { body: { ad: \"Kənan Əliyev\", id: 999 } })</code> ilə yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet user = { id: 10, ad: \"Kənan\", email: \"k@test.az\" };\n\n// PATCH /api/istifadeciler/:id marşrutunu yazın (delete updateData.id)\n\napp.simulateRequest('PATCH', '/api/istifadeciler/10', { body: { ad: \"Kənan Əliyev\", id: 999 } });\n",
            "expectedOutput": "[HTTP 200] {\"id\":10,\"ad\":\"Kənan Əliyev\",\"email\":\"k@test.az\"}",
            "hint": "const updateData = { ...req.body }; delete updateData.id; user = { ...user, ...updateData }; res.status(200).json(user);",
            "solutionCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\nlet user = { id: 10, ad: \"Kənan\", email: \"k@test.az\" };\napp.patch('/api/istifadeciler/:id', (req, res) => {\n    const id = parseInt(req.params.id, 10);\n    if (user.id !== id) return res.status(404).json({ xeta: \"Tapılmadı\" });\n    const updateData = { ...req.body };\n    delete updateData.id;\n    user = { ...user, ...updateData };\n    res.status(200).json(user);\n});\napp.simulateRequest('PATCH', '/api/istifadeciler/10', { body: { ad: \"Kənan Əliyev\", id: 999 } });"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-20-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Mövcud Olmayan Resurs Silinərkən 404 Yoxlanışının Unudulması",
            "instruction": "Aşağıdakı DELETE marşrutunda mövcud olmayan ID axtarıldıqda <code>findIndex</code> -1 qaytarır. Lakin proqramçı bu halı yoxlamadığı üçün səhvən massivin sonuncu elementi silinir və yalançı uğur mesajı verilir. Kodda yoxlama apararaq tapılmadıqda 404 status kodu ilə <code>{ xeta: \"Kurs tapılmadı\" }</code> qaytarılmasını təmin edin.",
            "description": "Aşağıdakı DELETE marşrutunda mövcud olmayan ID axtarıldıqda <code>findIndex</code> -1 qaytarır. Lakin proqramçı bu halı yoxlamadığı üçün səhvən massivin sonuncu elementi silinir və yalançı uğur mesajı verilir. Kodda yoxlama apararaq tapılmadıqda 404 status kodu ilə <code>{ xeta: \"Kurs tapılmadı\" }</code> qaytarılmasını təmin edin.",
            "buggyCode": "const app = express();\nlet kurslar = [{ id: 1, ad: \"HTML\" }, { id: 2, ad: \"CSS\" }];\n\napp.delete('/api/kurslar/:id', (req, res) => {\n  const id = Number(req.params.id);\n  const idx = kurslar.findIndex(k => k.id === id);\n  // XƏTA: idx === -1 yoxlanışı unudulub!\n  kurslar.splice(idx, 1);\n  res.status(200).json({ ugur: true });\n});\n\napp.simulateRequest('DELETE', '/api/kurslar/999');",
            "correctCode": "const app = express();\nlet kurslar = [{ id: 1, ad: \"HTML\" }, { id: 2, ad: \"CSS\" }];\n\napp.delete('/api/kurslar/:id', (req, res) => {\n  const id = Number(req.params.id);\n  const idx = kurslar.findIndex(k => k.id === id);\n  if (idx === -1) {\n    return res.status(404).json({ xeta: \"Kurs tapılmadı\" });\n  }\n  kurslar.splice(idx, 1);\n  res.status(200).json({ ugur: true });\n});\n\napp.simulateRequest('DELETE', '/api/kurslar/999');",
            "correctOutput": "[HTTP 404] {\"xeta\":\"Kurs tapılmadı\"}",
            "expectedOutput": "[HTTP 404] {\"xeta\":\"Kurs tapılmadı\"}",
            "explanation": "Silinməsi tələb olunan resurs bazada mövcud olmadıqda mütləq HTTP 404 Not Found qaytarılmalıdır. Əks halda findIndex() -1 qaytarır və splice(-1, 1) çağırıldıqda massivin sonuncu elementi səhvən silinir.",
            "hint": "if (idx === -1) şərti ilə 404 statusu və müvafiq xəta mesajını qaytarın."
          }
        ],
        "exercise": {
          "id": "ex-20-2-1",
          "title": "Resursun Kolleksiyadan Xaric Edilməsi (DELETE Metodu)",
          "instruction": "Verilmiş kurslar massivindən URL parametri kimi daxil olan unikal 'id'-yə malik kursu silən, kurs tapılmadıqda 404, uğurla silindikdə isə 200 OK statusu ilə birlikdə silinən kursun 'silinenId'-sini qaytaran DELETE marşrutunu tamamlayın.",
          "starterCode": "const app = express();\nlet kurslar = [\n  { id: 101, ad: \"JavaScript Əsasları\" },\n  { id: 102, ad: \"Node.js Memarlığı\" }\n];\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 200] {\"ugur\":true,\"silinenId\":102}",
          "hint": "Elementin indeksini tapmaq üçün findIndex(), massivdən çıxarmaq üçün splice(index, 1) metodundan istifadə edin.",
          "solutionCode": "const app = express();\nlet kurslar = [\n  { id: 101, ad: \"JavaScript Əsasları\" },\n  { id: 102, ad: \"Node.js Memarlığı\" }\n];\n\napp.delete(\"/api/kurslar/:id\", (req, res) => {\n  const id = Number(req.params.id);\n  const index = kurslar.findIndex(k => k.id === id);\n  if (index === -1) {\n    return res.status(404).json({ xeta: \"Kurs tapılmadı\" });\n  }\n  kurslar.splice(index, 1);\n  res.status(200).json({ ugur: true, silinenId: id });\n});\n\napp.simulateRequest(\"DELETE\", \"/api/kurslar/102\");"
        },
        "bugFix": {
          "id": "bug-20-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mövcud Olmayan Resurs Silinərkən 404 Yoxlanışının Unudulması",
          "instruction": "Aşağıdakı DELETE marşrutunda mövcud olmayan ID axtarıldıqda <code>findIndex</code> -1 qaytarır. Lakin proqramçı bu halı yoxlamadığı üçün səhvən massivin sonuncu elementi silinir və yalançı uğur mesajı verilir. Kodda yoxlama apararaq tapılmadıqda 404 status kodu ilə <code>{ xeta: \"Kurs tapılmadı\" }</code> qaytarılmasını təmin edin.",
          "description": "Aşağıdakı DELETE marşrutunda mövcud olmayan ID axtarıldıqda <code>findIndex</code> -1 qaytarır. Lakin proqramçı bu halı yoxlamadığı üçün səhvən massivin sonuncu elementi silinir və yalançı uğur mesajı verilir. Kodda yoxlama apararaq tapılmadıqda 404 status kodu ilə <code>{ xeta: \"Kurs tapılmadı\" }</code> qaytarılmasını təmin edin.",
          "buggyCode": "const app = express();\nlet kurslar = [{ id: 1, ad: \"HTML\" }, { id: 2, ad: \"CSS\" }];\n\napp.delete('/api/kurslar/:id', (req, res) => {\n  const id = Number(req.params.id);\n  const idx = kurslar.findIndex(k => k.id === id);\n  // XƏTA: idx === -1 yoxlanışı unudulub!\n  kurslar.splice(idx, 1);\n  res.status(200).json({ ugur: true });\n});\n\napp.simulateRequest('DELETE', '/api/kurslar/999');",
          "correctCode": "const app = express();\nlet kurslar = [{ id: 1, ad: \"HTML\" }, { id: 2, ad: \"CSS\" }];\n\napp.delete('/api/kurslar/:id', (req, res) => {\n  const id = Number(req.params.id);\n  const idx = kurslar.findIndex(k => k.id === id);\n  if (idx === -1) {\n    return res.status(404).json({ xeta: \"Kurs tapılmadı\" });\n  }\n  kurslar.splice(idx, 1);\n  res.status(200).json({ ugur: true });\n});\n\napp.simulateRequest('DELETE', '/api/kurslar/999');",
          "correctOutput": "[HTTP 404] {\"xeta\":\"Kurs tapılmadı\"}",
          "expectedOutput": "[HTTP 404] {\"xeta\":\"Kurs tapılmadı\"}",
          "explanation": "Silinməsi tələb olunan resurs bazada mövcud olmadıqda mütləq HTTP 404 Not Found qaytarılmalıdır. Əks halda findIndex() -1 qaytarır və splice(-1, 1) çağırıldıqda massivin sonuncu elementi səhvən silinir.",
          "hint": "if (idx === -1) şərti ilə 404 statusu və müvafiq xəta mesajını qaytarın."
        }
      },
      {
        "id": "topic-20-3",
        "title": "Mərkəzləşdirilmiş Xəta İdarəetməsi və Fərdi Xəta Sinifləri (AppError)",
        "theory": "<h3>🚨 Mərkəzləşdirilmiş Xəta İdarəetməsi Nədir?</h3>\n<p>Hər bir marşrut idarəedicisində ayrı-ayrılıqda <code>try...catch</code> blokları açıb fərdi formatlarda <code>res.status(500).json(...)</code> yazmaq kodun təkrarlanmasına, cavab formatlarının pərakəndəliyinə və gözlənilməz server çöküşlərinə səbəb olur.</p>\n<p>Professional Express tətbiqlərində bütün xətalar <strong>Mərkəzləşdirilmiş Xəta İdarəetmə Middleware-nə (Centralized Error Handler)</strong> yönləndirilir.</p>\n\n<div class=\"tip-box\">\n  <strong>🚨 Real Həyat Bənzətməsi (Binanın Mərkəzi Yanğın Siqnalizasiya Sistemi):</strong>\n  <p>Hər otaqda ayrıca fərqli yanğınsöndürən balon saxlayıb hərənin bir cür söndürməsi əvəzinə, binanın hər otağına tüstü sensoru quraşdırılır (<code>next(err)</code>). Hər hansı otaqda alışma olduqda mərkəzi idarəetmə mərkəzi (4-parametrli middleware) işə düşür, hadisənin dərəcəsini qiymətləndirir (status kodu) və bütün binaya vahid standart təxliyə xəbərdarlığı (JSON xəta cavabı) paylayır.</p>\n</div>\n\n<h3>1. 4-Arqumentli Xüsusi Express İmzası:</h3>\n<p>Express bir middleware-in xəta idarəedicisi olduğunu parametr sayına (<code>fn.length === 4</code>) əsasən tanıyır:</p>\n\n<pre><code class=\"language-javascript\">app.use((err, req, res, next) => {\n  const statusKodu = err.statusCode || err.status || 500;\n  res.status(statusKodu).json({\n    ugur: false,\n    xeta: err.message || \"Daxili server xətası baş verdi\",\n    statusKodu: statusKodu\n  });\n});</code></pre>\n<p><em>QEYD:</em> Hətta <code>next</code> parametrini funksiya daxilində çağırmasanız belə, Express-in onu xəta idarəedicisi kimi tanıması üçün 4 parametr də mütləq qeyd edilməlidir!</p>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (Xəta Middleware-nin Yeri və Parametr Sayı):</strong><br>\n  1. <strong>Sıra Qaydası:</strong> Mərkəzi xəta middleware-i MÜTLƏQ bütün marşrutlardan SONRA, tətbiqin ən axırında qeydiyyatdan keçirilməlidir! Əgər onu marşrutlardan əvvəl yazsanız, Express sorğuları yuxarıdan aşağıya icra etdiyi üçün o heç vaxt çağırılmayacaq.<br>\n  2. <strong>Parametr Sayı:</strong> 4 parametr (<code>err, req, res, next</code>) əvəzinə 3 parametr yazsanız, Express onu adi middleware zənn edəcək və <code>next(err)</code> çağırışında onu ötürüb keçəcəkdir!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: AppError Sinifi və Asinxron Xətaların Ötürülməsi</h4>\n<p>İstehsalat sistemlərində xətalar iki növə bölünür: proqnozlaşdırılan <strong>Əməliyyat Xətaları (Operational Errors)</strong> (məsələn: 404 resurs tapılmadı, 400 yanlış məlumat) və gözlənilməz <strong>Proqramlaşdırma Qüsurları (Programming Bugs)</strong> (məsələn: <code>TypeError: cannot read property of undefined</code>).</p>\n\n<p><strong>1. Peşəkar <code>AppError</code> Sinfinin Yaradılması:</strong></p>\n<pre><code class=\"language-javascript\">class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';\n    this.isOperational = true; // Proqnozlaşdırılan əməliyyat xətası\n\n    Error.captureStackTrace(this, this.constructor);\n  }\n}</code></pre>\n\n<p><strong>2. Express 4-də Asinxron Xəta Tələsi və <code>catchAsync</code>:</strong> Express 4 asinxron <code>async/await</code> funksiyaları daxilində atılan (throw edilən) xətaları avtomatik tutmur! Əgər <code>try/catch</code> yazmasanız, prosesdə <code>UnhandledPromiseRejection</code> yaranır və server sorğunu asılı qoyur.</p>\n\n<div class=\"warning-box\">\n  <strong>⚡ Yüksək Səviyyəli catchAsync Wrapper-i:</strong><br>\n  Hər marşrutda təkrar-təkrar <code>try/catch</code> yazmamaq üçün bütün asinxron funksiyaları əhatə edən universal wrapper istifadə olunur:\n  <pre><code class=\"language-javascript\">const catchAsync = fn => {\n  return (req, res, next) => {\n    fn(req, res, next).catch(next); // Asinxron xətanı birbaşa mərkəzi middleware-ə ötürür!\n  };\n};\n\n// İstifadəsi:\napp.get('/api/istifadeci/:id', catchAsync(async (req, res, next) => {\n  const user = await User.findById(req.params.id);\n  if (!user) return next(new AppError(\"İstifadəçi tapılmadı\", 404));\n  res.status(200).json(user);\n}));</code></pre>\n</div>",
        "codeExamples": [
          {
            "title": "next(err) ilə Xətanın Mərkəzi İdarəediciyə Ötürülməsi",
            "code": "const app = express();\n\napp.get('/api/bolme/:a/:b', (req, res, next) => {\n  const b = Number(req.params.b);\n  if (b === 0) {\n    const err = new Error(\"Sıfıra bölmək mümkün deyil\");\n    err.status = 400;\n    return next(err);\n  }\n  res.status(200).json({ netice: Number(req.params.a) / b });\n});\n\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({\n    ugur: false,\n    xeta: err.message,\n    statusKodu: err.status || 500\n  });\n});\n\napp.simulateRequest('GET', '/api/bolme/10/0');",
            "output": "[HTTP 400] {\"ugur\":false,\"xeta\":\"Sıfıra bölmək mümkün deyil\",\"statusKodu\":400}"
          },
          {
            "title": "4-Arqumentli Mərkəzləşdirilmiş Xəta Middleware-i və AppError",
            "code": "const app = express();\n\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\napp.get('/api/istifadeci/:id', (req, res, next) => {\n  return next(new AppError(\"İstifadəçi tapılmadı\", 404));\n});\n\napp.use((err, req, res, next) => {\n  res.status(err.statusCode || 500).json({\n    ugur: false,\n    xeta: err.message,\n    kod: err.statusCode || 500\n  });\n});\n\napp.simulateRequest('GET', '/api/istifadeci/99');",
            "output": "[HTTP 404] {\"ugur\":false,\"xeta\":\"İstifadəçi tapılmadı\",\"kod\":404}"
          }
        ],
        "exercises": [
          {
            "id": "ex-20-3-1",
            "title": "Mərkəzləşdirilmiş 4-Arqumentli Xəta Emalçısı",
            "instruction": "URL daxilində göndərilən arqument rəqəm olmadıqda (isNaN) Error obyekti yaradaraq next(err) ilə mərkəzləşdirilmiş xəta idarəetmə ara qatına ötürən və müvafiq 400 status kodu ilə xəta cavabı qaytaran sistemi qurun.",
            "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 400] {\"ugur\":false,\"xeta\":\"Daxil edilən parametr rəqəm olmalıdır\",\"statusKodu\":400}",
            "hint": "Xətanı növbəti emalçıya ötürmək üçün return next(err), mərkəzi middleware üçün isə app.use((err, req, res, next) => { ... }) istifadə edin.",
            "solutionCode": "const app = express();\napp.get(\"/api/kvadrat/:eded\", (req, res, next) => {\n  const eded = Number(req.params.eded);\n  if (isNaN(eded)) {\n    const err = new Error(\"Daxil edilən parametr rəqəm olmalıdır\");\n    err.statusCode = 400;\n    return next(err);\n  }\n  res.status(200).json({ netice: eded * eded });\n});\napp.use((err, req, res, next) => {\n  const statusKodu = err.statusCode || 500;\n  res.status(statusKodu).json({\n    ugur: false,\n    xeta: err.message,\n    statusKodu: statusKodu\n  });\n});\napp.simulateRequest(\"GET\", \"/api/kvadrat/salam\");"
          },
          {
            "id": "ex-20-3-2",
            "title": "Fərdi AppError Sinifinin Qurulması və İrsi Əlaqə",
            "instruction": "Node.js tətbiqlərində əməliyyat xətalarını idarə etmək üçün xüsusi xəta sinifləri istifadə olunur. Daxili <code>AppError</code> sinfindən istifadə edərək <code>new AppError(\"Məlumat tapılmadı\", 404)</code> instansiyası yaradın və konsola <code>\"Xəta: [message] | Kod: [statusCode] | Əməliyyat: [isOperational]\"</code> formatında məlumatı çıxarın.",
            "starterCode": "// AppError instansiyası yaradın və xüsusiyyətlərini konsola çıxarın\n\n",
            "expectedOutput": "Xəta: Məlumat tapılmadı | Kod: 404 | Əməliyyat: true",
            "hint": "const err = new AppError('Məlumat tapılmadı', 404); console.log(`Xəta: ${err.message} | Kod: ${err.statusCode} | Əməliyyat: ${err.isOperational}`);",
            "solutionCode": "const err = new AppError(\"Məlumat tapılmadı\", 404);\nconsole.log(`Xəta: ${err.message} | Kod: ${err.statusCode} | Əməliyyat: ${err.isOperational}`);"
          },
          {
            "id": "ex-20-3-3",
            "title": "Mərkəzi Xəta İdarəedicisi ilə Əməliyyat Xətalarının Qarşılanması",
            "instruction": "Express tətbiqində xətanı konveyerlə növbəti xəta middleware-nə ötürmək üçün <code>next(err)</code> çağırılır. <code>GET /api/test-xeta</code> marşrutu qurun və daxilində <code>new AppError(\"Verilənlər bazası bağlantısı qopdu\", 503)</code> yaradaraq <code>next(err)</code> ilə ötürün. 4 arqumentli xəta middleware-i (<code>(err, req, res, next)</code>) yazaraq <code>res.status(err.statusCode || 500).json({ ugur: false, mesaj: err.message })</code> qaytarın. <code>app.simulateRequest('GET', '/api/test-xeta')</code> ilə yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\n// GET /api/test-xeta marşrutunu və 4 arqumentli xəta middleware-ni qurun\n\napp.simulateRequest('GET', '/api/test-xeta');\n",
            "expectedOutput": "[HTTP 503] {\"ugur\":false,\"mesaj\":\"Verilənlər bazası bağlantısı qopdu\"}",
            "hint": "app.get('/api/test-xeta', (req, res, next) => next(new AppError('...', 503))); app.use((err, req, res, next) => res.status(err.statusCode).json(...));",
            "solutionCode": "const express = require('express');\nconst app = express();\napp.get('/api/test-xeta', (req, res, next) => {\n    const err = new AppError(\"Verilənlər bazası bağlantısı qopdu\", 503);\n    next(err);\n});\napp.use((err, req, res, next) => {\n    const status = err.statusCode || 500;\n    res.status(status).json({ ugur: false, mesaj: err.message });\n});\napp.simulateRequest('GET', '/api/test-xeta');"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-20-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Xəta Middleware-ində 4 Parametr Əvəzinə 3 Parametrin Yazılması",
            "instruction": "Express-də xəta idarəedici ara qatın tanınması üçün onun parametr sayı mütləq 4 olmalıdır <code>(err, req, res, next)</code>. Aşağıdakı kodda middleware səhvən 3 parametrlə təyin edildiyi üçün Express onu xəta emalçısı kimi tanımır və <code>next(err)</code> çağırıldıqda onu ötürüb keçir. Funksiyanın parametrlərini düzəldərək xətanı aradan qaldırın.",
            "description": "Express-də xəta idarəedici ara qatın tanınması üçün onun parametr sayı mütləq 4 olmalıdır <code>(err, req, res, next)</code>. Aşağıdakı kodda middleware səhvən 3 parametrlə təyin edildiyi üçün Express onu xəta emalçısı kimi tanımır və <code>next(err)</code> çağırıldıqda onu ötürüb keçir. Funksiyanın parametrlərini düzəldərək xətanı aradan qaldırın.",
            "buggyCode": "const app = express();\n\napp.get('/api/test', (req, res, next) => {\n  const err = new Error(\"Verilənlər bazası bağlantısı kəsildi\");\n  err.status = 500;\n  next(err);\n});\n\n// XƏTA: 4 parametr (err, req, res, next) əvəzinə 3 parametr (req, res, next) yazılıb!\napp.use((req, res, next) => {\n  res.status(500).json({\n    xeta: \"Verilənlər bazası bağlantısı kəsildi\",\n    merkezlesdirilmis: true\n  });\n});\n\napp.simulateRequest('GET', '/api/test');",
            "correctCode": "const app = express();\n\napp.get('/api/test', (req, res, next) => {\n  const err = new Error(\"Verilənlər bazası bağlantısı kəsildi\");\n  err.status = 500;\n  next(err);\n});\n\napp.use((err, req, res, next) => {\n  res.status(500).json({\n    xeta: \"Verilənlər bazası bağlantısı kəsildi\",\n    merkezlesdirilmis: true\n  });\n});\n\napp.simulateRequest('GET', '/api/test');",
            "correctOutput": "[HTTP 500] {\"xeta\":\"Verilənlər bazası bağlantısı kəsildi\",\"merkezlesdirilmis\":true}",
            "expectedOutput": "[HTTP 500] {\"xeta\":\"Verilənlər bazası bağlantısı kəsildi\",\"merkezlesdirilmis\":true}",
            "explanation": "Express freymvorku xəta middleware-lərini funksiyanın arqument sayına (fn.length === 4) əsasən müəyyənləşdirir. Əgər 4 arqument (err, req, res, next) yazılmasa, Express onu adi ara qat hesab edir və next(err) çağırışında onu işə salmır.",
            "hint": "Xəta middleware-nin imzası mütləq (err, req, res, next) şəklində 4 parametrdən ibarət olmalıdır."
          }
        ],
        "exercise": {
          "id": "ex-20-3-1",
          "title": "Mərkəzləşdirilmiş 4-Arqumentli Xəta Emalçısı",
          "instruction": "URL daxilində göndərilən arqument rəqəm olmadıqda (isNaN) Error obyekti yaradaraq next(err) ilə mərkəzləşdirilmiş xəta idarəetmə ara qatına ötürən və müvafiq 400 status kodu ilə xəta cavabı qaytaran sistemi qurun.",
          "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 400] {\"ugur\":false,\"xeta\":\"Daxil edilən parametr rəqəm olmalıdır\",\"statusKodu\":400}",
          "hint": "Xətanı növbəti emalçıya ötürmək üçün return next(err), mərkəzi middleware üçün isə app.use((err, req, res, next) => { ... }) istifadə edin.",
          "solutionCode": "const app = express();\napp.get(\"/api/kvadrat/:eded\", (req, res, next) => {\n  const eded = Number(req.params.eded);\n  if (isNaN(eded)) {\n    const err = new Error(\"Daxil edilən parametr rəqəm olmalıdır\");\n    err.statusCode = 400;\n    return next(err);\n  }\n  res.status(200).json({ netice: eded * eded });\n});\napp.use((err, req, res, next) => {\n  const statusKodu = err.statusCode || 500;\n  res.status(statusKodu).json({\n    ugur: false,\n    xeta: err.message,\n    statusKodu: statusKodu\n  });\n});\napp.simulateRequest(\"GET\", \"/api/kvadrat/salam\");"
        },
        "bugFix": {
          "id": "bug-20-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Xəta Middleware-ində 4 Parametr Əvəzinə 3 Parametrin Yazılması",
          "instruction": "Express-də xəta idarəedici ara qatın tanınması üçün onun parametr sayı mütləq 4 olmalıdır <code>(err, req, res, next)</code>. Aşağıdakı kodda middleware səhvən 3 parametrlə təyin edildiyi üçün Express onu xəta emalçısı kimi tanımır və <code>next(err)</code> çağırıldıqda onu ötürüb keçir. Funksiyanın parametrlərini düzəldərək xətanı aradan qaldırın.",
          "description": "Express-də xəta idarəedici ara qatın tanınması üçün onun parametr sayı mütləq 4 olmalıdır <code>(err, req, res, next)</code>. Aşağıdakı kodda middleware səhvən 3 parametrlə təyin edildiyi üçün Express onu xəta emalçısı kimi tanımır və <code>next(err)</code> çağırıldıqda onu ötürüb keçir. Funksiyanın parametrlərini düzəldərək xətanı aradan qaldırın.",
          "buggyCode": "const app = express();\n\napp.get('/api/test', (req, res, next) => {\n  const err = new Error(\"Verilənlər bazası bağlantısı kəsildi\");\n  err.status = 500;\n  next(err);\n});\n\n// XƏTA: 4 parametr (err, req, res, next) əvəzinə 3 parametr (req, res, next) yazılıb!\napp.use((req, res, next) => {\n  res.status(500).json({\n    xeta: \"Verilənlər bazası bağlantısı kəsildi\",\n    merkezlesdirilmis: true\n  });\n});\n\napp.simulateRequest('GET', '/api/test');",
          "correctCode": "const app = express();\n\napp.get('/api/test', (req, res, next) => {\n  const err = new Error(\"Verilənlər bazası bağlantısı kəsildi\");\n  err.status = 500;\n  next(err);\n});\n\napp.use((err, req, res, next) => {\n  res.status(500).json({\n    xeta: \"Verilənlər bazası bağlantısı kəsildi\",\n    merkezlesdirilmis: true\n  });\n});\n\napp.simulateRequest('GET', '/api/test');",
          "correctOutput": "[HTTP 500] {\"xeta\":\"Verilənlər bazası bağlantısı kəsildi\",\"merkezlesdirilmis\":true}",
          "expectedOutput": "[HTTP 500] {\"xeta\":\"Verilənlər bazası bağlantısı kəsildi\",\"merkezlesdirilmis\":true}",
          "explanation": "Express freymvorku xəta middleware-lərini funksiyanın arqument sayına (fn.length === 4) əsasən müəyyənləşdirir. Əgər 4 arqument (err, req, res, next) yazılmasa, Express onu adi ara qat hesab edir və next(err) çağırışında onu işə salmır.",
          "hint": "Xəta middleware-nin imzası mütləq (err, req, res, next) şəklində 4 parametrdən ibarət olmalıdır."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_20 };
}
