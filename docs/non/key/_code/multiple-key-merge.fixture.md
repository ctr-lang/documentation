<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key-merge"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customNon: {
    key: '.today' 'span'
    font-size: 1em
  }
  'non-p': {
    color: red
    font-size: 2em
  }
  'non-.today': {
    color: blue
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.today) {
  color: #00f;
  font-size: 1em;
}
.test:not(span) {
  font-size: 1em;
}
.test:not(p) {
  color: #f00;
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customNon:
    key: [.today, span]
    font-size: 1em
  non-p:
    color: red
    font-size: 2em
  non-.today:
    color: blue
```

