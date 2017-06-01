<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-string"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    hLength: 1px
    vLength: 2px
    blur: 3px
    spread: 4px
    background: red
  }
  width: 200px
  box-shadow: '$hLength$ $vLength$ $blur$ $spread$ $background$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  box-shadow: 1px 2px 3px 4px #f00;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    hLength: 1px
    vLength: 2px
    blur: 3px
    spread: 4px
    background: red
  width: 200px
  box-shadow: [$hLength$, $vLength$, $blur$, $spread$, $background$]
```

