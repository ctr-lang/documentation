<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
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
.test > section {
  font-size: 1em;
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test > section {
    font-size: 1.5em;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # media
    media-lg:
      font-size: 1.5em
```

