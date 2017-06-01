<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="center-left"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  align: 'center-left'
})
```

<!-- css -->
```fixture
.test {
  left: 0;
  top: 50%;
  right: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(0, -50%);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  align: center-left
```

