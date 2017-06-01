<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="will-change-specific"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      duration: 1s
      will-change: 'opacity' 'background'
    }
    opacity: 1
    color: black
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  color: #000;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 1s, 1s, 1s;
  will-change: opacity, background;
  transition-property: opacity, color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      duration: 1s
      will-change: [opacity, background]
    opacity: 1
    color: black
    background: red
```

