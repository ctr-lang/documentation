<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="center-left-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'center-left' false
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
  top: 50%;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(0, -50%);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [center-left, false]
```

