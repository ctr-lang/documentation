<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="scale"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  matrix: {
    scale: 1.5 2
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transform: matrix3d(1.5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  matrix:
    scale: [1.5, 2]
```

