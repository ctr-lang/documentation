<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  states: {
    hover: {
      on: {
        opacity: 1
      }
      non: {
        opacity: 0.75
      }
    }
    active: {
      color: red
    }
    myCoolLink: {
      option: {
        // specified key
        key: 'link'
      }
      on: {
        color: green
      }
      non: {
        color: purple
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
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.75;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:active {
  color: #f00;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:active) {
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:link {
  color: #008000;
}
.test:not(:link) {
  color: #800080;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  states:
    hover:
      on:
        opacity: 1
      non:
        opacity: 0.75
    active:
      color: red
    myCoolLink:
      option:
        # specified key
        key: link
      on:
        color: green
      non:
        color: purple
```

