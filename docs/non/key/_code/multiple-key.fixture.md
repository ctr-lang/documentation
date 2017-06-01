<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    key: '.today' 'span'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.today) {
  font-size: 1em;
}
.test:not(span) {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    key: [.today, span]
    font-size: 1em
```

