<div data-size="150" class="code-cont" data-example="appendTo">
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
    appendTo: '.appendToClass'
  }
  width: 200px
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  option:
    appendTo: .appendToClass
  width: 200px
```

```css
.test.appendToClass {
  width: 200px;
}
```
<div class="cf"></div>
