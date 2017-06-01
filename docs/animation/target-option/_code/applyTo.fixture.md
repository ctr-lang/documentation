<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="applyTo"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    option: {
      applyTo: span
    }
    timeline: 'applyToTest'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test span {
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-name: applyToTest;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    option:
      applyTo: span
    timeline: applyToTest
```

