<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key-merge"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customComp: {
    key: '#thanksFor' '.the' '.beer'
    font-size: 1em
  }
  'comp-#thanksFor': {
    color: red
  }
  'comp-.beer': {
    color: blue
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > #thanksFor {
  color: #f00;
  font-size: 1em;
}
.test > .the {
  font-size: 1em;
}
.test > .beer {
  color: #00f;
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customComp:
    key: ['#thanksFor', .the, .beer]
    font-size: 1em
  comp-#thanksFor:
    color: red
  comp-.beer:
    color: blue
```

