<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="down"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    move: '-1/3' 'column'
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
  top: calc(99.9% * -1 / 3 - (30px - 30px * -1 / 3) + 30px);
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    move: [-1/3, column]
```

