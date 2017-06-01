<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="colon"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    option: {
      colon: ':'
    }
    content: 'beer'
  }
  after: {
    option: {
      colon: ':::::::::::::::::'
    }
    content: 'whiskey'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:before {
  content: "beer";
}
.test:::::::::::::::::after {
  content: "whiskey";
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  before:
    option:
      colon: ':'
    content: beer
  after:
    option:
      colon: ':::::::::::::::::'
    content: whiskey
```

