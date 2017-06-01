<div data-size="210" class="code-cont" data-example="first-last">
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


<div data-size="210" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  element: {
    key: 'first-last()'
    height: 400px
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  element:
    key: first-last()
    height: 400px
```

```css
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
}
.test:last-child {
  height: 400px;
}
```
<div class="cf"></div>
