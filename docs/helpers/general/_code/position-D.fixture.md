<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="position-D"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // position: <type> <1> <2> <3> <4>
  position: absolute 10px 20px 30px 40px
})
```

<!-- css -->
```fixture
.test {
  top: 10px;
  left: 40px;
  right: 20px;
  bottom: 30px;
  width: 200px;
  position: absolute;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # position: [<type>, <1>, <2>, <3>, <4>]
  position: [absolute, 10px, 20px, 30px, 40px]
```

