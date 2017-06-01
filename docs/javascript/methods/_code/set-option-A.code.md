<div data-size="410"></div>
```js
// set option
ctr.setOption({
  hover: {
    duration: '10s'
  }
});

// create style
ctr.create('.test', {
  height: '200px',
  hover: {
    height: '400px'
  }
});

const crtResult = ctr.getResult();

```

```css
/* ctrResult */

.test {
  height: 200px;
}
.test:hover {
  height: 400px;
  transition-delay: 0s;
  transition-duration: 10s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s;
  transition-duration: 10s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
