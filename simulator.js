/**
 * JSÖyrən - Müasir Təhlükəsiz JavaScript Simulyatoru və Sandboxed Iframe İcraçı Modulu
 * 
 * Memarlıq və Təhlükəsizlik Xüsusiyyətləri:
 * 1. Pre-Execution Unicode Normalizer (sanitizeCodeForExecution):
 *    - Kod redaktorundan və ya dərsliklərdən daxil edilən bütün tipoqrafik liqatura və qeyri-standart
 *      simvolları (⇒, ⩾, ⩽, ≠, “ ”, ‘ ’, NBSP, sıfır enli idarəetmə simvolları) etibarlı ASCII JS tokenlərinə çevirir.
 * 2. Asinxron Yüklənmə Yarışı (Race Condition) Ləğvi:
 *    - İstifadəçi kodu və unikal tapşırıq identifikatoru (taskId) təhlükəsiz şəkildə seriyalaşdırılaraq
 *      (JSON.stringify və </script> qorunması ilə) birbaşa iframe.srcdoc daxilinə yerləşdirilir.
 *      Beləliklə, iframe DOM-a əlavə olunan kimi heç bir gecikmə və itmə olmadan dərhal sinxron icra başlayır.
 * 3. Təcrid Olunmuş Iframe Sandbox (sandbox="allow-scripts"):
 *    - allow-same-origin QƏTİYYƏN istifadə edilmir! Opaque ("null") mühit təmin olunur, ana pəncərənin
 *      DOM, localStorage, IndexedDB və cookie obyektlərinə giriş 100% bloklanır.
 * 4. Təhlükəsiz postMessage Rabitəsi:
 *    - Sandboxed iframe daxilindən nəticələr window.parent.postMessage(payload, "*") vasitəsilə ötürülür.
 *    - Ana pəncərədə event.origin yoxlanışı ilə bloklama aparılmır (çünki sandbox-da origin "null" olur);
 *      əvəzinə W3C standartlarına uyğun olaraq event.source === iframe.contentWindow və unikal taskId doğrulanır.
 * 5. Dəqiq Nəticə və Taymer İdarəetməsi (Watchdog Lifecycle):
 *    - İcra bitdikdə dərhal nəticə qəbul edilir və ana pəncərədəki 2.5s watchdog taymeri (clearTimeout) ləğv edilir.
 *    - Köhnə event listener-lər və DOM-dakı iframe dərhal təmizlənir, yaddaş sızması (memory leak) olmur.
 * 6. Sonsuz Dövr və Donma Qoruyucusu:
 *    - while(true) kimi həqiqi sonsuz dövrlər və ya donmuş asinxron əməliyyatlarda 2.5s vaxt limiti
 *      işə düşür, dondurulmuş iframe dərhal DOM-dan ləğv edilir və istifadəçiyə aydın xəbərdarlıq təqdim olunur.
 */

