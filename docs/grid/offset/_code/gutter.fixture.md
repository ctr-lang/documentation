<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    offset: '1/2' default '60px'
  }
})
```

<!-- css -->
```fixture
.test {
  margin-left: calc(99.9% * (-1 / 2 * -1) - (60px - 60px * (-1 / 2 * -1)) + 60px) !important;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    offset: [1/2, default, 60px]
```

