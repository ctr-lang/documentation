<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-range-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  min-line-height-range: 300px
  max-line-height-range: 900px
  line-height: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  line-height: calc(1rem + 1 * ((100vw - 18.75rem) / 37.5));
}
@media only screen and (max-width: 300px) {
  .test {
    line-height: 1rem;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    line-height: 2rem;
  }
}
```

<!-- yaml -->
```fixture
.test:
  min-line-height-range: 300px
  max-line-height-range: 900px
  line-height: responsive
```

