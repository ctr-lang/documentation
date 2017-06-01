<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="static-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    // in an auxiliary state
    on: {
      height: 400px
      static: {
        opacity: 1
      }
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
  opacity: 1;
  height: 400px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    # in an auxiliary state
    on:
      height: 400px
      static:
        opacity: 1
```

