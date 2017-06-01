<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="calc"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    baseHeight: calc(100vh - 100px)
    eval: {
      halfHeight: 'calc($baseHeight$ / 2)'
    }
  }
  width: 200px
  height: '$baseHeight$'
  media-sm: {
    height: '$[eval.halfHeight]$'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: calc(100vh - 100px);
}
@media (min-width: 400px) and (max-width: 600px) {
  .test {
    height: calc((100vh - 100px) / 2);
  }
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    baseHeight: calc(100vh - 100px)
    eval:
      halfHeight: calc($baseHeight$ / 2)
  width: 200px
  height: $baseHeight$
  media-sm:
    height: $[eval.halfHeight]$
```

