<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="applyTo"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  'component-span': {
    option: {
      applyTo: '.applyTo'
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
.test > span .applyTo {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component-span:
    option:
      applyTo: .applyTo
    font-size: 1em
```

