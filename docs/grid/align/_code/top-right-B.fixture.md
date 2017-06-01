<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="top-right-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'top-right' false
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
  right: 0;
  left: auto;
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
    align: [top-right, false]
```

