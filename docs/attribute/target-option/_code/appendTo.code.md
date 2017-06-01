<div data-size="250" class="code-cont" data-example="appendTo">
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
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: '[class$="test"]'
      appendTo: ':first-child'
    }
    font-size: 1em
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    option:
      key: '[class$="test"]'
      appendTo: :first-child
    font-size: 1em
```

```css
.test > div {
  width: 200px;
}
.test > div[class$="test"]:first-child {
  font-size: 1em;
}
```
<div class="cf"></div>
