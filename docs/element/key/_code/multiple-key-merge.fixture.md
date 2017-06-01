<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key-merge"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customElement: {
    key: 'before' 'after' 'first-child'
    position: absolute
  }
  before: {
    content: 'ctr'
    bottom: 0
  }
  after: {
    content: 'test'
    top: 0
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  bottom: 0;
  content: "ctr";
  position: absolute;
}
.test::after {
  top: 0;
  content: "test";
  position: absolute;
}
.test:first-child {
  position: absolute;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  customElement:
    key: [before, after, first-child]
    position: absolute
  before:
    content: ctr
    bottom: 0
  after:
    content: test
    top: 0
```

