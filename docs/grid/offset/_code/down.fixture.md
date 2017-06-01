<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="down"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    offset: '-1/3' 'column'
  }
})
```

<!-- css -->
```fixture
.test {
  margin-top: calc(99.9% * (-1 / 3 * -1) - (30px - 30px * (-1 / 3 * -1)) + 30px) !important;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    offset: [-1/3, column]
```

