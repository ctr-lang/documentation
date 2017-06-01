<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="global-variable"></div>

<!-- stylus -->
```fixture
// sets global variable
ctrSetVariable({
  width: 400px
})

ctrSetClass('Box', {
  $$: {
    // overwritten by above global variable
    width: 200px
    height: 400px
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
  width: 400px;
  height: 400px;
}
```

<!-- yaml -->
```fixture
# sets global variable
ctr:::setVariable:
  width: 400px

ctr:::setClass:Box:
  $$:
    # overwritten by above global variable
    width: 200px
    height: 400px
  width: $width$
  height: $height$

.test:
  extend: Box
```

