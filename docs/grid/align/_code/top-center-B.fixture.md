<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="top-center-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'top-center' false
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
  left: 50%;
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
    align: [top-center, false]
```

