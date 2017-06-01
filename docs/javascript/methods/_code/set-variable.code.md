<div data-size="750"></div>
```js
// set
ctr.setVariable({
  width: '200px',
  height: '400px',
  // nesting is okie-doke
  mySecretColor: {
    sauce: '#eee'
  }
});

ctr.create('.test-1', {
  width: '$width$',
  height: '$height$',
  color: '$mySecretColor.sauce$'
});

ctr.create('.test-2', {
  width: '$width$',
  height: '$height$',
  color: '$mySecretColor.sauce$'
});

const ctrResult = ctr.getResult();
// .test-1 {
//   color: #eee;
//   width: 200px;
//   height: 400px;
// }
// .test-2 {
//   color: #eee;
//   width: 200px;
//   height: 400px;
// }

```

```js
// set
ctr.setVariable({
  width: '200px'
});

ctr.create('.test-1', {
  width: '$width$'
});

// set once overwrite var
ctr.setVariable({
  width: '400px'
}, {once: true});

ctr.create('.test-2', {
  width: '$width$'
});

// .test-3 === .test-1
ctr.create('.test-3', {
  width: '$width$'
});


const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   width: 400px;
// }
// .test-3 {
//   width: 200px;
// }
```
<div class="cf"></div>
