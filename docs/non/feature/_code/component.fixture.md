<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="component"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
    // component
    component-span: {
      font-size: 1em
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.bad) {
  height: 200px;
}
.test:not(.bad) > span {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # component
    component-span:
      font-size: 1em
```

