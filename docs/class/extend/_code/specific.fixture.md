<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="specific"></div>

<!-- stylus -->
```fixture
// sets global variable
ctrSetVariable({
  primary-bg: #f00
})

// sets class
ctrSetClass('Box', {
  $$: {
    width: 200px
    height: 200px
    border-radius: 4px
  }
  width: '$width$'
  height: '$height$'
  background: '$primary-bg$'
  // private variable
  border-radius: '_$border-radius$_'
})

ctr('.test', {
  font-size: 1em
  extend: {
    Box: {
      height: 400px
      border-radius: 8px
      primary-bg: #00f
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 400px;
  font-size: 1em;
  background: #00f;
  border-radius: 8px;
}
```

<!-- yaml -->
```fixture
# sets global variable
ctr:::setVariable:
  primary-bg: '#f00'

# sets class
ctr:::setClass:Box:
  $$:
    width: 200px
    height: 200px
    border-radius: 4px
  width: $width$
  height: $height$
  background: $primary-bg$
  # private variable
  border-radius: _$border-radius$_

.test:
  font-size: 1em
  extend:
    Box:
      height: 400px
      border-radius: 8px
      primary-bg: '#00f'
```

