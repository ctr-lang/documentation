<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="state-B"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // state
    hover: {
      on: {
        opacity: 1
      }
      non: {
        opacity: 0.5
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
}
.test:first-child:hover {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:first-child:not(:hover) {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  first-child:
    height: 400px
    # state
    hover:
      on:
        opacity: 1
      non:
        opacity: 0.5
```

