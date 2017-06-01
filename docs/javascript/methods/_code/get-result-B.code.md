<div data-size="480"></div>
```js
// Example: raw
ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

//Returns the raw Set
let ctrResult = ctr.getResult({
  raw: true
});

// To convert the Set into a String
ctrResult = [...ctrResult.values()].join('');
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }
```

```js
// Example: reset
ctr.create('.test-1', {
  width: '200px'
});

const ctrResOne = ctr.getResult({reset: false});
// .test-1 {
//   width: 200px;
// }

ctr.create('.test-2', {
  height: '400px'
});

const ctrResTwo = ctr.getResult({reset: false});
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }

```
<div class="cf"></div>
