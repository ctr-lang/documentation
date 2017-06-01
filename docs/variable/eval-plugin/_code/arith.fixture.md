<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="arith"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    base: 10
    multiplier: 2
    type: 'px'
    eval: {
      // 10 * 2 = 20
      font-size: 'arith($base$ * $multiplier$)$type$'
    }
  }
  width: 200px
  font-size: '$[eval.font-size]$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: 20px;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    base: 10
    multiplier: 2
    type: px
    eval:
      # 10 * 2 = 20
      font-size: arith($base$ * $multiplier$)$type$
  width: 200px
  font-size: $[eval.font-size]$
```

