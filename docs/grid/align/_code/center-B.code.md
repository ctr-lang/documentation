<div data-size="250" class="code-cont" data-example="center-B">
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
    align: 'center' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [center, false]
```

```css
.test {
  position: relative;
}
.test > * {
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  position: absolute;
  transform: translate(-50%, -50%);
}
```
<div class="cf"></div>
