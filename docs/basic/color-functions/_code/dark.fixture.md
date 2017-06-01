<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="dark"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: 'Is #005716 dark: ' + dark(#005716)
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  content: "Is #005716 dark: true";
}
```

