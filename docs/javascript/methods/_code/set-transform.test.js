const CTR = require('ctr').js;
const ctr = new CTR();

// make a design statement
ctr.setTransform(function (css) {
  return css.toUpperCase();
});

ctr.create('.test', {
  width: '200px',
  before: {
    content: 'can you even css?'
  }
});

const ctrResult = ctr.getResult();
// .TEST {
//   WIDTH: 200PX;
// }
// .TEST::BEFORE {
//   CONTENT: "CAN YOU EVEN CSS?";
// }

module.exports = {
  res: ctrResult
};
