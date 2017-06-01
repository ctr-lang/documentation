<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="perspective"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  matrix: {
    perspective: 600
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00166667, 0, 0, 0, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  matrix:
    perspective: 600
```

