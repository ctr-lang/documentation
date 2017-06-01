<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="timeline-unit-notation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    name: 'test'
    timeline: {
      // don't need the `%`
      '0': {
        font-size: 1em
      }
      '50%': {
        font-size: 1.5em
      }
      '100%': {
        font-size: 2em
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
  animation-name: test;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test {
  0% {
    font-size: 1em;
  }
  50% {
    font-size: 1.5em;
  }
  100% {
    font-size: 2em;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    name: test
    timeline:
      # dont need the `%`
      0:
        font-size: 1em
      50%:
        font-size: 1.5em
      100%:
        font-size: 2em
```

