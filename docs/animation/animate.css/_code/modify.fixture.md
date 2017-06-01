<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="modify"></div>

<!-- stylus -->
```fixture
// override default option
ctr('.override', {
  width: 200px
  animation: {
    option: {
      delay: 10s
      duration: 10s
      ease: 'ease-in'
    }
    preset: 'bounceIn'
  }
})
```

<!-- css -->
```fixture
.override {
  width: 200px;
  animation-delay: 10s;
  animation-duration: 10s;
  animation-name: bounceIn;
  animation-fill-mode: both;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease-in;
}
@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
```

<!-- yaml -->
```fixture
# override default option
.override:
  width: 200px
  animation:
    option:
      delay: 10s
      duration: 10s
      ease: ease-in
    preset: bounceIn
```

