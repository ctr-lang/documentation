<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="translate"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  matrix: {
    translate: 100 200
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 200, 0, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  matrix:
    translate: [100, 200]
```

