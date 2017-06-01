<div data-size="100" class="code-cont" data-example="lightness">
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
  color: lightness(#00c, 80%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'lightness(#00c, 80%)'
```

```css
.test {
  width: 200px;
  color: #99f;
}
```
<div class="cf"></div>
