const CTR = require('ctr').js;
const ctr = new CTR();

// (String, Object) -> (<selector>, <data>)
ctr.create('.test-1', {
  width: '200px'
});

// Option parameter
ctr.create('.test-2', {
  height: '400px',
  'hover-on': {
    color: 'red'
  }
}, {
  hover: {
    duration: '10s',
    ease: 'ease-in'
  }
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }
// .test-2:hover {
//   color: #f00;
//   transition-delay: 0s;
//   transition-duration: 10s;
//   transition-property: color;
//   transition-timing-function: ease-in;
// }

module.exports = {
  res: ctrResult
};

