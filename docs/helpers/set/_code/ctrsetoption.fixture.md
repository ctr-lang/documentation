<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="ctrsetoption"></div>

<!-- stylus -->
```fixture
ctrSetOption({
  hover: {
    duration: 2s
    delay: 0.5s
    ease: 'ease-in'
  }
})

ctr('.test', {
  hover: {
    on: {
      width: 400px
    }
    non: {
      width: 200px
    }
  }
})
```

<!-- css -->
```fixture
.test:hover {
  width: 400px;
  transition-delay: 0.5s;
  transition-duration: 2s;
  transition-property: width;
  transition-timing-function: ease-in;
}
.test:not(:hover) {
  width: 200px;
  transition-delay: 0.5s;
  transition-duration: 2s;
  transition-property: width;
  transition-timing-function: ease-in;
}
```

<!-- yaml -->
```fixture
ctr:::setOption:
  hover:
    duration: 2s
    delay: 0.5s
    ease: ease-in

.test:
  hover:
    on:
      width: 400px
    non:
      width: 200px
```

