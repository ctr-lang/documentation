const CTR = require('ctr').js;
const ctr = new CTR();

// Example: raw
ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

//Returns the raw Set
let ctrResult = ctr.getResult({
  raw: true
});

// To convert the Set into a String
ctrResult = [...ctrResult.values()].join('');
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }

module.exports = {
  res: ctrResult
};
