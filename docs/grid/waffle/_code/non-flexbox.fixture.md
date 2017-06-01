<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="non-flexbox"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    waffle: {
      fraction: '1/3'
      flex: false
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
  height: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:nth-child(n) {
  clear: none;
  float: left;
  margin-right: 30px;
  margin-bottom: 30px;
}
.test:last-child {
  margin-right: 0;
  margin-bottom: 0;
}
.test:nth-child(3n) {
  margin-right: 0;
}
.test:nth-child(3n+1) {
  clear: left;
}
.test:nth-last-child(-n+3) {
  margin-bottom: 0;
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    waffle:
      fraction: 1/3
      flex: false
```

