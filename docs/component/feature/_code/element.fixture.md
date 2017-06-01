<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="element"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // element
    before: {
      content: 'test'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
}
.test > section::before {
  content: "test";
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # element
    before:
      content: test
```

