<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="shorthand-C"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  letter-spacing: 'responsive' 10px 30px
  letter-spacing-range: 300px 900px
})
```

<!-- css -->
```fixture
.test {
  letter-spacing: calc(10px + 20 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    letter-spacing: 10px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    letter-spacing: 30px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  letter-spacing: [responsive, 10px, 30px]
  letter-spacing-range: [300px, 900px]
```

