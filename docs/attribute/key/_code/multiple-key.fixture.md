<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[class*="kool"]' 'class*="te"'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="kool"] {
  font-size: 1em;
}
.test > div[class*="te"] {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: ['[class*="kool"]', class*="te"]
    font-size: 1em
```

