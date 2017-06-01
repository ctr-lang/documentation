<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="global"></div>

<!-- stylus -->
```fixture
ctrSetOption({
  media: {
    // default === 400px
    xs: 250px
    // default === 600px
    sm: 400px
  }
})

ctr('.test', {
  width: 200px
  media: {
    'xs': {
      height: 100px
    }
    'sm': {
      height: 200px
    }
    '+sm': {
      height: 300px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (max-width: 250px) {
  .test {
    height: 100px;
  }
}
@media (min-width: 250px) and (max-width: 400px) {
  .test {
    height: 200px;
  }
}
@media (min-width: 400px) {
  .test {
    height: 300px;
  }
}
```

<!-- yaml -->
```fixture
ctr:::setOption:
  media:
    # default === 400px
    xs: 250px
    # default === 600px
    sm: 400px

.test:
  width: 200px
  media:
    xs:
      height: 100px
    sm:
      height: 200px
    +sm:
      height: 300px
```

