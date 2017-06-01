<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="appendKey"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    option: {
      key: '.appendMe'
      appendKey: true
    }
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test.appendMe {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    option:
      key: .appendMe
      appendKey: true
    font-size: 1em
```

