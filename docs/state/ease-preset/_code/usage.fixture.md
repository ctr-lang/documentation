<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="usage"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      option: {
        ease: 'easeInBack'
      }
      left: 0%
    }
    non: {
      option: {
        ease: 'easeInOutQuart'
      }
      left: 100%
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
  left: 0%;
  transition-delay: 0s;
  transition-property: left;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
.test:not(:hover) {
  left: 100%;
  transition-delay: 0s;
  transition-property: left;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      option:
        ease: easeInBack
      left: 0%
    non:
      option:
        ease: easeInOutQuart
      left: 100%
```

