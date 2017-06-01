<div data-size="100" class="code-cont" data-example="length">
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
  font-size: unit(length((1 2 3 4)), px)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  font-size: unit(length((1 2 3 4)), px)
```

```css
.test {
  width: 200px;
  font-size: 4px;
}
```
<div class="cf"></div>
