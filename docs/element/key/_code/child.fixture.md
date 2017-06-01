<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="child"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  // creates a `> li` selector
  'component-li': {
    first-child: {
      font-size: 1em
    }
    last-child: {
      font-size: 2em
    }
    'nth-child(2)': {
      font-size: 3em
    }
    'nth-child(22)': {
      font-size: 4em
    }
  } 
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > li:first-child {
  font-size: 1em;
}
.test > li:last-child {
  font-size: 2em;
}
.test > li:nth-child(2) {
  font-size: 3em;
}
.test > li:nth-child(22) {
  font-size: 4em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  # creates a `> li` selector
  component-li:
    first-child:
      font-size: 1em
    last-child:
      font-size: 2em
    nth-child(2):
      font-size: 3em
    nth-child(22):
      font-size: 4em
```

