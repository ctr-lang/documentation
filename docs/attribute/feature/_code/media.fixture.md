<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    width: 300px
    // media
    media-sm: {
      width: 200px
    }
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  width: 300px;
}
@media (min-width: 400px) and (max-width: 600px) {
  .test > div[data-role="test"] {
    width: 200px;
  }
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    width: 300px
    # media
    media-sm:
      width: 200px
```

