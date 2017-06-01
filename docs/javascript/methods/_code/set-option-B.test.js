const CTR = require('ctr').js;
const ctr = new CTR();

// set option only once
ctr.setOption({
  global: {
    sort: '-len'
  }
}, {once: true});

// sorted by '-len'
ctr.create('.test-1', {
  height: '200px',
  background: 'red'
});

//revets back to `len` sort
ctr.create('.test-2', {
  height: '200px',
  background: 'red'
});

const ctrResult = ctr.getResult();

module.exports = {
  res: ctrResult
};
