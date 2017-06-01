<div data-size="175" class="code-cont" data-example="basic">
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
ctr('.test > a', {
  width: 200px
  attribute: {
    key: '[href^="#"]'
    font-size: 1em
  }
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test > a:
  width: 200px
  attribute:
    key: '[href^="#"]'
    font-size: 1em
```

```css
.test > a {
  width: 200px;
}
.test > a[href^="#"] {
  font-size: 1em;
}
```
<div class="cf"></div>
