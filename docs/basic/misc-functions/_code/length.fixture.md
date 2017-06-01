<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="length"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  font-size: unit(length((1 2 3 4)), px)
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: 4px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  font-size: unit(length((1 2 3 4)), px)
```

