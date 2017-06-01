<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-size-C"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  min-letter-spacing: 10px
  max-letter-spacing: 30px
  letter-spacing: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  letter-spacing: calc(10px + 20 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    letter-spacing: 10px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    letter-spacing: 30px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  min-letter-spacing: 10px
  max-letter-spacing: 30px
  letter-spacing: responsive
```

