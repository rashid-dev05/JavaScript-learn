const fs = require('fs');

const section3 = {
  "id": "section-3",
  "title": "Bölmə 3: Operatorlar (===, !==, arifmetik, məntiqi)",
  "icon": "⚡",
  "topics": [
    {
      "id": "topic-3-1",
      "title": "Arifmetik Operatorlar, Qalıq (%), Qüvvət (**) və Prefiks/Postfiks",
      "theory": `<h3>⚡ Riyazi Əməliyyatlar və Hesablama İntizamı</h3>
<p>JavaScript ədədlər üzərində riyazi əməliyyatlar aparmaq üçün standart <strong>arifmetik operatorlar</strong> təqdim edir:</p>
<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Operator</th>
        <th>Riyazi Əməliyyat</th>
        <th>Nümunə</th>
        <th>Nəticə</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>+</code></td><td>Toplama</td><td><code>10 + 5</code></td><td><code>15</code></td></tr>
      <tr><td><code>-</code></td><td>Çıxma</td><td><code>10 - 4</code></td><td><code>6</code></td></tr>
      <tr><td><code>*</code></td><td>Vurma</td><td><code>6 * 7</code></td><td><code>42</code></td></tr>
      <tr><td><code>/</code></td><td>Bölmə</td><td><code>20 / 4</code></td><td><code>5</code></td></tr>
      <tr><td><code>%</code></td><td>Qalıq (Modulus)</td><td><code>25 % 4</code></td><td><code>1</code></td></tr>
      <tr><td><code>**</code></td><td>Qüvvətə yüksəltmə</td><td><code>2 ** 3</code></td><td><code>8</code></td></tr>
    </tbody>
  </table>
</div>

<div class="tip-box">
  <strong>💡 Qalıq (%) Operatoru ilə Cüt/Tək Təyini:</strong> Hər hansı bir ədədin 2-yə bölünməsindən qalan qalıq 0 olarsa (<code>eded % 2 === 0</code>), o ədəd <strong>cütdür</strong>; əks halda <strong>təkdir</strong>.
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Prefiks vs Postfiks (İcra Zamanlaması Xronologiyası)</h4>
<p>Dəyişəni 1 vahid artırmaq üçün <strong>inkrement (<code>++</code>)</strong>, 1 vahid azaltmaq üçün <strong>dekrement (<code>--</code>)</strong> tətbiq olunur. Lakin operatorun dəyişəndən əvvəl və ya sonra yazılması qiymətləndirmə ardıcıllığında fərq yaradır:</p>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Sintaksis</th>
        <th>Növü</th>
        <th>İcra Xronologiyası</th>
        <th>Nəticə</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>x++</code></td>
        <td>Postfiks İnkrement</td>
        <td>Əvvəlcə <strong>mövcud köhnə dəyəri verir</strong>, sonra dəyişəni 1 vahid artırır.</td>
        <td><code>let a = 5; let b = a++;</code><br>\(\rightarrow\) <code>b = 5, a = 6</code></td>
      </tr>
      <tr>
        <td><code>++x</code></td>
        <td>Prefiks İnkrement</td>
        <td>Əvvəlcə <strong>dəyişəni 1 vahid artırır</strong>, sonra yeni dəyəri dərhal qaytarır.</td>
        <td><code>let a = 5; let b = ++a;</code><br>\(\rightarrow\) <code>b = 6, a = 6</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="warning-box">
  <strong>⚠️ Qüvvət (**) vs Bitwise XOR (^):</strong> JavaScript-də qüvvətə yüksəltmə <code>**</code> operatorudur. Çox vaxt riyaziyyatdan gələn vərdişlə <code>2 ^ 3</code> yazılır; lakin <code>^</code> qüvvət deyil, ikilik Bitwise XOR operatorudur və <code>2 ^ 3 = 1</code> verir!
</div>`,
      "codeExamples": [
        {
          "title": "Qalıq və Qüvvət Hesablamaları",
          "code": "const bolunen = 17;\nconst bolen = 5;\nconsole.log(\"Qalıq:\", bolunen % bolen); // 2\n\nconst esas = 3;\nconst quvvet = 4;\nconsole.log(\"3 qüvvəti 4:\", esas ** quvvet); // 81",
          "output": "Qalıq: 2\n3 qüvvəti 4: 81"
        },
        {
          "title": "Prefiks və Postfiks Müqayisəsi",
          "code": "let n = 5;\nlet a = n++; // a = 5, n = 6\nlet b = ++n; // n = 7, b = 7\nconsole.log(\"a:\", a);\nconsole.log(\"b:\", b);\nconsole.log(\"Yekun n:\", n);",
          "output": "a: 5\nb: 7\nYekun n: 7"
        }
      ],
      "exercises": [
        {
          "id": "ex-3-1-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Bölmədən Alınan Qalığın Hesablanması",
          "instruction": "25 ədədinin 4 bərabər hissəyə bölünməsindən sonra yerdə qalan kəsrsiz tam qalığı hesablayaraq nəticəni konsol ekranında əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "1",
          "hint": "Qalıq tapmaq üçün JavaScript-də faiz (%) işarəsi olan qalıq (modulus) operatorundan istifadə olunur.",
          "solutionCode": "console.log(25 % 4);"
        },
        {
          "id": "ex-3-1-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Ədədin Qüvvətinin Hesablanması",
          "instruction": "2 əsasının 5-ci dərəcədən qüvvətini riyazi olaraq hesablayın və əldə olunan nəticəni (32) konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "32",
          "hint": "Qüvvətə yüksəltmə üçün JavaScript-də ** (exponentiation) operatorundan istifadə olunur.",
          "solutionCode": "console.log(2 ** 5);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-3-1-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Qüvvət Əməliyyatının Sazlanması",
          "instruction": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
          "description": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
          "buggyCode": "console.log(2 ^ 3);",
          "correctCode": "console.log(2 ** 3);",
          "correctOutput": "8",
          "expectedOutput": "8",
          "explanation": "JavaScript-də qüvvətə yüksəltmə operatoru ** işarəsidir. Şapka (^) işarəsi isə qüvvət deyil, ikilik bitwise XOR operatorudur (2 ^ 3 = 1)."
        }
      ],
      "bugFix": {
        "id": "bug-3-1-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Qüvvət Əməliyyatının Sazlanması",
        "instruction": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
        "description": "Proqramçı 2-nin 3-cü dərəcədən qüvvətini hesablayıb ekrana 8 çıxarmaq istəyir, lakin operator seçimi səbəbindən konsola gözlənilməz 1 nəticəsi çıxır. Kodu tədqiq edin, JavaScript-in qüvvət operatorunu düzgün tətbiq edərək hədəf nəticəni (8) əldə edin.",
        "buggyCode": "console.log(2 ^ 3);",
        "correctCode": "console.log(2 ** 3);",
        "correctOutput": "8",
        "expectedOutput": "8",
        "explanation": "JavaScript-də qüvvətə yüksəltmə operatoru ** işarəsidir. Şapka (^) işarəsi isə qüvvət deyil, ikilik bitwise XOR operatorudur (2 ^ 3 = 1)."
      }
    },
    {
      "id": "topic-3-2",
      "title": "Mənimsətmə Operatorları (+=, -=, *=, /=, **=) və Zəncirvari Mənimsətmə",
      "theory": `<h3>📝 Mürəkkəb Mənimsətmə Nədir?</h3>
<p>Dəyişənin cari dəyərini riyazi dəyişib yenidən həmin dəyişənin özünə yazmaq lazım gəldikdə <strong>qısaldılmış mənimsətmə operatorları</strong> tətbiq olunur:</p>

<div class="tip-box">
  <strong>💡 Həyati Nümunə:</strong> Əgər bank balansınız 100 manatdırsa və üzərinə 50 manat gəlirsinizsə, uzun-uzadı <code>balans = balans + 50</code> yazmaq əvəzinə qısa və səliqəli şəkildə <code>balans += 50</code> yazırsınız!
</div>

<div class="lesson-table-wrapper">
  <table class="lesson-table">
    <thead>
      <tr>
        <th>Qısa Forma</th>
        <th>Ekvivalent Tam İfadə</th>
        <th>İzah</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>x += y</code></td><td><code>x = x + y</code></td><td>Cari qiymətin üzərinə y gəlir</td></tr>
      <tr><td><code>x -= y</code></td><td><code>x = x - y</code></td><td>Cari qiymətdən y çıxır</td></tr>
      <tr><td><code>x *= y</code></td><td><code>x = x * y</code></td><td>Cari qiyməti y-ə vurur</td></tr>
      <tr><td><code>x /= y</code></td><td><code>x = x / y</code></td><td>Cari qiyməti y-ə bölür</td></tr>
    </tbody>
  </table>
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Zəncirvari Mənimsətmə və Sağdan-Sola İcra Qaydası</h4>
<p>JavaScript-də mənimsətmə operatorları <strong>sağdan-sola assosiativliyə (right-to-left associativity)</strong> malikdir. Bu xüsusiyyət bir neçə dəyişənə eyni anda vahid qiymət verməyə imkan yaradır:</p>

<pre><code>let a, b, c;
a = b = c = 5 + 5;
// 1. Əvvəlcə ən sağdakı ifadə hesablanır: 5 + 5 = 10
// 2. c = 10 mənimsədilir
// 3. b = 10 mənimsədilir
// 4. a = 10 mənimsədilir
console.log(a, b, c); // 10 10 10</code></pre>

<div class="warning-box">
  <strong>⚠️ Sıralama Qüsuru:</strong> <code>x += 10</code> düzgün mənimsətmədir. Lakin diqqətsizlikdən <code>x =+ 10</code> yazıldıqda mühərrik bunu mənimsətmə kimi deyil, sadəcə müsbət 10 ədədinin mənimsədilməsi kimi başa düşür və əvvəlki dəyəri silir!
</div>`,
      "codeExamples": [
        {
          "title": "Mürəkkəb Mənimsətmə Nümunəsi",
          "code": "let balans = 100;\nbalans += 50;  // balans = 150\nbalans *= 2;   // balans = 300\nbalans -= 100; // balans = 200\nbalans /= 4;   // balans = 50\nconsole.log(\"Yekun balans:\", balans);",
          "output": "Yekun balans: 50"
        },
        {
          "title": "Mətnin Dinamik Quraşdırılması",
          "code": "let hekaye = \"Bir vaxtlar \";\nhekaye += \"qədim bir şəhərdə \";\nhekaye += \"kod yazılırdı.\";\nconsole.log(hekaye);",
          "output": "Bir vaxtlar qədim bir şəhərdə kod yazılırdı."
        }
      ],
      "exercises": [
        {
          "id": "ex-3-2-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Hesab Balansının Artırılması",
          "instruction": "Mövcud 200 vahidlik <code>balans</code> göstəricisinin üzərinə əlavə 50 vahid məbləğ toplayaraq yeni balansı (250) konsol ekranında əks etdirin.",
          "starterCode": "let balans = 200;\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "250",
          "hint": "Dəyişənin dəyərini mövcud qiymətin üzərinə artırmaq üçün qısaldılmış += toplama mənimsətmə operatorundan istifadə edə bilərsiniz.",
          "solutionCode": "let balans = 200;\nbalans += 50;\nconsole.log(balans);"
        },
        {
          "id": "ex-3-2-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "İnkremensiya ilə Vahid Artım",
          "instruction": "İlkin göstəricisi 10 olan <code>say</code> dəyişənini bir vahid artıraraq yekun qiyməti konsolda əks etdirin.",
          "starterCode": "let say = 10;\n// Kodunuzu buraya yazın\n",
          "expectedOutput": "11",
          "hint": "Dəyişənin dəyərini tək bir vahid artırmaq üçün unar inkrement (++) operatorundan istifadə olunur.",
          "solutionCode": "let say = 10;\nsay++;\nconsole.log(say);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-3-2-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Mənimsətmə Operatorunun Sazlanması",
          "instruction": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
          "description": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
          "buggyCode": "let xal = 20;\nxal =+ 10;\nconsole.log(xal);",
          "correctCode": "let xal = 20;\nxal += 10;\nconsole.log(xal);",
          "correctOutput": "30",
          "expectedOutput": "30",
          "explanation": "Toplama mənimsətmə operatoru '+=' şəklində yazılmalıdır. '=+' yazıldıqda isə mühərrik bunu '+10' ədədinin mənimsədilməsi kimi başa düşür."
        }
      ],
      "bugFix": {
        "id": "bug-3-2-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Mənimsətmə Operatorunun Sazlanması",
        "instruction": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
        "description": "Proqramçı ilkin dəyəri (20) 10 vahid artıraraq konsola 30 çıxarmaq istəyir, lakin mənimsətmə operatoru əvəzinə ardıcıl bərabərlik və toplama (+ yerinə =+) yazıldığı üçün dəyişən sadəcə müsbət 10 dəyərini alır. Kodu tədqiq edin, mənimsətmə operatorunu düzgün tətbiq edərək 30 nəticəsini bərpa edin.",
        "buggyCode": "let xal = 20;\nxal =+ 10;\nconsole.log(xal);",
        "correctCode": "let xal = 20;\nxal += 10;\nconsole.log(xal);",
        "correctOutput": "30",
        "expectedOutput": "30",
        "explanation": "Toplama mənimsətmə operatoru '+=' şəklində yazılmalıdır. '=+' yazıldıqda isə mühərrik bunu '+10' ədədinin mənimsədilməsi kimi başa düşür."
      }
    },
    {
      "id": "topic-3-3",
      "title": "Ciddi Bərabərlik (===, !==) vs Boş Bərabərlik (==, !=) və Operator Prioriteti",
      "theory": `<h3>⚖️ Müqayisə: Ciddi (<code>===</code>) vs Boş (<code>==</code>)</h3>
<p>İki dəyəri müqayisə edərkən ən vacib prinsip:</p>
<ul>
  <li><strong>Ciddi Bərabərlik (<code>===</code> və <code>!==</code>):</strong> Həm dəyəri, həm də <strong>məlumat tipini</strong> yoxlayır. Əgər tiplər fərqlidirsə, nəticə dərhal <code>false</code> olur. (Məsələn: <code>5 === "5" \(\rightarrow\) false</code>).</li>
  <li><strong>Boş Bərabərlik (<code>==</code> və <code>!=</code>):</strong> Tiplər fərqli olduqda arxa fonda gizli və gözlənilməz çevrilmələr edir. Peşəkar kodda <strong>antipattern</strong> sayılır!</li>
</ul>

<div class="tip-box">
  <strong>💡 Pasport Nəzarəti Analogiyası:</strong> Boş bərabərlik (<code>==</code>) yalnız üz şəklinə baxan səhlənkar nəzarətçidir. Ciddi bərabərlik (<code>===</code>) isə həm şəkli, həm də pasportun çipini və vətəndaşlıq bazasını yoxlayan etibarlı sərhəd sistemidir!
</div>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Boş Bərabərliyin (==) Tələləri və Operator Prioriteti Cədvəli</h4>
<p>Boş bərabərlik zamanı <em>Abstract Equality Comparison Algorithm</em>-in yaratdığı qəribəliklər:</p>
<div class="warning-box">
  <strong>⚠️ Təhlükəli '==' Nəticələri:</strong><br>
  • <code>"" == 0 \(\rightarrow\) true</code> (Boş mətn 0-a çevrilir!)<br>
  • <code>false == 0 \(\rightarrow\) true</code> (false ədədə çevrilərək 0 olur!)<br>
  • <code>null == undefined \(\rightarrow\) true</code><br>
  • <code>[] == false \(\rightarrow\) true</code>
</div>

<p><strong>Operator Prioriteti (Precedence) Pilləkəni:</strong></p>
<ol>
  <li><strong>Mötərizə <code>( )</code>:</strong> Ən yüksək prioritet (istənilən növbəni dəyişir).</li>
  <li><strong>Qüvvət <code>**</code>:</strong> Sağdan-sola hesablanır (<code>2 ** 3 ** 2 = 512</code>).</li>
  <li><strong>Vurma və Bölmə (<code>*</code>, <code>/</code>, <code>%</code>):</strong> Toplama və çıxmadan əvvəl gəlir.</li>
  <li><strong>Toplama və Çıxma (<code>+</code>, <code>-</code>)</strong></li>
  <li><strong>Müqayisələr (<code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>)</strong></li>
  <li><strong>Bərabərlik (<code>===</code>, <code>!==</code>)</strong></li>
  <li><strong>Məntiqi:</strong> <code>!</code> &gt; <code>&&</code> &gt; <code>||</code>.</li>
</ol>`,
      "codeExamples": [
        {
          "title": "Ciddi və Boş Bərabərlik Nümunələri",
          "code": "console.log(5 === \"5\"); // false (Fərqli tiplər: number vs string)\nconsole.log(5 == \"5\");  // true (Mətn ədədə çevrildi)\nconsole.log(0 === false); // false\nconsole.log(0 == false);  // true\nconsole.log(null === undefined); // false\nconsole.log(null == undefined);  // true",
          "output": "false\ntrue\nfalse\ntrue\nfalse\ntrue"
        },
        {
          "title": "Operator Prioriteti Hesablaması",
          "code": "const netice1 = 10 + 5 * 2;     // 10 + 10 = 20\nconst netice2 = (10 + 5) * 2;   // 15 * 2 = 30\nconsole.log(\"Mötərizəsiz:\", netice1);\nconsole.log(\"Mötərizəli:\", netice2);",
          "output": "Mötərizəsiz: 20\nMötərizəli: 30"
        }
      ],
      "exercises": [
        {
          "id": "ex-3-3-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Ciddi Bərabərliklə Tip Fərqinin Yoxlanılması",
          "instruction": "Ədəd tipli <code>10</code> ilə simvol tipli <code>\"10\"</code> dəyərlərinin bərabərliyini ciddi bərabərlik (<code>===</code>) operatoru ilə yoxlayaraq nəticəni konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "false",
          "hint": "Ciddi bərabərlik operatoru tiplər eyni olmadıqda avtomatik olaraq false qiyməti qaytarır.",
          "solutionCode": "console.log(10 === \"10\");"
        },
        {
          "id": "ex-3-3-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Ciddi Fərqlilik Operatorunun Tətbiqi",
          "instruction": "İki fərqli dəyərin — <code>5</code> ədədi ilə <code>10</code> ədədinin bir-birindən fərqli olduğunu ciddi fərqlilik (<code>!==</code>) operatoru ilə yoxlayaraq nəticəni konsola çıxarın.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "true",
          "hint": "Ciddi fərqlilik operatoru (!==) dəyərlər həqiqətən bir-birinə bərabər olmadıqda true qaytarır.",
          "solutionCode": "console.log(5 !== 10);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-3-3-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Müqayisə Əməliyyatının Bərpası",
          "instruction": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
          "description": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
          "buggyCode": "let a = 10;\nlet b = 20;\nconsole.log(a = b);",
          "correctCode": "let a = 10;\nlet b = 20;\nconsole.log(a === b);",
          "correctOutput": "false",
          "expectedOutput": "false",
          "explanation": "Müqayisə üçün tək bərabərlik (=) istifadə edilə bilməz, ciddi müqayisə üçün === istifadə edilməlidir."
        }
      ],
      "bugFix": {
        "id": "bug-3-3-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Müqayisə Əməliyyatının Bərpası",
        "instruction": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
        "description": "Proqramçı iki dəyişənin bərabərliyini yoxlayaraq müqayisə nəticəsini (false) konsola çıxarmaq istəyir, lakin operator qüsuru səbəbindən müqayisə əvəzinə mənimsətmə baş verir və konsola 20 çıxır. Kodu tədqiq edin, müqayisə məntiqini bərpa edin və gözlənilən Boolean nəticəsini əldə edin.",
        "buggyCode": "let a = 10;\nlet b = 20;\nconsole.log(a = b);",
        "correctCode": "let a = 10;\nlet b = 20;\nconsole.log(a === b);",
        "correctOutput": "false",
        "expectedOutput": "false",
        "explanation": "Müqayisə üçün tək bərabərlik (=) istifadə edilə bilməz, ciddi müqayisə üçün === istifadə edilməlidir."
      }
    },
    {
      "id": "topic-3-4",
      "title": "Məntiqi Operatorlar (&&, ||, !), Short-Circuit, Nullish Coalescing (??) və Bitwise",
      "theory": `<h3>🧠 Məntiqi Şərt Operatorları</h3>
<p>Məntiqi qərarlar vermək üçün üç əsas operator mövcuddur:</p>
<ul>
  <li><strong><code>&&</code> (Məntiqi VƏ - AND):</strong> Yalnız <strong>hər iki tərəf true</strong> olduqda <code>true</code> verir.</li>
  <li><strong><code>||</code> (Məntiqi VƏ YA - OR):</strong> Tərəflərdən <strong>heç olmasa biri true</strong> olduqda <code>true</code> verir.</li>
  <li><strong><code>!</code> (Məntiqi İNKAR - NOT):</strong> Boolean dəyəri əksinə çevirir (<code>!true \(\rightarrow\) false</code>).</li>
</ul>

<div class="tip-box">
  <strong>💡 Mühafizə Qapısı Analogiyası:</strong><br>
  • <strong>VƏ (&&):</strong> Təyyarəyə minmək üçün həm <strong>bilet</strong>, həm də <strong>şəxsiyyət vəsiqəsi</strong> lazımdır.<br>
  • <strong>VƏ YA (||):</strong> Muzeyə endirimlə girmək üçün ya <strong>tələbə bileti</strong>, ya da <strong>veteran vəsiqəsi</strong> kifayətdir.
</div>

<p><strong>Qısa Qapanma (Short-Circuit Evaluation):</strong> Əgər <code>A && B</code> ifadəsində <code>A</code> yalandırsa, mühərrik <code>B</code>-yə baxmır və birbaşa <code>false</code> qaytarır. Əgər <code>A || B</code> ifadəsində <code>A</code> doğrudursa, mühərrik dərhal <code>true</code> qaytarır.</p>

<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">

<h4>🔬 Dərinləşmə: Nullish Coalescing (??), 0-ın Qorunması və İkilik Bitwise (XOR) Möcüzəsi</h4>
<p><strong>Nullish Coalescing (<code>??</code>) vs Məntiqi VƏ YA (<code>||</code>):</strong></p>
<p>Defolt (standart) dəyər verərkən <code>||</code> operatoru təhlükəlidir: o, <code>0</code> və <code>""</code> dəyərlərini də yalan (falsy) sayaraq məhv edir!</p>
<pre><code>const xal = 0;
const netice1 = xal || 10; // 10! (XƏTA: 0 itdi!)
const netice2 = xal ?? 10; // 0 (Düzgün: ?? yalnız null və undefined üçün işə düşür)</code></pre>

<p><strong>İkilik Bitwise Əsasları:</strong></p>
<ul>
  <li><strong>Bitwise AND (<code>& 1</code>):</strong> Ədədin son bitini yoxlayır. <code>(eded & 1) === 0</code> cüt, <code>1</code> təkdir.</li>
  <li><strong>Bitwise XOR (<code>^</code> - İstisna VƏ YA):</strong>
    <ul>
      <li>Eyni iki ədədin XOR-u həmişə <strong>0</strong>-dır: <code>x ^ x === 0</code>.</li>
      <li>0 ilə XOR ədədin <strong>özünü</strong> saxlayır: <code>x ^ 0 === x</code>.</li>
      <li><em>Alqoritmik möcüzə:</em> Cütləşmiş ədədlər massivində (məs: <code>[4, 1, 2, 1, 2]</code>) təkrar olunmayan yeganə unikal ədədi \(O(n)\) zaman və \(O(1)\) yaddaşla tapmaq üçün bütün massiv ardıcıl XOR edilir!</li>
    </ul>
  </li>
</ul>`,
      "codeExamples": [
        {
          "title": "Short-Circuit və Nullish Coalescing (??)",
          "code": "const girisSayi = 0;\nconst defoltOR = girisSayi || 10; // 10 (Sıfır itdi!)\nconst defoltNullish = girisSayi ?? 10; // 0 (Qorundu)\n\nconsole.log(\"OR ilə:\", defoltOR);\nconsole.log(\"Nullish ilə:\", defoltNullish);",
          "output": "OR ilə: 10\nNullish ilə: 0"
        },
        {
          "title": "Bitwise XOR ilə Yeganə Elementin Tapılması",
          "code": "const massiv = [7, 3, 5, 3, 7];\nlet unikal = 0;\nfor (let i = 0; i < massiv.length; i++) {\n  unikal ^= massiv[i];\n}\nconsole.log(\"Cütləşməyən unikal ədəd:\", unikal);",
          "output": "Cütləşməyən unikal ədəd: 5"
        }
      ],
      "exercises": [
        {
          "id": "ex-3-4-1",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Məntiqi Konyunksiya Qiymətləndirilməsi",
          "instruction": "İki məntiqi vəziyyətdən birincisinin doğru (true), ikincisinin isə yalan (false) olduğu halda hər iki şərtin eyni vaxtda ödənməsi tələbini qiymətləndirərək konsol çıxışına ötürün.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "false",
          "hint": "Məntiqi VƏ (&&) operatoru yalnız hər iki tərəf doğru olduqda true, tərəflərdən biri belə yalan olduqda false qaytarır.",
          "solutionCode": "console.log(true && false);"
        },
        {
          "id": "ex-3-4-2",
          "type": "algorithm",
          "disableHardcodeCheck": false,
          "title": "Məntiqi İnkar Əməliyyatı",
          "instruction": "Yalan (false) məntiqi vəziyyətini əksinə çevirərək (inversiya edərək) yaranan həqiqi qiyməti konsolda əks etdirin.",
          "starterCode": "// Kodunuzu buraya yazın\n",
          "expectedOutput": "true",
          "hint": "Məntiqi inkar üçün nida (!) operatorundan istifadə olunur; o, true dəyərini false-a, false dəyərini isə true-ya çevirir.",
          "solutionCode": "console.log(!false);"
        }
      ],
      "bugFixes": [
        {
          "id": "bug-3-4-1",
          "type": "bugfix",
          "disableHardcodeCheck": true,
          "title": "Məntiqi VƏ Operatorunun Sazlanması",
          "instruction": "Proqramçı iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
          "description": "Proqramçı iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
          "buggyCode": "let a = true;\nlet b = true;\nconsole.log(a and b);",
          "correctCode": "let a = true;\nlet b = true;\nconsole.log(a && b);",
          "correctOutput": "true",
          "expectedOutput": "true",
          "explanation": "JavaScript-də məntiqi VƏ operatoru 'and' deyil, '&&' simvoludur."
        }
      ],
      "bugFix": {
        "id": "bug-3-4-1",
        "type": "bugfix",
        "disableHardcodeCheck": true,
        "title": "Məntiqi VƏ Operatorunun Sazlanması",
        "instruction": "Proqramçı iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
        "description": "Proqramçı regex iki məntiqi dəyəri birləşdirərək ümumi nəticəni konsola çıxarmaq istəyir, lakin skript icra olunarkən 'SyntaxError: Unexpected identifier' xətası ilə dayanır. Kodu araşdırın, JavaScript standart məntiqi operatorunu tətbiq edərək xətanı aradan qaldırın və konsola true çıxarın.",
        "buggyCode": "let a = true;\nlet b = true;\nconsole.log(a and b);",
        "correctCode": "let a = true;\nlet b = true;\nconsole.log(a && b);",
        "correctOutput": "true",
        "expectedOutput": "true",
        "explanation": "JavaScript-də məntiqi VƏ operatoru 'and' deyil, '&&' simvoludur."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { section3 };
}
console.log('Section 3 built successfully');
