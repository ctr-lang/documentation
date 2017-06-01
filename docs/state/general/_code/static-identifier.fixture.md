<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="static-identifier"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  link: {
    on: {
      color: red
    }
    non: {
      color: blue
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:link {
  color: #f00;
}
.test:not(:link) {
  color: #00f;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  link:
    on:
      color: red
    non:
      color: blue
```

