<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  elements: {
    // merged into each element
    common: {
      font-size: 1em
    }
    first-child: {
      color: red
    }
    last-child: {
      color: blue
    }
    darkTournament: {
      option: {
        // will be key
        key: 'nth-child(2)'
      }
      color: black
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:first-child {
  color: #f00;
  font-size: 1em;
}
.test:last-child {
  color: #00f;
  font-size: 1em;
}
.test:nth-child(2) {
  color: #000;
  font-size: 1em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  elements:
    # merged into each element
    common:
      font-size: 1em
    first-child:
      color: red
    last-child:
      color: blue
    darkTournament:
      option:
        # will be key
        key: nth-child(2)
      color: black
```

