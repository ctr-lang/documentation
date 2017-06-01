<div data-size="150" class="code-cont" data-example="applyTo">
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

<div data-size="150" data-examples="stylus"></div>
```styl
ctr('.test', {
  option: {
    applyTo: 'span'
  }
  width: 200px
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  option:
    applyTo: span
  width: 200px
```

```css
.test span {
  width: 200px;
}
```
<div class="cf"></div>
