const CTR = require('ctr').js;
const ctr = new CTR();

ctr.create('.test', {
  size: '200px',
  'hover-on': {
    color: 'red',
    'background-color': 'green'
  }
});

const ctrResult = ctr.getResult();

module.exports = {
  res: ctrResult
};

