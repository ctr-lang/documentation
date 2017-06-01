<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  state: {
    option: {
      key: 'hover' 'focus'
      duration: 1s
    }
    on: {
      background: red
    }
    non: {
      background: blue
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:hover {
  background: #f00;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  background: #00f;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:focus {
  background: #f00;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:focus) {
  background: #00f;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  state:
    option:
      key: [hover, focus]
      duration: 1s
    on:
      background: red
    non:
      background: blue
```

