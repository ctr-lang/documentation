<div data-size="150" class="code-cont" data-example="edit-B">
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
// Specifiy custom edit color
ctr('.test', {
  width: 200px
  edit: alpha(teal, 0.1)
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
# Specifiy custom edit color
.test:
  width: 200px
  edit: alpha(teal, 0.1)
```

```css
.test {
  width: 200px;
}
.test * {
  background: rgba(0,128,128,0.1);
}
```
<div class="cf"></div>
