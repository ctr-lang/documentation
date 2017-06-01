<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="set-variables"></div>

<!-- stylus -->
```fixture
// sets internal ctr global variable 
ctrSetVariable({
  component: {
    key: 'span'
    font-size: 1em
    background: red
  }
})

ctr('.test', {
  width: 200px
  mergeWith: '$component$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > span {
  font-size: 1em;
  background: #f00;
}
```

<!-- yaml -->
```fixture
# sets internal ctr global variable 
ctr:::setVariable:
  component:
    key: span
    font-size: 1em
    background: red

.test:
  width: 200px
  mergeWith: $component$
```

