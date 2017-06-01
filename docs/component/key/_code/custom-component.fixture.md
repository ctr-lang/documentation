<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-component"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customCompOne: {
    key: '.one'
    font-size: 1em
  }
  customCompTwo: {
    key: '#two'
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > .one {
  font-size: 1em;
}
.test > #two {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customCompOne:
    key: .one
    font-size: 1em
  customCompTwo:
    key: '#two'
    font-size: 2em
```

