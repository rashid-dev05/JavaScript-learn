// exam_bank_builder/sec_10_13.js
// Bölmə 10, 11, 12, 13 (Hər birində 15 sual -> cəmi 60 sual)
// Mərhələ 2: JavaScript Dərinləşmə və Müasir Xüsusiyyətlər

const SEC_10_QUESTIONS = [
  // Bölmə 10: Xətaların İdarə Edilməsi (try...catch, throw, finally, Error tipləri)
  {
    id: "exam-sec10-01",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Sadə try...catch Bloku ilə Xətanın Tutulması",
    serif: "Proqramda baş verə biləcək işləmə zamanı xətasını (runtime error) proqramı çökdürmədən tutmaq lazımdır. try blokunda elan edilməmiş dəyişənə müraciət edin. catch blokunda xətanın adını (err.name) 'Xəta növü: ReferenceError' formatında konsola çıxarın.",
    gozlenilenCixis: "Xəta növü: ReferenceError",
    starterCode: "function xetaniTut() {\n  // try...catch blokunu qurun\n  // Elan edilməmiş dəyişənə müraciət edin və catch-də err.name çıxarın\n}\n\nxetaniTut();",
    solutionCode: "function xetaniTut() {\n  try {\n    nonExistentVariable;\n  } catch (err) {\n    console.log(`Xəta növü: ${err.name}`);\n  }\n}\n\nxetaniTut();",
    ipuclari: [
      "İpucu 1: try blokunda icra zamanı xəta yarada biləcək kod yerləşdirilir.",
      "İpucu 2: catch(err) parametri tutulan Error obyektini saxlayır.",
      "İpucu 3: err.name xətanın növünü (məsələn, 'ReferenceError') qaytarır."
    ],
    teslimIzahi: "try...catch bloku JavaScript-də işləmə zamanı xətaları nəzarətə almaq üçün istifadə olunur. Elan edilməmiş dəyişənə müraciət ReferenceError xətası doğurur. catch bloku bu xətanı tutur və err.name vasitəsilə adını ekrana yazdırır."
  },
  {
    id: "exam-sec10-02",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "throw new Error ilə Xüsusi Xəta Atılması",
    serif: "Yaş yoxlaması aparan funksiya yazın. Əgər parametr kimi verilən yaş 0-dan kiçikdirsə, 'Yaş mənfi ola bilməz!' xəbərdarlığı ilə Error atın (throw new Error). try...catch daxilində -5 yaşı ilə yoxlayın və catch blokunda xəta mesajını konsola çıxarın.",
    gozlenilenCixis: "Xəta: Yaş mənfi ola bilməz!",
    starterCode: "function yasiYoxla(yas) {\n  // Şərt mənfi olduqda throw new Error istifadə edin\n}\n\nfunction testEt() {\n  // try...catch daxilində yasiYoxla(-5) çağırın\n}\n\ntestEt();",
    solutionCode: "function yasiYoxla(yas) {\n  if (yas < 0) {\n    throw new Error('Yaş mənfi ola bilməz!');\n  }\n  return yas;\n}\n\nfunction testEt() {\n  try {\n    yasiYoxla(-5);\n  } catch (err) {\n    console.log(`Xəta: ${err.message}`);\n  }\n}\n\ntestEt();",
    ipuclari: [
      "İpucu 1: Şərt ödəndikdə 'throw new Error(mesaj)' sintaksisi ilə icranı dayandırıb xəta atın.",
      "İpucu 2: catch blokuna ötürülən obyektin .message xassəsi atılan mətni saxlayır.",
      "İpucu 3: 'Xəta: ' prefiksi ilə err.message birləşdirilməlidir."
    ],
    teslimIzahi: "throw açar sözü proqramçının istədiyi məntiqi qayda pozuntusunda xüsusi istisna (exception) yaratmasına imkan verir. Error konstruktoru çağırıldıqda stack trace və mesaj formalaşır və ən yaxın catch blokuna ötürülür."
  },
  {
    id: "exam-sec10-03",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "finally Blokunun Mütləq İcrası",
    serif: "Verilən əməliyyatda xəta baş versə belə, təmizləmə əməliyyatının mütləq işə düşməsini təmin edin. try blokunda xəta atın, catch-də 'Xəta baş verdi' çıxarın, finally blokunda isə hər zaman 'Təmizləmə tamamlandı' konsola yazdırın.",
    gozlenilenCixis: "Xəta baş verdi\nTəmizləmə tamamlandı",
    starterCode: "function emeliyyat() {\n  // try, catch və finally bloklarını qurun\n}\n\nemeliyyat();",
    solutionCode: "function emeliyyat() {\n  try {\n    throw new Error('Gözlənilməz problem');\n  } catch (err) {\n    console.log('Xəta baş verdi');\n  } finally {\n    console.log('Təmizləmə tamamlandı');\n  }\n}\n\nemeliyyat();",
    ipuclari: [
      "İpucu 1: try blokundan sonra catch və ən sonda finally gəlir.",
      "İpucu 2: catch daxilində konsola 'Xəta baş verdi' yazın.",
      "İpucu 3: finally bloku xətanın olub-olmamasından asılı olmayaraq həmişə icra olunur."
    ],
    teslimIzahi: "finally bloku resursların azad edilməsi, fayl axınlarının və ya verilənlər bazası bağlantılarının bağlanması kimi kritik təmizləmə işləri üçün idealdır. try və ya catch blokunda nə baş verməsindən asılı olmayaraq finally həmişə icra edilir."
  },
  {
    id: "exam-sec10-04",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "JSON Parse Xətalarının Təhlükəsiz Tutulması",
    serif: "İstifadəçidən daxil olan JSON mətnini etibarlı şəkildə obyektə çevirən funksiya yazın. Əgər JSON sintaksisi pozulubsa (məsələn: \"{ ad: 'Əli' }\"), funksiya çökməməli, catch bloku ilə 'Sintaksis xətası: JSON formatı yalnışdır' xəbərdarlığını konsola çıxarmalıdır.",
    gozlenilenCixis: "Sintaksis xətası: JSON formatı yalnışdır",
    starterCode: "function tehlukesizJsonParse(jsonMətni) {\n  // JSON.parse cəhdini try...catch daxilində icra edin\n}\n\ntehlukesizJsonParse(\"{ ad: 'Əli' }\");",
    solutionCode: "function tehlukesizJsonParse(jsonMətni) {\n  try {\n    return JSON.parse(jsonMətni);\n  } catch (err) {\n    console.log('Sintaksis xətası: JSON formatı yalnışdır');\n  }\n}\n\ntehlukesizJsonParse(\"{ ad: 'Əli' }\");",
    ipuclari: [
      "İpucu 1: JSON standartında açarlar mütləq cüt dırnaq içində olmalıdır, tək dırnaq SyntaxError yaradır.",
      "İpucu 2: JSON.parse() çağırışını try bloku içərisinə salın.",
      "İpucu 3: catch blokunda tələb olunan mesajı konsola yazdırın."
    ],
    teslimIzahi: "JSON.parse funksiyası etibarsız sintaksislə qarşılaşdıqda dərhal SyntaxError atır. İstehsalat mühitində kənar API-lərdən və ya istifadəçidən gələn JSON-lar mütləq try...catch ilə əhatələnməlidir."
  },
  {
    id: "exam-sec10-05",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Xəta Tiplərinin Diferensiasiyası (instanceof)",
    serif: "Funksiyaya daxil olan parametr tipini və qiymət intervalını yoxlayın. Əgər parametr ədəd deyilsə TypeError atın ('Ədəd gözlənilirdi'). Əgər ədəd 1 ilə 100 arasında deyilsə RangeError atın ('Diapazon xətası: 1-100'). Gələn xətanı catch-də instanceof ilə yoxlayıb uyğun olaraq '[TypeError]: mesaj' və ya '[RangeError]: mesaj' formatında konsola çıxarın. Funksiyanı 'yüz' arqumenti ilə çağırın.",
    gozlenilenCixis: "[TypeError]: Ədəd gözlənilirdi",
    starterCode: "function balYoxla(bal) {\n  // Parametr tipini və intervalını yoxlayın, fərqli xətalar atın\n}\n\nfunction icraEt() {\n  // try...catch daxilində instanceof ilə yoxlayın\n}\n\nicraEt();",
    solutionCode: "function balYoxla(bal) {\n  if (typeof bal !== 'number') {\n    throw new TypeError('Ədəd gözlənilirdi');\n  }\n  if (bal < 1 || bal > 100) {\n    throw new RangeError('Diapazon xətası: 1-100');\n  }\n  return bal;\n}\n\nfunction icraEt() {\n  try {\n    balYoxla('yüz');\n  } catch (err) {\n    if (err instanceof TypeError) {\n      console.log(`[TypeError]: ${err.message}`);\n    } else if (err instanceof RangeError) {\n      console.log(`[RangeError]: ${err.message}`);\n    }\n  }\n}\n\nicraEt();",
    ipuclari: [
      "İpucu 1: typeof bal !== 'number' olduqda throw new TypeError(...) istifadə edin.",
      "İpucu 2: catch daxilində 'err instanceof TypeError' ilə xətanın növünü yoxlayın.",
      "İpucu 3: Çıxış formatı: `[${err.constructor.name}]: ${err.message}`."
    ],
    teslimIzahi: "JavaScript-də quraşdırılmış xəta növləri (TypeError, RangeError, SyntaxError və s.) Error sinifindən törəyir. instanceof operatoru ilə catch blokunda spesifik xəta növünü təyin edib fərdi reaksiya vermək mümkündür."
  },
  {
    id: "exam-sec10-06",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Xüsusi Xəta Sinifi (Custom Error Class)",
    serif: "Error sinifindən törəyən 'ValidasiyaXetasi' adlı fərdi sinif yaradın. Bu sinfin constructor-u mesaj qəbul etməli və this.name = 'ValidasiyaXetasi' təyin etməlidir. İstifadəçi adı 3 hərfdən qısa olduqda bu xətanı atın ('İstifadəçi adı çox qısadır'). 'Əli' adı üçün xəta atın və konsola 'ValidasiyaXetasi: İstifadəçi adı çox qısadır' çap edin.",
    gozlenilenCixis: "ValidasiyaXetasi: İstifadəçi adı çox qısadır",
    starterCode: "class ValidasiyaXetasi extends Error {\n  // Konstruktoru qurun və this.name təyin edin\n}\n\nfunction istifadeciYarat(ad) {\n  // Adın uzunluğu < 4 olduqda xəta atın\n}\n\n// try...catch ilə 'Əli' parametrini yoxlayın",
    solutionCode: "class ValidasiyaXetasi extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'ValidasiyaXetasi';\n  }\n}\n\nfunction istifadeciYarat(ad) {\n  if (ad.length < 4) {\n    throw new ValidasiyaXetasi('İstifadəçi adı çox qısadır');\n  }\n  return { ad };\n}\n\ntry {\n  istifadeciYarat('Əli');\n} catch (err) {\n  console.log(`${err.name}: ${err.message}`);\n}",
    ipuclari: [
      "İpucu 1: 'class ValidasiyaXetasi extends Error' konstruktorunda super(message) çağırın.",
      "İpucu 2: super-dən sonra this.name = 'ValidasiyaXetasi' yazın.",
      "İpucu 3: catch daxilində err.name və err.message-i şablon sətirlə birləşdirin."
    ],
    teslimIzahi: "Fərdi xəta sinifləri (Custom Errors) proqramın domeninə uyğun xətaları (məsələn, Validasiya, Şəbəkə, Təhlükəsizlik) sistem xətalarından ayırmaq üçün Error sinifini genişləndirir."
  },
  {
    id: "exam-sec10-07",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Təhlükəsiz Riyazi Bölmə və Sıfıra Bölmə Nəzarəti",
    serif: "İki ədədi bölən bolme(a, b) funksiyası hazırlayın. Əgər b === 0 olarsa, 'Sıfıra bölmək qeyri-mümkündür' mesajı ilə xəta atılsın. Əks halda bölmənin tam nəticəsini qaytarsın. bolme(10, 0) çağırışını try...catch ilə idarə edib konsola '[Xəta]: Sıfıra bölmək qeyri-mümkündür' yazdırın.",
    gozlenilenCixis: "[Xəta]: Sıfıra bölmək qeyri-mümkündür",
    starterCode: "function bolme(a, b) {\n  // b sıfır olduqda xəta atın\n}\n\n// try...catch ilə bolme(10, 0) yoxlayın",
    solutionCode: "function bolme(a, b) {\n  if (b === 0) {\n    throw new Error('Sıfıra bölmək qeyri-mümkündür');\n  }\n  return a / b;\n}\n\ntry {\n  bolme(10, 0);\n} catch (err) {\n  console.log(`[Xəta]: ${err.message}`);\n}",
    ipuclari: [
      "İpucu 1: JavaScript-də 10 / 0 Infinity qaytarır, buna görə sıfıra bölməni əl ilə yoxlayıb xəta atmaq lazımdır.",
      "İpucu 2: if (b === 0) throw new Error(...) yoxlaması qoyun.",
      "İpucu 3: catch daxilində `[Xəta]: ${err.message}` çap edin."
    ],
    teslimIzahi: "JavaScript digər bəzi dillərdən fərqli olaraq sıfıra böldükdə xəta atmır, Infinity qaytarır. Biznes məntiqində bu halı xəta kimi qəbul etmək üçün proqramçı açıq şəkildə throw new Error istifadə etməlidir."
  },
  {
    id: "exam-sec10-08",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Xətanın Yenidən Atılması (Rethrowing Pattern)",
    serif: "Daxili və xarici try...catch qurun. Daxili blokda əgər xəta TypeError deyilsə, onu saxlamayıb yuxarı səviyyəyə təkrar atın (rethrow). Daxili blokda SyntaxError atın ('Sintaksis xətası'). Xarici blok bu xətanı tutaraq konsola 'Xarici qoruyucu tutdu: Sintaksis xətası' çıxarsın.",
    gozlenilenCixis: "Xarici qoruyucu tutdu: Sintaksis xətası",
    starterCode: "function rethrowNumunesi() {\n  // Xarici try...catch\n  // Daxili try...catch daxilində xətanı yoxlayıb throw err ilə yenidən atın\n}\n\nrethrowNumunesi();",
    solutionCode: "function rethrowNumunesi() {\n  try {\n    try {\n      throw new SyntaxError('Sintaksis xətası');\n    } catch (err) {\n      if (err instanceof TypeError) {\n        console.log('Daxili TypeError idarə olundu');\n      } else {\n        throw err; // Naməlum və ya digər xətanı yuxarı atırıq\n      }\n    }\n  } catch (err) {\n    console.log(`Xarici qoruyucu tutdu: ${err.message}`);\n  }\n}\n\nrethrowNumunesi();",
    ipuclari: [
      "İpucu 1: catch daxilində yalnız bildiyimiz xətaları həll edib, qalanlarını `throw err` ilə buraxmaq 'rethrowing' adlanır.",
      "İpucu 2: Daxili catch SyntaxError-u həll etmir və `throw err` icra edir.",
      "İpucu 3: Xarici catch bu xətanı tutur və tələb olunan mətni çap edir."
    ],
    teslimIzahi: "Rethrowing nümunəsi təhlükəsiz proqramlaşdırmanın əsas qaydalarındandır: bir funksiya yalnız cavabdeh olduğu xətaları tutmalı, gözləmədiyi və ya sistem səviyyəli digər xətaları daha yuxarı qatlara ötürməlidir."
  },
  {
    id: "exam-sec10-09",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "finally ilə Əməliyyat Statusunun Təminatı",
    serif: "Asinxron və ya ağır əməliyyat başladarkən `status = 'aktiv'` təyin edilir. Əməliyyat zamanı xəta baş versə belə, `finally` blokunda status mütləq `'tamamlandı'` olmalıdır. Proses zamanı baş verən addımları massivə yığın: ['Başladı', 'Xəta: Fayl tapılmadı', 'Status: tamamlandı']. Sonda bu addımları sətirbəsətir konsola çıxarın.",
    gozlenilenCixis: "Başladı\nXəta: Fayl tapılmadı\nStatus: tamamlandı",
    starterCode: "function prosesiIcraEt() {\n  const loqlar = [];\n  let status = 'aktiv';\n  // try, catch, finally ardıcıllığını qurun və loqlar massivini doldurun\n}\n\nprosesiIcraEt();",
    solutionCode: "function prosesiIcraEt() {\n  const loqlar = [];\n  let status = 'aktiv';\n  try {\n    loqlar.push('Başladı');\n    throw new Error('Fayl tapılmadı');\n  } catch (err) {\n    loqlar.push(`Xəta: ${err.message}`);\n  } finally {\n    status = 'tamamlandı';\n    loqlar.push(`Status: ${status}`);\n  }\n  loqlar.forEach(l => console.log(l));\n}\n\nprosesiIcraEt();",
    ipuclari: [
      "İpucu 1: try daxilində 'Başladı' yazısını loqlara əlavə edin və xəta atın.",
      "İpucu 2: catch daxilində xəta mesajını loqlara daxil edin.",
      "İpucu 3: finally daxilində status-u yeniləyin və 'Status: tamamlandı' yazısını qeyd edin."
    ],
    teslimIzahi: "finally bloku dəyişənlərin vəziyyətini (state) ilkin və ya təhlükəsiz vəziyyətə gətirmək üçün idealdır. Xəta olsa da, olmasa da statusun yenilənməsi proqramın asılı vəziyyətdə (deadlock) qalmasının qarşısını alır."
  },
  {
    id: "exam-sec10-10",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Error.cause ilə Xəta Zəncirinin (Chained Errors) Yaradılması",
    serif: "Müasir JavaScript (ES2022) xətaların səbəbini `cause` parametri ilə bağlamağa imkan verir. Aşağı səviyyəli şəbəkə xətası ('DNS cavab vermir') baş verdikdə, onu yüksək səviyyəli 'Məlumat bazası sorğusu uğursuz oldu' xətasına bükün (new Error(msg, { cause: err })). Ən yuxarı səviyyədə həm əsas xətanı, həm də onun alt səbəbini (err.cause.message) konsola çıxarın: 'Əsas: Məlumat bazası sorğusu uğursuz oldu -> Səbəb: DNS cavab vermir'.",
    gozlenilenCixis: "Əsas: Məlumat bazası sorğusu uğursuz oldu -> Səbəb: DNS cavab vermir",
    starterCode: "function asagiSeviyyeSorqu() {\n  throw new Error('DNS cavab vermir');\n}\n\nfunction xidmet() {\n  // asagiSeviyyeSorqu() çağırın və cause ilə yeni xəta atın\n}\n\n// Ən yuxarıda tutub konsola formatlanmış şəkildə çıxarın",
    solutionCode: "function asagiSeviyyeSorqu() {\n  throw new Error('DNS cavab vermir');\n}\n\nfunction xidmet() {\n  try {\n    asagiSeviyyeSorqu();\n  } catch (err) {\n    throw new Error('Məlumat bazası sorğusu uğursuz oldu', { cause: err });\n  }\n}\n\ntry {\n  xidmet();\n} catch (err) {\n  console.log(`Əsas: ${err.message} -> Səbəb: ${err.cause.message}`);\n}",
    ipuclari: [
      "İpucu 1: new Error(mesaj, { cause: ilkinXeta }) sintaksisindən istifadə edin.",
      "İpucu 2: err.cause ilkin xəta obyektinə istinad edir.",
      "İpucu 3: err.cause.message alt səviyyəli səbəbin mətnini qaytarır."
    ],
    teslimIzahi: "Error.cause ES2022 ilə gələn xüsusiyyətdir. O, alt qatlarda baş verən texniki xətaları itirmədən, yüksək səviyyəli istifadəçi yönümlü xətalar daxilində zəncirvari şəkildə saxlamağa və diaqnostikanı asanlaşdırmağa imkan verir."
  },
  {
    id: "exam-sec10-11",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Asinxron Funksiyalarda try...catch və async/await Tələsi",
    serif: "Asinxron Promise rədd edildikdə (reject) onu tutmaq üçün `await` vacibdir. `melumatGetir(id)` funksiyası id < 0 olduqda Promise.reject(new Error('Yanlış ID')) qaytarır. `async function istifadeciYukle()` daxilində `await melumatGetir(-1)` çağırışını `try...catch` ilə əhatələyin və xətanı '[Asinxron Xəta]: Yanlış ID' kimi konsola yazdırın.",
    gozlenilenCixis: "[Asinxron Xəta]: Yanlış ID",
    starterCode: "function melumatGetir(id) {\n  if (id < 0) return Promise.reject(new Error('Yanlış ID'));\n  return Promise.resolve({ id, ad: 'Murad' });\n}\n\nasync function istifadeciYukle() {\n  // try...catch və await ilə çağırışı idarə edin\n}\n\nistifadeciYukle();",
    solutionCode: "function melumatGetir(id) {\n  if (id < 0) return Promise.reject(new Error('Yanlış ID'));\n  return Promise.resolve({ id, ad: 'Murad' });\n}\n\nasync function istifadeciYukle() {\n  try {\n    await melumatGetir(-1);\n  } catch (err) {\n    console.log(`[Asinxron Xəta]: ${err.message}`);\n  }\n}\n\nistifadeciYukle();",
    ipuclari: [
      "İpucu 1: async funksiya daxilində await yazılmadıqda try...catch Promise xətasını tuta bilmir.",
      "İpucu 2: await açar sözü Promise rədd edildikdə həmin xətanı birbaşa throw edir.",
      "İpucu 3: catch daxilində err.message-i çap edin."
    ],
    teslimIzahi: "Asinxron kodda ən çox edilən səhvlərdən biri await açar sözünü unutmaqdır. Əgər await yazılmazsa, Promise arxa planda rədd edilir (UnhandledPromiseRejection) və sinxron try...catch bloku onu tuta bilmir. await ilə xəta sinxron xəta kimi catch-ə ötürülür."
  },
  {
    id: "exam-sec10-12",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "HTTP Xəta İyerarxiyası (NotFoundError və UnauthorizedError)",
    serif: "Veb tətbiqlər üçün baza `HttpError extends Error` sinifi yaradın (status kodu saxlasın). Ondan törəyən `NotFoundError` (status: 404) və `UnauthorizedError` (status: 401) siniflərini qurun. `routeHandler(yol)` funksiyası '/gizli' yolu üçün `UnauthorizedError('Giriş qadağandır')`, digər naməlum yollar üçün `NotFoundError('Səhifə tapılmadı')` atsın. '/namelum' yolu ilə yoxlayıb konsola 'Status 404: Səhifə tapılmadı' çıxarın.",
    gozlenilenCixis: "Status 404: Səhifə tapılmadı",
    starterCode: "class HttpError extends Error {\n  // status və message qəbul edin\n}\n\nclass NotFoundError extends HttpError {\n  // status 404 olsun\n}\n\nclass UnauthorizedError extends HttpError {\n  // status 401 olsun\n}\n\n// routeHandler funksiyasını yazın və try...catch ilə çağırın",
    solutionCode: "class HttpError extends Error {\n  constructor(message, status) {\n    super(message);\n    this.name = this.constructor.name;\n    this.status = status;\n  }\n}\n\nclass NotFoundError extends HttpError {\n  constructor(message = 'Tapılmadı') {\n    super(message, 404);\n  }\n}\n\nclass UnauthorizedError extends HttpError {\n  constructor(message = 'İcazəsiz giriş') {\n    super(message, 401);\n  }\n}\n\nfunction routeHandler(yol) {\n  if (yol === '/gizli') {\n    throw new UnauthorizedError('Giriş qadağandır');\n  }\n  throw new NotFoundError('Səhifə tapılmadı');\n}\n\ntry {\n  routeHandler('/namelum');\n} catch (err) {\n  if (err instanceof HttpError) {\n    console.log(`Status ${err.status}: ${err.message}`);\n  }\n}",
    ipuclari: [
      "İpucu 1: HttpError konstruktorunda super(message) və this.status = status yazın.",
      "İpucu 2: NotFoundError super(message, 404) çağırır.",
      "İpucu 3: catch blokunda err.status və err.message-i çap edin."
    ],
    teslimIzahi: "İstehsalat backend sistemlərində HTTP status kodlarını xəta siniflərinə bağlamaq (Error Hierarchy) mərkəzləşdirilmiş middleware-lərin (məsələn, Express error handler) avtomatik düzgün HTTP statusu qaytarmasını təmin edir."
  },
  {
    id: "exam-sec10-13",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Xətalara Dözümlü Toplu Məlumat Emalı (Fault-Tolerant Processing)",
    serif: "İstifadəçi qeydiyyat siyahısını emal edən funksiya yazın: `[{id: 1, email: 'a@test.com'}, {id: 2, email: 'invalid'}, {id: 3, email: 'b@test.com'}]`. Əgər email-də '@' işarəsi yoxdursa, xəta atılsın. Bütün massiv dövrə ilə emal olunarkən bir xətaya görə bütün proses dayanmamalı, uğurlu qeydlər 'ugurlular' massivinə, xətalılar 'xetalar' massivinə yığılmalıdır. Sonda 'Uğurlu: 2, Xətalı: 1' konsola çıxarılmalıdır.",
    gozlenilenCixis: "Uğurlu: 2, Xətalı: 1",
    starterCode: "function topluEmalEt(istifadeciler) {\n  const ugurlular = [];\n  const xetalar = [];\n  // Hər istifadəçi üçün dövrə daxilində try...catch qurun\n}\n\nconst testData = [\n  { id: 1, email: 'a@test.com' },\n  { id: 2, email: 'invalid' },\n  { id: 3, email: 'b@test.com' }\n];\n\ntopluEmalEt(testData);",
    solutionCode: "function topluEmalEt(istifadeciler) {\n  const ugurlular = [];\n  const xetalar = [];\n  \n  for (const u of istifadeciler) {\n    try {\n      if (!u.email.includes('@')) {\n        throw new Error(`Yanlış email formatı: ${u.email}`);\n      }\n      ugurlular.push(u);\n    } catch (err) {\n      xetalar.push({ id: u.id, xeta: err.message });\n    }\n  }\n  \n  console.log(`Uğurlu: ${ugurlular.length}, Xətalı: ${xetalar.length}`);\n}\n\nconst testData = [\n  { id: 1, email: 'a@test.com' },\n  { id: 2, email: 'invalid' },\n  { id: 3, email: 'b@test.com' }\n];\n\ntopluEmalEt(testData);",
    ipuclari: [
      "İpucu 1: Dövrənin içərisində hər element üçün ayrıca try...catch qoyun.",
      "İpucu 2: Xəta baş verdikdə dövrə qırılmır (break olmur), catch xətanı qeyd edib növbəti elementə keçir.",
      "İpucu 3: Sonda massivlərin .length göstəricilərini konsola çıxarın."
    ],
    teslimIzahi: "Kütləvi məlumat emalında tək bir qüsurlu sətir bütün tranzaksiyanı məhv etməməlidir. Hər iterasiyanı daxili try...catch ilə izolyasiya etmək dayanıqlı (fault-tolerant) sistemlərin təməl prinsipidir."
  },
  {
    id: "exam-sec10-14",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Təmiz Xəta Formatlayıcısı və Loq Qeydiyyatı",
    serif: "Proqramda baş verən xətaları audit üçün obyekt şəklində formatlayan `xetaniFormatla(err)` funksiyası hazırlayın. Funksiya xətadan timestamp (tarix), name, message və kritiklik dərəcəsini (`sev: 'HIGH'`) çıxarmalıdır. Əgər xəta Error obyekti deyilsə, onu ümumi xəta kimi idarə etməlidir. `new RangeError('Yaddaş limiti')` ilə funksiyanı çağırıb formatlanmış JSON-u konsola çıxarın (yalnız `name`, `message` və `sev` açarlarını göstərin: '{\"name\":\"RangeError\",\"message\":\"Yaddaş limiti\",\"sev\":\"HIGH\"}').",
    gozlenilenCixis: '{"name":"RangeError","message":"Yaddaş limiti","sev":"HIGH"}',
    starterCode: "function xetaniFormatla(err) {\n  // Error obyektini strukturlaşdırılmış obyektə çevirib JSON string kimi qaytarın\n}\n\n// new RangeError('Yaddaş limiti') ilə test edin",
    solutionCode: "function xetaniFormatla(err) {\n  const loq = {\n    name: err instanceof Error ? err.name : 'UnknownError',\n    message: err instanceof Error ? err.message : String(err),\n    sev: 'HIGH'\n  };\n  return JSON.stringify(loq);\n}\n\nconsole.log(xetaniFormatla(new RangeError('Yaddaş limiti')));",
    ipuclari: [
      "İpucu 1: err instanceof Error yoxlaması apararaq etibarlılığı təmin edin.",
      "İpucu 2: Obyektə name, message və sev açarlarını verin.",
      "İpucu 3: JSON.stringify() ilə obyekt sətirə çevrilir."
    ],
    teslimIzahi: "Monitorinq alətləri (məsələn, Sentry, Datadog) xətaları xam string kimi deyil, strukturlaşdırılmış JSON formatında qəbul edir. Xətanın növü və ciddiliyini bu şəkildə qruplaşdırmaq istehsalatda analizi sürətləndirir."
  },
  {
    id: "exam-sec10-15",
    bolmeId: 10,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Eksponensial Təkrar Cəhd Mexanizmi (Resilient Retry Engine)",
    serif: "Şəbəkə və ya xidmət kəsintilərinə qarşı dözümlü `tekrarCeht(emeliyyatFn, maxCeht)` funksiyası qurun. Funksiya verilən əməliyyatı icra etməyə çalışmalıdır. Uğursuz olarsa, hər cəhddən sonra sayğacı artırmalı və yenidən cəhd etməlidir. Əgər maxCeht sayına çatarsa, 'Limit aşıldı: ' və sonuncu xəta mesajını atmalıdır. Simulyasiya: İlk 2 çağırışda 'Bağlantı kəsildi' xətası atan, 3-cü çağırışda 'Məlumat uğurla alındı' qaytaran funksiyanı maxCeht=3 ilə çağırın və nəticəni konsola çıxarın: 'Uğur (Cəhd 3): Məlumat uğurla alındı'.",
    gozlenilenCixis: "Uğur (Cəhd 3): Məlumat uğurla alındı",
    starterCode: "async function tekrarCeht(emeliyyatFn, maxCeht = 3) {\n  // Dövrə ilə əməliyyatı sınayın, uğursuz olduqda təkrar cəhd edin\n}\n\n// Simulyasiya funksiyasını hazırlayın və icra edin",
    solutionCode: "async function tekrarCeht(emeliyyatFn, maxCeht = 3) {\n  let sonXeta;\n  for (let cehd = 1; cehd <= maxCeht; cehd++) {\n    try {\n      const netice = await emeliyyatFn(cehd);\n      return `Uğur (Cəhd ${cehd}): ${netice}`;\n    } catch (err) {\n      sonXeta = err;\n    }\n  }\n  throw new Error(`Limit aşıldı: ${sonXeta.message}`);\n}\n\nlet saygac = 0;\nasync function qeyriStabilXidmet(cehd) {\n  saygac++;\n  if (saygac < 3) {\n    throw new Error('Bağlantı kəsildi');\n  }\n  return 'Məlumat uğurla alındı';\n}\n\ntekrarCeht(qeyriStabilXidmet, 3).then(res => console.log(res));",
    ipuclari: [
      "İpucu 1: for dövrəsi ilə 1-dən maxCeht-ə qədər iterasiya edin.",
      "İpucu 2: try blokunda emeliyyatFn çağırın, uğurlu olduqda dərhal qaytarın.",
      "İpucu 3: catch daxilində sonuncu xətanı yadda saxlayın, dövrə bitərsə throw new Error edin."
    ],
    teslimIzahi: "Müasir paylanmış mikroxidmət arxitekturalarında qısamüddətli şəbəkə titrəmələri adi haldır. Retry (təkrar cəhd) nümunəsi tranzaksiyanın dərhal çökməsinin qarşısını alaraq sistemin ümumi etibarlılığını 99.9%-ə çatdırır."
  }
];

