<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter-B"></div>

<!-- stylus -->
```fixture
// shorthand
ctr('.test', {
  grid: {
    // no gutter
    // fraction gutter flex
    row: '1/3' '0'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0;
  height: calc(99.9% * 1 / 3);
}
.test:last-child {
  margin-bottom: 0;
}
```

<!-- yaml -->
```fixture
# shorthand
.test:
  grid:
    # no gutter
    # fraction gutter flex
    row: [1/3, 0]
```

