<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    opacity: 1
    shorthand: {
      height: 1s
      opacity: 0.5s 0.25s ease-out
      // This property is fictional,
      // the point is the sky is the limit
      beer: 100s 100s 'funky-bis'
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  height: 400px;
  transition-delay: 0s, 0.25s, 100s;
  transition-duration: 1s, 0.5s, 100s;
  transition-property: height, opacity, beer;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), ease-out, funky-bis;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    height: 400px
    opacity: 1
    shorthand:
      height: 1s
      opacity: [0.5s, 0.25s, ease-out]
      # This property is fictional,
      # the point is the sky is the limit
      beer: [100s, 100s, funky-bis]
```

