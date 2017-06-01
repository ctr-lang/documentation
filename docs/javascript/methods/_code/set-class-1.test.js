const CTR = require('ctr').js;
const ctr = new CTR();

// (String, Object) -> (<class>, <data>)
ctr.setClass('Gettin', {
  width: '200px'
});
ctr.setClass('Crazy', {
  height: '400px'
});

ctr.create('.test', {
  extend: 'Gettin',
  before: {
    extend: 'Crazy'
  }
});

const ctrResult = ctr.getResult();
// .test {
//   width: 200px;
// }
// .test::before {
//   height: 400px;
// }

module.exports = {
  res: ctrResult
};
