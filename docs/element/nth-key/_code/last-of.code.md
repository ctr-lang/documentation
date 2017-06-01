<div data-size="170" class="code-cont" data-example="last-of">
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


<div data-size="170" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  element: {
    key: 'last-of(10)'
    height: 400px
  }
})
```

<div data-size="170" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  element:
    key: last-of(10)
    height: 400px
```

```css
.test {
  width: 200px;
}
.test:nth-of-type(10):nth-last-of-type(1) {
  height: 400px;
}
```
<div class="cf"></div>
