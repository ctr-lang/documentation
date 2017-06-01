<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="example"></div>

<!-- stylus -->
```fixture
ctr('section', {
  grid: {
    masonry-wrap: 60px
  }
  component-div: {
    grid: {
      masonry-column: '1/3' 60px
    }
  }
})
```

<!-- css -->
```fixture
section {
  display: flex;
  margin-left: -30px;
  flex-flow: row wrap;
  margin-right: -30px;
}
section > div {
  flex: 0 0 auto;
  margin-left: 30px;
  margin-right: 30px;
  width: calc(99.9% * 1 / 3 - 60px);
}
```

<!-- yaml -->
```fixture
section:
  grid:
    masonry-wrap: 60px
  component-div:
    grid:
      masonry-column: [1/3, 60px]
```

