<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="empty"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-non: {
    shorthand: {
      height: 1s 1s 'ease-in'
      width: 2s 2s 'ease-out'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(:hover) {
  transition-delay: 1s, 2s;
  transition-duration: 1s, 2s;
  transition-property: height, width;
  transition-timing-function: ease-in, ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-non:
    shorthand:
      height: [1s, 1s, ease-in]
      width: [2s, 2s, ease-out]
```

