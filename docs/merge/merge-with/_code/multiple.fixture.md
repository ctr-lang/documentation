<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    customStateOpacity: {
      key: 'hover'
      on: {
        opacity: 1
      }
    }
    customStateColor: {
      key: 'hover'
      on: {
        color: red
      }
    }
  }
  width: 200px
  mergeWith: '$customStateOpacity$' '$customStateColor$'
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
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  $$:
    customStateOpacity:
      key: hover
      on:
        opacity: 1
    customStateColor:
      key: hover
      on:
        color: red
  width: 200px
  mergeWith: [$customStateOpacity$, $customStateColor$]
```

