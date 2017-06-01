<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    move: '1/2' default 60px
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
  left: calc(99.9% * 1 / 2 - (60px - 60px * 1 / 2) + 60px);
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    move: [1/2, default, 60px]
```

