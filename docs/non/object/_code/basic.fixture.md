<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  nons: {
    notThe: {
      key: '.the'
      font-size: 1em
    }
    '#BlackSwan': {
      font-size: 2em
    }
    '.phenomenon': {
      font-size: 3em
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(.the) {
  font-size: 1em;
}
.test:not(#BlackSwan) {
  font-size: 2em;
}
.test:not(.phenomenon) {
  font-size: 3em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  nons:
    notThe:
      key: .the
      font-size: 1em
    '#BlackSwan':
      font-size: 2em
    .phenomenon:
      font-size: 3em
```

