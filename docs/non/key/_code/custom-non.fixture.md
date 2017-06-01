<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="custom-non"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customNon: {
    key: 'span'
    font-size: 1em
  }
  customNotWrap: {
    key: '#x-or-y'
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(span) {
  font-size: 1em;
}
.test:not(#x-or-y) {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customNon:
    key: span
    font-size: 1em
  customNotWrap:
    key: '#x-or-y'
    font-size: 2em
```

