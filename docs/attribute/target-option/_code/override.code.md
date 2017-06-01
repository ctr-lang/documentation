<div data-size="250" class="code-cont" data-example="override">
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
      override: '#override'
    }
    font-size: 3em
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
      override: '#override'
    font-size: 3em
```

```css
.test > div {
  width: 200px;
}
#override {
  font-size: 3em;
}
```
<div class="cf"></div>
