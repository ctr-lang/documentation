<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="em-and-rem-B"></div>

<!-- stylus -->
```fixture
// changes rootSize globally
ctrSetOption({
  type: {
    rootSize: 10px
  }
})

ctr('.test', {
  width: 200px
  font-size: 'responsive' 1em 3em
  line-height: 'responsive' 1.5rem 4rem
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: calc(1em + 2 * ((100vw - 40em) / 140));
  line-height: calc(1.5rem + 2.5 * ((100vw - 40rem) / 140));
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
# changes rootSize globally
ctr:::setOption:
  type:
    rootSize: 10px

.test:
  width: 200px
  font-size: [responsive, 1em, 3em]
  line-height: [responsive, 1.5rem, 4rem]
```

