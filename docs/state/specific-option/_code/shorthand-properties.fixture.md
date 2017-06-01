<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="shorthand-properties"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      transitionShorthand: true
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
  transition: font-size 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s, color 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s, height 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    option:
      transitionShorthand: true
    color: red
    height: 200px
    font-size: 2em
```

