<div data-size="100" class="code-cont" data-example="saturation">
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
  color: saturation(#00c, 50%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'saturation(#00c, 50%)'
```

```css
.test {
  width: 200px;
  color: #339;
}
```
<div class="cf"></div>
