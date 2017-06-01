<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="skew"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  matrix: {
    skew: 1.2 1.1
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transform: matrix3d(1, 1.96475966, 0, 0, 2.57215162, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  matrix:
    skew: [1.2, 1.1]
```

