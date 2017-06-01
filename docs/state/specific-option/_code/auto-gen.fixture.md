<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="auto-gen"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  link: {
    option: {
      autoGen: true
    }
    on: {
      color: red
    }
    non: {
      color: blue
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:link {
  color: #f00;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:link) {
  color: #00f;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  link:
    option:
      autoGen: true
    on:
      color: red
    non:
      color: blue
```

