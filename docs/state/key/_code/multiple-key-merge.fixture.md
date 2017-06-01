<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key-merge"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customStateOptions: {
    option: {
      duration: 1s
      key: 'hover' 'active'
    }
    on: {
      opacity: 1
    }
    non: {
      opacity: 0.75
      background: red
    }
  }
  hover-on: {
    background: green
  }
  active-on: {
    background: blue
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  background: #008000;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.75;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 1s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:active {
  opacity: 1;
  background: #00f;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:active) {
  opacity: 0.75;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 1s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customStateOptions:
    option:
      duration: 1s
      key: [hover, active]
    on:
      opacity: 1
    non:
      opacity: 0.75
      background: red
  hover-on:
    background: green
  active-on:
    background: blue
```

