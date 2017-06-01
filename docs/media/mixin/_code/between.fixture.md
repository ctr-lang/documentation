<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="between"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      between: 'sm' 'lg'
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
@media (min-width: 600px) and (max-width: 1050px) {
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
      between: [sm, lg]
    width: 100px
```

