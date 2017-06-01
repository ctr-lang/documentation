<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="default-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  font-size: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: calc(12px + 9 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    font-size: 12px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    font-size: 21px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  font-size: responsive
```

