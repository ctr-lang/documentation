<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-attribute"></div>

<!-- stylus -->
```fixture
ctr('.test > div', {
  width: 200px
  customAttrForArtClass: {
    key: '[class*="art"]'
    font-size: 1em
  }
  customAttrForIsIn: {
    key: '[id*="isin"]'
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test > div {
  width: 200px;
}
.test > div[class*="art"] {
  font-size: 1em;
}
.test > div[id*="isin"] {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test > div:
  width: 200px
  customAttrForArtClass:
    key: '[class*="art"]'
    font-size: 1em
  customAttrForIsIn:
    key: '[id*="isin"]'
    font-size: 2em
```

