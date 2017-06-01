<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="before"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: 'test'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  font-size: 1em;
  content: "test";
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  before:
    content: test
    font-size: 1em
```

