<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  component: {
    key: '#beerMe' '.please'
    font-size: 1em
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > #beerMe {
  font-size: 1em;
}
.test > .please {
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  component:
    key: ['#beerMe', .please]
    font-size: 1em
```

