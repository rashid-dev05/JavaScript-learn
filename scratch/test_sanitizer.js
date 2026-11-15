function sanitizeCodeForExecution(rawCode) {
    if (typeof rawCode !== 'string') return '';
    return rawCode
        // 1. Görünməz və sıfır enli idarəetmə simvollarının silinməsi
        .replace(/[\u200B-\u200D\uFEFF\u200E\u200F]/g, '')
        // 2. Qırılmayan və xüsusi tipoqrafik boşluqların standart boşluğa çevrilməsi
        .replace(/[\u00A0\u202F\u2000-\u200A]/g, ' ')
        // 3. Proqramlaşdırma liqaturaları və riyazi simvolların ASCII JS tokenlərinə çevrilməsi
        .replace(/\u21D2/g, '=>') // ⇒
        .replace(/\u2A7E/g, '>=') // ⩾
        .replace(/\u2265/g, '>=') // ≥
        .replace(/\u2A7D/g, '<=') // ⩽
        .replace(/\u2264/g, '<=') // ≤
        .replace(/\u2260/g, '!==') // ≠
        // 4. Tipografik qoşa dırnaqların standart " dırnağına çevrilməsi
        .replace(/[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g, '"')
        // 5. Tipografik tək dırnaqların standart ' dırnağına çevrilməsi
        .replace(/[\u2018\u2019\u201A\u201B\u2032]/g, "'");
}

const input = 'const sum = (a, b) \u21D2 a + b;\nif (paramA \u2A7E 10 && paramB \u2A7D 5 && paramC \u2260 null) {\n  console.log(\u201CHello World!\u201D);\n}\nconst name = \u2018Əli\u2019;\n\u00A0let\u00A0x\u200B=\u00A05;';
const sanitized = sanitizeCodeForExecution(input);
console.log('Sanitized code:\n' + sanitized);

try {
  new Function('paramA', 'paramB', 'paramC', sanitized);
  console.log('JS syntax validation: 100% SUCCESSFUL VALID JAVASCRIPT!');
} catch (e) {
  console.log('JS syntax validation failed:', e.message);
}
