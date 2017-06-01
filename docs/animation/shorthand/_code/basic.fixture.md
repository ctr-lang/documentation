<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    // name will be picked up from shorthand key
    shorthand: {
      // <identifier>: duration delay ease count dir mode state
      jiving: 1s default ease-in 5 reverse both paused
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
  animation-delay: 0s;
  animation-duration: 1s;
  animation-name: jiving;
  animation-fill-mode: both;
  animation-play-state: paused;
  animation-direction: reverse;
  animation-iteration-count: 5;
  animation-timing-function: ease-in;
}
@keyframes jiving {
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
    # name will be picked up from shorthand key
    shorthand:
      # <identifier>: [duration, delay, ease, count, dir, mode, state]
      jiving: [1s, default, ease-in, 5, reverse, both, paused]
    timeline:
      50%:
        background: teal
```

