<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="animation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // animation
    animation: {
      name: 'my-cool-animation'
      timeline: {
        '50%': {
          color: red
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
.test:first-child {
  height: 400px;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-name: my-cool-animation;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes my-cool-animation {
  50% {
    color: #f00;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  first-child:
    height: 400px
    # animation
    animation:
      name: my-cool-animation
      timeline:
        50%:
          color: red
```

