<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="animation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
    // animation
    animation: {
      name: 'test'
      timeline: {
        '50%': {
          font-size: 1em
        }
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.bad) {
  height: 200px;
  animation-delay: 0s;
  animation-name: test;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test {
  50% {
    font-size: 1em;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # animation
    animation:
      name: test
      timeline:
        50%:
          font-size: 1em
```

