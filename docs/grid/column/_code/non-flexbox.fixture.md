<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="non-flexbox"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    column: {
      flex: false
      fraction: '1/3'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
}
.test:nth-child(3n+1) {
  clear: left;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    column:
      flex: false
      fraction: 1/3
```

