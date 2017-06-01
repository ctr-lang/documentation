<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="string"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    content: 'hacker news'
  }
  width: 200px
  before: {
    content: '$content$'
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  content: "hacker news";
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    content: [hacker, news]
  width: 200px
  before:
    content: $content$
```

