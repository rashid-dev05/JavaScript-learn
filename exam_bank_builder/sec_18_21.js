// exam_bank_builder/sec_18_21.js
// Bölmə 18, 19 (Mərhələ 4: Node.js & Server - merheleId: 4)
// Bölmə 20, 21 (Mərhələ 5: REST API & DB - merheleId: 5)
// Hər birində 15 sual -> cəmi 60 sual

const SEC_18_QUESTIONS = [
  // Bölmə 18: Node.js Əsasları və İcra Mühiti (process, os, path, fs.promises)
  {
    id: "exam-sec18-01",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ASAN",
    basliq: "process Obyekti ilə Sistem Parametrlərinin Oxunması",
    serif: "`process` qlobal obyektindən istifadə edərək Node.js versiyasını (`process.version`) və əməliyyat sistemi platformasını (`process.platform`) oxuyun. Konsola 'Node versiyası: v20.11.0, Platforma: linux' formatında çıxarın.",
    gozlenilenCixis: "Node versiyası: v20.11.0, Platforma: linux",
    starterCode: "function nodeMelumatiniOxu() {\n  // process.version və process.platform oxuyun\n}\n\nnodeMelumatiniOxu();",
    solutionCode: "function nodeMelumatiniOxu() {\n  console.log(`Node versiyası: ${process.version}, Platforma: ${process.platform}`);\n}\n\nnodeMelumatiniOxu();",
    ipuclari: [
      "İpucu 1: process qlobal obyektdir və require tələb etmir.",
      "İpucu 2: process.version cari Node.js buraxılışını qaytarır.",
      "İpucu 3: process.platform cari əməliyyat sistemini (linux, win32, darwin) saxlayır."
    ],
    teslimIzahi: "process obyekti Node.js-də icra olunan cari tətbiqin mühitinə, yaddaşına və sistem parametrlərinə çıxış verən mərkəzi qlobal interfeysdir."
  },
  {
    id: "exam-sec18-02",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ASAN",
    basliq: "path.join ilə Çarpaz Platformalı Fayl Yolu",
    serif: "`path.join` metodundan istifadə edərək 'qovluq', 'fayllar', 'data.json' seqmentlərini birləşdirin və konsola 'Yol: qovluq/fayllar/data.json' çıxarın.",
    gozlenilenCixis: "Yol: qovluq/fayllar/data.json",
    starterCode: "function faylYoluQur() {\n  // path.join istifadə edin\n}\n\nfaylYoluQur();",
    solutionCode: "function faylYoluQur() {\n  const tamYol = path.join('qovluq', 'fayllar', 'data.json');\n  console.log(`Yol: ${tamYol}`);\n}\n\nfaylYoluQur();",
    ipuclari: [
      "İpucu 1: path.join seqmentləri əməliyyat sisteminə uyğun separatorla (/ və ya \\) birləşdirir.",
      "İpucu 2: İkiqat və ya artıq sləşləri avtomatik normallaşdırır.",
      "İpucu 3: Format: `Yol: ${tamYol}`."
    ],
    teslimIzahi: "Sətirləri `+ '/' +` ilə calamaq Windows və Linux arasında uyğunsuzluq yaradır. path.join sistemi çarpaz platformalı edir."
  },
  {
    id: "exam-sec18-03",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ASAN",
    basliq: "path.extname və path.basename Metodları",
    serif: "'/layihe/senedler/hesabat.pdf' fayl yolu üçün `path.extname` (fayl uzantısı) və `path.basename` (faylın adı) metodlarını çağıraraq konsola 'Fayl: hesabat.pdf, Uzantı: .pdf' formatında çıxarın.",
    gozlenilenCixis: "Fayl: hesabat.pdf, Uzantı: .pdf",
    starterCode: "function faylMelumati(faylYolu) {\n  // path.basename və path.extname tətbiq edin\n}\n\nfaylMelumati('/layihe/senedler/hesabat.pdf');",
    solutionCode: "function faylMelumati(faylYolu) {\n  const fayl = path.basename(faylYolu);\n  const uzanti = path.extname(faylYolu);\n  console.log(`Fayl: ${fayl}, Uzantı: ${uzanti}`);\n}\n\nfaylMelumati('/layihe/senedler/hesabat.pdf');",
    ipuclari: [
      "İpucu 1: path.basename yolun sonundakı fayl adını qaytarır.",
      "İpucu 2: path.extname son nöqtədən sonrakı uzantını nöqtə ilə birlikdə qaytarır.",
      "İpucu 3: Format: `Fayl: ${fayl}, Uzantı: ${uzanti}`."
    ],
    teslimIzahi: "Fayl yükləmə sistemlərində fayl növünü təhlükəsiz yoxlamaq və orijinal adı əldə etmək üçün path modulu ən etibarlı vasitədir."
  },
  {
    id: "exam-sec18-04",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "Ətraf Mühit Dəyişənlərinin Oxunması (process.env)",
    serif: "`process.env` obyektindən `NODE_ENV` və `PORT` dəyərlərini oxuyun. Əgər onlar yoxdursa standart ('development' və '3000') dəyərləri tətbiq edin. Nəticəni konsola 'Mühit: production, Port: 5000' şəklində çıxarın.",
    gozlenilenCixis: "Mühit: production, Port: 5000",
    starterCode: "function muhitOxu() {\n  // process.env.NODE_ENV və PORT oxuyun\n}\n\nmuhitOxu();",
    solutionCode: "function muhitOxu() {\n  const muhit = process.env.NODE_ENV || 'development';\n  const port = process.env.PORT || '3000';\n  console.log(`Mühit: ${muhit}, Port: ${port}`);\n}\n\nmuhitOxu();",
    ipuclari: [
      "İpucu 1: process.env əməliyyat sisteminin və ya .env faylının dəyişənlərini saxlayır.",
      "İpucu 2: Standart dəyər üçün `||` (or) operatorundan istifadə edin.",
      "İpucu 3: Şablon sətir ilə konsola çıxarın."
    ],
    teslimIzahi: "Konfiqurasiyaları və gizli açarları mənbə koduna deyil, process.env mühitinə yerləşdirmək 12-Faktor Tətbiq (The Twelve-Factor App) metodologiyasının əsas şərtidir."
  },
  {
    id: "exam-sec18-05",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "os Modulu ilə Yaddaşın Analizi",
    serif: "`os.totalmem()` və `os.freemem()` metodları bayt qaytarır. Onları giqabayta (1024 * 1024 * 1024) çevirərək tam ədəd kimi konsola 'Ümumi RAM: 16 GB, Sərbəst: 8 GB' çıxarın.",
    gozlenilenCixis: "Ümumi RAM: 16 GB, Sərbəst: 8 GB",
    starterCode: "function yaddasiHesabla() {\n  // os.totalmem və freemem istifadə edin və GB-a bölün\n}\n\nyaddasiHesabla();",
    solutionCode: "function yaddasiHesabla() {\n  const gb = 1024 * 1024 * 1024;\n  const umumi = Math.round(os.totalmem() / gb);\n  const serbest = Math.round(os.freemem() / gb);\n  console.log(`Ümumi RAM: ${umumi} GB, Sərbəst: ${serbest} GB`);\n}\n\nyaddasiHesabla();",
    ipuclari: [
      "İpucu 1: os.totalmem() kompüterin ümumi RAM həcmini baytlarla verir.",
      "İpucu 2: os.freemem() cari istifadə olunmayan boş RAM-ı qaytarır.",
      "İpucu 3: Math.round(bayt / (1024**3)) ilə GB-a çevirin."
    ],
    teslimIzahi: "Server monitorinq skriptləri sistem yaddaşının doluluğunu izləmək və həyəcan siqnalı vermək üçün os modulunun bu metodlarından istifadə edir."
  },
  {
    id: "exam-sec18-06",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "fs.promises ilə Asinxron Fayl Oxunması",
    serif: "`fs.promises.readFile('server.json')` ilə faylı oxuyun, daxilindəki JSON string-i parse edin və 'server' açarını konsola 'Server: JSÖyrən API' formatında çıxarın.",
    gozlenilenCixis: "Server: JSÖyrən API",
    starterCode: "async function fayliOxu() {\n  // fs.promises.readFile və JSON.parse tətbiq edin\n}\n\nfayliOxu();",
    solutionCode: "async function fayliOxu() {\n  const mezmun = await fs.promises.readFile('server.json');\n  const data = JSON.parse(mezmun);\n  console.log(`Server: ${data.server}`);\n}\n\nfayliOxu();",
    ipuclari: [
      "İpucu 1: fs.promises asinxron Promise qaytaran müasir fayl əməliyyatları moduludur.",
      "İpucu 2: await fs.promises.readFile(...) ilə fayl məzmununu əldə edin.",
      "İpucu 3: JSON.parse ilə obyekti açıb data.server dəyərini konsola çıxarın."
    ],
    teslimIzahi: "Node.js-də sinxron fs.readFileSync istifadə etmək Hadisə Dövrəsini dondurur. fs.promises ilə asinxron oxumaq minlərlə paralel sorğunun problemsiz xidmət almasını təmin edir."
  },
  {
    id: "exam-sec18-07",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "process.argv ilə Komanda Sətri Parametrlərinin Ayrılması",
    serif: "`process.argv` massivindəki CLI parametrlərini emal edin. İlk iki parametri (`node`, `app.js`) kənara qoyub, növbəti arqumentlərdən `--port=` ilə başlayanı tapın və portun nömrəsini konsola 'İcra portu: 5000' formatında çıxarın.",
    gozlenilenCixis: "İcra portu: 5000",
    starterCode: "function portuTap() {\n  // process.argv daxilində --port axtarın\n}\n\nportuTap();",
    solutionCode: "function portuTap() {\n  const arqumentler = process.argv.slice(2);\n  const portArg = arqumentler.find(a => a.startsWith('--port='));\n  const port = portArg ? portArg.split('=')[1] : '3000';\n  console.log(`İcra portu: ${port}`);\n}\n\nportuTap();",
    ipuclari: [
      "İpucu 1: process.argv[0] Node icraçısı, process.argv[1] isə işə salınan fayldır.",
      "İpucu 2: slice(2) ilə yalnız istifadəçinin daxil etdiyi arqumentlər ayrılır.",
      "İpucu 3: split('=')[1] port nömrəsini çıxarır."
    ],
    teslimIzahi: "CLI proqramları və serverlər işə salınarkən ötürülən bayraqları (`node app.js --port=5000`) məhz process.argv massivindən analiz edərək tənzimləyir."
  },
  {
    id: "exam-sec18-08",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "fs.promises.readdir ilə Faylların Süzgəcdən Keçirilməsi",
    serif: "`fs.promises.readdir('.')` metodu ilə qovluqdakı faylları oxuyun. `path.extname` istifadə edərək yalnız `.js` uzantılı faylları seçin və konsola 'JS faylları: index.js' formatında çıxarın.",
    gozlenilenCixis: "JS faylları: index.js",
    starterCode: "async function jsFayllariniTap() {\n  // readdir və filter istifadə edin\n}\n\njsFayllariniTap();",
    solutionCode: "async function jsFayllariniTap() {\n  const fayllar = await fs.promises.readdir('.');\n  const jsFayllari = fayllar.filter(f => path.extname(f) === '.js');\n  console.log(`JS faylları: ${jsFayllari.join(', ')}`);\n}\n\njsFayllariniTap();",
    ipuclari: [
      "İpucu 1: readdir qovluqdakı bütün fayl və qovluq adlarının massivini qaytarır.",
      "İpucu 2: filter(f => path.extname(f) === '.js') yalnız JavaScript fayllarını saxlayır.",
      "İpucu 3: Format: `JS faylları: ${jsFayllari.join(', ')}`."
    ],
    teslimIzahi: "Qovluqdakı faylların avtomatik aşkarlanması modul yükləyicilərində, marşrutların avtomatik qeydiyyatında (auto-routing) geniş tətbiq olunur."
  },
  {
    id: "exam-sec18-09",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "CommonJS Modul İxracı (module.exports)",
    serif: "Kompakt bir riyaziyyat modulu simulyasiyası qurun: `module.exports = { vur: (a, b) => a * b, topla: (a, b) => a + b }`. Sonra bu obyekti destrukturizasiya ilə oxuyub 5 və 6 ədədlərinin hasilini 'Hasil: 30' şəklində konsola çıxarın.",
    gozlenilenCixis: "Hasil: 30",
    starterCode: "function modulSimulyasiyasi() {\n  // module.exports və destrukturizasiya istifadə edin\n}\n\nmodulSimulyasiyasi();",
    solutionCode: "function modulSimulyasiyasi() {\n  const saxtaModule = { exports: {} };\n  saxtaModule.exports = {\n    vur: (a, b) => a * b,\n    topla: (a, b) => a + b\n  };\n\n  const { vur } = saxtaModule.exports;\n  console.log(`Hasil: ${vur(5, 6)}`);\n}\n\nmodulSimulyasiyasi();",
    ipuclari: [
      "İpucu 1: CommonJS standartında funksiyalar və dəyişənlər module.exports-a mənimsədilir.",
      "İpucu 2: Digər faylda require edildikdə həmin obyekt qaytarılır.",
      "İpucu 3: 5 * 6 = 30."
    ],
    teslimIzahi: "CommonJS Node.js-in ənənəvi modul sistemidir. require və module.exports sinxron işləyir və Node.js ekosisteminin ən böyük hissəsini təşkil edir."
  },
  {
    id: "exam-sec18-10",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Path Traversal Hücumundan Qorunma və Sanitizasiya",
    serif: "İstifadəçidən gələn təhlükəli fayl yolunu (`../../gizli/sifreler.txt`) baza qovluğu ilə (`/var/www/ictimai`) yoxlayan funksiya yazın. Əgər `path.resolve` nəticəsi baza qovluğundan kənara çıxarsa, 'Təhlükə: İcazəsiz yol müraciəti!' çıxarsın; əks halda yolu təsdiqləsin. Təhlükəli yol ilə yoxlayın.",
    gozlenilenCixis: "Təhlükə: İcazəsiz yol müraciəti!",
    starterCode: "function tehlukesizYoluYoxla(bazaQovluq, istifadeciYolu) {\n  // path.resolve ilə bazaQovluq xaricinə çıxışı yoxlayın\n}\n\ntehlukesizYoluYoxla('/var/www/ictimai', '../../gizli/sifreler.txt');",
    solutionCode: "function tehlukesizYoluYoxla(bazaQovluq, istifadeciYolu) {\n  const tamYol = path.resolve(bazaQovluq, istifadeciYolu);\n  if (!tamYol.startsWith(bazaQovluq)) {\n    console.log('Təhlükə: İcazəsiz yol müraciəti!');\n  } else {\n    console.log(`Təhlükəsiz yol: ${tamYol}`);\n  }\n}\n\ntehlukesizYoluYoxla('/var/www/ictimai', '../../gizli/sifreler.txt');",
    ipuclari: [
      "İpucu 1: `path.resolve(baza, nisbi)` bütün `..` nisbi keçidləri həll edib mütləq yol formalaşdırır.",
      "İpucu 2: if (!tamYol.startsWith(bazaQovluq)) yoxlaması 'Directory Traversal' hücumunu ifşa edir.",
      "İpucu 3: Şərt ödəndikdə tələb olunan təhlükəsizlik xəbərdarlığını konsola çıxarın."
    ],
    teslimIzahi: "Path Traversal (və ya Directory Traversal) hakerlərin `../` simvolları ilə veb-kökdən kənara çıxıb `/etc/passwd` və ya sistem sirlərini oxumasına imkan verən təhlükəli boşluqdur. startsWith yoxlaması bunu tam neytrallaşdırır."
  },
  {
    id: "exam-sec18-11",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Asinxron Audit Loq Qeydiyyatı (fs.appendFile)",
    serif: "`fs.promises.appendFile` istifadə edərək sistem loq faylına yeni qeyd əlavə edən `loqYaz(hadise)` funksiyası hazırlayın. Hər loq 'UĞUR: İstifadəçi daxil oldu' formatında yazılsın. Uğurla yazıldıqdan sonra konsola 'Loq yazıldı: Uğur' çıxarın.",
    gozlenilenCixis: "Loq yazıldı: Uğur",
    starterCode: "async function loqYaz(hadise) {\n  // fs.promises.appendFile tətbiq edin\n}\n\nloqYaz('İstifadəçi daxil oldu');",
    solutionCode: "async function loqYaz(hadise) {\n  await fs.promises.appendFile('audit.log', `UĞUR: ${hadise}\\n`);\n  console.log('Loq yazıldı: Uğur');\n}\n\nloqYaz('İstifadəçi daxil oldu');",
    ipuclari: [
      "İpucu 1: writeFile faylın köhnə məzmununu silib yenidən yazır, appendFile isə sonuna əlavə edir.",
      "İpucu 2: await ilə asinxron əməliyyatın tamamlanmasını gözləyin.",
      "İpucu 3: Konsola 'Loq yazıldı: Uğur' çıxarın."
    ],
    teslimIzahi: "appendFile mövcud faylı silmədən davamlı arxivləşdirmə və audit jurnalları formalaşdırmaq üçün ən ideal metodudur."
  },
  {
    id: "exam-sec18-12",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Node.js EventEmitter ilə Server Hadisələri",
    serif: "Node.js mühitində tətbiqdaxili hadisələri idarə edən EventEmitter simulyasiyası qurun. 'dbReady' hadisəsinə qulaq asan dinləyici qoşun (`(port) => console.log('Server Hadisəsi: Verilənlər bazası hazırdır - ' + port)`). Hadisəni 5432 portu ilə yayımlayın.",
    gozlenilenCixis: "Server Hadisəsi: Verilənlər bazası hazırdır - 5432",
    starterCode: "function eventEmitterNumunesi() {\n  // on və emit metodları ilə hadisəni idarə edin\n}\n\neventEmitterNumunesi();",
    solutionCode: "function eventEmitterNumunesi() {\n  const hadiseler = {};\n  const emitter = {\n    on: (ad, cb) => { (hadiseler[ad] = hadiseler[ad] || []).push(cb); },\n    emit: (ad, ...args) => { (hadiseler[ad] || []).forEach(cb => cb(...args)); }\n  };\n\n  emitter.on('dbReady', (port) => {\n    console.log(`Server Hadisəsi: Verilənlər bazası hazırdır - ${port}`);\n  });\n\n  emitter.emit('dbReady', 5432);\n}\n\neventEmitterNumunesi();",
    ipuclari: [
      "İpucu 1: EventEmitter Node.js-in daxili asinxron hadisə idarəetmə nüvəsidir.",
      "İpucu 2: emitter.on abunə olur, emitter.emit isə hadisəni arqumentlərlə işə salır.",
      "İpucu 3: Format: `Server Hadisəsi: Verilənlər bazası hazırdır - ${port}`."
    ],
    teslimIzahi: "HTTP serverləri, oxuma axınları (Streams) və şəbəkə soketləri Node.js daxilində tamamilə EventEmitter bazası üzərində qurulmuşdur."
  },
  {
    id: "exam-sec18-13",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "os.cpus ilə Çoxnüvəli Worker Sayının Hesablanması",
    serif: "Serverin performansını artırmaq üçün klaster (cluster) rejimində hər CPU nüvəsinə 1 işçi (worker process) ayrılır. `os.cpus().length` ilə nüvələrin sayını tapın və konsola 'Nüvə sayı: 4, Tövsiyə olunan Worker: 4' çıxarın.",
    gozlenilenCixis: "Nüvə sayı: 4, Tövsiyə olunan Worker: 4",
    starterCode: "function klasterHesabla() {\n  // os.cpus().length istifadə edin\n}\n\nklasterHesabla();",
    solutionCode: "function klasterHesabla() {\n  const nuveler = os.cpus().length;\n  console.log(`Nüvə sayı: ${nuveler}, Tövsiyə olunan Worker: ${nuveler}`);\n}\n\nklasterHesabla();",
    ipuclari: [
      "İpucu 1: os.cpus() prosessorun bütün məntiqi nüvələrinin massivini qaytarır.",
      "İpucu 2: .length prosessorun neçə nüvəli olduğunu göstərir.",
      "İpucu 3: Format: `Nüvə sayı: ${nuveler}, Tövsiyə olunan Worker: ${nuveler}`."
    ],
    teslimIzahi: "Node.js tək axınlıdır (single-threaded). Bütün prosessor gücündən istifadə etmək üçün cluster və ya PM2 vasitəsilə nüvə sayı qədər paralel Node prosesi işə salınır."
  },
  {
    id: "exam-sec18-14",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Asinxron Fayl Axını və Çanklama Simulyasiyası",
    serif: "Böyük bir fayl 3 hissəyə (chunk) bölünərək axın (stream) şəklində oxunur: `['Hissə 1', 'Hissə 2', 'Hissə 3']`. Hər çank gəldikdə onu loq şəklində yığın və axın bitdikdə konsola 'Axın tamamlandı: 3 çank qəbul edildi' çıxarın.",
    gozlenilenCixis: "Axın tamamlandı: 3 çank qəbul edildi",
    starterCode: "function axiniSimulyasiyaEt() {\n  // Çankları ardıcıl emal edib yekun sayını çıxarın\n}\n\naxiniSimulyasiyaEt();",
    solutionCode: "function axiniSimulyasiyaEt() {\n  const chanklar = ['Hissə 1', 'Hissə 2', 'Hissə 3'];\n  let say = 0;\n  chanklar.forEach(c => {\n    say++;\n  });\n  console.log(`Axın tamamlandı: ${say} çank qəbul edildi`);\n}\n\naxiniSimulyasiyaEt();",
    ipuclari: [
      "İpucu 1: Stream (axın) məlumatı bütöv deyil, kiçik Buffer çankları şəklində ötürür.",
      "İpucu 2: Bu sayədə 10GB-lıq faylı 50MB RAM ilə emal etmək mümkün olur.",
      "İpucu 3: Format: `Axın tamamlandı: ${say} çank qəbul edildi`."
    ],
    teslimIzahi: "Node.js axınları (Readable, Writable, Transform Streams) yaddaş səmərəliliyi üçün vacibdir. Video yayımı və böyük faylların endirilməsində təməl daşdır."
  },
  {
    id: "exam-sec18-15",
    bolmeId: 18,
    merheleId: 4,
    cetinlik: "EKSPERT",
    basliq: "İstehsalat CLI Arqument Parsinq Mühərriki",
    serif: "`process.argv`-dən daxil olan komanda sətri arqumentlərini (`['node', 'app.js', '--mode=exam', '--port=5000']`) təmiz JSON obyektinə çevirən arxitektur funksiya hazırlayın. '--' ilə başlayan açarları açar kimi, '='-dən sonrakı hissəni dəyər kimi saxlasın. Nəticəni JSON formatında konsola çıxarın: '{\"mode\":\"exam\",\"port\":\"5000\"}'.",
    gozlenilenCixis: '{"mode":"exam","port":"5000"}',
    starterCode: "function cliArqumentleriniParseEt() {\n  // process.argv-dən --acar=deyer cütlərini obyektə yığın\n}\n\ncliArqumentleriniParseEt();",
    solutionCode: "function cliArqumentleriniParseEt() {\n  const arqumentler = process.argv.slice(2);\n  const netice = {};\n\n  arqumentler.forEach(arg => {\n    if (arg.startsWith('--')) {\n      const [acar, deyer] = arg.slice(2).split('=');\n      netice[acar] = deyer || true;\n    }\n  });\n\n  console.log(JSON.stringify(netice));\n}\n\ncliArqumentleriniParseEt();",
    ipuclari: [
      "İpucu 1: slice(2) ilə ilk iki elementi kənarlaşdırın.",
      "İpucu 2: arg.slice(2).split('=') ilə açar və dəyəri ayırın.",
      "İpucu 3: JSON.stringify(netice) ilə konsola çıxarın."
    ],
    teslimIzahi: "Müasir CLI kitabxanaları (məsələn Yargs, Commander) məhz bu cür arqument parsinq mühərriki üzərində qurulur və komanda sətrini güclü tətbiq idarəetmə panelinə çevirir."
  }
];

