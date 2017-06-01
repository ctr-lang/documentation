<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="bottom-left-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'bottom-left' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
}
.test > * {
  left: 0;
  bottom: 0;
  top: auto;
  right: auto;
  position: absolute;
  transform: translate(-50%, 0);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [bottom-left, false]
```

