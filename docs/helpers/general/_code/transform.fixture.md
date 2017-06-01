<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="transform"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transform: {
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  transform: translateX(10px) translateY(20px) scaleX(90deg);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transform:
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
```

