<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    shorthand: {
      opacity: 1s 10s 'ease-out'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 10s;
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    opacity: 1
    shorthand:
      opacity: [1s, 10s, ease-out]
```

