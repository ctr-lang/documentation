<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    name: 'identifier-name'
    timeline: {
      '50%': {
        background: teal
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
  animation-play-state: running;
  animation-name: identifier-name;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes identifier-name {
  50% {
    background: #008080;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    name: identifier-name
    timeline:
      50%:
        background: teal
```

