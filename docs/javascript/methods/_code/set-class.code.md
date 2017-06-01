<div data-size="520"></div>
```js
// (String, Object) -> (<class>, <data>)
ctr.setClass('Gettin', {
  width: '200px'
});
ctr.setClass('Crazy', {
  height: '400px'
});


ctr.create('.test', {
  extend: 'Gettin',
  before: {
    extend: 'Crazy'
  }
});

const ctrResult = ctr.getResult();
// .test {
//   width: 200px;
// }
// .test::before {
//   height: 400px;
// }

```

```js
// (Object) -> ({<class>: <data>})
ctr.setClass({
  MakeIt: {
    width: '200px'
  },
  Funky: {
    height: '400px'
  }
});

ctr.create('.test', {
  extend: 'MakeIt',
  before: {
    extend: 'Funky'
  }
});

const ctrResult = ctr.getResult();
// .test {
//   width: 200px;
// }
// .test::before {
//   height: 400px;
// }

```
<div class="cf"></div>
