<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transitions: {
    // merged into each transition
    common: {
      option: {
        duration: 2s
        ease: 'ease-in'
      }
    }
    one: {
      opacity: 1
    }
    two: {
      option: {
        duration: 1s
      }
      color: blue
      background: red
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  color: #00f;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 2s, 1s, 1s;
  transition-property: opacity, color, background;
  transition-timing-function: ease-in, ease-in, ease-in;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transitions:
    # merged into each transition
    common:
      option:
        duration: 2s
        ease: ease-in
    one:
      opacity: 1
    two:
      option:
        duration: 1s
      color: blue
      background: red
```

