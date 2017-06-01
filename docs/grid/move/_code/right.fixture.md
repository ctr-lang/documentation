<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="right"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    move: '-1/3'
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
  left: calc(99.9% * -1 / 3 - (30px - 30px * -1 / 3) + 30px);
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    move: -1/3
```

