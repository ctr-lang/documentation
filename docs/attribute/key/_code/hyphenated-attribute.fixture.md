<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="hyphenated-attribute"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  'attribute-class*="coffee"': {
    background: red
    font-size: 1.5em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="coffee"] {
  background: #f00;
  font-size: 1.5em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute-class*="coffee":
    background: red
    font-size: 1.5em
```

