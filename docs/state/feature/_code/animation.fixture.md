<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="animation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    // animation
    animation: {
      name: 'beer'
      timeline: {
        '50%': {
          color: blue
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
.test:hover {
  animation-delay: 0s;
  animation-name: beer;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes beer {
  50% {
    color: #00f;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    # animation
    animation:
      name: beer
      timeline:
        50%:
          color: blue
```

