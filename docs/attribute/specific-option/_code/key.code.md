<div data-size="210" class="code-cont" data-example="key">
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
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: '[class*="te"]'
    }
    font-size: 1.5em
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    option:
      key: '[class*="te"]'
    font-size: 1.5em
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="te"] {
  font-size: 1.5em;
}
```
<div class="cf"></div>
