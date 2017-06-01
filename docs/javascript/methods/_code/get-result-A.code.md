<div data-size="380"></div>
```js
ctr.create('.test-1', {
  width: '200px'
});

ctr.create('.test-2', {
  height: '400px'
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }

```

```js
ctr.create('.test-1', {
  width: '200px'
});

const ctrResOne = ctr.getResult();
// .test-1 {
//   width: 200px;
// }

ctr.create('.test-2', {
  height: '400px'
});

const ctrResTwo = ctr.getResult();
// .test-2 {
//   height: 400px;
// }

```
<div class="cf"></div>

