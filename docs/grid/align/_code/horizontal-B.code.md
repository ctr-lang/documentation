<div data-size="250" class="code-cont" data-example="horizontal-B">
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
    align: 'horizontal' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [horizontal, false]
```

```css
.test {
  position: relative;
}
.test > * {
  left: 50%;
  top: auto;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(-50%, 0);
}
```
<div class="cf"></div>
