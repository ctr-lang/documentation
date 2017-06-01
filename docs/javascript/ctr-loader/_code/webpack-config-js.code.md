
<div data-size="390"></div>
```js
// Default webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.ctr(\.js|\.yml|\.yaml)$/,
      use: ['style-loader', 'css-loader', 'ctr-loader']
    }]
  }
  // ...
};
```


```js
// ExtractTextPlugin webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.ctr(\.js|\.yml|\.yaml)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'ctr-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
  // ...
};
```
<div class="cf"></div>
