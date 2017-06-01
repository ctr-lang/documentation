<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="previous"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  'component-.myKoolClass': {
    width: 100px
    'component-p': {
      color: red
      hover: {
        option: {
          attachTo: 'previous'
        }
        on: {
          opacity: 1
        }
        non: {
          opacity: 0.5
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
}
.test > .myKoolClass > p {
  color: #f00;
}
.test > .myKoolClass:hover > p {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test > .myKoolClass:not(:hover) > p {
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
  component-.myKoolClass:
    width: 100px
    component-p:
      color: red
      hover:
        option:
          attachTo: previous
        on:
          opacity: 1
        non:
          opacity: 0.5
```

