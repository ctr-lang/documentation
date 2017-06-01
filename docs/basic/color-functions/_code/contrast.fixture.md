<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="contrast"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  z-index: contrast(black, red).ratio
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  z-index: 5.3;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  z-index: contrast(black, red).ratio
```

