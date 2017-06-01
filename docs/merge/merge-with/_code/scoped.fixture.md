<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="scoped"></div>

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
  components: {
    h1: {
      mergeWith: '$component$'
    }
    h2: {
      mergeWith: '$component$'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > h1 > span {
  color: #f00;
  font-size: 1em;
}
.test > h2 > span {
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
  components:
    h1:
      mergeWith: $component$
    h2:
      mergeWith: $component$
```

