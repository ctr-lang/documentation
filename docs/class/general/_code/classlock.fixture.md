<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="classlock"></div>

<!-- stylus -->
```fixture
// turn on classLock
ctrSetOption({
  classLock: true
})

ctrSetClass('Box', {
  width: 200px
  height: 200px
})

// Will not be able to overwritten or modified
ctrSetClass('Box', {
  width: 444444px
  height: 44444px
})

// width + height still 200px
ctr('.test', {
  extend: 'Box'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 200px;
}
```

<!-- yaml -->
```fixture
# turn on classLock
ctr:::setOption:
  classLock: true

ctr:::setClass:Box:
  width: 200px
  height: 200px

# NOTE: In YAML you can't have duplicate keys
# Will not be able to overwritten or modified
# ctr:::setClass:Box:
#   width: 444444px
#   height: 44444px

# width + height still 200px
.test:
  extend: Box
```

