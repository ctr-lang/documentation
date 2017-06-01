<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="state"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // state
    hover-on: {
      font-size: 2em
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
.test > section:hover {
  font-size: 2em;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: font-size;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # state
    hover-on:
      font-size: 2em
```

