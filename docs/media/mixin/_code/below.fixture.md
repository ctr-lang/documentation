<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="below"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      below: 'lg'
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
@media (max-width: 1050px) {
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
      below: lg
    width: 100px
```

