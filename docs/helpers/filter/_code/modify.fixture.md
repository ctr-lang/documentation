<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="modify"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  filter: {
    preset: '1977'
    // remove
    brightness: false
    // modify
    contrast: 0.888
    // new
    grayscale: 50%

    // element modify
    before: {
      width: 25%
    }
    after: {
      width: 25%
    }
    // target component modify
    component: {
      option: {
        key: 'svg'
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  position: relative;
  filter: contrast(0.888) grayscale(50%) saturate(1.3);
}
.test svg {
  z-index: 1;
  width: 100%;
}
.test::before {
  top: 0;
  left: 0;
  width: 25%;
  z-index: 2;
  height: 100%;
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
}
.test::after {
  top: 0;
  left: 0;
  width: 25%;
  z-index: 3;
  height: 100%;
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
  mix-blend-mode: screen;
  background: rgba(243,106,188,0.3);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  filter:
    preset: '1977'
    # remove
    brightness: false
    # modify
    contrast: 0.888
    # new
    grayscale: 50%
    # element modify
    before:
      width: 25%
    after:
      width: 25%
    # target component modify
    component:
      option:
        key: svg
```

