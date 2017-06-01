<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-range-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  min-font-size-range: 300px
  max-font-size-range: 900px
  font-size: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  font-size: calc(12px + 9 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    font-size: 12px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    font-size: 21px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  min-font-size-range: 300px
  max-font-size-range: 900px
  font-size: responsive
```

