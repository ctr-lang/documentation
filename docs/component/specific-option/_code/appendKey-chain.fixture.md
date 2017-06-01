<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="appendKey-chain"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  components: {
    '.one': {
      font-size: 1em
      'component-.two': {
        option: {
          appendKey: true
        }
        font-size: 2em
      }
    }
    '.three': {
      option: {
        appendKey: true
      }
      font-size: 3em
      'component-.four': {
        option: {
          appendKey: true
        }
        font-size: 4em
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test > .one {
  font-size: 1em;
}
.test.three {
  font-size: 3em;
}
.test > .one.two {
  font-size: 2em;
}
.test.three.four {
  font-size: 4em;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  components:
    .one:
      font-size: 1em
      component-.two:
        option:
          appendKey: true
        font-size: 2em
    .three:
      option:
        appendKey: true
      font-size: 3em
      component-.four:
        option:
          appendKey: true
        font-size: 4em
```

