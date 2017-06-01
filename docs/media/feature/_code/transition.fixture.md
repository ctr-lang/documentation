<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="transition"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // transition
    transition: {
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
    height: 400px;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property: height;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media-md:
    width: 400px
    # transition
    transition:
      height: 400px
```

