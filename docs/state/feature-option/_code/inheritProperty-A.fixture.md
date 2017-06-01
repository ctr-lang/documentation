<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="inheritProperty-A"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      height: 400px

      media: {
        'md': {
          // No need to regenerate of transition properties
          // for media since it can inherit the parents
          height: 300px
        }
        'sm': {
          height: 200px
          // Due to a different option the transition
          // properties will need to be regenerate
          option: {
            duration: 2s
          }
        }
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
.test:hover {
  height: 400px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:hover {
    height: 300px;
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:hover {
    height: 200px;
    transition-delay: 0s;
    transition-duration: 2s;
    transition-property: height;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      height: 400px
      media:
        md:
          # No need to regenerate of transition properties
          # for media since it can inherit the parents
          height: 300px
        sm:
          height: 200px
          # Due to a different option the transition
          # properties will need to be regenerate
          option:
            duration: 2s
```

