<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="true-value"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  nons: {
    common: {
      font-size: 2em
      height: 400px
    }
    '.one': {
      opacity: 1
    }
    // inherits common
    '.two': true
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.one) {
  opacity: 1;
  height: 400px;
  font-size: 2em;
}
.test:not(.two) {
  height: 400px;
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  nons:
    common:
      font-size: 2em
      height: 400px
    .one:
      opacity: 1
    # inherits common
    .two: true
```

