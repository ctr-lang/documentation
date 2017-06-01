<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="shorthand-properties"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      duration: 1s
      transitionShorthand: true
    }
    opacity: 1
    color: black
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  color: #000;
  width: 200px;
  background: #f00;
  transition: opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s, color 1s cubic-bezier(0.42, 0, 0.58, 1) 0s, background 1s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      duration: 1s
      transitionShorthand: true
    opacity: 1
    color: black
    background: red
```

