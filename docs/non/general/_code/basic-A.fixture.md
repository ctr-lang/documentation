<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  non: {
    key: 'p'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:not(p) {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  non:
    key: p
    font-size: 1em
```

