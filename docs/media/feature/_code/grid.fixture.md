<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="grid"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // grid
    grid: {
      column: '1/3'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
    flex: 0 0 auto;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:nth-child(1n) {
    margin-right: 30px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:last-child {
    margin-right: 0;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:nth-child(3n) {
    float: right;
    margin-right: 0;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media-md:
    width: 400px
    # grid
    grid:
      column: 1/3
```

