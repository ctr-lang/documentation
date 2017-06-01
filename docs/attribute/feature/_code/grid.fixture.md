<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="grid"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    height: 300px
    // grid
    grid: {
      column: '1/2'
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
  height: 300px;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 2 - (30px - 30px * 1 / 2));
}
.test > div[data-role="test"]:nth-child(1n) {
  margin-right: 30px;
}
.test > div[data-role="test"]:last-child {
  margin-right: 0;
}
.test > div[data-role="test"]:nth-child(2n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    height: 300px
    # grid
    grid:
      column: 1/2
```

