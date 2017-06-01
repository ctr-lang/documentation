<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="override"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  'component-span': {
    option: {
      override: '#override'
    }
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
#override {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component-span:
    option:
      override: '#override'
    font-size: 1em
```

