<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="opposite-position"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  alignSelf: opposite-position(left)
})
```

<!-- css -->
```fixture
.test {
  right: 0;
  top: 50%;
  left: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(0, -50%);
}
```

