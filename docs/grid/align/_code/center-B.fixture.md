<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="center-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'center' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
}
.test > * {
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(-50%, -50%);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [center, false]
```

