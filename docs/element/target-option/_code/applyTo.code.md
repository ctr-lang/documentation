<div data-size="210" class="code-cont" data-example="applyTo">
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

<div data-size="210" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  first-child: {
    option: {
      applyTo: '.applyTo'
    }
    font-size: 20px
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  first-child:
    option:
      applyTo: .applyTo
    font-size: 20px
```

```css
.test {
  width: 200px;
}
.test:first-child .applyTo {
  font-size: 20px;
}
```
<div class="cf"></div>
