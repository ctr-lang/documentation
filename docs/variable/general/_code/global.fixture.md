<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="global"></div>

<!-- stylus -->
```fixture
ctrSetVariable({
  width: 200px
  color: red
  fontSize: 1em
  pretty-cool: 300px
})

ctr('.test', {
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
ctr:::setVariable:
  width: 200px
  color: red
  fontSize: 1em
  pretty-cool: 300px

.test:
  width: $width$
  font-size: $fontSize$
  component-span:
    color: $color$
    # alternative syntax
    height: $[pretty-cool]$
```

