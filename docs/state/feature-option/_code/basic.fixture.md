<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="basic"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  before: {
    content: 'hello'
  }
  hover-on: {
    option: {
      duration: 2s
      delay: 0.5s
      ease: 'ease-in'
    }
    height: 400px

    // inherits options
    element: {
      // option Object becomes both the element
      // and the state option
      option: {
        // element key
        key: 'before'
        // override 2s duration
        shorthand: {
          font-size: 1s
        }
      }
      color: red
      font-size: 1em
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
  content: "hello";
}
.test:hover {
  height: 400px;
  transition-delay: 0.5s;
  transition-duration: 2s;
  transition-property: height;
  transition-timing-function: ease-in;
}
.test:hover::before {
  color: #f00;
  font-size: 1em;
  transition-duration: 1s, 2s;
  transition-delay: 0.5s, 0.5s;
  transition-property: font-size, color;
  transition-timing-function: ease-in, ease-in;
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  before:
    content: hello
  hover-on:
    option:
      duration: 2s
      delay: 0.5s
      ease: ease-in
    height: 400px
    # inherits options
    element:
      # option Object becomes both the element
      # and the state option
      option:
        # element key
        key: before
        # override 2s duration
        shorthand:
          font-size: 1s
      color: red
      font-size: 1em
```