const SEC_11_QUESTIONS = [
  // Bölmə 11: Massivlərin İterasiya Metodları (map, filter, reduce, find, some, every, sort)
  {
    id: "exam-sec11-01",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "map() ilə Qiymətlərə ƏDV Hesablanması",
    serif: "Verilmiş qiymətlər massivindəki ([100, 200, 300]) hər bir qiymətə 18% ƏDV əlavə edərək yeni qiymətlər massivi formalaşdırın (qiymət * 1.18). Nəticə massivini vergüllə ayrılmış şəkildə konsola çıxarın: '118, 236, 354'.",
    gozlenilenCixis: "118, 236, 354",
    starterCode: "function edvHesabla(qiymetler) {\n  // map metodundan istifadə edin və vergüllə ayrılmış string kimi çıxarın\n}\n\nedvHesabla([100, 200, 300]);",
    solutionCode: "function edvHesabla(qiymetler) {\n  const netice = qiymetler.map(q => q * 1.18);\n  console.log(netice.join(', '));\n}\n\nedvHesabla([100, 200, 300]);",
    ipuclari: [
      "İpucu 1: map() massivin hər bir elementi üzərində verilmiş funksiyanı icra edərək eyni uzunluqda yeni massiv qaytarır.",
      "İpucu 2: Arrow funksiya sintaksisindən istifadə edin: `q => q * 1.18`.",
      "İpucu 3: netice.join(', ') ilə elementləri birləşdirib konsola çıxarın."
    ],
    teslimIzahi: "Array.prototype.map() metodu ilkin massivi dəyişdirmədən (immutability) hər elementin transformasiya olunmuş surətini ehtiva edən yeni massiv qaytarır. Funksional proqramlaşdırmanın təməl daşlarındandır."
  },
  {
    id: "exam-sec11-02",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "filter() ilə Aktiv İstifadəçilərin Seçilməsi",
    serif: "İstifadəçi obyektlərindən ibarət massiv verilmişdir: `[{ad: 'Aygün', aktiv: true}, {ad: 'Rauf', aktiv: false}, {ad: 'Kamran', aktiv: true}]`. filter() metodundan istifadə edərək yalnız `aktiv: true` olan istifadəçilərin adlarını tapın və vergüllə ayrılmış şəkildə konsola çıxarın: 'Aygün, Kamran'.",
    gozlenilenCixis: "Aygün, Kamran",
    starterCode: "function aktivleriTap(istifadeciler) {\n  // filter və map metodlarını tətbiq edin\n}\n\nconst users = [\n  { ad: 'Aygün', aktiv: true },\n  { ad: 'Rauf', aktiv: false },\n  { ad: 'Kamran', aktiv: true }\n];\n\naktivleriTap(users);",
    solutionCode: "function aktivleriTap(istifadeciler) {\n  const aktivAdlar = istifadeciler\n    .filter(u => u.aktiv)\n    .map(u => u.ad);\n  console.log(aktivAdlar.join(', '));\n}\n\nconst users = [\n  { ad: 'Aygün', aktiv: true },\n  { ad: 'Rauf', aktiv: false },\n  { ad: 'Kamran', aktiv: true }\n];\n\naktivleriTap(users);",
    ipuclari: [
      "İpucu 1: filter(u => u.aktiv) yalnız şərti true olan obyektləri saxlayır.",
      "İpucu 2: filter-dən sonra .map(u => u.ad) zənciri ilə adları ayırın.",
      "İpucu 3: .join(', ') ilə adları birləşdirib çap edin."
    ],
    teslimIzahi: "filter() metodu predikat funksiyası true qaytaran elementləri seçir. map() ilə birlikdə istifadə edildikdə məlumatların süzgəcdən keçirilməsi və proyeksiya edilməsi çox asanlıqla reallaşır."
  },
  {
    id: "exam-sec11-03",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "find() və findIndex() Metodları",
    serif: "Məhsullar massivində (`[{id: 101, ad: 'Klaviatura'}, {id: 102, ad: 'Siçan'}, {id: 103, ad: 'Monitor'}]`) `id: 102` olan məhsulun adını və massivdəki indeksini tapın. Konsola 'Məhsul: Siçan, İndeks: 1' çap edin.",
    gozlenilenCixis: "Məhsul: Siçan, İndeks: 1",
    starterCode: "function mehsulAxtar(mehsullar, axtarilanId) {\n  // find və findIndex metodlarını tətbiq edin\n}\n\nconst mehsullar = [\n  { id: 101, ad: 'Klaviatura' },\n  { id: 102, ad: 'Siçan' },\n  { id: 103, ad: 'Monitor' }\n];\n\nmehsulAxtar(mehsullar, 102);",
    solutionCode: "function mehsulAxtar(mehsullar, axtarilanId) {\n  const tapilan = mehsullar.find(m => m.id === axtarilanId);\n  const indeks = mehsullar.findIndex(m => m.id === axtarilanId);\n  console.log(`Məhsul: ${tapilan.ad}, İndeks: ${indeks}`);\n}\n\nconst mehsullar = [\n  { id: 101, ad: 'Klaviatura' },\n  { id: 102, ad: 'Siçan' },\n  { id: 103, ad: 'Monitor' }\n];\n\nmehsulAxtar(mehsullar, 102);",
    ipuclari: [
      "İpucu 1: find() şərtə uyğun gələn ilk elementi qaytarır.",
      "İpucu 2: findIndex() həmin elementin 0-dan başlayan indeksini qaytarır (tapılmadıqda -1).",
      "İpucu 3: Şablon sətir ilə tələb olunan formatda çap edin."
    ],
    teslimIzahi: "find() və findIndex() metodları şərt ödənən kimi axtarışı dayandırır (short-circuiting), bu da filter()[0] ilə müqayisədə performans baxımından qat-qat sərfəlidir."
  },
  {
    id: "exam-sec11-04",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "reduce() ilə Səbətin Ümumi Məbləğinin Hesablanması",
    serif: "Səbətdəki məhsullar massivi verilmişdir: `[{ad: 'Kitab', qiymet: 15, say: 2}, {ad: 'Dəftər', qiymet: 4, say: 5}, {ad: 'Qələm', qiymet: 2, say: 10}]`. `reduce()` metodundan istifadə edərək səbətin yekun məbləğini hesablayın (hər məhsul üçün qiymət * say) və konsola 'Cəmi məbləğ: 70 AZN' çıxarın.",
    gozlenilenCixis: "Cəmi məbləğ: 70 AZN",
    starterCode: "function sebetCemi(mehsullar) {\n  // reduce ilə yekun məbləği hesablayın\n}\n\nconst sebet = [\n  { ad: 'Kitab', qiymet: 15, say: 2 },\n  { ad: 'Dəftər', qiymet: 4, say: 5 },\n  { ad: 'Qələm', qiymet: 2, say: 10 }\n];\n\nsebetCemi(sebet);",
    solutionCode: "function sebetCemi(mehsullar) {\n  const cem = mehsullar.reduce((acc, item) => acc + (item.qiymet * item.say), 0);\n  console.log(`Cəmi məbləğ: ${cem} AZN`);\n}\n\nconst sebet = [\n  { ad: 'Kitab', qiymet: 15, say: 2 },\n  { ad: 'Dəftər', qiymet: 4, say: 5 },\n  { ad: 'Qələm', qiymet: 2, say: 10 }\n];\n\nsebetCemi(sebet);",
    ipuclari: [
      "İpucu 1: reduce((akkumulyator, element) => ..., 0) ikinci parametri ilkin dəyərdir (0).",
      "İpucu 2: Hər addımda akkumulyatora (item.qiymet * item.say) əlavə edin.",
      "İpucu 3: Nəticəni `Cəmi məbləğ: ${cem} AZN` şəklində çap edin."
    ],
    teslimIzahi: "reduce() massivin bütün elementlərini tək bir nəticəyə (ədəd, sətir, massiv və ya obyekt) yığmaq üçün ən güclü alətdir. İlkin dəyər (0) verilməsi gözlənilməz tip xətalarının qarşısını alır."
  },
  {
    id: "exam-sec11-05",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "some() və every() ilə İmtahan Nəticələrinin Təhlili",
    serif: "Tələbələrin imtahan balları verilmişdir: `[65, 82, 48, 90, 74]`. Keçid balı 50-dir. `every()` ilə bütün tələbələrin keçib-keçmədiyini, `some()` ilə ən azı bir nəfərin 90 və ya daha yüksək bal toplayıb-toplamadığını yoxlayın. Konsola ardıcıl olaraq 'Hamı keçdi: false' və 'Əlaçı var: true' yazdırın.",
    gozlenilenCixis: "Hamı keçdi: false\nƏlaçı var: true",
    starterCode: "function ballariAnalizEt(ballar) {\n  // every və some metodlarından istifadə edin\n}\n\nballariAnalizEt([65, 82, 48, 90, 74]);",
    solutionCode: "function ballariAnalizEt(ballar) {\n  const hamiKecdi = ballar.every(b => b >= 50);\n  const elaciVar = ballar.some(b => b >= 90);\n  console.log(`Hamı keçdi: ${hamiKecdi}`);\n  console.log(`Əlaçı var: ${elaciVar}`);\n}\n\nballariAnalizEt([65, 82, 48, 90, 74]);",
    ipuclari: [
      "İpucu 1: every() yalnız bütün elementlər şərti ödədikdə true qaytarır.",
      "İpucu 2: some() ən azı bir element şərti ödədikdə dərhal true qaytarır.",
      "İpucu 3: Hər iki nəticəni konsola uyğun formatda çıxarın."
    ],
    teslimIzahi: "every() universal kvantor (∀), some() isə mövcudluq kvantorudur (∃). Onlar şərt pozulduqda və ya təmin olunduqda dərhal dayandığı üçün dövrələrdən daha optimaldır."
  },
  {
    id: "exam-sec11-06",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "sort() ilə Ədədlərin Düzgün Sıralanması (ASCII Tələsi)",
    serif: "Verilmiş ədədlər massivini (`[25, 8, 100, 4, 62]`) artan sıra ilə nizamlamaq lazımdır. Standart `sort()` ədədləri sətir kimi müqayisə edərək səhv nəticə verir. Düzgün müqayisə funksiyası `(a, b) => a - b` təqdim edərək massivi nizamlayın və vergüllə ayrılmış şəkildə konsola çıxarın: '4, 8, 25, 62, 100'.",
    gozlenilenCixis: "4, 8, 25, 62, 100",
    starterCode: "function ededleriSirala(massiv) {\n  // Düzgün müqayisə funksiyası ilə sort edin və join(', ') ilə çıxarın\n}\n\nededleriSirala([25, 8, 100, 4, 62]);",
    solutionCode: "function ededleriSirala(massiv) {\n  massiv.sort((a, b) => a - b);\n  console.log(massiv.join(', '));\n}\n\nededleriSirala([25, 8, 100, 4, 62]);",
    ipuclari: [
      "İpucu 1: Arqumentsiz .sort() elementləri string-ə çevirib lüğət sırası ilə yığır (100 25-dən qabağa düşür).",
      "İpucu 2: Ədədlər üçün (a, b) => a - b artan, b - a azalan sıranı təmin edir.",
      "İpucu 3: massiv.join(', ') ilə elementləri birləşdirin."
    ],
    teslimIzahi: "JavaScript-də .sort() arqumentsiz çağırıldıqda UTF-16 kodlarına görə sıralayır. Ədədləri dəyərinə görə nizamlamaq üçün mütləq müqayisə funksiyası (comparator function) ötürülməlidir."
  },
  {
    id: "exam-sec11-07",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "flatMap() ilə İç-İçə Teqlərin Düzləşdirilməsi",
    serif: "Məqalələr massivi verilmişdir: `[{id: 1, teqler: ['js', 'veb']}, {id: 2, teqler: ['react', 'js']}, {id: 3, teqler: ['node']}]`. `flatMap()` metodundan istifadə edərək bütün teqləri tək bir düz massivdə birləşdirin və vergüllə ayrılmış formatda konsola çıxarın: 'js, veb, react, js, node'.",
    gozlenilenCixis: "js, veb, react, js, node",
    starterCode: "function teqleriTopla(meqaleler) {\n  // flatMap metodundan istifadə edin və join(', ') ilə çıxarın\n}\n\nconst meqaleler = [\n  { id: 1, teqler: ['js', 'veb'] },\n  { id: 2, teqler: ['react', 'js'] },\n  { id: 3, teqler: ['node'] }\n];\n\nteqleriTopla(meqaleler);",
    solutionCode: "function teqleriTopla(meqaleler) {\n  const butunTeqler = meqaleler.flatMap(m => m.teqler);\n  console.log(butunTeqler.join(', '));\n}\n\nconst meqaleler = [\n  { id: 1, teqler: ['js', 'veb'] },\n  { id: 2, teqler: ['react', 'js'] },\n  { id: 3, teqler: ['node'] }\n];\n\nteqleriTopla(meqaleler);",
    ipuclari: [
      "İpucu 1: flatMap() əvvəlcə map funksiyasını tətbiq edir, sonra nəticəni 1 dərinlik dərəcəsində flat() edir.",
      "İpucu 2: m => m.teqler daxili massivləri qaytarır.",
      "İpucu 3: Sonda butunTeqler.join(', ') ilə çap edin."
    ],
    teslimIzahi: "flatMap() metodu .map().flat(1) əməliyyatını tək bir keçiddə yerinə yetirir. Bu həm sintaktik olaraq daha yığcamdır, həm də aralıq massiv yaratmadığı üçün yaddaşa qənaət edir."
  },
  {
    id: "exam-sec11-08",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Zəncirvari Metodlar (Method Chaining) ilə E-Ticarət Hesabatı",
    serif: "Məhsullar massivində (`[{ad: 'A', kat: 'elektronika', qiymet: 500}, {ad: 'B', kat: 'geyim', qiymet: 80}, {ad: 'C', kat: 'elektronika', qiymet: 300}, {ad: 'D', kat: 'elektronika', qiymet: 1200}]`) yalnız 'elektronika' kateqoriyalı və qiyməti 1000-dən aşağı olan məhsullara 10% endirim tətbiq edib ümumi yekun məbləği hesablayın. filter -> map -> reduce zəncirindən istifadə edin və konsola 'Yekun elektronika məbləği: 720 AZN' çıxarın.",
    gozlenilenCixis: "Yekun elektronika məbləği: 720 AZN",
    starterCode: "function elektronikaHesabat(mehsullar) {\n  // filter, map və reduce zəncirini qurun\n}\n\nconst mallar = [\n  { ad: 'A', kat: 'elektronika', qiymet: 500 },\n  { ad: 'B', kat: 'geyim', qiymet: 80 },\n  { ad: 'C', kat: 'elektronika', qiymet: 300 },\n  { ad: 'D', kat: 'elektronika', qiymet: 1200 }\n];\n\nelektronikaHesabat(mallar);",
    solutionCode: "function elektronikaHesabat(mehsullar) {\n  const netice = mehsullar\n    .filter(m => m.kat === 'elektronika' && m.qiymet < 1000)\n    .map(m => m.qiymet * 0.9)\n    .reduce((cem, q) => cem + q, 0);\n  console.log(`Yekun elektronika məbləği: ${netice} AZN`);\n}\n\nconst mallar = [\n  { ad: 'A', kat: 'elektronika', qiymet: 500 },\n  { ad: 'B', kat: 'geyim', qiymet: 80 },\n  { ad: 'C', kat: 'elektronika', qiymet: 300 },\n  { ad: 'D', kat: 'elektronika', qiymet: 1200 }\n];\n\nelektronikaHesabat(mallar);",
    ipuclari: [
      "İpucu 1: filter-də m.kat === 'elektronika' && m.qiymet < 1000 yoxlayın.",
      "İpucu 2: map ilə hər qiyməti 0.9-a vurun (10% endirim).",
      "İpucu 3: reduce ilə cəmləyib şablon sətirlə konsola çıxarın."
    ],
    teslimIzahi: "Funksional proqramlaşdırmanın ən böyük gücü metodların bir-birinə ötürülməsidir (Chaining). Hər mərhələ tək bir məqsədə xidmət edir və kodun oxunabilirliyi maksimum səviyyəyə çatır."
  },
  {
    id: "exam-sec11-09",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "reduce() ilə Məlumatların Qruplaşdırılması (groupBy Analoqu)",
    serif: "İşçilər massivini departamentlərinə görə qruplaşdırın: `[{ad: 'Nigar', dep: 'IT'}, {ad: 'Tural', dep: 'HR'}, {ad: 'Leyla', dep: 'IT'}]`. reduce() metodundan istifadə edərək departament adlarını açar, işçilərin adlarını isə dəyər kimi massivdə saxlayan obyekt qurun. Nəticəni JSON string kimi konsola çıxarın: '{\"IT\":[\"Nigar\",\"Leyla\"],\"HR\":[\"Tural\"]}'.",
    gozlenilenCixis: '{"IT":["Nigar","Leyla"],"HR":["Tural"]}',
    starterCode: "function departamenteGoreQrupla(isciler) {\n  // reduce ilə qruplaşdırılmış obyekt yaradın və JSON.stringify ilə çıxarın\n}\n\nconst isciler = [\n  { ad: 'Nigar', dep: 'IT' },\n  { ad: 'Tural', dep: 'HR' },\n  { ad: 'Leyla', dep: 'IT' }\n];\n\ndepartamenteGoreQrupla(isciler);",
    solutionCode: "function departamenteGoreQrupla(isciler) {\n  const qrup = isciler.reduce((acc, isci) => {\n    if (!acc[isci.dep]) {\n      acc[isci.dep] = [];\n    }\n    acc[isci.dep].push(isci.ad);\n    return acc;\n  }, {});\n  console.log(JSON.stringify(qrup));\n}\n\nconst isciler = [\n  { ad: 'Nigar', dep: 'IT' },\n  { ad: 'Tural', dep: 'HR' },\n  { ad: 'Leyla', dep: 'IT' }\n];\n\ndepartamenteGoreQrupla(isciler);",
    ipuclari: [
      "İpucu 1: reduce-in ilkin dəyəri boş obyekt `{}` olmalıdır.",
      "İpucu 2: acc[isci.dep] yoxdursa, onu boş massiv `[]` kimi inisializasiya edin.",
      "İpucu 3: JSON.stringify(qrup) ilə obyekti sətir şəklində çap edin."
    ],
    teslimIzahi: "reduce() yalnız ədədləri toplamaq üçün deyil, mürəkkəb verilənlər strukturlarını (məsələn, massivdən qruplaşdırılmış lüğətə) transformasiya etmək üçün standart JavaScript həllidir."
  },
  {
    id: "exam-sec11-10",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Massivdə Elementlərin Tezlik Xəritəsi (Frequency Map)",
    serif: "Meyvələr massivində (`['alma', 'armud', 'alma', 'banan', 'alma', 'armud']`) hər meyvənin neçə dəfə təkrarlandığını hesablayan funksiya yazın. `reduce()` istifadə edərək nəticə obyektini formalaşdırın və JSON formatında konsola çıxarın: '{\"alma\":3,\"armud\":2,\"banan\":1}'.",
    gozlenilenCixis: '{"alma":3,"armud":2,"banan":1}',
    starterCode: "function tezlikHesabla(massiv) {\n  // reduce ilə tezlik obyektini qurun\n}\n\ntezlikHesabla(['alma', 'armud', 'alma', 'banan', 'alma', 'armud']);",
    solutionCode: "function tezlikHesabla(massiv) {\n  const tezlik = massiv.reduce((acc, item) => {\n    acc[item] = (acc[item] || 0) + 1;\n    return acc;\n  }, {});\n  console.log(JSON.stringify(tezlik));\n}\n\ntezlikHesabla(['alma', 'armud', 'alma', 'banan', 'alma', 'armud']);",
    ipuclari: [
      "İpucu 1: `(acc[item] || 0) + 1` qısa sintaksisindən istifadə edin.",
      "İpucu 2: İlkin dəyər kimi `{}` ötürün.",
      "İpucu 3: JSON.stringify(tezlik) ilə konsola çıxarın."
    ],
    teslimIzahi: "Tezlik xəritəsi (Frequency Map / Histogram) alqoritmik məsələlərdə ən çox istifadə olunan texnikadır. O(n) mürəkkəbliklə bütün təkrarlanma sayını tək bir dövrədə müəyyən edir."
  },
  {
    id: "exam-sec11-11",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Çoxsəviyyəli Obyekt Sıralaması (Multi-Criteria Sorting)",
    serif: "Tələbələr massivini (`[{ad: 'Bəhruz', bal: 85}, {ad: 'Aysel', bal: 90}, {ad: 'Cavid', bal: 85}, {ad: 'Dilarə', bal: 70}]`) sıralayın. Qayda: İlk növbədə bala görə azalan sıra (böyükdən kiçiyə). Əgər ballar bərabərdirsə, tələbənin adına görə əlifba sırası (`localeCompare`). Sıralanmış adları vergüllə birləşdirərək konsola çıxarın: 'Aysel, Bəhruz, Cavid, Dilarə'.",
    gozlenilenCixis: "Aysel, Bəhruz, Cavid, Dilarə",
    starterCode: "function coxseviyyeliSirala(telebeler) {\n  // sort daxilində əvvəlcə balı, bərabərdirsə adı yoxlayın\n}\n\nconst telebeler = [\n  { ad: 'Bəhruz', bal: 85 },\n  { ad: 'Aysel', bal: 90 },\n  { ad: 'Cavid', bal: 85 },\n  { ad: 'Dilarə', bal: 70 }\n];\n\ncoxseviyyeliSirala(telebeler);",
    solutionCode: "function coxseviyyeliSirala(telebeler) {\n  telebeler.sort((a, b) => {\n    if (b.bal !== a.bal) {\n      return b.bal - a.bal;\n    }\n    return a.ad.localeCompare(b.ad);\n  });\n  console.log(telebeler.map(t => t.ad).join(', '));\n}\n\nconst telebeler = [\n  { ad: 'Bəhruz', bal: 85 },\n  { ad: 'Aysel', bal: 90 },\n  { ad: 'Cavid', bal: 85 },\n  { ad: 'Dilarə', bal: 70 }\n];\n\ncoxseviyyeliSirala(telebeler);",
    ipuclari: [
      "İpucu 1: `b.bal - a.bal` fərqi 0 olmadıqda dərhal qaytarılır.",
      "İpucu 2: Fərq 0 olduqda (ballar bərabərdirsə) `a.ad.localeCompare(b.ad)` müqayisə edilir.",
      "İpucu 3: Sıralanmış massivdən .map(t => t.ad).join(', ') ilə adları çıxarın."
    ],
    teslimIzahi: "Çoxmeyarlı sıralama (Multi-criteria sorting) verilənlər bazasındakı ORDER BY bal DESC, ad ASC əmrinin JavaScript analoqudur. localeCompare() yerli əlifba simvollarını (məsələn, 'Ə', 'Ö', 'Ş') düzgün çəkiləndirir."
  },
  {
    id: "exam-sec11-12",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Fərdi myMap Metodunun Yazılması (Custom Polyfill)",
    serif: "Massivlərin daxili `.map` metodunun iş prinsipini anlamaq üçün `Array.prototype.ozMap` adlı fərdi metod yaradın. Bu metod callback funksiyasını (element, index, array) qəbul etməli və nəticələrdən ibarət yeni massiv qaytarmalıdır. `[5, 10, 15].ozMap((x, i) => x * i)` kodunu icra edərək nəticəni vergüllə konsola çıxarın: '0, 10, 30'.",
    gozlenilenCixis: "0, 10, 30",
    starterCode: "Array.prototype.ozMap = function(callback) {\n  // this açar sözündən istifadə edərək yeni massiv doldurun\n};\n\nconst test = [5, 10, 15].ozMap((x, i) => x * i);\nconsole.log(test.join(', '));",
    solutionCode: "Array.prototype.ozMap = function(callback) {\n  const netice = [];\n  for (let i = 0; i < this.length; i++) {\n    netice.push(callback(this[i], i, this));\n  }\n  return netice;\n};\n\nconst test = [5, 10, 15].ozMap((x, i) => x * i);\nconsole.log(test.join(', '));",
    ipuclari: [
      "İpucu 1: Array.prototype metodunda `this` cari massivi göstərir.",
      "İpucu 2: for dövrəsi ilə hər element üçün callback(this[i], i, this) çağırın.",
      "İpucu 3: Yeni massivi test.join(', ') ilə konsola çıxarın."
    ],
    teslimIzahi: "Polifil (Polyfill) yazmaq JavaScript mühərrikinin daxili abstraksiyasını dərindən qavramağın ən yaxşı yoludur. Array.prototype genişləndirildikdə adi funksiya (arrow deyil) yazılmalıdır ki, `this` massivə bağlansın."
  },
  {
    id: "exam-sec11-13",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "reduce ilə Funksional Kompozisiya (pipe Fonksiyonu)",
    serif: "Bir neçə funksiyanı soldan sağa ardıcıl icra edən `pipe(...fns)` funksiyası yazın. `reduce` metodundan istifadə edərək ilkin qiyməti funksiyalar zəncirindən keçirin. Verilmiş funksiyalar: `vur2 = x => x * 2`, `topla10 = x => x + 10`, `bol5 = x => x / 5`. `pipe(vur2, topla10, bol5)(5)` əməliyyatını icra edərək nəticəni konsola çıxarın: 'Nəticə: 4'.",
    gozlenilenCixis: "Nəticə: 4",
    starterCode: "function pipe(...fns) {\n  // reduce istifadə edərək arqumenti zəncirvari ötürən funksiya qaytarın\n}\n\nconst vur2 = x => x * 2;\nconst topla10 = x => x + 10;\nconst bol5 = x => x / 5;\n\n// pipe-i çağırın və konsola çıxarın",
    solutionCode: "function pipe(...fns) {\n  return function(ilkinDeyer) {\n    return fns.reduce((deyer, fn) => fn(deyer), ilkinDeyer);\n  };\n}\n\nconst vur2 = x => x * 2;\nconst topla10 = x => x + 10;\nconst bol5 = x => x / 5;\n\nconst netice = pipe(vur2, topla10, bol5)(5);\nconsole.log(`Nəticə: ${netice}`);",
    ipuclari: [
      "İpucu 1: pipe funksiyası yeni bir funksiya qaytarmalıdır.",
      "İpucu 2: Qaytarılan daxili funksiya `fns.reduce((acc, fn) => fn(acc), ilkinDeyer)` icra edir.",
      "İpucu 3: 5 * 2 = 10 -> 10 + 10 = 20 -> 20 / 5 = 4."
    ],
    teslimIzahi: "Funksional kompozisiya (Function Composition / Pipe) mürəkkəb əməliyyatları kiçik, təkrar istifadə edilə bilən saf funksiyalara bölməyə və onları Unix boru kəməri (|) kimi birləşdirməyə imkan verir."
  },
  {
    id: "exam-sec11-14",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Dərin İç-İçə Strukturların Düzləşdirilməsi (Custom Recursive Flatten)",
    serif: "İstənilən dərinlikdə iç-içə olan massivi (`[1, [2, [3, [4]], 5]]`) tək bir düz massivə çevirən `duzlesdir(massiv)` funksiyası yazın. `reduce` və rekursiyadan istifadə edin. Sonda nəticəni vergüllə ayrılmış şəkildə konsola çıxarın: '1, 2, 3, 4, 5'.",
    gozlenilenCixis: "1, 2, 3, 4, 5",
    starterCode: "function duzlesdir(massiv) {\n  // reduce və rekursiya ilə Array.isArray yoxlayın və join(', ') ilə çıxarın\n}\n\nconsole.log(duzlesdir([1, [2, [3, [4]], 5]]).join(', '));",
    solutionCode: "function duzlesdir(massiv) {\n  return massiv.reduce((acc, item) => {\n    if (Array.isArray(item)) {\n      return acc.concat(duzlesdir(item));\n    }\n    return acc.concat(item);\n  }, []);\n}\n\nconsole.log(duzlesdir([1, [2, [3, [4]], 5]]).join(', '));",
    ipuclari: [
      "İpucu 1: Array.isArray(item) true olduqda duzlesdir(item) rekursiv çağırılır.",
      "İpucu 2: acc.concat(...) həm tək elementi, həm də rekursiv alt massivi birləşdirir.",
      "İpucu 3: Nəticəni .join(', ') ilə birləşdirin."
    ],
    teslimIzahi: "Array.prototype.flat(Infinity) funksiyasının daxili mexanizmi məhz bu cür rekursiv reduce və ya dövrə prinsipinə əsaslanır. Ağacvari (tree) və ya qeyri-müəyyən dərinlikli verilənlərin oxunmasında vacibdir."
  },
  {
    id: "exam-sec11-15",
    bolmeId: 11,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Yaddaş Səmərəli Böyük Məlumat Çanklanması və Deduplikasiyası",
    serif: "Müştəri loqları massivində təkrarlanan tranzaksiyalar mövcuddur: hər obyekt `{ id: number, versiya: number, mebleg: number }` saxlayır. Eyni `id`-yə malik elementlərdən yalnız ən böyük `versiya`-ya malik olanı saxlanmalı (deduplication) və nəticə `mebleg`-ə görə azalan sıra ilə sıralanmalıdır. Sonda nəticə massivini ölçüsü 2 olan hissələrə (chunks) bölün. Giriş: `[{id:1, versiya:1, mebleg:100}, {id:2, versiya:1, mebleg:300}, {id:1, versiya:2, mebleg:150}, {id:3, versiya:1, mebleg:200}]`. Yekun çankları JSON formatında konsola çıxarın.",
    gozlenilenCixis: '[[{"id":2,"versiya":1,"mebleg":300},{"id":3,"versiya":1,"mebleg":200}],[{"id":1,"versiya":2,"mebleg":150}]]',
    starterCode: "function emalVeChankla(loqlar, chunkOlcusu = 2) {\n  // 1. reduce ilə ən son versiyaları saxlayın\n  // 2. mebleg üzrə azalan sıralayın\n  // 3. chunklara bölün və JSON çıxarın\n}\n\n// Test məlumatını ötürün",
    solutionCode: "function emalVeChankla(loqlar, chunkOlcusu = 2) {\n  const unikalXerite = loqlar.reduce((acc, item) => {\n    if (!acc[item.id] || acc[item.id].versiya < item.versiya) {\n      acc[item.id] = item;\n    }\n    return acc;\n  }, {});\n\n  const siralanmis = Object.values(unikalXerite).sort((a, b) => b.mebleg - a.mebleg);\n\n  const chunklar = [];\n  for (let i = 0; i < siralanmis.length; i += chunkOlcusu) {\n    chunklar.push(siralanmis.slice(i, i + chunkOlcusu));\n  }\n\n  console.log(JSON.stringify(chunklar));\n}\n\nconst testLoqlar = [\n  { id: 1, versiya: 1, mebleg: 100 },\n  { id: 2, versiya: 1, mebleg: 300 },\n  { id: 1, versiya: 2, mebleg: 150 },\n  { id: 3, versiya: 1, mebleg: 200 }\n];\n\nemalVeChankla(testLoqlar, 2);",
    ipuclari: [
      "İpucu 1: reduce ilə ID-ləri xəritələndirərkən daha böyük versiyanı yoxlayın.",
      "İpucu 2: Object.values() ilə obyektləri massivə çevirib sort((a, b) => b.mebleg - a.mebleg) tətbiq edin.",
      "İpucu 3: slice(i, i + chunkOlcusu) ilə 2 elementlik hissələrə ayırın və JSON.stringify ilə çıxarın."
    ],
    teslimIzahi: "Real istehsalatda verilənlər bazasından və ya analitika axınından gələn dublikatları təmizləmək və onları API səhifələməsi (batching / chunking) üçün paketləmək mühəndislik arxitekturasının vacib bacarığıdır."
  }
];

