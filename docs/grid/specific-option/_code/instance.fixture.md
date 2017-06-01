<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="instance"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  // set option for all grid features
  option: {
    grid: {
      gutter: 60px
      flexbox: false
    }
  }
  size: 500px
  // clearfix is need since we are not using flexbox
  clearfix: true
  grid: {
    column: '1/1'
  }
  component-div: {
    height: 100px
    grid: {
      column: '1/3'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 500px;
  height: 500px;
}
.test > div {
  height: 100px;
  width: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
}
.test::after {
  clear: both;
  content: "";
  display: table;
}
.test:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 60px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(1n+1) {
  clear: left;
}
.test > div:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 60px;
}
.test > div:last-child {
  margin-right: 0;
}
.test > div:nth-child(3n) {
  float: right;
  margin-right: 0;
}
.test > div:nth-child(3n+1) {
  clear: left;
}
```

<!-- yaml -->
```fixture
.test:
  # set option for all grid features
  option:
    grid:
      gutter: 60px
      flexbox: false
  size: 500px
  # clearfix is need since we are not using flexbox
  clearfix: true
  grid:
    column: 1/1
  component-div:
    height: 100px
    grid:
      column: 1/3
```

