<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="two-five-rowA"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    row: '2/5'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 30px;
  height: calc(99.9% * 2 / 5 - (30px - 30px * 2 / 5));
}
.test:last-child {
  margin-bottom: 0;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    row: 2/5
```

