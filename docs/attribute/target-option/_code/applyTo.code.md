<div data-size="250" class="code-cont" data-example="applyTo">
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
      applyTo: '.applyToTest'
    }
    font-size: 2em
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
      applyTo: .applyToTest
    font-size: 2em
```

```css
.test > div {
  width: 200px;
}
.test > div[class$="test"] .applyToTest {
  font-size: 2em;
}
```
<div class="cf"></div>
