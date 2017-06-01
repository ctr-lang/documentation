<div data-size="270" class="code-cont" data-example="will-change-specific">
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


<div data-size="270" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      duration: 1s
      will-change: 'opacity' 'background'
    }
    opacity: 1
    color: black
    background: red
  }
})
```

<div data-size="270" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      duration: 1s
      will-change: [opacity, background]
    opacity: 1
    color: black
    background: red
```

```css
.test {
  opacity: 1;
  color: #000;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 1s, 1s, 1s;
  will-change: opacity, background;
  transition-property: opacity, color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
