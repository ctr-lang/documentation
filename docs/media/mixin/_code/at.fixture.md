<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="at"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    width: 100px
    query: {
      at: 'md'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
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
      at: md
```

