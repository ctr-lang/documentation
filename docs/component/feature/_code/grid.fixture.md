<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="grid"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
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
.test > section {
  font-size: 1em;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 2 - (30px - 30px * 1 / 2));
}
.test > section:nth-child(1n) {
  margin-right: 30px;
}
.test > section:last-child {
  margin-right: 0;
}
.test > section:nth-child(2n) {
  float: right;
  margin-right: 0;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # grid
    grid:
      column: 1/2
```

