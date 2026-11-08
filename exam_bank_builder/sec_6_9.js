/**
 * JSÖyrən - İmtahan Mərkəzi Sual Bankı (Mərhələ 2: Bölmə 6 - 9)
 * Cəmi: 60 Sual (Hər bölmə üzrə 15 sual: 3 ASAN, 4 ORTA-ASAN, 3 ORTA-ÇƏTİN, 4 ÇƏTİN, 1 EKSPERT)
 */

const SEC_6_9_QUESTIONS = [
  // ==========================================
  // BÖLMƏ 6: Massivlər (Arrays) və Əsas Metodlar (15 sual)
  // ==========================================
  {
    id: "exam-sec6-01",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "push() və pop() ilə Yığın (Stack) Əməliyyatları",
    serif: "<code>yiginEmeliyyati()</code> funksiyasını təyin edin. Boş <code>const yigin = [];</code> yaradın, ardıcıl olaraq <code>10</code> və <code>20</code> əlavə edin (<code>push</code>), sonra sonuncu elementi çıxarın (<code>pop</code>) və yekun massiv uzunluğu ilə qalan elementi konsola <code>Qalan: [element] | Uzunluq: [len]</code> kimi çıxarın.",
    gozlenilenCixis: "Qalan: 10 | Uzunluq: 1",
    starterCode: "function yiginEmeliyyati() {\n  // Kodunuzu buraya yazın\n}\n\nyiginEmeliyyati();",
    solutionCode: "function yiginEmeliyyati() {\n  const yigin = [];\n  yigin.push(10);\n  yigin.push(20);\n  yigin.pop();\n  console.log(`Qalan: ${yigin[0]} | Uzunluq: ${yigin.length}`);\n}\n\nyiginEmeliyyati();",
    ipuclari: [
      "İpucu 1: push() massivin sonuna element əlavə edir, pop() isə son elementi silir.",
      "İpucu 2: 20 silindikdən sonra massivdə yalnız 10 qalır.",
      "İpucu 3: Qalan elementi və massiv.length dəyərini çap edin."
    ],
    teslimIzahi: "push() və pop() metodları LIFO (Last-In, First-Out - son daxil olan ilk çıxar) yığın strukturunun JavaScript-də birbaşa icrasını təmin edir."
  },
  {
    id: "exam-sec6-02",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "shift() və unshift() ilə Növbə (Queue) İdarəsi",
    serif: "<code>novbeEmeliyyati()</code> funksiyasını yazın. <code>const novbe = [\"Murad\"];</code> massivinə <code>unshift</code> ilə önə <code>\"Aysel\"</code> əlavə edin, sonra <code>shift</code> ilə ilk elementi çıxarın və konsola <code>Növbədə qalan: [element]</code> çap edin.",
    gozlenilenCixis: "Növbədə qalan: Murad",
    starterCode: "function novbeEmeliyyati() {\n  // Kodunuzu buraya yazın\n}\n\nnovbeEmeliyyati();",
    solutionCode: "function novbeEmeliyyati() {\n  const novbe = [\"Murad\"];\n  novbe.unshift(\"Aysel\");\n  novbe.shift();\n  console.log(`Növbədə qalan: ${novbe[0]}`);\n}\n\nnovbeEmeliyyati();",
    ipuclari: [
      "İpucu 1: unshift() massivin əvvəlinə element əlavə edir, shift() isə ilk elementi silir.",
      "İpucu 2: Əvvələ Aysel əlavə olunur, sonra shift ilə yenə Aysel çıxarılır.",
      "İpucu 3: Geriyə Murad qalır."
    ],
    teslimIzahi: "shift() və unshift() massivin başlanğıc indeksini manipulyasiya edir və FIFO (First-In, First-Out) növbə prinsiplərində istifadə olunur."
  },
  {
    id: "exam-sec6-03",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "join() ilə Massiv Elementlərinin Birləşdirilməsi",
    serif: "<code>sozleriBirlesdir(sozler)</code> funksiyasını yazın. <code>join(\" - \")</code> metodundan istifadə edərək massivdəki sözləri aralarında tire ilə birləşdirin və konsola çıxarın. Funksiyanı <code>[\"Bakı\", \"Gəncə\", \"Şuşa\"]</code> ilə çağırın.",
    gozlenilenCixis: "Bakı - Gəncə - Şuşa",
    starterCode: "function sozleriBirlesdir(sozler) {\n  // Kodunuzu buraya yazın\n}\n\nsozleriBirlesdir([\"Bakı\", \"Gəncə\", \"Şuşa\"]);",
    solutionCode: "function sozleriBirlesdir(sozler) {\n  console.log(sozler.join(\" - \"));\n}\n\nsozleriBirlesdir([\"Bakı\", \"Gəncə\", \"Şuşa\"]);",
    ipuclari: [
      "İpucu 1: join(ayırıcı) metodu bütün massiv elementlərini tək bir sətirə çevirir.",
      "İpucu 2: Ayırıcı olaraq \" - \" arqumentini ötürün.",
      "İpucu 3: Nəticəni birbaşa console.log ilə çap edin."
    ],
    teslimIzahi: "join() metodu massivin elementlərini verilmiş ayrıcı simvol vasitəsilə birləşdirərək sətir (string) formatlı çıxış yaradır."
  },
  {
    id: "exam-sec6-04",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "includes() və indexOf() ilə Axtarış",
    serif: "<code>mehsulAxtar(siyahi, axtarilan)</code> funksiyasını tərtib edin. Əgər <code>siyahi.includes(axtarilan)</code> doğrudursa konsola <code>Tapıldı (İndeks: [idx])</code>, əks halda <code>Tapılmadı</code> çıxarın. Funksiyanı <code>[\"Alma\", \"Armud\", \"Heyva\"], \"Armud\"</code> ilə çağırın.",
    gozlenilenCixis: "Tapıldı (İndeks: 1)",
    starterCode: "function mehsulAxtar(siyahi, axtarilan) {\n  // Kodunuzu buraya yazın\n}\n\nmehsulAxtar([\"Alma\", \"Armud\", \"Heyva\"], \"Armud\");",
    solutionCode: "function mehsulAxtar(siyahi, axtarilan) {\n  if (siyahi.includes(axtarilan)) {\n    const idx = siyahi.indexOf(axtarilan);\n    console.log(`Tapıldı (İndeks: ${idx})`);\n  } else {\n    console.log(\"Tapılmadı\");\n  }\n}\n\nmehsulAxtar([\"Alma\", \"Armud\", \"Heyva\"], \"Armud\");",
    ipuclari: [
      "İpucu 1: includes() elementin massivdə mövcudluğunu (boolean) yoxlayır.",
      "İpucu 2: indexOf() həmin elementin rast gəlindiyi ilk indeksi qaytarır (Armud üçün 1).",
      "İpucu 3: Nəticəni 'Tapıldı (İndeks: 1)' olaraq formatlayın."
    ],
    teslimIzahi: "includes() mövcudluq yoxlaması, indexOf() isə dəqiq indeks təyini üçün xətti axtarış O(N) reallaşdırır."
  },
  {
    id: "exam-sec6-05",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "slice() ilə Massivdən Alt Hissənin Kəsilməsi",
    serif: "<code>altKolleksiya(massiv, start, end)</code> funksiyasını yazın. <code>slice(start, end)</code> metodundan istifadə edərək kəsilmiş hissəni konsola <code>Kəsilmiş: [elementlər]</code> formatında çıxarın. Orijinal massivin dəyişməz qaldığını nümayiş etdirin. Funksiyanı <code>[10, 20, 30, 40, 50], 1, 4</code> ilə çağırın.",
    gozlenilenCixis: "Kəsilmiş: 20, 30, 40",
    starterCode: "function altKolleksiya(massiv, start, end) {\n  // Kodunuzu buraya yazın\n}\n\naltKolleksiya([10, 20, 30, 40, 50], 1, 4);",
    solutionCode: "function altKolleksiya(massiv, start, end) {\n  const kesilmis = massiv.slice(start, end);\n  console.log(`Kəsilmiş: ${kesilmis.join(\", \")}`);\n}\n\naltKolleksiya([10, 20, 30, 40, 50], 1, 4);",
    ipuclari: [
      "İpucu 1: slice(start, end) başlanğıc indeksini daxil edir, sonuncu indeksi isə daxil etmir.",
      "İpucu 2: 1-ci indeksdən 4-cü indeksə qədər (20, 30, 40) elementləri götürülür.",
      "İpucu 3: slice orijinal massivi dəyişdirmir, dayaz surət qaytarır."
    ],
    teslimIzahi: "slice() qeyri-mutasion (immutable) metoddur və orijinal massivə toxunmadan göstərilən aralığı yeni massiv kimi qaytarır."
  },
  {
    id: "exam-sec6-06",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "concat() ilə Massivlərin Birləşdirilməsi",
    serif: "<code>massivleriBirlesdir(m1, m2)</code> funksiyasını təyin edin. <code>concat()</code> metodundan istifadə edərək iki massivi birləşdirin və konsola <code>Birləşmiş: [massiv]</code> çap edin. Funksiyanı <code>[1, 2], [3, 4]</code> ilə çağırın.",
    gozlenilenCixis: "Birləşmiş: 1, 2, 3, 4",
    starterCode: "function massivleriBirlesdir(m1, m2) {\n  // Kodunuzu buraya yazın\n}\n\nmassivleriBirlesdir([1, 2], [3, 4]);",
    solutionCode: "function massivleriBirlesdir(m1, m2) {\n  const netice = m1.concat(m2);\n  console.log(`Birləşmiş: ${netice.join(\", \")}`);\n}\n\nmassivleriBirlesdir([1, 2], [3, 4]);",
    ipuclari: [
      "İpucu 1: m1.concat(m2) iki massivi ardıcıl birləşdirərək yeni massiv yaradır.",
      "İpucu 2: Elementləri join(\", \") ilə birləşdirib konsola çıxarın.",
      "İpucu 3: Nəticə 'Birləşmiş: 1, 2, 3, 4' olacaq."
    ],
    teslimIzahi: "concat() metodu bir və ya bir neçə massivi cari massivlə birləşdirərək yeni massiv nüsxəsi qaytarır."
  },
  {
    id: "exam-sec6-07",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "reverse() ilə Yerində Tərsinə Çevirmə",
    serif: "<code>massiviTersine(massiv)</code> funksiyasını yazın. <code>reverse()</code> metodunu tətbiq edərək massivi yerində çevirin və konsola <code>Çevrildi: [massiv]</code> çıxarın. Funksiyanı <code>[\"A\", \"B\", \"C\"]</code> ilə çağırın.",
    gozlenilenCixis: "Çevrildi: C, B, A",
    starterCode: "function massiviTersine(massiv) {\n  // Kodunuzu buraya yazın\n}\n\nmassiviTersine([\"A\", \"B\", \"C\"]);",
    solutionCode: "function massiviTersine(massiv) {\n  massiv.reverse();\n  console.log(`Çevrildi: ${massiv.join(\", \")}`);\n}\n\nmassiviTersine([\"A\", \"B\", \"C\"]);",
    ipuclari: [
      "İpucu 1: reverse() metodu orijinal massivi yerində (mutably) tərsinə çevirir.",
      "İpucu 2: A, B, C sırası C, B, A olaraq dəyişəcək.",
      "İpucu 3: Formatı join(\", \") ilə qurun."
    ],
    teslimIzahi: "reverse() mutasion metoddur, yəni yeni massiv yaratmır, birbaşa ötürülən massivin daxili yaddaş indekslərini yerində dəyişir."
  },
  {
    id: "exam-sec6-08",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "splice() ilə Element Silmə və Əvəzetmə",
    serif: "<code>elementiYenile(massiv, index, silinenSay, yeniElement)</code> funksiyasını tərtib edin. <code>splice()</code> metodu ilə göstərilən indeksdən elementi silib yenisini əlavə edin. Konsola <code>Yenilənmiş: [massiv]</code> çıxarın. Funksiyanı <code>[\"alma\", \"armud\", \"heyva\"], 1, 1, \"banan\"</code> ilə çağırın.",
    gozlenilenCixis: "Yenilənmiş: alma, banan, heyva",
    starterCode: "function elementiYenile(massiv, index, silinenSay, yeniElement) {\n  // Kodunuzu buraya yazın\n}\n\nelementiYenile([\"alma\", \"armud\", \"heyva\"], 1, 1, \"banan\");",
    solutionCode: "function elementiYenile(massiv, index, silinenSay, yeniElement) {\n  massiv.splice(index, silinenSay, yeniElement);\n  console.log(`Yenilənmiş: ${massiv.join(\", \")}`);\n}\n\nelementiYenile([\"alma\", \"armud\", \"heyva\"], 1, 1, \"banan\");",
    ipuclari: [
      "İpucu 1: splice(start, deleteCount, ...items) massivin ortasından element silmək və əlavə etmək üçün ən güclü metoddur.",
      "İpucu 2: 1-ci indeksdəki 'armud' silinir və yerinə 'banan' daxil edilir.",
      "İpucu 3: Nəticə: alma, banan, heyva."
    ],
    teslimIzahi: "splice() metodu massivin strukturunu yerində dəyişdirərək eyni anda həm silmə, həm də daxiletmə əməliyyatını icra edir."
  },
  {
    id: "exam-sec6-09",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Massivdəki Unikal Elementlərin Tapılması",
    serif: "<code>unikalElementler(massiv)</code> funksiyasını yazın. Massivdəki təkrarlanan elementləri təmizləyərək yalnız unikal dəyərləri saxlayan yeni massiv qurun və konsola <code>Unikal: [siyahı]</code> kimi çıxarın. Funksiyanı <code>[1, 2, 2, 3, 4, 4, 5]</code> ilə çağırın.",
    gozlenilenCixis: "Unikal: 1, 2, 3, 4, 5",
    starterCode: "function unikalElementler(massiv) {\n  // Kodunuzu buraya yazın\n}\n\nunikalElementler([1, 2, 2, 3, 4, 4, 5]);",
    solutionCode: "function unikalElementler(massiv) {\n  const unikal = [];\n  for (let i = 0; i < massiv.length; i++) {\n    if (!unikal.includes(massiv[i])) {\n      unikal.push(massiv[i]);\n    }\n  }\n  console.log(`Unikal: ${unikal.join(\", \")}`);\n}\n\nunikalElementler([1, 2, 2, 3, 4, 4, 5]);",
    ipuclari: [
      "İpucu 1: Boş 'unikal' massivi yaradın və elementi yalnız '!unikal.includes(item)' olduqda push edin.",
      "İpucu 2: Təkrarlanan 2 və 4 ədədləri növbəti dəfə əlavə edilməyəcək.",
      "İpucu 3: Nəticəni join(\", \") ilə çap edin."
    ],
    teslimIzahi: "includes() yoxlaması vasitəsilə deduplikasiya (təkrarların təmizlənməsi) massivlərin təmizlənməsində geniş istifadə olunan klassik yanaşmadır."
  },
  {
    id: "exam-sec6-10",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Massivin Hissələrə (Chunking) Bölünməsi",
    serif: "<code>hisselereBol(massiv, olcu)</code> funksiyasını yazın. Massivi göstərilən <code>olcu</code> sayda alt-massivlərə bölün və hər alt-massivi konsola <code>Hissə: [elementlər]</code> formatında çıxarın. Funksiyanı <code>[1, 2, 3, 4, 5], 2</code> ilə çağırın.",
    gozlenilenCixis: "Hissə: 1, 2\nHissə: 3, 4\nHissə: 5",
    starterCode: "function hisselereBol(massiv, olcu) {\n  // Kodunuzu buraya yazın\n}\n\nhisselereBol([1, 2, 3, 4, 5], 2);",
    solutionCode: "function hisselereBol(massiv, olcu) {\n  for (let i = 0; i < massiv.length; i += olcu) {\n    const hisse = massiv.slice(i, i + olcu);\n    console.log(`Hissə: ${hisse.join(\", \")}`);\n  }\n}\n\nhisselereBol([1, 2, 3, 4, 5], 2);",
    ipuclari: [
      "İpucu 1: for dövrünün addımını 'i += olcu' şəklində artırın.",
      "İpucu 2: slice(i, i + olcu) metodu ilə hər addımda 2 element kəsin.",
      "İpucu 3: Qalan tək 5 elementi sonuncu hissəyə düşəcək."
    ],
    teslimIzahi: "Chunking alqoritmi böyük məlumat dəstlərini səhifələmə (pagination) və ya paketləmə (batch processing) üçün kiçik hissələrə ayırır."
  },
  {
    id: "exam-sec6-11",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "İki Massivin Kəsişməsinin (Intersection) Tapılması",
    serif: "<code>kesismeTap(m1, m2)</code> funksiyasını təyin edin. Hər iki massivdə eyni vaxtda mövcud olan unikal ortaq elementləri tapıb konsola <code>Kəsişmə: [elementlər]</code> kimi çap edin. Funksiyanı <code>[1, 2, 3, 4], [3, 4, 5, 6]</code> ilə çağırın.",
    gozlenilenCixis: "Kəsişmə: 3, 4",
    starterCode: "function kesismeTap(m1, m2) {\n  // Kodunuzu buraya yazın\n}\n\nkesismeTap([1, 2, 3, 4], [3, 4, 5, 6]);",
    solutionCode: "function kesismeTap(m1, m2) {\n  const kesisme = [];\n  for (let i = 0; i < m1.length; i++) {\n    if (m2.includes(m1[i]) && !kesisme.includes(m1[i])) {\n      kesisme.push(m1[i]);\n    }\n  }\n  console.log(`Kəsişmə: ${kesisme.join(\", \")}`);\n}\n\nkesismeTap([1, 2, 3, 4], [3, 4, 5, 6]);",
    ipuclari: [
      "İpucu 1: m1 elementləri içərisindən m2.includes() şərtini ödəyənləri seçin.",
      "İpucu 2: Ortaq olanlar 3 və 4 ədədləridir.",
      "İpucu 3: Nəticəni join(\", \") ilə formatlayın."
    ],
    teslimIzahi: "Çoxluqların kəsişməsi (Set Intersection) müqayisə və ortaq icazələrin təyini kimi verilənlər bazası əməliyyatlarında tətbiq olunur."
  },
  {
    id: "exam-sec6-12",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Massivin N Mövqe Sağa Fırladılması (Rotation)",
    serif: "<code>massiviFirlat(massiv, k)</code> funksiyasını qurun. Massivin sonuncu elementini götürüb əvvələ qoymaqla bu əməliyyatı <code>k</code> dəfə icra edin (sağa fırladın). Konsola <code>Fırladılmış: [elementlər]</code> çıxarın. Funksiyanı <code>[1, 2, 3, 4, 5], 2</code> ilə çağırın.",
    gozlenilenCixis: "Fırladılmış: 4, 5, 1, 2, 3",
    starterCode: "function massiviFirlat(massiv, k) {\n  // Kodunuzu buraya yazın\n}\n\nmassiviFirlat([1, 2, 3, 4, 5], 2);",
    solutionCode: "function massiviFirlat(massiv, k) {\n  const kopya = [...massiv];\n  for (let i = 0; i < k; i++) {\n    const sonuncu = kopya.pop();\n    kopya.unshift(sonuncu);\n  }\n  console.log(`Fırladılmış: ${kopya.join(\", \")}`);\n}\n\nmassiviFirlat([1, 2, 3, 4, 5], 2);",
    ipuclari: [
      "İpucu 1: pop() ilə sonuncu elementi çıxarıb unshift() ilə başa əlavə edin.",
      "İpucu 2: Bu addımı k = 2 dəfə təkrarlayın.",
      "İpucu 3: 5 başa keçir, sonra 4 başa keçir: 4, 5, 1, 2, 3 alınır."
    ],
    teslimIzahi: "pop() və unshift() kombinasiyası dövri fırlanma (circular rotation) əməliyyatını asanlıqla həll edir."
  },
  {
    id: "exam-sec6-13",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "İç-içə Massivlərin Düzləşdirilməsi (Flattening)",
    serif: "<code>duzlesdir(nestedMassiv)</code> funksiyasını yazın. Hazır flat() metodundan İSTİFADƏ ETMƏDƏN, iç-içə yerləşmiş 1 səviyyəli massivləri tək bir düz massivə çevirin və konsola <code>Düz: [elementlər]</code> çıxarın. Funksiyanı <code>[[1, 2], [3, 4], [5]]</code> ilə çağırın.",
    gozlenilenCixis: "Düz: 1, 2, 3, 4, 5",
    starterCode: "function duzlesdir(nestedMassiv) {\n  // Kodunuzu buraya yazın\n}\n\nduzlesdir([[1, 2], [3, 4], [5]]);",
    solutionCode: "function duzlesdir(nestedMassiv) {\n  const netice = [];\n  for (let i = 0; i < nestedMassiv.length; i++) {\n    const element = nestedMassiv[i];\n    if (Array.isArray(element)) {\n      for (let j = 0; j < element.length; j++) {\n        netice.push(element[j]);\n      }\n    } else {\n      netice.push(element);\n    }\n  }\n  console.log(`Düz: ${netice.join(\", \")}`);\n}\n\nduzlesdir([[1, 2], [3, 4], [5]]);",
    ipuclari: [
      "İpucu 1: Array.isArray(element) ilə cari elementin massiv olub-olmadığını yoxlayın.",
      "İpucu 2: Massivdirsə daxili dövrlə bütün alt-elementləri tək-tək 'netice' massivinə push edin.",
      "İpucu 3: Nəticə: 1, 2, 3, 4, 5."
    ],
    teslimIzahi: "Array flattening mürəkkəb iyerarxik məlumat strukturlarını birölçülü xətti ardıcıllığa çevirmək üçün vacib transformasiyadır."
  },
  {
    id: "exam-sec6-14",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "splice ilə Prioritet Növbəsi Simulyasiyası",
    serif: "<code>prioritetElaveEt(novbe, musteri, prioritetIndeksi)</code> funksiyasını təyin edin. Növbədəki şəxslərin siyahısına <code>splice</code> vasitəsilə VIP müştərini göstərilən prioritet indeksinə əlavə edin və konsola <code>Yenilənmiş növbə: [siyahı]</code> çıxarın. Funksiyanı <code>[\"Murad\", \"Rəşad\", \"Kənan\"], \"Aysel (VIP)\", 1</code> ilə çağırın.",
    gozlenilenCixis: "Yenilənmiş növbə: Murad, Aysel (VIP), Rəşad, Kənan",
    starterCode: "function prioritetElaveEt(novbe, musteri, prioritetIndeksi) {\n  // Kodunuzu buraya yazın\n}\n\nprioritetElaveEt([\"Murad\", \"Rəşad\", \"Kənan\"], \"Aysel (VIP)\", 1);",
    solutionCode: "function prioritetElaveEt(novbe, musteri, prioritetIndeksi) {\n  novbe.splice(prioritetIndeksi, 0, musteri);\n  console.log(`Yenilənmiş növbə: ${novbe.join(\", \")}`);\n}\n\nprioritetElaveEt([\"Murad\", \"Rəşad\", \"Kənan\"], \"Aysel (VIP)\", 1);",
    ipuclari: [
      "İpucu 1: splice metodunda ikinci parametr olaraq 0 (silinməyəcək) verildikdə element araya daxil edilir.",
      "İpucu 2: 1-ci indeksə Aysel daxil edilir və digər elementlər bir addım sağa sürüşür.",
      "İpucu 3: Formatı join(\", \") ilə tamamlayın."
    ],
    teslimIzahi: "splice(index, 0, item) mövcud elementləri itirmədən göstərilən mövqeyə yeni element yerləşdirməyə imkan verir."
  },
  {
    id: "exam-sec6-15",
    bolmeId: 6,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Fərdi Massiv Əməliyyatları Kitabxanası",
    serif: "<code>XususiMassiv</code> konstruktoru yaradın. Bu obyekt daxildə massiv saxlayır və üç metoda malikdir: <code>elaveEt(el)</code> (sona əlavə edir), <code>unikalEt()</code> (təkrarları təmizləyir) və <code>capEt()</code> (konsola <code>[MAS] [elementlər]</code> çıxarır). Bir obyekt yaradıb ardıcıl olaraq 10, 20, 10, 30 əlavə edin, unikal edin və çap edin.",
    gozlenilenCixis: "[MAS] 10, 20, 30",
    starterCode: "function XususiMassiv() {\n  // Kodunuzu buraya yazın\n}\n\nconst xm = new XususiMassiv();\nxm.elaveEt(10);\nxm.elaveEt(20);\nxm.elaveEt(10);\nxm.elaveEt(30);\nxm.unikalEt();\nxm.capEt();",
    solutionCode: "function XususiMassiv() {\n  this.items = [];\n  this.elaveEt = function(el) {\n    this.items.push(el);\n  };\n  this.unikalEt = function() {\n    const unikal = [];\n    for (let i = 0; i < this.items.length; i++) {\n      if (!unikal.includes(this.items[i])) {\n        unikal.push(this.items[i]);\n      }\n    }\n    this.items = unikal;\n  };\n  this.capEt = function() {\n    console.log(`[MAS] ${this.items.join(\", \")}`);\n  };\n}\n\nconst xm = new XususiMassiv();\nxm.elaveEt(10);\nxm.elaveEt(20);\nxm.elaveEt(10);\nxm.elaveEt(30);\nxm.unikalEt();\nxm.capEt();",
    ipuclari: [
      "İpucu 1: 'this.items = []' daxili vəziyyətini idarə edin.",
      "İpucu 2: unikalEt() metodu daxili massivi təkrarlardan təmizləyir.",
      "İpucu 3: capEt() metodu [MAS] prefiksi ilə nəticəni konsola yazdırır."
    ],
    teslimIzahi: "Fərdi kolleksiya wrapper-ləri massiv metodlarını vahid obyekt-yönümlü interfeys arxasında kapsullaşdıraraq kodun təkrar istifadəsini artırır."
  },

  // ==========================================
  // BÖLMƏ 7: Funksiyalar və Arrow Funksiyaları (15 sual)
  // ==========================================
  {
    id: "exam-sec7-01",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Function Declaration ilə Salamlaşma",
    serif: "<code>salamla(ad)</code> funksiyasını təyin edin və konsola <code>Salam, [ad]!</code> formatında çıxış verin. Funksiyanı <code>\"Aysel\"</code> ilə çağırın.",
    gozlenilenCixis: "Salam, Aysel!",
    starterCode: "function salamla(ad) {\n  // Kodunuzu buraya yazın\n}\n\nsalamla(\"Aysel\");",
    solutionCode: "function salamla(ad) {\n  console.log(`Salam, ${ad}!`);\n}\n\nsalamla(\"Aysel\");",
    ipuclari: [
      "İpucu 1: Standart 'function ad(parametr) { ... }' sintaksisindən istifadə edin.",
      "İpucu 2: console.log ilə formatlı mətn çıxarın.",
      "İpucu 3: Çıxış 'Salam, Aysel!' olmalıdır."
    ],
    teslimIzahi: "Function Declaration JavaScript-də qaldırılma (hoisting) xüsusiyyətinə malik olan klassik funksiya təyini formasıdır."
  },
  {
    id: "exam-sec7-02",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Arrow Function (Ox Funksiyası) ilə Kvadrat",
    serif: "<code>kvadrat</code> adlı ES6 ox funksiyası (arrow function) yaradın. Funksiya <code>x</code> parametrini qəbul edərək onun kvadratını (<code>x * x</code>) hesablasın və konsola <code>Kvadrat: [netice]</code> çıxarsın. Funksiyanı <code>6</code> ilə çağırın.",
    gozlenilenCixis: "Kvadrat: 36",
    starterCode: "const kvadrat = (x) => {\n  // Kodunuzu buraya yazın\n};\n\nkvadrat(6);",
    solutionCode: "const kvadrat = (x) => {\n  console.log(`Kvadrat: ${x * x}`);\n};\n\nkvadrat(6);",
    ipuclari: [
      "İpucu 1: Ox funksiyası 'const ad = (parametr) => { ... }' sintaksisi ilə yazılır.",
      "İpucu 2: 6 * 6 = 36 hesablanacaq.",
      "İpucu 3: Çıxışı formatlı çap edin."
    ],
    teslimIzahi: "Arrow Functions (ES6) daha qısa sintaksis təmin edir və leksik 'this' bağlamasına malikdir."
  },
  {
    id: "exam-sec7-03",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Standart (Default) Parametrlər",
    serif: "<code>istifadeciYarat(ad, rol = \"qonaq\")</code> funksiyasını təyin edin. Əgər rol verilməzsə susmaya görə <code>\"qonaq\"</code> qəbul edilsin. Konsola <code>Profil: [ad] ([rol])</code> çıxarın. Funksiyanı tək arqumentlə: <code>\"Rəşad\"</code> ilə çağırın.",
    gozlenilenCixis: "Profil: Rəşad (qonaq)",
    starterCode: "function istifadeciYarat(ad, rol = \"qonaq\") {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciYarat(\"Rəşad\");",
    solutionCode: "function istifadeciYarat(ad, rol = \"qonaq\") {\n  console.log(`Profil: ${ad} (${rol})`);\n}\n\nistifadeciYarat(\"Rəşad\");",
    ipuclari: [
      "İpucu 1: Parametr başlığında 'rol = \"qonaq\"' standart parametrdir.",
      "İpucu 2: İkinci arqument ötürülmədikdə rol avtomatik 'qonaq' olur.",
      "İpucu 3: Nəticə: Profil: Rəşad (qonaq)."
    ],
    teslimIzahi: "Default parametrlər (ES6) ötürülməyən və ya undefined olan parametrlərə avtomatik ilkin dəyər təyin edir."
  },
  {
    id: "exam-sec7-04",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Rest Operatoru (...) ilə Qeyri-müəyyən Sayda Arqument",
    serif: "<code>butunCem(...ededler)</code> funksiyasını yazın. Rest operatoru ilə gələn bütün ədədləri toplayın və konsola <code>Toplam Cəm: [cem]</code> çıxarın. Funksiyanı <code>10, 20, 30, 40</code> arqumentləri ilə çağırın.",
    gozlenilenCixis: "Toplam Cəm: 100",
    starterCode: "function butunCem(...ededler) {\n  // Kodunuzu buraya yazın\n}\n\nbutunCem(10, 20, 30, 40);",
    solutionCode: "function butunCem(...ededler) {\n  let cem = 0;\n  for (let i = 0; i < ededler.length; i++) {\n    cem += ededler[i];\n  }\n  console.log(`Toplam Cəm: ${cem}`);\n}\n\nbutunCem(10, 20, 30, 40);",
    ipuclari: [
      "İpucu 1: '...ededler' ötürülən bütün fərdi arqumentləri vahid massivə toplayır.",
      "İpucu 2: for dövrü ilə massivi cəmləyin (10+20+30+40 = 100).",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    teslimIzahi: "Rest parametri (...) funksiyaya ötürülən arqumentləri əsl JavaScript massivinə yığaraq köhnəlmiş arguments obyektini əvəzləyir."
  },
  {
    id: "exam-sec7-05",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Funksiyadan Funksiya Qaytarılması (Higher-Order Function)",
    serif: "<code>vurmaGeneratoru(vurulan)</code> funksiyasını yazın. Bu funksiya daxildə başqa bir funksiya qaytarsın: <code>return function(eded) { return eded * vurulan; }</code>. Əvvəlcə <code>const ikiyeVur = vurmaGeneratoru(2);</code> yaradın, sonra <code>ikiyeVur(5)</code> nəticəsini konsola <code>Nəticə: [qiymət]</code> olaraq çıxarın.",
    gozlenilenCixis: "Nəticə: 10",
    starterCode: "function vurmaGeneratoru(vurulan) {\n  // Kodunuzu buraya yazın\n}\n\nconst ikiyeVur = vurmaGeneratoru(2);\nconsole.log(`Nəticə: ${ikiyeVur(5)}`);",
    solutionCode: "function vurmaGeneratoru(vurulan) {\n  return function(eded) {\n    return eded * vurulan;\n  };\n}\n\nconst ikiyeVur = vurmaGeneratoru(2);\nconsole.log(`Nəticə: ${ikiyeVur(5)}`);",
    ipuclari: [
      "İpucu 1: Funksiya daxilində anonim funksiya qaytarın.",
      "İpucu 2: Daxili funksiya xarici 'vurulan' parametrini xatırlayır (Closure əsası).",
      "İpucu 3: ikiyeVur(5) çağırışı 5 * 2 = 10 qaytarır."
    ],
    teslimIzahi: "Funksiyanı arqument kimi qəbul edən və ya nəticə kimi funksiya qaytaran funksiyalara Yüksək Dərəcəli Funksiyalar (Higher-Order Functions) deyilir."
  },
  {
    id: "exam-sec7-06",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Qlobal vs Lokal Görünüş Sahəsi (Scope)",
    serif: "<code>scopeTesti()</code> funksiyasını yazın. Qlobal sahədə <code>let mesaj = \"Qlobal\";</code> elan edin. Funksiya daxilində isə eyni adlı lokal <code>let mesaj = \"Lokal\";</code> yaradın və konsola <code>Funksiya içi: [mesaj]</code> çap edin. Funksiyadan kənarda isə <code>Qlobal: [mesaj]</code> çap edin.",
    gozlenilenCixis: "Funksiya içi: Lokal\nQlobal: Qlobal",
    starterCode: "let mesaj = \"Qlobal\";\n\nfunction scopeTesti() {\n  // Kodunuzu buraya yazın\n}\n\nscopeTesti();\nconsole.log(`Qlobal: ${mesaj}`);",
    solutionCode: "let mesaj = \"Qlobal\";\n\nfunction scopeTesti() {\n  let mesaj = \"Lokal\";\n  console.log(`Funksiya içi: ${mesaj}`);\n}\n\nscopeTesti();\nconsole.log(`Qlobal: ${mesaj}`);",
    ipuclari: [
      "İpucu 1: Funksiya daxilində let ilə eyni adlı dəyişən elan edildikdə qlobal dəyişən kölgələnir (shadowing).",
      "İpucu 2: Lokal dəyişən yalnız funksiya daxilində keçərlidir.",
      "İpucu 3: Kənarda qlobal 'Qlobal' dəyəri toxunulmaz qalır."
    ],
    teslimIzahi: "Scope (görünüş sahəsi) dəyişənlərin əlçatanlığını təyin edir. Funksiya daxilində elan edilən dəyişənlər lokal sahəyə malikdir və xarici mühitə sızmır."
  },
  {
    id: "exam-sec7-07",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "İmplisit Return ilə Ox Funksiyası",
    serif: "Fiqurlu mötərizəsiz və 'return' sözü olmadan tək sətirlik ox funksiyası təyin edin: <code>const cevir = metn => metn.toUpperCase();</code>. Funksiyanı <code>\"javascript\"</code> arqumenti ilə çağıraraq nəticəni konsola <code>Böyük: [netice]</code> çıxarın.",
    gozlenilenCixis: "Böyük: JAVASCRIPT",
    starterCode: "const cevir = metn => metn.toUpperCase();\n\nfunction testEt() {\n  // Kodunuzu buraya yazın\n}\n\ntestEt();",
    solutionCode: "const cevir = metn => metn.toUpperCase();\n\nfunction testEt() {\n  console.log(`Böyük: ${cevir(\"javascript\")}`);\n}\n\ntestEt();",
    ipuclari: [
      "İpucu 1: Tək sətirlik ox funksiyasında fiqurlu mötərizə olmadıqda ifadənin nəticəsi avtomatik qaytarılır (implicit return).",
      "İpucu 2: cevir(\"javascript\") 'JAVASCRIPT' qaytaracaq.",
      "İpucu 3: Formatlı çap edin."
    ],
    teslimIzahi: "İmplisit return ox funksiyalarının ən güclü sintaktik üstünlüklərindən biridir və funksional proqramlaşdırma zəncirlərini yığcamlaşdırır."
  },
  {
    id: "exam-sec7-08",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Closure (Qapanma) ilə Sayğac Generatoru",
    serif: "<code>saygacYarat()</code> funksiyasını yazın. Daxildə <code>let say = 0;</code> dəyişəni saxlasın və hər çağırışda onu 1 artırıb qaytaran daxili funksiya qaytarsın. <code>const saygac = saygacYarat();</code> yaradın və ardıcıl 3 çağırışın nəticəsini konsola <code>1, 2, 3</code> kimi çap edin.",
    gozlenilenCixis: "1\n2\n3",
    starterCode: "function saygacYarat() {\n  // Kodunuzu buraya yazın\n}\n\nconst saygac = saygacYarat();\nconsole.log(saygac());\nconsole.log(saygac());\nconsole.log(saygac());",
    solutionCode: "function saygacYarat() {\n  let say = 0;\n  return function() {\n    say++;\n    return say;\n  };\n}\n\nconst saygac = saygacYarat();\nconsole.log(saygac());\nconsole.log(saygac());\nconsole.log(saygac());",
    ipuclari: [
      "İpucu 1: Xarici funksiya bitdikdən sonra belə daxili funksiya 'say' dəyişənini yaddaşda saxlayır (Closure).",
      "İpucu 2: Hər çağırışda say++ icra olunur və yenilənmiş qiymət qaytarılır.",
      "İpucu 3: Ardıcıl 1, 2, 3 çıxacaq."
    ],
    teslimIzahi: "Closure funksiyanın öz leksik mühitini (lexical environment) və xarici dəyişənlərini yaddaşda qoruyub saxlaması mexanizmidir."
  },
  {
    id: "exam-sec7-09",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Callback Funksiyasının İcrası",
    serif: "<code>emeliyyatEt(a, b, callback)</code> funksiyasını təyin edin. Funksiya <code>a</code> və <code>b</code>-ni <code>callback(a, b)</code> funksiyasına ötürsün və nəticəni konsola <code>Nəticə: [netice]</code> çıxarsın. Funksiyanı <code>15, 5, (x, y) => x - y</code> ilə çağırın.",
    gozlenilenCixis: "Nəticə: 10",
    starterCode: "function emeliyyatEt(a, b, callback) {\n  // Kodunuzu buraya yazın\n}\n\nemeliyyatEt(15, 5, (x, y) => x - y);",
    solutionCode: "function emeliyyatEt(a, b, callback) {\n  const netice = callback(a, b);\n  console.log(`Nəticə: ${netice}`);\n}\n\nemeliyyatEt(15, 5, (x, y) => x - y);",
    ipuclari: [
      "İpucu 1: Callback başqa bir funksiyaya arqument kimi ötürülən funksiyadır.",
      "İpucu 2: callback(15, 5) icra olunduqda 15 - 5 = 10 hesablayır.",
      "İpucu 3: Formatlı çap edin."
    ],
    teslimIzahi: "Callback mexanizmi alqoritmləri parametrik etməyə imkan verir: əsas funksiya icra axınını təşkil edir, hesablama məntiqini isə ötürülən callback həyata keçirir."
  },
  {
    id: "exam-sec7-10",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Funksiya Kompozisiyası (Function Composition)",
    serif: "İki funksiya təyin edin: <code>ikiqat(x) = x * 2</code> və <code>birElaveEt(x) = x + 1</code>. Bu iki funksiyanı birləşdirən <code>kompozisiya(x)</code> funksiyası yazın ki, əvvəlcə ədədə 1 əlavə etsin, sonra nəticəni ikiqat artırsın (<code>ikiqat(birElaveEt(x))</code>). Konsola <code>Kompozisiya: [netice]</code> çıxarın. Funksiyanı <code>4</code> ilə çağırın.",
    gozlenilenCixis: "Kompozisiya: 10",
    starterCode: "const ikiqat = x => x * 2;\nconst birElaveEt = x => x + 1;\n\nfunction kompozisiya(x) {\n  // Kodunuzu buraya yazın\n}\n\nkompozisiya(4);",
    solutionCode: "const ikiqat = x => x * 2;\nconst birElaveEt = x => x + 1;\n\nfunction kompozisiya(x) {\n  const netice = ikiqat(birElaveEt(x));\n  console.log(`Kompozisiya: ${netice}`);\n}\n\nkompozisiya(4);",
    ipuclari: [
      "İpucu 1: Əvvəlcə daxili birElaveEt(4) işləyir: 4 + 1 = 5.",
      "İpucu 2: Sonra xarici ikiqat(5) işləyir: 5 * 2 = 10.",
      "İpucu 3: Formatı dəqiq çıxarın."
    ],
    teslimIzahi: "Funksiya kompozisiyası sadə funksiyaları ardıcıl zəncirvari birləşdirərək daha mürəkkəb transformasiyalar qurmağa imkan verən riyazi və funksional proqramlaşdırma üsuludur."
  },
  {
    id: "exam-sec7-11",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Karrinqləmə (Currying) Texnikası",
    serif: "Üç ədədi toplayan <code>topla(a)(b)(c)</code> karrinqlənmiş funksiyasını tərtib edin. Konsola <code>Karrinq Cəm: [netice]</code> çıxarın. Funksiyanı <code>topla(5)(10)(15)</code> şəklində çağırın.",
    gozlenilenCixis: "Karrinq Cəm: 30",
    starterCode: "function topla(a) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(`Karrinq Cəm: ${topla(5)(10)(15)}`);",
    solutionCode: "function topla(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\n\nconsole.log(`Karrinq Cəm: ${topla(5)(10)(15)}`);",
    ipuclari: [
      "İpucu 1: Hər bir funksiya tək bir arqument qəbul edir və növbəti funksiyanı qaytarır.",
      "İpucu 2: Ən daxili funksiya bütün a, b, c dəyişənlərini toplayır (5 + 10 + 15 = 30).",
      "İpucu 3: topla(5)(10)(15) zəncirvari sintaksisini tamamlayın."
    ],
    teslimIzahi: "Currying çoxarqumentli funksiyanı tək arqumentli funksiyalar zəncirinə çevirən funksional proqramlaşdırma paradiqmasıdır."
  },
  {
    id: "exam-sec7-12",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Memoization (Nəticə Keşləmə) Tətbiqi",
    serif: "<code>memoizeKvadrat()</code> funksiyasını yazın. Daxildə <code>keş = {}</code> saxlasın. Əgər ötürülən ədəd keşdə varsa konsola <code>[KEŞDƏN] [n]: [kvadrat]</code>, yoxdursa hesablayıb keşə yazaraq <code>[HESABLANDI] [n]: [kvadrat]</code> çıxarsın. Funksiyanı eyni <code>5</code> arqumenti ilə ardıcıl iki dəfə çağırın.",
    gozlenilenCixis: "[HESABLANDI] 5: 25\n[KEŞDƏN] 5: 25",
    starterCode: "function memoizeKvadrat() {\n  // Kodunuzu buraya yazın\n}\n\nconst hesabla = memoizeKvadrat();\nhesabla(5);\nhesabla(5);",
    solutionCode: "function memoizeKvadrat() {\n  const kes = {};\n  return function(n) {\n    if (kes[n] !== undefined) {\n      console.log(`[KEŞDƏN] ${n}: ${kes[n]}`);\n    } else {\n      const res = n * n;\n      kes[n] = res;\n      console.log(`[HESABLANDI] ${n}: ${res}`);\n    }\n  };\n}\n\nconst hesabla = memoizeKvadrat();\nhesabla(5);\nhesabla(5);",
    ipuclari: [
      "İpucu 1: Closure daxilində 'kes' obyekti saxlayın.",
      "İpucu 2: Birinci çağırışda 'kes[5]' olmadığı üçün hesablanır və qeyd olunur.",
      "İpucu 3: İkinci çağırışda birbaşa keşdən oxunur."
    ],
    teslimIzahi: "Memoization ağır hesablamaların nəticələrini giriş parametrlərinə görə keşləyərək təkrar hesablamaların qarşısını alan optimallaşdırma üsuludur."
  },
  {
    id: "exam-sec7-13",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Rekursiv Faktorial Hesablayıcı",
    serif: "<code>faktorial(n)</code> rekursiv funksiyasını təyin edin. Baza halı: <code>n <= 1</code> olduqda 1 qaytarır. Digər hallarda <code>n * faktorial(n - 1)</code> qaytarır. Konsola <code>[n]! = [netice]</code> çıxarın. Funksiyanı <code>5</code> üçün çağırın.",
    gozlenilenCixis: "5! = 120",
    starterCode: "function faktorial(n) {\n  // Kodunuzu buraya yazın\n}\n\nconsole.log(`5! = ${faktorial(5)}`);",
    solutionCode: "function faktorial(n) {\n  if (n <= 1) return 1;\n  return n * faktorial(n - 1);\n}\n\nconsole.log(`5! = ${faktorial(5)}`);",
    ipuclari: [
      "İpucu 1: Baza halı mütləq olmalıdır ki, call stack dolub xəta verməsin.",
      "İpucu 2: 5 * 4 * 3 * 2 * 1 = 120 hesablanacaq.",
      "İpucu 3: Formatlı çap edin."
    ],
    teslimIzahi: "Rekursiya funksiyanın özünü çağırmasıdır. Baza halı (base condition) rekursiyanın dayanmasını təmin edən ən kritik şərtdir."
  },
  {
    id: "exam-sec7-14",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Partial Application (Arqumentlərin Qismən Tətbiqi)",
    serif: "<code>vergiHesabla(faiz, mebleg)</code> funksiyası üçün <code>partial(fn, sabitFaiz)</code> yaradın. Bu funksiya <code>faiz</code> parametrini 18 olaraq sabitləsin və yalnız <code>mebleg</code> qəbul edən yeni funksiya qaytarsın. <code>const edvHesabla = partial((f, m) => m * (f / 100), 18);</code> çağırışı ilə 500 AZN üçün vergini hesablayıb konsola <code>ƏDV: [vergi] AZN</code> çıxarın.",
    gozlenilenCixis: "ƏDV: 90 AZN",
    starterCode: "function partial(fn, sabitFaiz) {\n  // Kodunuzu buraya yazın\n}\n\nconst edvHesabla = partial((f, m) => m * (f / 100), 18);\nconsole.log(`ƏDV: ${edvHesabla(500)} AZN`);",
    solutionCode: "function partial(fn, sabitFaiz) {\n  return function(mebleg) {\n    return fn(sabitFaiz, mebleg);\n  };\n}\n\nconst edvHesabla = partial((f, m) => m * (f / 100), 18);\nconsole.log(`ƏDV: ${edvHesabla(500)} AZN`);",
    ipuclari: [
      "İpucu 1: partial funksiyası sabit arqumenti daxildə saxlayıb qalan arqumentləri gözləyən yeni funksiya qaytarır.",
      "İpucu 2: 500 * (18 / 100) = 90 AZN hesablanacaq.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    teslimIzahi: "Qismən tətbiqetmə (Partial Application) ümumi məqsədli funksiyaların bəzi parametrlərini fiksasiya edərək daha xüsusi funksiyalar törətməyə imkan verir."
  },
  {
    id: "exam-sec7-15",
    bolmeId: 7,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "İcra Boru Kəməri (Pipe Pipeline) Arxitekturası",
    serif: "İxtiyari sayda funksiyanı soldan sağa ardıcıl icra edən <code>pipe(...funksiyalar)</code> yardımçısını qurun. Üç funksiya təyin edin: <code>topla5 = x => x + 5</code>, <code>vur3 = x => x * 3</code>, <code>cix2 = x => x - 2</code>. <code>const boru = pipe(topla5, vur3, cix2);</code> yaradın və <code>boru(5)</code> nəticəsini konsola <code>Boru Xətti Nəticəsi: [netice]</code> çıxarın.",
    gozlenilenCixis: "Boru Xətti Nəticəsi: 28",
    starterCode: "function pipe(...funksiyalar) {\n  // Kodunuzu buraya yazın\n}\n\nconst topla5 = x => x + 5;\nconst vur3 = x => x * 3;\nconst cix2 = x => x - 2;\n\nconst boru = pipe(topla5, vur3, cix2);\nconsole.log(`Boru Xətti Nəticəsi: ${boru(5)}`);",
    solutionCode: "function pipe(...funksiyalar) {\n  return function(ilkinDeyer) {\n    let deyer = ilkinDeyer;\n    for (let i = 0; i < funksiyalar.length; i++) {\n      deyer = funksiyalar[i](deyer);\n    }\n    return deyer;\n  };\n}\n\nconst topla5 = x => x + 5;\nconst vur3 = x => x * 3;\nconst cix2 = x => x - 2;\n\nconst boru = pipe(topla5, vur3, cix2);\nconsole.log(`Boru Xətti Nəticəsi: ${boru(5)}`);",
    ipuclari: [
      "İpucu 1: pipe funksiyaları soldan sağa icra edir: əvvəlcə topla5 (5+5=10), sonra vur3 (10*3=30), sonra cix2 (30-2=28).",
      "İpucu 2: Dövr və ya reduce vasitəsilə hər funksiyanın çıxışını növbəti funksiyanın girişinə ötürün.",
      "İpucu 3: Nəticə 28 olmalıdır."
    ],
    teslimIzahi: "Pipe arxitekturası funksional proqramlaşdırmada məlumat transformasiyalarını oxunaqlı və bəyanedici (declarative) boru kəmərinə çevirir."
  },

  // ==========================================
  // BÖLMƏ 8: Obyektlər, JSON & Destructuring (15 sual)
  // ==========================================
  {
    id: "exam-sec8-01",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Obyekt Yaradılması və Dot Notation",
    serif: "<code>istifadeciProfili()</code> funksiyasını təyin edin. <code>ad</code> və <code>bal</code> xassələrinə malik obyekt yaradın (ad: 'Murad', bal: 95) və nöqtə (dot notation) ilə oxuyaraq konsola <code>Tələbə: [ad] | Bal: [bal]</code> çıxarın.",
    gozlenilenCixis: "Tələbə: Murad | Bal: 95",
    starterCode: "function istifadeciProfili() {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciProfili();",
    solutionCode: "function istifadeciProfili() {\n  const telebe = { ad: \"Murad\", bal: 95 };\n  console.log(`Tələbə: ${telebe.ad} | Bal: ${telebe.bal}`);\n}\n\nistifadeciProfili();",
    ipuclari: [
      "İpucu 1: Obyekt literal sintaksisi: { açar: dəyər }.",
      "İpucu 2: Xassələri telebe.ad və telebe.bal şəklində oxuyun.",
      "İpucu 3: Formatlı çap edin."
    ],
    teslimIzahi: "Obyektlər əlaqəli məlumatları açar-dəyər (key-value) cütləri şəklində saxlayan mürəkkəb JavaScript məlumat strukturudur."
  },
  {
    id: "exam-sec8-02",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Bracket Notation ilə Dinamik Açar Oxunması",
    serif: "<code>dinamikAcarOxu(obyekt, acarAdi)</code> funksiyasını yazın. Kvadrat mötərizə (<code>obyekt[acarAdi]</code>) sintaksisi ilə dinamik açarın dəyərini oxuyub konsola <code>Açar: [acarAdi] -> [dəyər]</code> çıxarın. Funksiyanı <code>{ status: \"Aktiv\", rol: \"Admin\" }, \"rol\"</code> ilə çağırın.",
    gozlenilenCixis: "Açar: rol -> Admin",
    starterCode: "function dinamikAcarOxu(obyekt, acarAdi) {\n  // Kodunuzu buraya yazın\n}\n\ndinamikAcarOxu({ status: \"Aktiv\", rol: \"Admin\" }, \"rol\");",
    solutionCode: "function dinamikAcarOxu(obyekt, acarAdi) {\n  console.log(`Açar: ${acarAdi} -> ${obyekt[acarAdi]}`);\n}\n\ndinamikAcarOxu({ status: \"Aktiv\", rol: \"Admin\" }, \"rol\");",
    ipuclari: [
      "İpucu 1: Açar adı dəyişəndə saxlandıqda dot notation işləmir (obyekt.acarAdi undefined verər).",
      "İpucu 2: Bracket notation obyekt[acarAdi] dinamik qiymətləndirmə aparır.",
      "İpucu 3: Nəticə: Açar: rol -> Admin."
    ],
    teslimIzahi: "Bracket notation (kvadrat mötərizə) xassə adı dəyişəndə saxlandıqda və ya xüsusi simvollar daşıdıqda yeganə oxuma vasitəsidir."
  },
  {
    id: "exam-sec8-03",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "Obyekt Metodu və this Açar Sözü",
    serif: "<code>avtomobilYarat()</code> funksiyasını yazın. Obyekt daxilində <code>marka: \"Toyota\"</code>, <code>il: 2022</code> və <code>melumat: function() { ... }</code> metodu təyin edin. Metod daxilində <code>this.marka</code> və <code>this.il</code> istifadə edərək konsola <code>Avtomobil: Toyota (2022)</code> çap edin. Metodu çağırın.",
    gozlenilenCixis: "Avtomobil: Toyota (2022)",
    starterCode: "function avtomobilYarat() {\n  // Kodunuzu buraya yazın\n}\n\navtomobilYarat();",
    solutionCode: "function avtomobilYarat() {\n  const avto = {\n    marka: \"Toyota\",\n    il: 2022,\n    melumat: function() {\n      console.log(`Avtomobil: ${this.marka} (${this.il})`);\n    }\n  };\n  avto.melumat();\n}\n\navtomobilYarat();",
    ipuclari: [
      "İpucu 1: Obyekt metodu daxilindəki 'this' həmin obyektin öz instansiyasına istinad edir.",
      "İpucu 2: this.marka və this.il dəyərlərini şablon sətirə daxil edin.",
      "İpucu 3: avto.melumat() çağırışını edin."
    ],
    teslimIzahi: "Standart funksiya metodlarında 'this' açar sözü metodu çağıran cari obyekti referans alır."
  },
  {
    id: "exam-sec8-04",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Object.keys() və Object.values() ilə Siyahılama",
    serif: "<code>obyektAnalizi(obyekt)</code> funksiyasını tərtib edin. <code>Object.keys()</code> ilə açarları vergüllə, <code>Object.values()</code> ilə dəyərləri vergüllə konsola iki ayrı sətirdə çıxarın. Funksiyanı <code>{ ad: \"Aysel\", seher: \"Bakı\", yas: 21 }</code> ilə çağırın.",
    gozlenilenCixis: "Açarlar: ad, seher, yas\nDəyərlər: Aysel, Bakı, 21",
    starterCode: "function obyektAnalizi(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\nobyektAnalizi({ ad: \"Aysel\", seher: \"Bakı\", yas: 21 });",
    solutionCode: "function obyektAnalizi(obyekt) {\n  const acarlar = Object.keys(obyekt);\n  const deyerler = Object.values(obyekt);\n  console.log(`Açarlar: ${acarlar.join(\", \")}`);\n  console.log(`Dəyərlər: ${deyerler.join(\", \")}`);\n}\n\nobyektAnalizi({ ad: \"Aysel\", seher: \"Bakı\", yas: 21 });",
    ipuclari: [
      "İpucu 1: Object.keys() açarlar massivini, Object.values() dəyərlər massivini qaytarır.",
      "İpucu 2: Massivləri join(\", \") ilə birləşdirin.",
      "İpucu 3: İki ardıcıl log sətri çıxarın."
    ],
    teslimIzahi: "Object.keys() və Object.values() obyektin daxili xassələrini massiv formatında çıxararaq rahat iterasiya imkanı yaradır."
  },
  {
    id: "exam-sec8-05",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Object.entries() ilə Açar-Dəyər Cütləri",
    serif: "<code>cutleriCapEt(obyekt)</code> funksiyasını yazın. <code>Object.entries()</code> metodundan və for...of dövründən istifadə edərək hər cütü <code>[açar] => [dəyər]</code> formatında alt-alta konsola çıxarın. Funksiyanı <code>{ id: 1, ad: \"Kompüter\" }</code> ilə çağırın.",
    gozlenilenCixis: "id => 1\nad => Kompüter",
    starterCode: "function cutleriCapEt(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\ncutleriCapEt({ id: 1, ad: \"Kompüter\" });",
    solutionCode: "function cutleriCapEt(obyekt) {\n  const cutler = Object.entries(obyekt);\n  for (const [k, v] of cutler) {\n    console.log(`${k} => ${v}`);\n  }\n}\n\ncutleriCapEt({ id: 1, ad: \"Kompüter\" });",
    ipuclari: [
      "İpucu 1: Object.entries() [açar, dəyər] massivlərindən ibarət ikiölçülü massiv qaytarır.",
      "İpucu 2: for (const [k, v] of cutler) ilə destrukturizasiya edərək oxuyun.",
      "İpucu 3: 'k => v' formatında çap edin."
    ],
    teslimIzahi: "Object.entries() obyekti Map və ya massiv iterasiyası üçün əlverişli [key, value] cütlərinə çevirir."
  },
  {
    id: "exam-sec8-06",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Sadə Obyekt Destrukturizasiyası (Destructuring)",
    serif: "<code>istifadeciDestruktur(istifadeci)</code> funksiyasını yazın. ES6 Destructuring sintaksisi ilə <code>{ ad, email }</code> sahələrini birbaşa çıxarın və konsola <code>İstifadəçi: [ad] <[email]></code> kimi yazdırın. Funksiyanı <code>{ ad: \"Murad\", email: \"murad@example.com\", yas: 25 }</code> ilə çağırın.",
    gozlenilenCixis: "İstifadəçi: Murad <murad@example.com>",
    starterCode: "function istifadeciDestruktur(istifadeci) {\n  // Kodunuzu buraya yazın\n}\n\nistifadeciDestruktur({ ad: \"Murad\", email: \"murad@example.com\", yas: 25 });",
    solutionCode: "function istifadeciDestruktur(istifadeci) {\n  const { ad, email } = istifadeci;\n  console.log(`İstifadəçi: ${ad} <${email}>`);\n}\n\nistifadeciDestruktur({ ad: \"Murad\", email: \"murad@example.com\", yas: 25 });",
    ipuclari: [
      "İpucu 1: const { ad, email } = istifadeci; xassələri eyni adlı lokal dəyişənlərə çıxarır.",
      "İpucu 2: Şablon mətndə 'ad <email>' formatını qurun.",
      "İpucu 3: Nəticə dəqiq uyğun olmalıdır."
    ],
    teslimIzahi: "Destrukturizasiya (Destructuring assignment) obyekt sahələrini tək bir əmrlə ayrıca dəyişənlərə bağlamaq üçün ES6 sintaksisidir."
  },
  {
    id: "exam-sec8-07",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "Spread Operatoru ilə Obyekt Birləşdirilməsi",
    serif: "<code>obyektleriBirlesdir(baza, elave)</code> funksiyasını Spread (<code>...</code>) operatoru ilə yazın. İki obyekti tək bir <code>{ ...baza, ...elave }</code> obyektində birləşdirin və konsola <code>Birləşmiş id: [id], ad: [ad], rol: [rol]</code> kimi çıxarın. Funksiyanı <code>{ id: 1, ad: \"Ali\" }, { rol: \"Admin\" }</code> ilə çağırın.",
    gozlenilenCixis: "Birləşmiş id: 1, ad: Ali, rol: Admin",
    starterCode: "function obyektleriBirlesdir(baza, elave) {\n  // Kodunuzu buraya yazın\n}\n\nobyektleriBirlesdir({ id: 1, ad: \"Ali\" }, { rol: \"Admin\" });",
    solutionCode: "function obyektleriBirlesdir(baza, elave) {\n  const netice = { ...baza, ...elave };\n  console.log(`Birləşmiş id: ${netice.id}, ad: ${netice.ad}, rol: ${netice.rol}`);\n}\n\nobyektleriBirlesdir({ id: 1, ad: \"Ali\" }, { rol: \"Admin\" });",
    ipuclari: [
      "İpucu 1: Spread operatoru ({ ...a, ...b }) hər iki obyektin sahələrini yeni obyektə köçürür.",
      "İpucu 2: Eyni adlı açarlar olduqda sağdakı obyekt soldakını əvəzləyir.",
      "İpucu 3: Formatı dəqiq qurun."
    ],
    teslimIzahi: "Obyekt yayma operatoru (Object Spread) dayaz surətləmə və obyektlərin birləşdirilməsini ən sürətli və bəyanedici üsulla icra edir."
  },
  {
    id: "exam-sec8-08",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "JSON.stringify() və JSON.parse() Məlumat Mübadiləsi",
    serif: "<code>jsonCevir(obyekt)</code> funksiyasını təyin edin. Əvvəlcə obyekti <code>JSON.stringify()</code> ilə mətnə çevirin, sonra həmin mətni <code>JSON.parse()</code> ilə yenidən obyektə qaytarın və konsola <code>JSON Sətir: [sətir] | Bərpa: [bərpaAd]</code> çap edin. Funksiyanı <code>{ ad: \"Server\", port: 3000 }</code> ilə çağırın.",
    gozlenilenCixis: "JSON Sətir: {\"ad\":\"Server\",\"port\":3000} | Bərpa: Server",
    starterCode: "function jsonCevir(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\njsonCevir({ ad: \"Server\", port: 3000 });",
    solutionCode: "function jsonCevir(obyekt) {\n  const str = JSON.stringify(obyekt);\n  const berpa = JSON.parse(str);\n  console.log(`JSON Sətir: ${str} | Bərpa: ${berpa.ad}`);\n}\n\njsonCevir({ ad: \"Server\", port: 3000 });",
    ipuclari: [
      "İpucu 1: JSON.stringify() JavaScript obyektini sətirə serializasiya edir.",
      "İpucu 2: JSON.parse() JSON sətirini yenidən canlı obyektə deserializasiya edir.",
      "İpucu 3: Formatı dəqiq çıxarın."
    ],
    teslimIzahi: "JSON veb şəbəkələrində məlumat mübadiləsi üçün standart formadır. stringify serializasiyanı, parse isə bərpanı həyata keçirir."
  },
  {
    id: "exam-sec8-09",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Dərin İç-içə (Nested) Destrukturizasiya",
    serif: "<code>sirketUnvani(iscı)</code> funksiyasını yazın. Dərin destrukturizasiya ilə <code>unvan</code> obyektinin daxilindəki <code>seher</code> və <code>kuce</code> sahələrini çıxarın (<code>const { unvan: { seher, kuce } } = isci;</code>) və konsola <code>Ünvan: [seher], [kuce]</code> kimi çap edin. Funksiyanı <code>{ ad: \"Leyla\", unvan: { seher: \"Bakı\", kuce: \"Nizami küç.\" } }</code> ilə çağırın.",
    gozlenilenCixis: "Ünvan: Bakı, Nizami küç.",
    starterCode: "function sirketUnvani(isci) {\n  // Kodunuzu buraya yazın\n}\n\nsirketUnvani({ ad: \"Leyla\", unvan: { seher: \"Bakı\", kuce: \"Nizami küç.\" } });",
    solutionCode: "function sirketUnvani(isci) {\n  const { unvan: { seher, kuce } } = isci;\n  console.log(`Ünvan: ${seher}, ${kuce}`);\n}\n\nsirketUnvani({ ad: \"Leyla\", unvan: { seher: \"Bakı\", kuce: \"Nizami küç.\" } });",
    ipuclari: [
      "İpucu 1: İç-içə destrukturizasiya sintaksisi: const { unvan: { seher, kuce } } = isci;",
      "İpucu 2: Bu zaman 'unvan' dəyişəni yaranmır, birbaşa 'seher' və 'kuce' dəyişənləri formalaşır.",
      "İpucu 3: Çıxış: Ünvan: Bakı, Nizami küç."
    ],
    teslimIzahi: "Dərin destrukturizasiya çoxqatlı mürəkkəb API cavablarından konkret lazımi xassələri birbaşa çıxarmağa kömək edir."
  },
  {
    id: "exam-sec8-10",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Object.freeze() ilə Dəyişməzlik (Immutability)",
    serif: "<code>donuqObyekt()</code> funksiyasını yazın. <code>const konfiq = { versiya: \"1.0\" };</code> yaradın, <code>Object.freeze(konfiq)</code> ilə dondurun, sonra <code>konfiq.versiya = \"2.0\";</code> etməyə cəhd edin. Dəyərin dəyişmədiyini nümayiş etdirərək konsola <code>Versiya: [versiya] | Dondurulub: [isFrozen]</code> çap edin.",
    gozlenilenCixis: "Versiya: 1.0 | Dondurulub: true",
    starterCode: "function donuqObyekt() {\n  // Kodunuzu buraya yazın\n}\n\ndonuqObyekt();",
    solutionCode: "function donuqObyekt() {\n  const konfiq = { versiya: \"1.0\" };\n  Object.freeze(konfiq);\n  konfiq.versiya = \"2.0\";\n  console.log(`Versiya: ${konfiq.versiya} | Dondurulub: ${Object.isFrozen(konfiq)}`);\n}\n\ndonuqObyekt();",
    ipuclari: [
      "İpucu 1: Object.freeze() obyekti tamamilə dondurur, yeni sahə əlavəsinə və ya redaktəsinə icazə vermir.",
      "İpucu 2: Dəyişiklik cəhdi səssizcə rədd edilir (strict mode-da xəta verər).",
      "İpucu 3: Object.isFrozen(konfiq) true qaytarır."
    ],
    teslimIzahi: "Object.freeze() sabitlər və konfiqurasiyalar üçün dəyişməzlik (shallow immutability) təmin edən qoruyucu metoddur."
  },
  {
    id: "exam-sec8-11",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Dərin Klonlama (Deep Clone) Simulyasiyası",
    serif: "<code>derinKlon(obyekt)</code> funksiyasını yazın. <code>JSON.parse(JSON.stringify(obyekt))</code> vasitəsilə obyektin tam müstəqil nüsxəsini yaradın. Klonun daxilindəki <code>unvan.seher</code> dəyərini <code>\"Gəncə\"</code> edin. Orijinalın dəyişmədiyini göstərərək konsola <code>Orijinal: [orijinalSeher] | Klon: [klonSeher]</code> çıxarın. Funksiyanı <code>{ ad: \"Murad\", unvan: { seher: \"Bakı\" } }</code> ilə çağırın.",
    gozlenilenCixis: "Orijinal: Bakı | Klon: Gəncə",
    starterCode: "function derinKlon(obyekt) {\n  // Kodunuzu buraya yazın\n}\n\nderinKlon({ ad: \"Murad\", unvan: { seher: \"Bakı\" } });",
    solutionCode: "function derinKlon(obyekt) {\n  const klon = JSON.parse(JSON.stringify(obyekt));\n  klon.unvan.seher = \"Gəncə\";\n  console.log(`Orijinal: ${obyekt.unvan.seher} | Klon: ${klon.unvan.seher}`);\n}\n\nderinKlon({ ad: \"Murad\", unvan: { seher: \"Bakı\" } });",
    ipuclari: [
      "İpucu 1: Dayaz klonlama ({...obyekt}) daxili obyektlərin referansını paylaşır, ona görə dərin klon lazımdır.",
      "İpucu 2: JSON.parse(JSON.stringify()) tamamilə yeni yaddaş sahəsi ayırır.",
      "İpucu 3: Orijinal 'Bakı', klon isə 'Gəncə' qalmalıdır."
    ],
    teslimIzahi: "Dərin klonlama (Deep Copy) iç-içə bütün referansları qıraraq obyektin tamamilə izolyasiya olunmuş yeni nüsxəsini formalaşdırır."
  },
  {
    id: "exam-sec8-12",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Obyekt Massivində Açara Görə Qruplaşdırma (groupBy)",
    serif: "<code>qruplasdir(massiv, acar)</code> funksiyasını yazın. İşçilər massivini <code>sobe</code> sahəsinə görə qruplaşdıraraq hər şöbədə neçə nəfər olduğunu konsola <code>[şöbə]: [say] nəfər</code> kimi çap edin. Funksiyanı <code>[{ad: \"A\", sobe: \"IT\"}, {ad: \"B\", sobe: \"HR\"}, {ad: \"C\", sobe: \"IT\"}], \"sobe\"</code> ilə çağırın.",
    gozlenilenCixis: "IT: 2 nəfər\nHR: 1 nəfər",
    starterCode: "function qruplasdir(massiv, acar) {\n  // Kodunuzu buraya yazın\n}\n\nqruplasdir([{ad: \"A\", sobe: \"IT\"}, {ad: \"B\", sobe: \"HR\"}, {ad: \"C\", sobe: \"IT\"}], \"sobe\");",
    solutionCode: "function qruplasdir(massiv, acar) {\n  const qrup = {};\n  for (let i = 0; i < massiv.length; i++) {\n    const deyer = massiv[i][acar];\n    qrup[deyer] = (qrup[deyer] || 0) + 1;\n  }\n  for (const s in qrup) {\n    console.log(`${s}: ${qrup[s]} nəfər`);\n  }\n}\n\nqruplasdir([{ad: \"A\", sobe: \"IT\"}, {ad: \"B\", sobe: \"HR\"}, {ad: \"C\", sobe: \"IT\"}], \"sobe\");",
    ipuclari: [
      "İpucu 1: Şöbə açarını 'qrup[deyer] = (qrup[deyer] || 0) + 1' ilə artırın.",
      "İpucu 2: Qruplaşdırmadan sonra for...in ilə nəticələri alt-alta çap edin.",
      "İpucu 3: IT: 2 nəfər, HR: 1 nəfər çıxacaq."
    ],
    teslimIzahi: "Məlumatların açara görə qruplaşdırılması SQL GROUP BY əməliyyatının JavaScript-də O(N) tezlik cədvəli ilə reallaşdırılmasıdır."
  },
  {
    id: "exam-sec8-13",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Object.fromEntries() ilə Açar-Dəyər Transformasiyası",
    serif: "<code>qiymetleriArtir(mehsullar, faiz)</code> funksiyasını təyin edin. <code>Object.entries()</code> ilə məhsulları açar-dəyər cütlərinə bölün, hər qiyməti <code>faiz</code> qədər artırın və <code>Object.fromEntries()</code> ilə yenidən obyektə qaytarın. Yaranan JSON-u konsola <code>Yenilənmiş: [JSON]</code> kimi çap edin. Funksiyanı <code>{ qelem: 10, defter: 20 }, 10</code> ilə çağırın.",
    gozlenilenCixis: "Yenilənmiş: {\"qelem\":11,\"defter\":22}",
    starterCode: "function qiymetleriArtir(mehsullar, faiz) {\n  // Kodunuzu buraya yazın\n}\n\nqiymetleriArtir({ qelem: 10, defter: 20 }, 10);",
    solutionCode: "function qiymetleriArtir(mehsullar, faiz) {\n  const entries = Object.entries(mehsullar);\n  const yenilenmisEntries = entries.map(([ad, q]) => [ad, q + (q * faiz / 100)]);\n  const netice = Object.fromEntries(yenilenmisEntries);\n  console.log(`Yenilənmiş: ${JSON.stringify(netice)}`);\n}\n\nqiymetleriArtir({ qelem: 10, defter: 20 }, 10);",
    ipuclari: [
      "İpucu 1: Object.entries() massivə çevirir, map() qiyməti artırır (10 -> 11, 20 -> 22).",
      "İpucu 2: Object.fromEntries() ikiölçülü massivi yenidən obyektə çevirir.",
      "İpucu 3: JSON.stringify ilə çap edin."
    ],
    teslimIzahi: "Object.fromEntries() (ES2019) massiv metodlarının (map, filter) obyektlər üzərində rahat tətbiq olunmasını təmin edən əks-çeviricidir."
  },
  {
    id: "exam-sec8-14",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Getter və Setter ilə Nəzarətli Obyekt",
    serif: "<code>teraziObyekti()</code> funksiyasını yazın. Obyekt daxilində gizli <code>_ceki: 0</code> olsun. <code>get ceki()</code> metodu <code>`${this._ceki} kq`</code> qaytarsın; <code>set ceki(deyer)</code> isə yalnız dəyər müsbət olduqda <code>this._ceki = deyer</code> etsin. Çəkini <code>75</code> edin, sonra oxuyaraq konsola <code>Çəki: [ceki]</code> çıxarın.",
    gozlenilenCixis: "Çəki: 75 kq",
    starterCode: "function teraziObyekti() {\n  // Kodunuzu buraya yazın\n}\n\nteraziObyekti();",
    solutionCode: "function teraziObyekti() {\n  const terazi = {\n    _ceki: 0,\n    get ceki() {\n      return `${this._ceki} kq`;\n    },\n    set ceki(val) {\n      if (val > 0) this._ceki = val;\n    }\n  };\n  terazi.ceki = 75;\n  console.log(`Çəki: ${terazi.ceki}`);\n}\n\nteraziObyekti();",
    ipuclari: [
      "İpucu 1: get və set açar sözləri xassəyə müraciət və mənimsətmə anını idarə edir.",
      "İpucu 2: terazi.ceki = 75 yazdıqda setter işə düşür.",
      "İpucu 3: terazi.ceki oxunduqda getter '75 kq' qaytarır."
    ],
    teslimIzahi: "Getter və Setter metodları enkapsulyasiya yaradaraq xassələrə müraciəti metod kimi icra edir və validasiya imkanı verir."
  },
  {
    id: "exam-sec8-15",
    bolmeId: 8,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Reaktiv Vəziyyət İdarəetməsi (Mini State Store)",
    serif: "<code>createStore(ilkinState)</code> funksiyasını yazın. Store <code>getState()</code> və <code>setState(yeniDeyerler)</code> metodlarına malik olsun. <code>setState</code> çağırıldıqda daxili vəziyyət spread ilə yenilənsin və konsola <code>[VƏZİYYƏT YENİLƏNDİ] [JSON]</code> çıxarılsın. İlkin vəziyyəti <code>{ user: \"Murad\", tema: \"dark\" }</code> olan store yaradın və <code>store.setState({ tema: \"light\" })</code> çağırın.",
    gozlenilenCixis: "[VƏZİYYƏT YENİLƏNDİ] {\"user\":\"Murad\",\"tema\":\"light\"}",
    starterCode: "function createStore(ilkinState) {\n  // Kodunuzu buraya yazın\n}\n\nconst store = createStore({ user: \"Murad\", tema: \"dark\" });\nstore.setState({ tema: \"light\" });",
    solutionCode: "function createStore(ilkinState) {\n  let state = { ...ilkinState };\n  return {\n    getState: () => ({ ...state }),\n    setState: (update) => {\n      state = { ...state, ...update };\n      console.log(`[VƏZİYYƏT YENİLƏNDİ] ${JSON.stringify(state)}`);\n    }\n  };\n}\n\nconst store = createStore({ user: \"Murad\", tema: \"dark\" });\nstore.setState({ tema: \"light\" });",
    ipuclari: [
      "İpucu 1: Closure daxilində dəyişməz 'state' saxlayın.",
      "İpucu 2: setState zamanı '{ ...state, ...update }' ilə yeniləmə aparın.",
      "İpucu 3: Formatı '[VƏZİYYƏT YENİLƏNDİ] JSON' şəklində tamamlayın."
    ],
    teslimIzahi: "Redux və Vuex kimi qlobal vəziyyət idarəetmə kitabxanaları closure və immutability prinsiplərinə əsaslanan bu nümunə üzərində qurulmuşdur."
  },

  // ==========================================
  // BÖLMƏ 9: String Metodları və Template Literals (15 sual)
  // ==========================================
  {
    id: "exam-sec9-01",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "toUpperCase() və toLowerCase() ilə Reqistr Dəyişimi",
    serif: "<code>registriDeyis(metn)</code> funksiyasını yazın. Eyni mətni birinci sətirdə böyük hərflərlə, ikinci sətirdə kiçik hərflərlə konsola çıxarın. Funksiyanı <code>\"JavaScript\"</code> ilə çağırın.",
    gozlenilenCixis: "JAVASCRIPT\njavascript",
    starterCode: "function registriDeyis(metn) {\n  // Kodunuzu buraya yazın\n}\n\nregistriDeyis(\"JavaScript\");",
    solutionCode: "function registriDeyis(metn) {\n  console.log(metn.toUpperCase());\n  console.log(metn.toLowerCase());\n}\n\nregistriDeyis(\"JavaScript\");",
    ipuclari: [
      "İpucu 1: toUpperCase() bütün simvolları böyük hərflərə çevirir.",
      "İpucu 2: toLowerCase() bütün simvolları kiçik hərflərə çevirir.",
      "İpucu 3: İki ardıcıl log əmri ilə alt-alta çap edin."
    ],
    teslimIzahi: "String metodları orijinal mətni dəyişdirmir (çünki sətirlər immutable-dır), yeni çevrilmiş sətir nüsxəsi qaytarır."
  },
  {
    id: "exam-sec9-02",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "trim() ilə Kənar Boşluqların Təmizlənməsi",
    serif: "<code>bosluqlariTemizle(metn)</code> funksiyasını təyin edin. Giriş mətninin əvvəlində və sonundakı boşluqları <code>trim()</code> ilə təmizləyin və konsola <code>Təmiz: '[metn]'</code> kimi çıxarın. Funksiyanı <code>\"   Salam Dünya   \"</code> ilə çağırın.",
    gozlenilenCixis: "Təmiz: 'Salam Dünya'",
    starterCode: "function bosluqlariTemizle(metn) {\n  // Kodunuzu buraya yazın\n}\n\nbosluqlariTemizle(\"   Salam Dünya   \");",
    solutionCode: "function bosluqlariTemizle(metn) {\n  console.log(`Təmiz: '${metn.trim()}'`);\n}\n\nbosluqlariTemizle(\"   Salam Dünya   \");",
    ipuclari: [
      "İpucu 1: trim() metodu sətirin başındakı və sonundakı boşluqları və tabları kəsir.",
      "İpucu 2: Sözlərin arasındakı daxili boşluqlara toxunmur.",
      "İpucu 3: Formatı tək dırnaqlarla təmin edin."
    ],
    teslimIzahi: "trim() istifadəçi girişlərini (e-poçt, ad, axtarış sorğuları) emal etməzdən əvvəl lazımsız boşluqlardan təmizləmək üçün vacib sanitarizasiya metodudur."
  },
  {
    id: "exam-sec9-03",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ASAN",
    basliq: "includes() ilə Alt-Sətir Axtarışı",
    serif: "<code>sozVarmi(metn, axtarilan)</code> funksiyasını yazın. Əgər <code>metn.includes(axtarilan)</code> olarsa konsola <code>Mövcuddur</code>, əks halda <code>Yoxdur</code> çıxarın. Funksiyanı <code>\"Frontend Proqramlaşdırma\", \"Proqram\"</code> ilə çağırın.",
    gozlenilenCixis: "Mövcuddur",
    starterCode: "function sozVarmi(metn, axtarilan) {\n  // Kodunuzu buraya yazın\n}\n\nsozVarmi(\"Frontend Proqramlaşdırma\", \"Proqram\");",
    solutionCode: "function sozVarmi(metn, axtarilan) {\n  console.log(metn.includes(axtarilan) ? \"Mövcuddur\" : \"Yoxdur\");\n}\n\nsozVarmi(\"Frontend Proqramlaşdırma\", \"Proqram\");",
    ipuclari: [
      "İpucu 1: String.prototype.includes() mətndə axtarılan fraqmentin olub-olmadığını yoxlayır.",
      "İpucu 2: 'Proqram' mətndə mövcud olduğu üçün true qaytaracaq.",
      "İpucu 3: Nəticə: Mövcuddur."
    ],
    teslimIzahi: "includes() metodu böyük/kiçik hərf həssaslığı ilə sətir daxilində alt-sətir axtarışını həyata keçirir."
  },
  {
    id: "exam-sec9-04",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "startsWith() və endsWith() Yoxlamaları",
    serif: "<code>protokolYoxla(url)</code> funksiyasını qurun. Əgər url <code>https://</code> ilə başlayırsa VƏ <code>.com</code> ilə bitirsə konsola <code>Təhlükəsiz veb sayt</code>, əks halda <code>Qeyri-standart URL</code> çap edin. Funksiyanı <code>\"https://jsoyren.com\"</code> ilə çağırın.",
    gozlenilenCixis: "Təhlükəsiz veb sayt",
    starterCode: "function protokolYoxla(url) {\n  // Kodunuzu buraya yazın\n}\n\nprotokolYoxla(\"https://jsoyren.com\");",
    solutionCode: "function protokolYoxla(url) {\n  if (url.startsWith(\"https://\") && url.endsWith(\".com\")) {\n    console.log(\"Təhlükəsiz veb sayt\");\n  } else {\n    console.log(\"Qeyri-standart URL\");\n  }\n}\n\nprotokolYoxla(\"https://jsoyren.com\");",
    ipuclari: [
      "İpucu 1: startsWith(\"https://\") başlanğıc prefiksini yoxlayır.",
      "İpucu 2: endsWith(\".com\") sonluq suffiksini yoxlayır.",
      "İpucu 3: Hər iki şərt ödəndikdə təhlükəsiz sayt mesajını çıxarın."
    ],
    teslimIzahi: "startsWith() və endsWith() metodları URL, fayl uzantıları və protokolların sürətli yoxlanışı üçün optimaldır."
  },
  {
    id: "exam-sec9-05",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "split() ilə Mətnin Massivə Ayrılması",
    serif: "<code>sozleriSay(cumle)</code> funksiyasını təyin edin. Cümləni boşluqlara görə <code>split(\" \")</code> ilə massivə ayırın və konsola <code>Söz sayı: [say]</code> formatında çıxarın. Funksiyanı <code>\"JavaScript müasir internetin dilidir\"</code> ilə çağırın.",
    gozlenilenCixis: "Söz sayı: 4",
    starterCode: "function sozleriSay(cumle) {\n  // Kodunuzu buraya yazın\n}\n\nsozleriSay(\"JavaScript müasir internetin dilidir\");",
    solutionCode: "function sozleriSay(cumle) {\n  const sozler = cumle.split(\" \");\n  console.log(`Söz sayı: ${sozler.length}`);\n}\n\nsozleriSay(\"JavaScript müasir internetin dilidir\");",
    ipuclari: [
      "İpucu 1: split(\" \") cümləni boşluq simvolundan parçalayaraq sözlər massivinə çevirir.",
      "İpucu 2: sozler.length massivdəki sözlərin ümumi sayını verir.",
      "İpucu 3: 4 söz olduğu üçün 'Söz sayı: 4' çıxacaq."
    ],
    teslimIzahi: "split() mətni verilmiş ayrıcıya əsasən dilimləyərək massiv formasına gətirir və sonrakı kolleksiya emalını asanlaşdırır."
  },
  {
    id: "exam-sec9-06",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "replace() ilə Sözün Əvəzlənməsi",
    serif: "<code>sozDeyis(metn, kohne, yeni)</code> funksiyasını yazın. <code>replace()</code> metodundan istifadə edərək <code>kohne</code> sözünü <code>yeni</code> sözü ilə əvəzləyin və konsola çıxarın. Funksiyanı <code>\"Salam Python\", \"Python\", \"JavaScript\"</code> ilə çağırın.",
    gozlenilenCixis: "Salam JavaScript",
    starterCode: "function sozDeyis(metn, kohne, yeni) {\n  // Kodunuzu buraya yazın\n}\n\nsozDeyis(\"Salam Python\", \"Python\", \"JavaScript\");",
    solutionCode: "function sozDeyis(metn, kohne, yeni) {\n  console.log(metn.replace(kohne, yeni));\n}\n\nsozDeyis(\"Salam Python\", \"Python\", \"JavaScript\");",
    ipuclari: [
      "İpucu 1: replace(axtarilan, yeni) rast gəlinən ilk uyğunluğu əvəzləyir.",
      "İpucu 2: 'Python' sözü 'JavaScript' ilə əvəz olunacaq.",
      "İpucu 3: Nəticə: Salam JavaScript."
    ],
    teslimIzahi: "replace() metodu sətir daxilindəki simvol və ya sözü yenisi ilə əvəz edərək dəyişdirilmiş yeni sətir qaytarır."
  },
  {
    id: "exam-sec9-07",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ASAN",
    basliq: "repeat() ilə Vizual Xətt Çəkilməsi",
    serif: "<code>xettCek(simvol, say)</code> funksiyasını yazın. <code>simvol.repeat(say)</code> metodundan istifadə edərək təkrar olunan xətt yaradın və konsola <code>[xətt]</code> kimi çap edin. Funksiyanı <code>\"=\", 10</code> ilə çağırın.",
    gozlenilenCixis: "==========",
    starterCode: "function xettCek(simvol, say) {\n  // Kodunuzu buraya yazın\n}\n\nxettCek(\"=\", 10);",
    solutionCode: "function xettCek(simvol, say) {\n  console.log(simvol.repeat(say));\n}\n\nxettCek(\"=\", 10);",
    ipuclari: [
      "İpucu 1: repeat(n) metodu mətni n dəfə ardıcıl təkrarlayır.",
      "İpucu 2: \"=\".repeat(10) 10 ədəd bərabərlik simvolu verəcək.",
      "İpucu 3: Nəticəni birbaşa çap edin."
    ],
    teslimIzahi: "repeat() metodu ayırıcı xətlər, ulduzlu reytinqlər və formatlaşdırma blokları yaratmaq üçün optimallaşdırılmış sətir metodudur."
  },
  {
    id: "exam-sec9-08",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "padStart() ilə Kart Nömrəsinin Maskalanması",
    serif: "<code>kartMaskala(kartNo)</code> funksiyasını təyin edin. Kart nömrəsinin yalnız son 4 rəqəmini saxlayın (<code>slice(-4)</code>), qalan əvvəlki hissəni isə <code>padStart(16, \"*\")</code> ilə ulduzla doldurun. Konsola <code>Maskalanmış: [kart]</code> çıxarın. Funksiyanı <code>\"1234567890123456\"</code> ilə çağırın.",
    gozlenilenCixis: "Maskalanmış: ************3456",
    starterCode: "function kartMaskala(kartNo) {\n  // Kodunuzu buraya yazın\n}\n\nkartMaskala(\"1234567890123456\");",
    solutionCode: "function kartMaskala(kartNo) {\n  const sonDord = kartNo.slice(-4);\n  const maskalanmis = sonDord.padStart(16, \"*\");\n  console.log(`Maskalanmış: ${maskalanmis}`);\n}\n\nkartMaskala(\"1234567890123456\");",
    ipuclari: [
      "İpucu 1: slice(-4) sətirin sonuncu 4 simvolunu (\"3456\") kəsir.",
      "İpucu 2: padStart(16, \"*\") sətirin uzunluğu 16 olana qədər önünə \"*\" əlavə edir (12 ulduz + 4 rəqəm).",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    teslimIzahi: "padStart() və padEnd() sətirləri təyin olunmuş uzunluğa qədər xüsusi simvollarla dolduraraq maskalama və hizalama tələblərini həll edir."
  },
  {
    id: "exam-sec9-09",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Baş Hərflərin Böyüdülməsi (Title Case)",
    serif: "<code>titleCase(cumle)</code> funksiyasını yazın. Cümlədəki hər bir sözün ilk hərfini böyük, qalan hərflərini kiçik edin və konsola <code>Nəticə: [cumle]</code> çıxarın. Funksiyanı <code>\"javascript veb proqramlaşdırma\"</code> ilə çağırın.",
    gozlenilenCixis: "Nəticə: Javascript Veb Proqramlaşdırma",
    starterCode: "function titleCase(cumle) {\n  // Kodunuzu buraya yazın\n}\n\ntitleCase(\"javascript veb proqramlaşdırma\");",
    solutionCode: "function titleCase(cumle) {\n  const sozler = cumle.split(\" \");\n  const netice = [];\n  for (let i = 0; i < sozler.length; i++) {\n    const s = sozler[i];\n    netice.push(s[0].toUpperCase() + s.slice(1).toLowerCase());\n  }\n  console.log(`Nəticə: ${netice.join(\" \")}`);\n}\n\ntitleCase(\"javascript veb proqramlaşdırma\");",
    ipuclari: [
      "İpucu 1: split(\" \") ilə sözləri ayırın.",
      "İpucu 2: Hər sözün 's[0].toUpperCase() + s.slice(1).toLowerCase()' kombinasiyasını qurun.",
      "İpucu 3: join(\" \") ilə təkrar cümlə halında birləşdirin."
    ],
    teslimIzahi: "Sətir manipulyasiyası ilə mətnlərin standart formatlara (Title Case, CamelCase, Snake_case) salınması geniş yayılmış alqoritmik ssenaridir."
  },
  {
    id: "exam-sec9-10",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ORTA-ÇƏTİN",
    basliq: "Palindrom Mətn Yoxlayıcı",
    serif: "<code>palindromYoxla(metn)</code> funksiyasını təyin edin. Mətni tərsinə çevirərək (<code>split('').reverse().join('')</code>) orijinal ilə eyniliyini yoxlayın. Eynidirsə konsola <code>Palindromdur</code>, fərqlidirsə <code>Palindrom deyil</code> çıxarın. Funksiyanı ardıcıl olaraq <code>\"ana\"</code> və <code>\"kitab\"</code> ilə çağırın.",
    gozlenilenCixis: "Palindromdur\nPalindrom deyil",
    starterCode: "function palindromYoxla(metn) {\n  // Kodunuzu buraya yazın\n}\n\npalindromYoxla(\"ana\");\npalindromYoxla(\"kitab\");",
    solutionCode: "function palindromYoxla(metn) {\n  const ters = metn.split(\"\").reverse().join(\"\");\n  console.log(metn === ters ? \"Palindromdur\" : \"Palindrom deyil\");\n}\n\npalindromYoxla(\"ana\");\npalindromYoxla(\"kitab\");",
    ipuclari: [
      "İpucu 1: split(\"\") simvollar massivi edir, reverse() çevirir, join(\"\") təkrar sətir edir.",
      "İpucu 2: 'ana' tərsdən də 'ana'-dır (Palindromdur).",
      "İpucu 3: 'kitab' tərsdən 'batik'-dir (Palindrom deyil)."
    ],
    teslimIzahi: "Palindrom simmetriya alqoritmi sətirlərin hər iki tərəfdən eyni oxunmasını yoxlayır və klassik texniki müsahibə tapşırığıdır."
  },
  {
    id: "exam-sec9-11",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "URL Slug Generatoru",
    serif: "<code>slugYarat(basliq)</code> funksiyasını qurun: mətni kiçik hərflərə çevirin (<code>toLowerCase()</code>), kənar boşluqları kəsin (<code>trim()</code>) və boşluqları tire ilə əvəzləyin (<code>split(' ').filter(Boolean).join('-')</code>). Konsola <code>Slug: [slug]</code> çıxarın. Funksiyanı <code>\"  JavaScript Dərsləri 2026  \"</code> ilə çağırın.",
    gozlenilenCixis: "Slug: javascript-dərsləri-2026",
    starterCode: "function slugYarat(basliq) {\n  // Kodunuzu buraya yazın\n}\n\nslugYarat(\"  JavaScript Dərsləri 2026  \");",
    solutionCode: "function slugYarat(basliq) {\n  const slug = basliq.toLowerCase().trim().split(\" \").filter(Boolean).join(\"-\");\n  console.log(`Slug: ${slug}`);\n}\n\nslugYarat(\"  JavaScript Dərsləri 2026  \");",
    ipuclari: [
      "İpucu 1: toLowerCase() və trim() ilkin təmizləmə aparır.",
      "İpucu 2: split(' ').filter(Boolean) çoxsaylı aralıq boşluqlarını təmizləyir.",
      "İpucu 3: join('-') ilə URL üçün uyğun slug formalaşdırın."
    ],
    teslimIzahi: "URL slug generatorları bloq və xəbər başlıqlarını brauzer ünvan zolağında oxunaqlı və SEO-ya uyğun formatlaşdırmaq üçün tətbiq olunur."
  },
  {
    id: "exam-sec9-12",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Anaqram (Anagram) Aşkarlayıcı",
    serif: "<code>anaqramdir(soz1, soz2)</code> funksiyasını yazın. İki sözün eyni hərflərdən ibarət olduğunu (anaqram) yoxlamaq üçün hər iki sözü kiçik hərflərə çevirin, hərflərini çeşidləyin (<code>split('').sort().join('')</code>) və müqayisə edin. Əgər eynidirsə <code>Anaqramdır</code>, deyilsə <code>Anaqram deyil</code> çap edin. Funksiyanı <code>\"alma\", \"lama\"</code> ilə çağırın.",
    gozlenilenCixis: "Anaqramdır",
    starterCode: "function anaqramdir(soz1, soz2) {\n  // Kodunuzu buraya yazın\n}\n\nanaqramdir(\"alma\", \"lama\");",
    solutionCode: "function anaqramdir(soz1, soz2) {\n  const s1 = soz1.toLowerCase().split(\"\").sort().join(\"\");\n  const s2 = soz2.toLowerCase().split(\"\").sort().join(\"\");\n  console.log(s1 === s2 ? \"Anaqramdır\" : \"Anaqram deyil\");\n}\n\nanaqramdir(\"alma\", \"lama\");",
    ipuclari: [
      "İpucu 1: 'alma' -> 'a,a,l,m'; 'lama' -> 'a,a,l,m'.",
      "İpucu 2: Hərflər sıralandıqdan sonra sətirlər eyniləşir.",
      "İpucu 3: Nəticə 'Anaqramdır' olmalıdır."
    ],
    teslimIzahi: "Sətir simvollarının çeşidlənməsi (sort) fərqli ardıcıllıqlı permutasiyaların eyniliyini yoxlamaq üçün ən optimal üsuldur."
  },
  {
    id: "exam-sec9-13",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Söz Tezliyinin (Word Frequency) Hesablanması",
    serif: "<code>sozTezliyi(metn)</code> funksiyasını tərtib edin. Mətndəki hər bir sözün neçə dəfə işləndiyini hesablayaraq konsola <code>[söz]: [say]</code> formatında əlifba sırası ilə çıxarın. Funksiyanı <code>\"alma armud alma heyva armud alma\"</code> ilə çağırın.",
    gozlenilenCixis: "alma: 3\narmud: 2\nheyva: 1",
    starterCode: "function sozTezliyi(metn) {\n  // Kodunuzu buraya yazın\n}\n\nsozTezliyi(\"alma armud alma heyva armud alma\");",
    solutionCode: "function sozTezliyi(metn) {\n  const sozler = metn.split(\" \");\n  const tezlik = {};\n  for (let i = 0; i < sozler.length; i++) {\n    const s = sozler[i];\n    tezlik[s] = (tezlik[s] || 0) + 1;\n  }\n  for (const soz in tezlik) {\n    console.log(`${soz}: ${tezlik[soz]}`);\n  }\n}\n\nsozTezliyi(\"alma armud alma heyva armud alma\");",
    ipuclari: [
      "İpucu 1: split(\" \") ilə sözləri ayırıb obyekt sayğacına yığın.",
      "İpucu 2: 'alma' 3 dəfə, 'armud' 2 dəfə, 'heyva' 1 dəfə rast gəlinir.",
      "İpucu 3: for...in ilə hər sözü və sayını çıxarın."
    ],
    teslimIzahi: "Mətn daxilində söz və termin tezliklərinin hesablanması axtarış mühərrikləri və mətn analitikası üçün təməl alqoritmdir."
  },
  {
    id: "exam-sec9-14",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "ÇƏTİN",
    basliq: "Sadə Şablon Mühərriki (Mini Template Engine)",
    serif: "<code>sablonMuherriki(sablon, data)</code> funksiyasını qurun. Şablondakı <code>{{acar}}</code> yer tutucularını <code>data[acar]</code> dəyərləri ilə əvəzləyin və konsola <code>Nəticə: [metn]</code> çıxarın. Funksiyanı <code>\"Salam, {{ad}}! Sizin {{say}} yeni bildirişiniz var.\", { ad: \"Aysel\", say: 3 }</code> ilə çağırın.",
    gozlenilenCixis: "Nəticə: Salam, Aysel! Sizin 3 yeni bildirişiniz var.",
    starterCode: "function sablonMuherriki(sablon, data) {\n  // Kodunuzu buraya yazın\n}\n\nsablonMuherriki(\"Salam, {{ad}}! Sizin {{say}} yeni bildirişiniz var.\", { ad: \"Aysel\", say: 3 });",
    solutionCode: "function sablonMuherriki(sablon, data) {\n  let netice = sablon;\n  for (const acar in data) {\n    netice = netice.replace(new RegExp(`{{${acar}}}`, \"g\"), data[acar]);\n  }\n  console.log(`Nəticə: ${netice}`);\n}\n\nsablonMuherriki(\"Salam, {{ad}}! Sizin {{say}} yeni bildirişiniz var.\", { ad: \"Aysel\", say: 3 });",
    ipuclari: [
      "İpucu 1: data obyektini dövr edərək hər bir '{{acar}}' kombinasiyasını axtarın.",
      "İpucu 2: replace(new RegExp(`{{${acar}}}`, 'g'), data[acar]) ilə əvəzləyin.",
      "İpucu 3: Nəticəni formatlı çap edin."
    ],
    teslimIzahi: "Mustache və Handlebars kimi məşhur şablon mühərrikləri məhz '{{key}}' işarələrini regex və obyekt dəyərləri ilə əvəzləyərək dinamik HTML generasiya edir."
  },
  {
    id: "exam-sec9-15",
    bolmeId: 9,
    merheleId: 2,
    cetinlik: "EKSPERT",
    basliq: "Mətn Təhlükəsizlik Sanitarizasiyası (XSS Escape)",
    serif: "<code>htmlSanitarizasiya(metn)</code> funksiyasını yazın. Təhlükəli HTML simvollarını xüsusi HTML entitilərinə çevirin: <code>& -> &amp;</code>, <code>< -> &lt;</code>, <code>> -> &gt;</code>, <code>\" -> &quot;</code>. Təmizlənmiş təhlükəsiz mətni konsola <code>Təhlükəsiz: [metn]</code> formatında çıxarın. Funksiyanı <code>\"<script>alert(\\\"XSS\\\")</script>\"</code> ilə çağırın.",
    gozlenilenCixis: "Təhlükəsiz: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;",
    starterCode: "function htmlSanitarizasiya(metn) {\n  // Kodunuzu buraya yazın\n}\n\nhtmlSanitarizasiya(\"<script>alert(\\\"XSS\\\")</script>\");",
    solutionCode: "function htmlSanitarizasiya(metn) {\n  const xəritə = {\n    \"&\": \"&amp;\",\n    \"<\": \"&lt;\",\n    \">\": \"&gt;\",\n    '\"': \"&quot;\"\n  };\n  let netice = \"\";\n  for (let i = 0; i < metn.length; i++) {\n    const char = metn[i];\n    netice += xəritə[char] || char;\n  }\n  console.log(`Təhlükəsiz: ${netice}`);\n}\n\nhtmlSanitarizasiya(\"<script>alert(\\\"XSS\\\")</script>\");",
    ipuclari: [
      "İpucu 1: Simvollar xəritəsi (mapping) yaradıb hər simvolu yoxlayın.",
      "İpucu 2: '<' simvolu '&lt;', '>' simvolu '&gt;', '\"' isə '&quot;' olacaq.",
      "İpucu 3: Formatı dəqiq təmin edin."
    ],
    teslimIzahi: "HTML simvollarının entitilərə escape edilməsi kənar istifadəçi girişlərində Cross-Site Scripting (XSS) inyeksiyasının qarşısını alan təməl təhlükəsizlik tədbiridir."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SEC_6_9_QUESTIONS };
}
