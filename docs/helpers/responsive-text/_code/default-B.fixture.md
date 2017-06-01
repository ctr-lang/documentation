<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="default-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  line-height: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  line-height: calc(1rem + 1 * ((100vw - 25rem) / 87.5));
}
@media only screen and (max-width: 400px) {
  .test {
    line-height: 1rem;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    line-height: 2rem;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  line-height: responsive
```

