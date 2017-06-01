
<div data-size="140"></div>
```js
// index.js (webpack entry point)
require('./styles.ctr.js');

```

```js
// styles.ctr.js
module.exports = function () {
  // the CSS we wish to create
  const myCSS = 'body {background: red;}';
  return myCSS;
};
```
<div class="cf"></div>
