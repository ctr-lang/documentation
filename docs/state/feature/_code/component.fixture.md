<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="component"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    // component
    component-section: {
      opacity: 1
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
.test:hover > section {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    height: 400px
    # component
    component-section:
      opacity: 1
```

