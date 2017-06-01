<div data-size="250" class="code-cont" data-example="center-right-B">
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
    align: 'center-right' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [center-right, false]
```

```css
.test {
  position: relative;
}
.test > * {
  right: 0;
  top: 50%;
  left: auto;
  bottom: auto;
  position: absolute;
  transform: translate(0, -50%);
}
```
<div class="cf"></div>
