<div data-size="100" class="code-cont" data-example="lighten">
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
  color: lighten(#2c2c2c, 30%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'lighten(#2c2c2c, 30%)'
```

```css
.test {
  width: 200px;
  color: #6b6b6b;
}
```
<div class="cf"></div>
