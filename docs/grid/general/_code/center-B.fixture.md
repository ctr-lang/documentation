<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="center-B"></div>

<!-- stylus -->
```fixture
// non-flexbox
ctr('.test', {
  grid: {
    center: 1140px 30px false
  }
})
```

<!-- css -->
```fixture
.test {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
}
.test::after {
  clear: both;
  content: "";
  display: table;
}
```

<!-- yaml -->
```fixture
# non-flexbox
.test:
  grid:
    center: [1140px, 30px, false]
```

