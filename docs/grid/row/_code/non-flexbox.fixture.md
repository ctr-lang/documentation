<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="non-flexbox"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    row: {
      fraction: '1/3'
      flex: false
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  margin-bottom: 30px;
  height: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:last-child {
  margin-bottom: 0;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    row:
      fraction: 1/3
      flex: false
```

