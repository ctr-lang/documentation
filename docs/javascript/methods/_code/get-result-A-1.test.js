const CTR = require('ctr').js;

const ctr = new CTR();

ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }

module.exports = {
  res: ctrResult
};

