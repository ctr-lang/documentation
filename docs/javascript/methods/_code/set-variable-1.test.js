const CTR = require('ctr').js;
const ctr = new CTR();

// set
ctr.setVariable({
  width: '200px',
  height: '400px',
  // nesting is okie-doke
  mySecretColor: {
    sauce: '#eee'
  }
});

ctr.create('.test-1', {
  width: '$width$',
  height: '$height$',
  color: '$mySecretColor.sauce$'
});

ctr.create('.test-2', {
  width: '$width$',
  height: '$height$',
  color: '$mySecretColor.sauce$'
});

const ctrResult = ctr.getResult();
// .test-1 {
//   color: #eee;
//   width: 200px;
//   height: 400px;
// }
// .test-2 {
//   color: #eee;
//   width: 200px;
//   height: 400px;
// }

module.exports = {
  res: ctrResult
};
