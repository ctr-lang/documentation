<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="stringify"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  counter-increment: linenumber
  before: {
    option: {
      stringify: false
    }
    content: counter(linenumber)
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  counter-increment: linenumber;
}
.test::before {
  content: counter(linenumber);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  counter-increment: linenumber
  before:
    option:
      stringify: false
    content: counter(linenumber)
```

