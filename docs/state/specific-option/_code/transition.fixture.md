<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="transition"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      // transition will be omitted
      transition: false
    }
    color: red
    height: 200px
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
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    option:
      # transition will be omitted
      transition: false
    color: red
    height: 200px
```

