<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="animation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // animation
    animation: {
      name: 'stellar-moves'
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
.test > section {
  font-size: 1em;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-name: stellar-moves;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes stellar-moves {
  50% {
    color: #f00;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # animation
    animation:
      name: stellar-moves
      timeline:
        50%:
          color: red
```

