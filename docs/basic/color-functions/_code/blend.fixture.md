<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="blend"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  color: blend(rgba(lime, 0.5), rgba(red, 0.25))
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  color: rgba(128,128,0,0.625);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  color: blend(rgba(lime, 0.5), rgba(red, 0.25))
```

