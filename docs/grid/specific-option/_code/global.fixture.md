<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="global"></div>

<!-- stylus -->
```fixture
// set option globally
ctrSetOption({
  grid: {
    gutter: 60px
  }
})

ctr('.test', {
  size: 500px
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
  flex: 0 0 auto;
}
.test > div {
  height: 100px;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(1n) {
  float: right;
  margin-right: 0;
}
.test > div:nth-child(1n) {
  margin-right: 60px;
}
.test > div:last-child {
  margin-right: 0;
}
.test > div:nth-child(3n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
# set option globally
ctr:::setOption:
  grid:
    gutter: 60px

'.test':
  size: 500px
  grid:
    column: '1/1'
  component-div:
    height: 100px
    grid:
      column: '1/3'
```

