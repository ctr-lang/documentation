<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="grid"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // grid
    grid: {
      column: '1/2'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 2 - (30px - 30px * 1 / 2));
}
.test:first-child:nth-child(1n) {
  margin-right: 30px;
}
.test:first-child:last-child {
  margin-right: 0;
}
.test:first-child:nth-child(2n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  first-child:
    height: 400px
    # grid
    grid:
      column: 1/2
```

