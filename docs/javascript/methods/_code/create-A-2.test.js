const CTR = require('ctr').js;
const ctr = new CTR();

// (Object) -> ({<selector>: <data>})
ctr.create({
  // selector
  '.test-1': {
    width: '200px',
    // stylus alpha built-in function
    background: 'alpha(red, 20%)'
  }
});

// Two separate styles, processed in the same ctr set instance
ctr.create({
  '.test-2': {
    height: '400px'
  },
  '.test-3': {
    height: '800px'
  }
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
//   background: rgba(255,0,0,0.2);
// }
// .test-2 {
//   height: 400px;
// }
// .test-3 {
//   height: 800px;
// }

module.exports = {
  res: ctrResult
};

