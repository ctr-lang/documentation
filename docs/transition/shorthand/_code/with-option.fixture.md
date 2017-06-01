<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="with-option"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      ease: 'ease-out'
      shorthand: {
        background: 1s 10s ease-in
        color: 2s
      }
    }
    color: red
    background: green
  }
})
```

<!-- css -->
```fixture
.test {
  color: #f00;
  width: 200px;
  background: #008000;
  transition-delay: 10s, 0s;
  transition-duration: 1s, 2s;
  transition-property: background, color;
  transition-timing-function: ease-in, ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      ease: ease-out
      shorthand:
        background: [1s, 10s, ease-in]
        color: 2s
    color: red
    background: green
```

