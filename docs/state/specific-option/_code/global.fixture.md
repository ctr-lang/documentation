<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="global"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      height: 200px
    }
    non: {
      option: {
        global: true
      }
      height: 100px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 100px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:hover {
  height: 200px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      height: 200px
    non:
      option:
        global: true
      height: 100px
```