(function(global) {
    'use strict';

    /**
     * 1. Pre-Execution Unicode Normalizer
     * Bütün qeyri-standart tipoqrafik və liqatura simvollarını təmizləyir.
     */
    function sanitizeCodeForExecution(rawCode) {
        if (typeof rawCode !== 'string') return '';
        return rawCode
            // 1.1 Sıfır enli və görünməz idarəetmə simvollarının silinməsi
            .replace(/[\u200B-\u200D\uFEFF\u200E\u200F]/g, '')
            // 1.2 Qırılmayan və xüsusi tipoqrafik boşluqların standart ASCII boşluğa (0x20) çevrilməsi
            .replace(/[\u00A0\u202F\u2000-\u200A]/g, ' ')
            // 1.3 Tipoqrafik ox və bərabərsizlik liqaturalarının standart JS operatorlarına çevrilməsi
            .replace(/\u21D2/g, '=>') // ⇒
            .replace(/\u2A7E/g, '>=') // ⩾
            .replace(/\u2265/g, '>=') // ≥
            .replace(/\u2A7D/g, '<=') // ⩽
            .replace(/\u2264/g, '<=') // ≤
            .replace(/\u2260/g, '!==') // ≠
            // 1.4 Tipoqrafik qoşa dırnaqların (" “ ” « ») standart " dırnağına çevrilməsi
            .replace(/[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g, '"')
            // 1.5 Tipoqrafik tək dırnaqların (‘ ’ ‚ ‛ ′) standart ' dırnağına çevrilməsi
            .replace(/[\u2018\u2019\u201A\u201B\u2032]/g, "'");
    }

    // Hal-hazırda işləyən aktiv icra sessiyasının qeydiyyatı
    let currentSession = null;

    /**
     * 2. Sandboxed Runner HTML Şablon Qurucusu
     * İstifadəçi kodunu və izolasiya olunmuş mühiti təhlükəsiz şəkildə iframe srcdoc üçün hazırlayır.
     */
    function buildRunnerHtml(cleanCode, taskId, timeoutMs) {
        // </script> ardıcıllığının HTML parser tərəfindən qırılmaması üçün təhlükəsiz qaçırılması
        const serializedCode = JSON.stringify(cleanCode).replace(/<\/script/gi, '<\\/script');
        const serializedTaskId = JSON.stringify(taskId);
        const safeTimeout = Math.max(500, Number(timeoutMs) || 2500);

        return `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>JSÖyrən Sandboxed Runner</title>
</head>
<body>
<script>
(function() {
  "use strict";

  var __taskId = ${serializedTaskId};
  var __code = ${serializedCode};
  var __timeoutMs = ${safeTimeout};
  var __logs = [];
  var __hasReported = false;

  // Çıxış formatlayıcısı: Obyekt, massiv, funksiya və xətaları ətraflı göstərir
  function __fmt(v) {
    if (v === null) return "null";
    if (v === undefined) return "undefined";
    if (typeof v === "symbol") return v.toString();
    if (typeof v === "function") return "[Function: " + (v.name || "anonymous") + "]";
    if (v instanceof Error) return v.name + ": " + v.message;
    if (typeof v === "bigint") return v.toString() + "n";
    if (typeof Element !== "undefined" && v instanceof Element) {
      var idAttr = v.id ? (' id="' + v.id + '"') : '';
      var classAttr = v.className ? (' class="' + v.className + '"') : '';
      return "<" + v.tagName.toLowerCase() + idAttr + classAttr + ">";
    }
    if (typeof v === "object") {
      try {
        return JSON.stringify(v, function(k, val) {
          if (typeof val === "function") return "[Function: " + (val.name || "anonymous") + "]";
          if (typeof val === "symbol") return val.toString();
          if (typeof val === "bigint") return val.toString() + "n";
          if (typeof Element !== "undefined" && val instanceof Element) return "<" + val.tagName.toLowerCase() + ">";
          return val;
        }, 2);
      } catch(e) {
        return Object.prototype.toString.call(v);
      }
    }
    return String(v);
  }

  function __pushLog() {
    var args = Array.prototype.slice.call(arguments);
    __logs.push(args.map(__fmt).join(" "));
  }

  function __sendResult(errorMsg) {
    if (__hasReported) return;
    __hasReported = true;
    try {
      window.parent.postMessage({
        type: "EXECUTE_JS_RESULT",
        id: __taskId,
        success: !errorMsg,
        output: __logs.join("\\n"),
        error: errorMsg || null
      }, "*");
    } catch(err) {
      // PostMessage xətası baş verdikdə
    }
  }

  // Konsol obyektinin tam təcrid olunmuş simulyasiyası
  var __timers = {};
  var __counts = {};
  var __mockConsole = {
    log: function() { __pushLog.apply(null, arguments); },
    info: function() { __pushLog.apply(null, arguments); },
    warn: function() { __pushLog.apply(null, ["[Xəbərdarlıq]"].concat(Array.prototype.slice.call(arguments))); },
    error: function() { __pushLog.apply(null, ["[Xəta]"].concat(Array.prototype.slice.call(arguments))); },
    debug: function() { __pushLog.apply(null, arguments); },
    clear: function() { __logs = []; },
    table: function(data) {
      if (data && typeof data === "object") {
        try { __pushLog(JSON.stringify(data, null, 2)); } catch(e) { __pushLog(String(data)); }
      } else {
        __pushLog(data);
      }
    },
    assert: function(condition) {
      if (!condition) {
        var args = Array.prototype.slice.call(arguments, 1);
        __pushLog.apply(null, ["[Assertion failed]"].concat(args.length ? args : ["console.assert"]));
      }
    },
    count: function(label) {
      label = label || "default";
      __counts[label] = (__counts[label] || 0) + 1;
      __pushLog(label + ": " + __counts[label]);
    },
    time: function(label) {
      label = label || "default";
      __timers[label] = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    },
    timeEnd: function(label) {
      label = label || "default";
      if (__timers[label]) {
        var now = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
        var diff = (now - __timers[label]).toFixed(2);
        __pushLog(label + ": " + diff + "ms");
        delete __timers[label];
      } else {
        __pushLog("[Timer " + label + " mövcud deyil]");
      }
    }
  };
  window.console = __mockConsole;

  // Bloklayıcı UI dialoqlarının təhlükəsiz qeydiyyatı
  window.alert = function(msg) { __pushLog("[alert]:", msg); };
  window.prompt = function(msg) { __pushLog("[prompt]:", msg); return null; };
  window.confirm = function(msg) { __pushLog("[confirm]:", msg); return false; };

  // Node.js mühit mock-ları (require, process, module)
  window.process = { env: { NODE_ENV: "development" }, version: "v20.0.0", platform: "browser" };
  window.module = { exports: {} };
  window.exports = window.module.exports;
  window.global = window;
  window.require = function(mod) {
    if (mod === "fs") {
      return {
        readFileSync: function() { return "Fayl məzmunu (Mock)"; },
        writeFileSync: function() { return true; },
        promises: {
          readFile: async function() { return "Fayl məzmunu (Mock)"; },
          writeFile: async function() { return true; }
        }
      };
    }
    if (mod === "path") {
      return {
        join: function() { return Array.prototype.slice.call(arguments).join("/"); },
        resolve: function() { return Array.prototype.slice.call(arguments).join("/"); },
        basename: function(p) { return String(p).split("/").pop(); }
      };
    }
    return {};
  };

  // Asinxron taymer və intervalların nəzarəti
  var __realSetTimeout = window.setTimeout.bind(window);
  var __realClearTimeout = window.clearTimeout.bind(window);
  var __realSetInterval = window.setInterval.bind(window);
  var __realClearInterval = window.clearInterval.bind(window);
  var __activeTimers = new Set();
  var __activeIntervals = new Set();
  var __uncaughtError = null;

  window.setTimeout = function(fn, delay) {
    var args = Array.prototype.slice.call(arguments, 2);
    var id;
    var wrapped = function() {
      __activeTimers.delete(id);
      try {
        if (typeof fn === "function") fn.apply(null, args);
        else if (typeof fn === "string") (new Function(fn))();
      } catch(err) {
        __uncaughtError = (err && err.name && err.message) ? (err.name + ": " + err.message) : String(err);
      }
    };
    id = __realSetTimeout(wrapped, Math.max(0, Number(delay) || 0));
    __activeTimers.add(id);
    return id;
  };

  window.clearTimeout = function(id) {
    __activeTimers.delete(id);
    __realClearTimeout(id);
  };

  window.setInterval = function(fn, delay) {
    var args = Array.prototype.slice.call(arguments, 2);
    var id;
    var wrapped = function() {
      try {
        if (typeof fn === "function") fn.apply(null, args);
        else if (typeof fn === "string") (new Function(fn))();
      } catch(err) {
        __uncaughtError = (err && err.name && err.message) ? (err.name + ": " + err.message) : String(err);
      }
    };
    id = __realSetInterval(wrapped, Math.max(0, Number(delay) || 0));
    __activeIntervals.add(id);
    return id;
  };

  window.clearInterval = function(id) {
    __activeIntervals.delete(id);
    __realClearInterval(id);
  };

  // Asinxron tutulmamış xətaların qeydiyyatı
  window.addEventListener("unhandledrejection", function(event) {
    var reason = event.reason || event;
    __uncaughtError = (reason && reason.name && reason.message) ? (reason.name + ": " + reason.message) : String(reason);
    if (typeof event.preventDefault === "function") event.preventDefault();
  });

  window.onerror = function(msg, src, line, col, err) {
    __uncaughtError = (err && err.name && err.message) ? (err.name + ": " + err.message) : String(msg || err);
    return true;
  };

  // Əsas icra funksiyası
  (async function() {
    var syncError = null;
    try {
      var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      var fn = new AsyncFunction(
        "console", "setTimeout", "clearTimeout", "setInterval", "clearInterval",
        '"use strict";\\n' + __code
      );
      var returnVal = await fn(__mockConsole, window.setTimeout, window.clearTimeout, window.setInterval, window.clearInterval);
      if (__logs.length === 0 && returnVal !== undefined) {
        __logs.push(__fmt(returnVal));
      }
    } catch(err) {
      if (err && err.name && err.message) {
        syncError = err.name + ": " + err.message;
      } else {
        syncError = String(err);
      }
    }

    // Əgər aktiv gözləyən asinxron taymerlər varsa, vaxt limiti çərçivəsində gözlə
    if (!syncError && !__uncaughtError && __activeTimers.size > 0) {
      var deadline = Date.now() + Math.max(100, __timeoutMs - 300);
      while (__activeTimers.size > 0 && Date.now() < deadline && !__uncaughtError) {
        await new Promise(function(resolve) { __realSetTimeout(resolve, 10); });
      }
    }

    // Qalan intervalları və taymerləri təmizlə
    __activeIntervals.forEach(function(id) { __realClearInterval(id); });
    __activeTimers.forEach(function(id) { __realClearTimeout(id); });

    var finalError = syncError || __uncaughtError || null;
    __sendResult(finalError);
  })();

})();
<\/script>
</body>
</html>`;
    }

    /**
     * 3. Təhlükəsiz Sandboxed Iframe İcra Metodu
     * @param {string} rawCode - İstifadəçinin daxil etdiyi xam JavaScript kodu
     * @param {number} timeoutMs - Maksimum icra vaxt limiti (standart: 2500ms)
     * @returns {Promise<{output: string, error: string|null}>}
     */
    function runInIframe(rawCode, timeoutMs = 2500) {
        return new Promise((resolve) => {
            const cleanCode = sanitizeCodeForExecution(rawCode);
            const taskId = 'task_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
            const safeTimeout = Math.max(500, Number(timeoutMs) || 2500);

            // Əgər əvvəlki icra hələ davam edirsə, onu dərhal ləğv et
            if (currentSession) {
                try { currentSession.abort(); } catch(e) {}
                currentSession = null;
            }

            let settled = false;
            let watchdogTimer = null;
            let messageHandler = null;
            let iframe = null;

            // Bütün resursların tam təmizlənməsi
            const cleanup = () => {
                if (watchdogTimer) {
                    clearTimeout(watchdogTimer);
                    watchdogTimer = null;
                }
                if (messageHandler && typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
                    window.removeEventListener('message', messageHandler);
                    messageHandler = null;
                }
                if (iframe && iframe.parentNode) {
                    try { iframe.parentNode.removeChild(iframe); } catch(e) {}
                }
                iframe = null;
                if (currentSession && currentSession.id === taskId) {
                    currentSession = null;
                }
            };

            const safeResolve = (res) => {
                if (settled) return;
                settled = true;
                cleanup();
                resolve(res || { output: '', error: null });
            };

            // Həqiqi sonsuz dövrlər (məsələn: while(true)) və ya donmuş əməliyyatlar üçün 2.5s Watchdog taymeri
            watchdogTimer = setTimeout(() => {
                safeResolve({
                    output: '',
                    error: 'İcra vaxt limiti (2.5s) aşdı! Kodunuzda sonsuz dövr və ya asılı qalmış asinxron əməliyyat aşkar edildi.'
                });
            }, safeTimeout);

            // Ana pəncərədə nəticə mesajının qarşılanması
            messageHandler = function(event) {
                // Təhlükəsizlik qaydası: Opaque "null" origin bloklanmır;
                // event.source === iframe.contentWindow və unikal taskId ilə etibarlılıq təsdiqlənir
                if (iframe && iframe.contentWindow && event.source !== iframe.contentWindow) return;
                if (!event.data || typeof event.data !== 'object') return;
                if (event.data.type !== 'EXECUTE_JS_RESULT' && event.data.type !== 'EXEC_DONE') return;
                if (event.data.id !== taskId) return;

                safeResolve({
                    output: (typeof event.data.output === 'string') ? event.data.output : '',
                    error: event.data.error || null
                });
            };

            if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
                window.addEventListener('message', messageHandler);
            }

            // Sessiyanı qeydə al
            currentSession = {
                id: taskId,
                abort: () => {
                    safeResolve({
                        output: '',
                        error: 'İcra yeni əməliyyat başladığı üçün dayandırıldı.'
                    });
                }
            };

            try {
                if (typeof document === 'undefined' || !document.createElement) {
                    safeResolve({
                        output: '',
                        error: 'Brauzer DOM mühiti aşkar edilmədi.'
                    });
                    return;
                }

                iframe = document.createElement('iframe');
                iframe.id = 'code-runner-frame-' + taskId;
                // Yalnız sandbox="allow-scripts" icazəsi verilir (allow-same-origin QƏTİYYƏN YOXDUR!)
                iframe.setAttribute('sandbox', 'allow-scripts');
                iframe.setAttribute('title', 'JSÖyrən Sandboxed Code Runner');
                iframe.setAttribute('aria-hidden', 'true');
                iframe.style.position = 'fixed';
                iframe.style.top = '-9999px';
                iframe.style.left = '-9999px';
                iframe.style.width = '1px';
                iframe.style.height = '1px';
                iframe.style.opacity = '0';
                iframe.style.pointerEvents = 'none';
                iframe.style.border = 'none';

                const targetParent = document.body || document.documentElement;
                if (!targetParent) {
                    safeResolve({
                        output: '',
                        error: 'DOM gövdəsi (document.body) hələ hazır deyil.'
                    });
                    return;
                }

                targetParent.appendChild(iframe);
                // Kod birbaşa srcdoc daxilinə yerləşdirilir, beləliklə yüklənmə yarışı (race condition) 100% aradan qaldırılır
                iframe.srcdoc = buildRunnerHtml(cleanCode, taskId, safeTimeout);

            } catch (err) {
                safeResolve({
                    output: '',
                    error: 'Simulyator başladılarkən xəta: ' + (err.message || String(err))
                });
            }
        });
    }

    // Modulu Qlobal Mühitə Eksport Et
    const Simulator = {
        sanitizeCodeForExecution: sanitizeCodeForExecution,
        run: runInIframe,
        runInIframe: runInIframe,
        buildRunnerHtml: buildRunnerHtml
    };

    if (typeof global !== 'undefined') {
        global.sanitizeCodeForExecution = sanitizeCodeForExecution;
        global.Simulator = Simulator;
    }
    if (typeof window !== 'undefined') {
        window.sanitizeCodeForExecution = sanitizeCodeForExecution;
        window.Simulator = Simulator;
    }

})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
