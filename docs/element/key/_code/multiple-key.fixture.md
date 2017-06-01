<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple-key"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  customElement: {
    key: 'before' 'after' 'first-child' 'nth-of-type(2)'
    position: absolute
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test::before {
  position: absolute;
}
.test::after {
  position: absolute;
}
.test:first-child {
  position: absolute;
}
.test:nth-of-type(2) {
  position: absolute;
}
```

<!-- yaml -->
```fixture
'.test':
  width: 200px
  customElement:
    key: ['before', 'after', 'first-child', 'nth-of-type(2)']
    position: absolute
```

