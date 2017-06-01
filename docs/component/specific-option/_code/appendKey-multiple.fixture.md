<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="appendKey-multiple"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    option: {
      appendKey: true
      key: '.appendMe' '.please' '#beebes'
    }
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test.appendMe {
  font-size: 2em;
}
.test.please {
  font-size: 2em;
}
.test#beebes {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    option:
      appendKey: true
      key: [.appendMe, .please, '#beebes']
    font-size: 2em
```

