<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="portrait"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      portrait: true
    }
    height: 300px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (orientation: portrait) {
  .test {
    height: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media:
    query:
      portrait: true
    height: 300px
```

