// Estimate width of text in monospace font
// In monospace, each character is ~0.6em wide.
const monoCharWidth = (fontSizePx) => fontSizePx * 0.6;

const viewports = [360, 375, 390, 412, 430];

viewports.forEach(w => {
    // Card padding is clamp(0.75rem, 3vw, 1.15rem)
    // On 360px: 3% of 360 = 10.8px, min is 0.75rem = 12px.
    const cardPaddingX = Math.max(12, Math.min(18.4, (3 * w / 100))) * 2;
    // Outer section padding (app-container / main-content has padding ~12px each side)
    const containerPaddingX = 24;
    const availableWidth = w - containerPaddingX - cardPaddingX;

    const metaFontSize = 10.5; // ~0.66rem
    const charW = monoCharWidth(metaFontSize);
    const idText = "Sertifikat ID: JS-2026-BOOTCAMP"; // 31 chars
    const dateText = "Verilmə Tarixi: 14 Noyabr 2026"; // 30 chars
    const metaWidth = Math.max(idText.length, dateText.length) * charW;

    const stampFontSize = 11; // ~0.68rem
    const stampText = "✓ TƏSDİQLƏNDİ"; // 13 chars
    const stampCharW = monoCharWidth(stampFontSize);
    const stampPaddingX = 22; // 0.35rem 0.7rem * 2 + border
    const stampWidth = (stampText.length * stampCharW) + stampPaddingX;

    const gap = 8;
    const totalFooterWidth = metaWidth + gap + stampWidth;

    console.log(`Viewport: ${w}px | Avail: ${availableWidth.toFixed(0)}px | Meta: ${metaWidth.toFixed(0)}px | Stamp: ${stampWidth.toFixed(0)}px | Total: ${totalFooterWidth.toFixed(0)}px | Diff: ${(availableWidth - totalFooterWidth).toFixed(0)}px`);
});
