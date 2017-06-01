<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    // merged into both on and non
    common: {
      option: {
        duration: 1s
      }
      transform: {
        translateZ: 0
      }
    }
    on: {
      transform: {
        translateY: 20
      }
    }
    non: {
      transform: {
        translateY: 0
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
.test:hover {
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: transform;
  transform: translateZ(0) translateY(20);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: transform;
  transform: translateZ(0) translateY(0);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    # merged into both on and non
    common:
      option:
        duration: 1s
      transform:
        translateZ: 0
    on:
      transform:
        translateY: 20
    non:
      transform:
        translateY: 0
```

