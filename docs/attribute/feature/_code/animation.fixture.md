<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="animation"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    color: red
    // animation
    animation: {
      name: 'test'
      timeline: {
        '50': {
          font-size: 10px
        }
      }
    }
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  color: #f00;
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
    font-size: 10px;
  }
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    color: red
    # animation
    animation:
      name: test
      timeline:
        50:
          font-size: 10px
```

