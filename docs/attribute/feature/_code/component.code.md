<div data-size="250" class="code-cont" data-example="component">
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
    key: '[data-role="test"]'
    width: 300px
    // component
    component-span: {
      font-size: 10px
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    width: 300px
    # component
    component-span:
      font-size: 10px
```

```css
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  width: 300px;
}
.test > div[data-role="test"] > span {
  font-size: 10px;
}
```
<div class="cf"></div>
