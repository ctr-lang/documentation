<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="omit"></div>

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
    focus: {
      option: {
        // omits duration
        omit: 'option.duration'
      }
      on: {
        height: 400px
      }
      non: {
        opacity: 0.25
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
  height: 400px;
  transition-delay: 0s, 0s;
  transition-duration: 2s, 2s;
  transition-property: height, opacity;
  transition-timing-function: ease-in, ease-in;
}
.test:not(:focus) {
  opacity: 0.25;
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
    focus:
      option:
        # omits duration
        omit: option.duration
      on:
        height: 400px
      non:
        opacity: 0.25
```

