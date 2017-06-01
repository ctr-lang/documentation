<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="two-five-column-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    // fraction cycle gutter flex
    column: '2/5'
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 2 / 5 - (30px - 30px * 2 / 5));
}
.test:nth-child(1n) {
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(5n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    # fraction cycle gutter flex
    column: 2/5
```

