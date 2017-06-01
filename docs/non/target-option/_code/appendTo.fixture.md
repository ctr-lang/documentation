<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="appendTo"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    option: {
      key: '.thisClass'
      appendTo: '.appendTo'
    }
    font-size: 20px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.thisClass).appendTo {
  font-size: 20px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    option:
      key: .thisClass
      appendTo: .appendTo
    font-size: 20px
```

