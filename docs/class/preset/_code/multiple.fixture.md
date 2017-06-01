<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctrSetClass('Box', {
  $$: {
    size: 200px
    background: red
    preset: {
      size: {
        small: {
          size: 100px
        }
        large: {
          size: 300px
        }
      }
      color: {
        primary: {
          background: blue
        }
        secondary: {
          background: black
        }
      }
    }
  }
  width: '$size$'
  height: '$size$'
  background: '$background$'
})

ctr('.test', {
  width: 200px
  components: {
    '.small-box': {
      extend-Box: {
        preset: 'size.small' 'color.secondary'
      }
    }
    '.large-box': {
      extend-Box: {
        // secondary will not overwrite primary
        preset: 'size.large' 'color.primary' 'color.secondary'
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
  background: #000;
}
.test > .large-box {
  width: 300px;
  height: 300px;
  background: #00f;
}
```

<!-- yaml -->
```fixture
ctr:::setClass:Box:
  $$:
    size: 200px
    background: red
    preset:
      size:
        small:
          size: 100px
        large:
          size: 300px
      color:
        primary:
          background: blue
        secondary:
          background: black
  width: $size$
  height: $size$
  background: $background$

.test:
  width: 200px
  components:
    .small-box:
      extend-Box:
        preset: [size.small, color.secondary]
    .large-box:
      extend-Box:
        # secondary will not overwrite primary
        preset: [size.large, color.primary, color.secondary]
```

