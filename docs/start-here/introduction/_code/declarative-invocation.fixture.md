<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="declarative-invocation"></div>

<!-- stylus -->
```fixture
ctr('.aClass', {
  width: 200px
  height: 200px
})

ctr('#aId', {
  width: 200px
  height: 200px
  background: red
})

ctr('#aId span', {
  width: 200px
  font-size: 1em
})
```

<!-- css -->
```fixture
.aClass {
  width: 200px;
  height: 200px;
}
#aId {
  width: 200px;
  height: 200px;
  background: #f00;
}
#aId span {
  width: 200px;
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.aClass:
  width: 200px
  height: 200px
'#aId':
  width: 200px
  height: 200px
  background: red
'#aId span':
  width: 200px
  font-size: 1em
```

