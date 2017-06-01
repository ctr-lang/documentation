<div data-size="175" class="code-cont" data-example="hyphenated-attribute">
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


<div data-size="175" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  'attribute-class*="coffee"': {
    background: red
    font-size: 1.5em
  }
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute-class*="coffee":
    background: red
    font-size: 1.5em
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="coffee"] {
  background: #f00;
  font-size: 1.5em;
}
```
<div class="cf"></div>
