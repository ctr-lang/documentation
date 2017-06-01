<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="pick"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transitions: {
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
        // only picks duration
        pick: 'option.duration'
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
  transition-duration: 2s, 2s, 2s;
  transition-property: opacity, color, background;
  transition-timing-function: ease-in, cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transitions:
    common:
      option:
        duration: 2s
        ease: ease-in
    one:
      opacity: 1
    two:
      option:
        # only picks duration
        pick: option.duration
      color: blue
      background: red
```

