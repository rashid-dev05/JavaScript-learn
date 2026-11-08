const { SECTIONS_6_9 } = require('../data_sections_6_9.js');

console.log('--- Verifying Two-Tier Architecture for Sections 6 to 9 ---');

let allPassed = true;
let totalTopics = 0;

const expectedTopics = [
  'topic-6-1', 'topic-6-2', 'topic-6-3', 'topic-6-4',
  'topic-7-1', 'topic-7-2', 'topic-7-3', 'topic-7-4',
  'topic-8-1', 'topic-8-2', 'topic-8-3', 'topic-8-4', 'topic-8-5',
  'topic-9-1', 'topic-9-2', 'topic-9-3'
];

const foundTopics = [];

SECTIONS_6_9.forEach(section => {
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
      // Extract deep dive title for logging
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
  console.log('\n🌟 ALL 16 TOPICS STRICTLY SATISFY TWO-TIER ARCHITECTURE CONSTRAINTS! 🌟\n');
} else {
  console.error('\n❌ SOME TOPICS FAILED VERIFICATION!\n');
  process.exit(1);
}
