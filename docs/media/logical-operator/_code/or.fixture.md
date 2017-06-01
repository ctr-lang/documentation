<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="or"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  background: teal
  media: {
    query: {
      orCondition: {
        max-width: 400px 30vw
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
@media (max-width: 30vw), (max-width: 400px) {
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
      orCondition:
        max-width: [400px, 30vw]
    background: red
```

