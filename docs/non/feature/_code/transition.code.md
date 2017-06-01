<div data-size="250" class="code-cont" data-example="transition">
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
  non: {
    key: '.bad'
    height: 200px
    // transition
    transition: {
      opacity: 1
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # transition
    transition:
      opacity: 1
```

```css
.test {
  width: 200px;
}
.test:not(.bad) {
  opacity: 1;
  height: 200px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
