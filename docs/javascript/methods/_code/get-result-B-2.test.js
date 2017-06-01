const CTR = require('ctr').js;
const ctr = new CTR();

// Example: reset
ctr.create('.test-1', {
  width: '200px'
});

const ctrResOne = ctr.getResult({reset: false});
// .test-1 {
//   width: 200px;
// }

ctr.create('.test-2', {
  height: '400px'
});

const ctrResTwo = ctr.getResult({reset: false});
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }

const ctrResult = ctrResOne + ctrResTwo;

module.exports = {
  res: ctrResult
};
