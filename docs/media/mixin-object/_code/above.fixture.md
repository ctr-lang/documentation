<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="above"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  medias: {
    // query:helper
    '+sm': {
      width: 100px
    }
    // raw:value
    '+1050px': {
      width: 300px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 600px) {
  .test {
    width: 100px;
  }
}
@media (min-width: 1050px) {
  .test {
    width: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  medias:
    # query:helper
    +sm:
      width: 100px
    # raw:value
    +1050px:
      width: 300px
```

