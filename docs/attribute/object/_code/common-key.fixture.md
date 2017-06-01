<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-key"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attributes: {
    // merged into each attribute
    common: {
      option: {
        key: 'class*'
      }
      font-size: 2em
    }
    'te': {
      background: teal
    }
    'artisin': {
      background: red
    }
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="te"] {
  font-size: 2em;
  background: #008080;
}
.test > div[class*="artisin"] {
  font-size: 2em;
  background: #f00;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attributes:
    # merged into each attribute
    common:
      option:
        key: class*
      font-size: 2em
    te:
      background: teal
    artisin:
      background: red
```

