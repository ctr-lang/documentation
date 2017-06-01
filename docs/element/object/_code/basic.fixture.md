<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  elements: {
    before: {
      content: 'Yusuke Urameshi'
      font-size: 1em
    }
    after: {
      content: 'Hiei'
      font-size: 2em
    }
    last-of-type: {
      font-size: 3em
    }
    yuyuHakusho: {
      option: {
        // will be key
        key: "nth-of-type(2)"
      }
      font-size: 4em
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  font-size: 1em;
  content: "Yusuke Urameshi";
}
.test::after {
  font-size: 2em;
  content: "Hiei";
}
.test:last-of-type {
  font-size: 3em;
}
.test:nth-of-type(2) {
  font-size: 4em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  elements:
    before:
      content: [Yusuke, Urameshi]
      font-size: 1em
    after:
      content: Hiei
      font-size: 2em
    last-of-type:
      font-size: 3em
    yuyuHakusho:
      option:
        # will be key
        key: "nth-of-type(2)"
      font-size: 4em
```

