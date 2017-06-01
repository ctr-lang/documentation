<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    column: {
      fraction: '1/3'
      gutter: 5vw
    }
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (5vw - 5vw * 1 / 3));
}
.test:nth-child(1n) {
  margin-right: 5vw;
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
.test:
  grid:
    column:
      fraction: 1/3
      gutter: 5vw
```

