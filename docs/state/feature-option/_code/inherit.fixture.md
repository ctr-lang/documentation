<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="inherit"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  hover: {
    on: {
      option: {
        delay: 1s
      }
      height: 400px

      media: {
        'md': {
          height: 300px
          color: red
        }
        'sm': {
          // inherit === inheritOption && inheritProperty
          option: {
            inherit: false
          }
          height: 200px
          color: blue
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
  transition-delay: 1s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:hover {
    color: #f00;
    height: 300px;
    transition-delay: 1s, 1s;
    transition-duration: 0.5s, 0.5s;
    transition-property: height, color;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:hover {
    color: #00f;
    height: 200px;
    transition-delay: 0s, 0s;
    transition-duration: 0.5s, 0.5s;
    transition-property: height, color;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  hover:
    on:
      option:
        delay: 1s
      height: 400px
      media:
        md:
          height: 300px
          color: red
        sm:
          # inherit === inheritOption && inheritProperty
          option:
            inherit: false
          height: 200px
          color: blue
```

