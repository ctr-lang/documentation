<div data-size="300"></div>
```js
// make a design statement
ctr.setTransform(function (css) {
  return css.toUpperCase();
});

ctr.create('.test', {
  width: '200px',
  before: {
    content: 'can you even css?'
  }
});

const ctrResult = ctr.getResult();

```

```css
.TEST {
  WIDTH: 200PX;
}
.TEST::BEFORE {
  CONTENT: "CAN YOU EVEN CSS?";
}
```
<div class="cf"></div>
