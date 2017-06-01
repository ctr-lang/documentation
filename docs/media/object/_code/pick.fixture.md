<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="pick"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  medias: {
    common: {
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
      option: {
        // picks type height + max-height
        pick: 'height' 'query.max-height'
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
@media only screen and (min-width: 400px) and (max-width: 600px) and (max-height: 400px) {
  .test {
    width: 300px;
    height: 222px;
  }
}
@media (min-width: 600px) and (max-width: 800px) and (max-height: 400px) {
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
      query:
        type: screen
        max-height: 400px
      height: 222px
    sm:
      width: 300px
    md:
      option:
        # picks type height + max-height
        pick: [height, query.max-height]
      width: 400px
```

