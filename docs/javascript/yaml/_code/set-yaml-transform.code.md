<div data-size="475" class="syntax"></div>
```js
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
```

```yaml
# The YAML style data
# filePath: ./test-data.yml
.test-data:
  color: red
  width: 200px
```
<div class="cf"></div>

