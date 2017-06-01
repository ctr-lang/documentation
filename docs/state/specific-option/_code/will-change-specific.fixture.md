<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="will-change-specific"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      will-change: 'opacity' 'transform'
    }
    color: red
    opacity: 1
    transform: translateY(10px)
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
  color: #f00;
  transform: translateY(10px);
  transition-delay: 0s, 0s, 0s;
  will-change: opacity, transform;
  transition-duration: 0.5s, 0.5s, 0.5s;
  transition-property: transform, color, opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover-on:
    option:
      will-change: [opacity, transform]
    color: red
    opacity: 1
    transform: translateY(10px)
```

