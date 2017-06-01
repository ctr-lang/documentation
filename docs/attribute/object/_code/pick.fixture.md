<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="pick"></div>

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
    two: {
      option: {
        // only picks height
        pick: 'height'
      }
      opacity: 0.5
    }
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
  opacity: 0.5;
  height: 400px;
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
    two:
      option:
        # only picks height
        pick: height
      opacity: 0.5
```

