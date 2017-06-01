<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    font-size: 1em
    option: {
      key: '.aClass'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.aClass) {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    font-size: 1em
    option:
      key: .aClass
```

