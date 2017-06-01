<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="code"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
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
.test:not(.bad) {
  height: 200px;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:not(.bad):nth-child(1n) {
  margin-right: 30px;
}
.test:not(.bad):last-child {
  margin-right: 0;
}
.test:not(.bad):nth-child(3n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # grid
    grid:
      column: 1/3
```

