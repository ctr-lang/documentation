<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="will-change"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      will-change: true
      duration: 1s
    }
    opacity: 1
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 1s;
  will-change: opacity, background;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      will-change: true
      duration: 1s
    opacity: 1
    background: red
```

