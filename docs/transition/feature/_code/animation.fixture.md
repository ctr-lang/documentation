<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="animation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    // animation
    animation: {
      name: 'test'
      timeline: {
        '50%': {
          background: black
        }
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  animation-delay: 0s;
  animation-name: test;
  transition-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  transition-duration: 0.5s;
  animation-direction: normal;
  animation-iteration-count: 1;
  transition-property: opacity;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test {
  50% {
    background: #000;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    opacity: 1
    # animation
    animation:
      name: test
      timeline:
        50%:
          background: black
```

