<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="three-rowA"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    row: '1/3'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  flex: 0 0 auto;
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
    row: 1/3
```

