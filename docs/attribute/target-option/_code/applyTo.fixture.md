<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="applyTo"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: '[class$="test"]'
      applyTo: '.applyToTest'
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
.test > div[class$="test"] .applyToTest {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    option:
      key: '[class$="test"]'
      applyTo: .applyToTest
    font-size: 2em
```

