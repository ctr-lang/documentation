const CTR = require('ctr').js;
const ctr = new CTR();

// set
ctr.setVariable({
  width: '200px'
});

ctr.create('.test-1', {
  width: '$width$'
});

// set once overwrite var
ctr.setVariable({
  width: '400px'
}, {once: true});

ctr.create('.test-2', {
  width: '$width$'
});

// .test-3 === .test-1
ctr.create('.test-3', {
  width: '$width$'
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   width: 400px;
// }
// .test-3 {
//   width: 200px;
// }

module.exports = {
  res: ctrResult
};
