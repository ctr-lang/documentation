<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctrSetClass('Box', {
  width: 200px
  height: 400px
})

ctrSetClass('Round-Soft', {
  border-radius: 4px
})

ctr('.test', {
  width: 200px
  'component-.blue-box': {
    extend: 'Box' 'Round-Soft'
    background: blue
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > .blue-box {
  width: 200px;
  height: 400px;
  background: #00f;
  border-radius: 4px;
}
```

<!-- yaml -->
```fixture
ctr:::setClass:Box:
  width: 200px
  height: 400px

ctr:::setClass:Round-Soft:
  border-radius: 4px

.test:
  width: 200px
  component-.blue-box:
    extend: [Box, Round-Soft]
    background: blue
```

