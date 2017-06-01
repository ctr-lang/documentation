<div data-size="610" class="code-cont" data-example="inheritOption">
    <div class="code">
        <div class="code-wrap">
            <textarea id="stylus"></textarea>
            <textarea id="css"></textarea>
            <div class="edit-code">
                <span>Edit</span>
            </div>
        </div>
    </div>
</div>

<div data-size="610" data-examples="stylus"></div>
```styl
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
        // reset to global defaults
        inheritOption: false
      }
      color: red
      font-size: 1em
    }
  }
})
```

<div data-size="610" data-examples="yaml"></div>
```yaml
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
        # reset to global defaults
        inheritOption: false
      color: red
      font-size: 1em
```

```css
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
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, font-size;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
