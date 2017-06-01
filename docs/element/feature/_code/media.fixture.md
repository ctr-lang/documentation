<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // media
    media-lg: {
      font-size: 1.5em
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test:first-child {
    font-size: 1.5em;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  first-child:
    height: 400px
    # media
    media-lg:
      font-size: 1.5em
```

