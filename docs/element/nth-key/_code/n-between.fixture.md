<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="n-between"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    key: 'n-between(3, 10, 20)'
    height: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:nth-child(3n):nth-child(n+10):nth-child(-n+20) {
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    key: n-between(3, 10, 20)
    height: 400px
```

