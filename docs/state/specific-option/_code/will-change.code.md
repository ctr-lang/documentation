<div data-size="275" class="code-cont" data-example="will-change">
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

<div data-size="275" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      will-change: true
    }
    opacity: 1
    transform: translateY(10px)
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    option:
      will-change: true
    opacity: 1
    transform: translateY(10px)
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  transition-delay: 0s, 0s;
  transform: translateY(10px);
  transition-duration: 0.5s, 0.5s;
  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
