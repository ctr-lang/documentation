<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctrSetClass('Box', {
  $$: {
    size: 200px
    preset: {
      small: {
        size: 100px
      }
      large: {
        size: 300px
      }
    }
  }
  width: '$size$'
  height: '$size$'
})

ctr('.test', {
  width: 200px
  components: {
    '.small-box': {
      extend-Box: {
        preset: 'small'
      }
    }
    '.large-box': {
      extend-Box: {
        preset: 'large'
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
.test > .small-box {
  width: 100px;
  height: 100px;
}
.test > .large-box {
  width: 300px;
  height: 300px;
}
```

<!-- yaml -->
```fixture
ctr:::setClass:Box:
  $$:
    size: 200px
    preset:
      small:
        size: 100px
      large:
        size: 300px
  width: $size$
  height: $size$

.test:
  width: 200px
  components:
    .small-box:
      extend-Box:
        preset: small
    .large-box:
      extend-Box:
        preset: large
```

