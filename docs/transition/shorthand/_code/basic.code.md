<div data-size="210" class="code-cont" data-example="basic">
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
  transition: {
    opacity: 1
    shorthand: {
      opacity: 1s 10s 'ease-out'
    }
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    shorthand:
      opacity: [1s, 10s, ease-out]
```

```css
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 10s;
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}
```
<div class="cf"></div>
