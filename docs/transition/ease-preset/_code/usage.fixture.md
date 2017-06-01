<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="usage"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      ease: 'easeInBack'
    }
    opacity: 1
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      ease: easeInBack
    opacity: 1
```

