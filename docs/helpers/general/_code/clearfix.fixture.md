<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="clearfix"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  clearfix: true
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::after {
  clear: both;
  content: "";
  display: table;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  clearfix: true
```

