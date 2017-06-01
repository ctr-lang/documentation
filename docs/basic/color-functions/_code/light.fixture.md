<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="light"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: 'Is black light: ' + light(black)
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  content: "Is black light: false";
}
```

