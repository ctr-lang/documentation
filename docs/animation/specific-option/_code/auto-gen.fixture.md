<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="auto-gen"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  animation: {
    option: {
      name: 'noGenProps'
      autoGen: false
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
}
@keyframes noGenProps {
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
      name: noGenProps
      autoGen: false
    timeline:
      50%:
        background: green
```

