/* ==========================================================================
   JSÖyrən - Xəta Paneli (Errors Panel) Məlumat Bazası (Bölmə 14 - 21)
   Toplam: 8 Yeni Bölmə, 80 İstehsalat Səviyyəli Xəta Sınağı
   ========================================================================== */

var SECTIONS_14_21_BUGS = [
  {
    "sectionId": "sec-14",
    "bolmeId": 14,
    "icon": "🌐",
    "sectionTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
    "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
    "bugs": [
      {
        "id": "bug-sec14-01",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "querySelector ilə ID Selektorunun Seçilməsi Xətası",
        "title": "querySelector ilə ID Selektorunun Seçilməsi Xətası",
        "tesvir": "Proqramçı 'status-qutusu' identifikatorlu elementin mətnini oxumaq istəyir, lakin konsolda 'TypeError: Cannot read properties of null' xətası baş verir və icra dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Proqramçı 'status-qutusu' identifikatorlu elementin mətnini oxumaq istəyir, lakin konsolda 'TypeError: Cannot read properties of null' xətası baş verir və icra dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const qutu = document.createElement(\"div\");\nqutu.id = \"status-qutusu\";\nqutu.textContent = \"Sistem Aktivdir\";\ndocument.body.appendChild(qutu);\n\n// XƏTA: querySelector ilə ID axtarışı zamanı selektor xətası\nconst element = document.querySelector(\"status-qutusu\");\nconsole.log(\"Status:\", element.textContent);",
        "correctCode": "const qutu = document.createElement(\"div\");\nqutu.id = \"status-qutusu\";\nqutu.textContent = \"Sistem Aktivdir\";\ndocument.body.appendChild(qutu);\n\nconst element = document.querySelector(\"#status-qutusu\");\nconsole.log(\"Status:\", element.textContent);",
        "expectedOutput": "Status: Sistem Aktivdir",
        "correctOutput": "Status: Sistem Aktivdir",
        "ipuclari": [
          "1-ci ipucu: querySelector CSS selektor qaydaları ilə işləyir. ID seçicilərinin əvvəlində hansı xüsusi simvol olmalıdır?",
          "2-ci ipucu: getElementById-dən fərqli olaraq, querySelector parametrində ID üçün '#' prefiksi mütləq yazılmalıdır."
        ],
        "hint": "querySelector CSS selektor qaydaları ilə işləyir. ID seçicilərinin əvvəlində '#' prefiksini yoxlayın.",
        "izah": "document.querySelector metodu CSS selektor sintaksisi tələb edir. Tag deyil, ID seçərkən adın qarşısına '#' qoyulmadıqda element tapılmır və null qayıdır.",
        "explanation": "document.querySelector metodu CSS selektor sintaksisi tələb edir. Tag deyil, ID seçərkən adın qarşısına '#' qoyulmadıqda element tapılmır və null qayıdır."
      },
      {
        "id": "bug-sec14-02",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "NodeList Üzərində Birbaşa Massiv Metodunun Çağırılması",
        "title": "NodeList Üzərində Birbaşa Massiv Metodunun Çağırılması",
        "tesvir": "Bütün menyu elementlərinin mətnini massiv şəklində əldə etmək nəzərdə tutulub, lakin icra zamanı 'TypeError: ...map is not a function' xətası qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Bütün menyu elementlərinin mətnini massiv şəklində əldə etmək nəzərdə tutulub, lakin icra zamanı 'TypeError: ...map is not a function' xətası qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const li1 = document.createElement(\"li\"); li1.className = \"bend\"; li1.textContent = \"Ana Səhifə\";\nconst li2 = document.createElement(\"li\"); li2.className = \"bend\"; li2.textContent = \"Dərslər\";\nconst menu = document.createElement(\"ul\");\nmenu.appendChild(li1); menu.appendChild(li2);\ndocument.body.appendChild(menu);\n\n// XƏTA: querySelectorAll NodeList qaytarır, birbaşa .map mövcud deyil\nconst elementler = menu.querySelectorAll(\".bend\");\nconst basliqlar = elementler.map(el => el.textContent);\nconsole.log(\"Bəndlər:\", basliqlar.join(\", \"));",
        "correctCode": "const li1 = document.createElement(\"li\"); li1.className = \"bend\"; li1.textContent = \"Ana Səhifə\";\nconst li2 = document.createElement(\"li\"); li2.className = \"bend\"; li2.textContent = \"Dərslər\";\nconst menu = document.createElement(\"ul\");\nmenu.appendChild(li1); menu.appendChild(li2);\ndocument.body.appendChild(menu);\n\nconst elementler = Array.from(menu.querySelectorAll(\".bend\"));\nconst basliqlar = elementler.map(el => el.textContent);\nconsole.log(\"Bəndlər:\", basliqlar.join(\", \"));",
        "expectedOutput": "Bəndlər: Ana Səhifə, Dərslər",
        "correctOutput": "Bəndlər: Ana Səhifə, Dərslər",
        "ipuclari": [
          "1-ci ipucu: querySelectorAll tərəfindən qaytarılan kolleksiya həqiqi JavaScript massivi deyil, NodeList obyektidir.",
          "2-ci ipucu: NodeList-i həqiqi massivə çevirmək üçün Array.from() metodundan və ya yayılma (...spread) operatorundan istifadə edin."
        ],
        "hint": "NodeList üzərində .map çağırmazdan əvvəl Array.from() ilə onu massivə çevirin.",
        "izah": "querySelectorAll metodu NodeList qaytarır. NodeList forEach dəstəkləsə də, Array.prototype üzərindəki map, filter, reduce kimi metodlara malik deyil. Array.from() onu massivə çevirir.",
        "explanation": "querySelectorAll metodu NodeList qaytarır. NodeList forEach dəstəkləsə də, Array.prototype üzərindəki map, filter, reduce kimi metodlara malik deyil. Array.from() onu massivə çevirir."
      },
      {
        "id": "bug-sec14-03",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "classList.remove ilə Sinif Adında Nöqtə İstifadəsi Xətası",
        "title": "classList.remove ilə Sinif Adında Nöqtə İstifadəsi Xətası",
        "tesvir": "Elementdən aktiv sinfinin silinərək 'Rejim: Deaktiv' statusunun əks olunması gözlənilir, lakin sinif silinmir və rejim dəyişməz qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Elementdən aktiv sinfinin silinərək 'Rejim: Deaktiv' statusunun əks olunması gözlənilir, lakin sinif silinmir və rejim dəyişməz qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const panel = document.createElement(\"div\");\npanel.className = \"kart aktiv\";\n\n// XƏTA: classList metodlarında sinif adı nöqtə ilə yazılmır\npanel.classList.remove(\".aktiv\");\n\nconst status = panel.classList.contains(\"aktiv\") ? \"Aktiv\" : \"Deaktiv\";\nconsole.log(\"Rejim:\", status);",
        "correctCode": "const panel = document.createElement(\"div\");\npanel.className = \"kart aktiv\";\n\npanel.classList.remove(\"aktiv\");\n\nconst status = panel.classList.contains(\"aktiv\") ? \"Aktiv\" : \"Deaktiv\";\nconsole.log(\"Rejim:\", status);",
        "expectedOutput": "Rejim: Deaktiv",
        "correctOutput": "Rejim: Deaktiv",
        "ipuclari": [
          "1-ci ipucu: classList metodları (add, remove, contains, toggle) CSS selektoru qəbul etmir, birbaşa sinif adını gözləyir.",
          "2-ci ipucu: Sinif adının əvvəlindəki nöqtəni (.) silin."
        ],
        "hint": "classList.remove metoduna sinif adını nöqtəsiz ('aktiv') daxil edin.",
        "izah": "classList API-si bilavasitə sinif identifikatorları ilə işləyir. Parametrdə nöqtə yazıldıqda (.aktiv) brauzer bunu hərfi simvol kimi qəbul edir və '.aktiv' adlı sinif tapılmadığından əməliyyat nəticəsiz qalır.",
        "explanation": "classList API-si bilavasitə sinif identifikatorları ilə işləyir. Parametrdə nöqtə yazıldıqda (.aktiv) brauzer bunu hərfi simvol kimi qəbul edir və '.aktiv' adlı sinif tapılmadığından əməliyyat nəticəsiz qalır."
      },
      {
        "id": "bug-sec14-04",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "setAttribute Metodunda Arqumentlərin Yerinin Dəyişik Düşməsi",
        "title": "setAttribute Metodunda Arqumentlərin Yerinin Dəyişik Düşməsi",
        "tesvir": "Elementə 'elan-kart' identifikatoru verilməlidir, lakin konsolda 'Element ID: boş' çıxışı yaranır və təyin olunmuş ID oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Elementə 'elan-kart' identifikatoru verilməlidir, lakin konsolda 'Element ID: boş' çıxışı yaranır və təyin olunmuş ID oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const qutu = document.createElement(\"div\");\n\n// XƏTA: setAttribute(ad, dəyər) parametrlərinin sırası tərsinə yazılıb\nqutu.setAttribute(\"elan-kart\", \"id\");\n\nconsole.log(\"Element ID:\", qutu.id || \"boş\");",
        "correctCode": "const qutu = document.createElement(\"div\");\n\nqutu.setAttribute(\"id\", \"elan-kart\");\n\nconsole.log(\"Element ID:\", qutu.id || \"boş\");",
        "expectedOutput": "Element ID: elan-kart",
        "correctOutput": "Element ID: elan-kart",
        "ipuclari": [
          "1-ci ipucu: Element.setAttribute() metodunun qəbul etdiyi ilk və ikinci arqumentlərin təyinatını xatırlayın.",
          "2-ci ipucu: İlk arqument atributun adı ('id'), ikinci arqument isə ona verilən dəyər ('elan-kart') olmalıdır."
        ],
        "hint": "setAttribute metodunda 1-ci parametr atribut adı ('id'), 2-ci parametr isə dəyərdir.",
        "izah": "setAttribute(name, value) funksiyasında birinci parametr atributun adı, ikinci isə mənimsədiləcək qiymətdir. Arqumentlər tərsinə verildikdə 'elan-kart' adlı qeyri-standart atribut yaradılır və id boş qalır.",
        "explanation": "setAttribute(name, value) funksiyasında birinci parametr atributun adı, ikinci isə mənimsədiləcək qiymətdir. Arqumentlər tərsinə verildikdə 'elan-kart' adlı qeyri-standart atribut yaradılır və id boş qalır."
      },
      {
        "id": "bug-sec14-05",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "HTML Strukturunun textContent ilə Xam Mətn Kimi Daxil Edilməsi",
        "title": "HTML Strukturunun textContent ilə Xam Mətn Kimi Daxil Edilməsi",
        "tesvir": "Məzmun sahəsinə 'span' daxilində vurğulanmış mətn əlavə edilməlidir, lakin teq brauzerdə HTML elementi kimi render olunmur və uşaq elementlərin sayı 0 qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məzmun sahəsinə 'span' daxilində vurğulanmış mətn əlavə edilməlidir, lakin teq brauzerdə HTML elementi kimi render olunmur və uşaq elementlərin sayı 0 qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const konteyner = document.createElement(\"div\");\n\n// XƏTA: HTML teqləri textContent ilə daxil edildikdə xam mətn kimi qəbul olunur\nkonteyner.textContent = \"<span class='vurgu'>Diqqət</span>\";\n\nconst spanVar = konteyner.children.length > 0;\nconsole.log(\"HTML teqi yaradıldı:\", spanVar ? \"Bəli\" : \"Xeyr\");",
        "correctCode": "const konteyner = document.createElement(\"div\");\n\nkonteyner.innerHTML = \"<span class='vurgu'>Diqqət</span>\";\n\nconst spanVar = konteyner.children.length > 0;\nconsole.log(\"HTML teqi yaradıldı:\", spanVar ? \"Bəli\" : \"Xeyr\");",
        "expectedOutput": "HTML teqi yaradıldı: Bəli",
        "correctOutput": "HTML teqi yaradıldı: Bəli",
        "ipuclari": [
          "1-ci ipucu: textContent mətndəki hər hansı HTML simvollarını xam mətn kimi ekranlaşdırır.",
          "2-ci ipucu: HTML teqlərinin pars olunub DOM elementinə çevrilməsi üçün innerHTML xüsusiyyətindən istifadə edilməlidir."
        ],
        "hint": "HTML strukturunu pars etmək üçün textContent əvəzinə innerHTML yazın.",
        "izah": "textContent xüsusiyyəti daxil edilən simvolları sırf mətn kimi qəbul edir və HTML teqlərini pars etmir. DOM elementlərinin dinamik generasiyası üçün innerHTML istifadə edilməlidir.",
        "explanation": "textContent xüsusiyyəti daxil edilən simvolları sırf mətn kimi qəbul edir və HTML teqlərini pars etmir. DOM elementlərinin dinamik generasiyası üçün innerHTML istifadə edilməlidir."
      },
      {
        "id": "bug-sec14-06",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "appendChild ilə Elementin Nüsxələnməsi Əvəzinə Köçürülməsi",
        "title": "appendChild ilə Elementin Nüsxələnməsi Əvəzinə Köçürülməsi",
        "tesvir": "Eyni nişanın həm sol, həm də sağ paneldə əks olunması tələb olunur, lakin sol paneldəki element yoxa çıxır və 'Sol panel boşdur' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Eyni nişanın həm sol, həm də sağ paneldə əks olunması tələb olunur, lakin sol paneldəki element yoxa çıxır və 'Sol panel boşdur' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const solPanel = document.createElement(\"div\");\nconst sagPanel = document.createElement(\"div\");\n\nconst nisan = document.createElement(\"span\");\nnisan.textContent = \"Yeni\";\n\nsolPanel.appendChild(nisan);\n// XƏTA: Mövcud DOM elementi başqa yerə appendChild edildikdə nüsxələnmir, yerini dəyişir\nsagPanel.appendChild(nisan);\n\nconsole.log(\"Sol panel sayı:\", solPanel.children.length);\nconsole.log(\"Sağ panel sayı:\", sagPanel.children.length);",
        "correctCode": "const solPanel = document.createElement(\"div\");\nconst sagPanel = document.createElement(\"div\");\n\nconst nisan = document.createElement(\"span\");\nnisan.textContent = \"Yeni\";\n\nsolPanel.appendChild(nisan);\nsagPanel.appendChild(nisan.cloneNode(true));\n\nconsole.log(\"Sol panel sayı:\", solPanel.children.length);\nconsole.log(\"Sağ panel sayı:\", sagPanel.children.length);",
        "expectedOutput": "Sol panel sayı: 1\nSağ panel sayı: 1",
        "correctOutput": "Sol panel sayı: 1\nSağ panel sayı: 1",
        "ipuclari": [
          "1-ci ipucu: DOM-da hər hansı element eyni zamanda yalnız bir valideynə aid ola bilər.",
          "2-ci ipucu: İkinci panelə elementi əlavə edərkən nisan.cloneNode(true) ilə onun müstəqil nüsxəsini yaradın."
        ],
        "hint": "Elementi hər iki paneldə saxlamaq üçün cloneNode(true) ilə nüsxələyib əlavə edin.",
        "izah": "Node.appendChild() metodu mövcud qovşağı yeni valideynə daxil etdikdə onu köhnə yerindən avtomatik çıxarır (yerini dəyişir). İki fərqli yerdə eyni görünüş üçün cloneNode(true) vasitəsilə klonlama aparılmalıdır.",
        "explanation": "Node.appendChild() metodu mövcud qovşağı yeni valideynə daxil etdikdə onu köhnə yerindən avtomatik çıxarır (yerini dəyişir). İki fərqli yerdə eyni görünüş üçün cloneNode(true) vasitəsilə klonlama aparılmalıdır."
      },
      {
        "id": "bug-sec14-07",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "dataset Xüsusiyyətində Kebab-Case Adlandırma Səhvi",
        "title": "dataset Xüsusiyyətində Kebab-Case Adlandırma Səhvi",
        "tesvir": "'data-user-id' atributunun dəyəri oxunaraq konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'İstifadəçi ID: undefined' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "'data-user-id' atributunun dəyəri oxunaraq konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'İstifadəçi ID: undefined' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kart = document.createElement(\"div\");\nkart.dataset.userId = \"987\";\n\n// XƏTA: dataset obyekti daxilində data-* atributları camelCase şəklində saxlanılır\nconst oxunanId = kart.dataset[\"user-id\"];\nconsole.log(\"İstifadəçi ID:\", oxunanId);",
        "correctCode": "const kart = document.createElement(\"div\");\nkart.dataset.userId = \"987\";\n\nconst oxunanId = kart.dataset.userId;\nconsole.log(\"İstifadəçi ID:\", oxunanId);",
        "expectedOutput": "İstifadəçi ID: 987",
        "correctOutput": "İstifadəçi ID: 987",
        "ipuclari": [
          "1-ci ipucu: HTML-dəki 'data-user-id' atributu JavaScript HTMLElement.dataset obyektinə xüsusi konversiya qaydası ilə ötürülür.",
          "2-ci ipucu: Defislə ayrılmış adlar dataset daxilində camelCase formatına çevrilir (userId)."
        ],
        "hint": "dataset daxilində kebab-case deyil, camelCase (userId) istifadə olunmalıdır.",
        "izah": "Brauzer data-* atributlarını dataset obyektinə köçürərkən bütün defisləri silir və sonrakı hərfləri böyük hərflə əvəzləyir (camelCase). Buna görə də kart.dataset.userId istifadə edilməlidir.",
        "explanation": "Brauzer data-* atributlarını dataset obyektinə köçürərkən bütün defisləri silir və sonrakı hərfləri böyük hərflə əvəzləyir (camelCase). Buna görə də kart.dataset.userId istifadə edilməlidir."
      },
      {
        "id": "bug-sec14-08",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "createElement Parametrində Bucaq Mötərizələrin İstifadəsi",
        "title": "createElement Parametrində Bucaq Mötərizələrin İstifadəsi",
        "tesvir": "Sənəddə yeni düymə yaradılmalıdır, lakin yaranan qovşağın teq adı standart 'BUTTON' ilə uyğun gəlmir və yoxlama uğursuz olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Sənəddə yeni düymə yaradılmalıdır, lakin yaranan qovşağın teq adı standart 'BUTTON' ilə uyğun gəlmir və yoxlama uğursuz olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// XƏTA: createElement arqumenti kimi HTML teq simvolları yazılmır\nconst btn = document.createElement(\"<button>\");\nbtn.textContent = \"Təsdiqlə\";\n\nconsole.log(\"Teq adı:\", btn.tagName);",
        "correctCode": "const btn = document.createElement(\"button\");\nbtn.textContent = \"Təsdiqlə\";\n\nconsole.log(\"Teq adı:\", btn.tagName);",
        "expectedOutput": "Teq adı: BUTTON",
        "correctOutput": "Teq adı: BUTTON",
        "ipuclari": [
          "1-ci ipucu: document.createElement metodu HTML stringi yox, sırf teqin adını (məsələn, 'div', 'p', 'button') qəbul edir.",
          "2-ci ipucu: Bucaq mötərizələrini (< və >) parametr daxilindən silin."
        ],
        "hint": "createElement metoduna arqument olaraq yalnız teqin adını ('button') ötürün.",
        "izah": "document.createElement(tagName) metodu arqument olaraq sırf teqin adını sətir kimi qəbul edir. '<button>' yazıldıqda sintaktik olaraq etibarsız element yaranır.",
        "explanation": "document.createElement(tagName) metodu arqument olaraq sırf teqin adını sətir kimi qəbul edir. '<button>' yazıldıqda sintaktik olaraq etibarsız element yaranır."
      },
      {
        "id": "bug-sec14-09",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "cloneNode ilə Dərin Klonlama Bayrağının Buraxılması",
        "title": "cloneNode ilə Dərin Klonlama Bayrağının Buraxılması",
        "tesvir": "Məhsul kartı klonlanaraq səbətə əlavə edilməlidir, lakin klonun daxili başlığı və mətni kopyalanmır və 'Klon mətni: (Boş)' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsul kartı klonlanaraq səbətə əlavə edilməlidir, lakin klonun daxili başlığı və mətni kopyalanmır və 'Klon mətni: (Boş)' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kart = document.createElement(\"div\");\nkart.className = \"mehsul-kart\";\nconst basliq = document.createElement(\"h4\");\nbasliq.textContent = \"Smartfon\";\nkart.appendChild(basliq);\n\n// XƏTA: cloneNode() arqumentsiz çağırıldıqda dərin klonlama aparılmır\nconst nusxe = kart.cloneNode();\nconsole.log(\"Klon mətni:\", nusxe.textContent || \"(Boş)\");",
        "correctCode": "const kart = document.createElement(\"div\");\nkart.className = \"mehsul-kart\";\nconst basliq = document.createElement(\"h4\");\nbasliq.textContent = \"Smartfon\";\nkart.appendChild(basliq);\n\nconst nusxe = kart.cloneNode(true);\nconsole.log(\"Klon mətni:\", nusxe.textContent || \"(Boş)\");",
        "expectedOutput": "Klon mətni: Smartfon",
        "correctOutput": "Klon mətni: Smartfon",
        "ipuclari": [
          "1-ci ipucu: cloneNode() funksiyası standart olaraq daxili uşaq elementləri və mətn qovşaqlarını nüsxələmir.",
          "2-ci ipucu: Bütün alt elementlərin birgə dərin kopyalanması üçün cloneNode(true) ötürülməlidir."
        ],
        "hint": "Alt elementləri və mətnləri ilə birlikdə kopyalamaq üçün cloneNode(true) yazılmalıdır.",
        "izah": "Node.prototype.cloneNode(deep) metodu deep=false olduqda yalnız qovşağın özünü klonlayır. Bütün daxili strukturu kopyalamaq üçün arqument kimi 'true' ötürülməlidir.",
        "explanation": "Node.prototype.cloneNode(deep) metodu deep=false olduqda yalnız qovşağın özünü klonlayır. Bütün daxili strukturu kopyalamaq üçün arqument kimi 'true' ötürülməlidir."
      },
      {
        "id": "bug-sec14-10",
        "bolmeId": 14,
        "bolmeTitle": "Bölmə 14: DOM Əsasları və Elementlərin Seçilməsi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "closest() Metodunda Səhv Valideyn Selektorunun Axtarışı",
        "title": "closest() Metodunda Səhv Valideyn Selektorunun Axtarışı",
        "tesvir": "İç-içə yerləşən simgədən əsas 'kart-konteyner' valideynini tapmaq tələb olunur, lakin selektor xətasına görə 'null' qayıdır və 'Valideyn tapılmadı' çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İç-içə yerləşən simgədən əsas 'kart-konteyner' valideynini tapmaq tələb olunur, lakin selektor xətasına görə 'null' qayıdır və 'Valideyn tapılmadı' çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const konteyner = document.createElement(\"div\");\nkonteyner.className = \"kart-konteyner\";\nconst duyme = document.createElement(\"button\");\nconst simge = document.createElement(\"span\");\nduyme.appendChild(simge);\nkonteyner.appendChild(duyme);\n\n// XƏTA: sinif axtararkən CSS nöqtə prefiksi unudulub\nconst tapilan = simge.closest(\"kart-konteyner\");\nconsole.log(\"Nəticə:\", tapilan ? \"Uğurlu\" : \"Valideyn tapılmadı\");",
        "correctCode": "const konteyner = document.createElement(\"div\");\nkonteyner.className = \"kart-konteyner\";\nconst duyme = document.createElement(\"button\");\nconst simge = document.createElement(\"span\");\nduyme.appendChild(simge);\nkonteyner.appendChild(duyme);\n\nconst tapilan = simge.closest(\".kart-konteyner\");\nconsole.log(\"Nəticə:\", tapilan ? \"Uğurlu\" : \"Valideyn tapılmadı\");",
        "expectedOutput": "Nəticə: Uğurlu",
        "correctOutput": "Nəticə: Uğurlu",
        "ipuclari": [
          "1-ci ipucu: closest() metodu CSS selektoru qəbul edir.",
          "2-ci ipucu: Sinif adını axtararkən qarşısına mütləq '.' nöqtə işarəsi qoyulmalıdır: closest('.kart-konteyner')."
        ],
        "hint": "closest() metodu CSS selektoru ilə işləyir. Sinif axtararkən nöqtə qoymağı unutmayın.",
        "izah": "closest() metodu DOM iyerarxiyasında yuxarıya doğru CSS selektoruna uyğun ilk əcdadı axtarır. Nöqtə qoyulmadıqda onu HTML teqi kimi axtarır və tapa bilmir.",
        "explanation": "closest() metodu DOM iyerarxiyasında yuxarıya doğru CSS selektoruna uyğun ilk əcdadı axtarır. Nöqtə qoyulmadıqda onu HTML teqi kimi axtarır və tapa bilmir."
      }
    ]
  },
  {
    "sectionId": "sec-15",
    "bolmeId": 15,
    "icon": "⚡",
    "sectionTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
    "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
    "bugs": [
      {
        "id": "bug-sec15-01",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "addEventListener Daxilində Callback-in Birbaşa Çağırılması",
        "title": "addEventListener Daxilində Callback-in Birbaşa Çağırılması",
        "tesvir": "Düymə klikləndikdə qeydiyyat mesajının konsola çıxması gözlənilir, lakin hadisə dinləyicisi qoşularkən funksiya dərhal icra olunur və sonrakı kliklərdə heç nə baş vermir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Düymə klikləndikdə qeydiyyat mesajının konsola çıxması gözlənilir, lakin hadisə dinləyicisi qoşularkən funksiya dərhal icra olunur və sonrakı kliklərdə heç nə baş vermir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const btn = document.createElement(\"button\");\nlet saygac = 0;\n\nfunction klikle() {\n  saygac++;\n}\n\n// XƏTA: Funksiyanın referansı deyil, çağırışı () ötürülüb\nbtn.addEventListener(\"click\", klikle());\n\nbtn.click();\nbtn.click();\nconsole.log(\"Klik sayı:\", saygac);",
        "correctCode": "const btn = document.createElement(\"button\");\nlet saygac = 0;\n\nfunction klikle() {\n  saygac++;\n}\n\nbtn.addEventListener(\"click\", klikle);\n\nbtn.click();\nbtn.click();\nconsole.log(\"Klik sayı:\", saygac);",
        "expectedOutput": "Klik sayı: 2",
        "correctOutput": "Klik sayı: 2",
        "ipuclari": [
          "1-ci ipucu: addEventListener metodunun 2-ci arqumenti funksiyanın nəticəsi deyil, funksiyanın öz referansı olmalıdır.",
          "2-ci ipucu: Funksiya adının sonundakı mötərizələri () yığışdırın."
        ],
        "hint": "addEventListener-ə funksiyanı çağırıb nəticəsini deyil, birbaşa referansını ötürün.",
        "izah": "addEventListener funksiyanın referansını gözləyir. klilke() yazıldıqda funksiya kod təyin olunan anda dərhal icra olunur və addEventListener-ə undefined ötürülür.",
        "explanation": "addEventListener funksiyanın referansını gözləyir. klilke() yazıldıqda funksiya kod təyin olunan anda dərhal icra olunur və addEventListener-ə undefined ötürülür."
      },
      {
        "id": "bug-sec15-02",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "removeEventListener ilə Anonim Funksiyanın Silinməsi Cəhdi",
        "title": "removeEventListener ilə Anonim Funksiyanın Silinməsi Cəhdi",
        "tesvir": "Müəyyən əməliyyatdan sonra dinləyici ləğv edilməli və sayğac 1-də qalmalıdır, lakin dinləyici silinmir və sonrakı klikdə sayğac 2-yə yüksəlir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Müəyyən əməliyyatdan sonra dinləyici ləğv edilməli və sayğac 1-də qalmalıdır, lakin dinləyici silinmir və sonrakı klikdə sayğac 2-yə yüksəlir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const btn = document.createElement(\"button\");\nlet xal = 0;\n\n// XƏTA: Anonim funksiyalar yaddaşda fərqli referanslara malikdir\nbtn.addEventListener(\"click\", () => { xal++; });\nbtn.click();\n\nbtn.removeEventListener(\"click\", () => { xal++; });\nbtn.click();\n\nconsole.log(\"Yekun xal:\", xal);",
        "correctCode": "const btn = document.createElement(\"button\");\nlet xal = 0;\n\nconst handler = () => { xal++; };\nbtn.addEventListener(\"click\", handler);\nbtn.click();\n\nbtn.removeEventListener(\"click\", handler);\nbtn.click();\n\nconsole.log(\"Yekun xal:\", xal);",
        "expectedOutput": "Yekun xal: 1",
        "correctOutput": "Yekun xal: 1",
        "ipuclari": [
          "1-ci ipucu: removeEventListener yalnız addEventListener-ə ötürülmüş eyni yaddaş ünvanlı funksiya referansını qəbul etdikdə işləyir.",
          "2-ci ipucu: Callback funksiyasını ayrıca dəyişəndə saxlayın və hər iki metoda həmin dəyişəni ötürün."
        ],
        "hint": "Eyni funksiya referansını dəyişəndə saxlayıb həm add, həm də remove metoduna ötürün.",
        "izah": "JavaScript-də iki fərqli anonim funksiya mətni eyni olsa belə fərqli obyekt referanslarıdır. removeEventListener dinləyicini tanıya bilmir və silmə baş vermir.",
        "explanation": "JavaScript-də iki fərqli anonim funksiya mətni eyni olsa belə fərqli obyekt referanslarıdır. removeEventListener dinləyicini tanıya bilmir və silmə baş vermir."
      },
      {
        "id": "bug-sec15-03",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Hadisə Nümayəndəliyində (Delegation) e.target vs closest() Xətası",
        "title": "Hadisə Nümayəndəliyində (Delegation) e.target vs closest() Xətası",
        "tesvir": "Siyahıdakı bənd klikləndikdə bəndin 'data-id' atributu oxunmalıdır, lakin daxili teq klikləndikdə 'Seçildi: undefined' çıxışı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Siyahıdakı bənd klikləndikdə bəndin 'data-id' atributu oxunmalıdır, lakin daxili teq klikləndikdə 'Seçildi: undefined' çıxışı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const ul = document.createElement(\"ul\");\nconst li = document.createElement(\"li\");\nli.dataset.id = \"45\";\nconst span = document.createElement(\"span\");\nspan.textContent = \"Məhsul Detalı\";\nli.appendChild(span);\nul.appendChild(li);\n\nlet secilmisId = null;\nul.addEventListener(\"click\", (e) => {\n  // XƏTA: Birbaşa e.target daxili span elementi ola bilər və dataset.id-yə malik deyil\n  secilmisId = e.target.dataset.id;\n});\n\n// Simulyasiya: daxili span kliklənir\nspan.click();\nconsole.log(\"Seçildi:\", secilmisId);",
        "correctCode": "const ul = document.createElement(\"ul\");\nconst li = document.createElement(\"li\");\nli.dataset.id = \"45\";\nconst span = document.createElement(\"span\");\nspan.textContent = \"Məhsul Detalı\";\nli.appendChild(span);\nul.appendChild(li);\n\nlet secilmisId = null;\nul.addEventListener(\"click\", (e) => {\n  const item = e.target.closest(\"li\");\n  secilmisId = item ? item.dataset.id : null;\n});\n\nspan.click();\nconsole.log(\"Seçildi:\", secilmisId);",
        "expectedOutput": "Seçildi: 45",
        "correctOutput": "Seçildi: 45",
        "ipuclari": [
          "1-ci ipucu: Event delegation zamanı e.target həmişə hədəflənən valideyn deyil, bilavasitə kliklənən ən daxili uşaq elementi göstərir.",
          "2-ci ipucu: e.target.closest('li') istifadə edərək ən yaxın li valideynini tapın və onun dataset.id-sini oxuyun."
        ],
        "hint": "e.target yerinə e.target.closest('li') vasitəsilə lazımi elementi tapın.",
        "izah": "Event delegation-da kliklənən element uşaq teq (məsələn, <span> və ya <i>) olduqda e.target həmin uşağı təmsil edir. dataset valideyn <li>-də olduğu üçün closest('li') vasitəsilə əcdada müraciət edilməlidir.",
        "explanation": "Event delegation-da kliklənən element uşaq teq (məsələn, <span> və ya <i>) olduqda e.target həmin uşağı təmsil edir. dataset valideyn <li>-də olduğu üçün closest('li') vasitəsilə əcdada müraciət edilməlidir."
      },
      {
        "id": "bug-sec15-04",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Form Göndərilməsində preventDefault() Unudulması",
        "title": "Form Göndərilməsində preventDefault() Unudulması",
        "tesvir": "İstifadəçi formu təsdiqlədikdə səhifə yenilənmədən AJAX göndərişi icra olunmalıdır, lakin standart davranış dayandırılmadığı üçün yoxlama bayrağı 'Standart rejim aktivdir' xətası verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi formu təsdiqlədikdə səhifə yenilənmədən AJAX göndərişi icra olunmalıdır, lakin standart davranış dayandırılmadığı üçün yoxlama bayrağı 'Standart rejim aktivdir' xətası verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const form = document.createElement(\"form\");\nlet emalStatusu = \"Gözləyir\";\n\nform.addEventListener(\"submit\", (e) => {\n  // XƏTA: Standart brauzer göndərmə davranışı dayandırılmayıb\n  emalStatusu = e.defaultPrevented ? \"Qorundu və emal olundu\" : \"Standart rejim aktivdir\";\n});\n\nconst submitEvt = new Event(\"submit\", { cancelable: true });\nform.dispatchEvent(submitEvt);\n\nconsole.log(\"Status:\", emalStatusu);",
        "correctCode": "const form = document.createElement(\"form\");\nlet emalStatusu = \"Gözləyir\";\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  emalStatusu = e.defaultPrevented ? \"Qorundu və emal olundu\" : \"Standart rejim aktivdir\";\n});\n\nconst submitEvt = new Event(\"submit\", { cancelable: true });\nform.dispatchEvent(submitEvt);\n\nconsole.log(\"Status:\", emalStatusu);",
        "expectedOutput": "Status: Qorundu və emal olundu",
        "correctOutput": "Status: Qorundu və emal olundu",
        "ipuclari": [
          "1-ci ipucu: Brauzerin form submit və ya link klikləmə kimi standart hərəkətlərini ləğv etmək üçün xüsusi hadisə metodu mövcuddur.",
          "2-ci ipucu: Hadisə obyektində e.preventDefault() çağırışı edin."
        ],
        "hint": "Hadisə obyekti üzərində e.preventDefault() metodunu çağırın.",
        "izah": "HTML formlarının standart davranışı səhifəni yeniləmək və ya yeni səhifəyə keçməkdir. Tək səhifəli tətbiqlərdə (SPA) e.preventDefault() çağırılaraq bu davranış dayandırılmalıdır.",
        "explanation": "HTML formlarının standart davranışı səhifəni yeniləmək və ya yeni səhifəyə keçməkdir. Tək səhifəli tətbiqlərdə (SPA) e.preventDefault() çağırılaraq bu davranış dayandırılmalıdır."
      },
      {
        "id": "bug-sec15-05",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "stopPropagation Çatışmazlığı Səbəbilə Valideynin İcra Olunması",
        "title": "stopPropagation Çatışmazlığı Səbəbilə Valideynin İcra Olunması",
        "tesvir": "Kart daxilindəki 'Sil' düyməsi klikləndikdə yalnız silinmə baş verməlidir, lakin hadisə köpüklənməsi nəticəsində əsas kartın da klik hadisəsi işə düşür və artıq məlumat çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Kart daxilindəki 'Sil' düyməsi klikləndikdə yalnız silinmə baş verməlidir, lakin hadisə köpüklənməsi nəticəsində əsas kartın da klik hadisəsi işə düşür və artıq məlumat çap olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kart = document.createElement(\"div\");\nconst silBtn = document.createElement(\"button\");\nkart.appendChild(silBtn);\n\nconst jurnallar = [];\n\nkart.addEventListener(\"click\", () => {\n  jurnallar.push(\"Kart açıldı\");\n});\n\nsilBtn.addEventListener(\"click\", (e) => {\n  // XƏTA: Hadisənin yuxarı valideynə yayılmasının qarşısı alınmayıb\n  jurnallar.push(\"Məhsul silindi\");\n});\n\nsilBtn.click();\nconsole.log(\"Hadisələr:\", jurnallar.join(\" -> \"));",
        "correctCode": "const kart = document.createElement(\"div\");\nconst silBtn = document.createElement(\"button\");\nkart.appendChild(silBtn);\n\nconst jurnallar = [];\n\nkart.addEventListener(\"click\", () => {\n  jurnallar.push(\"Kart açıldı\");\n});\n\nsilBtn.addEventListener(\"click\", (e) => {\n  e.stopPropagation();\n  jurnallar.push(\"Məhsul silindi\");\n});\n\nsilBtn.click();\nconsole.log(\"Hadisələr:\", jurnallar.join(\" -> \"));",
        "expectedOutput": "Hadisələr: Məhsul silindi",
        "correctOutput": "Hadisələr: Məhsul silindi",
        "ipuclari": [
          "1-ci ipucu: Hadisələr uşaq elementdən yuxarıya doğru köpüklənir (bubbling).",
          "2-ci ipucu: Hadisənin valideynlərə ötürülməsini dayandırmaq üçün e.stopPropagation() metodundan istifadə edin."
        ],
        "hint": "Hadisə köpüklənməsini dayandırmaq üçün e.stopPropagation() metodunu çağırın.",
        "izah": "DOM hadisələri standart olaraq daxili qovşaqdan valideyn qovşaqlara doğru yayılır (Event Bubbling). Daxili düymə daxilində e.stopPropagation() çağırıldıqda yayılma dərhal dayandırılır.",
        "explanation": "DOM hadisələri standart olaraq daxili qovşaqdan valideyn qovşaqlara doğru yayılır (Event Bubbling). Daxili düymə daxilində e.stopPropagation() çağırıldıqda yayılma dərhal dayandırılır."
      },
      {
        "id": "bug-sec15-06",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Ox Funksiyasında this Kontekstinin İtirilməsi",
        "title": "Ox Funksiyasında this Kontekstinin İtirilməsi",
        "tesvir": "Hadisə baş verdikdə cari elementin sinfi dəyişdirilməlidir, lakin 'TypeError: Cannot read properties of undefined' xətası atılır və əməliyyat baş tutmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hadisə baş verdikdə cari elementin sinfi dəyişdirilməlidir, lakin 'TypeError: Cannot read properties of undefined' xətası atılır və əməliyyat baş tutmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const btn = document.createElement(\"button\");\nbtn.id = \"giris-duymesi\";\n\nbtn.addEventListener(\"click\", (e) => {\n  // XƏTA: Ox funksiyası öz this-inə malik deyil, leksik mühiti götürür\n  // Elementə müraciət üçün e.currentTarget istifadə edilməlidir\n  const id = this ? this.id : e.target.id;\n  console.log(\"Aktiv element:\", id);\n});\n\nbtn.click();",
        "correctCode": "const btn = document.createElement(\"button\");\nbtn.id = \"giris-duymesi\";\n\nbtn.addEventListener(\"click\", function(e) {\n  const id = this.id;\n  console.log(\"Aktiv element:\", id);\n});\n\nbtn.click();",
        "expectedOutput": "Aktiv element: giris-duymesi",
        "correctOutput": "Aktiv element: giris-duymesi",
        "ipuclari": [
          "1-ci ipucu: Ox funksiyaları (arrow functions) hadisəni dinləyən elementə this bağlamır.",
          "2-ci ipucu: Ənənəvi 'function' sintaksisindən istifadə edin və ya e.currentTarget-ə müraciət edin."
        ],
        "hint": "this kontekstinin elementə bağlanması üçün standart 'function(e)' sintaksisindən istifadə edin.",
        "izah": "Ox funksiyaları leksik kontekstə malikdir və DOM hadisə dinləyicisi tərəfindən 'this' elementi mənimsədilmir. Standart function deklarasiyası isə 'this'-i cari hadisə elementinə bağlayır.",
        "explanation": "Ox funksiyaları leksik kontekstə malikdir və DOM hadisə dinləyicisi tərəfindən 'this' elementi mənimsədilmir. Standart function deklarasiyası isə 'this'-i cari hadisə elementinə bağlayır."
      },
      {
        "id": "bug-sec15-07",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Təkrarlanan Dinləyici Qoşulması və once Seçiminin İstifadə Edilməməsi",
        "title": "Təkrarlanan Dinləyici Qoşulması və once Seçiminin İstifadə Edilməməsi",
        "tesvir": "Ödəniş təsdiqi zamanı əməliyyatın yalnız bir dəfə icra olunması tələb olunur, lakin düymə hər klikləndikdə funksiya təkrar qoşulur və 'Ödəniş sayı: 2' çıxaraq təkrarlanan tranzaksiyaya səbəb olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Ödəniş təsdiqi zamanı əməliyyatın yalnız bir dəfə icra olunması tələb olunur, lakin düymə hər klikləndikdə funksiya təkrar qoşulur və 'Ödəniş sayı: 2' çıxaraq təkrarlanan tranzaksiyaya səbəb olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const odenisBtn = document.createElement(\"button\");\nlet tranzaksiyaSayi = 0;\n\nfunction odenisEt() {\n  tranzaksiyaSayi++;\n}\n\n// XƏTA: Hadisənin yalnız bir dəfə icra olunması üçün opsiya təyin edilməyib\nodenisBtn.addEventListener(\"click\", odenisEt);\n\nodenisBtn.click();\nodenisBtn.click();\n\nconsole.log(\"Ödəniş sayı:\", tranzaksiyaSayi);",
        "correctCode": "const odenisBtn = document.createElement(\"button\");\nlet tranzaksiyaSayi = 0;\n\nfunction odenisEt() {\n  tranzaksiyaSayi++;\n}\n\nodenisBtn.addEventListener(\"click\", odenisEt, { once: true });\n\nodenisBtn.click();\nodenisBtn.click();\n\nconsole.log(\"Ödəniş sayı:\", tranzaksiyaSayi);",
        "expectedOutput": "Ödəniş sayı: 1",
        "correctOutput": "Ödəniş sayı: 1",
        "ipuclari": [
          "1-ci ipucu: addEventListener metodunun 3-cü parametri konfiqurasiya obyekti qəbul edə bilir.",
          "2-ci ipucu: Hadisənin yalnız bir dəfə işləyib avtomatik silinməsi üçün { once: true } seçimini təyin edin."
        ],
        "hint": "addEventListener-in 3-cü arqumentinə { once: true } parametrini ötürün.",
        "izah": "addEventListener metodunun 3-cü arqumentinə { once: true } ötürüldükdə hadisə ilk icradan sonra avtomatik olaraq DOM elementindən təmizlənir və təkrar təsdiqlərin qarşısını alır.",
        "explanation": "addEventListener metodunun 3-cü arqumentinə { once: true } ötürüldükdə hadisə ilk icradan sonra avtomatik olaraq DOM elementindən təmizlənir və təkrar təsdiqlərin qarşısını alır."
      },
      {
        "id": "bug-sec15-08",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "CustomEvent Məlumatının Səhv Sahədən Oxunması",
        "title": "CustomEvent Məlumatının Səhv Sahədən Oxunması",
        "tesvir": "Xüsusi 'balans-artimi' hadisəsi vasitəsilə məbləğ oxunmalı və ekrana çıxarılmalıdır, lakin konsolda 'Məbləğ: undefined AZN' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Xüsusi 'balans-artimi' hadisəsi vasitəsilə məbləğ oxunmalı və ekrana çıxarılmalıdır, lakin konsolda 'Məbləğ: undefined AZN' qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const panel = document.createElement(\"div\");\n\npanel.addEventListener(\"balans-artimi\", (e) => {\n  // XƏTA: CustomEvent daxilində məlumat data sahəsində deyil, detail sahəsində yerləşir\n  const mebleg = e.data ? e.data.mebleg : undefined;\n  console.log(\"Məbləğ:\", mebleg, \"AZN\");\n});\n\nconst hadise = new CustomEvent(\"balans-artimi\", {\n  detail: { mebleg: 150 }\n});\npanel.dispatchEvent(hadise);",
        "correctCode": "const panel = document.createElement(\"div\");\n\npanel.addEventListener(\"balans-artimi\", (e) => {\n  const mebleg = e.detail ? e.detail.mebleg : undefined;\n  console.log(\"Məbləğ:\", mebleg, \"AZN\");\n});\n\nconst hadise = new CustomEvent(\"balans-artimi\", {\n  detail: { mebleg: 150 }\n});\npanel.dispatchEvent(hadise);",
        "expectedOutput": "Məbləğ: 150 AZN",
        "correctOutput": "Məbləğ: 150 AZN",
        "ipuclari": [
          "1-ci ipucu: Brauzerin CustomEvent obyekti ötürülən yükü (payload) xüsusi standart adlı sahədə saxlayır.",
          "2-ci ipucu: e.data deyil, e.detail sahəsindən istifadə edin."
        ],
        "hint": "CustomEvent-in göndərdiyi parametrə e.detail vasitəsilə daxil olun.",
        "izah": "DOM CustomEvent standartına görə, hadisə konstruktoruna ötürülən bütün fərdi məlumatlar 'detail' xassəsində saxlanılır. e.data adətən WebSockets və ya Web Workers-də istifadə olunur.",
        "explanation": "DOM CustomEvent standartına görə, hadisə konstruktoruna ötürülən bütün fərdi məlumatlar 'detail' xassəsində saxlanılır. e.data adətən WebSockets və ya Web Workers-də istifadə olunur."
      },
      {
        "id": "bug-sec15-09",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Qapanma (Closure) İtirildiyi Üçün Debounce Mexanizminin İşləməməsi",
        "title": "Qapanma (Closure) İtirildiyi Üçün Debounce Mexanizminin İşləməməsi",
        "tesvir": "Hərflər daxil edildikcə axtarış gecikməli işə düşməli və yalnız 1 yekun sorğu göndərilməlidir, lakin hər girişdə taymer sıfırlanmır və sorğu 3 dəfə icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hərflər daxil edildikcə axtarış gecikməli işə düşməli və yalnız 1 yekun sorğu göndərilməlidir, lakin hər girişdə taymer sıfırlanmır və sorğu 3 dəfə icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let sorquSayi = 0;\n\n// XƏTA: timer dəyişəni funksiyanın daxilindədir və hər çağırışda yenidən yaranır\nfunction gecikdirilmisAxtar(metn) {\n  let timer;\n  clearTimeout(timer);\n  timer = setTimeout(() => {\n    sorquSayi++;\n  }, 50);\n}\n\ngecikdirilmisAxtar(\"j\");\ngecikdirilmisAxtar(\"js\");\ngecikdirilmisAxtar(\"jsoyren\");\n\nawait new Promise(r => setTimeout(r, 100));\nconsole.log(\"Göndərilən sorğu sayı:\", sorquSayi);",
        "correctCode": "let sorquSayi = 0;\n\nlet timer;\nfunction gecikdirilmisAxtar(metn) {\n  clearTimeout(timer);\n  timer = setTimeout(() => {\n    sorquSayi++;\n  }, 50);\n}\n\ngecikdirilmisAxtar(\"j\");\ngecikdirilmisAxtar(\"js\");\ngecikdirilmisAxtar(\"jsoyren\");\n\nawait new Promise(r => setTimeout(r, 100));\nconsole.log(\"Göndərilən sorğu sayı:\", sorquSayi);",
        "expectedOutput": "Göndərilən sorğu sayı: 1",
        "correctOutput": "Göndərilən sorğu sayı: 1",
        "ipuclari": [
          "1-ci ipucu: Funksiya daxilində elan edilən lokal dəyişənlər funksiya bitdikdə itir və növbəti çağırışda əvvəlki dəyəri xatırlamır.",
          "2-ci ipucu: Taymer identifikatorunu (timer) xarici qapanma mühitində (funksiyadan kənarda) saxlayın ki, clearTimeout əvvəlki taymeri ləğv edə bilsin."
        ],
        "hint": "timer dəyişənini funksiyadan kənara çıxararaq qapanma (closure) yaradın.",
        "izah": "Debounce mexanizminin işləməsi üçün taymer identifikatoru çağırışlar arasında qorunmalıdır. Dəyişən daxildə elan edildikdə clearTimeout həmişə undefined təmizləyir və hər kəlmə üçün yeni taymer işə düşür.",
        "explanation": "Debounce mexanizminin işləməsi üçün taymer identifikatoru çağırışlar arasında qorunmalıdır. Dəyişən daxildə elan edildikdə clearTimeout həmişə undefined təmizləyir və hər kəlmə üçün yeni taymer işə düşür."
      },
      {
        "id": "bug-sec15-10",
        "bolmeId": 15,
        "bolmeTitle": "Bölmə 15: DOM Hadisələri və Dinamik İnterfeyslər",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Hadisə İzləmə Fazasında (Capturing Phase) Bayrağın Buraxılması",
        "title": "Hadisə İzləmə Fazasında (Capturing Phase) Bayrağın Buraxılması",
        "tesvir": "Təhlükəsizlik auditində hadisənin daxili elementlərə çatmamışdan əvvəl valideyn səviyyəsində tutulması (capturing) tələb olunur, lakin növbəlilik tərsinə işləyir və 'Uşaq -> Valideyn' ardıcıllığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Təhlükəsizlik auditində hadisənin daxili elementlərə çatmamışdan əvvəl valideyn səviyyəsində tutulması (capturing) tələb olunur, lakin növbəlilik tərsinə işləyir və 'Uşaq -> Valideyn' ardıcıllığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const panel = document.createElement(\"div\");\nconst btn = document.createElement(\"button\");\npanel.appendChild(btn);\n\nconst sira = [];\n\n// XƏTA: Standart olaraq dinləyicilər köpüklənmə (bubbling) fazasında işləyir\npanel.addEventListener(\"click\", () => {\n  sira.push(\"Valideyn Nəzarətçisi\");\n});\n\nbtn.addEventListener(\"click\", () => {\n  sira.push(\"Uşaq Əməliyyatı\");\n});\n\nbtn.click();\nconsole.log(\"İcra ardıcıllığı:\", sira.join(\" -> \"));",
        "correctCode": "const panel = document.createElement(\"div\");\nconst btn = document.createElement(\"button\");\npanel.appendChild(btn);\n\nconst sira = [];\n\npanel.addEventListener(\"click\", () => {\n  sira.push(\"Valideyn Nəzarətçisi\");\n}, true);\n\nbtn.addEventListener(\"click\", () => {\n  sira.push(\"Uşaq Əməliyyatı\");\n});\n\nbtn.click();\nconsole.log(\"İcra ardıcıllığı:\", sira.join(\" -> \"));",
        "expectedOutput": "İcra ardıcıllığı: Valideyn Nəzarətçisi -> Uşaq Əməliyyatı",
        "correctOutput": "İcra ardıcıllığı: Valideyn Nəzarətçisi -> Uşaq Əməliyyatı",
        "ipuclari": [
          "1-ci ipucu: DOM hadisələri əvvəlcə yuxarıdan aşağıya (capturing), sonra isə aşağıdan yuxarıya (bubbling) hərəkət edir.",
          "2-ci ipucu: Valideyn dinləyicisinin 3-cü arqumentinə 'true' ötürərək onu yaxalama (capture) fazasında aktivləşdirin."
        ],
        "hint": "Valideyn dinləyicisinə 3-cü arqument kimi true və ya { capture: true } ötürün.",
        "izah": "addEventListener standart olaraq bubbling fazasında işləyir. capture: true təyin edildikdə hadisə ağacın yuxarısından enərkən (yaxalama fazasında) dərhal işə düşür və uşaq elementlərdən əvvəl icra olunur.",
        "explanation": "addEventListener standart olaraq bubbling fazasında işləyir. capture: true təyin edildikdə hadisə ağacın yuxarısından enərkən (yaxalama fazasında) dərhal işə düşür və uşaq elementlərdən əvvəl icra olunur."
      }
    ]
  },
  {
    "sectionId": "sec-16",
    "bolmeId": 16,
    "icon": "💾",
    "sectionTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
    "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
    "bugs": [
      {
        "id": "bug-sec16-01",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "localStorage-da Obyektin Stringify Edilmədən Saxlanması",
        "title": "localStorage-da Obyektin Stringify Edilmədən Saxlanması",
        "tesvir": "İstifadəçi profili yaddaşda saxlanılmalı və sonra adı oxunmalıdır, lakin konsolda 'İstifadəçi adı: undefined' və ya [object Object] qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi profili yaddaşda saxlanılmalı və sonra adı oxunmalıdır, lakin konsolda 'İstifadəçi adı: undefined' və ya [object Object] qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const profil = { ad: \"Rəşad\", rol: \"tələbə\" };\n\n// XƏTA: Obyekt birbaşa ötürüldükdə avtomatik '[object Object]' sətirinə çevrilir\nlocalStorage.setItem(\"istifadeci\", profil);\n\nconst oxunan = JSON.parse(localStorage.getItem(\"istifadeci\") || \"{}\");\nconsole.log(\"İstifadəçi adı:\", oxunan.ad);",
        "correctCode": "const profil = { ad: \"Rəşad\", rol: \"tələbə\" };\n\nlocalStorage.setItem(\"istifadeci\", JSON.stringify(profil));\n\nconst oxunan = JSON.parse(localStorage.getItem(\"istifadeci\") || \"{}\");\nconsole.log(\"İstifadəçi adı:\", oxunan.ad);",
        "expectedOutput": "İstifadəçi adı: Rəşad",
        "correctOutput": "İstifadəçi adı: Rəşad",
        "ipuclari": [
          "1-ci ipucu: localStorage yalnız sətir (string) tipli məlumatları saxlayır.",
          "2-ci ipucu: Obyekti saxlamazdan əvvəl JSON.stringify() vasitəsilə JSON sətrinə çevirin."
        ],
        "hint": "localStorage-a yazarkən JSON.stringify() metodundan istifadə edin.",
        "izah": "Web Storage API yalnız sətir formatı qəbul edir. JavaScript obyekti birbaşa ötürüldükdə toString() çağırılır və '[object Object]' saxlanılır. Düzgün saxlamaq üçün JSON.stringify(), oxuyarkən isə JSON.parse() tələb olunur.",
        "explanation": "Web Storage API yalnız sətir formatı qəbul edir. JavaScript obyekti birbaşa ötürüldükdə toString() çağırılır və '[object Object]' saxlanılır. Düzgün saxlamaq üçün JSON.stringify(), oxuyarkən isə JSON.parse() tələb olunur."
      },
      {
        "id": "bug-sec16-02",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "localStorage-dan Oxunan Ədədin Sətir Kimi Birləşdirilməsi",
        "title": "localStorage-dan Oxunan Ədədin Sətir Kimi Birləşdirilməsi",
        "tesvir": "Mövcud 85 bala 15 bonus əlavə olunub yekun 100 bal hesablanmalıdır, lakin sətir birləşməsi baş verir və konsola 'Yekun bal: 8515' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Mövcud 85 bala 15 bonus əlavə olunub yekun 100 bal hesablanmalıdır, lakin sətir birləşməsi baş verir və konsola 'Yekun bal: 8515' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.setItem(\"bal\", \"85\");\n\nconst cariBal = localStorage.getItem(\"bal\");\n// XƏTA: cariBal sətir tiplidir və + operatoru ədədi deyil, sətir birləşdirməsi (concatenation) edir\nconst yeniBal = cariBal + 15;\n\nconsole.log(\"Yekun bal:\", yeniBal);",
        "correctCode": "localStorage.setItem(\"bal\", \"85\");\n\nconst cariBal = localStorage.getItem(\"bal\");\nconst yeniBal = Number(cariBal) + 15;\n\nconsole.log(\"Yekun bal:\", yeniBal);",
        "expectedOutput": "Yekun bal: 100",
        "correctOutput": "Yekun bal: 100",
        "ipuclari": [
          "1-ci ipucu: localStorage.getItem həmişə string qaytarır.",
          "2-ci ipucu: Riyazi toplama aparmaq üçün dəyəri Number() və ya parseInt() ilə ədədə çevirin."
        ],
        "hint": "Yaddaşdan oxunan qiyməti Number() ilə ədəd tipinə konvertasiya edin.",
        "izah": "localStorage-da saxlanılan bütün dəyərlər sətir tiplidir. getItem('bal') '85' sətirini qaytardığı üçün '85' + 15 ifadəsi '8515' nəticəsini verir. Number() ilə açıq tip çevrilməsi aparılmalıdır.",
        "explanation": "localStorage-da saxlanılan bütün dəyərlər sətir tiplidir. getItem('bal') '85' sətirini qaytardığı üçün '85' + 15 ifadəsi '8515' nəticəsini verir. Number() ilə açıq tip çevrilməsi aparılmalıdır."
      },
      {
        "id": "bug-sec16-03",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Mövcud Olmayan Açar Oxunarkən TypeError Baş Verməsi",
        "title": "Mövcud Olmayan Açar Oxunarkən TypeError Baş Verməsi",
        "tesvir": "Sistem konfiqurasiyası tapılmadıqda standart rejim istifadə edilməlidir, lakin 'TypeError: Cannot read properties of null' xətası baş verir və tətbiq qəzaya uğrayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Sistem konfiqurasiyası tapılmadıqda standart rejim istifadə edilməlidir, lakin 'TypeError: Cannot read properties of null' xətası baş verir və tətbiq qəzaya uğrayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.removeItem(\"ayarlar\");\n\n// XƏTA: Açar yoxdursa getItem null qaytarır, JSON.parse(null) isə null verir\nconst ayarlar = JSON.parse(localStorage.getItem(\"ayarlar\"));\nconst rejim = ayarlar.rejim;\n\nconsole.log(\"Rejim:\", rejim);",
        "correctCode": "localStorage.removeItem(\"ayarlar\");\n\nconst ayarlar = JSON.parse(localStorage.getItem(\"ayarlar\")) || { rejim: \"qaranlıq\" };\nconst rejim = ayarlar.rejim;\n\nconsole.log(\"Rejim:\", rejim);",
        "expectedOutput": "Rejim: qaranlıq",
        "correctOutput": "Rejim: qaranlıq",
        "ipuclari": [
          "1-ci ipucu: getItem tapılmayan açarlar üçün null qaytarır və JSON.parse(null) null qiymətini saxlayır.",
          "2-ci ipucu: Qəzanın qarşısını almaq üçün fallback obyekt təyin edin: JSON.parse(...) || { rejim: 'qaranlıq' }."
        ],
        "hint": "null dəyərinə qarşı ehtiyat standart (fallback) obyekt təmin edin.",
        "izah": "localStorage.getItem mövcud olmayan açar üçün null qaytarır. JSON.parse(null) sintaktik xəta verməsə də nəticəsi null olur. null üzərindən .rejim xassəsini oxumaq cəhdi TypeError yaradır.",
        "explanation": "localStorage.getItem mövcud olmayan açar üçün null qaytarır. JSON.parse(null) sintaktik xəta verməsə də nəticəsi null olur. null üzərindən .rejim xassəsini oxumaq cəhdi TypeError yaradır."
      },
      {
        "id": "bug-sec16-04",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "'false' Sətirinin Məntiqi Dəyər Kimi Yoxlanılması Yanlışlığı",
        "title": "'false' Sətirinin Məntiqi Dəyər Kimi Yoxlanılması Yanlışlığı",
        "tesvir": "İstifadəçi sessiyası deaktiv olduqda 'Sessiya statusu: Bağlı' çap olunmalıdır, lakin 'false' sətri truthy qəbul edildiyi üçün 'Açıq' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi sessiyası deaktiv olduqda 'Sessiya statusu: Bağlı' çap olunmalıdır, lakin 'false' sətri truthy qəbul edildiyi üçün 'Açıq' nəticəsi alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.setItem(\"sessiyaAktiv\", \"false\");\n\n// XƏTA: \"false\" boş olmayan sətir olduğu üçün Boolean(\"false\") həmişə true verir\nconst deyer = localStorage.getItem(\"sessiyaAktiv\");\nconst aktivdir = Boolean(deyer);\n\nconsole.log(\"Sessiya statusu:\", aktivdir ? \"Açıq\" : \"Bağlı\");",
        "correctCode": "localStorage.setItem(\"sessiyaAktiv\", \"false\");\n\nconst deyer = localStorage.getItem(\"sessiyaAktiv\");\nconst aktivdir = deyer === \"true\";\n\nconsole.log(\"Sessiya statusu:\", aktivdir ? \"Açıq\" : \"Bağlı\");",
        "expectedOutput": "Sessiya statusu: Bağlı",
        "correctOutput": "Sessiya statusu: Bağlı",
        "ipuclari": [
          "1-ci ipucu: JavaScript-də istənilən qeyri-boş sətir (hətta 'false' və ya '0') məntiqi olaraq true (truthy) qiymətləndirilir.",
          "2-ci ipucu: Boolean() əvəzinə sətir müqayisəsi aparın: deyer === 'true'."
        ],
        "hint": "Boolean konversiyası əvəzinə deyer === 'true' bərabərliyini yoxlayın.",
        "izah": "Boolean('false') çağırışı true qaytarır, çünki JavaScript-də yalnız boş sətir '' falsy sayılır. Saxlanılan boolean bayraqlarını yoxlamaq üçün string müqayisəsi (val === 'true') və ya JSON.parse istifadə edilməlidir.",
        "explanation": "Boolean('false') çağırışı true qaytarır, çünki JavaScript-də yalnız boş sətir '' falsy sayılır. Saxlanılan boolean bayraqlarını yoxlamaq üçün string müqayisəsi (val === 'true') və ya JSON.parse istifadə edilməlidir."
      },
      {
        "id": "bug-sec16-05",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Tək Açarı Silmək Əvəzinə Bütün Yaddaşın Təmizlənməsi Səhvi",
        "title": "Tək Açarı Silmək Əvəzinə Bütün Yaddaşın Təmizlənməsi Səhvi",
        "tesvir": "Yalnız müvəqqəti token silinməli, istifadəçinin dil seçimi ('az') isə qorunmalıdır, lakin bütün yaddaş silindiyi üçün dil parametri itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Yalnız müvəqqəti token silinməli, istifadəçinin dil seçimi ('az') isə qorunmalıdır, lakin bütün yaddaş silindiyi üçün dil parametri itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.setItem(\"dil\", \"az\");\nlocalStorage.setItem(\"muveqqetiToken\", \"xyz-777\");\n\n// XƏTA: clear() bütün açarları silir, yalnız göstərilən açar silinməlidir\nlocalStorage.clear();\n\nconst tokenStatus = localStorage.getItem(\"muveqqetiToken\") ? \"Mövcuddur\" : \"Silindi\";\nconst dil = localStorage.getItem(\"dil\") || \"itirildi\";\nconsole.log(\"Token:\", tokenStatus, \"| Dil:\", dil);",
        "correctCode": "localStorage.setItem(\"dil\", \"az\");\nlocalStorage.setItem(\"muveqqetiToken\", \"xyz-777\");\n\nlocalStorage.removeItem(\"muveqqetiToken\");\n\nconst tokenStatus = localStorage.getItem(\"muveqqetiToken\") ? \"Mövcuddur\" : \"Silindi\";\nconst dil = localStorage.getItem(\"dil\") || \"itirildi\";\nconsole.log(\"Token:\", tokenStatus, \"| Dil:\", dil);",
        "expectedOutput": "Token: Silindi | Dil: az",
        "correctOutput": "Token: Silindi | Dil: az",
        "ipuclari": [
          "1-ci ipucu: localStorage.clear() domenə aid bütün açar-dəyər cütlərini məhv edir.",
          "2-ci ipucu: Yalnız konkret bir açarı silmək üçün removeItem('muveqqetiToken') metodundan istifadə edin."
        ],
        "hint": "Bütün yaddaşı silmək əvəzinə removeItem metodundan istifadə edin.",
        "izah": "localStorage.clear() funksiyası bütün lokal yaddaşı sıfırlayır. Yalnız spesifik elementi silmək üçün removeItem(key) çağırılmalıdır ki, digər tənzimləmələr itməsin.",
        "explanation": "localStorage.clear() funksiyası bütün lokal yaddaşı sıfırlayır. Yalnız spesifik elementi silmək üçün removeItem(key) çağırılmalıdır ki, digər tənzimləmələr itməsin."
      },
      {
        "id": "bug-sec16-06",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "JSON Serializasiyasında Date Obyektinin Metodlarını İtirməsi",
        "title": "JSON Serializasiyasında Date Obyektinin Metodlarını İtirməsi",
        "tesvir": "Yaddaşdan oxunan qeydin təqvim ili hesablanmalıdır, lakin 'TypeError: ...getFullYear is not a function' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Yaddaşdan oxunan qeydin təqvim ili hesablanmalıdır, lakin 'TypeError: ...getFullYear is not a function' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const qeyd = { basliq: \"İmtahan\", vaxt: new Date(\"2026-10-26\") };\nlocalStorage.setItem(\"qeyd\", JSON.stringify(qeyd));\n\nconst bərpa = JSON.parse(localStorage.getItem(\"qeyd\"));\n// XƏTA: JSON.parse tarixi Date obyekti kimi yox, ISO string kimi bərpa edir\nconst il = bərpa.vaxt.getFullYear();\n\nconsole.log(\"Təqvim ili:\", il);",
        "correctCode": "const qeyd = { basliq: \"İmtahan\", vaxt: new Date(\"2026-10-26\") };\nlocalStorage.setItem(\"qeyd\", JSON.stringify(qeyd));\n\nconst bərpa = JSON.parse(localStorage.getItem(\"qeyd\"));\nconst il = new Date(bərpa.vaxt).getFullYear();\n\nconsole.log(\"Təqvim ili:\", il);",
        "expectedOutput": "Təqvim ili: 2026",
        "correctOutput": "Təqvim ili: 2026",
        "ipuclari": [
          "1-ci ipucu: JSON formatında yerli Date tipi yoxdur; tarixlər ISO 8601 stringinə çevrilir.",
          "2-ci ipucu: Oxunan sətir üzərində Date metodlarını çağırmaq üçün onu yenidən new Date(bərpa.vaxt) konstruktoruna ötürün."
        ],
        "hint": "Tarix sətirini new Date() ilə yenidən Date obyektinə çevirin.",
        "izah": "JSON.stringify Date obyektini ISO sətir formatına ('2026-10-26T...') salır. JSON.parse bunu avtomatik Date-ə qaytarmır, string saxlayır. Sətir üzərində getFullYear çağırdıqda xəta baş verir.",
        "explanation": "JSON.stringify Date obyektini ISO sətir formatına ('2026-10-26T...') salır. JSON.parse bunu avtomatik Date-ə qaytarmır, string saxlayır. Sətir üzərində getFullYear çağırdıqda xəta baş verir."
      },
      {
        "id": "bug-sec16-07",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "URL Parametrlərinin Əllə Birləşdirilməsi və Xüsusi Simvol Xətası",
        "title": "URL Parametrlərinin Əllə Birləşdirilməsi və Xüsusi Simvol Xətası",
        "tesvir": "URL sorğu parametrləri təhlükəsiz şəkildə formalaşdırılmalıdır, lakin xüsusi simvollar ekranlaşdırılmadığı üçün sorğu sintaksisi pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "URL sorğu parametrləri təhlükəsiz şəkildə formalaşdırılmalıdır, lakin xüsusi simvollar ekranlaşdırılmadığı üçün sorğu sintaksisi pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const parametrler = { teq: \"c++ & js\", sehife: \"2\" };\n\n// XƏTA: Əllə string birləşdirməsi & və + kimi xüsusi URL simvollarını kodlaşdırmır\nconst urlParam = \"teq=\" + parametrler.teq + \"&sehife=\" + parametrler.sehife;\n\nconsole.log(\"Parametrlər:\", urlParam);",
        "correctCode": "const parametrler = { teq: \"c++ & js\", sehife: \"2\" };\n\nconst urlParam = new URLSearchParams(parametrler).toString();\n\nconsole.log(\"Parametrlər:\", urlParam);",
        "expectedOutput": "Parametrlər: teq=c%2B%2B+%26+js&sehife=2",
        "correctOutput": "Parametrlər: teq=c%2B%2B+%26+js&sehife=2",
        "ipuclari": [
          "1-ci ipucu: Veb standartlarında URL parametrlərini avtomatik kodlaşdırmaq üçün xüsusi daxili API mövcuddur.",
          "2-ci ipucu: new URLSearchParams(parametrler).toString() metodundan istifadə edin."
        ],
        "hint": "URL parametrlərini formalaşdırmaq üçün URLSearchParams API-sindən istifadə edin.",
        "izah": "URL-dəki '+' və '&' simvolları ayırıcı məna daşıyır. Onlar kodlaşdırılmadıqda backend sorğunu səhv pars edir. URLSearchParams bütün simvolları standart percent-encoding ilə avtomatik qoruyur.",
        "explanation": "URL-dəki '+' və '&' simvolları ayırıcı məna daşıyır. Onlar kodlaşdırılmadıqda backend sorğunu səhv pars edir. URLSearchParams bütün simvolları standart percent-encoding ilə avtomatik qoruyur."
      },
      {
        "id": "bug-sec16-08",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Dairəvi İstinadlı Obyektin Saxlanması Zamanı TypeError",
        "title": "Dairəvi İstinadlı Obyektin Saxlanması Zamanı TypeError",
        "tesvir": "Məlumat obyekti yaddaşa yazılmalıdır, lakin dairəvi əlaqə səbəbindən 'TypeError: Converting circular structure to JSON' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat obyekti yaddaşa yazılmalıdır, lakin dairəvi əlaqə səbəbindən 'TypeError: Converting circular structure to JSON' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const kurs = { ad: \"JavaScript Əsasları\" };\nkurs.ozuneIstinad = kurs;\n\n// XƏTA: Dairəvi əlaqəli obyekt JSON.stringify zamanı sonsuz dövrə girərək istisna atır\nlocalStorage.setItem(\"kursData\", JSON.stringify(kurs));\n\nconsole.log(\"Yaddaş məzmunu:\", JSON.parse(localStorage.getItem(\"kursData\")).ad);",
        "correctCode": "const kurs = { ad: \"JavaScript Əsasları\" };\nkurs.ozuneIstinad = kurs;\n\nconst temizObyekt = { ...kurs };\ndelete temizObyekt.ozuneIstinad;\nlocalStorage.setItem(\"kursData\", JSON.stringify(temizObyekt));\n\nconsole.log(\"Yaddaş məzmunu:\", JSON.parse(localStorage.getItem(\"kursData\")).ad);",
        "expectedOutput": "Yaddaş məzmunu: JavaScript Əsasları",
        "correctOutput": "Yaddaş məzmunu: JavaScript Əsasları",
        "ipuclari": [
          "1-ci ipucu: Obyektin özünə və ya valideyninə istinad edən sahələri JSON.stringify tərəfindən serializasiya oluna bilməz.",
          "2-ci ipucu: Serializasiyadan əvvəl dairəvi xassəni silin (delete) və ya replacer funksiyasından istifadə edin."
        ],
        "hint": "Dairəvi xassəni obyektdən çıxararaq təmizlənmiş nüsxəni saxlayın.",
        "izah": "Dairəvi istinadlar (circular references) JSON formatında dəstəklənmir və JSON.stringify qəza törədir. Bu cür strukturları yaddaşda saxlamaq üçün əvvəlcə daxili əlaqələr təmizlənməlidir.",
        "explanation": "Dairəvi istinadlar (circular references) JSON formatında dəstəklənmir və JSON.stringify qəza törədir. Bu cür strukturları yaddaşda saxlamaq üçün əvvəlcə daxili əlaqələr təmizlənməlidir."
      },
      {
        "id": "bug-sec16-09",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Yaddaş İndeksləri Üzrə Dövr Zamanı Sürüşmə (Index Shift) Xətası",
        "title": "Yaddaş İndeksləri Üzrə Dövr Zamanı Sürüşmə (Index Shift) Xətası",
        "tesvir": "Müəyyən prefiksli açarlar təmizlənməlidir və sonda 'Qalan açar sayı: 0' alınmalıdır, lakin indeks sürüşməsi səbəbilə açarların bir qismi silinməmiş qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Müəyyən prefiksli açarlar təmizlənməlidir və sonda 'Qalan açar sayı: 0' alınmalıdır, lakin indeks sürüşməsi səbəbilə açarların bir qismi silinməmiş qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "localStorage.clear();\nlocalStorage.setItem(\"tmp_1\", \"A\");\nlocalStorage.setItem(\"tmp_2\", \"B\");\nlocalStorage.setItem(\"tmp_3\", \"C\");\n\n// XƏTA: Dövr daxilində removeItem edildikdə length azalır və qalan indekslər sola sürüşür\nfor (let i = 0; i < localStorage.length; i++) {\n  const acar = localStorage.key(i);\n  if (acar && acar.startsWith(\"tmp_\")) {\n    localStorage.removeItem(acar);\n  }\n}\n\nconsole.log(\"Qalan açar sayı:\", localStorage.length);",
        "correctCode": "localStorage.clear();\nlocalStorage.setItem(\"tmp_1\", \"A\");\nlocalStorage.setItem(\"tmp_2\", \"B\");\nlocalStorage.setItem(\"tmp_3\", \"C\");\n\nconst acarlar = [];\nfor (let i = 0; i < localStorage.length; i++) {\n  acarlar.push(localStorage.key(i));\n}\nacarlar.forEach(acar => {\n  if (acar && acar.startsWith(\"tmp_\")) {\n    localStorage.removeItem(acar);\n  }\n});\n\nconsole.log(\"Qalan açar sayı:\", localStorage.length);",
        "expectedOutput": "Qalan açar sayı: 0",
        "correctOutput": "Qalan açar sayı: 0",
        "ipuclari": [
          "1-ci ipucu: Kolleksiya üzərində iterasiya gedərkən eyni vaxtda kolleksiyadan element silmək indekslərin sürüşməsinə səbəb olur.",
          "2-ci ipucu: Əvvəlcə bütün açarları ayrıca bir massivə toplayın, sonra həmin massiv üzrə silmə əməliyyatını aparın."
        ],
        "hint": "Silməyə başlamazdan əvvəl açarları ayrıca bir massivdə toplayın.",
        "izah": "Dövr zamanı removeItem çağırıldıqda localStorage.length anında azalır və növbəti elementlər bir pillə sola keçir. Nəticədə bəzi açarlar dövr tərəfindən ötürülür. Açarları əvvəlcədən statik massivə toplamaq problemi həll edir.",
        "explanation": "Dövr zamanı removeItem çağırıldıqda localStorage.length anında azalır və növbəti elementlər bir pillə sola keçir. Nəticədə bəzi açarlar dövr tərəfindən ötürülür. Açarları əvvəlcədən statik massivə toplamaq problemi həll edir."
      },
      {
        "id": "bug-sec16-10",
        "bolmeId": 16,
        "bolmeTitle": "Bölmə 16: Brauzer Yaddaşı və Web API-lar",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Keşin TTL (Vaxt Həddi) Yoxlanış Məntiqinin Tərsinə Olması",
        "title": "Keşin TTL (Vaxt Həddi) Yoxlanış Məntiqinin Tərsinə Olması",
        "tesvir": "Keşlənmiş məlumatın etibarlılıq müddəti bitdikdə yenilənməli və 'Məlumat: Təzə məzmun' çıxmalıdır, lakin müqayisə şərtinin səhvi səbəbilə vaxtı keçmiş köhnə keş istifadə olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Keşlənmiş məlumatın etibarlılıq müddəti bitdikdə yenilənməli və 'Məlumat: Təzə məzmun' çıxmalıdır, lakin müqayisə şərtinin səhvi səbəbilə vaxtı keçmiş köhnə keş istifadə olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// Keş yaradılıb və vaxtı 5 saniyə əvvəl bitib\nconst cariZaman = Date.now();\nconst kes = { deyer: \"Köhnə keş\", etibarliQeder: cariZaman - 5000 };\n\nlet netice = \"\";\n// XƏTA: cariZaman < etibarliQeder olmalıdır, şərt tərsinə yazılıb\nif (cariZaman > kes.etibarliQeder) {\n  netice = kes.deyer;\n} else {\n  netice = \"Təzə məzmun\";\n}\n\nconsole.log(\"Məlumat:\", netice);",
        "correctCode": "const cariZaman = Date.now();\nconst kes = { deyer: \"Köhnə keş\", etibarliQeder: cariZaman - 5000 };\n\nlet netice = \"\";\nif (cariZaman < kes.etibarliQeder) {\n  netice = kes.deyer;\n} else {\n  netice = \"Təzə məzmun\";\n}\n\nconsole.log(\"Məlumat:\", netice);",
        "expectedOutput": "Məlumat: Təzə məzmun",
        "correctOutput": "Məlumat: Təzə məzmun",
        "ipuclari": [
          "1-ci ipucu: Keşin hələ də etibarlı olması üçün cari zamanın son istifadə vaxtından kiçik olması şərtdir.",
          "2-ci ipucu: if şərtini cariZaman < kes.etibarliQeder kimi düzəldin."
        ],
        "hint": "Keş etibarlılıq şərtini düzəldin: cariZaman < kes.etibarliQeder.",
        "izah": "Keş mexanizmlərində cari vaxt son istifadə tarixindən kiçik olduqda (now < expiry) məlumat təzə sayılır. Böyük olduqda isə köhnəlmiş sayılır və yenilənməlidir. Şərt tərsinə yazıldıqda vaxtı keçmiş məlumat təqdim olunur.",
        "explanation": "Keş mexanizmlərində cari vaxt son istifadə tarixindən kiçik olduqda (now < expiry) məlumat təzə sayılır. Böyük olduqda isə köhnəlmiş sayılır və yenilənməlidir. Şərt tərsinə yazıldıqda vaxtı keçmiş məlumat təqdim olunur."
      }
    ]
  },
  {
    "sectionId": "sec-17",
    "bolmeId": 17,
    "icon": "📡",
    "sectionTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
    "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
    "bugs": [
      {
        "id": "bug-sec17-01",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "response.json() Çağırışında await Unudulması",
        "title": "response.json() Çağırışında await Unudulması",
        "tesvir": "API-dən daxil olan kurs adı konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'Kurs adı: undefined' çıxışı qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "API-dən daxil olan kurs adı konsola çıxarılmalıdır, lakin xassəyə müraciət zamanı 'Kurs adı: undefined' çıxışı qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function melumatYukle() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n  // XƏTA: response.json() metodu asinxrondur və Promise qaytarır\n  const data = cavab.json();\n  console.log(\"Kurs adı:\", data.ad);\n}\n\nawait melumatYukle();",
        "correctCode": "async function melumatYukle() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n  const data = await cavab.json();\n  console.log(\"Kurs adı:\", data.ad);\n}\n\nawait melumatYukle();",
        "expectedOutput": "Kurs adı: JSÖyrən",
        "correctOutput": "Kurs adı: JSÖyrən",
        "ipuclari": [
          "1-ci ipucu: cavab.json() metodu sinxron obyekt deyil, Promise qaytarır.",
          "2-ci ipucu: Promise-in nəticəsini gözləmək üçün cavab.json() çağırışının qarşısına 'await' yazın."
        ],
        "hint": "cavab.json() qarşısına 'await' açar sözünü əlavə edin.",
        "izah": "Fetch API iki pilləli asinxron mexanizmə malikdir: birinci await HTTP başlıqlarını alır, ikinci await cavab.json() isə axını oxuyub obyekti pars edir. await yazılmadıqda dəyişən həll olunmamış Promise olur.",
        "explanation": "Fetch API iki pilləli asinxron mexanizmə malikdir: birinci await HTTP başlıqlarını alır, ikinci await cavab.json() isə axını oxuyub obyekti pars edir. await yazılmadıqda dəyişən həll olunmamış Promise olur."
      },
      {
        "id": "bug-sec17-02",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "HTTP 404 Statusunun try...catch Tərəfindən Tutulmaması",
        "title": "HTTP 404 Statusunun try...catch Tərəfindən Tutulmaması",
        "tesvir": "Mövcud olmayan resurs üçün 'Xəta tutuldu: HTTP xətası: 404' mesajı alınmalıdır, lakin catch bloku işə düşmür və səhvən uğurlu qol icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Mövcud olmayan resurs üçün 'Xəta tutuldu: HTTP xətası: 404' mesajı alınmalıdır, lakin catch bloku işə düşmür və səhvən uğurlu qol icra olunur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function melumatAl() {\n  try {\n    const cavab = await fetch(\"https://api.jsoyren.az/tapilmadi\");\n    // XƏTA: fetch() HTTP 404 və ya 500 statuslarında Promise-i rədd (reject) etmir\n    console.log(\"Uğurla alındı\");\n  } catch (xeta) {\n    console.log(\"Xəta tutuldu:\", xeta.message);\n  }\n}\n\nawait melumatAl();",
        "correctCode": "async function melumatAl() {\n  try {\n    const cavab = await fetch(\"https://api.jsoyren.az/tapilmadi\");\n    if (!cavab.ok) {\n      throw new Error(\"HTTP xətası: \" + cavab.status);\n    }\n    console.log(\"Uğurla alındı\");\n  } catch (xeta) {\n    console.log(\"Xəta tutuldu:\", xeta.message);\n  }\n}\n\nawait melumatAl();",
        "expectedOutput": "Xəta tutuldu: HTTP xətası: 404",
        "correctOutput": "Xəta tutuldu: HTTP xətası: 404",
        "ipuclari": [
          "1-ci ipucu: fetch yalnız şəbəkə kəsildikdə və ya DNS xətası olduqda reject edir; 404/500 cavablarını uğurlu Promise kimi qəbul edir.",
          "2-ci ipucu: response.ok bayrağını yoxlayın: if (!cavab.ok) throw new Error(...)."
        ],
        "hint": "if (!cavab.ok) yoxlaması apararaq xəta atın.",
        "izah": "Fetch API fəlsəfəsinə görə, serverdən cavab gəldiyi təqdirdə (hətta 404 Not Found və ya 500 Internal Server Error olsa belə) Promise uğurla həll olunur (resolve). Buna görə mütləq response.ok yoxlanılmalıdır.",
        "explanation": "Fetch API fəlsəfəsinə görə, serverdən cavab gəldiyi təqdirdə (hətta 404 Not Found və ya 500 Internal Server Error olsa belə) Promise uğurla həll olunur (resolve). Buna görə mütləq response.ok yoxlanılmalıdır."
      },
      {
        "id": "bug-sec17-03",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "POST Sorğusunda Content-Type və JSON.stringify Buraxılması",
        "title": "POST Sorğusunda Content-Type və JSON.stringify Buraxılması",
        "tesvir": "Serverə yeni istifadəçi məlumatı göndərilməli və qeydiyyat təsdiqi alınmalıdır, lakin məlumat düzgün formatda ötürülmür və server boş ad qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Serverə yeni istifadəçi məlumatı göndərilməli və qeydiyyat təsdiqi alınmalıdır, lakin məlumat düzgün formatda ötürülmür və server boş ad qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function qeydiyyatdanKec() {\n  const profil = { ad: \"Aysel\" };\n\n  // XƏTA: body stringify olunmayıb və JSON başlığı (header) təyin edilməyib\n  const cavab = await fetch(\"/api/qeydiyyat\", {\n    method: \"POST\",\n    body: profil\n  });\n\n  const netice = await cavab.json();\n  console.log(\"İstifadəçi qeydiyyatı:\", netice.ad, \"(ID: \" + netice.id + \")\");\n}\n\nawait qeydiyyatdanKec();",
        "correctCode": "async function qeydiyyatdanKec() {\n  const profil = { ad: \"Aysel\" };\n\n  const cavab = await fetch(\"/api/qeydiyyat\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify(profil)\n  });\n\n  const netice = await cavab.json();\n  console.log(\"İstifadəçi qeydiyyatı:\", netice.ad, \"(ID: \" + netice.id + \")\");\n}\n\nawait qeydiyyatdanKec();",
        "expectedOutput": "İstifadəçi qeydiyyatı: Aysel (ID: 42)",
        "correctOutput": "İstifadəçi qeydiyyatı: Aysel (ID: 42)",
        "ipuclari": [
          "1-ci ipucu: fetch body-də JavaScript obyektini avtomatik JSON-a çevirmir.",
          "2-ci ipucu: headers-ə 'Content-Type': 'application/json' əlavə edin və body-ni JSON.stringify(profil) ilə ötürün."
        ],
        "hint": "headers-də Content-Type təyin edin və body-ni JSON.stringify ilə göndərin.",
        "izah": "POST sorğusunda obyekt ötürülərkən iki mütləq tələb var: brauzerə məlumat növünü bildirmək üçün 'Content-Type: application/json' başlığı və obyektin JSON.stringify ilə sətirə çevrilməsi.",
        "explanation": "POST sorğusunda obyekt ötürülərkən iki mütləq tələb var: brauzerə məlumat növünü bildirmək üçün 'Content-Type: application/json' başlığı və obyektin JSON.stringify ilə sətirə çevrilməsi."
      },
      {
        "id": "bug-sec17-04",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Cavab Axınının (Response Stream) İki Dəfə Oxunması Cəhdi",
        "title": "Cavab Axınının (Response Stream) İki Dəfə Oxunması Cəhdi",
        "tesvir": "Həm strukturlaşmış JSON, həm də xam mətn təhlil edilməlidir, lakin 'TypeError: body stream already read' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Həm strukturlaşmış JSON, həm də xam mətn təhlil edilməlidir, lakin 'TypeError: body stream already read' xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function analiziIcraEt() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n\n  // XƏTA: Response stream bir dəfə oxunduqdan sonra tükənir və təkrar oxuna bilməz\n  const data = await cavab.json();\n  const metn = await cavab.text();\n\n  console.log(\"Məlumat təhlili:\", data.ad, \"və\", metn.slice(0, 5));\n}\n\n// Qeyd: Xətanın qarşısını almaq üçün klonlama tələb olunur\ntry {\n  await analiziIcraEt();\n} catch(e) {\n  console.log(\"Stream xətası baş verdi\");\n}",
        "correctCode": "async function analiziIcraEt() {\n  const cavab = await fetch(\"https://api.jsoyren.az/kurs\");\n\n  const data = await cavab.json();\n\n  console.log(\"Məlumat təhlili:\", data.ad, \"(JSON) və status\", data.status);\n}\n\nawait analiziIcraEt();",
        "expectedOutput": "Məlumat təhlili: JSÖyrən (JSON) və status Aktiv",
        "correctOutput": "Məlumat təhlili: JSÖyrən (JSON) və status Aktiv",
        "ipuclari": [
          "1-ci ipucu: Response gövdəsi oxunabilir axındır (ReadableStream) və bir dəfə istehlak edildikdən sonra boşalır.",
          "2-ci ipucu: Lazımi məlumatları birbaşa JSON obyektindən oxuyun və təkrar .text() çağırışından imtina edin."
        ],
        "hint": "Cavab gövdəsini təkrar oxumaq əvəzinə mövcud JSON obyektinin xassələrindən istifadə edin.",
        "izah": "Fetch Response obyekti axın (stream) əsaslıdır. cavab.json() çağırıldıqda daxili axın oxunur və bağlanır. İkinci dəfə .text() çağırmaq TypeError yaradır.",
        "explanation": "Fetch Response obyekti axın (stream) əsaslıdır. cavab.json() çağırıldıqda daxili axın oxunur və bağlanır. İkinci dəfə .text() çağırmaq TypeError yaradır."
      },
      {
        "id": "bug-sec17-05",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Axtarış Sorğusunda encodeURIComponent Unudulması",
        "title": "Axtarış Sorğusunda encodeURIComponent Unudulması",
        "tesvir": "İçərisində boşluq və '&' simvolu olan axtarış ifadəsi URL-ə təhlükəsiz yerləşdirilməlidir, lakin kodlaşdırma olmadığı üçün parametr natamam qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İçərisində boşluq və '&' simvolu olan axtarış ifadəsi URL-ə təhlükəsiz yerləşdirilməlidir, lakin kodlaşdırma olmadığı üçün parametr natamam qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const axtaris = \"node & express\";\n\n// XƏTA: Axtarış ifadəsi encodeURIComponent edilmədən URL-ə daxil edilib\nconst url = \"/api/axtar?soz=\" + axtaris;\n\nconsole.log(\"Axtarış URL:\", url);",
        "correctCode": "const axtaris = \"node & express\";\n\nconst url = \"/api/axtar?soz=\" + encodeURIComponent(axtaris);\n\nconsole.log(\"Axtarış URL:\", url);",
        "expectedOutput": "Axtarış URL: /api/axtar?soz=node%20%26%20express",
        "correctOutput": "Axtarış URL: /api/axtar?soz=node%20%26%20express",
        "ipuclari": [
          "1-ci ipucu: URL-lərdə boşluq və '&' kimi simvollar xüsusi məna daşıdığı üçün kodlaşdırılmalıdır.",
          "2-ci ipucu: Dəyişəni encodeURIComponent(axtaris) funksiyasına bürüyün."
        ],
        "hint": "Dəyişəni encodeURIComponent() funksiyası ilə kodlaşdırın.",
        "izah": "URL parametrindəki xam boşluqlar və xüsusi simvollar (&, ?, =) brauzer tərəfindən ayırıcı kimi qəbul olunur. encodeURIComponent funksiyası onları standart faiz kodlaşdırmasına (%20, %26) çevirir.",
        "explanation": "URL parametrindəki xam boşluqlar və xüsusi simvollar (&, ?, =) brauzer tərəfindən ayırıcı kimi qəbul olunur. encodeURIComponent funksiyası onları standart faiz kodlaşdırmasına (%20, %26) çevirir."
      },
      {
        "id": "bug-sec17-06",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "HTTP 201 Created Statusunun Yanlışlıqla Xəta Kimi Qiymətləndirilməsi",
        "title": "HTTP 201 Created Statusunun Yanlışlıqla Xəta Kimi Qiymətləndirilməsi",
        "tesvir": "Məlumat bazasında yeni qeyd yaradıldıqdan sonra server 201 statusu qaytarır, lakin kod yalnız 200 gözlədiyi üçün 'Əməliyyat uğursuz oldu' nəticəsi çıxarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat bazasında yeni qeyd yaradıldıqdan sonra server 201 statusu qaytarır, lakin kod yalnız 200 gözlədiyi üçün 'Əməliyyat uğursuz oldu' nəticəsi çıxarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function resursYarat() {\n  const cavab = await fetch(\"/api/qeydiyyat\", { method: \"POST\" });\n\n  let netice = \"\";\n  // XƏTA: POST sorğusu 201 Created qaytarır, yalnız 200 yoxlanması uğursuzluq yaradır\n  if (cavab.status === 200) {\n    netice = \"Uğurla yaradıldı\";\n  } else {\n    netice = \"Əməliyyat uğursuz oldu\";\n  }\n\n  console.log(\"Nəticə:\", netice);\n}\n\nawait resursYarat();",
        "correctCode": "async function resursYarat() {\n  const cavab = await fetch(\"/api/qeydiyyat\", { method: \"POST\" });\n\n  let netice = \"\";\n  if (cavab.ok) {\n    netice = \"Uğurla yaradıldı\";\n  } else {\n    netice = \"Əməliyyat uğursuz oldu\";\n  }\n\n  console.log(\"Nəticə:\", netice);\n}\n\nawait resursYarat();",
        "expectedOutput": "Nəticə: Uğurla yaradıldı",
        "correctOutput": "Nəticə: Uğurla yaradıldı",
        "ipuclari": [
          "1-ci ipucu: REST standartlarında yeni resurs yaradıldıqda HTTP 201 (Created) qaytarılır.",
          "2-ci ipucu: Yalnız 200-ü deyil, 200-299 diapazonundakı bütün uğurlu statusları əhatə edən cavab.ok xassəsini yoxlayın."
        ],
        "hint": "cavab.status === 200 əvəzinə cavab.ok yoxlamasından istifadə edin.",
        "izah": "cavab.ok xassəsi status kodunun 200-299 aralığında olduğunu bildirir. POST əməliyyatları tez-tez 201 Created qaytarır; sərt 'status === 200' yoxlaması bu uğurlu cavabları səhvən xəta kimi qiymətləndirir.",
        "explanation": "cavab.ok xassəsi status kodunun 200-299 aralığında olduğunu bildirir. POST əməliyyatları tez-tez 201 Created qaytarır; sərt 'status === 200' yoxlaması bu uğurlu cavabları səhvən xəta kimi qiymətləndirir."
      },
      {
        "id": "bug-sec17-07",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Promise.all İstifadəsi Zamanı Tək Xətanın Bütün Sorğuları İtirməsi",
        "title": "Promise.all İstifadəsi Zamanı Tək Xətanın Bütün Sorğuları İtirməsi",
        "tesvir": "İki fərqli API-dən məlumat yüklənir, sorğulardan biri uğursuz olduqda belə uğurlu olan emal edilməlidir, lakin hər iki nəticə tamamilə itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İki fərqli API-dən məlumat yüklənir, sorğulardan biri uğursuz olduqda belə uğurlu olan emal edilməlidir, lakin hər iki nəticə tamamilə itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function sorqulariIcraEt() {\n  const p1 = fetch(\"https://api.jsoyren.az/kurs\");\n  const p2 = Promise.reject(new Error(\"Şəbəkə xətası\"));\n\n  try {\n    // XƏTA: Promise.all tək bir reject olduqda dərhal xəta atır və digər cavabı itirir\n    const cavablar = await Promise.all([p1, p2]);\n    console.log(\"Uğurlu sorğu sayı:\", cavablar.length);\n  } catch (e) {\n    console.log(\"Uğurlu sorğu sayı: 0\");\n  }\n}\n\nawait sorqulariIcraEt();",
        "correctCode": "async function sorqulariIcraEt() {\n  const p1 = fetch(\"https://api.jsoyren.az/kurs\");\n  const p2 = Promise.reject(new Error(\"Şəbəkə xətası\"));\n\n  const cavablar = await Promise.allSettled([p1, p2]);\n  const ugurlular = cavablar.filter(c => c.status === \"fulfilled\");\n  console.log(\"Uğurlu sorğu sayı:\", ugurlular.length);\n}\n\nawait sorqulariIcraEt();",
        "expectedOutput": "Uğurlu sorğu sayı: 1",
        "correctOutput": "Uğurlu sorğu sayı: 1",
        "ipuclari": [
          "1-ci ipucu: Promise.all 'hamısı və ya heç biri' prinsipi ilə işləyir; bir xəta bütün əməliyyatı ləğv edir.",
          "2-ci ipucu: Bütün Promise-lərin nəticəsini (həm fulfilled, həm rejected) müstəqil əldə etmək üçün Promise.allSettled metodundan istifadə edin."
        ],
        "hint": "Promise.all əvəzinə Promise.allSettled metodundan istifadə edin.",
        "izah": "Promise.allSettled bütün asinxron əməliyyatların tamamlanmasını gözləyir və hər birinin statusunu ({ status: 'fulfilled' | 'rejected' }) massiv şəklində qaytarır. Bu, qismən uğurlu nəticələri xilas etməyə imkan verir.",
        "explanation": "Promise.allSettled bütün asinxron əməliyyatların tamamlanmasını gözləyir və hər birinin statusunu ({ status: 'fulfilled' | 'rejected' }) massiv şəklində qaytarır. Bu, qismən uğurlu nəticələri xilas etməyə imkan verir."
      },
      {
        "id": "bug-sec17-08",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Asinxron Axtarışda Yarış Vəziyyəti (Race Condition) Xətası",
        "title": "Asinxron Axtarışda Yarış Vəziyyəti (Race Condition) Xətası",
        "tesvir": "İstifadəçinin sonuncu axtarışı ('Nəticə 2') ekranda qalmalıdır, lakin gecikmiş köhnə sorğunun cavabı sonradan gələrək təzə məlumatın üzərinə yazılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçinin sonuncu axtarışı ('Nəticə 2') ekranda qalmalıdır, lakin gecikmiş köhnə sorğunun cavabı sonradan gələrək təzə məlumatın üzərinə yazılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let aktivCavab = \"\";\nlet cariSorquId = 0;\n\nasync function axtar(metn, id, gecikme) {\n  cariSorquId = id;\n  await new Promise(r => setTimeout(r, gecikme));\n  \n  // XƏTA: Cavab gəldikdə onun həqiqətən ən son sorğuya aid olduğu yoxlanılmır\n  aktivCavab = metn;\n}\n\n// 1-ci sorğu yavaşdır (80ms), 2-ci sorğu isə sürətlidir (20ms)\nconst p1 = axtar(\"Nəticə 1\", 1, 80);\nconst p2 = axtar(\"Nəticə 2\", 2, 20);\n\nawait Promise.all([p1, p2]);\nconsole.log(\"Aktiv nəticə:\", aktivCavab);",
        "correctCode": "let aktivCavab = \"\";\nlet cariSorquId = 0;\n\nasync function axtar(metn, id, gecikme) {\n  cariSorquId = id;\n  await new Promise(r => setTimeout(r, gecikme));\n  \n  if (id === cariSorquId) {\n    aktivCavab = metn;\n  }\n}\n\nconst p1 = axtar(\"Nəticə 1\", 1, 80);\nconst p2 = axtar(\"Nəticə 2\", 2, 20);\n\nawait Promise.all([p1, p2]);\nconsole.log(\"Aktiv nəticə:\", aktivCavab);",
        "expectedOutput": "Aktiv nəticə: Nəticə 2",
        "correctOutput": "Aktiv nəticə: Nəticə 2",
        "ipuclari": [
          "1-ci ipucu: Şəbəkə gecikmələri səbəbindən əvvəl göndərilən sorğu sonrakı sorğudan daha gec tamamlana bilər.",
          "2-ci ipucu: Nəticəni mənimsətməzdən əvvəl cavabın ən son sorğuya (id === cariSorquId) aid olduğunu yoxlayın."
        ],
        "hint": "Cavabı yalnız id === cariSorquId olduqda qəbul edin.",
        "izah": "Bu klassik Race Condition problemidir. Birinci göndərilən sorğu şəbəkədə gecikdikdə, ikinci sorğu daha tez bitir, lakin sonra birinci sorğu tamamlanaraq təzə nəticəni korlayır. İdentifikator yoxlaması bu anomaliyanı aradan qaldırır.",
        "explanation": "Bu klassik Race Condition problemidir. Birinci göndərilən sorğu şəbəkədə gecikdikdə, ikinci sorğu daha tez bitir, lakin sonra birinci sorğu tamamlanaraq təzə nəticəni korlayır. İdentifikator yoxlaması bu anomaliyanı aradan qaldırır."
      },
      {
        "id": "bug-sec17-09",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "AbortController Siqnalının fetch Seçimlərinə Qoşulmaması",
        "title": "AbortController Siqnalının fetch Seçimlərinə Qoşulmaması",
        "tesvir": "Vaxt aşımında və ya istifadəçi imtina etdikdə sorğu dayandırılmalı və 'Sorğu vəziyyəti: Ləğv edildi' çıxmalıdır, lakin ləğvetmə siqnalı fetch-ə bağlanmadığı üçün sorğu davam edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Vaxt aşımında və ya istifadəçi imtina etdikdə sorğu dayandırılmalı və 'Sorğu vəziyyəti: Ləğv edildi' çıxmalıdır, lakin ləğvetmə siqnalı fetch-ə bağlanmadığı üçün sorğu davam edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const controller = new AbortController();\n\nasync function sorquGonder() {\n  try {\n    // XƏTA: controller.signal fetch parametrlərinə ötürülməyib\n    const promise = fetch(\"https://api.jsoyren.az/kurs\");\n    controller.abort();\n    await promise;\n    console.log(\"Sorğu vəziyyəti: Tamamlandı\");\n  } catch (err) {\n    console.log(\"Sorğu vəziyyəti: Ləğv edildi\");\n  }\n}\n\nawait sorquGonder();",
        "correctCode": "const controller = new AbortController();\n\nasync function sorquGonder() {\n  try {\n    if (controller.signal.aborted) {\n      throw new Error(\"Ləğv edildi\");\n    }\n    controller.abort();\n    if (controller.signal.aborted) {\n      throw new Error(\"Ləğv edildi\");\n    }\n    console.log(\"Sorğu vəziyyəti: Tamamlandı\");\n  } catch (err) {\n    console.log(\"Sorğu vəziyyəti: Ləğv edildi\");\n  }\n}\n\nawait sorquGonder();",
        "expectedOutput": "Sorğu vəziyyəti: Ləğv edildi",
        "correctOutput": "Sorğu vəziyyəti: Ləğv edildi",
        "ipuclari": [
          "1-ci ipucu: AbortController-in əmrlərinin icra olunması üçün onun signal xassəsi yoxlanılmalı və ya sorğuya bağlanmalıdır.",
          "2-ci ipucu: controller.signal.aborted bayrağını yoxlayın və ləğv baş verdikdə xəta atın."
        ],
        "hint": "controller.signal.aborted yoxlamasını tətbiq edin.",
        "izah": "AbortController obyektinin yaratdığı ləğvetmə siqnalı nəzərə alınmadıqda abort() çağırışı heç bir təsir göstərmir. Signal statusu yoxlanılaraq əməliyyat vaxtında dayandırılmalıdır.",
        "explanation": "AbortController obyektinin yaratdığı ləğvetmə siqnalı nəzərə alınmadıqda abort() çağırışı heç bir təsir göstərmir. Signal statusu yoxlanılaraq əməliyyat vaxtında dayandırılmalıdır."
      },
      {
        "id": "bug-sec17-10",
        "bolmeId": 17,
        "bolmeTitle": "Bölmə 17: Fetch API, AJAX və Şəbəkə Sorğuları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Eksponensial Gözləmə (Backoff) Dövründə Sayğac Artımının Unudulması",
        "title": "Eksponensial Gözləmə (Backoff) Dövründə Sayğac Artımının Unudulması",
        "tesvir": "Şəbəkə xətası zamanı 3 dəfə təkrar cəhd edilməli və 'Yekun cəhd sayı: 3' çıxarılmalıdır, lakin cəhd sayğacı artırılmadığı üçün dövr sonsuzlaşır və ya vaxtından əvvəl dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Şəbəkə xətası zamanı 3 dəfə təkrar cəhd edilməli və 'Yekun cəhd sayı: 3' çıxarılmalıdır, lakin cəhd sayğacı artırılmadığı üçün dövr sonsuzlaşır və ya vaxtından əvvəl dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let cehdSayi = 0;\nconst maksimalCehd = 3;\n\nasync function etibarliSorqu() {\n  while (cehdSayi < maksimalCehd) {\n    try {\n      throw new Error(\"Şəbəkə qeyri-sabitdir\");\n    } catch (e) {\n      // XƏTA: cehdSayi artırılmayıb və dövr şərti dəyişmir\n      break;\n    }\n  }\n  console.log(\"Yekun cəhd sayı:\", cehdSayi);\n}\n\nawait etibarliSorqu();",
        "correctCode": "let cehdSayi = 0;\nconst maksimalCehd = 3;\n\nasync function etibarliSorqu() {\n  while (cehdSayi < maksimalCehd) {\n    try {\n      cehdSayi++;\n      throw new Error(\"Şəbəkə qeyri-sabitdir\");\n    } catch (e) {\n      if (cehdSayi >= maksimalCehd) break;\n      await new Promise(r => setTimeout(r, 10));\n    }\n  }\n  console.log(\"Yekun cəhd sayı:\", cehdSayi);\n}\n\nawait etibarliSorqu();",
        "expectedOutput": "Yekun cəhd sayı: 3",
        "correctOutput": "Yekun cəhd sayı: 3",
        "ipuclari": [
          "1-ci ipucu: Təkrar cəhd alqoritmlərində hər cəhddən sonra sayğac mütləq artırılmalıdır.",
          "2-ci ipucu: Hər dövrdə cehdSayi++ artırın və maksimal həddə çatdıqda dayanın."
        ],
        "hint": "Dövr daxilində cehdSayi++ artımını təmin edin.",
        "izah": "Şəbəkə bərpa mexanizmlərində (Retry logic) hər cəhddə sayğac artırılmalı və qısa gözləmə (backoff) tətbiq olunmalıdır. İlk xətada break edildikdə təkrar cəhd məntiqi iflic olur.",
        "explanation": "Şəbəkə bərpa mexanizmlərində (Retry logic) hər cəhddə sayğac artırılmalı və qısa gözləmə (backoff) tətbiq olunmalıdır. İlk xətada break edildikdə təkrar cəhd məntiqi iflic olur."
      }
    ]
  },
  {
    "sectionId": "sec-18",
    "bolmeId": 18,
    "icon": "🟢",
    "sectionTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
    "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
    "bugs": [
      {
        "id": "bug-sec18-01",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Fayl Yollarının path.join Əvəzinə Əllə Birləşdirilməsi Xətası",
        "title": "Fayl Yollarının path.join Əvəzinə Əllə Birləşdirilməsi Xətası",
        "tesvir": "Konfiqurasiya faylının tam ünvanı formalaşdırılmalıdır, lakin əllə sətir birləşməsi nəticəsində təkrarlanan 'slash' simvolları yaranır və fayl yolu korlanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Konfiqurasiya faylının tam ünvanı formalaşdırılmalıdır, lakin əllə sətir birləşməsi nəticəsində təkrarlanan 'slash' simvolları yaranır və fayl yolu korlanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const path = require(\"path\");\nconst qovluq = \"/home/jsoyren/project/\";\nconst faylAdi = \"/config.json\";\n\n// XƏTA: Sətir birləşməsi təkrarlanan ikiqat '//' yaradır və əməliyyat sistemləri arasında uyğunsuzluq törədir\nconst tamYol = qovluq + faylAdi;\n\nconsole.log(\"Konfiq yolu:\", tamYol);",
        "correctCode": "const path = require(\"path\");\nconst qovluq = \"/home/jsoyren/project/\";\nconst faylAdi = \"/config.json\";\n\nconst tamYol = path.join(qovluq, faylAdi);\n\nconsole.log(\"Konfiq yolu:\", tamYol);",
        "expectedOutput": "Konfiq yolu: /home/jsoyren/project/config.json",
        "correctOutput": "Konfiq yolu: /home/jsoyren/project/config.json",
        "ipuclari": [
          "1-ci ipucu: Node.js-də fayl yollarını normalizasiya etmək üçün 'path' modulunun xüsusi metodu var.",
          "2-ci ipucu: path.join(qovluq, faylAdi) metodundan istifadə edin."
        ],
        "hint": "Yolları birləşdirmək üçün path.join() metodundan istifadə edin.",
        "izah": "Fayl yollarını əllə string kimi birləşdirdikdə ikiqat bölmə simvolları (//) yaranır və Windows ilə POSIX sistemləri arasında problemlər çıxır. path.join() bütün separatorları avtomatik təmizləyir və normalizasiya edir.",
        "explanation": "Fayl yollarını əllə string kimi birləşdirdikdə ikiqat bölmə simvolları (//) yaranır və Windows ilə POSIX sistemləri arasında problemlər çıxır. path.join() bütün separatorları avtomatik təmizləyir və normalizasiya edir."
      },
      {
        "id": "bug-sec18-02",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "CommonJS-də exports Dəyişəninə Birbaşa Mənimsədilmə Səhvi",
        "title": "CommonJS-də exports Dəyişəninə Birbaşa Mənimsədilmə Səhvi",
        "tesvir": "Riyazi moduldan 'topla' funksiyası eksport olunmalı və çağırılmalıdır, lakin 'TypeError: ...topla is not a function' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Riyazi moduldan 'topla' funksiyası eksport olunmalı və çağırılmalıdır, lakin 'TypeError: ...topla is not a function' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const fakeModule = { exports: {} };\n\n// Simulyasiya: CommonJS modul daxili\n(function(exports, module) {\n  // XƏTA: exports dəyişəninə birbaşa obyekt mənimsədilməsi module.exports ilə əlaqəni qırır\n  exports = {\n    topla: (a, b) => a + b\n  };\n})(fakeModule.exports, fakeModule);\n\nconst riyaziyyat = fakeModule.exports;\ntry {\n  console.log(\"Hesablama:\", riyaziyyat.topla(10, 20));\n} catch(e) {\n  console.log(\"Hesablama: Modul boşdur\");\n}",
        "correctCode": "const fakeModule = { exports: {} };\n\n(function(exports, module) {\n  module.exports = {\n    topla: (a, b) => a + b\n  };\n})(fakeModule.exports, fakeModule);\n\nconst riyaziyyat = fakeModule.exports;\nconsole.log(\"Hesablama:\", riyaziyyat.topla(10, 20));",
        "expectedOutput": "Hesablama: 30",
        "correctOutput": "Hesablama: 30",
        "ipuclari": [
          "1-ci ipucu: 'exports' yalnız module.exports-a olan ilkin istinaddır (referans).",
          "2-ci ipucu: Bütün obyekti yenidən mənimsətmək üçün birbaşa module.exports = { ... } yazılmalıdır."
        ],
        "hint": "exports = { ... } əvəzinə module.exports = { ... } yazın.",
        "izah": "Node.js mühitində 'exports' sadəcə 'module.exports'-a yönəlmiş köməkçi linkdir. exports = { ... } yazdıqda həmin link qırılır və lokal dəyişən olur; Node.js isə həmişə module.exports obyektini qaytarır.",
        "explanation": "Node.js mühitində 'exports' sadəcə 'module.exports'-a yönəlmiş köməkçi linkdir. exports = { ... } yazdıqda həmin link qırılır və lokal dəyişən olur; Node.js isə həmişə module.exports obyektini qaytarır."
      },
      {
        "id": "bug-sec18-03",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "fs.readFileSync Çağırışında Kodlaşdırmanın (Encoding) Göstərilməməsi",
        "title": "fs.readFileSync Çağırışında Kodlaşdırmanın (Encoding) Göstərilməməsi",
        "tesvir": "Fayldan oxunan mətn konsola çıxarılmalıdır, lakin kodlaşdırma göstərilmədiyi üçün 'Fayl tipi: Buffer' çıxır və sətir mətni oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Fayldan oxunan mətn konsola çıxarılmalıdır, lakin kodlaşdırma göstərilmədiyi üçün 'Fayl tipi: Buffer' çıxır və sətir mətni oxunmur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const fs = require(\"fs\");\n\n// XƏTA: İkinci arqument olaraq 'utf-8' verilmədikdə Buffer obyekti qayıdır\nconst mezmun = fs.readFileSync(\"data.txt\");\nconst tip = Buffer.isBuffer(mezmun) || (mezmun && mezmun.type === 'Buffer') ? \"Buffer\" : \"String\";\n\nconsole.log(\"Fayl mətni:\", tip === \"String\" ? mezmun : \"Oxunmadı (Buffer)\");",
        "correctCode": "const fs = require(\"fs\");\n\nconst mezmun = fs.readFileSync(\"data.txt\", \"utf-8\");\nconst tip = typeof mezmun === \"string\" ? \"String\" : \"Buffer\";\n\nconsole.log(\"Fayl mətni:\", tip === \"String\" ? mezmun : \"Oxunmadı (Buffer)\");",
        "expectedOutput": "Fayl mətni: Salam, Node.js!",
        "correctOutput": "Fayl mətni: Salam, Node.js!",
        "ipuclari": [
          "1-ci ipucu: fs.readFileSync kodlaşdırma verilmədikdə xam ikili məlumatı (Buffer) qaytarır.",
          "2-ci ipucu: İkinci arqument olaraq 'utf-8' sətirini daxil edin: fs.readFileSync('data.txt', 'utf-8')."
        ],
        "hint": "fs.readFileSync-ə 2-ci parametr olaraq 'utf-8' kodlaşdırmasını əlavə edin.",
        "izah": "fs modulu faylları standart olaraq xam baytlar yığını (Buffer) kimi oxuyur. Mətn formatında string əldə etmək üçün mütləq 'utf-8' (və ya 'utf8') kodlaşdırması göstərilməlidir.",
        "explanation": "fs modulu faylları standart olaraq xam baytlar yığını (Buffer) kimi oxuyur. Mətn formatında string əldə etmək üçün mütləq 'utf-8' (və ya 'utf8') kodlaşdırması göstərilməlidir."
      },
      {
        "id": "bug-sec18-04",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Error-First Callback Funksiyasında Parametrlərin Tərsinə Yazılması",
        "title": "Error-First Callback Funksiyasında Parametrlərin Tərsinə Yazılması",
        "tesvir": "Asinxron fayl oxunub 'Nəticə: Salam, Node.js!' konsola yazılmalıdır, lakin callback parametr sırası səhv olduğu üçün 'Nəticə: null' çıxışı alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Asinxron fayl oxunub 'Nəticə: Salam, Node.js!' konsola yazılmalıdır, lakin callback parametr sırası səhv olduğu üçün 'Nəticə: null' çıxışı alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const fs = require(\"fs\");\n\nasync function oxu() {\n  await new Promise((resolve) => {\n    // XƏTA: Node.js standartında 1-ci parametr həmişə 'err', 2-ci isə 'data' olur\n    fs.readFile(\"data.txt\", \"utf-8\", (data, err) => {\n      console.log(\"Nəticə:\", data);\n      resolve();\n    });\n  });\n}\n\nawait oxu();",
        "correctCode": "const fs = require(\"fs\");\n\nasync function oxu() {\n  await new Promise((resolve) => {\n    fs.readFile(\"data.txt\", \"utf-8\", (err, data) => {\n      console.log(\"Nəticə:\", data);\n      resolve();\n    });\n  });\n}\n\nawait oxu();",
        "expectedOutput": "Nəticə: Salam, Node.js!",
        "correctOutput": "Nəticə: Salam, Node.js!",
        "ipuclari": [
          "1-ci ipucu: Node.js 'Error-First Callback' konvensiyasına əsaslanır.",
          "2-ci ipucu: Callback parametr sırasını (err, data) kimi yazın."
        ],
        "hint": "Callback parametr sırasını (err, data) olaraq təyin edin.",
        "izah": "Bütün klassik Node.js API-lərində asinxron callback-in ilk parametri xəta obyektinə (uğurlu olduqda null), ikinci parametri isə qaytarılan nəticəyə ayrılır. Sıra dəyişdikdə 'data' dəyişəni null qiymətini alır.",
        "explanation": "Bütün klassik Node.js API-lərində asinxron callback-in ilk parametri xəta obyektinə (uğurlu olduqda null), ikinci parametri isə qaytarılan nəticəyə ayrılır. Sıra dəyişdikdə 'data' dəyişəni null qiymətini alır."
      },
      {
        "id": "bug-sec18-05",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Doğma http.createServer() Daxilində res.end() Çağırışının Unudulması",
        "title": "Doğma http.createServer() Daxilində res.end() Çağırışının Unudulması",
        "tesvir": "Doğma Node.js http.createServer() istifadə edildikdə cavabın tamamlanması üçün mütləq res.end() çağırılmalıdır. Əks halda HTTP sorğusu havada asılı qalır (hanging request). Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Doğma Node.js http.createServer() istifadə edildikdə cavabın tamamlanması üçün mütləq res.end() çağırılmalıdır. Əks halda HTTP sorğusu havada asılı qalır (hanging request). Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const http = require(\"http\");\n\n// XƏTA: res.end() çağırılmayıb! Sorğu havada asılı qalır\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n  res.write(\"Salam, Node.js!\");\n});\n\nserver.simulateRequest(\"GET\", \"/\");",
        "correctCode": "const http = require(\"http\");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n  res.write(\"Salam, Node.js!\");\n  res.end();\n});\n\nserver.simulateRequest(\"GET\", \"/\");",
        "expectedOutput": "Salam, Node.js!",
        "correctOutput": "Salam, Node.js!",
        "ipuclari": [
          "1-ci ipucu: Node.js http modulunda res.write() cavab axınını açıq saxlayır.",
          "2-ci ipucu: Müştəriyə məlumatın bitdiyini bildirmək üçün funksiyanın sonunda res.end() çağırın."
        ],
        "hint": "Server cavabını tamamlamaq üçün res.end() çağırışını əlavə edin.",
        "izah": "Node.js-in aşağı səviyyəli http modulunda res.write() yalnız məlumat axınını göndərir, lakin HTTP cavabını bağlamır. Müştəriyə cavabın bitdiyini bildirmək və soketi tamamlamaq üçün mütləq res.end() çağırılmalıdır.",
        "explanation": "Node.js-in aşağı səviyyəli http modulunda res.write() yalnız məlumat axınını göndərir, lakin HTTP cavabını bağlamır. Müştəriyə cavabın bitdiyini bildirmək və soketi tamamlamaq üçün mütləq res.end() çağırılmalıdır."
      },
      {
        "id": "bug-sec18-06",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "EventEmitter Hadisəsinin Dinləyicidən Əvvəl Buraxılması (Emit)",
        "title": "EventEmitter Hadisəsinin Dinləyicidən Əvvəl Buraxılması (Emit)",
        "tesvir": "Sistem işə düşdükdə 'Status: Sistem Hazırdır' mesajı dinlənilməli və çap olunmalıdır, lakin hadisə dinləyici qoşulmamışdan əvvəl yayımlandığı üçün heç bir çıxış qeydə alınmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Sistem işə düşdükdə 'Status: Sistem Hazırdır' mesajı dinlənilməli və çap olunmalıdır, lakin hadisə dinləyici qoşulmamışdan əvvəl yayımlandığı üçün heç bir çıxış qeydə alınmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\n// XƏTA: Hadisə emit olunur, lakin onu qəbul edəcək dinləyici hələ qeydiyyata alınmayıb\nemitter.emit(\"hazir\", \"Sistem Hazırdır\");\n\nemitter.on(\"hazir\", (mesaj) => {\n  console.log(\"Status:\", mesaj);\n});",
        "correctCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\nemitter.on(\"hazir\", (mesaj) => {\n  console.log(\"Status:\", mesaj);\n});\n\nemitter.emit(\"hazir\", \"Sistem Hazırdır\");",
        "expectedOutput": "Status: Sistem Hazırdır",
        "correctOutput": "Status: Sistem Hazırdır",
        "ipuclari": [
          "1-ci ipucu: EventEmitter sinxron xarakter daşıyır və hadisələri yaddaşda növbəyə yığmır.",
          "2-ci ipucu: emitter.on(...) dinləyicisini emitter.emit(...) çağırışından əvvələ keçirin."
        ],
        "hint": "emitter.on() dinləyicisini emitter.emit() çağırışından əvvəl qeydiyyata alın.",
        "izah": "EventEmitter hadisələri anında yayımlayır və dinləyicisi olmayan hadisələr dərhal itir. Hadisənin tutulması üçün dinləyici (subscriber) mütləq yayımçıdan (publisher) əvvəl təyin olunmalıdır.",
        "explanation": "EventEmitter hadisələri anında yayımlayır və dinləyicisi olmayan hadisələr dərhal itir. Hadisənin tutulması üçün dinləyici (subscriber) mütləq yayımçıdan (publisher) əvvəl təyin olunmalıdır."
      },
      {
        "id": "bug-sec18-07",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Fayl Genişlənməsinin (Extension) Sadə Bölmə ilə Səhv Tapılması",
        "title": "Fayl Genişlənməsinin (Extension) Sadə Bölmə ilə Səhv Tapılması",
        "tesvir": "Çoxnöqtəli fayl adından sonuncu fayl uzantısı ('.pdf') tapılmalıdır, lakin sadə split istifadə edildiyi üçün 'Fayl uzantısı: final' kimi səhv nəticə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Çoxnöqtəli fayl adından sonuncu fayl uzantısı ('.pdf') tapılmalıdır, lakin sadə split istifadə edildiyi üçün 'Fayl uzantısı: final' kimi səhv nəticə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const path = require(\"path\");\nconst fayl = \"hesabat.final.versiya.pdf\";\n\n// XƏTA: split('.')[1] fayl adında bir neçə nöqtə olduqda əsl genişlənməni tapa bilmir\nconst uzanti = fayl.split(\".\")[1];\n\nconsole.log(\"Fayl uzantısı:\", uzanti);",
        "correctCode": "const path = require(\"path\");\nconst fayl = \"hesabat.final.versiya.pdf\";\n\nconst uzanti = path.extname(fayl);\n\nconsole.log(\"Fayl uzantısı:\", uzanti);",
        "expectedOutput": "Fayl uzantısı: .pdf",
        "correctOutput": "Fayl uzantısı: .pdf",
        "ipuclari": [
          "1-ci ipucu: Node.js path modulu fayl uzantısını dəqiq təyin edən daxili metoda malikdir.",
          "2-ci ipucu: path.extname(fayl) funksiyasından istifadə edin."
        ],
        "hint": "path.extname() metodundan istifadə edin.",
        "izah": "Fayl adlarında tez-tez bir neçə nöqtə (.final.versiya.pdf) olur. Sadə string split ilk nöqtədən sonranı götürür və səhv edir. path.extname metodu sonuncu nöqtədən sonrakı həqiqi uzantını qaytarır.",
        "explanation": "Fayl adlarında tez-tez bir neçə nöqtə (.final.versiya.pdf) olur. Sadə string split ilk nöqtədən sonranı götürür və səhv edir. path.extname metodu sonuncu nöqtədən sonrakı həqiqi uzantını qaytarır."
      },
      {
        "id": "bug-sec18-08",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Dövr Daxilində EventEmitter Yaddaş Sızmasının (Memory Leak) Yaranması",
        "title": "Dövr Daxilində EventEmitter Yaddaş Sızmasının (Memory Leak) Yaranması",
        "tesvir": "Təkrar çağırışlarda eyni hadisə dinləyicisi yalnız bir dəfə mövcud olmalı və 'Aktiv dinləyici sayı: 1' qalmalıdır, lakin hər dövrdə yeni dinləyici əlavə olunur və yaddaş sızması xəbərdarlığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Təkrar çağırışlarda eyni hadisə dinləyicisi yalnız bir dəfə mövcud olmalı və 'Aktiv dinləyici sayı: 1' qalmalıdır, lakin hər dövrdə yeni dinləyici əlavə olunur və yaddaş sızması xəbərdarlığı yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\nfunction emeliyyatQos() {\n  // XƏTA: emitter.on hər çağırışda yeni dublikat dinləyici qoşur\n  emitter.on(\"data\", () => {});\n}\n\nfor (let i = 0; i < 5; i++) {\n  emeliyyatQos();\n}\n\nconsole.log(\"Aktiv dinləyici sayı:\", emitter.listenerCount(\"data\"));",
        "correctCode": "const { EventEmitter } = require(\"events\");\nconst emitter = new EventEmitter();\n\nfunction emeliyyatQos() {\n  emitter.once(\"data\", () => {});\n}\n\nemitter.removeAllListeners(\"data\");\nemeliyyatQos();\n\nconsole.log(\"Aktiv dinləyici sayı:\", emitter.listenerCount(\"data\"));",
        "expectedOutput": "Aktiv dinləyici sayı: 1",
        "correctOutput": "Aktiv dinləyici sayı: 1",
        "ipuclari": [
          "1-ci ipucu: Funksiyalar təkrar çağırıldıqda listenerCount artır və Node.js MaxListenersExceededWarning atır.",
          "2-ci ipucu: Dinləyiciləri təmizləyin və ya yalnız 1 dəfə qoşulmasını təmin edin."
        ],
        "hint": "Köhnə dinləyiciləri təmizləyin və ya yalnız bir aktiv dinləyici saxlayın.",
        "izah": "Dövrlər və ya təkrar çağırılan funksiyalar daxilində addListener/on istifadə edildikdə eyni hadisəyə yüzlərlə dinləyici bağlanır. Bu, ciddi yaddaş sızması yaradır. Təmizləmə və ya tək qeydiyyat aparılmalıdır.",
        "explanation": "Dövrlər və ya təkrar çağırılan funksiyalar daxilində addListener/on istifadə edildikdə eyni hadisəyə yüzlərlə dinləyici bağlanır. Bu, ciddi yaddaş sızması yaradır. Təmizləmə və ya tək qeydiyyat aparılmalıdır."
      },
      {
        "id": "bug-sec18-09",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Sinxron Callback ilə 'Zalgo' Probleminin (Qeyri-Müəyyən Asinxronluq) Yaranması",
        "title": "Sinxron Callback ilə 'Zalgo' Probleminin (Qeyri-Müəyyən Asinxronluq) Yaranması",
        "tesvir": "Məlumat yüklənməsi asinxron başa çatdıqda 'Sistem statusu: Hazırdır' qeydə alınmalıdır, lakin callback-in sinxron çağırılması səbəbilə inisializasiya tamamlanmamış qalır və 'Qeyri-müəyyən' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat yüklənməsi asinxron başa çatdıqda 'Sistem statusu: Hazırdır' qeydə alınmalıdır, lakin callback-in sinxron çağırılması səbəbilə inisializasiya tamamlanmamış qalır və 'Qeyri-müəyyən' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let sistemHazirdir = false;\n\nfunction konfiqYukle(callback) {\n  // XƏTA: Asinxron interfeys tələb olunan yerdə callback sinxron çağırılıb (Zalgo effekti)\n  callback();\n  sistemHazirdir = true;\n}\n\nawait new Promise((resolve) => {\n  konfiqYukle(() => {\n    console.log(\"Sistem statusu:\", sistemHazirdir ? \"Hazırdır\" : \"Qeyri-müəyyən\");\n    resolve();\n  });\n});",
        "correctCode": "let sistemHazirdir = false;\n\nfunction konfiqYukle(callback) {\n  process.nextTick(() => {\n    callback();\n  });\n  sistemHazirdir = true;\n}\n\nawait new Promise((resolve) => {\n  konfiqYukle(() => {\n    console.log(\"Sistem statusu:\", sistemHazirdir ? \"Hazırdır\" : \"Qeyri-müəyyən\");\n    resolve();\n  });\n});",
        "expectedOutput": "Sistem statusu: Hazırdır",
        "correctOutput": "Sistem statusu: Hazırdır",
        "ipuclari": [
          "1-ci ipucu: Node.js-də callback-in dərhal sinxron icra olunması gözlənilməz ardıcıllıq xətalarına (Zalgo) yol açır.",
          "2-ci ipucu: Callback-i növbəti dövrə təxirə salmaq üçün process.nextTick(() => callback()) daxilinə alın."
        ],
        "hint": "Callback funksiyasını process.nextTick() daxilində asinxronlaşdırın.",
        "izah": "Node.js arxitekturasında asinxron qəbul edilən funksiyalar bəzən sinxron çağırıldıqda dəyişənlər hələ inisializasiya olunmamış olur (Unleashing Zalgo). process.nextTick() çağırışı zəmanətli asinxron icra təmin edir.",
        "explanation": "Node.js arxitekturasında asinxron qəbul edilən funksiyalar bəzən sinxron çağırıldıqda dəyişənlər hələ inisializasiya olunmamış olur (Unleashing Zalgo). process.nextTick() çağırışı zəmanətli asinxron icra təmin edir."
      },
      {
        "id": "bug-sec18-10",
        "bolmeId": 18,
        "bolmeTitle": "Bölmə 18: Node.js Əsasları və Modul Sistemi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Eyni Vaxtda Fayla Asinxron Yazılma (Concurrent Write) Xətası",
        "title": "Eyni Vaxtda Fayla Asinxron Yazılma (Concurrent Write) Xətası",
        "tesvir": "Jurnala həm A, həm də B qeydi ardıcıl yazılmalı və 'Jurnal qeydləri: A və B yazıldı' təsdiqlənməlidir, lakin paralel yazma nəticəsində əvvəlki qeyd itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Jurnala həm A, həm də B qeydi ardıcıl yazılmalı və 'Jurnal qeydləri: A və B yazıldı' təsdiqlənməlidir, lakin paralel yazma nəticəsində əvvəlki qeyd itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function jurnalaYaz() {\n  // XƏTA: writeFile mövcud faylı sıfırlayaraq yenidən yazır, appendFile ardıcıl istifadə edilməlidir\n  fs.promises.writeFile(\"log.txt\", \"A\");\n  fs.promises.writeFile(\"log.txt\", \"B\");\n\n  await new Promise(r => setTimeout(r, 20));\n  const netice = await fs.promises.readFile(\"log.txt\", \"utf-8\");\n  console.log(\"Jurnal qeydləri:\", netice === \"AB\" ? \"A və B yazıldı\" : \"Yazılma natamamdır\");\n}\n\nawait jurnalaYaz();",
        "correctCode": "async function jurnalaYaz() {\n  await fs.promises.writeFile(\"log.txt\", \"\");\n  await fs.promises.appendFile(\"log.txt\", \"A\");\n  await fs.promises.appendFile(\"log.txt\", \"B\");\n\n  const netice = await fs.promises.readFile(\"log.txt\", \"utf-8\");\n  console.log(\"Jurnal qeydləri:\", netice === \"AB\" ? \"A və B yazıldı\" : \"Yazılma natamamdır\");\n}\n\nawait jurnalaYaz();",
        "expectedOutput": "Jurnal qeydləri: A və B yazıldı",
        "correctOutput": "Jurnal qeydləri: A və B yazıldı",
        "ipuclari": [
          "1-ci ipucu: writeFile hər çağırışda faylın məzmununu silib yenidən yazır; ardıcıl əlavə üçün appendFile lazımdır.",
          "2-ci ipucu: Asinxron əməliyyatların bir-birini gözləməsi üçün await açar sözü ilə ardıcıllığı təmin edin."
        ],
        "hint": "Faylın üzərinə yazmamaq üçün await ilə appendFile metodundan istifadə edin.",
        "izah": "fs.promises.writeFile mövcud faylın məzmununu tamamilə silib üstünə yazır. Əlavə olaraq asinxron çağırışlar gözlənilmədikdə yarış vəziyyəti yaranır. await fs.promises.appendFile məlumatları təhlükəsiz sona əlavə edir.",
        "explanation": "fs.promises.writeFile mövcud faylın məzmununu tamamilə silib üstünə yazır. Əlavə olaraq asinxron çağırışlar gözlənilmədikdə yarış vəziyyəti yaranır. await fs.promises.appendFile məlumatları təhlükəsiz sona əlavə edir."
      }
    ]
  },
  {
    "sectionId": "sec-19",
    "bolmeId": 19,
    "icon": "🚂",
    "sectionTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
    "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
    "bugs": [
      {
        "id": "bug-sec19-01",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Xüsusi Middleware Daxilində next() Çağırışının Unudulması",
        "title": "Xüsusi Middleware Daxilində next() Çağırışının Unudulması",
        "tesvir": "İstifadəçi sorğusu marşrut idarəedicisinə çatmalı və 'Status: 200 OK' qaytarmalıdır, lakin sorğu middleware mərhələsində ilişib qalır və icra tamamlanmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi sorğusu marşrut idarəedicisinə çatmalı və 'Status: 200 OK' qaytarmalıdır, lakin sorğu middleware mərhələsində ilişib qalır və icra tamamlanmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const express = require(\"express\");\nconst app = express();\n\nlet marshrutaCatdi = false;\n\n// XƏTA: Middleware növbəti funksiyaya keçmək üçün next() çağırmalıdır\napp.use((req, res, next) => {\n  req.vaxt = Date.now();\n});\n\napp.get(\"/api/test\", (req, res) => {\n  marshrutaCatdi = true;\n});\n\n// Simulyasiya: Sorğunun icrası\nconst stack = app._handlers || [];\nlet currentNext = () => { marshrutaCatdi = true; };\n// Middleware icra edilir\nconst mw = (req, res, next) => { req.vaxt = Date.now(); };\nmw({}, {}, currentNext);\n\nconsole.log(\"Status:\", marshrutaCatdi ? \"200 OK\" : \"İlişib qaldı\");",
        "correctCode": "const express = require(\"express\");\nconst app = express();\n\nlet marshrutaCatdi = false;\n\napp.use((req, res, next) => {\n  req.vaxt = Date.now();\n  next();\n});\n\napp.get(\"/api/test\", (req, res) => {\n  marshrutaCatdi = true;\n});\n\nconst mw = (req, res, next) => { req.vaxt = Date.now(); next(); };\nlet currentNext = () => { marshrutaCatdi = true; };\nmw({}, {}, currentNext);\n\nconsole.log(\"Status:\", marshrutaCatdi ? \"200 OK\" : \"İlişib qaldı\");",
        "expectedOutput": "Status: 200 OK",
        "correctOutput": "Status: 200 OK",
        "ipuclari": [
          "1-ci ipucu: Express middleware zəncirində idarəetməni növbəti mərhələyə ötürmək üçün 3-cü parametr çağırılmalıdır.",
          "2-ci ipucu: Middleware funksiyasının sonunda next() çağırışını əlavə edin."
        ],
        "hint": "Middleware daxilində next() çağırışını əlavə edin.",
        "izah": "Express middleware arxitekturasında əgər funksiya cavab göndərmirsə (res.send/res.json etmirsə), mütləq next() çağırmalıdır. Əks halda HTTP sorğusu asılı vəziyyətdə (hanging) qalır və timeout yaranır.",
        "explanation": "Express middleware arxitekturasında əgər funksiya cavab göndərmirsə (res.send/res.json etmirsə), mütləq next() çağırmalıdır. Əks halda HTTP sorğusu asılı vəziyyətdə (hanging) qalır və timeout yaranır."
      },
      {
        "id": "bug-sec19-02",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "express.json() Middleware-nin Təyin Edilməməsi Səbəbilə req.body Xətası",
        "title": "express.json() Middleware-nin Təyin Edilməməsi Səbəbilə req.body Xətası",
        "tesvir": "POST sorğusunda daxil olan JSON məlumatı oxunmalı və 'Qəbul edildi: Nurlan' çap olunmalıdır, lakin 'TypeError: Cannot read properties of undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "POST sorğusunda daxil olan JSON məlumatı oxunmalı və 'Qəbul edildi: Nurlan' çap olunmalıdır, lakin 'TypeError: Cannot read properties of undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const express = require(\"express\");\nconst app = express();\n\n// XƏTA: JSON gövdəsini (body) pars etmək üçün app.use(express.json()) unudulub\nlet req = { body: undefined };\n\n// Sorğunun simulyasiyası\ntry {\n  console.log(\"Qəbul edildi:\", req.body.ad);\n} catch(e) {\n  console.log(\"Qəbul edildi: Xəta (req.body boşdur)\");\n}",
        "correctCode": "const express = require(\"express\");\nconst app = express();\n\napp.use(express.json());\n\nlet req = { body: JSON.parse('{\"ad\":\"Nurlan\"}') };\n\nconsole.log(\"Qəbul edildi:\", req.body.ad);",
        "expectedOutput": "Qəbul edildi: Nurlan",
        "correctOutput": "Qəbul edildi: Nurlan",
        "ipuclari": [
          "1-ci ipucu: Express standart olaraq daxil olan POST sorğularının gövdəsini pars etmir.",
          "2-ci ipucu: app.use(express.json()) middleware-ni tətbiq edin və req.body-yə müraciət edin."
        ],
        "hint": "Gələn JSON məlumatını pars etmək üçün app.use(express.json()) middleware-dən istifadə edin.",
        "izah": "Express 4.16+ versiyasından etibarən daxili express.json() middleware mövcuddur. O, gələn axını oxuyur, JSON formatında pars edir və req.body obyektinə mənimsədir. Bu middleware olmadan req.body undefined qalır.",
        "explanation": "Express 4.16+ versiyasından etibarən daxili express.json() middleware mövcuddur. O, gələn axını oxuyur, JSON formatında pars edir və req.body obyektinə mənimsədir. Bu middleware olmadan req.body undefined qalır."
      },
      {
        "id": "bug-sec19-03",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Cavabın İki Dəfə Göndərilməsi Cəhdi (Headers Already Sent Xətası)",
        "title": "Cavabın İki Dəfə Göndərilməsi Cəhdi (Headers Already Sent Xətası)",
        "tesvir": "İstifadəçi tapılmadıqda xəta cavabı verilməlidir, lakin kodda 'return' unudulduğu üçün hər iki qol icra olunur və 'Error: Cannot set headers after they are sent' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi tapılmadıqda xəta cavabı verilməlidir, lakin kodda 'return' unudulduğu üçün hər iki qol icra olunur və 'Error: Cannot set headers after they are sent' qəzası yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let cavabSayi = 0;\nfunction resJson(data) {\n  cavabSayi++;\n  if (cavabSayi > 1) {\n    throw new Error(\"Cannot set headers after they are sent to the client\");\n  }\n}\n\nfunction emalEt(userTapilmadi) {\n  // XƏTA: resJson çağırışından sonra return yazılmadığı üçün kod davam edir\n  if (userTapilmadi) {\n    resJson({ xeta: \"İstifadəçi tapılmadı\" });\n  }\n  resJson({ ugur: true });\n}\n\ntry {\n  emalEt(true);\n} catch(e) {\n  console.log(\"Nəticə: Təkrar başlıq xətası baş verdi\");\n}",
        "correctCode": "let cavabSayi = 0;\nfunction resJson(data) {\n  cavabSayi++;\n  if (cavabSayi > 1) {\n    throw new Error(\"Cannot set headers after they are sent to the client\");\n  }\n}\n\nfunction emalEt(userTapilmadi) {\n  if (userTapilmadi) {\n    return resJson({ xeta: \"İstifadəçi tapılmadı\" });\n  }\n  resJson({ ugur: true });\n}\n\nemalEt(true);\nconsole.log(\"Nəticə: Yalnız bir dəfə cavab göndərildi\");",
        "expectedOutput": "Nəticə: Yalnız bir dəfə cavab göndərildi",
        "correctOutput": "Nəticə: Yalnız bir dəfə cavab göndərildi",
        "ipuclari": [
          "1-ci ipucu: res.json() və ya res.send() funksiyanın icrasını avtomatik dayandırmır.",
          "2-ci ipucu: Şərt daxilində cavab göndərdikdən dərhal sonra 'return' açar sözü yazın."
        ],
        "hint": "Cavab göndərilən yerdə 'return res.json(...)' istifadə edin.",
        "izah": "res.json() yalnız HTTP cavabını formalaşdırıb müştəriyə göndərir, lakin JavaScript funksiyasından çıxmır (return etmir). Funksiya davam edərək ikinci dəfə res.json çağırdıqda Node.js 'headers already sent' xətası atır.",
        "explanation": "res.json() yalnız HTTP cavabını formalaşdırıb müştəriyə göndərir, lakin JavaScript funksiyasından çıxmır (return etmir). Funksiya davam edərək ikinci dəfə res.json çağırdıqda Node.js 'headers already sent' xətası atır."
      },
      {
        "id": "bug-sec19-04",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "req.params Parametrinin Ədədlə Sərt Müqayisəsində (===) Tip Xətası",
        "title": "req.params Parametrinin Ədədlə Sərt Müqayisəsində (===) Tip Xətası",
        "tesvir": "Marşrut parametri vasitəsilə 1 nömrəli istifadəçi axtarılmalıdır, lakin tiplərin uyğunsuzluğuna görə axtarış uğursuz olur və 'İstifadəçi tapılmadı' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Marşrut parametri vasitəsilə 1 nömrəli istifadəçi axtarılmalıdır, lakin tiplərin uyğunsuzluğuna görə axtarış uğursuz olur və 'İstifadəçi tapılmadı' çıxır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const istifadeciler = [\n  { id: 1, ad: \"Kamran\" },\n  { id: 2, ad: \"Nigar\" }\n];\n\nconst req = { params: { id: \"1\" } };\n\n// XƏTA: u.id number tipindədir, req.params.id isə string (\"1\"). 1 === \"1\" false verir\nconst tapilan = istifadeciler.find(u => u.id === req.params.id);\n\nconsole.log(\"Nəticə:\", tapilan ? tapilan.ad : \"İstifadəçi tapılmadı\");",
        "correctCode": "const istifadeciler = [\n  { id: 1, ad: \"Kamran\" },\n  { id: 2, ad: \"Nigar\" }\n];\n\nconst req = { params: { id: \"1\" } };\n\nconst tapilan = istifadeciler.find(u => u.id === Number(req.params.id));\n\nconsole.log(\"Nəticə:\", tapilan ? tapilan.ad : \"İstifadəçi tapılmadı\");",
        "expectedOutput": "Nəticə: Kamran",
        "correctOutput": "Nəticə: Kamran",
        "ipuclari": [
          "1-ci ipucu: Express-də req.params daxilindəki bütün dəyərlər həmişə string (sətir) tipindədir.",
          "2-ci ipucu: Obyektdəki ədədi ID ilə müqayisə etmək üçün Number(req.params.id) yazın."
        ],
        "hint": "req.params.id dəyərini Number() ilə ədədə çevirərək müqayisə edin.",
        "izah": "URL marşrut parametrləri (/users/:id) həmişə string kimi qəbul olunur. Bazadakı və ya massivdəki ID-lər number olduqda, sərt bərabərlik (===) 1 === '1' üçün false qaytarır. Number() ilə tip uyğunlaşdırılmalıdır.",
        "explanation": "URL marşrut parametrləri (/users/:id) həmişə string kimi qəbul olunur. Bazadakı və ya massivdəki ID-lər number olduqda, sərt bərabərlik (===) 1 === '1' üçün false qaytarır. Number() ilə tip uyğunlaşdırılmalıdır."
      },
      {
        "id": "bug-sec19-05",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Dinamik Parametrli Marşrutun Statik Marşrutdan Əvvəl Gəlməsi Səhvi",
        "title": "Dinamik Parametrli Marşrutun Statik Marşrutdan Əvvəl Gəlməsi Səhvi",
        "tesvir": "'/users/profil' ünvanına müraciət edildikdə xüsusi profil səhifəsi açılmalıdır, lakin dinamik marşrut əvvəl elan edildiyi üçün 'profil' sözünü ID kimi qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "'/users/profil' ünvanına müraciət edildikdə xüsusi profil səhifəsi açılmalıdır, lakin dinamik marşrut əvvəl elan edildiyi üçün 'profil' sözünü ID kimi qəbul edir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let marshutNeticesi = \"\";\n\nfunction marshrutEmal(url) {\n  // XƏTA: :id marşrutu yuxarıda olduqda 'profil' sözünü id parametri kimi yaxalayır\n  if (url.startsWith(\"/users/\")) {\n    const sonHisse = url.replace(\"/users/\", \"\");\n    marshutNeticesi = \"Dinamik ID: \" + sonHisse;\n    return;\n  }\n  if (url === \"/users/profil\") {\n    marshutNeticesi = \"Statik Profil Səhifəsi\";\n    return;\n  }\n}\n\nmarshrutEmal(\"/users/profil\");\nconsole.log(\"Marşrut:\", marshutNeticesi);",
        "correctCode": "let marshutNeticesi = \"\";\n\nfunction marshrutEmal(url) {\n  if (url === \"/users/profil\") {\n    marshutNeticesi = \"Statik Profil Səhifəsi\";\n    return;\n  }\n  if (url.startsWith(\"/users/\")) {\n    const sonHisse = url.replace(\"/users/\", \"\");\n    marshutNeticesi = \"Dinamik ID: \" + sonHisse;\n    return;\n  }\n}\n\nmarshrutEmal(\"/users/profil\");\nconsole.log(\"Marşrut:\", marshutNeticesi);",
        "expectedOutput": "Marşrut: Statik Profil Səhifəsi",
        "correctOutput": "Marşrut: Statik Profil Səhifəsi",
        "ipuclari": [
          "1-ci ipucu: Express marşrutları yuxarıdan aşağıya ardıcıl yoxlayır və ilk uyğun gələni icra edir.",
          "2-ci ipucu: Statik ünvanları (/users/profil) dinamik parametrlilərdən (/users/:id) əvvəl qeyd edin."
        ],
        "hint": "Statik marşrutu dinamik :id marşrutundan əvvələ yerləşdirin.",
        "izah": "Express Router sorğuları qeydiyyat sırası ilə qarşılaşdırır. Əgər '/users/:id' marşrutu '/users/profil'-dən əvvəl yazılarsa, 'profil' kəlməsi :id parametri kimi tutulur və statik marşruta heç vaxt növbə çatmır.",
        "explanation": "Express Router sorğuları qeydiyyat sırası ilə qarşılaşdırır. Əgər '/users/:id' marşrutu '/users/profil'-dən əvvəl yazılarsa, 'profil' kəlməsi :id parametri kimi tutulur və statik marşruta heç vaxt növbə çatmır."
      },
      {
        "id": "bug-sec19-06",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Mərkəzi 4-Arqumentli Xəta Middleware-nin Marşrutlardan Əvvəl Qoyulması Səhvi",
        "title": "Mərkəzi 4-Arqumentli Xəta Middleware-nin Marşrutlardan Əvvəl Qoyulması Səhvi",
        "tesvir": "Serverdə baş verən xəta mərkəzi 4-arqumentli xəta middleware-i tərəfindən tutulmalı və 'Status: 500 Sistemi Qorudu' cavabı verilməlidir. Lakin xəta middleware-i marşrutlardan əvvəl yazıldığı üçün Express konveyeri onu ötürür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Serverdə baş verən xəta mərkəzi 4-arqumentli xəta middleware-i tərəfindən tutulmalı və 'Status: 500 Sistemi Qorudu' cavabı verilməlidir. Lakin xəta middleware-i marşrutlardan əvvəl yazıldığı üçün Express konveyeri onu ötürür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let xetaTutuldu = false;\n\n// XƏTA: 4 parametrli xəta middleware-i marşrutlardan ƏVVƏL yerləşdirilib!\nconst pipeline = [\n  { tip: 'errorHandler', fn: (err, req, res, next) => { xetaTutuldu = true; } },\n  { tip: 'route', fn: (req, res, next) => {} }\n];\n\n// Express konveyerində xəta zamanı yalnız marşrutdan SONRA gələn 4-parametrlilər çağırılır\nconst routeIdx = pipeline.findIndex(p => p.tip === 'route');\nconst handlerSonra = pipeline.slice(routeIdx + 1).find(p => p.tip === 'errorHandler' && p.fn.length === 4);\nif (handlerSonra) {\n  handlerSonra.fn(new Error('Baza xətası'), {}, {}, () => {});\n}\n\nconsole.log(\"Status:\", xetaTutuldu ? \"500 Sistemi Qorudu\" : \"Xəta idarəedicisi marşrutdan əvvəl qaldı\");",
        "correctCode": "let xetaTutuldu = false;\n\nconst pipeline = [\n  { tip: 'route', fn: (req, res, next) => {} },\n  { tip: 'errorHandler', fn: (err, req, res, next) => { xetaTutuldu = true; } }\n];\n\nconst routeIdx = pipeline.findIndex(p => p.tip === 'route');\nconst handlerSonra = pipeline.slice(routeIdx + 1).find(p => p.tip === 'errorHandler' && p.fn.length === 4);\nif (handlerSonra) {\n  handlerSonra.fn(new Error('Baza xətası'), {}, {}, () => {});\n}\n\nconsole.log(\"Status:\", xetaTutuldu ? \"500 Sistemi Qorudu\" : \"Xəta idarəedicisi marşrutdan əvvəl qaldı\");",
        "expectedOutput": "Status: 500 Sistemi Qorudu",
        "correctOutput": "Status: 500 Sistemi Qorudu",
        "ipuclari": [
          "1-ci ipucu: Express middleware konveyerini yuxarıdan aşağıya ardıcıl icra edir.",
          "2-ci ipucu: Mərkəzləşdirilmiş (err, req, res, next) xəta idarəedicisi həmişə bütün marşrutlardan SONRA qeydiyyatdan keçməlidir."
        ],
        "hint": "4-parametrlı xəta middleware-ni marşrutlardan sonraya yerləşdirin.",
        "izah": "Express.js-də növbəti xəta emalçısı axtarılarkən yalnız cari marşrutdan sonra gələn 4-arqumentli funksiyalar yoxlanılır. Əgər xəta idarəedicisi marşrutlardan əvvəl qeyd edilərsə, heç bir xəta ora çatmayacaq və server çökəcəkdir.",
        "explanation": "Express.js-də növbəti xəta emalçısı axtarılarkən yalnız cari marşrutdan sonra gələn 4-arqumentli funksiyalar yoxlanılır. Əgər xəta idarəedicisi marşrutlardan əvvəl qeyd edilərsə, heç bir xəta ora çatmayacaq və server çökəcəkdir."
      },
      {
        "id": "bug-sec19-07",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "CORS Middleware-nin Marşrutlardan Sonra Təyin Edilməsi Səhvi",
        "title": "CORS Middleware-nin Marşrutlardan Sonra Təyin Edilməsi Səhvi",
        "tesvir": "Kənar domenlərdən gələn sorğular üçün CORS başlıqları aktivləşdirilməlidir, lakin middleware marşrutdan sonra qeyd edildiyi üçün başlıqlar cavaba düşmür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Kənar domenlərdən gələn sorğular üçün CORS başlıqları aktivləşdirilməlidir, lakin middleware marşrutdan sonra qeyd edildiyi üçün başlıqlar cavaba düşmür. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const stack = [];\n\nfunction get(path, handler) { stack.push({ tip: \"route\", path }); }\nfunction use(middleware) { stack.push({ tip: \"middleware\", name: middleware.name }); }\n\n// XƏTA: cors middleware marşrutdan sonra yazılıb\nget(\"/api/kurslar\", () => {});\nfunction cors() {}\nuse(cors);\n\n// İlk gələn element marşrut olduqda CORS başlıqları tətbiq olunmur\nconst corsAktivdir = stack[0].tip === \"middleware\" && stack[0].name === \"cors\";\nconsole.log(\"CORS statusu:\", corsAktivdir ? \"Aktivdir\" : \"Bloklandı\");",
        "correctCode": "const stack = [];\n\nfunction get(path, handler) { stack.push({ tip: \"route\", path }); }\nfunction use(middleware) { stack.push({ tip: \"middleware\", name: middleware.name }); }\n\nfunction cors() {}\nuse(cors);\nget(\"/api/kurslar\", () => {});\n\nconst corsAktivdir = stack[0].tip === \"middleware\" && stack[0].name === \"cors\";\nconsole.log(\"CORS statusu:\", corsAktivdir ? \"Aktivdir\" : \"Bloklandı\");",
        "expectedOutput": "CORS statusu: Aktivdir",
        "correctOutput": "CORS statusu: Aktivdir",
        "ipuclari": [
          "1-ci ipucu: Express-də qlobal middleware-lər həmişə marşrutlardan (routes) əvvəl qeydiyyatdan keçməlidir.",
          "2-ci ipucu: use(cors) çağırışını get('/api/kurslar', ...) sətrindən yuxarıya qaldırın."
        ],
        "hint": "use(cors) middleware-ni marşrutlardan əvvələ keçirin.",
        "izah": "Express sorğunu qəbul edərkən zəncirdəki elementləri sırayla icra edir. Əgər marşrut əvvəl gəlirsə, cavab göndərilir və zəncir bitir; sonra gələn CORS middleware-nə heç vaxt növbə çatmır.",
        "explanation": "Express sorğunu qəbul edərkən zəncirdəki elementləri sırayla icra edir. Əgər marşrut əvvəl gəlirsə, cavab göndərilir və zəncir bitir; sonra gələn CORS middleware-nə heç vaxt növbə çatmır."
      },
      {
        "id": "bug-sec19-08",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Asinxron Marşrutda Xətanın next(err) ilə Ötürülməməsi",
        "title": "Asinxron Marşrutda Xətanın next(err) ilə Ötürülməməsi",
        "tesvir": "Asinxron bazadan məlumat çəkilərkən baş verən xəta qlobal idarəediciyə ötürülməlidir, lakin xəta səssiz udulur və ya server unhandled rejection ilə dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Asinxron bazadan məlumat çəkilərkən baş verən xəta qlobal idarəediciyə ötürülməlidir, lakin xəta səssiz udulur və ya server unhandled rejection ilə dayanır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let qlobalXeta = null;\nconst next = (err) => { qlobalXeta = err; };\n\nasync function asinxronHandler(req, res, next) {\n  try {\n    throw new Error(\"Baza bağlantısı kəsildi\");\n  } catch (xeta) {\n    // XƏTA: Tutulan xəta next(xeta) vasitəsilə Express-ə ötürülməyib\n  }\n}\n\nawait asinxronHandler({}, {}, next);\nconsole.log(\"Asinxron xəta:\", qlobalXeta ? \"Növbətiyə ötürüldü\" : \"İtirdi və uduldu\");",
        "correctCode": "let qlobalXeta = null;\nconst next = (err) => { qlobalXeta = err; };\n\nasync function asinxronHandler(req, res, next) {\n  try {\n    throw new Error(\"Baza bağlantısı kəsildi\");\n  } catch (xeta) {\n    next(xeta);\n  }\n}\n\nawait asinxronHandler({}, {}, next);\nconsole.log(\"Asinxron xəta:\", qlobalXeta ? \"Növbətiyə ötürüldü\" : \"İtirdi və uduldu\");",
        "expectedOutput": "Asinxron xəta: Növbətiyə ötürüldü",
        "correctOutput": "Asinxron xəta: Növbətiyə ötürüldü",
        "ipuclari": [
          "1-ci ipucu: Express 4-də asinxron funksiyalar daxilində yaranan xətaları Express avtomatik tutmur.",
          "2-ci ipucu: catch bloku daxilində next(xeta) çağıraraq xətanı ötürün."
        ],
        "hint": "catch blokunda xətanı next(xeta) ilə ötürün.",
        "izah": "Express 4 asinxron handler-lərdə atılan istisnaları (unhandled promise rejection) avtomatik xəta middleware-nə yönləndirmir. Mütləq try...catch qurulmalı və tutulan xəta next(err) vasitəsilə sistemə bildirilməlidir.",
        "explanation": "Express 4 asinxron handler-lərdə atılan istisnaları (unhandled promise rejection) avtomatik xəta middleware-nə yönləndirmir. Mütləq try...catch qurulmalı və tutulan xəta next(err) vasitəsilə sistemə bildirilməlidir."
      },
      {
        "id": "bug-sec19-09",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Alt Router Montajında Prefiksin İki Dəfə Təkrarlanması",
        "title": "Alt Router Montajında Prefiksin İki Dəfə Təkrarlanması",
        "tesvir": "Məhsullar siyahısı '/api/mehsullar' ünvanında cavab verməlidir, lakin router daxilində prefiks təkrarlandığı üçün marşrut səhvən '/api/api/mehsullar' olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsullar siyahısı '/api/mehsullar' ünvanında cavab verməlidir, lakin router daxilində prefiks təkrarlandığı üçün marşrut səhvən '/api/api/mehsullar' olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const prefiks = \"/api\";\n// XƏTA: Router artıq '/api' altında montaj olunacaqsa, daxilində təkrar '/api' yazılmamalıdır\nconst daxiliMarshut = \"/api/mehsullar\";\n\nconst yekunYol = (prefiks + daxiliMarshut).replace(/\\/\\//g, \"/\");\nconsole.log(\"Marşrut ünvanı:\", yekunYol === \"/api/mehsullar\" ? \"Düzgün\" : \"Təkrarlanan: \" + yekunYol);",
        "correctCode": "const prefiks = \"/api\";\nconst daxiliMarshut = \"/mehsullar\";\n\nconst yekunYol = (prefiks + daxiliMarshut).replace(/\\/\\//g, \"/\");\nconsole.log(\"Marşrut ünvanı:\", yekunYol === \"/api/mehsullar\" ? \"Düzgün\" : \"Təkrarlanan: \" + yekunYol);",
        "expectedOutput": "Marşrut ünvanı: Düzgün",
        "correctOutput": "Marşrut ünvanı: Düzgün",
        "ipuclari": [
          "1-ci ipucu: app.use('/api', router) yazıldıqda bütün router daxili yollar avtomatik '/api' ilə başlayır.",
          "2-ci ipucu: Router daxilindəki marşrutu sadəcə '/mehsullar' kimi qeyd edin."
        ],
        "hint": "Router daxilindəki yoldan artıq '/api' prefiksini silin.",
        "izah": "Express Router modullarında app.use(prefix, router) istifadə edildikdə prefiks avtomatik birləşdirilir. Router daxilində yenidən həmin prefiksi yazmaq yolların ikiqat təkrarlanmasına gətirib çıxarır.",
        "explanation": "Express Router modullarında app.use(prefix, router) istifadə edildikdə prefiks avtomatik birləşdirilir. Router daxilində yenidən həmin prefiksi yazmaq yolların ikiqat təkrarlanmasına gətirib çıxarır."
      },
      {
        "id": "bug-sec19-10",
        "bolmeId": 19,
        "bolmeTitle": "Bölmə 19: Express.js Çərçivəsi və Middleware Arxitekturası",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Qlobal Dəyişəndə İstifadəçi Saxlanılması və Məlumat Sızması (Contamination)",
        "title": "Qlobal Dəyişəndə İstifadəçi Saxlanılması və Məlumat Sızması (Contamination)",
        "tesvir": "Hər bir sorğunun istifadəçi məlumatı yalnız özünə aid olmalı və izolyasiya edilməlidir, lakin qlobal dəyişən istifadəsi səbəbilə istifadəçilərin məlumatları bir-birinə qarışır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hər bir sorğunun istifadəçi məlumatı yalnız özünə aid olmalı və izolyasiya edilməlidir, lakin qlobal dəyişən istifadəsi səbəbilə istifadəçilərin məlumatları bir-birinə qarışır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// XƏTA: Qlobal dəyişən eyni vaxtda daxil olan fərqli sorğuların istifadəçilərini qarışdırır\nlet qlobalAktivIstifadeci = null;\n\nfunction authMiddleware(req, res, next) {\n  qlobalAktivIstifadeci = req.headers.user;\n}\n\n// 1-ci istifadəçi sorğu göndərir, dərhal ardınca 2-ci\nauthMiddleware({ headers: { user: \"Elmir\" } }, {}, () => {});\nauthMiddleware({ headers: { user: \"Nigar\" } }, {}, () => {});\n\n// 1-ci sorğunun cavab anında yoxlanışı\nconst elmirinGorduyu = qlobalAktivIstifadeci;\nconsole.log(\"İzolyasiya:\", elmirinGorduyu === \"Elmir\" ? \"Təhlükəsiz\" : \"Məlumat qarışdı\");",
        "correctCode": "function authMiddleware(req, res, next) {\n  req.user = req.headers.user;\n}\n\nconst req1 = { headers: { user: \"Elmir\" } };\nconst req2 = { headers: { user: \"Nigar\" } };\n\nauthMiddleware(req1, {}, () => {});\nauthMiddleware(req2, {}, () => {});\n\nconst elmirinGorduyu = req1.user;\nconsole.log(\"İzolyasiya:\", elmirinGorduyu === \"Elmir\" ? \"Təhlükəsiz\" : \"Məlumat qarışdı\");",
        "expectedOutput": "İzolyasiya: Təhlükəsiz",
        "correctOutput": "İzolyasiya: Təhlükəsiz",
        "ipuclari": [
          "1-ci ipucu: Node.js tək axınlıdır (single-threaded), qlobal dəyişənlər bütün aktiv sorğular arasında paylaşılır.",
          "2-ci ipucu: Sorğuya aid məlumatları birbaşa 'req.user' və ya 'res.locals' obyektinə mənimsədin."
        ],
        "hint": "İstifadəçi məlumatını qlobal dəyişəndə deyil, 'req.user' obyektində saxlayın.",
        "izah": "Node.js tək prosesdə eyni vaxtda minlərlə sorğunu asinxron emal edir. Sorğuya məxsus məlumatlar qlobal və ya modul səviyyəli dəyişənlərdə saxlandıqda, fərqli istifadəçilərin məlumatları bir-birinə sızır. Təhlükəsizlik üçün 'req' və ya 'res.locals' istifadə edilməlidir.",
        "explanation": "Node.js tək prosesdə eyni vaxtda minlərlə sorğunu asinxron emal edir. Sorğuya məxsus məlumatlar qlobal və ya modul səviyyəli dəyişənlərdə saxlandıqda, fərqli istifadəçilərin məlumatları bir-birinə sızır. Təhlükəsizlik üçün 'req' və ya 'res.locals' istifadə edilməlidir."
      }
    ]
  },
  {
    "sectionId": "sec-20",
    "bolmeId": 20,
    "icon": "🔄",
    "sectionTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
    "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
    "bugs": [
      {
        "id": "bug-sec20-01",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Resurs Yaradılmasında 201 Əvəzinə Standart 200 Qaytarılması Xətası",
        "title": "Resurs Yaradılmasında 201 Əvəzinə Standart 200 Qaytarılması Xətası",
        "tesvir": "POST sorğusu ilə yeni məhsul yaradıldıqda REST standartlarına uyğun 'HTTP Status: 201 Created' qeydə alınmalıdır, lakin kod standart 200 qaytarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "POST sorğusu ilə yeni məhsul yaradıldıqda REST standartlarına uyğun 'HTTP Status: 201 Created' qeydə alınmalıdır, lakin kod standart 200 qaytarır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "function yeniMehsulYarat(body) {\n  const mehsul = { id: 101, ad: body.ad };\n  // XƏTA: REST standartlarına görə resurs yaradıldıqda 201 Created statusu verilməlidir\n  return { status: 200, data: mehsul };\n}\n\nconst cavab = yeniMehsulYarat({ ad: \"Klaviatura\" });\nconsole.log(\"HTTP Status:\", cavab.status === 201 ? \"201 Created\" : \"200 Standart\");",
        "correctCode": "function yeniMehsulYarat(body) {\n  const mehsul = { id: 101, ad: body.ad };\n  return { status: 201, data: mehsul };\n}\n\nconst cavab = yeniMehsulYarat({ ad: \"Klaviatura\" });\nconsole.log(\"HTTP Status:\", cavab.status === 201 ? \"201 Created\" : \"200 Standart\");",
        "expectedOutput": "HTTP Status: 201 Created",
        "correctOutput": "HTTP Status: 201 Created",
        "ipuclari": [
          "1-ci ipucu: HTTP protokolunda yeni resurs uğurla yaradıldıqda xüsusi status kodu tətbiq olunur.",
          "2-ci ipucu: Status kodunu 200-dən 201-ə dəyişin."
        ],
        "hint": "Uğurla yeni resurs yaradılması üçün status kodunu 201 olaraq təyin edin.",
        "izah": "RESTful memarlıq prinsiplərinə görə, serverdə yeni bir qeyd və ya resurs formalaşdıqda müştəriyə məhz HTTP 201 Created cavabı verilməlidir. 200 OK yalnız mövcud məlumatların oxunması və ya yenilənməsi üçündür.",
        "explanation": "RESTful memarlıq prinsiplərinə görə, serverdə yeni bir qeyd və ya resurs formalaşdıqda müştəriyə məhz HTTP 201 Created cavabı verilməlidir. 200 OK yalnız mövcud məlumatların oxunması və ya yenilənməsi üçündür."
      },
      {
        "id": "bug-sec20-02",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "DELETE Əməliyyatında 204 No Content Zamanı Gövdənin (Body) Göndərilməsi",
        "title": "DELETE Əməliyyatında 204 No Content Zamanı Gövdənin (Body) Göndərilməsi",
        "tesvir": "Məhsul silindikdən sonra HTTP 204 No Content statusu qaytarılmalıdır, lakin HTTP spesifikasiyasına zidd olaraq cavaba gövdə əlavə edilir və xəbərdarlıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsul silindikdən sonra HTTP 204 No Content statusu qaytarılmalıdır, lakin HTTP spesifikasiyasına zidd olaraq cavaba gövdə əlavə edilir və xəbərdarlıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "function mehsulSil(id) {\n  // XƏTA: HTTP 204 statusu heç bir cavab gövdəsi (body: null) qəbul etmir\n  return { status: 204, body: { mesaj: \"Silindi\" } };\n}\n\nconst cavab = mehsulSil(5);\nconst duzgundur = cavab.status === 204 && cavab.body === null;\nconsole.log(\"Status:\", duzgundur ? \"204 No Content\" : \"Yanlış gövdə var\");",
        "correctCode": "function mehsulSil(id) {\n  return { status: 204, body: null };\n}\n\nconst cavab = mehsulSil(5);\nconst duzgundur = cavab.status === 204 && cavab.body === null;\nconsole.log(\"Status:\", duzgundur ? \"204 No Content\" : \"Yanlış gövdə var\");",
        "expectedOutput": "Status: 204 No Content",
        "correctOutput": "Status: 204 No Content",
        "ipuclari": [
          "1-ci ipucu: HTTP 204 statusu 'No Content' mənasını verir və məzmunsuz olmalıdır.",
          "2-ci ipucu: body sahəsini null təyin edin."
        ],
        "hint": "204 statusu ilə birlikdə cavab gövdəsini null edin.",
        "izah": "RFC 7231 standartına əsasən, 204 No Content status kodu serverin sorğunu uğurla yerinə yetirdiyini, lakin müştəriyə heç bir məlumat gövdəsi göndərməyəcəyini bəyan edir. Gövdə əlavə etmək protokola ziddir.",
        "explanation": "RFC 7231 standartına əsasən, 204 No Content status kodu serverin sorğunu uğurla yerinə yetirdiyini, lakin müştəriyə heç bir məlumat gövdəsi göndərməyəcəyini bəyan edir. Gövdə əlavə etmək protokola ziddir."
      },
      {
        "id": "bug-sec20-03",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Resurs Tapılmadıqda 404 Əvəzinə Boş 200 Qaytarılması Xətası",
        "title": "Resurs Tapılmadıqda 404 Əvəzinə Boş 200 Qaytarılması Xətası",
        "tesvir": "Verilən identifikatorlu istifadəçi tapılmadıqda REST qaydalarına uyğun 'Status: 404 Not Found' qaytarılmalıdır, lakin server səhvən 200 OK ilə boş nəticə göndərir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Verilən identifikatorlu istifadəçi tapılmadıqda REST qaydalarına uyğun 'Status: 404 Not Found' qaytarılmalıdır, lakin server səhvən 200 OK ilə boş nəticə göndərir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const istifadeciler = [{ id: 1, ad: \"Kamran\" }];\n\nfunction istifadeciTap(id) {\n  const tapilan = istifadeciler.find(u => u.id === id);\n  // XƏTA: tapılmadıqda belə status 200 qaytarılır\n  return { status: 200, data: tapilan || null };\n}\n\nconst cavab = istifadeciTap(99);\nconsole.log(\"Status:\", cavab.status === 404 ? \"404 Not Found\" : \"200 Səhv Cavab\");",
        "correctCode": "const istifadeciler = [{ id: 1, ad: \"Kamran\" }];\n\nfunction istifadeciTap(id) {\n  const tapilan = istifadeciler.find(u => u.id === id);\n  if (!tapilan) {\n    return { status: 404, data: { xeta: \"İstifadəçi tapılmadı\" } };\n  }\n  return { status: 200, data: tapilan };\n}\n\nconst cavab = istifadeciTap(99);\nconsole.log(\"Status:\", cavab.status === 404 ? \"404 Not Found\" : \"200 Səhv Cavab\");",
        "expectedOutput": "Status: 404 Not Found",
        "correctOutput": "Status: 404 Not Found",
        "ipuclari": [
          "1-ci ipucu: Resurs mövcud olmadıqda klientə uğurlu (200) deyil, müvafiq HTTP xəta kodu bildirilməlidir.",
          "2-ci ipucu: Əgər element tapılmayıbsa, status: 404 qaytarın."
        ],
        "hint": "İstifadəçi tapılmadıqda status: 404 Not Found qaytarın.",
        "izah": "Tələb olunan ID mövcud olmadıqda 200 OK (və ya null data) göndərmək anti-pattern sayılır. Klient tərəf əməliyyatın uğursuz olduğunu bilmək üçün 404 Not Found cavabı almalıdır.",
        "explanation": "Tələb olunan ID mövcud olmadıqda 200 OK (və ya null data) göndərmək anti-pattern sayılır. Klient tərəf əməliyyatın uğursuz olduğunu bilmək üçün 404 Not Found cavabı almalıdır."
      },
      {
        "id": "bug-sec20-04",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "PATCH Əməliyyatında Obyektin Birləşdirilməsi Əvəzinə Üstünə Yazılması",
        "title": "PATCH Əməliyyatında Obyektin Birləşdirilməsi Əvəzinə Üstünə Yazılması",
        "tesvir": "Məhsulun yalnız qiyməti yenilənməli, adı isə saxlanmalıdır, lakin obyekt tamamilə əvəzləndiyi üçün 'Məhsul adı: undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məhsulun yalnız qiyməti yenilənməli, adı isə saxlanmalıdır, lakin obyekt tamamilə əvəzləndiyi üçün 'Məhsul adı: undefined' xətası baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let mehsul = { id: 10, ad: \"Noutbuk\", qiymet: 1500 };\nconst patchData = { qiymet: 1200 };\n\n// XƏTA: PATCH qismən yeniləmədir; birbaşa mənimsətmə köhnə sahələri (ad, id) silir\nmehsul = patchData;\n\nconsole.log(\"Məhsul adı:\", mehsul.ad, \"| Qiymət:\", mehsul.qiymet);",
        "correctCode": "let mehsul = { id: 10, ad: \"Noutbuk\", qiymet: 1500 };\nconst patchData = { qiymet: 1200 };\n\nmehsul = { ...mehsul, ...patchData };\n\nconsole.log(\"Məhsul adı:\", mehsul.ad, \"| Qiymət:\", mehsul.qiymet);",
        "expectedOutput": "Məhsul adı: Noutbuk | Qiymət: 1200",
        "correctOutput": "Məhsul adı: Noutbuk | Qiymət: 1200",
        "ipuclari": [
          "1-ci ipucu: PATCH metodu resursun tam əvəzlənməsini (PUT) deyil, mövcud sahələrin üzərinə birləşdirilməsini (merge) tələb edir.",
          "2-ci ipucu: Yayılma operatoru ilə birləşdirin: mehsul = { ...mehsul, ...patchData }."
        ],
        "hint": "mehsul = { ...mehsul, ...patchData } sintaksisi ilə qismən yenilənmə aparın.",
        "izah": "PUT tam resurs əvəzləməsidir, PATCH isə qismən modifikasiyadır (partial update). Birbaşa mehsul = patchData yazıldıqda köhnə sahələr itir; obyektlərin birləşdirilməsi tələb olunur.",
        "explanation": "PUT tam resurs əvəzləməsidir, PATCH isə qismən modifikasiyadır (partial update). Birbaşa mehsul = patchData yazıldıqda köhnə sahələr itir; obyektlərin birləşdirilməsi tələb olunur."
      },
      {
        "id": "bug-sec20-05",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Səhifələmədə (Pagination) Sürüşmənin (Offset) Bir Vahid Artıq Hesablanması",
        "title": "Səhifələmədə (Pagination) Sürüşmənin (Offset) Bir Vahid Artıq Hesablanması",
        "tesvir": "1-ci səhifə üçün başlanğıc ofseti 'Səhifə 1 Başlanğıc: 0' olmalıdır, lakin hesablamada off-by-one xətası səbəbindən ilk 10 qeyd ötürülür və ofset 10 olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "1-ci səhifə üçün başlanğıc ofseti 'Səhifə 1 Başlanğıc: 0' olmalıdır, lakin hesablamada off-by-one xətası səbəbindən ilk 10 qeyd ötürülür və ofset 10 olur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const sehife = 1;\nconst limit = 10;\n\n// XƏTA: 1-ci səhifə üçün ofset 0 olmalıdır, sehife * limit yazıldıqda ilk 10 qeyd itir\nconst offset = sehife * limit;\n\nconsole.log(\"Səhifə 1 Başlanğıc:\", offset);",
        "correctCode": "const sehife = 1;\nconst limit = 10;\n\nconst offset = (sehife - 1) * limit;\n\nconsole.log(\"Səhifə 1 Başlanğıc:\", offset);",
        "expectedOutput": "Səhifə 1 Başlanğıc: 0",
        "correctOutput": "Səhifə 1 Başlanğıc: 0",
        "ipuclari": [
          "1-ci ipucu: Səhifələmə 1-dən başlasa da, massiv və baza indeksləri 0-dan başlayır.",
          "2-ci ipucu: Ofset düsturunu (sehife - 1) * limit kimi düzəldin."
        ],
        "hint": "Ofset hesablamasını (sehife - 1) * limit düsturu ilə qurun.",
        "izah": "Pagination riyaziyyatında səhifə nömrəsi 1 olduqda ofset 0 olmalıdır. Düzgün düstur: offset = (page - 1) * limit. Birbaşa page * limit yazıldıqda 1-ci səhifə 2-ci səhifənin məlumatlarını gətirir.",
        "explanation": "Pagination riyaziyyatında səhifə nömrəsi 1 olduqda ofset 0 olmalıdır. Düzgün düstur: offset = (page - 1) * limit. Birbaşa page * limit yazıldıqda 1-ci səhifə 2-ci səhifənin məlumatlarını gətirir."
      },
      {
        "id": "bug-sec20-06",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "POST Məlumatlarının Doğrulanmaması (Validation) Səbəbilə Boş Qeyd",
        "title": "POST Məlumatlarının Doğrulanmaması (Validation) Səbəbilə Boş Qeyd",
        "tesvir": "Məcburi sahələr çatışmadıqda API 'HTTP Status: 400 Bad Request' qaytarmalıdır, lakin yoxlama olmadığı üçün etibarsız məlumat qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məcburi sahələr çatışmadıqda API 'HTTP Status: 400 Bad Request' qaytarmalıdır, lakin yoxlama olmadığı üçün etibarsız məlumat qeydə alınır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "function istifadeciQeydEt(reqBody) {\n  // XƏTA: ad və email sahələrinin mövcudluğu yoxlanılmır\n  const yeni = { id: 5, ad: reqBody.ad, email: reqBody.email };\n  return { status: 201, data: yeni };\n}\n\nconst cavab = istifadeciQeydEt({ email: \"test@misal.az\" });\nconsole.log(\"HTTP Status:\", cavab.status === 400 ? \"400 Bad Request\" : \"201 Qəbul edildi\");",
        "correctCode": "function istifadeciQeydEt(reqBody) {\n  if (!reqBody.ad || !reqBody.email) {\n    return { status: 400, xeta: \"Ad və email tələb olunur\" };\n  }\n  const yeni = { id: 5, ad: reqBody.ad, email: reqBody.email };\n  return { status: 201, data: yeni };\n}\n\nconst cavab = istifadeciQeydEt({ email: \"test@misal.az\" });\nconsole.log(\"HTTP Status:\", cavab.status === 400 ? \"400 Bad Request\" : \"201 Qəbul edildi\");",
        "expectedOutput": "HTTP Status: 400 Bad Request",
        "correctOutput": "HTTP Status: 400 Bad Request",
        "ipuclari": [
          "1-ci ipucu: Müştəri məlumatı natamam göndərdikdə 400 Bad Request statusu qaytarılmalıdır.",
          "2-ci ipucu: if (!reqBody.ad || !reqBody.email) şərtini daxil edin və 400 qaytarın."
        ],
        "hint": "reqBody daxilində ad və email sahələrini yoxlayaraq çatışmadıqda status 400 verin.",
        "izah": "Giriş məlumatlarının doğrulanması (input validation) CRUD əməliyyatlarının mühüm hissəsidir. Məcburi sahələr olmadan qeyd yaratmaq bazanın çirklənməsinə səbəb olur. Çatışmazlıq olduqda 400 qaytarılmalıdır.",
        "explanation": "Giriş məlumatlarının doğrulanması (input validation) CRUD əməliyyatlarının mühüm hissəsidir. Məcburi sahələr olmadan qeyd yaratmaq bazanın çirklənməsinə səbəb olur. Çatışmazlıq olduqda 400 qaytarılmalıdır."
      },
      {
        "id": "bug-sec20-07",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Kateqoriya Filterində Hərf Registrinin (Case-Sensitivity) Nəzərə Alınmaması",
        "title": "Kateqoriya Filterində Hərf Registrinin (Case-Sensitivity) Nəzərə Alınmaması",
        "tesvir": "'kitab' kateqoriyası axtarıldıqda həm 'Kitab', həm də 'kitab' məhsulları tapılmalı və 'Tapılan element sayı: 2' çıxmalıdır, lakin sərt bərabərlik səbəbilə bəzi qeydlər itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "'kitab' kateqoriyası axtarıldıqda həm 'Kitab', həm də 'kitab' məhsulları tapılmalı və 'Tapılan element sayı: 2' çıxmalıdır, lakin sərt bərabərlik səbəbilə bəzi qeydlər itir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const mehsullar = [\n  { id: 1, ad: \"JS Bələdçisi\", kateqoriya: \"Kitab\" },\n  { id: 2, ad: \"Node.js Dərslik\", kateqoriya: \"kitab\" },\n  { id: 3, ad: \"Qulaqlıq\", kateqoriya: \"Elektronika\" }\n];\n\nconst sorgu = \"kitab\";\n// XƏTA: Sərt === müqayisəsi böyük 'Kitab' ilə kiçik 'kitab'-ı uyğunlaşdırmır\nconst netice = mehsullar.filter(m => m.kateqoriya === sorgu);\n\nconsole.log(\"Tapılan element sayı:\", netice.length);",
        "correctCode": "const mehsullar = [\n  { id: 1, ad: \"JS Bələdçisi\", kateqoriya: \"Kitab\" },\n  { id: 2, ad: \"Node.js Dərslik\", kateqoriya: \"kitab\" },\n  { id: 3, ad: \"Qulaqlıq\", kateqoriya: \"Elektronika\" }\n];\n\nconst sorgu = \"kitab\";\nconst netice = mehsullar.filter(m => m.kateqoriya.toLowerCase() === sorgu.toLowerCase());\n\nconsole.log(\"Tapılan element sayı:\", netice.length);",
        "expectedOutput": "Tapılan element sayı: 2",
        "correctOutput": "Tapılan element sayı: 2",
        "ipuclari": [
          "1-ci ipucu: Axtarış və filter əməliyyatlarında registr həssaslığı nəticələri məhdudlaşdırır.",
          "2-ci ipucu: Həm kateqoriyanı, həm də sorğunu .toLowerCase() ilə kiçik hərflərə çevirərək müqayisə edin."
        ],
        "hint": "Müqayisəni toLowerCase() vasitəsilə registr müstəqil edin.",
        "izah": "İstifadəçilər axtarış parametrini fərqli registrlərdə (kitab, Kitab, KITAB) göndərə bilər. Hər iki tərəf toLowerCase() edilmədən aparılan bərabərlik yoxlaması düzgün məlumatları kənarda qoyur.",
        "explanation": "İstifadəçilər axtarış parametrini fərqli registrlərdə (kitab, Kitab, KITAB) göndərə bilər. Hər iki tərəf toLowerCase() edilmədən aparılan bərabərlik yoxlaması düzgün məlumatları kənarda qoyur."
      },
      {
        "id": "bug-sec20-08",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Kütləvi Mənimsətmə (Mass Assignment) Zəifliyi ilə Rolun Qanunsuz Dəyişdirilməsi",
        "title": "Kütləvi Mənimsətmə (Mass Assignment) Zəifliyi ilə Rolun Qanunsuz Dəyişdirilməsi",
        "tesvir": "Profil redaktəsində istifadəçi yalnız ad və şəhəri dəyişə bilməli, rolu isə toxunulmaz qalmalıdır, lakin bütün req.body qəbul edildiyi üçün rol 'admin' olaraq dəyişdirilir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Profil redaktəsində istifadəçi yalnız ad və şəhəri dəyişə bilməli, rolu isə toxunulmaz qalmalıdır, lakin bütün req.body qəbul edildiyi üçün rol 'admin' olaraq dəyişdirilir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const cariUser = { id: 1, ad: \"Kamran\", seher: \"Bakı\", rol: \"istifadeci\" };\n// Zərərli istifadəçi sorğusunda 'rol' sahəsi göndərib\nconst reqBody = { seher: \"Gəncə\", rol: \"admin\" };\n\n// XƏTA: Bütün reqBody birbaşa mənimsədildikdə kritik sahələr (rol) istifadəçi tərəfindən idarə olunur\nconst yenilenmis = { ...cariUser, ...reqBody };\n\nconsole.log(\"İstifadəçi rolu:\", yenilenmis.rol === \"istifadeci\" ? \"istifadeci (Qorundu)\" : \"admin (Təhlükə!)\");",
        "correctCode": "const cariUser = { id: 1, ad: \"Kamran\", seher: \"Bakı\", rol: \"istifadeci\" };\nconst reqBody = { seher: \"Gəncə\", rol: \"admin\" };\n\nconst { ad, seher } = reqBody;\nconst yenilenmis = {\n  ...cariUser,\n  ...(ad !== undefined && { ad }),\n  ...(seher !== undefined && { seher })\n};\n\nconsole.log(\"İstifadəçi rolu:\", yenilenmis.rol === \"istifadeci\" ? \"istifadeci (Qorundu)\" : \"admin (Təhlükə!)\");",
        "expectedOutput": "İstifadəçi rolu: istifadeci (Qorundu)",
        "correctOutput": "İstifadəçi rolu: istifadeci (Qorundu)",
        "ipuclari": [
          "1-ci ipucu: Bu Mass Assignment (kütləvi mənimsətmə) zəifliyidir.",
          "2-ci ipucu: req.body-dən yalnız icazə verilən sahələri (ad, seher) çıxarın (whitelist) və rolu qoruyun."
        ],
        "hint": "req.body-dən yalnız dəyişdirilməsinə icazə verilən sahələri seçin (whitelisting).",
        "izah": "Mass Assignment təhlükəsizlik boşluğunda müştəri gözlənilməyən xassələr (isAdmin, role, balance) göndərərək hüquqlarını artıra bilər. Çözüm: yalnız icazə verilmiş sahələri destrukturizasiya ilə seçməkdir.",
        "explanation": "Mass Assignment təhlükəsizlik boşluğunda müştəri gözlənilməyən xassələr (isAdmin, role, balance) göndərərək hüquqlarını artıra bilər. Çözüm: yalnız icazə verilmiş sahələri destrukturizasiya ilə seçməkdir."
      },
      {
        "id": "bug-sec20-09",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Təkrarlanan POST Sorğularında İdempotentliyin (Idempotency) İdarə Olunmaması",
        "title": "Təkrarlanan POST Sorğularında İdempotentliyin (Idempotency) İdarə Olunmaması",
        "tesvir": "Şəbəkə təkrarı zamanı eyni açarlı ödəniş yalnız bir dəfə hesablanmalı və 'Tranzaksiya sayı: 1 (İdempotent)' olmalıdır, lakin keş yoxlanışı olmadığı üçün ikiqat ödəniş çıxılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Şəbəkə təkrarı zamanı eyni açarlı ödəniş yalnız bir dəfə hesablanmalı və 'Tranzaksiya sayı: 1 (İdempotent)' olmalıdır, lakin keş yoxlanışı olmadığı üçün ikiqat ödəniş çıxılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const emalOlunmusKeyler = new Set();\nlet hesablananSay = 0;\n\nfunction odenisEt(idempotencyKey, mebleg) {\n  // XƏTA: idempotencyKey əvvəlcədən mövcuddursa tranzaksiya təkrarlanmamalıdır\n  hesablananSay++;\n  emalOlunmusKeyler.add(idempotencyKey);\n}\n\nodenisEt(\"tx-999\", 50);\nodenisEt(\"tx-999\", 50);\n\nconsole.log(\"Tranzaksiya sayı:\", hesablananSay === 1 ? \"1 (İdempotent)\" : hesablananSay + \" (Təkrarlanan Xəta)\");",
        "correctCode": "const emalOlunmusKeyler = new Set();\nlet hesablananSay = 0;\n\nfunction odenisEt(idempotencyKey, mebleg) {\n  if (emalOlunmusKeyler.has(idempotencyKey)) {\n    return;\n  }\n  hesablananSay++;\n  emalOlunmusKeyler.add(idempotencyKey);\n}\n\nodenisEt(\"tx-999\", 50);\nodenisEt(\"tx-999\", 50);\n\nconsole.log(\"Tranzaksiya sayı:\", hesablananSay === 1 ? \"1 (İdempotent)\" : hesablananSay + \" (Təkrarlanan Xəta)\");",
        "expectedOutput": "Tranzaksiya sayı: 1 (İdempotent)",
        "correctOutput": "Tranzaksiya sayı: 1 (İdempotent)",
        "ipuclari": [
          "1-ci ipucu: İdempotentlik əməliyyatın təkrar icrasının eyni nəticəni verməsini təmin edir.",
          "2-ci ipucu: Əgər emalOlunmusKeyler.has(idempotencyKey) doğrudursa, funksiyadan dərhal return edin."
        ],
        "hint": "İdempotency-Key əvvəllər emal edilibsə təkrar icradan imtina edin.",
        "izah": "POST sorğuları təbiətən idempotent deyil. Ödəniş sistemlərində müştəri təkrar sorğu göndərdikdə ikiqat pul çıxılmasının qarşısını almaq üçün 'Idempotency-Key' başlığı yoxlanılır və dublikatlar ləğv edilir.",
        "explanation": "POST sorğuları təbiətən idempotent deyil. Ödəniş sistemlərində müştəri təkrar sorğu göndərdikdə ikiqat pul çıxılmasının qarşısını almaq üçün 'Idempotency-Key' başlığı yoxlanılır və dublikatlar ləğv edilir."
      },
      {
        "id": "bug-sec20-10",
        "bolmeId": 20,
        "bolmeTitle": "Bölmə 20: RESTful API Dizaynı və CRUD Əməliyyatları",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "İç-içə Resurslarda (Nested Routes) Sahiblik Yoxlanışının Olmaması (BOLA/IDOR)",
        "title": "İç-içə Resurslarda (Nested Routes) Sahiblik Yoxlanışının Olmaması (BOLA/IDOR)",
        "tesvir": "İstifadəçi yalnız öz sifarişini əldə edə bilməlidir; başqasının sifarişinə müraciət edildikdə 'Giriş icazəsi: 403 Qadağandır' verilməlidir, lakin sahiblik yoxlanışı olmadığı üçün məlumat sızır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi yalnız öz sifarişini əldə edə bilməlidir; başqasının sifarişinə müraciət edildikdə 'Giriş icazəsi: 403 Qadağandır' verilməlidir, lakin sahiblik yoxlanışı olmadığı üçün məlumat sızır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const sifarisler = [\n  { id: 701, userId: 1, mebleg: 120 },\n  { id: 702, userId: 2, mebleg: 450 }\n];\n\nfunction sifarisGetir(userId, orderId) {\n  const sifaris = sifarisler.find(s => s.id === orderId);\n  // XƏTA: Sifariş tapılsa belə onun verilən userId-yə məxsus olduğu yoxlanılmır (IDOR zəifliyi)\n  return { status: 200, data: sifaris };\n}\n\n// 1 nömrəli istifadəçi 2 nömrəlinin sifarişini çəkməyə cəhd edir\nconst cavab = sifarisGetir(1, 702);\nconsole.log(\"Giriş icazəsi:\", cavab.status === 403 ? \"403 Qadağandır\" : \"200 İcazəsiz Giriş\");",
        "correctCode": "const sifarisler = [\n  { id: 701, userId: 1, mebleg: 120 },\n  { id: 702, userId: 2, mebleg: 450 }\n];\n\nfunction sifarisGetir(userId, orderId) {\n  const sifaris = sifarisler.find(s => s.id === orderId);\n  if (!sifaris) {\n    return { status: 404, data: null };\n  }\n  if (sifaris.userId !== userId) {\n    return { status: 403, data: null };\n  }\n  return { status: 200, data: sifaris };\n}\n\nconst cavab = sifarisGetir(1, 702);\nconsole.log(\"Giriş icazəsi:\", cavab.status === 403 ? \"403 Qadağandır\" : \"200 İcazəsiz Giriş\");",
        "expectedOutput": "Giriş icazəsi: 403 Qadağandır",
        "correctOutput": "Giriş icazəsi: 403 Qadağandır",
        "ipuclari": [
          "1-ci ipucu: Bu, OWASP API Security siyahısında 1 nömrəli BOLA / IDOR zəifliyidir.",
          "2-ci ipucu: Sifarişin userId-si sorğu göndərən userId ilə uyğun gəlmədikdə status: 403 qaytarın."
        ],
        "hint": "sifaris.userId !== userId yoxlaması apararaq 403 statusu qaytarın.",
        "izah": "BOLA (Broken Object Level Authorization) zəifliyində istifadəçi URL-dəki parametr vasitəsilə başqa istifadəçinin resurslarını oxuya bilir. /users/:userId/orders/:orderId marşrutunda sifarişin sahibi mütləq yoxlanılmalıdır.",
        "explanation": "BOLA (Broken Object Level Authorization) zəifliyində istifadəçi URL-dəki parametr vasitəsilə başqa istifadəçinin resurslarını oxuya bilir. /users/:userId/orders/:orderId marşrutunda sifarişin sahibi mütləq yoxlanılmalıdır."
      }
    ]
  },
  {
    "sectionId": "sec-21",
    "bolmeId": 21,
    "icon": "🛡️",
    "sectionTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
    "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
    "bugs": [
      {
        "id": "bug-sec21-01",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Sətir İnterpolyasiyası ilə SQL Injection Təhlükəsinin Yaranması",
        "title": "Sətir İnterpolyasiyası ilə SQL Injection Təhlükəsinin Yaranması",
        "tesvir": "İstifadəçi e-poçtuna görə axtarılmalı və 'Sorğu növü: Təhlükəsiz Parametrləşdirilmiş' olmalıdır, lakin sətir şablonu istifadə edildiyi üçün SQL Injection hücumuna qarşı həssaslıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi e-poçtuna görə axtarılmalı və 'Sorğu növü: Təhlükəsiz Parametrləşdirilmiş' olmalıdır, lakin sətir şablonu istifadə edildiyi üçün SQL Injection hücumuna qarşı həssaslıq yaranır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function istifadeciAxtar(email) {\n  // XƏTA: SQL sorğusuna daxil olan parametrin interpolyasiya ($) ilə birbaşa sətirə qoşulması\n  const sql = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\n  const tehlukesiz = false;\n  return { sql, tehlukesiz };\n}\n\nconst res = await istifadeciAxtar(\"kamran@misal.az\");\nconsole.log(\"Sorğu növü:\", res.tehlukesiz ? \"Təhlükəsiz Parametrləşdirilmiş\" : \"Qeyri-təhlükəsiz\");",
        "correctCode": "async function istifadeciAxtar(email) {\n  const sql = \"SELECT * FROM users WHERE email = $1\";\n  const params = [email];\n  const tehlukesiz = sql.includes(\"$1\");\n  return { sql, tehlukesiz };\n}\n\nconst res = await istifadeciAxtar(\"kamran@misal.az\");\nconsole.log(\"Sorğu növü:\", res.tehlukesiz ? \"Təhlükəsiz Parametrləşdirilmiş\" : \"Qeyri-təhlükəsiz\");",
        "expectedOutput": "Sorğu növü: Təhlükəsiz Parametrləşdirilmiş",
        "correctOutput": "Sorğu növü: Təhlükəsiz Parametrləşdirilmiş",
        "ipuclari": [
          "1-ci ipucu: SQL Injection-dan qorunmağın əsas yolu parametrləşdirilmiş sorğulardır (Prepared Statements).",
          "2-ci ipucu: 'email = $1' yazın və dəyəri ikinci parametr kimi massivdə ötürün."
        ],
        "hint": "Sətir birləşməsi əvəzinə $1 yer tutucusundan istifadə edin.",
        "izah": "SQL Injection hücumunda bədniyyətli şəxs email sahəsinə ' OR '1'='1 daxil edərək bütün bazanı sızdıra bilər. Parametrləşdirilmiş sorğularda ($1) verilənlər bazası mühərriki daxil olan mətni kod kimi yox, sırf xam məlumat kimi qiymətləndirir.",
        "explanation": "SQL Injection hücumunda bədniyyətli şəxs email sahəsinə ' OR '1'='1 daxil edərək bütün bazanı sızdıra bilər. Parametrləşdirilmiş sorğularda ($1) verilənlər bazası mühərriki daxil olan mətni kod kimi yox, sırf xam məlumat kimi qiymətləndirir."
      },
      {
        "id": "bug-sec21-02",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Parolun Məlumat Bazasında Açıq Mətn (Plaintext) Kimi Saxlanması",
        "title": "Parolun Məlumat Bazasında Açıq Mətn (Plaintext) Kimi Saxlanması",
        "tesvir": "İstifadəçi qeydiyyatdan keçərkən parol heşlənməli və 'Parol statusu: Heşləndi və Saxlanıldı' təmin edilməlidir, lakin açıq mətn saxlanıldığı üçün təhlükəsizlik qaydası pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi qeydiyyatdan keçərkən parol heşlənməli və 'Parol statusu: Heşləndi və Saxlanıldı' təmin edilməlidir, lakin açıq mətn saxlanıldığı üçün təhlükəsizlik qaydası pozulur. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function istifadeciQeydEt(ad, xamParol) {\n  // XƏTA: Parol bcrypt ilə heşlənmədən bazaya birbaşa ötürülür\n  const saxlanilanParol = xamParol;\n  const heshdir = saxlanilanParol.startsWith(\"$2b$\");\n  console.log(\"Parol statusu:\", heshdir ? \"Heşləndi və Saxlanıldı\" : \"Açıq mətn (Təhlükə!)\");\n}\n\nawait istifadeciQeydEt(\"Murad\", \"Gizli123\");",
        "correctCode": "async function istifadeciQeydEt(ad, xamParol) {\n  const saxlanilanParol = await bcrypt.hash(xamParol, 10);\n  const heshdir = saxlanilanParol.startsWith(\"$2b$\");\n  console.log(\"Parol statusu:\", heshdir ? \"Heşləndi və Saxlanıldı\" : \"Açıq mətn (Təhlükə!)\");\n}\n\nawait istifadeciQeydEt(\"Murad\", \"Gizli123\");",
        "expectedOutput": "Parol statusu: Heşləndi və Saxlanıldı",
        "correctOutput": "Parol statusu: Heşləndi və Saxlanıldı",
        "ipuclari": [
          "1-ci ipucu: Parollar heç vaxt bazada açıq mətn kimi saxlanılmamalı, kriptoqrafik heşlənməlidir.",
          "2-ci ipucu: bcrypt.hash(xamParol, 10) metodundan istifadə edərək parolu şifrələyin."
        ],
        "hint": "Parolu saxlamaq üçün bcrypt.hash() funksiyasından istifadə edin.",
        "izah": "Parolların bazada açıq mətn kimi saxlanılması böyük təhlükəsizlik cinayətidir. Bazaya kənar müdaxilə olduqda parollar ələ keçir. bcrypt.hash() duzlama (salting) və möhkəm alqoritmlə parolu bərpa olunmaz heşə çevirir.",
        "explanation": "Parolların bazada açıq mətn kimi saxlanılması böyük təhlükəsizlik cinayətidir. Bazaya kənar müdaxilə olduqda parollar ələ keçir. bcrypt.hash() duzlama (salting) və möhkəm alqoritmlə parolu bərpa olunmaz heşə çevirir."
      },
      {
        "id": "bug-sec21-03",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ASAN",
        "difficulty": "Asan",
        "basliq": "Parol Doğrulamasında bcrypt.compare Əvəzinə Sadə Bərabərlik Xətası",
        "title": "Parol Doğrulamasında bcrypt.compare Əvəzinə Sadə Bərabərlik Xətası",
        "tesvir": "İstifadəçi giriş edərkən daxil edilən parol heşlə müqayisə edilməli və 'Doğrulama: Uğurlu' çıxmalıdır, lakin sadə === müqayisəsi səbəbindən heşlə açıq mətn uyğunlaşmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçi giriş edərkən daxil edilən parol heşlə müqayisə edilməli və 'Doğrulama: Uğurlu' çıxmalıdır, lakin sadə === müqayisəsi səbəbindən heşlə açıq mətn uyğunlaşmır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const bazadakiHesh = \"$2b$10$hash_Gizli123\";\nconst daxilEdilen = \"Gizli123\";\n\n// XƏTA: Açıq mətn heşlə birbaşa === ilə yoxlanıla bilməz, bcrypt.compare tələb olunur\nconst uygun = daxilEdilen === bazadakiHesh;\n\nconsole.log(\"Doğrulama:\", uygun ? \"Uğurlu\" : \"Uğursuz\");",
        "correctCode": "const bazadakiHesh = \"$2b$10$hash_Gizli123\";\nconst daxilEdilen = \"Gizli123\";\n\nconst uygun = await bcrypt.compare(daxilEdilen, bazadakiHesh);\n\nconsole.log(\"Doğrulama:\", uygun ? \"Uğurlu\" : \"Uğursuz\");",
        "expectedOutput": "Doğrulama: Uğurlu",
        "correctOutput": "Doğrulama: Uğurlu",
        "ipuclari": [
          "1-ci ipucu: Heşlənmiş parolu yoxlamaq üçün xüsusi asinxron müqayisə metodundan istifadə olunmalıdır.",
          "2-ci ipucu: await bcrypt.compare(daxilEdilen, bazadakiHesh) metodunu çağırın."
        ],
        "hint": "Parolu yoxlamaq üçün await bcrypt.compare() metodundan istifadə edin.",
        "izah": "Heşləmə birtərəfli prosesdir və geriyə qaytarıla bilməz. Sadə === bərabərliyi heç vaxt doğru olmayacaq. bcrypt.compare() daxil edilən parolu eyni duzla heşləyib nəticələri zaman hücumlarına (timing attack) qarşı təhlükəsiz şəkildə qarşılaşdırır.",
        "explanation": "Heşləmə birtərəfli prosesdir və geriyə qaytarıla bilməz. Sadə === bərabərliyi heç vaxt doğru olmayacaq. bcrypt.compare() daxil edilən parolu eyni duzla heşləyib nəticələri zaman hücumlarına (timing attack) qarşı təhlükəsiz şəkildə qarşılaşdırır."
      },
      {
        "id": "bug-sec21-04",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "JWT Token Yaradılmasında Bitmə Müddətinin (expiresIn) Təyin Edilməməsi",
        "title": "JWT Token Yaradılmasında Bitmə Müddətinin (expiresIn) Təyin Edilməməsi",
        "tesvir": "İstifadəçiyə verilən token məhdud müddətli olmalı və 'Token vəziyyəti: Vaxt təyin edildi' qeydə alınmalıdır, lakin bitmə müddəti unudulduğu üçün token əbədi etibarlı qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "İstifadəçiyə verilən token məhdud müddətli olmalı və 'Token vəziyyəti: Vaxt təyin edildi' qeydə alınmalıdır, lakin bitmə müddəti unudulduğu üçün token əbədi etibarlı qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const payload = { userId: 42 };\nconst gizliAcar = \"super_gizli_acar\";\n\n// XƏTA: expiresIn verilmədikdə JWT tokeninin heç vaxt vaxtı bitmir (sonsuz etibarlılıq təhlükəsi)\nconst token = jwt.sign(payload, gizliAcar);\n\nconst vaxtiVar = token.includes(\"expires\");\nconsole.log(\"Token vəziyyəti:\", vaxtiVar ? \"Vaxt təyin edildi\" : \"Müddətsiz (Təhlükəli)\");",
        "correctCode": "const payload = { userId: 42 };\nconst gizliAcar = \"super_gizli_acar\";\n\nconst token = jwt.sign(payload, gizliAcar, { expiresIn: \"1h\" });\n\nconst vaxtiVar = token.includes(\"expires\");\nconsole.log(\"Token vəziyyəti:\", vaxtiVar ? \"Vaxt təyin edildi\" : \"Müddətsiz (Təhlükəli)\");",
        "expectedOutput": "Token vəziyyəti: Vaxt təyin edildi",
        "correctOutput": "Token vəziyyəti: Vaxt təyin edildi",
        "ipuclari": [
          "1-ci ipucu: Təhlükəsizlik qaydalarına görə sessiya tokenləri həmişə müəyyən istifadə müddətinə malik olmalıdır.",
          "2-ci ipucu: jwt.sign metodunun 3-cü arqumentinə { expiresIn: '1h' } konfiqurasiyasını əlavə edin."
        ],
        "hint": "jwt.sign() metoduna { expiresIn: '1h' } seçimini əlavə edin.",
        "izah": "Bitmə müddəti (exp) olmayan JWT tokenləri oğurlandıqda hücumçu tərəfindən həmişəlik istifadə edilə bilər. Təhlükəsiz arxitekturada hər tokenə qısa ömür (məsələn, '15m' və ya '1h') verilməli və Refresh Token mexanizmi qurulmalıdır.",
        "explanation": "Bitmə müddəti (exp) olmayan JWT tokenləri oğurlandıqda hücumçu tərəfindən həmişəlik istifadə edilə bilər. Təhlükəsiz arxitekturada hər tokenə qısa ömür (məsələn, '15m' və ya '1h') verilməli və Refresh Token mexanizmi qurulmalıdır."
      },
      {
        "id": "bug-sec21-05",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Authorization Başlığından 'Bearer ' Prefiksinin Təmizlənməməsi",
        "title": "Authorization Başlığından 'Bearer ' Prefiksinin Təmizlənməməsi",
        "tesvir": "Müştərinin göndərdiyi JWT token doğrulanmalı və 'Token sahibi: Kamran' çap olunmalıdır, lakin 'Bearer ' prefiksi təmizlənmədiyi üçün jwt malformed xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Müştərinin göndərdiyi JWT token doğrulanmalı və 'Token sahibi: Kamran' çap olunmalıdır, lakin 'Bearer ' prefiksi təmizlənmədiyi üçün jwt malformed xətası atılır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "const authHeader = \"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9\";\n\nlet user = null;\ntry {\n  // XƏTA: authHeader birbaşa ötürülür, halbuki 'Bearer ' sözü ayrılmalıdır\n  user = jwt.verify(authHeader, \"gizli_acar\");\n} catch(e) {\n  user = null;\n}\n\nconsole.log(\"Token sahibi:\", user ? user.ad : \"Xəta (Token malformed)\");",
        "correctCode": "const authHeader = \"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9\";\n\nlet user = null;\ntry {\n  const token = authHeader.split(\" \")[1];\n  user = jwt.verify(token, \"gizli_acar\");\n} catch(e) {\n  user = null;\n}\n\nconsole.log(\"Token sahibi:\", user ? user.ad : \"Xəta (Token malformed)\");",
        "expectedOutput": "Token sahibi: Kamran",
        "correctOutput": "Token sahibi: Kamran",
        "ipuclari": [
          "1-ci ipucu: HTTP Authorization başlığı standart olaraq 'Bearer <token>' formatında gəlir.",
          "2-ci ipucu: Sətri boşluğa görə bölün və ikinci hissəni götürün: authHeader.split(' ')[1]."
        ],
        "hint": "authHeader.split(' ')[1] vasitəsilə təmiz tokeni əldə edin.",
        "izah": "Brauzerlər və API klientləri tokeni 'Bearer eyJ...' şəklində göndərir. jwt.verify metoduna isə sırf tokenin özü (3 hissəli base64 sətir) lazımdır. 'Bearer ' prefiksi silinmədikdə JWT formatı pozulur və xəta atılır.",
        "explanation": "Brauzerlər və API klientləri tokeni 'Bearer eyJ...' şəklində göndərir. jwt.verify metoduna isə sırf tokenin özü (3 hissəli base64 sətir) lazımdır. 'Bearer ' prefiksi silinmədikdə JWT formatı pozulur və xəta atılır."
      },
      {
        "id": "bug-sec21-06",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Verilənlər Bazası Müştərisinin (Client) Hovuza Qaytarılmaması (Leak)",
        "title": "Verilənlər Bazası Müştərisinin (Client) Hovuza Qaytarılmaması (Leak)",
        "tesvir": "Məlumat bazasından məlumat alındıqdan sonra qoşulma hovuza qaytarılmalı və 'Müştəri hovuza qaytarıldı: 0 aktiv qaldı' alınmalıdır, lakin client.release() unudulduğu üçün qoşulma sızması baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Məlumat bazasından məlumat alındıqdan sonra qoşulma hovuza qaytarılmalı və 'Müştəri hovuza qaytarıldı: 0 aktiv qaldı' alınmalıdır, lakin client.release() unudulduğu üçün qoşulma sızması baş verir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "async function melumatOxu() {\n  const client = await pool.connect();\n  try {\n    const res = await client.query(\"SELECT * FROM users WHERE id = $1\", [1]);\n  } catch(e) {\n  }\n  // XƏTA: finally bloku və client.release() yoxdur, müştəri həmişəlik məşğul qalır\n}\n\nawait melumatOxu();\nconsole.log(\"Müştəri hovuza qaytarıldı:\", pool._clients === 0 ? \"0 aktiv qaldı\" : \"Sızma var (\" + pool._clients + \")\");",
        "correctCode": "async function melumatOxu() {\n  const client = await pool.connect();\n  try {\n    const res = await client.query(\"SELECT * FROM users WHERE id = $1\", [1]);\n  } finally {\n    client.release();\n  }\n}\n\nawait melumatOxu();\nconsole.log(\"Müştəri hovuza qaytarıldı:\", pool._clients === 0 ? \"0 aktiv qaldı\" : \"Sızma var (\" + pool._clients + \")\");",
        "expectedOutput": "Müştəri hovuza qaytarıldı: 0 aktiv qaldı",
        "correctOutput": "Müştəri hovuza qaytarıldı: 0 aktiv qaldı",
        "ipuclari": [
          "1-ci ipucu: pool.connect() vasitəsilə ayrılan resurslar iş bitdikdə mütləq hovuza geri təhvil verilməlidir.",
          "2-ci ipucu: finally { client.release(); } blokundan istifadə edin."
        ],
        "hint": "Xəta baş versə belə qoşulmanı azad etmək üçün finally { client.release(); } yazın.",
        "izah": "PostgreSQL və digər bazalarda qoşulma hovuzunun (Connection Pool) məhdud sayda müştərisi (məsələn, 10-20) olur. Əgər client.release() çağırılmazsa, bir neçə sorğudan sonra bütün hovuz tükənir və server donur.",
        "explanation": "PostgreSQL və digər bazalarda qoşulma hovuzunun (Connection Pool) məhdud sayda müştərisi (məsələn, 10-20) olur. Əgər client.release() çağırılmazsa, bir neçə sorğudan sonra bütün hovuz tükənir və server donur."
      },
      {
        "id": "bug-sec21-07",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ORTA",
        "difficulty": "Orta",
        "basliq": "Hər Marşrutda new Pool() Yaradılması Səbəbilə Baza Əlaqələrinin Tükənməsi (Sızma)",
        "title": "Hər Marşrutda new Pool() Yaradılması Səbəbilə Baza Əlaqələrinin Tükənməsi (Sızma)",
        "tesvir": "Hər bir sorğuda sıfırdan 'new Pool()' yaratmaq əvəzinə tək bir paylaşılan 'db.js' hovuzundan istifadə edilməli və 'Hovuz statusu: Tək Mərkəzi Hovuz (1)' çap olunmalıdır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Hər bir sorğuda sıfırdan 'new Pool()' yaratmaq əvəzinə tək bir paylaşılan 'db.js' hovuzundan istifadə edilməli və 'Hovuz statusu: Tək Mərkəzi Hovuz (1)' çap olunmalıdır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// db.js modulu: Tək mərkəzi hovuz\nconst sharedPool = { id: 1, connections: 10 };\n\nfunction handleUserRoute(createLocalPool) {\n  // XƏTA: Hər marşrutda yeni Pool yaradılması hovuzların çoxalmasına və resurs sızmasına səbəb olur\n  let pool;\n  if (createLocalPool) {\n    pool = { id: Math.random(), connections: 10 };\n    return \"Yeni Lokal Hovuz\";\n  }\n  pool = sharedPool;\n  return \"Tək Mərkəzi Hovuz (\" + pool.id + \")\";\n}\n\nconst netice = handleUserRoute(true);\nconsole.log(\"Hovuz statusu:\", netice);",
        "correctCode": "const sharedPool = { id: 1, connections: 10 };\n\nfunction handleUserRoute(createLocalPool) {\n  let pool;\n  if (createLocalPool) {\n    pool = { id: Math.random(), connections: 10 };\n    return \"Yeni Lokal Hovuz\";\n  }\n  pool = sharedPool;\n  return \"Tək Mərkəzi Hovuz (\" + pool.id + \")\";\n}\n\nconst netice = handleUserRoute(false);\nconsole.log(\"Hovuz statusu:\", netice);",
        "expectedOutput": "Hovuz statusu: Tək Mərkəzi Hovuz (1)",
        "correctOutput": "Hovuz statusu: Tək Mərkəzi Hovuz (1)",
        "ipuclari": [
          "1-ci ipucu: Connection Pool (Əlaqə Hovuzu) bütün layihə üzrə tək bir instansiya kimi mövcud olmalıdır (Singleton).",
          "2-ci ipucu: Marşrut funksiyasını handleUserRoute(false) ilə çağıraraq tək mərkəzi hovuzdan istifadə edin."
        ],
        "hint": "Hər dəfə yeni pool yaratmaq əvəzinə sharedPool-dan istifadə edin.",
        "izah": "Hər HTTP sorğusunda və ya hər marşrut modulunda 'new Pool()' çağırmaq saniyələr içində verilənlər bazasının icazə verdiyi maksimum əlaqə sayını (məs: 100 bağlantı) doldurur və baza yeni qoşulmaları rədd edir. Düzgün praktika hovuzun yalnız 'db.js'-də yaradılıb ixrac olunmasıdır.",
        "explanation": "Hər HTTP sorğusunda və ya hər marşrut modulunda 'new Pool()' çağırmaq saniyələr içində verilənlər bazasının icazə verdiyi maksimum əlaqə sayını (məs: 100 bağlantı) doldurur və baza yeni qoşulmaları rədd edir. Düzgün praktika hovuzun yalnız 'db.js'-də yaradılıb ixrac olunmasıdır."
      },
      {
        "id": "bug-sec21-08",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "CORS-da Wildcard (*) və Credentials Seçimlərinin Birgə İşlədilməsi Xətası",
        "title": "CORS-da Wildcard (*) və Credentials Seçimlərinin Birgə İşlədilməsi Xətası",
        "tesvir": "Kuki və sessiya ötürülməsi üçün etibarlı domen təyin edilməli və 'CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi' alınmalıdır, lakin wildcard (*) ilə credentials: true birlikdə yazıldığı üçün brauzer sorğunu bloklayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Kuki və sessiya ötürülməsi üçün etibarlı domen təyin edilməli və 'CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi' alınmalıdır, lakin wildcard (*) ilə credentials: true birlikdə yazıldığı üçün brauzer sorğunu bloklayır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "// XƏTA: Veb standartlarına görə credentials: true olduqda origin: '*' ola bilməz\nconst corsKonfiq = {\n  origin: \"*\",\n  credentials: true\n};\n\nconst duzgundur = corsKonfiq.credentials && corsKonfiq.origin !== \"*\";\nconsole.log(\"CORS təhlükəsizliyi:\", duzgundur ? \"Etibarlı Domen Təyin Edildi\" : \"Qeyri-mümkün konfiqurasiya\");",
        "correctCode": "const corsKonfiq = {\n  origin: \"https://jsoyren.az\",\n  credentials: true\n};\n\nconst duzgundur = corsKonfiq.credentials && corsKonfiq.origin !== \"*\";\nconsole.log(\"CORS təhlükəsizliyi:\", duzgundur ? \"Etibarlı Domen Təyin Edildi\" : \"Qeyri-mümkün konfiqurasiya\");",
        "expectedOutput": "CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi",
        "correctOutput": "CORS təhlükəsizliyi: Etibarlı Domen Təyin Edildi",
        "ipuclari": [
          "1-ci ipucu: W3C CORS spesifikasiyası 'Access-Control-Allow-Origin: *' ilə 'Access-Control-Allow-Credentials: true' birləşməsini qəti qadağan edir.",
          "2-ci ipucu: origin sahəsində '*' əvəzinə konkret etibarlı domen ('https://jsoyren.az') qeyd edin."
        ],
        "hint": "origin üçün wildcard (*) əvəzinə dəqiq domen ('https://jsoyren.az') göstərin.",
        "izah": "Əgər tətbiq kukiləri (cookies, authorization headers) qəbul edirsə (credentials: true), brauzer təhlükəsizlik səbəbilə istənilən saytın (*) bu məlumatlara girişini bloklayır. Mütləq dəqiq domen göstərilməlidir.",
        "explanation": "Əgər tətbiq kukiləri (cookies, authorization headers) qəbul edirsə (credentials: true), brauzer təhlükəsizlik səbəbilə istənilən saytın (*) bu məlumatlara girişini bloklayır. Mütləq dəqiq domen göstərilməlidir."
      },
      {
        "id": "bug-sec21-09",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "Tranzaksiyada Xəta Zamanı ROLLBACK Əmrinin Verilməməsi",
        "title": "Tranzaksiyada Xəta Zamanı ROLLBACK Əmrinin Verilməməsi",
        "tesvir": "Bank köçürməsində xəta baş verdikdə tranzaksiya ləğv edilməli və 'Tranzaksiya ləğv edildi: ROLLBACK icra olundu' təsdiqlənməlidir, lakin catch blokunda ROLLBACK unudulduğu üçün baza asılı vəziyyətdə qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Bank köçürməsində xəta baş verdikdə tranzaksiya ləğv edilməli və 'Tranzaksiya ləğv edildi: ROLLBACK icra olundu' təsdiqlənməlidir, lakin catch blokunda ROLLBACK unudulduğu üçün baza asılı vəziyyətdə qalır. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let tranzaksiyaStatusu = \"Açıq\";\n\nasync function pulKocur() {\n  tranzaksiyaStatusu = \"BEGIN\";\n  try {\n    throw new Error(\"Balans kifayət deyil\");\n    tranzaksiyaStatusu = \"COMMIT\";\n  } catch (e) {\n    // XƏTA: catch bloku daxilində tranzaksiya ROLLBACK edilməyib\n  }\n}\n\nawait pulKocur();\nconsole.log(\"Tranzaksiya ləğv edildi:\", tranzaksiyaStatusu === \"ROLLBACK\" ? \"ROLLBACK icra olundu\" : \"Tranzaksiya açıq qaldı\");",
        "correctCode": "let tranzaksiyaStatusu = \"Açıq\";\n\nasync function pulKocur() {\n  tranzaksiyaStatusu = \"BEGIN\";\n  try {\n    throw new Error(\"Balans kifayət deyil\");\n    tranzaksiyaStatusu = \"COMMIT\";\n  } catch (e) {\n    tranzaksiyaStatusu = \"ROLLBACK\";\n  }\n}\n\nawait pulKocur();\nconsole.log(\"Tranzaksiya ləğv edildi:\", tranzaksiyaStatusu === \"ROLLBACK\" ? \"ROLLBACK icra olundu\" : \"Tranzaksiya açıq qaldı\");",
        "expectedOutput": "Tranzaksiya ləğv edildi: ROLLBACK icra olundu",
        "correctOutput": "Tranzaksiya ləğv edildi: ROLLBACK icra olundu",
        "ipuclari": [
          "1-ci ipucu: Verilənlər bazası tranzaksiyalarında (ACID) xəta baş verərsə, bütün yarımçıq dəyişikliklər geri qaytarılmalıdır.",
          "2-ci ipucu: catch blokunda tranzaksiyaStatusu = 'ROLLBACK' əmrini icra edin."
        ],
        "hint": "catch bloku daxilində ROLLBACK əmrini təmin edin.",
        "izah": "SQL tranzaksiyalarında BEGIN çağırıldıqdan sonra xəta yaranarsa və ROLLBACK edilməzsə, cədvəl sətirləri kilidli (row locks) qalır və sonrakı bütün sorğular bloklanır. Mütləq catch daxilində ROLLBACK verilməlidir.",
        "explanation": "SQL tranzaksiyalarında BEGIN çağırıldıqdan sonra xəta yaranarsa və ROLLBACK edilməzsə, cədvəl sətirləri kilidli (row locks) qalır və sonrakı bütün sorğular bloklanır. Mütləq catch daxilində ROLLBACK verilməlidir."
      },
      {
        "id": "bug-sec21-10",
        "bolmeId": 21,
        "bolmeTitle": "Bölmə 21: Məlumat Bazaları ilə İnteqrasiya və Veb Təhlükəsizliyi",
        "cetinlik": "ÇƏTİN",
        "difficulty": "Çətin",
        "basliq": "SQL Sorğusunda WHERE Şərtinin Unudulması Səbəbilə Bütün Sətirlərin Silinməsi",
        "title": "SQL Sorğusunda WHERE Şərtinin Unudulması Səbəbilə Bütün Sətirlərin Silinməsi",
        "tesvir": "Yalnız 105 nömrəli istifadəçi silinməli və 'Silinən sətir sayı: 1' çap olunmalıdır, lakin SQL sorğusunda 'WHERE' şərti unudulduğu üçün bazadakı bütün sətirlər silinir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "instruction": "Yalnız 105 nömrəli istifadəçi silinməli və 'Silinən sətir sayı: 1' çap olunmalıdır, lakin SQL sorğusunda 'WHERE' şərti unudulduğu üçün bazadakı bütün sətirlər silinir. Kodu tədqiq edin, xətanı tapın və aradan qaldırın.",
        "buggyCode": "let bazaSetirleri = [\n  { id: 101, ad: \"Əli\" },\n  { id: 102, ad: \"Nigar\" },\n  { id: 105, ad: \"Samir\" }\n];\n\nfunction silIstifadeci(sql, targetId) {\n  // XƏTA: WHERE şərti olmadıqda DELETE cədvəldəki hər şeyi silir!\n  if (!sql.toUpperCase().includes(\"WHERE\")) {\n    const say = bazaSetirleri.length;\n    bazaSetirleri = [];\n    return say;\n  }\n  const evvel = bazaSetirleri.length;\n  bazaSetirleri = bazaSetirleri.filter(u => u.id !== targetId);\n  return evvel - bazaSetirleri.length;\n}\n\n// XƏTA: WHERE unudulub!\nconst query = \"DELETE FROM users\";\nconst silinen = silIstifadeci(query, 105);\nconsole.log(\"Silinən sətir sayı:\", silinen);",
        "correctCode": "let bazaSetirleri = [\n  { id: 101, ad: \"Əli\" },\n  { id: 102, ad: \"Nigar\" },\n  { id: 105, ad: \"Samir\" }\n];\n\nfunction silIstifadeci(sql, targetId) {\n  if (!sql.toUpperCase().includes(\"WHERE\")) {\n    const say = bazaSetirleri.length;\n    bazaSetirleri = [];\n    return say;\n  }\n  const evvel = bazaSetirleri.length;\n  bazaSetirleri = bazaSetirleri.filter(u => u.id !== targetId);\n  return evvel - bazaSetirleri.length;\n}\n\nconst query = \"DELETE FROM users WHERE id = $1\";\nconst silinen = silIstifadeci(query, 105);\nconsole.log(\"Silinən sətir sayı:\", silinen);",
        "expectedOutput": "Silinən sətir sayı: 1",
        "correctOutput": "Silinən sətir sayı: 1",
        "ipuclari": [
          "1-ci ipucu: SQL-də DELETE və UPDATE əmrləri həmişə hansı sətirlərin hədəf alındığını müəyyən edən şərtə malik olmalıdır.",
          "2-ci ipucu: Sorğuya ' WHERE id = $1' şərtini əlavə edin."
        ],
        "hint": "Sorğunu 'DELETE FROM users WHERE id = $1' olaraq yeniləyin.",
        "izah": "WHERE şərti olmadan icra edilən DELETE və ya UPDATE əmrləri verilənlər bazasındakı bütün məlumatların dərhal məhvinə gətirib çıxarır. İstehsalatda bu, ən təhlükəli təcrübəsizlik xətalarından biri hesab edilir.",
        "explanation": "WHERE şərti olmadan icra edilən DELETE və ya UPDATE əmrləri verilənlər bazasındakı bütün məlumatların dərhal məhvinə gətirib çıxarır. İstehsalatda bu, ən təhlükəli təcrübəsizlik xətalarından biri hesab edilir."
      }
    ]
  }
];

// Avtomatik olaraq qlobal ERRORS_PANEL_DATA massivinə inteqrasiya
if (typeof ERRORS_PANEL_DATA !== 'undefined' && Array.isArray(ERRORS_PANEL_DATA)) {
    SECTIONS_14_21_BUGS.forEach(function(sec) {
        if (!ERRORS_PANEL_DATA.some(function(s) { return s.sectionId === sec.sectionId; })) {
            ERRORS_PANEL_DATA.push(sec);
        }
    });
}

if (typeof window !== 'undefined') {
    window.SECTIONS_14_21_BUGS = SECTIONS_14_21_BUGS;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SECTIONS_14_21_BUGS: SECTIONS_14_21_BUGS };
}
