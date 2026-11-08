/**
 * JSÖyrən - Qum Saatı (Hourglass Integrated Challenges) Verilənlər Bazası
 * Böyükmiqyaslı, inteqrasiya olunmuş zamanla yarış tapşırıqları
 * Müxtəlif kurikulum mərhələlərini (Dövrlər, Obyektlər, Asinxron, REST, Təhlükəsizlik) birləşdirir
 */

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        var data = factory();
        root.HOURGLASS_CHALLENGES = data;
        if (typeof window !== 'undefined') {
            window.HOURGLASS_CHALLENGES = data;
        }
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    var HOURGLASS_CHALLENGES = [
        {
            id: "hg-1",
            title: "E-Ticarət Səbət & Valyuta Konvertasiya Borusu",
            stages: "Mərhələ 1, 2 və 3 (Dövrlər + Obyektlər + String + Formatlama)",
            difficulty: "MÜRƏKKƏB",
            defaultMinutes: 10,
            baseXP: 200,
            scenario: "İstifadəçinin alış-veriş səbətindəki müxtəlif xarici valyutalı məhsulları dövr vasitəsilə AZN məzənnəsinə çevirin, VIP müştərilərə xüsusi endirimi tətbiq edin və yekun kassa qəbzini formatlanmış şəkildə konsola çıxarın.",
            instruction: "1. <code>sebet</code> massivindəki hər bir məhsulun qiymətini AZN valyutasına çevirin (USD üçün 1.70, EUR üçün 1.85, AZN üçün 1.00 dəyişməz qalır).<br>2. Hər məhsulu <code>- {ad}: {qiymət} AZN</code> formatında çap edin (qiyməti 2 onluq rəqəmlə formatlayın: <code>toFixed(2)</code>).<br>3. Əgər <code>vipStatus</code> parametri <code>true</code> olarsa, ümumi məbləğə 15% endirim tətbiq edin (əks halda 0 AZN).<br>4. Sonda <code>Endirim: {endirim} AZN</code> və <code>Yekun Ödəniş: {yekun} AZN</code> sətirlərini çap edin.",
            hints: [
                "Massiv üzərində forEach və ya for..of dövründən istifadə edərək məhsulların AZN qarşılığını hesablayın.",
                "Valyuta çevrilməsi: m.valyuta === 'USD' ? m.qiymet * 1.7 : m.valyuta === 'EUR' ? m.qiymet * 1.85 : m.qiymet",
                "Yekun ödəniş = Ümumi cəm - Endirim məbləği (2 onluq kəsr üçün toFixed(2) vacibdir)."
            ],
            starterCode: "function sebetHesabla(sebet, vipStatus) {\n  // 1. \"=== QƏBZ ===\" başlığını çap edin\n  // 2. Məhsulları AZN valyutasına çevirib konsola yazın və cəmi toplayın\n  // 3. VIP endirimini (15%) və yekun ödənişi hesablayıb çap edin\n}\n\nsebetHesabla([\n  { ad: \"Klaviatura\", qiymet: 100, valyuta: \"USD\" },\n  { ad: \"Maus\", qiymet: 40, valyuta: \"AZN\" }\n], true);",
            expectedOutput: "=== QƏBZ ===\n- Klaviatura: 170.00 AZN\n- Maus: 40.00 AZN\nEndirim: 31.50 AZN\nYekun Ödəniş: 178.50 AZN",
            solutionCode: "function sebetHesabla(sebet, vipStatus) {\n  console.log(\"=== QƏBZ ===\");\n  let cem = 0;\n  sebet.forEach(m => {\n    let azn = m.valyuta === \"USD\" ? m.qiymet * 1.7 : m.valyuta === \"EUR\" ? m.qiymet * 1.85 : m.qiymet;\n    console.log(`- ${m.ad}: ${azn.toFixed(2)} AZN`);\n    cem += azn;\n  });\n  let endirim = vipStatus ? cem * 0.15 : 0;\n  let yekun = cem - endirim;\n  console.log(`Endirim: ${endirim.toFixed(2)} AZN`);\n  console.log(`Yekun Ödəniş: ${yekun.toFixed(2)} AZN`);\n}\n\nsebetHesabla([\n  { ad: \"Klaviatura\", qiymet: 100, valyuta: \"USD\" },\n  { ad: \"Maus\", qiymet: 40, valyuta: \"AZN\" }\n], true);"
        },
        {
            id: "hg-2",
            title: "Asinxron Autentifikasiya və Təhlükəsizlik Filtrləri",
            stages: "Mərhələ 2, 4 və 5 (Async/Await + Error Handling + REST/CORS)",
            difficulty: "EKSPERT",
            defaultMinutes: 15,
            baseXP: 250,
            scenario: "Kriptoqrafik token yoxlaması, istifadəçi sessiyasının asinxron bərpası və icazəsiz müraciətlərdə Error fırladan tam arxitektura qurun.",
            instruction: "1. <code>authPipeline(req)</code> asinxron funksiyasını tamamlayın.<br>2. Əgər <code>req.headers</code> və ya <code>req.headers.authorization</code> yoxdursa, <code>\"Token yoxdur\"</code> xətası atın (<code>throw new Error(...)</code>).<br>3. <code>authorization</code> başlığından 'Bearer ' prefiksini ayırın. Token <code>\"gizli-admin-token\"</code> deyilsə, <code>\"403 Forbidden: Giriş qadağandır\"</code> xətası atın.<br>4. Token düzgündürsə, <code>{ id: 1, ad: \"Admin\", rol: \"admin\" }</code> obyektini qaytarın.<br>5. Nəticəni konsola <code>\"[SİSTEM]: Giriş təsdiqləndi: {ad} (Rol: {rol})\"</code> formatında çap edin.",
            hints: [
                "req.headers?.authorization yoxlamasını ilkin mərhələdə edin.",
                "Bearer tokeni ayırmaq üçün req.headers.authorization.split(' ')[1] metodundan istifadə edə bilərsiniz.",
                "authPipeline promise qaytarır, nəticəni .then() ilə oxuyub formatlı çap edin."
            ],
            starterCode: "async function authPipeline(req) {\n  // Kodunuzu buraya yazın\n}\n\nauthPipeline({ headers: { authorization: \"Bearer gizli-admin-token\" } })\n  .then(u => console.log(`[SİSTEM]: Giriş təsdiqləndi: ${u.ad} (Rol: ${u.rol})`))\n  .catch(err => console.error(`[XƏTA]: ${err.message}`));",
            expectedOutput: "[SİSTEM]: Giriş təsdiqləndi: Admin (Rol: admin)",
            solutionCode: "async function authPipeline(req) {\n  if (!req.headers || !req.headers.authorization) {\n    throw new Error(\"Token yoxdur\");\n  }\n  const token = req.headers.authorization.split(\" \")[1];\n  if (token !== \"gizli-admin-token\") {\n    throw new Error(\"403 Forbidden: Giriş qadağandır\");\n  }\n  return { id: 1, ad: \"Admin\", rol: \"admin\" };\n}\n\nauthPipeline({ headers: { authorization: \"Bearer gizli-admin-token\" } })\n  .then(u => console.log(`[SİSTEM]: Giriş təsdiqləndi: ${u.ad} (Rol: ${u.rol})`))\n  .catch(err => console.error(`[XƏTA]: ${err.message}`));"
        },
        {
            id: "hg-3",
            title: "Hadisə Əsaslı Keş və Məzənnə Limitləyici Mühərrik",
            stages: "Mərhələ 2, 3 və 4 (Klasslar + Map + Asinxron Keşləmə)",
            difficulty: "EKSPERT",
            defaultMinutes: 12,
            baseXP: 250,
            scenario: "Yüksək yüklü sistemlər üçün yaddaşdaxili asinxron keş (In-Memory Smart Cache) mexanizmi qurun. Əgər tələb olunan valyuta açarı keşdə mövcuddursa, şəbəkə sorğusu icra etmədən dərhal [HIT] statusu ilə qaytarın; əks halda [MISS] statusu ilə asinxron əldə edib yaddaşa yazın.",
            instruction: "1. <code>SmartCache</code> sinfində <code>store</code> sahəsi kimi <code>new Map()</code> saxlayın.<br>2. <code>async getOrFetch(acar, fetchFn)</code> metodunu yazın.<br>3. Əgər <code>this.store.has(acar)</code> doğrudursa, dəyəri götürüb <code>\"[HIT] {acar}: {dəyər}\"</code> formatında (2 onluq kəsr ilə: <code>toFixed(2)</code>) konsola çap edin və dəyəri qaytarın.<br>4. Əgər yoxdursa, <code>await fetchFn()</code> çağırın, nəticəni keşdə saxlayın (<code>this.store.set(acar, netice)</code>), <code>\"[MISS] {acar}: {dəyər}\"</code> çap edin və nəticəni qaytarın.",
            hints: [
                "Map metodları: this.store.has(key), this.store.get(key), this.store.set(key, val).",
                "fetchFn funksiyası asinxrondur, ona görə const netice = await fetchFn(); yazılmalıdır.",
                "Rəqəmləri 2 onluq dəqiqliklə formatlamaq üçün Number(val).toFixed(2) istifadə edin."
            ],
            starterCode: "class SmartCache {\n  constructor() {\n    this.store = new Map();\n  }\n\n  async getOrFetch(acar, fetchFn) {\n    // Keş məntiqini buraya yazın\n  }\n}\n\nasync function startDemo() {\n  const cache = new SmartCache();\n  const fetchKurs = async (valyuta) => valyuta === \"USD\" ? 1.70 : 1.85;\n\n  await cache.getOrFetch(\"USD\", () => fetchKurs(\"USD\"));\n  await cache.getOrFetch(\"EUR\", () => fetchKurs(\"EUR\"));\n  await cache.getOrFetch(\"USD\", () => fetchKurs(\"USD\"));\n}\n\nawait startDemo();",
            expectedOutput: "[MISS] USD: 1.70\n[MISS] EUR: 1.85\n[HIT] USD: 1.70",
            solutionCode: "class SmartCache {\n  constructor() {\n    this.store = new Map();\n  }\n\n  async getOrFetch(acar, fetchFn) {\n    if (this.store.has(acar)) {\n      const deyer = this.store.get(acar);\n      console.log(`[HIT] ${acar}: ${Number(deyer).toFixed(2)}`);\n      return deyer;\n    }\n    const netice = await fetchFn();\n    this.store.set(acar, netice);\n    console.log(`[MISS] ${acar}: ${Number(netice).toFixed(2)}`);\n    return netice;\n  }\n}\n\nasync function startDemo() {\n  const cache = new SmartCache();\n  const fetchKurs = async (valyuta) => valyuta === \"USD\" ? 1.70 : 1.85;\n\n  await cache.getOrFetch(\"USD\", () => fetchKurs(\"USD\"));\n  await cache.getOrFetch(\"EUR\", () => fetchKurs(\"EUR\"));\n  await cache.getOrFetch(\"USD\", () => fetchKurs(\"USD\"));\n}\n\nawait startDemo();"
        }
    ];

    return HOURGLASS_CHALLENGES;
}));
