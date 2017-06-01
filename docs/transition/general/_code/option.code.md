<div data-size="340" class="code-cont" data-example="option">
    <div class="example10 code">
        <div class="code-wrap">
            <textarea id="stylus"></textarea>
            <textarea id="css"></textarea>
            <div class="edit-code">
                <span>Edit</span>
            </div>
        </div>
    </div>
</div>

<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      // transition-delay
      delay: 20s
      // transition-duration
      duration: 4s
      // transition-timing-function
      ease: ease-out
    }
    opacity: 1
    background: red
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      # transition-delay
      delay: 20s
      # transition-duration
      duration: 4s
      # transition-timing-function
      ease: ease-out
    opacity: 1
    background: red
```

```css
.test {
  opacity: 1;
  width: 200px;
  background: #f00;
  transition-delay: 20s, 20s;
  transition-duration: 4s, 4s;
  transition-property: opacity, background;
  transition-timing-function: ease-out, ease-out;
}
```
<div class="cf"></div>
