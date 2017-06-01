<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="with-option-values"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    option: {
      state: paused
      delay: 2s
      shorthand: {
        // default keyword inherit the
        // parent option above or global
        kool: 1s default ease-in 5
      }
    }
    timeline: {
      '50%': {
        background: teal
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  animation-delay: 2s;
  animation-name: kool;
  animation-duration: 1s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-play-state: paused;
  animation-iteration-count: 5;
  animation-timing-function: ease-in;
}
@keyframes kool {
  50% {
    background: #008080;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    option:
      state: paused
      delay: 2s
      shorthand:
        # default keyword inherit the
        # parent option above or global
        kool: [1s, default, ease-in, 5]
    timeline:
      50%:
        background: teal
```

