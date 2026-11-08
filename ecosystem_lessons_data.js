/**
 * JSÖyrən - JavaScript Ekosistem Arxitekturası Dərsləri Məlumat Bazası
 * 4 Klaster üzrə 16 İnteraktiv Mövzu və Praktiki Tapşırıqlar
 */

var ECOSYSTEM_LESSONS_DATA = [
  // ==========================================
  // KLASTER 1: TypeScript & Tip Sistemi (📘)
  // ==========================================
  {
    id: "ts-types",
    category: "TypeScript & Tip Sistemi",
    categoryIcon: "📘",
    title: "Statik Tip Təhlükəsizliyi",
    description: "JavaScript dinamik tipləşdirməyə malik olduğu üçün xətalar yalnız kod işləyən zaman (runtime) aşkar olunur. TypeScript statik tip sistemi sayəsində kodu yazarkən tipləri yoxlayır və potensial xətaların qarşısını dərhal alır.",
    theory: `
      <h3>Statik Tip Təhlükəsizliyi Nədir?</h3>
      <p>Klassik JavaScript-də dəyişənə istənilən tipdə dəyər mənimsədilə bilər. Məsələn, bir dəyişən əvvəlcə rəqəm, sonra isə mətn ola bilər. Lakin böyük layihələrdə bu, <code>undefined is not a function</code> kimi məşhur çalışma xətalarına (runtime errors) yol açır.</p>
      
      <div class="tip-box">
        <strong>💡 Real Həyat Bənzətməsi:</strong> JavaScript sənədsiz gömrük kimidir - yüklər yalnız ünvana çatanda yoxlanılır. TypeScript isə yük maşına yüklənərkən pasport və qaiməni yoxlayan ciddi nəzarətçidir.
      </div>

      <h4>Əsas Baza Tipləri:</h4>
      <ul>
        <li><code>number</code>: Bütün tam və onluq kəsr ədədlər.</li>
        <li><code>string</code>: Mətn tipləri (tək, cüt və ya şablon dırnaq).</li>
        <li><code>boolean</code>: <code>true</code> və ya <code>false</code>.</li>
        <li><code>unknown</code>: Təhlükəsiz tip; dəyərin tipi yoxlanılmadan üzərində əməliyyat aparmağa icazə verilmir.</li>
      </ul>

      <pre><code class="language-typescript">// Tip Anotasiyası Nümunəsi:
let istifadeci: string = "Samir";
let xal: number = 95;
let aktiv: boolean = true;

function salamla(ad: string): string {
    return "Xoş gəldin, " + ad;
}</code></pre>
    `,
    codeExample: `// Statik Tip Təhlükəsizliyi Nümayişi
function hesablaVergi(qiymet, faiz) {
    if (typeof qiymet !== "number" || typeof faiz !== "number") {
        throw new TypeError("Gözlənilən tip number olmalıdır!");
    }
    return (qiymet * faiz) / 100;
}

const mebleg = hesablaVergi(100, 18);
console.log("Vergi: " + mebleg + " AZN");`,
    interactivePractice: {
      taskInstruction: "`hesablaVergi(qiymet, faiz)` funksiyasını tamamlayın ki, qiymət və vergi faizi əsasında vergi məbləğini hesablasın. Sonra 100 AZN üçün 18% vergi məbləğini hesablayıb konsola dəqiq 'Vergi: 18 AZN' çıxarın.",
      starterCode: `// 🎯 Tapşırıq: 100 AZN üçün 18% vergi məbləğini hesablayın
function hesablaVergi(qiymet, faiz) {
    // TODO: qiymət və faiz əsasında vergi məbləğini hesablayıb qaytarın
    
}

const netice = hesablaVergi(100, 18);
// TODO: Konsola 'Vergi: 18 AZN' çıxarın (netice dəyişənindən istifadə edin)
`,
      expectedOutput: "Vergi: 18 AZN",
      hint: "Funksiyada 'return (qiymet * faiz) / 100;' yazın və nəticəni 'console.log(\"Vergi: \" + netice + \" AZN\");' ilə çap edin."
    }
  },

  {
    id: "ts-interfaces",
    category: "TypeScript & Tip Sistemi",
    categoryIcon: "📘",
    title: "İnterfeyslər və Type Aliases",
    description: "Mürəkkəb obyektlərin və funksiya strukturlarının dəqiq qəlibini (şablonunu) müəyyən etmək üçün istifadə olunur. Layihə boyu məlumat strukturlarının ardıcıllığını və oxunaqlığını təmin edir.",
    theory: `
      <h3>Obyekt Şablonları və Kontraktlar</h3>
      <p>Proqramlaşdırmada interfeys (<code>interface</code>) bir müqavilədir. Əgər bir obyekt müəyyən interfeysə tabedirsə, o mütləq həmin interfeysdə göstərilən sahələrə və tiplərə malik olmalıdır.</p>

      <div class="tip-box">
        <strong>💡 Niyə Vacibdir?</strong> Komanda daxilində işləyərkən backend-dən gələn istifadəçi məlumatının hansı parametrlərdən (ad, email, rol) ibarət olduğunu hər kəs üçün birmənalı müəyyən edir.
      </div>

      <h4>Könüllü (Optional) və Yalnız-Oxunan (Readonly) Sahələr:</h4>
      <pre><code class="language-typescript">interface Mehsul {
    readonly id: number;      // Dəyişdirilə bilməz
    ad: string;
    qiymet: number;
    endirim?: number;         // '?' işarəsi sahənin mütləq olmadığını bildirir
}</code></pre>
    `,
    codeExample: `// İnterfeys və Obyekt Strukturunun Tətbiqi
const mehsul = {
    id: 101,
    ad: "MacBook Pro",
    qiymet: 3500
};

console.log("Məhsul: " + mehsul.ad + " - " + mehsul.qiymet + " AZN");`,
    interactivePractice: {
      taskInstruction: "`mehsul` obyektinə `qiymet` xassəsi (dəyəri 3500) əlavə edin və konsola dəqiq 'Məhsul: MacBook Pro - 3500 AZN' çıxarın.",
      starterCode: `// 🎯 Tapşırıq: mehsul obyektini tamamlayın və məlumatı konsola çıxarın
const mehsul = {
    id: 101,
    ad: "MacBook Pro"
    // TODO: qiymət sahəsini əlavə edin (dəyəri 3500)
};

// TODO: Konsola 'Məhsul: MacBook Pro - 3500 AZN' çıxarın (mehsul.ad və mehsul.qiymet istifadə edin)
`,
      expectedOutput: "Məhsul: MacBook Pro - 3500 AZN",
      hint: "Obyektə 'qiymet: 3500' əlavə edin və 'console.log(`Məhsul: ${mehsul.ad} - ${mehsul.qiymet} AZN`);' yazın."
    }
  },

  {
    id: "ts-generics",
    category: "TypeScript & Tip Sistemi",
    categoryIcon: "📘",
    title: "Generics (Ümumi Tiplər)",
    description: "Müxtəlif tiplərlə eyni məntiqlə işləyə bilən təkrar istifadəyə yararlı funksiyalar və siniflər yaratmağa imkan verir. Kodun təhlükəsizliyini itirmədən elastiklik bəxş edir.",
    theory: `
      <h3>Generics Nə Üçün Lazımdır?</h3>
      <p>Təsəvvür edin ki, massivin ilk elementini qaytaran funksiya yazırsınız. Bu massiv rəqəmlər, sətirlər və ya istifadəçi obyektləri ola bilər. Tip təhlükəsizliyini itirib <code>any</code> yazmaq əvəzinə, biz <strong>Generic T</strong> parametrindən istifadə edirik.</p>

      <div class="tip-box">
        <strong>💡 Analoji Nümunə:</strong> Şəffaf hədiyyə qutusu kimidir. Qutunun forması dəyişmir, amma içinə istər saat, istər kitab, istər telefon qoya bilərsiniz və açanda içinin nə olduğunu dəqiq bilirsiniz.
      </div>

      <pre><code class="language-typescript">function birinciElement&lt;T&gt;(massiv: T[]): T {
    return massiv[0];
}

const reqem = birinciElement([1, 2, 3]);       // T = number
const ad = birinciElement(["Aysel", "Murad"]); // T = string</code></pre>
    `,
    codeExample: `// Generic Məntiqinin Tətbiqi
function sonuncuElement(massiv) {
    if (!massiv || massiv.length === 0) return undefined;
    return massiv[massiv.length - 1];
}

const reqemler = [10, 20, 30, 40];
console.log("Sonuncu: " + sonuncuElement(reqemler));`,
    interactivePractice: {
      taskInstruction: "`sonuncuElement` funksiyasını tamamlayın ki, istənilən massivin sonuncu elementini tapsın və `ballar` massivi üçün konsola 'Sonuncu: 40' çıxarsın.",
      starterCode: `// 🎯 Tapşırıq: Massivin sonuncu elementini tapan funksiyanı yazın
function sonuncuElement(massiv) {
    // TODO: massivin sonuncu elementini qaytarın (massiv.length istifadə edin)
    
}

const ballar = [10, 20, 30, 40];
const son = sonuncuElement(ballar);

// TODO: Konsola 'Sonuncu: 40' çıxarın
console.log("Sonuncu: " + son);`,
      expectedOutput: "Sonuncu: 40",
      hint: "Massivin sonuncu elementinə 'return massiv[massiv.length - 1];' vasitəsilə müraciət edin."
    }
  },

  {
    id: "ts-compiler",
    category: "TypeScript & Tip Sistemi",
    categoryIcon: "📘",
    title: "tsc Transpiler (JS-ə Kompilyasiya)",
    description: "Brauzerlər və Node.js birbaşa TypeScript kodunu oxuya bilməz. tsc (TypeScript Compiler) tipləri yoxlayır, sonra onları silərək təmiz, standart JavaScript koduna çevirir (transpilyasiya).",
    theory: `
      <h3>Transpilyasiya Mərhələsi</h3>
      <p>TypeScript kompilyatoru (<code>tsc</code>) kodunuzu iki əsas mərhələdə emal edir:</p>
      <ol>
        <li><strong>Tip Analizi:</strong> Bütün tiplər, interfeyslər və arqumentlər yoxlanılır. Əgər uyğunsuzluq varsa, xəta çıxarılır.</li>
        <li><strong>Kodun Çevrilməsi:</strong> Bütün tip anotasiyaları tamamilə silinir və nəticədə brauzerin və Node-un anladığı təmiz JavaScript yaranır.</li>
      </ol>

      <div class="tip-box">
        <strong>⚡ Müasir Alətlər:</strong> Vite, esbuild və SWC kimi müasir alətlər tsc-yə nisbətən 50-100 dəfə daha sürətli transpilyasiya apara bilir.
      </div>
    `,
    codeExample: `// TypeScript-in JavaScript-ə çevrilmə simulyasiyası:
// Orijinal TS: const topla = (a: number, b: number): number => a + b;
// Kompilyasiya edilmiş təmiz JS:
const topla = (a, b) => a + b;

console.log("Nəticə:", topla(25, 75));
console.log("Status: tsc uğurla tamamlandı");`,
    interactivePractice: {
      taskInstruction: "`topla` funksiyasını çağıraraq 25 və 75 ədədlərinin cəmini hesablayın və konsola dəqiq 'Cəm: 100' çıxarın.",
      starterCode: `// 🎯 Tapşırıq: topla funksiyasından istifadə edərək cəmi çıxarın
const topla = (a, b) => a + b;

// TODO: 25 və 75 ədədlərini topla funksiyası ilə toplayıb netice dəyişəninə mənimsədin
const netice = null;

// TODO: Konsola 'Cəm: 100' çıxarın
console.log("Cəm: " + netice);`,
      expectedOutput: "Cəm: 100",
      hint: "'const netice = topla(25, 75);' yazaraq funksiyanı çağırın."
    }
  },

  // ==========================================
  // KLASTER 2: Node.js & Server Mühiti (🟢)
  // ==========================================
  {
    id: "node-v8",
    category: "Node.js & Server Mühiti",
    categoryIcon: "🟢",
    title: "V8 JavaScript Engine",
    description: "Google Chrome və Node.js-in ürəyidir. C++ ilə yazılmış bu mühərrik JavaScript kodunu JIT (Just-In-Time) kompilyasiyası ilə birbaşa kompüter prosessorunun başa düşdüyü maşın koduna çevirir.",
    theory: `
      <h3>V8 Mühərrikinin Memarlığı</h3>
      <p>V8 mühərriki iki əsas komponentdən ibarətdir:</p>
      <ul>
        <li><strong>Memory Heap:</strong> Dəyişənlər, obyektlər və funksiyalar üçün yaddaş sahəsi.</li>
        <li><strong>Call Stack:</strong> Kodun icra növbəsini saxlayan zəng yığını.</li>
        <li><strong>Garbage Collector (Orinoco):</strong> İstifadə olunmayan obyektləri yaddaşdan vaxtaşırı silir.</li>
      </ul>

      <div class="tip-box">
        <strong>🚀 JIT Kompilyasiyası:</strong> V8 əvvəlcə kodu sürətlə interpretasiya edir, tez-tez təkrarlanan funksiyaları (isti funksiyalar) isə birbaşa optimallaşdırılmış maşın koduna çevirir.
      </div>
    `,
    codeExample: `const v8 = require('v8');
const heapStats = v8.getHeapStatistics();
const limitMB = Math.round(heapStats.heap_size_limit / 1024 / 1024);

console.log("V8 Heap Limiti: " + limitMB + " MB");
console.log("Mühərrik: Google V8 aktivdir");`,
    interactivePractice: {
      taskInstruction: "V8 yaddaş statistikasından `heap_size_limit` dəyərini oxuyub `1024 * 1024`-ə bölərək MB formatına çevirin və konsolda 'V8 Heap Limiti: 4096 MB' görünməsini təmin edin.",
      starterCode: `// 🎯 Tapşırıq: V8 yaddaş limitini MB formatında hesablayın
const v8 = require('v8');
const stats = v8.getHeapStatistics();

// TODO: stats.heap_size_limit dəyərini MB-a çevirin (Math.round ilə 1024 * 1024-ə bölün)
const limitMB = 0;

console.log("V8 Heap Limiti: " + limitMB + " MB");`,
      expectedOutput: "V8 Heap Limiti: 4096 MB",
      hint: "'const limitMB = Math.round(stats.heap_size_limit / (1024 * 1024));' yazın."
    }
  },

  {
    id: "node-eventloop",
    category: "Node.js & Server Mühiti",
    categoryIcon: "🟢",
    title: "Libuv & Event Loop (Asinxron I/O)",
    description: "JavaScript təkaxınlıdır (single-threaded). Libuv C++ kitabxanası isə fayl oxuma və şəbəkə sorğularını arxa planda paralel icra edərək serverin bloklanmasının qarşısını alır.",
    theory: `
      <h3>Event Loop Fazaları</h3>
      <p>Node.js-də Event Loop fasiləsiz dövr edir və tapşırıqları müxtəlif növbələr üzrə emal edir:</p>
      <ol>
        <li><strong>Timers:</strong> <code>setTimeout</code> və <code>setInterval</code> taymerləri.</li>
        <li><strong>Poll:</strong> Daxil olan şəbəkə bağlantıları və fayl oxuma cavabları.</li>
        <li><strong>Check:</strong> <code>setImmediate</code> geri çağırışları.</li>
        <li><strong>Microtasks:</strong> <code>Promise.then()</code> və <code>queueMicrotask</code> hər fazadan dərhal sonra prioritet icra olunur!</li>
      </ol>
    `,
    codeExample: `console.log("1. Sinxron");
setTimeout(() => console.log("4. Makrotapşırıq (Timer)"), 0);
Promise.resolve().then(() => console.log("3. Mikrotapşırıq (Promise)"));
console.log("2. Sinxron");`,
    interactivePractice: {
      taskInstruction: "Event loop ardıcıllığına uyğun olaraq Promise mikrotapşırığını əlavə edin ki, konsola sırayla '1. Sinxron', '2. Sinxron', '3. Vəd (Promise)' çıxsın.",
      starterCode: `// 🎯 Tapşırıq: Sinxron və mikrotapşırıq sırasını qurun
console.log("1. Sinxron");

// TODO: Promise.resolve().then(...) istifadə edərək '3. Vəd (Promise)' mesajını növbəyə əlavə edin

console.log("2. Sinxron");`,
      expectedOutput: "1. Sinxron\n2. Sinxron\n3. Vəd (Promise)",
      hint: "Sinxron əmrlərin arasına 'Promise.resolve().then(() => console.log(\"3. Vəd (Promise)\"));' əlavə edin."
    }
  },

  {
    id: "node-fs",
    category: "Node.js & Server Mühiti",
    categoryIcon: "🟢",
    title: "File System (fs, path, Buffers)",
    description: "Brauzerdən fərqli olaraq server mühiti serverin diskinə birbaşa çıxış əldə edə bilir. fs modulu faylları yaratmaq, oxumaq, yeniləmək və silmək üçün təməl alətdir.",
    theory: `
      <h3>Fayl Əməliyyatlarında Qızıl Qayda</h3>
      <p>Node.js serverlərində heç vaxt sinxron <code>fs.readFileSync</code> istifadə etmək tövsiyə olunmur, çünki bu, fayl oxunan müddətdə bütün digər istifadəçiləri bloklayır.</p>

      <div class="tip-box">
        <strong>💡 Həmişə Asinxron:</strong> <code>const fs = require('fs/promises');</code> və ya <code>await fs.readFile()</code> istifadə edin.
      </div>
    `,
    codeExample: `const fs = require('fs');
const content = fs.readFileSync('config.json', 'utf8');
const config = JSON.parse(content);

console.log("Tətbiq: " + config.app);
console.log("Versiya: " + config.version);`,
    interactivePractice: {
      taskInstruction: "`config.json` faylını oxuyub `config.app` sahəsini konsola dəqiq 'Tətbiq: JSÖyrən' formatında çıxarın.",
      starterCode: `// 🎯 Tapşırıq: Fayldan oxunmuş JSON-u parse edin və tətbiq adını çıxarın
const fs = require('fs');
const raw = fs.readFileSync('config.json', 'utf8');

// TODO: raw mətnini JSON.parse vasitəsilə obyektə çevirin
const config = null;

// TODO: Konsola 'Tətbiq: JSÖyrən' çıxarın (config.app istifadə edin)
`,
      expectedOutput: "Tətbiq: JSÖyrən",
      hint: "'const config = JSON.parse(raw);' və 'console.log(\"Tətbiq: \" + config.app);' yazın."
    }
  },

  {
    id: "node-runtimes",
    category: "Node.js & Server Mühiti",
    categoryIcon: "🟢",
    title: "Bun & Deno (Müasir Alternativlər)",
    description: "Node.js-in memarlığını daha müasir, yerli TypeScript dəstəkli və hədsiz sürətli mühərriklərlə (məsələn, JavaScriptCore) əvəzləyən yeni nəsil backend mühitləridir.",
    theory: `
      <h3>Niyə Yeni Runtimes?</h3>
      <ul>
        <li><strong>Bun:</strong> Zig dilində yazılıb, inanılmaz dərəcədə sürətlidir və paket idarəetməsini (npm install) 30 qat sürətləndirir.</li>
        <li><strong>Deno:</strong> Təhlükəsizlik icazələri ilə (fayl və ya şəbəkə icazəsi istəmədən icra olunmur) və yerli TypeScript ilə gəlir.</li>
      </ul>
    `,
    codeExample: `// Bun ilə saniyələr içində server quraşdırmaq:
Bun.serve({
    port: 3000
});`,
    interactivePractice: {
      taskInstruction: "`Bun.serve` funksiyasını çağıraraq 8080 portunda dinləyən server başladın və konsolda '🚀 Bun server 8080 portunda dinləyir...' mesajını alın.",
      starterCode: `// 🎯 Tapşırıq: 8080 portunda dinləyən Bun serverini başladın
// Qeyd: 'Bun' qlobal obyekti mühitdə hazırdır

// TODO: Bun.serve({ port: 8080 }) funksiyasını çağırın
`,
      expectedOutput: "🚀 Bun server 8080 portunda dinləyir...",
      hint: "Sadəcə 'Bun.serve({ port: 8080 });' sətrini yazın."
    }
  },

  // ==========================================
  // KLASTER 3: Web APIs & Brauzer (🌐)
  // ==========================================
  {
    id: "web-dom",
    category: "Web APIs & Brauzer",
    categoryIcon: "🌐",
    title: "DOM & Hadisələr (Event Listener)",
    description: "HTML sənədini JavaScript obyektləri ağacına çevirir və istifadəçi klikləri, klaviatura hərəkətlərini dinləyərək səhifəni interaktiv edir.",
    theory: `
      <h3>Document Object Model</h3>
      <p>DOM veb səhifənin canlı proqramlaşdırma interfeysidir. Hər bir HTML teqi JavaScript tərəfindən bir obyekt (Node) kimi idarə edilə bilər.</p>

      <div class="tip-box">
        <strong>⚡ Event Delegation:</strong> Hər bir siyahı elementinə tək-tək event listener qoşmaq əvəzinə, valideyn elementə bir dənə listener qoşub <code>event.target</code> ilə idarə etmək yaddaşı qoruyur.
      </div>
    `,
    codeExample: `// Hadisə Dinləyicisinin Tətbiqi
function clickSimulyasiyasi() {
    console.log("Düymə sıxıldı!");
}

clickSimulyasiyasi();`,
    interactivePractice: {
      taskInstruction: "`handleButtonClick` funksiyasını tamamlayın və onu çağıraraq konsola dəqiq 'Düymə sıxıldı!' mesajını yazdırın.",
      starterCode: `// 🎯 Tapşırıq: Klik hadisəsini idarə edən funksiyanı tamamlayın və çağırın
function handleButtonClick() {
    // TODO: Konsola 'Düymə sıxıldı!' mesajını çıxarın
    
}

// TODO: Funksiyanı çağırın
`,
      expectedOutput: "Düymə sıxıldı!",
      hint: "Funksiyanın içinə 'console.log(\"Düymə sıxıldı!\");' yazın və altında 'handleButtonClick();' çağırın."
    }
  },

  {
    id: "web-fetch",
    category: "Web APIs & Brauzer",
    categoryIcon: "🌐",
    title: "Fetch API & HTTP Şəbəkə Sorğuları",
    description: "Brauzerdən serverə səhifəni yeniləmədən (AJAX) asinxron GET, POST sorğuları göndərmək üçün standart API-dir.",
    theory: `
      <h3>Asinxron HTTP Sorğuları</h3>
      <p><code>fetch()</code> funksiyası bir <code>Promise</code> qaytarır. Server cavab verəndə iki mərhələli proses baş verir:</p>
      <ol>
        <li>Başlıqlar (Headers) və status gəlir (<code>res.ok</code>, <code>res.status</code>).</li>
        <li>Bədən məlumatı (Body) JSON və ya mətn kimi oxunur (<code>await res.json()</code>).</li>
      </ol>
    `,
    codeExample: `async function melumatGetir() {
    const mockData = { ad: "Rəşid", bal: 95 };
    console.log("Tələbə: " + mockData.ad + " - Bal: " + mockData.bal);
}

melumatGetir();`,
    interactivePractice: {
      taskInstruction: "`data` obyektindəki məlumatları oxuyaraq konsola dəqiq 'Tələbə: Rəşid - Bal: 95' formatında çıxış verin.",
      starterCode: `// 🎯 Tapşırıq: Məlumatı formatlaşdırıb konsola çıxarın
const data = { ad: "Rəşid", bal: 95 };

// TODO: Konsola 'Tələbə: Rəşid - Bal: 95' çıxarın (data.ad və data.bal istifadə edin)
`,
      expectedOutput: "Tələbə: Rəşid - Bal: 95",
      hint: "'console.log(`Tələbə: ${data.ad} - Bal: ${data.bal}`);' yazın."
    }
  },

  {
    id: "web-storage",
    category: "Web APIs & Brauzer",
    categoryIcon: "🌐",
    title: "LocalStorage & IndexedDB",
    description: "İstifadəçi seçimlərini, seans tokenlərini və oflayn işləmə rejimini təmin etmək üçün brauzer daxilindəki klient yaddaşıdır.",
    theory: `
      <h3>Brauzer Yaddaş Növləri</h3>
      <ul>
        <li><strong>LocalStorage:</strong> Brauzer bağlansa belə silinməyən daimi açar-dəyər yaddaşı (~5-10MB).</li>
        <li><strong>SessionStorage:</strong> Yalnız cari açıq tab mövcud olduqca saxlanılır.</li>
        <li><strong>IndexedDB:</strong> Mürəkkəb axtarışlar və böyük fayllar üçün klient yönümlü NoSQL məlumat bazası.</li>
      </ul>
    `,
    codeExample: `const mockStore = {};
mockStore["istifadeci"] = "Nigar";

console.log("Aktiv istifadəçi: " + mockStore["istifadeci"]);`,
    interactivePractice: {
      taskInstruction: "`storage` obyektindən `istifadeci` açarını oxuyaraq konsola 'Aktiv istifadəçi: Nigar' çıxarın.",
      starterCode: `// 🎯 Tapşırıq: Yaddaşdan istifadəçi məlumatını oxuyub konsola yazdırın
const storage = { istifadeci: "Nigar" };

// TODO: storage obyektindən istifadeci xassəsini oxuyub 'Aktiv istifadəçi: Nigar' kimi çıxarın
`,
      expectedOutput: "Aktiv istifadəçi: Nigar",
      hint: "'console.log(\"Aktiv istifadəçi: \" + storage.istifadeci);' yazın."
    }
  },

  {
    id: "web-workers",
    category: "Web APIs & Brauzer",
    categoryIcon: "🌐",
    title: "Web Workers (Paralel Çoxaxınlılıq)",
    description: "JavaScript tək axında işləsə də, Web Workers sayəsində arxa planda ayrıca işçi axını açaraq ağır riyazi hesablamalar aparmaq mümkündür.",
    theory: `
      <h3>İnterfeysi Dondurmadan Hesablamaq</h3>
      <p>Əgər əsas axında 10 saniyə çəkən dövr (məsələn, şəkil filtri) işləsə, istifadəçi düymələrə klikləyə bilməz və brauzer donar. Web Worker bu hesablamanı arxa plana keçirir.</p>

      <div class="tip-box">
        <strong>⚠️ Vacib Məhdudiyyət:</strong> Web Worker birbaşa DOM elementlərinə (<code>window</code>, <code>document</code>) daxil ola bilməz. Yalnız məlumat mübadiləsi aparır.
      </div>
    `,
    codeExample: `function faktorial(n) {
    let netice = 1;
    for (let i = 2; i <= n; i++) netice *= i;
    return netice;
}

console.log("Faktorial (5): " + faktorial(5));`,
    interactivePractice: {
      taskInstruction: "`faktorial(n)` funksiyasını tamamlayın və 5 ədədinin faktorialını hesablayaraq konsola 'Faktorial (5): 120' çıxarın.",
      starterCode: `// 🎯 Tapşırıq: Faktorial hesablayan funksiyanı tamamlayın
function faktorial(n) {
    let res = 1;
    // TODO: 2-dən n-ə qədər olan ədədləri bir-birinə vuran dövr (for) qurun
    
    return res;
}

// TODO: 5-in faktorialını hesablayıb konsola 'Faktorial (5): 120' çıxarın
const cavab = faktorial(5);
console.log("Faktorial (5): " + cavab);`,
      expectedOutput: "Faktorial (5): 120",
      hint: "Dövrü 'for (let i = 2; i <= n; i++) res *= i;' kimi yazın."
    }
  },

  // ==========================================
  // KLASTER 4: Müasir Frameworklər (⚛️)
  // ==========================================
  {
    id: "fw-react",
    category: "Müasir Frameworklər",
    categoryIcon: "⚛️",
    title: "React.js & Virtual DOM",
    description: "Meta tərəfindən yaradılmış deklarativ istifadəçi interfeysi kitabxanasıdır. DOM-u birbaşa dəyişmək bahalı əməliyyat olduğundan, React yaddaşda Virtual DOM ağacı saxlayır.",
    theory: `
      <h3>Virtual DOM və Diffing</h3>
      <p>Hər dəfə komponentin vəziyyəti (state) dəyişdikdə React yeni bir Virtual DOM ağacı qurur, onu əvvəlki ağacla müqayisə edir və yalnız həqiqətən dəyişən HTML elementlərini real brauzer DOM-una tətbiq edir.</p>
    `,
    codeExample: `function renderProfile(user) {
    return "<div>Salam, " + user.name + "! Rol: " + user.role + "</div>";
}

const html = renderProfile({ name: "Rəşad", role: "Frontend Developer" });
console.log(html);`,
    interactivePractice: {
      taskInstruction: "`renderProfile(user)` funksiyasını tamamlayın ki, istifadəçinin adı və rolunu qəbul edərək '<div>Salam, Rəşad! Rol: Frontend Developer</div>' qaytarsın və nəticəni konsola çıxarsın.",
      starterCode: `// 🎯 Tapşırıq: Komponent render funksiyasını tamamlayın
function renderProfile(user) {
    // TODO: Şablon sətir ilə '<div>Salam, {user.name}! Rol: {user.role}</div>' qaytarın
    
}

const istifadeci = { name: "Rəşad", role: "Frontend Developer" };
const html = renderProfile(istifadeci);

// TODO: Konsola html dəyişənini çıxarın
console.log(html);`,
      expectedOutput: "<div>Salam, Rəşad! Rol: Frontend Developer</div>",
      hint: "Funksiyada 'return `<div>Salam, ${user.name}! Rol: ${user.role}</div>`;' yazın."
    }
  },

  {
    id: "fw-vue",
    category: "Müasir Frameworklər",
    categoryIcon: "⚛️",
    title: "Vue.js & Svelte (Reaktivlik)",
    description: "Məlumat dəyişdikdə interfeysin avtomatik yenilənməsinə Reaktivlik deyilir. Vue 3 bu məqsədlə ES6 Proxy mexanizmindən, Svelte isə kompilyatordan istifadə edir.",
    theory: `
      <h3>Reaktivliyin Məğzi</h3>
      <p>Klassik JavaScript-də <code>a = 5; b = a * 2;</code> yazsaq və sonra <code>a = 10</code> etsək, <code>b</code> avtomatik 20 olmur. Reaktiv frameworklər isə xassə dəyişikliyini dinləyərək bütün asılılıqları yeniləyir.</p>
    `,
    codeExample: `const data = { xal: 50 };
const proxy = new Proxy(data, {
    set(target, prop, value) {
        target[prop] = value;
        console.log("Dəyişdi: " + prop + " = " + value);
        return true;
    }
});

proxy.xal = 100;`,
    interactivePractice: {
      taskInstruction: "`proxy.xal` dəyərini `100` olaraq yeniləyin ki, Proxy-nin `set` mexanizmi işə düşsün və konsola 'Dəyişdi: xal = 100' yazılsın.",
      starterCode: `// 🎯 Tapşırıq: Reaktiv proxy obyektinin xal dəyərini dəyişin
const data = { xal: 50 };
const proxy = new Proxy(data, {
    set(target, prop, value) {
        target[prop] = value;
        console.log(\`Dəyişdi: \${prop} = \${value}\`);
        return true;
    }
});

// TODO: proxy obyektinin xal xassəsinə 100 dəyərini mənimsədin
`,
      expectedOutput: "Dəyişdi: xal = 100",
      hint: "Sadəcə 'proxy.xal = 100;' sətrini əlavə edin."
    }
  },

  {
    id: "fw-next",
    category: "Müasir Frameworklər",
    categoryIcon: "⚛️",
    title: "Next.js & Server Components (SSR)",
    description: "React-i Node.js backend mühiti ilə birləşdirir, səhifələri serverdə render edib brauzerə hazır HTML göndərir.",
    theory: `
      <h3>Server-Side Rendering (SSR) Üstünlükləri</h3>
      <ul>
        <li><strong>Mükəmməl SEO:</strong> Google və digər axtarış botları səhifənin məzmununu dərhal oxuyur.</li>
        <li><strong>Sürətli İlk Yüklənmə (LCP):</strong> İstifadəçi böyük JS fayllarını gözləmədən hazır HTML-i görür.</li>
      </ul>
    `,
    codeExample: `async function renderServerPage() {
    const course = { title: "Next.js 15 Fullstack" };
    return "<h1>Kurs: " + course.title + "</h1>";
}

renderServerPage().then(html => console.log(html));`,
    interactivePractice: {
      taskInstruction: "`renderServerPage` asinxron funksiyasını çağıraraq qayıdan HTML-i konsola '<h1>Kurs: Next.js 15 Fullstack</h1>' kimi çıxarın.",
      starterCode: `// 🎯 Tapşırıq: Server komponentindən qayıdan HTML-i konsola çıxarın
async function renderServerPage() {
    const course = { title: "Next.js 15 Fullstack" };
    return "<h1>Kurs: " + course.title + "</h1>";
}

// TODO: renderServerPage funksiyasını çağırın və qayıdan Promise-i konsola yazdırın
`,
      expectedOutput: "<h1>Kurs: Next.js 15 Fullstack</h1>",
      hint: "'renderServerPage().then(res => console.log(res));' və ya 'const html = await renderServerPage(); console.log(html);' yazın."
    }
  },

  {
    id: "fw-vite",
    category: "Müasir Frameworklər",
    categoryIcon: "⚛️",
    title: "Vite, Rollup & npm Paket İdarəsi",
    description: "Brauzerin yerli ES Modullarından (ESM) istifadə edərək kodları dərhal işə salan yeni nəsil inkişaf serveri və paketləyicisidir.",
    theory: `
      <h3>Vite Niyə Webpack-dən Sürətlidir?</h3>
      <p>Köhnə paketləyicilər proqramı başlatmazdan əvvəl bütün minlərlə faylı bir böyük fayla yığmalı idi. Vite isə brauzerin <code>import</code> dəstəyindən istifadə edir və yalnız açdığınız səhifə üçün lazım olan faylı emal edir.</p>
    `,
    codeExample: `const pkg = {
    name: "jsoyren-app",
    dependencies: {
        "vite": "^5.0.0",
        "react": "^19.0.0",
        "typescript": "^5.0.0"
    }
};

const depCount = Object.keys(pkg.dependencies).length;
console.log("Layihə: " + pkg.name + " | Paket sayı: " + depCount);`,
    interactivePractice: {
      taskInstruction: "`pkg.dependencies` obyektindəki asılılıqların sayını `Object.keys` ilə hesablayın və konsola 'Layihə: jsoyren-app | Paket sayı: 3' çıxarın.",
      starterCode: `// 🎯 Tapşırıq: Layihədəki asılılıqların (dependencies) sayını hesablayın
const pkg = {
    name: "jsoyren-app",
    dependencies: { "vite": "^5.0.0", "react": "^19.0.0", "typescript": "^5.0.0" }
};

// TODO: pkg.dependencies obyektindəki açarların sayını tapın
const count = 0;

console.log(\`Layihə: \${pkg.name} | Paket sayı: \${count}\`);`,
      expectedOutput: "Layihə: jsoyren-app | Paket sayı: 3",
      hint: "'const count = Object.keys(pkg.dependencies).length;' yazaraq obyektin açar sayını tapın."
    }
  }
];

// Helper to look up topic by id
function getEcosystemLessonById(id) {
  if (!id) return null;
  // Match direct id or with/without eco- prefix
  const cleanId = id.replace(/^eco-/, '');
  return ECOSYSTEM_LESSONS_DATA.find(item => item.id === cleanId || item.id === id || item.id === 'eco-' + cleanId);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ECOSYSTEM_LESSONS_DATA, getEcosystemLessonById };
}
