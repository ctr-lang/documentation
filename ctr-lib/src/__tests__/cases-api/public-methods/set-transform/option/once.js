const CTR  = require('ctr').js;
const ctr  = new CTR();

const base = {
  width: '200px',
  height: '400px',
  background: 'red'
};

//init
ctr.create('.test-1', base);

//lets get serious about css
ctr.setTransform(function (res) {
  return res.toUpperCase();
}, {once: true});

//should be uppercase
ctr.create('.test-2', base);

//should not be uppercase === .test-1
ctr.create('.test-3', base);

const res = ctr.getRes();

module.exports = {
  res: res
};
