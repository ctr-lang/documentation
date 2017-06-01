const CTR = require('ctr').js;
const ctr = new CTR();

// (Object) -> ({<class>: <data>})
ctr.setClass({
  MakeIt: {
    width: '200px'
  },
  Funky: {
    height: '400px'
  }
});

ctr.create('.test', {
  extend: 'MakeIt',
  before: {
    extend: 'Funky'
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
