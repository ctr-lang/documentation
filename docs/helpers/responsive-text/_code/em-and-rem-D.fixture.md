<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="em-and-rem-D"></div>

<!-- stylus -->
```fixture
// individualy set
ctr('.test', {
  width: 200px
  font-size: 'responsive' 1em 3em
  font-size-root: 10px
  line-height: 'responsive' 1.5rem 4rem
  line-height-root: 20px
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: calc(1em + 2 * ((100vw - 40em) / 140));
  line-height: calc(1.5rem + 2.5 * ((100vw - 20rem) / 70));
}
@media only screen and (max-width: 400px) {
  .test {
    font-size: 1em;
    line-height: 1.5rem;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    font-size: 3em;
    line-height: 4rem;
  }
}
```

<!-- yaml -->
```fixture
# individualy set
.test:
  width: 200px
  font-size: [responsive, 1em, 3em]
  font-size-root: 10px
  line-height: [responsive, 1.5rem, 4rem]
  line-height-root: 20px
```

