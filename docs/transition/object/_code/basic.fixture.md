<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transitions: {
    one: {
      opacity: 1
    }
    two: {
      color: blue
      background: red
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  color: #00f;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.5s, 0.5s, 0.5s;
  transition-property: opacity, color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transitions:
    one:
      opacity: 1
    two:
      color: blue
      background: red
```

