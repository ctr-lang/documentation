<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  state: {
    option: {
      key: 'focus'
    }
    on: {
      height: 300px
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:focus {
  height: 300px;
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
  state:
    option:
      key: focus
    on:
      height: 300px
```

