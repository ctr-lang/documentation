<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="attribute"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // attribute
    attribute: {
      key: '[data-role="test"]'
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
.test:first-child {
  height: 400px;
}
.test:first-child[data-role="test"] {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  first-child:
    height: 400px
    # attribute
    attribute:
      key: '[data-role="test"]'
      font-size: 1em
```

