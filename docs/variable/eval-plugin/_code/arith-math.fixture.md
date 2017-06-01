<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="arith-math"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    base: 10
    eval: {
      // 10 * 3.14
      top: 'arith( $base$ * Math.PI )'
      // 10 * 0.9
      left: 'arith( $base$ * Math.sin(3) )'
    }
  }
  top: '$[eval.top]$'
  left: '$[eval.left]$'
})
```

<!-- css -->
```fixture
.test {
  left: 1.4112;
  top: 31.4159;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    base: 10
    eval:
      # 10 * 3.14
      top: arith( $base$ * Math.PI )
      # 10 * 0.9
      left: arith( $base$ * Math.sin(3) )
  top: $[eval.top]$
  left: $[eval.left]$
```

