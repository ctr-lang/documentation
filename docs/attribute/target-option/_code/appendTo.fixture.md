<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="appendTo"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: '[class$="test"]'
      appendTo: ':first-child'
    }
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class$="test"]:first-child {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    option:
      key: '[class$="test"]'
      appendTo: :first-child
    font-size: 1em
```

