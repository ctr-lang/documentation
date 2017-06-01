<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="will-change"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      will-change: true
    }
    opacity: 1
    transform: translateY(10px)
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
  transition-delay: 0s, 0s;
  transform: translateY(10px);
  transition-duration: 0.5s, 0.5s;
  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    option:
      will-change: true
    opacity: 1
    transform: translateY(10px)
```

