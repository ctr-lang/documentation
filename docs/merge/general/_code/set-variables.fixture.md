<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="set-variables"></div>

<!-- stylus -->
```fixture
// sets internal ctr global variable 
ctrSetVariable({
  primaryColorPair: {
    color: red
    background: snow
  }
  secondaryColorPair: {
    color: blue
    background: antiquewhite
  }
})

ctr('.test', {
  width: 200px
  component-article: {
    component-h1: {
      merge: '$primaryColorPair$'
    }
    component-h3: {
      merge: '$secondaryColorPair$'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > article > h1 {
  color: #f00;
  background: #fffafa;
}
.test > article > h3 {
  color: #00f;
  background: #faebd7;
}
```

<!-- yaml -->
```fixture
# sets internal ctr global variable
ctr:::setVariable:
  primaryColorPair:
    color: red
    background: snow
  secondaryColorPair:
    color: blue
    background: antiquewhite

.test:
  width: 200px
  component-article:
    component-h1:
      merge: $primaryColorPair$
    component-h3:
      merge: $secondaryColorPair$
```

