<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="internal"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    myObject: {
      height: 200px
      background: red
    }
  }
  width: 200px
  merge: '$myObject$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 200px;
  background: #f00;
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    myObject:
      height: 200px
      background: red
  width: 200px
  merge: $myObject$
```

