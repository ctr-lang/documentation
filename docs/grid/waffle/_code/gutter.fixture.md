<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="gutter"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    waffle: {
      fraction: '1/3'
      gutter: 60px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
  height: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
}
.test:nth-child(n) {
  margin-right: 60px;
  margin-bottom: 60px;
}
.test:nth-child(3n) {
  margin-right: 0;
}
.test:last-child {
  margin-right: 0;
  margin-bottom: 0;
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
      gutter: 60px
```

