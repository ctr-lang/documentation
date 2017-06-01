<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="default-keyword"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      ease: 'ease-out'
      shorthand: {
        height: 1s
        // 0.25s 0s 'ease-in'
        opacity: 0.25s default 'ease-in'
        // 0.5s 2s 'ease-out'
        background: default 2s default
      }
    }
    opacity: 0.5
    height: 200px
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
  transition-delay: 0s, 0s, 2s;
  transition-duration: 1s, 0.25s, 0.5s;
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
        # 0.25s 0s ease-in
        opacity: [0.25s, default, ease-in]
        # 0.5s 2s ease-out
        background: [default, 2s, default]
    opacity: 0.5
    height: 200px
    background: red
```

