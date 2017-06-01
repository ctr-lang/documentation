<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      opacity: 1
      shorthand: {
        // property: duration delay ease
        opacity: 2s 2s 'ease-out'
      }
    }
    non: {
      opacity: 0.5
      shorthand: {
        // property: duration delay ease
        opacity: 1s 1s 'ease-in'
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
  transition-delay: 2s;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}
.test:not(:hover) {
  opacity: 0.5;
  transition-delay: 1s;
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      opacity: 1
      shorthand:
        # property: [duration, delay, ease]
        opacity: [2s, 2s, ease-out]
    non:
      opacity: 0.5
      shorthand:
        # property: [duration, delay, ease]
        opacity: [1s, 1s, ease-in]
```

