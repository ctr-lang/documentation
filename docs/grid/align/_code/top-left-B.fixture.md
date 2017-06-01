<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="top-left-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'top-left' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
}
.test > * {
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(0, 0);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [top-left, false]
```

