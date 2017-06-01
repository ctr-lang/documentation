<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-size-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  min-line-height: 10px
  max-line-height: 30px
  line-height: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  line-height: calc(10px + 20 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    line-height: 10px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    line-height: 30px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  min-line-height: 10px
  max-line-height: 30px
  line-height: responsive
```

