<div data-size="225" class="code-cont" data-example="multiple-key">
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


<div data-size="225" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[class*="kool"]' 'class*="te"'
    font-size: 1em
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    key: ['[class*="kool"]', class*="te"]
    font-size: 1em
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="kool"] {
  font-size: 1em;
}
.test > div[class*="te"] {
  font-size: 1em;
}
```
<div class="cf"></div>
