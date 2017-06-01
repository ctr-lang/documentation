<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="query-helpers-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      max-width: 'md'
    }
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (max-width: 800px) {
  .test {
    background: #f00;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media:
    query:
      max-width: md
    background: red
```

