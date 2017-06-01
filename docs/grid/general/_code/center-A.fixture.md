<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="center-A"></div>

<!-- stylus -->
```fixture
// flexbox
ctr('.test', {
  grid: {
    center: 1140px 30px
  }
})
```

<!-- css -->
```fixture
.test {
  display: flex;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  flex-flow: row wrap;
  padding-right: 30px;
}
```

<!-- yaml -->
```fixture
# flexbox
.test:
  grid:
    center: [1140px, 30px]
```

