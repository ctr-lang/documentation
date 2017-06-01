<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="shorthand-properties"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    option: {
      name: 'shorthand'
      animationShorthand: true
    }
    timeline: {
      '50%': {
        background: green
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  animation: 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s 1 normal none running shorthand;
}
@keyframes shorthand {
  50% {
    background: #008000;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  animation:
    option:
      name: shorthand
      animationShorthand: true
    timeline:
      50%:
        background: green
```

