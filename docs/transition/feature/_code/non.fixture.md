<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="non"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    // non
    non-span: {
      background: black
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(span) {
  background: #000;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    opacity: 1
    # non
    non-span:
      background: black
```

