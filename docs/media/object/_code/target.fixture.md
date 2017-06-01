<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="target"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  medias: {
    common: {
      option: {
        // only merges with "md"
        target: 'md'
      }
      query: {
        type: 'screen'
        'max-height': 400px
      }
      height: 222px
    }
    sm: {
      width: 300px
    }
    md: {
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
@media (min-width: 400px) and (max-width: 600px) {
  .test {
    width: 300px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 800px) and (max-height: 400px) {
  .test {
    width: 400px;
    height: 222px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  medias:
    common:
      option:
        # only merges with "md"
        target: md
      query:
        type: screen
        max-height: 400px
      height: 222px
    sm:
      width: 300px
    md:
      width: 400px
```

