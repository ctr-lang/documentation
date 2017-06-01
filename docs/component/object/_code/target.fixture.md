<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="target"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  components: {
    common: {
      option: {
        // only merges with "two"
        target: '.two'
      }
      font-size: 2em
      height: 400px
    }
    '.one': {
      opacity: 1
    }
    '.two': {
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
.test > .one {
  opacity: 1;
}
.test > .two {
  opacity: 0.5;
  height: 400px;
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  components:
    common:
      option:
        # only merges with "two"
        target: .two
      font-size: 2em
      height: 400px
    .one:
      opacity: 1
    .two:
      opacity: 0.5
```

