<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="override"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: '[class$="test"]'
      override: '#override'
    }
    font-size: 3em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
#override {
  font-size: 3em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    option:
      key: '[class$="test"]'
      override: '#override'
    font-size: 3em
```

