<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="grid"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    // grid
    grid: {
      column: '1/3'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  flex: 0 0 auto;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:nth-child(1n) {
  margin-right: 30px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: margin-right;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:last-child {
  margin-right: 0;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: margin-right;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: float, margin-right;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    opacity: 1
    # grid
    grid:
      column: 1/3
```

