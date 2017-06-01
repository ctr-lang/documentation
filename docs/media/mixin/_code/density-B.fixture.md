<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="density-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      density: '3dpi'
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
@media (min-resolution: 3dpi) {
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
    query:
      density: 3dpi
    width: 100px
```

