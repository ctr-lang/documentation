<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="between"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // query:helper
  'media-|xs-md': {
    height: 100px
  }
  // raw:value
  'media-|1050px-1800px': {
    height: 300px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 400px) and (max-width: 800px) {
  .test {
    height: 100px;
  }
}
@media (min-width: 1050px) and (max-width: 1800px) {
  .test {
    height: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # query:helper
  media-|xs-md:
    height: 100px
  # raw:value
  media-|1050px-1800px:
    height: 300px
```

