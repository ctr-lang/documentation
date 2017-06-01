<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="center-right-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'center-right' false
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
  top: 50%;
  left: auto;
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
    align: [center-right, false]
```

