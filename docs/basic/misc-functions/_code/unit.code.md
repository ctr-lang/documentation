<div data-size="100" class="code-cont" data-example="unit">
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
  font-size: unit(15%, px)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  font-size: unit(15%, px)
```

```css
.test {
  width: 200px;
  font-size: 15px;
}
```
<div class="cf"></div>
