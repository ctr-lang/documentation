<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common"></div>

<!-- stylus -->
```fixture
ctrSetClass('BackgroundOnHover', {
  $$: {
    opacity: 1
    background: red
  }
  hover-on: {
    opacity: '$opacity$'
    background: '$background$'
  }
})

ctrSetClass('BackgroundOnFocus', {
  $$: {
    opacity: 1
    background: red
  }
  focus-on: {
    opacity: '$opacity$'
    background: '$background$'
  }
})


ctr('.test', {
  width: 200px
  extend: {
    // common extend <class> Object
    $$: {
      opacity: 0.5
    }
    class: 'BackgroundOnHover' 'BackgroundOnFocus'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:focus {
  opacity: 0.5;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:hover {
  opacity: 0.5;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
ctr:::setClass:BackgroundOnHover:
  $$:
    opacity: 1
    background: red
  hover-on:
    opacity: $opacity$
    background: $background$

ctr:::setClass:BackgroundOnFocus:
  $$:
    opacity: 1
    background: red
  focus-on:
    opacity: $opacity$
    background: $background$


.test:
  width: 200px
  extend:
    # common extend <class> Object
    $$:
      opacity: 0.5
    class: [BackgroundOnHover, BackgroundOnFocus]
```

