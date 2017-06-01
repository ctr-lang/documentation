<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="appendTo"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  'component-span': {
    option: {
      appendTo: '.appendTo'
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
.test > span.appendTo {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component-span:
    option:
      appendTo: .appendTo
    font-size: 1em
```

