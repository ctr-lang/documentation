<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="and"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  background: teal
  media: {
    query: {
      andCondition: {
        min-width: 200px
        max-width: 400px
      }
    }
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  background: #008080;
}
@media (min-width: 200px) and (max-width: 400px) {
  .test {
    background: #f00;
  }
}
```

<!-- yaml -->
```fixture
.test:
  background: teal
  media:
    query:
      andCondition:
        min-width: 200px
        max-width: 400px
    background: red
```

