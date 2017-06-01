<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="above"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // query:helper
  'media-+sm': {
    height: 100px
  }
  // raw:value
  'media-+1050px': {
    height: 300px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 600px) {
  .test {
    height: 100px;
  }
}
@media (min-width: 1050px) {
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
  media-+sm:
    height: 100px
  # raw:value
  media-+1050px:
    height: 300px
```

