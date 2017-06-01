const CTR = require('ctr').js;
const ctr = new CTR();

// NOTE: Processed through the YAML parser, white space sensitive
// (String, Template Literal) -> (<selector>, <data>)
ctr.create('.test-1', `
  width: 200px
`);

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }

module.exports = {
  res: ctrResult
};

