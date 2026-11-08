const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream('C:\\Users\\rashi\\.gemini\\antigravity\\brain\\5134e94c-2345-4cac-b9f7-a3694aabfe38\\.system_generated\\logs\\transcript_full.jsonl'),
  crlfDelay: Infinity
});
rl.on('line', (line) => {
  if (!line.trim()) return;
  const obj = JSON.parse(line);
  if (obj.step_index >= 9575 && obj.step_index <= 9600 && obj.content && obj.source === 'MODEL' && obj.type === 'PLANNER_RESPONSE') {
    if (obj.content.length > 200) {
      console.log('FINAL MODEL RESPONSE AT STEP', obj.step_index);
      console.log(obj.content.substring(0, 1000));
    }
  }
});
