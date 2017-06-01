<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="middle"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    key: 'middle(11)'
    height: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:nth-child(6) {
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    key: middle(11)
    height: 400px
```

