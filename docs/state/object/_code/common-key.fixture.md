<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  states: {
    hover: {
      on: {
        opacity: 1
      }
      non: {
        option: {
          duration: 0.5s
        }
        opacity: 0.75
      }
    }
    active: {
      color: red
    }
    // merged into each state
    common: {
      option: {
        duration: 1.25s
        delay: 0.25s
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
  opacity: 1;
  transition-delay: 0.25s;
  transition-duration: 1.25s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.75;
  transition-delay: 0.25s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:active {
  color: #f00;
  transition-delay: 0.25s;
  transition-property: color;
  transition-duration: 1.25s;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:active) {
  transition-delay: 0.25s;
  transition-property: color;
  transition-duration: 1.25s;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  states:
    hover:
      on:
        opacity: 1
      non:
        option:
          duration: 0.5s
        opacity: 0.75
    active:
      color: red
    # merged into each state
    common:
      option:
        duration: 1.25s
        delay: 0.25s
```

