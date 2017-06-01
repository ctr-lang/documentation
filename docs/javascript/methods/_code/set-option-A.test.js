const CTR = require('ctr').js;
const ctr = new CTR();

// set option
ctr.setOption({
  hover: {
    duration: '10s'
  }
});

// create style
ctr.create('.test', {
  height: '200px',
  hover: {
    height: '400px'
  }
});

const ctrResult = ctr.getResult();

module.exports = {
  res: ctrResult
};
