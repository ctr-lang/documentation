<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element: {
    key: 'before'
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
.test::before {
  font-size: 1em;
  content: "ctr";
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element:
    key: before
    content: ctr
    font-size: 1em
```

