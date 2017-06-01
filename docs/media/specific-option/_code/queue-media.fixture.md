<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="queue-media"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  option: {
    global: {
      queueMedia: false
    }
  }
  width: 200px
  // now processed in the order, it's received
  media--md: {
    background: blue
  }
  comp-div: {
    width: 400px
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media (max-width: 800px) {
  .test {
    background: #00f;
  }
}
.test > div {
  width: 400px;
}

```

<!-- yaml -->
```fixture
.test:
  option:
    global:
      queueMedia: false
  width: 200px
  # now processed in the order, its received
  media--md:
    background: blue
  comp-div:
    width: 400px
```

