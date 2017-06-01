<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="override"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      option: {
        override: '#override:hover'
      }
      opacity: 1
    }
    non: {
      option: {
        override: '#override:not(:hover)'
      }
      opacity: 0.5
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
#override:hover {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
#override:not(:hover) {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      option:
        override: '#override:hover'
      opacity: 1
    non:
      option:
        override: '#override:not(:hover)'
      opacity: 0.5
```

