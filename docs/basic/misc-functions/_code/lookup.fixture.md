<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="lookup"></div>

<!-- stylus -->
```fixture
font-size-1 = 10px
font-size-2 = 20px
font-size-3 = 30px

for i in 1..3
  .test-{i}
    ctr({
      width: 200px
      font-size: lookup('font-size-' + i)
    })
```

<!-- css -->
```fixture
.test-1 {
  width: 200px;
  font-size: 10px;
}
.test-2 {
  width: 200px;
  font-size: 20px;
}
.test-3 {
  width: 200px;
  font-size: 30px;
}
```

