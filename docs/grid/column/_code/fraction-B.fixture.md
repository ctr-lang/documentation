<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="fraction-B"></div>

<!-- stylus -->
```fixture
// shorthand
ctr('.test', {
  grid: {
    // fraction cycle gutter flex
    column: '1/6'
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 6 - (30px - 30px * 1 / 6));
}
.test:nth-child(1n) {
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(6n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
# shorthand
.test:
  grid:
    # fraction cycle gutter flex
    column: 1/6
```

