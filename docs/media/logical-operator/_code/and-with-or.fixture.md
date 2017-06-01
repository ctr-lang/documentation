<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="and-with-or"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      andCondition: {
        min-width: 400px 40vw
      }
      orCondition: {
        max-height: 400px 40vh
      }
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
@media (min-width: 40vw) and (min-width: 400px) and (max-height: 40vh), (max-height: 400px) {
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
      andCondition:
        min-width: [400px, 40vw]
      orCondition:
        max-height: [400px, 40vh]
    background: red
```

