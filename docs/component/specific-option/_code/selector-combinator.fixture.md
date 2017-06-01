<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="selector-combinator"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  'component-.erins': {
    option: {
      selector: '+'
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
.test + .erins {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component-.erins:
    option:
      selector: +
    font-size: 1em
```

