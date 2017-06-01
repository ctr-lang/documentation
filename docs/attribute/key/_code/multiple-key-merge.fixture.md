<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key-merge"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  customAttr: {
    key: '[class*="bathtub"]' '[class^="gin"]' '[title~="isin"]'
    font-size: 2em
  }
  'attr-class*="bathtub"': {
    color: red
  }
  'attr-class^="gin"': {
    color: black
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="bathtub"] {
  color: #f00;
  font-size: 2em;
}
.test > div[class^="gin"] {
  color: #000;
  font-size: 2em;
}
.test > div[title~="isin"] {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  customAttr:
    key: ['[class*="bathtub"]', '[class^="gin"]', '[title~="isin"]']
    font-size: 2em
  attr-class*="bathtub":
    color: red
  attr-class^="gin":
    color: black
```

