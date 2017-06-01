<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="vertical-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'vertical' false
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
  left: auto;
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
    align: [vertical, false]
```

