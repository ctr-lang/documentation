<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="option"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      // transition-delay
      delay: 20s
      // transition-duration
      duration: 4s
      // transition-timing-function
      ease: ease-out
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
  transition-delay: 20s, 20s;
  transition-duration: 4s, 4s;
  transition-property: opacity, background;
  transition-timing-function: ease-out, ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      # transition-delay
      delay: 20s
      # transition-duration
      duration: 4s
      # transition-timing-function
      ease: ease-out
    opacity: 1
    background: red
```

