<div data-size="250" class="code-cont" data-example="bottom-right-B">
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
    align: 'bottom-right' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [bottom-right, false]
```

```css
.test {
  position: relative;
}
.test > * {
  right: 0;
  bottom: 0;
  top: auto;
  left: auto;
  position: absolute;
  transform: translate(0, 0);
}
```
<div class="cf"></div>
