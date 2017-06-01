<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="omit"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    font-size: 1em
    background: red
    shorthand: {
      height: 1s
      // omitted
      font-size: false
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
  height: 400px;
  font-size: 1em;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 0.5s;
  transition-property: height, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    height: 400px
    font-size: 1em
    background: red
    shorthand:
      height: 1s
      # omitted
      font-size: false
```

