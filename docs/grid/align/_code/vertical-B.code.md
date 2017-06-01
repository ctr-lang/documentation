<div data-size="250" class="code-cont" data-example="vertical-B">
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


<div data-size="250" data-examples="stylus"></div>
```styl
// non-flex
ctr('.test', {
  grid: {
    align: 'vertical' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [vertical, false]
```

```css
.test {
  position: relative;
}
.test > * {
  top: 50%;
  left: auto;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(0, -50%);
}
```
<div class="cf"></div>
