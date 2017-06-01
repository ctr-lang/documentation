<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="property-variable"></div>

<!-- stylus -->
```fixture
ctrSetClass('HoverSingle', {
  $$: {
    property: 'background'
    value: blue
  }
  hover: {
    $property$: '$value$'
  }
})

ctr('.test', {
  width: 200px
  extend: {
    hoverBackground: {
      class: 'HoverSingle'
      value: red
    }
    hoverColor: {
      class: 'HoverSingle'
      property: color
      value: red
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
  color: #f00;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
ctr:::setClass:HoverSingle:
  $$:
    property: background
    value: blue
  hover:
    $property$: $value$

.test:
  width: 200px
  extend:
    hoverBackground:
      class: HoverSingle
      value: red
    hoverColor:
      class: HoverSingle
      property: color
      value: red
```

