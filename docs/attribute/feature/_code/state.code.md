<div data-size="300" class="code-cont" data-example="state">
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


<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    color: red
    // state
    hover-on: {
      font-size: 10px
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    color: red
    # state
    hover-on:
      font-size: 10px
```

```css
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  color: #f00;
}
.test > div[data-role="test"]:hover {
  font-size: 10px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: font-size;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
