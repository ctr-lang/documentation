<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="local"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    // set option for both align and column
    option: {
      flexbox: false
      gutter: 60px
    }
    align: {
      location: 'bottom-center'
    }
    column: {
      fraction: '1/4'
      cycle: '3'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  position: relative;
  width: calc(99.9% * 1 / 4 - (60px - 60px * 1 / 4));
}
.test > * {
  bottom: 0;
  left: 50%;
  top: auto;
  right: auto;
  position: absolute;
  transform: translate(-50%, 0);
}
.test:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 60px;
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
    # set option for both align and column
    option:
      flexbox: false
      gutter: 60px
    align:
      location: bottom-center
    column:
      fraction: 1/4
      cycle: 3
```

