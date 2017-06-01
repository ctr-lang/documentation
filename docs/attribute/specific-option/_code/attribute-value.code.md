<div data-size="230" class="code-cont" data-example="attribute-value">
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


<div data-size="230" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attribute: {
    option: {
      key: 'class*'
      value: 'te'
    }
    font-size: 2em
  }
})
```

<div data-size="230" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    option:
      key: class*
      value: te
    font-size: 2em
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="te"] {
  font-size: 2em;
}
```
<div class="cf"></div>
