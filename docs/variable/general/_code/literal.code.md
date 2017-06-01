<div data-size="175" class="code-cont" data-example="literal">
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


<div data-size="175" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    font-size: 12px
  }
  width: 200px
  font-size: '$font-size$'
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test:
  $$:
    font-size: 12px
  width: 200px
  font-size: $font-size$
```

```css
.test {
  width: 200px;
  font-size: 12px;
}
```
<div class="cf"></div>
