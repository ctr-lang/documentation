<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="true-value"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  states: {
    common: {
      option: {
        duration: 2s
        ease: 'ease-in'
      }
      on: {
        opacity: 1
      }
    }
    hover: {
      non: {
        opacity: 0.75
      }
    }
    // inherits common
    focus: true
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
  transition-delay: 0s;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
.test:not(:hover) {
  opacity: 0.75;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:focus {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  states:
    common:
      option:
        duration: 2s
        ease: ease-in
      on:
        opacity: 1
    hover:
      non:
        opacity: 0.75
    # inherits common
    focus: true
```

