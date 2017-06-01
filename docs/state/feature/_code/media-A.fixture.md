<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="media-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
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
.test:hover {
  height: 400px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:hover {
    height: 300px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    height: 400px
    # media
    media-md:
      height: 300px
```

