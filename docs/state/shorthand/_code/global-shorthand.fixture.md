<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="global-shorthand"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      height: 400px
      opacity: 1
    }
    non: {
      height: 200px
      opacity: 0.5
    }
    shorthand: {
      height: 1s 1s 'ease-in'
      opacity: 2s 2s 'ease-out'
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
  height: 400px;
  transition-delay: 1s, 2s;
  transition-duration: 1s, 2s;
  transition-property: height, opacity;
  transition-timing-function: ease-in, ease-out;
}
.test:not(:hover) {
  opacity: 0.5;
  height: 200px;
  transition-delay: 1s, 2s;
  transition-duration: 1s, 2s;
  transition-property: height, opacity;
  transition-timing-function: ease-in, ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      height: 400px
      opacity: 1
    non:
      height: 200px
      opacity: 0.5
    shorthand:
      height: [1s, 1s, ease-in]
      opacity: [2s, 2s, ease-out]
```

