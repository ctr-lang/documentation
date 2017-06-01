<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="from-end"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    key: 'from-end(3)'
    height: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:nth-last-child(3) {
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    key: from-end(3)
    height: 400px
```

