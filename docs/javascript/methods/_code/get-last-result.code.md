<div data-size="480"></div>
```js
ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

const ctrResOne = ctr.getLastResult();
// .test-2 {
//   height: 400px;
// }

// Still returns both styles
const ctrResTwo = ctr.getResult();
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

ctr.create('.test-2', {
  height: '400px'
});

const ctrResOne = ctr.getLastResult({
  reset: true
});
// .test-2 {
//   height: 400px;
// }

// .test-2 will not be in the return
const ctrResTwo = ctr.getResult();
// .test-1 {
//   width: 200px;
// }

```
<div class="cf"></div>

