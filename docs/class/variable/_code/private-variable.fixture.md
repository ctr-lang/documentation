<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="private-variable"></div>

<!-- stylus -->
```fixture
// sets global variable
ctrSetVariable({
  width: 400px
})

ctrSetClass('Box', {
  $$: {
    width: 200px
    height: 400px
  }
  // NOT overwritten by above global variable since private
  width: '_$width$_'
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
# sets global variable
ctr:::setVariable:
  width: 400px

ctr:::setClass:Box:
  $$:
    width: 200px
    height: 400px
  # NOT overwritten by above global variable since private
  width: _$width$_
  height: $height$

.test:
  extend: Box
```

