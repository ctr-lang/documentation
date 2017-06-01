<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // cannot pass raw not needs to be string
  'not': {
    key: '.class'
    font-size: 10px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.class) {
  font-size: 10px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # cannot pass raw not needs to be string
  not:
    key: .class
    font-size: 10px
```

