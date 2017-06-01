<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="avg"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  z-index: avg(100 200 300)
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  z-index: 200;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  z-index: avg(100 200 300)
```

