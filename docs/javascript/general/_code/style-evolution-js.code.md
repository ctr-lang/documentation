<div data-size="310"></div>
```js
ctr.create('.test', {
  size: '200px',
  'hover-on': {
    color: 'red',
    'background-color': 'green'
  }
});

const ctrResult = ctr.getResult();
```

```css
/* ctrResult */

.test {
  width: 200px;
  height: 200px;
}
.test:hover {
  color: #f00;
  transition-delay: 0s, 0s;
  background-color: #008000;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>

