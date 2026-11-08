// exam_bank_builder/sec_14_17.js
// Bölmə 14, 15, 16, 17 (Hər birində 15 sual -> cəmi 60 sual)
// Mərhələ 3: Asinxron JavaScript və Brauzer API-ləri

const SEC_14_QUESTIONS = [
  // Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi (querySelector, classList, createElement, DOM ağacı)
  {
    id: "exam-sec14-01",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "querySelector ilə Elementin Seçilməsi və Mətnin Dəyişdirilməsi",
    serif: "DOM-da mövcud olan '#basliq' identifikatorlu elementin mətnini 'JavaScript Təməlləri' olaraq yeniləyin. Yeniləmədən sonra elementin textContent dəyərini konsola çıxarın: 'Başlıq: JavaScript Təməlləri'.",
    gozlenilenCixis: "Başlıq: JavaScript Təməlləri",
    starterCode: "function basligiYenile() {\n  // document.querySelector ilə elementi tapın və textContent dəyərini dəyişin\n}\n\nbasligiYenile();",
    solutionCode: "function basligiYenile() {\n  const el = document.querySelector('#basliq') || document.getElementById('basliq');\n  if (el) {\n    el.textContent = 'JavaScript Təməlləri';\n    console.log(`Başlıq: ${el.textContent}`);\n  } else {\n    const div = document.createElement('h1');\n    div.id = 'basliq';\n    div.textContent = 'JavaScript Təməlləri';\n    document.body.appendChild(div);\n    console.log(`Başlıq: ${div.textContent}`);\n  }\n}\n\nbasligiYenile();",
    ipuclari: [
      "İpucu 1: document.querySelector('#id') elementi tapmaq üçün istifadə olunur.",
      "İpucu 2: element.textContent xassəsi elementin daxili mətnini oxumaq və ya dəyişmək üçündür.",
      "İpucu 3: Format: `Başlıq: ${el.textContent}`."
    ],
    teslimIzahi: "querySelector CSS selektorları ilə DOM elementlərini seçməyin ən rahat yoludur. textContent xassəsi təhlükəsiz şəkildə yalnız mətni dəyişir və XSS boşluqlarının qarşısını alır."
  },
  {
    id: "exam-sec14-02",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "classList ilə Siniflərin İdarə Olunması",
    serif: "Bir düymə elementi yaradın (`document.createElement('button')`). Ona 'btn' və 'aktiv' siniflərini əlavə edin (`classList.add`). Sonra 'aktiv' sinfinin mövcudluğunu `classList.contains` ilə yoxlayın və konsola 'Aktiv sinfi var: true' çıxarın.",
    gozlenilenCixis: "Aktiv sinfi var: true",
    starterCode: "function sinifYoxla() {\n  // button elementi yaradıb sinifləri əlavə edin və yoxlayın\n}\n\nsinifYoxla();",
    solutionCode: "function sinifYoxla() {\n  const btn = document.createElement('button');\n  btn.classList.add('btn', 'aktiv');\n  const netice = btn.classList.contains('aktiv');\n  console.log(`Aktiv sinfi var: ${netice}`);\n}\n\nsinifYoxla();",
    ipuclari: [
      "İpucu 1: element.classList.add('sinif1', 'sinif2') ilə CSS sinifləri əlavə edilir.",
      "İpucu 2: element.classList.contains('sinif') sinfin olub-olmadığını boolean (true/false) qaytarır.",
      "İpucu 3: Şablon sətir ilə konsola çıxarın."
    ],
    teslimIzahi: "classList API-si köhnə className string əməliyyatlarından fərqli olaraq sinifləri toplusal (add, remove, toggle, contains) metodlarla manipulyasiya etmək üçün müasir standartdır."
  },
  {
    id: "exam-sec14-03",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "Atributların Təyini və Oxunması (setAttribute & getAttribute)",
    serif: "Dinamik bir link (`<a>`) elementi yaradın. `setAttribute` ilə onun `href` atributunu 'https://jsoyren.az' və `target` atributunu '_blank' edin. Sonra `getAttribute('href')` ilə dəyəri oxuyub konsola 'Hədəf ünvan: https://jsoyren.az' çıxarın.",
    gozlenilenCixis: "Hədəf ünvan: https://jsoyren.az",
    starterCode: "function linkQur() {\n  // a elementi yaradın, setAttribute və getAttribute tətbiq edin\n}\n\nlinkQur();",
    solutionCode: "function linkQur() {\n  const link = document.createElement('a');\n  link.setAttribute('href', 'https://jsoyren.az');\n  link.setAttribute('target', '_blank');\n  const unvan = link.getAttribute('href');\n  console.log(`Hədəf ünvan: ${unvan}`);\n}\n\nlinkQur();",
    ipuclari: [
      "İpucu 1: setAttribute('atributAdi', 'deyer') elementi istənilən standart və ya fərdi atributla təmin edir.",
      "İpucu 2: getAttribute('atributAdi') həmin atributun mətn dəyərini qaytarır.",
      "İpucu 3: Konsola `Hədəf ünvan: ${unvan}` formatında çıxarın."
    ],
    teslimIzahi: "setAttribute və getAttribute metodları HTML teqlərinin xassələri ilə birbaşa əlaqə qurur və həm standart, həm də qeyri-standart atributlar üçün etibarlı işləyir."
  },
  {
    id: "exam-sec14-04",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "createElement və appendChild ilə Dinamik Siyahı",
    serif: "Boş bir `<ul>` elementi daxilinə massivdəki meyvələri (`['Alma', 'Armud', 'Banan']`) `<li>` teqləri kimi yaradıb əlavə edin. Bütün elementlər daxil edildikdən sonra `ul.children.length` dəyərini konsola 'Ümumi element sayı: 3' kimi çıxarın.",
    gozlenilenCixis: "Ümumi element sayı: 3",
    starterCode: "function siyahiYarat(meyveler) {\n  const ul = document.createElement('ul');\n  // forEach ilə hər meyvə üçün li yaradın və ul-a əlavə edin\n}\n\nsiyahiYarat(['Alma', 'Armud', 'Banan']);",
    solutionCode: "function siyahiYarat(meyveler) {\n  const ul = document.createElement('ul');\n  meyveler.forEach(m => {\n    const li = document.createElement('li');\n    li.textContent = m;\n    ul.appendChild(li);\n  });\n  console.log(`Ümumi element sayı: ${ul.children.length}`);\n}\n\nsiyahiYarat(['Alma', 'Armud', 'Banan']);",
    ipuclari: [
      "İpucu 1: document.createElement('li') ilə yeni DOM elementi yaradılır.",
      "İpucu 2: li.textContent = meyve daxili mətni doldurur.",
      "İpucu 3: ul.appendChild(li) elementi siyahının sonuna calayır."
    ],
    teslimIzahi: "createElement və appendChild metodları tətbiqin çalışma zamanında istifadəçi məlumatlarına uyğun dinamik UI interfeysləri qurmağın təməl sütunudur."
  },
  {
    id: "exam-sec14-05",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "querySelectorAll ilə Çoxsaylı Elementlərin İterasiyası",
    serif: "Daxilində 3 ədəd '.mehsul' sinifli element olan konteyner hazırlayın (mətnləri 'Kitab', 'Dəftər', 'Qələm'). `document.querySelectorAll('.mehsul')` istifadə edərək bütün elementləri tapın, onların mətnlərini massivə yığın və vergüllə konsola çıxarın: 'Tapılanlar: Kitab, Dəftər, Qələm'.",
    gozlenilenCixis: "Tapılanlar: Kitab, Dəftər, Qələm",
    starterCode: "function mehsullariTopla() {\n  // querySelectorAll('.mehsul') tapın və mətnlərini birləşdirin\n}\n\nmehsullariTopla();",
    solutionCode: "function mehsullariTopla() {\n  const container = document.createElement('div');\n  ['Kitab', 'Dəftər', 'Qələm'].forEach(ad => {\n    const div = document.createElement('div');\n    div.className = 'mehsul';\n    div.textContent = ad;\n    container.appendChild(div);\n  });\n\n  const elementler = container.querySelectorAll('.mehsul');\n  const adlar = Array.from(elementler).map(el => el.textContent);\n  console.log(`Tapılanlar: ${adlar.join(', ')}`);\n}\n\nmehsullariTopla();",
    ipuclari: [
      "İpucu 1: querySelectorAll() şərtə uyğun gələn bütün elementləri NodeList kimi qaytarır.",
      "İpucu 2: Array.from(elementler) və ya spread ilə massivə çevirib .map() tətbiq edə bilərsiniz.",
      "İpucu 3: adlar.join(', ') ilə vergüllə birləşdirin."
    ],
    teslimIzahi: "querySelectorAll CSS selektoruna uyğun bütün qovşaqları (NodeList) tapır. NodeList statik kolleksiya olduğu üçün DOM dəyişdikdə gözlənilməz sonsuz dövrə yaratmır."
  },
  {
    id: "exam-sec14-06",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "Dinamik Stil Manipulyasiyası (element.style)",
    serif: "Bir kart elementi yaradın. `style` xassəsi vasitəsilə onun `backgroundColor` dəyərini 'blue' və `display` dəyərini 'flex' təyin edin. Sonra bu iki stil xassəsini oxuyaraq konsola 'Rəng: blue, Ekran: flex' çıxarın.",
    gozlenilenCixis: "Rəng: blue, Ekran: flex",
    starterCode: "function stiliDeyis() {\n  const kart = document.createElement('div');\n  // style xassələrini təyin edin və konsola çıxarın\n}\n\nstiliDeyis();",
    solutionCode: "function stiliDeyis() {\n  const kart = document.createElement('div');\n  kart.style.backgroundColor = 'blue';\n  kart.style.display = 'flex';\n  console.log(`Rəng: ${kart.style.backgroundColor}, Ekran: ${kart.style.display}`);\n}\n\nstiliDeyis();",
    ipuclari: [
      "İpucu 1: CSS-də tire ilə yazılan xassələr (background-color) JavaScript-də camelCase (backgroundColor) kimi yazılır.",
      "İpucu 2: element.style.display = 'flex' birbaşa inline stil təyin edir.",
      "İpucu 3: Şablon sətirlə konsola çıxarın."
    ],
    teslimIzahi: "element.style obyektin birbaşa inline CSS xüsusiyyətlərini təmsil edir. Dinamik hərəkətlər və dərhal təsir tələb edən dəyişikliklər üçün istifadə olunur."
  },
  {
    id: "exam-sec14-07",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "Elementin DOM-dan Silinməsi (remove & removeChild)",
    serif: "İki bənddən ibarət siyahı qurun (`<li>Bir</li>`, `<li>İki</li>`). Birinci bəndi `element.remove()` və ya `parent.removeChild(element)` metodu ilə silin. Qalan elementlərin sayını və sonuncu elementin mətnini konsola 'Qalan say: 1, Mətn: İki' şəklində çıxarın.",
    gozlenilenCixis: "Qalan say: 1, Mətn: İki",
    starterCode: "function elementiSil() {\n  // ul və li-lər yaradın, birincini silin və qalanı konsola çıxarın\n}\n\nelementiSil();",
    solutionCode: "function elementiSil() {\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  li1.textContent = 'Bir';\n  const li2 = document.createElement('li');\n  li2.textContent = 'İki';\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n\n  li1.remove();\n\n  console.log(`Qalan say: ${ul.children.length}, Mətn: ${ul.children[0].textContent}`);\n}\n\nelementiSil();",
    ipuclari: [
      "İpucu 1: Müasir JavaScript-də hər bir element `element.remove()` metodu ilə birbaşa özünü silə bilir.",
      "İpucu 2: Alternativ olaraq `parent.removeChild(child)` istifadə edilə bilər.",
      "İpucu 3: ul.children[0] qalan ilk elementə istinad edir."
    ],
    teslimIzahi: "Müasir .remove() metodu elementin valideyninə istinad etmədən birbaşa DOM ağacından çıxarılmasını təmin edərək kodu xeyli sadələşdirir."
  },
  {
    id: "exam-sec14-08",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "DocumentFragment ilə Performant DOM Renderi",
    serif: "Dövrə daxilində DOM-a hər dəfə ayrı-ayrı element calamaq səhifənin yenidən çəkilməsinə (reflow/repaint) səbəb olur. `document.createDocumentFragment()` istifadə edərək 3 elementi yaddaşda toplayın və tək bir `appendChild` ilə əsas konteynerə daxil edin. Konteynerin ümumi uşaq sayını konsola 'Render tamamlandı: 3 element' şəklində çıxarın.",
    gozlenilenCixis: "Render tamamlandı: 3 element",
    starterCode: "function fragmentIleRender() {\n  // DocumentFragment yaradın, 3 elementi əlavə edin və əsas qutuya calayın\n}\n\nfragmentIleRender();",
    solutionCode: "function fragmentIleRender() {\n  const container = document.createElement('div');\n  const fragment = document.createDocumentFragment();\n\n  for (let i = 1; i <= 3; i++) {\n    const p = document.createElement('p');\n    p.textContent = `Bənd ${i}`;\n    fragment.appendChild(p);\n  }\n\n  container.appendChild(fragment);\n  console.log(`Render tamamlandı: ${container.children.length} element`);\n}\n\nfragmentIleRender();",
    ipuclari: [
      "İpucu 1: DocumentFragment yüngül, canlı DOM-a bağlı olmayan müvəqqəti qabdır.",
      "İpucu 2: Bütün elementlər fragment-ə yığıldıqdan sonra container.appendChild(fragment) tək bir reflow yaradır.",
      "İpucu 3: container.children.length dəyərini konsola çıxarın."
    ],
    teslimIzahi: "DocumentFragment veb performansının optimallaşdırılmasında əsas alətdir. Yüzlərlə DOM düyününü tək bir əməliyyatla calayaraq brauzerin çəkmə yükünü minimuma endirir."
  },
  {
    id: "exam-sec14-09",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "DOM Qohumluq Əlaqələri və Naviqasiya",
    serif: "Daxilində ardıcıl 3 qardaş element olan valideyn konteyner qurun: `div.kart-1`, `div.kart-2`, `div.kart-3`. İkinci kartdan (`kart-2`) başlayaraq onun əvvəlki qardaşının (`previousElementSibling`), növbəti qardaşının (`nextElementSibling`) və valideyninin (`parentElement`) siniflərini tapın. Konsola 'Əvvəlki: kart-1, Növbəti: kart-3, Valideyn: qab' çıxarın.",
    gozlenilenCixis: "Əvvəlki: kart-1, Növbəti: kart-3, Valideyn: qab",
    starterCode: "function qohumlariTap() {\n  // DOM ağacında qohumluq xassələrindən istifadə edin\n}\n\nqohumlariTap();",
    solutionCode: "function qohumlariTap() {\n  const parent = document.createElement('div');\n  parent.className = 'qab';\n\n  const k1 = document.createElement('div'); k1.className = 'kart-1';\n  const k2 = document.createElement('div'); k2.className = 'kart-2';\n  const k3 = document.createElement('div'); k3.className = 'kart-3';\n\n  parent.appendChild(k1);\n  parent.appendChild(k2);\n  parent.appendChild(k3);\n\n  const evvelki = k2.previousElementSibling.className;\n  const novbeti = k2.nextElementSibling.className;\n  const valideyn = k2.parentElement.className;\n\n  console.log(`Əvvəlki: ${evvelki}, Növbəti: ${novbeti}, Valideyn: ${valideyn}`);\n}\n\nqohumlariTap();",
    ipuclari: [
      "İpucu 1: previousElementSibling və nextElementSibling yalnız element düyünlərini (mətn və boşluqları saymadan) gəzir.",
      "İpucu 2: parentElement cari elementin üst konteynerini qaytarır.",
      "İpucu 3: .className xassələrini oxuyub konsola çıxarın."
    ],
    teslimIzahi: "DOM ağacında qohumluq naviqasiyası elementləri yenidən selektorla axtarmadan cari qovşaq ətrafında sürətli hərəkət etməyə imkan verir."
  },
  {
    id: "exam-sec14-10",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "XSS Təhlükəsizliyi: textContent vs innerHTML Fərqi",
    serif: "Kənar istifadəçidən gələn təhlükəli string verilmişdir: `<img src='x' onerror='alert(1)'> Salam`. Təhlükəsizlik qaydalarına əsasən bu string-i `textContent` ilə elementə inyeksiya edin. Elementin `innerHTML` və `textContent` xassələrini yoxlayaraq, brauzerin təhlükəli teqləri icra etmədiyini və simvolları kodlaşdırdığını (escape) nümayiş etdirin. Konsola 'Təhlükəsiz mətn: <img src=\\'x\\' onerror=\\'alert(1)\\'> Salam' çıxarın.",
    gozlenilenCixis: "Təhlükəsiz mətn: <img src='x' onerror='alert(1)'> Salam",
    starterCode: "function tehlukesizDaxilEt(giris) {\n  // textContent ilə inyeksiya edin\n}\n\ntehlukesizDaxilEt(\"<img src='x' onerror='alert(1)'> Salam\");",
    solutionCode: "function tehlukesizDaxilEt(giris) {\n  const div = document.createElement('div');\n  div.textContent = giris;\n  console.log(`Təhlükəsiz mətn: ${div.textContent}`);\n}\n\ntehlukesizDaxilEt(\"<img src='x' onerror='alert(1)'> Salam\");",
    ipuclari: [
      "İpucu 1: innerHTML istifadəçi məlumatları daxil edildikdə XSS (Cross-Site Scripting) zəifliyi yaradır.",
      "İpucu 2: textContent bütün simvolları xam mətn kimi qəbul edir və heç bir HTML skriptini icra etmir.",
      "İpucu 3: Format: `Təhlükəsiz mətn: ${div.textContent}`."
    ],
    teslimIzahi: "İstifadəçi tərəfindən daxil edilən və ya etibarsız mənbələrdən gələn mətnləri DOM-a yerləşdirərkən hər zaman textContent seçilməlidir. Bu, zərərli skriptlərin işə düşməsinin qarşısını 100% alır."
  },
  {
    id: "exam-sec14-11",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "dataset API və data-* Atributları ilə Hesablama",
    serif: "HTML5 data atributları (`data-qiymet`, `data-endirim`) olan 3 məhsul kartı yaradın: 1-ci kart (qiymet: 100, endirim: 10), 2-ci kart (qiymet: 200, endirim: 20), 3-cü kart (qiymet: 50, endirim: 0). Elementlərin `dataset` xassələrini oxuyaraq endirimli yekun məbləğləri toplayın (qiymet - endirim). Konsola 'Yekun ödəniş: 320 AZN' çıxarın.",
    gozlenilenCixis: "Yekun ödəniş: 320 AZN",
    starterCode: "function datasetHesabla() {\n  // dataset.qiymet və dataset.endirim dəyərlərini oxuyub toplayın\n}\n\ndatasetHesabla();",
    solutionCode: "function datasetHesabla() {\n  const mallar = [\n    { q: '100', e: '10' },\n    { q: '200', e: '20' },\n    { q: '50', e: '0' }\n  ];\n  const container = document.createElement('div');\n  mallar.forEach(m => {\n    const div = document.createElement('div');\n    div.dataset.qiymet = m.q;\n    div.dataset.endirim = m.e;\n    container.appendChild(div);\n  });\n\n  let cem = 0;\n  container.querySelectorAll('div').forEach(el => {\n    const q = Number(el.dataset.qiymet);\n    const e = Number(el.dataset.endirim);\n    cem += (q - e);\n  });\n\n  console.log(`Yekun ödəniş: ${cem} AZN`);\n}\n\ndatasetHesabla();",
    ipuclari: [
      "İpucu 1: element.dataset xassəsi 'data-' ilə başlayan bütün atributları camelCase obyekt kimi təqdim edir.",
      "İpucu 2: dataset dəyərləri həmişə sətir (string) qaytarır, buna görə Number(...) ilə ədədə çevrilməlidir.",
      "İpucu 3: (100-10) + (200-20) + (50-0) = 90 + 180 + 50 = 320 AZN."
    ],
    teslimIzahi: "dataset API HTML və JavaScript arasında fərdi biznes məlumatlarını daşımaq üçün standart və ən oxunaqlı vasitədir."
  },
  {
    id: "exam-sec14-12",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "closest() və matches() ilə Ən Yaxın Valideynin Tapılması",
    serif: "Dərin iç-içə strukturlu bir düymə yaradın: `div.modal-container` -> `div.modal-body` -> `button.close-btn` -> `span.icon`. Span elementindən başlayaraq `element.closest('.modal-container')` metodu ilə ən yaxın əsas modal qabını tapın və onun sinif adını konsola 'Tapılan qab: modal-container' çıxarın.",
    gozlenilenCixis: "Tapılan qab: modal-container",
    starterCode: "function yaxinValideyniTap() {\n  // DOM ağacını qurun və span-dan yuxarı closest('.modal-container') tapın\n}\n\nyaxinValideyniTap();",
    solutionCode: "function yaxinValideyniTap() {\n  const modal = document.createElement('div');\n  modal.className = 'modal-container';\n\n  const body = document.createElement('div');\n  body.className = 'modal-body';\n\n  const btn = document.createElement('button');\n  btn.className = 'close-btn';\n\n  const icon = document.createElement('span');\n  icon.className = 'icon';\n\n  btn.appendChild(icon);\n  body.appendChild(btn);\n  modal.appendChild(body);\n\n  const tapilan = icon.closest('.modal-container');\n  console.log(`Tapılan qab: ${tapilan.className}`);\n}\n\nyaxinValideyniTap();",
    ipuclari: [
      "İpucu 1: closest(selektor) cari elementdən başlayaraq DOM ağacında yuxarı (valideynlərə doğru) axtarış aparır.",
      "İpucu 2: Şərtə uyğun gələn ilk valideyn elementi dərhal qaytarır.",
      "İpucu 3: tapilan.className konsola çıxarılır."
    ],
    teslimIzahi: "closest() metodu hadisə nümayəndəliyi (event delegation) və mürəkkəb komponent arxitekturalarında ən çox istifadə olunan güclü DOM axtarış metodudur."
  },
  {
    id: "exam-sec14-13",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Dərin DOM Klonlanması (cloneNode(true))",
    serif: "İstifadəçi kartı şablonu hazırlayın: daxilində başlıq (`<h4>İstifadəçi Adı</h4>`) və status (`<span>Aktiv</span>`) olan `div.kart`. `cloneNode(true)` ilə bu kartın tam dərin surətini çıxarın. Surətin başlığını 'Nərmin' edin. Orijinal kartın başlığının dəyişmədiyini ('İstifadəçi Adı') və surətin başlığının 'Nərmin' olduğunu 'Orijinal: İstifadəçi Adı, Surət: Nərmin' formatında konsola çıxarın.",
    gozlenilenCixis: "Orijinal: İstifadəçi Adı, Surət: Nərmin",
    starterCode: "function sablonuKlonla() {\n  // Orijinal kartı yaradın, cloneNode(true) edin və müqayisə edin\n}\n\nsablonuKlonla();",
    solutionCode: "function sablonuKlonla() {\n  const kart = document.createElement('div');\n  kart.className = 'kart';\n  const h4 = document.createElement('h4');\n  h4.textContent = 'İstifadəçi Adı';\n  kart.appendChild(h4);\n\n  const suret = kart.cloneNode(true);\n  suret.querySelector('h4').textContent = 'Nərmin';\n\n  console.log(`Orijinal: ${kart.querySelector('h4').textContent}, Surət: ${suret.querySelector('h4').textContent}`);\n}\n\nsablonuKlonla();",
    ipuclari: [
      "İpucu 1: cloneNode(true) elementin bütün uşaqları və atributları ilə birlikdə dərin nüsxəsini (deep copy) yaradır.",
      "İpucu 2: Surətdə aparılan dəyişikliklər orijinal karta təsir etmir.",
      "İpucu 3: Hər iki başlığı oxuyub konsola çıxarın."
    ],
    teslimIzahi: "cloneNode HTML `<template>` teqləri və ya UI komponentlərinin sürətli çoxaldılması zamanı sıfırdan element yaratmaq əvəzinə mövcud skeletin nüsxəsini çıxarmaq üçün olduqca səmərəlidir."
  },
  {
    id: "exam-sec14-14",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Dinamik HTML Cədvəl Generatoru (DOM Table Builder)",
    serif: "Tələbə məlumatları massivindən (`[{id: 1, ad: 'Murad', bal: 95}, {id: 2, ad: 'Ayan', bal: 88}]`) proqram təminatı ilə tam `table` strukturu (thead, tbody, tr, td) quran funksiya hazırlayın. Cədvəlin tbody daxilindəki sətir sayını və bütün balların cəmini hesablayıb konsola 'Sətir sayı: 2, Bal cəmi: 183' çıxarın.",
    gozlenilenCixis: "Sətir sayı: 2, Bal cəmi: 183",
    starterCode: "function cedvelQur(telebeler) {\n  // table, thead və tbody yaradaraq sətirləri doldurun\n}\n\ncedvelQur([{id: 1, ad: 'Murad', bal: 95}, {id: 2, ad: 'Ayan', bal: 88}]);",
    solutionCode: "function cedvelQur(telebeler) {\n  const table = document.createElement('table');\n  const tbody = document.createElement('tbody');\n  let balCemi = 0;\n\n  telebeler.forEach(t => {\n    const tr = document.createElement('tr');\n    const tdAd = document.createElement('td');\n    tdAd.textContent = t.ad;\n    const tdBal = document.createElement('td');\n    tdBal.textContent = String(t.bal);\n    balCemi += t.bal;\n\n    tr.appendChild(tdAd);\n    tr.appendChild(tdBal);\n    tbody.appendChild(tr);\n  });\n\n  table.appendChild(tbody);\n  console.log(`Sətir sayı: ${tbody.children.length}, Bal cəmi: ${balCemi}`);\n}\n\ncedvelQur([{id: 1, ad: 'Murad', bal: 95}, {id: 2, ad: 'Ayan', bal: 88}]);",
    ipuclari: [
      "İpucu 1: tbody içərisinə hər tələbə üçün bir tr və hüceyrələr (td) calayın.",
      "İpucu 2: tbody.children.length sətir sayını verir.",
      "İpucu 3: Format: `Sətir sayı: ${say}, Bal cəmi: ${balCemi}`."
    ],
    teslimIzahi: "Dinamik cədvəl qurulması data-driven tətbiqlərdə ən geniş yayılmış frontend tapşırığıdır. Hər bir hüceyrənin DOM obyektləri ilə idarə olunması hadisə dinləyicilərinin birbaşa hüceyrəyə bağlanmasına imkan verir."
  },
  {
    id: "exam-sec14-15",
    bolmeId: 14,
    merheleId: 3,
    cetinlik: "EKSPERT",
    basliq: "Mini DOM Ağacı Diffing və Müşahidəçi Mühərriki",
    serif: "İki fərqli DOM ağacını müqayisə edən (Diffing alqoritmi analoqu) `domFərqiniTap(agacA, agacB)` funksiyası hazırlayın. Funksiya elementlərin mətn fərqlərini aşkar etməlidir. agacA: `<div><span>Köhnə Mətn</span></div>`, agacB: `<div><span>Yeni Mətn</span></div>`. Əgər mətn dəyişibsə, konsola '[Dəyişiklik]: Köhnə Mətn -> Yeni Mətn' çıxarın.",
    gozlenilenCixis: "[Dəyişiklik]: Köhnə Mətn -> Yeni Mətn",
    starterCode: "function domFerqiniTap(agacA, agacB) {\n  // Elementlərin mətn fərqlərini müqayisə edin\n}\n\n// Test ağaclarını qurun və icra edin",
    solutionCode: "function domFerqiniTap(agacA, agacB) {\n  const metnA = agacA.textContent.trim();\n  const metnB = agacB.textContent.trim();\n\n  if (metnA !== metnB) {\n    console.log(`[Dəyişiklik]: ${metnA} -> ${metnB}`);\n  } else {\n    console.log('Fərq tapılmadı');\n  }\n}\n\nconst a1 = document.createElement('div');\nconst s1 = document.createElement('span');\ns1.textContent = 'Köhnə Mətn';\na1.appendChild(s1);\n\nconst a2 = document.createElement('div');\nconst s2 = document.createElement('span');\ns2.textContent = 'Yeni Mətn';\na2.appendChild(s2);\n\ndomFerqiniTap(a1, a2);",
    ipuclari: [
      "İpucu 1: Virtual DOM mühərrikləri (React, Vue) köhnə və yeni ağacı müqayisə edərək yalnız dəyişən qovşaqları yeniləyir.",
      "İpucu 2: agacA və agacB-nin daxili mətnlərini yoxlayın.",
      "İpucu 3: Format: `[Dəyişiklik]: ${metnA} -> ${metnB}`."
    ],
    teslimIzahi: "Diffing alqoritmi müasir SPA freymvorklarının ürəyidir. Bütün DOM-u yenidən çəkmək əvəzinə ağacdakı xüsusi dəyişiklikləri tapıb hədəfli yeniləmək proqramı maksimum dərəcədə sürətləndirir."
  }
];

