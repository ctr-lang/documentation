<div class="fw" data-size="480"></div>
```js
// Default webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.ctr(\.js|\.yml|\.yaml)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'ctr-loader'
        option: {
          newInstance: false,
          context: 'special.context.path',
          warning: true
        }
      }]
    }]
  }
  // ...
};
```
<div class="cf"></div>


