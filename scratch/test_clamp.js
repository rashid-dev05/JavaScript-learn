console.log('Testing font-size clamp values at different viewports:');
const clamp = (min, val, max, vw) => {
    // 1rem = 16px, so val vw in rem is (val * vw / 100) / 16
    const preferredRem = (val * vw / 100) / 16;
    return Math.min(max, Math.max(min, preferredRem));
};

[360, 375, 390, 412, 430, 768, 1024].forEach(w => {
    const titleRem = clamp(1.2, 5.2, 1.75, w);
    const metaRem = clamp(0.65, 2.4, 0.74, w);
    const stampRem = clamp(0.68, 2.5, 0.78, w);
    const bodyRem = clamp(0.78, 3.4, 0.9, w);
    console.log(`Viewport ${w}px -> Title: ${titleRem.toFixed(2)}rem (${(titleRem*16).toFixed(1)}px), Meta: ${metaRem.toFixed(2)}rem (${(metaRem*16).toFixed(1)}px), Stamp: ${stampRem.toFixed(2)}rem (${(stampRem*16).toFixed(1)}px), Body: ${bodyRem.toFixed(2)}rem (${(bodyRem*16).toFixed(1)}px)`);
});
