<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="first-of"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    key: 'first-of(10)'
    height: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:nth-last-child(10):first-child {
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    key: first-of(10)
    height: 400px
```

