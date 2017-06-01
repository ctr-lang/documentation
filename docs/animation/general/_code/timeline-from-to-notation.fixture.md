<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="timeline-from-to-notation"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    name: 'test'
    timeline: {
      'from': {
        font-size: 1rem
      }
      'to': {
        font-size: 1.2rem
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
  from {
    font-size: 1rem;
  }
  to {
    font-size: 1.2rem;
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
      from:
        font-size: 1rem
      to:
        font-size: 1.2rem
```

