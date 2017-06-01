<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="iteration" class="code-cont"></div>

<!-- stylus -->
```fixture
$font-size-1 = 1em
$font-size-2 = 2em
$font-size-3 = 3em

for i in 1..3
  ctr('.test' + i, {
    width: 200px
    font-size: lookup('$font-size-' + i)
  })
```

<!-- css -->
```fixture
.test1 {
  width: 200px;
  font-size: 1em;
}
.test2 {
  width: 200px;
  font-size: 2em;
}
.test3 {
  width: 200px;
  font-size: 3em;
}
```

