<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="private"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    width: 200px
    color: red
    fontSize: 1em
    pretty-cool: 300px
  }
  width: '$width$'
  font-size: '$fontSize$'
  component-span: {
    color: '$color$'
    // alternative syntax
    height: '$[pretty-cool]$'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: 1em;
}
.test > span {
  color: #f00;
  height: 300px;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    width: 200px
    color: red
    fontSize: 1em
    pretty-cool: 300px
  width: $width$
  font-size: $fontSize$
  component-span:
    color: $color$
    # alternative syntax
    height: $[pretty-cool]$
```

