<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="object"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    myHoverState: {
      on: {
        opacity: 1
      }
      non: {
        opacity: 0.5
      }
    }
  }
  width: 200px
  hover: '$myHoverState$'
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
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
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
  $$:
    myHoverState:
      on:
        opacity: 1
      non:
        opacity: 0.5
  width: 200px
  hover: $myHoverState$
```

