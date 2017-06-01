const CTR = require('ctr').js;
const ctr = new CTR();

// Example: reset
ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

const ctrResOne = ctr.getLastResult({
  reset: true
});
// .test-2 {
//   height: 400px;
// }

// .test-2 will not be in the return
const ctrResTwo = ctr.getResult();
// .test-1 {
//   width: 200px;
// }

const ctrResult = ctrResOne + ctrResTwo;

module.exports = {
  res: ctrResult
};

