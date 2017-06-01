<div data-size="625" class="code-cont" data-example="option-B">
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

<div data-size="625" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    // applied to both on and non
    option: {
     ease: 'ease-in'
     delay: 0.25s
    }
    on: {
      // option values only applied to on
      option: {
        duration: 1s
      }
      opacity: 1
      background: red
    }
    non: {
      // option values only applied to non
      option: {
        duration: 2s
        // overrides option
        ease: 'ease-out'
      }
      opacity: 0.5
      background: blue
    }
  }
})
```

<div data-size="625" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    # applied to both on and non
    option:
     ease: ease-in
     delay: 0.25s
    on:
      # option values only applied to on
      option:
        duration: 1s
      opacity: 1
      background: red
    non:
      # option values only applied to non
      option:
        duration: 2s
        # overrides option
        ease: ease-out
      opacity: 0.5
      background: blue
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  background: #f00;
  transition-duration: 1s, 1s;
  transition-delay: 0.25s, 0.25s;
  transition-property: background, opacity;
  transition-timing-function: ease-in, ease-in;
}
.test:not(:hover) {
  opacity: 0.5;
  background: #00f;
  transition-duration: 2s, 2s;
  transition-delay: 0.25s, 0.25s;
  transition-property: background, opacity;
  transition-timing-function: ease-out, ease-out;
}
```
<div class="cf"></div>
