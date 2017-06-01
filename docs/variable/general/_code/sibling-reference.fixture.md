<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="sibling-reference"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    size: 12
    type: 'rem'
    font-size: 'calc($[size]$$[type]$ * ((100vw - 25rem) / 87.5))'
  }
  width: 200px
  font-size: '$font-size$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: calc(12rem * ((100vw - 25rem) / 87.5));
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    size: 12
    type: rem
    font-size: calc($[size]$$[type]$ * ((100vw - 25rem) / 87.5))
  width: 200px
  font-size: $font-size$
```

