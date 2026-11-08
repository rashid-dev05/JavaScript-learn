var SECTIONS_18 = [
  {
    "id": "section-18",
    "title": "Bölmə 18: Node.js Əsasları və İcra Mühiti",
    "icon": "🟢",
    "topics": [
      {
        "id": "topic-18-1",
        "title": "Server Nədir, Localhost və Port Anlayışı (Mənzil Nömrəsi Analogiyası)",
        "theory": "<h3>🟢 Server Nədir? — \"Restoranın Mətbəxi\" Analogiyası</h3>\n<p>HTML, CSS və brauzer JavaScript-i ilə tanış olan hər bir developer veb səhifənin istifadəçiyə görünən tərəfini (<strong>Frontend</strong>) yaxşı tanıyır. Bəs brauzerdə URL yazdıqda və ya düyməyə kliklədikdə məlumatlar haradan gəlir və kim tərəfindən emal olunur?</p>\n\n<p>Təsəvvür edin ki, restorandasınız. Masada oturub menyudan yemək sifariş edirsiniz (müştəri / <strong>Client</strong>). Amma yeməyi siz masada hazırlamırsınız — sifariş qapalı mətbəxə ötürülür və aşpazlar tərəfindən hazırlanır (<strong>Server</strong>). Server — müştərinin (brauzerin və ya mobil tətbiqin) göndərdiyi sorğunu (<strong>Request</strong>) qəbul edən, verilənlər bazasından məlumatları toplayan, biznes məntiqini icra edən və nəticəni cavab (<strong>Response</strong>) olaraq geri qaytaran proqram təminatıdır.</p>\n\n<div class=\"tip-box\">\n  <strong>🏢 \"Mənzil Nömrəsi\" Analogiyası (Port Nədir?):</strong>\n  <p>Kompüterinizi böyük bir çoxmərtəbəli yaşayış binası kimi təsəvvür edin. Binanın vahid bir küçə ünvanı var (<strong>IP ünvanı</strong>, məsələn: <code>127.0.0.1</code>). Lakin binada onlarla fərqli mənzil və ofis yerləşir. Hər bir proqram fərqli bir \"mənzildə\" fəaliyyət göstərir. Məhz <strong>Port</strong> — bir kompüterdə eyni anda fəaliyyət göstərən müxtəlif şəbəkə xidmətlərini bir-birindən ayıran unikal rəqəmsal mənzil nömrəsidir:</p>\n  <ul>\n    <li><code>localhost:3000</code> → 3000 nömrəli mənzildə Node.js / Express veb serveriniz çalışır.</li>\n    <li><code>localhost:5432</code> → 5432 nömrəli mənzildə PostgreSQL verilənlər bazası serveri dinləyir.</li>\n    <li><code>localhost:3306</code> → 3306 nömrəli mənzildə MySQL serveri sorğuları qəbul edir.</li>\n    <li><code>localhost:6379</code> → 6379 nömrəli mənzildə Redis keş serveri xidmət göstərir.</li>\n    <li><em>Port Standartları:</em> 0-dan 1023-ə qədər olan portlar (məsələn: 80 HTTP, 443 HTTPS, 22 SSH) əməliyyat sistemi tərəfindən qorunur (Well-Known Ports). Yerli tərtibat (development) zamanı adətən 1024-dən yuxarı portlar (3000, 5000, 8080) seçilir.</li>\n  </ul>\n</div>\n\n<h3>1. Localhost — Öz Kompüterini Serverə Çevirmək</h3>\n<p>Server dedikdə mütləq uzaq ölkələrdəki nəhəng server otaqları nəzərdə tutulmur. Node.js kodunu öz kompüterinizdə icra etdikdə, kompüteriniz eyni anda həm müştəri (brauzer), həm də server rolunu oynayır. Buna <strong>localhost</strong> (şəbəkə protokolunda <code>127.0.0.1</code> daxili dövrə - loopback ünvanı) deyilir.</p>\n\n<div class=\"warning-box\">\n  <strong>🪤 Qızıl Qayda / Tələyə Düşmə: 'localhost' ilə 'İnternet Ünvanı'nı Qarışdırmaq!</strong>\n  <p>Yeni başlayanlar bəzən <code>localhost:3000</code> ünvanını dostuna göndərib \"saytıma bax\" deyirlər. Nəzərə alın ki, <code>localhost</code> <strong>YALNIZ</strong> sizin öz kompüterinizin daxili şəbəkəsində mövcuddur. Kənar istifadəçilərin daxil olması üçün tətbiq mütləq canlı bulud serverinə (cloud hosting, VPS və s.) yerləşdirilməlidir (deploy).</p>\n</div>\n\n<h3>2. Brauzerdə URL Daxil Etdikdə Baş Verən 5 Addım</h3>\n<ol>\n  <li><strong>DNS Sorğusu:</strong> Brauzer domen adını (məsələn: <code>google.com</code>) DNS server vasitəsilə kompüterin anladığı əsl IP ünvana çevirir.</li>\n  <li><strong>HTTP Sorğusu:</strong> Brauzer həmin IP və Porta uyğun TCP/IP bağlantısı quraraq HTTP sorğusu (Request) göndərir.</li>\n  <li><strong>Server Emalı:</strong> Server daxil olan sorğunu qarşılayır, marşrutu yoxlayır, verilənlər bazasından datanı çıxarır və biznes məntiqini icra edir.</li>\n  <li><strong>HTTP Cavabı:</strong> Server hazırladığı məlumatı müvafiq HTTP status kodu (200, 201 və s.) ilə birlikdə paketləyib brauzerə qaytarır (Response).</li>\n  <li><strong>Render:</strong> Brauzer qəbul etdiyi HTML/CSS və ya JSON məlumatını emal edərək ekranda vizual nəticəni istifadəçiyə təqdim edir.</li>\n</ol>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: process Qlobal Obyekti, CLI Arqumentləri (process.argv) və Çoxnüvəli os.cpus()</h4>\n<p>Brauzer mühitində qlobal idarəetmə mərkəzi <code>window</code> və <code>document</code> olduğu kimi, Node.js mühitində bütün əməliyyat sistemi prosesini idarə edən qlobal obyekt <strong><code>process</code></strong>-dir. O, cari işçi mühit, əməliyyat sisteminin resursları, yaddaş və icra arqumentləri haqqında tam nəzarət imkanı yaradır.</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Parametr / Metod</th>\n        <th>Təyinatı</th>\n        <th>İstehsalat Nümunəsi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>process.env</code></td>\n        <td>Sistem və mühit dəyişənlərini saxlayır</td>\n        <td><code>const PORT = process.env.PORT || 3000;</code></td>\n      </tr>\n      <tr>\n        <td><code>process.argv</code></td>\n        <td>Terminaldan ötürülən CLI arqumentləri massividir</td>\n        <td><code>node server.js --port=4000 --env=prod</code></td>\n      </tr>\n      <tr>\n        <td><code>process.cwd()</code></td>\n        <td>Node.js-in başladıldığı cari işçi qovluq ünvanıdır</td>\n        <td><code>console.log(process.cwd());</code></td>\n      </tr>\n      <tr>\n        <td><code>process.memoryUsage()</code></td>\n        <td>RAM istifadəsini (Heap, RSS) baytlarla göstərir</td>\n        <td>Yaddaş sızmalarını (Memory Leak) monitorinq etmək</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>1. Terminal Arqumentlərinin (CLI Flags) Təhlili:</strong> <code>process.argv</code> massivinin ilk iki elementi həmişə Node.js icra faylının və işə salınan skriptin yoludur. Faktiki istifadəçi arqumentləri <code>[2]</code> indeksindən başlayır:</p>\n\n<pre><code class=\"language-javascript\">// Məsələn icra: node app.js --port=5000 --rejim=test\nconst args = process.argv.slice(2);\nconst arqumentler = {};\n\nargs.forEach(arg => {\n  if (arg.startsWith('--')) {\n    const [acar, deyer] = arg.slice(2).split('=');\n    arqumentler[acar] = deyer;\n  }\n});\nconsole.log(arqumentler); // { port: \"5000\", rejim: \"test\" }</code></pre>\n\n<p><strong>2. Çoxnüvəli Prosessorlar və Klasterləşdirmə (Clustering):</strong> Node.js tək axınlı (single-threaded) icra modelinə malikdir. Bu o deməkdir ki, serverinizdə 8 və ya 16 nüvəli müasir prosessor olsa belə, adi Node.js serveri yalnız tək bir nüvədən istifadə edəcəkdir!</p>\n\n<div class=\"warning-box\">\n  <strong>⚡ Çoxnüvəli Miqyaslama (Multi-Core Scaling):</strong><br>\n  Bütün prosessor nüvələrindən maksimum yararlanmaq üçün <code>os.cpus().length</code> ilə nüvə sayını müəyyən edib, Node.js-in <strong><code>cluster</code></strong> modulu və ya istehsalatda <strong>PM2</strong> proses meneceri vasitəsilə hər nüvə üçün bir işçi proses (Worker Process) başladılır. Bu, eyni portu dinləyərək serverin eyni anda emal etdiyi sorğu sayını nüvələrin sayı qədər artırır!\n</div>",
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
          },
          {
            "id": "ex-18-1-2",
            "title": "Ətraf Mühit Dəyişənlərindən (ENV) Dinamik Port və Host Təyini",
            "instruction": "<code>process.env.PORT</code> parametrini oxuyun. Əgər təyin edilibsə ədədə çevirin, əks halda standart <code>3000</code> portunu fallback seçin. <code>process.env.HOST</code> üçün isə fallback olaraq <code>'127.0.0.1'</code> təyin edin. Nəticəni <code>Server ünvanı: http://${host}:${port}</code> formatında konsola çıxarın.",
            "starterCode": "// process.env obyektindən PORT və HOST parametrlərini oxuyun\n// Fallback olaraq port üçün 3000, host üçün '127.0.0.1' təyin edin\n\n",
            "expectedOutput": "Server ünvanı: http://localhost:5000",
            "hint": "const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000; const host = process.env.HOST || '127.0.0.1';",
            "solutionCode": "const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;\nconst host = process.env.HOST || '127.0.0.1';\nconsole.log(`Server ünvanı: http://${host}:${port}`);"
          },
          {
            "id": "ex-18-1-3",
            "title": "Port İcazələri və Ayrılmış Portların (Privileged Ports) Təhlükəsizlik Validasiyası",
            "instruction": "Sistemdə 1024-dən kiçik portlar xüsusi inzibatçı hüququ tələb edir. Daxil edilən port nömrəsini təhlil edən <code>validateServerPort(port)</code> funksiyası yazın. Əgər port 1 ilə 1023 arasındadırsa <code>\"Xüsusi icazə tələb olunur (Privileged)\"</code>, 1024 ilə 65535 arasındadırsa <code>\"Təhlükəsiz istifadəçi portu\"</code>, əks halda <code>\"Yolverilməz port\"</code> qaytarın. <code>80</code>, <code>3000</code> və <code>70000</code> üçün nəticələri konsola çıxarın.",
            "starterCode": "function validateServerPort(port) {\n  // Port diapazonunu yoxlayın\n}\n\nconsole.log(`80: ${validateServerPort(80)}`);\nconsole.log(`3000: ${validateServerPort(3000)}`);\nconsole.log(`70000: ${validateServerPort(70000)}`);\n",
            "expectedOutput": "80: Xüsusi icazə tələb olunur (Privileged)\n3000: Təhlükəsiz istifadəçi portu\n70000: Yolverilməz port",
            "hint": "Number(port) ilə müqayisə aparın: >= 1 && <= 1023 və >= 1024 && <= 65535.",
            "solutionCode": "function validateServerPort(port) {\n    const p = Number(port);\n    if (p >= 1 && p <= 1023) return \"Xüsusi icazə tələb olunur (Privileged)\";\n    if (p >= 1024 && p <= 65535) return \"Təhlükəsiz istifadəçi portu\";\n    return \"Yolverilməz port\";\n}\nconsole.log(`80: ${validateServerPort(80)}`);\nconsole.log(`3000: ${validateServerPort(3000)}`);\nconsole.log(`70000: ${validateServerPort(70000)}`);"
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
        ],
        "bugFix": {
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
      },
      {
        "id": "topic-18-2",
        "title": "Node.js Daxili HTTP Modulu ilə İlk Server (http.createServer)",
        "theory": "<h3>📦 Xalis Node.js və 'http' Modulu</h3>\n<p>Node.js heç bir kənar kitabxana (npm paketi) quraşdırmadan, daxili <strong><code>http</code></strong> modulu vasitəsilə tam funksional veb server yaratmaq imkanına malikdir. Müasir dövrdə Express və digər freymvorklar geniş istifadə olunsa da, onların hamısı məhz bu daxili <code>http</code> modulunun təməli üzərində inşa edilmişdir.</p>\n\n<div class=\"tip-box\">\n  <strong>✉️ \"Məktub Zərfi və Cavab Vərəqəsi\" Analogiyası:</strong>\n  <ul>\n    <li><strong><code>req</code> (IncomingMessage — Sorğu):</strong> Müştərinin serverə göndərdiyi məktub zərfidir. İçində URL (<code>req.url</code>), istifadə olunan HTTP metodu (<code>req.method</code>) və başlıqlar (headers) yerləşir.</li>\n    <li><strong><code>res</code> (ServerResponse — Cavab):</strong> Serverin müştəriyə təqdim etdiyi rəsmi cavab blankıdır. Status kodunu (<code>res.statusCode = 200</code>), başlıqları (<code>res.setHeader()</code>) təyin edir və <code>res.end()</code> ilə cavabı möhürləyib şəbəkə vasitəsilə yola salır.</li>\n  </ul>\n</div>\n\n<div class=\"warning-box\">\n  <strong>🪤 Qızıl Qayda / Tələyə Düşmə: res.end() Çağırışını Unutmaq!</strong>\n  <p>Xalis <code>http</code> modulu ilə işləyərkən ən təhlükəsiz görünən, lakin ən dağıdıcı səhv <code>res.end()</code> çağırışını unutmaqdır. Bu metod çağırılmadıqda, server cavabın tamamlandığını brauzerə bildirmir. Nəticədə brauzer əbədi yüklənmə çarxında (Pending / Hanging) ilişib qalır və nəhayət müştəri <code>ETIMEDOUT</code> xətası alır!</p>\n</div>\n\n<h3>Niyə Xalis Node.js İstehsalatda Kifayət Etmir?</h3>\n<p>Xalis <code>http.createServer</code> ilə marşrutlaşdırma apararkən hər bir səhifə üçün əl ilə <code>if (req.url === '/' && req.method === 'GET')</code> şəlalələri qurmaq, dinamik parametrləri əllə ayırmaq və JSON gövdəsini axınlar (streams) vasitəsilə hissə-hissə oxumaq lazımdır. Bu, kodun sürətlə böyüməsinə və xətalara səbəb olduğu üçün sənayedə qəbul edilmiş standart <strong>Express.js</strong> freymvorkuna müraciət edilir.</p>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: EventEmitter Nüvəsi və Axınlar (Streams & Buffers)</h4>\n<p>Node.js asinxron arxitekturasının tam ürəyində <strong>Observer (Müşahidəçi)</strong> dizayn şablonuna əsaslanan <strong><code>EventEmitter</code></strong> sinfi dayanır. Əslində Node.js HTTP serveri, daxil olan <code>req</code> və cavab göndərən <code>res</code> obyektləri məhz birbaşa <code>EventEmitter</code>-dən miras alan Axınlardır (Streams):</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Hadisə Mexanizmi</th>\n        <th>Rol və İzahı</th>\n        <th>Nümunə Kod</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>emitter.on(event, fn)</code></td>\n        <td>Xüsusi hadisə üçün daimi dinləyici qeydiyyata alır</td>\n        <td><code>server.on('request', (req, res) => { ... });</code></td>\n      </tr>\n      <tr>\n        <td><code>emitter.emit(event, data)</code></td>\n        <td>Hadisəni tətikləyir və bütün dinləyicilərə məlumat yayır</td>\n        <td><code>emitter.emit('istifadeciQeydiyyati', user);</code></td>\n      </tr>\n      <tr>\n        <td><code>Readable Stream (req)</code></td>\n        <td>Məlumatı yaddaşı doldurmadan parça-parça (chunks) oxuyur</td>\n        <td><code>req.on('data', chunk => { ... });</code></td>\n      </tr>\n      <tr>\n        <td><code>Writable Stream (res)</code></td>\n        <td>Məlumatı müştəriyə axın şəklində yazır və tamamlayır</td>\n        <td><code>res.write('Hissə 1'); res.end();</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>Böyük Həcmli Məlumatların İdarəsi (Streams vs fs.readFile):</strong> 2 QB həcmində video və ya faylı oxumaq üçün <code>fs.readFile()</code> istifadə etsəniz, Node.js bütün 2 QB-ı bir anda RAM-a yükləməyə çalışacaq və <code>JavaScript heap out of memory</code> xətası ilə qəzaya uğrayacaqdır!</p>\n\n<pre><code class=\"language-javascript\">// ✅ MÜHƏNDİSLİK STANDARTI: Yaddaş qənaətli axın (Pipe):\nconst fs = require('fs');\nconst http = require('http');\n\nhttp.createServer((req, res) => {\n  // Fayl RAM-a bütöv yüklənmir, 64 KB-lıq kiçik buferlər şəklində birbaşa müştəriyə axıdılır!\n  const stream = fs.createReadStream('boyuk-video.mp4');\n  stream.pipe(res);\n});</code></pre>",
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
          },
          {
            "id": "ex-18-2-2",
            "title": "Native HTTP ilə JSON Cavabı və Status Kodunun Təyini",
            "instruction": "<code>http.createServer</code> istifadə edərək sorğulara cavab verən server qurun. <code>res.writeHead()</code> ilə <code>200</code> status kodunu və <code>'Content-Type': 'application/json'</code> başlığını təyin edin. <code>res.end()</code> vasitəsilə <code>JSON.stringify({ status: 'aktiv', port: 3000 })</code> göndərin. Serveri <code>server.simulateRequest('/')</code> ilə sınaqdan keçirin.",
            "starterCode": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  // 200 status kodu və JSON başlığı təyin edin\n  // res.end ilə JSON cavabını yola salın\n});\n\nserver.simulateRequest('/');\n",
            "expectedOutput": "{\"status\":\"aktiv\",\"port\":3000}",
            "hint": "res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(...));",
            "solutionCode": "const http = require('http');\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ status: 'aktiv', port: 3000 }));\n});\nserver.simulateRequest('/');"
          },
          {
            "id": "ex-18-2-3",
            "title": "URL Marşrutuna (Routing) Görə Şaxələnmə və 404 Not Found",
            "instruction": "Daxili HTTP serverində <code>req.url</code> əsasında sadə marşrutlaşdırma qurun. Əgər <code>req.url === '/'</code> olarsa, <code>200</code> statusu ilə <code>\"Ana Səhifə\"</code>, <code>req.url === '/haqqimizda'</code> olarsa, <code>200</code> statusu ilə <code>\"Haqqımızda\"</code>, başqa istənilən marşrut üçün <code>404</code> statusu ilə <code>\"404 Səhifə Tapılmadı\"</code> mətni qaytarın (<code>res.end</code>). Serveri <code>server.simulateRequest('/elaqe')</code> ilə yoxlayın.",
            "starterCode": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  // req.url parametrini yoxlayın və müvafiq status kodu ilə cavab verin\n});\n\nserver.simulateRequest('/elaqe');\n",
            "expectedOutput": "404 Səhifə Tapılmadı",
            "hint": "if (req.url === '/') ... else if (req.url === '/haqqimizda') ... else res.writeHead(404, ...) və res.end(...);",
            "solutionCode": "const http = require('http');\nconst server = http.createServer((req, res) => {\n    if (req.url === '/') {\n        res.writeHead(200, { 'Content-Type': 'text/plain' });\n        res.end('Ana Səhifə');\n    } else if (req.url === '/haqqimizda') {\n        res.writeHead(200, { 'Content-Type': 'text/plain' });\n        res.end('Haqqımızda');\n    } else {\n        res.writeHead(404, { 'Content-Type': 'text/plain' });\n        res.end('404 Səhifə Tapılmadı');\n    }\n});\nserver.simulateRequest('/elaqe');"
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
        ],
        "exercise": {
          "id": "ex-18-2-1",
          "title": "Hadisə Emitenti (EventEmitter) ilə Əlaqələndirmə",
          "instruction": "Node.js daxili 'events' modulundan istifadə edərək 'server' adlı EventEmitter yaradın. 'start' hadisəsi baş verdikdə port nömrəsini qəbul edib konsola 'Server portu: [port]' çap edən dinləyici qurun və hadisəni 3000 arqumenti ilə tətikləyin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Server portu: 3000",
          "hint": "const EventEmitter = require('events'); server.on('start', cb); server.emit('start', 3000);",
          "solutionCode": "const EventEmitter = require(\"events\");\nconst server = new EventEmitter();\nserver.on(\"start\", (port) => {\n  console.log(`Server portu: ${port}`);\n});\nserver.emit(\"start\", 3000);"
        },
        "bugFix": {
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
      },
      {
        "id": "topic-18-3",
        "title": "Modul Sistemləri (CommonJS vs ESM) və npm Ekosistemi",
        "theory": "<h3>🧩 JavaScript Modul Sistemləri: CommonJS vs ES Modules</h3>\n<p>Böyük miqyaslı tətbiqlərdə minlərlə sətir kodu tək bir faylda saxlamaq arxitektura cəhətdən yolverilməzdir. Node.js tarixində iki əsas modul formatı mövcuddur:</p>\n<ul>\n  <li><strong>CommonJS (CJS):</strong> Node.js-in ənənəvi modul sistemidir. <code>require()</code> ilə modullar sinxron olaraq işləmə anında (runtime) yüklənir, <code>module.exports</code> ilə ixrac edilir.</li>\n  <li><strong>ES Modules (ESM):</strong> Müasir ECMAScript rəsmi standartıdır. <code>import</code> və <code>export</code> açar sözlərindən istifadə edir, statik olaraq təhlil edilir və asinxron təbiətə malikdir. Müasir layihələrdə <code>package.json</code>-a <code>\"type\": \"module\"</code> əlavə edərək aktivləşdirilir.</li>\n</ul>\n\n<div class=\"tip-box\">\n  <strong>📦 'package.json' — Layihənin Rəsmi Kimlik Vəsiqəsi:</strong>\n  <p>Hər bir Node.js layihəsi bir <code>package.json</code> manifest faylı ilə idarə olunur. Bu fayl layihənin adını, versiyasını, işəsalma skriptlərini (<code>npm start</code>, <code>npm run dev</code>) və ən əsası layihənin ehtiyac duyduğu kitabxanaları qeyd edir:</p>\n  <ul>\n    <li><strong>dependencies:</strong> Layihənin canlıda (istehsalatda) işləməsi üçün vacib paketlər (məsələn: <code>express</code>, <code>pg</code>, <code>bcrypt</code>).</li>\n    <li><strong>devDependencies:</strong> Yalnız proqramlaşdırma və test mərhələsində lazım olan yardımçı alətlər (məsələn: <code>nodemon</code>, <code>jest</code>, <code>eslint</code>).</li>\n  </ul>\n</div>\n\n<div class=\"warning-box\">\n  <strong>🪤 Qızıl Qayda / Tələyə Düşmə: 'node_modules' Qovluğunu Git-ə Yükləmək!</strong>\n  <p>Quraşdırılan paketlərin real mənbə kodları <code>node_modules</code> qovluğunda saxlanılır. Bu qovluq on minlərlə xırda fayldan və yüzlərlə meqabaytdan ibarət ola bilər. Onu heç bir halda Git anbarına (GitHub / GitLab) yükləmək olmaz! Layihənin kök qovluğunda mütləq <strong><code>.gitignore</code></strong> faylı yaradılmalı və içinə <code>node_modules</code> sətri əlavə edilməlidir. Digər tərtibatçılar və ya bulud serverləri layihəni <code>package.json</code> əsasında sadəcə <strong><code>npm install</code></strong> əmri ilə yenidən qururlar.</p>\n</div>\n\n<hr style=\"border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;\">\n\n<h4>🔬 Dərinləşmə: fs.promises Asinxron Fayl Sistemi, path Modulu və Path Traversal Müdafiəsi</h4>\n<p>Backend tərtibatında fayl sistemi ilə işləyərkən ən böyük iki təhlükə: sinxron funksiyalarla Node.js tək axınını dondurmaq (Event Loop blocking) və təhlükəsizlik cəhətdən zəif yol (path) birləşdirməsi nəticəsində <strong>Path Traversal</strong> hücumuna məruz qalmaqdır.</p>\n\n<div class=\"lesson-table-wrapper\">\n  <table class=\"lesson-table\">\n    <thead>\n      <tr>\n        <th>Modul & Metod</th>\n        <th>Təyinatı və Fərqi</th>\n        <th>Tövsiyə Olunan İstifadə</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>fs.promises</code></td>\n        <td>Faylları qeyri-bloklayıcı Promise/async-await ilə oxuyur/yazır</td>\n        <td><code>const data = await fs.readFile('fayl.txt', 'utf8');</code></td>\n      </tr>\n      <tr>\n        <td><code>fs.readFileSync</code></td>\n        <td>Sinxron bloklayıcıdır. Bütün serveri əməliyyat bitənə qədər dondurur!</td>\n        <td>Yalnız server start anında konfiqurasiya üçün olar</td>\n      </tr>\n      <tr>\n        <td><code>path.join()</code></td>\n        <td>Əməliyyat sisteminə uyğun separatorla (/ və ya \\) yolları birləşdirir</td>\n        <td><code>path.join(__dirname, 'uploads', faylAdi);</code></td>\n      </tr>\n      <tr>\n        <td><code>path.resolve()</code></td>\n        <td>Nisbi yolu mütləq (absolute) sistem yoluna çevirir</td>\n        <td>Təhlükəsizlik yoxlanışları və kök qovluq təyinatı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p><strong>Path Traversal (Directory Traversal) Hücumu və Müdafiə:</strong> Təsəvvür edin ki, serveriniz istifadəçinin verdiyi fayl adını oxuyub göndərir: <code>/api/fayl?ad=hesabat.pdf</code>. Əgər haker fayl adı olaraq <code>../../../../etc/passwd</code> və ya <code>../../.env</code> göndərərsə nə baş verir?</p>\n\n<pre><code class=\"language-javascript\">const path = require('path');\nconst fs = require('fs').promises;\n\n// ❌ ZƏİF KOD: Path Traversal-a açıqdır!\n// const fileToRead = path.join(__dirname, 'ictimai', req.query.ad);\n\n// ✅ PEŞƏKAR MÜDAFİƏ:\nconst ictimaiQovluq = path.resolve(__dirname, 'ictimai');\nconst hedeflenenFayl = path.resolve(ictimaiQovluq, req.query.ad);\n\n// Yoxlayırıq: Hədəflənən fayl icazəli qovluğun daxilindədirmi?\nif (!hedeflenenFayl.startsWith(ictimaiQovluq)) {\n  throw new Error(\"Giriş qadağandır: Qeyri-qanuni qovluq keçidi cəhdi!\");\n}\nconst mezmun = await fs.readFile(hedeflenenFayl, 'utf8');</code></pre>",
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
          },
          {
            "id": "ex-18-3-2",
            "title": "CommonJS Modul İxracı (module.exports) və Riyazi Köməkçi Funksiyalar",
            "instruction": "CommonJS standartı ilə <code>hesabla</code> obyektini qurun. Obyekt daxilində <code>topla(a, b)</code> və <code>vur(a, b)</code> funksiyaları təyin edin. Obyekti <code>module.exports = hesabla</code> ilə ixrac edin. <code>Cəm: [nəticə] | Hasil: [nəticə]</code> formatında konsola çıxarın (a=15, b=25 üçün topla; a=4, b=5 üçün vur).",
            "starterCode": "// hesabla obyektini qurun və module.exports vasitəsilə ixrac edin\n\n",
            "expectedOutput": "Cəm: 40 | Hasil: 20",
            "hint": "module.exports = { topla: (a, b) => a + b, vur: (a, b) => a * b };",
            "solutionCode": "const hesabla = {\n    topla: (a, b) => a + b,\n    vur: (a, b) => a * b\n};\nmodule.exports = hesabla;\nconsole.log(`Cəm: ${hesabla.topla(15, 25)} | Hasil: ${hesabla.vur(4, 5)}`);"
          },
          {
            "id": "ex-18-3-3",
            "title": "package.json dependencies və devDependencies Təhlili",
            "instruction": "Node.js layihələrində istehsalat asılılıqları (<code>dependencies</code>) ilə inkişaf asılılıqları (<code>devDependencies</code>) ayrılmalıdır. Daxil edilən <code>pkg</code> konfiqurasiyasından hər iki asılılıq kateqoriyasının sayını hesablayaraq <code>\"İstehsalat paketləri: [say] ədəd | İnkişaf paketləri: [say] ədəd\"</code> formatında konsola çıxarın.",
            "starterCode": "const pkg = {\n  name: \"e-ticaret-api\",\n  version: \"1.0.0\",\n  dependencies: {\n    \"express\": \"^4.19.2\",\n    \"pg\": \"^8.11.3\",\n    \"dotenv\": \"^16.4.5\"\n  },\n  devDependencies: {\n    \"nodemon\": \"^3.1.0\",\n    \"jest\": \"^29.7.0\"\n  }\n};\n\n// Paket saylarını hesablayın\n",
            "expectedOutput": "İstehsalat paketləri: 3 ədəd | İnkişaf paketləri: 2 ədəd",
            "hint": "Object.keys(pkg.dependencies).length və Object.keys(pkg.devDependencies).length istifadə edin.",
            "solutionCode": "const pkg = {\n    name: \"e-ticaret-api\",\n    version: \"1.0.0\",\n    dependencies: {\n        \"express\": \"^4.19.2\",\n        \"pg\": \"^8.11.3\",\n        \"dotenv\": \"^16.4.5\"\n    },\n    devDependencies: {\n        \"nodemon\": \"^3.1.0\",\n        \"jest\": \"^29.7.0\"\n    }\n};\nconst depCount = Object.keys(pkg.dependencies).length;\nconst devDepCount = Object.keys(pkg.devDependencies).length;\nconsole.log(`İstehsalat paketləri: ${depCount} ədəd | İnkişaf paketləri: ${devDepCount} ədəd`);"
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
        ],
        "exercise": {
          "id": "ex-18-3-1",
          "title": "Asinxron Konfiqurasiya Faylının Təhlili",
          "instruction": "Fayl sistemindən 'package.json' faylını oxuyaraq layihənin adını və 'express' asılılığının versiya nömrəsini \"Layihə: [ad] | Express: [versiya]\" formatında çap edin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "Layihə: jsoyren-backend | Express: ^4.19.2",
          "hint": "JSON.parse() ilə obyekti təhlil edin və pkg.dependencies.express xassəsini oxuyun.",
          "solutionCode": "const fs = require(\"fs\").promises;\nconst data = await fs.readFile(\"package.json\", \"utf-8\");\nconst pkg = JSON.parse(data);\nconsole.log(`Layihə: ${pkg.name} | Express: ${pkg.dependencies.express}`);"
        },
        "bugFix": {
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
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS_18 };
}
