<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="true-value"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attributes: {
    common: {
      option: {
        key: 'class*'
      }
      font-size: 2em
      height: 400px
    }
    one: {
      opacity: 1
    }
    // inherits common
    two: true
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="one"] {
  opacity: 1;
  height: 400px;
  font-size: 2em;
}
.test > div[class*="two"] {
  height: 400px;
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attributes:
    common:
      option:
        key: class*
      font-size: 2em
      height: 400px
    one:
      opacity: 1
    # inherits common
    two: true
```

