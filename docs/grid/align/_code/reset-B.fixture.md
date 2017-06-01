<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="reset-B"></div>

<!-- stylus -->
```fixture
// non-flex
ctr('.test', {
  grid: {
    align: 'reset' false
  }
})
```

<!-- css -->
```fixture
.test {
  position: static;
}
.test > * {
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  position: static;
  transform: translate(0, 0);
}
```

<!-- yaml -->
```fixture
# non-flex
.test:
  grid:
    align: [reset, false]
```

