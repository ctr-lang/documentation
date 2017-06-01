<div data-size="100" class="code-cont" data-example="spin">
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
  color: spin(#ff0000, 90deg)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'spin(#ff0000, 90deg)'
```

```css
.test {
  width: 200px;
  color: #80ff00;
}
```
<div class="cf"></div>
