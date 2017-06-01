<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  grid: {
    option: {
      gutter: 60px
    }
    column: '1/2'
    media: {
      'sm': {
        column: '1/3'
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 2 - (60px - 60px * 1 / 2));
}
.test:nth-child(1n) {
  margin-right: 60px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(2n) {
  float: right;
  margin-right: 0;
}
@media (min-width: 400px) and (max-width: 600px) {
  .test {
    flex: 0 0 auto;
    width: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:nth-child(1n) {
    margin-right: 60px;
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:last-child {
    margin-right: 0;
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:nth-child(3n) {
    float: right;
    margin-right: 0;
  }
}
```

<!-- yaml -->
```fixture
.test:
  grid:
    option:
      gutter: 60px
    column: 1/2
    media:
      sm:
        column: 1/3
```

