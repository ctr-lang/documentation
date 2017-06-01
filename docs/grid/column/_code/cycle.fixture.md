<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="cycle"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    column: {
      fraction: '1/3'
      cycle: '2'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:nth-child(1n) {
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(2n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    column:
      fraction: 1/3
      cycle: 2
```

