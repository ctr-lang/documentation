<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="hyphentated-non"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 100px
  'non-.bad': {
    font-size: 1em
  }
  // Does not have to be String but...
  // better be safe than sorry
  'not-span': {
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 100px;
}
.test:not(.bad) {
  font-size: 1em;
}
.test:not(span) {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 100px
  non-.bad:
    font-size: 1em
  # Does not have to be String but...
  # better be safe than sorry
  not-span:
    font-size: 2em
```

