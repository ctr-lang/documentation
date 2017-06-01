<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-range-C"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  min-letter-spacing-range: 300px
  max-letter-spacing-range: 900px
  letter-spacing: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  letter-spacing: calc(3px + 7 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    letter-spacing: 3px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    letter-spacing: 10px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  min-letter-spacing-range: 300px
  max-letter-spacing-range: 900px
  letter-spacing: responsive
```