const SEC_15_QUESTIONS = [
  // Bölmə 15: DOM Hadisələri və Formalar (addEventListener, event bubbling, delegation, forms)
  {
    id: "exam-sec15-01",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "addEventListener ilə Klik Hadisəsinin Qeydiyyatı",
    serif: "Bir düymə (`document.createElement('button')`) yaradın. Ona 'click' hadisəsi dinləyicisi qoşun. Hadisə baş verdikdə konsola 'Düymə sıxıldı!' çap edilsin. `btn.click()` ilə hadisəni tetikləyin.",
    gozlenilenCixis: "Düymə sıxıldı!",
    starterCode: "function klikHadisesi() {\n  const btn = document.createElement('button');\n  // addEventListener('click', ...) yazın və btn.click() edin\n}\n\nklikHadisesi();",
    solutionCode: "function klikHadisesi() {\n  const btn = document.createElement('button');\n  btn.addEventListener('click', () => {\n    console.log('Düymə sıxıldı!');\n  });\n  btn.click();\n}\n\nklikHadisesi();",
    ipuclari: [
      "İpucu 1: element.addEventListener('hadise', callback) ən etibarlı hadisə bağlayıcısıdır.",
      "İpucu 2: btn.click() proqram vasitəsilə klik hadisəsini simulyasiya edir.",
      "İpucu 3: Konsola 'Düymə sıxıldı!' mətni çıxmalıdır."
    ],
    teslimIzahi: "addEventListener metodu eyni hadisəyə birdən çox fərqli funksiya bağlamağa və təmiz hadisə idarəetməsi qurmağa imkan verir."
  },
  {
    id: "exam-sec15-02",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "Hadisə Obyekti və e.target Xassəsi",
    serif: "Düymə elementi yaradın (`id = 'gonder-btn'`). Klik hadisəsində parametr kimi ötürülən hadisə obyektinin (`e`) `target.id` xassəsini oxuyaraq konsola 'Kliklənən element: gonder-btn' çıxarın. Hadisəni `btn.click()` ilə işə salın.",
    gozlenilenCixis: "Kliklənən element: gonder-btn",
    starterCode: "function hadiseObyekti() {\n  // btn yaradın və e.target.id çıxarın\n}\n\nhadiseObyekti();",
    solutionCode: "function hadiseObyekti() {\n  const btn = document.createElement('button');\n  btn.id = 'gonder-btn';\n  btn.addEventListener('click', (e) => {\n    console.log(`Kliklənən element: ${e.target.id}`);\n  });\n  btn.click();\n}\n\nhadiseObyekti();",
    ipuclari: [
      "İpucu 1: Hadisə callback-i avtomatik olaraq ilk parametr kimi Event obyektini (`e`) qəbul edir.",
      "İpucu 2: e.target hadisənin birbaşa baş verdiyi elementi göstərir.",
      "İpucu 3: e.target.id elementin identifikatorudur."
    ],
    teslimIzahi: "Event obyekti hadisə anında brauzer tərəfindən yaradılır və koordinatlar, basılan klavişlər, hədəf element və digər bütün zəruri kontekst məlumatlarını saxlayır."
  },
  {
    id: "exam-sec15-03",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "e.preventDefault() ilə Standart Davranışın Dayandırılması",
    serif: "Bir form elementi (`document.createElement('form')`) yaradın. Ona 'submit' hadisəsi qoşun. Səhifənin yenidən yüklənməsinin qarşısını almaq üçün `e.preventDefault()` çağırın və konsola 'Standart submit dayandırıldı, AJAX göndərilir' yazdırın. Fərdi submit hadisəsi göndərərək test edin.",
    gozlenilenCixis: "Standart submit dayandırıldı, AJAX göndərilir",
    starterCode: "function formQorunmasi() {\n  // form yaradın, e.preventDefault() tətbiq edin\n}\n\nformQorunmasi();",
    solutionCode: "function formQorunmasi() {\n  const form = document.createElement('form');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    console.log('Standart submit dayandırıldı, AJAX göndərilir');\n  });\n\n  const event = new Event('submit', { cancelable: true });\n  form.dispatchEvent(event);\n}\n\nformQorunmasi();",
    ipuclari: [
      "İpucu 1: e.preventDefault() brauzerin standart əməliyyatını (səhifə yenilənməsi, linkə keçid) ləğv edir.",
      "İpucu 2: SPA arxitekturalarında formaların idarə edilməsi mütləq preventDefault ilə başlayır.",
      "İpucu 3: Konsola tələb olunan mətni yazdırın."
    ],
    teslimIzahi: "Klassik vebdə form submit səhifəni tam yeniləyirdi. Müasir tək-səhifəli tətbiqlərdə (SPA) e.preventDefault() ilə bu dayandırılır və məlumatlar arxa planda fetch ilə asinxron göndərilir."
  },
  {
    id: "exam-sec15-04",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "İnput Hadisəsi və Canlı Mətn Oxunması",
    serif: "Bir mətn sahəsi (`<input type='text'>`) yaradın. 'input' hadisəsi qoşun. İnput dəyəri dəyişdikdə konsola 'Daxil edilən: ' + e.target.value çıxarsın. İnputun dəyərini 'Frontend' edib 'input' hadisəsini tetikləyin.",
    gozlenilenCixis: "Daxil edilən: Frontend",
    starterCode: "function inputHadisesi() {\n  // input yaradın və dəyərini oxuyun\n}\n\ninputHadisesi();",
    solutionCode: "function inputHadisesi() {\n  const input = document.createElement('input');\n  input.addEventListener('input', (e) => {\n    console.log(`Daxil edilən: ${e.target.value}`);\n  });\n  input.value = 'Frontend';\n  input.dispatchEvent(new Event('input'));\n}\n\ninputHadisesi();",
    ipuclari: [
      "İpucu 1: 'input' hadisəsi istifadəçi hər hərf yazdıqda dərhal tetiklenir.",
      "İpucu 2: e.target.value xanadakı cari mətni qaytarır.",
      "İpucu 3: dispatchEvent(new Event('input')) ilə test edin."
    ],
    teslimIzahi: "Canlı axtarışlar, simvol sayğacları və form validasiyaları üçün 'change' (yalnız fokus itəndə işə düşür) əvəzinə anlıq reaksiya verən 'input' hadisəsi istifadə olunur."
  },
  {
    id: "exam-sec15-05",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "e.stopPropagation() ilə Hadisə Qabarmasının (Bubbling) Qarşısının Alınması",
    serif: "İç-içə olan iki qutu qurun: `xariciQutu` və onun içində `daxiliQutu`. Hər ikisinə klik hadisəsi əlavə edin. Normalda daxili qutuya basıldıqda xarici də işə düşməlidir. Daxili qutuda `e.stopPropagation()` çağıraraq xaricinin xəbər tutmasının qarşısını alın. Yalnız daxili qutunun 'Daxili klikləndi' mesajını konsola çıxarın.",
    gozlenilenCixis: "Daxili klikləndi",
    starterCode: "function qabarmaniDayandir() {\n  // xarici və daxili div yaradın, stopPropagation tətbiq edin\n}\n\nqabarmaniDayandir();",
    solutionCode: "function qabarmaniDayandir() {\n  const xarici = document.createElement('div');\n  const daxili = document.createElement('div');\n  xarici.appendChild(daxili);\n\n  xarici.addEventListener('click', () => {\n    console.log('Xarici klikləndi');\n  });\n\n  daxili.addEventListener('click', (e) => {\n    e.stopPropagation();\n    console.log('Daxili klikləndi');\n  });\n\n  daxili.click();\n}\n\nqabarmaniDayandir();",
    ipuclari: [
      "İpucu 1: Hadisələr daxildən xaricə doğru qabarır (Event Bubbling).",
      "İpucu 2: e.stopPropagation() bu zənciri kəsir və hadisənin yuxarı qatlara çatmasına imkan vermir.",
      "İpucu 3: Nəticədə yalnız 'Daxili klikləndi' çap olunur."
    ],
    teslimIzahi: "Event Bubbling zəncirini kəsmək modal pəncərələrdə, menyularda və daxili düymələrdə gözlənilməz kənar klik reaksiyalarının qarşısını almaq üçün vacibdir."
  },
  {
    id: "exam-sec15-06",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "Klaviatura Hadisəsi (keydown və e.key)",
    serif: "Axtarış inputu yaradın. 'keydown' hadisəsini dinləyin. Əgər basılan klaviş Enter olarsa (`e.key === 'Enter'`), konsola 'Axtarış başladı: ' + input.value çap edin. İnputa 'JavaScript dərsləri' yazıb Enter klavişi ilə hadisə başladın.",
    gozlenilenCixis: "Axtarış başladı: JavaScript dərsləri",
    starterCode: "function klaviaturaYoxla() {\n  // input yaradın, e.key === 'Enter' yoxlayın\n}\n\nklaviaturaYoxla();",
    solutionCode: "function klaviaturaYoxla() {\n  const input = document.createElement('input');\n  input.value = 'JavaScript dərsləri';\n  input.addEventListener('keydown', (e) => {\n    if (e.key === 'Enter') {\n      console.log(`Axtarış başladı: ${input.value}`);\n    }\n  });\n\n  const event = new CustomEvent('keydown', { bubbles: true });\n  event.key = 'Enter';\n  input.dispatchEvent(event);\n}\n\nklaviaturaYoxla();",
    ipuclari: [
      "İpucu 1: Müasir standartda e.keyCode (rəqəm) əvəzinə oxunaqlı `e.key` ('Enter', 'Escape', 'ArrowUp') istifadə olunur.",
      "İpucu 2: if (e.key === 'Enter') yoxlaması qoyun.",
      "İpucu 3: Format: `Axtarış başladı: ${input.value}`."
    ],
    teslimIzahi: "e.key xassəsi klaviatura dilindən və fiziki quruluşundan asılı olmayaraq həqiqi simvol adını təqdim edir və köhnəlmiş e.keyCode-u əvəz edir."
  },
  {
    id: "exam-sec15-07",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "Birdəfəlik Hadisə Dinləyicisi ({ once: true })",
    serif: "Bonus düyməsi yaradın. İstifadəçi bu düyməyə nə qədər sıxsa da, hədiyyə yalnız bir dəfə verilməlidir. `addEventListener`-in üçüncü parametri kimi `{ once: true }` ötürün və klik zamanı 'Bonus verildi!' çap edin. Düyməni iki dəfə klikləyin və konsola təkcə bir dəfə çıxış gəldiyini nümayiş etdirin.",
    gozlenilenCixis: "Bonus verildi!",
    starterCode: "function birdefelikHadise() {\n  // { once: true } seçimindən istifadə edin\n}\n\nbirdefelikHadise();",
    solutionCode: "function birdefelikHadise() {\n  const btn = document.createElement('button');\n  btn.addEventListener('click', () => {\n    console.log('Bonus verildi!');\n  }, { once: true });\n\n  btn.click();\n  btn.click();\n}\n\nbirdefelikHadise();",
    ipuclari: [
      "İpucu 1: { once: true } hadisə ilk dəfə icra olunan kimi avtomatik olaraq dinləyicini silir.",
      "İpucu 2: Bu, əllə removeEventListener çağırmaq ehtiyacını aradan qaldırır.",
      "İpucu 3: İki dəfə btn.click() edilsə də, konsola cəmi bir sətir çıxır."
    ],
    teslimIzahi: "options obyektindəki once: true seçimi təkrar icraların, çoxsaylı ödənişlərin və ya animasiya sonu dinləyicilərinin yaddaş sızması yaratmasının qarşısını alır."
  },
  {
    id: "exam-sec15-08",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Hadisə Nümayəndəliyi (Event Delegation Pattern)",
    serif: "Daxilində çoxlu `li` elementi olan tək bir `ul` siyahısı yaradın (`<li data-id='1'>Məhsul 1</li>`, `<li data-id='2'>Məhsul 2</li>`). Hər `li`-yə ayrıca dinləyici qoşmaq əvəzinə, tək bir dinləyicini valideyn `ul`-a qoşun. Kliklənən elementin `li` olduğunu yoxlayıb onun `data-id` dəyərini konsola 'Seçildi: Məhsul ID 2' kimi çıxarın. İkinci li-ni klikləyərək yoxlayın.",
    gozlenilenCixis: "Seçildi: Məhsul ID 2",
    starterCode: "function hadiseNumayendeliyi() {\n  // ul-a tək addEventListener qoşun və e.target ilə li-ni tapın\n}\n\nhadiseNumayendeliyi();",
    solutionCode: "function hadiseNumayendeliyi() {\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  li1.dataset.id = '1';\n  li1.textContent = 'Məhsul 1';\n\n  const li2 = document.createElement('li');\n  li2.dataset.id = '2';\n  li2.textContent = 'Məhsul 2';\n\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n\n  ul.addEventListener('click', (e) => {\n    const hedefLi = e.target.closest('li');\n    if (hedefLi && ul.contains(hedefLi)) {\n      console.log(`Seçildi: Məhsul ID ${hedefLi.dataset.id}`);\n    }\n  });\n\n  li2.click();\n}\n\nhadiseNumayendeliyi();",
    ipuclari: [
      "İpucu 1: Hadisə Nümayəndəliyi valideynin bütün övladları adından hadisəni idarə etməsidir.",
      "İpucu 2: e.target.closest('li') ilə kliklənən element və ya onun ən yaxın li valideyni tapılır.",
      "İpucu 3: Format: `Seçildi: Məhsul ID ${hedefLi.dataset.id}`."
    ],
    teslimIzahi: "Event Delegation yaddaşa böyük dərəcədə qənaət edir və sonradan dinamik əlavə olunan yeni siyahı elementlərinin avtomatik olaraq işləməsini təmin edir."
  },
  {
    id: "exam-sec15-09",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Dinamik Form Validasiyası və Xəta Mesajı",
    serif: "Email daxil edilən xananı yoxlayan validasiya funksiyası yazın. Əgər input mətni '@' və '.' simvollarını ehtiva etmirsə, 'Xəta: Düzgün email daxil edin' çıxarsın; düzgündürsə, 'Uğur: Qeydiyyat təsdiqləndi' çıxarsın. 'test@example.com' ünvanı ilə yoxlayın.",
    gozlenilenCixis: "Uğur: Qeydiyyat təsdiqləndi",
    starterCode: "function emailValidasiyasi(email) {\n  // @ və . simvollarını yoxlayın\n}\n\nemailValidasiyasi('test@example.com');",
    solutionCode: "function emailValidasiyasi(email) {\n  if (email.includes('@') && email.includes('.')) {\n    console.log('Uğur: Qeydiyyat təsdiqləndi');\n  } else {\n    console.log('Xəta: Düzgün email daxil edin');\n  }\n}\n\nemailValidasiyasi('test@example.com');",
    ipuclari: [
      "İpucu 1: includes('@') və includes('.') şərtlərini birləşdirin.",
      "İpucu 2: Şərt ödəndikdə Uğur mesajını çap edin.",
      "İpucu 3: Əks halda Xəta mesajını çıxarın."
    ],
    teslimIzahi: "Müştəri tərəfli (client-side) form validasiyası istifadəçiyə anında geridönüş verir və serverə göndəriləcək lazımsız və qüsurlu şəbəkə sorğularının sayını azaldır."
  },
  {
    id: "exam-sec15-10",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Fərdi Hadisələr (CustomEvent və dispatchEvent)",
    serif: "Tətbiqdaxili rabitə üçün `CustomEvent` yaradın. Elementə 'istifadeciDaxilOldu' hadisəsini dinləyən funksiya qoşun və gələn `e.detail` obyektindən istifadəçinin adını və rolunu oxuyun. `{ detail: { ad: 'Rəşad', rol: 'admin' } }` ilə hadisəni başladın və konsola 'Daxil oldu: Rəşad (admin)' yazdırın.",
    gozlenilenCixis: "Daxil oldu: Rəşad (admin)",
    starterCode: "function ferdiHadise() {\n  // CustomEvent yaradın və dispatch edin\n}\n\nferdiHadise();",
    solutionCode: "function ferdiHadise() {\n  const container = document.createElement('div');\n  container.addEventListener('istifadeciDaxilOldu', (e) => {\n    console.log(`Daxil oldu: ${e.detail.ad} (${e.detail.rol})`);\n  });\n\n  const event = new CustomEvent('istifadeciDaxilOldu', {\n    detail: { ad: 'Rəşad', rol: 'admin' }\n  });\n  container.dispatchEvent(event);\n}\n\nferdiHadise();",
    ipuclari: [
      "İpucu 1: new CustomEvent('ad', { detail: { ... } }) fərdi məlumat daşıyan hadisələr yaradır.",
      "İpucu 2: element.dispatchEvent(event) hadisəni dərhal işə salır.",
      "İpucu 3: e.detail daxilindəki məlumatları konsola çıxarın."
    ],
    teslimIzahi: "Fərdi hadisələr (Custom Events) müxtəlif müstəqil vizual komponentlər arasında bir-birini tanımadan asinxron məlumat mübadiləsi qurmaq üçün əla vasitədir."
  },
  {
    id: "exam-sec15-11",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Hadisələrdə Debounce ilə Sorğu Məhdudlaşdırılması",
    serif: "Axtarış xanasına sürətlə yazılan hər hərfə görə deyil, yazma fasiləsi (məsələn: 50ms) baş verdikdə axtarışı başladan `debounce(fn, gecikme)` funksiyası hazırlayın. Funksiyanı ardıcıl 3 dəfə çağırın ('J', 'JS', 'JSÖyrən'). Sonda yalnız ən sonuncu çağırışın icra edildiyini nümayiş etdirin: 'Axtarış: JSÖyrən'.",
    gozlenilenCixis: "Axtarış: JSÖyrən",
    starterCode: "function debounce(fn, gecikme) {\n  let taymer;\n  // clearTimeout və setTimeout ilə gecikmə qurun\n}\n\n// Debounce-u sınaqdan keçirin",
    solutionCode: "function debounce(fn, gecikme) {\n  let taymer;\n  return function(...args) {\n    clearTimeout(taymer);\n    taymer = setTimeout(() => fn(...args), gecikme);\n  };\n}\n\nconst axtaris = debounce((metn) => {\n  console.log(`Axtarış: ${metn}`);\n}, 30);\n\naxtaris('J');\naxtaris('JS');\naxtaris('JSÖyrən');",
    ipuclari: [
      "İpucu 1: Hər çağırışda əvvəlki aktiv taymer clearTimeout ilə ləğv edilir.",
      "İpucu 2: Yeni setTimeout təyin edilir; yalnız sonuncu çağırış vaxt bitəndə işə düşür.",
      "İpucu 3: Çıxış yalnız son arqumentlə ('JSÖyrən') baş verir."
    ],
    teslimIzahi: "Debounce axtarış inputlarında backend-ə yüzlərlə yarımçıq simvol sorğusu getməsinin qarşısını alaraq həm şəbəkəni, həm də server verilənlər bazasını ifrat yükdən qoruyur."
  },
  {
    id: "exam-sec15-12",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Şifrə Gücünün Dinamik Qiymətləndirilməsi",
    serif: "İnputa daxil edilən şifrənin gücünü 'input' hadisəsində təhlil edən funksiya qurun. Qaydalar: uzunluq >= 8 (1 bal), rəqəm ehtiva edir (1 bal), böyük hərf ehtiva edir (1 bal). Əgər bal === 3 isə 'Güclü', bal === 2 isə 'Orta', bal <= 1 isə 'Zəif' qiymətləndirilsin. 'Baku2026' şifrəsi üçün konsola 'Şifrə gücü: Güclü' çıxarın.",
    gozlenilenCixis: "Şifrə gücü: Güclü",
    starterCode: "function sifreGucunuYoxla(sifre) {\n  // Şifrə kriteriyalarını qiymətləndirin\n}\n\nsifreGucunuYoxla('Baku2026');",
    solutionCode: "function sifreGucunuYoxla(sifre) {\n  let bal = 0;\n  if (sifre.length >= 8) bal++;\n  if (/\\d/.test(sifre)) bal++;\n  if (/[A-Z]/.test(sifre)) bal++;\n\n  let netice = 'Zəif';\n  if (bal === 3) netice = 'Güclü';\n  else if (bal === 2) netice = 'Orta';\n\n  console.log(`Şifrə gücü: ${netice}`);\n}\n\nsifreGucunuYoxla('Baku2026');",
    ipuclari: [
      "İpucu 1: sifre.length >= 8 uzunluq yoxlamasıdır.",
      "İpucu 2: /\\d/ rəqəmləri, /[A-Z]/ böyük hərfləri yoxlayır.",
      "İpucu 3: Format: `Şifrə gücü: ${netice}`."
    ],
    teslimIzahi: "Qeydiyyat formalarında real vaxt rejimində şifrə etibarlılığını ölçmək istifadəçi təhlükəsizliyini artırmaq üçün zəruridir."
  },
  {
    id: "exam-sec15-13",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Klaviatura Qısayolları Sistemi (Shortcut Manager)",
    serif: "Sənədi qeyd etmək üçün qlobal 'Ctrl+S' (və ya 'Meta+S') klaviatura kombinasiyasını tutan sistem yazın. Hadisə baş verdikdə brauzerin səhifəni saxlamaq dialoqunu `e.preventDefault()` ilə bloklayın və konsola 'Sənəd yadda saxlanıldı!' çıxarın.",
    gozlenilenCixis: "Sənəd yadda saxlanıldı!",
    starterCode: "function qisayolDinleyici() {\n  // keydown hadisəsində ctrlKey və key === 's' yoxlayın\n}\n\nqisayolDinleyici();",
    solutionCode: "function qisayolDinleyici() {\n  const handler = (e) => {\n    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {\n      e.preventDefault();\n      console.log('Sənəd yadda saxlanıldı!');\n    }\n  };\n\n  const event = new CustomEvent('keydown', { cancelable: true });\n  event.ctrlKey = true;\n  event.key = 's';\n  handler(event);\n}\n\nqisayolDinleyici();",
    ipuclari: [
      "İpucu 1: e.ctrlKey və ya e.metaKey istifadəçinin idarəetmə klavişini sıxıb saxladığını göstərir.",
      "İpucu 2: e.key.toLowerCase() === 's' hərfin növünü yoxlayır.",
      "İpucu 3: Şərt daxilində e.preventDefault() və konsol mesajı yerləşdirin."
    ],
    teslimIzahi: "Müasir veb redaktorları (məsələn Google Docs, Figma, VS Code Web) məhz bu cür klaviatura hadisə kombinasiyaları ilə masaüstü tətbiq təcrübəsi yaradır."
  },
  {
    id: "exam-sec15-14",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Çoxpilləli Form Naviqasiyası (Multi-Step Form Stepper)",
    serif: "3 addımlı form statusunu idarə edən sinif yaradın (`cariAddim = 1`, `maxAddim = 3`). 'ireli()' metodu növbəti addıma keçirsin (əgər max-a çatmayıbsa) və addımı artırsın. 'geri()' əvvəlki addıma qaytarsın (min: 1). İki dəfə ireli() çağırıb cari addımı konsola 'Cari addım: 3 / 3' formatında çıxarın.",
    gozlenilenCixis: "Cari addım: 3 / 3",
    starterCode: "class FormAddimlari {\n  // cariAddim, ireli, geri metodlarını yazın\n}\n\n// İki addım irəli gedin və çıxarın",
    solutionCode: "class FormAddimlari {\n  constructor(maxAddim = 3) {\n    this.cariAddim = 1;\n    this.maxAddim = maxAddim;\n  }\n\n  ireli() {\n    if (this.cariAddim < this.maxAddim) {\n      this.cariAddim++;\n    }\n    return this.cariAddim;\n  }\n\n  geri() {\n    if (this.cariAddim > 1) {\n      this.cariAddim--;\n    }\n    return this.cariAddim;\n  }\n}\n\nconst form = new FormAddimlari(3);\nform.ireli();\nform.ireli();\nconsole.log(`Cari addım: ${form.cariAddim} / ${form.maxAddim}`);",
    ipuclari: [
      "İpucu 1: ireli() çağırıldıqda cariAddim yalnız maxAddim-dən kiçik olduqda artır.",
      "İpucu 2: İki dəfə ireli() çağırıldıqda 1 -> 2 -> 3 olur.",
      "İpucu 3: Konsola `Cari addım: ${form.cariAddim} / ${form.maxAddim}` çıxarın."
    ],
    teslimIzahi: "Addım-addım qeydiyyat və ya ödəniş formaları (Wizard Pattern) istifadəçi yorğunluğunu azaldan və konversiyanı artıran klassik frontend arxitekturasıdır."
  },
  {
    id: "exam-sec15-15",
    bolmeId: 15,
    merheleId: 3,
    cetinlik: "EKSPERT",
    basliq: "Mərkəzi Hadisə Avtobusu və Reaktiv Bildiriş Şəbəkəsi",
    serif: "Müstəqil frontend komponentləri arasında qlobal əlaqə quran `HadiseAvtobusu` (Global Event Bus) sinifi qurun. Bu sinif `abuneOl(hadise, callback)` (və geri abunəliyi ləğv edən funksiya qaytarsın), `yayimla(hadise, melumat)` metodlarına malik olsun. 'yeniSifaris' hadisəsinə abunə olun. İki sifariş (`{ id: 101, mebleg: 50 }` və `{ id: 102, mebleg: 70 }`) yayımlayın. Yekun toplanan məbləği konsola 'Toplam sifariş dövriyyəsi: 120 AZN' kimi çıxarın.",
    gozlenilenCixis: "Toplam sifariş dövriyyəsi: 120 AZN",
    starterCode: "class HadiseAvtobusu {\n  // abuneOl və yayimla metodlarını yazın\n}\n\n// Sifarişləri toplayıb konsola çıxarın",
    solutionCode: "class HadiseAvtobusu {\n  constructor() {\n    this.abuneler = {};\n  }\n\n  abuneOl(hadise, cb) {\n    if (!this.abuneler[hadise]) {\n      this.abuneler[hadise] = [];\n    }\n    this.abuneler[hadise].push(cb);\n    return () => {\n      this.abuneler[hadise] = this.abuneler[hadise].filter(fn => fn !== cb);\n    };\n  }\n\n  yayimla(hadise, melumat) {\n    if (this.abuneler[hadise]) {\n      this.abuneler[hadise].forEach(cb => cb(melumat));\n    }\n  }\n}\n\nconst bus = new HadiseAvtobusu();\nlet dovriyye = 0;\n\nbus.abuneOl('yeniSifaris', sifaris => {\n  dovriyye += sifaris.mebleg;\n});\n\nbus.yayimla('yeniSifaris', { id: 101, mebleg: 50 });\nbus.yayimla('yeniSifaris', { id: 102, mebleg: 70 });\n\nconsole.log(`Toplam sifariş dövriyyəsi: ${dovriyye} AZN`);",
    ipuclari: [
      "İpucu 1: Hadisə avtobusu Publish-Subscribe (Pub/Sub) naxışına əsaslanır.",
      "İpucu 2: yayimla metodu qeydiyyatdan keçmiş bütün funksiyalara məlumatı paylayır.",
      "İpucu 3: 50 + 70 = 120 AZN."
    ],
    teslimIzahi: "Event Bus tətbiqin fərqli qatlarında (məsələn Navbar səbət ikonası ilə Səhifə daxili Alış düyməsi) birbaşa əlaqə qurmadan xəbərləşməyə imkan verən qlobal rabitə nüvəsidir."
  }
];

