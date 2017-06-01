<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="content-false"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: false
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  content: "";
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  before:
    content: false
```

