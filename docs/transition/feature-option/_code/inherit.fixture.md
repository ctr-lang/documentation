<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="inherit"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  transition: {
    option: {
      delay: 1s
    }
    opacity: 1

    media: {
      'md': {
        opacity: 0.9
        color: orange
      }
      'lg': {
        // inherit === inheritOption && inheritProperty
        option: {
          inherit: false
        }
        opacity: 0.8
        color: purple
      }
    }
  }
})
```

<!-- css -->
```fixture
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 1s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    opacity: 0.9;
    color: #ffa500;
    transition-delay: 1s, 1s;
    transition-duration: 0.5s, 0.5s;
    transition-property: opacity, color;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
  }
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test {
    opacity: 0.8;
    color: #800080;
    transition-delay: 0s, 0s;
    transition-duration: 0.5s, 0.5s;
    transition-property: opacity, color;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  transition:
    option:
      delay: 1s
    opacity: 1
    media:
      md:
        opacity: 0.9
        color: orange
      lg:
        # inherit === inheritOption && inheritProperty
        option:
          inherit: false
        opacity: 0.8
        color: purple
```

