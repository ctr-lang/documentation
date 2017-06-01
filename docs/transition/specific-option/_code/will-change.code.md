<div data-size="250" class="code-cont" data-example="will-change">
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


<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      will-change: true
      duration: 1s
    }
    opacity: 1
    background: red
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      will-change: true
      duration: 1s
    opacity: 1
    background: red
```

```css
.test {
  opacity: 1;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 1s;
  will-change: opacity, background;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
