<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
    // media
    media-md: {
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
.test:not(.bad) {
  height: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:not(.bad) {
    height: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # media
    media-md:
      height: 300px
```

