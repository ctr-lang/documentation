<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="between"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  height: 200px
  medias: {
    // query:helper
    'xs-md': {
      width: 100px
    }
    // raw:value
    '1050px-1800px': {
      width: 300px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  height: 200px;
}
@media (min-width: 400px) and (max-width: 800px) {
  .test {
    width: 100px;
  }
}
@media (min-width: 1050px) and (max-width: 1800px) {
  .test {
    width: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  height: 200px
  medias:
    # query:helper
    xs-md:
      width: 100px
    # raw:value
    1050px-1800px:
      width: 300px
```

