<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    option: {
      key: 'after'
    }
    content: 'ctr'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::after {
  font-size: 1em;
  content: "ctr";
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    option:
      key: after
    content: ctr
    font-size: 1em
```

