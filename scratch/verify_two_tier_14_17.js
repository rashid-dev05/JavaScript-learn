const { SECTIONS_14 } = require('../data_section_14.js');
const { SECTIONS_15 } = require('../data_section_15.js');
const { SECTIONS_16 } = require('../data_section_16.js');
const { SECTIONS_17 } = require('../data_section_17.js');

console.log('--- Verifying Two-Tier Architecture for Sections 14 to 17 ---');

const allSections = [
  ...SECTIONS_14,
  ...SECTIONS_15,
  ...SECTIONS_16,
  ...SECTIONS_17
];

let allPassed = true;
let totalTopics = 0;

const expectedTopics = [
  'topic-14-1', 'topic-14-2', 'topic-14-3',
  'topic-15-1', 'topic-15-2', 'topic-15-3',
  'topic-16-1', 'topic-16-2', 'topic-16-3',
  'topic-17-1', 'topic-17-2', 'topic-17-3'
];

const foundTopics = [];

allSections.forEach(section => {
  console.log(`\nSection: ${section.id} - ${section.title}`);
  section.topics.forEach(topic => {
    totalTopics++;
    foundTopics.push(topic.id);
    const theory = topic.theory || '';

    const hasSeparator = theory.includes('<hr style="border:0; border-top:1px solid var(--border-secondary); margin:1.5rem 0;">');
    const hasDeepDiveHeading = theory.includes('<h4>🔬 Dərinləşmə:');
    const hasTipBox = theory.includes('class="tip-box"');
    const hasBugFix = !!topic.bugFix;
    const hasBugFixes = Array.isArray(topic.bugFixes) && topic.bugFixes.length > 0;
    const bugSync = hasBugFix && hasBugFixes && topic.bugFix.id === topic.bugFixes[0].id;
    const exCount = (topic.exercises || []).length;

    let topicOk = true;

    if (!hasSeparator) {
      console.error(`  ❌ [${topic.id}] Missing standard separator <hr style="...">`);
      topicOk = false;
    }
    if (!hasDeepDiveHeading) {
      console.error(`  ❌ [${topic.id}] Missing <h4>🔬 Dərinləşmə: heading`);
      topicOk = false;
    }
    if (!hasTipBox) {
      console.error(`  ❌ [${topic.id}] Missing class="tip-box"`);
      topicOk = false;
    }
    if (!bugSync) {
      console.error(`  ❌ [${topic.id}] bugFix and bugFixes out of sync`);
      topicOk = false;
    }
    if (exCount === 0) {
      console.error(`  ❌ [${topic.id}] No exercises found`);
      topicOk = false;
    }

    if (topicOk) {
      const match = theory.match(/<h4>🔬 Dərinləşmə: ([^<]+)<\/h4>/);
      const deepDiveTitle = match ? match[1] : 'Found';
      console.log(`  ✅ [${topic.id}] ${topic.title} -> 🔬 Dərinləşmə: ${deepDiveTitle} (${exCount} ex, ${topic.bugFixes.length} bugFix)`);
    } else {
      allPassed = false;
    }
  });
});

console.log(`\nTotal topics checked: ${totalTopics} (expected: ${expectedTopics.length})`);
const missingTopics = expectedTopics.filter(id => !foundTopics.includes(id));
const extraTopics = foundTopics.filter(id => !expectedTopics.includes(id));

if (missingTopics.length > 0) {
  console.error('❌ Missing topic IDs:', missingTopics);
  allPassed = false;
}
if (extraTopics.length > 0) {
  console.error('❌ Extra unexpected topic IDs:', extraTopics);
  allPassed = false;
}

if (allPassed) {
  console.log('\n🌟 ALL 12 TOPICS STRICTLY SATISFY TWO-TIER ARCHITECTURE CONSTRAINTS! 🌟\n');
} else {
  console.error('\n❌ SOME TOPICS FAILED VERIFICATION!\n');
  process.exit(1);
}
