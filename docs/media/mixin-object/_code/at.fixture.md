<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="at"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  medias: {
    'sm': {
      width: 100px
    }
    'lg': {
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
@media (min-width: 400px) and (max-width: 600px) {
  .test {
    width: 100px;
  }
}
@media (min-width: 800px) and (max-width: 1050px) {
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
    sm:
      width: 100px
    lg:
      width: 300px
```

