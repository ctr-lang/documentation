<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      density: 2
      above: '300px'
    }
    width: 100px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 300px) and (min-resolution: 2dppx) {
  .test {
    width: 100px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media:
    width: 100px
    query:
      density: 2
      above: 300px
```

