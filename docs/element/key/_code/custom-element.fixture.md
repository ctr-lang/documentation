<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-element"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customElement: {
    option: {
      key: 'first-line'
    }
    font-size: 1em
  }
  customEl-YOLO: {
    option: {
      key: 'lang(es)'
    }
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::first-line {
  font-size: 1em;
}
.test:lang(es) {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customElement:
    option:
      key: first-line
    font-size: 1em
  customEl-YOLO:
    option:
      key: lang(es)
    font-size: 2em
```

