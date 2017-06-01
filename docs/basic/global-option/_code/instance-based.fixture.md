<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="instance-based"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  // must be declared in the root
  option: {
    global: {
      sort: '-len'
    }
    hover: {
      duration: 2s
    }
  }
  width: 200px
  hover: {
    background: green
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:hover {
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-property: background;
  transition-duration: 2s;
  transition-delay: 0s;
  background: #008000;
}
.test:not(:hover) {
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-property: background;
  transition-duration: 2s;
  transition-delay: 0s;
}
```

<!-- yaml -->
```fixture
.test:
  # must be declared in the root
  option:
    global:
      sort: -len
    hover:
      duration: 2s
  width: 200px
  hover:
    background: green
```

