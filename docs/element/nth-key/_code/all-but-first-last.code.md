<div data-size="170" class="code-cont" data-example="all-but-first-last">
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
    key: 'all-but-first-last(2)'
    height: 400px
  }
})
```

<div data-size="170" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  element:
    key: all-but-first-last(2)
    height: 400px
```

```css
.test {
  width: 200px;
}
.test:nth-child(n+2):nth-last-child(n+2) {
  height: 400px;
}
```
<div class="cf"></div>