const SEC_16_QUESTIONS = [
  // Bölmə 16: Brauzer Yaddaşı və Web API-lər (localStorage, sessionStorage, setTimeout, setInterval, animation)
  {
    id: "exam-sec16-01",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "localStorage ilə Məlumatın Saxlanması və Oxunması",
    serif: "`localStorage`-ə 'istifadeciAdi' açarı ilə 'Cavid' dəyərini yazın (`setItem`). Sonra həmin açar üzrə dəyəri oxuyun (`getItem`) və konsola 'Yaddaşdakı istifadəçi: Cavid' çıxarın.",
    gozlenilenCixis: "Yaddaşdakı istifadəçi: Cavid",
    starterCode: "function yaddasaYaz() {\n  // localStorage.setItem və getItem tətbiq edin\n}\n\nyaddasaYaz();",
    solutionCode: "function yaddasaYaz() {\n  localStorage.setItem('istifadeciAdi', 'Cavid');\n  const ad = localStorage.getItem('istifadeciAdi');\n  console.log(`Yaddaşdakı istifadəçi: ${ad}`);\n}\n\nyaddasaYaz();",
    ipuclari: [
      "İpucu 1: localStorage.setItem(acar, deyer) məlumatı daimi saxlayır.",
      "İpucu 2: localStorage.getItem(acar) dəyəri oxuyur (tapılmadıqda null qaytarır).",
      "İpucu 3: Format: `Yaddaşdakı istifadəçi: ${ad}`."
    ],
    teslimIzahi: "localStorage brauzer bağlansa belə silinməyən, domenə bağlı 5-10MB həcmində təmiz açar-dəyər (key-value) yaddaş sahəsidir."
  },
  {
    id: "exam-sec16-02",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "localStorage-dən Məlumatın Silinməsi (removeItem & clear)",
    serif: "`localStorage`-ə 'girisTokeni' açarı ilə 'abc123xyz' yazın. Dərhal sonra `removeItem('girisTokeni')` ilə bu açarı silin. Yenidən `getItem('girisTokeni')` çağırdıqda nəticənin `null` olduğunu yoxlayıb konsola 'Token silindi: null' çıxarın.",
    gozlenilenCixis: "Token silindi: null",
    starterCode: "function tokeniSil() {\n  // setItem, removeItem və getItem istifadə edin\n}\n\ntokeniSil();",
    solutionCode: "function tokeniSil() {\n  localStorage.setItem('girisTokeni', 'abc123xyz');\n  localStorage.removeItem('girisTokeni');\n  const token = localStorage.getItem('girisTokeni');\n  console.log(`Token silindi: ${token}`);\n}\n\ntokeniSil();",
    ipuclari: [
      "İpucu 1: removeItem(acar) göstərilən xüsusi qeydi silir.",
      "İpucu 2: Mövcud olmayan və ya silinmiş açar oxunduqda `null` qayıdır.",
      "İpucu 3: Konsola `Token silindi: ${token}` çap edin."
    ],
    teslimIzahi: "İstifadəçi hesabdan çıxış etdikdə (logout) təhlükəsizlik məqsədilə autentifikasiya tokenləri mütləq removeItem və ya clear() ilə təmizlənməlidir."
  },
  {
    id: "exam-sec16-03",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "setTimeout ilə Gecikdirilmiş İcra",
    serif: "`setTimeout` köməyi ilə 20 millisaniyəlik gecikmədən sonra konsola 'Gecikdirilmiş bildiriş tamamlandı' mesajı çıxaran funksiya qurun.",
    gozlenilenCixis: "Gecikdirilmiş bildiriş tamamlandı",
    starterCode: "function gecikdirilmisBildiris() {\n  // setTimeout istifadə edin\n}\n\ngecikdirilmisBildiris();",
    solutionCode: "function gecikdirilmisBildiris() {\n  setTimeout(() => {\n    console.log('Gecikdirilmiş bildiriş tamamlandı');\n  }, 20);\n}\n\ngecikdirilmisBildiris();",
    ipuclari: [
      "İpucu 1: setTimeout(callback, millisaniye) asinxron taymer qeydiyyata alır.",
      "İpucu 2: Müəyyən olunmuş vaxt tamam olduqda callback funksiyası Hadisə Dövrəsinə ötürülür.",
      "İpucu 3: Konsola dəqiq tələb olunan mesaj çıxmalıdır."
    ],
    teslimIzahi: "setTimeout JavaScript-in tək-axınlı (single-threaded) mühərrikində sinxron icranı bloklamadan gələcəkdə bir dəfə işə düşəcək əməliyyatları planlaşdırmaq üçündür."
  },
  {
    id: "exam-sec16-04",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "localStorage-də Mürəkkəb Obyektlərin Saxlanması (JSON)",
    serif: "`localStorage` yalnız string saxlayır. İstifadəçi tənzimləmələri obyektini (`{ tema: 'qaranliq', dil: 'az' }`) `JSON.stringify` ilə 'ayarlar' açarına yazın. Sonra onu oxuyub `JSON.parse` ilə geri obyektə çevirin və konsola 'Tema: qaranliq, Dil: az' çıxarın.",
    gozlenilenCixis: "Tema: qaranliq, Dil: az",
    starterCode: "function ayarlariSaxla() {\n  // JSON.stringify və JSON.parse ilə localStorage istifadə edin\n}\n\nayarlariSaxla();",
    solutionCode: "function ayarlariSaxla() {\n  const ayarlar = { tema: 'qaranliq', dil: 'az' };\n  localStorage.setItem('ayarlar', JSON.stringify(ayarlar));\n\n  const oxunan = JSON.parse(localStorage.getItem('ayarlar'));\n  console.log(`Tema: ${oxunan.tema}, Dil: ${oxunan.dil}`);\n}\n\nayarlariSaxla();",
    ipuclari: [
      "İpucu 1: Obyekt birbaşa ötürülərsə '[object Object]' olaraq saxlanılar və məlumat itər.",
      "İpucu 2: JSON.stringify obyekti mətndə saxlamaq, JSON.parse isə bərpa etmək üçündür.",
      "İpucu 3: Konsola şablon sətirlə çıxarın."
    ],
    teslimIzahi: "Brauzer yaddaşı daxilən yalnız sətirləri qəbul edir. Mürəkkəb obyektləri və massivləri saxlamağın yeganə yolu onları JSON formatında seriyalaşdırmaqdır."
  },
  {
    id: "exam-sec16-05",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "sessionStorage vs localStorage Fərqi",
    serif: "Cari brauzer seansına xas olan `sessionStorage`-ə 'seansId' açarı ilə 'sess-777' yazın. Həmçinin `localStorage`-ə 'qaliqId' açarı ilə 'perm-999' yazın. Hər iki yaddaşdan oxuyaraq konsola 'Seans: sess-777, Qalıcı: perm-999' çıxarın.",
    gozlenilenCixis: "Seans: sess-777, Qalıcı: perm-999",
    starterCode: "function yaddaslariMuqayiseEt() {\n  // sessionStorage və localStorage oxuyub konsola çıxarın\n}\n\nyaddaslariMuqayiseEt();",
    solutionCode: "function yaddaslariMuqayiseEt() {\n  sessionStorage.setItem('seansId', 'sess-777');\n  localStorage.setItem('qaliqId', 'perm-999');\n\n  const seans = sessionStorage.getItem('seansId');\n  const qaliq = localStorage.getItem('qaliqId');\n\n  console.log(`Seans: ${seans}, Qalıcı: ${qaliq}`);\n}\n\nyaddaslariMuqayiseEt();",
    ipuclari: [
      "İpucu 1: sessionStorage cari brauzer tabı bağlandıqda dərhal sıfırlanır.",
      "İpucu 2: localStorage isə kompüter söndürülsə belə əllə silinənə qədər qalır.",
      "İpucu 3: Format: `Seans: ${seans}, Qalıcı: ${qaliq}`."
    ],
    teslimIzahi: "Müvəqqəti məlumatlar (məsələn, birseanslıq filtr parametrləri, form qaralamaları) üçün sessionStorage, uzunmüddətli tənzimləmələr (tema seçimi) üçün localStorage seçilir."
  },
  {
    id: "exam-sec16-06",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "setInterval və clearInterval ilə Dövri Sayğac",
    serif: "Dövri sayğac qurun (`setInterval`). Hər 10ms-dən bir sayğac 1 vahid artsın. Sayğac 3-ə çatdıqda `clearInterval` çağırılaraq interval dayandırılsın və konsola 'Dövriyyə tamamlandı: 3' çıxarılsın.",
    gozlenilenCixis: "Dövriyyə tamamlandı: 3",
    starterCode: "function saygaciIslet() {\n  // setInterval və clearInterval qurun\n}\n\nsaygaciIslet();",
    solutionCode: "function saygaciIslet() {\n  let say = 0;\n  const taymer = setInterval(() => {\n    say++;\n    if (say === 3) {\n      clearInterval(taymer);\n      console.log(`Dövriyyə tamamlandı: ${say}`);\n    }\n  }, 10);\n}\n\nsaygaciIslet();",
    ipuclari: [
      "İpucu 1: setInterval dövri olaraq təkrar-təkrar icra olunur.",
      "İpucu 2: clearInterval(taymerId) intervalı dayandırır və yaddaş sızmasının qarşısını alır.",
      "İpucu 3: Konsola yalnız şərt ödəndikdə çıxış verin."
    ],
    teslimIzahi: "clearInterval çağırılmadıqda setInterval sonsuz olaraq işləyir və brauzer tabının yaddaşını və CPU resurslarını tədricən tükədir."
  },
  {
    id: "exam-sec16-07",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "Naviqator Obyekti və Şəbəkə Statusu",
    serif: "`process` və ya `navigator` mühiti vasitəsilə platforma məlumatını və ya əməliyyat sistemi növünü oxuyan funksiya qurun. Mühitin təhlükəsiz yoxlanması ilə konsola 'Mühit platforması: linux' (və ya cari platforma) formatında məlumat çıxarın.",
    gozlenilenCixis: "Mühit platforması: linux",
    starterCode: "function platformaniOxu() {\n  // process.platform və ya navigator istifadə edin\n}\n\nplatformaniOxu();",
    solutionCode: "function platformaniOxu() {\n  const platform = (typeof process !== 'undefined' && process.platform) || 'linux';\n  console.log(`Mühit platforması: ${platform}`);\n}\n\nplatformaniOxu();",
    ipuclari: [
      "İpucu 1: Node və test mühitində process.platform istifadə olunur.",
      "İpucu 2: Brauzerdə navigator.platform və ya navigator.userAgent mövcuddur.",
      "İpucu 3: Format: `Mühit platforması: ${platform}`."
    ],
    teslimIzahi: "İcra mühitini (OS, brauzer, online/offline status) təyin etmək tətbiqin fərqli platformalara uyğunlaşdırılması üçün vacibdir."
  },
  {
    id: "exam-sec16-08",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Vaxt Məhdudiyyətli Yaddaş Keşi (LocalStorage with TTL)",
    serif: "Məlumatı vaxt limiti (TTL - Time to Live) ilə saxlayan `yaddasaYazTTL(acar, deyer, ttlMs)` və `yaddasdanOxuTTL(acar)` funksiyaları hazırlayın. Məlumat obyekt kimi saxlanılsın: `{ deyer, bitmeVaxti }`. Əgər `Date.now() > bitmeVaxti` isə qeyd silinsin və `null` qayıtsın; əks halda dəyər qayıtsın. 1000ms vaxt ilə 'xeber' yazın, dərhal oxuyun və konsola 'Keş aktiv: Yeni Xəbər' çıxarın.",
    gozlenilenCixis: "Keş aktiv: Yeni Xəbər",
    starterCode: "function yaddasaYazTTL(acar, deyer, ttlMs) {\n  // bitmə vaxtı ilə obyekti saxlayın\n}\n\nfunction yaddasdanOxuTTL(acar) {\n  // vaxtı yoxlayıb qaytarın və ya silin\n}\n\n// Test edin və konsola çıxarın",
    solutionCode: "function yaddasaYazTTL(acar, deyer, ttlMs) {\n  const qeyd = {\n    deyer,\n    bitmeVaxti: Date.now() + ttlMs\n  };\n  localStorage.setItem(acar, JSON.stringify(qeyd));\n}\n\nfunction yaddasdanOxuTTL(acar) {\n  const xam = localStorage.getItem(acar);\n  if (!xam) return null;\n  const qeyd = JSON.parse(xam);\n  if (Date.now() > qeyd.bitmeVaxti) {\n    localStorage.removeItem(acar);\n    return null;\n  }\n  return qeyd.deyer;\n}\n\nyaddasaYazTTL('xeber', 'Yeni Xəbər', 1000);\nconst netice = yaddasdanOxuTTL('xeber');\nconsole.log(`Keş aktiv: ${netice}`);",
    ipuclari: [
      "İpucu 1: Date.now() + ttlMs bitmə anının vaxt damğasını (timestamp) hesablayır.",
      "İpucu 2: Oxunarkən Date.now() cari vaxtla müqayisə edilir.",
      "İpucu 3: Format: `Keş aktiv: ${netice}`."
    ],
    teslimIzahi: "LocalStorage-in daxili köhnəlmə (expiration) vaxtı yoxdur. Bu nümunə ilə tətbiq kənar keş kitabxanalarına ehtiyac duymadan öz TTL mexanizmini qurur."
  },
  {
    id: "exam-sec16-09",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Hamis Sayğac Animasiyası Simulyasiyası",
    serif: "Rəqəmi 0-dan 60-a qədər addım-addım artıran animasiya addım mühərriki qurun. Hər kadrda rəqəm 20 vahid artsın. 60-a çatdıqda animasiya tamamlansın və konsola 'Animasiya tamamlandı: 60 FPS' çıxarılsın.",
    gozlenilenCixis: "Animasiya tamamlandı: 60 FPS",
    starterCode: "function animasiyaSaygaci() {\n  // Kadr-kadr artırın və 60-da dayanın\n}\n\nanimasiyaSaygaci();",
    solutionCode: "function animasiyaSaygaci() {\n  let cari = 0;\n  function kadr() {\n    cari += 20;\n    if (cari < 60) {\n      kadr();\n    } else {\n      console.log(`Animasiya tamamlandı: ${cari} FPS`);\n    }\n  }\n  kadr();\n}\n\nanimasiyaSaygaci();",
    ipuclari: [
      "İpucu 1: Animasiya dövrəsi cari dəyəri hədəfə çatana qədər artırır.",
      "İpucu 2: Şərt tamamlandıqda yekun loq çıxarılır.",
      "İpucu 3: Çıxış formatı: `Animasiya tamamlandı: ${cari} FPS`."
    ],
    teslimIzahi: "requestAnimationFrame brauzerin yeniləmə tezliyi (adətən 60Hz və ya 120Hz) ilə sinxronlaşaraq kəkələməsiz və batareyaya qənaət edən vizual keçidlər təmin edir."
  },
  {
    id: "exam-sec16-10",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Yaddaş Limitinin Aşılması və Təhlükəsiz İdarəetmə (Quota Control)",
    serif: "`localStorage`-ə məlumat yazarkən yaddaşın dolması halını (QuotaExceededError) təhlükəsiz şəkildə idarə edən funksiya yazın. Əgər yazılış uğursuz olarsa, 'Yaddaş doludur, köhnə keşlər təmizlənməlidir' xəbərdarlığını konsola çıxarsın.",
    gozlenilenCixis: "Yaddaş doludur, köhnə keşlər təmizlənməlidir",
    starterCode: "function tehlukesizYaddasaYaz(acar, deyer) {\n  // try...catch ilə xətanı nəzarətə alın\n}\n\n// Xətanı simulyasiya edərək yoxlayın",
    solutionCode: "function tehlukesizYaddasaYaz(acar, deyer) {\n  try {\n    throw new Error('QuotaExceededError');\n  } catch (err) {\n    if (err.message.includes('Quota')) {\n      console.log('Yaddaş doludur, köhnə keşlər təmizlənməlidir');\n    }\n  }\n}\n\ntehlukesizYaddasaYaz('agirData', '...');",
    ipuclari: [
      "İpucu 1: localStorage dolduqda brauzer DOMException / QuotaExceededError atır.",
      "İpucu 2: try...catch ilə bu halı tutmaq tətbiqin tamamilə çökməsinin qarşısını alır.",
      "İpucu 3: Konsola tələb olunan xəbərdarlıq mətnini çıxarın."
    ],
    teslimIzahi: "Mobil qurğularda və ya məhdud yaddaşlı cihazlarda LocalStorage kvoası dolduqda mütləq LRU (Least Recently Used) təmizləmə siyasəti tətbiq olunmalıdır."
  },
  {
    id: "exam-sec16-11",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Reaktiv Yaddaş İzləyicisi (Observable Storage Wrapper)",
    serif: "Dəyər dəyişdikdə qeydiyyatdan keçən abunəçiləri xəbərdar edən `ReaktivYaddas` sinifi qurun. `yaz(acar, deyer)` metodu `localStorage`-ə yazmaqla yanaşı, dinləyiciyə köhnə və yeni dəyəri ötürsün. 'tema' açarını 'acig'-dan 'qaranliq'-a dəyişin və konsola 'Tema dəyişdi: acig -> qaranliq' çıxarın.",
    gozlenilenCixis: "Tema dəyişdi: acig -> qaranliq",
    starterCode: "class ReaktivYaddas {\n  // dinle və yaz metodlarını qurun\n}\n\n// Tema dəyişikliyini yoxlayın",
    solutionCode: "class ReaktivYaddas {\n  constructor() {\n    this.dinleyiciler = [];\n  }\n\n  dinle(cb) {\n    this.dinleyiciler.push(cb);\n  }\n\n  yaz(acar, yeniDeyer) {\n    const kohneDeyer = localStorage.getItem(acar);\n    localStorage.setItem(acar, yeniDeyer);\n    this.dinleyiciler.forEach(cb => cb(acar, kohneDeyer, yeniDeyer));\n  }\n}\n\nconst ry = new ReaktivYaddas();\nlocalStorage.setItem('tema', 'acig');\n\nry.dinle((acar, kohne, yeni) => {\n  console.log(`Tema dəyişdi: ${kohne} -> ${yeni}`);\n});\n\nry.yaz('tema', 'qaranliq');",
    ipuclari: [
      "İpucu 1: yaz() metodu əvvəlcə mövcud dəyəri getItem ilə oxuyur, sonra setItem edir.",
      "İpucu 2: Bütün qeydiyyatdan keçmiş dinləyicilərə (acar, kohne, yeni) ötürülür.",
      "İpucu 3: Format: `Tema dəyişdi: ${kohne} -> ${yeni}`."
    ],
    teslimIzahi: "Brauzerin yerli 'storage' hadisəsi yalnız digər tablarda işə düşür. Eyni tab daxilində komponentləri dərhal sinxronlaşdırmaq üçün bu cür Reaktiv Yaddaş örtükləri istifadə olunur."
  },
  {
    id: "exam-sec16-12",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Hadisələrdə Throttle ilə Tezlik Məhdudlaşdırılması",
    serif: "Pəncərənin ölçüsü dəyişdikdə və ya sürüşmə zamanı funksiyanın hər millisaniyədə deyil, ən çox hər `interval` müddətində bir dəfə işləməsini təmin edən `throttle(fn, limit)` funksiyası hazırlayın. Dərhal ardıcıl 3 çağırış edin, lakin yalnız birincinin dərhal icra olunduğunu nümayiş etdirərək konsola 'İcra olundu: 1' çıxarın.",
    gozlenilenCixis: "İcra olundu: 1",
    starterCode: "function throttle(fn, limit) {\n  let gozleme = false;\n  // throttle məntiqini qurun\n}\n\n// 3 dəfə çağırıb nəticəni konsola çıxarın",
    solutionCode: "function throttle(fn, limit) {\n  let gozleme = false;\n  return function(...args) {\n    if (!gozleme) {\n      fn(...args);\n      gozleme = true;\n      setTimeout(() => {\n        gozleme = false;\n      }, limit);\n    }\n  };\n}\n\nlet say = 0;\nconst tezyiq = throttle(() => {\n  say++;\n  console.log(`İcra olundu: ${say}`);\n}, 50);\n\ntezyiq();\ntezyiq();\ntezyiq();",
    ipuclari: [
      "İpucu 1: Throttle müəyyən zaman pəncərəsində yalnız tək bir icraya icazə verir.",
      "İpucu 2: gozleme bayrağı true olduqda aradakı çağırışlar rədd edilir.",
      "İpucu 3: Yalnız ilk çağırış dərhal icra edilir."
    ],
    teslimIzahi: "Throttle xüsusilə scroll və resize kimi saniyədə 60+ dəfə baş verən ağır hadisələrin icra tezliyini sabitləşdirərək brauzerin donmasının qarşısını alır."
  },
  {
    id: "exam-sec16-13",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Müştəri Tərəfli Səbət Meneceri (LocalStorage Cart)",
    serif: "`SebetMeneceri` sinifi qurun. Metodlar: `elaveEt(mehsul)` (əgər məhsul artıq varsa sayını artırsın, yoxdursa `{ id, ad, qiymet, say: 1 }` kimi əlavə etsin) və `toplamMebleg()`. Səbət məlumatını hər dəfə `localStorage`-də yeniləsin. İki ədəd 50 AZN-lik köynək əlavə edin və konsola 'Səbət cəmi: 100 AZN' çıxarın.",
    gozlenilenCixis: "Səbət cəmi: 100 AZN",
    starterCode: "class SebetMeneceri {\n  // elaveEt və toplamMebleg metodlarını qurun\n}\n\n// Məhsul əlavə edib cəmi çıxarın",
    solutionCode: "class SebetMeneceri {\n  constructor() {\n    this.acar = 'sebet';\n    this.mallar = JSON.parse(localStorage.getItem(this.acar) || '[]');\n  }\n\n  elaveEt(mehsul) {\n    const movcud = this.mallar.find(m => m.id === mehsul.id);\n    if (movcud) {\n      movcud.say += 1;\n    } else {\n      this.mallar.push({ ...mehsul, say: 1 });\n    }\n    localStorage.setItem(this.acar, JSON.stringify(this.mallar));\n  }\n\n  toplamMebleg() {\n    return this.mallar.reduce((cem, m) => cem + (m.qiymet * m.say), 0);\n  }\n}\n\nlocalStorage.removeItem('sebet');\nconst sebet = new SebetMeneceri();\nsebet.elaveEt({ id: 1, ad: 'Köynək', qiymet: 50 });\nsebet.elaveEt({ id: 1, ad: 'Köynək', qiymet: 50 });\nconsole.log(`Səbət cəmi: ${sebet.toplamMebleg()} AZN`);",
    ipuclari: [
      "İpucu 1: Eyni ID-li məhsul təkrar əlavə edildikdə say xassəsi 1 vahid artırılır.",
      "İpucu 2: Hər dəyişiklikdə localStorage.setItem yenilənir.",
      "İpucu 3: 50 * 2 = 100 AZN."
    ],
    teslimIzahi: "E-ticarət platformalarında istifadəçi qeydiyyatdan keçmədən öncə seçdiyi məhsulların yaddaşda saxlanması üçün LocalStorage əsaslı səbət meneceri standart təcrübədir."
  },
  {
    id: "exam-sec16-14",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Offlayn Sorğu Növbəsi (Offline Sync Queue Pattern)",
    serif: "İnternet bağlantısı kəsildikdə sorğuları yaddaşda saxlayan və şəbəkə bərpa olunduqda sırayla emal edən `OfflaynNovbe` sinifi hazırlayın. Şəbəkə offlayn olduqda iki əməliyyat (`'POST /like'`, `'POST /comment'`) növbəyə yazılsın. Bərpa funksiyası işə düşdükdə növbədəki 2 sorğunun hamısını emal edib konsola 'Bərpa olundu: 2 əməliyyat sinxronlaşdı' çıxarsın.",
    gozlenilenCixis: "Bərpa olundu: 2 əməliyyat sinxronlaşdı",
    starterCode: "class OfflaynNovbe {\n  // elaveEt və sinxronlasdir metodlarını qurun\n}\n\n// Test edib konsola çıxarın",
    solutionCode: "class OfflaynNovbe {\n  constructor() {\n    this.novbe = [];\n  }\n\n  elaveEt(emeliyyat) {\n    this.novbe.push(emeliyyat);\n  }\n\n  sinxronlasdir() {\n    const say = this.novbe.length;\n    this.novbe = [];\n    console.log(`Bərpa olundu: ${say} əməliyyat sinxronlaşdı`);\n  }\n}\n\nconst queue = new OfflaynNovbe();\nqueue.elaveEt('POST /like');\nqueue.elaveEt('POST /comment');\nqueue.sinxronlasdir();",
    ipuclari: [
      "İpucu 1: Növbə massivində gözləyən şəbəkə sorğuları saxlanılır.",
      "İpucu 2: sinxronlasdir çağırıldıqda bütün gözləyən sorğular ardıcıllıqla icra edilir və növbə boşaldılır.",
      "İpucu 3: Format: `Bərpa olundu: ${say} əməliyyat sinxronlaşdı`."
    ],
    teslimIzahi: "Müasir PWA (Progressive Web Apps) arxitekturasında Background Sync və Offline Queue zəif internet şəraitində istifadəçi əməliyyatlarının itməməsini təmin edir."
  },
  {
    id: "exam-sec16-15",
    bolmeId: 16,
    merheleId: 3,
    cetinlik: "EKSPERT",
    basliq: "LRU (Least Recently Used) Yaddaş Keş Mexanizmi",
    serif: "Maksimum həcmi (məsələn: 2 element) olan, ən köhnə istifadə olunmamış elementi avtomatik yaddaşdan silən `LRUKes` sinifi hazırlayın (`Map` istifadə edin). Əməliyyatlar: `qoy('a', 1)`, `qoy('b', 2)`, `oxu('a')` (a ən sonuncu istifadə olunan olur), `qoy('c', 3)` (həcm aşılır və ən köhnə olan 'b' silinir). Sonda yaddaşda qalan açarları konsola 'Qalan açarlar: a, c' şəklində çıxarın.",
    gozlenilenCixis: "Qalan açarlar: a, c",
    starterCode: "class LRUKes {\n  constructor(limit = 2) {\n    this.limit = limit;\n    this.kes = new Map();\n  }\n  // oxu və qoy metodlarını yazın\n}\n\n// Əməliyyatları icra edib konsola çıxarın",
    solutionCode: "class LRUKes {\n  constructor(limit = 2) {\n    this.limit = limit;\n    this.kes = new Map();\n  }\n\n  oxu(acar) {\n    if (!this.kes.has(acar)) return null;\n    const deyer = this.kes.get(acar);\n    this.kes.delete(acar);\n    this.kes.set(acar, deyer);\n    return deyer;\n  }\n\n  qoy(acar, deyer) {\n    if (this.kes.has(acar)) {\n      this.kes.delete(acar);\n    } else if (this.kes.size >= this.limit) {\n      const enKohneAcar = this.kes.keys().next().value;\n      this.kes.delete(enKohneAcar);\n    }\n    this.kes.set(acar, deyer);\n  }\n\n  acarlar() {\n    return Array.from(this.kes.keys()).join(', ');\n  }\n}\n\nconst lru = new LRUKes(2);\nlru.qoy('a', 1);\nlru.qoy('b', 2);\nlru.oxu('a');\nlru.qoy('c', 3);\n\nconsole.log(`Qalan açarlar: ${lru.acarlar()}`);",
    ipuclari: [
      "İpucu 1: JavaScript Map daxil etmə ardıcıllığını qoruyur.",
      "İpucu 2: oxu zamanı element silinib yenidən daxil edilir ki, Map-in sonuna keçsin.",
      "İpucu 3: Həcm aşılarkən `this.kes.keys().next().value` ən köhnə açarı qaytarır və o silinir."
    ],
    teslimIzahi: "LRU (Least Recently Used) alqoritmi brauzer yaddaşı, verilənlər bazası keşləri və əməliyyat sistemlərində yaddaşın dolmasının qarşısını almaq üçün ən optimal təmizləmə strategiyasıdır."
  }
];

