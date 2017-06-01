<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="bottom-right-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'bottom-right' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
}
.test > * {
  right: 0;
  bottom: 0;
  top: auto;
  left: auto;
  position: absolute;
  transform: translate(0, 0);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [bottom-right, false]
```

