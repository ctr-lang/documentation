<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="state"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    color: red
    // state
    hover-on: {
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
  color: #f00;
}
.test > div[data-role="test"]:hover {
  font-size: 10px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: font-size;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    color: red
    # state
    hover-on:
      font-size: 10px
```

