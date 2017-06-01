<div data-size="700"></div>
```js
// (String, Object) -> (<selector>, <data>)
ctr.create('.test-1', {
  width: '200px'
});

// Option parameter
ctr.create('.test-2', {
  height: '400px',
  'hover-on': {
    color: 'red'
  }
}, {
  hover: {
    duration: '10s',
    ease: 'ease-in'
  }
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }
// .test-2 {
//   height: 400px;
// }
// .test-2:hover {
//   color: #f00;
//   transition-delay: 0s;
//   transition-duration: 10s;
//   transition-property: color;
//   transition-timing-function: ease-in;
// }


```

```js
// (Object) -> ({<selector>: <data>})
ctr.create({
  // selector
  '.test-1': {
    width: '200px',
    // stylus alpha built-in function
    background: 'alpha(red, 20%)'
  }
});

// Two separate styles, processed in the same ctr set instance
ctr.create({
  '.test-2': {
    height: '400px'
  },
  '.test-3': {
    height: '800px'
  }
});

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
//   background: rgba(255,0,0,0.2);
// }
// .test-2 {
//   height: 400px;
// }
// .test-3 {
//   height: 800px;
// }
```
<div class="cf"></div>
