<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="hyphenated-component"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  'component-span': {
    font-size: 1em
  }
  'component-.class': {
    font-size: 2em
  }
  'comp-p': {
    font-size: 3em
  }
  'comp-#id': {
    font-size: 4em
  }
  'comp-h1': {
    // key overrides hyphenated value
    key: '.override'
    font-size: 5em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > span {
  font-size: 1em;
}
.test > .class {
  font-size: 2em;
}
.test > p {
  font-size: 3em;
}
.test > #id {
  font-size: 4em;
}
.test > .override {
  font-size: 5em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component-span:
    font-size: 1em
  component-.class:
    font-size: 2em
  comp-p:
    font-size: 3em
  comp-#id:
    font-size: 4em
  comp-h1:
    # key overrides hyphenated value
    key: .override
    font-size: 5em
```

