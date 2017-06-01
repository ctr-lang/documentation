<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="ctrsetvariable"></div>

<!-- stylus -->
```fixture
ctrSetVariable({
  red: #c0392b
  white: #ecf0f1
})

ctr('.test', {
  width: 200px
  color: '$white$'
  background: '$red$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  color: #ecf0f1;
  background: #c0392b;
}
```

<!-- yaml -->
```fixture
ctr:::setVariable:
  red: '#c0392b'
  white: '#ecf0f1'

.test:
  width: 200px
  color: $white$
  background: $red$
```

