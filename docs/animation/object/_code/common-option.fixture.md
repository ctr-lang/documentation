<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-option"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animations: {
    // merged into each animation
    common: {
      option: {
        state: paused
        duration: 1s
      }
    }
    making-magic: {
      timeline: {
        '50%': {
          background: green
        }
      }
    }
    regularly: {
      option: {
        // trumps common
        duration: 22s
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
  animation-duration: 1s, 22s;
  animation-fill-mode: none, none;
  animation-iteration-count: 1, 1;
  animation-direction: normal, normal;
  animation-play-state: paused, paused;
  animation-name: making-magic, regularly;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes making-magic {
  50% {
    background: #008000;
  }
}
@keyframes regularly {
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
    # merged into each animation
    common:
      option:
        state: paused
        duration: 1s
    making-magic:
      timeline:
        50%:
          background: green
    regularly:
      option:
        # trumps common
        duration: 22s
      timeline:
        50%:
          color: green
```

