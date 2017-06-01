<div data-size="250" class="code-cont" data-example="bottom-left-B">
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
    align: 'bottom-left' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [bottom-left, false]
```

```css
.test {
  position: relative;
}
.test > * {
  left: 0;
  bottom: 0;
  top: auto;
  right: auto;
  position: absolute;
  transform: translate(-50%, 0);
}
```
<div class="cf"></div>
