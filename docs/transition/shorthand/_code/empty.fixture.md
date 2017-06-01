<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="empty"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      ease: 'ease-in'
    }
    shorthand: {
      background: 1s
      opacity: 0.5s 0.25s 'ease-out'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transition-delay: 0s, 0.25s;
  transition-duration: 1s, 0.5s;
  transition-property: background, opacity;
  transition-timing-function: ease-in, ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      ease: ease-in
    shorthand:
      background: 1s
      opacity: [0.5s, 0.25s, ease-out]
```

