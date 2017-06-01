const CTR = require('ctr').js;
const ctr = new CTR();

//get/process yaml
ctr.yaml('./style-evolution-yaml.test.yml');

const ctrResult = ctr.getResult();

module.exports = {
  res: ctrResult
};

