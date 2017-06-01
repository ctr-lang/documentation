<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="rotate"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  matrix: {
    rotate: 45deg
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transform: matrix3d(0.70710548, 0.70710808, 0, 0, -0.70710808, 0.70710548, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  matrix:
    rotate: 45deg
```

