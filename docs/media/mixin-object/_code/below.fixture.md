<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="below"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  height: 200px
  medias: {
    '-sm': {
      width: 100px
    }
    '-1050px': {
      width: 300px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  height: 200px;
}
@media (max-width: 600px) {
  .test {
    width: 100px;
  }
}
@media (max-width: 1050px) {
  .test {
    width: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  height: 200px
  medias:
    -sm:
      width: 100px
    -1050px:
      width: 300px
```

