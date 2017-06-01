<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="key"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: '[class*="te"]'
    }
    font-size: 1.5em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="te"] {
  font-size: 1.5em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    option:
      key: '[class*="te"]'
    font-size: 1.5em
```

