<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="two-five-column-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    // fraction cycle gutter flex
    column: '2/5' default default false
  }
})
```

<!-- css -->
```fixture
.test {
  width: calc(99.9% * 2 / 5 - (30px - 30px * 2 / 5));
}
.test:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(5n) {
  float: right;
  margin-right: 0;
}
.test:nth-child(5n+1) {
  clear: left;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    # fraction cycle gutter flex
    column: [2/5, default, default, false]
```