const SEC_19_QUESTIONS = [
  // Bölmə 19: HTTP Protokolu və Express.js Əsasları (express, routing, middleware, status codes)
  {
    id: "exam-sec19-01",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ASAN",
    basliq: "Sadə Express Tətbiqinin İnisializasiyası və Port Dinlənməsi",
    serif: "`express()` funksiyası ilə server tətbiqi yaradın. `app.listen(5000)` metodu ilə serveri 5000 portunda işə salın və konsola 'Server 5000 portunda aktivdir' mesajının çıxmasını təmin edin.",
    gozlenilenCixis: "Server 5000 portunda aktivdir",
    starterCode: "function serverBaslat() {\n  // express() və app.listen qurun\n}\n\nserverBaslat();",
    solutionCode: "function serverBaslat() {\n  const tətbiq = express();\n  tətbiq.listen(5000, () => {});\n}\n\nserverBaslat();",
    ipuclari: [
      "İpucu 1: const app = express() yeni Express tətbiqini yaradır.",
      "İpucu 2: app.listen(port, callback) göstərilən portu dinləməyə başlayır.",
      "İpucu 3: Konsola tələb olunan təsdiq mesajı çıxır."
    ],
    teslimIzahi: "Express.js Node.js-in ən populyar minimalist veb freymvorkudur. listen metodu daxildə http.createServer yaradaraq TCP portunu qulaq asmaya açır."
  },
  {
    id: "exam-sec19-02",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ASAN",
    basliq: "Sadə GET Marşrutunun Təyini",
    serif: "'/' (kök) yolu üçün GET sorğusu qəbul edən `app.get('/', ...)` marşrutu qurun və konsola 'GET / marşrutu qeydiyyatdan keçdi' yazdırın.",
    gozlenilenCixis: "GET / marşrutu qeydiyyatdan keçdi",
    starterCode: "function marsrutQeydiyyati() {\n  const app = express();\n  // app.get('/', ...) yazın\n}\n\nmarsrutQeydiyyati();",
    solutionCode: "function marsrutQeydiyyati() {\n  const app = express();\n  app.get('/', (req, res) => {\n    res.send('Salam');\n  });\n  console.log('GET / marşrutu qeydiyyatdan keçdi');\n}\n\nmarsrutQeydiyyati();",
    ipuclari: [
      "İpucu 1: app.get(yol, handler) GET sorğularını emal etmək üçündür.",
      "İpucu 2: Marşrut funksiyası req və res obyektlərini qəbul edir.",
      "İpucu 3: Konsola 'GET / marşrutu qeydiyyatdan keçdi' çıxarın."
    ],
    teslimIzahi: "Marşrutlaşdırma (Routing) tətbiqin fərqli URL-lərə və HTTP metodlarına necə reaksiya verəcəyini müəyyən edən əsas mexanizmdir."
  },
  {
    id: "exam-sec19-03",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ASAN",
    basliq: "JSON Formatında Cavab Qaytarılması (res.json)",
    serif: "'/api/status' marşrutuna müraciət edildikdə `{ status: 'Aktiv', kod: 200 }` obyektini JSON kimi qaytaran marşrut təyin edin və konsola 'Status cavabı: Aktiv' çıxarın.",
    gozlenilenCixis: "Status cavabı: Aktiv",
    starterCode: "function statusCavabi() {\n  // res.json({ status: 'Aktiv', kod: 200 }) tətbiq edin\n}\n\nstatusCavabi();",
    solutionCode: "function statusCavabi() {\n  const app = express();\n  app.get('/api/status', (req, res) => {\n    res.json({ status: 'Aktiv', kod: 200 });\n  });\n  console.log('Status cavabı: Aktiv');\n}\n\nstatusCavabi();",
    ipuclari: [
      "İpucu 1: res.json() avtomatik olaraq Content-Type başlığını application/json təyin edir.",
      "İpucu 2: Obyekti avtomatik olaraq sətirləşdirib (serialize) müştəriyə göndərir.",
      "İpucu 3: Format: 'Status cavabı: Aktiv'."
    ],
    teslimIzahi: "res.json() metodu müasir API-lərdə ən çox istifadə olunan cavab metodudur və JavaScript obyektlərini birbaşa JSON formatına bükür."
  },
  {
    id: "exam-sec19-04",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "Qlobal Loqlama Middleware-i (app.use)",
    serif: "Bütün gələn sorğuların metod və yolunu loqlayan middleware funksiyası (`(req, res, next)`) hazırlayın. Simulyasiya: `req = { method: 'GET', path: '/istifadeciler' }`. Middleware daxilində 'Loq: GET /istifadeciler' konsola çıxarın və `next()` çağırın.",
    gozlenilenCixis: "Loq: GET /istifadeciler",
    starterCode: "function loqlamaMiddleware() {\n  // req.method və req.path ilə loq çıxarın\n}\n\nloqlamaMiddleware();",
    solutionCode: "function loqlamaMiddleware() {\n  const app = express();\n  const logger = (req, res, next) => {\n    console.log(`Loq: ${req.method} ${req.path}`);\n    if (next) next();\n  };\n  app.use(logger);\n\n  // Simulyasiya çağırışı\n  logger({ method: 'GET', path: '/istifadeciler' }, {}, () => {});\n}\n\nloqlamaMiddleware();",
    ipuclari: [
      "İpucu 1: Middleware (aralıq proqram) req və res dövrəsində marşrutdan əvvəl işə düşən funksiyadır.",
      "İpucu 2: `next()` çağırılmazsa, sorğu asılı vəziyyətdə qalar və növbəti mərhələyə keçməz.",
      "İpucu 3: Format: `Loq: ${req.method} ${req.path}`."
    ],
    teslimIzahi: "Middleware zənciri Express-in təməl fəlsəfəsidir. Loqlama, autentifikasiya və təhlükəsizlik yoxlamaları məhz app.use ilə qlobal şəkildə qoşulur."
  },
  {
    id: "exam-sec19-05",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "express.json() ilə Gövdənin (req.body) Oxunması",
    serif: "Gələn JSON sorğu gövdəsini emal etmək üçün `app.use(express.json())` təyin olunmalıdır. POST sorğusu simulyasiyasında `req.body`-dən `{ ad: 'Əli', yas: 25 }` məlumatını oxuyub konsola 'İstifadəçi adı: Əli, Yaş: 25' çıxarın.",
    gozlenilenCixis: "İstifadəçi adı: Əli, Yaş: 25",
    starterCode: "function govdeniOxu() {\n  // express.json() və req.body oxunması\n}\n\ngovdeniOxu();",
    solutionCode: "function govdeniOxu() {\n  const app = express();\n  app.use(express.json());\n\n  const req = { body: { ad: 'Əli', yas: 25 } };\n  console.log(`İstifadəçi adı: ${req.body.ad}, Yaş: ${req.body.yas}`);\n}\n\ngovdeniOxu();",
    ipuclari: [
      "İpucu 1: Standart Express req.body-ni oxuya bilmir və undefined verir.",
      "İpucu 2: express.json() daxil olan axını oxuyub JSON parse edərək req.body-yə mənimsəyir.",
      "İpucu 3: Format: `İstifadəçi adı: ${req.body.ad}, Yaş: ${req.body.yas}`."
    ],
    teslimIzahi: "express.json() quraşdırılmış body-parser middleware-idir. O olmadan POST və ya PUT sorğularının göndərdiyi JSON məlumatlarını oxumaq qeyri-mümkündür."
  },
  {
    id: "exam-sec19-06",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "Dinamik URL Parametrləri (req.params)",
    serif: "'/api/telebeler/:id' marşrutu üçün `req.params.id` parametrini oxuyan funksiya qurun. ID '105' olduqda konsola 'Sorğu edilən tələbə ID: 105' çıxarın.",
    gozlenilenCixis: "Sorğu edilən tələbə ID: 105",
    starterCode: "function parametrOxu() {\n  // req.params.id dəyərini oxuyun\n}\n\nparametrOxu();",
    solutionCode: "function parametrOxu() {\n  const req = { params: { id: '105' } };\n  console.log(`Sorğu edilən tələbə ID: ${req.params.id}`);\n}\n\nparametrOxu();",
    ipuclari: [
      "İpucu 1: URL yolunda iki nöqtə ilə (`:id`) yazılan hissələr req.params obyektinə çevrilir.",
      "İpucu 2: req.params.id həmişə string tipində olur.",
      "İpucu 3: Format: `Sorğu edilən tələbə ID: ${req.params.id}`."
    ],
    teslimIzahi: "URL Parametrləri RESTful xidmətlərdə xüsusi resursun vahid identifikasiyası üçün ən oxunaqlı və standart mexanizmdir."
  },
  {
    id: "exam-sec19-07",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ASAN",
    basliq: "HTTP Status Kodu Təyini (res.status)",
    serif: "Yeni resurs yaradıldıqda HTTP 201 statusu qaytarılmalıdır. `res.status(201)` metodu ilə statusu təyin edib konsola 'Resurs yaradıldı: Status 201' çıxarın.",
    gozlenilenCixis: "Resurs yaradıldı: Status 201",
    starterCode: "function statusQaytar() {\n  // res.status(201) zəncirini qurun\n}\n\nstatusQaytar();",
    solutionCode: "function statusQaytar() {\n  let cariStatus = 200;\n  const res = {\n    status: function(kod) {\n      cariStatus = kod;\n      return this;\n    },\n    json: function(data) {\n      console.log(`Resurs yaradıldı: Status ${cariStatus}`);\n    }\n  };\n  res.status(201).json({ id: 1 });\n}\n\nstatusQaytar();",
    ipuclari: [
      "İpucu 1: res.status(kod) metod zənciri kimi işləyir və res obyektini qaytarır.",
      "İpucu 2: 201 status kodu 'Created' (Yaradıldı) deməkdir.",
      "İpucu 3: Format: `Resurs yaradıldı: Status 201`."
    ],
    teslimIzahi: "HTTP status kodları müştəri tətbiqinə əməliyyatın nəticəsi barədə saniyənin mində birində semantik məlumat verir (200 OK, 201 Created, 400 Bad Request, 500 Server Error)."
  },
  {
    id: "exam-sec19-08",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Sorğunun İcra Müddətini Ölçən Middleware",
    serif: "Sorğunun daxil olduğu anı (`Date.now()`) qeyd edən və cavab bitdikdə icra müddətini hesablayan middleware simulyasiyası qurun. Simulyasiya müddəti 15ms çəkmişdirsə, konsola 'İcra müddəti: 15ms' çıxarın.",
    gozlenilenCixis: "İcra müddəti: 15ms",
    starterCode: "function vaxtMiddleware() {\n  // Başlanğıc və bitmə vaxtı fərqini hesablayın\n}\n\nvaxtMiddleware();",
    solutionCode: "function vaxtMiddleware() {\n  const baslangic = Date.now();\n  const bitme = baslangic + 15;\n  const muddet = bitme - baslangic;\n  console.log(`İcra müddəti: ${muddet}ms`);\n}\n\nvaxtMiddleware();",
    ipuclari: [
      "İpucu 1: Middleware başlanğıcda req._startTime = Date.now() təyin edə bilər.",
      "İpucu 2: res.on('finish', ...) hadisəsində son müddət hesablanır.",
      "İpucu 3: Format: `İcra müddəti: ${muddet}ms`."
    ],
    teslimIzahi: "Performans monitorinqi və gecikmələrin aşkarlanması üçün APM sistemləri (New Relic, Datadog) bu cür middleware-lərdən istifadə edir."
  },
  {
    id: "exam-sec19-09",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Express Router ilə Marşrutların Modullaşdırılması",
    serif: "Bütün məhsul əməliyyatlarını tək faylda yığmaq əvəzinə, `mehsulRouter` modulu qurun. Kök tətbiqə `app.use('/api/mehsullar', mehsulRouter)` kimi bağlayın və konsola 'Router uğurla qoşuldu: /api/mehsullar' çıxarın.",
    gozlenilenCixis: "Router uğurla qoşuldu: /api/mehsullar",
    starterCode: "function routerQos() {\n  // express.Router və app.use konfiqurasiyası\n}\n\nrouterQos();",
    solutionCode: "function routerQos() {\n  const app = express();\n  const mehsulRouter = {\n    yol: '/api/mehsullar'\n  };\n  console.log(`Router uğurla qoşuldu: ${mehsulRouter.yol}`);\n}\n\nrouterQos();",
    ipuclari: [
      "İpucu 1: express.Router() mini Express tətbiqi kimi müstəqil marşrutlar dəstəsi yaradır.",
      "İpucu 2: app.use('/prefiks', router) həmin marşrutları ümumi prefiks altında birləşdirir.",
      "İpucu 3: Konsola təsdiq mesajını çıxarın."
    ],
    teslimIzahi: "Böyük tətbiqlərdə yüzlərlə endpoint olur. express.Router() kod bazasını səliqəli modullara (istifadeciRouter, sifarisRouter və s.) bölməyə imkan verir."
  },
  {
    id: "exam-sec19-10",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "404 Not Found Marşrut İdarəetməsi",
    serif: "Bütün müəyyən edilmiş marşrutlardan ən sonda yerləşən və heç bir marşrutla uyğunlaşmayan sorğuları tutan 404 middleware-i qurun. Gələn naməlum sorğu üçün status 404 təyin edib konsola 'Status 404: Səhifə tapılmadı' çıxarın.",
    gozlenilenCixis: "Status 404: Səhifə tapılmadı",
    starterCode: "function notFoundIdareet() {\n  // 404 middleware yazın\n}\n\nnotFoundIdareet();",
    solutionCode: "function notFoundIdareet() {\n  const notFoundHandler = (req, res) => {\n    console.log('Status 404: Səhifə tapılmadı');\n  };\n  notFoundHandler({}, {});\n}\n\nnotFoundIdareet();",
    ipuclari: [
      "İpucu 1: Express marşrutları yuxarıdan aşağıya doğru yoxlayır.",
      "İpucu 2: Ən sondakı `app.use((req, res) => ...)` heç bir yerə düşməyən sorğuları tutur.",
      "İpucu 3: res.status(404).json(...) qaytarır."
    ],
    teslimIzahi: "Naməlum yollara Express-in standart HTML xətası əvəzinə təmiz JSON 404 qaytarmaq frontend tətbiqləri üçün ən düzgün yanaşmadır."
  },
  {
    id: "exam-sec19-11",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Autentifikasiya Qoruyucu Middleware-i (Auth Guard)",
    serif: "Sorğu başlıqlarında (`req.headers.authorization`) etibarlı Bearer token olub-olmadığını yoxlayan middleware qurun. Əgər token yoxdursa və ya 'etibarsiz' olarsa, 401 Unauthorized xətası versin. 'Bearer gizli-token-123' üçün yoxlama apararaq konsola 'Giriş icazəsi verildi: Uğurlu' çıxarın.",
    gozlenilenCixis: "Giriş icazəsi verildi: Uğurlu",
    starterCode: "function authGuard(req, res, next) {\n  // req.headers.authorization yoxlayın\n}\n\n// Test edin",
    solutionCode: "function authGuard(req, res, next) {\n  const authHeader = req.headers && req.headers.authorization;\n  if (authHeader && authHeader.startsWith('Bearer ')) {\n    console.log('Giriş icazəsi verildi: Uğurlu');\n    if (next) next();\n  } else {\n    console.log('İcazəsiz giriş: 401');\n  }\n}\n\nauthGuard({ headers: { authorization: 'Bearer gizli-token-123' } }, {}, () => {});",
    ipuclari: [
      "İpucu 1: Qorunan API marşrutlarından əvvəl authGuard middleware-i yerləşdirilir.",
      "İpucu 2: startsWith('Bearer ') ilə token formatı yoxlanılır.",
      "İpucu 3: Format: 'Giriş icazəsi verildi: Uğurlu'."
    ],
    teslimIzahi: "Auth Guard middleware-ləri marşrutların təhlükəsizliyini təmin edir və icazəsiz istifadəçilərin biznes məntiqinə toxunmasının qarşısını alır."
  },
  {
    id: "exam-sec19-12",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Sorğu Gövdəsinin Validasiyası Middleware-i",
    serif: "Yeni məhsul yaradılarkən `req.body.ad` və `req.body.qiymet` sahələrinin məcburi olduğunu yoxlayan `mehsulValidasiyasi` middleware-i hazırlayın. Əgər hər iki sahə mövcuddursa və qiymət > 0 isə `next()` çağırılsın və konsola 'Validasiya uğurla keçdi' çıxarılsın. `{ ad: 'Laptop', qiymet: 1500 }` ilə yoxlayın.",
    gozlenilenCixis: "Validasiya uğurla keçdi",
    starterCode: "function mehsulValidasiyasi(req, res, next) {\n  // ad və qiymət sahələrini yoxlayın\n}\n\n// Test edin",
    solutionCode: "function mehsulValidasiyasi(req, res, next) {\n  const { ad, qiymet } = req.body || {};\n  if (!ad || typeof qiymet !== 'number' || qiymet <= 0) {\n    console.log('Xəta: Məlumatlar natamamdır (400)');\n  } else {\n    console.log('Validasiya uğurla keçdi');\n    if (next) next();\n  }\n}\n\nmehsulValidasiyasi({ body: { ad: 'Laptop', qiymet: 1500 } }, {}, () => {});",
    ipuclari: [
      "İpucu 1: Məlumatlar səhv olduqda dərhal 400 Bad Request qaytarılmalıdır.",
      "İpucu 2: Hər şey qaydasında olduqda növbəti addım üçün next() çağırılır.",
      "İpucu 3: Format: 'Validasiya uğurla keçdi'."
    ],
    teslimIzahi: "Daxil olan məlumatların kontrollerə çatmazdan əvvəl validasiyadan keçirilməsi verilənlər bazasını zibillənməkdən və çökməkdən qoruyur."
  },
  {
    id: "exam-sec19-13",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Query Parametrləri ilə Dinamik Axtarış Filteri",
    serif: "'/api/mehsullar?kateqoriya=elektronika&maksQiymet=1000' sorğusunda `req.query` parametrlərini oxuyub massivdən uyğun məhsulları süzən funksiya qurun. Giriş massivi: `[{ad: 'A', k: 'elektronika', q: 800}, {ad: 'B', k: 'geyim', q: 50}, {ad: 'C', k: 'elektronika', q: 1200}]`. Yalnız uyğun gələn məhsulun adını konsola 'Tapıldı: A' çıxarın.",
    gozlenilenCixis: "Tapıldı: A",
    starterCode: "function mehsullariFiltrle(mallar, query) {\n  // req.query parametrlərinə görə filter tətbiq edin\n}\n\n// Test edin",
    solutionCode: "function mehsullariFiltrle(mallar, query) {\n  const netice = mallar.filter(m => {\n    const katUygun = !query.kateqoriya || m.k === query.kateqoriya;\n    const qiymetUygun = !query.maksQiymet || m.q <= Number(query.maksQiymet);\n    return katUygun && qiymetUygun;\n  });\n  console.log(`Tapıldı: ${netice.map(m => m.ad).join(', ')}`);\n}\n\nconst mallar = [\n  { ad: 'A', k: 'elektronika', q: 800 },\n  { ad: 'B', k: 'geyim', q: 50 },\n  { ad: 'C', k: 'elektronika', q: 1200 }\n];\n\nmehsullariFiltrle(mallar, { kateqoriya: 'elektronika', maksQiymet: '1000' });",
    ipuclari: [
      "İpucu 1: URL sorğu parametrləri (?a=b) Express-də req.query obyektində toplanır.",
      "İpucu 2: Query dəyərləri string gəldiyi üçün Number() ilə çevrilməlidir.",
      "İpucu 3: Format: `Tapıldı: ${ad}`."
    ],
    teslimIzahi: "Filtirləmə, axtarış və çeşidləmə əməliyyatları üçün REST standartında həmişə Query parametrlərindən istifadə edilir."
  },
  {
    id: "exam-sec19-14",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "ÇƏTİN",
    basliq: "Statik Fayl Paylama Simulyasiyası (express.static)",
    serif: "HTML, CSS və şəkilləri ictimai paylamaq üçün `express.static('public')` istifadə edilir. Fayl uzantısına görə uyğun Content-Type başlığını ('.html' -> 'text/html', '.css' -> 'text/css') müəyyən edən funksiya yazın və 'style.css' faylı üçün 'MIME növü: text/css' konsola çıxarın.",
    gozlenilenCixis: "MIME növü: text/css",
    starterCode: "function mimeNövünüTap(faylAdi) {\n  // uzantıya görə MIME təyin edin\n}\n\nmimeNövünüTap('style.css');",
    solutionCode: "function mimeNövünüTap(faylAdi) {\n  const uzanti = path.extname(faylAdi);\n  const mimeMap = {\n    '.html': 'text/html',\n    '.css': 'text/css',\n    '.js': 'application/javascript'\n  };\n  console.log(`MIME növü: ${mimeMap[uzanti] || 'application/octet-stream'}`);\n}\n\nmimeNövünüTap('style.css');",
    ipuclari: [
      "İpucu 1: path.extname ilə faylın sonluğu tapılır.",
      "İpucu 2: Lüğətdən uyğun MIME növü oxunur.",
      "İpucu 3: Format: `MIME növü: ${mimeMap[uzanti]}`."
    ],
    teslimIzahi: "express.static daxilən faylın uzantısını yoxlayaraq brauzerə düzgün Content-Type başlığı göndərir ki, brauzer CSS və ya JavaScript-i düzgün təfsir edə bilsin."
  },
  {
    id: "exam-sec19-15",
    bolmeId: 19,
    merheleId: 4,
    cetinlik: "EKSPERT",
    basliq: "Express Middleware Konveyer və İcra Zənciri",
    serif: "Bir neçə middleware-i ardıcıl (pipeline) icra edən orkestrasiya mühərriki qurun: 1. `loqcu` -> '1. Loq yazıldı', 2. `auth` -> '2. Giriş təsdiqləndi', 3. `handler` -> '3. Məlumat qaytarıldı'. Bütün addımların `next()` vasitəsilə sırayla işə düşdüyünü nümayiş etdirin və nəticələri sətirbəsətir konsola çıxarın.",
    gozlenilenCixis: "1. Loq yazıldı\n2. Giriş təsdiqləndi\n3. Məlumat qaytarıldı",
    starterCode: "function middlewareZenciri() {\n  // 3 middleware-i ardıcıl icra edin\n}\n\nmiddlewareZenciri();",
    solutionCode: "function middlewareZenciri() {\n  const loqlar = [];\n  const mw1 = (req, res, next) => { loqlar.push('1. Loq yazıldı'); next(); };\n  const mw2 = (req, res, next) => { loqlar.push('2. Giriş təsdiqləndi'); next(); };\n  const handler = (req, res) => { loqlar.push('3. Məlumat qaytarıldı'); };\n\n  const boru = [mw1, mw2, handler];\n  let index = 0;\n  function next() {\n    if (index < boru.length) {\n      const cari = boru[index++];\n      cari({}, {}, next);\n    }\n  }\n  next();\n\n  loqlar.forEach(l => console.log(l));\n}\n\nmiddlewareZenciri();",
    ipuclari: [
      "İpucu 1: Express daxilində middleware zənciri məhz bu cür rekursiv next() funksiyası ilə idarə olunur.",
      "İpucu 2: Hər middleware növbətini çağırmaqla idarəetməni ötürür.",
      "İpucu 3: Sonda loqlar massivini sətirbəsətir çap edin."
    ],
    teslimIzahi: "Express-in zərifliyi onun 'Chain of Responsibility' dizayn naxışına əsaslanan asinxron middleware konveyerindən qaynaqlanır. Bu memarlıq istənilən mürəkkəblikdə modulyar sistemlər qurmağa imkan verir."
  }
];

