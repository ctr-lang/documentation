<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // media
    media: {
      query: {
        min-height: 200px
        max-height: 500px
      }
      border-radius: 10px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
  }
}
@media (min-width: 600px) and (max-width: 800px) and (min-height: 200px) and (max-height: 500px) {
  .test {
    border-radius: 10px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media-md:
    width: 400px
    # media
    media:
      query:
        min-height: 200px
        max-height: 500px
      border-radius: 10px
```

