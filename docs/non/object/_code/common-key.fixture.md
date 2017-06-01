<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  nons: {
    '.pentagon': {
      font-size: 1em
    }
    '.nonagon': {
      font-size: 2em
    }
    '#pentadecagon': {
      font-size: 3em
    }
    common: {
      border-radius: 4px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.pentagon) {
  font-size: 1em;
  border-radius: 4px;
}
.test:not(.nonagon) {
  font-size: 2em;
  border-radius: 4px;
}
.test:not(#pentadecagon) {
  font-size: 3em;
  border-radius: 4px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  nons:
    .pentagon:
      font-size: 1em
    .nonagon:
      font-size: 2em
    '#pentadecagon':
      font-size: 3em
    common:
      border-radius: 4px
```

