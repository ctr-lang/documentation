<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="above"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      above: 'md'
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
@media (min-width: 800px) {
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
      above: md
    width: 100px
```

