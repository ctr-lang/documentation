<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="option-A"></div>

<!-- stylus -->
```fixture
// global option
ctrSetOption({
  type: {
    rootSize: 18px
    fontSize: {
      minSize: 1em
      maxSize: 3em
      minWidth: 300px
      maxWidth: 900px
    }
  }
})

ctr('.test', {
  width: 200px
  font-size: 'responsive'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: calc(1em + 2 * ((100vw - 16.667em) / 33.333));
}
@media only screen and (max-width: 300px) {
  .test {
    font-size: 1em;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    font-size: 3em;
  }
}
```

<!-- yaml -->
```fixture
# global option
ctr:::setOption:
  type:
    rootSize: 18px
    fontSize:
      minSize: 1em
      maxSize: 3em
      minWidth: 300px
      maxWidth: 900px

.test:
  width: 200px
  font-size: responsive
```

