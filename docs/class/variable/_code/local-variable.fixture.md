<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="local-variable"></div>

<!-- stylus -->
```fixture
ctrSetClass('Box', {
  $$: {
    width: '200px'
    height: '400px'
  }
  width: '$width$'
  height: '$height$'
})

ctr('.test', {
  extend: 'Box'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 400px;
}
```

<!-- yaml -->
```fixture
ctr:::setClass:Box:
  $$:
    width: 200px
    height: 400px
  width: $width$
  height: $height$

.test:
  extend: Box
```

