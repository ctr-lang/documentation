<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="landscape"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      landscape: true
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
@media (orientation: landscape) {
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
      landscape: true
    height: 300px
```

