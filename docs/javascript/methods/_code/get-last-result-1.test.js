const CTR = require('ctr').js;
const ctr = new CTR();

ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

const ctrResOne = ctr.getLastResult();
// .test-2 {
//   height: 400px;
// }

// Still returns both styles
const ctrResTwo = ctr.getResult();
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
