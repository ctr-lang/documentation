<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  attributes: {
    'title~="test1"': {
      font-size: 1em
    }
    '[class|="test2"]': {
      font-size: 2em
    }
    kool: {
      key: 'class^="test3"'
      font-size: 3em
    }
    beerMe: {
      key: '[class$="test4"]'
      font-size: 4em
    }
    myName: {
      key: 'class*="te"'
      font-size: 5em
    }
    user: {
      key: '[class*="artisin"]'
      font-size: 6em
    }
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[title~="test1"] {
  font-size: 1em;
}
.test > div[class|="test2"] {
  font-size: 2em;
}
.test > div[class^="test3"] {
  font-size: 3em;
}
.test > div[class$="test4"] {
  font-size: 4em;
}
.test > div[class*="te"] {
  font-size: 5em;
}
.test > div[class*="artisin"] {
  font-size: 6em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  attributes:
    title~="test1":
      font-size: 1em
    '[class|="test2"]':
      font-size: 2em
    kool:
      key: class^="test3"
      font-size: 3em
    beerMe:
      key: '[class$="test4"]'
      font-size: 4em
    myName:
      key: class*="te"
      font-size: 5em
    user:
      key: '[class*="artisin"]'
      font-size: 6em
```

