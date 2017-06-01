<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="implicit-auxiliary"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    opacity: 1
    height: 400px
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
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    opacity: 1
    height: 400px
```

