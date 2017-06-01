<div data-size="500" class="code-cont" data-example="option-A">
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

<div data-size="500" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    // option values applied to both on and non
    option: {
      // transition-duration
      duration: 1s
      // transition-delay
      delay: 0.5s
      // transition-timing-function
      ease: 'ease-in'
    }
    on: {
      background: red
      opacity: 1
    }
    non: {
      background: blue
      opacity: 0.5
    }
  }
})
```

<div data-size="500" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    # option values applied to both on and non
    option:
      # transition-duration
      duration: 1s
      # transition-delay
      delay: 0.5s
      # transition-timing-function
      ease: ease-in
    on:
      background: red
      opacity: 1
    non:
      background: blue
      opacity: 0.5
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  background: #f00;
  transition-duration: 1s, 1s;
  transition-delay: 0.5s, 0.5s;
  transition-property: background, opacity;
  transition-timing-function: ease-in, ease-in;
}
.test:not(:hover) {
  opacity: 0.5;
  background: #00f;
  transition-duration: 1s, 1s;
  transition-delay: 0.5s, 0.5s;
  transition-property: background, opacity;
  transition-timing-function: ease-in, ease-in;
}
```
<div class="cf"></div>
