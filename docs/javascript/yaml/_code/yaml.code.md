<div data-size="325" class="syntax"></div>
```js
const ctr = new CTR();

// Absolute or relative file path
ctr.yaml('./<filePath>.yml');

const ctrResult = ctr.getResult();
```

```js
const ctr = new CTR();

// All other ctr methods work with yaml
// Set's all hover states to have duration of 2s
ctr.setOption({
  hover: {
    duration: '2s'
  }
});

// Any hover states will have a duration of 2s
ctr.yaml('./<filePath>.yml');

const ctrResult = ctr.getResult();
```
<div class="cf"></div>

