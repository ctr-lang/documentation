<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="selector"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'span'
    selector: '+'
    font-size: 2em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test + span {
  font-size: 2em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: span
    selector: +
    font-size: 2em
```

