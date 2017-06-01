<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="transition-specific"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      // only creates transitions for color + font-size
      transition: 'color' 'font-size'
    }
    color: red
    height: 200px
    font-size: 2em
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
  height: 200px;
  font-size: 2em;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: font-size, color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    option:
      # only creates transitions for color + font-size
      transition: [color, font-size]
    color: red
    height: 200px
    font-size: 2em
```

