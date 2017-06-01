<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  components: {
    'span': {
      font-size: 1em
    }
    '#for': {
      font-size: 2em
    }
    '.linus': {
      selector: '+'
      font-size: 3em
    }
    random: {
      // specified key
      key: 'li'
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
.test > span {
  font-size: 1em;
}
.test > #for {
  font-size: 2em;
}
.test + .linus {
  font-size: 3em;
}
.test > li {
  font-size: 4em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  components:
    span:
      font-size: 1em
    '#for':
      font-size: 2em
    .linus:
      selector: +
      font-size: 3em
    random:
      # specified key
      key: li
      font-size: 4em
```

