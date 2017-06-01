<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="use"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // transform will be omitted
  transform: {
    use: false
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # transform will be omitted
  transform:
    use: false
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
```

