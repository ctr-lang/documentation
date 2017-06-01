<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="property-variable"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    myProp: 'color'
  }
  width: 200px
  $myProp$: red
})
```

<!-- css -->
```fixture
.test {
  color: #f00;
  width: 200px;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    myProp: color
  width: 200px
  $myProp$: red
```