const SEC_12_QUESTIONS = [
  // Bölmə 12: ES6 OOP & Modullar (class, constructor, extends, super, static, #private)
  {
    id: "exam-sec12-01",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Sadə Sinif və Konstruktor Yaradılması",
    serif: "'Avtomobil' adlı sinif yaradın. Konstruktor 'marka' və 'il' qəbul etsin. Sinifdə 'melumat()' metodu olsun və 'Marka: Toyota, İl: 2022' formatında string qaytarsın. Nümunə yaradıb metodu çağırın və konsola çıxarın.",
    gozlenilenCixis: "Marka: Toyota, İl: 2022",
    starterCode: "class Avtomobil {\n  // Konstruktor və melumat metodunu yazın\n}\n\n// Nümunə yaradın və konsola çıxarın",
    solutionCode: "class Avtomobil {\n  constructor(marka, il) {\n    this.marka = marka;\n    this.il = il;\n  }\n\n  melumat() {\n    return `Marka: ${this.marka}, İl: ${this.il}`;\n  }\n}\n\nconst masin = new Avtomobil('Toyota', 2022);\nconsole.log(masin.melumat());",
    ipuclari: [
      "İpucu 1: constructor(marka, il) daxilində this.marka və this.il təyin edin.",
      "İpucu 2: melumat() metodunda şablon sətir qaytarın.",
      "İpucu 3: new Avtomobil(...) ilə nümunə yaradın."
    ],
    teslimIzahi: "ES6 class sintaksisi JavaScript-in prototip mexanizmi üzərində qurulmuş 'syntactic sugar'-dır. constructor metodu new açar sözü ilə çağırıldıqda avtomatik işə düşür."
  },
  {
    id: "exam-sec12-02",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Siniflərdə Varislik (extends və super)",
    serif: "'Heyvan' baza sinifi yaradın (constructor 'ad' qəbul edir, 'sesCixar()' metodu 'Naməlum səs' qaytarır). Ondan törəyən 'It' sinifi qurun (extends), konstruktorda super(ad) çağırın və 'sesCixar()' metodunu yenidən təyin edərək (override) 'Hau-hau' qaytarın. 'Toplan' adlı It obyekti yaradın və 'Toplan: Hau-hau' formatında konsola çıxarın.",
    gozlenilenCixis: "Toplan: Hau-hau",
    starterCode: "class Heyvan {\n  // constructor və sesCixar\n}\n\nclass It extends Heyvan {\n  // extends, super və override sesCixar\n}\n\n// Obyekt yaradın və konsola çıxarın",
    solutionCode: "class Heyvan {\n  constructor(ad) {\n    this.ad = ad;\n  }\n\n  sesCixar() {\n    return 'Naməlum səs';\n  }\n}\n\nclass It extends Heyvan {\n  constructor(ad) {\n    super(ad);\n  }\n\n  sesCixar() {\n    return 'Hau-hau';\n  }\n}\n\nconst it = new It('Toplan');\nconsole.log(`${it.ad}: ${it.sesCixar()}`);",
    ipuclari: [
      "İpucu 1: extends açar sözü ilə varislik əlaqəsi qurulur.",
      "İpucu 2: Törəmə sinfin konstruktorunda this-dən istifadə etməzdən əvvəl super() çağırılmalıdır.",
      "İpucu 3: Alt sinifdə metod adını eyni saxlamaqla baza metodu override edilir."
    ],
    teslimIzahi: "super() çağırışı valideyn sinfin konstruktorunu işə salır və prototype zəncirini bağlayır. Bu olmadan JavaScript alt sinif daxilində this obyektini yarada bilməz."
  },
  {
    id: "exam-sec12-03",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Getter və Setter ilə Məlumat Kapsulyasiyası",
    serif: "'Temperatur' sinifi qurun. Daxili dərəcəni selsi olaraq saxlasın. 'get selsi' və 'get farengeyt' (selsi * 1.8 + 32) xüsusiyyətlərini qurun. 25 dərəcə üçün Farengeyt dəyərini hesablayıb konsola '25°C = 77°F' formatında çıxarın.",
    gozlenilenCixis: "25°C = 77°F",
    starterCode: "class Temperatur {\n  constructor(selsi) {\n    this._selsi = selsi;\n  }\n  // get selsi və get farengeyt yazın\n}\n\n// 25 dərəcə ilə test edin",
    solutionCode: "class Temperatur {\n  constructor(selsi) {\n    this._selsi = selsi;\n  }\n\n  get selsi() {\n    return this._selsi;\n  }\n\n  get farengeyt() {\n    return this._selsi * 1.8 + 32;\n  }\n}\n\nconst temp = new Temperatur(25);\nconsole.log(`${temp.selsi}°C = ${temp.farengeyt}°F`);",
    ipuclari: [
      "İpucu 1: get açar sözü funksiyanı adi xassə kimi (mötərizəsiz) oxumağa imkan verir.",
      "İpucu 2: farengeyt üçün düstur: selsi * 1.8 + 32.",
      "İpucu 3: temp.selsi və temp.farengeyt kimi müraciət edin."
    ],
    teslimIzahi: "Getter və Setter-lər hesablanan və ya validasiya tələb edən xüsusiyyətləri xaricə adi sahə (field) kimi göstərməyə imkan verən kapsulyasiya mexanizmidir."
  },
  {
    id: "exam-sec12-04",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Statik Metodlar və Xassələr (static)",
    serif: "'RiyaziyyatKomekcisi' sinifi qurun. Bu sinifdən heç bir nüsxə yaradılmadan çağırıla bilən statik `kvadrat(n)` və statik `PI = 3.14` xassələri olsun. `RiyaziyyatKomekcisi.kvadrat(6)` və `RiyaziyyatKomekcisi.PI` istifadə edərək konsola 'Kvadrat: 36, PI: 3.14' çıxarın.",
    gozlenilenCixis: "Kvadrat: 36, PI: 3.14",
    starterCode: "class RiyaziyyatKomekcisi {\n  // static PI və static kvadrat yazın\n}\n\n// Sinif üzərindən birbaşa çağırın",
    solutionCode: "class RiyaziyyatKomekcisi {\n  static PI = 3.14;\n\n  static kvadrat(n) {\n    return n * n;\n  }\n}\n\nconsole.log(`Kvadrat: ${RiyaziyyatKomekcisi.kvadrat(6)}, PI: ${RiyaziyyatKomekcisi.PI}`);",
    ipuclari: [
      "İpucu 1: static açar sözü xassə və metodun nümunəyə deyil, birbaşa sinfin özünə aid olduğunu bildirir.",
      "İpucu 2: new istifadə etmədən birbaşa `SinifAdi.metod()` çağırılır.",
      "İpucu 3: Şablon sətirlə konsola çıxarın."
    ],
    teslimIzahi: "Statik metodlar köməkçi (utility) funksiyalar və sabitlər üçün nəzərdə tutulub. Məsələn, JavaScript-dəki Math.max() və ya Array.isArray() daxili statik metodlardır."
  },
  {
    id: "exam-sec12-05",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Həqiqi Şəxsi Sahələr (#private fields)",
    serif: "'BankHesabi' sinifi qurun. Daxili `#balans` xüsusiyyəti yalnız sinif daxilində əlçatan olsun (private). Konstruktor ilkin balansı təyin etsin. 'medaxil(mebleg)' metodu balansı artırsın, 'balansiGoster()' isə cari balansı qaytarsın. 100 AZN ilə hesab açın, 50 AZN mədaxil edin və konsola 'Balans: 150 AZN' çıxarın.",
    gozlenilenCixis: "Balans: 150 AZN",
    starterCode: "class BankHesabi {\n  // #balans sahəsini təyin edin\n  // medaxil və balansiGoster metodlarını qurun\n}\n\n// 100 AZN ilə başlayıb 50 əlavə edin",
    solutionCode: "class BankHesabi {\n  #balans;\n\n  constructor(ilkinBalans) {\n    this.#balans = ilkinBalans;\n  }\n\n  medaxil(mebleg) {\n    if (mebleg > 0) {\n      this.#balans += mebleg;\n    }\n  }\n\n  balansiGoster() {\n    return this.#balans;\n  }\n}\n\nconst hesab = new BankHesabi(100);\nhesab.medaxil(50);\nconsole.log(`Balans: ${hesab.balansiGoster()} AZN`);",
    ipuclari: [
      "İpucu 1: Sahənin əvvəlinə '#' qoyduqda o, həqiqi şəxsi (hard private) sahə olur.",
      "İpucu 2: Sinif xaricindən hesab.#balans müraciəti sintaksis xətası verir.",
      "İpucu 3: Metod vasitəsilə təhlükəsiz oxuyub konsola çıxarın."
    ],
    teslimIzahi: "Əvvəllər konvensiya kimi `_balans` istifadə olunurdusa, müasir JavaScript `#` prefiksi ilə dil səviyyəsində möhkəm gizlilik (true encapsulation) təmin edir. Xaricdən heç bir şəkildə toxunmaq mümkün deyil."
  },
  {
    id: "exam-sec12-06",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Polimorfizm və Fiqurların Sahəsi",
    serif: "'Fiqur' əsas sinifindən törəyən 'Kvadrat' (tərəf: 5) və 'Daire' (radius: 3, PI=3 götürün) sinifləri qurun. Hər iki sinif 'sahe()' metodunu özünə uyğun reallaşdırsın (Kvadrat: tərəf * tərəf; Dairə: PI * r * r). Hər iki fiquru massivə yığıb dövrə ilə sahələrini konsola 'Kvadrat: 25' və 'Dairə: 27' formatında çıxarın.",
    gozlenilenCixis: "Kvadrat: 25\nDairə: 27",
    starterCode: "class Fiqur {\n  sahe() { return 0; }\n}\n\n// Kvadrat və Daire siniflərini yazın\n// Massivdə dövr edib konsola çıxarın",
    solutionCode: "class Fiqur {\n  sahe() {\n    return 0;\n  }\n}\n\nclass Kvadrat extends Fiqur {\n  constructor(teref) {\n    super();\n    this.teref = teref;\n  }\n  sahe() {\n    return this.teref * this.teref;\n  }\n}\n\nclass Daire extends Fiqur {\n  constructor(radius) {\n    super();\n    this.radius = radius;\n  }\n  sahe() {\n    return 3 * this.radius * this.radius;\n  }\n}\n\nconst fiqurlar = [\n  { ad: 'Kvadrat', obyekt: new Kvadrat(5) },\n  { ad: 'Dairə', obyekt: new Daire(3) }\n];\n\nfiqurlar.forEach(f => {\n  console.log(`${f.ad}: ${f.obyekt.sahe()}`);\n});",
    ipuclari: [
      "İpucu 1: Polimorfizm eyni metod adının (sahe) fərqli siniflərdə fərqli məntiqlə işləməsidir.",
      "İpucu 2: Kvadrat üçün teref * teref, Dairə üçün 3 * r * r.",
      "İpucu 3: Dövrə ilə hər birinin sahe() metodunu çağırın."
    ],
    teslimIzahi: "Polimorfizm OOP-nin əsas sütunlarındandır. Eyni interfeysi (sahe metodu) çağıran xarici kod hədəf obyektin Kvadrat və ya Dairə olduğunu bilmədən vahid şəkildə işləyə bilir."
  },
  {
    id: "exam-sec12-07",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Metod Zənciri (Method Chaining - Fluent Interface)",
    serif: "'Hesablayici' sinifi hazırlayın. Konstruktor ilkin dəyər (0) qəbul etsin. 'topla(n)', 'cix(n)', 'vur(n)' metodları əməliyyatı yerinə yetirib `this` qaytarsın ki, zəncirvari çağırış mümkün olsun. 'deyer()' metodu yekun nəticəni qaytarsın. `new Hesablayici(10).topla(5).vur(2).cix(4).deyer()` əməliyyatını icra edib konsola 'Yekun: 26' çıxarın.",
    gozlenilenCixis: "Yekun: 26",
    starterCode: "class Hesablayici {\n  // topla, cix, vur metodlarında return this istifadə edin\n}\n\n// Zəncirvari çağırışı icra edin",
    solutionCode: "class Hesablayici {\n  constructor(ilkin = 0) {\n    this.qiymet = ilkin;\n  }\n\n  topla(n) {\n    this.qiymet += n;\n    return this;\n  }\n\n  cix(n) {\n    this.qiymet -= n;\n    return this;\n  }\n\n  vur(n) {\n    this.qiymet *= n;\n    return this;\n  }\n\n  deyer() {\n    return this.qiymet;\n  }\n}\n\nconst cavab = new Hesablayici(10).topla(5).vur(2).cix(4).deyer();\nconsole.log(`Yekun: ${cavab}`);",
    ipuclari: [
      "İpucu 1: Hər dəyişdirici metodun sonunda `return this;` yazılmalıdır.",
      "İpucu 2: 10 + 5 = 15; 15 * 2 = 30; 30 - 4 = 26.",
      "İpucu 3: deyer() metodu yekun qiyməti qaytarır."
    ],
    teslimIzahi: "Metod zənciri (Fluent Interface) kitabxanalarda (məsələn, jQuery, Lodash, Knex.js) geniş istifadə olunur. Hər metod obyektin özünə istinadı (`this`) qaytardığı üçün növbəti metod dərhal nöqtə ilə zəncirlənir."
  },
  {
    id: "exam-sec12-08",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Abstrakt Sinif Davranışının Simulyasiyası",
    serif: "JavaScript-də quraşdırılmış 'abstract' açar sözü yoxdur, lakin bunu konstruktorda yoxlamaq olar. 'AbstraktRepository' baza sinifi qurun. Əgər kimsə birbaşa `new AbstraktRepository()` çağırmağa cəhd edərsə, konstruktorda `new.target === AbstraktRepository` şərti ilə Error atın ('Abstrakt sinif birbaşa yaradıla bilməz'). 'IstifadeciRepository' ondan törəsin və 'tapAll()' metodu 'İstifadəçilər siyahısı' qaytarsın. Hər iki davranışı yoxlayın: birbaşa çağırışın xətasını catch-də tutub konsola çıxarın, törəmə sinfin metodunu isə uğurla çağırın.",
    gozlenilenCixis: "Xəta: Abstrakt sinif birbaşa yaradıla bilməz\nİstifadəçilər siyahısı",
    starterCode: "class AbstraktRepository {\n  constructor() {\n    // new.target yoxlaması qoyun\n  }\n}\n\nclass IstifadeciRepository extends AbstraktRepository {\n  tapAll() { return 'İstifadəçilər siyahısı'; }\n}\n\n// Hər iki halı test edin",
    solutionCode: "class AbstraktRepository {\n  constructor() {\n    if (new.target === AbstraktRepository) {\n      throw new Error('Abstrakt sinif birbaşa yaradıla bilməz');\n    }\n  }\n}\n\nclass IstifadeciRepository extends AbstraktRepository {\n  tapAll() {\n    return 'İstifadəçilər siyahısı';\n  }\n}\n\ntry {\n  new AbstraktRepository();\n} catch (err) {\n  console.log(`Xəta: ${err.message}`);\n}\n\nconst repo = new IstifadeciRepository();\nconsole.log(repo.tapAll());",
    ipuclari: [
      "İpucu 1: `new.target` new ilə çağırılan konstruktor funksiyasına istinad edir.",
      "İpucu 2: if (new.target === BazaSinif) olduqda birbaşa instansiya qadağan edilir.",
      "İpucu 3: Alt sinif çağırıldıqda new.target AltSinif olduğu üçün xəta vermir."
    ],
    teslimIzahi: "new.target meta-xassəsi ES6 ilə gəlmişdir. Bu mexanizm sayəsində TypeScript və ya Java kimi dillərdəki abstrakt sinif konsepti saf JavaScript-də etibarlı şəkildə simulyasiya edilir."
  },
  {
    id: "exam-sec12-09",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Varislik Əvəzinə Kompozisiya (Composition over Inheritance)",
    serif: "Dərin varislik ağacı qurmaq əvəzinə bacarıqları (behavior) obyektə kompozisiya ilə əlavə edən `obyektQurucu` funksiyası hazırlayın. `ucur()` bacarığı `{ ucur: () => 'Göylərdə uçur' }`, `uzur()` bacarığı `{ uzur: () => 'Suda üzür' }` qaytarır. `Ordək` obyektini hər iki bacarıqla `Object.assign` istifadə edərək birləşdirin və konsola ardıcıl olaraq 'Ördək: Göylərdə uçur' və 'Ördək: Suda üzür' yazdırın.",
    gozlenilenCixis: "Ördək: Göylərdə uçur\nÖrdək: Suda üzür",
    starterCode: "const ucur = () => ({ ucur: () => 'Göylərdə uçur' });\nconst uzur = () => ({ uzur: () => 'Suda üzür' });\n\nfunction ordekYarat(ad) {\n  // Object.assign ilə bacarıqları birləşdirin\n}\n\n// Ördək obyektini test edin",
    solutionCode: "const ucur = () => ({ ucur: () => 'Göylərdə uçur' });\nconst uzur = () => ({ uzur: () => 'Suda üzür' });\n\nfunction ordekYarat(ad) {\n  return Object.assign(\n    { ad },\n    ucur(),\n    uzur()\n  );\n}\n\nconst ordek = ordekYarat('Yaşılbaş');\nconsole.log(`Ördək: ${ordek.ucur()}`);\nconsole.log(`Ördək: ${ordek.uzur()}`);",
    ipuclari: [
      "İpucu 1: Kompozisiya 'nədir' (is-a) əvəzinə 'nə edə bilir' (can-do) prinsipinə əsaslanır.",
      "İpucu 2: Object.assign(hedef, ...menbeler) xassələri tək obyektdə birləşdirir.",
      "İpucu 3: ordek.ucur() və ordek.uzur() metodlarını çağırın."
    ],
    teslimIzahi: "'Composition over inheritance' proqram mühəndisliyinin qızıl qaydasıdır. Çoxsaylı və dolaşıq extends zəncirlərindən qaçmaq üçün kiçik funksional bacarıqları obyektə birləşdirmək sistemi daha elastik edir."
  },
  {
    id: "exam-sec12-10",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Modul İxrac və İdxal Nümunəsi (Module Pattern Simulyasiyası)",
    serif: "Kapsulyasiya olunmuş IIFE (Immediately Invoked Function Expression) modul qurun. Bu modul daxilində gizli `gizliAcar = 'XYZ-123'` saxlasın və xaricə yalnız iki metod təqdim etsin: `kodlasdir(metn)` (mətn + ':' + gizliAcar qaytarsın) və `acarDeyis(yeniAcar)`. 'Salam' sözünü kodlaşdırın, sonra açarı 'ABC-789' edin və 'Dunya' sözünü kodlaşdırın. Hər iki nəticəni konsola çıxarın.",
    gozlenilenCixis: "Salam:XYZ-123\nDunya:ABC-789",
    starterCode: "const GuvenlikModulu = (function() {\n  let gizliAcar = 'XYZ-123';\n  // İctimai obyekt qaytarın\n})();\n\n// Metodları çağırın və konsola çıxarın",
    solutionCode: "const GuvenlikModulu = (function() {\n  let gizliAcar = 'XYZ-123';\n\n  return {\n    kodlasdir(metn) {\n      return `${metn}:${gizliAcar}`;\n    },\n    acarDeyis(yeniAcar) {\n      gizliAcar = yeniAcar;\n    }\n  };\n})();\n\nconsole.log(GuvenlikModulu.kodlasdir('Salam'));\nGuvenlikModulu.acarDeyis('ABC-789');\nconsole.log(GuvenlikModulu.kodlasdir('Dunya'));",
    ipuclari: [
      "İpucu 1: IIFE daxilindəki let gizliAcar xaricdən görünmür (Closure).",
      "İpucu 2: Qaytarılan obyektin metodları gizliAcar dəyişəninə istinadı saxlayır.",
      "İpucu 3: Sətirləri konsola çıxarın."
    ],
    teslimIzahi: "Module Pattern ES6 modulları (import/export) gəlməzdən əvvəl JavaScript-də dəyişənləri qlobal sahədən gizlətmək və ad toqquşmasının qarşısını almaq üçün ən geniş yayılmış dizayn şablonu idi."
  },
  {
    id: "exam-sec12-11",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Siniflərdə Singleton Dizayn Şablonu",
    serif: "'VerilenlerBazasi' adlı sinif qurun. Bu sinifdən neçə dəfə `new VerilenlerBazasi()` çağırılmasından asılı olmayaraq hər zaman eyni tək nümunə (instance) qayıtmalıdır. Konstruktorda əgər statik `#numune` artıq mövcuddursa, həmin nümunəni qaytarın, yoxdursa cari `this`-i `#numune`-yə mənimsədin. İki dəfə `new` çağırın, birincisinə `db.baglanti = 'Aktiv'` qoyun və `db1 === db2` və `db2.baglanti` yoxlayaraq 'Eyni nümunə: true, Bağlantı: Aktiv' konsola çıxarın.",
    gozlenilenCixis: "Eyni nümunə: true, Bağlantı: Aktiv",
    starterCode: "class VerilenlerBazasi {\n  static #numune = null;\n  // Konstruktorda təkliyi təmin edin\n}\n\n// İki nüsxə yaradıb eyniliyini yoxlayın",
    solutionCode: "class VerilenlerBazasi {\n  static #numune = null;\n\n  constructor() {\n    if (VerilenlerBazasi.#numune) {\n      return VerilenlerBazasi.#numune;\n    }\n    this.baglanti = 'Qeyri-aktiv';\n    VerilenlerBazasi.#numune = this;\n  }\n}\n\nconst db1 = new VerilenlerBazasi();\ndb1.baglanti = 'Aktiv';\nconst db2 = new VerilenlerBazasi();\n\nconsole.log(`Eyni nümunə: ${db1 === db2}, Bağlantı: ${db2.baglanti}`);",
    ipuclari: [
      "İpucu 1: JavaScript konstruktoru açıq şəkildə obyekt qaytardıqda (`return instance`), `new` operatoru həmin obyekti mənimsəyir.",
      "İpucu 2: static #numune sahəsində ilk yaradılmış nüsxə saxlanılır.",
      "İpucu 3: db1 === db2 true olmalıdır."
    ],
    teslimIzahi: "Singleton naxışı bütün tətbiq boyunca tək bir idarəedici obyektin (məsələn, konfiqurasiya meneceri, verilənlər bazası bağlantısı axını) mövcudluğunu təmin edir və yaddaşa qənaət edir."
  },
  {
    id: "exam-sec12-12",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Statik Zavod Metodu (Static Factory Method Pattern)",
    serif: "'İstifadəçi' sinifi yaradın. Şəxsi konstruktor əvəzinə fərqli mənbələrdən istifadəçi obyektləri doğuran iki statik zavod metodu qurun: `istifadeciJSONdan(jsonStr)` və `istifadeciFormdan(ad, rol)`. Hər iki metod yeni `İstifadəçi` obyekti qaytarmalıdır. `İstifadəçi.istifadeciJSONdan('{\"ad\":\"Elmir\",\"rol\":\"admin\"}')` çağırışını edərək konsola 'İstifadəçi: Elmir (admin)' çıxarın.",
    gozlenilenCixis: "İstifadəçi: Elmir (admin)",
    starterCode: "class Istifadeci {\n  constructor(ad, rol) {\n    this.ad = ad;\n    this.rol = rol;\n  }\n  // static istifadeciJSONdan metodunu yazın\n}\n\n// Metodu çağırın və konsola çıxarın",
    solutionCode: "class Istifadeci {\n  constructor(ad, rol) {\n    this.ad = ad;\n    this.rol = rol;\n  }\n\n  static istifadeciJSONdan(jsonStr) {\n    const data = JSON.parse(jsonStr);\n    return new Istifadeci(data.ad, data.rol);\n  }\n\n  melumat() {\n    return `İstifadəçi: ${this.ad} (${this.rol})`;\n  }\n}\n\nconst u = Istifadeci.istifadeciJSONdan('{\"ad\":\"Elmir\",\"rol\":\"admin\"}');\nconsole.log(u.melumat());",
    ipuclari: [
      "İpucu 1: Static Factory metodları fərqli giriş formatlarını emal edib new Sinif(...) qaytarır.",
      "İpucu 2: JSON.parse ilə daxil olan mətni parse edin.",
      "İpucu 3: u.melumat() formatını konsola çıxarın."
    ],
    teslimIzahi: "Static Factory Method naxışı obyekt yaradılmasını konstruktorun tək qəlibindən azad edir, fərqli giriş tiplərinə uyğun adlandırılmış aydın fabriklər təqdim edir."
  },
  {
    id: "exam-sec12-13",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "EventEmitter / Müşahidəçi (Observer) Sinifi",
    serif: "Kompakt bir hadisə idarəedicisi `HadisePaylayici` sinifi hazırlayın. Sinifdə hadisə qeydiyyatı üçün `on(hadise, callback)` və hadisəni tetiklemek üçün `emit(hadise, melumat)` metodları olsun. 'giris' hadisəsinə qulaq asan funksiya qeydiyyatdan keçirin (ad parametrini qəbul edib konsola 'Xoş gəldin, Murad!' yazsın). `emit('giris', 'Murad')` çağırışı ilə hadisəni başladın.",
    gozlenilenCixis: "Xoş gəldin, Murad!",
    starterCode: "class HadisePaylayici {\n  // hadisələri saxlamaq üçün obyekt qurun\n  // on və emit metodlarını yazın\n}\n\n// 'giris' hadisəsini qeydiyyatdan keçirin və emit edin",
    solutionCode: "class HadisePaylayici {\n  constructor() {\n    this.hadiseler = {};\n  }\n\n  on(hadise, cb) {\n    if (!this.hadiseler[hadise]) {\n      this.hadiseler[hadise] = [];\n    }\n    this.hadiseler[hadise].push(cb);\n  }\n\n  emit(hadise, melumat) {\n    if (this.hadiseler[hadise]) {\n      this.hadiseler[hadise].forEach(cb => cb(melumat));\n    }\n  }\n}\n\nconst paylayici = new HadisePaylayici();\npaylayici.on('giris', ad => console.log(`Xoş gəldin, ${ad}!`));\npaylayici.emit('giris', 'Murad');",
    ipuclari: [
      "İpucu 1: this.hadiseler lüğətində hər hadisə adı üçün callback funksiyalar massivi saxlanılır.",
      "İpucu 2: emit metodu həmin hadisəyə abunə olan bütün funksiyaları sırayla çağırır.",
      "İpucu 3: Konsola verilən arqumentlə xoş gəlmisiniz mesajı çıxmalıdır."
    ],
    teslimIzahi: "Observer / EventEmitter naxışı komponentlər arasında zəif əlaqəli (loosely coupled) rabitə qurmaq üçün veb və Node.js memarlığında ən mühüm mexanizmdir."
  },
  {
    id: "exam-sec12-14",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Siniflərdə Fərdi İterator (Symbol.iterator)",
    serif: "'Komanda' sinifi qurun. Konstruktorda üzvlər massivini qəbul etsin. Bu sinif nümunəsinin birbaşa `for...of` dövrəsi ilə iterasiya oluna bilməsi üçün `[Symbol.iterator]()` metodunu reallaşdırın (və ya `*[Symbol.iterator]()` generatoru ilə `yield* this.uzvler` istifadə edin). 'Əli', 'Vəli', 'Samir' üzvlərindən ibarət komandanı `for...of` ilə gəzərək hər adı tək-tək konsola çıxarın.",
    gozlenilenCixis: "Əli\nVəli\nSamir",
    starterCode: "class Komanda {\n  constructor(uzvler) {\n    this.uzvler = uzvler;\n  }\n  // [Symbol.iterator] metodunu yazın\n}\n\n// for...of ilə dövr edib konsola çıxarın",
    solutionCode: "class Komanda {\n  constructor(uzvler) {\n    this.uzvler = uzvler;\n  }\n\n  *[Symbol.iterator]() {\n    yield* this.uzvler;\n  }\n}\n\nconst k = new Komanda(['Əli', 'Vəli', 'Samir']);\nfor (const uzv of k) {\n  console.log(uzv);\n}",
    ipuclari: [
      "İpucu 1: `*[Symbol.iterator]() { yield* this.uzvler; }` ən yığcam və müasir iterasiya üsuludur.",
      "İpucu 2: Bu metod təyin olunduqda sinif obyekti birbaşa for...of və spread (...) operatorlarını dəstəkləyir.",
      "İpucu 3: for...of dövrəsi ilə hər üzvü konsola yazdırın."
    ],
    teslimIzahi: "JavaScript İterasiya Protokolu (Iteration Protocol) istənilən fərdi sinfi dilin daxili massivləri kimi şəffaf dövrəyə salmağa imkan verir. Symbol.iterator bu protokolun açarıdır."
  },
  {
    id: "exam-sec12-15",
    bolmeId: 12,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Rollar və İcazələr İyerarxiyası (RBAC Engine)",
    serif: "İstehsalat səviyyəli Rol Əsaslı İcazə Nəzarəti (RBAC) mühərriki qurun. Baza `İstifadəçi` sinifi (`ad`, `rol`) yaradın. Ondan törəyən `Admin` və `Redaktor` sinifləri qurun. Hər sinfin statik və ya daxili icazələr dəsti olsun: Redaktor: ['oxu', 'yaz']; Admin: ['oxu', 'yaz', 'sil', 'idarəet']. Siniflərdə `icazesiVar(emeliyyat)` metodu olsun. 'Sənan' adlı Redaktor və 'Orxan' adlı Admin yaradın. Hər ikisinin 'sil' əməliyyatına icazəsini yoxlayıb konsola ardıcıl olaraq 'Redaktor (sil): false' və 'Admin (sil): true' yazdırın.",
    gozlenilenCixis: "Redaktor (sil): false\nAdmin (sil): true",
    starterCode: "class Istifadeci {\n  // constructor və icazesiVar metodunu qurun\n}\n\n// Redaktor və Admin törəmə siniflərini yazın\n// 'sil' icazəsini yoxlayın",
    solutionCode: "class Istifadeci {\n  constructor(ad, rol, icazeler = []) {\n    this.ad = ad;\n    this.rol = rol;\n    this.icazeler = new Set(icazeler);\n  }\n\n  icazesiVar(emeliyyat) {\n    return this.icazeler.has(emeliyyat);\n  }\n}\n\nclass Redaktor extends Istifadeci {\n  constructor(ad) {\n    super(ad, 'Redaktor', ['oxu', 'yaz']);\n  }\n}\n\nclass Admin extends Istifadeci {\n  constructor(ad) {\n    super(ad, 'Admin', ['oxu', 'yaz', 'sil', 'idarəet']);\n  }\n}\n\nconst redaktor = new Redaktor('Sənan');\nconst admin = new Admin('Orxan');\n\nconsole.log(`Redaktor (sil): ${redaktor.icazesiVar('sil')}`);\nconsole.log(`Admin (sil): ${admin.icazesiVar('sil')}`);",
    ipuclari: [
      "İpucu 1: this.icazeler üçün Set verilənlər strukturundan istifadə icazələrin O(1) sürətlə yoxlanmasını təmin edir.",
      "İpucu 2: Redaktor konstruktorunda super-ə ['oxu', 'yaz'], Admin-də isə ['oxu', 'yaz', 'sil', 'idarəet'] ötürün.",
      "İpucu 3: icazesiVar('sil') nəticələrini konsola çıxarın."
    ],
    teslimIzahi: "Rol Əsaslı Giriş Nəzarəti (RBAC - Role-Based Access Control) korporativ tətbiqlərdə istifadəçilərin yalnız səlahiyyətləri daxilində olan resurslara daxil olmasını təmin edən ən mühüm təhlükəsizlik modelidir."
  }
];

const SEC_13_QUESTIONS = [
  // Bölmə 13: Asinxron JavaScript (Callbacks, Promises, async/await, Event Loop)
  {
    id: "exam-sec13-01",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Sadə Promise Yaradılması və .then() ilə Oxunması",
    serif: "'emeliyyat()' funksiyası yazın və o, dərhal 'Məlumat uğurla alındı' dəyəri ilə həll olunan (resolved) Promise qaytarsın. `.then()` ilə bu nəticəni oxuyub konsola çıxarın.",
    gozlenilenCixis: "Məlumat uğurla alındı",
    starterCode: "function emeliyyat() {\n  // Promise qaytarın\n}\n\n// .then() ilə oxuyun",
    solutionCode: "function emeliyyat() {\n  return new Promise((resolve) => {\n    resolve('Məlumat uğurla alındı');\n  });\n}\n\nemeliyyat().then(cavab => {\n  console.log(cavab);\n});",
    ipuclari: [
      "İpucu 1: `new Promise((resolve, reject) => ...)` konstruktorundan istifadə edin.",
      "İpucu 2: resolve(dəyər) Promise-i uğurla tamamlayır.",
      "İpucu 3: .then(cavab => console.log(cavab)) ilə qiyməti çap edin."
    ],
    teslimIzahi: "Promise gələcəkdə tamamlanacaq asinxron dəyəri təmsil edən obyektdir. resolve funksiyası çağırıldıqda Promise 'fulfilled' vəziyyətinə keçir və ona qoşulmuş .then() handler-ləri işə düşür."
  },
  {
    id: "exam-sec13-02",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Promise.reject() və .catch() ilə Xətanın Tutulması",
    serif: "'xidmeteMuraciet()' funksiyası yazın. O, 'Server xətası: 500' mesajı ilə rədd edilmiş (rejected) Promise qaytarsın. `.catch()` metodundan istifadə edərək bu xətanı tutun və konsola 'Tutuldu: Server xətası: 500' yazdırın.",
    gozlenilenCixis: "Tutuldu: Server xətası: 500",
    starterCode: "function xidmeteMuraciet() {\n  // Promise.reject qaytarın\n}\n\n// .catch() ilə xətanı idarə edin",
    solutionCode: "function xidmeteMuraciet() {\n  return Promise.reject(new Error('Server xətası: 500'));\n}\n\nxidmeteMuraciet().catch(err => {\n  console.log(`Tutuldu: ${err.message}`);\n});",
    ipuclari: [
      "İpucu 1: Promise.reject(new Error(...)) qısa yolla rədd edilmiş Promise yaradır.",
      "İpucu 2: .catch(err => ...) xəta blokunu təmsil edir.",
      "İpucu 3: err.message xəbərdarlıq mətnini saxlayır."
    ],
    teslimIzahi: "Promise-lərdə xətaların idarə edilməsi .catch() metodu vasitəsilə həyata keçirilir. Bu, asinxron əməliyyat uğursuz olduqda tətbiqin qəfil dayanmasının qarşısını alır."
  },
  {
    id: "exam-sec13-03",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "async/await ilə Asinxron Qiymətin Oxunması",
    serif: "'asinxronTopla(a, b)' adlı async funksiya yazın və `a + b` qaytarsın. Başqa bir `async function baslat()` daxilində `await` ilə bu funksiyanı 15 və 25 arqumentləri ilə çağırıb nəticəni konsola 'Cəm: 40' formatında çıxarın.",
    gozlenilenCixis: "Cəm: 40",
    starterCode: "async function asinxronTopla(a, b) {\n  // a + b qaytarın\n}\n\nasync function baslat() {\n  // await ilə nəticəni gözləyib konsola çıxarın\n}\n\nbaslat();",
    solutionCode: "async function asinxronTopla(a, b) {\n  return a + b;\n}\n\nasync function baslat() {\n  const cem = await asinxronTopla(15, 25);\n  console.log(`Cəm: ${cem}`);\n}\n\nbaslat();",
    ipuclari: [
      "İpucu 1: async funksiya həmişə avtomatik olaraq Promise qaytarır.",
      "İpucu 2: await açar sözü yalnız async funksiyaların daxilində işləyir.",
      "İpucu 3: `Cəm: ${cem}` formatında çap edin."
    ],
    teslimIzahi: "async/await ES2017 ilə gəlmiş və asinxron kodu sanki sinxron kod kimi sətirbəsətir oxunaqlı yazmağa imkan verən Promise sintaktik örtüyüdür (sugar)."
  },
  {
    id: "exam-sec13-04",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Promise Zənciri (Promise Chaining)",
    serif: "Dəyəri addım-addım artıran Promise zənciri qurun. İlkin olaraq `Promise.resolve(5)` ilə başlayın. Birinci `.then()` dəyəri 2-yə vursun (10), ikinci `.then()` üzərinə 20 gəlsin (30), üçüncü `.then()` nəticəni 'Yekun qiymət: 30' şəklində konsola çıxarsın.",
    gozlenilenCixis: "Yekun qiymət: 30",
    starterCode: "function zencirQur() {\n  // Promise.resolve(5) ilə zəncir başlayın\n}\n\nzencirQur();",
    solutionCode: "function zencirQur() {\n  Promise.resolve(5)\n    .then(x => x * 2)\n    .then(x => x + 20)\n    .then(yekun => {\n      console.log(`Yekun qiymət: ${yekun}`);\n    });\n}\n\nzencirQur();",
    ipuclari: [
      "İpucu 1: Hər .then() daxilində qaytarılan qiymət avtomatik olaraq növbəti .then()-ə arqument kimi ötürülür.",
      "İpucu 2: 5 * 2 = 10, sonra 10 + 20 = 30.",
      "İpucu 3: Sonuncu .then() konsola formatlanmış çıxışı verir."
    ],
    teslimIzahi: "Promise Chaining 'Callback Hell' problemini həll edən əsas mexanizmdir. Hər .then() yeni bir Promise qaytardığı üçün ardıcıl transformasiyaları zəncir şəklində bağlamaq mümkündür."
  },
  {
    id: "exam-sec13-05",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Promise.all ilə Paralel Sorğuların Birləşdirilməsi",
    serif: "Üç paralel asinxron əməliyyat simulyasiya edin: istifadəçi profilini gətirən `getProfil()` ({ ad: 'Aysel' }), balansı gətirən `getBalans()` ({ balans: 250 }) və bildirişləri gətirən `getBildirisler()` ([ 'Yeni mesaj' ]). `Promise.all` istifadə edərək üçünün də tamamlanmasını gözləyin və konsola 'Aysel: 250 AZN, Bildiriş sayı: 1' çıxarın.",
    gozlenilenCixis: "Aysel: 250 AZN, Bildiriş sayı: 1",
    starterCode: "const getProfil = () => Promise.resolve({ ad: 'Aysel' });\nconst getBalans = () => Promise.resolve({ balans: 250 });\nconst getBildirisler = () => Promise.resolve(['Yeni mesaj']);\n\n// Promise.all ilə nəticələri toplayıb konsola çıxarın",
    solutionCode: "const getProfil = () => Promise.resolve({ ad: 'Aysel' });\nconst getBalans = () => Promise.resolve({ balans: 250 });\nconst getBildirisler = () => Promise.resolve(['Yeni mesaj']);\n\nPromise.all([getProfil(), getBalans(), getBildirisler()])\n  .then(([profil, balans, bildirisler]) => {\n    console.log(`${profil.ad}: ${balans.balans} AZN, Bildiriş sayı: ${bildirisler.length}`);\n  });",
    ipuclari: [
      "İpucu 1: Promise.all([p1, p2, p3]) massiv şəklində Promise-ləri qəbul edir.",
      "İpucu 2: Cavab bütün Promise-lərin nəticələrindən ibarət massiv qaytarır (destructuring edə bilərsiniz).",
      "İpucu 3: Şablon sətir ilə nəticəni çap edin."
    ],
    teslimIzahi: "Promise.all() asinxron əməliyyatları paralel icra etməklə ümumi icra vaxtını kəskin azaldır. Bütün sorğular eyni anda başlayır və ən gec bitən sorğunun vaxtında tamamlanır."
  },
  {
    id: "exam-sec13-06",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "async/await daxilində try...catch İdarəetməsi",
    serif: "Xəta ehtimalı olan asinxron `odenisEt(mebleg)` funksiyası yazın. Əgər məbləğ > 100 olarsa, Promise.reject(new Error('Limit aşıldı: Maksimum 100 AZN')) atsın. `odenisiTamamla()` async funksiyasında 150 AZN ilə cəhd edin və xətanı try...catch ilə tutub konsola '[İmtina]: Limit aşıldı: Maksimum 100 AZN' çıxarın.",
    gozlenilenCixis: "[İmtina]: Limit aşıldı: Maksimum 100 AZN",
    starterCode: "function odenisEt(mebleg) {\n  if (mebleg > 100) return Promise.reject(new Error('Limit aşıldı: Maksimum 100 AZN'));\n  return Promise.resolve('Uğurlu');\n}\n\nasync function odenisiTamamla() {\n  // try...catch ilə await odenisEt(150) çağırın\n}\n\nodenisiTamamla();",
    solutionCode: "function odenisEt(mebleg) {\n  if (mebleg > 100) return Promise.reject(new Error('Limit aşıldı: Maksimum 100 AZN'));\n  return Promise.resolve('Uğurlu');\n}\n\nasync function odenisiTamamla() {\n  try {\n    await odenisEt(150);\n  } catch (err) {\n    console.log(`[İmtina]: ${err.message}`);\n  }\n}\n\nodenisiTamamla();",
    ipuclari: [
      "İpucu 1: await ilə çağırılan rədd edilmiş Promise avtomatik catch blokuna yönəlir.",
      "İpucu 2: catch(err) parametri atılan Error obyektidir.",
      "İpucu 3: Konsola `[İmtina]: ${err.message}` çap edin."
    ],
    teslimIzahi: "async/await ilə try...catch cütlüyü asinxron xətaları adi sinxron xətalar kimi təbii idarə etməyə imkan verir və kodun oxunaqlılığını yüksək səviyyədə saxlayır."
  },
  {
    id: "exam-sec13-07",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Promise.race() ilə Ən Sürətli Cavabın Seçilməsi",
    serif: "İki fərqli server güzgüsündən (mirror) cavab gözləyən `Promise.race()` mexanizmi qurun. Əsas server gecikir, lakin ehtiyat güzgü dərhal `Promise.resolve('Ehtiyat serverdən gəldi')` qaytarır. `Promise.race` ilə ilk gələn cavabı götürüb konsola 'Qalib: Ehtiyat serverdən gəldi' çıxarın.",
    gozlenilenCixis: "Qalib: Ehtiyat serverdən gəldi",
    starterCode: "const server1 = new Promise((resolve) => setTimeout(() => resolve('Əsas server'), 500));\nconst server2 = Promise.resolve('Ehtiyat serverdən gəldi');\n\n// Promise.race ilə ilk nəticəni tutun",
    solutionCode: "const server1 = new Promise((resolve) => setTimeout(() => resolve('Əsas server'), 500));\nconst server2 = Promise.resolve('Ehtiyat serverdən gəldi');\n\nPromise.race([server1, server2]).then(netice => {\n  console.log(`Qalib: ${netice}`);\n});",
    ipuclari: [
      "İpucu 1: Promise.race([p1, p2]) massivdəki Promise-lərdən ən tez tamamlanan (istər resolve, istər reject) tək birinin nəticəsini qaytarır.",
      "İpucu 2: server2 dərhal resolve olduğu üçün qalib gələcəkdir.",
      "İpucu 3: .then() ilə qalibi konsola çıxarın."
    ],
    teslimIzahi: "Promise.race() şəbəkə sorğularında vaxt məhdudiyyətləri (timeout) qoymaq və ya bir neçə alternativ mənbədən ən sürətlisini seçmək üçün tətbiq olunur."
  },
  {
    id: "exam-sec13-08",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Promise.allSettled() ilə Uğur və Xətaların Təhlili",
    serif: "Üç asinxron əməliyyat aparın: biri uğurlu (`Promise.resolve('Fayl 1 yükləndi')`), ikincisi xətalı (`Promise.reject(new Error('Fayl 2 tapılmadı'))`), üçüncüsü uğurlu (`Promise.resolve('Fayl 3 yükləndi')`). `Promise.allSettled()` istifadə edərək neçə əməliyyatın uğurlu ('fulfilled') və neçəsinin uğursuz ('rejected') olduğunu hesablayın və konsola 'Uğurlu: 2, Uğursuz: 1' yazdırın.",
    gozlenilenCixis: "Uğurlu: 2, Uğursuz: 1",
    starterCode: "const p1 = Promise.resolve('Fayl 1 yükləndi');\nconst p2 = Promise.reject(new Error('Fayl 2 tapılmadı'));\nconst p3 = Promise.resolve('Fayl 3 yükləndi');\n\n// Promise.allSettled istifadə edin",
    solutionCode: "const p1 = Promise.resolve('Fayl 1 yükləndi');\nconst p2 = Promise.reject(new Error('Fayl 2 tapılmadı'));\nconst p3 = Promise.resolve('Fayl 3 yükləndi');\n\nPromise.allSettled([p1, p2, p3]).then(neticeler => {\n  const ugurlu = neticeler.filter(r => r.status === 'fulfilled').length;\n  const ugursuz = neticeler.filter(r => r.status === 'rejected').length;\n  console.log(`Uğurlu: ${ugurlu}, Uğursuz: ${ugursuz}`);\n});",
    ipuclari: [
      "İpucu 1: Promise.all-dan fərqli olaraq Promise.allSettled biri uğursuz olduqda qırılmır, hamısının yekunlaşmasını gözləyir.",
      "İpucu 2: Hər nəticə obyektində `.status` ('fulfilled' və ya 'rejected') sahəsi olur.",
      "İpucu 3: filter().length ilə sayları tapın."
    ],
    teslimIzahi: "Promise.all biri xəta verəndə bütün nəticələri rədd edir. Promise.allSettled() isə bütün əməliyyatların taleyini öyrənmək (məsələn, kütləvi email göndərişində uğurlu və uğursuzları ayırmaq) üçün idealdır."
  },
  {
    id: "exam-sec13-09",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Event Loop: Mikrotask vs Makrotask İcra Ardıcıllığı",
    serif: "JavaScript-in Hadisə Dövrəsi (Event Loop) mexanizmini nümayiş etdirin: sinxron kod, Promise (.then mikro-tapşırığı) və setTimeout (makro-tapşırıq). Konsol çıxışlarının ardıcıllığını massivə yığın: əvvəlcə '1: Sinxron', sonra Promise içində '2: Mikrotask', setTimeout daxilində '3: Makrotask'. Nəticələri ardıcıllıqla konsola çıxaran asinxron strukturu qurun (və ya dərhal icra edin).",
    gozlenilenCixis: "1: Sinxron\n2: Mikrotask\n3: Makrotask",
    starterCode: "function eventLoopNumunə() {\n  // setTimeout, Promise.resolve().then və sinxron loqları təşkil edin\n}\n\neventLoopNumunə();",
    solutionCode: "function eventLoopNumunə() {\n  console.log('1: Sinxron');\n  setTimeout(() => {\n    console.log('3: Makrotask');\n  }, 0);\n  Promise.resolve().then(() => {\n    console.log('2: Mikrotask');\n  });\n}\n\neventLoopNumunə();",
    ipuclari: [
      "İpucu 1: Sinxron kod dərhal icra olunur (Call Stack).",
      "İpucu 2: Promise .then() callbacks Microtask növbəsinə düşür və növbəti dövrədən qabaq dərhal təmizlənir.",
      "İpucu 3: setTimeout hətta 0ms olsa belə Macrotask (Task) növbəsinə düşür və ən sonda icra olunur."
    ],
    teslimIzahi: "Event Loop mikrotasklara (Promise, queueMicrotask) makrotasklardan (setTimeout, setInterval, I/O) daha yüksək üstünlük verir. Call stack boşalan kimi əvvəlcə bütün mikrotasklar icra olunur, yalnız sonra növbəti makrotask işə düşür."
  },
  {
    id: "exam-sec13-10",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Ardıcıl Asinxron Dövrə (Sequential Execution with for...of)",
    serif: "Massivdə 3 tapşırıq ID-si verilmişdir: `[1, 2, 3]`. Bu tapşırıqları paralel deyil, ciddi şəkildə ardıcıl (biri bitdikdən sonra növbətisi) icra edən `ardicilYukle(idler)` async funksiyası yazın. Hər addımda `await` ilə nəticəni gözləyib loqlara əlavə edin. Sonda 'Tamamlandı: [1, 2, 3]' formatında konsola çıxarın.",
    gozlenilenCixis: "Tamamlandı: 1\nTamamlandı: 2\nTamamlandı: 3",
    starterCode: "async function tapşırıq(id) {\n  return Promise.resolve(id);\n}\n\nasync function ardicilYukle(idler) {\n  // for...of dövrəsi və await ilə ardıcıl icra edin\n}\n\nardicilYukle([1, 2, 3]);",
    solutionCode: "async function tapşırıq(id) {\n  return Promise.resolve(id);\n}\n\nasync function ardicilYukle(idler) {\n  for (const id of idler) {\n    const netice = await tapşırıq(id);\n    console.log(`Tamamlandı: ${netice}`);\n  }\n}\n\nardicilYukle([1, 2, 3]);",
    ipuclari: [
      "İpucu 1: Array.prototype.forEach asinxron await-i gözləmir, buna görə standart `for...of` dövrəsindən istifadə edilməlidir.",
      "İpucu 2: Dövrə daxilində `await tapşırıq(id)` yazdıqda hər iterasiya əvvəlkinin bitməsini gözləyir.",
      "İpucu 3: Konsola ardıcıl şəkildə çıxarın."
    ],
    teslimIzahi: "for...of dövrəsi daxilində await yazmaq asinxron tapşırıqları bir-birinin ardınca (sekvensial) icra etməyin standart yoludur. forEach və ya map asinxron iterasiyada gözləmə aparmır və paralel davranır."
  },
  {
    id: "exam-sec13-11",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Asinxron Əməliyyatda Vaxt Məhdudiyyəti (Timeout Wrapper)",
    serif: "İstənilən asinxron funksiyaya vaxt məhdudiyyəti qoyan `vaxtQoy(promise, ms)` funksiyası hazırlayın. Əgər verilən Promise göstərilən millisaniyə ərzində həll olunmazsa, 'Vaxt bitdi!' xətası atsın. `Promise.race` istifadə edin. 100ms gözləyən ləng sorğunu 50ms timeout ilə yoxlayın və catch blokunda '[Xəta]: Vaxt bitdi!' konsola çıxarın.",
    gozlenilenCixis: "[Xəta]: Vaxt bitdi!",
    starterCode: "function vaxtQoy(promise, ms) {\n  // Promise.race ilə taymer və əsas promise-i yarışdırın\n}\n\n// 100ms gecikən sorğunu 50ms ilə sınayın",
    solutionCode: "function vaxtQoy(promise, ms) {\n  const taymer = new Promise((_, reject) => {\n    setTimeout(() => reject(new Error('Vaxt bitdi!')), ms);\n  });\n  return Promise.race([promise, taymer]);\n}\n\nconst lengSorqu = new Promise(res => setTimeout(() => res('Uğur'), 100));\n\nvaxtQoy(lengSorqu, 50)\n  .catch(err => {\n    console.log(`[Xəta]: ${err.message}`);\n  });",
    ipuclari: [
      "İpucu 1: setTimeout ilə müəyyən ms-dən sonra reject edən bir taymer Promise yaradın.",
      "İpucu 2: Promise.race([promise, taymer]) vasitəsilə ən tez baş verəni tutun.",
      "İpucu 3: catch daxilində `[Xəta]: ${err.message}` çap edin."
    ],
    teslimIzahi: "Şəbəkə proqramlaşdırmasında serverlərin sonsuz cavabsız qalmasının qarşısını almaq üçün Timeout Wrapper (və ya AbortSignal.timeout) istifadə edilərək istifadəçi interfeysi dərhal xəbərdar edilir."
  },
  {
    id: "exam-sec13-12",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Callback Əsaslı Funksiyanın Promisifikasiyası (promisify)",
    serif: "Ənənəvi Node.js callback stilində olan `(err, result)` funksiyalarını Promise qaytaran funksiyaya çevirən `promisify(fn)` köməkçi funksiyası hazırlayın. Verilmiş köhnə funksiya: `kohneOxu(id, callback)` (əgər id>0 isə callback(null, 'Məlumat-' + id) qaytarır). Yeni promisify olunmuş funksiyanı id=42 ilə çağırıb konsola 'Alındı: Məlumat-42' çıxarın.",
    gozlenilenCixis: "Alındı: Məlumat-42",
    starterCode: "function promisify(fn) {\n  // Promise qaytaran wrapper yazın\n}\n\nfunction kohneOxu(id, cb) {\n  if (id > 0) cb(null, 'Məlumat-' + id);\n  else cb(new Error('Xəta'));\n}\n\n// promisify edib await və ya .then ilə konsola çıxarın",
    solutionCode: "function promisify(fn) {\n  return function(...args) {\n    return new Promise((resolve, reject) => {\n      fn(...args, (err, res) => {\n        if (err) return reject(err);\n        resolve(res);\n      });\n    });\n  };\n}\n\nfunction kohneOxu(id, cb) {\n  if (id > 0) cb(null, 'Məlumat-' + id);\n  else cb(new Error('Xəta'));\n}\n\nconst yeniOxu = promisify(kohneOxu);\nyeniOxu(42).then(cavab => {\n  console.log(`Alındı: ${cavab}`);\n});",
    ipuclari: [
      "İpucu 1: promisify qaytardığı funksiya daxilində new Promise yaradır.",
      "İpucu 2: Əsas funksiyaya arqumentlərin sonuna callback `(err, res) => ...` əlavə olunur.",
      "İpucu 3: err varsa reject(err), yoxdursa resolve(res) çağırılır."
    ],
    teslimIzahi: "Köhnə kitabxanalar və Node.js-in ilkin modulları 'Error-First Callback' konvensiyasından istifadə edirdi. Promisify nümunəsi bu funksiyaları müasir async/await ekosisteminə inteqrasiya edir (Node-da util.promisify mövcuddur)."
  },
  {
    id: "exam-sec13-13",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Asinxron Sorğu Keşləyicisi (Async Memoize / Cache)",
    serif: "Ağır asinxron sorğuların nəticəsini yaddaşda saxlayan `kesle(fn)` funksiyası hazırlayın. Eyni arqumentlə çağırıldıqda əməliyyatı təkrar icra etməsin, keşdəki nəticəni qaytarsın. Simulyasiya: `istifadeciGetir(id)` funksiyası çağırış sayğacını artırır. Funksiyanı keşləyin, id=1 ilə ardıcıl iki dəfə çağırın və konsola 'Dəyər: İstifadəçi 1, Çağırış sayı: 1' çıxarın.",
    gozlenilenCixis: "Dəyər: İstifadəçi 1, Çağırış sayı: 1",
    starterCode: "function kesle(asyncFn) {\n  const cache = new Map();\n  // Eyni parametr üçün keşdən qaytarın\n}\n\n// Çağırış sayğacını yoxlayın",
    solutionCode: "function kesle(asyncFn) {\n  const cache = new Map();\n  return async function(arg) {\n    if (cache.has(arg)) {\n      return cache.get(arg);\n    }\n    const res = await asyncFn(arg);\n    cache.set(arg, res);\n    return res;\n  };\n}\n\nlet say = 0;\nasync function istifadeciGetir(id) {\n  say++;\n  return `İstifadəçi ${id}`;\n}\n\nasync function test() {\n  const keslenmis = kesle(istifadeciGetir);\n  const r1 = await keslenmis(1);\n  const r2 = await keslenmis(1);\n  console.log(`Dəyər: ${r2}, Çağırış sayı: ${say}`);\n}\n\ntest();",
    ipuclari: [
      "İpucu 1: Map obyekti arqumenti açar, cavabı dəyər kimi saxlayır.",
      "İpucu 2: cache.has(arg) true olduqda asyncFn çağırılmadan keş qaytarılır.",
      "İpucu 3: Konsola r2 və say dəyişənini çıxarın."
    ],
    teslimIzahi: "Asinxron Memoizasiya (Caching) verilənlər bazası və ya kənar API-lərdən təkrarlanan sorğuların qarşısını alaraq həm şəbəkə yükünü azaldır, həm də cavabvermə sürətini millisekundlara endirir."
  },
  {
    id: "exam-sec13-14",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Asinxron Parallellik Limiti (Async Concurrency Limiter)",
    serif: "Eyni anda 100-lərlə sorğunun serveri çökdürməməsi üçün aktiv paralel əməliyyatların sayını məhdudlaşdıran `parallelHovuz(tapshiriqlar, limit)` funksiyası qurun. 4 ədəd tapşırıqdan ibarət massiv verilib: hər biri öz ID-sini qaytarır. Limit=2 olarsa, ilk 2 tapşırıq işə düşməli, onlardan biri bitdikdə növbətisi başlamalıdır. Bütün tapşırıqlar tamamlandıqdan sonra nəticələri vergüllə ayrılmış şəkildə konsola çıxarın: '1, 2, 3, 4'.",
    gozlenilenCixis: "1, 2, 3, 4",
    starterCode: "async function parallelHovuz(tapshiriqlar, limit = 2) {\n  // Eyni anda maksimum limit sayda tapşırığı icra edin və res.join(', ') çıxarın\n}\n\n// 4 tapşırığı icra edin",
    solutionCode: "async function parallelHovuz(tapshiriqlar, limit = 2) {\n  const neticeler = [];\n  const icradaOlanlar = new Set();\n\n  for (const t of tapshiriqlar) {\n    const p = Promise.resolve().then(() => t()).then(res => {\n      neticeler.push(res);\n      icradaOlanlar.delete(p);\n    });\n    icradaOlanlar.add(p);\n    if (icradaOlanlar.size >= limit) {\n      await Promise.race(icradaOlanlar);\n    }\n  }\n  await Promise.all(icradaOlanlar);\n  return neticeler;\n}\n\nconst tapshiriqlar = [\n  () => Promise.resolve(1),\n  () => Promise.resolve(2),\n  () => Promise.resolve(3),\n  () => Promise.resolve(4)\n];\n\nparallelHovuz(tapshiriqlar, 2).then(res => console.log(res.join(', ')));",
    ipuclari: [
      "İpucu 1: icradaOlanlar Set-i cari işləyən Promise-ləri saxlayır.",
      "İpucu 2: Sayı limitə çatdıqda `await Promise.race(icradaOlanlar)` ilə ən azı birinin bitməsini gözləyin.",
      "İpucu 3: Dövrə bitdikdə qalanları Promise.all ilə tamamlayın və res.join(', ') ilə konsola çıxarın."
    ],
    teslimIzahi: "Parallellik hovuzu (Concurrency Limiter / Throttling) fayl yükləmələri, web-scraping və ya mikroxidmətlər arası kütləvi sorğularda şəbəkə və yaddaş tükənməsinin qarşısını alan kritik memarlıq həllidir."
  },
  {
    id: "exam-sec13-15",
    bolmeId: 13,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Asinxron Konveyer və İnteqrasiya Axını (Async Pipeline)",
    serif: "Asinxron mərhələlərdən ibarət ETL (Extract-Transform-Load) konveyeri qurun. `asinxronPipeline(...merheleler)` funksiyası ilkin məlumatı hər bir asinxron mərhələdən keçirməlidir. Mərhələlər: 1. `istifadeciniOxu(id)` -> `{ id, ad: 'Kənan', rol: 'istifadeci' }` qaytarır; 2. `rolYenile(user)` -> `{ ...user, rol: 'admin' }` edir; 3. `auditQeydEt(user)` -> `'AUDİT: ' + user.ad + ' (' + user.rol + ') təsdiqləndi'` stringini qaytarır. Konveyeri id=101 ilə işə salıb konsola çıxarın.",
    gozlenilenCixis: "AUDİT: Kənan (admin) təsdiqləndi",
    starterCode: "function asinxronPipeline(...merheleler) {\n  // reduce və async/await ilə pillələri ardıcıl ötürün\n}\n\n// 3 mərhələni hazırlayın və konveyerdən keçirin",
    solutionCode: "function asinxronPipeline(...merheleler) {\n  return async function(ilkinDeyer) {\n    return merheleler.reduce(async (kecmisPromise, cariMerhele) => {\n      const kecmisNetice = await kecmisPromise;\n      return cariMerhele(kecmisNetice);\n    }, Promise.resolve(ilkinDeyer));\n  };\n}\n\nconst istifadeciniOxu = async (id) => ({ id, ad: 'Kənan', rol: 'istifadeci' });\nconst rolYenile = async (user) => ({ ...user, rol: 'admin' });\nconst auditQeydEt = async (user) => `AUDİT: ${user.ad} (${user.rol}) təsdiqləndi`;\n\nconst pipeline = asinxronPipeline(istifadeciniOxu, rolYenile, auditQeydEt);\npipeline(101).then(res => console.log(res));",
    ipuclari: [
      "İpucu 1: merheleler.reduce ilə hər addımın Promise-ini await edib növbəti funksiyaya arqument kimi verin.",
      "İpucu 2: İlkin dəyər Promise.resolve(ilkinDeyer) olur.",
      "İpucu 3: Sonda nəticə string-i konsola çıxır."
    ],
    teslimIzahi: "Asinxron Konveyer (Pipeline) dizaynı böyük sistemlərdə məlumatın təmizlənməsi, daxili xidmətlərdən zənginləşdirilməsi və audit jurnallarına yazılması kimi mürəkkəb biznes proseslərini zərif və modulyar şəkildə orkestrasiya edir."
  }
];

const SEC_10_13_QUESTIONS = [
  ...SEC_10_QUESTIONS,
  ...SEC_11_QUESTIONS,
  ...SEC_12_QUESTIONS,
  ...SEC_13_QUESTIONS
];

module.exports = {
  SEC_10_QUESTIONS,
  SEC_11_QUESTIONS,
  SEC_12_QUESTIONS,
  SEC_13_QUESTIONS,
  SEC_10_13_QUESTIONS
};
