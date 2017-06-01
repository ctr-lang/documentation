<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="modify"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  height: 200px
  background: teal
  hover: {
    common: {
      option: {
        duration: 1s
      }
      preset: 'sink'
    }
    on: {
      opacity: 1
      transform: translateY(15px)
    }
    non: {
      opacity: 0.5
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 200px;
  background: #008080;
}
.test:hover {
  opacity: 1;
  display: inline-block;
  vertical-align: middle;
  transition-delay: 0s, 0s;
  backface-visibility: hidden;
  transform: translateY(15px);
  transition-duration: 0.3s, 1s;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  transition-property: transform, opacity;
  transition-timing-function: ease-out, cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.5;
  display: inline-block;
  vertical-align: middle;
  transition-delay: 0s, 0s;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition-duration: 0.3s, 1s;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  transition-property: transform, opacity;
  transition-timing-function: ease-out, cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  height: 200px
  background: teal
  hover:
    common:
      option:
        duration: 1s
      preset: sink
    on:
      opacity: 1
      transform: translateY(15px)
    non:
      opacity: 0.5
```

