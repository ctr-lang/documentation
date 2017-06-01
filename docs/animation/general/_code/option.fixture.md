<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="option"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    option: {
      name: 'test'
      // animation-delay
      delay: 100s
      // animation-duration
      duration: 200s
      // animation-direction
      direction: normal
      // animation-play-state
      state: paused
      // animation-fill-mode
      mode: forwards
      // animation-iteration-count
      count: 420
      // animation-timing-function
      ease: ease-out
    }
    timeline: {
      '50%': {
        width: 400px
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  animation-name: test;
  animation-delay: 100s;
  animation-duration: 200s;
  animation-direction: normal;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  animation-iteration-count: 420;
  animation-timing-function: ease-out;
}
@keyframes test {
  50% {
    width: 400px;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    option:
      name: test
      # animation-delay
      delay: 100s
      # animation-duration
      duration: 200s
      # animation-direction
      direction: normal
      # animation-play-state
      state: paused
      # animation-fill-mode
      mode: forwards
      # animation-iteration-count
      count: 420
      # animation-timing-function
      ease: ease-out
    timeline:
      50%:
        width: 400px
```

