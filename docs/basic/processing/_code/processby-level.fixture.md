<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="processby-level" class="code-cont"></div>

<!-- stylus -->
```fixture
// processBy: level (default)
// The numbers represent the order,
// in which the style is complied
ctr('.test', {
  // 1
  width: 111px
  // 2
  comp-div: {
    width: 222px
    // 4
    comp-p: {
      width: 333px
      // 7
      media--lg: {
        width: 444px
      }
    }
  }
  medias: {
    // 5
    '-sm': {
      width: 11px
      // 8
      before: {
        content: 'cool'
      }
    }
    // 6
    '-md': {
      width: 22px
    }
  }
  // 3
  hover-on: {
    color: red
  }
})
```

<!-- css -->
```fixture
.test {
  width: 111px;
}
.test > div {
  width: 222px;
}
.test:hover {
  color: #f00;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test > div > p {
  width: 333px;
}
@media (max-width: 600px) {
  .test {
    width: 11px;
  }
}
@media (max-width: 800px) {
  .test {
    width: 22px;
  }
}
@media (max-width: 1050px) {
  .test > div > p {
    width: 444px;
  }
}
@media (max-width: 600px) {
  .test::before {
    content: "cool";
  }
}
```

<!-- yaml -->
```fixture
# processBy: level (default)
# The numbers represent the order,
# in which the style is complied
.test:
  # 1
  width: 111px
  # 2
  comp-div:
    width: 222px
    # 4
    comp-p:
      width: 333px
      # 7
      media--lg:
        width: 444px
  medias:
    # 5
    -sm:
      width: 11px
      # 8
      before:
        content: cool
    # 6
    -md:
      width: 22px
  # 3
  hover-on:
    color: red
```

