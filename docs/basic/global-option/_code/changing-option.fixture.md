<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="changing-option" class="code-cont"></div>

<!-- stylus -->
```fixture
// setting the default options
ctrSetOption({
  hover: {
    duration: 2s
  }
  global: {
    sort: '-len'
  }
})

ctr('.test', {
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
# setting the default options
ctr:::setOption:
  hover:
    duration: 2s
  global:
    sort: '-len'


'.test':
  width: 200px
  hover:
    background: green
```

