<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="odd"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: 'Is 6 odd: ' + odd(6)
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  content: "Is 6 odd: false";
}
```

