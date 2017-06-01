<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="first"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    key: 'first(3)'
    height: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:nth-child(-n+3) {
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    key: first(3)
    height: 400px
```

