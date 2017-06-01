<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
// root === 0
ctr('.test', {
  width: 200px
  // .myKoolClass === 1
  'component-.myKoolClass': {
    size: 100px
    // p === 2
    'component-p': {
      hover: {
        on: {
          option: {
            // attach to .myKoolClass
            attachTo: 1
          }
          color: red
        }
        non: {
          option: {
            // attach to root
            attachTo: 0
          }
          color: blue
        }
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
.test > .myKoolClass {
  width: 100px;
  height: 100px;
}
.test > .myKoolClass:hover > p {
  color: #f00;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) > .myKoolClass > p {
  color: #00f;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
# root === 0
.test:
  width: 200px
  # .myKoolClass === 1
  component-.myKoolClass:
    size: 100px
    # p === 2
    component-p:
      hover:
        on:
          option:
            # attach to .myKoolClass
            attachTo: 1
          color: red
        non:
          option:
            # attach to root
            attachTo: 0
          color: blue
```