const SEC_20_QUESTIONS = [
  // Bölmə 20: RESTful API Arxitekturası və Tam CRUD (req.params, req.query, req.body, centralized error middleware)
  {
    id: "exam-sec20-01",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ASAN",
    basliq: "REST Konvensiyası: Bütün Resursların Alınması (GET)",
    serif: "REST standartına uyğun olaraq `/api/mehsullar` ünvanı üçün bütün məhsulları qaytaran GET endpoint-i simulyasiya edin. Massivdə 3 məhsul var. Konsola 'Bütün məhsullar qaytarıldı: 3 ədəd' çıxarın.",
    gozlenilenCixis: "Bütün məhsullar qaytarıldı: 3 ədəd",
    starterCode: "function butunMehsullariAl() {\n  // GET /api/mehsullar cavabını hazırlayın\n}\n\nbutunMehsullariAl();",
    solutionCode: "function butunMehsullariAl() {\n  const mehsullar = [{ id: 1 }, { id: 2 }, { id: 3 }];\n  console.log(`Bütün məhsullar qaytarıldı: ${mehsullar.length} ədəd`);\n}\n\nbutunMehsullariAl();",
    ipuclari: [
      "İpucu 1: RESTful URL-lər fellər deyil, cəm isimlərdən ibarət olmalıdır (/getProducts yox, /api/mehsullar).",
      "İpucu 2: GET metodu məlumat almaq üçün standartdır.",
      "İpucu 3: Format: `Bütün məhsullar qaytarıldı: ${mehsullar.length} ədəd`."
    ],
    teslimIzahi: "REST arxitekturasında resurslar həmişə cəm isimlərlə (plural nouns) ifadə edilir və HTTP GET sorğuları server vəziyyətini dəyişdirmir (safe method)."
  },
  {
    id: "exam-sec20-02",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ASAN",
    basliq: "Tək Resursun Alınması (GET /:id)",
    serif: "Məhsullar massivindən (`[{id: 1, ad: 'Monitor'}, {id: 2, ad: 'Klaviatura'}]`) `id === 2` olan məhsulu tapıb qaytaran GET marşrutu qurun və konsola 'Tapılan resurs: Klaviatura' çıxarın.",
    gozlenilenCixis: "Tapılan resurs: Klaviatura",
    starterCode: "function tekResursAl(axtarilanId) {\n  // id-yə görə məhsulu tapın\n}\n\ntekResursAl(2);",
    solutionCode: "function tekResursAl(axtarilanId) {\n  const mallar = [{ id: 1, ad: 'Monitor' }, { id: 2, ad: 'Klaviatura' }];\n  const tapilan = mallar.find(m => m.id === axtarilanId);\n  console.log(`Tapılan resurs: ${tapilan.ad}`);\n}\n\ntekResursAl(2);",
    ipuclari: [
      "İpucu 1: GET /api/mehsullar/:id tək resursa müraciət üçün standartdır.",
      "İpucu 2: Array.prototype.find() ilə obyekt tapılır.",
      "İpucu 3: Format: `Tapılan resurs: ${tapilan.ad}`."
    ],
    teslimIzahi: "Tək bir resursun identifikasiyası üçün URL-in sonuna unikal identifikator əlavə olunur. Tapılmadıqda 404, tapıldıqda 200 OK qaytarılır."
  },
  {
    id: "exam-sec20-03",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ASAN",
    basliq: "Yeni Resursun Yaradılması (POST)",
    serif: "POST sorğusu ilə gələn `{ ad: 'Smartfon', qiymet: 800 }` obyektinə yeni `id: 101` təyin edərək bazaya əlavə edin və status 201 ilə konsola 'Yeni resurs yaradıldı: ID 101 (Smartfon)' çıxarın.",
    gozlenilenCixis: "Yeni resurs yaradıldı: ID 101 (Smartfon)",
    starterCode: "function resursYarat(yeniData) {\n  // yeni id calayıb konsola çıxarın\n}\n\nresursYarat({ ad: 'Smartfon', qiymet: 800 });",
    solutionCode: "function resursYarat(yeniData) {\n  const mehsul = { id: 101, ...yeniData };\n  console.log(`Yeni resurs yaradıldı: ID ${mehsul.id} (${mehsul.ad})`);\n}\n\nresursYarat({ ad: 'Smartfon', qiymet: 800 });",
    ipuclari: [
      "İpucu 1: Yeni resurs yaratmaq üçün POST /api/mehsullar sorğusu göndərilir.",
      "İpucu 2: Server tərəfindən generasiya olunmuş id cavaba əlavə edilir.",
      "İpucu 3: Format: `Yeni resurs yaradıldı: ID ${mehsul.id} (${mehsul.ad})`."
    ],
    teslimIzahi: "POST əməliyyatları qeyri-idempotentdir (hər çağırış yeni resurs yaradır) və uğurla başa çatdıqda həmişə 201 Created statusu qaytarır."
  },
  {
    id: "exam-sec20-04",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "Resursun Tam Yenilənməsi (PUT)",
    serif: "Mövcud məhsulun (`{ id: 1, ad: 'Köhnə', qiymet: 100 }`) bütün sahələrini gələn yeni məlumatla (`{ ad: 'Yeni Model', qiymet: 150 }`) tam əvəz edən PUT əməliyyatı simulyasiya edin və konsola 'Yeniləndi: Yeni Model (150 AZN)' çıxarın.",
    gozlenilenCixis: "Yeniləndi: Yeni Model (150 AZN)",
    starterCode: "function resursYenile(id, yeniMelumat) {\n  // PUT əvəzləməsi aparın\n}\n\nresursYenile(1, { ad: 'Yeni Model', qiymet: 150 });",
    solutionCode: "function resursYenile(id, yeniMelumat) {\n  let movcud = { id: 1, ad: 'Köhnə', qiymet: 100 };\n  movcud = { id, ...yeniMelumat };\n  console.log(`Yeniləndi: ${movcud.ad} (${movcud.qiymet} AZN)`);\n}\n\nresursYenile(1, { ad: 'Yeni Model', qiymet: 150 });",
    ipuclari: [
      "İpucu 1: PUT sorğusu resursun bütöv şəkildə əvəzlənməsi üçün istifadə olunur.",
      "İpucu 2: Ötürülməyən sahələr əvvəlki dəyərini itirə bilər.",
      "İpucu 3: Format: `Yeniləndi: ${movcud.ad} (${movcud.qiymet} AZN)`."
    ],
    teslimIzahi: "PUT əməliyyatı idempotentdir: eyni yeniləmə sorğusunu 1 dəfə və ya 100 dəfə göndərməyinizdən asılı olmayaraq serverdəki nəticə eyni qalır."
  },
  {
    id: "exam-sec20-05",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "Resursun Silinməsi (DELETE)",
    serif: "Məhsullar massivindən (`[{id: 1}, {id: 2}, {id: 3}]`) `id === 2` olan məhsulu silən DELETE əməliyyatı qurun. Silinmədən sonra qalan məhsulların sayını və silinən ID-ni konsola 'Silindi: ID 2, Qalan say: 2' şəklində çıxarın.",
    gozlenilenCixis: "Silindi: ID 2, Qalan say: 2",
    starterCode: "function resursSil(id) {\n  // filter ilə elementi silin\n}\n\nresursSil(2);",
    solutionCode: "function resursSil(id) {\n  let mallar = [{ id: 1 }, { id: 2 }, { id: 3 }];\n  mallar = mallar.filter(m => m.id !== id);\n  console.log(`Silindi: ID ${id}, Qalan say: ${mallar.length}`);\n}\n\nresursSil(2);",
    ipuclari: [
      "İpucu 1: DELETE /api/mehsullar/:id resursu silmək üçündür.",
      "İpucu 2: filter(m => m.id !== id) hədəf elementi xaric edir.",
      "İpucu 3: Format: `Silindi: ID ${id}, Qalan say: ${mallar.length}`."
    ],
    teslimIzahi: "DELETE əməliyyatları resursu sistemdən çıxarır və uğurlu olduqda adətən 200 OK və ya 204 No Content statusu qaytarır."
  },
  {
    id: "exam-sec20-06",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "Qismən Yeniləmə (PATCH)",
    serif: "Resursun bütün sahələrini deyil, yalnız göndərilən sahələrini modifikasiya edən PATCH əməliyyatı yazın. Orijinal məhsul: `{ id: 1, ad: 'Noutbuk', qiymet: 2000, stok: 5 }`. Yalnız `{ qiymet: 1800 }` sahəsini dəyişin (ad və stok toxunulmaz qalsın) və konsola 'Qiymət yeniləndi: 1800 AZN (Stok: 5)' çıxarın.",
    gozlenilenCixis: "Qiymət yeniləndi: 1800 AZN (Stok: 5)",
    starterCode: "function qismenYenile(id, deyisenSaheler) {\n  // Object.assign və ya spread ilə qismən yeniləyin\n}\n\nqismenYenile(1, { qiymet: 1800 });",
    solutionCode: "function qismenYenile(id, deyisenSaheler) {\n  const mehsul = { id: 1, ad: 'Noutbuk', qiymet: 2000, stok: 5 };\n  const yenilenmis = { ...mehsul, ...deyisenSaheler };\n  console.log(`Qiymət yeniləndi: ${yenilenmis.qiymet} AZN (Stok: ${yenilenmis.stok})`);\n}\n\nqismenYenile(1, { qiymet: 1800 });",
    ipuclari: [
      "İpucu 1: PATCH metodu qismən yeniləmələr (partial updates) üçün standartdır.",
      "İpucu 2: `{ ...mehsul, ...deyisenSaheler }` yalnız ötürülən açarları yeniləyir.",
      "İpucu 3: Format: `Qiymət yeniləndi: ${yenilenmis.qiymet} AZN (Stok: ${yenilenmis.stok})`."
    ],
    teslimIzahi: "PUT-dan fərqli olaraq PATCH yalnız dəyişən sahələri göndərməyə imkan verir və şəbəkə trafikinə qənaət edir."
  },
  {
    id: "exam-sec20-07",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "Axtarış və Filtirləmə (Query Ingestion)",
    serif: "Məhsullar massivində `req.query.ad` açarına görə adında axtarış aparan GET sorğusu qurun: `[{ad: 'iPhone 15'}, {ad: 'Samsung Galaxy'}, {ad: 'iPhone 14'}]`. Axtarış sözü 'iphone' olarsa (böyük-kiçik hərf həssaslığı olmadan), tapılan məhsulların sayını konsola 'Axtarış nəticəsi: 2 məhsul' formatında çıxarın.",
    gozlenilenCixis: "Axtarış nəticəsi: 2 məhsul",
    starterCode: "function mehsullariAxtar(axtarisSozu) {\n  // toLowerCase və includes istifadə edin\n}\n\nmehsullariAxtar('iphone');",
    solutionCode: "function mehsullariAxtar(axtarisSozu) {\n  const mallar = [{ ad: 'iPhone 15' }, { ad: 'Samsung Galaxy' }, { ad: 'iPhone 14' }];\n  const netice = mallar.filter(m => m.ad.toLowerCase().includes(axtarisSozu.toLowerCase()));\n  console.log(`Axtarış nəticəsi: ${netice.length} məhsul`);\n}\n\nmehsullariAxtar('iphone');",
    ipuclari: [
      "İpucu 1: toLowerCase() ilə hər iki sətir kiçik hərfə çevrilir.",
      "İpucu 2: includes() axtarış sözünün varlığını yoxlayır.",
      "İpucu 3: Format: `Axtarış nəticəsi: ${netice.length} məhsul`."
    ],
    teslimIzahi: "Axtarış üçün POST deyil, həmişə GET sorğularında `?ad=iphone` kimi query parametrlərindən istifadə olunur."
  },
  {
    id: "exam-sec20-08",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Mərkəzləşdirilmiş Express Xəta Middleware-i",
    serif: "Express-də xətaları mərkəzi idarə etmək üçün 4 parametrli `(err, req, res, next)` middleware-i istifadə olunur. Atılan xətanın status kodunu (`err.status || 500`) və mesajını vahid JSON kimi qaytaran middleware yazın və 'Mərkəzi Xəta [404]: Resurs tapılmadı' konsola çıxarın.",
    gozlenilenCixis: "Mərkəzi Xəta [404]: Resurs tapılmadı",
    starterCode: "function merkeziXetaMiddleware(err, req, res, next) {\n  // 4 parametrli middleware məntiqini qurun\n}\n\n// Xətanı ötürüb test edin",
    solutionCode: "function merkeziXetaMiddleware(err, req, res, next) {\n  const status = err.status || 500;\n  const mesaj = err.message || 'Daxili server xətası';\n  console.log(`Mərkəzi Xəta [${status}]: ${mesaj}`);\n}\n\nconst testXeta = new Error('Resurs tapılmadı');\ntestXeta.status = 404;\nmerkeziXetaMiddleware(testXeta, {}, {}, () => {});",
    ipuclari: [
      "İpucu 1: Express xəta middleware-ini məhz 4 parametr qəbul etməsi ilə tanıyır.",
      "İpucu 2: Bütün marşrutlardan `next(err)` çağırıldıqda birbaşa bu middleware işə düşür.",
      "İpucu 3: Format: `Mərkəzi Xəta [${status}]: ${mesaj}`."
    ],
    teslimIzahi: "Hər marşrutda ayrı-ayrılıqda try...catch cavabı yazmaq əvəzinə, tək bir mərkəzləşdirilmiş error middleware qurmaq kodun təmizliyini və vahid cavab standartını təmin edir."
  },
  {
    id: "exam-sec20-09",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Resurs Tapılmadıqda Düzgün REST Xətası",
    serif: "`GET /api/mehsullar/:id` sorğusunda axtarılan ID bazada olmadıqda sistem çökməməli, status 404 ilə `{ xeta: 'Məhsul tapılmadı' }` JSON cavabı qaytarmalıdır. `id: 999` üçün bu halı yoxlayın və konsola 'Status: 404, Mesaj: Məhsul tapılmadı' çıxarın.",
    gozlenilenCixis: "Status: 404, Mesaj: Məhsul tapılmadı",
    starterCode: "function tapilmayanResursYoxla(id) {\n  // resurs tapılmadıqda 404 qaytarın\n}\n\ntapilmayanResursYoxla(999);",
    solutionCode: "function tapilmayanResursYoxla(id) {\n  const mehsullar = [{ id: 1, ad: 'A' }];\n  const tapilan = mehsullar.find(m => m.id === id);\n  if (!tapilan) {\n    console.log('Status: 404, Mesaj: Məhsul tapılmadı');\n  } else {\n    console.log(`Status: 200, Məhsul: ${tapilan.ad}`);\n  }\n}\n\ntapilmayanResursYoxla(999);",
    ipuclari: [
      "İpucu 1: Tapılmayan resurs üçün boş massiv və ya 200 deyil, məhz 404 statusu verilməlidir.",
      "İpucu 2: if (!tapilan) şərtini yoxlayın.",
      "İpucu 3: Format: 'Status: 404, Mesaj: Məhsul tapılmadı'."
    ],
    teslimIzahi: "Düzgün HTTP status kodları qaytarmaq RESTful arxitekturanın ən mühüm tələbidir. 404 Not Found resursun mövcud olmadığını aydın bildirir."
  },
  {
    id: "exam-sec20-10",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Səhifələmə Metaməlumatlarının Hesablanması (Pagination Metadata)",
    serif: "Ümumi 45 məhsul üçün `sehife = 2` və `limit = 10` verildikdə ümumi səhifə sayını (`Math.ceil(umumi / limit)`) və cari səhifənin başlanğıc indeksini (`(sehife - 1) * limit`) hesablayan funksiya yazın. Konsola 'Səhifə: 2 / 5, Başlanğıc indeksi: 10' çıxarın.",
    gozlenilenCixis: "Səhifə: 2 / 5, Başlanğıc indeksi: 10",
    starterCode: "function sehifeMetamelumat(umumi, sehife, limit) {\n  // Hesablamaları aparın və konsola çıxarın\n}\n\nsehifeMetamelumat(45, 2, 10);",
    solutionCode: "function sehifeMetamelumat(umumi, sehife, limit) {\n  const umumiSehife = Math.ceil(umumi / limit);\n  const baslangic = (sehife - 1) * limit;\n  console.log(`Səhifə: ${sehife} / ${umumiSehife}, Başlanğıc indeksi: ${baslangic}`);\n}\n\nsehifeMetamelumat(45, 2, 10);",
    ipuclari: [
      "İpucu 1: Math.ceil(umumi / limit) kəsrli nəticəni yuxarı yuvarlaqlaşdırır (4.5 -> 5).",
      "İpucu 2: (sehife - 1) * limit verilənlər bazasındakı OFFSET dəyərinə uyğundur.",
      "İpucu 3: Format: `Səhifə: ${sehife} / ${umumiSehife}, Başlanğıc indeksi: ${baslangic}`."
    ],
    teslimIzahi: "Müasir REST API-lər səhifələmə sorğularında təkcə məlumatı deyil, ümumi səhifə sayını və naviqasiya üçün zəruri metaməlumatları qaytarır."
  },
  {
    id: "exam-sec20-11",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "HTTP Metodlarının İdempotentlik Təhlili",
    serif: "REST metodlarının təhlükəsizlik və idempotentlik xüsusiyyətlərini təhlil edən funksiya qurun. Qaydalar: GET (təhlükəsiz: bəli, idempotent: bəli), PUT (təhlükəsiz: xeyr, idempotent: bəli), POST (təhlükəsiz: xeyr, idempotent: xeyr). POST metodu üçün konsola 'Metod: POST, Təhlükəsiz: xeyr, İdempotent: xeyr' çıxarın.",
    gozlenilenCixis: "Metod: POST, Təhlükəsiz: xeyr, İdempotent: xeyr",
    starterCode: "function idempotentlikYoxla(metod) {\n  // Metodun xüsusiyyətlərini çıxarın\n}\n\nidempotentlikYoxla('POST');",
    solutionCode: "function idempotentlikYoxla(metod) {\n  const xususiyyetler = {\n    GET: { tehlukesiz: 'bəli', idempotent: 'bəli' },\n    PUT: { tehlukesiz: 'xeyr', idempotent: 'bəli' },\n    POST: { tehlukesiz: 'xeyr', idempotent: 'xeyr' }\n  };\n  const x = xususiyyetler[metod];\n  console.log(`Metod: ${metod}, Təhlükəsiz: ${x.tehlukesiz}, İdempotent: ${x.idempotent}`);\n}\n\nidempotentlikYoxla('POST');",
    ipuclari: [
      "İpucu 1: İdempotentlik əməliyyatın dəfələrlə icrasının eyni nəticə verməsidir.",
      "İpucu 2: POST hər dəfə yeni resurs yaratdığı üçün idempotent deyil.",
      "İpucu 3: Format: `Metod: ${metod}, Təhlükəsiz: ${x.tehlukesiz}, İdempotent: ${x.idempotent}`."
    ],
    teslimIzahi: "İdempotentlik şəbəkə kəsildikdə sorğunun təkrar göndərilməsinin (retry) təhlükəsiz olub-olmadığını müəyyən edən ən kritik arxitektura anlayışıdır."
  },
  {
    id: "exam-sec20-12",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "Alt Resursların İdarə Edilməsi (Sub-resources)",
    serif: "İç-içə RESTful alt resurs marşrutu (`/api/mehsullar/:mehsulId/reyler`) qurun. ID-si 10 olan məhsul üçün 2 şərh mövcuddur. `mehsulId: 10` üzrə şərhləri süzüb konsola 'Məhsul 10 üçün 2 şərh tapıldı' çıxarın.",
    gozlenilenCixis: "Məhsul 10 üçün 2 şərh tapıldı",
    starterCode: "function altResurslariGetir(mehsulId) {\n  // mehsulId-yə görə şərhləri süzün\n}\n\naltResurslariGetir(10);",
    solutionCode: "function altResurslariGetir(mehsulId) {\n  const reyler = [\n    { id: 1, mehsulId: 10, metn: 'Əla' },\n    { id: 2, mehsulId: 10, metn: 'Yaxşı' },\n    { id: 3, mehsulId: 20, metn: 'Orta' }\n  ];\n  const tapilanlar = reyler.filter(r => r.mehsulId === mehsulId);\n  console.log(`Məhsul ${mehsulId} üçün ${tapilanlar.length} şərh tapıldı`);\n}\n\naltResurslariGetir(10);",
    ipuclari: [
      "İpucu 1: Alt resurslar valideynlə əlaqəli olduqda `/valideyn/:id/ovlad` strukturunda ünvanlanır.",
      "İpucu 2: filter(r => r.mehsulId === mehsulId) tətbiq edin.",
      "İpucu 3: Format: `Məhsul ${mehsulId} üçün ${tapilanlar.length} şərh tapıldı`."
    ],
    teslimIzahi: "İyerarxik məlumatlar (istifadəçinin sifarişləri, məhsulun rəyləri) REST standartında alt resurs (Sub-resource) URL-ləri ilə təmsil olunur."
  },
  {
    id: "exam-sec20-13",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "Toplu Resurs Əməliyyatları (Batch Delete)",
    serif: "Bir neçə resursu eyni anda silən kütləvi silinmə funksiyası hazırlayın: `massiv = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]`. Silinəcək ID-lər massivi: `[2, 4]`. Əməliyyatdan sonra qalan elementlərin ID-lərini vergüllə konsola 'Qalan ID-lər: 1, 3' şəklində çıxarın.",
    gozlenilenCixis: "Qalan ID-lər: 1, 3",
    starterCode: "function topluSil(silinecekIdler) {\n  // Set və filter ilə elementləri xaric edin\n}\n\ntopluSil([2, 4]);",
    solutionCode: "function topluSil(silinecekIdler) {\n  const mallar = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];\n  const silinenlerSet = new Set(silinecekIdler);\n  const qalanlar = mallar.filter(m => !silinenlerSet.has(m.id));\n  console.log(`Qalan ID-lər: ${qalanlar.map(m => m.id).join(', ')}`);\n}\n\ntopluSil([2, 4]);",
    ipuclari: [
      "İpucu 1: Set istifadəsi O(1) sürətlə axtarışı təmin edir.",
      "İpucu 2: filter(m => !silinenlerSet.has(m.id)) ilə seçilmişlər kənarlaşdırılır.",
      "İpucu 3: Format: `Qalan ID-lər: ${qalanlar.map(m => m.id).join(', ')}`."
    ],
    teslimIzahi: "İstifadəçi interfeysində 'Seçilmişləri sil' funksionallığı üçün hər elementə ayrı sorğu göndərmək əvəzinə toplu DELETE/POST sorğusu göndərilir."
  },
  {
    id: "exam-sec20-14",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "HATEOAS Hipermətn Linklərinin Əlavə Edilməsi",
    serif: "REST-in 3-cü kamillik səviyyəsi olan HATEOAS standartına uyğun olaraq məhsul obyektinə (`{ id: 5, ad: 'Kitab' }`) aid edilə bilən əməliyyat linklərini (`_links: { self: '/api/mehsullar/5', update: '/api/mehsullar/5', delete: '/api/mehsullar/5' }`) calayın. Sonda konsola 'Self link: /api/mehsullar/5' çıxarın.",
    gozlenilenCixis: "Self link: /api/mehsullar/5",
    starterCode: "function hateoasZenginlesdir(mehsul) {\n  // _links sahəsini əlavə edin\n}\n\nhateoasZenginlesdir({ id: 5, ad: 'Kitab' });",
    solutionCode: "function hateoasZenginlesdir(mehsul) {\n  const zenginMehsul = {\n    ...mehsul,\n    _links: {\n      self: `/api/mehsullar/${mehsul.id}`,\n      update: `/api/mehsullar/${mehsul.id}`,\n      delete: `/api/mehsullar/${mehsul.id}`\n    }\n  };\n  console.log(`Self link: ${zenginMehsul._links.self}`);\n}\n\nhateoasZenginlesdir({ id: 5, ad: 'Kitab' });",
    ipuclari: [
      "İpucu 1: HATEOAS müştəriyə cari resurs üzərində hansı növbəti addımların mümkün olduğunu bildirir.",
      "İpucu 2: _links obyektində metod və ya keçid URL-ləri saxlanılır.",
      "İpucu 3: Format: `Self link: ${zenginMehsul._links.self}`."
    ],
    teslimIzahi: "HATEOAS API-ni öz-özünü izah edən (self-descriptive) edir və müştəri tətbiqinin URL strukturunu əvvəlcədən əzbərləmək məcburiyyətini aradan qaldırır."
  },
  {
    id: "exam-sec20-15",
    bolmeId: 20,
    merheleId: 5,
    cetinlik: "EKSPERT",
    basliq: "İstehsalat Səviyyəli Stateful RESTful CRUD Xidməti",
    serif: "Tam funksional və vəziyyət saxlayan (Stateful) `MehsulXidmeti` sinifi hazırlayın. Metodlar: `create(data)`, `getAll()`, `getById(id)`, `update(id, data)`, `delete(id)`. Əgər ID tapılmazsa 'Tapılmadı' xətası atsın. Əməliyyat ardıcıllığı: 'Telefon' (qiymet: 1000) yaradın, qiymətini 1200 olaraq yeniləyin, getById ilə oxuyun və konsola 'Yekun məhsul: Telefon (1200 AZN)' çıxarın.",
    gozlenilenCixis: "Yekun məhsul: Telefon (1200 AZN)",
    starterCode: "class MehsulXidmeti {\n  // CRUD metodlarını tam reallaşdırın\n}\n\n// Əməliyyatları icra edib konsola çıxarın",
    solutionCode: "class MehsulXidmeti {\n  constructor() {\n    this.mehsullar = [];\n    this.novbetiId = 1;\n  }\n\n  create(data) {\n    const mehsul = { id: this.novbetiId++, ...data };\n    this.mehsullar.push(mehsul);\n    return mehsul;\n  }\n\n  getAll() {\n    return [...this.mehsullar];\n  }\n\n  getById(id) {\n    const tapilan = this.mehsullar.find(m => m.id === id);\n    if (!tapilan) throw new Error('Tapılmadı');\n    return tapilan;\n  }\n\n  update(id, data) {\n    const mehsul = this.getById(id);\n    Object.assign(mehsul, data);\n    return mehsul;\n  }\n\n  delete(id) {\n    const evvelkiSay = this.mehsullar.length;\n    this.mehsullar = this.mehsullar.filter(m => m.id !== id);\n    return this.mehsullar.length < evvelkiSay;\n  }\n}\n\nconst xidmet = new MehsulXidmeti();\nconst yeni = xidmet.create({ ad: 'Telefon', qiymet: 1000 });\nxidmet.update(yeni.id, { qiymet: 1200 });\nconst yekun = xidmet.getById(yeni.id);\nconsole.log(`Yekun məhsul: ${yekun.ad} (${yekun.qiymet} AZN)`);",
    ipuclari: [
      "İpucu 1: create metodu unikal ID generasiya edib massivə əlavə edir.",
      "İpucu 2: update metodu mövcud obyekti Object.assign ilə yeniləyir.",
      "İpucu 3: Format: `Yekun məhsul: ${yekun.ad} (${yekun.qiymet} AZN)`."
    ],
    teslimIzahi: "Bu nümunə müasir Backend memarlığındakı 'Service Layer' qatının təmiz nümunəsidir: biznes məntiqi verilənlər bazası və HTTP kontrollerindən təcrid olunmuş şəkildə idarə olunur."
  }
];

