<div data-size="280" class="code-cont" data-example="attribute">
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


<div data-size="280" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
    // attribute
    attribute: {
      key: '[data-role="test"]'
      font-size: 1em
    }
  }
})
```

<div data-size="280" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # attribute
    attribute:
      key: '[data-role="test"]'
      font-size: 1em
```

```css
.test {
  width: 200px;
}
.test:not(.bad) {
  height: 200px;
}
.test:not(.bad)[data-role="test"] {
  font-size: 1em;
}
```
<div class="cf"></div>
