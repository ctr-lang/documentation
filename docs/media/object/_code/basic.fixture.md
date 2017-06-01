<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  medias: {
    '-sm': {
      width: 300px
    }
    md: {
      width: 400px
    }
    custom: {
      query: {
        above: 'md'
        density: 2
      }
      width: 500px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (max-width: 600px) {
  .test {
    width: 300px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
  }
}
@media (min-width: 800px) and (min-resolution: 2dppx) {
  .test {
    width: 500px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  medias:
    -sm:
      width: 300px
    md:
      width: 400px
    custom:
      width: 500px
      query:
        above: md
        density: 2
```

