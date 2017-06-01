<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="default-C"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  letter-spacing: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  letter-spacing: calc(3px + 7 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    letter-spacing: 3px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    letter-spacing: 10px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  letter-spacing: responsive
```

