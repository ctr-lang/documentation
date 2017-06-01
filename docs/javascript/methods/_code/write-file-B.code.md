<div data-size="200"></div>
```js
ctr.create('.test', {
  width: '200px'
});

// write file, custom comment
ctr.writeFile({
  comment: '/*My custom comment, yo!*/'
});
```

```css
/*My custom comment, yo!*/


.test {
  width: 200px;
}
```
<div class="cf"></div>

