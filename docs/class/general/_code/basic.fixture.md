<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
// create class
ctrSetClass('Box', {
  width: 200px
  height: 400px
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
# create class
ctr:::setClass:Box:
  width: 200px
  height: 400px

.test:
  extend: Box
```

