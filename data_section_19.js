var SECTIONS_19 = [
  {
    "id": "section-19",
    "title": "Bölmə 19: HTTP Protokolu və Express.js ilə Server Qurulması",
    "icon": "🌐",
    "topics": [
      {
        "id": "topic-19-1",
        "title": "HTTP Protokolu, Sorğu/Cavab Modeli və Status Kodları",
        "theory": "<h3>🌐 HTTP Protokolu və Müştəri-Server Rabitəsi</h3>\n<p>İnternetdə veb brauzerlər və mobil tətbiqlər (müştərilər / <strong>Clients</strong>) arxa tərəfdəki serverlərlə <strong>HTTP (HyperText Transfer Protocol)</strong> protokolu vasitəsilə ünsiyyət qururlar. HTTP — internetin universal diplomatik etiketidir: müştəri nə istədiyini dəqiq qaydalarla bəyan edir (<strong>Request</strong>), server isə nəticəni standart formatda cavablandırır (<strong>Response</strong>).</p>\n\n<div class=\"tip-box\">\n  <strong>✉️ \"Rəsmi Məktub və Zərf\" Analogiyası (HTTP Sorğusunun 4 Hissəsi):</strong>\n  <p>Hər bir HTTP sorğusu poçt vasitəsilə göndərilən rəsmi məktuba bənzəyir:</p>\n  <ul>\n    <li><strong>HTTP Metodu (Verb):</strong> Müştərinin icra etmək istədiyi niyyəti bildirən hərəkət feli (məs: <code>GET</code> \"göstər\", <code>POST</code> \"əlavə et\", <code>DELETE</code> \"sil\").</li>\n    <li><strong>URL / Resurs Yolu (Path):</strong> Müraciət edilən hədəf resurs ünvanı (məs: <code>/api/mehsullar</code> və ya <code>/api/istifadeciler/42</code>).</li>\n    <li><strong>Başlıqlar (Headers - Zərfin Üzü):</strong> Sorğu və müştəri haqqında texniki metadata (məs: <code>Content-Type: application/json</code> \"Zərfin içində JSON var\", <code>Authorization: Bearer token...</code> \"Şəxsiyyət vəsiqəm\").</li>\n    <li><strong>Gövdə (Body / Payload - Zərfin İçindəki Məktub):</strong> Əsasən <code>POST</code>, <code>PUT</code> və <code>PATCH</code> sorğularında serverə göndərilən faktiki məlumat (JSON formatında obyekt). <code>GET</code> və <code>DELETE</code> sorğularında adətən gövdə olmur.</li>\n  </ul>\n</div>\n\n<h3>Standart HTTP Status Kodları Kateqoriyaları:</h3>\n<ul>\n  <li><strong>2xx — Uğurlu Əməliyyatlar (Success):</strong>\n    <ul>\n      <li><code>200 OK</code> — Standart uğurlu cavab (əsasən GET, PUT, PATCH üçün).</li>\n      <li><code>201 Created</code> — Yeni resurs uğurla yaradıldı (POST sorğuları üçün qızıl standart).</li>\n      <li><code>204 No Content</code> — Əməliyyat uğurla icra edildi, lakin geri qaytarılacaq heç bir məlumat gövdəsi yoxdur (əsasən DELETE üçün).</li>\n    </ul>\n  </li>\n  <li><strong>4xx — Müştəri Xətaları (Client Errors):</strong>\n    <ul>\n      <li><code>400 Bad Request</code> — Sorğu sintaksisi yanlışdır və ya məcburi sahələr çatışmır.</li>\n      <li><code>401 Unauthorized</code> — Şəxsiyyət təsdiqlənməyib (giriş tokeni və ya parol yoxdur / səhvdir).</li>\n      <li><code>403 Forbidden</code> — Şəxsiyyət məlumdur, lakin bu əməliyyatı icra etmək hüququ qadağandır (məs: adi istifadəçinin admin panelinə müraciəti).</li>\n      <li><code>404 Not Found</code> — Axtarılan URL ünvanı və ya resurs ID-si serverdə tapılmadı.</li>\n    </ul>\n  </li>\n  <li><strong>5xx — Server Xətaları (Server Errors):</strong>\n    <ul>\n      <li><code>500 Internal Server Error</code> — Server tərəfində gözlənilməz proqram xətası və ya qəza baş verdi.</li>\n      <li><code>502 Bad Gateway</code> — Şəbəkə və ya proksi şlüz əlaqə xətası.</li>\n    </ul>\n  </li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (Xəta Baş Verdikdə Həmişə 200 OK Qaytarmaq Anti-Pattern-dir):</strong><br>\n  Xəta baş verdikdə status kodunu <code>200 OK</code> saxlayıb JSON daxilində <code>{ xeta: \"Məhsul tapılmadı\" }</code> göndərmək qeyri-peşəkar səhvdir! Frontend brauzerində <code>fetch</code> və ya <code>axios</code> istifadə edərkən <code>response.ok</code> yoxlanışı status 200 olduqda əməliyyatı uğurlu sayacaq və səhv biznes məntiqi icra olunacaqdır. Resurs tapılmadıqda mütləq <code>404</code>, validasiya xətasında isə <code>400</code> qaytarılmalıdır.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: İdempotentlik (Idempotence) və Təhlükəsizlik</h4>\n<p>Paylanmış sistemlərdə və mikroxidmətlərdə şəbəkə kəsilmələri qaçılmazdır. Müştəri sorğu göndərdikdə şəbəkə donarsa, eyni sorğunu təkrar göndərmək təhlükəsizdirmi? Bu suala cavab vermək üçün HTTP metodları <strong>Təhlükəsizlik (Safety)</strong> və <strong>İdempotentlik (Idempotence)</strong> xüsusiyyətlərinə görə təsnif edilir:</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>HTTP Metodu</th>\n        <th>Təhlükəsizdir? (Safe)</th>\n        <th>İdempotentdir?</th>\n        <th>Təkrar Çağırışın Təsiri</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>GET / HEAD</code></td>\n        <td>Bəli (Baza dəyişmir)</td>\n        <td>Bəli</td>\n        <td>Server vəziyyəti dəyişmir, keşləmək (caching) təhlükəsizdir.</td>\n      </tr>\n      <tr>\n        <td><code>PUT</code></td>\n        <td>Xeyr (Dəyişir)</td>\n        <td>Bəli</td>\n        <td>Bütöv resursu əvəzləyir: 1 dəfə və ya 10 dəfə çağırmaq eyni yekun vəziyyəti yaradır.</td>\n      </tr>\n      <tr>\n        <td><code>DELETE</code></td>\n        <td>Xeyr (Dəyişir)</td>\n        <td>Bəli</td>\n        <td>Resurs silinir. İlk çağırış 200/204, sonrakılar 404 versə də, bazanın son vəziyyəti dəyişmir.</td>\n      </tr>\n      <tr>\n        <td><code>POST</code></td>\n        <td>Xeyr (Dəyişir)</td>\n        <td><strong>XEYR (Təhlükəli)</strong></td>\n        <td>Hər çağırış bazada YENİ resurs yaradır (məs: kredit kartından təkrar pul çıxılması)!</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>İdempotensiya Açarları (Idempotency Keys):</strong> Şəbəkə xətası səbəbindən POST sorğusu təkrarlanarkən müştərinin bank hesabından ikiqat ödəniş çıxılmasının qarşısını almaq üçün müasir API-lər başlıqda xüsusi UUID göndərir: <code>Idempotency-Key: e9a2c3...</code>. Server bu açarla əməliyyatı Redis-də yoxlayır; əgər əməliyyat artıq icra edilibsə, təkrar icra etmədən əvvəlki uğurlu cavabı geri qaytarır.</p>",
        "codeExamples": [
          {
            "title": "HTTP Sorğu Obyektinin Qurulması və Təhlili",
            "code": "const httpRequest = {\n  method: \"POST\",\n  url: \"/api/istifadeciler\",\n  headers: {\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer gizli_token_123\"\n  },\n  body: JSON.stringify({ ad: \"Leyla\", ixtisas: \"Backend Developer\" })\n};\n\nconsole.log(\"Metod:\", httpRequest.method);\nconsole.log(\"Hədəf URL:\", httpRequest.url);\nconsole.log(\"Məzmun növü:\", httpRequest.headers[\"Content-Type\"]);",
            "output": "Metod: POST\nHədəf URL: /api/istifadeciler\nMəzmun növü: application/json"
          },
          {
            "title": "Status Koduna Görə REST Cavabının Yaradılması",
            "code": "function formatResponse(status, data) {\n  const statusTexts = {\n    200: \"OK\",\n    201: \"Created\",\n    400: \"Bad Request\",\n    404: \"Not Found\",\n    500: \"Internal Server Error\"\n  };\n\n  const text = statusTexts[status] || \"Unknown\";\n  return {\n    status: status,\n    statusText: text,\n    success: status >= 200 && status < 300,\n    body: data\n  };\n}\n\nconst cavab = formatResponse(201, { id: 101, ad: \"Yeni Kurs\" });\nconsole.log(`Cavab: ${cavab.status} ${cavab.statusText} | Uğur: ${cavab.success}`);",
            "output": "Cavab: 201 Created | Uğur: true"
          }
        ],
        "exercises": [
          {
            "id": "ex-19-1-1",
            "title": "Yeni Resurs Yaradılması üçün POST Marşrutu",
            "instruction": "Məhsullar ünvanına (\"POST /api/mehsullar\") gələn sorğuları qəbul edərək uğurlu 201 Created status kodu və müvafiq təsdiq mesajı qaytaran Express marşrutunu qurun və sınaqdan keçirin.",
            "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 201] [201 Created] Yeni mehsul yaradıldı",
            "hint": "Yeni resurs yaradılması üçün app.post(\"/api/mehsullar\", (req, res) => { res.status(201).send(\"[201 Created] Yeni mehsul yaradıldı\"); }) istifadə olunur.",
            "solutionCode": "const app = express();\napp.post(\"/api/mehsullar\", (req, res) => {\n  res.status(201).send(\"[201 Created] Yeni mehsul yaradıldı\");\n});\napp.simulateRequest(\"POST\", \"/api/mehsullar\");"
          },
          {
            "id": "ex-19-1-2",
            "title": "Status Kodlarının Semantik Seçimi (200 OK vs 404 Not Found)",
            "instruction": "Express tətbiqində istifadəçilər siyahısından ID-yə görə axtarış edən <code>GET /istifadeciler/:id</code> marşrutu qurun. Mövcud istifadəçilər: <code>[{ id: 1, ad: \"Leyla\" }, { id: 2, ad: \"Rəşad\" }]</code>. Əgər istifadəçi tapılarsa <code>200</code> statusu və JSON formatında istifadəçi məlumatını, tapılmazsa <code>404</code> statusu və <code>{ xeta: \"İstifadəçi tapılmadı\" }</code> qaytarın. Tətbiqi <code>app.simulateRequest('GET', '/istifadeciler/2')</code> ilə yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\nconst users = [\n  { id: 1, ad: \"Leyla\" },\n  { id: 2, ad: \"Rəşad\" }\n];\n\n// GET /istifadeciler/:id marşrutunu təyin edin\n\napp.simulateRequest('GET', '/istifadeciler/2');\n",
            "expectedOutput": "[HTTP 200] {\"id\":2,\"ad\":\"Rəşad\"}",
            "hint": "const id = parseInt(req.params.id, 10); const user = users.find(u => u.id === id); if (user) res.status(200).json(user); else res.status(404).json(...);",
            "solutionCode": "const express = require('express');\nconst app = express();\nconst users = [{ id: 1, ad: \"Leyla\" }, { id: 2, ad: \"Rəşad\" }];\napp.get('/istifadeciler/:id', (req, res) => {\n    const id = parseInt(req.params.id, 10);\n    const user = users.find(u => u.id === id);\n    if (user) return res.status(200).json(user);\n    res.status(404).json({ xeta: \"İstifadəçi tapılmadı\" });\n});\napp.simulateRequest('GET', '/istifadeciler/2');"
          },
          {
            "id": "ex-19-1-3",
            "title": "400 Bad Request ilə Daxil Edilən Məlumatın Təsdiqi (Payload Validation)",
            "instruction": "Müştəri tərəfindən göndərilən sorğu gövdəsini (<code>req.body</code>) yoxlayan <code>POST /hesab</code> marşrutu qurun. <code>istifadeciAdi</code> mütləq sətir olmalı və minimum 3 simvoldan ibarət olmalıdır. Şərt ödənmədikdə <code>400</code> statusu ilə <code>{ xeta: \"İstifadəçi adı minimum 3 simvol olmalıdır\" }</code>, ödəndikdə <code>201</code> statusu ilə <code>{ ugur: true, istifadeci: istifadeciAdi }</code> qaytarın. <code>app.simulateRequest('POST', '/hesab', { body: { istifadeciAdi: \"ab\" } })</code> ilə 400 cavabını yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\n// POST /hesab marşrutunu yazın və istifadəçi adının uzunluğunu yoxlayın\n\napp.simulateRequest('POST', '/hesab', { body: { istifadeciAdi: \"ab\" } });\n",
            "expectedOutput": "[HTTP 400] {\"xeta\":\"İstifadəçi adı minimum 3 simvol olmalıdır\"}",
            "hint": "if (!istifadeciAdi || istifadeciAdi.trim().length < 3) return res.status(400).json(...);",
            "solutionCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\napp.post('/hesab', (req, res) => {\n    const { istifadeciAdi } = req.body || {};\n    if (!istifadeciAdi || typeof istifadeciAdi !== 'string' || istifadeciAdi.trim().length < 3) {\n        return res.status(400).json({ xeta: \"İstifadəçi adı minimum 3 simvol olmalıdır\" });\n    }\n    res.status(201).json({ ugur: true, istifadeci: istifadeciAdi });\n});\napp.simulateRequest('POST', '/hesab', { body: { istifadeciAdi: \"ab\" } });"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-19-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Resurs Yaradılmasında Yanlış 200 OK Status Kodunun İstifadəsi",
            "instruction": "REST standartlarına görə bazada yeni resurs yaradıldıqda (POST sorğusu), server <code>200 OK</code> deyil, <code>201 Created</code> status kodu qaytarmalıdır. Aşağıdakı kodda status kodunu standart <code>201</code>-ə dəyişərək xətanı düzəldin.",
            "description": "REST standartlarına görə bazada yeni resurs yaradıldıqda (POST sorğusu), server <code>200 OK</code> deyil, <code>201 Created</code> status kodu qaytarmalıdır. Aşağıdakı kodda status kodunu standart <code>201</code>-ə dəyişərək xətanı düzəldin.",
            "buggyCode": "// XƏTA: Yeni resurs yaradıldıqda 200 deyil, 201 Created qaytarılmalıdır!\nconst httpResponse = {\n  status: 200,\n  message: \"İstifadəçi uğurla qeydiyyatdan keçdi\"\n};\n\nconsole.log(`Status: ${httpResponse.status} Created | Mesaj: ${httpResponse.message}`);",
            "correctCode": "const httpResponse = {\n  status: 201,\n  message: \"İstifadəçi uğurla qeydiyyatdan keçdi\"\n};\n\nconsole.log(`Status: ${httpResponse.status} Created | Mesaj: ${httpResponse.message}`);",
            "correctOutput": "Status: 201 Created | Mesaj: İstifadəçi uğurla qeydiyyatdan keçdi",
            "expectedOutput": "Status: 201 Created | Mesaj: İstifadəçi uğurla qeydiyyatdan keçdi",
            "explanation": "REST arxitekturasında POST sorğusu ilə yeni məlumat yaradıldıqda HTTP 201 (Created) qaytarılır. HTTP 200 isə məlumat oxunduqda (GET) və ya mövcud resurs yeniləndikdə (PUT/PATCH) istifadə edilir.",
            "hint": "res.status() status təyin edir, lakin cavabı göndərmək üçün ardınca res.json() və ya res.send() zəncirlənməlidir."
          }
        ],
        "exercise": {
          "id": "ex-19-1-1",
          "title": "Yeni Resurs Yaradılması üçün POST Marşrutu",
          "instruction": "Məhsullar ünvanına (\"POST /api/mehsullar\") gələn sorğuları qəbul edərək uğurlu 201 Created status kodu və müvafiq təsdiq mesajı qaytaran Express marşrutunu qurun və sınaqdan keçirin.",
          "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 201] [201 Created] Yeni mehsul yaradıldı",
          "hint": "Yeni resurs yaradılması üçün app.post(\"/api/mehsullar\", (req, res) => { res.status(201).send(\"[201 Created] Yeni mehsul yaradıldı\"); }) istifadə olunur.",
          "solutionCode": "const app = express();\napp.post(\"/api/mehsullar\", (req, res) => {\n  res.status(201).send(\"[201 Created] Yeni mehsul yaradıldı\");\n});\napp.simulateRequest(\"POST\", \"/api/mehsullar\");"
        },
        "bugFix": {
          "id": "bug-19-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Resurs Yaradılmasında Yanlış 200 OK Status Kodunun İstifadəsi",
          "instruction": "REST standartlarına görə bazada yeni resurs yaradıldıqda (POST sorğusu), server <code>200 OK</code> deyil, <code>201 Created</code> status kodu qaytarmalıdır. Aşağıdakı kodda status kodunu standart <code>201</code>-ə dəyişərək xətanı düzəldin.",
          "description": "REST standartlarına görə bazada yeni resurs yaradıldıqda (POST sorğusu), server <code>200 OK</code> deyil, <code>201 Created</code> status kodu qaytarmalıdır. Aşağıdakı kodda status kodunu standart <code>201</code>-ə dəyişərək xətanı düzəldin.",
          "buggyCode": "// XƏTA: Yeni resurs yaradıldıqda 200 deyil, 201 Created qaytarılmalıdır!\nconst httpResponse = {\n  status: 200,\n  message: \"İstifadəçi uğurla qeydiyyatdan keçdi\"\n};\n\nconsole.log(`Status: ${httpResponse.status} Created | Mesaj: ${httpResponse.message}`);",
          "correctCode": "const httpResponse = {\n  status: 201,\n  message: \"İstifadəçi uğurla qeydiyyatdan keçdi\"\n};\n\nconsole.log(`Status: ${httpResponse.status} Created | Mesaj: ${httpResponse.message}`);",
          "correctOutput": "Status: 201 Created | Mesaj: İstifadəçi uğurla qeydiyyatdan keçdi",
          "expectedOutput": "Status: 201 Created | Mesaj: İstifadəçi uğurla qeydiyyatdan keçdi",
          "explanation": "REST arxitekturasında POST sorğusu ilə yeni məlumat yaradıldıqda HTTP 201 (Created) qaytarılır. HTTP 200 isə məlumat oxunduqda (GET) və ya mövcud resurs yeniləndikdə (PUT/PATCH) istifadə edilir.",
          "hint": "res.status() status təyin edir, lakin cavabı göndərmək üçün ardınca res.json() və ya res.send() zəncirlənməlidir."
        }
      },
      {
        "id": "topic-19-2",
        "title": "Express.js ilə İlk Server və Marşrutlaşdırma (Routing)",
        "theory": "<h3>🚂 Express.js Nədir?</h3>\n<p><strong>Express.js</strong> — Node.js ekosistemində yüksək performanslı, çevik və minimalist veb tətbiqlər və RESTful API-lər qurmaq üçün ən populyar backend freymvorkudur. O, Node.js-in aşağı səviyyəli xam <code>http</code> modulunu rahat metodlar, avtomatik cavab formatlaşdırması və zəngin marşrutlaşdırma imkanları ilə təchiz edir.</p>\n\n<div class=\"tip-box\">\n  <strong>✈️ Real Həyat Bənzətməsi (Hava Limanının Uçuş Nəzarət Qülləsi):</strong>\n  <p>Express marşrutlaşdırıcısı hava limanının dispetçer mərkəzidir: hava limanına yaxınlaşan təyyarələrin çağırış kodunu (HTTP Metodu və URL yolunu) yoxlayır və onları dəqiq təyin olunmuş terminal qapısına (marşrut idarəedici funksiyasına — <code>route handler</code>) yönləndirir.</p>\n</div>\n\n<h3>Məlumatın Qəbul Edildiyi 3 Əsas Kanal:</h3>\n<ul>\n  <li><strong>Dinamik URL Parametrləri (<code>req.params</code>):</strong> URL şablonundakı iki nöqtə (<code>:</code>) ilə təyin olunur. Məsələn <code>/api/istifadeciler/:id</code> ünvanına <code>/api/istifadeciler/42</code> sorğusu gəldikdə, <code>req.params.id</code> dəyəri <code>\"42\"</code> olur. <em>DİQQƏT:</em> <code>req.params</code> daxilindəki bütün dəyərlər həmişə string (sətir) tipindədir!</li>\n  <li><strong>Axtarış Sorğu Parametrləri (<code>req.query</code>):</strong> URL sonundakı sual işarəsindən (<code>?</code>) sonrakı axtarış, filtr və səhifələmə parametrləridir. Məsələn <code>/api/mehsullar?kateqoriya=kitab&sirala=qiymet</code> ünvanında <code>req.query.kateqoriya === \"kitab\"</code> olur.</li>\n  <li><strong>Sorğu Gövdəsi (<code>req.body</code>):</strong> POST və PUT sorğuları ilə müştərinin göndərdiyi JSON məlumatıdır. Bunu oxumaq üçün mütləq marşrutlardan əvvəl <code>app.use(express.json())</code> qeydiyyatdan keçirilməlidir.</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (req.params ilə req.query-ni Qarışdırmaq və express.json()-u Unutmaq):</strong><br>\n  1. <strong>Qarışıqlıq:</strong> Resursun unikal kimliyi üçün query (məs: <code>/users?id=5</code> əvəzinə <code>/users/:id</code>), axtarış və filtrləmə üçün isə params işlətmək yanlışdır.<br>\n  2. <strong>Unudulmuş express.json():</strong> Əgər serverinizdə <code>app.use(express.json())</code> yazmasanız, <code>req.body</code> həmişə <code>undefined</code> qalacaq və <code>req.body.ad</code> oxumağa çalışdıqda <code>TypeError: Cannot read properties of undefined</code> qəzası baş verəcək!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Marşrut Sıralaması Tələləri (Static before Dynamic) və express.Router Modulyarlaşdırılması</h4>\n<p>Express daxilində ən çox rast gəlinən və saatlarla xəta axtarışına səbəb olan problemlərdən biri marşrutların qeydiyyat ardıcıllığıdır. Express marşrutları yuxarıdan aşağıya doğru ilk uyğunluq (first-match) prinsipi ilə yoxlayır.</p>\n\n<div class=\"warning-box\">\n  <strong>🪤 Statik vs Dinamik Sıralama Tələsi:</strong><br>\n  Təsəvvür edin ki, iki marşrutunuz var: istifadəçi profilini göstərən <code>/users/profil</code> və ID üzrə axtaran <code>/users/:id</code>.\n  <pre><code class=\"language-javascript\">// ❌ DƏHŞƏTLİ XƏTA: Dinamik marşrut üstdə yazılıb!\napp.get('/users/:id', (req, res) => {\n  res.json({ axtarilanId: req.params.id });\n});\n\napp.get('/users/profil', (req, res) => {\n  res.json({ profil: \"Şəxsi kabinet\" }); // ⚠️ BU KOD HEÇ VAXT İCRA OLUNMAYACAQ!\n});</code></pre>\n  İstifadəçi <code>/users/profil</code> səhifəsinə daxil olduqda Express <code>:id</code> şablonunun <code>\"profil\"</code> sözü ilə uyğunlaşdığını düşünür və birinci funksiyanı çağıraraq <code>{ axtarilanId: \"profil\" }</code> qaytarır!<br>\n  <strong>✅ Qızıl Qayda:</strong> Həmişə konkret/statik marşrutları (<code>/users/profil</code>, <code>/users/yeni</code>) dinamik parametrli marşrutlardan (<code>/users/:id</code>) <strong>YUXARIDA</strong> yazmalısınız.\n</div>\n\n<p><strong>Böyük Layihələrin Modulyarlaşdırılması (<code>express.Router</code>):</strong> Monolit <code>app.js</code> faylında yüzlərlə marşrut yazmaq əvəzinə, hər bir domen sahəsi üçün ayrıca marşrutlaşdırıcı yaradılır:</p>\n\n<pre><code class=\"language-javascript\">// routes/istifadeciRoutes.js\nconst express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => res.json({ istifadeciler: [] }));\nrouter.get('/:id', (req, res) => res.json({ id: req.params.id }));\n\nmodule.exports = router;\n\n// app.js daxilində qoşulması:\nconst istifadeciRouter = require('./routes/istifadeciRoutes');\napp.use('/api/v1/istifadeciler', istifadeciRouter);</code></pre>",
        "codeExamples": [
          {
            "title": "Əsas Express Serveri və GET Marşrutu",
            "code": "const app = express();\n\napp.get('/api/salam', (req, res) => {\n  res.status(200).json({ mesaj: \"Salam, Express.js!\" });\n});\n\napp.simulateRequest('GET', '/api/salam');",
            "output": "[HTTP 200] {\"mesaj\":\"Salam, Express.js!\"}"
          },
          {
            "title": "Dinamik URL Parametri (req.params) ilə Resurs Seçimi",
            "code": "const app = express();\n\napp.get('/api/mehsul/:id', (req, res) => {\n  const mehsulId = req.params.id;\n  res.status(200).json({\n    tapildi: true,\n    mehsulId: Number(mehsulId),\n    ad: \"Proqramlaşdırma Kitabı\"\n  });\n});\n\napp.simulateRequest('GET', '/api/mehsul/15');",
            "output": "[HTTP 200] {\"tapildi\":true,\"mehsulId\":15,\"ad\":\"Proqramlaşdırma Kitabı\"}"
          }
        ],
        "exercises": [
          {
            "id": "ex-19-2-1",
            "title": "Dinamik URL və Sorğu Parametrlərinin Birləşdirilməsi",
            "instruction": "URL daxilində göndərilən dinamik identifikatoru (:id) və axtarış parametrini (rol) oxuyaraq istifadəçi profilini JSON formatında qaytaran API nöqtəsini tərtib edin.",
            "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 200] {\"id\":42,\"rol\":\"Tələbə\"}",
            "hint": "URL yolu parametrləri req.params, axtarış parametrləri isə req.query obyektindən oxunur.",
            "solutionCode": "const app = express();\napp.get(\"/api/istifadeci/:id\", (req, res) => {\n  const id = Number(req.params.id);\n  const rol = req.query.rol;\n  res.status(200).json({ id, rol });\n});\napp.simulateRequest(\"GET\", \"/api/istifadeci/42?rol=Tələbə\");"
          },
          {
            "id": "ex-19-2-2",
            "title": "Sorğu Parametrləri (Query String) ilə Axtarış və Filtrləmə",
            "instruction": "Express serverində <code>GET /mehsullar</code> marşrutu qurun. Əgər <code>req.query.kateqoriya</code> göndərilibsə, yalnız həmin kateqoriyaya aid məhsulları <code>res.status(200).json(filtered)</code> ilə qaytarın, göndərilməyibsə bütün məhsulları qaytarın. <code>app.simulateRequest('GET', '/mehsullar?kateqoriya=elektronika')</code> ilə yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\nconst items = [\n  { id: 1, ad: \"Telefon\", kateqoriya: \"elektronika\" },\n  { id: 2, ad: \"Kitab\", kateqoriya: \"tehsil\" },\n  { id: 3, ad: \"Qulaqlıq\", kateqoriya: \"elektronika\" }\n];\n\n// req.query.kateqoriya filtrini qurun\n\napp.simulateRequest('GET', '/mehsullar?kateqoriya=elektronika');\n",
            "expectedOutput": "[HTTP 200] [{\"id\":1,\"ad\":\"Telefon\",\"kateqoriya\":\"elektronika\"},{\"id\":3,\"ad\":\"Qulaqlıq\",\"kateqoriya\":\"elektronika\"}]",
            "hint": "const { kateqoriya } = req.query; if (kateqoriya) return res.status(200).json(items.filter(i => i.kateqoriya === kateqoriya));",
            "solutionCode": "const express = require('express');\nconst app = express();\nconst items = [\n    { id: 1, ad: \"Telefon\", kateqoriya: \"elektronika\" },\n    { id: 2, ad: \"Kitab\", kateqoriya: \"tehsil\" },\n    { id: 3, ad: \"Qulaqlıq\", kateqoriya: \"elektronika\" }\n];\napp.get('/mehsullar', (req, res) => {\n    const { kateqoriya } = req.query;\n    if (kateqoriya) {\n        const filtered = items.filter(i => i.kateqoriya === kateqoriya);\n        return res.status(200).json(filtered);\n    }\n    res.status(200).json(items);\n});\napp.simulateRequest('GET', '/mehsullar?kateqoriya=elektronika');"
          },
          {
            "id": "ex-19-2-3",
            "title": "Çoxpilləli URL Parametrləri (Nested Resources) və Tip Yoxlanışı",
            "instruction": "Bloq platforması üçün <code>GET /kateqoriyalar/:katId/meqaleler/:meqaleId</code> marşrutu qurun. Parametrləri <code>parseInt()</code> ilə ədədə çevirin. Əgər hər hansı biri rəqəm deyilsə (<code>isNaN</code>), <code>400</code> statusu ilə <code>{ xeta: \"ID rəqəm olmalıdır\" }</code> qaytarın. Əgər hər ikisi düzgündürsə <code>200</code> statusu ilə <code>{ katId, meqaleId, status: \"tapildi\" }</code> qaytarın. <code>app.simulateRequest('GET', '/kateqoriyalar/5/meqaleler/12')</code> ilə sorğunu icra edin.",
            "starterCode": "const express = require('express');\nconst app = express();\n\n// Çoxpilləli parametrli marşrutu yazın\n\napp.simulateRequest('GET', '/kateqoriyalar/5/meqaleler/12');\n",
            "expectedOutput": "[HTTP 200] {\"katId\":5,\"meqaleId\":12,\"status\":\"tapildi\"}",
            "hint": "const katId = parseInt(req.params.katId, 10); const meqaleId = parseInt(req.params.meqaleId, 10); if (isNaN(katId) || isNaN(meqaleId)) ...",
            "solutionCode": "const express = require('express');\nconst app = express();\napp.get('/kateqoriyalar/:katId/meqaleler/:meqaleId', (req, res) => {\n    const katId = parseInt(req.params.katId, 10);\n    const meqaleId = parseInt(req.params.meqaleId, 10);\n    if (isNaN(katId) || isNaN(meqaleId)) {\n        return res.status(400).json({ xeta: \"ID rəqəm olmalıdır\" });\n    }\n    res.status(200).json({ katId, meqaleId, status: \"tapildi\" });\n});\napp.simulateRequest('GET', '/kateqoriyalar/5/meqaleler/12');"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-19-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "req.params Əvəzinə Yanlış req.param İstifadəsi",
            "instruction": "Express marşrutunda URL-dən ötürülən dinamik 'id' parametri oxunmalıdır, lakin sorğu obyektinə yanlış müraciət səbəbindən server 400 xətası qaytarır. Parametrin oxunma məntiqini araşdıraraq sorğunu bərpa edin.",
            "description": "Express marşrutunda URL-dən ötürülən dinamik 'id' parametri oxunmalıdır, lakin sorğu obyektinə yanlış müraciət səbəbindən server 400 xətası qaytarır. Parametrin oxunma məntiqini araşdıraraq sorğunu bərpa edin.",
            "buggyCode": "const app = express();\n\napp.get('/api/mehsullar/:id', (req, res) => {\n  // XƏTA: Express-də parametrlər req.param deyil, req.params obyektində saxlanılır!\n  const mehsulId = req.param ? req.param.id : undefined;\n  \n  if (!mehsulId) {\n    res.status(400).json({ xeta: \"ID parametri tapılmadı\" });\n  } else {\n    res.status(200).json({ tapildi: true, id: mehsulId });\n  }\n});\n\napp.simulateRequest('GET', '/api/mehsullar/99');",
            "correctCode": "const app = express();\n\napp.get('/api/mehsullar/:id', (req, res) => {\n  const mehsulId = req.params ? req.params.id : undefined;\n  \n  if (!mehsulId) {\n    res.status(400).json({ xeta: \"ID parametri tapılmadı\" });\n  } else {\n    res.status(200).json({ tapildi: true, id: mehsulId });\n  }\n});\n\napp.simulateRequest('GET', '/api/mehsullar/99');",
            "correctOutput": "[HTTP 200] {\"tapildi\":true,\"id\":\"99\"}",
            "expectedOutput": "[HTTP 200] {\"tapildi\":true,\"id\":\"99\"}",
            "explanation": "Express.js freymvorkunda URL-dəki dinamik hissələr (:id, :slug) 'req.params' obyektində toplanır. 'req.param' mövcud deyil və undefined qaytarır.",
            "hint": "Dinamik URL parametrləri req.params obyekti daxilində toplanır."
          }
        ],
        "exercise": {
          "id": "ex-19-2-1",
          "title": "Dinamik URL və Sorğu Parametrlərinin Birləşdirilməsi",
          "instruction": "URL daxilində göndərilən dinamik identifikatoru (:id) və axtarış parametrini (rol) oxuyaraq istifadəçi profilini JSON formatında qaytaran API nöqtəsini tərtib edin.",
          "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 200] {\"id\":42,\"rol\":\"Tələbə\"}",
          "hint": "URL yolu parametrləri req.params, axtarış parametrləri isə req.query obyektindən oxunur.",
          "solutionCode": "const app = express();\napp.get(\"/api/istifadeci/:id\", (req, res) => {\n  const id = Number(req.params.id);\n  const rol = req.query.rol;\n  res.status(200).json({ id, rol });\n});\napp.simulateRequest(\"GET\", \"/api/istifadeci/42?rol=Tələbə\");"
        },
        "bugFix": {
          "id": "bug-19-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "req.params Əvəzinə Yanlış req.param İstifadəsi",
          "instruction": "Express marşrutunda URL-dən ötürülən dinamik 'id' parametri oxunmalıdır, lakin sorğu obyektinə yanlış müraciət səbəbindən server 400 xətası qaytarır. Parametrin oxunma məntiqini araşdıraraq sorğunu bərpa edin.",
          "description": "Express marşrutunda URL-dən ötürülən dinamik 'id' parametri oxunmalıdır, lakin sorğu obyektinə yanlış müraciət səbəbindən server 400 xətası qaytarır. Parametrin oxunma məntiqini araşdıraraq sorğunu bərpa edin.",
          "buggyCode": "const app = express();\n\napp.get('/api/mehsullar/:id', (req, res) => {\n  // XƏTA: Express-də parametrlər req.param deyil, req.params obyektində saxlanılır!\n  const mehsulId = req.param ? req.param.id : undefined;\n  \n  if (!mehsulId) {\n    res.status(400).json({ xeta: \"ID parametri tapılmadı\" });\n  } else {\n    res.status(200).json({ tapildi: true, id: mehsulId });\n  }\n});\n\napp.simulateRequest('GET', '/api/mehsullar/99');",
          "correctCode": "const app = express();\n\napp.get('/api/mehsullar/:id', (req, res) => {\n  const mehsulId = req.params ? req.params.id : undefined;\n  \n  if (!mehsulId) {\n    res.status(400).json({ xeta: \"ID parametri tapılmadı\" });\n  } else {\n    res.status(200).json({ tapildi: true, id: mehsulId });\n  }\n});\n\napp.simulateRequest('GET', '/api/mehsullar/99');",
          "correctOutput": "[HTTP 200] {\"tapildi\":true,\"id\":\"99\"}",
          "expectedOutput": "[HTTP 200] {\"tapildi\":true,\"id\":\"99\"}",
          "explanation": "Express.js freymvorkunda URL-dəki dinamik hissələr (:id, :slug) 'req.params' obyektində toplanır. 'req.param' mövcud deyil və undefined qaytarır.",
          "hint": "Dinamik URL parametrləri req.params obyekti daxilində toplanır."
        }
      },
      {
        "id": "topic-19-3",
        "title": "Middleware Anlayışı, Konveyer Mexanizmi və In-Memory CRUD Tələləri",
        "theory": "<h3>⚙️ Middleware (Ara Qat) Nədir?</h3>\n<p><strong>Middleware</strong> — daxil olan HTTP sorğusu (<code>req</code>) ilə son marşrut idarəedicisi (<code>route handler</code>) arasında dayanan və konveyer xətti kimi ardıcıl işləyən funksiyalardır.</p>\n<p>Hər bir middleware funksiyası 3 parametr qəbul edir: <strong><code>(req, res, next)</code></strong>:</p>\n\n<pre><code class=\"language-javascript\">function myMiddleware(req, res, next) {\n  // 1. Sorğuya bax və ya onu zənginləşdir (məs: istifadəçini yoxla, loq yaz)\n  // 2. Növbəti mərhələyə keçmək üçün MÜTLƏQ next() çağır\n  next();\n}</code></pre>\n\n<div class=\"tip-box\">\n  <strong>🛡️ Real Həyat Bənzətməsi (Hava Limanının Təhlükəsizlik Nəzarəti):</strong>\n  <p>Sərnişin təyyarəyə (route handler) çatmazdan əvvəl ardıcıl 3 yoxlamadan keçir:</p>\n  <ol>\n    <li>Bilet və şəxsiyyət yoxlanışı (<code>next()</code>),</li>\n    <li>Metal detektor və baqaj rentgen skaneri (<code>next()</code>),</li>\n    <li>Sərhəd pasport nəzarəti (<code>next()</code>).</li>\n  </ol>\n  <p><code>next()</code> pasport nəzarətçisinin vurduğu rəsmi möhür kimidir: əgər möhür vurulmazsa, sərnişin zalda ilişib qalır (hanging request). Əgər saxta bilet aşkar edilərsə, mühafizəçi dərhal sərnişini saxlayır (<code>401 Unauthorized</code>) və onu növbəti mərhələyə buraxmır!</p>\n</div>\n\n<h3>1. next() Funksiyasının Həlledici Əhəmiyyəti:</h3>\n<ul>\n  <li>Əgər cari ara qat sorğuya birbaşa cavab vermirsə (<code>res.json()</code> göndərmirsə), növbəti mərhələyə keçmək üçün <strong>MÜTLƏQ</strong> <code>next()</code> çağırılmalıdır!</li>\n  <li>Əgər <code>next()</code> çağırılması unudularsa, sorğu havada asılı qalır (<strong>hanging request</strong>) və brauzer vaxt aşımına (timeout) uğrayır.</li>\n</ul>\n\n<h3>2. In-Memory CRUD və Niyə Server Reboot-da Məlumat İtir:</h3>\n<p>Təlim mərhələsində CRUD əməliyyatlarını sınaqdan keçirmək üçün məlumatları yaddaşda (RAM) massiv şəklində saxlayırıq (məsələn: <code>let mehsullar = [...]</code>). Lakin server <code>Ctrl+C</code> ilə dayandırıldıqda və ya yenidən başladıldıqda (restart) əməli yaddaş tamamilə sıfırlanır və bütün dəyişikliklər birdəfəlik itir. Məlumatın daimi və etibarlı saxlanması üçün verilənlər bazası (PostgreSQL / MySQL) tətbiq edilməlidir.</p>\n\n<div class=\"warning-box\">\n  <strong>⚠️ req.params.id və Tip Uyğunsuzluğu Tələsi:</strong><br>\n  URL-dən oxunan <code>req.params.id</code> həmişə <strong>string (sətir)</strong> tipindədir. Əgər massivdəki ID-lər rəqəmdirsə, sərt bərabərliklə axtarış aparmaq (<code>1 === \"1\"</code>) <code>false</code> qaytarır və resurs tapılmır! Mütləq <code>Number(req.params.id)</code> çevirməsindən istifadə edin.\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: \"Cannot set headers after they are sent\" Xətası, Auth Guards və Məlumat Qarışması (Request Contamination)</h4>\n<p>Express backend arxitekturasında tərtibatçıların qarşılaşdığı ən təhlükəli 3 istehsalat tələsi və onların peşəkar həll yolları:</p>\n\n<div class=\"warning-box\">\n  <strong>🪤 1. \"Cannot set headers after they are sent to the client\" Qəzası:</strong><br>\n  JavaScript-də <code>res.json()</code> və ya <code>res.send()</code> çağırmaq funksiyanın icrasını avtomatik <strong>DAYANDIRMIR</strong> (o, <code>return</code> deyil!). Əgər funksiya davam edib ikinci dəfə cavab göndərməyə və ya <code>next()</code> çağırmağa cəhd edərsə, Node.js <code>ERR_HTTP_HEADERS_SENT</code> xətası verərək prosesi çökdürür:\n  <pre><code class=\"language-javascript\">// ❌ XƏTA: return unudulub!\nif (!user) {\n  res.status(401).json({ xeta: \"Giriş qadağandır\" }); // Cavab getdi...\n}\n// Amma kod dayanmadı, aşağıdakı sətir də işləyib 2-ci cavabı vurur:\nres.status(200).json({ data: \"Məlumat\" }); // 💥 QƏZA!\n\n// ✅ PEŞƏKAR HƏLL: Həmişə 'return' ilə funksiyanı tərk edin!\nif (!user) {\n  return res.status(401).json({ xeta: \"Giriş qadağandır\" });\n}</code></pre>\n</div>\n\n<p><strong>2. İstehsalat Səviyyəli Auth Guard Middleware:</strong> Marşrutları qorumaq üçün universal ara qat yazılır və istifadəçi məlumatları daxil olan <code>req</code> obyektinə bərkidilir:</p>\n\n<pre><code class=\"language-javascript\">function authGuard(req, res, next) {\n  const authHeader = req.headers.authorization;\n  if (!authHeader || !authHeader.startsWith('Bearer ')) {\n    return res.status(401).json({ xeta: \"Avtorizasiya tokeni çatışmır\" });\n  }\n\n  const token = authHeader.split(' ')[1];\n  try {\n    // const payload = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = { id: 101, role: \"admin\" }; // Təsdiqlənmiş istifadəçi req-ə yazılır\n    next();\n  } catch (err) {\n    return res.status(403).json({ xeta: \"Token etibarsızdır və ya vaxtı bitib\" });\n  }\n}</code></pre>\n\n<div class=\"warning-box\">\n  <strong>🔥 3. Tək Axınlı Node.js-də Məlumat Qarışması (Request Contamination):</strong><br>\n  Node.js bütün daxil olan sorğuları tək bir hadisə dövrəsində (Event Loop) emal edir. Əgər siz sorğuya aid məlumatı modul səviyyəsində qlobal dəyişəndə saxlasanız (məsələn: <code>let cariIstifadeci = null;</code>), eyni anda minlərlə sorğu gəldikdə İstifadəçi A-nın məlumatı İstifadəçi B-nin sorğusuna sızacaqdır (Data Leakage)!<br>\n  <strong>Qızıl Qayda:</strong> Sorğuya aid hər bir parametri YALNIZ və YALNIZ həmin sorğunun <code>req</code> obyektinə (məs: <code>req.user = user</code>) yazın. <code>req</code> hər sorğu üçün unikal və təcrid olunmuşdur.\n</div>",
        "codeExamples": [
          {
            "title": "Qlobal Qeydiyyatçı (Logger Middleware) Qurulması",
            "code": "const app = express();\n\n// Qlobal Logger middleware\napp.use((req, res, next) => {\n  req.loggedTime = \"12:00\";\n  next(); // Növbəti mərhələyə keç\n});\n\napp.get('/api/test', (req, res) => {\n  res.status(200).json({ saat: req.loggedTime, status: \"Aktiv\" });\n});\n\napp.simulateRequest('GET', '/api/test');",
            "output": "[HTTP 200] {\"saat\":\"12:00\",\"status\":\"Aktiv\"}"
          },
          {
            "title": "Auth Gatekeeper ilə Qorunan Marşrut",
            "code": "const app = express();\n\n// Auth yoxlayıcı middleware\napp.use((req, res, next) => {\n  if (req.headers[\"authorization\"] === \"GizliAcar\") {\n    next();\n  } else {\n    res.status(401).json({ xeta: \"Giriş qadağandır\" });\n  }\n});\n\napp.get('/api/admin', (req, res) => {\n  res.status(200).json({ icaze: true, panel: \"Admin Dashboard\" });\n});\n\napp.simulateRequest('GET', '/api/admin', {\n  headers: { authorization: \"GizliAcar\" }\n});",
            "output": "[HTTP 200] {\"icaze\":true,\"panel\":\"Admin Dashboard\"}"
          }
        ],
        "exercises": [
          {
            "id": "ex-19-3-1",
            "title": "Avtorizasiya Tokeninin Təhlükəsiz Yoxlanışı Middleware-i",
            "instruction": "Gələn sorğunun başlıqlarında avtorizasiya tokenini yoxlayan middleware qurun; token mövcud və düzgün olduqda növbəti mərhələyə icazə verin və məxfi məlumatı müştəriyə çatdırın.",
            "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 200] {\"mesaj\":\"Məxfi məlumat\"}",
            "hint": "Başlıqları yoxlamaq üçün req.headers.authorization istifadə edilir; şərt ödəndikdə next(), əks halda 401 statusu qaytarılır.",
            "solutionCode": "const app = express();\nfunction tokenYoxla(req, res, next) {\n  if (req.headers.authorization === \"Bearer gizli-token\") {\n    next();\n  } else {\n    res.status(401).json({ xeta: \"İcazə verilmədi\" });\n  }\n}\napp.get(\"/api/mexfi\", tokenYoxla, (req, res) => {\n  res.status(200).json({ mesaj: \"Məxfi məlumat\" });\n});\napp.simulateRequest(\"GET\", \"/api/mexfi\", { headers: { authorization: \"Bearer gizli-token\" } });"
          },
          {
            "id": "ex-19-3-2",
            "title": "Sorğu İcra Vaxtını və Metodunu Qeydə Alan Logger Middleware",
            "instruction": "Daxil olan sorğuları qeyd edən qlobal middleware yazın. Middleware <code>req.sorquVaxti = Date.now()</code> parametrini <code>req</code> obyektinə əlavə etməli və <code>next()</code> çağırmalıdır. <code>GET /salam</code> marşrutunda <code>res.status(200).json({ mesaj: \"Salam Dünya\", metod: req.method })</code> qaytarın. <code>app.simulateRequest('GET', '/salam')</code> ilə yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\n// app.use ilə qlobal logger middleware-i yazın\n\napp.get('/salam', (req, res) => {\n  res.status(200).json({ mesaj: \"Salam Dünya\", metod: req.method });\n});\n\napp.simulateRequest('GET', '/salam');\n",
            "expectedOutput": "[HTTP 200] {\"mesaj\":\"Salam Dünya\",\"metod\":\"GET\"}",
            "hint": "app.use((req, res, next) => { req.sorquVaxti = Date.now(); next(); });",
            "solutionCode": "const express = require('express');\nconst app = express();\napp.use((req, res, next) => {\n    req.sorquVaxti = Date.now();\n    next();\n});\napp.get('/salam', (req, res) => {\n    res.status(200).json({ mesaj: \"Salam Dünya\", metod: req.method });\n});\napp.simulateRequest('GET', '/salam');"
          },
          {
            "id": "ex-19-3-3",
            "title": "Konveyer Zəncirində Giriş İcazəsi (Role-Based Access Control - RBAC)",
            "instruction": "İnzibatçı hüquqlarını yoxlayan <code>adminYoxla</code> middleware-i qurun. Əgər <code>req.headers['x-istifadeci-rolu'] === 'admin'</code> olarsa <code>next()</code> çağırın, əks halda <code>res.status(403).json({ xeta: \"Giriş qadağandır: İnzibatçı hüququ tələb olunur\" })</code> qaytarın. <code>GET /admin/panel</code> marşrutuna bu middleware-i bağlayın və uğurlu halda <code>{ panel: \"İdarəetmə Paneli\" }</code> qaytarın. <code>app.simulateRequest('GET', '/admin/panel', { headers: { 'x-istifadeci-rolu': 'qonaq' } })</code> ilə 403 sınağını yoxlayın.",
            "starterCode": "const express = require('express');\nconst app = express();\n\n// adminYoxla middleware-ni və /admin/panel marşrutunu yazın\n\napp.simulateRequest('GET', '/admin/panel', { headers: { 'x-istifadeci-rolu': 'qonaq' } });\n",
            "expectedOutput": "[HTTP 403] {\"xeta\":\"Giriş qadağandır: İnzibatçı hüququ tələb olunur\"}",
            "hint": "const adminYoxla = (req, res, next) => { if (req.headers['x-istifadeci-rolu'] === 'admin') return next(); res.status(403).json(...); };",
            "solutionCode": "const express = require('express');\nconst app = express();\nconst adminYoxla = (req, res, next) => {\n    const rol = req.headers['x-istifadeci-rolu'];\n    if (rol === 'admin') return next();\n    res.status(403).json({ xeta: \"Giriş qadağandır: İnzibatçı hüququ tələb olunur\" });\n};\napp.get('/admin/panel', adminYoxla, (req, res) => {\n    res.status(200).json({ panel: \"İdarəetmə Paneli\" });\n});\napp.simulateRequest('GET', '/admin/panel', { headers: { 'x-istifadeci-rolu': 'qonaq' } });"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-19-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Middleware Daxilində next() Çağırışının Unudulması Nəticəsində Sorğunun Donması",
            "instruction": "Aşağıdakı Express kodunda loqqer ara qatında (middleware) <code>next()</code> funksiyası çağırılmadığı üçün sorğu növbəti marşruta ötürülmür və server cavabsız donur. <code>next()</code> çağırışını əlavə edərək sorğunun marşrut idarəedicisinə çatmasını təmin edin.",
            "description": "Aşağıdakı Express kodunda loqqer ara qatında (middleware) <code>next()</code> funksiyası çağırılmadığı üçün sorğu növbəti marşruta ötürülmür və server cavabsız donur. <code>next()</code> çağırışını əlavə edərək sorğunun marşrut idarəedicisinə çatmasını təmin edin.",
            "buggyCode": "const app = express();\n\napp.use((req, res, next) => {\n  // XƏTA: next() çağırılmayıb! Sorğu burada donur və marşruta çata bilmir.\n  req.isLogged = true;\n});\n\napp.get('/api/salam', (req, res) => {\n  res.status(200).json({ mesaj: \"Salam, Dünya!\", logged: req.isLogged });\n});\n\napp.simulateRequest('GET', '/api/salam');",
            "correctCode": "const app = express();\n\napp.use((req, res, next) => {\n  req.isLogged = true;\n  next();\n});\n\napp.get('/api/salam', (req, res) => {\n  res.status(200).json({ mesaj: \"Salam, Dünya!\", logged: req.isLogged });\n});\n\napp.simulateRequest('GET', '/api/salam');",
            "correctOutput": "[HTTP 200] {\"mesaj\":\"Salam, Dünya!\",\"logged\":true}",
            "expectedOutput": "[HTTP 200] {\"mesaj\":\"Salam, Dünya!\",\"logged\":true}",
            "explanation": "Express middleware funksiyalarında əgər birbaşa cavab göndərilmirsə (res.json/res.send), sorğu axınını növbəti funksiyaya ötürmək üçün mütləq next() çağırılmalıdır. Əks halda müştəri heç vaxt cavab almayacaq və sorğu 'hang' edəcək.",
            "hint": "Middleware-in növbəti emalçıya keçməsi üçün next() funksiyası mütləq çağırılmalıdır."
          }
        ],
        "exercise": {
          "id": "ex-19-3-1",
          "title": "Avtorizasiya Tokeninin Təhlükəsiz Yoxlanışı Middleware-i",
          "instruction": "Gələn sorğunun başlıqlarında avtorizasiya tokenini yoxlayan middleware qurun; token mövcud və düzgün olduqda növbəti mərhələyə icazə verin və məxfi məlumatı müştəriyə çatdırın.",
          "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 200] {\"mesaj\":\"Məxfi məlumat\"}",
          "hint": "Başlıqları yoxlamaq üçün req.headers.authorization istifadə edilir; şərt ödəndikdə next(), əks halda 401 statusu qaytarılır.",
          "solutionCode": "const app = express();\nfunction tokenYoxla(req, res, next) {\n  if (req.headers.authorization === \"Bearer gizli-token\") {\n    next();\n  } else {\n    res.status(401).json({ xeta: \"İcazə verilmədi\" });\n  }\n}\napp.get(\"/api/mexfi\", tokenYoxla, (req, res) => {\n  res.status(200).json({ mesaj: \"Məxfi məlumat\" });\n});\napp.simulateRequest(\"GET\", \"/api/mexfi\", { headers: { authorization: \"Bearer gizli-token\" } });"
        },
        "bugFix": {
          "id": "bug-19-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Middleware Daxilində next() Çağırışının Unudulması Nəticəsində Sorğunun Donması",
          "instruction": "Aşağıdakı Express kodunda loqqer ara qatında (middleware) <code>next()</code> funksiyası çağırılmadığı üçün sorğu növbəti marşruta ötürülmür və server cavabsız donur. <code>next()</code> çağırışını əlavə edərək sorğunun marşrut idarəedicisinə çatmasını təmin edin.",
          "description": "Aşağıdakı Express kodunda loqqer ara qatında (middleware) <code>next()</code> funksiyası çağırılmadığı üçün sorğu növbəti marşruta ötürülmür və server cavabsız donur. <code>next()</code> çağırışını əlavə edərək sorğunun marşrut idarəedicisinə çatmasını təmin edin.",
          "buggyCode": "const app = express();\n\napp.use((req, res, next) => {\n  // XƏTA: next() çağırılmayıb! Sorğu burada donur və marşruta çata bilmir.\n  req.isLogged = true;\n});\n\napp.get('/api/salam', (req, res) => {\n  res.status(200).json({ mesaj: \"Salam, Dünya!\", logged: req.isLogged });\n});\n\napp.simulateRequest('GET', '/api/salam');",
          "correctCode": "const app = express();\n\napp.use((req, res, next) => {\n  req.isLogged = true;\n  next();\n});\n\napp.get('/api/salam', (req, res) => {\n  res.status(200).json({ mesaj: \"Salam, Dünya!\", logged: req.isLogged });\n});\n\napp.simulateRequest('GET', '/api/salam');",
          "correctOutput": "[HTTP 200] {\"mesaj\":\"Salam, Dünya!\",\"logged\":true}",
          "expectedOutput": "[HTTP 200] {\"mesaj\":\"Salam, Dünya!\",\"logged\":true}",
          "explanation": "Express middleware funksiyalarında əgər birbaşa cavab göndərilmirsə (res.json/res.send), sorğu axınını növbəti funksiyaya ötürmək üçün mütləq next() çağırılmalıdır. Əks halda müştəri heç vaxt cavab almayacaq və sorğu 'hang' edəcək.",
          "hint": "Middleware-in növbəti emalçıya keçməsi üçün next() funksiyası mütləq çağırılmalıdır."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_19 };
}
