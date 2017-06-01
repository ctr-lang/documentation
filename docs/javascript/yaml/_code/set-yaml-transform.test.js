const CTR = require('ctr').js;
const ctr = new CTR();

//set transform
ctr.setYamlTransform(function (yamlObj) {
  // uppercase selector key
  return Object.keys(yamlObj).reduce(function (prv, key) {
    prv[key.toUpperCase()] = yamlObj[key];
    return prv;
  }, {});
});

//process yaml file
ctr.yaml('./test-data.yml');

const ctrResult = ctr.getResult();
// .TEST-DATA {
//   color: #f00;
//   width: 200px;
// }

module.exports = {
  res: ctrResult
};
