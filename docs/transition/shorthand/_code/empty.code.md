<div data-size="275" class="code-cont" data-example="empty">
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
  transition: {
    option: {
      ease: 'ease-in'
    }
    shorthand: {
      background: 1s
      opacity: 0.5s 0.25s 'ease-out'
    }
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      ease: ease-in
    shorthand:
      background: 1s
      opacity: [0.5s, 0.25s, ease-out]
```

```css
.test {
  width: 200px;
  transition-delay: 0s, 0.25s;
  transition-duration: 1s, 0.5s;
  transition-property: background, opacity;
  transition-timing-function: ease-in, ease-out;
}
```
<div class="cf"></div>