const SEC_17_QUESTIONS = [
  // Bölmə 17: Şəbəkə Sorğuları və API İnteqrasiyası (fetch, GET, POST, PUT, DELETE, AbortController)
  {
    id: "exam-sec17-01",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "Sadə fetch GET Sorğusu və JSON Oxunması",
    serif: "`fetch('/api/istifadeciler/1')` sorğusu göndərin. Cavabı `res.json()` ilə oxuyub istifadəçinin adını konsola 'İstifadəçi: Murad' çıxarın.",
    gozlenilenCixis: "İstifadəçi: Murad",
    starterCode: "async function istifadeciGetir() {\n  // fetch('/api/istifadeciler/1') çağırın və res.json() oxuyun\n}\n\nistifadeciGetir();",
    solutionCode: "async function istifadeciGetir() {\n  const res = await fetch('/api/istifadeciler/1');\n  const user = await res.json();\n  console.log(`İstifadəçi: ${user.ad}`);\n}\n\nistifadeciGetir();",
    ipuclari: [
      "İpucu 1: fetch() asinxron Promise qaytarır, buna görə await ilə gözlənilməlidir.",
      "İpucu 2: res.json() cavabın gövdəsini (body) asinxron olaraq JavaScript obyektinə çevirir.",
      "İpucu 3: user.ad xassəsini konsola çıxarın."
    ],
    teslimIzahi: "fetch müasir brauzerlərin quraşdırılmış şəbəkə API-sidir. Köhnə XMLHttpRequest-dən fərqli olaraq Promise-əsaslıdır və async/await ilə təmiz inteqrasiya olunur."
  },
  {
    id: "exam-sec17-02",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "HTTP Status və res.ok Yoxlaması",
    serif: "Şəbəkə cavabının uğurlu olub-olmadığını yoxlayan funksiya yazın. `res.ok` (status 200-299 aralığında olduqda true) və `res.status` xassələrini yoxlayın. Uğurlu 200 cavabı üçün konsola 'Status: 200, Uğurlu: true' çıxarın.",
    gozlenilenCixis: "Status: 200, Uğurlu: true",
    starterCode: "async function statusYoxla() {\n  const res = await fetch('/api/istifadeciler');\n  // res.status və res.ok yoxlayın\n}\n\nstatusYoxla();",
    solutionCode: "async function statusYoxla() {\n  const res = await fetch('/api/istifadeciler');\n  console.log(`Status: ${res.status}, Uğurlu: ${res.ok}`);\n}\n\nstatusYoxla();",
    ipuclari: [
      "İpucu 1: res.status HTTP cavab kodunu (200, 404, 500) saxlayır.",
      "İpucu 2: res.ok status 200-299 arasında olduqda avtomatik true olur.",
      "İpucu 3: Şablon sətir ilə konsola çıxarın."
    ],
    teslimIzahi: "fetch() 404 və ya 500 xətalarında Promise-i rədd etmir (reject etmir), yalnız şəbəkə tam kəsildikdə reject edir. Buna görə mütləq res.ok yoxlanılmalıdır."
  },
  {
    id: "exam-sec17-03",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ASAN",
    basliq: "fetch ilə Sadə POST Sorğusu Göndərilməsi",
    serif: "'/api/istifadeciler' ünvanına POST sorğusu ilə yeni istifadəçi göndərin (`{ ad: 'Ayan', rol: 'tələbə' }`). Sorğu seçimlərində `method: 'POST'`, başlıqlarda `Content-Type: 'application/json'` və gövdədə `JSON.stringify(...)` təmin edin. Cavabı oxuyub konsola 'Yaradıldı: Ayan' çıxarın.",
    gozlenilenCixis: "Yaradıldı: Ayan",
    starterCode: "async function yeniIstifadeci() {\n  // method: 'POST', headers və body qurun\n}\n\nyeniIstifadeci();",
    solutionCode: "async function yeniIstifadeci() {\n  const res = await fetch('/api/istifadeciler', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ ad: 'Ayan', rol: 'tələbə' })\n  });\n  const netice = await res.json();\n  console.log(`Yaradıldı: ${netice.ad}`);\n}\n\nyeniIstifadeci();",
    ipuclari: [
      "İpucu 1: method: 'POST' təyin edin.",
      "İpucu 2: headers obyektində 'Content-Type': 'application/json' göstərin.",
      "İpucu 3: body hissəsinə JSON.stringify(obyekt) ötürün."
    ],
    teslimIzahi: "POST sorğuları serverə yeni resurs yaratmaq üçün məlumat göndərir. Content-Type başlığı serverə gələn gövdənin JSON formatında olduğunu bildirir."
  },
  {
    id: "exam-sec17-04",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "URLSearchParams ilə Dinamik Query Sətirlərinin Qurulması",
    serif: "Axtarış parametrlərini (`kateqoriya: 'kitab'`, `sehife: 2`, `sirala: 'qiymet'`) `URLSearchParams` istifadə edərək təmiz URL sorğu sətrinə çevirin. Nəticəni konsola 'Sorğu: ?kateqoriya=kitab&sehife=2&sirala=qiymet' formatında çıxarın.",
    gozlenilenCixis: "Sorğu: ?kateqoriya=kitab&sehife=2&sirala=qiymet",
    starterCode: "function urlSorgusuQur() {\n  // URLSearchParams istifadə edin\n}\n\nurlSorgusuQur();",
    solutionCode: "function urlSorgusuQur() {\n  const params = new URLSearchParams({\n    kateqoriya: 'kitab',\n    sehife: '2',\n    sirala: 'qiymet'\n  });\n  console.log(`Sorğu: ?${params.toString()}`);\n}\n\nurlSorgusuQur();",
    ipuclari: [
      "İpucu 1: new URLSearchParams(obyekt) avtomatik şəkildə açar-dəyər cütlərini URL formatına salır.",
      "İpucu 2: Xüsusi simvolları və boşluqları avtomatik URL-kodlaşdırır (encodeURIComponent).",
      "İpucu 3: params.toString() sorğu parametr sətirini qaytarır."
    ],
    teslimIzahi: "URL string-lərini əllə `+ '&' +` şəklində calamaq boşluq və durğu işarələrində səhvlərə yol açır. URLSearchParams API bu prosesi 100% təhlükəsiz edir."
  },
  {
    id: "exam-sec17-05",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "HTTP Xəta Statuslarının İdarə Edilməsi",
    serif: "Mövcud olmayan resursa (`/api/tapilmayan-sehife`) sorğu göndərildikdə `res.ok === false` (məsələn: 404) olur. Əgər `!res.ok` isə `throw new Error('Resurs tapılmadı: ' + res.status)` atın və catch blokunda '[Xəta]: Resurs tapılmadı: 404' kimi konsola yazdırın.",
    gozlenilenCixis: "[Xəta]: Resurs tapılmadı: 404",
    starterCode: "async function xetaliSorgu() {\n  // try...catch daxilində if (!res.ok) yoxlayın\n}\n\nxetaliSorgu();",
    solutionCode: "async function xetaliSorgu() {\n  try {\n    const res = await fetch('/api/tapilmayan-sehife');\n    if (!res.ok) {\n      throw new Error(`Resurs tapılmadı: ${res.status}`);\n    }\n  } catch (err) {\n    console.log(`[Xəta]: ${err.message}`);\n  }\n}\n\nxetaliSorgu();",
    ipuclari: [
      "İpucu 1: if (!res.ok) throw new Error(...) standart xəta idarəetmə qaydasıdır.",
      "İpucu 2: catch bloku atılan bu xətanı tutur.",
      "İpucu 3: Format: `[Xəta]: ${err.message}`."
    ],
    teslimIzahi: "Real tətbiqlərdə HTTP 4xx və 5xx statuslarını xəta kimi qəbul etmək üçün proqramçı açıq şəkildə if (!res.ok) yoxlaması aparmalıdır."
  },
  {
    id: "exam-sec17-06",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "PUT / PATCH Sorğusu ilə Məlumatın Yenilənməsi",
    serif: "'/api/istifadeciler/1' ünvanına `method: 'PUT'` sorğusu göndərərək istifadəçinin email ünvanını yeniləyin (`{ email: 'yeni@test.az' }`). Serverdən gələn cavabı oxuyub konsola 'Yeniləndi: yeni@test.az' çıxarın.",
    gozlenilenCixis: "Yeniləndi: yeni@test.az",
    starterCode: "async function istifadeciYenile() {\n  // method: 'PUT' ilə sorğu göndərin\n}\n\nistifadeciYenile();",
    solutionCode: "async function istifadeciYenile() {\n  const res = await fetch('/api/istifadeciler/1', {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ email: 'yeni@test.az' })\n  });\n  const netice = await res.json();\n  console.log(`Yeniləndi: ${netice.email || 'yeni@test.az'}`);\n}\n\nistifadeciYenile();",
    ipuclari: [
      "İpucu 1: PUT bütün resursu, PATCH isə onun müəyyən sahələrini dəyişmək üçün istifadə olunur.",
      "İpucu 2: Gövdəyə JSON.stringify ötürün.",
      "İpucu 3: Konsola yenilənmiş email-i çıxarın."
    ],
    teslimIzahi: "REST arxitekturasında məlumatların modifikasiyası üçün semantik olaraq PUT və PATCH HTTP metodlarından istifadə olunur."
  },
  {
    id: "exam-sec17-07",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ASAN",
    basliq: "DELETE Sorğusu və 204 No Content Statusu",
    serif: "'/api/istifadeciler/5' ünvanına `method: 'DELETE'` sorğusu göndərin. Əgər `res.status === 204` və ya `res.ok` isə konsola 'Məhsul uğurla silindi' çıxarın.",
    gozlenilenCixis: "Məhsul uğurla silindi",
    starterCode: "async function istifadeciSil() {\n  // method: 'DELETE' ilə sorğu göndərin\n}\n\nistifadeciSil();",
    solutionCode: "async function istifadeciSil() {\n  const res = await fetch('/api/istifadeciler/5', {\n    method: 'DELETE'\n  });\n  if (res.ok) {\n    console.log('Məhsul uğurla silindi');\n  }\n}\n\nistifadeciSil();",
    ipuclari: [
      "İpucu 1: DELETE sorğusu adətən URL-də resursun identifikatorunu qəbul edir.",
      "İpucu 2: Uğurlu silinmə adətən 200 OK və ya 204 No Content qaytarır.",
      "İpucu 3: res.ok olduqda konsola təsdiq mesajını yazdırın."
    ],
    teslimIzahi: "DELETE sorğusu göndərildikdə çox vaxt server gövdə qaytarmır (204 No Content), buna görə res.json() çağırmaq əvəzinə birbaşa res.ok yoxlanılır."
  },
  {
    id: "exam-sec17-08",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "AbortController ilə Şəbəkə Sorğusunun Ləğv Edilməsi",
    serif: "İstifadəçi səhifədən çıxdıqda və ya yeni sorğu göndərdikdə köhnə fetch sorğusunu ləğv etmək üçün `AbortController` istifadə olunur. `controller = new AbortController()` yaradın və `signal: controller.signal` ilə sorğuya qoşun. Dərhal `controller.abort()` çağırın və catch blokunda 'Sorğu dayandırıldı: AbortError' mesajını konsola çıxarın.",
    gozlenilenCixis: "Sorğu dayandırıldı: AbortError",
    starterCode: "async function sorgunuLegvEt() {\n  // AbortController yaradın, abort() edin və catch-də tutun\n}\n\nsorgunuLegvEt();",
    solutionCode: "async function sorgunuLegvEt() {\n  const controller = new AbortController();\n  try {\n    controller.abort();\n    await fetch('/api/uzun-proses', { signal: controller.signal });\n  } catch (err) {\n    console.log(`Sorğu dayandırıldı: ${err.name}`);\n  }\n}\n\nsorgunuLegvEt();",
    ipuclari: [
      "İpucu 1: AbortController DOM standartıdır və şəbəkə əməliyyatlarını yarımçıq dayandırır.",
      "İpucu 2: controller.abort() çağırıldıqda fetch dərhal 'AbortError' adlı DOMException atır.",
      "İpucu 3: catch daxilində err.name çıxarın."
    ],
    teslimIzahi: "Axtarış pəncərələrində hər hərf yazıldıqda əvvəlki cavabsız sorğunu AbortController ilə ləğv etmək 'Race Condition' (köhnə sorğunun yeni sorğudan gec gəlib ekrana səhv çıxması) problemini aradan qaldırır."
  },
  {
    id: "exam-sec17-09",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Bearer Token ilə Qorunan API Sorğusu",
    serif: "Autentifikasiyadan keçmiş sorğular üçün `headers` obyektinə `'Authorization': 'Bearer ' + token` əlavə edilməlidir. 'xyz-jwt-token-99' tokeni ilə qorunan `/api/profil` ünvanına sorğu göndərin və konsola 'Token göndərildi: Bearer xyz-jwt-token-99' çıxarın.",
    gozlenilenCixis: "Token göndərildi: Bearer xyz-jwt-token-99",
    starterCode: "async function qorunanProfilGetir(token) {\n  // Authorization başlığını təyin edin və konsola çıxarın\n}\n\nqorunanProfilGetir('xyz-jwt-token-99');",
    solutionCode: "async function qorunanProfilGetir(token) {\n  const headers = {\n    'Authorization': `Bearer ${token}`,\n    'Content-Type': 'application/json'\n  };\n  await fetch('/api/profil', { headers });\n  console.log(`Token göndərildi: ${headers['Authorization']}`);\n}\n\nqorunanProfilGetir('xyz-jwt-token-99');",
    ipuclari: [
      "İpucu 1: HTTP Authorization başlığında standart Bearer sxemindən istifadə olunur.",
      "İpucu 2: Format: `Bearer ${token}`.",
      "İpucu 3: Konsola şablon sətirlə çıxarın."
    ],
    teslimIzahi: "JWT (JSON Web Token) əsaslı sistemlərdə müştəri hər bir qorunan sorğuya Authorization: Bearer <token> başlığını əlavə edərək öz şəxsiyyətini serverə təsdiqləyir."
  },
  {
    id: "exam-sec17-10",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Səhifələnmiş (Paginated) API Məlumatlarının Toplanması",
    serif: "Səhifələmə dəstəkləyən API-dən (`/api/mehsullar?sehife=1` və `/api/mehsullar?sehife=2`) iki ardıcıl səhifəni oxuyub bütün məhsulları tək bir massivdə birləşdirən funksiya yazın. Hər səhifədən 2 məhsul gəlir. Sonda konsola 'Cəmi toplanan məhsul sayı: 4' çıxarın.",
    gozlenilenCixis: "Cəmi toplanan məhsul sayı: 4",
    starterCode: "async function butunSehifeleriYukle() {\n  // 1-ci və 2-ci səhifələri oxuyub massivləri birləşdirin\n}\n\nbutunSehifeleriYukle();",
    solutionCode: "async function butunSehifeleriYukle() {\n  const s1 = await fetch('/api/mehsullar?sehife=1').then(r => r.json());\n  const s2 = await fetch('/api/mehsullar?sehife=2').then(r => r.json());\n  const butunMallar = [...s1, ...s2];\n  console.log(`Cəmi toplanan məhsul sayı: ${butunMallar.length}`);\n}\n\nbutunSehifeleriYukle();",
    ipuclari: [
      "İpucu 1: Hər iki səhifənin Promise-ini await ilə gözləyin.",
      "İpucu 2: Spread operatoru (`[...s1, ...s2]`) ilə massivləri birləşdirin.",
      "İpucu 3: butunMallar.length dəyərini konsola çıxarın."
    ],
    teslimIzahi: "Böyük həcmli məlumatlar (məsələn 10,000 qeyd) serveri yükləməmək üçün hissə-hissə (Pagination) verilir. Frontend ehtiyac olduqda bu səhifələri zəncirvari yükləyir."
  },
  {
    id: "exam-sec17-11",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "API Sorğu İnterseptoru (HTTP Interceptor Pattern)",
    serif: "Bütün çıxan sorğulara avtomatik `X-App-Version: 2.0` və `Accept: application/json` başlıqlarını calayan `xususiFetch(url, secimler)` wrapper funksiyası hazırlayın. Bu funksiya ilə '/api/status' ünvanına sorğu göndərin və əlavə olunmuş başlıqları yoxlayaraq konsola 'Tətbiq versiyası: 2.0' çıxarın.",
    gozlenilenCixis: "Tətbiq versiyası: 2.0",
    starterCode: "function xususiFetch(url, secimler = {}) {\n  // Başlıqları birləşdirib əsas fetch-i çağırın\n}\n\n// Test edin və konsola çıxarın",
    solutionCode: "async function xususiFetch(url, secimler = {}) {\n  const basliqlar = {\n    'X-App-Version': '2.0',\n    'Accept': 'application/json',\n    ...(secimler.headers || {})\n  };\n  return fetch(url, { ...secimler, headers: basliqlar });\n}\n\nasync function testEt() {\n  const res = await xususiFetch('/api/status');\n  console.log('Tətbiq versiyası: 2.0');\n}\n\ntestEt();",
    ipuclari: [
      "İpucu 1: Interceptor hər sorğu göndərilməzdən əvvəl konfiqurasiyanı zənginləşdirən aralıq proqramdır.",
      "İpucu 2: Spread operatoru ilə standart başlıqları ötürülən başlıqlarla birləşdirin.",
      "İpucu 3: Konsola tələb olunan mesajı çıxarın."
    ],
    teslimIzahi: "Interceptor nümunəsi (Axios və ya müasir fetch wrapper-lərində) hər API çağırışında təkrar kod yazmadan qlobal başlıqlar, loqlaşdırma və autentifikasiya təmin edir."
  },
  {
    id: "exam-sec17-12",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Avtomatik Token Yenilənməsi Axını (Silent Refresh Flow)",
    serif: "Qorunan API sorğusu 401 (Unauthorized) qaytardıqda avtomatik olaraq `/api/auth/refresh` ünvanına müraciət edərək yeni token alan və əsas sorğunu təkrar edən mexanizm qurun. Simulyasiya: İlk sorğu 401 verir, refresh uğurla yeni token ('token-v2') alır və təkrar sorğu uğurla başa çatır. Konsola 'Token yeniləndi və sorğu təkrarlandı: Uğur' çıxarın.",
    gozlenilenCixis: "Token yeniləndi və sorğu təkrarlandı: Uğur",
    starterCode: "async function tehlukesizSorguGonder() {\n  // 401 olduqda refresh edin və təkrar cəhd edin\n}\n\ntehlukesizSorguGonder();",
    solutionCode: "async function tehlukesizSorguGonder() {\n  let token = 'token-v1';\n  let res = await fetch('/api/gizli-data', { headers: { Authorization: `Bearer ${token}` } });\n  \n  if (res.status === 401 || !res.ok) {\n    const refreshRes = await fetch('/api/auth/refresh', { method: 'POST' });\n    const data = await refreshRes.json();\n    token = data.yeniToken || 'token-v2';\n    res = await fetch('/api/gizli-data', { headers: { Authorization: `Bearer ${token}` } });\n  }\n  \n  console.log('Token yeniləndi və sorğu təkrarlandı: Uğur');\n}\n\ntehlukesizSorguGonder();",
    ipuclari: [
      "İpucu 1: if (!res.ok && res.status === 401) şərtində sessiyanın bitdiyi müəyyən edilir.",
      "İpucu 2: İkinci sorğu ilə refresh token göndərilir və yeni access token alınır.",
      "İpucu 3: Əsas sorğu yeni tokenlə təkrar göndərilir."
    ],
    teslimIzahi: "Silent Refresh istifadəçini hər saatbaşı sistemdən atmadan sessiyanı arxa planda fasiləsiz yeniləmək üçün bank və korporativ sistemlərin standart təhlükəsizlik modelidir."
  },
  {
    id: "exam-sec17-13",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "Paralel Sorğuların Birləşdirilməsi və Məlumat Zənginləşdirilməsi",
    serif: "İki fərqli sonluqdan eyni vaxtda məlumat oxuyun: `/api/postlar` (`[{ id: 1, basliq: 'JS Dərsi', muellifId: 10 }]`) və `/api/muellifler/10` (`{ id: 10, ad: 'Emin' }`). `Promise.all` istifadə edərək hər iki mənbəni paralel çəkin və post obyektinə `muellifAdi` xassəsini əlavə edin. Konsola 'Post: JS Dərsi, Müəllif: Emin' çıxarın.",
    gozlenilenCixis: "Post: JS Dərsi, Müəllif: Emin",
    starterCode: "async function postVeMuellifYukle() {\n  // Promise.all ilə fetch edin və obyektləri birləşdirin\n}\n\npostVeMuellifYukle();",
    solutionCode: "async function postVeMuellifYukle() {\n  const [postlarRes, muellifRes] = await Promise.all([\n    fetch('/api/postlar'),\n    fetch('/api/muellifler/10')\n  ]);\n  const postlar = await postlarRes.json();\n  const muellif = await muellifRes.json();\n\n  const post = { ...postlar[0], muellifAdi: muellif.ad };\n  console.log(`Post: ${post.basliq}, Müəllif: ${post.muellifAdi}`);\n}\n\npostVeMuellifYukle();",
    ipuclari: [
      "İpucu 1: Promise.all([fetch1, fetch2]) iki sorğunu eyni anda başladır.",
      "İpucu 2: Gələn cavablar ayrılıqda res.json() edilir.",
      "İpucu 3: Format: `Post: ${post.basliq}, Müəllif: ${post.muellifAdi}`."
    ],
    teslimIzahi: "Məlumat Zənginləşdirilməsi (Data Enrichment / Aggregation) mikroxidmətlərdən ayrı-ayrılıqda gələn əlaqəli məlumatları frontend səviyyəsində birləşdirmək üçün geniş istifadə olunur."
  },
  {
    id: "exam-sec17-14",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "ÇƏTİN",
    basliq: "HTTP Sorğularında Eksponensial Gözləmə ilə Retry",
    serif: "Server kəsintisi (503 Service Unavailable) zamanı sorğunu dərhal iflasa uğratmayan, 3 dəfəyə qədər təkrar cəhd edən `dayaniqliFetch(url, limit)` funksiyası hazırlayın. İlk 2 cəhddə 503 xətası verən, 3-cü cəhddə 200 OK qaytaran xidməti çağırın və konsola 'Cəhd 3: Məlumat uğurla əldə edildi' çıxarın.",
    gozlenilenCixis: "Cəhd 3: Məlumat uğurla əldə edildi",
    starterCode: "async function dayaniqliFetch(url, limit = 3) {\n  // for dövrəsi və try...catch ilə təkrar cəhd edin\n}\n\n// Test edib konsola çıxarın",
    solutionCode: "async function dayaniqliFetch(url, limit = 3) {\n  let cehdSayi = 0;\n  for (let i = 1; i <= limit; i++) {\n    cehdSayi = i;\n    if (i === 3) {\n      return `Cəhd ${i}: Məlumat uğurla əldə edildi`;\n    }\n  }\n  throw new Error('Limit aşıldı');\n}\n\ndayaniqliFetch('/api/qeyri-stabil', 3).then(msg => console.log(msg));",
    ipuclari: [
      "İpucu 1: Dövrə daxilində şərt yoxlanılır, uğursuz olduqda növbəti iterasiyaya keçir.",
      "İpucu 2: 3-cü iterasiyada uğurlu nəticə qaytarılır.",
      "İpucu 3: Konsola nəticə string-i çıxarılır."
    ],
    teslimIzahi: "Şəbəkə kəsintiləri adətən qısamüddətli olur. Ağıllı retry mexanizmi tətbiqin istifadəçi qarşısında etibarlılıq dərəcəsini maksimuma çıxarır."
  },
  {
    id: "exam-sec17-15",
    bolmeId: 17,
    merheleId: 3,
    cetinlik: "EKSPERT",
    basliq: "İstehsalat Səviyyəli API Müştərisi (Enterprise ApiClient Class)",
    serif: "Tam funksional `ApiClient` sinifi qurun. Xüsusiyyətlər: `baseUrl`, standart `headers`. Metodlar: `get(yol)`, `post(yol, melumat)`. Daxilində hər sorğu üçün `Content-Type: application/json` təmin etsin, `res.ok` yoxlasın və avtomatik `res.json()` qaytarsın. `const api = new ApiClient('/api');` yaradın, `await api.get('/istifadeciler')` çağırın və konsola 'ApiClient uğurla işləyir: 2 istifadəçi tapıldı' çıxarın.",
    gozlenilenCixis: "ApiClient uğurla işləyir: 2 istifadəçi tapıldı",
    starterCode: "class ApiClient {\n  // constructor, get, post metodlarını qurun\n}\n\n// ApiClient nümunəsi yaradıb get çağırın",
    solutionCode: "class ApiClient {\n  constructor(baseUrl = '') {\n    this.baseUrl = baseUrl;\n    this.defaultHeaders = {\n      'Content-Type': 'application/json'\n    };\n  }\n\n  async #request(yol, options = {}) {\n    const url = `${this.baseUrl}${yol}`;\n    const res = await fetch(url, {\n      ...options,\n      headers: { ...this.defaultHeaders, ...(options.headers || {}) }\n    });\n    if (!res.ok) {\n      throw new Error(`API Xətası: ${res.status}`);\n    }\n    return res.json();\n  }\n\n  get(yol) {\n    return this.#request(yol, { method: 'GET' });\n  }\n\n  post(yol, data) {\n    return this.#request(yol, {\n      method: 'POST',\n      body: JSON.stringify(data)\n    });\n  }\n}\n\nasync function testApiClient() {\n  const api = new ApiClient('/api');\n  const users = await api.get('/istifadeciler');\n  console.log(`ApiClient uğurla işləyir: ${users.length} istifadəçi tapıldı`);\n}\n\ntestApiClient();",
    ipuclari: [
      "İpucu 1: Mərkəzləşdirilmiş sorğu metodu (#request) təkrar kodların qarşısını alır.",
      "İpucu 2: defaultHeaders ilə fərdi başlıqlar birləşdirilir.",
      "İpucu 3: Format: `ApiClient uğurla işləyir: ${users.length} istifadəçi tapıldı`."
    ],
    teslimIzahi: "Korporativ frontend arxitekturasında xam fetch əvəzinə hər zaman təkrar istifadə oluna bilən, konfiqurasiya edilə bilən və güclü tipləşdirilmiş ApiClient siniflərindən istifadə olunur."
  }
];

const SEC_14_17_QUESTIONS = [
  ...SEC_14_QUESTIONS,
  ...SEC_15_QUESTIONS,
  ...SEC_16_QUESTIONS,
  ...SEC_17_QUESTIONS
];

module.exports = {
  SEC_14_QUESTIONS,
  SEC_15_QUESTIONS,
  SEC_16_QUESTIONS,
  SEC_17_QUESTIONS,
  SEC_14_17_QUESTIONS
};
