
<div data-size="180"></div>
```js
// String
module.exports = function (ctr, requireWatch) {
  ctr = requireWatch('./box-style.ctr.js');
  ctr = requireWatch('./circle-style.ctr.js');
  // get the ctr results
  const myCSS = ctr.getResult();
  return myCSS;
};
```

```js
// [String, String]
module.exports = function (ctr, requireWatch) {
  ctr = requireWatch(['./box-style.ctr.js', './circle-style.ctr.js']);
  // get the ctr results
  const myCSS = ctr.getResult();
  return myCSS;
};
```
<div class="cf"></div>
