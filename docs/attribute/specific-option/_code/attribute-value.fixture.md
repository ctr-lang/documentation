<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="attribute-value"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: 'class*'
      value: 'te'
    }
    font-size: 2em
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
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    option:
      key: class*
      value: te
    font-size: 2em
```