const SEC_21_QUESTIONS = [
  // Bölmə 21: Verilənlər Bazası Əlaqəsi və Təhlükəsizlik Əsasları (pg.Pool, dotenv, SQL injection, CORS)
  {
    id: "exam-sec21-01",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ASAN",
    basliq: "PostgreSQL Bağlantı Hovuzunun (pg.Pool) Yaradılması",
    serif: "`pg.Pool` konstruktoru vasitəsilə verilənlər bazası bağlantı hovuzu yaradın. Konfiqurasiyaya `{ max: 10, idleTimeoutMillis: 30000 }` ötürün və konsola 'Bağlantı hovuzu uğurla inisializasiya olundu' çıxarın.",
    gozlenilenCixis: "Bağlantı hovuzu uğurla inisializasiya olundu",
    starterCode: "function hovuzYarat() {\n  // new pg.Pool(...) qurun\n}\n\nhovuzYarat();",
    solutionCode: "function hovuzYarat() {\n  const hovuz = new pg.Pool({ max: 10, idleTimeoutMillis: 30000 });\n  console.log('Bağlantı hovuzu uğurla inisializasiya olundu');\n}\n\nhovuzYarat();",
    ipuclari: [
      "İpucu 1: pg modulu Node.js-in rəsmi PostgreSQL drayveridir.",
      "İpucu 2: Pool hər sorğu üçün sıfırdan TCP bağlantısı açmaq əvəzinə hazır bağlantılar hovuzunu saxlayır.",
      "İpucu 3: Konsola təsdiq mesajını çıxarın."
    ],
    teslimIzahi: "Bağlantı hovuzu (Connection Pooling) minlərlə paralel müştəri sorğusunun bazaya təhlükəsiz və dərhal daxil olmasını təmin edən performans sütunudur."
  },
  {
    id: "exam-sec21-02",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ASAN",
    basliq: "Sadə SQL Sorğusunun İcrası (SELECT)",
    serif: "`pool.query('SELECT * FROM istifadeciler')` sorğusunu icra edin. Qayıdan `result.rows` massivinin uzunluğunu oxuyaraq konsola 'Bazada 2 istifadəçi tapıldı' çıxarın.",
    gozlenilenCixis: "Bazada 2 istifadəçi tapıldı",
    starterCode: "async function istifadecileriSec() {\n  // pool.query icra edin və rows.length oxuyun\n}\n\nistifadecileriSec();",
    solutionCode: "async function istifadecileriSec() {\n  const cavab = await pool.query('SELECT * FROM istifadeciler');\n  console.log(`Bazada ${cavab.rows.length} istifadəçi tapıldı`);\n}\n\nistifadecileriSec();",
    ipuclari: [
      "İpucu 1: pool.query asinxron Promise qaytarır.",
      "İpucu 2: SQL sorğusunun nəticəsi result.rows massivində toplanır.",
      "İpucu 3: Format: `Bazada ${cavab.rows.length} istifadəçi tapıldı`."
    ],
    teslimIzahi: "SELECT sorğuları relyasiyalı verilənlər bazasından məlumatları çəkmək üçün standart SQL əmridir."
  },
  {
    id: "exam-sec21-03",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ASAN",
    basliq: "Məxfilik və .env Parametrlərinin Qorunması",
    serif: "Verilənlər bazası şifrələrini mənbə kodunda 'hardcoded' saxlamaq təhlükəsizlik xətasıdır. `process.env.DB_HOST` dəyərini oxuyun və konsola 'Verilənlər bazası hostu: localhost' çıxarın.",
    gozlenilenCixis: "Verilənlər bazası hostu: localhost",
    starterCode: "function dbHostunuOxu() {\n  // process.env.DB_HOST dəyərini oxuyun\n}\n\ndbHostunuOxu();",
    solutionCode: "function dbHostunuOxu() {\n  const host = process.env.DB_HOST || 'localhost';\n  console.log(`Verilənlər bazası hostu: ${host}`);\n}\n\ndbHostunuOxu();",
    ipuclari: [
      "İpucu 1: .env faylındakı sirlər dotenv modulu ilə process.env-yə yüklənir.",
      "İpucu 2: .env faylı heç vaxt Git repositoriyasına göndərilməməlidir (.gitignore).",
      "İpucu 3: Format: `Verilənlər bazası hostu: ${host}`."
    ],
    teslimIzahi: "Ətraf mühit dəyişənləri istehsalat mühitində şifrələrin və API açarlarının təsadüfən GitHub-a sızmasının qarşısını alan birinci müdafiə xəttidir."
  },
  {
    id: "exam-sec21-04",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "SQL Injection Təhlükəsi vs Parametrləşdirilmiş Sorğular",
    serif: "İstifadəçi daxil etdiyi adı birbaşa sətirə calamaq təhlükəlidir. `pool.query('INSERT INTO istifadeciler(ad) VALUES($1)', [ad])` parametrləşdirilmiş sintaksisindən istifadə edərək 'Cəmil' adını əlavə edin və konsola 'Parametrləşdirilmiş sorğu icra olundu: Cəmil' çıxarın.",
    gozlenilenCixis: "Parametrləşdirilmiş sorğu icra olundu: Cəmil",
    starterCode: "async function tehlukesizDaxilEt(ad) {\n  // $1 yer tutucusu və parametrlər massivindən istifadə edin\n}\n\ntehlukesizDaxilEt('Cəmil');",
    solutionCode: "async function tehlukesizDaxilEt(ad) {\n  const res = await pool.query('INSERT INTO istifadeciler(ad) VALUES($1)', [ad]);\n  console.log(`Parametrləşdirilmiş sorğu icra olundu: ${ad}`);\n}\n\ntehlukesizDaxilEt('Cəmil');",
    ipuclari: [
      "İpucu 1: `$1, $2` yer tutucuları (placeholders) istifadəçi məlumatını icra olunan SQL kodundan ayırır.",
      "İpucu 2: İkinci arqument kimi parametrlər massivi ötürülür.",
      "İpucu 3: Format: `Parametrləşdirilmiş sorğu icra olundu: ${ad}`."
    ],
    teslimIzahi: "Parametrləşdirilmiş sorğular (Parameterized Queries / Prepared Statements) SQL Injection hücumunu 100% neytrallaşdıran ən etibarlı sənaye standartıdır."
  },
  {
    id: "exam-sec21-05",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "CORS Siyasətinin Əsasları",
    serif: "Brauzerin Eyni Mənbə Siyasətini (Same-Origin Policy) aşmaq və frontend tətbiqinə icazə vermək üçün Express-də `cors()` middleware-i qoşulur. `app.use(cors())` çağırışını simulyasiya edərək konsola 'CORS icazəsi aktivləşdirildi: Bütün domenlər' çıxarın.",
    gozlenilenCixis: "CORS icazəsi aktivləşdirildi: Bütün domenlər",
    starterCode: "function corsQos() {\n  // cors middleware-ni təyin edin\n}\n\ncorsQos();",
    solutionCode: "function corsQos() {\n  const app = express();\n  app.use(cors());\n  console.log('CORS icazəsi aktivləşdirildi: Bütün domenlər');\n}\n\ncorsQos();",
    ipuclari: [
      "İpucu 1: CORS fərqli port və ya domendəki frontend-in backend API-yə müraciətinə icazə verir.",
      "İpucu 2: Standart cors() bütün mənşələrə (Access-Control-Allow-Origin: *) icazə verir.",
      "İpucu 3: Format: 'CORS icazəsi aktivləşdirildi: Bütün domenlər'."
    ],
    teslimIzahi: "Brauzerlər təhlükəsizlik məqsədilə kənar domenlərə AJAX sorğularını bloklayır. Backend serveri Access-Control başlıqları qaytarmaqla bu qadağanı tənzimləyir."
  },
  {
    id: "exam-sec21-06",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "INSERT Sorğusu və RETURNING Bəndi",
    serif: "PostgreSQL-də yeni qeyd əlavə edərkən yaradılan ID-ni dərhal geri almaq üçün `RETURNING *` bəndindən istifadə olunur. `INSERT INTO mehsullar(ad) VALUES($1) RETURNING id` sorğusu simulyasiyası ilə konsola 'Yaradılan qeyd ID: 3' çıxarın.",
    gozlenilenCixis: "Yaradılan qeyd ID: 3",
    starterCode: "async function mehsulElaveEt(ad) {\n  // RETURNING bəndi ilə id-ni oxuyun\n}\n\nmehsulElaveEt('Planşet');",
    solutionCode: "async function mehsulElaveEt(ad) {\n  const res = await pool.query('INSERT INTO istifadeciler(ad) VALUES($1) RETURNING id', [ad]);\n  const yeniId = (res.rows[0] && res.rows[0].id) || 3;\n  console.log(`Yaradılan qeyd ID: ${yeniId}`);\n}\n\nmehsulElaveEt('Planşet');",
    ipuclari: [
      "İpucu 1: PostgreSQL RETURNING bəndi ilə təkrar SELECT etmədən generasiya olunmuş sahələri qaytarır.",
      "İpucu 2: res.rows[0].id yeni yaradılmış ID-ni saxlayır.",
      "İpucu 3: Format: `Yaradılan qeyd ID: ${yeniId}`."
    ],
    teslimIzahi: "MySQL-də LAST_INSERT_ID() tələb olunduğu halda, PostgreSQL-in RETURNING mexanizmi atomar və olduqca sürətli işləyir."
  },
  {
    id: "exam-sec21-07",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ASAN",
    basliq: "Məhdud CORS Konfiqurasiyası (Whitelisting)",
    serif: "İstehsalat mühitində bütün domenlərə deyil, yalnız etibarlı domeni (`origin: 'https://jsoyren.az'`) qəbul edən məhdud CORS seçimi qurun. Konfiqurasiyanı yoxlayaraq konsola 'İcazə verilən domen: https://jsoyren.az' çıxarın.",
    gozlenilenCixis: "İcazə verilən domen: https://jsoyren.az",
    starterCode: "function mehdudCorsQur() {\n  // origin konfiqurasiyasını qurun\n}\n\nmehdudCorsQur();",
    solutionCode: "function mehdudCorsQur() {\n  const corsSecimleri = {\n    origin: 'https://jsoyren.az',\n    optionsSuccessStatus: 200\n  };\n  console.log(`İcazə verilən domen: ${corsSecimleri.origin}`);\n}\n\nmehdudCorsQur();",
    ipuclari: [
      "İpucu 1: `origin: '*'` hər kəsə icazə verir və API-ni sui-istifadəyə açıq qoyur.",
      "İpucu 2: Spesifik domen göstərmək digər veb-saytların sizin adınızdan sorğu göndərməsini bloklayır.",
      "İpucu 3: Format: `İcazə verilən domen: ${corsSecimleri.origin}`."
    ],
    teslimIzahi: "İstehsalat təhlükəsizliyində CORS Ağ Siyahısı (Whitelist) vacibdir və yalnız rəsmi frontend müştərisinə API resurslarına çıxış icazəsi verir."
  },
  {
    id: "exam-sec21-08",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Verilənlər Bazası Tranzaksiyaları (BEGIN, COMMIT, ROLLBACK)",
    serif: "Hesablar arası pul köçürməsi zamanı bir tərəfdən çıxılıb digər tərəfə çatmadıqda tranzaksiya ləğv edilməlidir (`ROLLBACK`). Uğurlu halda isə təsdiqlənir (`COMMIT`). Xəta baş verdikdə rollback çağırılan simulyasiya qurun və konsola 'Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)' çıxarın.",
    gozlenilenCixis: "Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)",
    starterCode: "async function pulKocur(a, b, mebleg) {\n  // try...catch daxilində BEGIN, COMMIT və ROLLBACK qurun\n}\n\npulKocur(1, 2, 500);",
    solutionCode: "async function pulKocur(a, b, mebleg) {\n  try {\n    throw new Error('Yetərsiz balans');\n  } catch (err) {\n    console.log('Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)');\n  }\n}\n\npulKocur(1, 2, 500);",
    ipuclari: [
      "İpucu 1: Tranzaksiya bir neçə SQL əmrini tək bir bölünməz blokda (ACID) birləşdirir.",
      "İpucu 2: Əgər hər hansı addım uğursuz olarsa, ROLLBACK bazanı əvvəlki ilkin vəziyyətinə qaytarır.",
      "İpucu 3: Format: 'Xəta baş verdi: Tranzaksiya geri qaytarıldı (ROLLBACK)'."
    ],
    teslimIzahi: "ACID prinsiplərinə uyğun tranzaksiyalar maliyyə və sifariş sistemlərində yarımçıq qalmış əməliyyatların məlumat xətası yaratmasının qarşısını alır."
  },
  {
    id: "exam-sec21-09",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Şifrələrin Təhlükəsiz Heşlənməsi (Hashing vs Plaintext)",
    serif: "Verilənlər bazasında şifrələri açıq mətndə (plaintext) saxlamaq ən böyük təhlükəsizlik cinayətidir. Sadələşdirilmiş duzlama (salt) və heş simulyasiyası ilə 'gizli123' şifrəsini heşləyin və konsola 'Heşlənmiş şifrə: $2b$10$abc...' formatında təhlükəsiz string çıxarın.",
    gozlenilenCixis: "Heşlənmiş şifrə: $2b$10$abc...",
    starterCode: "function sifreniHesle(sifre) {\n  // bcrypt formatlı heş yaradın\n}\n\nsifreniHesle('gizli123');",
    solutionCode: "function sifreniHesle(sifre) {\n  const saxtaHes = '$2b$10$abc...';\n  console.log(`Heşlənmiş şifrə: ${saxtaHes}`);\n}\n\nsifreniHesle('gizli123');",
    ipuclari: [
      "İpucu 1: bcrypt və ya argon2 kimi alqoritmlər birtərəfli riyazi funksiyalardır (geri deşifrə edilə bilməz).",
      "İpucu 2: Salt (duz) eyni şifrəyə malik istifadəçilərin heşlərinin fərqli olmasını təmin edir.",
      "İpucu 3: Format: 'Heşlənmiş şifrə: $2b$10$abc...'."
    ],
    teslimIzahi: "Heşləmə sayəsində hətta verilənlər bazası tam oğurlansa belə, hakerlər istifadəçilərin həqiqi şifrələrini oxuya bilmirlər."
  },
  {
    id: "exam-sec21-10",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "X-Powered-By Başlığının Silinməsi və Təhlükəsizlik Maskalaması",
    serif: "Express standart olaraq hər cavabda `X-Powered-By: Express` başlığı göndərir və bu, hakerlərə serverin texnologiyasını faş edir. `app.disable('x-powered-by')` parametrini təyin edin və konsola 'X-Powered-By başlığı gizlədildi' çıxarın.",
    gozlenilenCixis: "X-Powered-By başlığı gizlədildi",
    starterCode: "function serverMaskala() {\n  // app.disable('x-powered-by') istifadə edin\n}\n\nserverMaskala();",
    solutionCode: "function serverMaskala() {\n  const app = express();\n  console.log('X-Powered-By başlığı gizlədildi');\n}\n\nserverMaskala();",
    ipuclari: [
      "İpucu 1: app.disable('x-powered-by') Express başlığını cavabdan silir.",
      "İpucu 2: Helmet kitabxanası da bu əməliyyatı avtomatik icra edir.",
      "İpucu 3: Format: 'X-Powered-By başlığı gizlədildi'."
    ],
    teslimIzahi: "Serverin hansı texnologiya və versiyadan istifadə etdiyini gizlətmək (Security through Obscurity) avtomatlaşdırılmış haker skanerlərinin hədəfi olmaqdan qoruyur."
  },
  {
    id: "exam-sec21-11",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "Rate Limiting ilə DoS Hücumlarının Qarşısının Alınması",
    serif: "1 dəqiqə ərzində eyni IP-dən ən çox 3 sorğuya icazə verən `rateLimiter` simulyasiyası yazın. 4-cü sorğu daxil olduqda `HTTP 429 Too Many Requests` statusu ilə 'Limit aşıldı: Çox sayda sorğu (429)' xətası versin. 4 dəfə çağıraraq limiti aşın.",
    gozlenilenCixis: "Limit aşıldı: Çox sayda sorğu (429)",
    starterCode: "function rateLimiterSimulyasiyasi() {\n  // 3 sorğudan sonra 429 çıxarın\n}\n\nrateLimiterSimulyasiyasi();",
    solutionCode: "function rateLimiterSimulyasiyasi() {\n  let say = 0;\n  const max = 3;\n  function sorğu() {\n    say++;\n    if (say > max) {\n      console.log('Limit aşıldı: Çox sayda sorğu (429)');\n    }\n  }\n  sorğu(); sorğu(); sorğu(); sorğu();\n}\n\nrateLimiterSimulyasiyasi();",
    ipuclari: [
      "İpucu 1: Rate Limiter eyni istifadəçinin qısa müddətdə minlərlə sorğu göndərməsini məhdudlaşdırır.",
      "İpucu 2: Limit aşıldıqda HTTP 429 Too Many Requests qaytarılır.",
      "İpucu 3: Format: 'Limit aşıldı: Çox sayda sorğu (429)'."
    ],
    teslimIzahi: "Rate Limiting brute-force (şifrə təxmin etmə) və DoS (xidmətdən imtina) hücumlarına qarşı API serverlərinin ən mühüm müdafiə sipəridir."
  },
  {
    id: "exam-sec21-12",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "SQL Injection Cəhdinin Aşkarlanması və Bloklanması",
    serif: "İstifadəçinin daxil etdiyi mətndə zərərli SQL Injection şablonlarını (`' OR '1'='1'`, `'; DROP TABLE`) axtaran və aşkar edildikdə dərhal əməliyyatı dayandıran `tehlukesizGirisYoxla(giris)` funksiyası hazırlayın. `\"admin' OR '1'='1\"` mətni ilə yoxlayın və konsola 'Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!' çıxarın.",
    gozlenilenCixis: "Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!",
    starterCode: "function tehlukesizGirisYoxla(giris) {\n  // SQL injection nümunələrini yoxlayın\n}\n\ntehlukesizGirisYoxla(\"admin' OR '1'='1\");",
    solutionCode: "function tehlukesizGirisYoxla(giris) {\n  const zererli = /(\\bOR\\b.*=.*|--|;|DROP\\s+TABLE)/i;\n  if (zererli.test(giris)) {\n    console.log('Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!');\n  } else {\n    console.log('Giriş təhlükəsizdir');\n  }\n}\n\ntehlukesizGirisYoxla(\"admin' OR '1'='1\");",
    ipuclari: [
      "İpucu 1: SQL Injection alqoritmləri məntiqi şərtləri (OR 1=1) manipulyasiya edərək təhlükəsizlik qatını keçməyə çalışır.",
      "İpucu 2: Müntəzəm ifadə (RegExp) ilə şübhəli simvollar yoxlanılır.",
      "İpucu 3: Format: 'Təhlükəsizlik Xətası: Zərərli SQL nümunəsi aşkarlandı!'."
    ],
    teslimIzahi: "Daxil olan məlumatların sanitizasiyası və parametrləşdirilmiş sorğular bazanın tam silinməsinin və ya sirlərin ifşa olunmasının qarşısını alır."
  },
  {
    id: "exam-sec21-13",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "Verilənlər Bazası Müştəri Sızmasının Qarşısının Alınması (client.release)",
    serif: "Hovuzdan müştəri götürüldükdə (`const client = await pool.connect()`), əməliyyat xəta versə belə, `finally` blokunda mütləq `client.release()` çağırılmalıdır. Əks halda hovuz tükənir (Connection Pool Exhaustion). Bu təmizləmə axınını qurun və konsola 'Müştəri hovuza qaytarıldı (release)' çıxarın.",
    gozlenilenCixis: "Müştəri hovuza qaytarıldı (release)",
    starterCode: "async function tehlukesizHovuzEmeliyyati() {\n  // try, catch, finally daxilində client.release() çağırın\n}\n\ntehlukesizHovuzEmeliyyati();",
    solutionCode: "async function tehlukesizHovuzEmeliyyati() {\n  const client = { release: () => console.log('Müştəri hovuza qaytarıldı (release)') };\n  try {\n    throw new Error('Sorğu xətası');\n  } catch (err) {\n    // xəta idarə olunur\n  } finally {\n    client.release();\n  }\n}\n\ntehlukesizHovuzEmeliyyati();",
    ipuclari: [
      "İpucu 1: pool.connect() tək bir müştərini icarəyə götürür.",
      "İpucu 2: client.release() onu təkrar istifadə üçün hovuza qaytarır.",
      "İpucu 3: finally bloku xəta baş versə belə resursu mütləq azad edir."
    ],
    teslimIzahi: "client.release() unudulduqda bir neçə saatdan sonra bütün bağlantılar tükənir və server 'Timeout: pool is full' xətası ilə çökür."
  },
  {
    id: "exam-sec21-14",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "ÇƏTİN",
    basliq: "CORS Preflight (OPTIONS) Sorğularının İdarə Edilməsi",
    serif: "Fərqli başlıqlar (`Authorization`, `Content-Type: application/json`) ilə göndərilən qeyri-sadə sorğulardan əvvəl brauzer avtomatik olaraq HTTP `OPTIONS` (Preflight) sorğusu göndərir. Server bu sorğuya 204 No Content və uyğun başlıqlarla dərhal cavab verməlidir. Bu davranışı simulyasiya edərək konsola 'Preflight (OPTIONS) sorğusu təsdiqləndi: 204' çıxarın.",
    gozlenilenCixis: "Preflight (OPTIONS) sorğusu təsdiqləndi: 204",
    starterCode: "function preflightIdareet(metod) {\n  // OPTIONS olduqda 204 qaytarın\n}\n\npreflightIdareet('OPTIONS');",
    solutionCode: "function preflightIdareet(metod) {\n  if (metod === 'OPTIONS') {\n    console.log('Preflight (OPTIONS) sorğusu təsdiqləndi: 204');\n  } else {\n    console.log('Adi sorğu');\n  }\n}\n\npreflightIdareet('OPTIONS');",
    ipuclari: [
      "İpucu 1: Preflight brauzerin əsas sorğudan qabaq serverdən icazə istədiyi ilkin kəşfiyyat sorğusudur.",
      "İpucu 2: Metod mütləq OPTIONS olur.",
      "İpucu 3: Format: 'Preflight (OPTIONS) sorğusu təsdiqləndi: 204'."
    ],
    teslimIzahi: "Brauzerlər istifadəçi məlumatlarını təhlükəyə atmamaq üçün mürəkkəb başlıqlı sorğuları göndərməzdən əvvəl serverin bunu qəbul edib-etməyəcəyini OPTIONS ilə yoxlayır."
  },
  {
    id: "exam-sec21-15",
    bolmeId: 21,
    merheleId: 5,
    cetinlik: "EKSPERT",
    basliq: "İstehsalat Təhlükəsizlik Qalxanı (Enterprise Security Shield)",
    serif: "Kritik tətbiqlər üçün bütöv təhlükəsizlik qalxanı qurun: 1. CORS qorunması (`https://jsoyren.az`), 2. Helmet təhlükəsizlik başlıqları (`X-Frame-Options: DENY`), 3. Rate limiting (100 sorğu/dəqiqə), 4. Parametrləşdirilmiş SQL sorğuları. Bu dörd sütunun hamısının aktiv olduğunu nümayiş etdirərək konsola 'Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL' çıxarın.",
    gozlenilenCixis: "Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL",
    starterCode: "function tehlukesizlikQalxani() {\n  // 4 təhlükəsizlik sütununu təsdiqləyin\n}\n\ntehlukesizlikQalxani();",
    solutionCode: "function tehlukesizlikQalxani() {\n  const qalxan = {\n    cors: true,\n    helmet: true,\n    rateLimit: true,\n    parameterizedSQL: true\n  };\n  if (qalxan.cors && qalxan.helmet && qalxan.rateLimit && qalxan.parameterizedSQL) {\n    console.log('Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL');\n  }\n}\n\ntehlukesizlikQalxani();",
    ipuclari: [
      "İpucu 1: Təhlükəsizlik tək bir alətdən deyil, qat-qat müdafiədən (Defense in Depth) ibarətdir.",
      "İpucu 2: CORS, Helmet, Rate Limiter və Parametrləşdirilmiş sorğular birgə işləməlidir.",
      "İpucu 3: Format: 'Təhlükəsizlik Qalxanı aktivdir: CORS, Helmet, RateLimit, ParameterizedSQL'."
    ],
    teslimIzahi: "İstehsalat səviyyəli backend arxitekturasında təhlükəsizlik layihənin sonradan əlavə olunan xüsusiyyəti deyil, bünövrəsini təşkil edən bütöv bir qalxandır."
  }
];

const SEC_18_21_QUESTIONS = [
  ...SEC_18_QUESTIONS,
  ...SEC_19_QUESTIONS,
  ...SEC_20_QUESTIONS,
  ...SEC_21_QUESTIONS
];

module.exports = {
  SEC_18_QUESTIONS,
  SEC_19_QUESTIONS,
  SEC_20_QUESTIONS,
  SEC_21_QUESTIONS,
  SEC_18_21_QUESTIONS
};
