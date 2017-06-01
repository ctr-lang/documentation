<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="hyphenated-element"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  element-after: {
    content: 'test'
    font-size: 1em
  }
  elm-first-child: {
    font-size: 2em
  }
  'element-nth-child(2)': {
    font-size: 3em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::after {
  font-size: 1em;
  content: "test";
}
.test:first-child {
  font-size: 2em;
}
.test:nth-child(2) {
  font-size: 3em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  element-after:
    content: test
    font-size: 1em
  elm-first-child:
    font-size: 2em
  element-nth-child(2):
    font-size: 3em
```

