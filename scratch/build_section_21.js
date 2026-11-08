const fs = require('fs');

const SECTIONS_21 = [
  {
    "id": "section-21",
    "title": "Bölmə 21: Verilənlər Bazası Əlaqəsi və Təhlükəsizlik Əsasları",
    "icon": "🔐",
    "topics": [
      {
        "id": "topic-21-1",
        "title": "Relyasion Verilənlər Bazası Əsasları, DDL, Açarlar və Əlaqələr (PostgreSQL / MySQL)",
        "theory": `<h3>🔐 Niyə Yaddaş Dəyişənləri (In-Memory) Yetərsizdir?</h3>
<p>Əvvəlki bölmələrdə məlumatları JavaScript massivlərində saxlayırdıq. Lakin server hər dəfə yenidən başladıldıqda (restart) və ya qəzaya uğradıqda (crash) əməli yaddaş (RAM) tamamilə sıfırlanır və bütün istifadəçi məlumatları birdəfəlik itir. Məlumatın daimi və etibarlı saxlanması (<strong>Data Persistence</strong>) üçün <strong>Verilənlər Bazası İdarəetmə Sistemləri (DBMS)</strong> istifadə olunur.</p>

<div class="tip-box">
  <strong>📖 Real Həyat Bənzətməsi (Dövlət Mühasibat Kitabı vs Sərbəst Qovluq):</strong>
  <p><strong>SQL (PostgreSQL / MySQL)</strong> — dövlət mühasibatlıq reyestridir: hər bir səhifə xətkeşlə qrafalara bölünüb (şəxsiyyət vəsiqəsi nömrəsi, ad, məbləğ, tarix). Nömrə təkrar oluna bilməz, məbləğ xanasına hərf yazıla bilməz və hər sətir qeydiyyatdan keçməlidir.<br>
  <strong>NoSQL (MongoDB)</strong> — sərbəst anket qovluğudur: içərisinə hər bir şəxsin özünəməxsus fərqli bəndləri olan istənilən blankı əlavə edə bilərsiniz.</p>
</div>

<h3>1. Relyasion (SQL) Verilənlər Bazaları və DDL Əmrləri:</h3>
<ul>
  <li><strong>Cədvəl Sxemi (Tables) və DDL (Data Definition Language):</strong> Cədvəllər dəqiq sütun tipləri və məhdudiyyətləri ilə yaradılır:
    <pre><code class="language-sql">CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>
  </li>
  <li><strong>Sütun Tipləri:</strong> <code>INTEGER</code> (tam ədəd), <code>VARCHAR(n)</code> (məhdud sətir), <code>TEXT</code> (sərbəst mətn), <code>BOOLEAN</code> (məntiqi), <code>TIMESTAMP</code> (tarix/saat), <code>SERIAL</code> (PostgreSQL üçün avtomatik artan ID) / <code>AUTO_INCREMENT</code> (MySQL).</li>
  <li><strong>Məhdudiyyətlər (Constraints):</strong> <code>PRIMARY KEY</code> (hər sətrin unikal identifikatoru), <code>NOT NULL</code> (boş qala bilməz), <code>UNIQUE</code> (təkrar oluna bilməz), <code>DEFAULT</code> (standart qiymət).</li>
  <li><strong>Foreign Keys (Xarici Açarlar) və JOIN:</strong> Cədvəllər bir-biri ilə açarlar vasitəsilə əlaqələndirilir (məs: sifarişlərin istifadəçilərə bağlanması):
    <pre><code class="language-sql">CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  amount NUMERIC(10, 2) NOT NULL
);</code></pre>
  </li>
  <li><strong>ACID Tranzaksiya Zəmanəti:</strong> <em>Atomicity</em> (bölünməzlik — ya tam, ya heç nə), <em>Consistency</em> (uyğunluq), <em>Isolation</em> (təcridlik), <em>Durability</em> (davamlılıq).</li>
</ul>

<div class="warning-box">
  <strong>⚠️ Tələyə Düşmə! (WHERE Şərti Olmadan UPDATE və ya DELETE):</strong><br>
  Ən fəlakətli təcrübəsizlik səhvi: <code>DELETE FROM users</code> və ya <code>UPDATE users SET status = 'deaktiv'</code> yazarkən <code>WHERE id = $1</code> şərtini unutmaqdır! Əgər <code>WHERE</code> yazmasanız, verilənlər bazası cədvəldəki <strong>BÜTÜN</strong> sətirləri dərhal siləcək və ya dəyişəcəkdir. İstehsalatda bu, şirkətin bütün məlumatlarının məhvi deməkdir!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: SQL vs NoSQL Memarlıq Seçimi və Tranzaksiya Rollback Qaydaları</h4>
<p>Müasir proqram təminatı arxitekturasında düzgün verilənlər bazası seçimi və maliyyə əməliyyatlarının etibarlılığı ən mühüm mühəndislik qərarlarıdır:</p>

<p><strong>1. SQL vs NoSQL Memarlıq Seçimi:</strong></p>
<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Meyar</th>
        <th>Relyasion SQL (PostgreSQL, MySQL)</th>
        <th>Sənəd Əsaslı NoSQL (MongoDB)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Sxem Strukturu</strong></td>
        <td>Sərt, qabaqcadan təyin olunmuş cədvəl sxemi</td>
        <td>Çevik, dinamik JSON/BSON sənəd strukturu</td>
      </tr>
      <tr>
        <td><strong>Əlaqələr</strong></td>
        <td>Güclü Foreign Key və JOIN mexanizmi</td>
        <td>Daxili yerləşdirmə (Embedding) və ya istinad</td>
      </tr>
      <tr>
        <td><strong>Tranzaksiyalar</strong></td>
        <td>Tam və sərt ACID standartı</td>
        <td>Əsasən BASE (Eventually Consistent) modeli</td>
      </tr>
      <tr>
        <td><strong>İstifadə Sahəsi</strong></td>
        <td>Maliyyə, bankçılıq, e-ticarət sifarişləri</td>
        <td>Məzmun idarəetməsi (CMS), real-vaxt loqları, kataloqlar</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>2. Çoxmərhələli Tranzaksiyalar və Rollback İdarəsi:</strong> Klassik bank köçürməsini nəzərdən keçirək: İstifadəçi A-nın balansından 100 AZN çıxılmalı və İstifadəçi B-nin balansına 100 AZN əlavə olunmalıdır. Əgər 1-ci sorğudan sonra serverdə qəza baş versə, A pulunu itirər, B isə ala bilməz!</p>

<pre><code class="language-javascript">// ✅ PEŞƏKAR ACID TRANZAKSİYASI VƏ ROLLBACK:
const client = await pool.connect();
try {
  await client.query('BEGIN'); // Tranzaksiya başladı
  
  await client.query('UPDATE hesablari SET balans = balans - $1 WHERE id = $2', [100, senderId]);
  await client.query('UPDATE hesablari SET balans = balans + $1 WHERE id = $2', [100, receiverId]);
  
  await client.query('COMMIT'); // Hər iki əməliyyat eyni anda bazada təsdiqlənir
} catch (err) {
  await client.query('ROLLBACK'); // Hər hansı xəta olduqda bütün addımlar geri qaytarılır!
  throw err;
} finally {
  client.release(); // Bağlantı hovuza təhvil verilir
}</code></pre>`,
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
        ]
      },
      {
        "id": "topic-21-2",
        "title": "Əlaqə Hovuzu (Connection Pooling), db.js Modulu və .env Məxfiliyi",
        "theory": `<h3>🏊 Əlaqə Hovuzu (Connection Pooling) Nədir?</h3>
<p>Verilənlər bazasına yeni TCP/IP bağlantısı açmaq və SSL əl sıxması (handshake) aparmaq server üçün çox baha başa gələn və yavaş əməliyyatdır. Hər bir HTTP sorğusu üçün yeni baza əlaqəsi açıb sorğudan sonra bağlamaq sistem resurslarını sürətlə tükəndirir.</p>
<p>Bu problemi aradan qaldırmaq üçün <strong>Əlaqə Hovuzu (Connection Pool)</strong> tətbiq olunur. Server işə düşərkən qabaqcadan müəyyən sayda aktiv baza bağlantısı (məs: 20 ədəd) yaradıb hazır saxlayır.</p>

<div class="tip-box">
  <strong>🚕 Real Həyat Bənzətməsi (Taksi Dayanacağı):</strong>
  <p>Hər bir müştəri şəhərə çıxmaq istədikdə sıfırdan təzə maşın yığdırmır! Taksi dayanacağında hazır gözləyən maşınlardan birinə oturur, mənzil başına çatır və maşını növbəti sərnişin üçün dayanacağa təhvil verir (<code>client.release()</code>).</p>
</div>

<h3>1. Mərkəzləşdirilmiş db.js Modulu:</h3>
<pre><code class="language-javascript">// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20 // Hovuzdakı maksimum aktiv əlaqə sayı
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};</code></pre>

<div class="warning-box">
  <strong>⚠️ Tələyə Düşmə! (Konfiqurasiya Şifrələrini Koda Hardcode Etmək):</strong><br>
  Baza istifadəçi adı və şifrəsini heç vaxt JavaScript kodunun içinə birbaşa yazmayın! Bütün məxfi parametrlər layihənin kök qovluğundakı <strong><code>.env</code></strong> faylında saxlanmalı və <code>dotenv</code> paketi ilə oxunmalıdır. Həmçinin <code>.env</code> faylının <strong><code>.gitignore</code></strong>-a əlavə edildiyindən 100% əmin olun!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Client Sızması (Connection Leak) və Multiple-Pool Tələləri</h4>
<p>Node.js backend sistemlərində verilənlər bazası ilə işləyərkən ən çox server çöküşlərinə səbəb olan iki kritik səhv:</p>

<div class="warning-box">
  <strong>🪤 1. Müştəri Sızması (Connection Leak) və Serverin Donması:</strong><br>
  Əgər tranzaksiya üçün hovuzdan xüsusi müştəri (client) götürsəniz (<code>const client = await pool.connect()</code>), işiniz bitdikdə onu <strong>MÜTLƏQ</strong> hovuza qaytarmalısınız (<code>client.release()</code>). Əgər funksiya xəta verib <code>release()</code> çağırılmadan çıxarsa, həmin əlaqə havada asılı qalır.<br>
  20 sorğudan sonra hovuzdakı bütün bağlantılar "sızmış" (leak) olacaq və 21-ci sorğudan etibarən bütün server əbədi donacaqdır!<br>
  <strong>✅ Qızıl Həll:</strong> Həmişə <code>client.release()</code> çağırışını <code>try...finally</code> blokunun <strong><code>finally</code></strong> hissəsində yazın.
</div>

<p><strong>2. Çoxsaylı Hovuz (Multiple-Pool) Anti-Pattern-i:</strong> Təcrübəsiz developerlər bəzən hər bir Controller və ya marşrut daxilində <code>new Pool()</code> yaradırlar:</p>
<pre><code class="language-javascript">// ❌ DƏHŞƏTLİ XƏTA: Hər sorğuda yeni hovuz yaranır!
app.get('/api/users', async (req, res) => {
  const pool = new Pool(); // 💥 Hər istifadəçi üçün 20 yeni bağlantı açılır!
  const users = await pool.query('SELECT * FROM users');
  res.json(users.rows);
});</code></pre>
<p>Eyni vaxtda 50 sorğu gəldikdə $50 \times 20 = 1000$ əlaqə açılır və PostgreSQL dərhal <code>FATAL: sorry, too many clients already</code> xətası verərək bütün verilənlər bazasını söndürür. <code>Pool</code> tətbiqdə YALNIZ BİR DƏFƏ (Singleton) yaradılmalı və bütün layihə boyu paylaşılmalıdır.</p>`,
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
        ]
      },
      {
        "id": "topic-21-3",
        "title": "SQL Injection Müdafiəsi, Şifrələrin Həşlənməsi (bcrypt) və CORS",
        "theory": `<h3>🛡️ Backend Təhlükəsizliyinin 3 Əsas Sütunu</h3>
<p>Hər bir Full-Stack və Backend mühəndisi tətbiqi canlıya buraxmazdan əvvəl bu 3 təhlükəsizlik mexanizmini mütləq tətbiq etməlidir:</p>

<div class="tip-box">
  <strong>🛂 Real Həyat Bənzətməsi (Sərhəd Keçid Məntəqəsi və Gömrük Nəzarəti):</strong>
  <p><strong>SQL Injection Müdafiəsi (Parametrləşdirmə):</strong> Sərnişinin baqajını birbaşa ölkəyə buraxmaq əvəzinə, rentgen aparatından keçirib sənədlə yükü ayrı yoxlamaqdır.<br>
  <strong>bcrypt Şifrə Həşlənməsi:</strong> Şəxsiyyət vəsiqəsindəki biometrik barmaq izidir: barmaq izinə baxıb əsl insanın kim olduğunu təsdiqləyə bilərsiniz, lakin həmin izə baxaraq yenidən canlı insan yarada bilməzsiniz (biristiqamətli şifrələmə).<br>
  <strong>CORS Nəzarəti:</strong> Yalnız rəsmi viza verilmiş etibarlı ölkələrin vətəndaşlarına sərhədi keçməyə icazə verməkdir.</p>
</div>

<h3>1. SQL Injection Müdafiəsi (Prepared Statements):</h3>
<p>Hakerin ən sevimli hücum metodu axtarış xanasına <code>' OR '1'='1</code> yazaraq bütün bazanı ələ keçirməkdir. Müdafiənin yeganə qızıl qaydası: <strong>Parametrləşdirilmiş Sorğular (Prepared Statements)</strong> istifadə etməkdir:</p>
<pre><code class="language-javascript">// ❌ ZƏİF KOD: SQL Injection-a 100% açıqdır!
// db.query(\`SELECT * FROM users WHERE email = '\${req.body.email}'\`);

// ✅ TƏHLÜKƏSİZ KOD: Parametrlər ($1, $2) SQL mühərriki tərəfindən yalnız məlumat kimi qəbul edilir:
await db.query('SELECT * FROM users WHERE email = $1', [req.body.email]);</code></pre>

<h3>2. Şifrələrin Təhlükəsiz Saxlanması (bcrypt):</h3>
<p>Verilənlər bazasında parolları heç vaxt açıq mətn (plain text) şəklində və ya köhnəlmiş MD5/SHA ilə saxlamaq olmaz! Parollar <strong>bcrypt</strong> alqoritmi vasitəsilə duzlanaraq (salting) birtərəfli həşlənməlidir:</p>
<pre><code class="language-javascript">const bcrypt = require('bcrypt');

// Qeydiyyat zamanı həşlənmə:
const duzRaundu = 10;
const haslenmisParol = await bcrypt.hash(req.body.parol, duzRaundu);

// Giriş (Login) zamanı müqayisə:
const duzgundur = await bcrypt.compare(req.body.girilenParol, user.parol);</code></pre>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: CORS Preflight (OPTIONS) Sorğuları, Wildcard (*) vs Credentials Tələsi və Helmet Təhlükəsizlik Qalxanı</h4>
<p>İstehsalat mühitində tətbiqləri qlobal hücumlardan qorumaq üçün CORS protokolu və HTTP təhlükəsizlik başlıqları dərindən konfiqurasiya edilməlidir:</p>

<p><strong>1. CORS Preflight (OPTIONS) Əl Sıxması:</strong> Sadə olmayan sorğularda (məs: xüsusi <code>Authorization</code> başlığı olan və ya <code>PUT/DELETE/PATCH</code> sorğularında) brauzer əsas sorğudan əvvəl avtomatik olaraq <strong><code>OPTIONS</code></strong> metodu ilə kəşfiyyat sorğusu göndərir. Server bu preflight sorğusunu <code>204 No Content</code> və müvafiq <code>Access-Control-Allow-Methods</code> başlıqları ilə təsdiqləməlidir.</p>

<div class="warning-box">
  <strong>🪤 Wildcard (*) vs Credentials Tələsi:</strong><br>
  Əgər frontend sorğusu kuki (cookies) və ya sessiya məlumatı göndərirsə (<code>credentials: 'include'</code>), brauzer təhlükəsizlik baxımından <code>Access-Control-Allow-Origin: *</code> (hər kəsə icazə) cavabını <strong>QƏTİ ŞƏKİLDƏ BLOKLAYIR</strong>!<br>
  <strong>✅ Düzgün Həll:</strong> Həmişə konkret icazəli domenləri (White-list) göstərin və <code>credentials: true</code> təyin edin:
  <pre><code class="language-javascript">const allowedOrigins = ['https://jsoyren.az', 'http://localhost:3000'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS siyasəti tərəfindən bloklandı'));
    }
  },
  credentials: true
}));</code></pre>
</div>

<p><strong>2. Helmet Təhlükəsizlik Qalxanı və Rate Limiting:</strong></p>
<ul>
  <li><strong><code>helmet()</code> Middleware-i:</strong> Tək bir sətirlə (<code>app.use(helmet())</code>) mühüm HTTP təhlükəsizlik başlıqlarını tətbiq edir: <code>X-Powered-By: Express</code> başlığını silir (hakerlərin server proqramını müəyyən etməsinin qarşısını alır), <code>X-Frame-Options: DENY</code> (Clickjacking hücumundan qoruyur) və <code>X-Content-Type-Options: nosniff</code> əlavə edir.</li>
  <li><strong>Rate Limiting (Sorğu Sayı Məhdudiyyəti):</strong> Hakerlərin login və ya qeydiyyat marşrutlarına avtomatlaşdırılmış botlarla minlərlə şifrə yoxlaması göndərməsinin (Brute-Force hücumu) qarşısını almaq üçün <code>express-rate-limit</code> ilə eyni IP-dən 15 dəqiqə ərzində maksimum sorğu sayı (məs: 5 cəhd) təyin edilir.</li>
</ul>`,
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
        ]
      }
    ]
  }
];

// Ensure two-way sync between exercise/exercises and bugFix/bugFixes
SECTIONS_21[0].topics.forEach(t => {
  if (t.exercises && t.exercises.length > 0) t.exercise = t.exercises[0];
  if (t.bugFixes && t.bugFixes.length > 0) t.bugFix = t.bugFixes[0];
});

module.exports = { SECTIONS_21 };
