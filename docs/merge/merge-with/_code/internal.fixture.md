<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="internal"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    component: {
      key: 'span'
      color: red
      font-size: 1em
    }
  }
  width: 200px
  mergeWith: '$component$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > span {
  color: #f00;
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    component:
      key: span
      color: red
      font-size: 1em
  width: 200px
  mergeWith: $component$
```

