<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="luminosity"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  color: alpha(red, luminosity(red))
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  color: rgba(255,0,0,0.213);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  color: alpha(red, luminosity(red))
```

