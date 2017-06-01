<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="step-option"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    option: {
      ease: steps(5, start)
    }
    timeline: 'stepTest'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-name: stepTest;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: steps(5, start);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    option:
      ease: steps(5, start)
    timeline: stepTest
```

