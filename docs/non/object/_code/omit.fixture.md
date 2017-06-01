<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="omit"></div>

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
    '.two': {
      option: {
        // omits font-size
        omit: 'font-size'
      }
      opacity: 0.5
    }
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
  opacity: 0.5;
  height: 400px;
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
    .two:
      option:
        # omits font-size
        omit: font-size
      opacity: 0.5
```

