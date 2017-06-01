<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="horizontal-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'horizontal' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
}
.test > * {
  left: 50%;
  top: auto;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(-50%, 0);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [horizontal, false]
```

