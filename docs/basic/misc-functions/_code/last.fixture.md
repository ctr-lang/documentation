<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="last"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  font-size: unit(last(1 2 3), px)
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: 3px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  font-size: unit(last(1 2 3), px)
```

