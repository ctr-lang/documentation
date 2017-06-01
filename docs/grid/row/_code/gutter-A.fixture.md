<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    // fraction gutter flex
    row: {
      fraction: '1/3'
      gutter: 10px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 10px;
  height: calc(99.9% * 1 / 3 - (10px - 10px * 1 / 3));
}
.test:last-child {
  margin-bottom: 0;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    # fraction gutter flex
    row:
      fraction: 1/3
      gutter: 10px
```

