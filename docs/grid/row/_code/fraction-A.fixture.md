<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="fraction-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    row: {
      fraction: '1/3'
      gutter: 0.75vh
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0.75vh;
  height: calc(99.9% * 1 / 3 - (0.75vh - 0.75vh * 1 / 3));
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
      gutter: 0.75vh
```

