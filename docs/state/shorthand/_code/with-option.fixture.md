<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="with-option"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      ease: 'ease-out'
      shorthand: {
        height: 1s
        opacity: 0.25s 0.25s 'ease-in'
        background: 2s 2s
      }
    }
    height: 200px
    opacity: 0.5
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:hover {
  opacity: 0.5;
  height: 200px;
  background: #f00;
  transition-delay: 0s, 0.25s, 2s;
  transition-duration: 1s, 0.25s, 2s;
  transition-property: height, opacity, background;
  transition-timing-function: ease-out, ease-in, ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    option:
      ease: ease-out
      shorthand:
        height: 1s
        opacity: [0.25s, 0.25s, ease-in]
        background: [2s, 2s]
    height: 200px
    opacity: 0.5
    background: red
```

