<div data-size="100" class="code-cont" data-example="min">
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


<div data-size="100" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  z-index: min(1.122, 11.22)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  z-index: min(1.122, 11.22)
```

```css
.test {
  width: 200px;
  z-index: 1.122;
}
```
<div class="cf"></div>
