<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="hyphenated-extend"></div>

<!-- stylus -->
```fixture
ctrSetClass('Box', {
  $$: {
    width: 200px
    height: 200px
  }
  width: '$width$'
  height: '$height$'
})

ctr('.test', {
  background: blue
  extend-Box: {
    height: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 400px;
  background: #00f;
}
```

<!-- yaml -->
```fixture
ctr:::setClass:Box:
  $$:
    width: 200px
    height: 200px
  width: $width$
  height: $height$

.test:
  background: blue
  extend-Box:
    height: 400px
```

