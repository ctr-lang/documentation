<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="true-value"></div>

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
    // inherits common
    after: true
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
  top: 0;
  content: "";
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
    # inherits common
    after: true
```

