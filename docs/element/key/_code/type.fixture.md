<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="type"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // creates a `> li` selector
  'component-li': {
    first-of-type: {
      font-size: 1em
    }
    last-of-type: {
      font-size: 2em
    }
    'nth-last-of-type(2)': {
      font-size: 3em
    }
  } 
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > li:first-of-type {
  font-size: 1em;
}
.test > li:last-of-type {
  font-size: 2em;
}
.test > li:nth-last-of-type(2) {
  font-size: 3em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # creates a `> li` selector
  component-li:
    first-of-type:
      font-size: 1em
    last-of-type:
      font-size: 2em
    nth-last-of-type(2):
      font-size: 3em
```

