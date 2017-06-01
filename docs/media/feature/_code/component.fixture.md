<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="component"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // component
    component-span: {
      height: 400px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test > span {
    height: 400px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media-md:
    width: 400px
    # component
    component-span:
      height: 400px
```

