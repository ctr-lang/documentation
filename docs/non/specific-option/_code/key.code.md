<div data-size="225" class="code-cont" data-example="key">
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
ctr('.test', {
  width: 200px
  non: {
    font-size: 1em
    option: {
      key: '.aClass'
    }
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    font-size: 1em
    option:
      key: .aClass
```

```css
.test {
  width: 200px;
}
.test:not(.aClass) {
  font-size: 1em;
}
```
<div class="cf"></div>
