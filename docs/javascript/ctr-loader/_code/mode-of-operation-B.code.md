<div data-size="230"></div>
```js
// index.js (webpack entry point)
require('./styles.ctr.js');

```

```js
// styles.ctr.js
module.exports = function (ctr) {
  // create the style via ctr
  ctr.create({
    background: 'red'
  });
  // get the ctr results
  const myCSS = ctr.getResult();
  return myCSS;
};
```
<div class="cf"></div>
