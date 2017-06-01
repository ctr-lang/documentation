<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  $$: {
    objectA: {
      height: 400px
    }
    objectB: {
      hover: {
        on: {
          opacity: 1
        }
        non: {
          opacity: 0.5
        }
      }
    }
  }
  width: 200px
  merge: '$objectA$' '$objectB$'
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  height: 400px;
}
.test:hover {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
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
  $$:
    objectA:
      height: 400px
    objectB:
      hover:
        on:
          opacity: 1
        non:
          opacity: 0.5
  width: 200px
  merge: [$objectA$, $objectB$]
```

