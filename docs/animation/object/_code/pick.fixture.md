<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="pick"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animations: {
    common: {
      option: {
        duration: 1s
        direction: 'foward'
      }
    }
    one: {
      timeline: {
        '50%': {
          background: green
        }
      }
    }
    two: {
      option: {
        // only picks the duration
        pick: 'option.duration'
      }
      timeline: {
        '50%': {
          color: green
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
  animation-delay: 0s, 0s;
  animation-name: one, two;
  animation-duration: 1s, 1s;
  animation-fill-mode: none, none;
  animation-iteration-count: 1, 1;
  animation-direction: foward, normal;
  animation-play-state: running, running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes one {
  50% {
    background: #008000;
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
      option:
        duration: 1s
        direction: foward
    one:
      timeline:
        50%:
          background: green
    two:
      option:
        # only picks the duration
        pick: option.duration
      timeline:
        50%:
          color: green
```

