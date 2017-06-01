<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      'max-width': 800px 50vw
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
@media (max-width: 50vw) and (max-width: 800px) {
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
      max-width: [800px, 50vw]
    background: red
```

