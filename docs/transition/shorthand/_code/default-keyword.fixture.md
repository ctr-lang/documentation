<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="default-keyword"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      delay: 4s
      duration: 20s
      ease: 'ease-in'
      shorthand: {
        background: 2s default default
        color: default 1s 'ease-out'
        opacity: 10s 5s default
      }
    }
    opacity: 1
    color: red
    background: black
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  color: #f00;
  width: 200px;
  background: #000;
  transition-delay: 4s, 1s, 5s;
  transition-duration: 2s, 20s, 10s;
  transition-property: background, color, opacity;
  transition-timing-function: ease-in, ease-out, ease-in;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      delay: 4s
      duration: 20s
      ease: ease-in
      shorthand:
        background: [2s, default, default]
        color: [default, 1s, ease-out]
        opacity: [10s, 5s, default]
    opacity: 1
    color: red
    background: black
```

