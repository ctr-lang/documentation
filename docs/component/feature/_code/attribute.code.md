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
  component: {
    key: 'section'
    font-size: 1em
    // attribute
    attribute: {
      key: '[data-role="test"]'
      color: blue
    }
  }
})
```

<div data-size="280" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # attribute
    attribute:
      key: '[data-role="test"]'
      color: blue
```

```css
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
}
.test > section[data-role="test"] {
  color: #00f;
}
```
<div class="cf"></div>
