<div data-size="100" class="code-cont" data-example="darken">
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
  color: darken(#D62828, 30%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'darken(#D62828, 30%)'
```

```css
.test {
  width: 200px;
  color: #961c1c;
}
```
<div class="cf"></div>
