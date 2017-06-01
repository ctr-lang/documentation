<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="component"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    width: 300px
    // component
    component-span: {
      font-size: 10px
    }
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  width: 300px;
}
.test > div[data-role="test"] > span {
  font-size: 10px;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    width: 300px
    # component
    component-span:
      font-size: 10px
```

