<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-size-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  min-font-size: 10px
  max-font-size: 30px
  font-size: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  font-size: calc(10px + 20 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    font-size: 10px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    font-size: 30px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  min-font-size: 10px
  max-font-size: 30px
  font-size: responsive
```

