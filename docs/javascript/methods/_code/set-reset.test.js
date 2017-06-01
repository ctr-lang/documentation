const CTR = require('ctr').js;
const ctr = new CTR();

ctr.setVariable({
  width: '444px'
});

ctr.setOption({
  hover: {
    ease: 'ease-in'
  }
});

ctr.setTransform(function (css) {
  return css.toUpperCase();
});

ctr.setClass('Sorcery', {
  $$: {
    width: '200px'
  },
  'hover-on': {
    width: '$width$'
  }
});

// will have above "set's" applied
ctr.create('.test-1', {
  extend: 'Sorcery'
});

// reset all
ctr.setReset();

// will not have "set's" applied
ctr.create('.test-2', {
  extend: 'Sorcery'
});

const ctrResult = ctr.getResult();
// .TEST-1:HOVER {
//   WIDTH: 444PX;
//   TRANSITION-DELAY: 0S;
//   TRANSITION-DURATION: 0.5S;
//   TRANSITION-PROPERTY: WIDTH;
//   TRANSITION-TIMING-FUNCTION: EASE-IN;
// }
// .test-2:hover {
//   width: 200px;
//   transition-delay: 0s;
//   transition-duration: 0.5s;
//   transition-property: width;
//   transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
// }

module.exports = {
  res: ctrResult
};

