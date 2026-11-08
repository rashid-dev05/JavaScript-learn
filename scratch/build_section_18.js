const fs = require('fs');

const SECTIONS_18 = [
  {
    "id": "section-18",
    "title": "Bölmə 18: Node.js Əsasları və İcra Mühiti",
    "icon": "🟢",
    "topics": [
      {
        "id": "topic-18-1",
        "title": "Server Nədir, Localhost və Port Anlayışı (Mənzil Nömrəsi Analogiyası)",
        "theory": `<h3>🟢 Server Nədir? — "Restoranın Mətbəxi" Analogiyası</h3>
<p>HTML, CSS və brauzer JavaScript-i ilə tanış olan hər bir developer veb səhifənin istifadəçiyə görünən tərəfini (<strong>Frontend</strong>) yaxşı tanıyır. Bəs brauzerdə URL yazdıqda və ya düyməyə kliklədikdə məlumatlar haradan gəlir və kim tərəfindən emal olunur?</p>

<p>Təsəvvür edin ki, restorandasınız. Masada oturub menyudan yemək sifariş edirsiniz (müştəri / <strong>Client</strong>). Amma yeməyi siz masada hazırlamırsınız — sifariş qapalı mətbəxə ötürülür və aşpazlar tərəfindən hazırlanır (<strong>Server</strong>). Server — müştərinin (brauzerin və ya mobil tətbiqin) göndərdiyi sorğunu (<strong>Request</strong>) qəbul edən, verilənlər bazasından məlumatları toplayan, biznes məntiqini icra edən və nəticəni cavab (<strong>Response</strong>) olaraq geri qaytaran proqram təminatıdır.</p>

<div class="tip-box">
  <strong>🏢 "Mənzil Nömrəsi" Analogiyası (Port Nədir?):</strong>
  <p>Kompüterinizi böyük bir çoxmərtəbəli yaşayış binası kimi təsəvvür edin. Binanın vahid bir küçə ünvanı var (<strong>IP ünvanı</strong>, məsələn: <code>127.0.0.1</code>). Lakin binada onlarla fərqli mənzil və ofis yerləşir. Hər bir proqram fərqli bir "mənzildə" fəaliyyət göstərir. Məhz <strong>Port</strong> — bir kompüterdə eyni anda fəaliyyət göstərən müxtəlif şəbəkə xidmətlərini bir-birindən ayıran unikal rəqəmsal mənzil nömrəsidir:</p>
  <ul>
    <li><code>localhost:3000</code> → 3000 nömrəli mənzildə Node.js / Express veb serveriniz çalışır.</li>
    <li><code>localhost:5432</code> → 5432 nömrəli mənzildə PostgreSQL verilənlər bazası serveri dinləyir.</li>
    <li><code>localhost:3306</code> → 3306 nömrəli mənzildə MySQL serveri sorğuları qəbul edir.</li>
    <li><code>localhost:6379</code> → 6379 nömrəli mənzildə Redis keş serveri xidmət göstərir.</li>
    <li><em>Port Standartları:</em> 0-dan 1023-ə qədər olan portlar (məsələn: 80 HTTP, 443 HTTPS, 22 SSH) əməliyyat sistemi tərəfindən qorunur (Well-Known Ports). Yerli tərtibat (development) zamanı adətən 1024-dən yuxarı portlar (3000, 5000, 8080) seçilir.</li>
  </ul>
</div>

<h3>1. Localhost — Öz Kompüterini Serverə Çevirmək</h3>
<p>Server dedikdə mütləq uzaq ölkələrdəki nəhəng server otaqları nəzərdə tutulmur. Node.js kodunu öz kompüterinizdə icra etdikdə, kompüteriniz eyni anda həm müştəri (brauzer), həm də server rolunu oynayır. Buna <strong>localhost</strong> (şəbəkə protokolunda <code>127.0.0.1</code> daxili dövrə - loopback ünvanı) deyilir.</p>

<div class="warning-box">
  <strong>🪤 Qızıl Qayda / Tələyə Düşmə: 'localhost' ilə 'İnternet Ünvanı'nı Qarışdırmaq!</strong>
  <p>Yeni başlayanlar bəzən <code>localhost:3000</code> ünvanını dostuna göndərib "saytıma bax" deyirlər. Nəzərə alın ki, <code>localhost</code> <strong>YALNIZ</strong> sizin öz kompüterinizin daxili şəbəkəsində mövcuddur. Kənar istifadəçilərin daxil olması üçün tətbiq mütləq canlı bulud serverinə (cloud hosting, VPS və s.) yerləşdirilməlidir (deploy).</p>
</div>

<h3>2. Brauzerdə URL Daxil Etdikdə Baş Verən 5 Addım</h3>
<ol>
  <li><strong>DNS Sorğusu:</strong> Brauzer domen adını (məsələn: <code>google.com</code>) DNS server vasitəsilə kompüterin anladığı əsl IP ünvana çevirir.</li>
  <li><strong>HTTP Sorğusu:</strong> Brauzer həmin IP və Porta uyğun TCP/IP bağlantısı quraraq HTTP sorğusu (Request) göndərir.</li>
  <li><strong>Server Emalı:</strong> Server daxil olan sorğunu qarşılayır, marşrutu yoxlayır, verilənlər bazasından datanı çıxarır və biznes məntiqini icra edir.</li>
  <li><strong>HTTP Cavabı:</strong> Server hazırladığı məlumatı müvafiq HTTP status kodu (200, 201 və s.) ilə birlikdə paketləyib brauzerə qaytarır (Response).</li>
  <li><strong>Render:</strong> Brauzer qəbul etdiyi HTML/CSS və ya JSON məlumatını emal edərək ekranda vizual nəticəni istifadəçiyə təqdim edir.</li>
</ol>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: process Qlobal Obyekti, CLI Arqumentləri (process.argv) və Çoxnüvəli os.cpus()</h4>
<p>Brauzer mühitində qlobal idarəetmə mərkəzi <code>window</code> və <code>document</code> olduğu kimi, Node.js mühitində bütün əməliyyat sistemi prosesini idarə edən qlobal obyekt <strong><code>process</code></strong>-dir. O, cari işçi mühit, əməliyyat sisteminin resursları, yaddaş və icra arqumentləri haqqında tam nəzarət imkanı yaradır.</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Parametr / Metod</th>
        <th>Təyinatı</th>
        <th>İstehsalat Nümunəsi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>process.env</code></td>
        <td>Sistem və mühit dəyişənlərini saxlayır</td>
        <td><code>const PORT = process.env.PORT || 3000;</code></td>
      </tr>
      <tr>
        <td><code>process.argv</code></td>
        <td>Terminaldan ötürülən CLI arqumentləri massividir</td>
        <td><code>node server.js --port=4000 --env=prod</code></td>
      </tr>
      <tr>
        <td><code>process.cwd()</code></td>
        <td>Node.js-in başladıldığı cari işçi qovluq ünvanıdır</td>
        <td><code>console.log(process.cwd());</code></td>
      </tr>
      <tr>
        <td><code>process.memoryUsage()</code></td>
        <td>RAM istifadəsini (Heap, RSS) baytlarla göstərir</td>
        <td>Yaddaş sızmalarını (Memory Leak) monitorinq etmək</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>1. Terminal Arqumentlərinin (CLI Flags) Təhlili:</strong> <code>process.argv</code> massivinin ilk iki elementi həmişə Node.js icra faylının və işə salınan skriptin yoludur. Faktiki istifadəçi arqumentləri <code>[2]</code> indeksindən başlayır:</p>

<pre><code class="language-javascript">// Məsələn icra: node app.js --port=5000 --rejim=test
const args = process.argv.slice(2);
const arqumentler = {};

args.forEach(arg => {
  if (arg.startsWith('--')) {
    const [acar, deyer] = arg.slice(2).split('=');
    arqumentler[acar] = deyer;
  }
});
console.log(arqumentler); // { port: "5000", rejim: "test" }</code></pre>

<p><strong>2. Çoxnüvəli Prosessorlar və Klasterləşdirmə (Clustering):</strong> Node.js tək axınlı (single-threaded) icra modelinə malikdir. Bu o deməkdir ki, serverinizdə 8 və ya 16 nüvəli müasir prosessor olsa belə, adi Node.js serveri yalnız tək bir nüvədən istifadə edəcəkdir!</p>

<div class="warning-box">
  <strong>⚡ Çoxnüvəli Miqyaslama (Multi-Core Scaling):</strong><br>
  Bütün prosessor nüvələrindən maksimum yararlanmaq üçün <code>os.cpus().length</code> ilə nüvə sayını müəyyən edib, Node.js-in <strong><code>cluster</code></strong> modulu və ya istehsalatda <strong>PM2</strong> proses meneceri vasitəsilə hər nüvə üçün bir işçi proses (Worker Process) başladılır. Bu, eyni portu dinləyərək serverin eyni anda emal etdiyi sorğu sayını nüvələrin sayı qədər artırır!
</div>`,
        "codeExamples": [
          {
            "title": "Mühit Dəyişənləri və Port Təyinatı",
            "code": "const port = process.env.PORT || 3000;\nconst muhit = process.env.NODE_ENV || 'development';\nconsole.log(`Server dinləyir -> Port: ${port} | Mühit: ${muhit}`);",
            "output": "Server dinləyir -> Port: 5000 | Mühit: production"
          },
          {
            "title": "process.memoryUsage() ilə Yaddaş İzləməsi",
            "code": "const mem = process.memoryUsage ? process.memoryUsage() : { heapUsed: 10485760 };\nconst heapMB = Math.round(mem.heapUsed / 1024 / 1024);\nconsole.log(`İstifadə olunan yaddaş (Heap): ~${heapMB} MB`);",
            "output": "İstifadə olunan yaddaş (Heap): ~10 MB"
          }
        ],
        "exercises": [
          {
            "id": "ex-18-1-1",
            "title": "Server Mühiti və Qovluq Göstəricilərinin Təyini",
            "instruction": "Node.js qlobal proses parametrlərindən istifadə edərək cari işçi qovluğu və icra rejimini \"Mühit: [rejim] | Qovluq: [yol]\" formatında konsol ekranında əks etdirin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Mühit: production | Qovluq: /home/jsoyren/project",
            "hint": "process.env.NODE_ENV və process.cwd() funksiyalarından istifadə edin.",
            "solutionCode": "const muhit = process.env.NODE_ENV || \"development\";\nconst qovluq = process.cwd();\nconsole.log(`Mühit: ${muhit} | Qovluq: ${qovluq}`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-18-1-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Brauzer Obyektini (window/document) Node.js-də Çağırmaq Xətası",
            "instruction": "Tərtibatçı Node.js server kodunda səhvən brauzerə məxsus <code>window.location</code> parametrini oxumağa çalışır və nəticədə <code>ReferenceError</code> baş verir. Kodu elə düzəldin ki, port parametrini Node.js-in <code>process.env.PORT</code> obyektindən oxusun və <code>Server portu: 5000</code> çap edilsin.",
            "description": "Tərtibatçı Node.js server kodunda səhvən brauzerə məxsus <code>window.location</code> parametrini oxumağa çalışır və nəticədə <code>ReferenceError</code> baş verir. Kodu elə düzəldin ki, port parametrini Node.js-in <code>process.env.PORT</code> obyektindən oxusun və <code>Server portu: 5000</code> çap edilsin.",
            "buggyCode": "// XƏTA: Node.js-də window və ya document obyekti mövcud deyil\nconst port = window.location ? window.location.port : 3000;\nconsole.log(\"Server portu:\", port);",
            "correctCode": "const port = process.env.PORT || 3000;\nconsole.log(\"Server portu:\", port);",
            "correctOutput": "Server portu: 5000",
            "expectedOutput": "Server portu: 5000",
            "explanation": "Node.js server mühitində qrafik brauzer pəncərəsi olmadığı üçün 'window' və 'document' obyektləri təyin edilməyib. Konfiqurasiya dəyərləri 'process.env' vasitəsilə əldə edilir.",
            "hint": "Server portunu təyin etmək üçün process.env.PORT || 3000 yazılışından istifadə edin."
          }
        ]
      },
      {
        "id": "topic-18-2",
        "title": "Node.js Daxili HTTP Modulu ilə İlk Server (http.createServer)",
        "theory": `<h3>📦 Xalis Node.js və 'http' Modulu</h3>
<p>Node.js heç bir kənar kitabxana (npm paketi) quraşdırmadan, daxili <strong><code>http</code></strong> modulu vasitəsilə tam funksional veb server yaratmaq imkanına malikdir. Müasir dövrdə Express və digər freymvorklar geniş istifadə olunsa da, onların hamısı məhz bu daxili <code>http</code> modulunun təməli üzərində inşa edilmişdir.</p>

<div class="tip-box">
  <strong>✉️ "Məktub Zərfi və Cavab Vərəqəsi" Analogiyası:</strong>
  <ul>
    <li><strong><code>req</code> (IncomingMessage — Sorğu):</strong> Müştərinin serverə göndərdiyi məktub zərfidir. İçində URL (<code>req.url</code>), istifadə olunan HTTP metodu (<code>req.method</code>) və başlıqlar (headers) yerləşir.</li>
    <li><strong><code>res</code> (ServerResponse — Cavab):</strong> Serverin müştəriyə təqdim etdiyi rəsmi cavab blankıdır. Status kodunu (<code>res.statusCode = 200</code>), başlıqları (<code>res.setHeader()</code>) təyin edir və <code>res.end()</code> ilə cavabı möhürləyib şəbəkə vasitəsilə yola salır.</li>
  </ul>
</div>

<div class="warning-box">
  <strong>🪤 Qızıl Qayda / Tələyə Düşmə: res.end() Çağırışını Unutmaq!</strong>
  <p>Xalis <code>http</code> modulu ilə işləyərkən ən təhlükəsiz görünən, lakin ən dağıdıcı səhv <code>res.end()</code> çağırışını unutmaqdır. Bu metod çağırılmadıqda, server cavabın tamamlandığını brauzerə bildirmir. Nəticədə brauzer əbədi yüklənmə çarxında (Pending / Hanging) ilişib qalır və nəhayət müştəri <code>ETIMEDOUT</code> xətası alır!</p>
</div>

<h3>Niyə Xalis Node.js İstehsalatda Kifayət Etmir?</h3>
<p>Xalis <code>http.createServer</code> ilə marşrutlaşdırma apararkən hər bir səhifə üçün əl ilə <code>if (req.url === '/' && req.method === 'GET')</code> şəlalələri qurmaq, dinamik parametrləri əllə ayırmaq və JSON gövdəsini axınlar (streams) vasitəsilə hissə-hissə oxumaq lazımdır. Bu, kodun sürətlə böyüməsinə və xətalara səbəb olduğu üçün sənayedə qəbul edilmiş standart <strong>Express.js</strong> freymvorkuna müraciət edilir.</p>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: EventEmitter Nüvəsi və Axınlar (Streams & Buffers)</h4>
<p>Node.js asinxron arxitekturasının tam ürəyində <strong>Observer (Müşahidəçi)</strong> dizayn şablonuna əsaslanan <strong><code>EventEmitter</code></strong> sinfi dayanır. Əslində Node.js HTTP serveri, daxil olan <code>req</code> və cavab göndərən <code>res</code> obyektləri məhz birbaşa <code>EventEmitter</code>-dən miras alan Axınlardır (Streams):</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Hadisə Mexanizmi</th>
        <th>Rol və İzahı</th>
        <th>Nümunə Kod</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>emitter.on(event, fn)</code></td>
        <td>Xüsusi hadisə üçün daimi dinləyici qeydiyyata alır</td>
        <td><code>server.on('request', (req, res) => { ... });</code></td>
      </tr>
      <tr>
        <td><code>emitter.emit(event, data)</code></td>
        <td>Hadisəni tətikləyir və bütün dinləyicilərə məlumat yayır</td>
        <td><code>emitter.emit('istifadeciQeydiyyati', user);</code></td>
      </tr>
      <tr>
        <td><code>Readable Stream (req)</code></td>
        <td>Məlumatı yaddaşı doldurmadan parça-parça (chunks) oxuyur</td>
        <td><code>req.on('data', chunk => { ... });</code></td>
      </tr>
      <tr>
        <td><code>Writable Stream (res)</code></td>
        <td>Məlumatı müştəriyə axın şəklində yazır və tamamlayır</td>
        <td><code>res.write('Hissə 1'); res.end();</code></td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Böyük Həcmli Məlumatların İdarəsi (Streams vs fs.readFile):</strong> 2 QB həcmində video və ya faylı oxumaq üçün <code>fs.readFile()</code> istifadə etsəniz, Node.js bütün 2 QB-ı bir anda RAM-a yükləməyə çalışacaq və <code>JavaScript heap out of memory</code> xətası ilə qəzaya uğrayacaqdır!</p>

<pre><code class="language-javascript">// ✅ MÜHƏNDİSLİK STANDARTI: Yaddaş qənaətli axın (Pipe):
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  // Fayl RAM-a bütöv yüklənmir, 64 KB-lıq kiçik buferlər şəklində birbaşa müştəriyə axıdılır!
  const stream = fs.createReadStream('boyuk-video.mp4');
  stream.pipe(res);
});</code></pre>`,
        "codeExamples": [
          {
            "title": "Xalis http Modulu ilə Sadə Server Qurulması",
            "code": "const server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Salam, Node.js HTTP Serveri!');\n});\nserver.listen(3000, () => {\n  console.log('Server 3000 portunda işə düşdü!');\n});\nserver.simulateRequest('/');",
            "output": "Server 3000 portunda işə düşdü!\nSalam, Node.js HTTP Serveri!"
          },
          {
            "title": "EventEmitter ilə Xüsusi Hadisə İdarəsi",
            "code": "const EventEmitter = require('events');\nconst emiter = new EventEmitter();\n\nemiter.on('odenis', (mebleg) => {\n  console.log(`Ödəniş qəbul edildi: ${mebleg} AZN`);\n});\n\nemiter.emit('odenis', 150);",
            "output": "Ödəniş qəbul edildi: 150 AZN"
          }
        ],
        "exercises": [
          {
            "id": "ex-18-2-1",
            "title": "Hadisə Emitenti (EventEmitter) ilə Əlaqələndirmə",
            "instruction": "Node.js daxili 'events' modulundan istifadə edərək 'server' adlı EventEmitter yaradın. 'start' hadisəsi baş verdikdə port nömrəsini qəbul edib konsola 'Server portu: [port]' çap edən dinləyici qurun və hadisəni 3000 arqumenti ilə tətikləyin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Server portu: 3000",
            "hint": "const EventEmitter = require('events'); server.on('start', cb); server.emit('start', 3000);",
            "solutionCode": "const EventEmitter = require(\"events\");\nconst server = new EventEmitter();\nserver.on(\"start\", (port) => {\n  console.log(`Server portu: ${port}`);\n});\nserver.emit(\"start\", 3000);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-18-2-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "Xalis http.createServer() Daxilində res.end() Unudulması",
            "instruction": "Aşağıdakı server sorğunu qəbul edir, lakin <code>res.end()</code> çağırılmadığı üçün cavab asılı qalır və <code>sim.ended</code> false olur. Koda <code>res.end(\"Uğurlu cavab\");</code> əlavə edərək sorğunun düzgün başa çatmasını təmin edin.",
            "description": "Aşağıdakı server sorğunu qəbul edir, lakin <code>res.end()</code> çağırılmadığı üçün cavab asılı qalır və <code>sim.ended</code> false olur. Koda <code>res.end(\"Uğurlu cavab\");</code> əlavə edərək sorğunun düzgün başa çatmasını təmin edin.",
            "buggyCode": "const server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  // XƏTA: res.end() unudulduğu üçün brauzer əbədi gözləmə vəziyyətində qalır\n});\nconst sim = server.simulateRequest(\"/\");\nconsole.log(\"Sorğu statusu:\", sim.ended ? \"Tamamlandı\" : \"Asılı qaldı\");",
            "correctCode": "const server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.end(\"Uğurlu cavab\");\n});\nconst sim = server.simulateRequest(\"/\");\nconsole.log(\"Sorğu statusu:\", sim.ended ? \"Tamamlandı\" : \"Asılı qaldı\");",
            "correctOutput": "Uğurlu cavab\nSorğu statusu: Tamamlandı",
            "expectedOutput": "Uğurlu cavab\nSorğu statusu: Tamamlandı",
            "explanation": "Node.js daxili HTTP modulunda 'res.end()' metodu HTTP axınını bağlayır və məlumat paketini müştəriyə yekunlaşdıraraq göndərir. Çağırılmadıqda sorğu cavabsız qalır.",
            "hint": "res.end('Uğurlu cavab') çağıraraq HTTP cavab axınını tamamlayın."
          }
        ]
      },
      {
        "id": "topic-18-3",
        "title": "Modul Sistemləri (CommonJS vs ESM) və npm Ekosistemi",
        "theory": `<h3>🧩 JavaScript Modul Sistemləri: CommonJS vs ES Modules</h3>
<p>Böyük miqyaslı tətbiqlərdə minlərlə sətir kodu tək bir faylda saxlamaq arxitektura cəhətdən yolverilməzdir. Node.js tarixində iki əsas modul formatı mövcuddur:</p>
<ul>
  <li><strong>CommonJS (CJS):</strong> Node.js-in ənənəvi modul sistemidir. <code>require()</code> ilə modullar sinxron olaraq işləmə anında (runtime) yüklənir, <code>module.exports</code> ilə ixrac edilir.</li>
  <li><strong>ES Modules (ESM):</strong> Müasir ECMAScript rəsmi standartıdır. <code>import</code> və <code>export</code> açar sözlərindən istifadə edir, statik olaraq təhlil edilir və asinxron təbiətə malikdir. Müasir layihələrdə <code>package.json</code>-a <code>"type": "module"</code> əlavə edərək aktivləşdirilir.</li>
</ul>

<div class="tip-box">
  <strong>📦 'package.json' — Layihənin Rəsmi Kimlik Vəsiqəsi:</strong>
  <p>Hər bir Node.js layihəsi bir <code>package.json</code> manifest faylı ilə idarə olunur. Bu fayl layihənin adını, versiyasını, işəsalma skriptlərini (<code>npm start</code>, <code>npm run dev</code>) və ən əsası layihənin ehtiyac duyduğu kitabxanaları qeyd edir:</p>
  <ul>
    <li><strong>dependencies:</strong> Layihənin canlıda (istehsalatda) işləməsi üçün vacib paketlər (məsələn: <code>express</code>, <code>pg</code>, <code>bcrypt</code>).</li>
    <li><strong>devDependencies:</strong> Yalnız proqramlaşdırma və test mərhələsində lazım olan yardımçı alətlər (məsələn: <code>nodemon</code>, <code>jest</code>, <code>eslint</code>).</li>
  </ul>
</div>

<div class="warning-box">
  <strong>🪤 Qızıl Qayda / Tələyə Düşmə: 'node_modules' Qovluğunu Git-ə Yükləmək!</strong>
  <p>Quraşdırılan paketlərin real mənbə kodları <code>node_modules</code> qovluğunda saxlanılır. Bu qovluq on minlərlə xırda fayldan və yüzlərlə meqabaytdan ibarət ola bilər. Onu heç bir halda Git anbarına (GitHub / GitLab) yükləmək olmaz! Layihənin kök qovluğunda mütləq <strong><code>.gitignore</code></strong> faylı yaradılmalı və içinə <code>node_modules</code> sətri əlavə edilməlidir. Digər tərtibatçılar və ya bulud serverləri layihəni <code>package.json</code> əsasında sadəcə <strong><code>npm install</code></strong> əmri ilə yenidən qururlar.</p>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: fs.promises Asinxron Fayl Sistemi, path Modulu və Path Traversal Müdafiəsi</h4>
<p>Backend tərtibatında fayl sistemi ilə işləyərkən ən böyük iki təhlükə: sinxron funksiyalarla Node.js tək axınını dondurmaq (Event Loop blocking) və təhlükəsizlik cəhətdən zəif yol (path) birləşdirməsi nəticəsində <strong>Path Traversal</strong> hücumuna məruz qalmaqdır.</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Modul & Metod</th>
        <th>Təyinatı və Fərqi</th>
        <th>Tövsiyə Olunan İstifadə</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>fs.promises</code></td>
        <td>Faylları qeyri-bloklayıcı Promise/async-await ilə oxuyur/yazır</td>
        <td><code>const data = await fs.readFile('fayl.txt', 'utf8');</code></td>
      </tr>
      <tr>
        <td><code>fs.readFileSync</code></td>
        <td>Sinxron bloklayıcıdır. Bütün serveri əməliyyat bitənə qədər dondurur!</td>
        <td>Yalnız server start anında konfiqurasiya üçün olar</td>
      </tr>
      <tr>
        <td><code>path.join()</code></td>
        <td>Əməliyyat sisteminə uyğun separatorla (/ və ya \\) yolları birləşdirir</td>
        <td><code>path.join(__dirname, 'uploads', faylAdi);</code></td>
      </tr>
      <tr>
        <td><code>path.resolve()</code></td>
        <td>Nisbi yolu mütləq (absolute) sistem yoluna çevirir</td>
        <td>Təhlükəsizlik yoxlanışları və kök qovluq təyinatı</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Path Traversal (Directory Traversal) Hücumu və Müdafiə:</strong> Təsəvvür edin ki, serveriniz istifadəçinin verdiyi fayl adını oxuyub göndərir: <code>/api/fayl?ad=hesabat.pdf</code>. Əgər haker fayl adı olaraq <code>../../../../etc/passwd</code> və ya <code>../../.env</code> göndərərsə nə baş verir?</p>

<pre><code class="language-javascript">const path = require('path');
const fs = require('fs').promises;

// ❌ ZƏİF KOD: Path Traversal-a açıqdır!
// const fileToRead = path.join(__dirname, 'ictimai', req.query.ad);

// ✅ PEŞƏKAR MÜDAFİƏ:
const ictimaiQovluq = path.resolve(__dirname, 'ictimai');
const hedeflenenFayl = path.resolve(ictimaiQovluq, req.query.ad);

// Yoxlayırıq: Hədəflənən fayl icazəli qovluğun daxilindədirmi?
if (!hedeflenenFayl.startsWith(ictimaiQovluq)) {
  throw new Error("Giriş qadağandır: Qeyri-qanuni qovluq keçidi cəhdi!");
}
const mezmun = await fs.readFile(hedeflenenFayl, 'utf8');</code></pre>`,
        "codeExamples": [
          {
            "title": "package.json Faylının Asinxron Oxunması",
            "code": "const fs = require('fs').promises;\nconst data = await fs.readFile('package.json', 'utf8');\nconst pkg = JSON.parse(data);\nconsole.log(`Ad: ${pkg.name} | Server: ${pkg.server}`);",
            "output": "Ad: jsoyren-backend | Server: JSÖyrən API"
          },
          {
            "title": "path.join və path.resolve ilə Təhlükəsiz Yol Quraşdırılması",
            "code": "const path = require('path');\nconst faylYolu = path.join('/app', 'data', 'users.json');\nconsole.log('Birləşdirilmiş fayl yolu:', faylYolu.replace(/\\\\/g, '/'));",
            "output": "Birləşdirilmiş fayl yolu: /app/data/users.json"
          }
        ],
        "exercises": [
          {
            "id": "ex-18-3-1",
            "title": "Asinxron Konfiqurasiya Faylının Təhlili",
            "instruction": "Fayl sistemindən 'package.json' faylını oxuyaraq layihənin adını və 'express' asılılığının versiya nömrəsini \"Layihə: [ad] | Express: [versiya]\" formatında çap edin.",
            "starterCode": "// Kodunuzu buraya yazın\n",
            "expectedOutput": "Layihə: jsoyren-backend | Express: ^4.19.2",
            "hint": "JSON.parse() ilə obyekti təhlil edin və pkg.dependencies.express xassəsini oxuyun.",
            "solutionCode": "const fs = require(\"fs\").promises;\nconst data = await fs.readFile(\"package.json\", \"utf-8\");\nconst pkg = JSON.parse(data);\nconsole.log(`Layihə: ${pkg.name} | Express: ${pkg.dependencies.express}`);"
          }
        ],
        "bugFixes": [
          {
            "id": "bug-18-3-1",
            "type": "bugfix",
            "disableHardcodeCheck": true,
            "title": "CommonJS-də exports Dəyişəninə Birbaşa Mənimsədilmə Səhvi",
            "instruction": "Node.js-də 'exports' sadəcə 'module.exports'-a olan istinaddır. Birbaşa obyekt mənimsədildikdə əlaqə qırılır və ixrac boş qalır. Kodu 'module.exports' istifadə edəcək şəkildə düzəldin.",
            "description": "Node.js-də 'exports' sadəcə 'module.exports'-a olan istinaddır. Birbaşa obyekt mənimsədildikdə əlaqə qırılır və ixrac boş qalır. Kodu 'module.exports' istifadə edəcək şəkildə düzəldin.",
            "buggyCode": "let module = { exports: {} };\nlet exports = module.exports;\n\n// XƏTA: exports = {...} yazıldıqda module.exports yenilənmir\nexports = { salam: () => \"Salam!\" };\n\nconsole.log(\"İxrac statusu:\", typeof module.exports.salam === \"function\" ? \"Uğurlu\" : \"Boş qaldı\");",
            "correctCode": "let module = { exports: {} };\nlet exports = module.exports;\n\nmodule.exports = { salam: () => \"Salam!\" };\n\nconsole.log(\"İxrac statusu:\", typeof module.exports.salam === \"function\" ? \"Uğurlu\" : \"Boş qaldı\");",
            "correctOutput": "İxrac statusu: Uğurlu",
            "expectedOutput": "İxrac statusu: Uğurlu",
            "explanation": "CommonJS mühitində modulu bütöv bir obyekt və ya funksiya kimi ixrac etmək üçün həmişə 'module.exports' təyin olunmalıdır.",
            "hint": "exports = {...} əvəzinə module.exports = {...} yazın."
          }
        ]
      }
    ]
  }
];

// Ensure two-way sync between exercise/exercises and bugFix/bugFixes
SECTIONS_18[0].topics.forEach(t => {
  if (t.exercises && t.exercises.length > 0) t.exercise = t.exercises[0];
  if (t.bugFixes && t.bugFixes.length > 0) t.bugFix = t.bugFixes[0];
});

module.exports = { SECTIONS_18 };
