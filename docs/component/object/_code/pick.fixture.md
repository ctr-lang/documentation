<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="pick"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  components: {
    common: {
      font-size: 2em
      height: 400px
    }
    '.one': {
      opacity: 1
    }
    '.two': {
      option: {
        // only picks height
        pick: 'height'
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
.test > .one {
  opacity: 1;
  height: 400px;
  font-size: 2em;
}
.test > .two {
  opacity: 0.5;
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  components:
    common:
      font-size: 2em
      height: 400px
    .one:
      opacity: 1
    .two:
      option:
        # only picks height
        pick: height
      opacity: 0.5
```

