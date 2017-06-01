<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="non"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // non
    non-span: {
      height: 400px
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
.test > section:not(span) {
  height: 400px;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # non
    non-span:
      height: 400px
```

