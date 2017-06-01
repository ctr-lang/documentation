<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="query"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  medias: {
    // query:helper
    '-md': {
      query: {
        max-height: 'md'
      }
      width: 300px
    }
    // raw:value
    '+800px': {
      query: {
        min-height: '800px'
      }
      width: 400px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (max-width: 800px) and (max-height: 800px) {
  .test {
    width: 300px;
  }
}
@media (min-width: 800px) and (min-height: 800px) {
  .test {
    width: 400px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  medias:
    # query:helper
    -md:
      query:
        max-height: md
      width: 300px
    # raw:value
    +800px:
      query:
        min-height: 800px
      width: 400px
```

