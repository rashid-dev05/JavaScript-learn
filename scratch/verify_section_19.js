const fs = require('fs');
const { SECTIONS_19 } = require('./build_section_19.js');

const app = fs.readFileSync('app.js', 'utf8');
const startIdx = app.indexOf('function preprocessModuleCode');
const endIdx = app.indexOf('function runJavaScript(');
const mockBlock = app.slice(startIdx, endIdx);

const factory = new Function(`
${mockBlock}
return { runJavaScriptDirect, preprocessModuleCode };
`);
const runner = factory();

const cleanStr = (s) => (s || '').replace(/\r\n/g, '\n').trim();

async function testSection19() {
  console.log('Testing Section 19...');
  let passCount = 0;
  for (const topic of SECTIONS_19[0].topics) {
    console.log(`\n--- Topic: ${topic.id} - ${topic.title}`);
    
    // Check Two-Tier format
    const hasTip = topic.theory.includes('class="tip-box"');
    const hasHr = topic.theory.includes('<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">');
    const hasDeepDive = topic.theory.includes('<h4>🔬 Dərinləşmə:');
    console.log(`  Two-Tier checks: tip-box: ${hasTip}, hr: ${hasHr}, deep-dive: ${hasDeepDive}`);
    if (!hasTip || !hasHr || !hasDeepDive) {
      throw new Error(`Two-tier check failed for ${topic.id}`);
    }

    // Test Exercise
    const ex = topic.exercise;
    const resEx = await runner.runJavaScriptDirect(ex.solutionCode);
    const passEx = cleanStr(resEx.output) === cleanStr(ex.expectedOutput);
    console.log(`  Exercise ${ex.id}: ${passEx ? 'PASS' : 'FAIL'}`);
    if (!passEx) {
      console.log('    Expected:', JSON.stringify(ex.expectedOutput));
      console.log('    Got:     ', JSON.stringify(resEx.output));
      if (resEx.error) console.log('    Error:   ', resEx.error);
      throw new Error(`Exercise ${ex.id} failed`);
    }
    passCount++;

    // Test BugFix
    const bf = topic.bugFix;
    const resBf = await runner.runJavaScriptDirect(bf.correctCode);
    const passBf = cleanStr(resBf.output) === cleanStr(bf.correctOutput || bf.expectedOutput);
    console.log(`  BugFix ${bf.id}: ${passBf ? 'PASS' : 'FAIL'}`);
    if (!passBf) {
      console.log('    Expected:', JSON.stringify(bf.correctOutput || bf.expectedOutput));
      console.log('    Got:     ', JSON.stringify(resBf.output));
      if (resBf.error) console.log('    Error:   ', resBf.error);
      throw new Error(`BugFix ${bf.id} failed`);
    }
    passCount++;
  }
  console.log(`\nSection 19 All Passed! (${passCount}/6 tests passed)`);
}

testSection19().catch(err => {
  console.error(err);
  process.exit(1);
});
