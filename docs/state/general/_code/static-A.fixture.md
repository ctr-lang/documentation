<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="static-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    static: {
      opacity: 1
      height: 400px
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
  opacity: 1;
  height: 400px;
}
.test:not(:hover) {
  opacity: 1;
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    static:
      opacity: 1
      height: 400px
```

