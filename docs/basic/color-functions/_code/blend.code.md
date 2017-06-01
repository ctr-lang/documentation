<div data-size="100" class="code-cont" data-example="blend">
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
  color: blend(rgba(lime, 0.5), rgba(red, 0.25))
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: blend(rgba(lime, 0.5), rgba(red, 0.25))
```

```css
.test {
  width: 200px;
  color: rgba(128,128,0,0.625);
}
```
<div class="cf"></div>
