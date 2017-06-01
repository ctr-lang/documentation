<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="override"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    option: {
      key: '.thisClass'
      override: '#override'
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
#override {
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
      override: '#override'
    font-size: 20px
```

