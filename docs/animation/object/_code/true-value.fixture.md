<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="true-value"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animations: {
    common: {
      timeline: {
        '50%': {
          color: green
        }
      }
    }
    one: {
      option: {
        duration: 1s
        direction: 'foward'
      }
      timeline: {
        '25%': {
          background: green
        }
      }
    }
    // inherits common
    two: true
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  animation-delay: 0s, 0s;
  animation-name: one, two;
  animation-duration: 1s, 0.5s;
  animation-fill-mode: none, none;
  animation-iteration-count: 1, 1;
  animation-direction: foward, normal;
  animation-play-state: running, running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes one {
  25% {
    background: #008000;
  }
  50% {
    color: #008000;
  }
}
@keyframes two {
  50% {
    color: #008000;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animations:
    common:
      timeline:
        50%:
          color: green
    one:
      option:
        duration: 1s
        direction: foward
      timeline:
        25%:
          background: green
    # inherits common
    two: true
```

