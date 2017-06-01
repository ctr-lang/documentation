<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="state-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: 'test'
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
.test::before {
  content: "test";
}
.test:hover::before {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover)::before {
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
  before:
    content: test
    # state
    hover:
      on:
        opacity: 1
      non:
        opacity: 0.5
```

