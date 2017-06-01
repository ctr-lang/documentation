<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="at"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  height: 200px
  'media-xs': {
    query: {
      max-height: 100px
    }
    width: 100px
  }
  'media-md': {
    query: {
      type: 'screen'
    }
    width: 200px
  }
  'media-hd': {
    width: 300px
  }
})
```

<!-- css -->
```fixture
.test {
  height: 200px;
}
@media (max-width: 400px) and (max-height: 100px) {
  .test {
    width: 100px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 200px;
  }
}
@media (min-width: 1050px) {
  .test {
    width: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  height: 200px
  media-xs:
    query:
      max-height: 100px
    width: 100px
  media-md:
    query:
      type: screen
    width: 200px
  media-hd:
    width: 300px
```

