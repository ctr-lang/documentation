<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="list"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    keyList: '.easy' '#as' '.oneTwoThree'
  }
  width: 200px
  component: {
    key: '$keyList$'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > .easy {
  font-size: 1em;
}
.test > #as {
  font-size: 1em;
}
.test > .oneTwoThree {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    keyList: [.easy, '#as', .oneTwoThree]
  width: 200px
  component:
    key: $keyList$
    font-size: 1em
```

