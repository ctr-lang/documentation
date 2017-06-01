<div data-size="210" class="code-cont" data-example="empty">
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


<div data-size="210" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-non: {
    shorthand: {
      height: 1s 1s 'ease-in'
      width: 2s 2s 'ease-out'
    }
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-non:
    shorthand:
      height: [1s, 1s, ease-in]
      width: [2s, 2s, ease-out]
```

```css
.test {
  width: 200px;
}
.test:not(:hover) {
  transition-delay: 1s, 2s;
  transition-duration: 1s, 2s;
  transition-property: height, width;
  transition-timing-function: ease-in, ease-out;
}
```
<div class="cf"></div>
