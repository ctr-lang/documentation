<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="omit"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  elements: {
    common: {
      content: false
      position: absolute
      top: 0
    }
    before: {
      size: 100px
    }
    after: {
      option: {
        // omits top
        omit: 'top'
      }
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
  top: 0;
  width: 100px;
  content: "";
  height: 100px;
  position: absolute;
}
.test::after {
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
      content: false
      position: absolute
      top: 0
    before:
      size: 100px
    after:
      option:
        # omits top
        omit: top
      size: 100px
      bottom: 0
```

