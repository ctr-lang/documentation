<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="timeline-reference"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    name: 'my-kool-animation'
    duration: 3s
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 3s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-name: my-kool-animation;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    name: my-kool-animation
    duration: 3s
```

