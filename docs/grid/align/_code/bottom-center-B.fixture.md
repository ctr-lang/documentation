<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="bottom-center-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'bottom-center' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
}
.test > * {
  bottom: 0;
  left: 50%;
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
    align: [bottom-center, false]
```

