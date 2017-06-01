<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="applyTo"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    option: {
      key: '.thisClass'
      applyTo: '.applyTo'
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
.test:not(.thisClass) .applyTo {
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
      applyTo: .applyTo
    font-size: 20px
```

