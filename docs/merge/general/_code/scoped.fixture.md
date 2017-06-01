<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="scoped"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    fontHeader: {
      font-family: 'Ubuntu'
    }
    fontBody: {
      font-family: 'Lato'
    }
    fontStyle: {
      font-weight: normal
      font-style: normal
      font-size: 1em
      color: black
    }
  }
  width: 200px
  font-size: 1.2em
  merge: '$fontHeader$' '$fontStyle$'
  'component-.bodyText': {
    color: gray
    merge: '$fontBody$' '$fontStyle$'
  }
})
```

<!-- css -->
```fixture
.test {
  color: #000;
  width: 200px;
  font-size: 1.2em;
  font-style: normal;
  font-family: Ubuntu;
  font-weight: normal;
}
.test > .bodyText {
  color: #808080;
  font-size: 1em;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    fontHeader:
      font-family: Ubuntu
    fontBody:
      font-family: Lato
    fontStyle:
      font-weight: normal
      font-style: normal
      font-size: 1em
      color: black
  width: 200px
  font-size: 1.2em
  merge: [$fontHeader$, $fontStyle$]
  component-.bodyText:
    color: gray
    merge: [$fontBody$, $fontStyle$]
```

