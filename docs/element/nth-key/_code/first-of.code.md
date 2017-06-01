<div data-size="170" class="code-cont" data-example="first-of">
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
    key: 'first-of(10)'
    height: 400px
  }
})
```

<div data-size="170" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  element:
    key: first-of(10)
    height: 400px
```

```css
.test {
  width: 200px;
}
.test:nth-last-child(10):first-child {
  height: 400px;
}
```
<div class="cf"></div>
