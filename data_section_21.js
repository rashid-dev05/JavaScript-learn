var SECTIONS_21 = [
  {
    "id": "section-21",
    "title": "Bölmə 21: Verilənlər Bazası Əlaqəsi və Təhlükəsizlik Əsasları",
    "icon": "🔐",
    "topics": [
      {
        "id": "topic-21-1",
        "title": "Relyasion Verilənlər Bazası Əsasları, DDL, Açarlar və Əlaqələr (PostgreSQL / MySQL)",
        "theory": "<h3>🔐 Niyə Yaddaş Dəyişənləri (In-Memory) Yetərsizdir?</h3>\n<p>Əvvəlki bölmələrdə məlumatları JavaScript massivlərində saxlayırdıq. Lakin server hər dəfə yenidən başladıldıqda (restart) və ya qəzaya uğradıqda (crash) əməli yaddaş (RAM) tamamilə sıfırlanır və bütün istifadəçi məlumatları birdəfəlik itir. Məlumatın daimi və etibarlı saxlanması (<strong>Data Persistence</strong>) üçün <strong>Verilənlər Bazası İdarəetmə Sistemləri (DBMS)</strong> istifadə olunur.</p>\n\n<div class=\"tip-box\">\n  <strong>📖 Real Həyat Bənzətməsi (Dövlət Mühasibat Kitabı vs Sərbəst Qovluq):</strong>\n  <p><strong>SQL (PostgreSQL / MySQL)</strong> — dövlət mühasibatlıq reyestridir: hər bir səhifə xətkeşlə qrafalara bölünüb (şəxsiyyət vəsiqəsi nömrəsi, ad, məbləğ, tarix). Nömrə təkrar oluna bilməz, məbləğ xanasına hərf yazıla bilməz və hər sətir qeydiyyatdan keçməlidir.<br>\n  <strong>NoSQL (MongoDB)</strong> — sərbəst anket qovluğudur: içərisinə hər bir şəxsin özünəməxsus fərqli bəndləri olan istənilən blankı əlavə edə bilərsiniz.</p>\n</div>\n\n<h3>1. Relyasion (SQL) Verilənlər Bazaları və DDL Əmrləri:</h3>\n<ul>\n  <li><strong>Cədvəl Sxemi (Tables) və DDL (Data Definition Language):</strong> Cədvəllər dəqiq sütun tipləri və məhdudiyyətləri ilə yaradılır:\n    <pre><code class=\"language-sql\">CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  username VARCHAR(50) NOT NULL UNIQUE,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);</code></pre>\n  </li>\n  <li><strong>Sütun Tipləri:</strong> <code>INTEGER</code> (tam ədəd), <code>VARCHAR(n)</code> (məhdud sətir), <code>TEXT</code> (sərbəst mətn), <code>BOOLEAN</code> (məntiqi), <code>TIMESTAMP</code> (tarix/saat), <code>SERIAL</code> (PostgreSQL üçün avtomatik artan ID) / <code>AUTO_INCREMENT</code> (MySQL).</li>\n  <li><strong>Məhdudiyyətlər (Constraints):</strong> <code>PRIMARY KEY</code> (hər sətrin unikal identifikatoru), <code>NOT NULL</code> (boş qala bilməz), <code>UNIQUE</code> (təkrar oluna bilməz), <code>DEFAULT</code> (standart qiymət).</li>\n  <li><strong>Foreign Keys (Xarici Açarlar) və JOIN:</strong> Cədvəllər bir-biri ilə açarlar vasitəsilə əlaqələndirilir (məs: sifarişlərin istifadəçilərə bağlanması):\n    <pre><code class=\"language-sql\">CREATE TABLE orders (\n  id SERIAL PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,\n  amount NUMERIC(10, 2) NOT NULL\n);</code></pre>\n  </li>\n  <li><strong>ACID Tranzaksiya Zəmanəti:</strong> <em>Atomicity</em> (bölünməzlik — ya tam, ya heç nə), <em>Consistency</em> (uyğunluq), <em>Isolation</em> (təcridlik), <em>Durability</em> (davamlılıq).</li>\n</ul>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (WHERE Şərti Olmadan UPDATE və ya DELETE):</strong><br>\n  Ən fəlakətli təcrübəsizlik səhvi: <code>DELETE FROM users</code> və ya <code>UPDATE users SET status = 'deaktiv'</code> yazarkən <code>WHERE id = $1</code> şərtini unutmaqdır! Əgər <code>WHERE</code> yazmasanız, verilənlər bazası cədvəldəki <strong>BÜTÜN</strong> sətirləri dərhal siləcək və ya dəyişəcəkdir. İstehsalatda bu, şirkətin bütün məlumatlarının məhvi deməkdir!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: SQL vs NoSQL Memarlıq Seçimi və Tranzaksiya Rollback Qaydaları</h4>\n<p>Müasir proqram təminatı arxitekturasında düzgün verilənlər bazası seçimi və maliyyə əməliyyatlarının etibarlılığı ən mühüm mühəndislik qərarlarıdır:</p>\n\n<p><strong>1. SQL vs NoSQL Memarlıq Seçimi:</strong></p>\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Meyar</th>\n        <th>Relyasion SQL (PostgreSQL, MySQL)</th>\n        <th>Sənəd Əsaslı NoSQL (MongoDB)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Sxem Strukturu</strong></td>\n        <td>Sərt, qabaqcadan təyin olunmuş cədvəl sxemi</td>\n        <td>Çevik, dinamik JSON/BSON sənəd strukturu</td>\n      </tr>\n      <tr>\n        <td><strong>Əlaqələr</strong></td>\n        <td>Güclü Foreign Key və JOIN mexanizmi</td>\n        <td>Daxili yerləşdirmə (Embedding) və ya istinad</td>\n      </tr>\n      <tr>\n        <td><strong>Tranzaksiyalar</strong></td>\n        <td>Tam və sərt ACID standartı</td>\n        <td>Əsasən BASE (Eventually Consistent) modeli</td>\n      </tr>\n      <tr>\n        <td><strong>İstifadə Sahəsi</strong></td>\n        <td>Maliyyə, bankçılıq, e-ticarət sifarişləri</td>\n        <td>Məzmun idarəetməsi (CMS), real-vaxt loqları, kataloqlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>2. Çoxmərhələli Tranzaksiyalar və Rollback İdarəsi:</strong> Klassik bank köçürməsini nəzərdən keçirək: İstifadəçi A-nın balansından 100 AZN çıxılmalı və İstifadəçi B-nin balansına 100 AZN əlavə olunmalıdır. Əgər 1-ci sorğudan sonra serverdə qəza baş versə, A pulunu itirər, B isə ala bilməz!</p>\n\n<pre><code class=\"language-javascript\">// ✅ PEŞƏKAR ACID TRANZAKSİYASI VƏ ROLLBACK:\nconst client = await pool.connect();\ntry {\n  await client.query('BEGIN'); // Tranzaksiya başladı\n  \n  await client.query('UPDATE hesablari SET balans = balans - $1 WHERE id = $2', [100, senderId]);\n  await client.query('UPDATE hesablari SET balans = balans + $1 WHERE id = $2', [100, receiverId]);\n  \n  await client.query('COMMIT'); // Hər iki əməliyyat eyni anda bazada təsdiqlənir\n} catch (err) {\n  await client.query('ROLLBACK'); // Hər hansı xəta olduqda bütün addımlar geri qaytarılır!\n  throw err;\n} finally {\n  client.release(); // Bağlantı hovuza təhvil verilir\n}</code></pre>",
        "codeExamples": [
          {
            "title": "SQL Cədvəl Sxemi və Relyasion Model Simulyasiyası",
            "code": "// SQL Cədvəlinin sətir strukturu və Foreign Key əlaqəsi\nconst usersTable = [\n  { id: 1, ad: \"Kamran\", email: \"kamran@misal.az\" }\n];\n\nconst ordersTable = [\n  { orderId: 501, userId: 1, mebleg: 120 } // userId -> Foreign Key\n];\n\n// JOIN əməliyyatı simulyasiyası\nconst userOrder = ordersTable.map(order => {\n  const user = usersTable.find(u => u.id === order.userId);\n  return { sifaris: order.orderId, alici: user.ad, mebleg: order.mebleg };\n});\n\nconsole.log(\"Sifariş məlumatı:\", userOrder[0].sifaris, \"| Alıcı:\", userOrder[0].alici);",
            "output": "Sifariş məlumatı: 501 | Alıcı: Kamran"
          },
          {
            "title": "NoSQL (MongoDB) Sənəd Strukturu və Çevik Sxem",
            "code": "// NoSQL kolleksiyasında sərbəst sənəd strukturu\nconst mehsullarCollection = [\n  { _id: \"m1\", ad: \"Köynək\", olculer: [\"S\", \"M\", \"L\"] },\n  { _id: \"m2\", ad: \"Kitab\", sehifeSayi: 320, muellif: \"N. Tusi\" } // fərqli sahələr\n];\n\nconsole.log(\"1-ci sənəd sahələri:\", Object.keys(mehsullarCollection[0]));\nconsole.log(\"2-ci sənəd sahələri:\", Object.keys(mehsullarCollection[1]));",
            "output": "1-ci sənəd sahələri: [ '_id', 'ad', 'olculer' ]\n2-ci sənəd sahələri: [ '_id', 'ad', 'sehifeSayi', 'muellif' ]"
          }
        ],
        "exercises": [
          {
            "id": "ex-21-1-1",
            "title": "Layihə Tələblərinə Uyğun Baza Memarlığının Seçilməsi",
            "instruction": "Maliyyə və ya e-ticarət tələbləri üçün etibarlı SQL bazasını, xəbər və ya qeydlər axını üçün isə çevik NoSQL strukturunu təyin edib konsola müvafiq texniki tövsiyəni göndərən <code>secBazaTipi</code> funksiyasını tərtib edin.",
            "starterCode": "function secBazaTipi(layiheTelebi) {\n  // Kodunuzu buraya yazın\n}\n\nsecBazaTipi(\"maliyye\");\n",
            "expectedOutput": "[SQL] Relyasion baza və ACID tranzaksiyaları tövsiyə olunur (PostgreSQL)",
            "hint": "Strukturlaşdırılmış və ACID tələb edən sistemlər üçün SQL (PostgreSQL), çevik sənəd yönümlü sistemlər üçün isə NoSQL (MongoDB) seçilir.",
            "solutionCode": "function secBazaTipi(layiheTelebi) {\n  if (layiheTelebi === \"maliyye\" || layiheTelebi === \"e-ticarat\") {\n    console.log(\"[SQL] Relyasion baza və ACID tranzaksiyaları tövsiyə olunur (PostgreSQL)\");\n  } else if (layiheTelebi === \"xeber_lenti\" || layiheTelebi === \"real_vaxt_loq\") {\n    console.log(\"[NoSQL] Sənəd əsaslı çevik baza tövsiyə olunur (MongoDB)\");\n  } else {\n    console.log(\"[Təhlil] Tələblər dəqiqləşdirilməlidir\");\n  }\n}\n\nsecBazaTipi(\"maliyye\");"
          },
          {
            "id": "ex-21-1-2",
            "title": "Relyasion Cədvəl Strukturu (DDL - CREATE TABLE) və Məhdudiyyətlər",
            "instruction": "İstifadəçilər üçün PostgreSQL cədvəli tərtib edən DDL sxemini təhlil edin. Cədvəldə <code>id</code> (SERIAL PRIMARY KEY), <code>ad</code> (VARCHAR(100) NOT NULL), <code>email</code> (VARCHAR(255) UNIQUE NOT NULL), <code>yash</code> (INT CHECK (yash >= 18)) sahələri var. Konsola <code>\"Cədvəl: [ad] | Unikal sahə: email | Minimal yaş: 18\"</code> çıxarın.",
            "starterCode": "const tableSchema = {\n  name: \"istifadeciler\",\n  columns: {\n    id: \"SERIAL PRIMARY KEY\",\n    ad: \"VARCHAR(100) NOT NULL\",\n    email: \"VARCHAR(255) UNIQUE NOT NULL\",\n    yash: \"INT CHECK (yash >= 18)\"\n  }\n};\n\n// Cədvəl təfərrüatlarını konsola çıxarın\n",
            "expectedOutput": "Cədvəl: istifadeciler | Unikal sahə: email | Minimal yaş: 18",
            "hint": "console.log(`Cədvəl: ${tableSchema.name} | Unikal sahə: email | Minimal yaş: 18`);",
            "solutionCode": "const tableSchema = {\n    name: \"istifadeciler\",\n    columns: {\n        id: \"SERIAL PRIMARY KEY\",\n        ad: \"VARCHAR(100) NOT NULL\",\n        email: \"VARCHAR(255) UNIQUE NOT NULL\",\n        yash: \"INT CHECK (yash >= 18)\"\n    }\n};\nconsole.log(`Cədvəl: ${tableSchema.name} | Unikal sahə: email | Minimal yaş: 18`);"
          },
          {
            "id": "ex-21-1-3",
            "title": "ACID Tranzaksiyaları (BEGIN, COMMIT, ROLLBACK) ilə Təhlükəsiz Pul Köçürməsi",
            "instruction": "Maliyyə əməliyyatlarında tranzaksiyanın tamlığı şərtdir. <code>hesabdanKocur(balans, mebleg)</code> funksiyası simulyasiyası qurun. Əgər göndərənin balansı köçürülən məbləğdən az olarsa tranzaksiya ləğv edilməli (<code>\"ROLLBACK (Kifayət qədər vəsait yoxdur)\"</code>), əks halda təsdiqlənməlidir (<code>\"COMMIT (Uğurla tamamlandı)\"</code>). 100 AZN balansdan 50 AZN və 150 AZN köçürmələrini konsola çıxarın.",
            "starterCode": "function hesabdanKocur(balans, mebleg) {\n  // Balans məbləğdən az olduqda ROLLBACK, kifayət etdikdə COMMIT qaytarın\n}\n\nconsole.log(`Köçürmə 1 (100 AZN / 50 AZN): ${hesabdanKocur(100, 50)}`);\nconsole.log(`Köçürmə 2 (100 AZN / 150 AZN): ${hesabdanKocur(100, 150)}`);\n",
            "expectedOutput": "Köçürmə 1 (100 AZN / 50 AZN): COMMIT (Uğurla tamamlandı)\nKöçürmə 2 (100 AZN / 150 AZN): ROLLBACK (Kifayət qədər vəsait yoxdur)",
            "hint": "if (balans < mebleg) return 'ROLLBACK (Kifayət qədər vəsait yoxdur)'; return 'COMMIT (Uğurla tamamlandı)';",
            "solutionCode": "function hesabdanKocur(balans, mebleg) {\n    let status = \"BEGIN\";\n    if (balans < mebleg) {\n        status = \"ROLLBACK (Kifayət qədər vəsait yoxdur)\";\n    } else {\n        status = \"COMMIT (Uğurla tamamlandı)\";\n    }\n    return status;\n}\nconsole.log(`Köçürmə 1 (100 AZN / 50 AZN): ${hesabdanKocur(100, 50)}`);\nconsole.log(`Köçürmə 2 (100 AZN / 150 AZN): ${hesabdanKocur(100, 150)}`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-21-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Relyasion Cədvəldə Unikal Açara (Primary Key) Dublikat Əlavə Edilməsi Xətası",
            "instruction": "SQL bazalarında hər bir sətir unikal Primary Key (məsələn <code>id</code>) daşımalıdır. Aşağıdakı cədvəl simulyasiyasında proqramçı eyni <code>id: 1</code> dəyərinə malik iki fərqli istifadəçi əlavə etməyə çalışır və Unique Constraint xətası alır. İkinci istifadəçinin ID-sini unikal <code>2</code> dəyərinə dəyişərək xətanı aradan qaldırın.",
            "description": "SQL bazalarında hər bir sətir unikal Primary Key (məsələn <code>id</code>) daşımalıdır. Aşağıdakı cədvəl simulyasiyasında proqramçı eyni <code>id: 1</code> dəyərinə malik iki fərqli istifadəçi əlavə etməyə çalışır və Unique Constraint xətası alır. İkinci istifadəçinin ID-sini unikal <code>2</code> dəyərinə dəyişərək xətanı aradan qaldırın.",
            "buggyCode": "const usersTable = [];\n\nfunction insertUser(id, email) {\n  const exists = usersTable.some(u => u.id === id);\n  if (exists) {\n    console.log(`[SQL Xətası] PRIMARY KEY təkrar oluna bilməz! ID: ${id}`);\n    return;\n  }\n  usersTable.push({ id, email });\n  console.log(`[SQL] Uğurla əlavə edildi: ID ${id} (${email})`);\n}\n\ninsertUser(1, \"ali@misal.az\");\n// XƏTA: Dublikat Primary Key ID: 1\ninsertUser(1, \"ayten@misal.az\");",
            "correctCode": "const usersTable = [];\n\nfunction insertUser(id, email) {\n  const exists = usersTable.some(u => u.id === id);\n  if (exists) {\n    console.log(`[SQL Xətası] PRIMARY KEY təkrar oluna bilməz! ID: ${id}`);\n    return;\n  }\n  usersTable.push({ id, email });\n  console.log(`[SQL] Uğurla əlavə edildi: ID ${id} (${email})`);\n}\n\ninsertUser(1, \"ali@misal.az\");\ninsertUser(2, \"ayten@misal.az\");",
            "correctOutput": "[SQL] Uğurla əlavə edildi: ID 1 (ali@misal.az)\n[SQL] Uğurla əlavə edildi: ID 2 (ayten@misal.az)",
            "expectedOutput": "[SQL] Uğurla əlavə edildi: ID 1 (ali@misal.az)\n[SQL] Uğurla əlavə edildi: ID 2 (ayten@misal.az)",
            "explanation": "Relyasion verilənlər bazalarında cədvəlin əsas açarı (PRIMARY KEY) mütləq unikal olmalıdır və heç vaxt dublikat dəyər qəbul edə bilməz.",
            "hint": "İkinci insertUser çağırışında id parametrini fərqli rəqəmlə (2) əvəz edin."
          }
        ],
        "exercise": {
          "id": "ex-21-1-1",
          "title": "Layihə Tələblərinə Uyğun Baza Memarlığının Seçilməsi",
          "instruction": "Maliyyə və ya e-ticarət tələbləri üçün etibarlı SQL bazasını, xəbər və ya qeydlər axını üçün isə çevik NoSQL strukturunu təyin edib konsola müvafiq texniki tövsiyəni göndərən <code>secBazaTipi</code> funksiyasını tərtib edin.",
          "starterCode": "function secBazaTipi(layiheTelebi) {\n  // Kodunuzu buraya yazın\n}\n\nsecBazaTipi(\"maliyye\");\n",
          "expectedOutput": "[SQL] Relyasion baza və ACID tranzaksiyaları tövsiyə olunur (PostgreSQL)",
          "hint": "Strukturlaşdırılmış və ACID tələb edən sistemlər üçün SQL (PostgreSQL), çevik sənəd yönümlü sistemlər üçün isə NoSQL (MongoDB) seçilir.",
          "solutionCode": "function secBazaTipi(layiheTelebi) {\n  if (layiheTelebi === \"maliyye\" || layiheTelebi === \"e-ticarat\") {\n    console.log(\"[SQL] Relyasion baza və ACID tranzaksiyaları tövsiyə olunur (PostgreSQL)\");\n  } else if (layiheTelebi === \"xeber_lenti\" || layiheTelebi === \"real_vaxt_loq\") {\n    console.log(\"[NoSQL] Sənəd əsaslı çevik baza tövsiyə olunur (MongoDB)\");\n  } else {\n    console.log(\"[Təhlil] Tələblər dəqiqləşdirilməlidir\");\n  }\n}\n\nsecBazaTipi(\"maliyye\");"
        },
        "bugFix": {
          "id": "bug-21-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Relyasion Cədvəldə Unikal Açara (Primary Key) Dublikat Əlavə Edilməsi Xətası",
          "instruction": "SQL bazalarında hər bir sətir unikal Primary Key (məsələn <code>id</code>) daşımalıdır. Aşağıdakı cədvəl simulyasiyasında proqramçı eyni <code>id: 1</code> dəyərinə malik iki fərqli istifadəçi əlavə etməyə çalışır və Unique Constraint xətası alır. İkinci istifadəçinin ID-sini unikal <code>2</code> dəyərinə dəyişərək xətanı aradan qaldırın.",
          "description": "SQL bazalarında hər bir sətir unikal Primary Key (məsələn <code>id</code>) daşımalıdır. Aşağıdakı cədvəl simulyasiyasında proqramçı eyni <code>id: 1</code> dəyərinə malik iki fərqli istifadəçi əlavə etməyə çalışır və Unique Constraint xətası alır. İkinci istifadəçinin ID-sini unikal <code>2</code> dəyərinə dəyişərək xətanı aradan qaldırın.",
          "buggyCode": "const usersTable = [];\n\nfunction insertUser(id, email) {\n  const exists = usersTable.some(u => u.id === id);\n  if (exists) {\n    console.log(`[SQL Xətası] PRIMARY KEY təkrar oluna bilməz! ID: ${id}`);\n    return;\n  }\n  usersTable.push({ id, email });\n  console.log(`[SQL] Uğurla əlavə edildi: ID ${id} (${email})`);\n}\n\ninsertUser(1, \"ali@misal.az\");\n// XƏTA: Dublikat Primary Key ID: 1\ninsertUser(1, \"ayten@misal.az\");",
          "correctCode": "const usersTable = [];\n\nfunction insertUser(id, email) {\n  const exists = usersTable.some(u => u.id === id);\n  if (exists) {\n    console.log(`[SQL Xətası] PRIMARY KEY təkrar oluna bilməz! ID: ${id}`);\n    return;\n  }\n  usersTable.push({ id, email });\n  console.log(`[SQL] Uğurla əlavə edildi: ID ${id} (${email})`);\n}\n\ninsertUser(1, \"ali@misal.az\");\ninsertUser(2, \"ayten@misal.az\");",
          "correctOutput": "[SQL] Uğurla əlavə edildi: ID 1 (ali@misal.az)\n[SQL] Uğurla əlavə edildi: ID 2 (ayten@misal.az)",
          "expectedOutput": "[SQL] Uğurla əlavə edildi: ID 1 (ali@misal.az)\n[SQL] Uğurla əlavə edildi: ID 2 (ayten@misal.az)",
          "explanation": "Relyasion verilənlər bazalarında cədvəlin əsas açarı (PRIMARY KEY) mütləq unikal olmalıdır və heç vaxt dublikat dəyər qəbul edə bilməz.",
          "hint": "İkinci insertUser çağırışında id parametrini fərqli rəqəmlə (2) əvəz edin."
        }
      },
      {
        "id": "topic-21-2",
        "title": "Əlaqə Hovuzu (Connection Pooling), db.js Modulu və .env Məxfiliyi",
        "theory": "<h3>🏊 Əlaqə Hovuzu (Connection Pooling) Nədir?</h3>\n<p>Verilənlər bazasına yeni TCP/IP bağlantısı açmaq və SSL əl sıxması (handshake) aparmaq server üçün çox baha başa gələn və yavaş əməliyyatdır. Hər bir HTTP sorğusu üçün yeni baza əlaqəsi açıb sorğudan sonra bağlamaq sistem resurslarını sürətlə tükəndirir.</p>\n<p>Bu problemi aradan qaldırmaq üçün <strong>Əlaqə Hovuzu (Connection Pool)</strong> tətbiq olunur. Server işə düşərkən qabaqcadan müəyyən sayda aktiv baza bağlantısı (məs: 20 ədəd) yaradıb hazır saxlayır.</p>\n\n<div class=\"tip-box\">\n  <strong>🚕 Real Həyat Bənzətməsi (Taksi Dayanacağı):</strong>\n  <p>Hər bir müştəri şəhərə çıxmaq istədikdə sıfırdan təzə maşın yığdırmır! Taksi dayanacağında hazır gözləyən maşınlardan birinə oturur, mənzil başına çatır və maşını növbəti sərnişin üçün dayanacağa təhvil verir (<code>client.release()</code>).</p>\n</div>\n\n<h3>1. Mərkəzləşdirilmiş db.js Modulu:</h3>\n<pre><code class=\"language-javascript\">// config/db.js\nconst { Pool } = require('pg');\n\nconst pool = new Pool({\n  host: process.env.DB_HOST,\n  port: process.env.DB_PORT || 5432,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD,\n  database: process.env.DB_NAME,\n  max: 20 // Hovuzdakı maksimum aktiv əlaqə sayı\n});\n\nmodule.exports = {\n  query: (text, params) => pool.query(text, params)\n};</code></pre>\n\n<div class=\"warning-box\">\n  <strong>⚠️ Tələyə Düşmə! (Konfiqurasiya Şifrələrini Koda Hardcode Etmək):</strong><br>\n  Baza istifadəçi adı və şifrəsini heç vaxt JavaScript kodunun içinə birbaşa yazmayın! Bütün məxfi parametrlər layihənin kök qovluğundakı <strong><code>.env</code></strong> faylında saxlanmalı və <code>dotenv</code> paketi ilə oxunmalıdır. Həmçinin <code>.env</code> faylının <strong><code>.gitignore</code></strong>-a əlavə edildiyindən 100% əmin olun!\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: Client Sızması (Connection Leak) və Multiple-Pool Tələləri</h4>\n<p>Node.js backend sistemlərində verilənlər bazası ilə işləyərkən ən çox server çöküşlərinə səbəb olan iki kritik səhv:</p>\n\n<div class=\"warning-box\">\n  <strong>🪤 1. Müştəri Sızması (Connection Leak) və Serverin Donması:</strong><br>\n  Əgər tranzaksiya üçün hovuzdan xüsusi müştəri (client) götürsəniz (<code>const client = await pool.connect()</code>), işiniz bitdikdə onu <strong>MÜTLƏQ</strong> hovuza qaytarmalısınız (<code>client.release()</code>). Əgər funksiya xəta verib <code>release()</code> çağırılmadan çıxarsa, həmin əlaqə havada asılı qalır.<br>\n  20 sorğudan sonra hovuzdakı bütün bağlantılar \"sızmış\" (leak) olacaq və 21-ci sorğudan etibarən bütün server əbədi donacaqdır!<br>\n  <strong>✅ Qızıl Həll:</strong> Həmişə <code>client.release()</code> çağırışını <code>try...finally</code> blokunun <strong><code>finally</code></strong> hissəsində yazın.\n</div>\n\n<p><strong>2. Çoxsaylı Hovuz (Multiple-Pool) Anti-Pattern-i:</strong> Təcrübəsiz developerlər bəzən hər bir Controller və ya marşrut daxilində <code>new Pool()</code> yaradırlar:</p>\n<pre><code class=\"language-javascript\">// ❌ DƏHŞƏTLİ XƏTA: Hər sorğuda yeni hovuz yaranır!\napp.get('/api/users', async (req, res) => {\n  const pool = new Pool(); // 💥 Hər istifadəçi üçün 20 yeni bağlantı açılır!\n  const users = await pool.query('SELECT * FROM users');\n  res.json(users.rows);\n});</code></pre>\n<p>Eyni vaxtda 50 sorğu gəldikdə $50 \times 20 = 1000$ əlaqə açılır və PostgreSQL dərhal <code>FATAL: sorry, too many clients already</code> xətası verərək bütün verilənlər bazasını söndürür. <code>Pool</code> tətbiqdə YALNIZ BİR DƏFƏ (Singleton) yaradılmalı və bütün layihə boyu paylaşılmalıdır.</p>",
        "codeExamples": [
          {
            "title": "Mərkəzi db.js və Pool Sorğusu Simulyasiyası",
            "code": "const db = {\n  async query(sql, params) {\n    return { rows: [{ id: 1, ad: params[0] }] };\n  }\n};\n\nconst netice = await db.query('SELECT * FROM users WHERE name = $1', ['Kamran']);\nconsole.log('Tapılan istifadəçi:', netice.rows[0].ad);",
            "output": "Tapılan istifadəçi: Kamran"
          },
          {
            "title": "dotenv ilə Mühit Dəyişənlərinin Oxunması",
            "code": "const config = {\n  host: process.env.DB_HOST || 'localhost',\n  port: process.env.DB_PORT || 5432,\n  dbName: process.env.DB_NAME || 'test_db'\n};\n\nconsole.log(`Baza Konfiqurasiyası: ${config.host}:${config.port}/${config.dbName}`);",
            "output": "Baza Konfiqurasiyası: localhost:5432/test_db"
          }
        ],
        "exercises": [
          {
            "id": "ex-21-2-1",
            "title": "Təhlükəsiz Parametrləşdirilmiş SQL Sorğusu",
            "instruction": "Təhlükəsizlik qaydalarına uyğun olaraq verilənlər bazası adını mühit dəyişənindən oxuyan və müəyyən edilmiş istifadəçi adını formatlanmış şəkildə \"Baza: [baza] | İstifadəçi: [istifadeci]\" konsola çıxaran skripti tamamlayın.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Baza: jsoyren_db | İstifadəçi: Nigar",
            "hint": "process.env.DB_NAME mühit dəyişəninə \"jsoyren_db\" dəyərini mənimsədin və istifadəçi adını sətir şablonu ilə birləşdirin.",
            "solutionCode": "process.env.DB_NAME = \"jsoyren_db\";\nconst user = \"Nigar\";\nconsole.log(`Baza: ${process.env.DB_NAME} | İstifadəçi: ${user}`);"
          },
          {
            "id": "ex-21-2-2",
            "title": "pg.Pool ilə Əlaqə Konfiqurasiyası və .env Dəyərlərinin Birləşdirilməsi",
            "instruction": "PostgreSQL əlaqə hovuzu üçün konfiqurasiya obyektini <code>process.env</code> dəyişənlərindən formalaşdırın: <code>user</code>, <code>host</code>, <code>database</code>, <code>port</code> (fallback: 5432). Formata uyğun konfiqurasiyanı <code>\"Bağlantı: [user]@[host]:[port]/[database]\"</code> formatında konsola çıxarın.",
            "starterCode": "// process.env-dən DB_USER, DB_HOST, DB_PORT, DB_NAME oxuyun və konfiqurasiya sətrini çap edin\n\n",
            "expectedOutput": "Bağlantı: postgres@localhost:5432/jsoyren_db",
            "hint": "const poolConfig = { user: process.env.DB_USER || 'postgres', host: process.env.DB_HOST || 'localhost', ... };",
            "solutionCode": "const poolConfig = {\n    user: process.env.DB_USER || 'postgres',\n    host: process.env.DB_HOST || 'localhost',\n    database: process.env.DB_NAME || 'jsoyren_db',\n    port: parseInt(process.env.DB_PORT || '5432', 10),\n    max: 10,\n    idleTimeoutMillis: 30000\n};\nconsole.log(`Bağlantı: ${poolConfig.user}@${poolConfig.host}:${poolConfig.port}/${poolConfig.database}`);"
          },
          {
            "id": "ex-21-2-3",
            "title": "Müştəri Əlaqəsinin Rezervasiyası və client.release() Təminatı",
            "instruction": "Verilənlər bazası hovuzunda ayrılmış müştəri əlaqəsi mütləq <code>finally</code> blokunda <code>client.release()</code> ilə azad edilməlidir. <code>dbTransaction(simulateError)</code> funksiyası simulyasiyası yazın və <code>finally</code> blokunda <code>\"Müştəri hovuza qaytarıldı (released): true\"</code> mesajını konsola çıxarın.",
            "starterCode": "async function dbTransaction(simulateError = false) {\n  let clientReleased = false;\n  try {\n    // Tranzaksiya əməliyyatı\n  } catch (err) {\n    // Xəta idarəetməsi\n  } finally {\n    // client.release() çağırışı\n  }\n}\n\ndbTransaction(false);\n",
            "expectedOutput": "Müştəri hovuza qaytarıldı (released): true",
            "hint": "finally { clientReleased = true; console.log('Müştəri hovuza qaytarıldı (released): ' + clientReleased); }",
            "solutionCode": "async function dbTransaction(simulateError = false) {\n    let clientReleased = false;\n    try {\n        if (simulateError) throw new Error(\"SQL Xətası\");\n        return \"Tranzaksiya uğurlu\";\n    } catch(err) {\n        return `Xəta baş verdi: ${err.message}`;\n    } finally {\n        clientReleased = true;\n        console.log(\"Müştəri hovuza qaytarıldı (released): \" + clientReleased);\n    }\n}\ndbTransaction(false);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-21-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "SQL Injection Zəifliyi Yaradan Template Literal Sorğusunun Düzəldilməsi",
            "instruction": "Aşağıdakı kodda istifadəçi adı birbaşa SQL sorğu sətirinin içinə şablon hərfi (${istifadeciAdi}) ilə birləşdirildiyi üçün SQL Injection boşluğu yaranır. Sorğunu parametrləşdirilmiş sorğuya ($1 yer tutucusu və parametrlər massivi) çevirərək təhlükəsiz hala gətirin.",
            "description": "Aşağıdakı kodda istifadəçi adı birbaşa SQL sorğu sətirinin içinə şablon hərfi (${istifadeciAdi}) ilə birləşdirildiyi üçün SQL Injection boşluğu yaranır. Sorğunu parametrləşdirilmiş sorğuya ($1 yer tutucusu və parametrlər massivi) çevirərək təhlükəsiz hala gətirin.",
            "buggyCode": "const db = {\n  async query(sql, params) {\n    if (typeof sql === \"string\" && sql.includes(\"$\")) {\n      return { rows: [{ ad: params[0] }] };\n    }\n    return { xeta: \"Təhlükəli parametr birləşməsi!\" };\n  }\n};\n\nconst istifadeciAdi = \"Kamran\";\n// XƏTA: SQL sətiri birbaşa birləşdirilib (SQL Injection təhlükəsi!)\nconst netice = await db.query(`SELECT * FROM users WHERE ad = '${istifadeciAdi}'`);\n\nconsole.log(netice.xeta || `Tapılan istifadəçi: ${netice.rows[0].ad}`);",
            "correctCode": "const db = {\n  async query(sql, params) {\n    if (typeof sql === \"string\" && sql.includes(\"$\")) {\n      return { rows: [{ ad: params[0] }] };\n    }\n    return { xeta: \"Təhlükəli parametr birləşməsi!\" };\n  }\n};\n\nconst istifadeciAdi = \"Kamran\";\nconst netice = await db.query(\"SELECT * FROM users WHERE ad = $1\", [istifadeciAdi]);\n\nconsole.log(netice.xeta || `Tapılan istifadəçi: ${netice.rows[0].ad}`);",
            "correctOutput": "Tapılan istifadəçi: Kamran",
            "expectedOutput": "Tapılan istifadəçi: Kamran",
            "explanation": "SQL sorğularında istifadəçi girişlərini heç vaxt sətir şablonları ilə birləşdirmək olmaz. Mütləq parametrləşdirilmiş yer tutuculardan ($1, $2) və ayrıca ötürülən arqumentlər massivindən istifadə edilməlidir.",
            "hint": "SELECT * FROM users WHERE ad = $1 sorğusunu və [istifadeciAdi] massivini ötürün."
          }
        ],
        "exercise": {
          "id": "ex-21-2-1",
          "title": "Təhlükəsiz Parametrləşdirilmiş SQL Sorğusu",
          "instruction": "Təhlükəsizlik qaydalarına uyğun olaraq verilənlər bazası adını mühit dəyişənindən oxuyan və müəyyən edilmiş istifadəçi adını formatlanmış şəkildə \"Baza: [baza] | İstifadəçi: [istifadeci]\" konsola çıxaran skripti tamamlayın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Baza: jsoyren_db | İstifadəçi: Nigar",
          "hint": "process.env.DB_NAME mühit dəyişəninə \"jsoyren_db\" dəyərini mənimsədin və istifadəçi adını sətir şablonu ilə birləşdirin.",
          "solutionCode": "process.env.DB_NAME = \"jsoyren_db\";\nconst user = \"Nigar\";\nconsole.log(`Baza: ${process.env.DB_NAME} | İstifadəçi: ${user}`);"
        },
        "bugFix": {
          "id": "bug-21-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "SQL Injection Zəifliyi Yaradan Template Literal Sorğusunun Düzəldilməsi",
          "instruction": "Aşağıdakı kodda istifadəçi adı birbaşa SQL sorğu sətirinin içinə şablon hərfi (${istifadeciAdi}) ilə birləşdirildiyi üçün SQL Injection boşluğu yaranır. Sorğunu parametrləşdirilmiş sorğuya ($1 yer tutucusu və parametrlər massivi) çevirərək təhlükəsiz hala gətirin.",
          "description": "Aşağıdakı kodda istifadəçi adı birbaşa SQL sorğu sətirinin içinə şablon hərfi (${istifadeciAdi}) ilə birləşdirildiyi üçün SQL Injection boşluğu yaranır. Sorğunu parametrləşdirilmiş sorğuya ($1 yer tutucusu və parametrlər massivi) çevirərək təhlükəsiz hala gətirin.",
          "buggyCode": "const db = {\n  async query(sql, params) {\n    if (typeof sql === \"string\" && sql.includes(\"$\")) {\n      return { rows: [{ ad: params[0] }] };\n    }\n    return { xeta: \"Təhlükəli parametr birləşməsi!\" };\n  }\n};\n\nconst istifadeciAdi = \"Kamran\";\n// XƏTA: SQL sətiri birbaşa birləşdirilib (SQL Injection təhlükəsi!)\nconst netice = await db.query(`SELECT * FROM users WHERE ad = '${istifadeciAdi}'`);\n\nconsole.log(netice.xeta || `Tapılan istifadəçi: ${netice.rows[0].ad}`);",
          "correctCode": "const db = {\n  async query(sql, params) {\n    if (typeof sql === \"string\" && sql.includes(\"$\")) {\n      return { rows: [{ ad: params[0] }] };\n    }\n    return { xeta: \"Təhlükəli parametr birləşməsi!\" };\n  }\n};\n\nconst istifadeciAdi = \"Kamran\";\nconst netice = await db.query(\"SELECT * FROM users WHERE ad = $1\", [istifadeciAdi]);\n\nconsole.log(netice.xeta || `Tapılan istifadəçi: ${netice.rows[0].ad}`);",
          "correctOutput": "Tapılan istifadəçi: Kamran",
          "expectedOutput": "Tapılan istifadəçi: Kamran",
          "explanation": "SQL sorğularında istifadəçi girişlərini heç vaxt sətir şablonları ilə birləşdirmək olmaz. Mütləq parametrləşdirilmiş yer tutuculardan ($1, $2) və ayrıca ötürülən arqumentlər massivindən istifadə edilməlidir.",
          "hint": "SELECT * FROM users WHERE ad = $1 sorğusunu və [istifadeciAdi] massivini ötürün."
        }
      },
      {
        "id": "topic-21-3",
        "title": "SQL Injection Müdafiəsi, Şifrələrin Həşlənməsi (bcrypt) və CORS",
        "theory": "<h3>🛡️ Backend Təhlükəsizliyinin 3 Əsas Sütunu</h3>\n<p>Hər bir Full-Stack və Backend mühəndisi tətbiqi canlıya buraxmazdan əvvəl bu 3 təhlükəsizlik mexanizmini mütləq tətbiq etməlidir:</p>\n\n<div class=\"tip-box\">\n  <strong>🛂 Real Həyat Bənzətməsi (Sərhəd Keçid Məntəqəsi və Gömrük Nəzarəti):</strong>\n  <p><strong>SQL Injection Müdafiəsi (Parametrləşdirmə):</strong> Sərnişinin baqajını birbaşa ölkəyə buraxmaq əvəzinə, rentgen aparatından keçirib sənədlə yükü ayrı yoxlamaqdır.<br>\n  <strong>bcrypt Şifrə Həşlənməsi:</strong> Şəxsiyyət vəsiqəsindəki biometrik barmaq izidir: barmaq izinə baxıb əsl insanın kim olduğunu təsdiqləyə bilərsiniz, lakin həmin izə baxaraq yenidən canlı insan yarada bilməzsiniz (biristiqamətli şifrələmə).<br>\n  <strong>CORS Nəzarəti:</strong> Yalnız rəsmi viza verilmiş etibarlı ölkələrin vətəndaşlarına sərhədi keçməyə icazə verməkdir.</p>\n</div>\n\n<h3>1. SQL Injection Müdafiəsi (Prepared Statements):</h3>\n<p>Hakerin ən sevimli hücum metodu axtarış xanasına <code>' OR '1'='1</code> yazaraq bütün bazanı ələ keçirməkdir. Müdafiənin yeganə qızıl qaydası: <strong>Parametrləşdirilmiş Sorğular (Prepared Statements)</strong> istifadə etməkdir:</p>\n<pre><code class=\"language-javascript\">// ❌ ZƏİF KOD: SQL Injection-a 100% açıqdır!\n// db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`);\n\n// ✅ TƏHLÜKƏSİZ KOD: Parametrlər ($1, $2) SQL mühərriki tərəfindən yalnız məlumat kimi qəbul edilir:\nawait db.query('SELECT * FROM users WHERE email = $1', [req.body.email]);</code></pre>\n\n<h3>2. Şifrələrin Təhlükəsiz Saxlanması (bcrypt):</h3>\n<p>Verilənlər bazasında parolları heç vaxt açıq mətn (plain text) şəklində və ya köhnəlmiş MD5/SHA ilə saxlamaq olmaz! Parollar <strong>bcrypt</strong> alqoritmi vasitəsilə duzlanaraq (salting) birtərəfli həşlənməlidir:</p>\n<pre><code class=\"language-javascript\">const bcrypt = require('bcrypt');\n\n// Qeydiyyat zamanı həşlənmə:\nconst duzRaundu = 10;\nconst haslenmisParol = await bcrypt.hash(req.body.parol, duzRaundu);\n\n// Giriş (Login) zamanı müqayisə:\nconst duzgundur = await bcrypt.compare(req.body.girilenParol, user.parol);</code></pre>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: CORS Preflight (OPTIONS) Sorğuları, Wildcard (*) vs Credentials Tələsi və Helmet Təhlükəsizlik Qalxanı</h4>\n<p>İstehsalat mühitində tətbiqləri qlobal hücumlardan qorumaq üçün CORS protokolu və HTTP təhlükəsizlik başlıqları dərindən konfiqurasiya edilməlidir:</p>\n\n<p><strong>1. CORS Preflight (OPTIONS) Əl Sıxması:</strong> Sadə olmayan sorğularda (məs: xüsusi <code>Authorization</code> başlığı olan və ya <code>PUT/DELETE/PATCH</code> sorğularında) brauzer əsas sorğudan əvvəl avtomatik olaraq <strong><code>OPTIONS</code></strong> metodu ilə kəşfiyyat sorğusu göndərir. Server bu preflight sorğusunu <code>204 No Content</code> və müvafiq <code>Access-Control-Allow-Methods</code> başlıqları ilə təsdiqləməlidir.</p>\n\n<div class=\"warning-box\">\n  <strong>🪤 Wildcard (*) vs Credentials Tələsi:</strong><br>\n  Əgər frontend sorğusu kuki (cookies) və ya sessiya məlumatı göndərirsə (<code>credentials: 'include'</code>), brauzer təhlükəsizlik baxımından <code>Access-Control-Allow-Origin: *</code> (hər kəsə icazə) cavabını <strong>QƏTİ ŞƏKİLDƏ BLOKLAYIR</strong>!<br>\n  <strong>✅ Düzgün Həll:</strong> Həmişə konkret icazəli domenləri (White-list) göstərin və <code>credentials: true</code> təyin edin:\n  <pre><code class=\"language-javascript\">const allowedOrigins = ['https://jsoyren.az', 'http://localhost:3000'];\napp.use(cors({\n  origin: (origin, callback) => {\n    if (!origin || allowedOrigins.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error('CORS siyasəti tərəfindən bloklandı'));\n    }\n  },\n  credentials: true\n}));</code></pre>\n</div>\n\n<p><strong>2. Helmet Təhlükəsizlik Qalxanı və Rate Limiting:</strong></p>\n<ul>\n  <li><strong><code>helmet()</code> Middleware-i:</strong> Tək bir sətirlə (<code>app.use(helmet())</code>) mühüm HTTP təhlükəsizlik başlıqlarını tətbiq edir: <code>X-Powered-By: Express</code> başlığını silir (hakerlərin server proqramını müəyyən etməsinin qarşısını alır), <code>X-Frame-Options: DENY</code> (Clickjacking hücumundan qoruyur) və <code>X-Content-Type-Options: nosniff</code> əlavə edir.</li>\n  <li><strong>Rate Limiting (Sorğu Sayı Məhdudiyyəti):</strong> Hakerlərin login və ya qeydiyyat marşrutlarına avtomatlaşdırılmış botlarla minlərlə şifrə yoxlaması göndərməsinin (Brute-Force hücumu) qarşısını almaq üçün <code>express-rate-limit</code> ilə eyni IP-dən 15 dəqiqə ərzində maksimum sorğu sayı (məs: 5 cəhd) təyin edilir.</li>\n</ul>",
        "codeExamples": [
          {
            "title": "CORS Middleware ilə İcazəli Domenlərin Tənzimlənməsi",
            "code": "const app = express();\n\n// Yalnız localhost:3000 domenindən gələn sorğulara icazə verilir\napp.use(cors({ origin: 'http://localhost:3000' }));\n\napp.get('/api/xeberler', (req, res) => {\n  res.status(200).json({ xeber: \"Texnologiya Yenilikləri\" });\n});\n\napp.simulateRequest('GET', '/api/xeberler', { origin: 'http://localhost:3000' });",
            "output": "[HTTP 200 | CORS: http://localhost:3000] {\"xeber\":\"Texnologiya Yenilikləri\"}"
          },
          {
            "title": "bcrypt ilə Şifrənin Həşlənməsi və Doğrulanması Simulyasiyası",
            "code": "const sadeSifre = \"GizliKod2026\";\n// Şifrə birbaşa deyil, həşlənərək saxlanılır\nconst haslenmis = `bcrypt_salt_hash_${sadeSifre.length}`;\n\nfunction yoxlaSifre(daxilEdilen) {\n  return `bcrypt_salt_hash_${daxilEdilen.length}` === haslenmis;\n}\n\nconsole.log(\"Doğru şifrə yoxlanışı:\", yoxlaSifre(\"GizliKod2026\"));\nconsole.log(\"Səhv şifrə yoxlanışı:\", yoxlaSifre(\"YanlisKod\"));",
            "output": "Doğru şifrə yoxlanışı: true\nSəhv şifrə yoxlanışı: false"
          }
        ],
        "exercises": [
          {
            "id": "ex-21-3-1",
            "title": "CORS Təhlükəsizlik Siyasətinin Tənzimlənməsi",
            "instruction": "Yalnız etibarlı frontend ünvanına (\"http://localhost:3000\") giriş icazəsi verən CORS tənzimləməsini qurun və \"/api/xeberler\" ünvanından xəbər məlumatını JSON formatında qaytaran marşrutu sınaqdan keçirin.",
            "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
            "expectedOutput": "[HTTP 200 | CORS: http://localhost:3000] {\"xeber\":\"Texnologiya Yenilikləri\"}",
            "hint": "Spesifik domen üçün CORS icazəsi vermək üçün app.use(cors({ origin: \"http://localhost:3000\" })) tətbiq olunur.",
            "solutionCode": "const app = express();\napp.use(cors({ origin: 'http://localhost:3000' }));\n\napp.get('/api/xeberler', (req, res) => {\n  res.status(200).json({ xeber: \"Texnologiya Yenilikləri\" });\n});\n\napp.simulateRequest('GET', '/api/xeberler', {\n  headers: { origin: 'http://localhost:3000' }\n});"
          },
          {
            "id": "ex-21-3-2",
            "title": "bcrypt ilə Şifrələrin Təhlükəsiz Həşlənməsi və Doğrulanması",
            "instruction": "<code>bcrypt.hash(parol, 10)</code> metodundan istifadə edərək <code>\"Gizli123!\"</code> şifrəsini həşləyin. Daha sonra <code>bcrypt.compare()</code> ilə həm düzgün (<code>\"Gizli123!\"</code>), həm də yanlış (<code>\"YanlisParol\"</code>) şifrələri yoxlayın. Nəticələri <code>\"Şifrə 1 düzgündür: true\"</code> və <code>\"Şifrə 2 düzgündür: false\"</code> formatında konsola çıxarın.",
            "starterCode": "const bcrypt = require('bcrypt');\n\nasync function testAuth() {\n  // bcrypt.hash və bcrypt.compare metodlarını tətbiq edin\n}\n\ntestAuth();\n",
            "expectedOutput": "Şifrə 1 düzgündür: true\nŞifrə 2 düzgündür: false",
            "hint": "const hashed = await bcrypt.hash(plainPass, 10); const check1 = await bcrypt.compare('Gizli123!', hashed); const check2 = await bcrypt.compare('YanlisParol', hashed);",
            "solutionCode": "const bcrypt = require('bcrypt');\nasync function testAuth() {\n    const plainPass = \"Gizli123!\";\n    const hashed = await bcrypt.hash(plainPass, 10);\n    const check1 = await bcrypt.compare(\"Gizli123!\", hashed);\n    const check2 = await bcrypt.compare(\"YanlisParol\", hashed);\n    console.log(`Şifrə 1 düzgündür: ${check1}`);\n    console.log(`Şifrə 2 düzgündür: ${check2}`);\n}\ntestAuth();"
          },
          {
            "id": "ex-21-3-3",
            "title": "Dinamik CORS Origin Whitelist və İcazəsiz Mənşə Bloklanması",
            "instruction": "İstehsalat mühitində yalnız icazə verilən mənşələr (Whitelist) qəbul edilməlidir. İcazəli mənşələr: <code>['https://jsoyren.az', 'https://admin.jsoyren.az']</code>. Mənşəni yoxlayan <code>checkCorsOrigin(origin)</code> funksiyası yazın: əgər siyahıdadırsa <code>\"İcazə verildi: [origin]\"</code>, deyilsə <code>\"Bloklandı: [origin]\"</code> qaytarsın. <code>'https://jsoyren.az'</code> və <code>'https://zererli-sayt.com'</code> üçün nəticələri konsola çıxarın.",
            "starterCode": "const whitelist = ['https://jsoyren.az', 'https://admin.jsoyren.az'];\n\nfunction checkCorsOrigin(origin) {\n  // Whitelist yoxlamasını aparın\n}\n\nconsole.log(checkCorsOrigin('https://jsoyren.az'));\nconsole.log(checkCorsOrigin('https://zererli-sayt.com'));\n",
            "expectedOutput": "İcazə verildi: https://jsoyren.az\nBloklandı: https://zererli-sayt.com",
            "hint": "if (whitelist.includes(origin)) return `İcazə verildi: ${origin}`; return `Bloklandı: ${origin}`;",
            "solutionCode": "const whitelist = ['https://jsoyren.az', 'https://admin.jsoyren.az'];\nfunction checkCorsOrigin(origin) {\n    if (whitelist.includes(origin)) {\n        return `İcazə verildi: ${origin}`;\n    }\n    return `Bloklandı: ${origin}`;\n}\nconsole.log(checkCorsOrigin('https://jsoyren.az'));\nconsole.log(checkCorsOrigin('https://zererli-sayt.com'));"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-21-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Frontend Sorğusunda CORS İcazəsinin Olmaması Səbəbilə Bloklanma Xətası",
            "instruction": "Frontend tətbiqi \"http://localhost:3000\" ünvanından API-yə müraciət edir, lakin serverdə CORS konfiqurasiyası olmadığı üçün sorğu brauzer tərəfindən bloklanır. Koda <code>app.use(cors({ origin: \"http://localhost:3000\" }));</code> əlavə edərək marşrutu bərpa edin.",
            "description": "Frontend tətbiqi \"http://localhost:3000\" ünvanından API-yə müraciət edir, lakin serverdə CORS konfiqurasiyası olmadığı üçün sorğu brauzer tərəfindən bloklanır. Koda <code>app.use(cors({ origin: \"http://localhost:3000\" }));</code> əlavə edərək marşrutu bərpa edin.",
            "buggyCode": "const app = express();\n// XƏTA: CORS middleware-i əlavə edilməyib! Frontend sorğusu bloklanır.\n\napp.get('/api/profil', (req, res) => {\n  res.status(200).json({ ad: \"Fərid\" });\n});\n\napp.simulateRequest('GET', '/api/profil', {\n  headers: { origin: 'http://localhost:3000' }\n});",
            "correctCode": "const app = express();\napp.use(cors({ origin: 'http://localhost:3000' }));\n\napp.get('/api/profil', (req, res) => {\n  res.status(200).json({ ad: \"Fərid\" });\n});\n\napp.simulateRequest('GET', '/api/profil', {\n  headers: { origin: 'http://localhost:3000' }\n});",
            "correctOutput": "[HTTP 200 | CORS: http://localhost:3000] {\"ad\":\"Fərid\"}",
            "expectedOutput": "[HTTP 200 | CORS: http://localhost:3000] {\"ad\":\"Fərid\"}",
            "explanation": "Brauzerlərin Eyni Mənşə Siyasəti (Same-Origin Policy) fərqli port və ya domendən gələn sorğuları standart olaraq bloklayır. Server cavabında müvafiq CORS icazə başlıqlarını qaytarmaq üçün 'cors' middleware-i mütləq təyin olunmalıdır.",
            "hint": "app.use(cors({ origin: 'http://localhost:3000' })) əlavə edin."
          }
        ],
        "exercise": {
          "id": "ex-21-3-1",
          "title": "CORS Təhlükəsizlik Siyasətinin Tənzimlənməsi",
          "instruction": "Yalnız etibarlı frontend ünvanına (\"http://localhost:3000\") giriş icazəsi verən CORS tənzimləməsini qurun və \"/api/xeberler\" ünvanından xəbər məlumatını JSON formatında qaytaran marşrutu sınaqdan keçirin.",
          "starterCode": "const app = express();\n\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "[HTTP 200 | CORS: http://localhost:3000] {\"xeber\":\"Texnologiya Yenilikləri\"}",
          "hint": "Spesifik domen üçün CORS icazəsi vermək üçün app.use(cors({ origin: \"http://localhost:3000\" })) tətbiq olunur.",
          "solutionCode": "const app = express();\napp.use(cors({ origin: 'http://localhost:3000' }));\n\napp.get('/api/xeberler', (req, res) => {\n  res.status(200).json({ xeber: \"Texnologiya Yenilikləri\" });\n});\n\napp.simulateRequest('GET', '/api/xeberler', {\n  headers: { origin: 'http://localhost:3000' }\n});"
        },
        "bugFix": {
          "id": "bug-21-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Frontend Sorğusunda CORS İcazəsinin Olmaması Səbəbilə Bloklanma Xətası",
          "instruction": "Frontend tətbiqi \"http://localhost:3000\" ünvanından API-yə müraciət edir, lakin serverdə CORS konfiqurasiyası olmadığı üçün sorğu brauzer tərəfindən bloklanır. Koda <code>app.use(cors({ origin: \"http://localhost:3000\" }));</code> əlavə edərək marşrutu bərpa edin.",
          "description": "Frontend tətbiqi \"http://localhost:3000\" ünvanından API-yə müraciət edir, lakin serverdə CORS konfiqurasiyası olmadığı üçün sorğu brauzer tərəfindən bloklanır. Koda <code>app.use(cors({ origin: \"http://localhost:3000\" }));</code> əlavə edərək marşrutu bərpa edin.",
          "buggyCode": "const app = express();\n// XƏTA: CORS middleware-i əlavə edilməyib! Frontend sorğusu bloklanır.\n\napp.get('/api/profil', (req, res) => {\n  res.status(200).json({ ad: \"Fərid\" });\n});\n\napp.simulateRequest('GET', '/api/profil', {\n  headers: { origin: 'http://localhost:3000' }\n});",
          "correctCode": "const app = express();\napp.use(cors({ origin: 'http://localhost:3000' }));\n\napp.get('/api/profil', (req, res) => {\n  res.status(200).json({ ad: \"Fərid\" });\n});\n\napp.simulateRequest('GET', '/api/profil', {\n  headers: { origin: 'http://localhost:3000' }\n});",
          "correctOutput": "[HTTP 200 | CORS: http://localhost:3000] {\"ad\":\"Fərid\"}",
          "expectedOutput": "[HTTP 200 | CORS: http://localhost:3000] {\"ad\":\"Fərid\"}",
          "explanation": "Brauzerlərin Eyni Mənşə Siyasəti (Same-Origin Policy) fərqli port və ya domendən gələn sorğuları standart olaraq bloklayır. Server cavabında müvafiq CORS icazə başlıqlarını qaytarmaq üçün 'cors' middleware-i mütləq təyin olunmalıdır.",
          "hint": "app.use(cors({ origin: 'http://localhost:3000' })) əlavə edin."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_21 };
}
