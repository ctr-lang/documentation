<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="usage"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  height: 200px
  background: teal
  hover: {
    preset: 'sink'
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
  transition-delay: 0s;
  display: inline-block;
  vertical-align: middle;
  transition-duration: 0.3s;
  transform: translateY(8px);
  backface-visibility: hidden;
  transition-property: transform;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  transition-timing-function: ease-out;
}
.test:not(:hover) {
  transition-delay: 0s;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  transition-duration: 0.3s;
  backface-visibility: hidden;
  transition-property: transform;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  transition-timing-function: ease-out;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  height: 200px
  background: teal
  hover:
    preset: sink
```

