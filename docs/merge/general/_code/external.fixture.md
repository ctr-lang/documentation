<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="external"></div>

<!-- stylus -->
```fixture
$MyObject = {
  height: 200px
  background: red
}

ctr('.test', {
  width: 200px
  merge: $MyObject
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 200px;
  background: #f00;
}
```

