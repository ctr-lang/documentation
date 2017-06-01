<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="up"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    offset: '1/3' 'column'
  }
})
```

<!-- css -->
```fixture
.test {
  margin-bottom: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3) + (30px * 2)) !important;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    offset: [1/3, column]
```

