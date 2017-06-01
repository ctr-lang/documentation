<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="var-not-found"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    height: 200px
  }
  width: 200px
  // wrong var name
  height: '$not-height$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: "$var-not-found$";
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    height: 200px
  width: 200px
  # wrong var name
  height: $not-height$
```

