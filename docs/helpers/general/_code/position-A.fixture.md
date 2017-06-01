<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="position-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // position: <type> <1> <1> <1> <1>
  position: absolute 10px
})
```

<!-- css -->
```fixture
.test {
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  width: 200px;
  position: absolute;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # position: [<type>, <1>, <1>, <1>, <1>]
  position: [absolute, 10px]
```

