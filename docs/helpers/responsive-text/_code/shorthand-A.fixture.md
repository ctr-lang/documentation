<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="shorthand-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  font-size: 'responsive' 10px 30px
  font-size-range: 300px 900px
})
```

<!-- css -->
```fixture
.test {
  font-size: calc(10px + 20 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    font-size: 10px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    font-size: 30px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  font-size: [responsive, 10px, 30px]
  font-size-range: [300px, 900px]
```

