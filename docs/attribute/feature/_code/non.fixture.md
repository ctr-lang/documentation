<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="non"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    width: 300px
    // non
    non-span: {
      font-size: 10px
    }
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  width: 300px;
}
.test > div[data-role="test"]:not(span) {
  font-size: 10px;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    width: 300px
    # non
    non-span:
      font-size: 10px
```

