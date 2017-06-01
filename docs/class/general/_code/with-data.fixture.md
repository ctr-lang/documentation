<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="with-data"></div>

<!-- stylus -->
```fixture
ctrSetClass('Box', {
  width: 200px
  height: 400px
})

ctr('.test', {
  width: 200px
  components: {
    '.blue-box': {
      extend: 'Box'
      background: blue
    }
    '.red-box': {
      extend: 'Box'
      background: red
      height: 500px
    }
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
}
.test > .red-box {
  width: 200px;
  height: 500px;
  background: #f00;
}
```

<!-- yaml -->
```fixture
# create class
ctr:::setClass:Box:
  width: 200px
  height: 400px

.test:
  width: 200px
  components:
    .blue-box:
      extend: Box
      background: blue
    .red-box:
      extend: Box
      background: red
      height: 500px
```

