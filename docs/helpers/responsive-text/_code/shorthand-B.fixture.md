<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="shorthand-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  line-height: 'responsive' 10px 30px
  line-height-range: 300px 900px
})
```

<!-- css -->
```fixture
.test {
  line-height: calc(10px + 20 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    line-height: 10px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    line-height: 30px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  line-height: [responsive, 10px, 30px]
  line-height-range: [300px, 900px]
```

