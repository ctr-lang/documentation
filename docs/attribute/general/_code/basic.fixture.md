<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test > a', {
  width: 200px
  attribute: {
    key: '[href^="#"]'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test > a {
  width: 200px;
}
.test > a[href^="#"] {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test > a:
  width: 200px
  attribute:
    key: '[href^="#"]'
    font-size: 1em
```

