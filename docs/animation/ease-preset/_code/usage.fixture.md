<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="usage"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    name: 'easey-living'
    // ease preset
    ease: 'easeInOutQuart'
    timeline: {
      '50%': {
        color: red
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
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-name: easey-living;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}
@keyframes easey-living {
  50% {
    color: #f00;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    name: easey-living
    # ease preset
    ease: easeInOutQuart
    timeline:
      50%:
        color: red
```

