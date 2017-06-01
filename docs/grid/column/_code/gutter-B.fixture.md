<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter-B"></div>

<!-- stylus -->
```fixture
// shorthand
ctr('.test', {
  grid: {
    // no gutter
    // fraction cycle gutter flex
    column: '1/3' default 0
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3);
}
.test:nth-child(1n) {
  margin-right: 0;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
# shorthand
.test:
  grid:
    # no gutter
    # fraction cycle gutter flex
    column: [1/3, default, 0]
```

