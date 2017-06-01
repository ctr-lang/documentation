<div data-size="460"></div>
```js
// set option only once
ctr.setOption({
  global: {
    sort: '-len'
  }
}, {once: true});

// sorted by '-len'
ctr.create('.test-1', {
  height: '200px',
  background: 'red'
});

//revets back to `len` sort
ctr.create('.test-2', {
  height: '200px',
  background: 'red'
});

const ctrResult = ctr.getResult();

```

```css
/* ctrResult */

.test-1 {
  background: #f00;
  height: 200px;
}
.test-2 {
  height: 200px;
  background: #f00;
}
```
<div class="cf"></div>
