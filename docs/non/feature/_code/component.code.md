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
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
    // component
    component-span: {
      font-size: 1em
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # component
    component-span:
      font-size: 1em
```

```css
.test {
  width: 200px;
}
.test:not(.bad) {
  height: 200px;
}
.test:not(.bad) > span {
  font-size: 1em;
}
```
<div class="cf"></div>
