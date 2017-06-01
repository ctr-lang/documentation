<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="bracketless"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: 'class$="choo-choo"'
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class$="choo-choo"] {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: class$="choo-choo"
    font-size: 2em
```

