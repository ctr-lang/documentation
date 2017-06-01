<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="common-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  components: {
    // merged into each component
    common: {
      selector: '~'
      background: red
    }
    '.99Bottles': {
      font-size: 1em
    }
    '#ofBeer': {
      font-size: 2em
    }
    '.onTheWall': {
      font-size: 3em
    }
    random: {
      // specified key
      key: 'li + .takeOneDown'
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
.test ~ .99Bottles {
  font-size: 1em;
  background: #f00;
}
.test ~ #ofBeer {
  font-size: 2em;
  background: #f00;
}
.test ~ .onTheWall {
  font-size: 3em;
  background: #f00;
}
.test ~ li + .takeOneDown {
  font-size: 4em;
  background: #f00;
}
```

<!-- yaml -->
```fixture
'.test':
  width: 200px
  components:
    # merged into each component
    common:
      selector: '~'
      background: red
    '.99Bottles':
      font-size: 1em
    '#ofBeer':
      font-size: 2em
    '.onTheWall':
      font-size: 3em
    random:
      # specified key
      key: 'li + .takeOneDown'
      font-size: 4em
```

