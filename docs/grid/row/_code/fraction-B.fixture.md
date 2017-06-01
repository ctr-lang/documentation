<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="fraction-B"></div>

<!-- stylus -->
```fixture
// shorthand
ctr('.test', {
  grid: {
    // fraction gutter flex
    row: '1/5' 0.75vh
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0.75vh;
  height: calc(99.9% * 1 / 5 - (0.75vh - 0.75vh * 1 / 5));
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
    # fraction gutter flex
    row: [1/5, 0.75vh]
```

