<div data-size="590" class="code-cont" data-example="basic">
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

<div data-size="590" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      duration: 2s
      delay: 0.5s
      ease: 'ease-in'
    }
    opacity: 1

    // inherits options
    element: {
      // option Object becomes both the element
      // and the transition option
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

<div data-size="590" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      duration: 2s
      delay: 0.5s
      ease: ease-in
    opacity: 1
    # inherits options
    element:
      # option Object becomes both the element
      # and the transition option
      option:
        # element key
        key: before
        # override 2s duration
        shorthand:
          font-size: 1s
      color: red
      font-size: 1em
```

```css
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 0.5s;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
.test::before {
  color: #f00;
  font-size: 1em;
  transition-duration: 1s, 2s;
  transition-delay: 0.5s, 0.5s;
  transition-property: font-size, color;
  transition-timing-function: ease-in, ease-in;
}
```
<div class="cf"></div>
