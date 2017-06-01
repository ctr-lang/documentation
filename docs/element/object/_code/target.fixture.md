<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="target"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  elements: {
    common: {
      option: {
        // only merges with "after"
        target: 'after'
      }
      content: false
      position: absolute
      top: 0
    }
    before: {
      size: 100px
    }
    after: {
      size: 100px
      bottom: 0
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  width: 100px;
  height: 100px;
}
.test::after {
  top: 0;
  bottom: 0;
  width: 100px;
  content: "";
  height: 100px;
  position: absolute;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  elements:
    common:
      option:
        # only merges with "after"
        target: after
      content: false
      position: absolute
      top: 0
    before:
      size: 100px
    after:
      size: 100px
      bottom: 0
```

