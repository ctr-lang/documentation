<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="selector-false"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: 'span'
    selector: false
    font-size: 3em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test span {
  font-size: 3em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: span
    selector: false
    font-size: 3em
```

