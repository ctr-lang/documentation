<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="applyTo"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      applyTo: '.applyTo'
    }
    opacity: 1
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test .applyTo {
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
  transition:
    option:
      applyTo: .applyTo
    opacity: 1
```

